<?php

/**
 * Twig to PHP Patterns Parser
 * 
 * This will slowly be broken up into smaller, testable functions that
 * can be refactored into node if we choose to go that route.
 * 
 * @since 06/26/2019
 * @author Lara Schenck and Amit Sannad
 */

function twig_to_php_parser( $patterns_dir_path, $template_dir_path ) {
	$twig_files        = [];

	$twig_dir_iterator      = new \RecursiveDirectoryIterator( $patterns_dir_path );
	$recirsive_dir_iterator = new \RecursiveIteratorIterator( $twig_dir_iterator );
	$all_twig_files         = new \RegexIterator( $recirsive_dir_iterator, '/\.twig/' );

	// Get all twig twig_files to generate template for
	foreach ( $all_twig_files as $info ) {
		$twig_files[] = $info->getPathname();
	}

	foreach ( $twig_files as $twig_file ) {

		// All components of path in array split by /
		$twig_path_arr = explode( '/', $twig_file );
		
		// Get last three parts of the file that includes directory
		$path_info = array_slice( $twig_path_arr, count( $twig_path_arr ) - 3, 3 );

		// Generate directory where we wanna write PHP template. Remove any thing thats not alpha string i.e. remove specials chars including numbers
		// "/patterns/06-components/c-title/c-title.twig" => "/template-parts/patterns/components/c-title.php"
		$template_dir = $template_dir_path . '/' . preg_replace( '/[^A-Za-z]/', '', $path_info[0] );

		// Generate path where we wanna write php template
		$path = $template_dir . '/' . str_replace( '.twig', '.php', $path_info[2] );

		if ( file_exists( $path ) ) {

			// Get file time of template and twig
			$fmtime_twig     = filemtime( $twig_file );
			$fmtime_template = filemtime( $path );

			// Compare twig file time to php template filetime. If twig file is newer than php template then overwrite the php template
			// This is to make sure we are not unnecessarily overwriting the php template
			if ( $fmtime_twig < $fmtime_template ) {

				// NOTE: Ignoring this just to fixing pipeline, however it's showing 100% coverage in local.
				// Ignoring this line is suggested by teach lead.
				continue; // @codeCoverageIgnore
			}

		}

		// Get matches for `{% if VARIABLE %}`
		// If condition regex.
		// https://regex101.com/r/Lnoaau/1
		$if_condition_regex = '/({% if\s*)(\w*)(\s*%})/';

		// Get matches for `{% for item in VARIABLE`
		// https://regex101.com/r/lceCnz/2/
		$loop_regex = '/({% for item in\s*)(\w*)/';

		// Get matches for {{ name }}
		// https://regex101.com/r/ACN0rE/2
		$mustache_regex = '/({{\s*)(\w*?\|?\w*)(\s*}})/';

		// Get matches for {% include "path/c-element.twig" with data %}
		// https://regex101.com/r/ns5kBR/2
		$include_regex = '/({%\sinclude ")(.*[c-|o-|l-].*\/)(.*)(.twig)(" with )(\w*)(.*\s%})/';

		$twig_markup = \file_get_contents( $twig_file );

		$general_replacers = [
			'{#'           => '<?php /*' . "\n",
			'#}'           => '*/' . "\n" . '?>',
			'{% endif %}'  => '<?php } ?>',
			'{% else %}'   => '<?php } else { ?>',
			'{% endfor %}' => '<?php } ?>',
			'{% if '       => '<?php if ( $',
			'%}'           => ') { ?>',
		];

		// Get matches for each regex and store in own arrays.
		preg_match_all( $if_condition_regex, $twig_markup, $if_condition_matches );
		preg_match_all( $loop_regex, $twig_markup, $loop_matches );
		preg_match_all( $mustache_regex, $twig_markup, $mustache_matches );
		preg_match_all( $include_regex, $twig_markup, $include_matches );

		// Prepare empty arrays to gather the replacements as they are processed.
		$if_condition_replacements = [];
		$loop_replacements         = [];
		$mustache_replacements     = [];
		$include_replacements      = [];

		$count = 0;
		foreach ( $if_condition_matches[0] as $key => $match ) {

			$variable_name = $if_condition_matches[2][ $count ];

			$if_condition_replacements[ $count ] = '<?php if ( ! empty( $' . $variable_name . ' ) ) { ?>';

			$count ++;
		}

		$count = 0;
		foreach ( $loop_matches[0] as $key => $match ) {

			$variable_name = $loop_matches[2][ $count ];

			$loop_replacements[ $count ] = '<?php foreach ( $' . $variable_name . ' ?? [] as $item';

			$count ++;
		}

		$count = 0;
		foreach ( $mustache_matches[0] as $key => $match ) {

			$variable_name = $mustache_matches[2][ $count ];
			$is_attr       = strpos( $match, 'class' ) || strpos( $match, 'name' ) || strpos( $match, 'attr' );
			$is_url        = strpos( $match, 'url' );
			$is_text       = strpos( $match, 'text' );
			$is_data_attr  = strpos( $match, 'attributes' );
			$is_markup     = strpos( $match, 'markup' );

			if ( ! empty( $is_url ) ) {
				$mustache_replacements[ $count ] = '<?php echo esc_url( $' . $variable_name . ' ?? \'\' ); ?>';
			}

			if ( ! empty( $is_attr ) || ! empty( $is_data_attr ) ) {
				$mustache_replacements[ $count ] = '<?php echo esc_attr( $' . $variable_name . ' ?? \'\' ); ?>';
			}

			if ( ! empty( $is_text ) ) {
				$mustache_replacements[ $count ] = '<?php echo esc_html( $' . $variable_name . ' ?? \'\' ); ?>';
			}

			if ( ! empty( $is_markup ) ) {
				$mustache_replacements[ $count ] = '<?php echo wp_kses_post( $' . $variable_name . ' ?? \'\' ); ?>';
			}

			$count ++;
		}

		// Reset the count to begin accumulating $include_replacements.
		$count = 0;

		foreach ( $include_matches[0] as $include ) {
			$include_replacements[ $count ] = parse_include_path(
				$include,
				$include_matches[3][ $count ],
				$include_matches[6][ $count ]
			);
			$count ++;
		}

		// Merge replacements and matches arrays.
		$all_matches      = (array) array_merge( $mustache_matches[0], $include_matches[0], $loop_matches[0], $if_condition_matches[0] );
		$all_replacements = (array) array_merge( $mustache_replacements, $include_replacements, $loop_replacements, $if_condition_replacements );

		// First replace matches from the regex's, then apply the general replacements.
		$twig_markup_replace_main     = str_replace( $all_matches, $all_replacements, $twig_markup );
		$twig_markup_replace_complete = str_replace( array_keys( (array) $general_replacers ), array_values( $general_replacers ), $twig_markup_replace_main );

		$php_markup  = "<?php\n// This is a generated file. Refer to the relevant Twig file for adjusting this markup.\n?>\n";
		$php_markup .= $twig_markup_replace_complete;

		if ( ! file_exists( $template_dir ) ) {
			mkdir( $template_dir );
		}

		file_put_contents( $path, $php_markup );

	}
}

/**
 * Parse Twig Includes
 * 
 * @param string $twig_include Full include expression
 * @param string $pattern_name o-nav
 * @param string $data_name o_nav / usually name of pattern with underscores
 * 
 * @return string PMC::render_template call
 */
function parse_include_path( $twig_include, $pattern_name, $data_name ) {
	$theme_dir = 'CHILD_THEME_PATH';
	$start_name = substr( $pattern_name, 0, 2 );

	// 08/09/19 - Disabling larva/core theme logic
	// if ( strpos( $twig_include, "@larva" ) ) {
	// 	$theme_dir = 'PMC_CORE_PATH';
	// }

	if ( 'c-' === $start_name ) {
		$directory = 'components';
	} elseif ( 'o-' === $start_name ) {
		$directory = 'objects';
	} elseif ( '-' !== substr( $pattern_name, 1, 2 ) ) { // If there is no namespace, it is a module.
		$directory = 'modules';
	}

	 return "<?php \PMC::render_template( " . $theme_dir . " . '/template-parts/patterns/" . $directory . "/" . $pattern_name . ".php', $" . $data_name . ', true ); ?>';
}

//EOF

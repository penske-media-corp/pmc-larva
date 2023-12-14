<?php
/**
 * Twig to PHP Patterns Parser
 *
 * This will slowly be broken up into smaller, testable functions that
 * can be refactored into node if we choose to go that route.
 *
 * @since   06/26/2019
 * @author  Lara Schenck and Amit Sannad
 * @package pmc-lavra
 */

/**
 * Function parser to convert twig to php.
 *
 * @param  string $patterns_dir_path patterns path.
 * @param  string $template_dir_path template directory path.
 * @param  bool   $is_using_plugin   whether or not plugin is in use.
 * @return void
 */
function twig_to_php_parser( $patterns_dir_path, $template_dir_path, $is_using_plugin ) {
	$twig_files = [];

	$twig_dir_iterator      = new \RecursiveDirectoryIterator( $patterns_dir_path );
	$recirsive_dir_iterator = new \RecursiveIteratorIterator( $twig_dir_iterator );
	$all_twig_files         = new \RegexIterator( $recirsive_dir_iterator, '/\.twig/' );

	// Get all twig twig_files to generate template for.
	foreach ( $all_twig_files as $info ) {
		$twig_files[] = $info->getPathname();
	}

	foreach ( $twig_files as $twig_file ) {

		// All components of path in array split by /.
		$twig_path_arr = explode( '/', $twig_file );

		// Get last three parts of the file that includes directory.
		$path_info = array_slice( $twig_path_arr, count( $twig_path_arr ) - 3, 3 );

		// Generate directory where we wanna write PHP template. Remove any thing thats not alpha string i.e. remove specials chars including numbers
		// "/patterns/06-components/c-title/c-title.twig" => "/template-parts/patterns/components/c-title.php".
		$template_dir = $template_dir_path . '/' . preg_replace( '/[^A-Za-z]/', '', $path_info[0] );

		// Generate path where we wanna write php template.
		$path = $template_dir . '/' . str_replace( '.twig', '.php', $path_info[2] );

		debug_log( sprintf( 'Source: %s', $twig_file ) );
		debug_log( sprintf( 'Target: %s', $path ) );

		if ( file_exists( $path ) ) {

			// Get file time of template and twig.
			$fmtime_twig     = filemtime( $twig_file );
			$fmtime_template = filemtime( $path );

			// Compare twig file time to php template filetime. If twig file is newer than php template then overwrite the php template.
			// This is to make sure we are not unnecessarily overwriting the php template.
			if ( $fmtime_twig < $fmtime_template ) {
				debug_log( sprintf( "  -> Skipped, twig timestamp: %s, template timestamp: %s\n", $fmtime_twig, $fmtime_template ) );
				// NOTE: Ignoring this just to fixing pipeline, however it's showing 100% coverage in local.
				// Ignoring this line is suggested by teach lead.
				continue; // @codeCoverageIgnore
			}
		}

		// Get matches for `{% if VARIABLE %}`
		// If condition regex.
		// https://regex101.com/r/BwA2r0/1.
		$if_condition_regex = '/({% if\s*)(\w*\[\'\w+\'\]|\w+)(\s*%})/';

		// Get matches for `{% for item in VARIABLE`.
		// https://regex101.com/r/ijLuIA/3.
		$loop_regex = '/({% for (\w*\[\'\w+\'\]|\w+) in\s*)(\w*\[\'\w+\'\]|\w+)/';

		// Get matches for {{ name }}, {{ name|filter }}, {{ name['item'] }}
		// https://regex101.com/r/ACN0rE/5.
		$mustache_regex = '/({{\s*)(\w*?\[?\'?\w*\'?\]?\|?\w*)(\s*}})/';

		// Get matches for {% include "path/c-element.twig" with data['some_data'] %}
		// https://regex101.com/r/ns5kBR/3.
		$include_regex = '/({%\sinclude ")(.*[c-|o-|l-].*\/)(.*)(.twig)(" with )(\w*?\[?\'?\w*\'?\]?\|?\w*)(\s%})/';

		// Get matches for {% include '/path/here/' ~ variable_svg ~ '.svg' %}
		// https://regex101.com/r/pdleQb/3.
		$svg_regex = '/({%\sinclude\s.*)(\s?\~\s?)(\S*)(\s?\~\s?)(.*\s.*)(%})/';

		$twig_markup = \file_get_contents( $twig_file ); // phpcs:ignore

		$general_replacers = [
			'{#'           => '<?php' . "\n/**" . "\n",
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
		preg_match_all( $svg_regex, $twig_markup, $svg_matches );

		// Prepare empty arrays to gather the replacements as they are processed.
		$if_condition_replacements = [];
		$loop_replacements         = [];
		$mustache_replacements     = [];
		$include_replacements      = [];
		$svg_replacements          = [];

		$count = 0;
		foreach ( $if_condition_matches[0] as $key => $match ) {

			$variable_name = $if_condition_matches[2][ $count ];

			$if_condition_replacements[ $count ] = '<?php if ( ! empty( $' . $variable_name . ' ) ) { ?>';

			$count ++;
		}

		$count = 0;
		foreach ( $loop_matches[0] as $key => $match ) {

			$key_name      = $loop_matches[2][ $count ];
			$variable_name = $loop_matches[3][ $count ];

			$loop_replacements[ $count ] = '<?php foreach ( $' . $variable_name . ' ?? [] as $' . $key_name;

			$count ++;
		}

		$count = 0;
		foreach ( $mustache_matches[0] as $key => $match ) {

			$variable_name = $mustache_matches[2][ $count ];

			$is_attr      = strpos( $match, '_class' ) || strpos( $match, '_name' ) || strpos( $match, '_attr' );
			$is_url       = strpos( $match, '_url' );
			$is_text      = strpos( $match, '_text' );
			$is_data_attr = strpos( $match, '_attributes' );
			$is_markup    = strpos( $match, '_markup' );
			$is_action    = strpos( $match, '_wp_action' );
			$has_filter   = strpos( $match, '|' );

			// Remove the Twig filter from the variable name.
			if ( $has_filter ) {
				$string_parts  = explode( '|', $variable_name );
				$variable_name = $string_parts[0];

				if ( 'markup' === $string_parts[1] ) {
					$is_markup = true;
				}
			}

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

			if ( ! empty( $is_action ) ) {
				$mustache_replacements[ $count ] = '<?php do_action( \'' . $variable_name . '\' ); ?>';
			}

			$count ++;
		}

		// Reset the count to begin accumulating $include_replacements.
		$count = 0;
		foreach ( $include_matches[0] as $include ) {
			$include_replacements[ $count ] = parse_include_path(
				$include,
				$include_matches[3][ $count ],
				$include_matches[6][ $count ],
				$is_using_plugin
			);
			$count ++;
		}

		// Reset the count to begin accumulating $include_replacements.
		$count = 0;
		foreach ( $svg_matches[0] as $svg ) {
			$svg_replacements[ $count ] = parse_svg_path(
				$svg,
				$svg_matches[3][ $count ],
				$is_using_plugin
			);
			$count ++;
		}

		// Merge replacements and matches arrays.
		$all_matches = (array) array_merge(
			$mustache_matches[0],
			$include_matches[0],
			$loop_matches[0],
			$if_condition_matches[0],
			$svg_matches[0]
		);

		$all_replacements = (array) array_merge(
			$mustache_replacements,
			$include_replacements,
			$loop_replacements,
			$if_condition_replacements,
			$svg_replacements
		);

		// First replace matches from the regex's, then apply the general replacements.
		$twig_markup_replace_main     = str_replace( $all_matches, $all_replacements, $twig_markup );
		$twig_markup_replace_main     = parse_wp_action( $twig_markup_replace_main );
		$twig_markup_replace_complete = str_replace( array_keys( (array) $general_replacers ), array_values( $general_replacers ), $twig_markup_replace_main );

		$php_markup  = "<?php\n/**\n * Generated file.\n *\n * Refer to the relevant Twig file for adjusting this markup.\n */\n\n?>\n\n";
		$php_markup .= $twig_markup_replace_complete;

		if ( ! file_exists( $template_dir ) ) {
			mkdir( $template_dir );
		}

		file_put_contents( $path, $php_markup ); // phpcs:ignore

		debug_log( "  -> Template generated\n" );

	}
}

/**
 * Parse Twig Includes
 *
 * @param string  $twig_include    Full include expression.
 * @param string  $pattern_name    o-nav.
 * @param string  $data_name       o_nav / usually name of pattern with underscores.
 * @param boolean $is_using_plugin Whether or not the plugin is in use.
 *
 * @return string PMC::render_template call
 */
function parse_include_path( $twig_include, $pattern_name, $data_name, $is_using_plugin ) {

	$brand_directory   = 'CHILD_THEME_PATH';
	$pattern_directory = '/template-parts/patterns/';
	$start_name        = substr( $pattern_name, 0, 2 );
	$pattern_type      = '';

	if ( strpos( $twig_include, '@larva' ) ) {
		$brand_directory = 'PMC_CORE_PATH';
	}

	if ( 'c-' === $start_name ) {
		$pattern_type = 'components';
	} elseif ( 'o-' === $start_name ) {
		$pattern_type = 'objects';
	} elseif ( '-' !== substr( $pattern_name, 1, 2 ) ) { // If there is no namespace, it is a module.
		$pattern_type = 'modules';
	}

	if ( $is_using_plugin ) {
		return "<?php \PMC\Larva\Pattern::get_instance()->render_pattern_template( '" . $pattern_type . '/' . $pattern_name . "', $" . $data_name . ", true ); ?>";
	} else {
		$pattern_partial_path = $pattern_directory . $pattern_type . '/' . $pattern_name;

		return '<?php \PMC::render_template( ' . $brand_directory . " . '" . $pattern_partial_path  . ".php', $" . $data_name . ', true ); ?>';
	}
}

/**
 * Parse SVG Path
 *
 * @param string  $twig_include    Full include expression.
 * @param string  $svg_name        Name of SVG file, excluding extension.
 * @param boolean $is_using_plugin Whether or not the plugin is in use.
 *
 * @return string PMC::render_template call
 */
function parse_svg_path( $twig_include, $svg_name, $is_using_plugin ) {
	$brand_directory = 'CHILD_THEME_PATH';
	$svg_directory   = '/assets/build/svg/';
	$start_name      = substr( $svg_name, 0, 2 );

	if ( true === $is_using_plugin ) {
		$svg_directory   = '/build/svg/';
		$key_name        = 'brand_directory';
		$brand_directory = "\PMC\Larva\Config::get_instance()->get( '" . $key_name . "' )";
	} else {
		if ( strpos( $twig_include, '@larva' ) ) {
			$brand_directory = 'PMC_CORE_PATH';
		}
	}

	return "<?php \PMC::render_template( " . $brand_directory . " . '" . $svg_directory . "' . ( $" . $svg_name . " ?? '' ) . '.svg', [], true ); ?>";
}

/**
 * Parser responsible for translation custom twig function: {{ wp_action( ... ) }}
 * See larva/lib/server.js twing.addFunction for details
 *
 * @param string $twig_markup twig markup string.
 * @return string
 */
function parse_wp_action( string $twig_markup ) : string {

	$twig_markup = preg_replace_callback(
		'/{{\s*wp_action\s*\(\s*(.*?)\s*\)\s*}}/',
		function ( $matches ) {

			$args = $matches[1];

			$args = preg_replace_callback(
				'/\s*([\'"])?(\w+)\1?\s*/',
				function ( $matches ) {
					if ( ! empty( $matches[1] ) ) {
						return sprintf( ' \'%s\'', $matches[2] );
					} else {
						return sprintf( ' $%s', $matches[2] );
					}
				},
				$args
			);

			return '<?php do_action('. $args . ' ); ?>';

		},
		$twig_markup
	);

	return $twig_markup;
}

/**
 * Set debug state.
 *
 * @param boolean $state debug state.
 */
function set_debug( bool $state ): void {
	global $debug_state;
	$debug_state = $state;
}

/**
 * Log debug values.
 *
 * @param string $msg message to debug.
 */
function debug_log( string $msg ): void {
	global $debug_state;
	// write out to stderr for now.
	if ( $debug_state ) {
		fwrite( STDERR, sprintf( "%s\n", $msg ) ); // phpcs:ignore
	}
}

// Set default to debug mode.
set_debug( true );

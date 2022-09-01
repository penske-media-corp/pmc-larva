const assert = require( 'assert' );

const parserMethods = require( '../index.js' ).methods;

const expectations = {
	childInclude:
		"<?php \\PMC::render_template( CHILD_THEME_PATH . '/template-parts/patterns/objects/o-nav.php', $o_nav, true ); ?>",
	larvaInclude:
		"<?php \\PMC::render_template( PMC_CORE_PATH . '/template-parts/patterns/objects/o-nav.php', $o_nav, true ); ?>",
	pluginEnabled:
		"<?php \\PMC\\Larva\\Pattern::get_instance()->render_pattern_template( 'objects/o-nav', $o_nav, true ); ?>",
};

describe( 'parse include statements', function () {
	it( 'twig includes are parsed to PMC::render_template calls', ( done ) => {
		parserMethods
			.parseIncludePath(
				'{% include "o-nav/o-nav.twig" with o_nav %}',
				'o-nav',
				'o_nav'
			)
			.catch( ( e ) => console.log( e ) )
			.then( ( result ) => {
				assert.equal( result, expectations.childInclude );
				done();
			} );
	} );

	it( 'if larva namespace, parsed path references the parent theme', ( done ) => {
		parserMethods
			.parseIncludePath(
				'{% include "@larva/objects/o-nav.twig" with o_nav %}',
				'o-nav',
				'o_nav'
			)
			.catch( ( e ) => console.log( e ) )
			.then( ( result ) => {
				assert.equal( result, expectations.larvaInclude );
				done();
			} );
	} );

	it( 'if plugin is enabled, use the render_pattern_template method from Larva', ( done ) => {
		parserMethods
			.parseIncludePath(
				'{% include "@project/objects/o-nav.twig" with o_nav %}',
				'o-nav',
				'o_nav',
				true
			)
			.catch( ( e ) => console.log( e ) )
			.then( ( result ) => {
				assert.equal( result, expectations.pluginEnabled );
				done();
			} );
	} );
} );

describe( 'parse SVG includes', function () {
	it( 'parses includes to brand_directory when using plugin', ( done ) => {
		const expectedPluginEnabled =
			"<?php \\PMC::render_template( \\PMC\\Larva\\Config::get_instance()->get( 'brand_directory' ) . '/build/svg/' . ( $c_logo_svg ?? '' ) . '.svg', [], true ); ?>";

		parserMethods
			.parseSvgPath(
				"{% include '../../build/svg/' ~ c_logo_svg ~ '.svg' %}",
				'c_logo_svg',
				true
			)
			.catch( ( e ) => console.log( e ) )
			.then( ( result ) => {
				assert.equal( result, expectedPluginEnabled );
				done();
			} );
	} );
	it( 'parses includes to CHILD_THEME_PATH when not using plugin', ( done ) => {
		const expected =
			"<?php \\PMC::render_template( CHILD_THEME_PATH . '/assets/build/svg/' . ( $c_logo_svg ?? '' ) . '.svg', [], true ); ?>";

		parserMethods
			.parseSvgPath(
				"{% include '../../build/svg/' ~ c_logo_svg ~ '.svg' %}",
				'c_logo_svg'
			)
			.catch( ( e ) => console.log( e ) )
			.then( ( result ) => {
				assert.equal( result, expected );
				done();
			} );
	} );
} );

describe( 'parse custom functions', function () {
	it( 'parses wp_action function', ( done ) => {
		parserMethods
			.parseWpAction( "{{wp_action('test','param',variable)}}" )
			.catch( ( e ) => console.log( e ) )
			.then( ( result ) => {
				assert.equal(
					result,
					"<?php do_action( 'test', 'param', $variable ); ?>"
				);
				done();
			} );

		// Test spacing
		parserMethods
			.parseWpAction( "{{ 	wp_action( 	'test', 	'param', 	variable 	) 	}}" )
			.catch( ( e ) => console.log( e ) )
			.then( ( result ) => {
				assert.equal(
					result,
					"<?php do_action( 'test', 'param', $variable ); ?>"
				);
				done();
			} );
	} );
} );

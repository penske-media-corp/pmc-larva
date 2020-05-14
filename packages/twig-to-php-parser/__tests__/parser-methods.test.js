const assert = require( 'assert' );
const path = require( 'path' );

const parserMethods = require( '../index.js' ).methods;

const expectations = {
	childInclude: '<?php \\PMC::render_template( CHILD_THEME_PATH . \'/template-parts/patterns/objects/o-nav.php\', $o_nav, true ); ?>',
	larvaInclude: '<?php \\PMC::render_template( PMC_CORE_PATH . \'/template-parts/patterns/objects/o-nav.php\', $o_nav, true ); ?>',
	larvaIncludePluginEnabled: '<?php \\PMC::render_template( \\PMC\\Larva\\Config::get_instance()->get( \'core_directory\' ) . \'/build/patterns/objects/o-nav.php\', $o_nav, true ); ?>',
	pluginEnabled: '<?php \\PMC::render_template( \\PMC\\Larva\\Config::get_instance()->get( \'brand_directory\' ) . \'/build/patterns/objects/o-nav.php\', $o_nav, true ); ?>',
};

describe( 'parse include statements', function() {

	it( 'twig includes are parsed to PMC::render_template calls', ( done ) => {
		parserMethods.parseIncludePath(
			'{% include "o-nav/o-nav.twig" with o_nav %}',
			'o-nav',
			'o_nav' )
		.catch( e => console.log( e ) )
		.then( ( result ) => {
			assert.equal( result, expectations.childInclude );
			done();
		});
	});

	it( 'if larva namespace, parsed path references the parent theme', ( done ) => {

		parserMethods.parseIncludePath(
			'{% include "@larva/objects/o-nav.twig" with o_nav %}',
			'o-nav',
			'o_nav'
		)
		.catch( e => console.log( e ) )
		.then( ( result ) => {
			assert.equal( result, expectations.larvaInclude );
			done();
		} );
	} );

	it( 'if plugin is enabled, call config with core_directory', ( done ) => {

		parserMethods.parseIncludePath(
			'{% include "@larva/objects/o-nav.twig" with o_nav %}',
			'o-nav',
			'o_nav',
			true
		)
		.catch( e => console.log( e ) )
		.then( ( result ) => {
			assert.equal( result, expectations.larvaIncludePluginEnabled );
			done();
		});
	} );

	it( 'if plugin is enabled, call config with brand_directory', ( done ) => {

		parserMethods.parseIncludePath(
			'{% include "@project/objects/o-nav.twig" with o_nav %}',
			'o-nav',
			'o_nav',
			true )
			.catch( e => console.log( e ) )
			.then( ( result ) => {
				assert.equal( result, expectations.pluginEnabled );
				done();
			} );
	} );

});


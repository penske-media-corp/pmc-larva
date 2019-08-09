const assert = require( 'assert' );
( path = require( 'path' ) );
( fs = require( 'fs' ) );

const parserMethods = require( '../index.js' ).methods;
const exec = require( 'child_process' ).exec;

const fixture = path.join( __dirname, 'fixtures' );

const expectations = {
	childInclude: '<?php \\PMC::render_template( CHILD_THEME_PATH . \'/template-parts/patterns/objects/o-nav.php\', $o_nav, true ); ?>',
	larvaInclude: '<?php \\PMC::render_template( CHILD_THEME_PATH . \'/template-parts/patterns/objects/o-nav.php\', $o_nav, true ); ?>'
	// larvaInclude: '<?php \\PMC::render_template( PMC_CORE_PATH . \'/template-parts/patterns/objects/o-nav.php\', $o_nav, true ); ?>' - uncomment when core logic is reactivated
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
			'o_nav' )
		.catch( e => console.log( e ) )
		.then( ( result ) => {
			assert.equal( result, expectations.larvaInclude );
			done();
		});
	});

});


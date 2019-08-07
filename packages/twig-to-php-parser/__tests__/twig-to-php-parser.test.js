const assert = require( 'assert' );
const path = require( 'path' );
const fs = require( 'fs' );
const twigToPhpParser = require( '../index' ).twigToPhpParser;
const exec = require( 'child_process' ).exec;

const fixture = path.join( __dirname, 'fixtures' );

const pathConfig = {
	twigDir: `${fixture}/src/patterns/`,
	phpDir: `${fixture}/template-parts/patterns/`
};

describe( 'twig to php parser', function() {

	beforeEach( () => {
		exec( 'mkdir ' + pathConfig.phpDir, ( err  ) => {
			if ( err ) {
				console.error( err );
			}
		});
	});

	it( 'creates new files and directories for objects, components, and modules', ( done ) => {

		return twigToPhpParser( pathConfig.twigDir, pathConfig.phpDir )
		.catch( ( e ) => console.log( e ) ) // Catch PHP errors.
		.then( ( result ) => {
			assert.equal( fs.existsSync( pathConfig.phpDir + 'objects/o-nav.php' ), true );
			assert.equal( fs.existsSync( pathConfig.phpDir + 'components/c-nav-link.php' ), true );
			assert.equal( fs.existsSync( pathConfig.phpDir + 'modules/breadcrumbs.php' ), true );
			done();
		});

	});

	afterEach( () => {
		exec( 'rm -r ' + pathConfig.phpDir, ( err ) => {
			if ( err ) {
				console.error( err );
			}
		});
	});

});

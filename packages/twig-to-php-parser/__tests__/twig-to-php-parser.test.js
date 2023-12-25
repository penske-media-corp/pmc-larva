const assert = require( 'assert' );
const path = require( 'path' );
const fs = require( 'fs' );
const twigToPhpParser = require( '../index' ).twigToPhpParser;
const exec = require( 'child_process' ).exec;

const fixture = path.join( __dirname, 'fixtures' );
const expectedDir = `${ fixture }/template-parts-expected/patterns/`;

const getAppConfiguration = require( '../lib/getConfig' );
const appConfiguration = getAppConfiguration( 'parser' );

const patternShortPaths = [
	'components/c-byline.php',
	'components/c-heading.php',
	'components/c-button.php',
	'components/c-logo.php',
	'objects/o-nav.php',
	'objects/o-story-list.php',
	'modules/trending.php',
	'modules/array-key-in-loop.php',
	'modules/html-tag-interpolation.php',
];

describe( 'twig to php parser', function () {
	beforeAll( ( done ) => {
		exec( 'mkdir ' + appConfiguration.phpDir, ( err ) => {
			if ( err ) {
				console.error( err );
			}
		} );

		twigToPhpParser( appConfiguration )
			.catch( ( e ) => console.log( e ) )
			.then( ( result ) => done() ); // Catch PHP errors.
	} );

	it( 'creates new files and directories for objects, components, and modules', ( done ) => {
		assert.equal(
			fs.existsSync( appConfiguration.phpDir + 'objects/o-nav.php' ),
			true
		);
		assert.equal(
			fs.existsSync(
				appConfiguration.phpDir + 'components/c-nav-link.php'
			),
			true
		);
		assert.equal(
			fs.existsSync(
				appConfiguration.phpDir + 'modules/breadcrumbs.php'
			),
			true
		);
		done();
	} );

	it( 'parses patterns as expected', ( done ) => {
		patternShortPaths.forEach( ( shortpath ) => {
			const expectedContents = fs
				.readFileSync( expectedDir + shortpath )
				.toString();
			const actualContents = fs
				.readFileSync( appConfiguration.phpDir + shortpath )
				.toString();

			assert.equal( actualContents, expectedContents );
		} );
		done();
	} );

	afterAll( ( done ) => {
		exec( 'rm -r ' + appConfiguration.phpDir, ( err ) => {
			if ( err ) {
				console.error( err );
			}
		} );
		done();
	} );
} );

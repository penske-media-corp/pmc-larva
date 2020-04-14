const path = require( 'path' );
const fs = require( 'fs' );
const mkdirp = require( 'mkdirp' );
const exec = require( 'child_process' ).exec;

const fixture = path.join( __dirname, '../fixtures' );

const getAllPatternsObj = require( '../../lib/utils/getAllPatternsObj' );
const getPatternRoutes = require( '../../lib/utils/getPatternRoutes' );

const buildPath = path.join( fixture, './build-html' );

function generateStatic ( directory ) {
	const patternsObj = getAllPatternsObj( directory );

	// navigate to path in server
	// prepare the file extension
	// write the output to a file

	let dir = path.join( buildPath, 'components/c-nav-link/' );

	// patternsObj.map( ( pattern ) => {

	// } );

	mkdirp.sync( dir );

	fs.writeFileSync( dir + '/index.html', 'asdasd' );
}

describe( 'generateStatic', () => {

	beforeAll( ( done ) => {

		exec( 'mkdir -p ' + buildPath, ( err ) => {
			if ( err ) {
				console.error( err );
				done();
			} else {
				generateStatic( path.join( fixture, './src/patterns' ) );
				done();
			}
		} );

	} );

	it( 'creates an index.html file for a prototype pattern', () => {
		expect( fs.existsSync( path.join( buildPath, 'components/c-nav-link/index.html' ) ) ).toBe( true );
	} );

	afterAll( ( done ) => {
		exec( 'rm -r ' + buildPath, ( err ) => {
			if ( err ) {
				console.error( err );
				done();
			}
		} );
	} );
} );

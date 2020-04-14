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
	const routesArr = getPatternRoutes( patternsObj );

	// navigate to path in server
	// prepare the file extension
	// write the output to a file


	routesArr.map( ( route ) => {
		const dir = path.join( buildPath, route );
		mkdirp.sync( dir );
		fs.writeFileSync( `${dir}/index.html`, 'asdasd' );
	} );


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

	it( 'creates an html file for a pattern variant', () => {
		expect( fs.existsSync( path.join( buildPath, 'components/c-nav-link/featured/index.html' ) ) ).toBe( true );
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

const path = require( 'path' );
const fs = require( 'fs' );
const mkdirp = require( 'mkdirp' );
const exec = require( 'child_process' ).exec;

const fixture = path.join( __dirname, '../fixtures' );

const getAllPatternsObj = require( '../../lib/utils/getAllPatternsObj' );
const getPatternRoutes = require( '../../lib/utils/getPatternRoutes' );

const buildPath = path.join( fixture, './build-html' );

const patternsObj = getAllPatternsObj( path.join( fixture, './src/patterns' ) );
const routesArr = getPatternRoutes( patternsObj );

function generateStatic( routesArr ) {

	routesArr.map( ( route ) => {
		const dir = path.join( buildPath, route );
		mkdirp.sync( dir );

		fs.writeFileSync( `${dir}/index.html`, 'derp' );
		// fetch( 'http://localhost:3001/ ' ).then( response => {
		// } );
	} );

}

describe( 'generateStatic', () => {

	beforeEach( ( done ) => {

		exec( 'mkdir -p ' + buildPath, ( err ) => {
			if ( err ) {
				console.error( err );
			}
			done();
		} );

	} );

	it( 'creates an index.html file for a prototype pattern', () => {

		const routesArr = [
			'components/c-nav-link/'
		];

		generateStatic( routesArr );

		expect( fs.existsSync( path.join( buildPath, 'components/c-nav-link/index.html' ) ) ).toBe( true );
	} );

	it( 'creates an html file for a pattern variant', () => {
		const routesArr = [
			'components/c-nav-link/featured'
		];

		generateStatic( routesArr );

		expect( fs.existsSync( path.join( buildPath, 'components/c-nav-link/featured/index.html' ) ) ).toBe( true );
	} );

	afterEach( ( done ) => {
		exec( 'rm -r ' + buildPath, ( err ) => {
			if ( err ) {
				console.error( err );
			}
			done();
		} );
	} );
} );

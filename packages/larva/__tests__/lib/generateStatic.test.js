const path = require( 'path' );
const exec = require( 'child_process' ).exec;

const fs = require( 'fs' );
const mkdirp = require( 'mkdirp' );
const http = require( 'http' );

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

		// TODO: this needs to be a promise
		http.get( {
			hostname: 'localhost',
			port: 3001,
			path: '/',
			agent: false  // Create a new agent just for this one request
		}, ( res ) => {
			fs.writeFileSync( `${dir}/index.html`, res );
		} );

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

		expect(
			fs.existsSync( path.join( buildPath, 'components/c-nav-link/index.html' ) )
		).toBe( true );
	} );

	it( 'creates an html file for a pattern variant', () => {
		const routesArr = [
			'components/c-nav-link/featured'
		];

		generateStatic( routesArr );

		expect(
			fs.existsSync( path.join( buildPath, 'components/c-nav-link/featured/index.html' ) )
		).toBe( true );
	} );

	it( 'writes the pattern html to the file', () => {
		const routesArr = [
			'components/c-nav-link/featured',
			'components/c-nav-link/',
			'one-offs/newsire/',
		];

		generateStatic( routesArr );

		expect(
			fs.readFileSync(
				path.join( buildPath, routesArr[0] + '/index.html' ),
				{ encoding: 'utf8' }
			)
		).toBe( expect.stringContaining( 'class="c-nav-link' ));
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

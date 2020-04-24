const path = require( 'path' );
const exec = require( 'child_process' ).exec;

const fs = require( 'fs' );
const mkdirp = require( 'mkdirp' );
const http = require( 'http' );

const fixture = path.join( __dirname, '../fixtures' );

const getAllPatternsObj = require( '../../lib/utils/getAllPatternsObj' );
const getPatternRoutes = require( '../../lib/utils/getPatternRoutes' );

const buildPath = path.join( fixture, './build-html' );

// Note: this is the patternsObj from the monorepo's larva/src/patterns sandbox.
const patternsObj = getAllPatternsObj( path.join( __dirname, '../../src/patterns/' ) );

const routesArr = getPatternRoutes( patternsObj );

function generateStatic( routesArr, patternSource = 'project' ) {

	routesArr.map( ( route ) => {
		const dir = path.join( buildPath, route );

		mkdirp.sync( dir );

		// TODO: handle async
		const url = `http://localhost:3001/${patternSource}/${route}`;

		http.get( url, res => {
			let body = '';

			res.setEncoding( 'utf8' );

			res.on( 'data', data => {
				body += data;
			} );

			res.on( 'end', () => {
				fs.writeFileSync( `${dir}/index.html`, 'body' );
			} );
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
			'components/c-link'
		];

		generateStatic( routesArr );

		expect(
			fs.existsSync( path.join( buildPath, 'components/c-link/index.html' ) )
		).toBe( true );
	} );

	it( 'creates an html file for a pattern variant', () => {
		const routesArr = [
			'components/c-button/brand-basic'
		];

		generateStatic( routesArr );

		expect(
			fs.existsSync( path.join( buildPath, 'components/c-button/brand-basic/index.html' ) )
		).toBe( true );
	} );

	it( 'writes the pattern html to the file', () => {
		const routesArr = [
			'components/c-button/ghost',
			'components/c-button/',
			'modules/newsire/',
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

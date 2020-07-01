const path = require( 'path' );
const fs = require( 'fs' );
const mkdirp = require( 'mkdirp' );
const exec = require( 'child_process' ).exec;

const ncp = require( 'ncp' ).ncp;
const app = require( '../../lib/server' );
const port = 5555;
const urlBase = 'http://localhost:' + port + '/larva';
const generateStatic = require( '../../lib/generateStatic' );

const fixture = path.join( __dirname, '../fixtures' );
const buildPath = path.join( fixture, './build/html' );

beforeAll( ( done ) => {
	app.listen( port, () => {
		done();
	});
});

describe( 'generateStatic', () => {
	
	beforeEach( ( done ) => {
	
		exec( 'mkdir -p ' + buildPath, ( err ) => {
			if ( err ) {
				console.error( err );
			}
			done();
		} );

	} );

	it( 'creates an index.html file for a prototype pattern', ( done ) => {

		const routesArr = [
			'components/c-link'
		];

		generateStatic( routesArr, buildPath, () => {
			expect(
				fs.existsSync( path.join( buildPath, 'components/c-link/index.html' ) )
			).toBe( true );
			done();
		}, urlBase );

	} );

	it( 'creates an html file for a pattern variant', ( done ) => {
		const routesArr = [
			'components/c-button/brand-basic'
		];

		generateStatic( routesArr, buildPath, () => {
			expect(
				fs.existsSync( path.join( buildPath, 'components/c-button/brand-basic/index.html' ) )
			).toBe( true );
			done();
		}, urlBase );

	} );

	it( 'contains content for the pattern', ( done ) => {
		const routesArr = [
			'modules/footer',
		];

		generateStatic( routesArr, buildPath, () => {
			expect(
				// Hacky way to test that the response actually contains
				// the content, not an error.
				fs.readFileSync(
					path.join( buildPath, routesArr[0] + '/index.html' ),
					{ encoding: 'utf8' }
				).indexOf( 'footer_classes' )
			).not.toBe( -1 );
			done();
		}, urlBase );
	} );

	it.skip( 'copies static assets', ( done ) => {
		const routesArr = [
			'components/c-button/brand-basic'
		];


		console.log( path.join( buildPath, './static/js' ) );

		generateStatic( routesArr, buildPath, () => {

			const assetsDest = path.join( buildPath, './static/js' );
			const assetsSrc = path.join( buildPath, '../js' );

			mkdirp( assetsDest );

			ncp(
				assetsSrc,
				assetsDest,
				( e ) => {

					if ( e ) {
						return console.error( e );
					}

					expect(
						fs.existsSync( path.join( buildPath, './static/js/larva-ui.js' ) )
					).toBe( true );

					done();
				}
			);

		} );

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

afterAll( async ( done ) => {
	const server = app.listen();
	server.close();
	done();
});

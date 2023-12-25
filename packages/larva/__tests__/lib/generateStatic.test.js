const path = require( 'path' );
const exec = require( 'child_process' ).exec;
const app = require( '../../lib/server' );
const fs = require( 'fs-extra' );

const port = 5555;
const urlBase = 'http://localhost:' + port + '/larva';
const generateStatic = require( '../../lib/generateStatic' );

const fixture = path.join( __dirname, '../fixtures' );
const buildPath = path.join( fixture, './build/html/project' );

let server;

describe( 'generateStatic', () => {
	beforeAll( ( done ) => {
		server = app.listen( port, () => {
			done();
		} );
	} );

	beforeEach( ( done ) => {
		exec( 'mkdir -p ' + buildPath, ( err ) => {
			if ( err ) {
				console.error( err );
			}
			done();
		} );
	} );

	it( 'creates an index.html file for a prototype pattern', ( done ) => {
		const routesArr = [ 'components/c-link' ];

		generateStatic(
			routesArr,
			buildPath,
			() => {
				expect(
					fs.existsSync(
						path.join( buildPath, 'components/c-link/index.html' )
					)
				).toBe( true );
				done();
			},
			urlBase
		);
	} );

	it( 'creates an html file for a pattern variant', ( done ) => {
		const routesArr = [ 'components/c-button/brand-basic' ];

		generateStatic(
			routesArr,
			buildPath,
			() => {
				expect(
					fs.existsSync(
						path.join(
							buildPath,
							'components/c-button/brand-basic/index.html'
						)
					)
				).toBe( true );
				done();
			},
			urlBase
		);
	} );

	it( 'contains content for the pattern', ( done ) => {
		const routesArr = [ 'modules/footer' ];

		generateStatic(
			routesArr,
			buildPath,
			() => {
				expect(
					// Hacky way to test that the response actually contains
					// the content, not an error.
					fs
						.readFileSync(
							path.join(
								buildPath,
								routesArr[ 0 ] + '/index.html'
							),
							{ encoding: 'utf8' }
						)
						.indexOf( 'footer_classes' )
				).not.toBe( -1 );
				done();
			},
			urlBase
		);
	} );

	it( 'copies static assets', ( done ) => {
		const routesArr = [ 'components/c-button/brand-basic' ];

		generateStatic(
			routesArr,
			buildPath,
			() => {
				// This is kinda sloppy and may be annoying to maintain, and there is
				// surely a more elegant way to test this functionality than checking
				// if the file exists...

				// JS
				expect(
					fs.existsSync(
						path.join( buildPath, '../assets/build/js/larva-ui.js' )
					)
				).toBe( true );

				// CSS
				expect(
					fs.existsSync(
						path.join(
							buildPath,
							'../assets/build/css/common.inline.css'
						)
					)
				).toBe( true );

				// Images
				expect(
					fs.existsSync(
						path.join(
							buildPath,
							'../assets/build/images/test.png'
						)
					)
				).toBe( true );

				// SVG
				expect(
					fs.existsSync(
						path.join(
							buildPath,
							'../assets/build/svg/defs/sprite.svg'
						)
					)
				).toBe( true );

				// Public dir
				expect(
					fs.existsSync(
						path.join(
							buildPath,
							'../assets/public/some-library.js'
						)
					)
				).toBe( true );

				done();
			},
			urlBase
		);
	} );

	afterEach( ( done ) => {
		const htmlDir = path.join( buildPath, '../' );

		exec( 'rm -r ' + htmlDir, ( err ) => {
			if ( err ) {
				console.error( err );
			}
			done();
		} );
	} );

	afterAll( ( done ) => {
		server.close();
		done();
	} );
} );

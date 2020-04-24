const path = require( 'path' );
const fs = require( 'fs' );
const exec = require( 'child_process' ).exec;

const fixture = path.join( __dirname, '../fixtures' );
const generateStatic = require( '../../lib/generateStatic' );

const buildPath = path.join( fixture, './build-html' );

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

		generateStatic( routesArr, buildPath );

		expect(
			fs.existsSync( path.join( buildPath, 'components/c-link/index.html' ) )
		).toBe( true );
	} );

	it( 'creates an html file for a pattern variant', () => {
		const routesArr = [
			'components/c-button/brand-basic'
		];

		generateStatic( routesArr, buildPath );

		expect(
			fs.existsSync( path.join( buildPath, 'components/c-button/brand-basic/index.html' ) )
		).toBe( true );
	} );

	it( 'writes the pattern html to the file', () => {
		const routesArr = [
			'components/c-button/ghost',
			'components/c-button',
			'modules/footer',
		];

		generateStatic( routesArr, buildPath );

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

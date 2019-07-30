const path = require( 'path' ); 
const { getScssPathsWithExtension } = require( '../../../lib/utils/utils' );
const fixture = path.resolve( __dirname, '../../fixtures' );
const fixtureSrcPath = path.join( fixture, './src' );

describe('getScssPathsWithExtension', () => {

	it( 'gets all files with the .common.inline.scss extension', () => {
		return getScssPathsWithExtension( 'common.inline', fixtureSrcPath )
		.then( ( result ) => {
			expect( result.length ).toBe( 2 );
			result.forEach( string => {
				expect( path.parse( string ).name ).toContain( 'common.inline' );
			});
		});
	});

	it('gets all files with the .common.async.scss extension', () => {
		return getScssPathsWithExtension( 'common.async', fixtureSrcPath )
		.then( ( result ) => {
			expect( result.length ).toBe( 1 );
			result.forEach( string => {
				expect( path.parse( string ).name ).toContain( 'common.async' );
			});
		});
	});
});
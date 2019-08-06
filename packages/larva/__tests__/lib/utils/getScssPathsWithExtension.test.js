const path = require( 'path' ); 
const { getScssPathsWithExtension } = require( '../../../lib/utils/utils' );
const fixture = path.resolve( __dirname, '../../fixtures' );
const changedFilePathStub = path.join( fixture, './src/patterns/06-algorithms/a-wrapper/a-wrapper.common.inline.scss' );

describe('getScssPathsWithExtension', () => {

	it( 'gets files from nested directories', () => {
		return getScssPathsWithExtension( 'common.inline', changedFilePathStub )
		.then( ( result ) => {
			expect( result.length ).toBe( 4 ); // 2 in algorithms, 2 in utilities
			console.log( result );
			
			result.forEach( string => {
				expect( path.parse( string ).name ).toContain( 'common.inline' );
			});
		});
	});

	it('gets only files with the .common.inline.scss extension', () => {
		return getScssPathsWithExtension( 'common.inline', changedFilePathStub )
		.then( ( result ) => {
			expect( result.length ).toBe( 1 );
			result.forEach( string => {
				expect( path.parse( string ).name ).toContain( 'common.inline' );
			});
		});
	});
});
'use strict';

const path = require( 'path' ); 
const { getScssPathsWithExtension, concatenateFileData, renderSass, run } = require( '../lib/css-utilities' );
const fixture = path.resolve( __dirname, './fixtures' );
const fixtureBuildPath = path.join( fixture, 'build' );

describe( 'concatenateFileData', () => {
	it( 'concats data from files in array', () => {
		let paths = [
			path.join( fixture, 'src/pmc-u-test.common.scss' ),
			path.join( fixture, 'src/pmc-u-test-two.common.scss' ),
		];

		let stringsExpected = [
			'.test',
			'.test-two'
		];

		return concatenateFileData( paths ).then( ( result ) => {
			stringsExpected.forEach( string => {
				expect( result ).toContain( string );
			});
		});

	});
});



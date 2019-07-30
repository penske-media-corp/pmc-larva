'use strict';

const path = require( 'path' ); 
const { concatenateFileData } = require( '../../../lib/utils/utils' );
const fixture = path.resolve( __dirname, '../../fixtures' );

describe( 'concatenateFileData', () => {
	it( 'concats data from files in array', () => {
		let paths = [
			path.join( fixture, './src/patterns/07-utilities/u-test.common.inline.scss' ),
			path.join( fixture, './src/patterns/07-utilities/u-test-two.common.inline.scss' ),
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

'use strict';

const path = require( 'path' ); 
const { getUtilityPathsWithExtension, concatenateFileData, renderSass, run } = require( '../lib/css-utilities' );
const fixture = path.resolve( __dirname, './__fixture__' );
const fixtureBuildPath = path.join( fixture, 'build' );

describe('getUtilityPathsWithExtension', () => {

	it( 'gets all files with the .common.css extension', () => {
		return getUtilityPathsWithExtension( 'common', fixtureBuildPath )
		.then( ( result ) => {

			result.forEach( string => {
				expect( path.parse( string ).name ).toContain( 'common' );
			});
		});
	});

	it('gets all files with the .critical.css extension', () => {
		return getUtilityPathsWithExtension( 'critical', fixtureBuildPath )
		.then( ( result ) => {
			result.forEach( string => {
				expect( path.parse( string ).name ).toContain( 'critical' );
			});
		});
	});
});

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



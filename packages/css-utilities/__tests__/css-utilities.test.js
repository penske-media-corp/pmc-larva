'use strict';

const path = require( 'path' ); 
const { getUtilityPathsWithExtension, concatenateFileData, renderSass, run } = require( '../lib/css-utilities' );
const fixture = path.resolve( __dirname, './__fixture__' );

describe('getUtilityPathsWithExtension', () => {

	it( 'gets all files with the .common.css extension', ( done ) => {
		getUtilityPathsWithExtension( 'common', path.join( fixture, 'build' ) )
		.then( ( result ) => {
			result.forEach( string => {
				expect( path.parse( string ).name ).toContain( 'common' );
			});
			done();
		});
	});

	it('gets all files with the .critical.css extension', ( done ) => {
		getUtilityPathsWithExtension( 'critical', path.join( fixture, 'build' ) )
		.then( ( result ) => {
			result.forEach( string => {
				expect( path.parse( string ).name ).toContain( 'critical' );
			});
			done();
		}).catch( err => console.error( err ) );
	});
});

describe( 'concatenateFileData', () => {
	it( 'concats data from files in array', ( done ) => {
		let paths = [
			path.join( fixture, 'src/pmc-u-test.common.scss' ),
			path.join( fixture, 'src/pmc-u-test-two.common.scss' ),
		];

		let stringsExpected = [
			'.test',
			'.test-two'
		];

		let concatendatedFileString = concatenateFileData( paths );

		concatendatedFileString.forEach(string => {
			expect( result ).toContain( string );
		});

	});
});

describe( 'run the thing', () => {
	it( 'writes concatted utility css to a file', () => {

		let stringsExpected = [
			'background-color: #429AE7;',
			'color: green;'
		];

		run();

	});
});


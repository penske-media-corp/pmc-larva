'use strict';

const path = require( 'path' ); 
const { getUtilityPathsWithExtension } = require( '../lib/css-utilities' );
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

	it('gets all files with the .critical.css extension', () => {
		getUtilityPathsWithExtension( 'critical', path.join( fixture, 'build' ) )
		.then( ( result ) => {
			result.forEach( string => {
				expect( path.parse( string ).name ).toContain( 'critical' );
			});
			done();
		});
	});
});

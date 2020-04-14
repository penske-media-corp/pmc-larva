const assert = require( 'assert' );
const path = require( 'path' );
const fixture = path.join( __dirname, '../../fixtures' );

// If needed, will return projectPatternsDir pointing to fixtures:
// const getAppConfiguration = require( '../../../lib/utils/getAppConfiguration' );
const getAllPatternsObj = require( '../../../lib/utils/getAllPatternsObj' );

describe( 'describe the test', () => {
	it( 'does a thing', () => {

		const patterns = getAllPatternsObj( path.join( fixture, 'src/patterns' ) );

		/**
		 * for each keys
		 * 		for each key of keys
		 * 			for each extension
		 */

		const expected = [
			'/components/c-nav-link/featured.aia',
			'/components/c-nav-link/featured',
			'/components/c-nav-link',
			'/modules/test-module/featured',
			'/modules/test-module',
			'/objects/o-crap',
			'/objects/o-nav',
			'/one-offs/newswire'
		];


		console.log( patterns );

		function getUrls ( patterns ) {

			const patternArrays = Object.keys( patterns ).map( ( type ) => {

				return Object.keys( patterns[type] ).map( ( name ) => {
					let path = type + '/' + name;

					if ( patterns[type][name].length > 1 ) {

						return patterns[type][name].map( ( variant ) => {
							if ( 'prototype' !== variant ) {
								return `/${type}/${name}/${variant}`;
							} else {
								return `/${type}/${name}`;
							}
						} );

					} else {
						return `/${type}/${name}`;
					}

				} ).flat();

			});

			return patternArrays.flat();
		}

		expect( getUrls( patterns ) ).toStrictEqual( expected );

	} );
} );

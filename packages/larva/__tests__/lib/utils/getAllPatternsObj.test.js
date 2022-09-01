const path = require( 'path' );
const getAppConfiguration = require( '../../../lib/utils/getAppConfiguration' );
const getAllPatternsObj = require( '../../../lib/utils/getAllPatternsObj' );

const expectedPatterns = {
	__tests__: {},
	components: {
		'c-nav-link': [ 'featured.aia', 'featured', 'prototype' ],
		'c-tagline': [ 'prototype' ],
	},
	modules: {
		'test-module': [ 'featured', 'prototype' ],
	},
	objects: {
		'o-crap': [],
		'o-nav': [],
	},
	'one-offs': {
		newswire: [ 'prototype' ],
	},
};
const config = getAppConfiguration( 'patterns' );

describe( 'getAllPatternsObj', () => {
	it( 'returns an object containing all patterns and variants', () => {
		expect( getAllPatternsObj( config.projectPatternsDir ) ).toEqual(
			expectedPatterns
		);
	} );
} );

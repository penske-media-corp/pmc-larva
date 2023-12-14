const assert = require( 'assert' );
const path = require( 'path' );
const fixture = path.join( __dirname, '../../fixtures' );
const getPatternPathsToLoad = require( '../../../lib/utils/getPatternPathsToLoad' );
const appConfiguration = require( '../../../lib/utils/getAppConfiguration' )(
	'patterns'
);

describe( 'getPatternPathsToLoad', () => {
	it( 'returns an array of paths loads larvaPath if it is the core theme', () => {
		assert.equal( getPatternPathsToLoad( appConfiguration ).length, 2 );
	} );
} );

const assert = require( 'assert' );
const appConfiguration = require( '../../../lib/utils/getAppConfiguration' )(
	'patterns'
);
const getPatternsIndexPath = require( '../../../lib/utils/getPatternsIndexPath' );

describe( 'getPatternsIndexPath', () => {
	it( 'gets the path for larva if it is the core theme', () => {
		assert.equal(
			getPatternsIndexPath( appConfiguration ).includes( 'larva' ),
			true
		);
	} );
} );

const assert = require( 'assert' );
const getPatternsList = require( '../../../lib/utils/getPatternsList' );
const appConfiguration = require( '../../../lib/utils/getAppConfiguration' )('patterns');
const expectedPatternsList = [ 'o-crap', 'o-nav' ];

describe( 'getPatternsList', () => {
	it( 'gets an array of all patterns of type', () => {
		assert.deepEqual( getPatternsList( 'objects' ), expectedPatternsList );
	});
});

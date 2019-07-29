const assert = require( 'assert' );
const getPatternDigit = require( '../../../lib/utils/getPatternDigit' );

describe( 'getPatternDigit', () => {

	it( 'returns 05 for objects', () => {
		assert.equal( getPatternDigit( 'o-nav' ), '05-' );
	});

	it( 'returns 08 for no namespace (modules)', () => {
		assert.equal( getPatternDigit( 'breadcrumbs' ), '08-' );
	});
});
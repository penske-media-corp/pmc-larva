const getPatternType = require( '../../../lib/utils/getPatternType' );
const assert = require( 'assert' );

describe( 'getPatternType', () => {
	it( 'returns components for c-', () => {
		assert.equal( getPatternType( 'c-nav-item' ), 'components' );
	} );

	it( 'returns objects for o-', () => {
		assert.equal( getPatternType( 'o-nav' ), 'objects' );
	} );

	it( 'returns modules for no namespace', () => {
		assert.equal( getPatternType( 'breadcrumbs' ), 'modules' );
	} );
} );

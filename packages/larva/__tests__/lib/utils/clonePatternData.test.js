const assert = require( 'assert' );
const path = require( 'path' );
const fixture = path.join( __dirname, '../../fixtures' );

const clonePatternData = require( '../../../lib/utils/clonePatternData' );
const originalPatternData = require( fixture + '/src/patterns/04-components/c-nav-link/c-nav-link.prototype' );

describe( 'clonePatternData', () => {
	it( 'when cloned data is modified it does not affect the source object', () => {
		
		const clonedPatternData = clonePatternData( fixture + '/src/patterns/04-components/c-nav-link/c-nav-link.prototype' );

		clonedPatternData.modifier_class = "changed-class";

		assert.notEqual( clonedPatternData.modifier_class, originalPatternData.modifier_class );
	});
});

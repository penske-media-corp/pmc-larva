const assert = require( 'assert' );
const path = require( 'path' );
const fixture = path.join( __dirname, '../../fixtures' );

const clonePatternData = require( '../../../lib/utils/clonePatternData' );
const originalPatternData = require( fixture + '/src/patterns/04-components/c-nav-link/c-nav-link.prototype' );

describe( 'clonePatternData', () => {
	const clonedPatternData = clonePatternData( fixture + '/src/patterns/04-components/c-nav-link/c-nav-link.prototype' );

	it( 'when cloned data is modified it does not affect the source object', () => {
		clonedPatternData.modifier_class = "changed-class";
		assert.notEqual( clonedPatternData.modifier_class, originalPatternData.modifier_class );
	});
	
	it( 'contains default data provided by the initial object', () => {
		assert.equal( clonedPatternData.o_nav_title_text, originalPatternData.o_nav_title_text );
	});
});

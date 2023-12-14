const assert = require( 'assert' );
const isCoreTheme = require( '../../../lib/utils/isCoreTheme' );
const appConfiguration = require( '../../../lib/utils/getAppConfiguration' )(
	'patterns'
);

describe( 'isCoreTheme', () => {
	// TODO:
	// Leaving this as a failing test as a reminder to finalize what the core theme logic is,
	// and if it is necessary other than in the parser.
	it( 'is the core theme if there is no configuration for themePatternsDir', () => {
		assert.equal( isCoreTheme( appConfiguration ), true );
	} );
} );

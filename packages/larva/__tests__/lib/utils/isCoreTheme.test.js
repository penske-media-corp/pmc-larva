const assert = require( 'assert' );
const isCoreTheme = require( '../../../lib/utils/isCoreTheme' );
const appConfiguration = require( '../../../lib/utils/getAppConfiguration' )('patterns');

describe( 'isCoreTheme', () => {
	it( 'is the core theme if there is no configuration for themeDir', () => {
		assert.equal( isCoreTheme( appConfiguration ), true );
	});
});

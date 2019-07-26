const assert = require( 'assert' );
const path = require( 'path' );
const fixture = path.join( __dirname, '../../fixtures' );
const patternPathsToLoad = require( '../../../lib/utils/patternPathsToLoad' );
const appConfiguration = require( '../../../lib/utils/getAppConfiguration' )('patterns');

describe( 'patternPathsToLoad', () => {

	it( 'only loads larvaPath if it is the core theme', () => {
		assert.equal( patternPathsToLoad( appConfiguration )[0].includes( 'larva' ), true );
	});

	it( 'returns the theme path if it is not the core theme', () => {
		let appConfigModified = Object.assign( {}, appConfiguration );
		appConfigModified = {
			larvaPatternsDir: '/path/to/larva',
			themePatternsDir: '/path/to/theme/patterns',
		};

		assert.equal( patternPathsToLoad( appConfigModified )[1].includes( 'theme' ), true );
	});

});
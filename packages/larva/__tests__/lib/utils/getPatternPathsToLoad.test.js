const assert = require( 'assert' );
const path = require( 'path' );
const fixture = path.join( __dirname, '../../fixtures' );
const getPatternPathsToLoad = require( '../../../lib/utils/getPatternPathsToLoad' );
const appConfiguration = require( '../../../lib/utils/getAppConfiguration' )('patterns');

describe( 'getPatternPathsToLoad', () => {

	it( 'only loads larvaPath if it is the core theme', () => {
		assert.equal( getPatternPathsToLoad( appConfiguration )[0].includes( 'larva' ), true );
	});

	it( 'returns the theme path if it is not the core theme', () => {
		let appConfigModified = Object.assign( {}, appConfiguration );
		appConfigModified = {
			larvaPatternsDir: '/path/to/larva',
			themePatternsDir: '/path/to/theme/patterns',
		};

		assert.equal( getPatternPathsToLoad( appConfigModified )[1].includes( 'theme' ), true );
	});

});
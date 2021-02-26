const assert = require( 'assert' );
const path = require( 'path' );
const fs = require( 'fs' );
const fixture = path.join( __dirname, '../../fixtures' );

const getAppConfiguration = require( '../../../lib/utils/getAppConfiguration' );
const expectedLarvaConfig = require( fixture + '/larva.config.js' );

describe( 'getAppConfiguration', () => {

	it( 'Get Larva Configuration', () => {
		assert.equal( getAppConfiguration( 'backstop' ), expectedLarvaConfig.backstop );
	});

});

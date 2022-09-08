const path = require( 'path' );
const fixture = path.join( __dirname, '../../fixtures' );

const getAppConfiguration = require( '../../../lib/utils/getAppConfiguration' );
const expectedLarvaConfig = require( fixture + '/larva.config.js' );

describe( 'getAppConfiguration', () => {
	it( 'Get Larva Configuration', () => {
		expect( getAppConfiguration( 'backstop' ) ).toStrictEqual(
			expectedLarvaConfig.backstop
		);
	} );
} );

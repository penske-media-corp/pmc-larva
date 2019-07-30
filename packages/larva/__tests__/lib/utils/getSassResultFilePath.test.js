const assert = require( 'assert' );
const path = require( 'path' );
const fixture = path.join( __dirname, '../../fixtures' );
const getSassResultFilePath = require( '../../../lib/utils/getSassResultFilePath' );

const stubSassFilePath = '/path/to/css-utilities/src/07-utilities/u-display.common.inline.scss';
const expectedResultFilePath = '/path/to/css-utilities/build/css/utilities.common.inline.css';

describe( 'getSassResultFilePath', () => {
	it( 'gets the path of the output CSS file path', () => {
		assert.equal( getSassResultFilePath( stubSassFilePath, 'common.inline' ), expectedResultFilePath );
	});
});

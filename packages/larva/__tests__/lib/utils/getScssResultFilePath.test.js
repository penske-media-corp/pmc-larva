const assert = require( 'assert' );
const path = require( 'path' );
const fixture = path.join( __dirname, '../../fixtures' );
const getScssResultFilePath = require( '../../../lib/utils/getScssResultFilePath' );

const stubSassFilePath = '/path/to/css-utilities/src/07-utilities/u-thing/u-display.common.inline.scss';

const expectedResultFilePath = '/path/to/css-utilities/build/css/common.inline.css';

describe( 'getScssResultFilePath', () => {
	it( 'gets the path of the output CSS file path', () => {
		assert.equal( getScssResultFilePath( stubSassFilePath, 'common.inline' ), expectedResultFilePath );
	});
});

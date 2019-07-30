const assert = require( 'assert' );
const path = require( 'path' );
const fixture = path.join( __dirname, '../../fixtures' );
const getScssResultFilePath = require( '../../../lib/utils/getScssResultFilePath' );

const stubSassFilePath = '/path/to/css-utilities/src/u-display.common.inline.scss';
//const stubSassFilePath = '/path/to/css-utilities/src/07-utilities/u-display.common.inline.scss'; - should be this once path is split at src

const expectedResultFilePath = '/path/to/css-utilities/build/css/utilities.common.inline.css';

describe( 'getScssResultFilePath', () => {
	it( 'gets the path of the output CSS file path', () => {
		assert.equal( getScssResultFilePath( stubSassFilePath, 'common.inline' ), expectedResultFilePath );
	});
});

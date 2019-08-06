const fs = require( 'fs' );
const assert = require( 'assert' );
const path = require( 'path' );
const build = require( '../../lib/build' );
const fixture = path.join( __dirname, '../fixtures' );
const getScssResultFilePath = require( '../../lib/utils/getScssResultFilePath' );

const changedFilePathStub = path.join( fixture, './src/patterns/06-algorithms/a-wrapper/a-wrapper.common.inline.scss' );
const resultFileStub = getScssResultFilePath( changedFilePathStub, 'common.inline' );

const beforeStat = fs.statSync( resultFileStub ).atime;

describe( 'build', () => {
	
	// Not a great test, but better than nothing?
	it( 'accesses the file to build', () => {
		build( 'common.inline', changedFilePathStub );
		assert.notEqual( fs.statSync( resultFileStub ).atime, beforeStat );
	});
});

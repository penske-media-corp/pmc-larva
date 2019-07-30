const assert = require( 'assert' );
const path = require( 'path' );
const fs = require( 'fs' );
const fixture = path.join( __dirname, '../../fixtures' );

const { getProjectNodeModulesPath } = require( '../../../lib/utils/utils' );

describe( 'getProjectNodeModulesPath', () => {
	it( 'gets the absolute path of node_modules in the project', () => {
		assert.equal( fs.existsSync( '', getProjectNodeModulesPath( '?' ) ), true );
	});

	it( 'throws an error if path is not found', () => {
		assert.throws( fs.existsSync( '', getProjectNodeModulesPath( '?' ) ), Error );
	});
});

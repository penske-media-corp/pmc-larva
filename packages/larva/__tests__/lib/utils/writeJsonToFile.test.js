const assert = require( 'assert' );
const fs = require( 'fs' );
const path = require( 'path' );
const getPatternData = require( '../../../lib/utils/getPatternData' );
const fixture = path.join( __dirname, '../../fixtures/src/patterns' );
const writeJson = require( '../../../lib/utils/writeJsonToFile' );
const exec = require( 'child_process' ).exec;
const expectedData = '{"o_crap_classes":"hello class here"}';

describe( 'writeJsonToFile', () => {
	const data = getPatternData( fixture, { type: 'objects', name: 'o-crap' } );
	writeJson( fixture + '/data.json', data );

	it( 'writes o-crap json to a file', () => {
		const data = fs.readFileSync( fixture + '/data.json' ).toString();

		assert.equal( data, expectedData );
	} );

	afterAll( () => {
		exec( 'rm ' + fixture + '/data.json', ( err ) => {
			if ( err ) {
				console.error( err );
			}
		} );
	} );
} );

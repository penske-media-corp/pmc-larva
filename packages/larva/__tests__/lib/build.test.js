const Promise = require( 'bluebird' );
const assert = require( 'assert' );
const fs = require( 'fs' );
const path = require( 'path' );
const fixture = path.join( __dirname, '../fixtures' );

const build = require( '../../lib/build' );
const changedFilePath = path.join( fixture, './src/patterns/06-algorithms/a-wrapper/a-wrapper.common.inline.scss' );

const buildPromise = Promise.promisify( build );

describe( 'build', () => {
	it( 'builds sass files', () => {
		return build( 'common.inline', changedFilePath ).then( ( result ) => {
			assert.equal( result.css.toString().indexOf( '.pmc-a-wrapper' ), 1 );
			assert.equal( result.css.toString().indexOf( '.pmc-a-icon' ), 1 );
		});
	});
});

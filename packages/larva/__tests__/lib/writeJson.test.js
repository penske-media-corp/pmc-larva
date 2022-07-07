const assert = require( 'assert' );
const path = require( 'path' );
const fs = require( 'fs' );
const exec = require( 'child_process' ).exec;

const fixture = path.join( __dirname, '../fixtures' );
const getAppConfiguration = require( '../../lib/utils/getAppConfiguration' );
const writeJson = require( '../../lib/writeJson' );
const patternConfig = getAppConfiguration( 'patterns' );

const expectedJsonPath = path.join( fixture, './build/json/modules/' );

describe( 'writeJson', () => {
	const testJsonPath = path.join(
		expectedJsonPath,
		'test-module.prototype.json'
	);
	const testPrototypePath = path.join(
		fixture,
		'./src/patterns/modules/test-module/test-module.prototype.js'
	);
	const testVariantJsonPath = path.join(
		expectedJsonPath,
		'test-module.featured.json'
	);
	const testIgnoredJsonPath = path.join(
		expectedJsonPath,
		'ignore-me.prototype.json'
	);

	beforeAll( ( done ) => {
		exec( 'mkdirp ' + expectedJsonPath, ( err ) => {
			if ( err ) {
				console.error( err );
				done();
			} else {
				writeJson( patternConfig );
				done();
			}
		} );
	} );

	it( 'creates a JSON file', () => {
		assert.equal( fs.existsSync( testJsonPath ), true );
	} );

	it( 'prototype JS file equals JSON contents', () => {
		assert.equal(
			JSON.stringify( require( testPrototypePath ) ),
			JSON.stringify( require( testJsonPath ) )
		);
	} );

	it( 'does not write JSON for ignored modules', () => {
		assert.equal( fs.existsSync( testIgnoredJsonPath ), false );
	} );

	it( 'creates a variant JSON', () => {
		assert.equal( fs.existsSync( testVariantJsonPath ), true );
	} );

	afterAll( ( done ) => {
		exec( 'rm -r ' + path.join( expectedJsonPath ), ( err ) => {
			if ( err ) {
				console.error( err );
			}
			done();
		} );
	} );
} );

describe( 'writeJson from Larva', () => {
	const testJsonPath = path.join(
		expectedJsonPath,
		'pmc-footer.prototype.json'
	);

	beforeAll( ( done ) => {
		exec( 'mkdirp ' + expectedJsonPath, ( err ) => {
			if ( err ) {
				console.error( err );
			} else {
				writeJson( patternConfig, true );
				done();
			}
		} );
	} );

	it( 'creates a JSON file', () => {
		assert.equal( fs.existsSync( testJsonPath ), true );
	} );

	afterAll( ( done ) => {
		exec( 'rm -r ' + path.join( expectedJsonPath ), ( err ) => {
			if ( err ) {
				console.error( err );
			}
			done();
		} );
	} );
} );

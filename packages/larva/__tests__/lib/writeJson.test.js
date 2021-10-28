const assert = require( 'assert' );
const path = require( 'path' );
const fs = require( 'fs' );
const exec = require( 'child_process' ).exec;

const fixture = path.join( __dirname, '../fixtures' );
const getAppConfiguration = require( '../../lib/utils/getAppConfiguration' );
const writeJson = require( '../../lib/writeJson' );
const patternConfig = getAppConfiguration( 'patterns' );
console.log(patternConfig);

const expectedJsonPath = path.join( fixture, './build/json/modules/' );

describe( 'writeJson', () => {
	let testJsonPath = path.join( expectedJsonPath, 'test-module.prototype.json' );
	let testPrototypePath = path.join( fixture, './src/patterns/modules/test-module/test-module.prototype.js' );
	let testVariantJsonPath = path.join( expectedJsonPath, 'test-module.featured.json' );
	let testIgnoredJsonPath = path.join( expectedJsonPath, 'ignore-me.prototype.json' );
	// let testBrokenJSONPath = path.join( expectedJsonPath, '/src/patterns/modules/broken-prototype/broken-prototype.json ')

	const doWork = ( done ) => {
		exec( 'mkdirp ' + expectedJsonPath, ( err ) => {
			if ( err ) {
				console.error( err );
				done();
			} else {
				writeJson( patternConfig );
				done();
			}
		});
	};

	beforeAll(doWork);

	it( 'creates a JSON file', () => {
		assert.equal( fs.existsSync( testJsonPath ), true );
	});

	it( 'prototype JS file equals JSON contents', () => {
		assert.equal( JSON.stringify( require( testPrototypePath ) ), JSON.stringify( require( testJsonPath ) ) );
	});

	it( 'does not write JSON for ignored modules', () => {
		assert.equal( fs.existsSync( testIgnoredJsonPath ), false );
	});

	it( 'creates a variant JSON', () => {
		assert.equal( fs.existsSync( testVariantJsonPath ), true );
	});

	it.only('should exit if there is an error in the module data', async () => {
		const malFormedJSON = "{ notAnObject: [ 'but has properties': 'like one' ] }";
		fs.writeFileSync( `${expectedJsonPath}/badJson.prototype.js`, malFormedJSON );
		// console.log( fs.existsSync( `${expectedJsonPath}/badJson.prototype.js` ));
		// console.log( JSON.parse( require( `${expectedJsonPath}/badJson.prototype.js` )));

		await writeJson(patternConfig);

		// expect(
		// 	writeJson()
		// )
	});

	afterAll( ( done ) => {
		exec( 'rm -r ' + path.join( expectedJsonPath ), ( err ) => {
			if ( err ) {
				console.error( err );
			}
			done();
		});
	});
});

describe( 'writeJson from Larva', () => {
	let testJsonPath = path.join( expectedJsonPath, 'pmc-footer.prototype.json' );

	beforeAll( ( done ) => {
		exec( 'mkdirp ' + expectedJsonPath, ( err ) => {
			if ( err ) {
				console.error( err );
			} else {
				writeJson( patternConfig, true );
				done();
			}
		});
	});

	it( 'creates a JSON file', () => {
		assert.equal( fs.existsSync( testJsonPath ), true );
	});

	afterAll( ( done ) => {
		exec( 'rm -r ' + path.join( expectedJsonPath ), ( err ) => {
			if ( err ) {
				console.error( err );
			}
			done();
		});
	});
});

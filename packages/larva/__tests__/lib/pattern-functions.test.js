const assert = require( 'assert' );
const path = require( 'path' );
const fs = require( 'fs' );
const fixture = path.resolve( __dirname, '../__fixture__' );

const { isCoreTheme, patternPathsToLoad, getPatternsIndexPath, buildPatternFilePath, getPatternSchema, getPatternType } = require( '../../lib/utils/pattern-functions' );
const appConfiguration = require( '../../lib/utils/getAppConfiguration' )('patterns');

const expectedSchema = require( fixture + '/src/patterns/04-components/c-nav-link/c-nav-link.prototype.js' );
const expectedSchemaFromJson = require( fixture + '/src/patterns/05-objects/o-crap/o-crap.json' );
const expectedPath = fixture + '/src/patterns/05-objects/o-nav/o-nav.json';

describe( 'getPatternSchema', () => {
	it( 'throws an error if no pattern prototype is found', () => {
		assert.throws( () => getPatternSchema( fixture, { type: 'objects', name: 'o-nav' } ), Error );
	});

	it( 'first returns the pattern object if the schema is found', () => {
		assert.equal( getPatternSchema( fixture + '/src/patterns', { name: 'c-nav-link' } ), expectedSchema );
	});

	it( 'returns the pattern json object if no prototype is found', () => {
		assert.equal( getPatternSchema( fixture + '/src/patterns', { name: 'o-crap' } ), expectedSchemaFromJson );
	});
});

// describe( 'getPatternType', () => {
// 	it( 'returns components for c-', () => {
// 		assert.equal( getPatternType( 'c-nav-item' ), 'components' );
// 	});

// 	it( 'returns objects for o-', () => {
// 		assert.equal( getPatternType( 'o-nav' ), 'objects' );
// 	});

// 	it( 'returns modules for no namespace', () => {
// 		assert.equal( getPatternType( 'breadcrumbs' ), 'modules' );
// 	});
// });



// describe( 'isCoreTheme', () => {
// 	it( 'is the core theme if there is no configuration for themeDir', () => {
// 		assert.equal( isCoreTheme( appConfiguration ), true );
// 	});
// });

// describe( 'patternPathsToLoad', () => {

// 	it( 'only loads larvaPath if it is the core theme', () => {
// 		assert.equal( patternPathsToLoad( appConfiguration )[0].includes( 'larva' ), true );
// 	});

// 	it( 'returns the theme path if it is not the core theme', () => {
// 		let appConfigModified = Object.assign( {}, appConfiguration );
// 		appConfigModified = {
// 			larvaDir: '/path/to/larva',
// 			themeDir: '/path/to/theme/patterns',
// 		};

// 		assert.equal( patternPathsToLoad( appConfigModified )[1].includes( 'theme' ), true );
// 	});

// 	it( 'throws an error if patterns.larvaDir is undefined', () => {
// 		let appConfigModified = Object.assign( {}, appConfiguration );
// 		appConfigModified = {};
		
// 		assert.throws( () => patternPathsToLoad( appConfigModified )[0].includes( 'larva' ), Error );
// 	});
// });

// describe( 'getPatternsIndexPath', () => {
// 	it( 'gets the path for larva if it is the core theme', () => {
// 		assert.equal( getPatternsIndexPath( appConfiguration ).includes( 'larva' ), true );
// 	});
// });

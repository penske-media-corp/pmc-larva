const path = require( 'path' );
const getAppConfiguration = require( '../../../lib/utils/getAppConfiguration' );
const getPatternVariants = require( '../../../lib/utils/getPatternVariants' );
const getSubDirectoryNames = require( '../../../lib/utils/getSubDirectoryNames' );
const getModuleNamesFromDirectory = require( '../../../lib/utils/getModuleNamesFromDirectory' );

const config = getAppConfiguration( 'patterns' );

const expectedPatterns = {
	'components': {
		'c-nav-link': [
			'featured.aia',
			'featured',
			'prototype'
		]
	},
	'modules': {
		'test-module': [
			'featured',
			'prototype'
		]
	},
	'objects': {
		'o-crap': [],
		'o-nav': []
	},
	'one-offs': {
		'newswire': [
			'prototype'
		]
	}
}

describe( 'getAllPatternsObj', () => {

	it( 'returns an object containing all patterns and variants', () => {
		function getAllPatterns( startPath ) {

			const patternDirs = getSubDirectoryNames( startPath );

			let obj = {};

			patternDirs.map( ( patternType ) => {
				let patterns = [];
				obj[patternType] = {};

				// Modules can be ignored, which maybe is unecessary
				// but for now continue on that path.
				if ( 'modules' === patternType ) {
					patterns = getModuleNamesFromDirectory( startPath, config.ignoredModules );
				} else {
					patterns = getSubDirectoryNames( path.join( startPath, patternType ) );
				}

				patterns.map( ( pattern ) => {
					obj[patternType][pattern] = getPatternVariants( path.join( startPath, `${patternType}/${pattern}` ) );
				} );

			} );

			return obj;
		}

		expect( 
			getAllPatterns( config.projectPatternsDir )
		).toEqual( 
			expectedPatterns
		);
	});
});
const path = require( 'path' );
const getAppConfiguration = require( '../../../lib/utils/getAppConfiguration' );
const getPatternVariants = require( '../../../lib/utils/getPatternVariants' );
const getSubDirectoryNames = require( '../../../lib/utils/getSubDirectoryNames' );
const getModuleNamesFromDirectory = require( '../../../lib/utils/getModuleNamesFromDirectory' );

const config = getAppConfiguration( 'patterns' );

const expectedPatterns = {
	components: {
		'c-nav-link': [
			'featured.aia',
			'featured',
			'prototype'
		]
	},
	modules: {
		'test-module': [
			'featured',
			'prototype'
		]
	},
	objects: {
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

	it( 'returns an array of variants', () => {
		function getAllPatterns( startPath ) {
			const components = getSubDirectoryNames( path.join( startPath, 'components' ) );
			const objects = getSubDirectoryNames( path.join( startPath, 'objects' ) );
			const oneOffs = getSubDirectoryNames( path.join( startPath, 'one-offs' ) );
			const modules = getModuleNamesFromDirectory( startPath, config.ignoredModules );

			let obj = {
				'components': {},
				'objects': {},
				'modules': {},
				'one-offs': {},
			};

			components.map( ( c ) => obj.components[c] = getPatternVariants( path.join( startPath, `components/${c}` ) ) );
			modules.map( ( m ) => obj.modules[m] = getPatternVariants( path.join( startPath, `modules/${m}` ) ) );
			objects.map( ( m ) => obj.objects[m] = getPatternVariants( path.join( startPath, `objects/${m}` ) ) );
			oneOffs.map( ( m ) => obj['one-offs'][m] = getPatternVariants( path.join( startPath, `one-offs/${m}` ) ) );
			
			return obj;
		}

		expect( 
			getAllPatterns( config.projectPatternsDir )
		).toEqual( 
			expectedPatterns
		);
	});
});
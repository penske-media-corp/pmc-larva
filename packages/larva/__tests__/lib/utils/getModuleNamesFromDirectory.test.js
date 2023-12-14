const getModuleNamesFromDirectory = require( '../../../lib/utils/getModuleNamesFromDirectory' );
const getAppConfiguration = require( '../../../lib/utils/getAppConfiguration' );

const config = getAppConfiguration( 'patterns' );

describe( 'getModuleNamesFromDirectory', () => {
	it( 'gets an array of modules', () => {
		expect(
			getModuleNamesFromDirectory(
				config.projectPatternsDir,
				config.ignoredModules
			)
		).toEqual( expect.arrayContaining( [ 'test-module' ] ) );
	} );

	it( 'ignored modules with underscores', () => {
		expect(
			getModuleNamesFromDirectory(
				config.projectPatternsDir,
				config.ignoredModules
			)
		).toEqual( expect.not.arrayContaining( [ '_also-ignored' ] ) );
	} );

	it( 'ignores modules listed in larva.config.ignoredModules', () => {
		expect(
			getModuleNamesFromDirectory(
				config.projectPatternsDir,
				config.ignoredModules
			)
		).toEqual( expect.not.arrayContaining( [ 'ignore-me' ] ) );
	} );

	it( 'gets module names from larva', () => {
		expect(
			getModuleNamesFromDirectory(
				config.larvaPatternsDir,
				config.ignoredModules
			)
		).toEqual( expect.arrayContaining( [ 'pmc-footer' ] ) );
	} );
} );

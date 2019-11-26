const getModuleNamesFromDirectory = require( '../../../lib/utils/getModuleNamesFromDirectory' );
const getAppConfiguration = require( '../../../lib/utils/getAppConfiguration' );

const config = getAppConfiguration( 'patterns' );

describe( 'getModuleNamesFromDirectory', () => {
	it( 'prints a list of module names', () => {
		expect( getModuleNamesFromDirectory( config.projectPatternsDir, config.ignoredModules ) ).toEqual( expect.arrayContaining( [ 'test-module', 'test-module-2' ] ) );
	});

	it( 'filters out ignored modules', () => {
		expect( getModuleNamesFromDirectory( config.projectPatternsDir, config.ignoredModules ) ).toEqual( expect.not.arrayContaining( [ 'mega-menu-footer' ] ) );
	});

	it( 'gets module names from larva', () => {
		expect( getModuleNamesFromDirectory( config.larvaPatternsDir, config.ignoredModules ) ).toEqual( expect.arrayContaining( [ 'pmc-footer' ] ) );
	});

});
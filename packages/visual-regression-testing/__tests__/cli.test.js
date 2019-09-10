const assert = require( 'assert' );
const path = require( 'path' );
const { getCliModuleArgs, prepareTestPaths, prepareModuleSelectors } = require( '../lib/backstop-utils' );
// const getAppConfiguration = require( '@penskemediacorp/larva' ).config;

const processMocker = {
	argv: [
		'/usr/local/Cellar/node/10.11.0/bin/node',
		'/Users/laraschenck/Sites/pmc-deadline-2019/assets/node_modules/.bin/backstop',
		'--configPath=node_modules/pmc-build-utils/lib/backstop.js',
		'test',
		'--modules=footer,mega-menu-content,social-share'
	]
};

describe( 'backstop utils', function() {

	it( 'getCliModuleArgs - gets a list of modules from the cli', () => {
		assert.deepEqual( getCliModuleArgs( processMocker.argv ), [ 'footer', 'mega-menu-content', 'social-share' ] );
	});

	it( 'prepareTestPaths - prepares a list of paths from module names', () => {
		assert.deepEqual( prepareTestPaths( [ 'footer', 'mega-menu-content', 'social-share' ], 'project' ), [ '/project/modules/footer', '/project/modules/mega-menu-content', '/project/modules/social-share' ] );
	});

	it( 'prepareModuleSelectors - adds a . in front of each module to make it a class', () => {
		assert.deepEqual( prepareModuleSelectors( [ 'footer', 'mega-menu-content', 'social-share' ], 'project' ), [ '.footer', '.mega-menu-content', '.social-share' ] );
	});
});

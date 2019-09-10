const assert = require( 'assert' );
const path = require( 'path' );
const { getCliModuleArgs, prepareTestPaths, prepareTestSelectors } = require( '../lib/backstop-utils' );
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

	it( 'prepareTestPaths - returns same array if loc is undefined', () => {
		assert.deepEqual( prepareTestPaths( [ '/', '/blog/', '/about/' ] ), [ '/', '/blog/', '/about/' ] );
	});

	it( 'prepareTestSelectors - adds a . in front of each module to make it a class', () => {
		assert.deepEqual( prepareTestSelectors( [ 'footer', 'mega-menu-content', 'social-share' ] ), [ '.footer', '.mega-menu-content', '.social-share' ] );
	});

	it( 'prepareTestSelectors - returns document if array of modules is null', () => {
		assert.deepEqual( prepareTestSelectors( null ), [ 'document' ] );
	});
});

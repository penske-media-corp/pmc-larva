const assert = require( 'assert' );
const path = require( 'path' );
const { getCliModuleArgs, prepareTestPaths, prepareTestSelectors } = require( '../../lib/utils' );

const processMocker = {
	argv: [ 
		'/Users/laraschenck/.nvm/versions/node/v11.6.0/bin/node',
		'/Users/laraschenck/.nvm/versions/node/v11.6.0/bin/backstop',
		'--config',
		'packages/visual-regression-testing/index.js',
		'--modules=footer,mega-menu-content,social-share',
		'reference'
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

const assert = require( 'assert' );
const path = require( 'path' );
const { getCliModuleArgs, prepareTestPaths, prepareTestSelectors } = require( '../../lib/utils' );

// Gets test app config from larva/__test__/fixtures/larva.config.js
const getAppConfiguration = require( '@penskemediacorp/larva' ).config;
const appConfiguration = getAppConfiguration( 'backstop' );

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

	it( 'prepareTestPaths - returns paths for modules if present', () => {
		assert.deepEqual( 
			prepareTestPaths( appConfiguration.larvaModules, appConfiguration.pmcTestPaths ), 
			[ '/modules/footer', '/modules/mega-menu-content', '/modules/social-share' ] 
		);
	});

	it( 'prepareTestPaths - returns array of pmcPaths if no larva modules', () => {
		assert.deepEqual( prepareTestPaths( [], [ '/', '/blog/', '/about/' ] ), [ '/', '/blog/', '/about/' ] );
	});

	it( 'prepareTestSelectors - adds a . in front of each module to make it a class', () => {
		assert.deepEqual( prepareTestSelectors( [ 'footer', 'mega-menu-content', 'social-share' ] ), [ '.footer', '.mega-menu-content', '.social-share' ] );
	});

	it( 'prepareTestSelectors - returns document if array of modules is null', () => {
		assert.deepEqual( prepareTestSelectors( null ), [ 'document' ] );
	});
});

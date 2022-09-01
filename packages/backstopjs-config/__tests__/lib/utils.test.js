const assert = require( 'assert' );
const path = require( 'path' );
const { prepareTestPaths, prepareTestSelectors } = require( '../../lib/utils' );

// Gets test app config from larva/__test__/fixtures/larva.config.js
const getAppConfiguration = require( '../../lib/getConfig' );
const appConfiguration = getAppConfiguration( 'backstop' );

describe( 'backstop utils', function () {
	it( 'prepareTestPaths - returns paths for modules if present', () => {
		assert.deepEqual(
			prepareTestPaths(
				appConfiguration.larvaModules,
				appConfiguration.testPaths
			),
			[
				'/modules/footer',
				'/modules/mega-menu-content',
				'/modules/social-share',
			]
		);
	} );

	it( 'prepareTestPaths - returns array of pmcPaths if no larva modules', () => {
		assert.deepEqual(
			prepareTestPaths( [], [ '/', '/blog/', '/about/' ] ),
			[ '/', '/blog/', '/about/' ]
		);
	} );

	it( 'prepareTestSelectors - adds a . in front of each module to make it a class', () => {
		assert.deepEqual(
			prepareTestSelectors( [
				'footer',
				'mega-menu-content',
				'social-share',
			] ),
			[ '.footer', '.mega-menu-content', '.social-share' ]
		);
	} );

	it( 'prepareTestSelectors - returns document if array of modules is null', () => {
		assert.deepEqual( prepareTestSelectors( null ), [ 'document' ] );
	} );
} );

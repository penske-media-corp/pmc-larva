const assert = require( 'assert' );
const path = require( 'path' );
const getScenarios = require( '../lib/getScenarios' );
const backstopUtils = require( '../lib/utils' );

// Gets test app config from larva/__test__/fixtures/larva.config.js
const getAppConfiguration = require( '@penskemediacorp/larva' ).config;
const appConfiguration = getAppConfiguration( 'backstop' );

const processMocker = {
	argv: [
		'/usr/local/Cellar/node/10.11.0/bin/node',
		'/Users/laraschenck/Sites/pmc-deadline-2019/assets/node_modules/.bin/backstop',
		'--configPath=node_modules/pmc-build-utils/lib/backstop.js',
		'test'
	],
	argvWithUrl: [
		'/usr/local/Cellar/node/10.11.0/bin/node',
		'/Users/laraschenck/Sites/pmc-deadline-2019/assets/node_modules/.bin/backstop',
		'--configPath=node_modules/pmc-build-utils/lib/backstop.js',
		'test',
		'--url=https://notlaura.com'
	]
};

const expectations = {
	url: 'https://notlaura.com'
};

// Basically what happens in index.js
const scenarios = getScenarios( appConfiguration.pmcMainQaUrl, appConfiguration.pmcTestPaths, backstopUtils.prepareTestSelectors( null ), {} );

describe( 'url handling for backstop command', function() {

	it( 'overrides the configuration url with a CLI argument', () => {
		assert.equal( backstopUtils.maybeUseCliUrl( processMocker.argvWithUrl, appConfiguration.pmcMainQaUrl ), expectations.url );
	});

	it( 'uses the configuration URL if no URL parameter is passed', () => {
		assert.equal( backstopUtils.maybeUseCliUrl( processMocker.argv, appConfiguration.pmcMainQaUrl ), appConfiguration.pmcMainQaUrl );
	});

	it( 'returns a pmcTestPaths url if there are no larva modules', () => {

		// Remove larvaModules to test plain URLs
		delete appConfiguration.larvaModules;

		assert.equal( appConfiguration.pmcMainQaUrl + appConfiguration.pmcTestPaths[0], scenarios[0].url );
	});

});


const assert = require( 'assert' );
const getScenarios = require( '../lib/getScenarios' );
const backstopUtils = require( '../lib/utils' );

// Gets test app config from larva/__test__/fixtures/larva.config.js
const getAppConfiguration = require( '../lib/getConfig' );
const appConfiguration = getAppConfiguration( 'backstop' );

const processMocker = {
	argv: [
		'/usr/local/Cellar/node/10.11.0/bin/node',
		'/Users/laraschenck/Sites/pmc-deadline-2019/assets/node_modules/.bin/backstop',
		'--configPath=node_modules/pmc-build-utils/lib/backstop.js',
		'test',
	],
	argvWithUrl: [
		'/usr/local/Cellar/node/10.11.0/bin/node',
		'/Users/laraschenck/Sites/pmc-deadline-2019/assets/node_modules/.bin/backstop',
		'--configPath=node_modules/pmc-build-utils/lib/backstop.js',
		'test',
		'--url=https://notlaura.com',
	],
};

const expectations = {
	url: 'https://notlaura.com',
};

// Basically what happens in index.js

describe( 'url handling for backstop command', function () {
	it( 'overrides the configuration url with a CLI argument', () => {
		assert.equal(
			backstopUtils.maybeUseCliUrl(
				processMocker.argvWithUrl,
				appConfiguration.testBaseUrl
			),
			expectations.url
		);
	} );

	it( 'uses the configuration URL if no URL parameter is passed', () => {
		assert.equal(
			backstopUtils.maybeUseCliUrl(
				processMocker.argv,
				appConfiguration.testBaseUrl
			),
			appConfiguration.testBaseUrl
		);
	} );

	it( 'returns a testPaths url if there are no larva modules', () => {
		const scenarios = getScenarios(
			appConfiguration.testBaseUrl,
			appConfiguration.testPaths,
			backstopUtils.prepareTestSelectors( null ),
			{}
		);

		// Remove larvaModules to test plain URLs
		delete appConfiguration.larvaModules;

		assert.equal(
			appConfiguration.testBaseUrl + appConfiguration.testPaths[ 0 ],
			scenarios[ 0 ].url
		);
	} );

	it( 'second scenario has a selector', () => {
		const scenarios = getScenarios(
			appConfiguration.testBaseUrl,
			appConfiguration.testPaths,
			backstopUtils.prepareTestSelectors( null ),
			{}
		);

		assert.equal( scenarios[ 1 ].selectors[ 0 ], 'document' );
	} );
} );

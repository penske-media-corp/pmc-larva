const assert = require( 'assert' );
const path = require( 'path' );
const pmcBackstop = require( '../index' );
const getAppConfiguration = require( '@penskemediacorp/larva' ).config;

const backstopUtils = require( '../lib/utils' );
const fixture = path.join( __dirname, '../test/fixtures' );

const pmcConfig = getAppConfiguration( 'backstopjs' );

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

describe( 'url handling for backstop command', function() {

	it( 'overrides the configuration url with a CLI argument', () => {
		assert.equal( backstopUtils.maybeUseCliUrl( processMocker.argvWithUrl, pmcConfig.pmcMainQaUrl ), expectations.url );
	});

	it( 'uses the configuration URL if no URL parameter is passed', () => {
		assert.equal( backstopUtils.maybeUseCliUrl( processMocker.argv, pmcConfig.pmcMainQaUrl ), pmcConfig.pmcMainQaUrl );
	});

	it( 'returns url from the app configuration as a scenario url', () => {
		assert.equal( pmcConfig.pmcMainQaUrl + pmcConfig.pmcTestPaths[0], pmcBackstop.scenarios[0].url );
	});

});

describe( 'backstop configuration overrides', function() {
	it( 'overrides scenario configuration with pmcScenario', () => {
		assert.equal( pmcConfig.pmcScenario.delay, pmcBackstop.scenarios[0].delay );
	});
});

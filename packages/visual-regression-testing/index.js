const merge = require( 'webpack-merge' );
const getAppConfiguration = require( '@penskemediacorp/larva' ).config;

const path    = require( 'path' );
const chalk = require( 'chalk' );
const backstopUtils = require( './lib/backstop-utils' );

const appConfiguration = getAppConfiguration( 'visualRegressionTesting' );
const { pmcMainQaUrl, pmcTestPaths, pmcScenario, backstopApi } = appConfiguration;

const cliArgs = ( function getCliArgs() {
	if ( 'test' === process.env.NODE_ENV ) {
		return false;
	}

	return process.argv;
}() );

const urlBase = backstopUtils.maybeUseCliUrl( cliArgs, pmcMainQaUrl );

// Exit if no paths in config.
if ( 0 === pmcTestPaths.length ) {
	console.error( chalk.red.bold( '\nPlease specify paths to test in pmc.config.js in the structure `backstop.pmcTestPaths`.\n' ) );
	process.exit( 1 );
}

// Exit if no URL from config or CLI.
if ( undefined === pmcMainQaUrl && false === urlFromCli ) {
	console.error( chalk.red.bold( '\nPlease specify a QA URL in pmc.config.js in `backstop.pmcMainQaUrl`, or pass in a full URL with the comman e.g. `npm run backstop -- test --url=https://example.com`\n' ) );
	process.exit( 1 );
}

let scenarios = [];

for ( let i = 0; i < pmcTestPaths.length; i++ ) {
	scenarios.push( merge({
		'label': pmcTestPaths[i],
		'url': urlBase + pmcTestPaths[i],
		'hideSelectors': [],
		'removeSelectors': [],
		'selectors': [
			'document'
		],
		'delay': 500,
		'misMatchThreshold': 0.1,
		'onBeforeScript': 'puppet/onBefore.js',
		'onReadyScript': 'puppet/onReady.js'
	}, pmcScenario ) );
};

module.exports = merge({
	'id': 'backstop_test',
	'viewports': [
		{
			'name': 'small',
			'width': 400,
			'height': 620
		},
		{
			'name': 'desktop',
			'width': 1000,
			'height': 800
		},
		{
			'name': 'desktop-xl',
			'width': 1400,
			'height': 1000
		}
	],
	'scenarios': scenarios,
	'paths': {
		'bitmaps_reference': process.cwd() + '/backstop_data/bitmaps_reference',
		'bitmaps_test': process.cwd() + '/backstop_data/bitmaps_test',
		'engine_scripts': path.join( __dirname, './backstop_data/engine_scripts' ),
		'html_report': process.cwd() + '/backstop_data/html_report',
		'ci_report': process.cwd() + '/backstop_data/ci_report'
	},
	'report': [ 'browser' ],
	'engine': 'puppeteer',
	'engineOptions': {
		'args': [ '--no-sandbox', '--proxy-server=127.0.0.1:3000', '--proxy-bypass-list=<-loopback>' ],
		'waitTimeout': 120000
	},
	'asyncCaptureLimit': 5,
	'asyncCompareLimit': 50,
	'debug': false,
	'debugWindow': false
}, backstopApi );


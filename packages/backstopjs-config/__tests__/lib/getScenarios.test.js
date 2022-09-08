const getScenarios = require( '../../lib/getScenarios' );
const assert = require( 'assert' );

const stub = {
	paths: [ '/modules/footer', '/modules/header' ],
	urlBase: 'http://localhost:3000',
	selectors: [ '.footer', '.header' ],
	scenarioOverride: {},
};

const expectation = [
	{
		label: '/modules/footer',
		url: 'http://localhost:3000/modules/footer',
		hideSelectors: [],
		removeSelectors: [],
		selectors: [ '.footer' ],
		delay: 500,
		misMatchThreshold: 0.1,
		onBeforeScript: 'puppet/onBefore.js',
		onReadyScript: 'puppet/onReady.js',
	},
	{
		label: '/modules/header',
		url: 'http://localhost:3000/modules/header',
		hideSelectors: [],
		removeSelectors: [],
		selectors: [ '.header' ],
		delay: 500,
		misMatchThreshold: 0.1,
		onBeforeScript: 'puppet/onBefore.js',
		onReadyScript: 'puppet/onReady.js',
	},
];

describe( 'getScenarios', () => {
	it( 'outputs backstop scenario objects', () => {
		const testScenarios = getScenarios(
			stub.urlBase,
			stub.paths,
			stub.selectors,
			stub.scenarioOverride
		);

		assert.deepEqual( testScenarios, expectation );
	} );

	it( 'supports document for selector', () => {
		stub.selectors = [ 'document' ];

		const testScenarios = getScenarios(
			stub.urlBase,
			stub.paths,
			stub.selectors,
			stub.scenarioOverride
		);

		assert.deepEqual( testScenarios[ 0 ].selectors, stub.selectors );
	} );

	it( 'overrides scenario config', () => {
		stub.scenarioOverride.delay = 1000;

		const testScenario = getScenarios(
			stub.urlBase,
			stub.paths,
			stub.selectors,
			stub.scenarioOverride
		);

		assert.deepEqual(
			testScenario[ 0 ].delay,
			stub.scenarioOverride.delay
		);
	} );
} );

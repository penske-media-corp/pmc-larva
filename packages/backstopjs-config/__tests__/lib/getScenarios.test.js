const getScenarios = require('../../lib/getScenarios');
const assert = require( 'assert' );

let stub = {
	paths: ['/modules/footer', '/modules/header'],
	urlBase: 'http://localhost:3000',
	selectors: ['.footer', '.header'],
	scenarioOverride: {}
};

const expectation = [{
		label: '/modules/footer',
		url: 'http://localhost:3000/modules/footer',
		hideSelectors: [],
		removeSelectors: [],
		selectors: ['.footer'],
		delay: 500,
		misMatchThreshold: 0.1,
		onBeforeScript: 'puppet/onBefore.js',
		onReadyScript: 'puppet/onReady.js'
	},
	{
		label: '/modules/header',
		url: 'http://localhost:3000/modules/header',
		hideSelectors: [],
		removeSelectors: [],
		selectors: ['.header'],
		delay: 500,
		misMatchThreshold: 0.1,
		onBeforeScript: 'puppet/onBefore.js',
		onReadyScript: 'puppet/onReady.js'
	}
];

describe('getScenarios', () => {

	it('outputs scenario objects', () => {

		let testScenario = getScenarios(
			stub.urlBase, stub.paths, stub.selectors, stub.scenarioOverride
		);

		assert.deepEqual(testScenario, expectation);

	});

	it( 'overrides scenario config', () => {

		stub.scenarioOverride.delay = 1000;

		let testScenario = getScenarios(
			stub.urlBase, stub.paths, stub.selectors, stub.scenarioOverride
		);

		assert.deepEqual( testScenario[0].delay, stub.scenarioOverride.delay );

	});
})
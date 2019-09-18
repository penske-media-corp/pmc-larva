const merge = require( 'webpack-merge' );

module.exports = function getScenarios( urlBase, paths, selectors, scenarioOverride ) {

	let scenarios = [];
	
	for ( let i = 0; i < paths.length; i++ ) {
		console.log( urlBase + paths[i] );
		
		scenarios.push( merge({
			'label': paths[i],
			'url': urlBase + paths[i],
			'hideSelectors': [],
			'removeSelectors': [],
			'selectors': [
				selectors[i]
			],
			'delay': 500,
			'misMatchThreshold': 0.1,
			'onBeforeScript': 'puppet/onBefore.js',
			'onReadyScript': 'puppet/onReady.js'
		}, scenarioOverride ) );
	};

	return scenarios;
}
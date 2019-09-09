const path = require( 'path' );

module.exports = {
	visualRegressionTesting: {
		pmcMainQaUrl: 'http://localhost:3000',
		pmcTestPaths: [
			'/larva/modules/footer'
		],
		pmcScenario: {
			'delay': 1000,
			'misMatchThreshold': 0.5,
			'selectors': [
				'.footer'
			]
		}
	},

	patterns: {
		larvaPatternsDir: path.resolve( './packages/larva-patterns' ),
	}
};
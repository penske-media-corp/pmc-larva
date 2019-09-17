const path = require( 'path' );

module.exports = {
	backstopjs: {
		pmcMainQaUrl: 'http://localhost:3000',
		pmcScenario: {
			'delay': 1000,
			'misMatchThreshold': 0.5,
		}
	},

	patterns: {
		larvaPatternsDir: path.resolve( './packages/larva-patterns' ),
	}
};
const path = require( 'path' );

module.exports = {
	backstop: {
		pmcMainQaUrl: 'http://localhost:3000',
		pmcScenario: {
			'delay': 1000,
			'misMatchThreshold': 0.5,
		},
		larvaModules: [ 'footer', 'mega-menu-content', 'social-share' ]
	},

	patterns: {
		larvaPatternsDir: path.resolve( './packages/larva-patterns' ),
	}
};
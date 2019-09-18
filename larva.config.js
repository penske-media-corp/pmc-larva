const path = require( 'path' );

module.exports = {
	backstop: {
		pmcMainQaUrl: 'http://localhost:3000/larva',
		pmcScenario: {
			'delay': 1000,
			'misMatchThreshold': 0.5,
		},
		larvaModules: [ 'footer', 'breadcrumbs' ],
		backstopApi: {
			'engineOptions': {
				'args': [ '--no-sandbox', '--proxy-server=127.0.0.1:3000', '--proxy-bypass-list=<-loopback>' ],
			}
		}
	},

	patterns: {
		larvaPatternsDir: path.resolve( './packages/larva-patterns' ),
	}
};
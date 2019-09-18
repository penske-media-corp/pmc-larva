const path = require( 'path' );

module.exports = {
	backstop: {
		testBaseUrl: 'https://notlaura.com',
		testScenario: {
			'delay': 1000,
			'misMatchThreshold': 0.5,
		},
		testPaths: [ '/about' ],
		backstopConfig: {
			// 'engineOptions': {
			// 	'args': [ '--no-sandbox', '--proxy-server=127.0.0.1:3000', '--proxy-bypass-list=<-loopback>' ],
			// }
		}
	},

	patterns: {
		larvaPatternsDir: path.resolve( './packages/larva-patterns' ),
	}
};
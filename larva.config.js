const path = require( 'path' );
const LARVA_PORT = 3000;

module.exports = {
	brand: 'default',

	backstop: {
		testBaseUrl: 'http://localhost:' + LARVA_PORT + '/larva/__tests__/',
		testScenario: {
			delay: 1000,
			misMatchThreshold: 0.5,
		},
		testPaths: [ 'profile', 'profile-index', 'vlanding', 'css', 'hub' ],
		backstopConfig: {
			engineOptions: {
				args: [
					'--no-sandbox',
					'--proxy-server=127.0.0.1:' + LARVA_PORT,
					'--proxy-bypass-list=<-loopback>',
				],
			},
		},
	},

	patterns: {
		larvaPatternsDir: path.resolve( './packages/larva-patterns' ),
		projectPatternsDir: path.resolve( './src/patterns' ),
	},
};

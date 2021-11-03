const path = require( 'path' );
const LARVA_PORT = 3001;

module.exports = {
	brand: 'variety',

	themeAssets: {
		'vy-assets': path.resolve( '../VVV/www/variety-com/public_html/wp-content/themes/pmc-variety-2020/assets' )
	},

	backstop: {
		testBaseUrl: 'http://localhost:' + LARVA_PORT + '/larva/__tests__/',
		testScenario: {
			delay: 1000,
			misMatchThreshold: 0.5,
		},
		testPaths: [ 'profile', 'profile-index', 'vlanding', 'css' ],
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

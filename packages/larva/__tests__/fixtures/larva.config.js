const path = require( 'path' );

module.exports = {

	webpack: {
		entry: {
			common: './common.entry.js',
			critical: './critical.entry.js',
			special: './special.entry.js',
			great: './great.entry.js'
		}
	},

	backstop: {
		testBaseUrl: 'https://pmc:for-the-win@deadline-2019.pmcqa.com',
		testPaths: [
			'/',
			'/blog/'
		],
		testScenario: {
			'delay': 5000,
			'misMatchThreshold': 0.5
		},
		larvaModules: [ 'footer', 'mega-menu-content', 'social-share' ]
	},

	parser: {
		isCore: false,
	},
	
	patterns: {
		projectPatternsDir: path.join( __dirname, './src/patterns' ),
		larvaPatternsDir: path.resolve( __dirname, '../../node_modules/@penskemediacorp/larva-patterns' )
	}
};
const path = require( 'path' );

module.exports = {
	webpack: {
		entry: {
			common: './common.entry.js',
			critical: './critical.entry.js',
			special: './special.entry.js',
			great: './great.entry.js',
		},
	},

	backstop: {
		testBaseUrl: 'https://pmc:for-the-win@deadline-2019.pmcqa.com',
		testPaths: [ '/', '/blog/' ],
		testScenario: {
			delay: 5000,
			misMatchThreshold: 0.5,
		},
		larvaModules: [ 'footer', 'mega-menu-content', 'social-share' ],
	},

	patterns: {
		projectPatternsDir: path.join( __dirname, './src/patterns' ),
		larvaPatternsDir: path.resolve( __dirname, '../../../larva-patterns' ),
		ignoredModules: [ 'ignore-me' ],
	},

	assets: {
		path: __dirname,
	},

	parser: {
		isCore: false,
	},
};

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

	visual_regression_testing: {
		pmcMainQaUrl: 'https://pmc:for-the-win@deadline-2019.pmcqa.com',
		pmcTestPaths: [
			'/',
			'/blog/'
		],
		pmcScenario: {
			'delay': 5000,
			'misMatchThreshold': 0.5
		}
	},

	parser: {
		isCore: false,
	},
	
	patterns: {
		projectPatternsDir: path.join( __dirname, './src/patterns' ),
		larvaPatternsDir: path.resolve( __dirname, '../../node_modules/@penskemediacorp/larva-patterns' )
	}
};
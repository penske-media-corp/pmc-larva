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
		isCore: true,
	},
	
	patterns: {
		larvaDir: '/path/to/larva'
	}
};
const path = require( 'path' );

module.exports = {
	webpack: {
		aliases: {
			'@js': path.resolve( './src/js' )
		},
		entries: {
			common: './entries/common.entry.js'
		}
	},

	backstop: {
		// testBaseUrl: 'https://notlaura.com',
		testBaseUrl: 'http://localhost:3000/project',
		testScenario: {
			'delay': 1000,
			'misMatchThreshold': 0.5,
		},
		// testPaths: [ '/about/' ],
		larvaModules: [ 'footer', 'breadcrumbs' ],
		backstopConfig: {
			'engineOptions': {
				'args': [ '--no-sandbox', '--proxy-server=127.0.0.1:3000', '--proxy-bypass-list=<-loopback>' ],
			}
		}
	},

	patterns: {
		larvaPatternsDir: path.resolve( './node_modules/penskemediacorp/larva-patterns' ),
		projectPatternsDir: path.resolve( './src/patterns' ),
		ignoredModules: [
			'footer-menus',
			'footer-social',
			'footer-tip'
		]
	},

	parser: {
		// relativeSrcOverride: {path to another directory from which to parse patterns}
	}
};
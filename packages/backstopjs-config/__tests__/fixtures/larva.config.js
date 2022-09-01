const path = require( 'path' );

module.exports = {
	backstop: {
		testBaseUrl: 'https://pmc:for-the-win@deadline-2019.pmcqa.com',
		testPaths: [ '/', '/blog/' ],
		testScenario: {
			delay: 5000,
			misMatchThreshold: 0.5,
		},
		larvaModules: [ 'footer', 'mega-menu-content', 'social-share' ],
	},
};

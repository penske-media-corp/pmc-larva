# Backstop JS Config

This npm package provides configuration for visual regression, or screenshot, testing with [Backstop JS](https://github.com/garris/BackstopJS). 

## Overview of Functionality

1. Backstop JS and Chromium are installed as npm packages.
2. This package's entry point (index.js) gets project-level configuration from larva.config.js and provides useful defaults for the Backstop JS configuration object.
3. When the appropriate npm script is used, the object exported from `index.js `is passed to `backstop` CLI as configuration.
4. Backstop uses that configuration object when it runs the tests.

## Development Setup

First install the package and its dependencies. This includes headless Chrome, so will take a moment.

1. Install the package. Run this command from the same location as package.json.
	```language:bash
	npm install @penskemediacorp/backstopjs-config backstopjs --save-dev
	```

2. Add configuration to larva.config.js. You can _either_ test modules from the Larva repo, or test a full page screenshot at specific paths.

	Configuration for testing Larva modules:

	```language:javascript
	// larva.config.js

	module.exports = {

		// This object will provide project-level overrides for the Backstop config.
		backstop: {
			// If testing default Larva patterns, replace "project" with "larva", in this path:
			testBaseUrl: 'http://localhost:3000/project',
			larvaModules: [ 'footer', 'breadcrumbs' ],
			backstopConfig: {
				// This is required for testing on the Larva server. It is not required for testing external URLs.
				'engineOptions': {
					'args': [ '--no-sandbox', '--proxy-server=127.0.0.1:3000', '--proxy-bypass-list=<-loopback>' ],
				}
			}
		},
	}
	```

	And configuration for testing a document and external URLs:
	```language:javascript
	// larva.config.js

	module.exports = {

		// This object will provide project-level overrides for the Backstop config.
		backstop: {
			// Be sure to include HTTP password in the URL
			testBaseUrl: 'https://pmc:for-the-win@deadline.pmcqa.com',
			// Use the testPaths property instead of larvaModules. These are appended to the testBaseUrl.
			testPaths: [ '/', '/v/film' ]
		},
	}
	```

3. Add the npm script to package.json:
	
	```language:javascript
	"scripts": {
		"backstop": "backstop --config=node_modules/@penskemediacorp/backstopjs-config"
	}
	```

## Running the Tests

After you have added the configuration, it is time to run the tests. 

1. You must first generate reference screenshots from a master branch, or other branch that contains the UI you want to test against. When you are on that branch, run the following:
	```
	# Generate reference screenshots
	npm run backstop -- reference
	```
2. Checkout to your feature branch, or the branch that contains changes you want to test for regressions. 
3. Run the test with: 
	```
	# Run the tests, then open an HTML page with a UI for viewing results.
	npm run backstop -- test
	```

## Things To Be Aware Of

* Testing full pages with ads will likely time out. There is a Puppeteer script for hiding ads, but it is currently disabled.

## History and Changelog

This package started as part of PMC Build Utils, and was migrated to the pmc-larva monorepo during the AMH redesign project to take advantage of the shared environment for developing Larva-specific tooling.

## Support

Post questions in the #larva Slack channel and @laras126. Refer to the [Backstop JS documentation](https://github.com/garris/BackstopJS) for troubleshooting, and consider using the search term `Puppeteer` when googling for solutions.
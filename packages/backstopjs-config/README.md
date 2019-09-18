# Backstop JS Config

This package provides configuration for visual regression, or screenshot, testing with [Backstop JS](https://github.com/garris/BackstopJS). 

## Overview of Functionality

1. Backstop JS and Chromium are installed as npm packages.
2. This package's entry point (index.js) gets project-level configuration from larva.config.js and provides useful defaults for the Backstop JS configuration object.
3. When the appropriate npm script is used, the object exported from `index.js `is passed to `backstop` CLI as configuration.
4. Backstop uses that configuration object when it runs the tests.

## Development Setup

First install the package and its dependencies. This includes headless Chrome, so will take a moment.

1. Install the package
	```language:bash
	npm install @penskemediacorp/backstopjs-config --save-dev
	```

2. Add configuration to larva.config.js.

	```language:javascript
	// larva.config.js

	module.exports = {

		// This object will provide data for specific places in the Backstop config
		backstop: {
			// testBaseUrl: 'https://notlaura.com',
			testBaseUrl: 'http://localhost:3000/larva',
			testScenario: {
				'delay': 1000,
				'misMatchThreshold': 0.5,
			},
			// If you want to test a full page:
			// testPaths: [ '/about/' ],
			// For testing specific modules in the Larva server:
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


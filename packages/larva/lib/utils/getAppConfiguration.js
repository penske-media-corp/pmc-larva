const chalk = require( 'chalk' );

module.exports = function getAppConfiguration( tool ) {

	try {
		let appRoot = process.cwd();

		if ( 'test' === process.env.NODE_ENV ) {
			appRoot = appRoot + '/__tests__/fixtures';
		}

		let config = require( `${appRoot}/larva.config.js` )[ tool ];

		if ( undefined === config ) {
			throw new Error( `Configuration for \`${tool}\` is required in larva.config.js. \nPlease refer to the Larva's docs for adding configuration: https://github.com/penske-media-corp/pmc-larva` );
		}

		return config;

	} catch ( error ) {
		console.error( chalk.red( chalk.bold( 'There is no larva.config.js in this directory.\n' ) + error ) );
	}
};

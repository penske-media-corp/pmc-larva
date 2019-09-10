module.exports = {
	maybeUseCliUrl: ( argv, configUrl ) => {

		if ( argv[4] && argv[4].includes( '--url=' ) ) {
			return argv[4].replace( '--url=', '' );
		}

		return configUrl;

	},

	getCliModuleArgs: ( argv ) => {

		if ( argv[5] && argv[5].includes( '--modules=' ) ) {
			const modulesArg = argv[5].split( '=' );

			return modulesArg[1].split( ',' );
		}

		return null;
	},

	/**
	 * Prepare Test Paths
	 * 
	 * @param array of modules
	 * @param loc project | larva
	 */
	prepareTestPaths: ( array, loc = undefined ) => {

		// We are not testing patterns. Return array of paths from config.
		if ( undefined === loc ) {
			return array;
		}

		return array.map( a => '/' + loc + '/modules/' + a );
	},
	
	/**
	 * Prepare Module Selectors
	 * 
	 * Make a class selector out of each module from CLI, or return document.
	 * 
	 * @param array of modules
	 */
	prepareTestSelectors: ( array ) => {

		// Test the whole document if there are no modules in the CLI
		if ( null === array ) {
			return [ 'document' ];
		}

		return array.map( a => '.' + a );
	}

};

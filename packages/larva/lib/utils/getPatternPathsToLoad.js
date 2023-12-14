const fs = require( 'fs' );

module.exports = function getPatternPathsToLoad( config ) {
	const paths = [];

	if ( undefined === config ) {
		throw new Error( `Pattern configuration is undefined.` );
	}

	// Look in projectPatternsDir first.
	if ( fs.existsSync( config.projectPatternsDir ) ) {
		paths.push( config.projectPatternsDir );
	}

	if ( fs.existsSync( config.larvaPatternsDir ) ) {
		paths.push( config.larvaPatternsDir );
	}

	return paths;
};

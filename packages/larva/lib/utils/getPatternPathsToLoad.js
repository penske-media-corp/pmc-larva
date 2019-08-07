const isCoreTheme = require( './isCoreTheme.js' );
const fs = require( 'fs' );

module.exports = function getPatternPathsToLoad( config ) {
	let paths = [];

	// Look in projectPatternsDir first.
	if( fs.existsSync( config.projectPatternsDir ) ) {
		paths.push( config.projectPatternsDir );
	}
	
	if( fs.existsSync( config.larvaPatternsDir ) ) {
		paths.push( config.larvaPatternsDir );
	}

	if ( 0 === paths.length ) {
		throw new Error( `Could not locate pattern paths.` );
	}

	return paths;
}

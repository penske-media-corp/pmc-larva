const isCoreTheme = require( './isCoreTheme.js' );
const fs = require( 'fs' );

module.exports = function getPatternPathsToLoad( config ) {
	let paths = [];
	
	if( fs.existsSync( config.larvaPatternsDir ) ) {
		paths.push( config.larvaPatternsDir );
	}

	if( fs.existsSync( config.themePatternsDir ) ) {
		paths.push( config.themePatternsDir );
	}

	if ( 0 === paths.length ) {
		throw new Error( `Could not locate pattern paths.` );
	}

	return paths;
}

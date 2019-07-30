const isCoreTheme = require( './isCoreTheme.js' );

module.exports = function getPatternPathsToLoad( config ) {
	let paths = [];
	
	try {
		paths.push( config.larvaPatternsDir );
	} catch( error ) {
		console.log( error );
	}
	
	// No theme path if it is the core theme.
	if ( isCoreTheme( config ) ) {
		return paths;
	}
	
	try {
		paths.push( config.themePatternsDir );
	} catch( error ) {
		console.log( error );
	}

	return paths;
}

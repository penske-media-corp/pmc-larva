const isCoreTheme = require( './isCoreTheme.js' );

module.exports = function patternPathsToLoad( config ) {
	let paths = [];
	
	try {
		paths.push( config.larvaDir );
	} catch( error ) {
		console.log( error );
	}
	
	// No theme path if it is the core theme.
	if ( isCoreTheme( config ) ) {
		return paths;
	}
	
	try {
		paths.push( config.themeDir );
	} catch( error ) {
		console.log( error );
	}

	return paths;
}

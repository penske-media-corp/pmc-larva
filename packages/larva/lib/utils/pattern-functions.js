const chalk = require( 'chalk' );
const fs = require( 'fs' );



function buildPatternFilePath( patternsIndexPath, name, ext ) {
	const patternType = getPatternType( name );
	let patternDigit = getPatternDigit( name );

	if ( patternsIndexPath.includes( 'larva' ) ) {
		patternDigit = '';
	}

	return patternsIndexPath + '/' + patternDigit + patternType + '/' + name +'/' + name + ext;
}

function getPatternDataPath( patternsIndexPath, name ) {
	const protoPath = buildPatternFilePath( patternsIndexPath, name, '.prototype.js' ).toString();
	const jsonPath = buildPatternFilePath( patternsIndexPath, name, '.json' ).toString();

	try {
		if ( fs.existsSync( protoPath ) ) {
			return protoPath;
		} else if ( fs.existsSync( jsonPath ) ) {
			return jsonPath;
		}
	} catch ( error ) {
		return error;
	}
	
}

function getPatternSchema( patternsIndexPath, params ) {
	const path = getPatternDataPath( patternsIndexPath, params.name );

	try {
		let pathData = require( path );

		if ( undefined == typeof pathData ) {
			pathData = new Error( `Encountered an error getting the pattern schema. Did you forget to create a o-pattern.prototype.js or o-pattern.json file?` );
		}
		
		return pathData;
	} catch( error ) {
		console.error( chalk.red.bold( `Encountered an error getting the pattern schema. Did you forget to create a o-pattern.prototype.js or o-pattern.json file?` ) );
		console.error( chalk.red( error ) );
	}

}

// Previously named pattern-sever-functions.

function isCoreTheme( config ) {
	if ( undefined === config.themeDir ) {
		return true;
	}

	return false;
}

function patternPathsToLoad( config ) {
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

function getPatternsIndexPath( config ) {
	if ( isCoreTheme( config ) ) {
		return config.larvaDir;
	} else {
		return config.themeDir;
	}
}

module.exports = {
	getPatternSchema: getPatternSchema,
	getPatternType: getPatternType,
	buildPatternFilePath: buildPatternFilePath,
	patternPathsToLoad: patternPathsToLoad,
	isCoreTheme: isCoreTheme,
	getPatternsIndexPath: getPatternsIndexPath
};
const fs = require( 'fs' );
const chalk = require( 'chalk' );
const buildPatternFilePath = require( './buildPatternFilePath' );

module.exports = function getPatternDataPath( patternsPath, patternName ) {
	const protoPath = buildPatternFilePath( patternsPath, patternName, '.prototype.js' ).toString();
	const jsonPath = buildPatternFilePath( patternsPath, patternName, '.json' ).toString();

	if ( fs.existsSync( protoPath ) ) {
		return protoPath;
	} else if ( fs.existsSync( jsonPath ) ) {
		return jsonPath;
	}

	throw new Error( chalk.red( `Couldn\'t find a .prototype.js or .json file for ${patternName}.\nLooked in ${patternsPath}.` ) );
}
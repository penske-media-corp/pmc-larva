const fs = require( 'fs' );
const buildPatternFilePath = require( './buildPatternFilePath' );

module.exports = function getPatternDataPath( patternsIndexPath, patternName ) {
	const protoPath = buildPatternFilePath( patternsIndexPath, patternName, '.prototype.js' ).toString();
	const jsonPath = buildPatternFilePath( patternsIndexPath, patternName, '.json' ).toString();
	
	if ( fs.existsSync( protoPath ) ) {
		return protoPath;
	} else if ( fs.existsSync( jsonPath ) ) {
		return jsonPath;
	}

	throw new Error( `Couldn\'t find a .prototype.js or .json file for ${patternName}` );
}
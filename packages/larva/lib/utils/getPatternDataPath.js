const fs = require( 'fs' );
const chalk = require( 'chalk' );
const buildPatternFilePath = require( './buildPatternFilePath' );

module.exports = function getPatternDataPath( patternsPath, params ) {
	let ext = params.variant ? params.variant : 'prototype';

	const protoPath = buildPatternFilePath( patternsPath, params.name, '.' + ext + '.js' ).toString();
	const jsonPath = buildPatternFilePath( patternsPath, params.name, '.json' ).toString();

	if ( fs.existsSync( protoPath ) ) {
		return protoPath;
	} else if ( fs.existsSync( jsonPath ) ) {
		return jsonPath;
	}

	throw new Error( chalk.red( `Couldn\'t find a .prototype.js or .json file for ${params.name}.\nLooked in ${patternsPath}.` ) );
}
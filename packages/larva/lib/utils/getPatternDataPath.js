const fs = require( 'fs' );
const chalk = require( 'chalk' );
const path = require( 'path' );

module.exports = function getPatternDataPath( patternsPath, params ) {
	let ext = params.variant ? params.variant : 'prototype';

	const protoPath = path.join( patternsPath, params.type, params.name, params.name + '.' + ext + '.js' );
	const jsonPath = path.join( patternsPath, params.type, params.name, params.name + '.json' )

	if ( fs.existsSync( protoPath ) ) {
		return protoPath;
	} else if ( fs.existsSync( jsonPath ) ) {
		return jsonPath;
	}

	throw new Error( chalk.red( `Couldn\'t find a .prototype.js or .json file for ${params.name}.\nLooked in ${patternsPath}.` ) );
}
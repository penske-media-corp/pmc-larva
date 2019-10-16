const getPatternDataPath = require( './getPatternDataPath' );
const chalk = require( 'chalk' );

/**
 * Get Pattern Data
 * 
 * @param {string} patternsPath 
 * @param {object} params Object containing name of pattern
 */
function getPatternData( patternsPath, params ) {

	if ( ! params.type || ! params.name ) {
		throw new Error( chalk.red( `Pattern must contain a name and a type` ) );
	}

	const patternPath = getPatternDataPath( patternsPath, params );

	try {
		let patternData = require( patternPath );
		return patternData;
	} catch( error ) {
		console.error( chalk.red.bold( `Couldn't get data for ${params.name}.${params.variant}.` ) );
		console.error( chalk.red( error ) );
	}

}

module.exports = getPatternData;
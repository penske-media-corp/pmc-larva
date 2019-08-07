const getPatternDataPath = require( './getPatternDataPath' );
const chalk = require( 'chalk' );

/**
 * Get Pattern Data
 * 
 * @param {string} patternsPath 
 * @param {object} params Object containing name of pattern
 */
function getPatternData( patternsPath, params ) {
	const patternPath = getPatternDataPath( patternsPath, params.name );

	try {
		let patternData = require( patternPath );

		if ( undefined == typeof patternData ) {
			patternData = new Error( `Encountered an error getting the pattern data.` );
		}
		
		return patternData;
	} catch( error ) {
		console.error( chalk.red.bold( `Encountered an error getting the pattern data.` ) );
		console.error( chalk.red( error ) );
	}

}

module.exports = getPatternData;
const chalk = require( 'chalk' );
const path = require( 'path' );
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

	const patternPath = path.join( patternsPath, params.type, params.name, params.name + '.' + params.variant + '.js' );
	const jsonPath = path.join( patternsPath, params.type, params.name, params.name + '.json' )

	try {
		let patternData = require( patternPath );
		return patternData;
	} catch( e ) {
		const originalError = e;
		
		try {
			// Backwards compat for Deadline when patterns were stored as JSON
			let patternData = require( jsonPath );
			return patternData;
		} catch ( e ) {

			return {
				message: `Error getting data for ${params.name}.${params.variant}.`,
				error: originalError
			}
		}
	}

}

module.exports = getPatternData;
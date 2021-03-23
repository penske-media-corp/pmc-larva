const chalk = require( 'chalk' );
const path = require( 'path' );
/**
 * Get Pattern Data
 *
 * @param {string} patternsPath
 * @param {object} params Object containing name of pattern
 */
function getPatternData( patternsPath, params ) {

	const variant = params.variant || 'prototype';
	const patternPath = path.join( patternsPath, params.type, params.name, params.name + '.' + variant + '.js' );
	const jsonPath = path.join( patternsPath, params.type, params.name, params.name + '.json' )

	try {
		return require( patternPath );
	} catch( e ) {
		const originalError = e;

		try {
			// Backwards compat for Deadline when patterns were stored as JSON
			let patternData = require( jsonPath );
			return patternData;
		} catch ( e ) {
			return {
				message: `Error getting data for "${params.name}".<br>There is likely a problem with ${params.name}.${variant}.js.`,
				error: originalError
			}
		}
	}

}

module.exports = getPatternData;
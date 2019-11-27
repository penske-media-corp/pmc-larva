const chalk = require( 'chalk' );

// TODO: this should be removed.
module.exports = function clonePatternData( path ) {
	const patternData = require( path );
	console.warn( chalk.yellow.bold( 'clonePatternData is deprecated. Use lodash.clonedeep instead. Refer to o-email-capture-form.prototype.js in larva-patterns for an example.' ) );
	return Object.assign( {}, patternData );
}
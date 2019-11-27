const chalk = require( 'chalk' );

// TODO: this should be removed.
module.exports = function clonePatternData( path ) {
	const patternData = require( path );
	return Object.assign( {}, patternData );
}
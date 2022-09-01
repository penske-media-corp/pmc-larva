const fs = require( 'fs' );

module.exports = function writePatternDataToFile( filepath, data ) {
	let json = JSON.stringify( data );
	fs.writeFileSync( filepath, json );
};
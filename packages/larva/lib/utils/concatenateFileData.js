const fs = require( 'fs' );
const path = require( 'path' );

module.exports = function concatenateFileData( filePaths ) {

	return new Promise( ( resolve, reject ) => {
		let data = '';
		
		filePaths.forEach( filePath => {
			data += fs.readFileSync( filePath ).toString();
		});
		
		if ( data === '' ) {
			reject( 'No content with this file extension.' );
		}

		resolve( data );
	});
}

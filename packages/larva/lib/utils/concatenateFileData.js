const fs = require( 'fs' );

module.exports = function concatenateFileData( filePaths ) {

	return new Promise( ( resolve, reject ) => {
		let data = '';
		
		filePaths.forEach( path => {
			data += fs.readFileSync( path ).toString();
		});
		
		if ( data === '' ) {
			reject( 'No Sass.' );
		}

		resolve( data );
	});
}

const fs = require( 'fs' );

/**
 * Get Subdirectory names
 *
 * @param {string} path path to a directory containing subdirectories.
 * @return {Array} array of strings representing names of subdirectories.
 *
 * @link: https://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs
 **/

module.exports = function getSubDirectoryNames( path ) {
	try {
		return fs.readdirSync( path ).filter( function ( file ) {
			if ( 'node_modules' !== file && 'fixtures' !== file ) {
				return fs.statSync( path + '/' + file ).isDirectory();
			}
		} );
	} catch {
		console.error( path + " doesn't exist." );
	}
};

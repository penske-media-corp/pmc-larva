'use strict';

const path = require( 'path' );
const { getScssPathsWithExtension, concatenateFileData, renderSass } = require( './utils' );

module.exports = function getScssResultCss( extension, changedFilePath, callback ) {

	return new Promise( ( resolve, reject ) => {

		getScssPathsWithExtension( extension, path.dirname( changedFilePath ) )
		.then( resultPaths => concatenateFileData( resultPaths ) )
		.then( resultSass => renderSass( resultSass ) )
		.then( ( resultCss ) => {
			resolve( resultCss.css.toString() );
		})
		.catch( err => reject( err ) );
	});
};

'use strict';

const chalk = require( 'chalk' );
const fs = require( 'fs' );
const path = require( 'path' );
const { getScssPathsWithExtension, concatenateFileData, renderSass, getScssResultFilePath } = require( './utils/utils' );

module.exports = function build( extension, changedFilePath ) {

	let resultFile = getScssResultFilePath( changedFilePath, extension );

	return new Promise( ( resolve, reject ) => {

		getScssPathsWithExtension( extension, path.dirname( changedFilePath ) )
		.then( resultPaths => concatenateFileData( resultPaths ) )
		.then( resultSass => renderSass( resultSass ) )
		.then( ( resultCss ) => {
			resolve( resultCss );
		})
		.catch( err => reject( err ) );
	})

};

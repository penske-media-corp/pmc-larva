'use strict';

const chalk = require( 'chalk' );
const fs = require( 'fs' );
const path = require( 'path' );
const getScssResultFilePath = require( './utils/getScssResultFilePath' );
const getScssResultCss = require( './utils/getScssResultCss' );

module.exports = function build( extension, changedFilePath ) {
	let resultFile = getScssResultFilePath( changedFilePath, extension );
	
	getScssResultCss( extension, changedFilePath ).then( ( resultCss ) => {
		fs.writeFileSync( resultFile, resultCss );
	}).catch( e => console.error( e ) );

};

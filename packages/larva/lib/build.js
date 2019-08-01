'use strict';

const chalk = require( 'chalk' );
const fs = require( 'fs' );
const path = require( 'path' );
const { getScssResultCss, getScssResultFilePath } = require( './utils/utils' );

module.exports = function build( extension, changedFilePath ) {
	let resultFile = getScssResultFilePath( changedFilePath, extension );

	getScssResultCss( extension, changedFilePath, ( resultCss ) => {
		fs.writeFileSync( resultFile, resultCss );
	});

};

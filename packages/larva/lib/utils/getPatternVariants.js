/**
 * Return an array of "variants", or the pattern.XX.js from a 
 * given directory.
 * 
 * @param {string} startPath - the pattern directory to search.
 */

const fs = require( 'fs' );

// https://regex101.com/r/DgnTR4/2
const regex = new RegExp( '(.[^.]+)\.(.+)\.js$' );

module.exports = function getPatternVariants( startPath ) {

	// Only return Node prototype files, not Trig or reg
	let files = fs.readdirSync( startPath ).filter( ( file ) => {
		if ( /.+\..*\.js$/.test( file ) ) {
			return file;
		}
	} );

	// 1. c-button.brand-basic.js is split after `c-button.` 
	// 2. `brand-basic.js` remaining
	// 2. slice off the file ext. to return `brand-basic`
	return files.map( ( file ) => file.match( regex )[2] );
};
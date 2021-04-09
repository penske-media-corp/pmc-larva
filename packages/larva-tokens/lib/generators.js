/**
 * External dependencies.
 */
const fs = require( 'fs-extra' );
const path = require( 'path' );

/**
 * Internal dependencies.
 */
const { kebabify } = require( './utils' );
const {
	tokenProperties,
	tokensFileContentsByProperty,
} = require( './font-data' );

/**
 * Write file contents for each token property
 * to a file.
 */
const generateFontTokens = () => {
	tokenProperties.forEach( ( property ) => {
		const fileName = kebabify( property );

		fs.writeFileSync(
			path.join( __dirname, `../src/base/generated/${ fileName }.json` ),
			JSON.stringify( tokensFileContentsByProperty[ property ] )
		);

		console.log( `Generated tokens for ${ fileName }.` ); // eslint-disable-line no-console
	} );
};

module.exports = {
	generateFontTokens,
};

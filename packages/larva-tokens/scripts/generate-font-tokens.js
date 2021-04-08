const fs = require( 'fs-extra' );
const path = require( 'path' );

const { kebabify } = require('../lib/utils' );
const { tokenProperties, tokensFileContentsByProperty } = require('../lib/font-data' );

tokenProperties.forEach( ( property ) => {
	const fileName = kebabify(property);

	fs.writeFileSync( path.join( __dirname, `../src/base/generated/${fileName}.json` ), JSON.stringify( tokensFileContentsByProperty[property] ) );

	console.log( `Generated tokens for ${fileName}.` );
});
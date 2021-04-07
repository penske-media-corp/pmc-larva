const fs = require( 'fs-extra' );
const path = require( 'path' );

const { kebabify } = require('../lib/utils' );
const { properties, tokensFileContentsByProperty } = require('../lib/font-data' );

properties.forEach( ( property ) => {
	const fileName = kebabify(property);

	fs.writeFileSync( path.join( __dirname, `../src/base/generated/${fileName}.json` ), JSON.stringify( tokensFileContentsByProperty[property] ) );
});
const fs = require( 'fs-extra' );
const path = require( 'path' );

const { tokensByProperty } = require('../lib/font-tokens' );

properties.forEach( ( property ) => {
	fs.writeFileSync( path.join( __dirname, `../src/base/generated/${property}.json` ), JSON.stringify( tokensByProperty[property] ) );
});
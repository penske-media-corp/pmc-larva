const path = require( 'path' );
const { copySync } = require( 'fs-extra' );

const copyFrom = path.join( __dirname, 'larva' );
const copyTo = process.cwd();

copySync( copyFrom, copyTo );

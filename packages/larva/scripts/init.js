const path = require( 'path' );

const spawnScript = require( '../lib/utils/spawnScript' );
const copyFrom = path.join( __dirname, 'larva' );
const copyTo = process.cwd();

// Copy the src directory from the larva package that contains example patterns
spawnScript( 'cp', [ '-r', copyFrom, copyTo ] );

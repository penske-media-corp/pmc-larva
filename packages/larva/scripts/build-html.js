const chalk = require( 'chalk' );
const path = require( 'path' );

const getAppConfiguration = require( '../lib/utils/getAppConfiguration' );
const getArgsFromCli = require( '../lib/utils/getArgsFromCli' );
const generateStatic = require( '../lib/generateStatic' );
const getPatternRoutes = require( '../lib/utils/getPatternRoutes' );
const getAllPatternsObj = require( '../lib/utils/getAllPatternsObj' );

const config = getAppConfiguration( 'patterns' );
const cliArgs = getArgsFromCli();

let fromLarva = 'larva' === cliArgs[1] ? true : false;

const patternsObj = ( () => {
	const source = fromLarva ? config.larvaPatternsDir : config.projectPatternsDir;
	return getAllPatternsObj( source );
} )();

const routesArr = getPatternRoutes( patternsObj );

const buildPath = path.join( process.cwd(), './build/html' );
const urlBase = 'http://localhost:3001/project';

generateStatic( routesArr, buildPath, () => {
	console.log( chalk.green( 'Successfully build static site.' ) );
}, urlBase );

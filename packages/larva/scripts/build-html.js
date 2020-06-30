const chalk = require( 'chalk' );
const path = require( 'path' );

const getAppConfiguration = require( '../lib/utils/getAppConfiguration' );
const getArgsFromCli = require( '../lib/utils/getArgsFromCli' );
const generateStatic = require( '../lib/generateStatic' );
const getPatternRoutes = require( '../lib/utils/getPatternRoutes' );
const getAllPatternsObj = require( '../lib/utils/getAllPatternsObj' );

const config = getAppConfiguration( 'patterns' );
const cliArgs = getArgsFromCli();
const source = 'larva' === cliArgs[1] ? 'larva' : 'project';
const port = cliArgs[2] || '5555' ;

const urlBase = 'http://localhost:' + port + '/' + source;
const buildPath = path.join( process.cwd(), './build/html/' + source );

const app = require( '../lib/server' );
const server = app.listen( port );

const patternsObj = ( () => {
	const patternDir = 'larva' === source ? config.larvaPatternsDir : config.projectPatternsDir;
	return getAllPatternsObj( patternDir );
} )();

const routesArr = getPatternRoutes( patternsObj );

// Add a static, non-pattern path. If we need more paths like this,
// this method should be called in its own function.
routesArr.push( 'css' );

generateStatic( routesArr, buildPath, () => {

	// TODO: copy assets into build path
	// copy assets from larva package to static
	// copy assets from project to assets
	server.close();
	console.log( chalk.green( `Successfully build static site to ${buildPath}` ) );
}, urlBase );

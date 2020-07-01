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
const port = process.env.NODE_PORT || '3000' ;

const urlBase = 'http://localhost:' + port + '/' + source;
const buildPath = path.join( process.cwd(), './build/html/' + source );

const patternsObj = ( () => {
	const patternDir = 'larva' === source ? config.larvaPatternsDir : config.projectPatternsDir;
	return getAllPatternsObj( patternDir );
} )();

const routesArr = getPatternRoutes( patternsObj );

// Add a static, non-pattern path. If we need more paths like this,
// this method should be called in its own function.
routesArr.push( 'css' );

generateStatic( routesArr, buildPath, ( message ) => {

	// TODO: copy assets into build path
	// copy assets from larva package to static
	// copy assets from project to assets
	console.log( message );
}, urlBase );

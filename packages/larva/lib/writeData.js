const path = require( 'path' );
const chalk = require( 'chalk' );

const getPatternData = require( './utils/getPatternData' );
const getAppConfiguration = require( './utils/getAppConfiguration' );
const getPatternPathsToLoad = require( './utils/getPatternPathsToLoad' );
const writeJsonToFile = require( './utils/writeJsonToFile' );

const appConfiguration = getAppConfiguration( 'patterns' );
const args = process.argv;

const params = {
	type: args[2],
	name: args[3]
};


const data = getPatternData( appConfiguration.larvaPatternsDir, params );
const jsonDestPath = path.resolve( appConfiguration.projectPatternsDir, '../../build/json/' + params.type + '/' + params.name + '.prototype.json' );

console.log( chalk.green( 'Writing JSON for: ' + params.type + ' –> ' + params.name ) );
writeJsonToFile( jsonDestPath, data );
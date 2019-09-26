const path = require( 'path' );
const chalk = require( 'chalk' );

const getPatternData = require( './utils/getPatternData' );
const getAppConfiguration = require( './utils/getAppConfiguration' );
const getPatternPathsToLoad = require( './utils/getPatternPathsToLoad' );
const writeJsonToFile = require( './utils/writeJsonToFile' );

const appConfiguration = getAppConfiguration( 'patterns' );
const args = process.argv;

const params = {
	type: args[3],
	name: args[4],
	variant: args[5] ? args[5] : 'prototype'
};

let jsonSrcPath = '';

if ( 'larva' === args[2] ) {
	jsonSrcPath = appConfiguration.larvaPatternsDir;
}

if ( 'project' === args[2] ) {
 	jsonSrcPath = appConfiguration.projectPatternsDir;
}

const data = getPatternData( jsonSrcPath, params );
const jsonDestPath = path.resolve( appConfiguration.projectPatternsDir, '../../build/json/' + params.type + '/' + params.name + '.' + params.variant + '.json' );

console.log( chalk.green( 'Writing JSON for: ' + args[2] + ' –> ' + params.type + ' –> ' + params.name + ' -> ' + params.variant ) );
writeJsonToFile( jsonDestPath, data );
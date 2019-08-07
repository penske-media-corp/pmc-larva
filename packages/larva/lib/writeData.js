const path = require( 'path' );

const getPatternData = require( './utils/getPatternData' );
const getAppConfiguration = require( './utils/getAppConfiguration' );
const getPatternPathsToLoad = require( './utils/getPatternPathsToLoad' );
const writeJsonToFile = require( './utils/writeJsonToFile' );

const appConfiguration = getAppConfiguration( 'patterns' );

// Get this to happen either in gulp or as a promise based script with globby in here!
// Should loop through all modules in larvaPatternsDir and output a json file for each
const params = {
	type: 'modules',
	name: 'pmc-footer'
};

const data = getPatternData( appConfiguration.larvaPatternsDir, params );
const jsonDestPath = path.resolve( appConfiguration.projectPatternsDir, '../../build/json/' + params.type + '/' + params.name + '.json' );

writeJsonToFile( jsonDestPath, data );
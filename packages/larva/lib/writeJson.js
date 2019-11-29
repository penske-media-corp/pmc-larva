const path = require( 'path' );
const chalk = require( 'chalk' );
const fs = require( 'fs' );

const getPatternData = require( './utils/getPatternData' );
const getModuleNamesFromDirectory = require( './utils/getModuleNamesFromDirectory' );
const writeJsonToFile = require( './utils/writeJsonToFile' );

// The fromLarva flag can come from CLI argument
module.exports = function writeJson( patternConfig, fromLarva = false ) {

	let sourceDirectory = patternConfig.projectPatternsDir;

	if ( true === fromLarva ) {
		sourceDirectory = patternConfig.larvaPatternsDir;
	}

	let modulesArr = getModuleNamesFromDirectory( sourceDirectory, patternConfig.ignoredModules );

	modulesArr.forEach( ( moduleName ) => {

		let moduleData, jsonDestPath;

		// All modules have prototypes
		let moduleVariants = [
			'prototype'
		];

		// If variant file exists, add it to the array of moduleVariants to be written to JSON.
		patternConfig.variants.forEach( ( variant ) => {

			let variantFileLocation = path.join( sourceDirectory, `modules/${moduleName}/${moduleName}.${variant}.js` );

			if ( fs.existsSync( variantFileLocation ) ) {
				moduleVariants.push( variant );
			}
		});

		moduleVariants.forEach( ( variant ) => {

			moduleData = getPatternData( sourceDirectory, {
				type: 'modules',
				name: moduleName,
				variant: variant
			} );

			jsonDestPath = path.resolve( patternConfig.projectPatternsDir, '../../build/json/modules/' + moduleName + '.' + variant + '.json' );

			// If JSON data and module prototype are the same, pass, otherwise write the data to file
			if( fs.existsSync( jsonDestPath ) && JSON.stringify( require( jsonDestPath ) ) === JSON.stringify( moduleData ) ) {
				console.log( chalk.grey( `No updates in ${moduleName}.${variant}` ) );
			} else {
				if ( undefined !== moduleData ) {
					writeJsonToFile( jsonDestPath, moduleData );
					console.log( chalk.green.bold( `Wrote JSON for ${moduleName}.${variant}` ) );
				}
			}

		});
	});
};

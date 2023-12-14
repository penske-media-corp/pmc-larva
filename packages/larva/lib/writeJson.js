const path = require( 'path' );
const chalk = require( 'chalk' );
const fs = require( 'fs' );

const getPatternData = require( './utils/getPatternData' );
const getModuleNamesFromDirectory = require( './utils/getModuleNamesFromDirectory' );
const getPatternVariants = require( './utils/getPatternVariants' );
const writeJsonToFile = require( './utils/writeJsonToFile' );

// The fromLarva flag can come from CLI argument
module.exports = function writeJson( patternConfig, fromLarva = false ) {
	const sourceDirectory =
		true === fromLarva
			? patternConfig.larvaPatternsDir
			: patternConfig.projectPatternsDir;
	const ignoredModules = patternConfig.ignoredModules
		? patternConfig.ignoredModules
		: [];
	const modulesArr = getModuleNamesFromDirectory(
		sourceDirectory,
		ignoredModules
	);

	modulesArr.forEach( ( moduleName ) => {
		const startPath = sourceDirectory + '/modules/' + moduleName;
		const variants = getPatternVariants( startPath );

		variants.forEach( ( variant ) => {
			const moduleData = getPatternData( sourceDirectory, {
				type: 'modules',
				name: moduleName,
				variant,
			} );

			const jsonDestPath = path.resolve(
				patternConfig.projectPatternsDir,
				'../../build/json/modules/' +
					moduleName +
					'.' +
					variant +
					'.json'
			);

			// If JSON data and module prototype are the same, pass, otherwise write the data to file
			let hasChanged = true;
			try {
				if (
					fs.existsSync( jsonDestPath ) &&
					JSON.stringify( require( jsonDestPath ) ) ===
						JSON.stringify( moduleData )
				) {
					hasChanged = false;
				}
			} catch ( error ) {
				console.warn( error );
			}

			if ( hasChanged ) {
				writeJsonToFile( jsonDestPath, moduleData );
				console.log(
					chalk.green.bold(
						`Wrote JSON for ${ moduleName }.${ variant }`
					)
				);
			} else {
				console.log(
					chalk.grey( `No updates in ${ moduleName }.${ variant }` )
				);
			}
		} );
	} );
};

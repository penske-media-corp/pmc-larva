const getSubdirectoryNames = require( './getSubDirectoryNames' );
const path = require( 'path' );

module.exports = function getModuleNamesFromDirectory( directory, patternsConfig ) {
	let moduleNames = getSubdirectoryNames( path.join( directory , 'modules' ) );
	let ignoredModules = patternsConfig.ignoredModules || [];

	return moduleNames.filter( ( moduleName ) => {
		return ! moduleName.startsWith( '_' ) && -1 === ignoredModules.indexOf( moduleName );
	});

}

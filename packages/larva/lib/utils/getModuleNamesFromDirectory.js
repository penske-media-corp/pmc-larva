const getSubdirectoryNames = require( '@penskemediacorp/larva/lib/utils/getSubDirectoryNames' );
const path = require( 'path' );

module.exports = function getModuleNamesFromDirectory( directory, ignoredModules = []) {
	let moduleNames = getSubdirectoryNames( path.join( directory , 'modules' ) );

	return moduleNames.filter( ( moduleName ) => {
		return ! moduleName.startsWith( '_' ) && -1 === ignoredModules.indexOf( moduleName );
	});

}

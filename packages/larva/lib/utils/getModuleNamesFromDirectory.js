const getSubDirectoryNames = require( './getSubDirectoryNames' );
const path = require( 'path' );

module.exports = function getModuleNamesFromDirectory(
	directory,
	ignoredModules = []
) {
	const moduleNames = getSubDirectoryNames(
		path.join( directory, 'modules' )
	);

	return moduleNames.filter( ( moduleName ) => {
		return (
			! moduleName.startsWith( '_' ) &&
			-1 === ignoredModules.indexOf( moduleName )
		);
	} );
};

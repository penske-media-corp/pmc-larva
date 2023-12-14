module.exports = function getSassVarsString( iconsObj ) {
	let str = '';

	for ( const key in iconsObj ) {
		if ( iconsObj.hasOwnProperty( key ) ) {
			str += '$' + key + ": '" + iconsObj[ key ] + "';\n\n";
		}
	}

	return str;
};

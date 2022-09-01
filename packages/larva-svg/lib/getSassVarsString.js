module.exports = function getSassVarsString( iconsObj ) {
	let str = '';

	for ( var key in iconsObj ) {
		if ( iconsObj.hasOwnProperty( key ) ) {
			str += '$' + key + ": '" + iconsObj[key] + "';\n\n";
		}
	}

	return str;
}
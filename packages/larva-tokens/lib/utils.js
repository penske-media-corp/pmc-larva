const kebabify = ( name ) => {
	const kebabCase = name.split( '' );

	return kebabCase.reduce( ( a, b ) => {
		if ( '_' === b ) {
			return a.toLowerCase() + '-';
		}
		return a.toLowerCase() + b.toLowerCase();
	} );
};

module.exports = {
	kebabify,
};

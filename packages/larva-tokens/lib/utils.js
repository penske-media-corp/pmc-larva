export const kebabify = ( name ) => {
	let kebabCase = [];

	// TODO: find a more concise way of turning a string into an iterable
	for (let i = 0; i < name.length; i++) {
		let letter = name[i];
		kebabCase[i] = letter;
	}

	return kebabCase.reduce( ( a, b ) => {
		if ( '_' === b ) {
			return a.toLowerCase() + '-';
		}
		return a.toLowerCase() + b.toLowerCase();
	});
};

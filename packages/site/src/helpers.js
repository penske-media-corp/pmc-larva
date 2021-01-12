/**
 * Reduce color tokens to a set of "Core Colors".
 *
 * Core colors are the color names and values that are repeated across tokens
 * for different CSS properties so that the color can be added and updated
 * in a single place.
 *
 * e.g. for COLOR_BRAND_PRIMARY, BORDER_COLOR_BRAND_PRIMARY, BACKGROUND_COLOR_BRAND_PRIMARY
 * this method will return a single BRAND_PRIMARY if all of the above are the same value.
 *
 * @param {Object} tokens The raw.json format of design tokens
 */
export const reduceColorValues = ( tokens ) => {

	let keys = Object.keys( tokens );
	let colorKeys = keys.filter( key => key.includes( 'COLOR' ) );
	let colorTokens = colorKeys.map( ( key ) => {
		let obj = {};
		let name = key.split( 'COLOR_' )[1];
		obj[name] = tokens[key].value;

		return obj;
	});

	let reducedColorTokens = colorTokens.reduce( ( colors, color ) => {
		let currKey = Object.keys( color )[0];
		let currValue = color[currKey];

		// If the color was already added to the object...
		if ( colors.hasOwnProperty( currKey ) ) {

			// ...compare the values. If they are different, remove
			// the color key because it can no longer be a core color.
			if ( colors[ currKey ] !== currValue ) {
				delete colors[currKey];
			}

		} else {
			colors[currKey] = {
				value: color[currKey],
				name: currKey,
				type: 'color'
			};
		}

		return colors;
	}, {} );

	return reducedColorTokens;
};
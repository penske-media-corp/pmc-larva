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
 *
 * @returns An object of core color tokens who's keys are only the color name.
 */
export const getCoreColorsFromTokens = ( tokens ) => {

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
				type: 'color',
				category: 'core-color'
			};
		}

		return colors;
	}, {} );

	return reducedColorTokens;
};

/**
 * Compare the token colors with the core colors, and if the token
 * uses on of the core colors, update the value to the core color.
 *
 * @param {Object} tokensToUpdate The raw.json tokens state object
 * @param {Object} coreColors The core colors tokens state object
 *
 * @returns The full tokens object.
 */
export const updateTokensWithCoreColors = ( tokensToUpdate, coreColors ) => {

	const tokenKeys = Object.keys( tokensToUpdate );

	const colorTokenReducer = ( newTokens, key ) => {

		let fullToken = { ... tokensToUpdate[key] };

		if ( key.includes( 'COLOR_' ) ) {

			const coreColorName = key.split( 'COLOR_' )[1];

			if ( coreColors.hasOwnProperty( coreColorName ) ) {
				fullToken.value = coreColors[coreColorName].value;
			}
		}

		newTokens[key] = {
			...fullToken
		};

		return newTokens;
	};

	return tokenKeys.reduce( colorTokenReducer, {});
};

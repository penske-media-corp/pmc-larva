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
	let colorKeys = keys.filter( key => key.includes( 'COLOR_' ) );

	/**
	 * for each token with key including COLOR,
	 * 		for each token with that key( color.split( 'COLOR_' )[1] )
	 * 			add tempValues = [ all of the values ]
	 *
	 * return acc
	 *
	 *
	 * for each in that result
	 * 	check the value of temp values
	 * 	if they are not all equal,
	 * 		delete it from the object
	 * return acc
	 */

	/**
	 * A temporary store for values associated with each color token.
	 * These values will be checked later in order to determine
	 * if any of the colors names are not repeatable.
	 */
	const colorTokenValuesStore = colorKeys.reduce( ( valuesAcc, key ) => {
		const name = key.split( 'COLOR_' )[1];
		const { value } = tokens[key];

		if ( valuesAcc.hasOwnProperty( name ) ) {

			valuesAcc[name].push( value );

			return valuesAcc;
		}

		valuesAcc[name] = [value];

		return valuesAcc;
	}, {});

	const allColorTokens = colorKeys.reduce( ( colorsAcc, colorKey ) => {

		const name = colorKey.split( 'COLOR_' )[1];
		const usedValuesList = colorTokenValuesStore[name];

		colorsAcc[name] = {
			name,

			type: 'color',
			category: 'core-color',
			tempValues: colorTokenValuesStore[name]
		};

		return colorsAcc;

	}, {});

	console.log(allColorTokens);

	// const reducedColorTokens = colorKeys.reduce( ( colorTokensAcc, colorKey ) => {

	// }, {} );
	/**
	 * get colors to ignore
	 * if not in colors to ignore, add to array
	 */
	// console.log(colorTokens);
	const reducedColorTokens = allColorTokens.reduce( ( colorsAcc, color ) => {

		const currKey = Object.keys( color )[0];
		const currValue = color[currKey].value;

		// If the color was already added to the object and is not to be ignored...
		if ( colorsAcc.hasOwnProperty( currKey ) ) {
			const accValue = colorsAcc[ currKey ].value;

			// ...compare the values.
			// They are the same, return and continue to the next item.
			if ( accValue !== currValue ) {
				// They are different. Delete the property and add it
				// to the ignore list because this is no longer a repeated color.
				delete colorsAcc[currKey];
				// colorsToIgnore.push( currKey );
				return colorsAcc;
			}

			return colorsAcc;
		}

		// This is a color not yet in the object, add it.
		colorsAcc[currKey] = {
			value: currValue,
			name: currKey,
			type: 'color',
			category: 'core-color'
		};

		return colorsAcc;

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
export const getUpdatedTokensWithCoreColors = ( tokensToUpdate, coreColors ) => {

	const tokenKeys = Object.keys( tokensToUpdate );

	const colorTokenReducer = ( newTokens, key ) => {

		const fullToken = { ...tokensToUpdate[key] };

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

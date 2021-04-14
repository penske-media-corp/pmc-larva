/**
 * Internal dependencies.
 */
const { kebabify } = require( './utils' );

/**
 * All style names and corresponding sizes.
 */
const styles = {
	primary: [ 'xl', 'l', 'm', 's', 'xs', 'xxs', 'xxxs' ],
	secondary: [ 'l', 'm', 's' ],
	secondary_regular: [ 'm' ],
	accent: [ 'l', 'm', 's', 'xs', 'xxs' ],
	accent_regular: [ 'xxs' ],
	body: [ 'm', 's' ],
};

const families = Object.keys( styles );

/**
 * Breakpoints that will be supported in tokens.
 *
 * Note: Desktop-xl is not required for the hubs
 *       style guide, and can be added here,
 *       in GUT Phase 3, if required.
 */
const breakpoints = [ 'base', 'desktop' ];

/**
 * Properties for tokens and their defaults.
 */
const tokenDefaults = {
	font_size: 'initial',
	line_height: 'inherit',
	letter_spacing: 'normal',
	font_weight: 'normal',
	font_style: 'normal',
	font_family: 'initial',
};

/**
 * Determine all allowed names from the styles
 * object. These values will be transformed into
 * both tokens and selectors.
 *
 * @return {Array} Allowed names e.g. [ 'primary_l', 'accent_m' ]
 */
const allAllowedNames = Object.keys( styles )
	.map( ( name ) => {
		return styles[ name ].map( ( size ) => `${ name }_${ size }` ).flat();
	} )
	.flat();

/**
 * Transform the name into a CSS selector.
 *
 * @param {string} name e.g. primary_xl
 * @return {string} Selector e.g. lrv-a-font-primary-xl
 */
const nameToSelector = ( name ) => `lrv-a-font-${ kebabify( name ) }`;

/**
 * Get object of selectors by group.
 *
 * Example:
 * {
 * 	'primary': [ 'lrv-a-font-primary-s' ],
 * 	'accent-regular': [ 'lrv-a-font-accent-regular-l' ],
 * }
 *
 * @return {Object} Key value pairings of family name
 *                  and associated selectors.
 */
const groupedSelectors = ( () => {
	return families.reduce( ( groupsAcc, currGroup ) => {
		groupsAcc[ kebabify( currGroup ) ] = styles[ currGroup ]
			.map( ( size ) => nameToSelector( `${ currGroup }_${ size }` ) )
			.flat();

		return groupsAcc;
	}, {} );
} )();

/**
 * Get list of all selectors.
 *
 * @return Array of all selectors
 */
const allSelectors = Object.keys( groupedSelectors ).reduce(
	( selectorsAcc, currFamily ) => [
		...selectorsAcc,
		...groupedSelectors[ currFamily ],
	],
	[]
);

/**
 * Tokens Data
 */

const tokenProperties = Object.keys( tokenDefaults );

/**
 * For each property controlled by tokens, build all possible values
 * needed for each style and each breakpoint.
 *
 * @return A key value pair of the property and the contents formatted
 *          for a tokens file to be processed by Theo.
 */
const tokensFileContentsByProperty = tokenProperties.reduce(
	( propertiesAcc, currProperty ) => {
		const tokenNames = ( () =>
			allAllowedNames
				.map( ( name ) =>
					breakpoints
						.map( ( breakpoint ) =>
							`${ name }_${ currProperty }_${ breakpoint }`.toUpperCase()
						)
						.flat()
				)
				.flat() )();

		const tokens = tokenNames.reduce( ( tokensAcc, currToken ) => {
			tokensAcc[ currToken ] = {
				value: tokenDefaults[ currProperty ],
			};

			return tokensAcc;
		}, {} );

		propertiesAcc[ currProperty ] = {
			global: {
				category: `${ kebabify( currProperty ) }`,
				type: 'number',
				meta: {
					status: 'unstable',
					selector: 'lrv-a-font'
				}
			},
			props: { ...tokens },
		};

		return propertiesAcc;
	},
	{}
);

module.exports = {
	tokenProperties,
	groupedSelectors,
	tokensFileContentsByProperty,
	allSelectors,
	allAllowedNames,
};

/**
 * External dependencies.
 */
const fs = require( 'fs-extra' );
const path = require( 'path' );
const { kebabify, fontData } = require( '@penskemediacorp/larva-tokens' );

const { allSelectors, tokenProperties } = fontData;

/**
 * Transform properties into CSS-friendly format.
 *
 * @return Array of properties in kebab-case.
 */
const properties = tokenProperties.map( ( property ) => kebabify( property ) );

/**
 * Form a ruleset for the selector that builds custom properties
 * that correspond to tokens for the style.
 *
 * @param {string} selector
 * @return {string} CSS ruleset for the selector.
 */
const ruleset = ( selector ) => {
	let css = '';

	const nameSlugs = selector.split( '-' );
	const family = nameSlugs[ 3 ];
	const tokenBase = [ ...nameSlugs ].slice( 3, nameSlugs.length ).join( '-' );

	properties.forEach( ( property ) => {
		css += `
	--${ property }-desktop: var( --${ tokenBase }-${ property }-desktop, var( --${ tokenBase }-${ property }-mobile ) );
	--${ property }-mobile: var(--is-desktop) var( --${ tokenBase }-${ property }-mobile);`;
	} );

	css += `\n
	// Define this token locally; it can be defined via larva-tokens, if needed in the future.
	--font-family: var( --font-family-${ family } );

	font-family: var( --font-family );`;

	css += '\n';

	properties.forEach( ( property ) => {
		css += `
	${ property }: var(
		--${ property }-mobile,
		var(--${ property }-desktop)
	);`;
	} );

	return css;
};

/**
 * Build the CSS string with rulesets for each selector.
 *
 * @param {Array} selectors
 * @return {string} CSS to be written to a file.
 */
const generate = ( selectors ) => {
	let css = '';

	selectors.forEach( ( selector ) => {
		css += `\n.${ selector } {`;
		css += ruleset( selector );
		css += `\n}\n`;
	} );

	return css;
};

const generateAFontScss = ( directory ) => {
	let css = '// Generated css from larva-tokens/lib/generators.js\n';

	css += generate( allSelectors );

	fs.writeFileSync( path.join( directory, `_a-font.scss` ), css );
	console.log( 'Generated _a-font.scss.' ); // eslint-disable-line no-console
};

module.exports = {
	generate,
	ruleset,
	generateAFontScss,
};

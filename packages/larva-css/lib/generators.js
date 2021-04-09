/**
 * External dependencies.
 */
const fs = require( 'fs-extra' );
const path = require( 'path' );
const { kebabify, fontData } = require( '@penskemediacorp/larva-tokens' );

const { allSelectors, tokenProperties } = fontData;

/**
 * Transform properties into CSS friendle format.
 *
 * @returns Array of properties in kebab-case.
 */
const properties = tokenProperties.map( property => kebabify( property ) );

/**
 * Form a ruleset for the selector that builds custom properties
 * that correspond to tokens for the style.
 *
 * @param {string} selector
 * @returns string CSS ruleset for the selector.
 */
const ruleset = ( selector ) => {
	let css = '';

	const nameSlugs = selector.split('-');
	const tokenBase = [...nameSlugs].slice(3, nameSlugs.length ).join('-');

	properties.map( property => {
		css += `
	--${property}-desktop: var( --${tokenBase}-${property}-desktop, var( --${tokenBase}-${property}-base ) );
	--${property}-base: var(--desktop-off) var( --${tokenBase}-${property}-base);`
	});

	css += '\n';

	properties.map( property => {

		css += `
	${property}: var(
		--${property}-base,
		var(--${property}-desktop)
	);`;

	});

	return css;
};

/**
 * Build the CSS string with rulesets for each selector.
 *
 * @param {array} selectors
 * @returns string CSS to be written to a file.
 */
const generate = ( selectors ) => {
	 let css = '';

	 selectors.forEach( selector => {
		 css += `\n.${selector} {`;
		 css += ruleset( selector );
		 css += `\n}\n`;
	 });

	 return css;
};

const generateAFontScss = ( directory ) => {
	let css = '// Generated css from larva-tokens/lib/generators.js\n';

	css += generate( allSelectors );

	fs.writeFileSync( path.join( directory, `_a-font.scss` ), css );
	console.log( 'Generated _a-font.scss.');
};

module.exports = {
	generate,
	ruleset,
	generateAFontScss
};
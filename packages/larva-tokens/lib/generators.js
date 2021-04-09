/**
 * External dependencies.
 */
const fs = require( 'fs-extra' );
const path = require( 'path' );

/**
 * Internal dependencies.
 */
const { kebabify } = require('./utils' );
const { allSelectors, tokenProperties, tokensFileContentsByProperty } = require('./font-data' );

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
	const family = nameSlugs[3];
	const tokenBase = [...nameSlugs].slice(3, nameSlugs.length ).join('-');

	properties.map( property => {
		css += `
	--${property}-desktop: var( --${tokenBase}-${property}-desktop, var( --${tokenBase}-${property}-base ) );
	--${property}-base: var(--desktop-off) var( --${tokenBase}-${property}-base);`
	});

	// If this font-family value needs to be overridden when incorporating
	// existing style guides, it can be abstracted from this declaration as
	// a separate custom property.
	css += `\n
	font-family: var( --font-family-${family} );`;

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

/**
 * Write file contents for each token property
 * to a file.
 */
 const generateFontTokens = () => {
	tokenProperties.forEach( ( property ) => {
		const fileName = kebabify(property);

		fs.writeFileSync( path.join( __dirname, `../src/base/generated/${fileName}.json` ), JSON.stringify( tokensFileContentsByProperty[property] ) );

		console.log( `Generated tokens for ${fileName}.` );
	});
};

module.exports = {
	generate,
	ruleset,
	generateFontTokens,
	generateAFontScss: () => {
		let css = '// Generated css from larva-tokens/lib/generators.js\n';

		css += generate( allSelectors );

		fs.writeFileSync( path.join( __dirname, `../build/a-font.scss` ), css );
		console.log( 'Generated a-font.scss.');
	}
};
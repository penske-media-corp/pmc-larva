const fs = require( 'fs-extra' );
const path = require( 'path' );

const { kebabify } = require('./utils' );
const { allSelectors, tokenProperties, tokensFileContentsByProperty } = require('./font-data' );

const properties = tokenProperties.map( property => kebabify( property ) );

const generateFontTokens = () => {
	tokenProperties.forEach( ( property ) => {
		const fileName = kebabify(property);

		fs.writeFileSync( path.join( __dirname, `../src/base/generated/${fileName}.json` ), JSON.stringify( tokensFileContentsByProperty[property] ) );

		console.log( `Generated tokens for ${fileName}.` );
	});
};

const ruleset = ( selector ) => {
	let css = '';

	const nameSlugs = selector.split('-');
	const family = nameSlugs[3];
	const tokenBase = [...nameSlugs].slice(3, nameSlugs.length ).join('-');

	properties.map( property => {
		css += `
	--${property}-desktopxl: var(--${tokenBase}-${property}-desktopxl, var( --${tokenBase}-${property}-desktop ) );
	--${property}-desktop: var(--desktopxl-off) var( --${tokenBase}-${property}-desktop, var( --${tokenBase}-${property}-base ) );
	--${property}-base: var(--desktop-off) var(--desktopxl-off) var( --${tokenBase}-${property}-base);`
	});

	css += `\n
	font-family: var( --font-family-${family} );`;

	properties.map( property => {

		css += `
	${property}: var(
		--${property}-base,
		var(--${property}-desktop, var(--${property}-desktopxl) )
	);`;

	});

	return css;
};

const generate = ( selectors ) => {
	let css = '';

	selectors.forEach( selector => {
		css += `\n.${selector} {`;
		css += ruleset( selector );
		css += `\n}\n`;
	});

	return css;
};

module.exports = {
	generate,
	ruleset,
	generateFontTokens,
	generateAFont: () => {
		let css = '// Generated css from larva-tokens/lib/generators.js\n';

		css += generate( allSelectors );

		fs.writeFileSync( path.join( __dirname, `../build/a-font.scss` ), css );
		console.log( 'Generated a-font.scss.');
	}
};
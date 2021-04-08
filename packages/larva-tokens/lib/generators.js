const fs = require( 'fs-extra' );
const path = require( 'path' );

const { kebabify } = require('./utils' );
const { allSelectors, tokenProperties, tokensFileContentsByProperty } = require('./font-data' );

const generateFontTokens = () => {
	tokenProperties.forEach( ( property ) => {
		const fileName = kebabify(property);

		fs.writeFileSync( path.join( __dirname, `../src/base/generated/${fileName}.json` ), JSON.stringify( tokensFileContentsByProperty[property] ) );

		console.log( `Generated tokens for ${fileName}.` );
	});
};

const rule = ( selector, breakpoint ) => {
	const nameSlugs = selector.split('-');
	const family = nameSlugs[3];
	const tokenBase = [...nameSlugs].slice(3, nameSlugs.length ).join('-');

	switch (breakpoint) {
		case 'base':
			return `\n.${selector} {
				font-family: var( --font-family-${family} );
				font-size: var( --${tokenBase}-font-size-${breakpoint} );
				line-height: var( --${tokenBase}-line-height-${breakpoint} );
				letter-spacing: var( --${tokenBase}-letter-spacing-${breakpoint} );
				font-weight: var( --${tokenBase}-font-weight-${breakpoint} );
			}\n`;
		default:
			return `\n.${selector} {
				font-family: var( --font-family-${family} );
				font-size: var( --${tokenBase}-font-size-${breakpoint} );
				line-height: var( --${tokenBase}-line-height-${breakpoint} );
				letter-spacing: var( --${tokenBase}-letter-spacing-${breakpoint} );
				font-weight: var( --${tokenBase}-font-weight-${breakpoint} );
			}\n`;
	}
};

const generateAFont = () => {
	let fontCSS = '';

	// Base styles
	allSelectors.forEach( selector => {
		fontCSS += rule( selector, 'base' );
	});

	fontCSS += `
	@include pmc-breakpoint( desktop ) {
	`;

	allSelectors.forEach( selector => {
		fontCSS += rule( selector, 'desktop' );
	});

	fontCSS += `}\n`;

	fontCSS += `
	@include pmc-breakpoint( desktop ) {
	`;

	allSelectors.forEach( selector => {
		fontCSS += rule( selector, 'desktopxl' );
	});

	fontCSS += `}\n`;

	fs.writeFileSync( path.join( __dirname, `../build/a-font.scss` ), fontCSS );

	console.log( 'Generated a-font.scss.');
};

module.exports = {
	generateFontTokens,
	generateAFont
};
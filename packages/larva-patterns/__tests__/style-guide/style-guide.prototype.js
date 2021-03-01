const clonedeep = require( 'lodash.clonedeep' );

const c_button_brand_basic = clonedeep( require( '../../components/c-button/c-button.brand-basic' ) );
const c_button_black = clonedeep( require( '../../components/c-button/c-button.black' ) );

const kebabify = ( name ) => {
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

const brand = 'default';
const fontData = require( '../../../larva-tokens/build/' + brand + '.typography.json' );

const font_styles = Object.keys( fontData ).map( variant => {
	const key = kebabify( variant );
	return {
		class: `a-font-${key}`,
		sizes: fontData[variant]
	};
});

module.exports = {
	font_styles,
	c_button_brand_basic,
	c_button_black
};
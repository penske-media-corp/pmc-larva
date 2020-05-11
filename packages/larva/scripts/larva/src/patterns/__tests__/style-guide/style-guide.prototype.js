const clonedeep = require( 'lodash.clonedeep' );

const c_button_brand_basic = clonedeep( require( '../../components/c-button/c-button.brand-basic' ) );
const c_button_black = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-button/c-button.black' ) );

module.exports = {
	c_button_brand_basic,
	c_button_black
};
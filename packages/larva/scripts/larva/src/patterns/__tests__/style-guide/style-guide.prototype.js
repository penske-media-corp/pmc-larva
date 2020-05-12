const clonedeep = require( 'lodash.clonedeep' );

// Example of project-level configuration for button (which can is a link by default)
const c_button_brand_basic = clonedeep( require( '../../components/c-button/c-button.brand-basic' ) );

// Example of using core configuration for button, as-is. If you want to modify this,
// add a new configuration for c-button.black in the project.
const c_button_black = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-button/c-button.black' ) );

module.exports = {
	c_button_brand_basic,
	c_button_black
};

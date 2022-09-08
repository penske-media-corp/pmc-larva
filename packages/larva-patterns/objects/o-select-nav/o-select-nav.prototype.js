const clonedeep = require( 'lodash.clonedeep' );

const c_button = clonedeep(
	require( '../../components/c-button/c-button.prototype' )
);
const c_select_option = clonedeep(
	require( '../../components/c-select-option/c-select-option.prototype' )
);

c_button.c_button_text = 'Click Me';

module.exports = {
	o_select_nav_classes: '',
	o_select_nav_select_classes: '',
	c_button,
	o_select_nav_options: [ c_select_option, c_select_option, c_select_option ],
};

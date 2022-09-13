const clonedeep = require( 'lodash.clonedeep' );

const c_title = clonedeep(
	require( '../../components/c-title/c-title.prototype' )
);
const c_checkbox_input = clonedeep(
	require( '../../components/c-checkbox-input/c-checkbox-input.prototype' )
);

c_title.c_title_url = '';

module.exports = {
	o_checkbox_input_list_classes: '',
	o_checkbox_input_list_items_classes: 'lrv-a-unstyle-list',
	o_checkbox_input_list_item_classes: '',
	c_title,
	o_checkbox_input_list_items: [
		c_checkbox_input,
		c_checkbox_input,
		c_checkbox_input,
	],
};

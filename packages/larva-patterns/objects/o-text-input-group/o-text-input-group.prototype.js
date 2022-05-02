const clonedeep = require( 'lodash.clonedeep' );
const c_text_input = clonedeep(require('@penskemediacorp/larva-patterns/components/c-text-input/c-text-input.prototype'));

module.exports = {
	o_text_input_group_classes: '',
	o_text_input_group_items: [
		c_text_input,
		c_text_input,
		c_text_input
	]
};

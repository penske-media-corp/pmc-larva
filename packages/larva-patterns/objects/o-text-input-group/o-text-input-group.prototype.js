 /**
 * Properties intentionally not prefixed with module name to avoid twig-to-php parser issues.
 */
const clonedeep = require( 'lodash.clonedeep' );
const c_text_input = clonedeep(require('@penskemediacorp/larva-patterns/components/c-text-input/c-text-input.prototype'));

module.exports = {
	input_group_class: '',
	input_group_items: [
		c_text_input,
		c_text_input,
		c_text_input
	]
};

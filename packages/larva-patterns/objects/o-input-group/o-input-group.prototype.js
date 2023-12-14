const clonedeep = require( 'lodash.clonedeep' );
const c_input = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-input/c-input.prototype' )
);

module.exports = {
	o_input_group_class: '',
	o_input_group_items: [ c_input, c_input, c_input ],
};

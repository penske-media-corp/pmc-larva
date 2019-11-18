// Note: As of 10/28/19 o-span-group is currently not used anywhere in this project since the design it was created to accommodate changed. However, it might be useful later, so we are keeping it here. Remove this text when it is used, or remove o-span-group if it is October 2020 or later.

const clondeep = require( 'lodash.clonedeep' );
const c_span_prototype = require( '@penskemediacorp/larva-patterns/components/c-span/c-span.prototype' );
const c_span = clondeep( c_span_prototype );

module.exports = {
	o_span_group_classes: '',
	o_span_group_items: [
		c_span,
		clondeep( c_span )
	]
}
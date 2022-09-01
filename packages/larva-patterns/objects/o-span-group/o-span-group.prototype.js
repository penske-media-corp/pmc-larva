const clonedeep = require( 'lodash.clonedeep' );

const c_span = clonedeep(
	require( '../../components/c-span/c-span.prototype' )
);

module.exports = {
	o_span_group_classes: '',
	o_span_group_items: [ c_span, c_span ],
};

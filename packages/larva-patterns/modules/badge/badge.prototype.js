const clonedeep = require( 'lodash.clonedeep' );

const c_span_prototye = require( '../../components/c-span/c-span.prototype' );
const c_span = clonedeep( c_span_prototye );

c_span.c_span_classes +=
	' lrv-u-background-color-grey-light lrv-u-font-size-12 lrv-u-padding-a-025';
c_span.c_span_text = 'Sponsored Video';

module.exports = {
	c_span,
};

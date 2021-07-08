const clonedeep = require( 'lodash.clonedeep' );

const c_span = clonedeep( require( '../../components/c-span/c-span.prototype' ) );
const c_timestamp = clonedeep( require( '../../components/c-timestamp/c-timestamp.prototype.js' ) );

c_span.c_span_text = 'Author Name';

module.exports = {
	o_author_classes: 'lrv-u-font-size-14',
	o_author_text: 'By ',
	c_span: c_span,
	c_timestamp: c_timestamp
};
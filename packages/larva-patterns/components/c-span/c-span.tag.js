const clonedeep = require( 'lodash.clonedeep' );
const c_span = clonedeep( require( './c-span.prototype' ) );

c_span.c_span_text = 'News';
c_span.c_span_url = '#';

module.exports = c_span;

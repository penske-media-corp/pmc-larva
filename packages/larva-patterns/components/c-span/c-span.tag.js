const clonedeep = require( 'lodash.clonedeep' );
const c_span = clonedeep( require( './c-span.prototype' ) );

// c_span.c_span_classes += ' lrv-u-color-brand-primary lrv-u-font-weight-bold lrv-u-font-family-primary';
// c_span.c_span_link_classes = 'lrv-u-color-brand-primary-dark:hover';
c_span.c_span_text = 'News';
c_span.c_span_url = '#';

module.exports = c_span;
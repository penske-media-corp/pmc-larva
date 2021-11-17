const clonedeep = require( 'lodash.clonedeep' );
const c_span = clonedeep( require( './c-span.prototype' ) );

c_span.c_span_classes += ' lrv-u-color-brand-primary lrv-u-font-size-12 lrv-u-font-size-14@tablet lrv-u-font-weight-bold lrv-u-text-transform-lowercase lrv-u-font-family-primary';
c_span.c_span_link_classes = 'lrv-u-color-brand-primary-dark:hover';
c_span.c_span_text = 'News';
c_span.c_span_url = '#';

module.exports = c_span;
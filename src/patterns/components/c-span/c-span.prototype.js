const clonedeep = require( 'lodash.clonedeep' );

const c_span = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-span/c-span.prototype' ) );

c_span.c_span_text = 'is project';

module.exports = c_span;
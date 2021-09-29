const clonedeep = require( 'lodash.clonedeep' );

const heading = clonedeep( require( './heading.prototype' ) );

heading.heading_typography_class = 'lrv-a-font-primary-xl';
heading.heading_level_text = '1';

module.exports = heading;

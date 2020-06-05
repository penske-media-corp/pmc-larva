const clonedeep = require( 'lodash.clonedeep' );

const heading = clonedeep( require( './heading.prototype' ) );

heading.heading_classes = 'lrv-u-text-align-center a-font-primary-xl lrv-u-color-brand-primary';
heading.heading_level_text = '1';

module.exports = heading;
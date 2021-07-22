const clonedeep = require( 'lodash.clonedeep' );

const heading = clonedeep( require( './heading.prototype' ) );

heading.heading_classes = 'lrv-a-font-accent-l';
heading.heading_level_text = '2';

module.exports = heading;
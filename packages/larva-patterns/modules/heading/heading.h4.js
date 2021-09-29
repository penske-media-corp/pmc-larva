const clonedeep = require( 'lodash.clonedeep' );

const heading = clonedeep( require( './heading.prototype' ) );

heading.heading_level_text = '4';

module.exports = heading;

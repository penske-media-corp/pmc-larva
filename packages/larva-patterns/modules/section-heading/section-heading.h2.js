const clonedeep = require( 'lodash.clonedeep' );

const section_heading = clonedeep( require( './section-heading.prototype' ) );

section_heading.c_dek = false;

module.exports = section_heading;
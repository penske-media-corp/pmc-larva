const clonedeep = require( 'lodash.clonedeep' );
const button = clonedeep( require( './button.prototype' ) );

button.button_classes += ' is-style-outline';

module.exports = button;

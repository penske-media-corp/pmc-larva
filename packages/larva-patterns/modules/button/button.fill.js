const clonedeep = require( 'lodash.clonedeep' );
const button = clonedeep( require( './button.prototype' ) );

button.button_classes += ' is-style-fill';

module.exports = button;

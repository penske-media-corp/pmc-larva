const clonedeep = require( 'lodash.clonedeep' );

const c_button_protoype = require( './c-button.prototype' );
const c_button = clonedeep( c_button_protoype );

c_button.c_button_classes += ' lrv-u-display-inline-flex';

module.exports = c_button;

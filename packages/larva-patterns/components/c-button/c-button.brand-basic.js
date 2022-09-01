const clonedeep = require( 'lodash.clonedeep' );

const c_button_protoype = require( './c-button.prototype' );
const c_button = clonedeep( c_button_protoype );

c_button.c_button_classes +=
	' lrv-u-padding-tb-050 lrv-u-padding-lr-1 lrv-u-background-color-brand-primary lrv-u-color-white';

module.exports = c_button;

const clonedeep = require( 'lodash.clonedeep' );

const c_button_protoype = require( './c-button.prototype' );
const c_button = clonedeep( c_button_protoype );

c_button.c_button_classes += ' lrv-u-border-t-3 lrv-u-border-r-1 lrv-u-border-b-3 lrv-u-border-l-1 lrv-u-padding-tb-050 lrv-u-padding-lr-1 lrv-u-background-color-white lrv-u-color-black lrv-u-border-color-currentColor lrv-u-text-transform-uppercase';

module.exports = c_button;

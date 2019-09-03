const path = require( 'path' );
const c_button_protoype = require( './c-button.prototype' );
const c_button = Object.assign( {}, c_button_protoype );

c_button.c_button_classes += "lrv-a-unstyle-button lrv-u-cursor-pointer lrv-u-border-a-3 lrv-u-border-radius-5 lrv-u-color-brand-primary lrv-u-padding-tb-050 lrv-u-padding-lr-1 lrv-u-color-grey-dark:hover lrv-u-font-weight-bold lrv-u-display-inline-block";
c_button.c_button_type_attr = "";
c_button.c_button_url = "#";

module.exports = c_button;
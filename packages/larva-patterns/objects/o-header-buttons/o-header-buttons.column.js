const clonedeep = require( 'lodash.clonedeep' );

const header_buttons_prototype = require( './o-header-buttons.prototype' );
const header_buttons = clonedeep( header_buttons_prototype );

header_buttons.button_wrap = true;
header_buttons.c_subscribe_link.c_link_classes =
	'lrv-a-unstyle-link lrv-u-text-transform-uppercase lrv-u-font-family-body lrv-u-font-size-12 lrv-u-font-size-8@mobile-max  lrv-u-color-brand-primary:hover lrv-u-border-b-1 lrv-u-border-color-white lrv-u-border-color-brand-primary:hover lrv-u-border-b-1 lrv-u-border-color-currentColor lrv-u-margin-b-025';
header_buttons.c_got_a_tip.c_link_classes =
	'lrv-a-unstyle-link lrv-u-text-transform-uppercase lrv-u-font-family-body lrv-u-font-size-12 lrv-u-font-size-8@mobile-max  lrv-u-color-brand-primary:hover lrv-u-border-b-1 lrv-u-border-color-white lrv-u-border-color-brand-primary:hover lrv-u-margin-tb-025';
header_buttons.o_header_button_classes =
	'lrv-u-align-items-stretch lrv-a-space-children-horizontal lrv-a-space-children--1';
module.exports = header_buttons;

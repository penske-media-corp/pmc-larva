const clonedeep = require( 'lodash.clonedeep' );

const c_link_prototype = require( '../../components/c-link/c-link.prototype' );
const o_account_menu_prototype = require( '../../objects/o-account-menu/o-account-menu.prototype' );

const c_login_link = clonedeep( c_link_prototype );
c_login_link.c_link_text = 'Log In';
c_login_link.c_link_classes =
	' lrv-a-unstyle-link lrv-u-text-transform-uppercase lrv-u-font-family-body lrv-u-font-size-12 lrv-u-font-size-8@mobile-max  lrv-u-color-brand-primary:hover lrv-u-border-b-1 lrv-u-border-color-white lrv-u-border-color-brand-primary:hover';

const c_subscribe_link = clonedeep( c_link_prototype );
c_subscribe_link.c_link_text = 'Subscribe';
c_subscribe_link.c_link_classes =
	'lrv-a-unstyle-button lrv-a-unstyle-link lrv-u-text-transform-uppercase lrv-u-font-family-body lrv-u-font-size-12 lrv-u-font-size-8@mobile-max  lrv-u-color-brand-primary:hover lrv-u-border-b-1 lrv-u-border-color-white lrv-u-border-color-brand-primary:hover';

const c_account_link = clonedeep( c_link_prototype );
c_account_link.c_link_text = 'Account';
c_account_link.c_link_classes =
	'lrv-u-text-transform-uppercase lrv-u-font-family-body lrv-u-font-size-12 lrv-u-font-size-8@mobile-max  lrv-u-color-brand-primary:hover lrv-u-border-color-white lrv-u-border-color-brand-primary:hover';

const c_got_a_tip = clonedeep( c_link_prototype );
c_got_a_tip.c_link_text = 'Got A Tip?';
c_got_a_tip.c_link_classes =
	'lrv-a-unstyle-link lrv-u-text-transform-uppercase lrv-u-font-family-body lrv-u-font-size-12 lrv-u-font-size-8@mobile-max  lrv-u-color-brand-primary:hover lrv-u-border-b-1 lrv-u-border-color-white lrv-u-border-color-brand-primary:hover';

const o_account_menu = clonedeep( o_account_menu_prototype );

o_account_menu.c_account_link.c_link_classes =
	' lrv-a-unstyle-link lrv-u-text-transform-uppercase lrv-u-font-family-body lrv-u-font-size-12 lrv-u-font-size-8@mobile-max  lrv-u-color-brand-primary:hover lrv-u-border-b-1 lrv-u-border-color-white lrv-u-border-color-brand-primary:hover lrv-u-margin-tb-025';

module.exports = {
	c_login_link,
	c_subscribe_link,
	o_account_menu,
	c_got_a_tip,
	c_account_link,
	button_wrap: false,
	show_flyout: true,
	o_header_button_classes:
		'lrv-a-space-children-horizontal lrv-a-space-children--1',
	got_tip_wrapper_classes:
		'lrv-u-border-l-00@mobile-max lrv-u-border-l-1 lrv-u-padding-l-1 lrv-u-padding-tb-025 lrv-u-flex lrv-u-align-items-center lrv-u-margin-tb-025',
	account_menu_classes:
		'lrv-u-flex lrv-u-align-items-center lrv-u-border-l-00@mobile-max lrv-u-border-l-1 lrv-u-padding-l-1 lrv-u-padding-tb-025 lrv-u-margin-tb-025',
	hide_flyout_classes: ' ',
	subscribe_wrapper_classes:
		'subscribe-link cx-dynamic-link lrv-u-border-l-00@mobile-max lrv-u-border-l-1 lrv-u-padding-l-1 lrv-u-padding-tb-025 lrv-u-margin-tb-025',
	login_wrapper_classes:
		'subscriber-login-link lrv-u-border-l-00@mobile-max lrv-u-border-l-1 lrv-u-padding-l-1 lrv-u-padding-tb-025  lrv-u-margin-tb-025',
	button_wrap_classes:
		'lrv-u-flex lrv-u-flex-direction-column lrv-u-align-items-center lrv-u-border-l-00@mobile-max lrv-u-border-l-1 lrv-u-padding-l-1 lrv-u-margin-tb-025',
};

const clonedeep = require( 'lodash.clonedeep' );

const expandable_search_prototype = require( '../expandable-search/expandable-search.prototype' );
const o_header_buttons_prototype = require( '../../objects/o-header-buttons/o-header-buttons.prototype' );
const c_logo_prototype = require( '../../components/c-logo/c-logo.prototype' );
const o_icon_button_prototype = require( '../../objects/o-icon-button/o-icon-button.prototype' );

const expandable_search = clonedeep( expandable_search_prototype );

const c_logo = clonedeep( c_logo_prototype );

const o_icon_button_menu = clonedeep( o_icon_button_prototype );
o_icon_button_menu.c_icon.c_icon_classes =
	'lrv-u-display-block lrv-u-width-30 lrv-u-height-30';
o_icon_button_menu.o_icon_button_classes =
	'js-MegaMenu-Trigger lrv-u-align-items-center lrv-u-border-a-0 lrv-u-flex lrv-u-padding-lr-1 lrv-u-background-color-transparent lrv-u-color-brand-primary:hover';
o_icon_button_menu.c_span.c_span_text = '';
o_icon_button_menu.o_icon_button_screen_reader_text =
	'Click to expand the Mega Menu';

const o_header_buttons = clonedeep( o_header_buttons_prototype );
o_header_buttons.login_wrapper_classes =
	'lrv-u-border-l-00@mobile-max lrv-u-border-l-1 lrv-u-padding-l-1 lrv-u-padding-tb-025 lrv-a-hidden@mobile-max';
o_header_buttons.got_tip_wrapper_classes =
	'lrv-u-border-l-00@mobile-max lrv-u-border-l-1 lrv-u-padding-l-1 lrv-u-padding-tb-025 lrv-u-flex lrv-u-align-items-center lrv-u-margin-tb-025 lrv-a-hidden@mobile-max';

module.exports = {
	header_sticky_classes:
		' lrv-u-border-color-grey-light lrv-u-border-b-1 lrv-u-background-color-white lrv-u-width-100p',
	o_icon_button_menu,
	c_logo,
	read_next: false,
	expandable_search,
	o_social_list: false,
	o_header_buttons,
	icon_logo_wrap: false,
	header_sticky_content_classes:
		'lrv-u-border-b-1 lrv-u-border-t-1 lrv-u-margin-t-025 lrv-u-padding-t-050 lrv-u-padding-b-050',
	header_sticky_content_inner_classes:
		' lrv-u-flex lrv-u-justify-content-space-between lrv-u-align-items-center',
	header_sticky_icon_logo_wrap_classes:
		' lrv-u-flex lrv-u-justify-content-space-between lrv-u-align-items-center',
	header_sticky_links_classes:
		'lrv-u-align-items-center lrv-u-flex lrv-u-justify-content-end',
	header_sticky_logo_classes:
		'lrv-u-align-items-center lrv-u-flex lrv-u-flex-shrink-0 lrv-u-justify-content-center lrv-u-margin-lr-00@desktop lrv-u-margin-lr-auto',
	header_sticky_inner_classes: 'lrv-u-align-items-center lrv-u-flex',
	header_sticky_outer_classes: 'lrv-a-wrapper',
	header_sticky_icons_classes:
		'lrv-a-glue-parent lrv-u-align-items-center lrv-u-flex lrv-u-padding-r-1',
};

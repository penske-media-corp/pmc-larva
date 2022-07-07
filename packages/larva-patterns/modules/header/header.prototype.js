const clonedeep = require( 'lodash.clonedeep' );

const header_sticky_prototype = require( '../header-sticky/header-sticky.prototype' );
const header_menu_prototype = require( '../header-menu/header-menu.prototype' );
const expandable_search_prototype = require( '../expandable-search/expandable-search.prototype' );
const c_link_prototype = require( '../../components/c-link/c-link.prototype' );
const o_icon_button_prototype = require( '../../objects/o-icon-button/o-icon-button.prototype' );
const o_icon_button_search_prototype = require( '../../objects/o-icon-button/o-icon-button.search' );
const o_header_buttons_prototype = require( '../../objects/o-header-buttons/o-header-buttons.prototype' );
const o_header_buttons_column_prototype = require( '../../objects/o-header-buttons/o-header-buttons.column' );

const header_sticky = clonedeep( header_sticky_prototype );

const expandable_search = clonedeep( expandable_search_prototype );

const header_menu = clonedeep( header_menu_prototype );
header_menu.o_nav.o_nav_list_classes =
	'lrv-a-font-body-s lrv-a-space-children--2 lrv-a-space-children-horizontal lrv-a-unstyle-list lrv-u-flex lrv-u-font-family-body lrv-u-justify-content-center lrv-u-text-transform-uppercase';
const header_menu_items = header_menu.o_nav.o_nav_list_items;
for ( let i = 0; i < header_menu_items.length; i++ ) {
	header_menu.o_nav.o_nav_list_items[ i ].c_link_classes =
		' lrv-u-padding-b-050 lrv-a-unstyle-link lrv-u-color-brand-primary:hover lrv-a-hover-effect lrv-u-whitespace-nowrap lrv-u-border-b-6 lrv-u-border-color-white lrv-u-border-color-brand-primary:hover';
}

const o_account_menu = clonedeep(
	require( '../../objects/o-account-menu/o-account-menu.prototype' )
);
o_account_menu.o_account_menu_classes += ' lrv-a-hidden';

const c_shop_link = clonedeep( c_link_prototype );
c_shop_link.c_link_text = 'RS shop';
c_shop_link.c_link_classes =
	'lrv-u-margin-b-050 lrv-a-unstyle-link lrv-u-display-inline lrv-u-color-brand-primary:hover lrv-u-border-b-1 lrv-u-border-color-white lrv-u-border-color-brand-primary:hover lrv-u-font-family-body lrv-u-text-transform-uppercase lrv-a-font-body-xxs';

const c_login_link = clonedeep( c_link_prototype );
c_login_link.c_link_text = 'Log In';
c_login_link.c_link_classes =
	'subscriber-login-link lrv-u-margin-b-050 lrv-a-unstyle-link lrv-u-display-inline lrv-u-color-brand-primary:hover lrv-u-border-b-1 lrv-u-border-color-white lrv-u-border-color-brand-primary:hover lrv-u-font-family-body lrv-u-text-transform-uppercase lrv-a-font-body-xxs  lrv-a-hidden@mobile-max ';

const c_subscribe_link = clonedeep( c_link_prototype );
c_subscribe_link.c_link_text = 'Subscribe';
c_subscribe_link.c_link_classes =
	'subscribe-link cx-dynamic-link lrv-u-margin-b-050 lrv-a-unstyle-link lrv-u-display-inline lrv-u-color-brand-primary:hover lrv-u-border-b-1 lrv-u-border-color-white lrv-u-border-color-brand-primary:hover lrv-u-font-family-body lrv-u-text-transform-uppercase lrv-a-font-body-xxs';

const c_got_a_tip = clonedeep( c_link_prototype );
c_got_a_tip.c_link_text = 'Got A Tip?';
c_got_a_tip.c_link_classes =
	'lrv-u-margin-b-050 lrv-a-unstyle-link lrv-u-display-inline lrv-u-color-brand-primary:hover lrv-u-border-b-1 lrv-u-border-color-white lrv-u-border-color-brand-primary:hover lrv-u-font-family-body lrv-u-text-transform-uppercase lrv-a-font-body-xxs';

const c_logo_prototype = require( '../../components/c-logo/c-logo.prototype' );
const c_logo = clonedeep( c_logo_prototype );
c_logo.c_logo_classes +=
	'lrv-u-color-brand-primary lrv-u-color-brand-primary:hover lrv-u-display-inline-flex lrv-u-justify-content-center lrv-u-width-100p';
c_logo.c_logo_is_h1 = true;

const o_icon_button_search = clonedeep( o_icon_button_search_prototype );
const o_icon_button_menu = clonedeep( o_icon_button_prototype );

o_icon_button_menu.o_icon_button_classes +=
	' js-MegaMenu-Trigger lrv-u-margin-r-auto lrv-u-color-brand-primary:hover lrv-a-glue-parent';
o_icon_button_menu.c_icon.c_icon_classes =
	'lrv-u-display-block lrv-u-width-30 lrv-u-height-30';
o_icon_button_menu.c_span.c_span_text = '';
o_icon_button_menu.o_icon_button_screen_reader_text =
	'Click to expand the Mega Menu';

const o_header_buttons = clonedeep( o_header_buttons_prototype );

const o_header_buttons_column = clonedeep( o_header_buttons_column_prototype );

module.exports = {
	header_classes: 'lrv-a-glue-parent',
	header_inner_classes:
		'lrv-u-width-100p lrv-u-padding-t-1 lrv-u-background-color-white',
	header_sticky_outer_classes: ' lrv-u-width-100p',
	header_outer_classes: 'lrv-u-flex lrv-u-justify-content-space-between',
	header_contents_classes: '',
	header_logo_classes: 'lrv-u-text-align-center lrv-u-width-40p@tablet',
	header_content_primary_classes:
		'lrv-u-flex lrv-u-justify-content-space-between lrv-u-align-items-center lrv-u-margin-b-050 lrv-u-padding-b-1',
	header_content_secondary_classes:
		'lrv-a-hidden@mobile-max  lrv-u-align-items-center lrv-u-flex lrv-u-justify-content-center',
	header_links_primary_classes:
		'lrv-a-hidden@mobile-max lrv-u-width-30p lrv-a-space-children--050 lrv-a-space-children-vertical',
	header_links_secondary_classes:
		'lrv-u-width-30p lrv-u-text-align-right lrv-a-space-children--050 lrv-a-space-children-vertical',
	header_mobile_button_classes:
		'lrv-a-hidden@tablet lrv-u-width-22p@mobile-max',
	header_links_primary_inner_classes:
		'lrv-u-display-inline-flex lrv-u-flex-direction-column',
	header_links_secondary_inner_classes:
		'lrv-u-display-inline-flex lrv-u-flex-direction-column ',
	header_content_secondary_outer_classes: 'lrv-u-border-t-6',
	header_content_secondary_inner_classes:
		'lrv-u-border-b-1 lrv-u-border-t-1 lrv-u-margin-t-050 lrv-u-padding-t-050 lrv-u-padding-b-050 lrv-u-border-b-1 lrv-u-border-t-1 lrv-u-margin-t-050 lrv-u-margin-t-025@mobile-max lrv-u-border-b-00@mobile-max',
	header_content_menu_classes:
		'lrv-u-margin-l-125 lrv-a-space-children--050 lrv-a-space-children-vertical',
	c_logo,
	c_link_left_primary: c_shop_link,
	c_link_left_secondary: c_got_a_tip,
	c_link_right_primary: c_subscribe_link,
	c_link_right_secondary: c_login_link,
	o_icon_button_menu,
	o_icon_button_search,
	header_menu,
	header_sticky,
	expandable_search,
	is_home: true,
	o_header_buttons,
	o_header_buttons_column,
	o_account_menu,
};

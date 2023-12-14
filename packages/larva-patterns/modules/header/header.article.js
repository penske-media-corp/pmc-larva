const clonedeep = require( 'lodash.clonedeep' );

const header_prototype = require( './header.prototype' );
const header = clonedeep( header_prototype );

const header_sticky_prototype = require( '../header-sticky/header-sticky.article' );
const header_sticky = clonedeep( header_sticky_prototype );
header.header_sticky = header_sticky;

header.is_home = false;
header.header_classes = 'lrv-a-glue-parent';
header.header_inner_classes =
	'lrv-u-background-color-white lrv-u-border-b-1 lrv-u-border-t-1 lrv-u-width-100p';
header.header_sticky_outer_classes = ' lrv-u-width-100p';
header.header_contents_classes =
	'lrv-u-flex lrv-u-justify-content-space-between';
header.header_outer_classes =
	'lrv-u-border-t-5 lrv-u-padding-t-025 lrv-u-width-100p';
header.header_logo_classes = 'lrv-u-flex lrv-u-text-align-center';
header.header_content_primary_classes =
	'lrv-a-wrapper lrv-a-space-children-horizontal lrv-u-align-items-center lrv-u-flex';
header.header_content_secondary_classes =
	'lrv-u-align-items-center lrv-u-border-b-1 lrv-u-border-t-1 lrv-u-flex lrv-u-justify-content-center lrv-u-margin-t-025 lrv-u-padding-tb-075';
header.header_links_primary_classes =
	'lrv-u-align-items-center lrv-u-padding-r-1 lrv-u-border-r-1 lrv-a-space-children--050 lrv-a-space-children-horizontal lrv-u-flex';
header.header_links_secondary_classes =
	'lrv-a-space-children--1 lrv-a-space-children-horizontal lrv-u-flex lrv-u-margin-l-auto';
header.c_logo.c_logo_classes +=
	'lrv-u-color-brand-primary lrv-u-color-brand-primary:hover lrv-u-display-inline-flex lrv-u-justify-content-center lrv-u-width-100p lrv-u-width-150';
header.header_content_menu_classes =
	'lrv-u-margin-l-125 lrv-a-space-children--050 lrv-a-space-children-horizontal lrv-u-flex';

header.o_icon_button_menu.c_icon.c_icon_classes =
	'lrv-u-display-block lrv-u-width-30 lrv-u-height-30';
header.o_icon_button_menu.o_icon_button_classes =
	'js-MegaMenu-Trigger lrv-u-align-items-center lrv-u-border-a-0 lrv-u-flex lrv-u-padding-lr-1 lrv-u-background-color-transparent lrv-u-color-brand-primary:hover';
header.o_icon_button_menu.o_icon_button_screen_reader_text =
	'Click to expand the Mega Menu';
header.o_icon_button_menu.c_span.c_span_text = '';

header.header_menu.o_nav.o_nav_list_item_classes =
	'lrv-a-font-body-s lrv-a-space-children--2 lrv-a-space-children-horizontal lrv-a-unstyle-list lrv-u-flex lrv-u-justify-content-center lrv-u-text-transform-uppercase lrv-u-padding-t-050';
const header_menu_items = header.header_menu.o_nav.o_nav_list_items;

for ( let i = 0; i < header_menu_items.length; i++ ) {
	header.header_menu.o_nav.o_nav_list_items[ i ].c_link_classes =
		'lrv-u-padding-tb-075 lrv-a-unstyle-link lrv-u-color-brand-primary:hover lrv-a-hover-effect lrv-u-whitespace-nowrap lrv-u-border-b-6 lrv-u-border-color-white lrv-u-border-color-brand-primary:hover lrv-u-line-height-large lrv-u-display-inline-block';
}

header.expandable_search.expandable_search_inner_classes =
	'lrv-u-height-auto lrv-a-glue lrv-a-glue--r-0 lrv-a-glue--t-50p lrv-u-flex lrv-u-transform-translateY-n50p';
header.expandable_search.expandable_search_classes += ' sticky-expandable';

module.exports = header;

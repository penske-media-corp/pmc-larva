const clonedeep = require( 'lodash.clonedeep' );

const c_heading_prototype = require( '@penskemediacorp/larva-patterns/components/c-heading/c-heading.prototype.js' );
const c_heading = clonedeep( c_heading_prototype );

const o_nav_prototype = require( '@penskemediacorp/larva-patterns/objects/o-nav/o-nav.prototype' );
const o_nav = clonedeep( o_nav_prototype );

const o_nav_items_c_links__prototype = require( '@penskemediacorp/larva-patterns/components/c-link/c-link.prototype.js' );

c_heading.c_heading_text = 'Market';
c_heading.c_heading_classes =
	'lrv-u-font-family-secondary lrv-u-font-size-56@desktop-xl lrv-u-font-size-50 lrv-u-margin-b-050@mobile-max lrv-u-line-height-small lrv-u-text-align-center@mobile-max lrv-u-margin-r-2@desktop';
c_heading.c_heading_is_primary_heading = true;

o_nav.o_nav_list_items = [];
const menuLinks = [
	'View All',
	'Tag Title',
	'Tag Title',
	'Tag Title',
	'Tag Title',
	'Tag Title',
];

for ( let i = 0; i < menuLinks.length; i++ ) {
	const c_link = clonedeep( o_nav_items_c_links__prototype );

	c_link.c_link_text = menuLinks[ i ];
	c_link.c_link_classes +=
		' c_link_classes lrv-u-font-family-primary lrv-u-color-grey-dark:hover';

	o_nav.o_nav_list_items.push( c_link );
}

const mobileDropdownUtilities =
	' lrv-u-border-a-1@mobile-max lrv-u-justify-content-center lrv-u-margin-b-050@mobile-max lrv-u-border-color-grey-light';

o_nav.o_nav_classes =
	'lrv-u-flex@desktop lrv-u-align-items-center lrv-u-text-align-center lrv-js-MobileHeightToggle';
o_nav.o_nav_title_text = 'View Categories';
o_nav.o_nav_title_classes =
	'lrv-a-hidden@desktop lrv-js-MobileHeightToggle-trigger lrv-a-icon-after lrv-a-icon-arrow-down lrv-u-font-size-16 lrv-u-font-family-primary lrv-u-font-weight-normal lrv-u-padding-tb-050 lrv-u-width-100p@mobile-max ' +
	mobileDropdownUtilities;
o_nav.o_nav_list_classes +=
	' lrv-js-MobileHeightToggle-target lrv-u-flex lrv-u-flex-direction-column@mobile-max  lrv-u-line-height-large lrv-u-flex-wrap-wrap lrv-a-space-children--1 lrv-a-space-children-horizontal@tablet';
o_nav.o_nav_list_item_classes = mobileDropdownUtilities;

module.exports = {
	o_sub_header_classes:
		'lrv-u-flex u-align-items-flex-end@tablet lrv-u-flex-direction-column@mobile-max',
	c_heading,
	o_nav,
};

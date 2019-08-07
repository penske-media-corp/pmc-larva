const path = require( 'path' );
const clone = require( '@penskemediacorp/larva' ).clone;// This should be in this repo, probably
const o_nav = clone( path.resolve( __dirname, '../../objects/o-nav/o-nav.prototype' ) );

o_nav.o_nav_title_text = 'Footer Menu';
o_nav.o_nav_title_id_attr = 'pmc-footer';
o_nav.o_nav_classes = 'pmc-js-MobileHeightToggle pmc-u-color-white pmc-u-text-align-center@tablet pmc-u-border-a-1@mobile-max pmc-u-border-color-white';
o_nav.o_nav_title_classes = 'pmc-js-MobileHeightToggle-trigger pmc-u-padding-lr-1 pmc-u-margin-tb-00 pmc-u-padding-t-1 pmc-u-padding-t-050@tablet pmc-u-padding-b-050 pmc-u-width-100p@mobile-max a-icon-after a-icon-arrow-down a-icon-after:margin-l-auto a-icon-after-remove@tablet a-icon-invert pmc-u-cursor-pointer pmc-u-font-family-primary pmc-u-font-weight-bold pmc-u-font-size-20';
o_nav.o_nav_list_classes += ' pmc-js-MobileHeightToggle-target pmc-u-padding-b-050';
o_nav.o_nav_list_item_classes = 'pmc-u-padding-lr-1 pmc-u-padding-tb-050 pmc-u-font-size-18@mobile-max pmc-u-font-size-12 pmc-u-color-grey-light pmc-u-color-white:hover';

module.exports = {
	o_navs: [
		o_nav,
		o_nav,
		o_nav
	]
};
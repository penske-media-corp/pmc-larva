const clonedeep = require( 'lodash.clonedeep' );

const o_nav = clonedeep( require( '../../objects/o-nav/o-nav.prototype' ) );

o_nav.o_nav_title_text = 'Footer Menu';
o_nav.o_nav_classes =
	'lrv-js-MobileHeightToggle lrv-u-text-align-center@tablet lrv-u-border-a-1@mobile-max lrv-u-border-color-white';
o_nav.o_nav_title_classes =
	'lrv-js-MobileHeightToggle-trigger lrv-u-padding-lr-1 lrv-u-margin-tb-00 lrv-u-padding-t-1 lrv-u-padding-t-050@tablet lrv-u-padding-b-050 lrv-u-width-100p@mobile-max lrv-a-icon-after lrv-a-icon-arrow-down lrv-a-icon-after:margin-l-auto lrv-a-icon-after-remove@tablet lrv-a-icon-invert lrv-u-cursor-pointer lrv-u-font-family-primary lrv-u-font-weight-bold lrv-u-font-size-20';
o_nav.o_nav_list_classes +=
	' lrv-js-MobileHeightToggle-target lrv-u-padding-b-050';
o_nav.o_nav_list_item_classes =
	'lrv-u-padding-lr-1 lrv-u-padding-tb-050 lrv-u-font-size-18@mobile-max lrv-u-font-size-12 lrv-u-color-grey-light lrv-u-color-white:hover';

module.exports = {
	footer_menu_classes:
		'lrv-a-grid lrv-a-cols3@tablet lrv-u-background-color-black lrv-u-color-white',
	o_navs: [ o_nav, o_nav, o_nav ],
};

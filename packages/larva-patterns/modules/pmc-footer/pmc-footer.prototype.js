const clone = require( '@penskemediacorp/larva' ).clone;
const path = require( 'path' );
const c_link_path = path.resolve( __dirname, '../../components/c-link/c-link.prototype' );
const o_nav = clone( path.resolve( __dirname, '../../objects/o-nav/o-nav.prototype' ) );
const c_icon = clone( path.resolve( __dirname, '../../components/c-icon/c-icon.full' ) );

const data = require( '../../_data/brands.json' );

o_nav.o_nav_title_text = 'Our Sites';
o_nav.o_nav_list_items = [];

c_icon.c_icon_classes = 'lrv-u-max-width-150 lrv-u-max-height-50 lrv-u-color-black';
c_icon.c_icon_name = 'pmc-logo';
c_icon.c_icon_url = 'https://pmc.com';
c_icon.c_icon_rel_name = 'noopener noreferrer';

data.brands.forEach( ( brand ) => {
	let c_link = clone( c_link_path );

	c_link.c_link_text = brand.name;
	c_link.c_link_url = brand.url;
	c_link.c_link_classes += ' lrv-u-display-block lrv-u-background-color-brand-primary:hover lrv-u-color-white:hover lrv-u-font-weight-bold lrv-u-padding-lr-1 lrv-u-padding-tb-050';

	o_nav.o_nav_list_items.push( c_link );
});

o_nav.o_nav_title_id_attr = 'pmc-footer';
o_nav.o_nav_classes = 'lrv-u-text-transform-uppercase lrv-u-font-size-12 lrv-u-border-a-1 lrv-u-border-color-grey-light lrv-u-flex@tablet lrv-js-MobileHeightToggle lrv-a-hover-dropup@tablet';
o_nav.o_nav_title_classes = 'lrv-u-padding-lr-1 lrv-u-margin-tb-00 lrv-u-padding-t-1 lrv-u-padding-t-050@tablet lrv-u-padding-b-050 lrv-u-width-100p lrv-a-icon-after lrv-a-icon-arrow-down lrv-a-icon-after:margin-l-auto lrv-u-cursor-pointer lrv-js-MobileHeightToggle-trigger lrv-a-hover-dropup-trigger@tablet';
o_nav.o_nav_list_classes += ' lrv-u-background-color-white lrv-u-padding-b-050 lrv-js-MobileHeightToggle-target lrv-a-hover-dropup-target@tablet lrv-u-box-shadow-medium@tablet';
o_nav.o_nav_list_item_classes = 'lrv-u-color-grey-medium-dark';

module.exports = {
	"c_icon": c_icon,
	"c_tagline": {
		"c_tagline_classes": "lrv-u-margin-a-00",
		"c_tagline_text": "Copyright © 2018 Penske Business Media, LLC. All rights reserved."
	},
	"c_link": {
		"c_link_classes": "lrv-a-unstyle-link",
		"c_link_text": "Powered by WordPress.com VIP",
		"c_link_url": "#"
	},
	"o_nav": o_nav
};

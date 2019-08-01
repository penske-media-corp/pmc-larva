const clone = require( '@penskemediacorp/larva' ).clone;
const path = require( 'path' );
const c_link_path = path.resolve( __dirname, '../../components/c-link/c-link.prototype' );
const o_nav = clone( path.resolve( __dirname, '../../objects/o-nav/o-nav.prototype' ) );
const c_icon = clone( path.resolve( __dirname, '../../components/c-icon/c-icon.full' ) );

const data = require( '../../_data/brands.json' );

o_nav.o_nav_title_text = 'Our Sites';
o_nav.o_nav_list_items = [];

c_icon.c_icon_classes = 'pmc-u-max-width-150 pmc-u-max-height-50';
c_icon.c_icon_name = 'pmc-logo-black';
c_icon.c_icon_url = 'https://pmc.com';
c_icon.c_icon_rel_name = 'noopener noreferrer';

// pmc-u-margin-r-2 pmc-u-margin-r-00@mobile-max pmc-u-margin-b-1@mobile-max u-flex-order-1@mobile-max

data.brands.forEach( ( brand ) => {
	let c_link = clone( c_link_path );

	c_link.c_link_text = brand.name;
	c_link.c_link_url = brand.url;
	c_link.c_link_classes += ' pmc-u-text-transform-uppercase';

	o_nav.o_nav_list_items.push( c_link );
});

// o_nav.o_nav_list_classes += ' ';

module.exports = {
	"c_icon": c_icon,
	"c_tagline": {
		"c_tagline_classes": "pmc-u-margin-a-00",
		"c_tagline_text": "Copyright © 2018 Penske Business Media, LLC. All rights reserved."
	},
	"c_link": {
		"c_link_classes": "pmc-a-unstyle-link",
		"c_link_text": "Powered by WordPress.com VIP",
		"c_link_url": "#"
	},
	"o_dropdown": {
		"o_dropdown_classes": "pmc-u-font-size-12 pmc-u-font-weight-bold pmc-u-margin-l-auto u-width-300 u-max-width-100p u-flex-order-2@mobile-max u-display-none@mobile-max a-icon-after-down a-icon-after-down--has-hover pmc-u-display-block",
		"o_dropdown_heading_classes": "u-flex u-align-items-center pmc-u-padding-l-1 pmc-u-text-transform-uppercase",
		"o_dropdown_heading_text": "Our Sites",
		"o_dropdown_list_classes": "pmc-u-background-white pmc-u-margin-a-00",
		"o_dropdown_list_items": [
			{
				"c_link_classes": "pmc-u-padding-l-1 pmc-u-line-height-large pmc-u-text-transform-uppercase u-display-block u-color-white:hover pmc-u-background-brand-red:hover",
				"c_link_url": "https://variety.com/",
				"c_link_text": "Variety"
			},
		]
	},
	"o_nav": o_nav
};

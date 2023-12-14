const clonedeep = require( 'lodash.clonedeep' );

const o_nav_prototype = require( '../../objects/o-nav/o-nav.prototype' );
const o_nav = clonedeep( o_nav_prototype );

const c_title_prototype = require( '../../components/c-title/c-title.prototype' );
const c_title = clonedeep( c_title_prototype );

const c_icon_prototype = require( '../../components/c-icon/c-icon.prototype' );
const c_icon_twitter = clonedeep( c_icon_prototype );
const c_icon_mail = clonedeep( c_icon_prototype );

const c_link_prototype = require( '../../components/c-link/c-link.prototype' );
const storyTitles = [
	'No Doubt’s Tony Kanal on Robbie Shakespeare: ‘You Can’t Overstate How Great He Was’',
	'From ‘Downpressor Man’ to ‘Jokerman’: 10 Essential Robbie Shakespeare Tracks',
];

// Overwrite default items
o_nav.o_nav_list_items = [];

for ( let i = 0; i < storyTitles.length; i++ ) {
	const c_link = clonedeep( c_link_prototype );

	c_link.c_link_text = storyTitles[ i ];
	c_link.c_link_classes = 'lrv-u-color-black';

	o_nav.o_nav_list_items.push( c_link );
}

c_title.c_title_classes =
	'lrv-u-margin-r-auto lrv-u-width-100 lrv-u-font-size-13 lrv-u-font-weight-bold lrv-u-text-transform-uppercase';
c_title.c_title_url = '#';
c_title.c_title_text = 'PATRICIA MESCHINO';
c_title.c_title_link_classes = 'lrv-u-color-black';

o_nav.o_nav_classes =
	'lrv-u-margin-t-075 lrv-u-border-t-1 lrv-u-padding-t-025 lrv-u-width-100p ';
o_nav.o_nav_title_text = '';
o_nav.o_nav_title_classes =
	'lrv-u-padding-t-050 lrv-u-padding-b-025 lrv-u-font-family-primary lrv-u-font-size-20';
o_nav.o_nav_list_classes =
	' lrv-u-border-t-1 lrv-u-border-b-1 lrv-u-padding-t-075 lrv-u-padding-l-1 lrv-u-font-size-13 lrv-u-list-style-type-disclosure-closed';
o_nav.o_nav_list_item_classes = 'lrv-u-padding-b-075';

c_icon_twitter.c_icon_name = 'twitter';
c_icon_twitter.c_icon_classes =
	'lrv-u-width-16 lrv-u-height-16 lrv-u-color-black';
c_icon_twitter.c_icon_url = '#';
c_icon_twitter.c_icon_screen_reader_text = 'Twitter Icon';
c_icon_twitter.c_icon_screen_reader_title_attr = 'Twitter Icon';
c_icon_twitter.c_icon_link_classes = 'lrv-u-flex';

c_icon_mail.c_icon_name = 'envelope';
c_icon_mail.c_icon_classes =
	'lrv-u-margin-l-075 lrv-u-width-16 lrv-u-height-16 lrv-u-color-black';
c_icon_mail.c_icon_url = '#';
c_icon_mail.c_icon_screen_reader_text = 'Email Icon';
c_icon_mail.c_icon_screen_reader_title_attr = 'Email Icon';
c_icon_mail.c_icon_link_classes = 'lrv-u-flex';

c_link_view_all = clonedeep( c_link_prototype );
c_link_view_all.c_link_classes =
	'lrv-u-font-size-10 lrv-u-text-transform-uppercase lrv-a-unstyle-link';
c_link_view_all.c_link_text = 'View All Stories ▶';
c_link_view_all.c_link_url = '#';

module.exports = {
	author_details_classes:
		'lrv-u-flex lrv-u-flex-wrap-wrap lrv-u-margin-t-1 lrv-u-padding-lr-125 lrv-u-padding-t-125 lrv-u-padding-b-1 lrv-u-border-a-2 lrv-u-width-215 lrv-u-background-color-white lrv-a-glue-parent lrv-a-icon-after-arrow-top-left',
	author_details_icons_classes:
		'lrv-u-flex lrv-u-align-items-center lrv-u-margin-l-auto',
	author_details_view_link_classes: ' lrv-u-flex lrv-u-margin-l-auto',
	c_title,
	c_icon_twitter,
	c_icon_mail,
	o_nav,
	c_link_view_all,
};

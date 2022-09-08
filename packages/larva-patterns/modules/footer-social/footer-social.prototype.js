const clonedeep = require( 'lodash.clonedeep' );

const c_icon_prototype = require( '../../components/c-icon/c-icon.prototype' );
const c_title = clonedeep(
	require( '../../components/c-title/c-title.prototype' )
);
const c_tagline = clonedeep(
	require( '../../components/c-tagline/c-tagline.prototype' )
);
const o_social_list = clonedeep(
	require( '../../objects/o-social-list/o-social-list.prototype' )
);

c_title.c_title_url = false;
c_title.c_title_classes =
	'lrv-u-margin-b-025 lrv-u-font-family-primary lrv-u-text-align-center';
c_title.c_title_text = 'Connect with Us';

c_tagline.c_tagline_classes =
	'lrv-u-font-size-14 u-font-style-italic lrv-u-font-family-basic lrv-u-text-align-center';
c_tagline.c_tagline_text =
	'Get our latest stories in the feed of your favorite networks';

const social = [ 'instagram', 'pinit', 'twitter', 'facebook', 'youtube' ];

// Clear existing icons, update classes
o_social_list.o_social_list_icons = [];
o_social_list.o_social_list_classes =
	'lrv-a-unstyle-list lrv-u-flex lrv-u-align-items-center lrv-u-justify-content-center';

for ( let i = 0; i < social.length; i++ ) {
	const c_icon = clonedeep( c_icon_prototype );
	c_icon.c_icon_url = '#';
	c_icon.c_icon_name = social[ i ];
	c_icon.c_icon_link_classes +=
		' lrv-u-display-block lrv-u-border-radius-50p lrv-u-color-grey lrv-u-margin-lr-050 lrv-u-padding-a-050 lrv-u-background-color-white lrv-u-color-grey-dark:hover';

	o_social_list.o_social_list_icons.push( c_icon );
}

module.exports = {
	footer_social_classes:
		'lrv-u-text-align-center lrv-u-color-white lrv-u-background-color-black',
	c_title,
	c_tagline,
	o_social_list,
};

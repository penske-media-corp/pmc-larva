const clonedeep = require( 'lodash.clonedeep' )
const c_icon_prototype = require( '../../components/c-icon/c-icon.prototype' );

const social = [ 'instagram', 'pinit', 'twitter', 'facebook', 'youtube' ];
const o_social_list_icons = [];

for (let i = 0; i < social.length; i++) {
	let c_icon = clonedeep( c_icon_prototype );
	c_icon.c_icon_name = social[i];
	c_icon.c_icon_link_classes += ' lrv-u-display-block lrv-u-border-radius-50p lrv-u-color-grey lrv-u-margin-lr-025 lrv-u-padding-a-050 lrv-u-background-color-white lrv-u-color-grey-dark:hover';

	o_social_list_icons.push( c_icon );
}

// TODO: update this object with cloned patterns or helper methods, once those exist.
module.exports = {
	"footer_social_classes": "lrv-u-text-align-center lrv-u-color-white lrv-u-background-color-black",
	"c_title": {
		"c_title_classes": "lrv-u-margin-b-025 lrv-u-font-family-primary lrv-u-text-align-center",
		"c_title_text": "Connect with Us"
	},
	"c_tagline": {
		"c_tagline_classes": "lrv-u-font-size-14 u-font-style-italic lrv-u-font-family-basic lrv-u-text-align-center",
		"c_tagline_text": "Get our latest stories in the feed of your favorite networks"
	},
	"o_social_list": {
		"o_social_list_classes": "lrv-a-unstyle-list lrv-u-flex lrv-u-align-items-center lrv-u-justify-content-center",
		"o_social_list_icons": o_social_list_icons
	}
};
const path = require( 'path' );
const clone = require( '@penskemediacorp/larva' ).clone;// This should be in this repo, probably
const c_icon_path = path.resolve( __dirname, '../../components/c-icon/c-icon.prototype' );

const social = [ 'instagram', 'pinit', 'twitter', 'facebook', 'youtube' ];
const o_social_list_icons = [];

for (let i = 0; i < social.length; i++) {
	let c_icon = clone( c_icon_path );
	c_icon.c_icon_name = social[i];
	c_icon.c_icon_link_classes += ' pmc-u-display-block pmc-u-border-radius-50p pmc-u-color-grey pmc-u-margin-lr-025 pmc-u-padding-a-050 pmc-u-background-white pmc-u-color-grey:hover';

	o_social_list_icons.push( c_icon );
}

module.exports = {
	"c_title": {
		"c_title_classes": "pmc-u-margin-b-025 pmc-u-font-family-primary pmc-u-text-align-center",
		"c_title_text": "Connect with Us"
	},
	"c_tagline": {
		"c_tagline_classes": "pmc-u-font-size-14 u-font-style-italic pmc-u-font-family-basic pmc-u-text-align-center",
		"c_tagline_text": "Get our latest stories in the feed of your favorite networks"
	},
	"o_social_list": {
		"o_social_list_classes": "pmc-a-unstyle-list pmc-u-flex pmc-u-align-items-center pmc-u-justify-content-center",
		"o_social_list_icons": o_social_list_icons
	}
};
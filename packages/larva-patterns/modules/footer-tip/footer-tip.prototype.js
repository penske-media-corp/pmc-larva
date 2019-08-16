const path = require( 'path' );
const clone = require( '@penskemediacorp/larva' ).clone;// This should be in this repo, probably
const c_button = clone( path.resolve( __dirname, '../../components/c-button/c-button.stripped' ) );

c_button.c_button_classes += "pmc-u-color-white pmc-u-color-grey-light:hover pmc-u-background-black pmc-u-font-size-12 pmc-u-font-weight-bold pmc-u-text-transform-uppercase a-icon-after a-icon-arrow-right a-icon-invert";
c_button.c_button_text = "Send Us a Tip";
c_button.c_button_url = "https://google.com";
c_button.c_button_inner_classes = "pmc-u-color-white pmc-u-color-grey-light:hover";

module.exports = {
	"footer_tip_classes": "pmc-u-text-align-center pmc-u-color-white pmc-u-background-black",
	"c_title": {
		"c_title_classes": "pmc-u-margin-b-025 pmc-u-font-family-primary",
		"c_title_text": "Have a Tip?"
	},
	"c_tagline": {
		"c_tagline_classes": "pmc-u-font-size-14 u-font-style-italic pmc-u-font-family-basic",
		"c_tagline_text": "We want to hear from you! Send us a tip using our annonymous form."
	},
	"c_button": c_button
};

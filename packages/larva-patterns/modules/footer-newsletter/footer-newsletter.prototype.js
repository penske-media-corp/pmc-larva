const path = require( 'path' );
const clone = require( '@penskemediacorp/larva' ).clone;// This should be in this repo, probably
const o_email_capture_form = clone( path.resolve( __dirname, '../../objects/o-email-capture-form/o-email-capture-form.minimal' ) );

o_email_capture_form.c_button.c_button_classes += ' a-icon-invert';

module.exports = {
	"footer_newsletter_classes": "pmc-u-text-align-center pmc-u-color-white pmc-u-background-black pmc-u-flex pmc-u-flex-direction-column pmc-u-align-items-center",
	"c_title": {
		"c_title_classes": "pmc-u-margin-b-025 pmc-u-font-family-primary pmc-u-text-align-center",
		"c_title_text": "Stay In The Know"
	},
	"c_tagline": {
		"c_tagline_classes": "pmc-u-font-size-14 u-font-style-italic pmc-u-font-family-basic pmc-u-text-align-center",
		"c_tagline_text": "Sign up for our daily newsletter"
	},
	"o_email_capture_form": o_email_capture_form
};
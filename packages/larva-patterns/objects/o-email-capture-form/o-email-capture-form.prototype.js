const path = require( 'path' );
const clone = require( '@penskemediacorp/larva' ).clone;// This should be in this repo, probably
const c_button = clone( path.resolve( __dirname, '../../components/c-button/c-button.prototype' ) );

module.exports = {
	"o_email_capture_form_classes": "",
	"o_email_capture_form_action_url": "",
	"o_email_capture_form_button_text": "Sign up",
	"o_email_capture_form_name_attr": "email-capture-form",
	"o_email_capture_form_base_url": "",
	"c_button": c_button,
	"c_email_field": {
		"c_email_field_classes": "",
		"c_email_field_label_classes": "",
		"c_email_field_label_for_attr": "",
		"c_email_field_label_text": "Your Email",
		"c_email_field_input_id_attr": "",
		"c_email_field_input_name_attr": "",
		"c_email_field_input_placeholder_attr": "you@email.com"
	}
}
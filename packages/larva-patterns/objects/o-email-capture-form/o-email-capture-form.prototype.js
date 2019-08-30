const path = require( 'path' );
const clone = require( '@penskemediacorp/larva' ).clone;
const c_button = clone( path.resolve( __dirname, '../../components/c-button/c-button.prototype' ) );

module.exports = {
	"o_email_capture_form_classes": "",
	"o_email_capture_form_action_url": "",
	"o_email_capture_form_button_text": "Sign up",
	"o_email_capture_form_name_attr": "email-capture-form",
	"o_email_capture_form_base_url": "",
	"o_email_capture_form_input_global_opted_in_bool_name": "Global_Opt_In_Date",
	"o_email_capture_form_input_global_opted_in_bool_value": "Yes",
	"o_email_capture_form_input_opted_in_date_name": "Deadline_Breaking_News_Opt_In_Date",
	"o_email_capture_form_input_opted_in_date_value": "00-00-00",
	"o_email_capture_form_source_value_attr": "onsite-footer",
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
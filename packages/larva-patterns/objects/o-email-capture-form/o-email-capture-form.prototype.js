const path = require( 'path' );
const clonedeep = require( 'lodash.clonedeep' );

const c_button_prototype = require( '../../components/c-button/c-button.prototype' );
const c_button = clonedeep( c_button_prototype );

const c_email_field_prototype = require( '../../components/c-email-field/c-email-field.prototype' );
const c_email_field = clonedeep( c_email_field_prototype );

module.exports = {
	"o_email_capture_form_classes": "",
	"o_email_capture_form_inner_classes": "",
	"o_email_capture_form_action_url": "",
	"o_email_capture_form_button_text": "Sign up",
	"o_email_capture_form_name_attr": "email-capture-form",
	"o_email_capture_form_base_url": "",
	"o_email_capture_form_input_global_opted_in_bool_name": "Global_Opt_In_Date",
	"o_email_capture_form_input_global_opted_in_bool_value_attr": "Yes",
	"o_email_capture_form_input_opted_in_date_name": "CAMPAIGN_NAME_Opt_In_Date",
	"o_email_capture_form_input_opted_in_date_value_attr": "00-00-00",
	"o_email_capture_form_source_value_attr": "onsite-footer",
	"c_button": c_button,
	"c_email_field": c_email_field
}
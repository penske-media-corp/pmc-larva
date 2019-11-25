const path = require( 'path' );
const clonedeep = require( 'lodash.clonedeep' );

const c_button_prototype = require( '../../components/c-button/c-button.prototype' );
const c_button = clonedeep( c_button_prototype );

const c_email_field_prototype = require( '../../components/c-email-field/c-email-field.prototype' );
const c_email_field = clonedeep( c_email_field_prototype );

module.exports = {
	o_email_capture_form_classes: '',
	o_email_capture_form_inner_classes: '',
	o_email_capture_form_action_url: '',
	o_email_capture_form_button_text: 'Sign up',
	o_email_capture_form_name_attr: 'email-capture-form',
	o_email_capture_form_success_url: '',
	c_button: c_button,
	c_email_field: c_email_field,
	o_email_capture_form_hidden_field_items: []
};

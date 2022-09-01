const clonedeep = require( 'lodash.clonedeep' );

const o_email_capture_form = clonedeep(
	require( './o-email-capture-form.prototype' )
);
const c_button = clonedeep(
	require( '../../components/c-button/c-button.stripped' )
);
const c_email_field = clonedeep(
	require( '../../components/c-email-field/c-email-field.ghost' )
);

c_button.c_button_classes += ' lrv-a-icon-after lrv-a-icon-arrow-right';
c_button.c_button_inner_classes = 'lrv-a-screen-reader-only';
c_button.c_button_type_attr = 'submit';

o_email_capture_form.c_button = c_button;
o_email_capture_form.c_email_field = c_email_field;
o_email_capture_form.o_email_capture_form_inner_classes =
	'lrv-u-flex lrv-u-align-items-center lrv-u-justify-content-center lrv-u-border-b-1 lrv-u-border-color-currentColor';

module.exports = o_email_capture_form;

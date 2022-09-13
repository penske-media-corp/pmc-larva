const clonedeep = require( 'lodash.clonedeep' );

const c_email_field_prototype = require( './c-email-field.prototype' );
const c_email_field = clonedeep( c_email_field_prototype );

c_email_field.c_email_field_classes =
	'lrv-u-font-size-14 lrv-u-flex lrv-u-align-items-center';
c_email_field.c_email_field_label_classes =
	'lrv-u-padding-r-050 lrv-u-font-weight-bold lrv-u-whitespace-nowrap';
c_email_field.c_email_field_input_classes =
	'lrv-u-background-color-transparent lrv-u-border-a-0 lrv-u-color-currentColor lrv-u-padding-a-050 lrv-u-font-size-14';

module.exports = c_email_field;

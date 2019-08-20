const path = require( 'path' );
const clone = require( '@penskemediacorp/larva' ).clone;// This should be in this repo, probably
const o_email_capture_form = clone( path.resolve( __dirname, './o-email-capture-form.prototype' ) );
const c_button = clone( path.resolve( __dirname, '../../components/c-button/c-button.stripped' ) );
const c_email_field = clone( path.resolve( __dirname, '../../components/c-email-field/c-email-field.ghost' ) );

c_button.c_button_classes += " a-icon-after a-icon-arrow-right";
c_button.c_button_inner_classes = "a-screen-reader-only";
c_button.c_button_type_attr = "submit";

o_email_capture_form.c_button = c_button;
o_email_capture_form.c_email_field = c_email_field;
o_email_capture_form.o_email_capture_form_inner_classes = "lrv-u-flex lrv-u-align-items-center lrv-u-justify-content-center lrv-u-border-b-1 lrv-u-border-color-currentColor";

module.exports = o_email_capture_form;

const path = require( 'path' );
const clone = require( '@penskemediacorp/larva' ).clone;// This should be in this repo, probably
const c_email_field = clone( path.resolve( __dirname, './c-email-field.prototype' ) );

c_email_field.c_email_field_classes = "pmc-u-font-size-14";
c_email_field.c_email_field_label_classes = "pmc-u-padding-r-050 pmc-u-font-weight-bold";
c_email_field.c_email_field_input_classes = "pmc-u-background-transparent pmc-u-border-a-0 pmc-u-color-currentColor pmc-u-padding-a-050 pmc-u-font-size-14";

module.exports = c_email_field;
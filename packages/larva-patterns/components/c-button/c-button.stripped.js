const path = require( 'path' );
const clone = require( '@penskemediacorp/larva' ).clone;
const c_button = clone( path.resolve( __dirname, './c-button.prototype' ) );

c_button.c_button_classes += "  pmc-u-display-inline-flex";

module.exports = c_button;
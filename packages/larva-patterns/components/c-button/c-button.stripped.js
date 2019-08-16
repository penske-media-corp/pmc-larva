const path = require( 'path' );
const clone = require( '@penskemediacorp/larva' ).clone;// This should be in this repo, probably
const c_button = clone( path.resolve( __dirname, './c-button.prototype' ) );

c_button.c_button_classes = "pmc-a-unstyle-button pmc-u-cursor-pointer";

module.exports = c_button;
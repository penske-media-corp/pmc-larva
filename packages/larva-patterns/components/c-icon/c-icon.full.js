const path = require( 'path' );
const clone = require( '../../../larva/lib/utils/clonePatternData' );// This should be in this repo, probably
const c_icon = clone( path.resolve( __dirname, './c-icon.prototype' ) );

c_icon.c_icon_classes = 'pmc-u-height-100p pmc-u-width-100p';

module.exports = c_icon;
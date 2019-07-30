
const path = require( 'path' );
const clone = require( '../../../larva/lib/utils/clonePatternData' );// This should be in this repo, probably
const o_nav = clone( path.resolve( __dirname, '../../objects/o-nav/o-nav.prototype' ) );

module.exports = {
	"o_nav": o_nav
}

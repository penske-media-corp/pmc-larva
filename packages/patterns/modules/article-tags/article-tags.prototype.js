const path = require( 'path' );
const clone = require( '../../../larva/lib/utils/clonePatternData' );// This should be in this repo, probably
const o_nav = clone( path.resolve( __dirname, '../../objects/o-nav/o-nav.prototype' ) );

o_nav.o_nav_title_text = "Read More About:";

const tags = [ "Art Gallery", "Retrospective", "Mapplethorpe" ];

o_nav.o_nav_list_items.forEach( ( item, i ) => {
	item.c_link_text = tags[i];
});

module.exports = {
	"o_nav": o_nav
}

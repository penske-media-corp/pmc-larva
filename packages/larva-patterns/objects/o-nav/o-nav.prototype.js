const path = require( 'path' );
const clone = require( '../../../larva/lib/utils/clonePatternData' );// This should be in this repo, probably
const c_link = path.resolve( __dirname, '../../components/c-link/c-link.prototype' );

const o_nav_list_items = [
	clone( c_link ),
	clone( c_link ),
	clone( c_link )
];

module.exports = {
	"modifier_class": "",
	"o_nav_classes": "",
	"o_nav_title_text": "",
	"o_nav_title_classes": "",
	"o_nav_list_classes" : "pmc-a-unstyle-list",
	"o_nav_list_item_classes": "",
	"o_nav_list_items": o_nav_list_items
};

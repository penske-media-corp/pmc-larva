const path = require( 'path' );
const clone = require( '../../../larva/lib/utils/clonePatternData' );// This should be in this repo, probably
const c_link = clone( path.resolve( __dirname, '../../components/c-link/c-link.prototype' ) );

const o_nav_list_items = [
	clone( path.resolve( __dirname, '../../components/c-link/c-link.prototype' ) ), // Need a quick clone for this!
	clone( path.resolve( __dirname, '../../components/c-link/c-link.prototype' ) ),
	clone( path.resolve( __dirname, '../../components/c-link/c-link.prototype' ) )
];

module.exports = {
	"modifier_class": "",
	"o_nav_data_attributes": "",
	"o_nav_classes": "pmc-u-background-brand-red",
	"o_nav_title_text": "Optional title",
	"o_nav_title_classes": "",
	"o_nav_list_data_attributes": "",
	"o_nav_list_classes" : "",
	"o_nav_list_item_data_attributes": "",
	"o_nav_list_item_classes": "",
	"o_nav_list_items": o_nav_list_items
};

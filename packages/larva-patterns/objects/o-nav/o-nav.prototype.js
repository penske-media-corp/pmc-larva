const clonedeep = require( 'lodash.clonedeep' );
const c_link_prototype = require( '../../components/c-link/c-link.prototype' );

const o_nav_list_items = [
	clonedeep( c_link_prototype ),
	clonedeep( c_link_prototype ),
	clonedeep( c_link_prototype )
];

module.exports = {
	"modifier_class": "",
	"o_nav_classes": "",
	"o_nav_title_text": "",
	"o_nav_title_classes": "",
	"o_nav_list_classes" : "lrv-a-unstyle-list",
	"o_nav_list_item_classes": "",
	"o_nav_list_items": o_nav_list_items
};

const path = require( 'path' );
const clonedeep = require( 'lodash.clonedeep' );

const o_collection_item_prototype = require( '../../objects/o-collection-item/o-collection-item.prototype' );
const o_collection_item = clonedeep( o_collection_item_prototype );

o_collection_item.o_collection_item_classes = "a-floated-parent";
o_collection_item.o_figure.o_figure_classes = "a-floated-left@tablet lrv-u-padding-r-1@tablet";

module.exports = {
	listicle_item_classes: "lrv-a-wrapper",
	o_collection_item: o_collection_item
};

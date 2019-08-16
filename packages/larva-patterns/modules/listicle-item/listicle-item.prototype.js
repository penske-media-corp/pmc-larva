const path = require( 'path' );
const clone = require( '@penskemediacorp/larva' ).clone;// This should be in this repo, probably
const o_collection_item = clone( path.resolve( __dirname, '../../objects/o-collection-item/o-collection-item.prototype' ) );

o_collection_item.o_collection_item_classes = "a-floated-parent";
o_collection_item.o_figure.o_figure_classes = "a-floated-left@tablet pmc-u-padding-r-1@tablet";

module.exports = {
	listicle_item_classes: "pmc-a-wrapper",
	o_collection_item: o_collection_item
};

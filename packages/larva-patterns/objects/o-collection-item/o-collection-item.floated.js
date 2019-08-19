const path = require( 'path' );
const clone = require( '@penskemediacorp/larva' ).clone;// This should be in this repo, probably
const o_collection_item = clone( path.resolve( __dirname, '../o-collection-item.prototype' ) );

o_collection_item.o_collection_item_classes += " a-floated-parent";
o_collection_item.o_figure.o_figure_classes += " a-floated-left";

module.exports = o_collection_item;

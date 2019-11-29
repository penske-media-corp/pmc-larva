const path = require( 'path' );
const clonedeep = require( 'lodash.clonedeep' );

const o_collection_item_prototype = require( './o-collection-item.prototype' );
const o_collection_item = clonedeep( o_collection_item_prototype );

o_collection_item.o_collection_item_classes += " lrv-a-floated-parent";
o_collection_item.o_figure.o_figure_classes += " lrv-a-floated-left";

module.exports = o_collection_item;

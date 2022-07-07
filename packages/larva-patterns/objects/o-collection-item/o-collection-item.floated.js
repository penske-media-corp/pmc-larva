const clonedeep = require( 'lodash.clonedeep' );

const o_collection_item = clonedeep(
	require( './o-collection-item.prototype' )
);

o_collection_item.o_collection_item_classes += ' lrv-a-floated-parent';
o_collection_item.o_figure.o_figure_classes += ' lrv-a-floated-left';

module.exports = o_collection_item;

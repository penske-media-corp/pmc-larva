const clonedeep = require( 'lodash.clonedeep' );

const o_collection_item = clonedeep(
	require( '../../objects/o-collection-item/o-collection-item.prototype' )
);

o_collection_item.o_collection_item_classes = 'a-floated-parent';
o_collection_item.o_figure.o_figure_classes =
	'a-floated-left@tablet lrv-u-padding-r-1@tablet';

module.exports = {
	listicle_item_classes: 'lrv-a-wrapper',
	o_collection_item,
};

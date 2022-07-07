const clonedeep = require( 'lodash.clonedeep' );

const o_tease = clonedeep( require( '../o-tease/o-tease.prototype' ) );

module.exports = {
	o_tease_list_classes: 'lrv-a-unstyle-list',
	o_tease_list_labelledby_attr: '',
	o_tease_list_item_classes: '',
	o_tease_list_items: [ o_tease, o_tease, o_tease ],
};

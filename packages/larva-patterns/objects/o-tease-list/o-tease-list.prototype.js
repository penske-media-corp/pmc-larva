const clonedeep = require( 'lodash.clonedeep' );

const o_tease_prototype = require( '../o-tease/o-tease.prototype' );
const o_tease = clonedeep( o_tease_prototype );

module.exports = {
	o_tease_list_classes: 'lrv-a-unstyle-list',
	o_tease_list_item_classes: '',
	o_tease_list_items: [
		o_tease,
		o_tease,
		o_tease
	]
}

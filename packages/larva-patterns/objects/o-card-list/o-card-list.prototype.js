const clonedeep = require( 'lodash.clonedeep' );

const o_card = clonedeep( require( '../o-card/o-card.prototype' ) );

module.exports = {
	o_card_list_classes: 'lrv-a-unstyle-list',
	o_card_list_item_classes: '',
	o_card_list_items: [ o_card, o_card, o_card ],
};

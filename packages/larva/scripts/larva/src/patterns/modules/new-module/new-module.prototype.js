const clonedeep = require( 'lodash.clonedeep' );
const c_heading = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-heading/c-heading.prototype' ) );
const o_card = clonedeep( require( '@penskemediacorp/larva-patterns/objects/o-card/o-card.prototype' ) );

o_card.c_title.c_title_text = 'Special demo text for this module';
o_card.c_title.c_title_link_classes = 'lrv-a-unstyle-link';

o_card.c_span.c_span_text = 'Category text';

module.exports = {
	new_module_classes: 'lrv-u-background-color-brand-primary lrv-u-color-white lrv-u-padding-tb-2',
	c_heading: c_heading,
	new_module_cards: [
		o_card,
		o_card,
		o_card
	]
}
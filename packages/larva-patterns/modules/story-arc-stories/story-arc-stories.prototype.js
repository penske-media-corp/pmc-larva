// Note: this module is included in latest-stories-news-river and not written to JSON on its own,
// so if you make updates to this or its aia counterpart, you must run: 
// 1. `npm run write-json project one-offs latest-stories-news-river` 
// 2. `npm run write-json project one-offs latest-stories-news-river aia`

const clonedeep = require( 'lodash.clonedeep' );

const c_span_prototype = require( '@penskemediacorp/larva-patterns/components/c-span/c-span.prototype' );
const c_button_prototype = require( '@penskemediacorp/larva-patterns/components/c-button/c-button.prototype' );
const o_story_arc_item_prototype = require( '../../objects/o-story-arc-item/o-story-arc-item.prototype' );

const c_span = clonedeep( c_span_prototype );
const c_button = clonedeep( c_button_prototype );
const o_story_arc_item = clonedeep( o_story_arc_item_prototype );

c_span.c_span_text = 'Event Coverage:';
c_span.c_span_classes += ' lrv-u-font-weight-bold';

c_button.c_button_text = 'Art Basel Hong Kong';
c_button.c_button_url = '#';

module.exports = {
	c_span: c_span,
	c_button: c_button,
	story_arc_stories: [
		o_story_arc_item,
		o_story_arc_item,
		o_story_arc_item,
	]
};

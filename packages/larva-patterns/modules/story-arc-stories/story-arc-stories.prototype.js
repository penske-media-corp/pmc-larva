const clonedeep = require( 'lodash.clonedeep' );

const c_span = clonedeep(
	require( '../../components/c-span/c-span.prototype' )
);
const c_button = clonedeep(
	require( '../../components/c-button/c-button.prototype' )
);
const o_story_arc_item = clonedeep(
	require( '../../objects/o-story-arc-item/o-story-arc-item.prototype' )
);

c_span.c_span_text = 'Event Coverage:';
c_span.c_span_classes += ' lrv-u-font-weight-bold';

c_button.c_button_text = 'Art Basel Hong Kong';
c_button.c_button_url = '#';

module.exports = {
	c_span,
	c_button,
	story_arc_stories: [ o_story_arc_item, o_story_arc_item, o_story_arc_item ],
};

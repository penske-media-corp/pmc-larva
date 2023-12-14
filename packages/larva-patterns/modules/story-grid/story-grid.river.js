const { __experimentalCloneWithFallback } = require( '@penskemediacorp/larva' );
const clonedeep = require( 'lodash.clonedeep' );

const story_grid = __experimentalCloneWithFallback(
	'modules/story-grid/story-grid.prototype'
);
const story_prototype = __experimentalCloneWithFallback(
	'modules/story/story.prototype'
);
const c_span = __experimentalCloneWithFallback(
	'components/c-span/c-span.prototype'
);

story_grid.story_grid_story_cards = story_grid.story_grid_story_cards.map( () =>
	clonedeep( story_prototype )
);

story_grid.story_grid_grid_classes = '';

c_span.c_span_text = 'Read more';
story_grid.c_span = c_span;

module.exports = story_grid;

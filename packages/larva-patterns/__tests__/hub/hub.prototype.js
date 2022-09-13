const clonedeep = require( 'lodash.clonedeep' );
const { __experimentalCloneWithFallback } = require( '@penskemediacorp/larva' );

const carousel_grid = __experimentalCloneWithFallback(
	'modules/carousel-grid/carousel-grid.prototype'
);
const carousel_slider = __experimentalCloneWithFallback(
	'modules/carousel-slider/carousel-slider.prototype'
);
const story_grid = __experimentalCloneWithFallback(
	'modules/story-grid/story-grid.prototype'
);
const story_grid_river = __experimentalCloneWithFallback(
	'modules/story-grid/story-grid.river'
);
const heading_h1 = __experimentalCloneWithFallback(
	'modules/heading/heading.h1'
);
const heading_h3 = __experimentalCloneWithFallback(
	'modules/heading/heading.h3'
);
const story = __experimentalCloneWithFallback(
	'modules/story/story.prototype'
);
const button = __experimentalCloneWithFallback(
	'modules/button/button.prototype'
);
const paragraph = __experimentalCloneWithFallback(
	'modules/paragraph/paragraph.prototype'
);
const separator = __experimentalCloneWithFallback(
	'modules/separator/separator.prototype'
);
const injected_related_content = __experimentalCloneWithFallback(
	'modules/injected-related-content/injected-related-content.prototype'
);
const secondary_stories = __experimentalCloneWithFallback(
	'modules/secondary-stories/secondary-stories.prototype'
);

module.exports = {
	carousel_grid,
	carousel_slider,
	story_grid,
	heading_h1,
	heading_h3,
	paragraph,
	story,
	button,
	separator,
	injected_related_content,
	story_grid_river,
	secondary_stories,
};

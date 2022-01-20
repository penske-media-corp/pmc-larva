const clonedeep = require( 'lodash.clonedeep' );
const { __experimentalCloneWithFallback } = require( '@penskemediacorp/larva' );

const carousel_grid = __experimentalCloneWithFallback( 'modules/carousel-grid/carousel-grid.prototype' );
const carousel_slider = __experimentalCloneWithFallback( 'modules/carousel-slider/carousel-slider.prototype' );
const story_grid = __experimentalCloneWithFallback( 'modules/story-grid/story-grid.prototype' );
const heading_h1 = __experimentalCloneWithFallback( 'modules/heading/heading.h1' );
const heading_h3 = __experimentalCloneWithFallback( 'modules/heading/heading.h3' );
const story = __experimentalCloneWithFallback( 'modules/story/story.prototype' );
const button = __experimentalCloneWithFallback( 'modules/button/button.prototype' );
const paragraph = __experimentalCloneWithFallback( 'modules/paragraph/paragraph.prototype' );
const separator = __experimentalCloneWithFallback( 'modules/separator/separator.prototype' );

module.exports = {
	carousel_grid,
	carousel_slider,
	story_grid,
	heading_h1,
	heading_h3,
	paragraph,
	story,
	button,
	separator
};
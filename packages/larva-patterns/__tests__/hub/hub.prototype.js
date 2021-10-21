const clonedeep = require( 'lodash.clonedeep' );

const carousel_grid = clonedeep( require( '../../modules/carousel-grid/carousel-grid.prototype' ) );
const carousel_slider = clonedeep( require( '../../modules/carousel-slider/carousel-slider.prototype' ) );
const story_grid = clonedeep( require( '../../modules/story-grid/story-grid.prototype' ) );
const heading_h1 = clonedeep( require( '../../modules/heading/heading.h1' ) );
const heading_h3 = clonedeep( require( '../../modules/heading/heading.h3' ) );
const story = clonedeep( require( '../../modules/story/story.prototype' ) );
const button = clonedeep( require( '../../modules/button/button.prototype' ) );
const paragraph = clonedeep( require( '../../modules/paragraph/paragraph.prototype' ) );
const separator = clonedeep( require( '../../modules/separator/separator.prototype' ) );

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
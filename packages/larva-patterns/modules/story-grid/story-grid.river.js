const { __experimentalCloneWithFallback } = require( '@penskemediacorp/larva' );
const clonedeep = require( 'lodash.clonedeep' );

const story_grid = __experimentalCloneWithFallback( 'modules/story-grid/story-grid.prototype' );
const story_prototype = __experimentalCloneWithFallback( 'objects/o-card/o-card.story' );

story_grid.story_grid_story_cards = story_grid.story_grid_story_cards.map( () => clonedeep( story_prototype ) );

story_grid.story_grid_grid_classes = '';

module.exports = story_grid;

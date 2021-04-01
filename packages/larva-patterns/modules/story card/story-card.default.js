const clonedeep = require( 'lodash.clonedeep' );

const story_card_default = clonedeep( require( './story-card.prototype' ) );

story_card_default.story_card_grid_classes = '';

module.exports = story_card_default;
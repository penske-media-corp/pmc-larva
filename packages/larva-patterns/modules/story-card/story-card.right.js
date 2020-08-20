const clonedeep = require( 'lodash.clonedeep' );

const story_card = clonedeep( require( './story-card.prototype' ) );

story_card.story_card_classes = 'a-story-card-grid--right';

module.exports = story_card;
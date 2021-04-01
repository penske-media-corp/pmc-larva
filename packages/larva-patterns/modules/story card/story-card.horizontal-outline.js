const clonedeep = require( 'lodash.clonedeep' );

const story_card_rectangle_outline = clonedeep( require( './story-card.prototype' ) );

story_card_rectangle_outline.story_card_classes = 'lrv-u-border-a-1 lrv-u-border-color-brand-secondary';

module.exports = story_card_rectangle_outline;
const clonedeep = require( 'lodash.clonedeep' );

const story_card_default_outline = clonedeep( require( './story-card-unstable.prototype' ) );

story_card_default_outline.story_card_grid_classes = '';
story_card_default_outline.story_card_classes = 'lrv-u-border-a-1 lrv-u-border-color-brand-secondary';

module.exports = story_card_default_outline;
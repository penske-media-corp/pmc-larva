const clonedeep = require( 'lodash.clonedeep' );

const story_default_outline = clonedeep( require( './story.prototype' ) );

story_default_outline.story_grid_classes = '';
story_default_outline.story_classes = 'lrv-u-border-a-1 lrv-u-border-color-brand-secondary';

module.exports = story_default_outline;
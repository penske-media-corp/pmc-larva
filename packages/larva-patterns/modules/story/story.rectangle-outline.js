const clonedeep = require( 'lodash.clonedeep' );

const story_rectangle_outline = clonedeep( require( './story.prototype' ) );

story_rectangle_outline.story_classes = 'lrv-u-border-a-1 lrv-u-border-color-brand-secondary';

module.exports = story_rectangle_outline;
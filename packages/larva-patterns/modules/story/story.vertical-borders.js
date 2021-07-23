const clonedeep = require( 'lodash.clonedeep' );

const story_vertical_borders = clonedeep( require( './story.vertical' ) );

story_vertical_borders.story_grid_classes += ' lrv-u-border-a-1';

module.exports = story_vertical_borders;

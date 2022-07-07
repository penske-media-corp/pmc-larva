const clonedeep = require( 'lodash.clonedeep' );

const story_center_vertical_borders = clonedeep(
	require( './story.center-vertical' )
);

story_center_vertical_borders.story_grid_classes += ' lrv-u-border-a-1';

module.exports = story_center_vertical_borders;

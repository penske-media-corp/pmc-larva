const clonedeep = require( 'lodash.clonedeep' );

const story_right_borders = clonedeep( require( './story.right' ) );

story_right_borders.story_grid_classes += ' lrv-u-border-a-1';

story_right_borders.story_grid_secondary_classes +=
	' lrv-u-padding-l-2@desktop-xl lrv-u-padding-l-00 lrv-u-padding-l-1@desktop';

module.exports = story_right_borders;

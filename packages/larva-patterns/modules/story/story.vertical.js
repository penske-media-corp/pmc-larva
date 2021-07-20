const clonedeep = require( 'lodash.clonedeep' );

const story_vertical = clonedeep( require( './story.prototype' ) );

story_vertical.story_grid_classes = story_vertical.story_grid_classes.replace(
	/lrv-a-(grid|cols3)/g,
	''
);

story_vertical.story_grid_primary_classes = story_vertical.story_grid_primary_classes.replace(
	/lrv-u-margin-r-2@desktop-xl|lrv-u-margin-r-1@desktop/g,
	''
);

story_vertical.story_grid_secondary_classes += ' lrv-u-padding-lr-1 lrv-u-padding-lr-2@desktop-xl lrv-u-padding-tb-075 lrv-u-padding-tb-150@desktop-xl';

module.exports = story_vertical;

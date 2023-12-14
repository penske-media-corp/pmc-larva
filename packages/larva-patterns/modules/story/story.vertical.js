const { __experimentalCloneWithFallback } = require( '@penskemediacorp/larva' );

const story_vertical = __experimentalCloneWithFallback(
	'modules/story/story.prototype'
);

story_vertical.story_grid_classes = '';

story_vertical.story_grid_primary_classes = 'lrv-u-margin-r-00';

story_vertical.story_grid_secondary_classes +=
	' lrv-u-padding-lr-1 lrv-u-padding-lr-2@desktop-xl lrv-u-padding-tb-075 lrv-u-padding-tb-150@desktop-xl';

module.exports = story_vertical;

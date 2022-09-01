const { __experimentalCloneWithFallback } = require( '@penskemediacorp/larva' );

const story_borders = __experimentalCloneWithFallback(
	'modules/story/story.prototype'
);

story_borders.story_grid_classes += ' lrv-u-border-a-1';
story_borders.story_grid_secondary_classes +=
	' lrv-u-padding-r-2@desktop-xl lrv-u-padding-r-00 lrv-u-padding-r-1@desktop';

module.exports = story_borders;

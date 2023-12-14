const { __experimentalCloneWithFallback } = require( '@penskemediacorp/larva' );

const story_right = __experimentalCloneWithFallback(
	'modules/story/story.prototype'
);

story_right.story_grid_primary_classes =
	'lrv-u-margin-l-2@desktop-xl lrv-u-margin-l-00 lrv-u-margin-l-1@desktop';

story_right.story_grid_primary_classes += ' lrv-u-order-100';
story_right.story_grid_secondary_classes +=
	' lrv-u-order-n1 lrv-u-text-align-right';

story_right.story_nav_classes += ' lrv-u-justify-content-end';
story_right.story_links_classes += ' lrv-u-justify-content-end';
story_right.c_link_bottom_wrapper_classes += ' lrv-u-justify-content-end';

module.exports = story_right;

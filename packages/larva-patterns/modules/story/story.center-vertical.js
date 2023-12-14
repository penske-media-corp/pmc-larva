const clonedeep = require( 'lodash.clonedeep' );

const story_center_vertical = clonedeep( require( './story.vertical' ) );

story_center_vertical.story_nav_classes += ' lrv-u-justify-content-center';
story_center_vertical.story_links_classes += ' lrv-u-justify-content-center';
story_center_vertical.c_link_bottom_wrapper_classes +=
	' lrv-u-justify-content-center';

story_center_vertical.story_grid_secondary_classes +=
	' lrv-u-text-align-center';

module.exports = story_center_vertical;

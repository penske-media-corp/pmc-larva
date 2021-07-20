const clonedeep = require( 'lodash.clonedeep' );

const story_right = clonedeep( require( './story.prototype' ) );

const horizontal_alignment = ' lrv-u-justify-content-end';

story_right.story_grid_primary_classes = story_right.story_grid_primary_classes.replace(
	'margin-r',
	'margin-l'
);

story_right.story_grid_primary_classes += ' lrv-u-order-100';
story_right.story_grid_secondary_classes += ' lrv-u-order-n1 lrv-u-text-align-right';

story_right.story_nav_classes += horizontal_alignment;
story_right.story_links_classes += horizontal_alignment;
story_right.c_link_bottom_wrapper_classes += horizontal_alignment;

module.exports = story_right;

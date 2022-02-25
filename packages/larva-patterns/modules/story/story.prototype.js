const { __experimentalCloneWithFallback } = require( '@penskemediacorp/larva' );

const o_card = __experimentalCloneWithFallback( 'objects/o-card/o-card.story' );

module.exports = {
	story_classes: '',
	story_nav_classes: 'lrv-u-font-size-12 lrv-u-font-family-primary lrv-u-text-transform-uppercase lrv-u-font-weight-bold lrv-u-color-black',
	story_nav_layout_classes: 'lrv-u-flex lrv-u-align-items-center lrv-a-space-children-horizontal lrv-a-space-children--2 lrv-a-hidden@mobile-max lrv-u-margin-t-050',
	story_grid_classes: 'lrv-a-grid lrv-a-cols3',
	story_grid_secondary_classes: 'lrv-a-glue-parent u-padding-t-1@mobile-max lrv-u-flex lrv-u-flex-direction-column lrv-u-height-100p lrv-u-justify-content-start lrv-u-margin-r-2@desktop-xl lrv-u-margin-r-00 lrv-u-margin-r-1@desktop lrv-a-span2',
	story_links_classes: '',
	o_card
};

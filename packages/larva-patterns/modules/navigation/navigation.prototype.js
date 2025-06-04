const clonedeep = require( 'lodash.clonedeep' );

const navigation_item = clonedeep(
	require( '../navigation-item/navigation-item.prototype' )
);
const c_heading = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-heading/c-heading.prototype' )
);

navigation_item.toggle_button_classes = 'lrv-u-display-none';
navigation_item.navigation_parent_list_classes =
	'lrv-u-flex lrv-u-justify-content-center lrv-u-width-100p@mobile-max lrv-u-margin-lr-050 lrv-a-glue-parent lrv-u-margin-tb-025';
navigation_item.parent_list_item_heading_classes =
	'lrv-u-flex lrv-u-justify-content-center lrv-u-padding-tb-050';
navigation_item.parent_list_item_classes =
	'lrv-u-width-100p@mobile-max lrv-u-justify-content-center u-border-color-wild-strawberry';
c_heading.c_heading_classes =
	'lrv-a-glue-parent has-text-color u-font-weight-bold a-font-accent u-font-size-14 u-line-height-22 u-font-weight-bold u-color-wild-strawberry lrv-u-width-100p lrv-u-border-a-1 u-border-color-wild-strawberry u-letter-spacing-01875 lrv-js-MobileHeightToggle-trigger u-display-none@tablet lrv-u-padding-tb-050 lrv-u-justify-content-center lrv-u-text-transform-uppercase  lrv-a-icon-after a-icon-after-caret-down a-icon-height-8 a-icon-width-13';
c_heading.c_heading_text = 'All';

module.exports = {
	c_heading,
	navigation_classes: '',
	navigation_items: [
		navigation_item,
		navigation_item,
		navigation_item,
		navigation_item,
	],
	main_toggle_button_classes: 'lrv-a-hidden@tablet',
	nav_content_classes:
		'lrv-js-MobileHeightToggle-target a-children-border-color-current lrv-a-space-children-horizontal@tablet a-space-children--350 u-border-lr-1@mobile-max u-border-color-wild-strawberry lrv-u-border-b-1@mobile-max lrv-a-children-border-vertical@mobile-max lrv-u-flex-direction-column@mobile-max lrv-u-align-items-center lrv-a-unstyle-list lrv-u-flex lrv-u-justify-content-center lrv-u-flex-wrap-wrap u-justify-content-start@mobile-max u-border-lr-1@mobile-max',
};

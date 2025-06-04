const clonedeep = require( 'lodash.clonedeep' );

const c_link = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-link/c-link.prototype' )
);
const c_link__parent = clonedeep( c_link );
const c_link__child = clonedeep( c_link );

c_link__parent.c_link_text = 'Parent item';
c_link__parent.c_link_classes =
	'lrv-u-color-brand-primary:hover a-font-accent u-font-size-14 u-line-height-22 lrv-u-color-currentColor lrv-u-text-transform-uppercase u-letter-spacing-0187@mobile-max u-letter-spacing-0200@tablet lrv-a-hover-effect lrv-a-unstyle-link lrv-u-whitespace-nowrap lrv-u-display-inline-block u-font-weight-bold';

c_link__child.c_link_text = 'Child item';
c_link__child.c_link_classes =
	'lrv-u-color-brand-primary:hover lrv-a-hover-effect lrv-a-unstyle-link lrv-u-whitespace-nowrap lrv-u-display-inline-block lrv-u-color-currentColor';

module.exports = {
	c_link: c_link__parent,
	navigation_item_heading_id_attr: '',
	navigation_aria_labelledby_attr: '',
	navigation_item_toggle_screen_reader_text: 'Expand the sub menu',
	toggle_button_classes:
		'lrv-a-unstyle-button lrv-u-margin-l-auto lrv-u-padding-a-025 lrv-u-display-none',
	navigation_item_children: [
		c_link__child,
		c_link__child,
		c_link__child,
		c_link__child,
	],
	navigation_child_list_classes:
		'lrv-u-display-none lrv-a-unstyle-list a-font-accent lrv-a-glue lrv-a-glue--l-0 lrv-u-width-200 lrv-u-background-color-white u-max-width-330 u-max-width-300@mobile-max lrv-u-overflow-auto  u-box-shadow-03945 lrv-u-border-a-1 lrv-u-padding-lr-050 lrv-u-padding-tb-025 lrv-u-border-color-brand-accent u-box-shadow-03945',
	navigation_parent_list_classes:
		'lrv-u-flex lrv-u-margin-lr-050 lrv-a-glue-parent lrv-u-margin-tb-025',
	parent_list_item_classes: '',
	parent_list_item_heading_classes:
		'lrv-u-flex lrv-u-align-items-center lrv-u-color-currentColor',
};

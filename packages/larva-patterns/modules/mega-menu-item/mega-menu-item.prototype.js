const clonedeep = require( 'lodash.clonedeep' );

const c_link = clonedeep(
	require( '../../components/c-link/c-link.prototype' )
);
const c_link__parent = clonedeep( c_link );
const c_link__child = clonedeep( c_link );

c_link__parent.c_link_text = 'Parent item';
c_link__parent.c_link_classes =
	'lrv-a-unstyle-link lrv-u-color-brand-primary-dark:hover lrv-u-font-weight-bold lrv-a-font-body-xs lrv-u-text-transform-uppercase';

c_link__child.c_link_text = 'Child item';
c_link__child.c_link_classes =
	'lrv-a-unstyle-link lrv-u-color-brand-primary-dark:hover lrv-u-padding-tb-025 lrv-u-display-block lrv-a-font-body-xs';

module.exports = {
	c_link: c_link__parent,
	mega_menu_item_children: [ c_link__child, c_link__child, c_link__child ],
	mega_menu_item_classes: 'lrv-a-unstyle-list',
	mega_menu_item_link_classes:
		'lrv-u-flex lrv-u-color-black   lrv-u-display-inline-block lrv-u-width-100p',
	mega_menu_child_list_classes:
		'lrv-a-unstyle-list lrv-u-padding-t-1 lrv-u-margin-b-125',
};

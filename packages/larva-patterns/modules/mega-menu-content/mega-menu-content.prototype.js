const clonedeep = require( 'lodash.clonedeep' );
const mega_menu_item = clonedeep(
	require( '../mega-menu-item/mega-menu-item.prototype' )
);

module.exports = {
	mega_menu_content_items: [ mega_menu_item, mega_menu_item ],
	mega_menu_content_classes:
		'lrv-u-flex lrv-u-flex-wrap-wrap lrv-a-unstyle-list lrv-u-background-color-white lrv-a-space-children--050 lrv-a-space-children-horizontal ',
};

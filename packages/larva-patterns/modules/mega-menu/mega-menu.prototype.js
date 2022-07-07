const clonedeep = require( 'lodash.clonedeep' );

const mega_menu_footer_prototype = require( '../mega-menu-footer/mega-menu-footer.prototype.js' );
const mega_menu_footer = clonedeep( mega_menu_footer_prototype );

const mega_menu_content_prototype = require( '../mega-menu-content/mega-menu-content.prototype.js' );
const mega_menu_content = clonedeep( mega_menu_content_prototype );

module.exports = {
	mega_menu_footer,
	mega_menu_content,
	mega_menu_classes: '',
	mega_menu_outer_classes: 'lrv-a-wrapper',
	mega_menu_inner_classes:
		'lrv-u-background-color-white lrv-u-flex lrv-u-flex-direction-column lrv-u-border-b-2 lrv-u-border-r-2 lrv-u-border-l-2',
	mega_menu_content_outer_classes:
		'lrv-u-background-color-white lrv-u-padding-a-150 lrv-u-width-100p',
};

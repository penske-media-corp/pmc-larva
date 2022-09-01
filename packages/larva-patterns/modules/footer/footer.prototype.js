const clonedeep = require( 'lodash.clonedeep' );

const footer_menus = clonedeep(
	require( '../footer-menus/footer-menus.prototype' )
);
const footer_social = clonedeep(
	require( '../footer-social/footer-social.prototype' )
);
const footer_tip = clonedeep( require( '../footer-tip/footer-tip.prototype' ) );
const footer_newsletter = clonedeep(
	require( '../footer-newsletter/footer-newsletter.prototype' )
);

module.exports = {
	footer_classes:
		'lrv-u-background-color-black lrv-u-color-white lrv-u-padding-tb-1',
	footer_menus,
	footer_social,
	footer_tip,
	footer_newsletter,
};

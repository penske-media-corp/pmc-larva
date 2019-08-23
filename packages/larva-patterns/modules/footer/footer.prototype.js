const path = require( 'path' );
const clone = require( '@penskemediacorp/larva' ).clone;// This should be in this repo, probably
const footer_menus = clone( path.resolve( __dirname, '../footer-menus/footer-menus.prototype' ) );
const footer_social = clone( path.resolve( __dirname, '../footer-social/footer-social.prototype' ) );
const footer_tip = clone( path.resolve( __dirname, '../footer-tip/footer-tip.prototype' ) );
const footer_newsletter = clone( path.resolve( __dirname, '../footer-newsletter/footer-newsletter.prototype' ) );

module.exports = {
	footer_classes: "lrv-u-text-align-center lrv-u-background-color-black lrv-u-color-white lrv-u-padding-tb-1",
	footer_menus: footer_menus,
	footer_social: footer_social,
	footer_tip: footer_tip,
	footer_newsletter: footer_newsletter,
};
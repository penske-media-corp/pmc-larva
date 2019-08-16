const path = require( 'path' );
const clone = require( '@penskemediacorp/larva' ).clone;// This should be in this repo, probably
const footer_menus = clone( path.resolve( __dirname, '../footer-menus/footer-menus.prototype' ) );
const footer_social = clone( path.resolve( __dirname, '../footer-social/footer-social.prototype' ) );
const footer_tip = clone( path.resolve( __dirname, '../footer-tip/footer-tip.prototype' ) );
const footer_newsletter = clone( path.resolve( __dirname, '../footer-newsletter/footer-newsletter.prototype' ) );

module.exports = {
	footer_classes: "pmc-u-text-align-center pmc-u-background-black pmc-u-color-white pmc-u-padding-tb-1",
	footer_menus: footer_menus,
	footer_social: footer_social,
	footer_tip: footer_tip,
	footer_newsletter: footer_newsletter,
};
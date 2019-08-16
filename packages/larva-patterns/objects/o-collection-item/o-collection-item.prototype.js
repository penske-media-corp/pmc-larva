const path = require( 'path' );
const clone = require( '@penskemediacorp/larva' ).clone;// This should be in this repo, probably
const c_title = clone( path.resolve( __dirname, '../../components/c-title/c-title.prototype' ) );
const o_figure = clone( path.resolve( __dirname, '../o-figure/o-figure.prototype' ) );
const c_dek = clone( path.resolve( __dirname, '../../components/c-dek/c-dek.prototype' ) );

module.exports = {
	c_title: c_title,
	c_dek: c_dek,
	o_figure: o_figure,
};
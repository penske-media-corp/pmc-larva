const path = require( 'path' );
const clonedeep = require( '@penskemediacorp/larva' ).clonedeep;

const c_title_prototype = require( '../../components/c-title/c-title.prototype' );
const c_title = clonedeep( c_title_prototype );

const o_figure_prototype = require( '../o-figure/o-figure.prototype' );
const o_figure = clonedeep( o_figure_prototype );

const c_dek = require( '../../components/c-dek/c-dek.prototype' );
const c_dek = clonedeep( c_dek_prototype );

module.exports = {
	c_title: c_title,
	c_dek: c_dek,
	o_figure: o_figure,
};
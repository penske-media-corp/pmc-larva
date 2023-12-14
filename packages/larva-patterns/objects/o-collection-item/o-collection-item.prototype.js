const clonedeep = require( 'lodash.clonedeep' );

const c_title = clonedeep(
	require( '../../components/c-title/c-title.prototype' )
);
const o_figure = clonedeep( require( '../o-figure/o-figure.prototype' ) );
const c_dek = clonedeep( require( '../../components/c-dek/c-dek.prototype' ) );

module.exports = {
	c_title,
	c_dek,
	o_figure,
};

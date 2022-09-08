const clonedeep = require( 'lodash.clonedeep' );

const c_span = clonedeep(
	require( '../../components/c-span/c-span.prototype.js' )
);

module.exports = {
	o_indicator_classes:
		'lrv-a-glue lrv-a-glue--b-0 lrv-a-glue--r-0 u-pointer-events-none',
	c_span,
};

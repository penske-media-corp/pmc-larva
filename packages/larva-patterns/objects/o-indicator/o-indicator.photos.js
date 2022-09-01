const clonedeep = require( 'lodash.clonedeep' );

const o_indicator = clonedeep( require( './o-indicator.prototype' ) );
const c_icon = clonedeep(
	require( '../../components/c-icon/c-icon.prototype' )
);

o_indicator.c_icon = clonedeep( c_icon );
o_indicator.c_icon.c_icon_name = 'gallery';
o_indicator.c_span.c_span_text = 'Photos';
o_indicator.c_span.c_span_classes +=
	' lrv-u-margin-l-050 lrv-u-text-transform-uppercase lrv-a-font-secondary-s';
o_indicator.o_indicator_classes +=
	' lrv-u-flex lrv-u-background-color-black lrv-u-color-white lrv-u-padding-a-050 lrv-u-border-radius-5 lrv-u-margin-a-050';

module.exports = o_indicator;

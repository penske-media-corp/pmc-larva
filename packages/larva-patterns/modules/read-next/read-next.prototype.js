const clonedeep = require( 'lodash.clonedeep' );

const c_span_prototype = require( '../../components/c-span/c-span.prototype' );
const c_span = clonedeep( c_span_prototype );

c_span.c_span_text = 'Read Next: ';
c_span.c_span_classes +=
	' lrv-u-text-transform-uppercase  lrv-u-font-weight-bold';

const c_title_prototype = require( '../../components/c-title/c-title.prototype' );
const c_title = clonedeep( c_title_prototype );

c_title.c_title_classes =
	'lrv-u-padding-l-1 lrv-u-max-width-500 lrv-a-truncate-ellipsis lrv-u-font-weight-normal';
c_title.c_title_text =
	"Here is some really long title text, it should be truncated with lrv-a-truncate-ellispis, we hope!!!!!! Wow it's so long.";
c_title.c_title_link_classes = 'lrv-a-unstyle-link';

module.exports = {
	read_next_classes:
		' lrv-a-hidden@desktop-max lrv-u-flex lrv-u-align-items-center lrv-u-flex-1 lrv-u-font-family-body lrv-u-font-size-16',
	c_span,
	c_title,
};

const clonedeep = require( 'lodash.clonedeep' );

const c_span = clonedeep( require( '../../components/c-span/c-span.prototype' ) );
const c_icon = clonedeep( require( '../../components/c-icon/c-icon.prototype' ) );

c_icon.c_icon_name = 'hamburger';
c_icon.c_icon_url = false;

c_span.c_span_text = 'Menu';
c_span.c_span_classes = 'lrv-u-margin-l-050';
c_span.c_span_url = false;

module.exports = {
	o_icon_button_classes: 'lrv-a-unstyle-button lrv-a-unstyle-link lrv-u-cursor-pointer lrv-u-flex',
	o_icon_button_screen_reader_text: '',
	c_icon: c_icon,
	c_span: c_span,
};

const clonedeep = require( 'lodash.clonedeep' );

const c_icon = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-icon/c-icon.prototype' )
);
const c_span = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-span/c-span.prototype' )
);

c_icon.c_icon_name = 'google-preferred';
c_icon.c_icon_screen_reader_text = '';
c_icon.c_icon_screen_reader_title_attr = '';
c_icon.c_icon_screen_reader_tag_text = '';
c_icon.c_icon_link_screen_reader_text = 'Icon Link';
c_icon.c_icon_link_classes = '';
c_icon.c_icon_url = false;

c_span.c_span_classes = 'u-font-family-basic';
c_span.c_span_text = 'Add us as a Google Preferred Source';
c_span.c_span_url = false;

module.exports = {
	google_preferred_button_classes: 'lrv-u-flex lrv-u-align-items-center',
	google_preferred_button_icon_url: '',
	google_preferred_button_icon_classes: '',
	c_icon,
	c_span,
};

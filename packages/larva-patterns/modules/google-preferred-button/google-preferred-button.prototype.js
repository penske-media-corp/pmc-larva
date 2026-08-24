const clonedeep = require( 'lodash.clonedeep' );

const c_span = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-span/c-span.prototype' )
);
const c_icon = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-icon/c-icon.prototype' )
);

c_icon.c_icon_name = 'google-preferred';
c_icon.c_icon_url = false;
c_icon.c_icon_classes = 'lrv-u-display-block lrv-u-width-16 lrv-u-height-16';
c_icon.c_icon_screen_reader_text = '';
c_icon.c_icon_screen_reader_title_attr = '';

c_span.c_span_text = 'Add us as a Google Preferred Source';
c_span.c_span_url = false;
c_span.c_span_classes = 'u-font-family-basic';

module.exports = {
	google_preferred_button_url: 'https://www.google.com/preferences/source?q=',
	google_preferred_button_classes: 'lrv-u-flex lrv-u-align-items-center',
	google_preferred_button_icon_url: '',
	google_preferred_button_icon_classes: '',
	c_icon,
	c_span,
};

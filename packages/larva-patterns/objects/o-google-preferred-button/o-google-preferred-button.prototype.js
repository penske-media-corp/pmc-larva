const clonedeep = require( 'lodash.clonedeep' );

const c_span = clonedeep(
	require( '../../components/c-span/c-span.prototype' )
);
const c_icon = clonedeep(
	require( '../../components/c-icon/c-icon.prototype' )
);

c_icon.c_icon_name = 'google';
c_icon.c_icon_url = false;
c_icon.c_icon_classes = 'lrv-u-display-block lrv-u-width-16 lrv-u-height-16';
c_icon.c_icon_screen_reader_text = '';
c_icon.c_icon_screen_reader_title_attr = '';

c_span.c_span_text = 'Add us as a Google Preferred Source';
c_span.c_span_url = false;
c_span.c_span_classes = 'lrv-u-margin-l-050';

module.exports = {
	o_google_preferred_button_url: 'https://www.google.com/preferences/source?q=',
	o_google_preferred_button_classes: 'lrv-u-flex lrv-u-align-items-center',
	o_google_preferred_button_target_attr: '_blank',
	o_google_preferred_button_rel_attr: 'noopener noreferrer',
	o_google_preferred_button_aria_label: 'Add us as a Google Preferred Source',
	o_google_preferred_button_data_track: '',
	o_google_preferred_button_data_track_category: '',
	o_google_preferred_button_data_track_action: '',
	o_google_preferred_button_data_track_label: '',
	o_google_preferred_button_icon_url: '',
	o_google_preferred_button_icon_classes: '',
	c_icon,
	c_span,
};

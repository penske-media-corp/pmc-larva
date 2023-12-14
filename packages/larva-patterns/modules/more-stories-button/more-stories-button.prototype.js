const clonedeep = require( 'lodash.clonedeep' );
const c_button_basic_prototype = require( '../../components/c-button/c-button.brand-basic' );

const c_button_struct = clonedeep( c_button_basic_prototype );

c_button_struct.c_button_classes +=
	' lrv-u-color-white:hover lrv-u-border-radius-5 lrv-u-text-align-center lrv-u-font-size-28';

const c_button = clonedeep( c_button_struct );
const c_button_prev = clonedeep( c_button_struct );
const c_button_next = clonedeep( c_button_struct );

c_button.c_button_classes += ' lrv-u-display-block lrv-u-width-100p';
c_button.c_button_text = 'More Stories';
c_button.c_button_url = '#';

c_button_prev.c_button_classes +=
	' lrv-a-icon-arrow-left lrv-a-icon-invert lrv-a-icon-before lrv-u-font-size-18 lrv-u-justify-content-center';
c_button_prev.c_button_text = 'Previous';
c_button_prev.c_button_url = '#';

c_button_next.c_button_classes +=
	' lrv-a-icon-arrow-right lrv-a-icon-invert lrv-a-icon-after lrv-u-font-size-18 lrv-u-justify-content-center lrv-u-margin-l-auto';
c_button_next.c_button_text = 'Next';
c_button_next.c_button_url = '#';

module.exports = {
	more_stories_button_classes:
		'lrv-u-font-weight-bold lrv-u-font-family-primary',
	c_button,
	c_button_prev,
	c_button_next,
};

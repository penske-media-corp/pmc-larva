const clonedeep = require( 'lodash.clonedeep' );

const o_icon_button_search = clonedeep(
	require( './o-icon-button.prototype' )
);

o_icon_button_search.c_icon.c_icon_name = 'search';
o_icon_button_search.o_icon_button_screen_reader_text =
	'Click to Expand Search Input';
o_icon_button_search.c_span = false;

module.exports = o_icon_button_search;

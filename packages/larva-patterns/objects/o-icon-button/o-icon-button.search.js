const clonedeep = require( 'lodash.clonedeep' );
const o_icon_button_prototype = require( './o-icon-button.prototype' );
const o_icon_button_search = clonedeep( o_icon_button_prototype );

o_icon_button_search.c_icon.c_icon_name = 'search';
o_icon_button_search.c_span = false;

module.exports = o_icon_button_search;
const clonedeep = require( 'lodash.clonedeep' );

/**
 * Module includes.
 */
const term_content_top = clonedeep( require( './term-content-top.prototype' ) );

term_content_top.o_figure       = '';
term_content_top.tag_list       = '';
term_content_top.fact_list_menu = '';

module.exports = term_content_top;

const clonedeep = require( 'lodash.clonedeep' );

const story_featured_quote = clonedeep( require( './story.prototype' ) );

story_featured_quote.c_lazy_image = false;
story_featured_quote.c_timestamp = false;
story_featured_quote.c_span = false;
story_featured_quote.story_classes = 'lrv-u-text-align-center';
story_featured_quote.story_grid_classes = '';
story_featured_quote.story_nav_layout_classes += ' lrv-u-justify-content-center';
story_featured_quote.c_dek.c_dek_classes += ' lrv-u-order-n1';

module.exports = story_featured_quote;

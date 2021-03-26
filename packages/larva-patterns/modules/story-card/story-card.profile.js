const clonedeep = require( 'lodash.clonedeep' );

const story_card = clonedeep( require( './story-card.prototype' ) );

story_card.c_link.c_link_classes += ' lrv-u-border-radius-100';
story_card.c_lazy_image.c_lazy_image_classes += ' lrv-u-border-radius-50p';

// Same class names as modules/button and c-button/c-button.brand-basic
story_card.c_link.c_link_classes += ' lrv-u-color-white:hover lrv-u-display-inline-block lrv-u-background-color-brand-primary lrv-u-color-white lrv-u-text-transform-uppercase lrv-u-border-radius-100 lrv-u-padding-t-075 lrv-u-padding-r-2 lrv-u-padding-b-050 lrv-u-padding-l-2';

module.exports = story_card;
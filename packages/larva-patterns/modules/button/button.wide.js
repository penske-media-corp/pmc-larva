const clonedeep = require( 'lodash.clonedeep' );

const button = clonedeep( require( './button.prototype' ) );

button.button_classes = ' lrv-u-border-radius-100 lrv-u-text-align-center lrv-u-padding-a-075 lrv-u-display-inline-block lrv-u-width-300 lrv-u-max-width-100p';
button.button_typography_class = 'lrv-u-font-family-primary-fancy lrv-u-font-size-14 lrv-u-line-height-small lrv-u-letter-spacing-0044';

module.exports = button;

const clonedeep = require( 'lodash.clonedeep' );

const c_button = clonedeep( require( './c-button.prototype' ) );

c_button.c_button_classes += ' lrv-u-background-color-black lrv-u-color-white lrv-u-border-radius-5 lrv-u-color-white:hover';

module.exports = c_button;

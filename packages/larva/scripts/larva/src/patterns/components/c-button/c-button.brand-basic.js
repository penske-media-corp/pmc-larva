const clonedeep = require( 'lodash.clonedeep' );

const c_button = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-button/c-button.prototype' ) );

c_button.c_button_classes += ' lrv-u-background-color-brand-primary lrv-u-color-white lrv-u-padding-a-1';

module.exports = c_button;
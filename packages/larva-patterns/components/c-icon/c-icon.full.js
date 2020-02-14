const clonedeep = require( 'lodash.clonedeep' );

const c_icon_prototype = require( './c-icon.prototype' );
const c_icon = clonedeep( c_icon_prototype );

c_icon.c_icon_classes = 'lrv-u-height-100p lrv-u-width-100p';

module.exports = c_icon;

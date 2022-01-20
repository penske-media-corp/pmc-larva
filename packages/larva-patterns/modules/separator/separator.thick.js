const clonedeep = require( 'lodash.clonedeep' );

const separator = clonedeep( require( './separator.prototype' ) );

separator.separator_classes = 'lrv-u-border-a-3';

module.exports = separator;

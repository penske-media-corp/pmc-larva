const clonedeep = require( 'lodash.clonedeep' );

const separator = clonedeep( require( './separator.prototype' ) );

separator.separator_classes =
	'lrv-u-border-b-1 lrv-u-border-t-20 lrv-u-height-37';

module.exports = separator;

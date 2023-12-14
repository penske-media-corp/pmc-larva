const clonedeep = require( 'lodash.clonedeep' );

const separator = clonedeep( require( './separator.prototype' ) );

separator.separator_classes =
	'lrv-u-margin-tb-1 lrv-u-border-a-1 lrv-u-margin-lr-2 lrv-u-margin-lr-4@desktop';

module.exports = separator;

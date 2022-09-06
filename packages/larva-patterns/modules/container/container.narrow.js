const clonedeep = require( 'lodash.clonedeep' );

const container_prototype = require( './container.prototype' );
const container_narrow = clonedeep( container_prototype );

container_narrow.container_classes += ' lrv-u-width-75p';

module.exports = container_narrow;

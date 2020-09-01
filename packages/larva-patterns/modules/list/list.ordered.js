const clonedeep = require( 'lodash.clonedeep' );

const list = clonedeep( require( './list.prototype' ) );

list.list_type_name = 'o';

module.exports = list;

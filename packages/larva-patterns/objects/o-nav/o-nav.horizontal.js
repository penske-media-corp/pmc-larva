const clonedeep = require( 'lodash.clonedeep' );

const o_nav = clonedeep( require( '../../objects/o-nav/o-nav.prototype' ) );

o_nav.o_nav_classes = 'lrv-u-flex';
o_nav.o_nav_list_classes +=
	' lrv-u-flex lrv-a-space-children-horizontal lrv-a-space-children--1 lrv-u-align-items-center lrv-u-a-unstyle-list';

module.exports = o_nav;

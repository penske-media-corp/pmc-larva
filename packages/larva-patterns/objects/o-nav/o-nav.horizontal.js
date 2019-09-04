const path = require( 'path' );
const clone = require( '../../../larva/lib/utils/clonePatternData' );// This should be in this repo, probably
const o_nav = clone( path.resolve( __dirname, '../../objects/o-nav/o-nav.prototype' ) );

o_nav.o_nav_classes = 'lrv-u-flex';
o_nav.o_nav_list_classes += ' lrv-u-flex lrv-a-space-children-horizontal lrv-a-space-children--1 lrv-u-align-items-center lrv-u-a-unstyle-list';

module.exports = o_nav;
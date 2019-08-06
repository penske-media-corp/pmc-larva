const path = require( 'path' );
const clone = require( '../../../larva/lib/utils/clonePatternData' );// This should be in this repo, probably
const o_nav = clone( path.resolve( __dirname, '../../objects/o-nav/o-nav.prototype' ) );

o_nav.o_nav_classes = 'pmc-u-flex';
o_nav.o_nav_list_classes = 'pmc-u-flex pmc-a-space-children-horizontal pmc-a-space-children--1 pmc-u-align-items-center pmc-u-font-family-primary pmc-u-a-unstyle-list';

module.exports = o_nav;
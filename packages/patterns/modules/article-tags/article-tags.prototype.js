const path = require( 'path' );
const clone = require( '../../../larva/lib/utils/clonePatternData' );// This should be in this repo, probably
const o_nav = clone( path.resolve( __dirname, '../../objects/o-nav/o-nav.prototype' ) );

o_nav.o_nav_title_text = 'Read More About:';

const tags = [ 'Art Gallery', 'Retrospective', 'Mapplethorpe' ];

o_nav.o_nav_list_items.forEach( ( item, i ) => {
	item.c_link_text = tags[i];
	item.c_link_classes += ' pmc-u-text-transform-uppercase';
});

o_nav.o_nav_title_classes = 'pmc-u-padding-r-1 pmc-u-font-family-secondary';

module.exports = {
	'o_nav': o_nav,
}

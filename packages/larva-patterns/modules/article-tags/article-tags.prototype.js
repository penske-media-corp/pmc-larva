const clonedeep = require( 'lodash.clonedeep' );

const o_nav = clonedeep( require( '../../objects/o-nav/o-nav.horizontal' ) );
const c_link_path = require( '../../components/c-link/c-link.prototype' );

o_nav.o_nav_title_text = 'Read More About:';
o_nav.o_nav_list_items = [];

const tags = [ 'Art Gallery', 'Retrospective', 'Mapplethorpe' ];

for (let i = 0; i < tags.length; i++) {
	let c_link = clonedeep( c_link_path );

	c_link.c_link_text = tags[i];
	c_link.c_link_classes += ' lrv-u-text-transform-uppercase';

	o_nav.o_nav_list_items.push( c_link );
}

o_nav.o_nav_title_classes = 'lrv-u-padding-r-1 lrv-u-font-family-secondary';

module.exports = {
	'o_nav': o_nav,
};

const clonedeep = require('lodash.clonedeep');
const o_nav = clonedeep(require('../../objects/o-nav/o-nav.prototype'));

o_nav.o_nav_list_items = [];
const menuLinks = ['News', 'Market', 'Reviews', 'Video'];

for (let i = 0; i < menuLinks.length; i++) {
	let c_link = clonedeep(require('../../components/c-link/c-link.prototype'));

	if ('icon' === menuLinks[i]) {
		c_link.c_link_text = '';
		c_link.c_link_classes = 'lrv-a-unstyle-link lrv-u-color-brand-primary:hover lrv-a-hover-effect';
	} else {
		c_link.c_link_text = menuLinks[i];
		c_link.c_link_classes = 'lrv-a-unstyle-link lrv-u-color-brand-primary:hover lrv-a-hover-effect lrv-u-whitespace-nowrap';
	}

	o_nav.o_nav_list_items.push(c_link);
}

o_nav.o_nav_list_classes = 'lrv-a-unstyle-list lrv-u-flex lrv-u-justify-content-center lrv-a-space-children-horizontal lrv-a-space-children--2 lrv-u-font-family-primary';

module.exports = {
	o_nav: o_nav
};
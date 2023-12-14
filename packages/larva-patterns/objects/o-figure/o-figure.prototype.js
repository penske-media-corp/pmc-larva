const clonedeep = require( 'lodash.clonedeep' );

const c_figcaption = clonedeep(
	require( '../../components/c-figcaption/c-figcaption.prototype' )
);
const c_lazy_image = clonedeep(
	require( '../../components/c-lazy-image/c-lazy-image.prototype' )
);

module.exports = {
	c_figcaption,
	c_lazy_image,
	o_figure_link_tabindex_attr: '',
	o_figure_link_target_attr: '_self',
	o_figure_link_url: false,
	o_figure_classes: '',
	o_figure_link_classes: 'lrv-a-unstyle-link ',
	o_figure_figcaption_outer: false,
	o_figure_figcaption_outer_classes: '',
};

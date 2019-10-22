const clonedeep = require( 'lodash.clonedeep' );

const c_figcaption_prototype = require( '../../components/c-figcaption/c-figcaption.prototype' );
const c_figcaption = clonedeep( c_figcaption_prototype );

const c_lazy_image_prototype = require( '../../components/c-lazy-image/c-lazy-image.prototype' );
const c_lazy_image = clonedeep( c_lazy_image_prototype );

module.exports = {
	c_figcaption: c_figcaption,
	c_lazy_image: c_lazy_image,
	o_figure_link_url: false,
	o_figure_classes: '',
	o_figure_link_classes: 'lrv-a-unstyle-link ',
	o_figure_figcaption_outer: false,
	o_figure_figcaption_outer_classes: '',
}

const clonedeep = require( 'lodash.clonedeep' );

const c_figcaption_prototype = require( '../../components/c-figcaption/c-figcaption.prototype' );
const c_figcaption = clonedeep( c_figcaption_prototype );

module.exports = {
	c_figcaption: c_figcaption,
	o_figure_permalink_url: false,
	o_figure_classes: '',
	o_figure_link_classes: 'lrv-a-unstyle-link ',
	o_figure_crop_class: 'lrv-a-crop-16x9',
	o_figure_crop_style_attr: false,
	o_figure_alt_attr: 'Thumbnail image',
	o_figure_image_url: 'https://farm5.staticflickr.com/4078/5441060528_31db7838ba_z.jpg',
	o_figure_placeholder_image_url: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
	o_figure_lazy_srcset_url: 'https://farm5.staticflickr.com/4078/5441060528_31db7838ba_m.jpg 240w,https://farm5.staticflickr.com/4078/5441060528_31db7838ba_n.jpg 320w,https://farm5.staticflickr.com/4078/5441060528_31db7838ba.jpg 500w,https://farm5.staticflickr.com/4078/5441060528_31db7838ba_z.jpg 640w,https://farm5.staticflickr.com/4078/5441060528_31db7838ba_b.jpg 1024w',
	o_figure_lazy_sizes_attr: 'auto',
	o_figure_image_classes: 'lrv-u-background-color-grey-lightest lrv-u-width-100p lrv-u-display-block lrv-u-height-auto',
	o_figure_image_height_attr: '',
	o_figure_image_width_attr: '',
}

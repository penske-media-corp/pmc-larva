const clonedeep = require( 'lodash.clonedeep' );

const o_figure_prototype = require( '../o-figure/o-figure.prototype' );
const o_figure = clonedeep( o_figure_prototype );

o_figure.o_figure_crop_class = 'lrv-u-crop-2x3';
o_figure.o_figure_alt_attr = 'Thumbnail image';

module.exports = {
	"o_tease_url": "#",
	"o_tease_classes": "lrv-u-flex lrv-u-align-items-center",
	"o_tease_link_classes": "lrv-u-display-contents",
	"o_tease_primary_classes": "lrv-u-flex-grow-1",
	"o_tease_secondary_classes": "lrv-u-flex-shrink-0 lrv-u-width-30p",
	"c_heading": {
		"c_heading_text": "Breaking News",
		"c_heading_classes": "lrv-u-font-family-primary lrv-u-font-size-20 lrv-u-font-weight-bold"
	},
	"c_title": {
		"c_title_text": "Title Text"
	},
	"c_tagline": {
		"c_tagline_classes": "",
		"c_tagline_markup": "Tagline Text"
	},
	o_figure: o_figure
};

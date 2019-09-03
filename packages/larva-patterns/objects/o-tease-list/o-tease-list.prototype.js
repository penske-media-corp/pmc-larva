const o_figure_prototype = require( '../o-figure/o-figure.prototype' );
const o_figure = Object.assign( {}, o_figure_prototype );

const c_title_prototype = require( '../../components/c-title/c-title.prototype' );
const c_title = Object.assign( {}, c_title_prototype );

o_figure.o_figure_crop_class = "lrv-a-crop-16x9";

module.exports = {
	"o_tease_list_classes": "lrv-a-unstyle-list",
	"o_tease_list_items": [
		{
			"c_title": c_title,
			"o_figure": o_figure
		},
		{
			"c_title": c_title,
			"o_figure": o_figure
		}
	]
}

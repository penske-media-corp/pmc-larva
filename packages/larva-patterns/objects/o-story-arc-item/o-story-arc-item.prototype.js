const clonedeep = require( 'lodash.clonedeep' );

const c_timestamp_prototype = require( '../../components/c-timestamp/c-timestamp.prototype' );
const o_tease_prototype = require( '../o-tease/o-tease.prototype.js' );

const c_timestamp = clonedeep( c_timestamp_prototype );
const o_tease = clonedeep( o_tease_prototype );

c_timestamp.c_timestamp_classes =
	'lrv-u-font-family-primary lrv-u-background-color-body lrv-u-font-weight-bold lrv-u-font-size-12 lrv-u-color-brand-primary';

o_tease.c_tagline = false;
o_tease.c_heading = false;
o_tease.c_button = false;
o_tease.c_span = false;

o_tease.o_tease_classes +=
	' u-align-items-flex-start@mobile-max u-flex-direction-row-reverse';
o_tease.o_tease_secondary_classes += ' lrv-u-margin-r-1 u-width-65';

o_tease.c_lazy_image.c_lazy_image_img_classes +=
	' lrv-u-border-radius-5 u-box-shadow-light';
o_tease.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-1x1';

o_tease.c_title.c_title_text =
	'Art Basel Plans ‘Interventions’ for 50th Anniversary, with Kasper König in Charge';
o_tease.c_title.c_title_classes =
	'lrv-u-font-family-primary lrv-u-font-size-14 lrv-u-font-size-16@desktop u-color-black lrv-u-font-weight-normal';

module.exports = {
	o_story_arc_item_classes: '',
	c_timestamp,
	o_tease,
};

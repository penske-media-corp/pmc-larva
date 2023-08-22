const clonedeep = require( 'lodash.clonedeep' );

// Image
const c_lazy_image_prototype = require( '@penskemediacorp/larva-patterns/components/c-lazy-image/c-lazy-image.prototype' );

const c_lazy_image = clonedeep( c_lazy_image_prototype );

c_lazy_image.c_lazy_image_srcset_attr = false;
c_lazy_image.c_lazy_image_sizes_attr = false;
c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-1x1';

// Icon Button
const c_icon_button = clonedeep(
	require( '../../objects/o-icon-button/o-icon-button.prototype' )
);

c_icon_button.o_icon_button_url = true;
c_icon_button.o_button_url = '#';
c_icon_button.o_icon_button_classes +=
	' lrv-a-buy-now__button lrv-u-border-t-3 lrv-u-border-r-1 lrv-u-border-b-3 lrv-u-border-l-1 lrv-u-padding-tb-050 lrv-u-padding-lr-1 lrv-u-border-color-currentColor lrv-u-background-color-white lrv-u-color-black lrv-u-font-size-14 lrv-u-font-weight-bold lrv-u-text-transform-uppercase';
c_icon_button.o_icon_button_target_attr = '_blank';
c_icon_button.o_icon_button_rel_attr = 'nofollow';

c_icon_button.c_icon.c_icon_name = 'triangle-right';
c_icon_button.c_icon.c_icon_screen_reader_text = '';
c_icon_button.c_span.c_span_text = 'Buy Now';

// Export
module.exports = {
	buy_now_div_classes: 'lrv-a-buy-now lrv-u-font-family-basic',
	buy_now_hr_top_classes: 'lrv-a-buy-now__hr lrv-a-buy-now__hr--top',
	buy_now_img_classes: 'lrv-a-buy-now__image',
	buy_now_hr_bottom_classes: 'lrv-a-buy-now__hr lrv-a-buy-now__hr--bottom',
	buy_now_p_classes:
		'lrv-a-buy-now__p lrv-u-font-family-basic lrv-u-font-size-14',
	buy_now_span_classes:
		'lrv-a-buy-now__span lrv-u-font-weight-bold lrv-u-text-transform-uppercase lrv-u-color-grey lrv-u-font-size-10',
	buy_now_store_credit_text: '', // 'Amazon' for example
	c_lazy_image,
	c_icon_button,
};

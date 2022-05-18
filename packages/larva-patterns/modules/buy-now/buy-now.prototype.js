const clonedeep = require( 'lodash.clonedeep' );

// Buy now options
const buy_now = {
	buy_now_div_container_classes: 'lrv-a-buy-now',
	buy_now_hr_top_classes: 'lrv-a-buy-now-hr lrv-a-buy-now-hr-top',
	buy_now_img_container_classes: 'lrv-a-buy-now-image',
	buy_now_hr_bottom_classes: 'lrv-a-buy-now-hr lrv-a-buy-now-hr-bottom',
	buy_now_p_container_classes: 'lrv-a-buy-now-p',
}

// Image
const c_lazy_image_prototype = require( '@penskemediacorp/larva-patterns/components/c-lazy-image/c-lazy-image.prototype' );

const c_lazy_image = clonedeep( c_lazy_image_prototype );

c_lazy_image.c_lazy_image_srcset_attr = false;
c_lazy_image.c_lazy_image_sizes_attr = false;
c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-1x1';

// Button
const button = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-button/c-button.bordered' ) );

button.c_button_classes += ' lrv-a-buy-now-button';
button.c_button_screen_reader_text = 'Buy Now';
button.c_button_text = 'Buy Now';
button.c_button_target_attr = '_blank';
button.c_button_rel_attr = 'nofollow';

// Export
module.exports = {
	buy_now,
	c_lazy_image,
	button,
};

const clonedeep = require( 'lodash.clonedeep' );

const c_lazy_image = clonedeep(
	require( '../../components/c-lazy-image/c-lazy-image.prototype' )
);

c_lazy_image.c_lazy_image_crop_class = 'a-crop-16x5';

const c_button_black = clonedeep(
	require( '../../components/c-button/c-button.black' )
);

c_button_black.c_button_classes += ' lrv-u-display-inline-block';
c_button_black.c_button_text = 'Update this text';
c_button_black.c_button_url = '#';

module.exports = {
	profile_body: clonedeep(
		require( '../../modules/profile-body/profile-body.prototype' )
	),
	c_lazy_image,
	c_button: c_button_black,
};

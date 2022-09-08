const clonedeep = require( 'lodash.clonedeep' );

const c_lazy_image = clonedeep(
	require( './../../components/c-lazy-image/c-lazy-image.prototype' )
);
const c_title = clonedeep(
	require( './../../components/c-title/c-title.prototype' )
);
const c_span = clonedeep(
	require( './../../components/c-span/c-span.prototype' )
);

module.exports = {
	vlanding_video_card_permalink_url: '#',
	vlanding_video_card_use_button: true,
	vlanding_video_card_link_aria_controls_attr: '',
	vlanding_video_card_link_classes: 'lrv-a-unstyle-link',
	vlanding_video_card_link_showcase_trigger_data_attr: 'x3HbbzHK5Mc',
	vlanding_video_card_link_showcase_type_data_attr: 'youtube',
	vlanding_video_card_link_showcase_dek_data_attr:
		'text for the dek, update this',
	vlanding_video_card_link_showcase_title_data_attr:
		'title that should be the same as the card',
	vlanding_video_card_link_showcase_permalink_data_url: '#',
	vlanding_video_card_active_txt_attr: 'Now Playing',
	vlanding_video_card_classes: '',
	vlanding_video_card_crop_class: '',
	c_lazy_image,
	vlanding_video_card_is_player: '',
	c_title,
	c_span,
	vlanding_video_card_social_share_markup: '',
};

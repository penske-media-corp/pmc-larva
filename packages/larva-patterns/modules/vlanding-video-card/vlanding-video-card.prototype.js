const clonedeep = require( 'lodash.clonedeep' );

const c_lazy_image = clonedeep( require( './../../components/c-lazy-image/c-lazy-image.prototype' ) );
const c_title = clonedeep( require( './../../components/c-title/c-title.prototype' ) );
const c_span = clonedeep( require( './../../components/c-span/c-span.prototype' ) );

module.exports = {
	vlanding_video_card_permalink_url: "#",
	vlanding_video_card_link_showcase_trigger_data_attr: '',
	vlanding_video_card_link_showcase_type_data_attr: '',
	vlanding_video_card_link_showcase_dek_data_attr: '',
	vlanding_video_card_link_showcase_title_data_attr: '',
	vlanding_video_card_link_showcase_permalink_data_url: '',
	vlanding_video_card_classes: '',
	vlanding_video_card_crop_class: '',
	vlanding_video_card_crop_data_attr: '',
	c_lazy_image: c_lazy_image,
	vlanding_video_card_is_player: '',
	c_title: c_title,
	c_span: c_span,
	vlanding_video_card_social_share_markup: '',
};

const clonedeep = require( 'lodash.clonedeep' );

const o_video_card_prototype = require( '../../objects/o-video-card/o-video-card.prototype' );
const o_category_link_prototype = require( '../../objects/o-category-link/o-category-link.prototype' );
const c_figcaption_prototype = require( '../../components/c-figcaption/c-figcaption.prototype.js' );

const o_video_card = clonedeep( o_video_card_prototype );
const o_category_link = clonedeep( o_category_link_prototype );
const c_figcaption = clonedeep( c_figcaption_prototype );

o_video_card.c_play_icon.c_play_badge_classes =
	'lrv-a-glue lrv-a-glue--b-0 lrv-a-glue--l-0 lrv-u-margin-l-1 lrv-u-margin-b-1 u-transform-translate-a-n50p u-width-auto u-height-80 u-width-60@tablet u-height-60@tablet is-to-be-hidden u-overflow-visible lrv-u-width-50 lrv-u-width-35@mobile-max u-opacity-060';

o_video_card.o_video_card_image_classes +=
	' lrv-u-background-color-grey-lightest lrv-u-width-100p lrv-u-display-block lrv-u-height-auto';

o_category_link.o_category_link_classes =
	o_category_link.o_category_link_classes.replace(
		'lrv-u-color-black',
		'lrv-u-color-white'
	);
o_category_link.o_category_link_classes =
	o_category_link.o_category_link_classes.replace(
		'lrv-u-color-brand-primary:hover',
		'lrv-u-color-brand-accent-blue:hover'
	);
o_category_link.o_category_link_classes += ' lrv-u-margin-b-050';
o_video_card.o_category_link = o_category_link;

o_video_card.o_video_card_classes = '';
o_video_card.o_video_card_meta_classes = '';

c_figcaption.c_figcaption_classes = 'lrv-u-font-size-12 lrv-u-padding-tb-075';
c_figcaption.c_figcaption_caption_classes +=
	' lrv-u-font-size-16 lrv-u-font-size-14@mobile-max lrv-a-font-body-m u-font-style-italic lrv-u-color-grey-dark';
c_figcaption.c_figcaption_credit_classes =
	'lrv-u-text-transform-uppercase lrv-u-color-grey lrv-u-font-size-10 a-font-basic-s lrv-u-margin-l-025';

module.exports = {
	featured_video_classes: '',
	o_video_card,
	c_figcaption,
};

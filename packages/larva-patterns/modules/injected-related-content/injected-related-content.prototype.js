const clonedeep = require( 'lodash.clonedeep' );

const c_title_prototype = require( '../../components/c-title/c-title.prototype' );
const c_heading = clonedeep( c_title_prototype );

c_heading.c_title_text = 'Related';
c_heading.c_title_classes =
	'lrv-a-font-primary-xxxs lrv-u-font-weight-bold lrv-u-color-black lrv-u-text-transform-uppercase lrv-u-border-b-1 lrv-u-padding-b-050 ';
c_heading.c_title_url = false;

const c_title = clonedeep( c_title_prototype );

c_title.c_title_text =
	'Chronixx Says Some Dancehall Lyrics Are ‘Embarrassing’, Artists Should Stop Calling Him For Features';
c_title.c_title_classes =
	'lrv-a-font-primary-xs lrv-u-color-black lrv-u-padding-t-125';
c_title.c_title_link_classes =
	'lrv-a-font-primary-xs lrv-u-color-black lrv-a-truncate-ellipsis-4line@mobile-max lrv-a-truncate-ellipsis-5line@tablet-desktop-only lrv-a-truncate-ellipsis-3line@desktop-xl';
c_title.c_title_url = '#';

const c_lazy_image_prototype = require( '../../components/c-lazy-image/c-lazy-image.prototype.js' );
const c_lazy_image = clonedeep( c_lazy_image_prototype );

c_lazy_image.c_lazy_image_classes =
	'lrv-a-floated-right@tablet lrv-u-width-154@desktop-xl lrv-u-width-177@tablet-and-desktop-only lrv-u-margin-l-125 lrv-u-margin-t-150@mobile-max lrv-u-margin-l-00@mobile-max';
c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-1x1@tablet';

const o_card_prototype = require( '../../objects/o-card/o-card.prototype' );
const o_card_first = clonedeep( o_card_prototype );

o_card_first.o_card_classes = '';
o_card_first.c_title.c_title_text =
	'Chronixx Draws Inspiration From These Capleton Lyrics';
o_card_first.c_title.c_title_classes =
	'lrv-a-font-primary-xxxs lrv-u-color-black lrv-u-border-b-1 lrv-u-border-t-1@desktop-xl-max lrv-u-padding-b-1 lrv-u-padding-t-00@desktop-xl lrv-u-padding-t-1 ';
o_card_first.c_title.c_title_link_classes =
	'lrv-a-font-primary-xxxs lrv-u-color-black lrv-a-truncate-ellipsis-3line@desktop-xl lrv-a-truncate-ellipsis-1line@tablet-desktop-only lrv-a-truncate-ellipsis-2line@mobile-max';
o_card_first.c_title.c_title_url = '#';
o_card_first.c_lazy_image = false;
o_card_first.c_span = false;
o_card_first.c_timestamp = false;
o_card_first.o_card_tag_text = 'div';

const o_card_last = clonedeep( o_card_prototype );

o_card_last.o_card_classes = '';
o_card_last.c_title.c_title_text =
	'Chronixx calls for change in new video “Safe N Sound”';
o_card_last.c_title.c_title_classes =
	'lrv-a-font-primary-xxxs lrv-u-color-black lrv-u-padding-b-00@desktop-xl lrv-u-padding-b-1 lrv-u-padding-t-1';
o_card_last.c_title.c_title_link_classes =
	'lrv-a-font-primary-xxxs lrv-u-color-black lrv-a-truncate-ellipsis-3line@desktop-xl lrv-a-truncate-ellipsis-1line@tablet-desktop-only lrv-a-truncate-ellipsis-2line@mobile-max';
o_card_last.c_title.c_title_url = '#';
o_card_last.c_lazy_image = false;
o_card_last.c_span = false;
o_card_last.c_timestamp = false;
o_card_last.o_card_tag_text = 'div';

module.exports = {
	injected_related_content_classes: 'lrv-u-border-t-1 lrv-u-padding-t-025',
	injected_related_content_inner_classes:
		'lrv-u-flex lrv-u-flex-direction-column@desktop-xl-max lrv-u-border-b-1 lrv-u-border-t-1 lrv-u-padding-b-150@desktop-xl lrv-u-padding-t-150',
	injected_related_content_primary_classes:
		'lrv-u-padding-b-1@mobile-max lrv-u-padding-b-150 lrv-u-padding-b-00@desktop-xl lrv-u-width-64p@desktop-xl',
	injected_related_content_heading_classes:
		'lrv-u-padding-b-00@desktop-xl lrv-u-display-inline-block',
	injected_related_content_secondary_classes:
		'lrv-u-padding-l-125@desktop-xl lrv-u-width-36p@desktop-xl lrv-u-flex lrv-u-flex-direction-column lrv-u-justify-content-center',
	c_heading,
	c_title,
	c_lazy_image,
	o_card_items: [ o_card_first, o_card_last ],
};

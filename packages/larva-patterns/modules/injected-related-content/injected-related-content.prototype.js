const clonedeep = require('lodash.clonedeep');

const c_title_prototype = require('../../components/c-title/c-title.prototype');
const c_heading = clonedeep(c_title_prototype);

c_heading.c_title_text = 'Related';
c_heading.c_title_classes = 'a-font-primary-s lrv-u-font-weight-bold lrv-u-color-black lrv-u-text-transform-uppercase lrv-u-border-b-1 lrv-u-padding-b-050 ';
c_heading.c_title_url = false;

const c_title = clonedeep(c_title_prototype);

c_title.c_title_text = 'Article title';
c_title.c_title_classes = 'a-font-primary-m lrv-u-color-black lrv-u-padding-t-125';
c_title.c_title_link_classes = 'a-font-primary-m lrv-u-color-black a-truncate-ellipsis-5line@desktop-xl-max a-truncate-ellipsis-3line@desktop-xl';
c_title.c_title_url = '';

const c_lazy_image_prototype = require('../../components/c-lazy-image/c-lazy-image.prototype.js');
const c_lazy_image = clonedeep(c_lazy_image_prototype);

c_lazy_image.c_lazy_image_classes = 'a-floated-right@tablet u-width-154@desktop-xl u-width-177@tablet-and-desktop-only lrv-u-margin-l-125 lrv-u-margin-t-150@mobile-max lrv-u-margin-l-00@mobile-max';
c_lazy_image.c_lazy_image_crop_class = 'a-crop-1x1@tablet';

const o_card_prototype = require('../../objects/o-card/o-card.prototype');
const o_card_first = clonedeep(o_card_prototype);

o_card_first.o_card_classes = '';
o_card_first.c_title.c_title_text = 'Article title';
o_card_first.c_title.c_title_classes = 'a-font-primary-xs lrv-u-color-black lrv-u-border-b-1 u-border-t-1@desktop-xl-max lrv-u-padding-b-1 lrv-u-padding-t-00@desktop-xl lrv-u-padding-t-1 ';
o_card_first.c_title.c_title_link_classes = ' u-line-height-20p lrv-u-color-black a-truncate-ellipsis-3line@desktop-xl a-truncate-ellipsis-1line@tablet-desktop-only a-truncate-ellipsis-2line@mobile-max';
o_card_first.c_title.c_title_url = '';
o_card_first.c_lazy_image = false;
o_card_first.c_span = false;
o_card_first.c_timestamp = false;

const o_card_last = clonedeep(o_card_prototype);

o_card_last.o_card_classes = '';
o_card_last.c_title.c_title_text = 'Article title';
o_card_last.c_title.c_title_classes = 'a-font-primary-xs lrv-u-color-black lrv-u-padding-b-00@desktop-xl lrv-u-padding-b-1 lrv-u-padding-t-1';
o_card_last.c_title.c_title_link_classes = ' u-line-height-20p lrv-u-color-black a-truncate-ellipsis-3line@desktop-xl a-truncate-ellipsis-1line@tablet-desktop-only a-truncate-ellipsis-2line@mobile-max';
o_card_last.c_title.c_title_url = '';
o_card_last.c_lazy_image = false;
o_card_last.c_span = false;
o_card_last.c_timestamp = false;

module.exports = {
    injected_related_content_classes: 'lrv-u-border-t-1 lrv-u-padding-t-025',
    injected_related_content_inner_classes: 'lrv-u-flex u-flex-direction-column@desktop-xl-max lrv-u-border-b-1 lrv-u-border-t-1 lrv-u-padding-b-150@desktop-xl lrv-u-padding-t-150',
	injected_related_content_primary_classes: 'lrv-u-padding-b-1@mobile-max lrv-u-padding-b-150 lrv-u-padding-b-00@desktop-xl u-width-64p@desktop-xl',
	injected_related_content_heading_classes: 'lrv-u-padding-b-00@desktop-xl lrv-u-display-inline-block',
	injected_related_content_secondary_classes: 'lrv-u-padding-l-125@desktop-xl u-width-36p@desktop-xl',
    c_heading,
    c_title,
    c_lazy_image,
    o_card_items: [
        o_card_first,
        o_card_last
    ]
};

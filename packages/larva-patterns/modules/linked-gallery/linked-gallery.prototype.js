const clonedeep = require( 'lodash.clonedeep' );

const c_lazy_image = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-lazy-image/c-lazy-image.prototype' )
);
const article_kicker = clonedeep(
	require( '@penskemediacorp/larva-patterns/modules/article-kicker/article-kicker.prototype' )
);
const c_title = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-title/c-title.prototype' )
);
const c_svg = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-svg/c-svg.prototype' )
);

c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-3x2';
c_lazy_image.c_lazy_image_img_classes += ' lrv-u-filter-grayscale-100';

const linked_gallery_item = { c_lazy_image, article_kicker, c_svg };

const linked_gallery_item_1 = clonedeep( linked_gallery_item );
const linked_gallery_item_2 = clonedeep( linked_gallery_item );
const linked_gallery_item_3 = clonedeep( linked_gallery_item );

article_kicker.article_kicker_url = '#';
article_kicker.article_kicker_link_classes =
	'lrv-a-unstyle-link lrv-u-padding-b-050 lrv-u-border-b-1';
article_kicker.article_kicker_classes =
	'lrv-u-text-align-center lrv-a-font-basic-xs lrv-u-margin-t-1@desktop lrv-u-text-transform-uppercase';
article_kicker.article_kicker_text = 'Photo Portfolio';

c_title.c_title_url = '';
c_title.c_title_text = 'The work of brad elterman';
c_title.c_title_classes =
	'lrv-a-font-secondary-xl lrv-u-text-align-center lrv-u-margin-t-2@desktop lrv-u-margin-t-2@mobile-max lrv-u-text-transform-uppercase lrv-a-unstyle-inner-links';

const linked_gallery_items = [
	linked_gallery_item_1,
	linked_gallery_item_2,
	linked_gallery_item_3,
];

for ( let i = 0; i < linked_gallery_items.length; i++ ) {
	if ( 0 === i ) {
		linked_gallery_items[ i ].c_lazy_image.c_lazy_image_classes =
			'lrv-u-margin-r-2@desktop lrv-u-padding-r-2@desktop ';
		linked_gallery_items[ i ].linked_gallery_thumbnail_classes =
			'lrv-u-display-none@mobile-max';
		linked_gallery_items[ i ].c_svg = false;
	}

	if ( 1 === i ) {
		linked_gallery_items[ i ].c_svg.c_svg_classes =
			'lrv-a-glue lrv-a-glue--r-0 lrv-u-display-none@desktop';
		linked_gallery_items[ i ].linked_gallery_thumbnail_classes =
			'lrv-u-position-absolute@desktop lrv-u-width-38p@desktop lrv-u-top-n33@desktop lrv-a-glue@tablet lrv-u-transform-translateX-n50p@desktop lrv-u-left-50p@desktop lrv-u-text-align-center';
	}

	if ( 2 === i ) {
		linked_gallery_items[ i ].c_lazy_image.c_lazy_image_classes =
			'lrv-u-margin-l-2@desktop lrv-u-padding-l-2@desktop';
		linked_gallery_items[ i ].linked_gallery_thumbnail_classes =
			'lrv-u-display-none@mobile-max';
		linked_gallery_items[ i ].c_svg.c_svg_classes =
			'lrv-a-glue lrv-a-glue--r-0';
	}
}

module.exports = {
	linked_gallery_classes: 'lrv-u-border-t-1 lrv-u-border-b-1',
	linked_gallery_container_classes:
		'lrv-u-border-t-1 lrv-u-margin-t-025 lrv-u-padding-tb-2@desktop lrv-u-padding-lr-125@desktop lrv-u-padding-lr-050@mobile-max lrv-u-padding-tb-125@mobile-max',
	linked_gallery_thumbnails_classes:
		'lrv-a-grid lrv-a-cols2@desktop lrv-u-position-relative lrv-u-margin-t-2@desktop',
	linked_gallery_items,
	linked_gallery_url: '#',
	article_kicker,
	c_title,
};

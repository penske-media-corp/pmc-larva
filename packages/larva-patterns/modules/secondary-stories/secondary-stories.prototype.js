const clonedeep = require( 'lodash.clonedeep' );

const o_card_prototype = require( '@penskemediacorp/larva-patterns/objects/o-card/o-card.prototype.js' );

const o_author = clonedeep(
	require( '@penskemediacorp/larva-patterns/objects/o-author/o-author.prototype' )
);
o_author.c_span.c_span_classes = '';
o_author.o_author_classes = 'lrv-u-text-transform-uppercase';
o_author.o_author_text = 'By ';
o_author.c_timestamp = false;
o_author.c_span.c_span_link_classes = 'lrv-a-unstyle-link';
o_card_prototype.o_author = o_author;

const c_dek = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-dek/c-dek.prototype.js' )
);
o_card_prototype.c_dek = c_dek;

o_card_prototype.c_span = false;
o_card_prototype.c_title.c_title_text =
	' For Sahbabii, Recording His Debut Album Was Part of The Grieving Process';
o_card_prototype.c_timestamp = false;
o_card_prototype.o_card_content_classes =
	'lrv-u-align-items-start lrv-u-flex lrv-u-flex-direction-column';
o_card_prototype.c_title.c_title_link_classes =
	'lrv-a-unstyle-link lrv-u-color-brand-primary:hover';

const article_kicker = clonedeep(
	require( '@penskemediacorp/larva-patterns/modules/article-kicker/article-kicker.prototype.js' )
);
article_kicker.article_kicker_classes =
	'lrv-u-padding-b-050 lrv-u-border-b-1 lrv-u-text-transform-uppercase';
article_kicker.article_kicker_link_classes = 'lrv-a-unstyle-link';
o_card_prototype.article_kicker_outer_classes = 'lrv-u-padding-tb-1@desktop-xl';
o_card_prototype.article_kicker = article_kicker;

const o_card_1 = clonedeep( o_card_prototype );
o_card_1.c_dek = false;
o_card_1.article_kicker.article_kicker_text = 'Exclusive';
o_card_1.c_title.c_title_text =
	' It Started With Thirst Traps on TikTok. Now, She’s Accused of Running a BDSM Cult';
o_card_1.article_kicker_outer_classes =
	'lrv-a-font-basic-l lrv-a-glue-parent lrv-u-background-color-white lrv-u-flex lrv-u-padding-b-1 lrv-u-padding-l-1@mobile-max lrv-u-padding-r-1 lrv-u-padding-t-1@desktop-xl lrv-u-padding-t-1@mobile-max lrv-u-text-transform-uppercase u-margin-t-n187@desktop-xl u-margin-t-n187@mobile-max u-z-index-middle-bottom';
o_card_1.article_kicker.article_kicker_classes += ' lrv-a-font-basic-l';
o_card_1.c_title.c_title_classes =
	'lrv-a-font-primary-xl lrv-u-padding-t-150@mobile-max lrv-u-padding-b-1@mobile-max lrv-u-padding-t-050@tablet lrv-u-padding-b-075@tablet';
o_card_1.o_author.o_author_classes =
	'lrv-a-font-body-s lrv-u-text-transform-uppercase lrv-u-color-black';
o_card_1.o_card_classes =
	'lrv-u-flex@tablet lrv-u-flex-direction-column@desktop-xl';
o_card_1.o_card_image_wrap_classes =
	'lrv-u-flex-basis-100p lrv-u-margin-r-175@tablet lrv-u-margin-r-00@desktop-xl';
o_card_1.o_card_content_classes =
	'lrv-u-align-items-start lrv-u-flex lrv-u-flex-basis-100p lrv-u-flex-direction-column lrv-u-padding-l-150@mobile-max lrv-u-padding-r-150@mobile-max';
o_card_1.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-3x2';

const o_card_2 = clonedeep( o_card_prototype );

o_card_2.article_kicker.article_kicker_text = 'AMERICAN MILITIA';
o_card_2.c_title.c_title_text =
	'Meet the Oath Keeper on the NRA’s Board of Directors';
o_card_2.c_dek.c_dek_text =
	' Links between the notorious militia and the gun lobby run deep';
o_card_2.c_dek.c_dek_classes =
	'lrv-u-margin-tb-075@desktop-xl lrv-a-hidden@desktop-max lrv-a-hidden@desktop-xl-max lrv-a-font-body-l lrv-a-truncate-ellipsis-5line';
o_card_2.article_kicker.article_kicker_classes += ' lrv-a-font-basic-xs ';
o_card_2.article_kicker_outer_classes =
	'lrv-u-padding-b-075 lrv-u-padding-b-125@desktop-xl lrv-u-padding-t-1@desktop-xl';
o_card_2.c_title.c_title_classes =
	'lrv-u-padding-b-075@mobile-max lrv-a-font-primary-m lrv-u-padding-t-125@mobile-max';
o_card_2.o_author.o_author_classes =
	'lrv-a-font-body-xs lrv-u-text-transform-uppercase lrv-u-color-black';
o_card_2.c_lazy_image.c_lazy_image_crop_class =
	'lrv-a-crop-1x1@tablet lrv-a-crop-3x2@desktop-xl lrv-a-crop-3x2@mobile-max';
o_card_2.c_lazy_image.c_lazy_image_classes = 'lrv-u-width-100p';
o_card_2.o_card_classes =
	'lrv-u-margin-l-00@desktop-xl lrv-u-flex-basis-100p lrv-u-flex-direction-column@desktop-xl lrv-a-space-children--1 lrv-a-space-children--0@desktop-xl lrv-u-border-t-1@mobile-max lrv-u-padding-t-2@mobile-max lrv-a-space-children-horizontal@tablet lrv-u-flex@tablet';
o_card_2.o_card_content_classes =
	'lrv-u-align-items-start lrv-u-flex lrv-u-flex-direction-column lrv-u-padding-b-150@mobile-max lrv-u-padding-t-1@mobile-max';

const o_card_3 = clonedeep( o_card_prototype );

o_card_3.article_kicker.article_kicker_text = 'YACHT ROCK';
o_card_3.c_title.c_title_text =
	'Welcome to Jenny Lewis’ Yacht-Rock Era. It’s Nice Here';
o_card_3.c_dek.c_dek_text =
	'“Puppy and a Truck” is all about the unconditional love that only a dog and a vehicle can provide';
o_card_3.c_dek.c_dek_classes =
	'lrv-u-margin-tb-075@desktop-xl lrv-a-hidden@desktop-max lrv-a-hidden@desktop-xl-max lrv-a-font-body-l lrv-a-truncate-ellipsis-5line';
o_card_3.article_kicker.article_kicker_classes += ' lrv-a-font-basic-xs ';
o_card_3.article_kicker_outer_classes =
	'lrv-u-padding-b-075 lrv-u-padding-b-125@desktop-xl lrv-u-padding-t-1@desktop-xl';
o_card_3.c_title.c_title_classes =
	'lrv-u-padding-b-075@mobile-max lrv-a-font-primary-m lrv-u-padding-t-125@mobile-max';
o_card_3.o_author.o_author_classes =
	'lrv-a-font-body-xs lrv-u-text-transform-uppercase lrv-u-color-black';
o_card_3.c_lazy_image.c_lazy_image_crop_class =
	'lrv-a-crop-1x1@tablet lrv-a-crop-3x2@desktop-xl lrv-a-crop-3x2@mobile-max';
o_card_3.c_lazy_image.c_lazy_image_classes = 'lrv-u-width-100p';
o_card_3.o_card_classes =
	'lrv-a-space-children--1 lrv-a-space-children--2@desktop-xl lrv-a-space-children-horizontal  lrv-u-flex-basis-100p lrv-u-border-t-0@desktop-xl lrv-u-border-t-1@tablet lrv-u-flex-direction-column@desktop-xl lrv-u-flex@tablet lrv-u-margin-t-00@desktop-xl lrv-u-margin-t-150@tablet lrv-u-padding-t-00@desktop-xl lrv-u-padding-t-150@tablet';
o_card_3.o_card_content_classes =
	'lrv-u-margin-l-00@mobile-max lrv-u-margin-l-00@desktop-xl lrv-u-align-items-start lrv-u-flex lrv-u-flex-direction-column lrv-u-padding-b-150@mobile-max lrv-u-padding-t-1@mobile-max';

const o_card_4 = clonedeep( o_card_prototype );

o_card_4.c_dek = false;
o_card_4.c_lazy_image = false;
o_card_4.article_kicker_outer_classes =
	' lrv-u-color-brand-primary lrv-u-display-inline';
o_card_4.article_kicker.article_kicker_classes =
	' lrv-a-font-primary-m article-kicker lrv-u-display-inline';
o_card_4.c_title.c_title_classes = 'lrv-a-font-primary-m lrv-u-display-inline';
o_card_4.c_title.c_title_link_classes =
	'lrv-a-unstyle-link lrv-u-color-brand-primary:hover';
o_card_4.o_author.o_author_classes =
	' lrv-u-display-inline lrv-a-font-primary-m lrv-u-color-grey-light';
o_card_4.o_card_content_classes = '';
o_card_4.o_card_classes =
	' lrv-u-flex-basis-40p lrv-u-margin-r-2@tablet lrv-u-border-t-1@mobile-max lrv-u-padding-t-2@mobile-max lrv-u-margin-t-175@desktop-xl lrv-u-padding-t-175@desktop-xl lrv-u-border-t-1@desktop-xl lrv-u-margin-r-00@desktop-xl lrv-u-border-t-1@desktop-xl';
o_card_4.c_lazy_image.c_lazy_image_crop_class = 'lrv-a-crop-3x2';

const o_card_5 = clonedeep( o_card_1 );

o_card_5.article_kicker.article_kicker_text = 'INSIDE LOOK';
o_card_5.c_title.c_title_text =
	'40 Watt Sun Raise the Emotional Stakes While Turning Down the Volume on New Chamber-Folk Epic';
o_card_5.o_card_classes =
	'lrv-u-padding-r-2@tablet lrv-u-padding-b-150@mobile-max lrv-u-flex-basis-50p lrv-u-border-r-1@tablet ';
o_card_5.article_kicker_outer_classes =
	' lrv-a-glue-parent lrv-u-background-color-white lrv-u-padding-b-1 lrv-u-padding-r-1 lrv-u-padding-t-1';
o_card_5.article_kicker.article_kicker_classes += ' lrv-a-font-basic-xs ';
o_card_5.o_card_content_classes =
	' lrv-u-align-items-start lrv-u-flex lrv-u-flex-basis-100p@desktop-xl-max lrv-u-flex-direction-column lrv-u-padding-l-150@mobile-max lrv-u-padding-r-150@mobile-max';
o_card_5.c_title.c_title_classes =
	'lrv-u-padding-t-00@desktop-xl lrv-u-padding-b-075 lrv-u-padding-t-1@mobile-max lrv-a-font-primary-xl lrv-u-padding-t-025';
o_card_5.o_card_image_wrap_classes = 'lrv-u-flex-basis-100p@desktop-xl-max  ';

const o_card_6 = clonedeep( o_card_prototype );

o_card_6.article_kicker.article_kicker_text = 'EXCLUSIVE';
o_card_6.c_title.c_title_text =
	'Marilyn Manson: The Monster Hiding in Plain Sight';
o_card_6.c_dek.c_dek_text =
	'He was a provocative media darling for decades. Offstage, exes allege, he was an abuser who made their lives hell. A Rolling Stone investigation based on court documents and more than 55 new interviews';
o_card_6.c_lazy_image = false;
o_card_6.c_dek.c_dek_classes =
	'lrv-a-font-body-l lrv-a-truncate-ellipsis-5line lrv-u-margin-b-1@desktop-xl lrv-u-margin-t-075@desktop-xl lrv-u-margin-tb-075@mobile-max';
o_card_6.article_kicker.article_kicker_classes += ' lrv-a-font-basic-l';
o_card_6.article_kicker_outer_classes = 'lrv-u-padding-b-125@desktop-xl';
o_card_6.c_title.c_title_classes =
	'lrv-u-padding-t-1 lrv-a-font-primary-l lrv-u-padding-t-00@desktop-xl';
o_card_6.o_author.o_author_classes =
	'lrv-a-font-body-xs lrv-u-text-transform-uppercase lrv-u-color-black';
o_card_6.o_card_classes =
	'lrv-u-padding-l-2@tablet lrv-u-padding-l-150@mobile-max lrv-u-padding-r-150@mobile-max lrv-u-flex-basis-50p';
o_card_6.o_card_content_classes =
	'lrv-u-align-items-start lrv-u-border-b-1@mobile-max lrv-u-border-t-1@mobile-max lrv-u-flex lrv-u-flex-direction-column lrv-u-margin-b-2@mobile-max lrv-u-padding-b-2@mobile-max lrv-u-padding-t-2@mobile-max';

module.exports = {
	stories: [ o_card_1, o_card_2, o_card_3, o_card_4, o_card_5, o_card_6 ],
	secondary_stories_classes: '',
	stories_content_primary_classes: 'lrv-u-border-t-6',
	stories_content_primary_inner_classes:
		'lrv-u-padding-b-150@tablet lrv-u-padding-b-3@desktop-xl lrv-u-margin-b-250@mobile-max lrv-u-padding-t-150@mobile-max lrv-u-padding-t-150 lrv-u-border-t-2 lrv-u-flex lrv-u-margin-t-025 lrv-a-space-children--3@desktop-xl lrv-a-space-children-horizontal lrv-u-flex-direction-column lrv-u-flex-direction-row@desktop-xl lrv-u-padding-t-250@desktop-xl',
	stories_card_primary_classes:
		' lrv-u-flex-basis-45p lrv-u-padding-b-150 lrv-u-padding-b-00@desktop-xl',
	stories_card_secondary_classes:
		' lrv-u-flex lrv-u-padding-l-150@mobile-max lrv-u-padding-r-150@mobile-max lrv-u-border-t-1@tablet lrv-u-padding-t-00@mobile-max lrv-u-flex-direction-column@mobile-max lrv-u-flex-direction-row-reverse lrv-u-flex-basis-55p lrv-u-flex-direction-column@desktop-xl lrv-u-padding-t-150 lrv-u-padding-t-00@desktop-xl lrv-u-border-t-0@desktop-xl',
	stories_card_secondary_inner_classes:
		'  lrv-u-flex-basis-60p lrv-u-padding-t-00@desktop-xl lrv-u-border-t-0@desktop-xl lrv-a-space-children--2@desktop-xl lrv-a-space-children-horizontal@desktop-xl lrv-u-flex lrv-u-flex-direction-column lrv-u-flex-direction-row@desktop-xl',
	stories_content_secondary_classes: 'lrv-u-border-t-6',
	stories_content_secondary_inner_classes:
		' lrv-u-padding-t-150@tablet lrv-u-border-t-2 lrv-u-flex@tablet lrv-u-margin-t-025 lrv-u-padding-t-150@mobile-max lrv-u-padding-tb-250@desktop-xl',
};

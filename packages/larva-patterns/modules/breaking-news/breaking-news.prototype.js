const clonedeep = require( 'lodash.clonedeep' );

const c_heading = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-heading/c-heading.prototype' )
);
const c_title = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-title/c-title.prototype' )
);
const c_icon = clonedeep(
	require( '@penskemediacorp/larva-patterns/components/c-icon/c-icon.prototype' )
);

c_heading.c_heading_text = 'Breaking News';
c_heading.c_heading_classes =
	'lrv-u-margin-b-050@mobile-max lrv-u-margin-r-1 lrv-a-font-secondary-bold-l lrv-u-text-transform-uppercase';

c_title.c_title_text =
	'US Stadiums Partnership, Inc. Files for Bankruptcy Amid Historic Cancellations';
c_title.c_title_classes =
	'lrv-u-font-size-18 lrv-u-line-height-copy lrv-u-font-weight-normal lrv-u-font-family-basic';
c_title.c_title_link_classes = 'lrv-a-unstyle-link ';

c_icon.c_icon_link_classes =
	'dismiss-news-banner lrv-u-margin-l-auto lrv-u-width-16 lrv-u-height-16 lrv-u-color-white lrv-u-cursor-pointer lrv-u-color-white:hover';
c_icon.c_icon_url = '#';
c_icon.c_icon_target_attr = false;
c_icon.c_icon_name = 'close';
c_icon.c_icon_link_screen_reader_text = false;
c_icon.c_icon_screen_reader_text = 'close';
c_icon.c_icon_screen_reader_title_attr = 'close';

module.exports = {
	breaking_news_classes:
		'lrv-u-background-color-brand-primary lrv-u-color-white',
	breaking_news_inner_classes:
		'lrv-a-wrapper lrv-u-flex lrv-u-flex-direction-column@mobile-max lrv-u-align-items-center lrv-u-padding-tb-1',
	c_heading,
	c_title,
	c_icon,
};

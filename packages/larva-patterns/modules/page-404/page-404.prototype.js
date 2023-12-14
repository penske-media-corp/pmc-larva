const clonedeep = require( 'lodash.clonedeep' );

const c_heading_prototype = require( '@penskemediacorp/larva-patterns/components/c-heading/c-heading.prototype' );
const c_heading = clonedeep( c_heading_prototype );

const c_svg_prototype = require( '../../components/c-svg/c-svg.prototype.js' );
const c_svg = clonedeep( c_svg_prototype );

const c_title_prototype = require( '@penskemediacorp/larva-patterns/components/c-title/c-title.prototype' );
const c_title = clonedeep( c_title_prototype );

const c_button_prototype = require( '@penskemediacorp/larva-patterns/components/c-button/c-button.prototype' );
const c_button_home = clonedeep( c_button_prototype );
const c_button_search = clonedeep( c_button_prototype );

c_heading.c_heading_text = '404';
c_heading.c_heading_classes = 'lrv-a-screen-reader-only';
c_heading.c_heading_is_primary_heading = true;

c_svg.c_svg_name = 'logo-404';
c_svg.c_svg_classes = 'lrv-u-max-width-100p';

c_title.c_title_text = 'OOPS! Something went wrong here!';
c_title.c_title_classes =
	'lrv-a-font-secondary-l lrv-u-text-transform-uppercase lrv-u-margin-b-125';
c_title.c_title_url = false;

c_button_home.c_button_text = 'Back To Homepage';
c_button_home.c_button_url = '/';
c_button_home.c_button_classes +=
	' lrv-u-background-color-black lrv-u-margin-lr-075 lrv-u-text-transform-uppercase lrv-u-font-weight-bold u-background-color-brand-primary-dark:hover lrv-u-color-white lrv-u-color-white:hover lrv-u-padding-tb-050 lrv-u-padding-lr-1';

c_button_search.c_button_text = 'Head To Search';
c_button_search.c_button_url = '#';
c_button_search.c_button_classes +=
	' lrv-u-background-color-black lrv-u-margin-lr-075 lrv-u-text-transform-uppercase lrv-u-font-weight-bold u-background-color-brand-primary-dark:hover lrv-u-color-white lrv-u-color-white:hover lrv-u-padding-tb-050 lrv-u-padding-lr-1 lrv-u-margin-t-050@mobile-max';

module.exports = {
	c_heading,
	c_title,
	c_button_home,
	c_button_search,
	c_svg,
	wrapper_classes:
		'lrv-u-text-align-center lrv-u-padding-t-1 lrv-u-padding-b-2 lrv-u-margin-b-2 lrv-u-max-width-830 lrv-u-margin-lr-auto',
	page_404_inner_classes: 'lrv-u-margin-lr-auto lrv-u-padding-lr-1',
	button_outer_classes:
		'lrv-u-flex lrv-u-justify-content-center lrv-u-align-items-center lrv-u-flex-direction-column@mobile-max',
};

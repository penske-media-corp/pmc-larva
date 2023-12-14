const clonedeep = require( 'lodash.clonedeep' );

const c_timestamp_prototype = require( '@penskemediacorp/larva-patterns/components/c-timestamp/c-timestamp.prototype' );

const c_timestamp = clonedeep( c_timestamp_prototype );
c_timestamp.c_timestamp_classes =
	'lrv-u-display-inline-block lrv-u-color-black lrv-u-font-size-14 lrv-u-text-transform-uppercase';
c_timestamp.c_timestamp_text = 'September 3, 2019 7:51pm';
c_timestamp.c_timestamp_datetime_attr = '2019-09-03';

module.exports = {
	article_timestamp_classes:
		'lrv-u-display-block lrv-u-margin-t-050@mobile-max',
	c_timestamp,
};

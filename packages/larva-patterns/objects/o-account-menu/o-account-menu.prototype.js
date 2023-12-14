const clonedeep = require( 'lodash.clonedeep' );

const c_link_prototype = require( '../../components/c-link/c-link.prototype' );
const c_span_prototype = require( '../../components/c-span/c-span.prototype' );

const c_welcome_span = clonedeep( c_span_prototype );
c_welcome_span.c_span_classes =
	'subscriber-name lrv-a-font-body lrv-u-color-black lrv-u-font-size-12 lrv-u-text-transform-uppercase';
c_welcome_span.c_span_text = 'Welcome Name';
c_welcome_span.c_span_link_classes =
	'lrv-u-color-black lrv-u-color-brand-primary:hover';
c_welcome_span.c_span_url = '#';

const c_account_link = clonedeep( c_link_prototype );
c_account_link.c_link_text = 'Account';
c_account_link.c_link_classes =
	'subscriber-account-link lrv-u-font-family-body lrv-u-font-size-12 lrv-u-font-size-8@mobile-max lrv-a-icon-after lrv-a-icon-arrow-down lrv-a-unstyle-link lrv-u-border-b-1 lrv-u-border-color-brand-primary:hover lrv-u-border-color-white lrv-u-color-brand-primary:hover lrv-u-text-transform-uppercase';

const c_manage_account = clonedeep( c_link_prototype );
c_manage_account.c_link_text = 'Manage Account';
c_manage_account.c_link_classes =
	'subscriber-self-care-link lrv-u-text-transform-uppercase lrv-a-font-secondary lrv-u-color-black lrv-u-font-size-12 lrv-u-width-100 lrv-u-text-align-center lrv-u-color-brand-primary:hover';

const c_log_out = clonedeep( c_link_prototype );
c_log_out.c_link_text = 'Sign Out';
c_log_out.c_link_classes =
	'subscriber-logout-link lrv-a-font-secondary lrv-u-color-black lrv-u-color-brand-primary:hover lrv-u-font-size-12 lrv-u-text-transform-uppercase';

module.exports = {
	o_account_menu_classes: 'js-Tooltip-parent lrv-a-glue-parent lrv-u-flex',
	o_account_content_classes:
		'js-Tooltip lrv-a-glue lrv-a-glue--t-100p lrv-u-box-shadow-medium',
	o_account_content_inner_classes:
		'lrv-a-glue-parent lrv-a-icon-after-arrow-top-left lrv-u-background-color-white lrv-u-border-a-2 lrv-u-flex lrv-u-flex-direction-column lrv-u-text-align-left lrv-u-flex-wrap-wrap lrv-u-margin-t-1 lrv-u-padding-tb-050 lrv-u-padding-lr-150 lrv-u-width-200',
	o_account_welcome_span_classes: 'lrv-u-border-b-1 lrv-u-padding-tb-050',
	o_account_manage_account_classes: 'lrv-u-border-b-1 lrv-u-padding-tb-050',
	o_account_logout_classes: 'lrv-u-padding-tb-050',
	c_welcome_span,
	c_account_link,
	c_manage_account,
	c_log_out,
};

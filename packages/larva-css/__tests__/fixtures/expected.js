module.exports = {
	ruleset: `
.lrv-a-font-primary-xxl {
	// Define this token locally; it can be defined via larva-tokens, if needed in the future.
	--font-family: var( --font-family-primary );

	font-family: var( --font-family );
	font-size: var( --primary-xxl-font-size-mobile );
	line-height: var( --primary-xxl-line-height-mobile );
	letter-spacing: var( --primary-xxl-letter-spacing-mobile );
	font-weight: var( --primary-xxl-font-weight-mobile );
	font-style: var( --primary-xxl-font-style-mobile );

	@media (min-width: 800px) {
		font-size: var( --primary-xxl-font-size-desktop );
		line-height: var( --primary-xxl-line-height-desktop );
		letter-spacing: var( --primary-xxl-letter-spacing-desktop );
		font-weight: var( --primary-xxl-font-weight-desktop );
		font-style: var( --primary-xxl-font-style-desktop );

	}
	@media (min-width: 1200px) {
		font-size: var( --primary-xxl-font-size-desktopxl );
		line-height: var( --primary-xxl-line-height-desktopxl );
		letter-spacing: var( --primary-xxl-letter-spacing-desktopxl );
		font-weight: var( --primary-xxl-font-weight-desktopxl );
		font-style: var( --primary-xxl-font-style-desktopxl );

	}
}\n`,
};

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

	@media (min-width: $screen-desktop) {
		font-size: var( --primary-xxl-font-size-desktop );
		line-height: var( --primary-xxl-line-height-desktop );
		letter-spacing: var( --primary-xxl-letter-spacing-desktop );
		font-weight: var( --primary-xxl-font-weight-desktop );
		font-style: var( --primary-xxl-font-style-desktop );
	}
	@media (min-width: $screen-desktop-xl) {
		font-size: var( --primary-xxl-font-size-desktop-xl );
		line-height: var( --primary-xxl-line-height-desktop-xl );
		letter-spacing: var( --primary-xxl-letter-spacing-desktop-xl );
		font-weight: var( --primary-xxl-font-weight-desktop-xl );
		font-style: var( --primary-xxl-font-style-desktop-xl );
	}
}\n`,
};

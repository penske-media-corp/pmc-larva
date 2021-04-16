module.exports = {
	ruleset: `
.lrv-a-font-primary-xxl {
	--font-size-desktop: var( --primary-xxl-font-size-desktop, var( --primary-xxl-font-size-mobile ) );
	--font-size-mobile: var(--is-desktop) var( --primary-xxl-font-size-mobile);
	--line-height-desktop: var( --primary-xxl-line-height-desktop, var( --primary-xxl-line-height-mobile ) );
	--line-height-mobile: var(--is-desktop) var( --primary-xxl-line-height-mobile);
	--letter-spacing-desktop: var( --primary-xxl-letter-spacing-desktop, var( --primary-xxl-letter-spacing-mobile ) );
	--letter-spacing-mobile: var(--is-desktop) var( --primary-xxl-letter-spacing-mobile);
	--font-weight-desktop: var( --primary-xxl-font-weight-desktop, var( --primary-xxl-font-weight-mobile ) );
	--font-weight-mobile: var(--is-desktop) var( --primary-xxl-font-weight-mobile);
	--font-style-desktop: var( --primary-xxl-font-style-desktop, var( --primary-xxl-font-style-mobile ) );
	--font-style-mobile: var(--is-desktop) var( --primary-xxl-font-style-mobile);

	// Define this token locally; it can be defined via larva-tokens, if needed in the future.
	--font-family: var( --font-family-primary );

	font-family: var( --font-family );

	font-size: var(
		--font-size-mobile,
		var(--font-size-desktop)
	);
	line-height: var(
		--line-height-mobile,
		var(--line-height-desktop)
	);
	letter-spacing: var(
		--letter-spacing-mobile,
		var(--letter-spacing-desktop)
	);
	font-weight: var(
		--font-weight-mobile,
		var(--font-weight-desktop)
	);
	font-style: var(
		--font-style-mobile,
		var(--font-style-desktop)
	);
}\n`,
};

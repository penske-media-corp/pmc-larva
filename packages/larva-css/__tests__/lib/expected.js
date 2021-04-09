module.exports = {
	ruleset: `
.lrv-a-font-primary-xxl {
	--font-size-desktop: var( --primary-xxl-font-size-desktop, var( --primary-xxl-font-size-base ) );
	--font-size-base: var(--desktop-off) var( --primary-xxl-font-size-base);
	--line-height-desktop: var( --primary-xxl-line-height-desktop, var( --primary-xxl-line-height-base ) );
	--line-height-base: var(--desktop-off) var( --primary-xxl-line-height-base);
	--letter-spacing-desktop: var( --primary-xxl-letter-spacing-desktop, var( --primary-xxl-letter-spacing-base ) );
	--letter-spacing-base: var(--desktop-off) var( --primary-xxl-letter-spacing-base);
	--font-weight-desktop: var( --primary-xxl-font-weight-desktop, var( --primary-xxl-font-weight-base ) );
	--font-weight-base: var(--desktop-off) var( --primary-xxl-font-weight-base);
	--font-style-desktop: var( --primary-xxl-font-style-desktop, var( --primary-xxl-font-style-base ) );
	--font-style-base: var(--desktop-off) var( --primary-xxl-font-style-base);
	--font-family-desktop: var( --primary-xxl-font-family-desktop, var( --primary-xxl-font-family-base ) );
	--font-family-base: var(--desktop-off) var( --primary-xxl-font-family-base);

	font-size: var(
		--font-size-base,
		var(--font-size-desktop)
	);
	line-height: var(
		--line-height-base,
		var(--line-height-desktop)
	);
	letter-spacing: var(
		--letter-spacing-base,
		var(--letter-spacing-desktop)
	);
	font-weight: var(
		--font-weight-base,
		var(--font-weight-desktop)
	);
	font-style: var(
		--font-style-base,
		var(--font-style-desktop)
	);
	font-family: var(
		--font-family-base,
		var(--font-family-desktop)
	);
}\n`
}
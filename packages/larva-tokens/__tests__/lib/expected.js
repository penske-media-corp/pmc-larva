module.exports = {
	ruleset: `
.lrv-a-font-primary-xxxl {
	--font-size-desktopxl: var(--primary-xxxl-font-size-desktopxl, var( --primary-xxxl-font-size-desktop ) );
	--font-size-desktop: var(--desktopxl-off) var( --primary-xxxl-font-size-desktop, var( --primary-xxxl-font-size-base ) );
	--font-size-base: var(--desktop-off) var(--desktopxl-off) var( --primary-xxxl-font-size-base);
	--line-height-desktopxl: var(--primary-xxxl-line-height-desktopxl, var( --primary-xxxl-line-height-desktop ) );
	--line-height-desktop: var(--desktopxl-off) var( --primary-xxxl-line-height-desktop, var( --primary-xxxl-line-height-base ) );
	--line-height-base: var(--desktop-off) var(--desktopxl-off) var( --primary-xxxl-line-height-base);
	--letter-spacing-desktopxl: var(--primary-xxxl-letter-spacing-desktopxl, var( --primary-xxxl-letter-spacing-desktop ) );
	--letter-spacing-desktop: var(--desktopxl-off) var( --primary-xxxl-letter-spacing-desktop, var( --primary-xxxl-letter-spacing-base ) );
	--letter-spacing-base: var(--desktop-off) var(--desktopxl-off) var( --primary-xxxl-letter-spacing-base);
	--font-weight-desktopxl: var(--primary-xxxl-font-weight-desktopxl, var( --primary-xxxl-font-weight-desktop ) );
	--font-weight-desktop: var(--desktopxl-off) var( --primary-xxxl-font-weight-desktop, var( --primary-xxxl-font-weight-base ) );
	--font-weight-base: var(--desktop-off) var(--desktopxl-off) var( --primary-xxxl-font-weight-base);

	font-family: var( --font-family-primary );
	font-size: var(
		--font-size-base,
		var(--font-size-desktop, var(--font-size-desktopxl) )
	);
	line-height: var(
		--line-height-base,
		var(--line-height-desktop, var(--line-height-desktopxl) )
	);
	letter-spacing: var(
		--letter-spacing-base,
		var(--letter-spacing-desktop, var(--letter-spacing-desktopxl) )
	);
	font-weight: var(
		--font-weight-base,
		var(--font-weight-desktop, var(--font-weight-desktopxl) )
	);
}\n`
}
module.exports = {
	ruleset: `
.lrv-a-font-primary-xxl {
	font-family: var( --font-family );
	font-size: var( --primary-xxl-font-size-mobile );
	font-weight: var( --primary-xxl-font-weight-mobile );
	font-style: var( --primary-xxl-font-style-mobile );
	line-height: var(--primary-xxl-line-height-mobile );
	letter-spacing: var( --primary-xxl-letter-spacing-mobile );


	@media (min-width: 800px) {
		font-family: var( --font-family );
		font-size: var( --primary-xxl-font-size-desktop );
		font-weight: var( --primary-xxl-font-weight-desktop );
		font-style: var( --primary-xxl-font-style-desktop );
		line-height: var(--primary-xxl-line-height-desktop );
		letter-spacing: var( --primary-xxl-letter-spacing-desktop );
	}

	@media (min-width: 1200px) {
		font-family: var( --font-family );
		font-size: var( --primary-xxl-font-size-desktopxxl );
		font-weight: var( --primary-xxl-font-weight-desktopxxl );
		font-style: var( --primary-xxl-font-style-desktopxxl );
		line-height: var(--primary-xxl-line-height-desktopxxl );
		letter-spacing: var( --primary-xxl-letter-spacing-desktopxxl );
	}
}\n`,
};

# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unpublished Changes

## 1.59.0 12-12-2023
* Add Author Bio and Author Bio Item Modules.
* Add styles for grid and flex.
* Use Generic node version 18 in package.json and Remove NPM requirement.

## 1.58.3 11-14-2023
* Adds id attribute support for the `heading.twig` component.

## 1.58.2 11-13-2023
* Removed `console.log()` from `twig-to-php-parser` that was added for testing.
* Re-enabled space character encoding in `url-encode()` SCSS function (WordPress CSS minification compat).
* Fixed `str-replace()` SCSS function "freezing".

## 1.58.1 11-06-2023
* Updated Backstop reference images to 1.58.0 release.
* Switch Webpack config "query" JS rule that's throwing warnings and build errors out for "options"
* Bugfix: Remove ` ` (space) and `,` encoding from `inline-svg`'s `url-encode()` to fix misc base64 SVG inlining.

## 1.58.0 11-01-2023
* Update Node to 18 and fix incompatible dependencies, scripts, and GitHub actions
* larva-patterns - Add brand primary link styles to tag list module.
* larva-patterns - Reorder css class names of modules starting with letter `c` based on WP coding standards.

## 1.56.0 08-15-2023
* larva-patterns - Reorder css class names of modules starting with letter `a` based on WP coding standards.

## 1.55.0 08-08-2023
* larva-patterns - Clean up some classname order in footer-tip module.

## 1.54.0 08-08-2023
* larva-patterns - Add new modules and variants: `fact-list-item`, `fact-list-menu`, `fact-list`, `tag-list` and `term-content-top`. Add `a-term-content-grid` layout algorithm.
* larva-css - Add `a-term-content-grid` styles.

## 1.53.0 07-18-2023
* larva-patterns - Reorder css class names based on WP coding standards.

## 1.52.0 07-11-2023
* no changes.

## 1.51.0 06-20-2023
* no changes.

## 1.50.0 06-13-2023
* larva-patterns - Add `id` attribute for `paragraph` module.

## 1.49.0 05-30-2023
* larva-svg - Updated Flipboard logomark with 2023 version.
* larva-patterns - Add `smart` variant for `page-404` module.

## 1.48.1 04-25-2023
* Re-build larva JSON/versioning

## 1.48.0 04-25-2023
* larva-svg - Added Flipboard logomark.
* larva-scss - Added Flipboard brand color.
## 1.47.1 04-13-2023
* Re-build larva JSON/versioning

## 1.47.0 04-13-2023
* larva-patterns - Added suggested links and search form in page-404 module.

## 1.46.1 04-04-2023
* Fix package/lerna versions from failed 1.46.0 release

## 1.46.0 04-04-2023
* larva-js - Modified VideoShowcase JS.
* larva-patterns - Added extra attributes in o-video-card.
* larva-scss - Removed blocking CSS.

## 1.45.1 03-28-2023
* Re-build larva JSON/versioning

## 1.45.0 03-28-2023
* larva-scss - Make all `_color` hex values lowercase for consistency.
* Manually update lerna.json

## 1.44.0 03-28-2023
* larva-scss - Use `round` func when generating spacing utility classes to prevent errors when converting rems to pixels for class name.
* larva-patterns - Adding a support of Connatix player in o-video-card.
* larva-js - Updated VideoShowcase.js for adding a support of Connatix player.

## 1.43.1 02-21-2023
* Re-build larva JSON/versioning

## 1.43.0 02-21-2023
* larva-css - Remove misc. extraneous lines (#763)
* larva-css, larva-js, larva-patterns, larva - re-build with `prod`

## 1.42.3 02-01-2023
* larva-css - Add `cols; 5, 7, 10` and `span: 5, 6, 7, 8, 9` for Desktop and Tablet
## 1.42.2 01-31-2023
* larva-css - Add new `lrv-a-span` and `lrv-a-cols` utility classes.

## 1.42.1 01-24-2023
* larva-scss - Use `round` func when generating font size utility classes (via `@mixin u-font-size`) to prevent errors when converting rems to pixels for class name.
* larva-patterns - Add `separator_thickness_class` to modules/separator pattern.

## 1.42.0 01-17-2023
* larva-patterns - Add conditionally usable `rel` attribute to o-card object.

## 1.41.0 12-20-2022
* Please skip this release :)

## 1.40.1 12-14-2022
* larva-patterns - Replace H1 tag in banner module for screen reader text with a span tag.


## 1.40.0 11-15-2022
* larva-patterns - Add `product-grid` module.
* larva-patterns - Add `o-product-card` object.

## 1.39.0 11-4-2022
* larva-patterns - Add New `multiple-products` module.

## 1.38.1 11-2-2022
* larva-patterns - Add `c-title` link attr.

## 1.37.6 10-31-2022
* larva-tokens - Update larva tokens for font primary on mobile.

## 1.37.5 10-31-2022
* larva-tokens - Update larva tokens for spy-2022.

## 1.37.4 10-30-2022
* larva-patterns - Add wrapper class names for product card.


## 1.37.3 10-29-2022
* larva-patterns - Make `product_card_price_outside` property applicable to individual buttons instead of common value.

## 1.37.2 10-27-2022
* larva-patterns - Remove extra closing div from `faq` module.
* larva-tokens - Update larva tokens for spy-2022.

## 1.37.0 10-25-2022
* larva-patterns - Add New `pros-and-cons` module

## 1.36.0 10-11-2022
* larva-patterns - Add New `how-we-test-products` module.

## 1.35.0 10-11-2022
* larva-patterns - Add New `table-of-contents` module and add `c_nav_link_title_attr` and `c_nav_link_markup` properties to c-nav-link component.

## 1.34.0 10-03-2022
* larva-patterns - New `c_tagline_terms` property for `footer-newsletter`, `mega-menu-footer`, and `newsletter` (widget) modules (for reCAPTCHA/newsletter compatibility)
* larva-patterns - add `faq` and `o-faq-item` pattern.

## 1.33.0 09-29-2022
* larva-patterns - New `product-card` module.
* larva-css - Add new `lrv-u-text-decoration-line-through` utility class.
* larva-patterns - Update `product-card` module and add support for multiple buy now buttons.

## 1.32.0 09-27-2022
* larva-patterns - Update `mega-menu-footer` and `mega-menu-item` to include secondary footer and button respectively.

## 1.31.0 09-19-2022
* larva-patterns - Add `newsletter_cta_inner_classes` variable to newsletter CTA inner wrapper.
* larva-patterns - Add `c_timestamp_markup` variable to timestamp component.
* larva-patterns - Update `heading` & `post-content-image` module to include animation class.

## 1.30.0 09-15-2022
* larva-patterns - Update `paragraph` module to include animation class.

## 1.29.0 09-14-2022
* larva-patterns - Modify `banner` module to accomodate `c_tagline` component.
* larva-patterns - Update `section-heading` module padding and width.

## 1.28.0 09-12-2022
* larva-css - Revert changes which we had done for CSS generator to use desktop font size on side skins.
* larva-tokens - Update style guide tokens for spy-2022.

## 1.27.0 09-08-2022
* larva-patterns - Add `narrow` variant for `container` module.
* larva-patterns - Add `c_tagline_terms` support to footer-newsletter module.
* larva-patterns - Wrap `footer-social` and `footer-newsletter` components in an if block.
* larva-css - Add border style variable to `a-children-border-*` algorithm
* larva-tokens - Add larva tokens for spy-2022.

## 1.26.0 09-01-2022
* larva - Add repo-wide JS linting and apply auto-linting fixes.

## 1.25.0 08-23-2022
* larva-css - Add editor-styles-wrapper class to override backend link color.

## 1.24.1 08-22-2022
* publish failed, creating temp version

## 1.24.0 08-19-2022
* larva-css - Update CSS generator to use desktop font size on side skins.
* larva-patterns - Add class class for sub-header inner

## 1.23.0 08-17-2022
* larva-patterns - Add `extended` variant for `pullquote` module.
* larva-tokens - Update color accent tokens for Billboard Espanol.

## 1.22.1
* larva-patterns - Updating `gallery` wrapper classes.
* larva-tokens - Update rollingstone-2022 font tokens.
* larva-tokens - Update primary color token for Billboard Espanol.

## 1.22.0 08-09-2022
* larva-patterns - Add `featured` variant for `pullquote` module.

## 1.21.0 08-09-2022
* larva-patterns - Add `decoding` attribute to `c-lazy-image`.

## 1.20.0 08-08-2022
* larva-js - Add `firstVideoPlay` custom event for video showcase js.
* larva-css - Add lrv-a-glue@desktop Utility.

## 1.19.0 08-08-2022
* larva-tokens - Billboard Español `bbesp.json`

## 1.18.0 08-04-2022
* larva-tokens - Update font tokens for rollingstone-2022.
* larva-css - Add `table-layout`, `word-break`, `lrv-u-border-collapse`, `lrv-u-overflow-x-auto`, `lrv-u-overflow-y-auto` utility classes.
* larva-patterns - Add `cover` module.
* larva-patterns - Add `table` module.
* larva-patterns - Add `gallery` module.
* larva-tokens - Minify tokens CSS files.

## 1.17.0 08-04-2022
* larva-tokens - Update Basic XS font tokens for rollingstone-2022.
* larva-patterns - Add `c-figcaption` component support to `o-card` object.
* larva-patterns - Add `fill` and `outline` variant for `button` module.
* larva-js - Add support for Twitch in Featured Media.

## 1.16.0 - 07-28-2022
* larva-patterns - Add `double-line` and `thick-double-line` variants for `separator` module.
* larva-css - Add `lrv-u-border-t-20` and `height` utility classes.

## 1.15.0 - 07-26-2022
* larva-tokens - Adjust font weight from "700" to "400" (normal) in Variety tokens.
* larva-tokens - Update font tokens for rollingstone-2022.
* larva-patterns - Add `video-slider` module.
* larva-css - Fix typo for `lrv-u-align-items-flex-end` utility
* larva-js - Add support for pagedots to Flickity js.

## 1.14.0 - 07-20-2022
* larva-patterns - Add `profile-block` module.
* larva-patterns - Updating `secondary-stories` kicker classes.
* larva-patterns - Add tabindex support to `o-nav` object.
* larva-patterns - Add `lrv-js-Navigable` class to `pmc-footer` module to make it accessible.
* larva-js - Add `Navigable` js to support keyboard tab navigation for `o-nav` object.
* larva-tokens - Update Rollingstone-2022 tokens as per new styleguide.
* twig-to-php-parser - Addresses phpcs concerns, general cleanup.
* twig-to-php-parser - Updates parse support for nested if and foreach loops.

## 1.12.0 - 07-08-2022
* larva-patterns - Update `c-figcaption` module to add support for image credit text with html markup.

## 1.11.0 - 07-08-2022
* larva-tokens - Adjust font size, font weight and line height in variety tokens.

## 1.10.0 - 07-05-2022
* larva-patterns - Add `section-heading` module.
* larva-js - Remove `Header` js.
* larva-css - Remove `js-Header` css.
* larva-patterns - Add support for `c-tagline` to `o-author` object.

## 1.9.0 -06-21-2022
* larva-patterns - Add `featured-video` module.
* larva-objects - Add `o-video-card` and `o-category-link` object.
* larva-patterns - Update `linked-gallery` module to add support for thumbnails url.
* larva-tokens - Add a new `font-family-accent` token to VIBE.

## 1.8.0 - 06-20-2022
* larva-tokens - Adjust font size, font weight and line height in variety tokens.

## 1.7.2 - 06-13-2022
* lava-patterns - Add span option to `o-icon-button` object.
* larva-patterns - Add `linked-gallery` module.
* larva-css - Add css `lrv-u-left-50p@desktop`, `lrv-u-position-absolute@desktop`, `lrv-u-top-n33@desktop`, `lrv-u-transform-translateX-n50p@desktop` & `lrv-u-width-38p` utility classes.

## 1.7.1 - 06-09-2022
* larva-js - Videoshowcase JWplayer add support for autoplay.

## 1.7.0 - 06-08-2022
* larva-patterns - Updated `secondary-stories` prototype.
* larva-css - Add `lrv-u-flex-direction-row-reverse`, `lrv-u-flex-direction-row\@desktop-xl` utility classes.
* larva-patterns - Add `author-blurb` module.
* larva-css - Add `lrv-u-border-b-1@tablet`, `lrv-u-display-table\@desktop`, `lrv-u-flex\@desktop-max`, `lrv-u-flex-direction-column\@desktop-max`, `lrv-u-order-n1\@mobile-max` utility classes.
* larva-patterns - update `content-showcase` module and its `the-moth` variant.

## 1.6.1 - 06-08-2022
* larva-patterns - Fix `production credits` module for pipeline.

## 1.6.0 - 6-07-2022
* larva-patterns - Add `production credits` module.
* larva-patterns - Add `page-404` module.
* larva-css - Add utility classes for `padding`.

## 1.5.0 - 6-06-2022
* larva-js - Fix JS issue with VideoShowcase.

## 1.4.0 - 6-03-2022
* larva-patterns - Add `narrow` variant for `paragraph` module.
* larva-patterns - Add `xl` variant for `top-stories` module.
* larva-patterns - Add `article-timestamp` module.
* larva-patterns - Updates to  `story-featured-quote` module.1

## 1.3.0 - 5-25-2022
* larva-css - Add `lrv-u-filter-grayscale-100` class.
* larva-patterns - Add `hero-image-story` module.
* larva-css - Add `lrv-a-glue--b-unset\@mobile-max` class.
* larva-css -Add utility classes for `padding` and `a-screen-reader-only`
* larva-patterns - Use `article_kicker` in featured stories module.

## 1.2.0 - 05-24-2022
* larva-patterns - Add classes and update README.md for `age-gate` module.

## 1.1.3 - 05-23-2022
* larva-patterns - Add `buy-now` module.

## 1.1.2 - 05-19-2022
* larva-patterns - Add SVG support for Article Kicker module.
* larva-patterns - Add `secondary-stories` module.
* larva-css - Add utility classes for `crop`, `space-children`, `border`, `margin`, `padding` and `flex`.
* larva-patterns - Add `breaking-news` module.

## 1.1.1 - 05-17-2022
* all - Add comment with helpful info for regression test failures.
* larva-patterns - Add `special-coverage` module.

## 1.1.0 - 05-17-2022
* larva-css - Add utility classes for `overflow` and `flex-shrink`.
* larva-patterns - Add `the-moth` variant for `content-showcase` module.
* larva-css - Add `lrv-u-justify-content-center\@tablet` class.
* larva-patterns - Add `top-stories` module.

## 1.0.0 - 05-16-2022
* larva - Introduce additional Larva CLI commands.

## 0.7.5 - 05-16-2022
* larva-patterns - Add `banner` module.
* larva-patterns - Add `o-header` object support in `story-grid` module
* larva-patterns - Add `c-span` object support in `o-header` object.
* larva-css - Add `lrv-a-children-border-horizontal@desktop`, `lrv-a-glue--b-n1`, `lrv-a-glue--r-50p`, `lrv-a-glue--l-50p` utility classes.
* larva-tokens - Adjusted artinamerica tokens for hub support
* larva-css - Add `lrv-a-crop-1x1@mobile-max` class.
* larva-patterns - Render srcset and sizes attributes instead data-srcset and data-sizes for images that aren't lazy.
* larva-patterns - Add flag to skip lazy loading an image that appears in the initial viewport.
* larva-js - Update jwplayer script to use pmc_jwplayer script

## 0.7.4 - 05-12-2022
* larva-patterns - Add `expandable-search`, `header-menu`, `header-sticky`, `header`, `search-form`, `read-next` modules.
* larva-patterns - Add `mega-menu-content`, `mega-menu-footer-subscribe`, `mega-menu-footer`, `mega-menu-item`, `mega-menu` modules.
* larva-patterns - Add `o-account-menu`, `o-header-buttons` objects.
* larva-css - Add utility classes for `border`, `box`, `display`, `font-size`, `height`, `letter-spacing`, `width`, `padding`, `transform` and `vertical-align`.
* larva-js - Add expandable search and header JS.

## 0.7.3 - 05-12-2022
* larva-patterns - Set default input attributes in `age-gate` module for improved accessibility
* larva-patterns - Add `a-font` classes and additional options in `age-gate` module

## 0.7.2 - 05-10-2022
* larva-patterns - Remove code comment in `o-input-group` pattern that's causing phpcs issues
*
## 0.7.1 - 05-10-2022
* larva-patterns - Suffix relevant `c-input` component variables with `_attr`
* larva-patterns - Change component name from `c-text-input` to `c-input` to prevent twig-to-php parser issues
* larva-patterns - Change object name from `o-text-input-group` to `o-input-group` to prevent twig-to-php parser issues

## 0.7.0 - 05-10-2022
* larva-css - Add `lrv-a-glue\@mobile-max`,`lrv-a-span3@desktop`, `lrv-u-border-b-1@desktop`, `lrv-u-border-b-1\@mobile-max`, `lrv-a-children-border-vertical\@mobile-max` utility class.
* larva-css - Add `lrv-a-cols2@desktop-xl` utility classes.
* larva-patterns - Add Featured stories module
* larva-patterns - Add o-sub-header object and sub-header module
* larva-patterns - Wrap heading module inside a if conditon.
* larva-patterns - Add outer tag wrapper to o-nav title element.
* larva-patterns - Add `story-featured-quote` module.
* larva-patterns - Add `c-text-input` component.
* larva-patterns - Add `o-text-input-group` object.
* larva-patterns - Add `age-gate` module.
* larva-patterns - Add README and `js-` classes to `age-gate` module.
* larva-patterns - Add support for article kicker to story module.
* larva-patterns - Add `story_after_wp_action` action to story module.
* larva-svg - Add white pmc logo.

## 0.6.5 - 05-02-2022
* larva-tokens - Updated font size for primary xs and font weight for secondary L & M token in rollingstone-2022.
* larva-patterns - Add support for article kicker to story module.
* larva-patterns - Add `story_after_wp_action` action to story module.
* larva-css - Add `lrv-a-cols2@desktop-xl` utility classes.

## 0.6.4 - 04-28-2022
* larva-css - Add utility classes for `width`, `border` and `flex-wrap`.
* larva-patterns - Add `footer-magazine-image` & `footer-button-list` module.

## 0.6.3 - 04-21-2022
* larva-patterns - Add `brand-most-popular` module.
* larva-patterns - Update `newswire` module and add support for slider.
* larva-css - Add `a-grid` classes.
* larva-css - Add `lrv-u-font-size-16@mobile-max` class
* larva-css - Add `.lrv-u-border-l-00\@mobile-max`, `.lrv-u-border-r-00\@mobile-max`, `.lrv-u-border-t-1\@mobile-max` & `.lrv-u-border-b-00\@mobile-max` classes.
* larva-css - Add utility classes for `width`, `border` and `flex-wrap`.
* larva-patterns - Add `footer-magazine-image` & `footer-button-list` module.

## 0.6.2 - 04-20-2022
* larva-patterns - Update `injected-related-content` module.
* larva-patterns - `story-grid` module changes.

## 0.6.1 - 04-19-2022
* twig-to-php-parser - Modify generated comment in php as a proper fileDoc to adhere to standards.

## 0.6.0 - 04-13-2022
* larva-tokens - Added artinamerica tokens for hub support
* larva-tokens - Updated RS token as per desktop_xl changes.
* all - Added Support for Basic ( xxxl, xxl, xl, l, m, s, xs, xxs, xxxs ), Body ( xxl, xl, l, m, s, xs, xxs ), Primary (xxl), secondary (xxl, xl, xs, xxs ) font variations into larva-tokens.
* larva-patterns - Add `content-showcase` module.
* larva-css - Add `u-flex` algorithm.
* larva-css - Add `lrv-a-wrapper-100vw` class for mobile.
* larva-css - Add `lrv-u-border-l-1` & `lrv-u-border-t-1` classes for desktop, desktop-xl & mobile, and `lrv-u-border-t-2`.
* all - Add node version check to install script, and add refresh dependencies helper script.
## 0.5.8 - 04-08-2022
* larva-patterns - Fix `article-callout` twig template whitespace.
* larva-css - Adds an algorithm and utility to Larva which can be used to apply text-decoration styles on all states.
## 0.5.7 - 04-05-2022
* larva-patterns - Add `article-callout` module.
* larva-patterns - Update `c-email-field` component and 'newsletter' module to improve label and input accessibility.
* all - Add github action on workflow-dispatch to update the visual regression tests in the same environment in which they are run
* larva - Lock the twing package to version 5.1.0 to temporarily work around bug in library.

## 0.5.6 - 03-29-2022
* larva-tokens - Add desktop_xl token values in typography.json
* larva-tokens - Add desktop_xl breakpoint in font-data.js
* larva-css - Update css generator script to include desktop_xl breakpoint using media queries
* larva-css - Update test for generated css
* larva-css - Add `lrv-u-width-50` & `lrv-u-width-35\@mobile-max`.
* larva-patterns - Add `author` and `author-details` module.
* larva-js - Add popover js
* larva-tokens - Update grey color for rollingstone-2022.
* larva-patterns - Add `article-title` module.
* larva-patterns - Add `article-kicker` module.
* larva-patterns - Add `article-excerpt` module.
* larva-patterns - Add `brands-most-popular` module.
* larva-patterns - Update `newswire` module.
* larva-css - Add a-counter algorithm.

## 0.5.5 - 03-03-2022
* larva-css - Add border top utility.

## 0.5.4 - 03-03-2022
* larva-patterns - Add `injected-related-content` module.
* root - Fixes formatting of code block.
* larva-patterns - Add story-grid.river variant
* larva-css - Add text decoration utility and desktop-xl-max for lrv-a-hidden
* larva-patterns - Add `newsletter` module.
* all - Dependendabot updates

## 0.5.3 - 02-24-2022
* larva-patterns - Add `pullquote` module.
* larva-patterns - Add width class to button module
* larva-tokens- Update fallback fonts in rollingstone-2022

## 0.5.2 - 02-15-2022
* larva-tokens - Added Rollingstone 2022 tokens

## 0.5.1 - 02-09-2022
* larva-tokens - Add compat tokens for variety. Change entries/variety.compat.scss to use tokens.
* larva-tokens - Updated background-color-brand-secondary token for rollingstone-2018.

## 0.5.0 - 01-27-2022
* larva-css - Fix 2x1 and 2x3 crop algorithms, introduce 3x2 crop algorithm
* larva-patterns - add support for `markup` filter to output escaped content in loops
* larva-tokens - Add tokens for WWD's Digital Daily feature
* larva-tokens - Update default font family values to be Arial
* root - Add workflow for Backstop testing

## 0.4.4 - 01-04-2022
* larva-css - Remove generic a:hover style.
* larva-patterns - Add property-specific values for button module.

## 0.4.3 - 12-16-2021
* larva-patterns - Add conditions around includes in vlanding-video-showcase.

## 0.4.2 - 12-06-2021
* larva-tokens - Use bold for primary a-font weights in rollingstone tokens.
* site - Import typography fallbacks for base tokens.

## 0.4.1 - 12-06-2021
* larva-tokens - Improve fallback fonts for rollingstone tokens.
* larva-patterns - Standardize c_link references in story module.

## 0.4.0 - 11-23-2021
* root - Add regression snapshots and backstop dependency
* larva - Add update-larva command to list of scripts in init log message
* larva - Experimental method to prioritize to Node prototypes in projects
* larva-css - Add font style utilties
* larva-patterns - Use experimental method in story block and carousel patterns
* larva-patterns - Add variant for `c-span.tag`
* larva-patterns - Add property for layout classes in `story`
* larva-patterns - Update `c-link` options in `story` to match the PHP controller support
* larva-patterns - Remove comments that were not useful and problematic for processing to PHP
* larva-patterns - Add `o-indicator.photos`
* larva-tokens - Add font-family-body-fancy to robbreport tokens
* site - Add robbreport to data file so we can update tokens in the UI

## 0.3.11 - 11-11-2021
* larva-tokens - Update VY tokens with additional colors and typography
* larva - Add compatibility CSS for VY
* larva-patterns - Add blocks for compat stylesheets and class in pattern templates
* larva-tokens - Update Rolling Stone tokens.

## 0.3.10 - 10-27-2021
* larva-tokens - Update Deadline tokens.

## 0.3.9 - 10-21-2021
* larva - Support configuration for copying local assets from the theme to the static sites
* larva-patterns - Add template level test with hub modules

## 0.3.8 - 10-19-2021
* larva-tokens - Add Robb Report tokens
* larva - Simplify init script

## 0.3.7 - 09-30-2021
* larva-tokens - Add additional colors for WWD 2021.
* larva-tokens - Add variations for all heading levels.
* larva-tokens - Update class that applies typography to heading module.
* larva-tokens - Capture build files missed in `0.3.6`.
* larva-css - Add two-column grid algorithm for tablet breakpoint.
* site - Support updating `wwd-2021` tokens.
* root - fix `prettier` build dependency.

## 0.3.6 - 09-23-2021
* larva-tokens - Add BBPro tokens.

## 0.3.5 - 09-23-2021
* Re-release 0.3.4 as `latest` after it was released as `next`.

## 0.3.4 - 09-23-2021
* larva-patterns - Fix `story` module's use of `c_dek` component.
* larva-patterns - Add additional separator styles.

## 0.3.3 - 08-09-2021
* larva-patterns - Add `carousel-slider` module.
* larva-patterns - Add separator border color class.
* larva-css - Add style for 1/3 cell width in Flickity slider.
* larva-svg - Add gallery icon.

## 0.3.2 - 08-06-2021
* larva-tokens - Add accent dark color to Beauty Inc tokens.

## 0.3.1 - 07-30-2021
* larva-patterns - Fix `story-grid` padding and fonts.
* larva-patterns - Create new module `carousel-grid` and a variant `overlay`.
* all - Version bumps from Dependabot.

## 0.3.0 - 07-26-2021

* larva-patterns - Add alignment and color classes to heading, paragraph, and container modules, update to use standard lrv-a-font.
* larva-patterns - Adding a new module (`container`) for containing markup.
* larva-patterns - Add `story` module variations.
* larva-patterns - Add `story-grid` module.
* all - Version bumps from Dependabot.

## 0.2.9 - 06-25-2021
* larva-tokens - Fix incorrect brand colors for wwd beauty Inc

## 0.2.8 - 06-24-2021
* larva-tokens - Add WWD Beauty Inc tokens

## 0.2.7 - 06-21-2021
* larva-tokens - Update Billboard Accent font and color

## 0.2.6 - 06-11-2021
* larva-tokens - Add Billboard tokens

## 0.2.5 - 06-02-2021
* larva-tokens - Update Sourcing Journal Grey color
* larva-tokens - Add Rivet tokens

## 0.2.4 - 05-26-2021
* larva-patterns - Add newsletter-cta module

## 0.2.3 - 05-12-2021
* Changing just the version. Last publish failed because of npm auth failed

## 0.2.2 - 05-12-2021
* Allow o-icon-button to be used in o-social-list.

## 0.2.1 - 05-11-2021
* larva-tokens - Add Sourcing Journal (SJ) design tokens.
* larva-tokens - Adding WWD redesign as wwd-2021 to tokens.
## 0.2.0 - 04-16-2021
* root - Add build script for Larva Patterns to deploy to vercel
* site - Update welcome page to include link to patterns
* larva-patterns - Support index files for /source/type routes
* larva-js - Refactor Toggle Larva UI button to use localStorage
* larva-tokens - Add generated tokens for typography, apply to `default` and `indiewire`.
* larva-css - Generate SCSS according to typography tokens.
* larva-css - Add warnings for future deprecation of previous font-related utilities.
* root - Add build script for tokens updates.

## 0.1.20 - 03-22-2021
* larva-patterns - Show variants in menu and pattern pages on Larva server
* larva - Fix bug with eslint resolving aliases, remove deprecated dependency

## 0.1.19 - 03-22-2021
* larva-js - Add tooltip JS
* twig-to-php-parser - Add support for custom twig-to-php-parser function: {{ wp_action( 'action_name', p1, p2, ... ) }}
* twig-to-php-parser -  fix backward compatible twig-to-php-parser config: twigDir & relativeSrcOverride
* larva-js - build standalone VideoShowcase
* larva - create version of CSS for high-specificity sites

## 0.1.18 - 03-19-2021
* root - Internal structuring to improve workflow
* root - Consolidate built assets in root for local dev
* larva - Render style guide from tokens data
* larva - Support assets path and brand name in configuration

## 0.1.17 - 03-08-2021
* larva-tokens - Update vibe secondary color

## 0.1.16 - 03-04-2021
* Accessibility - Add aria-label attribute to c-timestamp component

## 0.1.15 - 02-26-2021
* larva-js - Fix sideskin ads

## 0.1.14 - 02-25-2021
* larva-svg - Update pmc logo

## 0.1.13 - 02-10-2021
* larva-tokens - Add The Hollywood Reporter (THR) design tokens.

## 0.1.12 - 02-08-2021
* Typo - Fix Variable typo

## 0.1.11 - 02-08-2021
* Accessibility - Add aria-label attribute to c-link component
* PMCP-2796: Add focus trap to mega menu modal

## 0.1.10 - 02-01-2021
* Add support to use app root .eslintrc file
* Add option to get config function to fallback to package global default

## 0.1.9 - 01-14-2021
* larva-tokens - Add json and raw json formats to tokens build, and run build.
* Minor dependency updates

## 0.1.8 - 01-05-2021
* larva-tokens - Add Vibe design tokens.
## 0.1.7 - 11-04-2020
* Fix larva-patterns/modules/social-share/social-share.twig to use square bracket notation for accessing submodule values

## 0.1.6 - 11-02-2020
* Add aria-controls support for vlanding-video-card
* Remove support for elseif in twig-to-php parser

## 0.1.5 - 11-02-2020
* Add support for elseif in twig-to-php parser

## 0.1.4 - 11-02-2020
* More accessibility fixes

## 0.1.3 - 10-27-2020

* twig-to-php-parser - Fix bug in svg include replacement
* repo - Add travis build
* repo - Bump node-fetch version
* accessibility fixes

## 0.1.1 - 9-2-2020

* stylelint-config - Remove oppressive language based on stylelint update
* larva-patterns - Add condition to check before adding aria-labelledby attribute to o-nav

## 0.1.0 - 9-2-2020

* twig-to-php-parser - Update support for WordPress style do_action token. Use _wp_action keyword rather than _action
* twig-to-php-parser - Add support for item['submodule'] in for include and mustache regex

## [8.14.26-alpha] - 08-26-2020

* larva-css - Add a-show-on-hover Algorithm
* larva-css - Add max-width 1000 utility
* twig-to-php-parser - Add support for WordPress style do_action token

## [8.14.25-alpha] - 08-20-2020

* larva-css - Add mobile-max breakpoint for margin utilities.
* larva-css - Add space-children--150 utility.
* larva-tokens - Add grey color tokens for Dirt.

## [8.14.24-alpha] - 08-18-2020

* larva-tokens - Update fonts for Dirt.
* larva-tokens - Add spacing tokens for Dirt Brand.
* larva-css - Add mobile-max breakpoint for padding utilities.

## [8.14.23-alpha] - 08-13-2020

* larva-tokens - Add Dirt design tokens.

## [8.14.22-alpha] - 07-29-2020

* larva-tokens - Fix RS colors.

## [8.14.21-alpha] - 07-28-2020

* larva-tokens - Add RS tokens and update alias.

## [8.14.20-alpha] - 07-28-2020

* larva - Fix to use single path to assets in Larva server.

## [8.14.19-alpha] - 07-23-2020

* twig-to-php-parser - Update isUsingPlugin `include` path transformation to use new render_pattern_template method

## [8.14.18-alpha] - 07-21-2020

* larva - Fix missing @penskemediacorp/eslint-config dependency

## [8.14.17-alpha] - 07-17-2020

* eslint-config - update reference to wp eslint package
* stylelint-config - remove stylelint dependency - that comes from larva
* larva - directly use wordpress eslint config in lint script

## [8.14.16-alpha] - 07-16-2020

* larva - update packages and fix breaking changes
* backstop-config - remove cyclic dependency, update packages
* twig-to-php-parser - remove cyclic dependency, update packages

## [8.14.15-alpha] - 07-15-2020

* eslint-config - update deprecated package, thanks @metalandcoffee!

## [8.14.14-alpha] - 07-09-2020

* larva - Add asset copy assets functionality to the build-html script
* larva - Move /css route to /larva/css to fit in with site builder script
* larva - Refactor to remove /static route for assets - we can only have one. Themes will need to build the Larva UI assets.

## [8.14.13-alpha] - 07-08-2020

* larva-js - A11y improvement for focus on Collapsible pattern

## [8.14.12-alpha] - 07-06-2020

### Added

* larva - Output JS errors to UI in browser on larva server

### Fixed

* larva - refactor and remove getPatternDataPath
* larva - start server in test for generateStatic

## [8.14.11-alpha] - 07-01-2020

* larva-patterns - add c_icon_target_attr, default _blank

## [8.14.10-alpha] - 06-15-2020

### Added

* larva-patterns - Add list module
* larva-tokens - Add a `FONT_FAMILY_BASIC` variant to SheKnows

## [8.14.9-alpha] - 06-12-2020

### Fixed

* larva-css - Space children values should be unit-less

## [8.14.8-alpha] - 06-12-2020

### Added

* larva-css - Add more space children
* larva-css - Add display table

## [8.14.7-alpha] - 06-12-2020

### Fixed

* larva-patterns - Paragraph closing

## [8.14.6-alpha] - 06-12-2020

### Added

* larva - Add webfontloader.js for the Larva server
* larva-css - Add 5x2 crop and extension to use object-fit: contain
* larva-css - Add widths 75p and 50p @desktop

### Fixed

* larva - Move prism.js to js/vendor
* larva-css - Move max-width to own file so we have docs

## [8.14.5-alpha] - 06-09-2020

### Added

* larva-js - Add webfontConfig
* larva-css - Add lrv-u-border-t-3
* larva-css - Add 5 col grid + first child span all
* larva-patterns - Add newswire
* larva-patterns - Add button module
* larva-patterns - Add paragraph module
* larva-patterns - Add separator module

### Fixed

* larva-patterns - Add condition around footer modules to support footers without them

## [8.14.4-alpha] - 06-05-2020

### Added

* larva-patterns - Add heading module and variants

## [8.14.3-alpha] - 06-02-2020

### Added

* larva-patterns - Added c-logo
* larva-patterns - Add `larva` identifier class for use in themes to c-button and c-heading

### Fixed

* twig-to-php-parser - Update parse_svg method to use brand_directory with plugin, add test
* larva-patterns/o-select-nav - Updated default classes to correctly overlay button on select

## [8.14.2-alpha] - 05-28-2020

### Added

* larva-css - Add utility class for border radius 100px

## [8.14.1-alpha] - 05-28-2020

### Fixed

* larva-tokens - Fix reference to Sofia Pro in SheKnows design tokens
* larva-tokens - Update accent colors in sheknows design tokens

## [8.14.0-alpha] - 05-21-2020

### Added

* larva-tokens - Add indiewire design tokens

## [8.13.0-alpha] - 05-20-2020

### Added

* larva-js - Add ProfileFilter, SelectNav
* larva-patterns - Add story, story-arc-stories, profile-landing-river, more-stories-button, o-select-nav
* larva-css - Add text transform lowercase, opactiy 0, span 2 for 3 col grid, max-width 100vw

## [8.12.1-alpha] - 05-19-2020

### Fixed

* larva-css - Fix issue with order of media queries in utility files

## [8.12.0-alpha] - 05-15-2020

### Added

* larva-tokens - Add sportico design tokens

## [8.11.1-alpha] - 05-14-2020

### Fixed

* twig-to-php-parser - Add underscores to key so variable names don't trigger them
* twig-to-php-parser - Enable core theme logic
* backstopjs-config - Update desktop xl screensize (thanks @metalandcoffee!)

## [8.11.0-alpha] - 05-12-2020

### Added

* larva-scss - add pmc-font-family mixin

### Fixed

* twig-to-php-parser - Update the path for plugin patterns to point to build/patterns.
* larva - update scripts/larva scaffold files to new standards

## [8.10.0-alpha] - 05-11-2020

### Added

* twig-to-php-parser - Add support for includes to parse to a function from \PMC\Larva\Config to handle paths.
* twig-to-php-parser - Add support for input `twigDir` and output `phpDir` configuration in larva.config.js

### Fixed

* twig-to-php-parser - Refactor JS wrapper `twigToPhpParser` to accept single configuration object

## [8.9.0-alpha] - 05-08-2020

### Added

* larva-tokens - Add sheknows design tokens

## [8.8.1-alpha] - 05-06-2020

### Added

* larva - Support for port in CLI for build-html, defaults to 3000

### Fixed

* larva - Correct var for fromLarva logic

## [8.8.0-alpha] - 05-06-2020

### Added

* larva - Add build-html to larva binary
* larva - Add scripts for generating static site files


## [8.7.1-alpha] - 4-28-2020

* larva-tokens - Update colors in wwd tokens and default tokens

## [8.7.0-alpha] - 4-28-2020

* larva-css - Directly generate utilities based on tokens map
* larva-css - Generate breakpoints for tokens and :hover for border colors
* larva-css - Add reset and update border utility to be width
* larva-css - Add @desktop breakpoints for flex, display, order, text-align, box-alignment
* larva-patterns - Improve Larva CSS documentation UI
* larva-tokens - Add spacing to tokens
* larva-tokens - Add contents of default.json to the base JSONs to indicate they are required

## [8.6.1-alpha] - 4-21-2020

* larva-patterns - Move DEV-* one-offs to `__tests__`
* larva-patterns - Update pattern extension logic to be more flexible for .html
* larva-patterns - Add `__tests__` to the pattern nav
* larva - Add reference screenshots for the larva template tests

## [8.6.0-alpha] - 4-21-2020

* larva-js - Add SideSkinAd and removeDesktopXlClasses utility
* larva-js - Add MegaMenu
* larva-js - Add TabsManager
* larva-patterns - Stub pmc cookie and skins object in base.html for font loading
* larva - Add skins stub to larva-ui JS so it works in pattern libraries with has_side_skins query

## [8.5.4-alpha] - 04-14-2020

- larva: catch exception for invalid JSON in writeJson

## [8.5.3-alpha] - 03-31-2020

- larva-patterns: Update o_email_capture_form_context_name parameter to o_email_capture_form_context_name_attr for o-email-capture-form

## [8.5.2-alpha] - 03-31-2020

- larva-patterns: add o_email_capture_form_context_name parameter for o-email-capture-form

## [8.5.1-alpha] - 03-30-2020

- larva-patterns: remove noscript from c-lazy-image

## [8.5.0-alpha] - 02-25-2020

### Added
- post-content-image module

## [8.4.0-alpha] - 02-20-2020

### Added
- Functionality to get all pattern objects in preparation for a static site build
- Expose target and rel attributes in c-link

### Fixed
- Bug in server where the node protoype was no longer showing in docs

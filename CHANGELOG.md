# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unpublished
* larva - Support configuration for copying local webfonts from the theme to the static sites
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

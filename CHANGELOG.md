# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

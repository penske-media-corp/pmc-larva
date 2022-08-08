# Larva Design Tokens

**Design tokens** are platform-agnostic values for color, typography, and spacing that can be built into variable files that are consumable by different applications.

This package provides a default set of design tokens for colors and font families, and specific per-brand configurations. It uses [Theo](https://github.com/salesforce-ux/theo/) in order to transform data about tokens into different formats. We use the following formats:

* SCSS map
* CSS custom properties
* JSON

## Overview of Functionality

1. Default values for tokens are imported into a JSON file for a specific brand, and in that file, overrides for brand-specific values are specified.
2. A Gulp task builds each of the JSON tokens into various formats.
3. The built files are available for use by other applications, such as larva-css which generates utility classes according to the Sass map, and makes them available for quick theme-ing with custom properties.

The values in larva-tokens are strictly controlled, and must originate from a style guide provided by design, such as [this one from ArtNews](https://projects.invisionapp.com/share/FVQGKHESJQZ#/screens/384190276).

Given that tokens are strictly controlled, contributions should be relatively infrequent and should mainly revolve around redesigns or adding Larva to a brand that doesn't currently have it. Occasionially, however, individual tokens will be updated with new values for a new brand, or new tokens will be added to the system / deprecated tokens removed.

## Development Setup

**Prerequisite:** A style guide must be provided by design that follows the design token naming conventions.

1. Clone this repository, and follow the setup instructions in the root README.
2. Make changes to packages/larva-tokens/src, e.g. adding a new {brand}.json tokens file, or updating a value in an existing brand.
5. From the root of this repo, run `npm run build`.
6. Record changed in CHANGELOG.md, and open a pull request with your changes.
7. Once the PR is merged and the release published, update the larva npm package in a consuming project.

## Updating and Adding Design Tokens

Please use [the Design Tokens Form tool](https://confluence.pmcdev.io/x/f4GzB) for adding new brands' tokens, and for updating design tokens in existing brands. The tool provides an interface for ensuring correct token formatting. After configuring tokens values, save the file and contribute the changes to this repo.

## Using Design Tokens in Projects

If working in a project that does not design tokens setup, but already has the brand tokens contributed, there following are options for accessing the tokens' data:

1. Pull in the Sass map of tokens with `@import './node_modules/@penskemediacorp/larva-tokens/build/brand.map.scss';` and access values with `map-get( $brand-map, token-name )`.
2. Add the custom properties map to the beginning of your CSS build with from `./node_modules/@penskemediacorp/larva-tokens/build/brand.custom-properties.css`. Access the custom property values using the `var( --token-name )` CSS syntax.
3. Import the JSON build of the tokens into a JavaScript application.

## Things To Be Aware Of

* The tokens used with the `lrv-a-font` selector are generated via font-data.js
* Token names should be in CAPS
* The src/base/deprecated/aliases.json file is now deprecated and colors should always be defined in the brand's json. (Previously used for colors that might be shared between brands).
* Only tokens in existing categories should be added e.g. there are no font-size tokens, so do not add them.
* All tokens are prefixed with their CSS property, e.g. background is BACKGROUND_, text colors are COLOR_, and font family values prefixed with FONT_FAMILY_.
* Font family values should be a short CSS font stack.
* Webfonts should be added in the `font-family-**-fancy` token to hook up to webfont loading in larva-css.
* Occasionally, the theo build will produce a stray brand.json file to the build directory. Please delete this if it happens.

## History and Changelog

This package is versioned along with the pmc-larva monorepo. Please see the root mono-repo CHANGELOG.md and refer to entries prefixed `larva-tokens`.
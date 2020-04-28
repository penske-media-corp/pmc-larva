# Larva Design Tokens

This package provides a default set of design tokens for colors and font families, and specific per-brand configurations. It uses [Theo](https://github.com/salesforce-ux/theo/) for generating the token files.

**Design tokens** are platform-agnostic values for color, typography, and spacing that can be built into variable files that are consumable by different applications.

## Overview of Functionality

1. Tokens are added to JSON files in src/. The values in src/base/ provide defaults that are pulled in and then overridden as needed in the JSON files in src/brands.
2. A Gulp task builds each of the JSON tokens into CSS file containing custom properties, a Sass map, and an HTML style guide.
3. The built files are available for use by other applications, such as larva-css which generates utility classes according to the Sass map, and makes them available for quick theme-ing with custom properties.

The values in larva-tokens are strictly controlled, and should originate from a style guide provided by design, such as [this one from ArtNews](https://projects.invisionapp.com/share/FVQGKHESJQZ#/screens/384190276).

## Development Setup

Given that tokens are strictly controlled, contributions should be relatively infrequent.

### Use cases for updating larva-tokens

1. Setting up tokens for a new brand
	1. Make a copy of _template.txt in src/brands and rename it to brand-name.json.
	4. Refer to the style guide from design. Add values to JSON following the existing naming conventions*.
2. Adding a new default, required token for all brands e.g. `color-sponsored`.
	1. Find the related property in src/base. For the above example, you would contribute `COLOR_SPONSORED` to src/base/color.json and `BACKGROUND_COLOR_SPONSORED` to src/base/background-color.json.
3. Updating a brand's tokens to use something other than default values
	1. If a specific brand wants to override the default value for a token, this can be done by adding a token **of the same name** (this is VERY important) to brands/brand-name.json. For example, if I want to change the hue of `BACKGROUND_COLOR_GREY_LIGHTEST` for WWD, I would add a token to wwd.json in this format:
	```
	"BACKGROUND_COLOR_GREY_LIGHTEST": {
		"value": "#FAFAFA",
		"type": "color",
		"category": "background-color"
	},
	```
	2. Note that the `type` and `category` for the token overrides does not carry over from their defaults, so they must be added in the top-level brand-name.json files.

If these sound like your needs, proceed!

### Updating or Adding Tokens

**Prerequisite:** A style guide provided by design (or otherwise advised by product to use tokens) that follows the design system naming conventions.

1. Clone this repository, i.e. the pmc-larva monorepo.
2. In packages/larva-tokens, run `npm install`.
3. Make necessary changes according to the above guidelines.
5. Run `npm run build` to generate the custom properties, Sass map, and style guide.
6. Add a note to the monorepo CHANGELOG.md, and open a pull request with your changes.
7. Once the PR is merged and the release published, update the npm package in your project.
8. If working in a project with Larva already setup, update the name of the custom-properties map in common.inline.scss, and the name of the Sass map in setup.scss.


**Note:** Adding new tokens is tedious, but _extremely important_ to do correctly. Please be very detailed and take care to follow existing naming conventions and ask your tech lead for help where you aren't sure.

### Consuming Tokens in Projects

If working in a project that does not have tokens setup by default, there are two options for consuming tokens:

1. Pull in the Sass map of tokens with `@import './node_modules/@penskemediacorp/larva-tokens/build/brand.map.scss';` and access values with `map-get( $brand-map, token-name )`.
2. Add the custom properties map to the beginning of your CSS build with from `./node_modules/@penskemediacorp/larva-tokens/build/brand.custom-properties.scss`. Access the custom property values using the `var( --token-name )` CSS syntax.

For the above, be sure to update the paths with any project-level aliasing for include paths.

## Things To Be Aware Of

* Token names should be in CAPS
* Colors that might be re-used between brands should be added in src/base/aliases.json in with a basic color name e.g. RED, BLUE, or GREEN, and followed by the lightness value in the color's HSL value which is the third value. For example a light purple like #B9C4F0 has an HSL of HSL(228, 65%, 83%). It would be called PURPLE_83. [This website](https://convertingcolors.com/) is useful for converting colors.
* Only tokens in existing categories should be added e.g. there are no font-size tokens, so do not add them.
* All tokens are prefixed with their CSS property, e.g. background is BACKGROUND_, text colors are COLOR_, and font family values prefixed with FONT_FAMILY_.
* Font family values should be a short CSS font stack.
* Webfonts should be added in the `font-family-**-fancy` token to hook up to webfont loading in larva-css.
* Occasionally, the theo build will produce a stray brand.json file to the build directory. Please delete this if it happens.

## History and Changelog

This package is versioned along with the pmc-larva monorepo. Please see the root mono-repo CHANGELOG.md and refer to entries prefixed `larva-tokens`.
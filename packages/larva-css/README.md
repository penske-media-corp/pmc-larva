# Larva CSS

This package contains Larva's base CSS, CSS algorithms, utlities, and CSS for JS patterns from larva-js. Design-related utilities e.g. typography, spacing, and color, are generated according to configuration in [larva-tokens](https://github.com/penske-media-corp/pmc-larva/tree/master/packages/larva-tokens).

## Overview of Functionality

In larva-css, CSS originates in one of three ways:

1. For properties that are part of larva-tokens, iterate over the Sass map of values and output utilities based on the token name e.g. `.lrv-u-#{$token} { property: $value }`.
2. For properties _not_ part of larva-tokens, iterate over a map of local values and output utilities in the same fashion
3. For algorithms that are not part of tokens – e.g. `a-grid` and `a-crop` - use a generator from larva-scss to output the rulesets.
4. .scss files associated with patterns from larva-js that can be pulled into project-level builds.

## Development Setup (consuming project)

larva-css can be used on its own, or in conjunction with the main larva package.

### Using larva-css on its own

If you'd like to use larva-css on its own, install like so:

```
npm install @penskemediacorp/larva-css --save
```

Otherwise, it will be included as a dependency when installing the main @penskemediacorp/larva package.

### Loading larva-css into your project's build

larva-css files can be accessed as CSS directly by linking the stylesheets available in the build directory, but the current recommended approach is to load them into a local project build.

In your local build, inlcude these files into your main stylesheet:

```language:scss
// common.scss => common.css
@import '@penskemediacorp/larva-css/build/css/generic.common.inline';
@import '@penskemediacorp/larva-css/build/css/algorithms.common.inline';
@import '@penskemediacorp/larva-css/build/css/algorithms.common.async';
@import '@penskemediacorp/larva-css/build/css/utilities.common.inline';
@import '@penskemediacorp/larva-css/build/css/utilities.common.async';
@import '@penskemediacorp/larva-css/build/css/js.common.inline';

```

If you are splitting inline CSS, you can load inline CSS separately by including the following in a file that will be inlined:

```language:scss
// inline.scss => inline.css
@import '@penskemediacorp/larva-css/build/css/generic.inline';
@import '@penskemediacorp/larva-css/build/css/algorithms.inline';
@import '@penskemediacorp/larva-css/build/css/utilities.inline';
@import '@penskemediacorp/larva-css/build/css/js.inline';
```

Note that at present, there are no js or generic files for async CSS from larva-css.

### Experimental features

As of 8.7.0-alpha, larva-css can support feature toggles via a Sass map in setup.scss. **This only applies to projects that build the larva-css .scss files in the project, not those that consume .css files directly.**

If you project meets the above requirements, you may enable features by adding the following to `setup.scss`:

```
$features: (
	'feature-name': true,
);
```

Currently available features:

* `project-utilities`: Generate project level .u-* utilities (no .lrv- namespace) for font-size, line-height, and font-weight. These should be added to a project-level tokens map that is merged with the main map from larva-tokens. See tokens.scss in packages/larva/src/scss/00-tools/tokens.scss for an example of addint project-level utilities.

## Development Setup (this repo)

1. Clone this repository, i.e. the pmc-larva monorepo.
2. In packages/larva-css, run `npm install`.
3. Make your updates to the CSS.
4. From packages/larva-css, run `npm run build`.

Contributions adding static utilities e.g. display properties or others that are not generated from tokens are welcome.

## Things to Know

### Utility Naming

Utilities that are generated from larva-tokens, are named as follows:

`.lrv-u-{$token-name}`

For `spacing-XX` tokens, they are named:

`.lrv-u-margin-{l|r|t|b|lr|tb|a}-{$size}`

Where, if the token was `spacing-1`, the utility would be `lrv-u-margin-l-1`.

### Algorithms

Algorithms are presentationally named CSS patterns that provide functionality difficult or impossible to accomplish with utilities. Examples are aspect ratio cropping, CSS grid with flex box fallbacks, and SVG icons with `::before` and `::after`.

Please refer to the source of each algorithm and its corresponding generator in larva-scss for more information.

### JS-related CSS

The SCSS files inside 04-js should be imported directly into a local project build, other than js-MobileHeightToggle which is added to the js.common.inline chunk here.


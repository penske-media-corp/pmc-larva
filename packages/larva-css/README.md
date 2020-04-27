# Larva CSS

This package contains Larva's base CSS, CSS algorithms, utlities, and CSS for JS patterns from larva-js. Design-related utilities e.g. typography, spacing, and color, are generated according to configuration in larva-tokens.

## Usage

larva-css can be used on its own, or in conjunction with the main larva package. The main larva package provides a single larva.inline.css and larva.async.css file for consumption.

### Enabling features

As of 8.7.0-alpha, larva-css can support feature queries via a Sass map in setup.scss. **This only applies to projects that build the larva-css .scss files in the project, not those that consume .css files directly.**

If you project meets the above requirements, you may enable features by adding the following to `setup.scss`:

```
$features: (
	'feature-name': true,
);
```

Currently available features:

* `project-utilities`: Generate project level .u-* utilities (no .lrv- namespace) for font-size, line-height, and font-weight. These should be added to a project-level tokens map that is merged with the main map from larva-tokens. See tokens.scss in packages/larva/src/scss/00-tools/tokens.scss for an example of addint project-level utilities.

### Using larva-css on its own

If you'd like to use larva-css on its own, install like so:

```
npm install @penskemediacorp/larva-css --save
```

## Loading larva-css into your project's build

If you are splitting inline and async loaded CSS, you can load inline CSS separately by including the following files inline in your application, in this order to maintain the cascade:

```
// inline.scss => inline.css
@import '@penskemediacorp/larva-css/build/css/generic.inline.css';
@import '@penskemediacorp/larva-css/build/css/algorithms.inline.css';
@import '@penskemediacorp/larva-css/build/css/utilities.inline.css';
@import '@penskemediacorp/larva-css/build/css/js.inline.css';

// async.scss => async.css
@import '@penskemediacorp/larva-css/build/css/algorithms.async.css';
@import '@penskemediacorp/larva-css/build/css/utilities.async.css';
```

Or, if you are not splitting inline and async:

```
@import '@penskemediacorp/larva-css/build/css/generic.common.inline';
@import '@penskemediacorp/larva-css/build/css/algorithms.common.inline';
@import '@penskemediacorp/larva-css/build/css/algorithms.common.async';
@import '@penskemediacorp/larva-css/build/css/utilities.common.inline';
@import '@penskemediacorp/larva-css/build/css/utilities.common.async';
@import '@penskemediacorp/larva-css/build/css/js.common.inline';

```

Note that at present, there are no js or generic files for async CSS from larva-css.

In the future, this workflow needs some refactoring to be simpler and oriented around a single import, like it is in the main larva package.

## Utility Names

Excluding spacing, utilities that are generated from larva-tokens, are named as follows:

`.lrv-u-{$token-name}`

For spacing, they are named:

`.lrv-u-margin-{l|r|t|b|lr|tb|a}-{$size}`

Where, if the token was `spacing-1`, the utility would be `lrv-u-margin-l-1`.

## Algorithms

Algorithms are presentationally named CSS patterns that provide functionality difficult or impossible to accomplish with utilities. Examples are aspect ratio cropping, CSS grid with flex box fallbacks, and SVG icons with `::before` and `::after`.

Please refer to the source of each algorithm to understand its functionality.

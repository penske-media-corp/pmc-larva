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

#### Option 1: With project-level utilities (recommended for themes)

This approach is recommeded for WordPress themes and redesigns that include a styleguide and the addition of a new brand.json to [larva-tokens](https://github.com/penske-media-corp/pmc-larva/tree/master/packages/larva-tokens).

Prerequisites to this approach:

1. Your project is using the core @penskemediacorp/larva package for its build step.
2. The CSS architecture and directory structure in this repository's packages/larva/src/scss.
3. The project's assets structure follows that outlined in the [main larva package readme](https://github.com/penske-media-corp/pmc-larva/tree/master/packages/larva).

Include the source .scss files from this repository in your top-level common stylesheet in assets/entries/:

In all of the following, replace `default` with the brand name containing tokens.

```language:scss
// common.async.scss
@import '@penskemediacorp/larva-tokens/build/default.custom-properties';

@import '@penskemediacorp/larva-css/src/01-generic/*.scss';
@import '01-generic/*.common.*.scss';

@import '@penskemediacorp/larva-css/src/02-algorithms/**/*.scss';
@import '02-algorithms/*.common.*.scss';

@import '@penskemediacorp/larva-css/src/03-utilities/*.scss';
@import '03-utilities/*.common.*.scss';

@import '@penskemediacorp/larva-css/src/04-js/*.scss';
@import '04-js/*.common.*.scss';
```

In a corresponding stylesheet for inline CSS, include only the .inline.scss extensions.

```language:scss
// common.inline.scss
@import '@penskemediacorp/larva-tokens/build/default.custom-properties';

@import '@penskemediacorp/larva-css/src/01-generic/*.inline.scss';
@import '01-generic/*.common.inline.scss';

@import '@penskemediacorp/larva-css/src/02-algorithms/**/*.inline.scss';
@import '02-algorithms/*.common.inline.scss';

@import '@penskemediacorp/larva-css/src/03-utilities/*.inline.scss';
@import '03-utilities/*.common.inline.scss';

@import '@penskemediacorp/larva-css/src/04-js/*.inline.scss';
@import '04-js/*.common.inline.scss';
```

Next, create a file for project-level tokens in in assets/src/scss/00-tools/tokens.scss that contains the following:

```
@import '@penskemediacorp/larva-tokens/build/default.map.scss';

$local-tokens: (
	'font-size-12': pmc-rem(12),
	'opacity-075': 0.75,
);

$TOKENS-MAP: map-merge( $default-map, $local-tokens );
```

And in assets/src/scss/setup.scss, import the tokens:
```
@import '00-tools/tokens.scss';
```

Be sure to `@import 'setup'` at the top of all of your local utility files. Font size is already generated from the larva-css repo, but opacity is not.

If a property is **not** generated from larva-css, you can iterate over the local tokens map with the following Sass:

```
// Example: u-opacity.common.inline.scss
@import 'setup';

@each $token, $value in $TOKENS-MAP {
	$token-str: quote( $token );

	@if str-index( $token-str, 'opacity' ) {
		.u-#{$token} {
			opacity: $value;
		}

		// If you would like to generate a hover selector,
		// that could happen here, but media queries need
		// to be in an additional loops to maintain the cascade

	}
}

//
// Media Queries
//


@include pmc-breakpoint( desktop ) {

	@each $token, $value in $TOKENS-MAP {
		$token-str: quote( $token );

		@if str-index( $token-str, 'opacity' ) {
			.u-#{$token}\@desktop {
				opacity: $value;
			}
		}
	}

}

@include pmc-breakpoint( desktop-xl ) {

	@each $token, $value in $TOKENS-MAP {
		$token-str: quote( $token );

		@if str-index( $token-str, 'opacity' ) {
			.u-#{$token}\@desktop-xl {
				opacity: $value;
			}
		}
	}

}

```

Refer to the larva-css source files in larva-css/src and in the local Larva server, navigate to /css to see available classes.

#### Option 2: Without project-level utility generation

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

## Development Setup (this repo)

1. Clone this repository, i.e. the pmc-larva monorepo.
2. In packages/larva-css, run `npm install`.
3. Make your updates to the CSS.
4. From packages/larva-css, run `npm run build`.

Contributions adding static utilities e.g. display properties or others that are not generated from tokens are welcome.

## Things to Know

### The .lrv namespace

CSS originating from larva-css .scss files contain a .lrv- namespace. Local project CSS should only contain an `a-`, `u-`, or `js-` namespace.

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


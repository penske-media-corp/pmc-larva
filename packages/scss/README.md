# `@penskemediacorp/larva-scss`

This repository holds core SCSS tools and tokens for Larva.  These include:

- Tokens (e.g. spacing, color, z-index, and transition values)
- Mixins to generate CSS utilities and algorithms according to a list of tokens
- Breakpoint mixin

This repository provides **Sass files only**. The consuming project is responsible for building the assets.

## Usage

Import an SCSS file from the dist directory. For example, to use the background utility mixin, create a utility file in `assets/patterns/07-utilites/u-background.scss` and add the following contents:

```language:scss
// Note: larva-scss must be added as an alias in pmc.config.js.
@import '~larva-scss';

// These variables should come from tokens.scss.
$color_list: (
	grey-light: $color-grey-90,
	grey:       $color-grey-50,
	grey-dark:  $color-grey-20,
);

@include pmc-u-background((
		grey-dark,
		grey-light,
	), $color_list
);
```

This will output the following for use in a theme:

```language:scss
.pmc-u-background-grey-light {
	background-color: #EEEEEE;
}
.pmc-u-background-grey-dark {
	background-color: #444444;
}
```
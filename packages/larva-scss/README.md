# Larva SCSS

This repository holds core SCSS tools and tokens for Larva.  These include:

- Breakpoint mixin
- Tokens (e.g. spacing, color, z-index, and transition values)
- Generators (i.e. mixins that generate classes according to a list of tokens)

This repository provides **Sass files only**. The consuming project is responsible for building the assets.

## Usage

Import a SCSS file from the dist directory. 

### Breakpoint Mixin

The breakpoint mixin includes breakpoints for the following:

* mobile-max = (max-width: 767px)
* tablet = (min-width: 768px)
* desktop = (min-width: 1000px)
* desktop-xl = (min-width: 1260px)

```language:scss
// assets/src/patterns/07-utilities/u-display.scss
@import '@penskemediacorp/larva-scss/dist/tools';

.u-display-none\@tablet {
	@include pmc-breakpoint( tablet ) {
		display: none;
	}
}
```

### Tokens

Refer to the directory lib/tokens in this package to see what tokens (a.k.a. Sass variables) are available to use.

You can import the file in a Larva project and use the tokens like this:

```language:scss
// assets/src/patterns/06-algorithms/a-specific-grid.scss
@import '@penskemediacorp/larva-scss/dist/tokens';

.a-specific-grid {
	display: grid;
	grid-template-columns: repeat( 1fr, 3 );
	grid-gap: $spacer-150;
}

.a-specific-grid__sidebar {
	margin-top: $spacer-2;
}
```

### Generators

For example, if you need to add grids that are not available in larva-css, you can use the grid algorithm generator. In a new file, `assets/src/patterns/06-algorithms/a-grid.scss`, add the following:

```language:scss
// assets/src/patterns/06-algorithms/a-grid.scss
@import '@penskemediacorp/larva-scss/dist/generators';

$grids: (
	(
		columns: 6,
		spans: ( 2, 3, ),
		breakpoint: tablet,
	),
);

@include pmc-a-grid( $grids );
```

Utility generators are used the same way, but added inside the utilities directory, instead, and indicate a simple, property: value declaration. To add additional colors to a consuming project, for example, add the following:

```language:scss
// assets/src/patterns/07-utilities/u-background.scss

@import '@penskemediacorp/larva-scss/dist/generators';
@import '@penskemediacorp/larva-scss/dist/tokens';

$color_list: (
	blue: $color-blue-30,
	blue-light: $color-blue-80,
);

@include pmc-u-background( $color_list );
```

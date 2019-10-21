# a-grid

This utility generator is for creating simple grids. It uses a CSS Grid with a custom property to update the grid columns, and provides a flexbox fallback for older browsers. It supports flexible values for number of columns in the grid, grid items spanning multiple columns, and breakpoints for both.

## Available Classes

Reference the `$grids` list in packages/larva-css/src/02-algorithms/a-grid/a-grid.common.inline.scss to see which grids are available from Larva CSS. 

## Algorithm Source

Here is an example of the algorithm accommodating a two column grid that changes to four columns at desktop:
```
.lrv-a-grid {
	--cols: 1;

	display: grid;
	grid-gap: 1.25rem;
	grid-template-columns: repeat( var( --cols ), minmax( 0, 1fr ) );
}

.lrv-a-cols2 {
	--cols: 2;
}

@media( min-width: $screen-desktop ) {

	.lrv-a-cols4\@desktop {
		--cols: 4;
	}

}
```

## Use in a project:

To add new grids in a project, create a-grid.{chunk}.inline.scss and add the following:

```langauge-scss
$grids: (
	(
		columns: 4,
		spans: ( 2, 3, ),
		breakpoint: tablet,
	),
);

@include a-grid( $grids );
```

This will output something like:

```
@media min-width( ${TABLET} ) {

	.a-cols4\@tablet {
		--cols: 4;
	}

	.a-span\@tablet {
		grid-column: span 2;
	}

	.a-span3\@tablet {
		grid-column: span 3;
	}
}
```

`.lrv-a-cols4@tablet` must be applied along with `.lrv-a-grid` to set up the main part of the grid. 

A few important things to note:

* In the mixin, **grids must be in order of media queries to maintain the cascade**, e.g. desktop-xl grids are at the very end, breakpoint-less grids at the top.
* By default, grid items will each span
a single column. 
* Apply a trailing comma to the list of spans, and in general, use trailing commas in Sass lists.
* It is best practice to apply `lrv-a-grid-item` to child elements of an `a-grid` for both readability and a few edge cases, but note that some code-bases have not done this.

## Examples

If mobile is two columns:
+----+----+
|    |    |
|    |    |
+---------+
|    |    |
|    |    |
+----+----+

And desktop is four columns:
+------+------+------+------+
|      |      |      |      |
|      |      |      |      |
+------+------+------+------+

The markup would be:

```language-html
<div class="lrv-a-grid lrv-a-cols2 lrv-a-cols4@desktop">
	<div class="lrv-a-grid-item"></div>
	<div class="lrv-a-grid-item"></div>
	<div class="lrv-a-grid-item"></div>
	<div class="lrv-a-grid-item"></div>
</div>
```

If mobile is one column:
+--------+
|////////|
|////////|
+--------+
|        |
+--------+
|        |
+--------+

And desktop is a four column grid, with the first element spanning two columns:
+------+------+------+------+
|/////////////|      |      |
|/////////////|      |      |
+------+------+------+------+

```language-html
<div class="lrv-a-grid lrv-a-cols4@desktop">
	<div class="lrv-a-grid-item lrv-a-span2@desktop"></div>
	<div class="lrv-a-grid-item"></div>
	<div class="lrv-a-grid-item"></div>
</div>
```

## Extendable?

**Do not extend `a-grid`**. Use utilities or create a separate algorithm.

The class name `a-grid` should _only_ be used for declarations that apply to this basic, equal column CSS grid, and that **does not include grid-gap**. Any adjustments in `grid-gap` or specific grid configurations beyond equal columns should be done with `u-grid` utilities.

For example, to apply a larger grid-gap to an `a-grid`, you could add this to `03-utilities/u-grid.{chunk}.inline.scss`:

```
.u-grid-gap-2\@desktop {
	@include pmc-breakpoint( desktop ) {
		grid-gap: $spacer-2;
	}
}
```

And apply `u-grid-gap-2@desktop` to the same element as `lrv-a-grid`.
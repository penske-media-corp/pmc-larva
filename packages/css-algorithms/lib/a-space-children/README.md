// Space Children
//
// The Space Children algorithm applies a space between the direct children of the element
// it is applied to along with a wrapping flex layout. It uses the experimental row-gap
// and column-gap properties, and provides a margin fallback for older browsers.
//
// The spacer value is handled with a custom property called `--a-space-children-spacer`.
//
// Markup: a-space-children.html
//
// .a-space-children-horizontal.a-space-children--050 - Space children horiztonally with a gap of 0.5rem.
// .a-space-children-vertical.a-space-children--1 - Update the `--a-space-children-spacer` custom property to `$spacer-1` and set the flex direction to column.
//
// Style Guide: Algorithms.SpaceChildren

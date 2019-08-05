# Space Children

The Space Children algorithm applies a space between the direct children of the element
it is applied to along with a wrapping flex layout. It uses the lobotomized owl selector with a margin for all browsers, and in the future can support the `gap` property.

The spacer value is handled with a custom property called `--a-space-children-spacer`.

* .a-space-children-horizontal.a-space-children--050 - Space children horiztonally with a gap of 0.5rem.
* .a-space-children-vertical.a-space-children--1 - Update the `--a-space-children-spacer` custom property to `$spacer-1` and set the flex direction to column.


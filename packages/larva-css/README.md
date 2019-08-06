# Larva CSS

This package contains Larva's base CSS, CSS algorithms, utlities, and CSS for JS patterns from larva-js.

## Concepts

### "Atomic" or "Functional" CSS

### Removing the Burden of Naming

Unless you are authoring a CSS algorithm, you should not have to name a new class.

### Cascading and Specificity

Directories are ordered according to the cascading of styles, inspired by ITCSS. Generic CSS will almost always be overridden, so it is first. Unless selector specificty says otherwise (e.g. `a-space-children` or the image in `a-crop`), CSS algorithms should be overridden by utilities. The CSS related to JS interactivity comes last because it should be the most important in the cascade.

## Terminology

*Generic* styles are any basic reset styles, usually applied to general elements. Larva does not use a formal reset like Normalize, rather, any initial property values are overridden in this directory as needed. For example, removing margins from headings and adding box-sizing: border-box to all elements.

A *utility* is a single* declaration ruleset that is named according to the declaration and prefixed with a `u-*`. These sometimes come from SCSS generators, but many are authored by hand. A few examples (namespaced with pmc-* to indicate they come from this repository):

* pmc-u-display-block
* pmc-u-color-brand-primary
* pmc-u-margin-tb-1@tablet

\* The only time a utility would have more than one declaration is for margin and padding where top/bottom and right/left values can be in the same ruleset.

An *algorithm* is a more involved ruleset or set of rulesets that accomplished a specific styling goal that is not reasonable to accomplish with utilties, and generally makes use of browser algorithms or familiar CSS programming patterns. A few examples:

* pmc-a-space-children - utilized the owl selector pattern to apply space between child elements.
* pmc-a-glue - an algorithm for "glueing" one element onto another with absolute positioning.
* pmc-a-unstyle-list – a straightforward set of declarations that remove basic list styling.

The *js* directory contains CSS corresponding to interactivity from larva-js. These styles could be kept alongside the JS, but in order to minimize build tool dependencies, there are kept here, in the larva-css package.

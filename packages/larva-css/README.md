# Larva CSS

This package contains Larva's base CSS, CSS algorithms, utlities, and CSS for JS patterns from larva-js.

## Usage

```
npm install @penskemediacorp/larva-css --save
```

Then include the CSS from @penskemediacorp/larva-css/build/css in your asset pipeline. Make sure that the CSS files containing `inline` and `async` are loaded accordingly.

## Concepts

### "Atomic" or "Functional" CSS

Coming soon!

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

## Naming SCSS Files

The SCSS file should be named according to the chunk it will be included in when used in an actual product, and whether it should be loaded asynchronously or inline. The formular for naming a file:

`{a|u|js}-{baseName}.{chunkName}.{inline|async}.scss`

Example, full file names:

* u-background.common.async.scss
* u-font-size.single.async.scss
* a-gradient-after.common.async.scss
* a-archive-grid.archive.inline.scss
* js-MobileHeightToggle.common.async.scss

### Namespace {a|u|js}

- a, for algorithm
- u, for utility
- js, styling paired with a JS pattern
- No namespace for generic or reset styles

### baseName

The baseName of a pattern is the consistent name that is included before all responsive suffixes and BEM elements or modifiers.

For example, `a-article-grid` could contain `a-article-grid__sidebar` or `a-article-grid--3col`, but the name of the file only contains a-article-grid.

### chunkName

The name of the chunk where this algorithm should be included. Most algorithms will be common, but there will certainly be cases when algorithms are written for specifc projects that may have their own chunk naming convention. When naming chunks in a WordPress theme, they should map directly 1 to 1 with the queried template where the CSS is equeued or inlined.

### Async or Inline

These terms refer to whether or not the algorithm should be included in inlined, or "critical CSS", or in a file loaded asynchronously.

inline should be used for CSS that is applied to elements that are both "above the fold" and contain properties that come into play at the layout phase in rendering. In other words, they are crucial for the first paint of the page. Examples are any properties part of the box model, positioning, layout APIs like Grid and Flexbox, font sizing, and more.

async should be used for CSS that is not critical to the first paint i.e. to making the page content readable, and that apply during the paint and composite phases of rendering. These are properties like color, background, transition, and box-shadow.
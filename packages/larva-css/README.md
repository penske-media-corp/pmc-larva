# Larva CSS

This package contains Larva's base CSS, CSS algorithms, utlities, and CSS for JS patterns from larva-js.

## Concepts

_Coming soon_

## Terminology

*Generic* styles are the any basic reset styles. Larva does not use a formal reset, rather, any property overrides are added to this directory as needed. For example, removing margins from headings and adding box-sizing: border-box to all elements.

A *utility* is a (mostly) single declaration ruleset that is named accordingly and prefixed with a `u-*`. These sometimes come from SCSS generators, but many are authored by hand. A few examples (namespaced with pmc-* to indicate they come from this repository):

* pmc-u-display-block
* pmc-u-color-brand-primary
* pmc-u-margin-tb-1@tablet

An *algorithm* is a more involved ruleset or set of rulesets that accomplished a specific styling goal that is not reasonable to accomplish with utilties, and generally makes use of browser algorithms or familiar CSS programming patterns. A few examples:

* pmc-a-space-children - utilized the owl selector pattern to apply space between child elements.
* pmc-a-glue - an algorithm for "glueing" one element onto another with absolute positioning.
* pmc-a-unstyle-list – a straightforward set of declarations that remove basic list styling.

The *js* directory contains CSS corresponding to interactivity from larva-js.

## The Ordering of Directories

Directories are ordered in terms of intended specificty, inspired by ITCSS. Generic CSS will almost always be overridden, so it is first. Unless selector specificty says otherwise (e.g. a-space-children or the image in a-crop), CSS algorithms can be overridden by utilities. The CSS related to JS interactivity comes last because it should be the most important in the cascade.

## Anatomy of an Algorithm

Each algorithm should contain the following files:

```
|-- a-name
	|-- a-name.{chunkName}.{async|inline}.{scss|css}
	|-- a-name.html
	|-- a-name.browser-test.js
	|-- README.md
```

The HTML file should contain the minimum HTML required to reflect the functionality. 

### CSS-only wherever possible!

If you algorithm does not use any Sass, there is no need to pre-process it through Sass, so you can work directly in a CSS file. Although this might be unusual since we need to use tokens for a lot of styling, we should try to use CSS-only wherever possible! When developing relative layouts with CSS Grid, this is certainly a possibility.

### Naming the Algorithm

The name of the algorithm should be presentational in nature, and indicative of the CSS programming, _not_ oriented around the name of a UI element. Algorithms follow the development practice of small, well-named functions. 

For example, `a-card-title` is a very poor algorithm name because it does not tell a fellow developer _what_ the CSS algorithm is doing. Essentially, any CSS could be in something called `a-card-title`. Some better names might be:

* `a-minmax-font-size` for an algorithm that controls the min and max in the font-size property.
* `a-vertically-centered-border-behind` for an algorithm that adds a vertically centered border behind an element.
* `a-fade-in-on-hover-before` for an algorithm that fades in the `::before` pseudo-element when its hover state is triggered.

### Naming the (S)CSS File

The algorithm's CSS file should be named according to the chunk it will be included in when used in an actual product. Example, full file names (note that these may have originated as SCSS files):

* `a-minmax-font-size.common.inline.css`
* `a-offset-dots-behind.single.async.css`
* `a-gradient-after.common.async.css`
* `a-archive-grid.archive.inline.css`

Note that the algorihtm name should be the _base_ name of the algorithm. These files may contain classes with responsive suffixes, elements, and modifiers, but it only necessary to include the base name in the file. Read on for further description of these naming parameters.

#### `chunkName`

The name of the chunk where this algorithm should be included. Most algorithms will be `common`, but there will certainly be cases when algorithms are written for specifc projects that may have their own chunk naming convention. When naming chunks in a WordPress theme, they should map directly 1 to 1 with the queried template where the CSS is equeued or inlined.

#### `async` or `inline`

These terms refer to whether or not the algorithm should be included in inlined, or "critical CSS", or in a file loaded asynchronously. 

`inline` should be used for CSS that is applied to elements that are both "above the fold" and contain properties that come into play at the layout phase in rendering. In other words, they are crucial for the first paint of the page. Examples are any properties part of the box model, positioning, layout APIs like Grid and Flexbox, font sizing, and more. 

`async` should be used for CSS that is not critical to the first paint i.e. to making the page content readable, and that apply during the paint and composite phases of rendering. These are properties like color, background, transition, and box-shadow.

## Usage

Refer to the README for each algorithm for usage instructions.

## Development

Algorithms should be developed and build within a single SCSS file that outputs CSS to a file in the same directory with the same name. There is a watch command registered using the node-sass CLI that can be run from the packages/css-algorithms with the command `npm run sass`.

## Testing

CSS algorithms should have tests where possible. These tests are written in client side JavaScript and can be included in both the example HTML file in each pattern for unit testing, or included in any environment using the algorithm for integration tests.
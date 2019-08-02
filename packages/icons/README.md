# Icons & Logos

Icons should be added to this directory sparingly. All files in this directory are compiled into an SVG icon sprite that is used in conjunction with `c-icon`. This file is loaded asynchronously, and should be kept as small as possible and should only contain icons used globally e.g. the search icon, social icons, and a chevron.

**Icons are available with both fragment identifiers and as inline SVGs. Logos are only available as inline SVG.**

## Notes

Icons are available as SVG fragments to be accessed with `a-icon` in CSS and as inline SVG, accessed with `c-icon` and displayed in the `use` element.

In order for inline SVG with `c-icon` to work, the defs.svg must be inlined and hidden on the page. For the stack, or CSS icons with `a-icon` to work, the stack.svg must be available for retrieval from the stylesheet.

More information here: [SVG Fragment Identifiers](https://css-tricks.com/svg-fragment-identifiers-work/).

## Adding new icons and logos

There are two scripts for building the SVG sprites. To build the defs, or inline SVG, add a new icon to the directory and run the following from the root of this package:
```
node lib/defs.js
```

To build the stack, add a new icon, and run the following:
```
node lib/stack.js
```
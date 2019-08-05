# Larva

This is the mono-repo for PMC's design system, Larva. **It is in active development and should not be used.** When it is more mature, Larva's packages can used on any web project.

## About

The term "design system" might bring to mind a pristine library of interface elements. Larva is not this kind of design system. It is more like a suite of tools that can be used to rapidly _build_ interface elements. The nature of serving an ever-growing number of brands with unique identities and rapidly changing business requirements necessitate this structure.

Larva's architecture is designed to accommodate the unpredictable nature of the publishing industry, to serve many different brands and visual styles, and to fit in with PMC's core WordPress technology by providing tools that layer in a component API for PHP templating.

### Packages

Packages pre-fixes with larva-* are intended to go together. General purpose packages are not prefixed with larva-*.

The core Larva packages are:

@penskemediacorp/larva - Provides a server for viewing patterns and scripts for working with patterns.
@penskemediacorp/larva-scss - SCSS tools e.g. mixins, design tokens, and class generators. Can be used independently.
@penskemediacorp/larva-css - Compiled, ready to go CSS utilities, algorithms, and CSS corresponding to JS files. 
@penskemediacorp/larva-js - JS for interactivity and utilities for tasks like font loading. 
@penskemediacorp/larva-svgs - SVG icons and logos available as an SVG stack for use in CSS with `a-icon`, and as defs for usage inline with markup with `c-icon`.
@penskemediacorp/larva-patterns - Markup patterns (components, objects, and modules) that are configured with assets provided by the above packages. Written in Twig.

Possible future packages:

@penskemediacorp/larva-fontloader - JS for interactivity and utilities for tasks like font loading. 

## Usage

Consult each package's readme for a description and directions for use.
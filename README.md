# Larva

This is the mono-repo for PMC's design system, Larva. **It is in alpha.**

## About

The term "design system" might bring to mind a pristine library of interface elements. Larva is not this kind of design system. It is more like a suite of tools that can be used to rapidly _build_ interface elements, and share them between brands.

Larva's architecture is designed to accommodate the unpredictable nature of the publishing industry, to serve many different brands and visual styles, and to fit in with PMC's core WordPress technology by providing tools that allow a component-type API for PHP templating.

## Why

What was wrong with the old way of building UI? Why use Larva?

- Provides clear separation between FE & BE in dev cycle
- UI dev is fast, not dependent on WP local dev for dummy data
- Pattern library and theme are maintained together
- Share UI across brands
- Controls CSS quality across teams
- Consistent FE architecture for all brands / all code-bases will look the same / can share solutions to problems between themes
- Removes the burden of naming - re-usable names for UI code
- Accommodates different brand styles
- Creates a UI language for engineering/design/product

## Packages

Packages pre-fixes with larva-* are intended to go together. General purpose packages are not prefixed with larva-*.

The core Larva packages are:

* @penskemediacorp/larva - Provides a server for viewing patterns and scripts for working with patterns.
* @penskemediacorp/larva-scss - SCSS tools e.g. mixins, design tokens, and class generators. Can be used independently.
* @penskemediacorp/larva-css - Compiled, ready to go CSS utilities, algorithms, and CSS corresponding to JS files. 
* @penskemediacorp/larva-js - JS for interactivity and utilities for tasks like font loading. 
* @penskemediacorp/larva-svgs - SVG icons and logos available as an SVG stack for use in CSS with `a-icon`, and as defs for usage inline with markup with `c-icon`.
* @penskemediacorp/larva-tokens - [fill this in].
* @penskemediacorp/larva-patterns - Markup patterns (components, objects, and modules) that are configured with assets provided by the above packages. Written in Twig.

## Usage

Consult each package's readme for a description and directions for use.

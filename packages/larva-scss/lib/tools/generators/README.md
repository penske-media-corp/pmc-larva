# Generators

Generators are Sass mixins that generate utility classes and algorithms based on a given map of values.

The types of generators are as follows:
* Generators for specific patterns (e.g. `a-crop`, `a-grid`, `u-padding`)
* Flexible generator for single purpose utility classes (e.g. project-utility-generator)
* Token-based generators that output custom properties that are expected to be available via larva-tokens 

## Public API

Generators are designed to be wrapped in developer-friendly mixins for use in consuming projects. See the [Larva Wiki](https://github.com/penske-media-corp/pmc-larva/wiki) to learn which generators are available for public use.
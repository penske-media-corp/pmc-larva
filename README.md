# Larva

## About

This is the mono-repo for PMC's design system, Larva. **It is in active development and should not be used.** When it is more mature, Larva can be used on any web project that can render Twig templates.

The architecture is designed to accommodate the unpredictable nature of the publishing industry, to serve many different brands and visual styles, and to fit in with PMC's core WordPress technology by providing a component API for PHP templating.

The term "design system" might bring to mind a pristine library of interface elements. Larva is not this kind of design system. It is more like a suite of tools that can be used to rapidly _build_ interface elements. The nature of serving an ever-growing number of brands with unique identities and rapidly changing business requirements necessitate this structure.

## Packages

All packages are available via npm.

- @penskemediacorp/larva - Server and CLI tools.
- @penskemediacorp/larva-patterns - Core Twig patterns and configuration for building modules.
- @penskemediacorp/larva-scss - SCSS generators, mixins, and functions.

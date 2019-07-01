# Utility Class Generators

Generators output classes according to a list or map of tokens that are provided by a consuming project. Each generator is prefixed and underscore, and is called by a `pmc-*` wrapper mixin that outputs the actual classes. The `pmc-*` mixin is called in the theme, in a file that corresponds 1 to 1 with the name and location of the mixin's file in this repository.

## To add a new generator:

Generators should be added very sparingly and should be "brand agnostic" i.e. generators are meant to serve all brands and should not contain any values or CSS specific to a single design. 

That being said, if a new generator is deemed appropriate, the following steps are generally how you would go about it:

1. Create a file in 01-tools/mixins/generators following the naming conventions established in the existing file names.
2. Import that file in 01-tools/tools.scss.
3. Add a test to 01-tools/tools.spec.scss.
4. Add a new file reflecting the wrapper mixin for the generator e.g. `u-#{$property}.scss`.
5. Create a wrapper mixin to be called in a consuming theme e.g. `@mixin pmc-u-#{$property}`.

## To use a generator in a theme:

1. Add a corresponding `u-*.scss` file in the theme's assets/patterns/07-utilities directory.
2. Import the generator's wrapper mixin using the alias provided by the theme's pmc.config.js. Likely @import '~@pmc/utilities/u-#{$property}.scss`.
3. Call the generator with values defined by the theme.
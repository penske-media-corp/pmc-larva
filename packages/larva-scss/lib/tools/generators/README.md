# Class Generators

Generators output classes according to a list or map of tokens that are provided by a consuming project. Each generator is prefixed with an underscore, indicating is is private and should not be called directly in a consuming project. Generators are made available with a wrapping mixin with a `pmc-*` namespace that outputs the actual classes. The `pmc-*` mixin is called in the theme, and can be imported from the `dist/generators` file in this repository.

## To add a new generator:

Generators should be added very sparingly and should be "brand agnostic" i.e. generators are meant to serve all brands and should not contain any values or CSS specific to a single design. 

That being said, if a new generator is deemed appropriate, the following steps are generally how you would go about it:

1. Create a file in ./tools/generators following the naming conventions established in the existing file names i.e. `_{descriptor}-{selector type}-generator.scss`.
2. Import that file in ./tools/tools.scss.
3. Add a test to ./__tests__/tools/generators.test.scss.
4. Add a wrapper mixin with the pmc-* namespace to expose the generator to consuming projects in ./dist/generators.

## To use a generator in a theme:

1. Add a corresponding `u-*.{chunkName}.{inline|async}.scss` file in the theme's assets/patterns/##-utilities directory.
2. Call the generator with values defined by the theme.
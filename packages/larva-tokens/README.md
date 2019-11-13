# Larva Design Tokens

This package provides a default set of design tokens for colors and font families, and specific per-brand configurations. It uses Theo for generating the token files.

The src/base/ directory contains default tokens, and overrides and brand-specific tokens are added in each brand file in src/brands.

To add tokens for a new brand, duplicate the src/brands/_template.json and update the brand tokens accordingly. If you need to add a new color or font-family, add it to src/base/aliases.json following these naming conventions:

* All token names should be in CAPS
* Colors should begin with a basic color name e.g. RED, BLUE, or GREEN, and followed by the lightness value in the color's HSL value which is the third value. For example a light purple like #B9C4F0 has an HSL of HSL(228, 65%, 83%). It would be called PURPLE_83. [This website](https://convertingcolors.com/) is useful for converting colors.
* All tokens are prefixed with their CSS property, e.g. background is BACKGROUND_, text colors are COLOR_, and font family values prefixed with FONT_FAMILY_.
* Font family values should be a short CSS font stack.

To build design tokens, run `npm run build` command from packages/larva-tokens/.

This will generate a Sass map containing the tokens, a CSS file containing the tokens as custom properties, and an HTML file that can be used for reference.

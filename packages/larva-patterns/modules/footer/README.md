# footer

This module is the large footer at the bottom of each of PMC's sites. It contains a set of menus with corporate and company information, a newsletter signup, list of social networks, and a tip submission prompt. 

This module should not be designed according to brand, and should only assume the primary font family for headings. It relies on the MobileHeightToggle JS pattern for handling the menus on smaller screens.

To use this module in a theme, the templates should be parsed from Larva, as well as the JSON for `footer` parsed from Larva. 

If this module or any of the modules included in it are updated, follow these steps to update the module in a theme, or to use it for the first time:

1. Uncomment the relativeSrcOverride key in the `parser` object in larva.config.js
2. Ensure that the modified file time of the Twig file is later than the PHP files, or delete the existing PHP template files
3. run `npm run parser` from theme/assets/
4. run `npm run write-json larva modules footer` from theme/assets/
5. Re-comment relativeSrcOverride key in the `parser` object in larva.config.js
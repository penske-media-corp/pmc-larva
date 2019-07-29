# CSS Utilities

CSS utilities are single declaration CSS classes, often generated according to a map of Sass variables, or tokens. All utilities originating from this repository are namespaced with `.pmc-u-*` to indicate they are utilities originating from the design system.

Files are named according to the chunking naming convention outlined in the [CSS Algorithms package README](https://github.com/penske-media-corp/pmc-larva/tree/master/packages/css-algorithms) (will me moved to a central location, eventually).

## Usage

To build utilties, ensure that the `run` function is called in this packages' index.js with the file extension for the chunk of utilities you want to build.

Then, from this directory, run the command:

`npm run watch`
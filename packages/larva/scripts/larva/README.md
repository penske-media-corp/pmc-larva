# IMPORTANT!!!!

After this directory has been copied into a consuming project, [follow these steps](https://confluence.pmcdev.io/x/JQqeAw), delete this section of the readme, and replace the {Project} text below with the name of the brand (in the bright future, this will be automated).

# {Project} Larva

## Links

* [{Project} design tokens]().
* [{Project} style guide on Invision]().
* [{Project} style guide built on Larva server]().

## Development

To start developing:

1. Run `npm install` from assets.
2. Run `npm run larva` to open the Larva server.
3. In a new command window, run `npm run dev` to start the watch task for JS and SCSS compilation.

## Asset Building

* `npm run prod` – Build minified CSS and JS for production.
* `npm run prod:scss` - Compile only CSS.
* `npm run prod:js` - Compile only JS.
* `npm run dev` - start a watcher for JS and one for SCSS files.
* `npm run dev:scss` - Start the watcher for SCSS.
* `npm run dev:js` - Start the watcher for JS.
* `npm run build-icons` – Build an icon sprite from SVGs inside assets/src/svg/icons to assets/build/defs/svg/svg-sprite.defs.svg

## Larva Commands

* `npm run larva` - Start the Larva pattern server. Navigate in the browser to http://localhost:3000.
* `npm run parser` - Parse recently changed pattern Twig files to PHP.
* `npm run write-json` - write pattern objects to JSON files.

## Linting

* `npm run lint` - Lint SCSS and JS in src/
* `npm run lint:scss` - Lint SCSS.
* `npm run lint:js` - Lint JS in src/.
* `npm run lint-fix:scss` - Lint and fix auto-fixable errors in SCSS.
* `npm run lint-fix:js` - Lint and fix auto-fixable errors in JS.

## Read the docs

Read about developing UI [on the Larva Wiki](https://github.com/penske-media-corp/pmc-larva/wiki).

# Troubleshooting

Some placeholder text used within Larva could leak into your project. To prevent that you will have to reset those fields as follow.

Given `c_figcaption_caption_markup` has a default value and you want to reset it in your project:

```
profile_blurb_card.o_figure.c_figcaption.c_figcaption_caption_markup = '';
```

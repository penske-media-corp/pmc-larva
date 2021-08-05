# Larva SVG

SVGs and SVG sprites are a great way to handle icons as an alternative to icon fonts which can weigh down a page and be inaccessible for users. This package contains **brand-agnostic** SVG logos and icons for PMC's websites as both individual files and as an SVG sprite, a wonderful alternative to icon fonts.

An SVG sprite is basically a single file that contains a bunch of SVGs (similar to CSS background image sprites) that can be loaded one time, then in the markup of a page, you can use a shorthand `use` tag to refer to the id of an SVG from the larger sprite file. This minimizes both HTTP requests and provides a standardized way to handle icons.

The package provides:

1. Indivdual, optimized SVG icons
1. A pre-built SVG sprite to use along with the `c-icon` Larva pattern
1. A script to build SVG sprites at the project-level for brand-specific SVG assets

## Links

* [Icons available in this package](https://penske-media-corp.github.io/pmc-larva/packages/larva-svg/build/defs/sprite.defs.html)
* [svg-sprite npm package documentation](https://github.com/jkphl/svg-sprite)
* [CSS-Tricks article about SVG sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/)

## Overview of Functionality

**This package uses the low-level svg-sprite npm package to build an SVG sprite from a directory of SVG files**. It can be used to build sprites in this repository, or in a consuming project.

1. Given a directory of SVG files stored inside `./src/svg/`
2. `index.js` is exectuted as a node script from `./`
3. All files in `./src/svg/` are piped into the svg-sprite npm package
4. The SVGs are optimized via SVGO
5. The SVGs are compiled into a single sprite file
6. The package's output is written to `./build/defs/`

**Important note:**

The consuming project is responsible for:

1. Loading the sprite on the front-end.
2. Providing a script to combine the from larva-svg with a local SVG sprite, if applicable.

Examples are provided in this documentation, but this package does not provide the above functionality.

## Adding a New Icon

1. Download the icon as an SVG file.
2. Copy the file into src/svg in this repository.
3. Run `npm run build-icons` from pmc-larva/packages/larva
4. Run `npm run prod` from the root of this repository.

## Development Setup

### To copy the icon sprite from this package into a consuming project:

1. Install the package. Run this command from the same location as package.json.
	```language:bash
	npm install @penskemediacorp/larva-svg --save
	```

2. Create a directory `./build/svg`. (where `./` is the root of `assets` or wherever your project stores front-end files)

3. Add the following copy script to the local project's package.json:

	```language:json
	"scripts": {
		"update-icons": "cp ./node_modules/@penskemediacorp/larva-svg/build/defs/svg/sprite.defs.svg ./build/svg",
	}
	```

4. Run `npm run update-icons` to copy the sprite to your local project.

5. Consider using the following tools to load the sprite on the front-end:
- `ajaxIconSprite` from [@penskemediacorp/larva-js](https://www.npmjs.com/package/@penskemediacorp/larva-js) npm package for loading the sprite file asynchronously and injecting it into the DOM
- `c-icon` from [@penskemediacorp/larva-patterns](https://www.npmjs.com/package/@penskemediacorp/larva-patterns) is a Twig pattern that is configured with the appropriate markup to load icons from a sprite.

### To build a project-level sprite with brand-specific SVGs:

After completing the above steps, you can use the larva-svg package to build a local SVG sprite with brand-specific icons and logos by following these steps:

1. Create the directory `./src/svg`
2. Add some SVG files to that directory. If these SVGs are exported from Sketch, please make sure they have an appropriate title, and we suggest removing all `fill` attributes.
1. Add this script to package.json:
	```language:json
	"scripts": {
		"svg-sprite": "node node_modules/@penskemediacorp/larva-svg",
	}
	```
3. Run the script with `npm run svg-sprite`
4. You should see a new directory that contains the optimized SVGs in sprite form, as well as an HTML file to show the available icons: `./build/defs/svg/sprite.defs.svg`

### Combining the larva-svg and the project-level sprites:

After completing the above steps, you will likely want to use use icons from _both_ larva-svg and this new sprite. Your project will need to provide an additional script to combine them.

The following is a small Gulp script for that, but any build tool or even a bash script could accomplish this. The goal is to concatenate the contents of the larva-svg sprite and the project-level sprite into a single file.

1. Install the following packages:
	```
	npm install gulp gulp-concat --save-dev
	```

2. Create and add the following to `./gulpfile.js`:
	```language:javascript
	const gulp = require( 'gulp' );
	const concat = require( 'gulp-concat' );

	// Combine SVG sprites into one.
	exports.sprite = function( done ) {
		gulp.src( './build/**/*.defs.svg' )
		.pipe( concat( 'svg-sprite.svg' ) )
		.pipe( gulp.dest( './build/svg/' ) );
		done();
	};
	```

3. Update your scripts in package.json to:
	```
	"scripts": {
		"update-icons": "cp ./node_modules/@penskemediacorp/larva-svg/build/defs/svg/sprite.defs.svg ./build/icons && npm run svg-sprite",
		"svg-sprite": "node node_modules/@penskemediacorp/larva-svg && node_modules/.bin/gulp sprite"
	}
	```

4. Run the command `npm run svg-sprite`

5. Ensure that the sprite you are loading on the front-end points to `./build/svg/svg-sprite.svg`

## Things To Be Aware Of

### Accessibility

When icons are used without accompanying text to indicate a link, they must have text available to a screen reader. The can be done by adding an `aria-label` attribute on the containing anchor or button element, like so:

	<a href="#" aria-label="icon name">
		<svg>
			<use xlink:href="#icon-name" />
		</svg>
	</a>

Where `icon-name` is the name of the file where the SVG originated. This markup is handled by default in `c-icon` from larva-patterns.

### Styling SVGs can be tricky

Inline SVGs do not behave like images you might be used to. Be sure to double check an SVGs inline height, width, and viewBox attributes as you are debugging. The following links may prove helpful:

* [viewBox on MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox)
* [How to Scale SVG](https://css-tricks.com/scale-svg/) by Amelia Bellamy-Royds

Sometimes adding a max-width or max-height to a wrapping element, and a width-100p to the SVG will solve your problems.

### Icon and logo fills should inherit their color from parent element

It is a major pain to try to manage SVG fill attributes when using sprites. The recommended approach is to globally apply the following CSS in a generic or reset section of the styles, towards the very top of the cascade (so that it can be easily overridden):

```
svg {
	fill: currentColor;
}
```

Then, you can add a color to an element containing the SVG, like so:

```
<a href="#" aria-label="icon name" class="lrv-u-color-brand-primary">
	<svg>
		<use xlink:href="#icon-name" />
	</svg>
</div>
```

And the SVG will inherit that color for its fill.

### SVG sprites should contain simple logos and icons only

Do not add complex illustrations to the SVG sprite because it will cause significant bloat the the file. Complex SVGs can be added as usual image tags, or directly inlined into the markup.

## History and Changelog

This package contains a partial implementation of support for the icons as Sass variables to be used with the CSS algorithm, `a-icon`, so the icons can be added in pseudo-elements.

Also, in the future, we will hopefully add a Node script to handle the larva-svg and project-level sprite concatenation so that consuming projects will have less scripts to manage.

## Support

Post questions in the #larva Slack channel and @laras126.
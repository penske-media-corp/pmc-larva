# Twig To PHP Parser

This package is intended to work with Larva Patterns to both parse patterns into a parent theme and a child theme. It expects the following directory structure:

```
|- pmc-consuming-theme/
	|- assets/
		|- build/
		|- src/
			|- patterns/
				|- 04-components/
				|- 05-objects/
				|- 06-algorithms/
		|- larva.config.js
	|- template-parts/
		|- patterns/
```

## Very Important To Know

~When parsing includes, the parser looks for the `@larva` namespace, and will point includes to `PMC_CORE_PATH` when it finds it. Otherwise, includes will point to CHILD_THEME_PATH.~ This is not in effect yet. Everything is contained to the child theme.

The parser supports a *very limited amount of Twig* and relies on keywords in data names in order to parse escaping correctly. Please refer to the Confluence documentation for Twig authoring guidelies: https://confluence.pmcdev.io/x/JoGJAg

## Usage

First, add an entry for the parser to larva.config.js:
```language-js
module.exports = {
	// Other config

	parser: {
	}
}
```

The parser object supports the following configuraiton:
```language-js
	parser: {
		twigDir: path.resolve( './new-path/to-twig/' ), // Default /theme/assets/src/patterns.
		phpDir: path.resolve( './new-path/to-php/' ), // Default /theme/template-parts/patterns.
		isUsingPlugin: true, // Default false.
	}
```

Then, run the script from the assets directory by executing the package binary like so:
```
$ node_modules/.bin/twig-to-php-parser
```

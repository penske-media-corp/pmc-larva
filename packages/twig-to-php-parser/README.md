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

The parser supports a *very limited amount of Twig* and relies on keywords in data names in order to parse escaping correctly. Please refer to the Confluence documentation for Twig authoring guidelines: https://confluence.pmcdev.io/x/JoGJAg

## Usage

First, add an entry for the parser to larva.config.js:
```language-js
module.exports = {
	// Other config

	parser: {
	}
}
```

The parser object supports the following configuration:
```language-js
	parser: {
		twigDir: path.resolve( './new-path/to-twig/' ), // Default /theme/assets/src/patterns.
		phpDir: path.resolve( './new-path/to-php/' ), // Default /theme/template-parts/patterns.
		isUsingPlugin: true, // Default false.
	}
```

Then, run the script from the assets directory by executing the package binary like so:
```
./node_modules/.bin/twig-to-php-parser
```

Supported wp action in twig markup:
```language-twig
{{ wp_action( 'action_name', arg1, arg2, ... ) }}
```
would translate to
```language-php
<?php do_action( 'action_name', $arg1, $arg2, ... ); ?>
```

## How To
TODO: Standardize and improve code structure for future improvement

### Add a new function

- New function add must follow twig function syntax: function_name( p1, p2, ... )
- The new `function_name` must be added to larva/lib/server.js to support twig linting

		// Add custom function support for doing wp action: {{ function_name( ... ) }}
		twing.addFunction(new TwingFunction('function_name',() => {
			return Promise.resolve(''); // must return a promise result
		}));

- Add a new code block function/class to translate twig markup into php code block to twig-to-php-parse.php
	- Code block function should take a twig markup string as input 
	- Return the translated php code block
	  
			function parse_my_new_function( $twig_markup ) {
				// Code to parse and translate $twig_markup
				return $twig_patterns;
			}
	  
	- Modify function twig_to_php_parser and call to the new parser function to process $twig_markup_replace_main variable
		
			$twig_markup_replace_main = parse_my_new_function( $twig_markup_replace_main ) 

- Add unit test
	- Add js function to index.js to load the php code
	- Add unit test to test the new parser function
		
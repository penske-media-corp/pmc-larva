# Base stylelint Config

This is Larva's core configuration for stylelint, though it can be used in any codebase and is not dependent on other Larva packages. Key features include:

* @extends are prohibited
* BEM selector concatenation is prohibited
* Font sizes must be in `rem`
* Nesting is restricted to 2 levels, excluding media queries
* `px` are blacklisted except in box-shadow and border

## Usage

In a consuming projects stylelint.config.js, add:

```
{
	'extends': '@penskemediacorp/stylelint-config'
	'rules: { }
}
```

## Custom Formatter

This package also includes a custom formatter for stylelint where you can additional messages to the stylelint output for certain properties.

The custom formatter must be included in the configuration for running the stylelint command. In webpack, this would be part of the plugin configuration:

```
// webpack.config.js
plugins: [
	new stylelintPlugin({
		configFile: 'stylelint.config.json',
		formatter: path.resolve( '/path/to/custom-formatter.js' ),
		syntax: 'scss',
		context: path.resolve( './src' )
	}),
]
```

To use it, you can add an array of messages to the stylelint config object, like so:

```language-json
{
	"rules": {},
	"messages": [
		{
			"property": "font-size",
			"message": "Do not use font-size directly, use a utility class generated from u-text.scss instead."
		},
		{
			"property": "font-family",
			"message": "Do not use font-family directly, a utility class from u-text.scss or the font-family mixin located in tools/mixins."
		},
	]
}
```

### In the Future

This should likely be a separate repository since it has its own usage instructions, and the formatter itself needs some re-evaluating.
# Stylelint Plugin for CSS Algorithms

This Stylelint plugin is used to specify which properties are used in specific class patterns. While it is intended for use with CSS algorithms in our system, it is possible to use the configuration for any type of class pattern.

## Usage

```
npm install @penskemediacorp/stylelint-css-algorithms
```

In a project's stylelint.config.js, add the following entries to the rules object:

```
{
	'plugins': '@penskemediacorp/stylelint-css-algorithms' ),
	'rules': {
		'plugin/css-algorithms': {
			'a-space-children': [
				'margin-top',
				'margin-left',
				'display',
				'--a-space-children-spacer',
				'flex-wrap'
			],
			'a-glue': [
				'top',
				'right',
				'bottom',
				'left',
				'position',
				'z-index',
				'--a-glue-bottom',
				'--a-glue-top',
				'--a-glue-right',
				'--a-glue-left'
			]
		}
	}
}
```

## Future of this plugin

This plugin would potentially be useful with 1) a more generic name, not tied to PMC's naming conventions, and 2) possibly as a rule within the Stylelint repo called `selector-property-allowlist`. In either case, there would be a change to the configuration where the key – which is currently a string of the base naming of a pattern – would be a Regex or a specific selector.

If/when that happens, this plugin may be removed in favor of that, and we will need to update any configuration accordingly.

Read more here: https://notlaura.com/selector-property-whitelist-a-css-algorithms-rule-in-stylelint/
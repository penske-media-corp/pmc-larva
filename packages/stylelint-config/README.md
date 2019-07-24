# Base Stylelint Config

This is Larva's core configuration for Stylelint, though it can be used in any codebase and is not dependent on other Larva packages. Key features include:

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

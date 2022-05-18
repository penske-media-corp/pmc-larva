# Base eslint Config

This is Larva's core configuration for eslint, though it can be used in any codebase and is not dependent on other Larva packages.

Key features include:
* WordPress standards are used and extended
* Environments covered include es6, browser, node, commonjs and jquery
* Full config located in index.js

## Usage

In a consuming projects .eslint.json, start with:

```
{
  "extends": "@penskemediacorp/eslint-config"
}
```

## Add Custom Rules

The .eslint.json config can be extended to add custom rules by placing them before the extension of this package. Eslint use these custom rules when linting the project.

For example, this config is adding the rule of "no-console" to the current configuration:

```language-json
{
  "rules": {
    "no-console": 1
  },
  "extends": "@penskemediacorp/eslint-config"
}
```

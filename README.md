# PMC Packages

`npm install git+ssh://git@bitbucket.org/penskemediacorp/pmc-packages.git#v0.1`

Add the following aliases to `assets/pmc.config.js`:

```
'@pmc/mixins': path.resolve( __dirname, 'node_modules/pmc-packages/patterns/01-tools/mixins' ),
'@pmc/functions': path.resolve( __dirname, 'node_modules/pmc-packages/patterns/01-tools/functions' ),
'@pmc/utilities': path.resolve( __dirname, 'node_modules/pmc-packages/patterns/07-utilities' ),
'@pmc/js': path.resolve( __dirname, 'node_modules/pmc-packages/js' ),
```

Then, import an SCSS pattern into an SCSS file with the same name:
`@import '~@pmc/utilities/u-crop.scss';`

And generate utility classes by calling the namespaced mixin along with the appropriate parameters. In a themes's u-crop.scss, for example, you would call something like:

```
@include pmc-u-crop(
	(
		'2x3': (2, 3),
		'9x16': (9, 16)
	)
);
```

Which would generate the classes `.pmc-u-crop-2x3` and `.pmc-u-crop-9x16`.

### Important Note

All CSS output from pmc-packages should be namespaces with both ITCSS namespaces and the system namespace, e.g. `.pmc-u-*`. At the moment, pmc-packages should only output utilities, or the `u-` namespace.

### JavaScript

When importing JS patterns, you would do so like this:
`@import '@pmc/js/Dropdown';`

This will initialize the selector query for whatever the data attribute is for the JavaScript, in this case, `data-pmc-dropdown`. Be sure to refer to the pattern's documentation (which is coming soon...) to make sure you have implemented the `data-*` attributes appropriately. Like the CSS selectors, the JS selectors should also contain the `pmc-*` namespace.
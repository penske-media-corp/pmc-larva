# PMC Packages

`npm install git+ssh://git@bitbucket.org/penskemediacorp/pmc-packages.git#v0.1`

Add the following aliases to `assets/pmc.config.js`:

```
'@pmc/mixins': path.resolve( __dirname, 'node_modules/pmc-packages/patterns/01-tools/mixins' ),
'@pmc/functions': path.resolve( __dirname, 'node_modules/pmc-packages/patterns/01-tools/functions' ),
'@pmc/objects': path.resolve( __dirname, 'node_modules/pmc-packages/patterns/05-objects' ),
'@pmc/components': path.resolve( __dirname, 'node_modules/pmc-packages/patterns/06-components' ),
'@pmc/utilities': path.resolve( __dirname, 'node_modules/pmc-packages/patterns/07-utilities' ),
'@pmc/js': path.resolve( __dirname, 'node_modules/pmc-packages/js' ),
```

Then, import an SCSS pattern into an SCSS file with the same name:
`@import '~@pmc/utilities/u-crop.scss';`

And use the class with the `.pmc-*` namespace.

Or import some JS into a pattern:
`@import '@pmc/js/Dropdown';`

And be sure to add the relevant `data-*` attribute to pattern markup.
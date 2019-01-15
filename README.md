# PMC Packages

Note: replace the $VERSION in the below notes with the desired version, e.g. `1.1.0-alpha`

## Updating pmc-packages in a consuming project

pmc-packages uses Git tags and [Semantic Versioning](https://semver.org/) for versioning. After merging a PR with new functionality, do the following to update both pmc-packages and a consuming project:

1. Add a tag to master in this repo with `git tag -a v$VERSION -m 'Description of update'`
2. Update the `version` entry in pmc-packages package.json
3. In the consuming project, create a branch called update/pmc-packages-v$VERSION
4. Update the tag hash in the pmc-packages Git URL in the consuming project's package.json to reflect the new version number
5. Run `npm install` from theme-name/assets/.
6. Commit the package.json and package-lock.json updates with the message `chore: update pmc-packages to v$VERSION`
7. Open a pull request.

## Installing for the first time

From within the assets/ directory already containing a package.json, run:
`npm install git+ssh://git@bitbucket.org/penskemediacorp/pmc-packages.git#v$VERSION`

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

All CSS output from pmc-packages should be namespaces with both ITCSS namespaces (excluding Grid utilities) and the system namespace, e.g. `.pmc-u-*`. At the moment, pmc-packages should only output grid  utilities and traditional utilities with the `u-` namespace.

### JavaScript

When importing JS patterns, you would do so like this:
`@import '@pmc/js/Dropdown';`

This will initialize the selector query for whatever the data attribute is for the JavaScript, in this case, `data-pmc-dropdown`. Be sure to refer to the pattern's documentation (which is coming soon...) to make sure you have implemented the `data-*` attributes appropriately. Like the CSS selectors, the JS selectors should also contain the `pmc-*` namespace.
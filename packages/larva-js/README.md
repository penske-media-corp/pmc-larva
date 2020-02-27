# larva-js

This package contains JavaScript modules that are intended to be used in conjunction with markup from larva-patterns and CSS from larva-css. It is separated into its own package in order to maintain a separation of concerns, and so that it can potentially be used outside of Larva, if required.

The JS in this package is organized into two categories:
- `src/interface` – These are JS modules that provide interactivity for specific interface elements, for example VideoShowcase or EmailCapture, using an object-oriented approach. These modules likely have related CSS in larva-css/src/04-js and a related pattern in larva-patterns.
- `src/utils` – Utility oriented JS that does not correspond to specific user interface. These are items like the ajaxIconSprite.js and a helper for event delegation.

## Links

For both authoring and usage notes regarding each of the above categories, refer to the following:

**Module Readmes**
- [Interface JS Readme](./src/interface/README.md)
- [Utility JS Readme](./src/utils/README.md)

## Overview of Functionality

There is no functionality directly provided by this package. Consuming projects must import the desired JavaScript into their build step, and initialize it using functionality provided by each JS module.

**Refer to the larva-js source of the specific JS module you need**, but in general, this would be done as follows:

1. Ensure `@penskemediacorp/larva-js` is installed. It is included with the main `@penskemediacorp/larva` package, so if the project is a Larva project, then this step is complete.
2. Import the `init{ModuleName}s` function into the project-level asset building e.g. `import init{ModuleName}s from @larva-js/interface/ModuleName;` in common.entry.js.
3. Call the `init{ModuleName}s()` function inside an appropriate event listener, such as `DOMContentLoaded`.

If you are using UI built with Larva that goes along with the module, then things should "just work".

## Contributing to larva-js

Contributions to this repository can be made by using running Larva server inside the `pmc-larva/packages/larva` for a sandbox environment, and linking the larva-js package to test local changes.

First, clone the pmc-larva monorepo, then following steps should get you set up:

```
# Start within the pmc-larva monorepo root and npm link larva-js for local dev.
$ cd packages/larva-js && npm link
$ cd ../larva

# Set up the larva sandbox environment, linking larva-js
$ npm install && npm link @penskemediacorp/larva-js

# Start the larva server
$ npm run larva
```
Now, dependecies should be installed, and that the larva-js package is linked to the local copy for development, and you can access the UI in the Larva server at localhost:3001.

Next, we need to start the JS build. Open a new command window, and make sure you are inside `pmc-larva/packages/larva`. Run the following command:

```
# This command watches for JS changes only. `npm run dev` will watch for SCSS and JS changes.
$ npm run dev:js
```

Now, you can start writing JS inside the larva-js package. Refer to pmc-larva/packages/larva/src/js/scripts.js and follow the conventions for importing JS from larva-js.

## History and Changelog

[Click here](CHANGELOG.md) to view this project's main history and changes.


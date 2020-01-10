# Larva JS

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

There is no functionality directly provided by this package. Consuming projects must import the desired JavaScript into their build step, and initialize it using the provided functions.

In general, this would be done as follows:

1. Ensure @penskemediacorp/larva-js is installed. It is included with the main @penskemediacorp/larva package.
2. Import the initXX function into the project-level asset building e.g. common.entry.js.
3. Call the initXX function inside an appropriate event listener, such as DOMContentLoaded.

Refer to individual interface or utility modules for more specific functionality and usage information.

## Development Setup

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

## Things To Be Aware Of 

**docs TODO**

This section can be a list of anything the is critical to be aware of, things like:

* Threat modeling
* Accessibility testing workflow
* Testing requirements or steps
* ... more to come.

## History and Changelog

**docs TODO**

[Click here](CHANGELOG.md) to view this project's main history and changes.

- [Click here](some-module-a/CHANGELOG.md) to view this project's some-module-a history and changes.
- [Click here](some-module-b/CHANGELOG.md) to view this project's some-module-b history and changes.


## Support

**docs TODO**

In this section, indicate where an engineer should go for support. Is there a specific Slack channel, team, or individual that can answer questions about this software?

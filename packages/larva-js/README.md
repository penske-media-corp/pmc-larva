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

**Document the flow and usage of the code in numbered steps.** This should not be a "how to use it" section, but should document the structure/flow of the software itself. For example:

1. The code is triggered on page load
2. When the DOM loads
3. XYZ widget makes an API call
4. When the response is successful, XYZ widget is populated
5. A user may click the ABC button to refresh the content, which calls #3

## Development Setup

**What does an engineer need to do to setup this locally?** This section should be a numbered or bulleted that is easy to follow. 

1. What are the prerequisites? Do you need to have a WordPress or Laravel environment running, or are there external services involved?
2. What configuration is required? Do you need to enable a Cheezcap option, for example?
3. Are there dependencies that need to be installed?
4. Does an engineer require access to third party services? Do they need API keys or secrets to get started?

If there are specific commands that need to be run, add them in a markdown block, like this, with comments above each command that indicate _why_ and _what_ the command is doing:

```
# Install the npm module
$ npm install project

# Run a node script that does ABC
$ npm run prod 
```

## Things To Be Aware Of 

This section can be a list of anything the is critical to be aware of, things like:

* Threat modeling
* Accessibility testing workflow
* Testing requirements or steps
* ... more to come.

## History and Changelog

[Click here](CHANGELOG.md) to view this project's main history and changes.

- [Click here](some-module-a/CHANGELOG.md) to view this project's some-module-a history and changes.
- [Click here](some-module-b/CHANGELOG.md) to view this project's some-module-b history and changes.


## Support

In this section, indicate where an engineer should go for support. Is there a specific Slack channel, team, or individual that can answer questions about this software?

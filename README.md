# Larva

This is the mono-repo for PMC's design system, Larva. It contains Larva features that should be available across platforms.

## Usage

Consult each package's README for a description and directions for use.

## Local Development Setup

Clone this repository then, from the root, run the following commands:

```
sh scripts/first-time-build.sh
```

These will setup the mono-repo and install dependencies for each of the packages. This will take a few moments.

## Viewing Larva Patterns

To view and develop Larva patterns, run the following command after the above installation setup:

```
npm run larva
```

This will open a development server at localhost:3000. You can contribute to patterns in the packages/larva-patterns, and see the updates reflected here.

## Contributing To and Building Assets

The core Larva repo uses Larva tools to build patterns. Some packages contain their own build steps, such as larva-css and larva-tokens. The flow is as follows:

1. Larva CSS and Larva Tokens should be compiled in their respective packages with `npm run build`.
2. Then run `npm run prod` from the root of this repo to pulls everything together into a larva.css and to compile the default JS source files, _and_ copy the build files into package/larva so they are available to consuming projects

# Larva

This is the mono-repo for PMC's design system, Larva. It contains Larva features that should be available across platforms.

## Usage

Consult each package's README for a description and directions for use.

## Local Development Setup

Clone this repository then, from the root, run the following commands:

```
$ npm install -g lerna
$ lerna bootstrap
```

These will setup the mono-repo and install dependencies for each of the packages. This will take a few moments.

## Viewing Larva Patterns

To view and develop Lara patterns, run the following command after the above installation setup:

```
$ npm run larva
```

This will open a development server at localhost:3000. You can contribute to patterns in the packages/larva-patterns, and see the updates reflected here.

## Contributing To and Building Assets

The core Larva repo _uses_ Larva tools to build patterns, and contains the same folder structure, but instead of including files from src/ it includes files from the Larva packages. Contribute changes to these packages and build them in the root.

Look inside root package.json to see what scripts you can use to build assets.
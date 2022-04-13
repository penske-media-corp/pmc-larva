# Larva

This is the mono-repo for PMC's design system, Larva. It contains Larva features that should be available across platforms.

## Usage

Consult each package's README for a description and directions for use.
Consult [the How-To Guides in Confluence](https://confluence.pmcdev.io/x/UBOeAw)
for details on using Larva in consuming projects. When upgrading a consuming
project, consult [UPGRADING.md](./UPGRADING.md) for breaking changes and other
important information.

## Local Development Setup

Clone this repository then, from the root, run the following commands:

```
sh scripts/install-dependencies.sh
```

These will setup the mono-repo and install dependencies for each of the packages. This will take a few moments.

If you are updating dependencies or debugging version conflicts, there is an addition script to use that will wipe the node_modules and package-lock.jsons for a fresh installation:

```
sh scripts/refresh-dependencies.sh
```
## Viewing Larva Patterns

To view and develop Larva patterns, run the following command after the above installation setup:

```
npm run larva
```

This will open a development server at localhost:3000. You can contribute to patterns in the packages/larva-patterns, and see the updates reflected here.

## Running Visual Regression Tests

First, make sure the Larva server is running from the root of this repo. To run the Larva server:

```
npm run larva
```

Open a new command window and again, from the root, manually run visual regression tests with the following command:
```
npm run backstop -- test
```

If the tests contain changes that are intended, approve the new screenshots with the following command:
```
npm run backstop -- approve
```

To manually run visual regression tests, use the following command:

```
npm run backstop -- test
```

If the tests contain changes that are correct, you can generate new reference screenshots. To do this, you should [visit the Github repo](https://github.com/penske-media-corp/pmc-larva/actions/workflows/approval.yml) and [run the workflow action](https://github.blog/changelog/2020-07-06-github-actions-manual-triggers-with-workflow_dispatch/) to update the visual regression tests. This will create a new branch with the suffix `--update-backstop-reference` appended to your current branch name. You should then make a pull request into your current branch from that branch after reviewing the updated screenshots and then merge it into your branch with feature changes so it passes the automated regression tests.

## Contributing To and Building Assets

The core Larva repo uses Larva tools to build patterns. Some packages contain their own build steps, such as larva-css and larva-tokens. The flow is as follows:

1. Larva CSS and Larva Tokens should be compiled in their respective packages with `npm run build`.
2. Then run `npm run prod` from the root of this repo to pulls everything together into a larva.css and to compile the default JS source files, _and_ copy the build files into package/larva so they are available to consuming projects

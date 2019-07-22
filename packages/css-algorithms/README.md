# CSS Algorithms

This package contains Larva's CSS algorithms or, CSS patterns that perform a specific task and are named according to that task.

## Anatomy of an Algorithm

```
lib/
-- a-name/
---- a-name.scss
---- a-name.css
---- a-name.html
---- a-name.browser-test.js
---- README.md
```

## Usage

Refer to the README for each algorithm for usage instructions.

## Development

Algorithms should be developed and build within a single SCSS file that outputs CSS to a file in the same directory with the same name. There is a watch command registered using the node-sass CLI that can be run from the packages/css-algorithms with the command `npm run sass`.

## Testing

CSS algorithms should have tests where possible. These tests are written in client side JavaScript and can be included in both the example HTML file in each pattern for unit testing, or included in any environment using the algorithm for integration tests.
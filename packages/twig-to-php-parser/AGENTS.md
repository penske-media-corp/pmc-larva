# twig-to-php-parser

Converts Larva Twig patterns into PHP partials for WordPress brand themes (`bin.twig-to-php-parser`). All translation logic is regex-based PHP in `lib/twig-to-php-parser.php`. `index.js` only bridges Node to PHP through `exec-php`, and `lib/getConfig.js` is a deliberate copy of the larva config loader so this package does not depend on `@penskemediacorp/larva`.
Background: `packages/twig-to-php-parser/README.md`, Confluence Twig guide https://confluence.pmcdev.io/x/JoGJAg.

## Commands

```bash
npm test -- packages/twig-to-php-parser   # from the root; the package test script is a stub
```

A `php` CLI must be on `PATH` (or `phpBinaryPath` set in the `parser` config) for the parser and its tests. CI's `ubuntu-latest` runner provides one.

## Read before editing

Read `.agents/rules/larva-twig-templates.md` before editing the escaping keywords or any `*.twig` fixture. It holds the escaping contract, the supported Twig subset and the include form that this package must keep in step with. Codex gets no generated rule view, so this pointer is its route to the rule.

## How it behaves

- Config comes from the `parser` key of `larva.config.js` (`twigDir` default `./src/patterns`, `phpDir` default `../template-parts/patterns`, `isUsingPlugin`). Under `NODE_ENV=test` it reads `__tests__/fixtures/larva.config.js` (`isUsingPlugin: true`).
- Output goes to the Twig file's type directory with non-letters stripped (`04-components` → `components`), as `<name>.php`. A file is skipped when its PHP output is newer than the Twig source.
- Escaping is chosen by keywords in the variable name, and the last match wins (url → attr → text → markup → wp_action). This is a security boundary for every theme that uses generated partials: changing keyword meaning or precedence changes escaping in existing themes, so treat it as a breaking change (`UPGRADING.md`).
- Include output, plugin mode (`lib/twig-to-php-parser.php:248-275`): `\PMC\Larva\Pattern::get_instance()->render_pattern_template( '<type>/<name>', $data, true )`.
- Include output, non-plugin: `\PMC::render_template( CHILD_THEME_PATH . '/template-parts/patterns/<type>/<name>.php', $data, true )`.
- Include output, non-plugin with an `@larva` include: the same call with `PMC_CORE_PATH` (asserted in `__tests__/parser-methods.test.js`). `README.md:21` calls this "not in effect yet", but the code and tests implement it.
- SVG includes render `/assets/build/svg/` (or `/build/svg/` with the plugin) through `render_template`. `{{ wp_action( 'hook', a, b ) }}` becomes `do_action( 'hook', $a, $b )`.
- Every output file starts with a "Generated file. Refer to the relevant Twig file" docblock. In consuming themes, fix the Twig, not the PHP.

## Conventions

- The parser is regex-based and positional. Any change to the regexes or replacement order can shift replacements across a whole file. Add a fixture covering the new construct and update the expected PHP by hand, after reading it.
- New Twig functions need the Twing stub in `packages/larva/lib/server.js` and the PHP translation here, or the preview server and the PHP output diverge (`README.md`, "Add a new function").
- Tests: input Twig under `__tests__/fixtures/src/patterns/<NN-type>/<name>/<name>.twig`, expected PHP under `__tests__/fixtures/template-parts-expected/patterns/<type>/<name>.php`, and the short path registered in `patternShortPaths` in `__tests__/twig-to-php-parser.test.js`. The test deletes its generated output afterwards.

Avoid:

- Updating `template-parts-expected/*.php` by copying whatever the parser now outputs, without reading the diff.
- Supporting a new Twig tag only in Twing (preview works, PHP breaks).

## Adding a construct

1. Add the fixture Twig and the expected PHP, and register the short path in `patternShortPaths`.
2. Implement the parse function in `lib/twig-to-php-parser.php` and call it from `twig_to_php_parser()`.
3. If it is a Twig function, add the Twing `TwingFunction` stub in `packages/larva/lib/server.js`.
4. Run `npm test -- packages/twig-to-php-parser`.
5. Update `.agents/rules/larva-twig-templates.md` if authors gain a new construct, and add a CHANGELOG line (`* twig-to-php-parser - …`).

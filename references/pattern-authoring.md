# Pattern authoring — larva-patterns conventions, escaping, known bugs

## File layout (CLI discovers by this exact naming)
Every pattern dir holds `<name>.prototype.js` (CJS default-data export) plus `<name>.twig`
(components/objects/modules) or `<name>.html` (algorithms/tests). Variant data is
`<name>.<variant>.js`; legacy `<name>.json` still resolves as a fallback (`getPatternData.js`).
`getPatternData`'s default variant is the reserved name `prototype`. A broken/missing data file
returns an **error object rendered as data** (silent UI failure), not an error. Algorithm
patterns have empty `.prototype.js` (no data block). Pattern type is derived from the 2-char
name prefix: `c-`→components, `o-`→objects, else modules — enforced identically in
`getPatternType.js` and `twig-to-php-parser.php:261` (`parse_include_path`).

## Escaping — the single most important authoring rule
Escaping is **keyword-driven, not type-driven**, on BOTH render paths:
- Server render (Twing): all interpolation auto-escapes except the `|markup` filter
  (`is_safe:['html']`, `server.js:43`) and twig `|raw`. `*_markup` prototype fields are rendered
  through `|raw` (unescaped HTML); `*_text` fields auto-escape.
- Generated PHP (`twig-to-php-parser.php:140-176`): a `strpos` substring match on the mustache
  var's data-name picks the escaper. **A var name matching no keyword produces NO
  `<?php echo ?>` wrapper at all — silent broken output, not an error.**

| data-name substring | PHP escaper |
|---------------------|-------------|
| `_url` | `esc_url` |
| `_class` / `_name` / `_attr` / `_attributes` | `esc_attr` |
| `_text` | `esc_html` |
| `_markup` or `\|markup` | `wp_kses_post` |
| `_wp_action` (or `wp_action(...)`) | `do_action` |

Consequence: a rich-content field named `*_text` double-escapes; a `*_markup` field without
`|raw` escapes when it should not. Name new output vars to hit the right keyword.

## Twig include + hook conventions
- Cross-pattern includes use the namespace `@larva/<type>/<name>/<name>.twig` (resolved by the
  larva server loader and the parser). A raw relative include would not resolve.
  **Do-not-copy deviation:** `c-logo` and `c-svg` include SVG via relative build path
  `'../../build/svg/'~name~'.svg'`, not the namespace.
- Root element convention: `class="<pattern-name> {{ modifier_class }} {{ <pattern>_classes }}"`
  — a new pattern must expose both hooks. Screen-reader text uses `class="lrv-a-screen-reader-only"`.
- `<a>` vs `<button>`/`<span>` is selected purely on presence of the `*_url` data field
  (`c-button` and peers). Objects can depend upward on modules (`o-card`/`o-multiple-product-item`
  include `@larva/modules/article-kicker`).
- **Clone-before-mutate invariant:** a variant `.<variant>.js` or a prototype requiring a sibling
  prototype MUST deep-clone before mutating, or it mutates the shared `module.exports` singleton
  every importer sees. Two non-equivalent helpers exist — see Non-Inferable / Use-This-Not-That.

## `_data` files
`getDataSet(filename)` requires `../_data/<filename>.json` and calls **array methods** — the file
MUST be a bare top-level array. `social-platforms.json` is a bare array (works);
`brands.json` is object-wrapped `{brands:[...]}` — `getDataSet('brands')` would throw (no such
consumer exists; `pmc-footer` requires `brands.json` directly).

## Package export gotcha
`larva-patterns` `index.js` exports only `o_nav` + `o_tease`. Every other cross-package consumer
deep-requires by path: `@penskemediacorp/larva-patterns/<type>/<name>/<name>.prototype`. The
package main is NOT the contract.

## Known in-code bugs (do not replicate; fix if touched)
- `o-icon-button.twig`: gates the anchor on `o_icon_button_url` but sets `href` from
  `o_button_url` (undefined in prototype) → empty href. `buy-now` works around it by setting both.
- `o-category-link.twig`: reads `o_category_link_wrap_classes` but the prototype defines
  `o_category_link_wrap` (boolean) → class renders empty.
- `o-video-card.twig:62`: renders the `c_title` payload through `c-heading.twig` (should be
  `c-title.twig`).
- `a-carousel-grid.overlay.js:4,11`: defines `carousel_grid_overlay_content_class` twice; second
  shadows first (no-dupe-keys lint disabled).
- `a-term-content-grid.html:3`: emits literal `\\` into a `class` attribute.
- `list.twig` recursively re-includes itself for nested `list_items`; the shape must carry
  `list_type_name` at every level or `<{{list_type_name}}l>` renders as `<l>`.
- `vlanding-video-card`: opens `<button>`/`<a>` in one `{% if %}` at top, closes it in a matching
  `{% if %}` at bottom — the two conditions must stay in lockstep.

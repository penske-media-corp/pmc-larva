# External boundaries — identifiers consumed here, defined nowhere in this repo

Each was confirmed absent by repo-wide grep. A host WordPress theme/plugin or ad/analytics
platform must supply them; nothing here defines or validates them, so a missing one fails at
runtime (usually silently), not at build.

## JS globals (browser)
- `window.pmc_common_urls` — `webfontConfig.js:46` reads `.current_theme_uri`; `common.entry.js`
  reads `.pmc_larva_uri` for the SVG sprite location (falls back to `/assets/build/svg/defs/sprite.defs.svg`).
- `window.pmc_jwplayer` (playJW), `pmcCnx` (playConnatix), and the hard-coded Connatix capi token
  URL — `VideoShowcase.js:262,264,312`. Video playback no-ops without them.
- `window.pmc_dfp_skin` / `window.pmc.skinAds` + an atlas skin object exposing
  `refresh_skin_rails()` — `SideSkinAd/index.js:9-11,27`; `base.html` stubs `pmc_dfp_skin` only
  when `query.has_side_skins`.
- `window.pmc` (cookie API), `WebFont`, cookie `iw_fonts_loaded` — `webfontConfig.js` (loads PT
  Sans, Teko, Argent CF).
- `wp.template` script IDs `profile-card` (ProfileFilter) and `trigger-social-share-${id}`
  (VideoShowcase) — the `<script type="text/html">` templates are not in repo.

## REST / service endpoints
- `/wp-json/pmc_core/v1/pmc_core_modules/pmc-profiles` — `ProfileFilter.js:52`; route owned by
  the PMC Profiles plugin.
- Swiftype: `data-st-search-form="small_search_form"` (`search-form.twig`) is a widget mount +
  install key; branch flag `search_form_is_swiftype` is host-supplied.

## Twig / PHP render context (larva server or generated-PHP host supplies)
- Render vars injected by `packages/larva/lib/server.js` (each set via `req.params.*`): `brand,
  source, type, name, variant, variants, data, spec, colors, font_styles, pattern_nav, query,
  json_pretty`.
- `compat_class` — consumed at `base.html:41` (`<body class="lrv-u-margin-a-00 {{ compat_class }}">`)
  but never assigned anywhere in `packages/larva` (server.js sets it on no `req.params`); the host
  render context supplies it.
- Twig filters/functions `markdown`, `markup`, `source()`, `wp_action(...)` — defined in
  `server.js`; `wp_action` returns `''` at server render, becomes `do_action()` in generated PHP.
- WP action name `pmc_do_render_custom_ga_tracking_attr` (`c-button.twig`, `o-icon-button.twig`)
  — the hook string is defined nowhere here (external WP hook).
- Generated-PHP symbols emitted by `twig-to-php-parser.php`: plugin mode
  `\PMC\Larva\Pattern::get_instance()->render_pattern_template`,
  `\PMC\Larva\Config::get_instance()->get('brand_directory')`; non-plugin `\PMC::render_template`;
  constants `PMC_CORE_PATH` / `CHILD_THEME_PATH`.

## Dead / unconsumed hooks (present in markup, no repo reader)
- `data-dropdown` (via `o_nav_data_attributes`, `o-nav.twig`) — zero consumers.
- `data-pmc-sp-product` / `data-category-name` (`o-icon-button.twig`) — external analytics/shopping.
- `data-lazy-src`/`-srcset`/`-sizes` (`c-lazy-image`) — no larva-js hydrator; only test fixtures
  reference them. Lazy-load reader is external.
- `CustomEvent('firstVideoPlay')` dispatched at `VideoShowcase.js:390` — no in-repo listener.

## Config keys read from a consuming project's `larva.config.js` (not defaulted here)
- `patterns.ignoredModules`, `backstop.larvaModules`, `backstop.testPaths`, `themeAssets`,
  `themePatternsDir`, `phpBinaryPath` (twig-to-php-parser; undocumented, no default, no validation).
- `pmc.stylelintrc.json` — `stylelint-config/lib/custom-formatter.js:6` unconditionally reads +
  `JSON.parse`s `<cwd>/pmc.stylelintrc.json`; throws for any project lacking it.

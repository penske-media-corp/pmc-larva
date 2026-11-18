# larva-js interface-module hook contracts

Each larva-js interface module binds to markup by class/data-attr hooks. The init in each
module's `index.js` does `querySelectorAll(hook).forEach(el => new Class(el))` and is **not
auto-invoked** — only `video-showcase.js` (Collapsible + Flickity + VideoShowcase) and
`larva-ui/index.js` (LarvaUiToggle + SideSkinAd) are wired into entries. Any other module
(EmailCapture, ExpandableSearch, MegaMenu, MobileHeightToggle, PopOver, ProfileFilter,
SelectNav, TabsManager, Tooltip, Navigable) must be manually imported + called in the
consuming theme's entry, or it silently does nothing. Omitting a hook class = behavior never
binds. A hook may be a literal in `.twig` OR appended to a `*_classes` prototype string — the
two are not interchangeable per module; wrong side never reaches the DOM.

Idempotency/instance access: an interface class stamps its instance onto a `pmc<Name>` DOM
property (Collapsible→`pmcCollapsible`, MobileHeightToggle→`pmcMobileHeightToggle`, etc.).
**Do-not-copy divergence:** `ProfileFilter/index.js:5` stamps `el.ProfileFilter` (no `pmc`
prefix); the constructor separately stamps `pmcProfileFilter` (`ProfileFilter.js:24`) — the
test only passes because of the second stamp.

| Module | Init wired? | Root hook | Child/state hooks | Notes |
|--------|-------------|-----------|-------------------|-------|
| Collapsible | yes (video-showcase.js) | `[data-collapsible]` (value=initial state) | `[data-collapsible-toggle]`, `[data-collapsible-panel]`; toggle opt `always-show`; panel `data-collapsible-breakpoint` (mobile-only) | JS writes `dataset.collapsible=expanded/collapsed` + toggles `.is-expanded`; expand runs unscoped `document.querySelector('[data-collapsible-toggle] + li > a').focus()` — throws if no match (`Collapsible.js`) |
| Flickity | yes (video-showcase.js) | `.js-Flickity` + `.js-Flickity--*` config | every direct child cell `.js-Flickity-cell` (cellSelector) — cell missing the class is dropped | init reads only 4 boolean modifiers `isContained/isFreeScroll/isWrapAround/pageDots`, NOT `data-flickity-options`. SCSS defines many sizing modifiers (`--thirds/--fifths/--nav-*`) the JS never reads. Typo `js-Flickity--isFreeScrol` (missing `l`) in `newswire.prototype.js:49` is silently dead |
| VideoShowcase | yes (video-showcase.js) | `[data-video-showcase]` | trigger `[data-video-showcase-trigger]`/`-type(youtube\|jwplayer)`/`-dek`/`-title`/`-permalink`; player `[data-video-showcase-player]`/`-iframe`/`-jwplayer`; output `.js-VideoShowcase-title`/`-dek` (appended to child `*_classes` in prototype, not twig) | adds `.is-playing` to active trigger; renders social share via `wp.template('trigger-social-share-${id}')` + re-inits Collapsibles; `data-video-showcase-autoplay` fires first trigger immediately |
| MobileHeightToggle | no (manual) | `.lrv-js-MobileHeightToggle` | `.lrv-js-MobileHeightToggle-trigger` | init takes a `width` arg, instantiates only `<768`, destroys `>=768`; **prefix contract**: plain `js-MobileHeightToggle*` vs `lrv-js-MobileHeightToggle*` — trigger/target/root must share ONE prefix or the toggle no-ops. Only 04-js SCSS bundled into larva-css |
| ExpandableSearch | no (manual) | `.js-ExpandableSearch` | `-trigger`, `-target`, `js-fade`/`js-fade-is-out` state; twig `data-header-search-trigger` | toggles `js-fade-is-out/-in` but paired SCSS defines only `.is-ExpandableSearch-open` (the `js-fade-*` classes live outside larva-css); registers document/body/focusin listeners never removed on close (leak) |
| MegaMenu | no (manual) | `.js-MegaMenu` | trigger `js-MegaMenu-Trigger` appended to `o_icon_button_classes` in header.prototype/header.article/header-sticky.prototype | open state `is-mega-open` on `document.documentElement`, cleared on Escape; skips focus-trap when node also has `.mega-menu__main`; a new header omitting the trigger hook leaves the menu unopenable |
| SelectNav | no (manual) | `.js-SelectNav` | `.js-SelectNav-select`, option `data-select-url` | redirect handler wired ONLY when the element also carries `.js-SelectNav-redirect`; a plain `.js-SelectNav` inits but does nothing |
| EmailCapture | no (manual) | `.lrv-js-EmailCapture` (form) | hidden `__successPage` input with `data-email-capture-success-url` | reads `data-email-capture-success-url`, writes `${base}&email=${email}` back to `.value` on blur/keyup; producer is `o-email-capture-form` (hard-codes ExactTarget `__contextName`/`__executionContext`/`__successPage`) |
| ProfileFilter | yes (index registered) but init manual | `.js-ProfileFilter` | `-results`, `-form`, `-submit`, `-loadMore` (loadMore only in `.profile` variant) | builds REST URL stripping `filter_` prefix; progressive enhancement: `preventDefault`+fetch only when `window.fetch`; toggles bare `a-hidden` (see Non-Inferable) |
| SideSkinAd | yes (larva-ui) | postMessage-gated (no DOM hook) | — | see Non-Inferable — reflows only on `pmcadm:dfp:skinad:parameters` postMessage + an atlas skin object |
| LarvaUiToggle | yes (larva-ui) | `.js-LarvaUiToggle-button` | `.js-LarvaUiToggle-panel` | persists visibility to localStorage `pmcIsLarvaUiHidden`, toggles `lrv-a-hidden` |
| PopOver | no (manual) | `.js-PopOver` | `.js-PopOver-target` | author-popover; producer via `author_button_classes`/`author_detail_outer_classes` |
| Tooltip | no (manual) | `.js-Tooltip-parent` (wrapper) | `.js-Tooltip` (content) | `o-account-menu` flyout |
| header sticky-scroll | (theme) | outer `js-hide-when-sticky` | sticky clone `js-show-when-sticky js-sticky-header-slidedown` | both `is_home` twig branches must repeat all three hooks |

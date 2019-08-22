# MobileHeightToggle

[x] Requires CSS from larva-css
[x] Used in larva-patterns
[x] Has JSDOM test

## Usage

This JS pattern involves a `trigger` and a `target` wherein the triggler toggles the height of the target. It is commonly used as a *mobile only* dropdown menu along with `o-nav`, and requires CSS from `larva-css/js`.

Used with `o-nav`, the lrv-js-* classes should be added as follows:

```
o_nav.o_nav_classes += ' lrv-js-MobileHeightToggle';
o_nav.o_nav_title_classes += ' lrv-js-MobileHeightToggle-trigger';
o_nav.o_nav_list_classes += ' lrv-js-MobileHeightToggle-target';
```

This pattern is used in the PMC Footer module.
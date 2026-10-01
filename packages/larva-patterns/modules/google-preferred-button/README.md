# google-preferred-button

A module that renders a Google Preferred Source button — a linked call-to-action allowing readers to add the site as a Google Preferred Source.

## Data contract

| Key | Type | Required | Description |
|-----|------|----------|-------------|
| `google_preferred_button_url` | string | No | Destination URL. Defaults to `https://www.google.com/preferences/source?q=<home_url>` via controller. |
| `google_preferred_button_classes` | string | No | Additional modifier classes on the root `<a>`. |
| `google_preferred_button_icon_url` | string | No | If set, renders an `<img>` with this URL. If empty, falls back to `c-icon` (sprite). |
| `google_preferred_button_icon_classes` | string | No | Additional classes on the `<img>` icon element. |
| `c_icon` | object | No | Passed to `c-icon` component when no `icon_url` is set. Defaults to `google-preferred` sprite icon. |
| `c_span` | object | No | Passed to `c-span` component for the button label. |

## Icon strategy

- **Default (sprite):** Uses the `google-preferred` SVG from `@penskemediacorp/larva-svg`.
- **Brand override:** Pass `icon_url` from the controller to render a brand-specific raster image via `<img>`.

## Controller entry point

`PMC\Larva\Controllers\Modules\Google_Preferred_Button` in the `pmc-larva` plugin.

The controller re-injects `label_text` via `C_Span` after mock-stripping removes the prototype `_text` value.

## Theme-level styling

The base module ships no CSS. Brands should add their own one-off stylesheet scoped to a brand modifier class (e.g. `o-google-preferred-button--rs`).

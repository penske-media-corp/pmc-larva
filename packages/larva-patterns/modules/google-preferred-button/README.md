# google-preferred-button

A CTA that links users to Google's Preferred Sources feature for the current publication. Renders as an anchor tag containing an icon (the Google logo) and a `c-span` label.

## Usage

Render the module from a theme via its controller, passing only brand-specific data:

```php
\PMC\Larva\Controllers\Modules\Google_Preferred_Button::get_instance()->init(
	[
		'data'    => [
			'icon_url'       => get_stylesheet_directory_uri() . '/assets/src/svg/google.svg',
			'modifier_class' => 'o-google-preferred-button--rs',
			// 'url' omitted → controller derives it from home_url().
		],
		'variant' => 'prototype',
	]
)->render( true );
```

## Data contract

The controller's `get_default_options()['data']` accepts:

- `url` — (optional) the publication's Google Preferred Sources deeplink, e.g. `https://www.google.com/preferences/source?q=https%3A%2F%2Fwww.rollingstone.com`. When omitted, the controller derives it from `home_url()`.
- `icon_url` — (optional) URL to a brand's own Google logo asset uploaded at the theme level. When set, the module renders an `<img>`; when empty, it falls back to the shared `c-icon` (`google-preferred` from the Larva sprite), so brands get a default icon without shipping their own asset.
- `modifier_class` — a brand BEM modifier (e.g. `o-google-preferred-button--rs`) appended to the anchor's classes so the consuming theme's SCSS can hook onto it.

Cross-brand static values (target `_blank`, `rel="noopener noreferrer"`, `aria-label`, and the Parse.ly `data-track-*` attributes) live in `google-preferred-button.prototype.js` and are shared across all brands.

## Styling

Visual styling (border, typography, sizing) is intentionally left to the consuming theme's SCSS, keyed on the `modifier_class`.

# o-google-preferred-button

A CTA that links users to Google's Preferred Sources feature for the current publication. Renders as an anchor tag containing a `c-icon` (Google logo) and a `c-span` label.

The `o_google_preferred_button_url` should be set to the publication's Google Preferred Sources deeplink, e.g.:

```
https://www.google.com/preferences/source?q=https%3A%2F%2Fwww.rollingstone.com
```

Arbitrary `data-*` tracking attributes can be passed via the `o_google_preferred_button_data_attrs` hash (key → value).

Visual styling (border, typography, sizing) is intentionally left to the consuming theme's SCSS.

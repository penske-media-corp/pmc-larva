o-figure is designed to support images with a caption and a credit, primarily used within editorial content in `the_content` in WordPress. pmc-core-v2 contains a filter on the `caption` shortcode that applies this pattern. Is it also used in for featured images that include credits and captions.

It consists of a `figure` element around a `c-lazy-image` and `c-figcaption`, with an optional link wrapper to make the entire block clickable.

There is an option for adding an inline style for the width on the `figure` to provide a smooth paint in post content.

The pattern supports Lazy Loading with `c-lazy-image`.

## When to use:
* For images or content that can stand on its own, outside of the document flow. Read more about [semantic use of `figure` here](http://html5doctor.com/the-figure-figcaption-elements/). 

## When not to use:
* For images that cannot stand on their own as content, e.g. a featured image for a post that requires additional post content to be understood.
* Logo or icons

## Future:
Could support non-image figures such as charts, embeds, or quotes.
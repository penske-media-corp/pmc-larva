# Figure

`o-figure` is a generic markup pattern that supports a `figure` element and the following, optional elements:
* Wrapping anchor tag
* Caption
* Credit

The image markup itself can either be provided by passing in image markup that will be escaped, or by passing in a URL.

The pattern supports Lazy Loading with the data `o_figure_image_url` for the actual image, and `o_figure_placeholder_image_url` for the placeholder image.
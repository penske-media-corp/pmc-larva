This is our lazy loading, responsive image pattern. It is optimized to provide an aspect ratio and no reflow when the image is loaded for a smooth user experience. Images loaded using this pattern **must**:

**Option 1:** Be cropped using a class from `a-crop` applied to `c_lazy_image_crop_class`. This is the most common and simplest option.

**Option 2:** Calculate a padding-bottom value based on the image's height and width in `c_lazy_image_crop_style_attr`. This is useful for images with unpredictable aspect ratios such as those in `the_content`in WordPress.

## Option 2: Inline aspect ratio

An example of calculating the padding-bottom attribute in a PHP object is as follows:

```language-php
if ( ! empty( $image_height ) && ! empty( $image_width ) ) {
	$post_content_image['c_lazy_image_crop_style_attr'] = 'padding-bottom:calc((' . $image_height . '/' . $image_width . ')*100%);';
}
```

Assuming an image URL in the following format:
https://pmcdeadline2.files.wordpress.com/2019/10/monica-beletsky-apple.jpg?w=450&h=253&crop=1

The image's dimensions are retrieved from the image URL in class-image-caption.php using the following regex (adapted from the ArtNews 2019 theme in class-image-captions.php): 

```language-php
$image_src    = '';
$image_height = '';
$image_width  = '';
if ( preg_match(
	"/\<img.+src\=(?:\"|\')(.+?)(?:\"|\').+width\=(?:\"|\')(.+?)(?:\"|\').+height\=(?:\"|\')(.+?)(?:\"|\')\>/",
	$content,
	$matches
) ) {
	$image_src    = $matches[1]; // @codeCoverageIgnore
	$image_width  = $matches[2]; // @codeCoverageIgnore
	$image_height = $matches[3]; // @codeCoverageIgnore
}
```
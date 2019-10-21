# a-crop

The cropping algorithm applies an aspect ratio to a element containing an image, and will crop the contained image to the aspect ratio. It uses background-size: cover, padding, and absolute positioning to do this. 

The classes output by the generator are `.a-crop-WIDTHxHEIGHT`, so a 16x9 cropped image would use the class `.a-crop-16x9`.

## Available Classes

Reference the Sass list in a-crop.common.inline.scss to see a list of a-crop classes provided by Larva CSS.

## Algorithm Source

The source for the cropping algorithm is:

```
.lrv-a-crop-16x9 {
	position: relative;
	padding-bottom: calc( ( 9 / 16 ) * 100%); 
}

.lrv-a-crop-16x9 img {
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover; 
}
```

## Extendable?

**Do no extend `a-crop`**. Create a separate algorithm, or use utilities for properties like the following:

* object-fit - change the scaling behavior of the image e.g. `u-object-fit-contain`.
* object-position - change the alignment of a cropped image, e.g. align it to the top rather than center.
* background-color – update the background color that may appear while an image is loading.
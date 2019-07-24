# Crop

The cropping algorithm applies an aspect ratio to a element containing an image, and will crop the contained image to the aspect ratio. It uses background-size: cover, padding, and absolute positioning to do this. 

The classes output by the generator are `.pmc-a-crop-WIDTHxHEIGHT`, so a 16x9 cropped image would use the class `.pmc-a-crop-16x9`.
# Lookbook Canvas Experiments

### General findings

We need to use drawRect to fit the canvas before drawing images onto it - otherwise, when animating, images stretch as the x coordinates increase
We need to call drawImage twice on each image in order to create a looping effect
We’ll have to set the canvas width as amount of columns _ width of images + space between images (7 _ 385 + 8) and calculate the amount of columns from the amount of images

### Pros

No glitching occurring on resize 👍🏼
We don’t need any resize events
As far as I can see, not as much code will be needed

### Cons/doubts

If we’re drawing images to the canvas we’re not going to be using our editorial-media-assets widget where we have our hotspots config, so we’re going to have to rethink how we add them and potentially duplicate the code
If we’re drawing images to the canvas we’re going to need x and y coordinates in our data to know where to draw each image on the canvas - are editors going to know how to do this? Alternatively, we’d need complex functions to work out the coordinates of each image
We need to draw images to the canvas twice to give a looping effect - we can load the images just once but surely drawing them twice will have an impact on performance?

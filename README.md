```taut $\lor$ !taut, it's a tautology!```

A joke I came up with in my high school physics c class turned into a real, albeit thrown together, project. 

The implementation is pretty nifty. It runs Canny edge detection on an image, converts the remaining active pixels to (x,y) coordinates, and fits a linear regression through the points. The R (pearson correlation coeffeciant) of the result is the "taut factor". We can set an arbitraty threshold, and use that to determine whether a rope is "taut or not". 

The only problem with this current approach is it requires a solid (edgeless) background.

This approach is wicked fast and small, and doesn't rely on any fancy neural networks/DL. With this approach, however, you could argue that it does use "machine learning"...

<br/>
<br/>


__Slide deck:__

I hastily threw together a mock pitch deck for this to present while judges were deliberating during a high school hackathon I helped run. [enjoy?](https://docs.google.com/presentation/d/e/2PACX-1vQJa3ZWb6a5wQrQxz4Gj7tJPFp2NcMs8Qy-r1H7MZCeoJy2xck3fsIzBjqXI2_O0JsndrpKb1wLt3r3/pub?start=false&loop=false&delayms=60000)

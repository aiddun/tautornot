A joke I came up with in physics turned into a real, albeit thrown together, project. 

The idea is actually pretty novel. It runs canny edge detection on a captured image, and runs a linear regression through the remaining points. The R (pearson correlation coeffeciant) of the result is the "taut factor". We can set an arbitraty threshold, and use that to determine whether a rope is "taut or not". 

The only problem with this current approach is it requires a solid (edgeless) background.

This approach is wicked fast, and doesn't rely on any fancy neural networks/DL. With this approach, however, I guess that you could argue that it does use "machine learning"...

```taut v ~taut, it's a tautology!```

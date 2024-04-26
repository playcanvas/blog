---
authors: steven
slug: clustered-lighting-open-beta-have-hundreds-of-dynamic-lights-in-your-scene
title: Clustered Lighting Open Beta - Have hundreds of dynamic lights in your scene!
tags:
  - graphics
---

Our team has been working on a new lighting system for a while now, and it has reached the stage where we're excited to share it with the community!

[![Pirron Pool](/img/pirron-pool.gif)](/img/pirron-pool.gif)

[Pool Demo](https://pirron.one/pool/) from Solar Games using Clustered Lighting

The new system leverages the clustered lighting rendering algorithm and represents a significant advancement over our current lighting approach. New benefits include:

- Increasing the maximum omni and spot light count to 254.
- Improved application performance with more omni and spot lights.
- Quick enable/disable of omni and spot lights without expensive shader recompilation.

Some of our early adopters are already using it to enhance scenes dynamically with fireflies at night, gunfire muzzle flashes, and highlighting objects in the world.

We've reached a milestone where the feature is stable, and we invite you all to try it! We are eager to see how you will integrate it into your games and applications.

[Full documentation is available](https://developer.playcanvas.com/user-manual/graphics/lighting/clustered-lighting/) detailing all the features and explaining the options. Although Editor integration is still in development, we've created an example project linked in the documentation. This project includes a script that simplifies enabling clustered lighting, which can be copied and pasted into your own projects.

We plan to make clustered lighting the default system in the midterm, with the option to use the current system, as the advantages are significant. In the longer term, we aim to phase out the current lighting system to reduce engine file size, fully transitioning to clustered lighting.

As always, we value your feedback and would love to hear your thoughts on using the clustered lighting in the [forum thread here](https://forum.playcanvas.com/t/clustered-lighting-open-beta-have-hundreds-of-dynamic-lights-in-your-scene/25530).

## Useful links

- [Clustered lighting documentation with example project](https://developer.playcanvas.com/user-manual/graphics/lighting/clustered-lighting/)
- [Feedback forum thread](https://forum.playcanvas.com/t/clustered-lighting-open-beta-have-hundreds-of-dynamic-lights-in-your-scene/25530)

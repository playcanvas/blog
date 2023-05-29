---
author: steven
comments: false
date: 2022-05-24 14:02:42+00:00
layout: post
link: https://blog.playcanvas.com/clustered-lighting-open-beta-have-hundreds-of-dynamic-lights-in-your-scene/
slug: clustered-lighting-open-beta-have-hundreds-of-dynamic-lights-in-your-scene
title: Clustered Lighting Open Beta - Have hundreds of dynamic lights in your scene!
wordpress_id: 2801
categories:
  - News
---

Our team has been working on a new lighting system for a little while now and it's reached the stage where we want to share it to the community!

[![Clustered lighting demo from Solar Games](/assets/media/Kapture-2022-05-24-at-12.09.11.gif)](/assets/media/Kapture-2022-05-24-at-12.09.11.gif)

[Pool Demo](https://pirron.one/pool/) from Solar Games using Clustered Lighting

The new system uses the clustered lighting rendering algorithm and is a huge step forward compared to our current lighting approach. New benefits include:

- Increasing the maximum omni and spot light count to 254
- Improved app performance with more omni and spot lights
- Disabling/Enabling omni and spot lights is now super fast. No more expensive shader recompilation

Some of our early adaptors have already started using it to do things such as adding dynamic lights to fireflies at night, gunfire muzzle flashes and using it as an easy way to highlight objects in the world.

We've now reached the milestone where the feature is stable and invite you all to give it a try! We can't wait to see how you will use it within your games and applications.

[Full documentation is available](https://developer.playcanvas.com/en/user-manual/graphics/lighting/clustered-lighting/) with all the features and explanation of the options. As the Editor integration is still being developed, we have created an example project which is linked in the documentation.

Within that project, is a script that makes it super simple to enable clustered lighting that can be copied and pasted to your own projects.

We will be looking to make clustered lighting the default system in the mid term (with option to use the current system) as there is little to any disadvantage from what we have seen so far.

Over the longer term, our aim is to remove the current lighting system from the engine (reducing the file size) and only be using clustered lighting.

As always, we value your feedback and want to hear your thoughts with using the clustered lighting in the [forum thread here](https://forum.playcanvas.com/t/clustered-lighting-open-beta-have-hundreds-of-dynamic-lights-in-your-scene/25530).

Useful links

- [Clustered lighting documentation with example project](https://developer.playcanvas.com/en/user-manual/graphics/lighting/clustered-lighting/)
- [Feedback forum thread](https://forum.playcanvas.com/t/clustered-lighting-open-beta-have-hundreds-of-dynamic-lights-in-your-scene/25530)

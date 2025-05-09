---
authors: dave
slug: new-feature-2d-sprites-and-9-slicing
title: 'New Feature: 2D Sprites and 9-slicing'
tags:
  - editor
---

PlayCanvas is one of the most popular ways to build 3D interactive web content today. But before 3D graphics was a thing, there was 2D graphics!

Today we're excited to launch the first part of our 2D graphics support. Great for building classic 2D games.

![Sprite Game](/img/sprite-game.gif)

<!-- truncate -->

There are 5 great new features which will help you build 2D games using PlayCanvas.

### Texture Atlas Asset

![Texture Atlas](/img/texture-atlas.jpg)

The new Texture Atlas asset is an enhanced texture asset which includes additional frame data for splitting your texture into multiple Sprites.

### Sprite Asset

![Sprite](/img/editor-sprite.jpg)

The Sprite Asset is a set of frames from a texture atlas. This can be a single button or a complete flip-book style animation.

### Sprite Component

![Run Animation](/img/sprite-run.gif)

The Sprite Component is a new Component that you can add to your Entities. The Sprite Component let's you play back sprite animation clips and build up your new 2D world.

### Sprite Editor

![Sprite Editor](/img/sprite-editor.jpg)

The Sprite Editor is a new tool inside the PlayCanvas Editor to create and edit Texture Atlases. The Sprite Editor lets you quickly define frame regions in your texture and it's also used to define the 9-slicing region.

### 9-Slicing

![Resize Button](/img/button-resize.gif)

9-Slicing is a very useful technique for creating scalable user interface elements from 2D textures. Using the Sprite Editor to define a border on an image, you can now use Sprites in your Element components to build your UIs. Watch this space for more User Interface features coming soon.

All these features are available today inside the PlayCanvas Editor. Take a look at the [documentation](https://developer.playcanvas.com/user-manual/2D/) and let us know what you think on the [forum.](https://forum.playcanvas.com)

Prehistoric graphics by [Pixel-boy](https://twitter.com/2pblog1)

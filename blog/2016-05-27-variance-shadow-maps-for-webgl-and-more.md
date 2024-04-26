---
authors: will
slug: variance-shadow-maps-for-webgl-and-more
title: Variance Shadow Maps for WebGL and More!
tags:
  - editor
  - engine
  - graphics
---

May is drawing to a close and it's starting to feel like summer here in London. Let's celebrate with a PlayCanvas Dev Update! We've been busy bees, so here's a rundown of the main changes.

### Variance Shadow Maps

The light component now allows you to select a shadow type. In addition to the current PCF Shadow Maps, there are new options for 8-bit, 16-bit and 32-bit Variance Shadow Maps. 8-bit VSM uses a small amount of GPU memory and is guaranteed to work on any device but is lower quality. 32-bit VSM uses a lot of GPU memory and relies on a device's ability to render to floating point textures but the quality is very good. 32-bit VSM will gracefully fall back to 16-bit and then to 8-bit should the device not provide the required capabilities.

Let's compare PCF with VSM. First, here's PCF:

[![shadows-sm](/img/shadows-sm.png)](/img/shadows-sm.png)

And here is VSM:

[![shadows-vsm](/img/shadows-vsm.png)](/img/shadows-vsm.png)

The big advantage of VSM is the ability to apply large blur kernels, which would be prohibitively slow with PCF. As you can see, the results are most pleasing!

VSM is still work in progress so expect more updates to land in the engine in the coming weeks.

### Reworked Editor Camera Controls

We've completely rewritten the controls for the Editor camera in the 3D view. It should be far more intuitive now and also enable you to be more productive. For example, we have changed the behavior of dollying the camera to be based on what the mouse cursor is pointing at. This makes it feel much more similar to Google Maps:

[![zoom](/img/zoom.gif)](/img/zoom.gif)

### Easy Asset Inspection in Dev Tools

We've made it so your assets are displayed in your browser's Dev Tools as they are in Editor's Asset Panel. This makes it much easier to locate, inspect and debug when running your game launched from the Editor.

[![devtoolsassets](/img/devtoolsassets-1.png)](/img/devtoolsassets-1.png)

### Engine Optimizations

We've performed a thorough round of engine optimizations, aimed at speeding up your games, but also to reduce memory allocations to avoid garbage collection stalls. Specifically, we have:

- Created a special profile build of the engine which is now only used when you run the PlayCanvas Profiler from the Editor. The regular non-profile build has the code that collects all of the timing and statistical information stripped out.
- Optimized many commonly used functions. [Here is a good example](https://github.com/playcanvas/engine/commit/0212abf7a65ab8e26894275e630790ad6d04c904).
- Removed many allocations that used to happen at runtime. [Here is a good example](https://github.com/playcanvas/engine/commit/3b8dc59b379d337e16b6237d48af30dfa43c3599).

### Other Changes

- Editor tooltips have been refactored with any missing ones added.
- Improved reporting of an asset's references when right clicking it in the Asset Panel.

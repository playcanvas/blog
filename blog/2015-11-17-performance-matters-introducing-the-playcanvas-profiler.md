---
author: will
comments: true
date: 2015-11-17 15:50:25+00:00
layout: post
link: https://blog.playcanvas.com/performance-matters-introducing-the-playcanvas-profiler/
slug: performance-matters-introducing-the-playcanvas-profiler
title: "Performance Matters: Introducing the PlayCanvas Profiler"
categories:
  - News
tags:
  - editor
  - performance
---

Time to take the wraps off the latest awesome feature in PlayCanvas. We're super-excited to unveil the PlayCanvas Profiler.

[![profiler](/assets/media/profiler.png)](/assets/media/profiler.png)

The Profiler is a panel that overlays your app, displaying lots of useful timing information and performance stats. So whenever you're wondering why your app isn't hitting 60 frames per second, simply launch the Profiler and you should be able to figure out exactly what the problem is.

To launch the Profiler, there are new options available from the Launch button:

[![profiler_launch](/assets/media/profiler_launch.png)](/assets/media/profiler_launch.png)

Depending on whether your scripts are served from PlayCanvas or locally, select the relevant option that enables the Profiler. The Editor will remember the option you select for the next time you hit the Launch icon.

There is also a **hot-key** to toggle the Profiler: CTRL (CMD) + ALT + T.

### Profiler Overview

[![profiler_stats](/assets/media/profiler_stats.png)](/assets/media/profiler_stats.png)

The left-hand panel of the Profiler displays statistics related to the currently rendered scene. It displays frame rate, the number of cameras enabled (normally, you will want this to be 1), the number of shaders, materials, triangles and so on. Also, frame time is broken down into update (the time to run all component updates), physics (simulation time) and render time (the time to pass all of the graphics commands to WebGL). At a glance, you can quickly see where there might be problems.

[![profiler_timeline](/assets/media/profiler_timeline.png)](/assets/media/profiler_timeline.png)

The right-hand panel is the Profiler Timeline. It displays a number of key events in your app's life from launch:

- **dom** (DOM interactive):  event when the browser finishes parsing html document, and able to render first frame of a page to a screen
- **preload**: event when PlayCanvas initiates preloading of all assets that are required before the app can start.
- **start**: event when PlayCanvas begins the main application loop and rendering begins.

Green bars represent individual asynchronous asset loads. Orange bars are blocking shader compilations.

### The Future's Bright

So we hope you enjoy using the new Profiler. But remember, true believers, more goodness is yet to come. This is our initial beta version but we have plenty of improvements coming down the pipe.

Any comments? [Join the Forum thread](https://forum.playcanvas.com/t/introducing-the-new-playcanvas-profiler/1171).

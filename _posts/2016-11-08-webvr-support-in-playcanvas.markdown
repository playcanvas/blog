---
author: dave
comments: true
date: 2016-11-08 17:20:56+00:00
layout: post
link: https://blog.playcanvas.com/webvr-support-in-playcanvas/
slug: webvr-support-in-playcanvas
title: WebVR support in PlayCanvas
categories:
  - Features
tags:
  - webvr
  - vr
---

Today we're really excited to announce support for WebVR into the PlayCanvas Editor.

{% include youtube.html id="B9QAptFocQQ" %}

This week Google [announced](https://www.roadtovr.com/google-launching-webvr-support-for-android-chrome-in-january-desktop-to-follow/) that WebVR 1.1 (the latest current version of the spec) should be released in Chrome for Android in January 2017. But for a feature as complex as virtual reality, browser support is only one piece of the puzzle. At PlayCanvas, we know how important great tools are to making high quality experiences so today we're launching our WebVR engine integration to make sure that you can create applications right now.

## PlayCanvas WebVR

### Optimized Engine Support

The PlayCanvas graphics engine is an advanced WebGL graphics engine. We've worked hard to make sure our renderer is optimized specifically for stereo rendering. Unlike most engines we don't simply render the scene twice for each eye. Instead, our renderer knows that a lot of the main render loop is the same for each eye. So, for example, expensive operations like culling, sorting draw calls and setting uniforms and render states only have to be done once before we draw the scene for each eye. This can lead to a significant performance increase, particularly on mobile.

![VR Performance Comparison](/assets/media/vr-comparison-1.jpg)

### Polyfill for unsupported platforms

It's still early days for WebVR which means it's not yet supported on all platforms. When you enable WebVR in your PlayCanvas project, we make sure your browser can support it using the [WebVR polyfill](https://github.com/googlevr/webvr-polyfill) library from Google. PlayCanvas is smart enough to load the library only if you need it.

### Tutorials and Documentation

PlayCanvas is renowned for its extensive documentation and VR is no different. [Basic instructions](https://developer.playcanvas.com/en/user-manual/xr/vr/), [API reference](https://api.playcanvas.com/classes/Engine.XrManager.html) and [specific optimization tips](https://developer.playcanvas.com/en/user-manual/xr/optimizing-webxr/), we've got it all.

### Samples and Starter Kits

These sample projects show you how to construct a VR scene and give you sample code to start from.

[Hello World](https://playcanvas.com/project/433339/overview/webvr-hello-world) - A very simple 3D scene

[360 Image](https://playcanvas.com/project/434266/overview/webvr-360-image) - Just drop in your own 360 panorama

[360 Video](https://playcanvas.com/project/434444/overview/webvr-360-video) - Add a link to your own video

[Room Scale VR](https://playcanvas.com/project/434546/overview/webvr-orange-room) - A more complex scene designed for HTC Vive and other Room Scale VR

### The Future

We believe the future for WebVR is very bright and we're committed to making PlayCanvas the best tool for creating WebVR applications. [Sign up for free today](https://playcanvas.com), we'd love to see what you build!

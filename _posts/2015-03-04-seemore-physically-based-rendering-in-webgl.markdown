---
author: will
comments: true
date: 2015-03-04 07:06:06+00:00
layout: post
link: https://blog.playcanvas.com/seemore-physically-based-rendering-in-webgl/
slug: seemore-physically-based-rendering-in-webgl
title: "Seemore: Physically Based Rendering in WebGL"
categories:
  - News
tags:
  - seemore
---

GDC is here again. What better time to announce our newest demo, built to show the awesome power of the [ARM Mali family of GPUs](<https://en.wikipedia.org/wiki/Mali_(processor)>). It's called Seemore, and it showcases the next evolutionary step in PlayCanvas' Physically Based Rendering (PBR) technology.

{% include playcanvas.html type="p" id="MflWvdTW" %}

_Click the fullscreen button top right for the best experience._

Great care has been taken to optimize the demo, especially Mali-powered mobile devices. We have done this by adding support for ETC1 texture compression and by tuning our shaders to execute as fast as possible on ARM-based hardware.

You may remember that last year, PlayCanvas brought PBR to WebGL with the amazing [Star-Lord demo](https://playcanv.as/p/SA7hVBLt). Despite the awesome graphics, it wasn't representative of a real game environment. This is what Seemore brings to the party. More specifically, we have added the following:

- Box projected cubemap environment mapping. Essentially, this implements very realistic specular reflectance.
- Refraction. Check out the ice chess pieces in the demo.
- ...and lots of refinements and generalizations for the existing PBR codebase.

In the next couple of weeks, we'll be working hard to integrate all of these new engine features back into the [main GitHub repo](https://github.com/playcanvas/engine). If you think Seemore looks good then hold on to your hats - we're just getting started!

Please note: Seemore is not yet compatible with iOS devices. We will add support for PVR texture compression as soon as we can.

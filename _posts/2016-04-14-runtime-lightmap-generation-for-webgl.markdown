---
author: dave
comments: true
date: 2016-04-14 12:40:30+00:00
layout: post
link: https://blog.playcanvas.com/runtime-lightmap-generation-for-webgl/
slug: runtime-lightmap-generation-for-webgl
title: Runtime Lightmap Generation for WebGL
wordpress_id: 2337
categories:
  - Features
---

For many years, lightmapping has been the mainstay of achieving low cost yet realistic lighting. However, it's rarely seen in WebGL applications because generating lightmaps requires third-party modelling applications with complex workflows in order to bake out textures.

All that changes today as we introduce **Runtime Lightmap Generation** into the PlayCanvas Engine.

<!-- more -->

[iframe src="https://playcanv.as/e/p/txPePQvy" width="100%" allowfullscreen="true" webkitallowfullscreen="true"]

_Here's a link to [full demo](https://playcanv.as/p/txPePQvy)._

The demo above shows the engine's lightmap generation in action and this functionality is now available to all users via the PlayCanvas Editor.

## How does it work?

For the uninitiated, lightmaps are extra textures that contain pre-computed lighting information that are applied to models at runtime. This means that instead of expensive per-pixel lighting, you can pre-compute static lighting that is incredibly cheap to render on the GPU.

We've also specially designed our lightmapping solution for the needs of the web. In the Sponza scene above, there are 5 lights which generate 65 lightmaps applied to the 240,000 triangle mesh that makes up the scene. In total, this generates over 60MB of HDR lightmap textures. Even with an excellent compression ratio, it would be very time consuming to download this texture data. So we've designed the PlayCanvas lightmapper to be unique among both native and WebGL engines. **The PlayCanvas Engine generates all lightmaps on application start.** In a few hundred milliseconds, we generate all the textures required for static lighting so your scene runs super-smoothly across all devices.

## What's good about it?

**Performance**

Just see for yourself. Switch between the lightmapped and dynamic lighting modes in the Sponza demo above. On a MacBook Pro or a recent mobile device like a Nexus 5 or iPhone 6, the lightmapped scene runs at 60fps. Using the real-time dynamic lighting we have to sample 5 filtered shadow maps (one for each light) which seriously affects performance.

With this new feature, we're enabling WebGL developers to create beautifully lit 3D scenes that run in all browsers from low end mobile to high end desktop. Not only will your application run smoothly on mobile, it will also load incredibly fast.

**Ease-of-use**

The lightmapping tools are built directly into the Editor. To get started, you just need to flick a couple of check boxes on your light and model components and hit the Bake button. Find out more by reading the new [documentation](https://developer.playcanvas.com/en/user-manual/graphics/lighting/runtime-lightmaps/).

**Features, Features, Features**

Of course, there are also all the bells and whistles that make the lightmapper a dream to use. We generate HDR lightmaps so everything looks great. You can mix and match your static and dynamic lighting to give you the best of both worlds. We even auto-magically UV-unwrap your models if you haven't already generated lightmap UVs.

## What's next?

This is just the first step for the PlayCanvas Lightmapper. We'll soon be adding support for Specular Reflectance to the lightmapper. And beyond that: Global Illumination.

But don't wait, runtime lightmap generation is available to all users right now. Go try it out today!

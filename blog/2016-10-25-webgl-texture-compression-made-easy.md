---
author: will
comments: true
date: 2016-10-25 18:41:10+00:00
layout: post
link: https://blog.playcanvas.com/webgl-texture-compression-made-easy/
slug: webgl-texture-compression-made-easy
title: WebGL Texture Compression Made Easy
categories:
  - News
tags:
  - compression
  - editor
  - performance
---

Big news! PlayCanvas is excited to introduce **easy texture compression**, enabling you to build bigger and better WebGL apps.

Today, the vast majority of WebGL developers load textures from JPG and PNG images. Unfortunately, while these formats compress well for transmission (especially JPG), they occupy a great deal of video memory when passed to WebGL. For example, let's consider this image of the Earth:

<!-- more -->

[![Earth Texture](/img/texture-earth.jpg)](/img/texture-earth.jpg)

The image is 4096 by 2048 but compresses well to a 1.81MB JPG file. Under the hood, WebGL expands this image to uncompressed 24-bit RGB, using 33.6MB of VRAM! Now imagine a single material with diffuse, normal, metalness, gloss, emissive and opacity maps. 6 of these images will occupy over 200MB of VRAM. Now imagine having 10 or more unique materials in your app. Get ready for crashed browser tabs and unhappy end users!

WebGL solves this problem by providing support for a number of compressed texture formats supported in hardware on the GPU. Each GPU tends to support at least one of these formats. Today, WebGL has fairly widespread support for:

- DXT: supported by all desktop devices and some Android devices
- PVR: supported by all iOS devices and some Android devices
- ETC1: supported by most Android devices

PlayCanvas exposes these formats through a simple inspector panel on a texture asset. For the Earth image, it gives the following results:

[![compressiondialog](/img/compressiondialog.png)](/img/compressiondialog.png)

The first number is the GZIPed file size and the second number denotes how much VRAM is occupied by the texture. Notice how the compressed images occupy one sixth of the VRAM when compared to the original JPG. This is a stunning reduction!

Let's turn out attention to the demo iframed at the top of this article. VRAM usage is as follows:

| Texture Set | VRAM Usage (MB) |
| ----------- | --------------- |
| JPG + PNG   | 528.0           |
| DXT         | 87.7            |
| PVR         | 66.8            |
| ETC1        | 87.7            |

Texture compression suddenly makes the demo mobile friendly. But notice how it loads incredibly quickly after loading a mere 4MB of data. How is this possible? The textures are using a technique called level of detail, where low resolution versions are loaded up front allowing the application to start, while the high resolution versions asynchronously stream in the background. Also note that the app doesn't have to load any lightmaps because they are created procedurally on application start using [PlayCanvas' runtime lightmap generation](https://blog.playcanvas.com/runtime-lightmap-generation-for-webgl/).

PlayCanvas' approach ensures that the most optimal texture format is selected for the device on which your application is running. In contrast, the Unity WebGL solution loads DDS files and decompresses as necessary on platforms that don't support it. This means that mobile devices do not benefit despite mobile devices having the greatest need for compression.

### Summary

- **One-click texture compression** for DXT, PVR and ETC1
- Achieve at least **6 times compression** of all texture data in your WebGL apps
- **Most optimal image format selected** for device running a PlayCanvas app

PlayCanvas Texture Compression is available from today for Organization and Personal account holders ([see the manual](https://developer.playcanvas.com/user-manual/assets/textures/#texture-compression) for more info). It will be rolled out to all users following a short beta period. So go forth, compress your textures and take your WebGL apps to a whole new level. And if you're new to PlayCanvas, why not [sign up today](https://playcanvas.com/). We can't wait to see what you make!

<div className="iframe-container">
    <iframe loading="lazy" src="https://playcanv.as/p/yipplmVO/" title="360 lookaround camera" webkitallowfullscreen="true" mozallowfullscreen="true" allow="autoplay" allowfullscreen="true" allowvr="" scrolling="no" frameborder="0" />
</div>

[DIRECT LINK TO RUN FULLSCREEN](https://playcanv.as/p/yipplmVO/)

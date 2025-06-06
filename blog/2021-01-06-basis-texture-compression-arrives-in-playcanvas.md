---
authors: steven
slug: basis-texture-compression-arrives-in-playcanvas
title: Basis Texture Compression arrives in PlayCanvas
tags:
  - compression
  - editor
  - performance
---

PlayCanvas implemented the fantastic hardware texture compression [workflow in 2016](https://blog.playcanvas.com/webgl-texture-compression-made-easy/#more-2426) which allowed users to build bigger and better WebGL apps, even on low memory devices like mobile phones.

JPGs and PNGs are great formats for transmission over a network because they tend to compress nicely. But once the images are downloaded and handed over to WebGL, they must decompressed to raw RGB(A) data. Using hardware compressed textures is important as decompression is performed in silicon on the GPU which avoids the need to utilize lots of memory.

<!-- truncate -->

This 4096 x 2048 Earth texture is a 1.81MB JPG but takes a huge **33.6MB of VRAM** when uncompressed!

![Earth Texture](/img/texture-earth.jpg)

With hardware supported texture formats, we can retain a similar file size while massively reducing the amount of VRAM as seen below.

![Legacy Texture Compression](/img/editor-legacy-texture-compression.png)

**Now, what if you reduce file sizes _as well as_ the VRAM usage?!**

That is what Basis gives us and it is available right now to all PlayCanvas users! Compressing the same Earth texture above, produces a **521KB Basis Texture**.That’s a 68% saving over the smallest file size from the hardware supported formats 💪

![Basis Texture Compression](/img/editor-basis-texture-compression.png)

[Basis is an open sourced, texture codec](https://github.com/BinomialLLC/basis_universal) that produces a highly compressed intermediate file format (.basis) that can be converted at runtime to a format that the hardware supports in GPU hardware. This means that there is only **a single (and often smaller) file** that is created to support a wide range of platforms.

As shown by the numbers above, Basis offers huge savings in download times for the end user which in turn, can lead to improved user engagement and click to open metrics for your application.

Let’s check out a real world example. The _Space Base Texture Compression Demo_ from our previous blog article achieves the following VRAM usage and download sizes (gzipped) on desktop in Chrome:

![Texture Compression Comparison](/img/texture-compression-comparison.jpg)

![Texture VRAM Usage](/img/texture-vram-usage.png)

Note that VRAM usage for Basis would ordinarily be the same as with legacy compression. However, PlayCanvas compresses normal maps to YYYX format instead of XYZ for improved quality so utilization is marginally higher.

![Texture Download Size](/img/texture-download-size.png)

That’s a **big saving of 52% (19.5 MB)** in download size from updating the project to use Basis while using a similar amount of VRAM!

And all it takes is a couple of clicks in the asset inspector to get started with Basis compression!

![Enable Basis](/img/editor-enable-basis.gif)

### To Recap

- **Only need one compressed file** vs many (DXT, PVR, ETC1, ETC2, etc) for every texture
- **Up to 2.8 times smaller files** and faster download times for your users
- **Up to 10x faster compression times with Basis**
- **Similar savings in VRAM usage** as hardware supported formats
- **Same one click process** to compress textures

Basis texture compression is **available to everyone** right now so start crunching down those textures! More information can be found in the [documentation](https://developer.playcanvas.com/user-manual/optimization/texture-compression/) including a [migration guide](https://developer.playcanvas.com/user-manual/assets/textures/texture-compression/#migrating-from-legacy-to-basis-texture-compression).

And if you’re new to PlayCanvas, why not [sign up today](https://playcanvas.com/). We can’t wait to see what you make! Let us hear your feedback in the [forums](https://forum.playcanvas.com/)!

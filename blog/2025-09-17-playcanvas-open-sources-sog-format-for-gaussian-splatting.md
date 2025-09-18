---
authors: will
slug: playcanvas-open-sources-sog-format-for-gaussian-splatting
title: "PlayCanvas Open Sources SOG: The WebP of Gaussian Splatting"
tags:
  - gaussian-splats
---

Goodbye SOGS. Hello SOG! 👋

Back in May, [PlayCanvas announced support for SOGS](https://blog.playcanvas.com/playcanvas-adopts-sogs-for-20x-3dgs-compression), a revolutionary super-compressed format for 3D Gaussian splats. While SOGS was a huge leap beyond other compression techniques, we were still not satisfied! So we set about designing a new and improved iteration of the format.

Today, we are proud to introduce **SOG: Spatially Ordered Gaussians**.

<div className="iframe-container">
    <iframe id="viewer" width="800" height="500" allow="fullscreen; xr-spatial-tracking" src="https://superspl.at/s?id=964b09c1"></iframe>
</div>

<!-- truncate -->

The Skate Park above was scanned by [Christoph Schindelar](https://www.linkedin.com/in/christoph-schindelar-79515351/). It has 4 million Gaussians but is compressed to a mere 42MB with SOG. The original PLY was 1GB, meaning a **~95% reduction** in file size.

### What is SOG

SOG shares a great deal in common with its predecessor. It is still a `meta.json` file that reference multiple `.webp` images. So what's new and why is it better?

📦 **More convenient:** Your SOG splats can now also be written to a single `.sog` file  
⚡ **Faster to load:** SOG stores splat data in Morton order meaning its 'GPU-ready' and doesn't require processing on load  
🗜️ **Easier to compress:** SOGS compression required CUDA but SOG only needs WebGPU so it runs anywhere  
🎯 **More precision:** SOG minimizes compression artifacts by making smarter use of the same number of bits

### Converting to SOG with SplatTransform

To create `.sog` files (or unbundled `.json` + `.webp` files), we provide the open source [SplatTransform](https://github.com/playcanvas/splat-transform) CLI tool. To install it, just issue this command:

```sh
npm install -g @playcanvas/splat-transform
```

And to convert, do:

```sh
splat-transform input.ply output.sog
```

What could be easier? 🎉

### Engine Support for SOG

As you might expect, the open source [PlayCanvas Engine](https://github.com/playcanvas/engine) is the first graphics runtime to support SOG. Support was introduced in the [2.11.0 release](https://github.com/playcanvas/engine/releases/tag/v2.11.0) and we have thoroughly tested and stabilized it with a number of subsequent patches.

[PlayCanvas React](https://github.com/playcanvas/react) and [PlayCanvas Web Components](https://github.com/playcanvas/web-components) have also been updated to support SOG.

### Editor Support for SOG

Bundled SOG files (`.sog`) are now natively supported in the PlayCanvas Editor! Simply drag and drop a `.sog` file into your ASSETS panel to create a new `gsplat` asset.

<video autoPlay muted loop controls src='/img/editor-sog-import.mp4' style={{width: '100%', height: 'auto'}} />

Dragging the `gsplat` asset into the viewport triggers the creation of a new `Entity` with the asset assigned to a `GSplatComponent`.

:::info
Unbundled SOG scenes (`.json` + `.webp`) are not natively supported in the Editor. Stick to `.sog`!
:::

### SuperSplat Support for SOG

[SuperSplat](https://superspl.at/), the #1 platform publishing 3D Gaussian Splats, has been updated to compress your scans with SOG. Since it provides around **2-3x** the compression of Compressed PLY, your creations will load much faster and will load on more memory constrained devices.

### Open Sourcing SOG

Today, we are officially open sourcing the [specification for SOG](https://developer.playcanvas.com/user-manual/gaussian-splatting/formats/sog/). [SplatTransform](https://github.com/playcanvas/splat-transform) provides a reference writer for the format. And the [PlayCanvas Engine](https://github.com/playcanvas/engine) provides a reference implementation for loading and rendering SOG.

We encourage other engine and tools developers to integrate support for SOG into your products/projects. And we invite the open source community to join our open source effort and contribute to PlayCanvas' codebases in any way that you can.

### Credits

We would like to recognize the work of some incredible people from the open source community that made all of this possible:

* [Wieland Morgenstern](https://wieland.morgenst.de/) from [Fraunhofer HHI](https://www.hhi.fraunhofer.de/en/index.html) who developed the original SOGS format.
* [Vincent Woo](https://vincentwoo.com/) who did the original integration of SOGS into PlayCanvas.

Let's continue this tradition and work together to keep 3DGS technology free and open source.

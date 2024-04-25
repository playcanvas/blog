---
author: donovan
comments: false
date: 2023-12-05 12:00:00+00:00
layout: post
link: https://blog.playcanvas.com/compressing-gaussian-splats/
slug: compressing-gaussian-splats
title: "Compressing Gaussian Splats"
categories:
  - Announcement
  - News
tags:
  - gaussian-splats
  - compression
  - supersplat
---

### Introduction

[**3D Gaussian Splatting**](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/) is a new method for digitizing and rendering real world objects. With gaussian splatting, you can digitize a scene from a few photos using services like [Luma Labs](https://lumalabs.ai/) or [Polycam](https://poly.cam/). These services take the set of photos and generate a 3d Gaussian Splat scene in [PLY format](<https://en.wikipedia.org/wiki/PLY_(file_format)>).

For example, this is a Gaussian Splat scene rendered in PlayCanvas.
{% include playcanvas.html type="p" id="69cnpevQ" %}

### What is a Splat?

Gaussian Splat Scenes are not made up of polygons and textures. Instead, they are made up of many (up to millions) of individual, unconnected blobs called _splats_. A splat is just a particle in space with size, orientation, color and opacity.

Below you can see a single brown splat selected. The splat bounding box shows its orientation and size:

![Splat Example](/img/splat-example.gif)

The gaussian part of the name comes from the shape of splat itself: the splat opacity has a gaussian falloff from its center to its edge.

### Engine Support

The PlayCanvas team has been adding support to the engine for loading and rendering Gaussian Splat PLY files:

[![Engine Example](/img/gaussian-splat-example.gif)](https://playcanvas.github.io/#/loaders/splat-many)

Since the resulting files are often messy and require cleaning, we released [SuperSplat](https://playcanvas.com/super-splat), a tool for cleaning and processing gaussian splat PLY files:

[![SuperSplat Example](/img/super-splat-example.gif)](https://playcanvas.com/super-splat?load=https://code.playcanvas.com/viewer/guitar-cleaned.ply)

### PLY Format

However, the default gaussian splat PLY format as exported by training tools is large.

This is because the uncompressed format stores a large amount of data _per splat_:

| Name                        | Data Format | Bytes |
| --------------------------- | ----------- | ----- |
| Position                    | 3 x float   | 12    |
| Orientation                 | 4 x float   | 16    |
| Scale                       | 3 x float   | 12    |
| Spherical harmonics / color | 48 x float  | 192   |
| Total                       |             | 232   |

For example, the original `guitar.ply` scene file takes **132.8 MB** (**32 MB** excluding spherical harmonic data).

### Compressed PLY Format

So we introduced a _compressed PLY_ format for use in runtime applications. The compressed PLY file format ignores the unused spherical harmonic data and stores the rest of the elements in quantized integers.

The format can be summarized as follows:

- Split the scene into chunks of 256 splats
- For each chunk, store the min and max (x, y, z) for position and scale in floating point
- For each splat in the chunk, store a normalized and quantized value for position and scale (relative to chunk extents) and orientation and color

This data layout results in the following data _per chunk_:

| Name           | Data Format | Bytes |
| -------------- | ----------- | ----- |
| Position bound | 6 x float   | 24    |
| Scale bound    | 6 x float   | 24    |
| Total          |             | 48    |

And the following data _per splat_:

| Name        | Data Format            | Bytes |
| ----------- | ---------------------- | ----- |
| Position    | uint32 (11, 10, 11)    | 4     |
| Orientation | uint32 (2, 10, 10, 10) | 4     |
| Scale       | uint32 (11, 10, 11)    | 4     |
| Color       | uint32 (8, 8, 8, 8)    | 4     |
| Total       |                        | 16    |

As a result, the compressed version of `guitar.ply` takes only **8.7 MB**.

### Do It Yourself

The easiest way to generate a compressed PLY file yourself is using the [SuperSplat tool](https://playcanvas.com/super-splat). Load the PLY file into SuperSplat and export it again using the 'Compressed Ply File' option:

[![SuperSplat Export](/img/super-splat-export.png)](https://playcanvas.com/super-splat)

If you are interested in the file format specifics, see [this code](https://github.com/playcanvas/engine/blob/a86bd8be0cfd4e39e9ba5e5466acb6875ab9906e/extras/splat/splat-data.js#L257) which demonstrates how to decompress the file data.

See [this editor project](https://playcanvas.com/project/1165904/overview/gaussiansplatdemo) for an example of loading and rendering a compressed gaussian splat PLY file. Or you can [run it here](https://playcanv.as/p/69cnpevQ/).

### Summary and Future

We have introduced a new compressed PLY format for gaussian splatting which is roughly 4x smaller than uncompressed data and can be used in realtime applications.

In future we hope to:

- store splats hierarchically for optimized rendering and culling
- implement realtime splat LOD
- test skinning and animation of gaussian splats
- further compress gaussian splat data
- optimize WebGPU rendering

### References

The compressed format is largely based on the fine work of Aras Pranckevičius and his [blog posts](https://aras-p.info/).

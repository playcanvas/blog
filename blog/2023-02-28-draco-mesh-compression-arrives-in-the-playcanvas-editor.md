---
authors: will
slug: draco-mesh-compression-arrives-in-the-playcanvas-editor
title: Draco Mesh Compression Arrives in the PlayCanvas Editor
tags:
  - compression
  - editor
  - gltf
  - performance
---

We are thrilled to announce the immediate availability of Draco Mesh Compression in the PlayCanvas Editor! Our latest feature allows developers to compress meshes using Google's Draco technology, reducing file sizes and enhancing the end-user experience.

At its core, [Draco Mesh Compression](https://google.github.io/draco/) reduces the amount of data needed to represent 3D graphics without compromising visual quality. The technology achieves this by applying a lossy compression algorithm to the mesh data. With less data to transfer, the result is faster load times and lower bandwidth costs for your applications.

The open source [PlayCanvas Engine](https://github.com/playcanvas/engine) has been able to load Draco-compressed glTF 2.0 files for quite some time now. But now you can generate these Draco-compressed glTF files in the Editor at import time. Check out how easy it is to use:

<div className="iframe-container">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/dDLI0gyROmE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

_["1972 Datsun 240k GT"](https://skfb.ly/6VtZu) by Karol Miklas is licensed under [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/4.0/)._

In the example above, a **49.9MB** GLB file is crunched down to only **3.67MB**. That's a **92.6% reduction is file size**! And for the majority of scenes, you should notice _no difference in terms of visual quality_. The only cost is decompression time when the compressed GLB is downloaded by an end user, but this should be significantly less than what is saved in terms of download time.

To enable the feature, open your Project Settings in the Inspector, expand the Asset Tasks panel and edit the Mesh Compression setting. Then, simply Re-Import any existing FBX or GLB and compression will be applied. Any FBX or GLB subsequently imported will also respect your mesh compression setting. Read more on the [Developer Site](https://developer.playcanvas.com/user-manual/assets/import-pipeline/#mesh-compression).

We believe that mesh compression is going to take many types of applications to the next level, particularly e-commerce applications like product configurators, which need to load detailed meshes as fast as possible.

Get started with PlayCanvas today and make your WebGL dreams a reality!

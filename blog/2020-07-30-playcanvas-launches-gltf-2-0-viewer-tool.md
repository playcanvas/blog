---
authors: will
slug: playcanvas-launches-gltf-2-0-viewer-tool
title: PlayCanvas launches glTF 2.0 Viewer Tool
tags:
  - gltf
  - viewer
---

Today, the PlayCanvas team is excited to announce the release of a brand new browser-based glTF viewer application.

![glTF Viewer](/img/gltf-viewer.gif)

<!-- truncate -->

**Try it now:** [https://playcanvas.com/viewer](https://playcanvas.com/viewer)

Or click these links to preload some classic glTF models: [Boom Box](https://playcanvas.com/viewer/?load=https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoomBox/glTF-Binary/BoomBox.glb), [Damaged Helmet](https://playcanvas.com/viewer/?load=https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb) and [Fox](https://playcanvas.com/viewer?load=https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Fox/glTF-Binary/Fox.glb).

The viewer is open sourced under an MIT license and the code can be found on GitHub.

**Fork it now:** [https://github.com/playcanvas/playcanvas-viewer](https://github.com/playcanvas/playcanvas-viewer)

The viewer allows you to drag-and-drop any glTF 2.0 file and inspect it in detail. We challenge you to find one that doesn't work! The viewer has the following features:

- Visualize wireframe, skeleton, bounds and normals
- Adjust scene lighting and skybox
- Drag and drop equirectagular images (including HDR files) or six cubemap face images.
- See how a model performs on both the CPU and GPU via the viewer's real-time metrics panel
- Play animations (including skinned and morphed meshes) - unlimited morph targets are supported
- Visualize animation curves in real-time as graphs in the 3D view
- Load models via drag-and-drop or by passing a URL query parameter
- Support for Draco mesh compression

The release of the PlayCanvas Viewer coincides with the engine reaching **100% glTF 2.0 spec compliance**! PlayCanvas passes every single core test in [cx20's glTF Test suite](https://github.com/cx20/gltf-test#gltf-test). We are now turning our attention to supporting the full range of glTF 2.0 extensions. The engine already supports:

- `KHR_materials_pbrSpecularGlossiness`
- `KHR_materials_unlit`

The engine itself can parse and render glTF 2.0 files incredibly quickly. You can expect glTF parse time to be approximately one tenth of that loading the equivalent JSON model.

[Give it a try today](https://playcanvas.com/viewer) - you'll be impressed!

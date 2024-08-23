---
authors: martin
slug: initial-webgpu-support-lands-in-playcanvas-engine-1-62
title: Initial WebGPU support lands in PlayCanvas Engine 1.62!
tags:
  - webgpu
---

WebGPU is a cutting-edge technology that promises to revolutionize the way 3D graphics are handled on the web. As the successor to WebGL, WebGPU provides faster and more efficient rendering capabilities for complex 3D graphics and simulations.

PlayCanvas has been at the forefront of this new technology and has been working on adding WebGPU support to its platform.

With WebGPU, we can expect to see more immersive and interactive 3D experiences on the web in the future.

[![WebGPU Area Lights](/img/webgpu-area-lights-demo.jpg)](/img/webgpu-area-lights-demo.jpg)  
[_PlayCanvas WebGPU Clustered Area Lights Demo_](https://playcanvas.com/demos/arealights/)

<!-- truncate -->

## Refactoring of WebGL engine

Before adding support for WebGPU, it's important to discuss the significant amount of refactoring work that was required on our existing WebGL engine. Implementing deeper architectural changes while preserving backwards compatibility required a significant amount of meticulous care.

- To enable support for WebGPU, we needed to establish a clear separation of graphics technology that could be shared between WebGL and WebGPU. This involved a significant refactoring effort to extract WebGL-specific code into a separate set of classes.
- PlayCanvas utilizes a collection of shader chunks to produce GLSL shaders that implement advanced material properties and lighting modes, as well as custom shader chunks defined by users. However, since WebGPU employs the WGSL language, we used glslang and tint WASM modules to dynamically convert these shaders on-the-fly with injecting support for uniform buffers and other modifications.
- The PlayCanvas engine lacked explicit render passes, making the rendering process more rigid and harder to extend. This was solved by implementing a FrameGraph that allowed us to describe the rendering process as a set of render passes, their dependencies, and associated targets, which created a more flexible and performant rendering architecture.
- Unlike WebGL, which sets render state and shaders using a custom API, WebGPU specifies all those through render pipelines. To support both rendering APIs with optimal performance, we needed to refactor the render states into standalone objects that are efficient to compare and set up.
- To support the WebGPU platform, we need to undergo a significant refactoring to organize uniforms into uniform buffers.
- To facilitate the asynchronous creation of WebGPU device, we have introduced a new async API to create a graphics device, which is the primary breaking change required to adopt WebGPU.

## What is left to do

- Our primary objective is to align the WebGPU implementation with that of WebGL, and while we have made significant progress towards this goal, there are still some features that are missing. Furthermore, several smaller details require cleanup and rectification.
- We need to incorporate it into the Editor environment for both launched and published applications. Currently, only WebGL is available in this environment.
- Our primary objective is to achieve full parity with WebGL, but initially, we are focusing on basic implementations of some concepts to deliver a working implementation, which will need to be extended to meet our performance objectives.
- WebGPU provides developers with access to Compute Shaders, which enables more efficient parallel processing of data on the GPU. This feature can significantly improve the performance of complex algorithms and simulations, which may have been impractical to run on the CPU. With access to Compute Shaders, we can bring new visual features to the next level, such as advanced particle systems, post-processing and global illumination techniques.

## Engine examples

As an early pre-release of WebGPU, we have updated several engine examples to use it, which can be accessed on [https://playcanvas.github.io](https://playcanvas.github.io/). To use WebGPU, the Chrome Canary browser is required, with the 'chrome://flags/#enable-unsafe-webgpu' flag enabled.

[![Examples Browser WebGPU](/img/playcanvas-examples-browser-webgpu.jpg)](/img/playcanvas-examples-browser-webgpu.jpg)

[PlayCanvas Examples Browser](https://playcanvas.github.io/)

Let us know what you think in the [forums](https://forum.playcanvas.com/t/engine-release-v1-62/30360)!

### Attributions

[Oldsmobile Cutlass Supreme Sedan '71](https://sketchfab.com/3d-models/oldsmobile-cutlass-supreme-sedan-71-78f76d386a4341b0b71745bdc50fd5ab) by Barbo is licensed under [Creative Commons Attribution](https://creativecommons.org/licenses/by/4.0/)

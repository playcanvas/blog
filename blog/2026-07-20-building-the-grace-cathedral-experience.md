---
authors: donovan
slug: building-the-grace-cathedral-experience
title: "Building the Grace Cathedral Experience"
description: "A look at how we built the Grace Cathedral experience using streamed SOG, WebGPU-first rendering and custom shader effects."
tags:
  - gaussian-splats
  - playcanvas
  - webgpu
  - supersplat
---

import AppEmbed from '@site/src/components/AppEmbed';

[Grace Cathedral](https://gracecathedral.org/) is a San Francisco landmark on Nob Hill.

After seeing [Vincent Woo's](https://vincentwoo.com) high-quality capture of the cathedral and its surrounding streets as 3D Gaussian splats, we jumped at the chance to collaborate with him. Together, we turned his splats into [a browser-based, interactive experience](https://vincentwoo.com/3d/grace_cathedral/). You can see the finished app below:

<!-- truncate -->

<AppEmbed
  src="https://vincentwoo.com/3d/grace_cathedral/"
  title="Grace Cathedral"
  autoLoad
/>

This article explores how I built this app. Let's dive in.

## Under the Hood

The [PlayCanvas Engine](https://github.com/playcanvas/engine) was the perfect runtime on which to build, thanks to its WebGPU hybrid renderer and streamed SOG format.

### WebGPU Hybrid Renderer

The exterior view renders around 3.5 million Gaussian splats at a time. Because they must be sorted back to front, moving the camera means repeatedly sorting millions of splats in real time.

Our first-generation Gaussian splat renderer used WebGL 2, which only provides vertex and fragment shaders. They are well suited to drawing the splats but not to sorting them, so a worker sorted the Gaussians on the CPU and uploaded the results to the GPU. Sorting and uploading could fall behind rendering, making artifacts visible as the camera moved.

WebGPU lets us divide that work more effectively. Compute shaders cull, project and sort the active splat set on the GPU every frame, then vertex and fragment shaders render the result. Keeping the data on the GPU avoids the transfer bottleneck and makes the pipeline [dramatically faster](/new-in-supersplat-webgpu-and-streaming-bring-huge-performance-wins) than the worker-based WebGL 2 renderer.

The experience uses this WebGPU pipeline whenever the browser supports it and falls back to the WebGL 2 renderer automatically. To support both rendering paths, the cutout, flag animation and transition shaders each have WGSL and GLSL implementations so the experience looks the same on both backends.

### Streamed SOG

The splat data is delivered as [streamed SOG](/new-in-supersplat-webgpu-and-streaming-bring-huge-performance-wins) — our open [compressed splat format](/playcanvas-open-sources-sog-format-for-gaussian-splatting), extended with chunked levels of detail that the engine fetches on demand.

The experience contains separate splat sets for the exterior and interior. The exterior combines a streamed LOD set covering everything within 400 meters with a static, low-detail set for the landscape beyond it. Each mode loads only its own set and evicts the other, so device memory holds one view at a time.

Startup is tuned for time-to-first-pixel. On load, each streamed splat set starts at a single coarse LOD, so only a small fraction of the data needs to arrive before the loading screen lifts. From there, the engine streams in detail progressively within a per-device budget: 3.5 million rendered splats on desktop and 1.4 million on mobile. Mode switches are covered by a short freeze-fade: the last frame is held and faded down while the next splat set loads its coarse LOD, then the new view fades in and refines.

### Optimized to Run Everywhere

Beyond streaming and per-device splat budgets, a few things keep the experience smooth on modest hardware — and cool and quiet on phones:

- **On-demand rendering.** The app only renders when something changes: camera movement, LOD chunks arriving, a cutout animating, cars driving by. When you stop moving, it stops drawing.
- **Resolution caps.** Device pixel ratio is capped on high-DPI displays, with a further render-scale reduction on mobile, where the extra pixels cost more than they show.
- **Depth pre-pass occlusion.** The interior collision mesh doubles as an occluder: rendered depth-only before the splats, it lets early-Z reject splat fragments hidden behind walls.

## Bringing the Scene to Life

### The Peek Effect

While orbiting outside, the Peek toggle carves away the section of wall nearest the camera so you can look inside. A thin, glowing rim outlines the cut edge.

<video autoPlay muted loop controls src='/img/grace-peek.mp4' style={{width: '100%', height: 'auto'}} />

It is built on the engine's gsplat shader chunk system, which lets a project replace the `gsplatModifyVS` and `gsplatModifyPS` chunks to modify every splat and every fragment. The cutouts themselves are just box entities in the Editor, grouped under trigger volumes. As the camera moves, the trigger closest to it eases its cutout open while the others ease closed.

The shader works in two stages to keep it cheap. A per-splat stage — a compute pass on WebGPU — tests each splat's center against the cutout boxes with a signed distance function. Splats fully inside an open box are culled outright and only those near a cut surface are flagged for further processing. The fragment stage then runs a pixel-exact version of the same test for flagged splats. It reconstructs each fragment's world position from depth, fades alpha inside the box and draws a rim that maintains a constant on-screen width at any distance. The rim color is written as an HDR value so bloom picks it up. The chunks are installed only while the exterior view is active, so walk mode pays nothing for the effect.

### A Hidden Flag

The same chunk also animates a flag hidden somewhere in the scene. Splats inside an authored box ride a traveling wave, with amplitude ramping up from the pole edge and each splat tilting to follow the displaced cloth surface. Can you find it? 🔍

### Cars

We created the moving traffic by isolating and duplicating parked cars from the original capture in the SuperSplat Editor:

<video autoPlay muted loop controls src='/img/grace-cars2.mp4' style={{width: '100%', height: 'auto'}} />

Three car splats spawn at randomized intervals and travel past the cathedral at slightly different speeds. They are disabled indoors, returning their splats to the interior's rendering budget.

### Camera Navigation

#### Exterior Orbit Controller

The exterior orbit controller moves around a rounded-box envelope fitted to the cathedral. Horizontal and vertical motion are parameterized by arc length along the walls, corners and roof, producing uniform camera speed without discontinuities. Zoom adjusts the camera's standoff from the surface, while damped input adds momentum after release.

<video autoPlay muted loop controls src='/img/grace-orbit.mp4' style={{width: '100%', height: 'auto'}} />

#### Camera Flights

Camera flights use authored waypoint graphs to route around the cathedral's architecture. Inside, routing uses the collision mesh to select visible nodes; outside, it tests clearance against the cathedral's orbit envelope. A shortest-path search produces a route that is converted into a cubic spline, interpolating position, orientation, focus distance and field of view. Closing the annotation rewinds the flight to the previous camera state.

<video autoPlay muted loop controls src='/img/grace-fly.mp4' style={{width: '100%', height: 'auto'}} />

### Sound and Other Touches

A layered soundscape follows the camera. Outside, two city loops crossfade based on altitude. Inside, cathedral ambience takes over, with footsteps playing only while you walk. Even the loading screen follows the theme with a rose window drawn in CSS.

Together, these details turn the cathedral capture into a living, explorable place.

## Open Source Foundations

Everything beneath the Grace Cathedral experience is built on open source foundations. The [PlayCanvas Engine](https://github.com/playcanvas/engine) renders the scene in the browser, [SuperSplat](https://github.com/playcanvas/supersplat) provides the tools to edit and optimize the captures and the open [SOG format](/playcanvas-open-sources-sog-format-for-gaussian-splatting) makes them compact enough to stream. These are the same technologies we develop in the open for anyone to use, inspect and improve.

Want to build an experience of your own? Start with our [Gaussian splatting guide](https://developer.playcanvas.com/user-manual/gaussian-splatting/) for the complete workflow from capture to delivery. You can prepare your capture in the [SuperSplat Editor](https://superspl.at/editor), then follow the [Your First Splat App](https://developer.playcanvas.com/user-manual/gaussian-splatting/building/your-first-app/) tutorial to choose the approach that best fits you, whether that is the Engine API, the PlayCanvas Editor, React or Web Components. 🚀

If you have questions, want to share what you build or simply want to meet other creators, join the [PlayCanvas and SuperSplat community on Discord](https://discord.com/invite/T3pnhRTTAY). We'd love to see you there! 👋

[Experience Grace Cathedral for yourself](https://vincentwoo.com/3d/grace_cathedral/) and see what the open web can do.

---
authors: will
slug: new-in-supersplat-walk-mode-streamed-lod-and-easy-upload
title: "New in SuperSplat: Walk Mode, Streamed LOD and Easy Upload"
tags:
  - gaussian-splats
  - supersplat
---

Last month we launched **[SuperSplat Studio](/build-gaussian-splat-experiences-with-supersplat-studio)**, giving creators the power to add annotations and cinematic post effects to their published splats. Today, we're back with the next wave of improvements - and this one's a big one.

<!-- truncate -->

### 🚶 Walk Mode

You can now explore splats from a first-person perspective with the all-new **Walk Mode**. Step inside your scenes and experience them the way they were meant to be seen.

<div className="iframe-container">
    <iframe loading="lazy" src="https://superspl.at/s?id=8429e5e2&noanim" title="SuperSplat Viewer - URBEX: Sanatorium Inside - Part01" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
</div>

:::tip
Click or tap anywhere in the scene above to walk there! Splat by [Christoph Schindelar](https://www.linkedin.com/in/christoph-schindelar-79515351/).
:::

The viewer defaults to a **click-to-walk** mode — just click or tap where you want to go and the camera will smoothly glide there. On desktop, press **WASD** at any time to switch to FPS-style controls. On mobile, open **Settings** to enable a **pinch-to-move** mode for full touchscreen navigation.

Check out the [full gallery of walkable splats](https://superspl.at/?features=walkable&time=all) to explore many more scenes.

Walk Mode is powered by a new **voxel-based collision** system. When collision data is present in a scene, the viewer automatically enables first-person navigation.

![Voxel collision overlay](/img/supersplat-viewer-voxels.jpg)

[SplatTransform](https://github.com/playcanvas/splat-transform) has been updated to generate this new voxel collision format. Collision generation is currently in **developer preview** — we're working closely with a select group of splat creators to dial it in. Expect to see more and more walkable splats appear in the coming days and we'll open the feature up to everyone once it's stable.

### 📡 Streamed Level of Detail

Ever since we enabled splat publishing on SuperSplat, we've noticed a trend: your splats are getting *bigger*. While a typical desktop machine handles around 4 million Gaussians at high frame rates, we're now regularly seeing scenes published with over 10 million. That's a lot of Gaussians.

To make sure any device can render even the most ambitious scenes, we've introduced **streamed LOD**. Built on the highly capable [SOG (Spatially Ordered Gaussians)](https://blog.playcanvas.com/playcanvas-open-sources-sog-format-for-gaussian-splatting/) format, it slices scenes into small streamable chunks that load dynamically on demand. The viewer fetches only what's needed for the current viewpoint and device capability — so a phone and a high-end desktop both get the best experience they can handle.

LCC scenes captured on [XGRIDS](https://xgrids.com/) devices already ship with high-quality LODs built in. For everyone else, [SplatTransform](https://github.com/playcanvas/splat-transform) can generate streamed SOG from user-created PLYs representing different detail levels.

### 📤 Easy Upload

Until now, the only way to publish a splat on SuperSplat was through the Editor. Today, we're introducing a brand new **Easy Upload** flow — just hit the **Upload Splat** button on the [SuperSplat](https://superspl.at) homepage, drag and drop a PLY, SOG, Streamed SOG or LCC file and go live in seconds.

<video autoPlay muted loop controls src='/img/supersplat-publishing-easy.mp4' style={{width: '100%', height: 'auto'}} />

We've also updated the existing **Editor publishing flow** to share the same new details dialog. When you publish from the [SuperSplat Editor](https://superspl.at/editor), you'll now be redirected to your Manage page to fill in your splat's details while it's being prepared to go live.

<video autoPlay muted loop controls src='/img/supersplat-publishing-editor.mp4' style={{width: '100%', height: 'auto'}} />

The new details dialog is just the beginning — expect more fields to appear soon covering license type, capture hardware and software and even geolocation. Stay tuned!

### ⚡ PlayCanvas Engine 2.17.0

All of the above is powered by the open source [PlayCanvas Engine](https://github.com/playcanvas/engine), and this week sees the release of **version 2.17.0**. This release is laser-focused on splat rendering performance:

- **Major frame rate gains** for both WebGL2 and WebGPU
- **Refined LOD selection** that dramatically improves visual quality
- **Device-aware optimizations** carefully tuned for everything from phones to high-end desktops

Check out the full [release notes on GitHub](https://github.com/playcanvas/engine/releases/tag/v2.17.0).

### 💚 Free and Open Source

SuperSplat, SplatTransform and the PlayCanvas Engine are all **free and open source** under the MIT license. We believe the best tools for 3D on the web should be accessible to everyone.

If you're building a splat-based application, we'd love for you to build it on PlayCanvas. Check out our repos on GitHub:

- [PlayCanvas Engine](https://github.com/playcanvas/engine)
- [SuperSplat Editor](https://github.com/playcanvas/supersplat)
- [SuperSplat Viewer](https://github.com/playcanvas/supersplat-viewer)
- [SplatTransform](https://github.com/playcanvas/splat-transform)

### 👂 We Want to Hear from You

What do you think of the new features? What would you like to see next? Come and join us on the [PlayCanvas Discord](https://discord.com/invite/T3pnhRTTAY) — it's where the world's best splat creators hang out and we'd love to have you there.

See you in there!

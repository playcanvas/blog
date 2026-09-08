---
authors: will
slug: new-in-supersplat-3-0-rebuilds-the-editor-on-webgpu
title: "New in SuperSplat: 3.0 Rebuilds the Editor on WebGPU"
unlisted: true
tags:
  - gaussian-splats
  - supersplat
  - webgpu
  - performance
  - open-source
---

Last month we shipped **[the Publishing API](/new-in-supersplat-introducing-the-new-publishing-api)**, opening superspl.at up to the wider splat ecosystem. Today is a bigger day. **SuperSplat 3.0** is here — the biggest release since 2.0 — and the headline is the editor itself, **rebuilt from the ground up on WebGPU**. It loads far larger scenes, stays responsive when they get heavy, and comes with a new way to select, color grading for selections and a brand new Appearance panel.

<div className="iframe-container">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/hayWiaOuddA" title="SuperSplat 3.0: Rebuilt on WebGPU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<!-- truncate -->

### ⚡ The Editor, Rebuilt on WebGPU

Back in June, the SuperSplat Viewer got a **[compute-based WebGPU renderer](/new-in-supersplat-webgpu-and-streaming-bring-huge-performance-wins)** and a big jump in frame rate. SuperSplat 3.0 brings that same philosophy to the editor and goes a lot further. The editor is now **WebGPU only**, and everything that used to fight for CPU time has moved to the GPU:

- **Projection and sorting** of every Gaussian in the scene run on the GPU, with a fast radix sort and indirect drawing.
- **Selection and histogram compute** run on the GPU too, so picking, brushing and the data panel keep up with scenes of any size.
- **Chunked splat storage with streaming serialization** means the editor no longer needs the whole scene resident in one giant buffer.

The payoff is simple: **far larger scenes load and edit without running out of memory**. And because every splat in the scene is projected and sorted together, overlapping splats now blend correctly with one another. Drop one capture into another and move it around — the result is right, from every angle.

<video playsInline autoPlay muted loop controls src='/img/supersplat3-webgpu-editor.mp4' style={{width: '100%', height: 'auto'}} />

:::info
SuperSplat 3.0 requires a browser with **WebGPU** support, which today means the vast majority of desktop and mobile browsers — see [caniuse.com](https://caniuse.com/webgpu). The 2.x editor lives on in the [v2 branch](https://github.com/playcanvas/supersplat/tree/v2) on GitHub.
:::

### 🎲 Stochastic Alpha: Responsive at Any Scale

Sorting tens of millions of Gaussians every frame is the expensive part of rendering a splat. With 3.0, you don't have to pay for it while you're interacting. The new **Stochastic Alpha** mode renders Gaussians with stochastic transparency — an order-independent technique that needs no sort at all — so orbiting, flying and framing stay fluid no matter how heavy the scene. The moment you stop moving, the fully sorted image returns.

You'll find it under `Settings` > `Rendering` > `Stochastic Alpha`, with four options: `Disabled`, `Enabled`, `Movement` and the new default, `Auto`. In `Auto`, the editor keeps rendering fully sorted frames until a sorted frame gets slow on your GPU. Only then does it switch to stochastic rendering during interaction, and it drops straight back to sorted rendering when the view gets lighter again. Light scenes never see a difference. Heavy scenes stay responsive.

Here it is on a botanical garden scan of around **20 million Gaussians**:

<video playsInline autoPlay muted loop controls src='/img/supersplat3-stochastic-alpha.mp4' style={{width: '100%', height: 'auto'}} />

### 🖌️ Sphere Brush Selection

Selecting the parts of a scene you care about is most of the work of editing a splat, so 3.0 adds a new tool for it. The **Sphere Brush** (`Shift+B`) lets you paint a selection directly onto surfaces in 3D. Every point of your stroke is depth-picked to a world position, forming a path that Gaussians are tested against on the GPU. The brush radius maps to a real-world size at the surface you're painting, and strokes split automatically across depth discontinuities — so the brush follows the surface rather than selecting straight through the scene. You get the object you painted, not everything behind it.

<video playsInline autoPlay muted loop controls src='/img/supersplat3-sphere-brush.mp4' style={{width: '100%', height: 'auto'}} />

Brush size is shared with the 2D brush (`[` and `]`, or `Alt` + mouse wheel) and the usual add, remove and intersect modifiers apply. The selection toolbar has had a refresh alongside it: lasso and polygon, and flood and eyedropper, are now grouped into **press-and-hold** buttons that remember the last tool you used, and every selection tool honors two new toggles — **Selection Depth** (`N`) and **Selection Footprint** (`M`) — which replace the old surface and through modes with independent controls.

### 🎨 Color Adjustments on Selections

Color grading has moved home. The **Colors** section now lives in the Scene Manager on the left, right under Transform, because that's where the rest of your current splat's state is. More importantly, color edits now **apply to your selection** — not just the whole scene. Select the part you want to change, adjust **Tint**, **Temperature**, **Saturation**, **Brightness**, **Black Point**, **White Point** or **Transparency**, and watch the result preview live in the viewport. When you're happy, hit `Apply` to bake it in, or `Reset` to start over. With nothing selected, the grade applies to the whole splat as before.

<video playsInline autoPlay muted loop controls src='/img/supersplat3-color-selection.mp4' style={{width: '100%', height: 'auto'}} />

### 👁️ The New Appearance Panel

How you *see* a splat while editing it matters as much as how you edit it. The new **Appearance** panel in the right toolbar puts all of that in one place. Under **Display**, toggle **Gaussians**, **Centers** and **Rings** on and off, set the center size and ring thickness, and choose how strongly unselected and selected Gaussians are tinted on each surface. Under **Selection**, pick the selection color and choose whether selected Gaussians show centers, rings and an outline. Press `Tab` to toggle every overlay off and on without touching your settings — perfect for a quick look at the real render.

<video playsInline autoPlay muted loop controls src='/img/supersplat3-appearance-panel.mp4' style={{width: '100%', height: 'auto'}} />

Viewport state has a new home too. The eye button in the right toolbar opens **View Options** — grid and plane, bounding box and dimensions, camera poses, camera info and a **Frame Timings** overlay that shows exactly where your GPU time is going. That leaves `Settings` for what it should be: application preferences.

### 🧰 And More

3.0 is a big release and there's plenty more in it:

- **Logarithmic histogram controls** in the data panel, for splat properties with long tails.
- **Faster camera pose imports** for scenes with hundreds of cameras.
- **Orthographic rendering and picking** fixes, so ortho views select what you point at.
- A **reworked grid**, a **complete shortcuts popup** and a refreshed set of toolbar icons.
- A long list of stability fixes across selection, drag tools, the data panel and publishing.

The full list is in the **[3.0.0 release notes](https://github.com/playcanvas/supersplat/releases/tag/v3.0.0)**.

### 💚 Free and Open Source

SuperSplat and the PlayCanvas Engine are **free and open source** under the MIT license. We believe the best tools for 3D on the web should be accessible to everyone — and the best way to make them better is together. Report an issue, open a pull request or just star the repo to show your support. ⭐

- [SuperSplat Editor](https://github.com/playcanvas/supersplat)
- [SuperSplat Viewer](https://github.com/playcanvas/supersplat-viewer)
- [PlayCanvas Engine](https://github.com/playcanvas/engine)
- [SplatTransform](https://github.com/playcanvas/splat-transform)

New to Gaussian splatting on PlayCanvas? Our [Gaussian Splatting documentation](https://developer.playcanvas.com/user-manual/gaussian-splatting/) is the best place to get started, and the [SuperSplat user guide](https://developer.playcanvas.com/user-manual/gaussian-splatting/editing/supersplat/) covers every tool in the editor.

### 👂 We Want to Hear from You

Open **[superspl.at/editor](https://superspl.at/editor)**, drop in your heaviest scene and tell us how it feels. What should 3.1 bring? Come and find us on the [PlayCanvas Discord](https://discord.com/invite/T3pnhRTTAY) or [ping us on X](https://x.com/playcanvas) — it's where the world's best splat creators hang out and we'd love to have you there.

See you in there!

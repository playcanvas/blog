---
authors: will
slug: new-in-supersplat-editor-3-0-rebuilt-on-webgpu
title: "New in SuperSplat: Editor 3.0 Rebuilt on WebGPU"
unlisted: true
tags:
  - gaussian-splats
  - supersplat
  - webgpu
  - performance
  - open-source
---

Last month we shipped **[the Publishing API](/new-in-supersplat-introducing-the-new-publishing-api)**, opening superspl.at up to the wider splat ecosystem. Today is a bigger day. **SuperSplat Editor 3.0** is here — the biggest release since 2.0 — and the headline is the editor itself, **rebuilt from the ground up on WebGPU**. It loads far larger scenes in a fraction of the memory, stays responsive when they get heavy, and comes with a new way to select, color grading for selections and a brand new Appearance panel.

<div className="iframe-container">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/hayWiaOuddA" title="SuperSplat 3.0: Rebuilt on WebGPU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<!-- truncate -->

### ⚡ The Editor, Rebuilt on WebGPU

Back in June, the SuperSplat Viewer got a **[compute-based WebGPU renderer](/new-in-supersplat-webgpu-and-streaming-bring-huge-performance-wins)** and a big jump in frame rate. SuperSplat 3.0 brings that same philosophy to the editor and goes a lot further. It's a ground-up rewrite of both the renderer and the editor's data model, and the editor is now **WebGPU only**:

- **Projection, frustum culling, compaction, depth sorting and draw submission** for every Gaussian in the scene run on the GPU every frame — a compute projector, a GPU radix sort and indirect drawing. The CPU sort worker is gone.
- **Splat data lives in chunked GPU storage**, with a small per-Gaussian instance list holding the editable state. The editor no longer keeps full copies of the scene in JavaScript.
- **Histograms, range selection, color matching, bounds and every selection pass** run as GPU compute, so the tools keep up with scenes of any size.
- **Exports are streamed** chunk by chunk through splat-transform, so PLY, compressed PLY, SOG, SPZ, `.ssproj` and Publish no longer materialize the whole scene before writing.

The payoff is a dramatic drop in memory use. Here's peak JavaScript heap on a 4.4 million splat scene (a 990 MB PLY), 2.x against 3.0:

| Operation | SuperSplat 2.x | SuperSplat 3.0 |
| --- | --- | --- |
| Scene loaded, idle | 1,557 MB | 105 MB |
| Save PLY | 1,722 MB | 623 MB |
| Save compressed PLY | 2,982 MB | 1,759 MB |
| Save `.ssproj` | 1,723 MB | 790 MB |
| Publish | 1,934 MB | 741 MB |
| Render 1080p video | 1,673 MB | 142 MB |

Scenes that used to exhaust the browser now load and edit comfortably. And because the whole scene is projected and sorted as one on the GPU, you can drop one capture into another and work on them together:

<video playsInline autoPlay muted loop controls src='/img/supersplat3-webgpu-editor.mp4' style={{width: '100%', height: 'auto'}} />

:::info
**SuperSplat 3.0 requires WebGPU.** It runs in current Chrome and Edge, Safari 26 or later and Firefox where WebGPU is enabled. On a browser without it (or with hardware acceleration disabled) the editor shows a clear startup message instead of loading. The 2.x editor is preserved on the [v2 branch](https://github.com/playcanvas/supersplat/tree/v2), whose last release is [v2.32.5](https://github.com/playcanvas/supersplat/releases/tag/v2.32.5).
:::

### 🎲 Stochastic Alpha: Responsive at Any Scale

Sorting tens of millions of Gaussians every frame is the expensive part of rendering a splat. With 3.0, you don't have to pay for it while you're interacting. The new **Stochastic Alpha** mode renders Gaussians opaque and depth-tested with per-fragment coverage — a sort-free, order-independent technique — so orbiting, flying and editing stay fluid no matter how heavy the scene. The moment the scene settles, a fully sorted, blended frame is drawn, so what you see at rest is exact.

You'll find it under `Preferences` > `Rendering` > `Stochastic Alpha`, with four options: `Disabled`, `Enabled`, `Movement` and the new default, `Auto`. In `Auto`, the editor keeps rendering fully sorted frames until a sorted frame proves slow on your GPU. Only then does it switch to stochastic rendering during movement, and it drops straight back to sorted rendering when the view gets lighter again. Light scenes never see a difference. Heavy scenes stay responsive. Rings mode works in stochastic frames too.

Here it is on a botanical garden scan of around **20 million Gaussians**:

<video playsInline autoPlay muted loop controls src='/img/supersplat3-stochastic-alpha.mp4' style={{width: '100%', height: 'auto'}} />

### 🖌️ Sphere Brush Selection

Selecting the parts of a scene you care about is most of the work of editing a splat, so 3.0 adds a new tool for it. The **Sphere Brush** (`Shift+B`) lets you paint a selection directly onto surfaces in 3D. Every point of your stroke is depth-picked to a world position, forming a path that Gaussians are tested against on the GPU. The brush radius maps to a real-world size at the surface you're painting, and strokes split automatically across depth discontinuities — so the brush follows the surface rather than selecting straight through the scene. You get the object you painted, not everything behind it.

<video playsInline autoPlay muted loop controls src='/img/supersplat3-sphere-brush.mp4' style={{width: '100%', height: 'auto'}} />

Brush size is shared with the 2D brush (`[` and `]`, or `Alt` + mouse wheel) and the usual add, remove and intersect modifiers apply. The rest of selection has been redesigned around it. The old surface/through toggle is replaced by two independent switches on the bottom toolbar: **Selection Depth** (`N`) picks only splats on the visible surface, and **Selection Footprint** (`M`) tests whole Gaussian footprints instead of centers. Every 2D and 3D selection tool honors both, and footprint selection runs on a GPU intersect pass. Zero-alpha splats are now selectable too. Lasso and polygon, and flood and eyedropper, are grouped into **press-and-hold** buttons that remember the last tool you used, with refreshed icons for the brush, box and sphere tools.

### 🎨 Color Adjustments on Selections

Color grading has moved home. The **Colors** section now lives in the Scene Manager on the left, right under Transform, because that's where the rest of your current splat's state is. More importantly, color edits now **apply to your selection** — not just the whole scene. Select the part you want to change, adjust **Tint**, **Temperature**, **Saturation**, **Brightness**, **Black Point**, **White Point** or **Transparency**, and watch the result preview live in the viewport. When you're happy, hit `Apply` to bake it in, or `Reset` to start over. With nothing selected, the grade applies to the whole splat as before.

<video playsInline autoPlay muted loop controls src='/img/supersplat3-color-selection.mp4' style={{width: '100%', height: 'auto'}} />

### 👁️ The New Appearance Panel

How you *see* a splat while editing it matters as much as how you edit it. The new **Appearance** panel in the right toolbar puts all of that in one place. Under **Display**, toggle **Gaussians**, **Centers** and **Rings** on and off, set the center size and ring thickness, and choose how strongly unselected and selected Gaussians are tinted on each surface. Under **Selection**, pick the selection color and choose whether selected Gaussians show centers, rings and an outline. Every option has a help tooltip with its shortcut.

<video playsInline autoPlay muted loop controls src='/img/supersplat3-appearance-panel.mp4' style={{width: '100%', height: 'auto'}} />

One behavior change to know about: **display overlays are now off by default**, so a freshly loaded scene shows the real render. Press `Tab` to toggle every overlay on and off without touching your settings, or turn on any Display toggle to bring them back. This replaces the old Centers/Rings mode switch and the Show/Hide Splats button.

Viewport state has a new home too. The eye button in the right toolbar opens **Overlays** — grid and planes, bounding box and dimensions, camera poses, camera info and a **Frame Timings** diagnostic that graphs live GPU frame time with min, median and p95 over the last second. That leaves `Preferences` (formerly `Settings`) for what it should be: application preferences.

### 🧰 And More

3.0 is a big release and there's plenty more in it:

- **A reworked grid.** Each grid plane (XZ, XY and YZ) can be toggled independently and the choice is saved with your preferences and your document. Grid levels adapt to the view — large scenes get 100 m and 1000 m lines, close-ups never flood with sub-pixel ones — and analytic antialiasing removes the horizon artifacts and the dither where the grid crossed splats.
- **A faster orient tool.** Points are now picked on the GPU, like the measure tool. On a 2.4 million Gaussian scene a click dropped from about 8.5 seconds of frozen UI to under 25 ms. `F` now frames the active sphere, box, measure or orient tool.
- **Logarithmic histogram controls** in the data panel — separate **Log Counts** and **Log Bins** with signed logarithmic binning and accurate raw-value labels.
- **Faster camera pose imports** from JSON and COLMAP, batched so the spline and timeline rebuild once.
- **Orthographic rendering and depth picking** are now correct when the camera is inside the scene bounds.
- **An installable app that opens your files.** The manifest registers file handlers for `.ply`, `.splat`, `.sog`, `.spz`, `.ksplat` and `.ssproj`.
- A **complete keyboard shortcuts popup**, a refreshed set of toolbar icons and a long list of stability fixes across selection, drag tools, the data panel and publishing.
- Built on **PlayCanvas Engine 2.22.0** and **splat-transform 3.3.3**.

The full list is in the **[3.0.0 release notes](https://github.com/playcanvas/supersplat/releases/tag/v3.0.0)**.

:::tip Upgrading from 2.x

- **Hard-refresh once.** The old service worker and offline cache are gone; the first load of 3.0 unregisters them, but if you still see an old build, refresh again.
- **Overlays are off by default.** Press `Tab` or enable them in the Appearance panel.
- **Preferences carry over**, only their homes changed: view toggles are in the Overlays popup, Colors is in the Scene Manager and Stochastic Alpha defaults to `Auto`.
- **Projects saved by 3.0** use document version 1, so open them with 3.0 or later. Projects from 2.x still open fine.

:::

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

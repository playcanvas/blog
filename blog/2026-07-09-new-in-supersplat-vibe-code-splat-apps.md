---
authors: will
slug: new-in-supersplat-vibe-code-splat-apps
title: "New in SuperSplat: Vibe Code Splat Apps, 360° Video and splat-transform 3.0"
tags:
  - gaussian-splats
  - supersplat
  - splat-transform
  - ai
  - open-source
---

import AppEmbed from '@site/src/components/AppEmbed';

Last month we shipped **[WebGPU and Streaming Bring Huge Performance Wins](/new-in-supersplat-webgpu-and-streaming-bring-huge-performance-wins)** — a huge leap in how fast splats load and render. Today's update is all about what you can *do* with your splats. We're rolling out a way to **vibe code an entire app around any splat**, plus **360° video rendering** and **SPZ export** in SuperSplat Editor 2.29.0, and a major new release of **splat-transform**.

<!-- truncate -->

### 🤖 Vibe Code Splat Apps

Turning a Gaussian splat into a real, interactive web app used to mean wiring up an engine, a build tool and a viewer by hand. Not any more. Every **downloadable splat** on SuperSplat now comes with a one‑click **starter project** download.

<video autoPlay muted loop controls src='/img/supersplat-vibe-coding.mp4' style={{width: '100%', height: 'auto'}} />

Open any downloadable scene, hit **Download** and choose the **Vite project** option. You'll get a complete, ready‑to‑run web app — [PlayCanvas Engine](https://github.com/playcanvas/engine) + [Vite](https://vitejs.dev) + TypeScript — with the splat itself bundled in and the camera pose you set in SuperSplat preserved. Unzip it, run `npm install` and `npm run dev`, and you're looking at your splat running live in the browser.

Here's the fun part. The project is deliberately **minimal and fully typed**: the viewer logic lives in a single `src/main.ts`, and everything you'd want to change sits in one clearly named `src/splat-config.ts`. That makes it the perfect thing to hand to your favorite AI coding assistant — Cursor, Claude Code, whatever you like — and **vibe code** the app you actually want. Add hotspots, build a product configurator, drop in a character controller… it's the fastest path we've found from a raw scan to a shippable web app.

Here's one we vibe-coded earlier: an interactive **snow globe** built from a single splat of Le Mont Saint-Michel. Hit play to launch the live app — it's a hefty splat, so it only loads when you ask:

<AppEmbed
  src="https://willeastcott.github.io/snowglobe/"
  title="Le Mont Saint-Michel Snow Globe"
  subtitle="Vibe-coded from a single Gaussian splat"
  note="Click to launch · ~80 MB"
/>

The whole thing is a small Vite + TypeScript project — [browse the source on GitHub](https://github.com/willeastcott/snowglobe) to see exactly how it's put together.

### 🎬 360° Video Rendering

Today also brings **[SuperSplat Editor 2.29.0](https://github.com/playcanvas/supersplat/releases/tag/v2.29.0)**, and its headline feature is **360° video rendering**. You can now render your animated splat scenes straight to **equirectangular 360° video** — ready to upload to YouTube 360, view in a VR headset or share as immersive social content. Here's how it works:

<video autoPlay muted loop controls src='/img/supersplat-360-video.mp4' style={{width: '100%', height: 'auto'}} />

And here's the payoff — a 360° video rendered straight out of SuperSplat and uploaded to YouTube. Open it there and drag to look around, or view it on your phone or in a headset for the full immersive effect:

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a className="button button--primary button--lg" href="https://www.youtube.com/watch?v=6oGjT8eubMc" target="_blank" rel="noopener">▶&nbsp;&nbsp;Look around in 360° on YouTube</a>
</div>

And we didn't stop at video. SuperSplat can now also export **360° equirectangular images**, and regular image export has switched to **WebP** for smaller files at higher quality.

### 📦 SPZ Export

SuperSplat Editor 2.29.0 also adds export to **SPZ**, the open, compressed splat format created by Niantic Labs for Scaniverse. SPZ files are roughly **10× smaller than the equivalent PLY** with virtually no perceptible loss in quality, and the format has quickly become a common language for moving splats between tools.

With SPZ export, your SuperSplat scenes drop straight into Scaniverse and any other SPZ‑compatible app or pipeline.

<video autoPlay muted loop controls src='/img/supersplat-spz-export.mp4' style={{width: '100%', height: 'auto'}} />

### ⚡ splat-transform 3.0

[splat-transform](https://github.com/playcanvas/splat-transform) is our open source command‑line tool and library for converting and optimizing Gaussian splats — it's the same tool that produces SuperSplat's super‑compressed [SOG](/playcanvas-open-sources-sog-format-for-gaussian-splatting) and Streamed SOG output. Today it gets its biggest upgrade yet: **version 3.0**.

The 3.0 release is a ground‑up **streaming rewrite**. Instead of loading an entire scene into memory, splat-transform now streams data through in bounded chunks, so **memory use scales with chunk size, not scene size**. In practice that means you can process **scenes of 100M+ Gaussians on standard hardware** — and it's dramatically faster too: a 10M‑Gaussian filter pass runs about **7× faster while using roughly a fifth of the peak memory** of the 2.x line.

Because so much changed under the hood, 3.0 is a major release with some breaking API and CLI changes, and it targets **Node.js 22+**. Give it a spin with `npx @playcanvas/splat-transform`; the **[3.0 release notes](https://github.com/playcanvas/splat-transform/releases/tag/v3.0.0)** and [this pull request](https://github.com/playcanvas/splat-transform/pull/276) have the full details and migration notes.

### 💚 Free and Open Source

SuperSplat, SplatTransform and the PlayCanvas Engine are all **free and open source** under the MIT license. We believe the best tools for 3D on the web should be accessible to everyone.

If you're building a splat-based application, we'd love for you to build it on PlayCanvas. Check out our repos on GitHub:

- [PlayCanvas Engine](https://github.com/playcanvas/engine)
- [SuperSplat Editor](https://github.com/playcanvas/supersplat)
- [SuperSplat Viewer](https://github.com/playcanvas/supersplat-viewer)
- [SplatTransform](https://github.com/playcanvas/splat-transform)

New to Gaussian splatting on PlayCanvas? Our [Gaussian Splatting documentation](https://developer.playcanvas.com/user-manual/gaussian-splatting/) is the best place to get started.

### 👂 We Want to Hear from You

What do you think of the new features? What would you like to see next? Come and join us on the [PlayCanvas Discord](https://discord.com/invite/T3pnhRTTAY) — it's where the world's best splat creators hang out and we'd love to have you there.

See you in there!

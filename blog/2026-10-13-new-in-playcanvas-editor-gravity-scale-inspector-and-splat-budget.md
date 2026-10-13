---
authors: kris
slug: new-in-playcanvas-editor-gravity-scale-inspector-and-splat-budget
title: "New in PlayCanvas Editor: Gravity Scale, the Inspector and Splat Budget Mode"
tags:
  - editor
  - physics
  - debugging
  - gaussian-splats
---

**Editor 2.34** is out, two weeks after 2.32, and it is built around **Engine 2.23**. The headline is a new **Inspector** launch option: tick one box and your launched app comes up with a full debug panel docked beside it, where you can pause it, step it a frame at a time, pick entities straight out of the viewport and draw the physics world.

Alongside it: rigidbodies get a per-body **Gravity Scale**, Gaussian splats get a new **Splat Budget Mode** and their LOD distances back, particles can opt out of fog and tonemapping, and, from 2.33, you can throw away everything since your last checkpoint with **Discard All**.

<video playsInline autoPlay muted loop controls src='/img/editor-2-34.mp4' style={{width: '100%', height: 'auto'}} />

<!-- truncate -->

### 🪂 Rigidbody Gravity Scale

Every dynamic rigidbody now has a **Gravity Scale**. It multiplies the world gravity for that one body: `1` is normal, `0` makes it ignore gravity entirely, and a negative value reverses it.

<video playsInline autoPlay muted loop controls src='/img/editor-2-34-gravity-scale.mp4' style={{width: '100%', height: 'auto'}} />

In the clip above, one material's worth of spheres is set to `-1` and falls up onto a glass ceiling, another is set to `0` and just hangs there, and the rest fall as usual. All three groups share the same world.

It's the field you want for balloons, floaty power-ups, low-gravity zones, or a single heavy object that needs to drop faster than everything around it. Before, that meant a script applying a counter-force every frame. Now it's one number on the component.

The field only shows when **Type** is **Dynamic**, alongside Mass and the damping and factor fields, because static and kinematic bodies aren't moved by gravity. Ammo has to be imported into the project, as for any rigidbody. Reference: the [rigidbody component docs](https://developer.playcanvas.com/user-manual/editor/scenes/components/rigidbody/) and the engine's [`RigidBodyComponent`](https://api.playcanvas.com/engine/classes/RigidBodyComponent.html).

### 🔍 Launch with the Inspector

Hover the **Launch** button and there is a new **Inspector** option in the menu. With it ticked, the launched app opens with the [PlayCanvas Inspector](https://github.com/playcanvas/inspector) docked on the right: a debug panel that runs on your app's own engine and shows what it is actually doing.

<video playsInline autoPlay muted loop controls src='/img/editor-2-34-launch-inspector.mp4' style={{width: '100%', height: 'auto'}} />

The panel has the entity hierarchy with every component's live properties, plus tabs for **Cameras**, **Assets**, **Frame graph**, **Render targets**, **Textures**, **Meshes**, **Materials**, **Scripts**, **Memory**, **Shaders** and **Physics**. The toolbar pauses and steps the app, picks an entity from the viewport, and flies or orbits a debug camera. Keyboard shortcuts work too: <kbd>`</kbd> toggles the panel, <kbd>F9</kbd> pauses and <kbd>F10</kbd> steps a frame while paused.

The clip shows the workflow I keep reaching for. Run the physics scene, pause it with the spheres mid-air, pick one, and its live rigidbody values, including the `gravityScale` of `-1` it was given in the Editor, are right there in the panel. Then **Draw physics world** in the Physics tab overlays the colliders and contact points. Step a few frames to watch exactly what the solver does.

The Inspector is read-only, apart from toggling entities on and off, pausing and stepping, and view-only overrides like render modes, wireframe and the flown camera, which it removes when it closes. It needs **Engine 2.23 or later**. On an older engine the launch page logs a warning and carries on without it. The option is remembered for you per project, and the Editor's MCP `launch:start` accepts `inspector: true` as well.

### 🌫️ Splat Budget Mode and LOD Distances

Engine 2.23 changes how Gaussian splat LOD is chosen, and the Editor follows it. This partly reverses what I wrote two weeks ago, so to be precise about what moved:

- On the **GSplat** component, **LOD Base Distance** and **LOD Multiplier** are back, next to **LOD Range Min** and **LOD Range Max**. **LOD Falloff** is gone.
- In **Rendering** settings, **LOD Mode** (Error / Distance) is replaced by **Splat Budget Mode**, with **Target** and **Limit**.

<video playsInline autoPlay muted loop controls src='/img/editor-2-34-gsplat-lod.mp4' style={{width: '100%', height: 'auto'}} />

The two modes decide who's in charge. **Target** raises detail until the scene's **Splat Budget** is used up, so the budget is what you are tuning, and the LOD distances only shape how detail falls off. **Limit** flips it: each splat's own LOD distances decide its detail, and the budget only steps in to lower it when the scene would exceed it.

**LOD Base Distance** is the distance of the first LOD transition (LOD 0 to LOD 1), and **LOD Multiplier** is the geometric step between each threshold after that. In the clip, the Roman Parish scene starts in Limit mode at `0.5` and `1.2`, so everything is drawn from coarse LODs. Raising them to `6` and `3` while the app is running streams the detail back in.

The caveat from 2.32 still applies: LOD only does anything on a **streamed SOG octree**. A single `.sog` or `.ply` is one level, so the fields are there but have nothing to switch between. Two neighbouring settings also have clearer descriptions now. **LOD Update Angle** only matters through **LOD Behind Penalty**. A higher **LOD Behind Penalty** also makes streamed LOD files load what's in front of the camera first. Reference: the [GSplat component docs](https://developer.playcanvas.com/user-manual/editor/scenes/components/gsplat/), [Rendering settings](https://developer.playcanvas.com/user-manual/editor/interface/settings/rendering/) and [`GSplatComponent`](https://api.playcanvas.com/engine/classes/GSplatComponent.html). Splat scene above and in the release video: Roman Parish by Andrii Shramko.

### 🔥 Particle Use Fog and Use Tonemapping

The particle system component gets two new toggles, **Use Fog** and **Use Tonemapping**. Both are on by default, which is how particles have always rendered.

<video playsInline autoPlay muted loop controls src='/img/editor-2-34-particle-fog.mp4' style={{width: '100%', height: 'auto'}} />

Turning **Use Fog** off lets a particle system ignore the scene's fog. Embers, magic, signal flares and UI-ish effects then keep their glow at any distance, while the geometry around them still fades into the mist. In the clip, the far lanterns and the firefly field burn straight through the fog with it off, and sink back into it with it on. **Use Tonemapping** does the same for tonemapping, for effects whose colours you want exactly as authored. Reference: the [particle system component docs](https://developer.playcanvas.com/user-manual/editor/scenes/components/particlesystem/) and [`ParticleSystemComponent`](https://api.playcanvas.com/engine/classes/ParticleSystemComponent.html).

### ♻️ Discard All Changes (2.33)

This one shipped in 2.33 and fits here rather than in a post of its own. The **Changes** tab in Version Control now has a **Discard All…** button next to **Open Full Diff**, which restores the branch to its latest checkpoint.

<video playsInline autoPlay muted loop controls src='/img/editor-2-34-vc-discard-all.mp4' style={{width: '100%', height: 'auto'}} />

It's built so you can't do it by accident and lose something. The dialog has **Take a checkpoint of the current state first** ticked by default, so the work you are throwing away is still recoverable from History. Untick it and the dialog turns red, warns **This cannot be undone.**, and the button becomes **Discard Permanently**. The button only appears when the branch has a checkpoint, there are changes since it, and you have write access.

### 🧩 Also since 2.32

A handful of smaller additions that did not need a section of their own:

- **Material UV channels 2 to 7.** Every texture slot's UV select now goes from UV0 to UV7, for meshes that carry the extra channels.
- **Enable GLSL Shader Transpilation** (2.33). A new Rendering setting under Enable WebGPU. When enabled, GLSL-only shaders are supported under WebGPU. It adds the shader compiler files to published and downloaded builds, so turn it off to keep builds smaller if you don't need it. It defaults to the Enable WebGPU value.
- **Antigravity IDE.** Antigravity IDE joins VS Code and Cursor as an external code editor, in Editor settings and in the asset context menu.
- **Fixes.** Numeric inspector edits now persist even when the displayed value doesn't change. Rejected realtime changes are named in the Editor console. An Engine v1 launch crash is fixed. Classic script attributes parse in Safari, and asset thumbnails and previews load from their own URLs.
- Built on **PlayCanvas Engine 2.23.1**.

Everything else is itemised in the **[2.34.0 release notes](https://github.com/playcanvas/editor/releases/tag/v2.34.0)**.

### 💚 Open Source, Top to Bottom

The Editor frontend, the Engine underneath it and the Inspector that docks beside your launched app are all MIT licensed and developed in the open. If something in this release is broken, missing or just awkward to use, the issue trackers and the pull request queues are the shortest routes to fixing it.

- [PlayCanvas Editor](https://github.com/playcanvas/editor)
- [PlayCanvas Engine](https://github.com/playcanvas/engine)
- [PlayCanvas Inspector](https://github.com/playcanvas/inspector)

Just getting started? The [User Manual](https://developer.playcanvas.com/user-manual/editor/) walks through the Editor end to end, and the [Physics documentation](https://developer.playcanvas.com/user-manual/physics/) covers the rigid bodies that Gravity Scale sits on top of.

### 👂 Tell Us What You Find

The Inspector makes it far easier to see what your app is really doing, so we expect you'll turn up things we haven't. If something behaves differently to how you expected, or the thing you actually needed did not make this release, say so — the [Discord](https://discord.gg/RSaMRzg) and the [forum](https://forum.playcanvas.com) are where we are, and we are [on X](https://x.com/playcanvas) too.

*Music: "New Sunrise" (CC0).*

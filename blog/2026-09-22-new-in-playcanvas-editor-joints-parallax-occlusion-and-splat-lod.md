---
authors: kris
slug: new-in-playcanvas-editor-joints-parallax-occlusion-and-splat-lod
title: "New in PlayCanvas Editor: Joints, Parallax Occlusion and Splat LOD"
tags:
  - editor
  - physics
  - graphics
  - gaussian-splats
unlisted: true
---

Last year we shipped **[the PlayCanvas VS Code Extension](/new-playcanvas-visual-studio-code-extension)**, bringing the Editor's assets into your own editor. Today the Editor itself gets a release worth talking about. **Editor 2.32** is here, and the headline is the **Joint component** — physics constraints you author in the inspector instead of from a script. Alongside it: ray-marched parallax occlusion on materials, per-cascade shadow control, justified text and a rebuilt set of Gaussian splat LOD controls.

<video playsInline autoPlay muted loop controls src='/img/editor-2-32.mp4' style={{width: '100%', height: 'auto'}} />

<!-- truncate -->

### 🔗 The Joint Component

A joint constrains two rigid bodies to each other, or constrains a single rigid body to a fixed point in world space. The component has been in the engine for years; 2.32 is the first release where you can author it entirely in the Editor.

Reach for it when you want mechanical behaviour to fall out of the simulation instead of being animated by hand: a rope bridge whose planks sag under a load, a door that swings on a hinge, a lift that slides along one axis, a ragdoll, a hanging sign that gets knocked around.

Add it from `Add Component` > `Physics` > `Joint` on any entity. Two prerequisites: Ammo must be imported into the project, and both referenced entities need a **rigidbody** component.

<video playsInline autoPlay muted loop controls src='/img/editor-2-32-joint-component.mp4' style={{width: '100%', height: 'auto'}} />

There are five joint types — **Fixed**, **Ball**, **Hinge**, **Slider** and **6DoF** — and the inspector adapts to the one you pick:

- **Every type** shows **Entity A**, **Entity B**, **Enable Collision** and **Break Impulse**. Leave Entity B empty to pin Entity A to world space; leave Break Impulse empty for an unbreakable joint.
- **Ball, Hinge and Slider** get **Enable Limits**. Hinge and Slider add a **Limits** range once limits are on, plus **Motor Speed** and **Max Motor Force**, which are independent of the limits toggle — so a hinge can be driven as a motor whether or not it is clamped.
- **Ball** adds **Swing Limit Y**, **Swing Limit Z** and **Twist Limit**.
- **6DoF** swaps in a per-axis grid of motion, limit and spring fields across linear and angular X, Y and Z — enough to build a spring, a piston or a clamped compound hinge without writing any code.

One practical note from building test scenes with it: changing **Type** destroys and recreates the underlying constraint and clears the broken flag, but it will not pull already-separated bodies back together. The swing and twist limits, on the other hand, push straight through to the constraint, so you can tune them live while the launch page is running.

The component is still marked alpha, so its behaviour and API may change. Full reference: the [Joint component docs](https://developer.playcanvas.com/user-manual/editor/scenes/components/joint/), the [Joints guide](https://developer.playcanvas.com/user-manual/physics/joints/) and the engine's [`JointComponent`](https://api.playcanvas.com/engine/classes/JointComponent.html).

### ⛰️ Parallax Occlusion Mapping

Materials gain a proper **Parallax** panel. The old single-step height offset is still there, but there is now a ray-marched **Occlusion** mode that makes brickwork, cobbles and panel gaps hold up at grazing angles, where a flat normal map gives the game away.

<video playsInline autoPlay muted loop controls src='/img/editor-2-32-parallax-occlusion.mp4' style={{width: '100%', height: 'auto'}} />

The panel only enables once a **normal map** is assigned. Inside it:

- **Mode** — **Offset** for a single height-map offset, **Occlusion** for ray-marched parallax occlusion.
- **Strength** — how deep the effect reads.
- **Base** — the height-map value that sits at the original surface. Use `1` for depth maps where white is the flat surface.
- **Samples** — maximum height-map samples, Occlusion only. Higher is more expensive.
- **Self Shadow** — maximum samples used to self-shadow the relief per directional light, Occlusion only. Set it to `0` to turn self-shadowing off.

Worth being clear about what this does and does not do: it is a shading trick. The mesh silhouette and the depth buffer are unchanged, so it will not round off the edge of a flat quad. Details are in the [material inspector docs](https://developer.playcanvas.com/user-manual/editor/assets/inspectors/material/) and the new [Parallax Mapping](https://developer.playcanvas.com/user-manual/graphics/physical-rendering/parallax-mapping/) guide.

### 🌓 Per-Cascade Shadow Control

The render component has a new **Shadow Cascades** field — a four-box mask that selects which directional-light shadow cascades receive this render component. Cascades the light does not have are ignored.

<video playsInline autoPlay muted loop controls src='/img/editor-2-32-shadow-cascade-mask.mp4' style={{width: '100%', height: 'auto'}} />

This is a budget tool. Large static geometry that only matters in the distance can skip the tight near cascade; small props that are never seen from far away can be confined to the first cascade or two, cutting the cost of the distant shadow passes.

The field sits directly below **Cast Shadows** and only appears when it is enabled. It pairs with the existing **Cascades** and **Cascade Distribution** fields on the light component.

:::info
The Editor viewport does not always invalidate its cached shadow maps when you change the mask, so you may need to nudge the camera before the change shows up. The launch page is correct. We're tracking this as a bug, not intended behaviour.
:::

See the [render component docs](https://developer.playcanvas.com/user-manual/editor/scenes/components/render/) and [`RenderComponent#shadowCascadeMask`](https://api.playcanvas.com/engine/classes/RenderComponent.html#shadowcascademask).

### 📐 Justified Text

A small one, but a long-standing gap. The element component gains **Justify**, which stretches wrapped lines out to both edges by widening the spaces between words. Good for body copy in a panel, a credits screen or anywhere a ragged right edge looks untidy.

<video playsInline autoPlay muted loop controls src='/img/editor-2-32-justified-text.mp4' style={{width: '100%', height: 'auto'}} />

It only means anything with **Wrap Lines** turned on, and the Editor only shows the checkbox when that is the case and **Auto Width** is off. [Element component docs](https://developer.playcanvas.com/user-manual/editor/scenes/components/element/) · [`ElementComponent#justify`](https://api.playcanvas.com/engine/classes/ElementComponent.html#justify)

### 🎯 Rebuilt Gaussian Splat LOD Controls

The gsplat component's LOD fields have been replaced. The old *LOD Base Distance* and *LOD Multiplier* are gone; in their place, **LOD Range Min** and **LOD Range Max** bound the LOD levels used to render the splat, and **LOD Falloff** controls how strongly detail is concentrated near the camera within the global splat budget, with `0` spreading it evenly.

<video playsInline autoPlay muted loop controls src='/img/editor-2-32-gsplat-lod-controls.mp4' style={{width: '100%', height: 'auto'}} />

The range pair is how you stop one splat from eating the whole budget, or force a hero scan to stay at full detail regardless of distance. Falloff is the shaping knob on top of it.

:::warning Read this before filing a bug

**LOD Range only has an effect on streamed SOG octrees.** The LOD level is clamped to the levels the asset actually has, and a single `.sog` or `.ply` has exactly one. On those assets the fields are present in the inspector and do nothing. This is expected.

:::

The [gsplat component docs](https://developer.playcanvas.com/user-manual/editor/scenes/components/gsplat/) have been updated for the new fields. Splat footage above and in the release video: Trogir, Croatia by tosolini, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

### 🧰 And More

2.32 is a broad release and there's plenty more in it:

- **Max Lights** joins the Clustered Lighting section of the Rendering settings. It caps how many clustered lights can be visible in a frame — keep it as low as your scene allows, as values above 255 push the engine onto a larger light-index texture.
- **A Gaussian Splatting settings section**, which was not surfaced in the panel before. It gathers the scene-wide splat knobs in one place: radial sorting, the LOD update triggers, **Splat Budget**, the culling and foveation thresholds and the appearance toggles. Splat Budget is the one to start with — it sets the target number of splats rendered across the whole scene, and per-component LOD Falloff then shapes how each splat spends its share of it.
- **Asset Credentials** in the Network settings. With it on, asset requests are sent with credentials — cookies, client certificates or HTTP authentication — which is what you need when your assets sit behind an authenticated server. The usual CORS caveat applies: the server has to allow credentials and return a specific origin rather than a wildcard.
- **In-editor MSDF font generation** (since 2.30.0). Upload a TTF or OTF and the Editor generates the MSDF atlas and JSON for you, with no external tooling step. The **Characters** field is editable, so you can add a character set later and regenerate.
- **Toolbar customization** (since 2.30.3). The toolbar is no longer fixed — show, hide and reorder the buttons to match how you actually work.
- Built on **PlayCanvas Engine 2.22.3**.

The full list is in the **[2.32.0 release notes](https://github.com/playcanvas/editor/releases/tag/v2.32.0)**.

### 💚 Free and Open Source

The PlayCanvas Editor frontend and the PlayCanvas Engine are **free and open source** under the MIT license. We believe the best tools for 3D on the web should be accessible to everyone — and the best way to make them better is together. Report an issue, open a pull request or just star the repo to show your support. ⭐

- [PlayCanvas Editor](https://github.com/playcanvas/editor)
- [PlayCanvas Engine](https://github.com/playcanvas/engine)
- [PlayCanvas VS Code Extension](https://github.com/playcanvas/vscode-extension)

New to the Editor? The [User Manual](https://developer.playcanvas.com/user-manual/editor/) is the best place to start, and the [Physics documentation](https://developer.playcanvas.com/user-manual/physics/) covers everything the new Joint component builds on.

### 👂 We Want to Hear from You

Open the Editor, build something that swings, sags or snaps, and tell us how it went. What should 2.33 bring? Come and find us on the [PlayCanvas Discord](https://discord.gg/RSaMRzg), the [forum](https://forum.playcanvas.com) or [ping us on X](https://x.com/playcanvas).

See you in there!

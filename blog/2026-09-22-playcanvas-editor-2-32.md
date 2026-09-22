---
authors: kris
slug: playcanvas-editor-2-32
title: "PlayCanvas Editor 2.32: Joints, Parallax Occlusion and Splat LOD"
tags:
  - editor
  - physics
  - graphics
  - gaussian-splats
---

Editor 2.32 is live. It brings a brand-new **Joint** component for constraining rigid bodies, parallax occlusion mapping on materials, per-cascade shadow control, justified text, and a rebuilt set of Gaussian splat LOD controls.

<video autoPlay muted loop controls src='/img/editor-2-32.mp4' style={{width: '100%', height: 'auto'}} />

:::note
Editor 2.32 runs on PlayCanvas Engine 2.22. Gaussian splat footage: Trogir, Croatia by tosolini, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
:::

<!-- truncate -->

---

### 🔗 The Joint component

The headline of this release is the **Joint** component, the one brand-new component in 2.32. A joint constrains two rigid bodies to each other, or constrains a single rigid body to a fixed point in world space. Previously you had to set that up from a script; you can now author it entirely in the inspector.

Reach for it when you want mechanical behaviour to fall out of the simulation instead of being animated by hand: a rope bridge whose planks sag under a load, a door that swings on a hinge, a lift that slides along one axis, a ragdoll, a hanging sign that gets knocked around.

Add it from **Add Component → Physics → Joint** on any entity. Two prerequisites:

- Ammo must be imported into the project
- Both referenced entities need a **rigidbody** component

There are five joint types — **Fixed**, **Ball**, **Hinge**, **Slider** and **Six Degrees of Freedom** — selected with the `type` field. Every type shows the same four core fields:

- **Entity A** (`entityA`) — the first constrained entity
- **Entity B** (`entityB`) — the second constrained entity. Leave it empty to pin Entity A to world space
- **Enable Collision** (`enableCollision`) — whether the two constrained bodies can collide with each other
- **Break Impulse** (`breakImpulse`) — the impulse above which the joint breaks. Leave it empty for an unbreakable joint

Beyond that, the inspector adapts to the type you picked. Hinge and Slider add **Enable Limits**, **Limits**, **Motor Speed** and **Max Motor Force**, so a hinge can be driven as a motor or clamped to a swing range. Ball adds **Swing Limit Y**, **Swing Limit Z** and **Twist Limit** when limits are enabled. Six Degrees of Freedom swaps in a per-axis grid of **Motion**, **Limits**, **Stiffness**, **Damping** and **Equilibrium** across linear and angular X, Y and Z — enough to build a spring, a piston or a clamped compound hinge without writing any code.

One practical note from building test scenes with it: changing **Type** destroys and recreates the underlying constraint and clears the broken flag, but it will not pull already-separated bodies back together. The swing and twist limits, on the other hand, push straight through to the constraint, so you can tune them live while the launch page is running.

Full reference: [Joint component docs](https://developer.playcanvas.com/user-manual/editor/scenes/components/joint/) and the engine's [`JointComponent`](https://api.playcanvas.com/engine/classes/JointComponent.html).

---

### ⛰️ Parallax occlusion mapping

Materials gain a proper **Parallax** panel. The old single-step height offset is still there, but there is now a ray-marched **Occlusion** mode that makes brickwork, cobbles and panel gaps hold up at grazing angles, where a flat normal map gives the game away.

The panel is in the material inspector and only enables once a **normal map** is assigned. Inside it:

- **Mode** (`parallaxMode`) — **Offset** for a single height-map offset, **Occlusion** for ray-marched parallax occlusion
- **Strength** (`heightMapFactor`) — how deep the effect reads
- **Base** (`heightMapBase`) — the height-map value that sits at the original surface. Use `1` for depth maps where white is the flat surface
- **Samples** (`parallaxSamples`) — maximum height-map samples, Occlusion only. Higher is more expensive
- **Self Shadow** (`parallaxShadowSamples`) — maximum samples used to self-shadow the relief per directional light, Occlusion only. Set it to `0` to turn self-shadowing off

Worth being clear about what this does and does not do: it is a shading trick. The mesh silhouette and the depth buffer are unchanged, so it will not round off the edge of a flat quad. Details are in the [material inspector docs](https://developer.playcanvas.com/user-manual/editor/assets/inspectors/material/).

---

### 🌓 Per-cascade shadow control

The render component has a new **Shadow Cascades** field (`shadowCascadeMask`) — a four-box mask that selects which directional-light shadow cascades receive this render component. Cascades the light does not have are ignored.

This is a budget tool. Large static geometry that only matters in the distance can skip the tight near cascade; small props that are never seen from far away can be confined to the first cascade or two, cutting the cost of the distant shadow passes.

The field sits directly below **Cast Shadows** on the render component, and only appears when **Cast Shadows** is enabled. It pairs with the existing **Cascades** and **Cascade Distribution** fields on the light component.

:::note
The Editor viewport does not always invalidate its cached shadow maps when you change the mask, so you may need to nudge the camera before the change shows up. The launch page is correct. We're tracking this as a bug, not intended behaviour.
:::

See the [render component docs](https://developer.playcanvas.com/user-manual/editor/scenes/components/render/) and [`RenderComponent#shadowCascadeMask`](https://api.playcanvas.com/engine/classes/RenderComponent.html#shadowcascademask).

---

### 📐 Justified text

A small one. The element component gains **Justify** (`justify`), which stretches wrapped lines out to both edges by widening the spaces between words.

It only means anything with **Wrap Lines** turned on, and the Editor only shows the checkbox when that is the case. Good for body copy in a panel, a credits screen or anywhere a ragged right edge looks untidy.

[Element component docs](https://developer.playcanvas.com/user-manual/editor/scenes/components/element/) · [`ElementComponent#justify`](https://api.playcanvas.com/engine/classes/ElementComponent.html#justify)

---

### 🎯 Rebuilt Gaussian splat LOD controls

The gsplat component's LOD fields have been replaced. The old *LOD Base Distance* and *LOD Multiplier* are gone; in their place:

- **LOD Range Min** (`lodRangeMin`) — the lowest LOD level used when rendering this splat
- **LOD Range Max** (`lodRangeMax`) — the highest LOD level used
- **LOD Falloff** (`lodFalloff`) — how strongly detail is concentrated near the camera within the global splat budget. `0` spreads detail evenly

The range pair is how you stop one splat from eating the whole budget, or force a hero scan to stay at full detail regardless of distance. Falloff is the shaping knob on top of it.

:::warning Read this before filing a bug
**LOD Range only has an effect on streamed SOG octrees.** The LOD level is clamped to the levels the asset actually has, and a single `.sog` or `.ply` has exactly one. On those assets the fields are present in the inspector and do nothing. This is expected.
:::

The [gsplat component docs](https://developer.playcanvas.com/user-manual/editor/scenes/components/gsplat/) have been updated for the new fields.

---

### ⚙️ New rendering settings

Two additions to the **Rendering** settings panel. Both expose engine settings that already existed — they are settings-panel additions, not new rendering features.

**Max Lights** (`lightingMaxLights`) joins the Clustered Lighting section. It caps how many clustered lights can be visible in a frame. Keep it as low as your scene allows: values above 255 push the engine onto a larger light-index texture.

There is also a **Gaussian Splatting** section, which was not surfaced in the panel before. It gathers the scene-wide splat knobs in one place — **Radial Sorting**, the LOD update triggers (**LOD Update Distance**, **LOD Update Angle**, **LOD Behind Penalty**, **LOD Underfill Limit**, **LOD Mode**), **Splat Budget**, the culling thresholds (**Alpha Clip**, **Forward Alpha Clip**, **Min Pixel Size**, **Min Contribution**, **Foveation Strength**, **Foveation Center**), and the appearance toggles (**Anti-Alias**, **Use Fog**, **Use Tonemapping**, **Color Update Angle**, **Cooldown Ticks**, **Data Format**, **Enable IDs**).

**Splat Budget** (`gsplatSplatBudget`) is the one to start with — it sets the target number of splats rendered across the whole scene, and per-component **LOD Falloff** then shapes how each splat spends its share of it, mainly by tilting detail between its own near and far field. Non-positive values fall back to the engine default. The full table, with ranges and defaults, is in the [rendering settings docs](https://developer.playcanvas.com/user-manual/editor/interface/settings/rendering/).

---

### 🔐 Asset Credentials

The **Network** settings panel gains **Asset Credentials** (`withCredentials`). With it on, asset requests are sent with credentials — cookies, client certificates or HTTP authentication — which is what you need when your assets sit behind an authenticated server.

The usual CORS caveat applies: an authenticated cross-origin server has to allow credentials and return a specific origin rather than a wildcard. Again, this is a settings-panel addition that surfaces existing engine behaviour, not a change to how assets load by default. [Network settings docs](https://developer.playcanvas.com/user-manual/editor/interface/settings/network/).

---

### 🆕 Two things you may have missed

Both of these shipped before 2.32 and have never been written up, so they're worth calling out here.

**In-editor MSDF font generation** (2.30.0) — upload a TTF or OTF and the Editor generates the MSDF atlas and JSON for you. No external tooling step. **Included Characters** is editable, so you can add a character set later and regenerate. See the [font inspector docs](https://developer.playcanvas.com/user-manual/editor/assets/inspectors/font/).

**Toolbar customization** (2.30.3) — the toolbar is no longer fixed. Show, hide and reorder the buttons to match how you actually work. See the [toolbar docs](https://developer.playcanvas.com/user-manual/editor/interface/toolbar/).

---

### 💬 Join the Community

Let us know what you build with joints, and what you'd like to see next.

- 💬 [Discord](https://discord.gg/RSaMRzg) — Chat with other PlayCanvas developers in real time
- 🌐 [Forum](https://forum.playcanvas.com) — Join in-depth technical discussions
- 🧵 [Reddit](https://www.reddit.com/r/PlayCanvas) — Share your projects and experiences
- 🐦 [X (Twitter)](https://x.com/playcanvas) — Follow for the latest updates and announcements

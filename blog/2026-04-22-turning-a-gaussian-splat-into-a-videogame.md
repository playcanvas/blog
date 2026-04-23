---
authors: iakov
slug: turning-a-gaussian-splat-into-a-videogame
title: "Turning a Gaussian Splat Into a Videogame"
description: "How I turned a photogrammetric 3D Gaussian Splat scene into a playable browser FPS — with collision, pre-baked lighting, navmesh-driven NPCs and behavior-tree AI, all in PlayCanvas."
tags:
  - gaussian-splats
  - supersplat
  - playcanvas
  - tutorial
---

Gaussian Splatting gives you *photorealistic* environments for free. The catch: a splat is just a cloud of oriented blobs — no triangles, no colliders, no navmesh, no lights. Drop a character in and they'll float through walls looking like they belong in a different universe.

This post walks through the demo I built to fix all of that:

* 👉 **[Play it in your browser](https://playcanv.as/p/qxGSuzYq/)** - WASD, mouse to aim, left-click to fire.
* 👉 **[Check the project](http://playcanvas.com/project/1480299)** - the full PlayCanvas project is public. Every script mentioned in this post lives inside it, ready to read, fork, or remix.

<video autoPlay muted loop controls src='/img/gaussian-splat-fps.mp4' style={{width: '100%', height: 'auto'}} />

The scene is a gorgeous indoor scan of a real abandoned place by [Christoph Schindelar](https://superspl.at/user?id=schindelar3d). On top of that splat I bolted a physics collider, a grid of baked lighting probes, a Recast navmesh, eight personality-driven NPCs and a classic FPS loop. Everything runs in a browser tab.

<!-- truncate -->

## 🏗️ The Build

Here's how I built it, step by step.

### 📥 Step 1: Download a Splat from SuperSplat

Before any code, you need a scene. Go to [SuperSplat](https://superspl.at/) and use the **Downloadable** filter in the Explore view. Any splat with that badge has been published with a Creative Commons license by its author — you can grab the `.ply` or `.sog` and drop it into your own PlayCanvas project. The lighting, clutter and scale of the scan I picked were already cinematic, so I didn't have to art-direct anything.

### 📡 Step 2: Convert the Splat to Streamed SOG Format

The Swiss Army knife for everything that follows is [`splat-transform`](https://github.com/playcanvas/splat-transform) — PlayCanvas's open-source CLI for converting splats. We'll lean on it for streamed LOD here and for a collision mesh in the next step.

My scene is a few million Gaussians — big enough that shipping it as a single `.sog` asset would punish anyone on a phone or a slow connection. The fix is [**Streamed LOD**](https://blog.playcanvas.com/new-in-supersplat-walk-mode-streamed-lod-and-easy-upload#-streamed-level-of-detail): instead of one monolithic file, SuperSplat (and `splat-transform`) write out a **folder of SOG chunks** plus a manifest. The runtime loads chunks on demand based on the camera's viewpoint and the device's capability — high-end desktop pulls full detail around the player, a phone pulls a lighter subset, and neither of them stalls waiting for the whole file.

`Scripts/streaming-lod.mjs` hooks into the camera and asks the runtime to keep the chunks around the player fully loaded before the game starts — so you never see pop-in mid-firefight.

:::tip[Try it now]
If your splat is over a few million Gaussians, export it as streamed LOD (the easiest way is from SuperSplat's export dialog — see the [Streamed LOD docs](https://blog.playcanvas.com/new-in-supersplat-walk-mode-streamed-lod-and-easy-upload#-streamed-level-of-detail)) and let the viewer stream it. Your mobile players will thank you.  
[`npm install -g @playcanvas/splat-transform`](https://www.npmjs.com/package/@playcanvas/splat-transform)
:::

### 🧱 Step 3: Generate a Collision Mesh

This used to be the hard part. A splat has no surfaces, so physics is blind to it. You can't walk on it, shoot through it, or path around it. That's where `splat-transform` earns its keep again — the flag you want is `-K` / `--collision-mesh`. It voxelizes the splat, flood-fills the navigable interior from a seed position, and writes out a watertight `.collision.glb` that you can import straight into PlayCanvas as a `mesh` collider.

```bash
splat-transform scene.ply \
  --seed-pos 0,1,0 \
  --voxel-params 0.05,0.1 \
  --voxel-carve 1.6,0.2 \
  -K \
  scene.sog
```

That one command gives me two outputs:

* `scene.sog` — a single-file compressed splat (handy for quick iteration; for the actual build I swap it for the streamed folder from Step 2).
* `scene.collision.glb` — a voxel-derived mesh that hugs the real geometry.

I dropped both into the PlayCanvas project and attached the GLB to an invisible entity with a **Collision** component (mesh) and a **Rigid Body** component (static). Suddenly the player has a floor, the bullets can collide with walls, and the NPCs have something to walk on. No modelling, no clean-up.

![Voxel-derived collision mesh overlaid on the splat](/img/gs-fps-demo-collision.jpg)

:::tip[Try it now]
One command turns a pretty splat into a playable one — run `splat-transform scene.ply -K scene.sog` and drop the resulting `.collision.glb` into your project as a static mesh rigidbody.
:::

### 💡 Step 4: Bake a Lightness Grid from the Splat

Splats carry their lighting baked into every Gaussian. That means the scene looks *amazing* and unchanging. But my player's weapon model, the NPC soldiers and the pickups are ordinary lit PBR meshes — they'd stand out like cardboard cutouts under gym lighting unless they somehow inherited the splat's lighting.

I didn't want to re-light the splat. I wanted a cheap way to ask "how bright is it here?" at any point in the map, at runtime, for my regular meshes.

How `Scripts/probes.js` works:

1. Grab the AABB of a designated floor entity and build a **1-metre grid of probe positions** 1 metre above the ground.
2. Create a tiny 16×16 offscreen `RenderTarget` and a 90° FOV camera that renders only the `World` layer (i.e. the splat — no characters, no HUD, no viewmodel).
3. For each probe, render **6 faces** of a cube (+X, -X, +Y, -Y, +Z, -Z), `readPixels` the 16×16 RGBA output, and compute luminance using the standard Rec. 601 weights:

   ```js
   this._faceLuminance += 0.299 * r + 0.587 * g + 0.114 * b;
   // ... after all 6 faces:
   var lightness = this._faceLuminance / 1536; // 6 faces * 256 pixels
   ```

4. Stash the value in a `gridDepth × gridWidth` 2D array and spawn a tiny debug sphere at the probe position with `emissive = lightness` so you can *see* the light field floating in the scene.
5. When all probes are done, `console.log(JSON.stringify(this.probeJSON))`. I copy that out once, save it as `lightness.json`, attach it as a JSON asset, and delete the probes entity.

Here's the bake in action — each debug sphere pops in as its cube of faces is rendered and its luminance is averaged. Bright spheres mark a well-lit spot on the floor; dim ones sit in corners and under cover. By the end you can read the scene's lighting as a dotted heatmap before a single byte of JSON is written.

<video autoPlay muted loop controls src='/img/gs-fps-light-probes.mp4' style={{width: '50%', height: 'auto', display: 'block', margin: '0 auto 1.5em'}} />

At runtime, every dynamic character script (weapon, NPC, pickup) loads `lightness.json`, bilinearly samples the grid at its world position, remaps it to a sensible exposure range and calls `meshInstance.setParameter('exposure', value)`. Step from a bright atrium into a dim corridor and your hands darken smoothly. Fire your weapon and the pulsating omni-light bounces off the splat around you.

```text
─── Probes: baking 392 probes (28 x 14) ───
Probe 1/392   lightness: 0.4821
Probe 2/392   lightness: 0.4733
...
```

The whole bake takes ~15 seconds once, then the JSON is ~40 KB. No expensive runtime probes, no deferred relighting, just a lookup table.

### 🛠️ Step 5: Vibe Code With the PlayCanvas VS Code Extension

I didn't write any of this in the PlayCanvas web editor's code panel. I used the [**PlayCanvas extension for VS Code**](https://blog.playcanvas.com/new-playcanvas-visual-studio-code-extension) — which also works inside [Cursor](https://cursor.com), so I could pair-program with Claude while editing.

Save the file → the editor picks up the change → reload the launch tab → test. That round-trip is measured in seconds.

Most of the gameplay logic in this demo — `character-controller.js`, `anim-states.js`, `npc-ai.js`, `probes.js` — was iterated on entirely from Cursor.

:::tip[Try it now]
Install the [PlayCanvas VS Code extension](https://marketplace.visualstudio.com/items?itemName=playcanvas.playcanvas). If you live in VS Code or Cursor, it turns PlayCanvas into a normal dev environment.
:::

### 🔄 Step 6: Version Your Project With PlayCanvas + GitHub

The next pain point is "what did I change yesterday and how do I roll back?". PlayCanvas ships a first-party [**version control**](https://developer.playcanvas.com/user-manual/editor/version-control/). You can also use GitHub at the root of your locally synced PlayCanvas project (via the VS Code extension). Don't forget to add a `.pcignore` so the `.git` folder isn't synced to the cloud.

Combined with the VS Code extension, this is about as close to "I'm working in a normal repo" as I've ever had in a browser-first engine. If I break the AI, I'm one `git revert` away from last night's working build.

:::tip[Try it now]
Link a GitHub repo to your PlayCanvas project before you start. You'll thank yourself the first time an agent commits a bad refactor at 1 AM.
:::

### 🧭 Step 7: Generate a Navmesh from the Collision Mesh

NPCs can't path on a splat either — they need a navmesh. For the runtime, I use [**recast-navigation**](https://github.com/isaac-mason/recast-navigation-js), loaded straight from `esm.sh` with dynamic import — zero bundler, just:

```js
const recast = await import('https://esm.sh/recast-navigation');
await recast.init();
const imported = recast.importNavMesh(new Uint8Array(navmeshBuffer));
```

To *produce* the `navmesh.bin` binary, I feed the same `scene.collision.glb` from Step 3 into a small offline Recast-based generator. The collision mesh already represents "solid floor you can walk on", so Recast just has to rasterize it, filter walkable spans and build the nav polygons — takes a few seconds.

I'm cleaning up the generator into a standalone library and will publish it on GitHub shortly — drop-in collision-GLB-to-navmesh-binary for any PlayCanvas project. Follow my [X account](https://x.com/yak32) if you want the drop.

Want to see the navmesh in-game? Press **N** in the demo to toggle the debug overlay — the walkable polygons, agent positions and current paths all light up on top of the splat.

![Recast navmesh debug overlay on the splat, toggled with the N key](/img/gs-fps-nav-mesh.jpg)

:::tip[Coming soon]
Once the library is live, it'll be a one-liner:  
`npx glb-to-navmesh scene.collision.glb navmesh.bin`
:::

### 🧠 Step 8: Give NPCs a Brain with Behavior Trees and Personalities

The NPCs are the part I had the most fun with. Every soldier in the demo is driven by a classic [**behavior tree**](https://www.gamedeveloper.com/programming/behavior-trees-for-ai-how-they-work) — the same abstraction Halo 2 popularised two decades ago and that's still the default for AAA AI in 2026.

`Scripts/npc-ai.js` exposes four primitives:

```js
sequence(...children)   // all must succeed
selector(...children)   // first non-failure wins
condition(pred)         // leaf: true/false
action(fn)              // leaf: 'success' | 'failure' | 'running'
```

…and then every NPC's brain is built by composing those, parameterised by a **personality**:

```js
return selector(
    sequence(isDead, autoRespawn),
    sequence(
        isAlive,
        selector(
            sequence(isReloading, stopShooting),
            sequence(ammoEmpty, doReload),
            ...(traits.healPriority > 0.4   ? [sequence(hpBelow(retreat), hasPickupsNearby, goToPickup)] : []),
            ...(traits.lootPriority > 0.7   ? [sequence(hasPickupsNearby, goToPickup)] : []),
            ...(traits.retreatThreshold > 0.3 ? [sequence(hpBelow(retreat), retreat)] : []),
            ...(traits.aggression > 0.2     ? [sequence(hasEnemiesInRange(range), engageEnemy)] : []),
            guard
        )
    )
);
```

Spawn eight NPCs with eight different personalities — **Sgt. Havoc** (aggressive, pushes), **Ghost** (cautious, heals), **Captain Valor** (heroic), **Strategist** (tactical), **Chaos** (randomness 0.8, impossible to read), **Loot Goblin** (greedy, will run across the map for a pickup), **Chicken** (cowardly, retreats at 80% HP), **Grumps** (grumpy) — and they already feel distinct, because the *same* tree collapses to wildly different priority orders based on traits.

Each agent's `position`, `aimAngle`, `animBits` is updated every tick. The PlayCanvas side — `npc-controller.js` — is just a dumb bridge that reads those fields, sets the entity transform, picks an anim state, fires a muzzle-flash ray, triggers sounds. The AI itself has **zero PlayCanvas dependencies** except `pc.Vec3`; it could be lifted into Three.js, Babylon, a headless sim, whatever.

:::tip[Try it now]
If you've been nervous about behavior trees, read [Chris Simpson's primer](https://www.gamedeveloper.com/programming/behavior-trees-for-ai-how-they-work) and then copy my four-function implementation. It's 20 lines of code and it unlocks production-grade AI.
:::

## 🎮 What You Need to Build One of These

To recap the full stack:

* 📥 **Environment** — any downloadable splat from [SuperSplat](https://superspl.at/), or your own capture.
* 📡 **Streaming** — convert with `splat-transform` to a streamed SOG folder so phones and slow connections don't stall.
* 🧱 **Collider** — `splat-transform -K` → `.collision.glb`, dropped into PlayCanvas as a static mesh rigidbody.
* 💡 **Lighting** — bake a `lightness.json` grid with `probes.js`, sample it per-mesh-instance at runtime.
* 🛠️ **Authoring** — [PlayCanvas VS Code extension](https://marketplace.visualstudio.com/items?itemName=playcanvas.playcanvas) for a normal save-and-reload dev loop.
* 🔄 **Versioning** — [PlayCanvas version control](https://developer.playcanvas.com/user-manual/editor/version-control/) and/or GitHub via the VS Code extension.
* 🧭 **Pathfinding** — [recast-navigation](https://github.com/isaac-mason/recast-navigation-js) from `esm.sh`, fed a pre-baked `navmesh.bin` (generator library coming soon).
* 🧠 **AI** — [behavior trees](https://www.gamedeveloper.com/programming/behavior-trees-for-ai-how-they-work) + personality-driven traits.

Every one of those pieces is free and open source. The whole thing ships as static files to a CDN. My build is 68 MB (most of it the splat itself) and cold-loads in a few seconds.

## 💚 Free and Open Source

SuperSplat, `splat-transform`, recast-navigation and the PlayCanvas Engine are all open source. And so is [**this demo**](http://playcanvas.com/project/1480299) — the whole PlayCanvas project is public. Sign up for a free PlayCanvas account, fork the project, and every script mentioned above (`probes.js`, `npc-ai.js`, `npc-controller.js`, the navmesh wrapper, and the rest) is yours to read or remix. If you take them somewhere cool, I want to see it.

## 👂 Try It, Break It, Tell Me

**[Play the demo](https://playcanv.as/p/qxGSuzYq/)**. Stand in a bright room and watch an NPC walk into the shadow. Fire your weapon next to a wall and watch the splat flash. Crouch into a corner and notice the footsteps go quiet.

Then go build your own. If you have questions, find me and the rest of the splat-creator community on the [PlayCanvas Discord](https://discord.com/invite/T3pnhRTTAY) — that's where all the interesting splats-into-games conversations are happening right now.

See you in there.

---
authors: mark
comments: false
date: 2025-06-09 10:00:00+01:00
layout: post
slug: esm-scripts-playcanvas-2025
title: "ESM Scripts"
categories:
  - Announcement
  - Engine
  - Scripting
tags:
  - esm
  - modules
  - editor
  - developer
---

## Modern JavaScript in PlayCanvas

**We’re excited to announce a major step forward for PlayCanvas: **ESM Scripts are now supported** — and officially the recommended way to write scripts in your PlayCanvas projects.**

If you’ve ever struggled with managing classic scripts, wondered why your auto-complete didn’t work, or wished you could reuse code across projects more easily — this is for you.

ESM (ECMAScript Modules) brings modern JavaScript development to the heart of PlayCanvas. Think: cleaner code, better tooling, instant editor feedback, and full compatibility with the broader JS ecosystem. It’s faster to get started, easier to scale your project, and way more fun to work with.

No more hidden globals. No more messy script loading order. Just well-structured, maintainable, and modular code — exactly how modern web development should be.

<video src="/img/pc-esm-scripts.mp4" autoPlay type="video/mp4" width="100%" />

---

## Why use ESM Scripts?

ESM Scripts offer major improvements across the board:

💡 **Modern JavaScript** — use `import`, `export` class based module syntax  
🧠 **Smarter Editor** — better auto-complete and inline docs  
🧱 **Modular Codebase** — structure large projects cleanly with reusable modules  
⚙️ **No Global Scope Issues** — each script has its own context  
📦 **Import Maps** — define aliases and pull in libraries from CDNs  
🚀 **Optimized for Production** — static imports enable tree-shaking and bundling

## What it looks like

Instead of attaching scripts to an entity and hoping things load in the right order, you now write self-contained, class-based modules like this:

```js
import { Script } from 'playcanvas';

export class Rotator extends Script {
    static scriptName = 'rotator';

    /**
     * @attribute
     * @range [0, 10]
     */
    speed = 5;

    update(dt) {
        this.entity.rotateLocal(0, this.speed * dt, 0);
    }
}
```

The Editor picks up your `scriptName`, exposes your attributes automatically, and everything behaves as expected — no magic, no legacy syntax.

---

## Real benefits for real projects

We didn’t just add ESM support because it was shiny. We added it because it solves real problems PlayCanvas developers have told us about for years.

- You get **stronger editor feedback** while writing code.
- You can **reuse logic cleanly** across multiple scripts.
- You can **share modules between projects** or publish them as libraries.
- You’ll write fewer bugs — and spend less time wrestling with script order or context issues.

Plus, by adopting a standard that the rest of the JS world already embraces, it’s easier than ever to onboard new developers and bring in existing tools and libraries.

---

## Seamless integration without disruption

Don’t worry — classic `.js` scripts aren’t going anywhere. If you have an existing project using them, everything still works. You can even mix classic and ESM scripts in the same project.

But going forward, **ESM Scripts are the best choice** for all new projects — and we think once you try them, you won’t want to go back.

---

## Try It Today

You can start using ESM Scripts right now — just create a script with a `.mjs` extension and enjoy everything modern JavaScript has to offer.

Check out the [user manual](https://developer.playcanvas.com/user-manual/scripting/fundamentals/esm-scripts/) for examples, or drop into the [PlayCanvas Forum](https://forum.playcanvas.com/) to share your thoughts.

We can’t wait to see what you build.

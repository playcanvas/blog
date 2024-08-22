---
authors: will
slug: playcanvas-engine-hits-2-0-0
title: "PlayCanvas Engine Hits 2.0.0"
tags:
  - engine
---

Today marks a major milestone for the PlayCanvas Engine, the [open-source](https://github.com/playcanvas/engine) JavaScript runtime that powers thousands of interactive graphical apps and tools on the web. We are bubbling with excitement to announce the release of version 2.0.0! For the full details, visit our GitHub:

[**RELEASE NOTES**](https://github.com/playcanvas/engine/releases/tag/v2.0.0)

It's not every day we do a major version bump of the Engine. Let's take a walk down memory lane to see how we got here:

* October 2010: Coding of the Engine begins!
* 24 October 2011: [Engine migrated to GitHub](https://github.com/playcanvas/engine/commit/e5bf014e738d5bfc92ece1d6c0f50ad71bf4dd90)
* 4 June 2014: [Engine goes open source](https://blog.playcanvas.com/playcanvas-goes-open-source/)
* 24 April 2018: [Engine hits 1.0.0](https://blog.playcanvas.com/playcanvas-engine-reaches-1-0-0/)

Back in 2018, the Engine was bumped to 1.0.0 because we adhere to [semantic versioning](https://semver.org/) which dictates:

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backward compatibility, you should probably already be 1.0.0.

With hindsight, the Engine should probably have reached 1.0.0 some years before. It had long been stable and was already being used heavily in production!

### Why Bump to 2.0.0

Semantic versioning says that you perform a major version bump when you introduce breaking changes. To say we go out of our way to avoid introducing breaking changes in an understatement. But since 1.0.0, we had done 73 minor versions along with countless patch releases. Along the way, the Engine accumulated a considerable amount of "cruft".

:::info[cruft _noun_ `INFORMAL - COMPUTING`]

badly designed, unnecessarily complicated, or unwanted code or software.

:::

It was getting to the point where parts of the codebase were restricting our ability to advance the Engine's capabilities. And so, we took to the decision to do a spring clean. 🧹 Here are some highlights of what we removed:

* **WebGL 1 support.** This is the big one. Today, devices that support WebGL 1 but not WebGL 2 is less than 2% and this number is only going to get smaller. And supporting WebGL 1 was making it extraordinarily difficult to construct the foundations we needed in order to support WebGPU. Cheerio, WebGL 1 - it's been fun! 👋
* **Scripts 1.0 support.** The very first `ScriptComponent` implementation was deprecated with the introduction of [Scripts 2.0](https://blog.playcanvas.com/playcanvas-scripts-2-0/) back in 2016. So after 8 years of deprecation, it's gone! We are now focused on delivering our new ESM-based scripting system, due soon.
* **AudioSourceComponent.** This component was the precursor to the Engine's [`SoundComponent`](https://api.playcanvas.com/classes/Engine.SoundComponent.html). `AudioSourceComponent` has been deprecated for many years so it's time for it to go.
* **...and several other public API symbols.** What we are left with is a cleaner, tighter codebase that can power us into the future!

### What if my Project Breaks

Never fear! Today's release is more relevant to 'Engine-only' users who pull the engine from [NPM](https://www.npmjs.com/package/playcanvas). At a time of their choosing, these developers can upgrade to 2.0.0 and give it a try. The vast majority of projects will update without modification.

Editor users will gain access to Engine 2.0.0 in the coming weeks. At that point, moving to 2.0.0 will be _opt in_ for existing projects. We plan to support the last Engine 1.x release in the Editor for at least a year after Engine 2 becomes available. This should be plenty of time for developers to migrate. New projects will automatically use 2.0.0. We will release more information about the transition for Editor users in the coming weeks.

In the meantime, we ask NPM users to try Engine 2.0.0 and give us your feedback as soon as you can. We hope you like it! Head over to the [Forum](https://forum.playcanvas.com/), [Discord](https://discord.gg/RSaMRzg) or [GitHub](https://github.com/playcanvas/engine) to have your say. :ear:

### What's New

The 2.0.0 release isn't just about breaking changes! We have some exciting features to announce by way of some brand new Engine examples:

![Engine 2 Examples](/img/engine2-examples.png)

Check 'em out:

* [Custom Shaders: Cross Hatching](https://playcanvas.vercel.app/#/graphics/shader-hatch)
* [Custom Shaders: Used with Skinning and Instancing](https://playcanvas.vercel.app/#/graphics/instancing-gooch)
* [Screen Space Ambient Occlusion](https://playcanvas.vercel.app/#/graphics/ambient-occlusion)
* [Hardware Instancing](https://playcanvas.vercel.app/#/graphics/instancing-custom)
* [glTF Hardware Instancing Extension](https://playcanvas.vercel.app/#/graphics/instancing-glb)

### Thanking the Open Source Community

We _could not_ have reached this point without the amazing open source community:

![GitHub Contributors](/img/engine-contributors.svg)

Thank you for your incredible contributions. 🙏

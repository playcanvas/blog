---
author: will
comments: true
date: 2015-06-05 19:19:30+00:00
layout: post
link: https://blog.playcanvas.com/whats-new-multi-selection-gizmos-and-faster-lighting/
slug: whats-new-multi-selection-gizmos-and-faster-lighting
title: "What's New: Multi-selection, Gizmos and Faster Lighting"
wordpress_id: 2193
categories:
  - News
---

Greetings, PlayCanvians! It's time to update you on all the cool things we've deployed recently. Let's get started!

### Multi-selection: Phase II

You may remember that, last month, we began work on implementing multi-selection in the Editor. First, we delivered asset multi-selection. And today, we're happy to announce we deployed entity multi-selection. So now, you can CTRL+click multiple entities either in the Hierarchy panel or in the 3D view. This selection can then be manipulated, either via the gizmos or in the Inspector. Don't believe me? Feast your eyes on this:

[![multiselection](https://blog.playcanvas.com/wp-content/uploads/2015/06/multiselection.gif)](https://blog.playcanvas.com/wp-content/uploads/2015/06/multiselection.gif)

(Ed: Can somebody get Will to stop using Doom3 characters in his screenshots??)

### New Gizmos

On the subject of gizmos, you may notice they look marginally different. In fact, they've been completely rewritten from scratch. You use the gizmos constantly when building scenes in PlayCanvas, so they need to be absolutely rock solid and a joy to use. We think we've nailed it. Give them a try and let us know what you think.

### Faster Lighting

By now, you'll be familiar with PlayCanvas' physically based renderer. Objects in a scene are lit based on cube maps that define environmental lighting on a per-pixel basis (this is Image Based Lighting). We've spent a few weeks speeding this up to make it absolutely sing on lower-end mobile devices. If you want to track our work on the engine, you need to be hitting the Watch button on our [GitHub repo](https://github.com/playcanvas/engine).

### More Feedback Please

We hope you're all enjoying the new Editor. The response has been phenomenal so far. But keep that feedback coming. Head over to [the forum to join the conversation](https://forum.playcanvas.com/t/playcanvas-editor-feedback/616). Your opinion matters!

That's all for now, folks. ❤️

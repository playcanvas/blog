---
author: will
comments: true
date: 2016-11-11 19:23:32+00:00
layout: post
link: https://blog.playcanvas.com/refinements-aplenty-for-our-webgl-editor/
slug: refinements-aplenty-for-our-webgl-editor
title: Refinements aplenty for our WebGL Editor
wordpress_id: 2449
categories:
  - News
---

You probably saw this week's [big announcement about our seamless integration with WebVR](https://blog.playcanvas.com/webvr-support-in-playcanvas/). But while WebVR is getting a lot of attention, we still care about the small details that can make you even more productive. We've spent the week adding some simple yet useful tweaks to the Editor.

##### Previous Selection Button

We've added a button to the top right of the Inspector panel that allows you to step back through the selection history. There's also a tooltip that shows clearly what the previous selection was. So if you've selected a model, then a material, and then a texture, you can now bubble back up to the model quickly and easily.

[![selection-back](/assets/media/selection-back.gif)](/assets/media/selection-back.gif)

##### Updated Physics Engine

We have updated PlayCanvas' build of Ammo.js to the very latest version. This update benefits from 2 years of Emscripten improvements and exposes much more of the Bullet API. So if you are feeling adventurous, you can delve into the parts of Ammo that PlayCanvas does not expose and try some more advanced physics effects. For example, soft body physics. Or maybe utilize constraints for things like ragdolls, as shown below:

[video width="1280" height="720" mp4="/assets/media/ragdoll.mp4"][/video]

What to check out the project above? It's [here](https://playcanvas.com/project/431888/overview/ragdoll).

##### Miscellaneous Improvements

- You can search for an asset by ID in the Assets panel
- Edit boxes in the Inspector panel now lose focus on hitting ENTER
- Read-only collaborators can now download assets from projects
- CTRL-A now correctly 'selects all' in the Assets panel
- A material's 'reflectivity' property can now exceed 1
- F2 (or 'n') now renames a selected asset or entity
- Page Up/Down move the Editor camera up and down

We hope you like these little tweaks. We do love to make your lives easier!

---
author: will
comments: false
date: 2023-06-26 12:00:00+00:00
layout: post
link: https://blog.playcanvas.com/gltf-viewer-adds-webgpu-support/
slug: gltf-viewer-adds-webgpu-support
title: glTF Viewer 4.0 Adds WebGPU Support
categories:
  - Announcement
  - News
tags:
  - ar
  - gltf
  - viewer
  - webgpu
  - webxr
---

We're thrilled to announce the launch of the [open source](https://github.com/playcanvas/model-viewer) **glTF Viewer 4.0**, an update that supercharges your 3D model viewing experience with powerful features and support for the latest web technologies!

[![glTF Viewer 4.0](/assets/media/gltf-viewer-4.png)](/assets/media/gltf-viewer-4.png)

_["Cyber Samurai"](https://skfb.ly/ooZKG) by KhoaMinh is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)._

[**TRY IT NOW**](https://playcanvas.com/viewer?load=https://s3.eu-west-1.amazonaws.com/static.playcanvas.com/models/IridescentDishWithOlives.glb&default&skybox.value=Abandoned%20Tank%20Farm&skybox.background=Projective%20Dome&debug.grid=false&shadowCatcher.enabled=true&default)

This new release is chock-full with enhancements aimed at providing more realistic, insightful, and versatile viewing options for your glTF files. Let's dive into the headline features of glTF Viewer 4.0.

#### New WebGPU Renderer

![WebGPU Logo](/assets/media/webgpu-logo.svg)

Topping the list of today's updates is support for WebGPU! WebGPU heralds a new era in graphics and compute capabilities, offering enhanced performance and efficiency. Users can now select WebGPU as their default renderer, and don't worry if your platform doesn't support it yet - the viewer gracefully falls back to WebGL 2, and subsequently WebGL 1, depending on API availability, ensuring a smooth, uncompromised viewing experience for all users. Note that WebGPU support is considered beta for the moment and you'll need to proactively enable it and refresh the viewer to check it out:

[![Enable WebGPU for glTF Viewer](/assets/media/gltf-viewer-webgpu-toggle.gif)](/assets/media/gltf-viewer-webgpu-toggle.gif)

#### Enhanced WebXR AR Mode

{% include youtube.html id="7tV15e4ovzc" %}

Take your 3D models into the real world with our revamped WebXR Augmented Reality (AR) mode! Available currently on Android devices, this enhanced AR mode lets you view any model in your actual environment, complete with intuitive new controls that allow you to accurately position and rotate objects in the real world. Engage with your 3D models like never before, observing them from every conceivable angle, in every possible setting. Let's hope Apple decides to roll out WebXR support on iOS soon! 🙏

#### Frame Selected Node

{% include youtube.html id="lCzTRlO2lmo" %}

Navigating large scenes can be a pain - Viewer 4.0 addresses this by allowing you to select a node in the scene either via the hierarchy panel on the left or by clicking on a mesh in the 3D view. You can then press 'F' on the keyboard to frame that node and recenter the orbit camera on that node's position.

#### Better Immersion with Projective Sky Dome

{% include youtube.html id="Upbh-B080MU" %}

_["130"](https://skfb.ly/6R9Ow) by mononofu is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)._

Experience realistic photographic skies with our new projective sky dome! While previous versions allowed the selection and display of a skybox with an infinite projection, 4.0 introduces a dome-shaped skybox projection that incorporates a flat ground plane. This warps the skybox texture to have a more believable appearance, delivering a more authentic and immersive perspective, melding your 3D models with strikingly realistic backdrops.

#### Debug and Inspect with Render Mode

[![glTF Viewer Render Mode](/assets/media/gltf-viewer-render-mode.gif)](/assets/media/gltf-viewer-render-mode.gif)

Ensuring that developers can seamlessly troubleshoot and inspect glTF files, the new render mode allows you to select and display individual inputs/outputs of the render pipelines, including albedo, emissive, normals, gloss, AO, and more. This new level of insight is invaluable for debugging, making even easier to work with your glTF data.

#### Enhanced Realism with VSM Shadows

The addition of Variance Shadow Mapping casts your 3D scenes in a new light, literally! Shadows aren't merely aesthetic; they provide context and depth, especially in AR mode, assisting to ground your object naturally within its real-world environment. Explore scenes with a newfound depth and realism that draws viewers into the experience, both in standard and AR viewing modes.

### Join Our Open Source Community

We're not just excited to share these innovations with you; we're eager to hear your thoughts and welcome your contributions! If there's a feature you're longing for, please don't hesitate to [submit your requests](https://github.com/playcanvas/model-viewer/issues).

Better yet, become an active contributor to our codebase! Our open-source community thrives on collaboration and fresh perspectives. So, dive right in, [explore the code](https://github.com/playcanvas/model-viewer), and let's shape the future of 3D model viewing together! Your expertise and insights could help shape the next release.

[**GO TO GITHUB NOW**](https://github.com/playcanvas/model-viewer)

### Conclusion

With glTF Viewer 4.0, we're redefining the standards of 3D model viewing. From WebGPU-powered rendering to WebXR-powered AR, this update is designed to inspire, assist, and elevate your work with glTF data.

So stay creative, friends, and we'll see you on the [forums](https://forum.playcanvas.com/)! 👋

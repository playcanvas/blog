---
authors: will
slug: create-3d-gaussian-splat-apps-with-the-playcanvas-editor
title: "Create 3D Gaussian Splat Apps with the PlayCanvas Editor"
tags:
  - gaussian-splats
  - supersplat
---

import ReactPlayer from 'react-player'

<div className="iframe-container-taller">
    <iframe loading="lazy" src="https://playcanv.as/e/p/cLkf99ZV/" title="3DGS Statues" webkitallowfullscreen="true" mozallowfullscreen="true" allow="autoplay" allowfullscreen="true" allowvr="" scrolling="no" frameborder="0" />
</div>
_[CLICK HERE](https://playcanv.as/e/p/cLkf99ZV/) to open in a new tab. Credits: Splats scanned at the [V&A Museum](https://www.vam.ac.uk/). HDRI from [Poly Haven](https://polyhaven.com/a/sepulchral_chapel_rotunda)._

We have big news for the 3D Gaussian Splat community - the PlayCanvas Editor now has fully integrated support for splats!
Learn how to quickly build stunning, interactive 3DGS applications today.

<!-- truncate -->

:::note[What you need]

🤳 A smartphone  
💻 A computer with a web browser  
⏱️ A small amount of time

:::

The application above shows several splats assembled in a single application, with animation and post effects spicing up the visuals. Let's check out how it was built.

### Step 1: Clean in SuperSplat 🧹

After [capturing the statues](https://developer.playcanvas.com/user-manual/graphics/gaussian-splatting/#creating-splats) to PLY format, our first stop is [SuperSplat](https://playcanvas.com/supersplat/editor?load=https://raw.githubusercontent.com/willeastcott/assets/main/statues/narcissus.compressed.ply), the open source tool for editing and optimizing 3D Gaussian Splats. Here, in a little over a minute, we can isolate the statue from the background and align it with the origin:

<ReactPlayer width="100%" height="auto" muted={true} controls src="/img/statue-supersplat.mp4" />

<br />
Once we are done, we can download the splat using our [compressed PLY format](https://blog.playcanvas.com/compressing-gaussian-splats). In this case, our downloaded PLY is **only 1.56MB**!

### Step 2: Import into the Editor 🚧

Now that we have a clean, compressed PLY, we simply need to drop it into the Editor's Asset Panel. And from there, drag it into the viewport to add it to the scene. Let's do that (along with a cube map for a photographic backdrop):

<ReactPlayer width="100%" height="auto" muted={true} controls src="/img/statue-editor.mp4" />

<br />
The PlayCanvas Editor is a powerful visual environment for building and publishing 3D scenes. You can:

* Grab useful scripts (and other assets) from the Asset Store. Here, we import an Orbit Camera script.
* Create beautiful user interfaces, using either HTML or PlayCanvas' built-in UI system.
* Add sound, physics, VR/AR support and much, much more.

### Step 3: Add Animation and Post Effects ✨

What really makes the demo pop is the transitions that fade the statues in and out.

<ReactPlayer width="100%" height="auto" playing={true} muted={true} loop={true} controls src="/img/statue-custom-shaders.mp4" />

<br />
With the Editor, you can customize the shader code that renders your splats to apply stunning animation effects. For the transition between statues, individual splats are transformed and recolored over time, while a full-screen bloom effect is ramped up and down.

### Resources

Today's release makes working with 3D Gaussian Splats both easy and fun! We've shown you how to build a virtual gallery or museum but the possibilities are endless. With 3D Gaussian Splats in the PlayCanvas Editor, you can target many verticals: product visualization (furniture, clothing, consumer electronics), automotive, education, travel and so much more.

To get started, here is an useful list of resources:

* [Statue Project](https://playcanvas.com/project/1224723/overview/3d-gaussian-splat-statues) - feel free to fork it, explore and experiment.
* [3D Gaussian Splatting](https://developer.playcanvas.com/user-manual/graphics/gaussian-splatting/) User Guide
* [SuperSplat](https://playcanvas.com/supersplat/editor) (don't forget to [install the PWA](https://blog.playcanvas.com/a-faster-supersplat-with-pwa-support#pwa-support))

### Go Forth and Create

We hope you love today's update as much as we do! ❤️

But let us know what you think by heading over to the [forum](https://forum.playcanvas.com) or [ping us on X](https://x.com/playcanvas)!

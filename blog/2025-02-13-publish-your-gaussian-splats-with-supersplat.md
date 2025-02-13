---
authors: will
slug: publish-your-gaussian-splats-with-supersplat
title: "Publish Your Gaussian Splats with SuperSplat 2.0"
tags:
  - gaussian-splats
  - supersplat
---

import ReactPlayer from 'react-player'

Today, we are announcing a major update of SuperSplat, the open source platform for editing and publishing 3D Gaussian Splats.

<div className="iframe-container">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/eLi_HVoHjrk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 🏠 We've Moved

SuperSplat can now be found on a shiny new domain! From now on, point your browser at:

<div style={{ textAlign: 'center' }}>
  <a href="https://superspl.at" style={{ fontSize: '2rem', fontWeight: 'bold', textDecoration: 'none' }}>
    https://superspl.at
  </a>
</div>

The SuperSplat Editor that you know and love can now be accessed at [https://superspl.at/editor](https://superspl.at/editor). Much easier to remember, don't you think?

### 🌐 Publish your Splats to the Web

Recently, we added the ability to export an HTML viewer of your splat from the SuperSplat Editor. Built on the powerful [PlayCanvas Engine](https://github.com/playcanvas/engine) and our open source [Compressed PLY format](/compressing-gaussian-splats#compressed-ply-format), it offers fast load times and high-performance rendering. However, _hosting_ the HTML viewer was still your responsibility. And let's be honest, not everybody has the time or expertise to host their own website. So we've added a new feature to SuperSplat to make it easier to share your splats with others.

<ReactPlayer muted={true} controls url="/img/supersplat2-publish-1080p-social-60fps.mp4" />

<br />

It's as easy as 1-2-3:

1. Log in with your PlayCanvas account (or sign up if you don't have one).
2. Select `File` > `Publish` when you've finished crafting your splat.
3. Fill out the publishing options form and hit `Publish`.

That's it! Your splat will be published to the web and you'll be given a URL to share with others.

:::tip

By default, your splat will be listed on the SuperSplat website. However, you can also choose to make it unlisted. This means it won't appear in the main gallery, but you can still access it via the URL.

:::

### 🎥 Create Camera Flythroughs

Sure, it's great to be able to share your splats with others, but for that extra 'wow' factor, why not add a camera flythrough? SuperSplat Editor 2.0 introduces the Timeline that makes it a breeze to author great looking camera animations. Simply select a frame in the timeline, position the camera, and set a keyframe. Do this for as many frames as you want and you've got a camera flythrough!

<ReactPlayer muted={true} controls url="/img/supersplat2-camera-animation-720p-social-60fps.mp4" />

### 📄 Load and Save your SuperSplat Projects

With the ability to create camera animations, your splat projects are becoming more and more complex. To support this, we've added a new project file format so you can save your work between sessions. The extension of SuperSplat's new project file format is `.ssproj`.

:::info

The `.ssproj` file format is actually just a ZIP file containing project data in JSON format, along with a set of PLY files storing the Gaussian Splat data.

:::

The introduction of the new project file format has also prompted us to reorganize the `File` menu. `Open`, `Save` and `Save As` now only operate on `.ssproj` files. To import and export other file formats into your project (such as `.ply` or `.splat`) you can use the `Import` and `Export` options in the `File` menu.

![File Menu](/img/supersplat-file-menu.png)

### 👥 Explore Splats from the Community

With the ability to publish splats to the web, [superspl.at](https://superspl.at) has become a great place to explore the work of the Gaussian Splat community. Browse or search digitized reality from creators around the world.

![Community Scroll](/img/supersplat2-community-scroll.gif)

#### View Splats in Immersive AR and VR

One of the coolest things about the PlayCanvas-powered web viewer is that it's fully integrated with WebXR, the browser-based standard for immersive experiences. Simply tap the viewer's AR button and you can spawn photorealistic 3D models directly into your environment.

<ReactPlayer muted={true} controls url="/img/supersplat2-ar-quest3.mp4" />

<br />

Or dive straight into a splat in fully immersive VR.

<ReactPlayer muted={true} controls url="/img/supersplat2-vr-avp.mp4" />

<br />

:::info

🤳 AR mode has been tested on Meta Quest 2 and 3, and Android-based smartphones.  
🥽 VR mode has been tested on Meta Quest 2 and 3, and Apple Vision Pro.

:::

### 👨‍💻 Our Open Source Mission

We are proud to bring SuperSplat to you as an MIT-licensed open source project. The 3D Gaussian Splat community has come a long way in the last 18 months and much of that progress is thanks to the OSS community. So it's important to us that we play our part. But we're stronger together, so please do consider joining our open source effort. Submit issue reports, open pull requests...or just help us out by starring [our repo](https://github.com/playcanvas/supersplat)! ⭐

### 👂 Your Feedback Matters

We hope you love today's update! We put our heart and soul into this release and we're excited to share it with you.

The SuperSplat community has grown a lot over the last year and we want to get your feedback. What other features would you like to see added to the platform? Let us know on the [Discord](https://discord.com/invite/T3pnhRTTAY) or [ping us on X](https://x.com/playcanvas)!

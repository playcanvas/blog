---
authors: will
slug: render-your-gaussian-splats-to-video-with-supersplat
title: "Render Your Gaussian Splats to Video with SuperSplat 2.2"
tags:
  - gaussian-splats
  - supersplat
---

import ReactPlayer from 'react-player'

Today, we are announcing the release of SuperSplat 2.2. 🚀

<div className="iframe-container">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/wVBwVQ55Pe8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

SuperSplat is your [open source](https://github.com/playcanvas/supersplat/) platform for editing and publishing 3D Gaussian Splats. This update introduces video rendering for your splats, alongside numerous other improvements. Let's dive in!

<!-- truncate -->

### 🎞️ Video Rendering

The [SuperSplat Editor](https://superspl.at/editor) is a powerful application for cleaning up, optimizing and publishing your 3DGS scenes. With today's update, you can now render high-quality videos directly from your camera animations set up on the Timeline. The new functionality can be accessed via the new `Render` menu in the menu bar.

Choose your resolution, set your bitrate, and even render vertical videos optimized for mobile viewing. Video encoding is impressively fast — try it yourself and experience the speed! ⚡

### 👥 Social Splats

The [SuperSplat site](https://superspl.at/) launched exactly 1 month ago. Since then, we have added a raft of new features that makes gives you a much more social experience.

#### 👥 User Pages

You can now showcase your splats on your own user page! When you find a splat that inspires you, click on the creator link and browse their work. Lots of creators have already inspired us! For example, [tipatat](https://superspl.at/user?id=tipatat) has published a smorgasbord of culinary delicacies:

![SuperSplat User Tipatat](/img/supersplat-user-tipatat.webp)

Here are some other awesome user pages for you to visit:

* [Studio Duckbill](https://superspl.at/user?id=studioduckbill) - beautiful locations in Japan with great camera animations.
* [Epigraph](https://superspl.at/user?id=epigraph) - realistically rendered splats of products.
* [Simon Bethke](https://superspl.at/user?id=simonbethke) - talented 3DGS enthusiast showcasing various objects and locations in Germany.

[Go explore](https://superspl.at/) and see what else you can discover! 🔍

#### 💬 Comments

You can now leave your thoughts or ask questions under any splat!

<ReactPlayer playing={true} muted={true} loop={true} controls url="/img/supersplat-comments.mp4" />

#### 🔄 Social Sharing

You can easily share any splat to your favorite social channels: X, LinkedIn, Slack, email...you name it!

<ReactPlayer playing={true} muted={true} loop={true} controls url="/img/supersplat-sharing.mp4" />

### 🔗 Splat Embeds

You can now embed any splat on SuperSplat on your own website! Here's an gorgeous example from world-class 3DGS creator [Christoph Schindelar](https://superspl.at/user?id=schindelar3d):

<div className="iframe-container">
    <iframe id="viewer" width="800" height="500" allow="fullscreen; xr-spatial-tracking" src="https://superspl.at/s?id=ed2efe80"></iframe>
</div>

To create an embed:

* Hit the `Embed` button
* Copy the HTML code
* Insert it at the appropriate place on your own site

<ReactPlayer playing={true} muted={true} loop={true} controls url="/img/supersplat-embed.mp4" />

### 📺 Viewer Enhancements

The SuperSplat Viewer embedded above has been heavily enhanced in the month since launch. Here's a quick overview of what's new:

* **Progress Bar**: Easily scrub through your scene’s animations.
* **Camera Settings**: Quickly switch between Orbit (ideal for objects) and Fly (ideal for locations) camera modes via the cog icon.
* **Redesigned Info Panel**: Comprehensive usage instructions for both desktop and mobile.

### 👨‍💻 Our Open Source Mission

We proudly offer SuperSplat as an MIT-licensed open source project. The 3D Gaussian Splat community has made impressive strides over the past 18 months, largely due to open collaboration. Join us in shaping the future by submitting issues, creating pull requests, or simply starring [our GitHub repo](https://github.com/playcanvas/supersplat)! ⭐

### 👂 Your Feedback Matters

We hope you love this update as much as we enjoyed creating it! The SuperSplat community has grown tremendously, and your feedback is invaluable. What features would you love to see next? Share your thoughts on our [Discord](https://discord.com/invite/T3pnhRTTAY) or [ping us on X](https://x.com/playcanvas)!

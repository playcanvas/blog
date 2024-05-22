---
authors: will
slug: a-faster-supersplat-with-pwa-support
title: "A Faster SuperSplat with PWA Support"
tags:
  - gaussian-splats
  - supersplat
---

import ReactPlayer from 'react-player'

Today, we are announcing the v0.17.0 release of [SuperSplat](https://playcanvas.com/supersplat/editor), the open source tool for editing and optimizing 3D Gaussian Splats.

![SuperSplat PWA](/img/supersplat-pwa-sculpture.png)

[Version 0.17.1](https://github.com/playcanvas/supersplat/releases/tag/v1.17.1) focuses on two key areas: performance and PWA support.

## Performance Improvements

SuperSplat is now *over 2x faster on the GPU*! 🏃

![SuperSplat PWA](/img/engine-splat-performance.webp)

This is thanks to the [v1.71.0 release](https://github.com/playcanvas/engine/releases/tag/v1.71.0) of the PlayCanvas Engine, which includes a dramatic overhaul of how splats are processed by the GPU. For the technical details, take a look at [this pull request](https://github.com/playcanvas/engine/pull/6357).

The result is that SuperSplat can now throw around millions of splats and still maintain a silky smooth frame rate. Try it for yourself!

## PWA Support

A Progressive Web App (PWA) is a web application that provides a native app-like experience, including the ability to install it on a user's home screen.

From today, SuperSplat is shipping with PWA support! 🎉

<ReactPlayer playing={true} muted={true} loop={true} controls url="/img/supersplat-pwa-install.mp4" />

<br />
To install SuperSplat as a PWA:

1. Visit [https://playcanvas.com/supersplat/editor](https://playcanvas.com/supersplat/editor).
2. Hit the `Install SuperSplat` button in the address bar.

:::tip

For your convenience, pin SuperSplat to the Taskbar (Windows) or add it do the Dock (macOS).

:::

### PLY File Association

With SuperSplat installed as a PWA, your operating system can now open launch PLY files directly into the tool. Simply right-click on a PLY file and select SuperSplat to open it.

<ReactPlayer playing={true} muted={true} loop={true} controls url="/img/supersplat-pwa-file-association.mp4" />

<br />
You can also set SuperSplat as the default tool to open your PLYs. Then, you can simply double-click a PLY file to open it instantly in SuperSplat!

## Your Feedback Matters

We hope you love today's update!

The SuperSplat community has grown a lot in recent weeks and we want to get your feedback. What other features would you like the PWA to get? Are you still experiencing any performance problems? What is still missing from SuperSplat? Let us know by heading over to the [forum](https://forum.playcanvas.com) or [ping us on X](https://x.com/playcanvas)!

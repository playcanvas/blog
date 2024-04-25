---
authors: will
comments: true
date: 2014-12-10 16:30:50+00:00
layout: post
link: https://blog.playcanvas.com/physically-based-rendering-comes-to-webgl/
slug: physically-based-rendering-comes-to-webgl
title: Physically Based Rendering comes to WebGL
categories:
  - News
tags:
  - engine
---

<div className="iframe-container">
    <iframe loading="lazy" src="https://playcanv.as/p/SA7hVBLt/" title="360 lookaround camera" webkitallowfullscreen="true" mozallowfullscreen="true" allow="autoplay" allowfullscreen="true" allowvr="" scrolling="no" frameborder="0" />
</div>

If you're working with real-time 3D, chances are that you want your scenes to look physically accurate. For many years, graphics engines have relied on a non-physical approximations without respect to energy conservation and had problems with properly decoupling lighting from the actual material properties. In recent times, huge advances have been made to formulate more accurate shading approaches as well as provide sensible material inputs, which could approximate many types of surfaces without using hacks and tweaks for each scene and lighting conditions. This is a collection of techniques and art-producing approaches often referred to as Physically Based Rendering, or PBR.

### PBR in PlayCanvas

Up until now PBR has only been available in the domain of AAA console and PC gaming. Games like Watch Dogs, Assassin's Creed: Unity and Call of Duty: Advanced Warfare all feature PBR engines. **Today, we're excited to announce that PBR is coming to PlayCanvas.** Both web developers and game creators can now look forward to a high-level online toolset to build stunningly beautiful 3D scenes using WebGL.

![shadingComparison2](/img/shadingComparison2.jpg)

Over the past 3 years since PlayCanvas started, we've seen WebGL adoption skyrocket. It's now supported in every major browser, both on mobile and the desktop. Current [statistics](https://caniuse.com/webgl) show that 82.7% of web users have the ability to run WebGL content, and this number continues to rise. The PlayCanvas 'Star-Lord Demo' shows that WebGL is perfectly capable of implementing PBR and other high-end graphical features.

### Coming Soon

Right now, it is possible for all PlayCanvas users to create this kind of content, but some of the steps need to performed in code. Our next goal is to integrate these steps directly into the toolset to allow you to build and iterate even faster.

The open source PlayCanvas engine has taken a quantum leap forwards and we couldn't be more excited to make this technology available to you. Look for more announcements about our PBR support in the coming weeks. This is just the beginning!

We'd like to give a special shout-out to [Joachim Coppens](http://joachimcoppens.com/) who built the Star-Lord helmet fan art, and let us use it for this demo.

[![button](/img/button.png)](https://login.playcanvas.com/signup)

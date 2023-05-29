---
author: dave
comments: true
date: 2016-04-07 10:44:02+00:00
layout: post
link: https://blog.playcanvas.com/easy-cardboard-vr-in-webgl/
slug: easy-cardboard-vr-in-webgl
title: Easy Cardboard VR in WebGL
wordpress_id: 2334
categories:
  - Features
---

Today we've launched a new [library](https://github.com/playcanvas/webvr) and [developer tutorial](https://developer.playcanvas.com/en/tutorials/cardboard-vr/) and [sample project](https://playcanvas.com/project/389453/overview/tutorial-cardboard-vr) showing you how to implement your own Cardboard VR web applications using PlayCanvas.

![cardboard-vr](/assets/media/cardboard-vr.jpg)

Google's Cardboard VR is an excellent low cost device for experiencing virtual reality via your phone and a simple head mounted display. At PlayCanvas we immediately saw the benefit of using WebGL to display 3D VR experiences right in your browser. With WebGL VR you can distribute VR content quickly and easily to every user with a mobile web browser. With nothing to install there is no barrier to entry.

The PlayCanvas WebVR plugin makes it simple to add support for VR to your application. Simply add a couple of javascript files to your PlayCanvas project and add the VR Camera script to your camera entity. That's all it takes to add VR support to your project

Our [demonstration project](https://playcanvas.com/project/389453/overview/tutorial-cardboard-vr) shows you a example of a simple interactive VR scene that you can use to learn.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe frameborder="0" style="position: absolute; top:0; left: 0; width: 100%; height: 100%;" src="https://playcanv.as/p/ktssxBWc/" webkitallowfullscreen='true' mozallowfullscreen='true' allowfullscreen='true'></iframe>
</div>

On a mobile device just tap the view above to enable the Cardboard VR mode. Our [tutorial](https://developer.playcanvas.com/en/tutorials/cardboard-vr/) will walk you through how to add VR to your projects.

This is the start of VR support in PlayCanvas and we'll be working to integrate Cardboard VR and WebVR closer into the editor as they get more popular.

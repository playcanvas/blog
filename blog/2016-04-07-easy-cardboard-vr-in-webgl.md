---
authors: dave
slug: easy-cardboard-vr-in-webgl
title: Easy Cardboard VR in WebGL
tags:
  - webvr
  - vr
---

Today we've launched a new [library](https://github.com/playcanvas/webvr) and [developer tutorial](https://developer.playcanvas.com/tutorials/cardboard-vr/) and [sample project](https://playcanvas.com/project/389453/overview/tutorial-cardboard-vr) showing you how to implement your own Cardboard VR web applications using PlayCanvas.

![cardboard-vr](/img/cardboard-vr.jpg)

<!-- truncate -->

Google's Cardboard VR is an excellent low cost device for experiencing virtual reality via your phone and a simple head mounted display. At PlayCanvas we immediately saw the benefit of using WebGL to display 3D VR experiences right in your browser. With WebGL VR you can distribute VR content quickly and easily to every user with a mobile web browser. With nothing to install there is no barrier to entry.

The PlayCanvas WebVR plugin makes it simple to add support for VR to your application. Simply add a couple of JavaScript files to your PlayCanvas project and add the VR Camera script to your camera entity. That's all it takes to add VR support to your project

Our [demonstration project](https://playcanvas.com/project/389453/overview/tutorial-cardboard-vr) shows you a example of a simple interactive VR scene that you can use to learn.

<div className="iframe-container">
    <iframe loading="lazy" src="https://playcanv.as/p/ktssxBWc/" title="360 lookaround camera" webkitallowfullscreen="true" mozallowfullscreen="true" allow="autoplay" allowfullscreen="true" allowvr="" scrolling="no" frameborder="0" />
</div>

On a mobile device just tap the view above to enable the Cardboard VR mode. Our [tutorial](https://developer.playcanvas.com/tutorials/cardboard-vr/) will walk you through how to add VR to your projects.

This is the start of VR support in PlayCanvas and we'll be working to integrate Cardboard VR and WebVR closer into the editor as they get more popular.

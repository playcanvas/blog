---
author: will
comments: true
date: 2016-08-04 10:57:24+00:00
layout: post
link: https://blog.playcanvas.com/playcanvas-versus-unity-webgl/
slug: playcanvas-versus-unity-webgl
title: PlayCanvas versus Unity WebGL
wordpress_id: 2393
categories:
  - News
---

A question we get asked a lot is "How does PlayCanvas compare to Unity's WebGL export?". So let's examine this in a blog post.

<!-- more -->

But first, let me quickly introduce Unity and PlayCanvas to the uninitiated. Unity is a game engine provided as a native, desktop application for Windows, Mac and Linux. PlayCanvas is an HTML5/WebGL game engine that is provided as a web application that runs in any browser on any operating system.

For the purpose of this article, we're keeping things simple. We've created the 'Hello World' of apps in both Unity 5.3.2 and PlayCanvas: a spinning, textured cube:

[iframe src="https://playcanv.as/e/b/5bLMNnvC/" allowfullscreen="true"]

The application above is the PlayCanvas app. I'm not embedding the Unity app since it can crash the page (if you're feeling brave, click [here](http://unity-comparison.playcanvas.com/perf1e/unity/index.html) to run it in a new tab).

We decided to look at 3 key metrics: download size, load time and frame rate.

### Download Size

To check the download size of each app, we disabled the cache in Chrome Dev Tools and recorded the total transfer:

<table >
<tbody >
<tr >
Unity
PlayCanvas
</tr>
<tr >

<td >4.72MB
</td>

<td >0.22MB
</td>
</tr>
</tbody>
</table>
**The Unity app is over 21 times larger than the PlayCanvas app**. How is this possible? The PlayCanvas engine is a miniscule 147KB when GZIPped meaning the code and assets for the app account for the remaining 73KB. The engine is so small because it is hand-crafted in JavaScript, relying on as much functionality as possible from the browser itself.

Unity, on the other hand, relies on Emscripten to export to WebGL. This tool auto-converts C# code to C++, which in turn is compiled to LLVM before finally being turned into JavaScript. A side effect of this process is the generation of huge amounts of code, which bloats the exported application, overwhelms modern JavaScript engines and often causes the browser to run out of memory.

### Load Time

We ran both apps on 12 different devices, from low end to high end. These were the recorded load times on a 50Mb/s connection to the net:

<table >
<tbody >
<tr >
Device
Browser
Unity (s)
PlayCanvas (s)
</tr>
<tr >

<td >iPhone 4S
</td>

<td >Safari
</td>

<td >Crash
</td>

<td >2
</td>
</tr>
<tr >

<td >iPhone 5S
</td>

<td >Safari
</td>

<td >18
</td>

<td >1
</td>
</tr>
<tr >

<td >iPhone 6
</td>

<td >Safari
</td>

<td >17
</td>

<td >1
</td>
</tr>
<tr >

<td >iPad Mini 2
</td>

<td >Safari
</td>

<td >21
</td>

<td >1
</td>
</tr>
<tr >

<td >Samsung Galaxy Tab S2
</td>

<td >Chrome 51
</td>

<td >19
</td>

<td >1
</td>
</tr>
<tr >

<td >Samsung Galaxy Note 10.1 2014
</td>

<td >Chrome 51
</td>

<td >28
</td>

<td >1
</td>
</tr>
<tr >

<td >Samsung Galaxy S6 Edge
</td>

<td >Chrome 51
</td>

<td >28
</td>

<td >1
</td>
</tr>
<tr >

<td >Samsung Galaxy Note 4
</td>

<td >Chrome 51
</td>

<td >28
</td>

<td >1
</td>
</tr>
<tr >

<td >LG Nexus 4
</td>

<td >Chrome 51
</td>

<td >44
</td>

<td >2
</td>
</tr>
<tr >

<td >Leapfrog Epic
</td>

<td >Chrome 51
</td>

<td >43
</td>

<td >1
</td>
</tr>
<tr >

<td >Blackberry Z10
</td>

<td >Default Browser
</td>

<td >Crash
</td>

<td >1
</td>
</tr>
<tr >

<td >PC (Core i7 + GeForce GTX 880M)
</td>

<td >Chrome 51
</td>

<td >13
</td>

<td >1
</td>
</tr>
</tbody>
</table>
Key things to notice:

- **The PlayCanvas app's load times are up to 43 times faster than the Unity app.**
- The Unity app fails to even load on lower end devices. The sheer amount of JavaScript causes the browser on those devices to run out of memory loading the page.
- Load times for Unity are up to twice as slow in Chrome as Safari. This could be down to Chrome spending more time preparing the app's huge JavaScript codebase for execution.

### Frame Rate

Here are the frame rates recorded for the same set of devices:

<table >
<tbody >
<tr >
Device
Browser
Unity (fps)
PlayCanvas (fps)
</tr>
<tr >

<td >iPhone 4S
</td>

<td >Safari
</td>

<td >Crash
</td>

<td >58
</td>
</tr>
<tr >

<td >iPhone 5S
</td>

<td >Safari
</td>

<td >21
</td>

<td >60
</td>
</tr>
<tr >

<td >iPhone 6
</td>

<td >Safari
</td>

<td >28
</td>

<td >60
</td>
</tr>
<tr >

<td >iPad Mini 2
</td>

<td >Safari
</td>

<td >16
</td>

<td >60
</td>
</tr>
<tr >

<td >Samsung Galaxy Tab S2
</td>

<td >Chrome 51
</td>

<td >17-55
</td>

<td >60
</td>
</tr>
<tr >

<td >Samsung Galaxy Note 10.1 2014
</td>

<td >Chrome 51
</td>

<td >15-50
</td>

<td >60
</td>
</tr>
<tr >

<td >Samsung Galaxy S6 Edge
</td>

<td >Chrome 51
</td>

<td >15-50
</td>

<td >60
</td>
</tr>
<tr >

<td >Samsung Galaxy Note 4
</td>

<td >Chrome 51
</td>

<td >15-57
</td>

<td >60
</td>
</tr>
<tr >

<td >LG Nexus 4
</td>

<td >Chrome 51
</td>

<td >15-50
</td>

<td >60
</td>
</tr>
<tr >

<td >Leapfrog Epic
</td>

<td >Chrome 51
</td>

<td >16-55
</td>

<td >60
</td>
</tr>
<tr >

<td >Blackberry Z10
</td>

<td >Default Browser
</td>

<td >Crash
</td>

<td >60
</td>
</tr>
<tr >

<td >PC (Core i7 + GeForce GTX 880M)
</td>

<td >Chrome 51
</td>

<td >57-60
</td>

<td >60
</td>
</tr>
</tbody>
</table>
Key things to notice:

- **PlayCanvas frame rates are up to 4 times greater than Unity.** In particular, Unity seems to perform poorly in Safari on iOS.
- Unity exhibits very unstable performance in Chrome for Android. Initially, the app's frame rate is in the mid to high teens for approximately 20 seconds before it starts to rise to a number in the 50s. At that point it, it regularly drops frames and never reaches a solid 60FPS.
- PlayCanvas easily locks to 60FPS across all devices except iPhone 4S where an occasional frame is dropped. Ideally, a much heavier stress test would be required to start taxing PlayCanvas.

### Conclusion

To summarise:

- **Unity WebGL apps are up to 21 times larger.**
- **PlayCanvas apps load up to 43 times faster.**
- **PlayCanvas app frame rates are up to 4 times higher.**

Even for the most basic of 3D apps, Unity struggles to achieve anything close to acceptable download size, load time and frame rate. It's important not to somehow blame browser vendors or HTML5/WebGL for these results. As PlayCanvas proves, you can achieve incredible performance using these web technologies _today_ as long as a sensible approach is taken when architecting an engine.

To learn how PlayCanvas built an engine so optimized for the browser, head over to [GitHub](https://github.com/playcanvas/engine) to explore the open sourced runtime. And if you want to start building with PlayCanvas today, sign up on [playcanvas.com](https://playcanvas.com).

**Update**
If you want to look at the original projects that built the two apps used in the article, [here](http://unity-comparison.playcanvas.com/perf1e/downloads/unity_webgl_perf_test.zip) is the Unity project, and [here](https://playcanvas.com/project/408739/overview/perf1) is the PlayCanvas project. After publishing this article, we noticed that the Unity project disables hardware anti-aliasing and uses bilinear filtering on the textures, whereas PlayCanvas enables AA and trilinear on the textures. So PlayCanvas is actually doing more work here.

---
authors: will
date: 2016-08-04 10:57:24+00:00
slug: playcanvas-versus-unity-webgl
title: PlayCanvas versus Unity WebGL
categories:
  - News
tags:
  - unity
  - performance
---

A question we get asked a lot is "How does PlayCanvas compare to Unity's WebGL export?". So let's examine this in a blog post.

<!-- more -->

But first, let me quickly introduce Unity and PlayCanvas to the uninitiated. Unity is a game engine provided as a native, desktop application for Windows, Mac and Linux. PlayCanvas is an HTML5/WebGL game engine that is provided as a web application that runs in any browser on any operating system.

For the purpose of this article, we're keeping things simple. We've created the 'Hello World' of apps in both Unity 5.3.2 and PlayCanvas: a spinning, textured cube:

<div className="iframe-container">
    <iframe loading="lazy" src="https://playcanv.as/b/5bLMNnvC/" title="360 lookaround camera" webkitallowfullscreen="true" mozallowfullscreen="true" allow="autoplay" allowfullscreen="true" allowvr="" scrolling="no" frameborder="0" />
</div>

The application above is the PlayCanvas app. I'm not embedding the Unity app since it can crash the page (if you're feeling brave, click [here](http://unity-comparison.playcanvas.com/perf1e/unity/index.html) to run it in a new tab).

We decided to look at 3 key metrics: download size, load time and frame rate.

### Download Size

To check the download size of each app, we disabled the cache in Chrome Dev Tools and recorded the total transfer:

| Unity  | PlayCanvas |
| ------ | ---------- |
| 4.72MB | 0.22MB     |

**The Unity app is over 21 times larger than the PlayCanvas app**. How is this possible? The PlayCanvas engine is a miniscule 147KB when GZIPped meaning the code and assets for the app account for the remaining 73KB. The engine is so small because it is hand-crafted in JavaScript, relying on as much functionality as possible from the browser itself.

Unity, on the other hand, relies on Emscripten to export to WebGL. This tool auto-converts C# code to C++, which in turn is compiled to LLVM before finally being turned into JavaScript. A side effect of this process is the generation of huge amounts of code, which bloats the exported application, overwhelms modern JavaScript engines and often causes the browser to run out of memory.

### Load Time

We ran both apps on 12 different devices, from low end to high end. These were the recorded load times on a 50Mb/s connection to the net:

| Device                          | Browser         | Unity (s) | PlayCanvas (s) |
| ------------------------------- | --------------- | --------- | -------------- |
| iPhone 4S                       | Safari          | Crash     | 2              |
| iPhone 5S                       | Safari          | 18        | 1              |
| iPhone 6                        | Safari          | 17        | 1              |
| iPad Mini 2                     | Safari          | 21        | 1              |
| Samsung Galaxy Tab S2           | Chrome 51       | 19        | 1              |
| Samsung Galaxy Note 10.1 2014   | Chrome 51       | 28        | 1              |
| Samsung Galaxy S6 Edge          | Chrome 51       | 28        | 1              |
| Samsung Galaxy Note 4           | Chrome 51       | 28        | 1              |
| LG Nexus 4                      | Chrome 51       | 44        | 2              |
| Leapfrog Epic                   | Chrome 51       | 43        | 1              |
| Blackberry Z10                  | Default Browser | Crash     | 1              |
| PC (Core i7 + GeForce GTX 880M) | Chrome 51       | 13        | 1              |

Key things to notice:

- **The PlayCanvas app's load times are up to 43 times faster than the Unity app.**
- The Unity app fails to even load on lower end devices. The sheer amount of JavaScript causes the browser on those devices to run out of memory loading the page.
- Load times for Unity are up to twice as slow in Chrome as Safari. This could be down to Chrome spending more time preparing the app's huge JavaScript codebase for execution.

### Frame Rate

Here are the frame rates recorded for the same set of devices:

| Device                          | Browser         | Unity (fps) | PlayCanvas (fps) |
| ------------------------------- | --------------- | ----------- | ---------------- |
| iPhone 4S                       | Safari          | Crash       | 58               |
| iPhone 5S                       | Safari          | 21          | 60               |
| iPhone 6                        | Safari          | 28          | 60               |
| iPad Mini 2                     | Safari          | 16          | 60               |
| Samsung Galaxy Tab S2           | Chrome 51       | 17-55       | 60               |
| Samsung Galaxy Note 10.1 2014   | Chrome 51       | 15-50       | 60               |
| Samsung Galaxy S6 Edge          | Chrome 51       | 15-50       | 60               |
| Samsung Galaxy Note 4           | Chrome 51       | 15-57       | 60               |
| LG Nexus 4                      | Chrome 51       | 15-50       | 60               |
| Leapfrog Epic                   | Chrome 51       | 16-55       | 60               |
| Blackberry Z10                  | Default Browser | Crash       | 60               |
| PC (Core i7 + GeForce GTX 880M) | Chrome 51       | 57-60       | 60               |

Key things to notice:

- **PlayCanvas frame rates are up to 4 times greater than Unity.** In particular, Unity seems to perform poorly in Safari on iOS.
- Unity exhibits very unstable performance in Chrome for Android. Initially, the app's frame rate is in the mid to high teens for approximately 20 seconds before it starts to rise to a number in the 50s. At that point it, it regularly drops frames and never reaches a solid 60FPS.
- PlayCanvas easily locks to 60FPS across all devices except iPhone 4S where an occasional frame is dropped. Ideally, a much heavier stress test would be required to start taxing PlayCanvas.

### Conclusion

To summarize:

- **Unity WebGL apps are up to 21 times larger.**
- **PlayCanvas apps load up to 43 times faster.**
- **PlayCanvas app frame rates are up to 4 times higher.**

Even for the most basic of 3D apps, Unity struggles to achieve anything close to acceptable download size, load time and frame rate. It's important not to somehow blame browser vendors or HTML5/WebGL for these results. As PlayCanvas proves, you can achieve incredible performance using these web technologies _today_ as long as a sensible approach is taken when architecting an engine.

To learn how PlayCanvas built an engine so optimized for the browser, head over to [GitHub](https://github.com/playcanvas/engine) to explore the open sourced runtime. And if you want to start building with PlayCanvas today, sign up on [playcanvas.com](https://playcanvas.com).

### **Update**

If you want to look at the original projects that built the two apps used in the article, [here](http://unity-comparison.playcanvas.com/perf1e/downloads/unity_webgl_perf_test.zip) is the Unity project, and [here](https://playcanvas.com/project/408739/overview/perf1) is the PlayCanvas project. After publishing this article, we noticed that the Unity project disables hardware anti-aliasing and uses bilinear filtering on the textures, whereas PlayCanvas enables AA and trilinear on the textures. So PlayCanvas is actually doing more work here.

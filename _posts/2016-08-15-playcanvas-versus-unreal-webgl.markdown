---
author: will
comments: true
date: 2016-08-15 11:21:27+00:00
layout: post
link: https://blog.playcanvas.com/playcanvas-versus-unreal-webgl/
slug: playcanvas-versus-unreal-webgl
title: PlayCanvas versus Unreal WebGL
categories:
  - News
---

Our [previous article](https://blog.playcanvas.com/playcanvas-versus-unity-webgl/) comparing PlayCanvas with Unity's WebGL exporter certainly got folks talking. One of the questions that came up in the aftermath was "OK, but what about Unreal's WebGL exporter?". Unreal, like Unity, relies on Emscripten to port the native codebase to JavaScript. So it would be reasonable to expect Unreal to suffer from the same issues as Unity: large download sizes, long load times and poor runtime performance.

<!-- more -->

We could do the same experiments as before with the textured cube, but let's try to make a more real-world comparison. Flappy Bird clones have been made in both Unreal and PlayCanvas. Let's take the Epic-authored Tappy Chicken and see how it fares against the PlayCanvas-powered Flappy Bird. Here's the  (playable) PlayCanvas game:

{% include playcanvas.html type="b" id="ONc0qGvZ" %}

Unfortunately, I can't embed Tappy Chicken because Epic have restricted it to desktop browsers. So [here's a link](https://www.unrealengine.com/html5/) to it, along with an animated GIF:

[![tappychicken](/assets/media/tappychicken.gif)](/assets/media/tappychicken.gif)

So before we begin, there's an important point to make. _They are not the same game and they do exhibit certain differences_. Tappy Chicken uses different textures, has parallax, uses particles and so on. But in essence, they are remarkably similar and worthy of a comparison, despite not being pixel perfect clones of each other. It's up to you, dear reader, to decide if the differences in the games account for the results of the analysis presented below.

As before, we will look at three key metrics: download size, load time and runtime performance.

### Download Size

To check the download size of each app, we disabled the cache in Chrome Dev Tools and recorded the total transfer:

| Tappy Chicken (Unreal) | Flappy Bird (PlayCanvas) |
| ---------------------- | ------------------------ |
| 10.0MB                 | 0.22MB                   |

**Epic's game is over 47 times larger than the PlayCanvas game.** Again, we see an Emscripten dependent engine struggle with download size. Just [the JavaScript of Tappy Chicken](https://cdn2.unrealengine.com/TappyChicken/gameFiles_1408053316/UE4Game-HTML5-Shipping.js.jgz) accounts for 7.3MB of the entire 10MB payload, and that is the GZIPped size. Uncompressed, it is over 36MB of JavaScript. PlayCanvas' hand-written, 'JavaScript-first' approach wins out here, with a tiny 147KB footprint (615KB uncompressed) for the entire engine.

### Load Time

Unfortunately, Epic prevents Tappy Chicken from running on mobile so we'll just test load times on desktop. For the test, we'll use a Core i7-powered Win10 machine on a 50Mb/s connection to the net. The browser cache has been disabled.

| Browser    | Tappy Chicken (Unreal) | Flappy Bird (PlayCanvas) |
| ---------- | ---------------------- | ------------------------ |
| Chrome 52  | 15.8s                  | 0.9s                     |
| Firefox 48 | 11.0s                  | 1.4s                     |
| Edge 14    | 23.6s                  | 1.1s                     |

The PlayCanvas game was also run on a number of mobile devices and always runs at 60Hz and loaded in under 2 seconds.

Things to notice:

- **Chrome loads the PlayCanvas game 17.6 times faster than the Unreal game.** Other browsers show impressive multiples too.
- Firefox loads the asm.js-based Unreal runtime the fastest. Since Emscripten is a Mozilla technology and Firefox is heavily optimized for asm.js code, this is not a great surprise.
- Load times appear to depend on more than just loading the game files. Preprocessing 36MB of JavaScript also contributes to the slow Unreal load times.

### Runtime Performance

To analyze runtime performance, let's compare captures of the two games using the Timeline panel in Chrome Dev Tools. Here's a capture for the PlayCanvas-powered Flappy Bird showing a frame executed in 0.57ms:

[![flappy_timeline](/assets/media/flappy_timeline.png)](/assets/media/flappy_timeline.png)

And here's a capture for the Unreal-powered Tappy Chicken with a frame executed in 5.0ms:

[![tappy_timeline](/assets/media/tappy_timeline-1.png)](/assets/media/tappy_timeline-1.png)

In each capture, a typical frame has been selected. Not the fastest, not the slowest. Just an 'average' frame. Note that both captures are showing a frame at the same timeline scale.

Things to notice:

- **CPU load in the Unreal game is typically around 8x greater than for the PlayCanvas game.** Taking the 'Composite Layers' step of the browser into account (green bar in the Timeline captures), the multiple is closer to 6x. So although both games generally lock to 60Hz on the test hardware, the PlayCanvas game can process a frame well within a millisecond whereas the Unreal game is clearly stressing the CPU. On lower end hardware, the Unreal game would become CPU bound.
- CPU load is much more variable in the Unreal game and spikes regularly. Without understanding the internals of the Unreal engine, it is hard to explain this. But the result is sporadic frame drops.

### Conclusion

To summarize:

- **Epic's game is over 47 times larger than the PlayCanvas game.**
- **Chrome loads the PlayCanvas game 17.6 times faster than the Unreal game.**
- **CPU load in the Unreal game is typically around 8x greater than for the PlayCanvas game.**

To be fair, Epic say the following in their documentation:

> The HTML5 pipeline is currently experimental. Some projects may not run properly when built for the HTML5 platform. Expect some rough edges.

But we clearly see here that Unreal suffers similar problems to Unity's WebGL exporter. Export sizes are huge, load times are long and runtime performance is poor when compared to a 'WebGL-first' engine like PlayCanvas.

To learn how PlayCanvas built an engine so optimized for the browser, head over to [GitHub](https://github.com/playcanvas/engine) to explore the open sourced runtime. And if you want to start building with PlayCanvas today, sign up for free on [playcanvas.com](https://playcanvas.com). To check out the Flappy Bird project, [click here](https://playcanvas.com/project/375389/overview/flappy-bird).

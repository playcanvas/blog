---
author: dave
comments: true
date: 2014-06-04 14:43:06+00:00
layout: post
link: https://blog.playcanvas.com/playcanvas-goes-open-source/
slug: playcanvas-goes-open-source
title: PlayCanvas goes open source
wordpress_id: 1271
categories:
  - Announcement
  - News
---

When we first started PlayCanvas ([over 2,716 commits ago](https://github.com/playcanvas/engine)) WebGL was just beginning to make it's way from Chrome and Firefox Nightlies into stable releases. Fast-forward to 3 years and WebGL is everywhere, Firefox and Chrome have strong support both on desktop and on mobile. And just this week the final player Apple have joined us with [WebGL support](http://blog.playcanvas.com/ios-webgl-support/) for both Safari and iOS.

[![SWOOOP background](https://blog.playcanvas.com/wp-content/uploads/2014/06/background-small.png)](http://blog.playcanvas.com/wp-content/uploads/2014/06/background-small.png)

Today, we have some more great news for WebGL fans, game developers and web developers alike.

**PlayCanvas Engine is now open source.**

The entire runtime engine is available right now on [github](https://github.com/playcanvas/engine) under the lovely [MIT license](opensource.org/licenses/MIT). Which means you can download it, fork it, and generally use it for anything you like.

### Why open source, why now?

Ever since we started the engine open source was always on our mind. We've never hidden the source code from developers. Minified versions are available for performance reasons, but during development users always have had full access to the un-mangled engine. This is critical for debugging and fulfilling our mantra to _make game development easier_.

In reality the engine has been open source since the get go. Officially open sourcing the project was just a matter of time, and the time is now. The engine is mature enough that we've established the basic structure, style and functionality but contributors will still be able to make a meaningful contributions to the engine. And of course we've now found the time to lay down the foundations of the [developer documentation](https://developer.playcanvas.com), the [API reference](https://developer.playcanvas.com/engine/api/stable/), the [samples](https://playcanvas.github.io) and all the other stuff that makes game development a joy not a chore.

For developers who just want to hack on the code with the overhead of the tools this news is great. Simply download the engine, open up your text editor and get cracking. For those of you who want more structure, and higher level tools, the [PlayCanvas platform](https://playcanvas.com) is a perfect addition to accelerate your game production.

### So, this engine? What is it?

In case you haven't come across the PlayCanvas Engine before, it's a JavaScript library engineered specifically for building video games. It implements all of the major components that you need to write high quality games:

- **Graphics:** model loading, per-pixel lighting, shadow mapping, post effects
- **Physics:** rigid body simulation, ray casting, joints, trigger volumes, vehicles
- **Animation:** keyframing, skeletal blending, skinning
- **Audio engine:** 2D and 3D audio sources
- **Input devices:** mouse, keyboard, touch and gamepad support
- **Entity-component system:** high level game object management

### Design Goals

We had a couple of goals in mind when we originally designed the engine.

1. It had to be easy to work with.

2. It had to be blazingly fast.

**Simple Yet Powerful**

As a developer, you want well documented and well architected APIs. But you also want to be able to understand what’s going on under the hood and to debug when things go wrong. For this, there’s no substitute for a carefully hand-crafted, unminified, open source codebase.

Additionally, you need great graphics, physics and audio engines. But the PlayCanvas Engine takes things a step further. It exposes a game framework that implements an **entity-component** **system**, allowing you to build the objects in your games as if they were made of Lego-like blocks of functionality. So what does this look like? Let’s check out a simple example on CodePen

[![playcanvas_codepen](https://blog.playcanvas.com/wp-content/uploads/2014/06/playcanvas_codepen.jpg)](http://codepen.io/playcanvas/pen/ctxoD)

As you can see from the Pen’s JS panel, in just over 100 lines of code, you can create, light, simulate and view interesting 3D scenes. Try forking the CodePen and change some values for yourself.

**Need For Speed**

To ensure we get great performance, we’ve built PlayCanvas as a hybrid of hand-written JavaScript and machine generated [asm.js](http://asmjs.org/). The most performance critical portion of the codebase is the physics engine. This is implemented as a thin, hand-written layer that wraps [Ammo.js](https://github.com/kripken/ammo.js/), the Emscripten-generated JavaScript port of the open source physics engine Bullet. If you haven’t heard of Bullet before, it powers amazing AAA games like Red Dead Redemption and GTAV. So all of this power is also exposed via the PlayCanvas engine. Ammo.js executes at approximately 1.5x native code speed in recent builds of Firefox so if you think that complex physics simulation is just not practical with JavaScript, think again.

But what about the non-asm.js parts of the codebase? Performance is clearly still super-important, especially for the graphics engine. The renderer is highly optimized to sort draw calls by material and eliminate redundant WebGL calls. It has also been carefully written to avoid making dynamic allocations to head off potential stalls due to garbage collection. So the code performs brilliantly but is also lightweight and human readable.

### Powering Awesome Projects

[![play-canvas-engine-500](https://blog.playcanvas.com/wp-content/uploads/2014/06/play-canvas-engine-500.jpg)](http://blog.playcanvas.com/wp-content/uploads/2014/06/play-canvas-engine-500.jpg)

The PlayCanvas Engine is already powering some great projects. By far and away, the biggest is the [PlayCanvas web site](https://playcanvas.com): the world’s first cloud-hosted game development platform.

For years, we’ve been frustrated with the limitations of current generation game engines. So shortly after starting work on the PlayCanvas Engine, we began designing a new breed of game development environment that would be:

- **Accessible - **Using any device with a web browser, plug in a URL and instantly access simple, intuitive yet powerful tools.
- **Collaborative - **See what you teammates are working on in real-time or just sit back and watch a game as it’s built live before your eyes.
- **Social - **Making games is easier with the help of others. Be part of an online community of developers like you.

PlayCanvas ticks all of these boxes beautifully. But don’t take our word for it – [try it for yourself](https://playcanvas.com) and discover a better way to make games.

### Speaking of Games

It's all very well talking about engines and tools, but engines are only as good as the games they let you make. Fortunately we've got a doozy for you.

[caption id="attachment_1124" align="aligncenter" width="575"]![SWOOOP title](https://blog.playcanvas.com/wp-content/uploads/2014/03/swooop_blog.jpg)](http://swooop.playcanvas.com/) SWOOOP - mobile browser game built using the PlayCanvas Engine[/caption]

[SWOOOP](http://swooop.playcanvas.com) is a great demonstration of what you can achieve with HTML5 and WebGL today. The game runs great in both mobile and desktop browsers and PlayCanvas also supports publishing to App Stores through third-party tools like [Ludei's CocoonJS](https://www.ludei.com/cocoonjs/) or the open source [Ejecta](http://impactjs.com/ejecta) project.

### Want!

So you want to help us make the best damn 3D engine on the web? Great! Head over to our [github page](https://github.com/playcanvas/engine). Get cloning, starring and forking while it’s fresh!

### Stay in the Loop

Lastly, stay in touch, we're a friendly bunch.

Follow us on Twitter, [@playcanvas](https://twitter.com/playcanvas), for largely technical updates on PlayCanvas.

Like the [PlayCanvas Facebook](https://facebook.com/playcanvas) page for our whimsical views on the game dev scene.

Join and start discussions on the [PlayCanvas Forum](https://forum.playcanvas.com).

We’re super excited to see what the open source community will do with the PlayCanvas Engine. Get creative and be sure to let us know about your projects.

Toodle pip!

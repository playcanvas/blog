---
author: dave
comments: false
date: 2012-08-08 11:40:31+00:00
layout: post
link: https://blog.playcanvas.com/a-multiplayer-3rd-person-shooter-in-html5/
slug: a-multiplayer-3rd-person-shooter-in-html5
title: Making a multiplayer 3rd-person shooter in HTML5
categories:
  - News
tags:
  - demo
  - news
---

![D.E.M.O.](/assets/media/demo-game.jpg)
<br>_D.E.M.O. Multiplayer 3rd-person shooter running in the browser_

PlayCanvas were lucky enough to show a demo of our collaborative HTML5 game development toolset at Google I/O a few months back. We had a few existing demos of simple games that we had made in order to test the platform.

However, we really wanted to show something a little more high-end, to showcase the possibilities that HTML5 offers for next-generation browser games. With a little under two weeks to go we started work on the demo we'd feature on the show floor. A networked multiplayer 3rd-person shooter we descriptively called 'scifi'. We’ve since renamed it to the slightly less descriptive D.E.M.O.

[Try playing D.E.M.O. now](http://apps.playcanvas.com/playcanvas/scifi/latest).
_**Firefox:** Hiding the mouse cursor only works in Fullscreen mode, press SPACE to toggle fullscreen._

We think the result is something is pretty special so we’re sharing it with you today. We think you’ll agree that it heralds the beginning of a new generation of HTML5 games.

We also wanted to talk about how using PlayCanvas allowed us to make D.E.M.O. in around 2 weeks. A staggeringly short time for any game, and it really shows off the power of collaborative development and great tools.

The game and the PlayCanvas Engine are written entirely in JavaScript. It’s pushing at the boundaries of the browser gaming using the latest HTML5 APIs, including:

- WebGL for the graphics;
- Web Audio API for sound;
- WebSockets for networking;
- Gamepad API for controller input;
- PointerLock API to hide the mouse cursor;
- Fullscreen API to give you an immersive experience;

D.E.M.O. was built on top of the [PlayCanvas Engine](https://github.com/playcanvas/engine), which provides graphics, audio, input handling, etc. The game itself is a few thousand lines of JavaScript, the [source code](http://bitbucket.org/playcanvas/scifi) is available if you want to take a closer look. We also wrote a simple server which runs a WebSocket server powered by [NodeJS](https://nodejs.org/) to set up games and redirect messages to connected clients. The [source code](http://bitbucket.org/playcanvas/scifi-server) for this is available too.

## How was it built?

Two weeks is very short time to build an app like D.E.M.O. and along with lots of long hours coding we were only able to do this thanks to the PlayCanvas platform that we’ve built, so we want to share with some of the ways which it saved us time, and can save you time too.

### Asset wrangling

![SWAT Model](/assets/media/swat_in_tools.jpg)
<br>_Side-by-side rendering in 3DS Max and PlayCanvas Engine_

We’ve made a beautiful looking game in 3D in next to no time. We could do this because the PlayCanvas asset tools are built to ingest a wide range of model formats and set up to ensure that default materials from popular 3D packages appear identical in engine as they do for the artist.

The sci-fi levels and the SWAT character and animations were all created using 3D Studio Max default materials. With no effort on our part we could export the source assets into the PlayCanvas format and be sure they would look nearly identical at runtime. If you were to get assets from a site like [Turbo Squid](https://www.turbosquid.com/) you need to know that it will _just work_ in PlayCanvas without modification. Within minutes of receiving 3D assets from a 3rd party you can have characters and environments in game.

### Building the level

![D.E.M.O.](/assets/media/demo-designer.jpg)
<br>_Building the D.E.M.O. in PlayCanvas Designer_

Traditionally, this would consist of building out the level in low detail (often called grey-boxing) and running about it in to get feel for the how the game plays, where the choke points are and how the spawn points should be placed. Unfortunately, we didn’t have the art resources to design the level in this way but we did have a set of 5 or 6 components which fitted together like jigsaw pieces.

Even though there was a limited choice of level design, both Will and I wanted to be involved in the discussion over the how level should look. As we were working around 50 miles apart, getting together around a laptop screen wasn’t going to be possible. Fortunately the PlayCanvas Designer is the perfect solution for this type of collaborative work. We are able to simultaneously view the same level and while talking face-to-face over Skype, we could both position the pieces in real-time and discuss the pros and cons of each configuration.

We had a pretty simple task to complete but we were miles apart and using the Designer meant that we had no problem collaborating despite this. It’s clear to us that scaling this up to a design team would be incredibly liberating and will really change the way that games are made.

### Cloud Development

By the time of the conference, development on the demo had nearly finished and we had a few hours to set up our booth. Google kindly provided a MacBook Pro and one of their new fancy Chromebooks for us to demo on. Our plan was to run the PlayCanvas Designer on each machine along with a live running build of the game. That way we could demonstrate how editing data on one machine would update instantly in both the Designer view on the other machine and the live games running on each machine.

Total set up time for installing tools and getting up and running on both machines? Under a minute, simply open Chrome and navigate to a url. This is possible because of cloud development. Every part of the process is based in the cloud: the tools, the assets and the code.

### Help us, help you

The service we’re building at PlayCanvas is designed to make creating games faster and more accessible. We're building games ourselves in ways that we wouldn’t have thought possible a few years ago and we want you to do that too.

If you are interested in trying out PlayCanvas to build your games, get in touch, email us at <info@playcanvas.com> to join the Beta trial.

### [Play the game](http://apps.playcanvas.com/playcanvas/scifi/latest)

Try out D.E.M.O for yourselves. We’ve divided it into multiple 3-player games, you will join the first free game. It should run in any browser that supports WebGL.

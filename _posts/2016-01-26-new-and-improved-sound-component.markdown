---
author: dave
comments: true
date: 2016-01-26 14:45:06+00:00
layout: post
link: https://blog.playcanvas.com/new-and-improved-sound-component/
slug: new-and-improved-sound-component
title: New and Improved Sound Component
wordpress_id: 2288
categories:
  - News
---

It's been a long running issue that our Audio Source component wasn't quite feature-complete enough to do some of the more advanced features of an audio heavy game or interactive experience. Today, we're blowing those issues out of the water with a sonic boom!

### [![sound-tutorial](https://blog.playcanvas.com/wp-content/uploads/2016/01/sound-tutorial.png)](http://blog.playcanvas.com/wp-content/uploads/2016/01/sound-tutorial.png)

## Sound Component

We're just rolled out a brand new component into both the engine and the editor. The Sound Component takes on all the capabilities of the Audio Source Component (which is now deprecated) and layers on more features than violins in an orchestra.

Here are the old things we're still doing:

- Web Audio API support with fallback to Audio Element
- 3D positional sound
- volume and pitch controls

And lets just list out all the cool new things:

- Multiple sound slots per component
- Individual settings for volume, pitch, autoplay, loop and overlap
- Play the same sound overlapping (great for spot effects)
- Fire-and-forget sounds (keeps playing after Entity is deleted)
- Audio Events fired for looping, loading, stopping, pausing, etc
- Access to full Web Audio API nodes (add your own effects)
- Sound atlas support (play from any point to another point)
- Start playing from any point in audio
- Set current time, seek with in sound
- Lovely new javascript API

These features open up a whole bunch of doors with what you can do with audio in your games and applications. For example, overlapping sounds means you only need a single sound component to do rapid fire gun shots. Fire-and-forget sounds mean you can play and explosion sound and delete the entity without worrying about the sound stopping. Access the Web Audio nodes means you can add effects like reverb and more to your sound. Seeking within sounds makes music games possible. And in general your audio code will now be cleaner, simpler and shorter.

## Documentation & Tutorials

[![analyzer-thin](https://blog.playcanvas.com/wp-content/uploads/2016/01/analyser-thin1.jpg)](http://blog.playcanvas.com/wp-content/uploads/2016/01/analyser-thin1.jpg)

To help you get up to speed with all the new features, we've update the [documentation](http://developer.playcanvas.com/en/user-manual/packs/components/sound/) and the [reference api](http://developer.playcanvas.com/en/api/pc.SoundComponent.html).

But we've also created a few tutorials to show you how it all works.

### Basic Audio

This [tutorial](http://developer.playcanvas.com/en/tutorials/beginner/basic-audio/) covers how to setup a component and managing the audio settings on different slots. Like the looping and overlap properties.

### Audio Effects

This [tutorial](http://developer.playcanvas.com/en/tutorials/advanced/audio-effects/) shows you how to add audio effects by manipulating the Web Audio API nodes

### Audio Visualizer

This [tutorial](http://developer.playcanvas.com/en/tutorials/intermediate/music-visualizer/) shows you how to build a music visualizer using a sound component and an Analyzer node.

Go forth and **make some noise!**

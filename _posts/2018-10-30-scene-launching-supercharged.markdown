---
author: will
comments: true
date: 2018-10-30 00:00:04+00:00
layout: post
link: https://blog.playcanvas.com/scene-launching-supercharged/
slug: scene-launching-supercharged
title: Scene Launching Supercharged!
wordpress_id: 2555
categories:
  - News
---

Iterating on your PlayCanvas game just got a whole lot faster!

When you launch a scene from the PlayCanvas Editor, a set of assets has to be loaded. Non-script assets are loaded from the browser's memory cache. However, script assets each generate a round trip request to the server. For projects with a lot of scripts, the load time can be long and your ability to iterate is going to suffer.

Today, we're pleased to announce that we have deployed an update that introduces a lightning fast build step when you launch your scene that concatenates scripts into a single file. This means that only one HTTP request is made for scripts regardless of how many you have.

### How To Enable The Concatenation Goodness

In the Launch button sub-menu, there is a new options called 'Concatenate Scripts'. Check this to enable the feature:

![Concatenate Scripts](/assets/media/editor-concatenate-scripts.png)

### What Difference Does it Make?

Your mileage will vary depending on how many scripts your project has and what your network conditions are. But if you have a lot of scripts, and you are subject to an internet connection with high latency (ping), then the speed up will be much more noticeable.

Here are the launch times for a scene referencing 125 scripts on low-latency WiFi (150Mbps down with 7ms ping):

- Concatenate off: 24 seconds
- Concatenate on: **2 seconds**(!)

### Wait! Won't this Screw Up My Debugging?

In a word: nope! We use source maps to refer back to your individual scripts. So you can find your scripts in the Sources tab and set breakpoints as usual instead of having to navigate the super-long concatenated script file.

![Sources Tab](/assets/media/sources-tab.png)

So we hope you like this latest improvement and that it makes your iteration time faster than ever. Enjoy!

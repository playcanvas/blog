---
author: elliott
comments: true
date: 2021-05-05 14:30:04+00:00
layout: post
link: https://blog.playcanvas.com/introducing-the-anim-state-graph/
slug: introducing-the-anim-state-graph
title: Introducing the Anim State Graph
categories:
  - News
tags:
  - animation
  - editor
  - workflow
---

We’re excited to be able to release a new system for creating fantastic and high fidelity animations in PlayCanvas!

[![](/assets/media/animation-and-graph-2.gif)](/assets/media/animation-and-graph-2.gif)

Animation systems receive a set of inputs (button presses, current player speed, health, etc) and output a model's animation pose for the current frame. How an animation system goes from a particular set of inputs to the desired animation pose can become quite complicated, especially when writing this in code.

[![Animation Input and Outputs](/assets/media/anim-inputs-and-outputs.png)](/assets/media/anim-inputs-and-outputs.png)

With the release of the Anim component, Anim State Graph assets and Anim State Graph Editor, you will be able to design and develop intricate animation behavior for your game objects right in the PlayCanvas editor.

It’s now easier than ever to make your game characters move just the way you’d like, while writing minimal code in the process!

Having recently beta tested this feature with a number of developers, we’ve already seen some fantastic results! For instance, the developer of the popular online shooter [venge.io](https://venge.io/) is utilizing the anim state graph to drive character animations in their up and coming online RPG.

A clip of an early build of this game can be seen below, showcasing the blending of multiple animation clips. When combined together in a state graph they create realistic and fluid movement for the main character.

![](/assets/media/cem-prototype.gif)

This animation system was entirely developed in the PlayCanvas editor using the anim state graph user interface. The state graph for the main character can be seen below:

![](/assets/media/anim-state-graph.png)

We can’t wait to see what other developers can create with this system!

### Features

**Graph Layers** - Split your animation behavior into separate layers. For instance: locomotion animations can be separated from facial expressions.

**Multiple characters** - Because anim state graphs are stored as assets, a single graph can be used to drive the animation of as many entities as you want by assigning your graph asset to multiple entity anim components.

![](/assets/media/anim-state-graph-shared.gif)
<br>_Multiple characters utilizing the same anim state graph_

While these two characters use different animations for their various actions, they share the same behavior. With the anim state graph you can update this behavior in one place while still using it with as many characters as you like.

### How does it all work?

When opening an Anim State Graph asset you’ll be presented with a visual graph editor which allows you to define all of the different animation states your game object can be in. You can then connect these states using transitions.

{% include video.html src="/assets/media/anim-create-state-graph.mp4" %}
_Create anim state graphs using the editor UI_

Each transition blends between two animations over a specified amount of time. You can adjust and tweak transitions to your liking and see the results in real time in the PlayCanvas launch page. You can then assign parameter conditions to each transition to define the circumstances under which that transition can fire. These parameter values can be modified in your scripts to control the behavior of your animation system.

{% include video.html src="/assets/media/anim-script-trigger.mp4" %}
_Control anim state graph behavior in scripts using the anim component API_

Once you’ve created your Anim State Graph you can assign it to your entity using the Anim component. At this point you can attach your animation assets to each state which will play when transitioning to that state.

### Looking Ahead

Today only marks the initial release of our new animation system. We’ve got grand plans on how to push the system further. Here’s a few features we’ve got in the works:

Animation Events - These events can be set up to fire and specific points during the lifetime of an animation, allowing you to hook game logic into the behavior of your anim state graph. For example you could spawn a set of dust particles during the exact frame that your character lands on the ground after a jump.

Layer Masking - You’ll be able mask your character animations on a particular state graph layer. For instance you could have only the bottom half of a character driven by a particular anim state graph layer.

Blend Trees - Directly control the blend between multiple animations in real time.

![](/assets/media/anim-blend-trees.gif)
<br>_Blending three animations using a 2D cartesian blend tree_

Animation Clips - Currently the anim state graph supports animation assets that have been imported into PlayCanvas. Clips will allow you to create extra animation assets within the PlayCanvas editor yourself! These will be great for quickly adding smaller animated flourishes to your game objects.

If you’re interested in using anim state graphs in your PlayCanvas projects, here’s some useful links:

- [User Manual](https://developer.playcanvas.com/en/user-manual/animation/)
- [Animation Blending Tutorial](https://developer.playcanvas.com/en/tutorials/anim-blending/)

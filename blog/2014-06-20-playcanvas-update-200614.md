---
authors: christy
date: 2014-06-20 17:11:25+00:00
slug: playcanvas-update-200614
title: PlayCanvas Update 20/06/14
categories:
  - Features
---

**Now it really has been a busy week for us and we have so much to tell you about. Here's a run down on improvements to the engine and what happened behind the scenes at [PlayCanvas](https://playcanvas.com/) this week.**

### User Camera View

You can now view your scene from any Entity that has a camera component in your scene. Either right-click in the 3D view and select the camera you want from there, or alternatively do it from this new combo box (below). You can also move the selected camera wherever you want using the normal camera controls in the Designer.

[![Camera Select](/img/designer-camera-select.jpg)](/img/designer-camera-select.jpg)

### Entity Context Menu

We added a new Entity context menu that appears when you right-click on an Entity in the 3D view. From there you can see all the parent Entities of the selected Entity up to the root and you can select a parent Entity easily. You can also see more options for Entities like Delete, Add Component, etc.

[![Entity context](/img/designer-entity-context-menu.jpg)](/img/designer-entity-context-menu.jpg)

### Error Console

Whenever you try to launch a game from the Designer you will see errors in a new console, so you no longer need to wonder why the game is not loading. You can click on the problematic script and get transferred to the code editor at the offending line.

[![error console](/img/error-console.jpg)](/img/error-console.jpg)

### Shadow Distance

We added Shadow Distance in the Scene Settings, a value that controls that maximum distance from the camera from which shadows coming from Directional Lights are visible. Just toggle your scene settings to adjust it. This makes shadows from Directional Lights visible in the Designer as they no longer rely on the frustum of the camera.

### Events & Oculus Rift Support

We also showed our faces at a number of events this week. Dave showed off some of our work with the [Oculus Rift](https://blog.playcanvas.com/virtual-reality-and-the-future-of-web-based-gaming/) at the Scenario Bar (as seen above) and we ran a [SWOOOP](http://swooop.playcanvas.com/) high score challenge at the [IDEA London](https://www.idealondon.co.uk/) summer party.

[![VR night](/img/VR-night.jpg)](/img/VR-night.jpg)

### Stay In The Loop

- Follow us on Twitter, [@playcanvas](https://twitter.com/playcanvas), for updates on PlayCanvas.

- Like the [PlayCanvas Facebook](https://facebook.com/playcanvas) page for our whimsical views on the game dev scene.

- Join and start discussions on the [PlayCanvas Forum](https://forum.playcanvas.com/).

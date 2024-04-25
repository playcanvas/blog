---
author: steven
comments: false
date: 2021-07-05 09:19:56+00:00
layout: post
link: https://blog.playcanvas.com/transitioning-to-the-new-render-component-and-fill-mode-api/
slug: transitioning-to-the-new-render-component-and-fill-mode-api
title: Transitioning to the New Render Component and Fill Mode API
categories:
  - News
tags:
  - editor
  - engine
---

Hi everyone!

This is a different blog post to what we normally do but with some big changes coming soon, we wanted to give context and advance notice of said changes and more importantly, how they may affect you across the PlayCanvas platform.

### Moving from Model Component model import pipeline to new Render Component

As part of the work to enable the [import of a model’s hierarchy into the scene](https://forum.playcanvas.com/t/importing-models-with-hierarchy-is-now-in-soft-launch/20304), we have introduced Render Asset and Render Component as new features of the Engine and Editor.

![Import Hierarchy Preview](/img/editor-import-hierarchy-preview.jpg)

Going forward, this will be the default way to render imported models and gives developers greater flexibility in manipulating mesh instances in the model directly in the Editor. For example, with the new pipeline you can import a house FBX model and only use the door mesh instance in the scene instead of the whole model.

However, please note that while the Model Component is compatible with both the Animation and Anim (State Graph) Component, the Render Component/Import Hierarchy feature is only compatible with the Anim (State Graph) Component.

(More details will be shared in an upcoming announcement, stay tuned for that!)

For existing projects using the Model Component, please do not worry. **None of the existing functionality is being removed** and you will not be forced to update projects to the new pipeline for continued development. Although no new features will be added to the Model Component, the PlayCanvas team will continue to fix bugs with the existing pipeline.

You can even mix both pipelines in the same project if you wish to take advantage of the features in the new pipeline in an existing project. However, please bear in mind that this can add complexity to the project code.

The expected changes over the upcoming months are as follows:

- Add/Rename a Project Setting to switch between the two mesh import pipelines (Currently, this is the ‘Import Hierarchy’ setting).
- Newly created projects will default to using the Render Component pipeline.
- [developer.playcanvas.com](https://developer.playcanvas.com) tutorials will be updated to use Render Component ([playcanvas.github.io](https://playcanvas.github.io) engine examples have already been updated).
- The template projects (Blank Project, Model Viewer Starter Kit, VR Starter Kit) will be updated to use Render Component.
- User Manual updates and mitigation steps from using the Model Component to Render Component pipelines.

### Breaking change to PlayCanvas Fill Mode API

We want to make the PlayCanvas engine as flexible as it can be for the widest range of use cases for web developers. To do so, we occasionally have to break existing APIs that may have made sense when they were first introduced, but not today.

One such API is the Fill Mode related functions on `pc.Application`:

- [`application.resizeCanvas`](https://github.com/playcanvas/engine/blob/64668d98b6d8cd3ecba6ecae937f1ce50fed9707/src/framework/application.js#L1376)
- [`application.fillMode`](https://github.com/playcanvas/engine/blob/64668d98b6d8cd3ecba6ecae937f1ce50fed9707/src/framework/application.js#L676)
- [`application.setCanvasFillMode`](https://github.com/playcanvas/engine/blob/64668d98b6d8cd3ecba6ecae937f1ce50fed9707/src/framework/application.js#L1313)

These functions affect the canvas element size in the DOM as it was long assumed that apps made with PlayCanvas are either be iframed or fullscreen/full document apps.

However, there has been more requests about having more control of the canvas element rather than using iframes. The main reason is that it’s easier to communicate between the page and the PlayCanvas app without having to deal with iframe messaging.

Some examples:

- [Forum: A Complete PlayCanvas scene inside a div](https://forum.playcanvas.com/t/a-complete-playcanvas-scene-inside-div-tags/18461)
- [Forum: PlayCanvas within a div](https://forum.playcanvas.com/t/solved-playcanvas-within-a-div/10492)
- [Forum: Embedding PlayCanvas into a webpage without iframe](https://forum.playcanvas.com/t/embedding-playcanvas-into-a-webpage-without-iframe/17246)

Currently, there is no way for an end user to have full control of the canvas without patching the engine.

Also, from an architecture point of view, the Engine shouldn’t handle the size or position of the element that it is rendering in. The responsibility should be on the web document and how it wants to layout the elements on the page (e.g through stylesheets).

These changes will affect you directly if you are:

- An engine only user as the HTML boilerplate will handle the resizing and positioning of the canvas. We will provide examples in the examples folder.
- Any developer that changes the fill mode or resizes the Canvas at runtime. Some developers do this to handle landscape and portrait mode more effectively.

The current plan is deprecate these functions and move them to globally accessible functions on the page on the PlayCanvas Editor environment with as little (if any) downtime for projects or developers. At worst, you should only get a few warnings in the console log regarding deprecated function use.

The steps will be as a gradual rollout:

- Add globally accessible JS functions in the Editor and publish HTML templates to replace the fill mode functions from the Engine.
- Change the PlayCanvas Editor and published build templates to patch the Engine functions to call the global functions above with warnings that they should use the global functions instead.
- Update the User Manual to document these global functions.
- Deprecate the affected engine functions with warnings and reference the User Manual page.

### Questions and Feedback

If there are any questions or areas that you would like to be made more clear, please post in the [forums](https://forum.playcanvas.com/) and the PlayCanvas team will be there to answer.

The PlayCanvas team are appreciative of your patience and continued support as we go through this transition!

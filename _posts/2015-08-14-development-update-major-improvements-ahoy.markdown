---
author: will
comments: true
date: 2015-08-14 15:41:09+00:00
layout: post
link: https://blog.playcanvas.com/development-update-major-improvements-ahoy/
slug: development-update-major-improvements-ahoy
title: "Development Update: Major Improvements Ahoy!"
wordpress_id: 2225
categories:
  - News
---

Have you noticed that everybody seems to go on vacation in August? Not PlayCanvas! We've been burning the midnight oil to bring you a raft of new features and improvements to your favorite browser-based 3D engine. Want the deets? Read on!

#### Editor Improvements

- User cameras are now back and improved with interpolation for smoother animation. You can also hover on the semi-transparent rectangle of the camera to see a username tooltip to find out who's keeping you company.
  [![usercamera](https://blog.playcanvas.com/wp-content/uploads/2015/08/usercamera.gif)](https://blog.playcanvas.com/wp-content/uploads/2015/08/usercamera.gif)
- Most assets are now triggering previews when dragged: drag a material to a material asset slot without dropping it and it will swap temporarily in the 3D view for preview. This applies to: textures, materials and cubemaps.
- Materials are now draggable into the 3D view. Just drag them right onto the model.
  [![switchmaterial](https://blog.playcanvas.com/wp-content/uploads/2015/08/switchmaterial.gif)](https://blog.playcanvas.com/wp-content/uploads/2015/08/switchmaterial.gif)
- Cubemaps are now draggable into the 3D view. Drag onto materials to apply as an environment map, or onto the background in the 3D view to apply as a scene skybox.
- Tooltips are now shown when hovering on entities in the 3D view (after a short delay).
- Read-only collaborators are now able to click on the "View" button of code-based assets to open a read-only view of the script in the Script Editor.

#### Asset System Improvements

- Asset loading has been heavily refactored.
- Assets now manage their own reloads way more efficiently.
- The Model Component processes any asset updates far faster.
- Reduced number of re-uploads to GPU of texture assets.
- A cube map now uploads to the GPU only if it has valid data and only if one or more faces have changed.

#### Graphics Engine Improvements

- Shaders are no longer linked on creation, but only when used to avoid blocking on completion of shader compilation. This generally improves load time.
- Texture state setting is now far more optimal leading to major rendering speedups.

#### Fixes

- Asset thumbnails should now refresh in the assets panel on a re-upload.
- Gizmos are now not draggable outside of viewport.
- For the opacity map of a material, the "RGB" option has been removed, because it led to shadows disappearing.

That's it for this week. We hope you like the improvements. Anything we're not working on that you want to see added to PlayCanvas? Tell us on the forum!

Have a great weekend!

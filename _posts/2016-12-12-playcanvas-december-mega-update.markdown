---
author: will
comments: true
date: 2016-12-12 15:20:39+00:00
layout: post
link: https://blog.playcanvas.com/playcanvas-december-mega-update/
slug: playcanvas-december-mega-update
title: PlayCanvas December Mega Update
wordpress_id: 2481
categories:
  - News
---

Time for another dev update, WebGL lovers! We've deployed a ton of new features, optimizations and fixes. Here's a run-down of what's new.

### Camera Preview

A Camera Preview is now shown in the top left corner of Viewport when an entity with a camera component is selected.

[![camerapreview](/assets/media/camerapreview.gif)](/assets/media/camerapreview.gif)

### Interactive Asset Previews

New Material, Model and Cubemap Previews are now available in the Inspector. They are interactive and clickable.

[![material-preview](/assets/media/material-preview.gif)](/assets/media/material-preview.gif)

### Antialiasing Control

It is now possible to control antialiasing in Scene Settings.

[![antialias](/assets/media/antialias.png)](/assets/media/antialias.png)

### Model Placement

When dragging a model to the Viewport from the Assets panel, if CTRL is held (CMD on Mac) it will put the model in front of the camera rather than at the origin.

### Assets Panel Enhancements

Added toggle button to Assets panel to switch between small and large thumbnails.

[![thumbnail-size](/assets/media/thumbnail-size.gif)](/assets/media/thumbnail-size.gif)

Added Folder Up button to navigate to parent folder.

[![folder-up](/assets/media/folder-up.gif)](/assets/media/folder-up.gif)

Hovering on asset in Assets panel will show a tooltip with the full asset name.

[![asset-tooltips](/assets/media/asset-tooltips.gif)](/assets/media/asset-tooltips.gif)

Asset Replace feature is available under the context menu of an asset. It activates the asset picker so the developer can choose another asset of the same type. It will replace references with new asset in Entities and Assets.

GIF files are no longer translated to PNG. They are now treated as another valid runtime format with parity to JPEG and PNG runtime texture formats.

### Code Editor Enhancements

- Highlight current line of cursor.
- Highlight errors.
- Made cursor more visible.
- Fewer disconnection messages.

### Optimizations

Huge speedups achieved for both loading and rendering of scenes!

- New thumbnail rendering system reduces VRAM usage in the Editor by up to a factor of two. This makes the Editor more stable and faster to load, especially for larger scenes.
- Major optimizations for loading and Editor rendering process so projects with thousands of entities and assets can load and render now up to 10 times faster in extreme cases.
- Asset load operations are now batched rather than performed one by one.
- All engine assets are loaded only when they are required (when they are enabled), leading to reduced traffic and loading times.
- Optimizations in internal API of Editor and UI leading to reduced garbage collection (and therefore GC stalls) and speeds up UI templating for Hierarchy and Assets panels.
- Enabled GZIP on WebSocket traffic, which reduces data transfers for initial loading.

### Fixes

- Fixed up arrow while navigating in the Hierarchy tree.
- Fixed sorting of folders in the Assets panel tree.
- Fixed material overrides on the Model Component if the model asset wasn't loaded.
- Cubemap faces now update in the Inspector (in the Faces section) if a face texture file is changed.
- Read-only users can now select text/number field values.
- Double click or right mouse click on number fields now will select whole content of the field and not just part of number separated by a dot or minus sign.
- Networking improvements have been made to reduce disconnects.

Phew! We hope you like these latest additions. Got any feedback? [Comment on the forum](https://forum.playcanvas.com/t/playcanvas-december-mega-update/2983)! We'd love to hear what you think.

---
authors: dave
slug: better-asset-management
title: Better Asset Management
tags:
  - editor
---

![PlayCanvas Editor](/img/editor-bmw.png)

Forget about Twitter changing stars to hearts. PlayCanvas introduces **Asset Folders**!

<!-- truncate -->

It's been a long time coming, but today we've revolutionized the way you organize your PlayCanvas assets. Folders, sub-folders, and folders within other folders are all supported right now in the PlayCanvas Editor. We've also updated all the icons to make everything clear crisp and beautiful.

[![assetfolders](/img/editor-asset-folders.gif)](/img/editor-asset-folders.gif)

_Some special notes because nothing is quite that simple:_

**Source assets** are now always visible in your asset panel. This means you might see some extra files that you didn't realize you had. Source assets are files that are in a format that you can't use at runtime in your game. You'll see these for some textures and for 3D model and animation formats, they look like asset icons with a dashed border around them.

[![source-assets](/img/source-assets.jpg)](/img/source-assets.jpg)
_Source asset visible in the editor_

**Scripts** are still a little bit special and we've put them in their own Scripts folder which you can't put other assets in or modify at the moment. We're working on some exciting changes to the way scripting is handled.

**Folders** are just a organization tool in the Editor, so don't try and use them in your game scripts. Stick to script attributes and asset tags for finding your assets in scripts.

---
authors: will
slug: whats-new-hdr-cubemaps-multi-selection-and-more
title: 'What''s New: HDR Cubemaps, Multi-selection and more'
tags:
  - editor
---

It's been another busy week for the PlayCanvas team. Here's a quick run down of the coolness we've deployed for you!

<!-- truncate -->

## HDR Cubemaps

We've taken lighting to a whole new level of realism in PlayCanvas. The Editor now supports the import of HDR images to build HDR cubemaps.

[![hdr](/img/hdr.jpg)](/img/hdr.jpg)

[CLICK HERE TO RUN DEMO](https://playcanv.as/p/3zUijwTX)

HDR image formats supported are .hdr and .exr. When a texture is selected in the Inspector, there is now a property called HDR which is either true or false. So the workflow to construct an HDR cubemap for image based lighting is now:

1. Upload 6 HDR images

2. Create a new cubemap asset and select it so that it is shown in Inspector

3. Assign the six images as cubemap faces

4. Hit the Prefilter button in Inspector

5. Open the Scene Settings (the cog in the bottom left of the Editor UI)

6. Assign the HDR cubemap asset to the Skybox property in Scene Settings

Now, physical materials will use the HDR cubemap as the source for image based lighting.

## Multi-selection: Phase 1

We've deployed the first phase of a really useful new feature: multi-selection. Initially, this works for texture and cubemap assets. In the Assets panel, you can now SHIFT or CTRL click multiple textures or cubemaps. This allows you to do several things:

- Delete multiple assets simultaneously
- Change shared properties once for all assets in the selection
- Display the summed size all assets in the selection

Stay tuned for multi-selection support for other asset types and entities too!

## Material Duplication

If you right click a material asset, you can now duplicate it via the context menu:

[![Duplicate Material](/img/editor-material-duplicate.png)](/img/editor-material-duplicate.png)

## Audio Preview

Now you can play back your audio assets directly from the Editor. Select the audio asset in the Assets panel and the Inspector now shows a play button:

[![Audio Asset](/img/editor-audio-asset.png)](/img/editor-audio-asset.png)

That's all for this week, folks. Now get back to making great games!

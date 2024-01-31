---
author: dave
comments: true
date: 2015-12-05 11:19:05+00:00
layout: post
link: https://blog.playcanvas.com/feature-update-import-pipeline-improvements/
slug: feature-update-import-pipeline-improvements
title: "Feature Update: Import Pipeline Improvements"
categories:
  - Features
  - News
tags:
  - editor
---

Today's new features are part of our on-going process of making your PlayCanvas experience easier and easier. And despite the title, we've released some awesome changes today.

## Asset Import Pipeline

[![Asset Tasks](/assets/media/editor-asset-tasks.jpg)](/assets/media/editor-asset-tasks.jpg)

We've introduced a lot more control over the way that assets are imported into PlayCanvas. You will discover these options in the Asset Tasks panel and the Asset Task Settings.

You can read all about new asset pipeline features in [our developer documentation](https://developer.playcanvas.com/user-manual/assets/import-pipeline/). But here are the key facts.

### Auto-run

You can now choose whether to run the pipeline automatically when you import an asset. This gives you more control over the options you apply to each individual asset.

### Non-power of two textures

You can now disable the conversion of textures to the nearest power of two. If you're using images in HTML or in your user interface. This can be very useful.

### Overwriting behavior

When you start iterating on models you often want to upload a new FBX file, but only update some parts. For example, you will often have created your own materials and don't need to original materials from the FBX file. You can now choose which parts of a model file you wish to import, model, animations, materials or textures.

## In other news

### Project Settings

You can now access your project settings directly in the Editor. Click the settings cog to see the update settings panel.

### Script Uploading

You can now upload scripts from your computer into the asset panel.

### Model meta data

[![Model Meta](/assets/media/model-meta.jpg)](/assets/media/model-meta.jpg)

When you upload a model, we now show you properties like the number of vertices and mesh instances in the asset properties.

### Asset References

[![Asset References](/assets/media/editor-asset-references.png)](/assets/media/editor-asset-references.png)

If you right-click an asset in the asset panel. There is references option which will tell you everywhere in the scene where that asset is currently used.

Don't be put off by the dry sounding tech-talk these are great new features which will make you more productive. [Get into the Editor and give them a try](https://playcanvas.com/).

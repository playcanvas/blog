---
author: dave
comments: true
date: 2019-01-14 22:55:41+00:00
layout: post
link: https://blog.playcanvas.com/version-control-in-playcanvas/
slug: version-control-in-playcanvas
title: Version Control in PlayCanvas
categories:
  - News
tags:
  - editor
  - version-control
---

One of our most requested features has always been for more advanced version control features. We're very pleased to announce that from today we now have built in version control throughout the PlayCanvas Editor. Integrated support for branches, merging and checkpoints brings a host of new workflow options for your team and we're confident that it's going to be a huge productivity multiplier for your HTML5 games and 3D applications.

## How does it work?

### Checkpoints

Checkpoints take a snapshot of your project at a moment in time. This lets you restore previous versions or just see a timeline of what changes are being made by each member of your team.

![Version Control Panel](/assets/media/editor-version-control-panel.jpg)

### Branches

Like other version control systems with PlayCanvas you can create independent lines of development by creating branches. Branches let you or your team work on changes and features that don't affect your main product development.

![Branch and Merge](/assets/media/merging-checkpoints-3-1024x366.png)

### Merging

Once you've finished work in your branch, you'll want to merge you branch back into your production development. We've got a sophisticated merging interface that let's you merge your code, scenes and assets and resolve any conflicting changes in your scenes and code.

![Conflict Manager](/assets/media/editor-version-control-conflict-manager.jpg)

We've been testing the version control features over the last few months and we know you're going to love them. Read more about how you can use branches in your project in our [developer docs](https://developer.playcanvas.com/user-manual/version-control/).

## What's next?

We know that our users have specific needs and want to customize their workflows. With branches now available to isolate development, we've unlocked a host of new opportunities that you can try via our API. For starters it's now possible to synchronize your script assets from your PlayCanvas branch into an external source control system like GitHub. Try this yourself via our [Asset REST API](https://developer.playcanvas.com/en/user-manual/api/asset-file/), but we'll be building on these features in the future.

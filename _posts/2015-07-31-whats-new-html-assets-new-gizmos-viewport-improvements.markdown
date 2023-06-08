---
author: dave
comments: true
date: 2015-07-31 14:24:32+00:00
layout: post
link: https://blog.playcanvas.com/whats-new-html-assets-new-gizmos-viewport-improvements/
slug: whats-new-html-assets-new-gizmos-viewport-improvements
title: What's new? HTML Assets, New Gizmos, Viewport improvements
categories:
  - News
---

It's been a busy few weeks at PlayCanvas towers. We've launched a bunch of new features today and over the last few weeks. So here's a quick summary:

## 3D view updates

[![Collision Mesh](/assets/media/doom-collision.jpg)](/assets/media/doom-collision.jpg)

Today we released a whole bunch of changes to the editor, with a focus on making the viewport simpler, better, and easier to use. We've de-cluttered by turning off camera, light and collision gizmos unless you have the entity selected. We've also added a proper view for the collision mesh type so you can see just how many triangles your colliding against :-)

Also, we've added convenient icons for all the entity types, so you can see and select everything from inside the viewport.

[![icons](/assets/media/icons.jpg)](/assets/media/icons.jpg)

## HTML and CSS assets

You can now upload .html and .css files as assets. This is incredibly useful when you want to build UIs as part of your applications. No more HTML and CSS in strings.

**Collaborative editing**

We've also got full collaborative editing for text based assets, that is: HTML, CSS, text and JSON files. This means you can comfortably edit with a friend where ever they are in the world.

## Project Export / Import

A heavily requested feature for our enterprise users is the ability to take a complete back up of everything you've got in PlayCanvas. So for ORG level account holders, we've added the Project Export feature. From the new projects interface, use the drop down to select Export Project and you'll get a link to a zip file containing everything in your projects. Assets, Scenes, Scripts, etc.

[![Project Export](/assets/media/project-export.png)](/assets/media/project-export.png)

Importing is just as simple, on the same page you'll see an import project button. Use this to upload the zip file you received from exporting and we'll create a new project with all the data from the archive.

## Custom Loading Screens

Another feature for the ORG user's. Sometimes you've got a client who just doesn't want to see that PlayCanvas logo upfront when loading your application (crazy people!). So now you have access to a custom loading script which lets you do as you please during the preload phase of application loading. You'll find the **Loading Screen** option at the bottom of the Settings panel in the Editor.

## The full list

There have been loads more little bonus features to help you build games and applications using PlayCanvas. Here's a big list.

- Upload HTML and CSS assets types
- Project exporting / importing [ORG Plans]
- Custom loading screens [ORG Plans]
- New projects tab
- Online Collaborative Editing for HTML, CSS, text and JSON assets
- De-clutter viewport by hiding gizmo's for unselected entities
- Added gizmo for collision component of `asset` type, now it renders asset on top with overlay
- Improved gizmos for spot lights.
- Added icons to entities without model
- Added icons size setting to designer settings (bottom left corner)
- Fixed focusing, now it takes in account children entities
- Right mouse button now does only look around, and ignores any picking and gizmo interactions
- Renaming entity by double clicking in a tree.
- Icon `*` visible on top right corner of each asset in an asset panel, when asset is considered as "possibly unused".
- Added `skyboxIntensity` and `skyboxMip` selectors to Scene Settings.
- Added UV Selector for textures in material inspector
- Added Use Vertex Color for each slot to material inspector, it will use vertex color instead of texture for that particular slot

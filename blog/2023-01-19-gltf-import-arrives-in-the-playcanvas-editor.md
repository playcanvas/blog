---
author: will
comments: true
date: 2023-01-19 16:26:37+00:00
layout: post
link: https://blog.playcanvas.com/gltf-import-arrives-in-the-playcanvas-editor/
slug: gltf-import-arrives-in-the-playcanvas-editor
title: glTF 2.0 Import Arrives in the PlayCanvas Editor
categories:
  - News
tags:
  - editor
  - gltf
---

We are excited to announce a major update for the PlayCanvas Editor: **glTF 2.0 import**. This new feature allows users to easily import and use 3D models created in other applications such as Blender and SketchUp, as well as from digital asset stores like Sketchfab, directly into the PlayCanvas Editor.

<div className="iframe-container">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/70f5oC9wvHU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

_Model by Loïc Norgeot and mosquito scan by Geoffrey Marchal for Sketchfab licensed under CC BY 4.0  
Author: [Sketchfab](https://sketchfab.com/Sketchfab) License: [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/) Source: [Mosquito in Amber](https://sketchfab.com/3d-models/real-time-refraction-demo-mosquito-in-amber-37233d6ed84844fea1ebe88069ea58d1)_

[glTF](https://www.khronos.org/gltf/) (GL Transmission Format) is a file format developed by The Khronos Group for 3D models that is quickly becoming the industry standard. It is an open format that is designed to be efficient and easy to use, making it the perfect choice for use in the PlayCanvas Editor.

The PlayCanvas Editor and run-time now supports the full glTF 2.0 specification, including 100% of ratified glTF extensions (such as sheen, transmission, volume and iridescence). This means that developers can import and use high-quality 3D models and take advantage of the latest advancements in the glTF format to create truly stunning interactive experiences.

One of the major benefits of glTF import is the ability for users to edit glTF materials in the PlayCanvas Editor's powerful Material Inspector. Here you can see the famous Stanford Dragon imported from GLB with refraction properties edited live in the Inspector:

<div className="iframe-container">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/KKUvYy1Dyz8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

_The dragon model based on the one from [Morgan McGuire's Computer Graphics Archive](https://casual-effects.com/data). Original dragon mesh data based on a [Stanford Scan](http://www.graphics.stanford.edu/data/3Dscanrep/) © 1996 Stanford University._

Once a glTF model is imported into the editor, all of its materials are available to be tweaked and customized. This added flexibility and control will greatly enhance the workflow of developers and allow them to tweak the appearance of assets without having to fire up Blender.

Another great benefit of the new glTF import feature is its integration with PlayCanvas' Template system. The PlayCanvas Template system allows developers to create reusable and modular components that can be trivially reused across multiple scenes. With the integration of glTF import, developers can now import their 3D models and scenes, and then directly edit the hierarchy, attaching scripts and other component types to the imported scene nodes. This will allow them to create complex and interactive 3D scenes quickly and easily, with minimal coding.

Additionally, the glTF import feature is also integrated with PlayCanvas' animation system. The PlayCanvas animation system allows developers to create and control animations on their entities and characters. When importing animated glTF/GLB, developers can now quickly set up an Animation State Graph to build simple loops or complex transitions. This will allow them to create more dynamic and interactive 3D scenes, with minimal effort. Check out how it can be done in just a few seconds:

<div className="iframe-container">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/XE6nBFfWawU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

_[CC0](https://creativecommons.org/publicdomain/zero/1.0/): Low poly fox [by PixelMannen](https://opengameart.org/content/fox-and-shiba) [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/): Rigging and animation [by @tomkranis on Sketchfa](https://sketchfab.com/models/371dea88d7e04a76af5763f2a36866bc).  
glTF conversion [by @AsoboStudio and @scurest](https://github.com/KhronosGroup/glTF-Sample-Models/pull/150#issuecomment-406300118)_

In short, glTF import is a major addition to the PlayCanvas Editor, and will greatly enhance the workflow of our users. It allows developers to:

- Faithfully import glTF/GLB files from many different applications and stores.

- Edit the materials and hierarchy of imported glTF/GLB files.

- Import glTF/GLB animations and quickly configure loops and transitions.

We are thrilled to bring this new feature to our users and we can't wait to see the amazing projects that will be created with it. If you have any questions or feedback, please let us know on our [community forum](https://forum.playcanvas.com/t/glb-gltf-2-0-import-for-playcanvas-is-live/29341).

Thank you for choosing PlayCanvas, and happy creating!

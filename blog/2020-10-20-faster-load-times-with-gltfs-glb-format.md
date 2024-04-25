---
authors: steven
date: 2020-10-20 13:20:40+00:00
slug: faster-load-times-with-gltfs-glb-format
title: Faster Load Times with glTF's GLB Format!
categories:
  - News
tags:
  - editor
  - gltf
  - graphics
  - performance
---

The PlayCanvas team is super excited to announce the Editor support of glTF GLB conversion with model and animation imports.

This gives developers an **order of magnitude reduction in load times** compared to the JSON format while keeping similar gzipped download size.

![JSON vs GLB](/img/json-vs-glb.gif)

Using the [Stanford Dragon model](http://graphics.stanford.edu/data/3Dscanrep/) (2,613,679 vertices, 871,414 triangles), we can compare GLB and JSON parse times on a Macbook Pro 16 inch.

The JSON format took over 3 secs just to parse the data, a peak memory usage of ~498 MB and a gzipped package size of 28.1MB.

[![JSON Load Time](/img/performance-json.png)](/img/performance-json.png)

GLB speeds ahead taking only **0.193 secs which is 17x faster**, uses a peak of **~25.2 MB** of memory and a gzipped package size of **25.7MB**! 🚀

[![GLB Load Time](/img/performance-glb.png)](/img/performance-glb.png)

That’s a huge saving in time and means applications will become snappier and more responsive to users, especially for content heavy games and product showcases.

We will be deprecating the use of JSON and the default format that model and animations files. Newly created projects will default to converting to GLB and in existing projects, this can be enabled in the projects settings:

![Convert to GLB](/img/editor-convert-to-glb.png)

If you would like to replace your current JSON assets with GLB, the [User Manual](https://developer.playcanvas.com/user-manual/assets/importing/) has more information about the process to migrate over.

The conversion to GLB supports the importing of multiple animations in a single FBX which will help improve content workflows.

![Import Multiple Animations](/img/editor-import-multiple-animations.gif)

Remember our [awesome glTF 2.0 Viewer](https://blog.playcanvas.com/playcanvas-launches-gltf-2-0-viewer-tool/)? That is now integrated into the Editor to inspect any GLB asset from the project. Just right and select ‘Open In Viewer’!

![Open In Viewer](/img/editor-open-in-viewer.gif)

Also, we have exposed [Animation Import Settings under Asset Tasks](https://developer.playcanvas.com/user-manual/assets/animation/) in project settings. These will allow developers to adjust a balance between animation quality and fidelity against file size.

![Animation Import Settings](https://developer.playcanvas.com/images/user-manual/assets/animation/animation-import-settings.png)

Our next steps are to add support for viewing and editing a model hierarchy in the Editor which will lead onto support for the importing of GLB files.

The team is hard at work designing and implementing these features so watch this space!

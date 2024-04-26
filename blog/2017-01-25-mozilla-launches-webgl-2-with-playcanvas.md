---
authors: will
slug: mozilla-launches-webgl-2-with-playcanvas
title: Mozilla Launches WebGL 2 with PlayCanvas
tags:
  - demo
  - partnership
  - webgl
---

Today is a huge milestone for real-time graphics on the web. Mozilla has launched Firefox 51, the first browser to bring WebGL 2 to the masses. WebGL has been around since 2011, the year when PlayCanvas was founded. 6 years on, the open standard for web graphics has taken a huge leap forwards, exposing far more GPU capabilities to developers, making for ever richer, more beautiful experiences.

To mark the launch of WebGL 2, Mozilla and PlayCanvas have teamed up to build 'After the Flood'.

<div className="iframe-container">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/paCu1qEK-RI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[EXPERIENCE 'AFTER THE FLOOD' NOW](http://aftertheflood.playcanvas.com)

'After the Flood' illustrates many of the key, new aspects of WebGL 2.

- **Transform feedback:** to animate leaf particles on the GPU.
- **3D Textures:** used to create procedural clouds.
- **HDR rendering with MSAA:** for correct blending of antialiased HDR surfaces.
- **Hardware PCF:** for better shadow filtering at a lower cost.
- **Alpha to coverage:** to render antialiased foliage.
- ...and much more.

So how was all of this done? As you know, PlayCanvas is an open source game engine. All of the work to integrate WebGL 2 into the engine [can be found on GitHub](https://github.com/playcanvas/engine/pull/784).

Other key demo features are:

- **Compressed textures:** DXT, PVR and ETC1 are used to reduce VRAM usage.
- **Asynchronous asset streaming:** to get the demo loading faster.
- **Runtime lightmap baking:** to generate realistic shadows that render fast.
- **Procedural water ripples**
- **Planar mirrors**

As you can see, PlayCanvas is all about squeezing the full potential from the browser. PlayCanvas apps, like 'After the Flood', look beautiful, load fast and perform great.

So what's next? First, we will refactor and merge our WebGL 2 work into PlayCanvas' mainline codebase. Then we will enable 'After the Flood' on mobile. And finally, we will make the demo project public so you can see exactly how we made it:

![After the Flood](/img/editor-after-the-flood.png)

Want to get creative with WebGL yourself?  Why not [get started with PlayCanvas](https://playcanvas.com) today?

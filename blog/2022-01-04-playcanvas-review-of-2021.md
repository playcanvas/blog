---
author: will
comments: true
date: 2022-01-04 17:56:15+00:00
layout: post
link: https://blog.playcanvas.com/playcanvas-review-of-2021/
slug: playcanvas-review-of-2021
title: PlayCanvas Review of 2021
categories:
  - News
---

Happy New Year to you all!

In 2021, we marked the 10th anniversary of PlayCanvas. In that time, we have seen WebGL become the world's standard for web graphics, implemented into every major web browser. And we have done our part to help make WebGL content creation both easy and fun!

2021 was definitely our most productive year yet. The platform has continued to evolve, delivering a host of new features and performance improvements. Let's take a look at some of the highlights:

## Tools Updates

As you might expect, the vast majority of PlayCanvas users build their applications in the Editor. Perhaps the biggest Editor-related story this year was the release of our new [Editor API](https://developer.playcanvas.com/user-manual/designer/editor-api/) that allows you to automate certain operations in the Editor front-end. And this is just the first step. We will be fleshing out the Editor API further in 2022 with the goal of building a fully fledged plugin system. Stay tuned for updates on that.

The Code Editor also received a major upgrade this year when [we switched from CodeMirror to Monaco](https://blog.playcanvas.com/upcoming-code-editor-upgrade-to-monaco/), the text editor that powers Visual Studio Code. So if you were already a VS Code user, you should feel right at home in the new Code Editor. It brings better performance for handling large text files, better code completion, a powerful command palette and even theme selection.

Animation tooling also received a huge boost in 2021 with the introduction of the [Anim State Graph Editor](https://blog.playcanvas.com/introducing-the-anim-state-graph/).

[![](/assets/media/animation-and-graph.gif)](/assets/media/animation-and-graph.gif)AnimStateGraph Editor

You now have the ability to author anything from simple animation cycles to advanced locomotion systems. Check out how indie developer Cem Demir is using the new animation system in his forthcoming multiplayer survival game:

<blockquote class="twitter-tweet"><p lang="und" dir="ltr">👀 !? <a href="https://t.co/QD2CDyAzhT">pic.twitter.com/QD2CDyAzhT</a></p>&mdash; Cem (@cemdemir) <a href="https://twitter.com/cemdemir/status/1469791447134220289?ref_src=twsrc%5Etfw">December 11, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

With all of the front-end updates to the Editor, don't think that we have neglected the back-end! Throughout 2021, we have been diligently rebuilding the platform's back-end to be more reliable, scalable and responsive. Users around the globe should now be experiencing Editor and Launch Page load times that are up to 50% faster. In addition, asset related jobs should now complete faster meaning you can focus on building with less time waiting.

Aside from the Editor, one of the coolest new tools we released this year was the [Engine Examples Browser](https://playcanvas.github.io/). This is a coding playground for learning and experimenting with the PlayCanvas Engine API. And naturally, it's fully open sourced on [GitHub](https://github.com/playcanvas/engine/tree/dev/examples#readme).

{% include video.html src="/assets/media/examples-browser.mp4" %}
_Engine Examples Browser_

Back in the summer, we [announced](https://forum.playcanvas.com/t/rfc-shader-editor/20616) our new Node-based Shader Editor. This is a new and accessible way to build custom shaders for your PlayCanvas application.

{% include video.html src="/assets/media/shader-editor.mp4" %}
_Node-based Shader Editor_

We're nearing the end of the closed beta and in the coming months, we will kick off an open beta and fully open source the tool.

The [PlayCanvas Viewer](https://playcanvas.com/viewer) is our open source 3D model viewer tool. In 2021, it received a number of important improvements. First up, as well as glTF files, the viewer can now also load VOX files (for voxel based scenes constructed in tools like MagicaVoxel). We also improved skeletal visualization as well as skybox handling. Check it out on [GitHub](https://github.com/playcanvas/playcanvas-viewer)!

{% include video.html src="/assets/media/gltf-viewer-vox.mp4" %}
_PlayCanvas glTF Viewer_

## Graphics Engine Enhancements

Let's be honest - everybody loves beautifully rendered pixels. So let's examine how PlayCanvas' graphics engine has advanced this year. First up, we have area lights that allow lights to adopt a physical shape: rectangle, circle or sphere. Later in the year, we released a preview or our new clustered lighting pipeline, which essentially increases the number of dynamic lights you can place in your scenes. With both features combined, the engine can now process clustered area lights as our [new engine example](https://playcanvas.github.io/#/graphics/clustered-area-lights) demonstrates.

{% include video.html src="/assets/media/engine-clustered-area-lights.mp4" %}
_Clustered Area Lights_

You can expect clustered lighting to fully replace the existing lighting system in early 2022 once it has been thoroughly beta-tested.

PlayCanvas' run-time lightmapper received a major upgrade this year. Previously, it was only able to bake direct light to lightmaps and while this could speed up scene load and render times, direct lighting alone struggles to deliver high quality visuals. Now, it can generate soft shadows and bake ambient occlusion. Check out the [new engine example](https://playcanvas.github.io/#/graphics/lights-baked-ao) that shows off these amazing new capabilities:

[![](/assets/media/soft-shadows.gif)](/assets/media/soft-shadows.gif)

Lastly, we implemented cascaded shadows maps that dramatically boosts shadow quality for large-scale environments. It didn't take long for the community to start showcasing the benefits:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Testing the dev branch that adds support for cascaded shadow mapping in the <a href="https://twitter.com/playcanvas?ref_src=twsrc%5Etfw">@playcanvas</a> engine, couldn&#39;t resist😇! Many thanks to <a href="https://twitter.com/ValigurskyM?ref_src=twsrc%5Etfw">@ValigurskyM</a> for this excellent PR.<a href="https://twitter.com/hashtag/webgl?src=hash&amp;ref_src=twsrc%5Etfw">#webgl</a> <a href="https://twitter.com/hashtag/shaders?src=hash&amp;ref_src=twsrc%5Etfw">#shaders</a> <a href="https://twitter.com/hashtag/gamedev?src=hash&amp;ref_src=twsrc%5Etfw">#gamedev</a> <a href="https://twitter.com/hashtag/indiedev?src=hash&amp;ref_src=twsrc%5Etfw">#indiedev</a> <a href="https://t.co/cczf16UzYt">pic.twitter.com/cczf16UzYt</a></p>&mdash; Leonidas (@PlayingInCanvas) <a href="https://twitter.com/PlayingInCanvas/status/1396915456028647426?ref_src=twsrc%5Etfw">May 24, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Open Source FTW

The PlayCanvas team are huge advocates of open source. The [Engine runtime](https://github.com/playcanvas/engine) was originally open sourced way back in [June 2014](https://blog.playcanvas.com/playcanvas-goes-open-source/). Today, it has 6,932 stars,1,095 forks and 96 individual contributors (who we want to thank for all their incredible contributions). Simply put, PlayCanvas would not be what it is today without our amazing open source community.

2021 saw us double down on our open source mission with an explosion of new and updated OSS projects:

- [Editor API](https://github.com/playcanvas/editor-api) - the core functionality of the Editor
- [PCUI](https://github.com/playcanvas/pcui) and [PCUI-Graph](https://github.com/playcanvas/pcui-graph) - a front-end framework for building powerful browser-based tools
- [Observer](https://github.com/playcanvas/playcanvas-observer) - an implementation of the observer pattern for web application development
- [PlayCanvas Viewer](https://github.com/playcanvas/playcanvas-viewer) - a fast and lightweight 3D model viewer

As mentioned above, the new Shader Editor will be joining this list in 2022. And we shall continue to open source more and more of our technology over time.

## 2021 Content Picks

We have been blown away by the incredible content the community has created. Browser and messenger games, 3D configurators, VR and AR apps, playable ads and more. We recently published an updated PlayCanvas Showcase video that highlights some of the best examples:

<div className="iframe-container">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/FrUUrVRpbzg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Our top picks for 2021 are:

- [Snap Games](https://www.youtube.com/watch?v=zlbRDJhUXwE) - Snapchat's HTML5 gaming platform featuring new arrivals such as Hole.io and Aquapark
- [Bullet Bonanza](https://www.bulletbonanza.io/) - Frenetic online multiplayer game made by Kiloo
- [Fjällräven Kånken](https://www.fjallraven.com/uk/en-gb/bags-gear/kanken/kanken-bags/kanken-me) - Backpack configurator made by Animech
- [The Crypt](https://www.crypt.art/) - NFT gallery made by Kuva

For more PlayCanvas examples, check out the [Awesome List](https://github.com/playcanvas/awesome-playcanvas#blockchaincryptonft).

## What's In Store for 2022?

We already provided some hints about our 2022 roadmap. The Shader Editor makes its debut in Q1. The Editor's Plugin System will appear later in the year. But what else?

PlayCanvas' glTF support will continue to advance. All remaining glTF 2.0 extensions will be implemented and we will finally release a glTF exporter (that you will be able to invoke from the Editor).

WebGPU, the forthcoming successor to WebGL, is also in our sights for 2022. As we continue to push the limits of 3D rendering on the web, WebGPU is a critical part of our plans. So 2022 will see us release an initial proof of concept of WebGPU support and we will share our findings with you as soon as we have them.

For a final peek into PlayCanvas' future, we would like to share our plan to release what we are calling the 'Visual Debugger'. This tool will run in the Editor's Launch Page. You will be able to pause the app, single step it, inspect the hierarchy and entity properties and even edit them in real-time.

We have so much more planned and we will publish a full 2022 public roadmap in the coming weeks. In the meantime, if you have any of your own feature requests, please do log them [here](https://github.com/playcanvas/editor/issues).

Have a wonderful 2022 everyone! Let's make it a great year full of creativity.

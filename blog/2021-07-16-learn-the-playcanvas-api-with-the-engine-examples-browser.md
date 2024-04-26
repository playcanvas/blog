---
authors: will
slug: learn-the-playcanvas-api-with-the-engine-examples-browser
title: Learn the PlayCanvas API with the Engine Examples Browser
tags:
  - examples
---

PlayCanvas has a rich JavaScript API that allows you to build just about any type of interactive content imaginable - games, playable ads, product configurators, AR, VR and more! But learning a new API can be tough. Reading [API reference documentation](https://api.playcanvas.com) is all well and good, but many people prefer to learn by experimentation. And by examining the code of real world examples. This led the PlayCanvas team to build a new application: the Engine Examples Browser.

<div className="iframe-container">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/vv6Hyy8ohMc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Starting exploring the Examples Browser now:

[**https://playcanvas.github.io/**](https://playcanvas.github.io/)

The browser is written entirely in TypeScript and uses a Webpack build process. Naturally, it is 100% open source (MIT license) and the source can be found [here](https://github.com/playcanvas/engine/tree/master/examples).

The Examples Browser has some pretty cool features:

- **Gallery panel.** Select any of the 86 examples from the (filterable) list on the left, either by name or thumbnail.
- **Inspect Source.** Expand the source panel (built on the awesome Monaco code editor) on the right to inspect any example's source code.
- **Edit and hot reload.** Edit any example and hit the Play button to refresh the running example. Monaco uses PlayCanvas' TypeScript definitions to provide inline API hints.
- **Embed links.** Want to embed PlayCanvas examples in your own site? Simply hit the embed icon and copy the URL!
- **Share to Twitter.** Want to share a specific example with the world? Just hit the Twitter icon!

If you would like to request an example to be added to the browser, submit an issue [here](https://github.com/playcanvas/engine/issues). Or if you're feeling creative, submit a pull request of your own to the repo! Stay tuned for newly added examples in the coming months. Enjoy!

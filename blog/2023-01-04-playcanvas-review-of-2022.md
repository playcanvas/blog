---
authors: steven
slug: playcanvas-review-of-2022
title: PlayCanvas Review of 2022
tags:
  - webgl
---

Happy New Year to you all!

As we begin 2023, let’s take a moment to look back at last year’s highlights for PlayCanvas, the powerful WebGL engine and platform for creating interactive web content.

From new features and improvements to exciting projects and partnerships, PlayCanvas has had a busy and successful year. In this review, we will cover some of the key developments and achievements of the platform, and how they have helped to advance the capabilities and potential of WebGL-based content creation.

<!-- truncate -->

### The fantastic work done by you

One of the most exciting aspects of PlayCanvas is seeing the amazing projects and work created by you!

From games and interactive experiences to architectural visualizations and simulations, the PlayCanvas community is constantly pushing the boundaries of what is possible with WebGL.

To celebrate this work, we've created a showcase video with the standout projects and work from 2022.

<div className="iframe-container">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/46f73gp1_TU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[PlayCanvas Showcase 2022](https://blog.playcanvas.com/our-2022-developer-showreel-is-live/)

We are looking to do more of these in 2023 so don't be shy! Share with us and the rest of the community on [Twitter](https://twitter.com/playcanvas), [forums](https://forum.playcanvas.com/) and [Discord](https://discord.gg/RSaMRzg).

We also wanted to take a deeper dive into the creative process and workflows behind these projects.

To do this, we reached out to a selection of developers who have used PlayCanvas to create fantastic content across e-commerce, WebAR, games and the metaverse.

In these [Developer Spotlights](https://blog.playcanvas.com/category/developer-spotlight/), developers share their experience with PlayCanvas, the challenges and solutions they encountered during development, and the unique insights and approaches they brought to their projects.

These interviews provide valuable insights and inspiration for other PlayCanvas users and anyone interested in WebGL-based content creation.

<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
    <div style={{ width: '49%' }}>
        <img src="/img/developer-spotlight-pirron-islands.jpg" alt="Pirron One" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
        <div style={{ textAlign: 'center' }}><a href="https://blog.playcanvas.com/porting-unreal-scenes-to-browser-with-playcanvas-developer-spotlight-with-leonidas-maliokas/">Pirron One: Leonidas</a></div>
    </div>
    <div style={{ width: '49%' }}>
        <img src="/img/developer-spotlight-animech-fjallraven.jpg" alt="Animech" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
        <div style={{ textAlign: 'center' }}><a href="https://blog.playcanvas.com/webar-experiences-developer-spotlight-with-animech/">Animech</a></div>
    </div>
</div>

<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
    <div style={{ width: '49%' }}>
        <img src="/img/v777-nissan-ar.jpg" alt="Pirron One" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
        <div style={{ textAlign: 'center' }}><a href="https://blog.playcanvas.com/webar-experiences-and-playcanvas-developer-spotlight-with-frantz-from-visionaries777/">Visionaries777</a></div>
    </div>
    <div style={{ width: '49%' }}>
        <img src="/img/developer-spotlight-christina-home.jpg" alt="Animech" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
        <div style={{ textAlign: 'center' }}><a href="https://blog.playcanvas.com/webar-experiences-developer-spotlight-with-animech/">Pirron One: Christina</a></div>
    </div>
</div>

### Graphics Engine Enhancements

This year, we've been laser-focused on adding [WebGPU support](https://github.com/playcanvas/engine/issues/3986) and [glTF 2.0 spec compliance](https://blog.playcanvas.com/playcanvas-releases-gltf-viewer-2-0/) to the PlayCanvas graphics engine, and we're thrilled with the progress we've made.

With Google Chrome set to enable WebGPU by default in 2023, we're excited to be at the forefront of the future of interactive 3D content on the web, and we can't wait to see what WebGPU will allow developers to create.

<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
    <div style={{ width: '49%' }}>
        <img src="/img/webgpu-grabpass.gif" alt="WebGPU Grabpass" />
        <div style={{ textAlign: 'center' }}>WebGPU Grabpass</div>
    </div>
    <div style={{ width: '49%' }}>
        <img src="/img/webgpu-clustered-lighting.gif" alt="WebGPU Clustered Lighting" />
        <div style={{ textAlign: 'center' }}>WebGPU Clustered Lighting</div>
    </div>
</div>

In addition to WebGPU support, we've also added support for all ratified glTF 2.0 extensions to the PlayCanvas engine, complete with Editor support for iridescence and dynamic refraction. These features allow developers to create even more realistic and visually stunning 3D content.

[![glTF Asset Viewer](/img/gltf-materials.jpg)](https://playcanvas.github.io/#/graphics/asset-viewer)

But we didn't stop there! We also released Editor support for Clustered Lighting and Area Lights, which allow developers to easily incorporate hundreds of dynamic lights into their projects. And as it turns out, our users have already been using these new features to add extra flair and fidelity to their projects.

<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
    <div style={{ width: '49%' }}>
        <img src="/img/space-rocks-clustered-lighting.gif" alt="Space Rocks" />
        <div style={{ textAlign: 'center' }}>Space Rocks</div>
    </div>
    <div style={{ width: '49%' }}>
        <img src="/img/pirron-pool.gif" alt="Pool Demo" />
        <div style={{ textAlign: 'center' }}>Pirron Pool</div>
    </div>
</div>

### glTF Viewer 2.0 with AR support

[We released a major update to the Model Viewer, taking it to version 2.0](https://blog.playcanvas.com/gltf-viewer-arrives-on-mobile-with-ar-support/)! This update not only improved the user experience, but also added a host of new features.

The most notable new feature is AR support with WebXR (Android) and USDZ export (iOS). This allows users to view glTF models in AR directly from the browser.

<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
    <img src="/img/gltf-viewer-mobile-ar-ios.gif" style={{ width: '49%' }} alt="glTF Viewer AR on iOS" />
    <img src="/img/gltf-viewer-mobile-ar-android.gif" style={{ width: '49%' }} alt="glTF Viewer AR on Android" />
</div>

We've also made the UI more streamlined and mobile-friendly, grouping related functionality together for easier use. Rendering has been improved with the 'High Quality Rendering' option, which enables supersampling to smooth out jagged edges along polygons and high resolution reflections for more realistic rendering.

[![glTF Viwer Lamborghini Urus](/img/gltf-viewer-lamborghini-urus.jpg)](/img/gltf-viewer-lamborghini-urus.jpg)

### Tools Updates

We've been continuously improving the Editor, making it even more powerful and user-friendly for our developers.

These include:

- [Infrastructure upgrades across the board](https://eng.snap.com/playcanvas-backend-infrastructure) with benefits to all users including:
  - Faster download speeds for published build zips across the world.
  - Faster asset delivery with up to 50% improvement in loading projects in the Editor and the Launch Tab.
  - Zero downtime deployment for services.
- [More powerful Scene Hierarchy Search](https://github.com/playcanvas/editor/releases/tag/v1.21.81) that searches components and script names.
- [Creating Texture Tool](https://github.com/playcanvas/editor/releases/tag/v1.21.61) to inspect textures and convert HDRIs to/from cubemaps (also open source!).
- Adding GitHub sign-in.

[The project dashboard has gotten a huge refresh](https://github.com/playcanvas/editor/releases/tag/v1.21.82) and can be accessed in-Editor. It includes searching and sorting of the project list as well as being able to manage teams and settings without leaving the Editor!

[![Project Dashboard](/img/editor-project-dashboard.png)](/img/editor-project-dashboard.png)

[Version Control also got some major features this year](https://github.com/playcanvas/editor/releases/tag/v1.21.30), including the addition of the Item History and Graph View, which make it easier to track changes to your projects. And looking ahead to this year, we're planning to make some of our REST API public, so developers can automate flows for CI and tools.

[![Version Control History](/img/editor-version-control-history.gif)](/img/editor-version-control-history.gif)

### Thank You

As we wrap up our 2022 review of PlayCanvas, we want to take a moment to thank all of our users for their continued support and for the amazing projects and work they have created with PlayCanvas.

Your creativity and innovation inspire us to continue improving and expanding the capabilities of our WebGL engine and platform.

We can't wait to see what the new year brings and the incredible projects and work that our users will create with PlayCanvas. Whether you are new to PlayCanvas or a seasoned pro, we hope that you will continue to be a part of our community and push the boundaries of what is possible with WebGL-based content creation.

Thank you again, and we look forward to seeing what you will accomplish in the new year!

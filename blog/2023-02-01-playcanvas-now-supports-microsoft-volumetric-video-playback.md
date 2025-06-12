---
authors: steven
slug: playcanvas-now-supports-microsoft-volumetric-video-playback
title: PlayCanvas now supports Microsoft volumetric video playback
tags:
  - ar
  - vr
  - webgl
  - webxr
---

<div className="iframe-container">
    <iframe loading="lazy" src="https://playcanv.as/p/d3xb8X2Q/" title="360 lookaround camera" webkitallowfullscreen="true" mozallowfullscreen="true" allow="autoplay" allowfullscreen="true" allowvr="" scrolling="no" frameborder="0" />
</div>

[Open in new tab](https://playcanv.as/p/d3xb8X2Q/)

We are very excited to release our showcase demo for Microsoft Mixed Reality Capture Studios (MRCS) volumetric video technology.

<!-- truncate -->

PlayCanvas now supports MRCS volumetric video with a playback library for captured footage at their studios. Watch it on desktop, mobile with AR or even in a WebXR-enabled VR headset, all from a single URL!

The library can be easily added to any PlayCanvas project and used to create fantastic immersive mixed reality experiences.

### About Microsoft Mixed Reality Capture Studios

<div className="iframe-container">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/sWvn_FHynoc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

MRCS records holographic video - dynamic holograms of people and performances. Your audiences can interact with your holograms in augmented reality, virtual reality and on 2D screens.

They are experts at capturing holographic video, advancing capture technology and have been pioneering its applications since 2010.

[Learn more about Microsoft Mixed Reality Capture Studios here](https://microsoft.com/mrcs).

### How was this created?

The demo was created with a combination of several tutorials and kits available on the [PlayCanvas Developer Site](https://developer.playcanvas.com/), the MRCS playback library and freely available online assets.

You can find the public project for the demo [here](https://playcanvas.com/project/988340/overview/ms-mrcs-holo-video-private). We've removed the URL to the volumetric video file (due to distribution rights) and the proprietary MRCS devkit library. Please [contact MRCS](https://www.microsoft.com/en-us/mixed-reality/capture-studios#primaryR8) to gain access to the library and example videos.

#### Microsoft Video Playback Library

In the folder 'holo video', you will find the scripts and assets needed for playing back volumetric video. You will need to add the devkit library file name 'holo-video-object-umd.js' that will be provided from MRCS to complete the integration and be able to playback video.

[![Holo Video In Assets Panel](/img/holo-video-folder.png)](/img/holo-video-folder.png)

Due to the size and how the data files for the video need to be arranged, they have to be hosted on a separate web server (ideally behind a CDN service like [Microsoft Azure](https://azure.microsoft.com/en-gb/products/cdn/)).

The 'holo-video-player.js' script can be added to any Entity and be given a URL to the .hcap file. At runtime, the script will create the necessary meshes, materials, etc to render and playback the volumetric video.

[![Holo Video Script UI](/img/holo-video-player-script-inspector.png)](/img/holo-video-player-script-inspector.png)

Expect full documentation to be released soon on our site!

#### Creating a Multi Platform AR and VR experience

As you see in the video, we've made the experience available to view in the standard browser, AR on WebXR-enabled mobile devices (Android) and VR on devices like the Oculus Quest. iOS support for WebXR is in progress by the [WebKit team](https://webkit.org/status/#specification-webxr).

This was done by combining several of our WebXR example projects and the scripts and assets can be found in the 'webxr' folder:

[![WebXR Folder In Assets Panel](/img/webxr-folder.png)](/img/webxr-folder.png)

'xr-manger.js' is controls how the XR experience is managed and handled throughout the experience:

- Entering and leaving AR and VR.
- Which UI buttons to show based on the XR capabilities of the device it is running on (e.g hides the VR UI button if AR is available or VR is not available).
- Showing and hiding Entities that are specific to each experience.
- Moving specific Entities in front of the user when in AR so the video can be seen more easily without moving.

#### Adding AR

AR mode was added first, taking the 'xr-manager.js' script as a base from [WebXR UI Interaction tutorial](https://developer.playcanvas.com/tutorials/webxr-ray-input/). Key changes that had to be made to the project were:

- Ensuring ‘Transparent Canvas’ is enabled in the project rendering settings.
- Creating a second camera specifically for AR which is set to render the layers that are needed for AR (i.e. not including the skybox layer) and having a transparent clear color for video passthrough).

After [copying and pasting](https://developer.playcanvas.com/user-manual/designer/assets/#copy-and-paste-between-projects) 'the xr-manager.js' file from the tutorial project into the demo project, I hooked up the UI elements and buttons to enter AR and added extra functionality to disable and enable Entities for AR and non-AR experiences.

This was handled by adding tags to those Entities that the manager finds and disables/enables when the user starts and exits the XR experiences.

For example, I only want the AR playback controls entity to be available in AR so the tag 'ar' was added to it.

[![Entity Tagged With AR](/img/entity-ar-tag.png)](/img/entity-ar-tag.png)

There is also an additional tag 'ar-relative' that is used for entities that need to [move in front of the user](https://playcanvas.com/editor/code/988340?tabs=103708151&line=161) when the floor is found in AR. It provides a much better experience for the user as they don't have to move or look around to find the content.

When the user leaves the AR session, the Entities are [moved back to their original position](https://playcanvas.com/editor/code/988340?tabs=103708151&line=99) that were saved when they entered.

#### Adding VR

This was a little trickier than expected as we didn't have a complete example of the needed functionality and it also had to work with the existing AR functionality.

The goal was for the user to be able to move around holo video and also show the controllers that matched the VR input devices being used.

Our [Starter Kit: VR](https://playcanvas.com/project/435780/overview/starter-kit-vr) has the scripts and functionality to interact with objects, teleport and move around an environment. We can tag entities in the scene with 'pickable' for the VR object picker logic in object-picker.js to test against when the VR input device moves or the select button is pressed.

[![Pickable And Teleportable Tags](/img/webxr-vr-starter-kit-editor.jpg)](/img/webxr-vr-starter-kit-editor.jpg)

Whether it is an object that we can teleport to or interact with is dependent on the other tags on the Entity.

In this case, the aim was to be able to teleport around the video so an Entity with a box render mesh was added to represent the area and 'pickable' and 'teleportable' tags were added too.

Next up was handling how the controllers should look in VR. The starter kit uses cubes to represent the controllers as they are meant to be replaced with something else by the developer.

[![VR Controllers](/img/webxr-vr-starter-kit-controllers.gif)](/img/webxr-vr-starter-kit-controllers.gif)

In my case, I wanted to use skinned hands or the representations of the VR controllers instead. [Max](https://twitter.com/mrmaxm?lang=en) (who built the PlayCanvas WebXR integration) created a project that does just that: [WebXR Controller/Hand Models](https://developer.playcanvas.com/tutorials/webxr-controllerhand-models/). And it was just a matter of merging the code and assets together.

[![WebXR Hand Tracking](/img/vr-controllers-switch.gif)](/img/vr-controllers-switch.gif)

#### Projected skybox

The skybox was obtained from [Poly Haven](https://polyhaven.com/a/orlando_stadium) and converted to a cube map with our [texture tool](https://developer.playcanvas.com/user-manual/assets/cubemaps/#converting-equirectangular-or-octahedral-hdris-to-cubemaps). [Donovan](https://twitter.com/slimbuck7) wrote a shader that projected the cubemap so there was a flat floor that the user could move around in.

It's a nice and easy effect that can be applied in similar scenes without having to build a model or geometry. See the scene without the effect applied (left) and with it (right):

<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
    <img src="/img/normal-skybox.gif" style={{ width: '48%', marginRight: '2%' }} alt="Infinite Skybox" />
    <img src="/img/projected-skybox.gif" style={{ width: '48%' }} alt="Ground Projected Skybox" />
</div>

The shader code is applied by overriding the global engine chunk in [projected-skybox-patch.js](https://playcanvas.com/editor/code/988340?tabs=104640973) on application startup.

#### World Space UI in VR

In VR, there's no concept of 'screen space' for user interfaces so the playback/exit controls would need to be added somewhere in the world.

It was decided the controls should be placed near the holo-video and would always face the user as, generally, that is where their focus would be.

[![VR UI](/img/vr-player-controls-2.gif)](/img/vr-player-controls-2.gif)

This was done by simply having UI buttons in world space as offset child Entities of a 'pivot' Entity. The pivot Entity is positioned at the feet of the holo-video and can be rotated to face the VR camera.

This was done by simply having UI buttons in world space as offset child Entities of a 'pivot' Entity. The pivot Entity is positioned at the feet of the holo-video and can be rotated to face the VR camera.

[![Setting Up UI In Editor](/img/vr-playback-controls.gif)](/img/vr-playback-controls.gif)

There's a [script](https://playcanvas.com/editor/code/988340?tabs=104640973) on the pivot Entity that gets a copy of the VR camera position and sets the Y value to be the same as the pivot Entity's. It then uses that position to look at so that the UI controls always stay parallel to the floor.

The other common place to have UI controls would be somewhere relative to a tracked controller such as on the left hand/controller. I decided against this because it's not always guaranteed that the VR device would have two hands/controllers such as Google Cardboard.

As the 'floor' is just a projected skybox, a solution was needed to render the shadows of the holo-video onto the scene.

#### Shadow 'catcher' material

[Gustav](https://twitter.com/GustavSterbrant) provided a [material shader](https://playcanvas.com/editor/code/988340?tabs=104640973) that would sample the shadow map and make any area that doesn't have a shadow fully transparent.

To make this a bit easier to see, I've shown where the plane would be positioned below. Anywhere where it's white on the floor plane would be fully transparent as there is no shadow being cast there.

<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
    <img src="/img/shadow-catcher-1.jpg" style={{ width: '48%', marginRight: '2%' }} alt="Shadow Receiver Quad" />
    <img src="/img/shadow-catcher-2.jpg" style={{ width: '48%' }} alt="Final Shadow Effect" />
</div>

### Other tutorials used

There is other functionality in the experience that has been taken from our [tutorial/demo project section](https://developer.playcanvas.com/tutorials/) that have been slightly modified for this project.

These include:

- [Orbit Camera](https://developer.playcanvas.com/tutorials/orbit-camera/) for the non XR camera controls. The orbit camera controls are disabled when the camera entity is disabled so that the camera wouldn't move while in a XR session.
- [Video Textures](https://developer.playcanvas.com/tutorials/video-textures/) for the Microsoft video on the information dialog. [It was modified](https://playcanvas.com/editor/code/988340?tabs=104167290) so that it would apply the video texture directly to the Element on the Entity it was attached to.

Although not PlayCanvas related, it is worth shouting out: the awesome QR code (that is displayed if the device is not XR compatible) is generated with [Amazing-QR](https://github.com/x-hw/amazing-qr). It's able to create colorful and animated QR codes that are more interesting and attractive than the typical black and white versions.

[![QR Code](/img/awesome-qr-code.jpg)](/img/awesome-qr-code.jpg)

### Issues found

There were a couple of issues found while this project was being developed. We will be searching for solutions in the near future. For now, we've worked around them in a couple of ways.

In VR, clustered lighting with shadows enabled causes a [significant framerate drop](https://github.com/playcanvas/engine/issues/4762). As the shadows in the project are from the directional light and they are processed outside the clustered lighting system, clustered lighting shadows can be disabled with no visual change.

The demo uses screen space UI in AR and there's an issue with [accuracy of UI touch/mouse events](https://github.com/playcanvas/engine/issues/4776) when trying to press UI buttons. This is because, when the user enters AR, the engine uses a projection matrix that matches the device camera so that objects are rendered correctly relative to the real world.

Unfortunately, the screen-to-world projections are using the projection matrix directly and instead, using the FOV properties on the camera component. The mismatch is what is causing the inaccuracy.

My workaround is to calculate the relevant camera values from the projection matrix on the first AR render frame and apply that back to the camera component. The code can be seen here in [xr-manager.js](https://playcanvas.com/editor/code/988340?tabs=103708151&line=169).

### Wrapping up

If you have reached here, thank you very much for reading and we hope you have found some useful takeaways that you can use in your own projects!

Useful links:

- [Read more about Microsoft Capture Studios](https://www.microsoft.com/en-us/mixed-reality/capture-studios)
- [Open in Editor](https://playcanvas.com/project/988340/overview/ms-mrcs-holo-video-private)
- [Play the Published Build](https://playcanv.as/p/d3xb8X2Q/)

We would love to get your thoughts and feedback so come join the conversation on the [PlayCanvas forum](https://forum.playcanvas.com/t/playcanvas-now-supports-microsoft-volumetric-video-playback/29355)!

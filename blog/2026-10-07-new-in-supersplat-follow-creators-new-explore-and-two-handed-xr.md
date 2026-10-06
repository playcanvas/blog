---
authors: will
slug: new-in-supersplat-follow-creators-new-explore-and-two-handed-xr
title: "New in SuperSplat: Follow Creators, a New Home Page and Two-Handed XR"
unlisted: true
tags:
  - gaussian-splats
  - supersplat
  - webxr
  - vr
  - ar
  - open-source
---

Last month we shipped **[SuperSplat Editor 3.0](/new-in-supersplat-editor-3-0-rebuilt-on-webgpu)**, rebuilt from the ground up on WebGPU. This time most of the work went into [SuperSplat](https://superspl.at) itself. We wanted to make it easier to discover great splats and the people who make them, so you can now **follow creators**, and the **home page** and **search** have been redesigned around how people actually look for splats. The XR side of the viewer got a big upgrade along the way too: step into a scene in VR or AR and **grab it with both hands**.

<!-- truncate -->

### 👥 Follow Creators and Grow Your Audience

Until now, keeping up with a creator on SuperSplat meant remembering their name or bookmarking their profile. That was cumbersome enough that hardly anyone did it.

So we've added **Follow**. Hit the Follow button on a creator's profile, or right from one of their scenes, and their splats show up in a new **Following** tab on the home page. No more hunting around for the people whose work you like, and no more missing a splat from your favorite creators.

<video playsInline autoPlay muted loop controls src='/img/supersplat-follow.mp4' style={{width: '100%', height: 'auto'}} />

It works the other way around as well. If you publish splats, Follow is the easiest way to **grow your audience**: everyone who follows you sees your new scenes without having to go looking for them, and your follower count sits right on your profile so you can watch it grow.

The Following feed is only the first step. Next on our list is a proper **notification system**, along with an overhaul of our dated email notifications, so you can hear about new splats from the people you follow without checking the feed. Only if you want to, of course.

### 🧭 A New Home Page and Search

We've also reworked the home page to make discovering splats easier. Until now, every filter lived in the search bar at the top of the page. That worked once you knew it was there, but new visitors had a hard time figuring out how to find downloadable splats or simply see what was published this week.

The redesigned home page puts those common requests front and center. A **Spotlight** at the top collects the things people ask for most into a row of cards: walkable worlds, free downloads, the best of the week, the all-time greats and our latest news. Below it, the feed is split into **Trending**, **Latest** and **Following** tabs.

Search has a home of its own too. The new **[search page](https://superspl.at/search)** lets you search by keyword and then narrow things down:

- **Walkable** and **Downloadable** filters
- **Time Period**: the past day, week, month or year, or all time
- **Sort by**: Trending, Newest, Oldest, Most viewed, Most liked, Largest or Smallest

You don't even need a search term. Pick a filter or a sort order and browse everything. Every results page has its own URL, so you can share exactly what you found, like the [walkable scenes with the most views this week](https://superspl.at/search?features=walkable&sort=views&time=week). On mobile, the filters fold away into a single **Filters & sort** sheet.

<video playsInline autoPlay muted loop controls src='/img/supersplat-explore-search.mp4' style={{width: '100%', height: 'auto'}} />

Getting around is simpler as well. A new **top bar** replaces the old sidebar, with Explore, Editor, Convert and Resources on the left, search in the middle and **Your Splats** and **Upload** on the right. Upload is now one click away from every page. The Editor and Studio get the whole window to themselves, and a new SuperSplat button in the Editor's menu bar takes you back home.

And if you like splats as you browse, your profile now has a **Likes** tab that collects every one of them. Only you can see it.

### 🥽 Grab Your Splats in XR

Gaussian splats are at their best when you're standing inside them, so we've given the XR mode of the SuperSplat Viewer a serious upgrade. It's live now on every scene on SuperSplat, including the ones embedded on other sites.

The headline is **two-handed manipulation**. Squeeze both grips on your controllers (or make fists with tracked hands) and you can drag, turn and scale the whole scene, anywhere from a fifth of its size to five times bigger. Shrink a cathedral down to a model in front of you or, in AR, put an object scan on your actual coffee table. When you leave the session, the scene returns to where its creator placed it.

<video playsInline autoPlay muted loop controls src='/img/supersplat-xr-two-hand-grab.mp4' style={{width: '100%', height: 'auto'}} />

**Standalone headsets** got a lot faster. On Meta Quest, the viewer now renders within the headset's budget: up to 1 million splats, fixed foveation and a 72 Hz target. Turn on **Performance Mode** in the viewer settings before you enter for even more headroom. Here's a large streamed scene on a Quest 3:

| Quest 3 | Frames per second |
| --- | --- |
| Before | 9.7 |
| Now | 30.7 |
| Now, with Performance Mode | 40.3 |

That's more than three times faster out of the box and four times faster with Performance Mode on. There's plenty more:

- **AR shows your room.** The sky is hidden in AR, so the scene sits in passthrough instead of floating in a skybox. VR keeps it.
- **You start facing the scene.** Sessions begin looking the same way as the camera, so you never start with your back to the action.
- **Scenes look the way their creators intended.** Post effects and tone mapping now carry into XR and are still there when you leave.
- **Look around freely.** Detail is picked by distance alone in XR, so glancing over your shoulder doesn't reveal blurry low-detail splats.
- **Apple Vision Pro** runs XR directly on WebGPU in Safari.

To try it, open any scene in your headset's browser and tap the **VR** or **AR** button in the viewer toolbar.

:::info
SuperSplat renders with WebGPU by default, and XR on Quest currently needs WebGL. The first time you tap VR, the viewer will offer to reload with WebGL. Press OK, then tap VR again.
:::

### 🧰 And More

- **Splat counts on every scene.** Each scene page now shows how many splats it contains, so you can tell at a glance how big a scene is and brag about it when you share. This [4 by 2 km scan of Jastrzębia Góra](https://superspl.at/scene/221ee167) by Andrii Shramko weighs in at 105.9 million splats.
- **Animate your scenes in Studio.** [Studio](https://developer.playcanvas.com/user-manual/supersplat/studio/) now has a **timeline** (press `T`) that works much like the one in the SuperSplat Editor.
- **SuperSplat Editor 3.5.** Repeat your last export with **Re-export** (`Ctrl+Shift+E`), reopen files with **Import Recent**, load big PLY files about 35% faster with a proper progress bar and track down expensive areas of your scene with the new **Overdraw** heat-map in the Overlays panel. The [release notes](https://github.com/playcanvas/supersplat/releases) have the full list.
- **Big uploads just work.** Uploads that take longer than 20 minutes no longer fail, `.spz` and XGRIDS LCC2 files can now be uploaded and scenes over 40 million splats automatically get LODs so they stream smoothly.
- **Render camera animations from the command line.** SplatTransform's new `--camera-track` option renders an animation from your SuperSplat project to image frames, complete with depth of field and motion blur. The [rendering guide](https://developer.playcanvas.com/user-manual/splat-transform/image-rendering/) shows you how.

### 💚 Free and Open Source

SuperSplat, SplatTransform and the PlayCanvas Engine are all **free and open source** under the MIT license. We believe the best tools for 3D on the web should be accessible to everyone, and the best way to make them better is together. Report an issue, open a pull request or just star the repo to show your support. ⭐

- [SuperSplat Editor](https://github.com/playcanvas/supersplat)
- [SuperSplat Viewer](https://github.com/playcanvas/supersplat-viewer)
- [PlayCanvas Engine](https://github.com/playcanvas/engine)
- [SplatTransform](https://github.com/playcanvas/splat-transform)

New to Gaussian splatting on PlayCanvas? Our [Gaussian Splatting documentation](https://developer.playcanvas.com/user-manual/gaussian-splatting/) is the best place to get started.

### 👂 We Want to Hear from You

Head to **[SuperSplat](https://superspl.at)**, follow a few creators and tell us who should be at the top of everyone's list. What should we build next? Come and find us on the [PlayCanvas Discord](https://discord.com/invite/T3pnhRTTAY) or [ping us on X](https://x.com/playcanvas). It's where the world's best splat creators hang out and we'd love to have you there.

See you in there!

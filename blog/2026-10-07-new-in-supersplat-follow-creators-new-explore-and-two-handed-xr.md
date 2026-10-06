---
authors: will
slug: new-in-supersplat-follow-creators-new-explore-and-two-handed-xr
title: "New in SuperSplat: Follow Creators, a New Explore and Two-Handed XR"
unlisted: true
tags:
  - gaussian-splats
  - supersplat
  - webxr
  - vr
  - ar
  - open-source
---

Last month we shipped **[SuperSplat Editor 3.0](/new-in-supersplat-editor-3-0-rebuilt-on-webgpu)**, rebuilt from the ground up on WebGPU. This month is all about the people on superspl.at: the creators making splats and everyone exploring them. You can now **follow your favorite creators** and catch their latest work in a new **Following** feed. Finding those creators is easier than ever with a **redesigned Explore** and a brand new **search page**. And when you find a scene you love, you can step inside it in VR or AR and **grab it with both hands**.

<!-- truncate -->

### 👥 Follow Your Favorite Creators

Some of the best splats on superspl.at come from creators who keep raising the bar with every upload. Until now, keeping up with them meant bookmarking profiles and checking back. Not anymore.

Every profile now has a **Follow** button, along with follower and following counts. You'll find one on every scene page too, right next to the author's name. So when a scene blows you away, it takes one click to make sure you never miss the next one.

<video playsInline autoPlay muted loop controls src='/img/supersplat-follow.mp4' style={{width: '100%', height: 'auto'}} />

Everyone you follow feeds a new **Following** tab on the home page. It shows the public splats of the creators you follow, newest first. There's no algorithm and no ranking, just the latest work from the people you picked. And when you follow someone, their existing splats show up straight away, not only what they publish next.

A few more things worth knowing:

- **Click a follower or following count** on any profile to see who's behind it. Every name links to that creator's profile, which makes it a great way to discover new people.
- **Manage who you follow** from the Following list on your own profile. Unfollow anyone with a click (we'll double-check first) and change your mind just as easily.

Follow lives entirely on SuperSplat. It uses your PlayCanvas account, but following someone here simply means "show me their splats".

### 🧭 A New Explore and Search

superspl.at has had a makeover. The home page now opens with a **Spotlight** carousel of collections that keep themselves fresh:

- **Walkable Worlds**: scenes you can step inside and explore in first person
- **Free Downloads**: CC 4.0 splats you can take home
- **Made With**: a different splat tool worth highlighting each day, and the scenes made with it
- **Best of the Week**: the most viewed splats of the last seven days
- **All-Time Greats**: the most viewed splats ever published

Below the Spotlight, the feed is split into **Trending**, **Latest** and, once you're signed in, **Following** tabs.

Search has a home of its own too. The new **[search page](https://superspl.at/search)** lets you search by keyword and then narrow things down:

- **Walkable** and **Downloadable** filters
- **Time Period**: the past day, week, month or year, or all time
- **Sort by**: Trending, Newest, Oldest, Most viewed, Most liked, Largest or Smallest

You don't even need a search term. Pick a filter or a sort order and browse everything. Every results page has its own URL, so you can share exactly what you found, like the [walkable scenes with the most views this week](https://superspl.at/search?features=walkable&sort=views&time=week). On mobile, the filters fold away into a single **Filters & sort** sheet.

<video playsInline autoPlay muted loop controls src='/img/supersplat-explore-search.mp4' style={{width: '100%', height: 'auto'}} />

Getting around is simpler as well. A new **top bar** replaces the old sidebar, with Explore, Editor, Convert and Resources on the left, search in the middle and **Your Splats** and **Upload** on the right. Upload is now one click away from every page. The Editor and Studio get the whole window to themselves, and a new SuperSplat button in the Editor's menu bar takes you back home.

And if you like splats as you browse, your profile now has a **Likes** tab that collects every one of them. Only you can see it.

### 🥽 Grab Your Splats in XR

Gaussian splats are at their best when you're standing inside them, so we've given the XR mode of the SuperSplat Viewer a serious upgrade. It's live now on every scene on superspl.at, including the ones embedded on other sites.

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
superspl.at renders with WebGPU by default, and XR on Quest currently needs WebGL. The first time you tap VR, the viewer will offer to reload with WebGL. Press OK, then tap VR again.
:::

### 🧰 And More

- **Animate your scenes in Studio.** [Studio](https://developer.playcanvas.com/user-manual/supersplat/studio/) now has a **timeline** (press `T`). Capture keyframes from the current view, choose Play once, Loop or Ping-pong and set the animation to play when visitors open your scene.
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

Head to **[superspl.at](https://superspl.at)**, follow a few creators and tell us who should be at the top of everyone's list. What should we build next? Come and find us on the [PlayCanvas Discord](https://discord.com/invite/T3pnhRTTAY) or [ping us on X](https://x.com/playcanvas). It's where the world's best splat creators hang out and we'd love to have you there.

See you in there!

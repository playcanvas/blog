---
authors: kris
slug: introducing-playcanvas-stage
title: "Introducing PlayCanvas Stage: Point at Your Scene Instead of Describing It"
tags:
  - engine
  - ai
  - open-source
---

**PlayCanvas Stage** is out: an editor where you and your coding agent work on PlayCanvas apps together. Pause your app, click the chair, drag it where it should go, press **Apply**, and the agent writes the change into your source.

No more typing "the chair by the window, a bit further left, and turn it toward the lamp" and hoping the agent picks the right one. Version 0.1.0 is open source and free, for Claude Code and Codex.

<video playsInline autoPlay muted loop controls src='/img/playcanvas-stage.mp4' style={{width: '100%', height: 'auto'}} />

<!-- truncate -->

Stage started with Artifacts in Claude Code. When Anthropic released them I started trying them out: the agent builds a page, it opens in a viewer, and you leave comments on the page itself.

Before long they were a core part of how I design and mock up UI. Instead of writing a paragraph about which button I meant and what was wrong with it, I could click the button and say "this, but smaller". I could target the one area I wanted to adjust or amend, rather than being overly verbose about all of it.

At the same time I was working on making agents behave better with PlayCanvas. That work became the [PlayCanvas Skills](https://developer.playcanvas.com/user-manual/getting-started/use-playcanvas-skills/), task-specific instructions and references that give an agent the right context for the Engine, so it builds apps from the installed API rather than from memory and checks the result in a running app. A lot of it was for Snapchat Web Lenses as well as regular web apps, and the skills are now listed in the Anthropic Directory for Claude Code.

The skills gave the agent better context, but I still had to describe in text what I wanted changed, and in 3D that's where it breaks down. A position is three numbers, "a bit to the left" depends on where the camera is, and "the lamp" might be one of four. What I wanted was the Artifacts workflow, but for 3D apps.

Artifacts already covered docs, slides, design, dashboards and motion, so I built the 3D one. That work split into two plugins, because there turned out to be two different jobs.

The first is [Spatial Artifacts](https://github.com/kpal81xd/spatial-artifacts), a personal project for 3D mockups. You ask Claude for a room, a product or a layout, then orbit it, move things with gizmos and comment on objects, and Claude rebuilds the scene and replies. It's for working out what something should look like before it's an app.

The second is Stage, the full editor, and the one we're releasing today. Stage attaches to your real PlayCanvas app instead, and every edit you make ends up in that app's source.

## What Stage Does

Stage works on your real app. It attaches to the dev server you already run and shows the app in a viewer in your browser, whatever you built it with, with your hot reload still working. If you don't have an app yet, the agent can start one with `create-playcanvas`, which comes with the PlayCanvas Skills, so the agent has the right context from the first prompt.

You use Stage alongside your usual Claude Code or Codex chat, not instead of it. You can keep asking the agent for changes in the chat as you always have, as in the video above, and switch to Stage whenever it's quicker to point at something or move it yourself. Both end up with the same agent, working on the same app.

From there you can make changes by hand. Pause the app, pick up an object and put it where it should go, the same way you would in the PlayCanvas Editor. When it looks right, you hand those edits to the agent and it writes them into your source. You get the speed of laying a scene out by hand, and the result still lives in your code.

<video playsInline autoPlay muted loop controls src='/img/playcanvas-stage-move-scale-undo.mp4' style={{width: '100%', height: 'auto'}} />

For everything you can't do with a drag, you leave a comment, and this is the part that came straight from Artifacts. You point at an object or an area of the scene and say what you want, like "paint this plane yellow with blue wings" or "add a lighthouse on this headland". The agent gets which entity you meant, where you clicked and what you were looking at, does the work and replies in the thread while the app updates in place.

<video playsInline autoPlay muted loop controls src='/img/playcanvas-stage-comment.mp4' style={{width: '100%', height: 'auto'}} />

The lens work is in Stage too. You can preview your app at phone and tablet sizes, or in a Snapchat Web Lens frame that shows where Snapchat's own camera controls will sit, so you can lay a lens out around them. The game in these clips is Parcel Patrol, a Snapchat Web Lens I made with Stage as an example.

<video playsInline autoPlay muted loop controls src='/img/playcanvas-stage-device.mp4' style={{width: '100%', height: 'auto'}} />

Stage doesn't change your project. The only thing that reaches your source is what the agent writes, so when you close Stage you have the same app you started with, to build and ship as usual. It all runs on your machine too, with no telemetry and no outbound requests of its own.

## Try It

Stage is a plugin for Claude Code and Codex, and works with apps on PlayCanvas Engine 2.23 or later. In Claude Code:

```bash
claude plugin marketplace add playcanvas/stage
claude plugin install playcanvas-stage@stage
```

The [Stage documentation](https://developer.playcanvas.com/user-manual/stage/) covers Codex, every control and setting, and the known limitations. 0.1.0 is a prerelease, so expect rough edges.

Stage is MIT licensed and developed in the open at [github.com/playcanvas/stage](https://github.com/playcanvas/stage). If something is broken, missing or awkward, [open an issue](https://github.com/playcanvas/stage/issues), or tell us on [Discord](https://discord.gg/RSaMRzg), the [forum](https://forum.playcanvas.com) or [X](https://x.com/playcanvas).

*Music: "Funky House" (CC0).*

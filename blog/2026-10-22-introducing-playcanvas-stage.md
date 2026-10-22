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

## How It Works

Stage attaches to your app's own running dev server and shows it in a viewer in your browser. It finds the app through the Engine's devtools hook, so it doesn't matter what you built it with, and your hot reload keeps working through it.

If you're starting from nothing, ask for a scene ("build my desk in 3D at real scale") and the agent scaffolds a project with `create-playcanvas`, starts its dev server and opens it in Stage for you. Every project `create-playcanvas` generates comes with the PlayCanvas Skills, so the agent working on your scene has that context from the first prompt.

Press <kbd>⌘</kbd>/<kbd>Ctrl</kbd>+<kbd>P</kbd> and the app pauses: its updates, input and audio stop, and an editor camera takes over. Click an entity to select it, and from there it works like the Editor, with <kbd>1</kbd>, <kbd>2</kbd> and <kbd>3</kbd> switching the gizmo between move, rotate and scale, and <kbd>Ctrl</kbd>/<kbd>⌘</kbd>+<kbd>Z</kbd> to undo. Your edits are saved as you make them and survive reloads, but nothing touches your source yet.

<video playsInline autoPlay muted loop controls src='/img/playcanvas-stage-move-scale-undo.mp4' style={{width: '100%', height: 'auto'}} />

When the layout looks right, press **Apply**. Stage sends the agent one message listing every edited entity, and the agent writes those positions, rotations and scales into your code. In Claude Code you don't need to switch windows: the plugin notices what you sent and wakes the session, so the agent picks the work up on its own. **Discard** puts everything back instead.

<video playsInline autoPlay muted loop controls src='/img/playcanvas-stage-apply.mp4' style={{width: '100%', height: 'auto'}} />

Not every change is a drag, and this is the part that came straight from Artifacts. Press <kbd>C</kbd>, click an object or drag across an area, and type what you want: "paint this plane yellow with blue wings", or "add a lighthouse on this headland". The agent gets the entity's path, the 3D point you clicked and a capture of what you saw, so it knows exactly what you mean.

Press **Send to Agent** and the thread shows how far along it is until the agent replies in it and the app updates in place.

<video playsInline autoPlay muted loop controls src='/img/playcanvas-stage-comment.mp4' style={{width: '100%', height: 'auto'}} />

The lens work is in Stage too. The device menu has a **Snapchat Web Lens** frame that draws Snapchat's own camera controls faintly over the app, so you can lay a lens out around them, alongside phone and tablet viewports. The game in these clips is Parcel Patrol, a Snapchat Web Lens I made with Stage as an example.

<video playsInline autoPlay muted loop controls src='/img/playcanvas-stage-device.mp4' style={{width: '100%', height: 'auto'}} />

The [PlayCanvas Inspector](https://github.com/playcanvas/inspector) opens beside the app, and MiniStats puts frame timings and draw calls over the canvas.

Stage doesn't change your project. It adds its tools when the page loads through it, and the only thing that reaches your source is what the agent writes. Close it and you have the same app you started with, to build and ship as usual. It all runs on your machine too: Stage has no telemetry and makes no outbound requests of its own.

## Getting Started

You'll need Node.js 22.18 or later, Chrome or Chromium, and an app on PlayCanvas Engine 2.23 or later. In Claude Code:

```bash
claude plugin marketplace add playcanvas/stage
claude plugin install playcanvas-stage@stage
```

Or in Codex:

```bash
codex plugin marketplace add playcanvas/stage
codex plugin add playcanvas-stage@stage
```

The [Stage documentation](https://developer.playcanvas.com/user-manual/stage/) covers every control and setting.

0.1.0 is a prerelease, so expect rough edges. Safari may not resolve the `*.localhost` addresses each stage runs on, so open the viewer in Chrome. An app that bundles the Engine into its own code needs one extra line before Stage can find it, and the viewer shows you what to add. In Codex, comments reach an idle session through `codex queue`, which is still experimental in Codex itself.

Stage is MIT licensed and developed in the open at [github.com/playcanvas/stage](https://github.com/playcanvas/stage). If something is broken, missing or awkward, [open an issue](https://github.com/playcanvas/stage/issues), or tell us on [Discord](https://discord.gg/RSaMRzg), the [forum](https://forum.playcanvas.com) or [X](https://x.com/playcanvas).

*Music: "Funky House" (CC0).*

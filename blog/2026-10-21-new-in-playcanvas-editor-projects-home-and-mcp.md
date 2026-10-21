---
authors: kris
slug: new-in-playcanvas-editor-projects-home-and-mcp
title: "New in PlayCanvas Editor: A New Projects Home, and Projects over MCP"
tags:
  - editor
  - projects
  - mcp
  - ai
---

**Editor 2.35** is out, and it changes the first page you see. [playcanvas.com/editor](https://playcanvas.com/editor) is now a projects home of its own: search, stars, forks, project settings, dev logs, organizations and new projects all live there, and every project you open gets its own tab.

The same page is also where an AI agent can now connect over MCP, before any project is open. From there it can list, create, rename and open your projects.

<video playsInline autoPlay muted loop controls src='/img/editor-2-35.mp4' style={{width: '100%', height: 'auto'}} />

<!-- truncate -->

### 🏠 A New Projects Home

The projects page used to be an overlay inside the Editor. In 2.35 it is a standalone page that loads none of the Editor itself, so it opens fast: the bundle behind it went from 3.5 MB to 0.55 MB.

It's laid out like a home rather than a picker. A sidebar has **New project**, **Import project**, your **Recents**, your **Organizations** and your storage. The main panel opens on **Continue editing** with the project you touched last, and below it every project you have, as cards or as a list.

<video playsInline autoPlay muted loop controls src='/img/editor-2-35-projects-home-search-star.mp4' style={{width: '100%', height: 'auto'}} />

Finding a project is quicker too. The search takes filters, `name:`, `owner:`, `desc:` and `is:` (for example `is:starred` or `is:private`), and <kbd>/</kbd> jumps straight to it. Tabs split the list into **All**, **Mine**, **Shared with me**, **Private** and **Starred**, and you can sort by **Last edited**, **Created**, **Name**, **Most played** or **Size**. Every card has a star you can toggle in place, and projects shared with you that you can't edit carry a **Read only** badge. The list view has column headers for forks, views, plays, stars, size and when it was last edited.

The **⋮** menu on each card and row is where the project management that used to live on playcanvas.com ended up: **Open editor**, **Play**, **Project settings**, **Copy link**, **Watch**, **Fork**, **Export**, **Transfer ownership** and **Delete project**.

<video playsInline autoPlay muted loop controls src='/img/editor-2-35-projects-home-fork.mp4' style={{width: '100%', height: 'auto'}} />

**Fork** opens a dialog showing the project you're forking from, with its name and description filled in and an owner picker, and it ends on a **Project ready** dialog. If a project can't be forked (legacy scripts, private source assets you can't edit, or a private project without a paid plan), the dialog says why instead of letting you try. **Transfer ownership** looks the username up as you type, and transfers offered to you show **Accept** and **Decline** right on the card.

Clicking a card opens **Project settings**, with **Dev log** and **Team** beside it. The settings panel now shows where a project was **Forked From** and a 28-day **Activity** strip, and its footer has **Copy link**, **Fork Project** and **Export Project**.

<video playsInline autoPlay muted loop controls src='/img/editor-2-35-projects-home-dev-log.mp4' style={{width: '100%', height: 'auto'}} />

The **Dev log** panel is the dev log from your project's dashboard, without leaving the home: write a post in Markdown, post it, and it renders straight away. You can edit and delete posts from there too.

<video playsInline autoPlay muted loop controls src='/img/editor-2-35-projects-home-organizations.mp4' style={{width: '100%', height: 'auto'}} />

Organizations are managed from the sidebar as well. The **+** next to **Organizations** creates one, with a live preview of its name and URL. Open an organization to see its projects, and its **⋮** menu has **Organization details** and **Delete organization**, which asks you to type the name to confirm.

<video playsInline autoPlay muted loop controls src='/img/editor-2-35-projects-home-new-project.mp4' style={{width: '100%', height: 'auto'}} />

**New project** has two different starting points now. **Empty Project** is a project with nothing in it. **Blank Project**, the default, starts with a skybox, a cube and a plane. The other starter kits are next to them. Whichever you pick, you end on **Your new project is ready. It opens in a new tab.**, and that is the other big change in this release: projects never open in the projects tab. **Open editor** switches to that project's own tab, or opens it if it isn't open yet, and going back to your projects (**All Projects**, <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>O</kbd>, or the **Projects** breadcrumb) switches back without unloading the scene you were in.

A few things moved as a result, in case you go looking for them. The viewport's Home button opens the projects tab, the project dashboard link is now in the logo menu as **Project Dashboard**, and the old overlay's extras (the return-to-editor banner, `is:open`, Esc back to the scene) are gone with it. The [Projects Home docs](https://developer.playcanvas.com/user-manual/editor/projects/projects-home/) walk through all of it.

### 🤖 Projects over MCP

The Editor's [MCP server](https://developer.playcanvas.com/user-manual/editor/mcp-server/) lets an AI agent drive the Editor, and until now it needed a project open in a tab to connect to. 2.35 adds an **MCP server** button to the projects home, next to your account, so the agent can connect before you've opened anything.

<video playsInline autoPlay muted loop controls src='/img/editor-2-35-mcp-projects.mp4' style={{width: '100%', height: 'auto'}} />

With it come five project tools: `list_projects`, `get_project`, `create_project`, `update_project` and `open_project`. They run with your signed-in session, and only a project's name, description, visibility and owner can be set. Anything else is rejected by name. `open_project` moves the tab into the project and the Editor reconnects on load, so the agent can keep going straight into scene work without a click from you.

That's the clip above, with a real Claude Code session on the right. It lists my projects, creates one and renames it, opens it, and then fills the scene with a ring of cubes using the same tools it has always had inside a project.

**Note:** the project tools need a release of the [Editor MCP server](https://github.com/playcanvas/editor-mcp-server) that includes them. At the time of writing that release hasn't been published yet (npm's latest, 0.7.1, predates them), so check the server's releases before trying this.

### 🧩 Also since 2.34

Smaller changes that didn't need a section of their own:

- **Lightmaps** auto-bake again after moves, undo and deletes.
- **Material Alpha Test and Opacity** are shown whenever alpha test is in effect.
- **Particle Pre Warm** stays visible, with a note when Loop is off, and the **particle emitter gizmo** now scales with the entity.
- The **code editor** loads an ESM script's whole import chain, and **asset tag search** is scoped to the current folder.
- The **Inspector** launch option's panel (0.3.0) groups its Memory tab by resource kind, copies anything it shows as JSON from a right-click menu, and edits an entity's transform with fields or a gizmo while the app runs.
- Built on **PlayCanvas Engine 2.23.3**.

Everything else is itemised in the **[2.35.0 release notes](https://github.com/playcanvas/editor/releases/tag/v2.35.0)**.

### 💚 Open Source, Top to Bottom

The Editor frontend, the Engine underneath it and the MCP server that lets agents drive it are all MIT licensed and developed in the open. If something in this release is broken, missing or just awkward to use, the issue trackers and the pull request queues are the shortest routes to fixing it.

- [PlayCanvas Editor](https://github.com/playcanvas/editor)
- [PlayCanvas Engine](https://github.com/playcanvas/engine)
- [PlayCanvas Editor MCP Server](https://github.com/playcanvas/editor-mcp-server)

Just getting started? The [User Manual](https://developer.playcanvas.com/user-manual/editor/) walks through the Editor end to end, and the [Projects documentation](https://developer.playcanvas.com/user-manual/editor/projects/) covers everything the new home does.

### 👂 Tell Us What You Find

The projects home replaces a page that a lot of you open every day, so if something you relied on isn't where you expect it, or the thing you actually needed did not make this release, tell us. The [Discord](https://discord.gg/RSaMRzg) and the [forum](https://forum.playcanvas.com) are where we are, and we are [on X](https://x.com/playcanvas) too.

*Footage: After the Flood, SWOOOP and Seemore (with Arm) by PlayCanvas. Music: "New Sunrise" (CC0).*

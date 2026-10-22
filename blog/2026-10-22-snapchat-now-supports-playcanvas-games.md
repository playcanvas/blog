---
authors: will
slug: snapchat-now-supports-playcanvas-games
title: "Snapchat Now Supports PlayCanvas Games"
description: Snapchat Web Lenses let you publish PlayCanvas games straight into Snapchat. Meet the first games, then build, integrate and publish your own.
image: /img/snapchat-web-lenses-hero.jpg
unlisted: true
tags:
  - game
  - snapchat
  - engine
  - editor
---

import GameSpotlight from '@site/src/components/GameSpotlight';

Big news for PlayCanvas developers: your games can now run inside Snapchat! 🎉 With **Snapchat Web Lenses**, you can build a game with PlayCanvas, upload it as a Lens and put it in front of a huge audience of Snapchatters who love to play.

<div className="iframe-container">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/KWFpxVWrwuc" title="Snapchat Now Supports PlayCanvas Games | Introducing Web Lenses" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

In this post, we'll explain what Web Lenses are, show off four of the first PlayCanvas games on Snapchat and walk you through building and publishing your own.

<!-- truncate -->

## What Are Web Lenses? 🤔

A Web Lens is a web app that runs inside Snapchat as a Lens. You build it with the web technologies you already know, zip up the build output and upload it through [My Lenses](https://my-lenses.snapchat.com/). Snapchat publishes it like any other Lens, so for players, launching your game is as easy as trying a new Lens. And you never have to open Lens Studio.

Games are the first focus for Web Lenses, and mobile web games are a natural fit: they're designed for portrait touchscreens, load fast and stay small. Any web framework can be used, but Snap strongly recommends PlayCanvas as the most capable and best-optimized engine for Web Lenses, and the [Web Lenses documentation](https://developers.snap.com/web-lenses/home) uses PlayCanvas throughout.

:::info[Web Lenses at a glance]

- **What it is:** A web app, packaged as a zip and published as a Snapchat Lens
- **Platforms:** Snapchat for iOS and Android
- **Display:** Full-screen portrait (9:16)
- **Engine:** Any web framework, with PlayCanvas recommended by Snap
- **Package size:** A zip of up to 8 MB, with an `index.html` of up to 1 MB at its root
- **Runtime:** WebAssembly (including multi-threaded), Web Workers and `eval()` are all supported
- **Sandbox:** Self-contained, with no network, camera, microphone or motion sensor access
- **Snapchat features:** Leaderboards, Bitmoji and Storage, via the [Web Lens API](https://developers.snap.com/web-lenses/web-lens-api)
- **Status:** Beta, so details may change

:::

## Why Web Lenses Are a Game Changer 🚀

### Reach a Huge Audience That Loves to Play

Snapchat is used by [971 million people every month](https://www.businesswire.com/news/home/20260803600317/en/Snap-Inc.-Announces-Second-Quarter-2026-Financial-Results), and games are already a big part of how they spend their time: Snap reports that [Game Lenses engage over 175 million people every month](https://ar.snap.com/blog/monetizing-with-snap). Web Lenses open that audience up to web game developers for the first time.

There's no app to install and no store listing to fight for. Your game shows up wherever Lenses do, and players can find it by name or scan its Snapcode to jump straight into play. Built-in leaderboards then give them a reason to keep coming back to beat each other's scores. 🏆

### Monetize Your Games With Lens+ 💰

Lens+ is Snapchat's subscription for fans who want exclusive Lenses. Through [Lens+ Payouts](https://developers.snap.com/lens-studio/monetization/lens-creator-rewards/lens-plus-payouts), creators can mark a Lens as Exclusive to Lens+ and Platinum subscribers and earn a revenue share based on the engagement it receives. In other words, the more your game is played, the more you can earn.

:::tip
Lens+ Payouts is open to creators aged 18+ in eligible countries, and a Lens is enrolled when you submit it. Check the [eligibility requirements](https://developers.snap.com/lens-studio/monetization/lens-creator-rewards/lens-plus-payouts) and apply before you publish!
:::

## Meet the First PlayCanvas Games on Snapchat 🎮

We've been working with some incredibly talented developers on the first wave of PlayCanvas-powered Web Lenses. Grab your phone and scan a Snapcode to play. Your regular camera app works too, and opens the game straight in Snapchat!

### 🌸 Bloom

<GameSpotlight
  title="Bloom"
  studio="NOWWA"
  developer="Yohami Zerpa"
  video="/img/snapchat-web-lenses-bloom.mp4"
  snapcode="/img/snapchat-web-lenses-bloom-snapcode.svg"
>

Bloom is a cozy garden puzzler. Plant potted flowers on the board, match colors to make them bloom and keep your garden growing for as long as you can. When space gets tight, power-ups like shuffle and shears help you dig your way out. 🌷

> "Bloom players spend an average of 260 seconds in the game, and almost 30% of them come back the next day. Most of our players are women, which shows how much room there is on Snapchat for cozy puzzle games."
>
> — Yohami Zerpa

</GameSpotlight>

### 🏀 Ball Smasher

<GameSpotlight
  title="Ball Smasher"
  studio="MetaM"
  developer="Maksims Mihejevs"
  video="/img/snapchat-web-lenses-ball-smasher.mp4"
  snapcode="/img/snapchat-web-lenses-ball-smasher-snapcode.svg"
>

Ball Smasher is a fast-paced street-basketball shooter, currently dressed up in a spooky Halloween skin. Flick balls at hoops that slide across the street, chain baskets together for fiery streaks and beat the clock to post a score that tops the leaderboard. 🏀

> "Ball Smasher was a breeze to build in PlayCanvas Editor. Our tiny team prototyped and tested it in Snapchat within hours. The hyper-casual gameplay hit millions of plays in days. We kept iterating with frequent content and balance updates, seeing results instantly in analytics. Growth stayed fully organic, and we're excited about the monetizing opportunities ahead."
>
> — Maksims Mihejevs

</GameSpotlight>

### 🐍 Snake Showdown

<GameSpotlight
  title="Snake Showdown"
  studio="Elanra Studios"
  developer="Leonidas Maliokas"
  video="/img/snapchat-web-lenses-snake-showdown.mp4"
  snapcode="/img/snapchat-web-lenses-snake-showdown-snapcode.svg"
>

Snake Showdown is a slithery battle for survival on a tropical island. Gobble orbs to grow, grab golden gems and outmaneuver your rivals (heads bounce, but bodies are deadly!) as you race up the rankings before the clock runs out. Keep an eye on the tide, too. 🌊

> "We built Snake Showdown with PlayCanvas, and the first version went from code to live on Snapchat in a single day. In its first four weeks it passed 7 million plays from more than 1.8 million players, who shared it over 100,000 times. And we're just getting started."
>
> — Leonidas Maliokas

</GameSpotlight>

### 🏂 Bitmoji Ski

<GameSpotlight
  title="Bitmoji Ski"
  studio="Snap"
  developer="Iakov Sumygin"
  video="/img/snapchat-web-lenses-bitmoji-ski.mp4"
  snapcode="/img/snapchat-web-lenses-bitmoji-ski-snapcode.svg"
>

Bitmoji Ski puts you on the slopes as your very own Bitmoji. Carve down the mountain, thread the flags for combos and launch off jumps for big air and 360s, all while trying not to bail into the trees! Every run counts toward the leaderboard. ❄️

> "I made Bitmoji Ski to show the PlayCanvas community the kind of game that works well on Snapchat. It loads the player's own Bitmoji, and a leaderboard keeps them coming back for another run. It only took me a day to build, and it has hit 6 million impressions a day!"
>
> — Iakov Sumygin

</GameSpotlight>

## Create a Game in Minutes With Easy Lens 🪄

Got a game idea but don't want to write any code? [Easy Lens](https://easylens.snapchat.com/web-lenses) is Snap's AI Lens creator, and its Web Lens games are powered by PlayCanvas. Describe your game in a prompt and Easy Lens plans it, writes the code and builds it for you in just a few minutes. Every follow-up message refines the same game, so you can keep tweaking until it plays just right. Test it in the browser preview or push it to your phone, then submit it to Snapchat when you're happy. Try it now!

:::note
Creating Web Lenses in Easy Lens is available to Lens+ subscribers on Easy Lens web. Bitmoji, leaderboards and saved progress aren't available in Easy Lens games yet.
:::

## Build Your Own Game With PlayCanvas 🧰

Want full control over your game, plus Bitmoji, leaderboards and storage? Build it yourself with PlayCanvas. Here's how to go from idea to a published Web Lens in five steps.

### 1. Choose Your Workflow

There are two great ways to build with PlayCanvas, and both pair perfectly with AI.

#### Option A: PlayCanvas Engine + Your Favorite LLM

This is the way to go if you prefer to work entirely inside an LLM environment such as Claude Code, Codex or Cursor. A PlayCanvas Engine game is a regular JavaScript project, so your agent can read it, edit it, run it and check the results, while you describe what you want to build.

Scaffold a new project with [`create-playcanvas`](https://developer.playcanvas.com/user-manual/getting-started/start-with-create-playcanvas/):

```bash
npm create playcanvas@latest
```

Or follow Snap's [Build your first Web Lens](https://developers.snap.com/web-lenses/get-started) guide, which sets up PlayCanvas and Vite from an empty folder.

#### Option B: PlayCanvas Editor + MCP Server

If you're coming from Unity or another visual editor, you'll feel right at home in the [PlayCanvas Editor](https://playcanvas.com/products/editor). You get a visual scene hierarchy, an asset pipeline and real-time collaboration, all in the browser. Add the [Editor MCP Server](https://developer.playcanvas.com/user-manual/editor/mcp-server/) and your AI assistant can work alongside you in the Editor, creating entities, writing scripts, wiring up assets and checking the result in the viewport.

Install the server once in your MCP client. For Claude Code, run:

```bash
claude mcp add playcanvas -- npx -y @playcanvas/editor-mcp-server
```

Then open your project in the Editor, select the **MCP** button at the bottom of the toolbar and hit **Connect**. The [MCP Server docs](https://developer.playcanvas.com/user-manual/editor/mcp-server/) cover setup for Codex, Cursor and Claude Desktop too.

### 2. Install the PlayCanvas Skills

[PlayCanvas Skills](https://github.com/playcanvas/skills) teach your AI agent how to build polished PlayCanvas apps, covering app setup, model inspection, animation, scene assembly, game state, lighting, HUDs and effects. They work with Claude Code, Codex, Cursor and other [Agent Skills](https://skills.sh/) clients. Projects created with `create-playcanvas` already include them. To add them to an existing project, run:

```bash
npx skills add playcanvas/skills
```

Start a new conversation afterward so your agent picks them up.

### 3. Build Your Game

Now for the fun part! 🕹️ Describe the game you want and let your agent help you build it. A good prompt states the platform constraints up front:

```text
Build a portrait (9:16) one-thumb arcade game with the PlayCanvas Engine and
Vite, designed to run as a Snapchat Web Lens. Keep the HUD inside the safe
area, use relative asset paths and keep the zipped build under 8 MB.
```

Keep these Web Lens essentials in mind as you go:

- **Design for portrait.** Lenses run full screen at 9:16, and landscape isn't supported.
- **Respect the safe area.** Snapchat draws its own controls over your game, including a close button near the top. Keep your HUD inside `env(safe-area-inset-*)` and test with a large simulated top inset.
- **Bundle everything.** A Lens can't reach the network, so every script, model, texture and sound must ship inside your zip.
- **Stay lean.** Import Engine classes by name (rather than `import * as pc`) so your bundler can drop what you don't use, compress your textures and skip source maps.
- **Handle the basics.** Scale motion by elapsed time (many phones run at 120 Hz), start audio from a user gesture and pause when the Lens is hidden.

You can test your build on a real phone before publishing. Run `npx vite preview --host` and open the network URL in your phone's browser. Check out Snap's [Runtime environment](https://developers.snap.com/web-lenses/runtime-environment) guide for more tips.

### 4. Integrate the Web Lens API

The [Web Lens API](https://developers.snap.com/web-lenses/web-lens-api) connects your game to Snapchat. In an Engine project, install it from npm:

```bash
npm install @snap/web-lens-api
```

In the Editor, copy `snap-api.js` from the package into your project as a script asset and set its **Loading Type** to **Before Engine**. It installs the same API as `window.snapchat`. The API must ship inside your zip, so don't add it under **Settings > External Scripts**.

Call `init()` once at startup, then check that a capability is supported before you use it:

```js
import snapchat from '@snap/web-lens-api';

await snapchat.init();

if (snapchat.isSupported('leaderboards')) {
    // Show your leaderboard button
}
```

Outside Snapchat (in your desktop browser, on a local dev server or on the Editor's Launch page), the API answers from a built-in stub with canned data, so you can develop without a phone. Always keep your game playable when a capability is missing.

Here are the three capabilities in the first release, and how each can make your game better.

#### 🏆 Leaderboards

Nothing says "one more go" like a leaderboard! Leaderboards turn a solo game into a friendly competition and give players a reason to come back and reclaim the top spot. Submit a score at the end of each run and open Snapchat's own leaderboard panel to show where the player ranks:

```js
async function onGameOver(score) {
    if (!snapchat.isSupported('leaderboards')) return;

    try {
        // Scores must be integers
        await snapchat.leaderboards.submitScore({ score: Math.round(score) });
        await snapchat.leaderboards.show();
    } catch (err) {
        // Never let a leaderboard failure end the fun
        console.warn('Leaderboard unavailable:', err.message);
    }
}
```

Higher scores rank first by default. For lower-is-better games like time trials, pass `ordering: 'ascending'` with every submission.

<img src="/img/snapchat-web-lenses-leaderboard.jpg" alt="Snapchat's leaderboard panel open over the Ball Smasher game over screen" style={{display: 'block', width: '100%', maxWidth: '360px', height: 'auto', margin: '0 auto'}} />

<p style={{textAlign: 'center'}}><em>Snapchat's leaderboard panel in Ball Smasher</em></p>

And the competition doesn't stop when the Lens closes. When a friend beats a player's score, Snapchat can send them a notification inviting them back to reclaim their spot, which is a powerful way to bring players back day after day. 🔔

<img src="/img/snapchat-web-lenses-leaderboard-notification.jpg" alt="A Snapchat lock screen notification from Bitmoji Ski reading: Maksims Mihejevs beat your score. Think you can top their score?" style={{display: 'block', width: '100%', maxWidth: '560px', height: 'auto', margin: '0 auto', borderRadius: '12px'}} />

<p style={{textAlign: 'center'}}><em>A leaderboard notification from Bitmoji Ski</em></p>

#### 😎 Bitmoji

Let players star in your game as themselves! The Bitmoji capability gives you the player's Bitmoji as a rigged 3D GLB model or as a head-and-shoulders 2D image. Use the 3D avatar as a playable character, and the 2D image for profile badges, scoreboards or dialogue portraits. In PlayCanvas, the 3D avatar loads as a `container` asset:

```js
import { Asset } from 'playcanvas';

// Resolves to the player's Bitmoji, or null to use your bundled default character
async function loadBitmoji(app) {
    // The desktop stub returns an empty placeholder avatar, so skip it there
    if (!snapchat.isSupported('bitmoji') || snapchat.isStub) return null;

    const { hasAvatar } = await snapchat.bitmoji.getAvatarInfo();
    if (!hasAvatar) return null;

    // The URL expires after about five minutes, so load it right away
    const { url } = await snapchat.bitmoji.get3DAvatar();
    const asset = new Asset('bitmoji', 'container', { url });
    app.assets.add(asset);

    return new Promise((resolve, reject) => {
        asset.ready(() => resolve(asset.resource.instantiateRenderEntity()));
        asset.once('error', reject);
        app.assets.load(asset);
    });
}
```

Bitmoji avatars use Snap's own rig and ship without animations, so author your clips on the Bitmoji rig and play them with an `anim` component. Always bundle a default character too, for players without a Bitmoji and for when you're developing against the stub. Snap's [Bitmoji guide](https://developers.snap.com/web-lenses/bitmoji) has the details.

<img src="/img/snapchat-web-lenses-bitmoji.jpg" alt="A player's Bitmoji standing on a snowboard on the Bitmoji Ski title screen" style={{display: 'block', width: '100%', maxWidth: '360px', height: 'auto', margin: '0 auto'}} />

<p style={{textAlign: 'center'}}><em>Bitmoji Ski puts the player's own Bitmoji on the slopes</em></p>

#### 💾 Storage

Here's a gotcha: inside a Lens, `localStorage` and IndexedDB start empty every time the Lens opens. To keep progress between sessions, use the Storage capability, a small key-value store tied to the player's Snapchat account. That's perfect for unlocks, levels, best scores, settings and daily streaks, the kinds of things that turn a one-off play into a habit.

```js
async function loadProgress() {
    if (!snapchat.isSupported('storage')) return null;

    const result = await snapchat.storage.get('progress');
    return result.found ? result.value : null;
}

async function saveProgress(progress) {
    if (!snapchat.isSupported('storage')) return;

    await snapchat.storage.set('progress', progress);
}
```

Each value can be any JSON up to 32 KiB, with 100 KiB in total per Lens per player. Wait for your first read before writing, save whenever progress changes and when the page is hidden (players can swipe a Lens closed at any moment), and keep just one write in flight at a time.

### 5. Publish to Snapchat

Once your game is ready, it's time to ship it! 🚢

1. **Build your game.** Run `npm run build` for an Engine project, or download a build from the Editor's **Publish** dialog.
2. **Zip the build.** Zip the *contents* of your build folder so `index.html` sits at the root, not the folder itself. On Windows, avoid PowerShell's `Compress-Archive`, which writes backslashes that break relative paths. Check the result with `unzip -l` and confirm it's under 8 MB.
3. **Upload it.** Sign in to [My Lenses](https://my-lenses.snapchat.com/), create a new Lens, choose the Web Lens option and upload your zip.
4. **Add your Lens details.** Give your game a name, a 512 × 512 PNG icon and a 5-second, 720 × 1280 preview video showing its most exciting moment.
5. **Submit for review.** Once approved, your game is live in Snapchat for players to find by name or Snapcode!

Snap's [Platform requirements](https://developers.snap.com/web-lenses/requirements) and [Publishing](https://developers.snap.com/web-lenses/publishing) guides have the full checklist and asset specs.

## Join the Community 💬

We can't wait to see what you build! Here's how to connect with us and other Web Lens developers:

- **Join the [PlayCanvas Discord](https://discord.gg/RSaMRzg)** and head to the **#snapchat-web-lenses** channel to ask questions, share progress and get feedback.
- **Show off your game!** When you share your Web Lens on social media, tag PlayCanvas on [X](https://x.com/playcanvas) and [LinkedIn](https://www.linkedin.com/company/playcanvas) and we'll help amplify it to the community.

Happy building, and see you on Snapchat! 👻

---
authors: dave
date: 2012-08-19 12:40:08+00:00
link: https://blog.playcanvas.com/html5-apis-for-game-developers/
slug: html5-apis-for-game-developers
title: HTML5 APIs for game developers
categories:
  - Technology
tags:
  - html5
---

One of the best and worst things about making games for web browsers is that the platform is a moving target. New features are constantly proposed, specced out and implemented. At the moment while many features are in a nascent state, keeping track of which features are available in which browsers is a bit of a pain.

This page is an effort to supply a list of HTML5 APIs that I think game developers want to know about and their availability in different browsers. Hopefully we'll gradually see this all go green.

### Updates

- **2012-10-09** - PointerLock support lands in Chrome stable
- **2012-09-11** - Mozilla announced they have started work on Web Audio API

## Contents

- [Rendering](#rendering)
- [Audio](#audio)
- [Input](#input)
- [Networking](#networking)
- [Storage](#storage)

## Rendering

### Canvas

2D rendering

| Chrome  | yes |
| Firefox | yes |
| Safari  | yes |
| Opera   | yes |
| IE      | yes |

[source](https://caniuse.com/canvas)

### WebGL

3D rendering using API similar to OpenGL ES 2.0

| Chrome  | yes      |
| Firefox | yes      |
| Safari  | nearly\* |
| Opera   | nearly\* |
| IE      | no       |

*In Safari and Opera WebGL must be enabled in a developer menu.  
[source](https://caniuse.com/webgl) | [spec](https://registry.khronos.org/webgl/specs/latest/1.0/)

### Fullscreen API

Allow an element to render fullscreen

| Chrome  | yes     |
| Firefox | yes     |
| Safari  | yes     |
| Opera   | planned |
| IE      | no      |

[source](https://caniuse.com/fullscreen) \| [spec](https://fullscreen.spec.whatwg.org/)

---

## Audio

### Web Audio API

Low-latency audio playback for sound effects. Including effects pipeline for reverb, pan, spatial audio, etc.

| Chrome  | yes       |
| Firefox | planned\* |
| Safari  | yes       |
| Opera   | no        |
| IE      | no        |

*Mozilla have announced they're [working on it](https://wiki.mozilla.org/Web_Audio_API) and progress is tracked on this [issue](https://bugzilla.mozilla.org/show_bug.cgi?id=779297)  
[spec](https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html)

---

## Input

### Orientation Events

Get events from accelerometers in the device

| Chrome  | yes   |
| Firefox | yes   |
| Safari  | yes\* |
| Opera   | no    |
| IE      | no    |

*Mobile Safari only  
[source](https://caniuse.com/deviceorientation) | [spec](https://w3c.github.io/deviceorientation/spec-source-orientation.html)

### PointerLock API

Capture mouse input without moving the cursor. Required for FPS type camera control.

| Chrome  | yes                  |
| Firefox | fullscreen mode only |
| Safari  | no                   |
| Opera   | no                   |
| IE      | no                   |

*PointerLock must be enabled in a chrome://flags  
[spec](https://w3c.github.io/pointerlock/)

### Gamepad API

Get input from hardware gamepad/controllers

| Chrome  | yes       |
| Firefox | planned\* |
| Safari  | no        |
| Opera   | no        |
| IE      | no        |

*Firefox builds with gamepad support are available, issue tracking it is [here](https://bugzilla.mozilla.org/show_bug.cgi?id=604039).  
[spec](https://w3c.github.io/gamepad/)

### Stream API / getUserMedia()

Get input from microphone or webcam

| Chrome  | yes       |
| Firefox | planned\* |
| Safari  | no        |
| Opera   | yes       |
| IE      | no        |

*Firefox are [planning](https://wiki.mozilla.org/Platform/Features/Camera_API_-_Phase_2_(getUserMedia)) to support getUserMedia()  
[source](https://caniuse.com/stream)

### Keyboard

Support for keyboard input that supports international keyboard layouts. There is no standardization effort on this, just an early stage [proposal](https://wiki.mozilla.org/Platform/AreWeFunYet#Keyboard_input_that_ignores_keyboard_layouts) from Mozilla.  
[source](https://wiki.mozilla.org/Platform/AreWeFunYet#Keyboard_input_that_ignores_keyboard_layouts)

---

## Networking

### WebSockets

Continuous communication over HTTP

| Chrome  | yes |
| Firefox | yes |
| Safari  | yes |
| Opera   | yes |
| IE      | yes |

[source](https://caniuse.com/websockets) \| [spec](https://websockets.spec.whatwg.org/)

### WebRTC / PeerConnection API

Realtime communication API for peer-to-peer type networking including audio and video chat.

| Chrome  | nearly\*    |
| Firefox | planned\*\* |
| Safari  | no          |
| Opera   | no          |
| IE      | no          |

*You can enable WebRTC in chrome://flags  
**Mozilla have the [feature](https://wiki.mozilla.org/Platform/Features/WebRTC) planned  
[source](https://webrtc.org/) | [spec](https://www.w3.org/TR/webrtc/)

---

## Storage

### Web Storage

Key-Value store for local data, that can persist between page loads. Like Cookies done right.

| Chrome  | yes |
| Firefox | yes |
| Safari  | yes |
| Opera   | yes |
| IE      | yes |

[source](https://caniuse.com/namevalue-storage) \| [spec](https://html.spec.whatwg.org/multipage/#toc-webstorage)

### Offline Storage

Cache entire applications locally for use when offline.

| Chrome  | yes |
| Firefox | yes |
| Safari  | yes |
| Opera   | yes |
| IE      | yes |

[source](https://caniuse.com/offline-apps) \| [spec](https://www.w3.org/TR/2011/WD-html5-20110525/offline.html#offline)

Do you have any other suggestions for APIs you'd like to see tracked here. Or other features that game developers want that are missing from HTML5 specs? Please email us at [support@playcanvas.com](mailto:support@playcanvas.com).

Note: [caniuse.com](https://caniuse.com/) is great resource for checking which features are available in which browsers. It was used as a source for many of the tables above.

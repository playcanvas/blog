---
author: dave
comments: false
date: 2012-08-19 12:40:08+00:00
layout: post
link: https://blog.playcanvas.com/html5-apis-for-game-developers/
slug: html5-apis-for-game-developers
title: HTML5 APIs for game developers
wordpress_id: 449
categories:
- Technology
tags:
- browsers
- coding
- html5
---

One of the best and worst things about making games for web browsers is that the platform is a moving target. New features are constantly proposed, specced out and implemented. At the moment while many features are in a nascent state, keeping track of which features are available in which browsers is a bit of a pain.

This page is an effort to supply a list of HTML5 APIs that I think game developers want to know about and their availability in different browsers. Hopefully we'll gradually see this all go green.

<!-- more -->



* * *





### Updates


**2012-10-09** - PointerLock support lands in Chrome stable
**2012-09-11** - Mozilla announced they have started work on Web Audio API



* * *






	
  * Rendering

	
  * Audio

	
  * Input

	
  * Networking

	
  * Storage





* * *





## Rendering




### Canvas


2D rendering
<table class="features" >
<tbody >
<tr >

<td class="browser" >Chrome
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Firefox
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Safari
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Opera
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >IE
</td>

<td class="yes" >yes
</td>
</tr>
</tbody>
</table>
[source](http://caniuse.com/#feat=canvas)


### WebGL


3D rendering using API similar to OpenGL ES2
<table class="features" >
<tbody >
<tr >

<td class="browser" >Chrome
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Firefox
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Safari
</td>

<td class="special" >nearly*
</td>
</tr>
<tr >

<td class="browser" >Opera
</td>

<td class="special" >nearly*
</td>
</tr>
<tr >

<td class="browser" >IE
</td>

<td class="no" >no
</td>
</tr>
</tbody>
</table>
*In Safari and Opera WebGL must be enabled in a developer menu.
[source](http://caniuse.com/#feat=webgl) | [spec](http://www.khronos.org/registry/webgl/specs/latest/)


### Fullscreen API


Allow an element to render fullscreen
<table class="features" >
<tbody >
<tr >

<td class="browser" >Chrome
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Firefox
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Safari
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Opera
</td>

<td class="special" >planned*
</td>
</tr>
<tr >

<td class="browser" >IE
</td>

<td class="no" >no
</td>
</tr>
</tbody>
</table>
*Opera are [planning](http://www.opera.com/docs/specs/presto2.12/apis/#fullscreen) fullscreen API support.
[source](http://caniuse.com/#feat=fullscreen) | [spec](http://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html)



* * *





## Audio




### Web Audio API


Low-latency audio playback for sound effects. Including effects pipeline for reverb, pan, spatial audio, etc.
<table class="features" >
<tbody >
<tr >

<td class="browser" >Chrome
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Firefox
</td>

<td class="special" >planned*
</td>
</tr>
<tr >

<td class="browser" >Safari
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Opera
</td>

<td class="no" >no
</td>
</tr>
<tr >

<td class="browser" >IE
</td>

<td class="no" >no
</td>
</tr>
</tbody>
</table>
*Mozilla have announced they're [working on it](https://wiki.mozilla.org/Web_Audio_API) and progress is tracked on this [issue](https://bugzilla.mozilla.org/show_bug.cgi?id=779297)
[spec](https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html)



* * *





## Input




### Orientation Events


Get events from accelerometers in the device
<table class="features" >
<tbody >
<tr >

<td class="browser" >Chrome
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Firefox
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Safari
</td>

<td class="yes" >yes*
</td>
</tr>
<tr >

<td class="browser" >Opera
</td>

<td class="no" >no
</td>
</tr>
<tr >

<td class="browser" >IE
</td>

<td class="no" >no
</td>
</tr>
</tbody>
</table>
*Mobile Safari only
[source](http://caniuse.com/#feat=deviceorientation) | [spec](http://dev.w3.org/geo/api/spec-source-orientation.html)


### PointerLock API


Capture mouse input without moving the cursor. Required for FPS type camera control.
<table class="features" >
<tbody >
<tr >

<td class="browser" >Chrome
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Firefox
</td>

<td class="special" >fullscreen mode only
</td>
</tr>
<tr >

<td class="browser" >Safari
</td>

<td class="no" >no
</td>
</tr>
<tr >

<td class="browser" >Opera
</td>

<td class="no" >no
</td>
</tr>
<tr >

<td class="browser" >IE
</td>

<td class="no" >no
</td>
</tr>
</tbody>
</table>
*PointerLock must be enabled in a chrome://flags
[spec](http://dvcs.w3.org/hg/pointerlock/raw-file/default/index.html)


### Gamepad API


Get input from hardware gamepad/controllers
<table class="features" >
<tbody >
<tr >

<td class="browser" >Chrome
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Firefox
</td>

<td class="special" >planned*
</td>
</tr>
<tr >

<td class="browser" >Safari
</td>

<td class="no" >no
</td>
</tr>
<tr >

<td class="browser" >Opera
</td>

<td class="no" >no
</td>
</tr>
<tr >

<td class="browser" >IE
</td>

<td class="no" >no
</td>
</tr>
</tbody>
</table>
*Firefox builds with gamepad support are available, issue tracking it is [here](https://bugzilla.mozilla.org/show_bug.cgi?id=604039).
[spec](https://dvcs.w3.org/hg/gamepad/raw-file/default/gamepad.html)


### Stream API / getUserMedia()


Get input from microphone or webcam
<table class="features" >
<tbody >
<tr >

<td class="browser" >Chrome
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Firefox
</td>

<td class="special" >planned*
</td>
</tr>
<tr >

<td class="browser" >Safari
</td>

<td class="no" >no
</td>
</tr>
<tr >

<td class="browser" >Opera
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >IE
</td>

<td class="no" >no
</td>
</tr>
</tbody>
</table>
*Firefox are [planning](https://wiki.mozilla.org/Platform/Features/Camera_API_-_Phase_2_(getUserMedia)) to support getUserMedia()
[source](http://caniuse.com/#feat=stream)


### Keyboard


Support for keyboard input that supports international keyboard layouts. There is no standardization effort on this, just an early stage [proposal](https://wiki.mozilla.org/Platform/AreWeFunYet#Keyboard_input_that_ignores_keyboard_layouts) from Mozilla.
[source](https://wiki.mozilla.org/Platform/AreWeFunYet#Keyboard_input_that_ignores_keyboard_layouts)



* * *





## Networking




### WebSockets


Continuous communication over HTTP
<table class="features" >
<tbody >
<tr >

<td class="browser" >Chrome
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Firefox
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Safari
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Opera
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >IE
</td>

<td class="yes" >yes
</td>
</tr>
</tbody>
</table>
[source](http://caniuse.com/#feat=websockets) | [spec](http://dev.w3.org/2011/webrtc/editor/getusermedia.html)


### WebRTC / PeerConnection API


Realtime communication API for peer-to-peer type networking including audio and video chat.
<table class="features" >
<tbody >
<tr >

<td class="browser" >Chrome
</td>

<td class="special" >nearly*
</td>
</tr>
<tr >

<td class="browser" >Firefox
</td>

<td class="special" >planned**
</td>
</tr>
<tr >

<td class="browser" >Safari
</td>

<td class="no" >no
</td>
</tr>
<tr >

<td class="browser" >Opera
</td>

<td class="no" >no
</td>
</tr>
<tr >

<td class="browser" >IE
</td>

<td class="no" >no
</td>
</tr>
</tbody>
</table>
*You can enable WebRTC in chrome://flags
**Mozilla have the [feature](https://wiki.mozilla.org/Platform/Features/WebRTC) planned
[source](http://www.webrtc.org/) | [spec](http://dev.w3.org/2011/webrtc/editor/webrtc.html)



* * *





## Storage




### Web Storage


Key-Value store for local data, that can persist between page loads. Like Cookies done right.
<table class="features" >
<tbody >
<tr >

<td class="browser" >Chrome
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Firefox
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Safari
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Opera
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >IE
</td>

<td class="yes" >yes
</td>
</tr>
</tbody>
</table>
[source](http://caniuse.com/#feat=namevalue-storage) | [spec](http://www.w3.org/TR/webstorage/)


### Offline Storage


Cache entire applications locally for use when offline.
<table class="features" >
<tbody >
<tr >

<td class="browser" >Chrome
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Firefox
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Safari
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >Opera
</td>

<td class="yes" >yes
</td>
</tr>
<tr >

<td class="browser" >IE
</td>

<td class="yes" >yes
</td>
</tr>
</tbody>
</table>
[source](http://caniuse.com/#feat=offline-apps) | [spec](http://www.whatwg.org/specs/web-apps/current-work/multipage/offline.html)

Do you have any other suggestions for APIs you'd like to see tracked here. Or other features that game developers want that are missing from HTML5 specs? Please email me at [dave@playcanvas.com](mailto://dave@playcanvas.com).

Note: [caniuse.com](http://caniuse.com) is great resource for checking which features are available in which browsers. It was used as a source for many of the tables above.

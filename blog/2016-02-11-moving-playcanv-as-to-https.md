---
authors: dave
comments: true
date: 2016-02-11 14:43:09+00:00
link: https://blog.playcanvas.com/moving-playcanv-as-to-https/
slug: moving-playcanv-as-to-https
title: Moving playcanv.as to HTTPS
categories:
  - Announcement
  - Features
tags:
  - publishing
---

[![tanx](/img/tanx.jpg)](https://playcanv.as/p/aP0oxhUr)
_TANX running on HTTPS_

From today we now support HTTPS URLs on all published applications. So anytime you see a link to something on [http://playcanv.as](http://playcanv.as) you can also use [https://playcanv.as](https://playcanv.as). After a short period of testing we'll be changing all default links to point to the HTTPS versions of the applications, though we will keep support for non-secure HTTP versions for the short term to ensure compatibility for applications that require a non-secure page.

There are many reasons to use a secure HTTPS page, especially if you are doing transactions or taking money. But primarily for you as a PlayCanvas developer we're supporting HTTPS for two reasons.

### Embedding

With an HTTPS page you can now embed the your PlayCanvas applications in any other page that requires a secure URL. Of note, this includes [Facebook Canvas](https://developers.facebook.com/docs/games/gamesonfacebook) games, so you can now publish your PlayCanvas game directly to Facebook.

### Secure Powerful Features

Major browsers such as Chrome and Firefox are currently in the process of [securing all](https://bugs.chromium.org/p/chromium/issues/detail?id=481604) "powerful features". Which means only allowing access to these features on secure pages. These features include:

- Device Motion
- Device Orientation
- Encrypted Media Extensions
- Fullscreen API (including pointer lock)
- Geolocation
- getUserMedia (webcam access)

Soon it won't be possible to access these JavaScript APIs without using a secure HTTPS page. In advance of this time, we want to make sure your hosted PlayCanvas applications can support all these features.

### What this means for you

As a developer our transition to HTTPS should be seamless and you shouldn't notice. Though one area to watch out for is that an HTTPS page is not able to load resources from a non-secure page. So if you are loading fonts or images from other servers that are insecure they may be blocked (depending on exactly how you load them) when running your PlayCanvas application from HTTPS. The solution is to make sure all external resources are loaded via HTTPS.

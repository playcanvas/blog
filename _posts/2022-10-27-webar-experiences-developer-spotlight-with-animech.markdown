---
author: paulo
comments: true
date: 2022-10-27 13:56:25+00:00
layout: post
link: https://blog.playcanvas.com/webar-experiences-developer-spotlight-with-animech/
slug: webar-experiences-developer-spotlight-with-animech
title: Web AR Experiences - Developer Spotlight with Animech
wordpress_id: 2878
categories:
  - Developer Spotlight
tags:
  - AR
  - html5
  - PlayCanvas
  - WebAR
  - webgl
---

{% include youtube.html id="LLuB-2OpcFo" %}

Welcome to the third instalment of Developer Spotlight, a series of blog articles where we talk to developers about how they use PlayCanvas and showcase the fantastic work they are doing on the Web.

Today we are excited to be joined by Staffan Hagberg, CMO of [Animech](https://animech.com/en/).

### **Hi Staffan, welcome to Developer Spotlight! Tell us about yourself and Animech!**

[Animech](https://www.animech.com/en/) was founded back in 2007, in the city of Uppsala, Sweden. With a mix of 3D artists, engineers, developers, and UI/UX experts, we have a team of 40 people and all the competence in-house. The studio started in the early days of real-time 3D. It was a mix of CAD engineers and developers who realized the power of visualization for selling complex products in the life sciences segment.

Since then, we have visualized pretty much anything you can think of online and offline. We’ve worked in VR, AR, MR, phones, tablets, desktops, and pretty much any other device that has a browser. We have developed VR applications for cars, the first real-time 3D configurator in native WebGL ever developed, one of the world's first configurators for Oculus Rift Devkit and much more.

We have also visualized experiences for hotel safes, medical instruments and lab products for 7 of the 10 largest life science companies, as well as built 3D converters from Unreal to glTF and a bunch of custom tools specially built for PlayCanvas.

[Our core business is real-time 3D](https://www.animech.com/en/articles/3d-rendering-in-realtime). We push the boundaries every day trying to invent new ways of using 3D, where our solution makes the difference.

[Bathroom Planner](https://www.inr.se/planera-badrum/planera-badrum-verktyg-3d/) for Iconic Nordic Rooms

### **Why did Animech choose PlayCanvas?**

After an extensive search for a WebGL-based engine, we evaluated a few and selected PlayCanvas for its performance, out-of-the-box features, its extensibility and its valuable editor. Our customers expect the highest level of visual quality along with a smooth browsing experience - without the need for an app or plugins. PlayCanvas truly helps us deliver.

As for our artists’ perspective, they think it was (and still is) the most artist-friendly WebGL editor out there, with the added bonuses that it is open source, and supports many important features, such as PBR, tonemapping, render layers, etc.

### **Did your team face any initial challenges? How did you overcome them?**

It's always challenging when customers have high quality _and_ performance expectations. Though, at the same time, that is what drives us. Being able to create stunning 3D experiences linked to real business value is a unique opportunity and challenge. Adding AR to that process helps you to stand out against competitors.

Our particular challenge was to dynamically create an AR model of a procedurally generated mesh as a generic function. Our solution was to create a SaaS service that can take of whatever 3D object you’re looking at in PlayCanvas, and on the fly create AR models for both iOS and Android devices (ARKit or ARCore).

### **You’ve built several Web AR experiences. Can you tell us a little about them and how important you think Web AR is today?**

We have been early adopters of both AR and VR, both as standalone applications and on the web. We believe it's important to use AR not as a gimmick, but as an application that provides real value for the user. For example, looking at how that greenhouse would look in your actual backyard or similar. In that sense, Web AR will get more and more important, both as something that stands out but also as something that provides value for users.

[![](/assets/media/FUQKIyNXEAI5aec-1-2-1024x535.jpg)](/assets/media/FUQKIyNXEAI5aec-1-2.jpg)

### **Why do you think that your clients want Web AR in their experiences?**

To offer something more to their customers - both in marketing value and actual value. To help users make smarter, more informed decisions.

We have also developed our own web based 3D converter that takes our PlayCanvas 3D models to glTF and USD on the fly. It is a server side solution that takes everything we develop to AR.

### **How is building a web experience different from a native experience?**

You must optimize for both loading time and performance. The application could be run on a wide range of devices – from several years old phones to high-end desktops.

The application is accessible to a wider audience since they don’t need to install anything.

### **What are the team's favorite features of PlayCanvas?**

As a team consisting of both 3D artists and developers, PlayCanvas’ online editor provides a fantastic way to collaborate, prepare and preview our projects before pairing the solution with a stunning web UI or deploying it as a standalone viewer.

Our 3D artists also enjoy how the editor is robust and easy to use, and how its design promotes collaboration. Powerful material settings (per-texture UV and color channel, vertex colors, blend types, depth test/write, etc.), flexible texture compression and a fast response by the team when reporting bugs and requesting features are also great.

### **What is on the feature wish list for PlayCanvas this year?**

As the future for 3D on the web continues to evolve, we are excited to see support for more accessible 3D formats, such as the glTF standard by the Khronos Group, which PlayCanvas are advocating for as well.

Beyond this, here are some things we look forward to:

- Node-based shader editor

- Support for editor extensions

- Post processing (HDR bloom, chromatic aberration, SSAO, motion blur, color grading, eye adaption, etc.)

- More customizable asset import options

- Reflection probes

- Material instances (see Unreal Engine)

- Debug visualization (see Unreal Engine’s View Modes)

- Expose currently hidden options in the editor (detail maps, etc.)

### **How do you see AR and 3D e-commerce evolve over the next few years?**

The possibilities are enormous. The question is when do people actually start using AR. It has been around for many years, lots of interesting solutions and demos have been built, but the real value of AR has not reached the masses yet.

I think we are closing in on that though. Just the other day I was about to buy a new espresso coffee machine. One supplier had an AR model online in the e-store with which I could see that it looked good and covered my needs. With just one static USDZ file. It is such an easy way of helping your customer to make the right decision. Imagine how much value you add if you can see configured 3D models in AR and really see the potential of what you are about to buy.

Next phase would be to configure and change your 3D model directly in AR-mode which would make the experience even stronger.

As the graphics quality gets better and better online and the fashion industry keeps on digitizing their customer journey, AR will probably be the best and easiest way of trying on fashion products like bags, watches, jewelry and clothes. It will reduce faulty orders on a massive scale if you can do a virtual fitting before buying stuff online.

Animech helps our customers to get what they want. Simply put: we empower people to make smart decisions through intelligent visualization.

### **Thank you, Staffan! Is there anything else you'd like to share?**

You can visit [our website here](https://www.animech.com/). You can also [follow us on Twitter](https://twitter.com/AnimechT)! You can also check out our other projects here:

- [Life science marketing application Cytiva](https://www.cytivalifesciences.com/apps/aktapilot600/index.html)

- [Industry marketing application Ewellix](https://virtual-showroom.ewellix.com/)

- [Bathroom configurator](https://www.inr.se/planera-badrum/planera-badrum-verktyg-3d/)

- [Work bench configurator, WFI](//configurator.wfi.se/)

- [Safe configurator, ASSA Abloy](http://assa.aniconfigurator.com/)

- [Lift configurator, Cibes lift](https://www.cibeslift.com/se/lift-configurator/)

- [Greenhouse configurator, Willab garden](https://vaxthusguiden.willabgarden.se/)

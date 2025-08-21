---
authors: will
slug: gaussian-splatting-for-e-commerce-developer-spotlight-on-reflct
title: "Gaussian Splatting for E-Commerce - Developer Spotlight on Reflct"
tags:
  - gaussian-splats
  - spotlight
---

Welcome to the fifth edition of Developer Spotlight, a series of blog articles where we talk to developers about how they use PlayCanvas and showcase the fantastic work they are doing on the web.

<div className="iframe-container">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/SBNza9uwiXo" title="Reflct is Live: 20× Smaller Files, 2× FPS, Shopify Support - A better 3DGS viewer." allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Today, we are excited to be joined by In Ha and Willie from [Reflct](https://reflct.app).

<!-- truncate -->

**Welcome to our Developer Spotlight! Tell us a bit about yourselves.**

*Willie*: I'm Willie, I co-founded Reflct with In Ha. I’ve been working in and around 3D and web development since my University days, where I dropped out to try my hand at a game development startup. It failed, but I learned a lot and developed a fixation with interactive tech. That first experience is what really drove my career, afterwards I worked for a few years in VR, and then into creative web and product development. I’m more of a creative technologist type, In Ha is the sole developer of the main Reflct application. I just work on our side things, like [Sharp Frames](https://sharp-frames.reflct.app/), and handle the 3DGS production side for our direct clients.  

*In Ha*: I'm In Ha, I studied computer graphics and have spent my career so far in web 3D and front-end development. I am a huge enthusiast of 3D graphics and rendering technologies on the web.

**How did you first discover PlayCanvas?**

*Willie*: It was through the 3DGS community, PlayCanvas really is the biggest name in the space, and you can’t be into 3DGS without hearing about PlayCanvas at some point.

*In Ha*: Yeah, that's about right. When I was quite new to 3DGS, Willie showed me there was a tool to modify the splats, and it worked very well. It was SuperSplat by PlayCanvas. It was the very first tool I heard of when I entered the realm of 3DGS.

**What made you choose PlayCanvas for Reflct instead of other web technologies?**

*Willie*: Well, we didn't at first. We were using Mark Kellogg’s three.js plugin for a long time. We made that decision early on when his project was the only one that had second-degree spherical harmonics. Over time, though, we saw what the PlayCanvas team was doing and ultimately made the decision to switch over. It’s open source, reliable, performant, and just really, really good. You guys are doing great work — I wish we had made the shift sooner.

*In Ha*: It's fast and simple to use.

**Let’s talk about Reflct. In your own words, what is Reflct and what problem does it solve?**

*Willie*: We built Reflct to enable commercial use cases for 3DGS assets. 3DGS is this amazing technology; photorealistic 3D at real-time frame rates in the browser. It’s as mind-blowing to me now as it was when the Inria paper first dropped. But most ‘normal’ people don’t know how to navigate a 3D space in the browser, particularly on mobile, and you can really get lost in a 3DGS scene. We let creators control what a user sees in their scene by setting specific viewpoints, with orbit limits that control how much the user is able to move around. Each viewpoint can carry metadata which can be used for commerce integrations or custom features. Rich tools and features for creators, with a super simple viewer that non-technical people can navigate.

*In Ha*: It is also important to mention that we provide tools to help users implement their 3DGS assets on their websites, with the same navigation configured in our dashboard. This makes the whole integration process a lot easier. Our React library is one, and our Shopify component is another. We aim to keep expanding those tools to increase coverage.

<div className="iframe-container">
    <iframe id="viewer" width="800" height="500" allow="fullscreen; xr-spatial-tracking" src="https://www.reflct.app/embed/ZW1iZWQ6OWQ2MmM0MjAtNTUzOS00ZGQxLWE2ZjQtMzNiZmMwZmU1MWMyOjdoVWM0MVB0elVQa0R1Q3pKbW0zbWQ="></iframe>
</div>

**3D Gaussian Splatting (3DGS) is still a new technology — what excites you most about it?**

*In Ha*: When I first heard what it is and saw some examples of it, it seemed to me that the way splats work resembles the idea of “pixels” on the screen. In this case, they are pixels in 3D, not 2D. Each splat in 3D space has color and other attributes, just like 2D pixels, which have coordinates and color.

I was amazed by the idea and concept behind the technique. I am very excited about what people could do with 3DGS in the future.

*Willie*: I'm excited for the future of the technology. There are a lot of smart people around the world pushing the boundaries, making it smaller, faster, more realistic. SOGs are a good example. And it’s so new, we’re only a couple of years in.

**How does Reflct make navigating and exploring 3DGS content easier for non-technical users?**

*Willie*: We just make it simple. We wanted something that we could give to our parents and they’d be able to figure out how it works. There are three big buttons at the bottom: left and right arrows, and a play button. If you drag the screen, the camera orbits a single point. No WASD, no free-roaming movement. Easy, but behind the scenes the creator has a bunch of features to help curate the experience for users.

The creator can manage ‘views’ in the Reflct dashboard. These are coordinates to which we move the camera when the user presses one of the arrow buttons. Each view has some data attached to it: position and focal point, as well as orbit limits, zoom, transition animation details, and product metadata. The orbit limits are important since they give the creator control over the movement of the camera, which means they can direct the user’s attention to the best parts of the scene without letting them see the ‘rough edges’ you get in 3DGS.

All these little bits add up to a powerful feature set for curating the experience of navigating the 3DGS space, but all the end user sees is three buttons.

**Could you walk us through the process of curating a scene in the Reflct dashboard?**

*Willie*: Sure, when you drag in your `.ply` we’ll automatically compress it, then you just move around like you would in any 3D viewer. Once you find a viewpoint you like, you click ‘Add view’. You can edit the details for that view, set the orbit limits, change the focal point, configure the transition animations. There are also features to add hotspots or annotations.

You just do that a few times to set all the points in your scene where you want to direct the user's attention. Then you create a shareable link, or integrate it with your site using our React library or Shopify app. If you’re using our Shopify app, you can add the `productHandle` to the view metadata and it will automatically pull the product details into the side panel.

**Orbit limits and managed views sound like powerful tools — can you give an example of how they’ve been used effectively?**

*Willie*: The Shopify app is a good example. Brands can capture a showroom or a staged space with their products, then each product can have its own set of views. Setting the views gives the creator a way to guide the user through the space, and the orbit limits ensure that they only see the products from the best angles.

When this is integrated with Shopify, the end user is able to explore a ‘shoppable’ 3DGS environment. Each time they move to a new product, the product details are displayed in the application. It’s quite exciting \- we haven’t seen that type of e-commerce experience before. We’re working with a few different brands here in New Zealand to take this to the next level.

<video autoPlay muted loop controls src='/img/developer-spotlight-reflct-shopify-app.mp4' style={{width: '100%', height: 'auto'}} />

**Let’s dive into some technical details. How did PlayCanvas help you deliver a smooth experience across desktop and mobile?**

*In Ha*: We were using the GaussianSplats3D viewer by mkkellogg before we made the switch. We decided on the viewer very early on in our journey; at the time, we felt it was the best choice. Over time, though, we saw the PlayCanvas team releasing amazing features while the support for the viewer we were using slowly faded away. When PlayCanvas released the SOGs demo, it was the last nail in the coffin and we started the refactor.

![Reflct Memory Savings](/img/developer-spotlight-reflct-memory.png)

The performance gains have been massive. If you load the same `.ply` in PlayCanvas versus our original viewer, the frame rate nearly doubles, and memory usage is reduced by 80%. If you compare SOGs to our previously most optimized format, the SOGs bundle is half the size with 3SH compared to 2SH and uses 88% less memory. Some critical resources consume over 95% less memory. So, yeah, we’re happy we made the switch.

**Were there any technical challenges you faced integrating PlayCanvas with 3DGS, and how did you overcome them?**

*In Ha*: Well, we had to refactor the core of the application. We were moving a three.js-based application to a PlayCanvas-based application. We essentially had to rebuild every feature that was related to the viewer since the previous application was based on three.js \- which is a common library that is used for 3D rendering on the web, and because we were using open source libraries built on top of three.js, a lot of refactoring was needed to adapt functionality to PlayCanvas and remove those external dependencies.

But we realized that essentially, the fundamentals are the same. They provide 3D renderers, which means they have 3D spaces, a camera, and some 3D objects (in this case, splats). PlayCanvas provides simple ways to control cameras and assets, and if we can read and write them, it doesn’t make much difference.

So we first detached every piece of the UI and event listeners, then replaced the core renderers, then everything followed naturally.

**Can you share any interesting performance optimizations you’ve implemented in Reflct?**

*In Ha*: We had done a reasonable amount of optimization work with the previous viewer, but the impact of those changes was trivial compared to moving to PlayCanvas.

*Willie*: One thing that seems minor is the size of the viewer. A smaller viewer means fewer pixels to move around and less resource usage. People want big viewers, though, so we spent some time looking for the right balance between performance and visual impact.

**Reflct just launched after being in open beta — how has the feedback been so far?**

*Willie*: The feedback has been quite positive, which is validating. Now that we are using the PlayCanvas engine, I think it will be even better. The performance improvement makes the application far more accessible.

**Who do you see as the ideal audience or customer for Reflct?**

*Willie*: It's 3DGS capture pros who want to find a better way to commercialize their work, brands that want to elevate their product visualization, real-estate startups, or companies that are looking for an edge.

**What are your plans for upcoming features or improvements?**

*Willie*: First thing will be some improvements for mobile, just to improve consistency across devices. Then it’s integrations, viewer features, FTUX improvements, and building on our recent update for custom transition animations.

<video autoPlay muted loop controls src='/img/developer-spotlight-reflct-custom-animation.mp4' style={{width: '100%', height: 'auto'}} />

**How can the PlayCanvas community try out Reflct or get involved?**

*Willie*: It's free for up to 15 scenes on [https://reflct.app](https://reflct.app), so just jump in and try it out. If you have any ideas for improving the platform or seeing what we’re cooking up next, join the Discord; we’d love to hear from the community.

**Where do you see 3DGS and web-based photorealistic content heading in the next few years?**

*Willie*: The pace of innovation in 3DGS and other similar technologies is wild, but the trends seem to be around increasing quality, decreasing file sizes, and making the capture process simpler. Generative AI will also start to play a more significant role I’m sure, some of the recent experiments with generating 3DGS scenes using outputs from world models like Genie have been very impressive. I’d like to see some progress towards solving some of the drawbacks, like reflective surfaces.

*In Ha*: I can see 3DGS becoming a general way of displaying rich, interactive, and impactful content.

**Any advice for developers looking to build commercial products on PlayCanvas?**

*In Ha*: It is always important to just try things out. See what works and what doesn’t. Gather metrics and list out pros and cons. See if it solves your problem. Eventually, you will learn what is possible with PlayCanvas.

*Willie*: Yeah, just get stuck in. PlayCanvas’ approach to open source is admirable.

**What’s been the most rewarding part of building Reflct so far?**

*In Ha*: As we've been rolling out Reflct to the world, the most rewarding part has been the users and the community. When I see a user’s strikingly realistic content on Reflct, that’s the most rewarding for me.

*Willie*: I'm just really proud of the product we’ve built together, it’s an awesome feeling.

**Thanks for chatting with us, In Ha and Willie!**

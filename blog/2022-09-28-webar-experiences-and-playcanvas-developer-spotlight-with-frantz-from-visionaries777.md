---
authors: paulo
date: 2022-09-28 13:38:48+00:00
slug: webar-experiences-and-playcanvas-developer-spotlight-with-frantz-from-visionaries777
title: Building WebAR Experiences - Developer Spotlight with Visionaries777
categories:
  - Developer Spotlight
tags:
  - ar
  - webxr
  - spotlight
---

[![Nissan AR](/img/v777-nissan-ar.jpg)](/img/v777-nissan-ar.jpg)

Welcome to the second installment of Developer Spotlight! A series of blog articles where we talk to developers about how they use PlayCanvas and showcase the fantastic work they are doing on the Web.

Today we are excited to be joined by Frantz Lasorne, co-founder of [Visionaries777](https://www.vz777.com/).

**Hi! Let's get started. Firstly, welcome to the developer spotlight! Frantz, if you could just tell me a little bit about yourself and your team and your studio.**

My name is Frantz and I'm the co-founder of Visionaries777. Actually, we [founders] are three. We started as two French guys. We studied together in France; Interaction Design, and then we created this company about 10 years ago in Hong Kong.

[We currently employ] Around 35 people. We've been working on AR since 2010. It's our main focus. Within the realm of AR, we are involved in 3D real time AR, and all sorts of XR applications.

Me and my business partner were working at Lego in Denmark before, so we started to work on AR back then in the R&D department. We helped Lego bridge the physical and digital to create hybrid play experiences.

Afterwards, we left Lego and started our own company. Lego hired us as consultants to keep working for them for some time. In the early days, we did a lot of collaborations for marketing and promotional events using AR.

Nowadays, the things we work on are more industrial-focused; automotive or luxury. AR is now a properly matured product, with WebGL, Web AR experiences, VR and so on.

<div className="iframe-container">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/NnoiJA7UCiY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

**Thank you! I'm curious, why did Visionaries777 choose PlayCanvas?**

Before, we always used Unity 3D for any 3D real time project, because they have a huge compatibility of hardware platforms. It's quite nice. The only platform they are lacking is the web.

We were looking around, trying to find what is the best platform to develop WebGL experiences. Then, we saw PlayCanvas, opened the editor, and were surprised how familiar it was for us. I think the people who designed the PlayCanvas editor knew Unity and got inspired in terms of the menu and layout. It's very similar to the way [Unity] works. It's just that it's an editor on the web rather than a desktop application. So for us, it was very easy to do the jump.

So far we've been really happy with all the engine capabilities, the loading, how lightweight it is, et cetera. For us, it's the best platform for developing web experiences.

[![Husqvarna](/img/v777-husqvarna.jpg)](/img/v777-husqvarna.jpg)

**Awesome! So, were there any initial challenges that you guys faced? How did you guys end up overcoming them?**

In terms of challenges? I think mostly the model optimizations; how to get the WebGL experience as small as possible, but retaining maximum visual quality. Most of our clients are either automotive brands or luxury brands, so they are concerned about the product that you are looking at on the screen. It's pointless to show a product that you can see the rough edges of. They won't like it in the end.

That was our struggle at the beginning - to try and find the right balance of optimizing enough, but not too much, and be happy with loading time. So it took some trying to get this right and find the right compromise.

Right now, with our current approach and the tools in our pipeline, we’re quite happy. And it's also why we work with Cartier and are now doing all these products on their websites.

[![Watch](/img/v777-watch.jpg)](/img/v777-watch.jpg)

**That's very interesting. Visionaries777 has worked on several Web AR experiences. Can you tell me how important you think Web AR is today?**

It's very important - but we are back to the same problem that we had in the early 2010s, when we relied on markers for tracking. Now with where we are in WebAR we are still very limited. You need something like an image marker, or a floor with a world target, but it's not as stable as if you use AR Kit or AR Core in a native Unity app.

With a standalone Unity application with ARKit and ARCore it's mind blowing what you can do. There's barely any drift, it's super accurate. With web you're still constrained. Tracking is not perfect. There's a lot of drift. So I think the applications we see with the present state of tech are limited, experiences are considered a bit gimmicky. It's getting there, but it still needs to grow.

But at the end of the day, for marketing initiatives, no one wants to install an ad app on their smartphone as a user, as a consumer. You don't want to install a BMW app just to uninstall it three days later because you're done playing around.

These sorts of experiences were fine 10 years ago on an iPhone, but now people have moved on, and have different mindsets - things should be accessible through a web browser directly, not through an app. If it's inside an app, it has to be inside Snapchat, inside Instagram, or inside an app that has more to it than just one AR experience.

[![BMW](/img/v777-bmw.jpg)](/img/v777-bmw.jpg)

**Extending a bit from that question, why do you think that the clients you work with want Web AR in their experiences?**

Augmented reality has always been exciting for brands to show a product in 3D and also integrate it into [customers’] homes or their driveway. It’s quite appealing for a brand, marketing-wise. Then, for consumers, it's something new, it's fun. You get closer to the product.

It’s key to reduce friction.

You don't have to install things anymore. You download some assets in your web browser, but it's more transparent than going into the store and searching for the app and downloading it.

Brands are definitely interested in WebAR for these reasons, so AR will keep growing. It brings a lot of value. You can try a car in your driveway or you can try a watch on your wrist.

eCommerce in a more immersive way is really the next generation for eCommerce experiences.

<div className="iframe-container">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/eGx9gFHWu_4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

**When you're building your Web AR experiences, what features does PlayCanvas provide that you think were most helpful?**

I think the true value of PlayCanvas is really how they are keeping up to date with all the WebGL standards, improving materials, improving compression, improving loading and so on. And their UI is very easy to use.

When you import your model, it gets converted to the GLB format. It makes it more lightweight, and you don't need to pre-export it as GLB.

On the programming side, it's just JavaScript. You can do whatever you want. It doesn't have any preset for you aside from an orbit camera, but that's not really important. Anyone can build more.

**Cool! So, how would you say that building an HTML5 or a WebGL experience differs from developing a native experience or a native application?**

You have to always concern yourself with the loading. In some cases, when you develop a web experience, you have to load something quickly for the user to play with right away. Then the model and the rest gets loaded progressively afterwards. Let's say you have a car and this car has variants with different wheels, roofs, and so on. All these elements need to be loaded, but you shouldn't load everything at once. Otherwise, the download would be huge.

I think that's one of the main differences compared to designing a native application, aside from UX/UI, because you also need to be concerned about the browser for web experiences. Are you using it in portrait? On a desktop? Do you need to embed it into an iframe? Is it going to be full screen?

Those are questions that are quite different from a standalone application where you don't need to concern yourself about the surroundings of the app.

**So next up; we went a bit over this in one of the previous questions I asked. You explained how you guys use some of the features of the editor, but is there any feature PlayCanvas provides that is the team's favorite?**

To me it's more that we can collaborate. The collaboration aspect of PlayCanvas is quite nice because you have one project and anyone can access it from their desktop machine on the web.

And you can, as an artist, populate the scene with the assets. Then, the developer can work with it. In parallel. And you can have someone to check things, maybe not edit anything, but do quality control. The collaboration aspect is one of the best features I would say that makes [PlayCanvas] so nice to work with.

**As part of the interview, but also as a feedback exercise, what is a PlayCanvas feature that would be at the top of your wishlist?**

It would be great if the PlayCanvas editor had a feature to assign different texture resolutions for different platforms (mobile or desktop), similarly to how Unity does it for different devices. It would make it so much easier to manage rather than doing it with code and tagging etc.

**Thanks for sharing the feedback! Going back to another question, how do you see HTML5 and web experiences evolving over the next few years?**

I think it will grow. We see two things at the moment, WebGL experiences and cloud streaming, which is not HTML or WebGL at all. Some brands will choose either doing a WebGL configurator, or a cloud streaming configurator. Those are two different approaches. I have a tendency to prefer WebGL because you have a much more crisp image.

Also, once the experience is loaded, it's much more responsive to commands. You're not constrained by latency of streaming and video glitches. Those are things that put me off when I do classroom experiences.

So I think WebGL will continue, especially right now with the whole discussion around the metaverse, and when we talk about the necessary file transmission. GLTF, USDZ, USD - those files can be translated from one platform to another, so I think there's a lot of potential for these.

I think the metaverse will most likely be built in WebGL rather than in cloud streaming, but I could be wrong.

Either way, I believe that in the end, it's very important for brands to start digitizing all their assets. For example, Cartier chooses to have a WebGL viewer and recreate every single one of their products into GLB formats. I think it's quite smart because once you have them, you can reuse them anywhere on the web; whether it's in their website, the metaverse or a Snapchat AR filter.

I think there's lots of opportunities, and as 5G expands, compression format algorithms get more efficient, things are going to be smaller and we'll be able to build richer experiences on the web. I think there's a long positive future, and cloud streaming is not necessarily going to replace it.

**Thank you! Those were all the questions I had. Thank you for your time, Frantz! Is there anything that you would like to promote, a website, a Twitter handle, or a job opening that you would like to share?**

We have a website purely focused on product configurators, utilizing WebAR: [https://vzion.vz777.com/](https://urldefense.proofpoint.com/v2/url?u=https-3A__vzion.vz777.com_&d=DwMFaQ&c=ncDTmphkJTvjIDPh0hpF_4vCHvabgGkICC2epckfdiw&r=--LiNgtoHfPjPnEKFLeJr9qV3N1vxgN4hWV_E42dYVM&m=4HZIRF6gtBKtqaTzmjaHNw4pPJapodEg3V3LBHK9-GNaqmOuut91GXnHWxe2Fgtl&s=htV-gbUikESO1vAeS_POhpq9Oa1cn3ZvTVyvWl8IdJ8&e=)

And a main website too, where we show all of our work: [https://www.vz777.com/](https://urldefense.proofpoint.com/v2/url?u=https-3A__www.vz777.com_&d=DwMFaQ&c=ncDTmphkJTvjIDPh0hpF_4vCHvabgGkICC2epckfdiw&r=--LiNgtoHfPjPnEKFLeJr9qV3N1vxgN4hWV_E42dYVM&m=4HZIRF6gtBKtqaTzmjaHNw4pPJapodEg3V3LBHK9-GNaqmOuut91GXnHWxe2Fgtl&s=UWchHTrNjGrXrgGWEUt5HCYcBhGIj23pNTzYXbIfroo&e=)

We’re also on twitter! Follow us there: [https://twitter.com/visionaries777](https://urldefense.proofpoint.com/v2/url?u=https-3A__twitter.com_visionaries777&d=DwMFaQ&c=ncDTmphkJTvjIDPh0hpF_4vCHvabgGkICC2epckfdiw&r=--LiNgtoHfPjPnEKFLeJr9qV3N1vxgN4hWV_E42dYVM&m=4HZIRF6gtBKtqaTzmjaHNw4pPJapodEg3V3LBHK9-GNaqmOuut91GXnHWxe2Fgtl&s=M-4EP-U_WCzTsDLiMa7xM5iT-v5n14eLpE3gP90RPBc&e=)

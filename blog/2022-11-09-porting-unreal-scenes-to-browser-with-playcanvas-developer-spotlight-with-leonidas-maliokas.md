---
authors: steven
slug: >-
  porting-unreal-scenes-to-browser-with-playcanvas-developer-spotlight-with-leonidas-maliokas
title: >-
  Porting Unreal Scenes to the Browser with PlayCanvas - Developer Spotlight
  with Leonidas Maliokas
tags:
  - unreal
  - spotlight
---

Welcome to Developer Spotlight, a new series of blog articles where we talk to developers about how they use PlayCanvas and showcase the fantastic work they are doing on the web.

Today we are excited to be joined by [Leonidas Maliokas](https://www.linkedin.com/in/leonidas-maliokas/), a freelance web and games developer for Solar Games.

He will show us how Solar Games ported a metaverse experience from Unreal to PlayCanvas in the video presentation below. Specific areas covered are:

- Converting scenes and assets from Unreal to PlayCanvas
- Runtime and load-time optimization
- Lighting and post processing
- Multiplayer with [Colyseus](https://www.colyseus.io/)
- Ready Player Me avatar integration
- Spatial-aware audio chat with [Agora](https://www.agora.io/en/)

<div className="iframe-container">
    <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/u_8-rzGkDjA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[Presentation Slides](/img/Porting-Unreal-to-the-Browser-with-PlayCanvas-Developer-Spotlight-with-Leonidas-Maliokas-Slides.pdf)

### Hi Leonidas, welcome to Developer Spotlight! Tell us about yourself and your studio

Hey, I’m Leonidas from Solar Games (formerly known as Pirron 1)! I’ve been working with interactive 3D websites since 2012. I used to work as a civil engineer before turning my hobby and passion for gamedev into a full time job using PlayCanvas.

Together with doing PlayCanvas contracts of all sorts, like product configurators, games and promotional sites, I’ve been researching how to extend the PlayCanvas engine and editor. Adding open world terrains, special effects and easy to use networked controllers to match features normally found in native only game engines, led to founding Solar Games.

We offer Uranus Tools for PlayCanvas, a collection of plug and play scripts to supercharge your PlayCanvas creation pipeline. You can find out more about our company’s services at [https://solargames.io](https://solargames.io).

We are also working on [Aritelia](https://aritelia.io), a procedurally generated open world social MMO in PlayCanvas. This is still in development but you can already give it a try with the pre-alpha tech demonstration that was released last year.

[![](/img/Leonidas-Developer-Spotlight-5.jpg)](/img/Leonidas-Developer-Spotlight-5.jpg)

[![](/img/Leonidas-Developer-Spotlight-1.jpg)](/img/Leonidas-Developer-Spotlight-1.jpg)

### Why did you choose PlayCanvas?

It was actually an easy choice for us: by reviewing the mainstream WebGL libraries and platforms, PlayCanvas did stand out for:

- Offering an integrated editor and publishing solution. Even after all these years, the ability to easily share projects and builds and collaborate with your colleagues in real-time is something unique to PlayCanvas.
- The PlayCanvas team is very productive and professional in the way it moves the platform forward.
- The open source PlayCanvas engine provides a very effective and easy to use API.

### What were the initial challenges and how did the team overcome them?

The main challenge was the lack of certain features and tools. For example things that you’d take for granted in a native game engine like a terrain system, post effects, automatic instancing and level of detail were missing.

The good news was that even before the PlayCanvas Editor API was officially released, it has always been possible to extend the PlayCanvas Editor. We were able to write our own editor extensions and quickly make them productive in our development pipeline.

Other developers and companies became interested in our extensions and we started offering them in our company’s asset store.

[![](/img/Leonidas-Developer-Spotlight-2.jpg)](/img/Leonidas-Developer-Spotlight-2.jpg)

### How is building an HTML5 game/experience different from a native game/experience?

Several concepts like rendering, resource loading, game logic and state management are quite similar. But there are some unique concepts when it comes to web-based experiences that can be challenging.

In particular, download times, different display sizes and pixel ratios, a broad spectrum of device specs, and also platform and browser compatibility.

Taking into account these factors is mandatory when building a high-quality HTML5 experience.

### What are the team's favorite features of PlayCanvas?

Our favorite feature is the editor, by far. The fact that it is collaborative in real time makes PlayCanvas the best tool for teams to work together. Also, the fact that PlayCanvas has version control integrated is pretty cool! Something else I would add is that PlayCanvas provides a very clean API to work with. Seriously, not only HTML5 devs but also native game devs should give PlayCanvas a try. It’s a great tool to quickly be productive!

Other than that:

- Asset pipelines like enabling texture compression.
- The engine API and the constant addition of new features by the PlayCanvas team.
- The community - many greetings to everybody!

### What is on the feature wishlist for PlayCanvas this year?

- Having the PlayCanvas WebGPU renderer available to play with.
- Full support of the new node based shader editor.
- Asset variants for specific platforms e.g. serve smaller textures on mobile.

### How do you see HTML5 games/experiences evolve over the next few years?

It’s definitely an exciting time for developers and companies working with HTML5 content. Both the technology has moved forward with standards and frameworks being more robust and powerful than ever, and the devices capable of running HTML5 experiences are very capable.

The metaverse is already leveraging HTML5 to deploy worlds and experiences across traditional web2 and newer web3 websites.

Pixel streaming is the only valid contender when it comes to what HTML5 can offer. I would definitely welcome a feature where pixel streaming is a viable option since it’s a great concept. But right now I don’t see this happening soon.

There are so many opportunities around HTML5 and I see a very positive future for everyone involved.

### Thank you very much for your time and we look forward to your presentation

Thank you for this opportunity to showcase our work!

[![](/img/Leonidas-Developer-Spotlight-3.jpg)](/img/Leonidas-Developer-Spotlight-3.jpg)

[![](/img/Leonidas-Developer-Spotlight-6.jpg)](/img/Leonidas-Developer-Spotlight-6.jpg)

Useful links:

- [Play the Solar Stage Demo](https://solargames.io/demos/solar-stage/)
- [Twitter @PlayingInCanvas](https://twitter.com/PlayingInCanvas)
- [Uranus Tools for PlayCanvas](https://solargames.io/tools/)

Stay tuned for more Developer Spotlights in the future!

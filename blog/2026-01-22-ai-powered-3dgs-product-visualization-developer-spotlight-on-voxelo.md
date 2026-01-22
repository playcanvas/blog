---
authors: will
slug: ai-powered-3dgs-product-visualization-developer-spotlight-on-voxelo
title: "AI-Powered 3DGS Product Visualization - Developer Spotlight on Voxelo"
unlisted: true
tags:
  - gaussian-splats
  - spotlight
---

Welcome to the sixth edition of Developer Spotlight, a series of blog articles where we talk to developers about how they use PlayCanvas and showcase the fantastic work they are doing on the web.

Today, we are excited to be joined by Vladimir, Roman and Ben from [Voxelo](https://voxelo.ai).

![Voxelo Team](/img/voxelo-team.png)

*Ben McKay, COO (Left), Vladimir Mulhem, CEO (Center), Roman Bromidge, CTO (Right)*

<!-- truncate -->

**Welcome to our Developer Spotlight! Tell us a bit about yourselves.**

We’re the team behind a new solution - [**Voxelo.ai**](https://voxelo.ai) - an ambitious group of engineers and product builders with backgrounds spanning 3D, AI, e-commerce and marketing. We’ve spent years working across web-based 3D, product visualization, and content production, and Voxelo.ai grew out of a shared frustration: e-commerce product experiences haven’t evolved nearly enough, and traditional 3D production is still too slow, expensive, and specialist-heavy.

* **Vladimir Mulhem, CEO** (ex-founder of 3D agency Creative Content Works)
* **Roman Bromidge, CTO** (ex-founder of Kaedim, a 3D AI start-up)
* **Ben McKay, COO** (ex-WPP agency and product leader)

[Voxelo.ai](https://voxelo.ai) is releasing Voxelo.ai 2.0 in beta from **21st January.**

![Voxelo Platform](/img/voxelo-platform.png)

**How did you first discover PlayCanvas?**

*Roman*: PlayCanvas kept coming up whenever we looked at high-performance, production-grade 3D viewers. As soon as we started testing real-time viewers for high-fidelity 3D assets, it became clear that PlayCanvas was setting the benchmark for performance and advanced features.

*Vlad*: It wasn’t just about the technical merits of the platform today. Having met with Will Eastcott a few times, we were excited by the alignment in ambition and direction. That kind of shared mindset really matters when choosing long-term partners.

**What made you choose PlayCanvas instead of other web technologies?**

*Ben*: Customers are king. That’s always the starting point. Our customers are e-commerce businesses where CX and web performance directly impact sales, so we have to maximize visual fidelity without compromising performance. Anything less than industry-leading simply isn’t good enough.

*Roman*: We tested plenty of alternatives, but PlayCanvas consistently delivered better frame rates, lower memory usage, and a more robust engine-level architecture. For a commercial platform like [Voxelo.ai](https://voxelo.ai), that reliability is critical. Add to that its open-source nature and flexibility - it fits perfectly with our ambitious roadmap and avoids locking us into rigid development models.

**Let’s talk about Voxelo.ai. In your own words, what is Voxelo.ai and what problem does it solve?**

*Ben*: [Voxelo.ai](https://voxelo.ai) is building a new type of AI content studio, with 3D at its heart. Our goal is to close the buyer confidence gap by bringing people closer to a product’s features and benefits through better product content.

We start by turning simple product videos and images into ultra-realistic 3D digital twins - optimised Gaussian splats. We listened closely to e-commerce businesses and designed a user-generated 3D workflow that lets them access the benefits of 3D without expensive equipment, specialist skills, long timelines, or big budgets. That’s a huge unlock for e-commerce. We refer to it as [UG3D®](https://www.voxelo.ai/) to underline the accessibility of this new format.

This serves two major needs.

First, consumers consistently say they want 3D because it increases confidence when buying - which means businesses increasingly *need* 3D. We make that accessible.

Second, it’s about operational efficiency. Once you have a 3D digital twin, almost anything becomes possible in product content - and that’s what we’re rolling out now.

With a digital twin, customers can create interactive 3D models, AR experiences, lifestyle imagery, and on-brand product visuals - all within an end-to-end platform. With PlayCanvas’ help, Voxelo delivers this at high impact, high speed, and low cost.

**3D and AI-driven 3D is evolving fast - what excites you most about this space?**

*Roman*: The shift from handcrafted 3D to data-driven 3D is huge. AI makes it possible to generate rich spatial content from everyday inputs like video. That fundamentally changes who can create 3D, and how often it can evolve.

*Vlad*: There’s a real 3D wave coming. It’s been building for years, but falling compute costs and better infrastructure mean businesses can finally deliver truly immersive shopping experiences at scale. Voxelo is right at the forefront of this. With support from Innovate UK, we’re investing heavily in R&D to make 3D’s value accessible to far more people.

**How does Voxelo.ai make 3D content more accessible for non-technical users?**

*Ben*: We obsess over workflow simplicity. Users don’t need to understand meshes, textures, or rendering pipelines. They upload a ~3-minute video, Voxelo processes it, and they get a web-ready 3D + AR experience straight out of the box.

Creation, processing, and publishing are all just a few clicks. We want solo entrepreneurs wearing multiple hats to feel just as comfortable as global retailers.

**Could you walk us through the process of creating a 3D asset with Voxelo.ai?**

*Roman*: The pipeline is intentionally simple:

* Shoot a 3–4 minute product video (most people use mobile phones, but DSLRs are great too)
* Upload it to [Voxelo.ai](https://voxelo.ai)
* Publish your product in 3D and AR

More advanced AI features are on the way. From there, we can also generate classic e-commerce imagery and lifestyle shots, all powered by the same 3D digital twin.

**Can you give an example of how Voxelo.ai is being used effectively today?**

*Ben*: We’re seeing strong traction in e-commerce product visualization, especially in categories where detail and realism matter—fashion, footwear, furniture, and homeware.

Early customers include major brands and retailers like Cosatto and SportShoes.com that are looking for scalability without compromising on the quality.

<div className="iframe-container">
    <iframe id="viewer" width="800" height="500" allow="fullscreen; xr-spatial-tracking" src="https://app.voxelo.ai/viewer/md7aja12f2x9csfkjkdamc1sdh7z6cv2"></iframe>
</div>

We see the greatest need, though, with mid-sized companies who are looking for a customer experience edge but haven’t had the budgets for costly 3D production previously. These have included emerging fashion designers like BEPO, who turn military parachutes into designer clothing, or Recondition, who make jeans for people with mobility challenges. Or manufacturers, like Eden Play, who need help showcasing the quality of their hand-crafted playground equipment. Each has a story to tell and 3D can help.

And the applications keep expanding. From cars to cushions, pottery to plants, sofas to shoes - when cost, complexity, and time drop this much, 3D is no longer reserved for only big-ticket items.

**How did PlayCanvas help you deliver a smooth experience across desktop and mobile?**

*Roman*: PlayCanvas gives us a consistent rendering layer across devices. The same asset works smoothly on desktop and mobile, with intelligent handling of performance constraints. That consistency is absolutely crucial for e-commerce customers.

**Were there any technical challenges integrating PlayCanvas, and how did you overcome them?**

*Roman*: The main challenge was integrating PlayCanvas effectively into our React application while still extracting maximum performance. The biggest surprise was how, once we embraced PlayCanvas as a web-based game engine, many of our integration hurdles dissolved. Initially, we started with PlayCanvas React for rapid prototyping, which was great for verifying our concepts. However, we sometimes struggled with mapping specific functionalities not directly exposed by the wrapper, requiring us to write custom scripts to interface with the underlying engine systems.

For some of the more involved functionalities, like our AR viewer and splat editor, we found building them as native PlayCanvas applications and then linking or embedding them within our existing React app significantly improved both performance and development speed. This approach helped us minimize dependencies and side effects, allowing us to get the most out of the engine.

**Can you share any interesting performance optimizations you’ve implemented?**

*Roman*: The greatest satisfaction came from the enormous performance gains we achieved over our previous 3D viewer implementation. We more than doubled the frame rate, and by leveraging PlayCanvas' SOG format, our 3D files are now a third of the size of our already compressed previous format. We've seen a 95%+ reduction in file size for the SOG file versus the raw PLY output from our 3D AI reconstruction process. It's amazing how a few simple, often overlooked things can dramatically improve performance; it just goes to show that thoroughly reading the documentation is always worthwhile. For instance, turning off anti-aliasing for our PlayCanvas app significantly boosts performance when rendering Gaussian splats—one little flag made a huge difference!

**Voxelo.ai has recently launched - how has the feedback been so far?**

*Ben*: The feedback has been really encouraging. We’ve been open and transparent with users from day one, building *with* them rather than just *for* them. That partnership approach has been invaluable - it’s helped us effectively map out the next three years of product features and value (on top of plenty of ideas we already had ourselves).

Some of the early feedback has been usability-focused - things like making the capture process more intuitive, or improving guidance and help resources. But the most exciting feedback has been around our direction and ambition: users are asking for even more features, recognizing the recent performance gains (especially since deploying PlayCanvas), and calling out the jump in visual fidelity - in many cases comparable to high-quality e-commerce product photography.

**Who do you see as the ideal audience or customer for Voxelo.ai?**

*Ben*: Our initial hypothesis was that SME retailers - particularly in footwear, fashion, furniture, and homeware - would benefit most from [Voxelo.ai](https://voxelo.ai). That’s still very much true. But the biggest surprise has been the level of enterprise interest.

Large brands are wrestling with the same questions: *How do we create gold-standard PDPs (product detail pages)?* *How do we elevate our product experience and give us a competitive edge?*

We’re building a new type of AI content studio powered by 3D - but designed to be genuinely easy to use and ready to scale across existing and emerging AI-powered workflows.

**What are your plans for upcoming features or improvements?**

*Roman*: Tons! More to come, but as a teaser - yes, we’re leaning hard into AI (I mean, who isn’t?). The goal is to make the product as easy and scalable as possible. We're rolling out a wave of new features in Q1, and a key focus will be refining and streamlining the onboarding experience - it’s a critical area we don’t want to overlook.

More broadly, we're optimizing to become ultra-native to e-commerce teams - embedding more deeply into their workflows, tools, and day-to-day operations.

*Vlad*: Thanks in part to support from Innovate UK and our partnership with the University of Manchester, we’ve built a strong R&D pipeline. Some aspects of the roadmap are still exploratory, but we’re not flying blind - we’re backing our ideas with a strong team and grounded market insight. A big theme is reducing the inputs required to create 3D while expanding what customers can do creatively, especially with AI. There’s a lot of potential here, and we’re excited for both the team and our users to push into these next frontiers.

**How can the PlayCanvas community try Voxelo.ai or get involved?**

*Ben*: We’re actively onboarding early users and collaborators. The PlayCanvas community is ace, and we’re always keen to hear feedback from developers building real-world 3D products.

Whilst we’re building for non-technical users, we’re also hearing that technical specialists might well value simplified workflow. If any of the community want to create an account or partner in some way, [please register here](https://v2.voxelo.ai/) or email the team at [hello@voxelo.ai](mailto:hello@voxelo.ai).

**Where do you see web-based photorealistic 3D content heading in the next few years?**

*Vlad*: We believe 3D will become **as standard as images and video**, especially in commerce. AI will continue to reduce costs and friction, while engines like PlayCanvas make delivery seamless across devices.

*Roman*: In the future, I believe it will become standard to have a 3D digital twin of your products, available at any time for you to leverage to make new content and help understand your buyers. No more messy management of ten different content pipelines, no more figuring out which warehouse your stock is in so you can ship it to the photographer, no more lost sales because you couldn't quite realize your vision for how the product can be shown. Furthermore, with embedded 3D on your product page, you can understand your customer better than ever before: what exactly do customers look at on your product before they click buy? What do they spend the most time examining? With [Voxelo.ai](https://voxelo.ai), we're really excited because having a realistic 3D representation of your product enables so many more opportunities to improve buyer confidence and gain deeper understanding of your customers.

*Ben*: I hope to see it across all web platforms...at least in the context of social commerce. It feels odd that the technology now exists, consumers want it and businesses need it. It has the potential to increase consumers' product comprehension, increase growth and reduce returns (and with it, reduce carbon footprint)...and yet. Surely, it’s just around the corner. Surely.

**Any advice for developers looking to build commercial products on PlayCanvas?**

*Roman*: Build with real users early. PlayCanvas is incredibly capable, but the biggest wins come from pairing strong performance with simple, opinionated, constructive and collaborative user experiences. Don't be afraid to ask questions, read the docs thoroughly, and think of it more like a game engine than a traditional web dependency.

**What’s been the most rewarding part of building Voxelo.ai so far?**

*Vlad*: I’ve spent the vast majority of my career obsessed with 3D, because in e-commerce the limitations of a flat, 2D screen are felt more acutely than anywhere else. We ask customers to make purchase decisions without touch, weight, scale, or presence - and then wonder why confidence drops and returns go up.

Turning a 2D screen into a 3D experience fundamentally changes that equation. 3D allows products to be explored rather than imagined. It gives shoppers clarity around form, proportion, detail, and quality - the same cues they rely on in the physical world. When done well, 3D doesn’t just look impressive; it reduces uncertainty, builds trust, and helps people buy with confidence.

What excites me most today is that 3D is finally becoming viable at e-commerce scale. Historically, it’s been too expensive, too slow, and too specialist-driven to deploy across large catalogues. With real-time web engines and AI-driven 3D creation, we’re reaching an inflection point where 3D can be produced as naturally as images or video.

That shift unlocks a future where 3D isn’t a novelty or a campaign asset, but a core layer of product content - helping every shopper better understand what they’re buying, and helping brands convert more confidently at scale.

*Roman*: The most rewarding part has been building all the exciting ways for users to leverage their 3D digital twin. From my background as co-founder of Kaedim, I understood that 3D is critical for so many industries, yet so underutilized because of its cost and difficulty. Now, I'm really excited to enable new generations of creatives to transform their products into 3D and from there into anything they can imagine.

*Ben*: Just to add…seeing users create compelling 3D experiences without needing to become 3D experts. That moment when something complex suddenly feels easy is exactly why we built [Voxelo.ai](https://voxelo.ai)…and will continue to build in a way that grows buyer confidence.

**What’s one message you want to leave with our readers?**

*Ben*: 3D has tried to break through before - but this time, it feels a little different. The tech is ready, costs are dropping dramatically and growing numbers of communities are rallying. And now, AI has blown the doors open on creative potential. Interactive, ultra-real 3D and AI is no longer coming - it’s here - and Voxelo are all in on re-imagining how this impacts new digital experiences. Huge thanks to the community for the support!

**Thanks for chatting with us, Vlad, Roman and Ben!**

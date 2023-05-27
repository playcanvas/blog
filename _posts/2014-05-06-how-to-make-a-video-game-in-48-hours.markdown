---
author: will
comments: true
date: 2014-05-06 00:22:40+00:00
layout: post
link: https://blog.playcanvas.com/how-to-make-a-video-game-in-48-hours/
slug: how-to-make-a-video-game-in-48-hours
title: How to Make a Video Game in 48 Hours
wordpress_id: 1202
categories:
  - Announcement
  - News
---

Making a video game in 48 hours is tough. In fact, it's one of the most gruelling mental challenges you can face. But every 4 months, thousands of die hard game developers enter [Ludum Dare](http://www.ludumdare.com/compo/), a game jam of epic proportions. And they're not doing it for the prizes (there aren't any) or even the glory. They're doing it to give the gift of a game. And when it's a game you have created yourself, it's a very personal and powerful gift.

So I took part in Ludum Dare once more on the 26th-27th of April. Before I even knew the theme, I developed a number of aims:

- I was going to be using PlayCanvas and I was going to be pushing the tools as hard as I possibly could.
- I was going to be building my game more transparently than any other game jammer in history. Seriously.
- I wanted to make something 3D and physics based.

As usual, the theme was announced in the early hours of Saturday morning: 'Beneath The Surface'. Ordinarily, I would settle on an obscure interpretation of a theme, but this time around, my creative juices were not in full flow so I took the literal route. I was going to make a game where you would pilot a submarine.

After about 30 minutes, I had the basic physics of a twin propeller sub implemented (arrow keys to control):

[http://apps.playcanvas.com/will/beneaththesurface/v1](http://apps.playcanvas.com/will/beneaththesurface/v1)

I was off to a flying start! But making video games is art. It's practically a spectator sport and I was determined to give the internet full access to my creative process. And this is what makes PlayCanvas so cool. I could simply invite the internet into my project:

[![Screen Shot 2014-05-06 at 00.25.19](https://blog.playcanvas.com/wp-content/uploads/2014/05/Screen-Shot-2014-05-06-at-00.25.19.png)](https://blog.playcanvas.com/wp-content/uploads/2014/05/Screen-Shot-2014-05-06-at-00.25.19.png)

And indeed, I had a steady flow of curious spectators dropping in and out of [my project](https://playcanvas.com/user/will/beneaththesurface) as it slowly took shape. If nothing else, it kept me super-motivated.

The Twitter comms continued throughout the weekend. In all, I published 10 interim builds of the game plus the final 'gold' release at submission time. You can find them all on the ['Published Apps' page](https://playcanvas.com/user/will/beneaththesurface/apps) on the project's dashboard. So it's great to show the world your game rising from its foundations, but are there any other benefits to this 'bare all' strategy? Why yes! You get feedback on your game design, you graphical design, your audio, everything! Your Twitter followers are your QA team. Use them!

So I was absolutely nailing the comms side of things. But there was the little matter of actually making the game. I had my simple prototype and now I had to build it out. I slowly developed the concept where the player has to explore an undersea environment to locate and salvage 10 pipes and return them to a 'drop off' point. I also added the necessity to keep the sub topped up with fuel by visiting refuelling points. There were a number of challenges that I had to solve. I'll go through the main ones now:

### Terrain

I needed a dramatic undersea landscape. Unfortunately, my modelling skills suck so I resorted to a sneaky procedural solution. Step 1: Generate a heightmap. Check out [this tutorial](http://www.jasonsturges.com/2012/12/creating-a-terrain-for-unity-3d-with-photoshop/) that shows you how to do that in Photoshop. Step 2: Create a 150x150 division plane in 3DS Max and apply a Displace modifier. Then set the heightmap as the source texture for the displacement:

[![terrain](https://blog.playcanvas.com/wp-content/uploads/2014/05/terrain.png)](https://blog.playcanvas.com/wp-content/uploads/2014/05/terrain.png)

I also exported a 75x75 division version which I would use for environment collision which would essentially be an optimization for the physics engine. It would have been nice if I had had time to texture map it. In Ludum Dare, you have to avoid getting caught up in the detail. Keep your eye on the goal and if you have time left at the end, come back and polish.

### Building the Submarine

As I mentioned, my modelling skills are pretty horrendous. Perhaps the hardest thing I had to build was the submarine (I also made a Flappy Bird-esque pipe, a refuelling station and a drop off point). So between 2AM and 5AM on Sunday morning, I built this in 3DS Max:

[![submarine](https://blog.playcanvas.com/wp-content/uploads/2014/05/submarine.png)](https://blog.playcanvas.com/wp-content/uploads/2014/05/submarine.png)

So it wasn't pro-level art production, but I was proud that I had improved my skills in this area. I built the propeller separately since they were controlled independently in PlayCanvas. Anyway, I had a lot of fun learning all about powerful 3DS Max features like boolean geometry (for combining meshes in different ways) and various modifiers for skewing and warping meshes.

### Game UI

HUDs can be a nightmare to build and build fast. Luckily, there's a handy PlayCanvas extension that renders bitmap fonts beautifully. It was developed originally for the game [SWOOOP](http://swooop.playcanvas.com/) and it worked so well, it was [open sourced on GitHub](https://github.com/playcanvas/fonts). I found an open source approximation of the Flappy Bird font and imported it into my project. Super easy and it looked great:

[![pipewars_splash](https://blog.playcanvas.com/wp-content/uploads/2014/05/pipewars_splash.jpg)](https://blog.playcanvas.com/wp-content/uploads/2014/05/pipewars_splash.jpg)

### Audio

I've already mentioned that I can't model for toffee. My composing skills are even worse. So what's a Ludum Darer to do? I googled: 'Ludum Dare procedural music'. Top link:

[http://www.ludumdare.com/compo/2013/02/19/procedural-music-generator/](http://www.ludumdare.com/compo/2013/02/19/procedural-music-generator/)

The Abundant Music procedural music generator is great:

[![am_screenshot_1](https://blog.playcanvas.com/wp-content/uploads/2014/05/am_screenshot_1.png)](https://blog.playcanvas.com/wp-content/uploads/2014/05/am_screenshot_1.png)

Check it out for yourself!

Hopefully, that gives you a good idea of how I spent a lot of my time while developing the game. Do check out the project for yourselves to learn more and, hey, if you want to see the finished game:

[**PLAY NOW!!**](http://apps.playcanvas.com/will/beneaththesurface/pipewars)

So I guess the moral of the story here is that you don't need to be a Leonardo de Vinci to make artwork or Mozart to make game audio. There are tools out there that can do 90% of the heavy lifting. You just need to know which buttons to press. Doing your research in advance of a game jam will help you. And the more jams you do, the more tricks you will have up your sleeve.

I've been making video games for decades now and I'm still learning. I guess that's what keep me coming back for more. See you all for Ludum Dare #30 in August!

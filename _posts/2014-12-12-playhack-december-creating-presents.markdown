---
author: nathan
comments: true
date: 2014-12-12 16:58:34+00:00
layout: post
link: https://blog.playcanvas.com/playhack-december-creating-presents/
slug: playhack-december-creating-presents
title: PLAYHACK December - Creating Presents
categories:
  - PLAYHACK
  - Tutorial
---

_**PLAYHACK** is our fun monthly game building session. Throughout the month I’ll be posting tips and tricks to help you get a game made by the end of the month. Don’t forget, these are just examples. You can make **any** game you like. [Read more](https://blog.playcanvas.com/playhack-december-jolly-santa/) about this month’s PLAYHACK._

![PLAYHACK Logo](/assets/media/playhack-logo-xmas.jpg)

We'll be following on from [last time's tutorial](https://blog.playcanvas.com/playhack-december-player-character/) this time, so make sure you've followed that one before attempting this!

<!-- more -->

{% include playcanvas.html type="b" id="eyPboW2T" %}

_Use W and S to move the sleigh._

In this tutorial, we're going to program the gifts that will come in from the right for Santa to collect.

### Moving the Presents

[![Santa and the Present](/assets/media/editor-santa-and-present.png)](/assets/media/editor-santa-and-present.png)

To start with, we'll need to create a script that will make the presents move across the screen towards Santa. We're also going to make the presents rotate, just because it looks nice. To do that, we need to attach a new script to the Gift entity, just like we did last time with Santa. Call it something like 'gift_controller'.

Now, let's think about what we need - just like with Santa's script, we're going to need the speed we want the presents to move, and we'll also need the speed we want the presents to rotate. So let's make two attributes for that:

```javascript
pc.script.attribute("speed", "number", 10);
pc.script.attribute("rotspeed", "number", 90);
```

Put them at the top of the script like before (remember to do _Entity > Refresh Script Attributes_ when you come to test!).

Now we need to move the gift every frame. This is again, very similar to the Santa movement code:

```javascript
// Called every frame, dt is time in seconds since last update
update: function (dt) {
    this.entity.translate(0, 0, -this.speed*dt);
    this.entity.rotate(0, this.rotspeed*dt, 0);
}
```

To move the present, we use the `entity.translate` function, as before. To rotate, we use the `entity.rotate` function, which as its name suggests, rotates the present by a certain amount.

If you launch the game (remembering to do _Entity > Refresh Script Attributes_!) then the present in the middle of the screen should hopefully move offscreen whilst rotating. Success!

### Creating Many Presents

[![Many Presents](/assets/media/Screen-Shot-2014-11-24-at-15.58.42.png)](/assets/media/Screen-Shot-2014-11-24-at-15.58.42.png)

Now, we'll need to create a script that will create presents every so often off the right hand edge of the screen. This might seem odd - up until now we've only created scripts that do things to entities already on screen. To do this, we're going to attach a script to the root entity of the game - which is the entity called "Santa" in the pack explorer. Add a script to the root entity called 'gift_creator'.

So, let's think about how to go about this. We've got quite a few things to think about. Firstly, how do we add new presents? We can achieve this by cloning the gift that's already on screen. To do this, we need a reference to that present. In the `initialize` method, add the following code:

```javascript
this.gift = context.root.findByName("Gift");
```

Now we have a variable, `this.gift`, which contains the gift that is on screen. We'll get on to how to clone it in a second.

What else do we have to think about? Two main things - where we want to add the new presents, and how often we want to add them. We're going to have an element of randomness to where and when we add the presents - we want the presents to come in from the right at different heights, and we also don't want the presents to come in like clockwork - we want to keep the player on his toes and have them spawn with slightly different amounts of time between them.

We'll add some new attributes so we can easily test and change these things:

```javascript
pc.script.attribute("avgPresentTime", "number", 0.75);
pc.script.attribute("presentRange", "number", 0.5);
pc.script.attribute("maxY", "number", 8);
pc.script.attribute("offscreenZ", "number", 20);
```

`avgPresentTime` is the average amount of time between each present coming spawning, and `presentRange` is how many seconds around the average time presents could come in. `maxY` is the highest position a present could come in at, and `offscreenZ` is the z position we are going to create our new presents at.

So, now we've got all these attributes, what do we need to do? We need some sort of timer than allows us to check whether or not to add a new present yet. Let's add some variables so we can do that:

```javascript
initialize: function () {
    this.gift = context.root.findByName("Gift");
    this.presentTimer = 0;
    this.presentTimeToGet = 0;
},
```

The first line we added earlier - but we've now got two new variables, `presentTimer` and `presentTimeToGet`. We will use `presentTimer` to count how long it's been since we last added a present, and `presentTimeToGet` will be how long we need to wait until adding the next present.

So, we now know that every frame, we need to increment `this.presentTimer` by the amount of time passed since the last frame - which is helpfully passed into the `update` function as the variable `dt`.

```javascript
update: function (dt) {
    this.presentTimer += dt;
    if(this.presentTimer >= this.presentTimeToGet) {
        //Create a new gift
    }
}
```

So, now we know when we're adding a new gift. To add a new gift to the game, we can use the following code:

```javascript
var newGift = this.gift.clone();
newGift.enabled = true;
context.root.addChild(newGift);
```

This clones `this.gift`, and stores the new gift in the variable `newGift`. We then have to do two things to actually get the gift in game - we have to enable it, and then add it to the entity hierarchy.

Now we have a new gift in the game - however, it's at the same position as the first gift! That's not good. We want it to be offscreen at a random height to start with! Let's fix that.

```javascript
// Set its position correctly
var rand = Math.random() * 2 - 1;
var newY = rand * maxY;
newGift.setPosition(0, newY, this.offscreenZ);
```

There's a few new things going on here! First, let's look at the randomness. `Math.random()` is a built in JavaScript function that returns a random number from 0 to 1. We, however, want a random number from `maxY` to negative `maxY`. To achieve this, we multiply our random number by 2 (giving us a number between 0 and 2), then take away 1 (between -1 and 1), then multiply it by maxY (between `-maxY` and `maxY`). Once we have the random `newY` position, we can set the position of the `newGift`.

Now, we're very almost done. However, we've now added a present, so we need to reset `presentTimer` to 0, as it's been 0 seconds since we added a present! We also want to change `presentTimeToGet`, as we want to wait a slightly different length of time before adding another present.

```javascript
// And reset the timer
this.presentTimer = 0;
this.presentTimeToGet = this.avgPresentTime + this.presentRange * (Math.random() - 0.5);
```

We use `Math.random()` again here to get the time before we want to add another present. This gives us a number that will be no more than half of `presentRange` away from `avgPresentTime`.

That should be it! Test your code (REMEMBER _Entity Menu > Refresh Script Attributes_), and presents should start coming in from the right. Perfect!

### Housekeeping

One last thing - we've left the sack floating in the middle of the screen, and we don't really want the first present to start in the middle of the screen either. To fix this, simply select the gift/sack, and uncheck the 'Enabled' attribute. That's it! The initial sack and gift will no longer show up in the editor or when you test the game.

Next time, we'll be looking at [Trigger Volumes](https://developer.playcanvas.com/tutorials/collision-and-triggers/), which will allow us to have Santa actually collect the presents when he touches them.

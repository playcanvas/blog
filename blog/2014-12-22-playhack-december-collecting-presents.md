---
authors: nathan
slug: playhack-december-collecting-presents
title: PLAYHACK December - Collecting Presents
---

_**PLAYHACK** is our fun monthly game building session. Throughout the month I’ll be posting tips and tricks to help you get a game made by the end of the month. Don’t forget, these are just examples. You can make **any** game you like. [Read more](https://blog.playcanvas.com/playhack-december-jolly-santa/) about this month’s PLAYHACK._

![PLAYHACK Logo](/img/playhack-logo-xmas.jpg)

<!-- truncate -->

We'll be following on from [last time's tutorial](https://blog.playcanvas.com/playhack-december-creating-presents/) this time, so make sure you've followed that one before attempting this! As always, you can check out all the up to date code [in this project](https://playcanvas.com/project/333523/overview/playhack_december).

<div className="iframe-container">
    <iframe loading="lazy" src="https://playcanv.as/b/MjlE6fOY/" title="360 lookaround camera" webkitallowfullscreen="true" mozallowfullscreen="true" allow="autoplay" allowfullscreen="true" allowvr="" scrolling="no" frameborder="0" />
</div>

_Use W and S to move the sleigh._

In this tutorial, we're going to do two things - delete the presents as they go off-screen, and find out when the presents collide with Santa. How are we going to do all this? The answer: **Trigger Volumes**!

## Adding an Offscreen Trigger Volume

At the moment, when presents go offscreen, they just keep going on and on forever and ever. We don't need the presents anymore after they've gone offscreen, so it doesn't hurt (and may even help) us if we delete them. So, we need a way to test when a present has left the screen. We can do that with a Trigger Volume placed just offscreen.

[![DEC-PLAYHACK-TUT3-2](/img/DEC-PLAYHACK-TUT3-2.png)](/img/DEC-PLAYHACK-TUT3-2.png)

You may be thinking - what is a trigger volume?! A trigger volume is simply an **entity with a collision component** added to it (but without a rigidbody - we'll get to that later). They allow us to test when rigidbodies enter and leave them - which is perfect for testing when a present goes off-screen.

So, to add the off-screen trigger volume, simply right click on "Santa" in the Pack Explorer and add a new Entity. I called mine "offscreen". Then, add a collision component to your new offscreen entity - a small blue cube should appear in the editor. Now, all we need to do is move it off-screen, and resize it so it catches all the presents. You can move it with the translate tool, and to make it big enough, you can edit the "half-extents" of the collision component until it covers the whole of the edge of the camera.

[![DEC-PLAYHACK-TUT3-3](/img/DEC-PLAYHACK-TUT3-3.png)](/img/DEC-PLAYHACK-TUT3-3.png)

Now, let's write some code to delete the presents that come off-screen. Add a script component to the offscreen entity, and add a new script - I called the script "offscreen.js" (creative name, I know).

Whenever a rigidbody enters the trigger volume, the collision component will fire an event that we can listen to. Or, in simple terms, we can tell the collision component to call a specific function any time it comes into contact with a rigidbody. Put the following code in the initialize function of your new script:

```javascript
this.entity.collision.on('triggerenter', this.onTriggerEnter, this);
```

This tells our collision component that when the "**triggerenter**" event happens (i.e. something enters the trigger volume), call the function "**onTriggerEnter**", in the scope of **this** (so we have access to all our variables and functions). Let's write that function now:

```javascript
onTriggerEnter: function (other) {
    other.destroy();
}
```

Pretty simple huh? The onTriggerEnter function gets called with one argument, which is the entity it collided with. We simply destroy that entity, and it's gone!

## Setting up the present

[![DEC-PLAYHACK-TUT3-1](/img/DEC-PLAYHACK-TUT3-1.png)](/img/DEC-PLAYHACK-TUT3-1.png)

If we run the game now though, the presents still won't get deleted even if they go off-screen! That's because trigger volumes only check for collisions with rigidbodies, so we'll need to add some more components to the present. We need to add a **collision** component and a **kinematic rigidbody** component. Together, these will allow us to check when the present passes through our trigger volumes.

So, add those components to the Gift. Make sure you change the "type" attribute of the rigidbody component to **Kinematic** - we don't want it to be Static, because then we couldn't move the presents, and we don't need it to be **Dynamic** because then our present would get affected by gravity and physics and we don't need that. **Kinematic** allows us to move our present in code, but not have it affected by physics. You can fiddle around with the half extents of the collision box until it fits around the present too.

You'll also notice the collision box isn't centred on the present model. To fix this, you can removed the model component from Gift and add a model entity child instead, which you can then translate without affecting the position of the collision box.

One last thing - it's very important that you uncheck the Enabled attribute of the Gift. If the original gift goes off-screen and collides with the off-screen Trigger Volume, it will get deleted, and we won't be able to make any copies of it. We can make sure that never happens by disabling the present - now the original present won't do anything, but it will still be there for us to clone and make more presents.

If you test the game now, the presents should be getting deleted after they go off-screen! You can test that it's actually working by moving the off-screen Trigger Volume on-screen a bit - the presents should then disappear just before they go off-screen.

## Santa Trigger Volume

But the present going offscreen isn't the only thing we want to check for - we also need to check when it collides with Santa! Luckily, this is very similar to the offscreen trigger volume.

Like before, we need to add a collision component - so right click on Santa and add one. There's a clever thing we can do here: instead of messing around with the half-extends of the collision box, trying to get it to match Santa, we can simply tell the collision component to match the size and shape of the Santa Model. Change the type attribute of the collision component to **Mesh**, and select the Santa_sleigh model for the **Asset**. Now, the collision will only check for exactly the right size of Santa.

Wondering why we can't use a Mesh for the collision component of Gift? Checking for collisions between two Meshes is a lot more computationally expensive compared to comparing collisions with simple geometry. Therefore, checking for a collision between two Meshes isn't allowed, and since our present is basically a cube, we're using a cube for the collision volume of the present.

Now we just need to add a small amount of code to Santa so we know when presents collide with him.

```javascript
this.entity.collision.on('triggerenter', this.onTriggerEnter, this);
```

Put that line in the santa_controller.js script - it does exactly the same thing as before. We're going to write a simple onTriggerEnter function for now, and actually write the functionality we want next time.

```javascript
onTriggerEnter:function(other) {
    if (other.name === "Gift") {
        other.destroy();
        // we'll be adding score incrementing and other stuff here...
    }
}
```

All we're doing here at the moment is the same as the offscreen trigger volume - destroying the present when it comes into contact with Santa.

And that's it for this time! Next time we'll be looking at adding a GUI to the game so you can see how many presents you've collected!

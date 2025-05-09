---
authors: dave
slug: new-maths-api
title: Incoming Breaking Changes - New Maths API
tags:
  - engine
---

Our new math API will make your life so much easier, but it will require updating your game.

<!-- truncate -->

![Maths](/img/think-maths.png)

One of the first things that is written for a new game engine is the Math library. A critically important base for your engine and used by almost every game that is written using the engine. The Math library must be fast, consistent and succinct.

The PlayCanvas engine was first started almost 3 years ago, so the Math library is already a venerable old friend. But it's a friend that is in need of a facelift. (!? - Ed) So in the next few days we'll be releasing Math API v2.0 for our Engine.

## What does this mean for you?

First, let's give you a little sample of how the Math library is going to work.

Here is some code from our recent Ludum Dare game Going Around.

```javascript
// In this code, we get the camera position,
// We convert a mouse click into world space
// Then we calculate the ray end point from
// the mouse click using a variety of vector operations
pc.math.vec3.copy(camera.getPosition(), this.rayStart);
camera.camera.screenToWorld(event.x, event.y, 1, this.rayEnd);
pc.math.vec3.subtract(this.rayEnd, this.rayStart, this.rayEnd);
pc.math.vec3.normalize(this.rayEnd,this.rayEnd);
pc.math.vec3.scale(this.rayEnd, RAY_LENGTH, this.rayEnd);
pc.math.vec3.add(this.rayStart, this.rayEnd, this.rayEnd);

context.systems.rigidbody.raycastFirst(this.rayStart, this.rayEnd, this.onRayHit.bind(this));
```

This is what this will look like in the new API.

```javascript
this.rayStart.copy(camera.getPosition());
camera.camera.screenToWorld(event.x, event.y, 1, this.rayEnd);

// subtract, then normalize, then scale by RAY_LENGTH, then add
this.rayEnd.sub(this.rayStart).normalize().scale(RAY_LENGTH).add(this.rayStart);

context.systems.rigidbody.raycastFirst(this.rayStart, this.rayEnd, this.onRayHit.bind(this));
```

As you can see we now support chaining vector operations together. This makes the code more concise, and also more readable. If you read through the line you can see we `subtract`, `normalize`, `scale` and then `add`. All into the same vector.

This shows you how it will work for vectors but these changes apply to all our math primitives such as matrices and quaternions.

So hopefully you can see that the new math library is going to be an all round better beast, but obviously it does mean breaking changes. Even though our engine is pre-1.0, we never issue breaking changes lightly. It's a pain for you and it's a pain for us. But in this case, it's important that such a fundamental piece of the engine is easy to use and "just right".

## When is it going to break?

We doing the final round of testing at the moment, just to make sure everything works perfectly. We'll be deploying the engine very soon (today or tomorrow). This is a heads up so you know why we're doing it.

After we deploy, we'll be updating all the samples and examples to use the new API. This will take a little bit of time, so some of them may not be up-to-date immediately.

---
authors: dave
date: 2013-10-31 17:47:54+00:00
link: https://blog.playcanvas.com/light-and-collision-component-api/
slug: light-and-collision-component-api
title: Light and Collision Component API
categories:
  - Announcement
tags:
  - editor
---

Light and Collision components have been consolidated from 7 components to 2!

Today we deployed the second of two changes to our Component System designed to make dealing with Collision and Lighting much simpler. We've combined the 4 collision Components (_collisionbox_, _collisionsphere_, _collisioncapsule_, and _collisionmesh_) into a single _collision_ Component. And we've combined 3 light Components (_directionlight_, _pointlight_, _spotlight_) into a single _light_ Component. Both Components now have a _type_ attribute which you can use to switch between the different behaviors.

Why make this breaking change, I hear you ask? These changes drastically simplify the API when you are coding. So now code like this:

```javascript
this.entity.light.enable = false;
this.entity.collision.on("collisionstart", this.onCollision);
```

It will work with every type of light or collision shape you are using.

We've automatically migrated all Packs in your Projects to the new Components, so in most cases you won't even notice the difference.

However, for some people - if you are using the old Components in scripts - this will break your existing projects. We don't do this lightly, even though we are pre-1.0. However, fixing your projects should be straightforward. In most cases just changing the old Component to the new one in your code will fix it. You might also need to add the _type_ property to set which Component type you want.

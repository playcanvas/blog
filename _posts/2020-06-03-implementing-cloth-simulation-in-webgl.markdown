---
author: raytran
comments: true
date: 2020-06-03 11:50:04+00:00
layout: post
link: https://blog.playcanvas.com/implementing-cloth-simulation-in-webgl/
slug: implementing-cloth-simulation-in-webgl
title: Implementing Cloth Simulation in WebGL
wordpress_id: 2591
categories:
  - News
tags:
  - ammojs
  - cloth
  - physics
  - PlayCanvas
  - webgl
---

The PlayCanvas WebGL game engine integrates with [ammo.js](https://github.com/kripken/ammo.js) - a JavaScript/WebAssembly port of the powerful [Bullet](https://github.com/bulletphysics/bullet3) physics engine - to enable rigid body physics simulation. We have recently been working out how to extend PlayCanvas’ capabilities by using soft body simulation. The aim is to allow developers to easily set up characters to use soft body dynamics.

Here is an example of a character with and without soft body cloth simulation running in PlayCanvas:

[![](https://blog.playcanvas.com/wp-content/uploads/2020/05/clothblog4.gif)](https://playcanv.as/p/WpURkO1l/)

## **[CLICK TO PLAY DEMO](https://playcanv.as/p/WpURkO1l/)**

Want to know how it was done? Read on!

**_Step 1: Create a soft body dynamics world_**

By default, PlayCanvas' rigid body component system [creates an ammo.js dynamics world](https://github.com/playcanvas/engine/blob/master/src/framework/components/rigid-body/system.js#L185) that only supports generic rigid bodies. Cloth simulation requires a soft body dynamics world ([btSoftRigidDynamicsWorld](https://pybullet.org/Bullet/BulletFull/classbtSoftRigidDynamicsWorld.html)). Currently, there's no easy way to override this, so for the purpose of these experiments, a new, parallel soft body dynamics world is created and managed by the application itself. Eventually, we may make the type of the internal dynamics world selectable, or maybe even allow multiple worlds to be created, but for now, this is how the demo was structured.

**_Step 2: Implement CPU skinning _**

PlayCanvas performs all skinning on the GPU. However we need skinned positions on CPU to update the soft body anchors ([btSoftBody::Anchor](https://pybullet.org/Bullet/BulletFull/structbtSoftBody_1_1Anchor.html)) to match the character's animation. CPU skinning may be supported in future PlayCanvas releases.

**_Step 3: Patch shaders to support composite simulated and non-simulated mesh rendering_**

Soft body meshes will generate vertex positions and normal data in world space, so in order to render the dynamically simulated (cloth) parts of character meshes correctly, we have to patch in support by overriding the current PlayCanvas [vertex transform shader chunk](https://github.com/playcanvas/engine/blob/master/src/graphics/program-lib/chunks/transform.vert). In a final implementation, no patching should be necessary, as we would probably add in-built support for composite simulated and non-simulated mesh rendering.

**_Step 4: Implement render meshes to soft body meshes conversion_**

PlayCanvas character meshes cannot be used directly by the soft body mesh creation functions ([btSoftBodyHelpers::CreateFromTriMesh](https://pybullet.org/Bullet/BulletFull/structbtSoftBodyHelpers.html#a272cdc7d6d2ad911550d823419bdd3e7)) and so require some conversion, so the PlayCanvas [vertex iterator](https://github.com/playcanvas/engine/blob/master/src/graphics/vertex-iterator.js) was used to access and convert the mesh data. Eventually this conversion could be done on asset import into the PlayCanvas editor.

**_Step 5: Implement per-bone attachments_**

PlayCanvas currently doesn't have a way to attach objects to specific character bones via the Editor (it's on our roadmap for the coming months!). Therefore, per-bone attachments was implemented in order to attach simplified rigid body colliders to different parts of the character to prevent the cloth from intersecting the character mesh. We are using simplified colliders instead of trying to use the full skinned character mesh because it runs much faster.

If you are feeling adventurous, you can find the prototype source code for the example above in this PlayCanvas project:

[https://playcanvas.com/project/691109/overview/cloth-simulation-demo](https://playcanvas.com/project/691109/overview/cloth-simulation-demo)

It is a prototype implementation and so expect many changes (some of which are mentioned above) in a final implementation.

Want to try soft body dynamics on your own character? Here's how:

**_Step 1: Fork the [PlayCanvas prototype project](https://playcanvas.com/project/691109/overview/cloth-simulation-demo). _**

**_Step 2: Mark out what parts of the character you want simulated:_**

This is done by painting colors into the character mesh vertices - the example character was downloaded from [Mixamo](https://www.mixamo.com/), and imported into [Blender](https://www.blender.org/):

[![](https://blog.playcanvas.com/wp-content/uploads/2023/01/cloth-simulation-painted-vertices-1-1024x913.jpg)](https://blog.playcanvas.com/wp-content/uploads/2023/01/cloth-simulation-painted-vertices-1.jpg)

[![](https://blog.playcanvas.com/wp-content/uploads/2023/01/cloth-simulation-painted-vertices-2-996x1024.jpg)](https://blog.playcanvas.com/wp-content/uploads/2023/01/cloth-simulation-painted-vertices-2.jpg)Black = fully simulated, White = not simulated

**_Step 3: Import the character into the PlayCanvas editor and set up collision:_**

[![](https://blog.playcanvas.com/wp-content/uploads/2023/01/cloth-simulation-collision-1-1014x1024.jpg)](https://blog.playcanvas.com/wp-content/uploads/2023/01/cloth-simulation-collision-1.jpg)

[![](https://blog.playcanvas.com/wp-content/uploads/2023/01/cloth-simulation-collision-2.jpg)](https://blog.playcanvas.com/wp-content/uploads/2023/01/cloth-simulation-collision-2.jpg)On this character, only colliders for the legs and body are needed.

#### **What's Next**

We are really excited about developing this technology in the coming months. We will focus on these areas:

- Take learnings from the prototype and add good support for soft body dynamics in PlayCanvas

- Create easy to use tools for PlayCanvas developers to import and setup characters with soft body dynamics

- Further optimize and improve quality

We would love to get your thoughts and feedback so come join the conversation on the [PlayCanvas forum](https://forum.playcanvas.com/t/how-to-implement-cloth-simulation-with-playcanvas/13484)!

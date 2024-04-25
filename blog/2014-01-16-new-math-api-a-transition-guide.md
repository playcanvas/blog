---
authors: will
date: 2014-01-16 00:53:57+00:00
slug: new-math-api-a-transition-guide
title: "New Math API: A Transition Guide"
categories:
  - Announcement
  - News
tags:
  - engine
---

Yesterday, we announced an imminent update to the PlayCanvas Math API. It's a rare event that we introduce breaking changes and we only do it because we're certain it's going to help you be much more productive. So what have we changed?

Previously, we had a Math API which consisted of static functions that operated on arrays (JavaScript typed arrays, to be specific). It was fast - very fast - but this came at the expense of a developer-friendly interface. Therefore, we have written a brand new Math API that is object-oriented and far crisper to write against. Here's an example of how things were:

```javascript
// Generate a vector from a to b rescaled to be 10 units long
var a = pc.math.vec3.create(1, 2, 3);
var b = pc.math.vec3.create(4, 5, 6);
var result = pc.math.vec3.create();
pc.math.vec3.sub(b, a, result);
pc.math.vec3.normalize(result, result);
pc.math.vec3.scale(result, 10, result);
```

A bit verbose! Here's how things look now:

```javascript
// Generate a vector from a to b rescaled to be 10 units long
var a = new pc.Vec3(1, 2, 3);
var b = new pc.Vec3(4, 5, 6);
var result = new pc.Vec3();
result.sub2(b, a).normalize().scale(10);
```

Much better! As you can see, you can now chain math functions together to apply lots of operations in order.

So what if you've already written PlayCanvas script code against the old API? How do you upgrade it? Here's a brief guide.

### Accessing Math Object Elements

The old way:

```javascript
var x = vector[0];
var y = vector[1];
var z = vector[2];
```

The new way:

```javascript
var x = vector.x;
var y = vector.y;
var z = vector.z;
```

### Creating Math Objects

The old way:

```javascript
var v2 = pc.math.vec2.create(1, 2);
var v3 = pc.math.vec3.create(1, 2, 3);
var v4 = pc.math.vec4.create(1, 2, 3, 4);
var m4 = pc.math.mat4.create();
var q1 = pc.math.quat.create(0, 0, 0, 1);
```

The new way:

```javascript
var v2 = new pc.Vec2(1, 2);
var v3 = new pc.Vec3(1, 2, 3);
var v4 = new pc.Vec4(1, 2, 3, 4);
var m4 = new pc.Mat4();
var q1 = new pc.Quat(0, 0, 0, 1);
```

### Math Object Constants

The old way:

```javascript
var zeroVec = pc.math.vec3.zero;
```

The new way:

```javascript
var zeroVec = pc.Vec3.ZERO;
```

### API Reference Pages

We strongly urge you to check out the API reference pages for the new API. We've worked hard to ensure every function has been lovingly documented (including sample code). If you spot any mistakes, have feedback or need any help whatsoever, [do let us know](https://forum.playcanvas.com)!

Reference pages can be found here:

- [`pc.Vec2`](https://api.playcanvas.com/classes/Engine.Vec2.html) - A 2-dimensional vector
- [`pc.Vec3`](https://api.playcanvas.com/classes/Engine.Vec3.html) - A 3-dimensional vector
- [`pc.Vec4`](https://api.playcanvas.com/classes/Engine.Vec4.html) - A 4-dimensional vector
- [`pc.Mat4`](https://api.playcanvas.com/classes/Engine.Mat4.html) - A 4x4 matrix
- [`pc.Quat`](https://api.playcanvas.com/classes/Engine.Quat.html) - A quaternion

### Unrelated Changes

Since we have made such sweeping API changes, we have also taken the opportunity to remove some deprecated functions. The following are no longer in the engine:

- `pc.fw.RigidBodyComponent#get/setLinearVelocity` - use [`linearVelocity`](https://api.playcanvas.com/classes/Engine.RigidBodyComponent.html#linearVelocity) property
- `pc.fw.RigidBodyComponent#get/setAngularVelocity` - use [`angularVelocity`](https://api.playcanvas.com/classes/Engine.RigidBodyComponent.html#angularVelocity) property
- `pc.fw.RigidBodyComponent#get/setLinearFactor` - use [`linearFactor`](https://api.playcanvas.com/classes/Engine.RigidBodyComponent.html#linearFactor) property
- `pc.fw.RigidBodyComponent#get/setAngularFactor` - use [`angularFactor`](https://api.playcanvas.com/classes/Engine.RigidBodyComponent.html#angularFactor) property
- `pc.scene.Scene#get/setGlobalAmbient` - use [`ambientLight`](https://api.playcanvas.com/classes/Engine.Scene.html#ambientLight) property

We hope you like the new interface!

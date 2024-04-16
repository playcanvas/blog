---
author: Mark
comments: false
date: 2024-04-13 11:00:00+00:00
layout: post
link: https://blog.playcanvas.com/introducing-esm-scripts-in-playcanvas/
slug: introducing-esm-scripts-in-playcanvas
title: "Introducing ESM Scripts"
categories:
  - Announcement
  - News
tags:
  - editor
  - engine
  - scripting
---

## Elevating Your Game Development

{% include video.html src="/assets/media/pc-esm-scripts.mp4" %}

We are thrilled to announce the latest enhancement to the PlayCanvas family — the introduction of ES Modules (ESM) scripts. This new feature, now available in PlayCanvas engine version 1.70.0, marks a significant milestone in our journey towards more modern and efficient web development practices. Although currently in beta, ESM scripts are set to revolutionize the way developers write and manage JavaScript in PlayCanvas.

### Why ESM Modules?
ES Modules bring a modern touch to scripting in PlayCanvas, aligning with the latest JavaScript standards. They offer a more robust and flexible structure for managing code, which can vastly improve project scalability and maintainability. With ESM, developers can import modules either locally from an asset registry or externally via a CDN, opening up a world of possibilities for leveraging existing libraries within the broader JavaScript ecosystem, such as those available on [NPM](https://npmjs.com).

### Key Features of ESM Scripts:
 - **Modern Syntax:** ESM introduces a class-based syntax that provides the same functionality as traditional scripts but in a cleaner and more organized format.
 - **Scoped Modules:** Each module in ESM maintains its own scope, reducing conflicts and unintended interactions between scripts, thereby enhancing code reliability and security.
 - **Direct NPM Integration:** The new Dependency Manager feature allows direct imports from [NPM](https://npmjs.com), giving access to nearly 3 million libraries directly within your PlayCanvas projects.

## How to Get Started with ESM Scripts
To begin using ESM in your PlayCanvas projects, simply create a new script with the `.mjs` extension. This new script format comes with a fresh boilerplate, emphasizing JavaScript class syntax for a straightforward transition. Here’s a sneak peek at the simplicity of an ESM script:

```javascript
import { Script } from 'playcanvas';

export class Rotator extends Script {
    update() {
        this.entity.rotateLocal(0, 0.1, 0);
    }
}
```

This example demonstrates the ease of setting up a rotation script. The encapsulated structure not only makes your scripts cleaner but also aids in managing dependencies and custom configurations effectively.

## Embracing the Full Potential of ESM
The shift to ESM is not just a technical update; it's a way to enhance the collaboration and efficiency of your development workflow. Whether you're managing large teams or working on complex projects, the modular nature of ESM can significantly reduce headaches associated with script management and integration.

## Importing and Managing Dependencies
With the introduction of the Dependency Manager, integrating external libraries is as seamless as a few clicks. Want to add animation with 'gsap'? Simply search, select, and import directly through the PlayCanvas editor. This integration ensures that all dependencies are managed properly, making your project setup quicker and reducing potential runtime errors.

## What’s Next?
As we continue to develop and refine ESM Scripts, we are committed to providing comprehensive support and tutorials to ensure that our community can fully leverage these new capabilities. Stay tuned for more detailed guides on publishing your PlayCanvas libraries to NPM and best practices for using ESM efficiently.

## Final Thoughts
The introduction of ESM Scripts is just the beginning. We are dedicated to continuously improving PlayCanvas to keep it at the forefront of browser-based game development. As always, we encourage our community to dive in, experiment with the new features, and provide feedback during this beta phase. Your input is invaluable as we strive to make PlayCanvas not only more powerful but also more user-friendly.

Let's embark on this exciting new chapter together, pushing the boundaries of what's possible in web gaming!

Explore more about this feature and join the discussion on our official [PlayCanvas forum](https://forum.playcanvas.com/) or check out the full documentation on our [user manual page](https://developer.playcanvas.com/user-manual/scripting/esm-scripts/).

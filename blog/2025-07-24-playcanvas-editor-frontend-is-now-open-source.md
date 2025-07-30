---
authors: kris
slug: playcanvas-editor-frontend-is-now-open-source
title: "PlayCanvas Editor Frontend is now Open Source"
tags:
  - editor
  - ui
  - open-source
---

import ReactPlayer from 'react-player'

Today, we are thrilled to announce the open sourcing of the [PlayCanvas Editor Frontend](https://github.com/playcanvas/editor)!

<ReactPlayer width="100%" height="auto" playing loop muted controls src="/img/editor-demo.mp4" />

<br />

The PlayCanvas Editor is a powerful visual editing environment for building WebGL, WebGPU, and WebXR applications. It has been the cornerstone of countless incredible projects, many of which you can explore on the [PlayCanvas website](https://playcanvas.com/explore). While the PlayCanvas Engine has always been open source, the Editor Frontend, a key component of the PlayCanvas ecosystem, has not. That changes today!

:::note Open Source

The PlayCanvas Editor Frontend is [open-sourced under an MIT license on GitHub](https://github.com/playcanvas/editor)

:::

<!-- truncate -->

---

### ✅ Why Open Source the Editor Frontend?

Open sourcing the Editor Frontend brings a host of benefits, not just for us, but for the entire PlayCanvas community:

* **Faster Feature Development:** Community contributions will accelerate the development of new features and improvements.
* **Enhanced Stability:** With more eyes on the code, bugs can be identified and resolved more quickly, leading to a more stable and robust editor.
* **Customization and Bespoke Use Cases:** Developers can now create custom Editor Frontend versions, connecting them to our backend for highly specialized workflows and integrations.
* **Improved Understanding:** A more transparent codebase will allow developers to better understand how the Editor functions, making it easier to contribute and debug.

---

### 🛠️ Local Development & Contributing

We've made it easier than ever to get started with local development and contribute to the Editor Frontend. For detailed setup instructions, please refer to the [README](https://github.com/playcanvas/editor/blob/main/README.md) in the repository.

#### Built on Open Source Foundations

The PlayCanvas Editor is built upon a foundation of powerful open-source libraries:

| Library                                                       | Details                                     |
| :------------------------------------------------------------ | :------------------------------------------ |
| [PlayCanvas Engine](https://github.com/playcanvas/engine)     | Powers the Editor's 3D View and Launch Page |
| [Observer](https://github.com/playcanvas/playcanvas-observer) | Data binding and history                    |
| [PCUI](https://github.com/playcanvas/pcui)                    | Front-end component library                 |
| [PCUI-Graph](https://github.com/playcanvas/pcui-graph)        | PCUI plugin for rendering node-based graphs |
| [Editor API](https://github.com/playcanvas/editor-api)        | Public API for Editor automation            |

We've focused on significant improvements to the codebase to make it more accessible for contributors, including:

* **Code Reorganization:** A clearer, more efficient file and code structure.
* **Improved Typings:** Enhanced TypeScript support for better type checking and code integrity.
* **Optimized Debugging:** Streamlined local debugging processes for a smoother development experience.
* **Comprehensive Testing Suite:** A new testing suite ensures stability and helps prevent regressions with new contributions.

---

### 👨‍💻 Join Our Open Source Mission

We proudly provide the PlayCanvas Editor Frontend as an open-source project. This is just the beginning of a new chapter for the Editor, and we invite you to be a part of it. The PlayCanvas community has always been at the forefront of innovation, and we believe that this open-source initiative will further accelerate our collective progress.

Join us in shaping the future of the PlayCanvas Editor by submitting issues, creating pull requests, or simply starring [our GitHub repo](https://github.com/playcanvas/editor)! ⭐

---

### 👂 Your Feedback Matters

We're incredibly excited about this new phase for the PlayCanvas Editor. Your feedback is invaluable as we continue this open-source journey. What features are you most excited to contribute to, or what would you love to see next? Share your thoughts on our [Forum](https://forum.playcanvas.com) or [ping us on X](https://twitter.com/playcanvas)!

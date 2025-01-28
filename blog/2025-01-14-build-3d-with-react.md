---
authors: mark
slug: declarative-3d-with-playcanvas-react
title: "Declarative 3D with React"
tags:
  - engine
  - react
---

Since we introduced PlayCanvas, we've seen many developers around the world build amazing 3D experiences using the PlayCanvas Engine and Editor.

Today we're proud to announce the release of **[PlayCanvas React](https://github.com/playcanvas/react)**, a new declarative way to build 3D content using [React](https://react.dev/).

**PlayCanvas React** is a thin React wrapper around the PlayCanvas API. It allows you to build rich 3D content in a declarative way that fully integrates with the React ecosystem. You can create rich, complex 3D content with assets, physics, gaussian splats, audio, and more, all while leveraging the powerful state management of React.

Check out the [CodeSandbox](https://codesandbox.io/p/sandbox/playcanvas-react-mxfvg9?file=%2Fsrc%2FApp.jsx) below. Slide open the code editor and play with the code in real time.

<iframe src="https://codesandbox.io/embed/mxfvg9?view=preview&module=%2Fsrc%2FApp.jsx&hidenavigation=1"
  style={{ width: "100%", height: "500px", border: 0, borderRadius: "4px", overflow:"hidden" }}
  title="@playcanvas/react"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi;   payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>

<!-- truncate -->

### What does this look like?

With **@playcanvas/react** you create a scene using entities and components, just like you would in the PlayCanvas Editor or Engine. Entities have position, rotation and scale. They're the building blocks of your scene. Components on the other hand add behavior to an entity. For example, adding a `<Render/>` component to an entity allows it to render a mesh.

<details>
  <summary>View code example</summary>

  ```jsx
  import { Application, Entity } from '@playcanvas/react';
  import { Script as PcScript } from 'playcanvas';

  // This script spins the entity it's attached to
  class Spinner extends PcScript {
    update(dt) {
      this.entity.rotate(0, this.speed * dt, 0)
    }
  }

  /**
   * Your first @playcanvas/react example! 
   * This renders a spinning box with a camera and some lighting.
   */
  export const HelloWorld = () => {

    const material = useMaterial({ diffuse: 'gray' })

    return <Entity>
      {/* Create a camera entity */}
      <Entity name='camera' position={[4, 3, 4]}>
        <Camera clearColor='#111111' fov={28} />
      </Entity>

      {/* Create the spinning box entity */}
      <Entity position={[0, 0.5, 0]}>
        <Render type='box' material={material} />
        <Script script={Spinner} speed={10}/>
      </Entity>
    </Entity>
  };

  ```

</details>

If you’re already familiar with the PlayCanvas API, you’re already off to a good start, you’ll see that any component system available in the engine can be used out of the box including rigid bodies, collision, physics etc. Follow our [Getting Started Guide](https://playcanvas-react.vercel.app/docs/guide/getting-started) and you'll be up to speed in no time.

If you're coming from a React background, you'll find it' easy to integrate with existing React projects. Even if you’re new to PlayCanvas, you can pick up the basics in just a few hours.

### Why React?

React is loved by developers because it makes building user interfaces simple, intuitive, and predictable. With PlayCanvas React, you can now apply the same magic to 3D! Instead of writing complex, imperative code to create and manage 3D scenes, you can describe them declaratively, just like you do with HTML for a webpage. React’s component-based approach also makes it easy to reuse and organize your 3D content, so you can focus on creativity instead of boilerplate.

### What about the Editor and Engine?

- The PlayCanvas engine underpins everything. PlayCanvas React is simply a thin wrapper around the engine with a React friendly syntax. There's no strict rule for using one over the other, but if you're familiar with React and it's ecosystem, you'll find PlayCanvas React fits well with your stack.

- The editor on the other hand is a powerful browser-based tool for building rich 3D content. PlayCanvas React is another way of achieving the same goal. Whilst the Editor provides a full suite of tools for asset management, scene organization, and rapid iteration, PlayCanvas React is more about building 3D content from within your React code. If you enjoy a code-centric workflow or want to integrate 3D content directly into a larger React application, PlayCanvas React may be the perfect fit.

### Open Source FTW

PlayCanvas React is completely open source, licensed under the [MIT License](https://github.com/playcanvas/react/blob/main/LICENSE). We believe that by sharing our work, collaborating with the community, and encouraging contributions, we aim to build a robust ecosystem.

If you find a bug, have a suggestion, or want to contribute, feel free to [open an issue](https://github.com/playcanvas/react/issues) or submit a pull request. We welcome your feedback and ideas!

### A new step for 3D

The library is already being used in [production ready apps](https://ai.snapchat.com/) and we can’t wait to see what you build with PlayXanvas React!

To get started you can follow the [installation and getting started guide](https://playcanvas-react.vercel.app/docs/installation), then check out the **[repo](https://github.com/playcanvas/react)** and explore some of the **[examples](https://playcanvas.com/docs/api/react/playcanvas.react.html#examples)** in the live playground.

Happy coding!

---
authors: dave
slug: introducing-element-screen-components
title: Introducing Element & Screen Components
tags:
  - editor
  - ui
---

Building user interfaces in graphical applications provides a unique challenge. Today we're pleased to launch two new components to help you build user interfaces inside your WebGL application.

![Sample Game UI](/img/sample-game-ui.gif)

<!-- truncate -->

From today you'll find two new components available in the PlayCanvas Editor.

### Screen Component

The screen component is the container for your 2D objects. This component acts a parent to all the 2D elements you are adding and defines resolution and resize behavior.

![Master Archer Screen](/img/editor-master-archer.jpg)

### Element Component

The element component renders text and images into your screen. These can form the building blocks of more complex user interface features like buttons, or just use them to display content in 2D.

The element component also features useful layout features like anchoring and pivot points and the Group Element.

Supporting text in PlayCanvas is trivial now. Simply drag and drop a TTF font file from your computer into the asset panel and we'll convert it into our special *multi-channel signed distance field* font asset which means that text can be scaled and render an almost any size and remain crisp and readable.

![Text Elements](/img/editor-text-elements.jpg)

### Learning more

Of course, we have [documentation](https://developer.playcanvas.com/user-manual/user-interface/) and [tutorials](https://developer.playcanvas.com/tutorials/?tags=ui) to help you get started. Feel free to let us know what you think on the forum.

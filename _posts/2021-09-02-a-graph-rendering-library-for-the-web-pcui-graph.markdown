---
author: elliott
comments: true
date: 2021-09-02 11:57:54+00:00
layout: post
link: https://blog.playcanvas.com/a-graph-rendering-library-for-the-web-pcui-graph/
slug: a-graph-rendering-library-for-the-web-pcui-graph
title: "A Graph Rendering Library for the Web: PCUI Graph"
wordpress_id: 2725
categories:
  - News
tags:
  - graph
  - library
  - pcui
---

Today, we are excited to announce a new open source library: [PCUI Graph](https://github.com/playcanvas/pcui-graph). It’s a graph rendering framework for the browser which can be used to build and view various types of node-based graphs.

[![A Simple Graph](/assets/media/simple-graph.gif)](/assets/media/simple-graph.gif)
<br>_PCUI Graph in action_

Last year, we [open sourced PCUI](https://blog.playcanvas.com/introducing-pcui-an-open-source-ui-framework-for-the-web/), a front-end framework for building web-based tools like the PlayCanvas Editor. This was subsequently used as the foundation for a new family of open source tools: the [glTF Viewer](https://playcanvas.com/viewer) and the [PlayCanvas Examples Browser](https://playcanvas.github.io/#/graphics/area-lights). However, some of our more recent tools projects have had requirements related to the creation and editing of node-based graphs. As a result, we set about developing a new plugin to PCUI called PCUI Graph. This plugin is already in use today since it powers both the PlayCanvas [Shader Editor](https://forum.playcanvas.com/t/rfc-shader-editor/20616) and [Animation State Graph Editor](https://blog.playcanvas.com/introducing-the-anim-state-graph/):

[![Graph Editors](/assets/media/pcui-graph-editors.png)](/assets/media/pcui-graph-editors.png)

You can rapidly map out key parts of your project’s workflow using pcui-graph, as it supports both directed and visual programming graphs. Here are some of the key features that PCUI Graph provides:

- **Schema based** - Each graph you create is based on a JSON formatted schema, allowing you to easily define the type of your graph up-front.
- **Event system** - You can hook up event listeners to any of the UI interactions made to a graph.
- **Graph state data** - Easily retrieve the current state of the graph in JSON data format at any time and this can be loaded back into the graph later.
- **Context menus** - You can define context menus in a graph schema, supporting the creation and deletion of nodes / edges in the UI.

![Add Transition](/assets/media/anim-state-graph-add-transition.png)

- **Simple API** - Any of the user interactions with the graph can also be made programmatically.
- **Styling** - The graph can be configured to change the default styling of nodes / edges. These styles can also be overridden in the schema of each individual node / edge type.

![PCUI Graph Styling](/assets/media/pcui-graph-styled.png)

## Useful links

- [PCUI Graph GitHub homepage](https://github.com/playcanvas/pcui-graph)
- [API documentation](https://github.com/playcanvas/pcui-graph/blob/master/docs/Graph.md)

So get started with PCUI and PCUI Graph today. We can’t wait to see what you build!

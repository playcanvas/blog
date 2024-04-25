---
authors: steven
date: 2020-11-03 13:37:59+00:00
slug: introducing-json-script-attributes
title: Introducing JSON Script Attributes
categories:
  - News
tags:
  - editor
  - scripting
  - workflow
---

![JSON Script Attributes Preview](/img/editor-json-attributes.jpg)

We have levelled up the Script Attributes that makes it much easier to organize and group related attributes together.

Using JSON, developers are able to define a schema for a data object that has multiple attributes and have them grouped together in the Inspector.

In the example below, we have created a JSON schema with the name ‘settings’ and has the attributes ‘gravity’, ‘startingHealth’ and ‘godMode’.

```javascript
GameManager.attributes.add('settings', {
    type: 'json',
    schema: [{
        name: 'gravity',
        type: 'number',
        default: -9.8
    }, {
        name: 'startingHealth',
        type: 'number',
        default: 20
    }, {
        name: 'godMode',
        type: 'boolean',
        default: false
    }]
});
```

In the Inspector, the data object is shown as a collapsible section:

![Collapsible script settings](/img/Kapture-2020-10-21-at-12.27.36-1.gif)

Even better, **these data objects can made into an array**! This is a huge improvement over having to organize multiple attribute arrays that was difficult to update and error prone to maintain.

Example JSON schema for an array of enemies:

```javascript
GameManager.attributes.add('enemies', {
    type: 'json',
    schema: [{
        name: 'health',
        type: 'number',
        default: 10
    }, {
        name: 'type',
        type: 'number',
        enum: [
            { 'Close Combat': 1 },
            { 'Range': 2 },
            { 'Both': 3 }
        ]
    }, {
        name: 'templateAsset',
        type: 'asset',
        assetType: 'template'
    }],
    array: true
});
```

Becomes the following in the inspector which is so much cleaner!

![Arrays of JSON objects](/img/image-22.png)

Read more in the [documentation](https://developer.playcanvas.com/user-manual/scripting/script-attributes/) and let us hear your feedback in the [forums](https://forum.playcanvas.com/)!

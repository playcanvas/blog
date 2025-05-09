---
authors: will
slug: development-update-tags-new-script-attributes
title: 'Development Update: Tags, New Script Attributes'
tags:
  - editor
---

Hi everyone! It's time for another Development Update. So without further ado...

<!-- truncate -->

### Editor Tags and Engine Tag API

The feedback we've been getting is that your projects are continuing to grow. More assets, more entities, more complexity. It makes it hard to find and organize things, right? To help you out, we've introduced Tags to the Editor interface. We're starting out with Assets. Check out how you tag your assets:

[![tags](/img/tags.gif)](/img/tags.gif)

To search for Assets, we have introduced a new [pc.Tags API](https://api.playcanvas.com/engine/classes/Tags.html). Let's quickly look at some examples:

```javascript
// Return all assets tagged by 'level-1'
var assets = app.assets.findByTag("level-1");

// Return all assets tagged by 'level-1' OR 'level-2'
var assets = app.assets.findByTag("level-1", "level-2");

// Return all assets tagged by 'level-1' AND 'monster'
var assets = app.assets.findByTag(["level-1", "monster"]);

// Return all assets tagged by ('level-1' AND 'monster') OR ('level-2' AND 'monster')
var assets = app.assets.findByTag(["level-1", "monster"], ["level-2", "monster"]);
```

Next up is to support tagging of entities. Look out for this feature landing sometime soon.

### Curve and Entity Script Attributes

We have added a couple of new script attribute types for you to expose to the Editor UI: curves and entities.

Curve attributes can be used to define how a value or values change over time. Consider it a simple keyframing tool. To define a curve script attribute, use the following notation:

```javascript
// Specify a single curve
pc.script.attribute('singleCurve', 'curve');

// Specify a set of 3 curves labelled x, y, z
pc.script.attribute('xyzCurve', 'curve', null, {
    curves: ['x', 'y', 'z']
});

// Specify a set of 3 curves labelled r, g, b with a color preview
pc.script.attribute('rgbCurve', 'colorcurve');

// Specify a set of 4 curves labelled r, g, b, a with a color preview
pc.script.attribute('rgbaCurve', 'colorcurve', null, {
    curves: ['r', 'g', 'b', 'a'],
    type: 'rgba'
});
```

Check out the colorcurve control's functionality below:

[![colorcurve](/img/colorcurve.gif)](/img/colorcurve.gif)

To define an entity script attribute, use the following notation:

```javascript
pc.script.attribute('target', 'entity');
```

This exposes an entity picker to your script UI. Even cooler is that you can drag entities from the Hierarchy panel directly onto the picker, as shown below:
[![entitydrag](/img/entitydrag.gif)](/img/entitydrag.gif)

That's it for this update, friends. Now get back to making cool stuff! :D

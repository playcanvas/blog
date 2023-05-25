---
author: will
comments: true
date: 2015-08-26 10:24:47+00:00
layout: post
link: https://blog.playcanvas.com/development-update-tags-new-script-attributes/
slug: development-update-tags-new-script-attributes
title: "Development Update: Tags, New Script Attributes"
wordpress_id: 2230
categories:
  - Announcement
  - News
  - Technology
---

Hi everyone! It's time for another Development Update. So without further ado...

### Editor Tags and Engine Tag API

The feedback we've been getting is that your projects are continuing to grow. More assets, more entities, more complexity. It makes it hard to find and organize things, right? To help you out, we've introduced Tags to the Editor interface. We're starting out with Assets. Check out how you tag your assets:

[![tags](https://blog.playcanvas.com/wp-content/uploads/2015/08/tags.gif)](http://blog.playcanvas.com/wp-content/uploads/2015/08/tags.gif)

To search for Assets, we have introduced a new [pc.Tags API](https://developer.playcanvas.com/en/engine/api/stable/symbols/pc.Tags.html). Let's quickly look at some examples:

    // Return all assets tagged by 'level-1'
    var assets = app.assets.findByTag("level-1");

    // Return all assets tagged by 'level-1' OR 'level-2'
    var assets = app.assets.findByTag("level-1", "level-2");

    // Return all assets tagged by 'level-1' AND 'monster'
    var assets = app.assets.findByTag(["level-1", "monster"]);

    // Return all assets tagged by ('level-1' AND 'monster') OR ('level-2' AND 'monster')
    var assets = app.assets.findByTag(["level-1", "monster"], ["level-2", "monster"]);

Next up is to support tagging of entities. Look out for this feature landing sometime soon.

### Curve and Entity Script Attributes

We have added a couple of new script attribute types for you to expose to the Editor UI: curves and entities.

Curve attributes can be used to define how a value or values change over time. Consider it a simple keyframing tool. To define a curve script attribute, use the following notation:

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

Check out the colorcurve control's functionality below:

[![colorcurve](https://blog.playcanvas.com/wp-content/uploads/2015/08/colorcurve.gif)](http://blog.playcanvas.com/wp-content/uploads/2015/08/colorcurve.gif)

To define an entity script attribute, use the following notation:

    pc.script.attribute('target', 'entity');

This exposes an entity picker to your script UI. Even cooler is that you can drag entities from the Hierarchy panel directly onto the picker, as shown below:
[![entitydrag](https://blog.playcanvas.com/wp-content/uploads/2015/08/entitydrag.gif)](http://blog.playcanvas.com/wp-content/uploads/2015/08/entitydrag.gif)

That's it for this update, friends. Now get back to making cool stuff! :D

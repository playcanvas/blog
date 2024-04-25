---
authors: dave
comments: true
date: 2013-11-25 19:43:46+00:00
link: https://blog.playcanvas.com/changes-for-25th-november/
slug: changes-for-25th-november
title: Changes for 25th November
categories:
  - Announcement
  - News
---

This weeks important changes:

## PlayCanvas Designer

- **Fog Settings** - Check out the Scene Settings under the View Menu and now you can control the fog type and amount in your scene.
- **Nudge Controls** - Vector properties can now be nudged using the up and down arrow keys

## PlayCanvas Engine

- **Internet Explorer 11 support!**
- [BREAKING] Script Components have changed format, if you are creating script components in your code you'll need to update your scripts
- LightNode.setColor() now takes a pc.Color instead of a pc.math.vec3
- Changed camera and light node code to be in object notation
- [FIX] Changing shadow resolution in Designer works again
- [FIX] Reflection map handled correctly in PhongMaterial
- [FIX] Depth write state caching.
- [FIX] Blend function caching now works properly.

Sooo, most important change here: **Internet Explorer Support**. That's something we've been waiting to say for a long time. Currently there are still a few performance issues, and rest assure we'll be talking to Microsoft to make sure we get these sorted but still it's great to be able to say it. Next important thing is the change in format for Script Components. In the lead up to a big feature release later on this week, we've altered the format you supply when creating script components. Normally, most of you won't be doing this, but if you are it now looks like this:

```javascript
context.script.addComponent(entity,  {
    scripts: [{
        name: "myscript",
        url: "myscript.js"
    }]
});
```

No big deal really.

Finally a bunch of tweaks and fixes to the graphics layer, nothing major, just keeping the house in order. Again, though, it's all preparation for more features coming soon.

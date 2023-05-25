---
author: dave
comments: true
date: 2015-02-18 14:52:16+00:00
layout: post
link: https://blog.playcanvas.com/engine-update-steamlining-components-and-scripts/
slug: engine-update-steamlining-components-and-scripts
title: 'Engine Update: Steamlining Components and Scripts'
wordpress_id: 1997
categories:
- News
---

With the latest [engine changes](https://github.com/playcanvas/engine/blob/master/CHANGES.md#v01640) released today we're streamlining our API to make it quicker and easier for you to get started with PlayCanvas. Less API to remember more time coding your game.

Two major changes landed today. A new way to add components and replacing the old `ApplicationContext` object with the `Application`.



## Adding Components



The `Entity` class now has `addComponent` and `removeComponent`. This makes setting up an Entity in code much easier


    
    
    var entity = new pc.Entity();
    entity.addComponent("light");
    entity.addComponent("camera", {
        clearColor: new pc.Color(1, 0, 0);
    });
    app.root.addChild(entity);
    



You'll see that this is much less code than the previous way of doing stuff. 



## ApplicationContext removed



Until today, script instances would have the `ApplicationContext` available to them. Now we've combined the `ApplicationContext` and the `Application`.

How does this effect your code? Well, actually it doesn't. We've moved all the functionality from the ApplicationContext into Application and we now pass the `pc.Application` into your script. This is just reducing the API surface area.

When you create a new script. Now you'll see this as the default skeleton script:


    
    
    pc.script.create('myscript', function (app) {
        // Creates a new MyScript instance
        var MyScript = function (entity) {
            this.entity = entity;
        };
    
        MyScript.prototype = {
            initialize: function () {
            },
    
            update: function (dt) {
            }
        };
    
        return MyScript;
    });
    



So, now just use `app` instead of `context`.

Anyway, that's it for this update. See you next time.

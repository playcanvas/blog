---
authors: dave
comments: true
date: 2015-05-30 15:27:56+00:00
layout: post
link: https://blog.playcanvas.com/enhanced-asset-api/
slug: enhanced-asset-api
title: Enhanced Asset API
categories:
  - Announcement
  - Features
tags:
  - engine
---

Today we're pleased to update the engine and tools with a new Asset API. We've finessed the API to make it more intuitive and also added some extra features to make it easier for you to preload or stream in assets at any stage of your application.

This post should introduce some of the new APIs, plus give you an upgrade guide for areas of the API which have changed.

First some terms. When we talk about a "resource" we are referring to some data, usually stored in a file, that can be loaded by a PlayCanvas application. When the resource data is loaded, the engine creates a instance of some class that came from that data. e.g. the resource "image.png", is loaded to a creates an instance of a `pc.Texture`. The same applies for a 3D model, an animation or sound effect.

When we talk about as "asset" we are referring to a reference to a resource, with some associated data. For example a texture asset looks something like this:

```json
{
    "id": 14761,
    "name": "Cerberus_G",
    "type": "texture",
    "preload": true,
    "file": {
        "url": "files/assets/14761/1/Cerberus_G.jpg",
        "size": 816084,
        "hash": "dc49dac4f4775191b7643b4583b3ac3f",
        "filename": "Cerberus_G.jpg"
    },
    "data": {
        "minfilter": "linear_mip_linear",
        "name": "Cerberus_G",
        "magfilter": "linear",
        "addressu": "repeat",
        "addressv": "repeat",
        "anisotropy": 1
    },
}
```

You can see the asset data for this texture as an ID, a name, a reference to the file where the resource data is, plus some additional data which isn't stored in the image file. This data is used to create the texture resource. Some assets contain lots of data (materials) some none (a text file).

Once loaded into the engine, you can use the asset registry to find assets, and you can access the loaded resource (if it is loaded) from the asset using the `asset.resources` property.

On to the changes:

## Editor Changes

### Asset Preloading

[![preload](/img/preload.jpg)](/img/preload.jpg)

The first new feature is **asset preload**. Previously we would load any assets that were referenced by your scene. We changed this behavior so that now assets have a specific **preload** property which you can enable or disable. Any asset marked as preload, _and we default this to true for new assets_, will be loaded during the loading screen stage and will be ready to use when your application starts. Any that are not marked as preload, will remain on the server, ready to be loaded when you need them.

We've updated existing assets to mark all existing target assets are preload. So you may need to uncheck this option on some assets if you don't actually need them.

### Export and Publishing

When you publish an app or choose to download an export of your app, we now include _all_ assets in the package. As you can choose whether or not to preload assets, this means that you can select only a subset of your assets to be loaded before your application starts. Then you can load other assets at any other stage later on. This lets you use many more assets in your games and applications but not worry about start up time. Just stream your assets in later on.

### Script Loading Order

Script loading has had an overhaul, we now load scripts in parallel with other assets so load times should be reduced. We have also changed which scripts are loaded. Previously, we'd only load scripts which are referenced in scenes. **We now load all scripts in your repository.** Because of this we've introduced a way to set the order in which your scripts are loaded.

[![script-priority](/img/script-priority.jpg)](/img/script-priority.jpg)

Found in the menu, you can use the script loading priority dialog to choose scripts you wish to load first.

## API changes

### Asset Registry

The `AssetRegistry` object has changed slightly in the new API. The core methods are shown below. As before the `AssetRegistry` object is available in your scripts as `app.assets`.

```javascript
app.assets.get(id) - get by id
app.assets.find(name, type) - search by name, return first result
app.assets.findAll(name, type) - search by name, return all
app.assets.load(asset) - load remote resource for asset
```

The main change here is that `load()` no longer accepts a list of assets and it no longer returns a promise. We're removing promise from the engine in favour of node.js style callbacks and events.

_Note, we have left in a compatibility version of assets.load which accepts a list of assets and returns a promise. You should update your code to remove this as it will not be in the engine forever._

### Asset Events

The asset registry (and the asset object) fire a consistent set of events which you can use to react to changes on the registry. These can be used to monitor loading progress or respond if you wish to dynamically add assets to the registry.

```javascript
assets.on("add", callback) - triggered when asset added to registry
assets.on("add:{id}", callback) - triggered when asset added to registry
assets.on("add:url:{url}", callback) - triggered when asset added to registry
assets.on("remove", callback) - triggered when asset added to registry
assets.on("remove:{id}", callback) - triggered when asset added to registry
assets.on("remove:url:{url}", callback) - triggered when asset added to registry
assets.on("load", callback) - triggered on successful load
assets.on("load:{id}", callback) - triggered on successful load
assets.on("error", callback) - triggered on asset loading error
assets.on("error:{id}", callback) - triggered on asset loading error
asset.on("change", callback) - triggered when asset data changes
```

A good pattern for loading and using an asset is like this:

```javascript
asset.ready(function (asset) {
    // use asset.resource here
});
assets.load(asset);
```

`asset.ready()` will call the callback when if when the asset is loaded. If it's already loaded from before, the callback is called immediately. `asset.load()` does nothing if the asset is already loaded.

### Resource Loader

The resource loader is a lower level interface than the asset registry. Most users won't need to access this directly as they will use the asset registry to load data. But this API has changed significantly. We've made it much simpler:

```javascript
app.loader.load(url, type, callback);
```

I'll just leave it there, see the API docs if you need more information.

**Application Scene Loading**

We've added a simple API for loading new scene data via the `app` object

```javascript
app.loadSceneHierarchy(url, callback) // load a scene file, get hierarchy, append hierarchy to app.root
app.loadSceneSettings(url, callback)  // load a scene file, apply settings (lighting/physics) to current scene
```

These two functions accept the URL of the scene file which will be in the format "scene_id.json" e.g. "100.json".

### Upgrade guide

Hopefully you'll find your application continues work as before, only now it loads faster and you have more options available to you for dynamically loading assets. However, this is a breaking API change so you may need to update your projects.

**app.assets.load(asset)**

If you are using this and passing in a single asset, we no longer return a promise. You should replace your code with this:

```javascript
asset.ready(function (asset) {
  // use asset
});
app.assets.load(asset);
```

**app.assets.load(assets);**

If you are loading a list of assets, our compatible load should still work. However, you should update your code to use the new loading format. As below

```javascript
var toload = []; // list of assets
var count = 0;
toload.forEach(function (asset) {
    asset.ready(function (asset) {
        count++;
        if (count === toload.length) {
            // done
        }
    });
    app.assets.load(asset);
});
```

**app.loader.request()**

If you were using this to make resource requests like loading Packs or asking for texture data. This is all new. You should be able to replace these calls with some other method. Maybe `app.loadSceneHierarchy()` or by using asset preloading to delay loading texture data. However if you really need to load a resource directly. You can use the resource loader API:

```javascript
app.loader.load(url, function (err, resource) {
    if (!err) {
        // use resource
    }
});
```

That's it! If you notice any problems or have trouble upgrading, get in touch on the [forum](https://forum.playcanvas.com/).

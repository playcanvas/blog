---
author: will
comments: true
date: 2020-06-19 12:41:23+00:00
layout: post
link: https://blog.playcanvas.com/porting-a-large-es5-javascript-library-to-es6-modules-and-rollup/
slug: porting-a-large-es5-javascript-library-to-es6-modules-and-rollup
title: Porting a Large ES5 JavaScript Library to ES6 Modules and Rollup
categories:
  - News
---

Since 2011, the [PlayCanvas engine sourcebase](https://github.com/playcanvas/engine) has adhered strictly to the ES5 JavaScript specification. Since then, the JavaScript language and the surrounding tools ecosystem has moved on considerably. But PlayCanvas has steadfastly stuck to ES5. Why? Internet Explorer 11.

IE11 was released on October 17, 2013. But even today, [StatCounter](https://gs.statcounter.com/browser-version-market-share/desktop/worldwide/#monthly-201905-202005) reports that IE11 has 2.43% of the global desktop browser market. Since PlayCanvas content is viewed by 100s of millions of end users, this is a pretty big deal.

Over time, the engine codebase has grown significantly. It's now nearly 100,000 lines long. Maintaining and building such a large codebase can be problematic. To help bring some level of consistency and structure, we imposed the following pattern:

```javascript
Object.assign(pc, (function () {
    var SomeClass = function () {
        this.other = new pc.OtherClass();
    };

    Object.assign(SomeClass.prototype, {
        someFunction: function () {}
    });

    return {
        SomeClass: SomeClass
    };
}()));
```

`pc` is the PlayCanvas library namespace. So a developer would create instances of this class as follows:

```javascript
var thing = new pc.SomeClass();
```

To build the engine, we wrote a node.js script which would parse a list of dependencies (JavaScript filenames) and concatenate them. There were several problems:

1. The pattern above is overly verbose making it harder to inspect the code.
2. `Object.assign` needs to be called 250 times when the library is initially executed by the browser, once for each module. This increases app start-up times.
3. In internal engine code, all class names and constants need to be accessed via the `pc` namespace. This is because the internals of the pattern above cannot see the internals of other modules and vice versa. This bloats the engine code and slows things down.
4. The dependencies file had to be carefully manually ordered to ensure things were declared in the right order.
5. The build script itself was about 1000 lines of JavaScript which carried its own maintenance overhead.
6. Unused code was being included in the published engine.

We believed the solution to these problems was to migrate the engine codebase from vanilla ES5 to ES6 modules. This would transform the original module pattern to:

```javascript
import { OtherClass } from './other-class.js';

var SomeClass = function () {
    this.other = new OtherClass();
};

Object.assign(SomeClass.prototype, {
    someFunction: function () {}
});

export { SomeClass };
```

Much better!

- No more needless calls to Object.assign to the pc namespace.
- No further need to use the pc namespace within modules.
- Dependencies are explicitly described in each JS file.
- Only what is necessary is exported from modules (and the overall engine).

But what about IE11? It doesn't understand ES6 module syntax! 😱 PlayCanvas still needs to ship as a strictly ES5 library. To transform the entire codebase from ES6 module format to ES5 UMD format (PlayCanvas is used in both the browser and Node), you simply need to leverage a JavaScript bundler.

There are many options for selecting a JS bundler. In the end, 3 options were tested: Rollup, Parcel and ESBuild. You can see the PRs for each here:

- Rollup: [https://github.com/playcanvas/engine/pull/2166](https://github.com/playcanvas/engine/pull/2166)
- Parcel: [https://github.com/playcanvas/engine/pull/2106](https://github.com/playcanvas/engine/pull/2106)
- ESBuild: [https://github.com/playcanvas/engine/pull/2115](https://github.com/playcanvas/engine/pull/2115)

In the end, Rollup was selected over Parcel and ESBuild. In testing, Parcel needed up to 16s for an initial build, while Rollup only required 3s. And we were reticent to adopt ESBuild since it was far less established and battle tested compared to Rollup. But we may review this decision in the future. Now that the engine is ported to ES6 modules, switching bundler is fairly straightforward.

With Rollup, the build script reduced from ~1000 lines to ~100 lines. Quite a saving. Rollup's plugin system made it incredibly easy to write custom handling for GLSL files and also run a C-like preprocessor in order to build debug, release and profile versions of the engine.

## What's Next?

Now that we have merged the ES6 Module port, where do we go from here?

First up, Rollup is kindly informing us that circular dependencies exist in the PlayCanvas codebase.

![Rollup Circular Dependencies](/assets/media/engine-circular-dependencies.png)

We want to clean things up and eliminate them. What's the motivation for that? It makes it easier for the bundler to employ tree-shaking to remove unreferenced code from the engine. At the moment, the engine's `Application` class imports pretty much everything. And many classes import the `Application`. This makes it hard to build a version of the library which doesn't include the particle engine, say. Or maybe the physics engine.

Beyond that, we are keen to explore leaving ES5 behind and fully embracing 'modern' JavaScript, or maybe TypeScript. Rollup can trivially run Babel or the TypeScript compiler as plugins, thereby ensuring we can still ship an ES5 library. We're looking forward to making that decision based on your feedback. So feel free to let us know what you think on the [forum](https://forum.playcanvas.com/)!

---
author: elliott
comments: true
date: 2022-10-05 14:00:02+00:00
layout: post
link: https://blog.playcanvas.com/gltf-viewer-arrives-on-mobile-with-ar-support/
slug: gltf-viewer-arrives-on-mobile-with-ar-support
title: glTF Viewer Arrives on Mobile with AR Support
wordpress_id: 2850
categories:
- News
tags:
- AR
- gltf
- mobile
- viewer
---





https://www.youtube.com/watch?v=WkEOfcdmEbc








Today we’re excited to announce the next major release of our glTF viewer. This version makes the viewer an ideal tool for reviewing how glTF models render on mobile as well as in augmented reality!










[**TRY IT NOW**](https://playcanvas.com/viewer/?load=https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb)
















### View Models in AR on Mobile







Once a model has been loaded into the viewer on mobile, you’ll be given the option to drop into an augmented reality experience. The mode you get currently differs based on the operating system you’re using.






[![](https://blog.playcanvas.com/wp-content/uploads/2022/10/ezgif.com-gif-maker.gif)](https://blog.playcanvas.com/wp-content/uploads/2022/10/ezgif.com-gif-maker.gif)Quick Look mode on iOS



[![](https://blog.playcanvas.com/wp-content/uploads/2022/10/ezgif.com-gif-maker-5.gif)](https://blog.playcanvas.com/wp-content/uploads/2022/10/ezgif.com-gif-maker-5.gif)WebXR mode on Android






On iOS the model will be loaded with Apple’s AR Quick Look mode (above left), while on Android the model will be placed into your environment using WebXR (above right).







### Mobile-Optimized Design






[![](https://blog.playcanvas.com/wp-content/uploads/2022/10/image-5-576x1024.png)](https://blog.playcanvas.com/wp-content/uploads/2022/10/image-5.png)



[![](https://blog.playcanvas.com/wp-content/uploads/2022/10/image-4-576x1024.png)](https://blog.playcanvas.com/wp-content/uploads/2022/10/image-4.png)



[![](https://blog.playcanvas.com/wp-content/uploads/2022/10/image-6-576x1024.png)](https://blog.playcanvas.com/wp-content/uploads/2022/10/image-6.png)






It’s now possible to verify the content and rendering of your assets no matter which device you’re working on. The viewer has been redesigned using mobile first principles, so you can explore glTF content just as well on mobile as you can on desktop. The UI scales up or down depending on the device screen size and takes an uncluttered approach to ensure you can focus on the glTF content itself even on very small screens.







### Quickly load models on mobile devices







When loading PlayCanvas viewer v3.0 on desktop, you’ll be presented with the option to load a glTF model from a URL.





![](https://lh4.googleusercontent.com/JuYnG7LM6j-737CYSPPP3loYZax1E1VwKHfbIJRczvDdWY-YmQr2M21otf3uj_0JFJP0RB16hNDFp9gf10fPgZ0232YOSzIwbBc-e314V6--BycgoxsY9a-zyysDNr5LaanC9MPLF8mGsjCTMJ072lz8Dtt4eOJMkbFc2ZuDdXzX0JGU9zxzN6atHw)





When this is used, the application will generate a QR code you can scan to share the current viewer scene between your devices or others:





![](https://lh4.googleusercontent.com/A7LYvjcQQgCGGf3Rt1Ua_Q8TmwkOmq6NS09C3YP5H4BNgs48s8jV34QWjUoRKFE6hTib9SADlq7PwVhKtAlzcopWRk-Jr2Bt34UMLL4y0Ys3RPOpAaLh_wwelkUxz1WiV54aMhIr4Wtz3hhTnQ4KPQ4Op8EjRm7bHP_KFGSYo1NmpBPAmxs0japFKw)





### New PlayCanvas theme







The latest release of [PCUI (v2.7.0)](https://github.com/playcanvas/pcui/releases/tag/v2.7.0) enables the use of additional themes in applications built using it. This allowed us to apply a new color theme to the model-viewer:





[![](https://blog.playcanvas.com/wp-content/uploads/2022/10/image-3-1024x574.png)](https://blog.playcanvas.com/wp-content/uploads/2022/10/image-3.png)





The new muted gray tones of this theme should allow users to more readily focus on their model content. Over the coming months, you’ll begin to see this new theme applied to more applications in the PlayCanvas ecosystem! Be sure to pass any feedback onto us using the [issue tracker](https://github.com/playcanvas/pcui/issues) of the PCUI library.







### Open Source







PlayCanvas is fully committed to an open source strategy and our glTF viewer is therefore made available to you on [GitHub](https://github.com/playcanvas/model-viewer). It is a TypeScript application built on PlayCanvas [PCUI](https://github.com/playcanvas/pcui) front-end framework and, of course, the [PlayCanvas Engine](https://github.com/playcanvas/engine) runtime.







These open source projects have been years in the making and would not have been possible without the amazing OSS community. So why not explore our various GitHub repositories and consider making some contributions of your own. We also appreciate feature requests and bug reports, so don’t be shy!










[**FORK THE VIEWER ON GITHUB**](https://github.com/playcanvas/model-viewer)










We hope you find the new and improved glTF viewer useful for your projects. Stay tuned for further updates to it in the coming months!




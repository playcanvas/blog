---
author: steven
comments: true
date: 2022-09-02 14:35:01+00:00
excerpt: Today, we are excited to announce the 2.0 release of our glTF model viewer.
layout: post
link: https://blog.playcanvas.com/playcanvas-releases-gltf-viewer-2-0/
slug: playcanvas-releases-gltf-viewer-2-0
title: PlayCanvas Releases glTF Viewer 2.0
wordpress_id: 2817
categories:
- Announcement
- News
---





https://www.youtube.com/watch?v=rj1CyM_ob3E








Today, we are excited to announce the 2.0 release of our glTF viewer.










[**TRY IT NOW**](https://playcanvas.com/viewer?load=https://s3.eu-west-1.amazonaws.com/static.playcanvas.com/models/IridescentDishWithOlives.glb)










glTF (or Graphics Language Transmission Format) has become ubiquitous since its introduction in 2015. With support for advanced shading techniques, it is particularly important for graphics intensive applications like product configurators/visualizers.







With so many companies now relying on glTF to transmit graphics data over the web, it is critical that high quality tools are available to work with the format. This led us to develop v2.0 of our popular glTF viewer.







Let’s take a closer look at what’s new.







## Improved glTF Specification Support







The glTF format is managed by the Khronos Group and defines a base specification along with a variety of extensions. The first version of the viewer support 100% of the base spec plus the following extensions:







  * KHR_draco_mesh_compression
  * KHR_lights_punctual
  * KHR_materials_clearcoat
  * KHR_materials_unlit
  * KHR_mesh_quantization
  * KHR_texture_basisu
  * KHR_texture_transform






The new and improved viewer released today adds support for:







  * KHR_materials_emissive_strength
  * KHR_materials_ior
  * KHR_materials_sheen
  * KHR_materials_specular
  * KHR_materials_transmission
  * KHR_materials_variants
  * KHR_materials_volume






These extensions provide developers with the ability to achieve exciting new graphical effects.







Let’s take a look at three of them.







## **Advanced Refraction**







The volume, transmission and ior glTF extensions can simulate how light is refracted through transparent materials. This leverages PlayCanvas’ grab pass functionality to ‘grab’ and sample the back-buffer.





[![](https://blog.playcanvas.com/wp-content/uploads/2022/09/Kapture-2022-09-02-at-10.22.35.gif)](https://blog.playcanvas.com/wp-content/uploads/2022/09/Kapture-2022-09-02-at-10.22.35.gif)





## Realistic Rendering of Fabrics







glTF’s sheen extension enables developers to faithfully reproduce materials with the appearance of certain fabrics. This is incredibly important for production visualization (home furnishings, apparel, vehicle interiors and so on).







[![](https://blog.playcanvas.com/wp-content/uploads/2022/09/cushion.jpg)](https://blog.playcanvas.com/wp-content/uploads/2022/09/cushion.jpg)







## **Material Variants**







Most product configurators allow the user to modify the appearance of a product. For example, a specific style of chair might be upholstered in various fabrics in various colors. Or a pair of shoes might be available in a number of different designs/patterns/colors.





[![](https://blog.playcanvas.com/wp-content/uploads/2022/09/sneakers-1024x423.jpg)](https://blog.playcanvas.com/wp-content/uploads/2022/09/sneakers.jpg)





The PlayCanvas viewer now detects any material variants in the loaded scene and permits their selection in the interface.





[![](https://blog.playcanvas.com/wp-content/uploads/2022/09/Kapture-2022-09-02-at-10.36.54.gif)](https://blog.playcanvas.com/wp-content/uploads/2022/09/Kapture-2022-09-02-at-10.36.54.gif)





## Rendering Enhancements







The new viewer introduces a couple of interesting features if you care about rendering fidelity.







First up is a ‘High Quality Rendering’ mode (which is a toggle in the Camera control panel).







Enabling this feature activates supersampling which is a type of antialiasing that aims to eliminate jagged edges along polygons. It progressively re-renders the scene many times when the camera stops, slightly offsetting and then compositing the rendered image over previous frames.







You can see both in action below, deliberately reduced in resolution to show the effect:





[![](https://blog.playcanvas.com/wp-content/uploads/2022/09/Kapture-2022-09-02-at-10.31.58.gif)](https://blog.playcanvas.com/wp-content/uploads/2022/09/Kapture-2022-09-02-at-10.31.58.gif)





Also new is sharper reflections for smooth reflective surfaces. The viewer will now use the full resolution skybox cubemap in the engine’s image-based lighting pipeline which looks crisp and far more realistic.





[![](https://blog.playcanvas.com/wp-content/uploads/2022/09/FZZp8qwWAAAQqyR-1024x608.jpeg)](https://blog.playcanvas.com/wp-content/uploads/2022/09/FZZp8qwWAAAQqyR.jpeg)





## Interface Redesign







Initially, all information and controls for the viewer appeared in the leftmost panel. Viewer 2.0 has been completely redesigned to more intelligently group specific areas of functionality. The leftmost panel remains but now just shows scene info and a tree view showing the loaded scene hierarchy.







[![](https://blog.playcanvas.com/wp-content/uploads/2022/09/Screenshot-2022-09-02-at-10.51.14.png)](https://blog.playcanvas.com/wp-content/uploads/2022/09/Screenshot-2022-09-02-at-10.51.14.png)







Buttons to control viewer settings can now be found at the bottom of the 3D view. These buttons open options for camera, lighting and debug rendering (plus a fullscreen toggle).





[![](https://blog.playcanvas.com/wp-content/uploads/2022/09/Kapture-2022-09-02-at-10.53.54.gif)](https://blog.playcanvas.com/wp-content/uploads/2022/09/Kapture-2022-09-02-at-10.53.54.gif)





If you load a scene that contains animation, animation controls will automatically appear:





[![](https://blog.playcanvas.com/wp-content/uploads/2022/09/animation-toolbar-1024x281.png)](https://blog.playcanvas.com/wp-content/uploads/2022/09/animation-toolbar.png)





The controls allow you to scrub through an animation, select playback speed and even choose which animation clip to play should the file contain more than one.







Lastly, there is also now a button bottom right to download a rendered PNG of the 3D view.







[![](https://blog.playcanvas.com/wp-content/uploads/2022/09/Screenshot-2022-09-02-at-10.56.01-1.png)](https://blog.playcanvas.com/wp-content/uploads/2022/09/Screenshot-2022-09-02-at-10.56.01-1.png)







## Open Source







PlayCanvas is fully committed to an open source strategy and our glTF viewer is therefore made available to you on [GitHub](https://github.com/playcanvas/model-viewer). It is a TypeScript application built on PlayCanvas [PCUI](https://github.com/playcanvas/pcui) front-end framework and, of course, the [PlayCanvas Engine](https://github.com/playcanvas/engine) runtime.







These open source projects have been years in the making and would not have been possible without the amazing OSS community. So why not explore our various GitHub repositories and consider making some contributions of your own. We also appreciate feature requests and bug reports, so don’t be shy!










[**FORK THE VIEWER ON GITHUB**](https://github.com/playcanvas/model-viewer)










We hope you find the new and improved glTF viewer useful for your projects. Stay tuned for further updates to it in the coming months!




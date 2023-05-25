---
author: will
comments: true
date: 2021-02-11 12:42:50+00:00
layout: post
link: https://blog.playcanvas.com/webgl-case-study-rebuilding-the-star-lord-pbr-demo/
slug: webgl-case-study-rebuilding-the-star-lord-pbr-demo
title: 'WebGL Case Study: Rebuilding the Star-Lord PBR Demo'
wordpress_id: 2684
categories:
- News
---




Way back in 2014, [PlayCanvas was the first WebGL Engine to integrate PBR](https://blog.playcanvas.com/physically-based-rendering-comes-to-webgl/)  (Physically Based Rendering). To mark the event, we built the Star-Lord tech demo:





[iframe width="720" style="margin:0" webkitallowfullscreen='true' mozallowfullscreen='true' allowfullscreen='true' src="https://playcanv.as/p/SA7hVBLt/"]





In the intervening 6 or so years, PlayCanvas has moved on dramatically. So we decided to leverage all of the latest engine features and republish it.







The most significant improvements are related to load time. Let's start out by comparing some key stats:





<table ><tbody ><tr >
<td >
</td>
<td >[Star-Lord 2014](https://playcanv.as/b/dCdIuibG/)
</td>
<td >[Star-Lord 2021](https://playcanv.as/p/SA7hVBLt/)
</td>
<td >% Change
</td></tr><tr >
<td >HTTP Requests
</td>
<td >220
</td>
<td >39
</td>
<td >↓ 82.3% 
</td></tr><tr >
<td >Preload Transfer (MB)
</td>
<td >10.1
</td>
<td >5.6
</td>
<td >↓ 44.6%
</td></tr><tr >
<td >Total Transfer (MB)
</td>
<td >13.7
</td>
<td >9.9
</td>
<td >↓ 27.7%
</td></tr><tr >
<td >Total Resources (MB)
</td>
<td >26.0
</td>
<td >12.1
</td>
<td >↓ 53.5%
</td></tr><tr >
<td >Load Time (s) *
</td>
<td >1.8
</td>
<td >1.2
</td>
<td >↓ 33.3%
</td></tr></tbody></table>* Cache disabled on 100Gbps connection





Those are some pretty **_significant wins_**! So what are the differences between the two builds of the demo? Let's step through them one by one.







### Convert JSON Meshes to GLB







In October 2020, [PlayCanvas officially switched](https://blog.playcanvas.com/faster-load-times-with-gltfs-glb-format/) from JSON to glTF 2.0 (GLB) for storing all model and animation data. While gzipped GLB is reasonably similar in size to gzipped JSON, it is up to an order of magnitude faster to parse a GLB file once it has been downloaded. Plus, a GLB file occupies less system memory than the equivalent JSON file. Converting all of the assets from JSON to GLB is a simple process. First, flip the project setting 'Convert to GLB' in the 'Asset Tasks' group to true:





![](https://blog.playcanvas.com/wp-content/uploads/2021/02/converttoglb.png)





Now, simply reupload all FBX files and a .glb asset will be generated rather than a .json asset. The last step is to use the Replace command in the right-click context menu to replace the .json asset with the .glb asset (plus any materials as well).





![](https://blog.playcanvas.com/wp-content/uploads/2021/02/jsontoglb.gif)





You can then delete the old JSON asset (plus any unreferenced related materials).







### Basis Compress Textures







Last month, [we announced](https://blog.playcanvas.com/basis-texture-compression-arrives-in-playcanvas/) the integration of Basis texture compression into the Editor. Star-Lord was originally configured to use DXT, PVR and ETC compressed textures. A download size comparison is as follows:





<table ><tbody ><tr >
<td >Texture Format
</td>
<td >Download Size (MB)
</td></tr><tr >
<td >DXT
</td>
<td >7.56
</td></tr><tr >
<td >PVR
</td>
<td >6.09
</td></tr><tr >
<td >ETC1
</td>
<td >7.18
</td></tr><tr >
<td >Basis
</td>
<td >2.38
</td></tr></tbody></table>





This explains much of the download savings in the updated version.







Fortunately, applying Basis compression to the app's textures is literally a two-click operation:





![](https://blog.playcanvas.com/wp-content/uploads/2021/02/compress.gif)





### Prefilter Cubemaps in the Editor







When PBR first arrived in PlayCanvas, the Editor could not prefilter cubemaps. This conversion had to be performed externally with RGBM format cubemap faces being added to the Editor:





![](https://blog.playcanvas.com/wp-content/uploads/2021/02/oldcube-1024x537.png)





Each cubemap had 6 mip levels with 6 faces for each level. And with 5 different cubemaps, that meant 180 of the demo's 220 HTTP requests were for these PNGs!







These days, the Editor makes is super easy to import 6 HDR cubemap faces, build a cubemap and then prefilter it.





![](https://blog.playcanvas.com/wp-content/uploads/2021/02/prefilter.gif)





So instead of loading 180 PNGs, the demo now loads just 5 DDS files. Much faster. 🚀







### Asynchronously Load Assets







To achieve an optimal load time, it is important to only load what is required to make your app functional. It is arguable that music is not strictly a necessary precondition for your app to start. Therefore, the demo now asynchronously loads the mp3 asset that contains the music track and auto-plays it as soon as it is downloaded. It is 3.9MB which accounts for nearly 40% of the app's payload! So be sure to carefully audit your app for assets that can be streamed instead of preloaded.







Read more about preloading and streaming of assets in the [User Manual](https://developer.playcanvas.com/en/user-manual/assets/preloading-and-streaming/).







### Useful Links







  * [Star-Lord Project](https://playcanvas.com/project/333626/overview/starlord)
  * [Star-Lord App](https://playcanv.as/p/SA7hVBLt/)
  * [User Manual: Optimizing Load Time](https://developer.playcanvas.com/en/user-manual/optimization/load-time/)
  * [User Manual: Physically Based Rendering](https://developer.playcanvas.com/en/user-manual/graphics/physical-rendering/)









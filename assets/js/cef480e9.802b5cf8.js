"use strict";(self.webpackChunk_playcanvas_blog=self.webpackChunk_playcanvas_blog||[]).push([[16071],{42440:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>d});var n=t(66739),s=t(74848),i=t(28453);const o={authors:"will",slug:"variance-shadow-maps-for-webgl-and-more",title:"Variance Shadow Maps for WebGL and More!",tags:["editor","engine","graphics"]},r=void 0,l={authorsImageUrls:[void 0]},d=[{value:"Variance Shadow Maps",id:"variance-shadow-maps",level:3},{value:"Reworked Editor Camera Controls",id:"reworked-editor-camera-controls",level:3},{value:"Easy Asset Inspection in Dev Tools",id:"easy-asset-inspection-in-dev-tools",level:3},{value:"Engine Optimizations",id:"engine-optimizations",level:3},{value:"Other Changes",id:"other-changes",level:3}];function c(e){const a={a:"a",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"May is drawing to a close and it's starting to feel like summer here in London. Let's celebrate with a PlayCanvas Dev Update! We've been busy bees, so here's a rundown of the main changes."}),"\n",(0,s.jsx)(a.h3,{id:"variance-shadow-maps",children:"Variance Shadow Maps"}),"\n",(0,s.jsx)(a.p,{children:"The light component now allows you to select a shadow type. In addition to the current PCF Shadow Maps, there are new options for 8-bit, 16-bit and 32-bit Variance Shadow Maps. 8-bit VSM uses a small amount of GPU memory and is guaranteed to work on any device but is lower quality. 32-bit VSM uses a lot of GPU memory and\xa0relies on a device's ability to render to floating point textures but the quality is very good. 32-bit VSM will gracefully fall back to 16-bit and then to 8-bit should the device not provide the required capabilities."}),"\n",(0,s.jsx)(a.p,{children:"Let's compare PCF with VSM. First, here's PCF:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(86517).A+"",children:(0,s.jsx)(a.img,{alt:"shadows-sm",src:t(69391).A+"",width:"1920",height:"1080"})})}),"\n",(0,s.jsx)(a.p,{children:"And here is VSM:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(32995).A+"",children:(0,s.jsx)(a.img,{alt:"shadows-vsm",src:t(59429).A+"",width:"1920",height:"1080"})})}),"\n",(0,s.jsx)(a.p,{children:"The big advantage of VSM is the ability to apply large blur kernels, which would be prohibitively slow with PCF. As you can see, the results are most pleasing!"}),"\n",(0,s.jsx)(a.p,{children:"VSM is still work in progress so expect more updates to land in the engine in the coming weeks."}),"\n",(0,s.jsx)(a.h3,{id:"reworked-editor-camera-controls",children:"Reworked Editor Camera Controls"}),"\n",(0,s.jsx)(a.p,{children:"We've completely rewritten the controls for the Editor camera in the 3D view. It should be far more intuitive now and also enable you to be more productive. For example, we have changed the behavior of dollying the camera to be based on what the mouse cursor is pointing at. This makes it feel much more similar to Google Maps:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(52695).A+"",children:(0,s.jsx)(a.img,{alt:"zoom",src:t(44313).A+"",width:"762",height:"488"})})}),"\n",(0,s.jsx)(a.h3,{id:"easy-asset-inspection-in-dev-tools",children:"Easy Asset Inspection in Dev Tools"}),"\n",(0,s.jsx)(a.p,{children:"We've made it so your assets are displayed\xa0in your browser's Dev Tools as they are in Editor's Asset Panel. This makes it much easier to locate, inspect and debug when running your game launched from the Editor."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(37182).A+"",children:(0,s.jsx)(a.img,{alt:"devtoolsassets",src:t(58336).A+"",width:"916",height:"345"})})}),"\n",(0,s.jsx)(a.h3,{id:"engine-optimizations",children:"Engine Optimizations"}),"\n",(0,s.jsx)(a.p,{children:"We've\xa0performed\xa0a thorough round of engine optimizations, aimed at speeding up your games, but also to reduce memory allocations to avoid garbage collection stalls. Specifically, we have:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Created a special profile build of the engine which is now only used when you run the PlayCanvas Profiler from the Editor. The regular non-profile build has the code that collects all of the timing and statistical information stripped out."}),"\n",(0,s.jsxs)(a.li,{children:["Optimized many commonly used functions. ",(0,s.jsx)(a.a,{href:"https://github.com/playcanvas/engine/commit/0212abf7a65ab8e26894275e630790ad6d04c904",children:"Here is a good example"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:["Removed many allocations that used to happen at runtime. ",(0,s.jsx)(a.a,{href:"https://github.com/playcanvas/engine/commit/3b8dc59b379d337e16b6237d48af30dfa43c3599",children:"Here is a good example"}),"."]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"other-changes",children:"Other Changes"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Editor tooltips have been refactored with any missing ones added."}),"\n",(0,s.jsx)(a.li,{children:"Improved reporting of an asset's references when right clicking it in the Asset Panel."}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},37182:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/files/devtoolsassets-1-a734faab5c8f93c8839bd8bad72ac171.png"},86517:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/files/shadows-sm-f66b453904a532ca67a1eda275febc70.png"},32995:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/files/shadows-vsm-d91c4c983d141d9f1469ea2dcd66a771.png"},52695:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/files/zoom-61e6c813d88796c02eca3ce076672bac.gif"},58336:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/devtoolsassets-1-a734faab5c8f93c8839bd8bad72ac171.png"},69391:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/shadows-sm-f66b453904a532ca67a1eda275febc70.png"},59429:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/shadows-vsm-d91c4c983d141d9f1469ea2dcd66a771.png"},44313:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/zoom-61e6c813d88796c02eca3ce076672bac.gif"},28453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>r});var n=t(96540);const s={},i=n.createContext(s);function o(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:a},e.children)}},66739:e=>{e.exports=JSON.parse('{"permalink":"/variance-shadow-maps-for-webgl-and-more","editUrl":"https://github.com/playcanvas/blog/tree/main/blog/2016-05-27-variance-shadow-maps-for-webgl-and-more.md","source":"@site/blog/2016-05-27-variance-shadow-maps-for-webgl-and-more.md","title":"Variance Shadow Maps for WebGL and More!","description":"May is drawing to a close and it\'s starting to feel like summer here in London. Let\'s celebrate with a PlayCanvas Dev Update! We\'ve been busy bees, so here\'s a rundown of the main changes.","date":"2016-05-27T00:00:00.000Z","tags":[{"inline":true,"label":"editor","permalink":"/tags/editor"},{"inline":true,"label":"engine","permalink":"/tags/engine"},{"inline":true,"label":"graphics","permalink":"/tags/graphics"}],"readingTime":2.185,"hasTruncateMarker":true,"authors":[{"name":"Will Eastcott","title":"CEO","description":"Will Eastcott is an entrepreneur and veteran technologist of the games industry with experience at EA, Sony, and Activision. He has been credited in many AAA game franchises such as GTA, Call of Duty and Max Payne. He is best known for co-founding PlayCanvas, the web graphics creation platform. As CEO, he has championed the company\'s mission to make graphical web app development more accessible and collaborative through open-source technologies and cloud-based tools.","page":{"permalink":"/authors/will"},"socials":{"x":"https://x.com/willeastcott","linkedin":"https://www.linkedin.com/in/willeastcott/","github":"https://github.com/willeastcott"},"imageURL":"https://github.com/willeastcott.png","key":"will"}],"frontMatter":{"authors":"will","slug":"variance-shadow-maps-for-webgl-and-more","title":"Variance Shadow Maps for WebGL and More!","tags":["editor","engine","graphics"]},"unlisted":false,"prevItem":{"title":"Getting started with WebVR","permalink":"/getting-started-with-webvr"},"nextItem":{"title":"New Tutorials: Multiplayer with Node.js and WebGL & Facebook SDK","permalink":"/new-tutorials-multiplayer-with-nodejs-and-webgl-facebook-sdk"}}')}}]);
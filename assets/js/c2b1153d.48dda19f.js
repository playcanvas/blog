"use strict";(self.webpackChunk_playcanvas_blog=self.webpackChunk_playcanvas_blog||[]).push([[17516],{52496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var a=n(67395),o=n(74848),i=n(28453);const s={authors:"will",slug:"development-update-major-improvements-ahoy",title:"Development Update: Major Improvements Ahoy!",tags:["editor"]},r=void 0,l={authorsImageUrls:[void 0]},d=[{value:"Editor Improvements",id:"editor-improvements",level:4},{value:"Asset System Improvements",id:"asset-system-improvements",level:4},{value:"Graphics Engine Improvements",id:"graphics-engine-improvements",level:4},{value:"Fixes",id:"fixes",level:4}];function m(e){const t={a:"a",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Have you noticed that everybody seems to go on vacation in August? Not PlayCanvas! We've been burning the midnight oil to bring you a raft of new features and improvements to your favorite browser-based 3D engine. Want the deets? Read on!"}),"\n",(0,o.jsx)(t.h4,{id:"editor-improvements",children:"Editor Improvements"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["User cameras are now back and improved with interpolation for smoother animation. You can also hover on the semi-transparent rectangle of the camera to see a username tooltip to find out who's keeping you company.\n",(0,o.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(71470).A+"",children:(0,o.jsx)(t.img,{alt:"usercamera",src:n(58532).A+"",width:"690",height:"550"})})]}),"\n",(0,o.jsx)(t.li,{children:"Most assets are now triggering previews when dragged: drag a material to a material asset slot without dropping it and it will swap temporarily in the 3D view for preview. This applies to: textures, materials and cubemaps."}),"\n",(0,o.jsxs)(t.li,{children:["Materials are now draggable into the 3D view. Just drag them right onto the model.\n",(0,o.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(82381).A+"",children:(0,o.jsx)(t.img,{alt:"switchmaterial",src:n(23203).A+"",width:"685",height:"600"})})]}),"\n",(0,o.jsx)(t.li,{children:"Cubemaps are now draggable into the 3D view. Drag onto materials to apply as an environment map, or onto the background in the 3D view to apply as a scene skybox."}),"\n",(0,o.jsx)(t.li,{children:"Tooltips are now shown when hovering on entities in the 3D view\xa0(after a short delay)."}),"\n",(0,o.jsx)(t.li,{children:'Read-only collaborators\xa0are now able to click on the "View" button of code-based assets to open a read-only view of the script in the Script Editor.'}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"asset-system-improvements",children:"Asset System Improvements"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Asset loading has been heavily refactored."}),"\n",(0,o.jsx)(t.li,{children:"Assets now manage their own reloads way more efficiently."}),"\n",(0,o.jsx)(t.li,{children:"The Model Component processes any asset updates far faster."}),"\n",(0,o.jsx)(t.li,{children:"Reduced number of re-uploads to GPU of texture assets."}),"\n",(0,o.jsx)(t.li,{children:"A cube map now uploads to the GPU only if it has valid data and only if one or more faces have changed."}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"graphics-engine-improvements",children:"Graphics Engine Improvements"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Shaders are no longer linked\xa0on creation, but only when used to avoid blocking on completion of shader compilation. This generally improves load time."}),"\n",(0,o.jsx)(t.li,{children:"Texture state setting is now far more optimal leading to major rendering speedups."}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"fixes",children:"Fixes"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Asset thumbnails should now refresh in the assets panel on a re-upload."}),"\n",(0,o.jsx)(t.li,{children:"Gizmos are now not draggable outside of viewport."}),"\n",(0,o.jsx)(t.li,{children:'For the opacity map of a material, the "RGB" option has been removed, because it\xa0led to shadows disappearing.'}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"That's it for this week. We hope you like the improvements. Anything we're not working on that you want to see added to PlayCanvas? Tell us on the forum!"}),"\n",(0,o.jsx)(t.p,{children:"Have a great weekend!"})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},82381:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/files/switchmaterial-511e9c1d39f8c54ab1412a4ba49ca17b.gif"},71470:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/files/usercamera-f16060a5353b3dbfe66027aa59f98c05.gif"},23203:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/switchmaterial-511e9c1d39f8c54ab1412a4ba49ca17b.gif"},58532:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/usercamera-f16060a5353b3dbfe66027aa59f98c05.gif"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(96540);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}},67395:e=>{e.exports=JSON.parse('{"permalink":"/development-update-major-improvements-ahoy","editUrl":"https://github.com/playcanvas/blog/tree/main/blog/2015-08-14-development-update-major-improvements-ahoy.md","source":"@site/blog/2015-08-14-development-update-major-improvements-ahoy.md","title":"Development Update: Major Improvements Ahoy!","description":"Have you noticed that everybody seems to go on vacation in August? Not PlayCanvas! We\'ve been burning the midnight oil to bring you a raft of new features and improvements to your favorite browser-based 3D engine. Want the deets? Read on!","date":"2015-08-14T00:00:00.000Z","tags":[{"inline":true,"label":"editor","permalink":"/tags/editor"}],"readingTime":1.98,"hasTruncateMarker":true,"authors":[{"name":"Will Eastcott","title":"CEO","description":"Will Eastcott is an entrepreneur and veteran technologist of the games industry with experience at EA, Sony, and Activision. He has been credited in many AAA game franchises such as GTA, Call of Duty and Max Payne. He is best known for co-founding PlayCanvas, the web graphics creation platform. As CEO, he has championed the company\'s mission to make graphical web app development more accessible and collaborative through open-source technologies and cloud-based tools.","page":{"permalink":"/authors/will"},"socials":{"x":"https://x.com/willeastcott","linkedin":"https://www.linkedin.com/in/willeastcott/","github":"https://github.com/willeastcott"},"imageURL":"https://github.com/willeastcott.png","key":"will"}],"frontMatter":{"authors":"will","slug":"development-update-major-improvements-ahoy","title":"Development Update: Major Improvements Ahoy!","tags":["editor"]},"unlisted":false,"prevItem":{"title":"Development Update: Tags, New Script Attributes","permalink":"/development-update-tags-new-script-attributes"},"nextItem":{"title":"PlayCanvas pioneers 3D rich media ad format for Facebook and Twitter","permalink":"/playcanvas-pioneers-3d-rich-media-ad-format-for-facebook-and-twitter"}}')}}]);
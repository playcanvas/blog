"use strict";(self.webpackChunk_playcanvas_blog=self.webpackChunk_playcanvas_blog||[]).push([[25250],{18518:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(74848),a=t(28453);const s={authors:"will",slug:"playcanvas-engine-hits-2-0-0",title:"PlayCanvas Engine Hits 2.0.0",tags:["engine"]},o=void 0,r={permalink:"/playcanvas-engine-hits-2-0-0",editUrl:"https://github.com/playcanvas/blog/tree/main/blog/2024-08-22-playcanvas-engine-hits-2-0-0.md",source:"@site/blog/2024-08-22-playcanvas-engine-hits-2-0-0.md",title:"PlayCanvas Engine Hits 2.0.0",description:"Today marks a major milestone for the PlayCanvas Engine, the open-source JavaScript runtime that powers thousands of interactive graphical apps and tools on the web. We are bubbling with excitement to announce the release of version 2.0.0!",date:"2024-08-22T00:00:00.000Z",tags:[{inline:!0,label:"engine",permalink:"/tags/engine"}],readingTime:3.56,hasTruncateMarker:!0,authors:[{name:"Will Eastcott",title:"CEO",description:"Will Eastcott is an entrepreneur and veteran technologist of the games industry with experience at EA, Sony, and Activision. He has been credited in many AAA game franchises such as GTA, Call of Duty and Max Payne. He is best known for co-founding PlayCanvas, the web graphics creation platform. As CEO, he has championed the company's mission to make graphical web app development more accessible and collaborative through open-source technologies and cloud-based tools.",page:{permalink:"/authors/will"},socials:{x:"https://x.com/willeastcott",linkedin:"https://www.linkedin.com/in/willeastcott/",github:"https://github.com/willeastcott"},imageURL:"https://media.licdn.com/dms/image/v2/D4D03AQF9YXIeHZW9kg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1688995668268?e=1730332800&v=beta&t=UmAwlJ0nPBmnMczQ4wknx1jSDJ2anqurm2b15iLm3pM",key:"will"}],frontMatter:{authors:"will",slug:"playcanvas-engine-hits-2-0-0",title:"PlayCanvas Engine Hits 2.0.0",tags:["engine"]},unlisted:!1,nextItem:{title:"Create 3D Gaussian Splat Apps with the PlayCanvas Editor",permalink:"/create-3d-gaussian-splat-apps-with-the-playcanvas-editor"}},c={authorsImageUrls:[void 0]},l=[{value:"Why Bump to 2.0.0",id:"why-bump-to-200",level:3},{value:"What if my Project Breaks",id:"what-if-my-project-breaks",level:3},{value:"What&#39;s New",id:"whats-new",level:3},{value:"Thanking the Open Source Community",id:"thanking-the-open-source-community",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Today marks a major milestone for the PlayCanvas Engine, the ",(0,i.jsx)(n.a,{href:"https://github.com/playcanvas/engine",children:"open-source"})," JavaScript runtime that powers thousands of interactive graphical apps and tools on the web. We are bubbling with excitement to announce the release of version 2.0.0!"]}),"\n",(0,i.jsx)(n.p,{children:"For the full details, visit our GitHub:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/playcanvas/engine/releases/tag/v2.0.0",children:(0,i.jsx)(n.strong,{children:"RELEASE NOTES"})})}),"\n",(0,i.jsx)(n.p,{children:"It's not every day we do a major version bump of the Engine. Let's take a walk down memory lane to see how we got here:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"October 2010: Coding of the Engine begins!"}),"\n",(0,i.jsxs)(n.li,{children:["24 October 2011: ",(0,i.jsx)(n.a,{href:"https://github.com/playcanvas/engine/commit/e5bf014e738d5bfc92ece1d6c0f50ad71bf4dd90",children:"Engine migrated to GitHub"})]}),"\n",(0,i.jsxs)(n.li,{children:["4 June 2014: ",(0,i.jsx)(n.a,{href:"https://blog.playcanvas.com/playcanvas-goes-open-source/",children:"Engine goes open source"})]}),"\n",(0,i.jsxs)(n.li,{children:["24 April 2018: ",(0,i.jsx)(n.a,{href:"https://blog.playcanvas.com/playcanvas-engine-reaches-1-0-0/",children:"Engine hits 1.0.0"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Back in 2018, the Engine was bumped to 1.0.0 because we adhere to ",(0,i.jsx)(n.a,{href:"https://semver.org/",children:"semantic versioning"})," which dictates:"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you\u2019re worrying a lot about backward compatibility, you should probably already be 1.0.0."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"With hindsight, the Engine should probably have reached 1.0.0 some years before. It had long been stable and was already being used heavily in production!"}),"\n",(0,i.jsx)(n.h3,{id:"why-bump-to-200",children:"Why Bump to 2.0.0"}),"\n",(0,i.jsx)(n.p,{children:'Semantic versioning says that you perform a major version bump when you introduce breaking changes. To say we go out of our way to avoid introducing breaking changes in an understatement. But since 1.0.0, we had done 73 minor versions along with countless patch releases. Along the way, the Engine accumulated a considerable amount of "cruft".'}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.mdxAdmonitionTitle,{children:["cruft ",(0,i.jsx)(n.em,{children:"noun"})," ",(0,i.jsx)(n.code,{children:"INFORMAL - COMPUTING"})]}),(0,i.jsx)(n.p,{children:"badly designed, unnecessarily complicated, or unwanted code or software."})]}),"\n",(0,i.jsx)(n.p,{children:"It was getting to the point where parts of the codebase were restricting our ability to advance the Engine's capabilities. And so, we took to the decision to do a spring clean. \ud83e\uddf9 Here are some highlights of what we removed:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"WebGL 1 support."})," This is the big one. Today, devices that support WebGL 1 but not WebGL 2 is less than 2% and this number is only going to get smaller. And supporting WebGL 1 was making it extraordinarily difficult to construct the foundations we needed in order to support WebGPU. Cheerio, WebGL 1 - it's been fun! \ud83d\udc4b"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scripts 1.0 support."})," The very first ",(0,i.jsx)(n.code,{children:"ScriptComponent"})," implementation was deprecated with the introduction of ",(0,i.jsx)(n.a,{href:"https://blog.playcanvas.com/playcanvas-scripts-2-0/",children:"Scripts 2.0"})," back in 2016. So after 8 years of deprecation, it's gone! We are now focused on delivering our new ESM-based scripting system, due soon."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"AudioSourceComponent."})," This component was the precursor to the Engine's ",(0,i.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.SoundComponent.html",children:(0,i.jsx)(n.code,{children:"SoundComponent"})}),". ",(0,i.jsx)(n.code,{children:"AudioSourceComponent"})," has been deprecated for many years so it's time for it to go."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"...and several other public API symbols."})," What we are left with is a cleaner, tighter codebase that can power us into the future!"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"what-if-my-project-breaks",children:"What if my Project Breaks"}),"\n",(0,i.jsxs)(n.p,{children:["Never fear! Today's release is more relevant to 'Engine-only' users who pull the engine from ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/playcanvas",children:"NPM"}),". At a time of their choosing, these developers can upgrade to 2.0.0 and give it a try. The vast majority of projects will update without modification."]}),"\n",(0,i.jsxs)(n.p,{children:["Editor users will gain access to Engine 2.0.0 in the coming weeks. At that point, moving to 2.0.0 will be ",(0,i.jsx)(n.em,{children:"opt in"})," for existing projects. We plan to support the last Engine 1.x release in the Editor for at least a year after Engine 2 becomes available. This should be plenty of time for developers to migrate. New projects will automatically use 2.0.0. We will release more information about the transition for Editor users in the coming weeks."]}),"\n",(0,i.jsxs)(n.p,{children:["In the meantime, we ask NPM users to try Engine 2.0.0 and give us your feedback as soon as you can. We hope you like it! Head over to the ",(0,i.jsx)(n.a,{href:"https://forum.playcanvas.com/",children:"Forum"}),", ",(0,i.jsx)(n.a,{href:"https://discord.gg/RSaMRzg",children:"Discord"})," or ",(0,i.jsx)(n.a,{href:"https://github.com/playcanvas/engine",children:"GitHub"})," to have your say. ","\ud83d\udc42"]}),"\n",(0,i.jsx)(n.h3,{id:"whats-new",children:"What's New"}),"\n",(0,i.jsx)(n.p,{children:"The 2.0.0 release isn't just about breaking changes! We have some exciting features to announce by way of some brand new Engine examples:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Engine 2 Examples",src:t(41271).A+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(n.p,{children:"Check 'em out:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://playcanvas.vercel.app/#/graphics/shader-hatch",children:"Custom Shaders: Cross Hatching"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://playcanvas.vercel.app/#/graphics/instancing-gooch",children:"Custom Shaders: Used with Skinning and Instancing"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://playcanvas.vercel.app/#/graphics/ambient-occlusion",children:"Screen Space Ambient Occlusion"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://playcanvas.vercel.app/#/graphics/instancing-custom",children:"Hardware Instancing"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://playcanvas.vercel.app/#/graphics/instancing-glb",children:"glTF Hardware Instancing Extension"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"thanking-the-open-source-community",children:"Thanking the Open Source Community"}),"\n",(0,i.jsxs)(n.p,{children:["We ",(0,i.jsx)(n.em,{children:"could not"})," have reached this point without the amazing open source community:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"GitHub Contributors",src:t(12077).A+"",width:"812",height:"608"})}),"\n",(0,i.jsx)(n.p,{children:"Thank you for your incredible contributions. \ud83d\ude4f"})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},12077:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/engine-contributors-50d4173785b6d1ae8d8f478ac3bc8520.svg"},41271:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/engine2-examples-fda1649bd8bafcaed05d4ce584df015e.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
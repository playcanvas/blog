"use strict";(self.webpackChunk_playcanvas_blog=self.webpackChunk_playcanvas_blog||[]).push([[95049],{57238:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var t=o(73387),i=o(74848),s=o(28453);const l={authors:"dave",slug:"light-and-collision-component-api",title:"Light and Collision Component API",tags:["editor"]},a=void 0,r={authorsImageUrls:[void 0]},c=[];function h(e){const n={code:"code",em:"em",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Light and Collision components have been consolidated from 7 components to 2!"}),"\n",(0,i.jsxs)(n.p,{children:["Today we deployed the second of two changes to our Component System designed to make dealing with Collision and Lighting much simpler. We've combined the 4 collision Components (",(0,i.jsx)(n.em,{children:"collisionbox"}),", ",(0,i.jsx)(n.em,{children:"collisionsphere"}),", ",(0,i.jsx)(n.em,{children:"collisioncapsule"}),", and ",(0,i.jsx)(n.em,{children:"collisionmesh"}),") into a single ",(0,i.jsx)(n.em,{children:"collision"})," Component. And we've combined 3 light Components (",(0,i.jsx)(n.em,{children:"directionlight"}),", ",(0,i.jsx)(n.em,{children:"pointlight"}),", ",(0,i.jsx)(n.em,{children:"spotlight"}),") into a single ",(0,i.jsx)(n.em,{children:"light"})," Component. Both Components now have a ",(0,i.jsx)(n.em,{children:"type"})," attribute which you can use to switch between the different behaviors."]}),"\n",(0,i.jsx)(n.p,{children:"Why make this breaking change, I hear you ask? These changes drastically simplify the API when you are coding. So now code like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'this.entity.light.enable = false;\nthis.entity.collision.on("collisionstart", this.onCollision);\n'})}),"\n",(0,i.jsx)(n.p,{children:"It will work with every type of light or collision shape you are using."}),"\n",(0,i.jsx)(n.p,{children:"We've automatically migrated all Packs in your Projects to the new Components, so in most cases you won't even notice the difference."}),"\n",(0,i.jsxs)(n.p,{children:["However, for some people - if you are using the old Components in scripts - this will break your existing projects. We don't do this lightly, even though we are pre-1.0. However, fixing your projects should be straightforward. In most cases just changing the old Component to the new one in your code will fix it. You might also need to add the ",(0,i.jsx)(n.em,{children:"type"})," property to set which Component type you want."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>a});var t=o(96540);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}},73387:e=>{e.exports=JSON.parse('{"permalink":"/light-and-collision-component-api","editUrl":"https://github.com/playcanvas/blog/tree/main/blog/2013-10-31-light-and-collision-component-api.md","source":"@site/blog/2013-10-31-light-and-collision-component-api.md","title":"Light and Collision Component API","description":"Light and Collision components have been consolidated from 7 components to 2!","date":"2013-10-31T00:00:00.000Z","tags":[{"inline":true,"label":"editor","permalink":"/tags/editor"}],"readingTime":1.115,"hasTruncateMarker":true,"authors":[{"name":"Dave Evans","title":"CTO","page":{"permalink":"/authors/dave"},"socials":{"x":"https://x.com/daredevildave","linkedin":"https://www.linkedin.com/in/davewevans/","github":"https://github.com/daredevildave"},"imageURL":"https://github.com/daredevildave.png","key":"dave"}],"frontMatter":{"authors":"dave","slug":"light-and-collision-component-api","title":"Light and Collision Component API","tags":["editor"]},"unlisted":false,"prevItem":{"title":"Changes for 18th November","permalink":"/changes-for-18th-november"},"nextItem":{"title":"Nottingham GameCity and MozFest","permalink":"/nottingham-gamecity-and-mozfest"}}')}}]);
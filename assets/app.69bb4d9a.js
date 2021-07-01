import{d as e,r as t,c as n,o as a,w as o,a as r,e as s,b as l,f as i,u,h as c,g as d,i as p,j as m,k as f,F as v,l as h,t as g,V as y}from"./vendor.fd21ddf3.js";let b;const _={},x=function(e,t){if(!t)return e();if(void 0===b){const e=document.createElement("link").relList;b=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in _)return;_[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":b,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))},w=[{path:"/",name:"Index",component:()=>x((()=>import("./Index.c963d91d.js")),["/assets/Index.c963d91d.js","/assets/content-data.8550e269.js","/assets/vendor.fd21ddf3.js"])},{path:"/links",name:"Links",component:()=>x((()=>import("./Links.3766e54c.js")),["/assets/Links.3766e54c.js","/assets/content-data.8550e269.js","/assets/vendor.fd21ddf3.js"])},...[{name:"blogs-palestine-single-div",path:"/blogs/palestine-single-div",component:()=>x((()=>import("./palestine-single-div.fd16a098.js")),["/assets/palestine-single-div.fd16a098.js","/assets/palestine-single-div.58bdb7ba.css","/assets/vendor.fd21ddf3.js"]),props:!0}],{path:"/:catchAll(.*)*",component:()=>x((()=>import("./Error404.905231fb.js")),["/assets/Error404.905231fb.js","/assets/vendor.fd21ddf3.js"])}];var E=e({name:"App"});E.render=function(e,o,r,s,l,i){const u=t("router-view");return a(),n(u)};const L={class:"fill-current"};var k=e({name:"EvaIcon",props:{name:{type:String,required:!0},width:{type:[String,Number],default:"1rem"},height:{type:[String,Number],default:"1rem"},animation:{type:String,default:void 0},fill:{type:String,default:void 0}},setup(e){o((()=>e),(()=>s.exports.replace(L))),r((()=>s.exports.replace(L)))}});k.render=function(e,t,o,r,s,l){return a(),n("i",{"data-eva":e.name,"data-eva-fill":e.fill,"data-eva-width":e.width,"data-eva-height":e.height,"data-eva-animation":e.animation},null,8,["data-eva","data-eva-fill","data-eva-width","data-eva-height","data-eva-animation"])};var M=e({name:"MegaMenu"});const I={class:"fixed z-50 top-0 right-0 p-6"},j={class:"flex justify-center items-center"};M.render=function(e,o,r,s,i,u){const c=t("eva-icon");return a(),n("div",I,[l("button",j,[l(c,{name:"menu-2-outline",width:"3rem",height:"3rem",class:"cursor-pointer text-blue-gray-900"})])])};const A=e({name:"CursorFollower",setup(){const e=i(u()),t=i({pointer:!1,click:!1}),n=d();return o([e,t],(()=>(()=>{const a=null==n?void 0:n.vnode.el;a&&!a.hidden&&p({targets:a,translateX:`calc(-45% + ${e.x}px)`,translateY:`calc(-40% + ${e.y}px)`,scale:t.click?"-=0.6":t.pointer?1.6:1,opacity:t.pointer?.5:1,easing:"easeOutQuart",duration:150})})()),{immediate:!0}),r((()=>{document.body.onmouseover=e=>{if(e.target&&(null==n?void 0:n.vnode.el)){const n=window.getComputedStyle(e.target).cursor;t.pointer="pointer"===n}},document.onmousedown=()=>{t.click=!0},document.onmouseup=()=>{t.click=!1}})),()=>c("div",{class:"pointer-events-none opacity-0 absolute z-50 top-0 left-0 w-20 h-20 bg-blue-300/30 border border-blue-500/20 rounded-full"})}});var S=e({name:"MainLayout",components:{CursorFollower:A,MegaMenu:M},setup:()=>({isMobile:!0})});const $=l("footer",{class:"p-8 bg-purple-400 text-center"},[l("span",{class:"text-blue-50"},"Copyright © 2021 All rights reserved")],-1);S.render=function(e,o,r,s,i,u){const c=t("MegaMenu"),d=t("CursorFollower");return a(),n(v,null,[l("nav",null,[l(c)]),m(e.$slots,"default"),$,e.isMobile?f("v-if",!0):(a(),n(d,{key:0}))],64)};var C=e({name:"LayoutBlog",components:{MainLayout:S},computed:{frontmatter(){return this.$attrs.frontmatter}}});const O={class:"w-full"},P={class:"w-prose mx-auto my-8 flex flex-col gap-y-4 px-2"},V={class:"font-bold text-4xl text-blue-gray-900"},D=l("hr",{class:"h-0.5 bg-blue-200"},null,-1);C.render=function(e,o,r,s,i,u){const c=t("MainLayout");return a(),n(c,null,{default:h((()=>[l("main",O,[l("article",P,[l("h1",V,g(e.frontmatter.title),1),D,m(e.$slots,"default")])])])),_:3})};y(E,{routes:w},(({app:e})=>{e.component("EvaIcon",k),e.component("BlogLayout",C)}));export{S as _};
import{d as e,u as t,r as a,c as r,a as n,T as o,F as l,o as s,b as i,e as c,w as d,f as u,h as p,g as m,i as f,j as b,k as v,l as g,m as y,t as h,n as _,V as x}from"./vendor.02483752.js";let w;const E={},M=function(e,t){if(!t)return e();if(void 0===w){const e=document.createElement("link").relList;w=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in E)return;E[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":w,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))},L=[{path:"/",name:"Index",component:()=>M((()=>import("./Index.f924c4a2.js")),["/assets/Index.f924c4a2.js","/assets/content-data.6880abf5.js","/assets/vendor.02483752.js"])},{path:"/links",name:"Links",component:()=>M((()=>import("./Links.30fee4fa.js")),["/assets/Links.30fee4fa.js","/assets/vendor.02483752.js","/assets/content-data.6880abf5.js"])},...[{name:"blogs-palestine-single-div",path:"/blogs/palestine-single-div",component:()=>M((()=>import("./palestine-single-div.548eabc9.js")),["/assets/palestine-single-div.548eabc9.js","/assets/palestine-single-div.58bdb7ba.css","/assets/vendor.02483752.js"]),props:!0}],{path:"/:catchAll(.*)*",component:()=>M((()=>import("./Error404.7317cb72.js")),["/assets/Error404.7317cb72.js","/assets/vendor.02483752.js"])}];var j=e({name:"App",setup(){t({script:[{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js","data-ad-client":"ca-pub-9429563065756061"},{async:!0,src:"https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js","custom-element":"amp-auto-ads"}]})}});const k=n("amp-auto-ads",{type:"adsense","data-ad-client":"ca-pub-9429563065756061"},null,-1);j.render=function(e,t,i,c,d,u){const p=a("router-view");return s(),r(l,null,[n(p),(s(),r(o,{to:"body"},[k]))],64)};var A=e({name:"MegaMenu"});const P={class:"fixed z-50 top-0 right-0 p-6"},O={class:"flex justify-center items-center"};A.render=function(e,t,o,l,i,c){const d=a("eva-icon");return s(),r("div",P,[n("button",O,[n(d,{name:"menu-2-outline",width:"3rem",height:"3rem",class:"cursor-pointer text-blue-gray-900"})])])};const S=e({name:"CursorFollower",setup(){const e=i(c()),t=i({pointer:!1,click:!1}),a=m();return d([e,t],(()=>(()=>{const r=null==a?void 0:a.vnode.el;r&&!r.hidden&&f({targets:r,translateX:`calc(-45% + ${e.x}px)`,translateY:`calc(-40% + ${e.y}px)`,scale:t.click?"-=0.6":t.pointer?1.6:1,opacity:t.pointer?.5:1,easing:"easeOutQuart",duration:150})})()),{immediate:!0}),u((()=>{document.body.onmouseover=e=>{if(e.target&&(null==a?void 0:a.vnode.el)){const a=window.getComputedStyle(e.target).cursor;t.pointer="pointer"===a}},document.onmousedown=()=>{t.click=!0},document.onmouseup=()=>{t.click=!1}})),()=>p("div",{class:"pointer-events-none opacity-0 absolute z-50 top-0 left-0 w-20 h-20 bg-blue-300/30 border border-blue-500/20 rounded-full"})}}),I=(e,t)=>({get:()=>getComputedStyle(e).getPropertyValue(t),set(a){e.style.setProperty(t,a)}});var C=e({setup(){u((()=>{const e=Array.from(document.querySelectorAll(".blob"),(e=>Object.defineProperties({},{scaleX:I(e,"--tw-scale-x"),scaleY:I(e,"--tw-scale-y")}))),t=Array.from(document.querySelectorAll(".blob__container"),(e=>Object.defineProperties({},{rotate:I(e,"--tw-rotate")})));f({targets:e,scaleX:[1.3,1,1.3],scaleY:[1.3,1,1.3],loop:!0,direction:"alternate",autoplay:!0,duration:1e4,delay:f.stagger(500)}),f({targets:t,rotate:"1turn",loop:!0,direction:"alternate",autoplay:!0,duration:2e4,delay:f.stagger(500)})}))}});const $={class:"fixed -z-10 top-0 left-0 w-full h-screen"},B=b('<div class="relative top-1/2 left-1/2 transform -translate-y-10"><div class="blob__container absolute transform"><div class="blob w-64 h-64 bg-yellow-300/30 rounded-full filter blur-xl transform -translate-x-1/2 -translate-y-[80%]"></div></div><div class="blob__container absolute transform"><div class="blob w-64 h-64 bg-blue-300/30 rounded-full filter blur-xl transform -translate-x-[80%] -translate-y-[20%]"></div></div><div class="blob__container absolute transform"><div class="blob w-64 h-64 bg-green-300/30 rounded-full filter blur-xl transform -translate-x-[20%] -translate-y-[20%]"></div></div></div>',1);C.render=function(e,t,a,n,o,l){return s(),r("div",$,[B])};var V=e({name:"MainLayout",components:{CursorFollower:S,MegaMenu:A,Blob:C},setup:()=>({isMobile:/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)})});const T=n("footer",{class:"p-8 bg-purple-400 text-center"},[n("span",{class:"text-blue-50"},"Copyright © 2021 All rights reserved")],-1);V.render=function(e,t,o,i,c,d){const u=a("MegaMenu"),p=a("Blob"),m=a("ClientOnly"),f=a("CursorFollower");return s(),r(l,null,[n("nav",null,[n(u)]),v(e.$slots,"default"),n(m,null,{default:y((()=>[n(p)])),_:1}),T,e.isMobile?g("v-if",!0):(s(),r(f,{key:0}))],64)};var q=e({name:"LayoutBlog",components:{MainLayout:V},computed:{frontmatter(){return this.$attrs.frontmatter}}});const D={class:"relative w-full flex"},F={class:"w-prose mx-auto my-8 flex flex-col gap-y-4 px-2"},R={class:"font-bold text-4xl text-blue-gray-900"},z=n("hr",{class:"h-0.5 bg-blue-200"},null,-1);q.render=function(e,t,o,l,i,c){const d=a("MainLayout");return s(),r(d,null,{default:y((()=>[n("main",D,[n("article",F,[n("h1",R,h(e.frontmatter.title),1),z,v(e.$slots,"default")])])])),_:3})};const X={class:"fill-current"};var Y=e({name:"EvaIcon",props:{name:{type:String,required:!0},width:{type:[String,Number],default:"1rem"},height:{type:[String,Number],default:"1rem"},animation:{type:String,default:void 0},fill:{type:String,default:void 0}},setup(e){d((()=>e),(()=>_.exports.replace(X))),u((()=>_.exports.replace(X)))}});Y.render=function(e,t,a,n,o,l){return s(),r("i",{"data-eva":e.name,"data-eva-fill":e.fill,"data-eva-width":e.width,"data-eva-height":e.height,"data-eva-animation":e.animation},null,8,["data-eva","data-eva-fill","data-eva-width","data-eva-height","data-eva-animation"])};x(j,{routes:L},(({app:e})=>{e.component("EvaIcon",Y),e.component("BlogLayout",q)}));export{V as _};

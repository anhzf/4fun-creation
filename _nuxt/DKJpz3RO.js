import{u as r}from"./QMgxC7ZU.js";import{q as n}from"./C0C9ilaW.js";import{p as c,P as p}from"./CN-GE9fl.js";import{a as i,I as l,f as m,g as _,h as u,t as d,H as f}from"./dx5QznyG.js";import"./DHeqog6K.js";const h={"data-scroll-section":""},C=i({__name:"index",async setup(y){let t,a;const{data:s}=([t,a]=l(async()=>r("projects",async()=>(await n("/projects").only(["title","desc","thumbnail","technologies","liveUrl","demoUrl","repositoryUrl","_path"]).find()).map(e=>c(p,{...e,path:e._path})),{default:()=>[]})),t=await t,a(),t);return(o,e)=>(m(),_("div",h,[u("pre",null,d(f(s)),1)]))}});export{C as default};

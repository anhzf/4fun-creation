import{G as h,a3 as w,x as y,a9 as D,v as g,a as H,aa as b,ab as x,ac as p}from"./LBhPyXu7.js";import{u as S}from"./DSaT_a7j.js";import _ from"./Dl-H76ES.js";import q from"./Duz_YQpk.js";import"./CxTUB48G.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./YbABUs4B.js";import"./PFQu67gC.js";import"./BoTp7EoM.js";const d=(u,s=y())=>{const e=h(u),m=g();w(()=>h(u),(n=e)=>{if(!s.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),m.public.content.host;const c=(t==null?void 0:t.description)||(n==null?void 0:n.description);c&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:c}),t!=null&&t.image||(n==null||n.image),D(()=>S(t))},{immediate:!0})},$=H({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(u){const{contentHead:s}=g().public.content,e=b(),{tag:m,excerpt:f,path:n,query:t,head:r}=u,c=r===void 0?s:r,l={...t||{},path:n||(t==null?void 0:t.path)||x(y().path),find:"one"},v=(o,i)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return p(q,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:C})=>{var a;return c&&d(o),(a=e.default)==null?void 0:a.call(e,{doc:o,refresh:i,isPartial:C,excerpt:f,...this.$attrs})}:({data:o})=>(c&&d(o),p(_,{value:o,excerpt:f,tag:m,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):v("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||p("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||p("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),P=$;export{P as default};
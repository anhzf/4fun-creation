import{b as h,r as u,o as _,i as r,E as e,O as o,L as l,Z as f,a4 as p,z as v,W as x,X as b}from"./entry.d787de7b.js";import{b as g,o as k}from"./index.2daba45a.js";import"./client-only.4eab2f82.js";import{_ as w}from"./_plugin-vue_export-helper.a1a6add7.js";const s=a=>(x("data-v-d648c232"),a=a(),b(),a),M={class:"fixed z-50 top-0 right-0"},y={class:"m-6"},C=s(()=>e("div",{class:"i-eva:menu-2-outline cursor-pointer w-12 h-12 text-slate-900"},null,-1)),j=[C],S={class:"self-end p-6"},B=s(()=>e("div",{class:"i-eva:close-outline cursor-pointer w-12 h-12 text-slate-900"},null,-1)),N=[B],O={class:"flex flex-col gap-y-2"},I={class:"flex"},L=s(()=>e("div",{class:"i-eva:person-outline menu-item__icon"},null,-1)),V=s(()=>e("span",null,"About Me",-1)),$={class:"flex"},z=s(()=>e("div",{class:"i-eva:link-2-outline menu-item__icon"},null,-1)),E=s(()=>e("span",null,"Links",-1)),U={class:"flex"},A=s(()=>e("div",{class:"i-eva:bulb-outline menu-item__icon"},null,-1)),H=s(()=>e("span",null,"Projects",-1)),P=s(()=>e("li",{class:"flex"},[e("a",{href:"https://drive.google.com/file/d/1BNocju57scUMHLoShoUltefS7NrmCsO1/view?usp=sharing",target:"_blank",class:"menu-item"},[e("div",{class:"i-eva:attach-outline menu-item__icon"}),e("span",null,"Resume")])],-1)),Q={class:"flex"},R=s(()=>e("div",{class:"i-eva:book-open-outline menu-item__icon"},null,-1)),T=s(()=>e("span",null,"Blogs",-1)),W={class:"absolute bottom-6 inset-x-1/2 flex justify-center transform -translate-x-1/2"},X=s(()=>e("div",{class:"i-eva:home-outline w-8 h-8 text-slate-300 group-hover:text-blue-500"},null,-1)),Z=h({__name:"MegaMenu",setup(a){const c=u(null),d=g("(min-width: 1280px)"),t=u(d.value);return k(c,()=>{t.value=!1}),(q,i)=>{const n=v;return _(),r("div",M,[e("div",y,[e("button",{"aria-label":"Open Menu",class:"flex p-2 bg-teal-300/50 hover:bg-amber-300/50 justify-center items-center rounded-full transition-colors",onClick:i[0]||(i[0]=m=>t.value=!t.value)},j)]),o(p,{class:"absolute right-0 top-0 transition-transform duration-500","enter-from-class":"translate-x-full","enter-to-class":"translate-x-0","leave-active-class":"translate-x-0","leave-to-class":"translate-x-full"},{default:l(()=>[t.value?(_(),r("nav",{key:0,ref_key:"theMenu",ref:c,class:"overflow-auto flex flex-col w-80 max-h-screen pb-32 bg-white shadow-xl shadow-indigo-400"},[e("div",S,[e("button",{class:"flex p-2 hover:bg-rose-100 justify-center items-center rounded-full",onClick:i[1]||(i[1]=m=>t.value=!t.value)},N)]),e("ul",O,[e("li",I,[o(n,{to:{name:"about"},class:"menu-item"},{default:l(()=>[L,V]),_:1})]),e("li",$,[o(n,{to:{name:"links"},class:"menu-item"},{default:l(()=>[z,E]),_:1})]),e("li",U,[o(n,{to:{name:"index",hash:"#projects"},class:"menu-item"},{default:l(()=>[A,H]),_:1})]),P,e("li",Q,[o(n,{href:{name:"blogs"},class:"menu-item"},{default:l(()=>[R,T]),_:1})]),e("li",W,[o(n,{to:{name:"index"},class:"group p-4 bg-white hover:bg-slate-100 active:bg-slate-200 rounded-full border-2 border-blue-200"},{default:l(()=>[X]),_:1})])])],512)):f("",!0)]),_:1})])}}}),K=w(Z,[["__scopeId","data-v-d648c232"]]);export{K as default};
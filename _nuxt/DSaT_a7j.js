import{aD as o,c,aE as f,a3 as d,aw as v,aF as i,aG as l,aH as h,ai as m}from"./LBhPyXu7.js";function I(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=c(!1),n=c({});f(()=>{n.value=s.value?{}:h(a)});const r=t.push(n.value,e);return d(n,u=>{r.patch(u)}),m()&&(v(()=>{r.dispose()}),i(()=>{s.value=!0}),l(()=>{s.value=!1})),r}export{I as u};
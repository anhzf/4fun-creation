import{u as H,a as K,c as _,G as C,L as F,M as X,o as Y,B as ee,N as te,O as ne,j as b,P as M,Q as W,R as ae,S as w,U as le,F as V,V as oe,W as Re,X as se,Y as re,x as ie}from"./CwRR-L4q.js";import{u as ue}from"./DzwV_8MX.js";function ce(t=H()){var a;return(a=t.ssrContext)==null?void 0:a.event}const de={trailing:!0};function fe(t,a=25,i={}){if(i={...de,...i},!Number.isFinite(a))throw new TypeError("Expected `wait` to be a finite number");let S,c,u=[],s,d;const r=(v,l)=>(s=ve(t,v,l),s.finally(()=>{if(s=null,i.trailing&&d&&!c){const x=r(v,d);return d=null,x}}),s);return function(...v){return s?(i.trailing&&(d=v),s):new Promise(l=>{const x=!c&&i.leading;clearTimeout(c),c=setTimeout(()=>{c=null;const A=i.leading?S:r(this,v);for(const m of u)m(A);u=[]},a),x?(S=r(this,v),l(S)):u.push(l)})}}async function ve(t,a,i){return await t.apply(a,i)}const R="_islandPromises",me=/data-island-uid="([^"]*)"/,pe=/data-island-uid(="")?(?!="[^"])/g,ye=/data-island-slot="([^"]*)"/g,ge=/ data-island-slot="([^"]*)"[^>]*>/g;let he=1;const _e=()=>(he++).toString();const Se=K({name:"NuxtIsland",props:{name:{type:String,required:!0},lazy:Boolean,props:{type:Object,default:()=>{}},context:{type:Object,default:()=>({})},scopeId:{type:String,default:()=>{}},source:{type:String,default:()=>{}},dangerouslyLoadClientComponents:{type:Boolean,default:!1}},emits:["error"],async setup(t,{slots:a,expose:i,emit:S}){var k,N,j,z,U;let c=!1;const u=_(0),s=_(0),d=C(()=>F),r=_(null),v=ie(),l=H(),x=C(()=>t.props?Object.fromEntries(Object.entries(t.props).filter(([n])=>!n.startsWith("data-v-"))):{}),A=C(()=>X([t.name,x.value,t.context,t.source])),m=W();ce();const Z=globalThis.fetch,O=_(!1);Y(()=>{O.value=!0,u.value++});function q(n,e){const o={};e.props&&(o.props=e.props),e.slots&&(o.slots=e.slots),e.components&&(o.components=e.components),l.payload.data[n]={__nuxt_island:{key:n,params:{...t.context,props:t.props?JSON.stringify(t.props):void 0},result:o},...e}}const p={};if(m.vnode.el){const n=(k=ee(l.payload.data[`${t.name}_${A.value}`]))==null?void 0:k.slots;n&&(p.slots=n)}const E=_("");if((N=m.vnode)!=null&&N.el){E.value=((j=te(m.vnode.el,!0))==null?void 0:j.join(""))||"";const n=`${t.name}_${A.value}`;(z=l.payload.data)[n]||(z[n]={}),l.payload.data[n].html=E.value}const y=_(((U=E.value.match(me))==null?void 0:U[1])??_e()),G=C(()=>[...E.value.matchAll(ye)].map(n=>n[1])),L=C(()=>{const n=Object.keys(a);let e=E.value;if(t.scopeId&&(e=e.replace(/^<[^> ]*/,o=>o+" "+t.scopeId)),!d.value)for(const[o,g]of Object.entries(p.components||{}))e=e.replace(new RegExp(` data-island-uid="${y.value}" data-island-component="${o}"[^>]*>`),f=>f+g.html);return p.slots?e.replaceAll(ge,(o,g)=>{var f,h;return n.includes(g)?o:o+(((h=(f=p.slots)==null?void 0:f[g])==null?void 0:h.fallback)||"")}):e}),$=_({link:[],style:[]});ue($);async function J(n=!1){var h;const e=`${t.name}_${A.value}`;if(!n&&((h=l.payload.data[e])!=null&&h.html))return l.payload.data[e];const o=`/__nuxt_island/${e}.json`,f=await(await Z(se(t.source?o:re(v.app.baseURL??"",o),{...t.context,props:t.props?JSON.stringify(t.props):void 0}))).json();return q(e,f),f}async function I(n=!1){l[R]=l[R]||{},l[R][y.value]||(l[R][y.value]=J(n).finally(()=>{delete l[R][y.value]}));try{const e=await l[R][y.value];$.value.link=e.head.link,$.value.style=e.head.style,E.value=e.html.replaceAll(pe,`data-island-uid="${y.value}"`),s.value++,r.value=null,p.slots=e.slots||{},p.components=e.components||{},ae(()=>{c=!0,u.value++})}catch(e){r.value=e,S("error",e)}}return i({refresh:()=>I(!0)}),ne(t,fe(()=>I(),100),{deep:!0}),!m.vnode.el&&t.lazy?I():(!m.vnode.el||!l.payload.serverRendered)&&await I(),(n,e)=>{var o;return!L.value||r.value?[((o=a.fallback)==null?void 0:o.call(a,{error:r.value}))??b("div")]:[M([s.value],()=>b(V,{key:s.value},[w(le(L.value||"<div></div>",1))]),e,0),M([u.value],()=>{var h;const g=[],f=u.value===0||!!(u.value&&!(u.value%2));if(y.value&&L.value&&(t.lazy?c:O.value||(h=m.vnode)!=null&&h.el))for(const T in a)G.value.includes(T)&&g.push(b(oe,{to:`${f?"div":""}[data-island-uid="${y.value}"][data-island-slot="${T}"]`},{default:()=>{var P,B;return((B=(P=p.slots)==null?void 0:P[T].props)!=null&&B.length?p.slots[T].props:[{}]).map(Q=>{var D;return(D=a[T])==null?void 0:D.call(a,Q)})}}));return w(V,g)},e,1)]}}}),Ae=t=>K({name:t,inheritAttrs:!1,props:{lazy:Boolean},emits:["error"],setup(a,{attrs:i,slots:S,expose:c,emit:u}){const s=W(),d=_(null);return c({refresh:()=>{var r;return(r=d.value)==null?void 0:r.refresh()}}),()=>w(Se,{name:t,lazy:a.lazy,props:i,scopeId:s==null?void 0:s.vnode.scopeId,ref:d,onError:r=>{u("error",r)}},S)}});export{Ae as c};

import{H as A,Z as X,X as Y,C,c as g,o as j,Y as T,O as L}from"./dx5QznyG.js";function _(e){return X()?(Y(e),!0):!1}function S(e){return typeof e=="function"?e():A(e)}const M=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const k=Object.prototype.toString,B=e=>k.call(e)==="[object Object]",D=()=>{};function G(e){var n;const o=S(e);return(n=o==null?void 0:o.$el)!=null?n:o}const b=M?window:void 0,V=M?window.navigator:void 0;function y(...e){let n,o,r,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,r,a]=e,n=b):[n,o,r,a]=e,!n)return D;Array.isArray(o)||(o=[o]),Array.isArray(r)||(r=[r]);const i=[],l=()=>{i.forEach(s=>s()),i.length=0},d=(s,u,f,p)=>(s.addEventListener(u,f,p),()=>s.removeEventListener(u,f,p)),c=L(()=>[G(n),S(a)],([s,u])=>{if(l(),!s)return;const f=B(u)?{...u}:u;i.push(...o.flatMap(p=>r.map(m=>d(s,p,m,f))))},{immediate:!0,flush:"post"}),v=()=>{c(),l()};return _(v),v}function F(){const e=g(!1),n=T();return n&&j(()=>{e.value=!0},n),e}function I(e){const n=F();return C(()=>(n.value,!!e()))}const N={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function Z(e={}){const{type:n="page",touch:o=!0,resetOnTouchEnds:r=!1,initialValue:a={x:0,y:0},window:i=b,target:l=i,scroll:d=!0,eventFilter:c}=e;let v=null;const s=g(a.x),u=g(a.y),f=g(null),p=typeof n=="function"?n:N[n],m=t=>{const h=p(t);v=t,h&&([s.value,u.value]=h,f.value="mouse")},w=t=>{if(t.touches.length>0){const h=p(t.touches[0]);h&&([s.value,u.value]=h,f.value="touch")}},E=()=>{if(!v||!i)return;const t=p(v);v instanceof MouseEvent&&t&&(s.value=t[0]+i.scrollX,u.value=t[1]+i.scrollY)},x=()=>{s.value=a.x,u.value=a.y},H=c?t=>c(()=>m(t),{}):t=>m(t),O=c?t=>c(()=>w(t),{}):t=>w(t),W=c?()=>c(()=>E(),{}):()=>E();if(l){const t={passive:!0};y(l,["mousemove","dragover"],H,t),o&&n!=="movement"&&(y(l,["touchstart","touchmove"],O,t),r&&y(l,"touchend",x,t)),d&&n==="page"&&y(i,"scroll",W,{passive:!0})}return{x:s,y:u,sourceType:f}}function $(e={},n={}){const{navigator:o=V}=n,r=o,a=I(()=>r&&"canShare"in r);return{isSupported:a,share:async(l={})=>{if(a.value){const d={...S(e),...S(l)};let c=!0;if(d.files&&r.canShare&&(c=r.canShare({files:d.files})),c)return r.share(d)}}}}export{Z as a,$ as u};

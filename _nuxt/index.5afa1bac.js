import{a2 as C,a3 as P,u as T,g as X,k as E,E as Y,s as j,J as B,l as D}from"./entry.cbe8610d.js";function W(e){return C()?(P(e),!0):!1}function w(e){return typeof e=="function"?e():T(e)}const A=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const F=Object.prototype.toString,G=e=>F.call(e)==="[object Object]",M=()=>{},N=Q();function Q(){var e;return A&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function y(e){var r;const a=w(e);return(r=a==null?void 0:a.$el)!=null?r:a}const S=A?window:void 0,V=A?window.navigator:void 0;function h(...e){let r,a,n,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,n,o]=e,r=S):[r,a,n,o]=e,!r)return M;Array.isArray(a)||(a=[a]),Array.isArray(n)||(n=[n]);const u=[],i=()=>{u.forEach(f=>f()),u.length=0},d=(f,m,t,s)=>(f.addEventListener(m,t,s),()=>f.removeEventListener(m,t,s)),l=j(()=>[y(r),w(o)],([f,m])=>{if(i(),!f)return;const t=G(m)?{...m}:m;u.push(...a.flatMap(s=>n.map(p=>d(f,s,p,t))))},{immediate:!0,flush:"post"}),v=()=>{l(),i()};return W(v),v}let O=!1;function U(e,r,a={}){const{window:n=S,ignore:o=[],capture:u=!0,detectIframe:i=!1}=a;if(!n)return;N&&!O&&(O=!0,Array.from(n.document.body.children).forEach(t=>t.addEventListener("click",M)),n.document.documentElement.addEventListener("click",M));let d=!0;const l=t=>o.some(s=>{if(typeof s=="string")return Array.from(n.document.querySelectorAll(s)).some(p=>p===t.target||t.composedPath().includes(p));{const p=y(s);return p&&(t.target===p||t.composedPath().includes(p))}}),f=[h(n,"click",t=>{const s=y(e);if(!(!s||s===t.target||t.composedPath().includes(s))){if(t.detail===0&&(d=!l(t)),!d){d=!0;return}r(t)}},{passive:!0,capture:u}),h(n,"pointerdown",t=>{const s=y(e);d=!l(t)&&!!(s&&!t.composedPath().includes(s))},{passive:!0}),i&&h(n,"blur",t=>{setTimeout(()=>{var s;const p=y(e);((s=n.document.activeElement)==null?void 0:s.tagName)==="IFRAME"&&!(p!=null&&p.contains(n.document.activeElement))&&r(t)},0)})].filter(Boolean);return()=>f.forEach(t=>t())}function q(){const e=E(!1);return B()&&D(()=>{e.value=!0}),e}function k(e){const r=q();return X(()=>(r.value,!!e()))}function $(e,r={}){const{window:a=S}=r,n=k(()=>a&&"matchMedia"in a&&typeof a.matchMedia=="function");let o;const u=E(!1),i=v=>{u.value=v.matches},d=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",i):o.removeListener(i))},l=Y(()=>{n.value&&(d(),o=a.matchMedia(w(e)),"addEventListener"in o?o.addEventListener("change",i):o.addListener(i),u.value=o.matches)});return W(()=>{l(),d(),o=void 0}),u}const J={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function z(e={}){const{type:r="page",touch:a=!0,resetOnTouchEnds:n=!1,initialValue:o={x:0,y:0},window:u=S,target:i=u,scroll:d=!0,eventFilter:l}=e;let v=null;const f=E(o.x),m=E(o.y),t=E(null),s=typeof r=="function"?r:J[r],p=c=>{const g=s(c);v=c,g&&([f.value,m.value]=g,t.value="mouse")},L=c=>{if(c.touches.length>0){const g=s(c.touches[0]);g&&([f.value,m.value]=g,t.value="touch")}},b=()=>{if(!v||!u)return;const c=s(v);v instanceof MouseEvent&&c&&(f.value=c[0]+u.scrollX,m.value=c[1]+u.scrollY)},x=()=>{f.value=o.x,m.value=o.y},I=l?c=>l(()=>p(c),{}):c=>p(c),H=l?c=>l(()=>L(c),{}):c=>L(c),_=l?()=>l(()=>b(),{}):()=>b();if(i){const c={passive:!0};h(i,["mousemove","dragover"],I,c),a&&r!=="movement"&&(h(i,["touchstart","touchmove"],H,c),n&&h(i,"touchend",x,c)),d&&r==="page"&&h(u,"scroll",_,{passive:!0})}return{x:f,y:m,sourceType:t}}function K(e={},r={}){const{navigator:a=V}=r,n=a,o=k(()=>n&&"canShare"in n);return{isSupported:o,share:async(i={})=>{if(o.value){const d={...w(e),...w(i)};let l=!0;if(d.files&&n.canShare&&(l=n.canShare({files:d.files})),l)return n.share(d)}}}}export{$ as a,z as b,U as o,K as u};

var P=Object.defineProperty;var A=(e,t,s)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var k=(e,t,s)=>A(e,typeof t!="symbol"?t+"":t,s);var h;function C(e){return{lang:(e==null?void 0:e.lang)??(h==null?void 0:h.lang),message:e==null?void 0:e.message,abortEarly:(e==null?void 0:e.abortEarly)??(h==null?void 0:h.abortEarly),abortPipeEarly:(e==null?void 0:e.abortPipeEarly)??(h==null?void 0:h.abortPipeEarly)}}var b;function O(e){return b==null?void 0:b.get(e)}var d;function D(e){return d==null?void 0:d.get(e)}var g;function I(e,t){var s;return(s=g==null?void 0:g.get(e))==null?void 0:s.get(t)}function j(e){var s,i;const t=typeof e;return t==="string"?`"${e}"`:t==="number"||t==="bigint"||t==="boolean"?`${e}`:t==="object"||t==="function"?(e&&((i=(s=Object.getPrototypeOf(e))==null?void 0:s.constructor)==null?void 0:i.name))??"null":t}function y(e,t,s,i,o){const a=s.value,u=e.expects??null,v=j(a),r={kind:e.kind,type:e.type,input:a,expected:u,received:v,message:`Invalid ${t}: ${u?`Expected ${u} but r`:"R"}eceived ${v}`,requirement:e.requirement,path:o==null?void 0:o.path,issues:o==null?void 0:o.issues,lang:i.lang,abortEarly:i.abortEarly,abortPipeEarly:i.abortPipeEarly},l=e.kind==="schema",n=e.message??I(e.reference,r.lang)??(l?D(r.lang):null)??i.message??O(r.lang);n&&(r.message=typeof n=="function"?n(r):n),l&&(s.typed=!1),s.issues?s.issues.push(r):s.issues=[r]}function T(e,t){return Object.hasOwn(e,t)&&t!=="__proto__"&&t!=="prototype"&&t!=="constructor"}var F=class extends Error{constructor(t){super(t[0].message);k(this,"issues");this.name="ValiError",this.issues=t}};function M(e,t,s){return typeof e.default=="function"?e.default(t,s):e.default}function w(e,t){return{kind:"schema",type:"array",reference:w,expects:"Array",async:!1,item:e,message:t,_run(s,i){var a;const o=s.value;if(Array.isArray(o)){s.typed=!0,s.value=[];for(let u=0;u<o.length;u++){const v=o[u],r=this.item._run({typed:!1,value:v},i);if(r.issues){const l={type:"array",origin:"value",input:o,key:u,value:v};for(const n of r.issues)n.path?n.path.unshift(l):n.path=[l],(a=s.issues)==null||a.push(n);if(s.issues||(s.issues=r.issues),i.abortEarly){s.typed=!1;break}}r.typed||(s.typed=!1),s.value.push(r.value)}}else y(this,"type",s,i);return s}}}function S(e){return{kind:"schema",type:"boolean",reference:S,expects:"boolean",async:!1,message:e,_run(t,s){return typeof t.value=="boolean"?t.typed=!0:y(this,"type",t,s),t}}}function c(e,...t){const s={kind:"schema",type:"nullish",reference:c,expects:`${e.expects} | null | undefined`,async:!1,wrapped:e,_run(i,o){return(i.value===null||i.value===void 0)&&("default"in this&&(i.value=M(this,i,o)),i.value===null||i.value===void 0)?(i.typed=!0,i):this.wrapped._run(i,o)}};return 0 in t&&(s.default=t[0]),s}function x(e,t,s){return{kind:"schema",type:"object_with_rest",reference:x,expects:"Object",async:!1,entries:e,rest:t,message:s,_run(i,o){var u,v;const a=i.value;if(a&&typeof a=="object"){i.typed=!0,i.value={};for(const r in this.entries){const l=a[r],n=this.entries[r]._run({typed:!1,value:l},o);if(n.issues){const m={type:"object",origin:"value",input:a,key:r,value:l};for(const f of n.issues)f.path?f.path.unshift(m):f.path=[m],(u=i.issues)==null||u.push(f);if(i.issues||(i.issues=n.issues),o.abortEarly){i.typed=!1;break}}n.typed||(i.typed=!1),(n.value!==void 0||r in a)&&(i.value[r]=n.value)}if(!i.issues||!o.abortEarly){for(const r in a)if(T(a,r)&&!(r in this.entries)){const l=a[r],n=this.rest._run({typed:!1,value:l},o);if(n.issues){const m={type:"object",origin:"value",input:a,key:r,value:l};for(const f of n.issues)f.path?f.path.unshift(m):f.path=[m],(v=i.issues)==null||v.push(f);if(i.issues||(i.issues=n.issues),o.abortEarly){i.typed=!1;break}}n.typed||(i.typed=!1),i.value[r]=n.value}}}else y(this,"type",i,o);return i}}}function E(e,t){return{kind:"schema",type:"picklist",reference:E,expects:e.map(j).join(" | ")||"never",async:!1,options:e,message:t,_run(s,i){return this.options.includes(s.value)?s.typed=!0:y(this,"type",s,i),s}}}function p(e){return{kind:"schema",type:"string",reference:p,expects:"string",async:!1,message:e,_run(t,s){return typeof t.value=="string"?t.typed=!0:y(this,"type",t,s),t}}}function _(){return{kind:"schema",type:"unknown",reference:_,expects:"unknown",async:!1,_run(e){return e.typed=!0,e}}}function q(e,t,s){const i=e._run({typed:!1,value:t},C(s));if(i.issues)throw new F(i.issues);return i.value}const V={nextjs:{title:"Next.js",icon:"https://nextjs.org/static/favicon/favicon-32x32.png",description:"The React Framework for Production",url:"https://nextjs.org/"},react:{title:"React",icon:"https://reactjs.org/favicon.ico",description:"A JavaScript library for building user interfaces",url:"https://reactjs.org/"},tailwindcss:{title:"Tailwind CSS",icon:"https://tailwindcss.com/favicons/favicon.ico?v=3",description:"A utility-first CSS framework for rapidly building custom designs",url:"https://tailwindcss.com/"},nuxtjs:{title:"Nuxt.js",icon:"/assets/icons/nuxt.svg",description:"The Intuitive Vue Framework",url:"https://nuxtjs.org/"},quasar:{title:"Quasar",icon:"https://raw.githubusercontent.com/quasarframework/quasar-art/master/dist/32/logo.png",description:"Developer-oriented, front-end framework with VueJS components for best-in-class high-performance, responsive websites, PWA, SSR, Mobile and Desktop apps, all from the same codebase. Sensible people choose Vue. Productive people choose Quasar. Be both.",url:"https://quasar.dev/"},firebase:{title:"Firebase",icon:"https://www.gstatic.com/devrel-devsite/prod/vc5df62aff689c916c31b2ac1e49a7e8c5ecada1bb13dcdd68aaefb1e1e9b9ec0/firebase/images/favicon.png",description:"Firebase is a platform developed by Google for creating mobile and web applications",url:"https://firebase.google.com/"},vue:{title:"Vue.js",icon:"https://vuejs.org/logo.svg",description:"The Progressive JavaScript Framework",url:"https://vuejs.org/"},laravel:{title:"Laravel",icon:"https://laravel.com/img/favicon/favicon-32x32.png",description:"The PHP Framework For Web Artisans",url:"https://laravel.com/"},directus:{title:"Directus",icon:"https://directus.io/favicon.ico",description:"Open-Source Data Platform",url:"https://directus.io/"},capacitor:{title:"Capacitor",icon:"https://capacitorjs.com/apple-icon-180x180.png",description:"Build cross-platform Native Progressive Web Apps for iOS, Android, and the Web with web technology",url:"https://capacitorjs.com/"},unocss:{title:"UnoCSS",icon:"https://unocss.dev/favicon.svg",description:"UnoCSS is the instant atomic CSS engine, that is designed to be flexible and extensible. The core is un-opinionated and all the CSS utilities are provided via presets.",url:"https://unocss.dev/"},"gh-actions":{title:"GitHub Actions",icon:"https://github.githubassets.com/assets/actions-icon-actions-61925a4b8822.svg",description:"Automate your workflow from idea to production",url:"https://github.com/features/actions"},pwa:{title:"Progressive Web App",icon:"https://raw.githubusercontent.com/webmaxru/progressive-web-apps-logo/master/pwalogo.svg",description:"Progressive Web Apps are user experiences that have the reach of the web, and are reliable, fast, and engaging.",url:"https://web.dev/progressive-web-apps/"},vuetify:{title:"Vuetify",icon:"https://cdn.vuetifyjs.com/docs/images/brand-kit/v-logo.svg",description:"Material Design Component Framework",url:"https://vuetifyjs.com/"},mui:{title:"Material-UI",icon:"https://mui.com/static/favicon.ico",description:"React components for faster and easier web development. Build your own design system, or start with Material Design.",url:"https://mui.com/"},contentful:{title:"Contentful",icon:"https://www.contentful.com/android-chrome-192x192.png",description:"Contentful is a content platform to create, manage and distribute content to any platform.",url:"https://www.contentful.com/"},kotlin:{title:"Kotlin",icon:"https://kotlinlang.org/assets/images/favicon.svg?v2",description:"It's concise, safe, interoperable with Java and other languages, and provides many ways to reuse code between multiple platforms for productive programming.",url:"https://kotlinlang.org/"}},W=Object.keys(V),G=x({title:p(),path:p(),pinned:c(S(),!1),description:c(p()),thumbnail:c(p()),image:c(p()),cover:c(p()),technologies:c(w(E(W)),[]),liveUrl:c(p()),demoUrl:c(p()),repositoryUrl:c(p()),tags:c(w(p()),[])},_());export{G as P,V as T,q as p};

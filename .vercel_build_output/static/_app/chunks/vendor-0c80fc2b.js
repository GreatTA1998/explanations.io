var Tf=Object.defineProperty;var gu=Object.getOwnPropertySymbols;var Sf=Object.prototype.hasOwnProperty,Af=Object.prototype.propertyIsEnumerable;var vu=(t,e,n)=>e in t?Tf(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Xe=(t,e)=>{for(var n in e||(e={}))Sf.call(e,n)&&vu(t,n,e[n]);if(gu)for(var n of gu(e))Af.call(e,n)&&vu(t,n,e[n]);return t};function wt(){}const yu=t=>t;function B(t,e){for(const n in e)t[n]=e[n];return t}function Iu(t){return t()}function Eu(){return Object.create(null)}function we(t){t.forEach(Iu)}function Ne(t){return typeof t=="function"}function ke(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Ds;function lT(t,e){return Ds||(Ds=document.createElement("a")),Ds.href=e,t===Ds.href}function bf(t){return Object.keys(t).length===0}function wf(t,...e){if(t==null)return wt;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function cT(t,e,n){t.$$.on_destroy.push(wf(e,n))}function Qe(t,e,n,i){if(t){const s=_u(t,e,n,i);return t[0](s)}}function _u(t,e,n,i){return t[1]&&i?B(n.ctx.slice(),t[1](i(e))):n.ctx}function Ye(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],a=Math.max(e.dirty.length,s.length);for(let o=0;o<a;o+=1)r[o]=e.dirty[o]|s[o];return r}return e.dirty|s}return e.dirty}function Je(t,e,n,i,s,r){if(s){const a=_u(e,n,i,r);t.p(a,s)}}function Ze(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Me(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ne(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function de(t){return t&&Ne(t.destroy)?t.destroy:wt}const Tu=typeof window!="undefined";let Os=Tu?()=>window.performance.now():()=>Date.now(),no=Tu?t=>requestAnimationFrame(t):wt;const ei=new Set;function Su(t){ei.forEach(e=>{e.c(t)||(ei.delete(e),e.f())}),ei.size!==0&&no(Su)}function io(t){let e;return ei.size===0&&no(Su),{promise:new Promise(n=>{ei.add(e={c:t,f:n})}),abort(){ei.delete(e)}}}let Ls=!1;function Cf(){Ls=!0}function Rf(){Ls=!1}function Df(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Of(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let c=0;c<e.length;c++){const l=e[c];l.claim_order!==void 0&&u.push(l)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let u=0;u<e.length;u++){const c=e[u].claim_order,l=(s>0&&e[n[s]].claim_order<=c?s+1:Df(1,s,d=>e[n[d]].claim_order,c))-1;i[u]=n[l]+1;const h=l+1;n[h]=u,s=Math.max(h,s)}const r=[],a=[];let o=e.length-1;for(let u=n[s]+1;u!=0;u=i[u-1]){for(r.push(e[u-1]);o>=u;o--)a.push(e[o]);o--}for(;o>=0;o--)a.push(e[o]);r.reverse(),a.sort((u,c)=>u.claim_order-c.claim_order);for(let u=0,c=0;u<a.length;u++){for(;c<r.length&&a[u].claim_order>=r[c].claim_order;)c++;const l=c<r.length?r[c]:null;t.insertBefore(a[u],l)}}function Lf(t,e){t.appendChild(e)}function Au(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Nf(t){const e=J("style");return kf(Au(t),e),e}function kf(t,e){Lf(t.head||t,e)}function Ce(t,e){if(Ls){for(Of(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function re(t,e,n){Ls&&!n?Ce(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function D(t){t.parentNode.removeChild(t)}function Mf(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function J(t){return document.createElement(t)}function Pf(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ti(t){return document.createTextNode(t)}function Ht(){return ti(" ")}function Pt(){return ti("")}function et(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ff(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Uf(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function ie(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function le(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:ie(t,i,e[i])}function so(t){return t===""?null:+t}function se(t){return Array.from(t.childNodes)}function Vf(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function bu(t,e,n,i,s=!1){Vf(t);const r=(()=>{for(let a=t.claim_info.last_index;a<t.length;a++){const o=t[a];if(e(o)){const u=n(o);return u===void 0?t.splice(a,1):t[a]=u,s||(t.claim_info.last_index=a),o}}for(let a=t.claim_info.last_index-1;a>=0;a--){const o=t[a];if(e(o)){const u=n(o);return u===void 0?t.splice(a,1):t[a]=u,s?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=a,o}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function wu(t,e,n,i){return bu(t,s=>s.nodeName===e,s=>{const r=[];for(let a=0;a<s.attributes.length;a++){const o=s.attributes[a];n[o.name]||r.push(o.name)}r.forEach(a=>s.removeAttribute(a))},()=>i(e))}function ee(t,e,n){return wu(t,e,n,J)}function hT(t,e,n){return wu(t,e,n,Pf)}function Ns(t,e){return bu(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>ti(e),!0)}function xt(t){return Ns(t," ")}function ro(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ni(t,e){t.value=e==null?"":e}function dT(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}function fT(t,e,n){t.classList[n?"add":"remove"](e)}function Bf(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function mT(t,e=document.body){return Array.from(e.querySelectorAll(t))}const oo=new Set;let ks=0;function Hf(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ao(t,e,n,i,s,r,a,o=0){const u=16.666/i;let c=`{
`;for(let g=0;g<=1;g+=u){const v=e+(n-e)*r(g);c+=g*100+`%{${a(v,1-v)}}
`}const l=c+`100% {${a(n,1-n)}}
}`,h=`__svelte_${Hf(l)}_${o}`,d=Au(t);oo.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=Nf(t).sheet),m=d.__svelte_rules||(d.__svelte_rules={});m[h]||(m[h]=!0,f.insertRule(`@keyframes ${h} ${l}`,f.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${h} ${i}ms linear ${s}ms 1 both`,ks+=1,h}function Cu(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),ks-=s,ks||xf())}function xf(){no(()=>{ks||(oo.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),oo.clear())})}function pT(t,e,n,i){if(!e)return wt;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return wt;const{delay:r=0,duration:a=300,easing:o=yu,start:u=Os()+r,end:c=u+a,tick:l=wt,css:h}=n(t,{from:e,to:s},i);let d=!0,f=!1,m;function y(){h&&(m=ao(t,0,1,a,r,o,h)),r||(f=!0)}function g(){h&&Cu(t,m),d=!1}return io(v=>{if(!f&&v>=u&&(f=!0),f&&v>=c&&(l(1,0),g()),!d)return!1;if(f){const I=v-u,_=0+1*o(I/a);l(_,1-_)}return!0}),y(),l(0,1),g}function gT(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,jf(t,s)}}function jf(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let Ms;function Ps(t){Ms=t}function be(){if(!Ms)throw new Error("Function called outside component initialization");return Ms}function ii(t){be().$$.on_mount.push(t)}function vT(t){be().$$.after_update.push(t)}function si(t){be().$$.on_destroy.push(t)}function tt(t,e){be().$$.context.set(t,e)}function Ct(t){return be().$$.context.get(t)}function Pn(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const ki=[],fe=[],Fs=[],uo=[],zf=Promise.resolve();let lo=!1;function Gf(){lo||(lo=!0,zf.then(Ru))}function Us(t){Fs.push(t)}function qf(t){uo.push(t)}let co=!1;const ho=new Set;function Ru(){if(!co){co=!0;do{for(let t=0;t<ki.length;t+=1){const e=ki[t];Ps(e),Wf(e.$$)}for(Ps(null),ki.length=0;fe.length;)fe.pop()();for(let t=0;t<Fs.length;t+=1){const e=Fs[t];ho.has(e)||(ho.add(e),e())}Fs.length=0}while(ki.length);for(;uo.length;)uo.pop()();lo=!1,co=!1,ho.clear()}}function Wf(t){if(t.fragment!==null){t.update(),we(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Us)}}let Mi;function Kf(){return Mi||(Mi=Promise.resolve(),Mi.then(()=>{Mi=null})),Mi}function fo(t,e,n){t.dispatchEvent(Bf(`${e?"intro":"outro"}${n}`))}const Vs=new Set;let tn;function Bs(){tn={r:0,c:[],p:tn}}function Hs(){tn.r||we(tn.c),tn=tn.p}function ge(t,e){t&&t.i&&(Vs.delete(t),t.i(e))}function ye(t,e,n,i){if(t&&t.o){if(Vs.has(t))return;Vs.add(t),tn.c.push(()=>{Vs.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const Xf={duration:0};function yT(t,e,n,i){let s=e(t,n),r=i?0:1,a=null,o=null,u=null;function c(){u&&Cu(t,u)}function l(d,f){const m=d.b-r;return f*=Math.abs(m),{a:r,b:d.b,d:m,duration:f,start:d.start,end:d.start+f,group:d.group}}function h(d){const{delay:f=0,duration:m=300,easing:y=yu,tick:g=wt,css:v}=s||Xf,I={start:Os()+f,b:d};d||(I.group=tn,tn.r+=1),a||o?o=I:(v&&(c(),u=ao(t,r,d,m,f,y,v)),d&&g(0,1),a=l(I,m),Us(()=>fo(t,d,"start")),io(_=>{if(o&&_>o.start&&(a=l(o,m),o=null,fo(t,a.b,"start"),v&&(c(),u=ao(t,r,a.b,a.duration,0,y,s.css))),a){if(_>=a.end)g(r=a.b,1-r),fo(t,a.b,"end"),o||(a.b?c():--a.group.r||we(a.group.c)),a=null;else if(_>=a.start){const M=_-a.start;r=a.a+a.d*y(M/a.duration),g(r,1-r)}}return!!(a||o)}))}return{run(d){Ne(s)?Kf().then(()=>{s=s(),h(d)}):h(d)},end(){c(),a=o=null}}}const Qf=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Yf(t,e){ye(t,1,1,()=>{e.delete(t.key)})}function IT(t,e){t.f(),Yf(t,e)}function ET(t,e,n,i,s,r,a,o,u,c,l,h){let d=t.length,f=r.length,m=d;const y={};for(;m--;)y[t[m].key]=m;const g=[],v=new Map,I=new Map;for(m=f;m--;){const b=h(s,r,m),N=n(b);let w=a.get(N);w?i&&w.p(b,e):(w=c(N,b),w.c()),v.set(N,g[m]=w),N in y&&I.set(N,Math.abs(m-y[N]))}const _=new Set,M=new Set;function x(b){ge(b,1),b.m(o,l),a.set(b.key,b),l=b.first,f--}for(;d&&f;){const b=g[f-1],N=t[d-1],w=b.key,R=N.key;b===N?(l=b.first,d--,f--):v.has(R)?!a.has(w)||_.has(w)?x(b):M.has(R)?d--:I.get(w)>I.get(R)?(M.add(w),x(b)):(_.add(R),d--):(u(N,a),d--)}for(;d--;){const b=t[d];v.has(b.key)||u(b,a)}for(;f;)x(g[f-1]);return g}function Oe(t,e){const n={},i={},s={$$scope:1};let r=t.length;for(;r--;){const a=t[r],o=e[r];if(o){for(const u in a)u in o||(i[u]=1);for(const u in o)s[u]||(n[u]=o[u],s[u]=1);t[r]=o}else for(const u in a)s[u]=1}for(const a in i)a in n||(n[a]=void 0);return n}function vt(t){return typeof t=="object"&&t!==null?t:{}}function Jf(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function nn(t){t&&t.c()}function Pi(t,e){t&&t.l(e)}function Kt(t,e,n,i){const{fragment:s,on_mount:r,on_destroy:a,after_update:o}=t.$$;s&&s.m(e,n),i||Us(()=>{const u=r.map(Iu).filter(Ne);a?a.push(...u):we(u),t.$$.on_mount=[]}),o.forEach(Us)}function Xt(t,e){const n=t.$$;n.fragment!==null&&(we(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Zf(t,e){t.$$.dirty[0]===-1&&(ki.push(t),Gf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ue(t,e,n,i,s,r,a,o=[-1]){const u=Ms;Ps(t);const c=t.$$={fragment:null,ctx:null,props:r,update:wt,not_equal:s,bound:Eu(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:Eu(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};a&&a(c.root);let l=!1;if(c.ctx=n?n(t,e.props||{},(h,d,...f)=>{const m=f.length?f[0]:d;return c.ctx&&s(c.ctx[h],c.ctx[h]=m)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](m),l&&Zf(t,h)),d}):[],c.update(),l=!0,we(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){Cf();const h=se(e.target);c.fragment&&c.fragment.l(h),h.forEach(D)}else c.fragment&&c.fragment.c();e.intro&&ge(t.$$.fragment),Kt(t,e.target,e.anchor,e.customElement),Rf(),Ru()}Ps(u)}class Ve{$destroy(){Xt(this,1),this.$destroy=wt}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!bf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ri=[];function $f(t,e=wt){let n;const i=new Set;function s(o){if(ke(t,o)&&(t=o,n)){const u=!ri.length;for(const c of i)c[1](),ri.push(c,t);if(u){for(let c=0;c<ri.length;c+=2)ri[c][0](ri[c+1]);ri.length=0}}}function r(o){s(o(t))}function a(o,u=wt){const c=[o,u];return i.add(c),i.size===1&&(n=e(s)||wt),o(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:s,update:r,subscribe:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)==55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)==56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},tm=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],a=t[n++],o=t[n++],u=((s&7)<<18|(r&63)<<12|(a&63)<<6|o&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{const r=t[n++],a=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|a&63)}}return e.join("")},nm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],a=s+1<t.length,o=a?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,l=r>>2,h=(r&3)<<4|o>>4;let d=(o&15)<<2|c>>6,f=c&63;u||(f=64,a||(d=64)),i.push(n[l],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(em(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],o=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||o==null||c==null||h==null)throw Error();const d=r<<2|o>>4;if(i.push(d),c!==64){const f=o<<4&240|c>>2;if(i.push(f),h!==64){const m=c<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},im=function(t){try{return nm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Du(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function Ou(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rm(){return nt().indexOf("Electron/")>=0}function Nu(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function om(){return nt().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="FirebaseError";class oi extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=am,Object.setPrototypeOf(this,oi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fi.prototype.create)}}class Fi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],a=r?um(r,i):"Error",o=`${this.serviceName}: ${a} (${s}).`;return new oi(s,o,i)}}function um(t,e){return t.replace(lm,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const lm=/\{\$([^}]+)}/g;function cm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xs(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],a=e[s];if(ku(r)&&ku(a)){if(!xs(r,a))return!1}else if(r!==a)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function ku(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function hm(t,e){const n=new dm(t,e);return n.subscribe.bind(n)}class dm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");fm(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=mo),s.error===void 0&&(s.error=mo),s.complete===void 0&&(s.complete=mo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){return t&&t._delegate?t._delegate:t}class ai{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new sm;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gm(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);i===o&&a.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&e(a,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:pm(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pm(t){return t===Un?void 0:t}function gm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const ym={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},Im=pe.INFO,Em={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},_m=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Em[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class po{constructor(e){this.name=e,this._logLevel=Im,this._logHandler=_m,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ym[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sm(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Sm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const go="@firebase/app",Mu="0.7.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new po("@firebase/app"),Am="@firebase/app-compat",bm="@firebase/analytics-compat",wm="@firebase/analytics",Cm="@firebase/app-check-compat",Rm="@firebase/app-check",Dm="@firebase/auth",Om="@firebase/auth-compat",Lm="@firebase/database",Nm="@firebase/database-compat",km="@firebase/functions",Mm="@firebase/functions-compat",Pm="@firebase/installations",Fm="@firebase/installations-compat",Um="@firebase/messaging",Vm="@firebase/messaging-compat",Bm="@firebase/performance",Hm="@firebase/performance-compat",xm="@firebase/remote-config",jm="@firebase/remote-config-compat",zm="@firebase/storage",Gm="@firebase/storage-compat",qm="@firebase/firestore",Wm="@firebase/firestore-compat",Km="firebase",Xm="9.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="[DEFAULT]",Qm={[go]:"fire-core",[Am]:"fire-core-compat",[wm]:"fire-analytics",[bm]:"fire-analytics-compat",[Rm]:"fire-app-check",[Cm]:"fire-app-check-compat",[Dm]:"fire-auth",[Om]:"fire-auth-compat",[Lm]:"fire-rtdb",[Nm]:"fire-rtdb-compat",[km]:"fire-fn",[Mm]:"fire-fn-compat",[Pm]:"fire-iid",[Fm]:"fire-iid-compat",[Um]:"fire-fcm",[Vm]:"fire-fcm-compat",[Bm]:"fire-perf",[Hm]:"fire-perf-compat",[xm]:"fire-rc",[jm]:"fire-rc-compat",[zm]:"fire-gcs",[Gm]:"fire-gcs-compat",[qm]:"fire-fst",[Wm]:"fire-fst-compat","fire-js":"fire-js",[Km]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new Map,yo=new Map;function Ym(t,e){try{t.container.addComponent(e)}catch(n){vo.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vi(t){const e=t.name;if(yo.has(e))return vo.debug(`There were multiple attempts to register component ${e}.`),!1;yo.set(e,t);for(const n of js.values())Ym(n,t);return!0}function Io(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},zs=new Fi("app","Firebase",Jm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ai("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=Xm;function _T(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Pu,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw zs.create("bad-app-name",{appName:String(i)});const s=js.get(i);if(s){if(xs(t,s.options)&&xs(n,s.config))return s;throw zs.create("duplicate-app",{appName:i})}const r=new vm(i);for(const o of yo.values())r.addComponent(o);const a=new Zm(t,n,r);return js.set(i,a),a}function Fu(t=Pu){const e=js.get(t);if(!e)throw zs.create("no-app",{appName:t});return e}function mn(t,e,n){var i;let s=(i=Qm[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vo.warn(o.join(" "));return}Vi(new ai(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t){Vi(new ai("platform-logger",e=>new Tm(e),"PRIVATE")),mn(go,Mu,t),mn(go,Mu,"esm2017"),mn("fire-js","")}$m("");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Eo=function(t,e){return Eo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])},Eo(t,e)};function Vn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Eo(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var yt=function(){return yt=Object.assign||function(e){for(var n,i=1,s=arguments.length;i<s;i++){n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yt.apply(this,arguments)};function _o(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Hi(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Uu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ep=Uu,Vu=new Fi("auth","Firebase",Uu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new po("@firebase/auth");function Gs(t,...e){Bu.logLevel<=pe.ERROR&&Bu.error(`Auth (${Bi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,...e){throw To(t,...e)}function Yt(t,...e){return To(t,...e)}function Hu(t,e,n){const i=Object.assign(Object.assign({},ep()),{[e]:n});return new Fi("auth","Firebase",i).create(e,{appName:t.name})}function tp(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Qt(t,"argument-error"),Hu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function To(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Vu.create(t,...e)}function Z(t,e,...n){if(!t)throw To(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gs(e),new Error(e)}function rn(t,e){t||sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=new Map;function on(t){rn(t instanceof Function,"Expected a class definition");let e=xu.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xu.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t,e){const n=Io(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(xs(r,e!=null?e:{}))return s;Qt(s,"already-initialized")}return n.initialize({options:e})}function ip(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(on);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sp(){return ju()==="http:"||ju()==="https:"}function ju(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sp()||Ou()||"connection"in navigator)?navigator.onLine:!0}function op(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=Du()||Lu()}get(){return rp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=new xi(3e4,6e4);function lp(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qs(t,e,n,i,s={}){return zu(t,s,()=>{let r={},a={};i&&(e==="GET"?a=i:r={body:JSON.stringify(i)});const o=Ui(Object.assign({key:t.config.apiKey},a)).slice(1),u=new(bo.headers());return u.set("Content-Type","application/json"),u.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&u.set("X-Firebase-Locale",t.languageCode),bo.fetch()(Gu(t,t.config.apiHost,n,o),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},r))})}async function zu(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},ap),e);try{const s=new hp(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw wo(t,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const o=r.ok?a.errorMessage:a.error.message,[u,c]=o.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw wo(t,"email-already-in-use",a);const l=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Hu(t,l,c);Qt(t,l)}}catch(s){if(s instanceof oi)throw s;Qt(t,"network-request-failed")}}async function cp(t,e,n,i,s={}){const r=await qs(t,e,n,i,s);return"mfaPendingCredential"in r&&Qt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Gu(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Ao(t.config,s):`${t.config.apiScheme}://${s}`}class hp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Yt(this.auth,"timeout")),up.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wo(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Yt(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dp(t,e){return qs(t,"POST","/v1/accounts:delete",e)}async function fp(t,e){return qs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mp(t,e=!1){const n=Fn(t),i=await n.getIdToken(e),s=Ro(i);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:ji(Co(s.auth_time)),issuedAtTime:ji(Co(s.iat)),expirationTime:ji(Co(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Co(t){return Number(t)*1e3}function Ro(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Gs("JWT malformed, contained fewer than 3 sections"),null;try{const s=im(n);return s?JSON.parse(s):(Gs("Failed to decode base64 JWT payload"),null)}catch(s){return Gs("Caught error parsing JWT payload as JSON",s),null}}function pp(t){const e=Ro(t);return Z(e,"internal-error"),Z(typeof e.exp!="undefined","internal-error"),Z(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof oi&&gp(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function gp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ji(this.lastLoginAt),this.creationTime=ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t){var e;const n=t.auth,i=await t.getIdToken(),s=await zi(t,fp(n,{idToken:i}));Z(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const a=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?Ep(r.providerUserInfo):[],o=Ip(t.providerData,a),u=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(o==null?void 0:o.length),l=u?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new qu(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function yp(t){const e=Fn(t);await Ws(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ip(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Ep(t){return t.map(e=>{var{providerId:n}=e,i=_o(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(t,e){const n=await zu(t,{},()=>{const i=Ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,a=Gu(t,s,"/v1/token",`key=${r}`);return bo.fetch()(a,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken!="undefined","internal-error"),Z(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):pp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await _p(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,a=new Gi;return i&&(Z(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(Z(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),r&&(Z(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gi,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,e){Z(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Bn{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=_o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new vp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new qu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await zi(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mp(this,e)}reload(){return yp(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ws(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zi(this,dp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,a,o,u,c,l;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(a=n.photoURL)!==null&&a!==void 0?a:void 0,y=(o=n.tenantId)!==null&&o!==void 0?o:void 0,g=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,I=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:_,emailVerified:M,isAnonymous:x,providerData:b,stsTokenManager:N}=n;Z(_&&N,e,"internal-error");const w=Gi.fromJSON(this.name,N);Z(typeof _=="string",e,"internal-error"),pn(h,e.name),pn(d,e.name),Z(typeof M=="boolean",e,"internal-error"),Z(typeof x=="boolean",e,"internal-error"),pn(f,e.name),pn(m,e.name),pn(y,e.name),pn(g,e.name),pn(v,e.name),pn(I,e.name);const R=new Bn({uid:_,auth:e,email:d,emailVerified:M,displayName:h,isAnonymous:x,photoURL:m,phoneNumber:f,tenantId:y,stsTokenManager:w,createdAt:v,lastLoginAt:I});return b&&Array.isArray(b)&&(R.providerData=b.map(P=>Object.assign({},P))),g&&(R._redirectEventId=g),R}static async _fromIdTokenResponse(e,n,i=!1){const s=new Gi;s.updateFromServerResponse(n);const r=new Bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ws(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wu.type="NONE";const Ku=Wu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t,e,n){return`firebase:${t}:${e}:${n}`}class ui{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Ks(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ks("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ui(on(Ku),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||on(Ku);const a=Ks(i,e.config.apiKey,e.name);let o=null;for(const c of n)try{const l=await c._get(a);if(l){const h=Bn._fromJSON(e,l);c!==r&&(o=h),r=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new ui(r,e,i):(r=u[0],o&&await r._set(a,o.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(a)}catch{}})),new ui(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ju(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($u(e))return"Blackberry";if(el(e))return"Webos";if(Do(e))return"Safari";if((e.includes("chrome/")||Yu(e))&&!e.includes("edge/"))return"Chrome";if(Zu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Qu(t=nt()){return/firefox\//i.test(t)}function Do(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yu(t=nt()){return/crios\//i.test(t)}function Ju(t=nt()){return/iemobile/i.test(t)}function Zu(t=nt()){return/android/i.test(t)}function $u(t=nt()){return/blackberry/i.test(t)}function el(t=nt()){return/webos/i.test(t)}function Xs(t=nt()){return/iphone|ipad|ipod/i.test(t)}function Tp(t=nt()){var e;return Xs(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function Sp(){return Nu()&&document.documentMode===10}function tl(t=nt()){return Xs(t)||Zu(t)||el(t)||$u(t)||/windows phone/i.test(t)||Ju(t)}function Ap(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t,e=[]){let n;switch(t){case"Browser":n=Xu(nt());break;case"Worker":n=`${Xu(nt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bi}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new il(this),this.idTokenSubscription=new il(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=on(n)),this._initializationPromise=this.queue(async()=>{var i,s;this._deleted||(this.persistenceManager=await ui.create(this,e),!this._deleted&&(((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===r)&&(a==null?void 0:a.user)&&(i=a.user)}return i?i._redirectEventId?(Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ws(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=op()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Fn(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&on(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[on(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return Z(a,this,"internal-error"),a.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Oo(t){return Fn(t)}class il{constructor(e){this.auth=e,this.observer=null,this.addObserver=hm(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e){return cp(t,"POST","/v1/accounts:signInWithIdp",lp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="http://localhost";class Hn extends sl{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=_o(n,["providerId","signInMethod"]);if(!i||!s)return null;const a=new Hn(i,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return li(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,li(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,li(e,n)}buildRequest(){const e={requestUri:wp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ui(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends Lo{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends qi{constructor(){super("facebook.com")}static credential(e){return Hn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends qi{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Hn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return vn.credential(n,i)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends qi{constructor(){super("github.com")}static credential(e){return Hn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends qi{constructor(){super("twitter.com")}static credential(e,n){return Hn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return In.credential(n,i)}catch{return null}}}In.TWITTER_SIGN_IN_METHOD="twitter.com";In.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Bn._fromIdTokenResponse(e,i,s),a=rl(i);return new ci({user:r,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=rl(i);return new ci({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function rl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends oi{constructor(e,n,i,s){var r;super(n.code,n.message);this.operationType=i,this.user=s,Object.setPrototypeOf(this,Qs.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Qs(e,n,i,s)}}function ol(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Qs._fromErrorAndOperation(t,r,e,i):r})}async function Cp(t,e,n=!1){const i=await zi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ci._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await zi(t,ol(i,s,e,t),n);Z(r.idToken,i,"internal-error");const a=Ro(r.idToken);Z(a,i,"internal-error");const{sub:o}=a;return Z(t.uid===o,i,"user-mismatch"),ci._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Qt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dp(t,e,n=!1){const i="signIn",s=await ol(t,i,e),r=await ci._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function TT(t,e,n,i){return Fn(t).onAuthStateChanged(e,n,i)}const Ys="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ys,"1"),this.storage.removeItem(Ys),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(){const t=nt();return Do(t)||Xs(t)}const Lp=1e3,Np=10;class ul extends al{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Op()&&Ap(),this.fallbackToPolling=tl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,o,u)=>{this.notifyListeners(a,u)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(i);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},r=this.storage.getItem(i);Sp()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Np):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Lp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ul.type="LOCAL";const kp=ul;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends al{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ll.type="SESSION";const cl=ll;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Js(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,a=this.handlersMap[s];if(!(a==null?void 0:a.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const o=Array.from(a).map(async c=>c(n.origin,r)),u=await Mp(o);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Js.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((o,u)=>{const c=No("",20);s.port1.start();const l=setTimeout(()=>{u(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(d.data.response);break;default:clearTimeout(l),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return window}function Fp(t){Jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(){return typeof Jt().WorkerGlobalScope!="undefined"&&typeof Jt().importScripts=="function"}async function Up(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Bp(){return hl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="firebaseLocalStorageDb",Hp=1,Zs="firebaseLocalStorage",fl="fbase_key";class Wi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $s(t,e){return t.transaction([Zs],e?"readwrite":"readonly").objectStore(Zs)}function xp(){const t=indexedDB.deleteDatabase(dl);return new Wi(t).toPromise()}function ko(){const t=indexedDB.open(dl,Hp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Zs,{keyPath:fl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Zs)?e(i):(i.close(),await xp(),e(await ko()))})})}async function ml(t,e,n){const i=$s(t,!0).put({[fl]:e,value:n});return new Wi(i).toPromise()}async function jp(t,e){const n=$s(t,!1).get(e),i=await new Wi(n).toPromise();return i===void 0?null:i.value}function pl(t,e){const n=$s(t,!0).delete(e);return new Wi(n).toPromise()}const zp=800,Gp=3;class gl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ko(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Gp)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Js._getInstance(Bp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Up(),!this.activeServiceWorker)return;this.sender=new Pp(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ko();return await ml(e,Ys,"1"),await pl(e,Ys),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>ml(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>jp(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=$s(s,!1).getAll();return new Wi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gl.type="LOCAL";const qp=gl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Kp(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Yt("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",Wp().appendChild(i)})}function Xp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new xi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(t,e){return e?on(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends sl{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Qp(t){return Dp(t.auth,new Mo(t),t.bypassAuthState)}function Yp(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),Rp(n,new Mo(t),t.bypassAuthState)}async function Jp(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),Cp(n,new Mo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:a,type:o}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qp;case"linkViaPopup":case"linkViaRedirect":return Jp;case"reauthViaPopup":case"reauthViaRedirect":return Yp;default:Qt(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=new xi(2e3,1e4);async function ST(t,e,n){const i=Oo(t);tp(t,e,Lo);const s=vl(i,n);return new xn(i,"signInViaPopup",e,s).executeNotNull()}class xn extends yl{constructor(e,n,i,s,r){super(e,n,s,r);this.provider=i,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=No();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Zp.get())};e()}}xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="pendingRedirect",Po=new Map;class eg extends yl{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=Po.get(this.auth._key());if(!e){try{const i=await tg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Po.set(this.auth._key(),e)}return this.bypassAuthState||Po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tg(t,e){const n=ig(e),i=ng(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function ng(t){return on(t._redirectPersistence)}function ig(t){return Ks($p,t.config.apiKey,t.name)}async function sg(t,e,n=!1){const i=Oo(t),s=vl(i,e),a=await new eg(i,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=10*60*1e3;class og{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ag(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!El(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Yt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Il(e))}saveEventToCache(e){this.cachedEventUids.add(Il(e)),this.lastProcessedEventTime=Date.now()}}function Il(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function El({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ag(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return El(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ug(t,e={}){return qs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cg=/^https?/;async function hg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ug(t);for(const n of e)try{if(dg(n))return}catch{}Qt(t,"unauthorized-domain")}function dg(t){const e=So(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!cg.test(n))return!1;if(lg.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=new xi(3e4,6e4);function _l(){const t=Jt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mg(t){return new Promise((e,n)=>{var i,s,r;function a(){_l(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_l(),n(Yt(t,"network-request-failed"))},timeout:fg.get()})}if((s=(i=Jt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((r=Jt().gapi)===null||r===void 0?void 0:r.load)a();else{const o=Xp("iframefcb");return Jt()[o]=()=>{gapi.load?a():n(Yt(t,"network-request-failed"))},Kp(`https://apis.google.com/js/api.js?onload=${o}`)}}).catch(e=>{throw er=null,e})}let er=null;function pg(t){return er=er||mg(t),er}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=new xi(5e3,15e3),vg="__/auth/iframe",yg="emulator/auth/iframe",Ig={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Eg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _g(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ao(e,yg):`https://${t.config.authDomain}/${vg}`,i={apiKey:e.apiKey,appName:t.name,v:Bi},s=Eg.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Ui(i).slice(1)}`}async function Tg(t){const e=await pg(t),n=Jt().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:_g(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ig,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const a=Yt(t,"network-request-failed"),o=Jt().setTimeout(()=>{r(a)},gg.get());function u(){Jt().clearTimeout(o),s(i)}i.ping(u).then(u,()=>{r(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ag=500,bg=600,wg="_blank",Cg="http://localhost";class Tl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rg(t,e,n,i=Ag,s=bg){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const u=Object.assign(Object.assign({},Sg),{width:i.toString(),height:s.toString(),top:r,left:a}),c=nt().toLowerCase();n&&(o=Yu(c)?wg:n),Qu(c)&&(e=e||Cg,u.scrollbars="yes");const l=Object.entries(u).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(Tp(c)&&o!=="_self")return Dg(e||"",o),new Tl(null);const h=window.open(e||"",o,l);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new Tl(h)}function Dg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="__/auth/handler",Lg="emulator/auth/handler";function Sl(t,e,n,i,s,r){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Bi,eventId:s};if(e instanceof Lo){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",cm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,c]of Object.entries(r||{}))a[u]=c}if(e instanceof qi){const u=e.getScopes().filter(c=>c!=="");u.length>0&&(a.scopes=u.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const u of Object.keys(o))o[u]===void 0&&delete o[u];return`${Ng(t)}?${Ui(o).slice(1)}`}function Ng({config:t}){return t.emulator?Ao(t,Lg):`https://${t.authDomain}/${Og}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="webStorageSupport";class kg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cl,this._completeRedirectFn=sg}async _openPopup(e,n,i,s){var r;rn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=Sl(e,n,i,So(),s);return Rg(e,a,No())}async _openRedirect(e,n,i,s){return await this._originValidation(e),Fp(Sl(e,n,i,So(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(rn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i}async initAndGetManager(e){const n=await Tg(e),i=new og(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fo,{type:Fo},s=>{var r;const a=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Fo];a!==void 0&&n(!!a),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tl()||Do()||Xs()}}const Mg=kg;var Al="@firebase/auth",bl="0.19.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ug(t){Vi(new ai("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:r}=i.options;return(a=>{Z(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),Z(!(r==null?void 0:r.includes(":")),"argument-error",{appName:a.name});const o={apiKey:s,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nl(t)},u=new bp(a,o);return ip(u,n),u})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Vi(new ai("auth-internal",e=>{const n=Oo(e.getProvider("auth").getImmediate());return(i=>new Pg(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(Al,bl,Fg(t)),mn(Al,bl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(t=Fu()){const e=Io(t,"auth");return e.isInitialized()?e.getImmediate():np(t,{popupRedirectResolver:Mg,persistence:[qp,kp,cl]})}Ug("Browser");function ve(t){return Object.entries(t).filter(([e,n])=>e!==""&&n).map(([e])=>e).join(" ")}function it(t,e,n,i={bubbles:!0},s=!1){if(typeof Event!="undefined"&&t){const r=new CustomEvent(e,Object.assign(Object.assign({},i),{detail:n}));if(t==null||t.dispatchEvent(r),s&&e.startsWith("SMUI")){const a=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},i),{detail:n}));t==null||t.dispatchEvent(a),a.defaultPrevented&&r.preventDefault()}return r}}function wl(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let s=0;s<n.length;s++){const r=n[s],a=r.indexOf("$");a!==-1&&e.indexOf(r.substring(0,a+1))!==-1||e.indexOf(r)===-1&&(i[r]=t[r])}return i}const Cl=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,Vg=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function Be(t){let e,n=[];t.$on=(s,r)=>{let a=s,o=()=>{};return e?o=e(a,r):n.push([a,r]),a.match(Cl)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',a),(...c)=>{o()}};function i(s){Pn(t,s)}return s=>{const r=[],a={};e=(o,u)=>{let c=o,l=u,h=!1;const d=c.match(Cl),f=c.match(Vg),m=d||f;if(c.match(/^SMUI:\w+:/)){const v=c.split(":");let I="";for(let _=0;_<v.length;_++)I+=_===v.length-1?":"+v[_]:v[_].split("-").map(M=>M.slice(0,1).toUpperCase()+M.slice(1)).join("");console.warn(`The event ${c.split("$")[0]} has been renamed to ${I.split("$")[0]}.`),c=I}if(m){const v=c.split(d?":":"$");c=v[0];const I=Object.fromEntries(v.slice(1).map(_=>[_,!0]));I.passive&&(h=h||{},h.passive=!0),I.nonpassive&&(h=h||{},h.passive=!1),I.capture&&(h=h||{},h.capture=!0),I.once&&(h=h||{},h.once=!0),I.preventDefault&&(l=Ff(l)),I.stopPropagation&&(l=Uf(l))}const y=et(s,c,l,h),g=()=>{y();const v=r.indexOf(g);v>-1&&r.splice(v,1)};return r.push(g),c in a||(a[c]=et(s,c,i)),g};for(let o=0;o<n.length;o++)e(n[o][0],n[o][1]);return{destroy:()=>{for(let o=0;o<r.length;o++)r[o]();for(let o of Object.entries(a))o[1]()}}}}function hi(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let s=0;s<n.length;s++){const r=n[s];r.substring(0,e.length)===e&&(i[r.substring(e.length)]=t[r])}return i}function It(t,e){let n=[];if(e)for(let i=0;i<e.length;i++){const s=e[i],r=Array.isArray(s)?s[0]:s;Array.isArray(s)&&s.length>1?n.push(r(t,s[1])):n.push(r(t))}return{update(i){if((i&&i.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(i)for(let s=0;s<i.length;s++){const r=n[s];if(r&&r.update){const a=i[s];Array.isArray(a)&&a.length>1?r.update(a[1]):r.update()}}},destroy(){for(let i=0;i<n.length;i++){const s=n[i];s&&s.destroy&&s.destroy()}}}}var tr;function Bg(t,e){e===void 0&&(e=!1);var n=t.CSS,i=tr;if(typeof tr=="boolean"&&!e)return tr;var s=n&&typeof n.supports=="function";if(!s)return!1;var r=n.supports("--css-vars","yes"),a=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=r||a,e||(tr=i),i}function Hg(t,e,n){if(!t)return{x:0,y:0};var i=e.x,s=e.y,r=i+n.left,a=s+n.top,o,u;if(t.type==="touchstart"){var c=t;o=c.changedTouches[0].pageX-r,u=c.changedTouches[0].pageY-a}else{var l=t;o=l.pageX-r,u=l.pageY-a}return{x:o,y:u}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var di=function(){function t(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function xg(t){return t===void 0&&(t=window),jg(t)?{passive:!0}:!1}function jg(t){t===void 0&&(t=window);var e=!1;try{var n={get passive(){return e=!0,!1}},i=function(){};t.document.addEventListener("test",i,n),t.document.removeEventListener("test",i,n)}catch{e=!1}return e}var zg=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",applyPassive:xg});/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Gg(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(Rl(n,e))return n;n=n.parentElement}return null}function Rl(t,e){var n=t.matches||t.webkitMatchesSelector||t.msMatchesSelector;return n.call(t,e)}function qg(t){var e=t;if(e.offsetParent!==null)return e.scrollWidth;var n=e.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var i=n.scrollWidth;return document.documentElement.removeChild(n),i}var Uo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",closest:Gg,matches:Rl,estimateScrollWidth:qg});/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Wg={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Kg={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Dl={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ol=["touchstart","pointerdown","mousedown","keydown"],Ll=["touchend","pointerup","mouseup","contextmenu"],nr=[],Xg=function(t){Vn(e,t);function e(n){var i=t.call(this,yt(yt({},e.defaultAdapter),n))||this;return i.activationAnimationHasEnded=!1,i.activationTimer=0,i.fgDeactivationRemovalTimer=0,i.fgScale="0",i.frame={width:0,height:0},i.initialSize=0,i.layoutFrame=0,i.maxRadius=0,i.unboundedCoords={left:0,top:0},i.activationState=i.defaultActivationState(),i.activationTimerCallback=function(){i.activationAnimationHasEnded=!0,i.runDeactivationUXLogicIfReady()},i.activateHandler=function(s){i.activateImpl(s)},i.deactivateHandler=function(){i.deactivateImpl()},i.focusHandler=function(){i.handleFocus()},i.blurHandler=function(){i.handleBlur()},i.resizeHandler=function(){i.layout()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return Wg},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Kg},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Dl},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var s=e.cssClasses,r=s.ROOT,a=s.UNBOUNDED;requestAnimationFrame(function(){n.adapter.addClass(r),n.adapter.isUnbounded()&&(n.adapter.addClass(a),n.layoutInternal())})}},e.prototype.destroy=function(){var n=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,s=i.ROOT,r=i.UNBOUNDED;requestAnimationFrame(function(){n.adapter.removeClass(s),n.adapter.removeClass(r),n.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(n){this.activateImpl(n)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var n=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){n.layoutInternal(),n.layoutFrame=0})},e.prototype.setUnbounded=function(n){var i=e.cssClasses.UNBOUNDED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var n=this;requestAnimationFrame(function(){return n.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var n=this;requestAnimationFrame(function(){return n.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(n){var i,s;if(n){try{for(var r=Hi(Ol),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.registerInteractionHandler(o,this.activateHandler)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(s=r.return)&&s.call(r)}finally{if(i)throw i.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(n){var i,s;if(n.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=Hi(Ll),a=r.next();!a.done;a=r.next()){var o=a.value;this.adapter.registerDocumentInteractionHandler(o,this.deactivateHandler)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(s=r.return)&&s.call(r)}finally{if(i)throw i.error}}},e.prototype.deregisterRootHandlers=function(){var n,i;try{for(var s=Hi(Ol),r=s.next();!r.done;r=s.next()){var a=r.value;this.adapter.deregisterInteractionHandler(a,this.activateHandler)}}catch(o){n={error:o}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var n,i;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var s=Hi(Ll),r=s.next();!r.done;r=s.next()){var a=r.value;this.adapter.deregisterDocumentInteractionHandler(a,this.deactivateHandler)}}catch(o){n={error:o}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},e.prototype.removeCssVars=function(){var n=this,i=e.strings,s=Object.keys(i);s.forEach(function(r){r.indexOf("VAR_")===0&&n.adapter.updateCssVariable(i[r],null)})},e.prototype.activateImpl=function(n){var i=this;if(!this.adapter.isSurfaceDisabled()){var s=this.activationState;if(!s.isActivated){var r=this.previousActivationEvent,a=r&&n!==void 0&&r.type!==n.type;if(!a){s.isActivated=!0,s.isProgrammatic=n===void 0,s.activationEvent=n,s.wasActivatedByPointer=s.isProgrammatic?!1:n!==void 0&&(n.type==="mousedown"||n.type==="touchstart"||n.type==="pointerdown");var o=n!==void 0&&nr.length>0&&nr.some(function(u){return i.adapter.containsEventTarget(u)});if(o){this.resetActivationState();return}n!==void 0&&(nr.push(n.target),this.registerDeactivationHandlers(n)),s.wasElementMadeActive=this.checkElementMadeActive(n),s.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){nr=[],!s.wasElementMadeActive&&n!==void 0&&(n.key===" "||n.keyCode===32)&&(s.wasElementMadeActive=i.checkElementMadeActive(n),s.wasElementMadeActive&&i.animateActivation()),s.wasElementMadeActive||(i.activationState=i.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(n){return n!==void 0&&n.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var n=this,i=e.strings,s=i.VAR_FG_TRANSLATE_START,r=i.VAR_FG_TRANSLATE_END,a=e.cssClasses,o=a.FG_DEACTIVATION,u=a.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var l="",h="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),f=d.startPoint,m=d.endPoint;l=f.x+"px, "+f.y+"px",h=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(s,l),this.adapter.updateCssVariable(r,h),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(o),this.adapter.computeBoundingRect(),this.adapter.addClass(u),this.activationTimer=setTimeout(function(){n.activationTimerCallback()},c)},e.prototype.getFgTranslationCoordinates=function(){var n=this.activationState,i=n.activationEvent,s=n.wasActivatedByPointer,r;s?r=Hg(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):r={x:this.frame.width/2,y:this.frame.height/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var a={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:a}},e.prototype.runDeactivationUXLogicIfReady=function(){var n=this,i=e.cssClasses.FG_DEACTIVATION,s=this.activationState,r=s.hasDeactivationUXRun,a=s.isActivated,o=r||!a;o&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout(function(){n.adapter.removeClass(i)},Dl.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var n=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(n),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var n=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return n.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var n=this,i=this.activationState;if(!!i.isActivated){var s=yt({},i);i.isProgrammatic?(requestAnimationFrame(function(){n.animateDeactivation(s)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){n.activationState.hasDeactivationUXRun=!0,n.animateDeactivation(s),n.resetActivationState()}))}},e.prototype.animateDeactivation=function(n){var i=n.wasActivatedByPointer,s=n.wasElementMadeActive;(i||s)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var n=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width),s=function(){var a=Math.sqrt(Math.pow(n.frame.width,2)+Math.pow(n.frame.height,2));return a+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?i:s();var r=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!=0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var n=e.strings,i=n.VAR_FG_SIZE,s=n.VAR_LEFT,r=n.VAR_TOP,a=n.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(a,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(s,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},e}(di);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Vo="mdc-dom-focus-sentinel",Qg=function(){function t(e,n){n===void 0&&(n={}),this.root=e,this.options=n,this.elFocusedBeforeTrapFocus=null}return t.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},t.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+Vo)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},t.prototype.wrapTabFocus=function(e){var n=this,i=this.createSentinel(),s=this.createSentinel();i.addEventListener("focus",function(){var r=n.getFocusableElements(e);r.length>0&&r[r.length-1].focus()}),s.addEventListener("focus",function(){var r=n.getFocusableElements(e);r.length>0&&r[0].focus()}),e.insertBefore(i,e.children[0]),e.appendChild(s)},t.prototype.focusInitialElement=function(e,n){var i=0;n&&(i=Math.max(e.indexOf(n),0)),e[i].focus()},t.prototype.getFocusableElements=function(e){var n=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return n.filter(function(i){var s=i.getAttribute("aria-disabled")==="true"||i.getAttribute("disabled")!=null||i.getAttribute("hidden")!=null||i.getAttribute("aria-hidden")==="true",r=i.tabIndex>=0&&i.getBoundingClientRect().width>0&&!i.classList.contains(Vo)&&!s,a=!1;if(r){var o=getComputedStyle(i);a=o.display==="none"||o.visibility==="hidden"}return r&&!a})},t.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(Vo),e},t}(),Yg=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",FocusTrap:Qg});/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ae={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},Et=new Set;Et.add(ae.BACKSPACE);Et.add(ae.ENTER);Et.add(ae.SPACEBAR);Et.add(ae.PAGE_UP);Et.add(ae.PAGE_DOWN);Et.add(ae.END);Et.add(ae.HOME);Et.add(ae.ARROW_LEFT);Et.add(ae.ARROW_UP);Et.add(ae.ARROW_RIGHT);Et.add(ae.ARROW_DOWN);Et.add(ae.DELETE);Et.add(ae.ESCAPE);Et.add(ae.TAB);var Rt={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},_t=new Map;_t.set(Rt.BACKSPACE,ae.BACKSPACE);_t.set(Rt.ENTER,ae.ENTER);_t.set(Rt.SPACEBAR,ae.SPACEBAR);_t.set(Rt.PAGE_UP,ae.PAGE_UP);_t.set(Rt.PAGE_DOWN,ae.PAGE_DOWN);_t.set(Rt.END,ae.END);_t.set(Rt.HOME,ae.HOME);_t.set(Rt.ARROW_LEFT,ae.ARROW_LEFT);_t.set(Rt.ARROW_UP,ae.ARROW_UP);_t.set(Rt.ARROW_RIGHT,ae.ARROW_RIGHT);_t.set(Rt.ARROW_DOWN,ae.ARROW_DOWN);_t.set(Rt.DELETE,ae.DELETE);_t.set(Rt.ESCAPE,ae.ESCAPE);_t.set(Rt.TAB,ae.TAB);var En=new Set;En.add(ae.PAGE_UP);En.add(ae.PAGE_DOWN);En.add(ae.END);En.add(ae.HOME);En.add(ae.ARROW_LEFT);En.add(ae.ARROW_UP);En.add(ae.ARROW_RIGHT);En.add(ae.ARROW_DOWN);function dt(t){var e=t.key;if(Et.has(e))return e;var n=_t.get(t.keyCode);return n||ae.UNKNOWN}const{applyPassive:ir}=zg,{matches:Jg}=Uo;function jn(t,{ripple:e=!0,surface:n=!1,unbounded:i=!1,disabled:s=!1,color:r,active:a,rippleElement:o,eventTarget:u,activeTarget:c,addClass:l=m=>t.classList.add(m),removeClass:h=m=>t.classList.remove(m),addStyle:d=(m,y)=>t.style.setProperty(m,y),initPromise:f=Promise.resolve()}={}){let m,y=Ct("SMUI:addLayoutListener"),g,v=a,I=u,_=c;function M(){n&&(l("mdc-ripple-surface"),r==="primary"?(l("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")):r==="secondary"?(h("smui-ripple-surface--primary"),l("smui-ripple-surface--secondary")):(h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary"))),m&&v!==a&&(v=a,a?m.activate():a===!1&&m.deactivate()),e&&!m?(m=new Xg({addClass:l,browserSupportsCssVars:()=>Bg(window),computeBoundingRect:()=>(o||t).getBoundingClientRect(),containsEventTarget:b=>t.contains(b),deregisterDocumentInteractionHandler:(b,N)=>document.documentElement.removeEventListener(b,N,ir()),deregisterInteractionHandler:(b,N)=>(u||t).removeEventListener(b,N,ir()),deregisterResizeHandler:b=>window.removeEventListener("resize",b),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>a==null?Jg(c||t,":active"):a,isSurfaceDisabled:()=>!!s,isUnbounded:()=>!!i,registerDocumentInteractionHandler:(b,N)=>document.documentElement.addEventListener(b,N,ir()),registerInteractionHandler:(b,N)=>(u||t).addEventListener(b,N,ir()),registerResizeHandler:b=>window.addEventListener("resize",b),removeClass:h,updateCssVariable:d}),f.then(()=>{m&&(m.init(),m.setUnbounded(i))})):m&&!e&&f.then(()=>{m&&(m.destroy(),m=void 0)}),m&&(I!==u||_!==c)&&(I=u,_=c,m.destroy(),requestAnimationFrame(()=>{m&&(m.init(),m.setUnbounded(i))})),!e&&i&&l("mdc-ripple-upgraded--unbounded")}M(),y&&(g=y(x));function x(){m&&m.layout()}return{update(b){({ripple:e,surface:n,unbounded:i,disabled:s,color:r,active:a,rippleElement:o,eventTarget:u,activeTarget:c,addClass:l,removeClass:h,addStyle:d,initPromise:f}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:N=>t.classList.add(N),removeClass:N=>t.classList.remove(N),addStyle:(N,w)=>t.style.setProperty(N,w),initPromise:Promise.resolve()},b)),M()},destroy(){m&&(m.destroy(),m=void 0,h("mdc-ripple-surface"),h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")),g&&g()}}}function Zg(t){let e,n,i,s,r;const a=t[7].default,o=Qe(a,t,t[6],null);let u=[{href:t[1]},t[4]],c={};for(let l=0;l<u.length;l+=1)c=B(c,u[l]);return{c(){e=J("a"),o&&o.c(),this.h()},l(l){e=ee(l,"A",{href:!0});var h=se(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){re(l,e,h),o&&o.m(e,null),t[8](e),i=!0,s||(r=[de(n=It.call(null,e,t[0])),de(t[3].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&64)&&Je(o,a,l,l[6],i?Ye(a,l[6],h,null):Ze(l[6]),null),le(e,c=Oe(u,[(!i||h&2)&&{href:l[1]},h&16&&l[4]])),n&&Ne(n.update)&&h&1&&n.update.call(null,l[0])},i(l){i||(ge(o,l),i=!0)},o(l){ye(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),t[8](null),s=!1,we(r)}}}function $g(t,e,n){const i=["use","href","getElement"];let s=ne(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e,{href:u="javascript:void(0);"}=e;const c=Be(be());let l;function h(){return l}function d(f){fe[f?"unshift":"push"](()=>{l=f,n(2,l)})}return t.$$set=f=>{e=B(B({},e),Me(f)),n(4,s=ne(e,i)),"use"in f&&n(0,o=f.use),"href"in f&&n(1,u=f.href),"$$scope"in f&&n(6,a=f.$$scope)},[o,u,l,c,s,h,a,r,d]}class ev extends Ve{constructor(e){super();Ue(this,e,$g,Zg,ke,{use:0,href:1,getElement:5})}get getElement(){return this.$$.ctx[5]}}function tv(t){let e,n,i,s,r;const a=t[6].default,o=Qe(a,t,t[5],null);let u=[t[3]],c={};for(let l=0;l<u.length;l+=1)c=B(c,u[l]);return{c(){e=J("button"),o&&o.c(),this.h()},l(l){e=ee(l,"BUTTON",{});var h=se(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){re(l,e,h),o&&o.m(e,null),e.autofocus&&e.focus(),t[7](e),i=!0,s||(r=[de(n=It.call(null,e,t[0])),de(t[2].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&32)&&Je(o,a,l,l[5],i?Ye(a,l[5],h,null):Ze(l[5]),null),le(e,c=Oe(u,[h&8&&l[3]])),n&&Ne(n.update)&&h&1&&n.update.call(null,l[0])},i(l){i||(ge(o,l),i=!0)},o(l){ye(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),t[7](null),s=!1,we(r)}}}function nv(t,e,n){const i=["use","getElement"];let s=ne(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const u=Be(be());let c;function l(){return c}function h(d){fe[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=B(B({},e),Me(d)),n(3,s=ne(e,i)),"use"in d&&n(0,o=d.use),"$$scope"in d&&n(5,a=d.$$scope)},[o,c,u,s,l,a,r,h]}class iv extends Ve{constructor(e){super();Ue(this,e,nv,tv,ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function sv(t){let e,n,i,s,r;const a=t[6].default,o=Qe(a,t,t[5],null);let u=[t[3]],c={};for(let l=0;l<u.length;l+=1)c=B(c,u[l]);return{c(){e=J("div"),o&&o.c(),this.h()},l(l){e=ee(l,"DIV",{});var h=se(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){re(l,e,h),o&&o.m(e,null),t[7](e),i=!0,s||(r=[de(n=It.call(null,e,t[0])),de(t[2].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&32)&&Je(o,a,l,l[5],i?Ye(a,l[5],h,null):Ze(l[5]),null),le(e,c=Oe(u,[h&8&&l[3]])),n&&Ne(n.update)&&h&1&&n.update.call(null,l[0])},i(l){i||(ge(o,l),i=!0)},o(l){ye(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),t[7](null),s=!1,we(r)}}}function rv(t,e,n){const i=["use","getElement"];let s=ne(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const u=Be(be());let c;function l(){return c}function h(d){fe[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=B(B({},e),Me(d)),n(3,s=ne(e,i)),"use"in d&&n(0,o=d.use),"$$scope"in d&&n(5,a=d.$$scope)},[o,c,u,s,l,a,r,h]}class Nl extends Ve{constructor(e){super();Ue(this,e,rv,sv,ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function ov(t){let e,n,i,s,r;const a=t[6].default,o=Qe(a,t,t[5],null);let u=[t[3]],c={};for(let l=0;l<u.length;l+=1)c=B(c,u[l]);return{c(){e=J("h1"),o&&o.c(),this.h()},l(l){e=ee(l,"H1",{});var h=se(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){re(l,e,h),o&&o.m(e,null),t[7](e),i=!0,s||(r=[de(n=It.call(null,e,t[0])),de(t[2].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&32)&&Je(o,a,l,l[5],i?Ye(a,l[5],h,null):Ze(l[5]),null),le(e,c=Oe(u,[h&8&&l[3]])),n&&Ne(n.update)&&h&1&&n.update.call(null,l[0])},i(l){i||(ge(o,l),i=!0)},o(l){ye(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),t[7](null),s=!1,we(r)}}}function av(t,e,n){const i=["use","getElement"];let s=ne(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const u=Be(be());let c;function l(){return c}function h(d){fe[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=B(B({},e),Me(d)),n(3,s=ne(e,i)),"use"in d&&n(0,o=d.use),"$$scope"in d&&n(5,a=d.$$scope)},[o,c,u,s,l,a,r,h]}class uv extends Ve{constructor(e){super();Ue(this,e,av,ov,ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function lv(t){let e,n,i,s,r;const a=t[6].default,o=Qe(a,t,t[5],null);let u=[t[3]],c={};for(let l=0;l<u.length;l+=1)c=B(c,u[l]);return{c(){e=J("h2"),o&&o.c(),this.h()},l(l){e=ee(l,"H2",{});var h=se(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){re(l,e,h),o&&o.m(e,null),t[7](e),i=!0,s||(r=[de(n=It.call(null,e,t[0])),de(t[2].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&32)&&Je(o,a,l,l[5],i?Ye(a,l[5],h,null):Ze(l[5]),null),le(e,c=Oe(u,[h&8&&l[3]])),n&&Ne(n.update)&&h&1&&n.update.call(null,l[0])},i(l){i||(ge(o,l),i=!0)},o(l){ye(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),t[7](null),s=!1,we(r)}}}function cv(t,e,n){const i=["use","getElement"];let s=ne(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const u=Be(be());let c;function l(){return c}function h(d){fe[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=B(B({},e),Me(d)),n(3,s=ne(e,i)),"use"in d&&n(0,o=d.use),"$$scope"in d&&n(5,a=d.$$scope)},[o,c,u,s,l,a,r,h]}class hv extends Ve{constructor(e){super();Ue(this,e,cv,lv,ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function dv(t){let e,n,i,s,r;const a=t[6].default,o=Qe(a,t,t[5],null);let u=[t[3]],c={};for(let l=0;l<u.length;l+=1)c=B(c,u[l]);return{c(){e=J("h3"),o&&o.c(),this.h()},l(l){e=ee(l,"H3",{});var h=se(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){re(l,e,h),o&&o.m(e,null),t[7](e),i=!0,s||(r=[de(n=It.call(null,e,t[0])),de(t[2].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&32)&&Je(o,a,l,l[5],i?Ye(a,l[5],h,null):Ze(l[5]),null),le(e,c=Oe(u,[h&8&&l[3]])),n&&Ne(n.update)&&h&1&&n.update.call(null,l[0])},i(l){i||(ge(o,l),i=!0)},o(l){ye(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),t[7](null),s=!1,we(r)}}}function fv(t,e,n){const i=["use","getElement"];let s=ne(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const u=Be(be());let c;function l(){return c}function h(d){fe[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=B(B({},e),Me(d)),n(3,s=ne(e,i)),"use"in d&&n(0,o=d.use),"$$scope"in d&&n(5,a=d.$$scope)},[o,c,u,s,l,a,r,h]}class mv extends Ve{constructor(e){super();Ue(this,e,fv,dv,ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function pv(t){let e,n,i,s,r;const a=t[6].default,o=Qe(a,t,t[5],null);let u=[t[3]],c={};for(let l=0;l<u.length;l+=1)c=B(c,u[l]);return{c(){e=J("li"),o&&o.c(),this.h()},l(l){e=ee(l,"LI",{});var h=se(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){re(l,e,h),o&&o.m(e,null),t[7](e),i=!0,s||(r=[de(n=It.call(null,e,t[0])),de(t[2].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&32)&&Je(o,a,l,l[5],i?Ye(a,l[5],h,null):Ze(l[5]),null),le(e,c=Oe(u,[h&8&&l[3]])),n&&Ne(n.update)&&h&1&&n.update.call(null,l[0])},i(l){i||(ge(o,l),i=!0)},o(l){ye(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),t[7](null),s=!1,we(r)}}}function gv(t,e,n){const i=["use","getElement"];let s=ne(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const u=Be(be());let c;function l(){return c}function h(d){fe[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=B(B({},e),Me(d)),n(3,s=ne(e,i)),"use"in d&&n(0,o=d.use),"$$scope"in d&&n(5,a=d.$$scope)},[o,c,u,s,l,a,r,h]}class vv extends Ve{constructor(e){super();Ue(this,e,gv,pv,ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function yv(t){let e,n,i,s,r;const a=t[6].default,o=Qe(a,t,t[5],null);let u=[t[3]],c={};for(let l=0;l<u.length;l+=1)c=B(c,u[l]);return{c(){e=J("nav"),o&&o.c(),this.h()},l(l){e=ee(l,"NAV",{});var h=se(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){re(l,e,h),o&&o.m(e,null),t[7](e),i=!0,s||(r=[de(n=It.call(null,e,t[0])),de(t[2].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&32)&&Je(o,a,l,l[5],i?Ye(a,l[5],h,null):Ze(l[5]),null),le(e,c=Oe(u,[h&8&&l[3]])),n&&Ne(n.update)&&h&1&&n.update.call(null,l[0])},i(l){i||(ge(o,l),i=!0)},o(l){ye(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),t[7](null),s=!1,we(r)}}}function Iv(t,e,n){const i=["use","getElement"];let s=ne(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const u=Be(be());let c;function l(){return c}function h(d){fe[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=B(B({},e),Me(d)),n(3,s=ne(e,i)),"use"in d&&n(0,o=d.use),"$$scope"in d&&n(5,a=d.$$scope)},[o,c,u,s,l,a,r,h]}class Ev extends Ve{constructor(e){super();Ue(this,e,Iv,yv,ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function _v(t){let e,n,i,s,r;const a=t[6].default,o=Qe(a,t,t[5],null);let u=[t[3]],c={};for(let l=0;l<u.length;l+=1)c=B(c,u[l]);return{c(){e=J("span"),o&&o.c(),this.h()},l(l){e=ee(l,"SPAN",{});var h=se(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){re(l,e,h),o&&o.m(e,null),t[7](e),i=!0,s||(r=[de(n=It.call(null,e,t[0])),de(t[2].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&32)&&Je(o,a,l,l[5],i?Ye(a,l[5],h,null):Ze(l[5]),null),le(e,c=Oe(u,[h&8&&l[3]])),n&&Ne(n.update)&&h&1&&n.update.call(null,l[0])},i(l){i||(ge(o,l),i=!0)},o(l){ye(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),t[7](null),s=!1,we(r)}}}function Tv(t,e,n){const i=["use","getElement"];let s=ne(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const u=Be(be());let c;function l(){return c}function h(d){fe[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=B(B({},e),Me(d)),n(3,s=ne(e,i)),"use"in d&&n(0,o=d.use),"$$scope"in d&&n(5,a=d.$$scope)},[o,c,u,s,l,a,r,h]}class Sv extends Ve{constructor(e){super();Ue(this,e,Tv,_v,ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function Av(t){let e,n,i,s,r;const a=t[6].default,o=Qe(a,t,t[5],null);let u=[t[3]],c={};for(let l=0;l<u.length;l+=1)c=B(c,u[l]);return{c(){e=J("ul"),o&&o.c(),this.h()},l(l){e=ee(l,"UL",{});var h=se(e);o&&o.l(h),h.forEach(D),this.h()},h(){le(e,c)},m(l,h){re(l,e,h),o&&o.m(e,null),t[7](e),i=!0,s||(r=[de(n=It.call(null,e,t[0])),de(t[2].call(null,e))],s=!0)},p(l,[h]){o&&o.p&&(!i||h&32)&&Je(o,a,l,l[5],i?Ye(a,l[5],h,null):Ze(l[5]),null),le(e,c=Oe(u,[h&8&&l[3]])),n&&Ne(n.update)&&h&1&&n.update.call(null,l[0])},i(l){i||(ge(o,l),i=!0)},o(l){ye(o,l),i=!1},d(l){l&&D(e),o&&o.d(l),t[7](null),s=!1,we(r)}}}function bv(t,e,n){const i=["use","getElement"];let s=ne(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const u=Be(be());let c;function l(){return c}function h(d){fe[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=B(B({},e),Me(d)),n(3,s=ne(e,i)),"use"in d&&n(0,o=d.use),"$$scope"in d&&n(5,a=d.$$scope)},[o,c,u,s,l,a,r,h]}class wv extends Ve{constructor(e){super();Ue(this,e,bv,Av,ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}const kl=ev,Cv=iv,_n=Nl,Rv=uv,Dv=hv,Ov=mv,Lv=vv,Nv=Ev,Ki=Sv,kv=wv;function Ml(t){let e;return{c(){e=J("div"),this.h()},l(n){e=ee(n,"DIV",{class:!0}),se(e).forEach(D),this.h()},h(){ie(e,"class","mdc-button__touch")},m(n,i){re(n,e,i)},d(n){n&&D(e)}}}function Mv(t){let e,n,i,s;const r=t[26].default,a=Qe(r,t,t[28],null);let o=t[6]&&Ml();return{c(){e=J("div"),n=Ht(),a&&a.c(),o&&o.c(),i=Pt(),this.h()},l(u){e=ee(u,"DIV",{class:!0}),se(e).forEach(D),n=xt(u),a&&a.l(u),o&&o.l(u),i=Pt(),this.h()},h(){ie(e,"class","mdc-button__ripple")},m(u,c){re(u,e,c),re(u,n,c),a&&a.m(u,c),o&&o.m(u,c),re(u,i,c),s=!0},p(u,c){a&&a.p&&(!s||c&268435456)&&Je(a,r,u,u[28],s?Ye(r,u[28],c,null):Ze(u[28]),null),u[6]?o||(o=Ml(),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},i(u){s||(ge(a,u),s=!0)},o(u){ye(a,u),s=!1},d(u){u&&D(e),u&&D(n),a&&a.d(u),o&&o.d(u),u&&D(i)}}}function Pv(t){let e,n,i;const s=[{use:[[jn,{ripple:t[3],unbounded:!1,color:t[4],disabled:!!t[22].disabled,addClass:t[18],removeClass:t[19],addStyle:t[20]}],t[16],...t[0]]},{class:ve(Xe({[t[1]]:!0,"mdc-button":!0,"mdc-button--raised":t[5]==="raised","mdc-button--unelevated":t[5]==="unelevated","mdc-button--outlined":t[5]==="outlined","smui-button--color-secondary":t[4]==="secondary","mdc-button--touch":t[6],"mdc-card__action":t[17]==="card:action","mdc-card__action--button":t[17]==="card:action","mdc-dialog__button":t[17]==="dialog:action","mdc-top-app-bar__navigation-icon":t[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":t[17]==="top-app-bar:action","mdc-snackbar__action":t[17]==="snackbar:actions","mdc-banner__secondary-action":t[17]==="banner"&&t[8],"mdc-banner__primary-action":t[17]==="banner"&&!t[8],"mdc-tooltip__action":t[17]==="tooltip:rich-actions"},t[11]))},{style:Object.entries(t[12]).map(Pl).concat([t[2]]).join(" ")},t[15],t[14],t[13],{href:t[7]},t[22]];var r=t[9];function a(o){let u={$$slots:{default:[Mv]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)u=B(u,s[c]);return{props:u}}return r&&(e=new r(a(t)),t[27](e),e.$on("click",t[21])),{c(){e&&nn(e.$$.fragment),n=Pt()},l(o){e&&Pi(e.$$.fragment,o),n=Pt()},m(o,u){e&&Kt(e,o,u),re(o,n,u),i=!0},p(o,[u]){const c=u&6289919?Oe(s,[u&6094873&&{use:[[jn,{ripple:o[3],unbounded:!1,color:o[4],disabled:!!o[22].disabled,addClass:o[18],removeClass:o[19],addStyle:o[20]}],o[16],...o[0]]},u&133490&&{class:ve(Xe({[o[1]]:!0,"mdc-button":!0,"mdc-button--raised":o[5]==="raised","mdc-button--unelevated":o[5]==="unelevated","mdc-button--outlined":o[5]==="outlined","smui-button--color-secondary":o[4]==="secondary","mdc-button--touch":o[6],"mdc-card__action":o[17]==="card:action","mdc-card__action--button":o[17]==="card:action","mdc-dialog__button":o[17]==="dialog:action","mdc-top-app-bar__navigation-icon":o[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":o[17]==="top-app-bar:action","mdc-snackbar__action":o[17]==="snackbar:actions","mdc-banner__secondary-action":o[17]==="banner"&&o[8],"mdc-banner__primary-action":o[17]==="banner"&&!o[8],"mdc-tooltip__action":o[17]==="tooltip:rich-actions"},o[11]))},u&4100&&{style:Object.entries(o[12]).map(Pl).concat([o[2]]).join(" ")},u&32768&&vt(o[15]),u&16384&&vt(o[14]),u&8192&&vt(o[13]),u&128&&{href:o[7]},u&4194304&&vt(o[22])]):{};if(u&268435520&&(c.$$scope={dirty:u,ctx:o}),r!==(r=o[9])){if(e){Bs();const l=e;ye(l.$$.fragment,1,0,()=>{Xt(l,1)}),Hs()}r?(e=new r(a(o)),o[27](e),e.$on("click",o[21]),nn(e.$$.fragment),ge(e.$$.fragment,1),Kt(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&ge(e.$$.fragment,o),i=!0)},o(o){e&&ye(e.$$.fragment,o),i=!1},d(o){t[27](null),o&&D(n),e&&Xt(e,o)}}}const Pl=([t,e])=>`${t}: ${e};`;function Fv(t,e,n){let i,s,r;const a=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","getElement"];let o=ne(e,a),{$$slots:u={},$$scope:c}=e;const l=Be(be());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{ripple:m=!0}=e,{color:y="primary"}=e,{variant:g="text"}=e,{touch:v=!1}=e,{href:I=void 0}=e,{action:_="close"}=e,{defaultAction:M=!1}=e,{secondary:x=!1}=e,b,N={},w={},R=Ct("SMUI:button:context"),{component:P=I==null?Cv:kl}=e;tt("SMUI:label:context","button"),tt("SMUI:icon:context","button");function Y(k){N[k]||n(11,N[k]=!0,N)}function oe(k){(!(k in N)||N[k])&&n(11,N[k]=!1,N)}function C(k,Se){w[k]!=Se&&(Se===""||Se==null?(delete w[k],n(12,w)):n(12,w[k]=Se,w))}function j(){R==="banner"&&it(G(),x?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function G(){return b.getElement()}function U(k){fe[k?"unshift":"push"](()=>{b=k,n(10,b)})}return t.$$set=k=>{n(29,e=B(B({},e),Me(k))),n(22,o=ne(e,a)),"use"in k&&n(0,h=k.use),"class"in k&&n(1,d=k.class),"style"in k&&n(2,f=k.style),"ripple"in k&&n(3,m=k.ripple),"color"in k&&n(4,y=k.color),"variant"in k&&n(5,g=k.variant),"touch"in k&&n(6,v=k.touch),"href"in k&&n(7,I=k.href),"action"in k&&n(23,_=k.action),"defaultAction"in k&&n(24,M=k.defaultAction),"secondary"in k&&n(8,x=k.secondary),"component"in k&&n(9,P=k.component),"$$scope"in k&&n(28,c=k.$$scope)},t.$$.update=()=>{n(15,i=R==="dialog:action"&&_!=null?{"data-mdc-dialog-action":_}:{action:e.action}),n(14,s=R==="dialog:action"&&M?{"data-mdc-dialog-button-default":""}:{default:e.default}),n(13,r=R==="banner"?{}:{secondary:e.secondary})},e=Me(e),[h,d,f,m,y,g,v,I,x,P,b,N,w,r,s,i,l,R,Y,oe,C,j,o,_,M,G,u,U,c]}class bT extends Ve{constructor(e){super();Ue(this,e,Fv,Pv,ke,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:23,defaultAction:24,secondary:8,component:9,getElement:25})}get getElement(){return this.$$.ctx[25]}}var Uv=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},V,Bo=Bo||{},X=Uv||self;function sr(){}function Ho(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Xi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Vv(t){return Object.prototype.hasOwnProperty.call(t,xo)&&t[xo]||(t[xo]=++Bv)}var xo="closure_uid_"+(1e9*Math.random()>>>0),Bv=0;function Hv(t,e,n){return t.call.apply(t.bind,arguments)}function xv(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function at(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?at=Hv:at=xv,at.apply(null,arguments)}function rr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function ut(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,s,r){for(var a=Array(arguments.length-2),o=2;o<arguments.length;o++)a[o-2]=arguments[o];return e.prototype[s].apply(i,a)}}function Tn(){this.s=this.s,this.o=this.o}var jv=0,zv={};Tn.prototype.s=!1;Tn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),jv!=0)){var t=Vv(this);delete zv[t]}};Tn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Fl=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ul=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function Gv(t){e:{var e=Py;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Vl(t){return Array.prototype.concat.apply([],arguments)}function jo(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function or(t){return/^[\s\xa0]*$/.test(t)}var Bl=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Tt(t,e){return t.indexOf(e)!=-1}function zo(t,e){return t<e?-1:t>e?1:0}var St;e:{var Hl=X.navigator;if(Hl){var xl=Hl.userAgent;if(xl){St=xl;break e}}St=""}function Go(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function jl(t){const e={};for(const n in t)e[n]=t[n];return e}var zl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gl(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<zl.length;r++)n=zl[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function qo(t){return qo[" "](t),t}qo[" "]=sr;function qv(t){var e=Xv;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Wv=Tt(St,"Opera"),fi=Tt(St,"Trident")||Tt(St,"MSIE"),ql=Tt(St,"Edge"),Wo=ql||fi,Wl=Tt(St,"Gecko")&&!(Tt(St.toLowerCase(),"webkit")&&!Tt(St,"Edge"))&&!(Tt(St,"Trident")||Tt(St,"MSIE"))&&!Tt(St,"Edge"),Kv=Tt(St.toLowerCase(),"webkit")&&!Tt(St,"Edge");function Kl(){var t=X.document;return t?t.documentMode:void 0}var ar;e:{var Ko="",Xo=function(){var t=St;if(Wl)return/rv:([^\);]+)(\)|;)/.exec(t);if(ql)return/Edge\/([\d\.]+)/.exec(t);if(fi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Kv)return/WebKit\/(\S+)/.exec(t);if(Wv)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Xo&&(Ko=Xo?Xo[1]:""),fi){var Qo=Kl();if(Qo!=null&&Qo>parseFloat(Ko)){ar=String(Qo);break e}}ar=Ko}var Xv={};function Qv(){return qv(function(){let t=0;const e=Bl(String(ar)).split("."),n=Bl("9").split("."),i=Math.max(e.length,n.length);for(let a=0;t==0&&a<i;a++){var s=e[a]||"",r=n[a]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=zo(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||zo(s[2].length==0,r[2].length==0)||zo(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var Yo;if(X.document&&fi){var Xl=Kl();Yo=Xl||parseInt(ar,10)||void 0}else Yo=void 0;var Yv=Yo,Jv=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",sr,e),X.removeEventListener("test",sr,e)}catch{}return t}();function ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};function Qi(t,e){if(ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Wl){e:{try{qo(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Zv[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Qi.Z.h.call(this)}}ut(Qi,ft);var Zv={2:"touch",3:"pen",4:"mouse"};Qi.prototype.h=function(){Qi.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Yi="closure_listenable_"+(1e6*Math.random()|0),$v=0;function ey(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++$v,this.ca=this.fa=!1}function ur(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function lr(t){this.src=t,this.g={},this.h=0}lr.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var a=Zo(t,e,i,s);return-1<a?(e=t[a],n||(e.fa=!1)):(e=new ey(e,this.src,r,!!i,s),e.fa=n,t.push(e)),e};function Jo(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Fl(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ur(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Zo(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}var $o="closure_lm_"+(1e6*Math.random()|0),ea={};function Ql(t,e,n,i,s){if(i&&i.once)return Jl(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ql(t,e[r],n,i,s);return null}return n=sa(n),t&&t[Yi]?t.N(e,n,Xi(i)?!!i.capture:!!i,s):Yl(t,e,n,!1,i,s)}function Yl(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var a=Xi(s)?!!s.capture:!!s,o=na(t);if(o||(t[$o]=o=new lr(t)),n=o.add(e,n,i,a,r),n.proxy)return n;if(i=ty(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Jv||(s=a),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent($l(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ty(){function t(n){return e.call(t.src,t.listener,n)}var e=ny;return t}function Jl(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Jl(t,e[r],n,i,s);return null}return n=sa(n),t&&t[Yi]?t.O(e,n,Xi(i)?!!i.capture:!!i,s):Yl(t,e,n,!0,i,s)}function Zl(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Zl(t,e[r],n,i,s);else i=Xi(i)?!!i.capture:!!i,n=sa(n),t&&t[Yi]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Zo(r,n,i,s),-1<n&&(ur(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=na(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Zo(e,n,i,s)),(n=-1<t?e[t]:null)&&ta(n))}function ta(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Yi])Jo(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent($l(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=na(e))?(Jo(n,t),n.h==0&&(n.src=null,e[$o]=null)):ur(t)}}}function $l(t){return t in ea?ea[t]:ea[t]="on"+t}function ny(t,e){if(t.ca)t=!0;else{e=new Qi(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&ta(t),t=n.call(i,e)}return t}function na(t){return t=t[$o],t instanceof lr?t:null}var ia="__closure_events_fn_"+(1e9*Math.random()>>>0);function sa(t){return typeof t=="function"?t:(t[ia]||(t[ia]=function(e){return t.handleEvent(e)}),t[ia])}function st(){Tn.call(this),this.i=new lr(this),this.P=this,this.I=null}ut(st,Tn);st.prototype[Yi]=!0;st.prototype.removeEventListener=function(t,e,n,i){Zl(this,t,e,n,i)};function lt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new ft(e,t);else if(e instanceof ft)e.target=e.target||t;else{var s=e;e=new ft(i,t),Gl(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var a=e.g=n[r];s=cr(a,i,!0,e)&&s}if(a=e.g=t,s=cr(a,i,!0,e)&&s,s=cr(a,i,!1,e)&&s,n)for(r=0;r<n.length;r++)a=e.g=n[r],s=cr(a,i,!1,e)&&s}st.prototype.M=function(){if(st.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)ur(n[i]);delete t.g[e],t.h--}}this.I=null};st.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};st.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function cr(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var a=e[r];if(a&&!a.ca&&a.capture==n){var o=a.listener,u=a.ia||a.src;a.fa&&Jo(t.i,a),s=o.call(u,i)!==!1&&s}}return s&&!i.defaultPrevented}var ra=X.JSON.stringify;function iy(){var t=tc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class sy{constructor(){this.h=this.g=null}add(e,n){const i=ec.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var ec=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new ry,t=>t.reset());class ry{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function oy(t){X.setTimeout(()=>{throw t},0)}function oa(t,e){aa||ay(),ua||(aa(),ua=!0),tc.add(t,e)}var aa;function ay(){var t=X.Promise.resolve(void 0);aa=function(){t.then(uy)}}var ua=!1,tc=new sy;function uy(){for(var t;t=iy();){try{t.h.call(t.g)}catch(n){oy(n)}var e=ec;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ua=!1}function hr(t,e){st.call(this),this.h=t||1,this.g=e||X,this.j=at(this.kb,this),this.l=Date.now()}ut(hr,st);V=hr.prototype;V.da=!1;V.S=null;V.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),lt(this,"tick"),this.da&&(la(this),this.start()))}};V.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function la(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}V.M=function(){hr.Z.M.call(this),la(this),delete this.g};function ca(t,e,n){if(typeof t=="function")n&&(t=at(t,n));else if(t&&typeof t.handleEvent=="function")t=at(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function nc(t){t.g=ca(()=>{t.g=null,t.i&&(t.i=!1,nc(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ly extends Tn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:nc(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ji(t){Tn.call(this),this.h=t,this.g={}}ut(Ji,Tn);var ic=[];function sc(t,e,n,i){Array.isArray(n)||(n&&(ic[0]=n.toString()),n=ic);for(var s=0;s<n.length;s++){var r=Ql(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function rc(t){Go(t.g,function(e,n){this.g.hasOwnProperty(n)&&ta(e)},t),t.g={}}Ji.prototype.M=function(){Ji.Z.M.call(this),rc(this)};Ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function dr(){this.g=!0}dr.prototype.Aa=function(){this.g=!1};function cy(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var a="",o=r.split("&"),u=0;u<o.length;u++){var c=o[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");a=2<=h.length&&h[1]=="type"?a+(l+"="+c+"&"):a+(l+"=redacted&")}}else a=null;else a=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+a})}function hy(t,e,n,i,s,r,a){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+a})}function mi(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+fy(t,n)+(i?" "+i:"")})}function dy(t,e){t.info(function(){return"TIMEOUT: "+e})}dr.prototype.info=function(){};function fy(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var a=1;a<s.length;a++)s[a]=""}}}}return ra(n)}catch{return e}}var zn={},oc=null;function fr(){return oc=oc||new st}zn.Ma="serverreachability";function ac(t){ft.call(this,zn.Ma,t)}ut(ac,ft);function Zi(t){const e=fr();lt(e,new ac(e,t))}zn.STAT_EVENT="statevent";function uc(t,e){ft.call(this,zn.STAT_EVENT,t),this.stat=e}ut(uc,ft);function At(t){const e=fr();lt(e,new uc(e,t))}zn.Na="timingevent";function lc(t,e){ft.call(this,zn.Na,t),this.size=e}ut(lc,ft);function $i(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var mr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},cc={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ha(){}ha.prototype.h=null;function hc(t){return t.h||(t.h=t.i())}function dc(){}var es={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function da(){ft.call(this,"d")}ut(da,ft);function fa(){ft.call(this,"c")}ut(fa,ft);var ma;function pr(){}ut(pr,ha);pr.prototype.g=function(){return new XMLHttpRequest};pr.prototype.i=function(){return{}};ma=new pr;function ts(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Ji(this),this.P=my,t=Wo?125:void 0,this.W=new hr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new fc}function fc(){this.i=null,this.g="",this.h=!1}var my=45e3,pa={},gr={};V=ts.prototype;V.setTimeout=function(t){this.P=t};function ga(t,e,n){t.K=1,t.v=_r(an(e)),t.s=n,t.U=!0,mc(t,null)}function mc(t,e){t.F=Date.now(),ns(t),t.A=an(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Sc(n.h,"t",i),t.C=0,n=t.l.H,t.h=new fc,t.g=Wc(t.l,n?e:null,!t.s),0<t.O&&(t.L=new ly(at(t.Ia,t,t.g),t.O)),sc(t.V,t.g,"readystatechange",t.gb),e=t.H?jl(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Zi(1),cy(t.j,t.u,t.A,t.m,t.X,t.s)}V.gb=function(t){t=t.target;const e=this.L;e&&un(t)==3?e.l():this.Ia(t)};V.Ia=function(t){try{if(t==this.g)e:{const l=un(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||Wo||this.g&&(this.h.h||this.g.ga()||Pc(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Zi(3):Zi(2)),vr(this);var n=this.g.ba();this.N=n;t:if(pc(this)){var i=Pc(this.g);t="";var s=i.length,r=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Gn(this),is(this);var a="";break t}this.h.i=new X.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.ga();if(this.i=n==200,hy(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var o,u=this.g;if((o=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!or(o)){var c=o;break t}}c=null}if(n=c)mi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,va(this,n);else{this.i=!1,this.o=3,At(12),Gn(this),is(this);break e}}this.U?(gc(this,l,a),Wo&&this.i&&l==3&&(sc(this.V,this.W,"tick",this.fb),this.W.start())):(mi(this.j,this.m,a,null),va(this,a)),l==4&&Gn(this),this.i&&!this.I&&(l==4?jc(this.l,this):(this.i=!1,ns(this)))}else n==400&&0<a.indexOf("Unknown SID")?(this.o=3,At(12)):(this.o=0,At(13)),Gn(this),is(this)}}}catch{}finally{}};function pc(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function gc(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=py(t,n),s==gr){e==4&&(t.o=4,At(14),i=!1),mi(t.j,t.m,null,"[Incomplete Response]");break}else if(s==pa){t.o=4,At(15),mi(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else mi(t.j,t.m,s,null),va(t,s);pc(t)&&s!=gr&&s!=pa&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,At(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ra(e),e.L=!0,At(11))):(mi(t.j,t.m,n,"[Invalid Chunked Response]"),Gn(t),is(t))}V.fb=function(){if(this.g){var t=un(this.g),e=this.g.ga();this.C<e.length&&(vr(this),gc(this,t,e),this.i&&t!=4&&ns(this))}};function py(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?gr:(n=Number(e.substring(n,i)),isNaN(n)?pa:(i+=1,i+n>e.length?gr:(e=e.substr(i,n),t.C=i+n,e)))}V.cancel=function(){this.I=!0,Gn(this)};function ns(t){t.Y=Date.now()+t.P,vc(t,t.P)}function vc(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=$i(at(t.eb,t),e)}function vr(t){t.B&&(X.clearTimeout(t.B),t.B=null)}V.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(dy(this.j,this.A),this.K!=2&&(Zi(3),At(17)),Gn(this),this.o=2,is(this)):vc(this,this.Y-t)};function is(t){t.l.G==0||t.I||jc(t.l,t)}function Gn(t){vr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,la(t.W),rc(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function va(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ea(n.i,t))){if(n.I=t.N,!t.J&&Ea(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Cr(n),br(n);else break e;Ca(n),At(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=$i(at(n.ab,n),6e3));if(1>=wc(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Kn(n,11)}else if((t.J||n.g==t)&&Cr(n),!or(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const l=c[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=i.i;!r.g&&(Tt(m,"spdy")||Tt(m,"quic")||Tt(m,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(_a(r,r.h),r.h=null))}if(i.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.sa=y,Re(i.F,i.D,y))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var a=t;if(i.oa=qc(i,i.H?i.la:null,i.W),a.J){Cc(i.i,a);var o=a,u=i.K;u&&o.setTimeout(u),o.B&&(vr(o),ns(o)),i.g=a}else Hc(i);0<n.l.length&&wr(n)}else c[0]!="stop"&&c[0]!="close"||Kn(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Kn(n,7):ba(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}Zi(4)}catch{}}function gy(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Ho(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function ya(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ho(t)||typeof t=="string")Ul(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Ho(t)||typeof t=="string"){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=gy(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function pi(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof pi)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}V=pi.prototype;V.R=function(){Ia(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};V.T=function(){return Ia(this),this.g.concat()};function Ia(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];qn(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)i=t.g[e],qn(s,i)||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}V.get=function(t,e){return qn(this.h,t)?this.h[t]:e};V.set=function(t,e){qn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};V.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};function qn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var yc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function vy(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Wn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Wn){this.g=e!==void 0?e:t.g,yr(this,t.j),this.s=t.s,Ir(this,t.i),Er(this,t.m),this.l=t.l,e=t.h;var n=new os;n.i=e.i,e.g&&(n.g=new pi(e.g),n.h=e.h),Ic(this,n),this.o=t.o}else t&&(n=String(t).match(yc))?(this.g=!!e,yr(this,n[1]||"",!0),this.s=ss(n[2]||""),Ir(this,n[3]||"",!0),Er(this,n[4]),this.l=ss(n[5]||"",!0),Ic(this,n[6]||"",!0),this.o=ss(n[7]||"")):(this.g=!!e,this.h=new os(null,this.g))}Wn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(rs(e,Ec,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(rs(e,Ec,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(rs(n,n.charAt(0)=="/"?Ty:_y,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",rs(n,Ay)),t.join("")};function an(t){return new Wn(t)}function yr(t,e,n){t.j=n?ss(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ir(t,e,n){t.i=n?ss(e,!0):e}function Er(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ic(t,e,n){e instanceof os?(t.h=e,by(t.h,t.g)):(n||(e=rs(e,Sy)),t.h=new os(e,t.g))}function Re(t,e,n){t.h.set(e,n)}function _r(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function yy(t){return t instanceof Wn?an(t):new Wn(t,void 0)}function Iy(t,e,n,i){var s=new Wn(null,void 0);return t&&yr(s,t),e&&Ir(s,e),n&&Er(s,n),i&&(s.l=i),s}function ss(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function rs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Ey),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ey(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ec=/[#\/\?@]/g,_y=/[#\?:]/g,Ty=/[#\?]/g,Sy=/[#\?@]/g,Ay=/#/g;function os(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Sn(t){t.g||(t.g=new pi,t.h=0,t.i&&vy(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=os.prototype;V.add=function(t,e){Sn(this),this.i=null,t=gi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function _c(t,e){Sn(t),e=gi(t,e),qn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,qn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ia(t)))}function Tc(t,e){return Sn(t),e=gi(t,e),qn(t.g.h,e)}V.forEach=function(t,e){Sn(this),this.g.forEach(function(n,i){Ul(n,function(s){t.call(e,s,i,this)},this)},this)};V.T=function(){Sn(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n};V.R=function(t){Sn(this);var e=[];if(typeof t=="string")Tc(this,t)&&(e=Vl(e,this.g.get(gi(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Vl(e,t[n])}return e};V.set=function(t,e){return Sn(this),this.i=null,t=gi(this,t),Tc(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Sc(t,e,n){_c(t,e),0<n.length&&(t.i=null,t.g.set(gi(t,e),jo(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var a=s;i[r]!==""&&(a+="="+encodeURIComponent(String(i[r]))),t.push(a)}}return this.i=t.join("&")};function gi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function by(t,e){e&&!t.j&&(Sn(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(_c(this,i),Sc(this,s,n))},t)),t.j=e}var wy=class{constructor(t,e){this.h=t,this.g=e}};function Ac(t){this.l=t||Cy,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ea&&X.g.Ea()&&X.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Cy=10;function bc(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function wc(t){return t.h?1:t.g?t.g.size:0}function Ea(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function _a(t,e){t.g?t.g.add(e):t.h=e}function Cc(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ac.prototype.cancel=function(){if(this.i=Rc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Rc(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return jo(t.i)}function Ta(){}Ta.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};Ta.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function Ry(){this.g=new Ta}function Dy(t,e,n){const i=n||"";try{ya(t,function(s,r){let a=s;Xi(s)&&(a=ra(s)),e.push(i+r+"="+encodeURIComponent(a))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function Oy(t,e){const n=new dr;if(X.Image){const i=new Image;i.onload=rr(Tr,n,i,"TestLoadImage: loaded",!0,e),i.onerror=rr(Tr,n,i,"TestLoadImage: error",!1,e),i.onabort=rr(Tr,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=rr(Tr,n,i,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Tr(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function as(t){this.l=t.$b||null,this.j=t.ib||!1}ut(as,ha);as.prototype.g=function(){return new Sr(this.l,this.j)};as.prototype.i=function(t){return function(){return t}}({});function Sr(t,e){st.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Sa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ut(Sr,st);var Sa=0;V=Sr.prototype;V.open=function(t,e){if(this.readyState!=Sa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ls(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,us(this)),this.readyState=Sa};V.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ls(this)),this.g&&(this.readyState=3,ls(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof X.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dc(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Dc(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}V.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?us(this):ls(this),this.readyState==3&&Dc(this)}};V.Ua=function(t){this.g&&(this.response=this.responseText=t,us(this))};V.Ta=function(t){this.g&&(this.response=t,us(this))};V.ha=function(){this.g&&us(this)};function us(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ls(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ls(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Sr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Ly=X.JSON.parse;function He(t){st.call(this),this.headers=new pi,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Oc,this.K=this.L=!1}ut(He,st);var Oc="",Ny=/^https?$/i,ky=["POST","PUT"];V=He.prototype;V.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ma.g(),this.C=this.u?hc(this.u):hc(ma),this.g.onreadystatechange=at(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Lc(this,r);return}t=n||"";const s=new pi(this.headers);i&&ya(i,function(r,a){s.set(a,r)}),i=Gv(s.T()),n=X.FormData&&t instanceof X.FormData,!(0<=Fl(ky,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(r,a){this.g.setRequestHeader(a,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Mc(this),0<this.B&&((this.K=My(this.g))?(this.g.timeout=this.B,this.g.ontimeout=at(this.pa,this)):this.A=ca(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Lc(this,r)}};function My(t){return fi&&Qv()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Py(t){return t.toLowerCase()=="content-type"}V.pa=function(){typeof Bo!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,lt(this,"timeout"),this.abort(8))};function Lc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Nc(t),Ar(t)}function Nc(t){t.D||(t.D=!0,lt(t,"complete"),lt(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,lt(this,"complete"),lt(this,"abort"),Ar(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ar(this,!0)),He.Z.M.call(this)};V.Fa=function(){this.s||(this.F||this.v||this.l?kc(this):this.cb())};V.cb=function(){kc(this)};function kc(t){if(t.h&&typeof Bo!="undefined"&&(!t.C[1]||un(t)!=4||t.ba()!=2)){if(t.v&&un(t)==4)ca(t.Fa,0,t);else if(lt(t,"readystatechange"),un(t)==4){t.h=!1;try{const o=t.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.H).match(yc)[1]||null;if(!s&&X.self&&X.self.location){var r=X.self.location.protocol;s=r.substr(0,r.length-1)}i=!Ny.test(s?s.toLowerCase():"")}n=i}if(n)lt(t,"complete"),lt(t,"success");else{t.m=6;try{var a=2<un(t)?t.g.statusText:""}catch{a=""}t.j=a+" ["+t.ba()+"]",Nc(t)}}finally{Ar(t)}}}}function Ar(t,e){if(t.g){Mc(t);const n=t.g,i=t.C[0]?sr:null;t.g=null,t.C=null,e||lt(t,"ready");try{n.onreadystatechange=i}catch{}}}function Mc(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function un(t){return t.g?t.g.readyState:0}V.ba=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}};V.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Ly(e)}};function Pc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Oc:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Da=function(){return this.m};V.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Fy(t){let e="";return Go(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Aa(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Fy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function cs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Fc(t){this.za=0,this.l=[],this.h=new dr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=cs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=cs("baseRetryDelayMs",5e3,t),this.$a=cs("retryDelaySeedMs",1e4,t),this.Ya=cs("forwardChannelMaxRetries",2,t),this.ra=cs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ac(t&&t.concurrentRequestLimit),this.Ca=new Ry,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}V=Fc.prototype;V.ma=8;V.G=1;function ba(t){if(Uc(t),t.G==3){var e=t.V++,n=an(t.F);Re(n,"SID",t.J),Re(n,"RID",e),Re(n,"TYPE","terminate"),hs(t,n),e=new ts(t,t.h,e,void 0),e.K=2,e.v=_r(an(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=Wc(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ns(e)}Gc(t)}V.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function br(t){t.g&&(Ra(t),t.g.cancel(),t.g=null)}function Uc(t){br(t),t.u&&(X.clearTimeout(t.u),t.u=null),Cr(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function wa(t,e){t.l.push(new wy(t.Za++,e)),t.G==3&&wr(t)}function wr(t){bc(t.i)||t.m||(t.m=!0,oa(t.Ha,t),t.C=0)}function Uy(t,e){return wc(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=$i(at(t.Ha,t,e),zc(t,t.C)),t.C++,!0)}V.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new ts(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=jl(r),Gl(r,this.P)):r=this.P),this.o===null&&(s.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Bc(this,s,e),n=an(this.F),Re(n,"RID",t),Re(n,"CVER",22),this.D&&Re(n,"X-HTTP-Session-Id",this.D),hs(this,n),this.o&&r&&Aa(n,this.o,r),_a(this.i,s),this.Ra&&Re(n,"TYPE","init"),this.ja?(Re(n,"$req",e),Re(n,"SID","null"),s.$=!0,ga(s,n,null)):ga(s,n,e),this.G=2}}else this.G==3&&(t?Vc(this,t):this.l.length==0||bc(this.i)||Vc(this))};function Vc(t,e){var n;e?n=e.m:n=t.V++;const i=an(t.F);Re(i,"SID",t.J),Re(i,"RID",n),Re(i,"AID",t.U),hs(t,i),t.o&&t.s&&Aa(i,t.o,t.s),n=new ts(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Bc(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),_a(t.i,n),ga(n,i,e)}function hs(t,e){t.j&&ya({},function(n,i){Re(e,i,n)})}function Bc(t,e,n){n=Math.min(t.l.length,n);var i=t.j?at(t.j.Oa,t.j,t):null;e:{var s=t.l;let r=-1;for(;;){const a=["count="+n];r==-1?0<n?(r=s[0].h,a.push("ofs="+r)):r=0:a.push("ofs="+r);let o=!0;for(let u=0;u<n;u++){let c=s[u].h;const l=s[u].g;if(c-=r,0>c)r=Math.max(0,s[u].h-100),o=!1;else try{Dy(l,a,"req"+c+"_")}catch{i&&i(l)}}if(o){i=a.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function Hc(t){t.g||t.u||(t.Y=1,oa(t.Ga,t),t.A=0)}function Ca(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=$i(at(t.Ga,t),zc(t,t.A)),t.A++,!0)}V.Ga=function(){if(this.u=null,xc(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=$i(at(this.bb,this),t)}};V.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,At(10),br(this),xc(this))};function Ra(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function xc(t){t.g=new ts(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=an(t.oa);Re(e,"RID","rpc"),Re(e,"SID",t.J),Re(e,"CI",t.N?"0":"1"),Re(e,"AID",t.U),hs(t,e),Re(e,"TYPE","xmlhttp"),t.o&&t.s&&Aa(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=_r(an(e)),n.s=null,n.U=!0,mc(n,t)}V.ab=function(){this.v!=null&&(this.v=null,br(this),Ca(this),At(19))};function Cr(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function jc(t,e){var n=null;if(t.g==e){Cr(t),Ra(t),t.g=null;var i=2}else if(Ea(t.i,e))n=e.D,Cc(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=fr(),lt(i,new lc(i,n,e,s)),wr(t)}else Hc(t);else if(s=e.o,s==3||s==0&&0<t.I||!(i==1&&Uy(t,e)||i==2&&Ca(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Kn(t,5);break;case 4:Kn(t,10);break;case 3:Kn(t,6);break;default:Kn(t,2)}}}function zc(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Kn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=at(t.jb,t);n||(n=new Wn("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||yr(n,"https"),_r(n)),Oy(n.toString(),i)}else At(2);t.G=0,t.j&&t.j.va(e),Gc(t),Uc(t)}V.jb=function(t){t?(this.h.info("Successfully pinged google.com"),At(2)):(this.h.info("Failed to ping google.com"),At(1))};function Gc(t){t.G=0,t.I=-1,t.j&&((Rc(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,jo(t.l),t.l.length=0),t.j.ua())}function qc(t,e,n){let i=yy(n);if(i.i!="")e&&Ir(i,e+"."+i.i),Er(i,i.m);else{const s=X.location;i=Iy(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Go(t.aa,function(s,r){Re(i,r,s)}),e=t.D,n=t.sa,e&&n&&Re(i,e,n),Re(i,"VER",t.ma),hs(t,i),i}function Wc(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new He(new as({ib:!0})):new He(t.qa),e.L=t.H,e}function Kc(){}V=Kc.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Oa=function(){};function Rr(){if(fi&&!(10<=Number(Yv)))throw Error("Environmental error: no available transport.")}Rr.prototype.g=function(t,e){return new kt(t,e)};function kt(t,e){st.call(this),this.g=new Fc(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!or(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!or(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vi(this)}ut(kt,st);kt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),oa(at(t.hb,t,e))),At(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=qc(t,null,t.W),wr(t)};kt.prototype.close=function(){ba(this.g)};kt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,wa(this.g,e)}else this.v?(e={},e.__data__=ra(t),wa(this.g,e)):wa(this.g,t)};kt.prototype.M=function(){this.g.j=null,delete this.j,ba(this.g),delete this.g,kt.Z.M.call(this)};function Xc(t){da.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ut(Xc,da);function Qc(){fa.call(this),this.status=1}ut(Qc,fa);function vi(t){this.g=t}ut(vi,Kc);vi.prototype.xa=function(){lt(this.g,"a")};vi.prototype.wa=function(t){lt(this.g,new Xc(t))};vi.prototype.va=function(t){lt(this.g,new Qc(t))};vi.prototype.ua=function(){lt(this.g,"b")};Rr.prototype.createWebChannel=Rr.prototype.g;kt.prototype.send=kt.prototype.u;kt.prototype.open=kt.prototype.m;kt.prototype.close=kt.prototype.close;mr.NO_ERROR=0;mr.TIMEOUT=8;mr.HTTP_ERROR=6;cc.COMPLETE="complete";dc.EventType=es;es.OPEN="a";es.CLOSE="b";es.ERROR="c";es.MESSAGE="d";st.prototype.listen=st.prototype.N;He.prototype.listenOnce=He.prototype.O;He.prototype.getLastError=He.prototype.La;He.prototype.getLastErrorCode=He.prototype.Da;He.prototype.getStatus=He.prototype.ba;He.prototype.getResponseJson=He.prototype.Qa;He.prototype.getResponseText=He.prototype.ga;He.prototype.send=He.prototype.ea;var Vy=function(){return new Rr},By=function(){return fr()},Da=mr,Hy=cc,xy=zn,Yc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},jy=as,Dr=dc,zy=He;const Jc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Dt.UNAUTHENTICATED=new Dt(null),Dt.GOOGLE_CREDENTIALS=new Dt("google-credentials-uid"),Dt.FIRST_PARTY=new Dt("first-party-uid"),Dt.MOCK_USER=new Dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi="9.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new po("@firebase/firestore");function Zc(){return Xn.logLevel}function W(t,...e){if(Xn.logLevel<=pe.DEBUG){const n=e.map(Oa);Xn.debug(`Firestore (${yi}): ${t}`,...n)}}function An(t,...e){if(Xn.logLevel<=pe.ERROR){const n=e.map(Oa);Xn.error(`Firestore (${yi}): ${t}`,...n)}}function $c(t,...e){if(Xn.logLevel<=pe.WARN){const n=e.map(Oa);Xn.warn(`Firestore (${yi}): ${t}`,...n)}}function Oa(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${yi}) INTERNAL ASSERTION FAILED: `+t;throw An(e),new Error(e)}function xe(t,e){t||ue()}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class qy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Dt.UNAUTHENTICATED))}shutdown(){}}class Wy{constructor(e){this.t=e,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=u=>this.i!==i?(i=this.i,n(u)):Promise.resolve();let r=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new bn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=r;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},o=u=>{W("FirebaseCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>o(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?o(u):(W("FirebaseCredentialsProvider","Auth not yet detected"),r.resolve(),r=new bn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(W("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(xe(typeof i.accessToken=="string"),new Gy(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new Dt(e)}}class Ky{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=Dt.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class Xy{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new Ky(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.g(i),this.p=i=>n.writeSequenceNumber(i))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */La.T=-1;class eh{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=Qy(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function Ee(t,e){return t<e?-1:t>e?1:0}function ds(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return wn.fromMillis(Date.now())}static fromDate(e){return wn.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new wn(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new wn(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Or(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Yy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n,i){n===void 0?n=0:n>e.length&&ue(),i===void 0?i=e.length-n:i>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return fs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fs?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),a=n.get(s);if(r<a)return-1;if(r>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends fs{construct(e,n,i){return new Le(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new K(O.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const Jy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jt extends fs{construct(e,n,i){return new jt(e,n,i)}static isValidIdentifier(e){return Jy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new jt(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new K(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let a=!1;for(;s<e.length;){const o=e[s];if(o==="\\"){if(s+1===e.length)throw new K(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=u,s+=2}else o==="`"?(a=!a,s++):o!=="."||a?(i+=o,s++):(r(),s++)}if(r(),a)throw new K(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new jt(n)}static emptyPath(){return new jt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new mt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new mt(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const Zy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cn(t){if(xe(!!t),typeof t=="string"){let e=0;const n=Zy.exec(t);if(xe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ii(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ih(t){const e=t.mapValue.fields.__previous_value__;return nh(e)?ih(e):e}function ms(t){const e=Cn(t.mapValue.fields.__local_write_time__.timestampValue);return new wn(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t){return t==null}function Na(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Le.fromString(e))}static fromName(e){return new Q(Le.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Le(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nh(t)?4:10:ue()}function Zt(t,e){const n=Qn(t);if(n!==Qn(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ms(t).isEqual(ms(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Cn(i.timestampValue),a=Cn(s.timestampValue);return r.seconds===a.seconds&&r.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ii(i.bytesValue).isEqual(Ii(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return je(i.geoPointValue.latitude)===je(s.geoPointValue.latitude)&&je(i.geoPointValue.longitude)===je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return je(i.integerValue)===je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=je(i.doubleValue),a=je(s.doubleValue);return r===a?Na(r)===Na(a):isNaN(r)&&isNaN(a)}return!1}(t,e);case 9:return ds(t.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:return function(i,s){const r=i.mapValue.fields||{},a=s.mapValue.fields||{};if(th(r)!==th(a))return!1;for(const o in r)if(r.hasOwnProperty(o)&&(a[o]===void 0||!Zt(r[o],a[o])))return!1;return!0}(t,e);default:return ue()}}function ps(t,e){return(t.values||[]).find(n=>Zt(n,e))!==void 0}function _i(t,e){const n=Qn(t),i=Qn(e);if(n!==i)return Ee(n,i);switch(n){case 0:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(s,r){const a=je(s.integerValue||s.doubleValue),o=je(r.integerValue||r.doubleValue);return a<o?-1:a>o?1:a===o?0:isNaN(a)?isNaN(o)?0:-1:1}(t,e);case 3:return sh(t.timestampValue,e.timestampValue);case 4:return sh(ms(t),ms(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(s,r){const a=Ii(s),o=Ii(r);return a.compareTo(o)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const a=s.split("/"),o=r.split("/");for(let u=0;u<a.length&&u<o.length;u++){const c=Ee(a[u],o[u]);if(c!==0)return c}return Ee(a.length,o.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const a=Ee(je(s.latitude),je(r.latitude));return a!==0?a:Ee(je(s.longitude),je(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const a=s.values||[],o=r.values||[];for(let u=0;u<a.length&&u<o.length;++u){const c=_i(a[u],o[u]);if(c)return c}return Ee(a.length,o.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){const a=s.fields||{},o=Object.keys(a),u=r.fields||{},c=Object.keys(u);o.sort(),c.sort();for(let l=0;l<o.length&&l<c.length;++l){const h=Ee(o[l],c[l]);if(h!==0)return h;const d=_i(a[o[l]],u[c[l]]);if(d!==0)return d}return Ee(o.length,c.length)}(t.mapValue,e.mapValue);default:throw ue()}}function sh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=Cn(t),i=Cn(e),s=Ee(n.seconds,i.seconds);return s!==0?s:Ee(n.nanos,i.nanos)}function ka(t){return Ma(t)}function Ma(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=Cn(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ii(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const a of i.values||[])r?r=!1:s+=",",s+=Ma(a);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",a=!0;for(const o of s)a?a=!1:r+=",",r+=`${o}:${Ma(i.fields[o])}`;return r+"}"}(t.mapValue):ue();var e,n}function Pa(t){return!!t&&"integerValue"in t}function Fa(t){return!!t&&"arrayValue"in t}function rh(t){return!!t&&"nullValue"in t}function oh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ua(t){return!!t&&"mapValue"in t}function gs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Or(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=gs(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gs(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.value=e}static empty(){return new ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Ua(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gs(n)}setAll(e){let n=jt.emptyPath(),i={},s=[];e.forEach((a,o)=>{if(!n.isImmediateParentOf(o)){const u=this.getFieldsMap(n);this.applyChanges(u,i,s),i={},s=[],n=o.popLast()}a?i[o.lastSegment()]=gs(a):s.push(o.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Ua(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Ua(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Or(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new ln(gs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,i,s,r){this.key=e,this.documentType=n,this.version=i,this.data=s,this.documentState=r}static newInvalidDocument(e){return new pt(e,0,Ie.min(),ln.empty(),0)}static newFoundDocument(e,n,i){return new pt(e,1,n,i,0)}static newNoDocument(e,n){return new pt(e,2,n,ln.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,ln.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new pt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e,n=null,i=[],s=[],r=null,a=null,o=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=a,this.endAt=o,this.A=null}}function ah(t,e=null,n=[],i=[],s=null,r=null,a=null){return new $y(t,e,n,i,s,r,a)}function Va(t){const e=me(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>tI(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Ei(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Lr(e.startAt)),e.endAt&&(n+="|ub:",n+=Lr(e.endAt)),e.A=n}return e.A}function eI(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${ka(i.value)}`;var i}).join(", ")}]`),Ei(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Lr(t.startAt)),t.endAt&&(e+=", endAt: "+Lr(t.endAt)),`Target(${e})`}function Ba(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!lI(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!Zt(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ch(t.startAt,e.startAt)&&ch(t.endAt,e.endAt)}function Ha(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ot extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,i):new nI(e,n,i):n==="array-contains"?new rI(e,i):n==="in"?new oI(e,i):n==="not-in"?new aI(e,i):n==="array-contains-any"?new uI(e,i):new Ot(e,n,i)}static R(e,n,i){return n==="in"?new iI(e,i):new sI(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(_i(n,this.value)):n!==null&&Qn(this.value)===Qn(n)&&this.P(_i(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function tI(t){return t.field.canonicalString()+t.op.toString()+ka(t.value)}class nI extends Ot{constructor(e,n,i){super(e,n,i),this.key=Q.fromName(i.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.P(n)}}class iI extends Ot{constructor(e,n){super(e,"in",n),this.keys=uh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sI extends Ot{constructor(e,n){super(e,"not-in",n),this.keys=uh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function uh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>Q.fromName(i.referenceValue))}class rI extends Ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fa(n)&&ps(n.arrayValue,this.value)}}class oI extends Ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ps(this.value.arrayValue,n)}}class aI extends Ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ps(this.value.arrayValue,n)}}class uI extends Ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>ps(this.value.arrayValue,i))}}class xa{constructor(e,n){this.position=e,this.before=n}}function Lr(t){return`${t.before?"b":"a"}:${t.position.map(e=>ka(e)).join(",")}`}class vs{constructor(e,n="asc"){this.field=e,this.dir=n}}function lI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function lh(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],a=t.position[s];if(r.field.isKeyField()?i=Q.comparator(Q.fromName(a.referenceValue),n.key):i=_i(a,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return t.before?i<=0:i<0}function ch(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n=null,i=[],s=[],r=null,a="F",o=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=a,this.startAt=o,this.endAt=u,this.V=null,this.S=null,this.startAt,this.endAt}}function cI(t,e,n,i,s,r,a,o){return new Nr(t,e,n,i,s,r,a,o)}function ja(t){return new Nr(t)}function kr(t){return!Ei(t.limit)&&t.limitType==="F"}function Mr(t){return!Ei(t.limit)&&t.limitType==="L"}function hI(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function dI(t){for(const e of t.filters)if(e.v())return e.field;return null}function fI(t){return t.collectionGroup!==null}function ys(t){const e=me(t);if(e.V===null){e.V=[];const n=dI(e),i=hI(e);if(n!==null&&i===null)n.isKeyField()||e.V.push(new vs(n)),e.V.push(new vs(jt.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.V.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new vs(jt.keyField(),r))}}}return e.V}function Yn(t){const e=me(t);if(!e.S)if(e.limitType==="F")e.S=ah(e.path,e.collectionGroup,ys(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of ys(e)){const a=r.dir==="desc"?"asc":"desc";n.push(new vs(r.field,a))}const i=e.endAt?new xa(e.endAt.position,!e.endAt.before):null,s=e.startAt?new xa(e.startAt.position,!e.startAt.before):null;e.S=ah(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.S}function mI(t,e,n){return new Nr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pr(t,e){return Ba(Yn(t),Yn(e))&&t.limitType===e.limitType}function hh(t){return`${Va(Yn(t))}|lt:${t.limitType}`}function za(t){return`Query(target=${eI(Yn(t))}; limitType=${t.limitType})`}function Fr(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Q.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!lh(n.startAt,ys(n),i)||n.endAt&&lh(n.endAt,ys(n),i))}(t,e)}function dh(t){return(e,n)=>{let i=!1;for(const s of ys(t)){const r=pI(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function pI(t,e,n){const i=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,r,a){const o=r.data.field(s),u=a.data.field(s);return o!==null&&u!==null?_i(o,u):ue()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return ue()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Na(e)?"-0":e}}function vI(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this._=void 0}}function yI(t,e,n){return t instanceof Ga?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof Vr?fh(t,e):t instanceof Br?mh(t,e):function(i,s){const r=EI(i,s),a=ph(r)+ph(i.C);return Pa(r)&&Pa(i.C)?vI(a):gI(i.N,a)}(t,e)}function II(t,e,n){return t instanceof Vr?fh(t,e):t instanceof Br?mh(t,e):n}function EI(t,e){return t instanceof qa?Pa(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Ga extends Ur{}class Vr extends Ur{constructor(e){super(),this.elements=e}}function fh(t,e){const n=gh(e);for(const i of t.elements)n.some(s=>Zt(s,i))||n.push(i);return{arrayValue:{values:n}}}class Br extends Ur{constructor(e){super(),this.elements=e}}function mh(t,e){let n=gh(e);for(const i of t.elements)n=n.filter(s=>!Zt(s,i));return{arrayValue:{values:n}}}class qa extends Ur{constructor(e,n){super(),this.N=e,this.C=n}}function ph(t){return je(t.integerValue||t.doubleValue)}function gh(t){return Fa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _I(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Vr&&i instanceof Vr||n instanceof Br&&i instanceof Br?ds(n.elements,i.elements,Zt):n instanceof qa&&i instanceof qa?Zt(n.C,i.C):n instanceof Ga&&i instanceof Ga}(t.transform,e.transform)}function Hr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vh{}function TI(t,e,n){t instanceof Eh?function(i,s,r){const a=i.value.clone(),o=Th(i.fieldTransforms,s,r.transformResults);a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ka?function(i,s,r){if(!Hr(i.precondition,s))return void s.convertToUnknownDocument(r.version);const a=Th(i.fieldTransforms,s,r.transformResults),o=s.data;o.setAll(_h(i)),o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Wa(t,e,n){t instanceof Eh?function(i,s,r){if(!Hr(i.precondition,s))return;const a=i.value.clone(),o=Sh(i.fieldTransforms,r,s);a.setAll(o),s.convertToFoundDocument(Ih(s),a).setHasLocalMutations()}(t,e,n):t instanceof Ka?function(i,s,r){if(!Hr(i.precondition,s))return;const a=Sh(i.fieldTransforms,r,s),o=s.data;o.setAll(_h(i)),o.setAll(a),s.convertToFoundDocument(Ih(s),o).setHasLocalMutations()}(t,e,n):function(i,s){Hr(i.precondition,s)&&s.convertToNoDocument(Ie.min())}(t,e)}function yh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&ds(n,i,(s,r)=>_I(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Ih(t){return t.isFoundDocument()?t.version:Ie.min()}class Eh extends vh{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}}class Ka extends vh{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}}function _h(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Th(t,e,n){const i=new Map;xe(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],a=r.transform,o=e.data.field(r.field);i.set(r.field,II(a,o,n[s]))}return i}function Sh(t,e,n){const i=new Map;for(const s of t){const r=s.transform,a=n.data.field(s.field);i.set(s.field,yI(r,a,e))}return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,he;function Ah(t){if(t===void 0)return An("GRPC error has no .code"),O.UNKNOWN;switch(t){case ze.OK:return O.OK;case ze.CANCELLED:return O.CANCELLED;case ze.UNKNOWN:return O.UNKNOWN;case ze.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case ze.INTERNAL:return O.INTERNAL;case ze.UNAVAILABLE:return O.UNAVAILABLE;case ze.UNAUTHENTICATED:return O.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case ze.NOT_FOUND:return O.NOT_FOUND;case ze.ALREADY_EXISTS:return O.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return O.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case ze.ABORTED:return O.ABORTED;case ze.OUT_OF_RANGE:return O.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return O.UNIMPLEMENTED;case ze.DATA_LOSS:return O.DATA_LOSS;default:return ue()}}(he=ze||(ze={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new bt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new bt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xr(this.root,e,this.comparator,!1)}getReverseIterator(){return new xr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xr(this.root,e,this.comparator,!0)}}class xr{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:ct.RED,this.left=s!=null?s:ct.EMPTY,this.right=r!=null?r:ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new ct(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(t,e,n,i,s){return this}insert(t,e,n){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.comparator=e,this.data=new bt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bh(this.data.getIterator())}getIteratorFrom(e){return new bh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class bh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=new bt(Q.comparator);function Jn(){return AI}const bI=new bt(Q.comparator);function Xa(){return bI}new bt(Q.comparator);const wI=new ht(Q.comparator);function De(...t){let e=wI;for(const n of t)e=e.add(n);return e}const CI=new ht(Ee);function wh(){return CI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const i=new Map;return i.set(e,Is.createSynthesizedTargetChangeForCurrentChange(e,n)),new jr(Ie.min(),i,wh(),Jn(),De())}}class Is{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Is(mt.EMPTY_BYTE_STRING,n,De(),De(),De())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n,i,s){this.k=e,this.removedTargetIds=n,this.key=i,this.$=s}}class Ch{constructor(e,n){this.targetId=e,this.O=n}}class Rh{constructor(e,n,i=mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Dh{constructor(){this.F=0,this.M=Lh(),this.L=mt.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=De(),n=De(),i=De();return this.M.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:ue()}}),new Is(this.L,this.B,e,n,i)}G(){this.U=!1,this.M=Lh()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class RI{constructor(e){this.tt=e,this.et=new Map,this.nt=Jn(),this.st=Oh(),this.it=new ht(Ee)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.ct(n,e.key,e.$);for(const n of e.removedTargetIds)this.ct(n,e.key,e.$)}at(e){this.forEachTarget(e,n=>{const i=this.ut(n);switch(e.state){case 0:this.ht(n)&&i.j(e.resumeToken);break;case 1:i.X(),i.q||i.G(),i.j(e.resumeToken);break;case 2:i.X(),i.q||this.removeTarget(n);break;case 3:this.ht(n)&&(i.Z(),i.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),i.j(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((i,s)=>{this.ht(s)&&n(s)})}ft(e){const n=e.targetId,i=e.O.count,s=this.dt(n);if(s){const r=s.target;if(Ha(r))if(i===0){const a=new Q(r.path);this.ct(n,a,pt.newNoDocument(a,Ie.min()))}else xe(i===1);else this.wt(n)!==i&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((r,a)=>{const o=this.dt(a);if(o){if(r.current&&Ha(o.target)){const u=new Q(o.target.path);this.nt.get(u)!==null||this.gt(a,u)||this.ct(a,u,pt.newNoDocument(u,e))}r.K&&(n.set(a,r.W()),r.G())}});let i=De();this.st.forEach((r,a)=>{let o=!0;a.forEachWhile(u=>{const c=this.dt(u);return!c||c.purpose===2||(o=!1,!1)}),o&&(i=i.add(r))});const s=new jr(e,n,this.it,this.nt,i);return this.nt=Jn(),this.st=Oh(),this.it=new ht(Ee),s}ot(e,n){if(!this.ht(e))return;const i=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,i),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}ct(e,n,i){if(!this.ht(e))return;const s=this.ut(e);this.gt(e,n)?s.H(n,1):s.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),i&&(this.nt=this.nt.insert(n,i))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new Dh,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new ht(Ee),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new Dh),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function Oh(){return new bt(Q.comparator)}function Lh(){return new bt(Q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),OI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class LI{constructor(e,n){this.databaseId=e,this.D=n}}function NI(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kI(t,e){return t.D?e.toBase64():e.toUint8Array()}function Es(t){return xe(!!t),Ie.fromTimestamp(function(e){const n=Cn(e);return new wn(n.seconds,n.nanos)}(t))}function MI(t,e){return function(n){return new Le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Nh(t){const e=Le.fromString(t);return xe(Vh(e)),e}function Qa(t,e){const n=Nh(e);if(n.get(1)!==t.databaseId.projectId)throw new K(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(Mh(n))}function Ya(t,e){return MI(t.databaseId,e)}function PI(t){const e=Nh(t);return e.length===4?Le.emptyPath():Mh(e)}function kh(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Mh(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function FI(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(u,c){return u.D?(xe(c===void 0||typeof c=="string"),mt.fromBase64String(c||"")):(xe(c===void 0||c instanceof Uint8Array),mt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,o=a&&function(u){const c=u.code===void 0?O.UNKNOWN:Ah(u.code);return new K(c,u.message||"")}(a);n=new Rh(i,s,r,o||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Qa(t,i.document.name),r=Es(i.document.updateTime),a=new ln({mapValue:{fields:i.document.fields}}),o=pt.newFoundDocument(s,r,a),u=i.targetIds||[],c=i.removedTargetIds||[];n=new zr(u,c,o.key,o)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Qa(t,i.document),r=i.readTime?Es(i.readTime):Ie.min(),a=pt.newNoDocument(s,r),o=i.removedTargetIds||[];n=new zr([],o,a.key,a)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Qa(t,i.document),r=i.removedTargetIds||[];n=new zr([],r,s,null)}else{if(!("filter"in e))return ue();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new SI(s),a=i.targetId;n=new Ch(a,r)}}return n}function UI(t,e){return{documents:[Ya(t,e.path)]}}function VI(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Ya(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ya(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(o){if(o.length===0)return;const u=o.map(c=>function(l){if(l.op==="=="){if(oh(l.value))return{unaryFilter:{field:Ti(l.field),op:"IS_NAN"}};if(rh(l.value))return{unaryFilter:{field:Ti(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(oh(l.value))return{unaryFilter:{field:Ti(l.field),op:"IS_NOT_NAN"}};if(rh(l.value))return{unaryFilter:{field:Ti(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ti(l.field),op:jI(l.op),value:l.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(o){if(o.length!==0)return o.map(u=>function(c){return{field:Ti(c.field),direction:xI(c.dir)}}(u))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const a=function(o,u){return o.D||Ei(u)?u:{value:u}}(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=Fh(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Fh(e.endAt)),n}function BI(t){let e=PI(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){xe(i===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let r=[];n.where&&(r=Ph(n.where));let a=[];n.orderBy&&(a=n.orderBy.map(l=>function(h){return new vs(Si(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let o=null;n.limit&&(o=function(l){let h;return h=typeof l=="object"?l.value:l,Ei(h)?null:h}(n.limit));let u=null;n.startAt&&(u=Uh(n.startAt));let c=null;return n.endAt&&(c=Uh(n.endAt)),cI(e,s,a,r,o,"F",u,c)}function HI(t,e){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ue()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ph(t){return t?t.unaryFilter!==void 0?[GI(t)]:t.fieldFilter!==void 0?[zI(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Ph(e)).reduce((e,n)=>e.concat(n)):ue():[]}function Fh(t){return{before:t.before,values:t.position}}function Uh(t){const e=!!t.before,n=t.values||[];return new xa(n,e)}function xI(t){return DI[t]}function jI(t){return OI[t]}function Ti(t){return{fieldPath:t.canonicalString()}}function Si(t){return jt.fromServerFormat(t.fieldPath)}function zI(t){return Ot.create(Si(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(t.fieldFilter.op),t.fieldFilter.value)}function GI(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Si(t.unaryFilter.field);return Ot.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Si(t.unaryFilter.field);return Ot.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Si(t.unaryFilter.field);return Ot.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Si(t.unaryFilter.field);return Ot.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}function Vh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const qI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,i)=>{n(e)})}static reject(e){return new F((n,i)=>{i(e)})}static waitFor(e){return new F((n,i)=>{let s=0,r=0,a=!1;e.forEach(o=>{++s,o.next(()=>{++r,a&&r===s&&n()},u=>i(u))}),a=!0,r===s&&n()})}static or(e){let n=F.resolve(!1);for(const i of e)n=n.next(s=>s?F.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}}function _s(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&TI(r,e,i[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Wa(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Wa(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const i=e.get(n.key),s=i;this.applyToLocalView(s),i.isValidDocument()||s.convertToNoDocument(Ie.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),De())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,(n,i)=>yh(n,i))&&ds(this.baseMutations,e.baseMutations,(n,i)=>yh(n,i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,i,s,r=Ie.min(),a=Ie.min(),o=mt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.Wt=e}}function QI(t){const e=BI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mI(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(){this.Gt=new JI}addToCollectionParentIndex(e,n){return this.Gt.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Gt.getEntries(n))}}class JI{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new ht(Le.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new ht(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new Ai(0)}static ie(){return new Ai(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ja(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==qI)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s!==void 0){for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n])}else this.inner[i]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),!0;return!1}forEach(e){Or(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Yy(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this.changes=new Ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:Ie.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:pt.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?F.resolve(i.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,n,i){this.He=e,this.In=n,this.Ht=i}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(i=>this.Rn(e,n,i))}Rn(e,n,i){return this.He.getEntry(e,n).next(s=>{for(const r of i)r.applyToLocalView(s);return s})}bn(e,n){e.forEach((i,s)=>{for(const r of n)r.applyToLocalView(s)})}Pn(e,n){return this.He.getEntries(e,n).next(i=>this.vn(e,i).next(()=>i))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(i=>this.bn(n,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return Q.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Vn(e,n.path):fI(n)?this.Sn(e,n,i):this.Dn(e,n,i)}Vn(e,n){return this.An(e,new Q(n)).next(i=>{let s=Xa();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}Sn(e,n,i){const s=n.collectionGroup;let r=Xa();return this.Ht.getCollectionParents(e,s).next(a=>F.forEach(a,o=>{const u=function(c,l){return new Nr(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,o.child(s));return this.Dn(e,u,i).next(c=>{c.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}Dn(e,n,i){let s,r;return this.He.getDocumentsMatchingQuery(e,n,i).next(a=>(s=a,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(a=>(r=a,this.Cn(e,r,s).next(o=>{s=o;for(const u of r)for(const c of u.mutations){const l=c.key;let h=s.get(l);h==null&&(h=pt.newInvalidDocument(l),s=s.insert(l,h)),Wa(c,h,u.localWriteTime),h.isFoundDocument()||(s=s.remove(l))}}))).next(()=>(s.forEach((a,o)=>{Fr(n,o)||(s=s.remove(a))}),s))}Cn(e,n,i){let s=De();for(const a of n)for(const o of a.mutations)o instanceof Ka&&i.get(o.key)===null&&(s=s.add(o.key));let r=i;return this.He.getEntries(e,s).next(a=>(a.forEach((o,u)=>{u.isFoundDocument()&&(r=r.insert(o,u))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Nn=i,this.xn=s}static kn(e,n){let i=De(),s=De();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Za(e,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,i,s){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||i.isEqual(Ie.min())?this.Fn(e,n):this.On.Pn(e,s).next(r=>{const a=this.Mn(n,r);return(kr(n)||Mr(n))&&this.Ln(n.limitType,a,s,i)?this.Fn(e,n):(Zc()<=pe.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),za(n)),this.On.getDocumentsMatchingQuery(e,n,i).next(o=>(a.forEach(u=>{o=o.insert(u.key,u)}),o)))})}Mn(e,n){let i=new ht(dh(e));return n.forEach((s,r)=>{Fr(e,r)&&(i=i.add(r))}),i}Ln(e,n,i,s){if(i.size!==n.size)return!0;const r=e==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Fn(e,n){return Zc()<=pe.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",za(n)),this.On.getDocumentsMatchingQuery(e,n,Ie.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,n,i,s){this.persistence=e,this.Bn=n,this.N=s,this.Un=new bt(Ee),this.qn=new Ts(r=>Va(r),Ba),this.Kn=Ie.min(),this.In=e.getMutationQueue(i),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new Bh(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function tE(t,e,n,i){return new eE(t,e,n,i)}async function Hh(t,e){const n=me(t);let i=n.In,s=n.Qn;const r=await n.persistence.runTransaction("Handle user change","readonly",a=>{let o;return n.In.getAllMutationBatches(a).next(u=>(o=u,i=n.persistence.getMutationQueue(e),s=new Bh(n.jn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(a))).next(u=>{const c=[],l=[];let h=De();for(const d of o){c.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}for(const d of u){l.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}return s.Pn(a,h).next(d=>({Wn:d,removedBatchIds:c,addedBatchIds:l}))})});return n.In=i,n.Qn=s,n.Bn.$n(n.Qn),r}function xh(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function nE(t,e){const n=me(t),i=e.snapshotVersion;let s=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const a=n.jn.newChangeBuffer({trackRemovals:!0});s=n.Un;const o=[];e.targetChanges.forEach((c,l)=>{const h=s.get(l);if(!h)return;o.push(n.ze.removeMatchingKeys(r,c.removedDocuments,l).next(()=>n.ze.addMatchingKeys(r,c.addedDocuments,l)));const d=c.resumeToken;if(d.approximateByteSize()>0){const f=h.withResumeToken(d,i).withSequenceNumber(r.currentSequenceNumber);s=s.insert(l,f),function(m,y,g){return xe(y.resumeToken.approximateByteSize()>0),m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(h,f,c)&&o.push(n.ze.updateTargetData(r,f))}});let u=Jn();if(e.documentUpdates.forEach((c,l)=>{e.resolvedLimboDocuments.has(c)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),o.push(iE(r,a,e.documentUpdates,i,void 0).next(c=>{u=c})),!i.isEqual(Ie.min())){const c=n.ze.getLastRemoteSnapshotVersion(r).next(l=>n.ze.setTargetsMetadata(r,r.currentSequenceNumber,i));o.push(c)}return F.waitFor(o).next(()=>a.apply(r)).next(()=>n.Qn.vn(r,u)).next(()=>u)}).then(r=>(n.Un=s,r))}function iE(t,e,n,i,s){let r=De();return n.forEach(a=>r=r.add(a)),e.getEntries(t,r).next(a=>{let o=Jn();return n.forEach((u,c)=>{const l=a.get(u),h=(s==null?void 0:s.get(u))||i;c.isNoDocument()&&c.version.isEqual(Ie.min())?(e.removeEntry(u,h),o=o.insert(u,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c,h),o=o.insert(u,c)):W("LocalStore","Ignoring outdated watch update for ",u,". Current version:",l.version," Watch version:",c.version)}),o})}function sE(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.ze.getTargetData(i,e).next(r=>r?(s=r,F.resolve(s)):n.ze.allocateTargetId(i).next(a=>(s=new Zn(e,a,0,i.currentSequenceNumber),n.ze.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Un.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Un=n.Un.insert(i.targetId,i),n.qn.set(e,i.targetId)),i})}async function $a(t,e,n){const i=me(t),s=i.Un.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,a=>i.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!_s(a))throw a;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}i.Un=i.Un.remove(e),i.qn.delete(s.target)}function jh(t,e,n){const i=me(t);let s=Ie.min(),r=De();return i.persistence.runTransaction("Execute query","readonly",a=>function(o,u,c){const l=me(o),h=l.qn.get(c);return h!==void 0?F.resolve(l.Un.get(h)):l.ze.getTargetData(u,c)}(i,a,Yn(e)).next(o=>{if(o)return s=o.lastLimboFreeSnapshotVersion,i.ze.getMatchingKeysForTargetId(a,o.targetId).next(u=>{r=u})}).next(()=>i.Bn.getDocumentsMatchingQuery(a,e,n?s:Ie.min(),n?r:De())).next(o=>({documents:o,Gn:r})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return F.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var i;return this.Yn.set(n.id,{id:(i=n).id,version:i.version,createTime:Es(i.createTime)}),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:QI(i.bundledQuery),readTime:Es(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(){this.Zn=new ht(rt.ts),this.es=new ht(rt.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const i=new rt(e,n);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.rs(new rt(e,n))}os(e,n){e.forEach(i=>this.removeReference(i,n))}cs(e){const n=new Q(new Le([])),i=new rt(n,e),s=new rt(n,e+1),r=[];return this.es.forEachInRange([i,s],a=>{this.rs(a),r.push(a.key)}),r}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new Q(new Le([])),i=new rt(n,e),s=new rt(n,e+1);let r=De();return this.es.forEachInRange([i,s],a=>{r=r.add(a.key)}),r}containsKey(e){const n=new rt(e,0),i=this.Zn.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class rt{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return Q.comparator(e.key,n.key)||Ee(e.ls,n.ls)}static ns(e,n){return Ee(e.ls,n.ls)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new ht(rt.ts)}checkEmpty(e){return F.resolve(this.In.length===0)}addMutationBatch(e,n,i,s){const r=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const a=new KI(r,n,i,s);this.In.push(a);for(const o of s)this.ds=this.ds.add(new rt(o.key,r)),this.Ht.addToCollectionParentIndex(e,o.key.path.popLast());return F.resolve(a)}lookupMutationBatch(e,n){return F.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this._s(i),r=s<0?0:s;return F.resolve(this.In.length>r?this.In[r]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return F.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new rt(n,0),s=new rt(n,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([i,s],a=>{const o=this.ws(a.ls);r.push(o)}),F.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new ht(Ee);return n.forEach(s=>{const r=new rt(s,0),a=new rt(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,a],o=>{i=i.add(o.ls)})}),F.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;Q.isDocumentKey(r)||(r=r.child(""));const a=new rt(new Q(r),0);let o=new ht(Ee);return this.ds.forEachWhile(u=>{const c=u.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(o=o.add(u.ls)),!0)},a),F.resolve(this.gs(o))}gs(e){const n=[];return e.forEach(i=>{const s=this.ws(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){xe(this.ys(n.batchId,"removed")===0),this.In.shift();let i=this.ds;return F.forEach(n.mutations,s=>{const r=new rt(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=i})}te(e){}containsKey(e,n){const i=new rt(n,0),s=this.ds.firstAfterOrEqual(i);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.In.length,F.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new bt(Q.comparator),this.size=0}addEntry(e,n,i){const s=n.key,r=this.docs.get(s),a=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.clone(),size:o,readTime:i}),this.size+=o-a,this.Ht.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return F.resolve(i?i.document.clone():pt.newInvalidDocument(n))}getEntries(e,n){let i=Jn();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.clone():pt.newInvalidDocument(s))}),F.resolve(i)}getDocumentsMatchingQuery(e,n,i){let s=Jn();const r=new Q(n.path.child("")),a=this.docs.getIteratorFrom(r);for(;a.hasNext();){const{key:o,value:{document:u,readTime:c}}=a.getNext();if(!n.path.isPrefixOf(o.path))break;c.compareTo(i)<=0||Fr(n,u)&&(s=s.insert(u.key,u.clone()))}return F.resolve(s)}Ts(e,n){return F.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new uE(this)}getSize(e){return F.resolve(this.size)}}class uE extends ZI{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.document.isValidDocument()?n.push(this.Se.addEntry(e,s.document,this.getReadTime(i))):this.Se.removeEntry(i)}),F.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.persistence=e,this.Es=new Ts(n=>Va(n),Ba),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.Is=0,this.As=new eu,this.targetCount=0,this.Rs=Ai.se()}forEachTarget(e,n){return this.Es.forEach((i,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Is&&(this.Is=n),F.resolve()}ce(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Ai(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.ce(n),F.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Es.forEach((a,o)=>{o.sequenceNumber<=n&&i.get(o.targetId)===null&&(this.Es.delete(a),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),s++)}),F.waitFor(r).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const i=this.Es.get(n)||null;return F.resolve(i)}addMatchingKeys(e,n,i){return this.As.ss(n,i),F.resolve()}removeMatchingKeys(e,n,i){this.As.os(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(a=>{r.push(s.markPotentiallyOrphaned(e,a))}),F.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),F.resolve()}getMatchingKeysForTargetId(e,n){const i=this.As.hs(n);return F.resolve(i)}containsKey(e,n){return F.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,n){this.bs={},this.Le=new La(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new lE(this),this.Ht=new YI,this.He=function(i,s){return new aE(i,s)}(this.Ht,i=>this.referenceDelegate.Ps(i)),this.N=new XI(n),this.Je=new rE(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new oE(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,i){W("MemoryPersistence","Starting transaction:",e);const s=new hE(this.Le.next());return this.referenceDelegate.vs(),i(s).next(r=>this.referenceDelegate.Vs(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ss(e,n){return F.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,n)))}}class hE extends WI{constructor(e){super(),this.currentSequenceNumber=e}}class tu{constructor(e){this.persistence=e,this.Ds=new eu,this.Cs=null}static Ns(e){return new tu(e)}get xs(){if(this.Cs)return this.Cs;throw ue()}addReference(e,n,i){return this.Ds.addReference(i,n),this.xs.delete(i.toString()),F.resolve()}removeReference(e,n,i){return this.Ds.removeReference(i,n),this.xs.add(i.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(s=>this.xs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.xs.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.xs,i=>{const s=Q.fromPath(i);return this.ks(e,s).next(r=>{r||n.removeEntry(s)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(i=>{i?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return F.or([()=>F.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class zh{constructor(){this.activeTargetIds=wh()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dE{constructor(){this.yi=new zh,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,i){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new zh,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{Ti(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,i,s){const r=this.Bi(e,n);W("RestConnection","Sending: ",r,i);const a={};return this.Ui(a,s),this.qi(e,r,a,i).then(o=>(W("RestConnection","Received: ",o),o),o=>{throw $c("RestConnection",`${e} failed with error: `,o,"url: ",r,"request:",i),o})}Ki(e,n,i,s){return this.Li(e,n,i,s)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+yi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const i in n.authHeaders)n.authHeaders.hasOwnProperty(i)&&(e[i]=n.authHeaders[i])}Bi(e,n){const i=mE[e];return`${this.Fi}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,i,s){return new Promise((r,a)=>{const o=new zy;o.listenOnce(Hy.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case Da.NO_ERROR:const c=o.getResponseJson();W("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Da.TIMEOUT:W("Connection",'RPC "'+e+'" timed out'),a(new K(O.DEADLINE_EXCEEDED,"Request time out"));break;case Da.HTTP_ERROR:const l=o.getStatus();if(W("Connection",'RPC "'+e+'" failed with status:',l,"response text:",o.getResponseText()),l>0){const h=o.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const m=f.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(m)>=0?m:O.UNKNOWN}(h.status);a(new K(d,h.message))}else a(new K(O.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new K(O.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{W("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(s);o.send(n,"POST",u,i,15)})}ji(e,n){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Vy(),r=By(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new jy({})),this.Ui(a.initMessageHeaders,n),Du()||Lu()||rm()||Nu()||om()||Ou()||(a.httpHeadersOverwriteParam="$httpHeaders");const o=i.join("");W("Connection","Creating WebChannel: "+o,a);const u=s.createWebChannel(o,a);let c=!1,l=!1;const h=new pE({vi:f=>{l?W("Connection","Not sending because WebChannel is closed:",f):(c||(W("Connection","Opening WebChannel transport."),u.open(),c=!0),W("Connection","WebChannel sending:",f),u.send(f))},Vi:()=>u.close()}),d=(f,m,y)=>{f.listen(m,g=>{try{y(g)}catch(v){setTimeout(()=>{throw v},0)}})};return d(u,Dr.EventType.OPEN,()=>{l||W("Connection","WebChannel transport opened.")}),d(u,Dr.EventType.CLOSE,()=>{l||(l=!0,W("Connection","WebChannel transport closed"),h.$i())}),d(u,Dr.EventType.ERROR,f=>{l||(l=!0,$c("Connection","WebChannel transport errored:",f),h.$i(new K(O.UNAVAILABLE,"The operation could not be completed")))}),d(u,Dr.EventType.MESSAGE,f=>{var m;if(!l){const y=f.data[0];xe(!!y);const g=y,v=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(v){W("Connection","WebChannel received error:",v);const I=v.status;let _=function(x){const b=ze[x];if(b!==void 0)return Ah(b)}(I),M=v.message;_===void 0&&(_=O.INTERNAL,M="Unknown error status: "+I+" with message "+v.message),l=!0,h.$i(new K(_,M)),u.close()}else W("Connection","WebChannel received:",y),h.Oi(y)}}),d(r,xy.STAT_EVENT,f=>{f.stat===Yc.PROXY?W("Connection","Detected buffering proxy"):f.stat===Yc.NOPROXY&&W("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function nu(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t){return new LI(t,!0)}class Wh{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Oe=e,this.timerId=n,this.Qi=i,this.Wi=s,this.Gi=r,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),i=Math.max(0,Date.now()-this.Ji),s=Math.max(0,n-i);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,n,i,s,r,a,o){this.Oe=e,this.er=i,this.nr=s,this.sr=r,this.credentialsProvider=a,this.listener=o,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new Wh(e,n)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),n=this.ir;this.credentialsProvider.getToken().then(i=>{this.ir===n&&this.Er(i)},i=>{e(()=>{const s=new K(O.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Ir(s)})})}Er(e){const n=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(i=>{n(()=>this.Ir(i))}),this.stream.onMessage(i=>{n(()=>this.onMessage(i))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return n=>{this.Oe.enqueueAndForget(()=>this.ir===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yE extends vE{constructor(e,n,i,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r),this.N=s}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const n=FI(this.N,e),i=function(s){if(!("targetChange"in s))return Ie.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?Ie.min():r.readTime?Es(r.readTime):Ie.min()}(e);return this.listener.Rr(n,i)}br(e){const n={};n.database=kh(this.N),n.addTarget=function(s,r){let a;const o=r.target;return a=Ha(o)?{documents:UI(s,o)}:{query:VI(s,o)},a.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?a.resumeToken=kI(s,r.resumeToken):r.snapshotVersion.compareTo(Ie.min())>0&&(a.readTime=NI(s,r.snapshotVersion.toTimestamp())),a}(this.N,e);const i=HI(this.N,e);i&&(n.labels=i),this.mr(n)}Pr(e){const n={};n.database=kh(this.N),n.removeTarget=e,this.mr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE extends class{}{constructor(e,n,i){super(),this.credentials=e,this.sr=n,this.N=i,this.kr=!1}$r(){if(this.kr)throw new K(O.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,i){return this.$r(),this.credentials.getToken().then(s=>this.sr.Li(e,n,i,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new K(O.UNKNOWN,s.toString())})}Ki(e,n,i){return this.$r(),this.credentials.getToken().then(s=>this.sr.Ki(e,n,i,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new K(O.UNKNOWN,s.toString())})}terminate(){this.kr=!0}}class EE{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(An(n),this.Mr=!1):W("OnlineStateTracker",n)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=r,this.zr.Ti(a=>{i.enqueueAndForget(async()=>{As(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(o){const u=me(o);u.Wr.add(4),await Ss(u),u.Hr.set("Unknown"),u.Wr.delete(4),await Gr(u)}(this))})}),this.Hr=new EE(i,s)}}async function Gr(t){if(As(t))for(const e of t.Gr)await e(!0)}async function Ss(t){for(const e of t.Gr)await e(!1)}function Kh(t,e){const n=me(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),ru(n)?su(n):bi(n).hr()&&iu(n,e))}function Xh(t,e){const n=me(t),i=bi(n);n.Qr.delete(e),i.hr()&&Qh(n,e),n.Qr.size===0&&(i.hr()?i.wr():As(n)&&n.Hr.set("Unknown"))}function iu(t,e){t.Jr.Y(e.targetId),bi(t).br(e)}function Qh(t,e){t.Jr.Y(e),bi(t).Pr(e)}function su(t){t.Jr=new RI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),bi(t).start(),t.Hr.Lr()}function ru(t){return As(t)&&!bi(t).ur()&&t.Qr.size>0}function As(t){return me(t).Wr.size===0}function Yh(t){t.Jr=void 0}async function TE(t){t.Qr.forEach((e,n)=>{iu(t,e)})}async function SE(t,e){Yh(t),ru(t)?(t.Hr.qr(e),su(t)):t.Hr.set("Unknown")}async function AE(t,e,n){if(t.Hr.set("Online"),e instanceof Rh&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const a of s.targetIds)i.Qr.has(a)&&(await i.remoteSyncer.rejectListen(a,r),i.Qr.delete(a),i.Jr.removeTarget(a))}(t,e)}catch(i){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Jh(t,i)}else if(e instanceof zr?t.Jr.rt(e):e instanceof Ch?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(Ie.min()))try{const i=await xh(t.localStore);n.compareTo(i)>=0&&await function(s,r){const a=s.Jr._t(r);return a.targetChanges.forEach((o,u)=>{if(o.resumeToken.approximateByteSize()>0){const c=s.Qr.get(u);c&&s.Qr.set(u,c.withResumeToken(o.resumeToken,r))}}),a.targetMismatches.forEach(o=>{const u=s.Qr.get(o);if(!u)return;s.Qr.set(o,u.withResumeToken(mt.EMPTY_BYTE_STRING,u.snapshotVersion)),Qh(s,o);const c=new Zn(u.target,o,1,u.sequenceNumber);iu(s,c)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(i){W("RemoteStore","Failed to raise snapshot:",i),await Jh(t,i)}}async function Jh(t,e,n){if(!_s(e))throw e;t.Wr.add(1),await Ss(t),t.Hr.set("Offline"),n||(n=()=>xh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await Gr(t)})}async function bE(t,e){const n=me(t);e?(n.Wr.delete(2),await Gr(n)):e||(n.Wr.add(2),await Ss(n),n.Hr.set("Unknown"))}function bi(t){return t.Yr||(t.Yr=function(e,n,i){const s=me(e);return s.$r(),new yE(n,s.sr,s.credentials,s.N,i)}(t.datastore,t.asyncQueue,{Si:TE.bind(null,t),Ci:SE.bind(null,t),Rr:AE.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),ru(t)?su(t):t.Hr.set("Unknown")):(await t.Yr.stop(),Yh(t))})),t.Yr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(e,n,i,s,r){const a=Date.now()+i,o=new ou(e,n,a,s,r);return o.start(i),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zh(t,e){if(An("AsyncQueue",`${e}: ${t}`),_s(t))return new K(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.comparator=e?(n,i)=>e(n,i)||Q.comparator(n.key,i.key):(n,i)=>Q.comparator(n.key,i.key),this.keyedMap=Xa(),this.sortedSet=new bt(this.comparator)}static emptySet(e){return new wi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof wi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new wi;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(){this.Zr=new bt(Q.comparator)}track(e){const n=e.doc.key,i=this.Zr.get(n);i?e.type!==0&&i.type===3?this.Zr=this.Zr.insert(n,e):e.type===3&&i.type!==1?this.Zr=this.Zr.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Zr=this.Zr.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Zr=this.Zr.remove(n):e.type===1&&i.type===2?this.Zr=this.Zr.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):ue():this.Zr=this.Zr.insert(n,e)}eo(){const e=[];return this.Zr.inorderTraversal((n,i)=>{e.push(i)}),e}}class Ci{constructor(e,n,i,s,r,a,o,u){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,i,s){const r=[];return n.forEach(a=>{r.push({type:0,doc:a})}),new Ci(e,n,wi.emptySet(n),r,i,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(){this.no=void 0,this.listeners=[]}}class CE{constructor(){this.queries=new Ts(e=>hh(e),Pr),this.onlineState="Unknown",this.so=new Set}}async function ed(t,e){const n=me(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new wE),s)try{r.no=await n.onListen(i)}catch(a){const o=Zh(a,`Initialization of query '${za(e.query)}' failed`);return void e.onError(o)}n.queries.set(i,r),r.listeners.push(e),e.io(n.onlineState),r.no&&e.ro(r.no)&&au(n)}async function td(t,e){const n=me(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const a=r.listeners.indexOf(e);a>=0&&(r.listeners.splice(a,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function RE(t,e){const n=me(t);let i=!1;for(const s of e){const r=s.query,a=n.queries.get(r);if(a){for(const o of a.listeners)o.ro(s)&&(i=!0);a.no=s}}i&&au(n)}function DE(t,e,n){const i=me(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function au(t){t.so.forEach(e=>{e.next()})}class nd{constructor(e,n,i){this.query=e,this.oo=n,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=i||{}}ro(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Ci(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.uo(e)&&(this.oo.next(e),n=!0):this.ho(e,this.onlineState)&&(this.lo(e),n=!0),this.ao=e,n}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let n=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),n=!0),n}ho(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.fo||!i)&&(!e.docs.isEmpty()||n==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const n=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}lo(e){e=Ci.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.key=e}}class sd{constructor(e){this.key=e}}class OE{constructor(e,n){this.query=e,this.po=n,this.To=null,this.current=!1,this.Eo=De(),this.mutatedKeys=De(),this.Io=dh(e),this.Ao=new wi(this.Io)}get Ro(){return this.po}bo(e,n){const i=n?n.Po:new $h,s=n?n.Ao:this.Ao;let r=n?n.mutatedKeys:this.mutatedKeys,a=s,o=!1;const u=kr(this.query)&&s.size===this.query.limit?s.last():null,c=Mr(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),f=Fr(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let g=!1;d&&f?d.data.isEqual(f.data)?m!==y&&(i.track({type:3,doc:f}),g=!0):this.vo(d,f)||(i.track({type:2,doc:f}),g=!0,(u&&this.Io(f,u)>0||c&&this.Io(f,c)<0)&&(o=!0)):!d&&f?(i.track({type:0,doc:f}),g=!0):d&&!f&&(i.track({type:1,doc:d}),g=!0,(u||c)&&(o=!0)),g&&(f?(a=a.add(f),r=y?r.add(l):r.delete(l)):(a=a.delete(l),r=r.delete(l)))}),kr(this.query)||Mr(this.query))for(;a.size>this.query.limit;){const l=kr(this.query)?a.last():a.first();a=a.delete(l.key),r=r.delete(l.key),i.track({type:1,doc:l})}return{Ao:a,Po:i,Ln:o,mutatedKeys:r}}vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const r=e.Po.eo();r.sort((c,l)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return f(h)-f(d)}(c.type,l.type)||this.Io(c.doc,l.doc)),this.Vo(i);const a=n?this.So():[],o=this.Eo.size===0&&this.current?1:0,u=o!==this.To;return this.To=o,r.length!==0||u?{snapshot:new Ci(this.query,e.Ao,s,r,e.mutatedKeys,o===0,u,!1),Do:a}:{Do:a}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new $h,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(n=>this.po=this.po.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.po=this.po.delete(n)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=De(),this.Ao.forEach(i=>{this.Co(i.key)&&(this.Eo=this.Eo.add(i.key))});const n=[];return e.forEach(i=>{this.Eo.has(i)||n.push(new sd(i))}),this.Eo.forEach(i=>{e.has(i)||n.push(new id(i))}),n}No(e){this.po=e.Gn,this.Eo=De();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return Ci.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class LE{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class NE{constructor(e){this.key=e,this.ko=!1}}class kE{constructor(e,n,i,s,r,a){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.$o={},this.Oo=new Ts(o=>hh(o),Pr),this.Fo=new Map,this.Mo=new Set,this.Lo=new bt(Q.comparator),this.Bo=new Map,this.Uo=new eu,this.qo={},this.Ko=new Map,this.jo=Ai.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function ME(t,e){const n=xE(t);let i,s;const r=n.Oo.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.xo();else{const a=await sE(n.localStore,Yn(e)),o=n.sharedClientState.addLocalQueryTarget(a.targetId);i=a.targetId,s=await PE(n,e,i,o==="current"),n.isPrimaryClient&&Kh(n.remoteStore,a)}return s}async function PE(t,e,n,i){t.Wo=(l,h,d)=>async function(f,m,y,g){let v=m.view.bo(y);v.Ln&&(v=await jh(f.localStore,m.query,!1).then(({documents:M})=>m.view.bo(M,v)));const I=g&&g.targetChanges.get(m.targetId),_=m.view.applyChanges(v,f.isPrimaryClient,I);return ud(f,m.targetId,_.Do),_.snapshot}(t,l,h,d);const s=await jh(t.localStore,e,!0),r=new OE(e,s.Gn),a=r.bo(s.documents),o=Is.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline"),u=r.applyChanges(a,t.isPrimaryClient,o);ud(t,n,u.Do);const c=new LE(e,n,r);return t.Oo.set(e,c),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),u.snapshot}async function FE(t,e){const n=me(t),i=n.Oo.get(e),s=n.Fo.get(i.targetId);if(s.length>1)return n.Fo.set(i.targetId,s.filter(r=>!Pr(r,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await $a(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Xh(n.remoteStore,i.targetId),uu(n,i.targetId)}).catch(Ja)):(uu(n,i.targetId),await $a(n.localStore,i.targetId,!0))}async function rd(t,e){const n=me(t);try{const i=await nE(n.localStore,e);e.targetChanges.forEach((s,r)=>{const a=n.Bo.get(r);a&&(xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.ko=!0:s.modifiedDocuments.size>0?xe(a.ko):s.removedDocuments.size>0&&(xe(a.ko),a.ko=!1))}),await ld(n,i,e)}catch(i){await Ja(i)}}function od(t,e,n){const i=me(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Oo.forEach((r,a)=>{const o=a.view.io(e);o.snapshot&&s.push(o.snapshot)}),function(r,a){const o=me(r);o.onlineState=a;let u=!1;o.queries.forEach((c,l)=>{for(const h of l.listeners)h.io(a)&&(u=!0)}),u&&au(o)}(i.eventManager,e),s.length&&i.$o.Rr(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function UE(t,e,n){const i=me(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Bo.get(e),r=s&&s.key;if(r){let a=new bt(Q.comparator);a=a.insert(r,pt.newNoDocument(r,Ie.min()));const o=De().add(r),u=new jr(Ie.min(),new Map,new ht(Ee),a,o);await rd(i,u),i.Lo=i.Lo.remove(r),i.Bo.delete(e),lu(i)}else await $a(i.localStore,e,!1).then(()=>uu(i,e,n)).catch(Ja)}function uu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Fo.get(e))t.Oo.delete(i),n&&t.$o.Go(i,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(i=>{t.Uo.containsKey(i)||ad(t,i)})}function ad(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);n!==null&&(Xh(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),lu(t))}function ud(t,e,n){for(const i of n)i instanceof id?(t.Uo.addReference(i.key,e),VE(t,i)):i instanceof sd?(W("SyncEngine","Document no longer in limbo: "+i.key),t.Uo.removeReference(i.key,e),t.Uo.containsKey(i.key)||ad(t,i.key)):ue()}function VE(t,e){const n=e.key,i=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(i)||(W("SyncEngine","New document in limbo: "+n),t.Mo.add(i),lu(t))}function lu(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new Q(Le.fromString(e)),i=t.jo.next();t.Bo.set(i,new NE(n)),t.Lo=t.Lo.insert(n,i),Kh(t.remoteStore,new Zn(Yn(ja(n.path)),i,2,La.T))}}async function ld(t,e,n){const i=me(t),s=[],r=[],a=[];i.Oo.isEmpty()||(i.Oo.forEach((o,u)=>{a.push(i.Wo(u,e,n).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(u.targetId,c.fromCache?"not-current":"current"),s.push(c);const l=Za.kn(u.targetId,c);r.push(l)}}))}),await Promise.all(a),i.$o.Rr(s),await async function(o,u){const c=me(o);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>F.forEach(u,h=>F.forEach(h.Nn,d=>c.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>F.forEach(h.xn,d=>c.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!_s(l))throw l;W("LocalStore","Failed to update sequence numbers: "+l)}for(const l of u){const h=l.targetId;if(!l.fromCache){const d=c.Un.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);c.Un=c.Un.insert(h,m)}}}(i.localStore,r))}async function BE(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const i=await Hh(n.localStore,e);n.currentUser=e,function(s,r){s.Ko.forEach(a=>{a.forEach(o=>{o.reject(new K(O.CANCELLED,r))})}),s.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ld(n,i.Wn)}}function HE(t,e){const n=me(t),i=n.Bo.get(e);if(i&&i.ko)return De().add(i.key);{let s=De();const r=n.Fo.get(e);if(!r)return s;for(const a of r){const o=n.Oo.get(a);s=s.unionWith(o.view.Ro)}return s}}function xE(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UE.bind(null,e),e.$o.Rr=RE.bind(null,e.eventManager),e.$o.Go=DE.bind(null,e.eventManager),e}class jE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=qh(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return tE(this.persistence,new $I,e.initialUser,this.N)}Jo(e){return new cE(tu.Ns,this.N)}Ho(e){return new dE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zE{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>od(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=BE.bind(null,this.syncEngine),await bE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new CE}createDatastore(e){const n=qh(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new gE(s));var s;return function(r,a,o){return new IE(r,a,o)}(e.credentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=o=>od(this.syncEngine,o,0),a=Gh.bt()?new Gh:new fE,new _E(n,i,s,r,a);var n,i,s,r,a}createSyncEngine(e,n){return function(i,s,r,a,o,u,c){const l=new kE(i,s,r,a,o,u);return c&&(l.Qo=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=me(e);W("RemoteStore","RemoteStore shutting down."),n.Wr.add(5),await Ss(n),n.zr.shutdown(),n.Hr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,n,i){this.credentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Dt.UNAUTHENTICATED,this.clientId=eh.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async s=>{W("FirestoreClient","Received user=",s.uid),await this.credentialListener(s),this.user=s})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const i=Zh(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function qE(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Hh(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function WE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await KE(t);W("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>async function(r,a){const o=me(r);o.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const u=As(o);o.Wr.add(3),await Ss(o),u&&o.Hr.set("Unknown"),await o.remoteSyncer.handleCredentialChange(a),o.Wr.delete(3),await Gr(o)}(e.remoteStore,s)),t.onlineComponents=e}async function KE(t){return t.offlineComponents||(W("FirestoreClient","Using default OfflineComponentProvider"),await qE(t,new jE)),t.offlineComponents}async function XE(t){return t.onlineComponents||(W("FirestoreClient","Using default OnlineComponentProvider"),await WE(t,new zE)),t.onlineComponents}async function hd(t){const e=await XE(t),n=e.eventManager;return n.onListen=ME.bind(null,e.syncEngine),n.onUnlisten=FE.bind(null,e.syncEngine),n}function QE(t,e,n={}){const i=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,a,o,u){const c=new cd({next:h=>{r.enqueueAndForget(()=>td(s,l));const d=h.docs.has(a);!d&&h.fromCache?u.reject(new K(O.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&o&&o.source==="server"?u.reject(new K(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new nd(ja(a.path),c,{includeMetadataChanges:!0,fo:!0});return ed(s,l)}(await hd(t),t.asyncQueue,e,n,i)),i.promise}function YE(t,e,n={}){const i=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,a,o,u){const c=new cd({next:h=>{r.enqueueAndForget(()=>td(s,l)),h.fromCache&&o.source==="server"?u.reject(new K(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new nd(a,c,{includeMetadataChanges:!0,fo:!0});return ed(s,l)}(await hd(t),t.asyncQueue,e,n,i)),i.promise}class JE{constructor(e,n,i,s,r,a,o,u){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.useFetchStreams=u}}class bs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t,e,n){if(!n)throw new K(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ZE(t,e,n,i){if(e===!0&&i===!0)throw new K(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function md(t){if(!Q.isDocumentKey(t))throw new K(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pd(t){if(Q.isDocumentKey(t))throw new K(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $E(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function qr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$E(t);throw new K(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ZE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gd({}),this._settingsFrozen=!1,e instanceof bs?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new K(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bs(i.options.projectId)}(e))}get app(){if(!this._app)throw new K(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gd(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new qy;switch(n.type){case"gapi":const i=n.client;return xe(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new Xy(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new K(O.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=dd.get(e);n&&(W("ComponentProvider","Removing Datastore"),dd.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}}class Wr{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Wr(this.firestore,e,this._query)}}class Rn extends Wr{constructor(e,n,i){super(e,n,ja(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new Q(e))}withConverter(e){return new Rn(this.firestore,e,this._path)}}function wT(t,e,...n){if(t=Fn(t),fd("collection","path",e),t instanceof cu){const i=Le.fromString(e,...n);return pd(i),new Rn(t,null,i)}{if(!(t instanceof $t||t instanceof Rn))throw new K(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Le.fromString(e,...n));return pd(i),new Rn(t.firestore,null,i)}}function CT(t,e,...n){if(t=Fn(t),arguments.length===1&&(e=eh.I()),fd("doc","path",e),t instanceof cu){const i=Le.fromString(e,...n);return md(i),new $t(t,null,new Q(i))}{if(!(t instanceof $t||t instanceof Rn))throw new K(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Le.fromString(e,...n));return md(i),new $t(t.firestore,t instanceof Rn?t.converter:null,new Q(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new Wh(this,"async_queue_retry"),this.Rc=()=>{const n=nu();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ar.tr()};const e=nu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const n=nu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const n=new bn;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!_s(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const n=this._c.then(()=>(this.Ec=!0,e().catch(i=>{this.Tc=i,this.Ec=!1;const s=function(r){let a=r.message||"";return r.stack&&(a=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),a}(i);throw An("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ec=!1,i))));return this._c=n,n}enqueueAfterDelay(e,n,i){this.bc(),this.Ac.indexOf(e)>-1&&(n=0);const s=ou.createAndSchedule(this,e,n,i,r=>this.Vc(r));return this.yc.push(s),s}bc(){this.Tc&&ue()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const n of this.yc)if(n.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.yc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const n=this.yc.indexOf(e);this.yc.splice(n,1)}}class hu extends cu{constructor(e,n){super(e,n),this.type="firestore",this._queue=new e_,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||yd(this),this._firestoreClient.terminate()}}function RT(t=Fu()){return Io(t,"firestore").getImmediate()}function vd(t){return t._firestoreClient||yd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yd(t){var e;const n=t._freezeSettings(),i=function(s,r,a,o){return new JE(s,r,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new GE(t._credentials,t._queue,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kr(mt.fromBase64String(e))}catch(n){throw new K(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kr(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}const n_=new RegExp("[~\\*/\\[\\]]");function i_(t,e,n){if(e.search(n_)>=0)throw Ed(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Id(...e.split("."))._internalPath}catch{throw Ed(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ed(t,e,n,i,s){const r=i&&!i.isEmpty(),a=s!==void 0;let o=`Function ${e}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let u="";return(r||a)&&(u+=" (found",r&&(u+=` in field ${i}`),a&&(u+=` in document ${s}`),u+=")"),new K(O.INVALID_ARGUMENT,o+t+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new s_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Td("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class s_ extends _d{data(){return super.data()}}function Td(t,e){return typeof e=="string"?i_(t,e):e instanceof Id?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sd extends _d{constructor(e,n,i,s,r,a){super(e,n,i,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Td("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Xr extends Sd{data(e={}){return super.data(e)}}class r_{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ws(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Xr(this._firestore,this._userDataWriter,i.key,i,new ws(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(a=>({type:"added",doc:new Xr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ws(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:r++}))}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const o=new Xr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ws(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=r.indexOf(a.doc.key),r=r.delete(a.doc.key)),a.type!==1&&(r=r.add(a.doc),c=r.indexOf(a.doc.key)),{type:o_(a.type),doc:o,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function o_(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(t){if(Mr(t)&&t.explicitOrderBy.length===0)throw new K(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{convertValue(e,n="none"){switch(Qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ue()}}convertObject(e,n){const i={};return Or(e.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new t_(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=ih(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(ms(e));default:return null}}convertTimestamp(e){const n=Cn(e);return new wn(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Le.fromString(e);xe(Vh(i));const s=new bs(i.get(1),i.get(3)),r=new Q(i.popFirst(5));return s.isEqual(n)||An(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(t){t=qr(t,$t);const e=qr(t.firestore,hu);return QE(vd(e),t._key).then(n=>l_(e,t,n))}class Ad extends u_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function OT(t){t=qr(t,Wr);const e=qr(t.firestore,hu),n=vd(e),i=new Ad(e);return a_(t._query),YE(n,t._query).then(s=>new r_(e,i,t,s))}function l_(t,e,n){const i=n.docs.get(e._key),s=new Ad(t);return new Sd(t,s,e._key,i,new ws(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){yi=n})(Bi),Vi(new ai("firestore",(n,{options:i})=>{const s=n.getProvider("app").getImmediate(),r=new hu(s,new Wy(n.getProvider("auth-internal")));return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r},"PUBLIC")),mn(Jc,"3.3.1",t),mn(Jc,"3.3.1","esm2017")})();var c_="firebase",h_="9.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn(c_,h_,"app");/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var d_={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},f_={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},Cs={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},Pe;(function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"})(Pe||(Pe={}));var Ri;(function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"})(Ri||(Ri={}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Dn,cn,te={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};Dn={},Dn[""+te.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",Dn[""+te.LIST_ITEM_CLASS]="mdc-list-item",Dn[""+te.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",Dn[""+te.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",Dn[""+te.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",Dn[""+te.ROOT]="mdc-list";var Di=(cn={},cn[""+te.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",cn[""+te.LIST_ITEM_CLASS]="mdc-deprecated-list-item",cn[""+te.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",cn[""+te.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",cn[""+te.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",cn[""+te.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",cn[""+te.ROOT]="mdc-deprecated-list",cn),On={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+te.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+te.LIST_ITEM_CLASS+` a,
    .`+Di[te.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Di[te.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+te.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+te.LIST_ITEM_CLASS+` a,
    .`+te.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+te.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+Di[te.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Di[te.LIST_ITEM_CLASS]+` a,
    .`+Di[te.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+Di[te.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},$e={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var m_=["input","button","textarea","select"],$n=function(t){var e=t.target;if(!!e){var n=(""+e.tagName).toLowerCase();m_.indexOf(n)===-1&&t.preventDefault()}};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function p_(){var t={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return t}function g_(t,e){for(var n=new Map,i=0;i<t;i++){var s=e(i).trim();if(!!s){var r=s[0].toLowerCase();n.has(r)||n.set(r,[]),n.get(r).push({text:s.toLowerCase(),index:i})}}return n.forEach(function(a){a.sort(function(o,u){return o.index-u.index})}),n}function du(t,e){var n=t.nextChar,i=t.focusItemAtIndex,s=t.sortedIndexByFirstChar,r=t.focusedItemIndex,a=t.skipFocus,o=t.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){wd(e)},$e.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+n;var u;return e.typeaheadBuffer.length===1?u=v_(s,r,o,e):u=y_(s,o,e),u!==-1&&!a&&i(u),u}function v_(t,e,n,i){var s=i.typeaheadBuffer[0],r=t.get(s);if(!r)return-1;if(s===i.currentFirstChar&&r[i.sortedIndexCursor].index===e){i.sortedIndexCursor=(i.sortedIndexCursor+1)%r.length;var a=r[i.sortedIndexCursor].index;if(!n(a))return a}i.currentFirstChar=s;var o=-1,u;for(u=0;u<r.length;u++)if(!n(r[u].index)){o=u;break}for(;u<r.length;u++)if(r[u].index>e&&!n(r[u].index)){o=u;break}return o!==-1?(i.sortedIndexCursor=o,r[i.sortedIndexCursor].index):-1}function y_(t,e,n){var i=n.typeaheadBuffer[0],s=t.get(i);if(!s)return-1;var r=s[n.sortedIndexCursor];if(r.text.lastIndexOf(n.typeaheadBuffer,0)===0&&!e(r.index))return r.index;for(var a=(n.sortedIndexCursor+1)%s.length,o=-1;a!==n.sortedIndexCursor;){var u=s[a],c=u.text.lastIndexOf(n.typeaheadBuffer,0)===0,l=!e(u.index);if(c&&l){o=a;break}a=(a+1)%s.length}return o!==-1?(n.sortedIndexCursor=o,s[n.sortedIndexCursor].index):-1}function bd(t){return t.typeaheadBuffer.length>0}function wd(t){t.typeaheadBuffer=""}function Cd(t,e){var n=t.event,i=t.isTargetListItem,s=t.focusedItemIndex,r=t.focusItemAtIndex,a=t.sortedIndexByFirstChar,o=t.isItemAtIndexDisabled,u=dt(n)==="ArrowLeft",c=dt(n)==="ArrowUp",l=dt(n)==="ArrowRight",h=dt(n)==="ArrowDown",d=dt(n)==="Home",f=dt(n)==="End",m=dt(n)==="Enter",y=dt(n)==="Spacebar";if(n.ctrlKey||n.metaKey||u||c||l||h||d||f||m)return-1;var g=!y&&n.key.length===1;if(g){$n(n);var v={focusItemAtIndex:r,focusedItemIndex:s,nextChar:n.key.toLowerCase(),sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:o};return du(v,e)}if(!y)return-1;i&&$n(n);var I=i&&bd(e);if(I){var v={focusItemAtIndex:r,focusedItemIndex:s,nextChar:" ",sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:o};return du(v,e)}return-1}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function I_(t){return t instanceof Array}var E_=function(t){Vn(e,t);function e(n){var i=t.call(this,yt(yt({},e.defaultAdapter),n))||this;return i.wrapFocus=!1,i.isVertical=!0,i.isSingleSelectionList=!1,i.selectedIndex=$e.UNSET_INDEX,i.focusedItemIndex=$e.UNSET_INDEX,i.useActivatedClass=!1,i.useSelectedAttr=!1,i.ariaCurrentAttrValue=null,i.isCheckboxList=!1,i.isRadioList=!1,i.hasTypeahead=!1,i.typeaheadState=p_(),i.sortedIndexByFirstChar=new Map,i}return Object.defineProperty(e,"strings",{get:function(){return On},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return te},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return $e},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(n){this.wrapFocus=n},e.prototype.setVerticalOrientation=function(n){this.isVertical=n},e.prototype.setSingleSelection=function(n){this.isSingleSelectionList=n,n&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.maybeInitializeSingleSelection=function(){var n=this.getSelectedIndexFromDOM();if(n!==$e.UNSET_INDEX){var i=this.adapter.listItemAtIndexHasClass(n,te.LIST_ITEM_ACTIVATED_CLASS);i&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=n}},e.prototype.getSelectedIndexFromDOM=function(){for(var n=$e.UNSET_INDEX,i=this.adapter.getListItemCount(),s=0;s<i;s++){var r=this.adapter.listItemAtIndexHasClass(s,te.LIST_ITEM_SELECTED_CLASS),a=this.adapter.listItemAtIndexHasClass(s,te.LIST_ITEM_ACTIVATED_CLASS);if(!!(r||a)){n=s;break}}return n},e.prototype.setHasTypeahead=function(n){this.hasTypeahead=n,n&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&bd(this.typeaheadState)},e.prototype.setUseActivatedClass=function(n){this.useActivatedClass=n},e.prototype.setUseSelectedAttribute=function(n){this.useSelectedAttr=n},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(n,i){var s=i===void 0?{}:i,r=s.forceUpdate;!this.isIndexValid(n)||(this.isCheckboxList?this.setCheckboxAtIndex(n):this.isRadioList?this.setRadioAtIndex(n):this.setSingleSelectionAtIndex(n,{forceUpdate:r}))},e.prototype.handleFocusIn=function(n){n>=0&&(this.focusedItemIndex=n,this.adapter.setAttributeForElementIndex(n,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(n,"0"))},e.prototype.handleFocusOut=function(n){var i=this;n>=0&&(this.adapter.setAttributeForElementIndex(n,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(n,"-1")),setTimeout(function(){i.adapter.isFocusInsideList()||i.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.handleKeydown=function(n,i,s){var r=this,a=dt(n)==="ArrowLeft",o=dt(n)==="ArrowUp",u=dt(n)==="ArrowRight",c=dt(n)==="ArrowDown",l=dt(n)==="Home",h=dt(n)==="End",d=dt(n)==="Enter",f=dt(n)==="Spacebar",m=n.key==="A"||n.key==="a";if(this.adapter.isRootFocused()){if(o||h?(n.preventDefault(),this.focusLastElement()):(c||l)&&(n.preventDefault(),this.focusFirstElement()),this.hasTypeahead){var y={event:n,focusItemAtIndex:function(I){r.focusItemAtIndex(I)},focusedItemIndex:-1,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(I){return r.adapter.listItemAtIndexHasClass(I,te.LIST_ITEM_DISABLED_CLASS)}};Cd(y,this.typeaheadState)}return}var g=this.adapter.getFocusedElementIndex();if(!(g===-1&&(g=s,g<0))){if(this.isVertical&&c||!this.isVertical&&u)$n(n),this.focusNextElement(g);else if(this.isVertical&&o||!this.isVertical&&a)$n(n),this.focusPrevElement(g);else if(l)$n(n),this.focusFirstElement();else if(h)$n(n),this.focusLastElement();else if(m&&n.ctrlKey&&this.isCheckboxList)n.preventDefault(),this.toggleAll(this.selectedIndex===$e.UNSET_INDEX?[]:this.selectedIndex);else if((d||f)&&i){var v=n.target;if(v&&v.tagName==="A"&&d||($n(n),this.adapter.listItemAtIndexHasClass(g,te.LIST_ITEM_DISABLED_CLASS)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(g),this.adapter.notifyAction(g))}if(this.hasTypeahead){var y={event:n,focusItemAtIndex:function(_){r.focusItemAtIndex(_)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(_){return r.adapter.listItemAtIndexHasClass(_,te.LIST_ITEM_DISABLED_CLASS)}};Cd(y,this.typeaheadState)}}},e.prototype.handleClick=function(n,i){n!==$e.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(n,te.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(n,i),this.adapter.notifyAction(n)))},e.prototype.focusNextElement=function(n){var i=this.adapter.getListItemCount(),s=n+1;if(s>=i)if(this.wrapFocus)s=0;else return n;return this.focusItemAtIndex(s),s},e.prototype.focusPrevElement=function(n){var i=n-1;if(i<0)if(this.wrapFocus)i=this.adapter.getListItemCount()-1;else return n;return this.focusItemAtIndex(i),i},e.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},e.prototype.focusLastElement=function(){var n=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(n),n},e.prototype.focusInitialElement=function(){var n=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(n),n},e.prototype.setEnabled=function(n,i){!this.isIndexValid(n)||(i?(this.adapter.removeClassForElementIndex(n,te.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(n,On.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(n,te.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(n,On.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(n,i){var s=i===void 0?{}:i,r=s.forceUpdate;if(!(this.selectedIndex===n&&!r)){var a=te.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(a=te.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==$e.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,a),this.setAriaForSingleSelectionAtIndex(n),this.setTabindexAtIndex(n),n!==$e.UNSET_INDEX&&this.adapter.addClassForElementIndex(n,a),this.selectedIndex=n}},e.prototype.setAriaForSingleSelectionAtIndex=function(n){this.selectedIndex===$e.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(n,On.ARIA_CURRENT));var i=this.ariaCurrentAttrValue!==null,s=i?On.ARIA_CURRENT:On.ARIA_SELECTED;if(this.selectedIndex!==$e.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,s,"false"),n!==$e.UNSET_INDEX){var r=i?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(n,s,r)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?On.ARIA_SELECTED:On.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(n){var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(n,!0),this.selectedIndex!==$e.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),this.adapter.setAttributeForElementIndex(n,i,"true"),this.selectedIndex=n},e.prototype.setCheckboxAtIndex=function(n){for(var i=this.getSelectionAttribute(),s=0;s<this.adapter.getListItemCount();s++){var r=!1;n.indexOf(s)>=0&&(r=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(s,r),this.adapter.setAttributeForElementIndex(s,i,r?"true":"false")}this.selectedIndex=n},e.prototype.setTabindexAtIndex=function(n){this.focusedItemIndex===$e.UNSET_INDEX&&n!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==n&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==n&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),n!==$e.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(n,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var n=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(n)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==$e.UNSET_INDEX?this.selectedIndex:I_(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(n,i){return Math.min(n,i)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(n){var i=this;if(n instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return n.length===0?!0:n.some(function(s){return i.isIndexInRange(s)})}else if(typeof n=="number"){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+n);return this.isIndexInRange(n)||this.isSingleSelectionList&&n===$e.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(n){var i=this.adapter.getListItemCount();return n>=0&&n<i},e.prototype.setSelectedIndexOnAction=function(n,i){i===void 0&&(i=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(n,i):this.setSelectedIndex(n)},e.prototype.toggleCheckboxAtIndex=function(n,i){var s=this.getSelectionAttribute(),r=this.adapter.isCheckboxCheckedAtIndex(n);i&&(r=!r,this.adapter.setCheckedCheckboxOrRadioAtIndex(n,r)),this.adapter.setAttributeForElementIndex(n,s,r?"true":"false");var a=this.selectedIndex===$e.UNSET_INDEX?[]:this.selectedIndex.slice();r?a.push(n):a=a.filter(function(o){return o!==n}),this.selectedIndex=a},e.prototype.focusItemAtIndex=function(n){this.adapter.focusItemAtIndex(n),this.focusedItemIndex=n},e.prototype.toggleAll=function(n){var i=this.adapter.getListItemCount();if(n.length===i)this.setCheckboxAtIndex([]);else{for(var s=[],r=0;r<i;r++)(!this.adapter.listItemAtIndexHasClass(r,te.LIST_ITEM_DISABLED_CLASS)||n.indexOf(r)>-1)&&s.push(r);this.setCheckboxAtIndex(s)}},e.prototype.typeaheadMatchItem=function(n,i,s){var r=this;s===void 0&&(s=!1);var a={focusItemAtIndex:function(o){r.focusItemAtIndex(o)},focusedItemIndex:i||this.focusedItemIndex,nextChar:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:s,isItemAtIndexDisabled:function(o){return r.adapter.listItemAtIndexHasClass(o,te.LIST_ITEM_DISABLED_CLASS)}};return du(a,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return g_(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){wd(this.typeaheadState)},e}(di);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Rd=function(t){Vn(e,t);function e(n){var i=t.call(this,yt(yt({},e.defaultAdapter),n))||this;return i.isSurfaceOpen=!1,i.isQuickOpen=!1,i.isHoistedElement=!1,i.isFixedPosition=!1,i.isHorizontallyCenteredOnViewport=!1,i.maxHeight=0,i.openAnimationEndTimerId=0,i.closeAnimationEndTimerId=0,i.animationRequestId=0,i.anchorCorner=Ri.TOP_START,i.originCorner=Ri.TOP_START,i.anchorMargin={top:0,right:0,bottom:0,left:0},i.position={x:0,y:0},i}return Object.defineProperty(e,"cssClasses",{get:function(){return d_},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return f_},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Cs},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return Ri},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=e.cssClasses,i=n.ROOT,s=n.OPEN;if(!this.adapter.hasClass(i))throw new Error(i+" class required in root element.");this.adapter.hasClass(s)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(n){this.anchorCorner=n},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^Pe.RIGHT},e.prototype.setAnchorMargin=function(n){this.anchorMargin.top=n.top||0,this.anchorMargin.right=n.right||0,this.anchorMargin.bottom=n.bottom||0,this.anchorMargin.left=n.left||0},e.prototype.setIsHoisted=function(n){this.isHoistedElement=n},e.prototype.setFixedPosition=function(n){this.isFixedPosition=n},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(n,i){this.position.x=this.isFinite(n)?n:0,this.position.y=this.isFinite(i)?i:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(n){this.isHorizontallyCenteredOnViewport=n},e.prototype.setQuickOpen=function(n){this.isQuickOpen=n},e.prototype.setMaxHeight=function(n){this.maxHeight=n},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var n=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){n.dimensions=n.adapter.getInnerDimensions(),n.autoposition(),n.adapter.addClass(e.cssClasses.OPEN),n.openAnimationEndTimerId=setTimeout(function(){n.openAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),n.adapter.notifyOpen()},Cs.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},e.prototype.close=function(n){var i=this;if(n===void 0&&(n=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,n||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){i.adapter.removeClass(e.cssClasses.OPEN),i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId=setTimeout(function(){i.closeAnimationEndTimerId=0,i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),i.adapter.notifyClose()},Cs.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,n||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(n){var i=n.target;this.adapter.isElementInContainer(i)||this.close()},e.prototype.handleKeydown=function(n){var i=n.keyCode,s=n.key,r=s==="Escape"||i===27;r&&this.close()},e.prototype.autoposition=function(){var n;this.measurements=this.getAutoLayoutmeasurements();var i=this.getoriginCorner(),s=this.getMenuSurfaceMaxHeight(i),r=this.hasBit(i,Pe.BOTTOM)?"bottom":"top",a=this.hasBit(i,Pe.RIGHT)?"right":"left",o=this.getHorizontalOriginOffset(i),u=this.getVerticalOriginOffset(i),c=this.measurements,l=c.anchorSize,h=c.surfaceSize,d=(n={},n[a]=o,n[r]=u,n);l.width/h.width>Cs.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(a="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(d),this.adapter.setTransformOrigin(a+" "+r),this.adapter.setPosition(d),this.adapter.setMaxHeight(s?s+"px":""),this.hasBit(i,Pe.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var n=this.adapter.getAnchorDimensions(),i=this.adapter.getBodyDimensions(),s=this.adapter.getWindowDimensions(),r=this.adapter.getWindowScroll();return n||(n={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:n,bodySize:i,surfaceSize:this.dimensions,viewportDistance:{top:n.top,right:s.width-n.right,bottom:s.height-n.bottom,left:n.left},viewportSize:s,windowScroll:r}},e.prototype.getoriginCorner=function(){var n=this.originCorner,i=this.measurements,s=i.viewportDistance,r=i.anchorSize,a=i.surfaceSize,o=e.numbers.MARGIN_TO_EDGE,u=this.hasBit(this.anchorCorner,Pe.BOTTOM),c,l;u?(c=s.top-o+this.anchorMargin.bottom,l=s.bottom-o-this.anchorMargin.bottom):(c=s.top-o+this.anchorMargin.top,l=s.bottom-o+r.height-this.anchorMargin.top);var h=l-a.height>0;!h&&c>l&&(n=this.setBit(n,Pe.BOTTOM));var d=this.adapter.isRtl(),f=this.hasBit(this.anchorCorner,Pe.FLIP_RTL),m=this.hasBit(this.anchorCorner,Pe.RIGHT)||this.hasBit(n,Pe.RIGHT),y=!1;d&&f?y=!m:y=m;var g,v;y?(g=s.left+r.width+this.anchorMargin.right,v=s.right-this.anchorMargin.right):(g=s.left+this.anchorMargin.left,v=s.right+r.width-this.anchorMargin.left);var I=g-a.width>0,_=v-a.width>0,M=this.hasBit(n,Pe.FLIP_RTL)&&this.hasBit(n,Pe.RIGHT);return _&&M&&d||!I&&M?n=this.unsetBit(n,Pe.RIGHT):(I&&y&&d||I&&!y&&m||!_&&g>=v)&&(n=this.setBit(n,Pe.RIGHT)),n},e.prototype.getMenuSurfaceMaxHeight=function(n){if(this.maxHeight>0)return this.maxHeight;var i=this.measurements.viewportDistance,s=0,r=this.hasBit(n,Pe.BOTTOM),a=this.hasBit(this.anchorCorner,Pe.BOTTOM),o=e.numbers.MARGIN_TO_EDGE;return r?(s=i.top+this.anchorMargin.top-o,a||(s+=this.measurements.anchorSize.height)):(s=i.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-o,a&&(s-=this.measurements.anchorSize.height)),s},e.prototype.getHorizontalOriginOffset=function(n){var i=this.measurements.anchorSize,s=this.hasBit(n,Pe.RIGHT),r=this.hasBit(this.anchorCorner,Pe.RIGHT);if(s){var a=r?i.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?a-(this.measurements.viewportSize.width-this.measurements.bodySize.width):a}return r?i.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(n){var i=this.measurements.anchorSize,s=this.hasBit(n,Pe.BOTTOM),r=this.hasBit(this.anchorCorner,Pe.BOTTOM),a=0;return s?a=r?i.height-this.anchorMargin.top:-this.anchorMargin.bottom:a=r?i.height+this.anchorMargin.bottom:this.anchorMargin.top,a},e.prototype.adjustPositionForHoistedElement=function(n){var i,s,r=this.measurements,a=r.windowScroll,o=r.viewportDistance,u=r.surfaceSize,c=r.viewportSize,l=Object.keys(n);try{for(var h=Hi(l),d=h.next();!d.done;d=h.next()){var f=d.value,m=n[f]||0;if(this.isHorizontallyCenteredOnViewport&&(f==="left"||f==="right")){n[f]=(c.width-u.width)/2;continue}m+=o[f],this.isFixedPosition||(f==="top"?m+=a.y:f==="bottom"?m-=a.y:f==="left"?m+=a.x:m-=a.x),n[f]=m}}catch(y){i={error:y}}finally{try{d&&!d.done&&(s=h.return)&&s.call(h)}finally{if(i)throw i.error}}},e.prototype.maybeRestoreFocus=function(){var n=this,i=this.adapter.isFocused(),s=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(i||s)&&setTimeout(function(){n.adapter.restoreFocus()},Cs.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(n,i){return Boolean(n&i)},e.prototype.setBit=function(n,i){return n|i},e.prototype.unsetBit=function(n,i){return n^i},e.prototype.isFinite=function(n){return typeof n=="number"&&isFinite(n)},e}(di);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Dd={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function __(t){return Boolean(t.document)&&typeof t.document.createElement=="function"}function fu(t,e){if(__(t)&&e in Dd){var n=t.document.createElement("div"),i=Dd[e],s=i.standard,r=i.prefixed,a=s in n.style;return a?s:r}return e}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Oi={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},Li={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},T_={FOCUS_ROOT_INDEX:-1},Ni;(function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"})(Ni||(Ni={}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var S_=function(t){Vn(e,t);function e(n){var i=t.call(this,yt(yt({},e.defaultAdapter),n))||this;return i.closeAnimationEndTimerId=0,i.defaultFocusState=Ni.LIST_ROOT,i.selectedIndex=-1,i}return Object.defineProperty(e,"cssClasses",{get:function(){return Oi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Li},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return T_},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},e.prototype.handleKeydown=function(n){var i=n.key,s=n.keyCode,r=i==="Tab"||s===9;r&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(n){var i=this,s=this.adapter.getElementIndex(n);if(!(s<0)){this.adapter.notifySelected({index:s});var r=this.adapter.getAttributeFromElementAtIndex(s,Li.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(r),this.closeAnimationEndTimerId=setTimeout(function(){var a=i.adapter.getElementIndex(n);a>=0&&i.adapter.isSelectableItemAtIndex(a)&&i.setSelectedIndex(a)},Rd.numbers.TRANSITION_CLOSE_DURATION)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case Ni.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Ni.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Ni.NONE:break;default:this.adapter.focusListRoot();break}},e.prototype.setDefaultFocusState=function(n){this.defaultFocusState=n},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(n){if(this.validatedIndex(n),!this.adapter.isSelectableItemAtIndex(n))throw new Error("MDCMenuFoundation: No selection group at specified index.");var i=this.adapter.getSelectedSiblingOfItemAtIndex(n);i>=0&&(this.adapter.removeAttributeFromElementAtIndex(i,Li.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(i,Oi.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(n,Oi.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(n,Li.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=n},e.prototype.setEnabled=function(n,i){this.validatedIndex(n),i?(this.adapter.removeClassFromElementAtIndex(n,te.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(n,Li.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(n,te.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(n,Li.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(n){var i=this.adapter.getMenuItemCount(),s=n>=0&&n<i;if(!s)throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(di);const{document:A_}=Qf;function b_(t){let e,n,i,s,r,a,o,u;const c=t[30].default,l=Qe(c,t,t[29],null);let h=[{class:i=ve(Xe({[t[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":t[5],"mdc-menu-surface--open":t[4],"smui-menu-surface--static":t[4],"mdc-menu-surface--fullwidth":t[6]},t[9]))},{style:s=Object.entries(t[10]).map(Od).concat([t[3]]).join(" ")},t[12]],d={};for(let f=0;f<h.length;f+=1)d=B(d,h[f]);return{c(){e=Ht(),n=J("div"),l&&l.c(),this.h()},l(f){e=xt(f),n=ee(f,"DIV",{class:!0,style:!0});var m=se(n);l&&l.l(m),m.forEach(D),this.h()},h(){le(n,d)},m(f,m){re(f,e,m),re(f,n,m),l&&l.m(n,null),t[32](n),a=!0,o||(u=[et(A_.body,"click",t[31],!0),de(r=It.call(null,n,t[1])),de(t[11].call(null,n)),et(n,"keydown",t[33])],o=!0)},p(f,m){l&&l.p&&(!a||m[0]&536870912)&&Je(l,c,f,f[29],a?Ye(c,f[29],m,null):Ze(f[29]),null),le(n,d=Oe(h,[(!a||m[0]&628&&i!==(i=ve(Xe({[f[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":f[5],"mdc-menu-surface--open":f[4],"smui-menu-surface--static":f[4],"mdc-menu-surface--fullwidth":f[6]},f[9]))))&&{class:i},(!a||m[0]&1032&&s!==(s=Object.entries(f[10]).map(Od).concat([f[3]]).join(" ")))&&{style:s},m[0]&4096&&f[12]])),r&&Ne(r.update)&&m[0]&2&&r.update.call(null,f[1])},i(f){a||(ge(l,f),a=!0)},o(f){ye(l,f),a=!1},d(f){f&&D(e),f&&D(n),l&&l.d(f),t[32](null),o=!1,we(u)}}}const Od=([t,e])=>`${t}: ${e};`;function w_(t,e,n){const i=["use","class","style","static","anchor","fixed","open","fullWidth","quickOpen","anchorElement","anchorCorner","anchorMargin","maxHeight","horizontallyCenteredOnViewport","isOpen","setOpen","setAbsolutePosition","setIsHoisted","isFixed","getElement"];let s=ne(e,i),{$$slots:r={},$$scope:a}=e;var o,u,c;const l=Be(be());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{static:m=!1}=e,{anchor:y=!0}=e,{fixed:g=!1}=e,{open:v=m}=e,{fullWidth:I=!1}=e,{quickOpen:_=!1}=e,{anchorElement:M=void 0}=e,{anchorCorner:x=void 0}=e,{anchorMargin:b={top:0,right:0,bottom:0,left:0}}=e,{maxHeight:N=0}=e,{horizontallyCenteredOnViewport:w=!1}=e,R,P,Y={},oe={},C;tt("SMUI:list:role","menu"),tt("SMUI:list:item:role","menuitem");const j=Ri;ii(()=>(n(8,P=new Rd({addClass:U,removeClass:k,hasClass:G,hasAnchor:()=>!!M,notifyClose:()=>{n(0,v=m),v||it(R,"SMUIMenuSurface:closed",void 0,void 0,!0)},notifyClosing:()=>{n(0,v=m),v||it(R,"SMUIMenuSurface:closing",void 0,void 0,!0)},notifyOpen:()=>{n(0,v=!0),it(R,"SMUIMenuSurface:opened",void 0,void 0,!0)},isElementInContainer:ce=>R.contains(ce),isRtl:()=>getComputedStyle(R).getPropertyValue("direction")==="rtl",setTransformOrigin:ce=>{const We=`${fu(window,"transform")}-origin`;n(10,oe[We]=ce,oe)},isFocused:()=>document.activeElement===R,saveFocus:()=>{var ce;C=(ce=document.activeElement)!==null&&ce!==void 0?ce:void 0},restoreFocus:()=>{R.contains(document.activeElement)&&C&&"focus"in C&&C.focus()},getInnerDimensions:()=>({width:R.offsetWidth,height:R.offsetHeight}),getAnchorDimensions:()=>M?M.getBoundingClientRect():null,getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:ce=>{n(10,oe.left="left"in ce?`${ce.left}px`:"",oe),n(10,oe.right="right"in ce?`${ce.right}px`:"",oe),n(10,oe.top="top"in ce?`${ce.top}px`:"",oe),n(10,oe.bottom="bottom"in ce?`${ce.bottom}px`:"",oe)},setMaxHeight:ce=>{n(10,oe.maxHeight=ce,oe)}})),it(R,"SMUIMenuSurface:mount",{get open(){return v},set open(ce){n(0,v=ce)},closeProgrammatic:Se}),P.init(),()=>{var ce;const We=P.isHoistedElement;P.destroy(),We&&((ce=R.parentNode)===null||ce===void 0||ce.removeChild(R))})),si(()=>{var L;y&&R&&((L=R.parentElement)===null||L===void 0||L.classList.remove("mdc-menu-surface--anchor"))});function G(L){return L in Y?Y[L]:zt().classList.contains(L)}function U(L){Y[L]||n(9,Y[L]=!0,Y)}function k(L){(!(L in Y)||Y[L])&&n(9,Y[L]=!1,Y)}function Se(L){P.close(L),n(0,v=!1)}function Ae(){return v}function qe(L){n(0,v=L)}function Mt(L,ce){return P.setAbsolutePosition(L,ce)}function Ut(L){return P.setIsHoisted(L)}function Vt(){return P.isFixed()}function zt(){return R}const hn=L=>P&&v&&P.handleBodyClick(L);function Gt(L){fe[L?"unshift":"push"](()=>{R=L,n(7,R)})}const _e=L=>P&&P.handleKeydown(L);return t.$$set=L=>{e=B(B({},e),Me(L)),n(12,s=ne(e,i)),"use"in L&&n(1,h=L.use),"class"in L&&n(2,d=L.class),"style"in L&&n(3,f=L.style),"static"in L&&n(4,m=L.static),"anchor"in L&&n(14,y=L.anchor),"fixed"in L&&n(5,g=L.fixed),"open"in L&&n(0,v=L.open),"fullWidth"in L&&n(6,I=L.fullWidth),"quickOpen"in L&&n(15,_=L.quickOpen),"anchorElement"in L&&n(13,M=L.anchorElement),"anchorCorner"in L&&n(16,x=L.anchorCorner),"anchorMargin"in L&&n(17,b=L.anchorMargin),"maxHeight"in L&&n(18,N=L.maxHeight),"horizontallyCenteredOnViewport"in L&&n(19,w=L.horizontallyCenteredOnViewport),"$$scope"in L&&n(29,a=L.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&469778560&&R&&y&&!(n(26,o=R.parentElement)===null||o===void 0?void 0:o.classList.contains("mdc-menu-surface--anchor"))&&(n(27,u=R.parentElement)===null||u===void 0||u.classList.add("mdc-menu-surface--anchor"),n(13,M=n(28,c=R.parentElement)!==null&&c!==void 0?c:void 0)),t.$$.dirty[0]&257&&P&&P.isOpen()!==v&&(v?P.open():P.close()),t.$$.dirty[0]&33024&&P&&P.setQuickOpen(_),t.$$.dirty[0]&288&&P&&P.setFixedPosition(g),t.$$.dirty[0]&262400&&P&&N>0&&P.setMaxHeight(N),t.$$.dirty[0]&524544&&P&&P.setIsHorizontallyCenteredOnViewport(w),t.$$.dirty[0]&65792&&P&&x!=null&&(typeof x=="string"?P.setAnchorCorner(j[x]):P.setAnchorCorner(x)),t.$$.dirty[0]&131328&&P&&P.setAnchorMargin(b)},[v,h,d,f,m,g,I,R,P,Y,oe,l,s,M,y,_,x,b,N,w,Ae,qe,Mt,Ut,Vt,zt,o,u,c,a,r,hn,Gt,_e]}class C_ extends Ve{constructor(e){super();Ue(this,e,w_,b_,ke,{use:1,class:2,style:3,static:4,anchor:14,fixed:5,open:0,fullWidth:6,quickOpen:15,anchorElement:13,anchorCorner:16,anchorMargin:17,maxHeight:18,horizontallyCenteredOnViewport:19,isOpen:20,setOpen:21,setAbsolutePosition:22,setIsHoisted:23,isFixed:24,getElement:25},null,[-1,-1])}get isOpen(){return this.$$.ctx[20]}get setOpen(){return this.$$.ctx[21]}get setAbsolutePosition(){return this.$$.ctx[22]}get setIsHoisted(){return this.$$.ctx[23]}get isFixed(){return this.$$.ctx[24]}get getElement(){return this.$$.ctx[25]}}function R_(t){let e;const n=t[16].default,i=Qe(n,t,t[21],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&2097152)&&Je(i,n,s,s[21],e?Ye(n,s[21],r,null):Ze(s[21]),null)},i(s){e||(ge(i,s),e=!0)},o(s){ye(i,s),e=!1},d(s){i&&i.d(s)}}}function D_(t){let e,n,i;const s=[{use:t[5]},{class:ve({[t[1]]:!0,"mdc-menu":!0})},t[9]];function r(o){t[18](o)}let a={$$slots:{default:[R_]},$$scope:{ctx:t}};for(let o=0;o<s.length;o+=1)a=B(a,s[o]);return t[0]!==void 0&&(a.open=t[0]),e=new C_({props:a}),t[17](e),fe.push(()=>Jf(e,"open",r)),e.$on("SMUIMenuSurface:mount",t[7]),e.$on("SMUIList:mount",t[8]),e.$on("SMUIMenuSurface:opened",t[19]),e.$on("keydown",t[6]),e.$on("SMUIList:action",t[20]),{c(){nn(e.$$.fragment)},l(o){Pi(e.$$.fragment,o)},m(o,u){Kt(e,o,u),i=!0},p(o,[u]){const c=u&546?Oe(s,[u&32&&{use:o[5]},u&2&&{class:ve({[o[1]]:!0,"mdc-menu":!0})},u&512&&vt(o[9])]):{};u&2097152&&(c.$$scope={dirty:u,ctx:o}),!n&&u&1&&(n=!0,c.open=o[0],qf(()=>n=!1)),e.$set(c)},i(o){i||(ge(e.$$.fragment,o),i=!0)},o(o){ye(e.$$.fragment,o),i=!1},d(o){t[17](null),Xt(e,o)}}}function O_(t,e,n){let i;const s=["use","class","open","isOpen","setOpen","setDefaultFocusState","getSelectedIndex","getElement"];let r=ne(e,s),{$$slots:a={},$$scope:o}=e;const{closest:u}=Uo,c=Be(be());let{use:l=[]}=e,{class:h=""}=e,{open:d=!1}=e,f,m,y,g;ii(()=>(n(3,m=new S_({addClassToElementAtIndex:(C,j)=>{g.addClassForElementIndex(C,j)},removeClassFromElementAtIndex:(C,j)=>{g.removeClassForElementIndex(C,j)},addAttributeToElementAtIndex:(C,j,G)=>{g.setAttributeForElementIndex(C,j,G)},removeAttributeFromElementAtIndex:(C,j)=>{g.removeAttributeForElementIndex(C,j)},getAttributeFromElementAtIndex:(C,j)=>g.getAttributeFromElementIndex(C,j),elementContainsClass:(C,j)=>C.classList.contains(j),closeSurface:C=>y.closeProgrammatic(C),getElementIndex:C=>g.getOrderedList().map(j=>j.element).indexOf(C),notifySelected:C=>it(w(),"SMUIMenu:selected",{index:C.index,item:g.getOrderedList()[C.index].element},void 0,!0),getMenuItemCount:()=>g.items.length,focusItemAtIndex:C=>g.focusItemAtIndex(C),focusListRoot:()=>"focus"in g.element&&g.element.focus(),isSelectableItemAtIndex:C=>!!u(g.getOrderedList()[C].element,`.${Oi.MENU_SELECTION_GROUP}`),getSelectedSiblingOfItemAtIndex:C=>{const j=g.getOrderedList(),G=u(j[C].element,`.${Oi.MENU_SELECTION_GROUP}`),U=G==null?void 0:G.querySelector(`.${Oi.MENU_SELECTED_LIST_ITEM}`);return U?j.map(k=>k.element).indexOf(U):-1}})),it(w(),"SMUIMenu:mount",m),m.init(),()=>{m.destroy()}));function v(C){m&&m.handleKeydown(C)}function I(C){y||(y=C.detail)}function _(C){g||n(4,g=C.detail)}function M(){return d}function x(C){n(0,d=C)}function b(C){m.setDefaultFocusState(C)}function N(){return m.getSelectedIndex()}function w(){return f.getElement()}function R(C){fe[C?"unshift":"push"](()=>{f=C,n(2,f)})}function P(C){d=C,n(0,d)}const Y=()=>m&&m.handleMenuSurfaceOpened(),oe=C=>m&&m.handleItemAction(g.getOrderedList()[C.detail.index].element);return t.$$set=C=>{e=B(B({},e),Me(C)),n(9,r=ne(e,s)),"use"in C&&n(10,l=C.use),"class"in C&&n(1,h=C.class),"open"in C&&n(0,d=C.open),"$$scope"in C&&n(21,o=C.$$scope)},t.$$.update=()=>{t.$$.dirty&1024&&n(5,i=[c,...l])},[d,h,f,m,g,i,v,I,_,r,l,M,x,b,N,w,a,R,P,Y,oe,o]}class LT extends Ve{constructor(e){super();Ue(this,e,O_,D_,ke,{use:10,class:1,open:0,isOpen:11,setOpen:12,setDefaultFocusState:13,getSelectedIndex:14,getElement:15})}get isOpen(){return this.$$.ctx[11]}get setOpen(){return this.$$.ctx[12]}get setDefaultFocusState(){return this.$$.ctx[13]}get getSelectedIndex(){return this.$$.ctx[14]}get getElement(){return this.$$.ctx[15]}}function L_(t){let e;const n=t[10].default,i=Qe(n,t,t[12],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&4096)&&Je(i,n,s,s[12],e?Ye(n,s[12],r,null):Ze(s[12]),null)},i(s){e||(ge(i,s),e=!0)},o(s){ye(i,s),e=!1},d(s){i&&i.d(s)}}}function N_(t){let e,n,i;const s=[{use:[t[7],...t[0]]},{class:ve(Xe({[t[1]]:!0,[t[5]]:!0},t[4]))},t[6],t[8]];var r=t[2];function a(o){let u={$$slots:{default:[L_]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)u=B(u,s[c]);return{props:u}}return r&&(e=new r(a(t)),t[11](e)),{c(){e&&nn(e.$$.fragment),n=Pt()},l(o){e&&Pi(e.$$.fragment,o),n=Pt()},m(o,u){e&&Kt(e,o,u),re(o,n,u),i=!0},p(o,[u]){const c=u&499?Oe(s,[u&129&&{use:[o[7],...o[0]]},u&50&&{class:ve(Xe({[o[1]]:!0,[o[5]]:!0},o[4]))},u&64&&vt(o[6]),u&256&&vt(o[8])]):{};if(u&4096&&(c.$$scope={dirty:u,ctx:o}),r!==(r=o[2])){if(e){Bs();const l=e;ye(l.$$.fragment,1,0,()=>{Xt(l,1)}),Hs()}r?(e=new r(a(o)),o[11](e),nn(e.$$.fragment),ge(e.$$.fragment,1),Kt(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&ge(e.$$.fragment,o),i=!0)},o(o){e&&ye(e.$$.fragment,o),i=!1},d(o){t[11](null),o&&D(n),e&&Xt(e,o)}}}const Ln={component:Nl,class:"",classMap:{},contexts:{},props:{}};function k_(t,e,n){const i=["use","class","component","getElement"];let s=ne(e,i),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e,{class:u=""}=e,c;const l=Ln.class,h={},d=[],f=Ln.contexts,m=Ln.props;let{component:y=Ln.component}=e;Object.entries(Ln.classMap).forEach(([_,M])=>{const x=Ct(M);x&&"subscribe"in x&&d.push(x.subscribe(b=>{n(4,h[_]=b,h)}))});const g=Be(be());for(let _ in f)f.hasOwnProperty(_)&&tt(_,f[_]);si(()=>{for(const _ of d)_()});function v(){return c.getElement()}function I(_){fe[_?"unshift":"push"](()=>{c=_,n(3,c)})}return t.$$set=_=>{e=B(B({},e),Me(_)),n(8,s=ne(e,i)),"use"in _&&n(0,o=_.use),"class"in _&&n(1,u=_.class),"component"in _&&n(2,y=_.component),"$$scope"in _&&n(12,a=_.$$scope)},[o,u,y,c,h,l,m,g,s,v,r,I,a]}class M_ extends Ve{constructor(e){super();Ue(this,e,k_,N_,ke,{use:0,class:1,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const Ld=Object.assign({},Ln);function gt(t){return new Proxy(M_,{construct:function(e,n){return Object.assign(Ln,Ld,t),new e(...n)},get:function(e,n){return Object.assign(Ln,Ld,t),e[n]}})}function P_(t){let e;const n=t[37].default,i=Qe(n,t,t[43],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[1]&4096)&&Je(i,n,s,s[43],e?Ye(n,s[43],r,null):Ze(s[43]),null)},i(s){e||(ge(i,s),e=!0)},o(s){ye(i,s),e=!1},d(s){i&&i.d(s)}}}function F_(t){let e,n,i;const s=[{use:[t[17],...t[0]]},{class:ve({[t[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":t[2],"mdc-deprecated-list--dense":t[3],"mdc-deprecated-list--textual-list":t[4],"mdc-deprecated-list--avatar-list":t[5]||t[18],"mdc-deprecated-list--icon-list":t[6],"mdc-deprecated-list--image-list":t[7],"mdc-deprecated-list--thumbnail-list":t[8],"mdc-deprecated-list--video-list":t[9],"mdc-deprecated-list--two-line":t[10],"smui-list--three-line":t[11]&&!t[10]})},{role:t[15]},t[23]];var r=t[12];function a(o){let u={$$slots:{default:[P_]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)u=B(u,s[c]);return{props:u}}return r&&(e=new r(a(t)),t[38](e),e.$on("keydown",t[39]),e.$on("focusin",t[40]),e.$on("focusout",t[41]),e.$on("click",t[42]),e.$on("SMUIListItem:mount",t[19]),e.$on("SMUIListItem:unmount",t[20]),e.$on("SMUI:action",t[21])),{c(){e&&nn(e.$$.fragment),n=Pt()},l(o){e&&Pi(e.$$.fragment,o),n=Pt()},m(o,u){e&&Kt(e,o,u),re(o,n,u),i=!0},p(o,u){const c=u[0]&8818687?Oe(s,[u[0]&131073&&{use:[o[17],...o[0]]},u[0]&266238&&{class:ve({[o[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":o[2],"mdc-deprecated-list--dense":o[3],"mdc-deprecated-list--textual-list":o[4],"mdc-deprecated-list--avatar-list":o[5]||o[18],"mdc-deprecated-list--icon-list":o[6],"mdc-deprecated-list--image-list":o[7],"mdc-deprecated-list--thumbnail-list":o[8],"mdc-deprecated-list--video-list":o[9],"mdc-deprecated-list--two-line":o[10],"smui-list--three-line":o[11]&&!o[10]})},u[0]&32768&&{role:o[15]},u[0]&8388608&&vt(o[23])]):{};if(u[1]&4096&&(c.$$scope={dirty:u,ctx:o}),r!==(r=o[12])){if(e){Bs();const l=e;ye(l.$$.fragment,1,0,()=>{Xt(l,1)}),Hs()}r?(e=new r(a(o)),o[38](e),e.$on("keydown",o[39]),e.$on("focusin",o[40]),e.$on("focusout",o[41]),e.$on("click",o[42]),e.$on("SMUIListItem:mount",o[19]),e.$on("SMUIListItem:unmount",o[20]),e.$on("SMUI:action",o[21]),nn(e.$$.fragment),ge(e.$$.fragment,1),Kt(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&ge(e.$$.fragment,o),i=!0)},o(o){e&&ye(e.$$.fragment,o),i=!1},d(o){t[38](null),o&&D(n),e&&Xt(e,o)}}}function U_(t,e,n){const i=["use","class","nonInteractive","dense","textualList","avatarList","iconList","imageList","thumbnailList","videoList","twoLine","threeLine","vertical","wrapFocus","singleSelection","selectedIndex","radioList","checkList","hasTypeahead","component","layout","setEnabled","getTypeaheadInProgress","getSelectedIndex","getFocusedItemIndex","getElement"];let s=ne(e,i),{$$slots:r={},$$scope:a}=e;var o;const{closest:u,matches:c}=Uo,l=Be(be());let{use:h=[]}=e,{class:d=""}=e,{nonInteractive:f=!1}=e,{dense:m=!1}=e,{textualList:y=!1}=e,{avatarList:g=!1}=e,{iconList:v=!1}=e,{imageList:I=!1}=e,{thumbnailList:_=!1}=e,{videoList:M=!1}=e,{twoLine:x=!1}=e,{threeLine:b=!1}=e,{vertical:N=!0}=e,{wrapFocus:w=(o=Ct("SMUI:list:wrapFocus"))!==null&&o!==void 0?o:!1}=e,{singleSelection:R=!1}=e,{selectedIndex:P=-1}=e,{radioList:Y=!1}=e,{checkList:oe=!1}=e,{hasTypeahead:C=!1}=e,j,G,U=[],k=Ct("SMUI:list:role"),Se=Ct("SMUI:list:nav");const Ae=new WeakMap;let qe=Ct("SMUI:dialog:selection"),Mt=Ct("SMUI:addLayoutListener"),Ut,{component:Vt=Se?Nv:kv}=e;tt("SMUI:list:nonInteractive",f),tt("SMUI:separator:context","list"),k||(R?(k="listbox",tt("SMUI:list:item:role","option")):Y?(k="radiogroup",tt("SMUI:list:item:role","radio")):oe?(k="group",tt("SMUI:list:item:role","checkbox")):(k="list",tt("SMUI:list:item:role",void 0))),Mt&&(Ut=Mt(Nn)),ii(()=>{n(13,G=new E_({addClassForElementIndex:We,focusItemAtIndex:L,getAttributeForElementIndex:(H,z)=>{var Te,Mn;return(Mn=(Te=_e()[H])===null||Te===void 0?void 0:Te.getAttr(z))!==null&&Mn!==void 0?Mn:null},getFocusedElementIndex:()=>document.activeElement?_e().map(H=>H.element).indexOf(document.activeElement):-1,getListItemCount:()=>U.length,getPrimaryTextAtIndex:Fe,hasCheckboxAtIndex:H=>{var z,Te;return(Te=(z=_e()[H])===null||z===void 0?void 0:z.hasCheckbox)!==null&&Te!==void 0?Te:!1},hasRadioAtIndex:H=>{var z,Te;return(Te=(z=_e()[H])===null||z===void 0?void 0:z.hasRadio)!==null&&Te!==void 0?Te:!1},isCheckboxCheckedAtIndex:H=>{var z;const Te=_e()[H];return(z=(Te==null?void 0:Te.hasCheckbox)&&Te.checked)!==null&&z!==void 0?z:!1},isFocusInsideList:()=>j!=null&&Wt()!==document.activeElement&&Wt().contains(document.activeElement),isRootFocused:()=>j!=null&&document.activeElement===Wt(),listItemAtIndexHasClass:ce,notifyAction:H=>{n(24,P=H),j!=null&&it(Wt(),"SMUIList:action",{index:H},void 0,!0)},removeClassForElementIndex:dn,setAttributeForElementIndex:en,setCheckedCheckboxOrRadioAtIndex:(H,z)=>{_e()[H].checked=z},setTabIndexForListItemChildren:(H,z)=>{const Te=_e()[H],Mn="button:not(:disabled), a";Array.prototype.forEach.call(Te.element.querySelectorAll(Mn),to=>{to.setAttribute("tabindex",z)})}}));const T={get element(){return Wt()},get items(){return U},get typeaheadInProgress(){return G.isTypeaheadInProgress()},typeaheadMatchItem(H,z){return G.typeaheadMatchItem(H,z,!0)},getOrderedList:_e,focusItemAtIndex:L,addClassForElementIndex:We,removeClassForElementIndex:dn,setAttributeForElementIndex:en,removeAttributeForElementIndex:S,getAttributeFromElementIndex:$,getPrimaryTextAtIndex:Fe};return it(Wt(),"SMUIList:mount",T),G.init(),()=>{G.destroy()}}),si(()=>{Ut&&Ut()});function zt(T){U.push(T.detail),Ae.set(T.detail.element,T.detail),R&&T.detail.selected&&n(24,P=Nt(T.detail.element)),T.stopPropagation()}function hn(T){var H;const z=(H=T.detail&&U.indexOf(T.detail))!==null&&H!==void 0?H:-1;z!==-1&&(U.splice(z,1),U=U,Ae.delete(T.detail.element)),T.stopPropagation()}function Gt(T){if(Y||oe){const H=Nt(T.target);if(H!==-1){const z=_e()[H];z&&(Y&&!z.checked||oe)&&(z.checked=!z.checked,z.activateRipple(),window.requestAnimationFrame(()=>{z.deactivateRipple()}))}}}function _e(){return j==null?[]:[...Wt().children].map(T=>Ae.get(T)).filter(T=>T&&T._smui_list_item_accessor)}function L(T){const H=_e()[T];H&&"focus"in H.element&&H.element.focus()}function ce(T,H){var z;const Te=_e()[T];return(z=Te&&Te.hasClass(H))!==null&&z!==void 0?z:!1}function We(T,H){const z=_e()[T];z&&z.addClass(H)}function dn(T,H){const z=_e()[T];z&&z.removeClass(H)}function en(T,H,z){const Te=_e()[T];Te&&Te.addAttr(H,z)}function S(T,H){const z=_e()[T];z&&z.removeAttr(H)}function $(T,H){const z=_e()[T];return z?z.getAttr(H):null}function Fe(T){var H;const z=_e()[T];return(H=z&&z.getPrimaryText())!==null&&H!==void 0?H:""}function Nt(T){const H=u(T,".mdc-deprecated-list-item, .mdc-deprecated-list");return H&&c(H,".mdc-deprecated-list-item")?_e().map(z=>z==null?void 0:z.element).indexOf(H):-1}function Nn(){return G.layout()}function qt(T,H){return G.setEnabled(T,H)}function kn(){return G.isTypeaheadInProgress()}function fn(){return G.getSelectedIndex()}function Yr(){return G.getFocusedItemIndex()}function Wt(){return j.getElement()}function Jr(T){fe[T?"unshift":"push"](()=>{j=T,n(14,j)})}const Zr=T=>G&&G.handleKeydown(T,T.target.classList.contains("mdc-deprecated-list-item"),Nt(T.target)),$r=T=>G&&G.handleFocusIn(Nt(T.target)),eo=T=>G&&G.handleFocusOut(Nt(T.target)),Rs=T=>G&&G.handleClick(Nt(T.target),!c(T.target,'input[type="checkbox"], input[type="radio"]'));return t.$$set=T=>{e=B(B({},e),Me(T)),n(23,s=ne(e,i)),"use"in T&&n(0,h=T.use),"class"in T&&n(1,d=T.class),"nonInteractive"in T&&n(2,f=T.nonInteractive),"dense"in T&&n(3,m=T.dense),"textualList"in T&&n(4,y=T.textualList),"avatarList"in T&&n(5,g=T.avatarList),"iconList"in T&&n(6,v=T.iconList),"imageList"in T&&n(7,I=T.imageList),"thumbnailList"in T&&n(8,_=T.thumbnailList),"videoList"in T&&n(9,M=T.videoList),"twoLine"in T&&n(10,x=T.twoLine),"threeLine"in T&&n(11,b=T.threeLine),"vertical"in T&&n(25,N=T.vertical),"wrapFocus"in T&&n(26,w=T.wrapFocus),"singleSelection"in T&&n(27,R=T.singleSelection),"selectedIndex"in T&&n(24,P=T.selectedIndex),"radioList"in T&&n(28,Y=T.radioList),"checkList"in T&&n(29,oe=T.checkList),"hasTypeahead"in T&&n(30,C=T.hasTypeahead),"component"in T&&n(12,Vt=T.component),"$$scope"in T&&n(43,a=T.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&33562624&&G&&G.setVerticalOrientation(N),t.$$.dirty[0]&67117056&&G&&G.setWrapFocus(w),t.$$.dirty[0]&1073750016&&G&&G.setHasTypeahead(C),t.$$.dirty[0]&134225920&&G&&G.setSingleSelection(R),t.$$.dirty[0]&151003136&&G&&R&&fn()!==P&&G.setSelectedIndex(P)},[h,d,f,m,y,g,v,I,_,M,x,b,Vt,G,j,k,c,l,qe,zt,hn,Gt,Nt,s,P,N,w,R,Y,oe,C,Nn,qt,kn,fn,Yr,Wt,r,Jr,Zr,$r,eo,Rs,a]}class NT extends Ve{constructor(e){super();Ue(this,e,U_,F_,ke,{use:0,class:1,nonInteractive:2,dense:3,textualList:4,avatarList:5,iconList:6,imageList:7,thumbnailList:8,videoList:9,twoLine:10,threeLine:11,vertical:25,wrapFocus:26,singleSelection:27,selectedIndex:24,radioList:28,checkList:29,hasTypeahead:30,component:12,layout:31,setEnabled:32,getTypeaheadInProgress:33,getSelectedIndex:34,getFocusedItemIndex:35,getElement:36},null,[-1,-1])}get layout(){return this.$$.ctx[31]}get setEnabled(){return this.$$.ctx[32]}get getTypeaheadInProgress(){return this.$$.ctx[33]}get getSelectedIndex(){return this.$$.ctx[34]}get getFocusedItemIndex(){return this.$$.ctx[35]}get getElement(){return this.$$.ctx[36]}}function Nd(t){let e;return{c(){e=J("span"),this.h()},l(n){e=ee(n,"SPAN",{class:!0}),se(e).forEach(D),this.h()},h(){ie(e,"class","mdc-deprecated-list-item__ripple")},m(n,i){re(n,e,i)},d(n){n&&D(e)}}}function V_(t){let e,n,i=t[6]&&Nd();const s=t[32].default,r=Qe(s,t,t[35],null);return{c(){i&&i.c(),e=Pt(),r&&r.c()},l(a){i&&i.l(a),e=Pt(),r&&r.l(a)},m(a,o){i&&i.m(a,o),re(a,e,o),r&&r.m(a,o),n=!0},p(a,o){a[6]?i||(i=Nd(),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),r&&r.p&&(!n||o[1]&16)&&Je(r,s,a,a[35],n?Ye(s,a[35],o,null):Ze(a[35]),null)},i(a){n||(ge(r,a),n=!0)},o(a){ye(r,a),n=!1},d(a){i&&i.d(a),a&&D(e),r&&r.d(a)}}}function B_(t){let e,n,i;const s=[{use:[...t[5]?[]:[[jn,{ripple:!t[13],unbounded:!1,color:(t[7]||t[0])&&t[4]==null?"primary":t[4],disabled:t[9],addClass:t[21],removeClass:t[22],addStyle:t[23]}]],t[19],...t[1]]},{class:ve(Xe({[t[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":t[7],"mdc-deprecated-list-item--selected":t[0],"mdc-deprecated-list-item--disabled":t[9],"mdc-menu-item--selected":!t[20]&&t[8]==="menuitem"&&t[0],"smui-menu-item--non-interactive":t[5]},t[15]))},{style:Object.entries(t[16]).map(kd).concat([t[3]]).join(" ")},t[20]&&t[7]?{"aria-current":"page"}:{},t[20]?{}:{role:t[8]},!t[20]&&t[8]==="option"?{"aria-selected":t[0]?"true":"false"}:{},!t[20]&&(t[8]==="radio"||t[8]==="checkbox")?{"aria-checked":t[13]&&t[13].checked?"true":"false"}:{},t[20]?{}:{"aria-disabled":t[9]?"true":"false"},{"data-menu-item-skip-restore-focus":t[10]||void 0},{tabindex:t[18]},{href:t[11]},t[17],t[27]];var r=t[12];function a(o){let u={$$slots:{default:[V_]},$$scope:{ctx:o}};for(let c=0;c<s.length;c+=1)u=B(u,s[c]);return{props:u}}return r&&(e=new r(a(t)),t[33](e),e.$on("click",t[24]),e.$on("keydown",t[25]),e.$on("SMUIGenericInput:mount",t[26]),e.$on("SMUIGenericInput:unmount",t[34])),{c(){e&&nn(e.$$.fragment),n=Pt()},l(o){e&&Pi(e.$$.fragment,o),n=Pt()},m(o,u){e&&Kt(e,o,u),re(o,n,u),i=!0},p(o,u){const c=u[0]&150974399?Oe(s,[u[0]&15213235&&{use:[...o[5]?[]:[[jn,{ripple:!o[13],unbounded:!1,color:(o[7]||o[0])&&o[4]==null?"primary":o[4],disabled:o[9],addClass:o[21],removeClass:o[22],addStyle:o[23]}]],o[19],...o[1]]},u[0]&1082277&&{class:ve(Xe({[o[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":o[7],"mdc-deprecated-list-item--selected":o[0],"mdc-deprecated-list-item--disabled":o[9],"mdc-menu-item--selected":!o[20]&&o[8]==="menuitem"&&o[0],"smui-menu-item--non-interactive":o[5]},o[15]))},u[0]&65544&&{style:Object.entries(o[16]).map(kd).concat([o[3]]).join(" ")},u[0]&1048704&&vt(o[20]&&o[7]?{"aria-current":"page"}:{}),u[0]&1048832&&vt(o[20]?{}:{role:o[8]}),u[0]&1048833&&vt(!o[20]&&o[8]==="option"?{"aria-selected":o[0]?"true":"false"}:{}),u[0]&1057024&&vt(!o[20]&&(o[8]==="radio"||o[8]==="checkbox")?{"aria-checked":o[13]&&o[13].checked?"true":"false"}:{}),u[0]&1049088&&vt(o[20]?{}:{"aria-disabled":o[9]?"true":"false"}),u[0]&1024&&{"data-menu-item-skip-restore-focus":o[10]||void 0},u[0]&262144&&{tabindex:o[18]},u[0]&2048&&{href:o[11]},u[0]&131072&&vt(o[17]),u[0]&134217728&&vt(o[27])]):{};if(u[0]&64|u[1]&16&&(c.$$scope={dirty:u,ctx:o}),r!==(r=o[12])){if(e){Bs();const l=e;ye(l.$$.fragment,1,0,()=>{Xt(l,1)}),Hs()}r?(e=new r(a(o)),o[33](e),e.$on("click",o[24]),e.$on("keydown",o[25]),e.$on("SMUIGenericInput:mount",o[26]),e.$on("SMUIGenericInput:unmount",o[34]),nn(e.$$.fragment),ge(e.$$.fragment,1),Kt(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(o){i||(e&&ge(e.$$.fragment,o),i=!0)},o(o){e&&ye(e.$$.fragment,o),i=!1},d(o){t[33](null),o&&D(n),e&&Xt(e,o)}}}let H_=0;const kd=([t,e])=>`${t}: ${e};`;function x_(t,e,n){let i;const s=["use","class","style","color","nonInteractive","ripple","activated","role","selected","disabled","skipRestoreFocus","tabindex","inputId","href","component","getPrimaryText","getElement"];let r=ne(e,s),{$$slots:a={},$$scope:o}=e;var u;const c=Be(be());let l=()=>{};function h(S){return S===l}let{use:d=[]}=e,{class:f=""}=e,{style:m=""}=e,{color:y=void 0}=e,{nonInteractive:g=(u=Ct("SMUI:list:nonInteractive"))!==null&&u!==void 0?u:!1}=e;tt("SMUI:list:nonInteractive",void 0);let{ripple:v=!g}=e,{activated:I=!1}=e,{role:_=Ct("SMUI:list:item:role")}=e;tt("SMUI:list:item:role",void 0);let{selected:M=!1}=e,{disabled:x=!1}=e,{skipRestoreFocus:b=!1}=e,{tabindex:N=l}=e,{inputId:w="SMUI-form-field-list-"+H_++}=e,{href:R=void 0}=e,P,Y={},oe={},C={},j,G,U=Ct("SMUI:list:item:nav"),{component:k=U?R?kl:Ki:Lv}=e;tt("SMUI:generic:input:props",{id:w}),tt("SMUI:separator:context",void 0),ii(()=>{if(!M&&!g){let $=!0,Fe=P;for(;Fe.previousSibling;)if(Fe=Fe.previousSibling,Fe.nodeType===1&&Fe.classList.contains("mdc-deprecated-list-item")&&!Fe.classList.contains("mdc-deprecated-list-item--disabled")){$=!1;break}$&&(G=window.requestAnimationFrame(hn))}const S={_smui_list_item_accessor:!0,get element(){return We()},get selected(){return M},set selected($){n(0,M=$)},hasClass:Se,addClass:Ae,removeClass:qe,getAttr:Ut,addAttr:Vt,removeAttr:zt,getPrimaryText:ce,get checked(){var $;return($=j&&j.checked)!==null&&$!==void 0?$:!1},set checked($){j&&n(13,j.checked=!!$,j)},get hasCheckbox(){return!!(j&&"_smui_checkbox_accessor"in j)},get hasRadio(){return!!(j&&"_smui_radio_accessor"in j)},activateRipple(){j&&j.activateRipple()},deactivateRipple(){j&&j.deactivateRipple()},getValue(){return r.value}};return it(We(),"SMUIListItem:mount",S),()=>{it(We(),"SMUIListItem:unmount",S)}}),si(()=>{G&&window.cancelAnimationFrame(G)});function Se(S){return S in Y?Y[S]:We().classList.contains(S)}function Ae(S){Y[S]||n(15,Y[S]=!0,Y)}function qe(S){(!(S in Y)||Y[S])&&n(15,Y[S]=!1,Y)}function Mt(S,$){oe[S]!=$&&($===""||$==null?(delete oe[S],n(16,oe)):n(16,oe[S]=$,oe))}function Ut(S){var $;return S in C?($=C[S])!==null&&$!==void 0?$:null:We().getAttribute(S)}function Vt(S,$){C[S]!==$&&n(17,C[S]=$,C)}function zt(S){(!(S in C)||C[S]!=null)&&n(17,C[S]=void 0,C)}function hn(){let S=!0,$=P.getElement();for(;$.nextElementSibling;)if($=$.nextElementSibling,$.nodeType===1&&$.classList.contains("mdc-deprecated-list-item")){const Fe=$.attributes.getNamedItem("tabindex");if(Fe&&Fe.value==="0"){S=!1;break}}S&&n(18,i=0)}function Gt(S){x||it(We(),"SMUI:action",S)}function _e(S){const $=S.key==="Enter",Fe=S.key==="Space";($||Fe)&&Gt(S)}function L(S){("_smui_checkbox_accessor"in S.detail||"_smui_radio_accessor"in S.detail)&&n(13,j=S.detail)}function ce(){var S,$,Fe;const Nt=We(),Nn=Nt.querySelector(".mdc-deprecated-list-item__primary-text");if(Nn)return(S=Nn.textContent)!==null&&S!==void 0?S:"";const qt=Nt.querySelector(".mdc-deprecated-list-item__text");return qt?($=qt.textContent)!==null&&$!==void 0?$:"":(Fe=Nt.textContent)!==null&&Fe!==void 0?Fe:""}function We(){return P.getElement()}function dn(S){fe[S?"unshift":"push"](()=>{P=S,n(14,P)})}const en=()=>n(13,j=void 0);return t.$$set=S=>{e=B(B({},e),Me(S)),n(27,r=ne(e,s)),"use"in S&&n(1,d=S.use),"class"in S&&n(2,f=S.class),"style"in S&&n(3,m=S.style),"color"in S&&n(4,y=S.color),"nonInteractive"in S&&n(5,g=S.nonInteractive),"ripple"in S&&n(6,v=S.ripple),"activated"in S&&n(7,I=S.activated),"role"in S&&n(8,_=S.role),"selected"in S&&n(0,M=S.selected),"disabled"in S&&n(9,x=S.disabled),"skipRestoreFocus"in S&&n(10,b=S.skipRestoreFocus),"tabindex"in S&&n(28,N=S.tabindex),"inputId"in S&&n(29,w=S.inputId),"href"in S&&n(11,R=S.href),"component"in S&&n(12,k=S.component),"$$scope"in S&&n(35,o=S.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&268444193&&n(18,i=h(N)?!g&&!x&&(M||j&&j.checked)?0:-1:N)},[M,d,f,m,y,g,v,I,_,x,b,R,k,j,P,Y,oe,C,i,c,U,Ae,qe,Mt,Gt,_e,L,r,N,w,ce,We,a,dn,en,o]}class j_ extends Ve{constructor(e){super();Ue(this,e,x_,B_,ke,{use:1,class:2,style:3,color:4,nonInteractive:5,ripple:6,activated:7,role:8,selected:0,disabled:9,skipRestoreFocus:10,tabindex:28,inputId:29,href:11,component:12,getPrimaryText:30,getElement:31},null,[-1,-1])}get getPrimaryText(){return this.$$.ctx[30]}get getElement(){return this.$$.ctx[31]}}gt({class:"mdc-deprecated-list-item__text",component:Ki});gt({class:"mdc-deprecated-list-item__primary-text",component:Ki});gt({class:"mdc-deprecated-list-item__secondary-text",component:Ki});function z_(t){let e,n,i,s,r,a;const o=t[8].default,u=Qe(o,t,t[7],null);let c=[{class:n=ve({[t[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":t[4]})},t[5]],l={};for(let h=0;h<c.length;h+=1)l=B(l,c[h]);return{c(){e=J("span"),u&&u.c(),this.h()},l(h){e=ee(h,"SPAN",{class:!0});var d=se(e);u&&u.l(d),d.forEach(D),this.h()},h(){le(e,l)},m(h,d){re(h,e,d),u&&u.m(e,null),t[9](e),s=!0,r||(a=[de(i=It.call(null,e,t[0])),de(t[3].call(null,e))],r=!0)},p(h,[d]){u&&u.p&&(!s||d&128)&&Je(u,o,h,h[7],s?Ye(o,h[7],d,null):Ze(h[7]),null),le(e,l=Oe(c,[(!s||d&2&&n!==(n=ve({[h[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":h[4]})))&&{class:n},d&32&&h[5]])),i&&Ne(i.update)&&d&1&&i.update.call(null,h[0])},i(h){s||(ge(u,h),s=!0)},o(h){ye(u,h),s=!1},d(h){h&&D(e),u&&u.d(h),t[9](null),r=!1,we(a)}}}function G_(t,e,n){const i=["use","class","getElement"];let s=ne(e,i),{$$slots:r={},$$scope:a}=e;const o=Be(be());let{use:u=[]}=e,{class:c=""}=e,l,h=Ct("SMUI:list:graphic:menu-selection-group");function d(){return l}function f(m){fe[m?"unshift":"push"](()=>{l=m,n(2,l)})}return t.$$set=m=>{e=B(B({},e),Me(m)),n(5,s=ne(e,i)),"use"in m&&n(0,u=m.use),"class"in m&&n(1,c=m.class),"$$scope"in m&&n(7,a=m.$$scope)},[u,c,l,o,h,s,d,a,r,f]}class q_ extends Ve{constructor(e){super();Ue(this,e,G_,z_,ke,{use:0,class:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}gt({class:"mdc-deprecated-list-item__meta",component:Ki});gt({class:"mdc-deprecated-list-group",component:_n});gt({class:"mdc-deprecated-list-group__subheader",component:Ov});const kT=j_,W_=q_;gt({class:"mdc-menu__selection-group-icon",component:W_});/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Lt={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},K_={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Md=function(t){Vn(e,t);function e(n){var i=t.call(this,yt(yt({},e.defaultAdapter),n))||this;return i.animationFrame=0,i.animationTimer=0,i}return Object.defineProperty(e,"strings",{get:function(){return K_},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Lt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var n=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(Lt.OPEN),this.adapter.addClass(Lt.ANIMATE),this.runNextAnimationFrame(function(){n.adapter.addClass(Lt.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(Lt.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(Lt.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(Lt.OPENING)||this.adapter.hasClass(Lt.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(Lt.CLOSING)},e.prototype.handleKeydown=function(n){var i=n.keyCode,s=n.key,r=s==="Escape"||i===27;r&&this.close()},e.prototype.handleTransitionEnd=function(n){var i=Lt.OPENING,s=Lt.CLOSING,r=Lt.OPEN,a=Lt.ANIMATE,o=Lt.ROOT,u=this.isElement(n.target)&&this.adapter.elementHasClass(n.target,o);!u||(this.isClosing()?(this.adapter.removeClass(r),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(a),this.adapter.removeClass(i),this.adapter.removeClass(s))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(n){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(n,0)})},e.prototype.isElement=function(n){return Boolean(n.classList)},e}(di);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var X_=function(t){Vn(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(Md);function Q_(t){let e,n,i,s,r,a;const o=t[15].default,u=Qe(o,t,t[14],null);let c=[{class:n=ve(Xe({[t[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":t[2]==="dismissible","mdc-drawer--modal":t[2]==="modal","smui-drawer__absolute":t[2]==="modal"&&!t[3]},t[6]))},t[8]],l={};for(let h=0;h<c.length;h+=1)l=B(l,c[h]);return{c(){e=J("aside"),u&&u.c(),this.h()},l(h){e=ee(h,"ASIDE",{class:!0});var d=se(e);u&&u.l(d),d.forEach(D),this.h()},h(){le(e,l)},m(h,d){re(h,e,d),u&&u.m(e,null),t[16](e),s=!0,r||(a=[de(i=It.call(null,e,t[0])),de(t[7].call(null,e)),et(e,"keydown",t[17]),et(e,"transitionend",t[18])],r=!0)},p(h,[d]){u&&u.p&&(!s||d&16384)&&Je(u,o,h,h[14],s?Ye(o,h[14],d,null):Ze(h[14]),null),le(e,l=Oe(c,[(!s||d&78&&n!==(n=ve(Xe({[h[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":h[2]==="dismissible","mdc-drawer--modal":h[2]==="modal","smui-drawer__absolute":h[2]==="modal"&&!h[3]},h[6]))))&&{class:n},d&256&&h[8]])),i&&Ne(i.update)&&d&1&&i.update.call(null,h[0])},i(h){s||(ge(u,h),s=!0)},o(h){ye(u,h),s=!1},d(h){h&&D(e),u&&u.d(h),t[16](null),r=!1,we(a)}}}function Y_(t,e,n){const i=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let s=ne(e,i),{$$slots:r={},$$scope:a}=e;const{FocusTrap:o}=Yg,u=Be(be());let{use:c=[]}=e,{class:l=""}=e,{variant:h=void 0}=e,{open:d=!1}=e,{fixed:f=!0}=e,m,y,g={},v=null,I,_=!1;tt("SMUI:list:nav",!0),tt("SMUI:list:item:nav",!0),tt("SMUI:list:wrapFocus",!0);let M=h;ii(()=>{I=new o(m,{skipInitialFocus:!0}),n(4,y=x()),y&&y.init()}),si(()=>{y&&y.destroy(),_&&_.removeEventListener("SMUIDrawerScrim:click",R)});function x(){var U,k;_&&_.removeEventListener("SMUIDrawerScrim:click",R),h==="modal"&&(_=(k=(U=m.parentNode)===null||U===void 0?void 0:U.querySelector(".mdc-drawer-scrim"))!==null&&k!==void 0?k:!1,_&&_.addEventListener("SMUIDrawerScrim:click",R));const Se=h==="dismissible"?Md:h==="modal"?X_:void 0;return Se?new Se({addClass:N,removeClass:w,hasClass:b,elementHasClass:(Ae,qe)=>Ae.classList.contains(qe),saveFocus:()=>v=document.activeElement,restoreFocus:()=>{v&&"focus"in v&&m.contains(document.activeElement)&&v.focus()},focusActiveNavigationItem:()=>{const Ae=m.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");Ae&&Ae.focus()},notifyClose:()=>{n(9,d=!1),it(m,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{n(9,d=!0),it(m,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>I.trapFocus(),releaseFocus:()=>I.releaseFocus()}):void 0}function b(U){return U in g?g[U]:oe().classList.contains(U)}function N(U){g[U]||n(6,g[U]=!0,g)}function w(U){(!(U in g)||g[U])&&n(6,g[U]=!1,g)}function R(){y&&"handleScrimClick"in y&&y.handleScrimClick()}function P(U){n(9,d=U)}function Y(){return d}function oe(){return m}function C(U){fe[U?"unshift":"push"](()=>{m=U,n(5,m)})}const j=U=>y&&y.handleKeydown(U),G=U=>y&&y.handleTransitionEnd(U);return t.$$set=U=>{e=B(B({},e),Me(U)),n(8,s=ne(e,i)),"use"in U&&n(0,c=U.use),"class"in U&&n(1,l=U.class),"variant"in U&&n(2,h=U.variant),"open"in U&&n(9,d=U.open),"fixed"in U&&n(3,f=U.fixed),"$$scope"in U&&n(14,a=U.$$scope)},t.$$.update=()=>{t.$$.dirty&8212&&M!==h&&(n(13,M=h),y&&y.destroy(),n(6,g={}),n(4,y=x()),y&&y.init()),t.$$.dirty&528&&y&&y.isOpen()!==d&&(d?y.open():y.close())},[c,l,h,f,y,m,g,u,s,d,P,Y,oe,M,a,r,C,j,G]}class MT extends Ve{constructor(e){super();Ue(this,e,Y_,Q_,ke,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}var PT=gt({class:"mdc-drawer-app-content",component:_n}),FT=gt({class:"mdc-drawer__content",component:_n});gt({class:"mdc-drawer__header",component:_n});gt({class:"mdc-drawer__title",component:Rv});gt({class:"mdc-drawer__subtitle",component:Dv});function J_(t){let e,n,i,s,r,a;const o=t[9].default,u=Qe(o,t,t[8],null);let c=[{class:n=ve({[t[1]]:!0,"mdc-card":!0,"mdc-card--outlined":t[2]==="outlined","smui-card--padded":t[3]})},t[6]],l={};for(let h=0;h<c.length;h+=1)l=B(l,c[h]);return{c(){e=J("div"),u&&u.c(),this.h()},l(h){e=ee(h,"DIV",{class:!0});var d=se(e);u&&u.l(d),d.forEach(D),this.h()},h(){le(e,l)},m(h,d){re(h,e,d),u&&u.m(e,null),t[10](e),s=!0,r||(a=[de(i=It.call(null,e,t[0])),de(t[5].call(null,e))],r=!0)},p(h,[d]){u&&u.p&&(!s||d&256)&&Je(u,o,h,h[8],s?Ye(o,h[8],d,null):Ze(h[8]),null),le(e,l=Oe(c,[(!s||d&14&&n!==(n=ve({[h[1]]:!0,"mdc-card":!0,"mdc-card--outlined":h[2]==="outlined","smui-card--padded":h[3]})))&&{class:n},d&64&&h[6]])),i&&Ne(i.update)&&d&1&&i.update.call(null,h[0])},i(h){s||(ge(u,h),s=!0)},o(h){ye(u,h),s=!1},d(h){h&&D(e),u&&u.d(h),t[10](null),r=!1,we(a)}}}function Z_(t,e,n){const i=["use","class","variant","padded","getElement"];let s=ne(e,i),{$$slots:r={},$$scope:a}=e;const o=Be(be());let{use:u=[]}=e,{class:c=""}=e,{variant:l="raised"}=e,{padded:h=!1}=e,d;function f(){return d}function m(y){fe[y?"unshift":"push"](()=>{d=y,n(4,d)})}return t.$$set=y=>{e=B(B({},e),Me(y)),n(6,s=ne(e,i)),"use"in y&&n(0,u=y.use),"class"in y&&n(1,c=y.class),"variant"in y&&n(2,l=y.variant),"padded"in y&&n(3,h=y.padded),"$$scope"in y&&n(8,a=y.$$scope)},[u,c,l,h,d,o,s,f,a,r,m]}class UT extends Ve{constructor(e){super();Ue(this,e,Z_,J_,ke,{use:0,class:1,variant:2,padded:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}gt({class:"smui-card__content",component:_n});gt({class:"mdc-card__media-content",component:_n});gt({class:"mdc-card__action-buttons",component:_n});gt({class:"mdc-card__action-icons",component:_n});function Pd(t){const e=t-1;return e*e*e+1}function Fd(t){return Object.prototype.toString.call(t)==="[object Date]"}function mu(t,e,n,i){if(typeof n=="number"||Fd(n)){const s=i-n,r=(n-e)/(t.dt||1/60),a=t.opts.stiffness*s,o=t.opts.damping*r,u=(a-o)*t.inv_mass,c=(r+u)*t.dt;return Math.abs(c)<t.opts.precision&&Math.abs(s)<t.opts.precision?i:(t.settled=!1,Fd(n)?new Date(n.getTime()+c):n+c)}else{if(Array.isArray(n))return n.map((s,r)=>mu(t,e[r],n[r],i[r]));if(typeof n=="object"){const s={};for(const r in n)s[r]=mu(t,e[r],n[r],i[r]);return s}else throw new Error(`Cannot spring ${typeof n} values`)}}function VT(t,e={}){const n=$f(t),{stiffness:i=.15,damping:s=.8,precision:r=.01}=e;let a,o,u,c=t,l=t,h=1,d=0,f=!1;function m(g,v={}){l=g;const I=u={};if(t==null||v.hard||y.stiffness>=1&&y.damping>=1)return f=!0,a=Os(),c=g,n.set(t=l),Promise.resolve();if(v.soft){const _=v.soft===!0?.5:+v.soft;d=1/(_*60),h=0}return o||(a=Os(),f=!1,o=io(_=>{if(f)return f=!1,o=null,!1;h=Math.min(h+d,1);const M={inv_mass:h,opts:y,settled:!0,dt:(_-a)*60/1e3},x=mu(M,c,t,l);return a=_,c=t,n.set(t=x),M.settled&&(o=null),!M.settled})),new Promise(_=>{o.promise.then(()=>{I===u&&_()})})}const y={set:m,update:(g,v)=>m(g(l,t),v),subscribe:n.subscribe,stiffness:i,damping:s,precision:r};return y}/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ge={DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",INPUT:"mdc-slider__input",RANGE:"mdc-slider--range",THUMB:"mdc-slider__thumb",THUMB_FOCUSED:"mdc-slider__thumb--focused",THUMB_KNOB:"mdc-slider__thumb-knob",THUMB_TOP:"mdc-slider__thumb--top",THUMB_WITH_INDICATOR:"mdc-slider__thumb--with-indicator",TICK_MARKS:"mdc-slider--tick-marks",TICK_MARKS_CONTAINER:"mdc-slider__tick-marks",TICK_MARK_ACTIVE:"mdc-slider__tick-mark--active",TICK_MARK_INACTIVE:"mdc-slider__tick-mark--inactive",TRACK:"mdc-slider__track",TRACK_ACTIVE:"mdc-slider__track--active_fill",VALUE_INDICATOR_TEXT:"mdc-slider__value-indicator-text"},Ud={STEP_SIZE:1,THUMB_UPDATE_MIN_PX:5},ot={ARIA_VALUETEXT:"aria-valuetext",INPUT_DISABLED:"disabled",INPUT_MIN:"min",INPUT_MAX:"max",INPUT_VALUE:"value",INPUT_STEP:"step"};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var $_=function(){function t(){this.rafIDs=new Map}return t.prototype.request=function(e,n){var i=this;this.cancel(e);var s=requestAnimationFrame(function(r){i.rafIDs.delete(e),n(r)});this.rafIDs.set(e,s)},t.prototype.cancel=function(e){var n=this.rafIDs.get(e);n&&(cancelAnimationFrame(n),this.rafIDs.delete(e))},t.prototype.cancelAll=function(){var e=this;this.rafIDs.forEach(function(n,i){e.cancel(i)})},t.prototype.getQueue=function(){var e=[];return this.rafIDs.forEach(function(n,i){e.push(i)}),e},t}();/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ft;(function(t){t[t.ACTIVE=0]="ACTIVE",t[t.INACTIVE=1]="INACTIVE"})(Ft||(Ft={}));var E;(function(t){t[t.START=1]="START",t[t.END=2]="END"})(E||(E={}));/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Qr;(function(t){t.SLIDER_UPDATE="slider_update"})(Qr||(Qr={}));var pu=typeof window!="undefined",eT=function(t){Vn(e,t);function e(n){var i=t.call(this,yt(yt({},e.defaultAdapter),n))||this;return i.initialStylesRemoved=!1,i.isDisabled=!1,i.isDiscrete=!1,i.step=Ud.STEP_SIZE,i.hasTickMarks=!1,i.isRange=!1,i.thumb=null,i.downEventClientX=null,i.startThumbKnobWidth=0,i.endThumbKnobWidth=0,i.animFrame=new $_,i}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},addThumbClass:function(){},removeThumbClass:function(){},getAttribute:function(){return null},getInputValue:function(){return""},setInputValue:function(){},getInputAttribute:function(){return null},setInputAttribute:function(){return null},removeInputAttribute:function(){return null},focusInput:function(){},isInputFocused:function(){return!1},getThumbKnobWidth:function(){return 0},getThumbBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},isRTL:function(){return!1},setThumbStyleProperty:function(){},removeThumbStyleProperty:function(){},setTrackActiveStyleProperty:function(){},removeTrackActiveStyleProperty:function(){},setValueIndicatorText:function(){},getValueToAriaValueTextFn:function(){return null},updateTickMarks:function(){},setPointerCapture:function(){},emitChangeEvent:function(){},emitInputEvent:function(){},emitDragStartEvent:function(){},emitDragEndEvent:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){},registerThumbEventHandler:function(){},deregisterThumbEventHandler:function(){},registerInputEventHandler:function(){},deregisterInputEventHandler:function(){},registerBodyEventHandler:function(){},deregisterBodyEventHandler:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=this;this.isDisabled=this.adapter.hasClass(Ge.DISABLED),this.isDiscrete=this.adapter.hasClass(Ge.DISCRETE),this.hasTickMarks=this.adapter.hasClass(Ge.TICK_MARKS),this.isRange=this.adapter.hasClass(Ge.RANGE);var i=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(ot.INPUT_MIN,this.isRange?E.START:E.END),ot.INPUT_MIN),s=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(ot.INPUT_MAX,E.END),ot.INPUT_MAX),r=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(ot.INPUT_VALUE,E.END),ot.INPUT_VALUE),a=this.isRange?this.convertAttributeValueToNumber(this.adapter.getInputAttribute(ot.INPUT_VALUE,E.START),ot.INPUT_VALUE):i,o=this.adapter.getInputAttribute(ot.INPUT_STEP,E.END),u=o?this.convertAttributeValueToNumber(o,ot.INPUT_STEP):this.step;this.validateProperties({min:i,max:s,value:r,valueStart:a,step:u}),this.min=i,this.max=s,this.value=r,this.valueStart=a,this.step=u,this.numDecimalPlaces=Vd(this.step),this.valueBeforeDownEvent=r,this.valueStartBeforeDownEvent=a,this.mousedownOrTouchstartListener=this.handleMousedownOrTouchstart.bind(this),this.moveListener=this.handleMove.bind(this),this.pointerdownListener=this.handlePointerdown.bind(this),this.pointerupListener=this.handlePointerup.bind(this),this.thumbMouseenterListener=this.handleThumbMouseenter.bind(this),this.thumbMouseleaveListener=this.handleThumbMouseleave.bind(this),this.inputStartChangeListener=function(){n.handleInputChange(E.START)},this.inputEndChangeListener=function(){n.handleInputChange(E.END)},this.inputStartFocusListener=function(){n.handleInputFocus(E.START)},this.inputEndFocusListener=function(){n.handleInputFocus(E.END)},this.inputStartBlurListener=function(){n.handleInputBlur(E.START)},this.inputEndBlurListener=function(){n.handleInputBlur(E.END)},this.resizeListener=this.handleResize.bind(this),this.registerEventHandlers()},e.prototype.destroy=function(){this.deregisterEventHandlers()},e.prototype.setMin=function(n){this.min=n,this.isRange||(this.valueStart=n),this.updateUI()},e.prototype.setMax=function(n){this.max=n,this.updateUI()},e.prototype.getMin=function(){return this.min},e.prototype.getMax=function(){return this.max},e.prototype.getValue=function(){return this.value},e.prototype.setValue=function(n){if(this.isRange&&n<this.valueStart)throw new Error("end thumb value ("+n+") must be >= start thumb "+("value ("+this.valueStart+")"));this.updateValue(n,E.END)},e.prototype.getValueStart=function(){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");return this.valueStart},e.prototype.setValueStart=function(n){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");if(this.isRange&&n>this.value)throw new Error("start thumb value ("+n+") must be <= end thumb "+("value ("+this.value+")"));this.updateValue(n,E.START)},e.prototype.setStep=function(n){this.step=n,this.numDecimalPlaces=Vd(n),this.updateUI()},e.prototype.setIsDiscrete=function(n){this.isDiscrete=n,this.updateValueIndicatorUI(),this.updateTickMarksUI()},e.prototype.getStep=function(){return this.step},e.prototype.setHasTickMarks=function(n){this.hasTickMarks=n,this.updateTickMarksUI()},e.prototype.getDisabled=function(){return this.isDisabled},e.prototype.setDisabled=function(n){this.isDisabled=n,n?(this.adapter.addClass(Ge.DISABLED),this.isRange&&this.adapter.setInputAttribute(ot.INPUT_DISABLED,"",E.START),this.adapter.setInputAttribute(ot.INPUT_DISABLED,"",E.END)):(this.adapter.removeClass(Ge.DISABLED),this.isRange&&this.adapter.removeInputAttribute(ot.INPUT_DISABLED,E.START),this.adapter.removeInputAttribute(ot.INPUT_DISABLED,E.END))},e.prototype.getIsRange=function(){return this.isRange},e.prototype.layout=function(n){var i=n===void 0?{}:n,s=i.skipUpdateUI;this.rect=this.adapter.getBoundingClientRect(),this.isRange&&(this.startThumbKnobWidth=this.adapter.getThumbKnobWidth(E.START),this.endThumbKnobWidth=this.adapter.getThumbKnobWidth(E.END)),s||this.updateUI()},e.prototype.handleResize=function(){this.layout()},e.prototype.handleDown=function(n){if(!this.isDisabled){this.valueStartBeforeDownEvent=this.valueStart,this.valueBeforeDownEvent=this.value;var i=n.clientX!=null?n.clientX:n.targetTouches[0].clientX;this.downEventClientX=i;var s=this.mapClientXOnSliderScale(i);this.thumb=this.getThumbFromDownEvent(i,s),this.thumb!==null&&(this.handleDragStart(n,s,this.thumb),this.updateValue(s,this.thumb,{emitInputEvent:!0}))}},e.prototype.handleMove=function(n){if(!this.isDisabled){n.preventDefault();var i=n.clientX!=null?n.clientX:n.targetTouches[0].clientX,s=this.thumb!=null;if(this.thumb=this.getThumbFromMoveEvent(i),this.thumb!==null){var r=this.mapClientXOnSliderScale(i);s||(this.handleDragStart(n,r,this.thumb),this.adapter.emitDragStartEvent(r,this.thumb)),this.updateValue(r,this.thumb,{emitInputEvent:!0})}}},e.prototype.handleUp=function(){if(!(this.isDisabled||this.thumb===null)){var n=this.thumb===E.START?this.valueStartBeforeDownEvent:this.valueBeforeDownEvent,i=this.thumb===E.START?this.valueStart:this.value;n!==i&&this.adapter.emitChangeEvent(i,this.thumb),this.adapter.emitDragEndEvent(i,this.thumb),this.thumb=null}},e.prototype.handleThumbMouseenter=function(){!this.isDiscrete||!this.isRange||(this.adapter.addThumbClass(Ge.THUMB_WITH_INDICATOR,E.START),this.adapter.addThumbClass(Ge.THUMB_WITH_INDICATOR,E.END))},e.prototype.handleThumbMouseleave=function(){!this.isDiscrete||!this.isRange||this.adapter.isInputFocused(E.START)||this.adapter.isInputFocused(E.END)||(this.adapter.removeThumbClass(Ge.THUMB_WITH_INDICATOR,E.START),this.adapter.removeThumbClass(Ge.THUMB_WITH_INDICATOR,E.END))},e.prototype.handleMousedownOrTouchstart=function(n){var i=this,s=n.type==="mousedown"?"mousemove":"touchmove";this.adapter.registerBodyEventHandler(s,this.moveListener);var r=function(){i.handleUp(),i.adapter.deregisterBodyEventHandler(s,i.moveListener),i.adapter.deregisterEventHandler("mouseup",r),i.adapter.deregisterEventHandler("touchend",r)};this.adapter.registerBodyEventHandler("mouseup",r),this.adapter.registerBodyEventHandler("touchend",r),this.handleDown(n)},e.prototype.handlePointerdown=function(n){this.adapter.setPointerCapture(n.pointerId),this.adapter.registerEventHandler("pointermove",this.moveListener),this.handleDown(n)},e.prototype.handleInputChange=function(n){var i=Number(this.adapter.getInputValue(n));n===E.START?this.setValueStart(i):this.setValue(i),this.adapter.emitChangeEvent(n===E.START?this.valueStart:this.value,n),this.adapter.emitInputEvent(n===E.START?this.valueStart:this.value,n)},e.prototype.handleInputFocus=function(n){if(this.adapter.addThumbClass(Ge.THUMB_FOCUSED,n),!!this.isDiscrete&&(this.adapter.addThumbClass(Ge.THUMB_WITH_INDICATOR,n),this.isRange)){var i=n===E.START?E.END:E.START;this.adapter.addThumbClass(Ge.THUMB_WITH_INDICATOR,i)}},e.prototype.handleInputBlur=function(n){if(this.adapter.removeThumbClass(Ge.THUMB_FOCUSED,n),!!this.isDiscrete&&(this.adapter.removeThumbClass(Ge.THUMB_WITH_INDICATOR,n),this.isRange)){var i=n===E.START?E.END:E.START;this.adapter.removeThumbClass(Ge.THUMB_WITH_INDICATOR,i)}},e.prototype.handleDragStart=function(n,i,s){this.adapter.emitDragStartEvent(i,s),this.adapter.focusInput(s),n.preventDefault()},e.prototype.getThumbFromDownEvent=function(n,i){if(!this.isRange)return E.END;var s=this.adapter.getThumbBoundingClientRect(E.START),r=this.adapter.getThumbBoundingClientRect(E.END),a=n>=s.left&&n<=s.right,o=n>=r.left&&n<=r.right;return a&&o?null:a?E.START:o?E.END:i<this.valueStart?E.START:i>this.value?E.END:i-this.valueStart<=this.value-i?E.START:E.END},e.prototype.getThumbFromMoveEvent=function(n){if(this.thumb!==null)return this.thumb;if(this.downEventClientX===null)throw new Error("`downEventClientX` is null after move event.");var i=Math.abs(this.downEventClientX-n)<Ud.THUMB_UPDATE_MIN_PX;if(i)return this.thumb;var s=n<this.downEventClientX;return s?this.adapter.isRTL()?E.END:E.START:this.adapter.isRTL()?E.START:E.END},e.prototype.updateUI=function(n){this.updateThumbAndInputAttributes(n),this.updateThumbAndTrackUI(n),this.updateValueIndicatorUI(n),this.updateTickMarksUI()},e.prototype.updateThumbAndInputAttributes=function(n){if(!!n){var i=this.isRange&&n===E.START?this.valueStart:this.value,s=String(i);this.adapter.setInputAttribute(ot.INPUT_VALUE,s,n),this.isRange&&n===E.START?this.adapter.setInputAttribute(ot.INPUT_MIN,s,E.END):this.isRange&&n===E.END&&this.adapter.setInputAttribute(ot.INPUT_MAX,s,E.START),this.adapter.getInputValue(n)!==s&&this.adapter.setInputValue(s,n);var r=this.adapter.getValueToAriaValueTextFn();r&&this.adapter.setInputAttribute(ot.ARIA_VALUETEXT,r(i),n)}},e.prototype.updateValueIndicatorUI=function(n){if(!!this.isDiscrete){var i=this.isRange&&n===E.START?this.valueStart:this.value;this.adapter.setValueIndicatorText(i,n===E.START?E.START:E.END),!n&&this.isRange&&this.adapter.setValueIndicatorText(this.valueStart,E.START)}},e.prototype.updateTickMarksUI=function(){if(!(!this.isDiscrete||!this.hasTickMarks)){var n=(this.valueStart-this.min)/this.step,i=(this.value-this.valueStart)/this.step+1,s=(this.max-this.value)/this.step,r=Array.from({length:n}).fill(Ft.INACTIVE),a=Array.from({length:i}).fill(Ft.ACTIVE),o=Array.from({length:s}).fill(Ft.INACTIVE);this.adapter.updateTickMarks(r.concat(a).concat(o))}},e.prototype.mapClientXOnSliderScale=function(n){var i=n-this.rect.left,s=i/this.rect.width;this.adapter.isRTL()&&(s=1-s);var r=this.min+s*(this.max-this.min);return r===this.max||r===this.min?r:Number(this.quantize(r).toFixed(this.numDecimalPlaces))},e.prototype.quantize=function(n){var i=Math.round((n-this.min)/this.step);return this.min+i*this.step},e.prototype.updateValue=function(n,i,s){var r=s===void 0?{}:s,a=r.emitInputEvent;if(n=this.clampValue(n,i),this.isRange&&i===E.START){if(this.valueStart===n)return;this.valueStart=n}else{if(this.value===n)return;this.value=n}this.updateUI(i),a&&this.adapter.emitInputEvent(i===E.START?this.valueStart:this.value,i)},e.prototype.clampValue=function(n,i){n=Math.min(Math.max(n,this.min),this.max);var s=this.isRange&&i===E.START&&n>this.value;if(s)return this.value;var r=this.isRange&&i===E.END&&n<this.valueStart;return r?this.valueStart:n},e.prototype.updateThumbAndTrackUI=function(n){var i=this,s=this,r=s.max,a=s.min,o=(this.value-this.valueStart)/(r-a),u=o*this.rect.width,c=this.adapter.isRTL(),l=pu?fu(window,"transform"):"transform";if(this.isRange){var h=this.adapter.isRTL()?(r-this.value)/(r-a)*this.rect.width:(this.valueStart-a)/(r-a)*this.rect.width,d=h+u;this.animFrame.request(Qr.SLIDER_UPDATE,function(){var f=!c&&n===E.START||c&&n!==E.START;f?(i.adapter.setTrackActiveStyleProperty("transform-origin","right"),i.adapter.setTrackActiveStyleProperty("left","unset"),i.adapter.setTrackActiveStyleProperty("right",i.rect.width-d+"px")):(i.adapter.setTrackActiveStyleProperty("transform-origin","left"),i.adapter.setTrackActiveStyleProperty("right","unset"),i.adapter.setTrackActiveStyleProperty("left",h+"px")),i.adapter.setTrackActiveStyleProperty(l,"scaleX("+o+")");var m=c?d:h,y=i.adapter.isRTL()?h:d;(n===E.START||!n||!i.initialStylesRemoved)&&i.adapter.setThumbStyleProperty(l,"translateX("+m+"px)",E.START),(n===E.END||!n||!i.initialStylesRemoved)&&i.adapter.setThumbStyleProperty(l,"translateX("+y+"px)",E.END),i.removeInitialStyles(c),i.updateOverlappingThumbsUI(m,y,n)})}else this.animFrame.request(Qr.SLIDER_UPDATE,function(){var f=c?i.rect.width-u:u;i.adapter.setThumbStyleProperty(l,"translateX("+f+"px)",E.END),i.adapter.setTrackActiveStyleProperty(l,"scaleX("+o+")"),i.removeInitialStyles(c)})},e.prototype.removeInitialStyles=function(n){if(!this.initialStylesRemoved){var i=n?"right":"left";this.adapter.removeThumbStyleProperty(i,E.END),this.isRange&&this.adapter.removeThumbStyleProperty(i,E.START),this.initialStylesRemoved=!0,this.resetTrackAndThumbAnimation()}},e.prototype.resetTrackAndThumbAnimation=function(){var n=this;if(!!this.isDiscrete){var i=pu?fu(window,"transition"):"transition",s="all 0s ease 0s";this.adapter.setThumbStyleProperty(i,s,E.END),this.isRange&&this.adapter.setThumbStyleProperty(i,s,E.START),this.adapter.setTrackActiveStyleProperty(i,s),requestAnimationFrame(function(){n.adapter.removeThumbStyleProperty(i,E.END),n.adapter.removeTrackActiveStyleProperty(i),n.isRange&&n.adapter.removeThumbStyleProperty(i,E.START)})}},e.prototype.updateOverlappingThumbsUI=function(n,i,s){var r=!1;if(this.adapter.isRTL()){var a=n-this.startThumbKnobWidth/2,o=i+this.endThumbKnobWidth/2;r=o>=a}else{var u=n+this.startThumbKnobWidth/2,c=i-this.endThumbKnobWidth/2;r=u>=c}r?(this.adapter.addThumbClass(Ge.THUMB_TOP,s||E.END),this.adapter.removeThumbClass(Ge.THUMB_TOP,s===E.START?E.END:E.START)):(this.adapter.removeThumbClass(Ge.THUMB_TOP,E.START),this.adapter.removeThumbClass(Ge.THUMB_TOP,E.END))},e.prototype.convertAttributeValueToNumber=function(n,i){if(n===null)throw new Error("MDCSliderFoundation: `"+i+"` must be non-null.");var s=Number(n);if(isNaN(s))throw new Error("MDCSliderFoundation: `"+i+"` value is "+("`"+n+"`, but must be a number."));return s},e.prototype.validateProperties=function(n){var i=n.min,s=n.max,r=n.value,a=n.valueStart,o=n.step;if(i>=s)throw new Error("MDCSliderFoundation: min must be strictly less than max. "+("Current: [min: "+i+", max: "+s+"]"));if(o<=0)throw new Error("MDCSliderFoundation: step must be a positive number. "+("Current step: "+this.step));if(this.isRange){if(r<i||r>s||a<i||a>s)throw new Error("MDCSliderFoundation: values must be in [min, max] range. "+("Current values: [start value: "+a+", end value: "+r+"]"));if(a>r)throw new Error("MDCSliderFoundation: start value must be <= end value. "+("Current values: [start value: "+a+", end value: "+r+"]"));var u=(a-i)/o,c=(r-i)/o;if(u%1!=0||c%1!=0)throw new Error("MDCSliderFoundation: Slider values must be valid based on the "+("step value. Current values: [start value: "+a+", ")+("end value: "+r+"]"))}else{if(r<i||r>s)throw new Error("MDCSliderFoundation: value must be in [min, max] range. "+("Current value: "+r));var c=(r-i)/o;if(c%1!=0)throw new Error("MDCSliderFoundation: Slider value must be valid based on the "+("step value. Current value: "+r))}},e.prototype.registerEventHandlers=function(){this.adapter.registerWindowEventHandler("resize",this.resizeListener),e.SUPPORTS_POINTER_EVENTS?(this.adapter.registerEventHandler("pointerdown",this.pointerdownListener),this.adapter.registerEventHandler("pointerup",this.pointerupListener)):(this.adapter.registerEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.registerEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.registerThumbEventHandler(E.START,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(E.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(E.START,"change",this.inputStartChangeListener),this.adapter.registerInputEventHandler(E.START,"focus",this.inputStartFocusListener),this.adapter.registerInputEventHandler(E.START,"blur",this.inputStartBlurListener)),this.adapter.registerThumbEventHandler(E.END,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(E.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(E.END,"change",this.inputEndChangeListener),this.adapter.registerInputEventHandler(E.END,"focus",this.inputEndFocusListener),this.adapter.registerInputEventHandler(E.END,"blur",this.inputEndBlurListener)},e.prototype.deregisterEventHandlers=function(){this.adapter.deregisterWindowEventHandler("resize",this.resizeListener),e.SUPPORTS_POINTER_EVENTS?(this.adapter.deregisterEventHandler("pointerdown",this.pointerdownListener),this.adapter.deregisterEventHandler("pointerup",this.pointerupListener)):(this.adapter.deregisterEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.deregisterEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.deregisterThumbEventHandler(E.START,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(E.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(E.START,"change",this.inputStartChangeListener),this.adapter.deregisterInputEventHandler(E.START,"focus",this.inputStartFocusListener),this.adapter.deregisterInputEventHandler(E.START,"blur",this.inputStartBlurListener)),this.adapter.deregisterThumbEventHandler(E.END,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(E.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(E.END,"change",this.inputEndChangeListener),this.adapter.deregisterInputEventHandler(E.END,"focus",this.inputEndFocusListener),this.adapter.deregisterInputEventHandler(E.END,"blur",this.inputEndBlurListener)},e.prototype.handlePointerup=function(){this.handleUp(),this.adapter.deregisterEventHandler("pointermove",this.moveListener)},e.SUPPORTS_POINTER_EVENTS=pu&&Boolean(window.PointerEvent)&&!tT(),e}(di);function tT(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}function Vd(t){var e=/(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(t));if(!e)return 0;var n=e[1]||"",i=e[2]||0;return Math.max(0,(n==="0"?0:n.length)-Number(i))}function Bd(t,e,n){const i=t.slice();return i[90]=e[n],i}function nT(t){let e,n,i,s,r=[{class:n=ve({[t[12]]:!0,"mdc-slider__input":!0})},{type:"range"},{disabled:t[5]},{step:t[9]},{min:t[10]},{max:t[11]},t[32],t[23],hi(t[36],"input$")],a={};for(let o=0;o<r.length;o+=1)a=B(a,r[o]);return{c(){e=J("input"),this.h()},l(o){e=ee(o,"INPUT",{class:!0,type:!0,step:!0,min:!0,max:!0}),this.h()},h(){le(e,a)},m(o,u){re(o,e,u),e.autofocus&&e.focus(),t[60](e),ni(e,t[0]),i||(s=[et(e,"change",t[61]),et(e,"input",t[61]),et(e,"blur",t[54]),et(e,"focus",t[55])],i=!0)},p(o,u){le(e,a=Oe(r,[u[0]&4096&&n!==(n=ve({[o[12]]:!0,"mdc-slider__input":!0}))&&{class:n},{type:"range"},u[0]&32&&{disabled:o[5]},u[0]&512&&{step:o[9]},u[0]&1024&&{min:o[10]},u[0]&2048&&{max:o[11]},o[32],u[0]&8388608&&o[23],u[1]&32&&hi(o[36],"input$")])),u[0]&1&&ni(e,o[0])},d(o){o&&D(e),t[60](null),i=!1,we(s)}}}function iT(t){let e,n,i,s,r,a,o,u=[{class:n=ve({[t[12]]:!0,"mdc-slider__input":!0})},{type:"range"},{disabled:t[5]},{step:t[9]},{min:t[10]},{max:t[2]},t[24],hi(t[36],"input$")],c={};for(let d=0;d<u.length;d+=1)c=B(c,u[d]);let l=[{class:r=ve({[t[12]]:!0,"mdc-slider__input":!0})},{type:"range"},{disabled:t[5]},{step:t[9]},{min:t[1]},{max:t[11]},t[32],t[23],hi(t[36],"input$")],h={};for(let d=0;d<l.length;d+=1)h=B(h,l[d]);return{c(){e=J("input"),i=Ht(),s=J("input"),this.h()},l(d){e=ee(d,"INPUT",{class:!0,type:!0,step:!0,min:!0,max:!0}),i=xt(d),s=ee(d,"INPUT",{class:!0,type:!0,step:!0,min:!0,max:!0}),this.h()},h(){le(e,c),le(s,h)},m(d,f){re(d,e,f),e.autofocus&&e.focus(),t[56](e),ni(e,t[1]),re(d,i,f),re(d,s,f),s.autofocus&&s.focus(),t[58](s),ni(s,t[2]),a||(o=[et(e,"change",t[57]),et(e,"input",t[57]),et(e,"blur",t[52]),et(e,"focus",t[53]),et(s,"change",t[59]),et(s,"input",t[59]),et(s,"blur",t[50]),et(s,"focus",t[51])],a=!0)},p(d,f){le(e,c=Oe(u,[f[0]&4096&&n!==(n=ve({[d[12]]:!0,"mdc-slider__input":!0}))&&{class:n},{type:"range"},f[0]&32&&{disabled:d[5]},f[0]&512&&{step:d[9]},f[0]&1024&&{min:d[10]},f[0]&4&&{max:d[2]},f[0]&16777216&&d[24],f[1]&32&&hi(d[36],"input$")])),f[0]&2&&ni(e,d[1]),le(s,h=Oe(l,[f[0]&4096&&r!==(r=ve({[d[12]]:!0,"mdc-slider__input":!0}))&&{class:r},{type:"range"},f[0]&32&&{disabled:d[5]},f[0]&512&&{step:d[9]},f[0]&2&&{min:d[1]},f[0]&2048&&{max:d[11]},d[32],f[0]&8388608&&d[23],f[1]&32&&hi(d[36],"input$")])),f[0]&4&&ni(s,d[2])},d(d){d&&D(e),t[56](null),d&&D(i),d&&D(s),t[58](null),a=!1,we(o)}}}function Hd(t){let e,n=t[30],i=[];for(let s=0;s<n.length;s+=1)i[s]=xd(Bd(t,n,s));return{c(){e=J("div");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=ee(s,"DIV",{class:!0});var r=se(e);for(let a=0;a<i.length;a+=1)i[a].l(r);r.forEach(D),this.h()},h(){ie(e,"class","mdc-slider__tick-marks")},m(s,r){re(s,e,r);for(let a=0;a<i.length;a+=1)i[a].m(e,null)},p(s,r){if(r[0]&1073741824){n=s[30];let a;for(a=0;a<n.length;a+=1){const o=Bd(s,n,a);i[a]?i[a].p(o,r):(i[a]=xd(o),i[a].c(),i[a].m(e,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=n.length}},d(s){s&&D(e),Mf(i,s)}}}function xd(t){let e,n;return{c(){e=J("div"),this.h()},l(i){e=ee(i,"DIV",{class:!0}),se(e).forEach(D),this.h()},h(){ie(e,"class",n=t[90]===Ft.ACTIVE?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive")},m(i,s){re(i,e,s)},p(i,s){s[0]&1073741824&&n!==(n=i[90]===Ft.ACTIVE?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive")&&ie(e,"class",n)},d(i){i&&D(e)}}}function sT(t){let e,n,i,s,r,a,o,u,c=t[7]&&jd(t);return{c(){e=J("div"),c&&c.c(),n=Ht(),i=J("div"),this.h()},l(l){e=ee(l,"DIV",{class:!0,style:!0});var h=se(e);c&&c.l(h),n=xt(h),i=ee(h,"DIV",{class:!0}),se(i).forEach(D),h.forEach(D),this.h()},h(){ie(i,"class","mdc-slider__thumb-knob"),ie(e,"class",s=ve(Xe({"mdc-slider__thumb":!0},t[22]))),ie(e,"style",r=Object.entries(t[26]).map(Xd).join(" "))},m(l,h){re(l,e,h),c&&c.m(e,null),Ce(e,n),Ce(e,i),t[72](i),t[73](e),o||(u=de(a=jn.call(null,e,{unbounded:!0,disabled:t[5],active:t[28],eventTarget:t[14],activeTarget:t[14],addClass:t[74],removeClass:t[75],addStyle:t[76]})),o=!0)},p(l,h){l[7]?c?c.p(l,h):(c=jd(l),c.c(),c.m(e,n)):c&&(c.d(1),c=null),h[0]&4194304&&s!==(s=ve(Xe({"mdc-slider__thumb":!0},l[22])))&&ie(e,"class",s),h[0]&67108864&&r!==(r=Object.entries(l[26]).map(Xd).join(" "))&&ie(e,"style",r),a&&Ne(a.update)&&h[0]&268451872&&a.update.call(null,{unbounded:!0,disabled:l[5],active:l[28],eventTarget:l[14],activeTarget:l[14],addClass:l[74],removeClass:l[75],addStyle:l[76]})},d(l){l&&D(e),c&&c.d(),t[72](null),t[73](null),o=!1,u()}}}function rT(t){let e,n,i,s,r,a,o,u,c,l,h,d,f,m,y,g=t[7]&&zd(t),v=t[7]&&Gd(t);return{c(){e=J("div"),g&&g.c(),n=Ht(),i=J("div"),o=Ht(),u=J("div"),v&&v.c(),c=Ht(),l=J("div"),this.h()},l(I){e=ee(I,"DIV",{class:!0,style:!0});var _=se(e);g&&g.l(_),n=xt(_),i=ee(_,"DIV",{class:!0}),se(i).forEach(D),_.forEach(D),o=xt(I),u=ee(I,"DIV",{class:!0,style:!0});var M=se(u);v&&v.l(M),c=xt(M),l=ee(M,"DIV",{class:!0}),se(l).forEach(D),M.forEach(D),this.h()},h(){ie(i,"class","mdc-slider__thumb-knob"),ie(e,"class",s=ve(Xe({"mdc-slider__thumb":!0},t[21]))),ie(e,"style",r=Object.entries(t[27]).map(Wd).join(" ")),ie(l,"class","mdc-slider__thumb-knob"),ie(u,"class",h=ve(Xe({"mdc-slider__thumb":!0},t[22]))),ie(u,"style",d=Object.entries(t[26]).map(Kd).join(" "))},m(I,_){re(I,e,_),g&&g.m(e,null),Ce(e,n),Ce(e,i),t[62](i),t[63](e),re(I,o,_),re(I,u,_),v&&v.m(u,null),Ce(u,c),Ce(u,l),t[67](l),t[68](u),m||(y=[de(a=jn.call(null,e,{unbounded:!0,disabled:t[5],active:t[29],eventTarget:t[15],activeTarget:t[15],addClass:t[64],removeClass:t[65],addStyle:t[66]})),de(f=jn.call(null,u,{unbounded:!0,disabled:t[5],active:t[28],eventTarget:t[14],activeTarget:t[14],addClass:t[69],removeClass:t[70],addStyle:t[71]}))],m=!0)},p(I,_){I[7]?g?g.p(I,_):(g=zd(I),g.c(),g.m(e,n)):g&&(g.d(1),g=null),_[0]&2097152&&s!==(s=ve(Xe({"mdc-slider__thumb":!0},I[21])))&&ie(e,"class",s),_[0]&134217728&&r!==(r=Object.entries(I[27]).map(Wd).join(" "))&&ie(e,"style",r),a&&Ne(a.update)&&_[0]&536903712&&a.update.call(null,{unbounded:!0,disabled:I[5],active:I[29],eventTarget:I[15],activeTarget:I[15],addClass:I[64],removeClass:I[65],addStyle:I[66]}),I[7]?v?v.p(I,_):(v=Gd(I),v.c(),v.m(u,c)):v&&(v.d(1),v=null),_[0]&4194304&&h!==(h=ve(Xe({"mdc-slider__thumb":!0},I[22])))&&ie(u,"class",h),_[0]&67108864&&d!==(d=Object.entries(I[26]).map(Kd).join(" "))&&ie(u,"style",d),f&&Ne(f.update)&&_[0]&268451872&&f.update.call(null,{unbounded:!0,disabled:I[5],active:I[28],eventTarget:I[14],activeTarget:I[14],addClass:I[69],removeClass:I[70],addStyle:I[71]})},d(I){I&&D(e),g&&g.d(),t[62](null),t[63](null),I&&D(o),I&&D(u),v&&v.d(),t[67](null),t[68](null),m=!1,we(y)}}}function jd(t){let e,n,i,s;return{c(){e=J("div"),n=J("div"),i=J("span"),s=ti(t[0]),this.h()},l(r){e=ee(r,"DIV",{class:!0,"aria-hidden":!0});var a=se(e);n=ee(a,"DIV",{class:!0});var o=se(n);i=ee(o,"SPAN",{class:!0});var u=se(i);s=Ns(u,t[0]),u.forEach(D),o.forEach(D),a.forEach(D),this.h()},h(){ie(i,"class","mdc-slider__value-indicator-text"),ie(n,"class","mdc-slider__value-indicator"),ie(e,"class","mdc-slider__value-indicator-container"),ie(e,"aria-hidden","true")},m(r,a){re(r,e,a),Ce(e,n),Ce(n,i),Ce(i,s)},p(r,a){a[0]&1&&ro(s,r[0])},d(r){r&&D(e)}}}function zd(t){let e,n,i,s;return{c(){e=J("div"),n=J("div"),i=J("span"),s=ti(t[1]),this.h()},l(r){e=ee(r,"DIV",{class:!0,"aria-hidden":!0});var a=se(e);n=ee(a,"DIV",{class:!0});var o=se(n);i=ee(o,"SPAN",{class:!0});var u=se(i);s=Ns(u,t[1]),u.forEach(D),o.forEach(D),a.forEach(D),this.h()},h(){ie(i,"class","mdc-slider__value-indicator-text"),ie(n,"class","mdc-slider__value-indicator"),ie(e,"class","mdc-slider__value-indicator-container"),ie(e,"aria-hidden","true")},m(r,a){re(r,e,a),Ce(e,n),Ce(n,i),Ce(i,s)},p(r,a){a[0]&2&&ro(s,r[1])},d(r){r&&D(e)}}}function Gd(t){let e,n,i,s;return{c(){e=J("div"),n=J("div"),i=J("span"),s=ti(t[2]),this.h()},l(r){e=ee(r,"DIV",{class:!0,"aria-hidden":!0});var a=se(e);n=ee(a,"DIV",{class:!0});var o=se(n);i=ee(o,"SPAN",{class:!0});var u=se(i);s=Ns(u,t[2]),u.forEach(D),o.forEach(D),a.forEach(D),this.h()},h(){ie(i,"class","mdc-slider__value-indicator-text"),ie(n,"class","mdc-slider__value-indicator"),ie(e,"class","mdc-slider__value-indicator-container"),ie(e,"aria-hidden","true")},m(r,a){re(r,e,a),Ce(e,n),Ce(n,i),Ce(i,s)},p(r,a){a[0]&4&&ro(s,r[2])},d(r){r&&D(e)}}}function oT(t){let e,n,i,s,r,a,o,u,c,l,h,d,f,m;function y(w,R){return w[6]?iT:nT}let g=y(t),v=g(t),I=t[7]&&t[8]&&t[9]>0&&Hd(t);function _(w,R){return w[6]?rT:sT}let M=_(t),x=M(t),b=[{class:h=Object.entries(Xe({[t[4]]:!0,"mdc-slider":!0,"mdc-slider--range":t[6],"mdc-slider--discrete":t[7],"mdc-slider--tick-marks":t[7]&&t[8],"mdc-slider--disabled":t[5]},t[20])).filter(Qd).map(Yd).join(" ")},wl(t[36],["input$"])],N={};for(let w=0;w<b.length;w+=1)N=B(N,b[w]);return{c(){e=J("div"),v.c(),n=Ht(),i=J("div"),s=J("div"),r=Ht(),a=J("div"),o=J("div"),c=Ht(),I&&I.c(),l=Ht(),x.c(),this.h()},l(w){e=ee(w,"DIV",{class:!0});var R=se(e);v.l(R),n=xt(R),i=ee(R,"DIV",{class:!0});var P=se(i);s=ee(P,"DIV",{class:!0}),se(s).forEach(D),r=xt(P),a=ee(P,"DIV",{class:!0});var Y=se(a);o=ee(Y,"DIV",{class:!0,style:!0}),se(o).forEach(D),Y.forEach(D),c=xt(P),I&&I.l(P),P.forEach(D),l=xt(R),x.l(R),R.forEach(D),this.h()},h(){ie(s,"class","mdc-slider__track--inactive"),ie(o,"class","mdc-slider__track--active_fill"),ie(o,"style",u=Object.entries(t[25]).map(qd).join(" ")),ie(a,"class","mdc-slider__track--active"),ie(i,"class","mdc-slider__track"),le(e,N)},m(w,R){re(w,e,R),v.m(e,null),Ce(e,n),Ce(e,i),Ce(i,s),Ce(i,r),Ce(i,a),Ce(a,o),Ce(i,c),I&&I.m(i,null),Ce(e,l),x.m(e,null),t[77](e),f||(m=[de(d=It.call(null,e,t[3])),de(t[31].call(null,e))],f=!0)},p(w,R){g===(g=y(w))&&v?v.p(w,R):(v.d(1),v=g(w),v&&(v.c(),v.m(e,n))),R[0]&33554432&&u!==(u=Object.entries(w[25]).map(qd).join(" "))&&ie(o,"style",u),w[7]&&w[8]&&w[9]>0?I?I.p(w,R):(I=Hd(w),I.c(),I.m(i,null)):I&&(I.d(1),I=null),M===(M=_(w))&&x?x.p(w,R):(x.d(1),x=M(w),x&&(x.c(),x.m(e,null))),le(e,N=Oe(b,[R[0]&1049072&&h!==(h=Object.entries(Xe({[w[4]]:!0,"mdc-slider":!0,"mdc-slider--range":w[6],"mdc-slider--discrete":w[7],"mdc-slider--tick-marks":w[7]&&w[8],"mdc-slider--disabled":w[5]},w[20])).filter(Qd).map(Yd).join(" "))&&{class:h},R[1]&32&&wl(w[36],["input$"])])),d&&Ne(d.update)&&R[0]&8&&d.update.call(null,w[3])},i:wt,o:wt,d(w){w&&D(e),v.d(),I&&I.d(),x.d(),t[77](null),f=!1,we(m)}}}const qd=([t,e])=>`${t}: ${e};`,Wd=([t,e])=>`${t}: ${e};`,Kd=([t,e])=>`${t}: ${e};`,Xd=([t,e])=>`${t}: ${e};`,Qd=([t,e])=>t!==""&&e,Yd=([t])=>t;function aT(t,e,n){const i=["use","class","disabled","range","discrete","tickMarks","step","min","max","value","start","end","valueToAriaValueTextFn","input$class","layout","getId","getElement"];let s=ne(e,i);var r;const a=Be(be());let{use:o=[]}=e,{class:u=""}=e,{disabled:c=!1}=e,{range:l=!1}=e,{discrete:h=!1}=e,{tickMarks:d=!1}=e,{step:f=1}=e,{min:m=0}=e,{max:y=100}=e,{value:g=void 0}=e,{start:v=void 0}=e,{end:I=void 0}=e,{valueToAriaValueTextFn:_=p=>`${p}`}=e,{input$class:M=""}=e,x,b,N,w,R,P,Y,oe,C={},j={},G={},U={},k={},Se={},Ae={},qe={},Mt=!1,Ut=!1,Vt,zt=(r=Ct("SMUI:generic:input:props"))!==null&&r!==void 0?r:{},hn=Ct("SMUI:addLayoutListener"),Gt,_e=m,L=y,ce=f,We=h,dn=d;if(d&&f>0){const p=y+Math.abs(m);if(l&&typeof v=="number"&&typeof I=="number"){const A=v+Math.abs(m),q=I+Math.abs(m);Vt=[...Array(A/f).map(()=>Ft.INACTIVE),...Array(p/f-A/f-(p-q)/f+1).map(()=>Ft.ACTIVE),...Array((p-q)/f).map(()=>Ft.INACTIVE)]}else if(typeof g=="number"){const A=g+Math.abs(m);Vt=[...Array(A/f+1).map(()=>Ft.ACTIVE),...Array((p-A)/f).map(()=>Ft.INACTIVE)]}}if(l&&typeof v=="number"&&typeof I=="number"){const p=(I-v)/(y-m),A=v/(y-m),q=I/(y-m);Se.transform=`scaleX(${p})`,Ae.left=`calc(${q*100}% -24px)`,qe.left=`calc(${A*100}% -24px)`}else if(typeof g=="number"){const p=g/(y-m);Se.transform=`scaleX(${p})`,Ae.left=`calc(${p*100}% -24px)`}hn&&(Gt=hn(Rs));let en=g,S=v,$=I;ii(()=>{n(41,b=new eT({hasClass:Fe,addClass:Nt,removeClass:Nn,addThumbClass:qt,removeThumbClass:kn,getAttribute:A=>H().getAttribute(A),getInputValue:A=>{var q;return`${(q=l?A===E.START?v:I:g)!==null&&q!==void 0?q:0}`},setInputValue:(A,q)=>{l?q===E.START?(n(1,v=Number(A)),n(48,S=v)):(n(2,I=Number(A)),n(49,$=I)):(n(0,g=Number(A)),n(47,en=g))},getInputAttribute:Wt,setInputAttribute:Jr,removeInputAttribute:Zr,focusInput:A=>{l&&A===E.START&&w?w.focus():N.focus()},isInputFocused:A=>(l&&A===E.START?w:N)===document.activeElement,getThumbKnobWidth:A=>{var q;return((q=l&&A===E.START?oe:Y)!==null&&q!==void 0?q:Y).getBoundingClientRect().width},getThumbBoundingClientRect:A=>{var q;return((q=l&&A===E.START?P:R)!==null&&q!==void 0?q:R).getBoundingClientRect()},getBoundingClientRect:()=>H().getBoundingClientRect(),isRTL:()=>getComputedStyle(H()).direction==="rtl",setThumbStyleProperty:fn,removeThumbStyleProperty:Yr,setTrackActiveStyleProperty:$r,removeTrackActiveStyleProperty:eo,setValueIndicatorText:(A,q)=>{},getValueToAriaValueTextFn:()=>_,updateTickMarks:A=>{n(30,Vt=A)},setPointerCapture:A=>{H().setPointerCapture(A)},emitChangeEvent:(A,q)=>{it(H(),"SMUISlider:change",{value:A,thumb:q},void 0,!0)},emitInputEvent:(A,q)=>{it(H(),"SMUISlider:input",{value:A,thumb:q},void 0,!0)},emitDragStartEvent:(A,q)=>{l&&q===E.START?n(29,Ut=!0):n(28,Mt=!0)},emitDragEndEvent:(A,q)=>{l&&q===E.START?n(29,Ut=!1):n(28,Mt=!1)},registerEventHandler:(A,q)=>{H().addEventListener(A,q)},deregisterEventHandler:(A,q)=>{H().removeEventListener(A,q)},registerThumbEventHandler:(A,q,Bt)=>{var Ke;(Ke=l&&A===E.START?P:R)===null||Ke===void 0||Ke.addEventListener(q,Bt)},deregisterThumbEventHandler:(A,q,Bt)=>{var Ke;(Ke=l&&A===E.START?P:R)===null||Ke===void 0||Ke.removeEventListener(q,Bt)},registerInputEventHandler:(A,q,Bt)=>{var Ke;(Ke=l&&A===E.START?w:N)===null||Ke===void 0||Ke.addEventListener(q,Bt)},deregisterInputEventHandler:(A,q,Bt)=>{var Ke;(Ke=l&&A===E.START?w:N)===null||Ke===void 0||Ke.removeEventListener(q,Bt)},registerBodyEventHandler:(A,q)=>{document.body.addEventListener(A,q)},deregisterBodyEventHandler:(A,q)=>{document.body.removeEventListener(A,q)},registerWindowEventHandler:(A,q)=>{window.addEventListener(A,q)},deregisterWindowEventHandler:(A,q)=>{window.removeEventListener(A,q)}}));const p={get element(){return H()},activateRipple(){c||n(28,Mt=!0)},deactivateRipple(){n(28,Mt=!1)}};return it(x,"SMUIGenericInput:mount",p),b.init(),b.layout({skipUpdateUI:!0}),()=>{it(x,"SMUIGenericInput:unmount",p),b.destroy()}}),si(()=>{Gt&&Gt()});function Fe(p){return p in C?C[p]:H().classList.contains(p)}function Nt(p){C[p]||n(20,C[p]=!0,C)}function Nn(p){(!(p in C)||C[p])&&n(20,C[p]=!1,C)}function qt(p,A){l&&A===E.START?j[p]||n(21,j[p]=!0,j):G[p]||n(22,G[p]=!0,G)}function kn(p,A){l&&A===E.START?(!(p in j)||j[p])&&n(21,j[p]=!1,j):(!(p in G)||G[p])&&n(22,G[p]=!1,G)}function fn(p,A,q){l&&q===E.START?qe[p]!=A&&(A===""||A==null?(delete qe[p],n(27,qe)):n(27,qe[p]=A,qe)):Ae[p]!=A&&(A===""||A==null?(delete Ae[p],n(26,Ae)):n(26,Ae[p]=A,Ae))}function Yr(p,A){l&&A===E.START?p in qe&&(delete qe[p],n(27,qe)):p in Ae&&(delete Ae[p],n(26,Ae))}function Wt(p,A){var q,Bt,Ke;return l&&A===E.START?p==="value"?`${v}`:p in k?(q=k[p])!==null&&q!==void 0?q:null:(Bt=w==null?void 0:w.getAttribute(p))!==null&&Bt!==void 0?Bt:null:p==="value"?`${l?I:g}`:p in U?(Ke=U[p])!==null&&Ke!==void 0?Ke:null:N.getAttribute(p)}function Jr(p,A,q){l&&q===E.START?k[p]!==A&&n(24,k[p]=A,k):U[p]!==A&&n(23,U[p]=A,U)}function Zr(p,A){l&&A===E.START?(!(p in k)||k[p]!=null)&&n(24,k[p]=void 0,k):(!(p in U)||U[p]!=null)&&n(23,U[p]=void 0,U)}function $r(p,A){Se[p]!=A&&(A===""||A==null?(delete Se[p],n(25,Se)):n(25,Se[p]=A,Se))}function eo(p){p in Se&&(delete Se[p],n(25,Se))}function Rs(){return b.layout()}function T(){return zt&&zt.id}function H(){return x}function z(p){Pn.call(this,t,p)}function Te(p){Pn.call(this,t,p)}function Mn(p){Pn.call(this,t,p)}function to(p){Pn.call(this,t,p)}function Jd(p){Pn.call(this,t,p)}function Zd(p){Pn.call(this,t,p)}function $d(p){fe[p?"unshift":"push"](()=>{w=p,n(15,w)})}function ef(){v=so(this.value),n(1,v)}function tf(p){fe[p?"unshift":"push"](()=>{N=p,n(14,N)})}function nf(){I=so(this.value),n(2,I)}function sf(p){fe[p?"unshift":"push"](()=>{N=p,n(14,N)})}function rf(){g=so(this.value),n(0,g)}function of(p){fe[p?"unshift":"push"](()=>{oe=p,n(19,oe)})}function af(p){fe[p?"unshift":"push"](()=>{P=p,n(17,P)})}const uf=p=>qt(p,E.START),lf=p=>kn(p,E.START),cf=(p,A)=>fn(p,A,E.START);function hf(p){fe[p?"unshift":"push"](()=>{Y=p,n(18,Y)})}function df(p){fe[p?"unshift":"push"](()=>{R=p,n(16,R)})}const ff=p=>qt(p,E.END),mf=p=>kn(p,E.END),pf=(p,A)=>fn(p,A,E.END);function gf(p){fe[p?"unshift":"push"](()=>{Y=p,n(18,Y)})}function vf(p){fe[p?"unshift":"push"](()=>{R=p,n(16,R)})}const yf=p=>qt(p,E.END),If=p=>kn(p,E.END),Ef=(p,A)=>fn(p,A,E.END);function _f(p){fe[p?"unshift":"push"](()=>{x=p,n(13,x)})}return t.$$set=p=>{e=B(B({},e),Me(p)),n(36,s=ne(e,i)),"use"in p&&n(3,o=p.use),"class"in p&&n(4,u=p.class),"disabled"in p&&n(5,c=p.disabled),"range"in p&&n(6,l=p.range),"discrete"in p&&n(7,h=p.discrete),"tickMarks"in p&&n(8,d=p.tickMarks),"step"in p&&n(9,f=p.step),"min"in p&&n(10,m=p.min),"max"in p&&n(11,y=p.max),"value"in p&&n(0,g=p.value),"start"in p&&n(1,v=p.start),"end"in p&&n(2,I=p.end),"valueToAriaValueTextFn"in p&&n(37,_=p.valueToAriaValueTextFn),"input$class"in p&&n(12,M=p.input$class)},t.$$.update=()=>{t.$$.dirty[0]&1024|t.$$.dirty[1]&3072&&m!==_e&&(b&&b.setMin(m),n(42,_e=m)),t.$$.dirty[0]&2048|t.$$.dirty[1]&5120&&y!==L&&(b&&b.setMax(y),n(43,L=y)),t.$$.dirty[0]&512|t.$$.dirty[1]&9216&&f!==ce&&(b&&b.setStep(f),n(44,ce=f)),t.$$.dirty[0]&128|t.$$.dirty[1]&17408&&h!==We&&(b&&b.setIsDiscrete(h),n(45,We=h)),t.$$.dirty[0]&256|t.$$.dirty[1]&33792&&d!==dn&&(b&&b.setHasTickMarks(d),n(46,dn=d)),t.$$.dirty[0]&7|t.$$.dirty[1]&459776&&b&&(en!==g&&typeof g=="number"&&b.setValue(g),S!==v&&typeof v=="number"&&b.setValueStart(v),$!==I&&typeof I=="number"&&b.setValue(I),n(47,en=g),n(48,S=v),n(49,$=I),b.layout())},[g,v,I,o,u,c,l,h,d,f,m,y,M,x,N,w,R,P,Y,oe,C,j,G,U,k,Se,Ae,qe,Mt,Ut,Vt,a,zt,qt,kn,fn,s,_,Rs,T,H,b,_e,L,ce,We,dn,en,S,$,z,Te,Mn,to,Jd,Zd,$d,ef,tf,nf,sf,rf,of,af,uf,lf,cf,hf,df,ff,mf,pf,gf,vf,yf,If,Ef,_f]}class BT extends Ve{constructor(e){super();Ue(this,e,aT,oT,ke,{use:3,class:4,disabled:5,range:6,discrete:7,tickMarks:8,step:9,min:10,max:11,value:0,start:1,end:2,valueToAriaValueTextFn:37,input$class:12,layout:38,getId:39,getElement:40},null,[-1,-1,-1])}get layout(){return this.$$.ctx[38]}get getId(){return this.$$.ctx[39]}get getElement(){return this.$$.ctx[40]}}function HT(t,{delay:e=0,duration:n=400,easing:i=Pd,start:s=0,opacity:r=0}={}){const a=getComputedStyle(t),o=+a.opacity,u=a.transform==="none"?"":a.transform,c=1-s,l=o*(1-r);return{delay:e,duration:n,easing:i,css:(h,d)=>`
			transform: ${u} scale(${1-c*d});
			opacity: ${o-l*d}
		`}}function xT(t,{from:e,to:n},i={}){const s=getComputedStyle(t),r=s.transform==="none"?"":s.transform,[a,o]=s.transformOrigin.split(" ").map(parseFloat),u=e.left+e.width*a/n.width-(n.left+a),c=e.top+e.height*o/n.height-(n.top+o),{delay:l=0,duration:h=f=>Math.sqrt(f)*120,easing:d=Pd}=i;return{delay:l,duration:Ne(h)?h(Math.sqrt(u*u+c*c)):h,easing:d,css:(f,m)=>{const y=m*u,g=m*c,v=f+m*e.width/n.width,I=f+m*e.height/n.height;return`transform: ${r} translate(${y}px, ${g}px) scale(${v}, ${I});`}}}export{lT as $,ii as A,B,$f as C,Qe as D,de as E,Ce as F,Je as G,Ze as H,Ye as I,bT as J,vn as K,AT as L,ST as M,TT as N,_T as O,RT as P,OT as Q,wT as R,Ve as S,DT as T,CT as U,MT as V,PT as W,FT as X,dT as Y,UT as Z,NT as _,se as a,wt as a0,LT as a1,fe as a2,Mf as a3,kT as a4,Pf as a5,hT as a6,et as a7,we as a8,VT as a9,cT as aa,mT as ab,BT as ac,Jf as ad,Ne as ae,qf as af,si as ag,fT as ah,gT as ai,jf as aj,pT as ak,Us as al,yT as am,ET as an,xT as ao,HT as ap,IT as aq,Yf as ar,ie as b,ee as c,D as d,J as e,re as f,Ns as g,ro as h,Ue as i,nn as j,Ht as k,Pt as l,Pi as m,xt as n,Kt as o,Oe as p,vt as q,Bs as r,ke as s,ti as t,ye as u,Xt as v,Hs as w,ge as x,tt as y,vT as z};

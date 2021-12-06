var Zw=Object.defineProperty;var pp=Object.getOwnPropertySymbols;var $w=Object.prototype.hasOwnProperty,e0=Object.prototype.propertyIsEnumerable;var mp=(t,e,n)=>e in t?Zw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ze=(t,e)=>{for(var n in e||(e={}))$w.call(e,n)&&mp(t,n,e[n]);if(pp)for(var n of pp(e))e0.call(e,n)&&mp(t,n,e[n]);return t};function Xt(){}function j(t,e){for(const n in e)t[n]=e[n];return t}function gp(t){return t()}function _p(){return Object.create(null)}function Ke(t){t.forEach(gp)}function qe(t){return typeof t=="function"}function We(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Ma;function yj(t,e){return Ma||(Ma=document.createElement("a")),Ma.href=e,t===Ma.href}function t0(t){return Object.keys(t).length===0}function n0(t,...e){if(t==null)return Xt;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function i0(t,e,n){t.$$.on_destroy.push(n0(e,n))}function Ce(t,e,n,i){if(t){const r=vp(t,e,n,i);return t[0](r)}}function vp(t,e,n,i){return t[1]&&i?j(n.ctx.slice(),t[1](i(e))):n.ctx}function Se(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|r[a];return s}return e.dirty|r}return e.dirty}function Ae(t,e,n,i,r,s){if(r){const o=vp(e,n,i,s);t.p(o,r)}}function ke(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Xe(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ne(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function r0(t){const e={};for(const n in t)e[n]=!0;return e}function bj(t){return t==null?"":t}function s0(t,e,n){return t.set(n),e}function oe(t){return t&&qe(t.destroy)?t.destroy:Xt}let Na=!1;function o0(){Na=!0}function a0(){Na=!1}function l0(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function c0(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const u=e[c];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,u=(r>0&&e[n[r]].claim_order<=c?r+1:l0(1,r,d=>e[n[d]].claim_order,c))-1;i[l]=n[u]+1;const h=u+1;n[h]=l,r=Math.max(h,r)}const s=[],o=[];let a=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(s.push(e[l-1]);a>=l;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);s.reverse(),o.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<o.length;l++){for(;c<s.length&&o[l].claim_order>=s[c].claim_order;)c++;const u=c<s.length?s[c]:null;t.insertBefore(o[l],u)}}function Be(t,e){if(Na){for(c0(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ie(t,e,n){Na&&!n?Be(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode.removeChild(t)}function Ej(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function we(t){return document.createElement(t)}function Xs(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function bi(t){return document.createTextNode(t)}function ct(){return bi(" ")}function Tt(){return bi("")}function $e(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function u0(t){return function(e){return e.preventDefault(),t.call(this,e)}}function h0(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function _t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ae(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:_t(t,i,e[i])}function ge(t){return Array.from(t.childNodes)}function d0(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function yp(t,e,n,i,r=!1){d0(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,r||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function bp(t,e,n,i){return yp(t,r=>r.nodeName===e,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const a=r.attributes[o];n[a.name]||s.push(a.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(e))}function Re(t,e,n){return bp(t,e,n,we)}function Pa(t,e,n){return bp(t,e,n,Xs)}function Wr(t,e){return yp(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>bi(e),!0)}function ut(t){return Wr(t," ")}function Qs(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ep(t,e){t.value=e==null?"":e}function Ij(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}function wj(t,e,n){t.classList[n?"add":"remove"](e)}function f0(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}let Da;function Fa(t){Da=t}function Fe(){if(!Da)throw new Error("Function called outside component initialization");return Da}function Ln(t){Fe().$$.on_mount.push(t)}function Tj(t){Fe().$$.after_update.push(t)}function Ji(t){Fe().$$.on_destroy.push(t)}function Cj(){const t=Fe();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const r=f0(e,n);i.slice().forEach(s=>{s.call(t,r)})}}}function Pt(t,e){Fe().$$.context.set(t,e)}function Qt(t){return Fe().$$.context.get(t)}function Ys(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const Js=[],ce=[],xa=[],pu=[],Ip=Promise.resolve();let mu=!1;function wp(){mu||(mu=!0,Ip.then(Tp))}function p0(){return wp(),Ip}function gu(t){xa.push(t)}function Ei(t){pu.push(t)}let _u=!1;const vu=new Set;function Tp(){if(!_u){_u=!0;do{for(let t=0;t<Js.length;t+=1){const e=Js[t];Fa(e),m0(e.$$)}for(Fa(null),Js.length=0;ce.length;)ce.pop()();for(let t=0;t<xa.length;t+=1){const e=xa[t];vu.has(e)||(vu.add(e),e())}xa.length=0}while(Js.length);for(;pu.length;)pu.pop()();mu=!1,_u=!1,vu.clear()}}function m0(t){if(t.fragment!==null){t.update(),Ke(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(gu)}}const Ua=new Set;let Zi;function Yt(){Zi={r:0,c:[],p:Zi}}function Jt(){Zi.r||Ke(Zi.c),Zi=Zi.p}function D(t,e){t&&t.i&&(Ua.delete(t),t.i(e))}function B(t,e,n,i){if(t&&t.o){if(Ua.has(t))return;Ua.add(t),Zi.c.push(()=>{Ua.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const g0=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Sj(t,e){B(t,1,1,()=>{e.delete(t.key)})}function Aj(t,e,n,i,r,s,o,a,l,c,u,h){let d=t.length,f=s.length,p=d;const g={};for(;p--;)g[t[p].key]=p;const m=[],v=new Map,A=new Map;for(p=f;p--;){const k=h(r,s,p),_=n(k);let w=o.get(_);w?i&&w.p(k,e):(w=c(_,k),w.c()),v.set(_,m[p]=w),_ in g&&A.set(_,Math.abs(p-g[_]))}const T=new Set,y=new Set;function N(k){D(k,1),k.m(a,u),o.set(k.key,k),u=k.first,f--}for(;d&&f;){const k=m[f-1],_=t[d-1],w=k.key,V=_.key;k===_?(u=k.first,d--,f--):v.has(V)?!o.has(w)||T.has(w)?N(k):y.has(V)?d--:A.get(w)>A.get(V)?(y.add(w),N(k)):(T.add(V),d--):(l(_,o),d--)}for(;d--;){const k=t[d];v.has(k.key)||l(k,o)}for(;f;)N(m[f-1]);return m}function Ne(t,e){const n={},i={},r={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)r[l]||(n[l]=a[l],r[l]=1);t[s]=a}else for(const l in o)r[l]=1}for(const o in i)o in n||(n[o]=void 0);return n}function ht(t){return typeof t=="object"&&t!==null?t:{}}function Ii(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function vt(t){t&&t.c()}function Dt(t,e){t&&t.l(e)}function dt(t,e,n,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:a}=t.$$;r&&r.m(e,n),i||gu(()=>{const l=s.map(gp).filter(qe);o?o.push(...l):Ke(l),t.$$.on_mount=[]}),a.forEach(gu)}function ft(t,e){const n=t.$$;n.fragment!==null&&(Ke(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _0(t,e){t.$$.dirty[0]===-1&&(Js.push(t),wp(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qe(t,e,n,i,r,s,o,a=[-1]){const l=Da;Fa(t);const c=t.$$={fragment:null,ctx:null,props:s,update:Xt,not_equal:r,bound:_p(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:_p(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(h,d,...f)=>{const p=f.length?f[0]:d;return c.ctx&&r(c.ctx[h],c.ctx[h]=p)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](p),u&&_0(t,h)),d}):[],c.update(),u=!0,Ke(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){o0();const h=ge(e.target);c.fragment&&c.fragment.l(h),h.forEach(U)}else c.fragment&&c.fragment.c();e.intro&&D(t.$$.fragment),dt(t,e.target,e.anchor,e.customElement),a0(),Tp()}Fa(l)}class Ye{$destroy(){ft(this,1),this.$destroy=Xt}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!t0(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Gr=[];function kj(t,e){return{subscribe:Cp(t,e).subscribe}}function Cp(t,e=Xt){let n;const i=new Set;function r(a){if(We(t,a)&&(t=a,n)){const l=!Gr.length;for(const c of i)c[1](),Gr.push(c,t);if(l){for(let c=0;c<Gr.length;c+=2)Gr[c][0](Gr[c+1]);Gr.length=0}}}function s(a){r(a(t))}function o(a,l=Xt){const c=[a,l];return i.add(c),i.size===1&&(n=e(r)||Xt),a(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:r,update:s,subscribe:o}}/**
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
 */const Sp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const W=function(t,e){if(!t)throw zr(e)},zr=function(t){return new Error("Firebase Database ("+Sp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Ap=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)==55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)==56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},v0=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},yu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(n[u],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ap(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):v0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw Error();const d=s<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},y0=function(t){const e=Ap(t);return yu.encodeByteArray(e,!0)},bu=function(t){try{return yu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function b0(t){return kp(void 0,t)}function kp(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!E0(n)||(t[n]=kp(t[n],e[n]));return t}function E0(t){return t!=="__proto__"}/**
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
 */class wi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Vt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ja(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function Rp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Eu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function I0(){return Vt().indexOf("Electron/")>=0}function Op(){const t=Vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function w0(){return Vt().indexOf("MSAppHost/")>=0}function Lp(){return Sp.NODE_ADMIN===!0}/**
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
 */const T0="FirebaseError";class $i extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=T0,Object.setPrototypeOf(this,$i.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zs.prototype.create)}}class Zs{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?C0(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new $i(r,a,i)}}function C0(t,e){return t.replace(S0,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const S0=/\{\$([^}]+)}/g;/**
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
 */function $s(t){return JSON.parse(t)}function Bt(t){return JSON.stringify(t)}/**
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
 */const Mp=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=$s(bu(s[0])||""),n=$s(bu(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},A0=function(t){const e=Mp(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},k0=function(t){const e=Mp(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Jn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Kr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Va(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ba(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Ha(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Np(s)&&Np(o)){if(!Ha(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Np(t){return t!==null&&typeof t=="object"}/**
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
 */function er(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class R0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):h<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const d=(r<<5|r>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function O0(t,e){const n=new L0(t,e);return n.subscribe.bind(n)}class L0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");M0(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Iu),r.error===void 0&&(r.error=Iu),r.complete===void 0&&(r.complete=Iu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function M0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Iu(){}function Xr(t,e){return`${t} failed: ${e} argument `}/**
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
 */const N0=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,W(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},qa=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}class Ti{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tr="[DEFAULT]";/**
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
 */class P0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new wi;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(F0(e))try{this.getOrInitializeService({instanceIdentifier:tr})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tr){return this.instances.has(e)}getOptions(e=tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:D0(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=tr){return this.component?this.component.multipleInstances?e:tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function D0(t){return t===tr?void 0:t}function F0(t){return t.instantiationMode==="EAGER"}/**
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
 */class x0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new P0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(xe||(xe={}));const U0={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},j0=xe.INFO,V0={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},B0=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=V0[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wa{constructor(e){this.name=e,this._logLevel=j0,this._logHandler=B0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?U0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}/**
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
 */class H0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(q0(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function q0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wu="@firebase/app",Pp="0.7.9";/**
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
 */const Tu=new Wa("@firebase/app"),W0="@firebase/app-compat",G0="@firebase/analytics-compat",z0="@firebase/analytics",K0="@firebase/app-check-compat",X0="@firebase/app-check",Q0="@firebase/auth",Y0="@firebase/auth-compat",J0="@firebase/database",Z0="@firebase/database-compat",$0="@firebase/functions",eT="@firebase/functions-compat",tT="@firebase/installations",nT="@firebase/installations-compat",iT="@firebase/messaging",rT="@firebase/messaging-compat",sT="@firebase/performance",oT="@firebase/performance-compat",aT="@firebase/remote-config",lT="@firebase/remote-config-compat",cT="@firebase/storage",uT="@firebase/storage-compat",hT="@firebase/firestore",dT="@firebase/firestore-compat",fT="firebase",pT="9.5.0";/**
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
 */const Dp="[DEFAULT]",mT={[wu]:"fire-core",[W0]:"fire-core-compat",[z0]:"fire-analytics",[G0]:"fire-analytics-compat",[X0]:"fire-app-check",[K0]:"fire-app-check-compat",[Q0]:"fire-auth",[Y0]:"fire-auth-compat",[J0]:"fire-rtdb",[Z0]:"fire-rtdb-compat",[$0]:"fire-fn",[eT]:"fire-fn-compat",[tT]:"fire-iid",[nT]:"fire-iid-compat",[iT]:"fire-fcm",[rT]:"fire-fcm-compat",[sT]:"fire-perf",[oT]:"fire-perf-compat",[aT]:"fire-rc",[lT]:"fire-rc-compat",[cT]:"fire-gcs",[uT]:"fire-gcs-compat",[hT]:"fire-fst",[dT]:"fire-fst-compat","fire-js":"fire-js",[fT]:"fire-js-all"};/**
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
 */const Ga=new Map,Cu=new Map;function gT(t,e){try{t.container.addComponent(e)}catch(n){Tu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nr(t){const e=t.name;if(Cu.has(e))return Tu.debug(`There were multiple attempts to register component ${e}.`),!1;Cu.set(e,t);for(const n of Ga.values())gT(n,t);return!0}function eo(t,e){return t.container.getProvider(e)}/**
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
 */const _T={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},za=new Zs("app","Firebase",_T);/**
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
 */class vT{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ti("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw za.create("app-deleted",{appName:this._name})}}/**
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
 */const ir=pT;function Rj(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Dp,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw za.create("bad-app-name",{appName:String(i)});const r=Ga.get(i);if(r){if(Ha(t,r.options)&&Ha(n,r.config))return r;throw za.create("duplicate-app",{appName:i})}const s=new x0(i);for(const a of Cu.values())s.addComponent(a);const o=new vT(t,n,s);return Ga.set(i,o),o}function Ka(t=Dp){const e=Ga.get(t);if(!e)throw za.create("no-app",{appName:t});return e}function Bn(t,e,n){var i;let r=(i=mT[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tu.warn(a.join(" "));return}nr(new Ti(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */function yT(t){nr(new Ti("platform-logger",e=>new H0(e),"PRIVATE")),Bn(wu,Pp,t),Bn(wu,Pp,"esm2017"),Bn("fire-js","")}yT("");var bT="firebase",ET="9.5.0";/**
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
 */Bn(bT,ET,"app");/*! *****************************************************************************
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
***************************************************************************** */var Su=function(t,e){return Su=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])},Su(t,e)};function wn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Su(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var yt=function(){return yt=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},yt.apply(this,arguments)};function Au(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function Mn(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function IT(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var i=n.call(t),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function wT(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))}function Fp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TT=Fp,xp=new Zs("auth","Firebase",Fp());/**
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
 */const Up=new Wa("@firebase/auth");function Xa(t,...e){Up.logLevel<=xe.ERROR&&Up.error(`Auth (${ir}): ${t}`,...e)}/**
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
 */function ni(t,...e){throw ku(t,...e)}function Nn(t,...e){return ku(t,...e)}function CT(t,e,n){const i=Object.assign(Object.assign({},TT()),{[e]:n});return new Zs("auth","Firebase",i).create(e,{appName:t.name})}function ku(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return xp.create(t,...e)}function $(t,e,...n){if(!t)throw ku(e,...n)}function ii(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xa(e),new Error(e)}function ri(t,e){t||ii(e)}/**
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
 */const jp=new Map;function si(t){ri(t instanceof Function,"Expected a class definition");let e=jp.get(t);return e?(ri(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jp.set(t,e),e)}/**
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
 */function ST(t,e){const n=eo(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Ha(s,e!=null?e:{}))return r;ni(r,"already-initialized")}return n.initialize({options:e})}function AT(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(si);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ru(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Vp(){return Bp()==="http:"||Bp()==="https:"}function Bp(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function kT(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vp()||Rp()||"connection"in navigator)?navigator.onLine:!0}function RT(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class to{constructor(e,n){this.shortDelay=e,this.longDelay=n,ri(n>e,"Short delay should be less than long delay!"),this.isMobile=ja()||Eu()}get(){return kT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ou(t,e){ri(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Lu{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ii("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ii("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ii("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const OT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const LT=new to(3e4,6e4);function rr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ci(t,e,n,i,r={}){return Hp(t,r,()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=er(Object.assign({key:t.config.apiKey},o)).slice(1),l=new(Lu.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&l.set("X-Firebase-Locale",t.languageCode),Lu.fetch()(qp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Hp(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},OT),e);try{const r=new MT(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ya(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ya(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ya(t,"email-already-in-use",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw CT(t,u,c);ni(t,u)}}catch(r){if(r instanceof $i)throw r;ni(t,"network-request-failed")}}async function Qa(t,e,n,i,r={}){const s=await Ci(t,e,n,i,r);return"mfaPendingCredential"in s&&ni(t,"multi-factor-auth-required",{_serverResponse:s}),s}function qp(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Ou(t.config,r):`${t.config.apiScheme}://${r}`}class MT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Nn(this.auth,"timeout")),LT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ya(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Nn(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function NT(t,e){return Ci(t,"POST","/v1/accounts:delete",e)}async function PT(t,e){return Ci(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function no(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DT(t,e=!1){const n=rt(t),i=await n.getIdToken(e),r=Nu(i);$(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:no(Mu(r.auth_time)),issuedAtTime:no(Mu(r.iat)),expirationTime:no(Mu(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mu(t){return Number(t)*1e3}function Nu(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Xa("JWT malformed, contained fewer than 3 sections"),null;try{const r=bu(n);return r?JSON.parse(r):(Xa("Failed to decode base64 JWT payload"),null)}catch(r){return Xa("Caught error parsing JWT payload as JSON",r),null}}function FT(t){const e=Nu(t);return $(e,"internal-error"),$(typeof e.exp!="undefined","internal-error"),$(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function io(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof $i&&xT(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function xT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class UT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=no(this.lastLoginAt),this.creationTime=no(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ja(t){var e;const n=t.auth,i=await t.getIdToken(),r=await io(t,PT(n,{idToken:i}));$(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?BT(s.providerUserInfo):[],a=VT(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Wp(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function jT(t){const e=rt(t);await Ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VT(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function BT(t){return t.map(e=>{var{providerId:n}=e,i=Au(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function HT(t,e){const n=await Hp(t,{},()=>{const i=er({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=qp(t,r,"/v1/token",`key=${s}`);return Lu.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken!="undefined","internal-error"),$(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):FT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await HT(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new ro;return i&&($(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&($(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return ii("not implemented")}}/**
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
 */function Si(t,e){$(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=Au(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new UT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new Wp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await io(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DT(this,e)}reload(){return jT(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ja(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await io(this,NT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,A=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:y,isAnonymous:N,providerData:k,stsTokenManager:_}=n;$(T&&_,e,"internal-error");const w=ro.fromJSON(this.name,_);$(typeof T=="string",e,"internal-error"),Si(h,e.name),Si(d,e.name),$(typeof y=="boolean",e,"internal-error"),$(typeof N=="boolean",e,"internal-error"),Si(f,e.name),Si(p,e.name),Si(g,e.name),Si(m,e.name),Si(v,e.name),Si(A,e.name);const V=new sr({uid:T,auth:e,email:d,emailVerified:y,displayName:h,isAnonymous:N,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:w,createdAt:v,lastLoginAt:A});return k&&Array.isArray(k)&&(V.providerData=k.map(b=>Object.assign({},b))),m&&(V._redirectEventId=m),V}static async _fromIdTokenResponse(e,n,i=!1){const r=new ro;r.updateFromServerResponse(n);const s=new sr({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ja(s),s}}/**
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
 */class Gp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gp.type="NONE";const zp=Gp;/**
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
 */function Za(t,e,n){return`firebase:${t}:${e}:${n}`}class Qr{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Za(this.userKey,r.apiKey,s),this.fullPersistenceKey=Za("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Qr(si(zp),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||si(zp);const o=Za(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=sr._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Qr(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Qr(s,e,i))}}/**
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
 */function Kp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zp(e))return"Blackberry";if($p(e))return"Webos";if(Pu(e))return"Safari";if((e.includes("chrome/")||Qp(e))&&!e.includes("edge/"))return"Chrome";if(Jp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Xp(t=Vt()){return/firefox\//i.test(t)}function Pu(t=Vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qp(t=Vt()){return/crios\//i.test(t)}function Yp(t=Vt()){return/iemobile/i.test(t)}function Jp(t=Vt()){return/android/i.test(t)}function Zp(t=Vt()){return/blackberry/i.test(t)}function $p(t=Vt()){return/webos/i.test(t)}function $a(t=Vt()){return/iphone|ipad|ipod/i.test(t)}function qT(t=Vt()){var e;return $a(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function WT(){return Op()&&document.documentMode===10}function em(t=Vt()){return $a(t)||Jp(t)||$p(t)||Zp(t)||/windows phone/i.test(t)||Yp(t)}function GT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function tm(t,e=[]){let n;switch(t){case"Browser":n=Kp(Vt());break;case"Worker":n=`${Kp(Vt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ir}/${i}`}/**
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
 */class zT{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nm(this),this.idTokenSubscription=new nm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=si(n)),this._initializationPromise=this.queue(async()=>{var i,r;this._deleted||(this.persistenceManager=await Qr.create(this,e),!this._deleted&&(((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?($(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ja(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(si(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zs("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&si(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Qr.create(this,[si(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function so(t){return rt(t)}class nm{constructor(e){this.auth=e,this.observer=null,this.addObserver=O0(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Du{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ii("not implemented")}_getIdTokenResponse(e){return ii("not implemented")}_linkToIdToken(e,n){return ii("not implemented")}_getReauthenticationResolver(e){return ii("not implemented")}}/**
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
 */async function Yr(t,e){return Qa(t,"POST","/v1/accounts:signInWithIdp",rr(t,e))}/**
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
 */const KT="http://localhost";class or extends Du{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ni("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=Au(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new or(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yr(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Yr(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yr(e,n)}buildRequest(){const e={requestUri:KT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=er(n)}return e}}/**
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
 */async function XT(t,e){return Ci(t,"POST","/v1/accounts:sendVerificationCode",rr(t,e))}async function QT(t,e){return Qa(t,"POST","/v1/accounts:signInWithPhoneNumber",rr(t,e))}async function YT(t,e){const n=await Qa(t,"POST","/v1/accounts:signInWithPhoneNumber",rr(t,e));if(n.temporaryProof)throw Ya(t,"account-exists-with-different-credential",n);return n}const JT={USER_NOT_FOUND:"user-not-found"};async function ZT(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Qa(t,"POST","/v1/accounts:signInWithPhoneNumber",rr(t,n),JT)}/**
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
 */class oo extends Du{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new oo({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new oo({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return QT(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return YT(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ZT(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:i,verificationCode:r}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:i,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!n&&!r&&!s?null:new oo({verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s})}}/**
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
 */class im{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ao extends im{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ai extends ao{constructor(){super("facebook.com")}static credential(e){return or._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ai.credential(e.oauthAccessToken)}catch{return null}}}Ai.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ai.PROVIDER_ID="facebook.com";/**
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
 */class ki extends ao{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return or._fromParams({providerId:ki.PROVIDER_ID,signInMethod:ki.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ki.credentialFromTaggedObject(e)}static credentialFromError(e){return ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return ki.credential(n,i)}catch{return null}}}ki.GOOGLE_SIGN_IN_METHOD="google.com";ki.PROVIDER_ID="google.com";/**
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
 */class Ri extends ao{constructor(){super("github.com")}static credential(e){return or._fromParams({providerId:Ri.PROVIDER_ID,signInMethod:Ri.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ri.credentialFromTaggedObject(e)}static credentialFromError(e){return Ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ri.credential(e.oauthAccessToken)}catch{return null}}}Ri.GITHUB_SIGN_IN_METHOD="github.com";Ri.PROVIDER_ID="github.com";/**
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
 */class Oi extends ao{constructor(){super("twitter.com")}static credential(e,n){return or._fromParams({providerId:Oi.PROVIDER_ID,signInMethod:Oi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Oi.credentialFromTaggedObject(e)}static credentialFromError(e){return Oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Oi.credential(n,i)}catch{return null}}}Oi.TWITTER_SIGN_IN_METHOD="twitter.com";Oi.PROVIDER_ID="twitter.com";/**
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
 */class Jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await sr._fromIdTokenResponse(e,i,r),o=rm(i);return new Jr({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=rm(i);return new Jr({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function rm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class el extends $i{constructor(e,n,i,r){var s;super(n.code,n.message);this.operationType=i,this.user=r,Object.setPrototypeOf(this,el.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new el(e,n,i,r)}}function sm(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?el._fromErrorAndOperation(t,s,e,i):s})}async function $T(t,e,n=!1){const i=await io(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jr._forOperation(t,"link",i)}/**
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
 */async function eC(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await io(t,sm(i,r,e,t),n);$(s.idToken,i,"internal-error");const o=Nu(s.idToken);$(o,i,"internal-error");const{sub:a}=o;return $(t.uid===a,i,"user-mismatch"),Jr._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ni(i,"user-mismatch"),s}}/**
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
 */async function om(t,e,n=!1){const i="signIn",r=await sm(t,i,e),s=await Jr._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function tC(t,e){return om(so(t),e)}function Oj(t,e,n,i){return rt(t).onAuthStateChanged(e,n,i)}/**
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
 */function nC(t,e){return Ci(t,"POST","/v2/accounts/mfaEnrollment:start",rr(t,e))}const tl="__sak";/**
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
 */class am{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tl,"1"),this.storage.removeItem(tl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function iC(){const t=Vt();return Pu(t)||$a(t)}const rC=1e3,sC=10;class lm extends am{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iC()&&GT(),this.fallbackToPolling=em(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);WT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,sC):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},rC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lm.type="LOCAL";const oC=lm;/**
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
 */class cm extends am{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cm.type="SESSION";const um=cm;/**
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
 */function aC(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class nl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new nl(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await aC(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nl.receivers=[];/**
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
 */function Fu(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class lC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Fu("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ft(){return window}function cC(t){Ft().location.href=t}/**
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
 */function xu(){return typeof Ft().WorkerGlobalScope!="undefined"&&typeof Ft().importScripts=="function"}async function uC(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dC(){return xu()?self:null}/**
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
 */const hm="firebaseLocalStorageDb",fC=1,il="firebaseLocalStorage",dm="fbase_key";class lo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rl(t,e){return t.transaction([il],e?"readwrite":"readonly").objectStore(il)}function pC(){const t=indexedDB.deleteDatabase(hm);return new lo(t).toPromise()}function Uu(){const t=indexedDB.open(hm,fC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(il,{keyPath:dm})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(il)?e(i):(i.close(),await pC(),e(await Uu()))})})}async function fm(t,e,n){const i=rl(t,!0).put({[dm]:e,value:n});return new lo(i).toPromise()}async function mC(t,e){const n=rl(t,!1).get(e),i=await new lo(n).toPromise();return i===void 0?null:i.value}function pm(t,e){const n=rl(t,!0).delete(e);return new lo(n).toPromise()}const gC=800,_C=3;class mm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>_C)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nl._getInstance(dC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uC(),!this.activeServiceWorker)return;this.sender=new lC(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uu();return await fm(e,tl,"1"),await pm(e,tl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>fm(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>mC(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=rl(r,!1).getAll();return new lo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mm.type="LOCAL";const vC=mm;/**
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
 */function yC(t,e){return Ci(t,"POST","/v2/accounts/mfaSignIn:start",rr(t,e))}/**
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
 */async function bC(t){return(await Ci(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function EC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gm(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Nn("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",EC().appendChild(i)})}function _m(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const IC=500,wC=6e4,sl=1e12;class TC{constructor(e){this.auth=e,this.counter=sl,this._widgets=new Map}render(e,n){const i=this.counter;return this._widgets.set(i,new CC(e,this.auth.name,n||{})),this.counter++,i}reset(e){var n;const i=e||sl;(n=this._widgets.get(i))===null||n===void 0||n.delete(),this._widgets.delete(i)}getResponse(e){var n;const i=e||sl;return((n=this._widgets.get(i))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const i=e||sl;return(n=this._widgets.get(i))===null||n===void 0||n.execute(),""}}class CC{constructor(e,n,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;$(r,"argument-error",{appName:n}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=SC(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},wC)},IC))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function SC(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const ju=_m("rcb"),AC=new to(3e4,6e4),kC="https://www.google.com/recaptcha/api.js?";class RC{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Ft().grecaptcha}load(e,n=""){return $(OC(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Ft().grecaptcha):new Promise((i,r)=>{const s=Ft().setTimeout(()=>{r(Nn(e,"network-request-failed"))},AC.get());Ft()[ju]=()=>{Ft().clearTimeout(s),delete Ft()[ju];const a=Ft().grecaptcha;if(!a){r(Nn(e,"internal-error"));return}const l=a.render;a.render=(c,u)=>{const h=l(c,u);return this.counter++,h},this.hostLanguage=n,i(a)};const o=`${kC}?${er({onload:ju,render:"explicit",hl:n})}`;gm(o).catch(()=>{clearTimeout(s),r(Nn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Ft().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function OC(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class LC{async load(e){return new TC(e)}clearedOneInstance(){}}/**
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
 */const vm="recaptcha",MC={theme:"light",type:"image"};class Lj{constructor(e,n=Object.assign({},MC),i){this.parameters=n,this.type=vm,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=so(i),this.isInvisible=this.parameters.size==="invisible",$(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const r=typeof e=="string"?document.getElementById(e):e;$(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new LC:new RC,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),i=n.getResponse(e);return i||new Promise(r=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),r(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){$(!this.parameters.sitekey,this.auth,"argument-error"),$(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),$(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(i=>i(n)),typeof e=="function")e(n);else if(typeof e=="string"){const i=Ft()[e];typeof i=="function"&&i(n)}}}assertNotDestroyed(){$(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){$(Vp()&&!xu(),this.auth,"internal-error"),await NC(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await bC(this.auth);$(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return $(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function NC(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class PC{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=oo._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Mj(t,e,n){const i=so(t),r=await DC(i,e,rt(n));return new PC(r,s=>tC(i,s))}async function DC(t,e,n){var i;const r=await n.verify();try{$(typeof r=="string",t,"argument-error"),$(n.type===vm,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return $(o.type==="enroll",t,"internal-error"),(await nC(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{$(o.type==="signin",t,"internal-error");const a=((i=s.multiFactorHint)===null||i===void 0?void 0:i.uid)||s.multiFactorUid;return $(a,t,"missing-multi-factor-info"),(await yC(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await XT(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return o}}finally{n._reset()}}/**
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
 */function FC(t,e){return e?si(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Vu extends Du{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xC(t){return om(t.auth,new Vu(t),t.bypassAuthState)}function UC(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),eC(n,new Vu(t),t.bypassAuthState)}async function jC(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),$T(n,new Vu(t),t.bypassAuthState)}/**
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
 */class ym{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xC;case"linkViaPopup":case"linkViaRedirect":return jC;case"reauthViaPopup":case"reauthViaRedirect":return UC;default:ni(this.auth,"internal-error")}}resolve(e){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const VC=new to(2e3,1e4);class Zr extends ym{constructor(e,n,i,r,s){super(e,n,r,s);this.provider=i,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){ri(this.filter.length===1,"Popup operations only handle one event");const e=Fu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,VC.get())};e()}}Zr.currentPopupAction=null;/**
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
 */const BC="pendingRedirect",Bu=new Map;class HC extends ym{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=Bu.get(this.auth._key());if(!e){try{const i=await qC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Bu.set(this.auth._key(),e)}return this.bypassAuthState||Bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qC(t,e){const n=GC(e),i=WC(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function WC(t){return si(t._redirectPersistence)}function GC(t){return Za(BC,t.config.apiKey,t.name)}async function zC(t,e,n=!1){const i=so(t),r=FC(i,e),o=await new HC(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const KC=10*60*1e3;class XC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Em(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Nn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=KC&&this.cachedEventUids.clear(),this.cachedEventUids.has(bm(e))}saveEventToCache(e){this.cachedEventUids.add(bm(e)),this.lastProcessedEventTime=Date.now()}}function bm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Em({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Em(t);default:return!1}}/**
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
 */async function YC(t,e={}){return Ci(t,"GET","/v1/projects",e)}/**
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
 */const JC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZC=/^https?/;async function $C(t){if(t.config.emulator)return;const{authorizedDomains:e}=await YC(t);for(const n of e)try{if(eS(n))return}catch{}ni(t,"unauthorized-domain")}function eS(t){const e=Ru(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!ZC.test(n))return!1;if(JC.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const tS=new to(3e4,6e4);function Im(){const t=Ft().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nS(t){return new Promise((e,n)=>{var i,r,s;function o(){Im(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Im(),n(Nn(t,"network-request-failed"))},timeout:tS.get()})}if((r=(i=Ft().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0?void 0:r.Iframe)e(gapi.iframes.getContext());else if((s=Ft().gapi)===null||s===void 0?void 0:s.load)o();else{const a=_m("iframefcb");return Ft()[a]=()=>{gapi.load?o():n(Nn(t,"network-request-failed"))},gm(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw ol=null,e})}let ol=null;function iS(t){return ol=ol||nS(t),ol}/**
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
 */const rS=new to(5e3,15e3),sS="__/auth/iframe",oS="emulator/auth/iframe",aS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cS(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ou(e,oS):`https://${t.config.authDomain}/${sS}`,i={apiKey:e.apiKey,appName:t.name,v:ir},r=lS.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${er(i).slice(1)}`}async function uS(t){const e=await iS(t),n=Ft().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:cS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aS,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Nn(t,"network-request-failed"),a=Ft().setTimeout(()=>{s(o)},rS.get());function l(){Ft().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const hS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dS=500,fS=600,pS="_blank",mS="http://localhost";class wm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gS(t,e,n,i=dS,r=fS){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hS),{width:i.toString(),height:r.toString(),top:s,left:o}),c=Vt().toLowerCase();n&&(a=Qp(c)?pS:n),Xp(c)&&(e=e||mS,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(qT(c)&&a!=="_self")return _S(e||"",a),new wm(null);const h=window.open(e||"",a,u);$(h,t,"popup-blocked");try{h.focus()}catch{}return new wm(h)}function _S(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const vS="__/auth/handler",yS="emulator/auth/handler";function Tm(t,e,n,i,r,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ir,eventId:r};if(e instanceof im){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Va(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof ao){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${bS(t)}?${er(a).slice(1)}`}function bS({config:t}){return t.emulator?Ou(t,yS):`https://${t.authDomain}/${vS}`}/**
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
 */const Hu="webStorageSupport";class ES{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=um,this._completeRedirectFn=zC}async _openPopup(e,n,i,r){var s;ri((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Tm(e,n,i,Ru(),r);return gS(e,o,Fu())}async _openRedirect(e,n,i,r){return await this._originValidation(e),cC(Tm(e,n,i,Ru(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(ri(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i}async initAndGetManager(e){const n=await uS(e),i=new XC(e);return n.register("authEvent",r=>($(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hu,{type:Hu},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Hu];o!==void 0&&n(!!o),ni(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$C(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return em()||Pu()||$a()}}const IS=ES;var Cm="@firebase/auth",Sm="0.19.3";/**
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
 */class wS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var r;e(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function TS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function CS(t){nr(new Ti("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=i.options;return(o=>{$(r&&!r.includes(":"),"invalid-api-key",{appName:o.name}),$(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:r,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tm(t)},l=new zT(o,a);return AT(l,n),l})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),nr(new Ti("auth-internal",e=>{const n=so(e.getProvider("auth").getImmediate());return(i=>new wS(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(Cm,Sm,TS(t)),Bn(Cm,Sm,"esm2017")}/**
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
 */function Nj(t=Ka()){const e=eo(t,"auth");return e.isInitialized()?e.getImmediate():ST(t,{popupRedirectResolver:IS,persistence:[vC,oC,um]})}CS("Browser");var SS=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Y,qu=qu||{},de=SS||self;function al(){}function Wu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function co(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function AS(t){return Object.prototype.hasOwnProperty.call(t,Gu)&&t[Gu]||(t[Gu]=++kS)}var Gu="closure_uid_"+(1e9*Math.random()>>>0),kS=0;function RS(t,e,n){return t.call.apply(t.bind,arguments)}function OS(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Zt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Zt=RS:Zt=OS,Zt.apply(null,arguments)}function ll(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function $t(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function Li(){this.s=this.s,this.o=this.o}var LS=0,MS={};Li.prototype.s=!1;Li.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),LS!=0)){var t=AS(this);delete MS[t]}};Li.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Am=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},km=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function NS(t){e:{var e=T1;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Rm(t){return Array.prototype.concat.apply([],arguments)}function zu(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function cl(t){return/^[\s\xa0]*$/.test(t)}var Om=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function mn(t,e){return t.indexOf(e)!=-1}function Ku(t,e){return t<e?-1:t>e?1:0}var gn;e:{var Lm=de.navigator;if(Lm){var Mm=Lm.userAgent;if(Mm){gn=Mm;break e}}gn=""}function Xu(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Nm(t){const e={};for(const n in t)e[n]=t[n];return e}var Pm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dm(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<Pm.length;s++)n=Pm[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Qu(t){return Qu[" "](t),t}Qu[" "]=al;function PS(t){var e=xS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var DS=mn(gn,"Opera"),$r=mn(gn,"Trident")||mn(gn,"MSIE"),Fm=mn(gn,"Edge"),Yu=Fm||$r,xm=mn(gn,"Gecko")&&!(mn(gn.toLowerCase(),"webkit")&&!mn(gn,"Edge"))&&!(mn(gn,"Trident")||mn(gn,"MSIE"))&&!mn(gn,"Edge"),FS=mn(gn.toLowerCase(),"webkit")&&!mn(gn,"Edge");function Um(){var t=de.document;return t?t.documentMode:void 0}var ul;e:{var Ju="",Zu=function(){var t=gn;if(xm)return/rv:([^\);]+)(\)|;)/.exec(t);if(Fm)return/Edge\/([\d\.]+)/.exec(t);if($r)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(FS)return/WebKit\/(\S+)/.exec(t);if(DS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Zu&&(Ju=Zu?Zu[1]:""),$r){var $u=Um();if($u!=null&&$u>parseFloat(Ju)){ul=String($u);break e}}ul=Ju}var xS={};function US(){return PS(function(){let t=0;const e=Om(String(ul)).split("."),n=Om("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=Ku(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||Ku(r[2].length==0,s[2].length==0)||Ku(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}var eh;if(de.document&&$r){var jm=Um();eh=jm||parseInt(ul,10)||void 0}else eh=void 0;var jS=eh,VS=function(){if(!de.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{de.addEventListener("test",al,e),de.removeEventListener("test",al,e)}catch{}return t}();function an(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}an.prototype.h=function(){this.defaultPrevented=!0};function uo(t,e){if(an.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xm){e:{try{Qu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:BS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&uo.Z.h.call(this)}}$t(uo,an);var BS={2:"touch",3:"pen",4:"mouse"};uo.prototype.h=function(){uo.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ho="closure_listenable_"+(1e6*Math.random()|0),HS=0;function qS(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++HS,this.ca=this.fa=!1}function hl(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function dl(t){this.src=t,this.g={},this.h=0}dl.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=nh(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new qS(e,this.src,s,!!i,r),e.fa=n,t.push(e)),e};function th(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=Am(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(hl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function nh(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}var ih="closure_lm_"+(1e6*Math.random()|0),rh={};function Vm(t,e,n,i,r){if(i&&i.once)return Hm(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Vm(t,e[s],n,i,r);return null}return n=lh(n),t&&t[ho]?t.N(e,n,co(i)?!!i.capture:!!i,r):Bm(t,e,n,!1,i,r)}function Bm(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=co(r)?!!r.capture:!!r,a=oh(t);if(a||(t[ih]=a=new dl(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=WS(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)VS||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Wm(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function WS(){function t(n){return e.call(t.src,t.listener,n)}var e=GS;return t}function Hm(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Hm(t,e[s],n,i,r);return null}return n=lh(n),t&&t[ho]?t.O(e,n,co(i)?!!i.capture:!!i,r):Bm(t,e,n,!0,i,r)}function qm(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)qm(t,e[s],n,i,r);else i=co(i)?!!i.capture:!!i,n=lh(n),t&&t[ho]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=nh(s,n,i,r),-1<n&&(hl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=oh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=nh(e,n,i,r)),(n=-1<t?e[t]:null)&&sh(n))}function sh(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ho])th(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Wm(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=oh(e))?(th(n,t),n.h==0&&(n.src=null,e[ih]=null)):hl(t)}}}function Wm(t){return t in rh?rh[t]:rh[t]="on"+t}function GS(t,e){if(t.ca)t=!0;else{e=new uo(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&sh(t),t=n.call(i,e)}return t}function oh(t){return t=t[ih],t instanceof dl?t:null}var ah="__closure_events_fn_"+(1e9*Math.random()>>>0);function lh(t){return typeof t=="function"?t:(t[ah]||(t[ah]=function(e){return t.handleEvent(e)}),t[ah])}function Ht(){Li.call(this),this.i=new dl(this),this.P=this,this.I=null}$t(Ht,Li);Ht.prototype[ho]=!0;Ht.prototype.removeEventListener=function(t,e,n,i){qm(this,t,e,n,i)};function en(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new an(e,t);else if(e instanceof an)e.target=e.target||t;else{var r=e;e=new an(i,t),Dm(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=fl(o,i,!0,e)&&r}if(o=e.g=t,r=fl(o,i,!0,e)&&r,r=fl(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=fl(o,i,!1,e)&&r}Ht.prototype.M=function(){if(Ht.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)hl(n[i]);delete t.g[e],t.h--}}this.I=null};Ht.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Ht.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function fl(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&th(t.i,o),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var ch=de.JSON.stringify;function zS(){var t=zm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class KS{constructor(){this.h=this.g=null}add(e,n){const i=Gm.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Gm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new XS,t=>t.reset());class XS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function QS(t){de.setTimeout(()=>{throw t},0)}function uh(t,e){hh||YS(),dh||(hh(),dh=!0),zm.add(t,e)}var hh;function YS(){var t=de.Promise.resolve(void 0);hh=function(){t.then(JS)}}var dh=!1,zm=new KS;function JS(){for(var t;t=zS();){try{t.h.call(t.g)}catch(n){QS(n)}var e=Gm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}dh=!1}function pl(t,e){Ht.call(this),this.h=t||1,this.g=e||de,this.j=Zt(this.kb,this),this.l=Date.now()}$t(pl,Ht);Y=pl.prototype;Y.da=!1;Y.S=null;Y.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),en(this,"tick"),this.da&&(fh(this),this.start()))}};Y.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fh(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}Y.M=function(){pl.Z.M.call(this),fh(this),delete this.g};function ph(t,e,n){if(typeof t=="function")n&&(t=Zt(t,n));else if(t&&typeof t.handleEvent=="function")t=Zt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:de.setTimeout(t,e||0)}function Km(t){t.g=ph(()=>{t.g=null,t.i&&(t.i=!1,Km(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ZS extends Li{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Km(this)}M(){super.M(),this.g&&(de.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fo(t){Li.call(this),this.h=t,this.g={}}$t(fo,Li);var Xm=[];function Qm(t,e,n,i){Array.isArray(n)||(n&&(Xm[0]=n.toString()),n=Xm);for(var r=0;r<n.length;r++){var s=Vm(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ym(t){Xu(t.g,function(e,n){this.g.hasOwnProperty(n)&&sh(e)},t),t.g={}}fo.prototype.M=function(){fo.Z.M.call(this),Ym(this)};fo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ml(){this.g=!0}ml.prototype.Aa=function(){this.g=!1};function $S(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function e1(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function es(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+n1(t,n)+(i?" "+i:"")})}function t1(t,e){t.info(function(){return"TIMEOUT: "+e})}ml.prototype.info=function(){};function n1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ch(n)}catch{return e}}var ar={},Jm=null;function gl(){return Jm=Jm||new Ht}ar.Ma="serverreachability";function Zm(t){an.call(this,ar.Ma,t)}$t(Zm,an);function po(t){const e=gl();en(e,new Zm(e,t))}ar.STAT_EVENT="statevent";function $m(t,e){an.call(this,ar.STAT_EVENT,t),this.stat=e}$t($m,an);function _n(t){const e=gl();en(e,new $m(e,t))}ar.Na="timingevent";function eg(t,e){an.call(this,ar.Na,t),this.size=e}$t(eg,an);function mo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return de.setTimeout(function(){t()},e)}var _l={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},tg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function mh(){}mh.prototype.h=null;function ng(t){return t.h||(t.h=t.i())}function ig(){}var go={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function gh(){an.call(this,"d")}$t(gh,an);function _h(){an.call(this,"c")}$t(_h,an);var vh;function vl(){}$t(vl,mh);vl.prototype.g=function(){return new XMLHttpRequest};vl.prototype.i=function(){return{}};vh=new vl;function _o(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new fo(this),this.P=i1,t=Yu?125:void 0,this.W=new pl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new rg}function rg(){this.i=null,this.g="",this.h=!1}var i1=45e3,yh={},yl={};Y=_o.prototype;Y.setTimeout=function(t){this.P=t};function bh(t,e,n){t.K=1,t.v=Tl(oi(e)),t.s=n,t.U=!0,sg(t,null)}function sg(t,e){t.F=Date.now(),vo(t),t.A=oi(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),pg(n.h,"t",i),t.C=0,n=t.l.H,t.h=new rg,t.g=xg(t.l,n?e:null,!t.s),0<t.O&&(t.L=new ZS(Zt(t.Ia,t,t.g),t.O)),Qm(t.V,t.g,"readystatechange",t.gb),e=t.H?Nm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),po(1),$S(t.j,t.u,t.A,t.m,t.X,t.s)}Y.gb=function(t){t=t.target;const e=this.L;e&&ai(t)==3?e.l():this.Ia(t)};Y.Ia=function(t){try{if(t==this.g)e:{const u=ai(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Yu||this.g&&(this.h.h||this.g.ga()||Sg(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?po(3):po(2)),bl(this);var n=this.g.ba();this.N=n;t:if(og(this)){var i=Sg(this.g);t="";var r=i.length,s=ai(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){lr(this),yo(this);var o="";break t}this.h.i=new de.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,e1(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!cl(a)){var c=a;break t}}c=null}if(n=c)es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Eh(this,n);else{this.i=!1,this.o=3,_n(12),lr(this),yo(this);break e}}this.U?(ag(this,u,o),Yu&&this.i&&u==3&&(Qm(this.V,this.W,"tick",this.fb),this.W.start())):(es(this.j,this.m,o,null),Eh(this,o)),u==4&&lr(this),this.i&&!this.I&&(u==4?Ng(this.l,this):(this.i=!1,vo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,_n(12)):(this.o=0,_n(13)),lr(this),yo(this)}}}catch{}finally{}};function og(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function ag(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if(r=r1(t,n),r==yl){e==4&&(t.o=4,_n(14),i=!1),es(t.j,t.m,null,"[Incomplete Response]");break}else if(r==yh){t.o=4,_n(15),es(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else es(t.j,t.m,r,null),Eh(t,r);og(t)&&r!=yl&&r!=yh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,_n(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mh(e),e.L=!0,_n(11))):(es(t.j,t.m,n,"[Invalid Chunked Response]"),lr(t),yo(t))}Y.fb=function(){if(this.g){var t=ai(this.g),e=this.g.ga();this.C<e.length&&(bl(this),ag(this,t,e),this.i&&t!=4&&vo(this))}};function r1(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?yl:(n=Number(e.substring(n,i)),isNaN(n)?yh:(i+=1,i+n>e.length?yl:(e=e.substr(i,n),t.C=i+n,e)))}Y.cancel=function(){this.I=!0,lr(this)};function vo(t){t.Y=Date.now()+t.P,lg(t,t.P)}function lg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=mo(Zt(t.eb,t),e)}function bl(t){t.B&&(de.clearTimeout(t.B),t.B=null)}Y.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(t1(this.j,this.A),this.K!=2&&(po(3),_n(17)),lr(this),this.o=2,yo(this)):lg(this,this.Y-t)};function yo(t){t.l.G==0||t.I||Ng(t.l,t)}function lr(t){bl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,fh(t.W),Ym(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Eh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Th(n.i,t))){if(n.I=t.N,!t.J&&Th(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ol(n),kl(n);else break e;Lh(n),_n(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=mo(Zt(n.ab,n),6e3));if(1>=_g(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else hr(n,11)}else if((t.J||n.g==t)&&Ol(n),!cl(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=i.i;!s.g&&(mn(p,"spdy")||mn(p,"quic")||mn(p,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Ch(s,s.h),s.h=null))}if(i.D){const g=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(i.sa=g,bt(i.F,i.D,g))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=Fg(i,i.H?i.la:null,i.W),o.J){vg(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(bl(a),vo(a)),i.g=o}else Lg(i);0<n.l.length&&Rl(n)}else c[0]!="stop"&&c[0]!="close"||hr(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?hr(n,7):Rh(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}po(4)}catch{}}function s1(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Wu(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Ih(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Wu(t)||typeof t=="string")km(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Wu(t)||typeof t=="string"){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=s1(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function ts(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof ts)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}Y=ts.prototype;Y.R=function(){wh(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};Y.T=function(){return wh(this),this.g.concat()};function wh(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];cr(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)i=t.g[e],cr(r,i)||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}Y.get=function(t,e){return cr(this.h,t)?this.h[t]:e};Y.set=function(t,e){cr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};Y.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};function cr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var cg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function o1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ur(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ur){this.g=e!==void 0?e:t.g,El(this,t.j),this.s=t.s,Il(this,t.i),wl(this,t.m),this.l=t.l,e=t.h;var n=new Io;n.i=e.i,e.g&&(n.g=new ts(e.g),n.h=e.h),ug(this,n),this.o=t.o}else t&&(n=String(t).match(cg))?(this.g=!!e,El(this,n[1]||"",!0),this.s=bo(n[2]||""),Il(this,n[3]||"",!0),wl(this,n[4]),this.l=bo(n[5]||"",!0),ug(this,n[6]||"",!0),this.o=bo(n[7]||"")):(this.g=!!e,this.h=new Io(null,this.g))}ur.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Eo(e,hg,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Eo(e,hg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Eo(n,n.charAt(0)=="/"?h1:u1,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Eo(n,f1)),t.join("")};function oi(t){return new ur(t)}function El(t,e,n){t.j=n?bo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Il(t,e,n){t.i=n?bo(e,!0):e}function wl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ug(t,e,n){e instanceof Io?(t.h=e,p1(t.h,t.g)):(n||(e=Eo(e,d1)),t.h=new Io(e,t.g))}function bt(t,e,n){t.h.set(e,n)}function Tl(t){return bt(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function a1(t){return t instanceof ur?oi(t):new ur(t,void 0)}function l1(t,e,n,i){var r=new ur(null,void 0);return t&&El(r,t),e&&Il(r,e),n&&wl(r,n),i&&(r.l=i),r}function bo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Eo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,c1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function c1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var hg=/[#\/\?@]/g,u1=/[#\?:]/g,h1=/[#\?]/g,d1=/[#\?@]/g,f1=/#/g;function Io(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Mi(t){t.g||(t.g=new ts,t.h=0,t.i&&o1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Y=Io.prototype;Y.add=function(t,e){Mi(this),this.i=null,t=ns(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function dg(t,e){Mi(t),e=ns(t,e),cr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,cr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&wh(t)))}function fg(t,e){return Mi(t),e=ns(t,e),cr(t.g.h,e)}Y.forEach=function(t,e){Mi(this),this.g.forEach(function(n,i){km(n,function(r){t.call(e,r,i,this)},this)},this)};Y.T=function(){Mi(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n};Y.R=function(t){Mi(this);var e=[];if(typeof t=="string")fg(this,t)&&(e=Rm(e,this.g.get(ns(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Rm(e,t[n])}return e};Y.set=function(t,e){return Mi(this),this.i=null,t=ns(this,t),fg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Y.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function pg(t,e,n){dg(t,e),0<n.length&&(t.i=null,t.g.set(ns(t,e),zu(n)),t.h+=n.length)}Y.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;i[s]!==""&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};function ns(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function p1(t,e){e&&!t.j&&(Mi(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(dg(this,i),pg(this,r,n))},t)),t.j=e}var m1=class{constructor(t,e){this.h=t,this.g=e}};function mg(t){this.l=t||g1,de.PerformanceNavigationTiming?(t=de.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(de.g&&de.g.Ea&&de.g.Ea()&&de.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var g1=10;function gg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function _g(t){return t.h?1:t.g?t.g.size:0}function Th(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ch(t,e){t.g?t.g.add(e):t.h=e}function vg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mg.prototype.cancel=function(){if(this.i=yg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function yg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return zu(t.i)}function Sh(){}Sh.prototype.stringify=function(t){return de.JSON.stringify(t,void 0)};Sh.prototype.parse=function(t){return de.JSON.parse(t,void 0)};function _1(){this.g=new Sh}function v1(t,e,n){const i=n||"";try{Ih(t,function(r,s){let o=r;co(r)&&(o=ch(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function y1(t,e){const n=new ml;if(de.Image){const i=new Image;i.onload=ll(Cl,n,i,"TestLoadImage: loaded",!0,e),i.onerror=ll(Cl,n,i,"TestLoadImage: error",!1,e),i.onabort=ll(Cl,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=ll(Cl,n,i,"TestLoadImage: timeout",!1,e),de.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Cl(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function wo(t){this.l=t.$b||null,this.j=t.ib||!1}$t(wo,mh);wo.prototype.g=function(){return new Sl(this.l,this.j)};wo.prototype.i=function(t){return function(){return t}}({});function Sl(t,e){Ht.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ah,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$t(Sl,Ht);var Ah=0;Y=Sl.prototype;Y.open=function(t,e){if(this.readyState!=Ah)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Co(this)};Y.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||de).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};Y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,To(this)),this.readyState=Ah};Y.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Co(this)),this.g&&(this.readyState=3,Co(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof de.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bg(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function bg(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}Y.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?To(this):Co(this),this.readyState==3&&bg(this)}};Y.Ua=function(t){this.g&&(this.response=this.responseText=t,To(this))};Y.Ta=function(t){this.g&&(this.response=t,To(this))};Y.ha=function(){this.g&&To(this)};function To(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Co(t)}Y.setRequestHeader=function(t,e){this.v.append(t,e)};Y.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Y.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Co(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Sl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var b1=de.JSON.parse;function Ot(t){Ht.call(this),this.headers=new ts,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Eg,this.K=this.L=!1}$t(Ot,Ht);var Eg="",E1=/^https?$/i,I1=["POST","PUT"];Y=Ot.prototype;Y.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vh.g(),this.C=this.u?ng(this.u):ng(vh),this.g.onreadystatechange=Zt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Ig(this,s);return}t=n||"";const r=new ts(this.headers);i&&Ih(i,function(s,o){r.set(o,s)}),i=NS(r.T()),n=de.FormData&&t instanceof de.FormData,!(0<=Am(I1,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Cg(this),0<this.B&&((this.K=w1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Zt(this.pa,this)):this.A=ph(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ig(this,s)}};function w1(t){return $r&&US()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function T1(t){return t.toLowerCase()=="content-type"}Y.pa=function(){typeof qu!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,en(this,"timeout"),this.abort(8))};function Ig(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,wg(t),Al(t)}function wg(t){t.D||(t.D=!0,en(t,"complete"),en(t,"error"))}Y.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,en(this,"complete"),en(this,"abort"),Al(this))};Y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Al(this,!0)),Ot.Z.M.call(this)};Y.Fa=function(){this.s||(this.F||this.v||this.l?Tg(this):this.cb())};Y.cb=function(){Tg(this)};function Tg(t){if(t.h&&typeof qu!="undefined"&&(!t.C[1]||ai(t)!=4||t.ba()!=2)){if(t.v&&ai(t)==4)ph(t.Fa,0,t);else if(en(t,"readystatechange"),ai(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.H).match(cg)[1]||null;if(!r&&de.self&&de.self.location){var s=de.self.location.protocol;r=s.substr(0,s.length-1)}i=!E1.test(r?r.toLowerCase():"")}n=i}if(n)en(t,"complete"),en(t,"success");else{t.m=6;try{var o=2<ai(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",wg(t)}}finally{Al(t)}}}}function Al(t,e){if(t.g){Cg(t);const n=t.g,i=t.C[0]?al:null;t.g=null,t.C=null,e||en(t,"ready");try{n.onreadystatechange=i}catch{}}}function Cg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(de.clearTimeout(t.A),t.A=null)}function ai(t){return t.g?t.g.readyState:0}Y.ba=function(){try{return 2<ai(this)?this.g.status:-1}catch{return-1}};Y.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};Y.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),b1(e)}};function Sg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Eg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}Y.Da=function(){return this.m};Y.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function C1(t){let e="";return Xu(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function kh(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=C1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):bt(t,e,n))}function So(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ag(t){this.za=0,this.l=[],this.h=new ml,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=So("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=So("baseRetryDelayMs",5e3,t),this.$a=So("retryDelaySeedMs",1e4,t),this.Ya=So("forwardChannelMaxRetries",2,t),this.ra=So("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new mg(t&&t.concurrentRequestLimit),this.Ca=new _1,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}Y=Ag.prototype;Y.ma=8;Y.G=1;function Rh(t){if(kg(t),t.G==3){var e=t.V++,n=oi(t.F);bt(n,"SID",t.J),bt(n,"RID",e),bt(n,"TYPE","terminate"),Ao(t,n),e=new _o(t,t.h,e,void 0),e.K=2,e.v=Tl(oi(n)),n=!1,de.navigator&&de.navigator.sendBeacon&&(n=de.navigator.sendBeacon(e.v.toString(),"")),!n&&de.Image&&(new Image().src=e.v,n=!0),n||(e.g=xg(e.l,null),e.g.ea(e.v)),e.F=Date.now(),vo(e)}Dg(t)}Y.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function kl(t){t.g&&(Mh(t),t.g.cancel(),t.g=null)}function kg(t){kl(t),t.u&&(de.clearTimeout(t.u),t.u=null),Ol(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&de.clearTimeout(t.m),t.m=null)}function Oh(t,e){t.l.push(new m1(t.Za++,e)),t.G==3&&Rl(t)}function Rl(t){gg(t.i)||t.m||(t.m=!0,uh(t.Ha,t),t.C=0)}function S1(t,e){return _g(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=mo(Zt(t.Ha,t,e),Pg(t,t.C)),t.C++,!0)}Y.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new _o(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Nm(s),Dm(s,this.P)):s=this.P),this.o===null&&(r.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Og(this,r,e),n=oi(this.F),bt(n,"RID",t),bt(n,"CVER",22),this.D&&bt(n,"X-HTTP-Session-Id",this.D),Ao(this,n),this.o&&s&&kh(n,this.o,s),Ch(this.i,r),this.Ra&&bt(n,"TYPE","init"),this.ja?(bt(n,"$req",e),bt(n,"SID","null"),r.$=!0,bh(r,n,null)):bh(r,n,e),this.G=2}}else this.G==3&&(t?Rg(this,t):this.l.length==0||gg(this.i)||Rg(this))};function Rg(t,e){var n;e?n=e.m:n=t.V++;const i=oi(t.F);bt(i,"SID",t.J),bt(i,"RID",n),bt(i,"AID",t.U),Ao(t,i),t.o&&t.s&&kh(i,t.o,t.s),n=new _o(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Og(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ch(t.i,n),bh(n,i,e)}function Ao(t,e){t.j&&Ih({},function(n,i){bt(e,i,n)})}function Og(t,e,n){n=Math.min(t.l.length,n);var i=t.j?Zt(t.j.Oa,t.j,t):null;e:{var r=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const u=r[l].g;if(c-=s,0>c)s=Math.max(0,r[l].h-100),a=!1;else try{v1(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function Lg(t){t.g||t.u||(t.Y=1,uh(t.Ga,t),t.A=0)}function Lh(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=mo(Zt(t.Ga,t),Pg(t,t.A)),t.A++,!0)}Y.Ga=function(){if(this.u=null,Mg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=mo(Zt(this.bb,this),t)}};Y.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,_n(10),kl(this),Mg(this))};function Mh(t){t.B!=null&&(de.clearTimeout(t.B),t.B=null)}function Mg(t){t.g=new _o(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=oi(t.oa);bt(e,"RID","rpc"),bt(e,"SID",t.J),bt(e,"CI",t.N?"0":"1"),bt(e,"AID",t.U),Ao(t,e),bt(e,"TYPE","xmlhttp"),t.o&&t.s&&kh(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Tl(oi(e)),n.s=null,n.U=!0,sg(n,t)}Y.ab=function(){this.v!=null&&(this.v=null,kl(this),Lh(this),_n(19))};function Ol(t){t.v!=null&&(de.clearTimeout(t.v),t.v=null)}function Ng(t,e){var n=null;if(t.g==e){Ol(t),Mh(t),t.g=null;var i=2}else if(Th(t.i,e))n=e.D,vg(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=gl(),en(i,new eg(i,n,e,r)),Rl(t)}else Lg(t);else if(r=e.o,r==3||r==0&&0<t.I||!(i==1&&S1(t,e)||i==2&&Lh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:hr(t,5);break;case 4:hr(t,10);break;case 3:hr(t,6);break;default:hr(t,2)}}}function Pg(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function hr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=Zt(t.jb,t);n||(n=new ur("//www.google.com/images/cleardot.gif"),de.location&&de.location.protocol=="http"||El(n,"https"),Tl(n)),y1(n.toString(),i)}else _n(2);t.G=0,t.j&&t.j.va(e),Dg(t),kg(t)}Y.jb=function(t){t?(this.h.info("Successfully pinged google.com"),_n(2)):(this.h.info("Failed to ping google.com"),_n(1))};function Dg(t){t.G=0,t.I=-1,t.j&&((yg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,zu(t.l),t.l.length=0),t.j.ua())}function Fg(t,e,n){let i=a1(n);if(i.i!="")e&&Il(i,e+"."+i.i),wl(i,i.m);else{const r=de.location;i=l1(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Xu(t.aa,function(r,s){bt(i,s,r)}),e=t.D,n=t.sa,e&&n&&bt(i,e,n),bt(i,"VER",t.ma),Ao(t,i),i}function xg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ot(new wo({ib:!0})):new Ot(t.qa),e.L=t.H,e}function Ug(){}Y=Ug.prototype;Y.xa=function(){};Y.wa=function(){};Y.va=function(){};Y.ua=function(){};Y.Oa=function(){};function Ll(){if($r&&!(10<=Number(jS)))throw Error("Environmental error: no available transport.")}Ll.prototype.g=function(t,e){return new Pn(t,e)};function Pn(t,e){Ht.call(this),this.g=new Ag(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!cl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!cl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new is(this)}$t(Pn,Ht);Pn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),uh(Zt(t.hb,t,e))),_n(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Fg(t,null,t.W),Rl(t)};Pn.prototype.close=function(){Rh(this.g)};Pn.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Oh(this.g,e)}else this.v?(e={},e.__data__=ch(t),Oh(this.g,e)):Oh(this.g,t)};Pn.prototype.M=function(){this.g.j=null,delete this.j,Rh(this.g),delete this.g,Pn.Z.M.call(this)};function jg(t){gh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$t(jg,gh);function Vg(){_h.call(this),this.status=1}$t(Vg,_h);function is(t){this.g=t}$t(is,Ug);is.prototype.xa=function(){en(this.g,"a")};is.prototype.wa=function(t){en(this.g,new jg(t))};is.prototype.va=function(t){en(this.g,new Vg(t))};is.prototype.ua=function(){en(this.g,"b")};Ll.prototype.createWebChannel=Ll.prototype.g;Pn.prototype.send=Pn.prototype.u;Pn.prototype.open=Pn.prototype.m;Pn.prototype.close=Pn.prototype.close;_l.NO_ERROR=0;_l.TIMEOUT=8;_l.HTTP_ERROR=6;tg.COMPLETE="complete";ig.EventType=go;go.OPEN="a";go.CLOSE="b";go.ERROR="c";go.MESSAGE="d";Ht.prototype.listen=Ht.prototype.N;Ot.prototype.listenOnce=Ot.prototype.O;Ot.prototype.getLastError=Ot.prototype.La;Ot.prototype.getLastErrorCode=Ot.prototype.Da;Ot.prototype.getStatus=Ot.prototype.ba;Ot.prototype.getResponseJson=Ot.prototype.Qa;Ot.prototype.getResponseText=Ot.prototype.ga;Ot.prototype.send=Ot.prototype.ea;var A1=function(){return new Ll},k1=function(){return gl()},Nh=_l,R1=tg,O1=ar,Bg={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},L1=wo,Ml=ig,M1=Ot;const Hg="@firebase/firestore";/**
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
 */class Tn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tn.UNAUTHENTICATED=new Tn(null),Tn.GOOGLE_CREDENTIALS=new Tn("google-credentials-uid"),Tn.FIRST_PARTY=new Tn("first-party-uid"),Tn.MOCK_USER=new Tn("mock-user");/**
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
 */let rs="9.5.0";/**
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
 */const dr=new Wa("@firebase/firestore");function qg(){return dr.logLevel}function se(t,...e){if(dr.logLevel<=xe.DEBUG){const n=e.map(Ph);dr.debug(`Firestore (${rs}): ${t}`,...n)}}function Ni(t,...e){if(dr.logLevel<=xe.ERROR){const n=e.map(Ph);dr.error(`Firestore (${rs}): ${t}`,...n)}}function Wg(t,...e){if(dr.logLevel<=xe.WARN){const n=e.map(Ph);dr.warn(`Firestore (${rs}): ${t}`,...n)}}function Ph(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function _e(t="Unexpected state"){const e=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: `+t;throw Ni(e),new Error(e)}function st(t,e){t||_e()}function ve(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class li{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class N1{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class P1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tn.UNAUTHENTICATED))}shutdown(){}}class D1{constructor(e){this.t=e,this.currentUser=Tn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new li;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new li,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{se("FirebaseCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(se("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new li)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(se("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(st(typeof i.accessToken=="string"),new N1(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return st(e===null||typeof e=="string"),new Tn(e)}}class F1{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=Tn.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class x1{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new F1(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Tn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class Dh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.g(i),this.p=i=>n.writeSequenceNumber(i))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
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
 */function U1(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */Dh.T=-1;class Gg{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=U1(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function Ge(t,e){return t<e?-1:t>e?1:0}function ss(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
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
 */class Dn{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ee(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Dn.fromMillis(Date.now())}static fromDate(e){return Dn.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Dn(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ge(this.nanoseconds,e.nanoseconds):Ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class He{constructor(e){this.timestamp=e}static fromTimestamp(e){return new He(e)}static min(){return new He(new Dn(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function zg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ko{constructor(e,n,i){n===void 0?n=0:n>e.length&&_e(),i===void 0?i=e.length-n:i>e.length-n&&_e(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return ko.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ko?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class It extends ko{construct(e,n,i){return new It(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new ee(F.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new It(n)}static emptyPath(){return new It([])}}const j1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Cn extends ko{construct(e,n,i){return new Cn(e,n,i)}static isValidIdentifier(e){return j1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Cn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Cn(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new ee(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new ee(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ee(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new ee(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Cn(n)}static emptyPath(){return new Cn([])}}/**
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
 */class Ro{constructor(e){this.fields=e,e.sort(Cn.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class ln{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ln(n)}static fromUint8Array(e){const n=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new ln(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ln.EMPTY_BYTE_STRING=new ln("");const V1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pi(t){if(st(!!t),typeof t=="string"){let e=0;const n=V1.exec(t);if(st(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Lt(t.seconds),nanos:Lt(t.nanos)}}function Lt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function os(t){return typeof t=="string"?ln.fromBase64String(t):ln.fromUint8Array(t)}/**
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
 */function Xg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qg(t){const e=t.mapValue.fields.__previous_value__;return Xg(e)?Qg(e):e}function Oo(t){const e=Pi(t.mapValue.fields.__local_write_time__.timestampValue);return new Dn(e.seconds,e.nanos)}/**
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
 */function as(t){return t==null}function Nl(t){return t===0&&1/t==-1/0}function B1(t){return typeof t=="number"&&Number.isInteger(t)&&!Nl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(It.fromString(e))}static fromName(e){return new fe(It.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&It.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return It.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new It(e.slice()))}}/**
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
 */function pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xg(t)?4:10:_e()}function Zn(t,e){const n=pr(t);if(n!==pr(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oo(t).isEqual(Oo(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=Pi(i.timestampValue),o=Pi(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return os(i.bytesValue).isEqual(os(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Lt(i.geoPointValue.latitude)===Lt(r.geoPointValue.latitude)&&Lt(i.geoPointValue.longitude)===Lt(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Lt(i.integerValue)===Lt(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=Lt(i.doubleValue),o=Lt(r.doubleValue);return s===o?Nl(s)===Nl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(zg(s)!==zg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Zn(s[a],o[a])))return!1;return!0}(t,e);default:return _e()}}function Lo(t,e){return(t.values||[]).find(n=>Zn(n,e))!==void 0}function ls(t,e){const n=pr(t),i=pr(e);if(n!==i)return Ge(n,i);switch(n){case 0:return 0;case 1:return Ge(t.booleanValue,e.booleanValue);case 2:return function(r,s){const o=Lt(r.integerValue||r.doubleValue),a=Lt(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Yg(t.timestampValue,e.timestampValue);case 4:return Yg(Oo(t),Oo(e));case 5:return Ge(t.stringValue,e.stringValue);case 6:return function(r,s){const o=os(r),a=os(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Ge(o[l],a[l]);if(c!==0)return c}return Ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const o=Ge(Lt(r.latitude),Lt(s.latitude));return o!==0?o:Ge(Lt(r.longitude),Lt(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=ls(o[l],a[l]);if(c)return c}return Ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){const o=r.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=Ge(a[u],c[u]);if(h!==0)return h;const d=ls(o[a[u]],l[c[u]]);if(d!==0)return d}return Ge(a.length,c.length)}(t.mapValue,e.mapValue);default:throw _e()}}function Yg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ge(t,e);const n=Pi(t),i=Pi(e),r=Ge(n.seconds,i.seconds);return r!==0?r:Ge(n.nanos,i.nanos)}function Fh(t){return xh(t)}function xh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=Pi(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?os(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,fe.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=xh(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${xh(i.fields[a])}`;return s+"}"}(t.mapValue):_e();var e,n}function Uh(t){return!!t&&"integerValue"in t}function jh(t){return!!t&&"arrayValue"in t}function Jg(t){return!!t&&"nullValue"in t}function Zg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pl(t){return!!t&&"mapValue"in t}function Mo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Mo(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mo(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class Fn{constructor(e){this.value=e}static empty(){return new Fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Pl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mo(n)}setAll(e){let n=Cn.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=Mo(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());Pl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];Pl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){fr(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new Fn(Mo(this.value))}}function $g(t){const e=[];return fr(t.fields,(n,i)=>{const r=new Cn([n]);if(Pl(i)){const s=$g(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new Ro(e)}/**
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
 */class cn{constructor(e,n,i,r,s){this.key=e,this.documentType=n,this.version=i,this.data=r,this.documentState=s}static newInvalidDocument(e){return new cn(e,0,He.min(),Fn.empty(),0)}static newFoundDocument(e,n,i){return new cn(e,1,n,i,0)}static newNoDocument(e,n){return new cn(e,2,n,Fn.empty(),0)}static newUnknownDocument(e,n){return new cn(e,3,n,Fn.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Fn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof cn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new cn(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class H1{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.A=null}}function e_(t,e=null,n=[],i=[],r=null,s=null,o=null){return new H1(t,e,n,i,r,s,o)}function Vh(t){const e=ve(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>W1(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),as(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Dl(e.startAt)),e.endAt&&(n+="|ub:",n+=Dl(e.endAt)),e.A=n}return e.A}function q1(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${Fh(i.value)}`;var i}).join(", ")}]`),as(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Dl(t.startAt)),t.endAt&&(e+=", endAt: "+Dl(t.endAt)),`Target(${e})`}function Bh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Z1(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!Zn(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!i_(t.startAt,e.startAt)&&i_(t.endAt,e.endAt)}function Hh(t){return fe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Sn extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,i):new G1(e,n,i):n==="array-contains"?new X1(e,i):n==="in"?new Q1(e,i):n==="not-in"?new Y1(e,i):n==="array-contains-any"?new J1(e,i):new Sn(e,n,i)}static R(e,n,i){return n==="in"?new z1(e,i):new K1(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(ls(n,this.value)):n!==null&&pr(this.value)===pr(n)&&this.P(ls(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function W1(t){return t.field.canonicalString()+t.op.toString()+Fh(t.value)}class G1 extends Sn{constructor(e,n,i){super(e,n,i),this.key=fe.fromName(i.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.P(n)}}class z1 extends Sn{constructor(e,n){super(e,"in",n),this.keys=t_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class K1 extends Sn{constructor(e,n){super(e,"not-in",n),this.keys=t_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function t_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>fe.fromName(i.referenceValue))}class X1 extends Sn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jh(n)&&Lo(n.arrayValue,this.value)}}class Q1 extends Sn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lo(this.value.arrayValue,n)}}class Y1 extends Sn{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Lo(this.value.arrayValue,n)}}class J1 extends Sn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Lo(this.value.arrayValue,i))}}class qh{constructor(e,n){this.position=e,this.before=n}}function Dl(t){return`${t.before?"b":"a"}:${t.position.map(e=>Fh(e)).join(",")}`}class cs{constructor(e,n="asc"){this.field=e,this.dir=n}}function Z1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function n_(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=fe.comparator(fe.fromName(o.referenceValue),n.key):i=ls(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return t.before?i<=0:i<0}function i_(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class No{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.V=null,this.S=null,this.startAt,this.endAt}}function $1(t,e,n,i,r,s,o,a){return new No(t,e,n,i,r,s,o,a)}function Fl(t){return new No(t)}function xl(t){return!as(t.limit)&&t.limitType==="F"}function Ul(t){return!as(t.limit)&&t.limitType==="L"}function r_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function s_(t){for(const e of t.filters)if(e.v())return e.field;return null}function eA(t){return t.collectionGroup!==null}function Po(t){const e=ve(t);if(e.V===null){e.V=[];const n=s_(e),i=r_(e);if(n!==null&&i===null)n.isKeyField()||e.V.push(new cs(n)),e.V.push(new cs(Cn.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.V.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new cs(Cn.keyField(),s))}}}return e.V}function mr(t){const e=ve(t);if(!e.S)if(e.limitType==="F")e.S=e_(e.path,e.collectionGroup,Po(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Po(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new cs(s.field,o))}const i=e.endAt?new qh(e.endAt.position,!e.endAt.before):null,r=e.startAt?new qh(e.startAt.position,!e.startAt.before):null;e.S=e_(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e.S}function tA(t,e,n){return new No(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jl(t,e){return Bh(mr(t),mr(e))&&t.limitType===e.limitType}function o_(t){return`${Vh(mr(t))}|lt:${t.limitType}`}function Wh(t){return`Query(target=${q1(mr(t))}; limitType=${t.limitType})`}function Vl(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):fe.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!n_(n.startAt,Po(n),i)||n.endAt&&n_(n.endAt,Po(n),i))}(t,e)}function a_(t){return(e,n)=>{let i=!1;for(const r of Po(t)){const s=nA(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function nA(t,e,n){const i=t.field.isKeyField()?fe.comparator(e.key,n.key):function(r,s,o){const a=s.data.field(r),l=o.data.field(r);return a!==null&&l!==null?ls(a,l):_e()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return _e()}}/**
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
 */function l_(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nl(e)?"-0":e}}function c_(t){return{integerValue:""+t}}function iA(t,e){return B1(e)?c_(e):l_(t,e)}/**
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
 */class Bl{constructor(){this._=void 0}}function rA(t,e,n){return t instanceof Do?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&(s.fields.__previous_value__=r),{mapValue:s}}(n,e):t instanceof us?h_(t,e):t instanceof Fo?d_(t,e):function(i,r){const s=u_(i,r),o=f_(s)+f_(i.C);return Uh(s)&&Uh(i.C)?c_(o):l_(i.N,o)}(t,e)}function sA(t,e,n){return t instanceof us?h_(t,e):t instanceof Fo?d_(t,e):n}function u_(t,e){return t instanceof Hl?Uh(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Do extends Bl{}class us extends Bl{constructor(e){super(),this.elements=e}}function h_(t,e){const n=p_(e);for(const i of t.elements)n.some(r=>Zn(r,i))||n.push(i);return{arrayValue:{values:n}}}class Fo extends Bl{constructor(e){super(),this.elements=e}}function d_(t,e){let n=p_(e);for(const i of t.elements)n=n.filter(r=>!Zn(r,i));return{arrayValue:{values:n}}}class Hl extends Bl{constructor(e,n){super(),this.N=e,this.C=n}}function f_(t){return Lt(t.integerValue||t.doubleValue)}function p_(t){return jh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class m_{constructor(e,n){this.field=e,this.transform=n}}function oA(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof us&&i instanceof us||n instanceof Fo&&i instanceof Fo?ss(n.elements,i.elements,Zn):n instanceof Hl&&i instanceof Hl?Zn(n.C,i.C):n instanceof Do&&i instanceof Do}(t.transform,e.transform)}class aA{constructor(e,n){this.version=e,this.transformResults=n}}class Gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gn}static exists(e){return new Gn(void 0,e)}static updateTime(e){return new Gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ql(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wl{}function lA(t,e,n){t instanceof Gl?function(i,r,s){const o=i.value.clone(),a=y_(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof gr?function(i,r,s){if(!ql(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=y_(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(v_(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Gh(t,e,n){t instanceof Gl?function(i,r,s){if(!ql(i.precondition,r))return;const o=i.value.clone(),a=b_(i.fieldTransforms,s,r);o.setAll(a),r.convertToFoundDocument(__(r),o).setHasLocalMutations()}(t,e,n):t instanceof gr?function(i,r,s){if(!ql(i.precondition,r))return;const o=b_(i.fieldTransforms,s,r),a=r.data;a.setAll(v_(i)),a.setAll(o),r.convertToFoundDocument(__(r),a).setHasLocalMutations()}(t,e,n):function(i,r){ql(i.precondition,r)&&r.convertToNoDocument(He.min())}(t,e)}function cA(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=u_(i.transform,r||null);s!=null&&(n==null&&(n=Fn.empty()),n.set(i.field,s))}return n||null}function g_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&ss(n,i,(r,s)=>oA(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function __(t){return t.isFoundDocument()?t.version:He.min()}class Gl extends Wl{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}}class gr extends Wl{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}}function v_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function y_(t,e,n){const i=new Map;st(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,sA(o,a,n[r]))}return i}function b_(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,rA(s,o,e))}return i}class zh extends Wl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class uA extends Wl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class hA{constructor(e){this.count=e}}/**
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
 */var Mt,De;function dA(t){switch(t){default:return _e();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function E_(t){if(t===void 0)return Ni("GRPC error has no .code"),F.UNKNOWN;switch(t){case Mt.OK:return F.OK;case Mt.CANCELLED:return F.CANCELLED;case Mt.UNKNOWN:return F.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return F.INTERNAL;case Mt.UNAVAILABLE:return F.UNAVAILABLE;case Mt.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Mt.NOT_FOUND:return F.NOT_FOUND;case Mt.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Mt.ABORTED:return F.ABORTED;case Mt.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Mt.DATA_LOSS:return F.DATA_LOSS;default:return _e()}}(De=Mt||(Mt={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class un{constructor(e,n){this.comparator=e,this.root=n||tn.EMPTY}insert(e,n){return new un(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tn.BLACK,null,null))}remove(e){return new un(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zl(this.root,e,this.comparator,!1)}getReverseIterator(){return new zl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zl(this.root,e,this.comparator,!0)}}class zl{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tn{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:tn.RED,this.left=r!=null?r:tn.EMPTY,this.right=s!=null?s:tn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new tn(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return tn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return tn.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const e=this.left.check();if(e!==this.right.check())throw _e();return e+(this.isRed()?0:1)}}tn.EMPTY=null,tn.RED=!0,tn.BLACK=!1;tn.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(t,e,n,i,r){return this}insert(t,e,n){return new tn(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nn{constructor(e){this.comparator=e,this.data=new un(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new I_(this.data.getIterator())}getIteratorFrom(e){return new I_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof nn)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nn(this.comparator);return n.data=e,n}}class I_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const fA=new un(fe.comparator);function _r(){return fA}const pA=new un(fe.comparator);function Kh(){return pA}const mA=new un(fe.comparator);function gA(){return mA}const _A=new nn(fe.comparator);function pt(...t){let e=_A;for(const n of t)e=e.add(n);return e}const vA=new nn(Ge);function w_(){return vA}/**
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
 */class Kl{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const i=new Map;return i.set(e,xo.createSynthesizedTargetChangeForCurrentChange(e,n)),new Kl(He.min(),i,w_(),_r(),pt())}}class xo{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new xo(ln.EMPTY_BYTE_STRING,n,pt(),pt(),pt())}}/**
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
 */class Xl{constructor(e,n,i,r){this.k=e,this.removedTargetIds=n,this.key=i,this.$=r}}class T_{constructor(e,n){this.targetId=e,this.O=n}}class C_{constructor(e,n,i=ln.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class S_{constructor(){this.F=0,this.M=k_(),this.L=ln.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=pt(),n=pt(),i=pt();return this.M.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:_e()}}),new xo(this.L,this.B,e,n,i)}G(){this.U=!1,this.M=k_()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class yA{constructor(e){this.tt=e,this.et=new Map,this.nt=_r(),this.st=A_(),this.it=new nn(Ge)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.ct(n,e.key,e.$);for(const n of e.removedTargetIds)this.ct(n,e.key,e.$)}at(e){this.forEachTarget(e,n=>{const i=this.ut(n);switch(e.state){case 0:this.ht(n)&&i.j(e.resumeToken);break;case 1:i.X(),i.q||i.G(),i.j(e.resumeToken);break;case 2:i.X(),i.q||this.removeTarget(n);break;case 3:this.ht(n)&&(i.Z(),i.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),i.j(e.resumeToken));break;default:_e()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((i,r)=>{this.ht(r)&&n(r)})}ft(e){const n=e.targetId,i=e.O.count,r=this.dt(n);if(r){const s=r.target;if(Hh(s))if(i===0){const o=new fe(s.path);this.ct(n,o,cn.newNoDocument(o,He.min()))}else st(i===1);else this.wt(n)!==i&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((s,o)=>{const a=this.dt(o);if(a){if(s.current&&Hh(a.target)){const l=new fe(a.target.path);this.nt.get(l)!==null||this.gt(o,l)||this.ct(o,l,cn.newNoDocument(l,e))}s.K&&(n.set(o,s.W()),s.G())}});let i=pt();this.st.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.dt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(s))});const r=new Kl(e,n,this.it,this.nt,i);return this.nt=_r(),this.st=A_(),this.it=new nn(Ge),r}ot(e,n){if(!this.ht(e))return;const i=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,i),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}ct(e,n,i){if(!this.ht(e))return;const r=this.ut(e);this.gt(e,n)?r.H(n,1):r.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),i&&(this.nt=this.nt.insert(n,i))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new S_,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new nn(Ge),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||se("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new S_),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function A_(){return new un(fe.comparator)}function k_(){return new un(fe.comparator)}/**
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
 */const bA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),EA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class IA{constructor(e,n){this.databaseId=e,this.D=n}}function Ql(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function R_(t,e){return t.D?e.toBase64():e.toUint8Array()}function wA(t,e){return Ql(t,e.toTimestamp())}function ci(t){return st(!!t),He.fromTimestamp(function(e){const n=Pi(e);return new Dn(n.seconds,n.nanos)}(t))}function Xh(t,e){return function(n){return new It(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function O_(t){const e=It.fromString(t);return st(F_(e)),e}function Qh(t,e){return Xh(t.databaseId,e.path)}function Yh(t,e){const n=O_(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new fe(L_(n))}function Jh(t,e){return Xh(t.databaseId,e)}function TA(t){const e=O_(t);return e.length===4?It.emptyPath():L_(e)}function Zh(t){return new It(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function L_(t){return st(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function M_(t,e,n){return{name:Qh(t,e),fields:n.value.mapValue.fields}}function CA(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:_e()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(l,c){return l.D?(st(c===void 0||typeof c=="string"),ln.fromBase64String(c||"")):(st(c===void 0||c instanceof Uint8Array),ln.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?F.UNKNOWN:E_(l.code);return new ee(c,l.message||"")}(o);n=new C_(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Yh(t,i.document.name),s=ci(i.document.updateTime),o=new Fn({mapValue:{fields:i.document.fields}}),a=cn.newFoundDocument(r,s,o),l=i.targetIds||[],c=i.removedTargetIds||[];n=new Xl(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Yh(t,i.document),s=i.readTime?ci(i.readTime):He.min(),o=cn.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Xl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Yh(t,i.document),s=i.removedTargetIds||[];n=new Xl([],s,r,null)}else{if(!("filter"in e))return _e();{e.filter;const i=e.filter;i.targetId;const r=i.count||0,s=new hA(r),o=i.targetId;n=new T_(o,s)}}return n}function SA(t,e){let n;if(e instanceof Gl)n={update:M_(t,e.key,e.value)};else if(e instanceof zh)n={delete:Qh(t,e.key)};else if(e instanceof gr)n={update:M_(t,e.key,e.data),updateMask:FA(e.fieldMask)};else{if(!(e instanceof uA))return _e();n={verify:Qh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof Do)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof us)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Fo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Hl)return{fieldPath:s.field.canonicalString(),increment:o.C};throw _e()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:wA(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:_e()}(t,e.precondition)),n}function AA(t,e){return t&&t.length>0?(st(e!==void 0),t.map(n=>function(i,r){let s=i.updateTime?ci(i.updateTime):ci(r);return s.isEqual(He.min())&&(s=ci(r)),new aA(s,i.transformResults||[])}(n,e))):[]}function kA(t,e){return{documents:[Jh(t,e.path)]}}function RA(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Jh(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jh(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(a){if(a.length===0)return;const l=a.map(c=>function(u){if(u.op==="=="){if(Zg(u.value))return{unaryFilter:{field:hs(u.field),op:"IS_NAN"}};if(Jg(u.value))return{unaryFilter:{field:hs(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(Zg(u.value))return{unaryFilter:{field:hs(u.field),op:"IS_NOT_NAN"}};if(Jg(u.value))return{unaryFilter:{field:hs(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hs(u.field),op:NA(u.op),value:u.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const s=function(a){if(a.length!==0)return a.map(l=>function(c){return{field:hs(c.field),direction:MA(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,l){return a.D||as(l)?l:{value:l}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=P_(e.startAt)),e.endAt&&(n.structuredQuery.endAt=P_(e.endAt)),n}function OA(t){let e=TA(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){st(i===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=N_(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new cs(ds(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,as(h)?null:h}(n.limit));let l=null;n.startAt&&(l=D_(n.startAt));let c=null;return n.endAt&&(c=D_(n.endAt)),$1(e,r,o,s,a,"F",l,c)}function LA(t,e){const n=function(i,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return _e()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function N_(t){return t?t.unaryFilter!==void 0?[DA(t)]:t.fieldFilter!==void 0?[PA(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>N_(e)).reduce((e,n)=>e.concat(n)):_e():[]}function P_(t){return{before:t.before,values:t.position}}function D_(t){const e=!!t.before,n=t.values||[];return new qh(n,e)}function MA(t){return bA[t]}function NA(t){return EA[t]}function hs(t){return{fieldPath:t.canonicalString()}}function ds(t){return Cn.fromServerFormat(t.fieldPath)}function PA(t){return Sn.create(ds(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _e()}}(t.fieldFilter.op),t.fieldFilter.value)}function DA(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ds(t.unaryFilter.field);return Sn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ds(t.unaryFilter.field);return Sn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ds(t.unaryFilter.field);return Sn.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ds(t.unaryFilter.field);return Sn.create(r,"!=",{nullValue:"NULL_VALUE"});default:return _e()}}function FA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function F_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const xA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_e(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Q((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof Q?n:Q.resolve(n)}catch(n){return Q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):Q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):Q.reject(n)}static resolve(e){return new Q((n,i)=>{n(e)})}static reject(e){return new Q((n,i)=>{i(e)})}static waitFor(e){return new Q((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},l=>i(l))}),o=!0,s===r&&n()})}static or(e){let n=Q.resolve(!1);for(const i of e)n=n.next(r=>r?Q.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}}function Uo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class jA{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&lA(s,e,i[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Gh(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Gh(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const i=e.get(n.key),r=i;this.applyToLocalView(r),i.isValidDocument()||r.convertToNoDocument(He.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),pt())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,i)=>g_(n,i))&&ss(this.baseMutations,e.baseMutations,(n,i)=>g_(n,i))}}class $h{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){st(e.mutations.length===i.length);let r=gA();const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new $h(e,n,i,r)}}/**
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
 */class vr{constructor(e,n,i,r,s=He.min(),o=He.min(),a=ln.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class VA{constructor(e){this.Wt=e}}function BA(t){const e=OA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?tA(e,e.limit,"L"):e}/**
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
 */class HA{constructor(){this.Gt=new qA}addToCollectionParentIndex(e,n){return this.Gt.add(n),Q.resolve()}getCollectionParents(e,n){return Q.resolve(this.Gt.getEntries(n))}}class qA{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new nn(It.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new nn(It.comparator)).toArray()}}/**
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
 */class fs{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new fs(0)}static ie(){return new fs(-1)}}/**
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
 */async function jo(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==xA)throw t;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Vo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r!==void 0){for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n])}else this.inner[i]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),!0;return!1}forEach(e){fr(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return Kg(this.inner)}}/**
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
 */class WA{constructor(){this.changes=new Vo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:He.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:cn.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?Q.resolve(i.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class x_{constructor(e,n,i){this.He=e,this.In=n,this.Ht=i}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(i=>this.Rn(e,n,i))}Rn(e,n,i){return this.He.getEntry(e,n).next(r=>{for(const s of i)s.applyToLocalView(r);return r})}bn(e,n){e.forEach((i,r)=>{for(const s of n)s.applyToLocalView(r)})}Pn(e,n){return this.He.getEntries(e,n).next(i=>this.vn(e,i).next(()=>i))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(i=>this.bn(n,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return fe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Vn(e,n.path):eA(n)?this.Sn(e,n,i):this.Dn(e,n,i)}Vn(e,n){return this.An(e,new fe(n)).next(i=>{let r=Kh();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}Sn(e,n,i){const r=n.collectionGroup;let s=Kh();return this.Ht.getCollectionParents(e,r).next(o=>Q.forEach(o,a=>{const l=function(c,u){return new No(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.Dn(e,l,i).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}Dn(e,n,i){let r,s;return this.He.getDocumentsMatchingQuery(e,n,i).next(o=>(r=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Cn(e,s,r).next(a=>{r=a;for(const l of s)for(const c of l.mutations){const u=c.key;let h=r.get(u);h==null&&(h=cn.newInvalidDocument(u),r=r.insert(u,h)),Gh(c,h,l.localWriteTime),h.isFoundDocument()||(r=r.remove(u))}}))).next(()=>(r.forEach((o,a)=>{Vl(n,a)||(r=r.remove(o))}),r))}Cn(e,n,i){let r=pt();for(const o of n)for(const a of o.mutations)a instanceof gr&&i.get(a.key)===null&&(r=r.add(a.key));let s=i;return this.He.getEntries(e,r).next(o=>(o.forEach((a,l)=>{l.isFoundDocument()&&(s=s.insert(a,l))}),s))}}/**
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
 */class ed{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Nn=i,this.xn=r}static kn(e,n){let i=pt(),r=pt();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new ed(e,n.fromCache,i,r)}}/**
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
 */class GA{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,i,r){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||i.isEqual(He.min())?this.Fn(e,n):this.On.Pn(e,r).next(s=>{const o=this.Mn(n,s);return(xl(n)||Ul(n))&&this.Ln(n.limitType,o,r,i)?this.Fn(e,n):(qg()<=xe.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Wh(n)),this.On.getDocumentsMatchingQuery(e,n,i).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}Mn(e,n){let i=new nn(a_(e));return n.forEach((r,s)=>{Vl(e,s)&&(i=i.add(s))}),i}Ln(e,n,i,r){if(i.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Fn(e,n){return qg()<=xe.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",Wh(n)),this.On.getDocumentsMatchingQuery(e,n,He.min())}}/**
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
 */class zA{constructor(e,n,i,r){this.persistence=e,this.Bn=n,this.N=r,this.Un=new un(Ge),this.qn=new Vo(s=>Vh(s),Bh),this.Kn=He.min(),this.In=e.getMutationQueue(i),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new x_(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function KA(t,e,n,i){return new zA(t,e,n,i)}async function U_(t,e){const n=ve(t);let i=n.In,r=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(l=>(a=l,i=n.persistence.getMutationQueue(e),r=new x_(n.jn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(o))).next(l=>{const c=[],u=[];let h=pt();for(const d of a){c.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}for(const d of l){u.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}return r.Pn(o,h).next(d=>({Wn:d,removedBatchIds:c,addedBatchIds:u}))})});return n.In=i,n.Qn=r,n.Bn.$n(n.Qn),s}function XA(t,e){const n=ve(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=Q.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(p=>{const g=l.docVersions.get(f);st(g!==null),p.version.compareTo(g)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&c.addEntry(p,l.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,u))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.In.performConsistencyCheck(i)).next(()=>n.Qn.Pn(i,r))})}function j_(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function QA(t,e){const n=ve(t),i=e.snapshotVersion;let r=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});r=n.Un;const a=[];e.targetChanges.forEach((c,u)=>{const h=r.get(u);if(!h)return;a.push(n.ze.removeMatchingKeys(s,c.removedDocuments,u).next(()=>n.ze.addMatchingKeys(s,c.addedDocuments,u)));const d=c.resumeToken;if(d.approximateByteSize()>0){const f=h.withResumeToken(d,i).withSequenceNumber(s.currentSequenceNumber);r=r.insert(u,f),function(p,g,m){return st(g.resumeToken.approximateByteSize()>0),p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(h,f,c)&&a.push(n.ze.updateTargetData(s,f))}});let l=_r();if(e.documentUpdates.forEach((c,u)=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(YA(s,o,e.documentUpdates,i,void 0).next(c=>{l=c})),!i.isEqual(He.min())){const c=n.ze.getLastRemoteSnapshotVersion(s).next(u=>n.ze.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(c)}return Q.waitFor(a).next(()=>o.apply(s)).next(()=>n.Qn.vn(s,l)).next(()=>l)}).then(s=>(n.Un=r,s))}function YA(t,e,n,i,r){let s=pt();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=_r();return n.forEach((l,c)=>{const u=o.get(l),h=(r==null?void 0:r.get(l))||i;c.isNoDocument()&&c.version.isEqual(He.min())?(e.removeEntry(l,h),a=a.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c,h),a=a.insert(l,c)):se("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),a})}function JA(t,e){const n=ve(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(i,e)))}function ZA(t,e){const n=ve(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.ze.getTargetData(i,e).next(s=>s?(r=s,Q.resolve(r)):n.ze.allocateTargetId(i).next(o=>(r=new vr(e,o,0,i.currentSequenceNumber),n.ze.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.Un.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(i.targetId,i),n.qn.set(e,i.targetId)),i})}async function td(t,e,n){const i=ve(t),r=i.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Uo(o))throw o;se("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Un=i.Un.remove(e),i.qn.delete(r.target)}function V_(t,e,n){const i=ve(t);let r=He.min(),s=pt();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ve(a),h=u.qn.get(c);return h!==void 0?Q.resolve(u.Un.get(h)):u.ze.getTargetData(l,c)}(i,o,mr(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.ze.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>i.Bn.getDocumentsMatchingQuery(o,e,n?r:He.min(),n?s:pt())).next(a=>({documents:a,Gn:s})))}/**
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
 */class $A{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return Q.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var i;return this.Yn.set(n.id,{id:(i=n).id,version:i.version,createTime:ci(i.createTime)}),Q.resolve()}getNamedQuery(e,n){return Q.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:BA(i.bundledQuery),readTime:ci(i.readTime)}}(n)),Q.resolve()}}/**
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
 */class nd{constructor(){this.Zn=new nn(qt.ts),this.es=new nn(qt.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const i=new qt(e,n);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.rs(new qt(e,n))}os(e,n){e.forEach(i=>this.removeReference(i,n))}cs(e){const n=new fe(new It([])),i=new qt(n,e),r=new qt(n,e+1),s=[];return this.es.forEachInRange([i,r],o=>{this.rs(o),s.push(o.key)}),s}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new fe(new It([])),i=new qt(n,e),r=new qt(n,e+1);let s=pt();return this.es.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new qt(e,0),i=this.Zn.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class qt{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return fe.comparator(e.key,n.key)||Ge(e.ls,n.ls)}static ns(e,n){return Ge(e.ls,n.ls)||fe.comparator(e.key,n.key)}}/**
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
 */class ek{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new nn(qt.ts)}checkEmpty(e){return Q.resolve(this.In.length===0)}addMutationBatch(e,n,i,r){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new jA(s,n,i,r);this.In.push(o);for(const a of r)this.ds=this.ds.add(new qt(a.key,s)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return Q.resolve(o)}lookupMutationBatch(e,n){return Q.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this._s(i),s=r<0?0:r;return Q.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return Q.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new qt(n,0),r=new qt(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([i,r],o=>{const a=this.ws(o.ls);s.push(a)}),Q.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new nn(Ge);return n.forEach(r=>{const s=new qt(r,0),o=new qt(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{i=i.add(a.ls)})}),Q.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;fe.isDocumentKey(s)||(s=s.child(""));const o=new qt(new fe(s),0);let a=new nn(Ge);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.ls)),!0)},o),Q.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(i=>{const r=this.ws(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){st(this.ys(n.batchId,"removed")===0),this.In.shift();let i=this.ds;return Q.forEach(n.mutations,r=>{const s=new qt(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=i})}te(e){}containsKey(e,n){const i=new qt(n,0),r=this.ds.firstAfterOrEqual(i);return Q.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.In.length,Q.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
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
 */class tk{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new un(fe.comparator),this.size=0}addEntry(e,n,i){const r=n.key,s=this.docs.get(r),o=s?s.size:0,a=this.ps(n);return this.docs=this.docs.insert(r,{document:n.clone(),size:a,readTime:i}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return Q.resolve(i?i.document.clone():cn.newInvalidDocument(n))}getEntries(e,n){let i=_r();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.clone():cn.newInvalidDocument(r))}),Q.resolve(i)}getDocumentsMatchingQuery(e,n,i){let r=_r();const s=new fe(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l,readTime:c}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;c.compareTo(i)<=0||Vl(n,l)&&(r=r.insert(l.key,l.clone()))}return Q.resolve(r)}Ts(e,n){return Q.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new nk(this)}getSize(e){return Q.resolve(this.size)}}class nk extends WA{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.document.isValidDocument()?n.push(this.Se.addEntry(e,r.document,this.getReadTime(i))):this.Se.removeEntry(i)}),Q.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
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
 */class ik{constructor(e){this.persistence=e,this.Es=new Vo(n=>Vh(n),Bh),this.lastRemoteSnapshotVersion=He.min(),this.highestTargetId=0,this.Is=0,this.As=new nd,this.targetCount=0,this.Rs=fs.se()}forEachTarget(e,n){return this.Es.forEach((i,r)=>n(r)),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Is&&(this.Is=n),Q.resolve()}ce(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new fs(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,Q.resolve()}updateTargetData(e,n){return this.ce(n),Q.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Es.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),Q.waitFor(s).next(()=>r)}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,n){const i=this.Es.get(n)||null;return Q.resolve(i)}addMatchingKeys(e,n,i){return this.As.ss(n,i),Q.resolve()}removeMatchingKeys(e,n,i){this.As.os(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),Q.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),Q.resolve()}getMatchingKeysForTargetId(e,n){const i=this.As.hs(n);return Q.resolve(i)}containsKey(e,n){return Q.resolve(this.As.containsKey(n))}}/**
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
 */class rk{constructor(e,n){this.bs={},this.Le=new Dh(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new ik(this),this.Ht=new HA,this.He=function(i,r){return new tk(i,r)}(this.Ht,i=>this.referenceDelegate.Ps(i)),this.N=new VA(n),this.Je=new $A(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new ek(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,i){se("MemoryPersistence","Starting transaction:",e);const r=new sk(this.Le.next());return this.referenceDelegate.vs(),i(r).next(s=>this.referenceDelegate.Vs(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Ss(e,n){return Q.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,n)))}}class sk extends UA{constructor(e){super(),this.currentSequenceNumber=e}}class id{constructor(e){this.persistence=e,this.Ds=new nd,this.Cs=null}static Ns(e){return new id(e)}get xs(){if(this.Cs)return this.Cs;throw _e()}addReference(e,n,i){return this.Ds.addReference(i,n),this.xs.delete(i.toString()),Q.resolve()}removeReference(e,n,i){return this.Ds.removeReference(i,n),this.xs.add(i.toString()),Q.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),Q.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(r=>this.xs.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.xs.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.xs,i=>{const r=fe.fromPath(i);return this.ks(e,r).next(s=>{s||n.removeEntry(r)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(i=>{i?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return Q.or([()=>Q.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class B_{constructor(){this.activeTargetIds=w_()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ok{constructor(){this.yi=new B_,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,i){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new B_,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class ak{Ti(e){}shutdown(){}}/**
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
 */class H_{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){se("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){se("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const lk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class ck{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
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
 */class uk extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,i,r){const s=this.Bi(e,n);se("RestConnection","Sending: ",s,i);const o={};return this.Ui(o,r),this.qi(e,s,o,i).then(a=>(se("RestConnection","Received: ",a),a),a=>{throw Wg("RestConnection",`${e} failed with error: `,a,"url: ",s,"request:",i),a})}Ki(e,n,i,r){return this.Li(e,n,i,r)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+rs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const i in n.authHeaders)n.authHeaders.hasOwnProperty(i)&&(e[i]=n.authHeaders[i])}Bi(e,n){const i=lk[e];return`${this.Fi}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,i,r){return new Promise((s,o)=>{const a=new M1;a.listenOnce(R1.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Nh.NO_ERROR:const c=a.getResponseJson();se("Connection","XHR received:",JSON.stringify(c)),s(c);break;case Nh.TIMEOUT:se("Connection",'RPC "'+e+'" timed out'),o(new ee(F.DEADLINE_EXCEEDED,"Request time out"));break;case Nh.HTTP_ERROR:const u=a.getStatus();if(se("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const p=f.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(p)>=0?p:F.UNKNOWN}(h.status);o(new ee(d,h.message))}else o(new ee(F.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ee(F.UNAVAILABLE,"Connection failed."));break;default:_e()}}finally{se("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(r);a.send(n,"POST",l,i,15)})}ji(e,n){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=A1(),s=k1(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new L1({})),this.Ui(o.initMessageHeaders,n),ja()||Eu()||I0()||Op()||w0()||Rp()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");se("Connection","Creating WebChannel: "+a,o);const l=r.createWebChannel(a,o);let c=!1,u=!1;const h=new ck({vi:f=>{u?se("Connection","Not sending because WebChannel is closed:",f):(c||(se("Connection","Opening WebChannel transport."),l.open(),c=!0),se("Connection","WebChannel sending:",f),l.send(f))},Vi:()=>l.close()}),d=(f,p,g)=>{f.listen(p,m=>{try{g(m)}catch(v){setTimeout(()=>{throw v},0)}})};return d(l,Ml.EventType.OPEN,()=>{u||se("Connection","WebChannel transport opened.")}),d(l,Ml.EventType.CLOSE,()=>{u||(u=!0,se("Connection","WebChannel transport closed"),h.$i())}),d(l,Ml.EventType.ERROR,f=>{u||(u=!0,Wg("Connection","WebChannel transport errored:",f),h.$i(new ee(F.UNAVAILABLE,"The operation could not be completed")))}),d(l,Ml.EventType.MESSAGE,f=>{var p;if(!u){const g=f.data[0];st(!!g);const m=g,v=m.error||((p=m[0])===null||p===void 0?void 0:p.error);if(v){se("Connection","WebChannel received error:",v);const A=v.status;let T=function(N){const k=Mt[N];if(k!==void 0)return E_(k)}(A),y=v.message;T===void 0&&(T=F.INTERNAL,y="Unknown error status: "+A+" with message "+v.message),u=!0,h.$i(new ee(T,y)),l.close()}else se("Connection","WebChannel received:",g),h.Oi(g)}}),d(s,O1.STAT_EVENT,f=>{f.stat===Bg.PROXY?se("Connection","Detected buffering proxy"):f.stat===Bg.NOPROXY&&se("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function rd(){return typeof document!="undefined"?document:null}/**
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
 */function Yl(t){return new IA(t,!0)}class q_{constructor(e,n,i=1e3,r=1.5,s=6e4){this.Oe=e,this.timerId=n,this.Qi=i,this.Wi=r,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),i=Math.max(0,Date.now()-this.Ji),r=Math.max(0,n-i);r>0&&se("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
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
 */class W_{constructor(e,n,i,r,s,o,a){this.Oe=e,this.er=i,this.nr=r,this.sr=s,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new q_(e,n)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Ni(n.toString()),Ni("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),n=this.ir;this.credentialsProvider.getToken().then(i=>{this.ir===n&&this.Er(i)},i=>{e(()=>{const r=new ee(F.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Ir(r)})})}Er(e){const n=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(i=>{n(()=>this.Ir(i))}),this.stream.onMessage(i=>{n(()=>this.onMessage(i))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return se("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return n=>{this.Oe.enqueueAndForget(()=>this.ir===e?n():(se("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hk extends W_{constructor(e,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s),this.N=r}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const n=CA(this.N,e),i=function(r){if(!("targetChange"in r))return He.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?He.min():s.readTime?ci(s.readTime):He.min()}(e);return this.listener.Rr(n,i)}br(e){const n={};n.database=Zh(this.N),n.addTarget=function(r,s){let o;const a=s.target;return o=Hh(a)?{documents:kA(r,a)}:{query:RA(r,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=R_(r,s.resumeToken):s.snapshotVersion.compareTo(He.min())>0&&(o.readTime=Ql(r,s.snapshotVersion.toTimestamp())),o}(this.N,e);const i=LA(this.N,e);i&&(n.labels=i),this.mr(n)}Pr(e){const n={};n.database=Zh(this.N),n.removeTarget=e,this.mr(n)}}class dk extends W_{constructor(e,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s),this.N=r,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(st(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const n=AA(e.writeResults,e.commitTime),i=ci(e.commitTime);return this.listener.Dr(i,n)}return st(!e.writeResults||e.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=Zh(this.N),this.mr(e)}Sr(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>SA(this.N,i))};this.mr(n)}}/**
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
 */class fk extends class{}{constructor(e,n,i){super(),this.credentials=e,this.sr=n,this.N=i,this.kr=!1}$r(){if(this.kr)throw new ee(F.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,i){return this.$r(),this.credentials.getToken().then(r=>this.sr.Li(e,n,i,r)).catch(r=>{throw r.name==="FirebaseError"?(r.code===F.UNAUTHENTICATED&&this.credentials.invalidateToken(),r):new ee(F.UNKNOWN,r.toString())})}Ki(e,n,i){return this.$r(),this.credentials.getToken().then(r=>this.sr.Ki(e,n,i,r)).catch(r=>{throw r.name==="FirebaseError"?(r.code===F.UNAUTHENTICATED&&this.credentials.invalidateToken(),r):new ee(F.UNKNOWN,r.toString())})}terminate(){this.kr=!0}}class pk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(Ni(n),this.Mr=!1):se("OnlineStateTracker",n)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
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
 */class mk{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=s,this.zr.Ti(o=>{i.enqueueAndForget(async()=>{yr(this)&&(se("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ve(a);l.Wr.add(4),await Bo(l),l.Hr.set("Unknown"),l.Wr.delete(4),await Jl(l)}(this))})}),this.Hr=new pk(i,r)}}async function Jl(t){if(yr(t))for(const e of t.Gr)await e(!0)}async function Bo(t){for(const e of t.Gr)await e(!1)}function G_(t,e){const n=ve(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),ad(n)?od(n):ps(n).hr()&&sd(n,e))}function z_(t,e){const n=ve(t),i=ps(n);n.Qr.delete(e),i.hr()&&K_(n,e),n.Qr.size===0&&(i.hr()?i.wr():yr(n)&&n.Hr.set("Unknown"))}function sd(t,e){t.Jr.Y(e.targetId),ps(t).br(e)}function K_(t,e){t.Jr.Y(e),ps(t).Pr(e)}function od(t){t.Jr=new yA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),ps(t).start(),t.Hr.Lr()}function ad(t){return yr(t)&&!ps(t).ur()&&t.Qr.size>0}function yr(t){return ve(t).Wr.size===0}function X_(t){t.Jr=void 0}async function gk(t){t.Qr.forEach((e,n)=>{sd(t,e)})}async function _k(t,e){X_(t),ad(t)?(t.Hr.qr(e),od(t)):t.Hr.set("Unknown")}async function vk(t,e,n){if(t.Hr.set("Online"),e instanceof C_&&e.state===2&&e.cause)try{await async function(i,r){const s=r.cause;for(const o of r.targetIds)i.Qr.has(o)&&(await i.remoteSyncer.rejectListen(o,s),i.Qr.delete(o),i.Jr.removeTarget(o))}(t,e)}catch(i){se("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Zl(t,i)}else if(e instanceof Xl?t.Jr.rt(e):e instanceof T_?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(He.min()))try{const i=await j_(t.localStore);n.compareTo(i)>=0&&await function(r,s){const o=r.Jr._t(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.Qr.get(l);c&&r.Qr.set(l,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=r.Qr.get(a);if(!l)return;r.Qr.set(a,l.withResumeToken(ln.EMPTY_BYTE_STRING,l.snapshotVersion)),K_(r,a);const c=new vr(l.target,a,1,l.sequenceNumber);sd(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){se("RemoteStore","Failed to raise snapshot:",i),await Zl(t,i)}}async function Zl(t,e,n){if(!Uo(e))throw e;t.Wr.add(1),await Bo(t),t.Hr.set("Offline"),n||(n=()=>j_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{se("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await Jl(t)})}function Q_(t,e){return e().catch(n=>Zl(t,n,e))}async function $l(t){const e=ve(t),n=Di(e);let i=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;yk(e);)try{const r=await JA(e.localStore,i);if(r===null){e.jr.length===0&&n.wr();break}i=r.batchId,bk(e,r)}catch(r){await Zl(e,r)}Y_(e)&&J_(e)}function yk(t){return yr(t)&&t.jr.length<10}function bk(t,e){t.jr.push(e);const n=Di(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function Y_(t){return yr(t)&&!Di(t).ur()&&t.jr.length>0}function J_(t){Di(t).start()}async function Ek(t){Di(t).Nr()}async function Ik(t){const e=Di(t);for(const n of t.jr)e.Sr(n.mutations)}async function wk(t,e,n){const i=t.jr.shift(),r=$h.from(i,e,n);await Q_(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await $l(t)}async function Tk(t,e){e&&Di(t).Vr&&await async function(n,i){if(r=i.code,dA(r)&&r!==F.ABORTED){const s=n.jr.shift();Di(n).dr(),await Q_(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await $l(n)}var r}(t,e),Y_(t)&&J_(t)}async function Ck(t,e){const n=ve(t);e?(n.Wr.delete(2),await Jl(n)):e||(n.Wr.add(2),await Bo(n),n.Hr.set("Unknown"))}function ps(t){return t.Yr||(t.Yr=function(e,n,i){const r=ve(e);return r.$r(),new hk(n,r.sr,r.credentials,r.N,i)}(t.datastore,t.asyncQueue,{Si:gk.bind(null,t),Ci:_k.bind(null,t),Rr:vk.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),ad(t)?od(t):t.Hr.set("Unknown")):(await t.Yr.stop(),X_(t))})),t.Yr}function Di(t){return t.Xr||(t.Xr=function(e,n,i){const r=ve(e);return r.$r(),new dk(n,r.sr,r.credentials,r.N,i)}(t.datastore,t.asyncQueue,{Si:Ek.bind(null,t),Ci:Tk.bind(null,t),Cr:Ik.bind(null,t),Dr:wk.bind(null,t)}),t.Gr.push(async e=>{e?(t.Xr.dr(),await $l(t)):(await t.Xr.stop(),t.jr.length>0&&(se("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))})),t.Xr}/**
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
 */class ld{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new ld(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cd(t,e){if(Ni("AsyncQueue",`${e}: ${t}`),Uo(t))return new ee(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ms{constructor(e){this.comparator=e?(n,i)=>e(n,i)||fe.comparator(n.key,i.key):(n,i)=>fe.comparator(n.key,i.key),this.keyedMap=Kh(),this.sortedSet=new un(this.comparator)}static emptySet(e){return new ms(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new ms;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
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
 */class Z_{constructor(){this.Zr=new un(fe.comparator)}track(e){const n=e.doc.key,i=this.Zr.get(n);i?e.type!==0&&i.type===3?this.Zr=this.Zr.insert(n,e):e.type===3&&i.type!==1?this.Zr=this.Zr.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Zr=this.Zr.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Zr=this.Zr.remove(n):e.type===1&&i.type===2?this.Zr=this.Zr.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):_e():this.Zr=this.Zr.insert(n,e)}eo(){const e=[];return this.Zr.inorderTraversal((n,i)=>{e.push(i)}),e}}class gs{constructor(e,n,i,r,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,i,r){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new gs(e,n,ms.emptySet(n),s,i,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class Sk{constructor(){this.no=void 0,this.listeners=[]}}class Ak{constructor(){this.queries=new Vo(e=>o_(e),jl),this.onlineState="Unknown",this.so=new Set}}async function ud(t,e){const n=ve(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new Sk),r)try{s.no=await n.onListen(i)}catch(o){const a=cd(o,`Initialization of query '${Wh(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.listeners.push(e),e.io(n.onlineState),s.no&&e.ro(s.no)&&dd(n)}async function hd(t,e){const n=ve(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function kk(t,e){const n=ve(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.ro(r)&&(i=!0);o.no=r}}i&&dd(n)}function Rk(t,e,n){const i=ve(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function dd(t){t.so.forEach(e=>{e.next()})}class fd{constructor(e,n,i){this.query=e,this.oo=n,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=i||{}}ro(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new gs(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.uo(e)&&(this.oo.next(e),n=!0):this.ho(e,this.onlineState)&&(this.lo(e),n=!0),this.ao=e,n}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let n=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),n=!0),n}ho(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.fo||!i)&&(!e.docs.isEmpty()||n==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const n=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}lo(e){e=gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
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
 */class $_{constructor(e){this.key=e}}class ev{constructor(e){this.key=e}}class Ok{constructor(e,n){this.query=e,this.po=n,this.To=null,this.current=!1,this.Eo=pt(),this.mutatedKeys=pt(),this.Io=a_(e),this.Ao=new ms(this.Io)}get Ro(){return this.po}bo(e,n){const i=n?n.Po:new Z_,r=n?n.Ao:this.Ao;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=xl(this.query)&&r.size===this.query.limit?r.last():null,c=Ul(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),f=Vl(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),g=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let m=!1;d&&f?d.data.isEqual(f.data)?p!==g&&(i.track({type:3,doc:f}),m=!0):this.vo(d,f)||(i.track({type:2,doc:f}),m=!0,(l&&this.Io(f,l)>0||c&&this.Io(f,c)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),m=!0):d&&!f&&(i.track({type:1,doc:d}),m=!0,(l||c)&&(a=!0)),m&&(f?(o=o.add(f),s=g?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),xl(this.query)||Ul(this.query))for(;o.size>this.query.limit;){const u=xl(this.query)?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),i.track({type:1,doc:u})}return{Ao:o,Po:i,Ln:a,mutatedKeys:s}}vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const r=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const s=e.Po.eo();s.sort((c,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e()}};return f(h)-f(d)}(c.type,u.type)||this.Io(c.doc,u.doc)),this.Vo(i);const o=n?this.So():[],a=this.Eo.size===0&&this.current?1:0,l=a!==this.To;return this.To=a,s.length!==0||l?{snapshot:new gs(this.query,e.Ao,r,s,e.mutatedKeys,a===0,l,!1),Do:o}:{Do:o}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new Z_,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(n=>this.po=this.po.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.po=this.po.delete(n)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=pt(),this.Ao.forEach(i=>{this.Co(i.key)&&(this.Eo=this.Eo.add(i.key))});const n=[];return e.forEach(i=>{this.Eo.has(i)||n.push(new ev(i))}),this.Eo.forEach(i=>{e.has(i)||n.push(new $_(i))}),n}No(e){this.po=e.Gn,this.Eo=pt();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return gs.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class Lk{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class Mk{constructor(e){this.key=e,this.ko=!1}}class Nk{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new Vo(a=>o_(a),jl),this.Fo=new Map,this.Mo=new Set,this.Lo=new un(fe.comparator),this.Bo=new Map,this.Uo=new nd,this.qo={},this.Ko=new Map,this.jo=fs.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function Pk(t,e){const n=Wk(t);let i,r;const s=n.Oo.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.xo();else{const o=await ZA(n.localStore,mr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await Dk(n,e,i,a==="current"),n.isPrimaryClient&&G_(n.remoteStore,o)}return r}async function Dk(t,e,n,i){t.Wo=(u,h,d)=>async function(f,p,g,m){let v=p.view.bo(g);v.Ln&&(v=await V_(f.localStore,p.query,!1).then(({documents:y})=>p.view.bo(y,v)));const A=m&&m.targetChanges.get(p.targetId),T=p.view.applyChanges(v,f.isPrimaryClient,A);return ov(f,p.targetId,T.Do),T.snapshot}(t,u,h,d);const r=await V_(t.localStore,e,!0),s=new Ok(e,r.Gn),o=s.bo(r.documents),a=xo.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);ov(t,n,l.Do);const c=new Lk(e,n,s);return t.Oo.set(e,c),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),l.snapshot}async function Fk(t,e){const n=ve(t),i=n.Oo.get(e),r=n.Fo.get(i.targetId);if(r.length>1)return n.Fo.set(i.targetId,r.filter(s=>!jl(s,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await td(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),z_(n.remoteStore,i.targetId),pd(n,i.targetId)}).catch(jo)):(pd(n,i.targetId),await td(n.localStore,i.targetId,!0))}async function xk(t,e,n){const i=Gk(t);try{const r=await function(s,o){const a=ve(s),l=Dn.now(),c=o.reduce((h,d)=>h.add(d.key),pt());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,c).next(d=>{u=d;const f=[];for(const p of o){const g=cA(p,u.get(p.key));g!=null&&f.push(new gr(p.key,g,$g(g.value.mapValue),Gn.exists(!0)))}return a.In.addMutationBatch(h,l,f,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(s,o,a){let l=s.qo[s.currentUser.toKey()];l||(l=new un(Ge)),l=l.insert(o,a),s.qo[s.currentUser.toKey()]=l}(i,r.batchId,n),await Ho(i,r.changes),await $l(i.remoteStore)}catch(r){const s=cd(r,"Failed to persist write");n.reject(s)}}async function tv(t,e){const n=ve(t);try{const i=await QA(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.Bo.get(s);o&&(st(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ko=!0:r.modifiedDocuments.size>0?st(o.ko):r.removedDocuments.size>0&&(st(o.ko),o.ko=!1))}),await Ho(n,i,e)}catch(i){await jo(i)}}function nv(t,e,n){const i=ve(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.Oo.forEach((s,o)=>{const a=o.view.io(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=ve(s);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.io(o)&&(l=!0)}),l&&dd(a)}(i.eventManager,e),r.length&&i.$o.Rr(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Uk(t,e,n){const i=ve(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Bo.get(e),s=r&&r.key;if(s){let o=new un(fe.comparator);o=o.insert(s,cn.newNoDocument(s,He.min()));const a=pt().add(s),l=new Kl(He.min(),new Map,new nn(Ge),o,a);await tv(i,l),i.Lo=i.Lo.remove(s),i.Bo.delete(e),md(i)}else await td(i.localStore,e,!1).then(()=>pd(i,e,n)).catch(jo)}async function jk(t,e){const n=ve(t),i=e.batch.batchId;try{const r=await XA(n.localStore,e);rv(n,i,null),iv(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Ho(n,r)}catch(r){await jo(r)}}async function Vk(t,e,n){const i=ve(t);try{const r=await function(s,o){const a=ve(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.In.lookupMutationBatch(l,o).next(u=>(st(u!==null),c=u.keys(),a.In.removeMutationBatch(l,u))).next(()=>a.In.performConsistencyCheck(l)).next(()=>a.Qn.Pn(l,c))})}(i.localStore,e);rv(i,e,n),iv(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Ho(i,r)}catch(r){await jo(r)}}function iv(t,e){(t.Ko.get(e)||[]).forEach(n=>{n.resolve()}),t.Ko.delete(e)}function rv(t,e,n){const i=ve(t);let r=i.qo[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.qo[i.currentUser.toKey()]=r}}function pd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Fo.get(e))t.Oo.delete(i),n&&t.$o.Go(i,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(i=>{t.Uo.containsKey(i)||sv(t,i)})}function sv(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);n!==null&&(z_(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),md(t))}function ov(t,e,n){for(const i of n)i instanceof $_?(t.Uo.addReference(i.key,e),Bk(t,i)):i instanceof ev?(se("SyncEngine","Document no longer in limbo: "+i.key),t.Uo.removeReference(i.key,e),t.Uo.containsKey(i.key)||sv(t,i.key)):_e()}function Bk(t,e){const n=e.key,i=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(i)||(se("SyncEngine","New document in limbo: "+n),t.Mo.add(i),md(t))}function md(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new fe(It.fromString(e)),i=t.jo.next();t.Bo.set(i,new Mk(n)),t.Lo=t.Lo.insert(n,i),G_(t.remoteStore,new vr(mr(Fl(n.path)),i,2,Dh.T))}}async function Ho(t,e,n){const i=ve(t),r=[],s=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach((a,l)=>{o.push(i.Wo(l,e,n).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),r.push(c);const u=ed.kn(l.targetId,c);s.push(u)}}))}),await Promise.all(o),i.$o.Rr(r),await async function(a,l){const c=ve(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>Q.forEach(l,h=>Q.forEach(h.Nn,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>Q.forEach(h.xn,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Uo(u))throw u;se("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Un.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);c.Un=c.Un.insert(h,p)}}}(i.localStore,s))}async function Hk(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){se("SyncEngine","User change. New user:",e.toKey());const i=await U_(n.localStore,e);n.currentUser=e,function(r,s){r.Ko.forEach(o=>{o.forEach(a=>{a.reject(new ee(F.CANCELLED,s))})}),r.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Ho(n,i.Wn)}}function qk(t,e){const n=ve(t),i=n.Bo.get(e);if(i&&i.ko)return pt().add(i.key);{let r=pt();const s=n.Fo.get(e);if(!s)return r;for(const o of s){const a=n.Oo.get(o);r=r.unionWith(a.view.Ro)}return r}}function Wk(t){const e=ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Uk.bind(null,e),e.$o.Rr=kk.bind(null,e.eventManager),e.$o.Go=Rk.bind(null,e.eventManager),e}function Gk(t){const e=ve(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Vk.bind(null,e),e}class zk{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=Yl(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return KA(this.persistence,new GA,e.initialUser,this.N)}Jo(e){return new rk(id.Ns,this.N)}Ho(e){return new ok}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Kk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>nv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hk.bind(null,this.syncEngine),await Ck(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ak}createDatastore(e){const n=Yl(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new uk(r));var r;return function(s,o,a){return new fk(s,o,a)}(e.credentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>nv(this.syncEngine,a,0),o=H_.bt()?new H_:new ak,new mk(n,i,r,s,o);var n,i,r,s,o}createSyncEngine(e,n){return function(i,r,s,o,a,l,c){const u=new Nk(i,r,s,o,a,l);return c&&(u.Qo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ve(e);se("RemoteStore","RemoteStore shutting down."),n.Wr.add(5),await Bo(n),n.zr.shutdown(),n.Hr.set("Unknown")}(this.remoteStore)}}/**
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
 */class gd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Xk{constructor(e,n,i){this.credentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Tn.UNAUTHENTICATED,this.clientId=Gg.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async r=>{se("FirestoreClient","Received user=",r.uid),await this.credentialListener(r),this.user=r})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ee(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new li;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const i=cd(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Qk(t,e){t.asyncQueue.verifyOperationInProgress(),se("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await U_(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Yk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Jk(t);se("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>async function(s,o){const a=ve(s);a.asyncQueue.verifyOperationInProgress(),se("RemoteStore","RemoteStore received new credentials");const l=yr(a);a.Wr.add(3),await Bo(a),l&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await Jl(a)}(e.remoteStore,r)),t.onlineComponents=e}async function Jk(t){return t.offlineComponents||(se("FirestoreClient","Using default OfflineComponentProvider"),await Qk(t,new zk)),t.offlineComponents}async function av(t){return t.onlineComponents||(se("FirestoreClient","Using default OnlineComponentProvider"),await Yk(t,new Kk)),t.onlineComponents}function Zk(t){return av(t).then(e=>e.syncEngine)}async function ec(t){const e=await av(t),n=e.eventManager;return n.onListen=Pk.bind(null,e.syncEngine),n.onUnlisten=Fk.bind(null,e.syncEngine),n}function $k(t,e,n={}){const i=new li;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,l){const c=new gd({next:h=>{s.enqueueAndForget(()=>hd(r,u));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new ee(F.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new ee(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new fd(Fl(o.path),c,{includeMetadataChanges:!0,fo:!0});return ud(r,u)}(await ec(t),t.asyncQueue,e,n,i)),i.promise}function eR(t,e,n={}){const i=new li;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,l){const c=new gd({next:h=>{s.enqueueAndForget(()=>hd(r,u)),h.fromCache&&a.source==="server"?l.reject(new ee(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new fd(o,c,{includeMetadataChanges:!0,fo:!0});return ud(r,u)}(await ec(t),t.asyncQueue,e,n,i)),i.promise}class tR{constructor(e,n,i,r,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class qo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const lv=new Map;/**
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
 */function cv(t,e,n){if(!n)throw new ee(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nR(t,e,n,i){if(e===!0&&i===!0)throw new ee(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function uv(t){if(!fe.isDocumentKey(t))throw new ee(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hv(t){if(fe.isDocumentKey(t))throw new ee(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _d(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e()}function xn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_d(t);throw new ee(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class dv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ee(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,nR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class vd{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dv({}),this._settingsFrozen=!1,e instanceof qo?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new ee(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qo(i.options.projectId)}(e))}get app(){if(!this._app)throw new ee(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ee(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dv(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new P1;switch(n.type){case"gapi":const i=n.client;return st(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new x1(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new ee(F.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=lv.get(e);n&&(se("ComponentProvider","Removing Datastore"),lv.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class vn{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vn(this.firestore,e,this._key)}}class _s{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new _s(this.firestore,e,this._query)}}class Fi extends _s{constructor(e,n,i){super(e,n,Fl(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vn(this.firestore,null,new fe(e))}withConverter(e){return new Fi(this.firestore,e,this._path)}}function Pj(t,e,...n){if(t=rt(t),cv("collection","path",e),t instanceof vd){const i=It.fromString(e,...n);return hv(i),new Fi(t,null,i)}{if(!(t instanceof vn||t instanceof Fi))throw new ee(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(It.fromString(e,...n));return hv(i),new Fi(t.firestore,null,i)}}function Dj(t,e,...n){if(t=rt(t),arguments.length===1&&(e=Gg.I()),cv("doc","path",e),t instanceof vd){const i=It.fromString(e,...n);return uv(i),new vn(t,null,new fe(i))}{if(!(t instanceof vn||t instanceof Fi))throw new ee(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(It.fromString(e,...n));return uv(i),new vn(t.firestore,t instanceof Fi?t.converter:null,new fe(i))}}/**
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
 */class iR{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new q_(this,"async_queue_retry"),this.Rc=()=>{const n=rd();n&&se("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ar.tr()};const e=rd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const n=rd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const n=new li;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!Uo(e))throw e;se("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const n=this._c.then(()=>(this.Ec=!0,e().catch(i=>{this.Tc=i,this.Ec=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Ni("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Ec=!1,i))));return this._c=n,n}enqueueAfterDelay(e,n,i){this.bc(),this.Ac.indexOf(e)>-1&&(n=0);const r=ld.createAndSchedule(this,e,n,i,s=>this.Vc(s));return this.yc.push(r),r}bc(){this.Tc&&_e()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const n of this.yc)if(n.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.yc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const n=this.yc.indexOf(e);this.yc.splice(n,1)}}function fv(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const r of n)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class ui extends vd{constructor(e,n){super(e,n),this.type="firestore",this._queue=new iR,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||pv(this),this._firestoreClient.terminate()}}function Fj(t=Ka()){return eo(t,"firestore").getImmediate()}function Wo(t){return t._firestoreClient||pv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function pv(t){var e;const n=t._freezeSettings(),i=function(r,s,o,a){return new tR(r,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Xk(t._credentials,t._queue,i)}/**
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
 */class Go{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Cn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class vs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vs(ln.fromBase64String(e))}catch(n){throw new ee(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vs(ln.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class zo{constructor(e){this._methodName=e}}/**
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
 */class yd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ge(this._lat,e._lat)||Ge(this._long,e._long)}}/**
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
 */const rR=/^__.*__$/;class sR{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Gl(e,this.data,n,this.fieldTransforms)}}class mv{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class tc{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.N=i,this.ignoreUndefinedProperties=r,s===void 0&&this.xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new tc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.$c({path:i,Fc:!1});return r.Mc(e),r}Lc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.$c({path:i,Fc:!1});return r.xc(),r}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return nc(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(e.length===0)throw this.Uc("Document fields must not be empty");if(gv(this.kc)&&rR.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class oR{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=i||Yl(e)}jc(e,n,i,r=!1){return new tc({kc:e,methodName:n,Kc:i,path:Cn.emptyPath(),Fc:!1,qc:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function bd(t){const e=t._freezeSettings(),n=Yl(t._databaseId);return new oR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _v(t,e,n,i,r,s={}){const o=t.jc(s.merge||s.mergeFields?2:0,e,n,r);Id("Data must be an object, but it was:",o,i);const a=bv(i,o);let l,c;if(s.merge)l=new Ro(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=wd(e,h,n);if(!o.contains(d))throw new ee(F.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Iv(u,d)||u.push(d)}l=new Ro(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new sR(new Fn(a),l,c)}class Ko extends zo{_toFieldTransform(e){if(e.kc!==2)throw e.kc===1?e.Uc(`${this._methodName}() can only appear at the top level of your update data`):e.Uc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ko}}function aR(t,e,n){return new tc({kc:3,Kc:e.settings.Kc,methodName:t._methodName,Fc:n},e.databaseId,e.N,e.ignoreUndefinedProperties)}class Ed extends zo{_toFieldTransform(e){return new m_(e.path,new Do)}isEqual(e){return e instanceof Ed}}class lR extends zo{constructor(e,n){super(e),this.Qc=n}_toFieldTransform(e){const n=aR(this,e,!0),i=this.Qc.map(s=>Xo(s,n)),r=new us(i);return new m_(e.path,r)}isEqual(e){return this===e}}function vv(t,e,n,i){const r=t.jc(1,e,n);Id("Data must be an object, but it was:",r,i);const s=[],o=Fn.empty();fr(i,(l,c)=>{const u=Td(e,l,n);c=rt(c);const h=r.Lc(u);if(c instanceof Ko)s.push(u);else{const d=Xo(c,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new Ro(s);return new mv(o,a,r.fieldTransforms)}function yv(t,e,n,i,r,s){const o=t.jc(1,e,n),a=[wd(e,i,n)],l=[r];if(s.length%2!=0)throw new ee(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(wd(e,s[d])),l.push(s[d+1]);const c=[],u=Fn.empty();for(let d=a.length-1;d>=0;--d)if(!Iv(c,a[d])){const f=a[d];let p=l[d];p=rt(p);const g=o.Lc(f);if(p instanceof Ko)c.push(f);else{const m=Xo(p,g);m!=null&&(c.push(f),u.set(f,m))}}const h=new Ro(c);return new mv(u,h,o.fieldTransforms)}function Xo(t,e){if(Ev(t=rt(t)))return Id("Unsupported field value:",e,t),bv(t,e);if(t instanceof zo)return function(n,i){if(!gv(i.kc))throw i.Uc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Uc(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.kc!==4)throw e.Uc("Nested arrays are not supported");return function(n,i){const r=[];let s=0;for(const o of n){let a=Xo(o,i.Bc(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return iA(i.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Dn.fromDate(n);return{timestampValue:Ql(i.N,r)}}if(n instanceof Dn){const r=new Dn(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ql(i.N,r)}}if(n instanceof yd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof vs)return{bytesValue:R_(i.N,n._byteString)};if(n instanceof vn){const r=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(r))throw i.Uc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Xh(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Uc(`Unsupported field value: ${_d(n)}`)}(t,e)}function bv(t,e){const n={};return Kg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fr(t,(i,r)=>{const s=Xo(r,e.Oc(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function Ev(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Dn||t instanceof yd||t instanceof vs||t instanceof vn||t instanceof zo)}function Id(t,e,n){if(!Ev(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=_d(n);throw i==="an object"?e.Uc(t+" a custom object"):e.Uc(t+" "+i)}}function wd(t,e,n){if((e=rt(e))instanceof Go)return e._internalPath;if(typeof e=="string")return Td(t,e);throw nc("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const cR=new RegExp("[~\\*/\\[\\]]");function Td(t,e,n){if(e.search(cR)>=0)throw nc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Go(...e.split("."))._internalPath}catch{throw nc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nc(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new ee(F.INVALID_ARGUMENT,a+t+l)}function Iv(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class wv{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new vn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Cd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uR extends wv{data(){return super.data()}}function Cd(t,e){return typeof e=="string"?Td(t,e):e instanceof Go?e._internalPath:e._delegate._internalPath}/**
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
 */class Qo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tv extends wv{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ic(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Cd("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class ic extends Tv{data(e={}){return super.data(e)}}class Cv{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Qo(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new ic(this._firestore,this._userDataWriter,i.key,i,new Qo(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(o=>({type:"added",doc:new ic(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Qo(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:s++}))}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new ic(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Qo(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:hR(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function hR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e()}}/**
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
 */function Sv(t){if(Ul(t)&&t.explicitOrderBy.length===0)throw new ee(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dR{}function xj(t,...e){for(const n of e)t=n._apply(t);return t}class fR extends dR{constructor(e,n){super(),this.Gc=e,this.Jc=n,this.type="orderBy"}_apply(e){const n=function(i,r,s){if(i.startAt!==null)throw new ee(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new ee(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new cs(r,s);return function(a,l){if(r_(a)===null){const c=s_(a);c!==null&&pR(a,c,l.field)}}(i,o),o}(e._query,this.Gc,this.Jc);return new _s(e.firestore,e.converter,function(i,r){const s=i.explicitOrderBy.concat([r]);return new No(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Uj(t,e="asc"){const n=e,i=Cd("orderBy",t);return new fR(i,n)}function pR(t,e,n){if(!n.isEqual(e))throw new ee(F.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class mR{convertValue(e,n="none"){switch(pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw _e()}}convertObject(e,n){const i={};return fr(e.fields,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(e){return new yd(Lt(e.latitude),Lt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Qg(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Oo(e));default:return null}}convertTimestamp(e){const n=Pi(e);return new Dn(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=It.fromString(e);st(F_(i));const r=new qo(i.get(1),i.get(3)),s=new fe(i.popFirst(5));return r.isEqual(n)||Ni(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Av(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
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
 */class gR{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=bd(e)}set(e,n,i){this._verifyNotCommitted();const r=Sd(e,this._firestore),s=Av(r.converter,n,i),o=_v(this._dataReader,"WriteBatch.set",r._key,s,r.converter!==null,i);return this._mutations.push(o.toMutation(r._key,Gn.none())),this}update(e,n,i,...r){this._verifyNotCommitted();const s=Sd(e,this._firestore);let o;return o=typeof(n=rt(n))=="string"||n instanceof Go?yv(this._dataReader,"WriteBatch.update",s._key,n,i,r):vv(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Gn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Sd(e,this._firestore);return this._mutations=this._mutations.concat(new zh(n._key,Gn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ee(F.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Sd(t,e){if((t=rt(t)).firestore!==e)throw new ee(F.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function jj(t){t=xn(t,vn);const e=xn(t.firestore,ui);return $k(Wo(e),t._key).then(n=>kv(e,t,n))}class Ad extends mR{constructor(e){super(),this.firestore=e}convertBytes(e){return new vs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vn(this.firestore,null,n)}}function Vj(t){t=xn(t,_s);const e=xn(t.firestore,ui),n=Wo(e),i=new Ad(e);return Sv(t._query),eR(n,t._query).then(r=>new Cv(e,i,t,r))}function Bj(t,e,n){t=xn(t,vn);const i=xn(t.firestore,ui),r=Av(t.converter,e,n);return rc(i,[_v(bd(i),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Gn.none())])}function Hj(t,e,n,...i){t=xn(t,vn);const r=xn(t.firestore,ui),s=bd(r);let o;return o=typeof(e=rt(e))=="string"||e instanceof Go?yv(s,"updateDoc",t._key,e,n,i):vv(s,"updateDoc",t._key,e),rc(r,[o.toMutation(t._key,Gn.exists(!0))])}function qj(t){return rc(xn(t.firestore,ui),[new zh(t._key,Gn.none())])}function Wj(t,...e){var n,i,r;t=rt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||fv(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(fv(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let l,c,u;if(t instanceof vn)c=xn(t.firestore,ui),u=Fl(t._key.path),l={next:h=>{e[o]&&e[o](kv(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=xn(t,_s);c=xn(h.firestore,ui),u=h._query;const d=new Ad(c);l={next:f=>{e[o]&&e[o](new Cv(c,d,h,f))},error:e[o+1],complete:e[o+2]},Sv(t._query)}return function(h,d,f,p){const g=new gd(p),m=new fd(d,g,f);return h.asyncQueue.enqueueAndForget(async()=>ud(await ec(h),m)),()=>{g.ec(),h.asyncQueue.enqueueAndForget(async()=>hd(await ec(h),m))}}(Wo(c),u,a,l)}function rc(t,e){return function(n,i){const r=new li;return n.asyncQueue.enqueueAndForget(async()=>xk(await Zk(n),i,r)),r.promise}(Wo(t),e)}function kv(t,e,n){const i=n.docs.get(e._key),r=new Ad(t);return new Tv(t,r,e._key,i,new Qo(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function Gj(){return new Ko("deleteField")}function zj(){return new Ed("serverTimestamp")}function Kj(...t){return new lR("arrayUnion",t)}/**
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
 */function Xj(t){return Wo(t=xn(t,ui)),new gR(t,e=>rc(t,e))}(function(t,e=!0){(function(n){rs=n})(ir),nr(new Ti("firestore",(n,{options:i})=>{const r=n.getProvider("app").getImmediate(),s=new ui(r,new D1(n.getProvider("auth-internal")));return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s},"PUBLIC")),Bn(Hg,"3.3.1",t),Bn(Hg,"3.3.1","esm2017")})();function ye(t){return Object.entries(t).filter(([e,n])=>e!==""&&n).map(([e])=>e).join(" ")}function et(t,e,n,i={bubbles:!0},r=!1){if(typeof Event!="undefined"&&t){const s=new CustomEvent(e,Object.assign(Object.assign({},i),{detail:n}));if(t==null||t.dispatchEvent(s),r&&e.startsWith("SMUI")){const o=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},i),{detail:n}));t==null||t.dispatchEvent(o),o.defaultPrevented&&s.preventDefault()}return s}}function ys(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let r=0;r<n.length;r++){const s=n[r],o=s.indexOf("$");o!==-1&&e.indexOf(s.substring(0,o+1))!==-1||e.indexOf(s)===-1&&(i[s]=t[s])}return i}const Rv=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,_R=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function tt(t){let e,n=[];t.$on=(r,s)=>{let o=r,a=()=>{};return e?a=e(o,s):n.push([o,s]),o.match(Rv)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',o),(...c)=>{a()}};function i(r){Ys(t,r)}return r=>{const s=[],o={};e=(a,l)=>{let c=a,u=l,h=!1;const d=c.match(Rv),f=c.match(_R),p=d||f;if(c.match(/^SMUI:\w+:/)){const v=c.split(":");let A="";for(let T=0;T<v.length;T++)A+=T===v.length-1?":"+v[T]:v[T].split("-").map(y=>y.slice(0,1).toUpperCase()+y.slice(1)).join("");console.warn(`The event ${c.split("$")[0]} has been renamed to ${A.split("$")[0]}.`),c=A}if(p){const v=c.split(d?":":"$");c=v[0];const A=Object.fromEntries(v.slice(1).map(T=>[T,!0]));A.passive&&(h=h||{},h.passive=!0),A.nonpassive&&(h=h||{},h.passive=!1),A.capture&&(h=h||{},h.capture=!0),A.once&&(h=h||{},h.once=!0),A.preventDefault&&(u=u0(u)),A.stopPropagation&&(u=h0(u))}const g=$e(r,c,u,h),m=()=>{g();const v=s.indexOf(m);v>-1&&s.splice(v,1)};return s.push(m),c in o||(o[c]=$e(r,c,i)),m};for(let a=0;a<n.length;a++)e(n[a][0],n[a][1]);return{destroy:()=>{for(let a=0;a<s.length;a++)s[a]();for(let a of Object.entries(o))a[1]()}}}}function hn(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let r=0;r<n.length;r++){const s=n[r];s.substring(0,e.length)===e&&(i[s.substring(e.length)]=t[s])}return i}function Et(t,e){let n=[];if(e)for(let i=0;i<e.length;i++){const r=e[i],s=Array.isArray(r)?r[0]:r;Array.isArray(r)&&r.length>1?n.push(s(t,r[1])):n.push(s(t))}return{update(i){if((i&&i.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(i)for(let r=0;r<i.length;r++){const s=n[r];if(s&&s.update){const o=i[r];Array.isArray(o)&&o.length>1?s.update(o[1]):s.update()}}},destroy(){for(let i=0;i<n.length;i++){const r=n[i];r&&r.destroy&&r.destroy()}}}}var sc;function vR(t,e){e===void 0&&(e=!1);var n=t.CSS,i=sc;if(typeof sc=="boolean"&&!e)return sc;var r=n&&typeof n.supports=="function";if(!r)return!1;var s=n.supports("--css-vars","yes"),o=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=s||o,e||(sc=i),i}function yR(t,e,n){if(!t)return{x:0,y:0};var i=e.x,r=e.y,s=i+n.left,o=r+n.top,a,l;if(t.type==="touchstart"){var c=t;a=c.changedTouches[0].pageX-s,l=c.changedTouches[0].pageY-o}else{var u=t;a=u.pageX-s,l=u.pageY-o}return{x:a,y:l}}/**
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
 */var zn=function(){function t(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();/**
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
 */function bR(t){return t===void 0&&(t=window),ER(t)?{passive:!0}:!1}function ER(t){t===void 0&&(t=window);var e=!1;try{var n={get passive(){return e=!0,!1}},i=function(){};t.document.addEventListener("test",i,n),t.document.removeEventListener("test",i,n)}catch{e=!1}return e}var Ov=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",applyPassive:bR});/**
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
 */function IR(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(Lv(n,e))return n;n=n.parentElement}return null}function Lv(t,e){var n=t.matches||t.webkitMatchesSelector||t.msMatchesSelector;return n.call(t,e)}function wR(t){var e=t;if(e.offsetParent!==null)return e.scrollWidth;var n=e.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var i=n.scrollWidth;return document.documentElement.removeChild(n),i}var kd=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",closest:IR,matches:Lv,estimateScrollWidth:wR});/**
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
 */var TR={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},CR={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Mv={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
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
 */var Nv=["touchstart","pointerdown","mousedown","keydown"],Pv=["touchend","pointerup","mouseup","contextmenu"],oc=[],SR=function(t){wn(e,t);function e(n){var i=t.call(this,yt(yt({},e.defaultAdapter),n))||this;return i.activationAnimationHasEnded=!1,i.activationTimer=0,i.fgDeactivationRemovalTimer=0,i.fgScale="0",i.frame={width:0,height:0},i.initialSize=0,i.layoutFrame=0,i.maxRadius=0,i.unboundedCoords={left:0,top:0},i.activationState=i.defaultActivationState(),i.activationTimerCallback=function(){i.activationAnimationHasEnded=!0,i.runDeactivationUXLogicIfReady()},i.activateHandler=function(r){i.activateImpl(r)},i.deactivateHandler=function(){i.deactivateImpl()},i.focusHandler=function(){i.handleFocus()},i.blurHandler=function(){i.handleBlur()},i.resizeHandler=function(){i.layout()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return TR},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return CR},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Mv},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var r=e.cssClasses,s=r.ROOT,o=r.UNBOUNDED;requestAnimationFrame(function(){n.adapter.addClass(s),n.adapter.isUnbounded()&&(n.adapter.addClass(o),n.layoutInternal())})}},e.prototype.destroy=function(){var n=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,r=i.ROOT,s=i.UNBOUNDED;requestAnimationFrame(function(){n.adapter.removeClass(r),n.adapter.removeClass(s),n.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(n){this.activateImpl(n)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var n=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){n.layoutInternal(),n.layoutFrame=0})},e.prototype.setUnbounded=function(n){var i=e.cssClasses.UNBOUNDED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var n=this;requestAnimationFrame(function(){return n.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var n=this;requestAnimationFrame(function(){return n.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(n){var i,r;if(n){try{for(var s=Mn(Nv),o=s.next();!o.done;o=s.next()){var a=o.value;this.adapter.registerInteractionHandler(a,this.activateHandler)}}catch(l){i={error:l}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(n){var i,r;if(n.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var s=Mn(Pv),o=s.next();!o.done;o=s.next()){var a=o.value;this.adapter.registerDocumentInteractionHandler(a,this.deactivateHandler)}}catch(l){i={error:l}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}},e.prototype.deregisterRootHandlers=function(){var n,i;try{for(var r=Mn(Nv),s=r.next();!s.done;s=r.next()){var o=s.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(a){n={error:a}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var n,i;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var r=Mn(Pv),s=r.next();!s.done;s=r.next()){var o=s.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(a){n={error:a}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},e.prototype.removeCssVars=function(){var n=this,i=e.strings,r=Object.keys(i);r.forEach(function(s){s.indexOf("VAR_")===0&&n.adapter.updateCssVariable(i[s],null)})},e.prototype.activateImpl=function(n){var i=this;if(!this.adapter.isSurfaceDisabled()){var r=this.activationState;if(!r.isActivated){var s=this.previousActivationEvent,o=s&&n!==void 0&&s.type!==n.type;if(!o){r.isActivated=!0,r.isProgrammatic=n===void 0,r.activationEvent=n,r.wasActivatedByPointer=r.isProgrammatic?!1:n!==void 0&&(n.type==="mousedown"||n.type==="touchstart"||n.type==="pointerdown");var a=n!==void 0&&oc.length>0&&oc.some(function(l){return i.adapter.containsEventTarget(l)});if(a){this.resetActivationState();return}n!==void 0&&(oc.push(n.target),this.registerDeactivationHandlers(n)),r.wasElementMadeActive=this.checkElementMadeActive(n),r.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){oc=[],!r.wasElementMadeActive&&n!==void 0&&(n.key===" "||n.keyCode===32)&&(r.wasElementMadeActive=i.checkElementMadeActive(n),r.wasElementMadeActive&&i.animateActivation()),r.wasElementMadeActive||(i.activationState=i.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(n){return n!==void 0&&n.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var n=this,i=e.strings,r=i.VAR_FG_TRANSLATE_START,s=i.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,l=o.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",h="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),f=d.startPoint,p=d.endPoint;u=f.x+"px, "+f.y+"px",h=p.x+"px, "+p.y+"px"}this.adapter.updateCssVariable(r,u),this.adapter.updateCssVariable(s,h),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){n.activationTimerCallback()},c)},e.prototype.getFgTranslationCoordinates=function(){var n=this.activationState,i=n.activationEvent,r=n.wasActivatedByPointer,s;r?s=yR(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):s={x:this.frame.width/2,y:this.frame.height/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:s,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady=function(){var n=this,i=e.cssClasses.FG_DEACTIVATION,r=this.activationState,s=r.hasDeactivationUXRun,o=r.isActivated,a=s||!o;a&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout(function(){n.adapter.removeClass(i)},Mv.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var n=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(n),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var n=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return n.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var n=this,i=this.activationState;if(!!i.isActivated){var r=yt({},i);i.isProgrammatic?(requestAnimationFrame(function(){n.animateDeactivation(r)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){n.activationState.hasDeactivationUXRun=!0,n.animateDeactivation(r),n.resetActivationState()}))}},e.prototype.animateDeactivation=function(n){var i=n.wasActivatedByPointer,r=n.wasElementMadeActive;(i||r)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var n=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width),r=function(){var o=Math.sqrt(Math.pow(n.frame.width,2)+Math.pow(n.frame.height,2));return o+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?i:r();var s=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&s%2!=0?this.initialSize=s-1:this.initialSize=s,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var n=e.strings,i=n.VAR_FG_SIZE,r=n.VAR_LEFT,s=n.VAR_TOP,o=n.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(r,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(s,this.unboundedCoords.top+"px"))},e}(zn);/**
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
 */var Rd="mdc-dom-focus-sentinel",AR=function(){function t(e,n){n===void 0&&(n={}),this.root=e,this.options=n,this.elFocusedBeforeTrapFocus=null}return t.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},t.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+Rd)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},t.prototype.wrapTabFocus=function(e){var n=this,i=this.createSentinel(),r=this.createSentinel();i.addEventListener("focus",function(){var s=n.getFocusableElements(e);s.length>0&&s[s.length-1].focus()}),r.addEventListener("focus",function(){var s=n.getFocusableElements(e);s.length>0&&s[0].focus()}),e.insertBefore(i,e.children[0]),e.appendChild(r)},t.prototype.focusInitialElement=function(e,n){var i=0;n&&(i=Math.max(e.indexOf(n),0)),e[i].focus()},t.prototype.getFocusableElements=function(e){var n=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return n.filter(function(i){var r=i.getAttribute("aria-disabled")==="true"||i.getAttribute("disabled")!=null||i.getAttribute("hidden")!=null||i.getAttribute("aria-hidden")==="true",s=i.tabIndex>=0&&i.getBoundingClientRect().width>0&&!i.classList.contains(Rd)&&!r,o=!1;if(s){var a=getComputedStyle(i);o=a.display==="none"||a.visibility==="hidden"}return s&&!o})},t.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(Rd),e},t}(),kR=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",FocusTrap:AR});/**
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
 */var Pe={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},yn=new Set;yn.add(Pe.BACKSPACE);yn.add(Pe.ENTER);yn.add(Pe.SPACEBAR);yn.add(Pe.PAGE_UP);yn.add(Pe.PAGE_DOWN);yn.add(Pe.END);yn.add(Pe.HOME);yn.add(Pe.ARROW_LEFT);yn.add(Pe.ARROW_UP);yn.add(Pe.ARROW_RIGHT);yn.add(Pe.ARROW_DOWN);yn.add(Pe.DELETE);yn.add(Pe.ESCAPE);yn.add(Pe.TAB);var An={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},bn=new Map;bn.set(An.BACKSPACE,Pe.BACKSPACE);bn.set(An.ENTER,Pe.ENTER);bn.set(An.SPACEBAR,Pe.SPACEBAR);bn.set(An.PAGE_UP,Pe.PAGE_UP);bn.set(An.PAGE_DOWN,Pe.PAGE_DOWN);bn.set(An.END,Pe.END);bn.set(An.HOME,Pe.HOME);bn.set(An.ARROW_LEFT,Pe.ARROW_LEFT);bn.set(An.ARROW_UP,Pe.ARROW_UP);bn.set(An.ARROW_RIGHT,Pe.ARROW_RIGHT);bn.set(An.ARROW_DOWN,Pe.ARROW_DOWN);bn.set(An.DELETE,Pe.DELETE);bn.set(An.ESCAPE,Pe.ESCAPE);bn.set(An.TAB,Pe.TAB);var xi=new Set;xi.add(Pe.PAGE_UP);xi.add(Pe.PAGE_DOWN);xi.add(Pe.END);xi.add(Pe.HOME);xi.add(Pe.ARROW_LEFT);xi.add(Pe.ARROW_UP);xi.add(Pe.ARROW_RIGHT);xi.add(Pe.ARROW_DOWN);function dn(t){var e=t.key;if(yn.has(e))return e;var n=bn.get(t.keyCode);return n||Pe.UNKNOWN}const{applyPassive:ac}=Ov,{matches:RR}=kd;function br(t,{ripple:e=!0,surface:n=!1,unbounded:i=!1,disabled:r=!1,color:s,active:o,rippleElement:a,eventTarget:l,activeTarget:c,addClass:u=p=>t.classList.add(p),removeClass:h=p=>t.classList.remove(p),addStyle:d=(p,g)=>t.style.setProperty(p,g),initPromise:f=Promise.resolve()}={}){let p,g=Qt("SMUI:addLayoutListener"),m,v=o,A=l,T=c;function y(){n&&(u("mdc-ripple-surface"),s==="primary"?(u("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")):s==="secondary"?(h("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")):(h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary"))),p&&v!==o&&(v=o,o?p.activate():o===!1&&p.deactivate()),e&&!p?(p=new SR({addClass:u,browserSupportsCssVars:()=>vR(window),computeBoundingRect:()=>(a||t).getBoundingClientRect(),containsEventTarget:k=>t.contains(k),deregisterDocumentInteractionHandler:(k,_)=>document.documentElement.removeEventListener(k,_,ac()),deregisterInteractionHandler:(k,_)=>(l||t).removeEventListener(k,_,ac()),deregisterResizeHandler:k=>window.removeEventListener("resize",k),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>o==null?RR(c||t,":active"):o,isSurfaceDisabled:()=>!!r,isUnbounded:()=>!!i,registerDocumentInteractionHandler:(k,_)=>document.documentElement.addEventListener(k,_,ac()),registerInteractionHandler:(k,_)=>(l||t).addEventListener(k,_,ac()),registerResizeHandler:k=>window.addEventListener("resize",k),removeClass:h,updateCssVariable:d}),f.then(()=>{p&&(p.init(),p.setUnbounded(i))})):p&&!e&&f.then(()=>{p&&(p.destroy(),p=void 0)}),p&&(A!==l||T!==c)&&(A=l,T=c,p.destroy(),requestAnimationFrame(()=>{p&&(p.init(),p.setUnbounded(i))})),!e&&i&&u("mdc-ripple-upgraded--unbounded")}y(),g&&(m=g(N));function N(){p&&p.layout()}return{update(k){({ripple:e,surface:n,unbounded:i,disabled:r,color:s,active:o,rippleElement:a,eventTarget:l,activeTarget:c,addClass:u,removeClass:h,addStyle:d,initPromise:f}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:_=>t.classList.add(_),removeClass:_=>t.classList.remove(_),addStyle:(_,w)=>t.style.setProperty(_,w),initPromise:Promise.resolve()},k)),y()},destroy(){p&&(p.destroy(),p=void 0,h("mdc-ripple-surface"),h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")),m&&m()}}}function OR(t){let e,n,i,r,s;const o=t[7].default,a=Ce(o,t,t[6],null);let l=[{href:t[1]},t[4]],c={};for(let u=0;u<l.length;u+=1)c=j(c,l[u]);return{c(){e=we("a"),a&&a.c(),this.h()},l(u){e=Re(u,"A",{href:!0});var h=ge(e);a&&a.l(h),h.forEach(U),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[8](e),i=!0,r||(s=[oe(n=Et.call(null,e,t[0])),oe(t[3].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&64)&&Ae(a,o,u,u[6],i?Se(o,u[6],h,null):ke(u[6]),null),ae(e,c=Ne(l,[(!i||h&2)&&{href:u[1]},h&16&&u[4]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[8](null),r=!1,Ke(s)}}}function LR(t,e,n){const i=["use","href","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e,{href:l="javascript:void(0);"}=e;const c=tt(Fe());let u;function h(){return u}function d(f){ce[f?"unshift":"push"](()=>{u=f,n(2,u)})}return t.$$set=f=>{e=j(j({},e),Xe(f)),n(4,r=ne(e,i)),"use"in f&&n(0,a=f.use),"href"in f&&n(1,l=f.href),"$$scope"in f&&n(6,o=f.$$scope)},[a,l,u,c,r,h,o,s,d]}class MR extends Ye{constructor(e){super();Qe(this,e,LR,OR,We,{use:0,href:1,getElement:5})}get getElement(){return this.$$.ctx[5]}}function NR(t){let e,n,i,r,s;const o=t[6].default,a=Ce(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=j(c,l[u]);return{c(){e=we("button"),a&&a.c(),this.h()},l(u){e=Re(u,"BUTTON",{});var h=ge(e);a&&a.l(h),h.forEach(U),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),e.autofocus&&e.focus(),t[7](e),i=!0,r||(s=[oe(n=Et.call(null,e,t[0])),oe(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Ae(a,o,u,u[5],i?Se(o,u[5],h,null):ke(u[5]),null),ae(e,c=Ne(l,[h&8&&u[3]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[7](null),r=!1,Ke(s)}}}function PR(t,e,n){const i=["use","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=tt(Fe());let c;function u(){return c}function h(d){ce[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=j(j({},e),Xe(d)),n(3,r=ne(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class DR extends Ye{constructor(e){super();Qe(this,e,PR,NR,We,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function FR(t){let e,n,i,r,s;const o=t[6].default,a=Ce(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=j(c,l[u]);return{c(){e=we("div"),a&&a.c(),this.h()},l(u){e=Re(u,"DIV",{});var h=ge(e);a&&a.l(h),h.forEach(U),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[oe(n=Et.call(null,e,t[0])),oe(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Ae(a,o,u,u[5],i?Se(o,u[5],h,null):ke(u[5]),null),ae(e,c=Ne(l,[h&8&&u[3]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[7](null),r=!1,Ke(s)}}}function xR(t,e,n){const i=["use","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=tt(Fe());let c;function u(){return c}function h(d){ce[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=j(j({},e),Xe(d)),n(3,r=ne(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class Dv extends Ye{constructor(e){super();Qe(this,e,xR,FR,We,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function UR(t){let e,n,i,r,s;const o=t[6].default,a=Ce(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=j(c,l[u]);return{c(){e=we("h1"),a&&a.c(),this.h()},l(u){e=Re(u,"H1",{});var h=ge(e);a&&a.l(h),h.forEach(U),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[oe(n=Et.call(null,e,t[0])),oe(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Ae(a,o,u,u[5],i?Se(o,u[5],h,null):ke(u[5]),null),ae(e,c=Ne(l,[h&8&&u[3]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[7](null),r=!1,Ke(s)}}}function jR(t,e,n){const i=["use","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=tt(Fe());let c;function u(){return c}function h(d){ce[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=j(j({},e),Xe(d)),n(3,r=ne(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class VR extends Ye{constructor(e){super();Qe(this,e,jR,UR,We,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function BR(t){let e,n,i,r,s;const o=t[6].default,a=Ce(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=j(c,l[u]);return{c(){e=we("h2"),a&&a.c(),this.h()},l(u){e=Re(u,"H2",{});var h=ge(e);a&&a.l(h),h.forEach(U),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[oe(n=Et.call(null,e,t[0])),oe(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Ae(a,o,u,u[5],i?Se(o,u[5],h,null):ke(u[5]),null),ae(e,c=Ne(l,[h&8&&u[3]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[7](null),r=!1,Ke(s)}}}function HR(t,e,n){const i=["use","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=tt(Fe());let c;function u(){return c}function h(d){ce[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=j(j({},e),Xe(d)),n(3,r=ne(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class qR extends Ye{constructor(e){super();Qe(this,e,HR,BR,We,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function WR(t){let e,n,i,r,s;const o=t[6].default,a=Ce(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=j(c,l[u]);return{c(){e=we("h3"),a&&a.c(),this.h()},l(u){e=Re(u,"H3",{});var h=ge(e);a&&a.l(h),h.forEach(U),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[oe(n=Et.call(null,e,t[0])),oe(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Ae(a,o,u,u[5],i?Se(o,u[5],h,null):ke(u[5]),null),ae(e,c=Ne(l,[h&8&&u[3]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[7](null),r=!1,Ke(s)}}}function GR(t,e,n){const i=["use","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=tt(Fe());let c;function u(){return c}function h(d){ce[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=j(j({},e),Xe(d)),n(3,r=ne(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class zR extends Ye{constructor(e){super();Qe(this,e,GR,WR,We,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function KR(t){let e,n,i,r,s;const o=t[6].default,a=Ce(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=j(c,l[u]);return{c(){e=we("li"),a&&a.c(),this.h()},l(u){e=Re(u,"LI",{});var h=ge(e);a&&a.l(h),h.forEach(U),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[oe(n=Et.call(null,e,t[0])),oe(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Ae(a,o,u,u[5],i?Se(o,u[5],h,null):ke(u[5]),null),ae(e,c=Ne(l,[h&8&&u[3]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[7](null),r=!1,Ke(s)}}}function XR(t,e,n){const i=["use","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=tt(Fe());let c;function u(){return c}function h(d){ce[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=j(j({},e),Xe(d)),n(3,r=ne(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class QR extends Ye{constructor(e){super();Qe(this,e,XR,KR,We,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function YR(t){let e,n,i,r,s;const o=t[6].default,a=Ce(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=j(c,l[u]);return{c(){e=we("nav"),a&&a.c(),this.h()},l(u){e=Re(u,"NAV",{});var h=ge(e);a&&a.l(h),h.forEach(U),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[oe(n=Et.call(null,e,t[0])),oe(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Ae(a,o,u,u[5],i?Se(o,u[5],h,null):ke(u[5]),null),ae(e,c=Ne(l,[h&8&&u[3]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[7](null),r=!1,Ke(s)}}}function JR(t,e,n){const i=["use","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=tt(Fe());let c;function u(){return c}function h(d){ce[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=j(j({},e),Xe(d)),n(3,r=ne(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class ZR extends Ye{constructor(e){super();Qe(this,e,JR,YR,We,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function $R(t){let e,n,i,r,s;const o=t[6].default,a=Ce(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=j(c,l[u]);return{c(){e=we("span"),a&&a.c(),this.h()},l(u){e=Re(u,"SPAN",{});var h=ge(e);a&&a.l(h),h.forEach(U),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[oe(n=Et.call(null,e,t[0])),oe(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Ae(a,o,u,u[5],i?Se(o,u[5],h,null):ke(u[5]),null),ae(e,c=Ne(l,[h&8&&u[3]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[7](null),r=!1,Ke(s)}}}function eO(t,e,n){const i=["use","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=tt(Fe());let c;function u(){return c}function h(d){ce[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=j(j({},e),Xe(d)),n(3,r=ne(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class Fv extends Ye{constructor(e){super();Qe(this,e,eO,$R,We,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function tO(t){let e,n,i,r,s;const o=t[6].default,a=Ce(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=j(c,l[u]);return{c(){e=we("ul"),a&&a.c(),this.h()},l(u){e=Re(u,"UL",{});var h=ge(e);a&&a.l(h),h.forEach(U),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[oe(n=Et.call(null,e,t[0])),oe(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Ae(a,o,u,u[5],i?Se(o,u[5],h,null):ke(u[5]),null),ae(e,c=Ne(l,[h&8&&u[3]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[7](null),r=!1,Ke(s)}}}function nO(t,e,n){const i=["use","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=tt(Fe());let c;function u(){return c}function h(d){ce[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=j(j({},e),Xe(d)),n(3,r=ne(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class iO extends Ye{constructor(e){super();Qe(this,e,nO,tO,We,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}const xv=MR,rO=DR,hi=Dv,sO=VR,oO=qR,aO=zR,lO=QR,cO=ZR,Er=Fv,uO=iO;function Uv(t){let e;return{c(){e=we("div"),this.h()},l(n){e=Re(n,"DIV",{class:!0}),ge(e).forEach(U),this.h()},h(){_t(e,"class","mdc-button__touch")},m(n,i){ie(n,e,i)},d(n){n&&U(e)}}}function hO(t){let e,n,i,r;const s=t[26].default,o=Ce(s,t,t[28],null);let a=t[6]&&Uv();return{c(){e=we("div"),n=ct(),o&&o.c(),a&&a.c(),i=Tt(),this.h()},l(l){e=Re(l,"DIV",{class:!0}),ge(e).forEach(U),n=ut(l),o&&o.l(l),a&&a.l(l),i=Tt(),this.h()},h(){_t(e,"class","mdc-button__ripple")},m(l,c){ie(l,e,c),ie(l,n,c),o&&o.m(l,c),a&&a.m(l,c),ie(l,i,c),r=!0},p(l,c){o&&o.p&&(!r||c&268435456)&&Ae(o,s,l,l[28],r?Se(s,l[28],c,null):ke(l[28]),null),l[6]?a||(a=Uv(),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null)},i(l){r||(D(o,l),r=!0)},o(l){B(o,l),r=!1},d(l){l&&U(e),l&&U(n),o&&o.d(l),a&&a.d(l),l&&U(i)}}}function dO(t){let e,n,i;const r=[{use:[[br,{ripple:t[3],unbounded:!1,color:t[4],disabled:!!t[22].disabled,addClass:t[18],removeClass:t[19],addStyle:t[20]}],t[16],...t[0]]},{class:ye(Ze({[t[1]]:!0,"mdc-button":!0,"mdc-button--raised":t[5]==="raised","mdc-button--unelevated":t[5]==="unelevated","mdc-button--outlined":t[5]==="outlined","smui-button--color-secondary":t[4]==="secondary","mdc-button--touch":t[6],"mdc-card__action":t[17]==="card:action","mdc-card__action--button":t[17]==="card:action","mdc-dialog__button":t[17]==="dialog:action","mdc-top-app-bar__navigation-icon":t[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":t[17]==="top-app-bar:action","mdc-snackbar__action":t[17]==="snackbar:actions","mdc-banner__secondary-action":t[17]==="banner"&&t[8],"mdc-banner__primary-action":t[17]==="banner"&&!t[8],"mdc-tooltip__action":t[17]==="tooltip:rich-actions"},t[11]))},{style:Object.entries(t[12]).map(jv).concat([t[2]]).join(" ")},t[15],t[14],t[13],{href:t[7]},t[22]];var s=t[9];function o(a){let l={$$slots:{default:[hO]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=j(l,r[c]);return{props:l}}return s&&(e=new s(o(t)),t[27](e),e.$on("click",t[21])),{c(){e&&vt(e.$$.fragment),n=Tt()},l(a){e&&Dt(e.$$.fragment,a),n=Tt()},m(a,l){e&&dt(e,a,l),ie(a,n,l),i=!0},p(a,[l]){const c=l&6289919?Ne(r,[l&6094873&&{use:[[br,{ripple:a[3],unbounded:!1,color:a[4],disabled:!!a[22].disabled,addClass:a[18],removeClass:a[19],addStyle:a[20]}],a[16],...a[0]]},l&133490&&{class:ye(Ze({[a[1]]:!0,"mdc-button":!0,"mdc-button--raised":a[5]==="raised","mdc-button--unelevated":a[5]==="unelevated","mdc-button--outlined":a[5]==="outlined","smui-button--color-secondary":a[4]==="secondary","mdc-button--touch":a[6],"mdc-card__action":a[17]==="card:action","mdc-card__action--button":a[17]==="card:action","mdc-dialog__button":a[17]==="dialog:action","mdc-top-app-bar__navigation-icon":a[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":a[17]==="top-app-bar:action","mdc-snackbar__action":a[17]==="snackbar:actions","mdc-banner__secondary-action":a[17]==="banner"&&a[8],"mdc-banner__primary-action":a[17]==="banner"&&!a[8],"mdc-tooltip__action":a[17]==="tooltip:rich-actions"},a[11]))},l&4100&&{style:Object.entries(a[12]).map(jv).concat([a[2]]).join(" ")},l&32768&&ht(a[15]),l&16384&&ht(a[14]),l&8192&&ht(a[13]),l&128&&{href:a[7]},l&4194304&&ht(a[22])]):{};if(l&268435520&&(c.$$scope={dirty:l,ctx:a}),s!==(s=a[9])){if(e){Yt();const u=e;B(u.$$.fragment,1,0,()=>{ft(u,1)}),Jt()}s?(e=new s(o(a)),a[27](e),e.$on("click",a[21]),vt(e.$$.fragment),D(e.$$.fragment,1),dt(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(a){i||(e&&D(e.$$.fragment,a),i=!0)},o(a){e&&B(e.$$.fragment,a),i=!1},d(a){t[27](null),a&&U(n),e&&ft(e,a)}}}const jv=([t,e])=>`${t}: ${e};`;function fO(t,e,n){let i,r,s;const o=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","getElement"];let a=ne(e,o),{$$slots:l={},$$scope:c}=e;const u=tt(Fe());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{ripple:p=!0}=e,{color:g="primary"}=e,{variant:m="text"}=e,{touch:v=!1}=e,{href:A=void 0}=e,{action:T="close"}=e,{defaultAction:y=!1}=e,{secondary:N=!1}=e,k,_={},w={},V=Qt("SMUI:button:context"),{component:b=A==null?rO:xv}=e;Pt("SMUI:label:context","button"),Pt("SMUI:icon:context","button");function O(C){_[C]||n(11,_[C]=!0,_)}function J(C){(!(C in _)||_[C])&&n(11,_[C]=!1,_)}function E(C,S){w[C]!=S&&(S===""||S==null?(delete w[C],n(12,w)):n(12,w[C]=S,w))}function L(){V==="banner"&&et(R(),N?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function R(){return k.getElement()}function G(C){ce[C?"unshift":"push"](()=>{k=C,n(10,k)})}return t.$$set=C=>{n(29,e=j(j({},e),Xe(C))),n(22,a=ne(e,o)),"use"in C&&n(0,h=C.use),"class"in C&&n(1,d=C.class),"style"in C&&n(2,f=C.style),"ripple"in C&&n(3,p=C.ripple),"color"in C&&n(4,g=C.color),"variant"in C&&n(5,m=C.variant),"touch"in C&&n(6,v=C.touch),"href"in C&&n(7,A=C.href),"action"in C&&n(23,T=C.action),"defaultAction"in C&&n(24,y=C.defaultAction),"secondary"in C&&n(8,N=C.secondary),"component"in C&&n(9,b=C.component),"$$scope"in C&&n(28,c=C.$$scope)},t.$$.update=()=>{n(15,i=V==="dialog:action"&&T!=null?{"data-mdc-dialog-action":T}:{action:e.action}),n(14,r=V==="dialog:action"&&y?{"data-mdc-dialog-button-default":""}:{default:e.default}),n(13,s=V==="banner"?{}:{secondary:e.secondary})},e=Xe(e),[h,d,f,p,g,m,v,A,N,b,k,_,w,s,r,i,u,V,O,J,E,L,a,T,y,R,l,G,c]}class Qj extends Ye{constructor(e){super();Qe(this,e,fO,dO,We,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:23,defaultAction:24,secondary:8,component:9,getElement:25})}get getElement(){return this.$$.ctx[25]}}function pO(t){let e;const n=t[9].default,i=Ce(n,t,t[11],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&2048)&&Ae(i,n,r,r[11],e?Se(n,r[11],s,null):ke(r[11]),null)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function mO(t){let e,n,i;const r=[{use:[t[4],...t[0]]},{class:ye({[t[1]]:!0,"mdc-button__label":t[5]==="button","mdc-fab__label":t[5]==="fab","mdc-tab__text-label":t[5]==="tab","mdc-image-list__label":t[5]==="image-list","mdc-snackbar__label":t[5]==="snackbar","mdc-banner__text":t[5]==="banner","mdc-segmented-button__label":t[5]==="segmented-button","mdc-data-table__pagination-rows-per-page-label":t[5]==="data-table:pagination","mdc-data-table__header-cell-label":t[5]==="data-table:sortable-header-cell"})},t[5]==="snackbar"?{"aria-atomic":"false"}:{},{tabindex:t[6]},t[7]];var s=t[2];function o(a){let l={$$slots:{default:[pO]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=j(l,r[c]);return{props:l}}return s&&(e=new s(o(t)),t[10](e)),{c(){e&&vt(e.$$.fragment),n=Tt()},l(a){e&&Dt(e.$$.fragment,a),n=Tt()},m(a,l){e&&dt(e,a,l),ie(a,n,l),i=!0},p(a,[l]){const c=l&243?Ne(r,[l&17&&{use:[a[4],...a[0]]},l&34&&{class:ye({[a[1]]:!0,"mdc-button__label":a[5]==="button","mdc-fab__label":a[5]==="fab","mdc-tab__text-label":a[5]==="tab","mdc-image-list__label":a[5]==="image-list","mdc-snackbar__label":a[5]==="snackbar","mdc-banner__text":a[5]==="banner","mdc-segmented-button__label":a[5]==="segmented-button","mdc-data-table__pagination-rows-per-page-label":a[5]==="data-table:pagination","mdc-data-table__header-cell-label":a[5]==="data-table:sortable-header-cell"})},l&32&&ht(a[5]==="snackbar"?{"aria-atomic":"false"}:{}),l&64&&{tabindex:a[6]},l&128&&ht(a[7])]):{};if(l&2048&&(c.$$scope={dirty:l,ctx:a}),s!==(s=a[2])){if(e){Yt();const u=e;B(u.$$.fragment,1,0,()=>{ft(u,1)}),Jt()}s?(e=new s(o(a)),a[10](e),vt(e.$$.fragment),D(e.$$.fragment,1),dt(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(a){i||(e&&D(e.$$.fragment,a),i=!0)},o(a){e&&B(e.$$.fragment,a),i=!1},d(a){t[10](null),a&&U(n),e&&ft(e,a)}}}function gO(t,e,n){const i=["use","class","component","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e;const a=tt(Fe());let{use:l=[]}=e,{class:c=""}=e,u,{component:h=Fv}=e;const d=Qt("SMUI:label:context"),f=Qt("SMUI:label:tabindex");function p(){return u.getElement()}function g(m){ce[m?"unshift":"push"](()=>{u=m,n(3,u)})}return t.$$set=m=>{e=j(j({},e),Xe(m)),n(7,r=ne(e,i)),"use"in m&&n(0,l=m.use),"class"in m&&n(1,c=m.class),"component"in m&&n(2,h=m.component),"$$scope"in m&&n(11,o=m.$$scope)},[l,c,h,u,a,d,f,r,p,s,g,o]}class _O extends Ye{constructor(e){super();Qe(this,e,gO,mO,We,{use:0,class:1,component:2,getElement:8})}get getElement(){return this.$$.ctx[8]}}function vO(t){let e;const n=t[4].default,i=Ce(n,t,t[3],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,[s]){i&&i.p&&(!e||s&8)&&Ae(i,n,r,r[3],e?Se(n,r[3],s,null):ke(r[3]),null)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function yO(t,e,n){let i,{$$slots:r={},$$scope:s}=e,{key:o}=e,{value:a}=e;const l=Cp(a);return i0(t,l,c=>n(5,i=c)),Pt(o,l),Ji(()=>{l.set(void 0)}),t.$$set=c=>{"key"in c&&n(1,o=c.key),"value"in c&&n(2,a=c.value),"$$scope"in c&&n(3,s=c.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&s0(l,i=a,i)},[l,o,a,s,r]}class lc extends Ye{constructor(e){super();Qe(this,e,yO,vO,We,{key:1,value:2})}}const Yj=_O;/**
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
 */var $n={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},di={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+$n.ROOT};/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var bO=function(t){wn(e,t);function e(n){return t.call(this,yt(yt({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return $n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return di},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(di.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(n){this.adapter.setContent(n)},e.prototype.isPersistent=function(){return this.adapter.hasClass($n.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(n){n?this.adapter.addClass($n.HELPER_TEXT_PERSISTENT):this.adapter.removeClass($n.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass($n.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(n){n?this.adapter.addClass($n.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass($n.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(di.ARIA_HIDDEN)},e.prototype.setValidity=function(n){var i=this.adapter.hasClass($n.HELPER_TEXT_PERSISTENT),r=this.adapter.hasClass($n.HELPER_TEXT_VALIDATION_MSG),s=r&&!n;s?(this.showToScreenReader(),this.adapter.getAttr(di.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(di.ROLE,"alert")):this.adapter.removeAttr(di.ROLE),!i&&!s&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(di.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var n=this;this.adapter.removeAttr(di.ROLE),requestAnimationFrame(function(){n.adapter.setAttr(di.ROLE,"alert")})},e}(zn);function EO(t){let e;return{c(){e=bi(t[8])},l(n){e=Wr(n,t[8])},m(n,i){ie(n,e,i)},p(n,i){i&256&&Qs(e,n[8])},i:Xt,o:Xt,d(n){n&&U(e)}}}function IO(t){let e;const n=t[13].default,i=Ce(n,t,t[12],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&4096)&&Ae(i,n,r,r[12],e?Se(n,r[12],s,null):ke(r[12]),null)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function wO(t){let e,n,i,r,s,o,a,l,c;const u=[IO,EO],h=[];function d(g,m){return g[8]==null?0:1}n=d(t),i=h[n]=u[n](t);let f=[{class:r=ye(Ze({[t[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":t[3],"mdc-text-field-helper-text--validation-msg":t[4]},t[6]))},{"aria-hidden":s=t[3]?void 0:"true"},{id:t[2]},t[7],t[10]],p={};for(let g=0;g<f.length;g+=1)p=j(p,f[g]);return{c(){e=we("div"),i.c(),this.h()},l(g){e=Re(g,"DIV",{class:!0,"aria-hidden":!0,id:!0});var m=ge(e);i.l(m),m.forEach(U),this.h()},h(){ae(e,p)},m(g,m){ie(g,e,m),h[n].m(e,null),t[14](e),a=!0,l||(c=[oe(o=Et.call(null,e,t[0])),oe(t[9].call(null,e))],l=!0)},p(g,[m]){let v=n;n=d(g),n===v?h[n].p(g,m):(Yt(),B(h[v],1,1,()=>{h[v]=null}),Jt(),i=h[n],i?i.p(g,m):(i=h[n]=u[n](g),i.c()),D(i,1),i.m(e,null)),ae(e,p=Ne(f,[(!a||m&90&&r!==(r=ye(Ze({[g[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":g[3],"mdc-text-field-helper-text--validation-msg":g[4]},g[6]))))&&{class:r},(!a||m&8&&s!==(s=g[3]?void 0:"true"))&&{"aria-hidden":s},(!a||m&4)&&{id:g[2]},m&128&&g[7],m&1024&&g[10]])),o&&qe(o.update)&&m&1&&o.update.call(null,g[0])},i(g){a||(D(i),a=!0)},o(g){B(i),a=!1},d(g){g&&U(e),h[n].d(),t[14](null),l=!1,Ke(c)}}}let TO=0;function CO(t,e,n){const i=["use","class","id","persistent","validationMsg","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e;const a=tt(Fe());let{use:l=[]}=e,{class:c=""}=e,{id:u="SMUI-textfield-helper-text-"+TO++}=e,{persistent:h=!1}=e,{validationMsg:d=!1}=e,f,p,g={},m={},v;Ln(()=>(p=new bO({addClass:T,removeClass:y,hasClass:A,getAttr:N,setAttr:k,removeAttr:_,setContent:b=>{n(8,v=b)}}),u.startsWith("SMUI-textfield-helper-text-")&&et(w(),"SMUITextfieldHelperText:id",u),et(w(),"SMUITextfieldHelperText:mount",p),p.init(),()=>{et(w(),"SMUITextfieldHelperText:unmount",p),p.destroy()}));function A(b){return b in g?g[b]:w().classList.contains(b)}function T(b){g[b]||n(6,g[b]=!0,g)}function y(b){(!(b in g)||g[b])&&n(6,g[b]=!1,g)}function N(b){var O;return b in m?(O=m[b])!==null&&O!==void 0?O:null:w().getAttribute(b)}function k(b,O){m[b]!==O&&n(7,m[b]=O,m)}function _(b){(!(b in m)||m[b]!=null)&&n(7,m[b]=void 0,m)}function w(){return f}function V(b){ce[b?"unshift":"push"](()=>{f=b,n(5,f)})}return t.$$set=b=>{e=j(j({},e),Xe(b)),n(10,r=ne(e,i)),"use"in b&&n(0,l=b.use),"class"in b&&n(1,c=b.class),"id"in b&&n(2,u=b.id),"persistent"in b&&n(3,h=b.persistent),"validationMsg"in b&&n(4,d=b.validationMsg),"$$scope"in b&&n(12,o=b.$$scope)},[l,c,u,h,d,f,g,m,v,a,r,w,o,s,V]}class Jj extends Ye{constructor(e){super();Qe(this,e,CO,wO,We,{use:0,class:1,id:2,persistent:3,validationMsg:4,getElement:11})}get getElement(){return this.$$.ctx[11]}}/**
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
 */var SO={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
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
 */var AO=function(t){wn(e,t);function e(n){var i=t.call(this,yt(yt({},e.defaultAdapter),n))||this;return i.shakeAnimationEndHandler=function(){i.handleShakeAnimationEnd()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return SO},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(n){var i=e.cssClasses.LABEL_SHAKE;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.float=function(n){var i=e.cssClasses,r=i.LABEL_FLOAT_ABOVE,s=i.LABEL_SHAKE;n?this.adapter.addClass(r):(this.adapter.removeClass(r),this.adapter.removeClass(s))},e.prototype.setRequired=function(n){var i=e.cssClasses.LABEL_REQUIRED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleShakeAnimationEnd=function(){var n=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(n)},e}(zn);/**
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
 */var Ir={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
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
 */var kO=function(t){wn(e,t);function e(n){var i=t.call(this,yt(yt({},e.defaultAdapter),n))||this;return i.transitionEndHandler=function(r){i.handleTransitionEnd(r)},i}return Object.defineProperty(e,"cssClasses",{get:function(){return Ir},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(Ir.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(Ir.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(n){this.adapter.setStyle("transform-origin",n+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(Ir.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(n){var i=this.adapter.hasClass(Ir.LINE_RIPPLE_DEACTIVATING);n.propertyName==="opacity"&&i&&(this.adapter.removeClass(Ir.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(Ir.LINE_RIPPLE_DEACTIVATING))},e}(zn);/**
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
 */var RO={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Vv={NOTCH_ELEMENT_PADDING:8},OO={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var LO=function(t){wn(e,t);function e(n){return t.call(this,yt(yt({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"strings",{get:function(){return RO},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return OO},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Vv},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(n){var i=e.cssClasses.OUTLINE_NOTCHED;n>0&&(n+=Vv.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(n),this.adapter.addClass(i)},e.prototype.closeNotch=function(){var n=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(n),this.adapter.removeNotchWidthProperty()},e}(zn);/**
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
 */var Od={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},MO={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},Bv={LABEL_SCALE:.75},NO=["pattern","min","max","required","step","minlength","maxlength"],PO=["color","date","datetime-local","month","range","time","week"];/**
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
 */var Hv=["mousedown","touchstart"],qv=["click","keydown"],DO=function(t){wn(e,t);function e(n,i){i===void 0&&(i={});var r=t.call(this,yt(yt({},e.defaultAdapter),n))||this;return r.isFocused=!1,r.receivedUserInput=!1,r.valid=!0,r.useNativeValidation=!0,r.validateOnValueChange=!0,r.helperText=i.helperText,r.characterCounter=i.characterCounter,r.leadingIcon=i.leadingIcon,r.trailingIcon=i.trailingIcon,r.inputFocusHandler=function(){r.activateFocus()},r.inputBlurHandler=function(){r.deactivateFocus()},r.inputInputHandler=function(){r.handleInput()},r.setPointerXOffset=function(s){r.setTransformOrigin(s)},r.textFieldInteractionHandler=function(){r.handleTextFieldInteraction()},r.validationAttributeChangeHandler=function(s){r.handleValidationAttributeChange(s)},r}return Object.defineProperty(e,"cssClasses",{get:function(){return MO},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Od},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Bv},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var n=this.getNativeInput().type;return PO.indexOf(n)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n,i,r,s;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var o=Mn(Hv),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.registerInputInteractionHandler(l,this.setPointerXOffset)}}catch(h){n={error:h}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}try{for(var c=Mn(qv),u=c.next();!u.done;u=c.next()){var l=u.value;this.adapter.registerTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(h){r={error:h}}finally{try{u&&!u.done&&(s=c.return)&&s.call(c)}finally{if(r)throw r.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var n,i,r,s;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var o=Mn(Hv),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.deregisterInputInteractionHandler(l,this.setPointerXOffset)}}catch(h){n={error:h}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}try{for(var c=Mn(qv),u=c.next();!u.done;u=c.next()){var l=u.value;this.adapter.deregisterTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(h){r={error:h}}finally{try{u&&!u.done&&(s=c.return)&&s.call(c)}finally{if(r)throw r.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var n=this.adapter.getNativeInput();n&&n.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(n){var i=this;n.some(function(r){return NO.indexOf(r)>-1?(i.styleValidity(!0),i.adapter.setLabelRequired(i.getNativeInput().required),!0):!1}),n.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(n){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(n){var i=this.adapter.getLabelWidth()*Bv.LABEL_SCALE;this.adapter.notchOutline(i)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(n){if(!(this.isDisabled()||this.adapter.hasOutline())){var i=n.touches,r=i?i[0]:n,s=r.target.getBoundingClientRect(),o=r.clientX-s.left;this.adapter.setLineRippleTransformOrigin(o)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var n=this.isValid();this.styleValidity(n),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(n){if(this.getValue()!==n&&(this.getNativeInput().value=n),this.setcharacterCounter(n.length),this.validateOnValueChange){var i=this.isValid();this.styleValidity(i)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(n){this.valid=n,this.styleValidity(n);var i=!n&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(i)},e.prototype.setValidateOnValueChange=function(n){this.validateOnValueChange=n},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(n){this.useNativeValidation=n},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(n){this.getNativeInput().disabled=n,this.styleDisabled(n)},e.prototype.setHelperTextContent=function(n){this.helperText&&this.helperText.setContent(n)},e.prototype.setLeadingIconAriaLabel=function(n){this.leadingIcon&&this.leadingIcon.setAriaLabel(n)},e.prototype.setLeadingIconContent=function(n){this.leadingIcon&&this.leadingIcon.setContent(n)},e.prototype.setTrailingIconAriaLabel=function(n){this.trailingIcon&&this.trailingIcon.setAriaLabel(n)},e.prototype.setTrailingIconContent=function(n){this.trailingIcon&&this.trailingIcon.setContent(n)},e.prototype.setcharacterCounter=function(n){if(!!this.characterCounter){var i=this.getNativeInput().maxLength;if(i===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(n,i)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(n){var i=e.cssClasses.INVALID;if(n?this.adapter.removeClass(i):this.adapter.addClass(i),this.helperText){this.helperText.setValidity(n);var r=this.helperText.isValidation();if(!r)return;var s=this.helperText.isVisible(),o=this.helperText.getId();s&&o?this.adapter.setInputAttr(Od.ARIA_DESCRIBEDBY,o):this.adapter.removeInputAttr(Od.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(n){var i=e.cssClasses.FOCUSED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.styleDisabled=function(n){var i=e.cssClasses,r=i.DISABLED,s=i.INVALID;n?(this.adapter.addClass(r),this.adapter.removeClass(s)):this.adapter.removeClass(r),this.leadingIcon&&this.leadingIcon.setDisabled(n),this.trailingIcon&&this.trailingIcon.setDisabled(n)},e.prototype.styleFloating=function(n){var i=e.cssClasses.LABEL_FLOATING;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.getNativeInput=function(){var n=this.adapter?this.adapter.getNativeInput():null;return n||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(zn);function FO(t){let e,n,i,r,s,o,a,l;const c=t[22].default,u=Ce(c,t,t[21],null);let h=[{class:n=ye(Ze({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1]},t[8]))},{style:i=Object.entries(t[9]).map(Gv).concat([t[4]]).join(" ")},{for:r=t[5]||(t[11]?t[11].id:void 0)},t[12]],d={};for(let f=0;f<h.length;f+=1)d=j(d,h[f]);return{c(){e=we("label"),u&&u.c(),this.h()},l(f){e=Re(f,"LABEL",{class:!0,style:!0,for:!0});var p=ge(e);u&&u.l(p),p.forEach(U),this.h()},h(){ae(e,d)},m(f,p){ie(f,e,p),u&&u.m(e,null),t[24](e),o=!0,a||(l=[oe(s=Et.call(null,e,t[2])),oe(t[10].call(null,e))],a=!0)},p(f,p){u&&u.p&&(!o||p&2097152)&&Ae(u,c,f,f[21],o?Se(c,f[21],p,null):ke(f[21]),null),ae(e,d=Ne(h,[(!o||p&267&&n!==(n=ye(Ze({[f[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":f[0],"mdc-floating-label--required":f[1]},f[8]))))&&{class:n},(!o||p&528&&i!==(i=Object.entries(f[9]).map(Gv).concat([f[4]]).join(" ")))&&{style:i},(!o||p&32&&r!==(r=f[5]||(f[11]?f[11].id:void 0)))&&{for:r},p&4096&&f[12]])),s&&qe(s.update)&&p&4&&s.update.call(null,f[2])},i(f){o||(D(u,f),o=!0)},o(f){B(u,f),o=!1},d(f){f&&U(e),u&&u.d(f),t[24](null),a=!1,Ke(l)}}}function xO(t){let e,n,i,r,s,o,a;const l=t[22].default,c=Ce(l,t,t[21],null);let u=[{class:n=ye(Ze({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1]},t[8]))},{style:i=Object.entries(t[9]).map(Wv).concat([t[4]]).join(" ")},t[12]],h={};for(let d=0;d<u.length;d+=1)h=j(h,u[d]);return{c(){e=we("span"),c&&c.c(),this.h()},l(d){e=Re(d,"SPAN",{class:!0,style:!0});var f=ge(e);c&&c.l(f),f.forEach(U),this.h()},h(){ae(e,h)},m(d,f){ie(d,e,f),c&&c.m(e,null),t[23](e),s=!0,o||(a=[oe(r=Et.call(null,e,t[2])),oe(t[10].call(null,e))],o=!0)},p(d,f){c&&c.p&&(!s||f&2097152)&&Ae(c,l,d,d[21],s?Se(l,d[21],f,null):ke(d[21]),null),ae(e,h=Ne(u,[(!s||f&267&&n!==(n=ye(Ze({[d[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":d[0],"mdc-floating-label--required":d[1]},d[8]))))&&{class:n},(!s||f&528&&i!==(i=Object.entries(d[9]).map(Wv).concat([d[4]]).join(" ")))&&{style:i},f&4096&&d[12]])),r&&qe(r.update)&&f&4&&r.update.call(null,d[2])},i(d){s||(D(c,d),s=!0)},o(d){B(c,d),s=!1},d(d){d&&U(e),c&&c.d(d),t[23](null),o=!1,Ke(a)}}}function UO(t){let e,n,i,r;const s=[xO,FO],o=[];function a(l,c){return l[6]?0:1}return e=a(t),n=o[e]=s[e](t),{c(){n.c(),i=Tt()},l(l){n.l(l),i=Tt()},m(l,c){o[e].m(l,c),ie(l,i,c),r=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(Yt(),B(o[u],1,1,()=>{o[u]=null}),Jt(),n=o[e],n?n.p(l,c):(n=o[e]=s[e](l),n.c()),D(n,1),n.m(i.parentNode,i))},i(l){r||(D(n),r=!0)},o(l){B(n),r=!1},d(l){o[e].d(l),l&&U(i)}}}const Wv=([t,e])=>`${t}: ${e};`,Gv=([t,e])=>`${t}: ${e};`;function jO(t,e,n){const i=["use","class","style","for","floatAbove","required","wrapped","shake","float","setRequired","getWidth","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e;var a;const l=tt(Fe());let{use:c=[]}=e,{class:u=""}=e,{style:h=""}=e,{for:d=void 0}=e,{floatAbove:f=!1}=e,{required:p=!1}=e,{wrapped:g=!1}=e,m,v,A={},T={},y=(a=Qt("SMUI:generic:input:props"))!==null&&a!==void 0?a:{},N=f,k=p;Ln(()=>{n(18,v=new AO({addClass:_,removeClass:w,getWidth:()=>{var z,H;const X=R(),ue=X.cloneNode(!0);(z=X.parentNode)===null||z===void 0||z.appendChild(ue),ue.classList.add("smui-floating-label--remove-transition"),ue.classList.add("smui-floating-label--force-size"),ue.classList.remove("mdc-floating-label--float-above");const q=ue.scrollWidth;return(H=X.parentNode)===null||H===void 0||H.removeChild(ue),q},registerInteractionHandler:(z,H)=>R().addEventListener(z,H),deregisterInteractionHandler:(z,H)=>R().removeEventListener(z,H)}));const S={get element(){return R()},addStyle:V,removeStyle:b};return et(m,"SMUIFloatingLabel:mount",S),v.init(),()=>{et(m,"SMUIFloatingLabel:unmount",S),v.destroy()}});function _(S){A[S]||n(8,A[S]=!0,A)}function w(S){(!(S in A)||A[S])&&n(8,A[S]=!1,A)}function V(S,z){T[S]!=z&&(z===""||z==null?(delete T[S],n(9,T)):n(9,T[S]=z,T))}function b(S){S in T&&(delete T[S],n(9,T))}function O(S){v.shake(S)}function J(S){n(0,f=S)}function E(S){n(1,p=S)}function L(){return v.getWidth()}function R(){return m}function G(S){ce[S?"unshift":"push"](()=>{m=S,n(7,m)})}function C(S){ce[S?"unshift":"push"](()=>{m=S,n(7,m)})}return t.$$set=S=>{e=j(j({},e),Xe(S)),n(12,r=ne(e,i)),"use"in S&&n(2,c=S.use),"class"in S&&n(3,u=S.class),"style"in S&&n(4,h=S.style),"for"in S&&n(5,d=S.for),"floatAbove"in S&&n(0,f=S.floatAbove),"required"in S&&n(1,p=S.required),"wrapped"in S&&n(6,g=S.wrapped),"$$scope"in S&&n(21,o=S.$$scope)},t.$$.update=()=>{t.$$.dirty&786433&&v&&N!==f&&(n(19,N=f),v.float(f)),t.$$.dirty&1310722&&v&&k!==p&&(n(20,k=p),v.setRequired(p))},[f,p,c,u,h,d,g,m,A,T,l,y,r,O,J,E,L,R,v,N,k,o,s,G,C]}class zv extends Ye{constructor(e){super();Qe(this,e,jO,UO,We,{use:2,class:3,style:4,for:5,floatAbove:0,required:1,wrapped:6,shake:13,float:14,setRequired:15,getWidth:16,getElement:17})}get shake(){return this.$$.ctx[13]}get float(){return this.$$.ctx[14]}get setRequired(){return this.$$.ctx[15]}get getWidth(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}function VO(t){let e,n,i,r,s,o,a=[{class:n=ye(Ze({[t[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":t[3]},t[5]))},{style:i=Object.entries(t[6]).map(Kv).concat([t[2]]).join(" ")},t[8]],l={};for(let c=0;c<a.length;c+=1)l=j(l,a[c]);return{c(){e=we("div"),this.h()},l(c){e=Re(c,"DIV",{class:!0,style:!0}),ge(e).forEach(U),this.h()},h(){ae(e,l)},m(c,u){ie(c,e,u),t[13](e),s||(o=[oe(r=Et.call(null,e,t[0])),oe(t[7].call(null,e))],s=!0)},p(c,[u]){ae(e,l=Ne(a,[u&42&&n!==(n=ye(Ze({[c[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":c[3]},c[5])))&&{class:n},u&68&&i!==(i=Object.entries(c[6]).map(Kv).concat([c[2]]).join(" "))&&{style:i},u&256&&c[8]])),r&&qe(r.update)&&u&1&&r.update.call(null,c[0])},i:Xt,o:Xt,d(c){c&&U(e),t[13](null),s=!1,Ke(o)}}}const Kv=([t,e])=>`${t}: ${e};`;function BO(t,e,n){const i=["use","class","style","active","activate","deactivate","setRippleCenter","getElement"];let r=ne(e,i);const s=tt(Fe());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{active:c=!1}=e,u,h,d={},f={};Ln(()=>(h=new kO({addClass:g,removeClass:m,hasClass:p,setStyle:v,registerEventHandler:(_,w)=>N().addEventListener(_,w),deregisterEventHandler:(_,w)=>N().removeEventListener(_,w)}),h.init(),()=>{h.destroy()}));function p(_){return _ in d?d[_]:N().classList.contains(_)}function g(_){d[_]||n(5,d[_]=!0,d)}function m(_){(!(_ in d)||d[_])&&n(5,d[_]=!1,d)}function v(_,w){f[_]!=w&&(w===""||w==null?(delete f[_],n(6,f)):n(6,f[_]=w,f))}function A(){h.activate()}function T(){h.deactivate()}function y(_){h.setRippleCenter(_)}function N(){return u}function k(_){ce[_?"unshift":"push"](()=>{u=_,n(4,u)})}return t.$$set=_=>{e=j(j({},e),Xe(_)),n(8,r=ne(e,i)),"use"in _&&n(0,o=_.use),"class"in _&&n(1,a=_.class),"style"in _&&n(2,l=_.style),"active"in _&&n(3,c=_.active)},[o,a,l,c,u,d,f,s,r,A,T,y,N,k]}class HO extends Ye{constructor(e){super();Qe(this,e,BO,VO,We,{use:0,class:1,style:2,active:3,activate:9,deactivate:10,setRippleCenter:11,getElement:12})}get activate(){return this.$$.ctx[9]}get deactivate(){return this.$$.ctx[10]}get setRippleCenter(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function Xv(t){let e,n,i;const r=t[14].default,s=Ce(r,t,t[13],null);return{c(){e=we("div"),s&&s.c(),this.h()},l(o){e=Re(o,"DIV",{class:!0,style:!0});var a=ge(e);s&&s.l(a),a.forEach(U),this.h()},h(){_t(e,"class","mdc-notched-outline__notch"),_t(e,"style",n=Object.entries(t[7]).map(Qv).join(" "))},m(o,a){ie(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&8192)&&Ae(s,r,o,o[13],i?Se(r,o[13],a,null):ke(o[13]),null),(!i||a&128&&n!==(n=Object.entries(o[7]).map(Qv).join(" ")))&&_t(e,"style",n)},i(o){i||(D(s,o),i=!0)},o(o){B(s,o),i=!1},d(o){o&&U(e),s&&s.d(o)}}}function qO(t){let e,n,i,r,s,o,a,l,c,u,h=!t[3]&&Xv(t),d=[{class:o=ye(Ze({[t[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":t[2],"mdc-notched-outline--no-label":t[3]},t[6]))},t[9]],f={};for(let p=0;p<d.length;p+=1)f=j(f,d[p]);return{c(){e=we("div"),n=we("div"),i=ct(),h&&h.c(),r=ct(),s=we("div"),this.h()},l(p){e=Re(p,"DIV",{class:!0});var g=ge(e);n=Re(g,"DIV",{class:!0}),ge(n).forEach(U),i=ut(g),h&&h.l(g),r=ut(g),s=Re(g,"DIV",{class:!0}),ge(s).forEach(U),g.forEach(U),this.h()},h(){_t(n,"class","mdc-notched-outline__leading"),_t(s,"class","mdc-notched-outline__trailing"),ae(e,f)},m(p,g){ie(p,e,g),Be(e,n),Be(e,i),h&&h.m(e,null),Be(e,r),Be(e,s),t[15](e),l=!0,c||(u=[oe(a=Et.call(null,e,t[0])),oe(t[8].call(null,e)),$e(e,"SMUIFloatingLabel:mount",t[16]),$e(e,"SMUIFloatingLabel:unmount",t[17])],c=!0)},p(p,[g]){p[3]?h&&(Yt(),B(h,1,1,()=>{h=null}),Jt()):h?(h.p(p,g),g&8&&D(h,1)):(h=Xv(p),h.c(),D(h,1),h.m(e,r)),ae(e,f=Ne(d,[(!l||g&78&&o!==(o=ye(Ze({[p[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":p[2],"mdc-notched-outline--no-label":p[3]},p[6]))))&&{class:o},g&512&&p[9]])),a&&qe(a.update)&&g&1&&a.update.call(null,p[0])},i(p){l||(D(h),l=!0)},o(p){B(h),l=!1},d(p){p&&U(e),h&&h.d(),t[15](null),c=!1,Ke(u)}}}const Qv=([t,e])=>`${t}: ${e};`;function WO(t,e,n){const i=["use","class","notched","noLabel","notch","closeNotch","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e;const a=tt(Fe());let{use:l=[]}=e,{class:c=""}=e,{notched:u=!1}=e,{noLabel:h=!1}=e,d,f,p,g={},m={};Ln(()=>(f=new LO({addClass:v,removeClass:A,setNotchWidthProperty:O=>T("width",O+"px"),removeNotchWidthProperty:()=>y("width")}),f.init(),()=>{f.destroy()}));function v(O){g[O]||n(6,g[O]=!0,g)}function A(O){(!(O in g)||g[O])&&n(6,g[O]=!1,g)}function T(O,J){m[O]!=J&&(J===""||J==null?(delete m[O],n(7,m)):n(7,m[O]=J,m))}function y(O){O in m&&(delete m[O],n(7,m))}function N(O){f.notch(O)}function k(){f.closeNotch()}function _(){return d}function w(O){ce[O?"unshift":"push"](()=>{d=O,n(5,d)})}const V=O=>n(4,p=O.detail),b=()=>n(4,p=void 0);return t.$$set=O=>{e=j(j({},e),Xe(O)),n(9,r=ne(e,i)),"use"in O&&n(0,l=O.use),"class"in O&&n(1,c=O.class),"notched"in O&&n(2,u=O.notched),"noLabel"in O&&n(3,h=O.noLabel),"$$scope"in O&&n(13,o=O.$$scope)},t.$$.update=()=>{t.$$.dirty&16&&(p?(p.addStyle("transition-duration","0s"),v("mdc-notched-outline--upgraded"),requestAnimationFrame(()=>{p&&p.removeStyle("transition-duration")})):A("mdc-notched-outline--upgraded"))},[l,c,u,h,p,d,g,m,a,r,N,k,_,o,s,w,V,b]}class GO extends Ye{constructor(e){super();Qe(this,e,WO,qO,We,{use:0,class:1,notched:2,noLabel:3,notch:10,closeNotch:11,getElement:12})}get notch(){return this.$$.ctx[10]}get closeNotch(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function zO(t){let e;const n=t[10].default,i=Ce(n,t,t[12],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&4096)&&Ae(i,n,r,r[12],e?Se(n,r[12],s,null):ke(r[12]),null)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function KO(t){let e,n,i;const r=[{use:[t[7],...t[0]]},{class:ye(Ze({[t[1]]:!0,[t[5]]:!0},t[4]))},t[6],t[8]];var s=t[2];function o(a){let l={$$slots:{default:[zO]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=j(l,r[c]);return{props:l}}return s&&(e=new s(o(t)),t[11](e)),{c(){e&&vt(e.$$.fragment),n=Tt()},l(a){e&&Dt(e.$$.fragment,a),n=Tt()},m(a,l){e&&dt(e,a,l),ie(a,n,l),i=!0},p(a,[l]){const c=l&499?Ne(r,[l&129&&{use:[a[7],...a[0]]},l&50&&{class:ye(Ze({[a[1]]:!0,[a[5]]:!0},a[4]))},l&64&&ht(a[6]),l&256&&ht(a[8])]):{};if(l&4096&&(c.$$scope={dirty:l,ctx:a}),s!==(s=a[2])){if(e){Yt();const u=e;B(u.$$.fragment,1,0,()=>{ft(u,1)}),Jt()}s?(e=new s(o(a)),a[11](e),vt(e.$$.fragment),D(e.$$.fragment,1),dt(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(a){i||(e&&D(e.$$.fragment,a),i=!0)},o(a){e&&B(e.$$.fragment,a),i=!1},d(a){t[11](null),a&&U(n),e&&ft(e,a)}}}const Ui={component:Dv,class:"",classMap:{},contexts:{},props:{}};function XO(t,e,n){const i=["use","class","component","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e,{class:l=""}=e,c;const u=Ui.class,h={},d=[],f=Ui.contexts,p=Ui.props;let{component:g=Ui.component}=e;Object.entries(Ui.classMap).forEach(([T,y])=>{const N=Qt(y);N&&"subscribe"in N&&d.push(N.subscribe(k=>{n(4,h[T]=k,h)}))});const m=tt(Fe());for(let T in f)f.hasOwnProperty(T)&&Pt(T,f[T]);Ji(()=>{for(const T of d)T()});function v(){return c.getElement()}function A(T){ce[T?"unshift":"push"](()=>{c=T,n(3,c)})}return t.$$set=T=>{e=j(j({},e),Xe(T)),n(8,r=ne(e,i)),"use"in T&&n(0,a=T.use),"class"in T&&n(1,l=T.class),"component"in T&&n(2,g=T.component),"$$scope"in T&&n(12,o=T.$$scope)},[a,l,g,c,h,u,p,m,r,v,s,A,o]}class QO extends Ye{constructor(e){super();Qe(this,e,XO,KO,We,{use:0,class:1,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const Yv=Object.assign({},Ui);function xt(t){return new Proxy(QO,{construct:function(e,n){return Object.assign(Ui,Yv,t),new e(...n)},get:function(e,n){return Object.assign(Ui,Yv,t),e[n]}})}var YO=xt({class:"mdc-text-field-helper-line",component:hi}),JO=xt({class:"mdc-text-field__affix mdc-text-field__affix--prefix",component:Er}),ZO=xt({class:"mdc-text-field__affix mdc-text-field__affix--suffix",component:Er});function $O(t){let e,n,i,r,s,o=[{class:n=ye({[t[1]]:!0,"mdc-text-field__input":!0})},{type:t[2]},{placeholder:t[3]},t[4],t[6],t[10]],a={};for(let l=0;l<o.length;l+=1)a=j(a,o[l]);return{c(){e=we("input"),this.h()},l(l){e=Re(l,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){ae(e,a)},m(l,c){ie(l,e,c),e.autofocus&&e.focus(),t[25](e),r||(s=[oe(i=Et.call(null,e,t[0])),oe(t[7].call(null,e)),$e(e,"input",t[26]),$e(e,"change",t[9]),$e(e,"blur",t[23]),$e(e,"focus",t[24])],r=!0)},p(l,[c]){ae(e,a=Ne(o,[c&2&&n!==(n=ye({[l[1]]:!0,"mdc-text-field__input":!0}))&&{class:n},c&4&&{type:l[2]},c&8&&{placeholder:l[3]},c&16&&l[4],c&64&&l[6],c&1024&&l[10]])),i&&qe(i.update)&&c&1&&i.update.call(null,l[0])},i:Xt,o:Xt,d(l){l&&U(e),t[25](null),r=!1,Ke(s)}}}function eL(t){if(t===""){const e=new Number(Number.NaN);return e.length=0,e}return+t}function tL(t,e,n){const i=["use","class","type","placeholder","value","files","dirty","invalid","updateInvalid","emptyValueNull","emptyValueUndefined","getAttr","addAttr","removeAttr","focus","getElement"];let r=ne(e,i);const s=tt(Fe());let{use:o=[]}=e,{class:a=""}=e,{type:l="text"}=e,{placeholder:c=" "}=e,{value:u=""}=e,{files:h=null}=e,{dirty:d=!1}=e,{invalid:f=!1}=e,{updateInvalid:p=!0}=e,{emptyValueNull:g=u===null}=e,{emptyValueUndefined:m=u===void 0}=e,v,A={},T={};Ln(()=>{p&&n(14,f=v.matches(":invalid"))});function y(R){if(l==="file"){n(12,h=R.currentTarget.files);return}if(R.currentTarget.value===""&&g){n(11,u=null);return}if(R.currentTarget.value===""&&m){n(11,u=void 0);return}switch(l){case"number":case"range":n(11,u=eL(R.currentTarget.value));break;default:n(11,u=R.currentTarget.value);break}}function N(R){(l==="file"||l==="range")&&y(R),n(13,d=!0),p&&n(14,f=v.matches(":invalid"))}function k(R){var G;return R in A?(G=A[R])!==null&&G!==void 0?G:null:b().getAttribute(R)}function _(R,G){A[R]!==G&&n(6,A[R]=G,A)}function w(R){(!(R in A)||A[R]!=null)&&n(6,A[R]=void 0,A)}function V(){b().focus()}function b(){return v}function O(R){Ys.call(this,t,R)}function J(R){Ys.call(this,t,R)}function E(R){ce[R?"unshift":"push"](()=>{v=R,n(5,v)})}const L=R=>l!=="file"&&y(R);return t.$$set=R=>{e=j(j({},e),Xe(R)),n(10,r=ne(e,i)),"use"in R&&n(0,o=R.use),"class"in R&&n(1,a=R.class),"type"in R&&n(2,l=R.type),"placeholder"in R&&n(3,c=R.placeholder),"value"in R&&n(11,u=R.value),"files"in R&&n(12,h=R.files),"dirty"in R&&n(13,d=R.dirty),"invalid"in R&&n(14,f=R.invalid),"updateInvalid"in R&&n(15,p=R.updateInvalid),"emptyValueNull"in R&&n(16,g=R.emptyValueNull),"emptyValueUndefined"in R&&n(17,m=R.emptyValueUndefined)},t.$$.update=()=>{t.$$.dirty&2068&&(l==="file"?(delete T.value,n(4,T),n(2,l),n(11,u)):n(4,T.value=u==null?"":u,T))},[o,a,l,c,T,v,A,s,y,N,r,u,h,d,f,p,g,m,k,_,w,V,b,O,J,E,L]}class nL extends Ye{constructor(e){super();Qe(this,e,tL,$O,We,{use:0,class:1,type:2,placeholder:3,value:11,files:12,dirty:13,invalid:14,updateInvalid:15,emptyValueNull:16,emptyValueUndefined:17,getAttr:18,addAttr:19,removeAttr:20,focus:21,getElement:22})}get getAttr(){return this.$$.ctx[18]}get addAttr(){return this.$$.ctx[19]}get removeAttr(){return this.$$.ctx[20]}get focus(){return this.$$.ctx[21]}get getElement(){return this.$$.ctx[22]}}function iL(t){let e,n,i,r,s,o,a=[{class:n=ye({[t[2]]:!0,"mdc-text-field__input":!0})},{style:i=`${t[4]?"":"resize: none; "}${t[3]}`},t[6],t[9]],l={};for(let c=0;c<a.length;c+=1)l=j(l,a[c]);return{c(){e=we("textarea"),this.h()},l(c){e=Re(c,"TEXTAREA",{class:!0,style:!0}),ge(e).forEach(U),this.h()},h(){ae(e,l)},m(c,u){ie(c,e,u),e.autofocus&&e.focus(),t[20](e),Ep(e,t[0]),s||(o=[oe(r=Et.call(null,e,t[1])),oe(t[7].call(null,e)),$e(e,"change",t[8]),$e(e,"blur",t[18]),$e(e,"focus",t[19]),$e(e,"input",t[21])],s=!0)},p(c,[u]){ae(e,l=Ne(a,[u&4&&n!==(n=ye({[c[2]]:!0,"mdc-text-field__input":!0}))&&{class:n},u&24&&i!==(i=`${c[4]?"":"resize: none; "}${c[3]}`)&&{style:i},u&64&&c[6],u&512&&c[9]])),r&&qe(r.update)&&u&2&&r.update.call(null,c[1]),u&1&&Ep(e,c[0])},i:Xt,o:Xt,d(c){c&&U(e),t[20](null),s=!1,Ke(o)}}}function rL(t,e,n){const i=["use","class","style","value","dirty","invalid","updateInvalid","resizable","getAttr","addAttr","removeAttr","focus","getElement"];let r=ne(e,i);const s=tt(Fe());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{value:c=""}=e,{dirty:u=!1}=e,{invalid:h=!1}=e,{updateInvalid:d=!0}=e,{resizable:f=!0}=e,p,g={};Ln(()=>{d&&n(11,h=p.matches(":invalid"))});function m(){n(10,u=!0),d&&n(11,h=p.matches(":invalid"))}function v(b){var O;return b in g?(O=g[b])!==null&&O!==void 0?O:null:N().getAttribute(b)}function A(b,O){g[b]!==O&&n(6,g[b]=O,g)}function T(b){(!(b in g)||g[b]!=null)&&n(6,g[b]=void 0,g)}function y(){N().focus()}function N(){return p}function k(b){Ys.call(this,t,b)}function _(b){Ys.call(this,t,b)}function w(b){ce[b?"unshift":"push"](()=>{p=b,n(5,p)})}function V(){c=this.value,n(0,c)}return t.$$set=b=>{e=j(j({},e),Xe(b)),n(9,r=ne(e,i)),"use"in b&&n(1,o=b.use),"class"in b&&n(2,a=b.class),"style"in b&&n(3,l=b.style),"value"in b&&n(0,c=b.value),"dirty"in b&&n(10,u=b.dirty),"invalid"in b&&n(11,h=b.invalid),"updateInvalid"in b&&n(12,d=b.updateInvalid),"resizable"in b&&n(4,f=b.resizable)},[c,o,a,l,f,p,g,s,m,r,u,h,d,v,A,T,y,N,k,_,w,V]}class sL extends Ye{constructor(e){super();Qe(this,e,rL,iL,We,{use:1,class:2,style:3,value:0,dirty:10,invalid:11,updateInvalid:12,resizable:4,getAttr:13,addAttr:14,removeAttr:15,focus:16,getElement:17})}get getAttr(){return this.$$.ctx[13]}get addAttr(){return this.$$.ctx[14]}get removeAttr(){return this.$$.ctx[15]}get focus(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}const oL=t=>({}),Jv=t=>({}),aL=t=>({}),Zv=t=>({}),lL=t=>({}),$v=t=>({}),cL=t=>({}),ey=t=>({}),uL=t=>({}),ty=t=>({}),hL=t=>({}),ny=t=>({}),dL=t=>({}),iy=t=>({}),fL=t=>({}),ry=t=>({}),pL=t=>({}),sy=t=>({}),mL=t=>({}),oy=t=>({}),gL=t=>({}),ay=t=>({}),_L=t=>({}),ly=t=>({});function vL(t){let e,n,i,r,s,o,a,l,c,u,h,d,f,p;const g=t[50].label,m=Ce(g,t,t[89],ty);i=new lc({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[bL]},$$scope:{ctx:t}}});const v=t[50].default,A=Ce(v,t,t[89],null);o=new lc({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[EL]},$$scope:{ctx:t}}});const T=t[50].ripple,y=Ce(T,t,t[89],Zv);let N=[{class:l=ye(Ze({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||!t[41].label,"mdc-text-field--with-leading-icon":t[41].leadingIcon,"mdc-text-field--with-trailing-icon":t[41].trailingIcon,"mdc-text-field--invalid":t[1]},t[25]))},{style:c=Object.entries(t[26]).map(yy).concat([t[10]]).join(" ")},ys(t[42],["input$","label$","ripple$","outline$","helperLine$"])],k={};for(let _=0;_<N.length;_+=1)k=j(k,N[_]);return{c(){e=we("div"),m&&m.c(),n=ct(),vt(i.$$.fragment),r=ct(),A&&A.c(),s=ct(),vt(o.$$.fragment),a=ct(),y&&y.c(),this.h()},l(_){e=Re(_,"DIV",{class:!0,style:!0});var w=ge(e);m&&m.l(w),n=ut(w),Dt(i.$$.fragment,w),r=ut(w),A&&A.l(w),s=ut(w),Dt(o.$$.fragment,w),a=ut(w),y&&y.l(w),w.forEach(U),this.h()},h(){ae(e,k)},m(_,w){ie(_,e,w),m&&m.m(e,null),Be(e,n),dt(i,e,null),Be(e,r),A&&A.m(e,null),Be(e,s),dt(o,e,null),Be(e,a),y&&y.m(e,null),t[79](e),d=!0,f||(p=[oe(u=br.call(null,e,{ripple:t[11],unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40]})),oe(h=Et.call(null,e,t[8])),oe(t[34].call(null,e)),$e(e,"SMUITextfieldLeadingIcon:mount",t[80]),$e(e,"SMUITextfieldLeadingIcon:unmount",t[81]),$e(e,"SMUITextfieldTrailingIcon:mount",t[82]),$e(e,"SMUITextfieldTrailingIcon:unmount",t[83])],f=!0)},p(_,w){m&&m.p&&(!d||w[2]&134217728)&&Ae(m,g,_,_[89],d?Se(g,_[89],w,uL):ke(_[89]),ty);const V={};w[2]&134217728&&(V.$$scope={dirty:w,ctx:_}),i.$set(V),A&&A.p&&(!d||w[2]&134217728)&&Ae(A,v,_,_[89],d?Se(v,_[89],w,null):ke(_[89]),null);const b={};w[2]&134217728&&(b.$$scope={dirty:w,ctx:_}),o.$set(b),y&&y.p&&(!d||w[2]&134217728)&&Ae(y,T,_,_[89],d?Se(T,_[89],w,aL):ke(_[89]),Zv),ae(e,k=Ne(N,[(!d||w[0]&33673730|w[1]&1024&&l!==(l=ye(Ze({[_[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":_[12],"mdc-text-field--textarea":_[14],"mdc-text-field--filled":_[15]==="filled","mdc-text-field--outlined":_[15]==="outlined","smui-text-field--standard":_[15]==="standard"&&!_[14],"mdc-text-field--no-label":_[16]||!_[41].label,"mdc-text-field--with-leading-icon":_[41].leadingIcon,"mdc-text-field--with-trailing-icon":_[41].trailingIcon,"mdc-text-field--invalid":_[1]},_[25]))))&&{class:l},(!d||w[0]&67109888&&c!==(c=Object.entries(_[26]).map(yy).concat([_[10]]).join(" ")))&&{style:c},w[1]&2048&&ys(_[42],["input$","label$","ripple$","outline$","helperLine$"])])),u&&qe(u.update)&&w[0]&2048&&u.update.call(null,{ripple:_[11],unbounded:!1,addClass:_[38],removeClass:_[39],addStyle:_[40]}),h&&qe(h.update)&&w[0]&256&&h.update.call(null,_[8])},i(_){d||(D(m,_),D(i.$$.fragment,_),D(A,_),D(o.$$.fragment,_),D(y,_),d=!0)},o(_){B(m,_),B(i.$$.fragment,_),B(A,_),B(o.$$.fragment,_),B(y,_),d=!1},d(_){_&&U(e),m&&m.d(_),ft(i),A&&A.d(_),ft(o),y&&y.d(_),t[79](null),f=!1,Ke(p)}}}function yL(t){let e,n,i,r,s,o,a,l,c,u,h,d,f,p,g,m,v,A,T=!t[14]&&t[15]!=="outlined"&&cy(t),y=(t[14]||t[15]==="outlined")&&dy(t);r=new lc({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[CL]},$$scope:{ctx:t}}});const N=t[50].default,k=Ce(N,t,t[89],null),_=[AL,SL],w=[];function V(E,L){return E[14]&&typeof E[0]=="string"?0:1}a=V(t),l=w[a]=_[a](t),u=new lc({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[OL]},$$scope:{ctx:t}}});let b=!t[14]&&t[15]!=="outlined"&&t[11]&&gy(t),O=[{class:d=ye(Ze({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||t[17]==null&&!t[41].label,"mdc-text-field--label-floating":t[28]||t[0]!=null&&t[0]!=="","mdc-text-field--with-leading-icon":t[35](t[22])?t[41].leadingIcon:t[22],"mdc-text-field--with-trailing-icon":t[35](t[23])?t[41].trailingIcon:t[23],"mdc-text-field--with-internal-counter":t[14]&&t[41].internalCounter,"mdc-text-field--invalid":t[1]},t[25]))},{style:f=Object.entries(t[26]).map(vy).concat([t[10]]).join(" ")},{for:void 0},ys(t[42],["input$","label$","ripple$","outline$","helperLine$"])],J={};for(let E=0;E<O.length;E+=1)J=j(J,O[E]);return{c(){e=we("label"),T&&T.c(),n=ct(),y&&y.c(),i=ct(),vt(r.$$.fragment),s=ct(),k&&k.c(),o=ct(),l.c(),c=ct(),vt(u.$$.fragment),h=ct(),b&&b.c(),this.h()},l(E){e=Re(E,"LABEL",{class:!0,style:!0,for:!0});var L=ge(e);T&&T.l(L),n=ut(L),y&&y.l(L),i=ut(L),Dt(r.$$.fragment,L),s=ut(L),k&&k.l(L),o=ut(L),l.l(L),c=ut(L),Dt(u.$$.fragment,L),h=ut(L),b&&b.l(L),L.forEach(U),this.h()},h(){ae(e,J)},m(E,L){ie(E,e,L),T&&T.m(e,null),Be(e,n),y&&y.m(e,null),Be(e,i),dt(r,e,null),Be(e,s),k&&k.m(e,null),Be(e,o),w[a].m(e,null),Be(e,c),dt(u,e,null),Be(e,h),b&&b.m(e,null),t[72](e),m=!0,v||(A=[oe(p=br.call(null,e,{ripple:!t[14]&&t[15]==="filled",unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40],eventTarget:t[33],activeTarget:t[33],initPromise:t[37]})),oe(g=Et.call(null,e,t[8])),oe(t[34].call(null,e)),$e(e,"SMUITextfieldLeadingIcon:mount",t[73]),$e(e,"SMUITextfieldLeadingIcon:unmount",t[74]),$e(e,"SMUITextfieldTrailingIcon:mount",t[75]),$e(e,"SMUITextfieldTrailingIcon:unmount",t[76]),$e(e,"SMUITextfieldCharacterCounter:mount",t[77]),$e(e,"SMUITextfieldCharacterCounter:unmount",t[78])],v=!0)},p(E,L){!E[14]&&E[15]!=="outlined"?T?(T.p(E,L),L[0]&49152&&D(T,1)):(T=cy(E),T.c(),D(T,1),T.m(e,n)):T&&(Yt(),B(T,1,1,()=>{T=null}),Jt()),E[14]||E[15]==="outlined"?y?(y.p(E,L),L[0]&49152&&D(y,1)):(y=dy(E),y.c(),D(y,1),y.m(e,i)):y&&(Yt(),B(y,1,1,()=>{y=null}),Jt());const R={};L[2]&134217728&&(R.$$scope={dirty:L,ctx:E}),r.$set(R),k&&k.p&&(!m||L[2]&134217728)&&Ae(k,N,E,E[89],m?Se(N,E[89],L,null):ke(E[89]),null);let G=a;a=V(E),a===G?w[a].p(E,L):(Yt(),B(w[G],1,1,()=>{w[G]=null}),Jt(),l=w[a],l?l.p(E,L):(l=w[a]=_[a](E),l.c()),D(l,1),l.m(e,c));const C={};L[2]&134217728&&(C.$$scope={dirty:L,ctx:E}),u.$set(C),!E[14]&&E[15]!=="outlined"&&E[11]?b?(b.p(E,L),L[0]&51200&&D(b,1)):(b=gy(E),b.c(),D(b,1),b.m(e,null)):b&&(Yt(),B(b,1,1,()=>{b=null}),Jt()),ae(e,J=Ne(O,[(!m||L[0]&314823171|L[1]&1024&&d!==(d=ye(Ze({[E[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":E[12],"mdc-text-field--textarea":E[14],"mdc-text-field--filled":E[15]==="filled","mdc-text-field--outlined":E[15]==="outlined","smui-text-field--standard":E[15]==="standard"&&!E[14],"mdc-text-field--no-label":E[16]||E[17]==null&&!E[41].label,"mdc-text-field--label-floating":E[28]||E[0]!=null&&E[0]!=="","mdc-text-field--with-leading-icon":E[35](E[22])?E[41].leadingIcon:E[22],"mdc-text-field--with-trailing-icon":E[35](E[23])?E[41].trailingIcon:E[23],"mdc-text-field--with-internal-counter":E[14]&&E[41].internalCounter,"mdc-text-field--invalid":E[1]},E[25]))))&&{class:d},(!m||L[0]&67109888&&f!==(f=Object.entries(E[26]).map(vy).concat([E[10]]).join(" ")))&&{style:f},{for:void 0},L[1]&2048&&ys(E[42],["input$","label$","ripple$","outline$","helperLine$"])])),p&&qe(p.update)&&L[0]&49152|L[1]&4&&p.update.call(null,{ripple:!E[14]&&E[15]==="filled",unbounded:!1,addClass:E[38],removeClass:E[39],addStyle:E[40],eventTarget:E[33],activeTarget:E[33],initPromise:E[37]}),g&&qe(g.update)&&L[0]&256&&g.update.call(null,E[8])},i(E){m||(D(T),D(y),D(r.$$.fragment,E),D(k,E),D(l),D(u.$$.fragment,E),D(b),m=!0)},o(E){B(T),B(y),B(r.$$.fragment,E),B(k,E),B(l),B(u.$$.fragment,E),B(b),m=!1},d(E){E&&U(e),T&&T.d(),y&&y.d(),ft(r),k&&k.d(E),w[a].d(),ft(u),b&&b.d(),t[72](null),v=!1,Ke(A)}}}function bL(t){let e;const n=t[50].leadingIcon,i=Ce(n,t,t[89],ey);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&Ae(i,n,r,r[89],e?Se(n,r[89],s,cL):ke(r[89]),ey)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function EL(t){let e;const n=t[50].trailingIcon,i=Ce(n,t,t[89],$v);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&Ae(i,n,r,r[89],e?Se(n,r[89],s,lL):ke(r[89]),$v)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function cy(t){let e,n,i,r=t[15]==="filled"&&uy(),s=!t[16]&&(t[17]!=null||t[41].label)&&hy(t);return{c(){r&&r.c(),e=ct(),s&&s.c(),n=Tt()},l(o){r&&r.l(o),e=ut(o),s&&s.l(o),n=Tt()},m(o,a){r&&r.m(o,a),ie(o,e,a),s&&s.m(o,a),ie(o,n,a),i=!0},p(o,a){o[15]==="filled"?r||(r=uy(),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),!o[16]&&(o[17]!=null||o[41].label)?s?(s.p(o,a),a[0]&196608|a[1]&1024&&D(s,1)):(s=hy(o),s.c(),D(s,1),s.m(n.parentNode,n)):s&&(Yt(),B(s,1,1,()=>{s=null}),Jt())},i(o){i||(D(s),i=!0)},o(o){B(s),i=!1},d(o){r&&r.d(o),o&&U(e),s&&s.d(o),o&&U(n)}}}function uy(t){let e;return{c(){e=we("span"),this.h()},l(n){e=Re(n,"SPAN",{class:!0}),ge(e).forEach(U),this.h()},h(){_t(e,"class","mdc-text-field__ripple")},m(n,i){ie(n,e,i)},d(n){n&&U(e)}}}function hy(t){let e,n;const i=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},hn(t[42],"label$")];let r={$$slots:{default:[IL]},$$scope:{ctx:t}};for(let s=0;s<i.length;s+=1)r=j(r,i[s]);return e=new zv({props:r}),t[51](e),{c(){vt(e.$$.fragment)},l(s){Dt(e.$$.fragment,s)},m(s,o){dt(e,s,o),n=!0},p(s,o){const a=o[0]&268443649|o[1]&2048?Ne(i,[o[0]&268435457&&{floatAbove:s[28]||s[0]!=null&&s[0]!==""},o[0]&8192&&{required:s[13]},i[2],o[1]&2048&&ht(hn(s[42],"label$"))]):{};o[0]&131072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(D(e.$$.fragment,s),n=!0)},o(s){B(e.$$.fragment,s),n=!1},d(s){t[51](null),ft(e,s)}}}function IL(t){let e=(t[17]==null?"":t[17])+"",n,i;const r=t[50].label,s=Ce(r,t,t[89],ly);return{c(){n=bi(e),s&&s.c()},l(o){n=Wr(o,e),s&&s.l(o)},m(o,a){ie(o,n,a),s&&s.m(o,a),i=!0},p(o,a){(!i||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&Qs(n,e),s&&s.p&&(!i||a[2]&134217728)&&Ae(s,r,o,o[89],i?Se(r,o[89],a,_L):ke(o[89]),ly)},i(o){i||(D(s,o),i=!0)},o(o){B(s,o),i=!1},d(o){o&&U(n),s&&s.d(o)}}}function dy(t){let e,n;const i=[{noLabel:t[16]||t[17]==null&&!t[41].label},hn(t[42],"outline$")];let r={$$slots:{default:[TL]},$$scope:{ctx:t}};for(let s=0;s<i.length;s+=1)r=j(r,i[s]);return e=new GO({props:r}),t[53](e),{c(){vt(e.$$.fragment)},l(s){Dt(e.$$.fragment,s)},m(s,o){dt(e,s,o),n=!0},p(s,o){const a=o[0]&196608|o[1]&3072?Ne(i,[o[0]&196608|o[1]&1024&&{noLabel:s[16]||s[17]==null&&!s[41].label},o[1]&2048&&ht(hn(s[42],"outline$"))]):{};o[0]&268640289|o[1]&3072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(D(e.$$.fragment,s),n=!0)},o(s){B(e.$$.fragment,s),n=!1},d(s){t[53](null),ft(e,s)}}}function fy(t){let e,n;const i=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},hn(t[42],"label$")];let r={$$slots:{default:[wL]},$$scope:{ctx:t}};for(let s=0;s<i.length;s+=1)r=j(r,i[s]);return e=new zv({props:r}),t[52](e),{c(){vt(e.$$.fragment)},l(s){Dt(e.$$.fragment,s)},m(s,o){dt(e,s,o),n=!0},p(s,o){const a=o[0]&268443649|o[1]&2048?Ne(i,[o[0]&268435457&&{floatAbove:s[28]||s[0]!=null&&s[0]!==""},o[0]&8192&&{required:s[13]},i[2],o[1]&2048&&ht(hn(s[42],"label$"))]):{};o[0]&131072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(D(e.$$.fragment,s),n=!0)},o(s){B(e.$$.fragment,s),n=!1},d(s){t[52](null),ft(e,s)}}}function wL(t){let e=(t[17]==null?"":t[17])+"",n,i;const r=t[50].label,s=Ce(r,t,t[89],ay);return{c(){n=bi(e),s&&s.c()},l(o){n=Wr(o,e),s&&s.l(o)},m(o,a){ie(o,n,a),s&&s.m(o,a),i=!0},p(o,a){(!i||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&Qs(n,e),s&&s.p&&(!i||a[2]&134217728)&&Ae(s,r,o,o[89],i?Se(r,o[89],a,gL):ke(o[89]),ay)},i(o){i||(D(s,o),i=!0)},o(o){B(s,o),i=!1},d(o){o&&U(n),s&&s.d(o)}}}function TL(t){let e,n,i=!t[16]&&(t[17]!=null||t[41].label)&&fy(t);return{c(){i&&i.c(),e=Tt()},l(r){i&&i.l(r),e=Tt()},m(r,s){i&&i.m(r,s),ie(r,e,s),n=!0},p(r,s){!r[16]&&(r[17]!=null||r[41].label)?i?(i.p(r,s),s[0]&196608|s[1]&1024&&D(i,1)):(i=fy(r),i.c(),D(i,1),i.m(e.parentNode,e)):i&&(Yt(),B(i,1,1,()=>{i=null}),Jt())},i(r){n||(D(i),n=!0)},o(r){B(i),n=!1},d(r){i&&i.d(r),r&&U(e)}}}function CL(t){let e;const n=t[50].leadingIcon,i=Ce(n,t,t[89],oy);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&Ae(i,n,r,r[89],e?Se(n,r[89],s,mL):ke(r[89]),oy)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function SL(t){let e,n,i,r,s,o,a,l,c,u;const h=t[50].prefix,d=Ce(h,t,t[89],ry);let f=t[20]!=null&&py(t);const p=[{type:t[18]},{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},t[16]&&t[17]!=null?{placeholder:t[17]}:{},hn(t[42],"input$")];function g(_){t[63](_)}function m(_){t[64](_)}function v(_){t[65](_)}function A(_){t[66](_)}let T={};for(let _=0;_<p.length;_+=1)T=j(T,p[_]);t[0]!==void 0&&(T.value=t[0]),t[3]!==void 0&&(T.files=t[3]),t[4]!==void 0&&(T.dirty=t[4]),t[1]!==void 0&&(T.invalid=t[1]),i=new nL({props:T}),t[62](i),ce.push(()=>Ii(i,"value",g)),ce.push(()=>Ii(i,"files",m)),ce.push(()=>Ii(i,"dirty",v)),ce.push(()=>Ii(i,"invalid",A)),i.$on("blur",t[67]),i.$on("focus",t[68]),i.$on("blur",t[69]),i.$on("focus",t[70]);let y=t[21]!=null&&my(t);const N=t[50].suffix,k=Ce(N,t,t[89],iy);return{c(){d&&d.c(),e=ct(),f&&f.c(),n=ct(),vt(i.$$.fragment),l=ct(),y&&y.c(),c=ct(),k&&k.c()},l(_){d&&d.l(_),e=ut(_),f&&f.l(_),n=ut(_),Dt(i.$$.fragment,_),l=ut(_),y&&y.l(_),c=ut(_),k&&k.l(_)},m(_,w){d&&d.m(_,w),ie(_,e,w),f&&f.m(_,w),ie(_,n,w),dt(i,_,w),ie(_,l,w),y&&y.m(_,w),ie(_,c,w),k&&k.m(_,w),u=!0},p(_,w){d&&d.p&&(!u||w[2]&134217728)&&Ae(d,h,_,_[89],u?Se(h,_[89],w,fL):ke(_[89]),ry),_[20]!=null?f?(f.p(_,w),w[0]&1048576&&D(f,1)):(f=py(_),f.c(),D(f,1),f.m(n.parentNode,n)):f&&(Yt(),B(f,1,1,()=>{f=null}),Jt());const V=w[0]&135213056|w[1]&2048?Ne(p,[w[0]&262144&&{type:_[18]},w[0]&4096&&{disabled:_[12]},w[0]&8192&&{required:_[13]},w[0]&524288&&{updateInvalid:_[19]},w[0]&134217728&&{"aria-controls":_[27]},w[0]&134217728&&{"aria-describedby":_[27]},w[0]&196608&&ht(_[16]&&_[17]!=null?{placeholder:_[17]}:{}),w[1]&2048&&ht(hn(_[42],"input$"))]):{};!r&&w[0]&1&&(r=!0,V.value=_[0],Ei(()=>r=!1)),!s&&w[0]&8&&(s=!0,V.files=_[3],Ei(()=>s=!1)),!o&&w[0]&16&&(o=!0,V.dirty=_[4],Ei(()=>o=!1)),!a&&w[0]&2&&(a=!0,V.invalid=_[1],Ei(()=>a=!1)),i.$set(V),_[21]!=null?y?(y.p(_,w),w[0]&2097152&&D(y,1)):(y=my(_),y.c(),D(y,1),y.m(c.parentNode,c)):y&&(Yt(),B(y,1,1,()=>{y=null}),Jt()),k&&k.p&&(!u||w[2]&134217728)&&Ae(k,N,_,_[89],u?Se(N,_[89],w,dL):ke(_[89]),iy)},i(_){u||(D(d,_),D(f),D(i.$$.fragment,_),D(y),D(k,_),u=!0)},o(_){B(d,_),B(f),B(i.$$.fragment,_),B(y),B(k,_),u=!1},d(_){d&&d.d(_),_&&U(e),f&&f.d(_),_&&U(n),t[62](null),ft(i,_),_&&U(l),y&&y.d(_),_&&U(c),k&&k.d(_)}}}function AL(t){let e,n,i,r,s,o,a,l;const c=[{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},hn(t[42],"input$")];function u(m){t[55](m)}function h(m){t[56](m)}function d(m){t[57](m)}let f={};for(let m=0;m<c.length;m+=1)f=j(f,c[m]);t[0]!==void 0&&(f.value=t[0]),t[4]!==void 0&&(f.dirty=t[4]),t[1]!==void 0&&(f.invalid=t[1]),n=new sL({props:f}),t[54](n),ce.push(()=>Ii(n,"value",u)),ce.push(()=>Ii(n,"dirty",h)),ce.push(()=>Ii(n,"invalid",d)),n.$on("blur",t[58]),n.$on("focus",t[59]),n.$on("blur",t[60]),n.$on("focus",t[61]);const p=t[50].internalCounter,g=Ce(p,t,t[89],sy);return{c(){e=we("span"),vt(n.$$.fragment),o=ct(),g&&g.c(),this.h()},l(m){e=Re(m,"SPAN",{class:!0});var v=ge(e);Dt(n.$$.fragment,v),o=ut(v),g&&g.l(v),v.forEach(U),this.h()},h(){_t(e,"class",a=ye({"mdc-text-field__resizer":!("input$resizable"in t[42])||t[42].input$resizable}))},m(m,v){ie(m,e,v),dt(n,e,null),Be(e,o),g&&g.m(e,null),l=!0},p(m,v){const A=v[0]&134754304|v[1]&2048?Ne(c,[v[0]&4096&&{disabled:m[12]},v[0]&8192&&{required:m[13]},v[0]&524288&&{updateInvalid:m[19]},v[0]&134217728&&{"aria-controls":m[27]},v[0]&134217728&&{"aria-describedby":m[27]},v[1]&2048&&ht(hn(m[42],"input$"))]):{};!i&&v[0]&1&&(i=!0,A.value=m[0],Ei(()=>i=!1)),!r&&v[0]&16&&(r=!0,A.dirty=m[4],Ei(()=>r=!1)),!s&&v[0]&2&&(s=!0,A.invalid=m[1],Ei(()=>s=!1)),n.$set(A),g&&g.p&&(!l||v[2]&134217728)&&Ae(g,p,m,m[89],l?Se(p,m[89],v,pL):ke(m[89]),sy),(!l||v[1]&2048&&a!==(a=ye({"mdc-text-field__resizer":!("input$resizable"in m[42])||m[42].input$resizable})))&&_t(e,"class",a)},i(m){l||(D(n.$$.fragment,m),D(g,m),l=!0)},o(m){B(n.$$.fragment,m),B(g,m),l=!1},d(m){m&&U(e),t[54](null),ft(n),g&&g.d(m)}}}function py(t){let e,n;return e=new JO({props:{$$slots:{default:[kL]},$$scope:{ctx:t}}}),{c(){vt(e.$$.fragment)},l(i){Dt(e.$$.fragment,i)},m(i,r){dt(e,i,r),n=!0},p(i,r){const s={};r[0]&1048576|r[2]&134217728&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){n||(D(e.$$.fragment,i),n=!0)},o(i){B(e.$$.fragment,i),n=!1},d(i){ft(e,i)}}}function kL(t){let e;return{c(){e=bi(t[20])},l(n){e=Wr(n,t[20])},m(n,i){ie(n,e,i)},p(n,i){i[0]&1048576&&Qs(e,n[20])},d(n){n&&U(e)}}}function my(t){let e,n;return e=new ZO({props:{$$slots:{default:[RL]},$$scope:{ctx:t}}}),{c(){vt(e.$$.fragment)},l(i){Dt(e.$$.fragment,i)},m(i,r){dt(e,i,r),n=!0},p(i,r){const s={};r[0]&2097152|r[2]&134217728&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){n||(D(e.$$.fragment,i),n=!0)},o(i){B(e.$$.fragment,i),n=!1},d(i){ft(e,i)}}}function RL(t){let e;return{c(){e=bi(t[21])},l(n){e=Wr(n,t[21])},m(n,i){ie(n,e,i)},p(n,i){i[0]&2097152&&Qs(e,n[21])},d(n){n&&U(e)}}}function OL(t){let e;const n=t[50].trailingIcon,i=Ce(n,t,t[89],ny);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&Ae(i,n,r,r[89],e?Se(n,r[89],s,hL):ke(r[89]),ny)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function gy(t){let e,n;const i=[hn(t[42],"ripple$")];let r={};for(let s=0;s<i.length;s+=1)r=j(r,i[s]);return e=new HO({props:r}),t[71](e),{c(){vt(e.$$.fragment)},l(s){Dt(e.$$.fragment,s)},m(s,o){dt(e,s,o),n=!0},p(s,o){const a=o[1]&2048?Ne(i,[ht(hn(s[42],"ripple$"))]):{};e.$set(a)},i(s){n||(D(e.$$.fragment,s),n=!0)},o(s){B(e.$$.fragment,s),n=!1},d(s){t[71](null),ft(e,s)}}}function _y(t){let e,n;const i=[hn(t[42],"helperLine$")];let r={$$slots:{default:[LL]},$$scope:{ctx:t}};for(let s=0;s<i.length;s+=1)r=j(r,i[s]);return e=new YO({props:r}),e.$on("SMUITextfieldHelperText:id",t[84]),e.$on("SMUITextfieldHelperText:mount",t[85]),e.$on("SMUITextfieldHelperText:unmount",t[86]),e.$on("SMUITextfieldCharacterCounter:mount",t[87]),e.$on("SMUITextfieldCharacterCounter:unmount",t[88]),{c(){vt(e.$$.fragment)},l(s){Dt(e.$$.fragment,s)},m(s,o){dt(e,s,o),n=!0},p(s,o){const a=o[1]&2048?Ne(i,[ht(hn(s[42],"helperLine$"))]):{};o[2]&134217728&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(D(e.$$.fragment,s),n=!0)},o(s){B(e.$$.fragment,s),n=!1},d(s){ft(e,s)}}}function LL(t){let e;const n=t[50].helper,i=Ce(n,t,t[89],Jv);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&Ae(i,n,r,r[89],e?Se(n,r[89],s,oL):ke(r[89]),Jv)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function ML(t){let e,n,i,r,s;const o=[yL,vL],a=[];function l(u,h){return u[36]?0:1}e=l(t),n=a[e]=o[e](t);let c=t[41].helper&&_y(t);return{c(){n.c(),i=ct(),c&&c.c(),r=Tt()},l(u){n.l(u),i=ut(u),c&&c.l(u),r=Tt()},m(u,h){a[e].m(u,h),ie(u,i,h),c&&c.m(u,h),ie(u,r,h),s=!0},p(u,h){n.p(u,h),u[41].helper?c?(c.p(u,h),h[1]&1024&&D(c,1)):(c=_y(u),c.c(),D(c,1),c.m(r.parentNode,r)):c&&(Yt(),B(c,1,1,()=>{c=null}),Jt())},i(u){s||(D(n),D(c),s=!0)},o(u){B(n),B(c),s=!1},d(u){a[e].d(u),u&&U(i),c&&c.d(u),u&&U(r)}}}const vy=([t,e])=>`${t}: ${e};`,yy=([t,e])=>`${t}: ${e};`;function NL(t,e,n){let i;const r=["use","class","style","ripple","disabled","required","textarea","variant","noLabel","label","type","value","files","invalid","updateInvalid","dirty","prefix","suffix","validateOnValueChange","useNativeValidation","withLeadingIcon","withTrailingIcon","input","floatingLabel","lineRipple","notchedOutline","focus","layout","getElement"];let s=ne(e,r),{$$slots:o={},$$scope:a}=e;const l=r0(o),{applyPassive:c}=Ov,u=tt(Fe());let h=()=>{};function d(I){return I===h}let{use:f=[]}=e,{class:p=""}=e,{style:g=""}=e,{ripple:m=!0}=e,{disabled:v=!1}=e,{required:A=!1}=e,{textarea:T=!1}=e,{variant:y=T?"outlined":"standard"}=e,{noLabel:N=!1}=e,{label:k=void 0}=e,{type:_="text"}=e,{value:w=h}=e,{files:V=h}=e;const b=!d(w)||!d(V);d(w)&&(w=void 0),d(V)&&(V=null);let{invalid:O=h}=e,{updateInvalid:J=d(O)}=e;d(O)&&(O=!1);let{dirty:E=!1}=e,{prefix:L=void 0}=e,{suffix:R=void 0}=e,{validateOnValueChange:G=J}=e,{useNativeValidation:C=J}=e,{withLeadingIcon:S=h}=e,{withTrailingIcon:z=h}=e,{input:H=void 0}=e,{floatingLabel:X=void 0}=e,{lineRipple:ue=void 0}=e,{notchedOutline:q=void 0}=e,Me,be,me={},Ie={},K,he=!1,at=Qt("SMUI:addLayoutListener"),sn,Nt,x=new Promise(I=>Nt=I),pe,lt,on,Vn,yi=w;at&&(sn=at(La)),Ln(()=>{if(n(48,be=new DO({addClass:Ks,removeClass:Oa,hasClass:au,registerTextFieldInteractionHandler:(I,Rt)=>qr().addEventListener(I,Rt),deregisterTextFieldInteractionHandler:(I,Rt)=>qr().removeEventListener(I,Rt),registerValidationAttributeChangeHandler:I=>{const Rt=du=>du.map(fu=>fu.attributeName).filter(fu=>fu),fp=new MutationObserver(du=>{C&&I(Rt(du))}),Jw={attributes:!0};return H&&fp.observe(H.getElement(),Jw),fp},deregisterValidationAttributeChangeHandler:I=>{I.disconnect()},getNativeInput:()=>{var I;return(I=H==null?void 0:H.getElement())!==null&&I!==void 0?I:null},setInputAttr:(I,Rt)=>{H==null||H.addAttr(I,Rt)},removeInputAttr:I=>{H==null||H.removeAttr(I)},isFocused:()=>document.activeElement===(H==null?void 0:H.getElement()),registerInputInteractionHandler:(I,Rt)=>{H==null||H.getElement().addEventListener(I,Rt,c())},deregisterInputInteractionHandler:(I,Rt)=>{H==null||H.getElement().removeEventListener(I,Rt,c())},floatLabel:I=>X&&X.float(I),getLabelWidth:()=>X?X.getWidth():0,hasLabel:()=>!!X,shakeLabel:I=>X&&X.shake(I),setLabelRequired:I=>X&&X.setRequired(I),activateLineRipple:()=>ue&&ue.activate(),deactivateLineRipple:()=>ue&&ue.deactivate(),setLineRippleTransformOrigin:I=>ue&&ue.setRippleCenter(I),closeOutline:()=>q&&q.closeNotch(),hasOutline:()=>!!q,notchOutline:I=>q&&q.notch(I)},{get helperText(){return on},get characterCounter(){return Vn},get leadingIcon(){return pe},get trailingIcon(){return lt}})),b){if(H==null)throw new Error("SMUI Textfield initialized without Input component.");be.init()}else p0().then(()=>{if(H==null)throw new Error("SMUI Textfield initialized without Input component.");be.init()});return Nt(),()=>{be.destroy()}}),Ji(()=>{sn&&sn()});function au(I){var Rt;return I in me?(Rt=me[I])!==null&&Rt!==void 0?Rt:null:qr().classList.contains(I)}function Ks(I){me[I]||n(25,me[I]=!0,me)}function Oa(I){(!(I in me)||me[I])&&n(25,me[I]=!1,me)}function Yn(I,Rt){Ie[I]!=Rt&&(Rt===""||Rt==null?(delete Ie[I],n(26,Ie)):n(26,Ie[I]=Rt,Ie))}function lu(){H==null||H.focus()}function La(){if(be){const I=be.shouldFloat;be.notchOutline(I)}}function qr(){return Me}function cu(I){ce[I?"unshift":"push"](()=>{X=I,n(5,X)})}function uu(I){ce[I?"unshift":"push"](()=>{X=I,n(5,X)})}function P(I){ce[I?"unshift":"push"](()=>{q=I,n(7,q)})}function re(I){ce[I?"unshift":"push"](()=>{H=I,n(2,H)})}function te(I){w=I,n(0,w)}function it(I){E=I,n(4,E)}function Yi(I){O=I,n(1,O),n(48,be),n(19,J)}const hu=()=>n(28,he=!1),Ew=()=>n(28,he=!0),Iw=I=>et(Me,"blur",I),ww=I=>et(Me,"focus",I);function Tw(I){ce[I?"unshift":"push"](()=>{H=I,n(2,H)})}function Cw(I){w=I,n(0,w)}function Sw(I){V=I,n(3,V)}function Aw(I){E=I,n(4,E)}function kw(I){O=I,n(1,O),n(48,be),n(19,J)}const Rw=()=>n(28,he=!1),Ow=()=>n(28,he=!0),Lw=I=>et(Me,"blur",I),Mw=I=>et(Me,"focus",I);function Nw(I){ce[I?"unshift":"push"](()=>{ue=I,n(6,ue)})}function Pw(I){ce[I?"unshift":"push"](()=>{Me=I,n(24,Me)})}const Dw=I=>n(29,pe=I.detail),Fw=()=>n(29,pe=void 0),xw=I=>n(30,lt=I.detail),Uw=()=>n(30,lt=void 0),jw=I=>n(32,Vn=I.detail),Vw=()=>n(32,Vn=void 0);function Bw(I){ce[I?"unshift":"push"](()=>{Me=I,n(24,Me)})}const Hw=I=>n(29,pe=I.detail),qw=()=>n(29,pe=void 0),Ww=I=>n(30,lt=I.detail),Gw=()=>n(30,lt=void 0),zw=I=>n(27,K=I.detail),Kw=I=>n(31,on=I.detail),Xw=()=>{n(27,K=void 0),n(31,on=void 0)},Qw=I=>n(32,Vn=I.detail),Yw=()=>n(32,Vn=void 0);return t.$$set=I=>{e=j(j({},e),Xe(I)),n(42,s=ne(e,r)),"use"in I&&n(8,f=I.use),"class"in I&&n(9,p=I.class),"style"in I&&n(10,g=I.style),"ripple"in I&&n(11,m=I.ripple),"disabled"in I&&n(12,v=I.disabled),"required"in I&&n(13,A=I.required),"textarea"in I&&n(14,T=I.textarea),"variant"in I&&n(15,y=I.variant),"noLabel"in I&&n(16,N=I.noLabel),"label"in I&&n(17,k=I.label),"type"in I&&n(18,_=I.type),"value"in I&&n(0,w=I.value),"files"in I&&n(3,V=I.files),"invalid"in I&&n(1,O=I.invalid),"updateInvalid"in I&&n(19,J=I.updateInvalid),"dirty"in I&&n(4,E=I.dirty),"prefix"in I&&n(20,L=I.prefix),"suffix"in I&&n(21,R=I.suffix),"validateOnValueChange"in I&&n(43,G=I.validateOnValueChange),"useNativeValidation"in I&&n(44,C=I.useNativeValidation),"withLeadingIcon"in I&&n(22,S=I.withLeadingIcon),"withTrailingIcon"in I&&n(23,z=I.withTrailingIcon),"input"in I&&n(2,H=I.input),"floatingLabel"in I&&n(5,X=I.floatingLabel),"lineRipple"in I&&n(6,ue=I.lineRipple),"notchedOutline"in I&&n(7,q=I.notchedOutline),"$$scope"in I&&n(89,a=I.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&4&&n(33,i=H&&H.getElement()),t.$$.dirty[0]&524290|t.$$.dirty[1]&131072&&be&&be.isValid()!==!O&&(J?n(1,O=!be.isValid()):be.setValid(!O)),t.$$.dirty[1]&135168&&be&&be.getValidateOnValueChange()!==G&&be.setValidateOnValueChange(d(G)?!1:G),t.$$.dirty[1]&139264&&be&&be.setUseNativeValidation(d(C)?!0:C),t.$$.dirty[0]&4096|t.$$.dirty[1]&131072&&be&&be.setDisabled(v),t.$$.dirty[0]&1|t.$$.dirty[1]&393216&&be&&b&&yi!==w){n(49,yi=w);const I=`${w}`;be.getValue()!==I&&be.setValue(I)}},[w,O,H,V,E,X,ue,q,f,p,g,m,v,A,T,y,N,k,_,J,L,R,S,z,Me,me,Ie,K,he,pe,lt,on,Vn,i,u,d,b,x,Ks,Oa,Yn,l,s,G,C,lu,La,qr,be,yi,o,cu,uu,P,re,te,it,Yi,hu,Ew,Iw,ww,Tw,Cw,Sw,Aw,kw,Rw,Ow,Lw,Mw,Nw,Pw,Dw,Fw,xw,Uw,jw,Vw,Bw,Hw,qw,Ww,Gw,zw,Kw,Xw,Qw,Yw,a]}class Zj extends Ye{constructor(e){super();Qe(this,e,NL,ML,We,{use:8,class:9,style:10,ripple:11,disabled:12,required:13,textarea:14,variant:15,noLabel:16,label:17,type:18,value:0,files:3,invalid:1,updateInvalid:19,dirty:4,prefix:20,suffix:21,validateOnValueChange:43,useNativeValidation:44,withLeadingIcon:22,withTrailingIcon:23,input:2,floatingLabel:5,lineRipple:6,notchedOutline:7,focus:45,layout:46,getElement:47},null,[-1,-1,-1,-1])}get focus(){return this.$$.ctx[45]}get layout(){return this.$$.ctx[46]}get getElement(){return this.$$.ctx[47]}}/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var wr;(function(t){t.PROCESSING="mdc-switch--processing",t.SELECTED="mdc-switch--selected",t.UNSELECTED="mdc-switch--unselected"})(wr||(wr={}));var by;(function(t){t.RIPPLE=".mdc-switch__ripple"})(by||(by={}));/**
 * @license
 * Copyright 2021 Google Inc.
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
 */function PL(t,e,n){var i=DL(t,e),r=i.getObservers(e);return r.push(n),function(){r.splice(r.indexOf(n),1)}}var cc=new WeakMap;function DL(t,e){var n=new Map;cc.has(t)||cc.set(t,{isEnabled:!0,getObservers:function(c){var u=n.get(c)||[];return n.has(c)||n.set(c,u),u},installedProperties:new Set});var i=cc.get(t);if(i.installedProperties.has(e))return i;var r=FL(t,e)||{configurable:!0,enumerable:!0,value:t[e],writable:!0},s=yt({},r),o=r.get,a=r.set;if("value"in r){delete s.value,delete s.writable;var l=r.value;o=function(){return l},r.writable&&(a=function(c){l=c})}return o&&(s.get=function(){return o.call(this)}),a&&(s.set=function(c){var u,h,d=o?o.call(this):c;if(a.call(this,c),i.isEnabled&&(!o||c!==d))try{for(var f=Mn(i.getObservers(e)),p=f.next();!p.done;p=f.next()){var g=p.value;g(c,d)}}catch(m){u={error:m}}finally{try{p&&!p.done&&(h=f.return)&&h.call(f)}finally{if(u)throw u.error}}}),i.installedProperties.add(e),Object.defineProperty(t,e,s),i}function FL(t,e){for(var n=t,i;n&&(i=Object.getOwnPropertyDescriptor(n,e),!i);)n=Object.getPrototypeOf(n);return i}function xL(t,e){var n=cc.get(t);n&&(n.isEnabled=e)}/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var UL=function(t){wn(e,t);function e(n){var i=t.call(this,n)||this;return i.unobserves=new Set,i}return e.prototype.destroy=function(){t.prototype.destroy.call(this),this.unobserve()},e.prototype.observe=function(n,i){var r,s,o=this,a=[];try{for(var l=Mn(Object.keys(i)),c=l.next();!c.done;c=l.next()){var u=c.value,h=i[u].bind(this);a.push(this.observeProperty(n,u,h))}}catch(f){r={error:f}}finally{try{c&&!c.done&&(s=l.return)&&s.call(l)}finally{if(r)throw r.error}}var d=function(){var f,p;try{for(var g=Mn(a),m=g.next();!m.done;m=g.next()){var v=m.value;v()}}catch(A){f={error:A}}finally{try{m&&!m.done&&(p=g.return)&&p.call(g)}finally{if(f)throw f.error}}o.unobserves.delete(d)};return this.unobserves.add(d),d},e.prototype.observeProperty=function(n,i,r){return PL(n,i,r)},e.prototype.setObserversEnabled=function(n,i){xL(n,i)},e.prototype.unobserve=function(){var n,i;try{for(var r=Mn(wT([],IT(this.unobserves))),s=r.next();!s.done;s=r.next()){var o=s.value;o()}}catch(a){n={error:a}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},e}(zn);/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var jL=function(t){wn(e,t);function e(n){var i=t.call(this,n)||this;return i.handleClick=i.handleClick.bind(i),i}return e.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},e.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},e.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},e}(UL),VL=function(t){wn(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.init=function(){t.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},e.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(wr.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(wr.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},e.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},e.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,wr.PROCESSING)},e.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,wr.SELECTED),this.toggleClass(!this.adapter.state.selected,wr.UNSELECTED)},e.prototype.toggleClass=function(n,i){n?this.adapter.addClass(i):this.adapter.removeClass(i)},e}(jL);function Ey(t){let e,n,i,r,s,o,a,l,c,u,h=[{class:a=ye({[t[7]]:!0,"mdc-switch__icons":!0})},hn(t[18],"icons$")],d={};for(let f=0;f<h.length;f+=1)d=j(d,h[f]);return{c(){e=we("div"),n=Xs("svg"),i=Xs("path"),r=ct(),s=Xs("svg"),o=Xs("path"),this.h()},l(f){e=Re(f,"DIV",{class:!0});var p=ge(e);n=Pa(p,"svg",{class:!0,viewBox:!0});var g=ge(n);i=Pa(g,"path",{d:!0}),ge(i).forEach(U),g.forEach(U),r=ut(p),s=Pa(p,"svg",{class:!0,viewBox:!0});var m=ge(s);o=Pa(m,"path",{d:!0}),ge(o).forEach(U),m.forEach(U),p.forEach(U),this.h()},h(){_t(i,"d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"),_t(n,"class","mdc-switch__icon mdc-switch__icon--on"),_t(n,"viewBox","0 0 24 24"),_t(o,"d","M20 13H4v-2h16v2z"),_t(s,"class","mdc-switch__icon mdc-switch__icon--off"),_t(s,"viewBox","0 0 24 24"),ae(e,d)},m(f,p){ie(f,e,p),Be(e,n),Be(n,i),Be(e,r),Be(e,s),Be(s,o),c||(u=oe(l=Et.call(null,e,t[6])),c=!0)},p(f,p){ae(e,d=Ne(h,[p[0]&128&&a!==(a=ye({[f[7]]:!0,"mdc-switch__icons":!0}))&&{class:a},p[0]&262144&&hn(f[18],"icons$")])),l&&qe(l.update)&&p[0]&64&&l.update.call(null,f[6])},d(f){f&&U(e),c=!1,u()}}}function BL(t){let e,n,i,r,s,o,a,l,c,u,h,d,f,p,g,m,v=t[5]&&Ey(t),A=[{class:h=ye(Ze({[t[3]]:!0,"mdc-switch":!0,"mdc-switch--unselected":!t[9],"mdc-switch--selected":t[9],"mdc-switch--processing":t[1],"smui-switch--color-secondary":t[4]==="secondary"},t[11]))},{type:"button"},{role:"switch"},{"aria-checked":d=t[9]?"true":"false"},{disabled:t[0]},t[15],ys(t[18],["icons$"])],T={};for(let y=0;y<A.length;y+=1)T=j(T,A[y]);return{c(){e=we("button"),n=we("div"),i=ct(),r=we("div"),s=we("div"),o=we("div"),a=we("div"),l=ct(),c=we("div"),u=ct(),v&&v.c(),this.h()},l(y){e=Re(y,"BUTTON",{class:!0,type:!0,role:!0,"aria-checked":!0});var N=ge(e);n=Re(N,"DIV",{class:!0}),ge(n).forEach(U),i=ut(N),r=Re(N,"DIV",{class:!0});var k=ge(r);s=Re(k,"DIV",{class:!0});var _=ge(s);o=Re(_,"DIV",{class:!0});var w=ge(o);a=Re(w,"DIV",{class:!0}),ge(a).forEach(U),w.forEach(U),l=ut(_),c=Re(_,"DIV",{class:!0}),ge(c).forEach(U),u=ut(_),v&&v.l(_),_.forEach(U),k.forEach(U),N.forEach(U),this.h()},h(){_t(n,"class","mdc-switch__track"),_t(a,"class","mdc-elevation-overlay"),_t(o,"class","mdc-switch__shadow"),_t(c,"class","mdc-switch__ripple"),_t(s,"class","mdc-switch__handle"),_t(r,"class","mdc-switch__handle-track"),ae(e,T)},m(y,N){ie(y,e,N),Be(e,n),Be(e,i),Be(e,r),Be(r,s),Be(s,o),Be(o,a),Be(s,l),Be(s,c),t[27](c),Be(s,u),v&&v.m(s,null),e.autofocus&&e.focus(),t[28](e),g||(m=[oe(f=Et.call(null,e,t[2])),oe(t[14].call(null,e)),oe(p=br.call(null,e,{unbounded:!0,color:t[4],active:t[13],rippleElement:t[12],disabled:t[0],addClass:t[16],removeClass:t[17]})),$e(e,"click",t[29])],g=!0)},p(y,N){y[5]?v?v.p(y,N):(v=Ey(y),v.c(),v.m(s,null)):v&&(v.d(1),v=null),ae(e,T=Ne(A,[N[0]&2586&&h!==(h=ye(Ze({[y[3]]:!0,"mdc-switch":!0,"mdc-switch--unselected":!y[9],"mdc-switch--selected":y[9],"mdc-switch--processing":y[1],"smui-switch--color-secondary":y[4]==="secondary"},y[11])))&&{class:h},{type:"button"},{role:"switch"},N[0]&512&&d!==(d=y[9]?"true":"false")&&{"aria-checked":d},N[0]&1&&{disabled:y[0]},y[15],N[0]&262144&&ys(y[18],["icons$"])])),f&&qe(f.update)&&N[0]&4&&f.update.call(null,y[2]),p&&qe(p.update)&&N[0]&12305&&p.update.call(null,{unbounded:!0,color:y[4],active:y[13],rippleElement:y[12],disabled:y[0],addClass:y[16],removeClass:y[17]})},i:Xt,o:Xt,d(y){y&&U(e),t[27](null),v&&v.d(),t[28](null),g=!1,Ke(m)}}}function HL(t,e,n){const i=["use","class","disabled","color","group","checked","value","processing","icons","icons$use","icons$class","getId","getElement"];let r=ne(e,i);var s;const o=tt(Fe());let a=()=>{};function l(q){return q===a}let{use:c=[]}=e,{class:u=""}=e,{disabled:h=!1}=e,{color:d="primary"}=e,{group:f=a}=e,{checked:p=a}=e,{value:g=null}=e,{processing:m=!1}=e,{icons:v=!0}=e,{icons$use:A=[]}=e,{icons$class:T=""}=e,y,N,k={},_,w=!1,V=(s=Qt("SMUI:generic:input:props"))!==null&&s!==void 0?s:{},b=l(f)?l(p)?!1:p:f.indexOf(g)!==-1,O={get disabled(){return h},set disabled(q){n(0,h=q)},get processing(){return m},set processing(q){n(1,m=q)},get selected(){return b},set selected(q){n(9,b=q)}},J=p,E=l(f)?[]:[...f],L=b;Ln(()=>{n(10,N=new VL({addClass:G,hasClass:R,isDisabled:()=>h,removeClass:C,setAriaChecked:()=>{},setDisabled:Me=>{n(0,h=Me)},state:O}));const q={get element(){return z()},get checked(){return b},set checked(Me){b!==Me&&(O.selected=Me,y&&et(y,"SMUISwitch:change",{selected:Me,value:g}))},activateRipple(){h||n(13,w=!0)},deactivateRipple(){n(13,w=!1)}};return et(y,"SMUIGenericInput:mount",q),N.init(),N.initFromDOM(),()=>{et(y,"SMUIGenericInput:unmount",q),N.destroy()}});function R(q){return q in k?k[q]:z().classList.contains(q)}function G(q){k[q]||n(11,k[q]=!0,k)}function C(q){(!(q in k)||k[q])&&n(11,k[q]=!1,k)}function S(){return V&&V.id}function z(){return y}function H(q){ce[q?"unshift":"push"](()=>{_=q,n(12,_)})}function X(q){ce[q?"unshift":"push"](()=>{y=q,n(8,y)})}const ue=()=>N&&N.handleClick();return t.$$set=q=>{e=j(j({},e),Xe(q)),n(18,r=ne(e,i)),"use"in q&&n(2,c=q.use),"class"in q&&n(3,u=q.class),"disabled"in q&&n(0,h=q.disabled),"color"in q&&n(4,d=q.color),"group"in q&&n(19,f=q.group),"checked"in q&&n(20,p=q.checked),"value"in q&&n(21,g=q.value),"processing"in q&&n(1,m=q.processing),"icons"in q&&n(5,v=q.icons),"icons$use"in q&&n(6,A=q.icons$use),"icons$class"in q&&n(7,T=q.icons$class)},t.$$.update=()=>{if(t.$$.dirty[0]&121111296){let q=!1;if(!l(f))if(L!==b){const Me=f.indexOf(g);b&&Me===-1?(f.push(g),n(19,f),n(26,L),n(9,b),n(21,g),n(25,E),n(20,p),n(24,J),n(8,y)):!b&&Me!==-1&&(f.splice(Me,1),n(19,f),n(26,L),n(9,b),n(21,g),n(25,E),n(20,p),n(24,J),n(8,y)),q=!0}else{const Me=E.indexOf(g),be=f.indexOf(g);Me>-1&&be===-1?O.selected=!1:be>-1&&Me===-1&&(O.selected=!0)}l(p)?L!==b&&(q=!0):p!==b&&(p===J?(n(20,p=b),q=!0):O.selected=p),n(24,J=p),n(25,E=l(f)?[]:[...f]),n(26,L=b),q&&y&&et(y,"SMUISwitch:change",{selected:b,value:g})}},[h,m,c,u,d,v,A,T,y,b,N,k,_,w,o,V,G,C,r,f,p,g,S,z,J,E,L,H,X,ue]}class $j extends Ye{constructor(e){super();Qe(this,e,HL,BL,We,{use:2,class:3,disabled:0,color:4,group:19,checked:20,value:21,processing:1,icons:5,icons$use:6,icons$class:7,getId:22,getElement:23},null,[-1,-1])}get getId(){return this.$$.ctx[22]}get getElement(){return this.$$.ctx[23]}}/**
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
 */var qL={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},WL={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},Yo={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},Ct;(function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"})(Ct||(Ct={}));var bs;(function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"})(bs||(bs={}));/**
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
 */var ji,fi,Ee={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};ji={},ji[""+Ee.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",ji[""+Ee.LIST_ITEM_CLASS]="mdc-list-item",ji[""+Ee.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",ji[""+Ee.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",ji[""+Ee.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",ji[""+Ee.ROOT]="mdc-list";var Es=(fi={},fi[""+Ee.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",fi[""+Ee.LIST_ITEM_CLASS]="mdc-deprecated-list-item",fi[""+Ee.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",fi[""+Ee.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",fi[""+Ee.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",fi[""+Ee.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",fi[""+Ee.ROOT]="mdc-deprecated-list",fi),Vi={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+Ee.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+Ee.LIST_ITEM_CLASS+` a,
    .`+Es[Ee.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Es[Ee.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+Ee.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+Ee.LIST_ITEM_CLASS+` a,
    .`+Ee.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+Ee.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+Es[Ee.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Es[Ee.LIST_ITEM_CLASS]+` a,
    .`+Es[Ee.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+Es[Ee.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},Ut={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};/**
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
 */var GL=["input","button","textarea","select"],Tr=function(t){var e=t.target;if(!!e){var n=(""+e.tagName).toLowerCase();GL.indexOf(n)===-1&&t.preventDefault()}};/**
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
 */function zL(){var t={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return t}function KL(t,e){for(var n=new Map,i=0;i<t;i++){var r=e(i).trim();if(!!r){var s=r[0].toLowerCase();n.has(s)||n.set(s,[]),n.get(s).push({text:r.toLowerCase(),index:i})}}return n.forEach(function(o){o.sort(function(a,l){return a.index-l.index})}),n}function Ld(t,e){var n=t.nextChar,i=t.focusItemAtIndex,r=t.sortedIndexByFirstChar,s=t.focusedItemIndex,o=t.skipFocus,a=t.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){wy(e)},Ut.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+n;var l;return e.typeaheadBuffer.length===1?l=XL(r,s,a,e):l=QL(r,a,e),l!==-1&&!o&&i(l),l}function XL(t,e,n,i){var r=i.typeaheadBuffer[0],s=t.get(r);if(!s)return-1;if(r===i.currentFirstChar&&s[i.sortedIndexCursor].index===e){i.sortedIndexCursor=(i.sortedIndexCursor+1)%s.length;var o=s[i.sortedIndexCursor].index;if(!n(o))return o}i.currentFirstChar=r;var a=-1,l;for(l=0;l<s.length;l++)if(!n(s[l].index)){a=l;break}for(;l<s.length;l++)if(s[l].index>e&&!n(s[l].index)){a=l;break}return a!==-1?(i.sortedIndexCursor=a,s[i.sortedIndexCursor].index):-1}function QL(t,e,n){var i=n.typeaheadBuffer[0],r=t.get(i);if(!r)return-1;var s=r[n.sortedIndexCursor];if(s.text.lastIndexOf(n.typeaheadBuffer,0)===0&&!e(s.index))return s.index;for(var o=(n.sortedIndexCursor+1)%r.length,a=-1;o!==n.sortedIndexCursor;){var l=r[o],c=l.text.lastIndexOf(n.typeaheadBuffer,0)===0,u=!e(l.index);if(c&&u){a=o;break}o=(o+1)%r.length}return a!==-1?(n.sortedIndexCursor=a,r[n.sortedIndexCursor].index):-1}function Iy(t){return t.typeaheadBuffer.length>0}function wy(t){t.typeaheadBuffer=""}function Ty(t,e){var n=t.event,i=t.isTargetListItem,r=t.focusedItemIndex,s=t.focusItemAtIndex,o=t.sortedIndexByFirstChar,a=t.isItemAtIndexDisabled,l=dn(n)==="ArrowLeft",c=dn(n)==="ArrowUp",u=dn(n)==="ArrowRight",h=dn(n)==="ArrowDown",d=dn(n)==="Home",f=dn(n)==="End",p=dn(n)==="Enter",g=dn(n)==="Spacebar";if(n.ctrlKey||n.metaKey||l||c||u||h||d||f||p)return-1;var m=!g&&n.key.length===1;if(m){Tr(n);var v={focusItemAtIndex:s,focusedItemIndex:r,nextChar:n.key.toLowerCase(),sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return Ld(v,e)}if(!g)return-1;i&&Tr(n);var A=i&&Iy(e);if(A){var v={focusItemAtIndex:s,focusedItemIndex:r,nextChar:" ",sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return Ld(v,e)}return-1}/**
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
 */function YL(t){return t instanceof Array}var JL=function(t){wn(e,t);function e(n){var i=t.call(this,yt(yt({},e.defaultAdapter),n))||this;return i.wrapFocus=!1,i.isVertical=!0,i.isSingleSelectionList=!1,i.selectedIndex=Ut.UNSET_INDEX,i.focusedItemIndex=Ut.UNSET_INDEX,i.useActivatedClass=!1,i.useSelectedAttr=!1,i.ariaCurrentAttrValue=null,i.isCheckboxList=!1,i.isRadioList=!1,i.hasTypeahead=!1,i.typeaheadState=zL(),i.sortedIndexByFirstChar=new Map,i}return Object.defineProperty(e,"strings",{get:function(){return Vi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Ee},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ut},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(n){this.wrapFocus=n},e.prototype.setVerticalOrientation=function(n){this.isVertical=n},e.prototype.setSingleSelection=function(n){this.isSingleSelectionList=n,n&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.maybeInitializeSingleSelection=function(){var n=this.getSelectedIndexFromDOM();if(n!==Ut.UNSET_INDEX){var i=this.adapter.listItemAtIndexHasClass(n,Ee.LIST_ITEM_ACTIVATED_CLASS);i&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=n}},e.prototype.getSelectedIndexFromDOM=function(){for(var n=Ut.UNSET_INDEX,i=this.adapter.getListItemCount(),r=0;r<i;r++){var s=this.adapter.listItemAtIndexHasClass(r,Ee.LIST_ITEM_SELECTED_CLASS),o=this.adapter.listItemAtIndexHasClass(r,Ee.LIST_ITEM_ACTIVATED_CLASS);if(!!(s||o)){n=r;break}}return n},e.prototype.setHasTypeahead=function(n){this.hasTypeahead=n,n&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&Iy(this.typeaheadState)},e.prototype.setUseActivatedClass=function(n){this.useActivatedClass=n},e.prototype.setUseSelectedAttribute=function(n){this.useSelectedAttr=n},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(n,i){var r=i===void 0?{}:i,s=r.forceUpdate;!this.isIndexValid(n)||(this.isCheckboxList?this.setCheckboxAtIndex(n):this.isRadioList?this.setRadioAtIndex(n):this.setSingleSelectionAtIndex(n,{forceUpdate:s}))},e.prototype.handleFocusIn=function(n){n>=0&&(this.focusedItemIndex=n,this.adapter.setAttributeForElementIndex(n,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(n,"0"))},e.prototype.handleFocusOut=function(n){var i=this;n>=0&&(this.adapter.setAttributeForElementIndex(n,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(n,"-1")),setTimeout(function(){i.adapter.isFocusInsideList()||i.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.handleKeydown=function(n,i,r){var s=this,o=dn(n)==="ArrowLeft",a=dn(n)==="ArrowUp",l=dn(n)==="ArrowRight",c=dn(n)==="ArrowDown",u=dn(n)==="Home",h=dn(n)==="End",d=dn(n)==="Enter",f=dn(n)==="Spacebar",p=n.key==="A"||n.key==="a";if(this.adapter.isRootFocused()){if(a||h?(n.preventDefault(),this.focusLastElement()):(c||u)&&(n.preventDefault(),this.focusFirstElement()),this.hasTypeahead){var g={event:n,focusItemAtIndex:function(A){s.focusItemAtIndex(A)},focusedItemIndex:-1,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(A){return s.adapter.listItemAtIndexHasClass(A,Ee.LIST_ITEM_DISABLED_CLASS)}};Ty(g,this.typeaheadState)}return}var m=this.adapter.getFocusedElementIndex();if(!(m===-1&&(m=r,m<0))){if(this.isVertical&&c||!this.isVertical&&l)Tr(n),this.focusNextElement(m);else if(this.isVertical&&a||!this.isVertical&&o)Tr(n),this.focusPrevElement(m);else if(u)Tr(n),this.focusFirstElement();else if(h)Tr(n),this.focusLastElement();else if(p&&n.ctrlKey&&this.isCheckboxList)n.preventDefault(),this.toggleAll(this.selectedIndex===Ut.UNSET_INDEX?[]:this.selectedIndex);else if((d||f)&&i){var v=n.target;if(v&&v.tagName==="A"&&d||(Tr(n),this.adapter.listItemAtIndexHasClass(m,Ee.LIST_ITEM_DISABLED_CLASS)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(m),this.adapter.notifyAction(m))}if(this.hasTypeahead){var g={event:n,focusItemAtIndex:function(T){s.focusItemAtIndex(T)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(T){return s.adapter.listItemAtIndexHasClass(T,Ee.LIST_ITEM_DISABLED_CLASS)}};Ty(g,this.typeaheadState)}}},e.prototype.handleClick=function(n,i){n!==Ut.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(n,Ee.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(n,i),this.adapter.notifyAction(n)))},e.prototype.focusNextElement=function(n){var i=this.adapter.getListItemCount(),r=n+1;if(r>=i)if(this.wrapFocus)r=0;else return n;return this.focusItemAtIndex(r),r},e.prototype.focusPrevElement=function(n){var i=n-1;if(i<0)if(this.wrapFocus)i=this.adapter.getListItemCount()-1;else return n;return this.focusItemAtIndex(i),i},e.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},e.prototype.focusLastElement=function(){var n=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(n),n},e.prototype.focusInitialElement=function(){var n=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(n),n},e.prototype.setEnabled=function(n,i){!this.isIndexValid(n)||(i?(this.adapter.removeClassForElementIndex(n,Ee.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(n,Vi.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(n,Ee.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(n,Vi.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(n,i){var r=i===void 0?{}:i,s=r.forceUpdate;if(!(this.selectedIndex===n&&!s)){var o=Ee.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(o=Ee.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==Ut.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,o),this.setAriaForSingleSelectionAtIndex(n),this.setTabindexAtIndex(n),n!==Ut.UNSET_INDEX&&this.adapter.addClassForElementIndex(n,o),this.selectedIndex=n}},e.prototype.setAriaForSingleSelectionAtIndex=function(n){this.selectedIndex===Ut.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(n,Vi.ARIA_CURRENT));var i=this.ariaCurrentAttrValue!==null,r=i?Vi.ARIA_CURRENT:Vi.ARIA_SELECTED;if(this.selectedIndex!==Ut.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,r,"false"),n!==Ut.UNSET_INDEX){var s=i?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(n,r,s)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?Vi.ARIA_SELECTED:Vi.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(n){var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(n,!0),this.selectedIndex!==Ut.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),this.adapter.setAttributeForElementIndex(n,i,"true"),this.selectedIndex=n},e.prototype.setCheckboxAtIndex=function(n){for(var i=this.getSelectionAttribute(),r=0;r<this.adapter.getListItemCount();r++){var s=!1;n.indexOf(r)>=0&&(s=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(r,s),this.adapter.setAttributeForElementIndex(r,i,s?"true":"false")}this.selectedIndex=n},e.prototype.setTabindexAtIndex=function(n){this.focusedItemIndex===Ut.UNSET_INDEX&&n!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==n&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==n&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),n!==Ut.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(n,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var n=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(n)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==Ut.UNSET_INDEX?this.selectedIndex:YL(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(n,i){return Math.min(n,i)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(n){var i=this;if(n instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return n.length===0?!0:n.some(function(r){return i.isIndexInRange(r)})}else if(typeof n=="number"){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+n);return this.isIndexInRange(n)||this.isSingleSelectionList&&n===Ut.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(n){var i=this.adapter.getListItemCount();return n>=0&&n<i},e.prototype.setSelectedIndexOnAction=function(n,i){i===void 0&&(i=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(n,i):this.setSelectedIndex(n)},e.prototype.toggleCheckboxAtIndex=function(n,i){var r=this.getSelectionAttribute(),s=this.adapter.isCheckboxCheckedAtIndex(n);i&&(s=!s,this.adapter.setCheckedCheckboxOrRadioAtIndex(n,s)),this.adapter.setAttributeForElementIndex(n,r,s?"true":"false");var o=this.selectedIndex===Ut.UNSET_INDEX?[]:this.selectedIndex.slice();s?o.push(n):o=o.filter(function(a){return a!==n}),this.selectedIndex=o},e.prototype.focusItemAtIndex=function(n){this.adapter.focusItemAtIndex(n),this.focusedItemIndex=n},e.prototype.toggleAll=function(n){var i=this.adapter.getListItemCount();if(n.length===i)this.setCheckboxAtIndex([]);else{for(var r=[],s=0;s<i;s++)(!this.adapter.listItemAtIndexHasClass(s,Ee.LIST_ITEM_DISABLED_CLASS)||n.indexOf(s)>-1)&&r.push(s);this.setCheckboxAtIndex(r)}},e.prototype.typeaheadMatchItem=function(n,i,r){var s=this;r===void 0&&(r=!1);var o={focusItemAtIndex:function(a){s.focusItemAtIndex(a)},focusedItemIndex:i||this.focusedItemIndex,nextChar:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:r,isItemAtIndexDisabled:function(a){return s.adapter.listItemAtIndexHasClass(a,Ee.LIST_ITEM_DISABLED_CLASS)}};return Ld(o,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return KL(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){wy(this.typeaheadState)},e}(zn);/**
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
 */var Cy=function(t){wn(e,t);function e(n){var i=t.call(this,yt(yt({},e.defaultAdapter),n))||this;return i.isSurfaceOpen=!1,i.isQuickOpen=!1,i.isHoistedElement=!1,i.isFixedPosition=!1,i.isHorizontallyCenteredOnViewport=!1,i.maxHeight=0,i.openAnimationEndTimerId=0,i.closeAnimationEndTimerId=0,i.animationRequestId=0,i.anchorCorner=bs.TOP_START,i.originCorner=bs.TOP_START,i.anchorMargin={top:0,right:0,bottom:0,left:0},i.position={x:0,y:0},i}return Object.defineProperty(e,"cssClasses",{get:function(){return qL},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return WL},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Yo},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return bs},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=e.cssClasses,i=n.ROOT,r=n.OPEN;if(!this.adapter.hasClass(i))throw new Error(i+" class required in root element.");this.adapter.hasClass(r)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(n){this.anchorCorner=n},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^Ct.RIGHT},e.prototype.setAnchorMargin=function(n){this.anchorMargin.top=n.top||0,this.anchorMargin.right=n.right||0,this.anchorMargin.bottom=n.bottom||0,this.anchorMargin.left=n.left||0},e.prototype.setIsHoisted=function(n){this.isHoistedElement=n},e.prototype.setFixedPosition=function(n){this.isFixedPosition=n},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(n,i){this.position.x=this.isFinite(n)?n:0,this.position.y=this.isFinite(i)?i:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(n){this.isHorizontallyCenteredOnViewport=n},e.prototype.setQuickOpen=function(n){this.isQuickOpen=n},e.prototype.setMaxHeight=function(n){this.maxHeight=n},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var n=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){n.dimensions=n.adapter.getInnerDimensions(),n.autoposition(),n.adapter.addClass(e.cssClasses.OPEN),n.openAnimationEndTimerId=setTimeout(function(){n.openAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),n.adapter.notifyOpen()},Yo.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},e.prototype.close=function(n){var i=this;if(n===void 0&&(n=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,n||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){i.adapter.removeClass(e.cssClasses.OPEN),i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId=setTimeout(function(){i.closeAnimationEndTimerId=0,i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),i.adapter.notifyClose()},Yo.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,n||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(n){var i=n.target;this.adapter.isElementInContainer(i)||this.close()},e.prototype.handleKeydown=function(n){var i=n.keyCode,r=n.key,s=r==="Escape"||i===27;s&&this.close()},e.prototype.autoposition=function(){var n;this.measurements=this.getAutoLayoutmeasurements();var i=this.getoriginCorner(),r=this.getMenuSurfaceMaxHeight(i),s=this.hasBit(i,Ct.BOTTOM)?"bottom":"top",o=this.hasBit(i,Ct.RIGHT)?"right":"left",a=this.getHorizontalOriginOffset(i),l=this.getVerticalOriginOffset(i),c=this.measurements,u=c.anchorSize,h=c.surfaceSize,d=(n={},n[o]=a,n[s]=l,n);u.width/h.width>Yo.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(o="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(d),this.adapter.setTransformOrigin(o+" "+s),this.adapter.setPosition(d),this.adapter.setMaxHeight(r?r+"px":""),this.hasBit(i,Ct.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var n=this.adapter.getAnchorDimensions(),i=this.adapter.getBodyDimensions(),r=this.adapter.getWindowDimensions(),s=this.adapter.getWindowScroll();return n||(n={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:n,bodySize:i,surfaceSize:this.dimensions,viewportDistance:{top:n.top,right:r.width-n.right,bottom:r.height-n.bottom,left:n.left},viewportSize:r,windowScroll:s}},e.prototype.getoriginCorner=function(){var n=this.originCorner,i=this.measurements,r=i.viewportDistance,s=i.anchorSize,o=i.surfaceSize,a=e.numbers.MARGIN_TO_EDGE,l=this.hasBit(this.anchorCorner,Ct.BOTTOM),c,u;l?(c=r.top-a+this.anchorMargin.bottom,u=r.bottom-a-this.anchorMargin.bottom):(c=r.top-a+this.anchorMargin.top,u=r.bottom-a+s.height-this.anchorMargin.top);var h=u-o.height>0;!h&&c>u&&(n=this.setBit(n,Ct.BOTTOM));var d=this.adapter.isRtl(),f=this.hasBit(this.anchorCorner,Ct.FLIP_RTL),p=this.hasBit(this.anchorCorner,Ct.RIGHT)||this.hasBit(n,Ct.RIGHT),g=!1;d&&f?g=!p:g=p;var m,v;g?(m=r.left+s.width+this.anchorMargin.right,v=r.right-this.anchorMargin.right):(m=r.left+this.anchorMargin.left,v=r.right+s.width-this.anchorMargin.left);var A=m-o.width>0,T=v-o.width>0,y=this.hasBit(n,Ct.FLIP_RTL)&&this.hasBit(n,Ct.RIGHT);return T&&y&&d||!A&&y?n=this.unsetBit(n,Ct.RIGHT):(A&&g&&d||A&&!g&&p||!T&&m>=v)&&(n=this.setBit(n,Ct.RIGHT)),n},e.prototype.getMenuSurfaceMaxHeight=function(n){if(this.maxHeight>0)return this.maxHeight;var i=this.measurements.viewportDistance,r=0,s=this.hasBit(n,Ct.BOTTOM),o=this.hasBit(this.anchorCorner,Ct.BOTTOM),a=e.numbers.MARGIN_TO_EDGE;return s?(r=i.top+this.anchorMargin.top-a,o||(r+=this.measurements.anchorSize.height)):(r=i.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-a,o&&(r-=this.measurements.anchorSize.height)),r},e.prototype.getHorizontalOriginOffset=function(n){var i=this.measurements.anchorSize,r=this.hasBit(n,Ct.RIGHT),s=this.hasBit(this.anchorCorner,Ct.RIGHT);if(r){var o=s?i.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?o-(this.measurements.viewportSize.width-this.measurements.bodySize.width):o}return s?i.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(n){var i=this.measurements.anchorSize,r=this.hasBit(n,Ct.BOTTOM),s=this.hasBit(this.anchorCorner,Ct.BOTTOM),o=0;return r?o=s?i.height-this.anchorMargin.top:-this.anchorMargin.bottom:o=s?i.height+this.anchorMargin.bottom:this.anchorMargin.top,o},e.prototype.adjustPositionForHoistedElement=function(n){var i,r,s=this.measurements,o=s.windowScroll,a=s.viewportDistance,l=s.surfaceSize,c=s.viewportSize,u=Object.keys(n);try{for(var h=Mn(u),d=h.next();!d.done;d=h.next()){var f=d.value,p=n[f]||0;if(this.isHorizontallyCenteredOnViewport&&(f==="left"||f==="right")){n[f]=(c.width-l.width)/2;continue}p+=a[f],this.isFixedPosition||(f==="top"?p+=o.y:f==="bottom"?p-=o.y:f==="left"?p+=o.x:p-=o.x),n[f]=p}}catch(g){i={error:g}}finally{try{d&&!d.done&&(r=h.return)&&r.call(h)}finally{if(i)throw i.error}}},e.prototype.maybeRestoreFocus=function(){var n=this,i=this.adapter.isFocused(),r=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(i||r)&&setTimeout(function(){n.adapter.restoreFocus()},Yo.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(n,i){return Boolean(n&i)},e.prototype.setBit=function(n,i){return n|i},e.prototype.unsetBit=function(n,i){return n^i},e.prototype.isFinite=function(n){return typeof n=="number"&&isFinite(n)},e}(zn);/**
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
 */var Sy={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function ZL(t){return Boolean(t.document)&&typeof t.document.createElement=="function"}function $L(t,e){if(ZL(t)&&e in Sy){var n=t.document.createElement("div"),i=Sy[e],r=i.standard,s=i.prefixed,o=r in n.style;return o?r:s}return e}/**
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
 */var Is={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},ws={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},eM={FOCUS_ROOT_INDEX:-1},Ts;(function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"})(Ts||(Ts={}));/**
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
 */var tM=function(t){wn(e,t);function e(n){var i=t.call(this,yt(yt({},e.defaultAdapter),n))||this;return i.closeAnimationEndTimerId=0,i.defaultFocusState=Ts.LIST_ROOT,i.selectedIndex=-1,i}return Object.defineProperty(e,"cssClasses",{get:function(){return Is},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ws},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return eM},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},e.prototype.handleKeydown=function(n){var i=n.key,r=n.keyCode,s=i==="Tab"||r===9;s&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(n){var i=this,r=this.adapter.getElementIndex(n);if(!(r<0)){this.adapter.notifySelected({index:r});var s=this.adapter.getAttributeFromElementAtIndex(r,ws.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(s),this.closeAnimationEndTimerId=setTimeout(function(){var o=i.adapter.getElementIndex(n);o>=0&&i.adapter.isSelectableItemAtIndex(o)&&i.setSelectedIndex(o)},Cy.numbers.TRANSITION_CLOSE_DURATION)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case Ts.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Ts.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Ts.NONE:break;default:this.adapter.focusListRoot();break}},e.prototype.setDefaultFocusState=function(n){this.defaultFocusState=n},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(n){if(this.validatedIndex(n),!this.adapter.isSelectableItemAtIndex(n))throw new Error("MDCMenuFoundation: No selection group at specified index.");var i=this.adapter.getSelectedSiblingOfItemAtIndex(n);i>=0&&(this.adapter.removeAttributeFromElementAtIndex(i,ws.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(i,Is.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(n,Is.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(n,ws.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=n},e.prototype.setEnabled=function(n,i){this.validatedIndex(n),i?(this.adapter.removeClassFromElementAtIndex(n,Ee.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(n,ws.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(n,Ee.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(n,ws.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(n){var i=this.adapter.getMenuItemCount(),r=n>=0&&n<i;if(!r)throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(zn);const{document:nM}=g0;function iM(t){let e,n,i,r,s,o,a,l;const c=t[30].default,u=Ce(c,t,t[29],null);let h=[{class:i=ye(Ze({[t[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":t[5],"mdc-menu-surface--open":t[4],"smui-menu-surface--static":t[4],"mdc-menu-surface--fullwidth":t[6]},t[9]))},{style:r=Object.entries(t[10]).map(Ay).concat([t[3]]).join(" ")},t[12]],d={};for(let f=0;f<h.length;f+=1)d=j(d,h[f]);return{c(){e=ct(),n=we("div"),u&&u.c(),this.h()},l(f){e=ut(f),n=Re(f,"DIV",{class:!0,style:!0});var p=ge(n);u&&u.l(p),p.forEach(U),this.h()},h(){ae(n,d)},m(f,p){ie(f,e,p),ie(f,n,p),u&&u.m(n,null),t[32](n),o=!0,a||(l=[$e(nM.body,"click",t[31],!0),oe(s=Et.call(null,n,t[1])),oe(t[11].call(null,n)),$e(n,"keydown",t[33])],a=!0)},p(f,p){u&&u.p&&(!o||p[0]&536870912)&&Ae(u,c,f,f[29],o?Se(c,f[29],p,null):ke(f[29]),null),ae(n,d=Ne(h,[(!o||p[0]&628&&i!==(i=ye(Ze({[f[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":f[5],"mdc-menu-surface--open":f[4],"smui-menu-surface--static":f[4],"mdc-menu-surface--fullwidth":f[6]},f[9]))))&&{class:i},(!o||p[0]&1032&&r!==(r=Object.entries(f[10]).map(Ay).concat([f[3]]).join(" ")))&&{style:r},p[0]&4096&&f[12]])),s&&qe(s.update)&&p[0]&2&&s.update.call(null,f[1])},i(f){o||(D(u,f),o=!0)},o(f){B(u,f),o=!1},d(f){f&&U(e),f&&U(n),u&&u.d(f),t[32](null),a=!1,Ke(l)}}}const Ay=([t,e])=>`${t}: ${e};`;function rM(t,e,n){const i=["use","class","style","static","anchor","fixed","open","fullWidth","quickOpen","anchorElement","anchorCorner","anchorMargin","maxHeight","horizontallyCenteredOnViewport","isOpen","setOpen","setAbsolutePosition","setIsHoisted","isFixed","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e;var a,l,c;const u=tt(Fe());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{static:p=!1}=e,{anchor:g=!0}=e,{fixed:m=!1}=e,{open:v=p}=e,{fullWidth:A=!1}=e,{quickOpen:T=!1}=e,{anchorElement:y=void 0}=e,{anchorCorner:N=void 0}=e,{anchorMargin:k={top:0,right:0,bottom:0,left:0}}=e,{maxHeight:_=0}=e,{horizontallyCenteredOnViewport:w=!1}=e,V,b,O={},J={},E;Pt("SMUI:list:role","menu"),Pt("SMUI:list:item:role","menuitem");const L=bs;Ln(()=>(n(8,b=new Cy({addClass:G,removeClass:C,hasClass:R,hasAnchor:()=>!!y,notifyClose:()=>{n(0,v=p),v||et(V,"SMUIMenuSurface:closed",void 0,void 0,!0)},notifyClosing:()=>{n(0,v=p),v||et(V,"SMUIMenuSurface:closing",void 0,void 0,!0)},notifyOpen:()=>{n(0,v=!0),et(V,"SMUIMenuSurface:opened",void 0,void 0,!0)},isElementInContainer:he=>V.contains(he),isRtl:()=>getComputedStyle(V).getPropertyValue("direction")==="rtl",setTransformOrigin:he=>{const at=`${$L(window,"transform")}-origin`;n(10,J[at]=he,J)},isFocused:()=>document.activeElement===V,saveFocus:()=>{var he;E=(he=document.activeElement)!==null&&he!==void 0?he:void 0},restoreFocus:()=>{V.contains(document.activeElement)&&E&&"focus"in E&&E.focus()},getInnerDimensions:()=>({width:V.offsetWidth,height:V.offsetHeight}),getAnchorDimensions:()=>y?y.getBoundingClientRect():null,getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:he=>{n(10,J.left="left"in he?`${he.left}px`:"",J),n(10,J.right="right"in he?`${he.right}px`:"",J),n(10,J.top="top"in he?`${he.top}px`:"",J),n(10,J.bottom="bottom"in he?`${he.bottom}px`:"",J)},setMaxHeight:he=>{n(10,J.maxHeight=he,J)}})),et(V,"SMUIMenuSurface:mount",{get open(){return v},set open(he){n(0,v=he)},closeProgrammatic:S}),b.init(),()=>{var he;const at=b.isHoistedElement;b.destroy(),at&&((he=V.parentNode)===null||he===void 0||he.removeChild(V))})),Ji(()=>{var K;g&&V&&((K=V.parentElement)===null||K===void 0||K.classList.remove("mdc-menu-surface--anchor"))});function R(K){return K in O?O[K]:Me().classList.contains(K)}function G(K){O[K]||n(9,O[K]=!0,O)}function C(K){(!(K in O)||O[K])&&n(9,O[K]=!1,O)}function S(K){b.close(K),n(0,v=!1)}function z(){return v}function H(K){n(0,v=K)}function X(K,he){return b.setAbsolutePosition(K,he)}function ue(K){return b.setIsHoisted(K)}function q(){return b.isFixed()}function Me(){return V}const be=K=>b&&v&&b.handleBodyClick(K);function me(K){ce[K?"unshift":"push"](()=>{V=K,n(7,V)})}const Ie=K=>b&&b.handleKeydown(K);return t.$$set=K=>{e=j(j({},e),Xe(K)),n(12,r=ne(e,i)),"use"in K&&n(1,h=K.use),"class"in K&&n(2,d=K.class),"style"in K&&n(3,f=K.style),"static"in K&&n(4,p=K.static),"anchor"in K&&n(14,g=K.anchor),"fixed"in K&&n(5,m=K.fixed),"open"in K&&n(0,v=K.open),"fullWidth"in K&&n(6,A=K.fullWidth),"quickOpen"in K&&n(15,T=K.quickOpen),"anchorElement"in K&&n(13,y=K.anchorElement),"anchorCorner"in K&&n(16,N=K.anchorCorner),"anchorMargin"in K&&n(17,k=K.anchorMargin),"maxHeight"in K&&n(18,_=K.maxHeight),"horizontallyCenteredOnViewport"in K&&n(19,w=K.horizontallyCenteredOnViewport),"$$scope"in K&&n(29,o=K.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&469778560&&V&&g&&!(n(26,a=V.parentElement)===null||a===void 0?void 0:a.classList.contains("mdc-menu-surface--anchor"))&&(n(27,l=V.parentElement)===null||l===void 0||l.classList.add("mdc-menu-surface--anchor"),n(13,y=n(28,c=V.parentElement)!==null&&c!==void 0?c:void 0)),t.$$.dirty[0]&257&&b&&b.isOpen()!==v&&(v?b.open():b.close()),t.$$.dirty[0]&33024&&b&&b.setQuickOpen(T),t.$$.dirty[0]&288&&b&&b.setFixedPosition(m),t.$$.dirty[0]&262400&&b&&_>0&&b.setMaxHeight(_),t.$$.dirty[0]&524544&&b&&b.setIsHorizontallyCenteredOnViewport(w),t.$$.dirty[0]&65792&&b&&N!=null&&(typeof N=="string"?b.setAnchorCorner(L[N]):b.setAnchorCorner(N)),t.$$.dirty[0]&131328&&b&&b.setAnchorMargin(k)},[v,h,d,f,p,m,A,V,b,O,J,u,r,y,g,T,N,k,_,w,z,H,X,ue,q,Me,a,l,c,o,s,be,me,Ie]}class sM extends Ye{constructor(e){super();Qe(this,e,rM,iM,We,{use:1,class:2,style:3,static:4,anchor:14,fixed:5,open:0,fullWidth:6,quickOpen:15,anchorElement:13,anchorCorner:16,anchorMargin:17,maxHeight:18,horizontallyCenteredOnViewport:19,isOpen:20,setOpen:21,setAbsolutePosition:22,setIsHoisted:23,isFixed:24,getElement:25},null,[-1,-1])}get isOpen(){return this.$$.ctx[20]}get setOpen(){return this.$$.ctx[21]}get setAbsolutePosition(){return this.$$.ctx[22]}get setIsHoisted(){return this.$$.ctx[23]}get isFixed(){return this.$$.ctx[24]}get getElement(){return this.$$.ctx[25]}}function oM(t){let e;const n=t[16].default,i=Ce(n,t,t[21],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&2097152)&&Ae(i,n,r,r[21],e?Se(n,r[21],s,null):ke(r[21]),null)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function aM(t){let e,n,i;const r=[{use:t[5]},{class:ye({[t[1]]:!0,"mdc-menu":!0})},t[9]];function s(a){t[18](a)}let o={$$slots:{default:[oM]},$$scope:{ctx:t}};for(let a=0;a<r.length;a+=1)o=j(o,r[a]);return t[0]!==void 0&&(o.open=t[0]),e=new sM({props:o}),t[17](e),ce.push(()=>Ii(e,"open",s)),e.$on("SMUIMenuSurface:mount",t[7]),e.$on("SMUIList:mount",t[8]),e.$on("SMUIMenuSurface:opened",t[19]),e.$on("keydown",t[6]),e.$on("SMUIList:action",t[20]),{c(){vt(e.$$.fragment)},l(a){Dt(e.$$.fragment,a)},m(a,l){dt(e,a,l),i=!0},p(a,[l]){const c=l&546?Ne(r,[l&32&&{use:a[5]},l&2&&{class:ye({[a[1]]:!0,"mdc-menu":!0})},l&512&&ht(a[9])]):{};l&2097152&&(c.$$scope={dirty:l,ctx:a}),!n&&l&1&&(n=!0,c.open=a[0],Ei(()=>n=!1)),e.$set(c)},i(a){i||(D(e.$$.fragment,a),i=!0)},o(a){B(e.$$.fragment,a),i=!1},d(a){t[17](null),ft(e,a)}}}function lM(t,e,n){let i;const r=["use","class","open","isOpen","setOpen","setDefaultFocusState","getSelectedIndex","getElement"];let s=ne(e,r),{$$slots:o={},$$scope:a}=e;const{closest:l}=kd,c=tt(Fe());let{use:u=[]}=e,{class:h=""}=e,{open:d=!1}=e,f,p,g,m;Ln(()=>(n(3,p=new tM({addClassToElementAtIndex:(E,L)=>{m.addClassForElementIndex(E,L)},removeClassFromElementAtIndex:(E,L)=>{m.removeClassForElementIndex(E,L)},addAttributeToElementAtIndex:(E,L,R)=>{m.setAttributeForElementIndex(E,L,R)},removeAttributeFromElementAtIndex:(E,L)=>{m.removeAttributeForElementIndex(E,L)},getAttributeFromElementAtIndex:(E,L)=>m.getAttributeFromElementIndex(E,L),elementContainsClass:(E,L)=>E.classList.contains(L),closeSurface:E=>g.closeProgrammatic(E),getElementIndex:E=>m.getOrderedList().map(L=>L.element).indexOf(E),notifySelected:E=>et(w(),"SMUIMenu:selected",{index:E.index,item:m.getOrderedList()[E.index].element},void 0,!0),getMenuItemCount:()=>m.items.length,focusItemAtIndex:E=>m.focusItemAtIndex(E),focusListRoot:()=>"focus"in m.element&&m.element.focus(),isSelectableItemAtIndex:E=>!!l(m.getOrderedList()[E].element,`.${Is.MENU_SELECTION_GROUP}`),getSelectedSiblingOfItemAtIndex:E=>{const L=m.getOrderedList(),R=l(L[E].element,`.${Is.MENU_SELECTION_GROUP}`),G=R==null?void 0:R.querySelector(`.${Is.MENU_SELECTED_LIST_ITEM}`);return G?L.map(C=>C.element).indexOf(G):-1}})),et(w(),"SMUIMenu:mount",p),p.init(),()=>{p.destroy()}));function v(E){p&&p.handleKeydown(E)}function A(E){g||(g=E.detail)}function T(E){m||n(4,m=E.detail)}function y(){return d}function N(E){n(0,d=E)}function k(E){p.setDefaultFocusState(E)}function _(){return p.getSelectedIndex()}function w(){return f.getElement()}function V(E){ce[E?"unshift":"push"](()=>{f=E,n(2,f)})}function b(E){d=E,n(0,d)}const O=()=>p&&p.handleMenuSurfaceOpened(),J=E=>p&&p.handleItemAction(m.getOrderedList()[E.detail.index].element);return t.$$set=E=>{e=j(j({},e),Xe(E)),n(9,s=ne(e,r)),"use"in E&&n(10,u=E.use),"class"in E&&n(1,h=E.class),"open"in E&&n(0,d=E.open),"$$scope"in E&&n(21,a=E.$$scope)},t.$$.update=()=>{t.$$.dirty&1024&&n(5,i=[c,...u])},[d,h,f,p,m,i,v,A,T,s,u,y,N,k,_,w,o,V,b,O,J,a]}class eV extends Ye{constructor(e){super();Qe(this,e,lM,aM,We,{use:10,class:1,open:0,isOpen:11,setOpen:12,setDefaultFocusState:13,getSelectedIndex:14,getElement:15})}get isOpen(){return this.$$.ctx[11]}get setOpen(){return this.$$.ctx[12]}get setDefaultFocusState(){return this.$$.ctx[13]}get getSelectedIndex(){return this.$$.ctx[14]}get getElement(){return this.$$.ctx[15]}}function cM(t){let e;const n=t[37].default,i=Ce(n,t,t[43],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[1]&4096)&&Ae(i,n,r,r[43],e?Se(n,r[43],s,null):ke(r[43]),null)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function uM(t){let e,n,i;const r=[{use:[t[17],...t[0]]},{class:ye({[t[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":t[2],"mdc-deprecated-list--dense":t[3],"mdc-deprecated-list--textual-list":t[4],"mdc-deprecated-list--avatar-list":t[5]||t[18],"mdc-deprecated-list--icon-list":t[6],"mdc-deprecated-list--image-list":t[7],"mdc-deprecated-list--thumbnail-list":t[8],"mdc-deprecated-list--video-list":t[9],"mdc-deprecated-list--two-line":t[10],"smui-list--three-line":t[11]&&!t[10]})},{role:t[15]},t[23]];var s=t[12];function o(a){let l={$$slots:{default:[cM]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=j(l,r[c]);return{props:l}}return s&&(e=new s(o(t)),t[38](e),e.$on("keydown",t[39]),e.$on("focusin",t[40]),e.$on("focusout",t[41]),e.$on("click",t[42]),e.$on("SMUIListItem:mount",t[19]),e.$on("SMUIListItem:unmount",t[20]),e.$on("SMUI:action",t[21])),{c(){e&&vt(e.$$.fragment),n=Tt()},l(a){e&&Dt(e.$$.fragment,a),n=Tt()},m(a,l){e&&dt(e,a,l),ie(a,n,l),i=!0},p(a,l){const c=l[0]&8818687?Ne(r,[l[0]&131073&&{use:[a[17],...a[0]]},l[0]&266238&&{class:ye({[a[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":a[2],"mdc-deprecated-list--dense":a[3],"mdc-deprecated-list--textual-list":a[4],"mdc-deprecated-list--avatar-list":a[5]||a[18],"mdc-deprecated-list--icon-list":a[6],"mdc-deprecated-list--image-list":a[7],"mdc-deprecated-list--thumbnail-list":a[8],"mdc-deprecated-list--video-list":a[9],"mdc-deprecated-list--two-line":a[10],"smui-list--three-line":a[11]&&!a[10]})},l[0]&32768&&{role:a[15]},l[0]&8388608&&ht(a[23])]):{};if(l[1]&4096&&(c.$$scope={dirty:l,ctx:a}),s!==(s=a[12])){if(e){Yt();const u=e;B(u.$$.fragment,1,0,()=>{ft(u,1)}),Jt()}s?(e=new s(o(a)),a[38](e),e.$on("keydown",a[39]),e.$on("focusin",a[40]),e.$on("focusout",a[41]),e.$on("click",a[42]),e.$on("SMUIListItem:mount",a[19]),e.$on("SMUIListItem:unmount",a[20]),e.$on("SMUI:action",a[21]),vt(e.$$.fragment),D(e.$$.fragment,1),dt(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(a){i||(e&&D(e.$$.fragment,a),i=!0)},o(a){e&&B(e.$$.fragment,a),i=!1},d(a){t[38](null),a&&U(n),e&&ft(e,a)}}}function hM(t,e,n){const i=["use","class","nonInteractive","dense","textualList","avatarList","iconList","imageList","thumbnailList","videoList","twoLine","threeLine","vertical","wrapFocus","singleSelection","selectedIndex","radioList","checkList","hasTypeahead","component","layout","setEnabled","getTypeaheadInProgress","getSelectedIndex","getFocusedItemIndex","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e;var a;const{closest:l,matches:c}=kd,u=tt(Fe());let{use:h=[]}=e,{class:d=""}=e,{nonInteractive:f=!1}=e,{dense:p=!1}=e,{textualList:g=!1}=e,{avatarList:m=!1}=e,{iconList:v=!1}=e,{imageList:A=!1}=e,{thumbnailList:T=!1}=e,{videoList:y=!1}=e,{twoLine:N=!1}=e,{threeLine:k=!1}=e,{vertical:_=!0}=e,{wrapFocus:w=(a=Qt("SMUI:list:wrapFocus"))!==null&&a!==void 0?a:!1}=e,{singleSelection:V=!1}=e,{selectedIndex:b=-1}=e,{radioList:O=!1}=e,{checkList:J=!1}=e,{hasTypeahead:E=!1}=e,L,R,G=[],C=Qt("SMUI:list:role"),S=Qt("SMUI:list:nav");const z=new WeakMap;let H=Qt("SMUI:dialog:selection"),X=Qt("SMUI:addLayoutListener"),ue,{component:q=S?cO:uO}=e;Pt("SMUI:list:nonInteractive",f),Pt("SMUI:separator:context","list"),C||(V?(C="listbox",Pt("SMUI:list:item:role","option")):O?(C="radiogroup",Pt("SMUI:list:item:role","radio")):J?(C="group",Pt("SMUI:list:item:role","checkbox")):(C="list",Pt("SMUI:list:item:role",void 0))),X&&(ue=X(Vn)),Ln(()=>{n(13,R=new JL({addClassForElementIndex:at,focusItemAtIndex:K,getAttributeForElementIndex:(re,te)=>{var it,Yi;return(Yi=(it=Ie()[re])===null||it===void 0?void 0:it.getAttr(te))!==null&&Yi!==void 0?Yi:null},getFocusedElementIndex:()=>document.activeElement?Ie().map(re=>re.element).indexOf(document.activeElement):-1,getListItemCount:()=>G.length,getPrimaryTextAtIndex:lt,hasCheckboxAtIndex:re=>{var te,it;return(it=(te=Ie()[re])===null||te===void 0?void 0:te.hasCheckbox)!==null&&it!==void 0?it:!1},hasRadioAtIndex:re=>{var te,it;return(it=(te=Ie()[re])===null||te===void 0?void 0:te.hasRadio)!==null&&it!==void 0?it:!1},isCheckboxCheckedAtIndex:re=>{var te;const it=Ie()[re];return(te=(it==null?void 0:it.hasCheckbox)&&it.checked)!==null&&te!==void 0?te:!1},isFocusInsideList:()=>L!=null&&Yn()!==document.activeElement&&Yn().contains(document.activeElement),isRootFocused:()=>L!=null&&document.activeElement===Yn(),listItemAtIndexHasClass:he,notifyAction:re=>{n(24,b=re),L!=null&&et(Yn(),"SMUIList:action",{index:re},void 0,!0)},removeClassForElementIndex:sn,setAttributeForElementIndex:Nt,setCheckedCheckboxOrRadioAtIndex:(re,te)=>{Ie()[re].checked=te},setTabIndexForListItemChildren:(re,te)=>{const it=Ie()[re],Yi="button:not(:disabled), a";Array.prototype.forEach.call(it.element.querySelectorAll(Yi),hu=>{hu.setAttribute("tabindex",te)})}}));const P={get element(){return Yn()},get items(){return G},get typeaheadInProgress(){return R.isTypeaheadInProgress()},typeaheadMatchItem(re,te){return R.typeaheadMatchItem(re,te,!0)},getOrderedList:Ie,focusItemAtIndex:K,addClassForElementIndex:at,removeClassForElementIndex:sn,setAttributeForElementIndex:Nt,removeAttributeForElementIndex:x,getAttributeFromElementIndex:pe,getPrimaryTextAtIndex:lt};return et(Yn(),"SMUIList:mount",P),R.init(),()=>{R.destroy()}}),Ji(()=>{ue&&ue()});function Me(P){G.push(P.detail),z.set(P.detail.element,P.detail),V&&P.detail.selected&&n(24,b=on(P.detail.element)),P.stopPropagation()}function be(P){var re;const te=(re=P.detail&&G.indexOf(P.detail))!==null&&re!==void 0?re:-1;te!==-1&&(G.splice(te,1),G=G,z.delete(P.detail.element)),P.stopPropagation()}function me(P){if(O||J){const re=on(P.target);if(re!==-1){const te=Ie()[re];te&&(O&&!te.checked||J)&&(te.checked=!te.checked,te.activateRipple(),window.requestAnimationFrame(()=>{te.deactivateRipple()}))}}}function Ie(){return L==null?[]:[...Yn().children].map(P=>z.get(P)).filter(P=>P&&P._smui_list_item_accessor)}function K(P){const re=Ie()[P];re&&"focus"in re.element&&re.element.focus()}function he(P,re){var te;const it=Ie()[P];return(te=it&&it.hasClass(re))!==null&&te!==void 0?te:!1}function at(P,re){const te=Ie()[P];te&&te.addClass(re)}function sn(P,re){const te=Ie()[P];te&&te.removeClass(re)}function Nt(P,re,te){const it=Ie()[P];it&&it.addAttr(re,te)}function x(P,re){const te=Ie()[P];te&&te.removeAttr(re)}function pe(P,re){const te=Ie()[P];return te?te.getAttr(re):null}function lt(P){var re;const te=Ie()[P];return(re=te&&te.getPrimaryText())!==null&&re!==void 0?re:""}function on(P){const re=l(P,".mdc-deprecated-list-item, .mdc-deprecated-list");return re&&c(re,".mdc-deprecated-list-item")?Ie().map(te=>te==null?void 0:te.element).indexOf(re):-1}function Vn(){return R.layout()}function yi(P,re){return R.setEnabled(P,re)}function au(){return R.isTypeaheadInProgress()}function Ks(){return R.getSelectedIndex()}function Oa(){return R.getFocusedItemIndex()}function Yn(){return L.getElement()}function lu(P){ce[P?"unshift":"push"](()=>{L=P,n(14,L)})}const La=P=>R&&R.handleKeydown(P,P.target.classList.contains("mdc-deprecated-list-item"),on(P.target)),qr=P=>R&&R.handleFocusIn(on(P.target)),cu=P=>R&&R.handleFocusOut(on(P.target)),uu=P=>R&&R.handleClick(on(P.target),!c(P.target,'input[type="checkbox"], input[type="radio"]'));return t.$$set=P=>{e=j(j({},e),Xe(P)),n(23,r=ne(e,i)),"use"in P&&n(0,h=P.use),"class"in P&&n(1,d=P.class),"nonInteractive"in P&&n(2,f=P.nonInteractive),"dense"in P&&n(3,p=P.dense),"textualList"in P&&n(4,g=P.textualList),"avatarList"in P&&n(5,m=P.avatarList),"iconList"in P&&n(6,v=P.iconList),"imageList"in P&&n(7,A=P.imageList),"thumbnailList"in P&&n(8,T=P.thumbnailList),"videoList"in P&&n(9,y=P.videoList),"twoLine"in P&&n(10,N=P.twoLine),"threeLine"in P&&n(11,k=P.threeLine),"vertical"in P&&n(25,_=P.vertical),"wrapFocus"in P&&n(26,w=P.wrapFocus),"singleSelection"in P&&n(27,V=P.singleSelection),"selectedIndex"in P&&n(24,b=P.selectedIndex),"radioList"in P&&n(28,O=P.radioList),"checkList"in P&&n(29,J=P.checkList),"hasTypeahead"in P&&n(30,E=P.hasTypeahead),"component"in P&&n(12,q=P.component),"$$scope"in P&&n(43,o=P.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&33562624&&R&&R.setVerticalOrientation(_),t.$$.dirty[0]&67117056&&R&&R.setWrapFocus(w),t.$$.dirty[0]&1073750016&&R&&R.setHasTypeahead(E),t.$$.dirty[0]&134225920&&R&&R.setSingleSelection(V),t.$$.dirty[0]&151003136&&R&&V&&Ks()!==b&&R.setSelectedIndex(b)},[h,d,f,p,g,m,v,A,T,y,N,k,q,R,L,C,c,u,H,Me,be,me,on,r,b,_,w,V,O,J,E,Vn,yi,au,Ks,Oa,Yn,s,lu,La,qr,cu,uu,o]}class tV extends Ye{constructor(e){super();Qe(this,e,hM,uM,We,{use:0,class:1,nonInteractive:2,dense:3,textualList:4,avatarList:5,iconList:6,imageList:7,thumbnailList:8,videoList:9,twoLine:10,threeLine:11,vertical:25,wrapFocus:26,singleSelection:27,selectedIndex:24,radioList:28,checkList:29,hasTypeahead:30,component:12,layout:31,setEnabled:32,getTypeaheadInProgress:33,getSelectedIndex:34,getFocusedItemIndex:35,getElement:36},null,[-1,-1])}get layout(){return this.$$.ctx[31]}get setEnabled(){return this.$$.ctx[32]}get getTypeaheadInProgress(){return this.$$.ctx[33]}get getSelectedIndex(){return this.$$.ctx[34]}get getFocusedItemIndex(){return this.$$.ctx[35]}get getElement(){return this.$$.ctx[36]}}function ky(t){let e;return{c(){e=we("span"),this.h()},l(n){e=Re(n,"SPAN",{class:!0}),ge(e).forEach(U),this.h()},h(){_t(e,"class","mdc-deprecated-list-item__ripple")},m(n,i){ie(n,e,i)},d(n){n&&U(e)}}}function dM(t){let e,n,i=t[6]&&ky();const r=t[32].default,s=Ce(r,t,t[35],null);return{c(){i&&i.c(),e=Tt(),s&&s.c()},l(o){i&&i.l(o),e=Tt(),s&&s.l(o)},m(o,a){i&&i.m(o,a),ie(o,e,a),s&&s.m(o,a),n=!0},p(o,a){o[6]?i||(i=ky(),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),s&&s.p&&(!n||a[1]&16)&&Ae(s,r,o,o[35],n?Se(r,o[35],a,null):ke(o[35]),null)},i(o){n||(D(s,o),n=!0)},o(o){B(s,o),n=!1},d(o){i&&i.d(o),o&&U(e),s&&s.d(o)}}}function fM(t){let e,n,i;const r=[{use:[...t[5]?[]:[[br,{ripple:!t[13],unbounded:!1,color:(t[7]||t[0])&&t[4]==null?"primary":t[4],disabled:t[9],addClass:t[21],removeClass:t[22],addStyle:t[23]}]],t[19],...t[1]]},{class:ye(Ze({[t[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":t[7],"mdc-deprecated-list-item--selected":t[0],"mdc-deprecated-list-item--disabled":t[9],"mdc-menu-item--selected":!t[20]&&t[8]==="menuitem"&&t[0],"smui-menu-item--non-interactive":t[5]},t[15]))},{style:Object.entries(t[16]).map(Ry).concat([t[3]]).join(" ")},t[20]&&t[7]?{"aria-current":"page"}:{},t[20]?{}:{role:t[8]},!t[20]&&t[8]==="option"?{"aria-selected":t[0]?"true":"false"}:{},!t[20]&&(t[8]==="radio"||t[8]==="checkbox")?{"aria-checked":t[13]&&t[13].checked?"true":"false"}:{},t[20]?{}:{"aria-disabled":t[9]?"true":"false"},{"data-menu-item-skip-restore-focus":t[10]||void 0},{tabindex:t[18]},{href:t[11]},t[17],t[27]];var s=t[12];function o(a){let l={$$slots:{default:[dM]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=j(l,r[c]);return{props:l}}return s&&(e=new s(o(t)),t[33](e),e.$on("click",t[24]),e.$on("keydown",t[25]),e.$on("SMUIGenericInput:mount",t[26]),e.$on("SMUIGenericInput:unmount",t[34])),{c(){e&&vt(e.$$.fragment),n=Tt()},l(a){e&&Dt(e.$$.fragment,a),n=Tt()},m(a,l){e&&dt(e,a,l),ie(a,n,l),i=!0},p(a,l){const c=l[0]&150974399?Ne(r,[l[0]&15213235&&{use:[...a[5]?[]:[[br,{ripple:!a[13],unbounded:!1,color:(a[7]||a[0])&&a[4]==null?"primary":a[4],disabled:a[9],addClass:a[21],removeClass:a[22],addStyle:a[23]}]],a[19],...a[1]]},l[0]&1082277&&{class:ye(Ze({[a[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":a[7],"mdc-deprecated-list-item--selected":a[0],"mdc-deprecated-list-item--disabled":a[9],"mdc-menu-item--selected":!a[20]&&a[8]==="menuitem"&&a[0],"smui-menu-item--non-interactive":a[5]},a[15]))},l[0]&65544&&{style:Object.entries(a[16]).map(Ry).concat([a[3]]).join(" ")},l[0]&1048704&&ht(a[20]&&a[7]?{"aria-current":"page"}:{}),l[0]&1048832&&ht(a[20]?{}:{role:a[8]}),l[0]&1048833&&ht(!a[20]&&a[8]==="option"?{"aria-selected":a[0]?"true":"false"}:{}),l[0]&1057024&&ht(!a[20]&&(a[8]==="radio"||a[8]==="checkbox")?{"aria-checked":a[13]&&a[13].checked?"true":"false"}:{}),l[0]&1049088&&ht(a[20]?{}:{"aria-disabled":a[9]?"true":"false"}),l[0]&1024&&{"data-menu-item-skip-restore-focus":a[10]||void 0},l[0]&262144&&{tabindex:a[18]},l[0]&2048&&{href:a[11]},l[0]&131072&&ht(a[17]),l[0]&134217728&&ht(a[27])]):{};if(l[0]&64|l[1]&16&&(c.$$scope={dirty:l,ctx:a}),s!==(s=a[12])){if(e){Yt();const u=e;B(u.$$.fragment,1,0,()=>{ft(u,1)}),Jt()}s?(e=new s(o(a)),a[33](e),e.$on("click",a[24]),e.$on("keydown",a[25]),e.$on("SMUIGenericInput:mount",a[26]),e.$on("SMUIGenericInput:unmount",a[34]),vt(e.$$.fragment),D(e.$$.fragment,1),dt(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(a){i||(e&&D(e.$$.fragment,a),i=!0)},o(a){e&&B(e.$$.fragment,a),i=!1},d(a){t[33](null),a&&U(n),e&&ft(e,a)}}}let pM=0;const Ry=([t,e])=>`${t}: ${e};`;function mM(t,e,n){let i;const r=["use","class","style","color","nonInteractive","ripple","activated","role","selected","disabled","skipRestoreFocus","tabindex","inputId","href","component","getPrimaryText","getElement"];let s=ne(e,r),{$$slots:o={},$$scope:a}=e;var l;const c=tt(Fe());let u=()=>{};function h(x){return x===u}let{use:d=[]}=e,{class:f=""}=e,{style:p=""}=e,{color:g=void 0}=e,{nonInteractive:m=(l=Qt("SMUI:list:nonInteractive"))!==null&&l!==void 0?l:!1}=e;Pt("SMUI:list:nonInteractive",void 0);let{ripple:v=!m}=e,{activated:A=!1}=e,{role:T=Qt("SMUI:list:item:role")}=e;Pt("SMUI:list:item:role",void 0);let{selected:y=!1}=e,{disabled:N=!1}=e,{skipRestoreFocus:k=!1}=e,{tabindex:_=u}=e,{inputId:w="SMUI-form-field-list-"+pM++}=e,{href:V=void 0}=e,b,O={},J={},E={},L,R,G=Qt("SMUI:list:item:nav"),{component:C=G?V?xv:Er:lO}=e;Pt("SMUI:generic:input:props",{id:w}),Pt("SMUI:separator:context",void 0),Ln(()=>{if(!y&&!m){let pe=!0,lt=b;for(;lt.previousSibling;)if(lt=lt.previousSibling,lt.nodeType===1&&lt.classList.contains("mdc-deprecated-list-item")&&!lt.classList.contains("mdc-deprecated-list-item--disabled")){pe=!1;break}pe&&(R=window.requestAnimationFrame(be))}const x={_smui_list_item_accessor:!0,get element(){return at()},get selected(){return y},set selected(pe){n(0,y=pe)},hasClass:S,addClass:z,removeClass:H,getAttr:ue,addAttr:q,removeAttr:Me,getPrimaryText:he,get checked(){var pe;return(pe=L&&L.checked)!==null&&pe!==void 0?pe:!1},set checked(pe){L&&n(13,L.checked=!!pe,L)},get hasCheckbox(){return!!(L&&"_smui_checkbox_accessor"in L)},get hasRadio(){return!!(L&&"_smui_radio_accessor"in L)},activateRipple(){L&&L.activateRipple()},deactivateRipple(){L&&L.deactivateRipple()},getValue(){return s.value}};return et(at(),"SMUIListItem:mount",x),()=>{et(at(),"SMUIListItem:unmount",x)}}),Ji(()=>{R&&window.cancelAnimationFrame(R)});function S(x){return x in O?O[x]:at().classList.contains(x)}function z(x){O[x]||n(15,O[x]=!0,O)}function H(x){(!(x in O)||O[x])&&n(15,O[x]=!1,O)}function X(x,pe){J[x]!=pe&&(pe===""||pe==null?(delete J[x],n(16,J)):n(16,J[x]=pe,J))}function ue(x){var pe;return x in E?(pe=E[x])!==null&&pe!==void 0?pe:null:at().getAttribute(x)}function q(x,pe){E[x]!==pe&&n(17,E[x]=pe,E)}function Me(x){(!(x in E)||E[x]!=null)&&n(17,E[x]=void 0,E)}function be(){let x=!0,pe=b.getElement();for(;pe.nextElementSibling;)if(pe=pe.nextElementSibling,pe.nodeType===1&&pe.classList.contains("mdc-deprecated-list-item")){const lt=pe.attributes.getNamedItem("tabindex");if(lt&&lt.value==="0"){x=!1;break}}x&&n(18,i=0)}function me(x){N||et(at(),"SMUI:action",x)}function Ie(x){const pe=x.key==="Enter",lt=x.key==="Space";(pe||lt)&&me(x)}function K(x){("_smui_checkbox_accessor"in x.detail||"_smui_radio_accessor"in x.detail)&&n(13,L=x.detail)}function he(){var x,pe,lt;const on=at(),Vn=on.querySelector(".mdc-deprecated-list-item__primary-text");if(Vn)return(x=Vn.textContent)!==null&&x!==void 0?x:"";const yi=on.querySelector(".mdc-deprecated-list-item__text");return yi?(pe=yi.textContent)!==null&&pe!==void 0?pe:"":(lt=on.textContent)!==null&&lt!==void 0?lt:""}function at(){return b.getElement()}function sn(x){ce[x?"unshift":"push"](()=>{b=x,n(14,b)})}const Nt=()=>n(13,L=void 0);return t.$$set=x=>{e=j(j({},e),Xe(x)),n(27,s=ne(e,r)),"use"in x&&n(1,d=x.use),"class"in x&&n(2,f=x.class),"style"in x&&n(3,p=x.style),"color"in x&&n(4,g=x.color),"nonInteractive"in x&&n(5,m=x.nonInteractive),"ripple"in x&&n(6,v=x.ripple),"activated"in x&&n(7,A=x.activated),"role"in x&&n(8,T=x.role),"selected"in x&&n(0,y=x.selected),"disabled"in x&&n(9,N=x.disabled),"skipRestoreFocus"in x&&n(10,k=x.skipRestoreFocus),"tabindex"in x&&n(28,_=x.tabindex),"inputId"in x&&n(29,w=x.inputId),"href"in x&&n(11,V=x.href),"component"in x&&n(12,C=x.component),"$$scope"in x&&n(35,a=x.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&268444193&&n(18,i=h(_)?!m&&!N&&(y||L&&L.checked)?0:-1:_)},[y,d,f,p,g,m,v,A,T,N,k,V,C,L,b,O,J,E,i,c,G,z,H,X,me,Ie,K,s,_,w,he,at,o,sn,Nt,a]}class gM extends Ye{constructor(e){super();Qe(this,e,mM,fM,We,{use:1,class:2,style:3,color:4,nonInteractive:5,ripple:6,activated:7,role:8,selected:0,disabled:9,skipRestoreFocus:10,tabindex:28,inputId:29,href:11,component:12,getPrimaryText:30,getElement:31},null,[-1,-1])}get getPrimaryText(){return this.$$.ctx[30]}get getElement(){return this.$$.ctx[31]}}xt({class:"mdc-deprecated-list-item__text",component:Er});xt({class:"mdc-deprecated-list-item__primary-text",component:Er});xt({class:"mdc-deprecated-list-item__secondary-text",component:Er});function _M(t){let e,n,i,r,s,o;const a=t[8].default,l=Ce(a,t,t[7],null);let c=[{class:n=ye({[t[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":t[4]})},t[5]],u={};for(let h=0;h<c.length;h+=1)u=j(u,c[h]);return{c(){e=we("span"),l&&l.c(),this.h()},l(h){e=Re(h,"SPAN",{class:!0});var d=ge(e);l&&l.l(d),d.forEach(U),this.h()},h(){ae(e,u)},m(h,d){ie(h,e,d),l&&l.m(e,null),t[9](e),r=!0,s||(o=[oe(i=Et.call(null,e,t[0])),oe(t[3].call(null,e))],s=!0)},p(h,[d]){l&&l.p&&(!r||d&128)&&Ae(l,a,h,h[7],r?Se(a,h[7],d,null):ke(h[7]),null),ae(e,u=Ne(c,[(!r||d&2&&n!==(n=ye({[h[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":h[4]})))&&{class:n},d&32&&h[5]])),i&&qe(i.update)&&d&1&&i.update.call(null,h[0])},i(h){r||(D(l,h),r=!0)},o(h){B(l,h),r=!1},d(h){h&&U(e),l&&l.d(h),t[9](null),s=!1,Ke(o)}}}function vM(t,e,n){const i=["use","class","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e;const a=tt(Fe());let{use:l=[]}=e,{class:c=""}=e,u,h=Qt("SMUI:list:graphic:menu-selection-group");function d(){return u}function f(p){ce[p?"unshift":"push"](()=>{u=p,n(2,u)})}return t.$$set=p=>{e=j(j({},e),Xe(p)),n(5,r=ne(e,i)),"use"in p&&n(0,l=p.use),"class"in p&&n(1,c=p.class),"$$scope"in p&&n(7,o=p.$$scope)},[l,c,u,a,h,r,d,o,s,f]}class yM extends Ye{constructor(e){super();Qe(this,e,vM,_M,We,{use:0,class:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}xt({class:"mdc-deprecated-list-item__meta",component:Er});xt({class:"mdc-deprecated-list-group",component:hi});xt({class:"mdc-deprecated-list-group__subheader",component:aO});const nV=gM,bM=yM;xt({class:"mdc-menu__selection-group-icon",component:bM});/**
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
 */var kn={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},EM={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var Oy=function(t){wn(e,t);function e(n){var i=t.call(this,yt(yt({},e.defaultAdapter),n))||this;return i.animationFrame=0,i.animationTimer=0,i}return Object.defineProperty(e,"strings",{get:function(){return EM},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return kn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var n=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(kn.OPEN),this.adapter.addClass(kn.ANIMATE),this.runNextAnimationFrame(function(){n.adapter.addClass(kn.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(kn.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(kn.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(kn.OPENING)||this.adapter.hasClass(kn.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(kn.CLOSING)},e.prototype.handleKeydown=function(n){var i=n.keyCode,r=n.key,s=r==="Escape"||i===27;s&&this.close()},e.prototype.handleTransitionEnd=function(n){var i=kn.OPENING,r=kn.CLOSING,s=kn.OPEN,o=kn.ANIMATE,a=kn.ROOT,l=this.isElement(n.target)&&this.adapter.elementHasClass(n.target,a);!l||(this.isClosing()?(this.adapter.removeClass(s),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(o),this.adapter.removeClass(i),this.adapter.removeClass(r))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(n){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(n,0)})},e.prototype.isElement=function(n){return Boolean(n.classList)},e}(zn);/**
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
 */var IM=function(t){wn(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(Oy);function wM(t){let e,n,i,r,s,o;const a=t[15].default,l=Ce(a,t,t[14],null);let c=[{class:n=ye(Ze({[t[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":t[2]==="dismissible","mdc-drawer--modal":t[2]==="modal","smui-drawer__absolute":t[2]==="modal"&&!t[3]},t[6]))},t[8]],u={};for(let h=0;h<c.length;h+=1)u=j(u,c[h]);return{c(){e=we("aside"),l&&l.c(),this.h()},l(h){e=Re(h,"ASIDE",{class:!0});var d=ge(e);l&&l.l(d),d.forEach(U),this.h()},h(){ae(e,u)},m(h,d){ie(h,e,d),l&&l.m(e,null),t[16](e),r=!0,s||(o=[oe(i=Et.call(null,e,t[0])),oe(t[7].call(null,e)),$e(e,"keydown",t[17]),$e(e,"transitionend",t[18])],s=!0)},p(h,[d]){l&&l.p&&(!r||d&16384)&&Ae(l,a,h,h[14],r?Se(a,h[14],d,null):ke(h[14]),null),ae(e,u=Ne(c,[(!r||d&78&&n!==(n=ye(Ze({[h[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":h[2]==="dismissible","mdc-drawer--modal":h[2]==="modal","smui-drawer__absolute":h[2]==="modal"&&!h[3]},h[6]))))&&{class:n},d&256&&h[8]])),i&&qe(i.update)&&d&1&&i.update.call(null,h[0])},i(h){r||(D(l,h),r=!0)},o(h){B(l,h),r=!1},d(h){h&&U(e),l&&l.d(h),t[16](null),s=!1,Ke(o)}}}function TM(t,e,n){const i=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e;const{FocusTrap:a}=kR,l=tt(Fe());let{use:c=[]}=e,{class:u=""}=e,{variant:h=void 0}=e,{open:d=!1}=e,{fixed:f=!0}=e,p,g,m={},v=null,A,T=!1;Pt("SMUI:list:nav",!0),Pt("SMUI:list:item:nav",!0),Pt("SMUI:list:wrapFocus",!0);let y=h;Ln(()=>{A=new a(p,{skipInitialFocus:!0}),n(4,g=N()),g&&g.init()}),Ji(()=>{g&&g.destroy(),T&&T.removeEventListener("SMUIDrawerScrim:click",V)});function N(){var G,C;T&&T.removeEventListener("SMUIDrawerScrim:click",V),h==="modal"&&(T=(C=(G=p.parentNode)===null||G===void 0?void 0:G.querySelector(".mdc-drawer-scrim"))!==null&&C!==void 0?C:!1,T&&T.addEventListener("SMUIDrawerScrim:click",V));const S=h==="dismissible"?Oy:h==="modal"?IM:void 0;return S?new S({addClass:_,removeClass:w,hasClass:k,elementHasClass:(z,H)=>z.classList.contains(H),saveFocus:()=>v=document.activeElement,restoreFocus:()=>{v&&"focus"in v&&p.contains(document.activeElement)&&v.focus()},focusActiveNavigationItem:()=>{const z=p.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");z&&z.focus()},notifyClose:()=>{n(9,d=!1),et(p,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{n(9,d=!0),et(p,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>A.trapFocus(),releaseFocus:()=>A.releaseFocus()}):void 0}function k(G){return G in m?m[G]:J().classList.contains(G)}function _(G){m[G]||n(6,m[G]=!0,m)}function w(G){(!(G in m)||m[G])&&n(6,m[G]=!1,m)}function V(){g&&"handleScrimClick"in g&&g.handleScrimClick()}function b(G){n(9,d=G)}function O(){return d}function J(){return p}function E(G){ce[G?"unshift":"push"](()=>{p=G,n(5,p)})}const L=G=>g&&g.handleKeydown(G),R=G=>g&&g.handleTransitionEnd(G);return t.$$set=G=>{e=j(j({},e),Xe(G)),n(8,r=ne(e,i)),"use"in G&&n(0,c=G.use),"class"in G&&n(1,u=G.class),"variant"in G&&n(2,h=G.variant),"open"in G&&n(9,d=G.open),"fixed"in G&&n(3,f=G.fixed),"$$scope"in G&&n(14,o=G.$$scope)},t.$$.update=()=>{t.$$.dirty&8212&&y!==h&&(n(13,y=h),g&&g.destroy(),n(6,m={}),n(4,g=N()),g&&g.init()),t.$$.dirty&528&&g&&g.isOpen()!==d&&(d?g.open():g.close())},[c,u,h,f,g,p,m,l,r,d,b,O,J,y,o,s,E,L,R]}class iV extends Ye{constructor(e){super();Qe(this,e,TM,wM,We,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}var rV=xt({class:"mdc-drawer-app-content",component:hi}),sV=xt({class:"mdc-drawer__content",component:hi});xt({class:"mdc-drawer__header",component:hi});xt({class:"mdc-drawer__title",component:sO});xt({class:"mdc-drawer__subtitle",component:oO});xt({class:"smui-card__content",component:hi});xt({class:"mdc-card__media-content",component:hi});xt({class:"mdc-card__action-buttons",component:hi});xt({class:"mdc-card__action-icons",component:hi});const Ly="@firebase/database",My="0.12.4";/**
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
 */let Ny="";function CM(t){Ny=t}/**
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
 */class SM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Bt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:$s(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class AM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Jn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Py=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new SM(e)}}catch{}return new AM},Cr=Py("localStorage"),Md=Py("sessionStorage");/**
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
 */const Cs=new Wa("@firebase/database"),kM=function(){let t=1;return function(){return t++}}(),Dy=function(t){const e=N0(t),n=new R0;n.update(e);const i=n.digest();return yu.encodeByteArray(i)},Jo=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Jo.apply(null,i):typeof i=="object"?e+=Bt(i):e+=i,e+=" "}return e};let Sr=null,Fy=!0;const RM=function(t,e){W(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Cs.logLevel=xe.VERBOSE,Sr=Cs.log.bind(Cs),e&&Md.set("logging_enabled",!0)):typeof t=="function"?Sr=t:(Sr=null,Md.remove("logging_enabled"))},rn=function(...t){if(Fy===!0&&(Fy=!1,Sr===null&&Md.get("logging_enabled")===!0&&RM(!0)),Sr){const e=Jo.apply(null,t);Sr(e)}},Zo=function(t){return function(...e){rn(t,...e)}},Nd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Jo(...t);Cs.error(e)},Ar=function(...t){const e=`FIREBASE FATAL ERROR: ${Jo(...t)}`;throw Cs.error(e),new Error(e)},Un=function(...t){const e="FIREBASE WARNING: "+Jo(...t);Cs.warn(e)},OM=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Un("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},uc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},LM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ss="[MIN_NAME]",kr="[MAX_NAME]",Rr=function(t,e){if(t===e)return 0;if(t===Ss||e===kr)return-1;if(e===Ss||t===kr)return 1;{const n=jy(t),i=jy(e);return n!==null?i!==null?n-i==0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},MM=function(t,e){return t===e?0:t<e?-1:1},$o=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Bt(e))},Pd=function(t){if(typeof t!="object"||t===null)return Bt(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Bt(e[i]),n+=":",n+=Pd(t[e[i]]);return n+="}",n},xy=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function fn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Uy=function(t){W(!uc(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t==-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},NM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},PM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function DM(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const FM=new RegExp("^-?(0*)\\d{1,10}$"),xM=-2147483648,UM=2147483647,jy=function(t){if(FM.test(t)){const e=Number(t);if(e>=xM&&e<=UM)return e}return null},As=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Un("Exception was thrown by user callback.",n),e},Math.floor(0))}},jM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ea=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class VM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Un(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class BM{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(rn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Un(e)}}class Dd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Dd.OWNER="owner";/**
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
 */const Fd="5",Vy="v",By="s",Hy="r",qy="f",Wy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gy="ls",HM="p",xd="ac",zy="websocket",Ky="long_polling";/**
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
 */class qM{constructor(e,n,i,r,s=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Cr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Cr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function WM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Xy(t,e,n){W(typeof e=="string","typeof type must == string"),W(typeof n=="object","typeof params must == object");let i;if(e===zy)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ky)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);WM(t)&&(n.ns=t.namespace);const r=[];return fn(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class GM{constructor(){this.counters_={}}incrementCounter(e,n=1){Jn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return b0(this.counters_)}}/**
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
 */const Ud={},jd={};function Vd(t){const e=t.toString();return Ud[e]||(Ud[e]=new GM),Ud[e]}function zM(t,e){const n=t.toString();return jd[n]||(jd[n]=e()),jd[n]}/**
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
 */class KM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&As(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Qy="start",XM="close",QM="pLPCommand",YM="pRTLPCB",Yy="id",Jy="pw",Zy="ser",JM="cb",ZM="seg",$M="ts",eN="d",tN="dframe",$y=1870,eb=30,nN=$y-eb,iN=25e3,rN=3e4;class ks{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Zo(e),this.stats_=Vd(n),this.urlFn=l=>(this.appCheckToken&&(l[xd]=this.appCheckToken),Xy(n,Ky,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new KM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(rN)),LM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bd((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Qy)this.id=a,this.password=l;else if(o===XM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Qy]="t",i[Zy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[JM]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Vy]=Fd,this.transportSessionId&&(i[By]=this.transportSessionId),this.lastSessionId&&(i[Gy]=this.lastSessionId),this.applicationId&&(i[HM]=this.applicationId),this.appCheckToken&&(i[xd]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Wy.test(location.hostname)&&(i[Hy]=qy);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ks.forceAllow_=!0}static forceDisallow(){ks.forceDisallow_=!0}static isAvailable(){return ks.forceAllow_?!0:!ks.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!NM()&&!PM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Bt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=y0(n),r=xy(i,nN);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[tN]="t",i[Yy]=e,i[Jy]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Bt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Bd{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=kM(),window[QM+this.uniqueCallbackIdentifier]=e,window[YM+this.uniqueCallbackIdentifier]=n,this.myIFrame=Bd.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,"javascript:".length)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){rn("frame writing exception"),a.stack&&rn(a.stack),rn(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||rn("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Yy]=this.myID,e[Jy]=this.myPW,e[Zy]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+eb+i.length<=$y;){const o=this.pendingSegs.shift();i=i+"&"+ZM+r+"="+o.seg+"&"+$M+r+"="+o.ts+"&"+eN+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(iN)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{rn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const sN=16384,oN=45e3;let hc=null;typeof MozWebSocket!="undefined"?hc=MozWebSocket:typeof WebSocket!="undefined"&&(hc=WebSocket);class Kn{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Zo(this.connId),this.stats_=Vd(n),this.connURL=Kn.connectionURL_(n,o,a,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r){const s={};return s[Vy]=Fd,typeof location!="undefined"&&location.hostname&&Wy.test(location.hostname)&&(s[Hy]=qy),n&&(s[By]=n),i&&(s[Gy]=i),r&&(s[xd]=r),Xy(e,zy,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Cr.set("previous_websocket_failure",!0);try{if(!Lp()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new hc(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Kn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&hc!==null&&!Kn.forceDisallow_}static previouslyFailed(){return Cr.isInMemoryStorage||Cr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Cr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=$s(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(W(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Bt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=xy(n,sN);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(oN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kn.responsesRequiredToBeHealthy=2;Kn.healthyTimeout=3e4;/**
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
 */class Hd{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ks,Kn]}initTransports_(e){const n=Kn&&Kn.isAvailable();let i=n&&!Kn.previouslyFailed();if(e.webSocketOnly&&(n||Un("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Kn];else{const r=this.transports_=[];for(const s of Hd.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
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
 */const aN=6e4,lN=5e3,cN=10*1024,uN=100*1024,qd="t",tb="d",hN="s",nb="r",dN="e",ib="o",rb="a",sb="n",ob="p",fN="h";class pN{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Zo("c:"+this.id+":"),this.transportManager_=new Hd(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=ea(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>uN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qd in e){const n=e[qd];n===rb?this.upgradeIfSecondaryHealthy_():n===nb?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ib&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=$o("t",e),i=$o("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ob,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:rb,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:sb,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=$o("t",e),i=$o("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=$o(qd,e);if(tb in e){const i=e[tb];if(n===fN)this.onHandshake_(i);else if(n===sb){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===hN?this.onConnectionShutdown_(i):n===nb?this.onReset_(i):n===dN?Nd("Server Error: "+i):n===ib?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Nd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Fd!==i&&Un("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),ea(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ea(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ob,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Cr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ab{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class lb{constructor(e){this.allowedEvents_=e,this.listeners_={},W(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){W(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class dc extends lb{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!ja()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new dc}getInitialEvent(e){return W(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const cb=32,ub=768;class ze{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ue(){return new ze("")}function Te(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Bi(t){return t.pieces_.length-t.pieceNum_}function nt(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ze(t.pieces_,e)}function Wd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function mN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ta(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function hb(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ze(e,0)}function St(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ze)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new ze(n,0)}function Oe(t){return t.pieceNum_>=t.pieces_.length}function Rn(t,e){const n=Te(t),i=Te(e);if(n===null)return e;if(n===i)return Rn(nt(t),nt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function gN(t,e){const n=ta(t,0),i=ta(e,0);for(let r=0;r<n.length&&r<i.length;r++){const s=Rr(n[r],i[r]);if(s!==0)return s}return n.length===i.length?0:n.length<i.length?-1:1}function Gd(t,e){if(Bi(t)!==Bi(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Hn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Bi(t)>Bi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class _N{constructor(e,n){this.errorPrefix_=n,this.parts_=ta(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=qa(this.parts_[i]);db(this)}}function vN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=qa(e),db(t)}function yN(t){const e=t.parts_.pop();t.byteLength_-=qa(e),t.parts_.length>0&&(t.byteLength_-=1)}function db(t){if(t.byteLength_>ub)throw new Error(t.errorPrefix_+"has a key path longer than "+ub+" bytes ("+t.byteLength_+").");if(t.parts_.length>cb)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+cb+") or object contains a cycle "+Or(t))}function Or(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class zd extends lb{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new zd}getInitialEvent(e){return W(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const na=1e3,bN=60*5*1e3,EN=3*1e3,fb=30*1e3,IN=1.3,wN=3e4,TN="server_kill",pb=3;class pi extends ab{constructor(e,n,i,r,s,o,a,l){super();if(this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=pi.nextPersistentConnectionId_++,this.log_=Zo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=na,this.maxReconnectDelay_=bN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Lp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&dc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(Bt(s)),W(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new wi,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||r!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},EN),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),W(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;pi.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Jn(e,"w")){const i=Kr(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Un(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||k0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=fb)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=A0(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Bt(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Nd("Unrecognized action received from server: "+Bt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){W(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=na,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=na,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wN&&(this.reconnectDelay_=na),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*IN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+pi.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){W(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?rn("getToken() completed but was canceled"):(rn("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new pN(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{Un(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(TN)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Un(h),l())}}}interrupt(e){rn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Va(this.interruptReasons_)&&(this.reconnectDelay_=na,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Pd(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new ze(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){rn("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=pb&&(this.reconnectDelay_=fb,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){rn("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=pb&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ny.replace(/\./g,"-")]=1,ja()?e["framework.cordova"]=1:Eu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=dc.getInstance().currentlyOnline();return Va(this.interruptReasons_)&&e}}pi.nextPersistentConnectionId_=0;pi.nextConnectionId_=0;/**
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
 */class Le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Le(e,n)}}/**
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
 */class fc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new Le(Ss,e),r=new Le(Ss,n);return this.compare(i,r)!==0}minPost(){return Le.MIN}}/**
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
 */let pc;class mb extends fc{static get __EMPTY_NODE(){return pc}static set __EMPTY_NODE(e){pc=e}compare(e,n){return Rr(e.name,n.name)}isDefinedOn(e){throw zr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Le.MIN}maxPost(){return new Le(kr,pc)}makePost(e,n){return W(typeof e=="string","KeyIndex indexValue must always be a string."),new Le(e,pc)}toString(){return".key"}}const Rs=new mb;/**
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
 */class mc{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Wt{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:Wt.RED,this.left=r!=null?r:On.EMPTY_NODE,this.right=s!=null?s:On.EMPTY_NODE}copy(e,n,i,r,s){return new Wt(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return On.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return On.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Wt.RED=!0;Wt.BLACK=!1;class CN{copy(e,n,i,r,s){return this}insert(e,n,i){return new Wt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class On{constructor(e,n=On.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new On(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Wt.BLACK,null,null))}remove(e){return new On(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Wt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new mc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new mc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new mc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new mc(this.root_,null,this.comparator_,!0,e)}}On.EMPTY_NODE=new CN;/**
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
 */function SN(t,e){return Rr(t.name,e.name)}function Kd(t,e){return Rr(t,e)}/**
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
 */let Xd;function AN(t){Xd=t}const gb=function(t){return typeof t=="number"?"number:"+Uy(t):"string:"+t},_b=function(t){if(t.isLeafNode()){const e=t.val();W(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Jn(e,".sv"),"Priority must be a string or number.")}else W(t===Xd||t.isEmpty(),"priority of unexpected type.");W(t===Xd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let vb;class Gt{constructor(e,n=Gt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,W(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),_b(this.priorityNode_)}static set __childrenNodeConstructor(e){vb=e}static get __childrenNodeConstructor(){return vb}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Gt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Gt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Oe(e)?this:Te(e)===".priority"?this.priorityNode_:Gt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Gt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Te(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(W(i!==".priority"||Bi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Gt.__childrenNodeConstructor.EMPTY_NODE.updateChild(nt(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+gb(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Uy(this.value_):e+=this.value_,this.lazyHash_=Dy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Gt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Gt.__childrenNodeConstructor?-1:(W(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=Gt.VALUE_TYPE_ORDER.indexOf(n),s=Gt.VALUE_TYPE_ORDER.indexOf(i);return W(r>=0,"Unknown leaf type: "+n),W(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Gt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let yb,bb;function kN(t){yb=t}function RN(t){bb=t}class ON extends fc{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?Rr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Le.MIN}maxPost(){return new Le(kr,new Gt("[PRIORITY-POST]",bb))}makePost(e,n){const i=yb(e);return new Le(n,new Gt("[PRIORITY-POST]",i))}toString(){return".priority"}}const wt=new ON;/**
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
 */const LN=Math.log(2);class MN{constructor(e){const n=s=>parseInt(Math.log(s)/LN,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gc=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Wt(d,h.node,Wt.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=r(l,f),g=r(f+1,c);return h=t[f],d=n?n(h):h,new Wt(d,h.node,Wt.BLACK,p,g)}},s=function(l){let c=null,u=null,h=t.length;const d=function(p,g){const m=h-p,v=h;h-=p;const A=r(m+1,v),T=t[m],y=n?n(T):T;f(new Wt(y,T.node,g,null,A))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),m=Math.pow(2,l.count-(p+1));g?d(m,Wt.BLACK):(d(m,Wt.BLACK),d(m,Wt.RED))}return u},o=new MN(t.length),a=s(o);return new On(i||e,a)};/**
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
 */let Qd;const Os={};class mi{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return W(Os&&wt,"ChildrenNode.ts has not been loaded"),Qd=Qd||new mi({".priority":Os},{".priority":wt}),Qd}get(e){const n=Kr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof On?n:null}hasIndex(e){return Jn(this.indexSet_,e.toString())}addIndex(e,n){W(e!==Rs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(Le.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=gc(i,e.getCompare()):a=Os;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new mi(u,c)}addToIndexes(e,n){const i=Ba(this.indexes_,(r,s)=>{const o=Kr(this.indexSet_,s);if(W(o,"Missing index implementation for "+s),r===Os)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Le.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),gc(a,o.getCompare())}else return Os;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new Le(e.name,a))),l.insert(e,e.node)}});return new mi(i,this.indexSet_)}removeFromIndexes(e,n){const i=Ba(this.indexes_,r=>{if(r===Os)return r;{const s=n.get(e.name);return s?r.remove(new Le(e.name,s)):r}});return new mi(i,this.indexSet_)}}/**
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
 */let ia;class le{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&_b(this.priorityNode_),this.children_.isEmpty()&&W(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ia||(ia=new le(new On(Kd),null,mi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ia}updatePriority(e){return this.children_.isEmpty()?this:new le(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ia:n}}getChild(e){const n=Te(e);return n===null?this:this.getImmediateChild(n).getChild(nt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(W(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new Le(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?ia:this.priorityNode_;return new le(r,o,s)}}updateChild(e,n){const i=Te(e);if(i===null)return n;{W(Te(e)!==".priority"||Bi(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(nt(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(wt,(o,a)=>{n[o]=a.val(e),i++,s&&le.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+gb(this.getPriority().val())+":"),this.forEachChild(wt,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Dy(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new Le(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Le(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Le.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Le.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ra?-1:0}withIndex(e){if(e===Rs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new le(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Rs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(wt),r=n.getIterator(wt);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Rs?null:this.indexMap_.get(e.toString())}}le.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class NN extends le{constructor(){super(new On(Kd),le.EMPTY_NODE,mi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return le.EMPTY_NODE}isEmpty(){return!1}}const ra=new NN;Object.defineProperties(Le,{MIN:{value:new Le(Ss,le.EMPTY_NODE)},MAX:{value:new Le(kr,ra)}});mb.__EMPTY_NODE=le.EMPTY_NODE;Gt.__childrenNodeConstructor=le;AN(ra);RN(ra);/**
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
 */const PN=!0;function jt(t,e=null){if(t===null)return le.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),W(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Gt(n,jt(e))}if(!(t instanceof Array)&&PN){const n=[];let i=!1;if(fn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=jt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new Le(o,l)))}}),n.length===0)return le.EMPTY_NODE;const s=gc(n,SN,o=>o.name,Kd);if(i){const o=gc(n,wt.getCompare());return new le(s,jt(e),new mi({".priority":o},{".priority":wt}))}else return new le(s,jt(e),mi.Default)}else{let n=le.EMPTY_NODE;return fn(t,(i,r)=>{if(Jn(t,i)&&i.substring(0,1)!=="."){const s=jt(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(jt(e))}}kN(jt);/**
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
 */class DN extends fc{constructor(e){super();this.indexPath_=e,W(!Oe(e)&&Te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?Rr(e.name,n.name):s}makePost(e,n){const i=jt(e),r=le.EMPTY_NODE.updateChild(this.indexPath_,i);return new Le(n,r)}maxPost(){const e=le.EMPTY_NODE.updateChild(this.indexPath_,ra);return new Le(kr,e)}toString(){return ta(this.indexPath_,0).join("/")}}/**
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
 */class FN extends fc{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Rr(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Le.MIN}maxPost(){return Le.MAX}makePost(e,n){const i=jt(e);return new Le(n,i)}toString(){return".value"}}const xN=new FN;/**
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
 */function Eb(t){return{type:"value",snapshotNode:t}}function Ls(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function sa(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function oa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function UN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Yd{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){W(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(sa(n,a)):W(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ls(n,i)):o.trackChildChange(oa(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(wt,(r,s)=>{n.hasChild(r)||i.trackChildChange(sa(r,s))}),n.isLeafNode()||n.forEachChild(wt,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(oa(r,s,o))}else i.trackChildChange(Ls(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?le.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class aa{constructor(e){this.indexedFilter_=new Yd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=aa.getStartPost_(e),this.endPost_=aa.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,r,s,o){return this.matches(new Le(n,i))||(i=le.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=le.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(le.EMPTY_NODE);const s=this;return n.forEachChild(wt,(o,a)=>{s.matches(new Le(o,a))||(r=r.updateImmediateChild(o,le.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class jN{constructor(e){this.rangedFilter_=new aa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new Le(n,i))||(i=le.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=le.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=le.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)r=r.updateImmediateChild(a.name,a.node),o++;else break}}else{r=n.withIndex(this.index_),r=r.updatePriority(le.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,f)=>h(f,d)}else l=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const h=l.getNext();!u&&a(s,h)<=0&&(u=!0),u&&c<this.limit_&&a(h,o)<=0?c++:r=r.updateImmediateChild(h.name,le.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;W(a.numChildren()===this.limit_,"");const l=new Le(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=r.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!i.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(oa(n,i,h)),a.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(sa(n,h));const g=a.updateImmediateChild(n,le.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Ls(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(sa(c.name,c.node)),s.trackChildChange(Ls(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,le.EMPTY_NODE)):e}}/**
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
 */class Jd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=wt}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return W(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return W(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ss}hasEnd(){return this.endSet_}getIndexEndValue(){return W(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return W(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:kr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return W(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===wt}copy(){const e=new Jd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function VN(t){return t.loadsAllData()?new Yd(t.getIndex()):t.hasLimit()?new jN(t):new aa(t)}function Ib(t){const e={};if(t.isDefault())return e;let n;return t.index_===wt?n="$priority":t.index_===xN?n="$value":t.index_===Rs?n="$key":(W(t.index_ instanceof DN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Bt(n),t.startSet_&&(e.startAt=Bt(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Bt(t.indexStartName_))),t.endSet_&&(e.endAt=Bt(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Bt(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function wb(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==wt&&(e.i=t.index_.toString()),e}/**
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
 */class _c extends ab{constructor(e,n,i,r){super();this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Zo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(W(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=_c.getListenId_(e,i),a={};this.listens_[o]=a;const l=Ib(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,i),Kr(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,n){const i=_c.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Ib(e._queryParams),i=e._path.toString(),r=new wi;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+er(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=$s(a.responseText)}catch{Un("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Un("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class BN{constructor(){this.rootNode_=le.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function vc(){return{value:null,children:new Map}}function Ms(t,e,n){if(Oe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Te(e);t.children.has(i)||t.children.set(i,vc());const r=t.children.get(i);e=nt(e),Ms(r,e,n)}}function Zd(t,e){if(Oe(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(wt,(i,r)=>{Ms(t,new ze(i),r)}),Zd(t,e)}}else if(t.children.size>0){const n=Te(e);return e=nt(e),t.children.has(n)&&Zd(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function $d(t,e,n){t.value!==null?n(e,t.value):HN(t,(i,r)=>{const s=new ze(e.toString()+"/"+i);$d(r,s,n)})}function HN(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class qN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&fn(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const Tb=10*1e3,WN=30*1e3,GN=5*60*1e3;class zN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new qN(e);const i=Tb+(WN-Tb)*Math.random();ea(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;fn(e,(r,s)=>{s>0&&Jn(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),ea(this.reportStats_.bind(this),Math.floor(Math.random()*2*GN))}}/**
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
 */var Xn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xn||(Xn={}));function Cb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ef(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class yc{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Xn.ACK_USER_WRITE,this.source=Cb()}operationForChild(e){if(Oe(this.path)){if(this.affectedTree.value!=null)return W(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ze(e));return new yc(Ue(),n,this.revert)}}else return W(Te(this.path)===e,"operationForChild called for unrelated child."),new yc(nt(this.path),this.affectedTree,this.revert)}}/**
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
 */class la{constructor(e,n){this.source=e,this.path=n,this.type=Xn.LISTEN_COMPLETE}operationForChild(e){return Oe(this.path)?new la(this.source,Ue()):new la(this.source,nt(this.path))}}/**
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
 */class Lr{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Xn.OVERWRITE}operationForChild(e){return Oe(this.path)?new Lr(this.source,Ue(),this.snap.getImmediateChild(e)):new Lr(this.source,nt(this.path),this.snap)}}/**
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
 */class ca{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Xn.MERGE}operationForChild(e){if(Oe(this.path)){const n=this.children.subtree(new ze(e));return n.isEmpty()?null:n.value?new Lr(this.source,Ue(),n.value):new ca(this.source,Ue(),n)}else return W(Te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ca(this.source,nt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Mr{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=Te(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class KN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function XN(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(UN(o.childName,o.snapshotNode))}),ua(t,r,"child_removed",e,i,n),ua(t,r,"child_added",e,i,n),ua(t,r,"child_moved",s,i,n),ua(t,r,"child_changed",e,i,n),ua(t,r,"value",e,i,n),r}function ua(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>YN(t,a,l)),o.forEach(a=>{const l=QN(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function QN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function YN(t,e,n){if(e.childName==null||n.childName==null)throw zr("Should only compare child_ events.");const i=new Le(e.childName,e.snapshotNode),r=new Le(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
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
 */function bc(t,e){return{eventCache:t,serverCache:e}}function ha(t,e,n,i){return bc(new Mr(e,n,i),t.serverCache)}function Sb(t,e,n,i){return bc(t.eventCache,new Mr(e,n,i))}function nf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Nr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let rf;const JN=()=>(rf||(rf=new On(MM)),rf);class mt{constructor(e,n=JN()){this.value=e,this.children=n}static fromObject(e){let n=new mt(null);return fn(e,(i,r)=>{n=n.set(new ze(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ue(),value:this.value};if(Oe(e))return null;{const i=Te(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(nt(e),n);return s!=null?{path:St(new ze(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Oe(e))return this;{const n=Te(e),i=this.children.get(n);return i!==null?i.subtree(nt(e)):new mt(null)}}set(e,n){if(Oe(e))return new mt(n,this.children);{const i=Te(e),s=(this.children.get(i)||new mt(null)).set(nt(e),n),o=this.children.insert(i,s);return new mt(this.value,o)}}remove(e){if(Oe(e))return this.children.isEmpty()?new mt(null):new mt(null,this.children);{const n=Te(e),i=this.children.get(n);if(i){const r=i.remove(nt(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new mt(null):new mt(this.value,s)}else return this}}get(e){if(Oe(e))return this.value;{const n=Te(e),i=this.children.get(n);return i?i.get(nt(e)):null}}setTree(e,n){if(Oe(e))return n;{const i=Te(e),s=(this.children.get(i)||new mt(null)).setTree(nt(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new mt(this.value,o)}}fold(e){return this.fold_(Ue(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(St(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Ue(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(Oe(e))return null;{const s=Te(e),o=this.children.get(s);return o?o.findOnPath_(nt(e),St(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ue(),n)}foreachOnPath_(e,n,i){if(Oe(e))return this;{this.value&&i(n,this.value);const r=Te(e),s=this.children.get(r);return s?s.foreachOnPath_(nt(e),St(n,r),i):new mt(null)}}foreach(e){this.foreach_(Ue(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(St(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Qn{constructor(e){this.writeTree_=e}static empty(){return new Qn(new mt(null))}}function da(t,e,n){if(Oe(e))return new Qn(new mt(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Rn(r,e);return s=s.updateChild(o,n),new Qn(t.writeTree_.set(r,s))}else{const r=new mt(n),s=t.writeTree_.setTree(e,r);return new Qn(s)}}}function Ab(t,e,n){let i=t;return fn(n,(r,s)=>{i=da(i,St(e,r),s)}),i}function kb(t,e){if(Oe(e))return Qn.empty();{const n=t.writeTree_.setTree(e,new mt(null));return new Qn(n)}}function sf(t,e){return Pr(t,e)!=null}function Pr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Rn(n.path,e)):null}function Rb(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(wt,(i,r)=>{e.push(new Le(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new Le(i,r.value))}),e}function Hi(t,e){if(Oe(e))return t;{const n=Pr(t,e);return n!=null?new Qn(new mt(n)):new Qn(t.writeTree_.subtree(e))}}function of(t){return t.writeTree_.isEmpty()}function Ns(t,e){return Ob(Ue(),t.writeTree_,e)}function Ob(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(W(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=Ob(St(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(St(t,".priority"),i)),n}}/**
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
 */function af(t,e){return Db(e,t)}function ZN(t,e,n,i,r){W(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=da(t.visibleWrites,e,n)),t.lastWriteId=i}function $N(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function eP(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);W(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&tP(a,i.path)?r=!1:Hn(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return nP(t),!0;if(i.snap)t.visibleWrites=kb(t.visibleWrites,i.path);else{const a=i.children;fn(a,l=>{t.visibleWrites=kb(t.visibleWrites,St(i.path,l))})}return!0}else return!1}function tP(t,e){if(t.snap)return Hn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Hn(St(t.path,n),e))return!0;return!1}function nP(t){t.visibleWrites=Lb(t.allWrites,iP,Ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function iP(t){return t.visible}function Lb(t,e,n){let i=Qn.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)Hn(n,o)?(a=Rn(n,o),i=da(i,a,s.snap)):Hn(o,n)&&(a=Rn(o,n),i=da(i,Ue(),s.snap.getChild(a)));else if(s.children){if(Hn(n,o))a=Rn(n,o),i=Ab(i,a,s.children);else if(Hn(o,n))if(a=Rn(o,n),Oe(a))i=Ab(i,Ue(),s.children);else{const l=Kr(s.children,Te(a));if(l){const c=l.getChild(nt(a));i=da(i,Ue(),c)}}}else throw zr("WriteRecord should have .snap or .children")}}return i}function Mb(t,e,n,i,r){if(!i&&!r){const s=Pr(t.visibleWrites,e);if(s!=null)return s;{const o=Hi(t.visibleWrites,e);if(of(o))return n;if(n==null&&!sf(o,Ue()))return null;{const a=n||le.EMPTY_NODE;return Ns(o,a)}}}else{const s=Hi(t.visibleWrites,e);if(!r&&of(s))return n;if(!r&&n==null&&!sf(s,Ue()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(Hn(c.path,e)||Hn(e,c.path))},a=Lb(t.allWrites,o,e),l=n||le.EMPTY_NODE;return Ns(a,l)}}}function rP(t,e,n){let i=le.EMPTY_NODE;const r=Pr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(wt,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Hi(t.visibleWrites,e);return n.forEachChild(wt,(o,a)=>{const l=Ns(Hi(s,new ze(o)),a);i=i.updateImmediateChild(o,l)}),Rb(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Hi(t.visibleWrites,e);return Rb(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function sP(t,e,n,i,r){W(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=St(e,n);if(sf(t.visibleWrites,s))return null;{const o=Hi(t.visibleWrites,s);return of(o)?r.getChild(n):Ns(o,r.getChild(n))}}function oP(t,e,n,i){const r=St(e,n),s=Pr(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Hi(t.visibleWrites,r);return Ns(o,i.getNode().getImmediateChild(n))}else return null}function aP(t,e){return Pr(t.visibleWrites,e)}function lP(t,e,n,i,r,s,o){let a;const l=Hi(t.visibleWrites,e),c=Pr(l,Ue());if(c!=null)a=c;else if(n!=null)a=Ns(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<r;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function cP(){return{visibleWrites:Qn.empty(),allWrites:[],lastWriteId:-1}}function Ec(t,e,n,i){return Mb(t.writeTree,t.treePath,e,n,i)}function lf(t,e){return rP(t.writeTree,t.treePath,e)}function Nb(t,e,n,i){return sP(t.writeTree,t.treePath,e,n,i)}function Ic(t,e){return aP(t.writeTree,St(t.treePath,e))}function uP(t,e,n,i,r,s){return lP(t.writeTree,t.treePath,e,n,i,r,s)}function cf(t,e,n){return oP(t.writeTree,t.treePath,e,n)}function Pb(t,e){return Db(St(t.treePath,e),t.writeTree)}function Db(t,e){return{treePath:t,writeTree:e}}/**
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
 */class hP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;W(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),W(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,oa(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,sa(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,Ls(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,oa(i,e.snapshotNode,r.oldSnap));else throw zr("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class dP{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Fb=new dP;class uf{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Mr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cf(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Nr(this.viewCache_),s=uP(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
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
 */function fP(t){return{filter:t}}function pP(t,e){W(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),W(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function mP(t,e,n,i,r){const s=new hP;let o,a;if(n.type===Xn.OVERWRITE){const c=n;c.source.fromUser?o=hf(t,e,c.path,c.snap,i,r,s):(W(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Oe(c.path),o=wc(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===Xn.MERGE){const c=n;c.source.fromUser?o=_P(t,e,c.path,c.children,i,r,s):(W(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=df(t,e,c.path,c.children,i,r,a,s))}else if(n.type===Xn.ACK_USER_WRITE){const c=n;c.revert?o=bP(t,e,c.path,i,r,s):o=vP(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===Xn.LISTEN_COMPLETE)o=yP(t,e,n.path,i,s);else throw zr("Unknown operation type: "+n.type);const l=s.getChanges();return gP(e,o,l),{viewCache:o,changes:l}}function gP(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=nf(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Eb(nf(e)))}}function xb(t,e,n,i,r,s){const o=e.eventCache;if(Ic(i,n)!=null)return e;{let a,l;if(Oe(n))if(W(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Nr(e),u=c instanceof le?c:le.EMPTY_NODE,h=lf(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=Ec(i,Nr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=Te(n);if(c===".priority"){W(Bi(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Nb(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=nt(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Nb(i,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=cf(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,r,s):a=o.getNode()}}return ha(e,a,o.isFullyInitialized()||Oe(n),t.filter.filtersNodes())}}function wc(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Oe(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=Te(n);if(!l.isCompleteForPath(n)&&Bi(n)>1)return e;const p=nt(n),m=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),m):c=u.updateChild(l.getNode(),f,m,p,Fb,null)}const h=Sb(e,c,l.isFullyInitialized()||Oe(n),u.filtersNodes()),d=new uf(r,h,s);return xb(t,h,n,r,d,a)}function hf(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new uf(r,e,s);if(Oe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ha(e,c,!0,t.filter.filtersNodes());else{const h=Te(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=ha(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=nt(n),f=a.getNode().getImmediateChild(h);let p;if(Oe(d))p=i;else{const g=u.getCompleteChild(h);g!=null?Wd(d)===".priority"&&g.getChild(hb(d)).isEmpty()?p=g:p=g.updateChild(d,i):p=le.EMPTY_NODE}if(f.equals(p))l=e;else{const g=t.filter.updateChild(a.getNode(),h,p,d,u,o);l=ha(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ub(t,e){return t.eventCache.isCompleteForChild(e)}function _P(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=St(n,l);Ub(e,Te(u))&&(a=hf(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=St(n,l);Ub(e,Te(u))||(a=hf(t,a,u,c,r,s,o))}),a}function jb(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function df(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Oe(n)?c=i:c=new mt(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=jb(t,f,d);l=wc(t,l,new ze(h),p,r,s,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===void 0;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),g=jb(t,p,d);l=wc(t,l,new ze(h),g,r,s,o,a)}}),l}function vP(t,e,n,i,r,s,o){if(Ic(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(Oe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return wc(t,e,n,l.getNode().getChild(n),r,s,a,o);if(Oe(n)){let c=new mt(null);return l.getNode().forEachChild(Rs,(u,h)=>{c=c.set(new ze(u),h)}),df(t,e,n,c,r,s,a,o)}else return e}else{let c=new mt(null);return i.foreach((u,h)=>{const d=St(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),df(t,e,n,c,r,s,a,o)}}function yP(t,e,n,i,r){const s=e.serverCache,o=Sb(e,s.getNode(),s.isFullyInitialized()||Oe(n),s.isFiltered());return xb(t,o,n,i,Fb,r)}function bP(t,e,n,i,r,s){let o;if(Ic(i,n)!=null)return e;{const a=new uf(i,e,r),l=e.eventCache.getNode();let c;if(Oe(n)||Te(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ec(i,Nr(e));else{const h=e.serverCache.getNode();W(h instanceof le,"serverChildren would be complete if leaf node"),u=lf(i,h)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=Te(n);let h=cf(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,nt(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,le.EMPTY_NODE,nt(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ec(i,Nr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Ic(i,Ue())!=null,ha(e,c,o,t.filter.filtersNodes())}}/**
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
 */class EP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new Yd(i.getIndex()),s=VN(i);this.processor_=fP(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(le.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(le.EMPTY_NODE,a.getNode(),null),u=new Mr(l,o.isFullyInitialized(),r.filtersNodes()),h=new Mr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=bc(h,u),this.eventGenerator_=new KN(this.query_)}get query(){return this.query_}}function IP(t){return t.viewCache_.serverCache.getNode()}function wP(t,e){const n=Nr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Oe(e)&&!n.getImmediateChild(Te(e)).isEmpty())?n.getChild(e):null}function Vb(t){return t.eventRegistrations_.length===0}function TP(t,e){t.eventRegistrations_.push(e)}function Bb(t,e,n){const i=[];if(n){W(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function Hb(t,e,n,i){e.type===Xn.MERGE&&e.source.queryId!==null&&(W(Nr(t.viewCache_),"We should always have a full cache before handling merges"),W(nf(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=mP(t.processor_,r,e,n,i);return pP(t.processor_,s.viewCache),W(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,qb(t,s.changes,s.viewCache.eventCache.getNode(),null)}function CP(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(wt,(s,o)=>{i.push(Ls(s,o))}),n.isFullyInitialized()&&i.push(Eb(n.getNode())),qb(t,i,n.getNode(),e)}function qb(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return XN(t.eventGenerator_,e,n,r)}/**
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
 */let Tc;class SP{constructor(){this.views=new Map}}function AP(t){W(!Tc,"__referenceConstructor has already been defined"),Tc=t}function kP(){return W(Tc,"Reference.ts has not been loaded"),Tc}function RP(t){return t.views.size===0}function ff(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return W(s!=null,"SyncTree gave us an op for an invalid query."),Hb(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(Hb(o,e,n,i));return s}}function OP(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ec(n,r?i:null),l=!1;a?l=!0:i instanceof le?(a=lf(n,i),l=!1):(a=le.EMPTY_NODE,l=!1);const c=bc(new Mr(a,l,!1),new Mr(i,r,!1));return new EP(e,c)}return o}function LP(t,e,n,i,r,s){const o=OP(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),TP(o,n),CP(o,n)}function MP(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=qi(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(Bb(c,n,i)),Vb(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(Bb(l,n,i)),Vb(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!qi(t)&&s.push(new(kP())(e._repo,e._path)),{removed:s,events:o}}function Wb(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ps(t,e){let n=null;for(const i of t.views.values())n=n||wP(i,e);return n}function Gb(t,e){if(e._queryParams.loadsAllData())return Cc(t);{const i=e._queryIdentifier;return t.views.get(i)}}function zb(t,e){return Gb(t,e)!=null}function qi(t){return Cc(t)!=null}function Cc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Sc;function NP(t){W(!Sc,"__referenceConstructor has already been defined"),Sc=t}function PP(){return W(Sc,"Reference.ts has not been loaded"),Sc}let DP=1;class Kb{constructor(e){this.listenProvider_=e,this.syncPointTree_=new mt(null),this.pendingWriteTree_=cP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function FP(t,e,n,i,r){return ZN(t.pendingWriteTree_,e,n,i,r),r?fa(t,new Lr(Cb(),e,n)):[]}function Ds(t,e,n=!1){const i=$N(t.pendingWriteTree_,e);if(eP(t.pendingWriteTree_,e)){let s=new mt(null);return i.snap!=null?s=s.set(Ue(),!0):fn(i.children,o=>{s=s.set(new ze(o),!0)}),fa(t,new yc(i.path,s,n))}else return[]}function Ac(t,e,n){return fa(t,new Lr(ef(),e,n))}function xP(t,e,n){const i=mt.fromObject(n);return fa(t,new ca(ef(),e,i))}function UP(t,e){return fa(t,new la(ef(),e))}function jP(t,e,n){const i=mf(t,n);if(i){const r=gf(i),s=r.path,o=r.queryId,a=Rn(s,e),l=new la(tf(o),a);return _f(t,s,l)}else return[]}function pf(t,e,n,i){const r=e._path,s=t.syncPointTree_.get(r);let o=[];if(s&&(e._queryIdentifier==="default"||zb(s,e))){const a=MP(s,e,n,i);RP(s)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const l=a.removed;o=a.events;const c=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(h,d)=>qi(d));if(c&&!u){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const d=HP(h);for(let f=0;f<d.length;++f){const p=d[f],g=p.query,m=Zb(t,p);t.listenProvider_.startListening(pa(g),kc(t,g),m.hashFn,m.onComplete)}}}if(!u&&l.length>0&&!i)if(c){const h=null;t.listenProvider_.stopListening(pa(e),h)}else l.forEach(h=>{const d=t.queryToTagMap.get(Rc(h));t.listenProvider_.stopListening(pa(h),d)});qP(t,l)}return o}function VP(t,e,n,i){const r=mf(t,i);if(r!=null){const s=gf(r),o=s.path,a=s.queryId,l=Rn(o,e),c=new Lr(tf(a),l,n);return _f(t,o,c)}else return[]}function BP(t,e,n,i){const r=mf(t,i);if(r){const s=gf(r),o=s.path,a=s.queryId,l=Rn(o,e),c=mt.fromObject(n),u=new ca(tf(a),l,c);return _f(t,o,u)}else return[]}function Xb(t,e,n){const i=e._path;let r=null,s=!1;t.syncPointTree_.foreachOnPath(i,(h,d)=>{const f=Rn(h,i);r=r||Ps(d,f),s=s||qi(d)});let o=t.syncPointTree_.get(i);o?(s=s||qi(o),r=r||Ps(o,Ue())):(o=new SP,t.syncPointTree_=t.syncPointTree_.set(i,o));let a;r!=null?a=!0:(a=!1,r=le.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((d,f)=>{const p=Ps(f,Ue());p&&(r=r.updateImmediateChild(d,p))}));const l=zb(o,e);if(!l&&!e._queryParams.loadsAllData()){const h=Rc(e);W(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const d=WP();t.queryToTagMap.set(h,d),t.tagToQueryMap.set(d,h)}const c=af(t.pendingWriteTree_,i);let u=LP(o,e,n,c,r,a);if(!l&&!s){const h=Gb(o,e);u=u.concat(GP(t,e,h))}return u}function Qb(t,e,n){const i=!0,r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Rn(o,e),c=Ps(a,l);if(c)return c});return Mb(r,e,s,n,i)}function fa(t,e){return Yb(e,t.syncPointTree_,null,af(t.pendingWriteTree_,Ue()))}function Yb(t,e,n,i){if(Oe(t.path))return Jb(t,e,n,i);{const r=e.get(Ue());n==null&&r!=null&&(n=Ps(r,Ue()));let s=[];const o=Te(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Pb(i,o);s=s.concat(Yb(a,l,c,u))}return r&&(s=s.concat(ff(r,t,i,n))),s}}function Jb(t,e,n,i){const r=e.get(Ue());n==null&&r!=null&&(n=Ps(r,Ue()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Pb(i,o),u=t.operationForChild(o);u&&(s=s.concat(Jb(u,a,l,c)))}),r&&(s=s.concat(ff(r,t,i,n))),s}function Zb(t,e){const n=e.query,i=kc(t,n);return{hashFn:()=>(IP(e)||le.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?jP(t,n._path,i):UP(t,n._path);{const s=DM(r,n);return pf(t,n,null,s)}}}}function kc(t,e){const n=Rc(e);return t.queryToTagMap.get(n)}function Rc(t){return t._path.toString()+"$"+t._queryIdentifier}function mf(t,e){return t.tagToQueryMap.get(e)}function gf(t){const e=t.indexOf("$");return W(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ze(t.substr(0,e))}}function _f(t,e,n){const i=t.syncPointTree_.get(e);W(i,"Missing sync point for query tag that we're tracking");const r=af(t.pendingWriteTree_,e);return ff(i,n,r,null)}function HP(t){return t.fold((e,n,i)=>{if(n&&qi(n))return[Cc(n)];{let r=[];return n&&(r=Wb(n)),fn(i,(s,o)=>{r=r.concat(o)}),r}})}function pa(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(PP())(t._repo,t._path):t}function qP(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=Rc(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function WP(){return DP++}function GP(t,e,n){const i=e._path,r=kc(t,e),s=Zb(t,n),o=t.listenProvider_.startListening(pa(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)W(!qi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!Oe(c)&&u&&qi(u))return[Cc(u).query];{let d=[];return u&&(d=d.concat(Wb(u).map(f=>f.query))),fn(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(pa(u),kc(t,u))}}return o}/**
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
 */class vf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vf(n)}node(){return this.node_}}class yf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=St(this.path_,e);return new yf(this.syncTree_,n)}node(){return Qb(this.syncTree_,this.path_)}}const zP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},$b=function(t,e,n){if(!t||typeof t!="object")return t;if(W(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return KP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return XP(t[".sv"],e);W(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},KP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:W(!1,"Unexpected server value: "+t)}},XP=function(t,e,n){t.hasOwnProperty("increment")||W(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&W(!1,"Unexpected increment value: "+i);const r=e.node();if(W(r!==null&&typeof r!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},QP=function(t,e,n,i){return bf(e,new yf(n,t),i)},YP=function(t,e,n){return bf(t,new vf(e),n)};function bf(t,e,n){const i=t.getPriority().val(),r=$b(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=$b(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Gt(a,jt(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new Gt(r))),o.forEachChild(wt,(a,l)=>{const c=bf(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Ef{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function If(t,e){let n=e instanceof ze?e:new ze(e),i=t,r=Te(n);for(;r!==null;){const s=Kr(i.node.children,r)||{children:{},childCount:0};i=new Ef(r,i,s),n=nt(n),r=Te(n)}return i}function Fs(t){return t.node.value}function eE(t,e){t.node.value=e,wf(t)}function tE(t){return t.node.childCount>0}function JP(t){return Fs(t)===void 0&&!tE(t)}function Oc(t,e){fn(t.node.children,(n,i)=>{e(new Ef(n,t,i))})}function nE(t,e,n,i){n&&!i&&e(t),Oc(t,r=>{nE(r,e,!0,i)}),n&&i&&e(t)}function ZP(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ma(t){return new ze(t.parent===null?t.name:ma(t.parent)+"/"+t.name)}function wf(t){t.parent!==null&&$P(t.parent,t.name,t)}function $P(t,e,n){const i=JP(n),r=Jn(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,wf(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,wf(t))}/**
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
 */const eD=/[\[\].#$\/\u0000-\u001F\u007F]/,tD=/[\[\].#$\u0000-\u001F\u007F]/,Tf=10*1024*1024,Cf=function(t){return typeof t=="string"&&t.length!==0&&!eD.test(t)},iE=function(t){return typeof t=="string"&&t.length!==0&&!tD.test(t)},nD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),iE(t)},rE=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!uc(t)||t&&typeof t=="object"&&Jn(t,".sv")},sE=function(t,e,n,i){i&&e===void 0||Lc(Xr(t,"value"),e,n)},Lc=function(t,e,n){const i=n instanceof ze?new _N(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Or(i));if(typeof e=="function")throw new Error(t+"contains a function "+Or(i)+" with contents = "+e.toString());if(uc(e))throw new Error(t+"contains "+e.toString()+" "+Or(i));if(typeof e=="string"&&e.length>Tf/3&&qa(e)>Tf)throw new Error(t+"contains a string greater than "+Tf+" utf8 bytes "+Or(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(fn(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Cf(o)))throw new Error(t+" contains an invalid key ("+o+") "+Or(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vN(i,o),Lc(t,a,i),yN(i)}),r&&s)throw new Error(t+' contains ".value" child '+Or(i)+" in addition to actual children.")}},iD=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const s=ta(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Cf(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(gN);let r=null;for(n=0;n<e.length;n++){if(i=e[n],r!==null&&Hn(r,i))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},rD=function(t,e,n,i){if(i&&e===void 0)return;const r=Xr(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];fn(e,(o,a)=>{const l=new ze(o);if(Lc(r,a,St(n,l)),Wd(l)===".priority"&&!rE(a))throw new Error(r+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),iD(r,s)},sD=function(t,e,n){if(!(n&&e===void 0)){if(uc(e))throw new Error(Xr(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!rE(e))throw new Error(Xr(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},oE=function(t,e,n,i){if(!(i&&n===void 0)&&!iE(n))throw new Error(Xr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},oD=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),oE(t,e,n,i)},Mc=function(t,e){if(Te(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},aD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Cf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!nD(n))throw new Error(Xr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class lD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function aE(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!Gd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function lE(t,e,n){aE(t,n),cE(t,i=>Gd(i,e))}function Dr(t,e,n){aE(t,n),cE(t,i=>Hn(i,e)||Hn(e,i))}function cE(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(cD(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function cD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Sr&&rn("event: "+n.toString()),As(i)}}}/**
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
 */const uD="repo_interrupt",hD=25;class dD{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vc(),this.transactionQueueTree_=new Ef,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fD(t,e,n){if(t.stats_=Vd(t.repoInfo_),t.forceRestClient_||jM())t.server_=new _c(t.repoInfo_,(i,r,s,o)=>{hE(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>dE(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Bt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new pi(t.repoInfo_,e,(i,r,s,o)=>{hE(t,i,r,s,o)},i=>{dE(t,i)},i=>{mD(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=zM(t.repoInfo_,()=>new zN(t.stats_,t.server_)),t.infoData_=new BN,t.infoSyncTree_=new Kb({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Ac(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Sf(t,"connected",!1),t.serverSyncTree_=new Kb({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);Dr(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function pD(t){const n=t.infoData_.getNode(new ze(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function uE(t){return zP({timestamp:pD(t)})}function hE(t,e,n,i,r){t.dataUpdateCount++;const s=new ze(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=Ba(n,c=>jt(c));o=BP(t.serverSyncTree_,s,l,r)}else{const l=jt(n);o=VP(t.serverSyncTree_,s,l,r)}else if(i){const l=Ba(n,c=>jt(c));o=xP(t.serverSyncTree_,s,l)}else{const l=jt(n);o=Ac(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=kf(t,s)),Dr(t.eventQueue_,a,o)}function dE(t,e){Sf(t,"connected",e),e===!1&&_D(t)}function mD(t,e){fn(e,(n,i)=>{Sf(t,n,i)})}function Sf(t,e,n){const i=new ze("/.info/"+e),r=jt(n);t.infoData_.updateSnapshot(i,r);const s=Ac(t.infoSyncTree_,i,r);Dr(t.eventQueue_,i,s)}function gD(t){return t.nextWriteId_++}function _D(t){mE(t,"onDisconnectEvents");const e=uE(t),n=vc();$d(t.onDisconnect_,Ue(),(r,s)=>{const o=QP(r,s,t.serverSyncTree_,e);Ms(n,r,o)});let i=[];$d(n,Ue(),(r,s)=>{i=i.concat(Ac(t.serverSyncTree_,r,s));const o=CD(t,r);kf(t,o)}),t.onDisconnect_=vc(),Dr(t.eventQueue_,Ue(),i)}function vD(t,e,n){t.server_.onDisconnectCancel(e.toString(),(i,r)=>{i==="ok"&&Zd(t.onDisconnect_,e),ga(t,n,i,r)})}function fE(t,e,n,i){const r=jt(n);t.server_.onDisconnectPut(e.toString(),r.val(!0),(s,o)=>{s==="ok"&&Ms(t.onDisconnect_,e,r),ga(t,i,s,o)})}function yD(t,e,n,i,r){const s=jt(n,i);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Ms(t.onDisconnect_,e,s),ga(t,r,o,a)})}function bD(t,e,n,i){if(Va(n)){rn("onDisconnect().update() called with empty data.  Don't do anything."),ga(t,i,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(r,s)=>{r==="ok"&&fn(n,(o,a)=>{const l=jt(a);Ms(t.onDisconnect_,St(e,o),l)}),ga(t,i,r,s)})}function ED(t,e,n){let i;Te(e._path)===".info"?i=Xb(t.infoSyncTree_,e,n):i=Xb(t.serverSyncTree_,e,n),lE(t.eventQueue_,e._path,i)}function pE(t,e,n){let i;Te(e._path)===".info"?i=pf(t.infoSyncTree_,e,n):i=pf(t.serverSyncTree_,e,n),lE(t.eventQueue_,e._path,i)}function ID(t){t.persistentConnection_&&t.persistentConnection_.interrupt(uD)}function mE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),rn(n,...e)}function ga(t,e,n,i){e&&As(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function gE(t,e,n){return Qb(t.serverSyncTree_,e,n)||le.EMPTY_NODE}function Af(t,e=t.transactionQueueTree_){if(e||Nc(t,e),Fs(e)){const n=vE(t,e);W(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&wD(t,ma(e),n)}else tE(e)&&Oc(e,n=>{Af(t,n)})}function wD(t,e,n){const i=n.map(c=>c.currentWriteId),r=gE(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];W(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Rn(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{mE(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Ds(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Nc(t,If(t.transactionQueueTree_,e)),Af(t,t.transactionQueueTree_),Dr(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)As(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Un("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}kf(t,e)}},o)}function kf(t,e){const n=_E(t,e),i=ma(n),r=vE(t,n);return TD(t,r,i),i}function TD(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Rn(n,l.path);let u=!1,h;if(W(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,r=r.concat(Ds(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=hD)u=!0,h="maxretry",r=r.concat(Ds(t.serverSyncTree_,l.currentWriteId,!0));else{const d=gE(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Lc("transaction failed: Data returned ",f,l.path);let p=jt(f);typeof f=="object"&&f!=null&&Jn(f,".priority")||(p=p.updatePriority(d.getPriority()));const m=l.currentWriteId,v=uE(t),A=YP(p,d,v);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=A,l.currentWriteId=gD(t),o.splice(o.indexOf(m),1),r=r.concat(FP(t.serverSyncTree_,l.path,A,l.currentWriteId,l.applyLocally)),r=r.concat(Ds(t.serverSyncTree_,m,!0))}else u=!0,h="nodata",r=r.concat(Ds(t.serverSyncTree_,l.currentWriteId,!0))}Dr(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Nc(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)As(i[a]);Af(t,t.transactionQueueTree_)}function _E(t,e){let n,i=t.transactionQueueTree_;for(n=Te(e);n!==null&&Fs(i)===void 0;)i=If(i,n),e=nt(e),n=Te(e);return i}function vE(t,e){const n=[];return yE(t,e,n),n.sort((i,r)=>i.order-r.order),n}function yE(t,e,n){const i=Fs(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Oc(e,r=>{yE(t,r,n)})}function Nc(t,e){const n=Fs(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,eE(e,n.length>0?n:void 0)}Oc(e,i=>{Nc(t,i)})}function CD(t,e){const n=ma(_E(t,e)),i=If(t.transactionQueueTree_,e);return ZP(i,r=>{Rf(t,r)}),Rf(t,i),nE(i,r=>{Rf(t,r)}),n}function Rf(t,e){const n=Fs(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(W(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(W(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Ds(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?eE(e,void 0):n.length=s+1,Dr(t.eventQueue_,ma(e),r);for(let o=0;o<i.length;o++)As(i[o])}}/**
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
 */function SD(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function AD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Un(`Invalid query segment '${n}' in query '${t}'`)}return e}const bE=function(t,e){const n=kD(t),i=n.namespace;n.domain==="firebase.com"&&Ar(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Ar("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||OM();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new qM(n.host,n.secure,i,e,r,"",i!==n.subdomain),path:new ze(n.pathString)}},kD=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=SD(t.substring(u,h)));const d=AD(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=i}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class EE{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Bt(this.snapshot.exportVal())}}class IE{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class RD{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return W(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class OD{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new wi;return vD(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Mc("OnDisconnect.remove",this._path);const e=new wi;return fE(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Mc("OnDisconnect.set",this._path),sE("OnDisconnect.set",e,this._path,!1);const n=new wi;return fE(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Mc("OnDisconnect.setWithPriority",this._path),sE("OnDisconnect.setWithPriority",e,this._path,!1),sD("OnDisconnect.setWithPriority",n,!1);const i=new wi;return yD(this._repo,this._path,e,n,i.wrapCallback(()=>{})),i.promise}update(e){Mc("OnDisconnect.update",this._path),rD("OnDisconnect.update",e,this._path,!1);const n=new wi;return bD(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Of{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return Oe(this._path)?null:Wd(this._path)}get ref(){return new gi(this._repo,this._path)}get _queryIdentifier(){const e=wb(this._queryParams),n=Pd(e);return n==="{}"?"default":n}get _queryObject(){return wb(this._queryParams)}isEqual(e){if(e=rt(e),!(e instanceof Of))return!1;const n=this._repo===e._repo,i=Gd(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+mN(this._path)}}class gi extends Of{constructor(e,n){super(e,n,new Jd,!1)}get parent(){const e=hb(this._path);return e===null?null:new gi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _a{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ze(e),i=Pc(this.ref,e);return new _a(this._node.getChild(n),i,wt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new _a(r,Pc(this.ref,i),wt)))}hasChild(e){const n=new ze(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function oV(t,e){return t=rt(t),t._checkNotDeleted("ref"),e!==void 0?Pc(t._root,e):t._root}function Pc(t,e){return t=rt(t),Te(t._path)===null?oD("child","path",e,!1):oE("child","path",e,!1),new gi(t._repo,St(t._path,e))}function aV(t){return t=rt(t),new OD(t._repo,t._path)}class Lf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new EE("value",this,new _a(e.snapshotNode,new gi(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new IE(this,e,n):null}matches(e){return e instanceof Lf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Mf{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new IE(this,e,n):null}createEvent(e,n){W(e.childName!=null,"Child events should have a childName.");const i=Pc(new gi(n._repo,n._path),e.childName),r=n._queryParams.getIndex();return new EE(e.type,this,new _a(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Mf?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function LD(t,e,n,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){const l=n,c=(u,h)=>{pE(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new RD(n,s||void 0),a=e==="value"?new Lf(o):new Mf(e,o);return ED(t._repo,t,a),()=>pE(t._repo,t,a)}function lV(t,e,n,i){return LD(t,"value",e,n,i)}AP(gi);NP(gi);/**
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
 */const MD="FIREBASE_DATABASE_EMULATOR_HOST",Nf={};let ND=!1;function PD(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Ar("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rn("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=bE(s,r),a=o.repoInfo,l,c;typeof process!="undefined"&&(c=process.env[MD]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=bE(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new Dd(Dd.OWNER):new BM(t.name,t.options,e);aD("Invalid Firebase Database URL",o),Oe(o.path)||Ar("Database URL must point to the root of a Firebase Database (not including a child path).");const h=FD(a,t,u,new VM(t.name,n));return new xD(h,t)}function DD(t,e){const n=Nf[e];(!n||n[t.key]!==t)&&Ar(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ID(t),delete n[t.key]}function FD(t,e,n,i){let r=Nf[e.name];r||(r={},Nf[e.name]=r);let s=r[t.toURLString()];return s&&Ar("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new dD(t,ND,n,i),r[t.toURLString()]=s,s}class xD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gi(this._repo,Ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(DD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ar("Cannot call "+e+" on a deleted database.")}}function cV(t=Ka(),e){return eo(t,"database").getImmediate({identifier:e})}/**
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
 */function UD(t){CM(ir),nr(new Ti("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return PD(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),Bn(Ly,My,t),Bn(Ly,My,"esm2017")}pi.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};pi.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};UD();var va={exports:{}},xs=typeof Reflect=="object"?Reflect:null,wE=xs&&typeof xs.apply=="function"?xs.apply:function(e,n,i){return Function.prototype.apply.call(e,n,i)},Dc;xs&&typeof xs.ownKeys=="function"?Dc=xs.ownKeys:Object.getOwnPropertySymbols?Dc=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Dc=function(e){return Object.getOwnPropertyNames(e)};function jD(t){console&&console.warn&&console.warn(t)}var TE=Number.isNaN||function(e){return e!==e};function Je(){Je.init.call(this)}va.exports=Je;va.exports.once=qD;Je.EventEmitter=Je;Je.prototype._events=void 0;Je.prototype._eventsCount=0;Je.prototype._maxListeners=void 0;var CE=10;function Fc(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(Je,"defaultMaxListeners",{enumerable:!0,get:function(){return CE},set:function(t){if(typeof t!="number"||t<0||TE(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");CE=t}});Je.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};Je.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||TE(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function SE(t){return t._maxListeners===void 0?Je.defaultMaxListeners:t._maxListeners}Je.prototype.getMaxListeners=function(){return SE(this)};Je.prototype.emit=function(e){for(var n=[],i=1;i<arguments.length;i++)n.push(arguments[i]);var r=e==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var o;if(n.length>0&&(o=n[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var l=s[e];if(l===void 0)return!1;if(typeof l=="function")wE(l,this,n);else for(var c=l.length,u=LE(l,c),i=0;i<c;++i)wE(u[i],this,n);return!0};function AE(t,e,n,i){var r,s,o;if(Fc(n),s=t._events,s===void 0?(s=t._events=Object.create(null),t._eventsCount=0):(s.newListener!==void 0&&(t.emit("newListener",e,n.listener?n.listener:n),s=t._events),o=s[e]),o===void 0)o=s[e]=n,++t._eventsCount;else if(typeof o=="function"?o=s[e]=i?[n,o]:[o,n]:i?o.unshift(n):o.push(n),r=SE(t),r>0&&o.length>r&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=t,a.type=e,a.count=o.length,jD(a)}return t}Je.prototype.addListener=function(e,n){return AE(this,e,n,!1)};Je.prototype.on=Je.prototype.addListener;Je.prototype.prependListener=function(e,n){return AE(this,e,n,!0)};function VD(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function kE(t,e,n){var i={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},r=VD.bind(i);return r.listener=n,i.wrapFn=r,r}Je.prototype.once=function(e,n){return Fc(n),this.on(e,kE(this,e,n)),this};Je.prototype.prependOnceListener=function(e,n){return Fc(n),this.prependListener(e,kE(this,e,n)),this};Je.prototype.removeListener=function(e,n){var i,r,s,o,a;if(Fc(n),r=this._events,r===void 0)return this;if(i=r[e],i===void 0)return this;if(i===n||i.listener===n)--this._eventsCount==0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,i.listener||n));else if(typeof i!="function"){for(s=-1,o=i.length-1;o>=0;o--)if(i[o]===n||i[o].listener===n){a=i[o].listener,s=o;break}if(s<0)return this;s===0?i.shift():BD(i,s),i.length===1&&(r[e]=i[0]),r.removeListener!==void 0&&this.emit("removeListener",e,a||n)}return this};Je.prototype.off=Je.prototype.removeListener;Je.prototype.removeAllListeners=function(e){var n,i,r;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[e]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete i[e]),this;if(arguments.length===0){var s=Object.keys(i),o;for(r=0;r<s.length;++r)o=s[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=i[e],typeof n=="function")this.removeListener(e,n);else if(n!==void 0)for(r=n.length-1;r>=0;r--)this.removeListener(e,n[r]);return this};function RE(t,e,n){var i=t._events;if(i===void 0)return[];var r=i[e];return r===void 0?[]:typeof r=="function"?n?[r.listener||r]:[r]:n?HD(r):LE(r,r.length)}Je.prototype.listeners=function(e){return RE(this,e,!0)};Je.prototype.rawListeners=function(e){return RE(this,e,!1)};Je.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):OE.call(t,e)};Je.prototype.listenerCount=OE;function OE(t){var e=this._events;if(e!==void 0){var n=e[t];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}Je.prototype.eventNames=function(){return this._eventsCount>0?Dc(this._events):[]};function LE(t,e){for(var n=new Array(e),i=0;i<e;++i)n[i]=t[i];return n}function BD(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function HD(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function qD(t,e){return new Promise(function(n,i){function r(o){t.removeListener(e,s),i(o)}function s(){typeof t.removeListener=="function"&&t.removeListener("error",r),n([].slice.call(arguments))}ME(t,e,s,{once:!0}),e!=="error"&&WD(t,r,{once:!0})})}function WD(t,e,n){typeof t.on=="function"&&ME(t,"error",e,n)}function ME(t,e,n,i){if(typeof t.on=="function")i.once?t.once(e,n):t.on(e,n);else if(typeof t.addEventListener=="function")t.addEventListener(e,function r(s){i.once&&t.removeEventListener(e,r),n(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}var xc=va.exports,GD=function(t){if(Array.isArray(t))return t},zD=function(t,e){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(t)){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(l){r=!0,s=l}finally{try{i||a.return==null||a.return()}finally{if(r)throw s}}return n}},NE=function(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i},KD=function(t,e){if(t){if(typeof t=="string")return NE(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?NE(t,e):void 0}},XD=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},QD=function(t,e){return GD(t)||zD(t,e)||KD(t,e)||XD()},YD=function(t,e){if(t==null)return{};var n,i,r={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(r[n]=t[n]);return r},JD=function(t,e){if(t==null)return{};var n,i,r=YD(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r},Uc=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Wi(t,e){return t(e={exports:{}},e.exports),e.exports}var Z=Wi(function(t){var e=function(n){var i,r=Object.prototype,s=r.hasOwnProperty,o=typeof Symbol=="function"?Symbol:{},a=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(C,S,z){return Object.defineProperty(C,S,{value:z,enumerable:!0,configurable:!0,writable:!0}),C[S]}try{u({},"")}catch{u=function(S,z,H){return S[z]=H}}function h(C,S,z,H){var X=S&&S.prototype instanceof A?S:A,ue=Object.create(X.prototype),q=new L(H||[]);return ue._invoke=function(Me,be,me){var Ie=f;return function(K,he){if(Ie===g)throw new Error("Generator is already running");if(Ie===m){if(K==="throw")throw he;return G()}for(me.method=K,me.arg=he;;){var at=me.delegate;if(at){var sn=O(at,me);if(sn){if(sn===v)continue;return sn}}if(me.method==="next")me.sent=me._sent=me.arg;else if(me.method==="throw"){if(Ie===f)throw Ie=m,me.arg;me.dispatchException(me.arg)}else me.method==="return"&&me.abrupt("return",me.arg);Ie=g;var Nt=d(Me,be,me);if(Nt.type==="normal"){if(Ie=me.done?m:p,Nt.arg===v)continue;return{value:Nt.arg,done:me.done}}Nt.type==="throw"&&(Ie=m,me.method="throw",me.arg=Nt.arg)}}}(C,z,q),ue}function d(C,S,z){try{return{type:"normal",arg:C.call(S,z)}}catch(H){return{type:"throw",arg:H}}}n.wrap=h;var f="suspendedStart",p="suspendedYield",g="executing",m="completed",v={};function A(){}function T(){}function y(){}var N={};N[a]=function(){return this};var k=Object.getPrototypeOf,_=k&&k(k(R([])));_&&_!==r&&s.call(_,a)&&(N=_);var w=y.prototype=A.prototype=Object.create(N);function V(C){["next","throw","return"].forEach(function(S){u(C,S,function(z){return this._invoke(S,z)})})}function b(C,S){var z;this._invoke=function(H,X){function ue(){return new S(function(q,Me){(function be(me,Ie,K,he){var at=d(C[me],C,Ie);if(at.type!=="throw"){var sn=at.arg,Nt=sn.value;return Nt&&typeof Nt=="object"&&s.call(Nt,"__await")?S.resolve(Nt.__await).then(function(x){be("next",x,K,he)},function(x){be("throw",x,K,he)}):S.resolve(Nt).then(function(x){sn.value=x,K(sn)},function(x){return be("throw",x,K,he)})}he(at.arg)})(H,X,q,Me)})}return z=z?z.then(ue,ue):ue()}}function O(C,S){var z=C.iterator[S.method];if(z===i){if(S.delegate=null,S.method==="throw"){if(C.iterator.return&&(S.method="return",S.arg=i,O(C,S),S.method==="throw"))return v;S.method="throw",S.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var H=d(z,C.iterator,S.arg);if(H.type==="throw")return S.method="throw",S.arg=H.arg,S.delegate=null,v;var X=H.arg;return X?X.done?(S[C.resultName]=X.value,S.next=C.nextLoc,S.method!=="return"&&(S.method="next",S.arg=i),S.delegate=null,v):X:(S.method="throw",S.arg=new TypeError("iterator result is not an object"),S.delegate=null,v)}function J(C){var S={tryLoc:C[0]};1 in C&&(S.catchLoc=C[1]),2 in C&&(S.finallyLoc=C[2],S.afterLoc=C[3]),this.tryEntries.push(S)}function E(C){var S=C.completion||{};S.type="normal",delete S.arg,C.completion=S}function L(C){this.tryEntries=[{tryLoc:"root"}],C.forEach(J,this),this.reset(!0)}function R(C){if(C){var S=C[a];if(S)return S.call(C);if(typeof C.next=="function")return C;if(!isNaN(C.length)){var z=-1,H=function X(){for(;++z<C.length;)if(s.call(C,z))return X.value=C[z],X.done=!1,X;return X.value=i,X.done=!0,X};return H.next=H}}return{next:G}}function G(){return{value:i,done:!0}}return T.prototype=w.constructor=y,y.constructor=T,T.displayName=u(y,c,"GeneratorFunction"),n.isGeneratorFunction=function(C){var S=typeof C=="function"&&C.constructor;return!!S&&(S===T||(S.displayName||S.name)==="GeneratorFunction")},n.mark=function(C){return Object.setPrototypeOf?Object.setPrototypeOf(C,y):(C.__proto__=y,u(C,c,"GeneratorFunction")),C.prototype=Object.create(w),C},n.awrap=function(C){return{__await:C}},V(b.prototype),b.prototype[l]=function(){return this},n.AsyncIterator=b,n.async=function(C,S,z,H,X){X===void 0&&(X=Promise);var ue=new b(h(C,S,z,H),X);return n.isGeneratorFunction(S)?ue:ue.next().then(function(q){return q.done?q.value:ue.next()})},V(w),u(w,c,"Generator"),w[a]=function(){return this},w.toString=function(){return"[object Generator]"},n.keys=function(C){var S=[];for(var z in C)S.push(z);return S.reverse(),function H(){for(;S.length;){var X=S.pop();if(X in C)return H.value=X,H.done=!1,H}return H.done=!0,H}},n.values=R,L.prototype={constructor:L,reset:function(C){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(E),!C)for(var S in this)S.charAt(0)==="t"&&s.call(this,S)&&!isNaN(+S.slice(1))&&(this[S]=i)},stop:function(){this.done=!0;var C=this.tryEntries[0].completion;if(C.type==="throw")throw C.arg;return this.rval},dispatchException:function(C){if(this.done)throw C;var S=this;function z(be,me){return ue.type="throw",ue.arg=C,S.next=be,me&&(S.method="next",S.arg=i),!!me}for(var H=this.tryEntries.length-1;H>=0;--H){var X=this.tryEntries[H],ue=X.completion;if(X.tryLoc==="root")return z("end");if(X.tryLoc<=this.prev){var q=s.call(X,"catchLoc"),Me=s.call(X,"finallyLoc");if(q&&Me){if(this.prev<X.catchLoc)return z(X.catchLoc,!0);if(this.prev<X.finallyLoc)return z(X.finallyLoc)}else if(q){if(this.prev<X.catchLoc)return z(X.catchLoc,!0)}else{if(!Me)throw new Error("try statement without catch or finally");if(this.prev<X.finallyLoc)return z(X.finallyLoc)}}}},abrupt:function(C,S){for(var z=this.tryEntries.length-1;z>=0;--z){var H=this.tryEntries[z];if(H.tryLoc<=this.prev&&s.call(H,"finallyLoc")&&this.prev<H.finallyLoc){var X=H;break}}X&&(C==="break"||C==="continue")&&X.tryLoc<=S&&S<=X.finallyLoc&&(X=null);var ue=X?X.completion:{};return ue.type=C,ue.arg=S,X?(this.method="next",this.next=X.finallyLoc,v):this.complete(ue)},complete:function(C,S){if(C.type==="throw")throw C.arg;return C.type==="break"||C.type==="continue"?this.next=C.arg:C.type==="return"?(this.rval=this.arg=C.arg,this.method="return",this.next="end"):C.type==="normal"&&S&&(this.next=S),v},finish:function(C){for(var S=this.tryEntries.length-1;S>=0;--S){var z=this.tryEntries[S];if(z.finallyLoc===C)return this.complete(z.completion,z.afterLoc),E(z),v}},catch:function(C){for(var S=this.tryEntries.length-1;S>=0;--S){var z=this.tryEntries[S];if(z.tryLoc===C){var H=z.completion;if(H.type==="throw"){var X=H.arg;E(z)}return X}}throw new Error("illegal catch attempt")},delegateYield:function(C,S,z){return this.delegate={iterator:R(C),resultName:S,nextLoc:z},this.method==="next"&&(this.arg=i),v}},n}(t.exports);try{regeneratorRuntime=e}catch{Function("r","regeneratorRuntime = r")(e)}});function PE(t,e,n,i,r,s,o){try{var a=t[s](o),l=a.value}catch(c){return void n(c)}a.done?e(l):Promise.resolve(l).then(i,r)}var je=function(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var s=t.apply(e,n);function o(l){PE(s,i,r,o,a,"next",l)}function a(l){PE(s,i,r,o,a,"throw",l)}o(void 0)})}},Gi=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},jc=function(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t};function DE(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var zi=function(t,e,n){return e&&DE(t.prototype,e),n&&DE(t,n),t},Pf=Wi(function(t){function e(n,i){return t.exports=e=Object.setPrototypeOf||function(r,s){return r.__proto__=s,r},e(n,i)}t.exports=e}),Vc=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Pf(t,e)},qn=Wi(function(t){function e(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?t.exports=e=function(i){return typeof i}:t.exports=e=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},e(n)}t.exports=e}),Bc=function(t,e){return!e||qn(e)!=="object"&&typeof e!="function"?jc(t):e},_i=Wi(function(t){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},e(n)}t.exports=e}),Hc=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},ZD=typeof Map=="function",$D=typeof Set=="function",eF=typeof WeakSet=="function",FE=Object.keys,xE=function(t,e){return t&&typeof t=="object"&&e.add(t)},UE=function(t,e,n,i){for(var r,s=0;s<t.length;s++)if(n((r=t[s])[0],e[0],i)&&n(r[1],e[1],i))return!0;return!1},Df=function(t,e,n,i){for(var r=0;r<t.length;r++)if(n(t[r],e,i))return!0;return!1},ya=function(t,e){return t===e||t!=t&&e!=e},jE=function(t){return t.constructor===Object},VE=function(t){return typeof t.then=="function"},BE=function(t){return!(!t.$$typeof||!t._store)},HE=function(t){return function(e){var n=t||e;return function(i,r,s){s===void 0&&(s=eF?new WeakSet:Object.create({_values:[],add:function(l){this._values.push(l)},has:function(l){return!!~this._values.indexOf(l)}}));var o=s.has(i),a=s.has(r);return o||a?o&&a:(xE(i,s),xE(r,s),n(i,r,s))}}},qE=function(t){var e=[];return t.forEach(function(n,i){return e.push([i,n])}),e},WE=function(t){var e=[];return t.forEach(function(n){return e.push(n)}),e},tF=function(t,e,n,i){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!n(t[r],e[r],i))return!1;return!0},nF=function(t,e,n,i){if(t.size!==e.size)return!1;for(var r=qE(t),s=qE(e),o=0;o<r.length;o++)if(!UE(s,r[o],n,i)||!UE(r,s[o],n,i))return!1;return!0},GE=function(t,e,n,i){var r,s=FE(t),o=FE(e);if(s.length!==o.length)return!1;for(var a=0;a<s.length;a++)if(r=s[a],!Df(o,r,ya)||(r!=="_owner"||!BE(t)||!BE(e))&&!n(t[r],e[r],i))return!1;return!0},iF=function(t,e){return t.source===e.source&&t.global===e.global&&t.ignoreCase===e.ignoreCase&&t.multiline===e.multiline&&t.unicode===e.unicode&&t.sticky===e.sticky&&t.lastIndex===e.lastIndex},rF=function(t,e,n,i){if(t.size!==e.size)return!1;for(var r=WE(t),s=WE(e),o=0;o<r.length;o++)if(!Df(s,r[o],n,i)||!Df(r,s[o],n,i))return!1;return!0},zE=Array.isArray,qc=function(t){var e=typeof t=="function"?t(n):n;function n(i,r,s){if(ya(i,r))return!0;var o=typeof i;if(o!==typeof r||o!=="object"||!i||!r)return!1;if(jE(i)&&jE(r))return GE(i,r,e,s);var a=zE(i),l=zE(r);if(a||l)return a===l&&tF(i,r,e,s);var c=i instanceof Date,u=r instanceof Date;if(c||u)return c===u&&ya(i.getTime(),r.getTime());var h=i instanceof RegExp,d=r instanceof RegExp;if(h||d)return h===d&&iF(i,r);if(VE(i)||VE(r))return i===r;if(ZD){var f=i instanceof Map,p=r instanceof Map;if(f||p)return f===p&&nF(i,r,e,s)}if($D){var g=i instanceof Set,m=r instanceof Set;if(g||m)return g===m&&rF(i,r,e,s)}return GE(i,r,e,s)}return n},Wc=(qc(HE()),qc(HE(ya)),qc());qc(function(){return ya});const sF={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},KE={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},At={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},En={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},Ki={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class M{static getFirstMatch(e,n){const i=n.match(e);return i&&i.length>0&&i[1]||""}static getSecondMatch(e,n){const i=n.match(e);return i&&i.length>1&&i[2]||""}static matchAndReturnConst(e,n,i){if(e.test(n))return i}static getWindowsVersionName(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(e){const n=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(n.push(0),n[0]===10)switch(n[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(e){const n=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(n.push(0),!(n[0]===1&&n[1]<5))return n[0]===1&&n[1]<6?"Cupcake":n[0]===1&&n[1]>=6?"Donut":n[0]===2&&n[1]<2?"Eclair":n[0]===2&&n[1]===2?"Froyo":n[0]===2&&n[1]>2?"Gingerbread":n[0]===3?"Honeycomb":n[0]===4&&n[1]<1?"Ice Cream Sandwich":n[0]===4&&n[1]<4?"Jelly Bean":n[0]===4&&n[1]>=4?"KitKat":n[0]===5?"Lollipop":n[0]===6?"Marshmallow":n[0]===7?"Nougat":n[0]===8?"Oreo":n[0]===9?"Pie":void 0}static getVersionPrecision(e){return e.split(".").length}static compareVersions(e,n,i=!1){const r=M.getVersionPrecision(e),s=M.getVersionPrecision(n);let o=Math.max(r,s),a=0;const l=M.map([e,n],c=>{const u=o-M.getVersionPrecision(c),h=c+new Array(u+1).join(".0");return M.map(h.split("."),d=>new Array(20-d.length).join("0")+d).reverse()});for(i&&(a=o-Math.min(r,s)),o-=1;o>=a;){if(l[0][o]>l[1][o])return 1;if(l[0][o]===l[1][o]){if(o===a)return 0;o-=1}else if(l[0][o]<l[1][o])return-1}}static map(e,n){const i=[];let r;if(Array.prototype.map)return Array.prototype.map.call(e,n);for(r=0;r<e.length;r+=1)i.push(n(e[r]));return i}static find(e,n){let i,r;if(Array.prototype.find)return Array.prototype.find.call(e,n);for(i=0,r=e.length;i<r;i+=1){const s=e[i];if(n(s,i))return s}}static assign(e,...n){const i=e;let r,s;if(Object.assign)return Object.assign(e,...n);for(r=0,s=n.length;r<s;r+=1){const o=n[r];typeof o=="object"&&o!==null&&Object.keys(o).forEach(a=>{i[a]=o[a]})}return e}static getBrowserAlias(e){return sF[e]}static getBrowserTypeByAlias(e){return KE[e]||""}}const ot=/version\/(\d+(\.?_?\d+)+)/i,oF=[{test:[/googlebot/i],describe(t){const e={name:"Googlebot"},n=M.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,t)||M.getFirstMatch(ot,t);return n&&(e.version=n),e}},{test:[/opera/i],describe(t){const e={name:"Opera"},n=M.getFirstMatch(ot,t)||M.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/opr\/|opios/i],describe(t){const e={name:"Opera"},n=M.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,t)||M.getFirstMatch(ot,t);return n&&(e.version=n),e}},{test:[/SamsungBrowser/i],describe(t){const e={name:"Samsung Internet for Android"},n=M.getFirstMatch(ot,t)||M.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/Whale/i],describe(t){const e={name:"NAVER Whale Browser"},n=M.getFirstMatch(ot,t)||M.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/MZBrowser/i],describe(t){const e={name:"MZ Browser"},n=M.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,t)||M.getFirstMatch(ot,t);return n&&(e.version=n),e}},{test:[/focus/i],describe(t){const e={name:"Focus"},n=M.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,t)||M.getFirstMatch(ot,t);return n&&(e.version=n),e}},{test:[/swing/i],describe(t){const e={name:"Swing"},n=M.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,t)||M.getFirstMatch(ot,t);return n&&(e.version=n),e}},{test:[/coast/i],describe(t){const e={name:"Opera Coast"},n=M.getFirstMatch(ot,t)||M.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/yabrowser/i],describe(t){const e={name:"Yandex Browser"},n=M.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,t)||M.getFirstMatch(ot,t);return n&&(e.version=n),e}},{test:[/ucbrowser/i],describe(t){const e={name:"UC Browser"},n=M.getFirstMatch(ot,t)||M.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/Maxthon|mxios/i],describe(t){const e={name:"Maxthon"},n=M.getFirstMatch(ot,t)||M.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/epiphany/i],describe(t){const e={name:"Epiphany"},n=M.getFirstMatch(ot,t)||M.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/puffin/i],describe(t){const e={name:"Puffin"},n=M.getFirstMatch(ot,t)||M.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/sleipnir/i],describe(t){const e={name:"Sleipnir"},n=M.getFirstMatch(ot,t)||M.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/k-meleon/i],describe(t){const e={name:"K-Meleon"},n=M.getFirstMatch(ot,t)||M.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/micromessenger/i],describe(t){const e={name:"WeChat"},n=M.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,t)||M.getFirstMatch(ot,t);return n&&(e.version=n),e}},{test:[/qqbrowser/i],describe(t){const e={name:/qqbrowserlite/i.test(t)?"QQ Browser Lite":"QQ Browser"},n=M.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,t)||M.getFirstMatch(ot,t);return n&&(e.version=n),e}},{test:[/msie|trident/i],describe(t){const e={name:"Internet Explorer"},n=M.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/\sedg\//i],describe(t){const e={name:"Microsoft Edge"},n=M.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/edg([ea]|ios)/i],describe(t){const e={name:"Microsoft Edge"},n=M.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/vivaldi/i],describe(t){const e={name:"Vivaldi"},n=M.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/seamonkey/i],describe(t){const e={name:"SeaMonkey"},n=M.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/sailfish/i],describe(t){const e={name:"Sailfish"},n=M.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,t);return n&&(e.version=n),e}},{test:[/silk/i],describe(t){const e={name:"Amazon Silk"},n=M.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/phantom/i],describe(t){const e={name:"PhantomJS"},n=M.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/slimerjs/i],describe(t){const e={name:"SlimerJS"},n=M.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e={name:"BlackBerry"},n=M.getFirstMatch(ot,t)||M.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/(web|hpw)[o0]s/i],describe(t){const e={name:"WebOS Browser"},n=M.getFirstMatch(ot,t)||M.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/bada/i],describe(t){const e={name:"Bada"},n=M.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/tizen/i],describe(t){const e={name:"Tizen"},n=M.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,t)||M.getFirstMatch(ot,t);return n&&(e.version=n),e}},{test:[/qupzilla/i],describe(t){const e={name:"QupZilla"},n=M.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,t)||M.getFirstMatch(ot,t);return n&&(e.version=n),e}},{test:[/firefox|iceweasel|fxios/i],describe(t){const e={name:"Firefox"},n=M.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/electron/i],describe(t){const e={name:"Electron"},n=M.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/chromium/i],describe(t){const e={name:"Chromium"},n=M.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,t)||M.getFirstMatch(ot,t);return n&&(e.version=n),e}},{test:[/chrome|crios|crmo/i],describe(t){const e={name:"Chrome"},n=M.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/GSA/i],describe(t){const e={name:"Google Search"},n=M.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test(t){const e=!t.test(/like android/i),n=t.test(/android/i);return e&&n},describe(t){const e={name:"Android Browser"},n=M.getFirstMatch(ot,t);return n&&(e.version=n),e}},{test:[/playstation 4/i],describe(t){const e={name:"PlayStation 4"},n=M.getFirstMatch(ot,t);return n&&(e.version=n),e}},{test:[/safari|applewebkit/i],describe(t){const e={name:"Safari"},n=M.getFirstMatch(ot,t);return n&&(e.version=n),e}},{test:[/.*/i],describe(t){const e=t.search("\\(")!==-1?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:M.getFirstMatch(e,t),version:M.getSecondMatch(e,t)}}}];var aF=[{test:[/Roku\/DVP/],describe(t){const e=M.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,t);return{name:En.Roku,version:e}}},{test:[/windows phone/i],describe(t){const e=M.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,t);return{name:En.WindowsPhone,version:e}}},{test:[/windows /i],describe(t){const e=M.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,t),n=M.getWindowsVersionName(e);return{name:En.Windows,version:e,versionName:n}}},{test:[/Macintosh(.*?) FxiOS(.*?) Version\//],describe(t){const e=M.getSecondMatch(/(Version\/)(\d[\d.]+)/,t);return{name:En.iOS,version:e}}},{test:[/macintosh/i],describe(t){const e=M.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,t).replace(/[_\s]/g,"."),n=M.getMacOSVersionName(e),i={name:En.MacOS,version:e};return n&&(i.versionName=n),i}},{test:[/(ipod|iphone|ipad)/i],describe(t){const e=M.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,t).replace(/[_\s]/g,".");return{name:En.iOS,version:e}}},{test(t){const e=!t.test(/like android/i),n=t.test(/android/i);return e&&n},describe(t){const e=M.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,t),n=M.getAndroidVersionName(e),i={name:En.Android,version:e};return n&&(i.versionName=n),i}},{test:[/(web|hpw)[o0]s/i],describe(t){const e=M.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,t),n={name:En.WebOS};return e&&e.length&&(n.version=e),n}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e=M.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,t)||M.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,t)||M.getFirstMatch(/\bbb(\d+)/i,t);return{name:En.BlackBerry,version:e}}},{test:[/bada/i],describe(t){const e=M.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,t);return{name:En.Bada,version:e}}},{test:[/tizen/i],describe(t){const e=M.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,t);return{name:En.Tizen,version:e}}},{test:[/linux/i],describe:()=>({name:En.Linux})},{test:[/CrOS/],describe:()=>({name:En.ChromeOS})},{test:[/PlayStation 4/],describe(t){const e=M.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,t);return{name:En.PlayStation4,version:e}}}],lF=[{test:[/googlebot/i],describe:()=>({type:"bot",vendor:"Google"})},{test:[/huawei/i],describe(t){const e=M.getFirstMatch(/(can-l01)/i,t)&&"Nova",n={type:At.mobile,vendor:"Huawei"};return e&&(n.model=e),n}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:()=>({type:At.tablet,vendor:"Nexus"})},{test:[/ipad/i],describe:()=>({type:At.tablet,vendor:"Apple",model:"iPad"})},{test:[/Macintosh(.*?) FxiOS(.*?) Version\//],describe:()=>({type:At.tablet,vendor:"Apple",model:"iPad"})},{test:[/kftt build/i],describe:()=>({type:At.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"})},{test:[/silk/i],describe:()=>({type:At.tablet,vendor:"Amazon"})},{test:[/tablet(?! pc)/i],describe:()=>({type:At.tablet})},{test(t){const e=t.test(/ipod|iphone/i),n=t.test(/like (ipod|iphone)/i);return e&&!n},describe(t){const e=M.getFirstMatch(/(ipod|iphone)/i,t);return{type:At.mobile,vendor:"Apple",model:e}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:()=>({type:At.mobile,vendor:"Nexus"})},{test:[/[^-]mobi/i],describe:()=>({type:At.mobile})},{test:t=>t.getBrowserName(!0)==="blackberry",describe:()=>({type:At.mobile,vendor:"BlackBerry"})},{test:t=>t.getBrowserName(!0)==="bada",describe:()=>({type:At.mobile})},{test:t=>t.getBrowserName()==="windows phone",describe:()=>({type:At.mobile,vendor:"Microsoft"})},{test(t){const e=Number(String(t.getOSVersion()).split(".")[0]);return t.getOSName(!0)==="android"&&e>=3},describe:()=>({type:At.tablet})},{test:t=>t.getOSName(!0)==="android",describe:()=>({type:At.mobile})},{test:t=>t.getOSName(!0)==="macos",describe:()=>({type:At.desktop,vendor:"Apple"})},{test:t=>t.getOSName(!0)==="windows",describe:()=>({type:At.desktop})},{test:t=>t.getOSName(!0)==="linux",describe:()=>({type:At.desktop})},{test:t=>t.getOSName(!0)==="playstation 4",describe:()=>({type:At.tv})},{test:t=>t.getOSName(!0)==="roku",describe:()=>({type:At.tv})}],cF=[{test:t=>t.getBrowserName(!0)==="microsoft edge",describe(t){if(/\sedg\//i.test(t))return{name:Ki.Blink};const e=M.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,t);return{name:Ki.EdgeHTML,version:e}}},{test:[/trident/i],describe(t){const e={name:Ki.Trident},n=M.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:t=>t.test(/presto/i),describe(t){const e={name:Ki.Presto},n=M.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test(t){const e=t.test(/gecko/i),n=t.test(/like gecko/i);return e&&!n},describe(t){const e={name:Ki.Gecko},n=M.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/(apple)?webkit\/537\.36/i],describe:()=>({name:Ki.Blink})},{test:[/(apple)?webkit/i],describe(t){const e={name:Ki.WebKit},n=M.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}}];class XE{constructor(e,n=!1){if(e==null||e==="")throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},n!==!0&&this.parse()}getUA(){return this._ua}test(e){return e.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const e=M.find(oF,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.browser=e.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const e=M.find(aF,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.os=e.describe(this.getUA())),this.parsedResult.os}getOSName(e){const{name:n}=this.getOS();return e?String(n).toLowerCase()||"":n||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(e=!1){const{type:n}=this.getPlatform();return e?String(n).toLowerCase()||"":n||""}parsePlatform(){this.parsedResult.platform={};const e=M.find(lF,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.platform=e.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const e=M.find(cF,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.engine=e.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return M.assign({},this.parsedResult)}satisfies(e){const n={};let i=0;const r={};let s=0;if(Object.keys(e).forEach(o=>{const a=e[o];typeof a=="string"?(r[o]=a,s+=1):typeof a=="object"&&(n[o]=a,i+=1)}),i>0){const o=Object.keys(n),a=M.find(o,c=>this.isOS(c));if(a){const c=this.satisfies(n[a]);if(c!==void 0)return c}const l=M.find(o,c=>this.isPlatform(c));if(l){const c=this.satisfies(n[l]);if(c!==void 0)return c}}if(s>0){const o=Object.keys(r),a=M.find(o,l=>this.isBrowser(l,!0));if(a!==void 0)return this.compareVersion(r[a])}}isBrowser(e,n=!1){const i=this.getBrowserName().toLowerCase();let r=e.toLowerCase();const s=M.getBrowserTypeByAlias(r);return n&&s&&(r=s.toLowerCase()),r===i}compareVersion(e){let n=[0],i=e,r=!1;const s=this.getBrowserVersion();if(typeof s=="string")return e[0]===">"||e[0]==="<"?(i=e.substr(1),e[1]==="="?(r=!0,i=e.substr(2)):n=[],e[0]===">"?n.push(1):n.push(-1)):e[0]==="="?i=e.substr(1):e[0]==="~"&&(r=!0,i=e.substr(1)),n.indexOf(M.compareVersions(s,i,r))>-1}isOS(e){return this.getOSName(!0)===String(e).toLowerCase()}isPlatform(e){return this.getPlatformType(!0)===String(e).toLowerCase()}isEngine(e){return this.getEngineName(!0)===String(e).toLowerCase()}is(e){return this.isBrowser(e)||this.isOS(e)||this.isPlatform(e)}some(e=[]){return e.some(n=>this.is(n))}}var QE="new",Ff="loading",Gc="joining-meeting",pn="joined-meeting",Fr="left-meeting",xr="error",YE="unknown",uF="base",hF="*",Us="fullscreen",js="exited-fullscreen",zc="daily-custom-track",xf={NONE:"none",BGBLUR:"background-blur"};function ei(){return!zt()&&typeof window!="undefined"&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:""}function zt(){return typeof navigator!="undefined"&&navigator.product&&navigator.product==="ReactNative"}function JE(){return navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia}function dF(){return!!(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getDisplayMedia)&&function(t,e){if(!t||!e)return!1;switch(t){case"Chrome":return e.major>=75;case"Safari":return RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection")&&!(e.major===13&&e.minor===0&&e.point===0);case"Firefox":return e.major>=67}return!1}(Kc(),function(){switch(Kc()){case"Chrome":return $E();case"Safari":return tI();case"Firefox":return nI();case"Edge":return function(){var t=0,e=0;if(typeof window!="undefined"){var n=ei(),i=n.match(/Edge\/(\d+).(\d+)/);if(i)try{t=parseInt(i[1]),e=parseInt(i[2])}catch{}}return{major:t,minor:e}}()}}())}var fF=["Chrome","Firefox"];function pF(){return!zt()&&!function(){var t=ei();if(t.match(/Mobi/)||t.match(/Android/)||ei().match(/DailyAnd\//))return!0}()&&fF.includes(Kc())}function Uf(){return!!zt()||ZE()}function ZE(){return JE()&&!function(){var t,e=Kc();if(!ei())return!0;switch(e){case"Chrome":return(t=$E()).major&&t.major>0&&t.major<61;case"Firefox":return(t=nI()).major<78;case"Safari":return(t=tI()).major<12;default:return!0}}()}function Kc(){if(typeof window!="undefined"){var t=ei();return eI()?"Safari":t.indexOf("Edge")>-1?"Edge":t.match(/Chrome\//)?"Chrome":t.indexOf("Safari")>-1?"Safari":t.indexOf("Firefox")>-1?"Firefox":t.indexOf("MSIE")>-1||t.indexOf(".NET")>-1?"IE":"Unknown Browser"}}function $E(){var t=0,e=0,n=0,i=0,r=!1;if(typeof window!="undefined"){var s=ei(),o=s.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);if(o)try{t=parseInt(o[1]),e=parseInt(o[2]),n=parseInt(o[3]),i=parseInt(o[4]),r=s.indexOf("OPR/")>-1}catch{}}return{major:t,minor:e,build:n,patch:i,opera:r}}function eI(){return!!ei().match(/iPad|iPhone|iPod/i)&&JE()}function tI(){var t=0,e=0,n=0;if(typeof window!="undefined"){var i=ei().match(/Version\/(\d+).(\d+)(.(\d+))?/);if(i)try{t=parseInt(i[1]),e=parseInt(i[2]),n=parseInt(i[4])}catch{}else eI()&&(t=14,e=0,n=3)}return{major:t,minor:e,point:n}}function nI(){var t=0,e=0;if(typeof window!="undefined"){var n=ei().match(/Firefox\/(\d+).(\d+)/);if(n)try{t=parseInt(n[1]),e=parseInt(n[2])}catch{}}return{major:t,minor:e}}function jf(){return Date.now()+Math.random().toString()}function ba(){throw new Error("Method must be implemented in subclass")}function Ea(t){var e=t?new URL(t).origin:null;return!e||e.match(/https:\/\/[^.]+\.daily\.co/)?Uf()?"https://c.daily.co/static/call-machine-object-bundle.js":"https://c.daily.co/static/call-machine-object-nosfu-bundle.js":(e||(console.warn("No baseUrl provided for call object bundle. Defaulting to production CDN..."),e="https://c.daily.co"),Uf()?"".concat(e,"/static/call-machine-object-bundle.js"):"".concat(e,"/static/call-machine-object-nosfu-bundle.js"))}var iI=function(){function t(){Gi(this,t)}return zi(t,[{key:"addListenerForMessagesFromCallMachine",value:function(e,n,i){ba()}},{key:"addListenerForMessagesFromDailyJs",value:function(e,n,i){ba()}},{key:"sendMessageToCallMachine",value:function(e,n,i,r){ba()}},{key:"sendMessageToDailyJs",value:function(e,n,i){ba()}},{key:"removeListener",value:function(e){ba()}}]),t}();function rI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Vf(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?rI(Object(n),!0).forEach(function(i){Hc(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rI(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function mF(t){var e=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var n,i=_i(t);if(e){var r=_i(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Bc(this,n)}}var gF=function(t){Vc(n,iI);var e=mF(n);function n(){var i;return Gi(this,n),(i=e.call(this))._wrappedListeners={},i._messageCallbacks={},i}return zi(n,[{key:"addListenerForMessagesFromCallMachine",value:function(i,r,s){var o=this,a=function(l){if(l.data&&l.data.what==="iframe-call-message"&&(!l.data.callFrameId||l.data.callFrameId===r)&&(!l.data.from||l.data.from!=="module")){var c=Vf({},l.data);if(delete c.from,c.callbackStamp&&o._messageCallbacks[c.callbackStamp]){var u=c.callbackStamp;o._messageCallbacks[u].call(s,c),delete o._messageCallbacks[u]}delete c.what,delete c.callbackStamp,i.call(s,c)}};this._wrappedListeners[i]=a,window.addEventListener("message",a)}},{key:"addListenerForMessagesFromDailyJs",value:function(i,r,s){var o=function(a){if(!(!a.data||a.data.what!=="iframe-call-message"||!a.data.action||a.data.from&&a.data.from!=="module"||a.data.callFrameId&&r&&a.data.callFrameId!==r)){var l=a.data;i.call(s,l)}};this._wrappedListeners[i]=o,window.addEventListener("message",o)}},{key:"sendMessageToCallMachine",value:function(i,r,s,o){var a=Vf({},i);if(a.what="iframe-call-message",a.from="module",a.callFrameId=o,r){var l=jf();this._messageCallbacks[l]=r,a.callbackStamp=l}(s?s.contentWindow:window).postMessage(a,"*")}},{key:"sendMessageToDailyJs",value:function(i,r,s){i.what="iframe-call-message",i.callFrameId=s,i.from="embedded",(r?window:window.parent).postMessage(i,"*")}},{key:"removeListener",value:function(i){var r=this._wrappedListeners[i];r&&(window.removeEventListener("message",r),delete this._wrappedListeners[i])}},{key:"forwardPackagedMessageToCallMachine",value:function(i,r,s){var o=Vf({},i);o.callFrameId=s,(r?r.contentWindow:window).postMessage(o,"*")}},{key:"addListenerForPackagedMessagesFromCallMachine",value:function(i,r){var s=function(o){if(o.data&&o.data.what==="iframe-call-message"&&(!o.data.callFrameId||o.data.callFrameId===r)&&(!o.data.from||o.data.from!=="module")){var a=o.data;i(a)}};return this._wrappedListeners[i]=s,window.addEventListener("message",s),i}},{key:"removeListenerForPackagedMessagesFromCallMachine",value:function(i){var r=this._wrappedListeners[i];r&&(window.removeEventListener("message",r),delete this._wrappedListeners[i])}}]),n}();function _F(t){var e=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var n,i=_i(t);if(e){var r=_i(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Bc(this,n)}}global.callMachineToDailyJsEmitter=global.callMachineToDailyJsEmitter||new va.exports.EventEmitter,global.dailyJsToCallMachineEmitter=global.dailyJsToCallMachineEmitter||new va.exports.EventEmitter;var vF=function(t){Vc(n,iI);var e=_F(n);function n(){var i;return Gi(this,n),(i=e.call(this))._wrappedListeners={},i._messageCallbacks={},i}return zi(n,[{key:"addListenerForMessagesFromCallMachine",value:function(i,r,s){this._addListener(i,global.callMachineToDailyJsEmitter,s,"received call machine message")}},{key:"addListenerForMessagesFromDailyJs",value:function(i,r,s){this._addListener(i,global.dailyJsToCallMachineEmitter,s,"received daily-js message")}},{key:"sendMessageToCallMachine",value:function(i,r){this._sendMessage(i,global.dailyJsToCallMachineEmitter,"sending message to call machine",r)}},{key:"sendMessageToDailyJs",value:function(i){this._sendMessage(i,global.callMachineToDailyJsEmitter,"sending message to daily-js")}},{key:"removeListener",value:function(i){var r=this._wrappedListeners[i];r&&(global.callMachineToDailyJsEmitter.removeListener("message",r),global.dailyJsToCallMachineEmitter.removeListener("message",r),delete this._wrappedListeners[i])}},{key:"_addListener",value:function(i,r,s,o){var a=this,l=function(c){if(c.callbackStamp&&a._messageCallbacks[c.callbackStamp]){var u=c.callbackStamp;a._messageCallbacks[u].call(s,c),delete a._messageCallbacks[u]}i.call(s,c)};this._wrappedListeners[i]=l,r.addListener("message",l)}},{key:"_sendMessage",value:function(i,r,s,o){if(o){var a=jf();this._messageCallbacks[a]=o,i.callbackStamp=a}r.emit("message",i)}}]),n}(),yF=function(t){return Function.toString.call(t).indexOf("[native code]")!==-1},bF=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}},EF=Wi(function(t){function e(n,i,r){return bF()?t.exports=e=Reflect.construct:t.exports=e=function(s,o,a){var l=[null];l.push.apply(l,o);var c=new(Function.bind.apply(s,l));return a&&Pf(c,a.prototype),c},e.apply(null,arguments)}t.exports=e}),IF=Wi(function(t){function e(n){var i=typeof Map=="function"?new Map:void 0;return t.exports=e=function(r){if(r===null||!yF(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(i!==void 0){if(i.has(r))return i.get(r);i.set(r,s)}function s(){return EF(r,arguments,_i(this).constructor)}return s.prototype=Object.create(r.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),Pf(s,r)},e(n)}t.exports=e});function wF(t){var e=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var n,i=_i(t);if(e){var r=_i(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Bc(this,n)}}var TF=function(){function t(){Gi(this,t),this._currentLoad=null}return zi(t,[{key:"load",value:function(e,n,i,r){if(this.loaded)return window._dailyCallObjectSetup(n),void i(!0);(function(s){window._dailyConfig||(window._dailyConfig={}),window._dailyConfig.callFrameId=s})(n),this._currentLoad&&this._currentLoad.cancel(),this._currentLoad=new SF(e,n,function(){i(!1)},r),this._currentLoad.start()}},{key:"cancel",value:function(){this._currentLoad&&this._currentLoad.cancel()}},{key:"loaded",get:function(){return this._currentLoad&&this._currentLoad.succeeded}}]),t}(),CF=3,SF=function(){function t(e,n,i,r){Gi(this,t),this._attemptsRemaining=CF,this._currentAttempt=null,this._meetingOrBaseUrl=e,this._callFrameId=n,this._successCallback=i,this._failureCallback=r}return zi(t,[{key:"start",value:function(){var e=this;this._currentAttempt||(this._currentAttempt=new sI(this._meetingOrBaseUrl,this._callFrameId,this._successCallback,function n(i){e._currentAttempt.cancelled||(e._attemptsRemaining--,e._failureCallback(i,e._attemptsRemaining>0),e._attemptsRemaining<=0||setTimeout(function(){e._currentAttempt.cancelled||(e._currentAttempt=new sI(e._meetingOrBaseUrl,e._callFrameId,e._successCallback,n),e._currentAttempt.start())},3e3))}),this._currentAttempt.start())}},{key:"cancel",value:function(){this._currentAttempt&&this._currentAttempt.cancel()}},{key:"cancelled",get:function(){return this._currentAttempt&&this._currentAttempt.cancelled}},{key:"succeeded",get:function(){return this._currentAttempt&&this._currentAttempt.succeeded}}]),t}(),Bf=function(t){Vc(n,t);var e=wF(n);function n(){return Gi(this,n),e.apply(this,arguments)}return n}(IF(Error)),sI=function(){function t(e,n,i,r){Gi(this,t),this.cancelled=!1,this.succeeded=!1,this._networkTimedOut=!1,this._networkTimeout=null,this._iosCache=typeof iOSCallObjectBundleCache!="undefined"&&iOSCallObjectBundleCache,this._refetchHeaders=null,this._meetingOrBaseUrl=e,this._callFrameId=n,this._successCallback=i,this._failureCallback=r}return zi(t,[{key:"start",value:function(){var e=je(Z.mark(function n(){var i;return Z.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i=Ea(this._meetingOrBaseUrl),r.next=3,this._tryLoadFromIOSCache(i);case 3:!r.sent&&this._loadFromNetwork(i);case 5:case"end":return r.stop()}},n,this)}));return function(){return e.apply(this,arguments)}}()},{key:"cancel",value:function(){clearTimeout(this._networkTimeout),this.cancelled=!0}},{key:"_tryLoadFromIOSCache",value:function(){var e=je(Z.mark(function n(i){var r;return Z.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(this._iosCache){s.next=2;break}return s.abrupt("return",!1);case 2:return s.prev=2,s.next=5,this._iosCache.get(i);case 5:if(r=s.sent,!this.cancelled){s.next=8;break}return s.abrupt("return",!0);case 8:if(r){s.next=10;break}return s.abrupt("return",!1);case 10:if(r.code){s.next=13;break}return this._refetchHeaders=r.refetchHeaders,s.abrupt("return",!1);case 13:return Function('"use strict";'+r.code)(),this.succeeded=!0,this._successCallback(),s.abrupt("return",!0);case 19:return s.prev=19,s.t0=s.catch(2),s.abrupt("return",!1);case 22:case"end":return s.stop()}},n,this,[[2,19]])}));return function(n){return e.apply(this,arguments)}}()},{key:"_loadFromNetwork",value:function(){var e=je(Z.mark(function n(i){var r,s,o,a=this;return Z.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return this._networkTimeout=setTimeout(function(){a._networkTimedOut=!0,a._failureCallback("Timed out (>".concat(2e4," ms) when loading call object bundle ").concat(i))},2e4),l.prev=1,r=this._refetchHeaders?{headers:this._refetchHeaders}:{},l.next=5,fetch(i,r);case 5:if(s=l.sent,clearTimeout(this._networkTimeout),!this.cancelled&&!this._networkTimedOut){l.next=9;break}throw new Bf;case 9:return l.next=11,this._getBundleCodeFromResponse(i,s);case 11:if(o=l.sent,!this.cancelled){l.next=14;break}throw new Bf;case 14:Function('"use strict";'+o)(),this._iosCache&&this._iosCache.set(i,o,s.headers),this.succeeded=!0,this._successCallback(),l.next=26;break;case 20:if(l.prev=20,l.t0=l.catch(1),clearTimeout(this._networkTimeout),!(l.t0 instanceof Bf||this.cancelled||this._networkTimedOut)){l.next=25;break}return l.abrupt("return");case 25:this._failureCallback("Failed to load call object bundle ".concat(i,": ").concat(l.t0));case 26:case"end":return l.stop()}},n,this,[[1,20]])}));return function(n){return e.apply(this,arguments)}}()},{key:"_getBundleCodeFromResponse",value:function(){var e=je(Z.mark(function n(i,r){var s;return Z.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!r.ok){o.next=4;break}return o.next=3,r.text();case 3:return o.abrupt("return",o.sent);case 4:if(!this._iosCache||r.status!==304){o.next=9;break}return o.next=7,this._iosCache.renew(i,r.headers);case 7:return s=o.sent,o.abrupt("return",s.code);case 9:throw new Error("Received ".concat(r.status," response"));case 10:case"end":return o.stop()}},n,this)}));return function(n,i){return e.apply(this,arguments)}}()}]),t}(),oI=function(t,e){for(var n=-1,i=t==null?0:t.length,r=0,s=[];++n<i;){var o=t[n];e(o,n,t)&&(s[r++]=o)}return s},AF=function(t){return function(e,n,i){for(var r=-1,s=Object(e),o=i(e),a=o.length;a--;){var l=o[t?a:++r];if(n(s[l],l,s)===!1)break}return e}}(),kF=function(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i},aI=typeof Uc=="object"&&Uc&&Uc.Object===Object&&Uc,RF=typeof self=="object"&&self&&self.Object===Object&&self,vi=aI||RF||Function("return this")(),Xi=vi.Symbol,lI=Object.prototype,OF=lI.hasOwnProperty,LF=lI.toString,Ia=Xi?Xi.toStringTag:void 0,MF=function(t){var e=OF.call(t,Ia),n=t[Ia];try{t[Ia]=void 0;var i=!0}catch{}var r=LF.call(t);return i&&(e?t[Ia]=n:delete t[Ia]),r},NF=Object.prototype.toString,PF=function(t){return NF.call(t)},DF="[object Null]",FF="[object Undefined]",cI=Xi?Xi.toStringTag:void 0,Vs=function(t){return t==null?t===void 0?FF:DF:cI&&cI in Object(t)?MF(t):PF(t)},Bs=function(t){return t!=null&&typeof t=="object"},xF="[object Arguments]",uI=function(t){return Bs(t)&&Vs(t)==xF},hI=Object.prototype,UF=hI.hasOwnProperty,jF=hI.propertyIsEnumerable,dI=uI(function(){return arguments}())?uI:function(t){return Bs(t)&&UF.call(t,"callee")&&!jF.call(t,"callee")},Wn=Array.isArray,VF=function(){return!1},Hf=Wi(function(t,e){var n=e&&!e.nodeType&&e,i=n&&t&&!t.nodeType&&t,r=i&&i.exports===n?vi.Buffer:void 0,s=(r?r.isBuffer:void 0)||VF;t.exports=s}),BF=9007199254740991,HF=/^(?:0|[1-9]\d*)$/,fI=function(t,e){var n=typeof t;return!!(e=e==null?BF:e)&&(n=="number"||n!="symbol"&&HF.test(t))&&t>-1&&t%1==0&&t<e},qF=9007199254740991,qf=function(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=qF},gt={};gt["[object Float32Array]"]=gt["[object Float64Array]"]=gt["[object Int8Array]"]=gt["[object Int16Array]"]=gt["[object Int32Array]"]=gt["[object Uint8Array]"]=gt["[object Uint8ClampedArray]"]=gt["[object Uint16Array]"]=gt["[object Uint32Array]"]=!0,gt["[object Arguments]"]=gt["[object Array]"]=gt["[object ArrayBuffer]"]=gt["[object Boolean]"]=gt["[object DataView]"]=gt["[object Date]"]=gt["[object Error]"]=gt["[object Function]"]=gt["[object Map]"]=gt["[object Number]"]=gt["[object Object]"]=gt["[object RegExp]"]=gt["[object Set]"]=gt["[object String]"]=gt["[object WeakMap]"]=!1;var WF=function(t){return Bs(t)&&qf(t.length)&&!!gt[Vs(t)]},pI=function(t){return function(e){return t(e)}},mI=Wi(function(t,e){var n=e&&!e.nodeType&&e,i=n&&t&&!t.nodeType&&t,r=i&&i.exports===n&&aI.process,s=function(){try{var o=i&&i.require&&i.require("util").types;return o||r&&r.binding&&r.binding("util")}catch{}}();t.exports=s}),gI=mI&&mI.isTypedArray,_I=gI?pI(gI):WF,GF=Object.prototype.hasOwnProperty,zF=function(t,e){var n=Wn(t),i=!n&&dI(t),r=!n&&!i&&Hf(t),s=!n&&!i&&!r&&_I(t),o=n||i||r||s,a=o?kF(t.length,String):[],l=a.length;for(var c in t)!e&&!GF.call(t,c)||o&&(c=="length"||r&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||fI(c,l))||a.push(c);return a},KF=Object.prototype,XF=function(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||KF)},QF=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),YF=Object.prototype.hasOwnProperty,JF=function(t){if(!XF(t))return QF(t);var e=[];for(var n in Object(t))YF.call(t,n)&&n!="constructor"&&e.push(n);return e},Wf=function(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")},ZF="[object AsyncFunction]",$F="[object Function]",e2="[object GeneratorFunction]",t2="[object Proxy]",vI=function(t){if(!Wf(t))return!1;var e=Vs(t);return e==$F||e==e2||e==ZF||e==t2},Gf=function(t){return t!=null&&qf(t.length)&&!vI(t)},zf=function(t){return Gf(t)?zF(t):JF(t)},yI=function(t,e){return function(n,i){if(n==null)return n;if(!Gf(n))return t(n,i);for(var r=n.length,s=e?r:-1,o=Object(n);(e?s--:++s<r)&&i(o[s],s,o)!==!1;);return n}}(function(t,e){return t&&AF(t,e,zf)}),n2=function(t,e){var n=[];return yI(t,function(i,r,s){e(i,r,s)&&n.push(i)}),n},i2=function(){this.__data__=[],this.size=0},bI=function(t,e){return t===e||t!=t&&e!=e},Xc=function(t,e){for(var n=t.length;n--;)if(bI(t[n][0],e))return n;return-1},r2=Array.prototype.splice,s2=function(t){var e=this.__data__,n=Xc(e,t);return!(n<0||(n==e.length-1?e.pop():r2.call(e,n,1),--this.size,0))},o2=function(t){var e=this.__data__,n=Xc(e,t);return n<0?void 0:e[n][1]},a2=function(t){return Xc(this.__data__,t)>-1},l2=function(t,e){var n=this.__data__,i=Xc(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function Hs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Hs.prototype.clear=i2,Hs.prototype.delete=s2,Hs.prototype.get=o2,Hs.prototype.has=a2,Hs.prototype.set=l2;var Qc=Hs,c2=function(){this.__data__=new Qc,this.size=0},u2=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},h2=function(t){return this.__data__.get(t)},EI,d2=function(t){return this.__data__.has(t)},Kf=vi["__core-js_shared__"],II=(EI=/[^.]+$/.exec(Kf&&Kf.keys&&Kf.keys.IE_PROTO||""))?"Symbol(src)_1."+EI:"",f2=function(t){return!!II&&II in t},p2=Function.prototype.toString,Ur=function(t){if(t!=null){try{return p2.call(t)}catch{}try{return t+""}catch{}}return""},m2=/^\[object .+?Constructor\]$/,g2=Function.prototype,_2=Object.prototype,v2=g2.toString,y2=_2.hasOwnProperty,b2=RegExp("^"+v2.call(y2).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),E2=function(t){return!(!Wf(t)||f2(t))&&(vI(t)?b2:m2).test(Ur(t))},I2=function(t,e){return t==null?void 0:t[e]},qs=function(t,e){var n=I2(t,e);return E2(n)?n:void 0},wa=qs(vi,"Map"),Ta=qs(Object,"create"),w2=function(){this.__data__=Ta?Ta(null):{},this.size=0},T2=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},C2="__lodash_hash_undefined__",S2=Object.prototype.hasOwnProperty,A2=function(t){var e=this.__data__;if(Ta){var n=e[t];return n===C2?void 0:n}return S2.call(e,t)?e[t]:void 0},k2=Object.prototype.hasOwnProperty,R2=function(t){var e=this.__data__;return Ta?e[t]!==void 0:k2.call(e,t)},O2="__lodash_hash_undefined__",L2=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Ta&&e===void 0?O2:e,this};function Ws(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Ws.prototype.clear=w2,Ws.prototype.delete=T2,Ws.prototype.get=A2,Ws.prototype.has=R2,Ws.prototype.set=L2;var wI=Ws,M2=function(){this.size=0,this.__data__={hash:new wI,map:new(wa||Qc),string:new wI}},N2=function(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null},Yc=function(t,e){var n=t.__data__;return N2(e)?n[typeof e=="string"?"string":"hash"]:n.map},P2=function(t){var e=Yc(this,t).delete(t);return this.size-=e?1:0,e},D2=function(t){return Yc(this,t).get(t)},F2=function(t){return Yc(this,t).has(t)},x2=function(t,e){var n=Yc(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function Gs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Gs.prototype.clear=M2,Gs.prototype.delete=P2,Gs.prototype.get=D2,Gs.prototype.has=F2,Gs.prototype.set=x2;var Jc=Gs,U2=200,j2=function(t,e){var n=this.__data__;if(n instanceof Qc){var i=n.__data__;if(!wa||i.length<U2-1)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new Jc(i)}return n.set(t,e),this.size=n.size,this};function zs(t){var e=this.__data__=new Qc(t);this.size=e.size}zs.prototype.clear=c2,zs.prototype.delete=u2,zs.prototype.get=h2,zs.prototype.has=d2,zs.prototype.set=j2;var Zc=zs,V2="__lodash_hash_undefined__",B2=function(t){return this.__data__.set(t,V2),this},H2=function(t){return this.__data__.has(t)};function $c(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new Jc;++e<n;)this.add(t[e])}$c.prototype.add=$c.prototype.push=B2,$c.prototype.has=H2;var q2=$c,W2=function(t,e){for(var n=-1,i=t==null?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1},G2=function(t,e){return t.has(e)},z2=1,K2=2,TI=function(t,e,n,i,r,s){var o=n&z2,a=t.length,l=e.length;if(a!=l&&!(o&&l>a))return!1;var c=s.get(t);if(c&&s.get(e))return c==e;var u=-1,h=!0,d=n&K2?new q2:void 0;for(s.set(t,e),s.set(e,t);++u<a;){var f=t[u],p=e[u];if(i)var g=o?i(p,f,u,e,t,s):i(f,p,u,t,e,s);if(g!==void 0){if(g)continue;h=!1;break}if(d){if(!W2(e,function(m,v){if(!G2(d,v)&&(f===m||r(f,m,n,i,s)))return d.push(v)})){h=!1;break}}else if(f!==p&&!r(f,p,n,i,s)){h=!1;break}}return s.delete(t),s.delete(e),h},CI=vi.Uint8Array,X2=function(t){var e=-1,n=Array(t.size);return t.forEach(function(i,r){n[++e]=[r,i]}),n},Q2=function(t){var e=-1,n=Array(t.size);return t.forEach(function(i){n[++e]=i}),n},Y2=1,J2=2,Z2="[object Boolean]",$2="[object Date]",ex="[object Error]",tx="[object Map]",nx="[object Number]",ix="[object RegExp]",rx="[object Set]",sx="[object String]",ox="[object Symbol]",ax="[object ArrayBuffer]",lx="[object DataView]",SI=Xi?Xi.prototype:void 0,Xf=SI?SI.valueOf:void 0,cx=function(t,e,n,i,r,s,o){switch(n){case lx:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case ax:return!(t.byteLength!=e.byteLength||!s(new CI(t),new CI(e)));case Z2:case $2:case nx:return bI(+t,+e);case ex:return t.name==e.name&&t.message==e.message;case ix:case sx:return t==e+"";case tx:var a=X2;case rx:var l=i&Y2;if(a||(a=Q2),t.size!=e.size&&!l)return!1;var c=o.get(t);if(c)return c==e;i|=J2,o.set(t,e);var u=TI(a(t),a(e),i,r,s,o);return o.delete(t),u;case ox:if(Xf)return Xf.call(t)==Xf.call(e)}return!1},ux=function(t,e){for(var n=-1,i=e.length,r=t.length;++n<i;)t[r+n]=e[n];return t},hx=function(t,e,n){var i=e(t);return Wn(t)?i:ux(i,n(t))},dx=function(){return[]},fx=Object.prototype.propertyIsEnumerable,AI=Object.getOwnPropertySymbols,px=AI?function(t){return t==null?[]:(t=Object(t),oI(AI(t),function(e){return fx.call(t,e)}))}:dx,kI=function(t){return hx(t,zf,px)},mx=1,gx=Object.prototype.hasOwnProperty,_x=function(t,e,n,i,r,s){var o=n&mx,a=kI(t),l=a.length;if(l!=kI(e).length&&!o)return!1;for(var c=l;c--;){var u=a[c];if(!(o?u in e:gx.call(e,u)))return!1}var h=s.get(t);if(h&&s.get(e))return h==e;var d=!0;s.set(t,e),s.set(e,t);for(var f=o;++c<l;){var p=t[u=a[c]],g=e[u];if(i)var m=o?i(g,p,u,e,t,s):i(p,g,u,t,e,s);if(!(m===void 0?p===g||r(p,g,n,i,s):m)){d=!1;break}f||(f=u=="constructor")}if(d&&!f){var v=t.constructor,A=e.constructor;v!=A&&"constructor"in t&&"constructor"in e&&!(typeof v=="function"&&v instanceof v&&typeof A=="function"&&A instanceof A)&&(d=!1)}return s.delete(t),s.delete(e),d},Qf=qs(vi,"DataView"),Yf=qs(vi,"Promise"),Jf=qs(vi,"Set"),Zf=qs(vi,"WeakMap"),vx=Ur(Qf),yx=Ur(wa),bx=Ur(Yf),Ex=Ur(Jf),Ix=Ur(Zf),jr=Vs;(Qf&&jr(new Qf(new ArrayBuffer(1)))!="[object DataView]"||wa&&jr(new wa)!="[object Map]"||Yf&&jr(Yf.resolve())!="[object Promise]"||Jf&&jr(new Jf)!="[object Set]"||Zf&&jr(new Zf)!="[object WeakMap]")&&(jr=function(t){var e=Vs(t),n=e=="[object Object]"?t.constructor:void 0,i=n?Ur(n):"";if(i)switch(i){case vx:return"[object DataView]";case yx:return"[object Map]";case bx:return"[object Promise]";case Ex:return"[object Set]";case Ix:return"[object WeakMap]"}return e});var RI=jr,wx=1,OI="[object Arguments]",LI="[object Array]",eu="[object Object]",MI=Object.prototype.hasOwnProperty,Tx=function(t,e,n,i,r,s){var o=Wn(t),a=Wn(e),l=o?LI:RI(t),c=a?LI:RI(e),u=(l=l==OI?eu:l)==eu,h=(c=c==OI?eu:c)==eu,d=l==c;if(d&&Hf(t)){if(!Hf(e))return!1;o=!0,u=!1}if(d&&!u)return s||(s=new Zc),o||_I(t)?TI(t,e,n,i,r,s):cx(t,e,l,n,i,r,s);if(!(n&wx)){var f=u&&MI.call(t,"__wrapped__"),p=h&&MI.call(e,"__wrapped__");if(f||p){var g=f?t.value():t,m=p?e.value():e;return s||(s=new Zc),r(g,m,n,i,s)}}return!!d&&(s||(s=new Zc),_x(t,e,n,i,r,s))},NI=function t(e,n,i,r,s){return e===n||(e==null||n==null||!Bs(e)&&!Bs(n)?e!=e&&n!=n:Tx(e,n,i,r,t,s))},Cx=1,Sx=2,Ax=function(t,e,n,i){var r=n.length,s=r,o=!i;if(t==null)return!s;for(t=Object(t);r--;){var a=n[r];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++r<s;){var l=(a=n[r])[0],c=t[l],u=a[1];if(o&&a[2]){if(c===void 0&&!(l in t))return!1}else{var h=new Zc;if(i)var d=i(c,u,l,t,e,h);if(!(d===void 0?NI(u,c,Cx|Sx,i,h):d))return!1}}return!0},PI=function(t){return t==t&&!Wf(t)},kx=function(t){for(var e=zf(t),n=e.length;n--;){var i=e[n],r=t[i];e[n]=[i,r,PI(r)]}return e},DI=function(t,e){return function(n){return n!=null&&n[t]===e&&(e!==void 0||t in Object(n))}},Rx=function(t){var e=kx(t);return e.length==1&&e[0][2]?DI(e[0][0],e[0][1]):function(n){return n===t||Ax(n,t,e)}},Ox="[object Symbol]",Ca=function(t){return typeof t=="symbol"||Bs(t)&&Vs(t)==Ox},Lx=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Mx=/^\w*$/,$f=function(t,e){if(Wn(t))return!1;var n=typeof t;return!(n!="number"&&n!="symbol"&&n!="boolean"&&t!=null&&!Ca(t))||Mx.test(t)||!Lx.test(t)||e!=null&&t in Object(e)},Nx="Expected a function";function ep(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Nx);var n=function(){var i=arguments,r=e?e.apply(this,i):i[0],s=n.cache;if(s.has(r))return s.get(r);var o=t.apply(this,i);return n.cache=s.set(r,o)||s,o};return n.cache=new(ep.Cache||Jc),n}ep.Cache=Jc;var Px=ep,Dx=500,Fx=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xx=/\\(\\)?/g,Ux=function(t){var e=Px(t,function(i){return n.size===Dx&&n.clear(),i}),n=e.cache;return e}(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Fx,function(n,i,r,s){e.push(r?s.replace(xx,"$1"):i||n)}),e}),tp=function(t,e){for(var n=-1,i=t==null?0:t.length,r=Array(i);++n<i;)r[n]=e(t[n],n,t);return r},jx=1/0,FI=Xi?Xi.prototype:void 0,xI=FI?FI.toString:void 0,Vx=function t(e){if(typeof e=="string")return e;if(Wn(e))return tp(e,t)+"";if(Ca(e))return xI?xI.call(e):"";var n=e+"";return n=="0"&&1/e==-jx?"-0":n},Bx=function(t){return t==null?"":Vx(t)},UI=function(t,e){return Wn(t)?t:$f(t,e)?[t]:Ux(Bx(t))},Hx=1/0,tu=function(t){if(typeof t=="string"||Ca(t))return t;var e=t+"";return e=="0"&&1/t==-Hx?"-0":e},jI=function(t,e){for(var n=0,i=(e=UI(e,t)).length;t!=null&&n<i;)t=t[tu(e[n++])];return n&&n==i?t:void 0},qx=function(t,e,n){var i=t==null?void 0:jI(t,e);return i===void 0?n:i},Wx=function(t,e){return t!=null&&e in Object(t)},Gx=function(t,e,n){for(var i=-1,r=(e=UI(e,t)).length,s=!1;++i<r;){var o=tu(e[i]);if(!(s=t!=null&&n(t,o)))break;t=t[o]}return s||++i!=r?s:!!(r=t==null?0:t.length)&&qf(r)&&fI(o,r)&&(Wn(t)||dI(t))},zx=function(t,e){return t!=null&&Gx(t,e,Wx)},Kx=1,Xx=2,Qx=function(t,e){return $f(t)&&PI(e)?DI(tu(t),e):function(n){var i=qx(n,t);return i===void 0&&i===e?zx(n,t):NI(e,i,Kx|Xx)}},VI=function(t){return t},Yx=function(t){return function(e){return e==null?void 0:e[t]}},Jx=function(t){return function(e){return jI(e,t)}},Zx=function(t){return $f(t)?Yx(tu(t)):Jx(t)},BI=function(t){return typeof t=="function"?t:t==null?VI:typeof t=="object"?Wn(t)?Qx(t[0],t[1]):Rx(t):Zx(t)},HI=function(t,e){return(Wn(t)?oI:n2)(t,BI(e))},$x=function(t,e){var n=-1,i=Gf(t)?Array(t.length):[];return yI(t,function(r,s,o){i[++n]=e(r,s,o)}),i},eU=function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t},tU=function(t,e){if(t!==e){var n=t!==void 0,i=t===null,r=t==t,s=Ca(t),o=e!==void 0,a=e===null,l=e==e,c=Ca(e);if(!a&&!c&&!s&&t>e||s&&o&&l&&!a&&!c||i&&o&&l||!n&&l||!r)return 1;if(!i&&!s&&!c&&t<e||c&&n&&r&&!i&&!s||a&&n&&r||!o&&r||!l)return-1}return 0},nU=function(t,e,n){for(var i=-1,r=t.criteria,s=e.criteria,o=r.length,a=n.length;++i<o;){var l=tU(r[i],s[i]);if(l)return i>=a?l:l*(n[i]=="desc"?-1:1)}return t.index-e.index},iU=function(t,e,n){var i=-1;e=tp(e.length?e:[VI],pI(BI));var r=$x(t,function(s,o,a){return{criteria:tp(e,function(l){return l(s)}),index:++i,value:s}});return eU(r,function(s,o){return nU(s,o,n)})},qI=function(t,e,n,i){return t==null?[]:(Wn(e)||(e=e==null?[]:[e]),Wn(n=i?void 0:n)||(n=n==null?[]:[n]),iU(t,e,n))},nu=function(t,e,n){return sU(t.local,e,n)===!0},rU=function(t,e,n){return t.local.streams&&t.local.streams[e]&&t.local.streams[e].stream&&t.local.streams[e].stream["get".concat(n==="video"?"Video":"Audio","Tracks")]()[0]},Sa=function(t,e,n,i){var r=oU(t,e,n,i);return r&&r.pendingTrack},sU=function(t,e,n){if(!t)return!1;var i=function(s){switch(s){case"avatar":return!0;case"staged":return s;default:return!!s}},r=t.public.subscribedTracks;return r&&r[e]?i(r[e][n]):!r||i(r.ALL)},oU=function(t,e,n,i){var r=qI(HI(t.streams,function(s){return s.participantId===e&&s.type===n&&s.pendingTrack&&s.pendingTrack.kind===i}),"starttime","desc");return r&&r[0]},aU=function(t,e){var n=t.local.public.customTracks;if(n&&n[e])return n[e].track},lU=function(t,e,n,i){var r="soup-"+n,s=qI(HI(t.streams,function(o){return o.participantId===e&&o.streamId===r&&o.pendingTrack&&o.pendingTrack.kind===i}),"starttime","desc");return s&&s[0]&&s[0].pendingTrack};function WI(t){for(var e=store.getState(),n=0,i=["cam","screen"];n<i.length;n++)for(var r=i[n],s=0,o=["video","audio"];s<o.length;s++){var a=o[s],l=r==="cam"?a:"screen".concat(a.charAt(0).toUpperCase()+a.slice(1)),c=t.tracks[l];if(c){var u=t.local?rU(e,r,a):Sa(e,t.session_id,r,a);c.state==="playable"&&(c.track=u),c.persistentTrack=u}}}function GI(t){try{var e=store.getState();for(var n in t.tracks)if(!np(n)){var i=t.tracks[n].kind;if(i){var r=t.local?aU(e,n,i):lU(e,t.session_id,n,i),s=t.tracks[n];r&&s&&s.state==="playable"&&(t.tracks[n].track=r)}else console.error("unknown type for custom track")}}catch(o){console.error(o)}}function np(t){return["video","audio","screenVideo","screenAudio"].includes(t)}function zI(t,e){var n=store.getState();if(t.local){if(t.audio)try{t.audioTrack=n.local.streams.cam.stream.getAudioTracks()[0],t.audioTrack||(t.audio=!1)}catch{}if(t.video)try{t.videoTrack=n.local.streams.cam.stream.getVideoTracks()[0],t.videoTrack||(t.video=!1)}catch{}if(t.screen)try{t.screenVideoTrack=n.local.streams.screen.stream.getVideoTracks()[0],t.screenAudioTrack=n.local.streams.screen.stream.getAudioTracks()[0],t.screenVideoTrack||t.screenAudioTrack||(t.screen=!1)}catch{}}else{var i=!0;try{var r=n.participants[t.session_id];r&&r.public&&r.public.rtcType&&r.public.rtcType.impl==="peer-to-peer"&&r.private&&!["connected","completed"].includes(r.private.peeringState)&&(i=!1)}catch(c){console.error(c)}if(!i)return t.audio=!1,t.audioTrack=!1,t.video=!1,t.videoTrack=!1,t.screen=!1,void(t.screenTrack=!1);try{if(n.streams,t.audio&&nu(n,t.session_id,"cam-audio")){var s=Sa(n,t.session_id,"cam","audio");s&&(e&&e.audioTrack&&e.audioTrack.id===s.id?t.audioTrack=s:s.muted||(t.audioTrack=s)),t.audioTrack||(t.audio=!1)}if(t.video&&nu(n,t.session_id,"cam-video")){var o=Sa(n,t.session_id,"cam","video");o&&(e&&e.videoTrack&&e.videoTrack.id===o.id?t.videoTrack=o:o.muted||(t.videoTrack=o)),t.videoTrack||(t.video=!1)}if(t.screen&&nu(n,t.session_id,"screen-audio")){var a=Sa(n,t.session_id,"screen","audio");a&&(e&&e.screenAudioTrack&&e.screenAudioTrack.id===a.id?t.screenAudioTrack=a:a.muted||(t.screenAudioTrack=a))}if(t.screen&&nu(n,t.session_id,"screen-video")){var l=Sa(n,t.session_id,"screen","video");l&&(e&&e.screenVideoTrack&&e.screenVideoTrack.id===l.id?t.screenVideoTrack=l:l.muted||(t.screenVideoTrack=l))}t.screenVideoTrack||t.screenAudioTrack||(t.screen=!1)}catch(c){console.error("unexpected error matching up tracks",c)}}}function KI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Kt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?KI(Object(n),!0).forEach(function(i){Hc(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):KI(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function cU(t){var e=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var n,i=_i(t);if(e){var r=_i(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Bc(this,n)}}var XI="video",uU="voice",QI={androidInCallNotification:{title:"string",subtitle:"string",iconName:"string",disableForCustomOverride:"boolean"},disableAutoDeviceManagement:{audio:"boolean",video:"boolean"}},Vr={url:{validate:function(t){return typeof t=="string"},help:"url should be a string"},baseUrl:{validate:function(t){return typeof t=="string"},help:"baseUrl should be a string"},token:{validate:function(t){return typeof t=="string"},help:"token should be a string",queryString:"t"},dailyConfig:{validate:function(t){return window._dailyConfig||(window._dailyConfig={}),window._dailyConfig.experimentalGetUserMediaConstraintsModify=t.experimentalGetUserMediaConstraintsModify,delete t.experimentalGetUserMediaConstraintsModify,!0}},reactNativeConfig:{validate:function(t){return function e(n,i){if(i===void 0)return!1;switch(qn(i)){case"string":return qn(n)===i;case"object":if(qn(n)!=="object")return!1;for(var r in n)if(!e(n[r],i[r]))return!1;return!0;default:return!1}}(t,QI)},help:"reactNativeConfig should look like ".concat(JSON.stringify(QI),", all fields optional")},lang:{validate:function(t){return["de","en-us","en","es","fi","fr","it","jp","ka","nl","no","pl","pt","ru","sv","tr","user"].includes(t)},help:"language not supported. Options are: de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, ru, sv, tr, user"},userName:!0,activeSpeakerMode:!0,showLeaveButton:!0,showLocalVideo:!0,showParticipantsBar:!0,showFullscreenButton:!0,iframeStyle:!0,customLayout:!0,cssFile:!0,cssText:!0,bodyClass:!0,videoSource:{validate:function(t,e){return e._preloadCache.videoDeviceId=t,!0}},audioSource:{validate:function(t,e){return e._preloadCache.audioDeviceId=t,!0}},subscribeToTracksAutomatically:{validate:function(t,e){return e._preloadCache.subscribeToTracksAutomatically=t,!0}},theme:{validate:function(t){var e=["accent","accentText","background","backgroundAccent","baseText","border","mainAreaBg","mainAreaBgAccent","mainAreaText","supportiveText"],n=function(i){for(var r=0,s=Object.keys(i);r<s.length;r++){var o=s[r];if(!e.includes(o))return console.error('unsupported color "'.concat(o,'". Valid colors: ').concat(e.join(", "))),!1;if(!i[o].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i))return console.error("".concat(o,' theme color should be provided in valid hex color format. Received: "').concat(i[o],'"')),!1}return!0};return qn(t)==="object"&&("light"in t&&"dark"in t||"colors"in t)?"light"in t&&"dark"in t?"colors"in t.light?"colors"in t.dark?n(t.light.colors)&&n(t.dark.colors):(console.error('Dark theme is missing "colors" property.',t),!1):(console.error('Light theme is missing "colors" property.',t),!1):n(t.colors):(console.error('Theme must contain either both "light" and "dark" properties, or "colors".',t),!1)},help:"unsupported theme configuration. Check error logs for detailed info."},layoutConfig:{validate:function(t){if("grid"in t){var e=t.grid;if("maxTilesPerPage"in e){if(!Number.isInteger(e.maxTilesPerPage))return console.error("grid.maxTilesPerPage should be an integer. You passed ".concat(e.maxTilesPerPage,".")),!1;if(e.maxTilesPerPage>49)return console.error("grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."),!1}if("minTilesPerPage"in e){if(!Number.isInteger(e.minTilesPerPage))return console.error("grid.minTilesPerPage should be an integer. You passed ".concat(e.minTilesPerPage,".")),!1;if(e.minTilesPerPage<1)return console.error("grid.minTilesPerPage can't be lower than 1."),!1;if("maxTilesPerPage"in e&&e.minTilesPerPage>e.maxTilesPerPage)return console.error("grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."),!1}}return!0},help:"unsupported layoutConfig. Check error logs for detailed info."},receiveSettings:{validate:function(t){return YI(t,{allowAllParticipantsKey:!1})},help:$I({allowAllParticipantsKey:!1})},inputSettings:{validate:function(t){return JI(t)},help:ZI()},layout:{validate:function(t){return t==="custom-v1"||t==="browser"||t==="none"},help:'layout may only be set to "custom-v1"',queryString:"layout"},emb:{queryString:"emb"},embHref:{queryString:"embHref"},dailyJsVersion:{queryString:"dailyJsVersion"}},iu={styles:{validate:function(t){for(var e in t)if(e!=="cam"&&e!=="screen")return!1;if(t.cam){for(var e in t.cam)if(e!=="div"&&e!=="video")return!1}if(t.screen){for(var e in t.screen)if(e!=="div"&&e!=="video")return!1}return!0},help:"styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }"},setSubscribedTracks:{validate:function(t,e,n){if(e._preloadCache.subscribeToTracksAutomatically)return!1;var i=[!0,!1,"staged"];if(i.includes(t)||!zt()&&t==="avatar")return!0;for(var r in t)if(!["audio","video","screenAudio","screenVideo"].includes(r)||!i.includes(t[r]))return!1;return!0},help:"setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: "+"true".concat(zt()?"":" | 'avatar'"," | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }")},setAudio:!0,setVideo:!0,eject:!0};function Aa(t){var e={};for(var n in t)t[n]instanceof MediaStreamTrack?e[n]=zc:(n==="dailyConfig"&&(t[n].modifyLocalSdpHook&&(window._dailyConfig&&(window._dailyConfig.modifyLocalSdpHook=t[n].modifyLocalSdpHook),delete t[n].modifyLocalSdpHook),t[n].modifyRemoteSdpHook&&(window._dailyConfig&&(window._dailyConfig.modifyRemoteSdpHook=t[n].modifyRemoteSdpHook),delete t[n].modifyRemoteSdpHook)),e[n]=t[n]);return e}function Ve(){if(zt())throw new Error("This daily-js method is not currently supported in React Native")}function ip(){if(!zt())throw new Error("This daily-js method is only supported in React Native")}function YI(t,e){for(var n=e.allowAllParticipantsKey,i=function(h){var d=["local"];return n||d.push("*"),h&&!d.includes(h)},r=function(h){return!!(h.layer===void 0||Number.isInteger(h.layer)&&h.layer>=0||h.layer==="inherit")},s=function(h){return!!h&&!(h.video&&!r(h.video))&&!(h.screenVideo&&!r(h.screenVideo))},o=0,a=Object.entries(t);o<a.length;o++){var l=QD(a[o],2),c=l[0],u=l[1];if(!i(c)||!s(u))return!1}return!0}function JI(t){return qn(t)==="object"&&!(!t.video||qn(t.video)!=="object")&&!!function(e){if(!e||qn(e)!=="object"||Object.keys(e).length===0||e.type&&(n=e.type,typeof n!="string"||!Object.values(xf).includes(n)))return!1;var n;return!(e.publish!==void 0&&typeof e.publish!="boolean"||e.config&&(qn(e.config)!=="object"||!function(i,r){var s=Object.keys(r);if(s.length===0)return!0;var o="invalid object in inputSettings -> video -> processor -> config";switch(i){case xf.BGBLUR:if(s.length>1||s[0]!=="strength")throw new Error(o);if(typeof r.strength!="number"||r.strength<=0||r.strength>1||isNaN(r.strength))throw new Error("".concat(o,"; expected: {0 < strength <= 1}, got: ").concat(r.strength));default:return!0}}(e.type,e.config)))}(t.video.processor)}function ZI(){var t=Object.values(xf).join(" | ");return"inputSettings must be of the form: { video: { processor: [ ".concat(t," ] }, publish?: boolean, config?: {} }")}function $I(t){var e=t.allowAllParticipantsKey;return"receiveSettings must be of the form { [<remote participant id> | ".concat(uF).concat(e?' | "'.concat(hF,'"'):"","]: ")+'{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}'}var uV=function(t){Vc(n,xc);var e=cU(n);function n(i){var r,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Gi(this,n),r=e.call(this),Hc(jc(r),"handleNativeAppActiveStateChange",function(a){r.disableReactNativeAutoDeviceManagement("video")||(a?r.camUnmutedBeforeLosingNativeActiveState&&r.setLocalVideo(!0):(r.camUnmutedBeforeLosingNativeActiveState=r.localVideo(),r.camUnmutedBeforeLosingNativeActiveState&&r.setLocalVideo(!1)))}),Hc(jc(r),"handleNativeAudioFocusChange",function(a){r.disableReactNativeAutoDeviceManagement("audio")||(r._hasNativeAudioFocus=a,r.toggleParticipantAudioBasedOnNativeAudioFocus(),r._hasNativeAudioFocus?r.micUnmutedBeforeLosingNativeAudioFocus&&r.setLocalAudio(!0):(r.micUnmutedBeforeLosingNativeAudioFocus=r.localAudio(),r.setLocalAudio(!1)))}),s.dailyJsVersion="0.21.0",r._iframe=i,r._callObjectMode=s.layout==="none"&&!r._iframe,r._preloadCache={subscribeToTracksAutomatically:!0,audioDeviceId:null,videoDeviceId:null,outputDeviceId:null},r._callObjectMode&&(window._dailyPreloadCache=r._preloadCache),s.showLocalVideo!==void 0?r._callObjectMode?console.error("showLocalVideo is not available in call object mode"):r._showLocalVideo=!!s.showLocalVideo:r._showLocalVideo=!0,s.showParticipantsBar!==void 0?r._callObjectMode?console.error("showParticipantsBar is not available in call object mode"):r._showParticipantsBar=!!s.showParticipantsBar:r._showParticipantsBar=!0,s.activeSpeakerMode!==void 0?r._callObjectMode?console.error("activeSpeakerMode is not available in call object mode"):r._activeSpeakerMode=!!s.activeSpeakerMode:r._activeSpeakerMode=!1,s.receiveSettings?r._callObjectMode?r._receiveSettings=s.receiveSettings:console.error("receiveSettings is only available in call object mode"):r._receiveSettings={},r._inputSettings={},s.inputSettings&&(r._inputSettings=s.inputSettings),r.validateProperties(s),r.properties=Kt({},s),r._callObjectLoader=r._callObjectMode?new TF:null,r._meetingState=QE,r._isPreparingToJoin=!1,r._accessState={access:YE},r._nativeInCallAudioMode=XI,r._participants={},r._waitingParticipants={},r._inputEventsOn={},r._network={threshold:"good",quality:100},r._activeSpeaker={},r._callFrameId=jf(),r._messageChannel=zt()?new vF:new gF,r._iframe&&(r._iframe.requestFullscreen?r._iframe.addEventListener("fullscreenchange",function(a){document.fullscreenElement===r._iframe?(r.emit(Us,{action:Us}),r.sendMessageToCallMachine({action:Us})):(r.emit(js,{action:js}),r.sendMessageToCallMachine({action:js}))}):r._iframe.webkitRequestFullscreen&&r._iframe.addEventListener("webkitfullscreenchange",function(a){document.webkitFullscreenElement===r._iframe?(r.emit(Us,{action:Us}),r.sendMessageToCallMachine({action:Us})):(r.emit(js,{action:js}),r.sendMessageToCallMachine({action:js}))})),zt()){var o=r.nativeUtils();o.addAudioFocusChangeListener&&o.removeAudioFocusChangeListener&&o.addAppActiveStateChangeListener&&o.removeAppActiveStateChangeListener||console.warn("expected (add|remove)(AudioFocus|AppActiveState)ChangeListener to be available in React Native"),r._hasNativeAudioFocus=!0,o.addAudioFocusChangeListener(r.handleNativeAudioFocusChange),o.addAppActiveStateChangeListener(r.handleNativeAppActiveStateChange)}return r._messageChannel.addListenerForMessagesFromCallMachine(r.handleMessageFromCallMachine,r._callFrameId,jc(r)),r}return zi(n,null,[{key:"supportedBrowser",value:function(){if(zt())return{supported:!0,mobile:!0,name:"React Native",version:null,supportsScreenShare:!1,supportsSfu:!0,supportsVideoProcessing:!1};var i=class{static getParser(r,s=!1){if(typeof r!="string")throw new Error("UserAgent should be a string");return new XE(r,s)}static parse(r){return new XE(r).getResult()}static get BROWSER_MAP(){return KE}static get ENGINE_MAP(){return Ki}static get OS_MAP(){return En}static get PLATFORMS_MAP(){return At}}.getParser(ei());return{supported:!!ZE(),mobile:i.getPlatformType()==="mobile",name:i.getBrowserName(),version:i.getBrowserVersion(),supportsScreenShare:!!dF(),supportsSfu:!!Uf(),supportsVideoProcessing:pF()}}},{key:"version",value:function(){return"0.21.0"}},{key:"createCallObject",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return i.layout="none",new n(null,i)}},{key:"wrap",value:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Ve(),!i||!i.contentWindow||typeof i.src!="string")throw new Error("DailyIframe::Wrap needs an iframe-like first argument");return r.layout||(r.customLayout?r.layout="custom-v1":r.layout="browser"),new n(i,r)}},{key:"createFrame",value:function(i,r){var s,o;Ve(),i&&r?(s=i,o=r):i&&i.append?(s=i,o={}):(s=document.body,o=i||{});var a=o.iframeStyle;a||(a=s===document.body?{position:"fixed",border:"1px solid black",backgroundColor:"white",width:"375px",height:"450px",right:"1em",bottom:"1em"}:{border:0,width:"100%",height:"100%"});var l=document.createElement("iframe");window.navigator&&window.navigator.userAgent.match(/Chrome\/61\./)?l.allow="microphone, camera":l.allow="microphone; camera; autoplay; display-capture",l.style.visibility="hidden",s.appendChild(l),l.style.visibility=null,Object.keys(a).forEach(function(c){return l.style[c]=a[c]}),o.layout||(o.customLayout?o.layout="custom-v1":o.layout="browser");try{return new n(l,o)}catch(c){throw s.removeChild(l),c}}},{key:"createTransparentFrame",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ve();var r=document.createElement("iframe");return r.allow="microphone; camera; autoplay",r.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      pointer-events: none;
    `,document.body.appendChild(r),i.layout||(i.layout="custom-v1"),n.wrap(r,i)}}]),zi(n,[{key:"destroy",value:function(){var i=je(Z.mark(function r(){var s,o,a;return Z.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(l.prev=0,![pn,Ff].includes(this._meetingState)){l.next=4;break}return l.next=4,this.leave();case 4:l.next=8;break;case 6:l.prev=6,l.t0=l.catch(0);case 8:(s=this._iframe)&&(o=s.parentElement)&&o.removeChild(s),this._messageChannel.removeListener(this.handleMessageFromCallMachine),zt()&&((a=this.nativeUtils()).removeAudioFocusChangeListener(this.handleNativeAudioFocusChange),a.removeAppActiveStateChangeListener(this.handleNativeAppActiveStateChange)),this.resetMeetingDependentVars();case 13:case"end":return l.stop()}},r,this,[[0,6]])}));return function(){return i.apply(this,arguments)}}()},{key:"loadCss",value:function(i){var r=i.bodyClass,s=i.cssFile,o=i.cssText;return Ve(),this.sendMessageToCallMachine({action:"load-css",cssFile:this.absoluteUrl(s),bodyClass:r,cssText:o}),this}},{key:"iframe",value:function(){return Ve(),this._iframe}},{key:"meetingState",value:function(){return this._meetingState}},{key:"accessState",value:function(){if(!this._callObjectMode)throw new Error("accessState() currently only supported in call object mode");return this._accessState}},{key:"participants",value:function(){return this._participants}},{key:"waitingParticipants",value:function(){if(!this._callObjectMode)throw new Error("waitingParticipants() currently only supported in call object mode");return this._waitingParticipants}},{key:"validateParticipantProperties",value:function(i,r){for(var s in r){if(!iu[s])throw new Error("unrecognized updateParticipant property ".concat(s));if(iu[s].validate&&!iu[s].validate(r[s],this,this._participants[i]))throw new Error(iu[s].help)}}},{key:"updateParticipant",value:function(i,r){return this._participants.local&&this._participants.local.session_id===i&&(i="local"),i&&r&&this._participants[i]&&(this.validateParticipantProperties(i,r),this.sendMessageToCallMachine({action:"update-participant",id:i,properties:r})),this}},{key:"updateParticipants",value:function(i){var r=this._participants.local&&this._participants.local.session_id;for(var s in i)s===r&&(s="local"),s&&i[s]&&(this._participants[s]||s==="*")?this.validateParticipantProperties(s,i[s]):(console.warn("unrecognized participant in updateParticipants: ".concat(s)),delete i[s]);return this.sendMessageToCallMachine({action:"update-participants",participants:i}),this}},{key:"updateWaitingParticipant",value:function(){var i=je(Z.mark(function r(){var s,o,a=this,l=arguments;return Z.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(s=l.length>0&&l[0]!==void 0?l[0]:"",o=l.length>1&&l[1]!==void 0?l[1]:{},this._callObjectMode){c.next=4;break}throw new Error("updateWaitingParticipant() currently only supported in call object mode");case 4:if(this._meetingState===pn){c.next=6;break}throw new Error("updateWaitingParticipant() only supported for joined meetings");case 6:if(typeof s=="string"&&qn(o)==="object"){c.next=8;break}throw new Error("updateWaitingParticipant() must take an id string and a updates object");case 8:return c.abrupt("return",new Promise(function(u,h){a.sendMessageToCallMachine({action:"daily-method-update-waiting-participant",id:s,updates:o},function(d){d.error&&h(d.error),d.id||h(new Error("unknown error in updateWaitingParticipant()")),u({id:d.id})})}));case 9:case"end":return c.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"updateWaitingParticipants",value:function(){var i=je(Z.mark(function r(){var s,o=this,a=arguments;return Z.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(s=a.length>0&&a[0]!==void 0?a[0]:{},this._callObjectMode){l.next=3;break}throw new Error("updateWaitingParticipants() currently only supported in call object mode");case 3:if(this._meetingState===pn){l.next=5;break}throw new Error("updateWaitingParticipants() only supported for joined meetings");case 5:if(qn(s)==="object"){l.next=7;break}throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");case 7:return l.abrupt("return",new Promise(function(c,u){o.sendMessageToCallMachine({action:"daily-method-update-waiting-participants",updatesById:s},function(h){h.error&&u(h.error),h.ids||u(new Error("unknown error in updateWaitingParticipants()")),c({ids:h.ids})})}));case 8:case"end":return l.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"requestAccess",value:function(){var i=je(Z.mark(function r(){var s,o,a,l,c,u=this,h=arguments;return Z.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(s=h.length>0&&h[0]!==void 0?h[0]:{},o=s.access,a=o===void 0?{level:"full"}:o,l=s.name,c=l===void 0?"":l,this._callObjectMode){d.next=3;break}throw new Error("requestAccess() currently only supported in call object mode");case 3:if(this._meetingState===pn){d.next=5;break}throw new Error("requestAccess() only supported for joined meetings");case 5:return d.abrupt("return",new Promise(function(f,p){u.sendMessageToCallMachine({action:"daily-method-request-access",access:a,name:c},function(g){g.error&&p(g.error),g.access||p(new Error("unknown error in requestAccess()")),f({access:g.access,granted:g.granted})})}));case 6:case"end":return d.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"localAudio",value:function(){return this._participants.local?this._participants.local.audio:null}},{key:"localVideo",value:function(){return this._participants.local?this._participants.local.video:null}},{key:"setLocalAudio",value:function(i){return this.sendMessageToCallMachine({action:"local-audio",state:i}),this}},{key:"setLocalVideo",value:function(i){return this.sendMessageToCallMachine({action:"local-video",state:i}),this}},{key:"getReceiveSettings",value:function(){var i=je(Z.mark(function r(s){var o,a,l,c=this,u=arguments;return Z.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(o=u.length>1&&u[1]!==void 0?u[1]:{},a=o.showInheritedValues,l=a!==void 0&&a,this._callObjectMode){h.next=3;break}throw new Error("getReceiveSettings() only supported in call object mode");case 3:h.t0=qn(s),h.next=h.t0==="string"?6:h.t0==="undefined"?7:8;break;case 6:return h.abrupt("return",new Promise(function(d){c.sendMessageToCallMachine({action:"get-single-participant-receive-settings",id:s,showInheritedValues:l},function(f){d(f.receiveSettings)})}));case 7:return h.abrupt("return",this._receiveSettings);case 8:throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments');case 9:case"end":return h.stop()}},r,this)}));return function(r){return i.apply(this,arguments)}}()},{key:"updateReceiveSettings",value:function(){var i=je(Z.mark(function r(s){var o=this;return Z.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(this._callObjectMode){a.next=2;break}throw new Error("updateReceiveSettings() only supported in call object mode");case 2:if(YI(s,{allowAllParticipantsKey:!0})){a.next=4;break}throw new Error($I({allowAllParticipantsKey:!0}));case 4:if(this._meetingState===pn){a.next=6;break}throw new Error("updateReceiveSettings() is only allowed when joined. To specify receive settings earlier, use the receiveSettings config property.");case 6:return a.abrupt("return",new Promise(function(l){o.sendMessageToCallMachine({action:"update-receive-settings",receiveSettings:s},function(c){l({receiveSettings:c.receiveSettings})})}));case 7:case"end":return a.stop()}},r,this)}));return function(r){return i.apply(this,arguments)}}()},{key:"getInputSettings",value:function(){return this._inputSettings}},{key:"updateInputSettings",value:function(){var i=je(Z.mark(function r(s){var o=this;return Z.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(JI(s)){a.next=2;break}throw new Error(ZI());case 2:return a.abrupt("return",new Promise(function(l){o.sendMessageToCallMachine({action:"update-input-settings",inputSettings:s},function(c){l({inputSettings:c.inputSettings})})}));case 3:case"end":return a.stop()}},r)}));return function(r){return i.apply(this,arguments)}}()},{key:"setBandwidth",value:function(i){var r=i.kbs,s=i.trackConstraints;return Ve(),this.sendMessageToCallMachine({action:"set-bandwidth",kbs:r,trackConstraints:s}),this}},{key:"getDailyLang",value:function(){var i=this;return Ve(),new Promise(function(){var r=je(Z.mark(function s(o){var a;return Z.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:a=function(c){delete c.action,delete c.callbackStamp,o(c)},i.sendMessageToCallMachine({action:"get-daily-lang"},a);case 2:case"end":return l.stop()}},s)}));return function(s){return r.apply(this,arguments)}}())}},{key:"setDailyLang",value:function(i){return Ve(),this.sendMessageToCallMachine({action:"set-daily-lang",lang:i}),this}},{key:"getMeetingSession",value:function(){var i=je(Z.mark(function r(){var s=this;return Z.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(this._meetingState===pn){o.next=2;break}throw new Error("getMeetingSession() is only allowed when joined");case 2:return o.abrupt("return",new Promise(function(){var a=je(Z.mark(function l(c){var u;return Z.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:u=function(d){delete d.action,delete d.callbackStamp,delete d.callFrameId,c(d)},s.sendMessageToCallMachine({action:"get-meeting-session"},u);case 2:case"end":return h.stop()}},l)}));return function(l){return a.apply(this,arguments)}}()));case 3:case"end":return o.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"setUserName",value:function(i,r){var s=this;return this.properties.userName=i,new Promise(function(){var o=je(Z.mark(function a(l){var c;return Z.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:c=function(h){delete h.action,delete h.callbackStamp,l(h)},s.sendMessageToCallMachine({action:"set-user-name",name:i!=null?i:"",thisMeetingOnly:zt()||!!r&&!!r.thisMeetingOnly},c);case 2:case"end":return u.stop()}},a)}));return function(a){return o.apply(this,arguments)}}())}},{key:"startCamera",value:function(){var i=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(function(){var s=je(Z.mark(function o(a,l){var c;return Z.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(c=function(h){delete h.action,delete h.callbackStamp,a(h)},!i.needsLoad()){u.next=10;break}return u.prev=2,u.next=5,i.load(r);case 5:u.next=10;break;case 7:u.prev=7,u.t0=u.catch(2),l(u.t0);case 10:i.sendMessageToCallMachine({action:"start-camera",properties:Aa(i.properties),preloadCache:Aa(i._preloadCache)},c);case 11:case"end":return u.stop()}},o,null,[[2,7]])}));return function(o,a){return s.apply(this,arguments)}}())}},{key:"cycleCamera",value:function(){var i=this;return new Promise(function(r,s){i.sendMessageToCallMachine({action:"cycle-camera"},function(o){r({device:o.device})})})}},{key:"cycleMic",value:function(){var i=this;return Ve(),new Promise(function(r,s){i.sendMessageToCallMachine({action:"cycle-mic"},function(o){r({device:o.device})})})}},{key:"getCameraFacingMode",value:function(){var i=this;return ip(),new Promise(function(r,s){i.sendMessageToCallMachine({action:"get-camera-facing-mode"},function(o){r(o.facingMode)})})}},{key:"setInputDevices",value:function(i){var r=i.audioDeviceId,s=i.videoDeviceId,o=i.audioSource,a=i.videoSource;return console.warn("setInputDevices() is deprecated: instead use setInputDevicesAsync(), which returns a Promise"),this.setInputDevicesAsync({audioDeviceId:r,videoDeviceId:s,audioSource:o,videoSource:a}),this}},{key:"setInputDevicesAsync",value:function(){var i=je(Z.mark(function r(s){var o,a,l,c,u=this;return Z.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(o=s.audioDeviceId,a=s.videoDeviceId,l=s.audioSource,c=s.videoSource,Ve(),l!==void 0&&(o=l),c!==void 0&&(a=c),o&&(this._preloadCache.audioDeviceId=o),a&&(this._preloadCache.videoDeviceId=a),!this._callObjectMode||!this.needsLoad()){h.next=8;break}return h.abrupt("return",{camera:{deviceId:this._preloadCache.videoDeviceId},mic:{deviceId:this._preloadCache.audioDeviceId},speaker:{deviceId:this._preloadCache.outputDeviceId}});case 8:return o instanceof MediaStreamTrack&&(o=zc),a instanceof MediaStreamTrack&&(a=zc),h.abrupt("return",new Promise(function(d){u.sendMessageToCallMachine({action:"set-input-devices",audioDeviceId:o,videoDeviceId:a},function(f){delete f.action,delete f.callbackStamp,f.returnPreloadCache?d({camera:{deviceId:u._preloadCache.videoDeviceId},mic:{deviceId:u._preloadCache.audioDeviceId},speaker:{deviceId:u._preloadCache.outputDeviceId}}):d(f)})}));case 11:case"end":return h.stop()}},r,this)}));return function(r){return i.apply(this,arguments)}}()},{key:"setOutputDevice",value:function(i){var r=i.outputDeviceId;return Ve(),r&&(this._preloadCache.outputDeviceId=r),this._callObjectMode&&this._meetingState!==pn?this:(this.sendMessageToCallMachine({action:"set-output-device",outputDeviceId:r}),this)}},{key:"getInputDevices",value:function(){var i=je(Z.mark(function r(){var s=this;return Z.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(Ve(),!this._callObjectMode||!this.needsLoad()){o.next=3;break}return o.abrupt("return",{camera:{deviceId:this._preloadCache.videoDeviceId},mic:{deviceId:this._preloadCache.audioDeviceId},speaker:{deviceId:this._preloadCache.outputDeviceId}});case 3:return o.abrupt("return",new Promise(function(a,l){s.sendMessageToCallMachine({action:"get-input-devices"},function(c){delete c.action,delete c.callbackStamp,c.returnPreloadCache?a({camera:{deviceId:s._preloadCache.videoDeviceId},mic:{deviceId:s._preloadCache.audioDeviceId},speaker:{deviceId:s._preloadCache.outputDeviceId}}):a(c)})}));case 4:case"end":return o.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"nativeInCallAudioMode",value:function(){return ip(),this._nativeInCallAudioMode}},{key:"setNativeInCallAudioMode",value:function(i){if(ip(),[XI,uU].includes(i)){if(i!==this._nativeInCallAudioMode)return this._nativeInCallAudioMode=i,!this.disableReactNativeAutoDeviceManagement("audio")&&this.isMeetingPendingOrOngoing(this._meetingState,this._isPreparingToJoin)&&this.nativeUtils().setAudioMode(this._nativeInCallAudioMode),this}else console.error("invalid in-call audio mode specified: ",i)}},{key:"preAuth",value:function(){var i=je(Z.mark(function r(){var s,o,a,l=this,c=arguments;return Z.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(s=c.length>0&&c[0]!==void 0?c[0]:{},this._callObjectMode){u.next=3;break}throw new Error("preAuth() currently only supported in call object mode");case 3:if(![Gc,pn].includes(this._meetingState)){u.next=5;break}throw new Error("preAuth() not supported after joining a meeting");case 5:if(!this.needsLoad()){u.next=8;break}return u.next=8,this.load(s);case 8:if(s.url){u.next=10;break}throw new Error("preAuth() requires at least a url to be provided");case 10:if(o=Ea(s.url),a=Ea(this.properties.url||this.properties.baseUrl),o===a){u.next=14;break}throw new Error("url in preAuth() has a different bundle url than the one loaded (".concat(a," -> ").concat(o,")"));case 14:return this.validateProperties(s),this.properties=Kt(Kt({},this.properties),s),u.abrupt("return",new Promise(function(h,d){l.sendMessageToCallMachine({action:"daily-method-preauth",properties:Aa(l.properties)},function(f){return f.error?d(f.error):f.access?(l._didPreAuth=!0,void h({access:f.access})):d(new Error("unknown error in preAuth()"))})}));case 17:case"end":return u.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"load",value:function(){var i=je(Z.mark(function r(s){var o=this;return Z.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(this.needsLoad()){a.next=2;break}return a.abrupt("return");case 2:if(s&&(this.validateProperties(s),this.properties=Kt(Kt({},this.properties),s)),this._callObjectMode||this.properties.url){a.next=5;break}throw new Error("can't load iframe meeting because url property isn't set");case 5:this.updateMeetingState(Ff);try{this.emit("loading",{action:"loading"})}catch(l){console.log("could not emit 'loading'",l)}if(!this._callObjectMode){a.next=11;break}return a.abrupt("return",new Promise(function(l,c){o._callObjectLoader.cancel(),o._callObjectLoader.load(o.properties.url||o.properties.baseUrl,o._callFrameId,function(u){o.updateMeetingState("loaded"),u&&o.emit("loaded",{action:"loaded"}),l()},function(u,h){o.emit("load-attempt-failed",{action:"load-attempt-failed",errorMsg:u}),h||(o.updateMeetingState(xr),o.resetMeetingDependentVars(),o.emit("error",{action:"error",errorMsg:u}),c(u))})}));case 11:return this._iframe.src=this.assembleMeetingUrl(),a.abrupt("return",new Promise(function(l,c){o._loadedCallback=function(u){if(o._meetingState!==xr){for(var h in o.updateMeetingState("loaded"),(o.properties.cssFile||o.properties.cssText)&&o.loadCss(o.properties),o._inputEventsOn)o.sendMessageToCallMachine({action:"register-input-handler",on:h});l()}else c(u)}}));case 13:case"end":return a.stop()}},r,this)}));return function(r){return i.apply(this,arguments)}}()},{key:"join",value:function(){var i=je(Z.mark(function r(){var s,o,a,l,c=this,u=arguments;return Z.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(s=u.length>0&&u[0]!==void 0?u[0]:{},o=!1,!this.needsLoad()){h.next=15;break}return this.updateIsPreparingToJoin(!0),h.prev=4,h.next=7,this.load(s);case 7:h.next=13;break;case 9:return h.prev=9,h.t0=h.catch(4),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject(h.t0));case 13:h.next=42;break;case 15:if(o=!(!this.properties.cssFile&&!this.properties.cssText),!this._didPreAuth){h.next=25;break}if(!s.url||s.url===this.properties.url){h.next=21;break}return console.error("url in join() is different than the one used in preAuth()"),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject());case 21:if(!s.token||s.token===this.properties.token){h.next=25;break}return console.error("token in join() is different than the one used in preAuth()"),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject());case 25:if(!s.url){h.next=40;break}if(!this._callObjectMode){h.next=36;break}if(a=Ea(s.url),l=Ea(this.properties.url||this.properties.baseUrl),a===l){h.next=33;break}return console.error("url in join() has a different bundle url than the one loaded (".concat(l," -> ").concat(a,")")),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject());case 33:this.properties.url=s.url,h.next=40;break;case 36:if(!s.url||s.url===this.properties.url){h.next=40;break}return console.error("url in join() is different than the one used in load() (".concat(this.properties.url," -> ").concat(s.url,")")),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject());case 40:this.validateProperties(s),this.properties=Kt(Kt({},this.properties),s);case 42:if(s.showLocalVideo!==void 0&&(this._callObjectMode?console.error("showLocalVideo is not available in callObject mode"):this._showLocalVideo=!!s.showLocalVideo),s.showParticipantsBar!==void 0&&(this._callObjectMode?console.error("showParticipantsBar is not available in callObject mode"):this._showParticipantsBar=!!s.showParticipantsBar),this._meetingState!==pn&&this._meetingState!==Gc){h.next=48;break}return console.warn("already joined meeting, call leave() before joining again"),this.updateIsPreparingToJoin(!1),h.abrupt("return");case 48:this.updateMeetingState(Gc,!1);try{this.emit("joining-meeting",{action:"joining-meeting"})}catch(d){console.log("could not emit 'joining-meeting'",d)}return this.sendMessageToCallMachine({action:"join-meeting",properties:Aa(this.properties),preloadCache:Aa(this._preloadCache)}),h.abrupt("return",new Promise(function(d,f){c._joinedCallback=function(p,g){if(c._meetingState!==xr){if(c.updateMeetingState(pn),p)for(var m in p)c._callObjectMode&&(WI(p[m]),GI(p[m]),zI(p[m],c._participants[m])),c._participants[m]=Kt({},p[m]),c.toggleParticipantAudioBasedOnNativeAudioFocus();o&&c.loadCss(c.properties),d(p)}else f(g)}}));case 52:case"end":return h.stop()}},r,this,[[4,9]])}));return function(){return i.apply(this,arguments)}}()},{key:"leave",value:function(){var i=je(Z.mark(function r(){var s=this;return Z.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",new Promise(function(a,l){if(s._callObjectLoader&&!s._callObjectLoader.loaded){s._callObjectLoader.cancel(),s.updateMeetingState(Fr),s.resetMeetingDependentVars();try{s.emit(Fr,{action:Fr})}catch(c){console.log("could not emit 'left-meeting'",c)}a()}else s._meetingState===Fr||s._meetingState===xr?a():s.sendMessageToCallMachine({action:"leave-meeting"},function(){a()})}));case 1:case"end":return o.stop()}},r)}));return function(){return i.apply(this,arguments)}}()},{key:"startScreenShare",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ve(),i.mediaStream&&(this._preloadCache.screenMediaStream=i.mediaStream,i.mediaStream=zc),this.sendMessageToCallMachine({action:"local-screen-start",captureOptions:i})}},{key:"stopScreenShare",value:function(){Ve(),this.sendMessageToCallMachine({action:"local-screen-stop"})}},{key:"startRecording",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ve(),this.sendMessageToCallMachine(Kt({action:"local-recording-start"},i))}},{key:"updateRecording",value:function(i){var r=i.layout,s=r===void 0?{preset:"default"}:r;this.sendMessageToCallMachine({action:"daily-method-update-recording",layout:s})}},{key:"stopRecording",value:function(){Ve(),this.sendMessageToCallMachine({action:"local-recording-stop"})}},{key:"startLiveStreaming",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.sendMessageToCallMachine(Kt({action:"daily-method-start-live-streaming"},i))}},{key:"updateLiveStreaming",value:function(i){var r=i.layout,s=r===void 0?{preset:"default"}:r;this.sendMessageToCallMachine({action:"daily-method-update-live-streaming",layout:s})}},{key:"stopLiveStreaming",value:function(){this.sendMessageToCallMachine({action:"daily-method-stop-live-streaming"})}},{key:"startTranscription",value:function(){this.sendMessageToCallMachine({action:"daily-method-start-transcription"})}},{key:"stopTranscription",value:function(){this.sendMessageToCallMachine({action:"daily-method-stop-transcription"})}},{key:"getNetworkStats",value:function(){var i=this;return this._meetingState!==pn?{stats:{latest:{}}}:new Promise(function(r,s){i.sendMessageToCallMachine({action:"get-calc-stats"},function(o){r(Kt({stats:o.stats},i._network))})})}},{key:"getActiveSpeaker",value:function(){return Ve(),this._activeSpeaker}},{key:"setActiveSpeakerMode",value:function(i){return Ve(),this.sendMessageToCallMachine({action:"set-active-speaker-mode",enabled:i}),this}},{key:"activeSpeakerMode",value:function(){return Ve(),this._activeSpeakerMode}},{key:"subscribeToTracksAutomatically",value:function(){return this._preloadCache.subscribeToTracksAutomatically}},{key:"setSubscribeToTracksAutomatically",value:function(i){if(this._meetingState!==pn)throw new Error("setSubscribeToTracksAutomatically() is only allowed when joined");return this._preloadCache.subscribeToTracksAutomatically=i,this.sendMessageToCallMachine({action:"daily-method-subscribe-to-tracks-automatically",enabled:i}),this}},{key:"enumerateDevices",value:function(){var i=je(Z.mark(function r(){var s,o=this;return Z.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(Ve(),!this._callObjectMode){a.next=6;break}return a.next=4,navigator.mediaDevices.enumerateDevices();case 4:return s=a.sent,a.abrupt("return",{devices:s.map(function(l){return JSON.parse(JSON.stringify(l))})});case 6:return a.abrupt("return",new Promise(function(l,c){o.sendMessageToCallMachine({action:"enumerate-devices"},function(u){l({devices:u.devices})})}));case 7:case"end":return a.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"sendAppMessage",value:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"*";if(JSON.stringify(i).length>4096)throw new Error("Message data too large. Max size is 4096");return this.sendMessageToCallMachine({action:"app-msg",data:i,to:r}),this}},{key:"addFakeParticipant",value:function(i){return Ve(),this.sendMessageToCallMachine(Kt({action:"add-fake-participant"},i)),this}},{key:"setShowNamesMode",value:function(i){return Ve(),i&&i!=="always"&&i!=="never"?(console.error('setShowNamesMode argument should be "always", "never", or false'),this):(this.sendMessageToCallMachine({action:"set-show-names",mode:i}),this)}},{key:"setShowLocalVideo",value:function(){var i=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];return Ve(),typeof i!="boolean"?(console.error("setShowLocalVideo only accepts a boolean value"),this):this._callObjectMode?(console.error("setShowLocalVideo is not available in callObject mode"),this):this._meetingState!==pn?(console.error("the meeting must be joined before calling setShowLocalVideo"),this):(this.sendMessageToCallMachine({action:"set-show-local-video",show:i}),this._showLocalVideo=i,this)}},{key:"showLocalVideo",value:function(){return Ve(),this._callObjectMode?(console.error("showLocalVideo is not available in callObject mode"),this):this._showLocalVideo}},{key:"setShowParticipantsBar",value:function(){var i=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];return Ve(),typeof i!="boolean"?(console.error("setShowParticipantsBar only accepts a boolean value"),this):this._callObjectMode?(console.error("setShowParticipantsBar is not available in callObject mode"),this):this._meetingState!==pn?(console.error("the meeting must be joined before calling setShowParticipantsBar"),this):(this.sendMessageToCallMachine({action:"set-show-participants-bar",show:i}),this._showParticipantsBar=i,this)}},{key:"showParticipantsBar",value:function(){return Ve(),this._callObjectMode?(console.error("showParticipantsBar is not available in callObject mode"),this):this._showParticipantsBar}},{key:"theme",value:function(){return this._callObjectMode?(console.error("theme is not available in callObject mode"),this):this.properties.theme}},{key:"setTheme",value:function(i){var r=this;return new Promise(function(s,o){if(r._callObjectMode)o("setTheme is not available in callObject mode");else try{r.validateProperties({theme:i}),r.properties.theme=Kt({},i),r.sendMessageToCallMachine({action:"set-theme",theme:r.properties.theme});try{r.emit("theme-updated",{action:"theme-updated",theme:r.properties.theme})}catch(a){console.log("could not emit 'theme-updated'",a)}s(r.properties.theme)}catch(a){o(a)}})}},{key:"detectAllFaces",value:function(){var i=this;return Ve(),new Promise(function(r,s){i.sendMessageToCallMachine({action:"detect-all-faces"},function(o){delete o.action,delete o.callbackStamp,r(o)})})}},{key:"requestFullscreen",value:function(){var i=je(Z.mark(function r(){return Z.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(Ve(),this._iframe&&!document.fullscreenElement){s.next=3;break}return s.abrupt("return");case 3:return s.prev=3,s.next=6,this._iframe.requestFullscreen;case 6:if(!s.sent){s.next=10;break}this._iframe.requestFullscreen(),s.next=11;break;case 10:this._iframe.webkitRequestFullscreen();case 11:s.next=16;break;case 13:s.prev=13,s.t0=s.catch(3),console.log("could not make video call fullscreen",s.t0);case 16:case"end":return s.stop()}},r,this,[[3,13]])}));return function(){return i.apply(this,arguments)}}()},{key:"exitFullscreen",value:function(){Ve(),document.fullscreenElement?document.exitFullscreen():document.webkitFullscreenElement&&document.webkitExitFullscreen()}},{key:"room",value:function(){var i=je(Z.mark(function r(){var s,o,a,l=this,c=arguments;return Z.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(s=c.length>0&&c[0]!==void 0?c[0]:{},o=s.includeRoomConfigDefaults,a=o===void 0||o,this._meetingState!==pn&&!this._didPreAuth){u.next=5;break}return u.abrupt("return",new Promise(function(h,d){l.sendMessageToCallMachine({action:"lib-room-info",includeRoomConfigDefaults:a},function(f){delete f.action,delete f.callbackStamp,h(f)})}));case 5:if(!this.properties.url){u.next=7;break}return u.abrupt("return",{roomUrlPendingJoin:this.properties.url});case 7:return u.abrupt("return",null);case 8:case"end":return u.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"geo",value:function(){var i=je(Z.mark(function r(){return Z.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",new Promise(function(){var o=je(Z.mark(function a(l,c){var u,h;return Z.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,d.next=4,fetch("https://gs.daily.co/_ks_/x-swsl/:");case 4:return u=d.sent,d.next=7,u.json();case 7:h=d.sent,l({current:h.geo}),d.next=15;break;case 11:d.prev=11,d.t0=d.catch(0),console.error("geo lookup failed",d.t0),l({current:""});case 15:case"end":return d.stop()}},a,null,[[0,11]])}));return function(a,l){return o.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r)}));return function(){return i.apply(this,arguments)}}()},{key:"setNetworkTopology",value:function(){var i=je(Z.mark(function r(s){var o=this;return Z.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return Ve(),a.abrupt("return",new Promise(function(){var l=je(Z.mark(function c(u,h){var d;return Z.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:d=function(p){p.error?h({error:p.error}):u({workerId:p.workerId})},o.sendMessageToCallMachine({action:"set-network-topology",opts:s},d);case 2:case"end":return f.stop()}},c)}));return function(c,u){return l.apply(this,arguments)}}()));case 2:case"end":return a.stop()}},r)}));return function(r){return i.apply(this,arguments)}}()},{key:"getNetworkTopology",value:function(){var i=je(Z.mark(function r(){var s=this;return Z.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",new Promise(function(){var a=je(Z.mark(function l(c,u){var h;return Z.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:h=function(f){f.error?u({error:f.error}):c({topology:f.topology})},s.sendMessageToCallMachine({action:"get-network-topology"},h);case 2:case"end":return d.stop()}},l)}));return function(l,c){return a.apply(this,arguments)}}()));case 1:case"end":return o.stop()}},r)}));return function(){return i.apply(this,arguments)}}()},{key:"setPlayNewParticipantSound",value:function(i){if(Ve(),typeof i!="number"&&i!==!0&&i!==!1)throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(i));this.sendMessageToCallMachine({action:"daily-method-set-play-ding",arg:i})}},{key:"on",value:function(i,r){return this._inputEventsOn[i]={},this.sendMessageToCallMachine({action:"register-input-handler",on:i}),xc.prototype.on.call(this,i,r)}},{key:"once",value:function(i,r){return this._inputEventsOn[i]={},this.sendMessageToCallMachine({action:"register-input-handler",on:i}),xc.prototype.once.call(this,i,r)}},{key:"off",value:function(i,r){return delete this._inputEventsOn[i],this.sendMessageToCallMachine({action:"register-input-handler",off:i}),xc.prototype.off.call(this,i,r)}},{key:"validateProperties",value:function(i){for(var r in i){if(!Vr[r])throw new Error("unrecognized property '".concat(r,"'"));if(Vr[r].validate&&!Vr[r].validate(i[r],this))throw new Error("property '".concat(r,"': ").concat(Vr[r].help))}}},{key:"assembleMeetingUrl",value:function(){var i=Kt(Kt({},this.properties),{},{emb:this._callFrameId,embHref:encodeURIComponent(window.location.href)}),r=i.url.match(/\?/)?"&":"?";return i.url+r+Object.keys(Vr).filter(function(s){return Vr[s].queryString&&i[s]!==void 0}).map(function(s){return"".concat(Vr[s].queryString,"=").concat(i[s])}).join("&")}},{key:"needsLoad",value:function(){return[QE,Ff,Fr,xr].includes(this._meetingState)}},{key:"sendMessageToCallMachine",value:function(i,r){this._messageChannel.sendMessageToCallMachine(i,r,this._iframe,this._callFrameId)}},{key:"forwardPackagedMessageToCallMachine",value:function(i){this._messageChannel.forwardPackagedMessageToCallMachine(i,this._iframe,this._callFrameId)}},{key:"addListenerForPackagedMessagesFromCallMachine",value:function(i){return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(i,this._callFrameId)}},{key:"removeListenerForPackagedMessagesFromCallMachine",value:function(i){this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(i)}},{key:"handleMessageFromCallMachine",value:function(i){switch(i.action){case"iframe-ready-for-launch-config":this.sendMessageToCallMachine(Kt({action:"iframe-launch-config"},this.properties));break;case"loaded":this._loadedCallback&&(this._loadedCallback(),this._loadedCallback=null);try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"joined-meeting":this._joinedCallback&&(this._joinedCallback(i.participants),this._joinedCallback=null);try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"participant-joined":case"participant-updated":if(this._meetingState===Fr)return;if(i.participant&&i.participant.session_id){var r=i.participant.local?"local":i.participant.session_id;this._callObjectMode&&(WI(i.participant),GI(i.participant),zI(i.participant,this._participants[r]));try{this.maybeEventTrackStopped(this._participants[r],i.participant,"audioTrack"),this.maybeEventTrackStopped(this._participants[r],i.participant,"videoTrack"),this.maybeEventTrackStopped(this._participants[r],i.participant,"screenVideoTrack"),this.maybeEventTrackStopped(this._participants[r],i.participant,"screenAudioTrack"),this.maybeEventTrackStarted(this._participants[r],i.participant,"audioTrack"),this.maybeEventTrackStarted(this._participants[r],i.participant,"videoTrack"),this.maybeEventTrackStarted(this._participants[r],i.participant,"screenVideoTrack"),this.maybeEventTrackStarted(this._participants[r],i.participant,"screenAudioTrack"),this.maybeEventTrackStoppedForCustomTracks(this._participants[r],i.participant),this.maybeEventTrackStartedForCustomTracks(this._participants[r],i.participant),this.maybeEventRecordingStopped(this._participants[r],i.participant),this.maybeEventRecordingStarted(this._participants[r],i.participant)}catch(p){console.error("track events error",p)}if(!this.compareEqualForParticipantUpdateEvent(i.participant,this._participants[r])){this._participants[r]=Kt({},i.participant),this.toggleParticipantAudioBasedOnNativeAudioFocus();try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}}}break;case"participant-left":if(i.participant&&i.participant.session_id){var s=this._participants[i.participant.session_id];s&&(this.maybeEventTrackStopped(s,null,"audioTrack"),this.maybeEventTrackStopped(s,null,"videoTrack"),this.maybeEventTrackStopped(s,null,"screenVideoTrack"),this.maybeEventTrackStopped(s,null,"screenAudioTrack"),this.maybeEventTrackStoppedForCustomTracks(s,null)),delete this._participants[i.participant.session_id];try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}}break;case"access-state-updated":var o={access:i.access};if(i.awaitingAccess&&(o.awaitingAccess=i.awaitingAccess),!Wc(this._accessState,o)){this._accessState=o;try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}}break;case"meeting-session-updated":if(i.meetingSession)try{delete i.callFrameId,this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"error":this._iframe&&!i.preserveIframe&&(this._iframe.src=""),this.updateMeetingState(xr),this.resetMeetingDependentVars(),this._loadedCallback&&(this._loadedCallback(i.errorMsg),this._loadedCallback=null),this._joinedCallback&&(this._joinedCallback(null,i.errorMsg),this._joinedCallback=null);try{i.preserveIframe;var a=JD(i,["preserveIframe"]);this.emit(i.action,a)}catch(p){console.log("could not emit",i,p)}break;case"left-meeting":this._meetingState!==xr&&this.updateMeetingState(Fr),this.resetMeetingDependentVars();try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"input-event":var l=this._participants[i.session_id];l||(l=i.session_id===this._participants.local.session_id?this._participants.local:{});try{this.emit(i.event.type,{action:i.event.type,event:i.event,participant:Kt({},l)})}catch(p){console.log("could not emit",i,p)}break;case"network-quality-change":var c=i.threshold,u=i.quality;if(c!==this._network.threshold||u!==this._network.quality){this._network.quality=u,this._network.threshold=c;try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}}break;case"active-speaker-change":var h=i.activeSpeaker;if(this._activeSpeaker.peerId!==h.peerId){this._activeSpeaker.peerId=h.peerId;try{this.emit(i.action,{action:i.action,activeSpeaker:this._activeSpeaker})}catch(p){console.log("could not emit",i,p)}}break;case"show-local-video-changed":if(this._callObjectMode)return;var d=i.show;this._showLocalVideo=d;try{this.emit(i.action,{action:i.action,show:d})}catch(p){console.log("could not emit",i,p)}break;case"active-speaker-mode-change":var f=i.enabled;if(this._activeSpeakerMode!==f){this._activeSpeakerMode=f;try{this.emit(i.action,{action:i.action,enabled:this._activeSpeakerMode})}catch(p){console.log("could not emit",i,p)}}break;case"waiting-participant-added":case"waiting-participant-updated":case"waiting-participant-removed":this._waitingParticipants=i.allWaitingParticipants;try{this.emit(i.action,{action:i.action,participant:i.participant})}catch(p){console.log("could not emit",i,p)}break;case"receive-settings-updated":if(!Wc(this._receiveSettings,i.receiveSettings)){this._receiveSettings=i.receiveSettings;try{this.emit(i.action,{action:i.action,receiveSettings:i.receiveSettings})}catch(p){console.log("could not emit",i,p)}}break;case"input-settings-updated":if(!Wc(this._inputSettings,i.inputSettings)){this._inputSettings=i.inputSettings;try{this.emit(i.action,{action:i.action,inputSettings:i.inputSettings})}catch(p){console.log("could not emit",i,p)}}break;case"recording-started":case"recording-stopped":case"recording-stats":case"recording-error":case"recording-upload-completed":case"transcription-started":case"transcription-stopped":case"transcription-error":case"started-camera":case"camera-error":case"app-message":case"local-screen-share-started":case"local-screen-share-stopped":case"network-connection":case"recording-data":case"live-streaming-started":case"live-streaming-stopped":case"live-streaming-error":case"nonfatal-error":case"lang-updated":case"media-ingest-error":try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"request-fullscreen":this.requestFullscreen();break;case"request-exit-fullscreen":this.exitFullscreen()}}},{key:"maybeEventRecordingStopped",value:function(i,r){var s="record";if(i&&!r.local&&r[s]===!1&&i[s]!==r[s])try{this.emit("recording-stopped",{action:"recording-stopped"})}catch(o){console.log("could not emit",o)}}},{key:"maybeEventRecordingStarted",value:function(i,r){var s="record";if(i&&!r.local&&r[s]===!0&&i[s]!==r[s])try{this.emit("recording-started",{action:"recording-started"})}catch(o){console.log("could not emit",o)}}},{key:"maybeEventTrackStopped",value:function(i,r,s){if(i&&(i[s]&&i[s].readyState==="ended"||i[s]&&(!r||!r[s])||i[s]&&i[s].id!==r[s].id))try{this.emit("track-stopped",{action:"track-stopped",track:i[s],participant:r})}catch(o){console.log("could not emit",o)}}},{key:"maybeEventTrackStarted",value:function(i,r,s){if(r[s]&&(!i||!i[s])||r[s]&&i[s].readyState==="ended"||r[s]&&r[s].id!==i[s].id)try{this.emit("track-started",{action:"track-started",track:r[s],participant:r})}catch(o){console.log("could not emit",o)}}},{key:"maybeEventTrackStoppedForCustomTracks",value:function(i,r){if(i)for(var s in i.tracks)np(s)||this.maybeEventTrackStopped(i.tracks[s],r?r.tracks[s]:null,"track")}},{key:"maybeEventTrackStartedForCustomTracks",value:function(i,r){if(r)for(var s in r.tracks)np(s)||this.maybeEventTrackStarted(i?i.tracks[s]:null,r.tracks[s],"track")}},{key:"compareEqualForParticipantUpdateEvent",value:function(i,r){return!!Wc(i,r)&&(!i.videoTrack||!r.videoTrack||i.videoTrack.id===r.videoTrack.id&&i.videoTrack.muted===r.videoTrack.muted&&i.videoTrack.enabled===r.videoTrack.enabled)&&(!i.audioTrack||!r.audioTrack||i.audioTrack.id===r.audioTrack.id&&i.audioTrack.muted===r.audioTrack.muted&&i.audioTrack.enabled===r.audioTrack.enabled)}},{key:"nativeUtils",value:function(){return zt()?typeof DailyNativeUtils=="undefined"?(console.warn("in React Native, DailyNativeUtils is expected to be available"),null):DailyNativeUtils:null}},{key:"updateIsPreparingToJoin",value:function(i){this.updateMeetingState(this._meetingState,i)}},{key:"updateMeetingState",value:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._isPreparingToJoin;if(i!==this._meetingState||r!==this._isPreparingToJoin){var s=this._meetingState,o=this._isPreparingToJoin;this._meetingState=i,this._isPreparingToJoin=r;var a=this.isMeetingPendingOrOngoing(s,o),l=this.isMeetingPendingOrOngoing(this._meetingState,this._isPreparingToJoin);a!==l&&(this.updateKeepDeviceAwake(l),this.updateDeviceAudioMode(l),this.updateShowAndroidOngoingMeetingNotification(l),this.updateNoOpRecordingEnsuringBackgroundContinuity(l))}}},{key:"resetMeetingDependentVars",value:function(){this._participants={},this._waitingParticipants={},this._activeSpeaker={},this._activeSpeakerMode=!1,this._didPreAuth=!1,this._accessState={access:YE},this._receiveSettings={},this._inputSettings={},this._preloadCache}},{key:"updateKeepDeviceAwake",value:function(i){zt()&&this.nativeUtils().setKeepDeviceAwake(i,this._callFrameId)}},{key:"updateDeviceAudioMode",value:function(i){if(zt()&&!this.disableReactNativeAutoDeviceManagement("audio")){var r=i?this._nativeInCallAudioMode:"idle";this.nativeUtils().setAudioMode(r)}}},{key:"updateShowAndroidOngoingMeetingNotification",value:function(i){if(zt()&&this.nativeUtils().setShowOngoingMeetingNotification){var r,s,o,a;if(this.properties.reactNativeConfig&&this.properties.reactNativeConfig.androidInCallNotification){var l=this.properties.reactNativeConfig.androidInCallNotification;r=l.title,s=l.subtitle,o=l.iconName,a=l.disableForCustomOverride}a&&(i=!1),this.nativeUtils().setShowOngoingMeetingNotification(i,r,s,o,this._callFrameId)}}},{key:"updateNoOpRecordingEnsuringBackgroundContinuity",value:function(i){zt()&&this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity&&this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(i)}},{key:"isMeetingPendingOrOngoing",value:function(i,r){return[Gc,pn].includes(i)||r}},{key:"toggleParticipantAudioBasedOnNativeAudioFocus",value:function(){if(zt()){var i=store.getState();for(var r in i.streams){var s=i.streams[r];s&&s.pendingTrack&&s.pendingTrack.kind==="audio"&&(s.pendingTrack.enabled=this._hasNativeAudioFocus)}}}},{key:"disableReactNativeAutoDeviceManagement",value:function(i){return this.properties.reactNativeConfig&&this.properties.reactNativeConfig.disableAutoDeviceManagement&&this.properties.reactNativeConfig.disableAutoDeviceManagement[i]}},{key:"absoluteUrl",value:function(i){if(i!==void 0){var r=document.createElement("a");return r.href=i,r.href}}},{key:"sayHello",value:function(){var i="hello, world.";return console.log(i),i}}]),n}();/**
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
 */const ew="firebasestorage.googleapis.com",tw="storageBucket",hU=2*60*1e3,dU=10*60*1e3;class kt extends $i{constructor(e,n){super(rp(e),`Firebase Storage: ${n} (${rp(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,kt.prototype)}_codeEquals(e){return rp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function rp(t){return"storage/"+t}function sp(){const t="An unknown error occurred, please check the error payload for server response.";return new kt("unknown",t)}function fU(t){return new kt("object-not-found","Object '"+t+"' does not exist.")}function pU(t){return new kt("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mU(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new kt("unauthenticated",t)}function gU(){return new kt("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function _U(t){return new kt("unauthorized","User does not have permission to access '"+t+"'.")}function vU(){return new kt("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function yU(){return new kt("canceled","User canceled the upload/download.")}function bU(t){return new kt("invalid-url","Invalid URL '"+t+"'.")}function EU(t){return new kt("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function IU(){return new kt("no-default-bucket","No default bucket found. Did you set the '"+tw+"' property when initializing the app?")}function wU(){return new kt("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function TU(){return new kt("no-download-url","The given file does not have any download URLs.")}function op(t){return new kt("invalid-argument",t)}function nw(){return new kt("app-deleted","The Firebase app was deleted.")}function CU(t){return new kt("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ka(t,e){return new kt("invalid-format","String does not match format '"+t+"': "+e)}function Ra(t){throw new kt("internal-error","Internal error: "+t)}/**
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
 */class jn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=jn.makeFromUrl(e,n)}catch{return new jn(e,"")}if(i.path==="")return i;throw EU(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(y){y.path_=decodeURIComponent(y.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},g=n===ew?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),T=[{regex:a,indices:l,postModify:s},{regex:f,indices:p,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let y=0;y<T.length;y++){const N=T[y],k=N.regex.exec(e);if(k){const _=k[N.indices.bucket];let w=k[N.indices.path];w||(w=""),i=new jn(_,w),N.postModify(i);break}}if(i==null)throw bU(e);return i}}class SU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function AU(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...m){c||(c=!0,e.apply(null,m))}function h(m){r=setTimeout(()=>{r=null,t(f,l())},m)}function d(){s&&clearTimeout(s)}function f(m,...v){if(c){d();return}if(m){d(),u.call(null,m,...v);return}if(l()||o){d(),u.call(null,m,...v);return}i<64&&(i*=2);let T;a===1?(a=2,T=0):T=(i+Math.random())*1e3,h(T)}let p=!1;function g(m){p||(p=!0,d(),!c&&(r!==null?(m||(a=2),clearTimeout(r),h(0)):m||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,g(!0)},n),g}function kU(t){t(!1)}/**
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
 */function RU(t){return t!==void 0}function OU(t){return typeof t=="object"&&!Array.isArray(t)}function ap(t){return typeof t=="string"||t instanceof String}function iw(t){return lp()&&t instanceof Blob}function lp(){return typeof Blob!="undefined"}function rw(t,e,n,i){if(i<e)throw op(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw op(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function ru(t,e,n){let i=e;return n==null&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function sw(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var Br;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Br||(Br={}));/**
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
 */class LU{constructor(e,n,i,r,s,o,a,l,c,u,h){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,f)=>{this.resolve_=d,this.reject_=f,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new su(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Br.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const u=s.getErrorCode()===Br.ABORT;i(!1,new su(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new su(c,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());RU(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=sp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?nw():yU();o(l)}else{const l=vU();o(l)}};this.canceled_?n(!1,new su(!1,null,!0)):this.backoffId_=AU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||r||s}}class su{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function MU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function NU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function PU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function DU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function FU(t,e,n,i,r,s){const o=sw(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return PU(l,e),MU(l,n),NU(l,s),DU(l,i),new LU(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}/**
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
 */function xU(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function UU(...t){const e=xU();if(e!==void 0){const n=new e;for(let i=0;i<t.length;i++)n.append(t[i]);return n.getBlob()}else{if(lp())return new Blob(t);throw new kt("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function jU(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function VU(t){return atob(t)}/**
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
 */const ti={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class cp{constructor(e,n){this.data=e,this.contentType=n||null}}function BU(t,e){switch(t){case ti.RAW:return new cp(ow(e));case ti.BASE64:case ti.BASE64URL:return new cp(aw(t,e));case ti.DATA_URL:return new cp(qU(e),WU(e))}throw sp()}function ow(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const s=i,o=t.charCodeAt(++n);i=65536|(s&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)==56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function HU(t){let e;try{e=decodeURIComponent(t)}catch{throw ka(ti.DATA_URL,"Malformed data URL.")}return ow(e)}function aw(t,e){switch(t){case ti.BASE64:{const r=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(r||s)throw ka(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case ti.BASE64URL:{const r=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(r||s)throw ka(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=VU(e)}catch{throw ka(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}class lw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ka(ti.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=GU(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-";base64".length):i),this.rest=e.substring(e.indexOf(",")+1)}}function qU(t){const e=new lw(t);return e.base64?aw(ti.BASE64,e.rest):HU(e.rest)}function WU(t){return new lw(t).contentType}function GU(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Qi{constructor(e,n){let i=0,r="";iw(e)?(this.data_=e,i=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(iw(this.data_)){const i=this.data_,r=jU(i,e,n);return r===null?null:new Qi(r)}else{const i=new Uint8Array(this.data_.buffer,e,n-e);return new Qi(i,!0)}}static getBlob(...e){if(lp()){const n=e.map(i=>i instanceof Qi?i.data_:i);return new Qi(UU.apply(null,n))}else{const n=e.map(o=>ap(o)?BU(ti.RAW,o).data:o.data_);let i=0;n.forEach(o=>{i+=o.byteLength});const r=new Uint8Array(i);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[s++]=o[a]}),new Qi(r,!0)}}uploadData(){return this.data_}}/**
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
 */function cw(t){let e;try{e=JSON.parse(t)}catch{return null}return OU(e)?e:null}/**
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
 */function zU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function KU(t,e){const n=e.split("/").filter(i=>i.length>0).join("/");return t.length===0?n:t+"/"+n}function uw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function XU(t,e){return e}class In{constructor(e,n,i,r){this.server=e,this.local=n||e,this.writable=!!i,this.xform=r||XU}}let ou=null;function QU(t){return!ap(t)||t.length<2?t:uw(t)}function hw(){if(ou)return ou;const t=[];t.push(new In("bucket")),t.push(new In("generation")),t.push(new In("metageneration")),t.push(new In("name","fullPath",!0));function e(s,o){return QU(o)}const n=new In("name");n.xform=e,t.push(n);function i(s,o){return o!==void 0?Number(o):o}const r=new In("size");return r.xform=i,t.push(r),t.push(new In("timeCreated")),t.push(new In("updated")),t.push(new In("md5Hash",null,!0)),t.push(new In("cacheControl",null,!0)),t.push(new In("contentDisposition",null,!0)),t.push(new In("contentEncoding",null,!0)),t.push(new In("contentLanguage",null,!0)),t.push(new In("contentType",null,!0)),t.push(new In("metadata","customMetadata",!0)),ou=t,ou}function YU(t,e){function n(){const i=t.bucket,r=t.fullPath,s=new jn(i,r);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function JU(t,e,n){const i={};i.type="file";const r=n.length;for(let s=0;s<r;s++){const o=n[s];i[o.local]=o.xform(i,e[o.server])}return YU(i,t),i}function dw(t,e,n){const i=cw(e);return i===null?null:JU(t,i,n)}function ZU(t,e,n,i){const r=cw(e);if(r===null||!ap(r.downloadTokens))return null;const s=r.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=ru(d,n,i),p=sw({alt:"media",token:c});return f+p})[0]}function $U(t,e){const n={},i=e.length;for(let r=0;r<i;r++){const s=e[r];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class up{constructor(e,n,i,r){this.url=e,this.method=n,this.handler=i,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function fw(t){if(!t)throw sp()}function ej(t,e){function n(i,r){const s=dw(t,r,e);return fw(s!==null),s}return n}function tj(t,e){function n(i,r){const s=dw(t,r,e);return fw(s!==null),ZU(s,r,t.host,t._protocol)}return n}function pw(t){function e(n,i){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=gU():r=mU():n.getStatus()===402?r=pU(t.bucket):n.getStatus()===403?r=_U(t.path):r=i,r.serverResponse=i.serverResponse,r}return e}function mw(t){const e=pw(t);function n(i,r){let s=e(i,r);return i.getStatus()===404&&(s=fU(t.path)),s.serverResponse=r.serverResponse,s}return n}function nj(t,e,n){const i=e.fullServerUrl(),r=ru(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new up(r,s,tj(t,n),o);return a.errorHandler=mw(e),a}function ij(t,e){const n=e.fullServerUrl(),i=ru(n,t.host,t._protocol),r="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new up(i,r,o,s);return a.successCodes=[200,204],a.errorHandler=mw(e),a}function rj(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function sj(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=rj(null,e)),i}function oj(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let y=0;y<2;y++)T=T+Math.random().toString().slice(2);return T}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=sj(e,i,r),u=$U(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=Qi.getBlob(h,i,d);if(f===null)throw wU();const p={name:c.fullPath},g=ru(s,t.host,t._protocol),m="POST",v=t.maxUploadRetryTime,A=new up(g,m,ej(t,n),v);return A.urlParams=p,A.headers=o,A.body=f.uploadData(),A.errorHandler=pw(e),A}class aj{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Br.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Br.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Br.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,r){if(this.sent_)throw Ra("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ra("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ra("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ra("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ra("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class lj extends aj{initXhr(){this.xhr_.responseType="text"}}function hp(){return new lj}/**
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
 */class Hr{constructor(e,n){this._service=e,n instanceof jn?this._location=n:this._location=jn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Hr(e,n)}get root(){const e=new jn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return uw(this._location.path)}get storage(){return this._service}get parent(){const e=zU(this._location.path);if(e===null)return null;const n=new jn(this._location.bucket,e);return new Hr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw CU(e)}}function cj(t,e,n){t._throwIfRoot("uploadBytes");const i=oj(t.storage,t._location,hw(),new Qi(e,!0),n);return t.storage.makeRequestWithTokens(i,hp).then(r=>({metadata:r,ref:t}))}function uj(t){t._throwIfRoot("getDownloadURL");const e=nj(t.storage,t._location,hw());return t.storage.makeRequestWithTokens(e,hp).then(n=>{if(n===null)throw TU();return n})}function hj(t){t._throwIfRoot("deleteObject");const e=ij(t.storage,t._location);return t.storage.makeRequestWithTokens(e,hp)}function dj(t,e){const n=KU(t._location.path,e),i=new jn(t._location.bucket,n);return new Hr(t.storage,i)}/**
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
 */function fj(t){return/^[A-Za-z]+:\/\//.test(t)}function pj(t,e){return new Hr(t,e)}function gw(t,e){if(t instanceof dp){const n=t;if(n._bucket==null)throw IU();const i=new Hr(n,n._bucket);return e!=null?gw(i,e):i}else return e!==void 0?dj(t,e):t}function mj(t,e){if(e&&fj(e)){if(t instanceof dp)return pj(t,e);throw op("To use ref(service, url), the first argument must be a Storage instance.")}else return gw(t,e)}function _w(t,e){const n=e==null?void 0:e[tw];return n==null?null:jn.makeFromBucketSpec(n,t)}class dp{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=ew,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hU,this._maxUploadRetryTime=dU,this._requests=new Set,r!=null?this._bucket=jn.makeFromBucketSpec(r,this._host):this._bucket=_w(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jn.makeFromBucketSpec(this._url,e):this._bucket=_w(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hr(this,e)}_makeRequest(e,n,i,r){if(this._deleted)return new SU(nw());{const s=FU(e,this._appId,i,r,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const vw="@firebase/storage",yw="0.9.0";/**
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
 */const bw="storage";function hV(t,e,n){return t=rt(t),cj(t,e,n)}function dV(t){return t=rt(t),uj(t)}function fV(t){return t=rt(t),hj(t)}function pV(t,e){return t=rt(t),mj(t,e)}function mV(t=Ka(),e){return t=rt(t),eo(t,bw).getImmediate({identifier:e})}function gj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new dp(n,i,r,e,ir)}function _j(){nr(new Ti(bw,gj,"PUBLIC").setMultipleInstances(!0)),Bn(vw,yw,""),Bn(vw,yw,"esm2017")}_j();export{Ii as $,Ln as A,j as B,Cp as C,i0 as D,Oj as E,Nj as F,Ce as G,Ae as H,ke as I,Se as J,Ij as K,Be as L,Xt as M,Dj as N,Fj as O,jj as P,Bj as Q,Rj as R,Ye as S,Vj as T,Pj as U,kj as V,wj as W,Ei as X,p0 as Y,Zj as Z,ce as _,ge as a,Jj as a0,oe as a1,Qj as a2,Ep as a3,$e as a4,Ke as a5,Lj as a6,Mj as a7,qe as a8,$j as a9,Sj as aA,bj as aB,h0 as aC,u0 as aD,Yj as aE,mV as aF,pV as aG,hV as aH,dV as aI,fV as aJ,Kj as aK,Gj as aL,yj as aa,Xs as ab,Pa as ac,Ej as ad,Cj as ae,Ji as af,Wj as ag,xj as ah,Uj as ai,zj as aj,Xj as ak,eV as al,tV as am,nV as an,iV as ao,rV as ap,sV as aq,qj as ar,oV as as,cV as at,lV as au,Hj as av,aV as aw,uV as ax,s0 as ay,Aj as az,_t as b,Re as c,U as d,we as e,ie as f,Wr as g,Qs as h,Qe as i,vt as j,ct as k,Tt as l,Dt as m,ut as n,dt as o,Ne as p,ht as q,Yt as r,We as s,bi as t,B as u,ft as v,Jt as w,D as x,Pt as y,Tj as z};

var $w=Object.defineProperty;var pp=Object.getOwnPropertySymbols;var e0=Object.prototype.hasOwnProperty,t0=Object.prototype.propertyIsEnumerable;var mp=(t,e,n)=>e in t?$w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,et=(t,e)=>{for(var n in e||(e={}))e0.call(e,n)&&mp(t,n,e[n]);if(pp)for(var n of pp(e))t0.call(e,n)&&mp(t,n,e[n]);return t};function Qt(){}function x(t,e){for(const n in e)t[n]=e[n];return t}function gp(t){return t()}function _p(){return Object.create(null)}function We(t){t.forEach(gp)}function xe(t){return typeof t=="function"}function Ve(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Ma;function Rj(t,e){return Ma||(Ma=document.createElement("a")),Ma.href=e,t===Ma.href}function n0(t){return Object.keys(t).length===0}function i0(t,...e){if(t==null)return Qt;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function r0(t,e,n){t.$$.on_destroy.push(i0(e,n))}function Ee(t,e,n,i){if(t){const r=vp(t,e,n,i);return t[0](r)}}function vp(t,e,n,i){return t[1]&&i?x(n.ctx.slice(),t[1](i(e))):n.ctx}function we(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|r[a];return s}return e.dirty|r}return e.dirty}function Te(t,e,n,i,r,s){if(r){const o=vp(e,n,i,s);t.p(o,r)}}function Ce(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ge(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ee(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function s0(t){const e={};for(const n in t)e[n]=!0;return e}function Oj(t){return t==null?"":t}function o0(t,e,n){return t.set(n),e}function re(t){return t&&xe(t.destroy)?t.destroy:Qt}let Na=!1;function a0(){Na=!0}function l0(){Na=!1}function c0(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function u0(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const u=e[c];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,u=(r>0&&e[n[r]].claim_order<=c?r+1:c0(1,r,d=>e[n[d]].claim_order,c))-1;i[l]=n[u]+1;const h=u+1;n[h]=l,r=Math.max(h,r)}const s=[],o=[];let a=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(s.push(e[l-1]);a>=l;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);s.reverse(),o.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<o.length;l++){for(;c<s.length&&o[l].claim_order>=s[c].claim_order;)c++;const u=c<s.length?s[c]:null;t.insertBefore(o[l],u)}}function Ue(t,e){if(Na){for(u0(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ie(t,e,n){Na&&!n?Ue(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function P(t){t.parentNode.removeChild(t)}function Lj(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ve(t){return document.createElement(t)}function Xs(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function bi(t){return document.createTextNode(t)}function st(){return bi(" ")}function Tt(){return bi("")}function Qe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function h0(t){return function(e){return e.preventDefault(),t.call(this,e)}}function d0(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function se(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:yt(t,i,e[i])}function fe(t){return Array.from(t.childNodes)}function f0(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function yp(t,e,n,i,r=!1){f0(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,r||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function bp(t,e,n,i){return yp(t,r=>r.nodeName===e,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const a=r.attributes[o];n[a.name]||s.push(a.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(e))}function Se(t,e,n){return bp(t,e,n,ve)}function Pa(t,e,n){return bp(t,e,n,Xs)}function Gr(t,e){return yp(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>bi(e),!0)}function ot(t){return Gr(t," ")}function Qs(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ip(t,e){t.value=e==null?"":e}function Mj(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}function Nj(t,e,n){t.classList[n?"add":"remove"](e)}function p0(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}let Da;function Fa(t){Da=t}function De(){if(!Da)throw new Error("Function called outside component initialization");return Da}function Tn(t){De().$$.on_mount.push(t)}function Pj(t){De().$$.after_update.push(t)}function Zi(t){De().$$.on_destroy.push(t)}function Dj(){const t=De();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const r=p0(e,n);i.slice().forEach(s=>{s.call(t,r)})}}}function Ot(t,e){De().$$.context.set(t,e)}function Yt(t){return De().$$.context.get(t)}function Ys(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const Js=[],le=[],xa=[],pu=[],Ep=Promise.resolve();let mu=!1;function wp(){mu||(mu=!0,Ep.then(Tp))}function m0(){return wp(),Ep}function gu(t){xa.push(t)}function Ii(t){pu.push(t)}let _u=!1;const vu=new Set;function Tp(){if(!_u){_u=!0;do{for(let t=0;t<Js.length;t+=1){const e=Js[t];Fa(e),g0(e.$$)}for(Fa(null),Js.length=0;le.length;)le.pop()();for(let t=0;t<xa.length;t+=1){const e=xa[t];vu.has(e)||(vu.add(e),e())}xa.length=0}while(Js.length);for(;pu.length;)pu.pop()();mu=!1,_u=!1,vu.clear()}}function g0(t){if(t.fragment!==null){t.update(),We(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(gu)}}const Ua=new Set;let $i;function Jt(){$i={r:0,c:[],p:$i}}function Zt(){$i.r||We($i.c),$i=$i.p}function D(t,e){t&&t.i&&(Ua.delete(t),t.i(e))}function B(t,e,n,i){if(t&&t.o){if(Ua.has(t))return;Ua.add(t),$i.c.push(()=>{Ua.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const _0=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Fj(t,e){B(t,1,1,()=>{e.delete(t.key)})}function xj(t,e,n,i,r,s,o,a,l,c,u,h){let d=t.length,f=s.length,p=d;const g={};for(;p--;)g[t[p].key]=p;const m=[],v=new Map,E=new Map;for(p=f;p--;){const k=h(r,s,p),_=n(k);let T=o.get(_);T?i&&T.p(k,e):(T=c(_,k),T.c()),v.set(_,m[p]=T),_ in g&&E.set(_,Math.abs(p-g[_]))}const I=new Set,y=new Set;function M(k){D(k,1),k.m(a,u),o.set(k.key,k),u=k.first,f--}for(;d&&f;){const k=m[f-1],_=t[d-1],T=k.key,V=_.key;k===_?(u=k.first,d--,f--):v.has(V)?!o.has(T)||I.has(T)?M(k):y.has(V)?d--:E.get(T)>E.get(V)?(y.add(T),M(k)):(I.add(V),d--):(l(_,o),d--)}for(;d--;){const k=t[d];v.has(k.key)||l(k,o)}for(;f;)M(m[f-1]);return m}function ke(t,e){const n={},i={},r={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)r[l]||(n[l]=a[l],r[l]=1);t[s]=a}else for(const l in o)r[l]=1}for(const o in i)o in n||(n[o]=void 0);return n}function ft(t){return typeof t=="object"&&t!==null?t:{}}function Ei(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function bt(t){t&&t.c()}function Dt(t,e){t&&t.l(e)}function pt(t,e,n,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:a}=t.$$;r&&r.m(e,n),i||gu(()=>{const l=s.map(gp).filter(xe);o?o.push(...l):We(l),t.$$.on_mount=[]}),a.forEach(gu)}function mt(t,e){const n=t.$$;n.fragment!==null&&(We(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function v0(t,e){t.$$.dirty[0]===-1&&(Js.push(t),wp(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ze(t,e,n,i,r,s,o,a=[-1]){const l=Da;Fa(t);const c=t.$$={fragment:null,ctx:null,props:s,update:Qt,not_equal:r,bound:_p(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:_p(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(h,d,...f)=>{const p=f.length?f[0]:d;return c.ctx&&r(c.ctx[h],c.ctx[h]=p)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](p),u&&v0(t,h)),d}):[],c.update(),u=!0,We(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){a0();const h=fe(e.target);c.fragment&&c.fragment.l(h),h.forEach(P)}else c.fragment&&c.fragment.c();e.intro&&D(t.$$.fragment),pt(t,e.target,e.anchor,e.customElement),l0(),Tp()}Fa(l)}class Ke{$destroy(){mt(this,1),this.$destroy=Qt}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!n0(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const zr=[];function Uj(t,e){return{subscribe:Cp(t,e).subscribe}}function Cp(t,e=Qt){let n;const i=new Set;function r(a){if(Ve(t,a)&&(t=a,n)){const l=!zr.length;for(const c of i)c[1](),zr.push(c,t);if(l){for(let c=0;c<zr.length;c+=2)zr[c][0](zr[c+1]);zr.length=0}}}function s(a){r(a(t))}function o(a,l=Qt){const c=[a,l];return i.add(c),i.size===1&&(n=e(r)||Qt),a(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:r,update:s,subscribe:o}}/**
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
 */const W=function(t,e){if(!t)throw Kr(e)},Kr=function(t){return new Error("Firebase Database ("+Sp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Ap=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)==55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)==56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},y0=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},yu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(n[u],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ap(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):y0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw Error();const d=s<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},b0=function(t){const e=Ap(t);return yu.encodeByteArray(e,!0)},bu=function(t){try{return yu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function I0(t){return kp(void 0,t)}function kp(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!E0(n)||(t[n]=kp(t[n],e[n]));return t}function E0(t){return t!=="__proto__"}/**
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
 */function Vt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ja(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function Rp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Iu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function w0(){return Vt().indexOf("Electron/")>=0}function Op(){const t=Vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function T0(){return Vt().indexOf("MSAppHost/")>=0}function Lp(){return Sp.NODE_ADMIN===!0}/**
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
 */const C0="FirebaseError";class er extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=C0,Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zs.prototype.create)}}class Zs{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?S0(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new er(r,a,i)}}function S0(t,e){return t.replace(A0,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const A0=/\{\$([^}]+)}/g;/**
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
 */const Mp=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=$s(bu(s[0])||""),n=$s(bu(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},k0=function(t){const e=Mp(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},R0=function(t){const e=Mp(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Jn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Xr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Va(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ba(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Ha(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Np(s)&&Np(o)){if(!Ha(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Np(t){return t!==null&&typeof t=="object"}/**
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
 */function tr(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class O0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):h<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const d=(r<<5|r>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function L0(t,e){const n=new M0(t,e);return n.subscribe.bind(n)}class M0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");N0(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Eu),r.error===void 0&&(r.error=Eu),r.complete===void 0&&(r.complete=Eu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function N0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Eu(){}function Qr(t,e){return`${t} failed: ${e} argument `}/**
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
 */const P0=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,W(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},qa=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function at(t){return t&&t._delegate?t._delegate:t}class Ti{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nr="[DEFAULT]";/**
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
 */class D0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new wi;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(x0(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:F0(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function F0(t){return t===nr?void 0:t}function x0(t){return t.instantiationMode==="EAGER"}/**
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
 */class U0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new D0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var je;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(je||(je={}));const j0={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},V0=je.INFO,B0={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},H0=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=B0[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wa{constructor(e){this.name=e,this._logLevel=V0,this._logHandler=H0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?j0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...e),this._logHandler(this,je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...e),this._logHandler(this,je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,je.INFO,...e),this._logHandler(this,je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,je.WARN,...e),this._logHandler(this,je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...e),this._logHandler(this,je.ERROR,...e)}}/**
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
 */class q0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(W0(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function W0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wu="@firebase/app",Pp="0.7.9";/**
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
 */const Tu=new Wa("@firebase/app"),G0="@firebase/app-compat",z0="@firebase/analytics-compat",K0="@firebase/analytics",X0="@firebase/app-check-compat",Q0="@firebase/app-check",Y0="@firebase/auth",J0="@firebase/auth-compat",Z0="@firebase/database",$0="@firebase/database-compat",eT="@firebase/functions",tT="@firebase/functions-compat",nT="@firebase/installations",iT="@firebase/installations-compat",rT="@firebase/messaging",sT="@firebase/messaging-compat",oT="@firebase/performance",aT="@firebase/performance-compat",lT="@firebase/remote-config",cT="@firebase/remote-config-compat",uT="@firebase/storage",hT="@firebase/storage-compat",dT="@firebase/firestore",fT="@firebase/firestore-compat",pT="firebase",mT="9.5.0";/**
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
 */const Dp="[DEFAULT]",gT={[wu]:"fire-core",[G0]:"fire-core-compat",[K0]:"fire-analytics",[z0]:"fire-analytics-compat",[Q0]:"fire-app-check",[X0]:"fire-app-check-compat",[Y0]:"fire-auth",[J0]:"fire-auth-compat",[Z0]:"fire-rtdb",[$0]:"fire-rtdb-compat",[eT]:"fire-fn",[tT]:"fire-fn-compat",[nT]:"fire-iid",[iT]:"fire-iid-compat",[rT]:"fire-fcm",[sT]:"fire-fcm-compat",[oT]:"fire-perf",[aT]:"fire-perf-compat",[lT]:"fire-rc",[cT]:"fire-rc-compat",[uT]:"fire-gcs",[hT]:"fire-gcs-compat",[dT]:"fire-fst",[fT]:"fire-fst-compat","fire-js":"fire-js",[pT]:"fire-js-all"};/**
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
 */const Ga=new Map,Cu=new Map;function _T(t,e){try{t.container.addComponent(e)}catch(n){Tu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ir(t){const e=t.name;if(Cu.has(e))return Tu.debug(`There were multiple attempts to register component ${e}.`),!1;Cu.set(e,t);for(const n of Ga.values())_T(n,t);return!0}function eo(t,e){return t.container.getProvider(e)}/**
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
 */const vT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},za=new Zs("app","Firebase",vT);/**
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
 */class yT{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ti("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw za.create("app-deleted",{appName:this._name})}}/**
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
 */const rr=mT;function jj(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Dp,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw za.create("bad-app-name",{appName:String(i)});const r=Ga.get(i);if(r){if(Ha(t,r.options)&&Ha(n,r.config))return r;throw za.create("duplicate-app",{appName:i})}const s=new U0(i);for(const a of Cu.values())s.addComponent(a);const o=new yT(t,n,s);return Ga.set(i,o),o}function Ka(t=Dp){const e=Ga.get(t);if(!e)throw za.create("no-app",{appName:t});return e}function Bn(t,e,n){var i;let r=(i=gT[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tu.warn(a.join(" "));return}ir(new Ti(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */function bT(t){ir(new Ti("platform-logger",e=>new q0(e),"PRIVATE")),Bn(wu,Pp,t),Bn(wu,Pp,"esm2017"),Bn("fire-js","")}bT("");var IT="firebase",ET="9.5.0";/**
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
 */Bn(IT,ET,"app");/*! *****************************************************************************
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
***************************************************************************** */var Su=function(t,e){return Su=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])},Su(t,e)};function mn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Su(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var lt=function(){return lt=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},lt.apply(this,arguments)};function Au(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function Mn(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function wT(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var i=n.call(t),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function TT(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))}function Fp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CT=Fp,xp=new Zs("auth","Firebase",Fp());/**
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
 */const Up=new Wa("@firebase/auth");function Xa(t,...e){Up.logLevel<=je.ERROR&&Up.error(`Auth (${rr}): ${t}`,...e)}/**
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
 */function ni(t,...e){throw ku(t,...e)}function Nn(t,...e){return ku(t,...e)}function ST(t,e,n){const i=Object.assign(Object.assign({},CT()),{[e]:n});return new Zs("auth","Firebase",i).create(e,{appName:t.name})}function ku(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return xp.create(t,...e)}function $(t,e,...n){if(!t)throw ku(e,...n)}function ii(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xa(e),new Error(e)}function ri(t,e){t||ii(e)}/**
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
 */function AT(t,e){const n=eo(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Ha(s,e!=null?e:{}))return r;ni(r,"already-initialized")}return n.initialize({options:e})}function kT(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(si);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function RT(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vp()||Rp()||"connection"in navigator)?navigator.onLine:!0}function OT(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class to{constructor(e,n){this.shortDelay=e,this.longDelay=n,ri(n>e,"Short delay should be less than long delay!"),this.isMobile=ja()||Iu()}get(){return RT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */const LT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const MT=new to(3e4,6e4);function sr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ci(t,e,n,i,r={}){return Hp(t,r,()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=tr(Object.assign({key:t.config.apiKey},o)).slice(1),l=new(Lu.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&l.set("X-Firebase-Locale",t.languageCode),Lu.fetch()(qp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Hp(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},LT),e);try{const r=new NT(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ya(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ya(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ya(t,"email-already-in-use",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ST(t,u,c);ni(t,u)}}catch(r){if(r instanceof er)throw r;ni(t,"network-request-failed")}}async function Qa(t,e,n,i,r={}){const s=await Ci(t,e,n,i,r);return"mfaPendingCredential"in s&&ni(t,"multi-factor-auth-required",{_serverResponse:s}),s}function qp(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Ou(t.config,r):`${t.config.apiScheme}://${r}`}class NT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Nn(this.auth,"timeout")),MT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ya(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Nn(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function PT(t,e){return Ci(t,"POST","/v1/accounts:delete",e)}async function DT(t,e){return Ci(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function no(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FT(t,e=!1){const n=at(t),i=await n.getIdToken(e),r=Nu(i);$(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:no(Mu(r.auth_time)),issuedAtTime:no(Mu(r.iat)),expirationTime:no(Mu(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mu(t){return Number(t)*1e3}function Nu(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Xa("JWT malformed, contained fewer than 3 sections"),null;try{const r=bu(n);return r?JSON.parse(r):(Xa("Failed to decode base64 JWT payload"),null)}catch(r){return Xa("Caught error parsing JWT payload as JSON",r),null}}function xT(t){const e=Nu(t);return $(e,"internal-error"),$(typeof e.exp!="undefined","internal-error"),$(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function io(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof er&&UT(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function UT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class jT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function Ja(t){var e;const n=t.auth,i=await t.getIdToken(),r=await io(t,DT(n,{idToken:i}));$(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?HT(s.providerUserInfo):[],a=BT(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Wp(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function VT(t){const e=at(t);await Ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BT(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function HT(t){return t.map(e=>{var{providerId:n}=e,i=Au(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function qT(t,e){const n=await Hp(t,{},()=>{const i=tr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=qp(t,r,"/v1/token",`key=${s}`);return Lu.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken!="undefined","internal-error"),$(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):xT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await qT(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new ro;return i&&($(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&($(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return ii("not implemented")}}/**
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
 */function Si(t,e){$(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class or{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=Au(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new jT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new Wp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await io(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FT(this,e)}reload(){return VT(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new or(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ja(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await io(this,PT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:y,isAnonymous:M,providerData:k,stsTokenManager:_}=n;$(I&&_,e,"internal-error");const T=ro.fromJSON(this.name,_);$(typeof I=="string",e,"internal-error"),Si(h,e.name),Si(d,e.name),$(typeof y=="boolean",e,"internal-error"),$(typeof M=="boolean",e,"internal-error"),Si(f,e.name),Si(p,e.name),Si(g,e.name),Si(m,e.name),Si(v,e.name),Si(E,e.name);const V=new or({uid:I,auth:e,email:d,emailVerified:y,displayName:h,isAnonymous:M,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:T,createdAt:v,lastLoginAt:E});return k&&Array.isArray(k)&&(V.providerData=k.map(b=>Object.assign({},b))),m&&(V._redirectEventId=m),V}static async _fromIdTokenResponse(e,n,i=!1){const r=new ro;r.updateFromServerResponse(n);const s=new or({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ja(s),s}}/**
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
 */function Za(t,e,n){return`firebase:${t}:${e}:${n}`}class Yr{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Za(this.userKey,r.apiKey,s),this.fullPersistenceKey=Za("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?or._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Yr(si(zp),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||si(zp);const o=Za(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=or._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Yr(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Yr(s,e,i))}}/**
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
 */function Kp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zp(e))return"Blackberry";if($p(e))return"Webos";if(Pu(e))return"Safari";if((e.includes("chrome/")||Qp(e))&&!e.includes("edge/"))return"Chrome";if(Jp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Xp(t=Vt()){return/firefox\//i.test(t)}function Pu(t=Vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qp(t=Vt()){return/crios\//i.test(t)}function Yp(t=Vt()){return/iemobile/i.test(t)}function Jp(t=Vt()){return/android/i.test(t)}function Zp(t=Vt()){return/blackberry/i.test(t)}function $p(t=Vt()){return/webos/i.test(t)}function $a(t=Vt()){return/iphone|ipad|ipod/i.test(t)}function WT(t=Vt()){var e;return $a(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function GT(){return Op()&&document.documentMode===10}function em(t=Vt()){return $a(t)||Jp(t)||$p(t)||Zp(t)||/windows phone/i.test(t)||Yp(t)}function zT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function tm(t,e=[]){let n;switch(t){case"Browser":n=Kp(Vt());break;case"Worker":n=`${Kp(Vt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rr}/${i}`}/**
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
 */class KT{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nm(this),this.idTokenSubscription=new nm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=si(n)),this._initializationPromise=this.queue(async()=>{var i,r;this._deleted||(this.persistenceManager=await Yr.create(this,e),!this._deleted&&(((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?($(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ja(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?at(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(si(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zs("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&si(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Yr.create(this,[si(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function so(t){return at(t)}class nm{constructor(e){this.auth=e,this.observer=null,this.addObserver=L0(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */async function Jr(t,e){return Qa(t,"POST","/v1/accounts:signInWithIdp",sr(t,e))}/**
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
 */const XT="http://localhost";class ar extends Du{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ni("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=Au(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new ar(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jr(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Jr(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jr(e,n)}buildRequest(){const e={requestUri:XT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=tr(n)}return e}}/**
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
 */async function QT(t,e){return Ci(t,"POST","/v1/accounts:sendVerificationCode",sr(t,e))}async function YT(t,e){return Qa(t,"POST","/v1/accounts:signInWithPhoneNumber",sr(t,e))}async function JT(t,e){const n=await Qa(t,"POST","/v1/accounts:signInWithPhoneNumber",sr(t,e));if(n.temporaryProof)throw Ya(t,"account-exists-with-different-credential",n);return n}const ZT={USER_NOT_FOUND:"user-not-found"};async function $T(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Qa(t,"POST","/v1/accounts:signInWithPhoneNumber",sr(t,n),ZT)}/**
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
 */class oo extends Du{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new oo({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new oo({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return YT(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return JT(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return $T(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:i,verificationCode:r}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:i,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!n&&!r&&!s?null:new oo({verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s})}}/**
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
 */class Ai extends ao{constructor(){super("facebook.com")}static credential(e){return ar._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ai.credential(e.oauthAccessToken)}catch{return null}}}Ai.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ai.PROVIDER_ID="facebook.com";/**
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
 */class ki extends ao{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return ar._fromParams({providerId:ki.PROVIDER_ID,signInMethod:ki.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ki.credentialFromTaggedObject(e)}static credentialFromError(e){return ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return ki.credential(n,i)}catch{return null}}}ki.GOOGLE_SIGN_IN_METHOD="google.com";ki.PROVIDER_ID="google.com";/**
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
 */class Ri extends ao{constructor(){super("github.com")}static credential(e){return ar._fromParams({providerId:Ri.PROVIDER_ID,signInMethod:Ri.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ri.credentialFromTaggedObject(e)}static credentialFromError(e){return Ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ri.credential(e.oauthAccessToken)}catch{return null}}}Ri.GITHUB_SIGN_IN_METHOD="github.com";Ri.PROVIDER_ID="github.com";/**
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
 */class Oi extends ao{constructor(){super("twitter.com")}static credential(e,n){return ar._fromParams({providerId:Oi.PROVIDER_ID,signInMethod:Oi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Oi.credentialFromTaggedObject(e)}static credentialFromError(e){return Oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Oi.credential(n,i)}catch{return null}}}Oi.TWITTER_SIGN_IN_METHOD="twitter.com";Oi.PROVIDER_ID="twitter.com";/**
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
 */class Zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await or._fromIdTokenResponse(e,i,r),o=rm(i);return new Zr({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=rm(i);return new Zr({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function rm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class el extends er{constructor(e,n,i,r){var s;super(n.code,n.message);this.operationType=i,this.user=r,Object.setPrototypeOf(this,el.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new el(e,n,i,r)}}function sm(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?el._fromErrorAndOperation(t,s,e,i):s})}async function eC(t,e,n=!1){const i=await io(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zr._forOperation(t,"link",i)}/**
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
 */async function tC(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await io(t,sm(i,r,e,t),n);$(s.idToken,i,"internal-error");const o=Nu(s.idToken);$(o,i,"internal-error");const{sub:a}=o;return $(t.uid===a,i,"user-mismatch"),Zr._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ni(i,"user-mismatch"),s}}/**
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
 */async function om(t,e,n=!1){const i="signIn",r=await sm(t,i,e),s=await Zr._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function nC(t,e){return om(so(t),e)}function Vj(t,e,n,i){return at(t).onAuthStateChanged(e,n,i)}/**
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
 */function iC(t,e){return Ci(t,"POST","/v2/accounts/mfaEnrollment:start",sr(t,e))}const tl="__sak";/**
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
 */function rC(){const t=Vt();return Pu(t)||$a(t)}const sC=1e3,oC=10;class lm extends am{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rC()&&zT(),this.fallbackToPolling=em(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);GT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,oC):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},sC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lm.type="LOCAL";const aC=lm;/**
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
 */function lC(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class nl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new nl(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await lC(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nl.receivers=[];/**
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
 */class cC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Fu("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ft(){return window}function uC(t){Ft().location.href=t}/**
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
 */function xu(){return typeof Ft().WorkerGlobalScope!="undefined"&&typeof Ft().importScripts=="function"}async function hC(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fC(){return xu()?self:null}/**
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
 */const hm="firebaseLocalStorageDb",pC=1,il="firebaseLocalStorage",dm="fbase_key";class lo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rl(t,e){return t.transaction([il],e?"readwrite":"readonly").objectStore(il)}function mC(){const t=indexedDB.deleteDatabase(hm);return new lo(t).toPromise()}function Uu(){const t=indexedDB.open(hm,pC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(il,{keyPath:dm})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(il)?e(i):(i.close(),await mC(),e(await Uu()))})})}async function fm(t,e,n){const i=rl(t,!0).put({[dm]:e,value:n});return new lo(i).toPromise()}async function gC(t,e){const n=rl(t,!1).get(e),i=await new lo(n).toPromise();return i===void 0?null:i.value}function pm(t,e){const n=rl(t,!0).delete(e);return new lo(n).toPromise()}const _C=800,vC=3;class mm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>vC)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nl._getInstance(fC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hC(),!this.activeServiceWorker)return;this.sender=new cC(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uu();return await fm(e,tl,"1"),await pm(e,tl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>fm(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>gC(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=rl(r,!1).getAll();return new lo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_C)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mm.type="LOCAL";const yC=mm;/**
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
 */function bC(t,e){return Ci(t,"POST","/v2/accounts/mfaSignIn:start",sr(t,e))}/**
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
 */async function IC(t){return(await Ci(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */const wC=500,TC=6e4,sl=1e12;class CC{constructor(e){this.auth=e,this.counter=sl,this._widgets=new Map}render(e,n){const i=this.counter;return this._widgets.set(i,new SC(e,this.auth.name,n||{})),this.counter++,i}reset(e){var n;const i=e||sl;(n=this._widgets.get(i))===null||n===void 0||n.delete(),this._widgets.delete(i)}getResponse(e){var n;const i=e||sl;return((n=this._widgets.get(i))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const i=e||sl;return(n=this._widgets.get(i))===null||n===void 0||n.execute(),""}}class SC{constructor(e,n,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;$(r,"argument-error",{appName:n}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=AC(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},TC)},wC))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function AC(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const ju=_m("rcb"),kC=new to(3e4,6e4),RC="https://www.google.com/recaptcha/api.js?";class OC{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Ft().grecaptcha}load(e,n=""){return $(LC(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Ft().grecaptcha):new Promise((i,r)=>{const s=Ft().setTimeout(()=>{r(Nn(e,"network-request-failed"))},kC.get());Ft()[ju]=()=>{Ft().clearTimeout(s),delete Ft()[ju];const a=Ft().grecaptcha;if(!a){r(Nn(e,"internal-error"));return}const l=a.render;a.render=(c,u)=>{const h=l(c,u);return this.counter++,h},this.hostLanguage=n,i(a)};const o=`${RC}?${tr({onload:ju,render:"explicit",hl:n})}`;gm(o).catch(()=>{clearTimeout(s),r(Nn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Ft().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function LC(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class MC{async load(e){return new CC(e)}clearedOneInstance(){}}/**
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
 */const vm="recaptcha",NC={theme:"light",type:"image"};class Bj{constructor(e,n=Object.assign({},NC),i){this.parameters=n,this.type=vm,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=so(i),this.isInvisible=this.parameters.size==="invisible",$(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const r=typeof e=="string"?document.getElementById(e):e;$(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new MC:new OC,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),i=n.getResponse(e);return i||new Promise(r=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),r(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){$(!this.parameters.sitekey,this.auth,"argument-error"),$(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),$(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(i=>i(n)),typeof e=="function")e(n);else if(typeof e=="string"){const i=Ft()[e];typeof i=="function"&&i(n)}}}assertNotDestroyed(){$(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){$(Vp()&&!xu(),this.auth,"internal-error"),await PC(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await IC(this.auth);$(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return $(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function PC(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class DC{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=oo._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Hj(t,e,n){const i=so(t),r=await FC(i,e,at(n));return new DC(r,s=>nC(i,s))}async function FC(t,e,n){var i;const r=await n.verify();try{$(typeof r=="string",t,"argument-error"),$(n.type===vm,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return $(o.type==="enroll",t,"internal-error"),(await iC(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{$(o.type==="signin",t,"internal-error");const a=((i=s.multiFactorHint)===null||i===void 0?void 0:i.uid)||s.multiFactorUid;return $(a,t,"missing-multi-factor-info"),(await bC(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await QT(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return o}}finally{n._reset()}}/**
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
 */function xC(t,e){return e?si(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Vu extends Du{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UC(t){return om(t.auth,new Vu(t),t.bypassAuthState)}function jC(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),tC(n,new Vu(t),t.bypassAuthState)}async function VC(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),eC(n,new Vu(t),t.bypassAuthState)}/**
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
 */class ym{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UC;case"linkViaPopup":case"linkViaRedirect":return VC;case"reauthViaPopup":case"reauthViaRedirect":return jC;default:ni(this.auth,"internal-error")}}resolve(e){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const BC=new to(2e3,1e4);class $r extends ym{constructor(e,n,i,r,s){super(e,n,r,s);this.provider=i,this.authWindow=null,this.pollId=null,$r.currentPopupAction&&$r.currentPopupAction.cancel(),$r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){ri(this.filter.length===1,"Popup operations only handle one event");const e=Fu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,BC.get())};e()}}$r.currentPopupAction=null;/**
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
 */const HC="pendingRedirect",Bu=new Map;class qC extends ym{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=Bu.get(this.auth._key());if(!e){try{const i=await WC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Bu.set(this.auth._key(),e)}return this.bypassAuthState||Bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WC(t,e){const n=zC(e),i=GC(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function GC(t){return si(t._redirectPersistence)}function zC(t){return Za(HC,t.config.apiKey,t.name)}async function KC(t,e,n=!1){const i=so(t),r=xC(i,e),o=await new qC(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const XC=10*60*1e3;class QC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Im(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Nn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XC&&this.cachedEventUids.clear(),this.cachedEventUids.has(bm(e))}saveEventToCache(e){this.cachedEventUids.add(bm(e)),this.lastProcessedEventTime=Date.now()}}function bm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Im({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Im(t);default:return!1}}/**
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
 */async function JC(t,e={}){return Ci(t,"GET","/v1/projects",e)}/**
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
 */const ZC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$C=/^https?/;async function eS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JC(t);for(const n of e)try{if(tS(n))return}catch{}ni(t,"unauthorized-domain")}function tS(t){const e=Ru(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!$C.test(n))return!1;if(ZC.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const nS=new to(3e4,6e4);function Em(){const t=Ft().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iS(t){return new Promise((e,n)=>{var i,r,s;function o(){Em(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Em(),n(Nn(t,"network-request-failed"))},timeout:nS.get()})}if((r=(i=Ft().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0?void 0:r.Iframe)e(gapi.iframes.getContext());else if((s=Ft().gapi)===null||s===void 0?void 0:s.load)o();else{const a=_m("iframefcb");return Ft()[a]=()=>{gapi.load?o():n(Nn(t,"network-request-failed"))},gm(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw ol=null,e})}let ol=null;function rS(t){return ol=ol||iS(t),ol}/**
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
 */const sS=new to(5e3,15e3),oS="__/auth/iframe",aS="emulator/auth/iframe",lS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uS(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ou(e,aS):`https://${t.config.authDomain}/${oS}`,i={apiKey:e.apiKey,appName:t.name,v:rr},r=cS.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${tr(i).slice(1)}`}async function hS(t){const e=await rS(t),n=Ft().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:uS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lS,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Nn(t,"network-request-failed"),a=Ft().setTimeout(()=>{s(o)},sS.get());function l(){Ft().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const dS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fS=500,pS=600,mS="_blank",gS="http://localhost";class wm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _S(t,e,n,i=fS,r=pS){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},dS),{width:i.toString(),height:r.toString(),top:s,left:o}),c=Vt().toLowerCase();n&&(a=Qp(c)?mS:n),Xp(c)&&(e=e||gS,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(WT(c)&&a!=="_self")return vS(e||"",a),new wm(null);const h=window.open(e||"",a,u);$(h,t,"popup-blocked");try{h.focus()}catch{}return new wm(h)}function vS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const yS="__/auth/handler",bS="emulator/auth/handler";function Tm(t,e,n,i,r,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:rr,eventId:r};if(e instanceof im){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Va(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof ao){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${IS(t)}?${tr(a).slice(1)}`}function IS({config:t}){return t.emulator?Ou(t,bS):`https://${t.authDomain}/${yS}`}/**
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
 */const Hu="webStorageSupport";class ES{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=um,this._completeRedirectFn=KC}async _openPopup(e,n,i,r){var s;ri((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Tm(e,n,i,Ru(),r);return _S(e,o,Fu())}async _openRedirect(e,n,i,r){return await this._originValidation(e),uC(Tm(e,n,i,Ru(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(ri(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i}async initAndGetManager(e){const n=await hS(e),i=new QC(e);return n.register("authEvent",r=>($(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hu,{type:Hu},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Hu];o!==void 0&&n(!!o),ni(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return em()||Pu()||$a()}}const wS=ES;var Cm="@firebase/auth",Sm="0.19.3";/**
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
 */class TS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var r;e(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function CS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function SS(t){ir(new Ti("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=i.options;return(o=>{$(r&&!r.includes(":"),"invalid-api-key",{appName:o.name}),$(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:r,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tm(t)},l=new KT(o,a);return kT(l,n),l})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),ir(new Ti("auth-internal",e=>{const n=so(e.getProvider("auth").getImmediate());return(i=>new TS(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(Cm,Sm,CS(t)),Bn(Cm,Sm,"esm2017")}/**
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
 */function qj(t=Ka()){const e=eo(t,"auth");return e.isInitialized()?e.getImmediate():AT(t,{popupRedirectResolver:wS,persistence:[yC,aC,um]})}SS("Browser");var AS=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Y,qu=qu||{},pe=AS||self;function al(){}function Wu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function co(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function kS(t){return Object.prototype.hasOwnProperty.call(t,Gu)&&t[Gu]||(t[Gu]=++RS)}var Gu="closure_uid_"+(1e9*Math.random()>>>0),RS=0;function OS(t,e,n){return t.call.apply(t.bind,arguments)}function LS(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function $t(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$t=OS:$t=LS,$t.apply(null,arguments)}function ll(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function en(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function Li(){this.s=this.s,this.o=this.o}var MS=0,NS={};Li.prototype.s=!1;Li.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),MS!=0)){var t=kS(this);delete NS[t]}};Li.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Am=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},km=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function PS(t){e:{var e=C1;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Rm(t){return Array.prototype.concat.apply([],arguments)}function zu(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function cl(t){return/^[\s\xa0]*$/.test(t)}var Om=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function gn(t,e){return t.indexOf(e)!=-1}function Ku(t,e){return t<e?-1:t>e?1:0}var _n;e:{var Lm=pe.navigator;if(Lm){var Mm=Lm.userAgent;if(Mm){_n=Mm;break e}}_n=""}function Xu(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Nm(t){const e={};for(const n in t)e[n]=t[n];return e}var Pm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dm(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<Pm.length;s++)n=Pm[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Qu(t){return Qu[" "](t),t}Qu[" "]=al;function DS(t){var e=US;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var FS=gn(_n,"Opera"),es=gn(_n,"Trident")||gn(_n,"MSIE"),Fm=gn(_n,"Edge"),Yu=Fm||es,xm=gn(_n,"Gecko")&&!(gn(_n.toLowerCase(),"webkit")&&!gn(_n,"Edge"))&&!(gn(_n,"Trident")||gn(_n,"MSIE"))&&!gn(_n,"Edge"),xS=gn(_n.toLowerCase(),"webkit")&&!gn(_n,"Edge");function Um(){var t=pe.document;return t?t.documentMode:void 0}var ul;e:{var Ju="",Zu=function(){var t=_n;if(xm)return/rv:([^\);]+)(\)|;)/.exec(t);if(Fm)return/Edge\/([\d\.]+)/.exec(t);if(es)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(xS)return/WebKit\/(\S+)/.exec(t);if(FS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Zu&&(Ju=Zu?Zu[1]:""),es){var $u=Um();if($u!=null&&$u>parseFloat(Ju)){ul=String($u);break e}}ul=Ju}var US={};function jS(){return DS(function(){let t=0;const e=Om(String(ul)).split("."),n=Om("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=Ku(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||Ku(r[2].length==0,s[2].length==0)||Ku(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}var eh;if(pe.document&&es){var jm=Um();eh=jm||parseInt(ul,10)||void 0}else eh=void 0;var VS=eh,BS=function(){if(!pe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{pe.addEventListener("test",al,e),pe.removeEventListener("test",al,e)}catch{}return t}();function ln(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ln.prototype.h=function(){this.defaultPrevented=!0};function uo(t,e){if(ln.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xm){e:{try{Qu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:HS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&uo.Z.h.call(this)}}en(uo,ln);var HS={2:"touch",3:"pen",4:"mouse"};uo.prototype.h=function(){uo.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ho="closure_listenable_"+(1e6*Math.random()|0),qS=0;function WS(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++qS,this.ca=this.fa=!1}function hl(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function dl(t){this.src=t,this.g={},this.h=0}dl.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=nh(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new WS(e,this.src,s,!!i,r),e.fa=n,t.push(e)),e};function th(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=Am(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(hl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function nh(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}var ih="closure_lm_"+(1e6*Math.random()|0),rh={};function Vm(t,e,n,i,r){if(i&&i.once)return Hm(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Vm(t,e[s],n,i,r);return null}return n=lh(n),t&&t[ho]?t.N(e,n,co(i)?!!i.capture:!!i,r):Bm(t,e,n,!1,i,r)}function Bm(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=co(r)?!!r.capture:!!r,a=oh(t);if(a||(t[ih]=a=new dl(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=GS(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)BS||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Wm(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function GS(){function t(n){return e.call(t.src,t.listener,n)}var e=zS;return t}function Hm(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Hm(t,e[s],n,i,r);return null}return n=lh(n),t&&t[ho]?t.O(e,n,co(i)?!!i.capture:!!i,r):Bm(t,e,n,!0,i,r)}function qm(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)qm(t,e[s],n,i,r);else i=co(i)?!!i.capture:!!i,n=lh(n),t&&t[ho]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=nh(s,n,i,r),-1<n&&(hl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=oh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=nh(e,n,i,r)),(n=-1<t?e[t]:null)&&sh(n))}function sh(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ho])th(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Wm(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=oh(e))?(th(n,t),n.h==0&&(n.src=null,e[ih]=null)):hl(t)}}}function Wm(t){return t in rh?rh[t]:rh[t]="on"+t}function zS(t,e){if(t.ca)t=!0;else{e=new uo(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&sh(t),t=n.call(i,e)}return t}function oh(t){return t=t[ih],t instanceof dl?t:null}var ah="__closure_events_fn_"+(1e9*Math.random()>>>0);function lh(t){return typeof t=="function"?t:(t[ah]||(t[ah]=function(e){return t.handleEvent(e)}),t[ah])}function Ht(){Li.call(this),this.i=new dl(this),this.P=this,this.I=null}en(Ht,Li);Ht.prototype[ho]=!0;Ht.prototype.removeEventListener=function(t,e,n,i){qm(this,t,e,n,i)};function tn(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new ln(e,t);else if(e instanceof ln)e.target=e.target||t;else{var r=e;e=new ln(i,t),Dm(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=fl(o,i,!0,e)&&r}if(o=e.g=t,r=fl(o,i,!0,e)&&r,r=fl(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=fl(o,i,!1,e)&&r}Ht.prototype.M=function(){if(Ht.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)hl(n[i]);delete t.g[e],t.h--}}this.I=null};Ht.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Ht.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function fl(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&th(t.i,o),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var ch=pe.JSON.stringify;function KS(){var t=zm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class XS{constructor(){this.h=this.g=null}add(e,n){const i=Gm.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Gm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new QS,t=>t.reset());class QS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function YS(t){pe.setTimeout(()=>{throw t},0)}function uh(t,e){hh||JS(),dh||(hh(),dh=!0),zm.add(t,e)}var hh;function JS(){var t=pe.Promise.resolve(void 0);hh=function(){t.then(ZS)}}var dh=!1,zm=new XS;function ZS(){for(var t;t=KS();){try{t.h.call(t.g)}catch(n){YS(n)}var e=Gm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}dh=!1}function pl(t,e){Ht.call(this),this.h=t||1,this.g=e||pe,this.j=$t(this.kb,this),this.l=Date.now()}en(pl,Ht);Y=pl.prototype;Y.da=!1;Y.S=null;Y.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),tn(this,"tick"),this.da&&(fh(this),this.start()))}};Y.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fh(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}Y.M=function(){pl.Z.M.call(this),fh(this),delete this.g};function ph(t,e,n){if(typeof t=="function")n&&(t=$t(t,n));else if(t&&typeof t.handleEvent=="function")t=$t(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:pe.setTimeout(t,e||0)}function Km(t){t.g=ph(()=>{t.g=null,t.i&&(t.i=!1,Km(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class $S extends Li{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Km(this)}M(){super.M(),this.g&&(pe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fo(t){Li.call(this),this.h=t,this.g={}}en(fo,Li);var Xm=[];function Qm(t,e,n,i){Array.isArray(n)||(n&&(Xm[0]=n.toString()),n=Xm);for(var r=0;r<n.length;r++){var s=Vm(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ym(t){Xu(t.g,function(e,n){this.g.hasOwnProperty(n)&&sh(e)},t),t.g={}}fo.prototype.M=function(){fo.Z.M.call(this),Ym(this)};fo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ml(){this.g=!0}ml.prototype.Aa=function(){this.g=!1};function e1(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function t1(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function ts(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+i1(t,n)+(i?" "+i:"")})}function n1(t,e){t.info(function(){return"TIMEOUT: "+e})}ml.prototype.info=function(){};function i1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ch(n)}catch{return e}}var lr={},Jm=null;function gl(){return Jm=Jm||new Ht}lr.Ma="serverreachability";function Zm(t){ln.call(this,lr.Ma,t)}en(Zm,ln);function po(t){const e=gl();tn(e,new Zm(e,t))}lr.STAT_EVENT="statevent";function $m(t,e){ln.call(this,lr.STAT_EVENT,t),this.stat=e}en($m,ln);function vn(t){const e=gl();tn(e,new $m(e,t))}lr.Na="timingevent";function eg(t,e){ln.call(this,lr.Na,t),this.size=e}en(eg,ln);function mo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return pe.setTimeout(function(){t()},e)}var _l={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},tg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function mh(){}mh.prototype.h=null;function ng(t){return t.h||(t.h=t.i())}function ig(){}var go={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function gh(){ln.call(this,"d")}en(gh,ln);function _h(){ln.call(this,"c")}en(_h,ln);var vh;function vl(){}en(vl,mh);vl.prototype.g=function(){return new XMLHttpRequest};vl.prototype.i=function(){return{}};vh=new vl;function _o(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new fo(this),this.P=r1,t=Yu?125:void 0,this.W=new pl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new rg}function rg(){this.i=null,this.g="",this.h=!1}var r1=45e3,yh={},yl={};Y=_o.prototype;Y.setTimeout=function(t){this.P=t};function bh(t,e,n){t.K=1,t.v=Tl(oi(e)),t.s=n,t.U=!0,sg(t,null)}function sg(t,e){t.F=Date.now(),vo(t),t.A=oi(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),pg(n.h,"t",i),t.C=0,n=t.l.H,t.h=new rg,t.g=xg(t.l,n?e:null,!t.s),0<t.O&&(t.L=new $S($t(t.Ia,t,t.g),t.O)),Qm(t.V,t.g,"readystatechange",t.gb),e=t.H?Nm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),po(1),e1(t.j,t.u,t.A,t.m,t.X,t.s)}Y.gb=function(t){t=t.target;const e=this.L;e&&ai(t)==3?e.l():this.Ia(t)};Y.Ia=function(t){try{if(t==this.g)e:{const u=ai(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Yu||this.g&&(this.h.h||this.g.ga()||Sg(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?po(3):po(2)),bl(this);var n=this.g.ba();this.N=n;t:if(og(this)){var i=Sg(this.g);t="";var r=i.length,s=ai(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){cr(this),yo(this);var o="";break t}this.h.i=new pe.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,t1(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!cl(a)){var c=a;break t}}c=null}if(n=c)ts(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ih(this,n);else{this.i=!1,this.o=3,vn(12),cr(this),yo(this);break e}}this.U?(ag(this,u,o),Yu&&this.i&&u==3&&(Qm(this.V,this.W,"tick",this.fb),this.W.start())):(ts(this.j,this.m,o,null),Ih(this,o)),u==4&&cr(this),this.i&&!this.I&&(u==4?Ng(this.l,this):(this.i=!1,vo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,vn(12)):(this.o=0,vn(13)),cr(this),yo(this)}}}catch{}finally{}};function og(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function ag(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if(r=s1(t,n),r==yl){e==4&&(t.o=4,vn(14),i=!1),ts(t.j,t.m,null,"[Incomplete Response]");break}else if(r==yh){t.o=4,vn(15),ts(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else ts(t.j,t.m,r,null),Ih(t,r);og(t)&&r!=yl&&r!=yh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,vn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mh(e),e.L=!0,vn(11))):(ts(t.j,t.m,n,"[Invalid Chunked Response]"),cr(t),yo(t))}Y.fb=function(){if(this.g){var t=ai(this.g),e=this.g.ga();this.C<e.length&&(bl(this),ag(this,t,e),this.i&&t!=4&&vo(this))}};function s1(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?yl:(n=Number(e.substring(n,i)),isNaN(n)?yh:(i+=1,i+n>e.length?yl:(e=e.substr(i,n),t.C=i+n,e)))}Y.cancel=function(){this.I=!0,cr(this)};function vo(t){t.Y=Date.now()+t.P,lg(t,t.P)}function lg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=mo($t(t.eb,t),e)}function bl(t){t.B&&(pe.clearTimeout(t.B),t.B=null)}Y.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(n1(this.j,this.A),this.K!=2&&(po(3),vn(17)),cr(this),this.o=2,yo(this)):lg(this,this.Y-t)};function yo(t){t.l.G==0||t.I||Ng(t.l,t)}function cr(t){bl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,fh(t.W),Ym(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ih(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Th(n.i,t))){if(n.I=t.N,!t.J&&Th(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ol(n),kl(n);else break e;Lh(n),vn(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=mo($t(n.ab,n),6e3));if(1>=_g(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else dr(n,11)}else if((t.J||n.g==t)&&Ol(n),!cl(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=i.i;!s.g&&(gn(p,"spdy")||gn(p,"quic")||gn(p,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Ch(s,s.h),s.h=null))}if(i.D){const g=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(i.sa=g,It(i.F,i.D,g))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=Fg(i,i.H?i.la:null,i.W),o.J){vg(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(bl(a),vo(a)),i.g=o}else Lg(i);0<n.l.length&&Rl(n)}else c[0]!="stop"&&c[0]!="close"||dr(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?dr(n,7):Rh(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}po(4)}catch{}}function o1(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Wu(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Eh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Wu(t)||typeof t=="string")km(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Wu(t)||typeof t=="string"){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=o1(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function ns(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof ns)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}Y=ns.prototype;Y.R=function(){wh(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};Y.T=function(){return wh(this),this.g.concat()};function wh(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];ur(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)i=t.g[e],ur(r,i)||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}Y.get=function(t,e){return ur(this.h,t)?this.h[t]:e};Y.set=function(t,e){ur(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};Y.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};function ur(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var cg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function a1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function hr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof hr){this.g=e!==void 0?e:t.g,Il(this,t.j),this.s=t.s,El(this,t.i),wl(this,t.m),this.l=t.l,e=t.h;var n=new Eo;n.i=e.i,e.g&&(n.g=new ns(e.g),n.h=e.h),ug(this,n),this.o=t.o}else t&&(n=String(t).match(cg))?(this.g=!!e,Il(this,n[1]||"",!0),this.s=bo(n[2]||""),El(this,n[3]||"",!0),wl(this,n[4]),this.l=bo(n[5]||"",!0),ug(this,n[6]||"",!0),this.o=bo(n[7]||"")):(this.g=!!e,this.h=new Eo(null,this.g))}hr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Io(e,hg,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Io(e,hg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Io(n,n.charAt(0)=="/"?d1:h1,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Io(n,p1)),t.join("")};function oi(t){return new hr(t)}function Il(t,e,n){t.j=n?bo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function El(t,e,n){t.i=n?bo(e,!0):e}function wl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ug(t,e,n){e instanceof Eo?(t.h=e,m1(t.h,t.g)):(n||(e=Io(e,f1)),t.h=new Eo(e,t.g))}function It(t,e,n){t.h.set(e,n)}function Tl(t){return It(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function l1(t){return t instanceof hr?oi(t):new hr(t,void 0)}function c1(t,e,n,i){var r=new hr(null,void 0);return t&&Il(r,t),e&&El(r,e),n&&wl(r,n),i&&(r.l=i),r}function bo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Io(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,u1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function u1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var hg=/[#\/\?@]/g,h1=/[#\?:]/g,d1=/[#\?]/g,f1=/[#\?@]/g,p1=/#/g;function Eo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Mi(t){t.g||(t.g=new ns,t.h=0,t.i&&a1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Y=Eo.prototype;Y.add=function(t,e){Mi(this),this.i=null,t=is(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function dg(t,e){Mi(t),e=is(t,e),ur(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ur(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&wh(t)))}function fg(t,e){return Mi(t),e=is(t,e),ur(t.g.h,e)}Y.forEach=function(t,e){Mi(this),this.g.forEach(function(n,i){km(n,function(r){t.call(e,r,i,this)},this)},this)};Y.T=function(){Mi(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n};Y.R=function(t){Mi(this);var e=[];if(typeof t=="string")fg(this,t)&&(e=Rm(e,this.g.get(is(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Rm(e,t[n])}return e};Y.set=function(t,e){return Mi(this),this.i=null,t=is(this,t),fg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Y.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function pg(t,e,n){dg(t,e),0<n.length&&(t.i=null,t.g.set(is(t,e),zu(n)),t.h+=n.length)}Y.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;i[s]!==""&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};function is(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function m1(t,e){e&&!t.j&&(Mi(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(dg(this,i),pg(this,r,n))},t)),t.j=e}var g1=class{constructor(t,e){this.h=t,this.g=e}};function mg(t){this.l=t||_1,pe.PerformanceNavigationTiming?(t=pe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(pe.g&&pe.g.Ea&&pe.g.Ea()&&pe.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _1=10;function gg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function _g(t){return t.h?1:t.g?t.g.size:0}function Th(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ch(t,e){t.g?t.g.add(e):t.h=e}function vg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mg.prototype.cancel=function(){if(this.i=yg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function yg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return zu(t.i)}function Sh(){}Sh.prototype.stringify=function(t){return pe.JSON.stringify(t,void 0)};Sh.prototype.parse=function(t){return pe.JSON.parse(t,void 0)};function v1(){this.g=new Sh}function y1(t,e,n){const i=n||"";try{Eh(t,function(r,s){let o=r;co(r)&&(o=ch(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function b1(t,e){const n=new ml;if(pe.Image){const i=new Image;i.onload=ll(Cl,n,i,"TestLoadImage: loaded",!0,e),i.onerror=ll(Cl,n,i,"TestLoadImage: error",!1,e),i.onabort=ll(Cl,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=ll(Cl,n,i,"TestLoadImage: timeout",!1,e),pe.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Cl(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function wo(t){this.l=t.$b||null,this.j=t.ib||!1}en(wo,mh);wo.prototype.g=function(){return new Sl(this.l,this.j)};wo.prototype.i=function(t){return function(){return t}}({});function Sl(t,e){Ht.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ah,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}en(Sl,Ht);var Ah=0;Y=Sl.prototype;Y.open=function(t,e){if(this.readyState!=Ah)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Co(this)};Y.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||pe).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};Y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,To(this)),this.readyState=Ah};Y.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Co(this)),this.g&&(this.readyState=3,Co(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof pe.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bg(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function bg(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}Y.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?To(this):Co(this),this.readyState==3&&bg(this)}};Y.Ua=function(t){this.g&&(this.response=this.responseText=t,To(this))};Y.Ta=function(t){this.g&&(this.response=t,To(this))};Y.ha=function(){this.g&&To(this)};function To(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Co(t)}Y.setRequestHeader=function(t,e){this.v.append(t,e)};Y.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Y.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Co(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Sl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var I1=pe.JSON.parse;function Lt(t){Ht.call(this),this.headers=new ns,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ig,this.K=this.L=!1}en(Lt,Ht);var Ig="",E1=/^https?$/i,w1=["POST","PUT"];Y=Lt.prototype;Y.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vh.g(),this.C=this.u?ng(this.u):ng(vh),this.g.onreadystatechange=$t(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Eg(this,s);return}t=n||"";const r=new ns(this.headers);i&&Eh(i,function(s,o){r.set(o,s)}),i=PS(r.T()),n=pe.FormData&&t instanceof pe.FormData,!(0<=Am(w1,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Cg(this),0<this.B&&((this.K=T1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$t(this.pa,this)):this.A=ph(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Eg(this,s)}};function T1(t){return es&&jS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function C1(t){return t.toLowerCase()=="content-type"}Y.pa=function(){typeof qu!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tn(this,"timeout"),this.abort(8))};function Eg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,wg(t),Al(t)}function wg(t){t.D||(t.D=!0,tn(t,"complete"),tn(t,"error"))}Y.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,tn(this,"complete"),tn(this,"abort"),Al(this))};Y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Al(this,!0)),Lt.Z.M.call(this)};Y.Fa=function(){this.s||(this.F||this.v||this.l?Tg(this):this.cb())};Y.cb=function(){Tg(this)};function Tg(t){if(t.h&&typeof qu!="undefined"&&(!t.C[1]||ai(t)!=4||t.ba()!=2)){if(t.v&&ai(t)==4)ph(t.Fa,0,t);else if(tn(t,"readystatechange"),ai(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.H).match(cg)[1]||null;if(!r&&pe.self&&pe.self.location){var s=pe.self.location.protocol;r=s.substr(0,s.length-1)}i=!E1.test(r?r.toLowerCase():"")}n=i}if(n)tn(t,"complete"),tn(t,"success");else{t.m=6;try{var o=2<ai(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",wg(t)}}finally{Al(t)}}}}function Al(t,e){if(t.g){Cg(t);const n=t.g,i=t.C[0]?al:null;t.g=null,t.C=null,e||tn(t,"ready");try{n.onreadystatechange=i}catch{}}}function Cg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(pe.clearTimeout(t.A),t.A=null)}function ai(t){return t.g?t.g.readyState:0}Y.ba=function(){try{return 2<ai(this)?this.g.status:-1}catch{return-1}};Y.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};Y.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),I1(e)}};function Sg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ig:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}Y.Da=function(){return this.m};Y.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function S1(t){let e="";return Xu(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function kh(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=S1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):It(t,e,n))}function So(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ag(t){this.za=0,this.l=[],this.h=new ml,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=So("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=So("baseRetryDelayMs",5e3,t),this.$a=So("retryDelaySeedMs",1e4,t),this.Ya=So("forwardChannelMaxRetries",2,t),this.ra=So("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new mg(t&&t.concurrentRequestLimit),this.Ca=new v1,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}Y=Ag.prototype;Y.ma=8;Y.G=1;function Rh(t){if(kg(t),t.G==3){var e=t.V++,n=oi(t.F);It(n,"SID",t.J),It(n,"RID",e),It(n,"TYPE","terminate"),Ao(t,n),e=new _o(t,t.h,e,void 0),e.K=2,e.v=Tl(oi(n)),n=!1,pe.navigator&&pe.navigator.sendBeacon&&(n=pe.navigator.sendBeacon(e.v.toString(),"")),!n&&pe.Image&&(new Image().src=e.v,n=!0),n||(e.g=xg(e.l,null),e.g.ea(e.v)),e.F=Date.now(),vo(e)}Dg(t)}Y.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function kl(t){t.g&&(Mh(t),t.g.cancel(),t.g=null)}function kg(t){kl(t),t.u&&(pe.clearTimeout(t.u),t.u=null),Ol(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&pe.clearTimeout(t.m),t.m=null)}function Oh(t,e){t.l.push(new g1(t.Za++,e)),t.G==3&&Rl(t)}function Rl(t){gg(t.i)||t.m||(t.m=!0,uh(t.Ha,t),t.C=0)}function A1(t,e){return _g(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=mo($t(t.Ha,t,e),Pg(t,t.C)),t.C++,!0)}Y.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new _o(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Nm(s),Dm(s,this.P)):s=this.P),this.o===null&&(r.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Og(this,r,e),n=oi(this.F),It(n,"RID",t),It(n,"CVER",22),this.D&&It(n,"X-HTTP-Session-Id",this.D),Ao(this,n),this.o&&s&&kh(n,this.o,s),Ch(this.i,r),this.Ra&&It(n,"TYPE","init"),this.ja?(It(n,"$req",e),It(n,"SID","null"),r.$=!0,bh(r,n,null)):bh(r,n,e),this.G=2}}else this.G==3&&(t?Rg(this,t):this.l.length==0||gg(this.i)||Rg(this))};function Rg(t,e){var n;e?n=e.m:n=t.V++;const i=oi(t.F);It(i,"SID",t.J),It(i,"RID",n),It(i,"AID",t.U),Ao(t,i),t.o&&t.s&&kh(i,t.o,t.s),n=new _o(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Og(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ch(t.i,n),bh(n,i,e)}function Ao(t,e){t.j&&Eh({},function(n,i){It(e,i,n)})}function Og(t,e,n){n=Math.min(t.l.length,n);var i=t.j?$t(t.j.Oa,t.j,t):null;e:{var r=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const u=r[l].g;if(c-=s,0>c)s=Math.max(0,r[l].h-100),a=!1;else try{y1(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function Lg(t){t.g||t.u||(t.Y=1,uh(t.Ga,t),t.A=0)}function Lh(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=mo($t(t.Ga,t),Pg(t,t.A)),t.A++,!0)}Y.Ga=function(){if(this.u=null,Mg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=mo($t(this.bb,this),t)}};Y.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,vn(10),kl(this),Mg(this))};function Mh(t){t.B!=null&&(pe.clearTimeout(t.B),t.B=null)}function Mg(t){t.g=new _o(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=oi(t.oa);It(e,"RID","rpc"),It(e,"SID",t.J),It(e,"CI",t.N?"0":"1"),It(e,"AID",t.U),Ao(t,e),It(e,"TYPE","xmlhttp"),t.o&&t.s&&kh(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Tl(oi(e)),n.s=null,n.U=!0,sg(n,t)}Y.ab=function(){this.v!=null&&(this.v=null,kl(this),Lh(this),vn(19))};function Ol(t){t.v!=null&&(pe.clearTimeout(t.v),t.v=null)}function Ng(t,e){var n=null;if(t.g==e){Ol(t),Mh(t),t.g=null;var i=2}else if(Th(t.i,e))n=e.D,vg(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=gl(),tn(i,new eg(i,n,e,r)),Rl(t)}else Lg(t);else if(r=e.o,r==3||r==0&&0<t.I||!(i==1&&A1(t,e)||i==2&&Lh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:dr(t,5);break;case 4:dr(t,10);break;case 3:dr(t,6);break;default:dr(t,2)}}}function Pg(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function dr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=$t(t.jb,t);n||(n=new hr("//www.google.com/images/cleardot.gif"),pe.location&&pe.location.protocol=="http"||Il(n,"https"),Tl(n)),b1(n.toString(),i)}else vn(2);t.G=0,t.j&&t.j.va(e),Dg(t),kg(t)}Y.jb=function(t){t?(this.h.info("Successfully pinged google.com"),vn(2)):(this.h.info("Failed to ping google.com"),vn(1))};function Dg(t){t.G=0,t.I=-1,t.j&&((yg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,zu(t.l),t.l.length=0),t.j.ua())}function Fg(t,e,n){let i=l1(n);if(i.i!="")e&&El(i,e+"."+i.i),wl(i,i.m);else{const r=pe.location;i=c1(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Xu(t.aa,function(r,s){It(i,s,r)}),e=t.D,n=t.sa,e&&n&&It(i,e,n),It(i,"VER",t.ma),Ao(t,i),i}function xg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Lt(new wo({ib:!0})):new Lt(t.qa),e.L=t.H,e}function Ug(){}Y=Ug.prototype;Y.xa=function(){};Y.wa=function(){};Y.va=function(){};Y.ua=function(){};Y.Oa=function(){};function Ll(){if(es&&!(10<=Number(VS)))throw Error("Environmental error: no available transport.")}Ll.prototype.g=function(t,e){return new Pn(t,e)};function Pn(t,e){Ht.call(this),this.g=new Ag(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!cl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!cl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new rs(this)}en(Pn,Ht);Pn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),uh($t(t.hb,t,e))),vn(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Fg(t,null,t.W),Rl(t)};Pn.prototype.close=function(){Rh(this.g)};Pn.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Oh(this.g,e)}else this.v?(e={},e.__data__=ch(t),Oh(this.g,e)):Oh(this.g,t)};Pn.prototype.M=function(){this.g.j=null,delete this.j,Rh(this.g),delete this.g,Pn.Z.M.call(this)};function jg(t){gh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}en(jg,gh);function Vg(){_h.call(this),this.status=1}en(Vg,_h);function rs(t){this.g=t}en(rs,Ug);rs.prototype.xa=function(){tn(this.g,"a")};rs.prototype.wa=function(t){tn(this.g,new jg(t))};rs.prototype.va=function(t){tn(this.g,new Vg(t))};rs.prototype.ua=function(){tn(this.g,"b")};Ll.prototype.createWebChannel=Ll.prototype.g;Pn.prototype.send=Pn.prototype.u;Pn.prototype.open=Pn.prototype.m;Pn.prototype.close=Pn.prototype.close;_l.NO_ERROR=0;_l.TIMEOUT=8;_l.HTTP_ERROR=6;tg.COMPLETE="complete";ig.EventType=go;go.OPEN="a";go.CLOSE="b";go.ERROR="c";go.MESSAGE="d";Ht.prototype.listen=Ht.prototype.N;Lt.prototype.listenOnce=Lt.prototype.O;Lt.prototype.getLastError=Lt.prototype.La;Lt.prototype.getLastErrorCode=Lt.prototype.Da;Lt.prototype.getStatus=Lt.prototype.ba;Lt.prototype.getResponseJson=Lt.prototype.Qa;Lt.prototype.getResponseText=Lt.prototype.ga;Lt.prototype.send=Lt.prototype.ea;var k1=function(){return new Ll},R1=function(){return gl()},Nh=_l,O1=tg,L1=lr,Bg={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},M1=wo,Ml=ig,N1=Lt;const Hg="@firebase/firestore";/**
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
 */class Cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Cn.UNAUTHENTICATED=new Cn(null),Cn.GOOGLE_CREDENTIALS=new Cn("google-credentials-uid"),Cn.FIRST_PARTY=new Cn("first-party-uid"),Cn.MOCK_USER=new Cn("mock-user");/**
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
 */let ss="9.5.0";/**
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
 */const fr=new Wa("@firebase/firestore");function qg(){return fr.logLevel}function ae(t,...e){if(fr.logLevel<=je.DEBUG){const n=e.map(Ph);fr.debug(`Firestore (${ss}): ${t}`,...n)}}function Ni(t,...e){if(fr.logLevel<=je.ERROR){const n=e.map(Ph);fr.error(`Firestore (${ss}): ${t}`,...n)}}function Wg(t,...e){if(fr.logLevel<=je.WARN){const n=e.map(Ph);fr.warn(`Firestore (${ss}): ${t}`,...n)}}function Ph(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ye(t="Unexpected state"){const e=`FIRESTORE (${ss}) INTERNAL ASSERTION FAILED: `+t;throw Ni(e),new Error(e)}function ct(t,e){t||ye()}function be(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class P1{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class D1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Cn.UNAUTHENTICATED))}shutdown(){}}class F1{constructor(e){this.t=e,this.currentUser=Cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new li;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new li,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{ae("FirebaseCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ae("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new li)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(ae("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ct(typeof i.accessToken=="string"),new P1(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ct(e===null||typeof e=="string"),new Cn(e)}}class x1{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=Cn.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class U1{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new x1(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */function j1(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */Dh.T=-1;class Gg{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=j1(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function Ye(t,e){return t<e?-1:t>e?1:0}function os(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
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
 */class Dn{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Dn.fromMillis(Date.now())}static fromDate(e){return Dn.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Dn(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ye(this.nanoseconds,e.nanoseconds):Ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Xe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Xe(e)}static min(){return new Xe(new Dn(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function zg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ko{constructor(e,n,i){n===void 0?n=0:n>e.length&&ye(),i===void 0?i=e.length-n:i>e.length-n&&ye(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return ko.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ko?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Et extends ko{construct(e,n,i){return new Et(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new te(U.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Et(n)}static emptyPath(){return new Et([])}}const V1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Sn extends ko{construct(e,n,i){return new Sn(e,n,i)}static isValidIdentifier(e){return V1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Sn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Sn(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new te(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new te(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new te(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new te(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Sn(n)}static emptyPath(){return new Sn([])}}/**
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
 */class Ro{constructor(e){this.fields=e,e.sort(Sn.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return os(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class cn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new cn(n)}static fromUint8Array(e){const n=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new cn(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}cn.EMPTY_BYTE_STRING=new cn("");const B1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pi(t){if(ct(!!t),typeof t=="string"){let e=0;const n=B1.exec(t);if(ct(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Mt(t.seconds),nanos:Mt(t.nanos)}}function Mt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function as(t){return typeof t=="string"?cn.fromBase64String(t):cn.fromUint8Array(t)}/**
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
 */function ls(t){return t==null}function Nl(t){return t===0&&1/t==-1/0}function H1(t){return typeof t=="number"&&Number.isInteger(t)&&!Nl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(Et.fromString(e))}static fromName(e){return new me(Et.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Et.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new Et(e.slice()))}}/**
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
 */function mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xg(t)?4:10:ye()}function Zn(t,e){const n=mr(t);if(n!==mr(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oo(t).isEqual(Oo(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=Pi(i.timestampValue),o=Pi(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return as(i.bytesValue).isEqual(as(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Mt(i.geoPointValue.latitude)===Mt(r.geoPointValue.latitude)&&Mt(i.geoPointValue.longitude)===Mt(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Mt(i.integerValue)===Mt(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=Mt(i.doubleValue),o=Mt(r.doubleValue);return s===o?Nl(s)===Nl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return os(t.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(zg(s)!==zg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Zn(s[a],o[a])))return!1;return!0}(t,e);default:return ye()}}function Lo(t,e){return(t.values||[]).find(n=>Zn(n,e))!==void 0}function cs(t,e){const n=mr(t),i=mr(e);if(n!==i)return Ye(n,i);switch(n){case 0:return 0;case 1:return Ye(t.booleanValue,e.booleanValue);case 2:return function(r,s){const o=Mt(r.integerValue||r.doubleValue),a=Mt(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Yg(t.timestampValue,e.timestampValue);case 4:return Yg(Oo(t),Oo(e));case 5:return Ye(t.stringValue,e.stringValue);case 6:return function(r,s){const o=as(r),a=as(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Ye(o[l],a[l]);if(c!==0)return c}return Ye(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const o=Ye(Mt(r.latitude),Mt(s.latitude));return o!==0?o:Ye(Mt(r.longitude),Mt(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=cs(o[l],a[l]);if(c)return c}return Ye(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){const o=r.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=Ye(a[u],c[u]);if(h!==0)return h;const d=cs(o[a[u]],l[c[u]]);if(d!==0)return d}return Ye(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ye()}}function Yg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ye(t,e);const n=Pi(t),i=Pi(e),r=Ye(n.seconds,i.seconds);return r!==0?r:Ye(n.nanos,i.nanos)}function Fh(t){return xh(t)}function xh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=Pi(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?as(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,me.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=xh(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${xh(i.fields[a])}`;return s+"}"}(t.mapValue):ye();var e,n}function Uh(t){return!!t&&"integerValue"in t}function jh(t){return!!t&&"arrayValue"in t}function Jg(t){return!!t&&"nullValue"in t}function Zg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pl(t){return!!t&&"mapValue"in t}function Mo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return pr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Mo(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mo(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class Fn{constructor(e){this.value=e}static empty(){return new Fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Pl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mo(n)}setAll(e){let n=Sn.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=Mo(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());Pl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];Pl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){pr(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new Fn(Mo(this.value))}}function $g(t){const e=[];return pr(t.fields,(n,i)=>{const r=new Sn([n]);if(Pl(i)){const s=$g(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new Ro(e)}/**
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
 */class un{constructor(e,n,i,r,s){this.key=e,this.documentType=n,this.version=i,this.data=r,this.documentState=s}static newInvalidDocument(e){return new un(e,0,Xe.min(),Fn.empty(),0)}static newFoundDocument(e,n,i){return new un(e,1,n,i,0)}static newNoDocument(e,n){return new un(e,2,n,Fn.empty(),0)}static newUnknownDocument(e,n){return new un(e,3,n,Fn.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Fn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof un&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new un(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class q1{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.A=null}}function e_(t,e=null,n=[],i=[],r=null,s=null,o=null){return new q1(t,e,n,i,r,s,o)}function Vh(t){const e=be(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>G1(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),ls(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Dl(e.startAt)),e.endAt&&(n+="|ub:",n+=Dl(e.endAt)),e.A=n}return e.A}function W1(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${Fh(i.value)}`;var i}).join(", ")}]`),ls(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Dl(t.startAt)),t.endAt&&(e+=", endAt: "+Dl(t.endAt)),`Target(${e})`}function Bh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!$1(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!Zn(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!i_(t.startAt,e.startAt)&&i_(t.endAt,e.endAt)}function Hh(t){return me.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class An extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,i):new z1(e,n,i):n==="array-contains"?new Q1(e,i):n==="in"?new Y1(e,i):n==="not-in"?new J1(e,i):n==="array-contains-any"?new Z1(e,i):new An(e,n,i)}static R(e,n,i){return n==="in"?new K1(e,i):new X1(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(cs(n,this.value)):n!==null&&mr(this.value)===mr(n)&&this.P(cs(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function G1(t){return t.field.canonicalString()+t.op.toString()+Fh(t.value)}class z1 extends An{constructor(e,n,i){super(e,n,i),this.key=me.fromName(i.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.P(n)}}class K1 extends An{constructor(e,n){super(e,"in",n),this.keys=t_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class X1 extends An{constructor(e,n){super(e,"not-in",n),this.keys=t_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function t_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>me.fromName(i.referenceValue))}class Q1 extends An{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jh(n)&&Lo(n.arrayValue,this.value)}}class Y1 extends An{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lo(this.value.arrayValue,n)}}class J1 extends An{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Lo(this.value.arrayValue,n)}}class Z1 extends An{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Lo(this.value.arrayValue,i))}}class qh{constructor(e,n){this.position=e,this.before=n}}function Dl(t){return`${t.before?"b":"a"}:${t.position.map(e=>Fh(e)).join(",")}`}class us{constructor(e,n="asc"){this.field=e,this.dir=n}}function $1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function n_(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=me.comparator(me.fromName(o.referenceValue),n.key):i=cs(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return t.before?i<=0:i<0}function i_(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class No{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.V=null,this.S=null,this.startAt,this.endAt}}function eA(t,e,n,i,r,s,o,a){return new No(t,e,n,i,r,s,o,a)}function Fl(t){return new No(t)}function xl(t){return!ls(t.limit)&&t.limitType==="F"}function Ul(t){return!ls(t.limit)&&t.limitType==="L"}function r_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function s_(t){for(const e of t.filters)if(e.v())return e.field;return null}function tA(t){return t.collectionGroup!==null}function Po(t){const e=be(t);if(e.V===null){e.V=[];const n=s_(e),i=r_(e);if(n!==null&&i===null)n.isKeyField()||e.V.push(new us(n)),e.V.push(new us(Sn.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.V.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new us(Sn.keyField(),s))}}}return e.V}function gr(t){const e=be(t);if(!e.S)if(e.limitType==="F")e.S=e_(e.path,e.collectionGroup,Po(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Po(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new us(s.field,o))}const i=e.endAt?new qh(e.endAt.position,!e.endAt.before):null,r=e.startAt?new qh(e.startAt.position,!e.startAt.before):null;e.S=e_(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e.S}function nA(t,e,n){return new No(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jl(t,e){return Bh(gr(t),gr(e))&&t.limitType===e.limitType}function o_(t){return`${Vh(gr(t))}|lt:${t.limitType}`}function Wh(t){return`Query(target=${W1(gr(t))}; limitType=${t.limitType})`}function Vl(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):me.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!n_(n.startAt,Po(n),i)||n.endAt&&n_(n.endAt,Po(n),i))}(t,e)}function a_(t){return(e,n)=>{let i=!1;for(const r of Po(t)){const s=iA(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function iA(t,e,n){const i=t.field.isKeyField()?me.comparator(e.key,n.key):function(r,s,o){const a=s.data.field(r),l=o.data.field(r);return a!==null&&l!==null?cs(a,l):ye()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return ye()}}/**
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
 */function l_(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nl(e)?"-0":e}}function c_(t){return{integerValue:""+t}}function rA(t,e){return H1(e)?c_(e):l_(t,e)}/**
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
 */class Bl{constructor(){this._=void 0}}function sA(t,e,n){return t instanceof Do?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&(s.fields.__previous_value__=r),{mapValue:s}}(n,e):t instanceof hs?h_(t,e):t instanceof Fo?d_(t,e):function(i,r){const s=u_(i,r),o=f_(s)+f_(i.C);return Uh(s)&&Uh(i.C)?c_(o):l_(i.N,o)}(t,e)}function oA(t,e,n){return t instanceof hs?h_(t,e):t instanceof Fo?d_(t,e):n}function u_(t,e){return t instanceof Hl?Uh(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Do extends Bl{}class hs extends Bl{constructor(e){super(),this.elements=e}}function h_(t,e){const n=p_(e);for(const i of t.elements)n.some(r=>Zn(r,i))||n.push(i);return{arrayValue:{values:n}}}class Fo extends Bl{constructor(e){super(),this.elements=e}}function d_(t,e){let n=p_(e);for(const i of t.elements)n=n.filter(r=>!Zn(r,i));return{arrayValue:{values:n}}}class Hl extends Bl{constructor(e,n){super(),this.N=e,this.C=n}}function f_(t){return Mt(t.integerValue||t.doubleValue)}function p_(t){return jh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class m_{constructor(e,n){this.field=e,this.transform=n}}function aA(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof hs&&i instanceof hs||n instanceof Fo&&i instanceof Fo?os(n.elements,i.elements,Zn):n instanceof Hl&&i instanceof Hl?Zn(n.C,i.C):n instanceof Do&&i instanceof Do}(t.transform,e.transform)}class lA{constructor(e,n){this.version=e,this.transformResults=n}}class zn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zn}static exists(e){return new zn(void 0,e)}static updateTime(e){return new zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ql(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wl{}function cA(t,e,n){t instanceof Gl?function(i,r,s){const o=i.value.clone(),a=y_(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof _r?function(i,r,s){if(!ql(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=y_(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(v_(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Gh(t,e,n){t instanceof Gl?function(i,r,s){if(!ql(i.precondition,r))return;const o=i.value.clone(),a=b_(i.fieldTransforms,s,r);o.setAll(a),r.convertToFoundDocument(__(r),o).setHasLocalMutations()}(t,e,n):t instanceof _r?function(i,r,s){if(!ql(i.precondition,r))return;const o=b_(i.fieldTransforms,s,r),a=r.data;a.setAll(v_(i)),a.setAll(o),r.convertToFoundDocument(__(r),a).setHasLocalMutations()}(t,e,n):function(i,r){ql(i.precondition,r)&&r.convertToNoDocument(Xe.min())}(t,e)}function uA(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=u_(i.transform,r||null);s!=null&&(n==null&&(n=Fn.empty()),n.set(i.field,s))}return n||null}function g_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&os(n,i,(r,s)=>aA(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function __(t){return t.isFoundDocument()?t.version:Xe.min()}class Gl extends Wl{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}}class _r extends Wl{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}}function v_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function y_(t,e,n){const i=new Map;ct(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,oA(o,a,n[r]))}return i}function b_(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,sA(s,o,e))}return i}class zh extends Wl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class hA extends Wl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class dA{constructor(e){this.count=e}}/**
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
 */var Nt,Fe;function fA(t){switch(t){default:return ye();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function I_(t){if(t===void 0)return Ni("GRPC error has no .code"),U.UNKNOWN;switch(t){case Nt.OK:return U.OK;case Nt.CANCELLED:return U.CANCELLED;case Nt.UNKNOWN:return U.UNKNOWN;case Nt.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Nt.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Nt.INTERNAL:return U.INTERNAL;case Nt.UNAVAILABLE:return U.UNAVAILABLE;case Nt.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Nt.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Nt.NOT_FOUND:return U.NOT_FOUND;case Nt.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Nt.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Nt.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Nt.ABORTED:return U.ABORTED;case Nt.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Nt.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Nt.DATA_LOSS:return U.DATA_LOSS;default:return ye()}}(Fe=Nt||(Nt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class hn{constructor(e,n){this.comparator=e,this.root=n||nn.EMPTY}insert(e,n){return new hn(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nn.BLACK,null,null))}remove(e){return new hn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zl(this.root,e,this.comparator,!1)}getReverseIterator(){return new zl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zl(this.root,e,this.comparator,!0)}}class zl{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nn{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:nn.RED,this.left=r!=null?r:nn.EMPTY,this.right=s!=null?s:nn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new nn(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return nn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return nn.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ye();const e=this.left.check();if(e!==this.right.check())throw ye();return e+(this.isRed()?0:1)}}nn.EMPTY=null,nn.RED=!0,nn.BLACK=!1;nn.EMPTY=new class{constructor(){this.size=0}get key(){throw ye()}get value(){throw ye()}get color(){throw ye()}get left(){throw ye()}get right(){throw ye()}copy(t,e,n,i,r){return this}insert(t,e,n){return new nn(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rn{constructor(e){this.comparator=e,this.data=new hn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new E_(this.data.getIterator())}getIteratorFrom(e){return new E_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof rn)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rn(this.comparator);return n.data=e,n}}class E_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const pA=new hn(me.comparator);function vr(){return pA}const mA=new hn(me.comparator);function Kh(){return mA}const gA=new hn(me.comparator);function _A(){return gA}const vA=new rn(me.comparator);function gt(...t){let e=vA;for(const n of t)e=e.add(n);return e}const yA=new rn(Ye);function w_(){return yA}/**
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
 */class Kl{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const i=new Map;return i.set(e,xo.createSynthesizedTargetChangeForCurrentChange(e,n)),new Kl(Xe.min(),i,w_(),vr(),gt())}}class xo{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new xo(cn.EMPTY_BYTE_STRING,n,gt(),gt(),gt())}}/**
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
 */class Xl{constructor(e,n,i,r){this.k=e,this.removedTargetIds=n,this.key=i,this.$=r}}class T_{constructor(e,n){this.targetId=e,this.O=n}}class C_{constructor(e,n,i=cn.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class S_{constructor(){this.F=0,this.M=k_(),this.L=cn.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=gt(),n=gt(),i=gt();return this.M.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:ye()}}),new xo(this.L,this.B,e,n,i)}G(){this.U=!1,this.M=k_()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class bA{constructor(e){this.tt=e,this.et=new Map,this.nt=vr(),this.st=A_(),this.it=new rn(Ye)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.ct(n,e.key,e.$);for(const n of e.removedTargetIds)this.ct(n,e.key,e.$)}at(e){this.forEachTarget(e,n=>{const i=this.ut(n);switch(e.state){case 0:this.ht(n)&&i.j(e.resumeToken);break;case 1:i.X(),i.q||i.G(),i.j(e.resumeToken);break;case 2:i.X(),i.q||this.removeTarget(n);break;case 3:this.ht(n)&&(i.Z(),i.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),i.j(e.resumeToken));break;default:ye()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((i,r)=>{this.ht(r)&&n(r)})}ft(e){const n=e.targetId,i=e.O.count,r=this.dt(n);if(r){const s=r.target;if(Hh(s))if(i===0){const o=new me(s.path);this.ct(n,o,un.newNoDocument(o,Xe.min()))}else ct(i===1);else this.wt(n)!==i&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((s,o)=>{const a=this.dt(o);if(a){if(s.current&&Hh(a.target)){const l=new me(a.target.path);this.nt.get(l)!==null||this.gt(o,l)||this.ct(o,l,un.newNoDocument(l,e))}s.K&&(n.set(o,s.W()),s.G())}});let i=gt();this.st.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.dt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(s))});const r=new Kl(e,n,this.it,this.nt,i);return this.nt=vr(),this.st=A_(),this.it=new rn(Ye),r}ot(e,n){if(!this.ht(e))return;const i=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,i),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}ct(e,n,i){if(!this.ht(e))return;const r=this.ut(e);this.gt(e,n)?r.H(n,1):r.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),i&&(this.nt=this.nt.insert(n,i))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new S_,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new rn(Ye),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||ae("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new S_),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function A_(){return new hn(me.comparator)}function k_(){return new hn(me.comparator)}/**
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
 */const IA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),EA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class wA{constructor(e,n){this.databaseId=e,this.D=n}}function Ql(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function R_(t,e){return t.D?e.toBase64():e.toUint8Array()}function TA(t,e){return Ql(t,e.toTimestamp())}function ci(t){return ct(!!t),Xe.fromTimestamp(function(e){const n=Pi(e);return new Dn(n.seconds,n.nanos)}(t))}function Xh(t,e){return function(n){return new Et(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function O_(t){const e=Et.fromString(t);return ct(F_(e)),e}function Qh(t,e){return Xh(t.databaseId,e.path)}function Yh(t,e){const n=O_(e);if(n.get(1)!==t.databaseId.projectId)throw new te(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new me(L_(n))}function Jh(t,e){return Xh(t.databaseId,e)}function CA(t){const e=O_(t);return e.length===4?Et.emptyPath():L_(e)}function Zh(t){return new Et(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function L_(t){return ct(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function M_(t,e,n){return{name:Qh(t,e),fields:n.value.mapValue.fields}}function SA(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ye()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(l,c){return l.D?(ct(c===void 0||typeof c=="string"),cn.fromBase64String(c||"")):(ct(c===void 0||c instanceof Uint8Array),cn.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?U.UNKNOWN:I_(l.code);return new te(c,l.message||"")}(o);n=new C_(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Yh(t,i.document.name),s=ci(i.document.updateTime),o=new Fn({mapValue:{fields:i.document.fields}}),a=un.newFoundDocument(r,s,o),l=i.targetIds||[],c=i.removedTargetIds||[];n=new Xl(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Yh(t,i.document),s=i.readTime?ci(i.readTime):Xe.min(),o=un.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Xl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Yh(t,i.document),s=i.removedTargetIds||[];n=new Xl([],s,r,null)}else{if(!("filter"in e))return ye();{e.filter;const i=e.filter;i.targetId;const r=i.count||0,s=new dA(r),o=i.targetId;n=new T_(o,s)}}return n}function AA(t,e){let n;if(e instanceof Gl)n={update:M_(t,e.key,e.value)};else if(e instanceof zh)n={delete:Qh(t,e.key)};else if(e instanceof _r)n={update:M_(t,e.key,e.data),updateMask:xA(e.fieldMask)};else{if(!(e instanceof hA))return ye();n={verify:Qh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof Do)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof hs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Fo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Hl)return{fieldPath:s.field.canonicalString(),increment:o.C};throw ye()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:TA(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:ye()}(t,e.precondition)),n}function kA(t,e){return t&&t.length>0?(ct(e!==void 0),t.map(n=>function(i,r){let s=i.updateTime?ci(i.updateTime):ci(r);return s.isEqual(Xe.min())&&(s=ci(r)),new lA(s,i.transformResults||[])}(n,e))):[]}function RA(t,e){return{documents:[Jh(t,e.path)]}}function OA(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Jh(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jh(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(a){if(a.length===0)return;const l=a.map(c=>function(u){if(u.op==="=="){if(Zg(u.value))return{unaryFilter:{field:ds(u.field),op:"IS_NAN"}};if(Jg(u.value))return{unaryFilter:{field:ds(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(Zg(u.value))return{unaryFilter:{field:ds(u.field),op:"IS_NOT_NAN"}};if(Jg(u.value))return{unaryFilter:{field:ds(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ds(u.field),op:PA(u.op),value:u.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const s=function(a){if(a.length!==0)return a.map(l=>function(c){return{field:ds(c.field),direction:NA(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,l){return a.D||ls(l)?l:{value:l}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=P_(e.startAt)),e.endAt&&(n.structuredQuery.endAt=P_(e.endAt)),n}function LA(t){let e=CA(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){ct(i===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=N_(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new us(fs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ls(h)?null:h}(n.limit));let l=null;n.startAt&&(l=D_(n.startAt));let c=null;return n.endAt&&(c=D_(n.endAt)),eA(e,r,o,s,a,"F",l,c)}function MA(t,e){const n=function(i,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ye()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function N_(t){return t?t.unaryFilter!==void 0?[FA(t)]:t.fieldFilter!==void 0?[DA(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>N_(e)).reduce((e,n)=>e.concat(n)):ye():[]}function P_(t){return{before:t.before,values:t.position}}function D_(t){const e=!!t.before,n=t.values||[];return new qh(n,e)}function NA(t){return IA[t]}function PA(t){return EA[t]}function ds(t){return{fieldPath:t.canonicalString()}}function fs(t){return Sn.fromServerFormat(t.fieldPath)}function DA(t){return An.create(fs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ye()}}(t.fieldFilter.op),t.fieldFilter.value)}function FA(t){switch(t.unaryFilter.op){case"IS_NAN":const e=fs(t.unaryFilter.field);return An.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=fs(t.unaryFilter.field);return An.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=fs(t.unaryFilter.field);return An.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=fs(t.unaryFilter.field);return An.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ye()}}function xA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function F_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const UA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ye(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Q((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof Q?n:Q.resolve(n)}catch(n){return Q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):Q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):Q.reject(n)}static resolve(e){return new Q((n,i)=>{n(e)})}static reject(e){return new Q((n,i)=>{i(e)})}static waitFor(e){return new Q((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},l=>i(l))}),o=!0,s===r&&n()})}static or(e){let n=Q.resolve(!1);for(const i of e)n=n.next(r=>r?Q.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}}function Uo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class VA{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&cA(s,e,i[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Gh(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Gh(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const i=e.get(n.key),r=i;this.applyToLocalView(r),i.isValidDocument()||r.convertToNoDocument(Xe.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),gt())}isEqual(e){return this.batchId===e.batchId&&os(this.mutations,e.mutations,(n,i)=>g_(n,i))&&os(this.baseMutations,e.baseMutations,(n,i)=>g_(n,i))}}class $h{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){ct(e.mutations.length===i.length);let r=_A();const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new $h(e,n,i,r)}}/**
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
 */class yr{constructor(e,n,i,r,s=Xe.min(),o=Xe.min(),a=cn.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class BA{constructor(e){this.Wt=e}}function HA(t){const e=LA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nA(e,e.limit,"L"):e}/**
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
 */class qA{constructor(){this.Gt=new WA}addToCollectionParentIndex(e,n){return this.Gt.add(n),Q.resolve()}getCollectionParents(e,n){return Q.resolve(this.Gt.getEntries(n))}}class WA{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new rn(Et.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new rn(Et.comparator)).toArray()}}/**
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
 */class ps{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new ps(0)}static ie(){return new ps(-1)}}/**
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
 */async function jo(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==UA)throw t;ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Vo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r!==void 0){for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n])}else this.inner[i]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),!0;return!1}forEach(e){pr(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return Kg(this.inner)}}/**
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
 */class GA{constructor(){this.changes=new Vo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:Xe.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:un.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?Q.resolve(i.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class x_{constructor(e,n,i){this.He=e,this.In=n,this.Ht=i}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(i=>this.Rn(e,n,i))}Rn(e,n,i){return this.He.getEntry(e,n).next(r=>{for(const s of i)s.applyToLocalView(r);return r})}bn(e,n){e.forEach((i,r)=>{for(const s of n)s.applyToLocalView(r)})}Pn(e,n){return this.He.getEntries(e,n).next(i=>this.vn(e,i).next(()=>i))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(i=>this.bn(n,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return me.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Vn(e,n.path):tA(n)?this.Sn(e,n,i):this.Dn(e,n,i)}Vn(e,n){return this.An(e,new me(n)).next(i=>{let r=Kh();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}Sn(e,n,i){const r=n.collectionGroup;let s=Kh();return this.Ht.getCollectionParents(e,r).next(o=>Q.forEach(o,a=>{const l=function(c,u){return new No(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.Dn(e,l,i).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}Dn(e,n,i){let r,s;return this.He.getDocumentsMatchingQuery(e,n,i).next(o=>(r=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Cn(e,s,r).next(a=>{r=a;for(const l of s)for(const c of l.mutations){const u=c.key;let h=r.get(u);h==null&&(h=un.newInvalidDocument(u),r=r.insert(u,h)),Gh(c,h,l.localWriteTime),h.isFoundDocument()||(r=r.remove(u))}}))).next(()=>(r.forEach((o,a)=>{Vl(n,a)||(r=r.remove(o))}),r))}Cn(e,n,i){let r=gt();for(const o of n)for(const a of o.mutations)a instanceof _r&&i.get(a.key)===null&&(r=r.add(a.key));let s=i;return this.He.getEntries(e,r).next(o=>(o.forEach((a,l)=>{l.isFoundDocument()&&(s=s.insert(a,l))}),s))}}/**
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
 */class ed{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Nn=i,this.xn=r}static kn(e,n){let i=gt(),r=gt();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new ed(e,n.fromCache,i,r)}}/**
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
 */class zA{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,i,r){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||i.isEqual(Xe.min())?this.Fn(e,n):this.On.Pn(e,r).next(s=>{const o=this.Mn(n,s);return(xl(n)||Ul(n))&&this.Ln(n.limitType,o,r,i)?this.Fn(e,n):(qg()<=je.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Wh(n)),this.On.getDocumentsMatchingQuery(e,n,i).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}Mn(e,n){let i=new rn(a_(e));return n.forEach((r,s)=>{Vl(e,s)&&(i=i.add(s))}),i}Ln(e,n,i,r){if(i.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Fn(e,n){return qg()<=je.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Wh(n)),this.On.getDocumentsMatchingQuery(e,n,Xe.min())}}/**
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
 */class KA{constructor(e,n,i,r){this.persistence=e,this.Bn=n,this.N=r,this.Un=new hn(Ye),this.qn=new Vo(s=>Vh(s),Bh),this.Kn=Xe.min(),this.In=e.getMutationQueue(i),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new x_(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function XA(t,e,n,i){return new KA(t,e,n,i)}async function U_(t,e){const n=be(t);let i=n.In,r=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(l=>(a=l,i=n.persistence.getMutationQueue(e),r=new x_(n.jn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(o))).next(l=>{const c=[],u=[];let h=gt();for(const d of a){c.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}for(const d of l){u.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}return r.Pn(o,h).next(d=>({Wn:d,removedBatchIds:c,addedBatchIds:u}))})});return n.In=i,n.Qn=r,n.Bn.$n(n.Qn),s}function QA(t,e){const n=be(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=Q.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(p=>{const g=l.docVersions.get(f);ct(g!==null),p.version.compareTo(g)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&c.addEntry(p,l.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,u))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.In.performConsistencyCheck(i)).next(()=>n.Qn.Pn(i,r))})}function j_(t){const e=be(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function YA(t,e){const n=be(t),i=e.snapshotVersion;let r=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});r=n.Un;const a=[];e.targetChanges.forEach((c,u)=>{const h=r.get(u);if(!h)return;a.push(n.ze.removeMatchingKeys(s,c.removedDocuments,u).next(()=>n.ze.addMatchingKeys(s,c.addedDocuments,u)));const d=c.resumeToken;if(d.approximateByteSize()>0){const f=h.withResumeToken(d,i).withSequenceNumber(s.currentSequenceNumber);r=r.insert(u,f),function(p,g,m){return ct(g.resumeToken.approximateByteSize()>0),p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(h,f,c)&&a.push(n.ze.updateTargetData(s,f))}});let l=vr();if(e.documentUpdates.forEach((c,u)=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(JA(s,o,e.documentUpdates,i,void 0).next(c=>{l=c})),!i.isEqual(Xe.min())){const c=n.ze.getLastRemoteSnapshotVersion(s).next(u=>n.ze.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(c)}return Q.waitFor(a).next(()=>o.apply(s)).next(()=>n.Qn.vn(s,l)).next(()=>l)}).then(s=>(n.Un=r,s))}function JA(t,e,n,i,r){let s=gt();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=vr();return n.forEach((l,c)=>{const u=o.get(l),h=(r==null?void 0:r.get(l))||i;c.isNoDocument()&&c.version.isEqual(Xe.min())?(e.removeEntry(l,h),a=a.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c,h),a=a.insert(l,c)):ae("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),a})}function ZA(t,e){const n=be(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(i,e)))}function $A(t,e){const n=be(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.ze.getTargetData(i,e).next(s=>s?(r=s,Q.resolve(r)):n.ze.allocateTargetId(i).next(o=>(r=new yr(e,o,0,i.currentSequenceNumber),n.ze.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.Un.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(i.targetId,i),n.qn.set(e,i.targetId)),i})}async function td(t,e,n){const i=be(t),r=i.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Uo(o))throw o;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Un=i.Un.remove(e),i.qn.delete(r.target)}function V_(t,e,n){const i=be(t);let r=Xe.min(),s=gt();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=be(a),h=u.qn.get(c);return h!==void 0?Q.resolve(u.Un.get(h)):u.ze.getTargetData(l,c)}(i,o,gr(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.ze.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>i.Bn.getDocumentsMatchingQuery(o,e,n?r:Xe.min(),n?s:gt())).next(a=>({documents:a,Gn:s})))}/**
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
 */class ek{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return Q.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var i;return this.Yn.set(n.id,{id:(i=n).id,version:i.version,createTime:ci(i.createTime)}),Q.resolve()}getNamedQuery(e,n){return Q.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:HA(i.bundledQuery),readTime:ci(i.readTime)}}(n)),Q.resolve()}}/**
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
 */class nd{constructor(){this.Zn=new rn(qt.ts),this.es=new rn(qt.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const i=new qt(e,n);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.rs(new qt(e,n))}os(e,n){e.forEach(i=>this.removeReference(i,n))}cs(e){const n=new me(new Et([])),i=new qt(n,e),r=new qt(n,e+1),s=[];return this.es.forEachInRange([i,r],o=>{this.rs(o),s.push(o.key)}),s}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new me(new Et([])),i=new qt(n,e),r=new qt(n,e+1);let s=gt();return this.es.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new qt(e,0),i=this.Zn.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class qt{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return me.comparator(e.key,n.key)||Ye(e.ls,n.ls)}static ns(e,n){return Ye(e.ls,n.ls)||me.comparator(e.key,n.key)}}/**
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
 */class tk{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new rn(qt.ts)}checkEmpty(e){return Q.resolve(this.In.length===0)}addMutationBatch(e,n,i,r){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new VA(s,n,i,r);this.In.push(o);for(const a of r)this.ds=this.ds.add(new qt(a.key,s)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return Q.resolve(o)}lookupMutationBatch(e,n){return Q.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this._s(i),s=r<0?0:r;return Q.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return Q.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new qt(n,0),r=new qt(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([i,r],o=>{const a=this.ws(o.ls);s.push(a)}),Q.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new rn(Ye);return n.forEach(r=>{const s=new qt(r,0),o=new qt(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{i=i.add(a.ls)})}),Q.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;me.isDocumentKey(s)||(s=s.child(""));const o=new qt(new me(s),0);let a=new rn(Ye);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.ls)),!0)},o),Q.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(i=>{const r=this.ws(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ct(this.ys(n.batchId,"removed")===0),this.In.shift();let i=this.ds;return Q.forEach(n.mutations,r=>{const s=new qt(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=i})}te(e){}containsKey(e,n){const i=new qt(n,0),r=this.ds.firstAfterOrEqual(i);return Q.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.In.length,Q.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
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
 */class nk{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new hn(me.comparator),this.size=0}addEntry(e,n,i){const r=n.key,s=this.docs.get(r),o=s?s.size:0,a=this.ps(n);return this.docs=this.docs.insert(r,{document:n.clone(),size:a,readTime:i}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return Q.resolve(i?i.document.clone():un.newInvalidDocument(n))}getEntries(e,n){let i=vr();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.clone():un.newInvalidDocument(r))}),Q.resolve(i)}getDocumentsMatchingQuery(e,n,i){let r=vr();const s=new me(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l,readTime:c}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;c.compareTo(i)<=0||Vl(n,l)&&(r=r.insert(l.key,l.clone()))}return Q.resolve(r)}Ts(e,n){return Q.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new ik(this)}getSize(e){return Q.resolve(this.size)}}class ik extends GA{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.document.isValidDocument()?n.push(this.Se.addEntry(e,r.document,this.getReadTime(i))):this.Se.removeEntry(i)}),Q.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
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
 */class rk{constructor(e){this.persistence=e,this.Es=new Vo(n=>Vh(n),Bh),this.lastRemoteSnapshotVersion=Xe.min(),this.highestTargetId=0,this.Is=0,this.As=new nd,this.targetCount=0,this.Rs=ps.se()}forEachTarget(e,n){return this.Es.forEach((i,r)=>n(r)),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Is&&(this.Is=n),Q.resolve()}ce(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new ps(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,Q.resolve()}updateTargetData(e,n){return this.ce(n),Q.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Es.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),Q.waitFor(s).next(()=>r)}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,n){const i=this.Es.get(n)||null;return Q.resolve(i)}addMatchingKeys(e,n,i){return this.As.ss(n,i),Q.resolve()}removeMatchingKeys(e,n,i){this.As.os(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),Q.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),Q.resolve()}getMatchingKeysForTargetId(e,n){const i=this.As.hs(n);return Q.resolve(i)}containsKey(e,n){return Q.resolve(this.As.containsKey(n))}}/**
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
 */class sk{constructor(e,n){this.bs={},this.Le=new Dh(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new rk(this),this.Ht=new qA,this.He=function(i,r){return new nk(i,r)}(this.Ht,i=>this.referenceDelegate.Ps(i)),this.N=new BA(n),this.Je=new ek(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new tk(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,i){ae("MemoryPersistence","Starting transaction:",e);const r=new ok(this.Le.next());return this.referenceDelegate.vs(),i(r).next(s=>this.referenceDelegate.Vs(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Ss(e,n){return Q.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,n)))}}class ok extends jA{constructor(e){super(),this.currentSequenceNumber=e}}class id{constructor(e){this.persistence=e,this.Ds=new nd,this.Cs=null}static Ns(e){return new id(e)}get xs(){if(this.Cs)return this.Cs;throw ye()}addReference(e,n,i){return this.Ds.addReference(i,n),this.xs.delete(i.toString()),Q.resolve()}removeReference(e,n,i){return this.Ds.removeReference(i,n),this.xs.add(i.toString()),Q.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),Q.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(r=>this.xs.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.xs.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.xs,i=>{const r=me.fromPath(i);return this.ks(e,r).next(s=>{s||n.removeEntry(r)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(i=>{i?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return Q.or([()=>Q.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class B_{constructor(){this.activeTargetIds=w_()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ak{constructor(){this.yi=new B_,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,i){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new B_,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class lk{Ti(e){}shutdown(){}}/**
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
 */class H_{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const ck={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class uk{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
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
 */class hk extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,i,r){const s=this.Bi(e,n);ae("RestConnection","Sending: ",s,i);const o={};return this.Ui(o,r),this.qi(e,s,o,i).then(a=>(ae("RestConnection","Received: ",a),a),a=>{throw Wg("RestConnection",`${e} failed with error: `,a,"url: ",s,"request:",i),a})}Ki(e,n,i,r){return this.Li(e,n,i,r)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+ss,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const i in n.authHeaders)n.authHeaders.hasOwnProperty(i)&&(e[i]=n.authHeaders[i])}Bi(e,n){const i=ck[e];return`${this.Fi}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,i,r){return new Promise((s,o)=>{const a=new N1;a.listenOnce(O1.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Nh.NO_ERROR:const c=a.getResponseJson();ae("Connection","XHR received:",JSON.stringify(c)),s(c);break;case Nh.TIMEOUT:ae("Connection",'RPC "'+e+'" timed out'),o(new te(U.DEADLINE_EXCEEDED,"Request time out"));break;case Nh.HTTP_ERROR:const u=a.getStatus();if(ae("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const p=f.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(p)>=0?p:U.UNKNOWN}(h.status);o(new te(d,h.message))}else o(new te(U.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new te(U.UNAVAILABLE,"Connection failed."));break;default:ye()}}finally{ae("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(r);a.send(n,"POST",l,i,15)})}ji(e,n){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=k1(),s=R1(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new M1({})),this.Ui(o.initMessageHeaders,n),ja()||Iu()||w0()||Op()||T0()||Rp()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");ae("Connection","Creating WebChannel: "+a,o);const l=r.createWebChannel(a,o);let c=!1,u=!1;const h=new uk({vi:f=>{u?ae("Connection","Not sending because WebChannel is closed:",f):(c||(ae("Connection","Opening WebChannel transport."),l.open(),c=!0),ae("Connection","WebChannel sending:",f),l.send(f))},Vi:()=>l.close()}),d=(f,p,g)=>{f.listen(p,m=>{try{g(m)}catch(v){setTimeout(()=>{throw v},0)}})};return d(l,Ml.EventType.OPEN,()=>{u||ae("Connection","WebChannel transport opened.")}),d(l,Ml.EventType.CLOSE,()=>{u||(u=!0,ae("Connection","WebChannel transport closed"),h.$i())}),d(l,Ml.EventType.ERROR,f=>{u||(u=!0,Wg("Connection","WebChannel transport errored:",f),h.$i(new te(U.UNAVAILABLE,"The operation could not be completed")))}),d(l,Ml.EventType.MESSAGE,f=>{var p;if(!u){const g=f.data[0];ct(!!g);const m=g,v=m.error||((p=m[0])===null||p===void 0?void 0:p.error);if(v){ae("Connection","WebChannel received error:",v);const E=v.status;let I=function(M){const k=Nt[M];if(k!==void 0)return I_(k)}(E),y=v.message;I===void 0&&(I=U.INTERNAL,y="Unknown error status: "+E+" with message "+v.message),u=!0,h.$i(new te(I,y)),l.close()}else ae("Connection","WebChannel received:",g),h.Oi(g)}}),d(s,L1.STAT_EVENT,f=>{f.stat===Bg.PROXY?ae("Connection","Detected buffering proxy"):f.stat===Bg.NOPROXY&&ae("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function rd(){return typeof document!="undefined"?document:null}/**
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
 */function Yl(t){return new wA(t,!0)}class q_{constructor(e,n,i=1e3,r=1.5,s=6e4){this.Oe=e,this.timerId=n,this.Qi=i,this.Wi=r,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),i=Math.max(0,Date.now()-this.Ji),r=Math.max(0,n-i);r>0&&ae("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
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
 */class W_{constructor(e,n,i,r,s,o,a){this.Oe=e,this.er=i,this.nr=r,this.sr=s,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new q_(e,n)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Ni(n.toString()),Ni("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),n=this.ir;this.credentialsProvider.getToken().then(i=>{this.ir===n&&this.Er(i)},i=>{e(()=>{const r=new te(U.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Ir(r)})})}Er(e){const n=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(i=>{n(()=>this.Ir(i))}),this.stream.onMessage(i=>{n(()=>this.onMessage(i))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return n=>{this.Oe.enqueueAndForget(()=>this.ir===e?n():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dk extends W_{constructor(e,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s),this.N=r}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const n=SA(this.N,e),i=function(r){if(!("targetChange"in r))return Xe.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?Xe.min():s.readTime?ci(s.readTime):Xe.min()}(e);return this.listener.Rr(n,i)}br(e){const n={};n.database=Zh(this.N),n.addTarget=function(r,s){let o;const a=s.target;return o=Hh(a)?{documents:RA(r,a)}:{query:OA(r,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=R_(r,s.resumeToken):s.snapshotVersion.compareTo(Xe.min())>0&&(o.readTime=Ql(r,s.snapshotVersion.toTimestamp())),o}(this.N,e);const i=MA(this.N,e);i&&(n.labels=i),this.mr(n)}Pr(e){const n={};n.database=Zh(this.N),n.removeTarget=e,this.mr(n)}}class fk extends W_{constructor(e,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s),this.N=r,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(ct(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const n=kA(e.writeResults,e.commitTime),i=ci(e.commitTime);return this.listener.Dr(i,n)}return ct(!e.writeResults||e.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=Zh(this.N),this.mr(e)}Sr(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>AA(this.N,i))};this.mr(n)}}/**
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
 */class pk extends class{}{constructor(e,n,i){super(),this.credentials=e,this.sr=n,this.N=i,this.kr=!1}$r(){if(this.kr)throw new te(U.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,i){return this.$r(),this.credentials.getToken().then(r=>this.sr.Li(e,n,i,r)).catch(r=>{throw r.name==="FirebaseError"?(r.code===U.UNAUTHENTICATED&&this.credentials.invalidateToken(),r):new te(U.UNKNOWN,r.toString())})}Ki(e,n,i){return this.$r(),this.credentials.getToken().then(r=>this.sr.Ki(e,n,i,r)).catch(r=>{throw r.name==="FirebaseError"?(r.code===U.UNAUTHENTICATED&&this.credentials.invalidateToken(),r):new te(U.UNKNOWN,r.toString())})}terminate(){this.kr=!0}}class mk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(Ni(n),this.Mr=!1):ae("OnlineStateTracker",n)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
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
 */class gk{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=s,this.zr.Ti(o=>{i.enqueueAndForget(async()=>{br(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=be(a);l.Wr.add(4),await Bo(l),l.Hr.set("Unknown"),l.Wr.delete(4),await Jl(l)}(this))})}),this.Hr=new mk(i,r)}}async function Jl(t){if(br(t))for(const e of t.Gr)await e(!0)}async function Bo(t){for(const e of t.Gr)await e(!1)}function G_(t,e){const n=be(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),ad(n)?od(n):ms(n).hr()&&sd(n,e))}function z_(t,e){const n=be(t),i=ms(n);n.Qr.delete(e),i.hr()&&K_(n,e),n.Qr.size===0&&(i.hr()?i.wr():br(n)&&n.Hr.set("Unknown"))}function sd(t,e){t.Jr.Y(e.targetId),ms(t).br(e)}function K_(t,e){t.Jr.Y(e),ms(t).Pr(e)}function od(t){t.Jr=new bA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),ms(t).start(),t.Hr.Lr()}function ad(t){return br(t)&&!ms(t).ur()&&t.Qr.size>0}function br(t){return be(t).Wr.size===0}function X_(t){t.Jr=void 0}async function _k(t){t.Qr.forEach((e,n)=>{sd(t,e)})}async function vk(t,e){X_(t),ad(t)?(t.Hr.qr(e),od(t)):t.Hr.set("Unknown")}async function yk(t,e,n){if(t.Hr.set("Online"),e instanceof C_&&e.state===2&&e.cause)try{await async function(i,r){const s=r.cause;for(const o of r.targetIds)i.Qr.has(o)&&(await i.remoteSyncer.rejectListen(o,s),i.Qr.delete(o),i.Jr.removeTarget(o))}(t,e)}catch(i){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Zl(t,i)}else if(e instanceof Xl?t.Jr.rt(e):e instanceof T_?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(Xe.min()))try{const i=await j_(t.localStore);n.compareTo(i)>=0&&await function(r,s){const o=r.Jr._t(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.Qr.get(l);c&&r.Qr.set(l,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=r.Qr.get(a);if(!l)return;r.Qr.set(a,l.withResumeToken(cn.EMPTY_BYTE_STRING,l.snapshotVersion)),K_(r,a);const c=new yr(l.target,a,1,l.sequenceNumber);sd(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){ae("RemoteStore","Failed to raise snapshot:",i),await Zl(t,i)}}async function Zl(t,e,n){if(!Uo(e))throw e;t.Wr.add(1),await Bo(t),t.Hr.set("Offline"),n||(n=()=>j_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await Jl(t)})}function Q_(t,e){return e().catch(n=>Zl(t,n,e))}async function $l(t){const e=be(t),n=Di(e);let i=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;bk(e);)try{const r=await ZA(e.localStore,i);if(r===null){e.jr.length===0&&n.wr();break}i=r.batchId,Ik(e,r)}catch(r){await Zl(e,r)}Y_(e)&&J_(e)}function bk(t){return br(t)&&t.jr.length<10}function Ik(t,e){t.jr.push(e);const n=Di(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function Y_(t){return br(t)&&!Di(t).ur()&&t.jr.length>0}function J_(t){Di(t).start()}async function Ek(t){Di(t).Nr()}async function wk(t){const e=Di(t);for(const n of t.jr)e.Sr(n.mutations)}async function Tk(t,e,n){const i=t.jr.shift(),r=$h.from(i,e,n);await Q_(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await $l(t)}async function Ck(t,e){e&&Di(t).Vr&&await async function(n,i){if(r=i.code,fA(r)&&r!==U.ABORTED){const s=n.jr.shift();Di(n).dr(),await Q_(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await $l(n)}var r}(t,e),Y_(t)&&J_(t)}async function Sk(t,e){const n=be(t);e?(n.Wr.delete(2),await Jl(n)):e||(n.Wr.add(2),await Bo(n),n.Hr.set("Unknown"))}function ms(t){return t.Yr||(t.Yr=function(e,n,i){const r=be(e);return r.$r(),new dk(n,r.sr,r.credentials,r.N,i)}(t.datastore,t.asyncQueue,{Si:_k.bind(null,t),Ci:vk.bind(null,t),Rr:yk.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),ad(t)?od(t):t.Hr.set("Unknown")):(await t.Yr.stop(),X_(t))})),t.Yr}function Di(t){return t.Xr||(t.Xr=function(e,n,i){const r=be(e);return r.$r(),new fk(n,r.sr,r.credentials,r.N,i)}(t.datastore,t.asyncQueue,{Si:Ek.bind(null,t),Ci:Ck.bind(null,t),Cr:wk.bind(null,t),Dr:Tk.bind(null,t)}),t.Gr.push(async e=>{e?(t.Xr.dr(),await $l(t)):(await t.Xr.stop(),t.jr.length>0&&(ae("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))})),t.Xr}/**
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
 */class ld{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new ld(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cd(t,e){if(Ni("AsyncQueue",`${e}: ${t}`),Uo(t))return new te(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class gs{constructor(e){this.comparator=e?(n,i)=>e(n,i)||me.comparator(n.key,i.key):(n,i)=>me.comparator(n.key,i.key),this.keyedMap=Kh(),this.sortedSet=new hn(this.comparator)}static emptySet(e){return new gs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new gs;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
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
 */class Z_{constructor(){this.Zr=new hn(me.comparator)}track(e){const n=e.doc.key,i=this.Zr.get(n);i?e.type!==0&&i.type===3?this.Zr=this.Zr.insert(n,e):e.type===3&&i.type!==1?this.Zr=this.Zr.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Zr=this.Zr.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Zr=this.Zr.remove(n):e.type===1&&i.type===2?this.Zr=this.Zr.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):ye():this.Zr=this.Zr.insert(n,e)}eo(){const e=[];return this.Zr.inorderTraversal((n,i)=>{e.push(i)}),e}}class _s{constructor(e,n,i,r,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,i,r){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new _s(e,n,gs.emptySet(n),s,i,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class Ak{constructor(){this.no=void 0,this.listeners=[]}}class kk{constructor(){this.queries=new Vo(e=>o_(e),jl),this.onlineState="Unknown",this.so=new Set}}async function ud(t,e){const n=be(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new Ak),r)try{s.no=await n.onListen(i)}catch(o){const a=cd(o,`Initialization of query '${Wh(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.listeners.push(e),e.io(n.onlineState),s.no&&e.ro(s.no)&&dd(n)}async function hd(t,e){const n=be(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function Rk(t,e){const n=be(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.ro(r)&&(i=!0);o.no=r}}i&&dd(n)}function Ok(t,e,n){const i=be(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function dd(t){t.so.forEach(e=>{e.next()})}class fd{constructor(e,n,i){this.query=e,this.oo=n,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=i||{}}ro(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new _s(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.uo(e)&&(this.oo.next(e),n=!0):this.ho(e,this.onlineState)&&(this.lo(e),n=!0),this.ao=e,n}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let n=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),n=!0),n}ho(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.fo||!i)&&(!e.docs.isEmpty()||n==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const n=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}lo(e){e=_s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
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
 */class $_{constructor(e){this.key=e}}class ev{constructor(e){this.key=e}}class Lk{constructor(e,n){this.query=e,this.po=n,this.To=null,this.current=!1,this.Eo=gt(),this.mutatedKeys=gt(),this.Io=a_(e),this.Ao=new gs(this.Io)}get Ro(){return this.po}bo(e,n){const i=n?n.Po:new Z_,r=n?n.Ao:this.Ao;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=xl(this.query)&&r.size===this.query.limit?r.last():null,c=Ul(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),f=Vl(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),g=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let m=!1;d&&f?d.data.isEqual(f.data)?p!==g&&(i.track({type:3,doc:f}),m=!0):this.vo(d,f)||(i.track({type:2,doc:f}),m=!0,(l&&this.Io(f,l)>0||c&&this.Io(f,c)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),m=!0):d&&!f&&(i.track({type:1,doc:d}),m=!0,(l||c)&&(a=!0)),m&&(f?(o=o.add(f),s=g?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),xl(this.query)||Ul(this.query))for(;o.size>this.query.limit;){const u=xl(this.query)?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),i.track({type:1,doc:u})}return{Ao:o,Po:i,Ln:a,mutatedKeys:s}}vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const r=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const s=e.Po.eo();s.sort((c,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye()}};return f(h)-f(d)}(c.type,u.type)||this.Io(c.doc,u.doc)),this.Vo(i);const o=n?this.So():[],a=this.Eo.size===0&&this.current?1:0,l=a!==this.To;return this.To=a,s.length!==0||l?{snapshot:new _s(this.query,e.Ao,r,s,e.mutatedKeys,a===0,l,!1),Do:o}:{Do:o}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new Z_,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(n=>this.po=this.po.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.po=this.po.delete(n)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=gt(),this.Ao.forEach(i=>{this.Co(i.key)&&(this.Eo=this.Eo.add(i.key))});const n=[];return e.forEach(i=>{this.Eo.has(i)||n.push(new ev(i))}),this.Eo.forEach(i=>{e.has(i)||n.push(new $_(i))}),n}No(e){this.po=e.Gn,this.Eo=gt();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return _s.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class Mk{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class Nk{constructor(e){this.key=e,this.ko=!1}}class Pk{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new Vo(a=>o_(a),jl),this.Fo=new Map,this.Mo=new Set,this.Lo=new hn(me.comparator),this.Bo=new Map,this.Uo=new nd,this.qo={},this.Ko=new Map,this.jo=ps.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function Dk(t,e){const n=Gk(t);let i,r;const s=n.Oo.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.xo();else{const o=await $A(n.localStore,gr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await Fk(n,e,i,a==="current"),n.isPrimaryClient&&G_(n.remoteStore,o)}return r}async function Fk(t,e,n,i){t.Wo=(u,h,d)=>async function(f,p,g,m){let v=p.view.bo(g);v.Ln&&(v=await V_(f.localStore,p.query,!1).then(({documents:y})=>p.view.bo(y,v)));const E=m&&m.targetChanges.get(p.targetId),I=p.view.applyChanges(v,f.isPrimaryClient,E);return ov(f,p.targetId,I.Do),I.snapshot}(t,u,h,d);const r=await V_(t.localStore,e,!0),s=new Lk(e,r.Gn),o=s.bo(r.documents),a=xo.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);ov(t,n,l.Do);const c=new Mk(e,n,s);return t.Oo.set(e,c),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),l.snapshot}async function xk(t,e){const n=be(t),i=n.Oo.get(e),r=n.Fo.get(i.targetId);if(r.length>1)return n.Fo.set(i.targetId,r.filter(s=>!jl(s,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await td(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),z_(n.remoteStore,i.targetId),pd(n,i.targetId)}).catch(jo)):(pd(n,i.targetId),await td(n.localStore,i.targetId,!0))}async function Uk(t,e,n){const i=zk(t);try{const r=await function(s,o){const a=be(s),l=Dn.now(),c=o.reduce((h,d)=>h.add(d.key),gt());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,c).next(d=>{u=d;const f=[];for(const p of o){const g=uA(p,u.get(p.key));g!=null&&f.push(new _r(p.key,g,$g(g.value.mapValue),zn.exists(!0)))}return a.In.addMutationBatch(h,l,f,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(s,o,a){let l=s.qo[s.currentUser.toKey()];l||(l=new hn(Ye)),l=l.insert(o,a),s.qo[s.currentUser.toKey()]=l}(i,r.batchId,n),await Ho(i,r.changes),await $l(i.remoteStore)}catch(r){const s=cd(r,"Failed to persist write");n.reject(s)}}async function tv(t,e){const n=be(t);try{const i=await YA(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.Bo.get(s);o&&(ct(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ko=!0:r.modifiedDocuments.size>0?ct(o.ko):r.removedDocuments.size>0&&(ct(o.ko),o.ko=!1))}),await Ho(n,i,e)}catch(i){await jo(i)}}function nv(t,e,n){const i=be(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.Oo.forEach((s,o)=>{const a=o.view.io(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=be(s);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.io(o)&&(l=!0)}),l&&dd(a)}(i.eventManager,e),r.length&&i.$o.Rr(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function jk(t,e,n){const i=be(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Bo.get(e),s=r&&r.key;if(s){let o=new hn(me.comparator);o=o.insert(s,un.newNoDocument(s,Xe.min()));const a=gt().add(s),l=new Kl(Xe.min(),new Map,new rn(Ye),o,a);await tv(i,l),i.Lo=i.Lo.remove(s),i.Bo.delete(e),md(i)}else await td(i.localStore,e,!1).then(()=>pd(i,e,n)).catch(jo)}async function Vk(t,e){const n=be(t),i=e.batch.batchId;try{const r=await QA(n.localStore,e);rv(n,i,null),iv(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Ho(n,r)}catch(r){await jo(r)}}async function Bk(t,e,n){const i=be(t);try{const r=await function(s,o){const a=be(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.In.lookupMutationBatch(l,o).next(u=>(ct(u!==null),c=u.keys(),a.In.removeMutationBatch(l,u))).next(()=>a.In.performConsistencyCheck(l)).next(()=>a.Qn.Pn(l,c))})}(i.localStore,e);rv(i,e,n),iv(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Ho(i,r)}catch(r){await jo(r)}}function iv(t,e){(t.Ko.get(e)||[]).forEach(n=>{n.resolve()}),t.Ko.delete(e)}function rv(t,e,n){const i=be(t);let r=i.qo[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.qo[i.currentUser.toKey()]=r}}function pd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Fo.get(e))t.Oo.delete(i),n&&t.$o.Go(i,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(i=>{t.Uo.containsKey(i)||sv(t,i)})}function sv(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);n!==null&&(z_(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),md(t))}function ov(t,e,n){for(const i of n)i instanceof $_?(t.Uo.addReference(i.key,e),Hk(t,i)):i instanceof ev?(ae("SyncEngine","Document no longer in limbo: "+i.key),t.Uo.removeReference(i.key,e),t.Uo.containsKey(i.key)||sv(t,i.key)):ye()}function Hk(t,e){const n=e.key,i=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(i)||(ae("SyncEngine","New document in limbo: "+n),t.Mo.add(i),md(t))}function md(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new me(Et.fromString(e)),i=t.jo.next();t.Bo.set(i,new Nk(n)),t.Lo=t.Lo.insert(n,i),G_(t.remoteStore,new yr(gr(Fl(n.path)),i,2,Dh.T))}}async function Ho(t,e,n){const i=be(t),r=[],s=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach((a,l)=>{o.push(i.Wo(l,e,n).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),r.push(c);const u=ed.kn(l.targetId,c);s.push(u)}}))}),await Promise.all(o),i.$o.Rr(r),await async function(a,l){const c=be(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>Q.forEach(l,h=>Q.forEach(h.Nn,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>Q.forEach(h.xn,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Uo(u))throw u;ae("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Un.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);c.Un=c.Un.insert(h,p)}}}(i.localStore,s))}async function qk(t,e){const n=be(t);if(!n.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const i=await U_(n.localStore,e);n.currentUser=e,function(r,s){r.Ko.forEach(o=>{o.forEach(a=>{a.reject(new te(U.CANCELLED,s))})}),r.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Ho(n,i.Wn)}}function Wk(t,e){const n=be(t),i=n.Bo.get(e);if(i&&i.ko)return gt().add(i.key);{let r=gt();const s=n.Fo.get(e);if(!s)return r;for(const o of s){const a=n.Oo.get(o);r=r.unionWith(a.view.Ro)}return r}}function Gk(t){const e=be(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jk.bind(null,e),e.$o.Rr=Rk.bind(null,e.eventManager),e.$o.Go=Ok.bind(null,e.eventManager),e}function zk(t){const e=be(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Vk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Bk.bind(null,e),e}class Kk{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=Yl(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return XA(this.persistence,new zA,e.initialUser,this.N)}Jo(e){return new sk(id.Ns,this.N)}Ho(e){return new ak}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Xk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>nv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=qk.bind(null,this.syncEngine),await Sk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new kk}createDatastore(e){const n=Yl(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new hk(r));var r;return function(s,o,a){return new pk(s,o,a)}(e.credentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>nv(this.syncEngine,a,0),o=H_.bt()?new H_:new lk,new gk(n,i,r,s,o);var n,i,r,s,o}createSyncEngine(e,n){return function(i,r,s,o,a,l,c){const u=new Pk(i,r,s,o,a,l);return c&&(u.Qo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=be(e);ae("RemoteStore","RemoteStore shutting down."),n.Wr.add(5),await Bo(n),n.zr.shutdown(),n.Hr.set("Unknown")}(this.remoteStore)}}/**
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
 */class Qk{constructor(e,n,i){this.credentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Cn.UNAUTHENTICATED,this.clientId=Gg.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async r=>{ae("FirestoreClient","Received user=",r.uid),await this.credentialListener(r),this.user=r})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new te(U.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new li;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const i=cd(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Yk(t,e){t.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await U_(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Jk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Zk(t);ae("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>async function(s,o){const a=be(s);a.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const l=br(a);a.Wr.add(3),await Bo(a),l&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await Jl(a)}(e.remoteStore,r)),t.onlineComponents=e}async function Zk(t){return t.offlineComponents||(ae("FirestoreClient","Using default OfflineComponentProvider"),await Yk(t,new Kk)),t.offlineComponents}async function av(t){return t.onlineComponents||(ae("FirestoreClient","Using default OnlineComponentProvider"),await Jk(t,new Xk)),t.onlineComponents}function $k(t){return av(t).then(e=>e.syncEngine)}async function ec(t){const e=await av(t),n=e.eventManager;return n.onListen=Dk.bind(null,e.syncEngine),n.onUnlisten=xk.bind(null,e.syncEngine),n}function eR(t,e,n={}){const i=new li;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,l){const c=new gd({next:h=>{s.enqueueAndForget(()=>hd(r,u));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new te(U.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new te(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new fd(Fl(o.path),c,{includeMetadataChanges:!0,fo:!0});return ud(r,u)}(await ec(t),t.asyncQueue,e,n,i)),i.promise}function tR(t,e,n={}){const i=new li;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,l){const c=new gd({next:h=>{s.enqueueAndForget(()=>hd(r,u)),h.fromCache&&a.source==="server"?l.reject(new te(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new fd(o,c,{includeMetadataChanges:!0,fo:!0});return ud(r,u)}(await ec(t),t.asyncQueue,e,n,i)),i.promise}class nR{constructor(e,n,i,r,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class qo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function cv(t,e,n){if(!n)throw new te(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iR(t,e,n,i){if(e===!0&&i===!0)throw new te(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function uv(t){if(!me.isDocumentKey(t))throw new te(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hv(t){if(me.isDocumentKey(t))throw new te(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _d(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ye()}function xn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_d(t);throw new te(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class dv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new te(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,iR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class vd{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dv({}),this._settingsFrozen=!1,e instanceof qo?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new te(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qo(i.options.projectId)}(e))}get app(){if(!this._app)throw new te(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new te(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dv(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new D1;switch(n.type){case"gapi":const i=n.client;return ct(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new U1(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new te(U.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=lv.get(e);n&&(ae("ComponentProvider","Removing Datastore"),lv.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class yn{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yn(this.firestore,e,this._key)}}class vs{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new vs(this.firestore,e,this._query)}}class Fi extends vs{constructor(e,n,i){super(e,n,Fl(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yn(this.firestore,null,new me(e))}withConverter(e){return new Fi(this.firestore,e,this._path)}}function Wj(t,e,...n){if(t=at(t),cv("collection","path",e),t instanceof vd){const i=Et.fromString(e,...n);return hv(i),new Fi(t,null,i)}{if(!(t instanceof yn||t instanceof Fi))throw new te(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Et.fromString(e,...n));return hv(i),new Fi(t.firestore,null,i)}}function Gj(t,e,...n){if(t=at(t),arguments.length===1&&(e=Gg.I()),cv("doc","path",e),t instanceof vd){const i=Et.fromString(e,...n);return uv(i),new yn(t,null,new me(i))}{if(!(t instanceof yn||t instanceof Fi))throw new te(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Et.fromString(e,...n));return uv(i),new yn(t.firestore,t instanceof Fi?t.converter:null,new me(i))}}/**
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
 */class rR{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new q_(this,"async_queue_retry"),this.Rc=()=>{const n=rd();n&&ae("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ar.tr()};const e=rd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const n=rd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const n=new li;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!Uo(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const n=this._c.then(()=>(this.Ec=!0,e().catch(i=>{this.Tc=i,this.Ec=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Ni("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Ec=!1,i))));return this._c=n,n}enqueueAfterDelay(e,n,i){this.bc(),this.Ac.indexOf(e)>-1&&(n=0);const r=ld.createAndSchedule(this,e,n,i,s=>this.Vc(s));return this.yc.push(r),r}bc(){this.Tc&&ye()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const n of this.yc)if(n.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.yc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const n=this.yc.indexOf(e);this.yc.splice(n,1)}}function fv(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const r of n)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class ui extends vd{constructor(e,n){super(e,n),this.type="firestore",this._queue=new rR,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||pv(this),this._firestoreClient.terminate()}}function zj(t=Ka()){return eo(t,"firestore").getImmediate()}function Wo(t){return t._firestoreClient||pv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function pv(t){var e;const n=t._freezeSettings(),i=function(r,s,o,a){return new nR(r,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Qk(t._credentials,t._queue,i)}/**
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
 */class Go{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Sn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ys{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ys(cn.fromBase64String(e))}catch(n){throw new te(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ys(cn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class yd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ye(this._lat,e._lat)||Ye(this._long,e._long)}}/**
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
 */const sR=/^__.*__$/;class oR{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new _r(e,this.data,this.fieldMask,n,this.fieldTransforms):new Gl(e,this.data,n,this.fieldTransforms)}}class mv{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new _r(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye()}}class tc{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.N=i,this.ignoreUndefinedProperties=r,s===void 0&&this.xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new tc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.$c({path:i,Fc:!1});return r.Mc(e),r}Lc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.$c({path:i,Fc:!1});return r.xc(),r}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return nc(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(e.length===0)throw this.Uc("Document fields must not be empty");if(gv(this.kc)&&sR.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class aR{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=i||Yl(e)}jc(e,n,i,r=!1){return new tc({kc:e,methodName:n,Kc:i,path:Sn.emptyPath(),Fc:!1,qc:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function bd(t){const e=t._freezeSettings(),n=Yl(t._databaseId);return new aR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _v(t,e,n,i,r,s={}){const o=t.jc(s.merge||s.mergeFields?2:0,e,n,r);Ed("Data must be an object, but it was:",o,i);const a=bv(i,o);let l,c;if(s.merge)l=new Ro(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=wd(e,h,n);if(!o.contains(d))throw new te(U.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Ev(u,d)||u.push(d)}l=new Ro(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new oR(new Fn(a),l,c)}class Ko extends zo{_toFieldTransform(e){if(e.kc!==2)throw e.kc===1?e.Uc(`${this._methodName}() can only appear at the top level of your update data`):e.Uc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ko}}function lR(t,e,n){return new tc({kc:3,Kc:e.settings.Kc,methodName:t._methodName,Fc:n},e.databaseId,e.N,e.ignoreUndefinedProperties)}class Id extends zo{_toFieldTransform(e){return new m_(e.path,new Do)}isEqual(e){return e instanceof Id}}class cR extends zo{constructor(e,n){super(e),this.Qc=n}_toFieldTransform(e){const n=lR(this,e,!0),i=this.Qc.map(s=>Xo(s,n)),r=new hs(i);return new m_(e.path,r)}isEqual(e){return this===e}}function vv(t,e,n,i){const r=t.jc(1,e,n);Ed("Data must be an object, but it was:",r,i);const s=[],o=Fn.empty();pr(i,(l,c)=>{const u=Td(e,l,n);c=at(c);const h=r.Lc(u);if(c instanceof Ko)s.push(u);else{const d=Xo(c,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new Ro(s);return new mv(o,a,r.fieldTransforms)}function yv(t,e,n,i,r,s){const o=t.jc(1,e,n),a=[wd(e,i,n)],l=[r];if(s.length%2!=0)throw new te(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(wd(e,s[d])),l.push(s[d+1]);const c=[],u=Fn.empty();for(let d=a.length-1;d>=0;--d)if(!Ev(c,a[d])){const f=a[d];let p=l[d];p=at(p);const g=o.Lc(f);if(p instanceof Ko)c.push(f);else{const m=Xo(p,g);m!=null&&(c.push(f),u.set(f,m))}}const h=new Ro(c);return new mv(u,h,o.fieldTransforms)}function Xo(t,e){if(Iv(t=at(t)))return Ed("Unsupported field value:",e,t),bv(t,e);if(t instanceof zo)return function(n,i){if(!gv(i.kc))throw i.Uc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Uc(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.kc!==4)throw e.Uc("Nested arrays are not supported");return function(n,i){const r=[];let s=0;for(const o of n){let a=Xo(o,i.Bc(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=at(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return rA(i.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Dn.fromDate(n);return{timestampValue:Ql(i.N,r)}}if(n instanceof Dn){const r=new Dn(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ql(i.N,r)}}if(n instanceof yd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ys)return{bytesValue:R_(i.N,n._byteString)};if(n instanceof yn){const r=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(r))throw i.Uc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Xh(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Uc(`Unsupported field value: ${_d(n)}`)}(t,e)}function bv(t,e){const n={};return Kg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pr(t,(i,r)=>{const s=Xo(r,e.Oc(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function Iv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Dn||t instanceof yd||t instanceof ys||t instanceof yn||t instanceof zo)}function Ed(t,e,n){if(!Iv(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=_d(n);throw i==="an object"?e.Uc(t+" a custom object"):e.Uc(t+" "+i)}}function wd(t,e,n){if((e=at(e))instanceof Go)return e._internalPath;if(typeof e=="string")return Td(t,e);throw nc("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const uR=new RegExp("[~\\*/\\[\\]]");function Td(t,e,n){if(e.search(uR)>=0)throw nc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Go(...e.split("."))._internalPath}catch{throw nc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nc(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new te(U.INVALID_ARGUMENT,a+t+l)}function Ev(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class wv{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new yn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Cd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hR extends wv{data(){return super.data()}}function Cd(t,e){return typeof e=="string"?Td(t,e):e instanceof Go?e._internalPath:e._delegate._internalPath}/**
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
 */class Qo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tv extends wv{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ic(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Cd("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class ic extends Tv{data(e={}){return super.data(e)}}class Cv{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Qo(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new ic(this._firestore,this._userDataWriter,i.key,i,new Qo(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(o=>({type:"added",doc:new ic(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Qo(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:s++}))}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new ic(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Qo(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:dR(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye()}}/**
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
 */function Sv(t){if(Ul(t)&&t.explicitOrderBy.length===0)throw new te(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fR{}function Kj(t,...e){for(const n of e)t=n._apply(t);return t}class pR extends fR{constructor(e,n){super(),this.Gc=e,this.Jc=n,this.type="orderBy"}_apply(e){const n=function(i,r,s){if(i.startAt!==null)throw new te(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new te(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new us(r,s);return function(a,l){if(r_(a)===null){const c=s_(a);c!==null&&mR(a,c,l.field)}}(i,o),o}(e._query,this.Gc,this.Jc);return new vs(e.firestore,e.converter,function(i,r){const s=i.explicitOrderBy.concat([r]);return new No(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Xj(t,e="asc"){const n=e,i=Cd("orderBy",t);return new pR(i,n)}function mR(t,e,n){if(!n.isEqual(e))throw new te(U.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class gR{convertValue(e,n="none"){switch(mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(as(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ye()}}convertObject(e,n){const i={};return pr(e.fields,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(e){return new yd(Mt(e.latitude),Mt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Qg(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Oo(e));default:return null}}convertTimestamp(e){const n=Pi(e);return new Dn(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Et.fromString(e);ct(F_(i));const r=new qo(i.get(1),i.get(3)),s=new me(i.popFirst(5));return r.isEqual(n)||Ni(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class _R{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=bd(e)}set(e,n,i){this._verifyNotCommitted();const r=Sd(e,this._firestore),s=Av(r.converter,n,i),o=_v(this._dataReader,"WriteBatch.set",r._key,s,r.converter!==null,i);return this._mutations.push(o.toMutation(r._key,zn.none())),this}update(e,n,i,...r){this._verifyNotCommitted();const s=Sd(e,this._firestore);let o;return o=typeof(n=at(n))=="string"||n instanceof Go?yv(this._dataReader,"WriteBatch.update",s._key,n,i,r):vv(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,zn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Sd(e,this._firestore);return this._mutations=this._mutations.concat(new zh(n._key,zn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new te(U.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Sd(t,e){if((t=at(t)).firestore!==e)throw new te(U.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function Qj(t){t=xn(t,yn);const e=xn(t.firestore,ui);return eR(Wo(e),t._key).then(n=>kv(e,t,n))}class Ad extends gR{constructor(e){super(),this.firestore=e}convertBytes(e){return new ys(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yn(this.firestore,null,n)}}function Yj(t){t=xn(t,vs);const e=xn(t.firestore,ui),n=Wo(e),i=new Ad(e);return Sv(t._query),tR(n,t._query).then(r=>new Cv(e,i,t,r))}function Jj(t,e,n){t=xn(t,yn);const i=xn(t.firestore,ui),r=Av(t.converter,e,n);return rc(i,[_v(bd(i),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,zn.none())])}function Zj(t,e,n,...i){t=xn(t,yn);const r=xn(t.firestore,ui),s=bd(r);let o;return o=typeof(e=at(e))=="string"||e instanceof Go?yv(s,"updateDoc",t._key,e,n,i):vv(s,"updateDoc",t._key,e),rc(r,[o.toMutation(t._key,zn.exists(!0))])}function $j(t){return rc(xn(t.firestore,ui),[new zh(t._key,zn.none())])}function eV(t,...e){var n,i,r;t=at(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||fv(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(fv(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let l,c,u;if(t instanceof yn)c=xn(t.firestore,ui),u=Fl(t._key.path),l={next:h=>{e[o]&&e[o](kv(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=xn(t,vs);c=xn(h.firestore,ui),u=h._query;const d=new Ad(c);l={next:f=>{e[o]&&e[o](new Cv(c,d,h,f))},error:e[o+1],complete:e[o+2]},Sv(t._query)}return function(h,d,f,p){const g=new gd(p),m=new fd(d,g,f);return h.asyncQueue.enqueueAndForget(async()=>ud(await ec(h),m)),()=>{g.ec(),h.asyncQueue.enqueueAndForget(async()=>hd(await ec(h),m))}}(Wo(c),u,a,l)}function rc(t,e){return function(n,i){const r=new li;return n.asyncQueue.enqueueAndForget(async()=>Uk(await $k(n),i,r)),r.promise}(Wo(t),e)}function kv(t,e,n){const i=n.docs.get(e._key),r=new Ad(t);return new Tv(t,r,e._key,i,new Qo(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function tV(){return new Ko("deleteField")}function nV(){return new Id("serverTimestamp")}function iV(...t){return new cR("arrayUnion",t)}/**
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
 */function rV(t){return Wo(t=xn(t,ui)),new _R(t,e=>rc(t,e))}(function(t,e=!0){(function(n){ss=n})(rr),ir(new Ti("firestore",(n,{options:i})=>{const r=n.getProvider("app").getImmediate(),s=new ui(r,new F1(n.getProvider("auth-internal")));return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s},"PUBLIC")),Bn(Hg,"3.3.1",t),Bn(Hg,"3.3.1","esm2017")})();function ue(t){return Object.entries(t).filter(([e,n])=>e!==""&&n).map(([e])=>e).join(" ")}function tt(t,e,n,i={bubbles:!0},r=!1){if(typeof Event!="undefined"&&t){const s=new CustomEvent(e,Object.assign(Object.assign({},i),{detail:n}));if(t==null||t.dispatchEvent(s),r&&e.startsWith("SMUI")){const o=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},i),{detail:n}));t==null||t.dispatchEvent(o),o.defaultPrevented&&s.preventDefault()}return s}}function xi(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let r=0;r<n.length;r++){const s=n[r],o=s.indexOf("$");o!==-1&&e.indexOf(s.substring(0,o+1))!==-1||e.indexOf(s)===-1&&(i[s]=t[s])}return i}const Rv=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,vR=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function Je(t){let e,n=[];t.$on=(r,s)=>{let o=r,a=()=>{};return e?a=e(o,s):n.push([o,s]),o.match(Rv)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',o),(...c)=>{a()}};function i(r){Ys(t,r)}return r=>{const s=[],o={};e=(a,l)=>{let c=a,u=l,h=!1;const d=c.match(Rv),f=c.match(vR),p=d||f;if(c.match(/^SMUI:\w+:/)){const v=c.split(":");let E="";for(let I=0;I<v.length;I++)E+=I===v.length-1?":"+v[I]:v[I].split("-").map(y=>y.slice(0,1).toUpperCase()+y.slice(1)).join("");console.warn(`The event ${c.split("$")[0]} has been renamed to ${E.split("$")[0]}.`),c=E}if(p){const v=c.split(d?":":"$");c=v[0];const E=Object.fromEntries(v.slice(1).map(I=>[I,!0]));E.passive&&(h=h||{},h.passive=!0),E.nonpassive&&(h=h||{},h.passive=!1),E.capture&&(h=h||{},h.capture=!0),E.once&&(h=h||{},h.once=!0),E.preventDefault&&(u=h0(u)),E.stopPropagation&&(u=d0(u))}const g=Qe(r,c,u,h),m=()=>{g();const v=s.indexOf(m);v>-1&&s.splice(v,1)};return s.push(m),c in o||(o[c]=Qe(r,c,i)),m};for(let a=0;a<n.length;a++)e(n[a][0],n[a][1]);return{destroy:()=>{for(let a=0;a<s.length;a++)s[a]();for(let a of Object.entries(o))a[1]()}}}}function Wt(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let r=0;r<n.length;r++){const s=n[r];s.substring(0,e.length)===e&&(i[s.substring(e.length)]=t[s])}return i}function nt(t,e){let n=[];if(e)for(let i=0;i<e.length;i++){const r=e[i],s=Array.isArray(r)?r[0]:r;Array.isArray(r)&&r.length>1?n.push(s(t,r[1])):n.push(s(t))}return{update(i){if((i&&i.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(i)for(let r=0;r<i.length;r++){const s=n[r];if(s&&s.update){const o=i[r];Array.isArray(o)&&o.length>1?s.update(o[1]):s.update()}}},destroy(){for(let i=0;i<n.length;i++){const r=n[i];r&&r.destroy&&r.destroy()}}}}var sc;function yR(t,e){e===void 0&&(e=!1);var n=t.CSS,i=sc;if(typeof sc=="boolean"&&!e)return sc;var r=n&&typeof n.supports=="function";if(!r)return!1;var s=n.supports("--css-vars","yes"),o=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=s||o,e||(sc=i),i}function bR(t,e,n){if(!t)return{x:0,y:0};var i=e.x,r=e.y,s=i+n.left,o=r+n.top,a,l;if(t.type==="touchstart"){var c=t;a=c.changedTouches[0].pageX-s,l=c.changedTouches[0].pageY-o}else{var u=t;a=u.pageX-s,l=u.pageY-o}return{x:a,y:l}}/**
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
 */var Hn=function(){function t(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();/**
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
 */function IR(t){return t===void 0&&(t=window),ER(t)?{passive:!0}:!1}function ER(t){t===void 0&&(t=window);var e=!1;try{var n={get passive(){return e=!0,!1}},i=function(){};t.document.addEventListener("test",i,n),t.document.removeEventListener("test",i,n)}catch{e=!1}return e}var Ov=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",applyPassive:IR});/**
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
 */function wR(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(Lv(n,e))return n;n=n.parentElement}return null}function Lv(t,e){var n=t.matches||t.webkitMatchesSelector||t.msMatchesSelector;return n.call(t,e)}function TR(t){var e=t;if(e.offsetParent!==null)return e.scrollWidth;var n=e.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var i=n.scrollWidth;return document.documentElement.removeChild(n),i}var kd=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",closest:wR,matches:Lv,estimateScrollWidth:TR});/**
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
 */var CR={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},SR={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Mv={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
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
 */var Nv=["touchstart","pointerdown","mousedown","keydown"],Pv=["touchend","pointerup","mouseup","contextmenu"],oc=[],AR=function(t){mn(e,t);function e(n){var i=t.call(this,lt(lt({},e.defaultAdapter),n))||this;return i.activationAnimationHasEnded=!1,i.activationTimer=0,i.fgDeactivationRemovalTimer=0,i.fgScale="0",i.frame={width:0,height:0},i.initialSize=0,i.layoutFrame=0,i.maxRadius=0,i.unboundedCoords={left:0,top:0},i.activationState=i.defaultActivationState(),i.activationTimerCallback=function(){i.activationAnimationHasEnded=!0,i.runDeactivationUXLogicIfReady()},i.activateHandler=function(r){i.activateImpl(r)},i.deactivateHandler=function(){i.deactivateImpl()},i.focusHandler=function(){i.handleFocus()},i.blurHandler=function(){i.handleBlur()},i.resizeHandler=function(){i.layout()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return CR},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return SR},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Mv},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var r=e.cssClasses,s=r.ROOT,o=r.UNBOUNDED;requestAnimationFrame(function(){n.adapter.addClass(s),n.adapter.isUnbounded()&&(n.adapter.addClass(o),n.layoutInternal())})}},e.prototype.destroy=function(){var n=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,r=i.ROOT,s=i.UNBOUNDED;requestAnimationFrame(function(){n.adapter.removeClass(r),n.adapter.removeClass(s),n.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(n){this.activateImpl(n)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var n=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){n.layoutInternal(),n.layoutFrame=0})},e.prototype.setUnbounded=function(n){var i=e.cssClasses.UNBOUNDED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var n=this;requestAnimationFrame(function(){return n.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var n=this;requestAnimationFrame(function(){return n.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(n){var i,r;if(n){try{for(var s=Mn(Nv),o=s.next();!o.done;o=s.next()){var a=o.value;this.adapter.registerInteractionHandler(a,this.activateHandler)}}catch(l){i={error:l}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(n){var i,r;if(n.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var s=Mn(Pv),o=s.next();!o.done;o=s.next()){var a=o.value;this.adapter.registerDocumentInteractionHandler(a,this.deactivateHandler)}}catch(l){i={error:l}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}},e.prototype.deregisterRootHandlers=function(){var n,i;try{for(var r=Mn(Nv),s=r.next();!s.done;s=r.next()){var o=s.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(a){n={error:a}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var n,i;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var r=Mn(Pv),s=r.next();!s.done;s=r.next()){var o=s.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(a){n={error:a}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},e.prototype.removeCssVars=function(){var n=this,i=e.strings,r=Object.keys(i);r.forEach(function(s){s.indexOf("VAR_")===0&&n.adapter.updateCssVariable(i[s],null)})},e.prototype.activateImpl=function(n){var i=this;if(!this.adapter.isSurfaceDisabled()){var r=this.activationState;if(!r.isActivated){var s=this.previousActivationEvent,o=s&&n!==void 0&&s.type!==n.type;if(!o){r.isActivated=!0,r.isProgrammatic=n===void 0,r.activationEvent=n,r.wasActivatedByPointer=r.isProgrammatic?!1:n!==void 0&&(n.type==="mousedown"||n.type==="touchstart"||n.type==="pointerdown");var a=n!==void 0&&oc.length>0&&oc.some(function(l){return i.adapter.containsEventTarget(l)});if(a){this.resetActivationState();return}n!==void 0&&(oc.push(n.target),this.registerDeactivationHandlers(n)),r.wasElementMadeActive=this.checkElementMadeActive(n),r.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){oc=[],!r.wasElementMadeActive&&n!==void 0&&(n.key===" "||n.keyCode===32)&&(r.wasElementMadeActive=i.checkElementMadeActive(n),r.wasElementMadeActive&&i.animateActivation()),r.wasElementMadeActive||(i.activationState=i.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(n){return n!==void 0&&n.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var n=this,i=e.strings,r=i.VAR_FG_TRANSLATE_START,s=i.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,l=o.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",h="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),f=d.startPoint,p=d.endPoint;u=f.x+"px, "+f.y+"px",h=p.x+"px, "+p.y+"px"}this.adapter.updateCssVariable(r,u),this.adapter.updateCssVariable(s,h),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){n.activationTimerCallback()},c)},e.prototype.getFgTranslationCoordinates=function(){var n=this.activationState,i=n.activationEvent,r=n.wasActivatedByPointer,s;r?s=bR(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):s={x:this.frame.width/2,y:this.frame.height/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:s,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady=function(){var n=this,i=e.cssClasses.FG_DEACTIVATION,r=this.activationState,s=r.hasDeactivationUXRun,o=r.isActivated,a=s||!o;a&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout(function(){n.adapter.removeClass(i)},Mv.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var n=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(n),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var n=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return n.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var n=this,i=this.activationState;if(!!i.isActivated){var r=lt({},i);i.isProgrammatic?(requestAnimationFrame(function(){n.animateDeactivation(r)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){n.activationState.hasDeactivationUXRun=!0,n.animateDeactivation(r),n.resetActivationState()}))}},e.prototype.animateDeactivation=function(n){var i=n.wasActivatedByPointer,r=n.wasElementMadeActive;(i||r)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var n=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width),r=function(){var o=Math.sqrt(Math.pow(n.frame.width,2)+Math.pow(n.frame.height,2));return o+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?i:r();var s=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&s%2!=0?this.initialSize=s-1:this.initialSize=s,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var n=e.strings,i=n.VAR_FG_SIZE,r=n.VAR_LEFT,s=n.VAR_TOP,o=n.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(r,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(s,this.unboundedCoords.top+"px"))},e}(Hn);/**
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
 */var Rd="mdc-dom-focus-sentinel",kR=function(){function t(e,n){n===void 0&&(n={}),this.root=e,this.options=n,this.elFocusedBeforeTrapFocus=null}return t.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},t.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+Rd)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},t.prototype.wrapTabFocus=function(e){var n=this,i=this.createSentinel(),r=this.createSentinel();i.addEventListener("focus",function(){var s=n.getFocusableElements(e);s.length>0&&s[s.length-1].focus()}),r.addEventListener("focus",function(){var s=n.getFocusableElements(e);s.length>0&&s[0].focus()}),e.insertBefore(i,e.children[0]),e.appendChild(r)},t.prototype.focusInitialElement=function(e,n){var i=0;n&&(i=Math.max(e.indexOf(n),0)),e[i].focus()},t.prototype.getFocusableElements=function(e){var n=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return n.filter(function(i){var r=i.getAttribute("aria-disabled")==="true"||i.getAttribute("disabled")!=null||i.getAttribute("hidden")!=null||i.getAttribute("aria-hidden")==="true",s=i.tabIndex>=0&&i.getBoundingClientRect().width>0&&!i.classList.contains(Rd)&&!r,o=!1;if(s){var a=getComputedStyle(i);o=a.display==="none"||a.visibility==="hidden"}return s&&!o})},t.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(Rd),e},t}(),RR=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",FocusTrap:kR});/**
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
 */var Pe={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},bn=new Set;bn.add(Pe.BACKSPACE);bn.add(Pe.ENTER);bn.add(Pe.SPACEBAR);bn.add(Pe.PAGE_UP);bn.add(Pe.PAGE_DOWN);bn.add(Pe.END);bn.add(Pe.HOME);bn.add(Pe.ARROW_LEFT);bn.add(Pe.ARROW_UP);bn.add(Pe.ARROW_RIGHT);bn.add(Pe.ARROW_DOWN);bn.add(Pe.DELETE);bn.add(Pe.ESCAPE);bn.add(Pe.TAB);var kn={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},In=new Map;In.set(kn.BACKSPACE,Pe.BACKSPACE);In.set(kn.ENTER,Pe.ENTER);In.set(kn.SPACEBAR,Pe.SPACEBAR);In.set(kn.PAGE_UP,Pe.PAGE_UP);In.set(kn.PAGE_DOWN,Pe.PAGE_DOWN);In.set(kn.END,Pe.END);In.set(kn.HOME,Pe.HOME);In.set(kn.ARROW_LEFT,Pe.ARROW_LEFT);In.set(kn.ARROW_UP,Pe.ARROW_UP);In.set(kn.ARROW_RIGHT,Pe.ARROW_RIGHT);In.set(kn.ARROW_DOWN,Pe.ARROW_DOWN);In.set(kn.DELETE,Pe.DELETE);In.set(kn.ESCAPE,Pe.ESCAPE);In.set(kn.TAB,Pe.TAB);var Ui=new Set;Ui.add(Pe.PAGE_UP);Ui.add(Pe.PAGE_DOWN);Ui.add(Pe.END);Ui.add(Pe.HOME);Ui.add(Pe.ARROW_LEFT);Ui.add(Pe.ARROW_UP);Ui.add(Pe.ARROW_RIGHT);Ui.add(Pe.ARROW_DOWN);function dn(t){var e=t.key;if(bn.has(e))return e;var n=In.get(t.keyCode);return n||Pe.UNKNOWN}const{applyPassive:ac}=Ov,{matches:OR}=kd;function Ir(t,{ripple:e=!0,surface:n=!1,unbounded:i=!1,disabled:r=!1,color:s,active:o,rippleElement:a,eventTarget:l,activeTarget:c,addClass:u=p=>t.classList.add(p),removeClass:h=p=>t.classList.remove(p),addStyle:d=(p,g)=>t.style.setProperty(p,g),initPromise:f=Promise.resolve()}={}){let p,g=Yt("SMUI:addLayoutListener"),m,v=o,E=l,I=c;function y(){n&&(u("mdc-ripple-surface"),s==="primary"?(u("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")):s==="secondary"?(h("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")):(h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary"))),p&&v!==o&&(v=o,o?p.activate():o===!1&&p.deactivate()),e&&!p?(p=new AR({addClass:u,browserSupportsCssVars:()=>yR(window),computeBoundingRect:()=>(a||t).getBoundingClientRect(),containsEventTarget:k=>t.contains(k),deregisterDocumentInteractionHandler:(k,_)=>document.documentElement.removeEventListener(k,_,ac()),deregisterInteractionHandler:(k,_)=>(l||t).removeEventListener(k,_,ac()),deregisterResizeHandler:k=>window.removeEventListener("resize",k),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>o==null?OR(c||t,":active"):o,isSurfaceDisabled:()=>!!r,isUnbounded:()=>!!i,registerDocumentInteractionHandler:(k,_)=>document.documentElement.addEventListener(k,_,ac()),registerInteractionHandler:(k,_)=>(l||t).addEventListener(k,_,ac()),registerResizeHandler:k=>window.addEventListener("resize",k),removeClass:h,updateCssVariable:d}),f.then(()=>{p&&(p.init(),p.setUnbounded(i))})):p&&!e&&f.then(()=>{p&&(p.destroy(),p=void 0)}),p&&(E!==l||I!==c)&&(E=l,I=c,p.destroy(),requestAnimationFrame(()=>{p&&(p.init(),p.setUnbounded(i))})),!e&&i&&u("mdc-ripple-upgraded--unbounded")}y(),g&&(m=g(M));function M(){p&&p.layout()}return{update(k){({ripple:e,surface:n,unbounded:i,disabled:r,color:s,active:o,rippleElement:a,eventTarget:l,activeTarget:c,addClass:u,removeClass:h,addStyle:d,initPromise:f}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:_=>t.classList.add(_),removeClass:_=>t.classList.remove(_),addStyle:(_,T)=>t.style.setProperty(_,T),initPromise:Promise.resolve()},k)),y()},destroy(){p&&(p.destroy(),p=void 0,h("mdc-ripple-surface"),h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")),m&&m()}}}function LR(t){let e,n,i,r,s;const o=t[7].default,a=Ee(o,t,t[6],null);let l=[{href:t[1]},t[4]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=ve("a"),a&&a.c(),this.h()},l(u){e=Se(u,"A",{href:!0});var h=fe(e);a&&a.l(h),h.forEach(P),this.h()},h(){se(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[8](e),i=!0,r||(s=[re(n=nt.call(null,e,t[0])),re(t[3].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&64)&&Te(a,o,u,u[6],i?we(o,u[6],h,null):Ce(u[6]),null),se(e,c=ke(l,[(!i||h&2)&&{href:u[1]},h&16&&u[4]])),n&&xe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&P(e),a&&a.d(u),t[8](null),r=!1,We(s)}}}function MR(t,e,n){const i=["use","href","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e,{href:l="javascript:void(0);"}=e;const c=Je(De());let u;function h(){return u}function d(f){le[f?"unshift":"push"](()=>{u=f,n(2,u)})}return t.$$set=f=>{e=x(x({},e),Ge(f)),n(4,r=ee(e,i)),"use"in f&&n(0,a=f.use),"href"in f&&n(1,l=f.href),"$$scope"in f&&n(6,o=f.$$scope)},[a,l,u,c,r,h,o,s,d]}class NR extends Ke{constructor(e){super();ze(this,e,MR,LR,Ve,{use:0,href:1,getElement:5})}get getElement(){return this.$$.ctx[5]}}function PR(t){let e,n,i,r,s;const o=t[6].default,a=Ee(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=ve("button"),a&&a.c(),this.h()},l(u){e=Se(u,"BUTTON",{});var h=fe(e);a&&a.l(h),h.forEach(P),this.h()},h(){se(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),e.autofocus&&e.focus(),t[7](e),i=!0,r||(s=[re(n=nt.call(null,e,t[0])),re(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Te(a,o,u,u[5],i?we(o,u[5],h,null):Ce(u[5]),null),se(e,c=ke(l,[h&8&&u[3]])),n&&xe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&P(e),a&&a.d(u),t[7](null),r=!1,We(s)}}}function DR(t,e,n){const i=["use","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=Je(De());let c;function u(){return c}function h(d){le[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=x(x({},e),Ge(d)),n(3,r=ee(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class FR extends Ke{constructor(e){super();ze(this,e,DR,PR,Ve,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function xR(t){let e,n,i,r,s;const o=t[6].default,a=Ee(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=ve("div"),a&&a.c(),this.h()},l(u){e=Se(u,"DIV",{});var h=fe(e);a&&a.l(h),h.forEach(P),this.h()},h(){se(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[re(n=nt.call(null,e,t[0])),re(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Te(a,o,u,u[5],i?we(o,u[5],h,null):Ce(u[5]),null),se(e,c=ke(l,[h&8&&u[3]])),n&&xe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&P(e),a&&a.d(u),t[7](null),r=!1,We(s)}}}function UR(t,e,n){const i=["use","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=Je(De());let c;function u(){return c}function h(d){le[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=x(x({},e),Ge(d)),n(3,r=ee(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class Dv extends Ke{constructor(e){super();ze(this,e,UR,xR,Ve,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function jR(t){let e,n,i,r,s;const o=t[6].default,a=Ee(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=ve("h1"),a&&a.c(),this.h()},l(u){e=Se(u,"H1",{});var h=fe(e);a&&a.l(h),h.forEach(P),this.h()},h(){se(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[re(n=nt.call(null,e,t[0])),re(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Te(a,o,u,u[5],i?we(o,u[5],h,null):Ce(u[5]),null),se(e,c=ke(l,[h&8&&u[3]])),n&&xe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&P(e),a&&a.d(u),t[7](null),r=!1,We(s)}}}function VR(t,e,n){const i=["use","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=Je(De());let c;function u(){return c}function h(d){le[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=x(x({},e),Ge(d)),n(3,r=ee(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class BR extends Ke{constructor(e){super();ze(this,e,VR,jR,Ve,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function HR(t){let e,n,i,r,s;const o=t[6].default,a=Ee(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=ve("h2"),a&&a.c(),this.h()},l(u){e=Se(u,"H2",{});var h=fe(e);a&&a.l(h),h.forEach(P),this.h()},h(){se(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[re(n=nt.call(null,e,t[0])),re(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Te(a,o,u,u[5],i?we(o,u[5],h,null):Ce(u[5]),null),se(e,c=ke(l,[h&8&&u[3]])),n&&xe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&P(e),a&&a.d(u),t[7](null),r=!1,We(s)}}}function qR(t,e,n){const i=["use","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=Je(De());let c;function u(){return c}function h(d){le[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=x(x({},e),Ge(d)),n(3,r=ee(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class WR extends Ke{constructor(e){super();ze(this,e,qR,HR,Ve,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function GR(t){let e,n,i,r,s;const o=t[6].default,a=Ee(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=ve("h3"),a&&a.c(),this.h()},l(u){e=Se(u,"H3",{});var h=fe(e);a&&a.l(h),h.forEach(P),this.h()},h(){se(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[re(n=nt.call(null,e,t[0])),re(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Te(a,o,u,u[5],i?we(o,u[5],h,null):Ce(u[5]),null),se(e,c=ke(l,[h&8&&u[3]])),n&&xe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&P(e),a&&a.d(u),t[7](null),r=!1,We(s)}}}function zR(t,e,n){const i=["use","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=Je(De());let c;function u(){return c}function h(d){le[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=x(x({},e),Ge(d)),n(3,r=ee(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class KR extends Ke{constructor(e){super();ze(this,e,zR,GR,Ve,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function XR(t){let e,n,i,r,s;const o=t[6].default,a=Ee(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=ve("li"),a&&a.c(),this.h()},l(u){e=Se(u,"LI",{});var h=fe(e);a&&a.l(h),h.forEach(P),this.h()},h(){se(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[re(n=nt.call(null,e,t[0])),re(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Te(a,o,u,u[5],i?we(o,u[5],h,null):Ce(u[5]),null),se(e,c=ke(l,[h&8&&u[3]])),n&&xe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&P(e),a&&a.d(u),t[7](null),r=!1,We(s)}}}function QR(t,e,n){const i=["use","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=Je(De());let c;function u(){return c}function h(d){le[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=x(x({},e),Ge(d)),n(3,r=ee(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class YR extends Ke{constructor(e){super();ze(this,e,QR,XR,Ve,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function JR(t){let e,n,i,r,s;const o=t[6].default,a=Ee(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=ve("nav"),a&&a.c(),this.h()},l(u){e=Se(u,"NAV",{});var h=fe(e);a&&a.l(h),h.forEach(P),this.h()},h(){se(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[re(n=nt.call(null,e,t[0])),re(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Te(a,o,u,u[5],i?we(o,u[5],h,null):Ce(u[5]),null),se(e,c=ke(l,[h&8&&u[3]])),n&&xe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&P(e),a&&a.d(u),t[7](null),r=!1,We(s)}}}function ZR(t,e,n){const i=["use","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=Je(De());let c;function u(){return c}function h(d){le[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=x(x({},e),Ge(d)),n(3,r=ee(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class $R extends Ke{constructor(e){super();ze(this,e,ZR,JR,Ve,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function eO(t){let e,n,i,r,s;const o=t[6].default,a=Ee(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=ve("span"),a&&a.c(),this.h()},l(u){e=Se(u,"SPAN",{});var h=fe(e);a&&a.l(h),h.forEach(P),this.h()},h(){se(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[re(n=nt.call(null,e,t[0])),re(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Te(a,o,u,u[5],i?we(o,u[5],h,null):Ce(u[5]),null),se(e,c=ke(l,[h&8&&u[3]])),n&&xe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&P(e),a&&a.d(u),t[7](null),r=!1,We(s)}}}function tO(t,e,n){const i=["use","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=Je(De());let c;function u(){return c}function h(d){le[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=x(x({},e),Ge(d)),n(3,r=ee(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class Fv extends Ke{constructor(e){super();ze(this,e,tO,eO,Ve,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function nO(t){let e,n,i,r,s;const o=t[6].default,a=Ee(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=ve("ul"),a&&a.c(),this.h()},l(u){e=Se(u,"UL",{});var h=fe(e);a&&a.l(h),h.forEach(P),this.h()},h(){se(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[re(n=nt.call(null,e,t[0])),re(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Te(a,o,u,u[5],i?we(o,u[5],h,null):Ce(u[5]),null),se(e,c=ke(l,[h&8&&u[3]])),n&&xe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(D(a,u),i=!0)},o(u){B(a,u),i=!1},d(u){u&&P(e),a&&a.d(u),t[7](null),r=!1,We(s)}}}function iO(t,e,n){const i=["use","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=Je(De());let c;function u(){return c}function h(d){le[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=x(x({},e),Ge(d)),n(3,r=ee(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class rO extends Ke{constructor(e){super();ze(this,e,iO,nO,Ve,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}const xv=NR,sO=FR,hi=Dv,oO=BR,aO=WR,lO=KR,cO=YR,uO=$R,Er=Fv,hO=rO;function Uv(t){let e;return{c(){e=ve("div"),this.h()},l(n){e=Se(n,"DIV",{class:!0}),fe(e).forEach(P),this.h()},h(){yt(e,"class","mdc-button__touch")},m(n,i){ie(n,e,i)},d(n){n&&P(e)}}}function dO(t){let e,n,i,r;const s=t[26].default,o=Ee(s,t,t[28],null);let a=t[6]&&Uv();return{c(){e=ve("div"),n=st(),o&&o.c(),a&&a.c(),i=Tt(),this.h()},l(l){e=Se(l,"DIV",{class:!0}),fe(e).forEach(P),n=ot(l),o&&o.l(l),a&&a.l(l),i=Tt(),this.h()},h(){yt(e,"class","mdc-button__ripple")},m(l,c){ie(l,e,c),ie(l,n,c),o&&o.m(l,c),a&&a.m(l,c),ie(l,i,c),r=!0},p(l,c){o&&o.p&&(!r||c&268435456)&&Te(o,s,l,l[28],r?we(s,l[28],c,null):Ce(l[28]),null),l[6]?a||(a=Uv(),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null)},i(l){r||(D(o,l),r=!0)},o(l){B(o,l),r=!1},d(l){l&&P(e),l&&P(n),o&&o.d(l),a&&a.d(l),l&&P(i)}}}function fO(t){let e,n,i;const r=[{use:[[Ir,{ripple:t[3],unbounded:!1,color:t[4],disabled:!!t[22].disabled,addClass:t[18],removeClass:t[19],addStyle:t[20]}],t[16],...t[0]]},{class:ue(et({[t[1]]:!0,"mdc-button":!0,"mdc-button--raised":t[5]==="raised","mdc-button--unelevated":t[5]==="unelevated","mdc-button--outlined":t[5]==="outlined","smui-button--color-secondary":t[4]==="secondary","mdc-button--touch":t[6],"mdc-card__action":t[17]==="card:action","mdc-card__action--button":t[17]==="card:action","mdc-dialog__button":t[17]==="dialog:action","mdc-top-app-bar__navigation-icon":t[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":t[17]==="top-app-bar:action","mdc-snackbar__action":t[17]==="snackbar:actions","mdc-banner__secondary-action":t[17]==="banner"&&t[8],"mdc-banner__primary-action":t[17]==="banner"&&!t[8],"mdc-tooltip__action":t[17]==="tooltip:rich-actions"},t[11]))},{style:Object.entries(t[12]).map(jv).concat([t[2]]).join(" ")},t[15],t[14],t[13],{href:t[7]},t[22]];var s=t[9];function o(a){let l={$$slots:{default:[dO]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=x(l,r[c]);return{props:l}}return s&&(e=new s(o(t)),t[27](e),e.$on("click",t[21])),{c(){e&&bt(e.$$.fragment),n=Tt()},l(a){e&&Dt(e.$$.fragment,a),n=Tt()},m(a,l){e&&pt(e,a,l),ie(a,n,l),i=!0},p(a,[l]){const c=l&6289919?ke(r,[l&6094873&&{use:[[Ir,{ripple:a[3],unbounded:!1,color:a[4],disabled:!!a[22].disabled,addClass:a[18],removeClass:a[19],addStyle:a[20]}],a[16],...a[0]]},l&133490&&{class:ue(et({[a[1]]:!0,"mdc-button":!0,"mdc-button--raised":a[5]==="raised","mdc-button--unelevated":a[5]==="unelevated","mdc-button--outlined":a[5]==="outlined","smui-button--color-secondary":a[4]==="secondary","mdc-button--touch":a[6],"mdc-card__action":a[17]==="card:action","mdc-card__action--button":a[17]==="card:action","mdc-dialog__button":a[17]==="dialog:action","mdc-top-app-bar__navigation-icon":a[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":a[17]==="top-app-bar:action","mdc-snackbar__action":a[17]==="snackbar:actions","mdc-banner__secondary-action":a[17]==="banner"&&a[8],"mdc-banner__primary-action":a[17]==="banner"&&!a[8],"mdc-tooltip__action":a[17]==="tooltip:rich-actions"},a[11]))},l&4100&&{style:Object.entries(a[12]).map(jv).concat([a[2]]).join(" ")},l&32768&&ft(a[15]),l&16384&&ft(a[14]),l&8192&&ft(a[13]),l&128&&{href:a[7]},l&4194304&&ft(a[22])]):{};if(l&268435520&&(c.$$scope={dirty:l,ctx:a}),s!==(s=a[9])){if(e){Jt();const u=e;B(u.$$.fragment,1,0,()=>{mt(u,1)}),Zt()}s?(e=new s(o(a)),a[27](e),e.$on("click",a[21]),bt(e.$$.fragment),D(e.$$.fragment,1),pt(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(a){i||(e&&D(e.$$.fragment,a),i=!0)},o(a){e&&B(e.$$.fragment,a),i=!1},d(a){t[27](null),a&&P(n),e&&mt(e,a)}}}const jv=([t,e])=>`${t}: ${e};`;function pO(t,e,n){let i,r,s;const o=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","getElement"];let a=ee(e,o),{$$slots:l={},$$scope:c}=e;const u=Je(De());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{ripple:p=!0}=e,{color:g="primary"}=e,{variant:m="text"}=e,{touch:v=!1}=e,{href:E=void 0}=e,{action:I="close"}=e,{defaultAction:y=!1}=e,{secondary:M=!1}=e,k,_={},T={},V=Yt("SMUI:button:context"),{component:b=E==null?sO:xv}=e;Ot("SMUI:label:context","button"),Ot("SMUI:icon:context","button");function O(S){_[S]||n(11,_[S]=!0,_)}function J(S){(!(S in _)||_[S])&&n(11,_[S]=!1,_)}function w(S,A){T[S]!=A&&(A===""||A==null?(delete T[S],n(12,T)):n(12,T[S]=A,T))}function L(){V==="banner"&&tt(R(),M?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function R(){return k.getElement()}function G(S){le[S?"unshift":"push"](()=>{k=S,n(10,k)})}return t.$$set=S=>{n(29,e=x(x({},e),Ge(S))),n(22,a=ee(e,o)),"use"in S&&n(0,h=S.use),"class"in S&&n(1,d=S.class),"style"in S&&n(2,f=S.style),"ripple"in S&&n(3,p=S.ripple),"color"in S&&n(4,g=S.color),"variant"in S&&n(5,m=S.variant),"touch"in S&&n(6,v=S.touch),"href"in S&&n(7,E=S.href),"action"in S&&n(23,I=S.action),"defaultAction"in S&&n(24,y=S.defaultAction),"secondary"in S&&n(8,M=S.secondary),"component"in S&&n(9,b=S.component),"$$scope"in S&&n(28,c=S.$$scope)},t.$$.update=()=>{n(15,i=V==="dialog:action"&&I!=null?{"data-mdc-dialog-action":I}:{action:e.action}),n(14,r=V==="dialog:action"&&y?{"data-mdc-dialog-button-default":""}:{default:e.default}),n(13,s=V==="banner"?{}:{secondary:e.secondary})},e=Ge(e),[h,d,f,p,g,m,v,E,M,b,k,_,T,s,r,i,u,V,O,J,w,L,a,I,y,R,l,G,c]}class sV extends Ke{constructor(e){super();ze(this,e,pO,fO,Ve,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:23,defaultAction:24,secondary:8,component:9,getElement:25})}get getElement(){return this.$$.ctx[25]}}function mO(t){let e;const n=t[9].default,i=Ee(n,t,t[11],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&2048)&&Te(i,n,r,r[11],e?we(n,r[11],s,null):Ce(r[11]),null)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function gO(t){let e,n,i;const r=[{use:[t[4],...t[0]]},{class:ue({[t[1]]:!0,"mdc-button__label":t[5]==="button","mdc-fab__label":t[5]==="fab","mdc-tab__text-label":t[5]==="tab","mdc-image-list__label":t[5]==="image-list","mdc-snackbar__label":t[5]==="snackbar","mdc-banner__text":t[5]==="banner","mdc-segmented-button__label":t[5]==="segmented-button","mdc-data-table__pagination-rows-per-page-label":t[5]==="data-table:pagination","mdc-data-table__header-cell-label":t[5]==="data-table:sortable-header-cell"})},t[5]==="snackbar"?{"aria-atomic":"false"}:{},{tabindex:t[6]},t[7]];var s=t[2];function o(a){let l={$$slots:{default:[mO]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=x(l,r[c]);return{props:l}}return s&&(e=new s(o(t)),t[10](e)),{c(){e&&bt(e.$$.fragment),n=Tt()},l(a){e&&Dt(e.$$.fragment,a),n=Tt()},m(a,l){e&&pt(e,a,l),ie(a,n,l),i=!0},p(a,[l]){const c=l&243?ke(r,[l&17&&{use:[a[4],...a[0]]},l&34&&{class:ue({[a[1]]:!0,"mdc-button__label":a[5]==="button","mdc-fab__label":a[5]==="fab","mdc-tab__text-label":a[5]==="tab","mdc-image-list__label":a[5]==="image-list","mdc-snackbar__label":a[5]==="snackbar","mdc-banner__text":a[5]==="banner","mdc-segmented-button__label":a[5]==="segmented-button","mdc-data-table__pagination-rows-per-page-label":a[5]==="data-table:pagination","mdc-data-table__header-cell-label":a[5]==="data-table:sortable-header-cell"})},l&32&&ft(a[5]==="snackbar"?{"aria-atomic":"false"}:{}),l&64&&{tabindex:a[6]},l&128&&ft(a[7])]):{};if(l&2048&&(c.$$scope={dirty:l,ctx:a}),s!==(s=a[2])){if(e){Jt();const u=e;B(u.$$.fragment,1,0,()=>{mt(u,1)}),Zt()}s?(e=new s(o(a)),a[10](e),bt(e.$$.fragment),D(e.$$.fragment,1),pt(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(a){i||(e&&D(e.$$.fragment,a),i=!0)},o(a){e&&B(e.$$.fragment,a),i=!1},d(a){t[10](null),a&&P(n),e&&mt(e,a)}}}function _O(t,e,n){const i=["use","class","component","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e;const a=Je(De());let{use:l=[]}=e,{class:c=""}=e,u,{component:h=Fv}=e;const d=Yt("SMUI:label:context"),f=Yt("SMUI:label:tabindex");function p(){return u.getElement()}function g(m){le[m?"unshift":"push"](()=>{u=m,n(3,u)})}return t.$$set=m=>{e=x(x({},e),Ge(m)),n(7,r=ee(e,i)),"use"in m&&n(0,l=m.use),"class"in m&&n(1,c=m.class),"component"in m&&n(2,h=m.component),"$$scope"in m&&n(11,o=m.$$scope)},[l,c,h,u,a,d,f,r,p,s,g,o]}class vO extends Ke{constructor(e){super();ze(this,e,_O,gO,Ve,{use:0,class:1,component:2,getElement:8})}get getElement(){return this.$$.ctx[8]}}function yO(t){let e;const n=t[4].default,i=Ee(n,t,t[3],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,[s]){i&&i.p&&(!e||s&8)&&Te(i,n,r,r[3],e?we(n,r[3],s,null):Ce(r[3]),null)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function bO(t,e,n){let i,{$$slots:r={},$$scope:s}=e,{key:o}=e,{value:a}=e;const l=Cp(a);return r0(t,l,c=>n(5,i=c)),Ot(o,l),Zi(()=>{l.set(void 0)}),t.$$set=c=>{"key"in c&&n(1,o=c.key),"value"in c&&n(2,a=c.value),"$$scope"in c&&n(3,s=c.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&o0(l,i=a,i)},[l,o,a,s,r]}class lc extends Ke{constructor(e){super();ze(this,e,bO,yO,Ve,{key:1,value:2})}}const oV=vO;/**
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
 */var IO=function(t){mn(e,t);function e(n){return t.call(this,lt(lt({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return $n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return di},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(di.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(n){this.adapter.setContent(n)},e.prototype.isPersistent=function(){return this.adapter.hasClass($n.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(n){n?this.adapter.addClass($n.HELPER_TEXT_PERSISTENT):this.adapter.removeClass($n.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass($n.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(n){n?this.adapter.addClass($n.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass($n.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(di.ARIA_HIDDEN)},e.prototype.setValidity=function(n){var i=this.adapter.hasClass($n.HELPER_TEXT_PERSISTENT),r=this.adapter.hasClass($n.HELPER_TEXT_VALIDATION_MSG),s=r&&!n;s?(this.showToScreenReader(),this.adapter.getAttr(di.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(di.ROLE,"alert")):this.adapter.removeAttr(di.ROLE),!i&&!s&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(di.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var n=this;this.adapter.removeAttr(di.ROLE),requestAnimationFrame(function(){n.adapter.setAttr(di.ROLE,"alert")})},e}(Hn);function EO(t){let e;return{c(){e=bi(t[8])},l(n){e=Gr(n,t[8])},m(n,i){ie(n,e,i)},p(n,i){i&256&&Qs(e,n[8])},i:Qt,o:Qt,d(n){n&&P(e)}}}function wO(t){let e;const n=t[13].default,i=Ee(n,t,t[12],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&4096)&&Te(i,n,r,r[12],e?we(n,r[12],s,null):Ce(r[12]),null)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function TO(t){let e,n,i,r,s,o,a,l,c;const u=[wO,EO],h=[];function d(g,m){return g[8]==null?0:1}n=d(t),i=h[n]=u[n](t);let f=[{class:r=ue(et({[t[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":t[3],"mdc-text-field-helper-text--validation-msg":t[4]},t[6]))},{"aria-hidden":s=t[3]?void 0:"true"},{id:t[2]},t[7],t[10]],p={};for(let g=0;g<f.length;g+=1)p=x(p,f[g]);return{c(){e=ve("div"),i.c(),this.h()},l(g){e=Se(g,"DIV",{class:!0,"aria-hidden":!0,id:!0});var m=fe(e);i.l(m),m.forEach(P),this.h()},h(){se(e,p)},m(g,m){ie(g,e,m),h[n].m(e,null),t[14](e),a=!0,l||(c=[re(o=nt.call(null,e,t[0])),re(t[9].call(null,e))],l=!0)},p(g,[m]){let v=n;n=d(g),n===v?h[n].p(g,m):(Jt(),B(h[v],1,1,()=>{h[v]=null}),Zt(),i=h[n],i?i.p(g,m):(i=h[n]=u[n](g),i.c()),D(i,1),i.m(e,null)),se(e,p=ke(f,[(!a||m&90&&r!==(r=ue(et({[g[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":g[3],"mdc-text-field-helper-text--validation-msg":g[4]},g[6]))))&&{class:r},(!a||m&8&&s!==(s=g[3]?void 0:"true"))&&{"aria-hidden":s},(!a||m&4)&&{id:g[2]},m&128&&g[7],m&1024&&g[10]])),o&&xe(o.update)&&m&1&&o.update.call(null,g[0])},i(g){a||(D(i),a=!0)},o(g){B(i),a=!1},d(g){g&&P(e),h[n].d(),t[14](null),l=!1,We(c)}}}let CO=0;function SO(t,e,n){const i=["use","class","id","persistent","validationMsg","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e;const a=Je(De());let{use:l=[]}=e,{class:c=""}=e,{id:u="SMUI-textfield-helper-text-"+CO++}=e,{persistent:h=!1}=e,{validationMsg:d=!1}=e,f,p,g={},m={},v;Tn(()=>(p=new IO({addClass:I,removeClass:y,hasClass:E,getAttr:M,setAttr:k,removeAttr:_,setContent:b=>{n(8,v=b)}}),u.startsWith("SMUI-textfield-helper-text-")&&tt(T(),"SMUITextfieldHelperText:id",u),tt(T(),"SMUITextfieldHelperText:mount",p),p.init(),()=>{tt(T(),"SMUITextfieldHelperText:unmount",p),p.destroy()}));function E(b){return b in g?g[b]:T().classList.contains(b)}function I(b){g[b]||n(6,g[b]=!0,g)}function y(b){(!(b in g)||g[b])&&n(6,g[b]=!1,g)}function M(b){var O;return b in m?(O=m[b])!==null&&O!==void 0?O:null:T().getAttribute(b)}function k(b,O){m[b]!==O&&n(7,m[b]=O,m)}function _(b){(!(b in m)||m[b]!=null)&&n(7,m[b]=void 0,m)}function T(){return f}function V(b){le[b?"unshift":"push"](()=>{f=b,n(5,f)})}return t.$$set=b=>{e=x(x({},e),Ge(b)),n(10,r=ee(e,i)),"use"in b&&n(0,l=b.use),"class"in b&&n(1,c=b.class),"id"in b&&n(2,u=b.id),"persistent"in b&&n(3,h=b.persistent),"validationMsg"in b&&n(4,d=b.validationMsg),"$$scope"in b&&n(12,o=b.$$scope)},[l,c,u,h,d,f,g,m,v,a,r,T,o,s,V]}class aV extends Ke{constructor(e){super();ze(this,e,SO,TO,Ve,{use:0,class:1,id:2,persistent:3,validationMsg:4,getElement:11})}get getElement(){return this.$$.ctx[11]}}/**
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
 */var AO={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
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
 */var kO=function(t){mn(e,t);function e(n){var i=t.call(this,lt(lt({},e.defaultAdapter),n))||this;return i.shakeAnimationEndHandler=function(){i.handleShakeAnimationEnd()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return AO},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(n){var i=e.cssClasses.LABEL_SHAKE;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.float=function(n){var i=e.cssClasses,r=i.LABEL_FLOAT_ABOVE,s=i.LABEL_SHAKE;n?this.adapter.addClass(r):(this.adapter.removeClass(r),this.adapter.removeClass(s))},e.prototype.setRequired=function(n){var i=e.cssClasses.LABEL_REQUIRED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleShakeAnimationEnd=function(){var n=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(n)},e}(Hn);/**
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
 */var wr={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
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
 */var RO=function(t){mn(e,t);function e(n){var i=t.call(this,lt(lt({},e.defaultAdapter),n))||this;return i.transitionEndHandler=function(r){i.handleTransitionEnd(r)},i}return Object.defineProperty(e,"cssClasses",{get:function(){return wr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(wr.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(wr.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(n){this.adapter.setStyle("transform-origin",n+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(wr.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(n){var i=this.adapter.hasClass(wr.LINE_RIPPLE_DEACTIVATING);n.propertyName==="opacity"&&i&&(this.adapter.removeClass(wr.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(wr.LINE_RIPPLE_DEACTIVATING))},e}(Hn);/**
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
 */var OO={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Vv={NOTCH_ELEMENT_PADDING:8},LO={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
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
 */var MO=function(t){mn(e,t);function e(n){return t.call(this,lt(lt({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"strings",{get:function(){return OO},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return LO},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Vv},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(n){var i=e.cssClasses.OUTLINE_NOTCHED;n>0&&(n+=Vv.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(n),this.adapter.addClass(i)},e.prototype.closeNotch=function(){var n=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(n),this.adapter.removeNotchWidthProperty()},e}(Hn);/**
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
 */var Od={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},NO={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},Bv={LABEL_SCALE:.75},PO=["pattern","min","max","required","step","minlength","maxlength"],DO=["color","date","datetime-local","month","range","time","week"];/**
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
 */var Hv=["mousedown","touchstart"],qv=["click","keydown"],FO=function(t){mn(e,t);function e(n,i){i===void 0&&(i={});var r=t.call(this,lt(lt({},e.defaultAdapter),n))||this;return r.isFocused=!1,r.receivedUserInput=!1,r.valid=!0,r.useNativeValidation=!0,r.validateOnValueChange=!0,r.helperText=i.helperText,r.characterCounter=i.characterCounter,r.leadingIcon=i.leadingIcon,r.trailingIcon=i.trailingIcon,r.inputFocusHandler=function(){r.activateFocus()},r.inputBlurHandler=function(){r.deactivateFocus()},r.inputInputHandler=function(){r.handleInput()},r.setPointerXOffset=function(s){r.setTransformOrigin(s)},r.textFieldInteractionHandler=function(){r.handleTextFieldInteraction()},r.validationAttributeChangeHandler=function(s){r.handleValidationAttributeChange(s)},r}return Object.defineProperty(e,"cssClasses",{get:function(){return NO},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Od},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Bv},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var n=this.getNativeInput().type;return DO.indexOf(n)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n,i,r,s;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var o=Mn(Hv),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.registerInputInteractionHandler(l,this.setPointerXOffset)}}catch(h){n={error:h}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}try{for(var c=Mn(qv),u=c.next();!u.done;u=c.next()){var l=u.value;this.adapter.registerTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(h){r={error:h}}finally{try{u&&!u.done&&(s=c.return)&&s.call(c)}finally{if(r)throw r.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var n,i,r,s;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var o=Mn(Hv),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.deregisterInputInteractionHandler(l,this.setPointerXOffset)}}catch(h){n={error:h}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}try{for(var c=Mn(qv),u=c.next();!u.done;u=c.next()){var l=u.value;this.adapter.deregisterTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(h){r={error:h}}finally{try{u&&!u.done&&(s=c.return)&&s.call(c)}finally{if(r)throw r.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var n=this.adapter.getNativeInput();n&&n.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(n){var i=this;n.some(function(r){return PO.indexOf(r)>-1?(i.styleValidity(!0),i.adapter.setLabelRequired(i.getNativeInput().required),!0):!1}),n.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(n){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(n){var i=this.adapter.getLabelWidth()*Bv.LABEL_SCALE;this.adapter.notchOutline(i)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(n){if(!(this.isDisabled()||this.adapter.hasOutline())){var i=n.touches,r=i?i[0]:n,s=r.target.getBoundingClientRect(),o=r.clientX-s.left;this.adapter.setLineRippleTransformOrigin(o)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var n=this.isValid();this.styleValidity(n),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(n){if(this.getValue()!==n&&(this.getNativeInput().value=n),this.setcharacterCounter(n.length),this.validateOnValueChange){var i=this.isValid();this.styleValidity(i)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(n){this.valid=n,this.styleValidity(n);var i=!n&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(i)},e.prototype.setValidateOnValueChange=function(n){this.validateOnValueChange=n},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(n){this.useNativeValidation=n},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(n){this.getNativeInput().disabled=n,this.styleDisabled(n)},e.prototype.setHelperTextContent=function(n){this.helperText&&this.helperText.setContent(n)},e.prototype.setLeadingIconAriaLabel=function(n){this.leadingIcon&&this.leadingIcon.setAriaLabel(n)},e.prototype.setLeadingIconContent=function(n){this.leadingIcon&&this.leadingIcon.setContent(n)},e.prototype.setTrailingIconAriaLabel=function(n){this.trailingIcon&&this.trailingIcon.setAriaLabel(n)},e.prototype.setTrailingIconContent=function(n){this.trailingIcon&&this.trailingIcon.setContent(n)},e.prototype.setcharacterCounter=function(n){if(!!this.characterCounter){var i=this.getNativeInput().maxLength;if(i===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(n,i)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(n){var i=e.cssClasses.INVALID;if(n?this.adapter.removeClass(i):this.adapter.addClass(i),this.helperText){this.helperText.setValidity(n);var r=this.helperText.isValidation();if(!r)return;var s=this.helperText.isVisible(),o=this.helperText.getId();s&&o?this.adapter.setInputAttr(Od.ARIA_DESCRIBEDBY,o):this.adapter.removeInputAttr(Od.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(n){var i=e.cssClasses.FOCUSED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.styleDisabled=function(n){var i=e.cssClasses,r=i.DISABLED,s=i.INVALID;n?(this.adapter.addClass(r),this.adapter.removeClass(s)):this.adapter.removeClass(r),this.leadingIcon&&this.leadingIcon.setDisabled(n),this.trailingIcon&&this.trailingIcon.setDisabled(n)},e.prototype.styleFloating=function(n){var i=e.cssClasses.LABEL_FLOATING;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.getNativeInput=function(){var n=this.adapter?this.adapter.getNativeInput():null;return n||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(Hn);function xO(t){let e,n,i,r,s,o,a,l;const c=t[22].default,u=Ee(c,t,t[21],null);let h=[{class:n=ue(et({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1]},t[8]))},{style:i=Object.entries(t[9]).map(Gv).concat([t[4]]).join(" ")},{for:r=t[5]||(t[11]?t[11].id:void 0)},t[12]],d={};for(let f=0;f<h.length;f+=1)d=x(d,h[f]);return{c(){e=ve("label"),u&&u.c(),this.h()},l(f){e=Se(f,"LABEL",{class:!0,style:!0,for:!0});var p=fe(e);u&&u.l(p),p.forEach(P),this.h()},h(){se(e,d)},m(f,p){ie(f,e,p),u&&u.m(e,null),t[24](e),o=!0,a||(l=[re(s=nt.call(null,e,t[2])),re(t[10].call(null,e))],a=!0)},p(f,p){u&&u.p&&(!o||p&2097152)&&Te(u,c,f,f[21],o?we(c,f[21],p,null):Ce(f[21]),null),se(e,d=ke(h,[(!o||p&267&&n!==(n=ue(et({[f[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":f[0],"mdc-floating-label--required":f[1]},f[8]))))&&{class:n},(!o||p&528&&i!==(i=Object.entries(f[9]).map(Gv).concat([f[4]]).join(" ")))&&{style:i},(!o||p&32&&r!==(r=f[5]||(f[11]?f[11].id:void 0)))&&{for:r},p&4096&&f[12]])),s&&xe(s.update)&&p&4&&s.update.call(null,f[2])},i(f){o||(D(u,f),o=!0)},o(f){B(u,f),o=!1},d(f){f&&P(e),u&&u.d(f),t[24](null),a=!1,We(l)}}}function UO(t){let e,n,i,r,s,o,a;const l=t[22].default,c=Ee(l,t,t[21],null);let u=[{class:n=ue(et({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1]},t[8]))},{style:i=Object.entries(t[9]).map(Wv).concat([t[4]]).join(" ")},t[12]],h={};for(let d=0;d<u.length;d+=1)h=x(h,u[d]);return{c(){e=ve("span"),c&&c.c(),this.h()},l(d){e=Se(d,"SPAN",{class:!0,style:!0});var f=fe(e);c&&c.l(f),f.forEach(P),this.h()},h(){se(e,h)},m(d,f){ie(d,e,f),c&&c.m(e,null),t[23](e),s=!0,o||(a=[re(r=nt.call(null,e,t[2])),re(t[10].call(null,e))],o=!0)},p(d,f){c&&c.p&&(!s||f&2097152)&&Te(c,l,d,d[21],s?we(l,d[21],f,null):Ce(d[21]),null),se(e,h=ke(u,[(!s||f&267&&n!==(n=ue(et({[d[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":d[0],"mdc-floating-label--required":d[1]},d[8]))))&&{class:n},(!s||f&528&&i!==(i=Object.entries(d[9]).map(Wv).concat([d[4]]).join(" ")))&&{style:i},f&4096&&d[12]])),r&&xe(r.update)&&f&4&&r.update.call(null,d[2])},i(d){s||(D(c,d),s=!0)},o(d){B(c,d),s=!1},d(d){d&&P(e),c&&c.d(d),t[23](null),o=!1,We(a)}}}function jO(t){let e,n,i,r;const s=[UO,xO],o=[];function a(l,c){return l[6]?0:1}return e=a(t),n=o[e]=s[e](t),{c(){n.c(),i=Tt()},l(l){n.l(l),i=Tt()},m(l,c){o[e].m(l,c),ie(l,i,c),r=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(Jt(),B(o[u],1,1,()=>{o[u]=null}),Zt(),n=o[e],n?n.p(l,c):(n=o[e]=s[e](l),n.c()),D(n,1),n.m(i.parentNode,i))},i(l){r||(D(n),r=!0)},o(l){B(n),r=!1},d(l){o[e].d(l),l&&P(i)}}}const Wv=([t,e])=>`${t}: ${e};`,Gv=([t,e])=>`${t}: ${e};`;function VO(t,e,n){const i=["use","class","style","for","floatAbove","required","wrapped","shake","float","setRequired","getWidth","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e;var a;const l=Je(De());let{use:c=[]}=e,{class:u=""}=e,{style:h=""}=e,{for:d=void 0}=e,{floatAbove:f=!1}=e,{required:p=!1}=e,{wrapped:g=!1}=e,m,v,E={},I={},y=(a=Yt("SMUI:generic:input:props"))!==null&&a!==void 0?a:{},M=f,k=p;Tn(()=>{n(18,v=new kO({addClass:_,removeClass:T,getWidth:()=>{var z,H;const X=R(),he=X.cloneNode(!0);(z=X.parentNode)===null||z===void 0||z.appendChild(he),he.classList.add("smui-floating-label--remove-transition"),he.classList.add("smui-floating-label--force-size"),he.classList.remove("mdc-floating-label--float-above");const q=he.scrollWidth;return(H=X.parentNode)===null||H===void 0||H.removeChild(he),q},registerInteractionHandler:(z,H)=>R().addEventListener(z,H),deregisterInteractionHandler:(z,H)=>R().removeEventListener(z,H)}));const A={get element(){return R()},addStyle:V,removeStyle:b};return tt(m,"SMUIFloatingLabel:mount",A),v.init(),()=>{tt(m,"SMUIFloatingLabel:unmount",A),v.destroy()}});function _(A){E[A]||n(8,E[A]=!0,E)}function T(A){(!(A in E)||E[A])&&n(8,E[A]=!1,E)}function V(A,z){I[A]!=z&&(z===""||z==null?(delete I[A],n(9,I)):n(9,I[A]=z,I))}function b(A){A in I&&(delete I[A],n(9,I))}function O(A){v.shake(A)}function J(A){n(0,f=A)}function w(A){n(1,p=A)}function L(){return v.getWidth()}function R(){return m}function G(A){le[A?"unshift":"push"](()=>{m=A,n(7,m)})}function S(A){le[A?"unshift":"push"](()=>{m=A,n(7,m)})}return t.$$set=A=>{e=x(x({},e),Ge(A)),n(12,r=ee(e,i)),"use"in A&&n(2,c=A.use),"class"in A&&n(3,u=A.class),"style"in A&&n(4,h=A.style),"for"in A&&n(5,d=A.for),"floatAbove"in A&&n(0,f=A.floatAbove),"required"in A&&n(1,p=A.required),"wrapped"in A&&n(6,g=A.wrapped),"$$scope"in A&&n(21,o=A.$$scope)},t.$$.update=()=>{t.$$.dirty&786433&&v&&M!==f&&(n(19,M=f),v.float(f)),t.$$.dirty&1310722&&v&&k!==p&&(n(20,k=p),v.setRequired(p))},[f,p,c,u,h,d,g,m,E,I,l,y,r,O,J,w,L,R,v,M,k,o,s,G,S]}class zv extends Ke{constructor(e){super();ze(this,e,VO,jO,Ve,{use:2,class:3,style:4,for:5,floatAbove:0,required:1,wrapped:6,shake:13,float:14,setRequired:15,getWidth:16,getElement:17})}get shake(){return this.$$.ctx[13]}get float(){return this.$$.ctx[14]}get setRequired(){return this.$$.ctx[15]}get getWidth(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}function BO(t){let e,n,i,r,s,o,a=[{class:n=ue(et({[t[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":t[3]},t[5]))},{style:i=Object.entries(t[6]).map(Kv).concat([t[2]]).join(" ")},t[8]],l={};for(let c=0;c<a.length;c+=1)l=x(l,a[c]);return{c(){e=ve("div"),this.h()},l(c){e=Se(c,"DIV",{class:!0,style:!0}),fe(e).forEach(P),this.h()},h(){se(e,l)},m(c,u){ie(c,e,u),t[13](e),s||(o=[re(r=nt.call(null,e,t[0])),re(t[7].call(null,e))],s=!0)},p(c,[u]){se(e,l=ke(a,[u&42&&n!==(n=ue(et({[c[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":c[3]},c[5])))&&{class:n},u&68&&i!==(i=Object.entries(c[6]).map(Kv).concat([c[2]]).join(" "))&&{style:i},u&256&&c[8]])),r&&xe(r.update)&&u&1&&r.update.call(null,c[0])},i:Qt,o:Qt,d(c){c&&P(e),t[13](null),s=!1,We(o)}}}const Kv=([t,e])=>`${t}: ${e};`;function HO(t,e,n){const i=["use","class","style","active","activate","deactivate","setRippleCenter","getElement"];let r=ee(e,i);const s=Je(De());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{active:c=!1}=e,u,h,d={},f={};Tn(()=>(h=new RO({addClass:g,removeClass:m,hasClass:p,setStyle:v,registerEventHandler:(_,T)=>M().addEventListener(_,T),deregisterEventHandler:(_,T)=>M().removeEventListener(_,T)}),h.init(),()=>{h.destroy()}));function p(_){return _ in d?d[_]:M().classList.contains(_)}function g(_){d[_]||n(5,d[_]=!0,d)}function m(_){(!(_ in d)||d[_])&&n(5,d[_]=!1,d)}function v(_,T){f[_]!=T&&(T===""||T==null?(delete f[_],n(6,f)):n(6,f[_]=T,f))}function E(){h.activate()}function I(){h.deactivate()}function y(_){h.setRippleCenter(_)}function M(){return u}function k(_){le[_?"unshift":"push"](()=>{u=_,n(4,u)})}return t.$$set=_=>{e=x(x({},e),Ge(_)),n(8,r=ee(e,i)),"use"in _&&n(0,o=_.use),"class"in _&&n(1,a=_.class),"style"in _&&n(2,l=_.style),"active"in _&&n(3,c=_.active)},[o,a,l,c,u,d,f,s,r,E,I,y,M,k]}class qO extends Ke{constructor(e){super();ze(this,e,HO,BO,Ve,{use:0,class:1,style:2,active:3,activate:9,deactivate:10,setRippleCenter:11,getElement:12})}get activate(){return this.$$.ctx[9]}get deactivate(){return this.$$.ctx[10]}get setRippleCenter(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function Xv(t){let e,n,i;const r=t[14].default,s=Ee(r,t,t[13],null);return{c(){e=ve("div"),s&&s.c(),this.h()},l(o){e=Se(o,"DIV",{class:!0,style:!0});var a=fe(e);s&&s.l(a),a.forEach(P),this.h()},h(){yt(e,"class","mdc-notched-outline__notch"),yt(e,"style",n=Object.entries(t[7]).map(Qv).join(" "))},m(o,a){ie(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&8192)&&Te(s,r,o,o[13],i?we(r,o[13],a,null):Ce(o[13]),null),(!i||a&128&&n!==(n=Object.entries(o[7]).map(Qv).join(" ")))&&yt(e,"style",n)},i(o){i||(D(s,o),i=!0)},o(o){B(s,o),i=!1},d(o){o&&P(e),s&&s.d(o)}}}function WO(t){let e,n,i,r,s,o,a,l,c,u,h=!t[3]&&Xv(t),d=[{class:o=ue(et({[t[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":t[2],"mdc-notched-outline--no-label":t[3]},t[6]))},t[9]],f={};for(let p=0;p<d.length;p+=1)f=x(f,d[p]);return{c(){e=ve("div"),n=ve("div"),i=st(),h&&h.c(),r=st(),s=ve("div"),this.h()},l(p){e=Se(p,"DIV",{class:!0});var g=fe(e);n=Se(g,"DIV",{class:!0}),fe(n).forEach(P),i=ot(g),h&&h.l(g),r=ot(g),s=Se(g,"DIV",{class:!0}),fe(s).forEach(P),g.forEach(P),this.h()},h(){yt(n,"class","mdc-notched-outline__leading"),yt(s,"class","mdc-notched-outline__trailing"),se(e,f)},m(p,g){ie(p,e,g),Ue(e,n),Ue(e,i),h&&h.m(e,null),Ue(e,r),Ue(e,s),t[15](e),l=!0,c||(u=[re(a=nt.call(null,e,t[0])),re(t[8].call(null,e)),Qe(e,"SMUIFloatingLabel:mount",t[16]),Qe(e,"SMUIFloatingLabel:unmount",t[17])],c=!0)},p(p,[g]){p[3]?h&&(Jt(),B(h,1,1,()=>{h=null}),Zt()):h?(h.p(p,g),g&8&&D(h,1)):(h=Xv(p),h.c(),D(h,1),h.m(e,r)),se(e,f=ke(d,[(!l||g&78&&o!==(o=ue(et({[p[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":p[2],"mdc-notched-outline--no-label":p[3]},p[6]))))&&{class:o},g&512&&p[9]])),a&&xe(a.update)&&g&1&&a.update.call(null,p[0])},i(p){l||(D(h),l=!0)},o(p){B(h),l=!1},d(p){p&&P(e),h&&h.d(),t[15](null),c=!1,We(u)}}}const Qv=([t,e])=>`${t}: ${e};`;function GO(t,e,n){const i=["use","class","notched","noLabel","notch","closeNotch","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e;const a=Je(De());let{use:l=[]}=e,{class:c=""}=e,{notched:u=!1}=e,{noLabel:h=!1}=e,d,f,p,g={},m={};Tn(()=>(f=new MO({addClass:v,removeClass:E,setNotchWidthProperty:O=>I("width",O+"px"),removeNotchWidthProperty:()=>y("width")}),f.init(),()=>{f.destroy()}));function v(O){g[O]||n(6,g[O]=!0,g)}function E(O){(!(O in g)||g[O])&&n(6,g[O]=!1,g)}function I(O,J){m[O]!=J&&(J===""||J==null?(delete m[O],n(7,m)):n(7,m[O]=J,m))}function y(O){O in m&&(delete m[O],n(7,m))}function M(O){f.notch(O)}function k(){f.closeNotch()}function _(){return d}function T(O){le[O?"unshift":"push"](()=>{d=O,n(5,d)})}const V=O=>n(4,p=O.detail),b=()=>n(4,p=void 0);return t.$$set=O=>{e=x(x({},e),Ge(O)),n(9,r=ee(e,i)),"use"in O&&n(0,l=O.use),"class"in O&&n(1,c=O.class),"notched"in O&&n(2,u=O.notched),"noLabel"in O&&n(3,h=O.noLabel),"$$scope"in O&&n(13,o=O.$$scope)},t.$$.update=()=>{t.$$.dirty&16&&(p?(p.addStyle("transition-duration","0s"),v("mdc-notched-outline--upgraded"),requestAnimationFrame(()=>{p&&p.removeStyle("transition-duration")})):E("mdc-notched-outline--upgraded"))},[l,c,u,h,p,d,g,m,a,r,M,k,_,o,s,T,V,b]}class zO extends Ke{constructor(e){super();ze(this,e,GO,WO,Ve,{use:0,class:1,notched:2,noLabel:3,notch:10,closeNotch:11,getElement:12})}get notch(){return this.$$.ctx[10]}get closeNotch(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function KO(t){let e;const n=t[10].default,i=Ee(n,t,t[12],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&4096)&&Te(i,n,r,r[12],e?we(n,r[12],s,null):Ce(r[12]),null)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function XO(t){let e,n,i;const r=[{use:[t[7],...t[0]]},{class:ue(et({[t[1]]:!0,[t[5]]:!0},t[4]))},t[6],t[8]];var s=t[2];function o(a){let l={$$slots:{default:[KO]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=x(l,r[c]);return{props:l}}return s&&(e=new s(o(t)),t[11](e)),{c(){e&&bt(e.$$.fragment),n=Tt()},l(a){e&&Dt(e.$$.fragment,a),n=Tt()},m(a,l){e&&pt(e,a,l),ie(a,n,l),i=!0},p(a,[l]){const c=l&499?ke(r,[l&129&&{use:[a[7],...a[0]]},l&50&&{class:ue(et({[a[1]]:!0,[a[5]]:!0},a[4]))},l&64&&ft(a[6]),l&256&&ft(a[8])]):{};if(l&4096&&(c.$$scope={dirty:l,ctx:a}),s!==(s=a[2])){if(e){Jt();const u=e;B(u.$$.fragment,1,0,()=>{mt(u,1)}),Zt()}s?(e=new s(o(a)),a[11](e),bt(e.$$.fragment),D(e.$$.fragment,1),pt(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(a){i||(e&&D(e.$$.fragment,a),i=!0)},o(a){e&&B(e.$$.fragment,a),i=!1},d(a){t[11](null),a&&P(n),e&&mt(e,a)}}}const ji={component:Dv,class:"",classMap:{},contexts:{},props:{}};function QO(t,e,n){const i=["use","class","component","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e,{class:l=""}=e,c;const u=ji.class,h={},d=[],f=ji.contexts,p=ji.props;let{component:g=ji.component}=e;Object.entries(ji.classMap).forEach(([I,y])=>{const M=Yt(y);M&&"subscribe"in M&&d.push(M.subscribe(k=>{n(4,h[I]=k,h)}))});const m=Je(De());for(let I in f)f.hasOwnProperty(I)&&Ot(I,f[I]);Zi(()=>{for(const I of d)I()});function v(){return c.getElement()}function E(I){le[I?"unshift":"push"](()=>{c=I,n(3,c)})}return t.$$set=I=>{e=x(x({},e),Ge(I)),n(8,r=ee(e,i)),"use"in I&&n(0,a=I.use),"class"in I&&n(1,l=I.class),"component"in I&&n(2,g=I.component),"$$scope"in I&&n(12,o=I.$$scope)},[a,l,g,c,h,u,p,m,r,v,s,E,o]}class YO extends Ke{constructor(e){super();ze(this,e,QO,XO,Ve,{use:0,class:1,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const Yv=Object.assign({},ji);function xt(t){return new Proxy(YO,{construct:function(e,n){return Object.assign(ji,Yv,t),new e(...n)},get:function(e,n){return Object.assign(ji,Yv,t),e[n]}})}var JO=xt({class:"mdc-text-field-helper-line",component:hi}),ZO=xt({class:"mdc-text-field__affix mdc-text-field__affix--prefix",component:Er}),$O=xt({class:"mdc-text-field__affix mdc-text-field__affix--suffix",component:Er});function eL(t){let e,n,i,r,s,o=[{class:n=ue({[t[1]]:!0,"mdc-text-field__input":!0})},{type:t[2]},{placeholder:t[3]},t[4],t[6],t[10]],a={};for(let l=0;l<o.length;l+=1)a=x(a,o[l]);return{c(){e=ve("input"),this.h()},l(l){e=Se(l,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){se(e,a)},m(l,c){ie(l,e,c),e.autofocus&&e.focus(),t[25](e),r||(s=[re(i=nt.call(null,e,t[0])),re(t[7].call(null,e)),Qe(e,"input",t[26]),Qe(e,"change",t[9]),Qe(e,"blur",t[23]),Qe(e,"focus",t[24])],r=!0)},p(l,[c]){se(e,a=ke(o,[c&2&&n!==(n=ue({[l[1]]:!0,"mdc-text-field__input":!0}))&&{class:n},c&4&&{type:l[2]},c&8&&{placeholder:l[3]},c&16&&l[4],c&64&&l[6],c&1024&&l[10]])),i&&xe(i.update)&&c&1&&i.update.call(null,l[0])},i:Qt,o:Qt,d(l){l&&P(e),t[25](null),r=!1,We(s)}}}function tL(t){if(t===""){const e=new Number(Number.NaN);return e.length=0,e}return+t}function nL(t,e,n){const i=["use","class","type","placeholder","value","files","dirty","invalid","updateInvalid","emptyValueNull","emptyValueUndefined","getAttr","addAttr","removeAttr","focus","getElement"];let r=ee(e,i);const s=Je(De());let{use:o=[]}=e,{class:a=""}=e,{type:l="text"}=e,{placeholder:c=" "}=e,{value:u=""}=e,{files:h=null}=e,{dirty:d=!1}=e,{invalid:f=!1}=e,{updateInvalid:p=!0}=e,{emptyValueNull:g=u===null}=e,{emptyValueUndefined:m=u===void 0}=e,v,E={},I={};Tn(()=>{p&&n(14,f=v.matches(":invalid"))});function y(R){if(l==="file"){n(12,h=R.currentTarget.files);return}if(R.currentTarget.value===""&&g){n(11,u=null);return}if(R.currentTarget.value===""&&m){n(11,u=void 0);return}switch(l){case"number":case"range":n(11,u=tL(R.currentTarget.value));break;default:n(11,u=R.currentTarget.value);break}}function M(R){(l==="file"||l==="range")&&y(R),n(13,d=!0),p&&n(14,f=v.matches(":invalid"))}function k(R){var G;return R in E?(G=E[R])!==null&&G!==void 0?G:null:b().getAttribute(R)}function _(R,G){E[R]!==G&&n(6,E[R]=G,E)}function T(R){(!(R in E)||E[R]!=null)&&n(6,E[R]=void 0,E)}function V(){b().focus()}function b(){return v}function O(R){Ys.call(this,t,R)}function J(R){Ys.call(this,t,R)}function w(R){le[R?"unshift":"push"](()=>{v=R,n(5,v)})}const L=R=>l!=="file"&&y(R);return t.$$set=R=>{e=x(x({},e),Ge(R)),n(10,r=ee(e,i)),"use"in R&&n(0,o=R.use),"class"in R&&n(1,a=R.class),"type"in R&&n(2,l=R.type),"placeholder"in R&&n(3,c=R.placeholder),"value"in R&&n(11,u=R.value),"files"in R&&n(12,h=R.files),"dirty"in R&&n(13,d=R.dirty),"invalid"in R&&n(14,f=R.invalid),"updateInvalid"in R&&n(15,p=R.updateInvalid),"emptyValueNull"in R&&n(16,g=R.emptyValueNull),"emptyValueUndefined"in R&&n(17,m=R.emptyValueUndefined)},t.$$.update=()=>{t.$$.dirty&2068&&(l==="file"?(delete I.value,n(4,I),n(2,l),n(11,u)):n(4,I.value=u==null?"":u,I))},[o,a,l,c,I,v,E,s,y,M,r,u,h,d,f,p,g,m,k,_,T,V,b,O,J,w,L]}class iL extends Ke{constructor(e){super();ze(this,e,nL,eL,Ve,{use:0,class:1,type:2,placeholder:3,value:11,files:12,dirty:13,invalid:14,updateInvalid:15,emptyValueNull:16,emptyValueUndefined:17,getAttr:18,addAttr:19,removeAttr:20,focus:21,getElement:22})}get getAttr(){return this.$$.ctx[18]}get addAttr(){return this.$$.ctx[19]}get removeAttr(){return this.$$.ctx[20]}get focus(){return this.$$.ctx[21]}get getElement(){return this.$$.ctx[22]}}function rL(t){let e,n,i,r,s,o,a=[{class:n=ue({[t[2]]:!0,"mdc-text-field__input":!0})},{style:i=`${t[4]?"":"resize: none; "}${t[3]}`},t[6],t[9]],l={};for(let c=0;c<a.length;c+=1)l=x(l,a[c]);return{c(){e=ve("textarea"),this.h()},l(c){e=Se(c,"TEXTAREA",{class:!0,style:!0}),fe(e).forEach(P),this.h()},h(){se(e,l)},m(c,u){ie(c,e,u),e.autofocus&&e.focus(),t[20](e),Ip(e,t[0]),s||(o=[re(r=nt.call(null,e,t[1])),re(t[7].call(null,e)),Qe(e,"change",t[8]),Qe(e,"blur",t[18]),Qe(e,"focus",t[19]),Qe(e,"input",t[21])],s=!0)},p(c,[u]){se(e,l=ke(a,[u&4&&n!==(n=ue({[c[2]]:!0,"mdc-text-field__input":!0}))&&{class:n},u&24&&i!==(i=`${c[4]?"":"resize: none; "}${c[3]}`)&&{style:i},u&64&&c[6],u&512&&c[9]])),r&&xe(r.update)&&u&2&&r.update.call(null,c[1]),u&1&&Ip(e,c[0])},i:Qt,o:Qt,d(c){c&&P(e),t[20](null),s=!1,We(o)}}}function sL(t,e,n){const i=["use","class","style","value","dirty","invalid","updateInvalid","resizable","getAttr","addAttr","removeAttr","focus","getElement"];let r=ee(e,i);const s=Je(De());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{value:c=""}=e,{dirty:u=!1}=e,{invalid:h=!1}=e,{updateInvalid:d=!0}=e,{resizable:f=!0}=e,p,g={};Tn(()=>{d&&n(11,h=p.matches(":invalid"))});function m(){n(10,u=!0),d&&n(11,h=p.matches(":invalid"))}function v(b){var O;return b in g?(O=g[b])!==null&&O!==void 0?O:null:M().getAttribute(b)}function E(b,O){g[b]!==O&&n(6,g[b]=O,g)}function I(b){(!(b in g)||g[b]!=null)&&n(6,g[b]=void 0,g)}function y(){M().focus()}function M(){return p}function k(b){Ys.call(this,t,b)}function _(b){Ys.call(this,t,b)}function T(b){le[b?"unshift":"push"](()=>{p=b,n(5,p)})}function V(){c=this.value,n(0,c)}return t.$$set=b=>{e=x(x({},e),Ge(b)),n(9,r=ee(e,i)),"use"in b&&n(1,o=b.use),"class"in b&&n(2,a=b.class),"style"in b&&n(3,l=b.style),"value"in b&&n(0,c=b.value),"dirty"in b&&n(10,u=b.dirty),"invalid"in b&&n(11,h=b.invalid),"updateInvalid"in b&&n(12,d=b.updateInvalid),"resizable"in b&&n(4,f=b.resizable)},[c,o,a,l,f,p,g,s,m,r,u,h,d,v,E,I,y,M,k,_,T,V]}class oL extends Ke{constructor(e){super();ze(this,e,sL,rL,Ve,{use:1,class:2,style:3,value:0,dirty:10,invalid:11,updateInvalid:12,resizable:4,getAttr:13,addAttr:14,removeAttr:15,focus:16,getElement:17})}get getAttr(){return this.$$.ctx[13]}get addAttr(){return this.$$.ctx[14]}get removeAttr(){return this.$$.ctx[15]}get focus(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}const aL=t=>({}),Jv=t=>({}),lL=t=>({}),Zv=t=>({}),cL=t=>({}),$v=t=>({}),uL=t=>({}),ey=t=>({}),hL=t=>({}),ty=t=>({}),dL=t=>({}),ny=t=>({}),fL=t=>({}),iy=t=>({}),pL=t=>({}),ry=t=>({}),mL=t=>({}),sy=t=>({}),gL=t=>({}),oy=t=>({}),_L=t=>({}),ay=t=>({}),vL=t=>({}),ly=t=>({});function yL(t){let e,n,i,r,s,o,a,l,c,u,h,d,f,p;const g=t[50].label,m=Ee(g,t,t[89],ty);i=new lc({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[IL]},$$scope:{ctx:t}}});const v=t[50].default,E=Ee(v,t,t[89],null);o=new lc({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[EL]},$$scope:{ctx:t}}});const I=t[50].ripple,y=Ee(I,t,t[89],Zv);let M=[{class:l=ue(et({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||!t[41].label,"mdc-text-field--with-leading-icon":t[41].leadingIcon,"mdc-text-field--with-trailing-icon":t[41].trailingIcon,"mdc-text-field--invalid":t[1]},t[25]))},{style:c=Object.entries(t[26]).map(yy).concat([t[10]]).join(" ")},xi(t[42],["input$","label$","ripple$","outline$","helperLine$"])],k={};for(let _=0;_<M.length;_+=1)k=x(k,M[_]);return{c(){e=ve("div"),m&&m.c(),n=st(),bt(i.$$.fragment),r=st(),E&&E.c(),s=st(),bt(o.$$.fragment),a=st(),y&&y.c(),this.h()},l(_){e=Se(_,"DIV",{class:!0,style:!0});var T=fe(e);m&&m.l(T),n=ot(T),Dt(i.$$.fragment,T),r=ot(T),E&&E.l(T),s=ot(T),Dt(o.$$.fragment,T),a=ot(T),y&&y.l(T),T.forEach(P),this.h()},h(){se(e,k)},m(_,T){ie(_,e,T),m&&m.m(e,null),Ue(e,n),pt(i,e,null),Ue(e,r),E&&E.m(e,null),Ue(e,s),pt(o,e,null),Ue(e,a),y&&y.m(e,null),t[79](e),d=!0,f||(p=[re(u=Ir.call(null,e,{ripple:t[11],unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40]})),re(h=nt.call(null,e,t[8])),re(t[34].call(null,e)),Qe(e,"SMUITextfieldLeadingIcon:mount",t[80]),Qe(e,"SMUITextfieldLeadingIcon:unmount",t[81]),Qe(e,"SMUITextfieldTrailingIcon:mount",t[82]),Qe(e,"SMUITextfieldTrailingIcon:unmount",t[83])],f=!0)},p(_,T){m&&m.p&&(!d||T[2]&134217728)&&Te(m,g,_,_[89],d?we(g,_[89],T,hL):Ce(_[89]),ty);const V={};T[2]&134217728&&(V.$$scope={dirty:T,ctx:_}),i.$set(V),E&&E.p&&(!d||T[2]&134217728)&&Te(E,v,_,_[89],d?we(v,_[89],T,null):Ce(_[89]),null);const b={};T[2]&134217728&&(b.$$scope={dirty:T,ctx:_}),o.$set(b),y&&y.p&&(!d||T[2]&134217728)&&Te(y,I,_,_[89],d?we(I,_[89],T,lL):Ce(_[89]),Zv),se(e,k=ke(M,[(!d||T[0]&33673730|T[1]&1024&&l!==(l=ue(et({[_[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":_[12],"mdc-text-field--textarea":_[14],"mdc-text-field--filled":_[15]==="filled","mdc-text-field--outlined":_[15]==="outlined","smui-text-field--standard":_[15]==="standard"&&!_[14],"mdc-text-field--no-label":_[16]||!_[41].label,"mdc-text-field--with-leading-icon":_[41].leadingIcon,"mdc-text-field--with-trailing-icon":_[41].trailingIcon,"mdc-text-field--invalid":_[1]},_[25]))))&&{class:l},(!d||T[0]&67109888&&c!==(c=Object.entries(_[26]).map(yy).concat([_[10]]).join(" ")))&&{style:c},T[1]&2048&&xi(_[42],["input$","label$","ripple$","outline$","helperLine$"])])),u&&xe(u.update)&&T[0]&2048&&u.update.call(null,{ripple:_[11],unbounded:!1,addClass:_[38],removeClass:_[39],addStyle:_[40]}),h&&xe(h.update)&&T[0]&256&&h.update.call(null,_[8])},i(_){d||(D(m,_),D(i.$$.fragment,_),D(E,_),D(o.$$.fragment,_),D(y,_),d=!0)},o(_){B(m,_),B(i.$$.fragment,_),B(E,_),B(o.$$.fragment,_),B(y,_),d=!1},d(_){_&&P(e),m&&m.d(_),mt(i),E&&E.d(_),mt(o),y&&y.d(_),t[79](null),f=!1,We(p)}}}function bL(t){let e,n,i,r,s,o,a,l,c,u,h,d,f,p,g,m,v,E,I=!t[14]&&t[15]!=="outlined"&&cy(t),y=(t[14]||t[15]==="outlined")&&dy(t);r=new lc({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[SL]},$$scope:{ctx:t}}});const M=t[50].default,k=Ee(M,t,t[89],null),_=[kL,AL],T=[];function V(w,L){return w[14]&&typeof w[0]=="string"?0:1}a=V(t),l=T[a]=_[a](t),u=new lc({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[LL]},$$scope:{ctx:t}}});let b=!t[14]&&t[15]!=="outlined"&&t[11]&&gy(t),O=[{class:d=ue(et({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||t[17]==null&&!t[41].label,"mdc-text-field--label-floating":t[28]||t[0]!=null&&t[0]!=="","mdc-text-field--with-leading-icon":t[35](t[22])?t[41].leadingIcon:t[22],"mdc-text-field--with-trailing-icon":t[35](t[23])?t[41].trailingIcon:t[23],"mdc-text-field--with-internal-counter":t[14]&&t[41].internalCounter,"mdc-text-field--invalid":t[1]},t[25]))},{style:f=Object.entries(t[26]).map(vy).concat([t[10]]).join(" ")},{for:void 0},xi(t[42],["input$","label$","ripple$","outline$","helperLine$"])],J={};for(let w=0;w<O.length;w+=1)J=x(J,O[w]);return{c(){e=ve("label"),I&&I.c(),n=st(),y&&y.c(),i=st(),bt(r.$$.fragment),s=st(),k&&k.c(),o=st(),l.c(),c=st(),bt(u.$$.fragment),h=st(),b&&b.c(),this.h()},l(w){e=Se(w,"LABEL",{class:!0,style:!0,for:!0});var L=fe(e);I&&I.l(L),n=ot(L),y&&y.l(L),i=ot(L),Dt(r.$$.fragment,L),s=ot(L),k&&k.l(L),o=ot(L),l.l(L),c=ot(L),Dt(u.$$.fragment,L),h=ot(L),b&&b.l(L),L.forEach(P),this.h()},h(){se(e,J)},m(w,L){ie(w,e,L),I&&I.m(e,null),Ue(e,n),y&&y.m(e,null),Ue(e,i),pt(r,e,null),Ue(e,s),k&&k.m(e,null),Ue(e,o),T[a].m(e,null),Ue(e,c),pt(u,e,null),Ue(e,h),b&&b.m(e,null),t[72](e),m=!0,v||(E=[re(p=Ir.call(null,e,{ripple:!t[14]&&t[15]==="filled",unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40],eventTarget:t[33],activeTarget:t[33],initPromise:t[37]})),re(g=nt.call(null,e,t[8])),re(t[34].call(null,e)),Qe(e,"SMUITextfieldLeadingIcon:mount",t[73]),Qe(e,"SMUITextfieldLeadingIcon:unmount",t[74]),Qe(e,"SMUITextfieldTrailingIcon:mount",t[75]),Qe(e,"SMUITextfieldTrailingIcon:unmount",t[76]),Qe(e,"SMUITextfieldCharacterCounter:mount",t[77]),Qe(e,"SMUITextfieldCharacterCounter:unmount",t[78])],v=!0)},p(w,L){!w[14]&&w[15]!=="outlined"?I?(I.p(w,L),L[0]&49152&&D(I,1)):(I=cy(w),I.c(),D(I,1),I.m(e,n)):I&&(Jt(),B(I,1,1,()=>{I=null}),Zt()),w[14]||w[15]==="outlined"?y?(y.p(w,L),L[0]&49152&&D(y,1)):(y=dy(w),y.c(),D(y,1),y.m(e,i)):y&&(Jt(),B(y,1,1,()=>{y=null}),Zt());const R={};L[2]&134217728&&(R.$$scope={dirty:L,ctx:w}),r.$set(R),k&&k.p&&(!m||L[2]&134217728)&&Te(k,M,w,w[89],m?we(M,w[89],L,null):Ce(w[89]),null);let G=a;a=V(w),a===G?T[a].p(w,L):(Jt(),B(T[G],1,1,()=>{T[G]=null}),Zt(),l=T[a],l?l.p(w,L):(l=T[a]=_[a](w),l.c()),D(l,1),l.m(e,c));const S={};L[2]&134217728&&(S.$$scope={dirty:L,ctx:w}),u.$set(S),!w[14]&&w[15]!=="outlined"&&w[11]?b?(b.p(w,L),L[0]&51200&&D(b,1)):(b=gy(w),b.c(),D(b,1),b.m(e,null)):b&&(Jt(),B(b,1,1,()=>{b=null}),Zt()),se(e,J=ke(O,[(!m||L[0]&314823171|L[1]&1024&&d!==(d=ue(et({[w[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":w[12],"mdc-text-field--textarea":w[14],"mdc-text-field--filled":w[15]==="filled","mdc-text-field--outlined":w[15]==="outlined","smui-text-field--standard":w[15]==="standard"&&!w[14],"mdc-text-field--no-label":w[16]||w[17]==null&&!w[41].label,"mdc-text-field--label-floating":w[28]||w[0]!=null&&w[0]!=="","mdc-text-field--with-leading-icon":w[35](w[22])?w[41].leadingIcon:w[22],"mdc-text-field--with-trailing-icon":w[35](w[23])?w[41].trailingIcon:w[23],"mdc-text-field--with-internal-counter":w[14]&&w[41].internalCounter,"mdc-text-field--invalid":w[1]},w[25]))))&&{class:d},(!m||L[0]&67109888&&f!==(f=Object.entries(w[26]).map(vy).concat([w[10]]).join(" ")))&&{style:f},{for:void 0},L[1]&2048&&xi(w[42],["input$","label$","ripple$","outline$","helperLine$"])])),p&&xe(p.update)&&L[0]&49152|L[1]&4&&p.update.call(null,{ripple:!w[14]&&w[15]==="filled",unbounded:!1,addClass:w[38],removeClass:w[39],addStyle:w[40],eventTarget:w[33],activeTarget:w[33],initPromise:w[37]}),g&&xe(g.update)&&L[0]&256&&g.update.call(null,w[8])},i(w){m||(D(I),D(y),D(r.$$.fragment,w),D(k,w),D(l),D(u.$$.fragment,w),D(b),m=!0)},o(w){B(I),B(y),B(r.$$.fragment,w),B(k,w),B(l),B(u.$$.fragment,w),B(b),m=!1},d(w){w&&P(e),I&&I.d(),y&&y.d(),mt(r),k&&k.d(w),T[a].d(),mt(u),b&&b.d(),t[72](null),v=!1,We(E)}}}function IL(t){let e;const n=t[50].leadingIcon,i=Ee(n,t,t[89],ey);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&Te(i,n,r,r[89],e?we(n,r[89],s,uL):Ce(r[89]),ey)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function EL(t){let e;const n=t[50].trailingIcon,i=Ee(n,t,t[89],$v);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&Te(i,n,r,r[89],e?we(n,r[89],s,cL):Ce(r[89]),$v)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function cy(t){let e,n,i,r=t[15]==="filled"&&uy(),s=!t[16]&&(t[17]!=null||t[41].label)&&hy(t);return{c(){r&&r.c(),e=st(),s&&s.c(),n=Tt()},l(o){r&&r.l(o),e=ot(o),s&&s.l(o),n=Tt()},m(o,a){r&&r.m(o,a),ie(o,e,a),s&&s.m(o,a),ie(o,n,a),i=!0},p(o,a){o[15]==="filled"?r||(r=uy(),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),!o[16]&&(o[17]!=null||o[41].label)?s?(s.p(o,a),a[0]&196608|a[1]&1024&&D(s,1)):(s=hy(o),s.c(),D(s,1),s.m(n.parentNode,n)):s&&(Jt(),B(s,1,1,()=>{s=null}),Zt())},i(o){i||(D(s),i=!0)},o(o){B(s),i=!1},d(o){r&&r.d(o),o&&P(e),s&&s.d(o),o&&P(n)}}}function uy(t){let e;return{c(){e=ve("span"),this.h()},l(n){e=Se(n,"SPAN",{class:!0}),fe(e).forEach(P),this.h()},h(){yt(e,"class","mdc-text-field__ripple")},m(n,i){ie(n,e,i)},d(n){n&&P(e)}}}function hy(t){let e,n;const i=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},Wt(t[42],"label$")];let r={$$slots:{default:[wL]},$$scope:{ctx:t}};for(let s=0;s<i.length;s+=1)r=x(r,i[s]);return e=new zv({props:r}),t[51](e),{c(){bt(e.$$.fragment)},l(s){Dt(e.$$.fragment,s)},m(s,o){pt(e,s,o),n=!0},p(s,o){const a=o[0]&268443649|o[1]&2048?ke(i,[o[0]&268435457&&{floatAbove:s[28]||s[0]!=null&&s[0]!==""},o[0]&8192&&{required:s[13]},i[2],o[1]&2048&&ft(Wt(s[42],"label$"))]):{};o[0]&131072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(D(e.$$.fragment,s),n=!0)},o(s){B(e.$$.fragment,s),n=!1},d(s){t[51](null),mt(e,s)}}}function wL(t){let e=(t[17]==null?"":t[17])+"",n,i;const r=t[50].label,s=Ee(r,t,t[89],ly);return{c(){n=bi(e),s&&s.c()},l(o){n=Gr(o,e),s&&s.l(o)},m(o,a){ie(o,n,a),s&&s.m(o,a),i=!0},p(o,a){(!i||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&Qs(n,e),s&&s.p&&(!i||a[2]&134217728)&&Te(s,r,o,o[89],i?we(r,o[89],a,vL):Ce(o[89]),ly)},i(o){i||(D(s,o),i=!0)},o(o){B(s,o),i=!1},d(o){o&&P(n),s&&s.d(o)}}}function dy(t){let e,n;const i=[{noLabel:t[16]||t[17]==null&&!t[41].label},Wt(t[42],"outline$")];let r={$$slots:{default:[CL]},$$scope:{ctx:t}};for(let s=0;s<i.length;s+=1)r=x(r,i[s]);return e=new zO({props:r}),t[53](e),{c(){bt(e.$$.fragment)},l(s){Dt(e.$$.fragment,s)},m(s,o){pt(e,s,o),n=!0},p(s,o){const a=o[0]&196608|o[1]&3072?ke(i,[o[0]&196608|o[1]&1024&&{noLabel:s[16]||s[17]==null&&!s[41].label},o[1]&2048&&ft(Wt(s[42],"outline$"))]):{};o[0]&268640289|o[1]&3072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(D(e.$$.fragment,s),n=!0)},o(s){B(e.$$.fragment,s),n=!1},d(s){t[53](null),mt(e,s)}}}function fy(t){let e,n;const i=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},Wt(t[42],"label$")];let r={$$slots:{default:[TL]},$$scope:{ctx:t}};for(let s=0;s<i.length;s+=1)r=x(r,i[s]);return e=new zv({props:r}),t[52](e),{c(){bt(e.$$.fragment)},l(s){Dt(e.$$.fragment,s)},m(s,o){pt(e,s,o),n=!0},p(s,o){const a=o[0]&268443649|o[1]&2048?ke(i,[o[0]&268435457&&{floatAbove:s[28]||s[0]!=null&&s[0]!==""},o[0]&8192&&{required:s[13]},i[2],o[1]&2048&&ft(Wt(s[42],"label$"))]):{};o[0]&131072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(D(e.$$.fragment,s),n=!0)},o(s){B(e.$$.fragment,s),n=!1},d(s){t[52](null),mt(e,s)}}}function TL(t){let e=(t[17]==null?"":t[17])+"",n,i;const r=t[50].label,s=Ee(r,t,t[89],ay);return{c(){n=bi(e),s&&s.c()},l(o){n=Gr(o,e),s&&s.l(o)},m(o,a){ie(o,n,a),s&&s.m(o,a),i=!0},p(o,a){(!i||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&Qs(n,e),s&&s.p&&(!i||a[2]&134217728)&&Te(s,r,o,o[89],i?we(r,o[89],a,_L):Ce(o[89]),ay)},i(o){i||(D(s,o),i=!0)},o(o){B(s,o),i=!1},d(o){o&&P(n),s&&s.d(o)}}}function CL(t){let e,n,i=!t[16]&&(t[17]!=null||t[41].label)&&fy(t);return{c(){i&&i.c(),e=Tt()},l(r){i&&i.l(r),e=Tt()},m(r,s){i&&i.m(r,s),ie(r,e,s),n=!0},p(r,s){!r[16]&&(r[17]!=null||r[41].label)?i?(i.p(r,s),s[0]&196608|s[1]&1024&&D(i,1)):(i=fy(r),i.c(),D(i,1),i.m(e.parentNode,e)):i&&(Jt(),B(i,1,1,()=>{i=null}),Zt())},i(r){n||(D(i),n=!0)},o(r){B(i),n=!1},d(r){i&&i.d(r),r&&P(e)}}}function SL(t){let e;const n=t[50].leadingIcon,i=Ee(n,t,t[89],oy);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&Te(i,n,r,r[89],e?we(n,r[89],s,gL):Ce(r[89]),oy)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function AL(t){let e,n,i,r,s,o,a,l,c,u;const h=t[50].prefix,d=Ee(h,t,t[89],ry);let f=t[20]!=null&&py(t);const p=[{type:t[18]},{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},t[16]&&t[17]!=null?{placeholder:t[17]}:{},Wt(t[42],"input$")];function g(_){t[63](_)}function m(_){t[64](_)}function v(_){t[65](_)}function E(_){t[66](_)}let I={};for(let _=0;_<p.length;_+=1)I=x(I,p[_]);t[0]!==void 0&&(I.value=t[0]),t[3]!==void 0&&(I.files=t[3]),t[4]!==void 0&&(I.dirty=t[4]),t[1]!==void 0&&(I.invalid=t[1]),i=new iL({props:I}),t[62](i),le.push(()=>Ei(i,"value",g)),le.push(()=>Ei(i,"files",m)),le.push(()=>Ei(i,"dirty",v)),le.push(()=>Ei(i,"invalid",E)),i.$on("blur",t[67]),i.$on("focus",t[68]),i.$on("blur",t[69]),i.$on("focus",t[70]);let y=t[21]!=null&&my(t);const M=t[50].suffix,k=Ee(M,t,t[89],iy);return{c(){d&&d.c(),e=st(),f&&f.c(),n=st(),bt(i.$$.fragment),l=st(),y&&y.c(),c=st(),k&&k.c()},l(_){d&&d.l(_),e=ot(_),f&&f.l(_),n=ot(_),Dt(i.$$.fragment,_),l=ot(_),y&&y.l(_),c=ot(_),k&&k.l(_)},m(_,T){d&&d.m(_,T),ie(_,e,T),f&&f.m(_,T),ie(_,n,T),pt(i,_,T),ie(_,l,T),y&&y.m(_,T),ie(_,c,T),k&&k.m(_,T),u=!0},p(_,T){d&&d.p&&(!u||T[2]&134217728)&&Te(d,h,_,_[89],u?we(h,_[89],T,pL):Ce(_[89]),ry),_[20]!=null?f?(f.p(_,T),T[0]&1048576&&D(f,1)):(f=py(_),f.c(),D(f,1),f.m(n.parentNode,n)):f&&(Jt(),B(f,1,1,()=>{f=null}),Zt());const V=T[0]&135213056|T[1]&2048?ke(p,[T[0]&262144&&{type:_[18]},T[0]&4096&&{disabled:_[12]},T[0]&8192&&{required:_[13]},T[0]&524288&&{updateInvalid:_[19]},T[0]&134217728&&{"aria-controls":_[27]},T[0]&134217728&&{"aria-describedby":_[27]},T[0]&196608&&ft(_[16]&&_[17]!=null?{placeholder:_[17]}:{}),T[1]&2048&&ft(Wt(_[42],"input$"))]):{};!r&&T[0]&1&&(r=!0,V.value=_[0],Ii(()=>r=!1)),!s&&T[0]&8&&(s=!0,V.files=_[3],Ii(()=>s=!1)),!o&&T[0]&16&&(o=!0,V.dirty=_[4],Ii(()=>o=!1)),!a&&T[0]&2&&(a=!0,V.invalid=_[1],Ii(()=>a=!1)),i.$set(V),_[21]!=null?y?(y.p(_,T),T[0]&2097152&&D(y,1)):(y=my(_),y.c(),D(y,1),y.m(c.parentNode,c)):y&&(Jt(),B(y,1,1,()=>{y=null}),Zt()),k&&k.p&&(!u||T[2]&134217728)&&Te(k,M,_,_[89],u?we(M,_[89],T,fL):Ce(_[89]),iy)},i(_){u||(D(d,_),D(f),D(i.$$.fragment,_),D(y),D(k,_),u=!0)},o(_){B(d,_),B(f),B(i.$$.fragment,_),B(y),B(k,_),u=!1},d(_){d&&d.d(_),_&&P(e),f&&f.d(_),_&&P(n),t[62](null),mt(i,_),_&&P(l),y&&y.d(_),_&&P(c),k&&k.d(_)}}}function kL(t){let e,n,i,r,s,o,a,l;const c=[{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},Wt(t[42],"input$")];function u(m){t[55](m)}function h(m){t[56](m)}function d(m){t[57](m)}let f={};for(let m=0;m<c.length;m+=1)f=x(f,c[m]);t[0]!==void 0&&(f.value=t[0]),t[4]!==void 0&&(f.dirty=t[4]),t[1]!==void 0&&(f.invalid=t[1]),n=new oL({props:f}),t[54](n),le.push(()=>Ei(n,"value",u)),le.push(()=>Ei(n,"dirty",h)),le.push(()=>Ei(n,"invalid",d)),n.$on("blur",t[58]),n.$on("focus",t[59]),n.$on("blur",t[60]),n.$on("focus",t[61]);const p=t[50].internalCounter,g=Ee(p,t,t[89],sy);return{c(){e=ve("span"),bt(n.$$.fragment),o=st(),g&&g.c(),this.h()},l(m){e=Se(m,"SPAN",{class:!0});var v=fe(e);Dt(n.$$.fragment,v),o=ot(v),g&&g.l(v),v.forEach(P),this.h()},h(){yt(e,"class",a=ue({"mdc-text-field__resizer":!("input$resizable"in t[42])||t[42].input$resizable}))},m(m,v){ie(m,e,v),pt(n,e,null),Ue(e,o),g&&g.m(e,null),l=!0},p(m,v){const E=v[0]&134754304|v[1]&2048?ke(c,[v[0]&4096&&{disabled:m[12]},v[0]&8192&&{required:m[13]},v[0]&524288&&{updateInvalid:m[19]},v[0]&134217728&&{"aria-controls":m[27]},v[0]&134217728&&{"aria-describedby":m[27]},v[1]&2048&&ft(Wt(m[42],"input$"))]):{};!i&&v[0]&1&&(i=!0,E.value=m[0],Ii(()=>i=!1)),!r&&v[0]&16&&(r=!0,E.dirty=m[4],Ii(()=>r=!1)),!s&&v[0]&2&&(s=!0,E.invalid=m[1],Ii(()=>s=!1)),n.$set(E),g&&g.p&&(!l||v[2]&134217728)&&Te(g,p,m,m[89],l?we(p,m[89],v,mL):Ce(m[89]),sy),(!l||v[1]&2048&&a!==(a=ue({"mdc-text-field__resizer":!("input$resizable"in m[42])||m[42].input$resizable})))&&yt(e,"class",a)},i(m){l||(D(n.$$.fragment,m),D(g,m),l=!0)},o(m){B(n.$$.fragment,m),B(g,m),l=!1},d(m){m&&P(e),t[54](null),mt(n),g&&g.d(m)}}}function py(t){let e,n;return e=new ZO({props:{$$slots:{default:[RL]},$$scope:{ctx:t}}}),{c(){bt(e.$$.fragment)},l(i){Dt(e.$$.fragment,i)},m(i,r){pt(e,i,r),n=!0},p(i,r){const s={};r[0]&1048576|r[2]&134217728&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){n||(D(e.$$.fragment,i),n=!0)},o(i){B(e.$$.fragment,i),n=!1},d(i){mt(e,i)}}}function RL(t){let e;return{c(){e=bi(t[20])},l(n){e=Gr(n,t[20])},m(n,i){ie(n,e,i)},p(n,i){i[0]&1048576&&Qs(e,n[20])},d(n){n&&P(e)}}}function my(t){let e,n;return e=new $O({props:{$$slots:{default:[OL]},$$scope:{ctx:t}}}),{c(){bt(e.$$.fragment)},l(i){Dt(e.$$.fragment,i)},m(i,r){pt(e,i,r),n=!0},p(i,r){const s={};r[0]&2097152|r[2]&134217728&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){n||(D(e.$$.fragment,i),n=!0)},o(i){B(e.$$.fragment,i),n=!1},d(i){mt(e,i)}}}function OL(t){let e;return{c(){e=bi(t[21])},l(n){e=Gr(n,t[21])},m(n,i){ie(n,e,i)},p(n,i){i[0]&2097152&&Qs(e,n[21])},d(n){n&&P(e)}}}function LL(t){let e;const n=t[50].trailingIcon,i=Ee(n,t,t[89],ny);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&Te(i,n,r,r[89],e?we(n,r[89],s,dL):Ce(r[89]),ny)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function gy(t){let e,n;const i=[Wt(t[42],"ripple$")];let r={};for(let s=0;s<i.length;s+=1)r=x(r,i[s]);return e=new qO({props:r}),t[71](e),{c(){bt(e.$$.fragment)},l(s){Dt(e.$$.fragment,s)},m(s,o){pt(e,s,o),n=!0},p(s,o){const a=o[1]&2048?ke(i,[ft(Wt(s[42],"ripple$"))]):{};e.$set(a)},i(s){n||(D(e.$$.fragment,s),n=!0)},o(s){B(e.$$.fragment,s),n=!1},d(s){t[71](null),mt(e,s)}}}function _y(t){let e,n;const i=[Wt(t[42],"helperLine$")];let r={$$slots:{default:[ML]},$$scope:{ctx:t}};for(let s=0;s<i.length;s+=1)r=x(r,i[s]);return e=new JO({props:r}),e.$on("SMUITextfieldHelperText:id",t[84]),e.$on("SMUITextfieldHelperText:mount",t[85]),e.$on("SMUITextfieldHelperText:unmount",t[86]),e.$on("SMUITextfieldCharacterCounter:mount",t[87]),e.$on("SMUITextfieldCharacterCounter:unmount",t[88]),{c(){bt(e.$$.fragment)},l(s){Dt(e.$$.fragment,s)},m(s,o){pt(e,s,o),n=!0},p(s,o){const a=o[1]&2048?ke(i,[ft(Wt(s[42],"helperLine$"))]):{};o[2]&134217728&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(D(e.$$.fragment,s),n=!0)},o(s){B(e.$$.fragment,s),n=!1},d(s){mt(e,s)}}}function ML(t){let e;const n=t[50].helper,i=Ee(n,t,t[89],Jv);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&Te(i,n,r,r[89],e?we(n,r[89],s,aL):Ce(r[89]),Jv)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function NL(t){let e,n,i,r,s;const o=[bL,yL],a=[];function l(u,h){return u[36]?0:1}e=l(t),n=a[e]=o[e](t);let c=t[41].helper&&_y(t);return{c(){n.c(),i=st(),c&&c.c(),r=Tt()},l(u){n.l(u),i=ot(u),c&&c.l(u),r=Tt()},m(u,h){a[e].m(u,h),ie(u,i,h),c&&c.m(u,h),ie(u,r,h),s=!0},p(u,h){n.p(u,h),u[41].helper?c?(c.p(u,h),h[1]&1024&&D(c,1)):(c=_y(u),c.c(),D(c,1),c.m(r.parentNode,r)):c&&(Jt(),B(c,1,1,()=>{c=null}),Zt())},i(u){s||(D(n),D(c),s=!0)},o(u){B(n),B(c),s=!1},d(u){a[e].d(u),u&&P(i),c&&c.d(u),u&&P(r)}}}const vy=([t,e])=>`${t}: ${e};`,yy=([t,e])=>`${t}: ${e};`;function PL(t,e,n){let i;const r=["use","class","style","ripple","disabled","required","textarea","variant","noLabel","label","type","value","files","invalid","updateInvalid","dirty","prefix","suffix","validateOnValueChange","useNativeValidation","withLeadingIcon","withTrailingIcon","input","floatingLabel","lineRipple","notchedOutline","focus","layout","getElement"];let s=ee(e,r),{$$slots:o={},$$scope:a}=e;const l=s0(o),{applyPassive:c}=Ov,u=Je(De());let h=()=>{};function d(C){return C===h}let{use:f=[]}=e,{class:p=""}=e,{style:g=""}=e,{ripple:m=!0}=e,{disabled:v=!1}=e,{required:E=!1}=e,{textarea:I=!1}=e,{variant:y=I?"outlined":"standard"}=e,{noLabel:M=!1}=e,{label:k=void 0}=e,{type:_="text"}=e,{value:T=h}=e,{files:V=h}=e;const b=!d(T)||!d(V);d(T)&&(T=void 0),d(V)&&(V=null);let{invalid:O=h}=e,{updateInvalid:J=d(O)}=e;d(O)&&(O=!1);let{dirty:w=!1}=e,{prefix:L=void 0}=e,{suffix:R=void 0}=e,{validateOnValueChange:G=J}=e,{useNativeValidation:S=J}=e,{withLeadingIcon:A=h}=e,{withTrailingIcon:z=h}=e,{input:H=void 0}=e,{floatingLabel:X=void 0}=e,{lineRipple:he=void 0}=e,{notchedOutline:q=void 0}=e,Ne,Ie,_e={},Re={},K,de=!1,ht=Yt("SMUI:addLayoutListener"),on,Pt,j=new Promise(C=>Pt=C),ge,dt,an,Vn,yi=T;ht&&(on=ht(La)),Tn(()=>{if(n(48,Ie=new FO({addClass:Ks,removeClass:Oa,hasClass:au,registerTextFieldInteractionHandler:(C,Rt)=>Wr().addEventListener(C,Rt),deregisterTextFieldInteractionHandler:(C,Rt)=>Wr().removeEventListener(C,Rt),registerValidationAttributeChangeHandler:C=>{const Rt=du=>du.map(fu=>fu.attributeName).filter(fu=>fu),fp=new MutationObserver(du=>{S&&C(Rt(du))}),Zw={attributes:!0};return H&&fp.observe(H.getElement(),Zw),fp},deregisterValidationAttributeChangeHandler:C=>{C.disconnect()},getNativeInput:()=>{var C;return(C=H==null?void 0:H.getElement())!==null&&C!==void 0?C:null},setInputAttr:(C,Rt)=>{H==null||H.addAttr(C,Rt)},removeInputAttr:C=>{H==null||H.removeAttr(C)},isFocused:()=>document.activeElement===(H==null?void 0:H.getElement()),registerInputInteractionHandler:(C,Rt)=>{H==null||H.getElement().addEventListener(C,Rt,c())},deregisterInputInteractionHandler:(C,Rt)=>{H==null||H.getElement().removeEventListener(C,Rt,c())},floatLabel:C=>X&&X.float(C),getLabelWidth:()=>X?X.getWidth():0,hasLabel:()=>!!X,shakeLabel:C=>X&&X.shake(C),setLabelRequired:C=>X&&X.setRequired(C),activateLineRipple:()=>he&&he.activate(),deactivateLineRipple:()=>he&&he.deactivate(),setLineRippleTransformOrigin:C=>he&&he.setRippleCenter(C),closeOutline:()=>q&&q.closeNotch(),hasOutline:()=>!!q,notchOutline:C=>q&&q.notch(C)},{get helperText(){return an},get characterCounter(){return Vn},get leadingIcon(){return ge},get trailingIcon(){return dt}})),b){if(H==null)throw new Error("SMUI Textfield initialized without Input component.");Ie.init()}else m0().then(()=>{if(H==null)throw new Error("SMUI Textfield initialized without Input component.");Ie.init()});return Pt(),()=>{Ie.destroy()}}),Zi(()=>{on&&on()});function au(C){var Rt;return C in _e?(Rt=_e[C])!==null&&Rt!==void 0?Rt:null:Wr().classList.contains(C)}function Ks(C){_e[C]||n(25,_e[C]=!0,_e)}function Oa(C){(!(C in _e)||_e[C])&&n(25,_e[C]=!1,_e)}function Yn(C,Rt){Re[C]!=Rt&&(Rt===""||Rt==null?(delete Re[C],n(26,Re)):n(26,Re[C]=Rt,Re))}function lu(){H==null||H.focus()}function La(){if(Ie){const C=Ie.shouldFloat;Ie.notchOutline(C)}}function Wr(){return Ne}function cu(C){le[C?"unshift":"push"](()=>{X=C,n(5,X)})}function uu(C){le[C?"unshift":"push"](()=>{X=C,n(5,X)})}function F(C){le[C?"unshift":"push"](()=>{q=C,n(7,q)})}function oe(C){le[C?"unshift":"push"](()=>{H=C,n(2,H)})}function ne(C){T=C,n(0,T)}function rt(C){w=C,n(4,w)}function Ji(C){O=C,n(1,O),n(48,Ie),n(19,J)}const hu=()=>n(28,de=!1),Ew=()=>n(28,de=!0),ww=C=>tt(Ne,"blur",C),Tw=C=>tt(Ne,"focus",C);function Cw(C){le[C?"unshift":"push"](()=>{H=C,n(2,H)})}function Sw(C){T=C,n(0,T)}function Aw(C){V=C,n(3,V)}function kw(C){w=C,n(4,w)}function Rw(C){O=C,n(1,O),n(48,Ie),n(19,J)}const Ow=()=>n(28,de=!1),Lw=()=>n(28,de=!0),Mw=C=>tt(Ne,"blur",C),Nw=C=>tt(Ne,"focus",C);function Pw(C){le[C?"unshift":"push"](()=>{he=C,n(6,he)})}function Dw(C){le[C?"unshift":"push"](()=>{Ne=C,n(24,Ne)})}const Fw=C=>n(29,ge=C.detail),xw=()=>n(29,ge=void 0),Uw=C=>n(30,dt=C.detail),jw=()=>n(30,dt=void 0),Vw=C=>n(32,Vn=C.detail),Bw=()=>n(32,Vn=void 0);function Hw(C){le[C?"unshift":"push"](()=>{Ne=C,n(24,Ne)})}const qw=C=>n(29,ge=C.detail),Ww=()=>n(29,ge=void 0),Gw=C=>n(30,dt=C.detail),zw=()=>n(30,dt=void 0),Kw=C=>n(27,K=C.detail),Xw=C=>n(31,an=C.detail),Qw=()=>{n(27,K=void 0),n(31,an=void 0)},Yw=C=>n(32,Vn=C.detail),Jw=()=>n(32,Vn=void 0);return t.$$set=C=>{e=x(x({},e),Ge(C)),n(42,s=ee(e,r)),"use"in C&&n(8,f=C.use),"class"in C&&n(9,p=C.class),"style"in C&&n(10,g=C.style),"ripple"in C&&n(11,m=C.ripple),"disabled"in C&&n(12,v=C.disabled),"required"in C&&n(13,E=C.required),"textarea"in C&&n(14,I=C.textarea),"variant"in C&&n(15,y=C.variant),"noLabel"in C&&n(16,M=C.noLabel),"label"in C&&n(17,k=C.label),"type"in C&&n(18,_=C.type),"value"in C&&n(0,T=C.value),"files"in C&&n(3,V=C.files),"invalid"in C&&n(1,O=C.invalid),"updateInvalid"in C&&n(19,J=C.updateInvalid),"dirty"in C&&n(4,w=C.dirty),"prefix"in C&&n(20,L=C.prefix),"suffix"in C&&n(21,R=C.suffix),"validateOnValueChange"in C&&n(43,G=C.validateOnValueChange),"useNativeValidation"in C&&n(44,S=C.useNativeValidation),"withLeadingIcon"in C&&n(22,A=C.withLeadingIcon),"withTrailingIcon"in C&&n(23,z=C.withTrailingIcon),"input"in C&&n(2,H=C.input),"floatingLabel"in C&&n(5,X=C.floatingLabel),"lineRipple"in C&&n(6,he=C.lineRipple),"notchedOutline"in C&&n(7,q=C.notchedOutline),"$$scope"in C&&n(89,a=C.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&4&&n(33,i=H&&H.getElement()),t.$$.dirty[0]&524290|t.$$.dirty[1]&131072&&Ie&&Ie.isValid()!==!O&&(J?n(1,O=!Ie.isValid()):Ie.setValid(!O)),t.$$.dirty[1]&135168&&Ie&&Ie.getValidateOnValueChange()!==G&&Ie.setValidateOnValueChange(d(G)?!1:G),t.$$.dirty[1]&139264&&Ie&&Ie.setUseNativeValidation(d(S)?!0:S),t.$$.dirty[0]&4096|t.$$.dirty[1]&131072&&Ie&&Ie.setDisabled(v),t.$$.dirty[0]&1|t.$$.dirty[1]&393216&&Ie&&b&&yi!==T){n(49,yi=T);const C=`${T}`;Ie.getValue()!==C&&Ie.setValue(C)}},[T,O,H,V,w,X,he,q,f,p,g,m,v,E,I,y,M,k,_,J,L,R,A,z,Ne,_e,Re,K,de,ge,dt,an,Vn,i,u,d,b,j,Ks,Oa,Yn,l,s,G,S,lu,La,Wr,Ie,yi,o,cu,uu,F,oe,ne,rt,Ji,hu,Ew,ww,Tw,Cw,Sw,Aw,kw,Rw,Ow,Lw,Mw,Nw,Pw,Dw,Fw,xw,Uw,jw,Vw,Bw,Hw,qw,Ww,Gw,zw,Kw,Xw,Qw,Yw,Jw,a]}class lV extends Ke{constructor(e){super();ze(this,e,PL,NL,Ve,{use:8,class:9,style:10,ripple:11,disabled:12,required:13,textarea:14,variant:15,noLabel:16,label:17,type:18,value:0,files:3,invalid:1,updateInvalid:19,dirty:4,prefix:20,suffix:21,validateOnValueChange:43,useNativeValidation:44,withLeadingIcon:22,withTrailingIcon:23,input:2,floatingLabel:5,lineRipple:6,notchedOutline:7,focus:45,layout:46,getElement:47},null,[-1,-1,-1,-1])}get focus(){return this.$$.ctx[45]}get layout(){return this.$$.ctx[46]}get getElement(){return this.$$.ctx[47]}}/**
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
 */var DL={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},FL={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},Yo={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},Ct;(function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"})(Ct||(Ct={}));var bs;(function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"})(bs||(bs={}));/**
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
 */var Vi,fi,Ae={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};Vi={},Vi[""+Ae.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",Vi[""+Ae.LIST_ITEM_CLASS]="mdc-list-item",Vi[""+Ae.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",Vi[""+Ae.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",Vi[""+Ae.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",Vi[""+Ae.ROOT]="mdc-list";var Is=(fi={},fi[""+Ae.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",fi[""+Ae.LIST_ITEM_CLASS]="mdc-deprecated-list-item",fi[""+Ae.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",fi[""+Ae.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",fi[""+Ae.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",fi[""+Ae.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",fi[""+Ae.ROOT]="mdc-deprecated-list",fi),Bi={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+Ae.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+Ae.LIST_ITEM_CLASS+` a,
    .`+Is[Ae.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Is[Ae.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+Ae.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+Ae.LIST_ITEM_CLASS+` a,
    .`+Ae.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+Ae.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+Is[Ae.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Is[Ae.LIST_ITEM_CLASS]+` a,
    .`+Is[Ae.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+Is[Ae.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
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
 */var xL=["input","button","textarea","select"],Tr=function(t){var e=t.target;if(!!e){var n=(""+e.tagName).toLowerCase();xL.indexOf(n)===-1&&t.preventDefault()}};/**
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
 */function UL(){var t={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return t}function jL(t,e){for(var n=new Map,i=0;i<t;i++){var r=e(i).trim();if(!!r){var s=r[0].toLowerCase();n.has(s)||n.set(s,[]),n.get(s).push({text:r.toLowerCase(),index:i})}}return n.forEach(function(o){o.sort(function(a,l){return a.index-l.index})}),n}function Ld(t,e){var n=t.nextChar,i=t.focusItemAtIndex,r=t.sortedIndexByFirstChar,s=t.focusedItemIndex,o=t.skipFocus,a=t.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){Iy(e)},Ut.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+n;var l;return e.typeaheadBuffer.length===1?l=VL(r,s,a,e):l=BL(r,a,e),l!==-1&&!o&&i(l),l}function VL(t,e,n,i){var r=i.typeaheadBuffer[0],s=t.get(r);if(!s)return-1;if(r===i.currentFirstChar&&s[i.sortedIndexCursor].index===e){i.sortedIndexCursor=(i.sortedIndexCursor+1)%s.length;var o=s[i.sortedIndexCursor].index;if(!n(o))return o}i.currentFirstChar=r;var a=-1,l;for(l=0;l<s.length;l++)if(!n(s[l].index)){a=l;break}for(;l<s.length;l++)if(s[l].index>e&&!n(s[l].index)){a=l;break}return a!==-1?(i.sortedIndexCursor=a,s[i.sortedIndexCursor].index):-1}function BL(t,e,n){var i=n.typeaheadBuffer[0],r=t.get(i);if(!r)return-1;var s=r[n.sortedIndexCursor];if(s.text.lastIndexOf(n.typeaheadBuffer,0)===0&&!e(s.index))return s.index;for(var o=(n.sortedIndexCursor+1)%r.length,a=-1;o!==n.sortedIndexCursor;){var l=r[o],c=l.text.lastIndexOf(n.typeaheadBuffer,0)===0,u=!e(l.index);if(c&&u){a=o;break}o=(o+1)%r.length}return a!==-1?(n.sortedIndexCursor=a,r[n.sortedIndexCursor].index):-1}function by(t){return t.typeaheadBuffer.length>0}function Iy(t){t.typeaheadBuffer=""}function Ey(t,e){var n=t.event,i=t.isTargetListItem,r=t.focusedItemIndex,s=t.focusItemAtIndex,o=t.sortedIndexByFirstChar,a=t.isItemAtIndexDisabled,l=dn(n)==="ArrowLeft",c=dn(n)==="ArrowUp",u=dn(n)==="ArrowRight",h=dn(n)==="ArrowDown",d=dn(n)==="Home",f=dn(n)==="End",p=dn(n)==="Enter",g=dn(n)==="Spacebar";if(n.ctrlKey||n.metaKey||l||c||u||h||d||f||p)return-1;var m=!g&&n.key.length===1;if(m){Tr(n);var v={focusItemAtIndex:s,focusedItemIndex:r,nextChar:n.key.toLowerCase(),sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return Ld(v,e)}if(!g)return-1;i&&Tr(n);var E=i&&by(e);if(E){var v={focusItemAtIndex:s,focusedItemIndex:r,nextChar:" ",sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return Ld(v,e)}return-1}/**
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
 */function HL(t){return t instanceof Array}var qL=function(t){mn(e,t);function e(n){var i=t.call(this,lt(lt({},e.defaultAdapter),n))||this;return i.wrapFocus=!1,i.isVertical=!0,i.isSingleSelectionList=!1,i.selectedIndex=Ut.UNSET_INDEX,i.focusedItemIndex=Ut.UNSET_INDEX,i.useActivatedClass=!1,i.useSelectedAttr=!1,i.ariaCurrentAttrValue=null,i.isCheckboxList=!1,i.isRadioList=!1,i.hasTypeahead=!1,i.typeaheadState=UL(),i.sortedIndexByFirstChar=new Map,i}return Object.defineProperty(e,"strings",{get:function(){return Bi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Ae},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ut},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(n){this.wrapFocus=n},e.prototype.setVerticalOrientation=function(n){this.isVertical=n},e.prototype.setSingleSelection=function(n){this.isSingleSelectionList=n,n&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.maybeInitializeSingleSelection=function(){var n=this.getSelectedIndexFromDOM();if(n!==Ut.UNSET_INDEX){var i=this.adapter.listItemAtIndexHasClass(n,Ae.LIST_ITEM_ACTIVATED_CLASS);i&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=n}},e.prototype.getSelectedIndexFromDOM=function(){for(var n=Ut.UNSET_INDEX,i=this.adapter.getListItemCount(),r=0;r<i;r++){var s=this.adapter.listItemAtIndexHasClass(r,Ae.LIST_ITEM_SELECTED_CLASS),o=this.adapter.listItemAtIndexHasClass(r,Ae.LIST_ITEM_ACTIVATED_CLASS);if(!!(s||o)){n=r;break}}return n},e.prototype.setHasTypeahead=function(n){this.hasTypeahead=n,n&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&by(this.typeaheadState)},e.prototype.setUseActivatedClass=function(n){this.useActivatedClass=n},e.prototype.setUseSelectedAttribute=function(n){this.useSelectedAttr=n},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(n,i){var r=i===void 0?{}:i,s=r.forceUpdate;!this.isIndexValid(n)||(this.isCheckboxList?this.setCheckboxAtIndex(n):this.isRadioList?this.setRadioAtIndex(n):this.setSingleSelectionAtIndex(n,{forceUpdate:s}))},e.prototype.handleFocusIn=function(n){n>=0&&(this.focusedItemIndex=n,this.adapter.setAttributeForElementIndex(n,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(n,"0"))},e.prototype.handleFocusOut=function(n){var i=this;n>=0&&(this.adapter.setAttributeForElementIndex(n,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(n,"-1")),setTimeout(function(){i.adapter.isFocusInsideList()||i.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.handleKeydown=function(n,i,r){var s=this,o=dn(n)==="ArrowLeft",a=dn(n)==="ArrowUp",l=dn(n)==="ArrowRight",c=dn(n)==="ArrowDown",u=dn(n)==="Home",h=dn(n)==="End",d=dn(n)==="Enter",f=dn(n)==="Spacebar",p=n.key==="A"||n.key==="a";if(this.adapter.isRootFocused()){if(a||h?(n.preventDefault(),this.focusLastElement()):(c||u)&&(n.preventDefault(),this.focusFirstElement()),this.hasTypeahead){var g={event:n,focusItemAtIndex:function(E){s.focusItemAtIndex(E)},focusedItemIndex:-1,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(E){return s.adapter.listItemAtIndexHasClass(E,Ae.LIST_ITEM_DISABLED_CLASS)}};Ey(g,this.typeaheadState)}return}var m=this.adapter.getFocusedElementIndex();if(!(m===-1&&(m=r,m<0))){if(this.isVertical&&c||!this.isVertical&&l)Tr(n),this.focusNextElement(m);else if(this.isVertical&&a||!this.isVertical&&o)Tr(n),this.focusPrevElement(m);else if(u)Tr(n),this.focusFirstElement();else if(h)Tr(n),this.focusLastElement();else if(p&&n.ctrlKey&&this.isCheckboxList)n.preventDefault(),this.toggleAll(this.selectedIndex===Ut.UNSET_INDEX?[]:this.selectedIndex);else if((d||f)&&i){var v=n.target;if(v&&v.tagName==="A"&&d||(Tr(n),this.adapter.listItemAtIndexHasClass(m,Ae.LIST_ITEM_DISABLED_CLASS)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(m),this.adapter.notifyAction(m))}if(this.hasTypeahead){var g={event:n,focusItemAtIndex:function(I){s.focusItemAtIndex(I)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(I){return s.adapter.listItemAtIndexHasClass(I,Ae.LIST_ITEM_DISABLED_CLASS)}};Ey(g,this.typeaheadState)}}},e.prototype.handleClick=function(n,i){n!==Ut.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(n,Ae.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(n,i),this.adapter.notifyAction(n)))},e.prototype.focusNextElement=function(n){var i=this.adapter.getListItemCount(),r=n+1;if(r>=i)if(this.wrapFocus)r=0;else return n;return this.focusItemAtIndex(r),r},e.prototype.focusPrevElement=function(n){var i=n-1;if(i<0)if(this.wrapFocus)i=this.adapter.getListItemCount()-1;else return n;return this.focusItemAtIndex(i),i},e.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},e.prototype.focusLastElement=function(){var n=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(n),n},e.prototype.focusInitialElement=function(){var n=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(n),n},e.prototype.setEnabled=function(n,i){!this.isIndexValid(n)||(i?(this.adapter.removeClassForElementIndex(n,Ae.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(n,Bi.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(n,Ae.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(n,Bi.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(n,i){var r=i===void 0?{}:i,s=r.forceUpdate;if(!(this.selectedIndex===n&&!s)){var o=Ae.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(o=Ae.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==Ut.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,o),this.setAriaForSingleSelectionAtIndex(n),this.setTabindexAtIndex(n),n!==Ut.UNSET_INDEX&&this.adapter.addClassForElementIndex(n,o),this.selectedIndex=n}},e.prototype.setAriaForSingleSelectionAtIndex=function(n){this.selectedIndex===Ut.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(n,Bi.ARIA_CURRENT));var i=this.ariaCurrentAttrValue!==null,r=i?Bi.ARIA_CURRENT:Bi.ARIA_SELECTED;if(this.selectedIndex!==Ut.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,r,"false"),n!==Ut.UNSET_INDEX){var s=i?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(n,r,s)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?Bi.ARIA_SELECTED:Bi.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(n){var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(n,!0),this.selectedIndex!==Ut.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),this.adapter.setAttributeForElementIndex(n,i,"true"),this.selectedIndex=n},e.prototype.setCheckboxAtIndex=function(n){for(var i=this.getSelectionAttribute(),r=0;r<this.adapter.getListItemCount();r++){var s=!1;n.indexOf(r)>=0&&(s=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(r,s),this.adapter.setAttributeForElementIndex(r,i,s?"true":"false")}this.selectedIndex=n},e.prototype.setTabindexAtIndex=function(n){this.focusedItemIndex===Ut.UNSET_INDEX&&n!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==n&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==n&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),n!==Ut.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(n,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var n=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(n)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==Ut.UNSET_INDEX?this.selectedIndex:HL(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(n,i){return Math.min(n,i)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(n){var i=this;if(n instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return n.length===0?!0:n.some(function(r){return i.isIndexInRange(r)})}else if(typeof n=="number"){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+n);return this.isIndexInRange(n)||this.isSingleSelectionList&&n===Ut.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(n){var i=this.adapter.getListItemCount();return n>=0&&n<i},e.prototype.setSelectedIndexOnAction=function(n,i){i===void 0&&(i=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(n,i):this.setSelectedIndex(n)},e.prototype.toggleCheckboxAtIndex=function(n,i){var r=this.getSelectionAttribute(),s=this.adapter.isCheckboxCheckedAtIndex(n);i&&(s=!s,this.adapter.setCheckedCheckboxOrRadioAtIndex(n,s)),this.adapter.setAttributeForElementIndex(n,r,s?"true":"false");var o=this.selectedIndex===Ut.UNSET_INDEX?[]:this.selectedIndex.slice();s?o.push(n):o=o.filter(function(a){return a!==n}),this.selectedIndex=o},e.prototype.focusItemAtIndex=function(n){this.adapter.focusItemAtIndex(n),this.focusedItemIndex=n},e.prototype.toggleAll=function(n){var i=this.adapter.getListItemCount();if(n.length===i)this.setCheckboxAtIndex([]);else{for(var r=[],s=0;s<i;s++)(!this.adapter.listItemAtIndexHasClass(s,Ae.LIST_ITEM_DISABLED_CLASS)||n.indexOf(s)>-1)&&r.push(s);this.setCheckboxAtIndex(r)}},e.prototype.typeaheadMatchItem=function(n,i,r){var s=this;r===void 0&&(r=!1);var o={focusItemAtIndex:function(a){s.focusItemAtIndex(a)},focusedItemIndex:i||this.focusedItemIndex,nextChar:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:r,isItemAtIndexDisabled:function(a){return s.adapter.listItemAtIndexHasClass(a,Ae.LIST_ITEM_DISABLED_CLASS)}};return Ld(o,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return jL(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){Iy(this.typeaheadState)},e}(Hn);/**
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
 */var wy=function(t){mn(e,t);function e(n){var i=t.call(this,lt(lt({},e.defaultAdapter),n))||this;return i.isSurfaceOpen=!1,i.isQuickOpen=!1,i.isHoistedElement=!1,i.isFixedPosition=!1,i.isHorizontallyCenteredOnViewport=!1,i.maxHeight=0,i.openAnimationEndTimerId=0,i.closeAnimationEndTimerId=0,i.animationRequestId=0,i.anchorCorner=bs.TOP_START,i.originCorner=bs.TOP_START,i.anchorMargin={top:0,right:0,bottom:0,left:0},i.position={x:0,y:0},i}return Object.defineProperty(e,"cssClasses",{get:function(){return DL},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return FL},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Yo},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return bs},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=e.cssClasses,i=n.ROOT,r=n.OPEN;if(!this.adapter.hasClass(i))throw new Error(i+" class required in root element.");this.adapter.hasClass(r)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(n){this.anchorCorner=n},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^Ct.RIGHT},e.prototype.setAnchorMargin=function(n){this.anchorMargin.top=n.top||0,this.anchorMargin.right=n.right||0,this.anchorMargin.bottom=n.bottom||0,this.anchorMargin.left=n.left||0},e.prototype.setIsHoisted=function(n){this.isHoistedElement=n},e.prototype.setFixedPosition=function(n){this.isFixedPosition=n},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(n,i){this.position.x=this.isFinite(n)?n:0,this.position.y=this.isFinite(i)?i:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(n){this.isHorizontallyCenteredOnViewport=n},e.prototype.setQuickOpen=function(n){this.isQuickOpen=n},e.prototype.setMaxHeight=function(n){this.maxHeight=n},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var n=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){n.dimensions=n.adapter.getInnerDimensions(),n.autoposition(),n.adapter.addClass(e.cssClasses.OPEN),n.openAnimationEndTimerId=setTimeout(function(){n.openAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),n.adapter.notifyOpen()},Yo.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},e.prototype.close=function(n){var i=this;if(n===void 0&&(n=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,n||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){i.adapter.removeClass(e.cssClasses.OPEN),i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId=setTimeout(function(){i.closeAnimationEndTimerId=0,i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),i.adapter.notifyClose()},Yo.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,n||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(n){var i=n.target;this.adapter.isElementInContainer(i)||this.close()},e.prototype.handleKeydown=function(n){var i=n.keyCode,r=n.key,s=r==="Escape"||i===27;s&&this.close()},e.prototype.autoposition=function(){var n;this.measurements=this.getAutoLayoutmeasurements();var i=this.getoriginCorner(),r=this.getMenuSurfaceMaxHeight(i),s=this.hasBit(i,Ct.BOTTOM)?"bottom":"top",o=this.hasBit(i,Ct.RIGHT)?"right":"left",a=this.getHorizontalOriginOffset(i),l=this.getVerticalOriginOffset(i),c=this.measurements,u=c.anchorSize,h=c.surfaceSize,d=(n={},n[o]=a,n[s]=l,n);u.width/h.width>Yo.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(o="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(d),this.adapter.setTransformOrigin(o+" "+s),this.adapter.setPosition(d),this.adapter.setMaxHeight(r?r+"px":""),this.hasBit(i,Ct.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var n=this.adapter.getAnchorDimensions(),i=this.adapter.getBodyDimensions(),r=this.adapter.getWindowDimensions(),s=this.adapter.getWindowScroll();return n||(n={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:n,bodySize:i,surfaceSize:this.dimensions,viewportDistance:{top:n.top,right:r.width-n.right,bottom:r.height-n.bottom,left:n.left},viewportSize:r,windowScroll:s}},e.prototype.getoriginCorner=function(){var n=this.originCorner,i=this.measurements,r=i.viewportDistance,s=i.anchorSize,o=i.surfaceSize,a=e.numbers.MARGIN_TO_EDGE,l=this.hasBit(this.anchorCorner,Ct.BOTTOM),c,u;l?(c=r.top-a+this.anchorMargin.bottom,u=r.bottom-a-this.anchorMargin.bottom):(c=r.top-a+this.anchorMargin.top,u=r.bottom-a+s.height-this.anchorMargin.top);var h=u-o.height>0;!h&&c>u&&(n=this.setBit(n,Ct.BOTTOM));var d=this.adapter.isRtl(),f=this.hasBit(this.anchorCorner,Ct.FLIP_RTL),p=this.hasBit(this.anchorCorner,Ct.RIGHT)||this.hasBit(n,Ct.RIGHT),g=!1;d&&f?g=!p:g=p;var m,v;g?(m=r.left+s.width+this.anchorMargin.right,v=r.right-this.anchorMargin.right):(m=r.left+this.anchorMargin.left,v=r.right+s.width-this.anchorMargin.left);var E=m-o.width>0,I=v-o.width>0,y=this.hasBit(n,Ct.FLIP_RTL)&&this.hasBit(n,Ct.RIGHT);return I&&y&&d||!E&&y?n=this.unsetBit(n,Ct.RIGHT):(E&&g&&d||E&&!g&&p||!I&&m>=v)&&(n=this.setBit(n,Ct.RIGHT)),n},e.prototype.getMenuSurfaceMaxHeight=function(n){if(this.maxHeight>0)return this.maxHeight;var i=this.measurements.viewportDistance,r=0,s=this.hasBit(n,Ct.BOTTOM),o=this.hasBit(this.anchorCorner,Ct.BOTTOM),a=e.numbers.MARGIN_TO_EDGE;return s?(r=i.top+this.anchorMargin.top-a,o||(r+=this.measurements.anchorSize.height)):(r=i.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-a,o&&(r-=this.measurements.anchorSize.height)),r},e.prototype.getHorizontalOriginOffset=function(n){var i=this.measurements.anchorSize,r=this.hasBit(n,Ct.RIGHT),s=this.hasBit(this.anchorCorner,Ct.RIGHT);if(r){var o=s?i.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?o-(this.measurements.viewportSize.width-this.measurements.bodySize.width):o}return s?i.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(n){var i=this.measurements.anchorSize,r=this.hasBit(n,Ct.BOTTOM),s=this.hasBit(this.anchorCorner,Ct.BOTTOM),o=0;return r?o=s?i.height-this.anchorMargin.top:-this.anchorMargin.bottom:o=s?i.height+this.anchorMargin.bottom:this.anchorMargin.top,o},e.prototype.adjustPositionForHoistedElement=function(n){var i,r,s=this.measurements,o=s.windowScroll,a=s.viewportDistance,l=s.surfaceSize,c=s.viewportSize,u=Object.keys(n);try{for(var h=Mn(u),d=h.next();!d.done;d=h.next()){var f=d.value,p=n[f]||0;if(this.isHorizontallyCenteredOnViewport&&(f==="left"||f==="right")){n[f]=(c.width-l.width)/2;continue}p+=a[f],this.isFixedPosition||(f==="top"?p+=o.y:f==="bottom"?p-=o.y:f==="left"?p+=o.x:p-=o.x),n[f]=p}}catch(g){i={error:g}}finally{try{d&&!d.done&&(r=h.return)&&r.call(h)}finally{if(i)throw i.error}}},e.prototype.maybeRestoreFocus=function(){var n=this,i=this.adapter.isFocused(),r=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(i||r)&&setTimeout(function(){n.adapter.restoreFocus()},Yo.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(n,i){return Boolean(n&i)},e.prototype.setBit=function(n,i){return n|i},e.prototype.unsetBit=function(n,i){return n^i},e.prototype.isFinite=function(n){return typeof n=="number"&&isFinite(n)},e}(Hn);/**
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
 */var Ty={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function WL(t){return Boolean(t.document)&&typeof t.document.createElement=="function"}function GL(t,e){if(WL(t)&&e in Ty){var n=t.document.createElement("div"),i=Ty[e],r=i.standard,s=i.prefixed,o=r in n.style;return o?r:s}return e}/**
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
 */var Es={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},ws={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},zL={FOCUS_ROOT_INDEX:-1},Ts;(function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"})(Ts||(Ts={}));/**
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
 */var KL=function(t){mn(e,t);function e(n){var i=t.call(this,lt(lt({},e.defaultAdapter),n))||this;return i.closeAnimationEndTimerId=0,i.defaultFocusState=Ts.LIST_ROOT,i.selectedIndex=-1,i}return Object.defineProperty(e,"cssClasses",{get:function(){return Es},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ws},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return zL},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},e.prototype.handleKeydown=function(n){var i=n.key,r=n.keyCode,s=i==="Tab"||r===9;s&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(n){var i=this,r=this.adapter.getElementIndex(n);if(!(r<0)){this.adapter.notifySelected({index:r});var s=this.adapter.getAttributeFromElementAtIndex(r,ws.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(s),this.closeAnimationEndTimerId=setTimeout(function(){var o=i.adapter.getElementIndex(n);o>=0&&i.adapter.isSelectableItemAtIndex(o)&&i.setSelectedIndex(o)},wy.numbers.TRANSITION_CLOSE_DURATION)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case Ts.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Ts.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Ts.NONE:break;default:this.adapter.focusListRoot();break}},e.prototype.setDefaultFocusState=function(n){this.defaultFocusState=n},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(n){if(this.validatedIndex(n),!this.adapter.isSelectableItemAtIndex(n))throw new Error("MDCMenuFoundation: No selection group at specified index.");var i=this.adapter.getSelectedSiblingOfItemAtIndex(n);i>=0&&(this.adapter.removeAttributeFromElementAtIndex(i,ws.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(i,Es.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(n,Es.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(n,ws.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=n},e.prototype.setEnabled=function(n,i){this.validatedIndex(n),i?(this.adapter.removeClassFromElementAtIndex(n,Ae.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(n,ws.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(n,Ae.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(n,ws.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(n){var i=this.adapter.getMenuItemCount(),r=n>=0&&n<i;if(!r)throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(Hn);const{document:XL}=_0;function QL(t){let e,n,i,r,s,o,a,l;const c=t[30].default,u=Ee(c,t,t[29],null);let h=[{class:i=ue(et({[t[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":t[5],"mdc-menu-surface--open":t[4],"smui-menu-surface--static":t[4],"mdc-menu-surface--fullwidth":t[6]},t[9]))},{style:r=Object.entries(t[10]).map(Cy).concat([t[3]]).join(" ")},t[12]],d={};for(let f=0;f<h.length;f+=1)d=x(d,h[f]);return{c(){e=st(),n=ve("div"),u&&u.c(),this.h()},l(f){e=ot(f),n=Se(f,"DIV",{class:!0,style:!0});var p=fe(n);u&&u.l(p),p.forEach(P),this.h()},h(){se(n,d)},m(f,p){ie(f,e,p),ie(f,n,p),u&&u.m(n,null),t[32](n),o=!0,a||(l=[Qe(XL.body,"click",t[31],!0),re(s=nt.call(null,n,t[1])),re(t[11].call(null,n)),Qe(n,"keydown",t[33])],a=!0)},p(f,p){u&&u.p&&(!o||p[0]&536870912)&&Te(u,c,f,f[29],o?we(c,f[29],p,null):Ce(f[29]),null),se(n,d=ke(h,[(!o||p[0]&628&&i!==(i=ue(et({[f[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":f[5],"mdc-menu-surface--open":f[4],"smui-menu-surface--static":f[4],"mdc-menu-surface--fullwidth":f[6]},f[9]))))&&{class:i},(!o||p[0]&1032&&r!==(r=Object.entries(f[10]).map(Cy).concat([f[3]]).join(" ")))&&{style:r},p[0]&4096&&f[12]])),s&&xe(s.update)&&p[0]&2&&s.update.call(null,f[1])},i(f){o||(D(u,f),o=!0)},o(f){B(u,f),o=!1},d(f){f&&P(e),f&&P(n),u&&u.d(f),t[32](null),a=!1,We(l)}}}const Cy=([t,e])=>`${t}: ${e};`;function YL(t,e,n){const i=["use","class","style","static","anchor","fixed","open","fullWidth","quickOpen","anchorElement","anchorCorner","anchorMargin","maxHeight","horizontallyCenteredOnViewport","isOpen","setOpen","setAbsolutePosition","setIsHoisted","isFixed","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e;var a,l,c;const u=Je(De());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{static:p=!1}=e,{anchor:g=!0}=e,{fixed:m=!1}=e,{open:v=p}=e,{fullWidth:E=!1}=e,{quickOpen:I=!1}=e,{anchorElement:y=void 0}=e,{anchorCorner:M=void 0}=e,{anchorMargin:k={top:0,right:0,bottom:0,left:0}}=e,{maxHeight:_=0}=e,{horizontallyCenteredOnViewport:T=!1}=e,V,b,O={},J={},w;Ot("SMUI:list:role","menu"),Ot("SMUI:list:item:role","menuitem");const L=bs;Tn(()=>(n(8,b=new wy({addClass:G,removeClass:S,hasClass:R,hasAnchor:()=>!!y,notifyClose:()=>{n(0,v=p),v||tt(V,"SMUIMenuSurface:closed",void 0,void 0,!0)},notifyClosing:()=>{n(0,v=p),v||tt(V,"SMUIMenuSurface:closing",void 0,void 0,!0)},notifyOpen:()=>{n(0,v=!0),tt(V,"SMUIMenuSurface:opened",void 0,void 0,!0)},isElementInContainer:de=>V.contains(de),isRtl:()=>getComputedStyle(V).getPropertyValue("direction")==="rtl",setTransformOrigin:de=>{const ht=`${GL(window,"transform")}-origin`;n(10,J[ht]=de,J)},isFocused:()=>document.activeElement===V,saveFocus:()=>{var de;w=(de=document.activeElement)!==null&&de!==void 0?de:void 0},restoreFocus:()=>{V.contains(document.activeElement)&&w&&"focus"in w&&w.focus()},getInnerDimensions:()=>({width:V.offsetWidth,height:V.offsetHeight}),getAnchorDimensions:()=>y?y.getBoundingClientRect():null,getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:de=>{n(10,J.left="left"in de?`${de.left}px`:"",J),n(10,J.right="right"in de?`${de.right}px`:"",J),n(10,J.top="top"in de?`${de.top}px`:"",J),n(10,J.bottom="bottom"in de?`${de.bottom}px`:"",J)},setMaxHeight:de=>{n(10,J.maxHeight=de,J)}})),tt(V,"SMUIMenuSurface:mount",{get open(){return v},set open(de){n(0,v=de)},closeProgrammatic:A}),b.init(),()=>{var de;const ht=b.isHoistedElement;b.destroy(),ht&&((de=V.parentNode)===null||de===void 0||de.removeChild(V))})),Zi(()=>{var K;g&&V&&((K=V.parentElement)===null||K===void 0||K.classList.remove("mdc-menu-surface--anchor"))});function R(K){return K in O?O[K]:Ne().classList.contains(K)}function G(K){O[K]||n(9,O[K]=!0,O)}function S(K){(!(K in O)||O[K])&&n(9,O[K]=!1,O)}function A(K){b.close(K),n(0,v=!1)}function z(){return v}function H(K){n(0,v=K)}function X(K,de){return b.setAbsolutePosition(K,de)}function he(K){return b.setIsHoisted(K)}function q(){return b.isFixed()}function Ne(){return V}const Ie=K=>b&&v&&b.handleBodyClick(K);function _e(K){le[K?"unshift":"push"](()=>{V=K,n(7,V)})}const Re=K=>b&&b.handleKeydown(K);return t.$$set=K=>{e=x(x({},e),Ge(K)),n(12,r=ee(e,i)),"use"in K&&n(1,h=K.use),"class"in K&&n(2,d=K.class),"style"in K&&n(3,f=K.style),"static"in K&&n(4,p=K.static),"anchor"in K&&n(14,g=K.anchor),"fixed"in K&&n(5,m=K.fixed),"open"in K&&n(0,v=K.open),"fullWidth"in K&&n(6,E=K.fullWidth),"quickOpen"in K&&n(15,I=K.quickOpen),"anchorElement"in K&&n(13,y=K.anchorElement),"anchorCorner"in K&&n(16,M=K.anchorCorner),"anchorMargin"in K&&n(17,k=K.anchorMargin),"maxHeight"in K&&n(18,_=K.maxHeight),"horizontallyCenteredOnViewport"in K&&n(19,T=K.horizontallyCenteredOnViewport),"$$scope"in K&&n(29,o=K.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&469778560&&V&&g&&!(n(26,a=V.parentElement)===null||a===void 0?void 0:a.classList.contains("mdc-menu-surface--anchor"))&&(n(27,l=V.parentElement)===null||l===void 0||l.classList.add("mdc-menu-surface--anchor"),n(13,y=n(28,c=V.parentElement)!==null&&c!==void 0?c:void 0)),t.$$.dirty[0]&257&&b&&b.isOpen()!==v&&(v?b.open():b.close()),t.$$.dirty[0]&33024&&b&&b.setQuickOpen(I),t.$$.dirty[0]&288&&b&&b.setFixedPosition(m),t.$$.dirty[0]&262400&&b&&_>0&&b.setMaxHeight(_),t.$$.dirty[0]&524544&&b&&b.setIsHorizontallyCenteredOnViewport(T),t.$$.dirty[0]&65792&&b&&M!=null&&(typeof M=="string"?b.setAnchorCorner(L[M]):b.setAnchorCorner(M)),t.$$.dirty[0]&131328&&b&&b.setAnchorMargin(k)},[v,h,d,f,p,m,E,V,b,O,J,u,r,y,g,I,M,k,_,T,z,H,X,he,q,Ne,a,l,c,o,s,Ie,_e,Re]}class JL extends Ke{constructor(e){super();ze(this,e,YL,QL,Ve,{use:1,class:2,style:3,static:4,anchor:14,fixed:5,open:0,fullWidth:6,quickOpen:15,anchorElement:13,anchorCorner:16,anchorMargin:17,maxHeight:18,horizontallyCenteredOnViewport:19,isOpen:20,setOpen:21,setAbsolutePosition:22,setIsHoisted:23,isFixed:24,getElement:25},null,[-1,-1])}get isOpen(){return this.$$.ctx[20]}get setOpen(){return this.$$.ctx[21]}get setAbsolutePosition(){return this.$$.ctx[22]}get setIsHoisted(){return this.$$.ctx[23]}get isFixed(){return this.$$.ctx[24]}get getElement(){return this.$$.ctx[25]}}function ZL(t){let e;const n=t[16].default,i=Ee(n,t,t[21],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&2097152)&&Te(i,n,r,r[21],e?we(n,r[21],s,null):Ce(r[21]),null)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function $L(t){let e,n,i;const r=[{use:t[5]},{class:ue({[t[1]]:!0,"mdc-menu":!0})},t[9]];function s(a){t[18](a)}let o={$$slots:{default:[ZL]},$$scope:{ctx:t}};for(let a=0;a<r.length;a+=1)o=x(o,r[a]);return t[0]!==void 0&&(o.open=t[0]),e=new JL({props:o}),t[17](e),le.push(()=>Ei(e,"open",s)),e.$on("SMUIMenuSurface:mount",t[7]),e.$on("SMUIList:mount",t[8]),e.$on("SMUIMenuSurface:opened",t[19]),e.$on("keydown",t[6]),e.$on("SMUIList:action",t[20]),{c(){bt(e.$$.fragment)},l(a){Dt(e.$$.fragment,a)},m(a,l){pt(e,a,l),i=!0},p(a,[l]){const c=l&546?ke(r,[l&32&&{use:a[5]},l&2&&{class:ue({[a[1]]:!0,"mdc-menu":!0})},l&512&&ft(a[9])]):{};l&2097152&&(c.$$scope={dirty:l,ctx:a}),!n&&l&1&&(n=!0,c.open=a[0],Ii(()=>n=!1)),e.$set(c)},i(a){i||(D(e.$$.fragment,a),i=!0)},o(a){B(e.$$.fragment,a),i=!1},d(a){t[17](null),mt(e,a)}}}function eM(t,e,n){let i;const r=["use","class","open","isOpen","setOpen","setDefaultFocusState","getSelectedIndex","getElement"];let s=ee(e,r),{$$slots:o={},$$scope:a}=e;const{closest:l}=kd,c=Je(De());let{use:u=[]}=e,{class:h=""}=e,{open:d=!1}=e,f,p,g,m;Tn(()=>(n(3,p=new KL({addClassToElementAtIndex:(w,L)=>{m.addClassForElementIndex(w,L)},removeClassFromElementAtIndex:(w,L)=>{m.removeClassForElementIndex(w,L)},addAttributeToElementAtIndex:(w,L,R)=>{m.setAttributeForElementIndex(w,L,R)},removeAttributeFromElementAtIndex:(w,L)=>{m.removeAttributeForElementIndex(w,L)},getAttributeFromElementAtIndex:(w,L)=>m.getAttributeFromElementIndex(w,L),elementContainsClass:(w,L)=>w.classList.contains(L),closeSurface:w=>g.closeProgrammatic(w),getElementIndex:w=>m.getOrderedList().map(L=>L.element).indexOf(w),notifySelected:w=>tt(T(),"SMUIMenu:selected",{index:w.index,item:m.getOrderedList()[w.index].element},void 0,!0),getMenuItemCount:()=>m.items.length,focusItemAtIndex:w=>m.focusItemAtIndex(w),focusListRoot:()=>"focus"in m.element&&m.element.focus(),isSelectableItemAtIndex:w=>!!l(m.getOrderedList()[w].element,`.${Es.MENU_SELECTION_GROUP}`),getSelectedSiblingOfItemAtIndex:w=>{const L=m.getOrderedList(),R=l(L[w].element,`.${Es.MENU_SELECTION_GROUP}`),G=R==null?void 0:R.querySelector(`.${Es.MENU_SELECTED_LIST_ITEM}`);return G?L.map(S=>S.element).indexOf(G):-1}})),tt(T(),"SMUIMenu:mount",p),p.init(),()=>{p.destroy()}));function v(w){p&&p.handleKeydown(w)}function E(w){g||(g=w.detail)}function I(w){m||n(4,m=w.detail)}function y(){return d}function M(w){n(0,d=w)}function k(w){p.setDefaultFocusState(w)}function _(){return p.getSelectedIndex()}function T(){return f.getElement()}function V(w){le[w?"unshift":"push"](()=>{f=w,n(2,f)})}function b(w){d=w,n(0,d)}const O=()=>p&&p.handleMenuSurfaceOpened(),J=w=>p&&p.handleItemAction(m.getOrderedList()[w.detail.index].element);return t.$$set=w=>{e=x(x({},e),Ge(w)),n(9,s=ee(e,r)),"use"in w&&n(10,u=w.use),"class"in w&&n(1,h=w.class),"open"in w&&n(0,d=w.open),"$$scope"in w&&n(21,a=w.$$scope)},t.$$.update=()=>{t.$$.dirty&1024&&n(5,i=[c,...u])},[d,h,f,p,m,i,v,E,I,s,u,y,M,k,_,T,o,V,b,O,J,a]}class cV extends Ke{constructor(e){super();ze(this,e,eM,$L,Ve,{use:10,class:1,open:0,isOpen:11,setOpen:12,setDefaultFocusState:13,getSelectedIndex:14,getElement:15})}get isOpen(){return this.$$.ctx[11]}get setOpen(){return this.$$.ctx[12]}get setDefaultFocusState(){return this.$$.ctx[13]}get getSelectedIndex(){return this.$$.ctx[14]}get getElement(){return this.$$.ctx[15]}}function tM(t){let e;const n=t[37].default,i=Ee(n,t,t[43],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[1]&4096)&&Te(i,n,r,r[43],e?we(n,r[43],s,null):Ce(r[43]),null)},i(r){e||(D(i,r),e=!0)},o(r){B(i,r),e=!1},d(r){i&&i.d(r)}}}function nM(t){let e,n,i;const r=[{use:[t[17],...t[0]]},{class:ue({[t[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":t[2],"mdc-deprecated-list--dense":t[3],"mdc-deprecated-list--textual-list":t[4],"mdc-deprecated-list--avatar-list":t[5]||t[18],"mdc-deprecated-list--icon-list":t[6],"mdc-deprecated-list--image-list":t[7],"mdc-deprecated-list--thumbnail-list":t[8],"mdc-deprecated-list--video-list":t[9],"mdc-deprecated-list--two-line":t[10],"smui-list--three-line":t[11]&&!t[10]})},{role:t[15]},t[23]];var s=t[12];function o(a){let l={$$slots:{default:[tM]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=x(l,r[c]);return{props:l}}return s&&(e=new s(o(t)),t[38](e),e.$on("keydown",t[39]),e.$on("focusin",t[40]),e.$on("focusout",t[41]),e.$on("click",t[42]),e.$on("SMUIListItem:mount",t[19]),e.$on("SMUIListItem:unmount",t[20]),e.$on("SMUI:action",t[21])),{c(){e&&bt(e.$$.fragment),n=Tt()},l(a){e&&Dt(e.$$.fragment,a),n=Tt()},m(a,l){e&&pt(e,a,l),ie(a,n,l),i=!0},p(a,l){const c=l[0]&8818687?ke(r,[l[0]&131073&&{use:[a[17],...a[0]]},l[0]&266238&&{class:ue({[a[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":a[2],"mdc-deprecated-list--dense":a[3],"mdc-deprecated-list--textual-list":a[4],"mdc-deprecated-list--avatar-list":a[5]||a[18],"mdc-deprecated-list--icon-list":a[6],"mdc-deprecated-list--image-list":a[7],"mdc-deprecated-list--thumbnail-list":a[8],"mdc-deprecated-list--video-list":a[9],"mdc-deprecated-list--two-line":a[10],"smui-list--three-line":a[11]&&!a[10]})},l[0]&32768&&{role:a[15]},l[0]&8388608&&ft(a[23])]):{};if(l[1]&4096&&(c.$$scope={dirty:l,ctx:a}),s!==(s=a[12])){if(e){Jt();const u=e;B(u.$$.fragment,1,0,()=>{mt(u,1)}),Zt()}s?(e=new s(o(a)),a[38](e),e.$on("keydown",a[39]),e.$on("focusin",a[40]),e.$on("focusout",a[41]),e.$on("click",a[42]),e.$on("SMUIListItem:mount",a[19]),e.$on("SMUIListItem:unmount",a[20]),e.$on("SMUI:action",a[21]),bt(e.$$.fragment),D(e.$$.fragment,1),pt(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(a){i||(e&&D(e.$$.fragment,a),i=!0)},o(a){e&&B(e.$$.fragment,a),i=!1},d(a){t[38](null),a&&P(n),e&&mt(e,a)}}}function iM(t,e,n){const i=["use","class","nonInteractive","dense","textualList","avatarList","iconList","imageList","thumbnailList","videoList","twoLine","threeLine","vertical","wrapFocus","singleSelection","selectedIndex","radioList","checkList","hasTypeahead","component","layout","setEnabled","getTypeaheadInProgress","getSelectedIndex","getFocusedItemIndex","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e;var a;const{closest:l,matches:c}=kd,u=Je(De());let{use:h=[]}=e,{class:d=""}=e,{nonInteractive:f=!1}=e,{dense:p=!1}=e,{textualList:g=!1}=e,{avatarList:m=!1}=e,{iconList:v=!1}=e,{imageList:E=!1}=e,{thumbnailList:I=!1}=e,{videoList:y=!1}=e,{twoLine:M=!1}=e,{threeLine:k=!1}=e,{vertical:_=!0}=e,{wrapFocus:T=(a=Yt("SMUI:list:wrapFocus"))!==null&&a!==void 0?a:!1}=e,{singleSelection:V=!1}=e,{selectedIndex:b=-1}=e,{radioList:O=!1}=e,{checkList:J=!1}=e,{hasTypeahead:w=!1}=e,L,R,G=[],S=Yt("SMUI:list:role"),A=Yt("SMUI:list:nav");const z=new WeakMap;let H=Yt("SMUI:dialog:selection"),X=Yt("SMUI:addLayoutListener"),he,{component:q=A?uO:hO}=e;Ot("SMUI:list:nonInteractive",f),Ot("SMUI:separator:context","list"),S||(V?(S="listbox",Ot("SMUI:list:item:role","option")):O?(S="radiogroup",Ot("SMUI:list:item:role","radio")):J?(S="group",Ot("SMUI:list:item:role","checkbox")):(S="list",Ot("SMUI:list:item:role",void 0))),X&&(he=X(Vn)),Tn(()=>{n(13,R=new qL({addClassForElementIndex:ht,focusItemAtIndex:K,getAttributeForElementIndex:(oe,ne)=>{var rt,Ji;return(Ji=(rt=Re()[oe])===null||rt===void 0?void 0:rt.getAttr(ne))!==null&&Ji!==void 0?Ji:null},getFocusedElementIndex:()=>document.activeElement?Re().map(oe=>oe.element).indexOf(document.activeElement):-1,getListItemCount:()=>G.length,getPrimaryTextAtIndex:dt,hasCheckboxAtIndex:oe=>{var ne,rt;return(rt=(ne=Re()[oe])===null||ne===void 0?void 0:ne.hasCheckbox)!==null&&rt!==void 0?rt:!1},hasRadioAtIndex:oe=>{var ne,rt;return(rt=(ne=Re()[oe])===null||ne===void 0?void 0:ne.hasRadio)!==null&&rt!==void 0?rt:!1},isCheckboxCheckedAtIndex:oe=>{var ne;const rt=Re()[oe];return(ne=(rt==null?void 0:rt.hasCheckbox)&&rt.checked)!==null&&ne!==void 0?ne:!1},isFocusInsideList:()=>L!=null&&Yn()!==document.activeElement&&Yn().contains(document.activeElement),isRootFocused:()=>L!=null&&document.activeElement===Yn(),listItemAtIndexHasClass:de,notifyAction:oe=>{n(24,b=oe),L!=null&&tt(Yn(),"SMUIList:action",{index:oe},void 0,!0)},removeClassForElementIndex:on,setAttributeForElementIndex:Pt,setCheckedCheckboxOrRadioAtIndex:(oe,ne)=>{Re()[oe].checked=ne},setTabIndexForListItemChildren:(oe,ne)=>{const rt=Re()[oe],Ji="button:not(:disabled), a";Array.prototype.forEach.call(rt.element.querySelectorAll(Ji),hu=>{hu.setAttribute("tabindex",ne)})}}));const F={get element(){return Yn()},get items(){return G},get typeaheadInProgress(){return R.isTypeaheadInProgress()},typeaheadMatchItem(oe,ne){return R.typeaheadMatchItem(oe,ne,!0)},getOrderedList:Re,focusItemAtIndex:K,addClassForElementIndex:ht,removeClassForElementIndex:on,setAttributeForElementIndex:Pt,removeAttributeForElementIndex:j,getAttributeFromElementIndex:ge,getPrimaryTextAtIndex:dt};return tt(Yn(),"SMUIList:mount",F),R.init(),()=>{R.destroy()}}),Zi(()=>{he&&he()});function Ne(F){G.push(F.detail),z.set(F.detail.element,F.detail),V&&F.detail.selected&&n(24,b=an(F.detail.element)),F.stopPropagation()}function Ie(F){var oe;const ne=(oe=F.detail&&G.indexOf(F.detail))!==null&&oe!==void 0?oe:-1;ne!==-1&&(G.splice(ne,1),G=G,z.delete(F.detail.element)),F.stopPropagation()}function _e(F){if(O||J){const oe=an(F.target);if(oe!==-1){const ne=Re()[oe];ne&&(O&&!ne.checked||J)&&(ne.checked=!ne.checked,ne.activateRipple(),window.requestAnimationFrame(()=>{ne.deactivateRipple()}))}}}function Re(){return L==null?[]:[...Yn().children].map(F=>z.get(F)).filter(F=>F&&F._smui_list_item_accessor)}function K(F){const oe=Re()[F];oe&&"focus"in oe.element&&oe.element.focus()}function de(F,oe){var ne;const rt=Re()[F];return(ne=rt&&rt.hasClass(oe))!==null&&ne!==void 0?ne:!1}function ht(F,oe){const ne=Re()[F];ne&&ne.addClass(oe)}function on(F,oe){const ne=Re()[F];ne&&ne.removeClass(oe)}function Pt(F,oe,ne){const rt=Re()[F];rt&&rt.addAttr(oe,ne)}function j(F,oe){const ne=Re()[F];ne&&ne.removeAttr(oe)}function ge(F,oe){const ne=Re()[F];return ne?ne.getAttr(oe):null}function dt(F){var oe;const ne=Re()[F];return(oe=ne&&ne.getPrimaryText())!==null&&oe!==void 0?oe:""}function an(F){const oe=l(F,".mdc-deprecated-list-item, .mdc-deprecated-list");return oe&&c(oe,".mdc-deprecated-list-item")?Re().map(ne=>ne==null?void 0:ne.element).indexOf(oe):-1}function Vn(){return R.layout()}function yi(F,oe){return R.setEnabled(F,oe)}function au(){return R.isTypeaheadInProgress()}function Ks(){return R.getSelectedIndex()}function Oa(){return R.getFocusedItemIndex()}function Yn(){return L.getElement()}function lu(F){le[F?"unshift":"push"](()=>{L=F,n(14,L)})}const La=F=>R&&R.handleKeydown(F,F.target.classList.contains("mdc-deprecated-list-item"),an(F.target)),Wr=F=>R&&R.handleFocusIn(an(F.target)),cu=F=>R&&R.handleFocusOut(an(F.target)),uu=F=>R&&R.handleClick(an(F.target),!c(F.target,'input[type="checkbox"], input[type="radio"]'));return t.$$set=F=>{e=x(x({},e),Ge(F)),n(23,r=ee(e,i)),"use"in F&&n(0,h=F.use),"class"in F&&n(1,d=F.class),"nonInteractive"in F&&n(2,f=F.nonInteractive),"dense"in F&&n(3,p=F.dense),"textualList"in F&&n(4,g=F.textualList),"avatarList"in F&&n(5,m=F.avatarList),"iconList"in F&&n(6,v=F.iconList),"imageList"in F&&n(7,E=F.imageList),"thumbnailList"in F&&n(8,I=F.thumbnailList),"videoList"in F&&n(9,y=F.videoList),"twoLine"in F&&n(10,M=F.twoLine),"threeLine"in F&&n(11,k=F.threeLine),"vertical"in F&&n(25,_=F.vertical),"wrapFocus"in F&&n(26,T=F.wrapFocus),"singleSelection"in F&&n(27,V=F.singleSelection),"selectedIndex"in F&&n(24,b=F.selectedIndex),"radioList"in F&&n(28,O=F.radioList),"checkList"in F&&n(29,J=F.checkList),"hasTypeahead"in F&&n(30,w=F.hasTypeahead),"component"in F&&n(12,q=F.component),"$$scope"in F&&n(43,o=F.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&33562624&&R&&R.setVerticalOrientation(_),t.$$.dirty[0]&67117056&&R&&R.setWrapFocus(T),t.$$.dirty[0]&1073750016&&R&&R.setHasTypeahead(w),t.$$.dirty[0]&134225920&&R&&R.setSingleSelection(V),t.$$.dirty[0]&151003136&&R&&V&&Ks()!==b&&R.setSelectedIndex(b)},[h,d,f,p,g,m,v,E,I,y,M,k,q,R,L,S,c,u,H,Ne,Ie,_e,an,r,b,_,T,V,O,J,w,Vn,yi,au,Ks,Oa,Yn,s,lu,La,Wr,cu,uu,o]}class uV extends Ke{constructor(e){super();ze(this,e,iM,nM,Ve,{use:0,class:1,nonInteractive:2,dense:3,textualList:4,avatarList:5,iconList:6,imageList:7,thumbnailList:8,videoList:9,twoLine:10,threeLine:11,vertical:25,wrapFocus:26,singleSelection:27,selectedIndex:24,radioList:28,checkList:29,hasTypeahead:30,component:12,layout:31,setEnabled:32,getTypeaheadInProgress:33,getSelectedIndex:34,getFocusedItemIndex:35,getElement:36},null,[-1,-1])}get layout(){return this.$$.ctx[31]}get setEnabled(){return this.$$.ctx[32]}get getTypeaheadInProgress(){return this.$$.ctx[33]}get getSelectedIndex(){return this.$$.ctx[34]}get getFocusedItemIndex(){return this.$$.ctx[35]}get getElement(){return this.$$.ctx[36]}}function Sy(t){let e;return{c(){e=ve("span"),this.h()},l(n){e=Se(n,"SPAN",{class:!0}),fe(e).forEach(P),this.h()},h(){yt(e,"class","mdc-deprecated-list-item__ripple")},m(n,i){ie(n,e,i)},d(n){n&&P(e)}}}function rM(t){let e,n,i=t[6]&&Sy();const r=t[32].default,s=Ee(r,t,t[35],null);return{c(){i&&i.c(),e=Tt(),s&&s.c()},l(o){i&&i.l(o),e=Tt(),s&&s.l(o)},m(o,a){i&&i.m(o,a),ie(o,e,a),s&&s.m(o,a),n=!0},p(o,a){o[6]?i||(i=Sy(),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),s&&s.p&&(!n||a[1]&16)&&Te(s,r,o,o[35],n?we(r,o[35],a,null):Ce(o[35]),null)},i(o){n||(D(s,o),n=!0)},o(o){B(s,o),n=!1},d(o){i&&i.d(o),o&&P(e),s&&s.d(o)}}}function sM(t){let e,n,i;const r=[{use:[...t[5]?[]:[[Ir,{ripple:!t[13],unbounded:!1,color:(t[7]||t[0])&&t[4]==null?"primary":t[4],disabled:t[9],addClass:t[21],removeClass:t[22],addStyle:t[23]}]],t[19],...t[1]]},{class:ue(et({[t[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":t[7],"mdc-deprecated-list-item--selected":t[0],"mdc-deprecated-list-item--disabled":t[9],"mdc-menu-item--selected":!t[20]&&t[8]==="menuitem"&&t[0],"smui-menu-item--non-interactive":t[5]},t[15]))},{style:Object.entries(t[16]).map(Ay).concat([t[3]]).join(" ")},t[20]&&t[7]?{"aria-current":"page"}:{},t[20]?{}:{role:t[8]},!t[20]&&t[8]==="option"?{"aria-selected":t[0]?"true":"false"}:{},!t[20]&&(t[8]==="radio"||t[8]==="checkbox")?{"aria-checked":t[13]&&t[13].checked?"true":"false"}:{},t[20]?{}:{"aria-disabled":t[9]?"true":"false"},{"data-menu-item-skip-restore-focus":t[10]||void 0},{tabindex:t[18]},{href:t[11]},t[17],t[27]];var s=t[12];function o(a){let l={$$slots:{default:[rM]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=x(l,r[c]);return{props:l}}return s&&(e=new s(o(t)),t[33](e),e.$on("click",t[24]),e.$on("keydown",t[25]),e.$on("SMUIGenericInput:mount",t[26]),e.$on("SMUIGenericInput:unmount",t[34])),{c(){e&&bt(e.$$.fragment),n=Tt()},l(a){e&&Dt(e.$$.fragment,a),n=Tt()},m(a,l){e&&pt(e,a,l),ie(a,n,l),i=!0},p(a,l){const c=l[0]&150974399?ke(r,[l[0]&15213235&&{use:[...a[5]?[]:[[Ir,{ripple:!a[13],unbounded:!1,color:(a[7]||a[0])&&a[4]==null?"primary":a[4],disabled:a[9],addClass:a[21],removeClass:a[22],addStyle:a[23]}]],a[19],...a[1]]},l[0]&1082277&&{class:ue(et({[a[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":a[7],"mdc-deprecated-list-item--selected":a[0],"mdc-deprecated-list-item--disabled":a[9],"mdc-menu-item--selected":!a[20]&&a[8]==="menuitem"&&a[0],"smui-menu-item--non-interactive":a[5]},a[15]))},l[0]&65544&&{style:Object.entries(a[16]).map(Ay).concat([a[3]]).join(" ")},l[0]&1048704&&ft(a[20]&&a[7]?{"aria-current":"page"}:{}),l[0]&1048832&&ft(a[20]?{}:{role:a[8]}),l[0]&1048833&&ft(!a[20]&&a[8]==="option"?{"aria-selected":a[0]?"true":"false"}:{}),l[0]&1057024&&ft(!a[20]&&(a[8]==="radio"||a[8]==="checkbox")?{"aria-checked":a[13]&&a[13].checked?"true":"false"}:{}),l[0]&1049088&&ft(a[20]?{}:{"aria-disabled":a[9]?"true":"false"}),l[0]&1024&&{"data-menu-item-skip-restore-focus":a[10]||void 0},l[0]&262144&&{tabindex:a[18]},l[0]&2048&&{href:a[11]},l[0]&131072&&ft(a[17]),l[0]&134217728&&ft(a[27])]):{};if(l[0]&64|l[1]&16&&(c.$$scope={dirty:l,ctx:a}),s!==(s=a[12])){if(e){Jt();const u=e;B(u.$$.fragment,1,0,()=>{mt(u,1)}),Zt()}s?(e=new s(o(a)),a[33](e),e.$on("click",a[24]),e.$on("keydown",a[25]),e.$on("SMUIGenericInput:mount",a[26]),e.$on("SMUIGenericInput:unmount",a[34]),bt(e.$$.fragment),D(e.$$.fragment,1),pt(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(a){i||(e&&D(e.$$.fragment,a),i=!0)},o(a){e&&B(e.$$.fragment,a),i=!1},d(a){t[33](null),a&&P(n),e&&mt(e,a)}}}let oM=0;const Ay=([t,e])=>`${t}: ${e};`;function aM(t,e,n){let i;const r=["use","class","style","color","nonInteractive","ripple","activated","role","selected","disabled","skipRestoreFocus","tabindex","inputId","href","component","getPrimaryText","getElement"];let s=ee(e,r),{$$slots:o={},$$scope:a}=e;var l;const c=Je(De());let u=()=>{};function h(j){return j===u}let{use:d=[]}=e,{class:f=""}=e,{style:p=""}=e,{color:g=void 0}=e,{nonInteractive:m=(l=Yt("SMUI:list:nonInteractive"))!==null&&l!==void 0?l:!1}=e;Ot("SMUI:list:nonInteractive",void 0);let{ripple:v=!m}=e,{activated:E=!1}=e,{role:I=Yt("SMUI:list:item:role")}=e;Ot("SMUI:list:item:role",void 0);let{selected:y=!1}=e,{disabled:M=!1}=e,{skipRestoreFocus:k=!1}=e,{tabindex:_=u}=e,{inputId:T="SMUI-form-field-list-"+oM++}=e,{href:V=void 0}=e,b,O={},J={},w={},L,R,G=Yt("SMUI:list:item:nav"),{component:S=G?V?xv:Er:cO}=e;Ot("SMUI:generic:input:props",{id:T}),Ot("SMUI:separator:context",void 0),Tn(()=>{if(!y&&!m){let ge=!0,dt=b;for(;dt.previousSibling;)if(dt=dt.previousSibling,dt.nodeType===1&&dt.classList.contains("mdc-deprecated-list-item")&&!dt.classList.contains("mdc-deprecated-list-item--disabled")){ge=!1;break}ge&&(R=window.requestAnimationFrame(Ie))}const j={_smui_list_item_accessor:!0,get element(){return ht()},get selected(){return y},set selected(ge){n(0,y=ge)},hasClass:A,addClass:z,removeClass:H,getAttr:he,addAttr:q,removeAttr:Ne,getPrimaryText:de,get checked(){var ge;return(ge=L&&L.checked)!==null&&ge!==void 0?ge:!1},set checked(ge){L&&n(13,L.checked=!!ge,L)},get hasCheckbox(){return!!(L&&"_smui_checkbox_accessor"in L)},get hasRadio(){return!!(L&&"_smui_radio_accessor"in L)},activateRipple(){L&&L.activateRipple()},deactivateRipple(){L&&L.deactivateRipple()},getValue(){return s.value}};return tt(ht(),"SMUIListItem:mount",j),()=>{tt(ht(),"SMUIListItem:unmount",j)}}),Zi(()=>{R&&window.cancelAnimationFrame(R)});function A(j){return j in O?O[j]:ht().classList.contains(j)}function z(j){O[j]||n(15,O[j]=!0,O)}function H(j){(!(j in O)||O[j])&&n(15,O[j]=!1,O)}function X(j,ge){J[j]!=ge&&(ge===""||ge==null?(delete J[j],n(16,J)):n(16,J[j]=ge,J))}function he(j){var ge;return j in w?(ge=w[j])!==null&&ge!==void 0?ge:null:ht().getAttribute(j)}function q(j,ge){w[j]!==ge&&n(17,w[j]=ge,w)}function Ne(j){(!(j in w)||w[j]!=null)&&n(17,w[j]=void 0,w)}function Ie(){let j=!0,ge=b.getElement();for(;ge.nextElementSibling;)if(ge=ge.nextElementSibling,ge.nodeType===1&&ge.classList.contains("mdc-deprecated-list-item")){const dt=ge.attributes.getNamedItem("tabindex");if(dt&&dt.value==="0"){j=!1;break}}j&&n(18,i=0)}function _e(j){M||tt(ht(),"SMUI:action",j)}function Re(j){const ge=j.key==="Enter",dt=j.key==="Space";(ge||dt)&&_e(j)}function K(j){("_smui_checkbox_accessor"in j.detail||"_smui_radio_accessor"in j.detail)&&n(13,L=j.detail)}function de(){var j,ge,dt;const an=ht(),Vn=an.querySelector(".mdc-deprecated-list-item__primary-text");if(Vn)return(j=Vn.textContent)!==null&&j!==void 0?j:"";const yi=an.querySelector(".mdc-deprecated-list-item__text");return yi?(ge=yi.textContent)!==null&&ge!==void 0?ge:"":(dt=an.textContent)!==null&&dt!==void 0?dt:""}function ht(){return b.getElement()}function on(j){le[j?"unshift":"push"](()=>{b=j,n(14,b)})}const Pt=()=>n(13,L=void 0);return t.$$set=j=>{e=x(x({},e),Ge(j)),n(27,s=ee(e,r)),"use"in j&&n(1,d=j.use),"class"in j&&n(2,f=j.class),"style"in j&&n(3,p=j.style),"color"in j&&n(4,g=j.color),"nonInteractive"in j&&n(5,m=j.nonInteractive),"ripple"in j&&n(6,v=j.ripple),"activated"in j&&n(7,E=j.activated),"role"in j&&n(8,I=j.role),"selected"in j&&n(0,y=j.selected),"disabled"in j&&n(9,M=j.disabled),"skipRestoreFocus"in j&&n(10,k=j.skipRestoreFocus),"tabindex"in j&&n(28,_=j.tabindex),"inputId"in j&&n(29,T=j.inputId),"href"in j&&n(11,V=j.href),"component"in j&&n(12,S=j.component),"$$scope"in j&&n(35,a=j.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&268444193&&n(18,i=h(_)?!m&&!M&&(y||L&&L.checked)?0:-1:_)},[y,d,f,p,g,m,v,E,I,M,k,V,S,L,b,O,J,w,i,c,G,z,H,X,_e,Re,K,s,_,T,de,ht,o,on,Pt,a]}class lM extends Ke{constructor(e){super();ze(this,e,aM,sM,Ve,{use:1,class:2,style:3,color:4,nonInteractive:5,ripple:6,activated:7,role:8,selected:0,disabled:9,skipRestoreFocus:10,tabindex:28,inputId:29,href:11,component:12,getPrimaryText:30,getElement:31},null,[-1,-1])}get getPrimaryText(){return this.$$.ctx[30]}get getElement(){return this.$$.ctx[31]}}xt({class:"mdc-deprecated-list-item__text",component:Er});xt({class:"mdc-deprecated-list-item__primary-text",component:Er});xt({class:"mdc-deprecated-list-item__secondary-text",component:Er});function cM(t){let e,n,i,r,s,o;const a=t[8].default,l=Ee(a,t,t[7],null);let c=[{class:n=ue({[t[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":t[4]})},t[5]],u={};for(let h=0;h<c.length;h+=1)u=x(u,c[h]);return{c(){e=ve("span"),l&&l.c(),this.h()},l(h){e=Se(h,"SPAN",{class:!0});var d=fe(e);l&&l.l(d),d.forEach(P),this.h()},h(){se(e,u)},m(h,d){ie(h,e,d),l&&l.m(e,null),t[9](e),r=!0,s||(o=[re(i=nt.call(null,e,t[0])),re(t[3].call(null,e))],s=!0)},p(h,[d]){l&&l.p&&(!r||d&128)&&Te(l,a,h,h[7],r?we(a,h[7],d,null):Ce(h[7]),null),se(e,u=ke(c,[(!r||d&2&&n!==(n=ue({[h[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":h[4]})))&&{class:n},d&32&&h[5]])),i&&xe(i.update)&&d&1&&i.update.call(null,h[0])},i(h){r||(D(l,h),r=!0)},o(h){B(l,h),r=!1},d(h){h&&P(e),l&&l.d(h),t[9](null),s=!1,We(o)}}}function uM(t,e,n){const i=["use","class","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e;const a=Je(De());let{use:l=[]}=e,{class:c=""}=e,u,h=Yt("SMUI:list:graphic:menu-selection-group");function d(){return u}function f(p){le[p?"unshift":"push"](()=>{u=p,n(2,u)})}return t.$$set=p=>{e=x(x({},e),Ge(p)),n(5,r=ee(e,i)),"use"in p&&n(0,l=p.use),"class"in p&&n(1,c=p.class),"$$scope"in p&&n(7,o=p.$$scope)},[l,c,u,a,h,r,d,o,s,f]}class hM extends Ke{constructor(e){super();ze(this,e,uM,cM,Ve,{use:0,class:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}xt({class:"mdc-deprecated-list-item__meta",component:Er});xt({class:"mdc-deprecated-list-group",component:hi});xt({class:"mdc-deprecated-list-group__subheader",component:lO});const hV=lM,dM=hM;xt({class:"mdc-menu__selection-group-icon",component:dM});/**
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
 */var Rn={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},fM={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var ky=function(t){mn(e,t);function e(n){var i=t.call(this,lt(lt({},e.defaultAdapter),n))||this;return i.animationFrame=0,i.animationTimer=0,i}return Object.defineProperty(e,"strings",{get:function(){return fM},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Rn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var n=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(Rn.OPEN),this.adapter.addClass(Rn.ANIMATE),this.runNextAnimationFrame(function(){n.adapter.addClass(Rn.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(Rn.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(Rn.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(Rn.OPENING)||this.adapter.hasClass(Rn.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(Rn.CLOSING)},e.prototype.handleKeydown=function(n){var i=n.keyCode,r=n.key,s=r==="Escape"||i===27;s&&this.close()},e.prototype.handleTransitionEnd=function(n){var i=Rn.OPENING,r=Rn.CLOSING,s=Rn.OPEN,o=Rn.ANIMATE,a=Rn.ROOT,l=this.isElement(n.target)&&this.adapter.elementHasClass(n.target,a);!l||(this.isClosing()?(this.adapter.removeClass(s),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(o),this.adapter.removeClass(i),this.adapter.removeClass(r))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(n){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(n,0)})},e.prototype.isElement=function(n){return Boolean(n.classList)},e}(Hn);/**
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
 */var pM=function(t){mn(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(ky);function mM(t){let e,n,i,r,s,o;const a=t[15].default,l=Ee(a,t,t[14],null);let c=[{class:n=ue(et({[t[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":t[2]==="dismissible","mdc-drawer--modal":t[2]==="modal","smui-drawer__absolute":t[2]==="modal"&&!t[3]},t[6]))},t[8]],u={};for(let h=0;h<c.length;h+=1)u=x(u,c[h]);return{c(){e=ve("aside"),l&&l.c(),this.h()},l(h){e=Se(h,"ASIDE",{class:!0});var d=fe(e);l&&l.l(d),d.forEach(P),this.h()},h(){se(e,u)},m(h,d){ie(h,e,d),l&&l.m(e,null),t[16](e),r=!0,s||(o=[re(i=nt.call(null,e,t[0])),re(t[7].call(null,e)),Qe(e,"keydown",t[17]),Qe(e,"transitionend",t[18])],s=!0)},p(h,[d]){l&&l.p&&(!r||d&16384)&&Te(l,a,h,h[14],r?we(a,h[14],d,null):Ce(h[14]),null),se(e,u=ke(c,[(!r||d&78&&n!==(n=ue(et({[h[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":h[2]==="dismissible","mdc-drawer--modal":h[2]==="modal","smui-drawer__absolute":h[2]==="modal"&&!h[3]},h[6]))))&&{class:n},d&256&&h[8]])),i&&xe(i.update)&&d&1&&i.update.call(null,h[0])},i(h){r||(D(l,h),r=!0)},o(h){B(l,h),r=!1},d(h){h&&P(e),l&&l.d(h),t[16](null),s=!1,We(o)}}}function gM(t,e,n){const i=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e;const{FocusTrap:a}=RR,l=Je(De());let{use:c=[]}=e,{class:u=""}=e,{variant:h=void 0}=e,{open:d=!1}=e,{fixed:f=!0}=e,p,g,m={},v=null,E,I=!1;Ot("SMUI:list:nav",!0),Ot("SMUI:list:item:nav",!0),Ot("SMUI:list:wrapFocus",!0);let y=h;Tn(()=>{E=new a(p,{skipInitialFocus:!0}),n(4,g=M()),g&&g.init()}),Zi(()=>{g&&g.destroy(),I&&I.removeEventListener("SMUIDrawerScrim:click",V)});function M(){var G,S;I&&I.removeEventListener("SMUIDrawerScrim:click",V),h==="modal"&&(I=(S=(G=p.parentNode)===null||G===void 0?void 0:G.querySelector(".mdc-drawer-scrim"))!==null&&S!==void 0?S:!1,I&&I.addEventListener("SMUIDrawerScrim:click",V));const A=h==="dismissible"?ky:h==="modal"?pM:void 0;return A?new A({addClass:_,removeClass:T,hasClass:k,elementHasClass:(z,H)=>z.classList.contains(H),saveFocus:()=>v=document.activeElement,restoreFocus:()=>{v&&"focus"in v&&p.contains(document.activeElement)&&v.focus()},focusActiveNavigationItem:()=>{const z=p.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");z&&z.focus()},notifyClose:()=>{n(9,d=!1),tt(p,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{n(9,d=!0),tt(p,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>E.trapFocus(),releaseFocus:()=>E.releaseFocus()}):void 0}function k(G){return G in m?m[G]:J().classList.contains(G)}function _(G){m[G]||n(6,m[G]=!0,m)}function T(G){(!(G in m)||m[G])&&n(6,m[G]=!1,m)}function V(){g&&"handleScrimClick"in g&&g.handleScrimClick()}function b(G){n(9,d=G)}function O(){return d}function J(){return p}function w(G){le[G?"unshift":"push"](()=>{p=G,n(5,p)})}const L=G=>g&&g.handleKeydown(G),R=G=>g&&g.handleTransitionEnd(G);return t.$$set=G=>{e=x(x({},e),Ge(G)),n(8,r=ee(e,i)),"use"in G&&n(0,c=G.use),"class"in G&&n(1,u=G.class),"variant"in G&&n(2,h=G.variant),"open"in G&&n(9,d=G.open),"fixed"in G&&n(3,f=G.fixed),"$$scope"in G&&n(14,o=G.$$scope)},t.$$.update=()=>{t.$$.dirty&8212&&y!==h&&(n(13,y=h),g&&g.destroy(),n(6,m={}),n(4,g=M()),g&&g.init()),t.$$.dirty&528&&g&&g.isOpen()!==d&&(d?g.open():g.close())},[c,u,h,f,g,p,m,l,r,d,b,O,J,y,o,s,w,L,R]}class dV extends Ke{constructor(e){super();ze(this,e,gM,mM,Ve,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}var fV=xt({class:"mdc-drawer-app-content",component:hi}),pV=xt({class:"mdc-drawer__content",component:hi});xt({class:"mdc-drawer__header",component:hi});xt({class:"mdc-drawer__title",component:oO});xt({class:"mdc-drawer__subtitle",component:aO});function _M(t){let e,n,i,r,s,o;const a=t[9].default,l=Ee(a,t,t[8],null);let c=[{class:n=ue({[t[1]]:!0,"mdc-card":!0,"mdc-card--outlined":t[2]==="outlined","smui-card--padded":t[3]})},t[6]],u={};for(let h=0;h<c.length;h+=1)u=x(u,c[h]);return{c(){e=ve("div"),l&&l.c(),this.h()},l(h){e=Se(h,"DIV",{class:!0});var d=fe(e);l&&l.l(d),d.forEach(P),this.h()},h(){se(e,u)},m(h,d){ie(h,e,d),l&&l.m(e,null),t[10](e),r=!0,s||(o=[re(i=nt.call(null,e,t[0])),re(t[5].call(null,e))],s=!0)},p(h,[d]){l&&l.p&&(!r||d&256)&&Te(l,a,h,h[8],r?we(a,h[8],d,null):Ce(h[8]),null),se(e,u=ke(c,[(!r||d&14&&n!==(n=ue({[h[1]]:!0,"mdc-card":!0,"mdc-card--outlined":h[2]==="outlined","smui-card--padded":h[3]})))&&{class:n},d&64&&h[6]])),i&&xe(i.update)&&d&1&&i.update.call(null,h[0])},i(h){r||(D(l,h),r=!0)},o(h){B(l,h),r=!1},d(h){h&&P(e),l&&l.d(h),t[10](null),s=!1,We(o)}}}function vM(t,e,n){const i=["use","class","variant","padded","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e;const a=Je(De());let{use:l=[]}=e,{class:c=""}=e,{variant:u="raised"}=e,{padded:h=!1}=e,d;function f(){return d}function p(g){le[g?"unshift":"push"](()=>{d=g,n(4,d)})}return t.$$set=g=>{e=x(x({},e),Ge(g)),n(6,r=ee(e,i)),"use"in g&&n(0,l=g.use),"class"in g&&n(1,c=g.class),"variant"in g&&n(2,u=g.variant),"padded"in g&&n(3,h=g.padded),"$$scope"in g&&n(8,o=g.$$scope)},[l,c,u,h,d,a,r,f,o,s,p]}class mV extends Ke{constructor(e){super();ze(this,e,vM,_M,Ve,{use:0,class:1,variant:2,padded:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}xt({class:"smui-card__content",component:hi});xt({class:"mdc-card__media-content",component:hi});xt({class:"mdc-card__action-buttons",component:hi});xt({class:"mdc-card__action-icons",component:hi});const Ry="@firebase/database",Oy="0.12.4";/**
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
 */let Ly="";function yM(t){Ly=t}/**
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
 */class bM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Bt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:$s(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class IM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Jn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const My=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new bM(e)}}catch{}return new IM},Cr=My("localStorage"),Md=My("sessionStorage");/**
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
 */const Cs=new Wa("@firebase/database"),EM=function(){let t=1;return function(){return t++}}(),Ny=function(t){const e=P0(t),n=new O0;n.update(e);const i=n.digest();return yu.encodeByteArray(i)},Jo=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Jo.apply(null,i):typeof i=="object"?e+=Bt(i):e+=i,e+=" "}return e};let Sr=null,Py=!0;const wM=function(t,e){W(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Cs.logLevel=je.VERBOSE,Sr=Cs.log.bind(Cs),e&&Md.set("logging_enabled",!0)):typeof t=="function"?Sr=t:(Sr=null,Md.remove("logging_enabled"))},sn=function(...t){if(Py===!0&&(Py=!1,Sr===null&&Md.get("logging_enabled")===!0&&wM(!0)),Sr){const e=Jo.apply(null,t);Sr(e)}},Zo=function(t){return function(...e){sn(t,...e)}},Nd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Jo(...t);Cs.error(e)},Ar=function(...t){const e=`FIREBASE FATAL ERROR: ${Jo(...t)}`;throw Cs.error(e),new Error(e)},Un=function(...t){const e="FIREBASE WARNING: "+Jo(...t);Cs.warn(e)},TM=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Un("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},cc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},CM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ss="[MIN_NAME]",kr="[MAX_NAME]",Rr=function(t,e){if(t===e)return 0;if(t===Ss||e===kr)return-1;if(e===Ss||t===kr)return 1;{const n=xy(t),i=xy(e);return n!==null?i!==null?n-i==0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},SM=function(t,e){return t===e?0:t<e?-1:1},$o=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Bt(e))},Pd=function(t){if(typeof t!="object"||t===null)return Bt(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Bt(e[i]),n+=":",n+=Pd(t[e[i]]);return n+="}",n},Dy=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function fn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Fy=function(t){W(!cc(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t==-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},AM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},kM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function RM(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const OM=new RegExp("^-?(0*)\\d{1,10}$"),LM=-2147483648,MM=2147483647,xy=function(t){if(OM.test(t)){const e=Number(t);if(e>=LM&&e<=MM)return e}return null},As=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Un("Exception was thrown by user callback.",n),e},Math.floor(0))}},NM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ea=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class PM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Un(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class DM{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(sn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Un(e)}}class Dd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Dd.OWNER="owner";/**
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
 */const Fd="5",Uy="v",jy="s",Vy="r",By="f",Hy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qy="ls",FM="p",xd="ac",Wy="websocket",Gy="long_polling";/**
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
 */class xM{constructor(e,n,i,r,s=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Cr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Cr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function UM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function zy(t,e,n){W(typeof e=="string","typeof type must == string"),W(typeof n=="object","typeof params must == object");let i;if(e===Wy)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Gy)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);UM(t)&&(n.ns=t.namespace);const r=[];return fn(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class jM{constructor(){this.counters_={}}incrementCounter(e,n=1){Jn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return I0(this.counters_)}}/**
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
 */const Ud={},jd={};function Vd(t){const e=t.toString();return Ud[e]||(Ud[e]=new jM),Ud[e]}function VM(t,e){const n=t.toString();return jd[n]||(jd[n]=e()),jd[n]}/**
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
 */class BM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&As(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ky="start",HM="close",qM="pLPCommand",WM="pRTLPCB",Xy="id",Qy="pw",Yy="ser",GM="cb",zM="seg",KM="ts",XM="d",QM="dframe",Jy=1870,Zy=30,YM=Jy-Zy,JM=25e3,ZM=3e4;class ks{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Zo(e),this.stats_=Vd(n),this.urlFn=l=>(this.appCheckToken&&(l[xd]=this.appCheckToken),zy(n,Gy,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new BM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ZM)),CM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bd((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ky)this.id=a,this.password=l;else if(o===HM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Ky]="t",i[Yy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[GM]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Uy]=Fd,this.transportSessionId&&(i[jy]=this.transportSessionId),this.lastSessionId&&(i[qy]=this.lastSessionId),this.applicationId&&(i[FM]=this.applicationId),this.appCheckToken&&(i[xd]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Hy.test(location.hostname)&&(i[Vy]=By);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ks.forceAllow_=!0}static forceDisallow(){ks.forceDisallow_=!0}static isAvailable(){return ks.forceAllow_?!0:!ks.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!AM()&&!kM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Bt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=b0(n),r=Dy(i,YM);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[QM]="t",i[Xy]=e,i[Qy]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Bt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Bd{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=EM(),window[qM+this.uniqueCallbackIdentifier]=e,window[WM+this.uniqueCallbackIdentifier]=n,this.myIFrame=Bd.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,"javascript:".length)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){sn("frame writing exception"),a.stack&&sn(a.stack),sn(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||sn("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Xy]=this.myID,e[Qy]=this.myPW,e[Yy]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zy+i.length<=Jy;){const o=this.pendingSegs.shift();i=i+"&"+zM+r+"="+o.seg+"&"+KM+r+"="+o.ts+"&"+XM+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(JM)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{sn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const $M=16384,eN=45e3;let uc=null;typeof MozWebSocket!="undefined"?uc=MozWebSocket:typeof WebSocket!="undefined"&&(uc=WebSocket);class Kn{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Zo(this.connId),this.stats_=Vd(n),this.connURL=Kn.connectionURL_(n,o,a,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r){const s={};return s[Uy]=Fd,typeof location!="undefined"&&location.hostname&&Hy.test(location.hostname)&&(s[Vy]=By),n&&(s[jy]=n),i&&(s[qy]=i),r&&(s[xd]=r),zy(e,Wy,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Cr.set("previous_websocket_failure",!0);try{if(!Lp()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new uc(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Kn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&uc!==null&&!Kn.forceDisallow_}static previouslyFailed(){return Cr.isInMemoryStorage||Cr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Cr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=$s(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(W(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Bt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Dy(n,$M);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(eN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kn.responsesRequiredToBeHealthy=2;Kn.healthyTimeout=3e4;/**
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
 */const tN=6e4,nN=5e3,iN=10*1024,rN=100*1024,qd="t",$y="d",sN="s",eb="r",oN="e",tb="o",nb="a",ib="n",rb="p",aN="h";class lN{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Zo("c:"+this.id+":"),this.transportManager_=new Hd(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=ea(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>rN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>iN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qd in e){const n=e[qd];n===nb?this.upgradeIfSecondaryHealthy_():n===eb?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===tb&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=$o("t",e),i=$o("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rb,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:nb,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ib,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=$o("t",e),i=$o("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=$o(qd,e);if($y in e){const i=e[$y];if(n===aN)this.onHandshake_(i);else if(n===ib){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===sN?this.onConnectionShutdown_(i):n===eb?this.onReset_(i):n===oN?Nd("Server Error: "+i):n===tb?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Nd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Fd!==i&&Un("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),ea(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ea(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rb,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Cr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class sb{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class ob{constructor(e){this.allowedEvents_=e,this.listeners_={},W(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){W(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class hc extends ob{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!ja()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hc}getInitialEvent(e){return W(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ab=32,lb=768;class Ze{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Be(){return new Ze("")}function Oe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Hi(t){return t.pieces_.length-t.pieceNum_}function it(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ze(t.pieces_,e)}function Wd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function cN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ta(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function cb(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ze(e,0)}function St(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Ze)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new Ze(n,0)}function Le(t){return t.pieceNum_>=t.pieces_.length}function On(t,e){const n=Oe(t),i=Oe(e);if(n===null)return e;if(n===i)return On(it(t),it(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function uN(t,e){const n=ta(t,0),i=ta(e,0);for(let r=0;r<n.length&&r<i.length;r++){const s=Rr(n[r],i[r]);if(s!==0)return s}return n.length===i.length?0:n.length<i.length?-1:1}function Gd(t,e){if(Hi(t)!==Hi(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function qn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Hi(t)>Hi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class hN{constructor(e,n){this.errorPrefix_=n,this.parts_=ta(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=qa(this.parts_[i]);ub(this)}}function dN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=qa(e),ub(t)}function fN(t){const e=t.parts_.pop();t.byteLength_-=qa(e),t.parts_.length>0&&(t.byteLength_-=1)}function ub(t){if(t.byteLength_>lb)throw new Error(t.errorPrefix_+"has a key path longer than "+lb+" bytes ("+t.byteLength_+").");if(t.parts_.length>ab)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ab+") or object contains a cycle "+Or(t))}function Or(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class zd extends ob{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new zd}getInitialEvent(e){return W(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const na=1e3,pN=60*5*1e3,mN=3*1e3,hb=30*1e3,gN=1.3,_N=3e4,vN="server_kill",db=3;class pi extends sb{constructor(e,n,i,r,s,o,a,l){super();if(this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=pi.nextPersistentConnectionId_++,this.log_=Zo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=na,this.maxReconnectDelay_=pN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Lp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(Bt(s)),W(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new wi,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||r!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},mN),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),W(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;pi.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Jn(e,"w")){const i=Xr(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Un(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||R0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=hb)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=k0(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Bt(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Nd("Unrecognized action received from server: "+Bt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){W(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=na,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=na,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_N&&(this.reconnectDelay_=na),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+pi.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){W(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?sn("getToken() completed but was canceled"):(sn("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new lN(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{Un(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(vN)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Un(h),l())}}}interrupt(e){sn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){sn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Va(this.interruptReasons_)&&(this.reconnectDelay_=na,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Pd(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new Ze(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){sn("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=db&&(this.reconnectDelay_=hb,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){sn("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=db&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ly.replace(/\./g,"-")]=1,ja()?e["framework.cordova"]=1:Iu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hc.getInstance().currentlyOnline();return Va(this.interruptReasons_)&&e}}pi.nextPersistentConnectionId_=0;pi.nextConnectionId_=0;/**
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
 */class Me{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Me(e,n)}}/**
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
 */class dc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new Me(Ss,e),r=new Me(Ss,n);return this.compare(i,r)!==0}minPost(){return Me.MIN}}/**
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
 */let fc;class fb extends dc{static get __EMPTY_NODE(){return fc}static set __EMPTY_NODE(e){fc=e}compare(e,n){return Rr(e.name,n.name)}isDefinedOn(e){throw Kr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Me.MIN}maxPost(){return new Me(kr,fc)}makePost(e,n){return W(typeof e=="string","KeyIndex indexValue must always be a string."),new Me(e,fc)}toString(){return".key"}}const Rs=new fb;/**
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
 */class pc{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Gt{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:Gt.RED,this.left=r!=null?r:Ln.EMPTY_NODE,this.right=s!=null?s:Ln.EMPTY_NODE}copy(e,n,i,r,s){return new Gt(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ln.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Ln.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Gt.RED=!0;Gt.BLACK=!1;class yN{copy(e,n,i,r,s){return this}insert(e,n,i){return new Gt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ln{constructor(e,n=Ln.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ln(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Gt.BLACK,null,null))}remove(e){return new Ln(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Gt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new pc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new pc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new pc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new pc(this.root_,null,this.comparator_,!0,e)}}Ln.EMPTY_NODE=new yN;/**
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
 */function bN(t,e){return Rr(t.name,e.name)}function Kd(t,e){return Rr(t,e)}/**
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
 */let Xd;function IN(t){Xd=t}const pb=function(t){return typeof t=="number"?"number:"+Fy(t):"string:"+t},mb=function(t){if(t.isLeafNode()){const e=t.val();W(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Jn(e,".sv"),"Priority must be a string or number.")}else W(t===Xd||t.isEmpty(),"priority of unexpected type.");W(t===Xd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let gb;class zt{constructor(e,n=zt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,W(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),mb(this.priorityNode_)}static set __childrenNodeConstructor(e){gb=e}static get __childrenNodeConstructor(){return gb}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new zt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:zt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Le(e)?this:Oe(e)===".priority"?this.priorityNode_:zt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:zt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Oe(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(W(i!==".priority"||Hi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,zt.__childrenNodeConstructor.EMPTY_NODE.updateChild(it(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pb(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Fy(this.value_):e+=this.value_,this.lazyHash_=Ny(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===zt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof zt.__childrenNodeConstructor?-1:(W(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=zt.VALUE_TYPE_ORDER.indexOf(n),s=zt.VALUE_TYPE_ORDER.indexOf(i);return W(r>=0,"Unknown leaf type: "+n),W(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}zt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let _b,vb;function EN(t){_b=t}function wN(t){vb=t}class TN extends dc{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?Rr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Me.MIN}maxPost(){return new Me(kr,new zt("[PRIORITY-POST]",vb))}makePost(e,n){const i=_b(e);return new Me(n,new zt("[PRIORITY-POST]",i))}toString(){return".priority"}}const wt=new TN;/**
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
 */const CN=Math.log(2);class SN{constructor(e){const n=s=>parseInt(Math.log(s)/CN,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const mc=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Gt(d,h.node,Gt.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=r(l,f),g=r(f+1,c);return h=t[f],d=n?n(h):h,new Gt(d,h.node,Gt.BLACK,p,g)}},s=function(l){let c=null,u=null,h=t.length;const d=function(p,g){const m=h-p,v=h;h-=p;const E=r(m+1,v),I=t[m],y=n?n(I):I;f(new Gt(y,I.node,g,null,E))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),m=Math.pow(2,l.count-(p+1));g?d(m,Gt.BLACK):(d(m,Gt.BLACK),d(m,Gt.RED))}return u},o=new SN(t.length),a=s(o);return new Ln(i||e,a)};/**
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
 */let Qd;const Os={};class mi{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return W(Os&&wt,"ChildrenNode.ts has not been loaded"),Qd=Qd||new mi({".priority":Os},{".priority":wt}),Qd}get(e){const n=Xr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ln?n:null}hasIndex(e){return Jn(this.indexSet_,e.toString())}addIndex(e,n){W(e!==Rs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(Me.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=mc(i,e.getCompare()):a=Os;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new mi(u,c)}addToIndexes(e,n){const i=Ba(this.indexes_,(r,s)=>{const o=Xr(this.indexSet_,s);if(W(o,"Missing index implementation for "+s),r===Os)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Me.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),mc(a,o.getCompare())}else return Os;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new Me(e.name,a))),l.insert(e,e.node)}});return new mi(i,this.indexSet_)}removeFromIndexes(e,n){const i=Ba(this.indexes_,r=>{if(r===Os)return r;{const s=n.get(e.name);return s?r.remove(new Me(e.name,s)):r}});return new mi(i,this.indexSet_)}}/**
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
 */let ia;class ce{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&mb(this.priorityNode_),this.children_.isEmpty()&&W(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ia||(ia=new ce(new Ln(Kd),null,mi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ia}updatePriority(e){return this.children_.isEmpty()?this:new ce(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ia:n}}getChild(e){const n=Oe(e);return n===null?this:this.getImmediateChild(n).getChild(it(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(W(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new Me(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?ia:this.priorityNode_;return new ce(r,o,s)}}updateChild(e,n){const i=Oe(e);if(i===null)return n;{W(Oe(e)!==".priority"||Hi(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(it(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(wt,(o,a)=>{n[o]=a.val(e),i++,s&&ce.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pb(this.getPriority().val())+":"),this.forEachChild(wt,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Ny(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new Me(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Me(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Me(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Me.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Me.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ra?-1:0}withIndex(e){if(e===Rs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ce(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Rs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(wt),r=n.getIterator(wt);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Rs?null:this.indexMap_.get(e.toString())}}ce.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class AN extends ce{constructor(){super(new Ln(Kd),ce.EMPTY_NODE,mi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ce.EMPTY_NODE}isEmpty(){return!1}}const ra=new AN;Object.defineProperties(Me,{MIN:{value:new Me(Ss,ce.EMPTY_NODE)},MAX:{value:new Me(kr,ra)}});fb.__EMPTY_NODE=ce.EMPTY_NODE;zt.__childrenNodeConstructor=ce;IN(ra);wN(ra);/**
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
 */const kN=!0;function jt(t,e=null){if(t===null)return ce.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),W(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new zt(n,jt(e))}if(!(t instanceof Array)&&kN){const n=[];let i=!1;if(fn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=jt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new Me(o,l)))}}),n.length===0)return ce.EMPTY_NODE;const s=mc(n,bN,o=>o.name,Kd);if(i){const o=mc(n,wt.getCompare());return new ce(s,jt(e),new mi({".priority":o},{".priority":wt}))}else return new ce(s,jt(e),mi.Default)}else{let n=ce.EMPTY_NODE;return fn(t,(i,r)=>{if(Jn(t,i)&&i.substring(0,1)!=="."){const s=jt(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(jt(e))}}EN(jt);/**
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
 */class RN extends dc{constructor(e){super();this.indexPath_=e,W(!Le(e)&&Oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?Rr(e.name,n.name):s}makePost(e,n){const i=jt(e),r=ce.EMPTY_NODE.updateChild(this.indexPath_,i);return new Me(n,r)}maxPost(){const e=ce.EMPTY_NODE.updateChild(this.indexPath_,ra);return new Me(kr,e)}toString(){return ta(this.indexPath_,0).join("/")}}/**
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
 */class ON extends dc{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Rr(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Me.MIN}maxPost(){return Me.MAX}makePost(e,n){const i=jt(e);return new Me(n,i)}toString(){return".value"}}const LN=new ON;/**
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
 */function yb(t){return{type:"value",snapshotNode:t}}function Ls(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function sa(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function oa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function MN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Yd{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){W(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(sa(n,a)):W(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ls(n,i)):o.trackChildChange(oa(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(wt,(r,s)=>{n.hasChild(r)||i.trackChildChange(sa(r,s))}),n.isLeafNode()||n.forEachChild(wt,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(oa(r,s,o))}else i.trackChildChange(Ls(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ce.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class aa{constructor(e){this.indexedFilter_=new Yd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=aa.getStartPost_(e),this.endPost_=aa.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,r,s,o){return this.matches(new Me(n,i))||(i=ce.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=ce.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(ce.EMPTY_NODE);const s=this;return n.forEachChild(wt,(o,a)=>{s.matches(new Me(o,a))||(r=r.updateImmediateChild(o,ce.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class NN{constructor(e){this.rangedFilter_=new aa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new Me(n,i))||(i=ce.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=ce.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=ce.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)r=r.updateImmediateChild(a.name,a.node),o++;else break}}else{r=n.withIndex(this.index_),r=r.updatePriority(ce.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,f)=>h(f,d)}else l=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const h=l.getNext();!u&&a(s,h)<=0&&(u=!0),u&&c<this.limit_&&a(h,o)<=0?c++:r=r.updateImmediateChild(h.name,ce.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;W(a.numChildren()===this.limit_,"");const l=new Me(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=r.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!i.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(oa(n,i,h)),a.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(sa(n,h));const g=a.updateImmediateChild(n,ce.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Ls(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(sa(c.name,c.node)),s.trackChildChange(Ls(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,ce.EMPTY_NODE)):e}}/**
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
 */class Jd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=wt}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return W(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return W(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ss}hasEnd(){return this.endSet_}getIndexEndValue(){return W(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return W(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:kr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return W(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===wt}copy(){const e=new Jd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function PN(t){return t.loadsAllData()?new Yd(t.getIndex()):t.hasLimit()?new NN(t):new aa(t)}function bb(t){const e={};if(t.isDefault())return e;let n;return t.index_===wt?n="$priority":t.index_===LN?n="$value":t.index_===Rs?n="$key":(W(t.index_ instanceof RN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Bt(n),t.startSet_&&(e.startAt=Bt(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Bt(t.indexStartName_))),t.endSet_&&(e.endAt=Bt(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Bt(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ib(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==wt&&(e.i=t.index_.toString()),e}/**
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
 */class gc extends sb{constructor(e,n,i,r){super();this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Zo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(W(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=gc.getListenId_(e,i),a={};this.listens_[o]=a;const l=bb(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,i),Xr(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,n){const i=gc.getListenId_(e,n);delete this.listens_[i]}get(e){const n=bb(e._queryParams),i=e._path.toString(),r=new wi;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+tr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=$s(a.responseText)}catch{Un("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Un("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class DN{constructor(){this.rootNode_=ce.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function _c(){return{value:null,children:new Map}}function Ms(t,e,n){if(Le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Oe(e);t.children.has(i)||t.children.set(i,_c());const r=t.children.get(i);e=it(e),Ms(r,e,n)}}function Zd(t,e){if(Le(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(wt,(i,r)=>{Ms(t,new Ze(i),r)}),Zd(t,e)}}else if(t.children.size>0){const n=Oe(e);return e=it(e),t.children.has(n)&&Zd(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function $d(t,e,n){t.value!==null?n(e,t.value):FN(t,(i,r)=>{const s=new Ze(e.toString()+"/"+i);$d(r,s,n)})}function FN(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class xN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&fn(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const Eb=10*1e3,UN=30*1e3,jN=5*60*1e3;class VN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new xN(e);const i=Eb+(UN-Eb)*Math.random();ea(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;fn(e,(r,s)=>{s>0&&Jn(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),ea(this.reportStats_.bind(this),Math.floor(Math.random()*2*jN))}}/**
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
 */var Xn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xn||(Xn={}));function wb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ef(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class vc{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Xn.ACK_USER_WRITE,this.source=wb()}operationForChild(e){if(Le(this.path)){if(this.affectedTree.value!=null)return W(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ze(e));return new vc(Be(),n,this.revert)}}else return W(Oe(this.path)===e,"operationForChild called for unrelated child."),new vc(it(this.path),this.affectedTree,this.revert)}}/**
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
 */class la{constructor(e,n){this.source=e,this.path=n,this.type=Xn.LISTEN_COMPLETE}operationForChild(e){return Le(this.path)?new la(this.source,Be()):new la(this.source,it(this.path))}}/**
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
 */class Lr{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Xn.OVERWRITE}operationForChild(e){return Le(this.path)?new Lr(this.source,Be(),this.snap.getImmediateChild(e)):new Lr(this.source,it(this.path),this.snap)}}/**
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
 */class ca{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Xn.MERGE}operationForChild(e){if(Le(this.path)){const n=this.children.subtree(new Ze(e));return n.isEmpty()?null:n.value?new Lr(this.source,Be(),n.value):new ca(this.source,Be(),n)}else return W(Oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ca(this.source,it(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Mr{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Le(e))return this.isFullyInitialized()&&!this.filtered_;const n=Oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class BN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function HN(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(MN(o.childName,o.snapshotNode))}),ua(t,r,"child_removed",e,i,n),ua(t,r,"child_added",e,i,n),ua(t,r,"child_moved",s,i,n),ua(t,r,"child_changed",e,i,n),ua(t,r,"value",e,i,n),r}function ua(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>WN(t,a,l)),o.forEach(a=>{const l=qN(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function qN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function WN(t,e,n){if(e.childName==null||n.childName==null)throw Kr("Should only compare child_ events.");const i=new Me(e.childName,e.snapshotNode),r=new Me(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
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
 */function yc(t,e){return{eventCache:t,serverCache:e}}function ha(t,e,n,i){return yc(new Mr(e,n,i),t.serverCache)}function Tb(t,e,n,i){return yc(t.eventCache,new Mr(e,n,i))}function nf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Nr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let rf;const GN=()=>(rf||(rf=new Ln(SM)),rf);class _t{constructor(e,n=GN()){this.value=e,this.children=n}static fromObject(e){let n=new _t(null);return fn(e,(i,r)=>{n=n.set(new Ze(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Be(),value:this.value};if(Le(e))return null;{const i=Oe(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(it(e),n);return s!=null?{path:St(new Ze(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Le(e))return this;{const n=Oe(e),i=this.children.get(n);return i!==null?i.subtree(it(e)):new _t(null)}}set(e,n){if(Le(e))return new _t(n,this.children);{const i=Oe(e),s=(this.children.get(i)||new _t(null)).set(it(e),n),o=this.children.insert(i,s);return new _t(this.value,o)}}remove(e){if(Le(e))return this.children.isEmpty()?new _t(null):new _t(null,this.children);{const n=Oe(e),i=this.children.get(n);if(i){const r=i.remove(it(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new _t(null):new _t(this.value,s)}else return this}}get(e){if(Le(e))return this.value;{const n=Oe(e),i=this.children.get(n);return i?i.get(it(e)):null}}setTree(e,n){if(Le(e))return n;{const i=Oe(e),s=(this.children.get(i)||new _t(null)).setTree(it(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new _t(this.value,o)}}fold(e){return this.fold_(Be(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(St(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Be(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(Le(e))return null;{const s=Oe(e),o=this.children.get(s);return o?o.findOnPath_(it(e),St(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Be(),n)}foreachOnPath_(e,n,i){if(Le(e))return this;{this.value&&i(n,this.value);const r=Oe(e),s=this.children.get(r);return s?s.foreachOnPath_(it(e),St(n,r),i):new _t(null)}}foreach(e){this.foreach_(Be(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(St(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Qn{constructor(e){this.writeTree_=e}static empty(){return new Qn(new _t(null))}}function da(t,e,n){if(Le(e))return new Qn(new _t(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=On(r,e);return s=s.updateChild(o,n),new Qn(t.writeTree_.set(r,s))}else{const r=new _t(n),s=t.writeTree_.setTree(e,r);return new Qn(s)}}}function Cb(t,e,n){let i=t;return fn(n,(r,s)=>{i=da(i,St(e,r),s)}),i}function Sb(t,e){if(Le(e))return Qn.empty();{const n=t.writeTree_.setTree(e,new _t(null));return new Qn(n)}}function sf(t,e){return Pr(t,e)!=null}function Pr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(On(n.path,e)):null}function Ab(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(wt,(i,r)=>{e.push(new Me(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new Me(i,r.value))}),e}function qi(t,e){if(Le(e))return t;{const n=Pr(t,e);return n!=null?new Qn(new _t(n)):new Qn(t.writeTree_.subtree(e))}}function of(t){return t.writeTree_.isEmpty()}function Ns(t,e){return kb(Be(),t.writeTree_,e)}function kb(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(W(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=kb(St(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(St(t,".priority"),i)),n}}/**
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
 */function af(t,e){return Nb(e,t)}function zN(t,e,n,i,r){W(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=da(t.visibleWrites,e,n)),t.lastWriteId=i}function KN(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function XN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);W(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&QN(a,i.path)?r=!1:qn(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return YN(t),!0;if(i.snap)t.visibleWrites=Sb(t.visibleWrites,i.path);else{const a=i.children;fn(a,l=>{t.visibleWrites=Sb(t.visibleWrites,St(i.path,l))})}return!0}else return!1}function QN(t,e){if(t.snap)return qn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qn(St(t.path,n),e))return!0;return!1}function YN(t){t.visibleWrites=Rb(t.allWrites,JN,Be()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function JN(t){return t.visible}function Rb(t,e,n){let i=Qn.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)qn(n,o)?(a=On(n,o),i=da(i,a,s.snap)):qn(o,n)&&(a=On(o,n),i=da(i,Be(),s.snap.getChild(a)));else if(s.children){if(qn(n,o))a=On(n,o),i=Cb(i,a,s.children);else if(qn(o,n))if(a=On(o,n),Le(a))i=Cb(i,Be(),s.children);else{const l=Xr(s.children,Oe(a));if(l){const c=l.getChild(it(a));i=da(i,Be(),c)}}}else throw Kr("WriteRecord should have .snap or .children")}}return i}function Ob(t,e,n,i,r){if(!i&&!r){const s=Pr(t.visibleWrites,e);if(s!=null)return s;{const o=qi(t.visibleWrites,e);if(of(o))return n;if(n==null&&!sf(o,Be()))return null;{const a=n||ce.EMPTY_NODE;return Ns(o,a)}}}else{const s=qi(t.visibleWrites,e);if(!r&&of(s))return n;if(!r&&n==null&&!sf(s,Be()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(qn(c.path,e)||qn(e,c.path))},a=Rb(t.allWrites,o,e),l=n||ce.EMPTY_NODE;return Ns(a,l)}}}function ZN(t,e,n){let i=ce.EMPTY_NODE;const r=Pr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(wt,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=qi(t.visibleWrites,e);return n.forEachChild(wt,(o,a)=>{const l=Ns(qi(s,new Ze(o)),a);i=i.updateImmediateChild(o,l)}),Ab(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=qi(t.visibleWrites,e);return Ab(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function $N(t,e,n,i,r){W(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=St(e,n);if(sf(t.visibleWrites,s))return null;{const o=qi(t.visibleWrites,s);return of(o)?r.getChild(n):Ns(o,r.getChild(n))}}function eP(t,e,n,i){const r=St(e,n),s=Pr(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=qi(t.visibleWrites,r);return Ns(o,i.getNode().getImmediateChild(n))}else return null}function tP(t,e){return Pr(t.visibleWrites,e)}function nP(t,e,n,i,r,s,o){let a;const l=qi(t.visibleWrites,e),c=Pr(l,Be());if(c!=null)a=c;else if(n!=null)a=Ns(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<r;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function iP(){return{visibleWrites:Qn.empty(),allWrites:[],lastWriteId:-1}}function bc(t,e,n,i){return Ob(t.writeTree,t.treePath,e,n,i)}function lf(t,e){return ZN(t.writeTree,t.treePath,e)}function Lb(t,e,n,i){return $N(t.writeTree,t.treePath,e,n,i)}function Ic(t,e){return tP(t.writeTree,St(t.treePath,e))}function rP(t,e,n,i,r,s){return nP(t.writeTree,t.treePath,e,n,i,r,s)}function cf(t,e,n){return eP(t.writeTree,t.treePath,e,n)}function Mb(t,e){return Nb(St(t.treePath,e),t.writeTree)}function Nb(t,e){return{treePath:t,writeTree:e}}/**
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
 */class sP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;W(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),W(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,oa(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,sa(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,Ls(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,oa(i,e.snapshotNode,r.oldSnap));else throw Kr("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class oP{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Pb=new oP;class uf{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Mr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cf(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Nr(this.viewCache_),s=rP(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
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
 */function aP(t){return{filter:t}}function lP(t,e){W(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),W(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function cP(t,e,n,i,r){const s=new sP;let o,a;if(n.type===Xn.OVERWRITE){const c=n;c.source.fromUser?o=hf(t,e,c.path,c.snap,i,r,s):(W(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Le(c.path),o=Ec(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===Xn.MERGE){const c=n;c.source.fromUser?o=hP(t,e,c.path,c.children,i,r,s):(W(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=df(t,e,c.path,c.children,i,r,a,s))}else if(n.type===Xn.ACK_USER_WRITE){const c=n;c.revert?o=pP(t,e,c.path,i,r,s):o=dP(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===Xn.LISTEN_COMPLETE)o=fP(t,e,n.path,i,s);else throw Kr("Unknown operation type: "+n.type);const l=s.getChanges();return uP(e,o,l),{viewCache:o,changes:l}}function uP(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=nf(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(yb(nf(e)))}}function Db(t,e,n,i,r,s){const o=e.eventCache;if(Ic(i,n)!=null)return e;{let a,l;if(Le(n))if(W(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Nr(e),u=c instanceof ce?c:ce.EMPTY_NODE,h=lf(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=bc(i,Nr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=Oe(n);if(c===".priority"){W(Hi(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Lb(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=it(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Lb(i,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=cf(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,r,s):a=o.getNode()}}return ha(e,a,o.isFullyInitialized()||Le(n),t.filter.filtersNodes())}}function Ec(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Le(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=Oe(n);if(!l.isCompleteForPath(n)&&Hi(n)>1)return e;const p=it(n),m=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),m):c=u.updateChild(l.getNode(),f,m,p,Pb,null)}const h=Tb(e,c,l.isFullyInitialized()||Le(n),u.filtersNodes()),d=new uf(r,h,s);return Db(t,h,n,r,d,a)}function hf(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new uf(r,e,s);if(Le(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ha(e,c,!0,t.filter.filtersNodes());else{const h=Oe(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=ha(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=it(n),f=a.getNode().getImmediateChild(h);let p;if(Le(d))p=i;else{const g=u.getCompleteChild(h);g!=null?Wd(d)===".priority"&&g.getChild(cb(d)).isEmpty()?p=g:p=g.updateChild(d,i):p=ce.EMPTY_NODE}if(f.equals(p))l=e;else{const g=t.filter.updateChild(a.getNode(),h,p,d,u,o);l=ha(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Fb(t,e){return t.eventCache.isCompleteForChild(e)}function hP(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=St(n,l);Fb(e,Oe(u))&&(a=hf(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=St(n,l);Fb(e,Oe(u))||(a=hf(t,a,u,c,r,s,o))}),a}function xb(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function df(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Le(n)?c=i:c=new _t(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=xb(t,f,d);l=Ec(t,l,new Ze(h),p,r,s,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===void 0;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),g=xb(t,p,d);l=Ec(t,l,new Ze(h),g,r,s,o,a)}}),l}function dP(t,e,n,i,r,s,o){if(Ic(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(Le(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ec(t,e,n,l.getNode().getChild(n),r,s,a,o);if(Le(n)){let c=new _t(null);return l.getNode().forEachChild(Rs,(u,h)=>{c=c.set(new Ze(u),h)}),df(t,e,n,c,r,s,a,o)}else return e}else{let c=new _t(null);return i.foreach((u,h)=>{const d=St(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),df(t,e,n,c,r,s,a,o)}}function fP(t,e,n,i,r){const s=e.serverCache,o=Tb(e,s.getNode(),s.isFullyInitialized()||Le(n),s.isFiltered());return Db(t,o,n,i,Pb,r)}function pP(t,e,n,i,r,s){let o;if(Ic(i,n)!=null)return e;{const a=new uf(i,e,r),l=e.eventCache.getNode();let c;if(Le(n)||Oe(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=bc(i,Nr(e));else{const h=e.serverCache.getNode();W(h instanceof ce,"serverChildren would be complete if leaf node"),u=lf(i,h)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=Oe(n);let h=cf(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,it(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ce.EMPTY_NODE,it(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=bc(i,Nr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Ic(i,Be())!=null,ha(e,c,o,t.filter.filtersNodes())}}/**
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
 */class mP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new Yd(i.getIndex()),s=PN(i);this.processor_=aP(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(ce.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(ce.EMPTY_NODE,a.getNode(),null),u=new Mr(l,o.isFullyInitialized(),r.filtersNodes()),h=new Mr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=yc(h,u),this.eventGenerator_=new BN(this.query_)}get query(){return this.query_}}function gP(t){return t.viewCache_.serverCache.getNode()}function _P(t,e){const n=Nr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Le(e)&&!n.getImmediateChild(Oe(e)).isEmpty())?n.getChild(e):null}function Ub(t){return t.eventRegistrations_.length===0}function vP(t,e){t.eventRegistrations_.push(e)}function jb(t,e,n){const i=[];if(n){W(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function Vb(t,e,n,i){e.type===Xn.MERGE&&e.source.queryId!==null&&(W(Nr(t.viewCache_),"We should always have a full cache before handling merges"),W(nf(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=cP(t.processor_,r,e,n,i);return lP(t.processor_,s.viewCache),W(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Bb(t,s.changes,s.viewCache.eventCache.getNode(),null)}function yP(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(wt,(s,o)=>{i.push(Ls(s,o))}),n.isFullyInitialized()&&i.push(yb(n.getNode())),Bb(t,i,n.getNode(),e)}function Bb(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return HN(t.eventGenerator_,e,n,r)}/**
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
 */let wc;class bP{constructor(){this.views=new Map}}function IP(t){W(!wc,"__referenceConstructor has already been defined"),wc=t}function EP(){return W(wc,"Reference.ts has not been loaded"),wc}function wP(t){return t.views.size===0}function ff(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return W(s!=null,"SyncTree gave us an op for an invalid query."),Vb(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(Vb(o,e,n,i));return s}}function TP(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=bc(n,r?i:null),l=!1;a?l=!0:i instanceof ce?(a=lf(n,i),l=!1):(a=ce.EMPTY_NODE,l=!1);const c=yc(new Mr(a,l,!1),new Mr(i,r,!1));return new mP(e,c)}return o}function CP(t,e,n,i,r,s){const o=TP(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),vP(o,n),yP(o,n)}function SP(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=Wi(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(jb(c,n,i)),Ub(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(jb(l,n,i)),Ub(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Wi(t)&&s.push(new(EP())(e._repo,e._path)),{removed:s,events:o}}function Hb(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ps(t,e){let n=null;for(const i of t.views.values())n=n||_P(i,e);return n}function qb(t,e){if(e._queryParams.loadsAllData())return Tc(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Wb(t,e){return qb(t,e)!=null}function Wi(t){return Tc(t)!=null}function Tc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Cc;function AP(t){W(!Cc,"__referenceConstructor has already been defined"),Cc=t}function kP(){return W(Cc,"Reference.ts has not been loaded"),Cc}let RP=1;class Gb{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _t(null),this.pendingWriteTree_=iP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function OP(t,e,n,i,r){return zN(t.pendingWriteTree_,e,n,i,r),r?fa(t,new Lr(wb(),e,n)):[]}function Ds(t,e,n=!1){const i=KN(t.pendingWriteTree_,e);if(XN(t.pendingWriteTree_,e)){let s=new _t(null);return i.snap!=null?s=s.set(Be(),!0):fn(i.children,o=>{s=s.set(new Ze(o),!0)}),fa(t,new vc(i.path,s,n))}else return[]}function Sc(t,e,n){return fa(t,new Lr(ef(),e,n))}function LP(t,e,n){const i=_t.fromObject(n);return fa(t,new ca(ef(),e,i))}function MP(t,e){return fa(t,new la(ef(),e))}function NP(t,e,n){const i=mf(t,n);if(i){const r=gf(i),s=r.path,o=r.queryId,a=On(s,e),l=new la(tf(o),a);return _f(t,s,l)}else return[]}function pf(t,e,n,i){const r=e._path,s=t.syncPointTree_.get(r);let o=[];if(s&&(e._queryIdentifier==="default"||Wb(s,e))){const a=SP(s,e,n,i);wP(s)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const l=a.removed;o=a.events;const c=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(h,d)=>Wi(d));if(c&&!u){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const d=FP(h);for(let f=0;f<d.length;++f){const p=d[f],g=p.query,m=Yb(t,p);t.listenProvider_.startListening(pa(g),Ac(t,g),m.hashFn,m.onComplete)}}}if(!u&&l.length>0&&!i)if(c){const h=null;t.listenProvider_.stopListening(pa(e),h)}else l.forEach(h=>{const d=t.queryToTagMap.get(kc(h));t.listenProvider_.stopListening(pa(h),d)});xP(t,l)}return o}function PP(t,e,n,i){const r=mf(t,i);if(r!=null){const s=gf(r),o=s.path,a=s.queryId,l=On(o,e),c=new Lr(tf(a),l,n);return _f(t,o,c)}else return[]}function DP(t,e,n,i){const r=mf(t,i);if(r){const s=gf(r),o=s.path,a=s.queryId,l=On(o,e),c=_t.fromObject(n),u=new ca(tf(a),l,c);return _f(t,o,u)}else return[]}function zb(t,e,n){const i=e._path;let r=null,s=!1;t.syncPointTree_.foreachOnPath(i,(h,d)=>{const f=On(h,i);r=r||Ps(d,f),s=s||Wi(d)});let o=t.syncPointTree_.get(i);o?(s=s||Wi(o),r=r||Ps(o,Be())):(o=new bP,t.syncPointTree_=t.syncPointTree_.set(i,o));let a;r!=null?a=!0:(a=!1,r=ce.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((d,f)=>{const p=Ps(f,Be());p&&(r=r.updateImmediateChild(d,p))}));const l=Wb(o,e);if(!l&&!e._queryParams.loadsAllData()){const h=kc(e);W(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const d=UP();t.queryToTagMap.set(h,d),t.tagToQueryMap.set(d,h)}const c=af(t.pendingWriteTree_,i);let u=CP(o,e,n,c,r,a);if(!l&&!s){const h=qb(o,e);u=u.concat(jP(t,e,h))}return u}function Kb(t,e,n){const i=!0,r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=On(o,e),c=Ps(a,l);if(c)return c});return Ob(r,e,s,n,i)}function fa(t,e){return Xb(e,t.syncPointTree_,null,af(t.pendingWriteTree_,Be()))}function Xb(t,e,n,i){if(Le(t.path))return Qb(t,e,n,i);{const r=e.get(Be());n==null&&r!=null&&(n=Ps(r,Be()));let s=[];const o=Oe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Mb(i,o);s=s.concat(Xb(a,l,c,u))}return r&&(s=s.concat(ff(r,t,i,n))),s}}function Qb(t,e,n,i){const r=e.get(Be());n==null&&r!=null&&(n=Ps(r,Be()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Mb(i,o),u=t.operationForChild(o);u&&(s=s.concat(Qb(u,a,l,c)))}),r&&(s=s.concat(ff(r,t,i,n))),s}function Yb(t,e){const n=e.query,i=Ac(t,n);return{hashFn:()=>(gP(e)||ce.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?NP(t,n._path,i):MP(t,n._path);{const s=RM(r,n);return pf(t,n,null,s)}}}}function Ac(t,e){const n=kc(e);return t.queryToTagMap.get(n)}function kc(t){return t._path.toString()+"$"+t._queryIdentifier}function mf(t,e){return t.tagToQueryMap.get(e)}function gf(t){const e=t.indexOf("$");return W(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ze(t.substr(0,e))}}function _f(t,e,n){const i=t.syncPointTree_.get(e);W(i,"Missing sync point for query tag that we're tracking");const r=af(t.pendingWriteTree_,e);return ff(i,n,r,null)}function FP(t){return t.fold((e,n,i)=>{if(n&&Wi(n))return[Tc(n)];{let r=[];return n&&(r=Hb(n)),fn(i,(s,o)=>{r=r.concat(o)}),r}})}function pa(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(kP())(t._repo,t._path):t}function xP(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=kc(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function UP(){return RP++}function jP(t,e,n){const i=e._path,r=Ac(t,e),s=Yb(t,n),o=t.listenProvider_.startListening(pa(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)W(!Wi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!Le(c)&&u&&Wi(u))return[Tc(u).query];{let d=[];return u&&(d=d.concat(Hb(u).map(f=>f.query))),fn(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(pa(u),Ac(t,u))}}return o}/**
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
 */class vf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vf(n)}node(){return this.node_}}class yf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=St(this.path_,e);return new yf(this.syncTree_,n)}node(){return Kb(this.syncTree_,this.path_)}}const VP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Jb=function(t,e,n){if(!t||typeof t!="object")return t;if(W(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return BP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return HP(t[".sv"],e);W(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},BP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:W(!1,"Unexpected server value: "+t)}},HP=function(t,e,n){t.hasOwnProperty("increment")||W(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&W(!1,"Unexpected increment value: "+i);const r=e.node();if(W(r!==null&&typeof r!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},qP=function(t,e,n,i){return bf(e,new yf(n,t),i)},WP=function(t,e,n){return bf(t,new vf(e),n)};function bf(t,e,n){const i=t.getPriority().val(),r=Jb(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Jb(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new zt(a,jt(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new zt(r))),o.forEachChild(wt,(a,l)=>{const c=bf(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class If{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Ef(t,e){let n=e instanceof Ze?e:new Ze(e),i=t,r=Oe(n);for(;r!==null;){const s=Xr(i.node.children,r)||{children:{},childCount:0};i=new If(r,i,s),n=it(n),r=Oe(n)}return i}function Fs(t){return t.node.value}function Zb(t,e){t.node.value=e,wf(t)}function $b(t){return t.node.childCount>0}function GP(t){return Fs(t)===void 0&&!$b(t)}function Rc(t,e){fn(t.node.children,(n,i)=>{e(new If(n,t,i))})}function eI(t,e,n,i){n&&!i&&e(t),Rc(t,r=>{eI(r,e,!0,i)}),n&&i&&e(t)}function zP(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ma(t){return new Ze(t.parent===null?t.name:ma(t.parent)+"/"+t.name)}function wf(t){t.parent!==null&&KP(t.parent,t.name,t)}function KP(t,e,n){const i=GP(n),r=Jn(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,wf(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,wf(t))}/**
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
 */const XP=/[\[\].#$\/\u0000-\u001F\u007F]/,QP=/[\[\].#$\u0000-\u001F\u007F]/,Tf=10*1024*1024,Cf=function(t){return typeof t=="string"&&t.length!==0&&!XP.test(t)},tI=function(t){return typeof t=="string"&&t.length!==0&&!QP.test(t)},YP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),tI(t)},nI=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!cc(t)||t&&typeof t=="object"&&Jn(t,".sv")},iI=function(t,e,n,i){i&&e===void 0||Oc(Qr(t,"value"),e,n)},Oc=function(t,e,n){const i=n instanceof Ze?new hN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Or(i));if(typeof e=="function")throw new Error(t+"contains a function "+Or(i)+" with contents = "+e.toString());if(cc(e))throw new Error(t+"contains "+e.toString()+" "+Or(i));if(typeof e=="string"&&e.length>Tf/3&&qa(e)>Tf)throw new Error(t+"contains a string greater than "+Tf+" utf8 bytes "+Or(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(fn(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Cf(o)))throw new Error(t+" contains an invalid key ("+o+") "+Or(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dN(i,o),Oc(t,a,i),fN(i)}),r&&s)throw new Error(t+' contains ".value" child '+Or(i)+" in addition to actual children.")}},JP=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const s=ta(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Cf(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(uN);let r=null;for(n=0;n<e.length;n++){if(i=e[n],r!==null&&qn(r,i))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},ZP=function(t,e,n,i){if(i&&e===void 0)return;const r=Qr(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];fn(e,(o,a)=>{const l=new Ze(o);if(Oc(r,a,St(n,l)),Wd(l)===".priority"&&!nI(a))throw new Error(r+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),JP(r,s)},$P=function(t,e,n){if(!(n&&e===void 0)){if(cc(e))throw new Error(Qr(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!nI(e))throw new Error(Qr(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},rI=function(t,e,n,i){if(!(i&&n===void 0)&&!tI(n))throw new Error(Qr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},eD=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rI(t,e,n,i)},Lc=function(t,e){if(Oe(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},tD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Cf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!YP(n))throw new Error(Qr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class nD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sI(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!Gd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function oI(t,e,n){sI(t,n),aI(t,i=>Gd(i,e))}function Dr(t,e,n){sI(t,n),aI(t,i=>qn(i,e)||qn(e,i))}function aI(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(iD(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function iD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Sr&&sn("event: "+n.toString()),As(i)}}}/**
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
 */const rD="repo_interrupt",sD=25;class oD{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_c(),this.transactionQueueTree_=new If,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aD(t,e,n){if(t.stats_=Vd(t.repoInfo_),t.forceRestClient_||NM())t.server_=new gc(t.repoInfo_,(i,r,s,o)=>{cI(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>uI(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Bt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new pi(t.repoInfo_,e,(i,r,s,o)=>{cI(t,i,r,s,o)},i=>{uI(t,i)},i=>{cD(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=VM(t.repoInfo_,()=>new VN(t.stats_,t.server_)),t.infoData_=new DN,t.infoSyncTree_=new Gb({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Sc(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Sf(t,"connected",!1),t.serverSyncTree_=new Gb({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);Dr(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function lD(t){const n=t.infoData_.getNode(new Ze(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function lI(t){return VP({timestamp:lD(t)})}function cI(t,e,n,i,r){t.dataUpdateCount++;const s=new Ze(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=Ba(n,c=>jt(c));o=DP(t.serverSyncTree_,s,l,r)}else{const l=jt(n);o=PP(t.serverSyncTree_,s,l,r)}else if(i){const l=Ba(n,c=>jt(c));o=LP(t.serverSyncTree_,s,l)}else{const l=jt(n);o=Sc(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=kf(t,s)),Dr(t.eventQueue_,a,o)}function uI(t,e){Sf(t,"connected",e),e===!1&&hD(t)}function cD(t,e){fn(e,(n,i)=>{Sf(t,n,i)})}function Sf(t,e,n){const i=new Ze("/.info/"+e),r=jt(n);t.infoData_.updateSnapshot(i,r);const s=Sc(t.infoSyncTree_,i,r);Dr(t.eventQueue_,i,s)}function uD(t){return t.nextWriteId_++}function hD(t){fI(t,"onDisconnectEvents");const e=lI(t),n=_c();$d(t.onDisconnect_,Be(),(r,s)=>{const o=qP(r,s,t.serverSyncTree_,e);Ms(n,r,o)});let i=[];$d(n,Be(),(r,s)=>{i=i.concat(Sc(t.serverSyncTree_,r,s));const o=yD(t,r);kf(t,o)}),t.onDisconnect_=_c(),Dr(t.eventQueue_,Be(),i)}function dD(t,e,n){t.server_.onDisconnectCancel(e.toString(),(i,r)=>{i==="ok"&&Zd(t.onDisconnect_,e),ga(t,n,i,r)})}function hI(t,e,n,i){const r=jt(n);t.server_.onDisconnectPut(e.toString(),r.val(!0),(s,o)=>{s==="ok"&&Ms(t.onDisconnect_,e,r),ga(t,i,s,o)})}function fD(t,e,n,i,r){const s=jt(n,i);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Ms(t.onDisconnect_,e,s),ga(t,r,o,a)})}function pD(t,e,n,i){if(Va(n)){sn("onDisconnect().update() called with empty data.  Don't do anything."),ga(t,i,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(r,s)=>{r==="ok"&&fn(n,(o,a)=>{const l=jt(a);Ms(t.onDisconnect_,St(e,o),l)}),ga(t,i,r,s)})}function mD(t,e,n){let i;Oe(e._path)===".info"?i=zb(t.infoSyncTree_,e,n):i=zb(t.serverSyncTree_,e,n),oI(t.eventQueue_,e._path,i)}function dI(t,e,n){let i;Oe(e._path)===".info"?i=pf(t.infoSyncTree_,e,n):i=pf(t.serverSyncTree_,e,n),oI(t.eventQueue_,e._path,i)}function gD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(rD)}function fI(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),sn(n,...e)}function ga(t,e,n,i){e&&As(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function pI(t,e,n){return Kb(t.serverSyncTree_,e,n)||ce.EMPTY_NODE}function Af(t,e=t.transactionQueueTree_){if(e||Mc(t,e),Fs(e)){const n=gI(t,e);W(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&_D(t,ma(e),n)}else $b(e)&&Rc(e,n=>{Af(t,n)})}function _D(t,e,n){const i=n.map(c=>c.currentWriteId),r=pI(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];W(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=On(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{fI(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Ds(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Mc(t,Ef(t.transactionQueueTree_,e)),Af(t,t.transactionQueueTree_),Dr(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)As(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Un("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}kf(t,e)}},o)}function kf(t,e){const n=mI(t,e),i=ma(n),r=gI(t,n);return vD(t,r,i),i}function vD(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=On(n,l.path);let u=!1,h;if(W(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,r=r.concat(Ds(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=sD)u=!0,h="maxretry",r=r.concat(Ds(t.serverSyncTree_,l.currentWriteId,!0));else{const d=pI(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Oc("transaction failed: Data returned ",f,l.path);let p=jt(f);typeof f=="object"&&f!=null&&Jn(f,".priority")||(p=p.updatePriority(d.getPriority()));const m=l.currentWriteId,v=lI(t),E=WP(p,d,v);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=E,l.currentWriteId=uD(t),o.splice(o.indexOf(m),1),r=r.concat(OP(t.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),r=r.concat(Ds(t.serverSyncTree_,m,!0))}else u=!0,h="nodata",r=r.concat(Ds(t.serverSyncTree_,l.currentWriteId,!0))}Dr(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Mc(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)As(i[a]);Af(t,t.transactionQueueTree_)}function mI(t,e){let n,i=t.transactionQueueTree_;for(n=Oe(e);n!==null&&Fs(i)===void 0;)i=Ef(i,n),e=it(e),n=Oe(e);return i}function gI(t,e){const n=[];return _I(t,e,n),n.sort((i,r)=>i.order-r.order),n}function _I(t,e,n){const i=Fs(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Rc(e,r=>{_I(t,r,n)})}function Mc(t,e){const n=Fs(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,Zb(e,n.length>0?n:void 0)}Rc(e,i=>{Mc(t,i)})}function yD(t,e){const n=ma(mI(t,e)),i=Ef(t.transactionQueueTree_,e);return zP(i,r=>{Rf(t,r)}),Rf(t,i),eI(i,r=>{Rf(t,r)}),n}function Rf(t,e){const n=Fs(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(W(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(W(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Ds(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Zb(e,void 0):n.length=s+1,Dr(t.eventQueue_,ma(e),r);for(let o=0;o<i.length;o++)As(i[o])}}/**
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
 */function bD(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function ID(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Un(`Invalid query segment '${n}' in query '${t}'`)}return e}const vI=function(t,e){const n=ED(t),i=n.namespace;n.domain==="firebase.com"&&Ar(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Ar("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||TM();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new xM(n.host,n.secure,i,e,r,"",i!==n.subdomain),path:new Ze(n.pathString)}},ED=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=bD(t.substring(u,h)));const d=ID(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=i}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class yI{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Bt(this.snapshot.exportVal())}}class bI{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class wD{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return W(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class TD{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new wi;return dD(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Lc("OnDisconnect.remove",this._path);const e=new wi;return hI(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Lc("OnDisconnect.set",this._path),iI("OnDisconnect.set",e,this._path,!1);const n=new wi;return hI(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Lc("OnDisconnect.setWithPriority",this._path),iI("OnDisconnect.setWithPriority",e,this._path,!1),$P("OnDisconnect.setWithPriority",n,!1);const i=new wi;return fD(this._repo,this._path,e,n,i.wrapCallback(()=>{})),i.promise}update(e){Lc("OnDisconnect.update",this._path),ZP("OnDisconnect.update",e,this._path,!1);const n=new wi;return pD(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Of{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return Le(this._path)?null:Wd(this._path)}get ref(){return new gi(this._repo,this._path)}get _queryIdentifier(){const e=Ib(this._queryParams),n=Pd(e);return n==="{}"?"default":n}get _queryObject(){return Ib(this._queryParams)}isEqual(e){if(e=at(e),!(e instanceof Of))return!1;const n=this._repo===e._repo,i=Gd(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+cN(this._path)}}class gi extends Of{constructor(e,n){super(e,n,new Jd,!1)}get parent(){const e=cb(this._path);return e===null?null:new gi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _a{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ze(e),i=Nc(this.ref,e);return new _a(this._node.getChild(n),i,wt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new _a(r,Nc(this.ref,i),wt)))}hasChild(e){const n=new Ze(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function gV(t,e){return t=at(t),t._checkNotDeleted("ref"),e!==void 0?Nc(t._root,e):t._root}function Nc(t,e){return t=at(t),Oe(t._path)===null?eD("child","path",e,!1):rI("child","path",e,!1),new gi(t._repo,St(t._path,e))}function _V(t){return t=at(t),new TD(t._repo,t._path)}class Lf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new yI("value",this,new _a(e.snapshotNode,new gi(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new bI(this,e,n):null}matches(e){return e instanceof Lf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Mf{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new bI(this,e,n):null}createEvent(e,n){W(e.childName!=null,"Child events should have a childName.");const i=Nc(new gi(n._repo,n._path),e.childName),r=n._queryParams.getIndex();return new yI(e.type,this,new _a(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Mf?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function CD(t,e,n,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){const l=n,c=(u,h)=>{dI(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new wD(n,s||void 0),a=e==="value"?new Lf(o):new Mf(e,o);return mD(t._repo,t,a),()=>dI(t._repo,t,a)}function vV(t,e,n,i){return CD(t,"value",e,n,i)}IP(gi);AP(gi);/**
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
 */const SD="FIREBASE_DATABASE_EMULATOR_HOST",Nf={};let AD=!1;function kD(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Ar("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),sn("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=vI(s,r),a=o.repoInfo,l,c;typeof process!="undefined"&&(c=process.env[SD]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=vI(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new Dd(Dd.OWNER):new DM(t.name,t.options,e);tD("Invalid Firebase Database URL",o),Le(o.path)||Ar("Database URL must point to the root of a Firebase Database (not including a child path).");const h=OD(a,t,u,new PM(t.name,n));return new LD(h,t)}function RD(t,e){const n=Nf[e];(!n||n[t.key]!==t)&&Ar(`Database ${e}(${t.repoInfo_}) has already been deleted.`),gD(t),delete n[t.key]}function OD(t,e,n,i){let r=Nf[e.name];r||(r={},Nf[e.name]=r);let s=r[t.toURLString()];return s&&Ar("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new oD(t,AD,n,i),r[t.toURLString()]=s,s}class LD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(aD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gi(this._repo,Be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(RD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ar("Cannot call "+e+" on a deleted database.")}}function yV(t=Ka(),e){return eo(t,"database").getImmediate({identifier:e})}/**
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
 */function MD(t){yM(rr),ir(new Ti("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return kD(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),Bn(Ry,Oy,t),Bn(Ry,Oy,"esm2017")}pi.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};pi.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};MD();var va={exports:{}},xs=typeof Reflect=="object"?Reflect:null,II=xs&&typeof xs.apply=="function"?xs.apply:function(e,n,i){return Function.prototype.apply.call(e,n,i)},Pc;xs&&typeof xs.ownKeys=="function"?Pc=xs.ownKeys:Object.getOwnPropertySymbols?Pc=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Pc=function(e){return Object.getOwnPropertyNames(e)};function ND(t){console&&console.warn&&console.warn(t)}var EI=Number.isNaN||function(e){return e!==e};function $e(){$e.init.call(this)}va.exports=$e;va.exports.once=xD;$e.EventEmitter=$e;$e.prototype._events=void 0;$e.prototype._eventsCount=0;$e.prototype._maxListeners=void 0;var wI=10;function Dc(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty($e,"defaultMaxListeners",{enumerable:!0,get:function(){return wI},set:function(t){if(typeof t!="number"||t<0||EI(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");wI=t}});$e.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};$e.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||EI(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function TI(t){return t._maxListeners===void 0?$e.defaultMaxListeners:t._maxListeners}$e.prototype.getMaxListeners=function(){return TI(this)};$e.prototype.emit=function(e){for(var n=[],i=1;i<arguments.length;i++)n.push(arguments[i]);var r=e==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var o;if(n.length>0&&(o=n[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var l=s[e];if(l===void 0)return!1;if(typeof l=="function")II(l,this,n);else for(var c=l.length,u=RI(l,c),i=0;i<c;++i)II(u[i],this,n);return!0};function CI(t,e,n,i){var r,s,o;if(Dc(n),s=t._events,s===void 0?(s=t._events=Object.create(null),t._eventsCount=0):(s.newListener!==void 0&&(t.emit("newListener",e,n.listener?n.listener:n),s=t._events),o=s[e]),o===void 0)o=s[e]=n,++t._eventsCount;else if(typeof o=="function"?o=s[e]=i?[n,o]:[o,n]:i?o.unshift(n):o.push(n),r=TI(t),r>0&&o.length>r&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=t,a.type=e,a.count=o.length,ND(a)}return t}$e.prototype.addListener=function(e,n){return CI(this,e,n,!1)};$e.prototype.on=$e.prototype.addListener;$e.prototype.prependListener=function(e,n){return CI(this,e,n,!0)};function PD(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function SI(t,e,n){var i={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},r=PD.bind(i);return r.listener=n,i.wrapFn=r,r}$e.prototype.once=function(e,n){return Dc(n),this.on(e,SI(this,e,n)),this};$e.prototype.prependOnceListener=function(e,n){return Dc(n),this.prependListener(e,SI(this,e,n)),this};$e.prototype.removeListener=function(e,n){var i,r,s,o,a;if(Dc(n),r=this._events,r===void 0)return this;if(i=r[e],i===void 0)return this;if(i===n||i.listener===n)--this._eventsCount==0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,i.listener||n));else if(typeof i!="function"){for(s=-1,o=i.length-1;o>=0;o--)if(i[o]===n||i[o].listener===n){a=i[o].listener,s=o;break}if(s<0)return this;s===0?i.shift():DD(i,s),i.length===1&&(r[e]=i[0]),r.removeListener!==void 0&&this.emit("removeListener",e,a||n)}return this};$e.prototype.off=$e.prototype.removeListener;$e.prototype.removeAllListeners=function(e){var n,i,r;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[e]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete i[e]),this;if(arguments.length===0){var s=Object.keys(i),o;for(r=0;r<s.length;++r)o=s[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=i[e],typeof n=="function")this.removeListener(e,n);else if(n!==void 0)for(r=n.length-1;r>=0;r--)this.removeListener(e,n[r]);return this};function AI(t,e,n){var i=t._events;if(i===void 0)return[];var r=i[e];return r===void 0?[]:typeof r=="function"?n?[r.listener||r]:[r]:n?FD(r):RI(r,r.length)}$e.prototype.listeners=function(e){return AI(this,e,!0)};$e.prototype.rawListeners=function(e){return AI(this,e,!1)};$e.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):kI.call(t,e)};$e.prototype.listenerCount=kI;function kI(t){var e=this._events;if(e!==void 0){var n=e[t];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}$e.prototype.eventNames=function(){return this._eventsCount>0?Pc(this._events):[]};function RI(t,e){for(var n=new Array(e),i=0;i<e;++i)n[i]=t[i];return n}function DD(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function FD(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function xD(t,e){return new Promise(function(n,i){function r(o){t.removeListener(e,s),i(o)}function s(){typeof t.removeListener=="function"&&t.removeListener("error",r),n([].slice.call(arguments))}OI(t,e,s,{once:!0}),e!=="error"&&UD(t,r,{once:!0})})}function UD(t,e,n){typeof t.on=="function"&&OI(t,"error",e,n)}function OI(t,e,n,i){if(typeof t.on=="function")i.once?t.once(e,n):t.on(e,n);else if(typeof t.addEventListener=="function")t.addEventListener(e,function r(s){i.once&&t.removeEventListener(e,r),n(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}var Fc=va.exports,jD=function(t){if(Array.isArray(t))return t},VD=function(t,e){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(t)){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(l){r=!0,s=l}finally{try{i||a.return==null||a.return()}finally{if(r)throw s}}return n}},LI=function(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i},BD=function(t,e){if(t){if(typeof t=="string")return LI(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?LI(t,e):void 0}},HD=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},qD=function(t,e){return jD(t)||VD(t,e)||BD(t,e)||HD()},WD=function(t,e){if(t==null)return{};var n,i,r={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(r[n]=t[n]);return r},GD=function(t,e){if(t==null)return{};var n,i,r=WD(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r},xc=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Gi(t,e){return t(e={exports:{}},e.exports),e.exports}var Z=Gi(function(t){var e=function(n){var i,r=Object.prototype,s=r.hasOwnProperty,o=typeof Symbol=="function"?Symbol:{},a=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(S,A,z){return Object.defineProperty(S,A,{value:z,enumerable:!0,configurable:!0,writable:!0}),S[A]}try{u({},"")}catch{u=function(A,z,H){return A[z]=H}}function h(S,A,z,H){var X=A&&A.prototype instanceof E?A:E,he=Object.create(X.prototype),q=new L(H||[]);return he._invoke=function(Ne,Ie,_e){var Re=f;return function(K,de){if(Re===g)throw new Error("Generator is already running");if(Re===m){if(K==="throw")throw de;return G()}for(_e.method=K,_e.arg=de;;){var ht=_e.delegate;if(ht){var on=O(ht,_e);if(on){if(on===v)continue;return on}}if(_e.method==="next")_e.sent=_e._sent=_e.arg;else if(_e.method==="throw"){if(Re===f)throw Re=m,_e.arg;_e.dispatchException(_e.arg)}else _e.method==="return"&&_e.abrupt("return",_e.arg);Re=g;var Pt=d(Ne,Ie,_e);if(Pt.type==="normal"){if(Re=_e.done?m:p,Pt.arg===v)continue;return{value:Pt.arg,done:_e.done}}Pt.type==="throw"&&(Re=m,_e.method="throw",_e.arg=Pt.arg)}}}(S,z,q),he}function d(S,A,z){try{return{type:"normal",arg:S.call(A,z)}}catch(H){return{type:"throw",arg:H}}}n.wrap=h;var f="suspendedStart",p="suspendedYield",g="executing",m="completed",v={};function E(){}function I(){}function y(){}var M={};M[a]=function(){return this};var k=Object.getPrototypeOf,_=k&&k(k(R([])));_&&_!==r&&s.call(_,a)&&(M=_);var T=y.prototype=E.prototype=Object.create(M);function V(S){["next","throw","return"].forEach(function(A){u(S,A,function(z){return this._invoke(A,z)})})}function b(S,A){var z;this._invoke=function(H,X){function he(){return new A(function(q,Ne){(function Ie(_e,Re,K,de){var ht=d(S[_e],S,Re);if(ht.type!=="throw"){var on=ht.arg,Pt=on.value;return Pt&&typeof Pt=="object"&&s.call(Pt,"__await")?A.resolve(Pt.__await).then(function(j){Ie("next",j,K,de)},function(j){Ie("throw",j,K,de)}):A.resolve(Pt).then(function(j){on.value=j,K(on)},function(j){return Ie("throw",j,K,de)})}de(ht.arg)})(H,X,q,Ne)})}return z=z?z.then(he,he):he()}}function O(S,A){var z=S.iterator[A.method];if(z===i){if(A.delegate=null,A.method==="throw"){if(S.iterator.return&&(A.method="return",A.arg=i,O(S,A),A.method==="throw"))return v;A.method="throw",A.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var H=d(z,S.iterator,A.arg);if(H.type==="throw")return A.method="throw",A.arg=H.arg,A.delegate=null,v;var X=H.arg;return X?X.done?(A[S.resultName]=X.value,A.next=S.nextLoc,A.method!=="return"&&(A.method="next",A.arg=i),A.delegate=null,v):X:(A.method="throw",A.arg=new TypeError("iterator result is not an object"),A.delegate=null,v)}function J(S){var A={tryLoc:S[0]};1 in S&&(A.catchLoc=S[1]),2 in S&&(A.finallyLoc=S[2],A.afterLoc=S[3]),this.tryEntries.push(A)}function w(S){var A=S.completion||{};A.type="normal",delete A.arg,S.completion=A}function L(S){this.tryEntries=[{tryLoc:"root"}],S.forEach(J,this),this.reset(!0)}function R(S){if(S){var A=S[a];if(A)return A.call(S);if(typeof S.next=="function")return S;if(!isNaN(S.length)){var z=-1,H=function X(){for(;++z<S.length;)if(s.call(S,z))return X.value=S[z],X.done=!1,X;return X.value=i,X.done=!0,X};return H.next=H}}return{next:G}}function G(){return{value:i,done:!0}}return I.prototype=T.constructor=y,y.constructor=I,I.displayName=u(y,c,"GeneratorFunction"),n.isGeneratorFunction=function(S){var A=typeof S=="function"&&S.constructor;return!!A&&(A===I||(A.displayName||A.name)==="GeneratorFunction")},n.mark=function(S){return Object.setPrototypeOf?Object.setPrototypeOf(S,y):(S.__proto__=y,u(S,c,"GeneratorFunction")),S.prototype=Object.create(T),S},n.awrap=function(S){return{__await:S}},V(b.prototype),b.prototype[l]=function(){return this},n.AsyncIterator=b,n.async=function(S,A,z,H,X){X===void 0&&(X=Promise);var he=new b(h(S,A,z,H),X);return n.isGeneratorFunction(A)?he:he.next().then(function(q){return q.done?q.value:he.next()})},V(T),u(T,c,"Generator"),T[a]=function(){return this},T.toString=function(){return"[object Generator]"},n.keys=function(S){var A=[];for(var z in S)A.push(z);return A.reverse(),function H(){for(;A.length;){var X=A.pop();if(X in S)return H.value=X,H.done=!1,H}return H.done=!0,H}},n.values=R,L.prototype={constructor:L,reset:function(S){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(w),!S)for(var A in this)A.charAt(0)==="t"&&s.call(this,A)&&!isNaN(+A.slice(1))&&(this[A]=i)},stop:function(){this.done=!0;var S=this.tryEntries[0].completion;if(S.type==="throw")throw S.arg;return this.rval},dispatchException:function(S){if(this.done)throw S;var A=this;function z(Ie,_e){return he.type="throw",he.arg=S,A.next=Ie,_e&&(A.method="next",A.arg=i),!!_e}for(var H=this.tryEntries.length-1;H>=0;--H){var X=this.tryEntries[H],he=X.completion;if(X.tryLoc==="root")return z("end");if(X.tryLoc<=this.prev){var q=s.call(X,"catchLoc"),Ne=s.call(X,"finallyLoc");if(q&&Ne){if(this.prev<X.catchLoc)return z(X.catchLoc,!0);if(this.prev<X.finallyLoc)return z(X.finallyLoc)}else if(q){if(this.prev<X.catchLoc)return z(X.catchLoc,!0)}else{if(!Ne)throw new Error("try statement without catch or finally");if(this.prev<X.finallyLoc)return z(X.finallyLoc)}}}},abrupt:function(S,A){for(var z=this.tryEntries.length-1;z>=0;--z){var H=this.tryEntries[z];if(H.tryLoc<=this.prev&&s.call(H,"finallyLoc")&&this.prev<H.finallyLoc){var X=H;break}}X&&(S==="break"||S==="continue")&&X.tryLoc<=A&&A<=X.finallyLoc&&(X=null);var he=X?X.completion:{};return he.type=S,he.arg=A,X?(this.method="next",this.next=X.finallyLoc,v):this.complete(he)},complete:function(S,A){if(S.type==="throw")throw S.arg;return S.type==="break"||S.type==="continue"?this.next=S.arg:S.type==="return"?(this.rval=this.arg=S.arg,this.method="return",this.next="end"):S.type==="normal"&&A&&(this.next=A),v},finish:function(S){for(var A=this.tryEntries.length-1;A>=0;--A){var z=this.tryEntries[A];if(z.finallyLoc===S)return this.complete(z.completion,z.afterLoc),w(z),v}},catch:function(S){for(var A=this.tryEntries.length-1;A>=0;--A){var z=this.tryEntries[A];if(z.tryLoc===S){var H=z.completion;if(H.type==="throw"){var X=H.arg;w(z)}return X}}throw new Error("illegal catch attempt")},delegateYield:function(S,A,z){return this.delegate={iterator:R(S),resultName:A,nextLoc:z},this.method==="next"&&(this.arg=i),v}},n}(t.exports);try{regeneratorRuntime=e}catch{Function("r","regeneratorRuntime = r")(e)}});function MI(t,e,n,i,r,s,o){try{var a=t[s](o),l=a.value}catch(c){return void n(c)}a.done?e(l):Promise.resolve(l).then(i,r)}var He=function(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var s=t.apply(e,n);function o(l){MI(s,i,r,o,a,"next",l)}function a(l){MI(s,i,r,o,a,"throw",l)}o(void 0)})}},zi=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Uc=function(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t};function NI(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var Ki=function(t,e,n){return e&&NI(t.prototype,e),n&&NI(t,n),t},Pf=Gi(function(t){function e(n,i){return t.exports=e=Object.setPrototypeOf||function(r,s){return r.__proto__=s,r},e(n,i)}t.exports=e}),jc=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Pf(t,e)},Wn=Gi(function(t){function e(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?t.exports=e=function(i){return typeof i}:t.exports=e=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},e(n)}t.exports=e}),Vc=function(t,e){return!e||Wn(e)!=="object"&&typeof e!="function"?Uc(t):e},_i=Gi(function(t){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},e(n)}t.exports=e}),Bc=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},zD=typeof Map=="function",KD=typeof Set=="function",XD=typeof WeakSet=="function",PI=Object.keys,DI=function(t,e){return t&&typeof t=="object"&&e.add(t)},FI=function(t,e,n,i){for(var r,s=0;s<t.length;s++)if(n((r=t[s])[0],e[0],i)&&n(r[1],e[1],i))return!0;return!1},Df=function(t,e,n,i){for(var r=0;r<t.length;r++)if(n(t[r],e,i))return!0;return!1},ya=function(t,e){return t===e||t!=t&&e!=e},xI=function(t){return t.constructor===Object},UI=function(t){return typeof t.then=="function"},jI=function(t){return!(!t.$$typeof||!t._store)},VI=function(t){return function(e){var n=t||e;return function(i,r,s){s===void 0&&(s=XD?new WeakSet:Object.create({_values:[],add:function(l){this._values.push(l)},has:function(l){return!!~this._values.indexOf(l)}}));var o=s.has(i),a=s.has(r);return o||a?o&&a:(DI(i,s),DI(r,s),n(i,r,s))}}},BI=function(t){var e=[];return t.forEach(function(n,i){return e.push([i,n])}),e},HI=function(t){var e=[];return t.forEach(function(n){return e.push(n)}),e},QD=function(t,e,n,i){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!n(t[r],e[r],i))return!1;return!0},YD=function(t,e,n,i){if(t.size!==e.size)return!1;for(var r=BI(t),s=BI(e),o=0;o<r.length;o++)if(!FI(s,r[o],n,i)||!FI(r,s[o],n,i))return!1;return!0},qI=function(t,e,n,i){var r,s=PI(t),o=PI(e);if(s.length!==o.length)return!1;for(var a=0;a<s.length;a++)if(r=s[a],!Df(o,r,ya)||(r!=="_owner"||!jI(t)||!jI(e))&&!n(t[r],e[r],i))return!1;return!0},JD=function(t,e){return t.source===e.source&&t.global===e.global&&t.ignoreCase===e.ignoreCase&&t.multiline===e.multiline&&t.unicode===e.unicode&&t.sticky===e.sticky&&t.lastIndex===e.lastIndex},ZD=function(t,e,n,i){if(t.size!==e.size)return!1;for(var r=HI(t),s=HI(e),o=0;o<r.length;o++)if(!Df(s,r[o],n,i)||!Df(r,s[o],n,i))return!1;return!0},WI=Array.isArray,Hc=function(t){var e=typeof t=="function"?t(n):n;function n(i,r,s){if(ya(i,r))return!0;var o=typeof i;if(o!==typeof r||o!=="object"||!i||!r)return!1;if(xI(i)&&xI(r))return qI(i,r,e,s);var a=WI(i),l=WI(r);if(a||l)return a===l&&QD(i,r,e,s);var c=i instanceof Date,u=r instanceof Date;if(c||u)return c===u&&ya(i.getTime(),r.getTime());var h=i instanceof RegExp,d=r instanceof RegExp;if(h||d)return h===d&&JD(i,r);if(UI(i)||UI(r))return i===r;if(zD){var f=i instanceof Map,p=r instanceof Map;if(f||p)return f===p&&YD(i,r,e,s)}if(KD){var g=i instanceof Set,m=r instanceof Set;if(g||m)return g===m&&ZD(i,r,e,s)}return qI(i,r,e,s)}return n},qc=(Hc(VI()),Hc(VI(ya)),Hc());Hc(function(){return ya});const $D={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},GI={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},At={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},En={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},Xi={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class N{static getFirstMatch(e,n){const i=n.match(e);return i&&i.length>0&&i[1]||""}static getSecondMatch(e,n){const i=n.match(e);return i&&i.length>1&&i[2]||""}static matchAndReturnConst(e,n,i){if(e.test(n))return i}static getWindowsVersionName(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(e){const n=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(n.push(0),n[0]===10)switch(n[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(e){const n=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(n.push(0),!(n[0]===1&&n[1]<5))return n[0]===1&&n[1]<6?"Cupcake":n[0]===1&&n[1]>=6?"Donut":n[0]===2&&n[1]<2?"Eclair":n[0]===2&&n[1]===2?"Froyo":n[0]===2&&n[1]>2?"Gingerbread":n[0]===3?"Honeycomb":n[0]===4&&n[1]<1?"Ice Cream Sandwich":n[0]===4&&n[1]<4?"Jelly Bean":n[0]===4&&n[1]>=4?"KitKat":n[0]===5?"Lollipop":n[0]===6?"Marshmallow":n[0]===7?"Nougat":n[0]===8?"Oreo":n[0]===9?"Pie":void 0}static getVersionPrecision(e){return e.split(".").length}static compareVersions(e,n,i=!1){const r=N.getVersionPrecision(e),s=N.getVersionPrecision(n);let o=Math.max(r,s),a=0;const l=N.map([e,n],c=>{const u=o-N.getVersionPrecision(c),h=c+new Array(u+1).join(".0");return N.map(h.split("."),d=>new Array(20-d.length).join("0")+d).reverse()});for(i&&(a=o-Math.min(r,s)),o-=1;o>=a;){if(l[0][o]>l[1][o])return 1;if(l[0][o]===l[1][o]){if(o===a)return 0;o-=1}else if(l[0][o]<l[1][o])return-1}}static map(e,n){const i=[];let r;if(Array.prototype.map)return Array.prototype.map.call(e,n);for(r=0;r<e.length;r+=1)i.push(n(e[r]));return i}static find(e,n){let i,r;if(Array.prototype.find)return Array.prototype.find.call(e,n);for(i=0,r=e.length;i<r;i+=1){const s=e[i];if(n(s,i))return s}}static assign(e,...n){const i=e;let r,s;if(Object.assign)return Object.assign(e,...n);for(r=0,s=n.length;r<s;r+=1){const o=n[r];typeof o=="object"&&o!==null&&Object.keys(o).forEach(a=>{i[a]=o[a]})}return e}static getBrowserAlias(e){return $D[e]}static getBrowserTypeByAlias(e){return GI[e]||""}}const ut=/version\/(\d+(\.?_?\d+)+)/i,eF=[{test:[/googlebot/i],describe(t){const e={name:"Googlebot"},n=N.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,t)||N.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/opera/i],describe(t){const e={name:"Opera"},n=N.getFirstMatch(ut,t)||N.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/opr\/|opios/i],describe(t){const e={name:"Opera"},n=N.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,t)||N.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/SamsungBrowser/i],describe(t){const e={name:"Samsung Internet for Android"},n=N.getFirstMatch(ut,t)||N.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/Whale/i],describe(t){const e={name:"NAVER Whale Browser"},n=N.getFirstMatch(ut,t)||N.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/MZBrowser/i],describe(t){const e={name:"MZ Browser"},n=N.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,t)||N.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/focus/i],describe(t){const e={name:"Focus"},n=N.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,t)||N.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/swing/i],describe(t){const e={name:"Swing"},n=N.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,t)||N.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/coast/i],describe(t){const e={name:"Opera Coast"},n=N.getFirstMatch(ut,t)||N.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/yabrowser/i],describe(t){const e={name:"Yandex Browser"},n=N.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,t)||N.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/ucbrowser/i],describe(t){const e={name:"UC Browser"},n=N.getFirstMatch(ut,t)||N.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/Maxthon|mxios/i],describe(t){const e={name:"Maxthon"},n=N.getFirstMatch(ut,t)||N.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/epiphany/i],describe(t){const e={name:"Epiphany"},n=N.getFirstMatch(ut,t)||N.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/puffin/i],describe(t){const e={name:"Puffin"},n=N.getFirstMatch(ut,t)||N.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/sleipnir/i],describe(t){const e={name:"Sleipnir"},n=N.getFirstMatch(ut,t)||N.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/k-meleon/i],describe(t){const e={name:"K-Meleon"},n=N.getFirstMatch(ut,t)||N.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/micromessenger/i],describe(t){const e={name:"WeChat"},n=N.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,t)||N.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/qqbrowser/i],describe(t){const e={name:/qqbrowserlite/i.test(t)?"QQ Browser Lite":"QQ Browser"},n=N.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,t)||N.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/msie|trident/i],describe(t){const e={name:"Internet Explorer"},n=N.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/\sedg\//i],describe(t){const e={name:"Microsoft Edge"},n=N.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/edg([ea]|ios)/i],describe(t){const e={name:"Microsoft Edge"},n=N.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/vivaldi/i],describe(t){const e={name:"Vivaldi"},n=N.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/seamonkey/i],describe(t){const e={name:"SeaMonkey"},n=N.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/sailfish/i],describe(t){const e={name:"Sailfish"},n=N.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,t);return n&&(e.version=n),e}},{test:[/silk/i],describe(t){const e={name:"Amazon Silk"},n=N.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/phantom/i],describe(t){const e={name:"PhantomJS"},n=N.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/slimerjs/i],describe(t){const e={name:"SlimerJS"},n=N.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e={name:"BlackBerry"},n=N.getFirstMatch(ut,t)||N.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/(web|hpw)[o0]s/i],describe(t){const e={name:"WebOS Browser"},n=N.getFirstMatch(ut,t)||N.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/bada/i],describe(t){const e={name:"Bada"},n=N.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/tizen/i],describe(t){const e={name:"Tizen"},n=N.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,t)||N.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/qupzilla/i],describe(t){const e={name:"QupZilla"},n=N.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,t)||N.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/firefox|iceweasel|fxios/i],describe(t){const e={name:"Firefox"},n=N.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/electron/i],describe(t){const e={name:"Electron"},n=N.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/chromium/i],describe(t){const e={name:"Chromium"},n=N.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,t)||N.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/chrome|crios|crmo/i],describe(t){const e={name:"Chrome"},n=N.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/GSA/i],describe(t){const e={name:"Google Search"},n=N.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test(t){const e=!t.test(/like android/i),n=t.test(/android/i);return e&&n},describe(t){const e={name:"Android Browser"},n=N.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/playstation 4/i],describe(t){const e={name:"PlayStation 4"},n=N.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/safari|applewebkit/i],describe(t){const e={name:"Safari"},n=N.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/.*/i],describe(t){const e=t.search("\\(")!==-1?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:N.getFirstMatch(e,t),version:N.getSecondMatch(e,t)}}}];var tF=[{test:[/Roku\/DVP/],describe(t){const e=N.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,t);return{name:En.Roku,version:e}}},{test:[/windows phone/i],describe(t){const e=N.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,t);return{name:En.WindowsPhone,version:e}}},{test:[/windows /i],describe(t){const e=N.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,t),n=N.getWindowsVersionName(e);return{name:En.Windows,version:e,versionName:n}}},{test:[/Macintosh(.*?) FxiOS(.*?) Version\//],describe(t){const e=N.getSecondMatch(/(Version\/)(\d[\d.]+)/,t);return{name:En.iOS,version:e}}},{test:[/macintosh/i],describe(t){const e=N.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,t).replace(/[_\s]/g,"."),n=N.getMacOSVersionName(e),i={name:En.MacOS,version:e};return n&&(i.versionName=n),i}},{test:[/(ipod|iphone|ipad)/i],describe(t){const e=N.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,t).replace(/[_\s]/g,".");return{name:En.iOS,version:e}}},{test(t){const e=!t.test(/like android/i),n=t.test(/android/i);return e&&n},describe(t){const e=N.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,t),n=N.getAndroidVersionName(e),i={name:En.Android,version:e};return n&&(i.versionName=n),i}},{test:[/(web|hpw)[o0]s/i],describe(t){const e=N.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,t),n={name:En.WebOS};return e&&e.length&&(n.version=e),n}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e=N.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,t)||N.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,t)||N.getFirstMatch(/\bbb(\d+)/i,t);return{name:En.BlackBerry,version:e}}},{test:[/bada/i],describe(t){const e=N.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,t);return{name:En.Bada,version:e}}},{test:[/tizen/i],describe(t){const e=N.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,t);return{name:En.Tizen,version:e}}},{test:[/linux/i],describe:()=>({name:En.Linux})},{test:[/CrOS/],describe:()=>({name:En.ChromeOS})},{test:[/PlayStation 4/],describe(t){const e=N.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,t);return{name:En.PlayStation4,version:e}}}],nF=[{test:[/googlebot/i],describe:()=>({type:"bot",vendor:"Google"})},{test:[/huawei/i],describe(t){const e=N.getFirstMatch(/(can-l01)/i,t)&&"Nova",n={type:At.mobile,vendor:"Huawei"};return e&&(n.model=e),n}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:()=>({type:At.tablet,vendor:"Nexus"})},{test:[/ipad/i],describe:()=>({type:At.tablet,vendor:"Apple",model:"iPad"})},{test:[/Macintosh(.*?) FxiOS(.*?) Version\//],describe:()=>({type:At.tablet,vendor:"Apple",model:"iPad"})},{test:[/kftt build/i],describe:()=>({type:At.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"})},{test:[/silk/i],describe:()=>({type:At.tablet,vendor:"Amazon"})},{test:[/tablet(?! pc)/i],describe:()=>({type:At.tablet})},{test(t){const e=t.test(/ipod|iphone/i),n=t.test(/like (ipod|iphone)/i);return e&&!n},describe(t){const e=N.getFirstMatch(/(ipod|iphone)/i,t);return{type:At.mobile,vendor:"Apple",model:e}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:()=>({type:At.mobile,vendor:"Nexus"})},{test:[/[^-]mobi/i],describe:()=>({type:At.mobile})},{test:t=>t.getBrowserName(!0)==="blackberry",describe:()=>({type:At.mobile,vendor:"BlackBerry"})},{test:t=>t.getBrowserName(!0)==="bada",describe:()=>({type:At.mobile})},{test:t=>t.getBrowserName()==="windows phone",describe:()=>({type:At.mobile,vendor:"Microsoft"})},{test(t){const e=Number(String(t.getOSVersion()).split(".")[0]);return t.getOSName(!0)==="android"&&e>=3},describe:()=>({type:At.tablet})},{test:t=>t.getOSName(!0)==="android",describe:()=>({type:At.mobile})},{test:t=>t.getOSName(!0)==="macos",describe:()=>({type:At.desktop,vendor:"Apple"})},{test:t=>t.getOSName(!0)==="windows",describe:()=>({type:At.desktop})},{test:t=>t.getOSName(!0)==="linux",describe:()=>({type:At.desktop})},{test:t=>t.getOSName(!0)==="playstation 4",describe:()=>({type:At.tv})},{test:t=>t.getOSName(!0)==="roku",describe:()=>({type:At.tv})}],iF=[{test:t=>t.getBrowserName(!0)==="microsoft edge",describe(t){if(/\sedg\//i.test(t))return{name:Xi.Blink};const e=N.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,t);return{name:Xi.EdgeHTML,version:e}}},{test:[/trident/i],describe(t){const e={name:Xi.Trident},n=N.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:t=>t.test(/presto/i),describe(t){const e={name:Xi.Presto},n=N.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test(t){const e=t.test(/gecko/i),n=t.test(/like gecko/i);return e&&!n},describe(t){const e={name:Xi.Gecko},n=N.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/(apple)?webkit\/537\.36/i],describe:()=>({name:Xi.Blink})},{test:[/(apple)?webkit/i],describe(t){const e={name:Xi.WebKit},n=N.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}}];class zI{constructor(e,n=!1){if(e==null||e==="")throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},n!==!0&&this.parse()}getUA(){return this._ua}test(e){return e.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const e=N.find(eF,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.browser=e.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const e=N.find(tF,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.os=e.describe(this.getUA())),this.parsedResult.os}getOSName(e){const{name:n}=this.getOS();return e?String(n).toLowerCase()||"":n||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(e=!1){const{type:n}=this.getPlatform();return e?String(n).toLowerCase()||"":n||""}parsePlatform(){this.parsedResult.platform={};const e=N.find(nF,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.platform=e.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const e=N.find(iF,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.engine=e.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return N.assign({},this.parsedResult)}satisfies(e){const n={};let i=0;const r={};let s=0;if(Object.keys(e).forEach(o=>{const a=e[o];typeof a=="string"?(r[o]=a,s+=1):typeof a=="object"&&(n[o]=a,i+=1)}),i>0){const o=Object.keys(n),a=N.find(o,c=>this.isOS(c));if(a){const c=this.satisfies(n[a]);if(c!==void 0)return c}const l=N.find(o,c=>this.isPlatform(c));if(l){const c=this.satisfies(n[l]);if(c!==void 0)return c}}if(s>0){const o=Object.keys(r),a=N.find(o,l=>this.isBrowser(l,!0));if(a!==void 0)return this.compareVersion(r[a])}}isBrowser(e,n=!1){const i=this.getBrowserName().toLowerCase();let r=e.toLowerCase();const s=N.getBrowserTypeByAlias(r);return n&&s&&(r=s.toLowerCase()),r===i}compareVersion(e){let n=[0],i=e,r=!1;const s=this.getBrowserVersion();if(typeof s=="string")return e[0]===">"||e[0]==="<"?(i=e.substr(1),e[1]==="="?(r=!0,i=e.substr(2)):n=[],e[0]===">"?n.push(1):n.push(-1)):e[0]==="="?i=e.substr(1):e[0]==="~"&&(r=!0,i=e.substr(1)),n.indexOf(N.compareVersions(s,i,r))>-1}isOS(e){return this.getOSName(!0)===String(e).toLowerCase()}isPlatform(e){return this.getPlatformType(!0)===String(e).toLowerCase()}isEngine(e){return this.getEngineName(!0)===String(e).toLowerCase()}is(e){return this.isBrowser(e)||this.isOS(e)||this.isPlatform(e)}some(e=[]){return e.some(n=>this.is(n))}}var KI="new",Ff="loading",Wc="joining-meeting",pn="joined-meeting",Fr="left-meeting",xr="error",XI="unknown",rF="base",sF="*",Us="fullscreen",js="exited-fullscreen",Gc="daily-custom-track",xf={NONE:"none",BGBLUR:"background-blur"};function ei(){return!Kt()&&typeof window!="undefined"&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:""}function Kt(){return typeof navigator!="undefined"&&navigator.product&&navigator.product==="ReactNative"}function QI(){return navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia}function oF(){return!!(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getDisplayMedia)&&function(t,e){if(!t||!e)return!1;switch(t){case"Chrome":return e.major>=75;case"Safari":return RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection")&&!(e.major===13&&e.minor===0&&e.point===0);case"Firefox":return e.major>=67}return!1}(zc(),function(){switch(zc()){case"Chrome":return JI();case"Safari":return $I();case"Firefox":return eE();case"Edge":return function(){var t=0,e=0;if(typeof window!="undefined"){var n=ei(),i=n.match(/Edge\/(\d+).(\d+)/);if(i)try{t=parseInt(i[1]),e=parseInt(i[2])}catch{}}return{major:t,minor:e}}()}}())}var aF=["Chrome","Firefox"];function lF(){return!Kt()&&!function(){var t=ei();if(t.match(/Mobi/)||t.match(/Android/)||ei().match(/DailyAnd\//))return!0}()&&aF.includes(zc())}function Uf(){return!!Kt()||YI()}function YI(){return QI()&&!function(){var t,e=zc();if(!ei())return!0;switch(e){case"Chrome":return(t=JI()).major&&t.major>0&&t.major<61;case"Firefox":return(t=eE()).major<78;case"Safari":return(t=$I()).major<12;default:return!0}}()}function zc(){if(typeof window!="undefined"){var t=ei();return ZI()?"Safari":t.indexOf("Edge")>-1?"Edge":t.match(/Chrome\//)?"Chrome":t.indexOf("Safari")>-1?"Safari":t.indexOf("Firefox")>-1?"Firefox":t.indexOf("MSIE")>-1||t.indexOf(".NET")>-1?"IE":"Unknown Browser"}}function JI(){var t=0,e=0,n=0,i=0,r=!1;if(typeof window!="undefined"){var s=ei(),o=s.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);if(o)try{t=parseInt(o[1]),e=parseInt(o[2]),n=parseInt(o[3]),i=parseInt(o[4]),r=s.indexOf("OPR/")>-1}catch{}}return{major:t,minor:e,build:n,patch:i,opera:r}}function ZI(){return!!ei().match(/iPad|iPhone|iPod/i)&&QI()}function $I(){var t=0,e=0,n=0;if(typeof window!="undefined"){var i=ei().match(/Version\/(\d+).(\d+)(.(\d+))?/);if(i)try{t=parseInt(i[1]),e=parseInt(i[2]),n=parseInt(i[4])}catch{}else ZI()&&(t=14,e=0,n=3)}return{major:t,minor:e,point:n}}function eE(){var t=0,e=0;if(typeof window!="undefined"){var n=ei().match(/Firefox\/(\d+).(\d+)/);if(n)try{t=parseInt(n[1]),e=parseInt(n[2])}catch{}}return{major:t,minor:e}}function jf(){return Date.now()+Math.random().toString()}function ba(){throw new Error("Method must be implemented in subclass")}function Ia(t){var e=t?new URL(t).origin:null;return!e||e.match(/https:\/\/[^.]+\.daily\.co/)?Uf()?"https://c.daily.co/static/call-machine-object-bundle.js":"https://c.daily.co/static/call-machine-object-nosfu-bundle.js":(e||(console.warn("No baseUrl provided for call object bundle. Defaulting to production CDN..."),e="https://c.daily.co"),Uf()?"".concat(e,"/static/call-machine-object-bundle.js"):"".concat(e,"/static/call-machine-object-nosfu-bundle.js"))}var tE=function(){function t(){zi(this,t)}return Ki(t,[{key:"addListenerForMessagesFromCallMachine",value:function(e,n,i){ba()}},{key:"addListenerForMessagesFromDailyJs",value:function(e,n,i){ba()}},{key:"sendMessageToCallMachine",value:function(e,n,i,r){ba()}},{key:"sendMessageToDailyJs",value:function(e,n,i){ba()}},{key:"removeListener",value:function(e){ba()}}]),t}();function nE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Vf(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?nE(Object(n),!0).forEach(function(i){Bc(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nE(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function cF(t){var e=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var n,i=_i(t);if(e){var r=_i(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Vc(this,n)}}var uF=function(t){jc(n,tE);var e=cF(n);function n(){var i;return zi(this,n),(i=e.call(this))._wrappedListeners={},i._messageCallbacks={},i}return Ki(n,[{key:"addListenerForMessagesFromCallMachine",value:function(i,r,s){var o=this,a=function(l){if(l.data&&l.data.what==="iframe-call-message"&&(!l.data.callFrameId||l.data.callFrameId===r)&&(!l.data.from||l.data.from!=="module")){var c=Vf({},l.data);if(delete c.from,c.callbackStamp&&o._messageCallbacks[c.callbackStamp]){var u=c.callbackStamp;o._messageCallbacks[u].call(s,c),delete o._messageCallbacks[u]}delete c.what,delete c.callbackStamp,i.call(s,c)}};this._wrappedListeners[i]=a,window.addEventListener("message",a)}},{key:"addListenerForMessagesFromDailyJs",value:function(i,r,s){var o=function(a){if(!(!a.data||a.data.what!=="iframe-call-message"||!a.data.action||a.data.from&&a.data.from!=="module"||a.data.callFrameId&&r&&a.data.callFrameId!==r)){var l=a.data;i.call(s,l)}};this._wrappedListeners[i]=o,window.addEventListener("message",o)}},{key:"sendMessageToCallMachine",value:function(i,r,s,o){var a=Vf({},i);if(a.what="iframe-call-message",a.from="module",a.callFrameId=o,r){var l=jf();this._messageCallbacks[l]=r,a.callbackStamp=l}(s?s.contentWindow:window).postMessage(a,"*")}},{key:"sendMessageToDailyJs",value:function(i,r,s){i.what="iframe-call-message",i.callFrameId=s,i.from="embedded",(r?window:window.parent).postMessage(i,"*")}},{key:"removeListener",value:function(i){var r=this._wrappedListeners[i];r&&(window.removeEventListener("message",r),delete this._wrappedListeners[i])}},{key:"forwardPackagedMessageToCallMachine",value:function(i,r,s){var o=Vf({},i);o.callFrameId=s,(r?r.contentWindow:window).postMessage(o,"*")}},{key:"addListenerForPackagedMessagesFromCallMachine",value:function(i,r){var s=function(o){if(o.data&&o.data.what==="iframe-call-message"&&(!o.data.callFrameId||o.data.callFrameId===r)&&(!o.data.from||o.data.from!=="module")){var a=o.data;i(a)}};return this._wrappedListeners[i]=s,window.addEventListener("message",s),i}},{key:"removeListenerForPackagedMessagesFromCallMachine",value:function(i){var r=this._wrappedListeners[i];r&&(window.removeEventListener("message",r),delete this._wrappedListeners[i])}}]),n}();function hF(t){var e=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var n,i=_i(t);if(e){var r=_i(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Vc(this,n)}}global.callMachineToDailyJsEmitter=global.callMachineToDailyJsEmitter||new va.exports.EventEmitter,global.dailyJsToCallMachineEmitter=global.dailyJsToCallMachineEmitter||new va.exports.EventEmitter;var dF=function(t){jc(n,tE);var e=hF(n);function n(){var i;return zi(this,n),(i=e.call(this))._wrappedListeners={},i._messageCallbacks={},i}return Ki(n,[{key:"addListenerForMessagesFromCallMachine",value:function(i,r,s){this._addListener(i,global.callMachineToDailyJsEmitter,s,"received call machine message")}},{key:"addListenerForMessagesFromDailyJs",value:function(i,r,s){this._addListener(i,global.dailyJsToCallMachineEmitter,s,"received daily-js message")}},{key:"sendMessageToCallMachine",value:function(i,r){this._sendMessage(i,global.dailyJsToCallMachineEmitter,"sending message to call machine",r)}},{key:"sendMessageToDailyJs",value:function(i){this._sendMessage(i,global.callMachineToDailyJsEmitter,"sending message to daily-js")}},{key:"removeListener",value:function(i){var r=this._wrappedListeners[i];r&&(global.callMachineToDailyJsEmitter.removeListener("message",r),global.dailyJsToCallMachineEmitter.removeListener("message",r),delete this._wrappedListeners[i])}},{key:"_addListener",value:function(i,r,s,o){var a=this,l=function(c){if(c.callbackStamp&&a._messageCallbacks[c.callbackStamp]){var u=c.callbackStamp;a._messageCallbacks[u].call(s,c),delete a._messageCallbacks[u]}i.call(s,c)};this._wrappedListeners[i]=l,r.addListener("message",l)}},{key:"_sendMessage",value:function(i,r,s,o){if(o){var a=jf();this._messageCallbacks[a]=o,i.callbackStamp=a}r.emit("message",i)}}]),n}(),fF=function(t){return Function.toString.call(t).indexOf("[native code]")!==-1},pF=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}},mF=Gi(function(t){function e(n,i,r){return pF()?t.exports=e=Reflect.construct:t.exports=e=function(s,o,a){var l=[null];l.push.apply(l,o);var c=new(Function.bind.apply(s,l));return a&&Pf(c,a.prototype),c},e.apply(null,arguments)}t.exports=e}),gF=Gi(function(t){function e(n){var i=typeof Map=="function"?new Map:void 0;return t.exports=e=function(r){if(r===null||!fF(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(i!==void 0){if(i.has(r))return i.get(r);i.set(r,s)}function s(){return mF(r,arguments,_i(this).constructor)}return s.prototype=Object.create(r.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),Pf(s,r)},e(n)}t.exports=e});function _F(t){var e=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var n,i=_i(t);if(e){var r=_i(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Vc(this,n)}}var vF=function(){function t(){zi(this,t),this._currentLoad=null}return Ki(t,[{key:"load",value:function(e,n,i,r){if(this.loaded)return window._dailyCallObjectSetup(n),void i(!0);(function(s){window._dailyConfig||(window._dailyConfig={}),window._dailyConfig.callFrameId=s})(n),this._currentLoad&&this._currentLoad.cancel(),this._currentLoad=new bF(e,n,function(){i(!1)},r),this._currentLoad.start()}},{key:"cancel",value:function(){this._currentLoad&&this._currentLoad.cancel()}},{key:"loaded",get:function(){return this._currentLoad&&this._currentLoad.succeeded}}]),t}(),yF=3,bF=function(){function t(e,n,i,r){zi(this,t),this._attemptsRemaining=yF,this._currentAttempt=null,this._meetingOrBaseUrl=e,this._callFrameId=n,this._successCallback=i,this._failureCallback=r}return Ki(t,[{key:"start",value:function(){var e=this;this._currentAttempt||(this._currentAttempt=new iE(this._meetingOrBaseUrl,this._callFrameId,this._successCallback,function n(i){e._currentAttempt.cancelled||(e._attemptsRemaining--,e._failureCallback(i,e._attemptsRemaining>0),e._attemptsRemaining<=0||setTimeout(function(){e._currentAttempt.cancelled||(e._currentAttempt=new iE(e._meetingOrBaseUrl,e._callFrameId,e._successCallback,n),e._currentAttempt.start())},3e3))}),this._currentAttempt.start())}},{key:"cancel",value:function(){this._currentAttempt&&this._currentAttempt.cancel()}},{key:"cancelled",get:function(){return this._currentAttempt&&this._currentAttempt.cancelled}},{key:"succeeded",get:function(){return this._currentAttempt&&this._currentAttempt.succeeded}}]),t}(),Bf=function(t){jc(n,t);var e=_F(n);function n(){return zi(this,n),e.apply(this,arguments)}return n}(gF(Error)),iE=function(){function t(e,n,i,r){zi(this,t),this.cancelled=!1,this.succeeded=!1,this._networkTimedOut=!1,this._networkTimeout=null,this._iosCache=typeof iOSCallObjectBundleCache!="undefined"&&iOSCallObjectBundleCache,this._refetchHeaders=null,this._meetingOrBaseUrl=e,this._callFrameId=n,this._successCallback=i,this._failureCallback=r}return Ki(t,[{key:"start",value:function(){var e=He(Z.mark(function n(){var i;return Z.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i=Ia(this._meetingOrBaseUrl),r.next=3,this._tryLoadFromIOSCache(i);case 3:!r.sent&&this._loadFromNetwork(i);case 5:case"end":return r.stop()}},n,this)}));return function(){return e.apply(this,arguments)}}()},{key:"cancel",value:function(){clearTimeout(this._networkTimeout),this.cancelled=!0}},{key:"_tryLoadFromIOSCache",value:function(){var e=He(Z.mark(function n(i){var r;return Z.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(this._iosCache){s.next=2;break}return s.abrupt("return",!1);case 2:return s.prev=2,s.next=5,this._iosCache.get(i);case 5:if(r=s.sent,!this.cancelled){s.next=8;break}return s.abrupt("return",!0);case 8:if(r){s.next=10;break}return s.abrupt("return",!1);case 10:if(r.code){s.next=13;break}return this._refetchHeaders=r.refetchHeaders,s.abrupt("return",!1);case 13:return Function('"use strict";'+r.code)(),this.succeeded=!0,this._successCallback(),s.abrupt("return",!0);case 19:return s.prev=19,s.t0=s.catch(2),s.abrupt("return",!1);case 22:case"end":return s.stop()}},n,this,[[2,19]])}));return function(n){return e.apply(this,arguments)}}()},{key:"_loadFromNetwork",value:function(){var e=He(Z.mark(function n(i){var r,s,o,a=this;return Z.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return this._networkTimeout=setTimeout(function(){a._networkTimedOut=!0,a._failureCallback("Timed out (>".concat(2e4," ms) when loading call object bundle ").concat(i))},2e4),l.prev=1,r=this._refetchHeaders?{headers:this._refetchHeaders}:{},l.next=5,fetch(i,r);case 5:if(s=l.sent,clearTimeout(this._networkTimeout),!this.cancelled&&!this._networkTimedOut){l.next=9;break}throw new Bf;case 9:return l.next=11,this._getBundleCodeFromResponse(i,s);case 11:if(o=l.sent,!this.cancelled){l.next=14;break}throw new Bf;case 14:Function('"use strict";'+o)(),this._iosCache&&this._iosCache.set(i,o,s.headers),this.succeeded=!0,this._successCallback(),l.next=26;break;case 20:if(l.prev=20,l.t0=l.catch(1),clearTimeout(this._networkTimeout),!(l.t0 instanceof Bf||this.cancelled||this._networkTimedOut)){l.next=25;break}return l.abrupt("return");case 25:this._failureCallback("Failed to load call object bundle ".concat(i,": ").concat(l.t0));case 26:case"end":return l.stop()}},n,this,[[1,20]])}));return function(n){return e.apply(this,arguments)}}()},{key:"_getBundleCodeFromResponse",value:function(){var e=He(Z.mark(function n(i,r){var s;return Z.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!r.ok){o.next=4;break}return o.next=3,r.text();case 3:return o.abrupt("return",o.sent);case 4:if(!this._iosCache||r.status!==304){o.next=9;break}return o.next=7,this._iosCache.renew(i,r.headers);case 7:return s=o.sent,o.abrupt("return",s.code);case 9:throw new Error("Received ".concat(r.status," response"));case 10:case"end":return o.stop()}},n,this)}));return function(n,i){return e.apply(this,arguments)}}()}]),t}(),rE=function(t,e){for(var n=-1,i=t==null?0:t.length,r=0,s=[];++n<i;){var o=t[n];e(o,n,t)&&(s[r++]=o)}return s},IF=function(t){return function(e,n,i){for(var r=-1,s=Object(e),o=i(e),a=o.length;a--;){var l=o[t?a:++r];if(n(s[l],l,s)===!1)break}return e}}(),EF=function(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i},sE=typeof xc=="object"&&xc&&xc.Object===Object&&xc,wF=typeof self=="object"&&self&&self.Object===Object&&self,vi=sE||wF||Function("return this")(),Qi=vi.Symbol,oE=Object.prototype,TF=oE.hasOwnProperty,CF=oE.toString,Ea=Qi?Qi.toStringTag:void 0,SF=function(t){var e=TF.call(t,Ea),n=t[Ea];try{t[Ea]=void 0;var i=!0}catch{}var r=CF.call(t);return i&&(e?t[Ea]=n:delete t[Ea]),r},AF=Object.prototype.toString,kF=function(t){return AF.call(t)},RF="[object Null]",OF="[object Undefined]",aE=Qi?Qi.toStringTag:void 0,Vs=function(t){return t==null?t===void 0?OF:RF:aE&&aE in Object(t)?SF(t):kF(t)},Bs=function(t){return t!=null&&typeof t=="object"},LF="[object Arguments]",lE=function(t){return Bs(t)&&Vs(t)==LF},cE=Object.prototype,MF=cE.hasOwnProperty,NF=cE.propertyIsEnumerable,uE=lE(function(){return arguments}())?lE:function(t){return Bs(t)&&MF.call(t,"callee")&&!NF.call(t,"callee")},Gn=Array.isArray,PF=function(){return!1},Hf=Gi(function(t,e){var n=e&&!e.nodeType&&e,i=n&&t&&!t.nodeType&&t,r=i&&i.exports===n?vi.Buffer:void 0,s=(r?r.isBuffer:void 0)||PF;t.exports=s}),DF=9007199254740991,FF=/^(?:0|[1-9]\d*)$/,hE=function(t,e){var n=typeof t;return!!(e=e==null?DF:e)&&(n=="number"||n!="symbol"&&FF.test(t))&&t>-1&&t%1==0&&t<e},xF=9007199254740991,qf=function(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=xF},vt={};vt["[object Float32Array]"]=vt["[object Float64Array]"]=vt["[object Int8Array]"]=vt["[object Int16Array]"]=vt["[object Int32Array]"]=vt["[object Uint8Array]"]=vt["[object Uint8ClampedArray]"]=vt["[object Uint16Array]"]=vt["[object Uint32Array]"]=!0,vt["[object Arguments]"]=vt["[object Array]"]=vt["[object ArrayBuffer]"]=vt["[object Boolean]"]=vt["[object DataView]"]=vt["[object Date]"]=vt["[object Error]"]=vt["[object Function]"]=vt["[object Map]"]=vt["[object Number]"]=vt["[object Object]"]=vt["[object RegExp]"]=vt["[object Set]"]=vt["[object String]"]=vt["[object WeakMap]"]=!1;var UF=function(t){return Bs(t)&&qf(t.length)&&!!vt[Vs(t)]},dE=function(t){return function(e){return t(e)}},fE=Gi(function(t,e){var n=e&&!e.nodeType&&e,i=n&&t&&!t.nodeType&&t,r=i&&i.exports===n&&sE.process,s=function(){try{var o=i&&i.require&&i.require("util").types;return o||r&&r.binding&&r.binding("util")}catch{}}();t.exports=s}),pE=fE&&fE.isTypedArray,mE=pE?dE(pE):UF,jF=Object.prototype.hasOwnProperty,VF=function(t,e){var n=Gn(t),i=!n&&uE(t),r=!n&&!i&&Hf(t),s=!n&&!i&&!r&&mE(t),o=n||i||r||s,a=o?EF(t.length,String):[],l=a.length;for(var c in t)!e&&!jF.call(t,c)||o&&(c=="length"||r&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||hE(c,l))||a.push(c);return a},BF=Object.prototype,HF=function(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||BF)},qF=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),WF=Object.prototype.hasOwnProperty,GF=function(t){if(!HF(t))return qF(t);var e=[];for(var n in Object(t))WF.call(t,n)&&n!="constructor"&&e.push(n);return e},Wf=function(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")},zF="[object AsyncFunction]",KF="[object Function]",XF="[object GeneratorFunction]",QF="[object Proxy]",gE=function(t){if(!Wf(t))return!1;var e=Vs(t);return e==KF||e==XF||e==zF||e==QF},Gf=function(t){return t!=null&&qf(t.length)&&!gE(t)},zf=function(t){return Gf(t)?VF(t):GF(t)},_E=function(t,e){return function(n,i){if(n==null)return n;if(!Gf(n))return t(n,i);for(var r=n.length,s=e?r:-1,o=Object(n);(e?s--:++s<r)&&i(o[s],s,o)!==!1;);return n}}(function(t,e){return t&&IF(t,e,zf)}),YF=function(t,e){var n=[];return _E(t,function(i,r,s){e(i,r,s)&&n.push(i)}),n},JF=function(){this.__data__=[],this.size=0},vE=function(t,e){return t===e||t!=t&&e!=e},Kc=function(t,e){for(var n=t.length;n--;)if(vE(t[n][0],e))return n;return-1},ZF=Array.prototype.splice,$F=function(t){var e=this.__data__,n=Kc(e,t);return!(n<0||(n==e.length-1?e.pop():ZF.call(e,n,1),--this.size,0))},e2=function(t){var e=this.__data__,n=Kc(e,t);return n<0?void 0:e[n][1]},t2=function(t){return Kc(this.__data__,t)>-1},n2=function(t,e){var n=this.__data__,i=Kc(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function Hs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Hs.prototype.clear=JF,Hs.prototype.delete=$F,Hs.prototype.get=e2,Hs.prototype.has=t2,Hs.prototype.set=n2;var Xc=Hs,i2=function(){this.__data__=new Xc,this.size=0},r2=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},s2=function(t){return this.__data__.get(t)},yE,o2=function(t){return this.__data__.has(t)},Kf=vi["__core-js_shared__"],bE=(yE=/[^.]+$/.exec(Kf&&Kf.keys&&Kf.keys.IE_PROTO||""))?"Symbol(src)_1."+yE:"",a2=function(t){return!!bE&&bE in t},l2=Function.prototype.toString,Ur=function(t){if(t!=null){try{return l2.call(t)}catch{}try{return t+""}catch{}}return""},c2=/^\[object .+?Constructor\]$/,u2=Function.prototype,h2=Object.prototype,d2=u2.toString,f2=h2.hasOwnProperty,p2=RegExp("^"+d2.call(f2).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),m2=function(t){return!(!Wf(t)||a2(t))&&(gE(t)?p2:c2).test(Ur(t))},g2=function(t,e){return t==null?void 0:t[e]},qs=function(t,e){var n=g2(t,e);return m2(n)?n:void 0},wa=qs(vi,"Map"),Ta=qs(Object,"create"),_2=function(){this.__data__=Ta?Ta(null):{},this.size=0},v2=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},y2="__lodash_hash_undefined__",b2=Object.prototype.hasOwnProperty,I2=function(t){var e=this.__data__;if(Ta){var n=e[t];return n===y2?void 0:n}return b2.call(e,t)?e[t]:void 0},E2=Object.prototype.hasOwnProperty,w2=function(t){var e=this.__data__;return Ta?e[t]!==void 0:E2.call(e,t)},T2="__lodash_hash_undefined__",C2=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Ta&&e===void 0?T2:e,this};function Ws(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Ws.prototype.clear=_2,Ws.prototype.delete=v2,Ws.prototype.get=I2,Ws.prototype.has=w2,Ws.prototype.set=C2;var IE=Ws,S2=function(){this.size=0,this.__data__={hash:new IE,map:new(wa||Xc),string:new IE}},A2=function(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null},Qc=function(t,e){var n=t.__data__;return A2(e)?n[typeof e=="string"?"string":"hash"]:n.map},k2=function(t){var e=Qc(this,t).delete(t);return this.size-=e?1:0,e},R2=function(t){return Qc(this,t).get(t)},O2=function(t){return Qc(this,t).has(t)},L2=function(t,e){var n=Qc(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function Gs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Gs.prototype.clear=S2,Gs.prototype.delete=k2,Gs.prototype.get=R2,Gs.prototype.has=O2,Gs.prototype.set=L2;var Yc=Gs,M2=200,N2=function(t,e){var n=this.__data__;if(n instanceof Xc){var i=n.__data__;if(!wa||i.length<M2-1)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new Yc(i)}return n.set(t,e),this.size=n.size,this};function zs(t){var e=this.__data__=new Xc(t);this.size=e.size}zs.prototype.clear=i2,zs.prototype.delete=r2,zs.prototype.get=s2,zs.prototype.has=o2,zs.prototype.set=N2;var Jc=zs,P2="__lodash_hash_undefined__",D2=function(t){return this.__data__.set(t,P2),this},F2=function(t){return this.__data__.has(t)};function Zc(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new Yc;++e<n;)this.add(t[e])}Zc.prototype.add=Zc.prototype.push=D2,Zc.prototype.has=F2;var x2=Zc,U2=function(t,e){for(var n=-1,i=t==null?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1},j2=function(t,e){return t.has(e)},V2=1,B2=2,EE=function(t,e,n,i,r,s){var o=n&V2,a=t.length,l=e.length;if(a!=l&&!(o&&l>a))return!1;var c=s.get(t);if(c&&s.get(e))return c==e;var u=-1,h=!0,d=n&B2?new x2:void 0;for(s.set(t,e),s.set(e,t);++u<a;){var f=t[u],p=e[u];if(i)var g=o?i(p,f,u,e,t,s):i(f,p,u,t,e,s);if(g!==void 0){if(g)continue;h=!1;break}if(d){if(!U2(e,function(m,v){if(!j2(d,v)&&(f===m||r(f,m,n,i,s)))return d.push(v)})){h=!1;break}}else if(f!==p&&!r(f,p,n,i,s)){h=!1;break}}return s.delete(t),s.delete(e),h},wE=vi.Uint8Array,H2=function(t){var e=-1,n=Array(t.size);return t.forEach(function(i,r){n[++e]=[r,i]}),n},q2=function(t){var e=-1,n=Array(t.size);return t.forEach(function(i){n[++e]=i}),n},W2=1,G2=2,z2="[object Boolean]",K2="[object Date]",X2="[object Error]",Q2="[object Map]",Y2="[object Number]",J2="[object RegExp]",Z2="[object Set]",$2="[object String]",ex="[object Symbol]",tx="[object ArrayBuffer]",nx="[object DataView]",TE=Qi?Qi.prototype:void 0,Xf=TE?TE.valueOf:void 0,ix=function(t,e,n,i,r,s,o){switch(n){case nx:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case tx:return!(t.byteLength!=e.byteLength||!s(new wE(t),new wE(e)));case z2:case K2:case Y2:return vE(+t,+e);case X2:return t.name==e.name&&t.message==e.message;case J2:case $2:return t==e+"";case Q2:var a=H2;case Z2:var l=i&W2;if(a||(a=q2),t.size!=e.size&&!l)return!1;var c=o.get(t);if(c)return c==e;i|=G2,o.set(t,e);var u=EE(a(t),a(e),i,r,s,o);return o.delete(t),u;case ex:if(Xf)return Xf.call(t)==Xf.call(e)}return!1},rx=function(t,e){for(var n=-1,i=e.length,r=t.length;++n<i;)t[r+n]=e[n];return t},sx=function(t,e,n){var i=e(t);return Gn(t)?i:rx(i,n(t))},ox=function(){return[]},ax=Object.prototype.propertyIsEnumerable,CE=Object.getOwnPropertySymbols,lx=CE?function(t){return t==null?[]:(t=Object(t),rE(CE(t),function(e){return ax.call(t,e)}))}:ox,SE=function(t){return sx(t,zf,lx)},cx=1,ux=Object.prototype.hasOwnProperty,hx=function(t,e,n,i,r,s){var o=n&cx,a=SE(t),l=a.length;if(l!=SE(e).length&&!o)return!1;for(var c=l;c--;){var u=a[c];if(!(o?u in e:ux.call(e,u)))return!1}var h=s.get(t);if(h&&s.get(e))return h==e;var d=!0;s.set(t,e),s.set(e,t);for(var f=o;++c<l;){var p=t[u=a[c]],g=e[u];if(i)var m=o?i(g,p,u,e,t,s):i(p,g,u,t,e,s);if(!(m===void 0?p===g||r(p,g,n,i,s):m)){d=!1;break}f||(f=u=="constructor")}if(d&&!f){var v=t.constructor,E=e.constructor;v!=E&&"constructor"in t&&"constructor"in e&&!(typeof v=="function"&&v instanceof v&&typeof E=="function"&&E instanceof E)&&(d=!1)}return s.delete(t),s.delete(e),d},Qf=qs(vi,"DataView"),Yf=qs(vi,"Promise"),Jf=qs(vi,"Set"),Zf=qs(vi,"WeakMap"),dx=Ur(Qf),fx=Ur(wa),px=Ur(Yf),mx=Ur(Jf),gx=Ur(Zf),jr=Vs;(Qf&&jr(new Qf(new ArrayBuffer(1)))!="[object DataView]"||wa&&jr(new wa)!="[object Map]"||Yf&&jr(Yf.resolve())!="[object Promise]"||Jf&&jr(new Jf)!="[object Set]"||Zf&&jr(new Zf)!="[object WeakMap]")&&(jr=function(t){var e=Vs(t),n=e=="[object Object]"?t.constructor:void 0,i=n?Ur(n):"";if(i)switch(i){case dx:return"[object DataView]";case fx:return"[object Map]";case px:return"[object Promise]";case mx:return"[object Set]";case gx:return"[object WeakMap]"}return e});var AE=jr,_x=1,kE="[object Arguments]",RE="[object Array]",$c="[object Object]",OE=Object.prototype.hasOwnProperty,vx=function(t,e,n,i,r,s){var o=Gn(t),a=Gn(e),l=o?RE:AE(t),c=a?RE:AE(e),u=(l=l==kE?$c:l)==$c,h=(c=c==kE?$c:c)==$c,d=l==c;if(d&&Hf(t)){if(!Hf(e))return!1;o=!0,u=!1}if(d&&!u)return s||(s=new Jc),o||mE(t)?EE(t,e,n,i,r,s):ix(t,e,l,n,i,r,s);if(!(n&_x)){var f=u&&OE.call(t,"__wrapped__"),p=h&&OE.call(e,"__wrapped__");if(f||p){var g=f?t.value():t,m=p?e.value():e;return s||(s=new Jc),r(g,m,n,i,s)}}return!!d&&(s||(s=new Jc),hx(t,e,n,i,r,s))},LE=function t(e,n,i,r,s){return e===n||(e==null||n==null||!Bs(e)&&!Bs(n)?e!=e&&n!=n:vx(e,n,i,r,t,s))},yx=1,bx=2,Ix=function(t,e,n,i){var r=n.length,s=r,o=!i;if(t==null)return!s;for(t=Object(t);r--;){var a=n[r];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++r<s;){var l=(a=n[r])[0],c=t[l],u=a[1];if(o&&a[2]){if(c===void 0&&!(l in t))return!1}else{var h=new Jc;if(i)var d=i(c,u,l,t,e,h);if(!(d===void 0?LE(u,c,yx|bx,i,h):d))return!1}}return!0},ME=function(t){return t==t&&!Wf(t)},Ex=function(t){for(var e=zf(t),n=e.length;n--;){var i=e[n],r=t[i];e[n]=[i,r,ME(r)]}return e},NE=function(t,e){return function(n){return n!=null&&n[t]===e&&(e!==void 0||t in Object(n))}},wx=function(t){var e=Ex(t);return e.length==1&&e[0][2]?NE(e[0][0],e[0][1]):function(n){return n===t||Ix(n,t,e)}},Tx="[object Symbol]",Ca=function(t){return typeof t=="symbol"||Bs(t)&&Vs(t)==Tx},Cx=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Sx=/^\w*$/,$f=function(t,e){if(Gn(t))return!1;var n=typeof t;return!(n!="number"&&n!="symbol"&&n!="boolean"&&t!=null&&!Ca(t))||Sx.test(t)||!Cx.test(t)||e!=null&&t in Object(e)},Ax="Expected a function";function ep(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Ax);var n=function(){var i=arguments,r=e?e.apply(this,i):i[0],s=n.cache;if(s.has(r))return s.get(r);var o=t.apply(this,i);return n.cache=s.set(r,o)||s,o};return n.cache=new(ep.Cache||Yc),n}ep.Cache=Yc;var kx=ep,Rx=500,Ox=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lx=/\\(\\)?/g,Mx=function(t){var e=kx(t,function(i){return n.size===Rx&&n.clear(),i}),n=e.cache;return e}(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Ox,function(n,i,r,s){e.push(r?s.replace(Lx,"$1"):i||n)}),e}),tp=function(t,e){for(var n=-1,i=t==null?0:t.length,r=Array(i);++n<i;)r[n]=e(t[n],n,t);return r},Nx=1/0,PE=Qi?Qi.prototype:void 0,DE=PE?PE.toString:void 0,Px=function t(e){if(typeof e=="string")return e;if(Gn(e))return tp(e,t)+"";if(Ca(e))return DE?DE.call(e):"";var n=e+"";return n=="0"&&1/e==-Nx?"-0":n},Dx=function(t){return t==null?"":Px(t)},FE=function(t,e){return Gn(t)?t:$f(t,e)?[t]:Mx(Dx(t))},Fx=1/0,eu=function(t){if(typeof t=="string"||Ca(t))return t;var e=t+"";return e=="0"&&1/t==-Fx?"-0":e},xE=function(t,e){for(var n=0,i=(e=FE(e,t)).length;t!=null&&n<i;)t=t[eu(e[n++])];return n&&n==i?t:void 0},xx=function(t,e,n){var i=t==null?void 0:xE(t,e);return i===void 0?n:i},Ux=function(t,e){return t!=null&&e in Object(t)},jx=function(t,e,n){for(var i=-1,r=(e=FE(e,t)).length,s=!1;++i<r;){var o=eu(e[i]);if(!(s=t!=null&&n(t,o)))break;t=t[o]}return s||++i!=r?s:!!(r=t==null?0:t.length)&&qf(r)&&hE(o,r)&&(Gn(t)||uE(t))},Vx=function(t,e){return t!=null&&jx(t,e,Ux)},Bx=1,Hx=2,qx=function(t,e){return $f(t)&&ME(e)?NE(eu(t),e):function(n){var i=xx(n,t);return i===void 0&&i===e?Vx(n,t):LE(e,i,Bx|Hx)}},UE=function(t){return t},Wx=function(t){return function(e){return e==null?void 0:e[t]}},Gx=function(t){return function(e){return xE(e,t)}},zx=function(t){return $f(t)?Wx(eu(t)):Gx(t)},jE=function(t){return typeof t=="function"?t:t==null?UE:typeof t=="object"?Gn(t)?qx(t[0],t[1]):wx(t):zx(t)},VE=function(t,e){return(Gn(t)?rE:YF)(t,jE(e))},Kx=function(t,e){var n=-1,i=Gf(t)?Array(t.length):[];return _E(t,function(r,s,o){i[++n]=e(r,s,o)}),i},Xx=function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t},Qx=function(t,e){if(t!==e){var n=t!==void 0,i=t===null,r=t==t,s=Ca(t),o=e!==void 0,a=e===null,l=e==e,c=Ca(e);if(!a&&!c&&!s&&t>e||s&&o&&l&&!a&&!c||i&&o&&l||!n&&l||!r)return 1;if(!i&&!s&&!c&&t<e||c&&n&&r&&!i&&!s||a&&n&&r||!o&&r||!l)return-1}return 0},Yx=function(t,e,n){for(var i=-1,r=t.criteria,s=e.criteria,o=r.length,a=n.length;++i<o;){var l=Qx(r[i],s[i]);if(l)return i>=a?l:l*(n[i]=="desc"?-1:1)}return t.index-e.index},Jx=function(t,e,n){var i=-1;e=tp(e.length?e:[UE],dE(jE));var r=Kx(t,function(s,o,a){return{criteria:tp(e,function(l){return l(s)}),index:++i,value:s}});return Xx(r,function(s,o){return Yx(s,o,n)})},BE=function(t,e,n,i){return t==null?[]:(Gn(e)||(e=e==null?[]:[e]),Gn(n=i?void 0:n)||(n=n==null?[]:[n]),Jx(t,e,n))},tu=function(t,e,n){return $x(t.local,e,n)===!0},Zx=function(t,e,n){return t.local.streams&&t.local.streams[e]&&t.local.streams[e].stream&&t.local.streams[e].stream["get".concat(n==="video"?"Video":"Audio","Tracks")]()[0]},Sa=function(t,e,n,i){var r=eU(t,e,n,i);return r&&r.pendingTrack},$x=function(t,e,n){if(!t)return!1;var i=function(s){switch(s){case"avatar":return!0;case"staged":return s;default:return!!s}},r=t.public.subscribedTracks;return r&&r[e]?i(r[e][n]):!r||i(r.ALL)},eU=function(t,e,n,i){var r=BE(VE(t.streams,function(s){return s.participantId===e&&s.type===n&&s.pendingTrack&&s.pendingTrack.kind===i}),"starttime","desc");return r&&r[0]},tU=function(t,e){var n=t.local.public.customTracks;if(n&&n[e])return n[e].track},nU=function(t,e,n,i){var r="soup-"+n,s=BE(VE(t.streams,function(o){return o.participantId===e&&o.streamId===r&&o.pendingTrack&&o.pendingTrack.kind===i}),"starttime","desc");return s&&s[0]&&s[0].pendingTrack};function HE(t){for(var e=store.getState(),n=0,i=["cam","screen"];n<i.length;n++)for(var r=i[n],s=0,o=["video","audio"];s<o.length;s++){var a=o[s],l=r==="cam"?a:"screen".concat(a.charAt(0).toUpperCase()+a.slice(1)),c=t.tracks[l];if(c){var u=t.local?Zx(e,r,a):Sa(e,t.session_id,r,a);c.state==="playable"&&(c.track=u),c.persistentTrack=u}}}function qE(t){try{var e=store.getState();for(var n in t.tracks)if(!np(n)){var i=t.tracks[n].kind;if(i){var r=t.local?tU(e,n,i):nU(e,t.session_id,n,i),s=t.tracks[n];r&&s&&s.state==="playable"&&(t.tracks[n].track=r)}else console.error("unknown type for custom track")}}catch(o){console.error(o)}}function np(t){return["video","audio","screenVideo","screenAudio"].includes(t)}function WE(t,e){var n=store.getState();if(t.local){if(t.audio)try{t.audioTrack=n.local.streams.cam.stream.getAudioTracks()[0],t.audioTrack||(t.audio=!1)}catch{}if(t.video)try{t.videoTrack=n.local.streams.cam.stream.getVideoTracks()[0],t.videoTrack||(t.video=!1)}catch{}if(t.screen)try{t.screenVideoTrack=n.local.streams.screen.stream.getVideoTracks()[0],t.screenAudioTrack=n.local.streams.screen.stream.getAudioTracks()[0],t.screenVideoTrack||t.screenAudioTrack||(t.screen=!1)}catch{}}else{var i=!0;try{var r=n.participants[t.session_id];r&&r.public&&r.public.rtcType&&r.public.rtcType.impl==="peer-to-peer"&&r.private&&!["connected","completed"].includes(r.private.peeringState)&&(i=!1)}catch(c){console.error(c)}if(!i)return t.audio=!1,t.audioTrack=!1,t.video=!1,t.videoTrack=!1,t.screen=!1,void(t.screenTrack=!1);try{if(n.streams,t.audio&&tu(n,t.session_id,"cam-audio")){var s=Sa(n,t.session_id,"cam","audio");s&&(e&&e.audioTrack&&e.audioTrack.id===s.id?t.audioTrack=s:s.muted||(t.audioTrack=s)),t.audioTrack||(t.audio=!1)}if(t.video&&tu(n,t.session_id,"cam-video")){var o=Sa(n,t.session_id,"cam","video");o&&(e&&e.videoTrack&&e.videoTrack.id===o.id?t.videoTrack=o:o.muted||(t.videoTrack=o)),t.videoTrack||(t.video=!1)}if(t.screen&&tu(n,t.session_id,"screen-audio")){var a=Sa(n,t.session_id,"screen","audio");a&&(e&&e.screenAudioTrack&&e.screenAudioTrack.id===a.id?t.screenAudioTrack=a:a.muted||(t.screenAudioTrack=a))}if(t.screen&&tu(n,t.session_id,"screen-video")){var l=Sa(n,t.session_id,"screen","video");l&&(e&&e.screenVideoTrack&&e.screenVideoTrack.id===l.id?t.screenVideoTrack=l:l.muted||(t.screenVideoTrack=l))}t.screenVideoTrack||t.screenAudioTrack||(t.screen=!1)}catch(c){console.error("unexpected error matching up tracks",c)}}}function GE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Xt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?GE(Object(n),!0).forEach(function(i){Bc(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):GE(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function iU(t){var e=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var n,i=_i(t);if(e){var r=_i(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Vc(this,n)}}var zE="video",rU="voice",KE={androidInCallNotification:{title:"string",subtitle:"string",iconName:"string",disableForCustomOverride:"boolean"},disableAutoDeviceManagement:{audio:"boolean",video:"boolean"}},Vr={url:{validate:function(t){return typeof t=="string"},help:"url should be a string"},baseUrl:{validate:function(t){return typeof t=="string"},help:"baseUrl should be a string"},token:{validate:function(t){return typeof t=="string"},help:"token should be a string",queryString:"t"},dailyConfig:{validate:function(t){return window._dailyConfig||(window._dailyConfig={}),window._dailyConfig.experimentalGetUserMediaConstraintsModify=t.experimentalGetUserMediaConstraintsModify,delete t.experimentalGetUserMediaConstraintsModify,!0}},reactNativeConfig:{validate:function(t){return function e(n,i){if(i===void 0)return!1;switch(Wn(i)){case"string":return Wn(n)===i;case"object":if(Wn(n)!=="object")return!1;for(var r in n)if(!e(n[r],i[r]))return!1;return!0;default:return!1}}(t,KE)},help:"reactNativeConfig should look like ".concat(JSON.stringify(KE),", all fields optional")},lang:{validate:function(t){return["de","en-us","en","es","fi","fr","it","jp","ka","nl","no","pl","pt","ru","sv","tr","user"].includes(t)},help:"language not supported. Options are: de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, ru, sv, tr, user"},userName:!0,activeSpeakerMode:!0,showLeaveButton:!0,showLocalVideo:!0,showParticipantsBar:!0,showFullscreenButton:!0,iframeStyle:!0,customLayout:!0,cssFile:!0,cssText:!0,bodyClass:!0,videoSource:{validate:function(t,e){return e._preloadCache.videoDeviceId=t,!0}},audioSource:{validate:function(t,e){return e._preloadCache.audioDeviceId=t,!0}},subscribeToTracksAutomatically:{validate:function(t,e){return e._preloadCache.subscribeToTracksAutomatically=t,!0}},theme:{validate:function(t){var e=["accent","accentText","background","backgroundAccent","baseText","border","mainAreaBg","mainAreaBgAccent","mainAreaText","supportiveText"],n=function(i){for(var r=0,s=Object.keys(i);r<s.length;r++){var o=s[r];if(!e.includes(o))return console.error('unsupported color "'.concat(o,'". Valid colors: ').concat(e.join(", "))),!1;if(!i[o].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i))return console.error("".concat(o,' theme color should be provided in valid hex color format. Received: "').concat(i[o],'"')),!1}return!0};return Wn(t)==="object"&&("light"in t&&"dark"in t||"colors"in t)?"light"in t&&"dark"in t?"colors"in t.light?"colors"in t.dark?n(t.light.colors)&&n(t.dark.colors):(console.error('Dark theme is missing "colors" property.',t),!1):(console.error('Light theme is missing "colors" property.',t),!1):n(t.colors):(console.error('Theme must contain either both "light" and "dark" properties, or "colors".',t),!1)},help:"unsupported theme configuration. Check error logs for detailed info."},layoutConfig:{validate:function(t){if("grid"in t){var e=t.grid;if("maxTilesPerPage"in e){if(!Number.isInteger(e.maxTilesPerPage))return console.error("grid.maxTilesPerPage should be an integer. You passed ".concat(e.maxTilesPerPage,".")),!1;if(e.maxTilesPerPage>49)return console.error("grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."),!1}if("minTilesPerPage"in e){if(!Number.isInteger(e.minTilesPerPage))return console.error("grid.minTilesPerPage should be an integer. You passed ".concat(e.minTilesPerPage,".")),!1;if(e.minTilesPerPage<1)return console.error("grid.minTilesPerPage can't be lower than 1."),!1;if("maxTilesPerPage"in e&&e.minTilesPerPage>e.maxTilesPerPage)return console.error("grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."),!1}}return!0},help:"unsupported layoutConfig. Check error logs for detailed info."},receiveSettings:{validate:function(t){return XE(t,{allowAllParticipantsKey:!1})},help:JE({allowAllParticipantsKey:!1})},inputSettings:{validate:function(t){return QE(t)},help:YE()},layout:{validate:function(t){return t==="custom-v1"||t==="browser"||t==="none"},help:'layout may only be set to "custom-v1"',queryString:"layout"},emb:{queryString:"emb"},embHref:{queryString:"embHref"},dailyJsVersion:{queryString:"dailyJsVersion"}},nu={styles:{validate:function(t){for(var e in t)if(e!=="cam"&&e!=="screen")return!1;if(t.cam){for(var e in t.cam)if(e!=="div"&&e!=="video")return!1}if(t.screen){for(var e in t.screen)if(e!=="div"&&e!=="video")return!1}return!0},help:"styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }"},setSubscribedTracks:{validate:function(t,e,n){if(e._preloadCache.subscribeToTracksAutomatically)return!1;var i=[!0,!1,"staged"];if(i.includes(t)||!Kt()&&t==="avatar")return!0;for(var r in t)if(!["audio","video","screenAudio","screenVideo"].includes(r)||!i.includes(t[r]))return!1;return!0},help:"setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: "+"true".concat(Kt()?"":" | 'avatar'"," | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }")},setAudio:!0,setVideo:!0,eject:!0};function Aa(t){var e={};for(var n in t)t[n]instanceof MediaStreamTrack?e[n]=Gc:(n==="dailyConfig"&&(t[n].modifyLocalSdpHook&&(window._dailyConfig&&(window._dailyConfig.modifyLocalSdpHook=t[n].modifyLocalSdpHook),delete t[n].modifyLocalSdpHook),t[n].modifyRemoteSdpHook&&(window._dailyConfig&&(window._dailyConfig.modifyRemoteSdpHook=t[n].modifyRemoteSdpHook),delete t[n].modifyRemoteSdpHook)),e[n]=t[n]);return e}function qe(){if(Kt())throw new Error("This daily-js method is not currently supported in React Native")}function ip(){if(!Kt())throw new Error("This daily-js method is only supported in React Native")}function XE(t,e){for(var n=e.allowAllParticipantsKey,i=function(h){var d=["local"];return n||d.push("*"),h&&!d.includes(h)},r=function(h){return!!(h.layer===void 0||Number.isInteger(h.layer)&&h.layer>=0||h.layer==="inherit")},s=function(h){return!!h&&!(h.video&&!r(h.video))&&!(h.screenVideo&&!r(h.screenVideo))},o=0,a=Object.entries(t);o<a.length;o++){var l=qD(a[o],2),c=l[0],u=l[1];if(!i(c)||!s(u))return!1}return!0}function QE(t){return Wn(t)==="object"&&!(!t.video||Wn(t.video)!=="object")&&!!function(e){if(!e||Wn(e)!=="object"||Object.keys(e).length===0||e.type&&(n=e.type,typeof n!="string"||!Object.values(xf).includes(n)))return!1;var n;return!(e.publish!==void 0&&typeof e.publish!="boolean"||e.config&&(Wn(e.config)!=="object"||!function(i,r){var s=Object.keys(r);if(s.length===0)return!0;var o="invalid object in inputSettings -> video -> processor -> config";switch(i){case xf.BGBLUR:if(s.length>1||s[0]!=="strength")throw new Error(o);if(typeof r.strength!="number"||r.strength<=0||r.strength>1||isNaN(r.strength))throw new Error("".concat(o,"; expected: {0 < strength <= 1}, got: ").concat(r.strength));default:return!0}}(e.type,e.config)))}(t.video.processor)}function YE(){var t=Object.values(xf).join(" | ");return"inputSettings must be of the form: { video: { processor: [ ".concat(t," ] }, publish?: boolean, config?: {} }")}function JE(t){var e=t.allowAllParticipantsKey;return"receiveSettings must be of the form { [<remote participant id> | ".concat(rF).concat(e?' | "'.concat(sF,'"'):"","]: ")+'{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}'}var bV=function(t){jc(n,Fc);var e=iU(n);function n(i){var r,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(zi(this,n),r=e.call(this),Bc(Uc(r),"handleNativeAppActiveStateChange",function(a){r.disableReactNativeAutoDeviceManagement("video")||(a?r.camUnmutedBeforeLosingNativeActiveState&&r.setLocalVideo(!0):(r.camUnmutedBeforeLosingNativeActiveState=r.localVideo(),r.camUnmutedBeforeLosingNativeActiveState&&r.setLocalVideo(!1)))}),Bc(Uc(r),"handleNativeAudioFocusChange",function(a){r.disableReactNativeAutoDeviceManagement("audio")||(r._hasNativeAudioFocus=a,r.toggleParticipantAudioBasedOnNativeAudioFocus(),r._hasNativeAudioFocus?r.micUnmutedBeforeLosingNativeAudioFocus&&r.setLocalAudio(!0):(r.micUnmutedBeforeLosingNativeAudioFocus=r.localAudio(),r.setLocalAudio(!1)))}),s.dailyJsVersion="0.21.0",r._iframe=i,r._callObjectMode=s.layout==="none"&&!r._iframe,r._preloadCache={subscribeToTracksAutomatically:!0,audioDeviceId:null,videoDeviceId:null,outputDeviceId:null},r._callObjectMode&&(window._dailyPreloadCache=r._preloadCache),s.showLocalVideo!==void 0?r._callObjectMode?console.error("showLocalVideo is not available in call object mode"):r._showLocalVideo=!!s.showLocalVideo:r._showLocalVideo=!0,s.showParticipantsBar!==void 0?r._callObjectMode?console.error("showParticipantsBar is not available in call object mode"):r._showParticipantsBar=!!s.showParticipantsBar:r._showParticipantsBar=!0,s.activeSpeakerMode!==void 0?r._callObjectMode?console.error("activeSpeakerMode is not available in call object mode"):r._activeSpeakerMode=!!s.activeSpeakerMode:r._activeSpeakerMode=!1,s.receiveSettings?r._callObjectMode?r._receiveSettings=s.receiveSettings:console.error("receiveSettings is only available in call object mode"):r._receiveSettings={},r._inputSettings={},s.inputSettings&&(r._inputSettings=s.inputSettings),r.validateProperties(s),r.properties=Xt({},s),r._callObjectLoader=r._callObjectMode?new vF:null,r._meetingState=KI,r._isPreparingToJoin=!1,r._accessState={access:XI},r._nativeInCallAudioMode=zE,r._participants={},r._waitingParticipants={},r._inputEventsOn={},r._network={threshold:"good",quality:100},r._activeSpeaker={},r._callFrameId=jf(),r._messageChannel=Kt()?new dF:new uF,r._iframe&&(r._iframe.requestFullscreen?r._iframe.addEventListener("fullscreenchange",function(a){document.fullscreenElement===r._iframe?(r.emit(Us,{action:Us}),r.sendMessageToCallMachine({action:Us})):(r.emit(js,{action:js}),r.sendMessageToCallMachine({action:js}))}):r._iframe.webkitRequestFullscreen&&r._iframe.addEventListener("webkitfullscreenchange",function(a){document.webkitFullscreenElement===r._iframe?(r.emit(Us,{action:Us}),r.sendMessageToCallMachine({action:Us})):(r.emit(js,{action:js}),r.sendMessageToCallMachine({action:js}))})),Kt()){var o=r.nativeUtils();o.addAudioFocusChangeListener&&o.removeAudioFocusChangeListener&&o.addAppActiveStateChangeListener&&o.removeAppActiveStateChangeListener||console.warn("expected (add|remove)(AudioFocus|AppActiveState)ChangeListener to be available in React Native"),r._hasNativeAudioFocus=!0,o.addAudioFocusChangeListener(r.handleNativeAudioFocusChange),o.addAppActiveStateChangeListener(r.handleNativeAppActiveStateChange)}return r._messageChannel.addListenerForMessagesFromCallMachine(r.handleMessageFromCallMachine,r._callFrameId,Uc(r)),r}return Ki(n,null,[{key:"supportedBrowser",value:function(){if(Kt())return{supported:!0,mobile:!0,name:"React Native",version:null,supportsScreenShare:!1,supportsSfu:!0,supportsVideoProcessing:!1};var i=class{static getParser(r,s=!1){if(typeof r!="string")throw new Error("UserAgent should be a string");return new zI(r,s)}static parse(r){return new zI(r).getResult()}static get BROWSER_MAP(){return GI}static get ENGINE_MAP(){return Xi}static get OS_MAP(){return En}static get PLATFORMS_MAP(){return At}}.getParser(ei());return{supported:!!YI(),mobile:i.getPlatformType()==="mobile",name:i.getBrowserName(),version:i.getBrowserVersion(),supportsScreenShare:!!oF(),supportsSfu:!!Uf(),supportsVideoProcessing:lF()}}},{key:"version",value:function(){return"0.21.0"}},{key:"createCallObject",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return i.layout="none",new n(null,i)}},{key:"wrap",value:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(qe(),!i||!i.contentWindow||typeof i.src!="string")throw new Error("DailyIframe::Wrap needs an iframe-like first argument");return r.layout||(r.customLayout?r.layout="custom-v1":r.layout="browser"),new n(i,r)}},{key:"createFrame",value:function(i,r){var s,o;qe(),i&&r?(s=i,o=r):i&&i.append?(s=i,o={}):(s=document.body,o=i||{});var a=o.iframeStyle;a||(a=s===document.body?{position:"fixed",border:"1px solid black",backgroundColor:"white",width:"375px",height:"450px",right:"1em",bottom:"1em"}:{border:0,width:"100%",height:"100%"});var l=document.createElement("iframe");window.navigator&&window.navigator.userAgent.match(/Chrome\/61\./)?l.allow="microphone, camera":l.allow="microphone; camera; autoplay; display-capture",l.style.visibility="hidden",s.appendChild(l),l.style.visibility=null,Object.keys(a).forEach(function(c){return l.style[c]=a[c]}),o.layout||(o.customLayout?o.layout="custom-v1":o.layout="browser");try{return new n(l,o)}catch(c){throw s.removeChild(l),c}}},{key:"createTransparentFrame",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};qe();var r=document.createElement("iframe");return r.allow="microphone; camera; autoplay",r.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      pointer-events: none;
    `,document.body.appendChild(r),i.layout||(i.layout="custom-v1"),n.wrap(r,i)}}]),Ki(n,[{key:"destroy",value:function(){var i=He(Z.mark(function r(){var s,o,a;return Z.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(l.prev=0,![pn,Ff].includes(this._meetingState)){l.next=4;break}return l.next=4,this.leave();case 4:l.next=8;break;case 6:l.prev=6,l.t0=l.catch(0);case 8:(s=this._iframe)&&(o=s.parentElement)&&o.removeChild(s),this._messageChannel.removeListener(this.handleMessageFromCallMachine),Kt()&&((a=this.nativeUtils()).removeAudioFocusChangeListener(this.handleNativeAudioFocusChange),a.removeAppActiveStateChangeListener(this.handleNativeAppActiveStateChange)),this.resetMeetingDependentVars();case 13:case"end":return l.stop()}},r,this,[[0,6]])}));return function(){return i.apply(this,arguments)}}()},{key:"loadCss",value:function(i){var r=i.bodyClass,s=i.cssFile,o=i.cssText;return qe(),this.sendMessageToCallMachine({action:"load-css",cssFile:this.absoluteUrl(s),bodyClass:r,cssText:o}),this}},{key:"iframe",value:function(){return qe(),this._iframe}},{key:"meetingState",value:function(){return this._meetingState}},{key:"accessState",value:function(){if(!this._callObjectMode)throw new Error("accessState() currently only supported in call object mode");return this._accessState}},{key:"participants",value:function(){return this._participants}},{key:"waitingParticipants",value:function(){if(!this._callObjectMode)throw new Error("waitingParticipants() currently only supported in call object mode");return this._waitingParticipants}},{key:"validateParticipantProperties",value:function(i,r){for(var s in r){if(!nu[s])throw new Error("unrecognized updateParticipant property ".concat(s));if(nu[s].validate&&!nu[s].validate(r[s],this,this._participants[i]))throw new Error(nu[s].help)}}},{key:"updateParticipant",value:function(i,r){return this._participants.local&&this._participants.local.session_id===i&&(i="local"),i&&r&&this._participants[i]&&(this.validateParticipantProperties(i,r),this.sendMessageToCallMachine({action:"update-participant",id:i,properties:r})),this}},{key:"updateParticipants",value:function(i){var r=this._participants.local&&this._participants.local.session_id;for(var s in i)s===r&&(s="local"),s&&i[s]&&(this._participants[s]||s==="*")?this.validateParticipantProperties(s,i[s]):(console.warn("unrecognized participant in updateParticipants: ".concat(s)),delete i[s]);return this.sendMessageToCallMachine({action:"update-participants",participants:i}),this}},{key:"updateWaitingParticipant",value:function(){var i=He(Z.mark(function r(){var s,o,a=this,l=arguments;return Z.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(s=l.length>0&&l[0]!==void 0?l[0]:"",o=l.length>1&&l[1]!==void 0?l[1]:{},this._callObjectMode){c.next=4;break}throw new Error("updateWaitingParticipant() currently only supported in call object mode");case 4:if(this._meetingState===pn){c.next=6;break}throw new Error("updateWaitingParticipant() only supported for joined meetings");case 6:if(typeof s=="string"&&Wn(o)==="object"){c.next=8;break}throw new Error("updateWaitingParticipant() must take an id string and a updates object");case 8:return c.abrupt("return",new Promise(function(u,h){a.sendMessageToCallMachine({action:"daily-method-update-waiting-participant",id:s,updates:o},function(d){d.error&&h(d.error),d.id||h(new Error("unknown error in updateWaitingParticipant()")),u({id:d.id})})}));case 9:case"end":return c.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"updateWaitingParticipants",value:function(){var i=He(Z.mark(function r(){var s,o=this,a=arguments;return Z.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(s=a.length>0&&a[0]!==void 0?a[0]:{},this._callObjectMode){l.next=3;break}throw new Error("updateWaitingParticipants() currently only supported in call object mode");case 3:if(this._meetingState===pn){l.next=5;break}throw new Error("updateWaitingParticipants() only supported for joined meetings");case 5:if(Wn(s)==="object"){l.next=7;break}throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");case 7:return l.abrupt("return",new Promise(function(c,u){o.sendMessageToCallMachine({action:"daily-method-update-waiting-participants",updatesById:s},function(h){h.error&&u(h.error),h.ids||u(new Error("unknown error in updateWaitingParticipants()")),c({ids:h.ids})})}));case 8:case"end":return l.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"requestAccess",value:function(){var i=He(Z.mark(function r(){var s,o,a,l,c,u=this,h=arguments;return Z.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(s=h.length>0&&h[0]!==void 0?h[0]:{},o=s.access,a=o===void 0?{level:"full"}:o,l=s.name,c=l===void 0?"":l,this._callObjectMode){d.next=3;break}throw new Error("requestAccess() currently only supported in call object mode");case 3:if(this._meetingState===pn){d.next=5;break}throw new Error("requestAccess() only supported for joined meetings");case 5:return d.abrupt("return",new Promise(function(f,p){u.sendMessageToCallMachine({action:"daily-method-request-access",access:a,name:c},function(g){g.error&&p(g.error),g.access||p(new Error("unknown error in requestAccess()")),f({access:g.access,granted:g.granted})})}));case 6:case"end":return d.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"localAudio",value:function(){return this._participants.local?this._participants.local.audio:null}},{key:"localVideo",value:function(){return this._participants.local?this._participants.local.video:null}},{key:"setLocalAudio",value:function(i){return this.sendMessageToCallMachine({action:"local-audio",state:i}),this}},{key:"setLocalVideo",value:function(i){return this.sendMessageToCallMachine({action:"local-video",state:i}),this}},{key:"getReceiveSettings",value:function(){var i=He(Z.mark(function r(s){var o,a,l,c=this,u=arguments;return Z.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(o=u.length>1&&u[1]!==void 0?u[1]:{},a=o.showInheritedValues,l=a!==void 0&&a,this._callObjectMode){h.next=3;break}throw new Error("getReceiveSettings() only supported in call object mode");case 3:h.t0=Wn(s),h.next=h.t0==="string"?6:h.t0==="undefined"?7:8;break;case 6:return h.abrupt("return",new Promise(function(d){c.sendMessageToCallMachine({action:"get-single-participant-receive-settings",id:s,showInheritedValues:l},function(f){d(f.receiveSettings)})}));case 7:return h.abrupt("return",this._receiveSettings);case 8:throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments');case 9:case"end":return h.stop()}},r,this)}));return function(r){return i.apply(this,arguments)}}()},{key:"updateReceiveSettings",value:function(){var i=He(Z.mark(function r(s){var o=this;return Z.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(this._callObjectMode){a.next=2;break}throw new Error("updateReceiveSettings() only supported in call object mode");case 2:if(XE(s,{allowAllParticipantsKey:!0})){a.next=4;break}throw new Error(JE({allowAllParticipantsKey:!0}));case 4:if(this._meetingState===pn){a.next=6;break}throw new Error("updateReceiveSettings() is only allowed when joined. To specify receive settings earlier, use the receiveSettings config property.");case 6:return a.abrupt("return",new Promise(function(l){o.sendMessageToCallMachine({action:"update-receive-settings",receiveSettings:s},function(c){l({receiveSettings:c.receiveSettings})})}));case 7:case"end":return a.stop()}},r,this)}));return function(r){return i.apply(this,arguments)}}()},{key:"getInputSettings",value:function(){return this._inputSettings}},{key:"updateInputSettings",value:function(){var i=He(Z.mark(function r(s){var o=this;return Z.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(QE(s)){a.next=2;break}throw new Error(YE());case 2:return a.abrupt("return",new Promise(function(l){o.sendMessageToCallMachine({action:"update-input-settings",inputSettings:s},function(c){l({inputSettings:c.inputSettings})})}));case 3:case"end":return a.stop()}},r)}));return function(r){return i.apply(this,arguments)}}()},{key:"setBandwidth",value:function(i){var r=i.kbs,s=i.trackConstraints;return qe(),this.sendMessageToCallMachine({action:"set-bandwidth",kbs:r,trackConstraints:s}),this}},{key:"getDailyLang",value:function(){var i=this;return qe(),new Promise(function(){var r=He(Z.mark(function s(o){var a;return Z.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:a=function(c){delete c.action,delete c.callbackStamp,o(c)},i.sendMessageToCallMachine({action:"get-daily-lang"},a);case 2:case"end":return l.stop()}},s)}));return function(s){return r.apply(this,arguments)}}())}},{key:"setDailyLang",value:function(i){return qe(),this.sendMessageToCallMachine({action:"set-daily-lang",lang:i}),this}},{key:"getMeetingSession",value:function(){var i=He(Z.mark(function r(){var s=this;return Z.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(this._meetingState===pn){o.next=2;break}throw new Error("getMeetingSession() is only allowed when joined");case 2:return o.abrupt("return",new Promise(function(){var a=He(Z.mark(function l(c){var u;return Z.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:u=function(d){delete d.action,delete d.callbackStamp,delete d.callFrameId,c(d)},s.sendMessageToCallMachine({action:"get-meeting-session"},u);case 2:case"end":return h.stop()}},l)}));return function(l){return a.apply(this,arguments)}}()));case 3:case"end":return o.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"setUserName",value:function(i,r){var s=this;return this.properties.userName=i,new Promise(function(){var o=He(Z.mark(function a(l){var c;return Z.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:c=function(h){delete h.action,delete h.callbackStamp,l(h)},s.sendMessageToCallMachine({action:"set-user-name",name:i!=null?i:"",thisMeetingOnly:Kt()||!!r&&!!r.thisMeetingOnly},c);case 2:case"end":return u.stop()}},a)}));return function(a){return o.apply(this,arguments)}}())}},{key:"startCamera",value:function(){var i=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(function(){var s=He(Z.mark(function o(a,l){var c;return Z.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(c=function(h){delete h.action,delete h.callbackStamp,a(h)},!i.needsLoad()){u.next=10;break}return u.prev=2,u.next=5,i.load(r);case 5:u.next=10;break;case 7:u.prev=7,u.t0=u.catch(2),l(u.t0);case 10:i.sendMessageToCallMachine({action:"start-camera",properties:Aa(i.properties),preloadCache:Aa(i._preloadCache)},c);case 11:case"end":return u.stop()}},o,null,[[2,7]])}));return function(o,a){return s.apply(this,arguments)}}())}},{key:"cycleCamera",value:function(){var i=this;return new Promise(function(r,s){i.sendMessageToCallMachine({action:"cycle-camera"},function(o){r({device:o.device})})})}},{key:"cycleMic",value:function(){var i=this;return qe(),new Promise(function(r,s){i.sendMessageToCallMachine({action:"cycle-mic"},function(o){r({device:o.device})})})}},{key:"getCameraFacingMode",value:function(){var i=this;return ip(),new Promise(function(r,s){i.sendMessageToCallMachine({action:"get-camera-facing-mode"},function(o){r(o.facingMode)})})}},{key:"setInputDevices",value:function(i){var r=i.audioDeviceId,s=i.videoDeviceId,o=i.audioSource,a=i.videoSource;return console.warn("setInputDevices() is deprecated: instead use setInputDevicesAsync(), which returns a Promise"),this.setInputDevicesAsync({audioDeviceId:r,videoDeviceId:s,audioSource:o,videoSource:a}),this}},{key:"setInputDevicesAsync",value:function(){var i=He(Z.mark(function r(s){var o,a,l,c,u=this;return Z.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(o=s.audioDeviceId,a=s.videoDeviceId,l=s.audioSource,c=s.videoSource,qe(),l!==void 0&&(o=l),c!==void 0&&(a=c),o&&(this._preloadCache.audioDeviceId=o),a&&(this._preloadCache.videoDeviceId=a),!this._callObjectMode||!this.needsLoad()){h.next=8;break}return h.abrupt("return",{camera:{deviceId:this._preloadCache.videoDeviceId},mic:{deviceId:this._preloadCache.audioDeviceId},speaker:{deviceId:this._preloadCache.outputDeviceId}});case 8:return o instanceof MediaStreamTrack&&(o=Gc),a instanceof MediaStreamTrack&&(a=Gc),h.abrupt("return",new Promise(function(d){u.sendMessageToCallMachine({action:"set-input-devices",audioDeviceId:o,videoDeviceId:a},function(f){delete f.action,delete f.callbackStamp,f.returnPreloadCache?d({camera:{deviceId:u._preloadCache.videoDeviceId},mic:{deviceId:u._preloadCache.audioDeviceId},speaker:{deviceId:u._preloadCache.outputDeviceId}}):d(f)})}));case 11:case"end":return h.stop()}},r,this)}));return function(r){return i.apply(this,arguments)}}()},{key:"setOutputDevice",value:function(i){var r=i.outputDeviceId;return qe(),r&&(this._preloadCache.outputDeviceId=r),this._callObjectMode&&this._meetingState!==pn?this:(this.sendMessageToCallMachine({action:"set-output-device",outputDeviceId:r}),this)}},{key:"getInputDevices",value:function(){var i=He(Z.mark(function r(){var s=this;return Z.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(qe(),!this._callObjectMode||!this.needsLoad()){o.next=3;break}return o.abrupt("return",{camera:{deviceId:this._preloadCache.videoDeviceId},mic:{deviceId:this._preloadCache.audioDeviceId},speaker:{deviceId:this._preloadCache.outputDeviceId}});case 3:return o.abrupt("return",new Promise(function(a,l){s.sendMessageToCallMachine({action:"get-input-devices"},function(c){delete c.action,delete c.callbackStamp,c.returnPreloadCache?a({camera:{deviceId:s._preloadCache.videoDeviceId},mic:{deviceId:s._preloadCache.audioDeviceId},speaker:{deviceId:s._preloadCache.outputDeviceId}}):a(c)})}));case 4:case"end":return o.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"nativeInCallAudioMode",value:function(){return ip(),this._nativeInCallAudioMode}},{key:"setNativeInCallAudioMode",value:function(i){if(ip(),[zE,rU].includes(i)){if(i!==this._nativeInCallAudioMode)return this._nativeInCallAudioMode=i,!this.disableReactNativeAutoDeviceManagement("audio")&&this.isMeetingPendingOrOngoing(this._meetingState,this._isPreparingToJoin)&&this.nativeUtils().setAudioMode(this._nativeInCallAudioMode),this}else console.error("invalid in-call audio mode specified: ",i)}},{key:"preAuth",value:function(){var i=He(Z.mark(function r(){var s,o,a,l=this,c=arguments;return Z.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(s=c.length>0&&c[0]!==void 0?c[0]:{},this._callObjectMode){u.next=3;break}throw new Error("preAuth() currently only supported in call object mode");case 3:if(![Wc,pn].includes(this._meetingState)){u.next=5;break}throw new Error("preAuth() not supported after joining a meeting");case 5:if(!this.needsLoad()){u.next=8;break}return u.next=8,this.load(s);case 8:if(s.url){u.next=10;break}throw new Error("preAuth() requires at least a url to be provided");case 10:if(o=Ia(s.url),a=Ia(this.properties.url||this.properties.baseUrl),o===a){u.next=14;break}throw new Error("url in preAuth() has a different bundle url than the one loaded (".concat(a," -> ").concat(o,")"));case 14:return this.validateProperties(s),this.properties=Xt(Xt({},this.properties),s),u.abrupt("return",new Promise(function(h,d){l.sendMessageToCallMachine({action:"daily-method-preauth",properties:Aa(l.properties)},function(f){return f.error?d(f.error):f.access?(l._didPreAuth=!0,void h({access:f.access})):d(new Error("unknown error in preAuth()"))})}));case 17:case"end":return u.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"load",value:function(){var i=He(Z.mark(function r(s){var o=this;return Z.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(this.needsLoad()){a.next=2;break}return a.abrupt("return");case 2:if(s&&(this.validateProperties(s),this.properties=Xt(Xt({},this.properties),s)),this._callObjectMode||this.properties.url){a.next=5;break}throw new Error("can't load iframe meeting because url property isn't set");case 5:this.updateMeetingState(Ff);try{this.emit("loading",{action:"loading"})}catch(l){console.log("could not emit 'loading'",l)}if(!this._callObjectMode){a.next=11;break}return a.abrupt("return",new Promise(function(l,c){o._callObjectLoader.cancel(),o._callObjectLoader.load(o.properties.url||o.properties.baseUrl,o._callFrameId,function(u){o.updateMeetingState("loaded"),u&&o.emit("loaded",{action:"loaded"}),l()},function(u,h){o.emit("load-attempt-failed",{action:"load-attempt-failed",errorMsg:u}),h||(o.updateMeetingState(xr),o.resetMeetingDependentVars(),o.emit("error",{action:"error",errorMsg:u}),c(u))})}));case 11:return this._iframe.src=this.assembleMeetingUrl(),a.abrupt("return",new Promise(function(l,c){o._loadedCallback=function(u){if(o._meetingState!==xr){for(var h in o.updateMeetingState("loaded"),(o.properties.cssFile||o.properties.cssText)&&o.loadCss(o.properties),o._inputEventsOn)o.sendMessageToCallMachine({action:"register-input-handler",on:h});l()}else c(u)}}));case 13:case"end":return a.stop()}},r,this)}));return function(r){return i.apply(this,arguments)}}()},{key:"join",value:function(){var i=He(Z.mark(function r(){var s,o,a,l,c=this,u=arguments;return Z.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(s=u.length>0&&u[0]!==void 0?u[0]:{},o=!1,!this.needsLoad()){h.next=15;break}return this.updateIsPreparingToJoin(!0),h.prev=4,h.next=7,this.load(s);case 7:h.next=13;break;case 9:return h.prev=9,h.t0=h.catch(4),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject(h.t0));case 13:h.next=42;break;case 15:if(o=!(!this.properties.cssFile&&!this.properties.cssText),!this._didPreAuth){h.next=25;break}if(!s.url||s.url===this.properties.url){h.next=21;break}return console.error("url in join() is different than the one used in preAuth()"),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject());case 21:if(!s.token||s.token===this.properties.token){h.next=25;break}return console.error("token in join() is different than the one used in preAuth()"),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject());case 25:if(!s.url){h.next=40;break}if(!this._callObjectMode){h.next=36;break}if(a=Ia(s.url),l=Ia(this.properties.url||this.properties.baseUrl),a===l){h.next=33;break}return console.error("url in join() has a different bundle url than the one loaded (".concat(l," -> ").concat(a,")")),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject());case 33:this.properties.url=s.url,h.next=40;break;case 36:if(!s.url||s.url===this.properties.url){h.next=40;break}return console.error("url in join() is different than the one used in load() (".concat(this.properties.url," -> ").concat(s.url,")")),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject());case 40:this.validateProperties(s),this.properties=Xt(Xt({},this.properties),s);case 42:if(s.showLocalVideo!==void 0&&(this._callObjectMode?console.error("showLocalVideo is not available in callObject mode"):this._showLocalVideo=!!s.showLocalVideo),s.showParticipantsBar!==void 0&&(this._callObjectMode?console.error("showParticipantsBar is not available in callObject mode"):this._showParticipantsBar=!!s.showParticipantsBar),this._meetingState!==pn&&this._meetingState!==Wc){h.next=48;break}return console.warn("already joined meeting, call leave() before joining again"),this.updateIsPreparingToJoin(!1),h.abrupt("return");case 48:this.updateMeetingState(Wc,!1);try{this.emit("joining-meeting",{action:"joining-meeting"})}catch(d){console.log("could not emit 'joining-meeting'",d)}return this.sendMessageToCallMachine({action:"join-meeting",properties:Aa(this.properties),preloadCache:Aa(this._preloadCache)}),h.abrupt("return",new Promise(function(d,f){c._joinedCallback=function(p,g){if(c._meetingState!==xr){if(c.updateMeetingState(pn),p)for(var m in p)c._callObjectMode&&(HE(p[m]),qE(p[m]),WE(p[m],c._participants[m])),c._participants[m]=Xt({},p[m]),c.toggleParticipantAudioBasedOnNativeAudioFocus();o&&c.loadCss(c.properties),d(p)}else f(g)}}));case 52:case"end":return h.stop()}},r,this,[[4,9]])}));return function(){return i.apply(this,arguments)}}()},{key:"leave",value:function(){var i=He(Z.mark(function r(){var s=this;return Z.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",new Promise(function(a,l){if(s._callObjectLoader&&!s._callObjectLoader.loaded){s._callObjectLoader.cancel(),s.updateMeetingState(Fr),s.resetMeetingDependentVars();try{s.emit(Fr,{action:Fr})}catch(c){console.log("could not emit 'left-meeting'",c)}a()}else s._meetingState===Fr||s._meetingState===xr?a():s.sendMessageToCallMachine({action:"leave-meeting"},function(){a()})}));case 1:case"end":return o.stop()}},r)}));return function(){return i.apply(this,arguments)}}()},{key:"startScreenShare",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};qe(),i.mediaStream&&(this._preloadCache.screenMediaStream=i.mediaStream,i.mediaStream=Gc),this.sendMessageToCallMachine({action:"local-screen-start",captureOptions:i})}},{key:"stopScreenShare",value:function(){qe(),this.sendMessageToCallMachine({action:"local-screen-stop"})}},{key:"startRecording",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};qe(),this.sendMessageToCallMachine(Xt({action:"local-recording-start"},i))}},{key:"updateRecording",value:function(i){var r=i.layout,s=r===void 0?{preset:"default"}:r;this.sendMessageToCallMachine({action:"daily-method-update-recording",layout:s})}},{key:"stopRecording",value:function(){qe(),this.sendMessageToCallMachine({action:"local-recording-stop"})}},{key:"startLiveStreaming",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.sendMessageToCallMachine(Xt({action:"daily-method-start-live-streaming"},i))}},{key:"updateLiveStreaming",value:function(i){var r=i.layout,s=r===void 0?{preset:"default"}:r;this.sendMessageToCallMachine({action:"daily-method-update-live-streaming",layout:s})}},{key:"stopLiveStreaming",value:function(){this.sendMessageToCallMachine({action:"daily-method-stop-live-streaming"})}},{key:"startTranscription",value:function(){this.sendMessageToCallMachine({action:"daily-method-start-transcription"})}},{key:"stopTranscription",value:function(){this.sendMessageToCallMachine({action:"daily-method-stop-transcription"})}},{key:"getNetworkStats",value:function(){var i=this;return this._meetingState!==pn?{stats:{latest:{}}}:new Promise(function(r,s){i.sendMessageToCallMachine({action:"get-calc-stats"},function(o){r(Xt({stats:o.stats},i._network))})})}},{key:"getActiveSpeaker",value:function(){return qe(),this._activeSpeaker}},{key:"setActiveSpeakerMode",value:function(i){return qe(),this.sendMessageToCallMachine({action:"set-active-speaker-mode",enabled:i}),this}},{key:"activeSpeakerMode",value:function(){return qe(),this._activeSpeakerMode}},{key:"subscribeToTracksAutomatically",value:function(){return this._preloadCache.subscribeToTracksAutomatically}},{key:"setSubscribeToTracksAutomatically",value:function(i){if(this._meetingState!==pn)throw new Error("setSubscribeToTracksAutomatically() is only allowed when joined");return this._preloadCache.subscribeToTracksAutomatically=i,this.sendMessageToCallMachine({action:"daily-method-subscribe-to-tracks-automatically",enabled:i}),this}},{key:"enumerateDevices",value:function(){var i=He(Z.mark(function r(){var s,o=this;return Z.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(qe(),!this._callObjectMode){a.next=6;break}return a.next=4,navigator.mediaDevices.enumerateDevices();case 4:return s=a.sent,a.abrupt("return",{devices:s.map(function(l){return JSON.parse(JSON.stringify(l))})});case 6:return a.abrupt("return",new Promise(function(l,c){o.sendMessageToCallMachine({action:"enumerate-devices"},function(u){l({devices:u.devices})})}));case 7:case"end":return a.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"sendAppMessage",value:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"*";if(JSON.stringify(i).length>4096)throw new Error("Message data too large. Max size is 4096");return this.sendMessageToCallMachine({action:"app-msg",data:i,to:r}),this}},{key:"addFakeParticipant",value:function(i){return qe(),this.sendMessageToCallMachine(Xt({action:"add-fake-participant"},i)),this}},{key:"setShowNamesMode",value:function(i){return qe(),i&&i!=="always"&&i!=="never"?(console.error('setShowNamesMode argument should be "always", "never", or false'),this):(this.sendMessageToCallMachine({action:"set-show-names",mode:i}),this)}},{key:"setShowLocalVideo",value:function(){var i=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];return qe(),typeof i!="boolean"?(console.error("setShowLocalVideo only accepts a boolean value"),this):this._callObjectMode?(console.error("setShowLocalVideo is not available in callObject mode"),this):this._meetingState!==pn?(console.error("the meeting must be joined before calling setShowLocalVideo"),this):(this.sendMessageToCallMachine({action:"set-show-local-video",show:i}),this._showLocalVideo=i,this)}},{key:"showLocalVideo",value:function(){return qe(),this._callObjectMode?(console.error("showLocalVideo is not available in callObject mode"),this):this._showLocalVideo}},{key:"setShowParticipantsBar",value:function(){var i=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];return qe(),typeof i!="boolean"?(console.error("setShowParticipantsBar only accepts a boolean value"),this):this._callObjectMode?(console.error("setShowParticipantsBar is not available in callObject mode"),this):this._meetingState!==pn?(console.error("the meeting must be joined before calling setShowParticipantsBar"),this):(this.sendMessageToCallMachine({action:"set-show-participants-bar",show:i}),this._showParticipantsBar=i,this)}},{key:"showParticipantsBar",value:function(){return qe(),this._callObjectMode?(console.error("showParticipantsBar is not available in callObject mode"),this):this._showParticipantsBar}},{key:"theme",value:function(){return this._callObjectMode?(console.error("theme is not available in callObject mode"),this):this.properties.theme}},{key:"setTheme",value:function(i){var r=this;return new Promise(function(s,o){if(r._callObjectMode)o("setTheme is not available in callObject mode");else try{r.validateProperties({theme:i}),r.properties.theme=Xt({},i),r.sendMessageToCallMachine({action:"set-theme",theme:r.properties.theme});try{r.emit("theme-updated",{action:"theme-updated",theme:r.properties.theme})}catch(a){console.log("could not emit 'theme-updated'",a)}s(r.properties.theme)}catch(a){o(a)}})}},{key:"detectAllFaces",value:function(){var i=this;return qe(),new Promise(function(r,s){i.sendMessageToCallMachine({action:"detect-all-faces"},function(o){delete o.action,delete o.callbackStamp,r(o)})})}},{key:"requestFullscreen",value:function(){var i=He(Z.mark(function r(){return Z.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(qe(),this._iframe&&!document.fullscreenElement){s.next=3;break}return s.abrupt("return");case 3:return s.prev=3,s.next=6,this._iframe.requestFullscreen;case 6:if(!s.sent){s.next=10;break}this._iframe.requestFullscreen(),s.next=11;break;case 10:this._iframe.webkitRequestFullscreen();case 11:s.next=16;break;case 13:s.prev=13,s.t0=s.catch(3),console.log("could not make video call fullscreen",s.t0);case 16:case"end":return s.stop()}},r,this,[[3,13]])}));return function(){return i.apply(this,arguments)}}()},{key:"exitFullscreen",value:function(){qe(),document.fullscreenElement?document.exitFullscreen():document.webkitFullscreenElement&&document.webkitExitFullscreen()}},{key:"room",value:function(){var i=He(Z.mark(function r(){var s,o,a,l=this,c=arguments;return Z.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(s=c.length>0&&c[0]!==void 0?c[0]:{},o=s.includeRoomConfigDefaults,a=o===void 0||o,this._meetingState!==pn&&!this._didPreAuth){u.next=5;break}return u.abrupt("return",new Promise(function(h,d){l.sendMessageToCallMachine({action:"lib-room-info",includeRoomConfigDefaults:a},function(f){delete f.action,delete f.callbackStamp,h(f)})}));case 5:if(!this.properties.url){u.next=7;break}return u.abrupt("return",{roomUrlPendingJoin:this.properties.url});case 7:return u.abrupt("return",null);case 8:case"end":return u.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"geo",value:function(){var i=He(Z.mark(function r(){return Z.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",new Promise(function(){var o=He(Z.mark(function a(l,c){var u,h;return Z.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,d.next=4,fetch("https://gs.daily.co/_ks_/x-swsl/:");case 4:return u=d.sent,d.next=7,u.json();case 7:h=d.sent,l({current:h.geo}),d.next=15;break;case 11:d.prev=11,d.t0=d.catch(0),console.error("geo lookup failed",d.t0),l({current:""});case 15:case"end":return d.stop()}},a,null,[[0,11]])}));return function(a,l){return o.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r)}));return function(){return i.apply(this,arguments)}}()},{key:"setNetworkTopology",value:function(){var i=He(Z.mark(function r(s){var o=this;return Z.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return qe(),a.abrupt("return",new Promise(function(){var l=He(Z.mark(function c(u,h){var d;return Z.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:d=function(p){p.error?h({error:p.error}):u({workerId:p.workerId})},o.sendMessageToCallMachine({action:"set-network-topology",opts:s},d);case 2:case"end":return f.stop()}},c)}));return function(c,u){return l.apply(this,arguments)}}()));case 2:case"end":return a.stop()}},r)}));return function(r){return i.apply(this,arguments)}}()},{key:"getNetworkTopology",value:function(){var i=He(Z.mark(function r(){var s=this;return Z.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",new Promise(function(){var a=He(Z.mark(function l(c,u){var h;return Z.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:h=function(f){f.error?u({error:f.error}):c({topology:f.topology})},s.sendMessageToCallMachine({action:"get-network-topology"},h);case 2:case"end":return d.stop()}},l)}));return function(l,c){return a.apply(this,arguments)}}()));case 1:case"end":return o.stop()}},r)}));return function(){return i.apply(this,arguments)}}()},{key:"setPlayNewParticipantSound",value:function(i){if(qe(),typeof i!="number"&&i!==!0&&i!==!1)throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(i));this.sendMessageToCallMachine({action:"daily-method-set-play-ding",arg:i})}},{key:"on",value:function(i,r){return this._inputEventsOn[i]={},this.sendMessageToCallMachine({action:"register-input-handler",on:i}),Fc.prototype.on.call(this,i,r)}},{key:"once",value:function(i,r){return this._inputEventsOn[i]={},this.sendMessageToCallMachine({action:"register-input-handler",on:i}),Fc.prototype.once.call(this,i,r)}},{key:"off",value:function(i,r){return delete this._inputEventsOn[i],this.sendMessageToCallMachine({action:"register-input-handler",off:i}),Fc.prototype.off.call(this,i,r)}},{key:"validateProperties",value:function(i){for(var r in i){if(!Vr[r])throw new Error("unrecognized property '".concat(r,"'"));if(Vr[r].validate&&!Vr[r].validate(i[r],this))throw new Error("property '".concat(r,"': ").concat(Vr[r].help))}}},{key:"assembleMeetingUrl",value:function(){var i=Xt(Xt({},this.properties),{},{emb:this._callFrameId,embHref:encodeURIComponent(window.location.href)}),r=i.url.match(/\?/)?"&":"?";return i.url+r+Object.keys(Vr).filter(function(s){return Vr[s].queryString&&i[s]!==void 0}).map(function(s){return"".concat(Vr[s].queryString,"=").concat(i[s])}).join("&")}},{key:"needsLoad",value:function(){return[KI,Ff,Fr,xr].includes(this._meetingState)}},{key:"sendMessageToCallMachine",value:function(i,r){this._messageChannel.sendMessageToCallMachine(i,r,this._iframe,this._callFrameId)}},{key:"forwardPackagedMessageToCallMachine",value:function(i){this._messageChannel.forwardPackagedMessageToCallMachine(i,this._iframe,this._callFrameId)}},{key:"addListenerForPackagedMessagesFromCallMachine",value:function(i){return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(i,this._callFrameId)}},{key:"removeListenerForPackagedMessagesFromCallMachine",value:function(i){this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(i)}},{key:"handleMessageFromCallMachine",value:function(i){switch(i.action){case"iframe-ready-for-launch-config":this.sendMessageToCallMachine(Xt({action:"iframe-launch-config"},this.properties));break;case"loaded":this._loadedCallback&&(this._loadedCallback(),this._loadedCallback=null);try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"joined-meeting":this._joinedCallback&&(this._joinedCallback(i.participants),this._joinedCallback=null);try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"participant-joined":case"participant-updated":if(this._meetingState===Fr)return;if(i.participant&&i.participant.session_id){var r=i.participant.local?"local":i.participant.session_id;this._callObjectMode&&(HE(i.participant),qE(i.participant),WE(i.participant,this._participants[r]));try{this.maybeEventTrackStopped(this._participants[r],i.participant,"audioTrack"),this.maybeEventTrackStopped(this._participants[r],i.participant,"videoTrack"),this.maybeEventTrackStopped(this._participants[r],i.participant,"screenVideoTrack"),this.maybeEventTrackStopped(this._participants[r],i.participant,"screenAudioTrack"),this.maybeEventTrackStarted(this._participants[r],i.participant,"audioTrack"),this.maybeEventTrackStarted(this._participants[r],i.participant,"videoTrack"),this.maybeEventTrackStarted(this._participants[r],i.participant,"screenVideoTrack"),this.maybeEventTrackStarted(this._participants[r],i.participant,"screenAudioTrack"),this.maybeEventTrackStoppedForCustomTracks(this._participants[r],i.participant),this.maybeEventTrackStartedForCustomTracks(this._participants[r],i.participant),this.maybeEventRecordingStopped(this._participants[r],i.participant),this.maybeEventRecordingStarted(this._participants[r],i.participant)}catch(p){console.error("track events error",p)}if(!this.compareEqualForParticipantUpdateEvent(i.participant,this._participants[r])){this._participants[r]=Xt({},i.participant),this.toggleParticipantAudioBasedOnNativeAudioFocus();try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}}}break;case"participant-left":if(i.participant&&i.participant.session_id){var s=this._participants[i.participant.session_id];s&&(this.maybeEventTrackStopped(s,null,"audioTrack"),this.maybeEventTrackStopped(s,null,"videoTrack"),this.maybeEventTrackStopped(s,null,"screenVideoTrack"),this.maybeEventTrackStopped(s,null,"screenAudioTrack"),this.maybeEventTrackStoppedForCustomTracks(s,null)),delete this._participants[i.participant.session_id];try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}}break;case"access-state-updated":var o={access:i.access};if(i.awaitingAccess&&(o.awaitingAccess=i.awaitingAccess),!qc(this._accessState,o)){this._accessState=o;try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}}break;case"meeting-session-updated":if(i.meetingSession)try{delete i.callFrameId,this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"error":this._iframe&&!i.preserveIframe&&(this._iframe.src=""),this.updateMeetingState(xr),this.resetMeetingDependentVars(),this._loadedCallback&&(this._loadedCallback(i.errorMsg),this._loadedCallback=null),this._joinedCallback&&(this._joinedCallback(null,i.errorMsg),this._joinedCallback=null);try{i.preserveIframe;var a=GD(i,["preserveIframe"]);this.emit(i.action,a)}catch(p){console.log("could not emit",i,p)}break;case"left-meeting":this._meetingState!==xr&&this.updateMeetingState(Fr),this.resetMeetingDependentVars();try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"input-event":var l=this._participants[i.session_id];l||(l=i.session_id===this._participants.local.session_id?this._participants.local:{});try{this.emit(i.event.type,{action:i.event.type,event:i.event,participant:Xt({},l)})}catch(p){console.log("could not emit",i,p)}break;case"network-quality-change":var c=i.threshold,u=i.quality;if(c!==this._network.threshold||u!==this._network.quality){this._network.quality=u,this._network.threshold=c;try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}}break;case"active-speaker-change":var h=i.activeSpeaker;if(this._activeSpeaker.peerId!==h.peerId){this._activeSpeaker.peerId=h.peerId;try{this.emit(i.action,{action:i.action,activeSpeaker:this._activeSpeaker})}catch(p){console.log("could not emit",i,p)}}break;case"show-local-video-changed":if(this._callObjectMode)return;var d=i.show;this._showLocalVideo=d;try{this.emit(i.action,{action:i.action,show:d})}catch(p){console.log("could not emit",i,p)}break;case"active-speaker-mode-change":var f=i.enabled;if(this._activeSpeakerMode!==f){this._activeSpeakerMode=f;try{this.emit(i.action,{action:i.action,enabled:this._activeSpeakerMode})}catch(p){console.log("could not emit",i,p)}}break;case"waiting-participant-added":case"waiting-participant-updated":case"waiting-participant-removed":this._waitingParticipants=i.allWaitingParticipants;try{this.emit(i.action,{action:i.action,participant:i.participant})}catch(p){console.log("could not emit",i,p)}break;case"receive-settings-updated":if(!qc(this._receiveSettings,i.receiveSettings)){this._receiveSettings=i.receiveSettings;try{this.emit(i.action,{action:i.action,receiveSettings:i.receiveSettings})}catch(p){console.log("could not emit",i,p)}}break;case"input-settings-updated":if(!qc(this._inputSettings,i.inputSettings)){this._inputSettings=i.inputSettings;try{this.emit(i.action,{action:i.action,inputSettings:i.inputSettings})}catch(p){console.log("could not emit",i,p)}}break;case"recording-started":case"recording-stopped":case"recording-stats":case"recording-error":case"recording-upload-completed":case"transcription-started":case"transcription-stopped":case"transcription-error":case"started-camera":case"camera-error":case"app-message":case"local-screen-share-started":case"local-screen-share-stopped":case"network-connection":case"recording-data":case"live-streaming-started":case"live-streaming-stopped":case"live-streaming-error":case"nonfatal-error":case"lang-updated":case"media-ingest-error":try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"request-fullscreen":this.requestFullscreen();break;case"request-exit-fullscreen":this.exitFullscreen()}}},{key:"maybeEventRecordingStopped",value:function(i,r){var s="record";if(i&&!r.local&&r[s]===!1&&i[s]!==r[s])try{this.emit("recording-stopped",{action:"recording-stopped"})}catch(o){console.log("could not emit",o)}}},{key:"maybeEventRecordingStarted",value:function(i,r){var s="record";if(i&&!r.local&&r[s]===!0&&i[s]!==r[s])try{this.emit("recording-started",{action:"recording-started"})}catch(o){console.log("could not emit",o)}}},{key:"maybeEventTrackStopped",value:function(i,r,s){if(i&&(i[s]&&i[s].readyState==="ended"||i[s]&&(!r||!r[s])||i[s]&&i[s].id!==r[s].id))try{this.emit("track-stopped",{action:"track-stopped",track:i[s],participant:r})}catch(o){console.log("could not emit",o)}}},{key:"maybeEventTrackStarted",value:function(i,r,s){if(r[s]&&(!i||!i[s])||r[s]&&i[s].readyState==="ended"||r[s]&&r[s].id!==i[s].id)try{this.emit("track-started",{action:"track-started",track:r[s],participant:r})}catch(o){console.log("could not emit",o)}}},{key:"maybeEventTrackStoppedForCustomTracks",value:function(i,r){if(i)for(var s in i.tracks)np(s)||this.maybeEventTrackStopped(i.tracks[s],r?r.tracks[s]:null,"track")}},{key:"maybeEventTrackStartedForCustomTracks",value:function(i,r){if(r)for(var s in r.tracks)np(s)||this.maybeEventTrackStarted(i?i.tracks[s]:null,r.tracks[s],"track")}},{key:"compareEqualForParticipantUpdateEvent",value:function(i,r){return!!qc(i,r)&&(!i.videoTrack||!r.videoTrack||i.videoTrack.id===r.videoTrack.id&&i.videoTrack.muted===r.videoTrack.muted&&i.videoTrack.enabled===r.videoTrack.enabled)&&(!i.audioTrack||!r.audioTrack||i.audioTrack.id===r.audioTrack.id&&i.audioTrack.muted===r.audioTrack.muted&&i.audioTrack.enabled===r.audioTrack.enabled)}},{key:"nativeUtils",value:function(){return Kt()?typeof DailyNativeUtils=="undefined"?(console.warn("in React Native, DailyNativeUtils is expected to be available"),null):DailyNativeUtils:null}},{key:"updateIsPreparingToJoin",value:function(i){this.updateMeetingState(this._meetingState,i)}},{key:"updateMeetingState",value:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._isPreparingToJoin;if(i!==this._meetingState||r!==this._isPreparingToJoin){var s=this._meetingState,o=this._isPreparingToJoin;this._meetingState=i,this._isPreparingToJoin=r;var a=this.isMeetingPendingOrOngoing(s,o),l=this.isMeetingPendingOrOngoing(this._meetingState,this._isPreparingToJoin);a!==l&&(this.updateKeepDeviceAwake(l),this.updateDeviceAudioMode(l),this.updateShowAndroidOngoingMeetingNotification(l),this.updateNoOpRecordingEnsuringBackgroundContinuity(l))}}},{key:"resetMeetingDependentVars",value:function(){this._participants={},this._waitingParticipants={},this._activeSpeaker={},this._activeSpeakerMode=!1,this._didPreAuth=!1,this._accessState={access:XI},this._receiveSettings={},this._inputSettings={},this._preloadCache}},{key:"updateKeepDeviceAwake",value:function(i){Kt()&&this.nativeUtils().setKeepDeviceAwake(i,this._callFrameId)}},{key:"updateDeviceAudioMode",value:function(i){if(Kt()&&!this.disableReactNativeAutoDeviceManagement("audio")){var r=i?this._nativeInCallAudioMode:"idle";this.nativeUtils().setAudioMode(r)}}},{key:"updateShowAndroidOngoingMeetingNotification",value:function(i){if(Kt()&&this.nativeUtils().setShowOngoingMeetingNotification){var r,s,o,a;if(this.properties.reactNativeConfig&&this.properties.reactNativeConfig.androidInCallNotification){var l=this.properties.reactNativeConfig.androidInCallNotification;r=l.title,s=l.subtitle,o=l.iconName,a=l.disableForCustomOverride}a&&(i=!1),this.nativeUtils().setShowOngoingMeetingNotification(i,r,s,o,this._callFrameId)}}},{key:"updateNoOpRecordingEnsuringBackgroundContinuity",value:function(i){Kt()&&this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity&&this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(i)}},{key:"isMeetingPendingOrOngoing",value:function(i,r){return[Wc,pn].includes(i)||r}},{key:"toggleParticipantAudioBasedOnNativeAudioFocus",value:function(){if(Kt()){var i=store.getState();for(var r in i.streams){var s=i.streams[r];s&&s.pendingTrack&&s.pendingTrack.kind==="audio"&&(s.pendingTrack.enabled=this._hasNativeAudioFocus)}}}},{key:"disableReactNativeAutoDeviceManagement",value:function(i){return this.properties.reactNativeConfig&&this.properties.reactNativeConfig.disableAutoDeviceManagement&&this.properties.reactNativeConfig.disableAutoDeviceManagement[i]}},{key:"absoluteUrl",value:function(i){if(i!==void 0){var r=document.createElement("a");return r.href=i,r.href}}},{key:"sayHello",value:function(){var i="hello, world.";return console.log(i),i}}]),n}();/**
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
 */var Br;(function(t){t.PROCESSING="mdc-switch--processing",t.SELECTED="mdc-switch--selected",t.UNSELECTED="mdc-switch--unselected"})(Br||(Br={}));var ZE;(function(t){t.RIPPLE=".mdc-switch__ripple"})(ZE||(ZE={}));/**
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
 */function sU(t,e,n){var i=oU(t,e),r=i.getObservers(e);return r.push(n),function(){r.splice(r.indexOf(n),1)}}var iu=new WeakMap;function oU(t,e){var n=new Map;iu.has(t)||iu.set(t,{isEnabled:!0,getObservers:function(c){var u=n.get(c)||[];return n.has(c)||n.set(c,u),u},installedProperties:new Set});var i=iu.get(t);if(i.installedProperties.has(e))return i;var r=aU(t,e)||{configurable:!0,enumerable:!0,value:t[e],writable:!0},s=lt({},r),o=r.get,a=r.set;if("value"in r){delete s.value,delete s.writable;var l=r.value;o=function(){return l},r.writable&&(a=function(c){l=c})}return o&&(s.get=function(){return o.call(this)}),a&&(s.set=function(c){var u,h,d=o?o.call(this):c;if(a.call(this,c),i.isEnabled&&(!o||c!==d))try{for(var f=Mn(i.getObservers(e)),p=f.next();!p.done;p=f.next()){var g=p.value;g(c,d)}}catch(m){u={error:m}}finally{try{p&&!p.done&&(h=f.return)&&h.call(f)}finally{if(u)throw u.error}}}),i.installedProperties.add(e),Object.defineProperty(t,e,s),i}function aU(t,e){for(var n=t,i;n&&(i=Object.getOwnPropertyDescriptor(n,e),!i);)n=Object.getPrototypeOf(n);return i}function lU(t,e){var n=iu.get(t);n&&(n.isEnabled=e)}/**
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
 */var cU=function(t){mn(e,t);function e(n){var i=t.call(this,n)||this;return i.unobserves=new Set,i}return e.prototype.destroy=function(){t.prototype.destroy.call(this),this.unobserve()},e.prototype.observe=function(n,i){var r,s,o=this,a=[];try{for(var l=Mn(Object.keys(i)),c=l.next();!c.done;c=l.next()){var u=c.value,h=i[u].bind(this);a.push(this.observeProperty(n,u,h))}}catch(f){r={error:f}}finally{try{c&&!c.done&&(s=l.return)&&s.call(l)}finally{if(r)throw r.error}}var d=function(){var f,p;try{for(var g=Mn(a),m=g.next();!m.done;m=g.next()){var v=m.value;v()}}catch(E){f={error:E}}finally{try{m&&!m.done&&(p=g.return)&&p.call(g)}finally{if(f)throw f.error}}o.unobserves.delete(d)};return this.unobserves.add(d),d},e.prototype.observeProperty=function(n,i,r){return sU(n,i,r)},e.prototype.setObserversEnabled=function(n,i){lU(n,i)},e.prototype.unobserve=function(){var n,i;try{for(var r=Mn(TT([],wT(this.unobserves))),s=r.next();!s.done;s=r.next()){var o=s.value;o()}}catch(a){n={error:a}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},e}(Hn);/**
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
 */var uU=function(t){mn(e,t);function e(n){var i=t.call(this,n)||this;return i.handleClick=i.handleClick.bind(i),i}return e.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},e.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},e.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},e}(cU),hU=function(t){mn(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.init=function(){t.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},e.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(Br.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(Br.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},e.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},e.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,Br.PROCESSING)},e.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,Br.SELECTED),this.toggleClass(!this.adapter.state.selected,Br.UNSELECTED)},e.prototype.toggleClass=function(n,i){n?this.adapter.addClass(i):this.adapter.removeClass(i)},e}(uU);function $E(t){let e,n,i,r,s,o,a,l,c,u,h=[{class:a=ue({[t[7]]:!0,"mdc-switch__icons":!0})},Wt(t[18],"icons$")],d={};for(let f=0;f<h.length;f+=1)d=x(d,h[f]);return{c(){e=ve("div"),n=Xs("svg"),i=Xs("path"),r=st(),s=Xs("svg"),o=Xs("path"),this.h()},l(f){e=Se(f,"DIV",{class:!0});var p=fe(e);n=Pa(p,"svg",{class:!0,viewBox:!0});var g=fe(n);i=Pa(g,"path",{d:!0}),fe(i).forEach(P),g.forEach(P),r=ot(p),s=Pa(p,"svg",{class:!0,viewBox:!0});var m=fe(s);o=Pa(m,"path",{d:!0}),fe(o).forEach(P),m.forEach(P),p.forEach(P),this.h()},h(){yt(i,"d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"),yt(n,"class","mdc-switch__icon mdc-switch__icon--on"),yt(n,"viewBox","0 0 24 24"),yt(o,"d","M20 13H4v-2h16v2z"),yt(s,"class","mdc-switch__icon mdc-switch__icon--off"),yt(s,"viewBox","0 0 24 24"),se(e,d)},m(f,p){ie(f,e,p),Ue(e,n),Ue(n,i),Ue(e,r),Ue(e,s),Ue(s,o),c||(u=re(l=nt.call(null,e,t[6])),c=!0)},p(f,p){se(e,d=ke(h,[p[0]&128&&a!==(a=ue({[f[7]]:!0,"mdc-switch__icons":!0}))&&{class:a},p[0]&262144&&Wt(f[18],"icons$")])),l&&xe(l.update)&&p[0]&64&&l.update.call(null,f[6])},d(f){f&&P(e),c=!1,u()}}}function dU(t){let e,n,i,r,s,o,a,l,c,u,h,d,f,p,g,m,v=t[5]&&$E(t),E=[{class:h=ue(et({[t[3]]:!0,"mdc-switch":!0,"mdc-switch--unselected":!t[9],"mdc-switch--selected":t[9],"mdc-switch--processing":t[1],"smui-switch--color-secondary":t[4]==="secondary"},t[11]))},{type:"button"},{role:"switch"},{"aria-checked":d=t[9]?"true":"false"},{disabled:t[0]},t[15],xi(t[18],["icons$"])],I={};for(let y=0;y<E.length;y+=1)I=x(I,E[y]);return{c(){e=ve("button"),n=ve("div"),i=st(),r=ve("div"),s=ve("div"),o=ve("div"),a=ve("div"),l=st(),c=ve("div"),u=st(),v&&v.c(),this.h()},l(y){e=Se(y,"BUTTON",{class:!0,type:!0,role:!0,"aria-checked":!0});var M=fe(e);n=Se(M,"DIV",{class:!0}),fe(n).forEach(P),i=ot(M),r=Se(M,"DIV",{class:!0});var k=fe(r);s=Se(k,"DIV",{class:!0});var _=fe(s);o=Se(_,"DIV",{class:!0});var T=fe(o);a=Se(T,"DIV",{class:!0}),fe(a).forEach(P),T.forEach(P),l=ot(_),c=Se(_,"DIV",{class:!0}),fe(c).forEach(P),u=ot(_),v&&v.l(_),_.forEach(P),k.forEach(P),M.forEach(P),this.h()},h(){yt(n,"class","mdc-switch__track"),yt(a,"class","mdc-elevation-overlay"),yt(o,"class","mdc-switch__shadow"),yt(c,"class","mdc-switch__ripple"),yt(s,"class","mdc-switch__handle"),yt(r,"class","mdc-switch__handle-track"),se(e,I)},m(y,M){ie(y,e,M),Ue(e,n),Ue(e,i),Ue(e,r),Ue(r,s),Ue(s,o),Ue(o,a),Ue(s,l),Ue(s,c),t[27](c),Ue(s,u),v&&v.m(s,null),e.autofocus&&e.focus(),t[28](e),g||(m=[re(f=nt.call(null,e,t[2])),re(t[14].call(null,e)),re(p=Ir.call(null,e,{unbounded:!0,color:t[4],active:t[13],rippleElement:t[12],disabled:t[0],addClass:t[16],removeClass:t[17]})),Qe(e,"click",t[29])],g=!0)},p(y,M){y[5]?v?v.p(y,M):(v=$E(y),v.c(),v.m(s,null)):v&&(v.d(1),v=null),se(e,I=ke(E,[M[0]&2586&&h!==(h=ue(et({[y[3]]:!0,"mdc-switch":!0,"mdc-switch--unselected":!y[9],"mdc-switch--selected":y[9],"mdc-switch--processing":y[1],"smui-switch--color-secondary":y[4]==="secondary"},y[11])))&&{class:h},{type:"button"},{role:"switch"},M[0]&512&&d!==(d=y[9]?"true":"false")&&{"aria-checked":d},M[0]&1&&{disabled:y[0]},y[15],M[0]&262144&&xi(y[18],["icons$"])])),f&&xe(f.update)&&M[0]&4&&f.update.call(null,y[2]),p&&xe(p.update)&&M[0]&12305&&p.update.call(null,{unbounded:!0,color:y[4],active:y[13],rippleElement:y[12],disabled:y[0],addClass:y[16],removeClass:y[17]})},i:Qt,o:Qt,d(y){y&&P(e),t[27](null),v&&v.d(),t[28](null),g=!1,We(m)}}}function fU(t,e,n){const i=["use","class","disabled","color","group","checked","value","processing","icons","icons$use","icons$class","getId","getElement"];let r=ee(e,i);var s;const o=Je(De());let a=()=>{};function l(q){return q===a}let{use:c=[]}=e,{class:u=""}=e,{disabled:h=!1}=e,{color:d="primary"}=e,{group:f=a}=e,{checked:p=a}=e,{value:g=null}=e,{processing:m=!1}=e,{icons:v=!0}=e,{icons$use:E=[]}=e,{icons$class:I=""}=e,y,M,k={},_,T=!1,V=(s=Yt("SMUI:generic:input:props"))!==null&&s!==void 0?s:{},b=l(f)?l(p)?!1:p:f.indexOf(g)!==-1,O={get disabled(){return h},set disabled(q){n(0,h=q)},get processing(){return m},set processing(q){n(1,m=q)},get selected(){return b},set selected(q){n(9,b=q)}},J=p,w=l(f)?[]:[...f],L=b;Tn(()=>{n(10,M=new hU({addClass:G,hasClass:R,isDisabled:()=>h,removeClass:S,setAriaChecked:()=>{},setDisabled:Ne=>{n(0,h=Ne)},state:O}));const q={get element(){return z()},get checked(){return b},set checked(Ne){b!==Ne&&(O.selected=Ne,y&&tt(y,"SMUISwitch:change",{selected:Ne,value:g}))},activateRipple(){h||n(13,T=!0)},deactivateRipple(){n(13,T=!1)}};return tt(y,"SMUIGenericInput:mount",q),M.init(),M.initFromDOM(),()=>{tt(y,"SMUIGenericInput:unmount",q),M.destroy()}});function R(q){return q in k?k[q]:z().classList.contains(q)}function G(q){k[q]||n(11,k[q]=!0,k)}function S(q){(!(q in k)||k[q])&&n(11,k[q]=!1,k)}function A(){return V&&V.id}function z(){return y}function H(q){le[q?"unshift":"push"](()=>{_=q,n(12,_)})}function X(q){le[q?"unshift":"push"](()=>{y=q,n(8,y)})}const he=()=>M&&M.handleClick();return t.$$set=q=>{e=x(x({},e),Ge(q)),n(18,r=ee(e,i)),"use"in q&&n(2,c=q.use),"class"in q&&n(3,u=q.class),"disabled"in q&&n(0,h=q.disabled),"color"in q&&n(4,d=q.color),"group"in q&&n(19,f=q.group),"checked"in q&&n(20,p=q.checked),"value"in q&&n(21,g=q.value),"processing"in q&&n(1,m=q.processing),"icons"in q&&n(5,v=q.icons),"icons$use"in q&&n(6,E=q.icons$use),"icons$class"in q&&n(7,I=q.icons$class)},t.$$.update=()=>{if(t.$$.dirty[0]&121111296){let q=!1;if(!l(f))if(L!==b){const Ne=f.indexOf(g);b&&Ne===-1?(f.push(g),n(19,f),n(26,L),n(9,b),n(21,g),n(25,w),n(20,p),n(24,J),n(8,y)):!b&&Ne!==-1&&(f.splice(Ne,1),n(19,f),n(26,L),n(9,b),n(21,g),n(25,w),n(20,p),n(24,J),n(8,y)),q=!0}else{const Ne=w.indexOf(g),Ie=f.indexOf(g);Ne>-1&&Ie===-1?O.selected=!1:Ie>-1&&Ne===-1&&(O.selected=!0)}l(p)?L!==b&&(q=!0):p!==b&&(p===J?(n(20,p=b),q=!0):O.selected=p),n(24,J=p),n(25,w=l(f)?[]:[...f]),n(26,L=b),q&&y&&tt(y,"SMUISwitch:change",{selected:b,value:g})}},[h,m,c,u,d,v,E,I,y,b,M,k,_,T,o,V,G,S,r,f,p,g,A,z,J,w,L,H,X,he]}class IV extends Ke{constructor(e){super();ze(this,e,fU,dU,Ve,{use:2,class:3,disabled:0,color:4,group:19,checked:20,value:21,processing:1,icons:5,icons$use:6,icons$class:7,getId:22,getElement:23},null,[-1,-1])}get getId(){return this.$$.ctx[22]}get getElement(){return this.$$.ctx[23]}}/**
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
 */var pU={ROOT:"mdc-form-field"},mU={LABEL_SELECTOR:".mdc-form-field > label"};/**
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
 */var gU=function(t){mn(e,t);function e(n){var i=t.call(this,lt(lt({},e.defaultAdapter),n))||this;return i.click=function(){i.handleClick()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return pU},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return mU},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},e.prototype.handleClick=function(){var n=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){n.adapter.deactivateInputRipple()})},e}(Hn);const _U=t=>({}),ew=t=>({});function vU(t){let e,n,i,r,s,o,a,l,c;const u=t[13].default,h=Ee(u,t,t[12],null),d=t[13].label,f=Ee(d,t,t[12],ew);let p=[{for:t[4]},Wt(t[10],"label$")],g={};for(let E=0;E<p.length;E+=1)g=x(g,p[E]);let m=[{class:s=ue({[t[1]]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":t[2]==="end","mdc-form-field--nowrap":t[3]})},xi(t[10],["label$"])],v={};for(let E=0;E<m.length;E+=1)v=x(v,m[E]);return{c(){e=ve("div"),h&&h.c(),n=st(),i=ve("label"),f&&f.c(),this.h()},l(E){e=Se(E,"DIV",{class:!0});var I=fe(e);h&&h.l(I),n=ot(I),i=Se(I,"LABEL",{for:!0});var y=fe(i);f&&f.l(y),y.forEach(P),I.forEach(P),this.h()},h(){se(i,g),se(e,v)},m(E,I){ie(E,e,I),h&&h.m(e,null),Ue(e,n),Ue(e,i),f&&f.m(i,null),t[14](i),t[15](e),a=!0,l||(c=[re(r=nt.call(null,i,t[5])),re(o=nt.call(null,e,t[0])),re(t[9].call(null,e)),Qe(e,"SMUIGenericInput:mount",t[16]),Qe(e,"SMUIGenericInput:unmount",t[17])],l=!0)},p(E,[I]){h&&h.p&&(!a||I&4096)&&Te(h,u,E,E[12],a?we(u,E[12],I,null):Ce(E[12]),null),f&&f.p&&(!a||I&4096)&&Te(f,d,E,E[12],a?we(d,E[12],I,_U):Ce(E[12]),ew),se(i,g=ke(p,[(!a||I&16)&&{for:E[4]},I&1024&&Wt(E[10],"label$")])),r&&xe(r.update)&&I&32&&r.update.call(null,E[5]),se(e,v=ke(m,[(!a||I&14&&s!==(s=ue({[E[1]]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":E[2]==="end","mdc-form-field--nowrap":E[3]})))&&{class:s},I&1024&&xi(E[10],["label$"])])),o&&xe(o.update)&&I&1&&o.update.call(null,E[0])},i(E){a||(D(h,E),D(f,E),a=!0)},o(E){B(h,E),B(f,E),a=!1},d(E){E&&P(e),h&&h.d(E),f&&f.d(E),t[14](null),t[15](null),l=!1,We(c)}}}let yU=0;function bU(t,e,n){const i=["use","class","align","noWrap","inputId","label$use","getElement"];let r=ee(e,i),{$$slots:s={},$$scope:o}=e;const a=Je(De());let{use:l=[]}=e,{class:c=""}=e,{align:u="start"}=e,{noWrap:h=!1}=e,{inputId:d="SMUI-form-field-"+yU++}=e,{label$use:f=[]}=e,p,g,m,v;Ot("SMUI:generic:input:props",{id:d}),Tn(()=>(g=new gU({activateInputRipple:()=>{v&&v.activateRipple()},deactivateInputRipple:()=>{v&&v.deactivateRipple()},deregisterInteractionHandler:(_,T)=>{m.removeEventListener(_,T)},registerInteractionHandler:(_,T)=>{m.addEventListener(_,T)}}),g.init(),()=>{g.destroy()}));function E(){return p}function I(_){le[_?"unshift":"push"](()=>{m=_,n(7,m)})}function y(_){le[_?"unshift":"push"](()=>{p=_,n(6,p)})}const M=_=>n(8,v=_.detail),k=()=>n(8,v=void 0);return t.$$set=_=>{e=x(x({},e),Ge(_)),n(10,r=ee(e,i)),"use"in _&&n(0,l=_.use),"class"in _&&n(1,c=_.class),"align"in _&&n(2,u=_.align),"noWrap"in _&&n(3,h=_.noWrap),"inputId"in _&&n(4,d=_.inputId),"label$use"in _&&n(5,f=_.label$use),"$$scope"in _&&n(12,o=_.$$scope)},[l,c,u,h,d,f,p,m,v,a,r,E,o,s,I,y,M,k]}class EV extends Ke{constructor(e){super();ze(this,e,bU,vU,Ve,{use:0,class:1,align:2,noWrap:3,inputId:4,label$use:5,getElement:11})}get getElement(){return this.$$.ctx[11]}}/**
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
 */const tw="firebasestorage.googleapis.com",nw="storageBucket",IU=2*60*1e3,EU=10*60*1e3;class kt extends er{constructor(e,n){super(rp(e),`Firebase Storage: ${n} (${rp(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,kt.prototype)}_codeEquals(e){return rp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function rp(t){return"storage/"+t}function sp(){const t="An unknown error occurred, please check the error payload for server response.";return new kt("unknown",t)}function wU(t){return new kt("object-not-found","Object '"+t+"' does not exist.")}function TU(t){return new kt("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function CU(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new kt("unauthenticated",t)}function SU(){return new kt("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function AU(t){return new kt("unauthorized","User does not have permission to access '"+t+"'.")}function kU(){return new kt("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function RU(){return new kt("canceled","User canceled the upload/download.")}function OU(t){return new kt("invalid-url","Invalid URL '"+t+"'.")}function LU(t){return new kt("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function MU(){return new kt("no-default-bucket","No default bucket found. Did you set the '"+nw+"' property when initializing the app?")}function NU(){return new kt("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function PU(){return new kt("no-download-url","The given file does not have any download URLs.")}function op(t){return new kt("invalid-argument",t)}function iw(){return new kt("app-deleted","The Firebase app was deleted.")}function DU(t){return new kt("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ka(t,e){return new kt("invalid-format","String does not match format '"+t+"': "+e)}function Ra(t){throw new kt("internal-error","Internal error: "+t)}/**
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
 */class jn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=jn.makeFromUrl(e,n)}catch{return new jn(e,"")}if(i.path==="")return i;throw LU(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(y){y.path_=decodeURIComponent(y.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},g=n===tw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),I=[{regex:a,indices:l,postModify:s},{regex:f,indices:p,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let y=0;y<I.length;y++){const M=I[y],k=M.regex.exec(e);if(k){const _=k[M.indices.bucket];let T=k[M.indices.path];T||(T=""),i=new jn(_,T),M.postModify(i);break}}if(i==null)throw OU(e);return i}}class FU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function xU(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...m){c||(c=!0,e.apply(null,m))}function h(m){r=setTimeout(()=>{r=null,t(f,l())},m)}function d(){s&&clearTimeout(s)}function f(m,...v){if(c){d();return}if(m){d(),u.call(null,m,...v);return}if(l()||o){d(),u.call(null,m,...v);return}i<64&&(i*=2);let I;a===1?(a=2,I=0):I=(i+Math.random())*1e3,h(I)}let p=!1;function g(m){p||(p=!0,d(),!c&&(r!==null?(m||(a=2),clearTimeout(r),h(0)):m||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,g(!0)},n),g}function UU(t){t(!1)}/**
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
 */function jU(t){return t!==void 0}function VU(t){return typeof t=="object"&&!Array.isArray(t)}function ap(t){return typeof t=="string"||t instanceof String}function rw(t){return lp()&&t instanceof Blob}function lp(){return typeof Blob!="undefined"}function sw(t,e,n,i){if(i<e)throw op(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw op(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function ru(t,e,n){let i=e;return n==null&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function ow(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var Hr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Hr||(Hr={}));/**
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
 */class BU{constructor(e,n,i,r,s,o,a,l,c,u,h){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,f)=>{this.resolve_=d,this.reject_=f,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new su(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Hr.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const u=s.getErrorCode()===Hr.ABORT;i(!1,new su(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new su(c,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());jU(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=sp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?iw():RU();o(l)}else{const l=kU();o(l)}};this.canceled_?n(!1,new su(!1,null,!0)):this.backoffId_=xU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&UU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||r||s}}class su{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function HU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function qU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function WU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function GU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function zU(t,e,n,i,r,s){const o=ow(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return WU(l,e),HU(l,n),qU(l,s),GU(l,i),new BU(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}/**
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
 */function KU(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function XU(...t){const e=KU();if(e!==void 0){const n=new e;for(let i=0;i<t.length;i++)n.append(t[i]);return n.getBlob()}else{if(lp())return new Blob(t);throw new kt("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function QU(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function YU(t){return atob(t)}/**
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
 */const ti={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class cp{constructor(e,n){this.data=e,this.contentType=n||null}}function JU(t,e){switch(t){case ti.RAW:return new cp(aw(e));case ti.BASE64:case ti.BASE64URL:return new cp(lw(t,e));case ti.DATA_URL:return new cp($U(e),ej(e))}throw sp()}function aw(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const s=i,o=t.charCodeAt(++n);i=65536|(s&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)==56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function ZU(t){let e;try{e=decodeURIComponent(t)}catch{throw ka(ti.DATA_URL,"Malformed data URL.")}return aw(e)}function lw(t,e){switch(t){case ti.BASE64:{const r=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(r||s)throw ka(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case ti.BASE64URL:{const r=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(r||s)throw ka(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=YU(e)}catch{throw ka(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}class cw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ka(ti.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=tj(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-";base64".length):i),this.rest=e.substring(e.indexOf(",")+1)}}function $U(t){const e=new cw(t);return e.base64?lw(ti.BASE64,e.rest):ZU(e.rest)}function ej(t){return new cw(t).contentType}function tj(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Yi{constructor(e,n){let i=0,r="";rw(e)?(this.data_=e,i=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(rw(this.data_)){const i=this.data_,r=QU(i,e,n);return r===null?null:new Yi(r)}else{const i=new Uint8Array(this.data_.buffer,e,n-e);return new Yi(i,!0)}}static getBlob(...e){if(lp()){const n=e.map(i=>i instanceof Yi?i.data_:i);return new Yi(XU.apply(null,n))}else{const n=e.map(o=>ap(o)?JU(ti.RAW,o).data:o.data_);let i=0;n.forEach(o=>{i+=o.byteLength});const r=new Uint8Array(i);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[s++]=o[a]}),new Yi(r,!0)}}uploadData(){return this.data_}}/**
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
 */function uw(t){let e;try{e=JSON.parse(t)}catch{return null}return VU(e)?e:null}/**
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
 */function nj(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ij(t,e){const n=e.split("/").filter(i=>i.length>0).join("/");return t.length===0?n:t+"/"+n}function hw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function rj(t,e){return e}class wn{constructor(e,n,i,r){this.server=e,this.local=n||e,this.writable=!!i,this.xform=r||rj}}let ou=null;function sj(t){return!ap(t)||t.length<2?t:hw(t)}function dw(){if(ou)return ou;const t=[];t.push(new wn("bucket")),t.push(new wn("generation")),t.push(new wn("metageneration")),t.push(new wn("name","fullPath",!0));function e(s,o){return sj(o)}const n=new wn("name");n.xform=e,t.push(n);function i(s,o){return o!==void 0?Number(o):o}const r=new wn("size");return r.xform=i,t.push(r),t.push(new wn("timeCreated")),t.push(new wn("updated")),t.push(new wn("md5Hash",null,!0)),t.push(new wn("cacheControl",null,!0)),t.push(new wn("contentDisposition",null,!0)),t.push(new wn("contentEncoding",null,!0)),t.push(new wn("contentLanguage",null,!0)),t.push(new wn("contentType",null,!0)),t.push(new wn("metadata","customMetadata",!0)),ou=t,ou}function oj(t,e){function n(){const i=t.bucket,r=t.fullPath,s=new jn(i,r);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function aj(t,e,n){const i={};i.type="file";const r=n.length;for(let s=0;s<r;s++){const o=n[s];i[o.local]=o.xform(i,e[o.server])}return oj(i,t),i}function fw(t,e,n){const i=uw(e);return i===null?null:aj(t,i,n)}function lj(t,e,n,i){const r=uw(e);if(r===null||!ap(r.downloadTokens))return null;const s=r.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=ru(d,n,i),p=ow({alt:"media",token:c});return f+p})[0]}function cj(t,e){const n={},i=e.length;for(let r=0;r<i;r++){const s=e[r];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class up{constructor(e,n,i,r){this.url=e,this.method=n,this.handler=i,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function pw(t){if(!t)throw sp()}function uj(t,e){function n(i,r){const s=fw(t,r,e);return pw(s!==null),s}return n}function hj(t,e){function n(i,r){const s=fw(t,r,e);return pw(s!==null),lj(s,r,t.host,t._protocol)}return n}function mw(t){function e(n,i){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=SU():r=CU():n.getStatus()===402?r=TU(t.bucket):n.getStatus()===403?r=AU(t.path):r=i,r.serverResponse=i.serverResponse,r}return e}function gw(t){const e=mw(t);function n(i,r){let s=e(i,r);return i.getStatus()===404&&(s=wU(t.path)),s.serverResponse=r.serverResponse,s}return n}function dj(t,e,n){const i=e.fullServerUrl(),r=ru(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new up(r,s,hj(t,n),o);return a.errorHandler=gw(e),a}function fj(t,e){const n=e.fullServerUrl(),i=ru(n,t.host,t._protocol),r="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new up(i,r,o,s);return a.successCodes=[200,204],a.errorHandler=gw(e),a}function pj(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function mj(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=pj(null,e)),i}function gj(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let y=0;y<2;y++)I=I+Math.random().toString().slice(2);return I}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=mj(e,i,r),u=cj(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=Yi.getBlob(h,i,d);if(f===null)throw NU();const p={name:c.fullPath},g=ru(s,t.host,t._protocol),m="POST",v=t.maxUploadRetryTime,E=new up(g,m,uj(t,n),v);return E.urlParams=p,E.headers=o,E.body=f.uploadData(),E.errorHandler=mw(e),E}class _j{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Hr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Hr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Hr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,r){if(this.sent_)throw Ra("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ra("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ra("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ra("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ra("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class vj extends _j{initXhr(){this.xhr_.responseType="text"}}function hp(){return new vj}/**
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
 */class qr{constructor(e,n){this._service=e,n instanceof jn?this._location=n:this._location=jn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new qr(e,n)}get root(){const e=new jn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hw(this._location.path)}get storage(){return this._service}get parent(){const e=nj(this._location.path);if(e===null)return null;const n=new jn(this._location.bucket,e);return new qr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw DU(e)}}function yj(t,e,n){t._throwIfRoot("uploadBytes");const i=gj(t.storage,t._location,dw(),new Yi(e,!0),n);return t.storage.makeRequestWithTokens(i,hp).then(r=>({metadata:r,ref:t}))}function bj(t){t._throwIfRoot("getDownloadURL");const e=dj(t.storage,t._location,dw());return t.storage.makeRequestWithTokens(e,hp).then(n=>{if(n===null)throw PU();return n})}function Ij(t){t._throwIfRoot("deleteObject");const e=fj(t.storage,t._location);return t.storage.makeRequestWithTokens(e,hp)}function Ej(t,e){const n=ij(t._location.path,e),i=new jn(t._location.bucket,n);return new qr(t.storage,i)}/**
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
 */function wj(t){return/^[A-Za-z]+:\/\//.test(t)}function Tj(t,e){return new qr(t,e)}function _w(t,e){if(t instanceof dp){const n=t;if(n._bucket==null)throw MU();const i=new qr(n,n._bucket);return e!=null?_w(i,e):i}else return e!==void 0?Ej(t,e):t}function Cj(t,e){if(e&&wj(e)){if(t instanceof dp)return Tj(t,e);throw op("To use ref(service, url), the first argument must be a Storage instance.")}else return _w(t,e)}function vw(t,e){const n=e==null?void 0:e[nw];return n==null?null:jn.makeFromBucketSpec(n,t)}class dp{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=tw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=IU,this._maxUploadRetryTime=EU,this._requests=new Set,r!=null?this._bucket=jn.makeFromBucketSpec(r,this._host):this._bucket=vw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jn.makeFromBucketSpec(this._url,e):this._bucket=vw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){sw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){sw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qr(this,e)}_makeRequest(e,n,i,r){if(this._deleted)return new FU(iw());{const s=zU(e,this._appId,i,r,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const yw="@firebase/storage",bw="0.9.0";/**
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
 */const Iw="storage";function wV(t,e,n){return t=at(t),yj(t,e,n)}function TV(t){return t=at(t),bj(t)}function CV(t){return t=at(t),Ij(t)}function SV(t,e){return t=at(t),Cj(t,e)}function AV(t=Ka(),e){return t=at(t),eo(t,Iw).getImmediate({identifier:e})}function Sj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new dp(n,i,r,e,rr)}function Aj(){ir(new Ti(Iw,Sj,"PUBLIC").setMultipleInstances(!0)),Bn(yw,bw,""),Bn(yw,bw,"esm2017")}Aj();export{Ei as $,Tn as A,x as B,Cp as C,r0 as D,Vj as E,qj as F,Ee as G,Te as H,Ce as I,we as J,Mj as K,Ue as L,Qt as M,Gj as N,zj as O,Qj as P,Jj as Q,jj as R,Ke as S,Yj as T,Wj as U,Uj as V,Nj as W,Ii as X,m0 as Y,lV as Z,le as _,fe as a,aV as a0,re as a1,sV as a2,Ip as a3,Qe as a4,We as a5,Bj as a6,Hj as a7,xe as a8,Lj as a9,Fj as aA,Oj as aB,d0 as aC,h0 as aD,EV as aE,IV as aF,oV as aG,AV as aH,SV as aI,wV as aJ,TV as aK,CV as aL,iV as aM,tV as aN,Xs as aa,Pa as ab,Dj as ac,Rj as ad,Zi as ae,eV as af,Kj as ag,Xj as ah,nV as ai,rV as aj,cV as ak,uV as al,hV as am,dV as an,fV as ao,pV as ap,mV as aq,$j as ar,gV as as,yV as at,vV as au,Zj as av,_V as aw,bV as ax,o0 as ay,xj as az,yt as b,Se as c,P as d,ve as e,ie as f,Gr as g,Qs as h,ze as i,bt as j,st as k,Tt as l,Dt as m,ot as n,pt as o,ke as p,ft as q,Jt as r,Ve as s,bi as t,B as u,mt as v,Zt as w,D as x,Ot as y,Pj as z};

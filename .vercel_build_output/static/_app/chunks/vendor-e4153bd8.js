var Xw=Object.defineProperty;var fp=Object.getOwnPropertySymbols;var Qw=Object.prototype.hasOwnProperty,Yw=Object.prototype.propertyIsEnumerable;var pp=(t,e,n)=>e in t?Xw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,st=(t,e)=>{for(var n in e||(e={}))Qw.call(e,n)&&pp(t,n,e[n]);if(fp)for(var n of fp(e))Yw.call(e,n)&&pp(t,n,e[n]);return t};function hn(){}function x(t,e){for(const n in e)t[n]=e[n];return t}function mp(t){return t()}function gp(){return Object.create(null)}function qe(t){t.forEach(mp)}function ze(t){return typeof t=="function"}function We(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Oa;function sj(t,e){return Oa||(Oa=document.createElement("a")),Oa.href=e,t===Oa.href}function Jw(t){return Object.keys(t).length===0}function Zw(t,...e){if(t==null)return hn;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function $w(t,e,n){t.$$.on_destroy.push(Zw(e,n))}function Ee(t,e,n,i){if(t){const r=_p(t,e,n,i);return t[0](r)}}function _p(t,e,n,i){return t[1]&&i?x(n.ctx.slice(),t[1](i(e))):n.ctx}function Ie(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|r[a];return s}return e.dirty|r}return e.dirty}function we(t,e,n,i,r,s){if(r){const o=_p(e,n,i,s);t.p(o,r)}}function Te(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ke(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ne(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function e0(t){const e={};for(const n in t)e[n]=!0;return e}function t0(t,e,n){return t.set(n),e}function se(t){return t&&ze(t.destroy)?t.destroy:hn}let La=!1;function n0(){La=!0}function i0(){La=!1}function r0(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function s0(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const u=e[c];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,u=(r>0&&e[n[r]].claim_order<=c?r+1:r0(1,r,d=>e[n[d]].claim_order,c))-1;i[l]=n[u]+1;const h=u+1;n[h]=l,r=Math.max(h,r)}const s=[],o=[];let a=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(s.push(e[l-1]);a>=l;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);s.reverse(),o.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<o.length;l++){for(;c<s.length&&o[l].claim_order>=s[c].claim_order;)c++;const u=c<s.length?s[c]:null;t.insertBefore(o[l],u)}}function en(t,e){if(La){for(s0(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ie(t,e,n){La&&!n?en(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function H(t){t.parentNode.removeChild(t)}function oj(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Le(t){return document.createElement(t)}function o0(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function bi(t){return document.createTextNode(t)}function bt(){return bi(" ")}function At(){return bi("")}function Ze(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function a0(t){return function(e){return e.preventDefault(),t.call(this,e)}}function l0(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function xn(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ae(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:xn(t,i,e[i])}function Pe(t){return Array.from(t.childNodes)}function c0(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function vp(t,e,n,i,r=!1){c0(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,r||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function yp(t,e,n,i){return vp(t,r=>r.nodeName===e,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const a=r.attributes[o];n[a.name]||s.push(a.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(e))}function De(t,e,n){return yp(t,e,n,Le)}function aj(t,e,n){return yp(t,e,n,o0)}function Wr(t,e){return vp(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>bi(e),!0)}function Et(t){return Wr(t," ")}function Ks(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function bp(t,e){t.value=e==null?"":e}function lj(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}function cj(t,e,n){t.classList[n?"add":"remove"](e)}function u0(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}let Ma;function Na(t){Ma=t}function Me(){if(!Ma)throw new Error("Function called outside component initialization");return Ma}function Un(t){Me().$$.on_mount.push(t)}function uj(t){Me().$$.after_update.push(t)}function Ji(t){Me().$$.on_destroy.push(t)}function hj(){const t=Me();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const r=u0(e,n);i.slice().forEach(s=>{s.call(t,r)})}}}function Mt(t,e){Me().$$.context.set(t,e)}function bn(t){return Me().$$.context.get(t)}function Xs(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const Qs=[],de=[],Pa=[],du=[],Ep=Promise.resolve();let fu=!1;function Ip(){fu||(fu=!0,Ep.then(wp))}function h0(){return Ip(),Ep}function pu(t){Pa.push(t)}function Ei(t){du.push(t)}let mu=!1;const gu=new Set;function wp(){if(!mu){mu=!0;do{for(let t=0;t<Qs.length;t+=1){const e=Qs[t];Na(e),d0(e.$$)}for(Na(null),Qs.length=0;de.length;)de.pop()();for(let t=0;t<Pa.length;t+=1){const e=Pa[t];gu.has(e)||(gu.add(e),e())}Pa.length=0}while(Qs.length);for(;du.length;)du.pop()();fu=!1,mu=!1,gu.clear()}}function d0(t){if(t.fragment!==null){t.update(),qe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(pu)}}const Da=new Set;let Zi;function tn(){Zi={r:0,c:[],p:Zi}}function nn(){Zi.r||qe(Zi.c),Zi=Zi.p}function F(t,e){t&&t.i&&(Da.delete(t),t.i(e))}function j(t,e,n,i){if(t&&t.o){if(Da.has(t))return;Da.add(t),Zi.c.push(()=>{Da.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const f0=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function dj(t,e){t.d(1),e.delete(t.key)}function fj(t,e){j(t,1,1,()=>{e.delete(t.key)})}function pj(t,e,n,i,r,s,o,a,l,c,u,h){let d=t.length,f=s.length,p=d;const m={};for(;p--;)m[t[p].key]=p;const g=[],v=new Map,A=new Map;for(p=f;p--;){const k=h(r,s,p),_=n(k);let I=o.get(_);I?i&&I.p(k,e):(I=c(_,k),I.c()),v.set(_,g[p]=I),_ in m&&A.set(_,Math.abs(p-m[_]))}const w=new Set,S=new Set;function q(k){F(k,1),k.m(a,u),o.set(k.key,k),u=k.first,f--}for(;d&&f;){const k=g[f-1],_=t[d-1],I=k.key,U=_.key;k===_?(u=k.first,d--,f--):v.has(U)?!o.has(I)||w.has(I)?q(k):S.has(U)?d--:A.get(I)>A.get(U)?(S.add(I),q(k)):(w.add(U),d--):(l(_,o),d--)}for(;d--;){const k=t[d];v.has(k.key)||l(k,o)}for(;f;)q(g[f-1]);return g}function Re(t,e){const n={},i={},r={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)r[l]||(n[l]=a[l],r[l]=1);t[s]=a}else for(const l in o)r[l]=1}for(const o in i)o in n||(n[o]=void 0);return n}function ht(t){return typeof t=="object"&&t!==null?t:{}}function Ii(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function yt(t){t&&t.c()}function xt(t,e){t&&t.l(e)}function dt(t,e,n,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:a}=t.$$;r&&r.m(e,n),i||pu(()=>{const l=s.map(mp).filter(ze);o?o.push(...l):qe(l),t.$$.on_mount=[]}),a.forEach(pu)}function ft(t,e){const n=t.$$;n.fragment!==null&&(qe(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function p0(t,e){t.$$.dirty[0]===-1&&(Qs.push(t),Ip(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Xe(t,e,n,i,r,s,o,a=[-1]){const l=Ma;Na(t);const c=t.$$={fragment:null,ctx:null,props:s,update:hn,not_equal:r,bound:gp(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:gp(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(h,d,...f)=>{const p=f.length?f[0]:d;return c.ctx&&r(c.ctx[h],c.ctx[h]=p)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](p),u&&p0(t,h)),d}):[],c.update(),u=!0,qe(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){n0();const h=Pe(e.target);c.fragment&&c.fragment.l(h),h.forEach(H)}else c.fragment&&c.fragment.c();e.intro&&F(t.$$.fragment),dt(t,e.target,e.anchor,e.customElement),i0(),wp()}Na(l)}class Qe{$destroy(){ft(this,1),this.$destroy=hn}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Jw(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Gr=[];function mj(t,e){return{subscribe:Tp(t,e).subscribe}}function Tp(t,e=hn){let n;const i=new Set;function r(a){if(We(t,a)&&(t=a,n)){const l=!Gr.length;for(const c of i)c[1](),Gr.push(c,t);if(l){for(let c=0;c<Gr.length;c+=2)Gr[c][0](Gr[c+1]);Gr.length=0}}}function s(a){r(a(t))}function o(a,l=hn){const c=[a,l];return i.add(c),i.size===1&&(n=e(r)||hn),a(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:r,update:s,subscribe:o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw zr(e)},zr=function(t){return new Error("Firebase Database ("+Cp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)==55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)==56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},m0=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(n[u],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):m0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw Error();const d=s<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},g0=function(t){const e=Sp(t);return _u.encodeByteArray(e,!0)},vu=function(t){try{return _u.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(t){return Ap(void 0,t)}function Ap(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!v0(n)||(t[n]=Ap(t[n],e[n]));return t}function v0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ut(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fa(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function kp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function y0(){return Ut().indexOf("Electron/")>=0}function Rp(){const t=Ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function b0(){return Ut().indexOf("MSAppHost/")>=0}function Op(){return Cp.NODE_ADMIN===!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="FirebaseError";class $i extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=E0,Object.setPrototypeOf(this,$i.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ys.prototype.create)}}class Ys{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?I0(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new $i(r,a,i)}}function I0(t,e){return t.replace(w0,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const w0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){return JSON.parse(t)}function jt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=Js(vu(s[0])||""),n=Js(vu(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},T0=function(t){const e=Lp(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},C0=function(t){const e=Lp(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Kr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function xa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ua(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function ja(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Mp(s)&&Mp(o)){if(!ja(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Mp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class S0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):h<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const d=(r<<5|r>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function A0(t,e){const n=new k0(t,e);return n.subscribe.bind(n)}class k0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");R0(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=bu),r.error===void 0&&(r.error=bu),r.complete===void 0&&(r.complete=bu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function R0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bu(){}function Xr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,B(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Va=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class Ti{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class L0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new wi;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(N0(e))try{this.getOrInitializeService({instanceIdentifier:tr})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tr){return this.instances.has(e)}getOptions(e=tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:M0(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=tr){return this.component?this.component.multipleInstances?e:tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function M0(t){return t===tr?void 0:t}function N0(t){return t.instantiationMode==="EAGER"}/**
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
 */class P0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new L0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ne||(Ne={}));const D0={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},F0=Ne.INFO,x0={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},U0=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=x0[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ba{constructor(e){this.name=e,this._logLevel=F0,this._logHandler=U0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?D0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}/**
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
 */class j0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(V0(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function V0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Eu="@firebase/app",Np="0.7.9";/**
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
 */const Iu=new Ba("@firebase/app"),B0="@firebase/app-compat",H0="@firebase/analytics-compat",q0="@firebase/analytics",W0="@firebase/app-check-compat",G0="@firebase/app-check",z0="@firebase/auth",K0="@firebase/auth-compat",X0="@firebase/database",Q0="@firebase/database-compat",Y0="@firebase/functions",J0="@firebase/functions-compat",Z0="@firebase/installations",$0="@firebase/installations-compat",eT="@firebase/messaging",tT="@firebase/messaging-compat",nT="@firebase/performance",iT="@firebase/performance-compat",rT="@firebase/remote-config",sT="@firebase/remote-config-compat",oT="@firebase/storage",aT="@firebase/storage-compat",lT="@firebase/firestore",cT="@firebase/firestore-compat",uT="firebase",hT="9.5.0";/**
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
 */const Pp="[DEFAULT]",dT={[Eu]:"fire-core",[B0]:"fire-core-compat",[q0]:"fire-analytics",[H0]:"fire-analytics-compat",[G0]:"fire-app-check",[W0]:"fire-app-check-compat",[z0]:"fire-auth",[K0]:"fire-auth-compat",[X0]:"fire-rtdb",[Q0]:"fire-rtdb-compat",[Y0]:"fire-fn",[J0]:"fire-fn-compat",[Z0]:"fire-iid",[$0]:"fire-iid-compat",[eT]:"fire-fcm",[tT]:"fire-fcm-compat",[nT]:"fire-perf",[iT]:"fire-perf-compat",[rT]:"fire-rc",[sT]:"fire-rc-compat",[oT]:"fire-gcs",[aT]:"fire-gcs-compat",[lT]:"fire-fst",[cT]:"fire-fst-compat","fire-js":"fire-js",[uT]:"fire-js-all"};/**
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
 */const Ha=new Map,wu=new Map;function fT(t,e){try{t.container.addComponent(e)}catch(n){Iu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nr(t){const e=t.name;if(wu.has(e))return Iu.debug(`There were multiple attempts to register component ${e}.`),!1;wu.set(e,t);for(const n of Ha.values())fT(n,t);return!0}function Zs(t,e){return t.container.getProvider(e)}/**
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
 */const pT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},qa=new Ys("app","Firebase",pT);/**
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
 */class mT{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ti("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qa.create("app-deleted",{appName:this._name})}}/**
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
 */const ir=hT;function gj(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Pp,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw qa.create("bad-app-name",{appName:String(i)});const r=Ha.get(i);if(r){if(ja(t,r.options)&&ja(n,r.config))return r;throw qa.create("duplicate-app",{appName:i})}const s=new P0(i);for(const a of wu.values())s.addComponent(a);const o=new mT(t,n,s);return Ha.set(i,o),o}function Wa(t=Pp){const e=Ha.get(t);if(!e)throw qa.create("no-app",{appName:t});return e}function jn(t,e,n){var i;let r=(i=dT[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Iu.warn(a.join(" "));return}nr(new Ti(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */function gT(t){nr(new Ti("platform-logger",e=>new j0(e),"PRIVATE")),jn(Eu,Np,t),jn(Eu,Np,"esm2017"),jn("fire-js","")}gT("");var _T="firebase",vT="9.5.0";/**
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
 */jn(_T,vT,"app");/*! *****************************************************************************
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
***************************************************************************** */var Tu=function(t,e){return Tu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])},Tu(t,e)};function qn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Tu(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var pt=function(){return pt=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},pt.apply(this,arguments)};function Cu(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function ti(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Dp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yT=Dp,Fp=new Ys("auth","Firebase",Dp());/**
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
 */const xp=new Ba("@firebase/auth");function Ga(t,...e){xp.logLevel<=Ne.ERROR&&xp.error(`Auth (${ir}): ${t}`,...e)}/**
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
 */function ni(t,...e){throw Su(t,...e)}function Rn(t,...e){return Su(t,...e)}function bT(t,e,n){const i=Object.assign(Object.assign({},yT()),{[e]:n});return new Ys("auth","Firebase",i).create(e,{appName:t.name})}function Su(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Fp.create(t,...e)}function J(t,e,...n){if(!t)throw Su(e,...n)}function ii(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ga(e),new Error(e)}function ri(t,e){t||ii(e)}/**
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
 */const Up=new Map;function si(t){ri(t instanceof Function,"Expected a class definition");let e=Up.get(t);return e?(ri(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Up.set(t,e),e)}/**
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
 */function ET(t,e){const n=Zs(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(ja(s,e!=null?e:{}))return r;ni(r,"already-initialized")}return n.initialize({options:e})}function IT(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(si);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Au(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jp(){return Vp()==="http:"||Vp()==="https:"}function Vp(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function wT(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jp()||kp()||"connection"in navigator)?navigator.onLine:!0}function TT(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $s{constructor(e,n){this.shortDelay=e,this.longDelay=n,ri(n>e,"Short delay should be less than long delay!"),this.isMobile=Fa()||yu()}get(){return wT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ku(t,e){ri(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ru{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ii("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ii("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ii("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const ST=new $s(3e4,6e4);function rr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ci(t,e,n,i,r={}){return Bp(t,r,()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=er(Object.assign({key:t.config.apiKey},o)).slice(1),l=new(Ru.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&l.set("X-Firebase-Locale",t.languageCode),Ru.fetch()(Hp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Bp(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},CT),e);try{const r=new AT(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ka(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ka(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ka(t,"email-already-in-use",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw bT(t,u,c);ni(t,u)}}catch(r){if(r instanceof $i)throw r;ni(t,"network-request-failed")}}async function za(t,e,n,i,r={}){const s=await Ci(t,e,n,i,r);return"mfaPendingCredential"in s&&ni(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Hp(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?ku(t.config,r):`${t.config.apiScheme}://${r}`}class AT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Rn(this.auth,"timeout")),ST.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ka(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Rn(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function kT(t,e){return Ci(t,"POST","/v1/accounts:delete",e)}async function RT(t,e){return Ci(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function eo(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OT(t,e=!1){const n=$e(t),i=await n.getIdToken(e),r=Lu(i);J(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:eo(Ou(r.auth_time)),issuedAtTime:eo(Ou(r.iat)),expirationTime:eo(Ou(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ou(t){return Number(t)*1e3}function Lu(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Ga("JWT malformed, contained fewer than 3 sections"),null;try{const r=vu(n);return r?JSON.parse(r):(Ga("Failed to decode base64 JWT payload"),null)}catch(r){return Ga("Caught error parsing JWT payload as JSON",r),null}}function LT(t){const e=Lu(t);return J(e,"internal-error"),J(typeof e.exp!="undefined","internal-error"),J(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function to(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof $i&&MT(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function MT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class NT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=eo(this.lastLoginAt),this.creationTime=eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xa(t){var e;const n=t.auth,i=await t.getIdToken(),r=await to(t,RT(n,{idToken:i}));J(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?FT(s.providerUserInfo):[],a=DT(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new qp(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function PT(t){const e=$e(t);await Xa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DT(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function FT(t){return t.map(e=>{var{providerId:n}=e,i=Cu(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function xT(t,e){const n=await Bp(t,{},()=>{const i=er({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=Hp(t,r,"/v1/token",`key=${s}`);return Ru.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class no{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken!="undefined","internal-error"),J(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):LT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await xT(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new no;return i&&(J(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(J(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new no,this.toJSON())}_performRefresh(){return ii("not implemented")}}/**
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
 */function Si(t,e){J(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=Cu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new NT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new qp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await to(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return OT(this,e)}reload(){return PT(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Xa(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await to(this,kT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,A=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:S,isAnonymous:q,providerData:k,stsTokenManager:_}=n;J(w&&_,e,"internal-error");const I=no.fromJSON(this.name,_);J(typeof w=="string",e,"internal-error"),Si(h,e.name),Si(d,e.name),J(typeof S=="boolean",e,"internal-error"),J(typeof q=="boolean",e,"internal-error"),Si(f,e.name),Si(p,e.name),Si(m,e.name),Si(g,e.name),Si(v,e.name),Si(A,e.name);const U=new sr({uid:w,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:q,photoURL:p,phoneNumber:f,tenantId:m,stsTokenManager:I,createdAt:v,lastLoginAt:A});return k&&Array.isArray(k)&&(U.providerData=k.map(b=>Object.assign({},b))),g&&(U._redirectEventId=g),U}static async _fromIdTokenResponse(e,n,i=!1){const r=new no;r.updateFromServerResponse(n);const s=new sr({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Xa(s),s}}/**
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
 */class Wp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wp.type="NONE";const Gp=Wp;/**
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
 */function Qa(t,e,n){return`firebase:${t}:${e}:${n}`}class Qr{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Qa(this.userKey,r.apiKey,s),this.fullPersistenceKey=Qa("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Qr(si(Gp),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||si(Gp);const o=Qa(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=sr._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Qr(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Qr(s,e,i))}}/**
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
 */function zp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jp(e))return"Blackberry";if(Zp(e))return"Webos";if(Mu(e))return"Safari";if((e.includes("chrome/")||Xp(e))&&!e.includes("edge/"))return"Chrome";if(Yp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Kp(t=Ut()){return/firefox\//i.test(t)}function Mu(t=Ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xp(t=Ut()){return/crios\//i.test(t)}function Qp(t=Ut()){return/iemobile/i.test(t)}function Yp(t=Ut()){return/android/i.test(t)}function Jp(t=Ut()){return/blackberry/i.test(t)}function Zp(t=Ut()){return/webos/i.test(t)}function Ya(t=Ut()){return/iphone|ipad|ipod/i.test(t)}function UT(t=Ut()){var e;return Ya(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function jT(){return Rp()&&document.documentMode===10}function $p(t=Ut()){return Ya(t)||Yp(t)||Zp(t)||Jp(t)||/windows phone/i.test(t)||Qp(t)}function VT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function em(t,e=[]){let n;switch(t){case"Browser":n=zp(Ut());break;case"Worker":n=`${zp(Ut())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ir}/${i}`}/**
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
 */class BT{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tm(this),this.idTokenSubscription=new tm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=si(n)),this._initializationPromise=this.queue(async()=>{var i,r;this._deleted||(this.persistenceManager=await Qr.create(this,e),!this._deleted&&(((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xa(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$e(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(si(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ys("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&si(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Qr.create(this,[si(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return J(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=em(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function io(t){return $e(t)}class tm{constructor(e){this.auth=e,this.observer=null,this.addObserver=A0(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Nu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ii("not implemented")}_getIdTokenResponse(e){return ii("not implemented")}_linkToIdToken(e,n){return ii("not implemented")}_getReauthenticationResolver(e){return ii("not implemented")}}/**
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
 */async function Yr(t,e){return za(t,"POST","/v1/accounts:signInWithIdp",rr(t,e))}/**
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
 */const HT="http://localhost";class or extends Nu{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ni("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=Cu(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new or(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yr(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Yr(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yr(e,n)}buildRequest(){const e={requestUri:HT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=er(n)}return e}}/**
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
 */async function qT(t,e){return Ci(t,"POST","/v1/accounts:sendVerificationCode",rr(t,e))}async function WT(t,e){return za(t,"POST","/v1/accounts:signInWithPhoneNumber",rr(t,e))}async function GT(t,e){const n=await za(t,"POST","/v1/accounts:signInWithPhoneNumber",rr(t,e));if(n.temporaryProof)throw Ka(t,"account-exists-with-different-credential",n);return n}const zT={USER_NOT_FOUND:"user-not-found"};async function KT(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return za(t,"POST","/v1/accounts:signInWithPhoneNumber",rr(t,n),zT)}/**
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
 */class ro extends Nu{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new ro({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ro({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return WT(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return GT(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return KT(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:i,verificationCode:r}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:i,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!n&&!r&&!s?null:new ro({verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s})}}/**
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
 */class nm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class so extends nm{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ai extends so{constructor(){super("facebook.com")}static credential(e){return or._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ai.credential(e.oauthAccessToken)}catch{return null}}}Ai.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ai.PROVIDER_ID="facebook.com";/**
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
 */class ki extends so{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return or._fromParams({providerId:ki.PROVIDER_ID,signInMethod:ki.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ki.credentialFromTaggedObject(e)}static credentialFromError(e){return ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return ki.credential(n,i)}catch{return null}}}ki.GOOGLE_SIGN_IN_METHOD="google.com";ki.PROVIDER_ID="google.com";/**
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
 */class Ri extends so{constructor(){super("github.com")}static credential(e){return or._fromParams({providerId:Ri.PROVIDER_ID,signInMethod:Ri.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ri.credentialFromTaggedObject(e)}static credentialFromError(e){return Ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ri.credential(e.oauthAccessToken)}catch{return null}}}Ri.GITHUB_SIGN_IN_METHOD="github.com";Ri.PROVIDER_ID="github.com";/**
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
 */class Oi extends so{constructor(){super("twitter.com")}static credential(e,n){return or._fromParams({providerId:Oi.PROVIDER_ID,signInMethod:Oi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Oi.credentialFromTaggedObject(e)}static credentialFromError(e){return Oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Oi.credential(n,i)}catch{return null}}}Oi.TWITTER_SIGN_IN_METHOD="twitter.com";Oi.PROVIDER_ID="twitter.com";/**
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
 */class Jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await sr._fromIdTokenResponse(e,i,r),o=im(i);return new Jr({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=im(i);return new Jr({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function im(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ja extends $i{constructor(e,n,i,r){var s;super(n.code,n.message);this.operationType=i,this.user=r,Object.setPrototypeOf(this,Ja.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Ja(e,n,i,r)}}function rm(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ja._fromErrorAndOperation(t,s,e,i):s})}async function XT(t,e,n=!1){const i=await to(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jr._forOperation(t,"link",i)}/**
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
 */async function QT(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await to(t,rm(i,r,e,t),n);J(s.idToken,i,"internal-error");const o=Lu(s.idToken);J(o,i,"internal-error");const{sub:a}=o;return J(t.uid===a,i,"user-mismatch"),Jr._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ni(i,"user-mismatch"),s}}/**
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
 */async function sm(t,e,n=!1){const i="signIn",r=await rm(t,i,e),s=await Jr._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function YT(t,e){return sm(io(t),e)}function _j(t,e,n,i){return $e(t).onAuthStateChanged(e,n,i)}/**
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
 */function JT(t,e){return Ci(t,"POST","/v2/accounts/mfaEnrollment:start",rr(t,e))}const Za="__sak";/**
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
 */class om{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Za,"1"),this.storage.removeItem(Za),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ZT(){const t=Ut();return Mu(t)||Ya(t)}const $T=1e3,eC=10;class am extends om{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ZT()&&VT(),this.fallbackToPolling=$p(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);jT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,eC):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},$T)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}am.type="LOCAL";const tC=am;/**
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
 */class lm extends om{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lm.type="SESSION";const cm=lm;/**
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
 */function nC(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $a{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new $a(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await nC(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$a.receivers=[];/**
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
 */function Pu(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class iC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Pu("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Nt(){return window}function rC(t){Nt().location.href=t}/**
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
 */function Du(){return typeof Nt().WorkerGlobalScope!="undefined"&&typeof Nt().importScripts=="function"}async function sC(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aC(){return Du()?self:null}/**
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
 */const um="firebaseLocalStorageDb",lC=1,el="firebaseLocalStorage",hm="fbase_key";class oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tl(t,e){return t.transaction([el],e?"readwrite":"readonly").objectStore(el)}function cC(){const t=indexedDB.deleteDatabase(um);return new oo(t).toPromise()}function Fu(){const t=indexedDB.open(um,lC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(el,{keyPath:hm})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(el)?e(i):(i.close(),await cC(),e(await Fu()))})})}async function dm(t,e,n){const i=tl(t,!0).put({[hm]:e,value:n});return new oo(i).toPromise()}async function uC(t,e){const n=tl(t,!1).get(e),i=await new oo(n).toPromise();return i===void 0?null:i.value}function fm(t,e){const n=tl(t,!0).delete(e);return new oo(n).toPromise()}const hC=800,dC=3;class pm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>dC)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Du()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$a._getInstance(aC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sC(),!this.activeServiceWorker)return;this.sender=new iC(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fu();return await dm(e,Za,"1"),await fm(e,Za),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>dm(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>uC(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=tl(r,!1).getAll();return new oo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pm.type="LOCAL";const fC=pm;/**
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
 */function pC(t,e){return Ci(t,"POST","/v2/accounts/mfaSignIn:start",rr(t,e))}/**
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
 */async function mC(t){return(await Ci(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function gC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function mm(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Rn("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",gC().appendChild(i)})}function gm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const _C=500,vC=6e4,nl=1e12;class yC{constructor(e){this.auth=e,this.counter=nl,this._widgets=new Map}render(e,n){const i=this.counter;return this._widgets.set(i,new bC(e,this.auth.name,n||{})),this.counter++,i}reset(e){var n;const i=e||nl;(n=this._widgets.get(i))===null||n===void 0||n.delete(),this._widgets.delete(i)}getResponse(e){var n;const i=e||nl;return((n=this._widgets.get(i))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const i=e||nl;return(n=this._widgets.get(i))===null||n===void 0||n.execute(),""}}class bC{constructor(e,n,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;J(r,"argument-error",{appName:n}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=EC(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},vC)},_C))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function EC(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const xu=gm("rcb"),IC=new $s(3e4,6e4),wC="https://www.google.com/recaptcha/api.js?";class TC{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Nt().grecaptcha}load(e,n=""){return J(CC(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Nt().grecaptcha):new Promise((i,r)=>{const s=Nt().setTimeout(()=>{r(Rn(e,"network-request-failed"))},IC.get());Nt()[xu]=()=>{Nt().clearTimeout(s),delete Nt()[xu];const a=Nt().grecaptcha;if(!a){r(Rn(e,"internal-error"));return}const l=a.render;a.render=(c,u)=>{const h=l(c,u);return this.counter++,h},this.hostLanguage=n,i(a)};const o=`${wC}?${er({onload:xu,render:"explicit",hl:n})}`;mm(o).catch(()=>{clearTimeout(s),r(Rn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Nt().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function CC(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class SC{async load(e){return new yC(e)}clearedOneInstance(){}}/**
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
 */const _m="recaptcha",AC={theme:"light",type:"image"};class vj{constructor(e,n=Object.assign({},AC),i){this.parameters=n,this.type=_m,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=io(i),this.isInvisible=this.parameters.size==="invisible",J(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const r=typeof e=="string"?document.getElementById(e):e;J(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new SC:new TC,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),i=n.getResponse(e);return i||new Promise(r=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),r(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){J(!this.parameters.sitekey,this.auth,"argument-error"),J(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),J(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(i=>i(n)),typeof e=="function")e(n);else if(typeof e=="string"){const i=Nt()[e];typeof i=="function"&&i(n)}}}assertNotDestroyed(){J(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){J(jp()&&!Du(),this.auth,"internal-error"),await kC(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await mC(this.auth);J(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return J(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function kC(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class RC{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ro._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function yj(t,e,n){const i=io(t),r=await OC(i,e,$e(n));return new RC(r,s=>YT(i,s))}async function OC(t,e,n){var i;const r=await n.verify();try{J(typeof r=="string",t,"argument-error"),J(n.type===_m,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return J(o.type==="enroll",t,"internal-error"),(await JT(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{J(o.type==="signin",t,"internal-error");const a=((i=s.multiFactorHint)===null||i===void 0?void 0:i.uid)||s.multiFactorUid;return J(a,t,"missing-multi-factor-info"),(await pC(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await qT(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return o}}finally{n._reset()}}/**
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
 */function LC(t,e){return e?si(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uu extends Nu{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function MC(t){return sm(t.auth,new Uu(t),t.bypassAuthState)}function NC(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),QT(n,new Uu(t),t.bypassAuthState)}async function PC(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),XT(n,new Uu(t),t.bypassAuthState)}/**
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
 */class vm{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MC;case"linkViaPopup":case"linkViaRedirect":return PC;case"reauthViaPopup":case"reauthViaRedirect":return NC;default:ni(this.auth,"internal-error")}}resolve(e){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const DC=new $s(2e3,1e4);class Zr extends vm{constructor(e,n,i,r,s){super(e,n,r,s);this.provider=i,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){ri(this.filter.length===1,"Popup operations only handle one event");const e=Pu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,DC.get())};e()}}Zr.currentPopupAction=null;/**
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
 */const FC="pendingRedirect",ju=new Map;class xC extends vm{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=ju.get(this.auth._key());if(!e){try{const i=await UC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ju.set(this.auth._key(),e)}return this.bypassAuthState||ju.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UC(t,e){const n=VC(e),i=jC(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function jC(t){return si(t._redirectPersistence)}function VC(t){return Qa(FC,t.config.apiKey,t.name)}async function BC(t,e,n=!1){const i=io(t),r=LC(i,e),o=await new xC(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const HC=10*60*1e3;class qC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!bm(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HC&&this.cachedEventUids.clear(),this.cachedEventUids.has(ym(e))}saveEventToCache(e){this.cachedEventUids.add(ym(e)),this.lastProcessedEventTime=Date.now()}}function ym(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bm(t);default:return!1}}/**
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
 */async function GC(t,e={}){return Ci(t,"GET","/v1/projects",e)}/**
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
 */const zC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KC=/^https?/;async function XC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GC(t);for(const n of e)try{if(QC(n))return}catch{}ni(t,"unauthorized-domain")}function QC(t){const e=Au(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!KC.test(n))return!1;if(zC.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const YC=new $s(3e4,6e4);function Em(){const t=Nt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JC(t){return new Promise((e,n)=>{var i,r,s;function o(){Em(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Em(),n(Rn(t,"network-request-failed"))},timeout:YC.get()})}if((r=(i=Nt().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0?void 0:r.Iframe)e(gapi.iframes.getContext());else if((s=Nt().gapi)===null||s===void 0?void 0:s.load)o();else{const a=gm("iframefcb");return Nt()[a]=()=>{gapi.load?o():n(Rn(t,"network-request-failed"))},mm(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw il=null,e})}let il=null;function ZC(t){return il=il||JC(t),il}/**
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
 */const $C=new $s(5e3,15e3),eS="__/auth/iframe",tS="emulator/auth/iframe",nS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rS(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ku(e,tS):`https://${t.config.authDomain}/${eS}`,i={apiKey:e.apiKey,appName:t.name,v:ir},r=iS.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${er(i).slice(1)}`}async function sS(t){const e=await ZC(t),n=Nt().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:rS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nS,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),a=Nt().setTimeout(()=>{s(o)},$C.get());function l(){Nt().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const oS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aS=500,lS=600,cS="_blank",uS="http://localhost";class Im{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hS(t,e,n,i=aS,r=lS){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},oS),{width:i.toString(),height:r.toString(),top:s,left:o}),c=Ut().toLowerCase();n&&(a=Xp(c)?cS:n),Kp(c)&&(e=e||uS,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(UT(c)&&a!=="_self")return dS(e||"",a),new Im(null);const h=window.open(e||"",a,u);J(h,t,"popup-blocked");try{h.focus()}catch{}return new Im(h)}function dS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const fS="__/auth/handler",pS="emulator/auth/handler";function wm(t,e,n,i,r,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ir,eventId:r};if(e instanceof nm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof so){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${mS(t)}?${er(a).slice(1)}`}function mS({config:t}){return t.emulator?ku(t,pS):`https://${t.authDomain}/${fS}`}/**
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
 */const Vu="webStorageSupport";class gS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cm,this._completeRedirectFn=BC}async _openPopup(e,n,i,r){var s;ri((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=wm(e,n,i,Au(),r);return hS(e,o,Pu())}async _openRedirect(e,n,i,r){return await this._originValidation(e),rC(wm(e,n,i,Au(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(ri(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i}async initAndGetManager(e){const n=await sS(e),i=new qC(e);return n.register("authEvent",r=>(J(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vu,{type:Vu},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Vu];o!==void 0&&n(!!o),ni(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $p()||Mu()||Ya()}}const _S=gS;var Tm="@firebase/auth",Cm="0.19.3";/**
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
 */class vS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var r;e(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bS(t){nr(new Ti("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=i.options;return(o=>{J(r&&!r.includes(":"),"invalid-api-key",{appName:o.name}),J(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:r,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:em(t)},l=new BT(o,a);return IT(l,n),l})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),nr(new Ti("auth-internal",e=>{const n=io(e.getProvider("auth").getImmediate());return(i=>new vS(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(Tm,Cm,yS(t)),jn(Tm,Cm,"esm2017")}/**
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
 */function bj(t=Wa()){const e=Zs(t,"auth");return e.isInitialized()?e.getImmediate():ET(t,{popupRedirectResolver:_S,persistence:[fC,tC,cm]})}bS("Browser");var ES=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Q,Bu=Bu||{},ce=ES||self;function rl(){}function Hu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ao(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function IS(t){return Object.prototype.hasOwnProperty.call(t,qu)&&t[qu]||(t[qu]=++wS)}var qu="closure_uid_"+(1e9*Math.random()>>>0),wS=0;function TS(t,e,n){return t.call.apply(t.bind,arguments)}function CS(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function zt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?zt=TS:zt=CS,zt.apply(null,arguments)}function sl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Kt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function Li(){this.s=this.s,this.o=this.o}var SS=0,AS={};Li.prototype.s=!1;Li.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),SS!=0)){var t=IS(this);delete AS[t]}};Li.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Sm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Am=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function kS(t){e:{var e=y1;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function km(t){return Array.prototype.concat.apply([],arguments)}function Wu(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function ol(t){return/^[\s\xa0]*$/.test(t)}var Rm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function dn(t,e){return t.indexOf(e)!=-1}function Gu(t,e){return t<e?-1:t>e?1:0}var fn;e:{var Om=ce.navigator;if(Om){var Lm=Om.userAgent;if(Lm){fn=Lm;break e}}fn=""}function zu(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Mm(t){const e={};for(const n in t)e[n]=t[n];return e}var Nm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pm(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<Nm.length;s++)n=Nm[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Ku(t){return Ku[" "](t),t}Ku[" "]=rl;function RS(t){var e=MS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var OS=dn(fn,"Opera"),$r=dn(fn,"Trident")||dn(fn,"MSIE"),Dm=dn(fn,"Edge"),Xu=Dm||$r,Fm=dn(fn,"Gecko")&&!(dn(fn.toLowerCase(),"webkit")&&!dn(fn,"Edge"))&&!(dn(fn,"Trident")||dn(fn,"MSIE"))&&!dn(fn,"Edge"),LS=dn(fn.toLowerCase(),"webkit")&&!dn(fn,"Edge");function xm(){var t=ce.document;return t?t.documentMode:void 0}var al;e:{var Qu="",Yu=function(){var t=fn;if(Fm)return/rv:([^\);]+)(\)|;)/.exec(t);if(Dm)return/Edge\/([\d\.]+)/.exec(t);if($r)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(LS)return/WebKit\/(\S+)/.exec(t);if(OS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Yu&&(Qu=Yu?Yu[1]:""),$r){var Ju=xm();if(Ju!=null&&Ju>parseFloat(Qu)){al=String(Ju);break e}}al=Qu}var MS={};function NS(){return RS(function(){let t=0;const e=Rm(String(al)).split("."),n=Rm("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=Gu(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||Gu(r[2].length==0,s[2].length==0)||Gu(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}var Zu;if(ce.document&&$r){var Um=xm();Zu=Um||parseInt(al,10)||void 0}else Zu=void 0;var PS=Zu,DS=function(){if(!ce.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ce.addEventListener("test",rl,e),ce.removeEventListener("test",rl,e)}catch{}return t}();function rn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}rn.prototype.h=function(){this.defaultPrevented=!0};function lo(t,e){if(rn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Fm){e:{try{Ku(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:FS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&lo.Z.h.call(this)}}Kt(lo,rn);var FS={2:"touch",3:"pen",4:"mouse"};lo.prototype.h=function(){lo.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var co="closure_listenable_"+(1e6*Math.random()|0),xS=0;function US(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++xS,this.ca=this.fa=!1}function ll(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function cl(t){this.src=t,this.g={},this.h=0}cl.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=eh(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new US(e,this.src,s,!!i,r),e.fa=n,t.push(e)),e};function $u(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=Sm(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(ll(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function eh(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}var th="closure_lm_"+(1e6*Math.random()|0),nh={};function jm(t,e,n,i,r){if(i&&i.once)return Bm(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)jm(t,e[s],n,i,r);return null}return n=oh(n),t&&t[co]?t.N(e,n,ao(i)?!!i.capture:!!i,r):Vm(t,e,n,!1,i,r)}function Vm(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=ao(r)?!!r.capture:!!r,a=rh(t);if(a||(t[th]=a=new cl(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=jS(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)DS||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(qm(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function jS(){function t(n){return e.call(t.src,t.listener,n)}var e=VS;return t}function Bm(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Bm(t,e[s],n,i,r);return null}return n=oh(n),t&&t[co]?t.O(e,n,ao(i)?!!i.capture:!!i,r):Vm(t,e,n,!0,i,r)}function Hm(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Hm(t,e[s],n,i,r);else i=ao(i)?!!i.capture:!!i,n=oh(n),t&&t[co]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=eh(s,n,i,r),-1<n&&(ll(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=rh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=eh(e,n,i,r)),(n=-1<t?e[t]:null)&&ih(n))}function ih(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[co])$u(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(qm(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=rh(e))?($u(n,t),n.h==0&&(n.src=null,e[th]=null)):ll(t)}}}function qm(t){return t in nh?nh[t]:nh[t]="on"+t}function VS(t,e){if(t.ca)t=!0;else{e=new lo(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&ih(t),t=n.call(i,e)}return t}function rh(t){return t=t[th],t instanceof cl?t:null}var sh="__closure_events_fn_"+(1e9*Math.random()>>>0);function oh(t){return typeof t=="function"?t:(t[sh]||(t[sh]=function(e){return t.handleEvent(e)}),t[sh])}function Vt(){Li.call(this),this.i=new cl(this),this.P=this,this.I=null}Kt(Vt,Li);Vt.prototype[co]=!0;Vt.prototype.removeEventListener=function(t,e,n,i){Hm(this,t,e,n,i)};function Xt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new rn(e,t);else if(e instanceof rn)e.target=e.target||t;else{var r=e;e=new rn(i,t),Pm(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=ul(o,i,!0,e)&&r}if(o=e.g=t,r=ul(o,i,!0,e)&&r,r=ul(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=ul(o,i,!1,e)&&r}Vt.prototype.M=function(){if(Vt.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)ll(n[i]);delete t.g[e],t.h--}}this.I=null};Vt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Vt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function ul(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&$u(t.i,o),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var ah=ce.JSON.stringify;function BS(){var t=Gm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class HS{constructor(){this.h=this.g=null}add(e,n){const i=Wm.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Wm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new qS,t=>t.reset());class qS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function WS(t){ce.setTimeout(()=>{throw t},0)}function lh(t,e){ch||GS(),uh||(ch(),uh=!0),Gm.add(t,e)}var ch;function GS(){var t=ce.Promise.resolve(void 0);ch=function(){t.then(zS)}}var uh=!1,Gm=new HS;function zS(){for(var t;t=BS();){try{t.h.call(t.g)}catch(n){WS(n)}var e=Wm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}uh=!1}function hl(t,e){Vt.call(this),this.h=t||1,this.g=e||ce,this.j=zt(this.kb,this),this.l=Date.now()}Kt(hl,Vt);Q=hl.prototype;Q.da=!1;Q.S=null;Q.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Xt(this,"tick"),this.da&&(hh(this),this.start()))}};Q.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function hh(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}Q.M=function(){hl.Z.M.call(this),hh(this),delete this.g};function dh(t,e,n){if(typeof t=="function")n&&(t=zt(t,n));else if(t&&typeof t.handleEvent=="function")t=zt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ce.setTimeout(t,e||0)}function zm(t){t.g=dh(()=>{t.g=null,t.i&&(t.i=!1,zm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class KS extends Li{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:zm(this)}M(){super.M(),this.g&&(ce.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function uo(t){Li.call(this),this.h=t,this.g={}}Kt(uo,Li);var Km=[];function Xm(t,e,n,i){Array.isArray(n)||(n&&(Km[0]=n.toString()),n=Km);for(var r=0;r<n.length;r++){var s=jm(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Qm(t){zu(t.g,function(e,n){this.g.hasOwnProperty(n)&&ih(e)},t),t.g={}}uo.prototype.M=function(){uo.Z.M.call(this),Qm(this)};uo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function dl(){this.g=!0}dl.prototype.Aa=function(){this.g=!1};function XS(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function QS(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function es(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+JS(t,n)+(i?" "+i:"")})}function YS(t,e){t.info(function(){return"TIMEOUT: "+e})}dl.prototype.info=function(){};function JS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ah(n)}catch{return e}}var ar={},Ym=null;function fl(){return Ym=Ym||new Vt}ar.Ma="serverreachability";function Jm(t){rn.call(this,ar.Ma,t)}Kt(Jm,rn);function ho(t){const e=fl();Xt(e,new Jm(e,t))}ar.STAT_EVENT="statevent";function Zm(t,e){rn.call(this,ar.STAT_EVENT,t),this.stat=e}Kt(Zm,rn);function pn(t){const e=fl();Xt(e,new Zm(e,t))}ar.Na="timingevent";function $m(t,e){rn.call(this,ar.Na,t),this.size=e}Kt($m,rn);function fo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ce.setTimeout(function(){t()},e)}var pl={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},eg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fh(){}fh.prototype.h=null;function tg(t){return t.h||(t.h=t.i())}function ng(){}var po={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ph(){rn.call(this,"d")}Kt(ph,rn);function mh(){rn.call(this,"c")}Kt(mh,rn);var gh;function ml(){}Kt(ml,fh);ml.prototype.g=function(){return new XMLHttpRequest};ml.prototype.i=function(){return{}};gh=new ml;function mo(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new uo(this),this.P=ZS,t=Xu?125:void 0,this.W=new hl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ig}function ig(){this.i=null,this.g="",this.h=!1}var ZS=45e3,_h={},gl={};Q=mo.prototype;Q.setTimeout=function(t){this.P=t};function vh(t,e,n){t.K=1,t.v=El(oi(e)),t.s=n,t.U=!0,rg(t,null)}function rg(t,e){t.F=Date.now(),go(t),t.A=oi(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),fg(n.h,"t",i),t.C=0,n=t.l.H,t.h=new ig,t.g=Fg(t.l,n?e:null,!t.s),0<t.O&&(t.L=new KS(zt(t.Ia,t,t.g),t.O)),Xm(t.V,t.g,"readystatechange",t.gb),e=t.H?Mm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ho(1),XS(t.j,t.u,t.A,t.m,t.X,t.s)}Q.gb=function(t){t=t.target;const e=this.L;e&&ai(t)==3?e.l():this.Ia(t)};Q.Ia=function(t){try{if(t==this.g)e:{const u=ai(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Xu||this.g&&(this.h.h||this.g.ga()||Cg(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ho(3):ho(2)),_l(this);var n=this.g.ba();this.N=n;t:if(sg(this)){var i=Cg(this.g);t="";var r=i.length,s=ai(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){lr(this),_o(this);var o="";break t}this.h.i=new ce.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,QS(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ol(a)){var c=a;break t}}c=null}if(n=c)es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,yh(this,n);else{this.i=!1,this.o=3,pn(12),lr(this),_o(this);break e}}this.U?(og(this,u,o),Xu&&this.i&&u==3&&(Xm(this.V,this.W,"tick",this.fb),this.W.start())):(es(this.j,this.m,o,null),yh(this,o)),u==4&&lr(this),this.i&&!this.I&&(u==4?Mg(this.l,this):(this.i=!1,go(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pn(12)):(this.o=0,pn(13)),lr(this),_o(this)}}}catch{}finally{}};function sg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function og(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if(r=$S(t,n),r==gl){e==4&&(t.o=4,pn(14),i=!1),es(t.j,t.m,null,"[Incomplete Response]");break}else if(r==_h){t.o=4,pn(15),es(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else es(t.j,t.m,r,null),yh(t,r);sg(t)&&r!=gl&&r!=_h&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Oh(e),e.L=!0,pn(11))):(es(t.j,t.m,n,"[Invalid Chunked Response]"),lr(t),_o(t))}Q.fb=function(){if(this.g){var t=ai(this.g),e=this.g.ga();this.C<e.length&&(_l(this),og(this,t,e),this.i&&t!=4&&go(this))}};function $S(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?gl:(n=Number(e.substring(n,i)),isNaN(n)?_h:(i+=1,i+n>e.length?gl:(e=e.substr(i,n),t.C=i+n,e)))}Q.cancel=function(){this.I=!0,lr(this)};function go(t){t.Y=Date.now()+t.P,ag(t,t.P)}function ag(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=fo(zt(t.eb,t),e)}function _l(t){t.B&&(ce.clearTimeout(t.B),t.B=null)}Q.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(YS(this.j,this.A),this.K!=2&&(ho(3),pn(17)),lr(this),this.o=2,_o(this)):ag(this,this.Y-t)};function _o(t){t.l.G==0||t.I||Mg(t.l,t)}function lr(t){_l(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,hh(t.W),Qm(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function yh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ih(n.i,t))){if(n.I=t.N,!t.J&&Ih(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Al(n),Cl(n);else break e;Rh(n),pn(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=fo(zt(n.ab,n),6e3));if(1>=gg(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else hr(n,11)}else if((t.J||n.g==t)&&Al(n),!ol(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=i.i;!s.g&&(dn(p,"spdy")||dn(p,"quic")||dn(p,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(wh(s,s.h),s.h=null))}if(i.D){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(i.sa=m,ut(i.F,i.D,m))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=Dg(i,i.H?i.la:null,i.W),o.J){_g(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(_l(a),go(a)),i.g=o}else Og(i);0<n.l.length&&Sl(n)}else c[0]!="stop"&&c[0]!="close"||hr(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?hr(n,7):Ah(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}ho(4)}catch{}}function e1(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Hu(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function bh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Hu(t)||typeof t=="string")Am(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Hu(t)||typeof t=="string"){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=e1(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function ts(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof ts)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}Q=ts.prototype;Q.R=function(){Eh(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};Q.T=function(){return Eh(this),this.g.concat()};function Eh(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];cr(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)i=t.g[e],cr(r,i)||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}Q.get=function(t,e){return cr(this.h,t)?this.h[t]:e};Q.set=function(t,e){cr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};Q.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};function cr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var lg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function t1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ur(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ur){this.g=e!==void 0?e:t.g,vl(this,t.j),this.s=t.s,yl(this,t.i),bl(this,t.m),this.l=t.l,e=t.h;var n=new bo;n.i=e.i,e.g&&(n.g=new ts(e.g),n.h=e.h),cg(this,n),this.o=t.o}else t&&(n=String(t).match(lg))?(this.g=!!e,vl(this,n[1]||"",!0),this.s=vo(n[2]||""),yl(this,n[3]||"",!0),bl(this,n[4]),this.l=vo(n[5]||"",!0),cg(this,n[6]||"",!0),this.o=vo(n[7]||"")):(this.g=!!e,this.h=new bo(null,this.g))}ur.prototype.toString=function(){var t=[],e=this.j;e&&t.push(yo(e,ug,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(yo(e,ug,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(yo(n,n.charAt(0)=="/"?o1:s1,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",yo(n,l1)),t.join("")};function oi(t){return new ur(t)}function vl(t,e,n){t.j=n?vo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function yl(t,e,n){t.i=n?vo(e,!0):e}function bl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function cg(t,e,n){e instanceof bo?(t.h=e,c1(t.h,t.g)):(n||(e=yo(e,a1)),t.h=new bo(e,t.g))}function ut(t,e,n){t.h.set(e,n)}function El(t){return ut(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function n1(t){return t instanceof ur?oi(t):new ur(t,void 0)}function i1(t,e,n,i){var r=new ur(null,void 0);return t&&vl(r,t),e&&yl(r,e),n&&bl(r,n),i&&(r.l=i),r}function vo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function yo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,r1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function r1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ug=/[#\/\?@]/g,s1=/[#\?:]/g,o1=/[#\?]/g,a1=/[#\?@]/g,l1=/#/g;function bo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Mi(t){t.g||(t.g=new ts,t.h=0,t.i&&t1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Q=bo.prototype;Q.add=function(t,e){Mi(this),this.i=null,t=ns(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function hg(t,e){Mi(t),e=ns(t,e),cr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,cr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Eh(t)))}function dg(t,e){return Mi(t),e=ns(t,e),cr(t.g.h,e)}Q.forEach=function(t,e){Mi(this),this.g.forEach(function(n,i){Am(n,function(r){t.call(e,r,i,this)},this)},this)};Q.T=function(){Mi(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n};Q.R=function(t){Mi(this);var e=[];if(typeof t=="string")dg(this,t)&&(e=km(e,this.g.get(ns(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=km(e,t[n])}return e};Q.set=function(t,e){return Mi(this),this.i=null,t=ns(this,t),dg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Q.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function fg(t,e,n){hg(t,e),0<n.length&&(t.i=null,t.g.set(ns(t,e),Wu(n)),t.h+=n.length)}Q.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;i[s]!==""&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};function ns(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function c1(t,e){e&&!t.j&&(Mi(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(hg(this,i),fg(this,r,n))},t)),t.j=e}var u1=class{constructor(t,e){this.h=t,this.g=e}};function pg(t){this.l=t||h1,ce.PerformanceNavigationTiming?(t=ce.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ce.g&&ce.g.Ea&&ce.g.Ea()&&ce.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var h1=10;function mg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function gg(t){return t.h?1:t.g?t.g.size:0}function Ih(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function wh(t,e){t.g?t.g.add(e):t.h=e}function _g(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}pg.prototype.cancel=function(){if(this.i=vg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function vg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Wu(t.i)}function Th(){}Th.prototype.stringify=function(t){return ce.JSON.stringify(t,void 0)};Th.prototype.parse=function(t){return ce.JSON.parse(t,void 0)};function d1(){this.g=new Th}function f1(t,e,n){const i=n||"";try{bh(t,function(r,s){let o=r;ao(r)&&(o=ah(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function p1(t,e){const n=new dl;if(ce.Image){const i=new Image;i.onload=sl(Il,n,i,"TestLoadImage: loaded",!0,e),i.onerror=sl(Il,n,i,"TestLoadImage: error",!1,e),i.onabort=sl(Il,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=sl(Il,n,i,"TestLoadImage: timeout",!1,e),ce.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Il(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function Eo(t){this.l=t.$b||null,this.j=t.ib||!1}Kt(Eo,fh);Eo.prototype.g=function(){return new wl(this.l,this.j)};Eo.prototype.i=function(t){return function(){return t}}({});function wl(t,e){Vt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ch,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Kt(wl,Vt);var Ch=0;Q=wl.prototype;Q.open=function(t,e){if(this.readyState!=Ch)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wo(this)};Q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ce).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};Q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Io(this)),this.readyState=Ch};Q.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wo(this)),this.g&&(this.readyState=3,wo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof ce.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yg(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function yg(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}Q.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Io(this):wo(this),this.readyState==3&&yg(this)}};Q.Ua=function(t){this.g&&(this.response=this.responseText=t,Io(this))};Q.Ta=function(t){this.g&&(this.response=t,Io(this))};Q.ha=function(){this.g&&Io(this)};function Io(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wo(t)}Q.setRequestHeader=function(t,e){this.v.append(t,e)};Q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function wo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(wl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var m1=ce.JSON.parse;function kt(t){Vt.call(this),this.headers=new ts,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=bg,this.K=this.L=!1}Kt(kt,Vt);var bg="",g1=/^https?$/i,_1=["POST","PUT"];Q=kt.prototype;Q.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gh.g(),this.C=this.u?tg(this.u):tg(gh),this.g.onreadystatechange=zt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Eg(this,s);return}t=n||"";const r=new ts(this.headers);i&&bh(i,function(s,o){r.set(o,s)}),i=kS(r.T()),n=ce.FormData&&t instanceof ce.FormData,!(0<=Sm(_1,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Tg(this),0<this.B&&((this.K=v1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=zt(this.pa,this)):this.A=dh(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Eg(this,s)}};function v1(t){return $r&&NS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function y1(t){return t.toLowerCase()=="content-type"}Q.pa=function(){typeof Bu!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Xt(this,"timeout"),this.abort(8))};function Eg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ig(t),Tl(t)}function Ig(t){t.D||(t.D=!0,Xt(t,"complete"),Xt(t,"error"))}Q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Xt(this,"complete"),Xt(this,"abort"),Tl(this))};Q.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tl(this,!0)),kt.Z.M.call(this)};Q.Fa=function(){this.s||(this.F||this.v||this.l?wg(this):this.cb())};Q.cb=function(){wg(this)};function wg(t){if(t.h&&typeof Bu!="undefined"&&(!t.C[1]||ai(t)!=4||t.ba()!=2)){if(t.v&&ai(t)==4)dh(t.Fa,0,t);else if(Xt(t,"readystatechange"),ai(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.H).match(lg)[1]||null;if(!r&&ce.self&&ce.self.location){var s=ce.self.location.protocol;r=s.substr(0,s.length-1)}i=!g1.test(r?r.toLowerCase():"")}n=i}if(n)Xt(t,"complete"),Xt(t,"success");else{t.m=6;try{var o=2<ai(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Ig(t)}}finally{Tl(t)}}}}function Tl(t,e){if(t.g){Tg(t);const n=t.g,i=t.C[0]?rl:null;t.g=null,t.C=null,e||Xt(t,"ready");try{n.onreadystatechange=i}catch{}}}function Tg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ce.clearTimeout(t.A),t.A=null)}function ai(t){return t.g?t.g.readyState:0}Q.ba=function(){try{return 2<ai(this)?this.g.status:-1}catch{return-1}};Q.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};Q.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),m1(e)}};function Cg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case bg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}Q.Da=function(){return this.m};Q.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function b1(t){let e="";return zu(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Sh(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=b1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ut(t,e,n))}function To(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Sg(t){this.za=0,this.l=[],this.h=new dl,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=To("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=To("baseRetryDelayMs",5e3,t),this.$a=To("retryDelaySeedMs",1e4,t),this.Ya=To("forwardChannelMaxRetries",2,t),this.ra=To("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new pg(t&&t.concurrentRequestLimit),this.Ca=new d1,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}Q=Sg.prototype;Q.ma=8;Q.G=1;function Ah(t){if(Ag(t),t.G==3){var e=t.V++,n=oi(t.F);ut(n,"SID",t.J),ut(n,"RID",e),ut(n,"TYPE","terminate"),Co(t,n),e=new mo(t,t.h,e,void 0),e.K=2,e.v=El(oi(n)),n=!1,ce.navigator&&ce.navigator.sendBeacon&&(n=ce.navigator.sendBeacon(e.v.toString(),"")),!n&&ce.Image&&(new Image().src=e.v,n=!0),n||(e.g=Fg(e.l,null),e.g.ea(e.v)),e.F=Date.now(),go(e)}Pg(t)}Q.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Cl(t){t.g&&(Oh(t),t.g.cancel(),t.g=null)}function Ag(t){Cl(t),t.u&&(ce.clearTimeout(t.u),t.u=null),Al(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ce.clearTimeout(t.m),t.m=null)}function kh(t,e){t.l.push(new u1(t.Za++,e)),t.G==3&&Sl(t)}function Sl(t){mg(t.i)||t.m||(t.m=!0,lh(t.Ha,t),t.C=0)}function E1(t,e){return gg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=fo(zt(t.Ha,t,e),Ng(t,t.C)),t.C++,!0)}Q.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new mo(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Mm(s),Pm(s,this.P)):s=this.P),this.o===null&&(r.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Rg(this,r,e),n=oi(this.F),ut(n,"RID",t),ut(n,"CVER",22),this.D&&ut(n,"X-HTTP-Session-Id",this.D),Co(this,n),this.o&&s&&Sh(n,this.o,s),wh(this.i,r),this.Ra&&ut(n,"TYPE","init"),this.ja?(ut(n,"$req",e),ut(n,"SID","null"),r.$=!0,vh(r,n,null)):vh(r,n,e),this.G=2}}else this.G==3&&(t?kg(this,t):this.l.length==0||mg(this.i)||kg(this))};function kg(t,e){var n;e?n=e.m:n=t.V++;const i=oi(t.F);ut(i,"SID",t.J),ut(i,"RID",n),ut(i,"AID",t.U),Co(t,i),t.o&&t.s&&Sh(i,t.o,t.s),n=new mo(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Rg(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),wh(t.i,n),vh(n,i,e)}function Co(t,e){t.j&&bh({},function(n,i){ut(e,i,n)})}function Rg(t,e,n){n=Math.min(t.l.length,n);var i=t.j?zt(t.j.Oa,t.j,t):null;e:{var r=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const u=r[l].g;if(c-=s,0>c)s=Math.max(0,r[l].h-100),a=!1;else try{f1(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function Og(t){t.g||t.u||(t.Y=1,lh(t.Ga,t),t.A=0)}function Rh(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=fo(zt(t.Ga,t),Ng(t,t.A)),t.A++,!0)}Q.Ga=function(){if(this.u=null,Lg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=fo(zt(this.bb,this),t)}};Q.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,pn(10),Cl(this),Lg(this))};function Oh(t){t.B!=null&&(ce.clearTimeout(t.B),t.B=null)}function Lg(t){t.g=new mo(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=oi(t.oa);ut(e,"RID","rpc"),ut(e,"SID",t.J),ut(e,"CI",t.N?"0":"1"),ut(e,"AID",t.U),Co(t,e),ut(e,"TYPE","xmlhttp"),t.o&&t.s&&Sh(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=El(oi(e)),n.s=null,n.U=!0,rg(n,t)}Q.ab=function(){this.v!=null&&(this.v=null,Cl(this),Rh(this),pn(19))};function Al(t){t.v!=null&&(ce.clearTimeout(t.v),t.v=null)}function Mg(t,e){var n=null;if(t.g==e){Al(t),Oh(t),t.g=null;var i=2}else if(Ih(t.i,e))n=e.D,_g(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=fl(),Xt(i,new $m(i,n,e,r)),Sl(t)}else Og(t);else if(r=e.o,r==3||r==0&&0<t.I||!(i==1&&E1(t,e)||i==2&&Rh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:hr(t,5);break;case 4:hr(t,10);break;case 3:hr(t,6);break;default:hr(t,2)}}}function Ng(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function hr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=zt(t.jb,t);n||(n=new ur("//www.google.com/images/cleardot.gif"),ce.location&&ce.location.protocol=="http"||vl(n,"https"),El(n)),p1(n.toString(),i)}else pn(2);t.G=0,t.j&&t.j.va(e),Pg(t),Ag(t)}Q.jb=function(t){t?(this.h.info("Successfully pinged google.com"),pn(2)):(this.h.info("Failed to ping google.com"),pn(1))};function Pg(t){t.G=0,t.I=-1,t.j&&((vg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Wu(t.l),t.l.length=0),t.j.ua())}function Dg(t,e,n){let i=n1(n);if(i.i!="")e&&yl(i,e+"."+i.i),bl(i,i.m);else{const r=ce.location;i=i1(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&zu(t.aa,function(r,s){ut(i,s,r)}),e=t.D,n=t.sa,e&&n&&ut(i,e,n),ut(i,"VER",t.ma),Co(t,i),i}function Fg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new kt(new Eo({ib:!0})):new kt(t.qa),e.L=t.H,e}function xg(){}Q=xg.prototype;Q.xa=function(){};Q.wa=function(){};Q.va=function(){};Q.ua=function(){};Q.Oa=function(){};function kl(){if($r&&!(10<=Number(PS)))throw Error("Environmental error: no available transport.")}kl.prototype.g=function(t,e){return new On(t,e)};function On(t,e){Vt.call(this),this.g=new Sg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ol(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ol(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new is(this)}Kt(On,Vt);On.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),lh(zt(t.hb,t,e))),pn(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Dg(t,null,t.W),Sl(t)};On.prototype.close=function(){Ah(this.g)};On.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,kh(this.g,e)}else this.v?(e={},e.__data__=ah(t),kh(this.g,e)):kh(this.g,t)};On.prototype.M=function(){this.g.j=null,delete this.j,Ah(this.g),delete this.g,On.Z.M.call(this)};function Ug(t){ph.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Kt(Ug,ph);function jg(){mh.call(this),this.status=1}Kt(jg,mh);function is(t){this.g=t}Kt(is,xg);is.prototype.xa=function(){Xt(this.g,"a")};is.prototype.wa=function(t){Xt(this.g,new Ug(t))};is.prototype.va=function(t){Xt(this.g,new jg(t))};is.prototype.ua=function(){Xt(this.g,"b")};kl.prototype.createWebChannel=kl.prototype.g;On.prototype.send=On.prototype.u;On.prototype.open=On.prototype.m;On.prototype.close=On.prototype.close;pl.NO_ERROR=0;pl.TIMEOUT=8;pl.HTTP_ERROR=6;eg.COMPLETE="complete";ng.EventType=po;po.OPEN="a";po.CLOSE="b";po.ERROR="c";po.MESSAGE="d";Vt.prototype.listen=Vt.prototype.N;kt.prototype.listenOnce=kt.prototype.O;kt.prototype.getLastError=kt.prototype.La;kt.prototype.getLastErrorCode=kt.prototype.Da;kt.prototype.getStatus=kt.prototype.ba;kt.prototype.getResponseJson=kt.prototype.Qa;kt.prototype.getResponseText=kt.prototype.ga;kt.prototype.send=kt.prototype.ea;var I1=function(){return new kl},w1=function(){return fl()},Lh=pl,T1=eg,C1=ar,Vg={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},S1=Eo,Rl=ng,A1=kt;const Bg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}En.UNAUTHENTICATED=new En(null),En.GOOGLE_CREDENTIALS=new En("google-credentials-uid"),En.FIRST_PARTY=new En("first-party-uid"),En.MOCK_USER=new En("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const dr=new Ba("@firebase/firestore");function Hg(){return dr.logLevel}function re(t,...e){if(dr.logLevel<=Ne.DEBUG){const n=e.map(Mh);dr.debug(`Firestore (${rs}): ${t}`,...n)}}function Ni(t,...e){if(dr.logLevel<=Ne.ERROR){const n=e.map(Mh);dr.error(`Firestore (${rs}): ${t}`,...n)}}function qg(t,...e){if(dr.logLevel<=Ne.WARN){const n=e.map(Mh);dr.warn(`Firestore (${rs}): ${t}`,...n)}}function Mh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function me(t="Unexpected state"){const e=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: `+t;throw Ni(e),new Error(e)}function et(t,e){t||me()}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class k1{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class R1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(En.UNAUTHENTICATED))}shutdown(){}}class O1{constructor(e){this.t=e,this.currentUser=En.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new li;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new li,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{re("FirebaseCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(re("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new li)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(re("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(et(typeof i.accessToken=="string"),new k1(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return et(e===null||typeof e=="string"),new En(e)}}class L1{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=En.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class M1{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new L1(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(En.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class Nh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.g(i),this.p=i=>n.writeSequenceNumber(i))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
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
 */function N1(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nh.T=-1;class Wg{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=N1(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function Ve(t,e){return t<e?-1:t>e?1:0}function ss(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ln.fromMillis(Date.now())}static fromDate(e){return Ln.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Ln(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.timestamp=e}static fromTimestamp(e){return new je(e)}static min(){return new je(new Ln(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n,i){n===void 0?n=0:n>e.length&&me(),i===void 0?i=e.length-n:i>e.length-n&&me(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return So.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof So?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class mt extends So{construct(e,n,i){return new mt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new $(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new mt(n)}static emptyPath(){return new mt([])}}const P1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class In extends So{construct(e,n,i){return new In(e,n,i)}static isValidIdentifier(e){return P1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),In.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new In(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new $(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new $(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new $(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new In(n)}static emptyPath(){return new In([])}}/**
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
 */class Ao{constructor(e){this.fields=e,e.sort(In.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class sn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new sn(n)}static fromUint8Array(e){const n=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new sn(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sn.EMPTY_BYTE_STRING=new sn("");const D1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pi(t){if(et(!!t),typeof t=="string"){let e=0;const n=D1.exec(t);if(et(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Rt(t.seconds),nanos:Rt(t.nanos)}}function Rt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function os(t){return typeof t=="string"?sn.fromBase64String(t):sn.fromUint8Array(t)}/**
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
 */function Kg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xg(t){const e=t.mapValue.fields.__previous_value__;return Kg(e)?Xg(e):e}function ko(t){const e=Pi(t.mapValue.fields.__local_write_time__.timestampValue);return new Ln(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){return t==null}function Ol(t){return t===0&&1/t==-1/0}function F1(t){return typeof t=="number"&&Number.isInteger(t)&&!Ol(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(mt.fromString(e))}static fromName(e){return new ue(mt.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&mt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return mt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new mt(e.slice()))}}/**
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
 */function pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kg(t)?4:10:me()}function Yn(t,e){const n=pr(t);if(n!==pr(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ko(t).isEqual(ko(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=Pi(i.timestampValue),o=Pi(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return os(i.bytesValue).isEqual(os(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Rt(i.geoPointValue.latitude)===Rt(r.geoPointValue.latitude)&&Rt(i.geoPointValue.longitude)===Rt(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Rt(i.integerValue)===Rt(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=Rt(i.doubleValue),o=Rt(r.doubleValue);return s===o?Ol(s)===Ol(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],Yn);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(Gg(s)!==Gg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Yn(s[a],o[a])))return!1;return!0}(t,e);default:return me()}}function Ro(t,e){return(t.values||[]).find(n=>Yn(n,e))!==void 0}function ls(t,e){const n=pr(t),i=pr(e);if(n!==i)return Ve(n,i);switch(n){case 0:return 0;case 1:return Ve(t.booleanValue,e.booleanValue);case 2:return function(r,s){const o=Rt(r.integerValue||r.doubleValue),a=Rt(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Qg(t.timestampValue,e.timestampValue);case 4:return Qg(ko(t),ko(e));case 5:return Ve(t.stringValue,e.stringValue);case 6:return function(r,s){const o=os(r),a=os(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Ve(o[l],a[l]);if(c!==0)return c}return Ve(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const o=Ve(Rt(r.latitude),Rt(s.latitude));return o!==0?o:Ve(Rt(r.longitude),Rt(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=ls(o[l],a[l]);if(c)return c}return Ve(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){const o=r.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=Ve(a[u],c[u]);if(h!==0)return h;const d=ls(o[a[u]],l[c[u]]);if(d!==0)return d}return Ve(a.length,c.length)}(t.mapValue,e.mapValue);default:throw me()}}function Qg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ve(t,e);const n=Pi(t),i=Pi(e),r=Ve(n.seconds,i.seconds);return r!==0?r:Ve(n.nanos,i.nanos)}function Ph(t){return Dh(t)}function Dh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=Pi(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?os(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ue.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=Dh(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Dh(i.fields[a])}`;return s+"}"}(t.mapValue):me();var e,n}function Fh(t){return!!t&&"integerValue"in t}function xh(t){return!!t&&"arrayValue"in t}function Yg(t){return!!t&&"nullValue"in t}function Jg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ll(t){return!!t&&"mapValue"in t}function Oo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Oo(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Oo(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.value=e}static empty(){return new Mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Ll(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oo(n)}setAll(e){let n=In.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=Oo(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());Ll(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];Ll(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){fr(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new Mn(Oo(this.value))}}function Zg(t){const e=[];return fr(t.fields,(n,i)=>{const r=new In([n]);if(Ll(i)){const s=Zg(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new Ao(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,n,i,r,s){this.key=e,this.documentType=n,this.version=i,this.data=r,this.documentState=s}static newInvalidDocument(e){return new on(e,0,je.min(),Mn.empty(),0)}static newFoundDocument(e,n,i){return new on(e,1,n,i,0)}static newNoDocument(e,n){return new on(e,2,n,Mn.empty(),0)}static newUnknownDocument(e,n){return new on(e,3,n,Mn.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof on&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new on(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class x1{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.A=null}}function $g(t,e=null,n=[],i=[],r=null,s=null,o=null){return new x1(t,e,n,i,r,s,o)}function Uh(t){const e=ge(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>j1(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),as(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Ml(e.startAt)),e.endAt&&(n+="|ub:",n+=Ml(e.endAt)),e.A=n}return e.A}function U1(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${Ph(i.value)}`;var i}).join(", ")}]`),as(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Ml(t.startAt)),t.endAt&&(e+=", endAt: "+Ml(t.endAt)),`Target(${e})`}function jh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!K1(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!Yn(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!n_(t.startAt,e.startAt)&&n_(t.endAt,e.endAt)}function Vh(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class wn extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,i):new V1(e,n,i):n==="array-contains"?new q1(e,i):n==="in"?new W1(e,i):n==="not-in"?new G1(e,i):n==="array-contains-any"?new z1(e,i):new wn(e,n,i)}static R(e,n,i){return n==="in"?new B1(e,i):new H1(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(ls(n,this.value)):n!==null&&pr(this.value)===pr(n)&&this.P(ls(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function j1(t){return t.field.canonicalString()+t.op.toString()+Ph(t.value)}class V1 extends wn{constructor(e,n,i){super(e,n,i),this.key=ue.fromName(i.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.P(n)}}class B1 extends wn{constructor(e,n){super(e,"in",n),this.keys=e_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class H1 extends wn{constructor(e,n){super(e,"not-in",n),this.keys=e_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function e_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>ue.fromName(i.referenceValue))}class q1 extends wn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xh(n)&&Ro(n.arrayValue,this.value)}}class W1 extends wn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ro(this.value.arrayValue,n)}}class G1 extends wn{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ro(this.value.arrayValue,n)}}class z1 extends wn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Ro(this.value.arrayValue,i))}}class Bh{constructor(e,n){this.position=e,this.before=n}}function Ml(t){return`${t.before?"b":"a"}:${t.position.map(e=>Ph(e)).join(",")}`}class cs{constructor(e,n="asc"){this.field=e,this.dir=n}}function K1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function t_(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=ue.comparator(ue.fromName(o.referenceValue),n.key):i=ls(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return t.before?i<=0:i<0}function n_(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.V=null,this.S=null,this.startAt,this.endAt}}function X1(t,e,n,i,r,s,o,a){return new Lo(t,e,n,i,r,s,o,a)}function Nl(t){return new Lo(t)}function Pl(t){return!as(t.limit)&&t.limitType==="F"}function Dl(t){return!as(t.limit)&&t.limitType==="L"}function i_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function r_(t){for(const e of t.filters)if(e.v())return e.field;return null}function Q1(t){return t.collectionGroup!==null}function Mo(t){const e=ge(t);if(e.V===null){e.V=[];const n=r_(e),i=i_(e);if(n!==null&&i===null)n.isKeyField()||e.V.push(new cs(n)),e.V.push(new cs(In.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.V.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new cs(In.keyField(),s))}}}return e.V}function mr(t){const e=ge(t);if(!e.S)if(e.limitType==="F")e.S=$g(e.path,e.collectionGroup,Mo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Mo(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new cs(s.field,o))}const i=e.endAt?new Bh(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Bh(e.startAt.position,!e.startAt.before):null;e.S=$g(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e.S}function Y1(t,e,n){return new Lo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fl(t,e){return jh(mr(t),mr(e))&&t.limitType===e.limitType}function s_(t){return`${Uh(mr(t))}|lt:${t.limitType}`}function Hh(t){return`Query(target=${U1(mr(t))}; limitType=${t.limitType})`}function xl(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):ue.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!t_(n.startAt,Mo(n),i)||n.endAt&&t_(n.endAt,Mo(n),i))}(t,e)}function o_(t){return(e,n)=>{let i=!1;for(const r of Mo(t)){const s=J1(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function J1(t,e,n){const i=t.field.isKeyField()?ue.comparator(e.key,n.key):function(r,s,o){const a=s.data.field(r),l=o.data.field(r);return a!==null&&l!==null?ls(a,l):me()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return me()}}/**
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
 */function a_(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ol(e)?"-0":e}}function l_(t){return{integerValue:""+t}}function Z1(t,e){return F1(e)?l_(e):a_(t,e)}/**
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
 */class Ul{constructor(){this._=void 0}}function $1(t,e,n){return t instanceof No?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&(s.fields.__previous_value__=r),{mapValue:s}}(n,e):t instanceof Po?u_(t,e):t instanceof Do?h_(t,e):function(i,r){const s=c_(i,r),o=d_(s)+d_(i.C);return Fh(s)&&Fh(i.C)?l_(o):a_(i.N,o)}(t,e)}function eA(t,e,n){return t instanceof Po?u_(t,e):t instanceof Do?h_(t,e):n}function c_(t,e){return t instanceof jl?Fh(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class No extends Ul{}class Po extends Ul{constructor(e){super(),this.elements=e}}function u_(t,e){const n=f_(e);for(const i of t.elements)n.some(r=>Yn(r,i))||n.push(i);return{arrayValue:{values:n}}}class Do extends Ul{constructor(e){super(),this.elements=e}}function h_(t,e){let n=f_(e);for(const i of t.elements)n=n.filter(r=>!Yn(r,i));return{arrayValue:{values:n}}}class jl extends Ul{constructor(e,n){super(),this.N=e,this.C=n}}function d_(t){return Rt(t.integerValue||t.doubleValue)}function f_(t){return xh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,n){this.field=e,this.transform=n}}function nA(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Po&&i instanceof Po||n instanceof Do&&i instanceof Do?ss(n.elements,i.elements,Yn):n instanceof jl&&i instanceof jl?Yn(n.C,i.C):n instanceof No&&i instanceof No}(t.transform,e.transform)}class iA{constructor(e,n){this.version=e,this.transformResults=n}}class Wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wn}static exists(e){return new Wn(void 0,e)}static updateTime(e){return new Wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Bl{}function rA(t,e,n){t instanceof Hl?function(i,r,s){const o=i.value.clone(),a=__(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof gr?function(i,r,s){if(!Vl(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=__(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(g_(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function qh(t,e,n){t instanceof Hl?function(i,r,s){if(!Vl(i.precondition,r))return;const o=i.value.clone(),a=v_(i.fieldTransforms,s,r);o.setAll(a),r.convertToFoundDocument(m_(r),o).setHasLocalMutations()}(t,e,n):t instanceof gr?function(i,r,s){if(!Vl(i.precondition,r))return;const o=v_(i.fieldTransforms,s,r),a=r.data;a.setAll(g_(i)),a.setAll(o),r.convertToFoundDocument(m_(r),a).setHasLocalMutations()}(t,e,n):function(i,r){Vl(i.precondition,r)&&r.convertToNoDocument(je.min())}(t,e)}function sA(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=c_(i.transform,r||null);s!=null&&(n==null&&(n=Mn.empty()),n.set(i.field,s))}return n||null}function p_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&ss(n,i,(r,s)=>nA(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function m_(t){return t.isFoundDocument()?t.version:je.min()}class Hl extends Bl{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}}class gr extends Bl{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}}function g_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function __(t,e,n){const i=new Map;et(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,eA(o,a,n[r]))}return i}function v_(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,$1(s,o,e))}return i}class Wh extends Bl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class oA extends Bl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot,Oe;function lA(t){switch(t){default:return me();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function y_(t){if(t===void 0)return Ni("GRPC error has no .code"),P.UNKNOWN;switch(t){case Ot.OK:return P.OK;case Ot.CANCELLED:return P.CANCELLED;case Ot.UNKNOWN:return P.UNKNOWN;case Ot.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Ot.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Ot.INTERNAL:return P.INTERNAL;case Ot.UNAVAILABLE:return P.UNAVAILABLE;case Ot.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Ot.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Ot.NOT_FOUND:return P.NOT_FOUND;case Ot.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Ot.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Ot.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Ot.ABORTED:return P.ABORTED;case Ot.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Ot.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Ot.DATA_LOSS:return P.DATA_LOSS;default:return me()}}(Oe=Ot||(Ot={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n){this.comparator=e,this.root=n||Qt.EMPTY}insert(e,n){return new an(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qt.BLACK,null,null))}remove(e){return new an(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ql(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ql(this.root,e,this.comparator,!1)}getReverseIterator(){return new ql(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ql(this.root,e,this.comparator,!0)}}class ql{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qt{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:Qt.RED,this.left=r!=null?r:Qt.EMPTY,this.right=s!=null?s:Qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new Qt(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Qt.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}Qt.EMPTY=null,Qt.RED=!0,Qt.BLACK=!1;Qt.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Qt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.comparator=e,this.data=new an(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new b_(this.data.getIterator())}getIteratorFrom(e){return new b_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Yt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Yt(this.comparator);return n.data=e,n}}class b_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=new an(ue.comparator);function _r(){return cA}const uA=new an(ue.comparator);function Gh(){return uA}const hA=new an(ue.comparator);function dA(){return hA}const fA=new Yt(ue.comparator);function ot(...t){let e=fA;for(const n of t)e=e.add(n);return e}const pA=new Yt(Ve);function E_(){return pA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const i=new Map;return i.set(e,Fo.createSynthesizedTargetChangeForCurrentChange(e,n)),new Wl(je.min(),i,E_(),_r(),ot())}}class Fo{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Fo(sn.EMPTY_BYTE_STRING,n,ot(),ot(),ot())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n,i,r){this.k=e,this.removedTargetIds=n,this.key=i,this.$=r}}class I_{constructor(e,n){this.targetId=e,this.O=n}}class w_{constructor(e,n,i=sn.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class T_{constructor(){this.F=0,this.M=S_(),this.L=sn.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=ot(),n=ot(),i=ot();return this.M.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:me()}}),new Fo(this.L,this.B,e,n,i)}G(){this.U=!1,this.M=S_()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class mA{constructor(e){this.tt=e,this.et=new Map,this.nt=_r(),this.st=C_(),this.it=new Yt(Ve)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.ct(n,e.key,e.$);for(const n of e.removedTargetIds)this.ct(n,e.key,e.$)}at(e){this.forEachTarget(e,n=>{const i=this.ut(n);switch(e.state){case 0:this.ht(n)&&i.j(e.resumeToken);break;case 1:i.X(),i.q||i.G(),i.j(e.resumeToken);break;case 2:i.X(),i.q||this.removeTarget(n);break;case 3:this.ht(n)&&(i.Z(),i.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),i.j(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((i,r)=>{this.ht(r)&&n(r)})}ft(e){const n=e.targetId,i=e.O.count,r=this.dt(n);if(r){const s=r.target;if(Vh(s))if(i===0){const o=new ue(s.path);this.ct(n,o,on.newNoDocument(o,je.min()))}else et(i===1);else this.wt(n)!==i&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((s,o)=>{const a=this.dt(o);if(a){if(s.current&&Vh(a.target)){const l=new ue(a.target.path);this.nt.get(l)!==null||this.gt(o,l)||this.ct(o,l,on.newNoDocument(l,e))}s.K&&(n.set(o,s.W()),s.G())}});let i=ot();this.st.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.dt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(s))});const r=new Wl(e,n,this.it,this.nt,i);return this.nt=_r(),this.st=C_(),this.it=new Yt(Ve),r}ot(e,n){if(!this.ht(e))return;const i=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,i),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}ct(e,n,i){if(!this.ht(e))return;const r=this.ut(e);this.gt(e,n)?r.H(n,1):r.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),i&&(this.nt=this.nt.insert(n,i))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new T_,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new Yt(Ve),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||re("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new T_),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function C_(){return new an(ue.comparator)}function S_(){return new an(ue.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),_A=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class vA{constructor(e,n){this.databaseId=e,this.D=n}}function zl(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function A_(t,e){return t.D?e.toBase64():e.toUint8Array()}function yA(t,e){return zl(t,e.toTimestamp())}function ci(t){return et(!!t),je.fromTimestamp(function(e){const n=Pi(e);return new Ln(n.seconds,n.nanos)}(t))}function zh(t,e){return function(n){return new mt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function k_(t){const e=mt.fromString(t);return et(P_(e)),e}function Kh(t,e){return zh(t.databaseId,e.path)}function Xh(t,e){const n=k_(e);if(n.get(1)!==t.databaseId.projectId)throw new $(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(R_(n))}function Qh(t,e){return zh(t.databaseId,e)}function bA(t){const e=k_(t);return e.length===4?mt.emptyPath():R_(e)}function Yh(t){return new mt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function R_(t){return et(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function O_(t,e,n){return{name:Kh(t,e),fields:n.value.mapValue.fields}}function EA(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(l,c){return l.D?(et(c===void 0||typeof c=="string"),sn.fromBase64String(c||"")):(et(c===void 0||c instanceof Uint8Array),sn.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?P.UNKNOWN:y_(l.code);return new $(c,l.message||"")}(o);n=new w_(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Xh(t,i.document.name),s=ci(i.document.updateTime),o=new Mn({mapValue:{fields:i.document.fields}}),a=on.newFoundDocument(r,s,o),l=i.targetIds||[],c=i.removedTargetIds||[];n=new Gl(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Xh(t,i.document),s=i.readTime?ci(i.readTime):je.min(),o=on.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Gl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Xh(t,i.document),s=i.removedTargetIds||[];n=new Gl([],s,r,null)}else{if(!("filter"in e))return me();{e.filter;const i=e.filter;i.targetId;const r=i.count||0,s=new aA(r),o=i.targetId;n=new I_(o,s)}}return n}function IA(t,e){let n;if(e instanceof Hl)n={update:O_(t,e.key,e.value)};else if(e instanceof Wh)n={delete:Kh(t,e.key)};else if(e instanceof gr)n={update:O_(t,e.key,e.data),updateMask:MA(e.fieldMask)};else{if(!(e instanceof oA))return me();n={verify:Kh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof No)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Po)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Do)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof jl)return{fieldPath:s.field.canonicalString(),increment:o.C};throw me()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:yA(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:me()}(t,e.precondition)),n}function wA(t,e){return t&&t.length>0?(et(e!==void 0),t.map(n=>function(i,r){let s=i.updateTime?ci(i.updateTime):ci(r);return s.isEqual(je.min())&&(s=ci(r)),new iA(s,i.transformResults||[])}(n,e))):[]}function TA(t,e){return{documents:[Qh(t,e.path)]}}function CA(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Qh(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Qh(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(a){if(a.length===0)return;const l=a.map(c=>function(u){if(u.op==="=="){if(Jg(u.value))return{unaryFilter:{field:us(u.field),op:"IS_NAN"}};if(Yg(u.value))return{unaryFilter:{field:us(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(Jg(u.value))return{unaryFilter:{field:us(u.field),op:"IS_NOT_NAN"}};if(Yg(u.value))return{unaryFilter:{field:us(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:us(u.field),op:RA(u.op),value:u.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const s=function(a){if(a.length!==0)return a.map(l=>function(c){return{field:us(c.field),direction:kA(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,l){return a.D||as(l)?l:{value:l}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=M_(e.startAt)),e.endAt&&(n.structuredQuery.endAt=M_(e.endAt)),n}function SA(t){let e=bA(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){et(i===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=L_(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new cs(hs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,as(h)?null:h}(n.limit));let l=null;n.startAt&&(l=N_(n.startAt));let c=null;return n.endAt&&(c=N_(n.endAt)),X1(e,r,o,s,a,"F",l,c)}function AA(t,e){const n=function(i,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return me()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function L_(t){return t?t.unaryFilter!==void 0?[LA(t)]:t.fieldFilter!==void 0?[OA(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>L_(e)).reduce((e,n)=>e.concat(n)):me():[]}function M_(t){return{before:t.before,values:t.position}}function N_(t){const e=!!t.before,n=t.values||[];return new Bh(n,e)}function kA(t){return gA[t]}function RA(t){return _A[t]}function us(t){return{fieldPath:t.canonicalString()}}function hs(t){return In.fromServerFormat(t.fieldPath)}function OA(t){return wn.create(hs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(t.fieldFilter.op),t.fieldFilter.value)}function LA(t){switch(t.unaryFilter.op){case"IS_NAN":const e=hs(t.unaryFilter.field);return wn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=hs(t.unaryFilter.field);return wn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hs(t.unaryFilter.field);return wn.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=hs(t.unaryFilter.field);return wn.create(r,"!=",{nullValue:"NULL_VALUE"});default:return me()}}function MA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function P_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const NA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new X((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof X?n:X.resolve(n)}catch(n){return X.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):X.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):X.reject(n)}static resolve(e){return new X((n,i)=>{n(e)})}static reject(e){return new X((n,i)=>{i(e)})}static waitFor(e){return new X((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},l=>i(l))}),o=!0,s===r&&n()})}static or(e){let n=X.resolve(!1);for(const i of e)n=n.next(r=>r?X.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}}function xo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&rA(s,e,i[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&qh(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&qh(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const i=e.get(n.key),r=i;this.applyToLocalView(r),i.isValidDocument()||r.convertToNoDocument(je.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ot())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,i)=>p_(n,i))&&ss(this.baseMutations,e.baseMutations,(n,i)=>p_(n,i))}}class Jh{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){et(e.mutations.length===i.length);let r=dA();const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new Jh(e,n,i,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,i,r,s=je.min(),o=je.min(),a=sn.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.Wt=e}}function xA(t){const e=SA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Y1(e,e.limit,"L"):e}/**
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
 */class UA{constructor(){this.Gt=new jA}addToCollectionParentIndex(e,n){return this.Gt.add(n),X.resolve()}getCollectionParents(e,n){return X.resolve(this.Gt.getEntries(n))}}class jA{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new Yt(mt.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new Yt(mt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new ds(0)}static ie(){return new ds(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t){if(t.code!==P.FAILED_PRECONDITION||t.message!==NA)throw t;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r!==void 0){for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n])}else this.inner[i]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),!0;return!1}forEach(e){fr(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return zg(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(){this.changes=new jo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:je.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:on.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?X.resolve(i.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,n,i){this.He=e,this.In=n,this.Ht=i}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(i=>this.Rn(e,n,i))}Rn(e,n,i){return this.He.getEntry(e,n).next(r=>{for(const s of i)s.applyToLocalView(r);return r})}bn(e,n){e.forEach((i,r)=>{for(const s of n)s.applyToLocalView(r)})}Pn(e,n){return this.He.getEntries(e,n).next(i=>this.vn(e,i).next(()=>i))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(i=>this.bn(n,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return ue.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Vn(e,n.path):Q1(n)?this.Sn(e,n,i):this.Dn(e,n,i)}Vn(e,n){return this.An(e,new ue(n)).next(i=>{let r=Gh();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}Sn(e,n,i){const r=n.collectionGroup;let s=Gh();return this.Ht.getCollectionParents(e,r).next(o=>X.forEach(o,a=>{const l=function(c,u){return new Lo(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.Dn(e,l,i).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}Dn(e,n,i){let r,s;return this.He.getDocumentsMatchingQuery(e,n,i).next(o=>(r=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Cn(e,s,r).next(a=>{r=a;for(const l of s)for(const c of l.mutations){const u=c.key;let h=r.get(u);h==null&&(h=on.newInvalidDocument(u),r=r.insert(u,h)),qh(c,h,l.localWriteTime),h.isFoundDocument()||(r=r.remove(u))}}))).next(()=>(r.forEach((o,a)=>{xl(n,a)||(r=r.remove(o))}),r))}Cn(e,n,i){let r=ot();for(const o of n)for(const a of o.mutations)a instanceof gr&&i.get(a.key)===null&&(r=r.add(a.key));let s=i;return this.He.getEntries(e,r).next(o=>(o.forEach((a,l)=>{l.isFoundDocument()&&(s=s.insert(a,l))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Nn=i,this.xn=r}static kn(e,n){let i=ot(),r=ot();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Zh(e,n.fromCache,i,r)}}/**
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
 */class BA{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,i,r){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||i.isEqual(je.min())?this.Fn(e,n):this.On.Pn(e,r).next(s=>{const o=this.Mn(n,s);return(Pl(n)||Dl(n))&&this.Ln(n.limitType,o,r,i)?this.Fn(e,n):(Hg()<=Ne.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hh(n)),this.On.getDocumentsMatchingQuery(e,n,i).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}Mn(e,n){let i=new Yt(o_(e));return n.forEach((r,s)=>{xl(e,s)&&(i=i.add(s))}),i}Ln(e,n,i,r){if(i.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Fn(e,n){return Hg()<=Ne.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Hh(n)),this.On.getDocumentsMatchingQuery(e,n,je.min())}}/**
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
 */class HA{constructor(e,n,i,r){this.persistence=e,this.Bn=n,this.N=r,this.Un=new an(Ve),this.qn=new jo(s=>Uh(s),jh),this.Kn=je.min(),this.In=e.getMutationQueue(i),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new D_(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function qA(t,e,n,i){return new HA(t,e,n,i)}async function F_(t,e){const n=ge(t);let i=n.In,r=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(l=>(a=l,i=n.persistence.getMutationQueue(e),r=new D_(n.jn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(o))).next(l=>{const c=[],u=[];let h=ot();for(const d of a){c.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}for(const d of l){u.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}return r.Pn(o,h).next(d=>({Wn:d,removedBatchIds:c,addedBatchIds:u}))})});return n.In=i,n.Qn=r,n.Bn.$n(n.Qn),s}function WA(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=X.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(p=>{const m=l.docVersions.get(f);et(m!==null),p.version.compareTo(m)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&c.addEntry(p,l.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,u))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.In.performConsistencyCheck(i)).next(()=>n.Qn.Pn(i,r))})}function x_(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function GA(t,e){const n=ge(t),i=e.snapshotVersion;let r=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});r=n.Un;const a=[];e.targetChanges.forEach((c,u)=>{const h=r.get(u);if(!h)return;a.push(n.ze.removeMatchingKeys(s,c.removedDocuments,u).next(()=>n.ze.addMatchingKeys(s,c.addedDocuments,u)));const d=c.resumeToken;if(d.approximateByteSize()>0){const f=h.withResumeToken(d,i).withSequenceNumber(s.currentSequenceNumber);r=r.insert(u,f),function(p,m,g){return et(m.resumeToken.approximateByteSize()>0),p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(h,f,c)&&a.push(n.ze.updateTargetData(s,f))}});let l=_r();if(e.documentUpdates.forEach((c,u)=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(zA(s,o,e.documentUpdates,i,void 0).next(c=>{l=c})),!i.isEqual(je.min())){const c=n.ze.getLastRemoteSnapshotVersion(s).next(u=>n.ze.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(c)}return X.waitFor(a).next(()=>o.apply(s)).next(()=>n.Qn.vn(s,l)).next(()=>l)}).then(s=>(n.Un=r,s))}function zA(t,e,n,i,r){let s=ot();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=_r();return n.forEach((l,c)=>{const u=o.get(l),h=(r==null?void 0:r.get(l))||i;c.isNoDocument()&&c.version.isEqual(je.min())?(e.removeEntry(l,h),a=a.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c,h),a=a.insert(l,c)):re("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),a})}function KA(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(i,e)))}function XA(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.ze.getTargetData(i,e).next(s=>s?(r=s,X.resolve(r)):n.ze.allocateTargetId(i).next(o=>(r=new vr(e,o,0,i.currentSequenceNumber),n.ze.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.Un.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(i.targetId,i),n.qn.set(e,i.targetId)),i})}async function $h(t,e,n){const i=ge(t),r=i.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!xo(o))throw o;re("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Un=i.Un.remove(e),i.qn.delete(r.target)}function U_(t,e,n){const i=ge(t);let r=je.min(),s=ot();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ge(a),h=u.qn.get(c);return h!==void 0?X.resolve(u.Un.get(h)):u.ze.getTargetData(l,c)}(i,o,mr(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.ze.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>i.Bn.getDocumentsMatchingQuery(o,e,n?r:je.min(),n?s:ot())).next(a=>({documents:a,Gn:s})))}/**
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
 */class QA{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return X.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var i;return this.Yn.set(n.id,{id:(i=n).id,version:i.version,createTime:ci(i.createTime)}),X.resolve()}getNamedQuery(e,n){return X.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:xA(i.bundledQuery),readTime:ci(i.readTime)}}(n)),X.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this.Zn=new Yt(Bt.ts),this.es=new Yt(Bt.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const i=new Bt(e,n);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.rs(new Bt(e,n))}os(e,n){e.forEach(i=>this.removeReference(i,n))}cs(e){const n=new ue(new mt([])),i=new Bt(n,e),r=new Bt(n,e+1),s=[];return this.es.forEachInRange([i,r],o=>{this.rs(o),s.push(o.key)}),s}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new ue(new mt([])),i=new Bt(n,e),r=new Bt(n,e+1);let s=ot();return this.es.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Bt(e,0),i=this.Zn.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Bt{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return ue.comparator(e.key,n.key)||Ve(e.ls,n.ls)}static ns(e,n){return Ve(e.ls,n.ls)||ue.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new Yt(Bt.ts)}checkEmpty(e){return X.resolve(this.In.length===0)}addMutationBatch(e,n,i,r){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new DA(s,n,i,r);this.In.push(o);for(const a of r)this.ds=this.ds.add(new Bt(a.key,s)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return X.resolve(o)}lookupMutationBatch(e,n){return X.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this._s(i),s=r<0?0:r;return X.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return X.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Bt(n,0),r=new Bt(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([i,r],o=>{const a=this.ws(o.ls);s.push(a)}),X.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Yt(Ve);return n.forEach(r=>{const s=new Bt(r,0),o=new Bt(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{i=i.add(a.ls)})}),X.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;ue.isDocumentKey(s)||(s=s.child(""));const o=new Bt(new ue(s),0);let a=new Yt(Ve);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.ls)),!0)},o),X.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(i=>{const r=this.ws(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){et(this.ys(n.batchId,"removed")===0),this.In.shift();let i=this.ds;return X.forEach(n.mutations,r=>{const s=new Bt(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=i})}te(e){}containsKey(e,n){const i=new Bt(n,0),r=this.ds.firstAfterOrEqual(i);return X.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.In.length,X.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new an(ue.comparator),this.size=0}addEntry(e,n,i){const r=n.key,s=this.docs.get(r),o=s?s.size:0,a=this.ps(n);return this.docs=this.docs.insert(r,{document:n.clone(),size:a,readTime:i}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return X.resolve(i?i.document.clone():on.newInvalidDocument(n))}getEntries(e,n){let i=_r();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.clone():on.newInvalidDocument(r))}),X.resolve(i)}getDocumentsMatchingQuery(e,n,i){let r=_r();const s=new ue(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l,readTime:c}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;c.compareTo(i)<=0||xl(n,l)&&(r=r.insert(l.key,l.clone()))}return X.resolve(r)}Ts(e,n){return X.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new ZA(this)}getSize(e){return X.resolve(this.size)}}class ZA extends VA{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.document.isValidDocument()?n.push(this.Se.addEntry(e,r.document,this.getReadTime(i))):this.Se.removeEntry(i)}),X.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.persistence=e,this.Es=new jo(n=>Uh(n),jh),this.lastRemoteSnapshotVersion=je.min(),this.highestTargetId=0,this.Is=0,this.As=new ed,this.targetCount=0,this.Rs=ds.se()}forEachTarget(e,n){return this.Es.forEach((i,r)=>n(r)),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Is&&(this.Is=n),X.resolve()}ce(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new ds(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,X.resolve()}updateTargetData(e,n){return this.ce(n),X.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Es.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),X.waitFor(s).next(()=>r)}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,n){const i=this.Es.get(n)||null;return X.resolve(i)}addMatchingKeys(e,n,i){return this.As.ss(n,i),X.resolve()}removeMatchingKeys(e,n,i){this.As.os(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),X.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),X.resolve()}getMatchingKeysForTargetId(e,n){const i=this.As.hs(n);return X.resolve(i)}containsKey(e,n){return X.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,n){this.bs={},this.Le=new Nh(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new $A(this),this.Ht=new UA,this.He=function(i,r){return new JA(i,r)}(this.Ht,i=>this.referenceDelegate.Ps(i)),this.N=new FA(n),this.Je=new QA(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new YA(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,i){re("MemoryPersistence","Starting transaction:",e);const r=new tk(this.Le.next());return this.referenceDelegate.vs(),i(r).next(s=>this.referenceDelegate.Vs(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Ss(e,n){return X.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,n)))}}class tk extends PA{constructor(e){super(),this.currentSequenceNumber=e}}class td{constructor(e){this.persistence=e,this.Ds=new ed,this.Cs=null}static Ns(e){return new td(e)}get xs(){if(this.Cs)return this.Cs;throw me()}addReference(e,n,i){return this.Ds.addReference(i,n),this.xs.delete(i.toString()),X.resolve()}removeReference(e,n,i){return this.Ds.removeReference(i,n),this.xs.add(i.toString()),X.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),X.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(r=>this.xs.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.xs.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.xs,i=>{const r=ue.fromPath(i);return this.ks(e,r).next(s=>{s||n.removeEntry(r)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(i=>{i?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return X.or([()=>X.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class j_{constructor(){this.activeTargetIds=E_()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nk{constructor(){this.yi=new j_,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,i){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new j_,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class ik{Ti(e){}shutdown(){}}/**
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
 */class V_{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const rk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,i,r){const s=this.Bi(e,n);re("RestConnection","Sending: ",s,i);const o={};return this.Ui(o,r),this.qi(e,s,o,i).then(a=>(re("RestConnection","Received: ",a),a),a=>{throw qg("RestConnection",`${e} failed with error: `,a,"url: ",s,"request:",i),a})}Ki(e,n,i,r){return this.Li(e,n,i,r)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+rs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const i in n.authHeaders)n.authHeaders.hasOwnProperty(i)&&(e[i]=n.authHeaders[i])}Bi(e,n){const i=rk[e];return`${this.Fi}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,i,r){return new Promise((s,o)=>{const a=new A1;a.listenOnce(T1.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Lh.NO_ERROR:const c=a.getResponseJson();re("Connection","XHR received:",JSON.stringify(c)),s(c);break;case Lh.TIMEOUT:re("Connection",'RPC "'+e+'" timed out'),o(new $(P.DEADLINE_EXCEEDED,"Request time out"));break;case Lh.HTTP_ERROR:const u=a.getStatus();if(re("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const p=f.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(p)>=0?p:P.UNKNOWN}(h.status);o(new $(d,h.message))}else o(new $(P.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new $(P.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{re("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(r);a.send(n,"POST",l,i,15)})}ji(e,n){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=I1(),s=w1(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new S1({})),this.Ui(o.initMessageHeaders,n),Fa()||yu()||y0()||Rp()||b0()||kp()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");re("Connection","Creating WebChannel: "+a,o);const l=r.createWebChannel(a,o);let c=!1,u=!1;const h=new sk({vi:f=>{u?re("Connection","Not sending because WebChannel is closed:",f):(c||(re("Connection","Opening WebChannel transport."),l.open(),c=!0),re("Connection","WebChannel sending:",f),l.send(f))},Vi:()=>l.close()}),d=(f,p,m)=>{f.listen(p,g=>{try{m(g)}catch(v){setTimeout(()=>{throw v},0)}})};return d(l,Rl.EventType.OPEN,()=>{u||re("Connection","WebChannel transport opened.")}),d(l,Rl.EventType.CLOSE,()=>{u||(u=!0,re("Connection","WebChannel transport closed"),h.$i())}),d(l,Rl.EventType.ERROR,f=>{u||(u=!0,qg("Connection","WebChannel transport errored:",f),h.$i(new $(P.UNAVAILABLE,"The operation could not be completed")))}),d(l,Rl.EventType.MESSAGE,f=>{var p;if(!u){const m=f.data[0];et(!!m);const g=m,v=g.error||((p=g[0])===null||p===void 0?void 0:p.error);if(v){re("Connection","WebChannel received error:",v);const A=v.status;let w=function(q){const k=Ot[q];if(k!==void 0)return y_(k)}(A),S=v.message;w===void 0&&(w=P.INTERNAL,S="Unknown error status: "+A+" with message "+v.message),u=!0,h.$i(new $(w,S)),l.close()}else re("Connection","WebChannel received:",m),h.Oi(m)}}),d(s,C1.STAT_EVENT,f=>{f.stat===Vg.PROXY?re("Connection","Detected buffering proxy"):f.stat===Vg.NOPROXY&&re("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function nd(){return typeof document!="undefined"?document:null}/**
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
 */function Kl(t){return new vA(t,!0)}class B_{constructor(e,n,i=1e3,r=1.5,s=6e4){this.Oe=e,this.timerId=n,this.Qi=i,this.Wi=r,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),i=Math.max(0,Date.now()-this.Ji),r=Math.max(0,n-i);r>0&&re("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n,i,r,s,o,a){this.Oe=e,this.er=i,this.nr=r,this.sr=s,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new B_(e,n)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():n&&n.code===P.RESOURCE_EXHAUSTED?(Ni(n.toString()),Ni("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):n&&n.code===P.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),n=this.ir;this.credentialsProvider.getToken().then(i=>{this.ir===n&&this.Er(i)},i=>{e(()=>{const r=new $(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Ir(r)})})}Er(e){const n=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(i=>{n(()=>this.Ir(i))}),this.stream.onMessage(i=>{n(()=>this.onMessage(i))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return re("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return n=>{this.Oe.enqueueAndForget(()=>this.ir===e?n():(re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ak extends H_{constructor(e,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s),this.N=r}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const n=EA(this.N,e),i=function(r){if(!("targetChange"in r))return je.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?je.min():s.readTime?ci(s.readTime):je.min()}(e);return this.listener.Rr(n,i)}br(e){const n={};n.database=Yh(this.N),n.addTarget=function(r,s){let o;const a=s.target;return o=Vh(a)?{documents:TA(r,a)}:{query:CA(r,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=A_(r,s.resumeToken):s.snapshotVersion.compareTo(je.min())>0&&(o.readTime=zl(r,s.snapshotVersion.toTimestamp())),o}(this.N,e);const i=AA(this.N,e);i&&(n.labels=i),this.mr(n)}Pr(e){const n={};n.database=Yh(this.N),n.removeTarget=e,this.mr(n)}}class lk extends H_{constructor(e,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s),this.N=r,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(et(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const n=wA(e.writeResults,e.commitTime),i=ci(e.commitTime);return this.listener.Dr(i,n)}return et(!e.writeResults||e.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=Yh(this.N),this.mr(e)}Sr(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>IA(this.N,i))};this.mr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck extends class{}{constructor(e,n,i){super(),this.credentials=e,this.sr=n,this.N=i,this.kr=!1}$r(){if(this.kr)throw new $(P.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,i){return this.$r(),this.credentials.getToken().then(r=>this.sr.Li(e,n,i,r)).catch(r=>{throw r.name==="FirebaseError"?(r.code===P.UNAUTHENTICATED&&this.credentials.invalidateToken(),r):new $(P.UNKNOWN,r.toString())})}Ki(e,n,i){return this.$r(),this.credentials.getToken().then(r=>this.sr.Ki(e,n,i,r)).catch(r=>{throw r.name==="FirebaseError"?(r.code===P.UNAUTHENTICATED&&this.credentials.invalidateToken(),r):new $(P.UNKNOWN,r.toString())})}terminate(){this.kr=!0}}class uk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(Ni(n),this.Mr=!1):re("OnlineStateTracker",n)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=s,this.zr.Ti(o=>{i.enqueueAndForget(async()=>{yr(this)&&(re("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ge(a);l.Wr.add(4),await Vo(l),l.Hr.set("Unknown"),l.Wr.delete(4),await Xl(l)}(this))})}),this.Hr=new uk(i,r)}}async function Xl(t){if(yr(t))for(const e of t.Gr)await e(!0)}async function Vo(t){for(const e of t.Gr)await e(!1)}function q_(t,e){const n=ge(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),sd(n)?rd(n):fs(n).hr()&&id(n,e))}function W_(t,e){const n=ge(t),i=fs(n);n.Qr.delete(e),i.hr()&&G_(n,e),n.Qr.size===0&&(i.hr()?i.wr():yr(n)&&n.Hr.set("Unknown"))}function id(t,e){t.Jr.Y(e.targetId),fs(t).br(e)}function G_(t,e){t.Jr.Y(e),fs(t).Pr(e)}function rd(t){t.Jr=new mA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),fs(t).start(),t.Hr.Lr()}function sd(t){return yr(t)&&!fs(t).ur()&&t.Qr.size>0}function yr(t){return ge(t).Wr.size===0}function z_(t){t.Jr=void 0}async function dk(t){t.Qr.forEach((e,n)=>{id(t,e)})}async function fk(t,e){z_(t),sd(t)?(t.Hr.qr(e),rd(t)):t.Hr.set("Unknown")}async function pk(t,e,n){if(t.Hr.set("Online"),e instanceof w_&&e.state===2&&e.cause)try{await async function(i,r){const s=r.cause;for(const o of r.targetIds)i.Qr.has(o)&&(await i.remoteSyncer.rejectListen(o,s),i.Qr.delete(o),i.Jr.removeTarget(o))}(t,e)}catch(i){re("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ql(t,i)}else if(e instanceof Gl?t.Jr.rt(e):e instanceof I_?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(je.min()))try{const i=await x_(t.localStore);n.compareTo(i)>=0&&await function(r,s){const o=r.Jr._t(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.Qr.get(l);c&&r.Qr.set(l,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=r.Qr.get(a);if(!l)return;r.Qr.set(a,l.withResumeToken(sn.EMPTY_BYTE_STRING,l.snapshotVersion)),G_(r,a);const c=new vr(l.target,a,1,l.sequenceNumber);id(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){re("RemoteStore","Failed to raise snapshot:",i),await Ql(t,i)}}async function Ql(t,e,n){if(!xo(e))throw e;t.Wr.add(1),await Vo(t),t.Hr.set("Offline"),n||(n=()=>x_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{re("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await Xl(t)})}function K_(t,e){return e().catch(n=>Ql(t,n,e))}async function Yl(t){const e=ge(t),n=Di(e);let i=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;mk(e);)try{const r=await KA(e.localStore,i);if(r===null){e.jr.length===0&&n.wr();break}i=r.batchId,gk(e,r)}catch(r){await Ql(e,r)}X_(e)&&Q_(e)}function mk(t){return yr(t)&&t.jr.length<10}function gk(t,e){t.jr.push(e);const n=Di(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function X_(t){return yr(t)&&!Di(t).ur()&&t.jr.length>0}function Q_(t){Di(t).start()}async function _k(t){Di(t).Nr()}async function vk(t){const e=Di(t);for(const n of t.jr)e.Sr(n.mutations)}async function yk(t,e,n){const i=t.jr.shift(),r=Jh.from(i,e,n);await K_(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Yl(t)}async function bk(t,e){e&&Di(t).Vr&&await async function(n,i){if(r=i.code,lA(r)&&r!==P.ABORTED){const s=n.jr.shift();Di(n).dr(),await K_(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Yl(n)}var r}(t,e),X_(t)&&Q_(t)}async function Ek(t,e){const n=ge(t);e?(n.Wr.delete(2),await Xl(n)):e||(n.Wr.add(2),await Vo(n),n.Hr.set("Unknown"))}function fs(t){return t.Yr||(t.Yr=function(e,n,i){const r=ge(e);return r.$r(),new ak(n,r.sr,r.credentials,r.N,i)}(t.datastore,t.asyncQueue,{Si:dk.bind(null,t),Ci:fk.bind(null,t),Rr:pk.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),sd(t)?rd(t):t.Hr.set("Unknown")):(await t.Yr.stop(),z_(t))})),t.Yr}function Di(t){return t.Xr||(t.Xr=function(e,n,i){const r=ge(e);return r.$r(),new lk(n,r.sr,r.credentials,r.N,i)}(t.datastore,t.asyncQueue,{Si:_k.bind(null,t),Ci:bk.bind(null,t),Cr:vk.bind(null,t),Dr:yk.bind(null,t)}),t.Gr.push(async e=>{e?(t.Xr.dr(),await Yl(t)):(await t.Xr.stop(),t.jr.length>0&&(re("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))})),t.Xr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new od(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ad(t,e){if(Ni("AsyncQueue",`${e}: ${t}`),xo(t))return new $(P.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.comparator=e?(n,i)=>e(n,i)||ue.comparator(n.key,i.key):(n,i)=>ue.comparator(n.key,i.key),this.keyedMap=Gh(),this.sortedSet=new an(this.comparator)}static emptySet(e){return new ps(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new ps;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(){this.Zr=new an(ue.comparator)}track(e){const n=e.doc.key,i=this.Zr.get(n);i?e.type!==0&&i.type===3?this.Zr=this.Zr.insert(n,e):e.type===3&&i.type!==1?this.Zr=this.Zr.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Zr=this.Zr.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Zr=this.Zr.remove(n):e.type===1&&i.type===2?this.Zr=this.Zr.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):me():this.Zr=this.Zr.insert(n,e)}eo(){const e=[];return this.Zr.inorderTraversal((n,i)=>{e.push(i)}),e}}class ms{constructor(e,n,i,r,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,i,r){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new ms(e,n,ps.emptySet(n),s,i,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(){this.no=void 0,this.listeners=[]}}class wk{constructor(){this.queries=new jo(e=>s_(e),Fl),this.onlineState="Unknown",this.so=new Set}}async function ld(t,e){const n=ge(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new Ik),r)try{s.no=await n.onListen(i)}catch(o){const a=ad(o,`Initialization of query '${Hh(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.listeners.push(e),e.io(n.onlineState),s.no&&e.ro(s.no)&&ud(n)}async function cd(t,e){const n=ge(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function Tk(t,e){const n=ge(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.ro(r)&&(i=!0);o.no=r}}i&&ud(n)}function Ck(t,e,n){const i=ge(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function ud(t){t.so.forEach(e=>{e.next()})}class hd{constructor(e,n,i){this.query=e,this.oo=n,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=i||{}}ro(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new ms(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.uo(e)&&(this.oo.next(e),n=!0):this.ho(e,this.onlineState)&&(this.lo(e),n=!0),this.ao=e,n}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let n=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),n=!0),n}ho(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.fo||!i)&&(!e.docs.isEmpty()||n==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const n=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}lo(e){e=ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e){this.key=e}}class Z_{constructor(e){this.key=e}}class Sk{constructor(e,n){this.query=e,this.po=n,this.To=null,this.current=!1,this.Eo=ot(),this.mutatedKeys=ot(),this.Io=o_(e),this.Ao=new ps(this.Io)}get Ro(){return this.po}bo(e,n){const i=n?n.Po:new Y_,r=n?n.Ao:this.Ao;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=Pl(this.query)&&r.size===this.query.limit?r.last():null,c=Dl(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),f=xl(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let g=!1;d&&f?d.data.isEqual(f.data)?p!==m&&(i.track({type:3,doc:f}),g=!0):this.vo(d,f)||(i.track({type:2,doc:f}),g=!0,(l&&this.Io(f,l)>0||c&&this.Io(f,c)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),g=!0):d&&!f&&(i.track({type:1,doc:d}),g=!0,(l||c)&&(a=!0)),g&&(f?(o=o.add(f),s=m?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),Pl(this.query)||Dl(this.query))for(;o.size>this.query.limit;){const u=Pl(this.query)?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),i.track({type:1,doc:u})}return{Ao:o,Po:i,Ln:a,mutatedKeys:s}}vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const r=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const s=e.Po.eo();s.sort((c,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return f(h)-f(d)}(c.type,u.type)||this.Io(c.doc,u.doc)),this.Vo(i);const o=n?this.So():[],a=this.Eo.size===0&&this.current?1:0,l=a!==this.To;return this.To=a,s.length!==0||l?{snapshot:new ms(this.query,e.Ao,r,s,e.mutatedKeys,a===0,l,!1),Do:o}:{Do:o}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new Y_,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(n=>this.po=this.po.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.po=this.po.delete(n)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=ot(),this.Ao.forEach(i=>{this.Co(i.key)&&(this.Eo=this.Eo.add(i.key))});const n=[];return e.forEach(i=>{this.Eo.has(i)||n.push(new Z_(i))}),this.Eo.forEach(i=>{e.has(i)||n.push(new J_(i))}),n}No(e){this.po=e.Gn,this.Eo=ot();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return ms.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class Ak{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class kk{constructor(e){this.key=e,this.ko=!1}}class Rk{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new jo(a=>s_(a),Fl),this.Fo=new Map,this.Mo=new Set,this.Lo=new an(ue.comparator),this.Bo=new Map,this.Uo=new ed,this.qo={},this.Ko=new Map,this.jo=ds.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function Ok(t,e){const n=Vk(t);let i,r;const s=n.Oo.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.xo();else{const o=await XA(n.localStore,mr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await Lk(n,e,i,a==="current"),n.isPrimaryClient&&q_(n.remoteStore,o)}return r}async function Lk(t,e,n,i){t.Wo=(u,h,d)=>async function(f,p,m,g){let v=p.view.bo(m);v.Ln&&(v=await U_(f.localStore,p.query,!1).then(({documents:S})=>p.view.bo(S,v)));const A=g&&g.targetChanges.get(p.targetId),w=p.view.applyChanges(v,f.isPrimaryClient,A);return rv(f,p.targetId,w.Do),w.snapshot}(t,u,h,d);const r=await U_(t.localStore,e,!0),s=new Sk(e,r.Gn),o=s.bo(r.documents),a=Fo.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);rv(t,n,l.Do);const c=new Ak(e,n,s);return t.Oo.set(e,c),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),l.snapshot}async function Mk(t,e){const n=ge(t),i=n.Oo.get(e),r=n.Fo.get(i.targetId);if(r.length>1)return n.Fo.set(i.targetId,r.filter(s=>!Fl(s,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await $h(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),W_(n.remoteStore,i.targetId),dd(n,i.targetId)}).catch(Uo)):(dd(n,i.targetId),await $h(n.localStore,i.targetId,!0))}async function Nk(t,e,n){const i=Bk(t);try{const r=await function(s,o){const a=ge(s),l=Ln.now(),c=o.reduce((h,d)=>h.add(d.key),ot());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,c).next(d=>{u=d;const f=[];for(const p of o){const m=sA(p,u.get(p.key));m!=null&&f.push(new gr(p.key,m,Zg(m.value.mapValue),Wn.exists(!0)))}return a.In.addMutationBatch(h,l,f,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(s,o,a){let l=s.qo[s.currentUser.toKey()];l||(l=new an(Ve)),l=l.insert(o,a),s.qo[s.currentUser.toKey()]=l}(i,r.batchId,n),await Bo(i,r.changes),await Yl(i.remoteStore)}catch(r){const s=ad(r,"Failed to persist write");n.reject(s)}}async function $_(t,e){const n=ge(t);try{const i=await GA(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.Bo.get(s);o&&(et(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ko=!0:r.modifiedDocuments.size>0?et(o.ko):r.removedDocuments.size>0&&(et(o.ko),o.ko=!1))}),await Bo(n,i,e)}catch(i){await Uo(i)}}function ev(t,e,n){const i=ge(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.Oo.forEach((s,o)=>{const a=o.view.io(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=ge(s);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.io(o)&&(l=!0)}),l&&ud(a)}(i.eventManager,e),r.length&&i.$o.Rr(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Pk(t,e,n){const i=ge(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Bo.get(e),s=r&&r.key;if(s){let o=new an(ue.comparator);o=o.insert(s,on.newNoDocument(s,je.min()));const a=ot().add(s),l=new Wl(je.min(),new Map,new Yt(Ve),o,a);await $_(i,l),i.Lo=i.Lo.remove(s),i.Bo.delete(e),fd(i)}else await $h(i.localStore,e,!1).then(()=>dd(i,e,n)).catch(Uo)}async function Dk(t,e){const n=ge(t),i=e.batch.batchId;try{const r=await WA(n.localStore,e);nv(n,i,null),tv(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Bo(n,r)}catch(r){await Uo(r)}}async function Fk(t,e,n){const i=ge(t);try{const r=await function(s,o){const a=ge(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.In.lookupMutationBatch(l,o).next(u=>(et(u!==null),c=u.keys(),a.In.removeMutationBatch(l,u))).next(()=>a.In.performConsistencyCheck(l)).next(()=>a.Qn.Pn(l,c))})}(i.localStore,e);nv(i,e,n),tv(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Bo(i,r)}catch(r){await Uo(r)}}function tv(t,e){(t.Ko.get(e)||[]).forEach(n=>{n.resolve()}),t.Ko.delete(e)}function nv(t,e,n){const i=ge(t);let r=i.qo[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.qo[i.currentUser.toKey()]=r}}function dd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Fo.get(e))t.Oo.delete(i),n&&t.$o.Go(i,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(i=>{t.Uo.containsKey(i)||iv(t,i)})}function iv(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);n!==null&&(W_(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),fd(t))}function rv(t,e,n){for(const i of n)i instanceof J_?(t.Uo.addReference(i.key,e),xk(t,i)):i instanceof Z_?(re("SyncEngine","Document no longer in limbo: "+i.key),t.Uo.removeReference(i.key,e),t.Uo.containsKey(i.key)||iv(t,i.key)):me()}function xk(t,e){const n=e.key,i=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(i)||(re("SyncEngine","New document in limbo: "+n),t.Mo.add(i),fd(t))}function fd(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new ue(mt.fromString(e)),i=t.jo.next();t.Bo.set(i,new kk(n)),t.Lo=t.Lo.insert(n,i),q_(t.remoteStore,new vr(mr(Nl(n.path)),i,2,Nh.T))}}async function Bo(t,e,n){const i=ge(t),r=[],s=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach((a,l)=>{o.push(i.Wo(l,e,n).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),r.push(c);const u=Zh.kn(l.targetId,c);s.push(u)}}))}),await Promise.all(o),i.$o.Rr(r),await async function(a,l){const c=ge(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>X.forEach(l,h=>X.forEach(h.Nn,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>X.forEach(h.xn,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!xo(u))throw u;re("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Un.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);c.Un=c.Un.insert(h,p)}}}(i.localStore,s))}async function Uk(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){re("SyncEngine","User change. New user:",e.toKey());const i=await F_(n.localStore,e);n.currentUser=e,function(r,s){r.Ko.forEach(o=>{o.forEach(a=>{a.reject(new $(P.CANCELLED,s))})}),r.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Bo(n,i.Wn)}}function jk(t,e){const n=ge(t),i=n.Bo.get(e);if(i&&i.ko)return ot().add(i.key);{let r=ot();const s=n.Fo.get(e);if(!s)return r;for(const o of s){const a=n.Oo.get(o);r=r.unionWith(a.view.Ro)}return r}}function Vk(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Pk.bind(null,e),e.$o.Rr=Tk.bind(null,e.eventManager),e.$o.Go=Ck.bind(null,e.eventManager),e}function Bk(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Dk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Fk.bind(null,e),e}class Hk{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=Kl(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return qA(this.persistence,new BA,e.initialUser,this.N)}Jo(e){return new ek(td.Ns,this.N)}Ho(e){return new nk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>ev(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Uk.bind(null,this.syncEngine),await Ek(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new wk}createDatastore(e){const n=Kl(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new ok(r));var r;return function(s,o,a){return new ck(s,o,a)}(e.credentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>ev(this.syncEngine,a,0),o=V_.bt()?new V_:new ik,new hk(n,i,r,s,o);var n,i,r,s,o}createSyncEngine(e,n){return function(i,r,s,o,a,l,c){const u=new Rk(i,r,s,o,a,l);return c&&(u.Qo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ge(e);re("RemoteStore","RemoteStore shutting down."),n.Wr.add(5),await Vo(n),n.zr.shutdown(),n.Hr.set("Unknown")}(this.remoteStore)}}/**
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
 */class pd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n,i){this.credentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=En.UNAUTHENTICATED,this.clientId=Wg.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async r=>{re("FirestoreClient","Received user=",r.uid),await this.credentialListener(r),this.user=r})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new li;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const i=ad(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Gk(t,e){t.asyncQueue.verifyOperationInProgress(),re("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await F_(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function zk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Kk(t);re("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>async function(s,o){const a=ge(s);a.asyncQueue.verifyOperationInProgress(),re("RemoteStore","RemoteStore received new credentials");const l=yr(a);a.Wr.add(3),await Vo(a),l&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await Xl(a)}(e.remoteStore,r)),t.onlineComponents=e}async function Kk(t){return t.offlineComponents||(re("FirestoreClient","Using default OfflineComponentProvider"),await Gk(t,new Hk)),t.offlineComponents}async function sv(t){return t.onlineComponents||(re("FirestoreClient","Using default OnlineComponentProvider"),await zk(t,new qk)),t.onlineComponents}function Xk(t){return sv(t).then(e=>e.syncEngine)}async function Jl(t){const e=await sv(t),n=e.eventManager;return n.onListen=Ok.bind(null,e.syncEngine),n.onUnlisten=Mk.bind(null,e.syncEngine),n}function Qk(t,e,n={}){const i=new li;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,l){const c=new pd({next:h=>{s.enqueueAndForget(()=>cd(r,u));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new $(P.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new $(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new hd(Nl(o.path),c,{includeMetadataChanges:!0,fo:!0});return ld(r,u)}(await Jl(t),t.asyncQueue,e,n,i)),i.promise}function Yk(t,e,n={}){const i=new li;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,l){const c=new pd({next:h=>{s.enqueueAndForget(()=>cd(r,u)),h.fromCache&&a.source==="server"?l.reject(new $(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new hd(o,c,{includeMetadataChanges:!0,fo:!0});return ld(r,u)}(await Jl(t),t.asyncQueue,e,n,i)),i.promise}class Jk{constructor(e,n,i,r,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ho{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ho&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ov=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(t,e,n){if(!n)throw new $(P.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Zk(t,e,n,i){if(e===!0&&i===!0)throw new $(P.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lv(t){if(!ue.isDocumentKey(t))throw new $(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cv(t){if(ue.isDocumentKey(t))throw new $(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function md(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function Nn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=md(t);throw new $(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class uv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new $(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Zk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class gd{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uv({}),this._settingsFrozen=!1,e instanceof Ho?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new $(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ho(i.options.projectId)}(e))}get app(){if(!this._app)throw new $(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uv(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new R1;switch(n.type){case"gapi":const i=n.client;return et(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new M1(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new $(P.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ov.get(e);n&&(re("ComponentProvider","Removing Datastore"),ov.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class mn{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mn(this.firestore,e,this._key)}}class gs{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new gs(this.firestore,e,this._query)}}class Fi extends gs{constructor(e,n,i){super(e,n,Nl(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mn(this.firestore,null,new ue(e))}withConverter(e){return new Fi(this.firestore,e,this._path)}}function Ej(t,e,...n){if(t=$e(t),av("collection","path",e),t instanceof gd){const i=mt.fromString(e,...n);return cv(i),new Fi(t,null,i)}{if(!(t instanceof mn||t instanceof Fi))throw new $(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(mt.fromString(e,...n));return cv(i),new Fi(t.firestore,null,i)}}function Ij(t,e,...n){if(t=$e(t),arguments.length===1&&(e=Wg.I()),av("doc","path",e),t instanceof gd){const i=mt.fromString(e,...n);return lv(i),new mn(t,null,new ue(i))}{if(!(t instanceof mn||t instanceof Fi))throw new $(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(mt.fromString(e,...n));return lv(i),new mn(t.firestore,t instanceof Fi?t.converter:null,new ue(i))}}/**
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
 */class $k{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new B_(this,"async_queue_retry"),this.Rc=()=>{const n=nd();n&&re("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ar.tr()};const e=nd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const n=nd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const n=new li;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!xo(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const n=this._c.then(()=>(this.Ec=!0,e().catch(i=>{this.Tc=i,this.Ec=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Ni("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Ec=!1,i))));return this._c=n,n}enqueueAfterDelay(e,n,i){this.bc(),this.Ac.indexOf(e)>-1&&(n=0);const r=od.createAndSchedule(this,e,n,i,s=>this.Vc(s));return this.yc.push(r),r}bc(){this.Tc&&me()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const n of this.yc)if(n.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.yc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const n=this.yc.indexOf(e);this.yc.splice(n,1)}}function hv(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const r of n)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class ui extends gd{constructor(e,n){super(e,n),this.type="firestore",this._queue=new $k,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||dv(this),this._firestoreClient.terminate()}}function wj(t=Wa()){return Zs(t,"firestore").getImmediate()}function qo(t){return t._firestoreClient||dv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function dv(t){var e;const n=t._freezeSettings(),i=function(r,s,o,a){return new Jk(r,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Wk(t._credentials,t._queue,i)}/**
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
 */class Wo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new In(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _s{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _s(sn.fromBase64String(e))}catch(n){throw new $(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _s(sn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Zl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=/^__.*__$/;class tR{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Hl(e,this.data,n,this.fieldTransforms)}}class fv{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function pv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class vd{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.N=i,this.ignoreUndefinedProperties=r,s===void 0&&this.xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new vd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.$c({path:i,Fc:!1});return r.Mc(e),r}Lc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.$c({path:i,Fc:!1});return r.xc(),r}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return ec(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(e.length===0)throw this.Uc("Document fields must not be empty");if(pv(this.kc)&&eR.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class nR{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=i||Kl(e)}jc(e,n,i,r=!1){return new vd({kc:e,methodName:n,Kc:i,path:In.emptyPath(),Fc:!1,qc:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function yd(t){const e=t._freezeSettings(),n=Kl(t._databaseId);return new nR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mv(t,e,n,i,r,s={}){const o=t.jc(s.merge||s.mergeFields?2:0,e,n,r);Ed("Data must be an object, but it was:",o,i);const a=vv(i,o);let l,c;if(s.merge)l=new Ao(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=Id(e,h,n);if(!o.contains(d))throw new $(P.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);bv(u,d)||u.push(d)}l=new Ao(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new tR(new Mn(a),l,c)}class Go extends Zl{_toFieldTransform(e){if(e.kc!==2)throw e.kc===1?e.Uc(`${this._methodName}() can only appear at the top level of your update data`):e.Uc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Go}}class bd extends Zl{_toFieldTransform(e){return new tA(e.path,new No)}isEqual(e){return e instanceof bd}}function gv(t,e,n,i){const r=t.jc(1,e,n);Ed("Data must be an object, but it was:",r,i);const s=[],o=Mn.empty();fr(i,(l,c)=>{const u=wd(e,l,n);c=$e(c);const h=r.Lc(u);if(c instanceof Go)s.push(u);else{const d=$l(c,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new Ao(s);return new fv(o,a,r.fieldTransforms)}function _v(t,e,n,i,r,s){const o=t.jc(1,e,n),a=[Id(e,i,n)],l=[r];if(s.length%2!=0)throw new $(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Id(e,s[d])),l.push(s[d+1]);const c=[],u=Mn.empty();for(let d=a.length-1;d>=0;--d)if(!bv(c,a[d])){const f=a[d];let p=l[d];p=$e(p);const m=o.Lc(f);if(p instanceof Go)c.push(f);else{const g=$l(p,m);g!=null&&(c.push(f),u.set(f,g))}}const h=new Ao(c);return new fv(u,h,o.fieldTransforms)}function $l(t,e){if(yv(t=$e(t)))return Ed("Unsupported field value:",e,t),vv(t,e);if(t instanceof Zl)return function(n,i){if(!pv(i.kc))throw i.Uc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Uc(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.kc!==4)throw e.Uc("Nested arrays are not supported");return function(n,i){const r=[];let s=0;for(const o of n){let a=$l(o,i.Bc(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=$e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Z1(i.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ln.fromDate(n);return{timestampValue:zl(i.N,r)}}if(n instanceof Ln){const r=new Ln(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:zl(i.N,r)}}if(n instanceof _d)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof _s)return{bytesValue:A_(i.N,n._byteString)};if(n instanceof mn){const r=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(r))throw i.Uc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:zh(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Uc(`Unsupported field value: ${md(n)}`)}(t,e)}function vv(t,e){const n={};return zg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fr(t,(i,r)=>{const s=$l(r,e.Oc(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function yv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ln||t instanceof _d||t instanceof _s||t instanceof mn||t instanceof Zl)}function Ed(t,e,n){if(!yv(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=md(n);throw i==="an object"?e.Uc(t+" a custom object"):e.Uc(t+" "+i)}}function Id(t,e,n){if((e=$e(e))instanceof Wo)return e._internalPath;if(typeof e=="string")return wd(t,e);throw ec("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const iR=new RegExp("[~\\*/\\[\\]]");function wd(t,e,n){if(e.search(iR)>=0)throw ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wo(...e.split("."))._internalPath}catch{throw ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ec(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new $(P.INVALID_ARGUMENT,a+t+l)}function bv(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ev{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new mn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Td("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rR extends Ev{data(){return super.data()}}function Td(t,e){return typeof e=="string"?wd(t,e):e instanceof Wo?e._internalPath:e._delegate._internalPath}/**
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
 */class zo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Iv extends Ev{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new tc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Td("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class tc extends Iv{data(e={}){return super.data(e)}}class wv{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new zo(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new tc(this._firestore,this._userDataWriter,i.key,i,new zo(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(o=>({type:"added",doc:new tc(i._firestore,i._userDataWriter,o.doc.key,o.doc,new zo(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:s++}))}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new tc(i._firestore,i._userDataWriter,o.doc.key,o.doc,new zo(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:sR(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}/**
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
 */function Tv(t){if(Dl(t)&&t.explicitOrderBy.length===0)throw new $(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oR{}function Tj(t,...e){for(const n of e)t=n._apply(t);return t}class aR extends oR{constructor(e,n){super(),this.Gc=e,this.Jc=n,this.type="orderBy"}_apply(e){const n=function(i,r,s){if(i.startAt!==null)throw new $(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new cs(r,s);return function(a,l){if(i_(a)===null){const c=r_(a);c!==null&&lR(a,c,l.field)}}(i,o),o}(e._query,this.Gc,this.Jc);return new gs(e.firestore,e.converter,function(i,r){const s=i.explicitOrderBy.concat([r]);return new Lo(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Cj(t,e="asc"){const n=e,i=Td("orderBy",t);return new aR(i,n)}function lR(t,e,n){if(!n.isEqual(e))throw new $(P.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class cR{convertValue(e,n="none"){switch(pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw me()}}convertObject(e,n){const i={};return fr(e.fields,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(e){return new _d(Rt(e.latitude),Rt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Xg(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(ko(e));default:return null}}convertTimestamp(e){const n=Pi(e);return new Ln(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=mt.fromString(e);et(P_(i));const r=new Ho(i.get(1),i.get(3)),s=new ue(i.popFirst(5));return r.isEqual(n)||Ni(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Cv(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
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
 */class uR{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=yd(e)}set(e,n,i){this._verifyNotCommitted();const r=Cd(e,this._firestore),s=Cv(r.converter,n,i),o=mv(this._dataReader,"WriteBatch.set",r._key,s,r.converter!==null,i);return this._mutations.push(o.toMutation(r._key,Wn.none())),this}update(e,n,i,...r){this._verifyNotCommitted();const s=Cd(e,this._firestore);let o;return o=typeof(n=$e(n))=="string"||n instanceof Wo?_v(this._dataReader,"WriteBatch.update",s._key,n,i,r):gv(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Wn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Cd(e,this._firestore);return this._mutations=this._mutations.concat(new Wh(n._key,Wn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new $(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Cd(t,e){if((t=$e(t)).firestore!==e)throw new $(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function Sj(t){t=Nn(t,mn);const e=Nn(t.firestore,ui);return Qk(qo(e),t._key).then(n=>Sv(e,t,n))}class Sd extends cR{constructor(e){super(),this.firestore=e}convertBytes(e){return new _s(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mn(this.firestore,null,n)}}function Aj(t){t=Nn(t,gs);const e=Nn(t.firestore,ui),n=qo(e),i=new Sd(e);return Tv(t._query),Yk(n,t._query).then(r=>new wv(e,i,t,r))}function kj(t,e,n){t=Nn(t,mn);const i=Nn(t.firestore,ui),r=Cv(t.converter,e,n);return nc(i,[mv(yd(i),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Wn.none())])}function Rj(t,e,n,...i){t=Nn(t,mn);const r=Nn(t.firestore,ui),s=yd(r);let o;return o=typeof(e=$e(e))=="string"||e instanceof Wo?_v(s,"updateDoc",t._key,e,n,i):gv(s,"updateDoc",t._key,e),nc(r,[o.toMutation(t._key,Wn.exists(!0))])}function Oj(t){return nc(Nn(t.firestore,ui),[new Wh(t._key,Wn.none())])}function Lj(t,...e){var n,i,r;t=$e(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||hv(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(hv(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let l,c,u;if(t instanceof mn)c=Nn(t.firestore,ui),u=Nl(t._key.path),l={next:h=>{e[o]&&e[o](Sv(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Nn(t,gs);c=Nn(h.firestore,ui),u=h._query;const d=new Sd(c);l={next:f=>{e[o]&&e[o](new wv(c,d,h,f))},error:e[o+1],complete:e[o+2]},Tv(t._query)}return function(h,d,f,p){const m=new pd(p),g=new hd(d,m,f);return h.asyncQueue.enqueueAndForget(async()=>ld(await Jl(h),g)),()=>{m.ec(),h.asyncQueue.enqueueAndForget(async()=>cd(await Jl(h),g))}}(qo(c),u,a,l)}function nc(t,e){return function(n,i){const r=new li;return n.asyncQueue.enqueueAndForget(async()=>Nk(await Xk(n),i,r)),r.promise}(qo(t),e)}function Sv(t,e,n){const i=n.docs.get(e._key),r=new Sd(t);return new Iv(t,r,e._key,i,new zo(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function Mj(){return new Go("deleteField")}function Nj(){return new bd("serverTimestamp")}/**
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
 */function Pj(t){return qo(t=Nn(t,ui)),new uR(t,e=>nc(t,e))}(function(t,e=!0){(function(n){rs=n})(ir),nr(new Ti("firestore",(n,{options:i})=>{const r=n.getProvider("app").getImmediate(),s=new ui(r,new O1(n.getProvider("auth-internal")));return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s},"PUBLIC")),jn(Bg,"3.3.1",t),jn(Bg,"3.3.1","esm2017")})();function Ce(t){return Object.entries(t).filter(([e,n])=>e!==""&&n).map(([e])=>e).join(" ")}function gt(t,e,n,i={bubbles:!0},r=!1){if(typeof Event!="undefined"&&t){const s=new CustomEvent(e,Object.assign(Object.assign({},i),{detail:n}));if(t==null||t.dispatchEvent(s),r&&e.startsWith("SMUI")){const o=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},i),{detail:n}));t==null||t.dispatchEvent(o),o.defaultPrevented&&s.preventDefault()}return s}}function ic(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let r=0;r<n.length;r++){const s=n[r],o=s.indexOf("$");o!==-1&&e.indexOf(s.substring(0,o+1))!==-1||e.indexOf(s)===-1&&(i[s]=t[s])}return i}const Av=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,hR=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function tt(t){let e,n=[];t.$on=(r,s)=>{let o=r,a=()=>{};return e?a=e(o,s):n.push([o,s]),o.match(Av)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',o),(...c)=>{a()}};function i(r){Xs(t,r)}return r=>{const s=[],o={};e=(a,l)=>{let c=a,u=l,h=!1;const d=c.match(Av),f=c.match(hR),p=d||f;if(c.match(/^SMUI:\w+:/)){const v=c.split(":");let A="";for(let w=0;w<v.length;w++)A+=w===v.length-1?":"+v[w]:v[w].split("-").map(S=>S.slice(0,1).toUpperCase()+S.slice(1)).join("");console.warn(`The event ${c.split("$")[0]} has been renamed to ${A.split("$")[0]}.`),c=A}if(p){const v=c.split(d?":":"$");c=v[0];const A=Object.fromEntries(v.slice(1).map(w=>[w,!0]));A.passive&&(h=h||{},h.passive=!0),A.nonpassive&&(h=h||{},h.passive=!1),A.capture&&(h=h||{},h.capture=!0),A.once&&(h=h||{},h.once=!0),A.preventDefault&&(u=a0(u)),A.stopPropagation&&(u=l0(u))}const m=Ze(r,c,u,h),g=()=>{m();const v=s.indexOf(g);v>-1&&s.splice(v,1)};return s.push(g),c in o||(o[c]=Ze(r,c,i)),g};for(let a=0;a<n.length;a++)e(n[a][0],n[a][1]);return{destroy:()=>{for(let a=0;a<s.length;a++)s[a]();for(let a of Object.entries(o))a[1]()}}}}function Tn(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let r=0;r<n.length;r++){const s=n[r];s.substring(0,e.length)===e&&(i[s.substring(e.length)]=t[s])}return i}function _t(t,e){let n=[];if(e)for(let i=0;i<e.length;i++){const r=e[i],s=Array.isArray(r)?r[0]:r;Array.isArray(r)&&r.length>1?n.push(s(t,r[1])):n.push(s(t))}return{update(i){if((i&&i.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(i)for(let r=0;r<i.length;r++){const s=n[r];if(s&&s.update){const o=i[r];Array.isArray(o)&&o.length>1?s.update(o[1]):s.update()}}},destroy(){for(let i=0;i<n.length;i++){const r=n[i];r&&r.destroy&&r.destroy()}}}}var rc;function dR(t,e){e===void 0&&(e=!1);var n=t.CSS,i=rc;if(typeof rc=="boolean"&&!e)return rc;var r=n&&typeof n.supports=="function";if(!r)return!1;var s=n.supports("--css-vars","yes"),o=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=s||o,e||(rc=i),i}function fR(t,e,n){if(!t)return{x:0,y:0};var i=e.x,r=e.y,s=i+n.left,o=r+n.top,a,l;if(t.type==="touchstart"){var c=t;a=c.changedTouches[0].pageX-s,l=c.changedTouches[0].pageY-o}else{var u=t;a=u.pageX-s,l=u.pageY-o}return{x:a,y:l}}/**
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
 */var Jn=function(){function t(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();/**
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
 */function pR(t){return t===void 0&&(t=window),mR(t)?{passive:!0}:!1}function mR(t){t===void 0&&(t=window);var e=!1;try{var n={get passive(){return e=!0,!1}},i=function(){};t.document.addEventListener("test",i,n),t.document.removeEventListener("test",i,n)}catch{e=!1}return e}var kv=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",applyPassive:pR});/**
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
 */function gR(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(Rv(n,e))return n;n=n.parentElement}return null}function Rv(t,e){var n=t.matches||t.webkitMatchesSelector||t.msMatchesSelector;return n.call(t,e)}function _R(t){var e=t;if(e.offsetParent!==null)return e.scrollWidth;var n=e.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var i=n.scrollWidth;return document.documentElement.removeChild(n),i}var Ad=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",closest:gR,matches:Rv,estimateScrollWidth:_R});/**
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
 */var vR={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},yR={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Ov={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
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
 */var Lv=["touchstart","pointerdown","mousedown","keydown"],Mv=["touchend","pointerup","mouseup","contextmenu"],sc=[],bR=function(t){qn(e,t);function e(n){var i=t.call(this,pt(pt({},e.defaultAdapter),n))||this;return i.activationAnimationHasEnded=!1,i.activationTimer=0,i.fgDeactivationRemovalTimer=0,i.fgScale="0",i.frame={width:0,height:0},i.initialSize=0,i.layoutFrame=0,i.maxRadius=0,i.unboundedCoords={left:0,top:0},i.activationState=i.defaultActivationState(),i.activationTimerCallback=function(){i.activationAnimationHasEnded=!0,i.runDeactivationUXLogicIfReady()},i.activateHandler=function(r){i.activateImpl(r)},i.deactivateHandler=function(){i.deactivateImpl()},i.focusHandler=function(){i.handleFocus()},i.blurHandler=function(){i.handleBlur()},i.resizeHandler=function(){i.layout()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return vR},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return yR},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ov},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var r=e.cssClasses,s=r.ROOT,o=r.UNBOUNDED;requestAnimationFrame(function(){n.adapter.addClass(s),n.adapter.isUnbounded()&&(n.adapter.addClass(o),n.layoutInternal())})}},e.prototype.destroy=function(){var n=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,r=i.ROOT,s=i.UNBOUNDED;requestAnimationFrame(function(){n.adapter.removeClass(r),n.adapter.removeClass(s),n.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(n){this.activateImpl(n)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var n=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){n.layoutInternal(),n.layoutFrame=0})},e.prototype.setUnbounded=function(n){var i=e.cssClasses.UNBOUNDED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var n=this;requestAnimationFrame(function(){return n.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var n=this;requestAnimationFrame(function(){return n.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(n){var i,r;if(n){try{for(var s=ti(Lv),o=s.next();!o.done;o=s.next()){var a=o.value;this.adapter.registerInteractionHandler(a,this.activateHandler)}}catch(l){i={error:l}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(n){var i,r;if(n.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var s=ti(Mv),o=s.next();!o.done;o=s.next()){var a=o.value;this.adapter.registerDocumentInteractionHandler(a,this.deactivateHandler)}}catch(l){i={error:l}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}},e.prototype.deregisterRootHandlers=function(){var n,i;try{for(var r=ti(Lv),s=r.next();!s.done;s=r.next()){var o=s.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(a){n={error:a}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var n,i;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var r=ti(Mv),s=r.next();!s.done;s=r.next()){var o=s.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(a){n={error:a}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},e.prototype.removeCssVars=function(){var n=this,i=e.strings,r=Object.keys(i);r.forEach(function(s){s.indexOf("VAR_")===0&&n.adapter.updateCssVariable(i[s],null)})},e.prototype.activateImpl=function(n){var i=this;if(!this.adapter.isSurfaceDisabled()){var r=this.activationState;if(!r.isActivated){var s=this.previousActivationEvent,o=s&&n!==void 0&&s.type!==n.type;if(!o){r.isActivated=!0,r.isProgrammatic=n===void 0,r.activationEvent=n,r.wasActivatedByPointer=r.isProgrammatic?!1:n!==void 0&&(n.type==="mousedown"||n.type==="touchstart"||n.type==="pointerdown");var a=n!==void 0&&sc.length>0&&sc.some(function(l){return i.adapter.containsEventTarget(l)});if(a){this.resetActivationState();return}n!==void 0&&(sc.push(n.target),this.registerDeactivationHandlers(n)),r.wasElementMadeActive=this.checkElementMadeActive(n),r.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){sc=[],!r.wasElementMadeActive&&n!==void 0&&(n.key===" "||n.keyCode===32)&&(r.wasElementMadeActive=i.checkElementMadeActive(n),r.wasElementMadeActive&&i.animateActivation()),r.wasElementMadeActive||(i.activationState=i.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(n){return n!==void 0&&n.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var n=this,i=e.strings,r=i.VAR_FG_TRANSLATE_START,s=i.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,l=o.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",h="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),f=d.startPoint,p=d.endPoint;u=f.x+"px, "+f.y+"px",h=p.x+"px, "+p.y+"px"}this.adapter.updateCssVariable(r,u),this.adapter.updateCssVariable(s,h),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){n.activationTimerCallback()},c)},e.prototype.getFgTranslationCoordinates=function(){var n=this.activationState,i=n.activationEvent,r=n.wasActivatedByPointer,s;r?s=fR(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):s={x:this.frame.width/2,y:this.frame.height/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:s,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady=function(){var n=this,i=e.cssClasses.FG_DEACTIVATION,r=this.activationState,s=r.hasDeactivationUXRun,o=r.isActivated,a=s||!o;a&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout(function(){n.adapter.removeClass(i)},Ov.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var n=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(n),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var n=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return n.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var n=this,i=this.activationState;if(!!i.isActivated){var r=pt({},i);i.isProgrammatic?(requestAnimationFrame(function(){n.animateDeactivation(r)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){n.activationState.hasDeactivationUXRun=!0,n.animateDeactivation(r),n.resetActivationState()}))}},e.prototype.animateDeactivation=function(n){var i=n.wasActivatedByPointer,r=n.wasElementMadeActive;(i||r)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var n=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width),r=function(){var o=Math.sqrt(Math.pow(n.frame.width,2)+Math.pow(n.frame.height,2));return o+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?i:r();var s=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&s%2!=0?this.initialSize=s-1:this.initialSize=s,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var n=e.strings,i=n.VAR_FG_SIZE,r=n.VAR_LEFT,s=n.VAR_TOP,o=n.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(r,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(s,this.unboundedCoords.top+"px"))},e}(Jn);/**
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
 */var kd="mdc-dom-focus-sentinel",ER=function(){function t(e,n){n===void 0&&(n={}),this.root=e,this.options=n,this.elFocusedBeforeTrapFocus=null}return t.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},t.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+kd)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},t.prototype.wrapTabFocus=function(e){var n=this,i=this.createSentinel(),r=this.createSentinel();i.addEventListener("focus",function(){var s=n.getFocusableElements(e);s.length>0&&s[s.length-1].focus()}),r.addEventListener("focus",function(){var s=n.getFocusableElements(e);s.length>0&&s[0].focus()}),e.insertBefore(i,e.children[0]),e.appendChild(r)},t.prototype.focusInitialElement=function(e,n){var i=0;n&&(i=Math.max(e.indexOf(n),0)),e[i].focus()},t.prototype.getFocusableElements=function(e){var n=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return n.filter(function(i){var r=i.getAttribute("aria-disabled")==="true"||i.getAttribute("disabled")!=null||i.getAttribute("hidden")!=null||i.getAttribute("aria-hidden")==="true",s=i.tabIndex>=0&&i.getBoundingClientRect().width>0&&!i.classList.contains(kd)&&!r,o=!1;if(s){var a=getComputedStyle(i);o=a.display==="none"||a.visibility==="hidden"}return s&&!o})},t.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(kd),e},t}(),IR=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",FocusTrap:ER});/**
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
 */var ke={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},gn=new Set;gn.add(ke.BACKSPACE);gn.add(ke.ENTER);gn.add(ke.SPACEBAR);gn.add(ke.PAGE_UP);gn.add(ke.PAGE_DOWN);gn.add(ke.END);gn.add(ke.HOME);gn.add(ke.ARROW_LEFT);gn.add(ke.ARROW_UP);gn.add(ke.ARROW_RIGHT);gn.add(ke.ARROW_DOWN);gn.add(ke.DELETE);gn.add(ke.ESCAPE);gn.add(ke.TAB);var Cn={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},_n=new Map;_n.set(Cn.BACKSPACE,ke.BACKSPACE);_n.set(Cn.ENTER,ke.ENTER);_n.set(Cn.SPACEBAR,ke.SPACEBAR);_n.set(Cn.PAGE_UP,ke.PAGE_UP);_n.set(Cn.PAGE_DOWN,ke.PAGE_DOWN);_n.set(Cn.END,ke.END);_n.set(Cn.HOME,ke.HOME);_n.set(Cn.ARROW_LEFT,ke.ARROW_LEFT);_n.set(Cn.ARROW_UP,ke.ARROW_UP);_n.set(Cn.ARROW_RIGHT,ke.ARROW_RIGHT);_n.set(Cn.ARROW_DOWN,ke.ARROW_DOWN);_n.set(Cn.DELETE,ke.DELETE);_n.set(Cn.ESCAPE,ke.ESCAPE);_n.set(Cn.TAB,ke.TAB);var xi=new Set;xi.add(ke.PAGE_UP);xi.add(ke.PAGE_DOWN);xi.add(ke.END);xi.add(ke.HOME);xi.add(ke.ARROW_LEFT);xi.add(ke.ARROW_UP);xi.add(ke.ARROW_RIGHT);xi.add(ke.ARROW_DOWN);function ln(t){var e=t.key;if(gn.has(e))return e;var n=_n.get(t.keyCode);return n||ke.UNKNOWN}const{applyPassive:oc}=kv,{matches:wR}=Ad;function vs(t,{ripple:e=!0,surface:n=!1,unbounded:i=!1,disabled:r=!1,color:s,active:o,rippleElement:a,eventTarget:l,activeTarget:c,addClass:u=p=>t.classList.add(p),removeClass:h=p=>t.classList.remove(p),addStyle:d=(p,m)=>t.style.setProperty(p,m),initPromise:f=Promise.resolve()}={}){let p,m=bn("SMUI:addLayoutListener"),g,v=o,A=l,w=c;function S(){n&&(u("mdc-ripple-surface"),s==="primary"?(u("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")):s==="secondary"?(h("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")):(h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary"))),p&&v!==o&&(v=o,o?p.activate():o===!1&&p.deactivate()),e&&!p?(p=new bR({addClass:u,browserSupportsCssVars:()=>dR(window),computeBoundingRect:()=>(a||t).getBoundingClientRect(),containsEventTarget:k=>t.contains(k),deregisterDocumentInteractionHandler:(k,_)=>document.documentElement.removeEventListener(k,_,oc()),deregisterInteractionHandler:(k,_)=>(l||t).removeEventListener(k,_,oc()),deregisterResizeHandler:k=>window.removeEventListener("resize",k),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>o==null?wR(c||t,":active"):o,isSurfaceDisabled:()=>!!r,isUnbounded:()=>!!i,registerDocumentInteractionHandler:(k,_)=>document.documentElement.addEventListener(k,_,oc()),registerInteractionHandler:(k,_)=>(l||t).addEventListener(k,_,oc()),registerResizeHandler:k=>window.addEventListener("resize",k),removeClass:h,updateCssVariable:d}),f.then(()=>{p&&(p.init(),p.setUnbounded(i))})):p&&!e&&f.then(()=>{p&&(p.destroy(),p=void 0)}),p&&(A!==l||w!==c)&&(A=l,w=c,p.destroy(),requestAnimationFrame(()=>{p&&(p.init(),p.setUnbounded(i))})),!e&&i&&u("mdc-ripple-upgraded--unbounded")}S(),m&&(g=m(q));function q(){p&&p.layout()}return{update(k){({ripple:e,surface:n,unbounded:i,disabled:r,color:s,active:o,rippleElement:a,eventTarget:l,activeTarget:c,addClass:u,removeClass:h,addStyle:d,initPromise:f}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:_=>t.classList.add(_),removeClass:_=>t.classList.remove(_),addStyle:(_,I)=>t.style.setProperty(_,I),initPromise:Promise.resolve()},k)),S()},destroy(){p&&(p.destroy(),p=void 0,h("mdc-ripple-surface"),h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")),g&&g()}}}function TR(t){let e,n,i,r,s;const o=t[7].default,a=Ee(o,t,t[6],null);let l=[{href:t[1]},t[4]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=Le("a"),a&&a.c(),this.h()},l(u){e=De(u,"A",{href:!0});var h=Pe(e);a&&a.l(h),h.forEach(H),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[8](e),i=!0,r||(s=[se(n=_t.call(null,e,t[0])),se(t[3].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&64)&&we(a,o,u,u[6],i?Ie(o,u[6],h,null):Te(u[6]),null),ae(e,c=Re(l,[(!i||h&2)&&{href:u[1]},h&16&&u[4]])),n&&ze(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(F(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&H(e),a&&a.d(u),t[8](null),r=!1,qe(s)}}}function CR(t,e,n){const i=["use","href","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e,{href:l="javascript:void(0);"}=e;const c=tt(Me());let u;function h(){return u}function d(f){de[f?"unshift":"push"](()=>{u=f,n(2,u)})}return t.$$set=f=>{e=x(x({},e),Ke(f)),n(4,r=ne(e,i)),"use"in f&&n(0,a=f.use),"href"in f&&n(1,l=f.href),"$$scope"in f&&n(6,o=f.$$scope)},[a,l,u,c,r,h,o,s,d]}class SR extends Qe{constructor(e){super();Xe(this,e,CR,TR,We,{use:0,href:1,getElement:5})}get getElement(){return this.$$.ctx[5]}}function AR(t){let e,n,i,r,s;const o=t[6].default,a=Ee(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=Le("button"),a&&a.c(),this.h()},l(u){e=De(u,"BUTTON",{});var h=Pe(e);a&&a.l(h),h.forEach(H),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),e.autofocus&&e.focus(),t[7](e),i=!0,r||(s=[se(n=_t.call(null,e,t[0])),se(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&we(a,o,u,u[5],i?Ie(o,u[5],h,null):Te(u[5]),null),ae(e,c=Re(l,[h&8&&u[3]])),n&&ze(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(F(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&H(e),a&&a.d(u),t[7](null),r=!1,qe(s)}}}function kR(t,e,n){const i=["use","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=tt(Me());let c;function u(){return c}function h(d){de[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=x(x({},e),Ke(d)),n(3,r=ne(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class RR extends Qe{constructor(e){super();Xe(this,e,kR,AR,We,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function OR(t){let e,n,i,r,s;const o=t[6].default,a=Ee(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=Le("div"),a&&a.c(),this.h()},l(u){e=De(u,"DIV",{});var h=Pe(e);a&&a.l(h),h.forEach(H),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[se(n=_t.call(null,e,t[0])),se(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&we(a,o,u,u[5],i?Ie(o,u[5],h,null):Te(u[5]),null),ae(e,c=Re(l,[h&8&&u[3]])),n&&ze(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(F(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&H(e),a&&a.d(u),t[7](null),r=!1,qe(s)}}}function LR(t,e,n){const i=["use","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=tt(Me());let c;function u(){return c}function h(d){de[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=x(x({},e),Ke(d)),n(3,r=ne(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class Nv extends Qe{constructor(e){super();Xe(this,e,LR,OR,We,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function MR(t){let e,n,i,r,s;const o=t[6].default,a=Ee(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=Le("h1"),a&&a.c(),this.h()},l(u){e=De(u,"H1",{});var h=Pe(e);a&&a.l(h),h.forEach(H),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[se(n=_t.call(null,e,t[0])),se(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&we(a,o,u,u[5],i?Ie(o,u[5],h,null):Te(u[5]),null),ae(e,c=Re(l,[h&8&&u[3]])),n&&ze(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(F(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&H(e),a&&a.d(u),t[7](null),r=!1,qe(s)}}}function NR(t,e,n){const i=["use","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=tt(Me());let c;function u(){return c}function h(d){de[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=x(x({},e),Ke(d)),n(3,r=ne(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class PR extends Qe{constructor(e){super();Xe(this,e,NR,MR,We,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function DR(t){let e,n,i,r,s;const o=t[6].default,a=Ee(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=Le("h2"),a&&a.c(),this.h()},l(u){e=De(u,"H2",{});var h=Pe(e);a&&a.l(h),h.forEach(H),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[se(n=_t.call(null,e,t[0])),se(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&we(a,o,u,u[5],i?Ie(o,u[5],h,null):Te(u[5]),null),ae(e,c=Re(l,[h&8&&u[3]])),n&&ze(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(F(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&H(e),a&&a.d(u),t[7](null),r=!1,qe(s)}}}function FR(t,e,n){const i=["use","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=tt(Me());let c;function u(){return c}function h(d){de[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=x(x({},e),Ke(d)),n(3,r=ne(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class xR extends Qe{constructor(e){super();Xe(this,e,FR,DR,We,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function UR(t){let e,n,i,r,s;const o=t[6].default,a=Ee(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=Le("h3"),a&&a.c(),this.h()},l(u){e=De(u,"H3",{});var h=Pe(e);a&&a.l(h),h.forEach(H),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[se(n=_t.call(null,e,t[0])),se(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&we(a,o,u,u[5],i?Ie(o,u[5],h,null):Te(u[5]),null),ae(e,c=Re(l,[h&8&&u[3]])),n&&ze(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(F(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&H(e),a&&a.d(u),t[7](null),r=!1,qe(s)}}}function jR(t,e,n){const i=["use","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=tt(Me());let c;function u(){return c}function h(d){de[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=x(x({},e),Ke(d)),n(3,r=ne(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class VR extends Qe{constructor(e){super();Xe(this,e,jR,UR,We,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function BR(t){let e,n,i,r,s;const o=t[6].default,a=Ee(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=Le("li"),a&&a.c(),this.h()},l(u){e=De(u,"LI",{});var h=Pe(e);a&&a.l(h),h.forEach(H),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[se(n=_t.call(null,e,t[0])),se(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&we(a,o,u,u[5],i?Ie(o,u[5],h,null):Te(u[5]),null),ae(e,c=Re(l,[h&8&&u[3]])),n&&ze(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(F(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&H(e),a&&a.d(u),t[7](null),r=!1,qe(s)}}}function HR(t,e,n){const i=["use","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=tt(Me());let c;function u(){return c}function h(d){de[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=x(x({},e),Ke(d)),n(3,r=ne(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class qR extends Qe{constructor(e){super();Xe(this,e,HR,BR,We,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function WR(t){let e,n,i,r,s;const o=t[6].default,a=Ee(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=Le("nav"),a&&a.c(),this.h()},l(u){e=De(u,"NAV",{});var h=Pe(e);a&&a.l(h),h.forEach(H),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[se(n=_t.call(null,e,t[0])),se(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&we(a,o,u,u[5],i?Ie(o,u[5],h,null):Te(u[5]),null),ae(e,c=Re(l,[h&8&&u[3]])),n&&ze(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(F(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&H(e),a&&a.d(u),t[7](null),r=!1,qe(s)}}}function GR(t,e,n){const i=["use","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=tt(Me());let c;function u(){return c}function h(d){de[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=x(x({},e),Ke(d)),n(3,r=ne(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class zR extends Qe{constructor(e){super();Xe(this,e,GR,WR,We,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function KR(t){let e,n,i,r,s;const o=t[6].default,a=Ee(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=Le("span"),a&&a.c(),this.h()},l(u){e=De(u,"SPAN",{});var h=Pe(e);a&&a.l(h),h.forEach(H),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[se(n=_t.call(null,e,t[0])),se(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&we(a,o,u,u[5],i?Ie(o,u[5],h,null):Te(u[5]),null),ae(e,c=Re(l,[h&8&&u[3]])),n&&ze(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(F(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&H(e),a&&a.d(u),t[7](null),r=!1,qe(s)}}}function XR(t,e,n){const i=["use","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=tt(Me());let c;function u(){return c}function h(d){de[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=x(x({},e),Ke(d)),n(3,r=ne(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class QR extends Qe{constructor(e){super();Xe(this,e,XR,KR,We,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function YR(t){let e,n,i,r,s;const o=t[6].default,a=Ee(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=x(c,l[u]);return{c(){e=Le("ul"),a&&a.c(),this.h()},l(u){e=De(u,"UL",{});var h=Pe(e);a&&a.l(h),h.forEach(H),this.h()},h(){ae(e,c)},m(u,h){ie(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[se(n=_t.call(null,e,t[0])),se(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&we(a,o,u,u[5],i?Ie(o,u[5],h,null):Te(u[5]),null),ae(e,c=Re(l,[h&8&&u[3]])),n&&ze(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(F(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&H(e),a&&a.d(u),t[7](null),r=!1,qe(s)}}}function JR(t,e,n){const i=["use","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=tt(Me());let c;function u(){return c}function h(d){de[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=x(x({},e),Ke(d)),n(3,r=ne(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class ZR extends Qe{constructor(e){super();Xe(this,e,JR,YR,We,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}const Pv=SR,$R=RR,hi=Nv,eO=PR,tO=xR,nO=VR,iO=qR,rO=zR,br=QR,sO=ZR;function Dv(t){let e;return{c(){e=Le("div"),this.h()},l(n){e=De(n,"DIV",{class:!0}),Pe(e).forEach(H),this.h()},h(){xn(e,"class","mdc-button__touch")},m(n,i){ie(n,e,i)},d(n){n&&H(e)}}}function oO(t){let e,n,i,r;const s=t[26].default,o=Ee(s,t,t[28],null);let a=t[6]&&Dv();return{c(){e=Le("div"),n=bt(),o&&o.c(),a&&a.c(),i=At(),this.h()},l(l){e=De(l,"DIV",{class:!0}),Pe(e).forEach(H),n=Et(l),o&&o.l(l),a&&a.l(l),i=At(),this.h()},h(){xn(e,"class","mdc-button__ripple")},m(l,c){ie(l,e,c),ie(l,n,c),o&&o.m(l,c),a&&a.m(l,c),ie(l,i,c),r=!0},p(l,c){o&&o.p&&(!r||c&268435456)&&we(o,s,l,l[28],r?Ie(s,l[28],c,null):Te(l[28]),null),l[6]?a||(a=Dv(),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null)},i(l){r||(F(o,l),r=!0)},o(l){j(o,l),r=!1},d(l){l&&H(e),l&&H(n),o&&o.d(l),a&&a.d(l),l&&H(i)}}}function aO(t){let e,n,i;const r=[{use:[[vs,{ripple:t[3],unbounded:!1,color:t[4],disabled:!!t[22].disabled,addClass:t[18],removeClass:t[19],addStyle:t[20]}],t[16],...t[0]]},{class:Ce(st({[t[1]]:!0,"mdc-button":!0,"mdc-button--raised":t[5]==="raised","mdc-button--unelevated":t[5]==="unelevated","mdc-button--outlined":t[5]==="outlined","smui-button--color-secondary":t[4]==="secondary","mdc-button--touch":t[6],"mdc-card__action":t[17]==="card:action","mdc-card__action--button":t[17]==="card:action","mdc-dialog__button":t[17]==="dialog:action","mdc-top-app-bar__navigation-icon":t[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":t[17]==="top-app-bar:action","mdc-snackbar__action":t[17]==="snackbar:actions","mdc-banner__secondary-action":t[17]==="banner"&&t[8],"mdc-banner__primary-action":t[17]==="banner"&&!t[8],"mdc-tooltip__action":t[17]==="tooltip:rich-actions"},t[11]))},{style:Object.entries(t[12]).map(Fv).concat([t[2]]).join(" ")},t[15],t[14],t[13],{href:t[7]},t[22]];var s=t[9];function o(a){let l={$$slots:{default:[oO]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=x(l,r[c]);return{props:l}}return s&&(e=new s(o(t)),t[27](e),e.$on("click",t[21])),{c(){e&&yt(e.$$.fragment),n=At()},l(a){e&&xt(e.$$.fragment,a),n=At()},m(a,l){e&&dt(e,a,l),ie(a,n,l),i=!0},p(a,[l]){const c=l&6289919?Re(r,[l&6094873&&{use:[[vs,{ripple:a[3],unbounded:!1,color:a[4],disabled:!!a[22].disabled,addClass:a[18],removeClass:a[19],addStyle:a[20]}],a[16],...a[0]]},l&133490&&{class:Ce(st({[a[1]]:!0,"mdc-button":!0,"mdc-button--raised":a[5]==="raised","mdc-button--unelevated":a[5]==="unelevated","mdc-button--outlined":a[5]==="outlined","smui-button--color-secondary":a[4]==="secondary","mdc-button--touch":a[6],"mdc-card__action":a[17]==="card:action","mdc-card__action--button":a[17]==="card:action","mdc-dialog__button":a[17]==="dialog:action","mdc-top-app-bar__navigation-icon":a[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":a[17]==="top-app-bar:action","mdc-snackbar__action":a[17]==="snackbar:actions","mdc-banner__secondary-action":a[17]==="banner"&&a[8],"mdc-banner__primary-action":a[17]==="banner"&&!a[8],"mdc-tooltip__action":a[17]==="tooltip:rich-actions"},a[11]))},l&4100&&{style:Object.entries(a[12]).map(Fv).concat([a[2]]).join(" ")},l&32768&&ht(a[15]),l&16384&&ht(a[14]),l&8192&&ht(a[13]),l&128&&{href:a[7]},l&4194304&&ht(a[22])]):{};if(l&268435520&&(c.$$scope={dirty:l,ctx:a}),s!==(s=a[9])){if(e){tn();const u=e;j(u.$$.fragment,1,0,()=>{ft(u,1)}),nn()}s?(e=new s(o(a)),a[27](e),e.$on("click",a[21]),yt(e.$$.fragment),F(e.$$.fragment,1),dt(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(a){i||(e&&F(e.$$.fragment,a),i=!0)},o(a){e&&j(e.$$.fragment,a),i=!1},d(a){t[27](null),a&&H(n),e&&ft(e,a)}}}const Fv=([t,e])=>`${t}: ${e};`;function lO(t,e,n){let i,r,s;const o=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","getElement"];let a=ne(e,o),{$$slots:l={},$$scope:c}=e;const u=tt(Me());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{ripple:p=!0}=e,{color:m="primary"}=e,{variant:g="text"}=e,{touch:v=!1}=e,{href:A=void 0}=e,{action:w="close"}=e,{defaultAction:S=!1}=e,{secondary:q=!1}=e,k,_={},I={},U=bn("SMUI:button:context"),{component:b=A==null?$R:Pv}=e;Mt("SMUI:label:context","button"),Mt("SMUI:icon:context","button");function O(T){_[T]||n(11,_[T]=!0,_)}function Z(T){(!(T in _)||_[T])&&n(11,_[T]=!1,_)}function y(T,C){I[T]!=C&&(C===""||C==null?(delete I[T],n(12,I)):n(12,I[T]=C,I))}function M(){U==="banner"&&gt(R(),q?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function R(){return k.getElement()}function G(T){de[T?"unshift":"push"](()=>{k=T,n(10,k)})}return t.$$set=T=>{n(29,e=x(x({},e),Ke(T))),n(22,a=ne(e,o)),"use"in T&&n(0,h=T.use),"class"in T&&n(1,d=T.class),"style"in T&&n(2,f=T.style),"ripple"in T&&n(3,p=T.ripple),"color"in T&&n(4,m=T.color),"variant"in T&&n(5,g=T.variant),"touch"in T&&n(6,v=T.touch),"href"in T&&n(7,A=T.href),"action"in T&&n(23,w=T.action),"defaultAction"in T&&n(24,S=T.defaultAction),"secondary"in T&&n(8,q=T.secondary),"component"in T&&n(9,b=T.component),"$$scope"in T&&n(28,c=T.$$scope)},t.$$.update=()=>{n(15,i=U==="dialog:action"&&w!=null?{"data-mdc-dialog-action":w}:{action:e.action}),n(14,r=U==="dialog:action"&&S?{"data-mdc-dialog-button-default":""}:{default:e.default}),n(13,s=U==="banner"?{}:{secondary:e.secondary})},e=Ke(e),[h,d,f,p,m,g,v,A,q,b,k,_,I,s,r,i,u,U,O,Z,y,M,a,w,S,R,l,G,c]}class Dj extends Qe{constructor(e){super();Xe(this,e,lO,aO,We,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:23,defaultAction:24,secondary:8,component:9,getElement:25})}get getElement(){return this.$$.ctx[25]}}function cO(t){let e;const n=t[4].default,i=Ee(n,t,t[3],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,[s]){i&&i.p&&(!e||s&8)&&we(i,n,r,r[3],e?Ie(n,r[3],s,null):Te(r[3]),null)},i(r){e||(F(i,r),e=!0)},o(r){j(i,r),e=!1},d(r){i&&i.d(r)}}}function uO(t,e,n){let i,{$$slots:r={},$$scope:s}=e,{key:o}=e,{value:a}=e;const l=Tp(a);return $w(t,l,c=>n(5,i=c)),Mt(o,l),Ji(()=>{l.set(void 0)}),t.$$set=c=>{"key"in c&&n(1,o=c.key),"value"in c&&n(2,a=c.value),"$$scope"in c&&n(3,s=c.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&t0(l,i=a,i)},[l,o,a,s,r]}class ac extends Qe{constructor(e){super();Xe(this,e,uO,cO,We,{key:1,value:2})}}/**
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
 */var Zn={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},di={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+Zn.ROOT};/**
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
 */var hO=function(t){qn(e,t);function e(n){return t.call(this,pt(pt({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Zn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return di},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(di.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(n){this.adapter.setContent(n)},e.prototype.isPersistent=function(){return this.adapter.hasClass(Zn.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(n){n?this.adapter.addClass(Zn.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(Zn.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(Zn.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(n){n?this.adapter.addClass(Zn.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(Zn.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(di.ARIA_HIDDEN)},e.prototype.setValidity=function(n){var i=this.adapter.hasClass(Zn.HELPER_TEXT_PERSISTENT),r=this.adapter.hasClass(Zn.HELPER_TEXT_VALIDATION_MSG),s=r&&!n;s?(this.showToScreenReader(),this.adapter.getAttr(di.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(di.ROLE,"alert")):this.adapter.removeAttr(di.ROLE),!i&&!s&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(di.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var n=this;this.adapter.removeAttr(di.ROLE),requestAnimationFrame(function(){n.adapter.setAttr(di.ROLE,"alert")})},e}(Jn);function dO(t){let e;return{c(){e=bi(t[8])},l(n){e=Wr(n,t[8])},m(n,i){ie(n,e,i)},p(n,i){i&256&&Ks(e,n[8])},i:hn,o:hn,d(n){n&&H(e)}}}function fO(t){let e;const n=t[13].default,i=Ee(n,t,t[12],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&4096)&&we(i,n,r,r[12],e?Ie(n,r[12],s,null):Te(r[12]),null)},i(r){e||(F(i,r),e=!0)},o(r){j(i,r),e=!1},d(r){i&&i.d(r)}}}function pO(t){let e,n,i,r,s,o,a,l,c;const u=[fO,dO],h=[];function d(m,g){return m[8]==null?0:1}n=d(t),i=h[n]=u[n](t);let f=[{class:r=Ce(st({[t[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":t[3],"mdc-text-field-helper-text--validation-msg":t[4]},t[6]))},{"aria-hidden":s=t[3]?void 0:"true"},{id:t[2]},t[7],t[10]],p={};for(let m=0;m<f.length;m+=1)p=x(p,f[m]);return{c(){e=Le("div"),i.c(),this.h()},l(m){e=De(m,"DIV",{class:!0,"aria-hidden":!0,id:!0});var g=Pe(e);i.l(g),g.forEach(H),this.h()},h(){ae(e,p)},m(m,g){ie(m,e,g),h[n].m(e,null),t[14](e),a=!0,l||(c=[se(o=_t.call(null,e,t[0])),se(t[9].call(null,e))],l=!0)},p(m,[g]){let v=n;n=d(m),n===v?h[n].p(m,g):(tn(),j(h[v],1,1,()=>{h[v]=null}),nn(),i=h[n],i?i.p(m,g):(i=h[n]=u[n](m),i.c()),F(i,1),i.m(e,null)),ae(e,p=Re(f,[(!a||g&90&&r!==(r=Ce(st({[m[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":m[3],"mdc-text-field-helper-text--validation-msg":m[4]},m[6]))))&&{class:r},(!a||g&8&&s!==(s=m[3]?void 0:"true"))&&{"aria-hidden":s},(!a||g&4)&&{id:m[2]},g&128&&m[7],g&1024&&m[10]])),o&&ze(o.update)&&g&1&&o.update.call(null,m[0])},i(m){a||(F(i),a=!0)},o(m){j(i),a=!1},d(m){m&&H(e),h[n].d(),t[14](null),l=!1,qe(c)}}}let mO=0;function gO(t,e,n){const i=["use","class","id","persistent","validationMsg","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e;const a=tt(Me());let{use:l=[]}=e,{class:c=""}=e,{id:u="SMUI-textfield-helper-text-"+mO++}=e,{persistent:h=!1}=e,{validationMsg:d=!1}=e,f,p,m={},g={},v;Un(()=>(p=new hO({addClass:w,removeClass:S,hasClass:A,getAttr:q,setAttr:k,removeAttr:_,setContent:b=>{n(8,v=b)}}),u.startsWith("SMUI-textfield-helper-text-")&&gt(I(),"SMUITextfieldHelperText:id",u),gt(I(),"SMUITextfieldHelperText:mount",p),p.init(),()=>{gt(I(),"SMUITextfieldHelperText:unmount",p),p.destroy()}));function A(b){return b in m?m[b]:I().classList.contains(b)}function w(b){m[b]||n(6,m[b]=!0,m)}function S(b){(!(b in m)||m[b])&&n(6,m[b]=!1,m)}function q(b){var O;return b in g?(O=g[b])!==null&&O!==void 0?O:null:I().getAttribute(b)}function k(b,O){g[b]!==O&&n(7,g[b]=O,g)}function _(b){(!(b in g)||g[b]!=null)&&n(7,g[b]=void 0,g)}function I(){return f}function U(b){de[b?"unshift":"push"](()=>{f=b,n(5,f)})}return t.$$set=b=>{e=x(x({},e),Ke(b)),n(10,r=ne(e,i)),"use"in b&&n(0,l=b.use),"class"in b&&n(1,c=b.class),"id"in b&&n(2,u=b.id),"persistent"in b&&n(3,h=b.persistent),"validationMsg"in b&&n(4,d=b.validationMsg),"$$scope"in b&&n(12,o=b.$$scope)},[l,c,u,h,d,f,m,g,v,a,r,I,o,s,U]}class Fj extends Qe{constructor(e){super();Xe(this,e,gO,pO,We,{use:0,class:1,id:2,persistent:3,validationMsg:4,getElement:11})}get getElement(){return this.$$.ctx[11]}}/**
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
 */var _O={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
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
 */var vO=function(t){qn(e,t);function e(n){var i=t.call(this,pt(pt({},e.defaultAdapter),n))||this;return i.shakeAnimationEndHandler=function(){i.handleShakeAnimationEnd()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return _O},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(n){var i=e.cssClasses.LABEL_SHAKE;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.float=function(n){var i=e.cssClasses,r=i.LABEL_FLOAT_ABOVE,s=i.LABEL_SHAKE;n?this.adapter.addClass(r):(this.adapter.removeClass(r),this.adapter.removeClass(s))},e.prototype.setRequired=function(n){var i=e.cssClasses.LABEL_REQUIRED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleShakeAnimationEnd=function(){var n=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(n)},e}(Jn);/**
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
 */var Er={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
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
 */var yO=function(t){qn(e,t);function e(n){var i=t.call(this,pt(pt({},e.defaultAdapter),n))||this;return i.transitionEndHandler=function(r){i.handleTransitionEnd(r)},i}return Object.defineProperty(e,"cssClasses",{get:function(){return Er},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(Er.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(Er.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(n){this.adapter.setStyle("transform-origin",n+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(Er.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(n){var i=this.adapter.hasClass(Er.LINE_RIPPLE_DEACTIVATING);n.propertyName==="opacity"&&i&&(this.adapter.removeClass(Er.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(Er.LINE_RIPPLE_DEACTIVATING))},e}(Jn);/**
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
 */var bO={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},xv={NOTCH_ELEMENT_PADDING:8},EO={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
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
 */var IO=function(t){qn(e,t);function e(n){return t.call(this,pt(pt({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"strings",{get:function(){return bO},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return EO},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return xv},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(n){var i=e.cssClasses.OUTLINE_NOTCHED;n>0&&(n+=xv.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(n),this.adapter.addClass(i)},e.prototype.closeNotch=function(){var n=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(n),this.adapter.removeNotchWidthProperty()},e}(Jn);/**
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
 */var Rd={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},wO={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},Uv={LABEL_SCALE:.75},TO=["pattern","min","max","required","step","minlength","maxlength"],CO=["color","date","datetime-local","month","range","time","week"];/**
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
 */var jv=["mousedown","touchstart"],Vv=["click","keydown"],SO=function(t){qn(e,t);function e(n,i){i===void 0&&(i={});var r=t.call(this,pt(pt({},e.defaultAdapter),n))||this;return r.isFocused=!1,r.receivedUserInput=!1,r.valid=!0,r.useNativeValidation=!0,r.validateOnValueChange=!0,r.helperText=i.helperText,r.characterCounter=i.characterCounter,r.leadingIcon=i.leadingIcon,r.trailingIcon=i.trailingIcon,r.inputFocusHandler=function(){r.activateFocus()},r.inputBlurHandler=function(){r.deactivateFocus()},r.inputInputHandler=function(){r.handleInput()},r.setPointerXOffset=function(s){r.setTransformOrigin(s)},r.textFieldInteractionHandler=function(){r.handleTextFieldInteraction()},r.validationAttributeChangeHandler=function(s){r.handleValidationAttributeChange(s)},r}return Object.defineProperty(e,"cssClasses",{get:function(){return wO},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Rd},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Uv},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var n=this.getNativeInput().type;return CO.indexOf(n)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n,i,r,s;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var o=ti(jv),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.registerInputInteractionHandler(l,this.setPointerXOffset)}}catch(h){n={error:h}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}try{for(var c=ti(Vv),u=c.next();!u.done;u=c.next()){var l=u.value;this.adapter.registerTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(h){r={error:h}}finally{try{u&&!u.done&&(s=c.return)&&s.call(c)}finally{if(r)throw r.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var n,i,r,s;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var o=ti(jv),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.deregisterInputInteractionHandler(l,this.setPointerXOffset)}}catch(h){n={error:h}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}try{for(var c=ti(Vv),u=c.next();!u.done;u=c.next()){var l=u.value;this.adapter.deregisterTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(h){r={error:h}}finally{try{u&&!u.done&&(s=c.return)&&s.call(c)}finally{if(r)throw r.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var n=this.adapter.getNativeInput();n&&n.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(n){var i=this;n.some(function(r){return TO.indexOf(r)>-1?(i.styleValidity(!0),i.adapter.setLabelRequired(i.getNativeInput().required),!0):!1}),n.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(n){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(n){var i=this.adapter.getLabelWidth()*Uv.LABEL_SCALE;this.adapter.notchOutline(i)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(n){if(!(this.isDisabled()||this.adapter.hasOutline())){var i=n.touches,r=i?i[0]:n,s=r.target.getBoundingClientRect(),o=r.clientX-s.left;this.adapter.setLineRippleTransformOrigin(o)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var n=this.isValid();this.styleValidity(n),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(n){if(this.getValue()!==n&&(this.getNativeInput().value=n),this.setcharacterCounter(n.length),this.validateOnValueChange){var i=this.isValid();this.styleValidity(i)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(n){this.valid=n,this.styleValidity(n);var i=!n&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(i)},e.prototype.setValidateOnValueChange=function(n){this.validateOnValueChange=n},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(n){this.useNativeValidation=n},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(n){this.getNativeInput().disabled=n,this.styleDisabled(n)},e.prototype.setHelperTextContent=function(n){this.helperText&&this.helperText.setContent(n)},e.prototype.setLeadingIconAriaLabel=function(n){this.leadingIcon&&this.leadingIcon.setAriaLabel(n)},e.prototype.setLeadingIconContent=function(n){this.leadingIcon&&this.leadingIcon.setContent(n)},e.prototype.setTrailingIconAriaLabel=function(n){this.trailingIcon&&this.trailingIcon.setAriaLabel(n)},e.prototype.setTrailingIconContent=function(n){this.trailingIcon&&this.trailingIcon.setContent(n)},e.prototype.setcharacterCounter=function(n){if(!!this.characterCounter){var i=this.getNativeInput().maxLength;if(i===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(n,i)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(n){var i=e.cssClasses.INVALID;if(n?this.adapter.removeClass(i):this.adapter.addClass(i),this.helperText){this.helperText.setValidity(n);var r=this.helperText.isValidation();if(!r)return;var s=this.helperText.isVisible(),o=this.helperText.getId();s&&o?this.adapter.setInputAttr(Rd.ARIA_DESCRIBEDBY,o):this.adapter.removeInputAttr(Rd.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(n){var i=e.cssClasses.FOCUSED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.styleDisabled=function(n){var i=e.cssClasses,r=i.DISABLED,s=i.INVALID;n?(this.adapter.addClass(r),this.adapter.removeClass(s)):this.adapter.removeClass(r),this.leadingIcon&&this.leadingIcon.setDisabled(n),this.trailingIcon&&this.trailingIcon.setDisabled(n)},e.prototype.styleFloating=function(n){var i=e.cssClasses.LABEL_FLOATING;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.getNativeInput=function(){var n=this.adapter?this.adapter.getNativeInput():null;return n||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(Jn);function AO(t){let e,n,i,r,s,o,a,l;const c=t[22].default,u=Ee(c,t,t[21],null);let h=[{class:n=Ce(st({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1]},t[8]))},{style:i=Object.entries(t[9]).map(Hv).concat([t[4]]).join(" ")},{for:r=t[5]||(t[11]?t[11].id:void 0)},t[12]],d={};for(let f=0;f<h.length;f+=1)d=x(d,h[f]);return{c(){e=Le("label"),u&&u.c(),this.h()},l(f){e=De(f,"LABEL",{class:!0,style:!0,for:!0});var p=Pe(e);u&&u.l(p),p.forEach(H),this.h()},h(){ae(e,d)},m(f,p){ie(f,e,p),u&&u.m(e,null),t[24](e),o=!0,a||(l=[se(s=_t.call(null,e,t[2])),se(t[10].call(null,e))],a=!0)},p(f,p){u&&u.p&&(!o||p&2097152)&&we(u,c,f,f[21],o?Ie(c,f[21],p,null):Te(f[21]),null),ae(e,d=Re(h,[(!o||p&267&&n!==(n=Ce(st({[f[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":f[0],"mdc-floating-label--required":f[1]},f[8]))))&&{class:n},(!o||p&528&&i!==(i=Object.entries(f[9]).map(Hv).concat([f[4]]).join(" ")))&&{style:i},(!o||p&32&&r!==(r=f[5]||(f[11]?f[11].id:void 0)))&&{for:r},p&4096&&f[12]])),s&&ze(s.update)&&p&4&&s.update.call(null,f[2])},i(f){o||(F(u,f),o=!0)},o(f){j(u,f),o=!1},d(f){f&&H(e),u&&u.d(f),t[24](null),a=!1,qe(l)}}}function kO(t){let e,n,i,r,s,o,a;const l=t[22].default,c=Ee(l,t,t[21],null);let u=[{class:n=Ce(st({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1]},t[8]))},{style:i=Object.entries(t[9]).map(Bv).concat([t[4]]).join(" ")},t[12]],h={};for(let d=0;d<u.length;d+=1)h=x(h,u[d]);return{c(){e=Le("span"),c&&c.c(),this.h()},l(d){e=De(d,"SPAN",{class:!0,style:!0});var f=Pe(e);c&&c.l(f),f.forEach(H),this.h()},h(){ae(e,h)},m(d,f){ie(d,e,f),c&&c.m(e,null),t[23](e),s=!0,o||(a=[se(r=_t.call(null,e,t[2])),se(t[10].call(null,e))],o=!0)},p(d,f){c&&c.p&&(!s||f&2097152)&&we(c,l,d,d[21],s?Ie(l,d[21],f,null):Te(d[21]),null),ae(e,h=Re(u,[(!s||f&267&&n!==(n=Ce(st({[d[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":d[0],"mdc-floating-label--required":d[1]},d[8]))))&&{class:n},(!s||f&528&&i!==(i=Object.entries(d[9]).map(Bv).concat([d[4]]).join(" ")))&&{style:i},f&4096&&d[12]])),r&&ze(r.update)&&f&4&&r.update.call(null,d[2])},i(d){s||(F(c,d),s=!0)},o(d){j(c,d),s=!1},d(d){d&&H(e),c&&c.d(d),t[23](null),o=!1,qe(a)}}}function RO(t){let e,n,i,r;const s=[kO,AO],o=[];function a(l,c){return l[6]?0:1}return e=a(t),n=o[e]=s[e](t),{c(){n.c(),i=At()},l(l){n.l(l),i=At()},m(l,c){o[e].m(l,c),ie(l,i,c),r=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(tn(),j(o[u],1,1,()=>{o[u]=null}),nn(),n=o[e],n?n.p(l,c):(n=o[e]=s[e](l),n.c()),F(n,1),n.m(i.parentNode,i))},i(l){r||(F(n),r=!0)},o(l){j(n),r=!1},d(l){o[e].d(l),l&&H(i)}}}const Bv=([t,e])=>`${t}: ${e};`,Hv=([t,e])=>`${t}: ${e};`;function OO(t,e,n){const i=["use","class","style","for","floatAbove","required","wrapped","shake","float","setRequired","getWidth","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e;var a;const l=tt(Me());let{use:c=[]}=e,{class:u=""}=e,{style:h=""}=e,{for:d=void 0}=e,{floatAbove:f=!1}=e,{required:p=!1}=e,{wrapped:m=!1}=e,g,v,A={},w={},S=(a=bn("SMUI:generic:input:props"))!==null&&a!==void 0?a:{},q=f,k=p;Un(()=>{n(18,v=new vO({addClass:_,removeClass:I,getWidth:()=>{var z,V;const K=R(),fe=K.cloneNode(!0);(z=K.parentNode)===null||z===void 0||z.appendChild(fe),fe.classList.add("smui-floating-label--remove-transition"),fe.classList.add("smui-floating-label--force-size"),fe.classList.remove("mdc-floating-label--float-above");const He=fe.scrollWidth;return(V=K.parentNode)===null||V===void 0||V.removeChild(fe),He},registerInteractionHandler:(z,V)=>R().addEventListener(z,V),deregisterInteractionHandler:(z,V)=>R().removeEventListener(z,V)}));const C={get element(){return R()},addStyle:U,removeStyle:b};return gt(g,"SMUIFloatingLabel:mount",C),v.init(),()=>{gt(g,"SMUIFloatingLabel:unmount",C),v.destroy()}});function _(C){A[C]||n(8,A[C]=!0,A)}function I(C){(!(C in A)||A[C])&&n(8,A[C]=!1,A)}function U(C,z){w[C]!=z&&(z===""||z==null?(delete w[C],n(9,w)):n(9,w[C]=z,w))}function b(C){C in w&&(delete w[C],n(9,w))}function O(C){v.shake(C)}function Z(C){n(0,f=C)}function y(C){n(1,p=C)}function M(){return v.getWidth()}function R(){return g}function G(C){de[C?"unshift":"push"](()=>{g=C,n(7,g)})}function T(C){de[C?"unshift":"push"](()=>{g=C,n(7,g)})}return t.$$set=C=>{e=x(x({},e),Ke(C)),n(12,r=ne(e,i)),"use"in C&&n(2,c=C.use),"class"in C&&n(3,u=C.class),"style"in C&&n(4,h=C.style),"for"in C&&n(5,d=C.for),"floatAbove"in C&&n(0,f=C.floatAbove),"required"in C&&n(1,p=C.required),"wrapped"in C&&n(6,m=C.wrapped),"$$scope"in C&&n(21,o=C.$$scope)},t.$$.update=()=>{t.$$.dirty&786433&&v&&q!==f&&(n(19,q=f),v.float(f)),t.$$.dirty&1310722&&v&&k!==p&&(n(20,k=p),v.setRequired(p))},[f,p,c,u,h,d,m,g,A,w,l,S,r,O,Z,y,M,R,v,q,k,o,s,G,T]}class qv extends Qe{constructor(e){super();Xe(this,e,OO,RO,We,{use:2,class:3,style:4,for:5,floatAbove:0,required:1,wrapped:6,shake:13,float:14,setRequired:15,getWidth:16,getElement:17})}get shake(){return this.$$.ctx[13]}get float(){return this.$$.ctx[14]}get setRequired(){return this.$$.ctx[15]}get getWidth(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}function LO(t){let e,n,i,r,s,o,a=[{class:n=Ce(st({[t[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":t[3]},t[5]))},{style:i=Object.entries(t[6]).map(Wv).concat([t[2]]).join(" ")},t[8]],l={};for(let c=0;c<a.length;c+=1)l=x(l,a[c]);return{c(){e=Le("div"),this.h()},l(c){e=De(c,"DIV",{class:!0,style:!0}),Pe(e).forEach(H),this.h()},h(){ae(e,l)},m(c,u){ie(c,e,u),t[13](e),s||(o=[se(r=_t.call(null,e,t[0])),se(t[7].call(null,e))],s=!0)},p(c,[u]){ae(e,l=Re(a,[u&42&&n!==(n=Ce(st({[c[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":c[3]},c[5])))&&{class:n},u&68&&i!==(i=Object.entries(c[6]).map(Wv).concat([c[2]]).join(" "))&&{style:i},u&256&&c[8]])),r&&ze(r.update)&&u&1&&r.update.call(null,c[0])},i:hn,o:hn,d(c){c&&H(e),t[13](null),s=!1,qe(o)}}}const Wv=([t,e])=>`${t}: ${e};`;function MO(t,e,n){const i=["use","class","style","active","activate","deactivate","setRippleCenter","getElement"];let r=ne(e,i);const s=tt(Me());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{active:c=!1}=e,u,h,d={},f={};Un(()=>(h=new yO({addClass:m,removeClass:g,hasClass:p,setStyle:v,registerEventHandler:(_,I)=>q().addEventListener(_,I),deregisterEventHandler:(_,I)=>q().removeEventListener(_,I)}),h.init(),()=>{h.destroy()}));function p(_){return _ in d?d[_]:q().classList.contains(_)}function m(_){d[_]||n(5,d[_]=!0,d)}function g(_){(!(_ in d)||d[_])&&n(5,d[_]=!1,d)}function v(_,I){f[_]!=I&&(I===""||I==null?(delete f[_],n(6,f)):n(6,f[_]=I,f))}function A(){h.activate()}function w(){h.deactivate()}function S(_){h.setRippleCenter(_)}function q(){return u}function k(_){de[_?"unshift":"push"](()=>{u=_,n(4,u)})}return t.$$set=_=>{e=x(x({},e),Ke(_)),n(8,r=ne(e,i)),"use"in _&&n(0,o=_.use),"class"in _&&n(1,a=_.class),"style"in _&&n(2,l=_.style),"active"in _&&n(3,c=_.active)},[o,a,l,c,u,d,f,s,r,A,w,S,q,k]}class NO extends Qe{constructor(e){super();Xe(this,e,MO,LO,We,{use:0,class:1,style:2,active:3,activate:9,deactivate:10,setRippleCenter:11,getElement:12})}get activate(){return this.$$.ctx[9]}get deactivate(){return this.$$.ctx[10]}get setRippleCenter(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function Gv(t){let e,n,i;const r=t[14].default,s=Ee(r,t,t[13],null);return{c(){e=Le("div"),s&&s.c(),this.h()},l(o){e=De(o,"DIV",{class:!0,style:!0});var a=Pe(e);s&&s.l(a),a.forEach(H),this.h()},h(){xn(e,"class","mdc-notched-outline__notch"),xn(e,"style",n=Object.entries(t[7]).map(zv).join(" "))},m(o,a){ie(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&8192)&&we(s,r,o,o[13],i?Ie(r,o[13],a,null):Te(o[13]),null),(!i||a&128&&n!==(n=Object.entries(o[7]).map(zv).join(" ")))&&xn(e,"style",n)},i(o){i||(F(s,o),i=!0)},o(o){j(s,o),i=!1},d(o){o&&H(e),s&&s.d(o)}}}function PO(t){let e,n,i,r,s,o,a,l,c,u,h=!t[3]&&Gv(t),d=[{class:o=Ce(st({[t[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":t[2],"mdc-notched-outline--no-label":t[3]},t[6]))},t[9]],f={};for(let p=0;p<d.length;p+=1)f=x(f,d[p]);return{c(){e=Le("div"),n=Le("div"),i=bt(),h&&h.c(),r=bt(),s=Le("div"),this.h()},l(p){e=De(p,"DIV",{class:!0});var m=Pe(e);n=De(m,"DIV",{class:!0}),Pe(n).forEach(H),i=Et(m),h&&h.l(m),r=Et(m),s=De(m,"DIV",{class:!0}),Pe(s).forEach(H),m.forEach(H),this.h()},h(){xn(n,"class","mdc-notched-outline__leading"),xn(s,"class","mdc-notched-outline__trailing"),ae(e,f)},m(p,m){ie(p,e,m),en(e,n),en(e,i),h&&h.m(e,null),en(e,r),en(e,s),t[15](e),l=!0,c||(u=[se(a=_t.call(null,e,t[0])),se(t[8].call(null,e)),Ze(e,"SMUIFloatingLabel:mount",t[16]),Ze(e,"SMUIFloatingLabel:unmount",t[17])],c=!0)},p(p,[m]){p[3]?h&&(tn(),j(h,1,1,()=>{h=null}),nn()):h?(h.p(p,m),m&8&&F(h,1)):(h=Gv(p),h.c(),F(h,1),h.m(e,r)),ae(e,f=Re(d,[(!l||m&78&&o!==(o=Ce(st({[p[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":p[2],"mdc-notched-outline--no-label":p[3]},p[6]))))&&{class:o},m&512&&p[9]])),a&&ze(a.update)&&m&1&&a.update.call(null,p[0])},i(p){l||(F(h),l=!0)},o(p){j(h),l=!1},d(p){p&&H(e),h&&h.d(),t[15](null),c=!1,qe(u)}}}const zv=([t,e])=>`${t}: ${e};`;function DO(t,e,n){const i=["use","class","notched","noLabel","notch","closeNotch","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e;const a=tt(Me());let{use:l=[]}=e,{class:c=""}=e,{notched:u=!1}=e,{noLabel:h=!1}=e,d,f,p,m={},g={};Un(()=>(f=new IO({addClass:v,removeClass:A,setNotchWidthProperty:O=>w("width",O+"px"),removeNotchWidthProperty:()=>S("width")}),f.init(),()=>{f.destroy()}));function v(O){m[O]||n(6,m[O]=!0,m)}function A(O){(!(O in m)||m[O])&&n(6,m[O]=!1,m)}function w(O,Z){g[O]!=Z&&(Z===""||Z==null?(delete g[O],n(7,g)):n(7,g[O]=Z,g))}function S(O){O in g&&(delete g[O],n(7,g))}function q(O){f.notch(O)}function k(){f.closeNotch()}function _(){return d}function I(O){de[O?"unshift":"push"](()=>{d=O,n(5,d)})}const U=O=>n(4,p=O.detail),b=()=>n(4,p=void 0);return t.$$set=O=>{e=x(x({},e),Ke(O)),n(9,r=ne(e,i)),"use"in O&&n(0,l=O.use),"class"in O&&n(1,c=O.class),"notched"in O&&n(2,u=O.notched),"noLabel"in O&&n(3,h=O.noLabel),"$$scope"in O&&n(13,o=O.$$scope)},t.$$.update=()=>{t.$$.dirty&16&&(p?(p.addStyle("transition-duration","0s"),v("mdc-notched-outline--upgraded"),requestAnimationFrame(()=>{p&&p.removeStyle("transition-duration")})):A("mdc-notched-outline--upgraded"))},[l,c,u,h,p,d,m,g,a,r,q,k,_,o,s,I,U,b]}class FO extends Qe{constructor(e){super();Xe(this,e,DO,PO,We,{use:0,class:1,notched:2,noLabel:3,notch:10,closeNotch:11,getElement:12})}get notch(){return this.$$.ctx[10]}get closeNotch(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function xO(t){let e;const n=t[10].default,i=Ee(n,t,t[12],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&4096)&&we(i,n,r,r[12],e?Ie(n,r[12],s,null):Te(r[12]),null)},i(r){e||(F(i,r),e=!0)},o(r){j(i,r),e=!1},d(r){i&&i.d(r)}}}function UO(t){let e,n,i;const r=[{use:[t[7],...t[0]]},{class:Ce(st({[t[1]]:!0,[t[5]]:!0},t[4]))},t[6],t[8]];var s=t[2];function o(a){let l={$$slots:{default:[xO]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=x(l,r[c]);return{props:l}}return s&&(e=new s(o(t)),t[11](e)),{c(){e&&yt(e.$$.fragment),n=At()},l(a){e&&xt(e.$$.fragment,a),n=At()},m(a,l){e&&dt(e,a,l),ie(a,n,l),i=!0},p(a,[l]){const c=l&499?Re(r,[l&129&&{use:[a[7],...a[0]]},l&50&&{class:Ce(st({[a[1]]:!0,[a[5]]:!0},a[4]))},l&64&&ht(a[6]),l&256&&ht(a[8])]):{};if(l&4096&&(c.$$scope={dirty:l,ctx:a}),s!==(s=a[2])){if(e){tn();const u=e;j(u.$$.fragment,1,0,()=>{ft(u,1)}),nn()}s?(e=new s(o(a)),a[11](e),yt(e.$$.fragment),F(e.$$.fragment,1),dt(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(a){i||(e&&F(e.$$.fragment,a),i=!0)},o(a){e&&j(e.$$.fragment,a),i=!1},d(a){t[11](null),a&&H(n),e&&ft(e,a)}}}const Ui={component:Nv,class:"",classMap:{},contexts:{},props:{}};function jO(t,e,n){const i=["use","class","component","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e,{class:l=""}=e,c;const u=Ui.class,h={},d=[],f=Ui.contexts,p=Ui.props;let{component:m=Ui.component}=e;Object.entries(Ui.classMap).forEach(([w,S])=>{const q=bn(S);q&&"subscribe"in q&&d.push(q.subscribe(k=>{n(4,h[w]=k,h)}))});const g=tt(Me());for(let w in f)f.hasOwnProperty(w)&&Mt(w,f[w]);Ji(()=>{for(const w of d)w()});function v(){return c.getElement()}function A(w){de[w?"unshift":"push"](()=>{c=w,n(3,c)})}return t.$$set=w=>{e=x(x({},e),Ke(w)),n(8,r=ne(e,i)),"use"in w&&n(0,a=w.use),"class"in w&&n(1,l=w.class),"component"in w&&n(2,m=w.component),"$$scope"in w&&n(12,o=w.$$scope)},[a,l,m,c,h,u,p,g,r,v,s,A,o]}class VO extends Qe{constructor(e){super();Xe(this,e,jO,UO,We,{use:0,class:1,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const Kv=Object.assign({},Ui);function Pt(t){return new Proxy(VO,{construct:function(e,n){return Object.assign(Ui,Kv,t),new e(...n)},get:function(e,n){return Object.assign(Ui,Kv,t),e[n]}})}var BO=Pt({class:"mdc-text-field-helper-line",component:hi}),HO=Pt({class:"mdc-text-field__affix mdc-text-field__affix--prefix",component:br}),qO=Pt({class:"mdc-text-field__affix mdc-text-field__affix--suffix",component:br});function WO(t){let e,n,i,r,s,o=[{class:n=Ce({[t[1]]:!0,"mdc-text-field__input":!0})},{type:t[2]},{placeholder:t[3]},t[4],t[6],t[10]],a={};for(let l=0;l<o.length;l+=1)a=x(a,o[l]);return{c(){e=Le("input"),this.h()},l(l){e=De(l,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){ae(e,a)},m(l,c){ie(l,e,c),e.autofocus&&e.focus(),t[25](e),r||(s=[se(i=_t.call(null,e,t[0])),se(t[7].call(null,e)),Ze(e,"input",t[26]),Ze(e,"change",t[9]),Ze(e,"blur",t[23]),Ze(e,"focus",t[24])],r=!0)},p(l,[c]){ae(e,a=Re(o,[c&2&&n!==(n=Ce({[l[1]]:!0,"mdc-text-field__input":!0}))&&{class:n},c&4&&{type:l[2]},c&8&&{placeholder:l[3]},c&16&&l[4],c&64&&l[6],c&1024&&l[10]])),i&&ze(i.update)&&c&1&&i.update.call(null,l[0])},i:hn,o:hn,d(l){l&&H(e),t[25](null),r=!1,qe(s)}}}function GO(t){if(t===""){const e=new Number(Number.NaN);return e.length=0,e}return+t}function zO(t,e,n){const i=["use","class","type","placeholder","value","files","dirty","invalid","updateInvalid","emptyValueNull","emptyValueUndefined","getAttr","addAttr","removeAttr","focus","getElement"];let r=ne(e,i);const s=tt(Me());let{use:o=[]}=e,{class:a=""}=e,{type:l="text"}=e,{placeholder:c=" "}=e,{value:u=""}=e,{files:h=null}=e,{dirty:d=!1}=e,{invalid:f=!1}=e,{updateInvalid:p=!0}=e,{emptyValueNull:m=u===null}=e,{emptyValueUndefined:g=u===void 0}=e,v,A={},w={};Un(()=>{p&&n(14,f=v.matches(":invalid"))});function S(R){if(l==="file"){n(12,h=R.currentTarget.files);return}if(R.currentTarget.value===""&&m){n(11,u=null);return}if(R.currentTarget.value===""&&g){n(11,u=void 0);return}switch(l){case"number":case"range":n(11,u=GO(R.currentTarget.value));break;default:n(11,u=R.currentTarget.value);break}}function q(R){(l==="file"||l==="range")&&S(R),n(13,d=!0),p&&n(14,f=v.matches(":invalid"))}function k(R){var G;return R in A?(G=A[R])!==null&&G!==void 0?G:null:b().getAttribute(R)}function _(R,G){A[R]!==G&&n(6,A[R]=G,A)}function I(R){(!(R in A)||A[R]!=null)&&n(6,A[R]=void 0,A)}function U(){b().focus()}function b(){return v}function O(R){Xs.call(this,t,R)}function Z(R){Xs.call(this,t,R)}function y(R){de[R?"unshift":"push"](()=>{v=R,n(5,v)})}const M=R=>l!=="file"&&S(R);return t.$$set=R=>{e=x(x({},e),Ke(R)),n(10,r=ne(e,i)),"use"in R&&n(0,o=R.use),"class"in R&&n(1,a=R.class),"type"in R&&n(2,l=R.type),"placeholder"in R&&n(3,c=R.placeholder),"value"in R&&n(11,u=R.value),"files"in R&&n(12,h=R.files),"dirty"in R&&n(13,d=R.dirty),"invalid"in R&&n(14,f=R.invalid),"updateInvalid"in R&&n(15,p=R.updateInvalid),"emptyValueNull"in R&&n(16,m=R.emptyValueNull),"emptyValueUndefined"in R&&n(17,g=R.emptyValueUndefined)},t.$$.update=()=>{t.$$.dirty&2068&&(l==="file"?(delete w.value,n(4,w),n(2,l),n(11,u)):n(4,w.value=u==null?"":u,w))},[o,a,l,c,w,v,A,s,S,q,r,u,h,d,f,p,m,g,k,_,I,U,b,O,Z,y,M]}class KO extends Qe{constructor(e){super();Xe(this,e,zO,WO,We,{use:0,class:1,type:2,placeholder:3,value:11,files:12,dirty:13,invalid:14,updateInvalid:15,emptyValueNull:16,emptyValueUndefined:17,getAttr:18,addAttr:19,removeAttr:20,focus:21,getElement:22})}get getAttr(){return this.$$.ctx[18]}get addAttr(){return this.$$.ctx[19]}get removeAttr(){return this.$$.ctx[20]}get focus(){return this.$$.ctx[21]}get getElement(){return this.$$.ctx[22]}}function XO(t){let e,n,i,r,s,o,a=[{class:n=Ce({[t[2]]:!0,"mdc-text-field__input":!0})},{style:i=`${t[4]?"":"resize: none; "}${t[3]}`},t[6],t[9]],l={};for(let c=0;c<a.length;c+=1)l=x(l,a[c]);return{c(){e=Le("textarea"),this.h()},l(c){e=De(c,"TEXTAREA",{class:!0,style:!0}),Pe(e).forEach(H),this.h()},h(){ae(e,l)},m(c,u){ie(c,e,u),e.autofocus&&e.focus(),t[20](e),bp(e,t[0]),s||(o=[se(r=_t.call(null,e,t[1])),se(t[7].call(null,e)),Ze(e,"change",t[8]),Ze(e,"blur",t[18]),Ze(e,"focus",t[19]),Ze(e,"input",t[21])],s=!0)},p(c,[u]){ae(e,l=Re(a,[u&4&&n!==(n=Ce({[c[2]]:!0,"mdc-text-field__input":!0}))&&{class:n},u&24&&i!==(i=`${c[4]?"":"resize: none; "}${c[3]}`)&&{style:i},u&64&&c[6],u&512&&c[9]])),r&&ze(r.update)&&u&2&&r.update.call(null,c[1]),u&1&&bp(e,c[0])},i:hn,o:hn,d(c){c&&H(e),t[20](null),s=!1,qe(o)}}}function QO(t,e,n){const i=["use","class","style","value","dirty","invalid","updateInvalid","resizable","getAttr","addAttr","removeAttr","focus","getElement"];let r=ne(e,i);const s=tt(Me());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{value:c=""}=e,{dirty:u=!1}=e,{invalid:h=!1}=e,{updateInvalid:d=!0}=e,{resizable:f=!0}=e,p,m={};Un(()=>{d&&n(11,h=p.matches(":invalid"))});function g(){n(10,u=!0),d&&n(11,h=p.matches(":invalid"))}function v(b){var O;return b in m?(O=m[b])!==null&&O!==void 0?O:null:q().getAttribute(b)}function A(b,O){m[b]!==O&&n(6,m[b]=O,m)}function w(b){(!(b in m)||m[b]!=null)&&n(6,m[b]=void 0,m)}function S(){q().focus()}function q(){return p}function k(b){Xs.call(this,t,b)}function _(b){Xs.call(this,t,b)}function I(b){de[b?"unshift":"push"](()=>{p=b,n(5,p)})}function U(){c=this.value,n(0,c)}return t.$$set=b=>{e=x(x({},e),Ke(b)),n(9,r=ne(e,i)),"use"in b&&n(1,o=b.use),"class"in b&&n(2,a=b.class),"style"in b&&n(3,l=b.style),"value"in b&&n(0,c=b.value),"dirty"in b&&n(10,u=b.dirty),"invalid"in b&&n(11,h=b.invalid),"updateInvalid"in b&&n(12,d=b.updateInvalid),"resizable"in b&&n(4,f=b.resizable)},[c,o,a,l,f,p,m,s,g,r,u,h,d,v,A,w,S,q,k,_,I,U]}class YO extends Qe{constructor(e){super();Xe(this,e,QO,XO,We,{use:1,class:2,style:3,value:0,dirty:10,invalid:11,updateInvalid:12,resizable:4,getAttr:13,addAttr:14,removeAttr:15,focus:16,getElement:17})}get getAttr(){return this.$$.ctx[13]}get addAttr(){return this.$$.ctx[14]}get removeAttr(){return this.$$.ctx[15]}get focus(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}const JO=t=>({}),Xv=t=>({}),ZO=t=>({}),Qv=t=>({}),$O=t=>({}),Yv=t=>({}),eL=t=>({}),Jv=t=>({}),tL=t=>({}),Zv=t=>({}),nL=t=>({}),$v=t=>({}),iL=t=>({}),ey=t=>({}),rL=t=>({}),ty=t=>({}),sL=t=>({}),ny=t=>({}),oL=t=>({}),iy=t=>({}),aL=t=>({}),ry=t=>({}),lL=t=>({}),sy=t=>({});function cL(t){let e,n,i,r,s,o,a,l,c,u,h,d,f,p;const m=t[50].label,g=Ee(m,t,t[89],Zv);i=new ac({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[hL]},$$scope:{ctx:t}}});const v=t[50].default,A=Ee(v,t,t[89],null);o=new ac({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[dL]},$$scope:{ctx:t}}});const w=t[50].ripple,S=Ee(w,t,t[89],Qv);let q=[{class:l=Ce(st({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||!t[41].label,"mdc-text-field--with-leading-icon":t[41].leadingIcon,"mdc-text-field--with-trailing-icon":t[41].trailingIcon,"mdc-text-field--invalid":t[1]},t[25]))},{style:c=Object.entries(t[26]).map(gy).concat([t[10]]).join(" ")},ic(t[42],["input$","label$","ripple$","outline$","helperLine$"])],k={};for(let _=0;_<q.length;_+=1)k=x(k,q[_]);return{c(){e=Le("div"),g&&g.c(),n=bt(),yt(i.$$.fragment),r=bt(),A&&A.c(),s=bt(),yt(o.$$.fragment),a=bt(),S&&S.c(),this.h()},l(_){e=De(_,"DIV",{class:!0,style:!0});var I=Pe(e);g&&g.l(I),n=Et(I),xt(i.$$.fragment,I),r=Et(I),A&&A.l(I),s=Et(I),xt(o.$$.fragment,I),a=Et(I),S&&S.l(I),I.forEach(H),this.h()},h(){ae(e,k)},m(_,I){ie(_,e,I),g&&g.m(e,null),en(e,n),dt(i,e,null),en(e,r),A&&A.m(e,null),en(e,s),dt(o,e,null),en(e,a),S&&S.m(e,null),t[79](e),d=!0,f||(p=[se(u=vs.call(null,e,{ripple:t[11],unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40]})),se(h=_t.call(null,e,t[8])),se(t[34].call(null,e)),Ze(e,"SMUITextfieldLeadingIcon:mount",t[80]),Ze(e,"SMUITextfieldLeadingIcon:unmount",t[81]),Ze(e,"SMUITextfieldTrailingIcon:mount",t[82]),Ze(e,"SMUITextfieldTrailingIcon:unmount",t[83])],f=!0)},p(_,I){g&&g.p&&(!d||I[2]&134217728)&&we(g,m,_,_[89],d?Ie(m,_[89],I,tL):Te(_[89]),Zv);const U={};I[2]&134217728&&(U.$$scope={dirty:I,ctx:_}),i.$set(U),A&&A.p&&(!d||I[2]&134217728)&&we(A,v,_,_[89],d?Ie(v,_[89],I,null):Te(_[89]),null);const b={};I[2]&134217728&&(b.$$scope={dirty:I,ctx:_}),o.$set(b),S&&S.p&&(!d||I[2]&134217728)&&we(S,w,_,_[89],d?Ie(w,_[89],I,ZO):Te(_[89]),Qv),ae(e,k=Re(q,[(!d||I[0]&33673730|I[1]&1024&&l!==(l=Ce(st({[_[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":_[12],"mdc-text-field--textarea":_[14],"mdc-text-field--filled":_[15]==="filled","mdc-text-field--outlined":_[15]==="outlined","smui-text-field--standard":_[15]==="standard"&&!_[14],"mdc-text-field--no-label":_[16]||!_[41].label,"mdc-text-field--with-leading-icon":_[41].leadingIcon,"mdc-text-field--with-trailing-icon":_[41].trailingIcon,"mdc-text-field--invalid":_[1]},_[25]))))&&{class:l},(!d||I[0]&67109888&&c!==(c=Object.entries(_[26]).map(gy).concat([_[10]]).join(" ")))&&{style:c},I[1]&2048&&ic(_[42],["input$","label$","ripple$","outline$","helperLine$"])])),u&&ze(u.update)&&I[0]&2048&&u.update.call(null,{ripple:_[11],unbounded:!1,addClass:_[38],removeClass:_[39],addStyle:_[40]}),h&&ze(h.update)&&I[0]&256&&h.update.call(null,_[8])},i(_){d||(F(g,_),F(i.$$.fragment,_),F(A,_),F(o.$$.fragment,_),F(S,_),d=!0)},o(_){j(g,_),j(i.$$.fragment,_),j(A,_),j(o.$$.fragment,_),j(S,_),d=!1},d(_){_&&H(e),g&&g.d(_),ft(i),A&&A.d(_),ft(o),S&&S.d(_),t[79](null),f=!1,qe(p)}}}function uL(t){let e,n,i,r,s,o,a,l,c,u,h,d,f,p,m,g,v,A,w=!t[14]&&t[15]!=="outlined"&&oy(t),S=(t[14]||t[15]==="outlined")&&cy(t);r=new ac({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[gL]},$$scope:{ctx:t}}});const q=t[50].default,k=Ee(q,t,t[89],null),_=[vL,_L],I=[];function U(y,M){return y[14]&&typeof y[0]=="string"?0:1}a=U(t),l=I[a]=_[a](t),u=new ac({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[EL]},$$scope:{ctx:t}}});let b=!t[14]&&t[15]!=="outlined"&&t[11]&&fy(t),O=[{class:d=Ce(st({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||t[17]==null&&!t[41].label,"mdc-text-field--label-floating":t[28]||t[0]!=null&&t[0]!=="","mdc-text-field--with-leading-icon":t[35](t[22])?t[41].leadingIcon:t[22],"mdc-text-field--with-trailing-icon":t[35](t[23])?t[41].trailingIcon:t[23],"mdc-text-field--with-internal-counter":t[14]&&t[41].internalCounter,"mdc-text-field--invalid":t[1]},t[25]))},{style:f=Object.entries(t[26]).map(my).concat([t[10]]).join(" ")},{for:void 0},ic(t[42],["input$","label$","ripple$","outline$","helperLine$"])],Z={};for(let y=0;y<O.length;y+=1)Z=x(Z,O[y]);return{c(){e=Le("label"),w&&w.c(),n=bt(),S&&S.c(),i=bt(),yt(r.$$.fragment),s=bt(),k&&k.c(),o=bt(),l.c(),c=bt(),yt(u.$$.fragment),h=bt(),b&&b.c(),this.h()},l(y){e=De(y,"LABEL",{class:!0,style:!0,for:!0});var M=Pe(e);w&&w.l(M),n=Et(M),S&&S.l(M),i=Et(M),xt(r.$$.fragment,M),s=Et(M),k&&k.l(M),o=Et(M),l.l(M),c=Et(M),xt(u.$$.fragment,M),h=Et(M),b&&b.l(M),M.forEach(H),this.h()},h(){ae(e,Z)},m(y,M){ie(y,e,M),w&&w.m(e,null),en(e,n),S&&S.m(e,null),en(e,i),dt(r,e,null),en(e,s),k&&k.m(e,null),en(e,o),I[a].m(e,null),en(e,c),dt(u,e,null),en(e,h),b&&b.m(e,null),t[72](e),g=!0,v||(A=[se(p=vs.call(null,e,{ripple:!t[14]&&t[15]==="filled",unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40],eventTarget:t[33],activeTarget:t[33],initPromise:t[37]})),se(m=_t.call(null,e,t[8])),se(t[34].call(null,e)),Ze(e,"SMUITextfieldLeadingIcon:mount",t[73]),Ze(e,"SMUITextfieldLeadingIcon:unmount",t[74]),Ze(e,"SMUITextfieldTrailingIcon:mount",t[75]),Ze(e,"SMUITextfieldTrailingIcon:unmount",t[76]),Ze(e,"SMUITextfieldCharacterCounter:mount",t[77]),Ze(e,"SMUITextfieldCharacterCounter:unmount",t[78])],v=!0)},p(y,M){!y[14]&&y[15]!=="outlined"?w?(w.p(y,M),M[0]&49152&&F(w,1)):(w=oy(y),w.c(),F(w,1),w.m(e,n)):w&&(tn(),j(w,1,1,()=>{w=null}),nn()),y[14]||y[15]==="outlined"?S?(S.p(y,M),M[0]&49152&&F(S,1)):(S=cy(y),S.c(),F(S,1),S.m(e,i)):S&&(tn(),j(S,1,1,()=>{S=null}),nn());const R={};M[2]&134217728&&(R.$$scope={dirty:M,ctx:y}),r.$set(R),k&&k.p&&(!g||M[2]&134217728)&&we(k,q,y,y[89],g?Ie(q,y[89],M,null):Te(y[89]),null);let G=a;a=U(y),a===G?I[a].p(y,M):(tn(),j(I[G],1,1,()=>{I[G]=null}),nn(),l=I[a],l?l.p(y,M):(l=I[a]=_[a](y),l.c()),F(l,1),l.m(e,c));const T={};M[2]&134217728&&(T.$$scope={dirty:M,ctx:y}),u.$set(T),!y[14]&&y[15]!=="outlined"&&y[11]?b?(b.p(y,M),M[0]&51200&&F(b,1)):(b=fy(y),b.c(),F(b,1),b.m(e,null)):b&&(tn(),j(b,1,1,()=>{b=null}),nn()),ae(e,Z=Re(O,[(!g||M[0]&314823171|M[1]&1024&&d!==(d=Ce(st({[y[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":y[12],"mdc-text-field--textarea":y[14],"mdc-text-field--filled":y[15]==="filled","mdc-text-field--outlined":y[15]==="outlined","smui-text-field--standard":y[15]==="standard"&&!y[14],"mdc-text-field--no-label":y[16]||y[17]==null&&!y[41].label,"mdc-text-field--label-floating":y[28]||y[0]!=null&&y[0]!=="","mdc-text-field--with-leading-icon":y[35](y[22])?y[41].leadingIcon:y[22],"mdc-text-field--with-trailing-icon":y[35](y[23])?y[41].trailingIcon:y[23],"mdc-text-field--with-internal-counter":y[14]&&y[41].internalCounter,"mdc-text-field--invalid":y[1]},y[25]))))&&{class:d},(!g||M[0]&67109888&&f!==(f=Object.entries(y[26]).map(my).concat([y[10]]).join(" ")))&&{style:f},{for:void 0},M[1]&2048&&ic(y[42],["input$","label$","ripple$","outline$","helperLine$"])])),p&&ze(p.update)&&M[0]&49152|M[1]&4&&p.update.call(null,{ripple:!y[14]&&y[15]==="filled",unbounded:!1,addClass:y[38],removeClass:y[39],addStyle:y[40],eventTarget:y[33],activeTarget:y[33],initPromise:y[37]}),m&&ze(m.update)&&M[0]&256&&m.update.call(null,y[8])},i(y){g||(F(w),F(S),F(r.$$.fragment,y),F(k,y),F(l),F(u.$$.fragment,y),F(b),g=!0)},o(y){j(w),j(S),j(r.$$.fragment,y),j(k,y),j(l),j(u.$$.fragment,y),j(b),g=!1},d(y){y&&H(e),w&&w.d(),S&&S.d(),ft(r),k&&k.d(y),I[a].d(),ft(u),b&&b.d(),t[72](null),v=!1,qe(A)}}}function hL(t){let e;const n=t[50].leadingIcon,i=Ee(n,t,t[89],Jv);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&we(i,n,r,r[89],e?Ie(n,r[89],s,eL):Te(r[89]),Jv)},i(r){e||(F(i,r),e=!0)},o(r){j(i,r),e=!1},d(r){i&&i.d(r)}}}function dL(t){let e;const n=t[50].trailingIcon,i=Ee(n,t,t[89],Yv);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&we(i,n,r,r[89],e?Ie(n,r[89],s,$O):Te(r[89]),Yv)},i(r){e||(F(i,r),e=!0)},o(r){j(i,r),e=!1},d(r){i&&i.d(r)}}}function oy(t){let e,n,i,r=t[15]==="filled"&&ay(),s=!t[16]&&(t[17]!=null||t[41].label)&&ly(t);return{c(){r&&r.c(),e=bt(),s&&s.c(),n=At()},l(o){r&&r.l(o),e=Et(o),s&&s.l(o),n=At()},m(o,a){r&&r.m(o,a),ie(o,e,a),s&&s.m(o,a),ie(o,n,a),i=!0},p(o,a){o[15]==="filled"?r||(r=ay(),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),!o[16]&&(o[17]!=null||o[41].label)?s?(s.p(o,a),a[0]&196608|a[1]&1024&&F(s,1)):(s=ly(o),s.c(),F(s,1),s.m(n.parentNode,n)):s&&(tn(),j(s,1,1,()=>{s=null}),nn())},i(o){i||(F(s),i=!0)},o(o){j(s),i=!1},d(o){r&&r.d(o),o&&H(e),s&&s.d(o),o&&H(n)}}}function ay(t){let e;return{c(){e=Le("span"),this.h()},l(n){e=De(n,"SPAN",{class:!0}),Pe(e).forEach(H),this.h()},h(){xn(e,"class","mdc-text-field__ripple")},m(n,i){ie(n,e,i)},d(n){n&&H(e)}}}function ly(t){let e,n;const i=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},Tn(t[42],"label$")];let r={$$slots:{default:[fL]},$$scope:{ctx:t}};for(let s=0;s<i.length;s+=1)r=x(r,i[s]);return e=new qv({props:r}),t[51](e),{c(){yt(e.$$.fragment)},l(s){xt(e.$$.fragment,s)},m(s,o){dt(e,s,o),n=!0},p(s,o){const a=o[0]&268443649|o[1]&2048?Re(i,[o[0]&268435457&&{floatAbove:s[28]||s[0]!=null&&s[0]!==""},o[0]&8192&&{required:s[13]},i[2],o[1]&2048&&ht(Tn(s[42],"label$"))]):{};o[0]&131072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(F(e.$$.fragment,s),n=!0)},o(s){j(e.$$.fragment,s),n=!1},d(s){t[51](null),ft(e,s)}}}function fL(t){let e=(t[17]==null?"":t[17])+"",n,i;const r=t[50].label,s=Ee(r,t,t[89],sy);return{c(){n=bi(e),s&&s.c()},l(o){n=Wr(o,e),s&&s.l(o)},m(o,a){ie(o,n,a),s&&s.m(o,a),i=!0},p(o,a){(!i||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&Ks(n,e),s&&s.p&&(!i||a[2]&134217728)&&we(s,r,o,o[89],i?Ie(r,o[89],a,lL):Te(o[89]),sy)},i(o){i||(F(s,o),i=!0)},o(o){j(s,o),i=!1},d(o){o&&H(n),s&&s.d(o)}}}function cy(t){let e,n;const i=[{noLabel:t[16]||t[17]==null&&!t[41].label},Tn(t[42],"outline$")];let r={$$slots:{default:[mL]},$$scope:{ctx:t}};for(let s=0;s<i.length;s+=1)r=x(r,i[s]);return e=new FO({props:r}),t[53](e),{c(){yt(e.$$.fragment)},l(s){xt(e.$$.fragment,s)},m(s,o){dt(e,s,o),n=!0},p(s,o){const a=o[0]&196608|o[1]&3072?Re(i,[o[0]&196608|o[1]&1024&&{noLabel:s[16]||s[17]==null&&!s[41].label},o[1]&2048&&ht(Tn(s[42],"outline$"))]):{};o[0]&268640289|o[1]&3072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(F(e.$$.fragment,s),n=!0)},o(s){j(e.$$.fragment,s),n=!1},d(s){t[53](null),ft(e,s)}}}function uy(t){let e,n;const i=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},Tn(t[42],"label$")];let r={$$slots:{default:[pL]},$$scope:{ctx:t}};for(let s=0;s<i.length;s+=1)r=x(r,i[s]);return e=new qv({props:r}),t[52](e),{c(){yt(e.$$.fragment)},l(s){xt(e.$$.fragment,s)},m(s,o){dt(e,s,o),n=!0},p(s,o){const a=o[0]&268443649|o[1]&2048?Re(i,[o[0]&268435457&&{floatAbove:s[28]||s[0]!=null&&s[0]!==""},o[0]&8192&&{required:s[13]},i[2],o[1]&2048&&ht(Tn(s[42],"label$"))]):{};o[0]&131072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(F(e.$$.fragment,s),n=!0)},o(s){j(e.$$.fragment,s),n=!1},d(s){t[52](null),ft(e,s)}}}function pL(t){let e=(t[17]==null?"":t[17])+"",n,i;const r=t[50].label,s=Ee(r,t,t[89],ry);return{c(){n=bi(e),s&&s.c()},l(o){n=Wr(o,e),s&&s.l(o)},m(o,a){ie(o,n,a),s&&s.m(o,a),i=!0},p(o,a){(!i||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&Ks(n,e),s&&s.p&&(!i||a[2]&134217728)&&we(s,r,o,o[89],i?Ie(r,o[89],a,aL):Te(o[89]),ry)},i(o){i||(F(s,o),i=!0)},o(o){j(s,o),i=!1},d(o){o&&H(n),s&&s.d(o)}}}function mL(t){let e,n,i=!t[16]&&(t[17]!=null||t[41].label)&&uy(t);return{c(){i&&i.c(),e=At()},l(r){i&&i.l(r),e=At()},m(r,s){i&&i.m(r,s),ie(r,e,s),n=!0},p(r,s){!r[16]&&(r[17]!=null||r[41].label)?i?(i.p(r,s),s[0]&196608|s[1]&1024&&F(i,1)):(i=uy(r),i.c(),F(i,1),i.m(e.parentNode,e)):i&&(tn(),j(i,1,1,()=>{i=null}),nn())},i(r){n||(F(i),n=!0)},o(r){j(i),n=!1},d(r){i&&i.d(r),r&&H(e)}}}function gL(t){let e;const n=t[50].leadingIcon,i=Ee(n,t,t[89],iy);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&we(i,n,r,r[89],e?Ie(n,r[89],s,oL):Te(r[89]),iy)},i(r){e||(F(i,r),e=!0)},o(r){j(i,r),e=!1},d(r){i&&i.d(r)}}}function _L(t){let e,n,i,r,s,o,a,l,c,u;const h=t[50].prefix,d=Ee(h,t,t[89],ty);let f=t[20]!=null&&hy(t);const p=[{type:t[18]},{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},t[16]&&t[17]!=null?{placeholder:t[17]}:{},Tn(t[42],"input$")];function m(_){t[63](_)}function g(_){t[64](_)}function v(_){t[65](_)}function A(_){t[66](_)}let w={};for(let _=0;_<p.length;_+=1)w=x(w,p[_]);t[0]!==void 0&&(w.value=t[0]),t[3]!==void 0&&(w.files=t[3]),t[4]!==void 0&&(w.dirty=t[4]),t[1]!==void 0&&(w.invalid=t[1]),i=new KO({props:w}),t[62](i),de.push(()=>Ii(i,"value",m)),de.push(()=>Ii(i,"files",g)),de.push(()=>Ii(i,"dirty",v)),de.push(()=>Ii(i,"invalid",A)),i.$on("blur",t[67]),i.$on("focus",t[68]),i.$on("blur",t[69]),i.$on("focus",t[70]);let S=t[21]!=null&&dy(t);const q=t[50].suffix,k=Ee(q,t,t[89],ey);return{c(){d&&d.c(),e=bt(),f&&f.c(),n=bt(),yt(i.$$.fragment),l=bt(),S&&S.c(),c=bt(),k&&k.c()},l(_){d&&d.l(_),e=Et(_),f&&f.l(_),n=Et(_),xt(i.$$.fragment,_),l=Et(_),S&&S.l(_),c=Et(_),k&&k.l(_)},m(_,I){d&&d.m(_,I),ie(_,e,I),f&&f.m(_,I),ie(_,n,I),dt(i,_,I),ie(_,l,I),S&&S.m(_,I),ie(_,c,I),k&&k.m(_,I),u=!0},p(_,I){d&&d.p&&(!u||I[2]&134217728)&&we(d,h,_,_[89],u?Ie(h,_[89],I,rL):Te(_[89]),ty),_[20]!=null?f?(f.p(_,I),I[0]&1048576&&F(f,1)):(f=hy(_),f.c(),F(f,1),f.m(n.parentNode,n)):f&&(tn(),j(f,1,1,()=>{f=null}),nn());const U=I[0]&135213056|I[1]&2048?Re(p,[I[0]&262144&&{type:_[18]},I[0]&4096&&{disabled:_[12]},I[0]&8192&&{required:_[13]},I[0]&524288&&{updateInvalid:_[19]},I[0]&134217728&&{"aria-controls":_[27]},I[0]&134217728&&{"aria-describedby":_[27]},I[0]&196608&&ht(_[16]&&_[17]!=null?{placeholder:_[17]}:{}),I[1]&2048&&ht(Tn(_[42],"input$"))]):{};!r&&I[0]&1&&(r=!0,U.value=_[0],Ei(()=>r=!1)),!s&&I[0]&8&&(s=!0,U.files=_[3],Ei(()=>s=!1)),!o&&I[0]&16&&(o=!0,U.dirty=_[4],Ei(()=>o=!1)),!a&&I[0]&2&&(a=!0,U.invalid=_[1],Ei(()=>a=!1)),i.$set(U),_[21]!=null?S?(S.p(_,I),I[0]&2097152&&F(S,1)):(S=dy(_),S.c(),F(S,1),S.m(c.parentNode,c)):S&&(tn(),j(S,1,1,()=>{S=null}),nn()),k&&k.p&&(!u||I[2]&134217728)&&we(k,q,_,_[89],u?Ie(q,_[89],I,iL):Te(_[89]),ey)},i(_){u||(F(d,_),F(f),F(i.$$.fragment,_),F(S),F(k,_),u=!0)},o(_){j(d,_),j(f),j(i.$$.fragment,_),j(S),j(k,_),u=!1},d(_){d&&d.d(_),_&&H(e),f&&f.d(_),_&&H(n),t[62](null),ft(i,_),_&&H(l),S&&S.d(_),_&&H(c),k&&k.d(_)}}}function vL(t){let e,n,i,r,s,o,a,l;const c=[{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},Tn(t[42],"input$")];function u(g){t[55](g)}function h(g){t[56](g)}function d(g){t[57](g)}let f={};for(let g=0;g<c.length;g+=1)f=x(f,c[g]);t[0]!==void 0&&(f.value=t[0]),t[4]!==void 0&&(f.dirty=t[4]),t[1]!==void 0&&(f.invalid=t[1]),n=new YO({props:f}),t[54](n),de.push(()=>Ii(n,"value",u)),de.push(()=>Ii(n,"dirty",h)),de.push(()=>Ii(n,"invalid",d)),n.$on("blur",t[58]),n.$on("focus",t[59]),n.$on("blur",t[60]),n.$on("focus",t[61]);const p=t[50].internalCounter,m=Ee(p,t,t[89],ny);return{c(){e=Le("span"),yt(n.$$.fragment),o=bt(),m&&m.c(),this.h()},l(g){e=De(g,"SPAN",{class:!0});var v=Pe(e);xt(n.$$.fragment,v),o=Et(v),m&&m.l(v),v.forEach(H),this.h()},h(){xn(e,"class",a=Ce({"mdc-text-field__resizer":!("input$resizable"in t[42])||t[42].input$resizable}))},m(g,v){ie(g,e,v),dt(n,e,null),en(e,o),m&&m.m(e,null),l=!0},p(g,v){const A=v[0]&134754304|v[1]&2048?Re(c,[v[0]&4096&&{disabled:g[12]},v[0]&8192&&{required:g[13]},v[0]&524288&&{updateInvalid:g[19]},v[0]&134217728&&{"aria-controls":g[27]},v[0]&134217728&&{"aria-describedby":g[27]},v[1]&2048&&ht(Tn(g[42],"input$"))]):{};!i&&v[0]&1&&(i=!0,A.value=g[0],Ei(()=>i=!1)),!r&&v[0]&16&&(r=!0,A.dirty=g[4],Ei(()=>r=!1)),!s&&v[0]&2&&(s=!0,A.invalid=g[1],Ei(()=>s=!1)),n.$set(A),m&&m.p&&(!l||v[2]&134217728)&&we(m,p,g,g[89],l?Ie(p,g[89],v,sL):Te(g[89]),ny),(!l||v[1]&2048&&a!==(a=Ce({"mdc-text-field__resizer":!("input$resizable"in g[42])||g[42].input$resizable})))&&xn(e,"class",a)},i(g){l||(F(n.$$.fragment,g),F(m,g),l=!0)},o(g){j(n.$$.fragment,g),j(m,g),l=!1},d(g){g&&H(e),t[54](null),ft(n),m&&m.d(g)}}}function hy(t){let e,n;return e=new HO({props:{$$slots:{default:[yL]},$$scope:{ctx:t}}}),{c(){yt(e.$$.fragment)},l(i){xt(e.$$.fragment,i)},m(i,r){dt(e,i,r),n=!0},p(i,r){const s={};r[0]&1048576|r[2]&134217728&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){n||(F(e.$$.fragment,i),n=!0)},o(i){j(e.$$.fragment,i),n=!1},d(i){ft(e,i)}}}function yL(t){let e;return{c(){e=bi(t[20])},l(n){e=Wr(n,t[20])},m(n,i){ie(n,e,i)},p(n,i){i[0]&1048576&&Ks(e,n[20])},d(n){n&&H(e)}}}function dy(t){let e,n;return e=new qO({props:{$$slots:{default:[bL]},$$scope:{ctx:t}}}),{c(){yt(e.$$.fragment)},l(i){xt(e.$$.fragment,i)},m(i,r){dt(e,i,r),n=!0},p(i,r){const s={};r[0]&2097152|r[2]&134217728&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){n||(F(e.$$.fragment,i),n=!0)},o(i){j(e.$$.fragment,i),n=!1},d(i){ft(e,i)}}}function bL(t){let e;return{c(){e=bi(t[21])},l(n){e=Wr(n,t[21])},m(n,i){ie(n,e,i)},p(n,i){i[0]&2097152&&Ks(e,n[21])},d(n){n&&H(e)}}}function EL(t){let e;const n=t[50].trailingIcon,i=Ee(n,t,t[89],$v);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&we(i,n,r,r[89],e?Ie(n,r[89],s,nL):Te(r[89]),$v)},i(r){e||(F(i,r),e=!0)},o(r){j(i,r),e=!1},d(r){i&&i.d(r)}}}function fy(t){let e,n;const i=[Tn(t[42],"ripple$")];let r={};for(let s=0;s<i.length;s+=1)r=x(r,i[s]);return e=new NO({props:r}),t[71](e),{c(){yt(e.$$.fragment)},l(s){xt(e.$$.fragment,s)},m(s,o){dt(e,s,o),n=!0},p(s,o){const a=o[1]&2048?Re(i,[ht(Tn(s[42],"ripple$"))]):{};e.$set(a)},i(s){n||(F(e.$$.fragment,s),n=!0)},o(s){j(e.$$.fragment,s),n=!1},d(s){t[71](null),ft(e,s)}}}function py(t){let e,n;const i=[Tn(t[42],"helperLine$")];let r={$$slots:{default:[IL]},$$scope:{ctx:t}};for(let s=0;s<i.length;s+=1)r=x(r,i[s]);return e=new BO({props:r}),e.$on("SMUITextfieldHelperText:id",t[84]),e.$on("SMUITextfieldHelperText:mount",t[85]),e.$on("SMUITextfieldHelperText:unmount",t[86]),e.$on("SMUITextfieldCharacterCounter:mount",t[87]),e.$on("SMUITextfieldCharacterCounter:unmount",t[88]),{c(){yt(e.$$.fragment)},l(s){xt(e.$$.fragment,s)},m(s,o){dt(e,s,o),n=!0},p(s,o){const a=o[1]&2048?Re(i,[ht(Tn(s[42],"helperLine$"))]):{};o[2]&134217728&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(F(e.$$.fragment,s),n=!0)},o(s){j(e.$$.fragment,s),n=!1},d(s){ft(e,s)}}}function IL(t){let e;const n=t[50].helper,i=Ee(n,t,t[89],Xv);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&we(i,n,r,r[89],e?Ie(n,r[89],s,JO):Te(r[89]),Xv)},i(r){e||(F(i,r),e=!0)},o(r){j(i,r),e=!1},d(r){i&&i.d(r)}}}function wL(t){let e,n,i,r,s;const o=[uL,cL],a=[];function l(u,h){return u[36]?0:1}e=l(t),n=a[e]=o[e](t);let c=t[41].helper&&py(t);return{c(){n.c(),i=bt(),c&&c.c(),r=At()},l(u){n.l(u),i=Et(u),c&&c.l(u),r=At()},m(u,h){a[e].m(u,h),ie(u,i,h),c&&c.m(u,h),ie(u,r,h),s=!0},p(u,h){n.p(u,h),u[41].helper?c?(c.p(u,h),h[1]&1024&&F(c,1)):(c=py(u),c.c(),F(c,1),c.m(r.parentNode,r)):c&&(tn(),j(c,1,1,()=>{c=null}),nn())},i(u){s||(F(n),F(c),s=!0)},o(u){j(n),j(c),s=!1},d(u){a[e].d(u),u&&H(i),c&&c.d(u),u&&H(r)}}}const my=([t,e])=>`${t}: ${e};`,gy=([t,e])=>`${t}: ${e};`;function TL(t,e,n){let i;const r=["use","class","style","ripple","disabled","required","textarea","variant","noLabel","label","type","value","files","invalid","updateInvalid","dirty","prefix","suffix","validateOnValueChange","useNativeValidation","withLeadingIcon","withTrailingIcon","input","floatingLabel","lineRipple","notchedOutline","focus","layout","getElement"];let s=ne(e,r),{$$slots:o={},$$scope:a}=e;const l=e0(o),{applyPassive:c}=kv,u=tt(Me());let h=()=>{};function d(E){return E===h}let{use:f=[]}=e,{class:p=""}=e,{style:m=""}=e,{ripple:g=!0}=e,{disabled:v=!1}=e,{required:A=!1}=e,{textarea:w=!1}=e,{variant:S=w?"outlined":"standard"}=e,{noLabel:q=!1}=e,{label:k=void 0}=e,{type:_="text"}=e,{value:I=h}=e,{files:U=h}=e;const b=!d(I)||!d(U);d(I)&&(I=void 0),d(U)&&(U=null);let{invalid:O=h}=e,{updateInvalid:Z=d(O)}=e;d(O)&&(O=!1);let{dirty:y=!1}=e,{prefix:M=void 0}=e,{suffix:R=void 0}=e,{validateOnValueChange:G=Z}=e,{useNativeValidation:T=Z}=e,{withLeadingIcon:C=h}=e,{withTrailingIcon:z=h}=e,{input:V=void 0}=e,{floatingLabel:K=void 0}=e,{lineRipple:fe=void 0}=e,{notchedOutline:He=void 0}=e,ct,be,pe={},ve={},W,le=!1,it=bn("SMUI:addLayoutListener"),Zt,Lt,D=new Promise(E=>Lt=E),he,rt,$t,Fn,yi=I;it&&(Zt=it(Ra)),Un(()=>{if(n(48,be=new SO({addClass:zs,removeClass:ka,hasClass:su,registerTextFieldInteractionHandler:(E,St)=>qr().addEventListener(E,St),deregisterTextFieldInteractionHandler:(E,St)=>qr().removeEventListener(E,St),registerValidationAttributeChangeHandler:E=>{const St=uu=>uu.map(hu=>hu.attributeName).filter(hu=>hu),dp=new MutationObserver(uu=>{T&&E(St(uu))}),Kw={attributes:!0};return V&&dp.observe(V.getElement(),Kw),dp},deregisterValidationAttributeChangeHandler:E=>{E.disconnect()},getNativeInput:()=>{var E;return(E=V==null?void 0:V.getElement())!==null&&E!==void 0?E:null},setInputAttr:(E,St)=>{V==null||V.addAttr(E,St)},removeInputAttr:E=>{V==null||V.removeAttr(E)},isFocused:()=>document.activeElement===(V==null?void 0:V.getElement()),registerInputInteractionHandler:(E,St)=>{V==null||V.getElement().addEventListener(E,St,c())},deregisterInputInteractionHandler:(E,St)=>{V==null||V.getElement().removeEventListener(E,St,c())},floatLabel:E=>K&&K.float(E),getLabelWidth:()=>K?K.getWidth():0,hasLabel:()=>!!K,shakeLabel:E=>K&&K.shake(E),setLabelRequired:E=>K&&K.setRequired(E),activateLineRipple:()=>fe&&fe.activate(),deactivateLineRipple:()=>fe&&fe.deactivate(),setLineRippleTransformOrigin:E=>fe&&fe.setRippleCenter(E),closeOutline:()=>He&&He.closeNotch(),hasOutline:()=>!!He,notchOutline:E=>He&&He.notch(E)},{get helperText(){return $t},get characterCounter(){return Fn},get leadingIcon(){return he},get trailingIcon(){return rt}})),b){if(V==null)throw new Error("SMUI Textfield initialized without Input component.");be.init()}else h0().then(()=>{if(V==null)throw new Error("SMUI Textfield initialized without Input component.");be.init()});return Lt(),()=>{be.destroy()}}),Ji(()=>{Zt&&Zt()});function su(E){var St;return E in pe?(St=pe[E])!==null&&St!==void 0?St:null:qr().classList.contains(E)}function zs(E){pe[E]||n(25,pe[E]=!0,pe)}function ka(E){(!(E in pe)||pe[E])&&n(25,pe[E]=!1,pe)}function Xn(E,St){ve[E]!=St&&(St===""||St==null?(delete ve[E],n(26,ve)):n(26,ve[E]=St,ve))}function ou(){V==null||V.focus()}function Ra(){if(be){const E=be.shouldFloat;be.notchOutline(E)}}function qr(){return ct}function au(E){de[E?"unshift":"push"](()=>{K=E,n(5,K)})}function lu(E){de[E?"unshift":"push"](()=>{K=E,n(5,K)})}function N(E){de[E?"unshift":"push"](()=>{He=E,n(7,He)})}function te(E){de[E?"unshift":"push"](()=>{V=E,n(2,V)})}function ee(E){I=E,n(0,I)}function Je(E){y=E,n(4,y)}function Yi(E){O=E,n(1,O),n(48,be),n(19,Z)}const cu=()=>n(28,le=!1),_w=()=>n(28,le=!0),vw=E=>gt(ct,"blur",E),yw=E=>gt(ct,"focus",E);function bw(E){de[E?"unshift":"push"](()=>{V=E,n(2,V)})}function Ew(E){I=E,n(0,I)}function Iw(E){U=E,n(3,U)}function ww(E){y=E,n(4,y)}function Tw(E){O=E,n(1,O),n(48,be),n(19,Z)}const Cw=()=>n(28,le=!1),Sw=()=>n(28,le=!0),Aw=E=>gt(ct,"blur",E),kw=E=>gt(ct,"focus",E);function Rw(E){de[E?"unshift":"push"](()=>{fe=E,n(6,fe)})}function Ow(E){de[E?"unshift":"push"](()=>{ct=E,n(24,ct)})}const Lw=E=>n(29,he=E.detail),Mw=()=>n(29,he=void 0),Nw=E=>n(30,rt=E.detail),Pw=()=>n(30,rt=void 0),Dw=E=>n(32,Fn=E.detail),Fw=()=>n(32,Fn=void 0);function xw(E){de[E?"unshift":"push"](()=>{ct=E,n(24,ct)})}const Uw=E=>n(29,he=E.detail),jw=()=>n(29,he=void 0),Vw=E=>n(30,rt=E.detail),Bw=()=>n(30,rt=void 0),Hw=E=>n(27,W=E.detail),qw=E=>n(31,$t=E.detail),Ww=()=>{n(27,W=void 0),n(31,$t=void 0)},Gw=E=>n(32,Fn=E.detail),zw=()=>n(32,Fn=void 0);return t.$$set=E=>{e=x(x({},e),Ke(E)),n(42,s=ne(e,r)),"use"in E&&n(8,f=E.use),"class"in E&&n(9,p=E.class),"style"in E&&n(10,m=E.style),"ripple"in E&&n(11,g=E.ripple),"disabled"in E&&n(12,v=E.disabled),"required"in E&&n(13,A=E.required),"textarea"in E&&n(14,w=E.textarea),"variant"in E&&n(15,S=E.variant),"noLabel"in E&&n(16,q=E.noLabel),"label"in E&&n(17,k=E.label),"type"in E&&n(18,_=E.type),"value"in E&&n(0,I=E.value),"files"in E&&n(3,U=E.files),"invalid"in E&&n(1,O=E.invalid),"updateInvalid"in E&&n(19,Z=E.updateInvalid),"dirty"in E&&n(4,y=E.dirty),"prefix"in E&&n(20,M=E.prefix),"suffix"in E&&n(21,R=E.suffix),"validateOnValueChange"in E&&n(43,G=E.validateOnValueChange),"useNativeValidation"in E&&n(44,T=E.useNativeValidation),"withLeadingIcon"in E&&n(22,C=E.withLeadingIcon),"withTrailingIcon"in E&&n(23,z=E.withTrailingIcon),"input"in E&&n(2,V=E.input),"floatingLabel"in E&&n(5,K=E.floatingLabel),"lineRipple"in E&&n(6,fe=E.lineRipple),"notchedOutline"in E&&n(7,He=E.notchedOutline),"$$scope"in E&&n(89,a=E.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&4&&n(33,i=V&&V.getElement()),t.$$.dirty[0]&524290|t.$$.dirty[1]&131072&&be&&be.isValid()!==!O&&(Z?n(1,O=!be.isValid()):be.setValid(!O)),t.$$.dirty[1]&135168&&be&&be.getValidateOnValueChange()!==G&&be.setValidateOnValueChange(d(G)?!1:G),t.$$.dirty[1]&139264&&be&&be.setUseNativeValidation(d(T)?!0:T),t.$$.dirty[0]&4096|t.$$.dirty[1]&131072&&be&&be.setDisabled(v),t.$$.dirty[0]&1|t.$$.dirty[1]&393216&&be&&b&&yi!==I){n(49,yi=I);const E=`${I}`;be.getValue()!==E&&be.setValue(E)}},[I,O,V,U,y,K,fe,He,f,p,m,g,v,A,w,S,q,k,_,Z,M,R,C,z,ct,pe,ve,W,le,he,rt,$t,Fn,i,u,d,b,D,zs,ka,Xn,l,s,G,T,ou,Ra,qr,be,yi,o,au,lu,N,te,ee,Je,Yi,cu,_w,vw,yw,bw,Ew,Iw,ww,Tw,Cw,Sw,Aw,kw,Rw,Ow,Lw,Mw,Nw,Pw,Dw,Fw,xw,Uw,jw,Vw,Bw,Hw,qw,Ww,Gw,zw,a]}class xj extends Qe{constructor(e){super();Xe(this,e,TL,wL,We,{use:8,class:9,style:10,ripple:11,disabled:12,required:13,textarea:14,variant:15,noLabel:16,label:17,type:18,value:0,files:3,invalid:1,updateInvalid:19,dirty:4,prefix:20,suffix:21,validateOnValueChange:43,useNativeValidation:44,withLeadingIcon:22,withTrailingIcon:23,input:2,floatingLabel:5,lineRipple:6,notchedOutline:7,focus:45,layout:46,getElement:47},null,[-1,-1,-1,-1])}get focus(){return this.$$.ctx[45]}get layout(){return this.$$.ctx[46]}get getElement(){return this.$$.ctx[47]}}/**
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
 */var CL={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},SL={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},Ko={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},It;(function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"})(It||(It={}));var ys;(function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"})(ys||(ys={}));/**
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
 */var ji,fi,_e={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};ji={},ji[""+_e.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",ji[""+_e.LIST_ITEM_CLASS]="mdc-list-item",ji[""+_e.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",ji[""+_e.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",ji[""+_e.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",ji[""+_e.ROOT]="mdc-list";var bs=(fi={},fi[""+_e.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",fi[""+_e.LIST_ITEM_CLASS]="mdc-deprecated-list-item",fi[""+_e.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",fi[""+_e.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",fi[""+_e.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",fi[""+_e.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",fi[""+_e.ROOT]="mdc-deprecated-list",fi),Vi={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+_e.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+_e.LIST_ITEM_CLASS+` a,
    .`+bs[_e.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+bs[_e.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+_e.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+_e.LIST_ITEM_CLASS+` a,
    .`+_e.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+_e.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+bs[_e.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+bs[_e.LIST_ITEM_CLASS]+` a,
    .`+bs[_e.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+bs[_e.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},Dt={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};/**
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
 */var AL=["input","button","textarea","select"],Ir=function(t){var e=t.target;if(!!e){var n=(""+e.tagName).toLowerCase();AL.indexOf(n)===-1&&t.preventDefault()}};/**
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
 */function kL(){var t={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return t}function RL(t,e){for(var n=new Map,i=0;i<t;i++){var r=e(i).trim();if(!!r){var s=r[0].toLowerCase();n.has(s)||n.set(s,[]),n.get(s).push({text:r.toLowerCase(),index:i})}}return n.forEach(function(o){o.sort(function(a,l){return a.index-l.index})}),n}function Od(t,e){var n=t.nextChar,i=t.focusItemAtIndex,r=t.sortedIndexByFirstChar,s=t.focusedItemIndex,o=t.skipFocus,a=t.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){vy(e)},Dt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+n;var l;return e.typeaheadBuffer.length===1?l=OL(r,s,a,e):l=LL(r,a,e),l!==-1&&!o&&i(l),l}function OL(t,e,n,i){var r=i.typeaheadBuffer[0],s=t.get(r);if(!s)return-1;if(r===i.currentFirstChar&&s[i.sortedIndexCursor].index===e){i.sortedIndexCursor=(i.sortedIndexCursor+1)%s.length;var o=s[i.sortedIndexCursor].index;if(!n(o))return o}i.currentFirstChar=r;var a=-1,l;for(l=0;l<s.length;l++)if(!n(s[l].index)){a=l;break}for(;l<s.length;l++)if(s[l].index>e&&!n(s[l].index)){a=l;break}return a!==-1?(i.sortedIndexCursor=a,s[i.sortedIndexCursor].index):-1}function LL(t,e,n){var i=n.typeaheadBuffer[0],r=t.get(i);if(!r)return-1;var s=r[n.sortedIndexCursor];if(s.text.lastIndexOf(n.typeaheadBuffer,0)===0&&!e(s.index))return s.index;for(var o=(n.sortedIndexCursor+1)%r.length,a=-1;o!==n.sortedIndexCursor;){var l=r[o],c=l.text.lastIndexOf(n.typeaheadBuffer,0)===0,u=!e(l.index);if(c&&u){a=o;break}o=(o+1)%r.length}return a!==-1?(n.sortedIndexCursor=a,r[n.sortedIndexCursor].index):-1}function _y(t){return t.typeaheadBuffer.length>0}function vy(t){t.typeaheadBuffer=""}function yy(t,e){var n=t.event,i=t.isTargetListItem,r=t.focusedItemIndex,s=t.focusItemAtIndex,o=t.sortedIndexByFirstChar,a=t.isItemAtIndexDisabled,l=ln(n)==="ArrowLeft",c=ln(n)==="ArrowUp",u=ln(n)==="ArrowRight",h=ln(n)==="ArrowDown",d=ln(n)==="Home",f=ln(n)==="End",p=ln(n)==="Enter",m=ln(n)==="Spacebar";if(n.ctrlKey||n.metaKey||l||c||u||h||d||f||p)return-1;var g=!m&&n.key.length===1;if(g){Ir(n);var v={focusItemAtIndex:s,focusedItemIndex:r,nextChar:n.key.toLowerCase(),sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return Od(v,e)}if(!m)return-1;i&&Ir(n);var A=i&&_y(e);if(A){var v={focusItemAtIndex:s,focusedItemIndex:r,nextChar:" ",sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return Od(v,e)}return-1}/**
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
 */function ML(t){return t instanceof Array}var NL=function(t){qn(e,t);function e(n){var i=t.call(this,pt(pt({},e.defaultAdapter),n))||this;return i.wrapFocus=!1,i.isVertical=!0,i.isSingleSelectionList=!1,i.selectedIndex=Dt.UNSET_INDEX,i.focusedItemIndex=Dt.UNSET_INDEX,i.useActivatedClass=!1,i.useSelectedAttr=!1,i.ariaCurrentAttrValue=null,i.isCheckboxList=!1,i.isRadioList=!1,i.hasTypeahead=!1,i.typeaheadState=kL(),i.sortedIndexByFirstChar=new Map,i}return Object.defineProperty(e,"strings",{get:function(){return Vi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return _e},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Dt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(n){this.wrapFocus=n},e.prototype.setVerticalOrientation=function(n){this.isVertical=n},e.prototype.setSingleSelection=function(n){this.isSingleSelectionList=n,n&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.maybeInitializeSingleSelection=function(){var n=this.getSelectedIndexFromDOM();if(n!==Dt.UNSET_INDEX){var i=this.adapter.listItemAtIndexHasClass(n,_e.LIST_ITEM_ACTIVATED_CLASS);i&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=n}},e.prototype.getSelectedIndexFromDOM=function(){for(var n=Dt.UNSET_INDEX,i=this.adapter.getListItemCount(),r=0;r<i;r++){var s=this.adapter.listItemAtIndexHasClass(r,_e.LIST_ITEM_SELECTED_CLASS),o=this.adapter.listItemAtIndexHasClass(r,_e.LIST_ITEM_ACTIVATED_CLASS);if(!!(s||o)){n=r;break}}return n},e.prototype.setHasTypeahead=function(n){this.hasTypeahead=n,n&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&_y(this.typeaheadState)},e.prototype.setUseActivatedClass=function(n){this.useActivatedClass=n},e.prototype.setUseSelectedAttribute=function(n){this.useSelectedAttr=n},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(n,i){var r=i===void 0?{}:i,s=r.forceUpdate;!this.isIndexValid(n)||(this.isCheckboxList?this.setCheckboxAtIndex(n):this.isRadioList?this.setRadioAtIndex(n):this.setSingleSelectionAtIndex(n,{forceUpdate:s}))},e.prototype.handleFocusIn=function(n){n>=0&&(this.focusedItemIndex=n,this.adapter.setAttributeForElementIndex(n,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(n,"0"))},e.prototype.handleFocusOut=function(n){var i=this;n>=0&&(this.adapter.setAttributeForElementIndex(n,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(n,"-1")),setTimeout(function(){i.adapter.isFocusInsideList()||i.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.handleKeydown=function(n,i,r){var s=this,o=ln(n)==="ArrowLeft",a=ln(n)==="ArrowUp",l=ln(n)==="ArrowRight",c=ln(n)==="ArrowDown",u=ln(n)==="Home",h=ln(n)==="End",d=ln(n)==="Enter",f=ln(n)==="Spacebar",p=n.key==="A"||n.key==="a";if(this.adapter.isRootFocused()){if(a||h?(n.preventDefault(),this.focusLastElement()):(c||u)&&(n.preventDefault(),this.focusFirstElement()),this.hasTypeahead){var m={event:n,focusItemAtIndex:function(A){s.focusItemAtIndex(A)},focusedItemIndex:-1,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(A){return s.adapter.listItemAtIndexHasClass(A,_e.LIST_ITEM_DISABLED_CLASS)}};yy(m,this.typeaheadState)}return}var g=this.adapter.getFocusedElementIndex();if(!(g===-1&&(g=r,g<0))){if(this.isVertical&&c||!this.isVertical&&l)Ir(n),this.focusNextElement(g);else if(this.isVertical&&a||!this.isVertical&&o)Ir(n),this.focusPrevElement(g);else if(u)Ir(n),this.focusFirstElement();else if(h)Ir(n),this.focusLastElement();else if(p&&n.ctrlKey&&this.isCheckboxList)n.preventDefault(),this.toggleAll(this.selectedIndex===Dt.UNSET_INDEX?[]:this.selectedIndex);else if((d||f)&&i){var v=n.target;if(v&&v.tagName==="A"&&d||(Ir(n),this.adapter.listItemAtIndexHasClass(g,_e.LIST_ITEM_DISABLED_CLASS)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(g),this.adapter.notifyAction(g))}if(this.hasTypeahead){var m={event:n,focusItemAtIndex:function(w){s.focusItemAtIndex(w)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(w){return s.adapter.listItemAtIndexHasClass(w,_e.LIST_ITEM_DISABLED_CLASS)}};yy(m,this.typeaheadState)}}},e.prototype.handleClick=function(n,i){n!==Dt.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(n,_e.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(n,i),this.adapter.notifyAction(n)))},e.prototype.focusNextElement=function(n){var i=this.adapter.getListItemCount(),r=n+1;if(r>=i)if(this.wrapFocus)r=0;else return n;return this.focusItemAtIndex(r),r},e.prototype.focusPrevElement=function(n){var i=n-1;if(i<0)if(this.wrapFocus)i=this.adapter.getListItemCount()-1;else return n;return this.focusItemAtIndex(i),i},e.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},e.prototype.focusLastElement=function(){var n=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(n),n},e.prototype.focusInitialElement=function(){var n=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(n),n},e.prototype.setEnabled=function(n,i){!this.isIndexValid(n)||(i?(this.adapter.removeClassForElementIndex(n,_e.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(n,Vi.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(n,_e.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(n,Vi.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(n,i){var r=i===void 0?{}:i,s=r.forceUpdate;if(!(this.selectedIndex===n&&!s)){var o=_e.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(o=_e.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==Dt.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,o),this.setAriaForSingleSelectionAtIndex(n),this.setTabindexAtIndex(n),n!==Dt.UNSET_INDEX&&this.adapter.addClassForElementIndex(n,o),this.selectedIndex=n}},e.prototype.setAriaForSingleSelectionAtIndex=function(n){this.selectedIndex===Dt.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(n,Vi.ARIA_CURRENT));var i=this.ariaCurrentAttrValue!==null,r=i?Vi.ARIA_CURRENT:Vi.ARIA_SELECTED;if(this.selectedIndex!==Dt.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,r,"false"),n!==Dt.UNSET_INDEX){var s=i?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(n,r,s)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?Vi.ARIA_SELECTED:Vi.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(n){var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(n,!0),this.selectedIndex!==Dt.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),this.adapter.setAttributeForElementIndex(n,i,"true"),this.selectedIndex=n},e.prototype.setCheckboxAtIndex=function(n){for(var i=this.getSelectionAttribute(),r=0;r<this.adapter.getListItemCount();r++){var s=!1;n.indexOf(r)>=0&&(s=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(r,s),this.adapter.setAttributeForElementIndex(r,i,s?"true":"false")}this.selectedIndex=n},e.prototype.setTabindexAtIndex=function(n){this.focusedItemIndex===Dt.UNSET_INDEX&&n!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==n&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==n&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),n!==Dt.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(n,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var n=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(n)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==Dt.UNSET_INDEX?this.selectedIndex:ML(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(n,i){return Math.min(n,i)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(n){var i=this;if(n instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return n.length===0?!0:n.some(function(r){return i.isIndexInRange(r)})}else if(typeof n=="number"){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+n);return this.isIndexInRange(n)||this.isSingleSelectionList&&n===Dt.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(n){var i=this.adapter.getListItemCount();return n>=0&&n<i},e.prototype.setSelectedIndexOnAction=function(n,i){i===void 0&&(i=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(n,i):this.setSelectedIndex(n)},e.prototype.toggleCheckboxAtIndex=function(n,i){var r=this.getSelectionAttribute(),s=this.adapter.isCheckboxCheckedAtIndex(n);i&&(s=!s,this.adapter.setCheckedCheckboxOrRadioAtIndex(n,s)),this.adapter.setAttributeForElementIndex(n,r,s?"true":"false");var o=this.selectedIndex===Dt.UNSET_INDEX?[]:this.selectedIndex.slice();s?o.push(n):o=o.filter(function(a){return a!==n}),this.selectedIndex=o},e.prototype.focusItemAtIndex=function(n){this.adapter.focusItemAtIndex(n),this.focusedItemIndex=n},e.prototype.toggleAll=function(n){var i=this.adapter.getListItemCount();if(n.length===i)this.setCheckboxAtIndex([]);else{for(var r=[],s=0;s<i;s++)(!this.adapter.listItemAtIndexHasClass(s,_e.LIST_ITEM_DISABLED_CLASS)||n.indexOf(s)>-1)&&r.push(s);this.setCheckboxAtIndex(r)}},e.prototype.typeaheadMatchItem=function(n,i,r){var s=this;r===void 0&&(r=!1);var o={focusItemAtIndex:function(a){s.focusItemAtIndex(a)},focusedItemIndex:i||this.focusedItemIndex,nextChar:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:r,isItemAtIndexDisabled:function(a){return s.adapter.listItemAtIndexHasClass(a,_e.LIST_ITEM_DISABLED_CLASS)}};return Od(o,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return RL(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){vy(this.typeaheadState)},e}(Jn);/**
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
 */var by=function(t){qn(e,t);function e(n){var i=t.call(this,pt(pt({},e.defaultAdapter),n))||this;return i.isSurfaceOpen=!1,i.isQuickOpen=!1,i.isHoistedElement=!1,i.isFixedPosition=!1,i.isHorizontallyCenteredOnViewport=!1,i.maxHeight=0,i.openAnimationEndTimerId=0,i.closeAnimationEndTimerId=0,i.animationRequestId=0,i.anchorCorner=ys.TOP_START,i.originCorner=ys.TOP_START,i.anchorMargin={top:0,right:0,bottom:0,left:0},i.position={x:0,y:0},i}return Object.defineProperty(e,"cssClasses",{get:function(){return CL},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return SL},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ko},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return ys},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=e.cssClasses,i=n.ROOT,r=n.OPEN;if(!this.adapter.hasClass(i))throw new Error(i+" class required in root element.");this.adapter.hasClass(r)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(n){this.anchorCorner=n},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^It.RIGHT},e.prototype.setAnchorMargin=function(n){this.anchorMargin.top=n.top||0,this.anchorMargin.right=n.right||0,this.anchorMargin.bottom=n.bottom||0,this.anchorMargin.left=n.left||0},e.prototype.setIsHoisted=function(n){this.isHoistedElement=n},e.prototype.setFixedPosition=function(n){this.isFixedPosition=n},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(n,i){this.position.x=this.isFinite(n)?n:0,this.position.y=this.isFinite(i)?i:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(n){this.isHorizontallyCenteredOnViewport=n},e.prototype.setQuickOpen=function(n){this.isQuickOpen=n},e.prototype.setMaxHeight=function(n){this.maxHeight=n},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var n=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){n.dimensions=n.adapter.getInnerDimensions(),n.autoposition(),n.adapter.addClass(e.cssClasses.OPEN),n.openAnimationEndTimerId=setTimeout(function(){n.openAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),n.adapter.notifyOpen()},Ko.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},e.prototype.close=function(n){var i=this;if(n===void 0&&(n=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,n||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){i.adapter.removeClass(e.cssClasses.OPEN),i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId=setTimeout(function(){i.closeAnimationEndTimerId=0,i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),i.adapter.notifyClose()},Ko.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,n||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(n){var i=n.target;this.adapter.isElementInContainer(i)||this.close()},e.prototype.handleKeydown=function(n){var i=n.keyCode,r=n.key,s=r==="Escape"||i===27;s&&this.close()},e.prototype.autoposition=function(){var n;this.measurements=this.getAutoLayoutmeasurements();var i=this.getoriginCorner(),r=this.getMenuSurfaceMaxHeight(i),s=this.hasBit(i,It.BOTTOM)?"bottom":"top",o=this.hasBit(i,It.RIGHT)?"right":"left",a=this.getHorizontalOriginOffset(i),l=this.getVerticalOriginOffset(i),c=this.measurements,u=c.anchorSize,h=c.surfaceSize,d=(n={},n[o]=a,n[s]=l,n);u.width/h.width>Ko.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(o="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(d),this.adapter.setTransformOrigin(o+" "+s),this.adapter.setPosition(d),this.adapter.setMaxHeight(r?r+"px":""),this.hasBit(i,It.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var n=this.adapter.getAnchorDimensions(),i=this.adapter.getBodyDimensions(),r=this.adapter.getWindowDimensions(),s=this.adapter.getWindowScroll();return n||(n={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:n,bodySize:i,surfaceSize:this.dimensions,viewportDistance:{top:n.top,right:r.width-n.right,bottom:r.height-n.bottom,left:n.left},viewportSize:r,windowScroll:s}},e.prototype.getoriginCorner=function(){var n=this.originCorner,i=this.measurements,r=i.viewportDistance,s=i.anchorSize,o=i.surfaceSize,a=e.numbers.MARGIN_TO_EDGE,l=this.hasBit(this.anchorCorner,It.BOTTOM),c,u;l?(c=r.top-a+this.anchorMargin.bottom,u=r.bottom-a-this.anchorMargin.bottom):(c=r.top-a+this.anchorMargin.top,u=r.bottom-a+s.height-this.anchorMargin.top);var h=u-o.height>0;!h&&c>u&&(n=this.setBit(n,It.BOTTOM));var d=this.adapter.isRtl(),f=this.hasBit(this.anchorCorner,It.FLIP_RTL),p=this.hasBit(this.anchorCorner,It.RIGHT)||this.hasBit(n,It.RIGHT),m=!1;d&&f?m=!p:m=p;var g,v;m?(g=r.left+s.width+this.anchorMargin.right,v=r.right-this.anchorMargin.right):(g=r.left+this.anchorMargin.left,v=r.right+s.width-this.anchorMargin.left);var A=g-o.width>0,w=v-o.width>0,S=this.hasBit(n,It.FLIP_RTL)&&this.hasBit(n,It.RIGHT);return w&&S&&d||!A&&S?n=this.unsetBit(n,It.RIGHT):(A&&m&&d||A&&!m&&p||!w&&g>=v)&&(n=this.setBit(n,It.RIGHT)),n},e.prototype.getMenuSurfaceMaxHeight=function(n){if(this.maxHeight>0)return this.maxHeight;var i=this.measurements.viewportDistance,r=0,s=this.hasBit(n,It.BOTTOM),o=this.hasBit(this.anchorCorner,It.BOTTOM),a=e.numbers.MARGIN_TO_EDGE;return s?(r=i.top+this.anchorMargin.top-a,o||(r+=this.measurements.anchorSize.height)):(r=i.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-a,o&&(r-=this.measurements.anchorSize.height)),r},e.prototype.getHorizontalOriginOffset=function(n){var i=this.measurements.anchorSize,r=this.hasBit(n,It.RIGHT),s=this.hasBit(this.anchorCorner,It.RIGHT);if(r){var o=s?i.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?o-(this.measurements.viewportSize.width-this.measurements.bodySize.width):o}return s?i.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(n){var i=this.measurements.anchorSize,r=this.hasBit(n,It.BOTTOM),s=this.hasBit(this.anchorCorner,It.BOTTOM),o=0;return r?o=s?i.height-this.anchorMargin.top:-this.anchorMargin.bottom:o=s?i.height+this.anchorMargin.bottom:this.anchorMargin.top,o},e.prototype.adjustPositionForHoistedElement=function(n){var i,r,s=this.measurements,o=s.windowScroll,a=s.viewportDistance,l=s.surfaceSize,c=s.viewportSize,u=Object.keys(n);try{for(var h=ti(u),d=h.next();!d.done;d=h.next()){var f=d.value,p=n[f]||0;if(this.isHorizontallyCenteredOnViewport&&(f==="left"||f==="right")){n[f]=(c.width-l.width)/2;continue}p+=a[f],this.isFixedPosition||(f==="top"?p+=o.y:f==="bottom"?p-=o.y:f==="left"?p+=o.x:p-=o.x),n[f]=p}}catch(m){i={error:m}}finally{try{d&&!d.done&&(r=h.return)&&r.call(h)}finally{if(i)throw i.error}}},e.prototype.maybeRestoreFocus=function(){var n=this,i=this.adapter.isFocused(),r=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(i||r)&&setTimeout(function(){n.adapter.restoreFocus()},Ko.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(n,i){return Boolean(n&i)},e.prototype.setBit=function(n,i){return n|i},e.prototype.unsetBit=function(n,i){return n^i},e.prototype.isFinite=function(n){return typeof n=="number"&&isFinite(n)},e}(Jn);/**
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
 */var Ey={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function PL(t){return Boolean(t.document)&&typeof t.document.createElement=="function"}function DL(t,e){if(PL(t)&&e in Ey){var n=t.document.createElement("div"),i=Ey[e],r=i.standard,s=i.prefixed,o=r in n.style;return o?r:s}return e}/**
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
 */var Es={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},Is={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},FL={FOCUS_ROOT_INDEX:-1},ws;(function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"})(ws||(ws={}));/**
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
 */var xL=function(t){qn(e,t);function e(n){var i=t.call(this,pt(pt({},e.defaultAdapter),n))||this;return i.closeAnimationEndTimerId=0,i.defaultFocusState=ws.LIST_ROOT,i.selectedIndex=-1,i}return Object.defineProperty(e,"cssClasses",{get:function(){return Es},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Is},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return FL},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},e.prototype.handleKeydown=function(n){var i=n.key,r=n.keyCode,s=i==="Tab"||r===9;s&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(n){var i=this,r=this.adapter.getElementIndex(n);if(!(r<0)){this.adapter.notifySelected({index:r});var s=this.adapter.getAttributeFromElementAtIndex(r,Is.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(s),this.closeAnimationEndTimerId=setTimeout(function(){var o=i.adapter.getElementIndex(n);o>=0&&i.adapter.isSelectableItemAtIndex(o)&&i.setSelectedIndex(o)},by.numbers.TRANSITION_CLOSE_DURATION)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case ws.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case ws.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case ws.NONE:break;default:this.adapter.focusListRoot();break}},e.prototype.setDefaultFocusState=function(n){this.defaultFocusState=n},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(n){if(this.validatedIndex(n),!this.adapter.isSelectableItemAtIndex(n))throw new Error("MDCMenuFoundation: No selection group at specified index.");var i=this.adapter.getSelectedSiblingOfItemAtIndex(n);i>=0&&(this.adapter.removeAttributeFromElementAtIndex(i,Is.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(i,Es.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(n,Es.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(n,Is.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=n},e.prototype.setEnabled=function(n,i){this.validatedIndex(n),i?(this.adapter.removeClassFromElementAtIndex(n,_e.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(n,Is.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(n,_e.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(n,Is.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(n){var i=this.adapter.getMenuItemCount(),r=n>=0&&n<i;if(!r)throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(Jn);const{document:UL}=f0;function jL(t){let e,n,i,r,s,o,a,l;const c=t[30].default,u=Ee(c,t,t[29],null);let h=[{class:i=Ce(st({[t[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":t[5],"mdc-menu-surface--open":t[4],"smui-menu-surface--static":t[4],"mdc-menu-surface--fullwidth":t[6]},t[9]))},{style:r=Object.entries(t[10]).map(Iy).concat([t[3]]).join(" ")},t[12]],d={};for(let f=0;f<h.length;f+=1)d=x(d,h[f]);return{c(){e=bt(),n=Le("div"),u&&u.c(),this.h()},l(f){e=Et(f),n=De(f,"DIV",{class:!0,style:!0});var p=Pe(n);u&&u.l(p),p.forEach(H),this.h()},h(){ae(n,d)},m(f,p){ie(f,e,p),ie(f,n,p),u&&u.m(n,null),t[32](n),o=!0,a||(l=[Ze(UL.body,"click",t[31],!0),se(s=_t.call(null,n,t[1])),se(t[11].call(null,n)),Ze(n,"keydown",t[33])],a=!0)},p(f,p){u&&u.p&&(!o||p[0]&536870912)&&we(u,c,f,f[29],o?Ie(c,f[29],p,null):Te(f[29]),null),ae(n,d=Re(h,[(!o||p[0]&628&&i!==(i=Ce(st({[f[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":f[5],"mdc-menu-surface--open":f[4],"smui-menu-surface--static":f[4],"mdc-menu-surface--fullwidth":f[6]},f[9]))))&&{class:i},(!o||p[0]&1032&&r!==(r=Object.entries(f[10]).map(Iy).concat([f[3]]).join(" ")))&&{style:r},p[0]&4096&&f[12]])),s&&ze(s.update)&&p[0]&2&&s.update.call(null,f[1])},i(f){o||(F(u,f),o=!0)},o(f){j(u,f),o=!1},d(f){f&&H(e),f&&H(n),u&&u.d(f),t[32](null),a=!1,qe(l)}}}const Iy=([t,e])=>`${t}: ${e};`;function VL(t,e,n){const i=["use","class","style","static","anchor","fixed","open","fullWidth","quickOpen","anchorElement","anchorCorner","anchorMargin","maxHeight","horizontallyCenteredOnViewport","isOpen","setOpen","setAbsolutePosition","setIsHoisted","isFixed","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e;var a,l,c;const u=tt(Me());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{static:p=!1}=e,{anchor:m=!0}=e,{fixed:g=!1}=e,{open:v=p}=e,{fullWidth:A=!1}=e,{quickOpen:w=!1}=e,{anchorElement:S=void 0}=e,{anchorCorner:q=void 0}=e,{anchorMargin:k={top:0,right:0,bottom:0,left:0}}=e,{maxHeight:_=0}=e,{horizontallyCenteredOnViewport:I=!1}=e,U,b,O={},Z={},y;Mt("SMUI:list:role","menu"),Mt("SMUI:list:item:role","menuitem");const M=ys;Un(()=>(n(8,b=new by({addClass:G,removeClass:T,hasClass:R,hasAnchor:()=>!!S,notifyClose:()=>{n(0,v=p),v||gt(U,"SMUIMenuSurface:closed",void 0,void 0,!0)},notifyClosing:()=>{n(0,v=p),v||gt(U,"SMUIMenuSurface:closing",void 0,void 0,!0)},notifyOpen:()=>{n(0,v=!0),gt(U,"SMUIMenuSurface:opened",void 0,void 0,!0)},isElementInContainer:le=>U.contains(le),isRtl:()=>getComputedStyle(U).getPropertyValue("direction")==="rtl",setTransformOrigin:le=>{const it=`${DL(window,"transform")}-origin`;n(10,Z[it]=le,Z)},isFocused:()=>document.activeElement===U,saveFocus:()=>{var le;y=(le=document.activeElement)!==null&&le!==void 0?le:void 0},restoreFocus:()=>{U.contains(document.activeElement)&&y&&"focus"in y&&y.focus()},getInnerDimensions:()=>({width:U.offsetWidth,height:U.offsetHeight}),getAnchorDimensions:()=>S?S.getBoundingClientRect():null,getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:le=>{n(10,Z.left="left"in le?`${le.left}px`:"",Z),n(10,Z.right="right"in le?`${le.right}px`:"",Z),n(10,Z.top="top"in le?`${le.top}px`:"",Z),n(10,Z.bottom="bottom"in le?`${le.bottom}px`:"",Z)},setMaxHeight:le=>{n(10,Z.maxHeight=le,Z)}})),gt(U,"SMUIMenuSurface:mount",{get open(){return v},set open(le){n(0,v=le)},closeProgrammatic:C}),b.init(),()=>{var le;const it=b.isHoistedElement;b.destroy(),it&&((le=U.parentNode)===null||le===void 0||le.removeChild(U))})),Ji(()=>{var W;m&&U&&((W=U.parentElement)===null||W===void 0||W.classList.remove("mdc-menu-surface--anchor"))});function R(W){return W in O?O[W]:ct().classList.contains(W)}function G(W){O[W]||n(9,O[W]=!0,O)}function T(W){(!(W in O)||O[W])&&n(9,O[W]=!1,O)}function C(W){b.close(W),n(0,v=!1)}function z(){return v}function V(W){n(0,v=W)}function K(W,le){return b.setAbsolutePosition(W,le)}function fe(W){return b.setIsHoisted(W)}function He(){return b.isFixed()}function ct(){return U}const be=W=>b&&v&&b.handleBodyClick(W);function pe(W){de[W?"unshift":"push"](()=>{U=W,n(7,U)})}const ve=W=>b&&b.handleKeydown(W);return t.$$set=W=>{e=x(x({},e),Ke(W)),n(12,r=ne(e,i)),"use"in W&&n(1,h=W.use),"class"in W&&n(2,d=W.class),"style"in W&&n(3,f=W.style),"static"in W&&n(4,p=W.static),"anchor"in W&&n(14,m=W.anchor),"fixed"in W&&n(5,g=W.fixed),"open"in W&&n(0,v=W.open),"fullWidth"in W&&n(6,A=W.fullWidth),"quickOpen"in W&&n(15,w=W.quickOpen),"anchorElement"in W&&n(13,S=W.anchorElement),"anchorCorner"in W&&n(16,q=W.anchorCorner),"anchorMargin"in W&&n(17,k=W.anchorMargin),"maxHeight"in W&&n(18,_=W.maxHeight),"horizontallyCenteredOnViewport"in W&&n(19,I=W.horizontallyCenteredOnViewport),"$$scope"in W&&n(29,o=W.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&469778560&&U&&m&&!(n(26,a=U.parentElement)===null||a===void 0?void 0:a.classList.contains("mdc-menu-surface--anchor"))&&(n(27,l=U.parentElement)===null||l===void 0||l.classList.add("mdc-menu-surface--anchor"),n(13,S=n(28,c=U.parentElement)!==null&&c!==void 0?c:void 0)),t.$$.dirty[0]&257&&b&&b.isOpen()!==v&&(v?b.open():b.close()),t.$$.dirty[0]&33024&&b&&b.setQuickOpen(w),t.$$.dirty[0]&288&&b&&b.setFixedPosition(g),t.$$.dirty[0]&262400&&b&&_>0&&b.setMaxHeight(_),t.$$.dirty[0]&524544&&b&&b.setIsHorizontallyCenteredOnViewport(I),t.$$.dirty[0]&65792&&b&&q!=null&&(typeof q=="string"?b.setAnchorCorner(M[q]):b.setAnchorCorner(q)),t.$$.dirty[0]&131328&&b&&b.setAnchorMargin(k)},[v,h,d,f,p,g,A,U,b,O,Z,u,r,S,m,w,q,k,_,I,z,V,K,fe,He,ct,a,l,c,o,s,be,pe,ve]}class BL extends Qe{constructor(e){super();Xe(this,e,VL,jL,We,{use:1,class:2,style:3,static:4,anchor:14,fixed:5,open:0,fullWidth:6,quickOpen:15,anchorElement:13,anchorCorner:16,anchorMargin:17,maxHeight:18,horizontallyCenteredOnViewport:19,isOpen:20,setOpen:21,setAbsolutePosition:22,setIsHoisted:23,isFixed:24,getElement:25},null,[-1,-1])}get isOpen(){return this.$$.ctx[20]}get setOpen(){return this.$$.ctx[21]}get setAbsolutePosition(){return this.$$.ctx[22]}get setIsHoisted(){return this.$$.ctx[23]}get isFixed(){return this.$$.ctx[24]}get getElement(){return this.$$.ctx[25]}}function HL(t){let e;const n=t[16].default,i=Ee(n,t,t[21],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&2097152)&&we(i,n,r,r[21],e?Ie(n,r[21],s,null):Te(r[21]),null)},i(r){e||(F(i,r),e=!0)},o(r){j(i,r),e=!1},d(r){i&&i.d(r)}}}function qL(t){let e,n,i;const r=[{use:t[5]},{class:Ce({[t[1]]:!0,"mdc-menu":!0})},t[9]];function s(a){t[18](a)}let o={$$slots:{default:[HL]},$$scope:{ctx:t}};for(let a=0;a<r.length;a+=1)o=x(o,r[a]);return t[0]!==void 0&&(o.open=t[0]),e=new BL({props:o}),t[17](e),de.push(()=>Ii(e,"open",s)),e.$on("SMUIMenuSurface:mount",t[7]),e.$on("SMUIList:mount",t[8]),e.$on("SMUIMenuSurface:opened",t[19]),e.$on("keydown",t[6]),e.$on("SMUIList:action",t[20]),{c(){yt(e.$$.fragment)},l(a){xt(e.$$.fragment,a)},m(a,l){dt(e,a,l),i=!0},p(a,[l]){const c=l&546?Re(r,[l&32&&{use:a[5]},l&2&&{class:Ce({[a[1]]:!0,"mdc-menu":!0})},l&512&&ht(a[9])]):{};l&2097152&&(c.$$scope={dirty:l,ctx:a}),!n&&l&1&&(n=!0,c.open=a[0],Ei(()=>n=!1)),e.$set(c)},i(a){i||(F(e.$$.fragment,a),i=!0)},o(a){j(e.$$.fragment,a),i=!1},d(a){t[17](null),ft(e,a)}}}function WL(t,e,n){let i;const r=["use","class","open","isOpen","setOpen","setDefaultFocusState","getSelectedIndex","getElement"];let s=ne(e,r),{$$slots:o={},$$scope:a}=e;const{closest:l}=Ad,c=tt(Me());let{use:u=[]}=e,{class:h=""}=e,{open:d=!1}=e,f,p,m,g;Un(()=>(n(3,p=new xL({addClassToElementAtIndex:(y,M)=>{g.addClassForElementIndex(y,M)},removeClassFromElementAtIndex:(y,M)=>{g.removeClassForElementIndex(y,M)},addAttributeToElementAtIndex:(y,M,R)=>{g.setAttributeForElementIndex(y,M,R)},removeAttributeFromElementAtIndex:(y,M)=>{g.removeAttributeForElementIndex(y,M)},getAttributeFromElementAtIndex:(y,M)=>g.getAttributeFromElementIndex(y,M),elementContainsClass:(y,M)=>y.classList.contains(M),closeSurface:y=>m.closeProgrammatic(y),getElementIndex:y=>g.getOrderedList().map(M=>M.element).indexOf(y),notifySelected:y=>gt(I(),"SMUIMenu:selected",{index:y.index,item:g.getOrderedList()[y.index].element},void 0,!0),getMenuItemCount:()=>g.items.length,focusItemAtIndex:y=>g.focusItemAtIndex(y),focusListRoot:()=>"focus"in g.element&&g.element.focus(),isSelectableItemAtIndex:y=>!!l(g.getOrderedList()[y].element,`.${Es.MENU_SELECTION_GROUP}`),getSelectedSiblingOfItemAtIndex:y=>{const M=g.getOrderedList(),R=l(M[y].element,`.${Es.MENU_SELECTION_GROUP}`),G=R==null?void 0:R.querySelector(`.${Es.MENU_SELECTED_LIST_ITEM}`);return G?M.map(T=>T.element).indexOf(G):-1}})),gt(I(),"SMUIMenu:mount",p),p.init(),()=>{p.destroy()}));function v(y){p&&p.handleKeydown(y)}function A(y){m||(m=y.detail)}function w(y){g||n(4,g=y.detail)}function S(){return d}function q(y){n(0,d=y)}function k(y){p.setDefaultFocusState(y)}function _(){return p.getSelectedIndex()}function I(){return f.getElement()}function U(y){de[y?"unshift":"push"](()=>{f=y,n(2,f)})}function b(y){d=y,n(0,d)}const O=()=>p&&p.handleMenuSurfaceOpened(),Z=y=>p&&p.handleItemAction(g.getOrderedList()[y.detail.index].element);return t.$$set=y=>{e=x(x({},e),Ke(y)),n(9,s=ne(e,r)),"use"in y&&n(10,u=y.use),"class"in y&&n(1,h=y.class),"open"in y&&n(0,d=y.open),"$$scope"in y&&n(21,a=y.$$scope)},t.$$.update=()=>{t.$$.dirty&1024&&n(5,i=[c,...u])},[d,h,f,p,g,i,v,A,w,s,u,S,q,k,_,I,o,U,b,O,Z,a]}class Uj extends Qe{constructor(e){super();Xe(this,e,WL,qL,We,{use:10,class:1,open:0,isOpen:11,setOpen:12,setDefaultFocusState:13,getSelectedIndex:14,getElement:15})}get isOpen(){return this.$$.ctx[11]}get setOpen(){return this.$$.ctx[12]}get setDefaultFocusState(){return this.$$.ctx[13]}get getSelectedIndex(){return this.$$.ctx[14]}get getElement(){return this.$$.ctx[15]}}function GL(t){let e;const n=t[37].default,i=Ee(n,t,t[43],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[1]&4096)&&we(i,n,r,r[43],e?Ie(n,r[43],s,null):Te(r[43]),null)},i(r){e||(F(i,r),e=!0)},o(r){j(i,r),e=!1},d(r){i&&i.d(r)}}}function zL(t){let e,n,i;const r=[{use:[t[17],...t[0]]},{class:Ce({[t[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":t[2],"mdc-deprecated-list--dense":t[3],"mdc-deprecated-list--textual-list":t[4],"mdc-deprecated-list--avatar-list":t[5]||t[18],"mdc-deprecated-list--icon-list":t[6],"mdc-deprecated-list--image-list":t[7],"mdc-deprecated-list--thumbnail-list":t[8],"mdc-deprecated-list--video-list":t[9],"mdc-deprecated-list--two-line":t[10],"smui-list--three-line":t[11]&&!t[10]})},{role:t[15]},t[23]];var s=t[12];function o(a){let l={$$slots:{default:[GL]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=x(l,r[c]);return{props:l}}return s&&(e=new s(o(t)),t[38](e),e.$on("keydown",t[39]),e.$on("focusin",t[40]),e.$on("focusout",t[41]),e.$on("click",t[42]),e.$on("SMUIListItem:mount",t[19]),e.$on("SMUIListItem:unmount",t[20]),e.$on("SMUI:action",t[21])),{c(){e&&yt(e.$$.fragment),n=At()},l(a){e&&xt(e.$$.fragment,a),n=At()},m(a,l){e&&dt(e,a,l),ie(a,n,l),i=!0},p(a,l){const c=l[0]&8818687?Re(r,[l[0]&131073&&{use:[a[17],...a[0]]},l[0]&266238&&{class:Ce({[a[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":a[2],"mdc-deprecated-list--dense":a[3],"mdc-deprecated-list--textual-list":a[4],"mdc-deprecated-list--avatar-list":a[5]||a[18],"mdc-deprecated-list--icon-list":a[6],"mdc-deprecated-list--image-list":a[7],"mdc-deprecated-list--thumbnail-list":a[8],"mdc-deprecated-list--video-list":a[9],"mdc-deprecated-list--two-line":a[10],"smui-list--three-line":a[11]&&!a[10]})},l[0]&32768&&{role:a[15]},l[0]&8388608&&ht(a[23])]):{};if(l[1]&4096&&(c.$$scope={dirty:l,ctx:a}),s!==(s=a[12])){if(e){tn();const u=e;j(u.$$.fragment,1,0,()=>{ft(u,1)}),nn()}s?(e=new s(o(a)),a[38](e),e.$on("keydown",a[39]),e.$on("focusin",a[40]),e.$on("focusout",a[41]),e.$on("click",a[42]),e.$on("SMUIListItem:mount",a[19]),e.$on("SMUIListItem:unmount",a[20]),e.$on("SMUI:action",a[21]),yt(e.$$.fragment),F(e.$$.fragment,1),dt(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(a){i||(e&&F(e.$$.fragment,a),i=!0)},o(a){e&&j(e.$$.fragment,a),i=!1},d(a){t[38](null),a&&H(n),e&&ft(e,a)}}}function KL(t,e,n){const i=["use","class","nonInteractive","dense","textualList","avatarList","iconList","imageList","thumbnailList","videoList","twoLine","threeLine","vertical","wrapFocus","singleSelection","selectedIndex","radioList","checkList","hasTypeahead","component","layout","setEnabled","getTypeaheadInProgress","getSelectedIndex","getFocusedItemIndex","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e;var a;const{closest:l,matches:c}=Ad,u=tt(Me());let{use:h=[]}=e,{class:d=""}=e,{nonInteractive:f=!1}=e,{dense:p=!1}=e,{textualList:m=!1}=e,{avatarList:g=!1}=e,{iconList:v=!1}=e,{imageList:A=!1}=e,{thumbnailList:w=!1}=e,{videoList:S=!1}=e,{twoLine:q=!1}=e,{threeLine:k=!1}=e,{vertical:_=!0}=e,{wrapFocus:I=(a=bn("SMUI:list:wrapFocus"))!==null&&a!==void 0?a:!1}=e,{singleSelection:U=!1}=e,{selectedIndex:b=-1}=e,{radioList:O=!1}=e,{checkList:Z=!1}=e,{hasTypeahead:y=!1}=e,M,R,G=[],T=bn("SMUI:list:role"),C=bn("SMUI:list:nav");const z=new WeakMap;let V=bn("SMUI:dialog:selection"),K=bn("SMUI:addLayoutListener"),fe,{component:He=C?rO:sO}=e;Mt("SMUI:list:nonInteractive",f),Mt("SMUI:separator:context","list"),T||(U?(T="listbox",Mt("SMUI:list:item:role","option")):O?(T="radiogroup",Mt("SMUI:list:item:role","radio")):Z?(T="group",Mt("SMUI:list:item:role","checkbox")):(T="list",Mt("SMUI:list:item:role",void 0))),K&&(fe=K(Fn)),Un(()=>{n(13,R=new NL({addClassForElementIndex:it,focusItemAtIndex:W,getAttributeForElementIndex:(te,ee)=>{var Je,Yi;return(Yi=(Je=ve()[te])===null||Je===void 0?void 0:Je.getAttr(ee))!==null&&Yi!==void 0?Yi:null},getFocusedElementIndex:()=>document.activeElement?ve().map(te=>te.element).indexOf(document.activeElement):-1,getListItemCount:()=>G.length,getPrimaryTextAtIndex:rt,hasCheckboxAtIndex:te=>{var ee,Je;return(Je=(ee=ve()[te])===null||ee===void 0?void 0:ee.hasCheckbox)!==null&&Je!==void 0?Je:!1},hasRadioAtIndex:te=>{var ee,Je;return(Je=(ee=ve()[te])===null||ee===void 0?void 0:ee.hasRadio)!==null&&Je!==void 0?Je:!1},isCheckboxCheckedAtIndex:te=>{var ee;const Je=ve()[te];return(ee=(Je==null?void 0:Je.hasCheckbox)&&Je.checked)!==null&&ee!==void 0?ee:!1},isFocusInsideList:()=>M!=null&&Xn()!==document.activeElement&&Xn().contains(document.activeElement),isRootFocused:()=>M!=null&&document.activeElement===Xn(),listItemAtIndexHasClass:le,notifyAction:te=>{n(24,b=te),M!=null&&gt(Xn(),"SMUIList:action",{index:te},void 0,!0)},removeClassForElementIndex:Zt,setAttributeForElementIndex:Lt,setCheckedCheckboxOrRadioAtIndex:(te,ee)=>{ve()[te].checked=ee},setTabIndexForListItemChildren:(te,ee)=>{const Je=ve()[te],Yi="button:not(:disabled), a";Array.prototype.forEach.call(Je.element.querySelectorAll(Yi),cu=>{cu.setAttribute("tabindex",ee)})}}));const N={get element(){return Xn()},get items(){return G},get typeaheadInProgress(){return R.isTypeaheadInProgress()},typeaheadMatchItem(te,ee){return R.typeaheadMatchItem(te,ee,!0)},getOrderedList:ve,focusItemAtIndex:W,addClassForElementIndex:it,removeClassForElementIndex:Zt,setAttributeForElementIndex:Lt,removeAttributeForElementIndex:D,getAttributeFromElementIndex:he,getPrimaryTextAtIndex:rt};return gt(Xn(),"SMUIList:mount",N),R.init(),()=>{R.destroy()}}),Ji(()=>{fe&&fe()});function ct(N){G.push(N.detail),z.set(N.detail.element,N.detail),U&&N.detail.selected&&n(24,b=$t(N.detail.element)),N.stopPropagation()}function be(N){var te;const ee=(te=N.detail&&G.indexOf(N.detail))!==null&&te!==void 0?te:-1;ee!==-1&&(G.splice(ee,1),G=G,z.delete(N.detail.element)),N.stopPropagation()}function pe(N){if(O||Z){const te=$t(N.target);if(te!==-1){const ee=ve()[te];ee&&(O&&!ee.checked||Z)&&(ee.checked=!ee.checked,ee.activateRipple(),window.requestAnimationFrame(()=>{ee.deactivateRipple()}))}}}function ve(){return M==null?[]:[...Xn().children].map(N=>z.get(N)).filter(N=>N&&N._smui_list_item_accessor)}function W(N){const te=ve()[N];te&&"focus"in te.element&&te.element.focus()}function le(N,te){var ee;const Je=ve()[N];return(ee=Je&&Je.hasClass(te))!==null&&ee!==void 0?ee:!1}function it(N,te){const ee=ve()[N];ee&&ee.addClass(te)}function Zt(N,te){const ee=ve()[N];ee&&ee.removeClass(te)}function Lt(N,te,ee){const Je=ve()[N];Je&&Je.addAttr(te,ee)}function D(N,te){const ee=ve()[N];ee&&ee.removeAttr(te)}function he(N,te){const ee=ve()[N];return ee?ee.getAttr(te):null}function rt(N){var te;const ee=ve()[N];return(te=ee&&ee.getPrimaryText())!==null&&te!==void 0?te:""}function $t(N){const te=l(N,".mdc-deprecated-list-item, .mdc-deprecated-list");return te&&c(te,".mdc-deprecated-list-item")?ve().map(ee=>ee==null?void 0:ee.element).indexOf(te):-1}function Fn(){return R.layout()}function yi(N,te){return R.setEnabled(N,te)}function su(){return R.isTypeaheadInProgress()}function zs(){return R.getSelectedIndex()}function ka(){return R.getFocusedItemIndex()}function Xn(){return M.getElement()}function ou(N){de[N?"unshift":"push"](()=>{M=N,n(14,M)})}const Ra=N=>R&&R.handleKeydown(N,N.target.classList.contains("mdc-deprecated-list-item"),$t(N.target)),qr=N=>R&&R.handleFocusIn($t(N.target)),au=N=>R&&R.handleFocusOut($t(N.target)),lu=N=>R&&R.handleClick($t(N.target),!c(N.target,'input[type="checkbox"], input[type="radio"]'));return t.$$set=N=>{e=x(x({},e),Ke(N)),n(23,r=ne(e,i)),"use"in N&&n(0,h=N.use),"class"in N&&n(1,d=N.class),"nonInteractive"in N&&n(2,f=N.nonInteractive),"dense"in N&&n(3,p=N.dense),"textualList"in N&&n(4,m=N.textualList),"avatarList"in N&&n(5,g=N.avatarList),"iconList"in N&&n(6,v=N.iconList),"imageList"in N&&n(7,A=N.imageList),"thumbnailList"in N&&n(8,w=N.thumbnailList),"videoList"in N&&n(9,S=N.videoList),"twoLine"in N&&n(10,q=N.twoLine),"threeLine"in N&&n(11,k=N.threeLine),"vertical"in N&&n(25,_=N.vertical),"wrapFocus"in N&&n(26,I=N.wrapFocus),"singleSelection"in N&&n(27,U=N.singleSelection),"selectedIndex"in N&&n(24,b=N.selectedIndex),"radioList"in N&&n(28,O=N.radioList),"checkList"in N&&n(29,Z=N.checkList),"hasTypeahead"in N&&n(30,y=N.hasTypeahead),"component"in N&&n(12,He=N.component),"$$scope"in N&&n(43,o=N.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&33562624&&R&&R.setVerticalOrientation(_),t.$$.dirty[0]&67117056&&R&&R.setWrapFocus(I),t.$$.dirty[0]&1073750016&&R&&R.setHasTypeahead(y),t.$$.dirty[0]&134225920&&R&&R.setSingleSelection(U),t.$$.dirty[0]&151003136&&R&&U&&zs()!==b&&R.setSelectedIndex(b)},[h,d,f,p,m,g,v,A,w,S,q,k,He,R,M,T,c,u,V,ct,be,pe,$t,r,b,_,I,U,O,Z,y,Fn,yi,su,zs,ka,Xn,s,ou,Ra,qr,au,lu,o]}class jj extends Qe{constructor(e){super();Xe(this,e,KL,zL,We,{use:0,class:1,nonInteractive:2,dense:3,textualList:4,avatarList:5,iconList:6,imageList:7,thumbnailList:8,videoList:9,twoLine:10,threeLine:11,vertical:25,wrapFocus:26,singleSelection:27,selectedIndex:24,radioList:28,checkList:29,hasTypeahead:30,component:12,layout:31,setEnabled:32,getTypeaheadInProgress:33,getSelectedIndex:34,getFocusedItemIndex:35,getElement:36},null,[-1,-1])}get layout(){return this.$$.ctx[31]}get setEnabled(){return this.$$.ctx[32]}get getTypeaheadInProgress(){return this.$$.ctx[33]}get getSelectedIndex(){return this.$$.ctx[34]}get getFocusedItemIndex(){return this.$$.ctx[35]}get getElement(){return this.$$.ctx[36]}}function wy(t){let e;return{c(){e=Le("span"),this.h()},l(n){e=De(n,"SPAN",{class:!0}),Pe(e).forEach(H),this.h()},h(){xn(e,"class","mdc-deprecated-list-item__ripple")},m(n,i){ie(n,e,i)},d(n){n&&H(e)}}}function XL(t){let e,n,i=t[6]&&wy();const r=t[32].default,s=Ee(r,t,t[35],null);return{c(){i&&i.c(),e=At(),s&&s.c()},l(o){i&&i.l(o),e=At(),s&&s.l(o)},m(o,a){i&&i.m(o,a),ie(o,e,a),s&&s.m(o,a),n=!0},p(o,a){o[6]?i||(i=wy(),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),s&&s.p&&(!n||a[1]&16)&&we(s,r,o,o[35],n?Ie(r,o[35],a,null):Te(o[35]),null)},i(o){n||(F(s,o),n=!0)},o(o){j(s,o),n=!1},d(o){i&&i.d(o),o&&H(e),s&&s.d(o)}}}function QL(t){let e,n,i;const r=[{use:[...t[5]?[]:[[vs,{ripple:!t[13],unbounded:!1,color:(t[7]||t[0])&&t[4]==null?"primary":t[4],disabled:t[9],addClass:t[21],removeClass:t[22],addStyle:t[23]}]],t[19],...t[1]]},{class:Ce(st({[t[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":t[7],"mdc-deprecated-list-item--selected":t[0],"mdc-deprecated-list-item--disabled":t[9],"mdc-menu-item--selected":!t[20]&&t[8]==="menuitem"&&t[0],"smui-menu-item--non-interactive":t[5]},t[15]))},{style:Object.entries(t[16]).map(Ty).concat([t[3]]).join(" ")},t[20]&&t[7]?{"aria-current":"page"}:{},t[20]?{}:{role:t[8]},!t[20]&&t[8]==="option"?{"aria-selected":t[0]?"true":"false"}:{},!t[20]&&(t[8]==="radio"||t[8]==="checkbox")?{"aria-checked":t[13]&&t[13].checked?"true":"false"}:{},t[20]?{}:{"aria-disabled":t[9]?"true":"false"},{"data-menu-item-skip-restore-focus":t[10]||void 0},{tabindex:t[18]},{href:t[11]},t[17],t[27]];var s=t[12];function o(a){let l={$$slots:{default:[XL]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=x(l,r[c]);return{props:l}}return s&&(e=new s(o(t)),t[33](e),e.$on("click",t[24]),e.$on("keydown",t[25]),e.$on("SMUIGenericInput:mount",t[26]),e.$on("SMUIGenericInput:unmount",t[34])),{c(){e&&yt(e.$$.fragment),n=At()},l(a){e&&xt(e.$$.fragment,a),n=At()},m(a,l){e&&dt(e,a,l),ie(a,n,l),i=!0},p(a,l){const c=l[0]&150974399?Re(r,[l[0]&15213235&&{use:[...a[5]?[]:[[vs,{ripple:!a[13],unbounded:!1,color:(a[7]||a[0])&&a[4]==null?"primary":a[4],disabled:a[9],addClass:a[21],removeClass:a[22],addStyle:a[23]}]],a[19],...a[1]]},l[0]&1082277&&{class:Ce(st({[a[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":a[7],"mdc-deprecated-list-item--selected":a[0],"mdc-deprecated-list-item--disabled":a[9],"mdc-menu-item--selected":!a[20]&&a[8]==="menuitem"&&a[0],"smui-menu-item--non-interactive":a[5]},a[15]))},l[0]&65544&&{style:Object.entries(a[16]).map(Ty).concat([a[3]]).join(" ")},l[0]&1048704&&ht(a[20]&&a[7]?{"aria-current":"page"}:{}),l[0]&1048832&&ht(a[20]?{}:{role:a[8]}),l[0]&1048833&&ht(!a[20]&&a[8]==="option"?{"aria-selected":a[0]?"true":"false"}:{}),l[0]&1057024&&ht(!a[20]&&(a[8]==="radio"||a[8]==="checkbox")?{"aria-checked":a[13]&&a[13].checked?"true":"false"}:{}),l[0]&1049088&&ht(a[20]?{}:{"aria-disabled":a[9]?"true":"false"}),l[0]&1024&&{"data-menu-item-skip-restore-focus":a[10]||void 0},l[0]&262144&&{tabindex:a[18]},l[0]&2048&&{href:a[11]},l[0]&131072&&ht(a[17]),l[0]&134217728&&ht(a[27])]):{};if(l[0]&64|l[1]&16&&(c.$$scope={dirty:l,ctx:a}),s!==(s=a[12])){if(e){tn();const u=e;j(u.$$.fragment,1,0,()=>{ft(u,1)}),nn()}s?(e=new s(o(a)),a[33](e),e.$on("click",a[24]),e.$on("keydown",a[25]),e.$on("SMUIGenericInput:mount",a[26]),e.$on("SMUIGenericInput:unmount",a[34]),yt(e.$$.fragment),F(e.$$.fragment,1),dt(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(a){i||(e&&F(e.$$.fragment,a),i=!0)},o(a){e&&j(e.$$.fragment,a),i=!1},d(a){t[33](null),a&&H(n),e&&ft(e,a)}}}let YL=0;const Ty=([t,e])=>`${t}: ${e};`;function JL(t,e,n){let i;const r=["use","class","style","color","nonInteractive","ripple","activated","role","selected","disabled","skipRestoreFocus","tabindex","inputId","href","component","getPrimaryText","getElement"];let s=ne(e,r),{$$slots:o={},$$scope:a}=e;var l;const c=tt(Me());let u=()=>{};function h(D){return D===u}let{use:d=[]}=e,{class:f=""}=e,{style:p=""}=e,{color:m=void 0}=e,{nonInteractive:g=(l=bn("SMUI:list:nonInteractive"))!==null&&l!==void 0?l:!1}=e;Mt("SMUI:list:nonInteractive",void 0);let{ripple:v=!g}=e,{activated:A=!1}=e,{role:w=bn("SMUI:list:item:role")}=e;Mt("SMUI:list:item:role",void 0);let{selected:S=!1}=e,{disabled:q=!1}=e,{skipRestoreFocus:k=!1}=e,{tabindex:_=u}=e,{inputId:I="SMUI-form-field-list-"+YL++}=e,{href:U=void 0}=e,b,O={},Z={},y={},M,R,G=bn("SMUI:list:item:nav"),{component:T=G?U?Pv:br:iO}=e;Mt("SMUI:generic:input:props",{id:I}),Mt("SMUI:separator:context",void 0),Un(()=>{if(!S&&!g){let he=!0,rt=b;for(;rt.previousSibling;)if(rt=rt.previousSibling,rt.nodeType===1&&rt.classList.contains("mdc-deprecated-list-item")&&!rt.classList.contains("mdc-deprecated-list-item--disabled")){he=!1;break}he&&(R=window.requestAnimationFrame(be))}const D={_smui_list_item_accessor:!0,get element(){return it()},get selected(){return S},set selected(he){n(0,S=he)},hasClass:C,addClass:z,removeClass:V,getAttr:fe,addAttr:He,removeAttr:ct,getPrimaryText:le,get checked(){var he;return(he=M&&M.checked)!==null&&he!==void 0?he:!1},set checked(he){M&&n(13,M.checked=!!he,M)},get hasCheckbox(){return!!(M&&"_smui_checkbox_accessor"in M)},get hasRadio(){return!!(M&&"_smui_radio_accessor"in M)},activateRipple(){M&&M.activateRipple()},deactivateRipple(){M&&M.deactivateRipple()},getValue(){return s.value}};return gt(it(),"SMUIListItem:mount",D),()=>{gt(it(),"SMUIListItem:unmount",D)}}),Ji(()=>{R&&window.cancelAnimationFrame(R)});function C(D){return D in O?O[D]:it().classList.contains(D)}function z(D){O[D]||n(15,O[D]=!0,O)}function V(D){(!(D in O)||O[D])&&n(15,O[D]=!1,O)}function K(D,he){Z[D]!=he&&(he===""||he==null?(delete Z[D],n(16,Z)):n(16,Z[D]=he,Z))}function fe(D){var he;return D in y?(he=y[D])!==null&&he!==void 0?he:null:it().getAttribute(D)}function He(D,he){y[D]!==he&&n(17,y[D]=he,y)}function ct(D){(!(D in y)||y[D]!=null)&&n(17,y[D]=void 0,y)}function be(){let D=!0,he=b.getElement();for(;he.nextElementSibling;)if(he=he.nextElementSibling,he.nodeType===1&&he.classList.contains("mdc-deprecated-list-item")){const rt=he.attributes.getNamedItem("tabindex");if(rt&&rt.value==="0"){D=!1;break}}D&&n(18,i=0)}function pe(D){q||gt(it(),"SMUI:action",D)}function ve(D){const he=D.key==="Enter",rt=D.key==="Space";(he||rt)&&pe(D)}function W(D){("_smui_checkbox_accessor"in D.detail||"_smui_radio_accessor"in D.detail)&&n(13,M=D.detail)}function le(){var D,he,rt;const $t=it(),Fn=$t.querySelector(".mdc-deprecated-list-item__primary-text");if(Fn)return(D=Fn.textContent)!==null&&D!==void 0?D:"";const yi=$t.querySelector(".mdc-deprecated-list-item__text");return yi?(he=yi.textContent)!==null&&he!==void 0?he:"":(rt=$t.textContent)!==null&&rt!==void 0?rt:""}function it(){return b.getElement()}function Zt(D){de[D?"unshift":"push"](()=>{b=D,n(14,b)})}const Lt=()=>n(13,M=void 0);return t.$$set=D=>{e=x(x({},e),Ke(D)),n(27,s=ne(e,r)),"use"in D&&n(1,d=D.use),"class"in D&&n(2,f=D.class),"style"in D&&n(3,p=D.style),"color"in D&&n(4,m=D.color),"nonInteractive"in D&&n(5,g=D.nonInteractive),"ripple"in D&&n(6,v=D.ripple),"activated"in D&&n(7,A=D.activated),"role"in D&&n(8,w=D.role),"selected"in D&&n(0,S=D.selected),"disabled"in D&&n(9,q=D.disabled),"skipRestoreFocus"in D&&n(10,k=D.skipRestoreFocus),"tabindex"in D&&n(28,_=D.tabindex),"inputId"in D&&n(29,I=D.inputId),"href"in D&&n(11,U=D.href),"component"in D&&n(12,T=D.component),"$$scope"in D&&n(35,a=D.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&268444193&&n(18,i=h(_)?!g&&!q&&(S||M&&M.checked)?0:-1:_)},[S,d,f,p,m,g,v,A,w,q,k,U,T,M,b,O,Z,y,i,c,G,z,V,K,pe,ve,W,s,_,I,le,it,o,Zt,Lt,a]}class ZL extends Qe{constructor(e){super();Xe(this,e,JL,QL,We,{use:1,class:2,style:3,color:4,nonInteractive:5,ripple:6,activated:7,role:8,selected:0,disabled:9,skipRestoreFocus:10,tabindex:28,inputId:29,href:11,component:12,getPrimaryText:30,getElement:31},null,[-1,-1])}get getPrimaryText(){return this.$$.ctx[30]}get getElement(){return this.$$.ctx[31]}}Pt({class:"mdc-deprecated-list-item__text",component:br});Pt({class:"mdc-deprecated-list-item__primary-text",component:br});Pt({class:"mdc-deprecated-list-item__secondary-text",component:br});function $L(t){let e,n,i,r,s,o;const a=t[8].default,l=Ee(a,t,t[7],null);let c=[{class:n=Ce({[t[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":t[4]})},t[5]],u={};for(let h=0;h<c.length;h+=1)u=x(u,c[h]);return{c(){e=Le("span"),l&&l.c(),this.h()},l(h){e=De(h,"SPAN",{class:!0});var d=Pe(e);l&&l.l(d),d.forEach(H),this.h()},h(){ae(e,u)},m(h,d){ie(h,e,d),l&&l.m(e,null),t[9](e),r=!0,s||(o=[se(i=_t.call(null,e,t[0])),se(t[3].call(null,e))],s=!0)},p(h,[d]){l&&l.p&&(!r||d&128)&&we(l,a,h,h[7],r?Ie(a,h[7],d,null):Te(h[7]),null),ae(e,u=Re(c,[(!r||d&2&&n!==(n=Ce({[h[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":h[4]})))&&{class:n},d&32&&h[5]])),i&&ze(i.update)&&d&1&&i.update.call(null,h[0])},i(h){r||(F(l,h),r=!0)},o(h){j(l,h),r=!1},d(h){h&&H(e),l&&l.d(h),t[9](null),s=!1,qe(o)}}}function eM(t,e,n){const i=["use","class","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e;const a=tt(Me());let{use:l=[]}=e,{class:c=""}=e,u,h=bn("SMUI:list:graphic:menu-selection-group");function d(){return u}function f(p){de[p?"unshift":"push"](()=>{u=p,n(2,u)})}return t.$$set=p=>{e=x(x({},e),Ke(p)),n(5,r=ne(e,i)),"use"in p&&n(0,l=p.use),"class"in p&&n(1,c=p.class),"$$scope"in p&&n(7,o=p.$$scope)},[l,c,u,a,h,r,d,o,s,f]}class tM extends Qe{constructor(e){super();Xe(this,e,eM,$L,We,{use:0,class:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}Pt({class:"mdc-deprecated-list-item__meta",component:br});Pt({class:"mdc-deprecated-list-group",component:hi});Pt({class:"mdc-deprecated-list-group__subheader",component:nO});const Vj=ZL,nM=tM;Pt({class:"mdc-menu__selection-group-icon",component:nM});/**
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
 */var Sn={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},iM={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var Cy=function(t){qn(e,t);function e(n){var i=t.call(this,pt(pt({},e.defaultAdapter),n))||this;return i.animationFrame=0,i.animationTimer=0,i}return Object.defineProperty(e,"strings",{get:function(){return iM},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Sn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var n=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(Sn.OPEN),this.adapter.addClass(Sn.ANIMATE),this.runNextAnimationFrame(function(){n.adapter.addClass(Sn.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(Sn.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(Sn.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(Sn.OPENING)||this.adapter.hasClass(Sn.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(Sn.CLOSING)},e.prototype.handleKeydown=function(n){var i=n.keyCode,r=n.key,s=r==="Escape"||i===27;s&&this.close()},e.prototype.handleTransitionEnd=function(n){var i=Sn.OPENING,r=Sn.CLOSING,s=Sn.OPEN,o=Sn.ANIMATE,a=Sn.ROOT,l=this.isElement(n.target)&&this.adapter.elementHasClass(n.target,a);!l||(this.isClosing()?(this.adapter.removeClass(s),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(o),this.adapter.removeClass(i),this.adapter.removeClass(r))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(n){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(n,0)})},e.prototype.isElement=function(n){return Boolean(n.classList)},e}(Jn);/**
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
 */var rM=function(t){qn(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(Cy);function sM(t){let e,n,i,r,s,o;const a=t[15].default,l=Ee(a,t,t[14],null);let c=[{class:n=Ce(st({[t[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":t[2]==="dismissible","mdc-drawer--modal":t[2]==="modal","smui-drawer__absolute":t[2]==="modal"&&!t[3]},t[6]))},t[8]],u={};for(let h=0;h<c.length;h+=1)u=x(u,c[h]);return{c(){e=Le("aside"),l&&l.c(),this.h()},l(h){e=De(h,"ASIDE",{class:!0});var d=Pe(e);l&&l.l(d),d.forEach(H),this.h()},h(){ae(e,u)},m(h,d){ie(h,e,d),l&&l.m(e,null),t[16](e),r=!0,s||(o=[se(i=_t.call(null,e,t[0])),se(t[7].call(null,e)),Ze(e,"keydown",t[17]),Ze(e,"transitionend",t[18])],s=!0)},p(h,[d]){l&&l.p&&(!r||d&16384)&&we(l,a,h,h[14],r?Ie(a,h[14],d,null):Te(h[14]),null),ae(e,u=Re(c,[(!r||d&78&&n!==(n=Ce(st({[h[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":h[2]==="dismissible","mdc-drawer--modal":h[2]==="modal","smui-drawer__absolute":h[2]==="modal"&&!h[3]},h[6]))))&&{class:n},d&256&&h[8]])),i&&ze(i.update)&&d&1&&i.update.call(null,h[0])},i(h){r||(F(l,h),r=!0)},o(h){j(l,h),r=!1},d(h){h&&H(e),l&&l.d(h),t[16](null),s=!1,qe(o)}}}function oM(t,e,n){const i=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e;const{FocusTrap:a}=IR,l=tt(Me());let{use:c=[]}=e,{class:u=""}=e,{variant:h=void 0}=e,{open:d=!1}=e,{fixed:f=!0}=e,p,m,g={},v=null,A,w=!1;Mt("SMUI:list:nav",!0),Mt("SMUI:list:item:nav",!0),Mt("SMUI:list:wrapFocus",!0);let S=h;Un(()=>{A=new a(p,{skipInitialFocus:!0}),n(4,m=q()),m&&m.init()}),Ji(()=>{m&&m.destroy(),w&&w.removeEventListener("SMUIDrawerScrim:click",U)});function q(){var G,T;w&&w.removeEventListener("SMUIDrawerScrim:click",U),h==="modal"&&(w=(T=(G=p.parentNode)===null||G===void 0?void 0:G.querySelector(".mdc-drawer-scrim"))!==null&&T!==void 0?T:!1,w&&w.addEventListener("SMUIDrawerScrim:click",U));const C=h==="dismissible"?Cy:h==="modal"?rM:void 0;return C?new C({addClass:_,removeClass:I,hasClass:k,elementHasClass:(z,V)=>z.classList.contains(V),saveFocus:()=>v=document.activeElement,restoreFocus:()=>{v&&"focus"in v&&p.contains(document.activeElement)&&v.focus()},focusActiveNavigationItem:()=>{const z=p.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");z&&z.focus()},notifyClose:()=>{n(9,d=!1),gt(p,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{n(9,d=!0),gt(p,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>A.trapFocus(),releaseFocus:()=>A.releaseFocus()}):void 0}function k(G){return G in g?g[G]:Z().classList.contains(G)}function _(G){g[G]||n(6,g[G]=!0,g)}function I(G){(!(G in g)||g[G])&&n(6,g[G]=!1,g)}function U(){m&&"handleScrimClick"in m&&m.handleScrimClick()}function b(G){n(9,d=G)}function O(){return d}function Z(){return p}function y(G){de[G?"unshift":"push"](()=>{p=G,n(5,p)})}const M=G=>m&&m.handleKeydown(G),R=G=>m&&m.handleTransitionEnd(G);return t.$$set=G=>{e=x(x({},e),Ke(G)),n(8,r=ne(e,i)),"use"in G&&n(0,c=G.use),"class"in G&&n(1,u=G.class),"variant"in G&&n(2,h=G.variant),"open"in G&&n(9,d=G.open),"fixed"in G&&n(3,f=G.fixed),"$$scope"in G&&n(14,o=G.$$scope)},t.$$.update=()=>{t.$$.dirty&8212&&S!==h&&(n(13,S=h),m&&m.destroy(),n(6,g={}),n(4,m=q()),m&&m.init()),t.$$.dirty&528&&m&&m.isOpen()!==d&&(d?m.open():m.close())},[c,u,h,f,m,p,g,l,r,d,b,O,Z,S,o,s,y,M,R]}class Bj extends Qe{constructor(e){super();Xe(this,e,oM,sM,We,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}var Hj=Pt({class:"mdc-drawer-app-content",component:hi}),qj=Pt({class:"mdc-drawer__content",component:hi});Pt({class:"mdc-drawer__header",component:hi});Pt({class:"mdc-drawer__title",component:eO});Pt({class:"mdc-drawer__subtitle",component:tO});function aM(t){let e,n,i,r,s,o;const a=t[9].default,l=Ee(a,t,t[8],null);let c=[{class:n=Ce({[t[1]]:!0,"mdc-card":!0,"mdc-card--outlined":t[2]==="outlined","smui-card--padded":t[3]})},t[6]],u={};for(let h=0;h<c.length;h+=1)u=x(u,c[h]);return{c(){e=Le("div"),l&&l.c(),this.h()},l(h){e=De(h,"DIV",{class:!0});var d=Pe(e);l&&l.l(d),d.forEach(H),this.h()},h(){ae(e,u)},m(h,d){ie(h,e,d),l&&l.m(e,null),t[10](e),r=!0,s||(o=[se(i=_t.call(null,e,t[0])),se(t[5].call(null,e))],s=!0)},p(h,[d]){l&&l.p&&(!r||d&256)&&we(l,a,h,h[8],r?Ie(a,h[8],d,null):Te(h[8]),null),ae(e,u=Re(c,[(!r||d&14&&n!==(n=Ce({[h[1]]:!0,"mdc-card":!0,"mdc-card--outlined":h[2]==="outlined","smui-card--padded":h[3]})))&&{class:n},d&64&&h[6]])),i&&ze(i.update)&&d&1&&i.update.call(null,h[0])},i(h){r||(F(l,h),r=!0)},o(h){j(l,h),r=!1},d(h){h&&H(e),l&&l.d(h),t[10](null),s=!1,qe(o)}}}function lM(t,e,n){const i=["use","class","variant","padded","getElement"];let r=ne(e,i),{$$slots:s={},$$scope:o}=e;const a=tt(Me());let{use:l=[]}=e,{class:c=""}=e,{variant:u="raised"}=e,{padded:h=!1}=e,d;function f(){return d}function p(m){de[m?"unshift":"push"](()=>{d=m,n(4,d)})}return t.$$set=m=>{e=x(x({},e),Ke(m)),n(6,r=ne(e,i)),"use"in m&&n(0,l=m.use),"class"in m&&n(1,c=m.class),"variant"in m&&n(2,u=m.variant),"padded"in m&&n(3,h=m.padded),"$$scope"in m&&n(8,o=m.$$scope)},[l,c,u,h,d,a,r,f,o,s,p]}class Wj extends Qe{constructor(e){super();Xe(this,e,lM,aM,We,{use:0,class:1,variant:2,padded:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}Pt({class:"smui-card__content",component:hi});Pt({class:"mdc-card__media-content",component:hi});Pt({class:"mdc-card__action-buttons",component:hi});Pt({class:"mdc-card__action-icons",component:hi});const Sy="@firebase/database",Ay="0.12.4";/**
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
 */let ky="";function cM(t){ky=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),jt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Js(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Qn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new uM(e)}}catch{}return new hM},wr=Ry("localStorage"),Ld=Ry("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new Ba("@firebase/database"),dM=function(){let t=1;return function(){return t++}}(),Oy=function(t){const e=O0(t),n=new S0;n.update(e);const i=n.digest();return _u.encodeByteArray(i)},Xo=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Xo.apply(null,i):typeof i=="object"?e+=jt(i):e+=i,e+=" "}return e};let Tr=null,Ly=!0;const fM=function(t,e){B(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ts.logLevel=Ne.VERBOSE,Tr=Ts.log.bind(Ts),e&&Ld.set("logging_enabled",!0)):typeof t=="function"?Tr=t:(Tr=null,Ld.remove("logging_enabled"))},Jt=function(...t){if(Ly===!0&&(Ly=!1,Tr===null&&Ld.get("logging_enabled")===!0&&fM(!0)),Tr){const e=Xo.apply(null,t);Tr(e)}},Qo=function(t){return function(...e){Jt(t,...e)}},Md=function(...t){const e="FIREBASE INTERNAL ERROR: "+Xo(...t);Ts.error(e)},Cr=function(...t){const e=`FIREBASE FATAL ERROR: ${Xo(...t)}`;throw Ts.error(e),new Error(e)},Pn=function(...t){const e="FIREBASE WARNING: "+Xo(...t);Ts.warn(e)},pM=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},lc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},mM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Cs="[MIN_NAME]",Sr="[MAX_NAME]",Ar=function(t,e){if(t===e)return 0;if(t===Cs||e===Sr)return-1;if(e===Cs||t===Sr)return 1;{const n=Py(t),i=Py(e);return n!==null?i!==null?n-i==0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},gM=function(t,e){return t===e?0:t<e?-1:1},Yo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+jt(e))},Nd=function(t){if(typeof t!="object"||t===null)return jt(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=jt(e[i]),n+=":",n+=Nd(t[e[i]]);return n+="}",n},My=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function cn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ny=function(t){B(!lc(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t==-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},_M=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function yM(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const bM=new RegExp("^-?(0*)\\d{1,10}$"),EM=-2147483648,IM=2147483647,Py=function(t){if(bM.test(t)){const e=Number(t);if(e>=EM&&e<=IM)return e}return null},Ss=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pn("Exception was thrown by user callback.",n),e},Math.floor(0))}},wM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Jo=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class TM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Pn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Jt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pn(e)}}class Pd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Pd.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="5",Dy="v",Fy="s",xy="r",Uy="f",jy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Vy="ls",SM="p",Fd="ac",By="websocket",Hy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e,n,i,r,s=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function kM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function qy(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let i;if(e===By)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Hy)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);kM(t)&&(n.ns=t.namespace);const r=[];return cn(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(){this.counters_={}}incrementCounter(e,n=1){Qn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return _0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd={},Ud={};function jd(t){const e=t.toString();return xd[e]||(xd[e]=new RM),xd[e]}function OM(t,e){const n=t.toString();return Ud[n]||(Ud[n]=e()),Ud[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Ss(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="start",MM="close",NM="pLPCommand",PM="pRTLPCB",Gy="id",zy="pw",Ky="ser",DM="cb",FM="seg",xM="ts",UM="d",jM="dframe",Xy=1870,Qy=30,VM=Xy-Qy,BM=25e3,HM=3e4;class As{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qo(e),this.stats_=jd(n),this.urlFn=l=>(this.appCheckToken&&(l[Fd]=this.appCheckToken),qy(n,Hy,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new LM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(HM)),mM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vd((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Wy)this.id=a,this.password=l;else if(o===MM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Wy]="t",i[Ky]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[DM]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Dy]=Dd,this.transportSessionId&&(i[Fy]=this.transportSessionId),this.lastSessionId&&(i[Vy]=this.lastSessionId),this.applicationId&&(i[SM]=this.applicationId),this.appCheckToken&&(i[Fd]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&jy.test(location.hostname)&&(i[xy]=Uy);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){As.forceAllow_=!0}static forceDisallow(){As.forceDisallow_=!0}static isAvailable(){return As.forceAllow_?!0:!As.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!_M()&&!vM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=jt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=g0(n),r=My(i,VM);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[jM]="t",i[Gy]=e,i[zy]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=jt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Vd{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dM(),window[NM+this.uniqueCallbackIdentifier]=e,window[PM+this.uniqueCallbackIdentifier]=n,this.myIFrame=Vd.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,"javascript:".length)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Jt("frame writing exception"),a.stack&&Jt(a.stack),Jt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Jt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Gy]=this.myID,e[zy]=this.myPW,e[Ky]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Qy+i.length<=Xy;){const o=this.pendingSegs.shift();i=i+"&"+FM+r+"="+o.seg+"&"+xM+r+"="+o.ts+"&"+UM+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(BM)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Jt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM=16384,WM=45e3;let cc=null;typeof MozWebSocket!="undefined"?cc=MozWebSocket:typeof WebSocket!="undefined"&&(cc=WebSocket);class Gn{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qo(this.connId),this.stats_=jd(n),this.connURL=Gn.connectionURL_(n,o,a,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r){const s={};return s[Dy]=Dd,typeof location!="undefined"&&location.hostname&&jy.test(location.hostname)&&(s[xy]=Uy),n&&(s[Fy]=n),i&&(s[Vy]=i),r&&(s[Fd]=r),qy(e,By,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wr.set("previous_websocket_failure",!0);try{if(!Op()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new cc(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Gn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&cc!==null&&!Gn.forceDisallow_}static previouslyFailed(){return wr.isInMemoryStorage||wr.get("previous_websocket_failure")===!0}markConnectionHealthy(){wr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Js(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=jt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=My(n,qM);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(WM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gn.responsesRequiredToBeHealthy=2;Gn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[As,Gn]}initTransports_(e){const n=Gn&&Gn.isAvailable();let i=n&&!Gn.previouslyFailed();if(e.webSocketOnly&&(n||Pn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Gn];else{const r=this.transports_=[];for(const s of Bd.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GM=6e4,zM=5e3,KM=10*1024,XM=100*1024,Hd="t",Yy="d",QM="s",Jy="r",YM="e",Zy="o",$y="a",eb="n",tb="p",JM="h";class ZM{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qo("c:"+this.id+":"),this.transportManager_=new Bd(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Jo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>XM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>KM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Hd in e){const n=e[Hd];n===$y?this.upgradeIfSecondaryHealthy_():n===Jy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Zy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Yo("t",e),i=Yo("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tb,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$y,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:eb,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Yo("t",e),i=Yo("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Yo(Hd,e);if(Yy in e){const i=e[Yy];if(n===JM)this.onHandshake_(i);else if(n===eb){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===QM?this.onConnectionShutdown_(i):n===Jy?this.onReset_(i):n===YM?Md("Server Error: "+i):n===Zy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Md("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Dd!==i&&Pn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Jo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(GM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Jo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tb,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends ib{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Fa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new uc}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=32,sb=768;class Be{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Fe(){return new Be("")}function ye(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Bi(t){return t.pieces_.length-t.pieceNum_}function Ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Be(t.pieces_,e)}function qd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function $M(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Zo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ob(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Be(e,0)}function wt(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Be)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new Be(n,0)}function Se(t){return t.pieceNum_>=t.pieces_.length}function An(t,e){const n=ye(t),i=ye(e);if(n===null)return e;if(n===i)return An(Ye(t),Ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function eN(t,e){const n=Zo(t,0),i=Zo(e,0);for(let r=0;r<n.length&&r<i.length;r++){const s=Ar(n[r],i[r]);if(s!==0)return s}return n.length===i.length?0:n.length<i.length?-1:1}function Wd(t,e){if(Bi(t)!==Bi(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Vn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Bi(t)>Bi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class tN{constructor(e,n){this.errorPrefix_=n,this.parts_=Zo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Va(this.parts_[i]);ab(this)}}function nN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Va(e),ab(t)}function iN(t){const e=t.parts_.pop();t.byteLength_-=Va(e),t.parts_.length>0&&(t.byteLength_-=1)}function ab(t){if(t.byteLength_>sb)throw new Error(t.errorPrefix_+"has a key path longer than "+sb+" bytes ("+t.byteLength_+").");if(t.parts_.length>rb)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+rb+") or object contains a cycle "+kr(t))}function kr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd extends ib{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Gd}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=1e3,rN=60*5*1e3,sN=3*1e3,lb=30*1e3,oN=1.3,aN=3e4,lN="server_kill",cb=3;class pi extends nb{constructor(e,n,i,r,s,o,a,l){super();if(this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=pi.nextPersistentConnectionId_++,this.log_=Qo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$o,this.maxReconnectDelay_=rN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Op())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Gd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&uc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(jt(s)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new wi,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||r!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},sN),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;pi.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Qn(e,"w")){const i=Kr(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Pn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||C0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lb)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=T0(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+jt(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Md("Unrecognized action received from server: "+jt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$o,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$o,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>aN&&(this.reconnectDelay_=$o),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*oN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+pi.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Jt("getToken() completed but was canceled"):(Jt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new ZM(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{Pn(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(lN)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Pn(h),l())}}}interrupt(e){Jt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Jt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xa(this.interruptReasons_)&&(this.reconnectDelay_=$o,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Nd(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new Be(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Jt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=cb&&(this.reconnectDelay_=lb,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Jt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=cb&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ky.replace(/\./g,"-")]=1,Fa()?e["framework.cordova"]=1:yu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=uc.getInstance().currentlyOnline();return xa(this.interruptReasons_)&&e}}pi.nextPersistentConnectionId_=0;pi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ae(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new Ae(Cs,e),r=new Ae(Cs,n);return this.compare(i,r)!==0}minPost(){return Ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dc;class ub extends hc{static get __EMPTY_NODE(){return dc}static set __EMPTY_NODE(e){dc=e}compare(e,n){return Ar(e.name,n.name)}isDefinedOn(e){throw zr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ae.MIN}maxPost(){return new Ae(Sr,dc)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new Ae(e,dc)}toString(){return".key"}}const ks=new ub;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ht{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:Ht.RED,this.left=r!=null?r:kn.EMPTY_NODE,this.right=s!=null?s:kn.EMPTY_NODE}copy(e,n,i,r,s){return new Ht(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return kn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return kn.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ht.RED=!0;Ht.BLACK=!1;class cN{copy(e,n,i,r,s){return this}insert(e,n,i){return new Ht(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class kn{constructor(e,n=kn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new kn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ht.BLACK,null,null))}remove(e){return new kn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ht.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new fc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new fc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new fc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new fc(this.root_,null,this.comparator_,!0,e)}}kn.EMPTY_NODE=new cN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(t,e){return Ar(t.name,e.name)}function zd(t,e){return Ar(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kd;function hN(t){Kd=t}const hb=function(t){return typeof t=="number"?"number:"+Ny(t):"string:"+t},db=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qn(e,".sv"),"Priority must be a string or number.")}else B(t===Kd||t.isEmpty(),"priority of unexpected type.");B(t===Kd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fb;class qt{constructor(e,n=qt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),db(this.priorityNode_)}static set __childrenNodeConstructor(e){fb=e}static get __childrenNodeConstructor(){return fb}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Se(e)?this:ye(e)===".priority"?this.priorityNode_:qt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=ye(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(B(i!==".priority"||Bi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,qt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+hb(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ny(this.value_):e+=this.value_,this.lazyHash_=Oy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qt.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=qt.VALUE_TYPE_ORDER.indexOf(n),s=qt.VALUE_TYPE_ORDER.indexOf(i);return B(r>=0,"Unknown leaf type: "+n),B(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pb,mb;function dN(t){pb=t}function fN(t){mb=t}class pN extends hc{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?Ar(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ae.MIN}maxPost(){return new Ae(Sr,new qt("[PRIORITY-POST]",mb))}makePost(e,n){const i=pb(e);return new Ae(n,new qt("[PRIORITY-POST]",i))}toString(){return".priority"}}const vt=new pN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=Math.log(2);class gN{constructor(e){const n=s=>parseInt(Math.log(s)/mN,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pc=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ht(d,h.node,Ht.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=r(l,f),m=r(f+1,c);return h=t[f],d=n?n(h):h,new Ht(d,h.node,Ht.BLACK,p,m)}},s=function(l){let c=null,u=null,h=t.length;const d=function(p,m){const g=h-p,v=h;h-=p;const A=r(g+1,v),w=t[g],S=n?n(w):w;f(new Ht(S,w.node,m,null,A))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const m=l.nextBitIsOne(),g=Math.pow(2,l.count-(p+1));m?d(g,Ht.BLACK):(d(g,Ht.BLACK),d(g,Ht.RED))}return u},o=new gN(t.length),a=s(o);return new kn(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xd;const Rs={};class mi{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(Rs&&vt,"ChildrenNode.ts has not been loaded"),Xd=Xd||new mi({".priority":Rs},{".priority":vt}),Xd}get(e){const n=Kr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof kn?n:null}hasIndex(e){return Qn(this.indexSet_,e.toString())}addIndex(e,n){B(e!==ks,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(Ae.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=pc(i,e.getCompare()):a=Rs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new mi(u,c)}addToIndexes(e,n){const i=Ua(this.indexes_,(r,s)=>{const o=Kr(this.indexSet_,s);if(B(o,"Missing index implementation for "+s),r===Rs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ae.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),pc(a,o.getCompare())}else return Rs;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new Ae(e.name,a))),l.insert(e,e.node)}});return new mi(i,this.indexSet_)}removeFromIndexes(e,n){const i=Ua(this.indexes_,r=>{if(r===Rs)return r;{const s=n.get(e.name);return s?r.remove(new Ae(e.name,s)):r}});return new mi(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea;class oe{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&db(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ea||(ea=new oe(new kn(zd),null,mi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ea}updatePriority(e){return this.children_.isEmpty()?this:new oe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ea:n}}getChild(e){const n=ye(e);return n===null?this:this.getImmediateChild(n).getChild(Ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new Ae(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?ea:this.priorityNode_;return new oe(r,o,s)}}updateChild(e,n){const i=ye(e);if(i===null)return n;{B(ye(e)!==".priority"||Bi(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(Ye(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(vt,(o,a)=>{n[o]=a.val(e),i++,s&&oe.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+hb(this.getPriority().val())+":"),this.forEachChild(vt,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Oy(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new Ae(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ae(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Ae.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Ae.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ta?-1:0}withIndex(e){if(e===ks||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new oe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ks||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(vt),r=n.getIterator(vt);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ks?null:this.indexMap_.get(e.toString())}}oe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _N extends oe{constructor(){super(new kn(zd),oe.EMPTY_NODE,mi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return oe.EMPTY_NODE}isEmpty(){return!1}}const ta=new _N;Object.defineProperties(Ae,{MIN:{value:new Ae(Cs,oe.EMPTY_NODE)},MAX:{value:new Ae(Sr,ta)}});ub.__EMPTY_NODE=oe.EMPTY_NODE;qt.__childrenNodeConstructor=oe;hN(ta);fN(ta);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=!0;function Ft(t,e=null){if(t===null)return oe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new qt(n,Ft(e))}if(!(t instanceof Array)&&vN){const n=[];let i=!1;if(cn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ft(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new Ae(o,l)))}}),n.length===0)return oe.EMPTY_NODE;const s=pc(n,uN,o=>o.name,zd);if(i){const o=pc(n,vt.getCompare());return new oe(s,Ft(e),new mi({".priority":o},{".priority":vt}))}else return new oe(s,Ft(e),mi.Default)}else{let n=oe.EMPTY_NODE;return cn(t,(i,r)=>{if(Qn(t,i)&&i.substring(0,1)!=="."){const s=Ft(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Ft(e))}}dN(Ft);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN extends hc{constructor(e){super();this.indexPath_=e,B(!Se(e)&&ye(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?Ar(e.name,n.name):s}makePost(e,n){const i=Ft(e),r=oe.EMPTY_NODE.updateChild(this.indexPath_,i);return new Ae(n,r)}maxPost(){const e=oe.EMPTY_NODE.updateChild(this.indexPath_,ta);return new Ae(Sr,e)}toString(){return Zo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN extends hc{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Ar(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ae.MIN}maxPost(){return Ae.MAX}makePost(e,n){const i=Ft(e);return new Ae(n,i)}toString(){return".value"}}const EN=new bN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t){return{type:"value",snapshotNode:t}}function Os(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function na(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ia(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function IN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(na(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Os(n,i)):o.trackChildChange(ia(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(vt,(r,s)=>{n.hasChild(r)||i.trackChildChange(na(r,s))}),n.isLeafNode()||n.forEachChild(vt,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(ia(r,s,o))}else i.trackChildChange(Os(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?oe.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.indexedFilter_=new Qd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ra.getStartPost_(e),this.endPost_=ra.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,r,s,o){return this.matches(new Ae(n,i))||(i=oe.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=oe.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(oe.EMPTY_NODE);const s=this;return n.forEachChild(vt,(o,a)=>{s.matches(new Ae(o,a))||(r=r.updateImmediateChild(o,oe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e){this.rangedFilter_=new ra(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new Ae(n,i))||(i=oe.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=oe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=oe.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)r=r.updateImmediateChild(a.name,a.node),o++;else break}}else{r=n.withIndex(this.index_),r=r.updatePriority(oe.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,f)=>h(f,d)}else l=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const h=l.getNext();!u&&a(s,h)<=0&&(u=!0),u&&c<this.limit_&&a(h,o)<=0?c++:r=r.updateImmediateChild(h.name,oe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const l=new Ae(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=r.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!i.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(ia(n,i,h)),a.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(na(n,h));const m=a.updateImmediateChild(n,oe.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Os(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(na(c.name,c.node)),s.trackChildChange(Os(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,oe.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=vt}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Cs}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Sr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===vt}copy(){const e=new Yd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function TN(t){return t.loadsAllData()?new Qd(t.getIndex()):t.hasLimit()?new wN(t):new ra(t)}function _b(t){const e={};if(t.isDefault())return e;let n;return t.index_===vt?n="$priority":t.index_===EN?n="$value":t.index_===ks?n="$key":(B(t.index_ instanceof yN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=jt(n),t.startSet_&&(e.startAt=jt(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+jt(t.indexStartName_))),t.endSet_&&(e.endAt=jt(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+jt(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function vb(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==vt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc extends nb{constructor(e,n,i,r){super();this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Qo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=mc.getListenId_(e,i),a={};this.listens_[o]=a;const l=_b(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,i),Kr(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,n){const i=mc.getListenId_(e,n);delete this.listens_[i]}get(e){const n=_b(e._queryParams),i=e._path.toString(),r=new wi;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+er(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Js(a.responseText)}catch{Pn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Pn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(){this.rootNode_=oe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(){return{value:null,children:new Map}}function Ls(t,e,n){if(Se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=ye(e);t.children.has(i)||t.children.set(i,gc());const r=t.children.get(i);e=Ye(e),Ls(r,e,n)}}function Jd(t,e){if(Se(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(vt,(i,r)=>{Ls(t,new Be(i),r)}),Jd(t,e)}}else if(t.children.size>0){const n=ye(e);return e=Ye(e),t.children.has(n)&&Jd(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Zd(t,e,n){t.value!==null?n(e,t.value):SN(t,(i,r)=>{const s=new Be(e.toString()+"/"+i);Zd(r,s,n)})}function SN(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&cn(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=10*1e3,kN=30*1e3,RN=5*60*1e3;class ON{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new AN(e);const i=yb+(kN-yb)*Math.random();Jo(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;cn(e,(r,s)=>{s>0&&Qn(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Jo(this.reportStats_.bind(this),Math.floor(Math.random()*2*RN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(zn||(zn={}));function bb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $d(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ef(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=zn.ACK_USER_WRITE,this.source=bb()}operationForChild(e){if(Se(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Be(e));return new _c(Fe(),n,this.revert)}}else return B(ye(this.path)===e,"operationForChild called for unrelated child."),new _c(Ye(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this.source=e,this.path=n,this.type=zn.LISTEN_COMPLETE}operationForChild(e){return Se(this.path)?new sa(this.source,Fe()):new sa(this.source,Ye(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=zn.OVERWRITE}operationForChild(e){return Se(this.path)?new Rr(this.source,Fe(),this.snap.getImmediateChild(e)):new Rr(this.source,Ye(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=zn.MERGE}operationForChild(e){if(Se(this.path)){const n=this.children.subtree(new Be(e));return n.isEmpty()?null:n.value?new Rr(this.source,Fe(),n.value):new oa(this.source,Fe(),n)}else return B(ye(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new oa(this.source,Ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Se(e))return this.isFullyInitialized()&&!this.filtered_;const n=ye(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function MN(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(IN(o.childName,o.snapshotNode))}),aa(t,r,"child_removed",e,i,n),aa(t,r,"child_added",e,i,n),aa(t,r,"child_moved",s,i,n),aa(t,r,"child_changed",e,i,n),aa(t,r,"value",e,i,n),r}function aa(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>PN(t,a,l)),o.forEach(a=>{const l=NN(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function NN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function PN(t,e,n){if(e.childName==null||n.childName==null)throw zr("Should only compare child_ events.");const i=new Ae(e.childName,e.snapshotNode),r=new Ae(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(t,e){return{eventCache:t,serverCache:e}}function la(t,e,n,i){return vc(new Or(e,n,i),t.serverCache)}function Eb(t,e,n,i){return vc(t.eventCache,new Or(e,n,i))}function tf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Lr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nf;const DN=()=>(nf||(nf=new kn(gM)),nf);class at{constructor(e,n=DN()){this.value=e,this.children=n}static fromObject(e){let n=new at(null);return cn(e,(i,r)=>{n=n.set(new Be(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Fe(),value:this.value};if(Se(e))return null;{const i=ye(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(Ye(e),n);return s!=null?{path:wt(new Be(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Se(e))return this;{const n=ye(e),i=this.children.get(n);return i!==null?i.subtree(Ye(e)):new at(null)}}set(e,n){if(Se(e))return new at(n,this.children);{const i=ye(e),s=(this.children.get(i)||new at(null)).set(Ye(e),n),o=this.children.insert(i,s);return new at(this.value,o)}}remove(e){if(Se(e))return this.children.isEmpty()?new at(null):new at(null,this.children);{const n=ye(e),i=this.children.get(n);if(i){const r=i.remove(Ye(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new at(null):new at(this.value,s)}else return this}}get(e){if(Se(e))return this.value;{const n=ye(e),i=this.children.get(n);return i?i.get(Ye(e)):null}}setTree(e,n){if(Se(e))return n;{const i=ye(e),s=(this.children.get(i)||new at(null)).setTree(Ye(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new at(this.value,o)}}fold(e){return this.fold_(Fe(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(wt(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Fe(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(Se(e))return null;{const s=ye(e),o=this.children.get(s);return o?o.findOnPath_(Ye(e),wt(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Fe(),n)}foreachOnPath_(e,n,i){if(Se(e))return this;{this.value&&i(n,this.value);const r=ye(e),s=this.children.get(r);return s?s.foreachOnPath_(Ye(e),wt(n,r),i):new at(null)}}foreach(e){this.foreach_(Fe(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(wt(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.writeTree_=e}static empty(){return new Kn(new at(null))}}function ca(t,e,n){if(Se(e))return new Kn(new at(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=An(r,e);return s=s.updateChild(o,n),new Kn(t.writeTree_.set(r,s))}else{const r=new at(n),s=t.writeTree_.setTree(e,r);return new Kn(s)}}}function Ib(t,e,n){let i=t;return cn(n,(r,s)=>{i=ca(i,wt(e,r),s)}),i}function wb(t,e){if(Se(e))return Kn.empty();{const n=t.writeTree_.setTree(e,new at(null));return new Kn(n)}}function rf(t,e){return Mr(t,e)!=null}function Mr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(An(n.path,e)):null}function Tb(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(vt,(i,r)=>{e.push(new Ae(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new Ae(i,r.value))}),e}function Hi(t,e){if(Se(e))return t;{const n=Mr(t,e);return n!=null?new Kn(new at(n)):new Kn(t.writeTree_.subtree(e))}}function sf(t){return t.writeTree_.isEmpty()}function Ms(t,e){return Cb(Fe(),t.writeTree_,e)}function Cb(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(B(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=Cb(wt(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(wt(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t,e){return Ob(e,t)}function FN(t,e,n,i,r){B(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=ca(t.visibleWrites,e,n)),t.lastWriteId=i}function xN(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function UN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&jN(a,i.path)?r=!1:Vn(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return VN(t),!0;if(i.snap)t.visibleWrites=wb(t.visibleWrites,i.path);else{const a=i.children;cn(a,l=>{t.visibleWrites=wb(t.visibleWrites,wt(i.path,l))})}return!0}else return!1}function jN(t,e){if(t.snap)return Vn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Vn(wt(t.path,n),e))return!0;return!1}function VN(t){t.visibleWrites=Sb(t.allWrites,BN,Fe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function BN(t){return t.visible}function Sb(t,e,n){let i=Kn.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)Vn(n,o)?(a=An(n,o),i=ca(i,a,s.snap)):Vn(o,n)&&(a=An(o,n),i=ca(i,Fe(),s.snap.getChild(a)));else if(s.children){if(Vn(n,o))a=An(n,o),i=Ib(i,a,s.children);else if(Vn(o,n))if(a=An(o,n),Se(a))i=Ib(i,Fe(),s.children);else{const l=Kr(s.children,ye(a));if(l){const c=l.getChild(Ye(a));i=ca(i,Fe(),c)}}}else throw zr("WriteRecord should have .snap or .children")}}return i}function Ab(t,e,n,i,r){if(!i&&!r){const s=Mr(t.visibleWrites,e);if(s!=null)return s;{const o=Hi(t.visibleWrites,e);if(sf(o))return n;if(n==null&&!rf(o,Fe()))return null;{const a=n||oe.EMPTY_NODE;return Ms(o,a)}}}else{const s=Hi(t.visibleWrites,e);if(!r&&sf(s))return n;if(!r&&n==null&&!rf(s,Fe()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(Vn(c.path,e)||Vn(e,c.path))},a=Sb(t.allWrites,o,e),l=n||oe.EMPTY_NODE;return Ms(a,l)}}}function HN(t,e,n){let i=oe.EMPTY_NODE;const r=Mr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(vt,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Hi(t.visibleWrites,e);return n.forEachChild(vt,(o,a)=>{const l=Ms(Hi(s,new Be(o)),a);i=i.updateImmediateChild(o,l)}),Tb(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Hi(t.visibleWrites,e);return Tb(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function qN(t,e,n,i,r){B(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=wt(e,n);if(rf(t.visibleWrites,s))return null;{const o=Hi(t.visibleWrites,s);return sf(o)?r.getChild(n):Ms(o,r.getChild(n))}}function WN(t,e,n,i){const r=wt(e,n),s=Mr(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Hi(t.visibleWrites,r);return Ms(o,i.getNode().getImmediateChild(n))}else return null}function GN(t,e){return Mr(t.visibleWrites,e)}function zN(t,e,n,i,r,s,o){let a;const l=Hi(t.visibleWrites,e),c=Mr(l,Fe());if(c!=null)a=c;else if(n!=null)a=Ms(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<r;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function KN(){return{visibleWrites:Kn.empty(),allWrites:[],lastWriteId:-1}}function yc(t,e,n,i){return Ab(t.writeTree,t.treePath,e,n,i)}function af(t,e){return HN(t.writeTree,t.treePath,e)}function kb(t,e,n,i){return qN(t.writeTree,t.treePath,e,n,i)}function bc(t,e){return GN(t.writeTree,wt(t.treePath,e))}function XN(t,e,n,i,r,s){return zN(t.writeTree,t.treePath,e,n,i,r,s)}function lf(t,e,n){return WN(t.writeTree,t.treePath,e,n)}function Rb(t,e){return Ob(wt(t.treePath,e),t.writeTree)}function Ob(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,ia(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,na(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,Os(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,ia(i,e.snapshotNode,r.oldSnap));else throw zr("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Lb=new YN;class cf{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Or(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return lf(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Lr(this.viewCache_),s=XN(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(t){return{filter:t}}function ZN(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function $N(t,e,n,i,r){const s=new QN;let o,a;if(n.type===zn.OVERWRITE){const c=n;c.source.fromUser?o=uf(t,e,c.path,c.snap,i,r,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Se(c.path),o=Ec(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===zn.MERGE){const c=n;c.source.fromUser?o=tP(t,e,c.path,c.children,i,r,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=hf(t,e,c.path,c.children,i,r,a,s))}else if(n.type===zn.ACK_USER_WRITE){const c=n;c.revert?o=rP(t,e,c.path,i,r,s):o=nP(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===zn.LISTEN_COMPLETE)o=iP(t,e,n.path,i,s);else throw zr("Unknown operation type: "+n.type);const l=s.getChanges();return eP(e,o,l),{viewCache:o,changes:l}}function eP(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=tf(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(gb(tf(e)))}}function Mb(t,e,n,i,r,s){const o=e.eventCache;if(bc(i,n)!=null)return e;{let a,l;if(Se(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Lr(e),u=c instanceof oe?c:oe.EMPTY_NODE,h=af(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=yc(i,Lr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ye(n);if(c===".priority"){B(Bi(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=kb(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ye(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=kb(i,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=lf(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,r,s):a=o.getNode()}}return la(e,a,o.isFullyInitialized()||Se(n),t.filter.filtersNodes())}}function Ec(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Se(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=ye(n);if(!l.isCompleteForPath(n)&&Bi(n)>1)return e;const p=Ye(n),g=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),g):c=u.updateChild(l.getNode(),f,g,p,Lb,null)}const h=Eb(e,c,l.isFullyInitialized()||Se(n),u.filtersNodes()),d=new cf(r,h,s);return Mb(t,h,n,r,d,a)}function uf(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new cf(r,e,s);if(Se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=la(e,c,!0,t.filter.filtersNodes());else{const h=ye(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=la(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ye(n),f=a.getNode().getImmediateChild(h);let p;if(Se(d))p=i;else{const m=u.getCompleteChild(h);m!=null?qd(d)===".priority"&&m.getChild(ob(d)).isEmpty()?p=m:p=m.updateChild(d,i):p=oe.EMPTY_NODE}if(f.equals(p))l=e;else{const m=t.filter.updateChild(a.getNode(),h,p,d,u,o);l=la(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Nb(t,e){return t.eventCache.isCompleteForChild(e)}function tP(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=wt(n,l);Nb(e,ye(u))&&(a=uf(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=wt(n,l);Nb(e,ye(u))||(a=uf(t,a,u,c,r,s,o))}),a}function Pb(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function hf(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Se(n)?c=i:c=new at(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=Pb(t,f,d);l=Ec(t,l,new Be(h),p,r,s,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===void 0;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),m=Pb(t,p,d);l=Ec(t,l,new Be(h),m,r,s,o,a)}}),l}function nP(t,e,n,i,r,s,o){if(bc(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(Se(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ec(t,e,n,l.getNode().getChild(n),r,s,a,o);if(Se(n)){let c=new at(null);return l.getNode().forEachChild(ks,(u,h)=>{c=c.set(new Be(u),h)}),hf(t,e,n,c,r,s,a,o)}else return e}else{let c=new at(null);return i.foreach((u,h)=>{const d=wt(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),hf(t,e,n,c,r,s,a,o)}}function iP(t,e,n,i,r){const s=e.serverCache,o=Eb(e,s.getNode(),s.isFullyInitialized()||Se(n),s.isFiltered());return Mb(t,o,n,i,Lb,r)}function rP(t,e,n,i,r,s){let o;if(bc(i,n)!=null)return e;{const a=new cf(i,e,r),l=e.eventCache.getNode();let c;if(Se(n)||ye(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=yc(i,Lr(e));else{const h=e.serverCache.getNode();B(h instanceof oe,"serverChildren would be complete if leaf node"),u=af(i,h)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=ye(n);let h=lf(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ye(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,oe.EMPTY_NODE,Ye(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=yc(i,Lr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||bc(i,Fe())!=null,la(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new Qd(i.getIndex()),s=TN(i);this.processor_=JN(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(oe.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(oe.EMPTY_NODE,a.getNode(),null),u=new Or(l,o.isFullyInitialized(),r.filtersNodes()),h=new Or(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=vc(h,u),this.eventGenerator_=new LN(this.query_)}get query(){return this.query_}}function oP(t){return t.viewCache_.serverCache.getNode()}function aP(t,e){const n=Lr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Se(e)&&!n.getImmediateChild(ye(e)).isEmpty())?n.getChild(e):null}function Db(t){return t.eventRegistrations_.length===0}function lP(t,e){t.eventRegistrations_.push(e)}function Fb(t,e,n){const i=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function xb(t,e,n,i){e.type===zn.MERGE&&e.source.queryId!==null&&(B(Lr(t.viewCache_),"We should always have a full cache before handling merges"),B(tf(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=$N(t.processor_,r,e,n,i);return ZN(t.processor_,s.viewCache),B(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Ub(t,s.changes,s.viewCache.eventCache.getNode(),null)}function cP(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(vt,(s,o)=>{i.push(Os(s,o))}),n.isFullyInitialized()&&i.push(gb(n.getNode())),Ub(t,i,n.getNode(),e)}function Ub(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return MN(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic;class uP{constructor(){this.views=new Map}}function hP(t){B(!Ic,"__referenceConstructor has already been defined"),Ic=t}function dP(){return B(Ic,"Reference.ts has not been loaded"),Ic}function fP(t){return t.views.size===0}function df(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return B(s!=null,"SyncTree gave us an op for an invalid query."),xb(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(xb(o,e,n,i));return s}}function pP(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=yc(n,r?i:null),l=!1;a?l=!0:i instanceof oe?(a=af(n,i),l=!1):(a=oe.EMPTY_NODE,l=!1);const c=vc(new Or(a,l,!1),new Or(i,r,!1));return new sP(e,c)}return o}function mP(t,e,n,i,r,s){const o=pP(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),lP(o,n),cP(o,n)}function gP(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=qi(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(Fb(c,n,i)),Db(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(Fb(l,n,i)),Db(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!qi(t)&&s.push(new(dP())(e._repo,e._path)),{removed:s,events:o}}function jb(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ns(t,e){let n=null;for(const i of t.views.values())n=n||aP(i,e);return n}function Vb(t,e){if(e._queryParams.loadsAllData())return wc(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Bb(t,e){return Vb(t,e)!=null}function qi(t){return wc(t)!=null}function wc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc;function _P(t){B(!Tc,"__referenceConstructor has already been defined"),Tc=t}function vP(){return B(Tc,"Reference.ts has not been loaded"),Tc}let yP=1;class Hb{constructor(e){this.listenProvider_=e,this.syncPointTree_=new at(null),this.pendingWriteTree_=KN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function bP(t,e,n,i,r){return FN(t.pendingWriteTree_,e,n,i,r),r?ua(t,new Rr(bb(),e,n)):[]}function Ps(t,e,n=!1){const i=xN(t.pendingWriteTree_,e);if(UN(t.pendingWriteTree_,e)){let s=new at(null);return i.snap!=null?s=s.set(Fe(),!0):cn(i.children,o=>{s=s.set(new Be(o),!0)}),ua(t,new _c(i.path,s,n))}else return[]}function Cc(t,e,n){return ua(t,new Rr($d(),e,n))}function EP(t,e,n){const i=at.fromObject(n);return ua(t,new oa($d(),e,i))}function IP(t,e){return ua(t,new sa($d(),e))}function wP(t,e,n){const i=pf(t,n);if(i){const r=mf(i),s=r.path,o=r.queryId,a=An(s,e),l=new sa(ef(o),a);return gf(t,s,l)}else return[]}function ff(t,e,n,i){const r=e._path,s=t.syncPointTree_.get(r);let o=[];if(s&&(e._queryIdentifier==="default"||Bb(s,e))){const a=gP(s,e,n,i);fP(s)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const l=a.removed;o=a.events;const c=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(h,d)=>qi(d));if(c&&!u){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const d=SP(h);for(let f=0;f<d.length;++f){const p=d[f],m=p.query,g=Kb(t,p);t.listenProvider_.startListening(ha(m),Sc(t,m),g.hashFn,g.onComplete)}}}if(!u&&l.length>0&&!i)if(c){const h=null;t.listenProvider_.stopListening(ha(e),h)}else l.forEach(h=>{const d=t.queryToTagMap.get(Ac(h));t.listenProvider_.stopListening(ha(h),d)});AP(t,l)}return o}function TP(t,e,n,i){const r=pf(t,i);if(r!=null){const s=mf(r),o=s.path,a=s.queryId,l=An(o,e),c=new Rr(ef(a),l,n);return gf(t,o,c)}else return[]}function CP(t,e,n,i){const r=pf(t,i);if(r){const s=mf(r),o=s.path,a=s.queryId,l=An(o,e),c=at.fromObject(n),u=new oa(ef(a),l,c);return gf(t,o,u)}else return[]}function qb(t,e,n){const i=e._path;let r=null,s=!1;t.syncPointTree_.foreachOnPath(i,(h,d)=>{const f=An(h,i);r=r||Ns(d,f),s=s||qi(d)});let o=t.syncPointTree_.get(i);o?(s=s||qi(o),r=r||Ns(o,Fe())):(o=new uP,t.syncPointTree_=t.syncPointTree_.set(i,o));let a;r!=null?a=!0:(a=!1,r=oe.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((d,f)=>{const p=Ns(f,Fe());p&&(r=r.updateImmediateChild(d,p))}));const l=Bb(o,e);if(!l&&!e._queryParams.loadsAllData()){const h=Ac(e);B(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const d=kP();t.queryToTagMap.set(h,d),t.tagToQueryMap.set(d,h)}const c=of(t.pendingWriteTree_,i);let u=mP(o,e,n,c,r,a);if(!l&&!s){const h=Vb(o,e);u=u.concat(RP(t,e,h))}return u}function Wb(t,e,n){const i=!0,r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=An(o,e),c=Ns(a,l);if(c)return c});return Ab(r,e,s,n,i)}function ua(t,e){return Gb(e,t.syncPointTree_,null,of(t.pendingWriteTree_,Fe()))}function Gb(t,e,n,i){if(Se(t.path))return zb(t,e,n,i);{const r=e.get(Fe());n==null&&r!=null&&(n=Ns(r,Fe()));let s=[];const o=ye(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Rb(i,o);s=s.concat(Gb(a,l,c,u))}return r&&(s=s.concat(df(r,t,i,n))),s}}function zb(t,e,n,i){const r=e.get(Fe());n==null&&r!=null&&(n=Ns(r,Fe()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Rb(i,o),u=t.operationForChild(o);u&&(s=s.concat(zb(u,a,l,c)))}),r&&(s=s.concat(df(r,t,i,n))),s}function Kb(t,e){const n=e.query,i=Sc(t,n);return{hashFn:()=>(oP(e)||oe.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?wP(t,n._path,i):IP(t,n._path);{const s=yM(r,n);return ff(t,n,null,s)}}}}function Sc(t,e){const n=Ac(e);return t.queryToTagMap.get(n)}function Ac(t){return t._path.toString()+"$"+t._queryIdentifier}function pf(t,e){return t.tagToQueryMap.get(e)}function mf(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Be(t.substr(0,e))}}function gf(t,e,n){const i=t.syncPointTree_.get(e);B(i,"Missing sync point for query tag that we're tracking");const r=of(t.pendingWriteTree_,e);return df(i,n,r,null)}function SP(t){return t.fold((e,n,i)=>{if(n&&qi(n))return[wc(n)];{let r=[];return n&&(r=jb(n)),cn(i,(s,o)=>{r=r.concat(o)}),r}})}function ha(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(vP())(t._repo,t._path):t}function AP(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=Ac(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function kP(){return yP++}function RP(t,e,n){const i=e._path,r=Sc(t,e),s=Kb(t,n),o=t.listenProvider_.startListening(ha(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)B(!qi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!Se(c)&&u&&qi(u))return[wc(u).query];{let d=[];return u&&(d=d.concat(jb(u).map(f=>f.query))),cn(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ha(u),Sc(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new _f(n)}node(){return this.node_}}class vf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=wt(this.path_,e);return new vf(this.syncTree_,n)}node(){return Wb(this.syncTree_,this.path_)}}const OP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Xb=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return LP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return MP(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},LP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},MP=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&B(!1,"Unexpected increment value: "+i);const r=e.node();if(B(r!==null&&typeof r!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},NP=function(t,e,n,i){return yf(e,new vf(n,t),i)},PP=function(t,e,n){return yf(t,new _f(e),n)};function yf(t,e,n){const i=t.getPriority().val(),r=Xb(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Xb(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new qt(a,Ft(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new qt(r))),o.forEachChild(vt,(a,l)=>{const c=yf(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Ef(t,e){let n=e instanceof Be?e:new Be(e),i=t,r=ye(n);for(;r!==null;){const s=Kr(i.node.children,r)||{children:{},childCount:0};i=new bf(r,i,s),n=Ye(n),r=ye(n)}return i}function Ds(t){return t.node.value}function Qb(t,e){t.node.value=e,If(t)}function Yb(t){return t.node.childCount>0}function DP(t){return Ds(t)===void 0&&!Yb(t)}function kc(t,e){cn(t.node.children,(n,i)=>{e(new bf(n,t,i))})}function Jb(t,e,n,i){n&&!i&&e(t),kc(t,r=>{Jb(r,e,!0,i)}),n&&i&&e(t)}function FP(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function da(t){return new Be(t.parent===null?t.name:da(t.parent)+"/"+t.name)}function If(t){t.parent!==null&&xP(t.parent,t.name,t)}function xP(t,e,n){const i=DP(n),r=Qn(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,If(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,If(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=/[\[\].#$\/\u0000-\u001F\u007F]/,jP=/[\[\].#$\u0000-\u001F\u007F]/,wf=10*1024*1024,Tf=function(t){return typeof t=="string"&&t.length!==0&&!UP.test(t)},Zb=function(t){return typeof t=="string"&&t.length!==0&&!jP.test(t)},VP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Zb(t)},$b=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!lc(t)||t&&typeof t=="object"&&Qn(t,".sv")},eE=function(t,e,n,i){i&&e===void 0||Rc(Xr(t,"value"),e,n)},Rc=function(t,e,n){const i=n instanceof Be?new tN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+kr(i));if(typeof e=="function")throw new Error(t+"contains a function "+kr(i)+" with contents = "+e.toString());if(lc(e))throw new Error(t+"contains "+e.toString()+" "+kr(i));if(typeof e=="string"&&e.length>wf/3&&Va(e)>wf)throw new Error(t+"contains a string greater than "+wf+" utf8 bytes "+kr(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(cn(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Tf(o)))throw new Error(t+" contains an invalid key ("+o+") "+kr(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);nN(i,o),Rc(t,a,i),iN(i)}),r&&s)throw new Error(t+' contains ".value" child '+kr(i)+" in addition to actual children.")}},BP=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const s=Zo(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Tf(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(eN);let r=null;for(n=0;n<e.length;n++){if(i=e[n],r!==null&&Vn(r,i))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},HP=function(t,e,n,i){if(i&&e===void 0)return;const r=Xr(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];cn(e,(o,a)=>{const l=new Be(o);if(Rc(r,a,wt(n,l)),qd(l)===".priority"&&!$b(a))throw new Error(r+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),BP(r,s)},qP=function(t,e,n){if(!(n&&e===void 0)){if(lc(e))throw new Error(Xr(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!$b(e))throw new Error(Xr(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},tE=function(t,e,n,i){if(!(i&&n===void 0)&&!Zb(n))throw new Error(Xr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},WP=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),tE(t,e,n,i)},Oc=function(t,e){if(ye(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},GP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Tf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!VP(n))throw new Error(Xr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function nE(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!Wd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function iE(t,e,n){nE(t,n),rE(t,i=>Wd(i,e))}function Nr(t,e,n){nE(t,n),rE(t,i=>Vn(i,e)||Vn(e,i))}function rE(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(KP(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function KP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Tr&&Jt("event: "+n.toString()),Ss(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP="repo_interrupt",QP=25;class YP{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gc(),this.transactionQueueTree_=new bf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JP(t,e,n){if(t.stats_=jd(t.repoInfo_),t.forceRestClient_||wM())t.server_=new mc(t.repoInfo_,(i,r,s,o)=>{oE(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>aE(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{jt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new pi(t.repoInfo_,e,(i,r,s,o)=>{oE(t,i,r,s,o)},i=>{aE(t,i)},i=>{$P(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=OM(t.repoInfo_,()=>new ON(t.stats_,t.server_)),t.infoData_=new CN,t.infoSyncTree_=new Hb({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Cc(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Cf(t,"connected",!1),t.serverSyncTree_=new Hb({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);Nr(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function ZP(t){const n=t.infoData_.getNode(new Be(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function sE(t){return OP({timestamp:ZP(t)})}function oE(t,e,n,i,r){t.dataUpdateCount++;const s=new Be(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=Ua(n,c=>Ft(c));o=CP(t.serverSyncTree_,s,l,r)}else{const l=Ft(n);o=TP(t.serverSyncTree_,s,l,r)}else if(i){const l=Ua(n,c=>Ft(c));o=EP(t.serverSyncTree_,s,l)}else{const l=Ft(n);o=Cc(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Af(t,s)),Nr(t.eventQueue_,a,o)}function aE(t,e){Cf(t,"connected",e),e===!1&&tD(t)}function $P(t,e){cn(e,(n,i)=>{Cf(t,n,i)})}function Cf(t,e,n){const i=new Be("/.info/"+e),r=Ft(n);t.infoData_.updateSnapshot(i,r);const s=Cc(t.infoSyncTree_,i,r);Nr(t.eventQueue_,i,s)}function eD(t){return t.nextWriteId_++}function tD(t){uE(t,"onDisconnectEvents");const e=sE(t),n=gc();Zd(t.onDisconnect_,Fe(),(r,s)=>{const o=NP(r,s,t.serverSyncTree_,e);Ls(n,r,o)});let i=[];Zd(n,Fe(),(r,s)=>{i=i.concat(Cc(t.serverSyncTree_,r,s));const o=cD(t,r);Af(t,o)}),t.onDisconnect_=gc(),Nr(t.eventQueue_,Fe(),i)}function nD(t,e,n){t.server_.onDisconnectCancel(e.toString(),(i,r)=>{i==="ok"&&Jd(t.onDisconnect_,e),fa(t,n,i,r)})}function lE(t,e,n,i){const r=Ft(n);t.server_.onDisconnectPut(e.toString(),r.val(!0),(s,o)=>{s==="ok"&&Ls(t.onDisconnect_,e,r),fa(t,i,s,o)})}function iD(t,e,n,i,r){const s=Ft(n,i);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Ls(t.onDisconnect_,e,s),fa(t,r,o,a)})}function rD(t,e,n,i){if(xa(n)){Jt("onDisconnect().update() called with empty data.  Don't do anything."),fa(t,i,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(r,s)=>{r==="ok"&&cn(n,(o,a)=>{const l=Ft(a);Ls(t.onDisconnect_,wt(e,o),l)}),fa(t,i,r,s)})}function sD(t,e,n){let i;ye(e._path)===".info"?i=qb(t.infoSyncTree_,e,n):i=qb(t.serverSyncTree_,e,n),iE(t.eventQueue_,e._path,i)}function cE(t,e,n){let i;ye(e._path)===".info"?i=ff(t.infoSyncTree_,e,n):i=ff(t.serverSyncTree_,e,n),iE(t.eventQueue_,e._path,i)}function oD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(XP)}function uE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Jt(n,...e)}function fa(t,e,n,i){e&&Ss(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function hE(t,e,n){return Wb(t.serverSyncTree_,e,n)||oe.EMPTY_NODE}function Sf(t,e=t.transactionQueueTree_){if(e||Lc(t,e),Ds(e)){const n=fE(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&aD(t,da(e),n)}else Yb(e)&&kc(e,n=>{Sf(t,n)})}function aD(t,e,n){const i=n.map(c=>c.currentWriteId),r=hE(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];B(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=An(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{uE(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Ps(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Lc(t,Ef(t.transactionQueueTree_,e)),Sf(t,t.transactionQueueTree_),Nr(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ss(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Pn("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Af(t,e)}},o)}function Af(t,e){const n=dE(t,e),i=da(n),r=fE(t,n);return lD(t,r,i),i}function lD(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=An(n,l.path);let u=!1,h;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,r=r.concat(Ps(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=QP)u=!0,h="maxretry",r=r.concat(Ps(t.serverSyncTree_,l.currentWriteId,!0));else{const d=hE(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Rc("transaction failed: Data returned ",f,l.path);let p=Ft(f);typeof f=="object"&&f!=null&&Qn(f,".priority")||(p=p.updatePriority(d.getPriority()));const g=l.currentWriteId,v=sE(t),A=PP(p,d,v);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=A,l.currentWriteId=eD(t),o.splice(o.indexOf(g),1),r=r.concat(bP(t.serverSyncTree_,l.path,A,l.currentWriteId,l.applyLocally)),r=r.concat(Ps(t.serverSyncTree_,g,!0))}else u=!0,h="nodata",r=r.concat(Ps(t.serverSyncTree_,l.currentWriteId,!0))}Nr(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Lc(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Ss(i[a]);Sf(t,t.transactionQueueTree_)}function dE(t,e){let n,i=t.transactionQueueTree_;for(n=ye(e);n!==null&&Ds(i)===void 0;)i=Ef(i,n),e=Ye(e),n=ye(e);return i}function fE(t,e){const n=[];return pE(t,e,n),n.sort((i,r)=>i.order-r.order),n}function pE(t,e,n){const i=Ds(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);kc(e,r=>{pE(t,r,n)})}function Lc(t,e){const n=Ds(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,Qb(e,n.length>0?n:void 0)}kc(e,i=>{Lc(t,i)})}function cD(t,e){const n=da(dE(t,e)),i=Ef(t.transactionQueueTree_,e);return FP(i,r=>{kf(t,r)}),kf(t,i),Jb(i,r=>{kf(t,r)}),n}function kf(t,e){const n=Ds(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Ps(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Qb(e,void 0):n.length=s+1,Nr(t.eventQueue_,da(e),r);for(let o=0;o<i.length;o++)Ss(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function hD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Pn(`Invalid query segment '${n}' in query '${t}'`)}return e}const mE=function(t,e){const n=dD(t),i=n.namespace;n.domain==="firebase.com"&&Cr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Cr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||pM();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new AM(n.host,n.secure,i,e,r,"",i!==n.subdomain),path:new Be(n.pathString)}},dD=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=uD(t.substring(u,h)));const d=hD(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=i}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+jt(this.snapshot.exportVal())}}class _E{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class pD{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new wi;return nD(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Oc("OnDisconnect.remove",this._path);const e=new wi;return lE(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Oc("OnDisconnect.set",this._path),eE("OnDisconnect.set",e,this._path,!1);const n=new wi;return lE(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Oc("OnDisconnect.setWithPriority",this._path),eE("OnDisconnect.setWithPriority",e,this._path,!1),qP("OnDisconnect.setWithPriority",n,!1);const i=new wi;return iD(this._repo,this._path,e,n,i.wrapCallback(()=>{})),i.promise}update(e){Oc("OnDisconnect.update",this._path),HP("OnDisconnect.update",e,this._path,!1);const n=new wi;return rD(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Rf{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return Se(this._path)?null:qd(this._path)}get ref(){return new gi(this._repo,this._path)}get _queryIdentifier(){const e=vb(this._queryParams),n=Nd(e);return n==="{}"?"default":n}get _queryObject(){return vb(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof Rf))return!1;const n=this._repo===e._repo,i=Wd(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+$M(this._path)}}class gi extends Rf{constructor(e,n){super(e,n,new Yd,!1)}get parent(){const e=ob(this._path);return e===null?null:new gi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class pa{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Be(e),i=Mc(this.ref,e);return new pa(this._node.getChild(n),i,vt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new pa(r,Mc(this.ref,i),vt)))}hasChild(e){const n=new Be(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Gj(t,e){return t=$e(t),t._checkNotDeleted("ref"),e!==void 0?Mc(t._root,e):t._root}function Mc(t,e){return t=$e(t),ye(t._path)===null?WP("child","path",e,!1):tE("child","path",e,!1),new gi(t._repo,wt(t._path,e))}function zj(t){return t=$e(t),new pD(t._repo,t._path)}class Of{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new gE("value",this,new pa(e.snapshotNode,new gi(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new _E(this,e,n):null}matches(e){return e instanceof Of?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Lf{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new _E(this,e,n):null}createEvent(e,n){B(e.childName!=null,"Child events should have a childName.");const i=Mc(new gi(n._repo,n._path),e.childName),r=n._queryParams.getIndex();return new gE(e.type,this,new pa(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Lf?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function mD(t,e,n,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){const l=n,c=(u,h)=>{cE(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new fD(n,s||void 0),a=e==="value"?new Of(o):new Lf(e,o);return sD(t._repo,t,a),()=>cE(t._repo,t,a)}function Kj(t,e,n,i){return mD(t,"value",e,n,i)}hP(gi);_P(gi);/**
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
 */const gD="FIREBASE_DATABASE_EMULATOR_HOST",Mf={};let _D=!1;function vD(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Cr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Jt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=mE(s,r),a=o.repoInfo,l,c;typeof process!="undefined"&&(c=process.env[gD]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=mE(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new Pd(Pd.OWNER):new CM(t.name,t.options,e);GP("Invalid Firebase Database URL",o),Se(o.path)||Cr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=bD(a,t,u,new TM(t.name,n));return new ED(h,t)}function yD(t,e){const n=Mf[e];(!n||n[t.key]!==t)&&Cr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),oD(t),delete n[t.key]}function bD(t,e,n,i){let r=Mf[e.name];r||(r={},Mf[e.name]=r);let s=r[t.toURLString()];return s&&Cr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new YP(t,_D,n,i),r[t.toURLString()]=s,s}class ED{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gi(this._repo,Fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Cr("Cannot call "+e+" on a deleted database.")}}function Xj(t=Wa(),e){return Zs(t,"database").getImmediate({identifier:e})}/**
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
 */function ID(t){cM(ir),nr(new Ti("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return vD(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),jn(Sy,Ay,t),jn(Sy,Ay,"esm2017")}pi.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};pi.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ID();var ma={exports:{}},Fs=typeof Reflect=="object"?Reflect:null,vE=Fs&&typeof Fs.apply=="function"?Fs.apply:function(e,n,i){return Function.prototype.apply.call(e,n,i)},Nc;Fs&&typeof Fs.ownKeys=="function"?Nc=Fs.ownKeys:Object.getOwnPropertySymbols?Nc=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Nc=function(e){return Object.getOwnPropertyNames(e)};function wD(t){console&&console.warn&&console.warn(t)}var yE=Number.isNaN||function(e){return e!==e};function Ge(){Ge.init.call(this)}ma.exports=Ge;ma.exports.once=AD;Ge.EventEmitter=Ge;Ge.prototype._events=void 0;Ge.prototype._eventsCount=0;Ge.prototype._maxListeners=void 0;var bE=10;function Pc(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(Ge,"defaultMaxListeners",{enumerable:!0,get:function(){return bE},set:function(t){if(typeof t!="number"||t<0||yE(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");bE=t}});Ge.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};Ge.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||yE(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function EE(t){return t._maxListeners===void 0?Ge.defaultMaxListeners:t._maxListeners}Ge.prototype.getMaxListeners=function(){return EE(this)};Ge.prototype.emit=function(e){for(var n=[],i=1;i<arguments.length;i++)n.push(arguments[i]);var r=e==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var o;if(n.length>0&&(o=n[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var l=s[e];if(l===void 0)return!1;if(typeof l=="function")vE(l,this,n);else for(var c=l.length,u=SE(l,c),i=0;i<c;++i)vE(u[i],this,n);return!0};function IE(t,e,n,i){var r,s,o;if(Pc(n),s=t._events,s===void 0?(s=t._events=Object.create(null),t._eventsCount=0):(s.newListener!==void 0&&(t.emit("newListener",e,n.listener?n.listener:n),s=t._events),o=s[e]),o===void 0)o=s[e]=n,++t._eventsCount;else if(typeof o=="function"?o=s[e]=i?[n,o]:[o,n]:i?o.unshift(n):o.push(n),r=EE(t),r>0&&o.length>r&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=t,a.type=e,a.count=o.length,wD(a)}return t}Ge.prototype.addListener=function(e,n){return IE(this,e,n,!1)};Ge.prototype.on=Ge.prototype.addListener;Ge.prototype.prependListener=function(e,n){return IE(this,e,n,!0)};function TD(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function wE(t,e,n){var i={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},r=TD.bind(i);return r.listener=n,i.wrapFn=r,r}Ge.prototype.once=function(e,n){return Pc(n),this.on(e,wE(this,e,n)),this};Ge.prototype.prependOnceListener=function(e,n){return Pc(n),this.prependListener(e,wE(this,e,n)),this};Ge.prototype.removeListener=function(e,n){var i,r,s,o,a;if(Pc(n),r=this._events,r===void 0)return this;if(i=r[e],i===void 0)return this;if(i===n||i.listener===n)--this._eventsCount==0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,i.listener||n));else if(typeof i!="function"){for(s=-1,o=i.length-1;o>=0;o--)if(i[o]===n||i[o].listener===n){a=i[o].listener,s=o;break}if(s<0)return this;s===0?i.shift():CD(i,s),i.length===1&&(r[e]=i[0]),r.removeListener!==void 0&&this.emit("removeListener",e,a||n)}return this};Ge.prototype.off=Ge.prototype.removeListener;Ge.prototype.removeAllListeners=function(e){var n,i,r;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[e]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete i[e]),this;if(arguments.length===0){var s=Object.keys(i),o;for(r=0;r<s.length;++r)o=s[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=i[e],typeof n=="function")this.removeListener(e,n);else if(n!==void 0)for(r=n.length-1;r>=0;r--)this.removeListener(e,n[r]);return this};function TE(t,e,n){var i=t._events;if(i===void 0)return[];var r=i[e];return r===void 0?[]:typeof r=="function"?n?[r.listener||r]:[r]:n?SD(r):SE(r,r.length)}Ge.prototype.listeners=function(e){return TE(this,e,!0)};Ge.prototype.rawListeners=function(e){return TE(this,e,!1)};Ge.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):CE.call(t,e)};Ge.prototype.listenerCount=CE;function CE(t){var e=this._events;if(e!==void 0){var n=e[t];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}Ge.prototype.eventNames=function(){return this._eventsCount>0?Nc(this._events):[]};function SE(t,e){for(var n=new Array(e),i=0;i<e;++i)n[i]=t[i];return n}function CD(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function SD(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function AD(t,e){return new Promise(function(n,i){function r(o){t.removeListener(e,s),i(o)}function s(){typeof t.removeListener=="function"&&t.removeListener("error",r),n([].slice.call(arguments))}AE(t,e,s,{once:!0}),e!=="error"&&kD(t,r,{once:!0})})}function kD(t,e,n){typeof t.on=="function"&&AE(t,"error",e,n)}function AE(t,e,n,i){if(typeof t.on=="function")i.once?t.once(e,n):t.on(e,n);else if(typeof t.addEventListener=="function")t.addEventListener(e,function r(s){i.once&&t.removeEventListener(e,r),n(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}var Dc=ma.exports,RD=function(t){if(Array.isArray(t))return t},OD=function(t,e){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(t)){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(l){r=!0,s=l}finally{try{i||a.return==null||a.return()}finally{if(r)throw s}}return n}},kE=function(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i},LD=function(t,e){if(t){if(typeof t=="string")return kE(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?kE(t,e):void 0}},MD=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},ND=function(t,e){return RD(t)||OD(t,e)||LD(t,e)||MD()},PD=function(t,e){if(t==null)return{};var n,i,r={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(r[n]=t[n]);return r},DD=function(t,e){if(t==null)return{};var n,i,r=PD(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r},Fc=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Wi(t,e){return t(e={exports:{}},e.exports),e.exports}var Y=Wi(function(t){var e=function(n){var i,r=Object.prototype,s=r.hasOwnProperty,o=typeof Symbol=="function"?Symbol:{},a=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(T,C,z){return Object.defineProperty(T,C,{value:z,enumerable:!0,configurable:!0,writable:!0}),T[C]}try{u({},"")}catch{u=function(C,z,V){return C[z]=V}}function h(T,C,z,V){var K=C&&C.prototype instanceof A?C:A,fe=Object.create(K.prototype),He=new M(V||[]);return fe._invoke=function(ct,be,pe){var ve=f;return function(W,le){if(ve===m)throw new Error("Generator is already running");if(ve===g){if(W==="throw")throw le;return G()}for(pe.method=W,pe.arg=le;;){var it=pe.delegate;if(it){var Zt=O(it,pe);if(Zt){if(Zt===v)continue;return Zt}}if(pe.method==="next")pe.sent=pe._sent=pe.arg;else if(pe.method==="throw"){if(ve===f)throw ve=g,pe.arg;pe.dispatchException(pe.arg)}else pe.method==="return"&&pe.abrupt("return",pe.arg);ve=m;var Lt=d(ct,be,pe);if(Lt.type==="normal"){if(ve=pe.done?g:p,Lt.arg===v)continue;return{value:Lt.arg,done:pe.done}}Lt.type==="throw"&&(ve=g,pe.method="throw",pe.arg=Lt.arg)}}}(T,z,He),fe}function d(T,C,z){try{return{type:"normal",arg:T.call(C,z)}}catch(V){return{type:"throw",arg:V}}}n.wrap=h;var f="suspendedStart",p="suspendedYield",m="executing",g="completed",v={};function A(){}function w(){}function S(){}var q={};q[a]=function(){return this};var k=Object.getPrototypeOf,_=k&&k(k(R([])));_&&_!==r&&s.call(_,a)&&(q=_);var I=S.prototype=A.prototype=Object.create(q);function U(T){["next","throw","return"].forEach(function(C){u(T,C,function(z){return this._invoke(C,z)})})}function b(T,C){var z;this._invoke=function(V,K){function fe(){return new C(function(He,ct){(function be(pe,ve,W,le){var it=d(T[pe],T,ve);if(it.type!=="throw"){var Zt=it.arg,Lt=Zt.value;return Lt&&typeof Lt=="object"&&s.call(Lt,"__await")?C.resolve(Lt.__await).then(function(D){be("next",D,W,le)},function(D){be("throw",D,W,le)}):C.resolve(Lt).then(function(D){Zt.value=D,W(Zt)},function(D){return be("throw",D,W,le)})}le(it.arg)})(V,K,He,ct)})}return z=z?z.then(fe,fe):fe()}}function O(T,C){var z=T.iterator[C.method];if(z===i){if(C.delegate=null,C.method==="throw"){if(T.iterator.return&&(C.method="return",C.arg=i,O(T,C),C.method==="throw"))return v;C.method="throw",C.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var V=d(z,T.iterator,C.arg);if(V.type==="throw")return C.method="throw",C.arg=V.arg,C.delegate=null,v;var K=V.arg;return K?K.done?(C[T.resultName]=K.value,C.next=T.nextLoc,C.method!=="return"&&(C.method="next",C.arg=i),C.delegate=null,v):K:(C.method="throw",C.arg=new TypeError("iterator result is not an object"),C.delegate=null,v)}function Z(T){var C={tryLoc:T[0]};1 in T&&(C.catchLoc=T[1]),2 in T&&(C.finallyLoc=T[2],C.afterLoc=T[3]),this.tryEntries.push(C)}function y(T){var C=T.completion||{};C.type="normal",delete C.arg,T.completion=C}function M(T){this.tryEntries=[{tryLoc:"root"}],T.forEach(Z,this),this.reset(!0)}function R(T){if(T){var C=T[a];if(C)return C.call(T);if(typeof T.next=="function")return T;if(!isNaN(T.length)){var z=-1,V=function K(){for(;++z<T.length;)if(s.call(T,z))return K.value=T[z],K.done=!1,K;return K.value=i,K.done=!0,K};return V.next=V}}return{next:G}}function G(){return{value:i,done:!0}}return w.prototype=I.constructor=S,S.constructor=w,w.displayName=u(S,c,"GeneratorFunction"),n.isGeneratorFunction=function(T){var C=typeof T=="function"&&T.constructor;return!!C&&(C===w||(C.displayName||C.name)==="GeneratorFunction")},n.mark=function(T){return Object.setPrototypeOf?Object.setPrototypeOf(T,S):(T.__proto__=S,u(T,c,"GeneratorFunction")),T.prototype=Object.create(I),T},n.awrap=function(T){return{__await:T}},U(b.prototype),b.prototype[l]=function(){return this},n.AsyncIterator=b,n.async=function(T,C,z,V,K){K===void 0&&(K=Promise);var fe=new b(h(T,C,z,V),K);return n.isGeneratorFunction(C)?fe:fe.next().then(function(He){return He.done?He.value:fe.next()})},U(I),u(I,c,"Generator"),I[a]=function(){return this},I.toString=function(){return"[object Generator]"},n.keys=function(T){var C=[];for(var z in T)C.push(z);return C.reverse(),function V(){for(;C.length;){var K=C.pop();if(K in T)return V.value=K,V.done=!1,V}return V.done=!0,V}},n.values=R,M.prototype={constructor:M,reset:function(T){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(y),!T)for(var C in this)C.charAt(0)==="t"&&s.call(this,C)&&!isNaN(+C.slice(1))&&(this[C]=i)},stop:function(){this.done=!0;var T=this.tryEntries[0].completion;if(T.type==="throw")throw T.arg;return this.rval},dispatchException:function(T){if(this.done)throw T;var C=this;function z(be,pe){return fe.type="throw",fe.arg=T,C.next=be,pe&&(C.method="next",C.arg=i),!!pe}for(var V=this.tryEntries.length-1;V>=0;--V){var K=this.tryEntries[V],fe=K.completion;if(K.tryLoc==="root")return z("end");if(K.tryLoc<=this.prev){var He=s.call(K,"catchLoc"),ct=s.call(K,"finallyLoc");if(He&&ct){if(this.prev<K.catchLoc)return z(K.catchLoc,!0);if(this.prev<K.finallyLoc)return z(K.finallyLoc)}else if(He){if(this.prev<K.catchLoc)return z(K.catchLoc,!0)}else{if(!ct)throw new Error("try statement without catch or finally");if(this.prev<K.finallyLoc)return z(K.finallyLoc)}}}},abrupt:function(T,C){for(var z=this.tryEntries.length-1;z>=0;--z){var V=this.tryEntries[z];if(V.tryLoc<=this.prev&&s.call(V,"finallyLoc")&&this.prev<V.finallyLoc){var K=V;break}}K&&(T==="break"||T==="continue")&&K.tryLoc<=C&&C<=K.finallyLoc&&(K=null);var fe=K?K.completion:{};return fe.type=T,fe.arg=C,K?(this.method="next",this.next=K.finallyLoc,v):this.complete(fe)},complete:function(T,C){if(T.type==="throw")throw T.arg;return T.type==="break"||T.type==="continue"?this.next=T.arg:T.type==="return"?(this.rval=this.arg=T.arg,this.method="return",this.next="end"):T.type==="normal"&&C&&(this.next=C),v},finish:function(T){for(var C=this.tryEntries.length-1;C>=0;--C){var z=this.tryEntries[C];if(z.finallyLoc===T)return this.complete(z.completion,z.afterLoc),y(z),v}},catch:function(T){for(var C=this.tryEntries.length-1;C>=0;--C){var z=this.tryEntries[C];if(z.tryLoc===T){var V=z.completion;if(V.type==="throw"){var K=V.arg;y(z)}return K}}throw new Error("illegal catch attempt")},delegateYield:function(T,C,z){return this.delegate={iterator:R(T),resultName:C,nextLoc:z},this.method==="next"&&(this.arg=i),v}},n}(t.exports);try{regeneratorRuntime=e}catch{Function("r","regeneratorRuntime = r")(e)}});function RE(t,e,n,i,r,s,o){try{var a=t[s](o),l=a.value}catch(c){return void n(c)}a.done?e(l):Promise.resolve(l).then(i,r)}var xe=function(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var s=t.apply(e,n);function o(l){RE(s,i,r,o,a,"next",l)}function a(l){RE(s,i,r,o,a,"throw",l)}o(void 0)})}},Gi=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},xc=function(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t};function OE(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var zi=function(t,e,n){return e&&OE(t.prototype,e),n&&OE(t,n),t},Nf=Wi(function(t){function e(n,i){return t.exports=e=Object.setPrototypeOf||function(r,s){return r.__proto__=s,r},e(n,i)}t.exports=e}),Uc=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Nf(t,e)},Bn=Wi(function(t){function e(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?t.exports=e=function(i){return typeof i}:t.exports=e=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},e(n)}t.exports=e}),jc=function(t,e){return!e||Bn(e)!=="object"&&typeof e!="function"?xc(t):e},_i=Wi(function(t){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},e(n)}t.exports=e}),Vc=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},FD=typeof Map=="function",xD=typeof Set=="function",UD=typeof WeakSet=="function",LE=Object.keys,ME=function(t,e){return t&&typeof t=="object"&&e.add(t)},NE=function(t,e,n,i){for(var r,s=0;s<t.length;s++)if(n((r=t[s])[0],e[0],i)&&n(r[1],e[1],i))return!0;return!1},Pf=function(t,e,n,i){for(var r=0;r<t.length;r++)if(n(t[r],e,i))return!0;return!1},ga=function(t,e){return t===e||t!=t&&e!=e},PE=function(t){return t.constructor===Object},DE=function(t){return typeof t.then=="function"},FE=function(t){return!(!t.$$typeof||!t._store)},xE=function(t){return function(e){var n=t||e;return function(i,r,s){s===void 0&&(s=UD?new WeakSet:Object.create({_values:[],add:function(l){this._values.push(l)},has:function(l){return!!~this._values.indexOf(l)}}));var o=s.has(i),a=s.has(r);return o||a?o&&a:(ME(i,s),ME(r,s),n(i,r,s))}}},UE=function(t){var e=[];return t.forEach(function(n,i){return e.push([i,n])}),e},jE=function(t){var e=[];return t.forEach(function(n){return e.push(n)}),e},jD=function(t,e,n,i){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!n(t[r],e[r],i))return!1;return!0},VD=function(t,e,n,i){if(t.size!==e.size)return!1;for(var r=UE(t),s=UE(e),o=0;o<r.length;o++)if(!NE(s,r[o],n,i)||!NE(r,s[o],n,i))return!1;return!0},VE=function(t,e,n,i){var r,s=LE(t),o=LE(e);if(s.length!==o.length)return!1;for(var a=0;a<s.length;a++)if(r=s[a],!Pf(o,r,ga)||(r!=="_owner"||!FE(t)||!FE(e))&&!n(t[r],e[r],i))return!1;return!0},BD=function(t,e){return t.source===e.source&&t.global===e.global&&t.ignoreCase===e.ignoreCase&&t.multiline===e.multiline&&t.unicode===e.unicode&&t.sticky===e.sticky&&t.lastIndex===e.lastIndex},HD=function(t,e,n,i){if(t.size!==e.size)return!1;for(var r=jE(t),s=jE(e),o=0;o<r.length;o++)if(!Pf(s,r[o],n,i)||!Pf(r,s[o],n,i))return!1;return!0},BE=Array.isArray,Bc=function(t){var e=typeof t=="function"?t(n):n;function n(i,r,s){if(ga(i,r))return!0;var o=typeof i;if(o!==typeof r||o!=="object"||!i||!r)return!1;if(PE(i)&&PE(r))return VE(i,r,e,s);var a=BE(i),l=BE(r);if(a||l)return a===l&&jD(i,r,e,s);var c=i instanceof Date,u=r instanceof Date;if(c||u)return c===u&&ga(i.getTime(),r.getTime());var h=i instanceof RegExp,d=r instanceof RegExp;if(h||d)return h===d&&BD(i,r);if(DE(i)||DE(r))return i===r;if(FD){var f=i instanceof Map,p=r instanceof Map;if(f||p)return f===p&&VD(i,r,e,s)}if(xD){var m=i instanceof Set,g=r instanceof Set;if(m||g)return m===g&&HD(i,r,e,s)}return VE(i,r,e,s)}return n},Hc=(Bc(xE()),Bc(xE(ga)),Bc());Bc(function(){return ga});const qD={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},HE={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},Tt={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},vn={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},Ki={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class L{static getFirstMatch(e,n){const i=n.match(e);return i&&i.length>0&&i[1]||""}static getSecondMatch(e,n){const i=n.match(e);return i&&i.length>1&&i[2]||""}static matchAndReturnConst(e,n,i){if(e.test(n))return i}static getWindowsVersionName(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(e){const n=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(n.push(0),n[0]===10)switch(n[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(e){const n=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(n.push(0),!(n[0]===1&&n[1]<5))return n[0]===1&&n[1]<6?"Cupcake":n[0]===1&&n[1]>=6?"Donut":n[0]===2&&n[1]<2?"Eclair":n[0]===2&&n[1]===2?"Froyo":n[0]===2&&n[1]>2?"Gingerbread":n[0]===3?"Honeycomb":n[0]===4&&n[1]<1?"Ice Cream Sandwich":n[0]===4&&n[1]<4?"Jelly Bean":n[0]===4&&n[1]>=4?"KitKat":n[0]===5?"Lollipop":n[0]===6?"Marshmallow":n[0]===7?"Nougat":n[0]===8?"Oreo":n[0]===9?"Pie":void 0}static getVersionPrecision(e){return e.split(".").length}static compareVersions(e,n,i=!1){const r=L.getVersionPrecision(e),s=L.getVersionPrecision(n);let o=Math.max(r,s),a=0;const l=L.map([e,n],c=>{const u=o-L.getVersionPrecision(c),h=c+new Array(u+1).join(".0");return L.map(h.split("."),d=>new Array(20-d.length).join("0")+d).reverse()});for(i&&(a=o-Math.min(r,s)),o-=1;o>=a;){if(l[0][o]>l[1][o])return 1;if(l[0][o]===l[1][o]){if(o===a)return 0;o-=1}else if(l[0][o]<l[1][o])return-1}}static map(e,n){const i=[];let r;if(Array.prototype.map)return Array.prototype.map.call(e,n);for(r=0;r<e.length;r+=1)i.push(n(e[r]));return i}static find(e,n){let i,r;if(Array.prototype.find)return Array.prototype.find.call(e,n);for(i=0,r=e.length;i<r;i+=1){const s=e[i];if(n(s,i))return s}}static assign(e,...n){const i=e;let r,s;if(Object.assign)return Object.assign(e,...n);for(r=0,s=n.length;r<s;r+=1){const o=n[r];typeof o=="object"&&o!==null&&Object.keys(o).forEach(a=>{i[a]=o[a]})}return e}static getBrowserAlias(e){return qD[e]}static getBrowserTypeByAlias(e){return HE[e]||""}}const nt=/version\/(\d+(\.?_?\d+)+)/i,WD=[{test:[/googlebot/i],describe(t){const e={name:"Googlebot"},n=L.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,t)||L.getFirstMatch(nt,t);return n&&(e.version=n),e}},{test:[/opera/i],describe(t){const e={name:"Opera"},n=L.getFirstMatch(nt,t)||L.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/opr\/|opios/i],describe(t){const e={name:"Opera"},n=L.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,t)||L.getFirstMatch(nt,t);return n&&(e.version=n),e}},{test:[/SamsungBrowser/i],describe(t){const e={name:"Samsung Internet for Android"},n=L.getFirstMatch(nt,t)||L.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/Whale/i],describe(t){const e={name:"NAVER Whale Browser"},n=L.getFirstMatch(nt,t)||L.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/MZBrowser/i],describe(t){const e={name:"MZ Browser"},n=L.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,t)||L.getFirstMatch(nt,t);return n&&(e.version=n),e}},{test:[/focus/i],describe(t){const e={name:"Focus"},n=L.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,t)||L.getFirstMatch(nt,t);return n&&(e.version=n),e}},{test:[/swing/i],describe(t){const e={name:"Swing"},n=L.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,t)||L.getFirstMatch(nt,t);return n&&(e.version=n),e}},{test:[/coast/i],describe(t){const e={name:"Opera Coast"},n=L.getFirstMatch(nt,t)||L.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/yabrowser/i],describe(t){const e={name:"Yandex Browser"},n=L.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,t)||L.getFirstMatch(nt,t);return n&&(e.version=n),e}},{test:[/ucbrowser/i],describe(t){const e={name:"UC Browser"},n=L.getFirstMatch(nt,t)||L.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/Maxthon|mxios/i],describe(t){const e={name:"Maxthon"},n=L.getFirstMatch(nt,t)||L.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/epiphany/i],describe(t){const e={name:"Epiphany"},n=L.getFirstMatch(nt,t)||L.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/puffin/i],describe(t){const e={name:"Puffin"},n=L.getFirstMatch(nt,t)||L.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/sleipnir/i],describe(t){const e={name:"Sleipnir"},n=L.getFirstMatch(nt,t)||L.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/k-meleon/i],describe(t){const e={name:"K-Meleon"},n=L.getFirstMatch(nt,t)||L.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/micromessenger/i],describe(t){const e={name:"WeChat"},n=L.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,t)||L.getFirstMatch(nt,t);return n&&(e.version=n),e}},{test:[/qqbrowser/i],describe(t){const e={name:/qqbrowserlite/i.test(t)?"QQ Browser Lite":"QQ Browser"},n=L.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,t)||L.getFirstMatch(nt,t);return n&&(e.version=n),e}},{test:[/msie|trident/i],describe(t){const e={name:"Internet Explorer"},n=L.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/\sedg\//i],describe(t){const e={name:"Microsoft Edge"},n=L.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/edg([ea]|ios)/i],describe(t){const e={name:"Microsoft Edge"},n=L.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/vivaldi/i],describe(t){const e={name:"Vivaldi"},n=L.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/seamonkey/i],describe(t){const e={name:"SeaMonkey"},n=L.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/sailfish/i],describe(t){const e={name:"Sailfish"},n=L.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,t);return n&&(e.version=n),e}},{test:[/silk/i],describe(t){const e={name:"Amazon Silk"},n=L.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/phantom/i],describe(t){const e={name:"PhantomJS"},n=L.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/slimerjs/i],describe(t){const e={name:"SlimerJS"},n=L.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e={name:"BlackBerry"},n=L.getFirstMatch(nt,t)||L.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/(web|hpw)[o0]s/i],describe(t){const e={name:"WebOS Browser"},n=L.getFirstMatch(nt,t)||L.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/bada/i],describe(t){const e={name:"Bada"},n=L.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/tizen/i],describe(t){const e={name:"Tizen"},n=L.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,t)||L.getFirstMatch(nt,t);return n&&(e.version=n),e}},{test:[/qupzilla/i],describe(t){const e={name:"QupZilla"},n=L.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,t)||L.getFirstMatch(nt,t);return n&&(e.version=n),e}},{test:[/firefox|iceweasel|fxios/i],describe(t){const e={name:"Firefox"},n=L.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/electron/i],describe(t){const e={name:"Electron"},n=L.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/chromium/i],describe(t){const e={name:"Chromium"},n=L.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,t)||L.getFirstMatch(nt,t);return n&&(e.version=n),e}},{test:[/chrome|crios|crmo/i],describe(t){const e={name:"Chrome"},n=L.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/GSA/i],describe(t){const e={name:"Google Search"},n=L.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test(t){const e=!t.test(/like android/i),n=t.test(/android/i);return e&&n},describe(t){const e={name:"Android Browser"},n=L.getFirstMatch(nt,t);return n&&(e.version=n),e}},{test:[/playstation 4/i],describe(t){const e={name:"PlayStation 4"},n=L.getFirstMatch(nt,t);return n&&(e.version=n),e}},{test:[/safari|applewebkit/i],describe(t){const e={name:"Safari"},n=L.getFirstMatch(nt,t);return n&&(e.version=n),e}},{test:[/.*/i],describe(t){const e=t.search("\\(")!==-1?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:L.getFirstMatch(e,t),version:L.getSecondMatch(e,t)}}}];var GD=[{test:[/Roku\/DVP/],describe(t){const e=L.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,t);return{name:vn.Roku,version:e}}},{test:[/windows phone/i],describe(t){const e=L.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,t);return{name:vn.WindowsPhone,version:e}}},{test:[/windows /i],describe(t){const e=L.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,t),n=L.getWindowsVersionName(e);return{name:vn.Windows,version:e,versionName:n}}},{test:[/Macintosh(.*?) FxiOS(.*?) Version\//],describe(t){const e=L.getSecondMatch(/(Version\/)(\d[\d.]+)/,t);return{name:vn.iOS,version:e}}},{test:[/macintosh/i],describe(t){const e=L.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,t).replace(/[_\s]/g,"."),n=L.getMacOSVersionName(e),i={name:vn.MacOS,version:e};return n&&(i.versionName=n),i}},{test:[/(ipod|iphone|ipad)/i],describe(t){const e=L.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,t).replace(/[_\s]/g,".");return{name:vn.iOS,version:e}}},{test(t){const e=!t.test(/like android/i),n=t.test(/android/i);return e&&n},describe(t){const e=L.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,t),n=L.getAndroidVersionName(e),i={name:vn.Android,version:e};return n&&(i.versionName=n),i}},{test:[/(web|hpw)[o0]s/i],describe(t){const e=L.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,t),n={name:vn.WebOS};return e&&e.length&&(n.version=e),n}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e=L.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,t)||L.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,t)||L.getFirstMatch(/\bbb(\d+)/i,t);return{name:vn.BlackBerry,version:e}}},{test:[/bada/i],describe(t){const e=L.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,t);return{name:vn.Bada,version:e}}},{test:[/tizen/i],describe(t){const e=L.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,t);return{name:vn.Tizen,version:e}}},{test:[/linux/i],describe:()=>({name:vn.Linux})},{test:[/CrOS/],describe:()=>({name:vn.ChromeOS})},{test:[/PlayStation 4/],describe(t){const e=L.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,t);return{name:vn.PlayStation4,version:e}}}],zD=[{test:[/googlebot/i],describe:()=>({type:"bot",vendor:"Google"})},{test:[/huawei/i],describe(t){const e=L.getFirstMatch(/(can-l01)/i,t)&&"Nova",n={type:Tt.mobile,vendor:"Huawei"};return e&&(n.model=e),n}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:()=>({type:Tt.tablet,vendor:"Nexus"})},{test:[/ipad/i],describe:()=>({type:Tt.tablet,vendor:"Apple",model:"iPad"})},{test:[/Macintosh(.*?) FxiOS(.*?) Version\//],describe:()=>({type:Tt.tablet,vendor:"Apple",model:"iPad"})},{test:[/kftt build/i],describe:()=>({type:Tt.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"})},{test:[/silk/i],describe:()=>({type:Tt.tablet,vendor:"Amazon"})},{test:[/tablet(?! pc)/i],describe:()=>({type:Tt.tablet})},{test(t){const e=t.test(/ipod|iphone/i),n=t.test(/like (ipod|iphone)/i);return e&&!n},describe(t){const e=L.getFirstMatch(/(ipod|iphone)/i,t);return{type:Tt.mobile,vendor:"Apple",model:e}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:()=>({type:Tt.mobile,vendor:"Nexus"})},{test:[/[^-]mobi/i],describe:()=>({type:Tt.mobile})},{test:t=>t.getBrowserName(!0)==="blackberry",describe:()=>({type:Tt.mobile,vendor:"BlackBerry"})},{test:t=>t.getBrowserName(!0)==="bada",describe:()=>({type:Tt.mobile})},{test:t=>t.getBrowserName()==="windows phone",describe:()=>({type:Tt.mobile,vendor:"Microsoft"})},{test(t){const e=Number(String(t.getOSVersion()).split(".")[0]);return t.getOSName(!0)==="android"&&e>=3},describe:()=>({type:Tt.tablet})},{test:t=>t.getOSName(!0)==="android",describe:()=>({type:Tt.mobile})},{test:t=>t.getOSName(!0)==="macos",describe:()=>({type:Tt.desktop,vendor:"Apple"})},{test:t=>t.getOSName(!0)==="windows",describe:()=>({type:Tt.desktop})},{test:t=>t.getOSName(!0)==="linux",describe:()=>({type:Tt.desktop})},{test:t=>t.getOSName(!0)==="playstation 4",describe:()=>({type:Tt.tv})},{test:t=>t.getOSName(!0)==="roku",describe:()=>({type:Tt.tv})}],KD=[{test:t=>t.getBrowserName(!0)==="microsoft edge",describe(t){if(/\sedg\//i.test(t))return{name:Ki.Blink};const e=L.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,t);return{name:Ki.EdgeHTML,version:e}}},{test:[/trident/i],describe(t){const e={name:Ki.Trident},n=L.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:t=>t.test(/presto/i),describe(t){const e={name:Ki.Presto},n=L.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test(t){const e=t.test(/gecko/i),n=t.test(/like gecko/i);return e&&!n},describe(t){const e={name:Ki.Gecko},n=L.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/(apple)?webkit\/537\.36/i],describe:()=>({name:Ki.Blink})},{test:[/(apple)?webkit/i],describe(t){const e={name:Ki.WebKit},n=L.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}}];class qE{constructor(e,n=!1){if(e==null||e==="")throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},n!==!0&&this.parse()}getUA(){return this._ua}test(e){return e.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const e=L.find(WD,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.browser=e.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const e=L.find(GD,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.os=e.describe(this.getUA())),this.parsedResult.os}getOSName(e){const{name:n}=this.getOS();return e?String(n).toLowerCase()||"":n||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(e=!1){const{type:n}=this.getPlatform();return e?String(n).toLowerCase()||"":n||""}parsePlatform(){this.parsedResult.platform={};const e=L.find(zD,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.platform=e.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const e=L.find(KD,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.engine=e.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return L.assign({},this.parsedResult)}satisfies(e){const n={};let i=0;const r={};let s=0;if(Object.keys(e).forEach(o=>{const a=e[o];typeof a=="string"?(r[o]=a,s+=1):typeof a=="object"&&(n[o]=a,i+=1)}),i>0){const o=Object.keys(n),a=L.find(o,c=>this.isOS(c));if(a){const c=this.satisfies(n[a]);if(c!==void 0)return c}const l=L.find(o,c=>this.isPlatform(c));if(l){const c=this.satisfies(n[l]);if(c!==void 0)return c}}if(s>0){const o=Object.keys(r),a=L.find(o,l=>this.isBrowser(l,!0));if(a!==void 0)return this.compareVersion(r[a])}}isBrowser(e,n=!1){const i=this.getBrowserName().toLowerCase();let r=e.toLowerCase();const s=L.getBrowserTypeByAlias(r);return n&&s&&(r=s.toLowerCase()),r===i}compareVersion(e){let n=[0],i=e,r=!1;const s=this.getBrowserVersion();if(typeof s=="string")return e[0]===">"||e[0]==="<"?(i=e.substr(1),e[1]==="="?(r=!0,i=e.substr(2)):n=[],e[0]===">"?n.push(1):n.push(-1)):e[0]==="="?i=e.substr(1):e[0]==="~"&&(r=!0,i=e.substr(1)),n.indexOf(L.compareVersions(s,i,r))>-1}isOS(e){return this.getOSName(!0)===String(e).toLowerCase()}isPlatform(e){return this.getPlatformType(!0)===String(e).toLowerCase()}isEngine(e){return this.getEngineName(!0)===String(e).toLowerCase()}is(e){return this.isBrowser(e)||this.isOS(e)||this.isPlatform(e)}some(e=[]){return e.some(n=>this.is(n))}}var WE="new",Df="loading",qc="joining-meeting",un="joined-meeting",Pr="left-meeting",Dr="error",GE="unknown",XD="base",QD="*",xs="fullscreen",Us="exited-fullscreen",Wc="daily-custom-track",Ff={NONE:"none",BGBLUR:"background-blur"};function $n(){return!Wt()&&typeof window!="undefined"&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:""}function Wt(){return typeof navigator!="undefined"&&navigator.product&&navigator.product==="ReactNative"}function zE(){return navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia}function YD(){return!!(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getDisplayMedia)&&function(t,e){if(!t||!e)return!1;switch(t){case"Chrome":return e.major>=75;case"Safari":return RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection")&&!(e.major===13&&e.minor===0&&e.point===0);case"Firefox":return e.major>=67}return!1}(Gc(),function(){switch(Gc()){case"Chrome":return XE();case"Safari":return YE();case"Firefox":return JE();case"Edge":return function(){var t=0,e=0;if(typeof window!="undefined"){var n=$n(),i=n.match(/Edge\/(\d+).(\d+)/);if(i)try{t=parseInt(i[1]),e=parseInt(i[2])}catch{}}return{major:t,minor:e}}()}}())}var JD=["Chrome","Firefox"];function ZD(){return!Wt()&&!function(){var t=$n();if(t.match(/Mobi/)||t.match(/Android/)||$n().match(/DailyAnd\//))return!0}()&&JD.includes(Gc())}function xf(){return!!Wt()||KE()}function KE(){return zE()&&!function(){var t,e=Gc();if(!$n())return!0;switch(e){case"Chrome":return(t=XE()).major&&t.major>0&&t.major<61;case"Firefox":return(t=JE()).major<78;case"Safari":return(t=YE()).major<12;default:return!0}}()}function Gc(){if(typeof window!="undefined"){var t=$n();return QE()?"Safari":t.indexOf("Edge")>-1?"Edge":t.match(/Chrome\//)?"Chrome":t.indexOf("Safari")>-1?"Safari":t.indexOf("Firefox")>-1?"Firefox":t.indexOf("MSIE")>-1||t.indexOf(".NET")>-1?"IE":"Unknown Browser"}}function XE(){var t=0,e=0,n=0,i=0,r=!1;if(typeof window!="undefined"){var s=$n(),o=s.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);if(o)try{t=parseInt(o[1]),e=parseInt(o[2]),n=parseInt(o[3]),i=parseInt(o[4]),r=s.indexOf("OPR/")>-1}catch{}}return{major:t,minor:e,build:n,patch:i,opera:r}}function QE(){return!!$n().match(/iPad|iPhone|iPod/i)&&zE()}function YE(){var t=0,e=0,n=0;if(typeof window!="undefined"){var i=$n().match(/Version\/(\d+).(\d+)(.(\d+))?/);if(i)try{t=parseInt(i[1]),e=parseInt(i[2]),n=parseInt(i[4])}catch{}else QE()&&(t=14,e=0,n=3)}return{major:t,minor:e,point:n}}function JE(){var t=0,e=0;if(typeof window!="undefined"){var n=$n().match(/Firefox\/(\d+).(\d+)/);if(n)try{t=parseInt(n[1]),e=parseInt(n[2])}catch{}}return{major:t,minor:e}}function Uf(){return Date.now()+Math.random().toString()}function _a(){throw new Error("Method must be implemented in subclass")}function va(t){var e=t?new URL(t).origin:null;return!e||e.match(/https:\/\/[^.]+\.daily\.co/)?xf()?"https://c.daily.co/static/call-machine-object-bundle.js":"https://c.daily.co/static/call-machine-object-nosfu-bundle.js":(e||(console.warn("No baseUrl provided for call object bundle. Defaulting to production CDN..."),e="https://c.daily.co"),xf()?"".concat(e,"/static/call-machine-object-bundle.js"):"".concat(e,"/static/call-machine-object-nosfu-bundle.js"))}var ZE=function(){function t(){Gi(this,t)}return zi(t,[{key:"addListenerForMessagesFromCallMachine",value:function(e,n,i){_a()}},{key:"addListenerForMessagesFromDailyJs",value:function(e,n,i){_a()}},{key:"sendMessageToCallMachine",value:function(e,n,i,r){_a()}},{key:"sendMessageToDailyJs",value:function(e,n,i){_a()}},{key:"removeListener",value:function(e){_a()}}]),t}();function $E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function jf(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$E(Object(n),!0).forEach(function(i){Vc(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$E(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function $D(t){var e=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var n,i=_i(t);if(e){var r=_i(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return jc(this,n)}}var eF=function(t){Uc(n,ZE);var e=$D(n);function n(){var i;return Gi(this,n),(i=e.call(this))._wrappedListeners={},i._messageCallbacks={},i}return zi(n,[{key:"addListenerForMessagesFromCallMachine",value:function(i,r,s){var o=this,a=function(l){if(l.data&&l.data.what==="iframe-call-message"&&(!l.data.callFrameId||l.data.callFrameId===r)&&(!l.data.from||l.data.from!=="module")){var c=jf({},l.data);if(delete c.from,c.callbackStamp&&o._messageCallbacks[c.callbackStamp]){var u=c.callbackStamp;o._messageCallbacks[u].call(s,c),delete o._messageCallbacks[u]}delete c.what,delete c.callbackStamp,i.call(s,c)}};this._wrappedListeners[i]=a,window.addEventListener("message",a)}},{key:"addListenerForMessagesFromDailyJs",value:function(i,r,s){var o=function(a){if(!(!a.data||a.data.what!=="iframe-call-message"||!a.data.action||a.data.from&&a.data.from!=="module"||a.data.callFrameId&&r&&a.data.callFrameId!==r)){var l=a.data;i.call(s,l)}};this._wrappedListeners[i]=o,window.addEventListener("message",o)}},{key:"sendMessageToCallMachine",value:function(i,r,s,o){var a=jf({},i);if(a.what="iframe-call-message",a.from="module",a.callFrameId=o,r){var l=Uf();this._messageCallbacks[l]=r,a.callbackStamp=l}(s?s.contentWindow:window).postMessage(a,"*")}},{key:"sendMessageToDailyJs",value:function(i,r,s){i.what="iframe-call-message",i.callFrameId=s,i.from="embedded",(r?window:window.parent).postMessage(i,"*")}},{key:"removeListener",value:function(i){var r=this._wrappedListeners[i];r&&(window.removeEventListener("message",r),delete this._wrappedListeners[i])}},{key:"forwardPackagedMessageToCallMachine",value:function(i,r,s){var o=jf({},i);o.callFrameId=s,(r?r.contentWindow:window).postMessage(o,"*")}},{key:"addListenerForPackagedMessagesFromCallMachine",value:function(i,r){var s=function(o){if(o.data&&o.data.what==="iframe-call-message"&&(!o.data.callFrameId||o.data.callFrameId===r)&&(!o.data.from||o.data.from!=="module")){var a=o.data;i(a)}};return this._wrappedListeners[i]=s,window.addEventListener("message",s),i}},{key:"removeListenerForPackagedMessagesFromCallMachine",value:function(i){var r=this._wrappedListeners[i];r&&(window.removeEventListener("message",r),delete this._wrappedListeners[i])}}]),n}();function tF(t){var e=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var n,i=_i(t);if(e){var r=_i(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return jc(this,n)}}global.callMachineToDailyJsEmitter=global.callMachineToDailyJsEmitter||new ma.exports.EventEmitter,global.dailyJsToCallMachineEmitter=global.dailyJsToCallMachineEmitter||new ma.exports.EventEmitter;var nF=function(t){Uc(n,ZE);var e=tF(n);function n(){var i;return Gi(this,n),(i=e.call(this))._wrappedListeners={},i._messageCallbacks={},i}return zi(n,[{key:"addListenerForMessagesFromCallMachine",value:function(i,r,s){this._addListener(i,global.callMachineToDailyJsEmitter,s,"received call machine message")}},{key:"addListenerForMessagesFromDailyJs",value:function(i,r,s){this._addListener(i,global.dailyJsToCallMachineEmitter,s,"received daily-js message")}},{key:"sendMessageToCallMachine",value:function(i,r){this._sendMessage(i,global.dailyJsToCallMachineEmitter,"sending message to call machine",r)}},{key:"sendMessageToDailyJs",value:function(i){this._sendMessage(i,global.callMachineToDailyJsEmitter,"sending message to daily-js")}},{key:"removeListener",value:function(i){var r=this._wrappedListeners[i];r&&(global.callMachineToDailyJsEmitter.removeListener("message",r),global.dailyJsToCallMachineEmitter.removeListener("message",r),delete this._wrappedListeners[i])}},{key:"_addListener",value:function(i,r,s,o){var a=this,l=function(c){if(c.callbackStamp&&a._messageCallbacks[c.callbackStamp]){var u=c.callbackStamp;a._messageCallbacks[u].call(s,c),delete a._messageCallbacks[u]}i.call(s,c)};this._wrappedListeners[i]=l,r.addListener("message",l)}},{key:"_sendMessage",value:function(i,r,s,o){if(o){var a=Uf();this._messageCallbacks[a]=o,i.callbackStamp=a}r.emit("message",i)}}]),n}(),iF=function(t){return Function.toString.call(t).indexOf("[native code]")!==-1},rF=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}},sF=Wi(function(t){function e(n,i,r){return rF()?t.exports=e=Reflect.construct:t.exports=e=function(s,o,a){var l=[null];l.push.apply(l,o);var c=new(Function.bind.apply(s,l));return a&&Nf(c,a.prototype),c},e.apply(null,arguments)}t.exports=e}),oF=Wi(function(t){function e(n){var i=typeof Map=="function"?new Map:void 0;return t.exports=e=function(r){if(r===null||!iF(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(i!==void 0){if(i.has(r))return i.get(r);i.set(r,s)}function s(){return sF(r,arguments,_i(this).constructor)}return s.prototype=Object.create(r.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),Nf(s,r)},e(n)}t.exports=e});function aF(t){var e=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var n,i=_i(t);if(e){var r=_i(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return jc(this,n)}}var lF=function(){function t(){Gi(this,t),this._currentLoad=null}return zi(t,[{key:"load",value:function(e,n,i,r){if(this.loaded)return window._dailyCallObjectSetup(n),void i(!0);(function(s){window._dailyConfig||(window._dailyConfig={}),window._dailyConfig.callFrameId=s})(n),this._currentLoad&&this._currentLoad.cancel(),this._currentLoad=new uF(e,n,function(){i(!1)},r),this._currentLoad.start()}},{key:"cancel",value:function(){this._currentLoad&&this._currentLoad.cancel()}},{key:"loaded",get:function(){return this._currentLoad&&this._currentLoad.succeeded}}]),t}(),cF=3,uF=function(){function t(e,n,i,r){Gi(this,t),this._attemptsRemaining=cF,this._currentAttempt=null,this._meetingOrBaseUrl=e,this._callFrameId=n,this._successCallback=i,this._failureCallback=r}return zi(t,[{key:"start",value:function(){var e=this;this._currentAttempt||(this._currentAttempt=new eI(this._meetingOrBaseUrl,this._callFrameId,this._successCallback,function n(i){e._currentAttempt.cancelled||(e._attemptsRemaining--,e._failureCallback(i,e._attemptsRemaining>0),e._attemptsRemaining<=0||setTimeout(function(){e._currentAttempt.cancelled||(e._currentAttempt=new eI(e._meetingOrBaseUrl,e._callFrameId,e._successCallback,n),e._currentAttempt.start())},3e3))}),this._currentAttempt.start())}},{key:"cancel",value:function(){this._currentAttempt&&this._currentAttempt.cancel()}},{key:"cancelled",get:function(){return this._currentAttempt&&this._currentAttempt.cancelled}},{key:"succeeded",get:function(){return this._currentAttempt&&this._currentAttempt.succeeded}}]),t}(),Vf=function(t){Uc(n,t);var e=aF(n);function n(){return Gi(this,n),e.apply(this,arguments)}return n}(oF(Error)),eI=function(){function t(e,n,i,r){Gi(this,t),this.cancelled=!1,this.succeeded=!1,this._networkTimedOut=!1,this._networkTimeout=null,this._iosCache=typeof iOSCallObjectBundleCache!="undefined"&&iOSCallObjectBundleCache,this._refetchHeaders=null,this._meetingOrBaseUrl=e,this._callFrameId=n,this._successCallback=i,this._failureCallback=r}return zi(t,[{key:"start",value:function(){var e=xe(Y.mark(function n(){var i;return Y.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i=va(this._meetingOrBaseUrl),r.next=3,this._tryLoadFromIOSCache(i);case 3:!r.sent&&this._loadFromNetwork(i);case 5:case"end":return r.stop()}},n,this)}));return function(){return e.apply(this,arguments)}}()},{key:"cancel",value:function(){clearTimeout(this._networkTimeout),this.cancelled=!0}},{key:"_tryLoadFromIOSCache",value:function(){var e=xe(Y.mark(function n(i){var r;return Y.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(this._iosCache){s.next=2;break}return s.abrupt("return",!1);case 2:return s.prev=2,s.next=5,this._iosCache.get(i);case 5:if(r=s.sent,!this.cancelled){s.next=8;break}return s.abrupt("return",!0);case 8:if(r){s.next=10;break}return s.abrupt("return",!1);case 10:if(r.code){s.next=13;break}return this._refetchHeaders=r.refetchHeaders,s.abrupt("return",!1);case 13:return Function('"use strict";'+r.code)(),this.succeeded=!0,this._successCallback(),s.abrupt("return",!0);case 19:return s.prev=19,s.t0=s.catch(2),s.abrupt("return",!1);case 22:case"end":return s.stop()}},n,this,[[2,19]])}));return function(n){return e.apply(this,arguments)}}()},{key:"_loadFromNetwork",value:function(){var e=xe(Y.mark(function n(i){var r,s,o,a=this;return Y.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return this._networkTimeout=setTimeout(function(){a._networkTimedOut=!0,a._failureCallback("Timed out (>".concat(2e4," ms) when loading call object bundle ").concat(i))},2e4),l.prev=1,r=this._refetchHeaders?{headers:this._refetchHeaders}:{},l.next=5,fetch(i,r);case 5:if(s=l.sent,clearTimeout(this._networkTimeout),!this.cancelled&&!this._networkTimedOut){l.next=9;break}throw new Vf;case 9:return l.next=11,this._getBundleCodeFromResponse(i,s);case 11:if(o=l.sent,!this.cancelled){l.next=14;break}throw new Vf;case 14:Function('"use strict";'+o)(),this._iosCache&&this._iosCache.set(i,o,s.headers),this.succeeded=!0,this._successCallback(),l.next=26;break;case 20:if(l.prev=20,l.t0=l.catch(1),clearTimeout(this._networkTimeout),!(l.t0 instanceof Vf||this.cancelled||this._networkTimedOut)){l.next=25;break}return l.abrupt("return");case 25:this._failureCallback("Failed to load call object bundle ".concat(i,": ").concat(l.t0));case 26:case"end":return l.stop()}},n,this,[[1,20]])}));return function(n){return e.apply(this,arguments)}}()},{key:"_getBundleCodeFromResponse",value:function(){var e=xe(Y.mark(function n(i,r){var s;return Y.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!r.ok){o.next=4;break}return o.next=3,r.text();case 3:return o.abrupt("return",o.sent);case 4:if(!this._iosCache||r.status!==304){o.next=9;break}return o.next=7,this._iosCache.renew(i,r.headers);case 7:return s=o.sent,o.abrupt("return",s.code);case 9:throw new Error("Received ".concat(r.status," response"));case 10:case"end":return o.stop()}},n,this)}));return function(n,i){return e.apply(this,arguments)}}()}]),t}(),tI=function(t,e){for(var n=-1,i=t==null?0:t.length,r=0,s=[];++n<i;){var o=t[n];e(o,n,t)&&(s[r++]=o)}return s},hF=function(t){return function(e,n,i){for(var r=-1,s=Object(e),o=i(e),a=o.length;a--;){var l=o[t?a:++r];if(n(s[l],l,s)===!1)break}return e}}(),dF=function(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i},nI=typeof Fc=="object"&&Fc&&Fc.Object===Object&&Fc,fF=typeof self=="object"&&self&&self.Object===Object&&self,vi=nI||fF||Function("return this")(),Xi=vi.Symbol,iI=Object.prototype,pF=iI.hasOwnProperty,mF=iI.toString,ya=Xi?Xi.toStringTag:void 0,gF=function(t){var e=pF.call(t,ya),n=t[ya];try{t[ya]=void 0;var i=!0}catch{}var r=mF.call(t);return i&&(e?t[ya]=n:delete t[ya]),r},_F=Object.prototype.toString,vF=function(t){return _F.call(t)},yF="[object Null]",bF="[object Undefined]",rI=Xi?Xi.toStringTag:void 0,js=function(t){return t==null?t===void 0?bF:yF:rI&&rI in Object(t)?gF(t):vF(t)},Vs=function(t){return t!=null&&typeof t=="object"},EF="[object Arguments]",sI=function(t){return Vs(t)&&js(t)==EF},oI=Object.prototype,IF=oI.hasOwnProperty,wF=oI.propertyIsEnumerable,aI=sI(function(){return arguments}())?sI:function(t){return Vs(t)&&IF.call(t,"callee")&&!wF.call(t,"callee")},Hn=Array.isArray,TF=function(){return!1},Bf=Wi(function(t,e){var n=e&&!e.nodeType&&e,i=n&&t&&!t.nodeType&&t,r=i&&i.exports===n?vi.Buffer:void 0,s=(r?r.isBuffer:void 0)||TF;t.exports=s}),CF=9007199254740991,SF=/^(?:0|[1-9]\d*)$/,lI=function(t,e){var n=typeof t;return!!(e=e==null?CF:e)&&(n=="number"||n!="symbol"&&SF.test(t))&&t>-1&&t%1==0&&t<e},AF=9007199254740991,Hf=function(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=AF},lt={};lt["[object Float32Array]"]=lt["[object Float64Array]"]=lt["[object Int8Array]"]=lt["[object Int16Array]"]=lt["[object Int32Array]"]=lt["[object Uint8Array]"]=lt["[object Uint8ClampedArray]"]=lt["[object Uint16Array]"]=lt["[object Uint32Array]"]=!0,lt["[object Arguments]"]=lt["[object Array]"]=lt["[object ArrayBuffer]"]=lt["[object Boolean]"]=lt["[object DataView]"]=lt["[object Date]"]=lt["[object Error]"]=lt["[object Function]"]=lt["[object Map]"]=lt["[object Number]"]=lt["[object Object]"]=lt["[object RegExp]"]=lt["[object Set]"]=lt["[object String]"]=lt["[object WeakMap]"]=!1;var kF=function(t){return Vs(t)&&Hf(t.length)&&!!lt[js(t)]},cI=function(t){return function(e){return t(e)}},uI=Wi(function(t,e){var n=e&&!e.nodeType&&e,i=n&&t&&!t.nodeType&&t,r=i&&i.exports===n&&nI.process,s=function(){try{var o=i&&i.require&&i.require("util").types;return o||r&&r.binding&&r.binding("util")}catch{}}();t.exports=s}),hI=uI&&uI.isTypedArray,dI=hI?cI(hI):kF,RF=Object.prototype.hasOwnProperty,OF=function(t,e){var n=Hn(t),i=!n&&aI(t),r=!n&&!i&&Bf(t),s=!n&&!i&&!r&&dI(t),o=n||i||r||s,a=o?dF(t.length,String):[],l=a.length;for(var c in t)!e&&!RF.call(t,c)||o&&(c=="length"||r&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||lI(c,l))||a.push(c);return a},LF=Object.prototype,MF=function(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||LF)},NF=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),PF=Object.prototype.hasOwnProperty,DF=function(t){if(!MF(t))return NF(t);var e=[];for(var n in Object(t))PF.call(t,n)&&n!="constructor"&&e.push(n);return e},qf=function(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")},FF="[object AsyncFunction]",xF="[object Function]",UF="[object GeneratorFunction]",jF="[object Proxy]",fI=function(t){if(!qf(t))return!1;var e=js(t);return e==xF||e==UF||e==FF||e==jF},Wf=function(t){return t!=null&&Hf(t.length)&&!fI(t)},Gf=function(t){return Wf(t)?OF(t):DF(t)},pI=function(t,e){return function(n,i){if(n==null)return n;if(!Wf(n))return t(n,i);for(var r=n.length,s=e?r:-1,o=Object(n);(e?s--:++s<r)&&i(o[s],s,o)!==!1;);return n}}(function(t,e){return t&&hF(t,e,Gf)}),VF=function(t,e){var n=[];return pI(t,function(i,r,s){e(i,r,s)&&n.push(i)}),n},BF=function(){this.__data__=[],this.size=0},mI=function(t,e){return t===e||t!=t&&e!=e},zc=function(t,e){for(var n=t.length;n--;)if(mI(t[n][0],e))return n;return-1},HF=Array.prototype.splice,qF=function(t){var e=this.__data__,n=zc(e,t);return!(n<0||(n==e.length-1?e.pop():HF.call(e,n,1),--this.size,0))},WF=function(t){var e=this.__data__,n=zc(e,t);return n<0?void 0:e[n][1]},GF=function(t){return zc(this.__data__,t)>-1},zF=function(t,e){var n=this.__data__,i=zc(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function Bs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Bs.prototype.clear=BF,Bs.prototype.delete=qF,Bs.prototype.get=WF,Bs.prototype.has=GF,Bs.prototype.set=zF;var Kc=Bs,KF=function(){this.__data__=new Kc,this.size=0},XF=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},QF=function(t){return this.__data__.get(t)},gI,YF=function(t){return this.__data__.has(t)},zf=vi["__core-js_shared__"],_I=(gI=/[^.]+$/.exec(zf&&zf.keys&&zf.keys.IE_PROTO||""))?"Symbol(src)_1."+gI:"",JF=function(t){return!!_I&&_I in t},ZF=Function.prototype.toString,Fr=function(t){if(t!=null){try{return ZF.call(t)}catch{}try{return t+""}catch{}}return""},$F=/^\[object .+?Constructor\]$/,ex=Function.prototype,tx=Object.prototype,nx=ex.toString,ix=tx.hasOwnProperty,rx=RegExp("^"+nx.call(ix).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),sx=function(t){return!(!qf(t)||JF(t))&&(fI(t)?rx:$F).test(Fr(t))},ox=function(t,e){return t==null?void 0:t[e]},Hs=function(t,e){var n=ox(t,e);return sx(n)?n:void 0},ba=Hs(vi,"Map"),Ea=Hs(Object,"create"),ax=function(){this.__data__=Ea?Ea(null):{},this.size=0},lx=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},cx="__lodash_hash_undefined__",ux=Object.prototype.hasOwnProperty,hx=function(t){var e=this.__data__;if(Ea){var n=e[t];return n===cx?void 0:n}return ux.call(e,t)?e[t]:void 0},dx=Object.prototype.hasOwnProperty,fx=function(t){var e=this.__data__;return Ea?e[t]!==void 0:dx.call(e,t)},px="__lodash_hash_undefined__",mx=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Ea&&e===void 0?px:e,this};function qs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}qs.prototype.clear=ax,qs.prototype.delete=lx,qs.prototype.get=hx,qs.prototype.has=fx,qs.prototype.set=mx;var vI=qs,gx=function(){this.size=0,this.__data__={hash:new vI,map:new(ba||Kc),string:new vI}},_x=function(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null},Xc=function(t,e){var n=t.__data__;return _x(e)?n[typeof e=="string"?"string":"hash"]:n.map},vx=function(t){var e=Xc(this,t).delete(t);return this.size-=e?1:0,e},yx=function(t){return Xc(this,t).get(t)},bx=function(t){return Xc(this,t).has(t)},Ex=function(t,e){var n=Xc(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function Ws(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Ws.prototype.clear=gx,Ws.prototype.delete=vx,Ws.prototype.get=yx,Ws.prototype.has=bx,Ws.prototype.set=Ex;var Qc=Ws,Ix=200,wx=function(t,e){var n=this.__data__;if(n instanceof Kc){var i=n.__data__;if(!ba||i.length<Ix-1)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new Qc(i)}return n.set(t,e),this.size=n.size,this};function Gs(t){var e=this.__data__=new Kc(t);this.size=e.size}Gs.prototype.clear=KF,Gs.prototype.delete=XF,Gs.prototype.get=QF,Gs.prototype.has=YF,Gs.prototype.set=wx;var Yc=Gs,Tx="__lodash_hash_undefined__",Cx=function(t){return this.__data__.set(t,Tx),this},Sx=function(t){return this.__data__.has(t)};function Jc(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new Qc;++e<n;)this.add(t[e])}Jc.prototype.add=Jc.prototype.push=Cx,Jc.prototype.has=Sx;var Ax=Jc,kx=function(t,e){for(var n=-1,i=t==null?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1},Rx=function(t,e){return t.has(e)},Ox=1,Lx=2,yI=function(t,e,n,i,r,s){var o=n&Ox,a=t.length,l=e.length;if(a!=l&&!(o&&l>a))return!1;var c=s.get(t);if(c&&s.get(e))return c==e;var u=-1,h=!0,d=n&Lx?new Ax:void 0;for(s.set(t,e),s.set(e,t);++u<a;){var f=t[u],p=e[u];if(i)var m=o?i(p,f,u,e,t,s):i(f,p,u,t,e,s);if(m!==void 0){if(m)continue;h=!1;break}if(d){if(!kx(e,function(g,v){if(!Rx(d,v)&&(f===g||r(f,g,n,i,s)))return d.push(v)})){h=!1;break}}else if(f!==p&&!r(f,p,n,i,s)){h=!1;break}}return s.delete(t),s.delete(e),h},bI=vi.Uint8Array,Mx=function(t){var e=-1,n=Array(t.size);return t.forEach(function(i,r){n[++e]=[r,i]}),n},Nx=function(t){var e=-1,n=Array(t.size);return t.forEach(function(i){n[++e]=i}),n},Px=1,Dx=2,Fx="[object Boolean]",xx="[object Date]",Ux="[object Error]",jx="[object Map]",Vx="[object Number]",Bx="[object RegExp]",Hx="[object Set]",qx="[object String]",Wx="[object Symbol]",Gx="[object ArrayBuffer]",zx="[object DataView]",EI=Xi?Xi.prototype:void 0,Kf=EI?EI.valueOf:void 0,Kx=function(t,e,n,i,r,s,o){switch(n){case zx:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Gx:return!(t.byteLength!=e.byteLength||!s(new bI(t),new bI(e)));case Fx:case xx:case Vx:return mI(+t,+e);case Ux:return t.name==e.name&&t.message==e.message;case Bx:case qx:return t==e+"";case jx:var a=Mx;case Hx:var l=i&Px;if(a||(a=Nx),t.size!=e.size&&!l)return!1;var c=o.get(t);if(c)return c==e;i|=Dx,o.set(t,e);var u=yI(a(t),a(e),i,r,s,o);return o.delete(t),u;case Wx:if(Kf)return Kf.call(t)==Kf.call(e)}return!1},Xx=function(t,e){for(var n=-1,i=e.length,r=t.length;++n<i;)t[r+n]=e[n];return t},Qx=function(t,e,n){var i=e(t);return Hn(t)?i:Xx(i,n(t))},Yx=function(){return[]},Jx=Object.prototype.propertyIsEnumerable,II=Object.getOwnPropertySymbols,Zx=II?function(t){return t==null?[]:(t=Object(t),tI(II(t),function(e){return Jx.call(t,e)}))}:Yx,wI=function(t){return Qx(t,Gf,Zx)},$x=1,e2=Object.prototype.hasOwnProperty,t2=function(t,e,n,i,r,s){var o=n&$x,a=wI(t),l=a.length;if(l!=wI(e).length&&!o)return!1;for(var c=l;c--;){var u=a[c];if(!(o?u in e:e2.call(e,u)))return!1}var h=s.get(t);if(h&&s.get(e))return h==e;var d=!0;s.set(t,e),s.set(e,t);for(var f=o;++c<l;){var p=t[u=a[c]],m=e[u];if(i)var g=o?i(m,p,u,e,t,s):i(p,m,u,t,e,s);if(!(g===void 0?p===m||r(p,m,n,i,s):g)){d=!1;break}f||(f=u=="constructor")}if(d&&!f){var v=t.constructor,A=e.constructor;v!=A&&"constructor"in t&&"constructor"in e&&!(typeof v=="function"&&v instanceof v&&typeof A=="function"&&A instanceof A)&&(d=!1)}return s.delete(t),s.delete(e),d},Xf=Hs(vi,"DataView"),Qf=Hs(vi,"Promise"),Yf=Hs(vi,"Set"),Jf=Hs(vi,"WeakMap"),n2=Fr(Xf),i2=Fr(ba),r2=Fr(Qf),s2=Fr(Yf),o2=Fr(Jf),xr=js;(Xf&&xr(new Xf(new ArrayBuffer(1)))!="[object DataView]"||ba&&xr(new ba)!="[object Map]"||Qf&&xr(Qf.resolve())!="[object Promise]"||Yf&&xr(new Yf)!="[object Set]"||Jf&&xr(new Jf)!="[object WeakMap]")&&(xr=function(t){var e=js(t),n=e=="[object Object]"?t.constructor:void 0,i=n?Fr(n):"";if(i)switch(i){case n2:return"[object DataView]";case i2:return"[object Map]";case r2:return"[object Promise]";case s2:return"[object Set]";case o2:return"[object WeakMap]"}return e});var TI=xr,a2=1,CI="[object Arguments]",SI="[object Array]",Zc="[object Object]",AI=Object.prototype.hasOwnProperty,l2=function(t,e,n,i,r,s){var o=Hn(t),a=Hn(e),l=o?SI:TI(t),c=a?SI:TI(e),u=(l=l==CI?Zc:l)==Zc,h=(c=c==CI?Zc:c)==Zc,d=l==c;if(d&&Bf(t)){if(!Bf(e))return!1;o=!0,u=!1}if(d&&!u)return s||(s=new Yc),o||dI(t)?yI(t,e,n,i,r,s):Kx(t,e,l,n,i,r,s);if(!(n&a2)){var f=u&&AI.call(t,"__wrapped__"),p=h&&AI.call(e,"__wrapped__");if(f||p){var m=f?t.value():t,g=p?e.value():e;return s||(s=new Yc),r(m,g,n,i,s)}}return!!d&&(s||(s=new Yc),t2(t,e,n,i,r,s))},kI=function t(e,n,i,r,s){return e===n||(e==null||n==null||!Vs(e)&&!Vs(n)?e!=e&&n!=n:l2(e,n,i,r,t,s))},c2=1,u2=2,h2=function(t,e,n,i){var r=n.length,s=r,o=!i;if(t==null)return!s;for(t=Object(t);r--;){var a=n[r];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++r<s;){var l=(a=n[r])[0],c=t[l],u=a[1];if(o&&a[2]){if(c===void 0&&!(l in t))return!1}else{var h=new Yc;if(i)var d=i(c,u,l,t,e,h);if(!(d===void 0?kI(u,c,c2|u2,i,h):d))return!1}}return!0},RI=function(t){return t==t&&!qf(t)},d2=function(t){for(var e=Gf(t),n=e.length;n--;){var i=e[n],r=t[i];e[n]=[i,r,RI(r)]}return e},OI=function(t,e){return function(n){return n!=null&&n[t]===e&&(e!==void 0||t in Object(n))}},f2=function(t){var e=d2(t);return e.length==1&&e[0][2]?OI(e[0][0],e[0][1]):function(n){return n===t||h2(n,t,e)}},p2="[object Symbol]",Ia=function(t){return typeof t=="symbol"||Vs(t)&&js(t)==p2},m2=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,g2=/^\w*$/,Zf=function(t,e){if(Hn(t))return!1;var n=typeof t;return!(n!="number"&&n!="symbol"&&n!="boolean"&&t!=null&&!Ia(t))||g2.test(t)||!m2.test(t)||e!=null&&t in Object(e)},_2="Expected a function";function $f(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(_2);var n=function(){var i=arguments,r=e?e.apply(this,i):i[0],s=n.cache;if(s.has(r))return s.get(r);var o=t.apply(this,i);return n.cache=s.set(r,o)||s,o};return n.cache=new($f.Cache||Qc),n}$f.Cache=Qc;var v2=$f,y2=500,b2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,E2=/\\(\\)?/g,I2=function(t){var e=v2(t,function(i){return n.size===y2&&n.clear(),i}),n=e.cache;return e}(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(b2,function(n,i,r,s){e.push(r?s.replace(E2,"$1"):i||n)}),e}),ep=function(t,e){for(var n=-1,i=t==null?0:t.length,r=Array(i);++n<i;)r[n]=e(t[n],n,t);return r},w2=1/0,LI=Xi?Xi.prototype:void 0,MI=LI?LI.toString:void 0,T2=function t(e){if(typeof e=="string")return e;if(Hn(e))return ep(e,t)+"";if(Ia(e))return MI?MI.call(e):"";var n=e+"";return n=="0"&&1/e==-w2?"-0":n},C2=function(t){return t==null?"":T2(t)},NI=function(t,e){return Hn(t)?t:Zf(t,e)?[t]:I2(C2(t))},S2=1/0,$c=function(t){if(typeof t=="string"||Ia(t))return t;var e=t+"";return e=="0"&&1/t==-S2?"-0":e},PI=function(t,e){for(var n=0,i=(e=NI(e,t)).length;t!=null&&n<i;)t=t[$c(e[n++])];return n&&n==i?t:void 0},A2=function(t,e,n){var i=t==null?void 0:PI(t,e);return i===void 0?n:i},k2=function(t,e){return t!=null&&e in Object(t)},R2=function(t,e,n){for(var i=-1,r=(e=NI(e,t)).length,s=!1;++i<r;){var o=$c(e[i]);if(!(s=t!=null&&n(t,o)))break;t=t[o]}return s||++i!=r?s:!!(r=t==null?0:t.length)&&Hf(r)&&lI(o,r)&&(Hn(t)||aI(t))},O2=function(t,e){return t!=null&&R2(t,e,k2)},L2=1,M2=2,N2=function(t,e){return Zf(t)&&RI(e)?OI($c(t),e):function(n){var i=A2(n,t);return i===void 0&&i===e?O2(n,t):kI(e,i,L2|M2)}},DI=function(t){return t},P2=function(t){return function(e){return e==null?void 0:e[t]}},D2=function(t){return function(e){return PI(e,t)}},F2=function(t){return Zf(t)?P2($c(t)):D2(t)},FI=function(t){return typeof t=="function"?t:t==null?DI:typeof t=="object"?Hn(t)?N2(t[0],t[1]):f2(t):F2(t)},xI=function(t,e){return(Hn(t)?tI:VF)(t,FI(e))},x2=function(t,e){var n=-1,i=Wf(t)?Array(t.length):[];return pI(t,function(r,s,o){i[++n]=e(r,s,o)}),i},U2=function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t},j2=function(t,e){if(t!==e){var n=t!==void 0,i=t===null,r=t==t,s=Ia(t),o=e!==void 0,a=e===null,l=e==e,c=Ia(e);if(!a&&!c&&!s&&t>e||s&&o&&l&&!a&&!c||i&&o&&l||!n&&l||!r)return 1;if(!i&&!s&&!c&&t<e||c&&n&&r&&!i&&!s||a&&n&&r||!o&&r||!l)return-1}return 0},V2=function(t,e,n){for(var i=-1,r=t.criteria,s=e.criteria,o=r.length,a=n.length;++i<o;){var l=j2(r[i],s[i]);if(l)return i>=a?l:l*(n[i]=="desc"?-1:1)}return t.index-e.index},B2=function(t,e,n){var i=-1;e=ep(e.length?e:[DI],cI(FI));var r=x2(t,function(s,o,a){return{criteria:ep(e,function(l){return l(s)}),index:++i,value:s}});return U2(r,function(s,o){return V2(s,o,n)})},UI=function(t,e,n,i){return t==null?[]:(Hn(e)||(e=e==null?[]:[e]),Hn(n=i?void 0:n)||(n=n==null?[]:[n]),B2(t,e,n))},eu=function(t,e,n){return q2(t.local,e,n)===!0},H2=function(t,e,n){return t.local.streams&&t.local.streams[e]&&t.local.streams[e].stream&&t.local.streams[e].stream["get".concat(n==="video"?"Video":"Audio","Tracks")]()[0]},wa=function(t,e,n,i){var r=W2(t,e,n,i);return r&&r.pendingTrack},q2=function(t,e,n){if(!t)return!1;var i=function(s){switch(s){case"avatar":return!0;case"staged":return s;default:return!!s}},r=t.public.subscribedTracks;return r&&r[e]?i(r[e][n]):!r||i(r.ALL)},W2=function(t,e,n,i){var r=UI(xI(t.streams,function(s){return s.participantId===e&&s.type===n&&s.pendingTrack&&s.pendingTrack.kind===i}),"starttime","desc");return r&&r[0]},G2=function(t,e){var n=t.local.public.customTracks;if(n&&n[e])return n[e].track},z2=function(t,e,n,i){var r="soup-"+n,s=UI(xI(t.streams,function(o){return o.participantId===e&&o.streamId===r&&o.pendingTrack&&o.pendingTrack.kind===i}),"starttime","desc");return s&&s[0]&&s[0].pendingTrack};function jI(t){for(var e=store.getState(),n=0,i=["cam","screen"];n<i.length;n++)for(var r=i[n],s=0,o=["video","audio"];s<o.length;s++){var a=o[s],l=r==="cam"?a:"screen".concat(a.charAt(0).toUpperCase()+a.slice(1)),c=t.tracks[l];if(c){var u=t.local?H2(e,r,a):wa(e,t.session_id,r,a);c.state==="playable"&&(c.track=u),c.persistentTrack=u}}}function VI(t){try{var e=store.getState();for(var n in t.tracks)if(!tp(n)){var i=t.tracks[n].kind;if(i){var r=t.local?G2(e,n,i):z2(e,t.session_id,n,i),s=t.tracks[n];r&&s&&s.state==="playable"&&(t.tracks[n].track=r)}else console.error("unknown type for custom track")}}catch(o){console.error(o)}}function tp(t){return["video","audio","screenVideo","screenAudio"].includes(t)}function BI(t,e){var n=store.getState();if(t.local){if(t.audio)try{t.audioTrack=n.local.streams.cam.stream.getAudioTracks()[0],t.audioTrack||(t.audio=!1)}catch{}if(t.video)try{t.videoTrack=n.local.streams.cam.stream.getVideoTracks()[0],t.videoTrack||(t.video=!1)}catch{}if(t.screen)try{t.screenVideoTrack=n.local.streams.screen.stream.getVideoTracks()[0],t.screenAudioTrack=n.local.streams.screen.stream.getAudioTracks()[0],t.screenVideoTrack||t.screenAudioTrack||(t.screen=!1)}catch{}}else{var i=!0;try{var r=n.participants[t.session_id];r&&r.public&&r.public.rtcType&&r.public.rtcType.impl==="peer-to-peer"&&r.private&&!["connected","completed"].includes(r.private.peeringState)&&(i=!1)}catch(c){console.error(c)}if(!i)return t.audio=!1,t.audioTrack=!1,t.video=!1,t.videoTrack=!1,t.screen=!1,void(t.screenTrack=!1);try{if(n.streams,t.audio&&eu(n,t.session_id,"cam-audio")){var s=wa(n,t.session_id,"cam","audio");s&&(e&&e.audioTrack&&e.audioTrack.id===s.id?t.audioTrack=s:s.muted||(t.audioTrack=s)),t.audioTrack||(t.audio=!1)}if(t.video&&eu(n,t.session_id,"cam-video")){var o=wa(n,t.session_id,"cam","video");o&&(e&&e.videoTrack&&e.videoTrack.id===o.id?t.videoTrack=o:o.muted||(t.videoTrack=o)),t.videoTrack||(t.video=!1)}if(t.screen&&eu(n,t.session_id,"screen-audio")){var a=wa(n,t.session_id,"screen","audio");a&&(e&&e.screenAudioTrack&&e.screenAudioTrack.id===a.id?t.screenAudioTrack=a:a.muted||(t.screenAudioTrack=a))}if(t.screen&&eu(n,t.session_id,"screen-video")){var l=wa(n,t.session_id,"screen","video");l&&(e&&e.screenVideoTrack&&e.screenVideoTrack.id===l.id?t.screenVideoTrack=l:l.muted||(t.screenVideoTrack=l))}t.screenVideoTrack||t.screenAudioTrack||(t.screen=!1)}catch(c){console.error("unexpected error matching up tracks",c)}}}function HI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Gt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?HI(Object(n),!0).forEach(function(i){Vc(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):HI(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function K2(t){var e=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var n,i=_i(t);if(e){var r=_i(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return jc(this,n)}}var qI="video",X2="voice",WI={androidInCallNotification:{title:"string",subtitle:"string",iconName:"string",disableForCustomOverride:"boolean"},disableAutoDeviceManagement:{audio:"boolean",video:"boolean"}},Ur={url:{validate:function(t){return typeof t=="string"},help:"url should be a string"},baseUrl:{validate:function(t){return typeof t=="string"},help:"baseUrl should be a string"},token:{validate:function(t){return typeof t=="string"},help:"token should be a string",queryString:"t"},dailyConfig:{validate:function(t){return window._dailyConfig||(window._dailyConfig={}),window._dailyConfig.experimentalGetUserMediaConstraintsModify=t.experimentalGetUserMediaConstraintsModify,delete t.experimentalGetUserMediaConstraintsModify,!0}},reactNativeConfig:{validate:function(t){return function e(n,i){if(i===void 0)return!1;switch(Bn(i)){case"string":return Bn(n)===i;case"object":if(Bn(n)!=="object")return!1;for(var r in n)if(!e(n[r],i[r]))return!1;return!0;default:return!1}}(t,WI)},help:"reactNativeConfig should look like ".concat(JSON.stringify(WI),", all fields optional")},lang:{validate:function(t){return["de","en-us","en","es","fi","fr","it","jp","ka","nl","no","pl","pt","ru","sv","tr","user"].includes(t)},help:"language not supported. Options are: de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, ru, sv, tr, user"},userName:!0,activeSpeakerMode:!0,showLeaveButton:!0,showLocalVideo:!0,showParticipantsBar:!0,showFullscreenButton:!0,iframeStyle:!0,customLayout:!0,cssFile:!0,cssText:!0,bodyClass:!0,videoSource:{validate:function(t,e){return e._preloadCache.videoDeviceId=t,!0}},audioSource:{validate:function(t,e){return e._preloadCache.audioDeviceId=t,!0}},subscribeToTracksAutomatically:{validate:function(t,e){return e._preloadCache.subscribeToTracksAutomatically=t,!0}},theme:{validate:function(t){var e=["accent","accentText","background","backgroundAccent","baseText","border","mainAreaBg","mainAreaBgAccent","mainAreaText","supportiveText"],n=function(i){for(var r=0,s=Object.keys(i);r<s.length;r++){var o=s[r];if(!e.includes(o))return console.error('unsupported color "'.concat(o,'". Valid colors: ').concat(e.join(", "))),!1;if(!i[o].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i))return console.error("".concat(o,' theme color should be provided in valid hex color format. Received: "').concat(i[o],'"')),!1}return!0};return Bn(t)==="object"&&("light"in t&&"dark"in t||"colors"in t)?"light"in t&&"dark"in t?"colors"in t.light?"colors"in t.dark?n(t.light.colors)&&n(t.dark.colors):(console.error('Dark theme is missing "colors" property.',t),!1):(console.error('Light theme is missing "colors" property.',t),!1):n(t.colors):(console.error('Theme must contain either both "light" and "dark" properties, or "colors".',t),!1)},help:"unsupported theme configuration. Check error logs for detailed info."},layoutConfig:{validate:function(t){if("grid"in t){var e=t.grid;if("maxTilesPerPage"in e){if(!Number.isInteger(e.maxTilesPerPage))return console.error("grid.maxTilesPerPage should be an integer. You passed ".concat(e.maxTilesPerPage,".")),!1;if(e.maxTilesPerPage>49)return console.error("grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."),!1}if("minTilesPerPage"in e){if(!Number.isInteger(e.minTilesPerPage))return console.error("grid.minTilesPerPage should be an integer. You passed ".concat(e.minTilesPerPage,".")),!1;if(e.minTilesPerPage<1)return console.error("grid.minTilesPerPage can't be lower than 1."),!1;if("maxTilesPerPage"in e&&e.minTilesPerPage>e.maxTilesPerPage)return console.error("grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."),!1}}return!0},help:"unsupported layoutConfig. Check error logs for detailed info."},receiveSettings:{validate:function(t){return GI(t,{allowAllParticipantsKey:!1})},help:XI({allowAllParticipantsKey:!1})},inputSettings:{validate:function(t){return zI(t)},help:KI()},layout:{validate:function(t){return t==="custom-v1"||t==="browser"||t==="none"},help:'layout may only be set to "custom-v1"',queryString:"layout"},emb:{queryString:"emb"},embHref:{queryString:"embHref"},dailyJsVersion:{queryString:"dailyJsVersion"}},tu={styles:{validate:function(t){for(var e in t)if(e!=="cam"&&e!=="screen")return!1;if(t.cam){for(var e in t.cam)if(e!=="div"&&e!=="video")return!1}if(t.screen){for(var e in t.screen)if(e!=="div"&&e!=="video")return!1}return!0},help:"styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }"},setSubscribedTracks:{validate:function(t,e,n){if(e._preloadCache.subscribeToTracksAutomatically)return!1;var i=[!0,!1,"staged"];if(i.includes(t)||!Wt()&&t==="avatar")return!0;for(var r in t)if(!["audio","video","screenAudio","screenVideo"].includes(r)||!i.includes(t[r]))return!1;return!0},help:"setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: "+"true".concat(Wt()?"":" | 'avatar'"," | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }")},setAudio:!0,setVideo:!0,eject:!0};function Ta(t){var e={};for(var n in t)t[n]instanceof MediaStreamTrack?e[n]=Wc:(n==="dailyConfig"&&(t[n].modifyLocalSdpHook&&(window._dailyConfig&&(window._dailyConfig.modifyLocalSdpHook=t[n].modifyLocalSdpHook),delete t[n].modifyLocalSdpHook),t[n].modifyRemoteSdpHook&&(window._dailyConfig&&(window._dailyConfig.modifyRemoteSdpHook=t[n].modifyRemoteSdpHook),delete t[n].modifyRemoteSdpHook)),e[n]=t[n]);return e}function Ue(){if(Wt())throw new Error("This daily-js method is not currently supported in React Native")}function np(){if(!Wt())throw new Error("This daily-js method is only supported in React Native")}function GI(t,e){for(var n=e.allowAllParticipantsKey,i=function(h){var d=["local"];return n||d.push("*"),h&&!d.includes(h)},r=function(h){return!!(h.layer===void 0||Number.isInteger(h.layer)&&h.layer>=0||h.layer==="inherit")},s=function(h){return!!h&&!(h.video&&!r(h.video))&&!(h.screenVideo&&!r(h.screenVideo))},o=0,a=Object.entries(t);o<a.length;o++){var l=ND(a[o],2),c=l[0],u=l[1];if(!i(c)||!s(u))return!1}return!0}function zI(t){return Bn(t)==="object"&&!(!t.video||Bn(t.video)!=="object")&&!!function(e){if(!e||Bn(e)!=="object"||Object.keys(e).length===0||e.type&&(n=e.type,typeof n!="string"||!Object.values(Ff).includes(n)))return!1;var n;return!(e.publish!==void 0&&typeof e.publish!="boolean"||e.config&&(Bn(e.config)!=="object"||!function(i,r){var s=Object.keys(r);if(s.length===0)return!0;var o="invalid object in inputSettings -> video -> processor -> config";switch(i){case Ff.BGBLUR:if(s.length>1||s[0]!=="strength")throw new Error(o);if(typeof r.strength!="number"||r.strength<=0||r.strength>1||isNaN(r.strength))throw new Error("".concat(o,"; expected: {0 < strength <= 1}, got: ").concat(r.strength));default:return!0}}(e.type,e.config)))}(t.video.processor)}function KI(){var t=Object.values(Ff).join(" | ");return"inputSettings must be of the form: { video: { processor: [ ".concat(t," ] }, publish?: boolean, config?: {} }")}function XI(t){var e=t.allowAllParticipantsKey;return"receiveSettings must be of the form { [<remote participant id> | ".concat(XD).concat(e?' | "'.concat(QD,'"'):"","]: ")+'{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}'}var Qj=function(t){Uc(n,Dc);var e=K2(n);function n(i){var r,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Gi(this,n),r=e.call(this),Vc(xc(r),"handleNativeAppActiveStateChange",function(a){r.disableReactNativeAutoDeviceManagement("video")||(a?r.camUnmutedBeforeLosingNativeActiveState&&r.setLocalVideo(!0):(r.camUnmutedBeforeLosingNativeActiveState=r.localVideo(),r.camUnmutedBeforeLosingNativeActiveState&&r.setLocalVideo(!1)))}),Vc(xc(r),"handleNativeAudioFocusChange",function(a){r.disableReactNativeAutoDeviceManagement("audio")||(r._hasNativeAudioFocus=a,r.toggleParticipantAudioBasedOnNativeAudioFocus(),r._hasNativeAudioFocus?r.micUnmutedBeforeLosingNativeAudioFocus&&r.setLocalAudio(!0):(r.micUnmutedBeforeLosingNativeAudioFocus=r.localAudio(),r.setLocalAudio(!1)))}),s.dailyJsVersion="0.21.0",r._iframe=i,r._callObjectMode=s.layout==="none"&&!r._iframe,r._preloadCache={subscribeToTracksAutomatically:!0,audioDeviceId:null,videoDeviceId:null,outputDeviceId:null},r._callObjectMode&&(window._dailyPreloadCache=r._preloadCache),s.showLocalVideo!==void 0?r._callObjectMode?console.error("showLocalVideo is not available in call object mode"):r._showLocalVideo=!!s.showLocalVideo:r._showLocalVideo=!0,s.showParticipantsBar!==void 0?r._callObjectMode?console.error("showParticipantsBar is not available in call object mode"):r._showParticipantsBar=!!s.showParticipantsBar:r._showParticipantsBar=!0,s.activeSpeakerMode!==void 0?r._callObjectMode?console.error("activeSpeakerMode is not available in call object mode"):r._activeSpeakerMode=!!s.activeSpeakerMode:r._activeSpeakerMode=!1,s.receiveSettings?r._callObjectMode?r._receiveSettings=s.receiveSettings:console.error("receiveSettings is only available in call object mode"):r._receiveSettings={},r._inputSettings={},s.inputSettings&&(r._inputSettings=s.inputSettings),r.validateProperties(s),r.properties=Gt({},s),r._callObjectLoader=r._callObjectMode?new lF:null,r._meetingState=WE,r._isPreparingToJoin=!1,r._accessState={access:GE},r._nativeInCallAudioMode=qI,r._participants={},r._waitingParticipants={},r._inputEventsOn={},r._network={threshold:"good",quality:100},r._activeSpeaker={},r._callFrameId=Uf(),r._messageChannel=Wt()?new nF:new eF,r._iframe&&(r._iframe.requestFullscreen?r._iframe.addEventListener("fullscreenchange",function(a){document.fullscreenElement===r._iframe?(r.emit(xs,{action:xs}),r.sendMessageToCallMachine({action:xs})):(r.emit(Us,{action:Us}),r.sendMessageToCallMachine({action:Us}))}):r._iframe.webkitRequestFullscreen&&r._iframe.addEventListener("webkitfullscreenchange",function(a){document.webkitFullscreenElement===r._iframe?(r.emit(xs,{action:xs}),r.sendMessageToCallMachine({action:xs})):(r.emit(Us,{action:Us}),r.sendMessageToCallMachine({action:Us}))})),Wt()){var o=r.nativeUtils();o.addAudioFocusChangeListener&&o.removeAudioFocusChangeListener&&o.addAppActiveStateChangeListener&&o.removeAppActiveStateChangeListener||console.warn("expected (add|remove)(AudioFocus|AppActiveState)ChangeListener to be available in React Native"),r._hasNativeAudioFocus=!0,o.addAudioFocusChangeListener(r.handleNativeAudioFocusChange),o.addAppActiveStateChangeListener(r.handleNativeAppActiveStateChange)}return r._messageChannel.addListenerForMessagesFromCallMachine(r.handleMessageFromCallMachine,r._callFrameId,xc(r)),r}return zi(n,null,[{key:"supportedBrowser",value:function(){if(Wt())return{supported:!0,mobile:!0,name:"React Native",version:null,supportsScreenShare:!1,supportsSfu:!0,supportsVideoProcessing:!1};var i=class{static getParser(r,s=!1){if(typeof r!="string")throw new Error("UserAgent should be a string");return new qE(r,s)}static parse(r){return new qE(r).getResult()}static get BROWSER_MAP(){return HE}static get ENGINE_MAP(){return Ki}static get OS_MAP(){return vn}static get PLATFORMS_MAP(){return Tt}}.getParser($n());return{supported:!!KE(),mobile:i.getPlatformType()==="mobile",name:i.getBrowserName(),version:i.getBrowserVersion(),supportsScreenShare:!!YD(),supportsSfu:!!xf(),supportsVideoProcessing:ZD()}}},{key:"version",value:function(){return"0.21.0"}},{key:"createCallObject",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return i.layout="none",new n(null,i)}},{key:"wrap",value:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Ue(),!i||!i.contentWindow||typeof i.src!="string")throw new Error("DailyIframe::Wrap needs an iframe-like first argument");return r.layout||(r.customLayout?r.layout="custom-v1":r.layout="browser"),new n(i,r)}},{key:"createFrame",value:function(i,r){var s,o;Ue(),i&&r?(s=i,o=r):i&&i.append?(s=i,o={}):(s=document.body,o=i||{});var a=o.iframeStyle;a||(a=s===document.body?{position:"fixed",border:"1px solid black",backgroundColor:"white",width:"375px",height:"450px",right:"1em",bottom:"1em"}:{border:0,width:"100%",height:"100%"});var l=document.createElement("iframe");window.navigator&&window.navigator.userAgent.match(/Chrome\/61\./)?l.allow="microphone, camera":l.allow="microphone; camera; autoplay; display-capture",l.style.visibility="hidden",s.appendChild(l),l.style.visibility=null,Object.keys(a).forEach(function(c){return l.style[c]=a[c]}),o.layout||(o.customLayout?o.layout="custom-v1":o.layout="browser");try{return new n(l,o)}catch(c){throw s.removeChild(l),c}}},{key:"createTransparentFrame",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ue();var r=document.createElement("iframe");return r.allow="microphone; camera; autoplay",r.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      pointer-events: none;
    `,document.body.appendChild(r),i.layout||(i.layout="custom-v1"),n.wrap(r,i)}}]),zi(n,[{key:"destroy",value:function(){var i=xe(Y.mark(function r(){var s,o,a;return Y.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(l.prev=0,![un,Df].includes(this._meetingState)){l.next=4;break}return l.next=4,this.leave();case 4:l.next=8;break;case 6:l.prev=6,l.t0=l.catch(0);case 8:(s=this._iframe)&&(o=s.parentElement)&&o.removeChild(s),this._messageChannel.removeListener(this.handleMessageFromCallMachine),Wt()&&((a=this.nativeUtils()).removeAudioFocusChangeListener(this.handleNativeAudioFocusChange),a.removeAppActiveStateChangeListener(this.handleNativeAppActiveStateChange)),this.resetMeetingDependentVars();case 13:case"end":return l.stop()}},r,this,[[0,6]])}));return function(){return i.apply(this,arguments)}}()},{key:"loadCss",value:function(i){var r=i.bodyClass,s=i.cssFile,o=i.cssText;return Ue(),this.sendMessageToCallMachine({action:"load-css",cssFile:this.absoluteUrl(s),bodyClass:r,cssText:o}),this}},{key:"iframe",value:function(){return Ue(),this._iframe}},{key:"meetingState",value:function(){return this._meetingState}},{key:"accessState",value:function(){if(!this._callObjectMode)throw new Error("accessState() currently only supported in call object mode");return this._accessState}},{key:"participants",value:function(){return this._participants}},{key:"waitingParticipants",value:function(){if(!this._callObjectMode)throw new Error("waitingParticipants() currently only supported in call object mode");return this._waitingParticipants}},{key:"validateParticipantProperties",value:function(i,r){for(var s in r){if(!tu[s])throw new Error("unrecognized updateParticipant property ".concat(s));if(tu[s].validate&&!tu[s].validate(r[s],this,this._participants[i]))throw new Error(tu[s].help)}}},{key:"updateParticipant",value:function(i,r){return this._participants.local&&this._participants.local.session_id===i&&(i="local"),i&&r&&this._participants[i]&&(this.validateParticipantProperties(i,r),this.sendMessageToCallMachine({action:"update-participant",id:i,properties:r})),this}},{key:"updateParticipants",value:function(i){var r=this._participants.local&&this._participants.local.session_id;for(var s in i)s===r&&(s="local"),s&&i[s]&&(this._participants[s]||s==="*")?this.validateParticipantProperties(s,i[s]):(console.warn("unrecognized participant in updateParticipants: ".concat(s)),delete i[s]);return this.sendMessageToCallMachine({action:"update-participants",participants:i}),this}},{key:"updateWaitingParticipant",value:function(){var i=xe(Y.mark(function r(){var s,o,a=this,l=arguments;return Y.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(s=l.length>0&&l[0]!==void 0?l[0]:"",o=l.length>1&&l[1]!==void 0?l[1]:{},this._callObjectMode){c.next=4;break}throw new Error("updateWaitingParticipant() currently only supported in call object mode");case 4:if(this._meetingState===un){c.next=6;break}throw new Error("updateWaitingParticipant() only supported for joined meetings");case 6:if(typeof s=="string"&&Bn(o)==="object"){c.next=8;break}throw new Error("updateWaitingParticipant() must take an id string and a updates object");case 8:return c.abrupt("return",new Promise(function(u,h){a.sendMessageToCallMachine({action:"daily-method-update-waiting-participant",id:s,updates:o},function(d){d.error&&h(d.error),d.id||h(new Error("unknown error in updateWaitingParticipant()")),u({id:d.id})})}));case 9:case"end":return c.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"updateWaitingParticipants",value:function(){var i=xe(Y.mark(function r(){var s,o=this,a=arguments;return Y.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(s=a.length>0&&a[0]!==void 0?a[0]:{},this._callObjectMode){l.next=3;break}throw new Error("updateWaitingParticipants() currently only supported in call object mode");case 3:if(this._meetingState===un){l.next=5;break}throw new Error("updateWaitingParticipants() only supported for joined meetings");case 5:if(Bn(s)==="object"){l.next=7;break}throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");case 7:return l.abrupt("return",new Promise(function(c,u){o.sendMessageToCallMachine({action:"daily-method-update-waiting-participants",updatesById:s},function(h){h.error&&u(h.error),h.ids||u(new Error("unknown error in updateWaitingParticipants()")),c({ids:h.ids})})}));case 8:case"end":return l.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"requestAccess",value:function(){var i=xe(Y.mark(function r(){var s,o,a,l,c,u=this,h=arguments;return Y.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(s=h.length>0&&h[0]!==void 0?h[0]:{},o=s.access,a=o===void 0?{level:"full"}:o,l=s.name,c=l===void 0?"":l,this._callObjectMode){d.next=3;break}throw new Error("requestAccess() currently only supported in call object mode");case 3:if(this._meetingState===un){d.next=5;break}throw new Error("requestAccess() only supported for joined meetings");case 5:return d.abrupt("return",new Promise(function(f,p){u.sendMessageToCallMachine({action:"daily-method-request-access",access:a,name:c},function(m){m.error&&p(m.error),m.access||p(new Error("unknown error in requestAccess()")),f({access:m.access,granted:m.granted})})}));case 6:case"end":return d.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"localAudio",value:function(){return this._participants.local?this._participants.local.audio:null}},{key:"localVideo",value:function(){return this._participants.local?this._participants.local.video:null}},{key:"setLocalAudio",value:function(i){return this.sendMessageToCallMachine({action:"local-audio",state:i}),this}},{key:"setLocalVideo",value:function(i){return this.sendMessageToCallMachine({action:"local-video",state:i}),this}},{key:"getReceiveSettings",value:function(){var i=xe(Y.mark(function r(s){var o,a,l,c=this,u=arguments;return Y.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(o=u.length>1&&u[1]!==void 0?u[1]:{},a=o.showInheritedValues,l=a!==void 0&&a,this._callObjectMode){h.next=3;break}throw new Error("getReceiveSettings() only supported in call object mode");case 3:h.t0=Bn(s),h.next=h.t0==="string"?6:h.t0==="undefined"?7:8;break;case 6:return h.abrupt("return",new Promise(function(d){c.sendMessageToCallMachine({action:"get-single-participant-receive-settings",id:s,showInheritedValues:l},function(f){d(f.receiveSettings)})}));case 7:return h.abrupt("return",this._receiveSettings);case 8:throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments');case 9:case"end":return h.stop()}},r,this)}));return function(r){return i.apply(this,arguments)}}()},{key:"updateReceiveSettings",value:function(){var i=xe(Y.mark(function r(s){var o=this;return Y.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(this._callObjectMode){a.next=2;break}throw new Error("updateReceiveSettings() only supported in call object mode");case 2:if(GI(s,{allowAllParticipantsKey:!0})){a.next=4;break}throw new Error(XI({allowAllParticipantsKey:!0}));case 4:if(this._meetingState===un){a.next=6;break}throw new Error("updateReceiveSettings() is only allowed when joined. To specify receive settings earlier, use the receiveSettings config property.");case 6:return a.abrupt("return",new Promise(function(l){o.sendMessageToCallMachine({action:"update-receive-settings",receiveSettings:s},function(c){l({receiveSettings:c.receiveSettings})})}));case 7:case"end":return a.stop()}},r,this)}));return function(r){return i.apply(this,arguments)}}()},{key:"getInputSettings",value:function(){return this._inputSettings}},{key:"updateInputSettings",value:function(){var i=xe(Y.mark(function r(s){var o=this;return Y.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(zI(s)){a.next=2;break}throw new Error(KI());case 2:return a.abrupt("return",new Promise(function(l){o.sendMessageToCallMachine({action:"update-input-settings",inputSettings:s},function(c){l({inputSettings:c.inputSettings})})}));case 3:case"end":return a.stop()}},r)}));return function(r){return i.apply(this,arguments)}}()},{key:"setBandwidth",value:function(i){var r=i.kbs,s=i.trackConstraints;return Ue(),this.sendMessageToCallMachine({action:"set-bandwidth",kbs:r,trackConstraints:s}),this}},{key:"getDailyLang",value:function(){var i=this;return Ue(),new Promise(function(){var r=xe(Y.mark(function s(o){var a;return Y.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:a=function(c){delete c.action,delete c.callbackStamp,o(c)},i.sendMessageToCallMachine({action:"get-daily-lang"},a);case 2:case"end":return l.stop()}},s)}));return function(s){return r.apply(this,arguments)}}())}},{key:"setDailyLang",value:function(i){return Ue(),this.sendMessageToCallMachine({action:"set-daily-lang",lang:i}),this}},{key:"getMeetingSession",value:function(){var i=xe(Y.mark(function r(){var s=this;return Y.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(this._meetingState===un){o.next=2;break}throw new Error("getMeetingSession() is only allowed when joined");case 2:return o.abrupt("return",new Promise(function(){var a=xe(Y.mark(function l(c){var u;return Y.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:u=function(d){delete d.action,delete d.callbackStamp,delete d.callFrameId,c(d)},s.sendMessageToCallMachine({action:"get-meeting-session"},u);case 2:case"end":return h.stop()}},l)}));return function(l){return a.apply(this,arguments)}}()));case 3:case"end":return o.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"setUserName",value:function(i,r){var s=this;return this.properties.userName=i,new Promise(function(){var o=xe(Y.mark(function a(l){var c;return Y.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:c=function(h){delete h.action,delete h.callbackStamp,l(h)},s.sendMessageToCallMachine({action:"set-user-name",name:i!=null?i:"",thisMeetingOnly:Wt()||!!r&&!!r.thisMeetingOnly},c);case 2:case"end":return u.stop()}},a)}));return function(a){return o.apply(this,arguments)}}())}},{key:"startCamera",value:function(){var i=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(function(){var s=xe(Y.mark(function o(a,l){var c;return Y.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(c=function(h){delete h.action,delete h.callbackStamp,a(h)},!i.needsLoad()){u.next=10;break}return u.prev=2,u.next=5,i.load(r);case 5:u.next=10;break;case 7:u.prev=7,u.t0=u.catch(2),l(u.t0);case 10:i.sendMessageToCallMachine({action:"start-camera",properties:Ta(i.properties),preloadCache:Ta(i._preloadCache)},c);case 11:case"end":return u.stop()}},o,null,[[2,7]])}));return function(o,a){return s.apply(this,arguments)}}())}},{key:"cycleCamera",value:function(){var i=this;return new Promise(function(r,s){i.sendMessageToCallMachine({action:"cycle-camera"},function(o){r({device:o.device})})})}},{key:"cycleMic",value:function(){var i=this;return Ue(),new Promise(function(r,s){i.sendMessageToCallMachine({action:"cycle-mic"},function(o){r({device:o.device})})})}},{key:"getCameraFacingMode",value:function(){var i=this;return np(),new Promise(function(r,s){i.sendMessageToCallMachine({action:"get-camera-facing-mode"},function(o){r(o.facingMode)})})}},{key:"setInputDevices",value:function(i){var r=i.audioDeviceId,s=i.videoDeviceId,o=i.audioSource,a=i.videoSource;return console.warn("setInputDevices() is deprecated: instead use setInputDevicesAsync(), which returns a Promise"),this.setInputDevicesAsync({audioDeviceId:r,videoDeviceId:s,audioSource:o,videoSource:a}),this}},{key:"setInputDevicesAsync",value:function(){var i=xe(Y.mark(function r(s){var o,a,l,c,u=this;return Y.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(o=s.audioDeviceId,a=s.videoDeviceId,l=s.audioSource,c=s.videoSource,Ue(),l!==void 0&&(o=l),c!==void 0&&(a=c),o&&(this._preloadCache.audioDeviceId=o),a&&(this._preloadCache.videoDeviceId=a),!this._callObjectMode||!this.needsLoad()){h.next=8;break}return h.abrupt("return",{camera:{deviceId:this._preloadCache.videoDeviceId},mic:{deviceId:this._preloadCache.audioDeviceId},speaker:{deviceId:this._preloadCache.outputDeviceId}});case 8:return o instanceof MediaStreamTrack&&(o=Wc),a instanceof MediaStreamTrack&&(a=Wc),h.abrupt("return",new Promise(function(d){u.sendMessageToCallMachine({action:"set-input-devices",audioDeviceId:o,videoDeviceId:a},function(f){delete f.action,delete f.callbackStamp,f.returnPreloadCache?d({camera:{deviceId:u._preloadCache.videoDeviceId},mic:{deviceId:u._preloadCache.audioDeviceId},speaker:{deviceId:u._preloadCache.outputDeviceId}}):d(f)})}));case 11:case"end":return h.stop()}},r,this)}));return function(r){return i.apply(this,arguments)}}()},{key:"setOutputDevice",value:function(i){var r=i.outputDeviceId;return Ue(),r&&(this._preloadCache.outputDeviceId=r),this._callObjectMode&&this._meetingState!==un?this:(this.sendMessageToCallMachine({action:"set-output-device",outputDeviceId:r}),this)}},{key:"getInputDevices",value:function(){var i=xe(Y.mark(function r(){var s=this;return Y.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(Ue(),!this._callObjectMode||!this.needsLoad()){o.next=3;break}return o.abrupt("return",{camera:{deviceId:this._preloadCache.videoDeviceId},mic:{deviceId:this._preloadCache.audioDeviceId},speaker:{deviceId:this._preloadCache.outputDeviceId}});case 3:return o.abrupt("return",new Promise(function(a,l){s.sendMessageToCallMachine({action:"get-input-devices"},function(c){delete c.action,delete c.callbackStamp,c.returnPreloadCache?a({camera:{deviceId:s._preloadCache.videoDeviceId},mic:{deviceId:s._preloadCache.audioDeviceId},speaker:{deviceId:s._preloadCache.outputDeviceId}}):a(c)})}));case 4:case"end":return o.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"nativeInCallAudioMode",value:function(){return np(),this._nativeInCallAudioMode}},{key:"setNativeInCallAudioMode",value:function(i){if(np(),[qI,X2].includes(i)){if(i!==this._nativeInCallAudioMode)return this._nativeInCallAudioMode=i,!this.disableReactNativeAutoDeviceManagement("audio")&&this.isMeetingPendingOrOngoing(this._meetingState,this._isPreparingToJoin)&&this.nativeUtils().setAudioMode(this._nativeInCallAudioMode),this}else console.error("invalid in-call audio mode specified: ",i)}},{key:"preAuth",value:function(){var i=xe(Y.mark(function r(){var s,o,a,l=this,c=arguments;return Y.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(s=c.length>0&&c[0]!==void 0?c[0]:{},this._callObjectMode){u.next=3;break}throw new Error("preAuth() currently only supported in call object mode");case 3:if(![qc,un].includes(this._meetingState)){u.next=5;break}throw new Error("preAuth() not supported after joining a meeting");case 5:if(!this.needsLoad()){u.next=8;break}return u.next=8,this.load(s);case 8:if(s.url){u.next=10;break}throw new Error("preAuth() requires at least a url to be provided");case 10:if(o=va(s.url),a=va(this.properties.url||this.properties.baseUrl),o===a){u.next=14;break}throw new Error("url in preAuth() has a different bundle url than the one loaded (".concat(a," -> ").concat(o,")"));case 14:return this.validateProperties(s),this.properties=Gt(Gt({},this.properties),s),u.abrupt("return",new Promise(function(h,d){l.sendMessageToCallMachine({action:"daily-method-preauth",properties:Ta(l.properties)},function(f){return f.error?d(f.error):f.access?(l._didPreAuth=!0,void h({access:f.access})):d(new Error("unknown error in preAuth()"))})}));case 17:case"end":return u.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"load",value:function(){var i=xe(Y.mark(function r(s){var o=this;return Y.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(this.needsLoad()){a.next=2;break}return a.abrupt("return");case 2:if(s&&(this.validateProperties(s),this.properties=Gt(Gt({},this.properties),s)),this._callObjectMode||this.properties.url){a.next=5;break}throw new Error("can't load iframe meeting because url property isn't set");case 5:this.updateMeetingState(Df);try{this.emit("loading",{action:"loading"})}catch(l){console.log("could not emit 'loading'",l)}if(!this._callObjectMode){a.next=11;break}return a.abrupt("return",new Promise(function(l,c){o._callObjectLoader.cancel(),o._callObjectLoader.load(o.properties.url||o.properties.baseUrl,o._callFrameId,function(u){o.updateMeetingState("loaded"),u&&o.emit("loaded",{action:"loaded"}),l()},function(u,h){o.emit("load-attempt-failed",{action:"load-attempt-failed",errorMsg:u}),h||(o.updateMeetingState(Dr),o.resetMeetingDependentVars(),o.emit("error",{action:"error",errorMsg:u}),c(u))})}));case 11:return this._iframe.src=this.assembleMeetingUrl(),a.abrupt("return",new Promise(function(l,c){o._loadedCallback=function(u){if(o._meetingState!==Dr){for(var h in o.updateMeetingState("loaded"),(o.properties.cssFile||o.properties.cssText)&&o.loadCss(o.properties),o._inputEventsOn)o.sendMessageToCallMachine({action:"register-input-handler",on:h});l()}else c(u)}}));case 13:case"end":return a.stop()}},r,this)}));return function(r){return i.apply(this,arguments)}}()},{key:"join",value:function(){var i=xe(Y.mark(function r(){var s,o,a,l,c=this,u=arguments;return Y.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(s=u.length>0&&u[0]!==void 0?u[0]:{},o=!1,!this.needsLoad()){h.next=15;break}return this.updateIsPreparingToJoin(!0),h.prev=4,h.next=7,this.load(s);case 7:h.next=13;break;case 9:return h.prev=9,h.t0=h.catch(4),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject(h.t0));case 13:h.next=42;break;case 15:if(o=!(!this.properties.cssFile&&!this.properties.cssText),!this._didPreAuth){h.next=25;break}if(!s.url||s.url===this.properties.url){h.next=21;break}return console.error("url in join() is different than the one used in preAuth()"),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject());case 21:if(!s.token||s.token===this.properties.token){h.next=25;break}return console.error("token in join() is different than the one used in preAuth()"),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject());case 25:if(!s.url){h.next=40;break}if(!this._callObjectMode){h.next=36;break}if(a=va(s.url),l=va(this.properties.url||this.properties.baseUrl),a===l){h.next=33;break}return console.error("url in join() has a different bundle url than the one loaded (".concat(l," -> ").concat(a,")")),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject());case 33:this.properties.url=s.url,h.next=40;break;case 36:if(!s.url||s.url===this.properties.url){h.next=40;break}return console.error("url in join() is different than the one used in load() (".concat(this.properties.url," -> ").concat(s.url,")")),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject());case 40:this.validateProperties(s),this.properties=Gt(Gt({},this.properties),s);case 42:if(s.showLocalVideo!==void 0&&(this._callObjectMode?console.error("showLocalVideo is not available in callObject mode"):this._showLocalVideo=!!s.showLocalVideo),s.showParticipantsBar!==void 0&&(this._callObjectMode?console.error("showParticipantsBar is not available in callObject mode"):this._showParticipantsBar=!!s.showParticipantsBar),this._meetingState!==un&&this._meetingState!==qc){h.next=48;break}return console.warn("already joined meeting, call leave() before joining again"),this.updateIsPreparingToJoin(!1),h.abrupt("return");case 48:this.updateMeetingState(qc,!1);try{this.emit("joining-meeting",{action:"joining-meeting"})}catch(d){console.log("could not emit 'joining-meeting'",d)}return this.sendMessageToCallMachine({action:"join-meeting",properties:Ta(this.properties),preloadCache:Ta(this._preloadCache)}),h.abrupt("return",new Promise(function(d,f){c._joinedCallback=function(p,m){if(c._meetingState!==Dr){if(c.updateMeetingState(un),p)for(var g in p)c._callObjectMode&&(jI(p[g]),VI(p[g]),BI(p[g],c._participants[g])),c._participants[g]=Gt({},p[g]),c.toggleParticipantAudioBasedOnNativeAudioFocus();o&&c.loadCss(c.properties),d(p)}else f(m)}}));case 52:case"end":return h.stop()}},r,this,[[4,9]])}));return function(){return i.apply(this,arguments)}}()},{key:"leave",value:function(){var i=xe(Y.mark(function r(){var s=this;return Y.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",new Promise(function(a,l){if(s._callObjectLoader&&!s._callObjectLoader.loaded){s._callObjectLoader.cancel(),s.updateMeetingState(Pr),s.resetMeetingDependentVars();try{s.emit(Pr,{action:Pr})}catch(c){console.log("could not emit 'left-meeting'",c)}a()}else s._meetingState===Pr||s._meetingState===Dr?a():s.sendMessageToCallMachine({action:"leave-meeting"},function(){a()})}));case 1:case"end":return o.stop()}},r)}));return function(){return i.apply(this,arguments)}}()},{key:"startScreenShare",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ue(),i.mediaStream&&(this._preloadCache.screenMediaStream=i.mediaStream,i.mediaStream=Wc),this.sendMessageToCallMachine({action:"local-screen-start",captureOptions:i})}},{key:"stopScreenShare",value:function(){Ue(),this.sendMessageToCallMachine({action:"local-screen-stop"})}},{key:"startRecording",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ue(),this.sendMessageToCallMachine(Gt({action:"local-recording-start"},i))}},{key:"updateRecording",value:function(i){var r=i.layout,s=r===void 0?{preset:"default"}:r;this.sendMessageToCallMachine({action:"daily-method-update-recording",layout:s})}},{key:"stopRecording",value:function(){Ue(),this.sendMessageToCallMachine({action:"local-recording-stop"})}},{key:"startLiveStreaming",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.sendMessageToCallMachine(Gt({action:"daily-method-start-live-streaming"},i))}},{key:"updateLiveStreaming",value:function(i){var r=i.layout,s=r===void 0?{preset:"default"}:r;this.sendMessageToCallMachine({action:"daily-method-update-live-streaming",layout:s})}},{key:"stopLiveStreaming",value:function(){this.sendMessageToCallMachine({action:"daily-method-stop-live-streaming"})}},{key:"startTranscription",value:function(){this.sendMessageToCallMachine({action:"daily-method-start-transcription"})}},{key:"stopTranscription",value:function(){this.sendMessageToCallMachine({action:"daily-method-stop-transcription"})}},{key:"getNetworkStats",value:function(){var i=this;return this._meetingState!==un?{stats:{latest:{}}}:new Promise(function(r,s){i.sendMessageToCallMachine({action:"get-calc-stats"},function(o){r(Gt({stats:o.stats},i._network))})})}},{key:"getActiveSpeaker",value:function(){return Ue(),this._activeSpeaker}},{key:"setActiveSpeakerMode",value:function(i){return Ue(),this.sendMessageToCallMachine({action:"set-active-speaker-mode",enabled:i}),this}},{key:"activeSpeakerMode",value:function(){return Ue(),this._activeSpeakerMode}},{key:"subscribeToTracksAutomatically",value:function(){return this._preloadCache.subscribeToTracksAutomatically}},{key:"setSubscribeToTracksAutomatically",value:function(i){if(this._meetingState!==un)throw new Error("setSubscribeToTracksAutomatically() is only allowed when joined");return this._preloadCache.subscribeToTracksAutomatically=i,this.sendMessageToCallMachine({action:"daily-method-subscribe-to-tracks-automatically",enabled:i}),this}},{key:"enumerateDevices",value:function(){var i=xe(Y.mark(function r(){var s,o=this;return Y.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(Ue(),!this._callObjectMode){a.next=6;break}return a.next=4,navigator.mediaDevices.enumerateDevices();case 4:return s=a.sent,a.abrupt("return",{devices:s.map(function(l){return JSON.parse(JSON.stringify(l))})});case 6:return a.abrupt("return",new Promise(function(l,c){o.sendMessageToCallMachine({action:"enumerate-devices"},function(u){l({devices:u.devices})})}));case 7:case"end":return a.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"sendAppMessage",value:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"*";if(JSON.stringify(i).length>4096)throw new Error("Message data too large. Max size is 4096");return this.sendMessageToCallMachine({action:"app-msg",data:i,to:r}),this}},{key:"addFakeParticipant",value:function(i){return Ue(),this.sendMessageToCallMachine(Gt({action:"add-fake-participant"},i)),this}},{key:"setShowNamesMode",value:function(i){return Ue(),i&&i!=="always"&&i!=="never"?(console.error('setShowNamesMode argument should be "always", "never", or false'),this):(this.sendMessageToCallMachine({action:"set-show-names",mode:i}),this)}},{key:"setShowLocalVideo",value:function(){var i=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];return Ue(),typeof i!="boolean"?(console.error("setShowLocalVideo only accepts a boolean value"),this):this._callObjectMode?(console.error("setShowLocalVideo is not available in callObject mode"),this):this._meetingState!==un?(console.error("the meeting must be joined before calling setShowLocalVideo"),this):(this.sendMessageToCallMachine({action:"set-show-local-video",show:i}),this._showLocalVideo=i,this)}},{key:"showLocalVideo",value:function(){return Ue(),this._callObjectMode?(console.error("showLocalVideo is not available in callObject mode"),this):this._showLocalVideo}},{key:"setShowParticipantsBar",value:function(){var i=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];return Ue(),typeof i!="boolean"?(console.error("setShowParticipantsBar only accepts a boolean value"),this):this._callObjectMode?(console.error("setShowParticipantsBar is not available in callObject mode"),this):this._meetingState!==un?(console.error("the meeting must be joined before calling setShowParticipantsBar"),this):(this.sendMessageToCallMachine({action:"set-show-participants-bar",show:i}),this._showParticipantsBar=i,this)}},{key:"showParticipantsBar",value:function(){return Ue(),this._callObjectMode?(console.error("showParticipantsBar is not available in callObject mode"),this):this._showParticipantsBar}},{key:"theme",value:function(){return this._callObjectMode?(console.error("theme is not available in callObject mode"),this):this.properties.theme}},{key:"setTheme",value:function(i){var r=this;return new Promise(function(s,o){if(r._callObjectMode)o("setTheme is not available in callObject mode");else try{r.validateProperties({theme:i}),r.properties.theme=Gt({},i),r.sendMessageToCallMachine({action:"set-theme",theme:r.properties.theme});try{r.emit("theme-updated",{action:"theme-updated",theme:r.properties.theme})}catch(a){console.log("could not emit 'theme-updated'",a)}s(r.properties.theme)}catch(a){o(a)}})}},{key:"detectAllFaces",value:function(){var i=this;return Ue(),new Promise(function(r,s){i.sendMessageToCallMachine({action:"detect-all-faces"},function(o){delete o.action,delete o.callbackStamp,r(o)})})}},{key:"requestFullscreen",value:function(){var i=xe(Y.mark(function r(){return Y.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(Ue(),this._iframe&&!document.fullscreenElement){s.next=3;break}return s.abrupt("return");case 3:return s.prev=3,s.next=6,this._iframe.requestFullscreen;case 6:if(!s.sent){s.next=10;break}this._iframe.requestFullscreen(),s.next=11;break;case 10:this._iframe.webkitRequestFullscreen();case 11:s.next=16;break;case 13:s.prev=13,s.t0=s.catch(3),console.log("could not make video call fullscreen",s.t0);case 16:case"end":return s.stop()}},r,this,[[3,13]])}));return function(){return i.apply(this,arguments)}}()},{key:"exitFullscreen",value:function(){Ue(),document.fullscreenElement?document.exitFullscreen():document.webkitFullscreenElement&&document.webkitExitFullscreen()}},{key:"room",value:function(){var i=xe(Y.mark(function r(){var s,o,a,l=this,c=arguments;return Y.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(s=c.length>0&&c[0]!==void 0?c[0]:{},o=s.includeRoomConfigDefaults,a=o===void 0||o,this._meetingState!==un&&!this._didPreAuth){u.next=5;break}return u.abrupt("return",new Promise(function(h,d){l.sendMessageToCallMachine({action:"lib-room-info",includeRoomConfigDefaults:a},function(f){delete f.action,delete f.callbackStamp,h(f)})}));case 5:if(!this.properties.url){u.next=7;break}return u.abrupt("return",{roomUrlPendingJoin:this.properties.url});case 7:return u.abrupt("return",null);case 8:case"end":return u.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"geo",value:function(){var i=xe(Y.mark(function r(){return Y.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",new Promise(function(){var o=xe(Y.mark(function a(l,c){var u,h;return Y.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,d.next=4,fetch("https://gs.daily.co/_ks_/x-swsl/:");case 4:return u=d.sent,d.next=7,u.json();case 7:h=d.sent,l({current:h.geo}),d.next=15;break;case 11:d.prev=11,d.t0=d.catch(0),console.error("geo lookup failed",d.t0),l({current:""});case 15:case"end":return d.stop()}},a,null,[[0,11]])}));return function(a,l){return o.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r)}));return function(){return i.apply(this,arguments)}}()},{key:"setNetworkTopology",value:function(){var i=xe(Y.mark(function r(s){var o=this;return Y.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return Ue(),a.abrupt("return",new Promise(function(){var l=xe(Y.mark(function c(u,h){var d;return Y.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:d=function(p){p.error?h({error:p.error}):u({workerId:p.workerId})},o.sendMessageToCallMachine({action:"set-network-topology",opts:s},d);case 2:case"end":return f.stop()}},c)}));return function(c,u){return l.apply(this,arguments)}}()));case 2:case"end":return a.stop()}},r)}));return function(r){return i.apply(this,arguments)}}()},{key:"getNetworkTopology",value:function(){var i=xe(Y.mark(function r(){var s=this;return Y.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",new Promise(function(){var a=xe(Y.mark(function l(c,u){var h;return Y.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:h=function(f){f.error?u({error:f.error}):c({topology:f.topology})},s.sendMessageToCallMachine({action:"get-network-topology"},h);case 2:case"end":return d.stop()}},l)}));return function(l,c){return a.apply(this,arguments)}}()));case 1:case"end":return o.stop()}},r)}));return function(){return i.apply(this,arguments)}}()},{key:"setPlayNewParticipantSound",value:function(i){if(Ue(),typeof i!="number"&&i!==!0&&i!==!1)throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(i));this.sendMessageToCallMachine({action:"daily-method-set-play-ding",arg:i})}},{key:"on",value:function(i,r){return this._inputEventsOn[i]={},this.sendMessageToCallMachine({action:"register-input-handler",on:i}),Dc.prototype.on.call(this,i,r)}},{key:"once",value:function(i,r){return this._inputEventsOn[i]={},this.sendMessageToCallMachine({action:"register-input-handler",on:i}),Dc.prototype.once.call(this,i,r)}},{key:"off",value:function(i,r){return delete this._inputEventsOn[i],this.sendMessageToCallMachine({action:"register-input-handler",off:i}),Dc.prototype.off.call(this,i,r)}},{key:"validateProperties",value:function(i){for(var r in i){if(!Ur[r])throw new Error("unrecognized property '".concat(r,"'"));if(Ur[r].validate&&!Ur[r].validate(i[r],this))throw new Error("property '".concat(r,"': ").concat(Ur[r].help))}}},{key:"assembleMeetingUrl",value:function(){var i=Gt(Gt({},this.properties),{},{emb:this._callFrameId,embHref:encodeURIComponent(window.location.href)}),r=i.url.match(/\?/)?"&":"?";return i.url+r+Object.keys(Ur).filter(function(s){return Ur[s].queryString&&i[s]!==void 0}).map(function(s){return"".concat(Ur[s].queryString,"=").concat(i[s])}).join("&")}},{key:"needsLoad",value:function(){return[WE,Df,Pr,Dr].includes(this._meetingState)}},{key:"sendMessageToCallMachine",value:function(i,r){this._messageChannel.sendMessageToCallMachine(i,r,this._iframe,this._callFrameId)}},{key:"forwardPackagedMessageToCallMachine",value:function(i){this._messageChannel.forwardPackagedMessageToCallMachine(i,this._iframe,this._callFrameId)}},{key:"addListenerForPackagedMessagesFromCallMachine",value:function(i){return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(i,this._callFrameId)}},{key:"removeListenerForPackagedMessagesFromCallMachine",value:function(i){this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(i)}},{key:"handleMessageFromCallMachine",value:function(i){switch(i.action){case"iframe-ready-for-launch-config":this.sendMessageToCallMachine(Gt({action:"iframe-launch-config"},this.properties));break;case"loaded":this._loadedCallback&&(this._loadedCallback(),this._loadedCallback=null);try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"joined-meeting":this._joinedCallback&&(this._joinedCallback(i.participants),this._joinedCallback=null);try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"participant-joined":case"participant-updated":if(this._meetingState===Pr)return;if(i.participant&&i.participant.session_id){var r=i.participant.local?"local":i.participant.session_id;this._callObjectMode&&(jI(i.participant),VI(i.participant),BI(i.participant,this._participants[r]));try{this.maybeEventTrackStopped(this._participants[r],i.participant,"audioTrack"),this.maybeEventTrackStopped(this._participants[r],i.participant,"videoTrack"),this.maybeEventTrackStopped(this._participants[r],i.participant,"screenVideoTrack"),this.maybeEventTrackStopped(this._participants[r],i.participant,"screenAudioTrack"),this.maybeEventTrackStarted(this._participants[r],i.participant,"audioTrack"),this.maybeEventTrackStarted(this._participants[r],i.participant,"videoTrack"),this.maybeEventTrackStarted(this._participants[r],i.participant,"screenVideoTrack"),this.maybeEventTrackStarted(this._participants[r],i.participant,"screenAudioTrack"),this.maybeEventTrackStoppedForCustomTracks(this._participants[r],i.participant),this.maybeEventTrackStartedForCustomTracks(this._participants[r],i.participant),this.maybeEventRecordingStopped(this._participants[r],i.participant),this.maybeEventRecordingStarted(this._participants[r],i.participant)}catch(p){console.error("track events error",p)}if(!this.compareEqualForParticipantUpdateEvent(i.participant,this._participants[r])){this._participants[r]=Gt({},i.participant),this.toggleParticipantAudioBasedOnNativeAudioFocus();try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}}}break;case"participant-left":if(i.participant&&i.participant.session_id){var s=this._participants[i.participant.session_id];s&&(this.maybeEventTrackStopped(s,null,"audioTrack"),this.maybeEventTrackStopped(s,null,"videoTrack"),this.maybeEventTrackStopped(s,null,"screenVideoTrack"),this.maybeEventTrackStopped(s,null,"screenAudioTrack"),this.maybeEventTrackStoppedForCustomTracks(s,null)),delete this._participants[i.participant.session_id];try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}}break;case"access-state-updated":var o={access:i.access};if(i.awaitingAccess&&(o.awaitingAccess=i.awaitingAccess),!Hc(this._accessState,o)){this._accessState=o;try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}}break;case"meeting-session-updated":if(i.meetingSession)try{delete i.callFrameId,this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"error":this._iframe&&!i.preserveIframe&&(this._iframe.src=""),this.updateMeetingState(Dr),this.resetMeetingDependentVars(),this._loadedCallback&&(this._loadedCallback(i.errorMsg),this._loadedCallback=null),this._joinedCallback&&(this._joinedCallback(null,i.errorMsg),this._joinedCallback=null);try{i.preserveIframe;var a=DD(i,["preserveIframe"]);this.emit(i.action,a)}catch(p){console.log("could not emit",i,p)}break;case"left-meeting":this._meetingState!==Dr&&this.updateMeetingState(Pr),this.resetMeetingDependentVars();try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"input-event":var l=this._participants[i.session_id];l||(l=i.session_id===this._participants.local.session_id?this._participants.local:{});try{this.emit(i.event.type,{action:i.event.type,event:i.event,participant:Gt({},l)})}catch(p){console.log("could not emit",i,p)}break;case"network-quality-change":var c=i.threshold,u=i.quality;if(c!==this._network.threshold||u!==this._network.quality){this._network.quality=u,this._network.threshold=c;try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}}break;case"active-speaker-change":var h=i.activeSpeaker;if(this._activeSpeaker.peerId!==h.peerId){this._activeSpeaker.peerId=h.peerId;try{this.emit(i.action,{action:i.action,activeSpeaker:this._activeSpeaker})}catch(p){console.log("could not emit",i,p)}}break;case"show-local-video-changed":if(this._callObjectMode)return;var d=i.show;this._showLocalVideo=d;try{this.emit(i.action,{action:i.action,show:d})}catch(p){console.log("could not emit",i,p)}break;case"active-speaker-mode-change":var f=i.enabled;if(this._activeSpeakerMode!==f){this._activeSpeakerMode=f;try{this.emit(i.action,{action:i.action,enabled:this._activeSpeakerMode})}catch(p){console.log("could not emit",i,p)}}break;case"waiting-participant-added":case"waiting-participant-updated":case"waiting-participant-removed":this._waitingParticipants=i.allWaitingParticipants;try{this.emit(i.action,{action:i.action,participant:i.participant})}catch(p){console.log("could not emit",i,p)}break;case"receive-settings-updated":if(!Hc(this._receiveSettings,i.receiveSettings)){this._receiveSettings=i.receiveSettings;try{this.emit(i.action,{action:i.action,receiveSettings:i.receiveSettings})}catch(p){console.log("could not emit",i,p)}}break;case"input-settings-updated":if(!Hc(this._inputSettings,i.inputSettings)){this._inputSettings=i.inputSettings;try{this.emit(i.action,{action:i.action,inputSettings:i.inputSettings})}catch(p){console.log("could not emit",i,p)}}break;case"recording-started":case"recording-stopped":case"recording-stats":case"recording-error":case"recording-upload-completed":case"transcription-started":case"transcription-stopped":case"transcription-error":case"started-camera":case"camera-error":case"app-message":case"local-screen-share-started":case"local-screen-share-stopped":case"network-connection":case"recording-data":case"live-streaming-started":case"live-streaming-stopped":case"live-streaming-error":case"nonfatal-error":case"lang-updated":case"media-ingest-error":try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"request-fullscreen":this.requestFullscreen();break;case"request-exit-fullscreen":this.exitFullscreen()}}},{key:"maybeEventRecordingStopped",value:function(i,r){var s="record";if(i&&!r.local&&r[s]===!1&&i[s]!==r[s])try{this.emit("recording-stopped",{action:"recording-stopped"})}catch(o){console.log("could not emit",o)}}},{key:"maybeEventRecordingStarted",value:function(i,r){var s="record";if(i&&!r.local&&r[s]===!0&&i[s]!==r[s])try{this.emit("recording-started",{action:"recording-started"})}catch(o){console.log("could not emit",o)}}},{key:"maybeEventTrackStopped",value:function(i,r,s){if(i&&(i[s]&&i[s].readyState==="ended"||i[s]&&(!r||!r[s])||i[s]&&i[s].id!==r[s].id))try{this.emit("track-stopped",{action:"track-stopped",track:i[s],participant:r})}catch(o){console.log("could not emit",o)}}},{key:"maybeEventTrackStarted",value:function(i,r,s){if(r[s]&&(!i||!i[s])||r[s]&&i[s].readyState==="ended"||r[s]&&r[s].id!==i[s].id)try{this.emit("track-started",{action:"track-started",track:r[s],participant:r})}catch(o){console.log("could not emit",o)}}},{key:"maybeEventTrackStoppedForCustomTracks",value:function(i,r){if(i)for(var s in i.tracks)tp(s)||this.maybeEventTrackStopped(i.tracks[s],r?r.tracks[s]:null,"track")}},{key:"maybeEventTrackStartedForCustomTracks",value:function(i,r){if(r)for(var s in r.tracks)tp(s)||this.maybeEventTrackStarted(i?i.tracks[s]:null,r.tracks[s],"track")}},{key:"compareEqualForParticipantUpdateEvent",value:function(i,r){return!!Hc(i,r)&&(!i.videoTrack||!r.videoTrack||i.videoTrack.id===r.videoTrack.id&&i.videoTrack.muted===r.videoTrack.muted&&i.videoTrack.enabled===r.videoTrack.enabled)&&(!i.audioTrack||!r.audioTrack||i.audioTrack.id===r.audioTrack.id&&i.audioTrack.muted===r.audioTrack.muted&&i.audioTrack.enabled===r.audioTrack.enabled)}},{key:"nativeUtils",value:function(){return Wt()?typeof DailyNativeUtils=="undefined"?(console.warn("in React Native, DailyNativeUtils is expected to be available"),null):DailyNativeUtils:null}},{key:"updateIsPreparingToJoin",value:function(i){this.updateMeetingState(this._meetingState,i)}},{key:"updateMeetingState",value:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._isPreparingToJoin;if(i!==this._meetingState||r!==this._isPreparingToJoin){var s=this._meetingState,o=this._isPreparingToJoin;this._meetingState=i,this._isPreparingToJoin=r;var a=this.isMeetingPendingOrOngoing(s,o),l=this.isMeetingPendingOrOngoing(this._meetingState,this._isPreparingToJoin);a!==l&&(this.updateKeepDeviceAwake(l),this.updateDeviceAudioMode(l),this.updateShowAndroidOngoingMeetingNotification(l),this.updateNoOpRecordingEnsuringBackgroundContinuity(l))}}},{key:"resetMeetingDependentVars",value:function(){this._participants={},this._waitingParticipants={},this._activeSpeaker={},this._activeSpeakerMode=!1,this._didPreAuth=!1,this._accessState={access:GE},this._receiveSettings={},this._inputSettings={},this._preloadCache}},{key:"updateKeepDeviceAwake",value:function(i){Wt()&&this.nativeUtils().setKeepDeviceAwake(i,this._callFrameId)}},{key:"updateDeviceAudioMode",value:function(i){if(Wt()&&!this.disableReactNativeAutoDeviceManagement("audio")){var r=i?this._nativeInCallAudioMode:"idle";this.nativeUtils().setAudioMode(r)}}},{key:"updateShowAndroidOngoingMeetingNotification",value:function(i){if(Wt()&&this.nativeUtils().setShowOngoingMeetingNotification){var r,s,o,a;if(this.properties.reactNativeConfig&&this.properties.reactNativeConfig.androidInCallNotification){var l=this.properties.reactNativeConfig.androidInCallNotification;r=l.title,s=l.subtitle,o=l.iconName,a=l.disableForCustomOverride}a&&(i=!1),this.nativeUtils().setShowOngoingMeetingNotification(i,r,s,o,this._callFrameId)}}},{key:"updateNoOpRecordingEnsuringBackgroundContinuity",value:function(i){Wt()&&this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity&&this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(i)}},{key:"isMeetingPendingOrOngoing",value:function(i,r){return[qc,un].includes(i)||r}},{key:"toggleParticipantAudioBasedOnNativeAudioFocus",value:function(){if(Wt()){var i=store.getState();for(var r in i.streams){var s=i.streams[r];s&&s.pendingTrack&&s.pendingTrack.kind==="audio"&&(s.pendingTrack.enabled=this._hasNativeAudioFocus)}}}},{key:"disableReactNativeAutoDeviceManagement",value:function(i){return this.properties.reactNativeConfig&&this.properties.reactNativeConfig.disableAutoDeviceManagement&&this.properties.reactNativeConfig.disableAutoDeviceManagement[i]}},{key:"absoluteUrl",value:function(i){if(i!==void 0){var r=document.createElement("a");return r.href=i,r.href}}},{key:"sayHello",value:function(){var i="hello, world.";return console.log(i),i}}]),n}(),Q2=()=>{let t=2,e=[];function n(r){let s=r.length,o=new Uint8Array(s*t);for(let a=0;a<s;a++){let l=a*t,c=r[a];c>1?c=1:c<-1&&(c=-1),c=c*32768,o[l]=c,o[l+1]=c>>8}e.push(o)}function i(r){let s=e.length?e[0].length:0,o=e.length*s,a=new Uint8Array(44+o),l=new DataView(a.buffer);l.setUint32(0,1380533830,!1),l.setUint32(4,36+o,!0),l.setUint32(8,1463899717,!1),l.setUint32(12,1718449184,!1),l.setUint32(16,16,!0),l.setUint16(20,1,!0),l.setUint16(22,1,!0),l.setUint32(24,r,!0),l.setUint32(28,r*t,!0),l.setUint16(32,t,!0),l.setUint16(34,8*t,!0),l.setUint32(36,1684108385,!1),l.setUint32(40,o,!0);for(let c=0;c<e.length;c++)a.set(e[c],c*s+44);e=[],postMessage(a.buffer,[a.buffer])}onmessage=r=>{r.data[0]==="encode"?n(r.data[1]):r.data[0]==="dump"&&i(r.data[1])}};let QI=window.AudioContext||window.webkitAudioContext,Y2=t=>{let e=t.toString().replace(/^(\(\)\s*=>|function\s*\(\))\s*{/,"").replace(/}$/,""),n=new Blob([e]);return new Worker(URL.createObjectURL(n))},Ca=t=>{let e=new Event("error");return e.data=new Error("Wrong state for "+t),e},jr;class Vr{constructor(e,n=null){this.stream=e,this.config=n,this.state="inactive",this.em=document.createDocumentFragment(),this.encoder=Y2(Vr.encoder);let i=this;this.encoder.addEventListener("message",r=>{let s=new Event("dataavailable");s.data=new Blob([r.data],{type:i.mimeType}),i.em.dispatchEvent(s),i.state==="inactive"&&i.em.dispatchEvent(new Event("stop"))})}start(e){if(this.state!=="inactive")return this.em.dispatchEvent(Ca("start"));this.state="recording",jr||(jr=new QI(this.config)),this.clone=this.stream.clone(),this.input=jr.createMediaStreamSource(this.clone),this.processor=jr.createScriptProcessor(2048,1,1),this.encoder.postMessage(["init",jr.sampleRate]),this.processor.onaudioprocess=n=>{this.state==="recording"&&this.encoder.postMessage(["encode",n.inputBuffer.getChannelData(0)])},this.input.connect(this.processor),this.processor.connect(jr.destination),this.em.dispatchEvent(new Event("start")),e&&(this.slicing=setInterval(()=>{this.state==="recording"&&this.requestData()},e))}stop(){return this.state==="inactive"?this.em.dispatchEvent(Ca("stop")):(this.requestData(),this.state="inactive",this.clone.getTracks().forEach(e=>{e.stop()}),this.processor.disconnect(),this.input.disconnect(),clearInterval(this.slicing))}pause(){return this.state!=="recording"?this.em.dispatchEvent(Ca("pause")):(this.state="paused",this.em.dispatchEvent(new Event("pause")))}resume(){return this.state!=="paused"?this.em.dispatchEvent(Ca("resume")):(this.state="recording",this.em.dispatchEvent(new Event("resume")))}requestData(){return this.state==="inactive"?this.em.dispatchEvent(Ca("requestData")):this.encoder.postMessage(["dump",jr.sampleRate])}addEventListener(...e){this.em.addEventListener(...e)}removeEventListener(...e){this.em.removeEventListener(...e)}dispatchEvent(...e){this.em.dispatchEvent(...e)}}Vr.prototype.mimeType="audio/wav";Vr.isTypeSupported=t=>Vr.prototype.mimeType===t;Vr.notSupported=!navigator.mediaDevices||!QI;Vr.encoder=Q2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI="firebasestorage.googleapis.com",JI="storageBucket",J2=2*60*1e3,Z2=10*60*1e3;class Ct extends $i{constructor(e,n){super(ip(e),`Firebase Storage: ${n} (${ip(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ct.prototype)}_codeEquals(e){return ip(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function ip(t){return"storage/"+t}function rp(){const t="An unknown error occurred, please check the error payload for server response.";return new Ct("unknown",t)}function $2(t){return new Ct("object-not-found","Object '"+t+"' does not exist.")}function eU(t){return new Ct("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function tU(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ct("unauthenticated",t)}function nU(){return new Ct("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function iU(t){return new Ct("unauthorized","User does not have permission to access '"+t+"'.")}function rU(){return new Ct("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function sU(){return new Ct("canceled","User canceled the upload/download.")}function oU(t){return new Ct("invalid-url","Invalid URL '"+t+"'.")}function aU(t){return new Ct("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function lU(){return new Ct("no-default-bucket","No default bucket found. Did you set the '"+JI+"' property when initializing the app?")}function cU(){return new Ct("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function uU(){return new Ct("no-download-url","The given file does not have any download URLs.")}function sp(t){return new Ct("invalid-argument",t)}function ZI(){return new Ct("app-deleted","The Firebase app was deleted.")}function hU(t){return new Ct("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Sa(t,e){return new Ct("invalid-format","String does not match format '"+t+"': "+e)}function Aa(t){throw new Ct("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Dn.makeFromUrl(e,n)}catch{return new Dn(e,"")}if(i.path==="")return i;throw aU(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(S){S.path_=decodeURIComponent(S.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},m=n===YI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,g="([^?#]*)",v=new RegExp(`^https?://${m}/${r}/${g}`,"i"),w=[{regex:a,indices:l,postModify:s},{regex:f,indices:p,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let S=0;S<w.length;S++){const q=w[S],k=q.regex.exec(e);if(k){const _=k[q.indices.bucket];let I=k[q.indices.path];I||(I=""),i=new Dn(_,I),q.postModify(i);break}}if(i==null)throw oU(e);return i}}class dU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fU(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...g){c||(c=!0,e.apply(null,g))}function h(g){r=setTimeout(()=>{r=null,t(f,l())},g)}function d(){s&&clearTimeout(s)}function f(g,...v){if(c){d();return}if(g){d(),u.call(null,g,...v);return}if(l()||o){d(),u.call(null,g,...v);return}i<64&&(i*=2);let w;a===1?(a=2,w=0):w=(i+Math.random())*1e3,h(w)}let p=!1;function m(g){p||(p=!0,d(),!c&&(r!==null?(g||(a=2),clearTimeout(r),h(0)):g||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}function pU(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mU(t){return t!==void 0}function gU(t){return typeof t=="object"&&!Array.isArray(t)}function op(t){return typeof t=="string"||t instanceof String}function $I(t){return ap()&&t instanceof Blob}function ap(){return typeof Blob!="undefined"}function ew(t,e,n,i){if(i<e)throw sp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw sp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t,e,n){let i=e;return n==null&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function tw(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _U{constructor(e,n,i,r,s,o,a,l,c,u,h){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,f)=>{this.resolve_=d,this.reject_=f,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new iu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Br.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const u=s.getErrorCode()===Br.ABORT;i(!1,new iu(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new iu(c,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());mU(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=rp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?ZI():sU();o(l)}else{const l=rU();o(l)}};this.canceled_?n(!1,new iu(!1,null,!0)):this.backoffId_=fU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&pU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||r||s}}class iu{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function vU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function yU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function bU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function EU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function IU(t,e,n,i,r,s){const o=tw(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return bU(l,e),vU(l,n),yU(l,s),EU(l,i),new _U(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wU(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function TU(...t){const e=wU();if(e!==void 0){const n=new e;for(let i=0;i<t.length;i++)n.append(t[i]);return n.getBlob()}else{if(ap())return new Blob(t);throw new Ct("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function CU(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function SU(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class lp{constructor(e,n){this.data=e,this.contentType=n||null}}function AU(t,e){switch(t){case ei.RAW:return new lp(nw(e));case ei.BASE64:case ei.BASE64URL:return new lp(iw(t,e));case ei.DATA_URL:return new lp(RU(e),OU(e))}throw rp()}function nw(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const s=i,o=t.charCodeAt(++n);i=65536|(s&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)==56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function kU(t){let e;try{e=decodeURIComponent(t)}catch{throw Sa(ei.DATA_URL,"Malformed data URL.")}return nw(e)}function iw(t,e){switch(t){case ei.BASE64:{const r=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(r||s)throw Sa(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case ei.BASE64URL:{const r=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(r||s)throw Sa(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=SU(e)}catch{throw Sa(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}class rw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Sa(ei.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=LU(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-";base64".length):i),this.rest=e.substring(e.indexOf(",")+1)}}function RU(t){const e=new rw(t);return e.base64?iw(ei.BASE64,e.rest):kU(e.rest)}function OU(t){return new rw(t).contentType}function LU(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n){let i=0,r="";$I(e)?(this.data_=e,i=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if($I(this.data_)){const i=this.data_,r=CU(i,e,n);return r===null?null:new Qi(r)}else{const i=new Uint8Array(this.data_.buffer,e,n-e);return new Qi(i,!0)}}static getBlob(...e){if(ap()){const n=e.map(i=>i instanceof Qi?i.data_:i);return new Qi(TU.apply(null,n))}else{const n=e.map(o=>op(o)?AU(ei.RAW,o).data:o.data_);let i=0;n.forEach(o=>{i+=o.byteLength});const r=new Uint8Array(i);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[s++]=o[a]}),new Qi(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(t){let e;try{e=JSON.parse(t)}catch{return null}return gU(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function NU(t,e){const n=e.split("/").filter(i=>i.length>0).join("/");return t.length===0?n:t+"/"+n}function ow(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PU(t,e){return e}class yn{constructor(e,n,i,r){this.server=e,this.local=n||e,this.writable=!!i,this.xform=r||PU}}let ru=null;function DU(t){return!op(t)||t.length<2?t:ow(t)}function aw(){if(ru)return ru;const t=[];t.push(new yn("bucket")),t.push(new yn("generation")),t.push(new yn("metageneration")),t.push(new yn("name","fullPath",!0));function e(s,o){return DU(o)}const n=new yn("name");n.xform=e,t.push(n);function i(s,o){return o!==void 0?Number(o):o}const r=new yn("size");return r.xform=i,t.push(r),t.push(new yn("timeCreated")),t.push(new yn("updated")),t.push(new yn("md5Hash",null,!0)),t.push(new yn("cacheControl",null,!0)),t.push(new yn("contentDisposition",null,!0)),t.push(new yn("contentEncoding",null,!0)),t.push(new yn("contentLanguage",null,!0)),t.push(new yn("contentType",null,!0)),t.push(new yn("metadata","customMetadata",!0)),ru=t,ru}function FU(t,e){function n(){const i=t.bucket,r=t.fullPath,s=new Dn(i,r);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function xU(t,e,n){const i={};i.type="file";const r=n.length;for(let s=0;s<r;s++){const o=n[s];i[o.local]=o.xform(i,e[o.server])}return FU(i,t),i}function lw(t,e,n){const i=sw(e);return i===null?null:xU(t,i,n)}function UU(t,e,n,i){const r=sw(e);if(r===null||!op(r.downloadTokens))return null;const s=r.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=nu(d,n,i),p=tw({alt:"media",token:c});return f+p})[0]}function jU(t,e){const n={},i=e.length;for(let r=0;r<i;r++){const s=e[r];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class cp{constructor(e,n,i,r){this.url=e,this.method=n,this.handler=i,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(t){if(!t)throw rp()}function VU(t,e){function n(i,r){const s=lw(t,r,e);return cw(s!==null),s}return n}function BU(t,e){function n(i,r){const s=lw(t,r,e);return cw(s!==null),UU(s,r,t.host,t._protocol)}return n}function uw(t){function e(n,i){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=nU():r=tU():n.getStatus()===402?r=eU(t.bucket):n.getStatus()===403?r=iU(t.path):r=i,r.serverResponse=i.serverResponse,r}return e}function hw(t){const e=uw(t);function n(i,r){let s=e(i,r);return i.getStatus()===404&&(s=$2(t.path)),s.serverResponse=r.serverResponse,s}return n}function HU(t,e,n){const i=e.fullServerUrl(),r=nu(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new cp(r,s,BU(t,n),o);return a.errorHandler=hw(e),a}function qU(t,e){const n=e.fullServerUrl(),i=nu(n,t.host,t._protocol),r="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new cp(i,r,o,s);return a.successCodes=[200,204],a.errorHandler=hw(e),a}function WU(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function GU(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=WU(null,e)),i}function zU(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let S=0;S<2;S++)w=w+Math.random().toString().slice(2);return w}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=GU(e,i,r),u=jU(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=Qi.getBlob(h,i,d);if(f===null)throw cU();const p={name:c.fullPath},m=nu(s,t.host,t._protocol),g="POST",v=t.maxUploadRetryTime,A=new cp(m,g,VU(t,n),v);return A.urlParams=p,A.headers=o,A.body=f.uploadData(),A.errorHandler=uw(e),A}class KU{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Br.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Br.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Br.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,r){if(this.sent_)throw Aa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Aa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Aa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Aa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Aa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class XU extends KU{initXhr(){this.xhr_.responseType="text"}}function up(){return new XU}/**
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
 */class Hr{constructor(e,n){this._service=e,n instanceof Dn?this._location=n:this._location=Dn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Hr(e,n)}get root(){const e=new Dn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ow(this._location.path)}get storage(){return this._service}get parent(){const e=MU(this._location.path);if(e===null)return null;const n=new Dn(this._location.bucket,e);return new Hr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw hU(e)}}function QU(t,e,n){t._throwIfRoot("uploadBytes");const i=zU(t.storage,t._location,aw(),new Qi(e,!0),n);return t.storage.makeRequestWithTokens(i,up).then(r=>({metadata:r,ref:t}))}function YU(t){t._throwIfRoot("getDownloadURL");const e=HU(t.storage,t._location,aw());return t.storage.makeRequestWithTokens(e,up).then(n=>{if(n===null)throw uU();return n})}function JU(t){t._throwIfRoot("deleteObject");const e=qU(t.storage,t._location);return t.storage.makeRequestWithTokens(e,up)}function ZU(t,e){const n=NU(t._location.path,e),i=new Dn(t._location.bucket,n);return new Hr(t.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $U(t){return/^[A-Za-z]+:\/\//.test(t)}function ej(t,e){return new Hr(t,e)}function dw(t,e){if(t instanceof hp){const n=t;if(n._bucket==null)throw lU();const i=new Hr(n,n._bucket);return e!=null?dw(i,e):i}else return e!==void 0?ZU(t,e):t}function tj(t,e){if(e&&$U(e)){if(t instanceof hp)return ej(t,e);throw sp("To use ref(service, url), the first argument must be a Storage instance.")}else return dw(t,e)}function fw(t,e){const n=e==null?void 0:e[JI];return n==null?null:Dn.makeFromBucketSpec(n,t)}class hp{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=YI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=J2,this._maxUploadRetryTime=Z2,this._requests=new Set,r!=null?this._bucket=Dn.makeFromBucketSpec(r,this._host):this._bucket=fw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dn.makeFromBucketSpec(this._url,e):this._bucket=fw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ew("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ew("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hr(this,e)}_makeRequest(e,n,i,r){if(this._deleted)return new dU(ZI());{const s=IU(e,this._appId,i,r,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const pw="@firebase/storage",mw="0.9.0";/**
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
 */const gw="storage";function Yj(t,e,n){return t=$e(t),QU(t,e,n)}function Jj(t){return t=$e(t),YU(t)}function Zj(t){return t=$e(t),JU(t)}function $j(t,e){return t=$e(t),tj(t,e)}function eV(t=Wa(),e){return t=$e(t),Zs(t,gw).getImmediate({identifier:e})}function nj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new hp(n,i,r,e,ir)}function ij(){nr(new Ti(gw,nj,"PUBLIC").setMultipleInstances(!0)),jn(pw,mw,""),jn(pw,mw,"esm2017")}ij();export{de as $,Un as A,x as B,Tp as C,$w as D,_j as E,bj as F,Ee as G,we as H,Te as I,Ie as J,lj as K,en as L,hn as M,Ij as N,wj as O,Sj as P,kj as Q,gj as R,Qe as S,Aj as T,Ej as U,mj as V,cj as W,Ei as X,se as Y,h0 as Z,xj as _,Pe as a,Ii as a0,Dj as a1,vj as a2,yj as a3,Fj as a4,oj as a5,o0 as a6,aj as a7,Ze as a8,qe as a9,Pj as aA,Vr as aB,fj as aC,eV as aD,$j as aE,Yj as aF,Jj as aG,Zj as aH,Mj as aI,hj as aa,sj as ab,Ji as ac,Uj as ad,jj as ae,Vj as af,Bj as ag,Hj as ah,qj as ai,Wj as aj,Oj as ak,Gj as al,Xj as am,Kj as an,Rj as ao,zj as ap,Qj as aq,Lj as ar,t0 as as,pj as at,dj as au,l0 as av,ze as aw,Tj as ax,Cj as ay,Nj as az,xn as b,De as c,H as d,Le as e,ie as f,Wr as g,Ks as h,Xe as i,yt as j,bt as k,At as l,xt as m,Et as n,dt as o,Re as p,ht as q,tn as r,We as s,bi as t,j as u,ft as v,nn as w,F as x,Mt as y,uj as z};

var g0=Object.defineProperty;var wp=Object.getOwnPropertySymbols;var _0=Object.prototype.hasOwnProperty,v0=Object.prototype.propertyIsEnumerable;var Tp=(t,e,n)=>e in t?g0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ge=(t,e)=>{for(var n in e||(e={}))_0.call(e,n)&&Tp(t,n,e[n]);if(wp)for(var n of wp(e))v0.call(e,n)&&Tp(t,n,e[n]);return t};function Pt(){}function B(t,e){for(const n in e)t[n]=e[n];return t}function Cp(t){return t()}function Sp(){return Object.create(null)}function ze(t){t.forEach(Cp)}function qe(t){return typeof t=="function"}function Ke(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Fa;function YV(t,e){return Fa||(Fa=document.createElement("a")),Fa.href=e,t===Fa.href}function y0(t){return Object.keys(t).length===0}function b0(t,...e){if(t==null)return Pt;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function E0(t,e,n){t.$$.on_destroy.push(b0(e,n))}function Ne(t,e,n,i){if(t){const r=Ap(t,e,n,i);return t[0](r)}}function Ap(t,e,n,i){return t[1]&&i?B(n.ctx.slice(),t[1](i(e))):n.ctx}function Me(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|r[a];return s}return e.dirty|r}return e.dirty}function Pe(t,e,n,i,r,s){if(r){const o=Ap(e,n,i,s);t.p(o,r)}}function De(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function $e(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function se(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function I0(t){const e={};for(const n in t)e[n]=!0;return e}function JV(t){return t==null?"":t}function w0(t,e,n){return t.set(n),e}function ae(t){return t&&qe(t.destroy)?t.destroy:Pt}let xa=!1;function T0(){xa=!0}function C0(){xa=!1}function S0(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function A0(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const u=e[c];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,u=(r>0&&e[n[r]].claim_order<=c?r+1:S0(1,r,d=>e[n[d]].claim_order,c))-1;i[l]=n[u]+1;const h=u+1;n[h]=l,r=Math.max(h,r)}const s=[],o=[];let a=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(s.push(e[l-1]);a>=l;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);s.reverse(),o.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<o.length;l++){for(;c<s.length&&o[l].claim_order>=s[c].claim_order;)c++;const u=c<s.length?s[c]:null;t.insertBefore(o[l],u)}}function ue(t,e){if(xa){for(A0(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function re(t,e,n){xa&&!n?ue(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function N(t){t.parentNode.removeChild(t)}function k0(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function pe(t){return document.createElement(t)}function Cn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function wi(t){return document.createTextNode(t)}function Xe(){return wi(" ")}function Rt(){return wi("")}function it(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function R0(t){return function(e){return e.preventDefault(),t.call(this,e)}}function O0(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function J(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ce(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:J(t,i,e[i])}function kp(t,e){for(const n in e)J(t,n,e[n])}function ne(t){return Array.from(t.childNodes)}function L0(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Rp(t,e,n,i,r=!1){L0(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,r||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Op(t,e,n,i){return Rp(t,r=>r.nodeName===e,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const a=r.attributes[o];n[a.name]||s.push(a.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(e))}function _e(t,e,n){return Op(t,e,n,pe)}function Pn(t,e,n){return Op(t,e,n,Cn)}function Qr(t,e){return Rp(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>wi(e),!0)}function Qe(t){return Qr(t," ")}function eo(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Lp(t,e){t.value=e==null?"":e}function ZV(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}function $V(t,e,n){t.classList[n?"add":"remove"](e)}function N0(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}let Ua;function Va(t){Ua=t}function Ue(){if(!Ua)throw new Error("Function called outside component initialization");return Ua}function Sn(t){Ue().$$.on_mount.push(t)}function ej(t){Ue().$$.after_update.push(t)}function nr(t){Ue().$$.on_destroy.push(t)}function tj(){const t=Ue();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const r=N0(e,n);i.slice().forEach(s=>{s.call(t,r)})}}}function Dt(t,e){Ue().$$.context.set(t,e)}function mn(t){return Ue().$$.context.get(t)}function to(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const no=[],de=[],ja=[],bu=[],Np=Promise.resolve();let Eu=!1;function Mp(){Eu||(Eu=!0,Np.then(Pp))}function M0(){return Mp(),Np}function Iu(t){ja.push(t)}function Ti(t){bu.push(t)}let wu=!1;const Tu=new Set;function Pp(){if(!wu){wu=!0;do{for(let t=0;t<no.length;t+=1){const e=no[t];Va(e),P0(e.$$)}for(Va(null),no.length=0;de.length;)de.pop()();for(let t=0;t<ja.length;t+=1){const e=ja[t];Tu.has(e)||(Tu.add(e),e())}ja.length=0}while(no.length);for(;bu.length;)bu.pop()();Eu=!1,wu=!1,Tu.clear()}}function P0(t){if(t.fragment!==null){t.update(),ze(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Iu)}}const Ba=new Set;let ir;function rn(){ir={r:0,c:[],p:ir}}function sn(){ir.r||ze(ir.c),ir=ir.p}function j(t,e){t&&t.i&&(Ba.delete(t),t.i(e))}function W(t,e,n,i){if(t&&t.o){if(Ba.has(t))return;Ba.add(t),ir.c.push(()=>{Ba.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const D0=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function nj(t,e){W(t,1,1,()=>{e.delete(t.key)})}function ij(t,e,n,i,r,s,o,a,l,c,u,h){let d=t.length,f=s.length,p=d;const g={};for(;p--;)g[t[p].key]=p;const m=[],v=new Map,C=new Map;for(p=f;p--;){const k=h(r,s,p),_=n(k);let I=o.get(_);I?i&&I.p(k,e):(I=c(_,k),I.c()),v.set(_,m[p]=I),_ in g&&C.set(_,Math.abs(p-g[_]))}const w=new Set,y=new Set;function R(k){j(k,1),k.m(a,u),o.set(k.key,k),u=k.first,f--}for(;d&&f;){const k=m[f-1],_=t[d-1],I=k.key,U=_.key;k===_?(u=k.first,d--,f--):v.has(U)?!o.has(I)||w.has(I)?R(k):y.has(U)?d--:C.get(I)>C.get(U)?(y.add(I),R(k)):(w.add(U),d--):(l(_,o),d--)}for(;d--;){const k=t[d];v.has(k.key)||l(k,o)}for(;f;)R(m[f-1]);return m}function ke(t,e){const n={},i={},r={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)r[l]||(n[l]=a[l],r[l]=1);t[s]=a}else for(const l in o)r[l]=1}for(const o in i)o in n||(n[o]=void 0);return n}function yt(t){return typeof t=="object"&&t!==null?t:{}}function Ci(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function wt(t){t&&t.c()}function jt(t,e){t&&t.l(e)}function bt(t,e,n,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:a}=t.$$;r&&r.m(e,n),i||Iu(()=>{const l=s.map(Cp).filter(qe);o?o.push(...l):ze(l),t.$$.on_mount=[]}),a.forEach(Iu)}function Et(t,e){const n=t.$$;n.fragment!==null&&(ze(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F0(t,e){t.$$.dirty[0]===-1&&(no.push(t),Mp(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(t,e,n,i,r,s,o,a=[-1]){const l=Ua;Va(t);const c=t.$$={fragment:null,ctx:null,props:s,update:Pt,not_equal:r,bound:Sp(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Sp(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(h,d,...f)=>{const p=f.length?f[0]:d;return c.ctx&&r(c.ctx[h],c.ctx[h]=p)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](p),u&&F0(t,h)),d}):[],c.update(),u=!0,ze(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){T0();const h=ne(e.target);c.fragment&&c.fragment.l(h),h.forEach(N)}else c.fragment&&c.fragment.c();e.intro&&j(t.$$.fragment),bt(t,e.target,e.anchor,e.customElement),C0(),Pp()}Va(l)}class tt{$destroy(){Et(this,1),this.$destroy=Pt}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!y0(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Yr=[];function rj(t,e){return{subscribe:Dp(t,e).subscribe}}function Dp(t,e=Pt){let n;const i=new Set;function r(a){if(Ke(t,a)&&(t=a,n)){const l=!Yr.length;for(const c of i)c[1](),Yr.push(c,t);if(l){for(let c=0;c<Yr.length;c+=2)Yr[c][0](Yr[c+1]);Yr.length=0}}}function s(a){r(a(t))}function o(a,l=Pt){const c=[a,l];return i.add(c),i.size===1&&(n=e(r)||Pt),a(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:r,update:s,subscribe:o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=function(t,e){if(!t)throw Jr(e)},Jr=function(t){return new Error("Firebase Database ("+Fp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)==55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)==56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},x0=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Cu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(n[u],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):x0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw Error();const d=s<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},U0=function(t){const e=xp(t);return Cu.encodeByteArray(e,!0)},Su=function(t){try{return Cu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(t){return Up(void 0,t)}function Up(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!j0(n)||(t[n]=Up(t[n],e[n]));return t}function j0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ha(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function Vp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Au(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function B0(){return Bt().indexOf("Electron/")>=0}function jp(){const t=Bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function H0(){return Bt().indexOf("MSAppHost/")>=0}function Bp(){return Fp.NODE_ADMIN===!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="FirebaseError";class Ai extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=q0,Object.setPrototypeOf(this,Ai.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,io.prototype.create)}}class io{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?W0(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ai(r,a,i)}}function W0(t,e){return t.replace(G0,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const G0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){return JSON.parse(t)}function Ht(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=ro(Su(s[0])||""),n=ro(Su(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},z0=function(t){const e=Hp(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},K0=function(t){const e=Hp(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Zr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function qa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wa(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Ga(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(qp(s)&&qp(o)){if(!Ga(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function qp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):h<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const d=(r<<5|r>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function Q0(t,e){const n=new Y0(t,e);return n.subscribe.bind(n)}class Y0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");J0(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=ku),r.error===void 0&&(r.error=ku),r.complete===void 0&&(r.complete=ku);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function J0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ku(){}function $r(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,G(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},za=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class ri{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const sr="[DEFAULT]";/**
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
 */class $0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Si;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tT(e))try{this.getOrInitializeService({instanceIdentifier:sr})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sr){return this.instances.has(e)}getOptions(e=sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:eT(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=sr){return this.component?this.component.multipleInstances?e:sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eT(t){return t===sr?void 0:t}function tT(t){return t.instantiationMode==="EAGER"}/**
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
 */class nT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ve||(Ve={}));const iT={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},rT=Ve.INFO,sT={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},oT=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=sT[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ka{constructor(e){this.name=e,this._logLevel=rT,this._logHandler=oT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}/**
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
 */class aT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lT(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function lT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ru="@firebase/app",Wp="0.7.9";/**
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
 */const Ou=new Ka("@firebase/app"),cT="@firebase/app-compat",uT="@firebase/analytics-compat",hT="@firebase/analytics",dT="@firebase/app-check-compat",fT="@firebase/app-check",pT="@firebase/auth",mT="@firebase/auth-compat",gT="@firebase/database",_T="@firebase/database-compat",vT="@firebase/functions",yT="@firebase/functions-compat",bT="@firebase/installations",ET="@firebase/installations-compat",IT="@firebase/messaging",wT="@firebase/messaging-compat",TT="@firebase/performance",CT="@firebase/performance-compat",ST="@firebase/remote-config",AT="@firebase/remote-config-compat",kT="@firebase/storage",RT="@firebase/storage-compat",OT="@firebase/firestore",LT="@firebase/firestore-compat",NT="firebase",MT="9.5.0";/**
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
 */const Gp="[DEFAULT]",PT={[Ru]:"fire-core",[cT]:"fire-core-compat",[hT]:"fire-analytics",[uT]:"fire-analytics-compat",[fT]:"fire-app-check",[dT]:"fire-app-check-compat",[pT]:"fire-auth",[mT]:"fire-auth-compat",[gT]:"fire-rtdb",[_T]:"fire-rtdb-compat",[vT]:"fire-fn",[yT]:"fire-fn-compat",[bT]:"fire-iid",[ET]:"fire-iid-compat",[IT]:"fire-fcm",[wT]:"fire-fcm-compat",[TT]:"fire-perf",[CT]:"fire-perf-compat",[ST]:"fire-rc",[AT]:"fire-rc-compat",[kT]:"fire-gcs",[RT]:"fire-gcs-compat",[OT]:"fire-fst",[LT]:"fire-fst-compat","fire-js":"fire-js",[NT]:"fire-js-all"};/**
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
 */const Xa=new Map,Lu=new Map;function DT(t,e){try{t.container.addComponent(e)}catch(n){Ou.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ki(t){const e=t.name;if(Lu.has(e))return Ou.debug(`There were multiple attempts to register component ${e}.`),!1;Lu.set(e,t);for(const n of Xa.values())DT(n,t);return!0}function es(t,e){return t.container.getProvider(e)}/**
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
 */const FT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Qa=new io("app","Firebase",FT);/**
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
 */class xT{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ri("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qa.create("app-deleted",{appName:this._name})}}/**
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
 */const or=MT;function sj(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Gp,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Qa.create("bad-app-name",{appName:String(i)});const r=Xa.get(i);if(r){if(Ga(t,r.options)&&Ga(n,r.config))return r;throw Qa.create("duplicate-app",{appName:i})}const s=new nT(i);for(const a of Lu.values())s.addComponent(a);const o=new xT(t,n,s);return Xa.set(i,o),o}function so(t=Gp){const e=Xa.get(t);if(!e)throw Qa.create("no-app",{appName:t});return e}function An(t,e,n){var i;let r=(i=PT[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ou.warn(a.join(" "));return}ki(new ri(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */function UT(t){ki(new ri("platform-logger",e=>new aT(e),"PRIVATE")),An(Ru,Wp,t),An(Ru,Wp,"esm2017"),An("fire-js","")}UT("");var VT="firebase",jT="9.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An(VT,jT,"app");var BT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},$,Nu=Nu||{},ve=BT||self;function Ya(){}function Mu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function oo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function HT(t){return Object.prototype.hasOwnProperty.call(t,Pu)&&t[Pu]||(t[Pu]=++qT)}var Pu="closure_uid_"+(1e9*Math.random()>>>0),qT=0;function WT(t,e,n){return t.call.apply(t.bind,arguments)}function GT(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Qt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qt=WT:Qt=GT,Qt.apply(null,arguments)}function Ja(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Yt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function Ri(){this.s=this.s,this.o=this.o}var zT=0,KT={};Ri.prototype.s=!1;Ri.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),zT!=0)){var t=HT(this);delete KT[t]}};Ri.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Kp=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function XT(t){e:{var e=VC;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Xp(t){return Array.prototype.concat.apply([],arguments)}function Du(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Za(t){return/^[\s\xa0]*$/.test(t)}var Qp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function gn(t,e){return t.indexOf(e)!=-1}function Fu(t,e){return t<e?-1:t>e?1:0}var _n;e:{var Yp=ve.navigator;if(Yp){var Jp=Yp.userAgent;if(Jp){_n=Jp;break e}}_n=""}function xu(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Zp(t){const e={};for(const n in t)e[n]=t[n];return e}var $p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function em(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<$p.length;s++)n=$p[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Uu(t){return Uu[" "](t),t}Uu[" "]=Ya;function QT(t){var e=ZT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var YT=gn(_n,"Opera"),ts=gn(_n,"Trident")||gn(_n,"MSIE"),tm=gn(_n,"Edge"),Vu=tm||ts,nm=gn(_n,"Gecko")&&!(gn(_n.toLowerCase(),"webkit")&&!gn(_n,"Edge"))&&!(gn(_n,"Trident")||gn(_n,"MSIE"))&&!gn(_n,"Edge"),JT=gn(_n.toLowerCase(),"webkit")&&!gn(_n,"Edge");function im(){var t=ve.document;return t?t.documentMode:void 0}var $a;e:{var ju="",Bu=function(){var t=_n;if(nm)return/rv:([^\);]+)(\)|;)/.exec(t);if(tm)return/Edge\/([\d\.]+)/.exec(t);if(ts)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(JT)return/WebKit\/(\S+)/.exec(t);if(YT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bu&&(ju=Bu?Bu[1]:""),ts){var Hu=im();if(Hu!=null&&Hu>parseFloat(ju)){$a=String(Hu);break e}}$a=ju}var ZT={};function $T(){return QT(function(){let t=0;const e=Qp(String($a)).split("."),n=Qp("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=Fu(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||Fu(r[2].length==0,s[2].length==0)||Fu(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}var qu;if(ve.document&&ts){var rm=im();qu=rm||parseInt($a,10)||void 0}else qu=void 0;var eC=qu,tC=function(){if(!ve.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ve.addEventListener("test",Ya,e),ve.removeEventListener("test",Ya,e)}catch{}return t}();function on(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}on.prototype.h=function(){this.defaultPrevented=!0};function ao(t,e){if(on.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(nm){e:{try{Uu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:nC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ao.Z.h.call(this)}}Yt(ao,on);var nC={2:"touch",3:"pen",4:"mouse"};ao.prototype.h=function(){ao.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var lo="closure_listenable_"+(1e6*Math.random()|0),iC=0;function rC(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++iC,this.ca=this.fa=!1}function el(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function tl(t){this.src=t,this.g={},this.h=0}tl.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Gu(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new rC(e,this.src,s,!!i,r),e.fa=n,t.push(e)),e};function Wu(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=zp(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(el(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Gu(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}var zu="closure_lm_"+(1e6*Math.random()|0),Ku={};function sm(t,e,n,i,r){if(i&&i.once)return am(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)sm(t,e[s],n,i,r);return null}return n=Ju(n),t&&t[lo]?t.N(e,n,oo(i)?!!i.capture:!!i,r):om(t,e,n,!1,i,r)}function om(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=oo(r)?!!r.capture:!!r,a=Qu(t);if(a||(t[zu]=a=new tl(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=sC(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)tC||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(cm(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sC(){function t(n){return e.call(t.src,t.listener,n)}var e=oC;return t}function am(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)am(t,e[s],n,i,r);return null}return n=Ju(n),t&&t[lo]?t.O(e,n,oo(i)?!!i.capture:!!i,r):om(t,e,n,!0,i,r)}function lm(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)lm(t,e[s],n,i,r);else i=oo(i)?!!i.capture:!!i,n=Ju(n),t&&t[lo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Gu(s,n,i,r),-1<n&&(el(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Qu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Gu(e,n,i,r)),(n=-1<t?e[t]:null)&&Xu(n))}function Xu(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[lo])Wu(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(cm(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Qu(e))?(Wu(n,t),n.h==0&&(n.src=null,e[zu]=null)):el(t)}}}function cm(t){return t in Ku?Ku[t]:Ku[t]="on"+t}function oC(t,e){if(t.ca)t=!0;else{e=new ao(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Xu(t),t=n.call(i,e)}return t}function Qu(t){return t=t[zu],t instanceof tl?t:null}var Yu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ju(t){return typeof t=="function"?t:(t[Yu]||(t[Yu]=function(e){return t.handleEvent(e)}),t[Yu])}function qt(){Ri.call(this),this.i=new tl(this),this.P=this,this.I=null}Yt(qt,Ri);qt.prototype[lo]=!0;qt.prototype.removeEventListener=function(t,e,n,i){lm(this,t,e,n,i)};function Jt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new on(e,t);else if(e instanceof on)e.target=e.target||t;else{var r=e;e=new on(i,t),em(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=nl(o,i,!0,e)&&r}if(o=e.g=t,r=nl(o,i,!0,e)&&r,r=nl(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=nl(o,i,!1,e)&&r}qt.prototype.M=function(){if(qt.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)el(n[i]);delete t.g[e],t.h--}}this.I=null};qt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};qt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function nl(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Wu(t.i,o),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var Zu=ve.JSON.stringify;function aC(){var t=hm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class lC{constructor(){this.h=this.g=null}add(e,n){const i=um.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var um=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new cC,t=>t.reset());class cC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function uC(t){ve.setTimeout(()=>{throw t},0)}function $u(t,e){eh||hC(),th||(eh(),th=!0),hm.add(t,e)}var eh;function hC(){var t=ve.Promise.resolve(void 0);eh=function(){t.then(dC)}}var th=!1,hm=new lC;function dC(){for(var t;t=aC();){try{t.h.call(t.g)}catch(n){uC(n)}var e=um;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}th=!1}function il(t,e){qt.call(this),this.h=t||1,this.g=e||ve,this.j=Qt(this.kb,this),this.l=Date.now()}Yt(il,qt);$=il.prototype;$.da=!1;$.S=null;$.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Jt(this,"tick"),this.da&&(nh(this),this.start()))}};$.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function nh(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}$.M=function(){il.Z.M.call(this),nh(this),delete this.g};function ih(t,e,n){if(typeof t=="function")n&&(t=Qt(t,n));else if(t&&typeof t.handleEvent=="function")t=Qt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ve.setTimeout(t,e||0)}function dm(t){t.g=ih(()=>{t.g=null,t.i&&(t.i=!1,dm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class fC extends Ri{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:dm(this)}M(){super.M(),this.g&&(ve.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function co(t){Ri.call(this),this.h=t,this.g={}}Yt(co,Ri);var fm=[];function pm(t,e,n,i){Array.isArray(n)||(n&&(fm[0]=n.toString()),n=fm);for(var r=0;r<n.length;r++){var s=sm(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function mm(t){xu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Xu(e)},t),t.g={}}co.prototype.M=function(){co.Z.M.call(this),mm(this)};co.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function rl(){this.g=!0}rl.prototype.Aa=function(){this.g=!1};function pC(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function mC(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function ns(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+_C(t,n)+(i?" "+i:"")})}function gC(t,e){t.info(function(){return"TIMEOUT: "+e})}rl.prototype.info=function(){};function _C(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Zu(n)}catch{return e}}var ar={},gm=null;function sl(){return gm=gm||new qt}ar.Ma="serverreachability";function _m(t){on.call(this,ar.Ma,t)}Yt(_m,on);function uo(t){const e=sl();Jt(e,new _m(e,t))}ar.STAT_EVENT="statevent";function vm(t,e){on.call(this,ar.STAT_EVENT,t),this.stat=e}Yt(vm,on);function vn(t){const e=sl();Jt(e,new vm(e,t))}ar.Na="timingevent";function ym(t,e){on.call(this,ar.Na,t),this.size=e}Yt(ym,on);function ho(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ve.setTimeout(function(){t()},e)}var ol={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},bm={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function rh(){}rh.prototype.h=null;function Em(t){return t.h||(t.h=t.i())}function Im(){}var fo={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function sh(){on.call(this,"d")}Yt(sh,on);function oh(){on.call(this,"c")}Yt(oh,on);var ah;function al(){}Yt(al,rh);al.prototype.g=function(){return new XMLHttpRequest};al.prototype.i=function(){return{}};ah=new al;function po(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new co(this),this.P=vC,t=Vu?125:void 0,this.W=new il(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new wm}function wm(){this.i=null,this.g="",this.h=!1}var vC=45e3,lh={},ll={};$=po.prototype;$.setTimeout=function(t){this.P=t};function ch(t,e,n){t.K=1,t.v=fl(si(e)),t.s=n,t.U=!0,Tm(t,null)}function Tm(t,e){t.F=Date.now(),mo(t),t.A=si(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Mm(n.h,"t",i),t.C=0,n=t.l.H,t.h=new wm,t.g=ng(t.l,n?e:null,!t.s),0<t.O&&(t.L=new fC(Qt(t.Ia,t,t.g),t.O)),pm(t.V,t.g,"readystatechange",t.gb),e=t.H?Zp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),uo(1),pC(t.j,t.u,t.A,t.m,t.X,t.s)}$.gb=function(t){t=t.target;const e=this.L;e&&oi(t)==3?e.l():this.Ia(t)};$.Ia=function(t){try{if(t==this.g)e:{const u=oi(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Vu||this.g&&(this.h.h||this.g.ga()||Gm(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?uo(3):uo(2)),cl(this);var n=this.g.ba();this.N=n;t:if(Cm(this)){var i=Gm(this.g);t="";var r=i.length,s=oi(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){lr(this),go(this);var o="";break t}this.h.i=new ve.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,mC(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Za(a)){var c=a;break t}}c=null}if(n=c)ns(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,uh(this,n);else{this.i=!1,this.o=3,vn(12),lr(this),go(this);break e}}this.U?(Sm(this,u,o),Vu&&this.i&&u==3&&(pm(this.V,this.W,"tick",this.fb),this.W.start())):(ns(this.j,this.m,o,null),uh(this,o)),u==4&&lr(this),this.i&&!this.I&&(u==4?Zm(this.l,this):(this.i=!1,mo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,vn(12)):(this.o=0,vn(13)),lr(this),go(this)}}}catch{}finally{}};function Cm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Sm(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if(r=yC(t,n),r==ll){e==4&&(t.o=4,vn(14),i=!1),ns(t.j,t.m,null,"[Incomplete Response]");break}else if(r==lh){t.o=4,vn(15),ns(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else ns(t.j,t.m,r,null),uh(t,r);Cm(t)&&r!=ll&&r!=lh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,vn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Eh(e),e.L=!0,vn(11))):(ns(t.j,t.m,n,"[Invalid Chunked Response]"),lr(t),go(t))}$.fb=function(){if(this.g){var t=oi(this.g),e=this.g.ga();this.C<e.length&&(cl(this),Sm(this,t,e),this.i&&t!=4&&mo(this))}};function yC(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?ll:(n=Number(e.substring(n,i)),isNaN(n)?lh:(i+=1,i+n>e.length?ll:(e=e.substr(i,n),t.C=i+n,e)))}$.cancel=function(){this.I=!0,lr(this)};function mo(t){t.Y=Date.now()+t.P,Am(t,t.P)}function Am(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ho(Qt(t.eb,t),e)}function cl(t){t.B&&(ve.clearTimeout(t.B),t.B=null)}$.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(gC(this.j,this.A),this.K!=2&&(uo(3),vn(17)),lr(this),this.o=2,go(this)):Am(this,this.Y-t)};function go(t){t.l.G==0||t.I||Zm(t.l,t)}function lr(t){cl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,nh(t.W),mm(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function uh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||fh(n.i,t))){if(n.I=t.N,!t.J&&fh(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)yl(n),_l(n);else break e;bh(n),vn(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=ho(Qt(n.ab,n),6e3));if(1>=Fm(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else hr(n,11)}else if((t.J||n.g==t)&&yl(n),!Za(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=i.i;!s.g&&(gn(p,"spdy")||gn(p,"quic")||gn(p,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(ph(s,s.h),s.h=null))}if(i.D){const g=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(i.sa=g,_t(i.F,i.D,g))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=tg(i,i.H?i.la:null,i.W),o.J){xm(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(cl(a),mo(a)),i.g=o}else Ym(i);0<n.l.length&&vl(n)}else c[0]!="stop"&&c[0]!="close"||hr(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?hr(n,7):vh(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}uo(4)}catch{}}function bC(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Mu(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function hh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Mu(t)||typeof t=="string")Kp(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Mu(t)||typeof t=="string"){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=bC(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function is(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof is)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}$=is.prototype;$.R=function(){dh(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};$.T=function(){return dh(this),this.g.concat()};function dh(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];cr(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)i=t.g[e],cr(r,i)||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}$.get=function(t,e){return cr(this.h,t)?this.h[t]:e};$.set=function(t,e){cr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};$.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};function cr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var km=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function EC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ur(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ur){this.g=e!==void 0?e:t.g,ul(this,t.j),this.s=t.s,hl(this,t.i),dl(this,t.m),this.l=t.l,e=t.h;var n=new yo;n.i=e.i,e.g&&(n.g=new is(e.g),n.h=e.h),Rm(this,n),this.o=t.o}else t&&(n=String(t).match(km))?(this.g=!!e,ul(this,n[1]||"",!0),this.s=_o(n[2]||""),hl(this,n[3]||"",!0),dl(this,n[4]),this.l=_o(n[5]||"",!0),Rm(this,n[6]||"",!0),this.o=_o(n[7]||"")):(this.g=!!e,this.h=new yo(null,this.g))}ur.prototype.toString=function(){var t=[],e=this.j;e&&t.push(vo(e,Om,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(vo(e,Om,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(vo(n,n.charAt(0)=="/"?SC:CC,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",vo(n,kC)),t.join("")};function si(t){return new ur(t)}function ul(t,e,n){t.j=n?_o(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function hl(t,e,n){t.i=n?_o(e,!0):e}function dl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Rm(t,e,n){e instanceof yo?(t.h=e,RC(t.h,t.g)):(n||(e=vo(e,AC)),t.h=new yo(e,t.g))}function _t(t,e,n){t.h.set(e,n)}function fl(t){return _t(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function IC(t){return t instanceof ur?si(t):new ur(t,void 0)}function wC(t,e,n,i){var r=new ur(null,void 0);return t&&ul(r,t),e&&hl(r,e),n&&dl(r,n),i&&(r.l=i),r}function _o(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function vo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,TC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function TC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Om=/[#\/\?@]/g,CC=/[#\?:]/g,SC=/[#\?]/g,AC=/[#\?@]/g,kC=/#/g;function yo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Oi(t){t.g||(t.g=new is,t.h=0,t.i&&EC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=yo.prototype;$.add=function(t,e){Oi(this),this.i=null,t=rs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Lm(t,e){Oi(t),e=rs(t,e),cr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,cr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&dh(t)))}function Nm(t,e){return Oi(t),e=rs(t,e),cr(t.g.h,e)}$.forEach=function(t,e){Oi(this),this.g.forEach(function(n,i){Kp(n,function(r){t.call(e,r,i,this)},this)},this)};$.T=function(){Oi(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n};$.R=function(t){Oi(this);var e=[];if(typeof t=="string")Nm(this,t)&&(e=Xp(e,this.g.get(rs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Xp(e,t[n])}return e};$.set=function(t,e){return Oi(this),this.i=null,t=rs(this,t),Nm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Mm(t,e,n){Lm(t,e),0<n.length&&(t.i=null,t.g.set(rs(t,e),Du(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;i[s]!==""&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};function rs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function RC(t,e){e&&!t.j&&(Oi(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(Lm(this,i),Mm(this,r,n))},t)),t.j=e}var OC=class{constructor(t,e){this.h=t,this.g=e}};function Pm(t){this.l=t||LC,ve.PerformanceNavigationTiming?(t=ve.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ve.g&&ve.g.Ea&&ve.g.Ea()&&ve.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var LC=10;function Dm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Fm(t){return t.h?1:t.g?t.g.size:0}function fh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ph(t,e){t.g?t.g.add(e):t.h=e}function xm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Pm.prototype.cancel=function(){if(this.i=Um(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Um(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Du(t.i)}function mh(){}mh.prototype.stringify=function(t){return ve.JSON.stringify(t,void 0)};mh.prototype.parse=function(t){return ve.JSON.parse(t,void 0)};function NC(){this.g=new mh}function MC(t,e,n){const i=n||"";try{hh(t,function(r,s){let o=r;oo(r)&&(o=Zu(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function PC(t,e){const n=new rl;if(ve.Image){const i=new Image;i.onload=Ja(pl,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Ja(pl,n,i,"TestLoadImage: error",!1,e),i.onabort=Ja(pl,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Ja(pl,n,i,"TestLoadImage: timeout",!1,e),ve.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function pl(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function bo(t){this.l=t.$b||null,this.j=t.ib||!1}Yt(bo,rh);bo.prototype.g=function(){return new ml(this.l,this.j)};bo.prototype.i=function(t){return function(){return t}}({});function ml(t,e){qt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=gh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Yt(ml,qt);var gh=0;$=ml.prototype;$.open=function(t,e){if(this.readyState!=gh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Io(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ve).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Eo(this)),this.readyState=gh};$.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Io(this)),this.g&&(this.readyState=3,Io(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof ve.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vm(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Vm(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}$.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Eo(this):Io(this),this.readyState==3&&Vm(this)}};$.Ua=function(t){this.g&&(this.response=this.responseText=t,Eo(this))};$.Ta=function(t){this.g&&(this.response=t,Eo(this))};$.ha=function(){this.g&&Eo(this)};function Eo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Io(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Io(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ml.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var DC=ve.JSON.parse;function Ot(t){qt.call(this),this.headers=new is,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jm,this.K=this.L=!1}Yt(Ot,qt);var jm="",FC=/^https?$/i,xC=["POST","PUT"];$=Ot.prototype;$.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ah.g(),this.C=this.u?Em(this.u):Em(ah),this.g.onreadystatechange=Qt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Bm(this,s);return}t=n||"";const r=new is(this.headers);i&&hh(i,function(s,o){r.set(o,s)}),i=XT(r.T()),n=ve.FormData&&t instanceof ve.FormData,!(0<=zp(xC,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Wm(this),0<this.B&&((this.K=UC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qt(this.pa,this)):this.A=ih(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Bm(this,s)}};function UC(t){return ts&&$T()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function VC(t){return t.toLowerCase()=="content-type"}$.pa=function(){typeof Nu!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Jt(this,"timeout"),this.abort(8))};function Bm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Hm(t),gl(t)}function Hm(t){t.D||(t.D=!0,Jt(t,"complete"),Jt(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Jt(this,"complete"),Jt(this,"abort"),gl(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gl(this,!0)),Ot.Z.M.call(this)};$.Fa=function(){this.s||(this.F||this.v||this.l?qm(this):this.cb())};$.cb=function(){qm(this)};function qm(t){if(t.h&&typeof Nu!="undefined"&&(!t.C[1]||oi(t)!=4||t.ba()!=2)){if(t.v&&oi(t)==4)ih(t.Fa,0,t);else if(Jt(t,"readystatechange"),oi(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.H).match(km)[1]||null;if(!r&&ve.self&&ve.self.location){var s=ve.self.location.protocol;r=s.substr(0,s.length-1)}i=!FC.test(r?r.toLowerCase():"")}n=i}if(n)Jt(t,"complete"),Jt(t,"success");else{t.m=6;try{var o=2<oi(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Hm(t)}}finally{gl(t)}}}}function gl(t,e){if(t.g){Wm(t);const n=t.g,i=t.C[0]?Ya:null;t.g=null,t.C=null,e||Jt(t,"ready");try{n.onreadystatechange=i}catch{}}}function Wm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ve.clearTimeout(t.A),t.A=null)}function oi(t){return t.g?t.g.readyState:0}$.ba=function(){try{return 2<oi(this)?this.g.status:-1}catch{return-1}};$.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),DC(e)}};function Gm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case jm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Da=function(){return this.m};$.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function jC(t){let e="";return xu(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function _h(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=jC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_t(t,e,n))}function wo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zm(t){this.za=0,this.l=[],this.h=new rl,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=wo("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=wo("baseRetryDelayMs",5e3,t),this.$a=wo("retryDelaySeedMs",1e4,t),this.Ya=wo("forwardChannelMaxRetries",2,t),this.ra=wo("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Pm(t&&t.concurrentRequestLimit),this.Ca=new NC,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}$=zm.prototype;$.ma=8;$.G=1;function vh(t){if(Km(t),t.G==3){var e=t.V++,n=si(t.F);_t(n,"SID",t.J),_t(n,"RID",e),_t(n,"TYPE","terminate"),To(t,n),e=new po(t,t.h,e,void 0),e.K=2,e.v=fl(si(n)),n=!1,ve.navigator&&ve.navigator.sendBeacon&&(n=ve.navigator.sendBeacon(e.v.toString(),"")),!n&&ve.Image&&(new Image().src=e.v,n=!0),n||(e.g=ng(e.l,null),e.g.ea(e.v)),e.F=Date.now(),mo(e)}eg(t)}$.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function _l(t){t.g&&(Eh(t),t.g.cancel(),t.g=null)}function Km(t){_l(t),t.u&&(ve.clearTimeout(t.u),t.u=null),yl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ve.clearTimeout(t.m),t.m=null)}function yh(t,e){t.l.push(new OC(t.Za++,e)),t.G==3&&vl(t)}function vl(t){Dm(t.i)||t.m||(t.m=!0,$u(t.Ha,t),t.C=0)}function BC(t,e){return Fm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ho(Qt(t.Ha,t,e),$m(t,t.C)),t.C++,!0)}$.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new po(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Zp(s),em(s,this.P)):s=this.P),this.o===null&&(r.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Qm(this,r,e),n=si(this.F),_t(n,"RID",t),_t(n,"CVER",22),this.D&&_t(n,"X-HTTP-Session-Id",this.D),To(this,n),this.o&&s&&_h(n,this.o,s),ph(this.i,r),this.Ra&&_t(n,"TYPE","init"),this.ja?(_t(n,"$req",e),_t(n,"SID","null"),r.$=!0,ch(r,n,null)):ch(r,n,e),this.G=2}}else this.G==3&&(t?Xm(this,t):this.l.length==0||Dm(this.i)||Xm(this))};function Xm(t,e){var n;e?n=e.m:n=t.V++;const i=si(t.F);_t(i,"SID",t.J),_t(i,"RID",n),_t(i,"AID",t.U),To(t,i),t.o&&t.s&&_h(i,t.o,t.s),n=new po(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Qm(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ph(t.i,n),ch(n,i,e)}function To(t,e){t.j&&hh({},function(n,i){_t(e,i,n)})}function Qm(t,e,n){n=Math.min(t.l.length,n);var i=t.j?Qt(t.j.Oa,t.j,t):null;e:{var r=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const u=r[l].g;if(c-=s,0>c)s=Math.max(0,r[l].h-100),a=!1;else try{MC(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function Ym(t){t.g||t.u||(t.Y=1,$u(t.Ga,t),t.A=0)}function bh(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ho(Qt(t.Ga,t),$m(t,t.A)),t.A++,!0)}$.Ga=function(){if(this.u=null,Jm(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ho(Qt(this.bb,this),t)}};$.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,vn(10),_l(this),Jm(this))};function Eh(t){t.B!=null&&(ve.clearTimeout(t.B),t.B=null)}function Jm(t){t.g=new po(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=si(t.oa);_t(e,"RID","rpc"),_t(e,"SID",t.J),_t(e,"CI",t.N?"0":"1"),_t(e,"AID",t.U),To(t,e),_t(e,"TYPE","xmlhttp"),t.o&&t.s&&_h(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=fl(si(e)),n.s=null,n.U=!0,Tm(n,t)}$.ab=function(){this.v!=null&&(this.v=null,_l(this),bh(this),vn(19))};function yl(t){t.v!=null&&(ve.clearTimeout(t.v),t.v=null)}function Zm(t,e){var n=null;if(t.g==e){yl(t),Eh(t),t.g=null;var i=2}else if(fh(t.i,e))n=e.D,xm(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=sl(),Jt(i,new ym(i,n,e,r)),vl(t)}else Ym(t);else if(r=e.o,r==3||r==0&&0<t.I||!(i==1&&BC(t,e)||i==2&&bh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:hr(t,5);break;case 4:hr(t,10);break;case 3:hr(t,6);break;default:hr(t,2)}}}function $m(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function hr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=Qt(t.jb,t);n||(n=new ur("//www.google.com/images/cleardot.gif"),ve.location&&ve.location.protocol=="http"||ul(n,"https"),fl(n)),PC(n.toString(),i)}else vn(2);t.G=0,t.j&&t.j.va(e),eg(t),Km(t)}$.jb=function(t){t?(this.h.info("Successfully pinged google.com"),vn(2)):(this.h.info("Failed to ping google.com"),vn(1))};function eg(t){t.G=0,t.I=-1,t.j&&((Um(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Du(t.l),t.l.length=0),t.j.ua())}function tg(t,e,n){let i=IC(n);if(i.i!="")e&&hl(i,e+"."+i.i),dl(i,i.m);else{const r=ve.location;i=wC(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&xu(t.aa,function(r,s){_t(i,s,r)}),e=t.D,n=t.sa,e&&n&&_t(i,e,n),_t(i,"VER",t.ma),To(t,i),i}function ng(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ot(new bo({ib:!0})):new Ot(t.qa),e.L=t.H,e}function ig(){}$=ig.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Oa=function(){};function bl(){if(ts&&!(10<=Number(eC)))throw Error("Environmental error: no available transport.")}bl.prototype.g=function(t,e){return new Dn(t,e)};function Dn(t,e){qt.call(this),this.g=new zm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Za(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Za(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ss(this)}Yt(Dn,qt);Dn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),$u(Qt(t.hb,t,e))),vn(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=tg(t,null,t.W),vl(t)};Dn.prototype.close=function(){vh(this.g)};Dn.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,yh(this.g,e)}else this.v?(e={},e.__data__=Zu(t),yh(this.g,e)):yh(this.g,t)};Dn.prototype.M=function(){this.g.j=null,delete this.j,vh(this.g),delete this.g,Dn.Z.M.call(this)};function rg(t){sh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Yt(rg,sh);function sg(){oh.call(this),this.status=1}Yt(sg,oh);function ss(t){this.g=t}Yt(ss,ig);ss.prototype.xa=function(){Jt(this.g,"a")};ss.prototype.wa=function(t){Jt(this.g,new rg(t))};ss.prototype.va=function(t){Jt(this.g,new sg(t))};ss.prototype.ua=function(){Jt(this.g,"b")};bl.prototype.createWebChannel=bl.prototype.g;Dn.prototype.send=Dn.prototype.u;Dn.prototype.open=Dn.prototype.m;Dn.prototype.close=Dn.prototype.close;ol.NO_ERROR=0;ol.TIMEOUT=8;ol.HTTP_ERROR=6;bm.COMPLETE="complete";Im.EventType=fo;fo.OPEN="a";fo.CLOSE="b";fo.ERROR="c";fo.MESSAGE="d";qt.prototype.listen=qt.prototype.N;Ot.prototype.listenOnce=Ot.prototype.O;Ot.prototype.getLastError=Ot.prototype.La;Ot.prototype.getLastErrorCode=Ot.prototype.Da;Ot.prototype.getStatus=Ot.prototype.ba;Ot.prototype.getResponseJson=Ot.prototype.Qa;Ot.prototype.getResponseText=Ot.prototype.ga;Ot.prototype.send=Ot.prototype.ea;var HC=function(){return new bl},qC=function(){return sl()},Ih=ol,WC=bm,GC=ar,og={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},zC=bo,El=Im,KC=Ot;const ag="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}kn.UNAUTHENTICATED=new kn(null),kn.GOOGLE_CREDENTIALS=new kn("google-credentials-uid"),kn.FIRST_PARTY=new kn("first-party-uid"),kn.MOCK_USER=new kn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os="9.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Ka("@firebase/firestore");function lg(){return dr.logLevel}function le(t,...e){if(dr.logLevel<=Ve.DEBUG){const n=e.map(wh);dr.debug(`Firestore (${os}): ${t}`,...n)}}function Li(t,...e){if(dr.logLevel<=Ve.ERROR){const n=e.map(wh);dr.error(`Firestore (${os}): ${t}`,...n)}}function cg(t,...e){if(dr.logLevel<=Ve.WARN){const n=e.map(wh);dr.warn(`Firestore (${os}): ${t}`,...n)}}function wh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Ie(t="Unexpected state"){const e=`FIRESTORE (${os}) INTERNAL ASSERTION FAILED: `+t;throw Li(e),new Error(e)}function lt(t,e){t||Ie()}function we(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class QC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(kn.UNAUTHENTICATED))}shutdown(){}}class YC{constructor(e){this.t=e,this.currentUser=kn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new ai;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ai,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{le("FirebaseCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(le("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ai)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(le("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(lt(typeof i.accessToken=="string"),new XC(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return lt(e===null||typeof e=="string"),new kn(e)}}class JC{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=kn.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class ZC{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new JC(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(kn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class Th{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.g(i),this.p=i=>n.writeSequenceNumber(i))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Th.T=-1;class ug{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=$C(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function Je(t,e){return t<e?-1:t>e?1:0}function as(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fn.fromMillis(Date.now())}static fromDate(e){return Fn.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Fn(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Je(this.nanoseconds,e.nanoseconds):Je(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.timestamp=e}static fromTimestamp(e){return new We(e)}static min(){return new We(new Fn(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function dg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n,i){n===void 0?n=0:n>e.length&&Ie(),i===void 0?i=e.length-n:i>e.length-n&&Ie(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Co.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Co?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class vt extends Co{construct(e,n,i){return new vt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new Z(D.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new vt(n)}static emptyPath(){return new vt([])}}const eS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rn extends Co{construct(e,n,i){return new Rn(e,n,i)}static isValidIdentifier(e){return eS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Rn(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new Z(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new Z(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Z(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new Z(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rn(n)}static emptyPath(){return new Rn([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.fields=e,e.sort(Rn.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new an(n)}static fromUint8Array(e){const n=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new an(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Je(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}an.EMPTY_BYTE_STRING=new an("");const tS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ni(t){if(lt(!!t),typeof t=="string"){let e=0;const n=tS.exec(t);if(lt(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Lt(t.seconds),nanos:Lt(t.nanos)}}function Lt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ls(t){return typeof t=="string"?an.fromBase64String(t):an.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function pg(t){const e=t.mapValue.fields.__previous_value__;return fg(e)?pg(e):e}function Ao(t){const e=Ni(t.mapValue.fields.__local_write_time__.timestampValue);return new Fn(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t){return t==null}function Il(t){return t===0&&1/t==-1/0}function nS(t){return typeof t=="number"&&Number.isInteger(t)&&!Il(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(vt.fromString(e))}static fromName(e){return new fe(vt.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&vt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return vt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new vt(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fg(t)?4:10:Ie()}function ei(t,e){const n=pr(t);if(n!==pr(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ao(t).isEqual(Ao(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=Ni(i.timestampValue),o=Ni(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return ls(i.bytesValue).isEqual(ls(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Lt(i.geoPointValue.latitude)===Lt(r.geoPointValue.latitude)&&Lt(i.geoPointValue.longitude)===Lt(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Lt(i.integerValue)===Lt(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=Lt(i.doubleValue),o=Lt(r.doubleValue);return s===o?Il(s)===Il(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return as(t.arrayValue.values||[],e.arrayValue.values||[],ei);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(hg(s)!==hg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!ei(s[a],o[a])))return!1;return!0}(t,e);default:return Ie()}}function ko(t,e){return(t.values||[]).find(n=>ei(n,e))!==void 0}function us(t,e){const n=pr(t),i=pr(e);if(n!==i)return Je(n,i);switch(n){case 0:return 0;case 1:return Je(t.booleanValue,e.booleanValue);case 2:return function(r,s){const o=Lt(r.integerValue||r.doubleValue),a=Lt(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return mg(t.timestampValue,e.timestampValue);case 4:return mg(Ao(t),Ao(e));case 5:return Je(t.stringValue,e.stringValue);case 6:return function(r,s){const o=ls(r),a=ls(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Je(o[l],a[l]);if(c!==0)return c}return Je(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const o=Je(Lt(r.latitude),Lt(s.latitude));return o!==0?o:Je(Lt(r.longitude),Lt(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=us(o[l],a[l]);if(c)return c}return Je(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){const o=r.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=Je(a[u],c[u]);if(h!==0)return h;const d=us(o[a[u]],l[c[u]]);if(d!==0)return d}return Je(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Ie()}}function mg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Je(t,e);const n=Ni(t),i=Ni(e),r=Je(n.seconds,i.seconds);return r!==0?r:Je(n.nanos,i.nanos)}function Ch(t){return Sh(t)}function Sh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=Ni(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ls(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,fe.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=Sh(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Sh(i.fields[a])}`;return s+"}"}(t.mapValue):Ie();var e,n}function gg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ah(t){return!!t&&"integerValue"in t}function kh(t){return!!t&&"arrayValue"in t}function _g(t){return!!t&&"nullValue"in t}function vg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wl(t){return!!t&&"mapValue"in t}function Ro(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Ro(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ro(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.value=e}static empty(){return new xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!wl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ro(n)}setAll(e){let n=Rn.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=Ro(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());wl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ei(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];wl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){fr(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new xn(Ro(this.value))}}function yg(t){const e=[];return fr(t.fields,(n,i)=>{const r=new Rn([n]);if(wl(i)){const s=yg(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new So(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n,i,r,s){this.key=e,this.documentType=n,this.version=i,this.data=r,this.documentState=s}static newInvalidDocument(e){return new ln(e,0,We.min(),xn.empty(),0)}static newFoundDocument(e,n,i){return new ln(e,1,n,i,0)}static newNoDocument(e,n){return new ln(e,2,n,xn.empty(),0)}static newUnknownDocument(e,n){return new ln(e,3,n,xn.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ln&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new ln(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class iS{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.A=null}}function bg(t,e=null,n=[],i=[],r=null,s=null,o=null){return new iS(t,e,n,i,r,s,o)}function Rh(t){const e=we(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>sS(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),cs(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Tl(e.startAt)),e.endAt&&(n+="|ub:",n+=Tl(e.endAt)),e.A=n}return e.A}function rS(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${Ch(i.value)}`;var i}).join(", ")}]`),cs(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Tl(t.startAt)),t.endAt&&(e+=", endAt: "+Tl(t.endAt)),`Target(${e})`}function Oh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!fS(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!ei(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wg(t.startAt,e.startAt)&&wg(t.endAt,e.endAt)}function Lh(t){return fe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class yn extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,i):new oS(e,n,i):n==="array-contains"?new cS(e,i):n==="in"?new uS(e,i):n==="not-in"?new hS(e,i):n==="array-contains-any"?new dS(e,i):new yn(e,n,i)}static R(e,n,i){return n==="in"?new aS(e,i):new lS(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(us(n,this.value)):n!==null&&pr(this.value)===pr(n)&&this.P(us(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function sS(t){return t.field.canonicalString()+t.op.toString()+Ch(t.value)}class oS extends yn{constructor(e,n,i){super(e,n,i),this.key=fe.fromName(i.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.P(n)}}class aS extends yn{constructor(e,n){super(e,"in",n),this.keys=Eg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lS extends yn{constructor(e,n){super(e,"not-in",n),this.keys=Eg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Eg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>fe.fromName(i.referenceValue))}class cS extends yn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return kh(n)&&ko(n.arrayValue,this.value)}}class uS extends yn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ko(this.value.arrayValue,n)}}class hS extends yn{constructor(e,n){super(e,"not-in",n)}matches(e){if(ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ko(this.value.arrayValue,n)}}class dS extends yn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!kh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>ko(this.value.arrayValue,i))}}class Nh{constructor(e,n){this.position=e,this.before=n}}function Tl(t){return`${t.before?"b":"a"}:${t.position.map(e=>Ch(e)).join(",")}`}class hs{constructor(e,n="asc"){this.field=e,this.dir=n}}function fS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ig(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=fe.comparator(fe.fromName(o.referenceValue),n.key):i=us(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return t.before?i<=0:i<0}function wg(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ei(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.V=null,this.S=null,this.startAt,this.endAt}}function pS(t,e,n,i,r,s,o,a){return new ds(t,e,n,i,r,s,o,a)}function Cl(t){return new ds(t)}function Sl(t){return!cs(t.limit)&&t.limitType==="F"}function Al(t){return!cs(t.limit)&&t.limitType==="L"}function Mh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ph(t){for(const e of t.filters)if(e.v())return e.field;return null}function Tg(t){return t.collectionGroup!==null}function Oo(t){const e=we(t);if(e.V===null){e.V=[];const n=Ph(e),i=Mh(e);if(n!==null&&i===null)n.isKeyField()||e.V.push(new hs(n)),e.V.push(new hs(Rn.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.V.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new hs(Rn.keyField(),s))}}}return e.V}function mr(t){const e=we(t);if(!e.S)if(e.limitType==="F")e.S=bg(e.path,e.collectionGroup,Oo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Oo(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new hs(s.field,o))}const i=e.endAt?new Nh(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Nh(e.startAt.position,!e.startAt.before):null;e.S=bg(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e.S}function mS(t,e,n){return new ds(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function kl(t,e){return Oh(mr(t),mr(e))&&t.limitType===e.limitType}function Cg(t){return`${Rh(mr(t))}|lt:${t.limitType}`}function Dh(t){return`Query(target=${rS(mr(t))}; limitType=${t.limitType})`}function Rl(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):fe.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!Ig(n.startAt,Oo(n),i)||n.endAt&&Ig(n.endAt,Oo(n),i))}(t,e)}function Sg(t){return(e,n)=>{let i=!1;for(const r of Oo(t)){const s=gS(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function gS(t,e,n){const i=t.field.isKeyField()?fe.comparator(e.key,n.key):function(r,s,o){const a=s.data.field(r),l=o.data.field(r);return a!==null&&l!==null?us(a,l):Ie()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Il(e)?"-0":e}}function kg(t){return{integerValue:""+t}}function _S(t,e){return nS(e)?kg(e):Ag(t,e)}/**
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
 */class Ol{constructor(){this._=void 0}}function vS(t,e,n){return t instanceof Lo?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&(s.fields.__previous_value__=r),{mapValue:s}}(n,e):t instanceof No?Og(t,e):t instanceof Mo?Lg(t,e):function(i,r){const s=Rg(i,r),o=Ng(s)+Ng(i.C);return Ah(s)&&Ah(i.C)?kg(o):Ag(i.N,o)}(t,e)}function yS(t,e,n){return t instanceof No?Og(t,e):t instanceof Mo?Lg(t,e):n}function Rg(t,e){return t instanceof Ll?Ah(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Lo extends Ol{}class No extends Ol{constructor(e){super(),this.elements=e}}function Og(t,e){const n=Mg(e);for(const i of t.elements)n.some(r=>ei(r,i))||n.push(i);return{arrayValue:{values:n}}}class Mo extends Ol{constructor(e){super(),this.elements=e}}function Lg(t,e){let n=Mg(e);for(const i of t.elements)n=n.filter(r=>!ei(r,i));return{arrayValue:{values:n}}}class Ll extends Ol{constructor(e,n){super(),this.N=e,this.C=n}}function Ng(t){return Lt(t.integerValue||t.doubleValue)}function Mg(t){return kh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,n){this.field=e,this.transform=n}}function ES(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof No&&i instanceof No||n instanceof Mo&&i instanceof Mo?as(n.elements,i.elements,ei):n instanceof Ll&&i instanceof Ll?ei(n.C,i.C):n instanceof Lo&&i instanceof Lo}(t.transform,e.transform)}class IS{constructor(e,n){this.version=e,this.transformResults=n}}class Xn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xn}static exists(e){return new Xn(void 0,e)}static updateTime(e){return new Xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ml{}function wS(t,e,n){t instanceof Pl?function(i,r,s){const o=i.value.clone(),a=xg(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof gr?function(i,r,s){if(!Nl(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=xg(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(Fg(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Fh(t,e,n){t instanceof Pl?function(i,r,s){if(!Nl(i.precondition,r))return;const o=i.value.clone(),a=Ug(i.fieldTransforms,s,r);o.setAll(a),r.convertToFoundDocument(Dg(r),o).setHasLocalMutations()}(t,e,n):t instanceof gr?function(i,r,s){if(!Nl(i.precondition,r))return;const o=Ug(i.fieldTransforms,s,r),a=r.data;a.setAll(Fg(i)),a.setAll(o),r.convertToFoundDocument(Dg(r),a).setHasLocalMutations()}(t,e,n):function(i,r){Nl(i.precondition,r)&&r.convertToNoDocument(We.min())}(t,e)}function TS(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=Rg(i.transform,r||null);s!=null&&(n==null&&(n=xn.empty()),n.set(i.field,s))}return n||null}function Pg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&as(n,i,(r,s)=>ES(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Dg(t){return t.isFoundDocument()?t.version:We.min()}class Pl extends Ml{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}}class gr extends Ml{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}}function Fg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function xg(t,e,n){const i=new Map;lt(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,yS(o,a,n[r]))}return i}function Ug(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,vS(s,o,e))}return i}class xh extends Ml{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class CS extends Ml{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nt,xe;function AS(t){switch(t){default:return Ie();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Vg(t){if(t===void 0)return Li("GRPC error has no .code"),D.UNKNOWN;switch(t){case Nt.OK:return D.OK;case Nt.CANCELLED:return D.CANCELLED;case Nt.UNKNOWN:return D.UNKNOWN;case Nt.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Nt.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Nt.INTERNAL:return D.INTERNAL;case Nt.UNAVAILABLE:return D.UNAVAILABLE;case Nt.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Nt.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Nt.NOT_FOUND:return D.NOT_FOUND;case Nt.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Nt.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Nt.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Nt.ABORTED:return D.ABORTED;case Nt.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Nt.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Nt.DATA_LOSS:return D.DATA_LOSS;default:return Ie()}}(xe=Nt||(Nt={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n){this.comparator=e,this.root=n||Zt.EMPTY}insert(e,n){return new cn(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Zt.BLACK,null,null))}remove(e){return new cn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Zt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Dl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Dl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Dl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Dl(this.root,e,this.comparator,!0)}}class Dl{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Zt{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:Zt.RED,this.left=r!=null?r:Zt.EMPTY,this.right=s!=null?s:Zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new Zt(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Zt.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ie();const e=this.left.check();if(e!==this.right.check())throw Ie();return e+(this.isRed()?0:1)}}Zt.EMPTY=null,Zt.RED=!0,Zt.BLACK=!1;Zt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie()}get value(){throw Ie()}get color(){throw Ie()}get left(){throw Ie()}get right(){throw Ie()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Zt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.comparator=e,this.data=new cn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jg(this.data.getIterator())}getIteratorFrom(e){return new jg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof $t)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $t(this.comparator);return n.data=e,n}}class jg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=new cn(fe.comparator);function _r(){return kS}const RS=new cn(fe.comparator);function Uh(){return RS}const OS=new cn(fe.comparator);function LS(){return OS}const NS=new $t(fe.comparator);function ft(...t){let e=NS;for(const n of t)e=e.add(n);return e}const MS=new $t(Je);function Bg(){return MS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const i=new Map;return i.set(e,Po.createSynthesizedTargetChangeForCurrentChange(e,n)),new Fl(We.min(),i,Bg(),_r(),ft())}}class Po{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Po(an.EMPTY_BYTE_STRING,n,ft(),ft(),ft())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n,i,r){this.k=e,this.removedTargetIds=n,this.key=i,this.$=r}}class Hg{constructor(e,n){this.targetId=e,this.O=n}}class qg{constructor(e,n,i=an.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class Wg{constructor(){this.F=0,this.M=zg(),this.L=an.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=ft(),n=ft(),i=ft();return this.M.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:Ie()}}),new Po(this.L,this.B,e,n,i)}G(){this.U=!1,this.M=zg()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class PS{constructor(e){this.tt=e,this.et=new Map,this.nt=_r(),this.st=Gg(),this.it=new $t(Je)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.ct(n,e.key,e.$);for(const n of e.removedTargetIds)this.ct(n,e.key,e.$)}at(e){this.forEachTarget(e,n=>{const i=this.ut(n);switch(e.state){case 0:this.ht(n)&&i.j(e.resumeToken);break;case 1:i.X(),i.q||i.G(),i.j(e.resumeToken);break;case 2:i.X(),i.q||this.removeTarget(n);break;case 3:this.ht(n)&&(i.Z(),i.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),i.j(e.resumeToken));break;default:Ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((i,r)=>{this.ht(r)&&n(r)})}ft(e){const n=e.targetId,i=e.O.count,r=this.dt(n);if(r){const s=r.target;if(Lh(s))if(i===0){const o=new fe(s.path);this.ct(n,o,ln.newNoDocument(o,We.min()))}else lt(i===1);else this.wt(n)!==i&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((s,o)=>{const a=this.dt(o);if(a){if(s.current&&Lh(a.target)){const l=new fe(a.target.path);this.nt.get(l)!==null||this.gt(o,l)||this.ct(o,l,ln.newNoDocument(l,e))}s.K&&(n.set(o,s.W()),s.G())}});let i=ft();this.st.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.dt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(s))});const r=new Fl(e,n,this.it,this.nt,i);return this.nt=_r(),this.st=Gg(),this.it=new $t(Je),r}ot(e,n){if(!this.ht(e))return;const i=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,i),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}ct(e,n,i){if(!this.ht(e))return;const r=this.ut(e);this.gt(e,n)?r.H(n,1):r.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),i&&(this.nt=this.nt.insert(n,i))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new Wg,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new $t(Je),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||le("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new Wg),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function Gg(){return new cn(fe.comparator)}function zg(){return new cn(fe.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),FS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class xS{constructor(e,n){this.databaseId=e,this.D=n}}function Ul(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kg(t,e){return t.D?e.toBase64():e.toUint8Array()}function US(t,e){return Ul(t,e.toTimestamp())}function li(t){return lt(!!t),We.fromTimestamp(function(e){const n=Ni(e);return new Fn(n.seconds,n.nanos)}(t))}function Vh(t,e){return function(n){return new vt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Xg(t){const e=vt.fromString(t);return lt(e_(e)),e}function jh(t,e){return Vh(t.databaseId,e.path)}function Bh(t,e){const n=Xg(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new fe(Qg(n))}function Hh(t,e){return Vh(t.databaseId,e)}function VS(t){const e=Xg(t);return e.length===4?vt.emptyPath():Qg(e)}function qh(t){return new vt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Qg(t){return lt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Yg(t,e,n){return{name:jh(t,e),fields:n.value.mapValue.fields}}function jS(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(l,c){return l.D?(lt(c===void 0||typeof c=="string"),an.fromBase64String(c||"")):(lt(c===void 0||c instanceof Uint8Array),an.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?D.UNKNOWN:Vg(l.code);return new Z(c,l.message||"")}(o);n=new qg(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Bh(t,i.document.name),s=li(i.document.updateTime),o=new xn({mapValue:{fields:i.document.fields}}),a=ln.newFoundDocument(r,s,o),l=i.targetIds||[],c=i.removedTargetIds||[];n=new xl(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Bh(t,i.document),s=i.readTime?li(i.readTime):We.min(),o=ln.newNoDocument(r,s),a=i.removedTargetIds||[];n=new xl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Bh(t,i.document),s=i.removedTargetIds||[];n=new xl([],s,r,null)}else{if(!("filter"in e))return Ie();{e.filter;const i=e.filter;i.targetId;const r=i.count||0,s=new SS(r),o=i.targetId;n=new Hg(o,s)}}return n}function BS(t,e){let n;if(e instanceof Pl)n={update:Yg(t,e.key,e.value)};else if(e instanceof xh)n={delete:jh(t,e.key)};else if(e instanceof gr)n={update:Yg(t,e.key,e.data),updateMask:JS(e.fieldMask)};else{if(!(e instanceof CS))return Ie();n={verify:jh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof Lo)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof No)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Mo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ll)return{fieldPath:s.field.canonicalString(),increment:o.C};throw Ie()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:US(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Ie()}(t,e.precondition)),n}function HS(t,e){return t&&t.length>0?(lt(e!==void 0),t.map(n=>function(i,r){let s=i.updateTime?li(i.updateTime):li(r);return s.isEqual(We.min())&&(s=li(r)),new IS(s,i.transformResults||[])}(n,e))):[]}function qS(t,e){return{documents:[Hh(t,e.path)]}}function WS(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Hh(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Hh(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(a){if(a.length===0)return;const l=a.map(c=>function(u){if(u.op==="=="){if(vg(u.value))return{unaryFilter:{field:fs(u.field),op:"IS_NAN"}};if(_g(u.value))return{unaryFilter:{field:fs(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(vg(u.value))return{unaryFilter:{field:fs(u.field),op:"IS_NOT_NAN"}};if(_g(u.value))return{unaryFilter:{field:fs(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fs(u.field),op:XS(u.op),value:u.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const s=function(a){if(a.length!==0)return a.map(l=>function(c){return{field:fs(c.field),direction:KS(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,l){return a.D||cs(l)?l:{value:l}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Zg(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Zg(e.endAt)),n}function GS(t){let e=VS(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){lt(i===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=Jg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new hs(ps(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,cs(h)?null:h}(n.limit));let l=null;n.startAt&&(l=$g(n.startAt));let c=null;return n.endAt&&(c=$g(n.endAt)),pS(e,r,o,s,a,"F",l,c)}function zS(t,e){const n=function(i,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ie()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Jg(t){return t?t.unaryFilter!==void 0?[YS(t)]:t.fieldFilter!==void 0?[QS(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Jg(e)).reduce((e,n)=>e.concat(n)):Ie():[]}function Zg(t){return{before:t.before,values:t.position}}function $g(t){const e=!!t.before,n=t.values||[];return new Nh(n,e)}function KS(t){return DS[t]}function XS(t){return FS[t]}function fs(t){return{fieldPath:t.canonicalString()}}function ps(t){return Rn.fromServerFormat(t.fieldPath)}function QS(t){return yn.create(ps(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ie()}}(t.fieldFilter.op),t.fieldFilter.value)}function YS(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ps(t.unaryFilter.field);return yn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ps(t.unaryFilter.field);return yn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ps(t.unaryFilter.field);return yn.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ps(t.unaryFilter.field);return yn.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Ie()}}function JS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function e_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const ZS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $S{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new Y((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof Y?n:Y.resolve(n)}catch(n){return Y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):Y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):Y.reject(n)}static resolve(e){return new Y((n,i)=>{n(e)})}static reject(e){return new Y((n,i)=>{i(e)})}static waitFor(e){return new Y((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},l=>i(l))}),o=!0,s===r&&n()})}static or(e){let n=Y.resolve(!1);for(const i of e)n=n.next(r=>r?Y.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}}function Do(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&wS(s,e,i[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Fh(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Fh(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const i=e.get(n.key),r=i;this.applyToLocalView(r),i.isValidDocument()||r.convertToNoDocument(We.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ft())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,(n,i)=>Pg(n,i))&&as(this.baseMutations,e.baseMutations,(n,i)=>Pg(n,i))}}class Wh{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){lt(e.mutations.length===i.length);let r=LS();const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new Wh(e,n,i,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,i,r,s=We.min(),o=We.min(),a=an.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.Wt=e}}function n1(t){const e=GS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mS(e,e.limit,"L"):e}/**
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
 */class i1{constructor(){this.Gt=new r1}addToCollectionParentIndex(e,n){return this.Gt.add(n),Y.resolve()}getCollectionParents(e,n){return Y.resolve(this.Gt.getEntries(n))}}class r1{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new $t(vt.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new $t(vt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new ms(0)}static ie(){return new ms(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==ZS)throw t;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r!==void 0){for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n])}else this.inner[i]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),!0;return!1}forEach(e){fr(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return dg(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(){this.changes=new xo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:We.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:ln.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?Y.resolve(i.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n,i){this.He=e,this.In=n,this.Ht=i}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(i=>this.Rn(e,n,i))}Rn(e,n,i){return this.He.getEntry(e,n).next(r=>{for(const s of i)s.applyToLocalView(r);return r})}bn(e,n){e.forEach((i,r)=>{for(const s of n)s.applyToLocalView(r)})}Pn(e,n){return this.He.getEntries(e,n).next(i=>this.vn(e,i).next(()=>i))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(i=>this.bn(n,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return fe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Vn(e,n.path):Tg(n)?this.Sn(e,n,i):this.Dn(e,n,i)}Vn(e,n){return this.An(e,new fe(n)).next(i=>{let r=Uh();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}Sn(e,n,i){const r=n.collectionGroup;let s=Uh();return this.Ht.getCollectionParents(e,r).next(o=>Y.forEach(o,a=>{const l=function(c,u){return new ds(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.Dn(e,l,i).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}Dn(e,n,i){let r,s;return this.He.getDocumentsMatchingQuery(e,n,i).next(o=>(r=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Cn(e,s,r).next(a=>{r=a;for(const l of s)for(const c of l.mutations){const u=c.key;let h=r.get(u);h==null&&(h=ln.newInvalidDocument(u),r=r.insert(u,h)),Fh(c,h,l.localWriteTime),h.isFoundDocument()||(r=r.remove(u))}}))).next(()=>(r.forEach((o,a)=>{Rl(n,a)||(r=r.remove(o))}),r))}Cn(e,n,i){let r=ft();for(const o of n)for(const a of o.mutations)a instanceof gr&&i.get(a.key)===null&&(r=r.add(a.key));let s=i;return this.He.getEntries(e,r).next(o=>(o.forEach((a,l)=>{l.isFoundDocument()&&(s=s.insert(a,l))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Nn=i,this.xn=r}static kn(e,n){let i=ft(),r=ft();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Gh(e,n.fromCache,i,r)}}/**
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
 */class o1{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,i,r){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||i.isEqual(We.min())?this.Fn(e,n):this.On.Pn(e,r).next(s=>{const o=this.Mn(n,s);return(Sl(n)||Al(n))&&this.Ln(n.limitType,o,r,i)?this.Fn(e,n):(lg()<=Ve.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Dh(n)),this.On.getDocumentsMatchingQuery(e,n,i).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}Mn(e,n){let i=new $t(Sg(e));return n.forEach((r,s)=>{Rl(e,s)&&(i=i.add(s))}),i}Ln(e,n,i,r){if(i.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Fn(e,n){return lg()<=Ve.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",Dh(n)),this.On.getDocumentsMatchingQuery(e,n,We.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n,i,r){this.persistence=e,this.Bn=n,this.N=r,this.Un=new cn(Je),this.qn=new xo(s=>Rh(s),Oh),this.Kn=We.min(),this.In=e.getMutationQueue(i),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new t_(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function l1(t,e,n,i){return new a1(t,e,n,i)}async function n_(t,e){const n=we(t);let i=n.In,r=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(l=>(a=l,i=n.persistence.getMutationQueue(e),r=new t_(n.jn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(o))).next(l=>{const c=[],u=[];let h=ft();for(const d of a){c.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}for(const d of l){u.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}return r.Pn(o,h).next(d=>({Wn:d,removedBatchIds:c,addedBatchIds:u}))})});return n.In=i,n.Qn=r,n.Bn.$n(n.Qn),s}function c1(t,e){const n=we(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=Y.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(p=>{const g=l.docVersions.get(f);lt(g!==null),p.version.compareTo(g)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&c.addEntry(p,l.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,u))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.In.performConsistencyCheck(i)).next(()=>n.Qn.Pn(i,r))})}function i_(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function u1(t,e){const n=we(t),i=e.snapshotVersion;let r=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});r=n.Un;const a=[];e.targetChanges.forEach((c,u)=>{const h=r.get(u);if(!h)return;a.push(n.ze.removeMatchingKeys(s,c.removedDocuments,u).next(()=>n.ze.addMatchingKeys(s,c.addedDocuments,u)));const d=c.resumeToken;if(d.approximateByteSize()>0){const f=h.withResumeToken(d,i).withSequenceNumber(s.currentSequenceNumber);r=r.insert(u,f),function(p,g,m){return lt(g.resumeToken.approximateByteSize()>0),p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(h,f,c)&&a.push(n.ze.updateTargetData(s,f))}});let l=_r();if(e.documentUpdates.forEach((c,u)=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(h1(s,o,e.documentUpdates,i,void 0).next(c=>{l=c})),!i.isEqual(We.min())){const c=n.ze.getLastRemoteSnapshotVersion(s).next(u=>n.ze.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(c)}return Y.waitFor(a).next(()=>o.apply(s)).next(()=>n.Qn.vn(s,l)).next(()=>l)}).then(s=>(n.Un=r,s))}function h1(t,e,n,i,r){let s=ft();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=_r();return n.forEach((l,c)=>{const u=o.get(l),h=(r==null?void 0:r.get(l))||i;c.isNoDocument()&&c.version.isEqual(We.min())?(e.removeEntry(l,h),a=a.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c,h),a=a.insert(l,c)):le("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),a})}function d1(t,e){const n=we(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(i,e)))}function f1(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.ze.getTargetData(i,e).next(s=>s?(r=s,Y.resolve(r)):n.ze.allocateTargetId(i).next(o=>(r=new vr(e,o,0,i.currentSequenceNumber),n.ze.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.Un.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(i.targetId,i),n.qn.set(e,i.targetId)),i})}async function zh(t,e,n){const i=we(t),r=i.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Do(o))throw o;le("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Un=i.Un.remove(e),i.qn.delete(r.target)}function r_(t,e,n){const i=we(t);let r=We.min(),s=ft();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=we(a),h=u.qn.get(c);return h!==void 0?Y.resolve(u.Un.get(h)):u.ze.getTargetData(l,c)}(i,o,mr(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.ze.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>i.Bn.getDocumentsMatchingQuery(o,e,n?r:We.min(),n?s:ft())).next(a=>({documents:a,Gn:s})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return Y.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var i;return this.Yn.set(n.id,{id:(i=n).id,version:i.version,createTime:li(i.createTime)}),Y.resolve()}getNamedQuery(e,n){return Y.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:n1(i.bundledQuery),readTime:li(i.readTime)}}(n)),Y.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.Zn=new $t(Wt.ts),this.es=new $t(Wt.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const i=new Wt(e,n);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.rs(new Wt(e,n))}os(e,n){e.forEach(i=>this.removeReference(i,n))}cs(e){const n=new fe(new vt([])),i=new Wt(n,e),r=new Wt(n,e+1),s=[];return this.es.forEachInRange([i,r],o=>{this.rs(o),s.push(o.key)}),s}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new fe(new vt([])),i=new Wt(n,e),r=new Wt(n,e+1);let s=ft();return this.es.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Wt(e,0),i=this.Zn.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Wt{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return fe.comparator(e.key,n.key)||Je(e.ls,n.ls)}static ns(e,n){return Je(e.ls,n.ls)||fe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new $t(Wt.ts)}checkEmpty(e){return Y.resolve(this.In.length===0)}addMutationBatch(e,n,i,r){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new e1(s,n,i,r);this.In.push(o);for(const a of r)this.ds=this.ds.add(new Wt(a.key,s)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return Y.resolve(o)}lookupMutationBatch(e,n){return Y.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this._s(i),s=r<0?0:r;return Y.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return Y.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Wt(n,0),r=new Wt(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([i,r],o=>{const a=this.ws(o.ls);s.push(a)}),Y.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new $t(Je);return n.forEach(r=>{const s=new Wt(r,0),o=new Wt(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{i=i.add(a.ls)})}),Y.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;fe.isDocumentKey(s)||(s=s.child(""));const o=new Wt(new fe(s),0);let a=new $t(Je);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.ls)),!0)},o),Y.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(i=>{const r=this.ws(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){lt(this.ys(n.batchId,"removed")===0),this.In.shift();let i=this.ds;return Y.forEach(n.mutations,r=>{const s=new Wt(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=i})}te(e){}containsKey(e,n){const i=new Wt(n,0),r=this.ds.firstAfterOrEqual(i);return Y.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.In.length,Y.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new cn(fe.comparator),this.size=0}addEntry(e,n,i){const r=n.key,s=this.docs.get(r),o=s?s.size:0,a=this.ps(n);return this.docs=this.docs.insert(r,{document:n.clone(),size:a,readTime:i}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return Y.resolve(i?i.document.clone():ln.newInvalidDocument(n))}getEntries(e,n){let i=_r();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.clone():ln.newInvalidDocument(r))}),Y.resolve(i)}getDocumentsMatchingQuery(e,n,i){let r=_r();const s=new fe(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l,readTime:c}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;c.compareTo(i)<=0||Rl(n,l)&&(r=r.insert(l.key,l.clone()))}return Y.resolve(r)}Ts(e,n){return Y.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new _1(this)}getSize(e){return Y.resolve(this.size)}}class _1 extends s1{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.document.isValidDocument()?n.push(this.Se.addEntry(e,r.document,this.getReadTime(i))):this.Se.removeEntry(i)}),Y.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){this.persistence=e,this.Es=new xo(n=>Rh(n),Oh),this.lastRemoteSnapshotVersion=We.min(),this.highestTargetId=0,this.Is=0,this.As=new Kh,this.targetCount=0,this.Rs=ms.se()}forEachTarget(e,n){return this.Es.forEach((i,r)=>n(r)),Y.resolve()}getLastRemoteSnapshotVersion(e){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Y.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Is&&(this.Is=n),Y.resolve()}ce(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new ms(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,Y.resolve()}updateTargetData(e,n){return this.ce(n),Y.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,Y.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Es.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),Y.waitFor(s).next(()=>r)}getTargetCount(e){return Y.resolve(this.targetCount)}getTargetData(e,n){const i=this.Es.get(n)||null;return Y.resolve(i)}addMatchingKeys(e,n,i){return this.As.ss(n,i),Y.resolve()}removeMatchingKeys(e,n,i){this.As.os(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),Y.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),Y.resolve()}getMatchingKeysForTargetId(e,n){const i=this.As.hs(n);return Y.resolve(i)}containsKey(e,n){return Y.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,n){this.bs={},this.Le=new Th(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new v1(this),this.Ht=new i1,this.He=function(i,r){return new g1(i,r)}(this.Ht,i=>this.referenceDelegate.Ps(i)),this.N=new t1(n),this.Je=new p1(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new m1(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,i){le("MemoryPersistence","Starting transaction:",e);const r=new b1(this.Le.next());return this.referenceDelegate.vs(),i(r).next(s=>this.referenceDelegate.Vs(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Ss(e,n){return Y.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,n)))}}class b1 extends $S{constructor(e){super(),this.currentSequenceNumber=e}}class Xh{constructor(e){this.persistence=e,this.Ds=new Kh,this.Cs=null}static Ns(e){return new Xh(e)}get xs(){if(this.Cs)return this.Cs;throw Ie()}addReference(e,n,i){return this.Ds.addReference(i,n),this.xs.delete(i.toString()),Y.resolve()}removeReference(e,n,i){return this.Ds.removeReference(i,n),this.xs.add(i.toString()),Y.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),Y.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(r=>this.xs.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.xs.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.xs,i=>{const r=fe.fromPath(i);return this.ks(e,r).next(s=>{s||n.removeEntry(r)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(i=>{i?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return Y.or([()=>Y.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class s_{constructor(){this.activeTargetIds=Bg()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class E1{constructor(){this.yi=new s_,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,i){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new s_,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class I1{Ti(e){}shutdown(){}}/**
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
 */class o_{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){le("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){le("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,i,r){const s=this.Bi(e,n);le("RestConnection","Sending: ",s,i);const o={};return this.Ui(o,r),this.qi(e,s,o,i).then(a=>(le("RestConnection","Received: ",a),a),a=>{throw cg("RestConnection",`${e} failed with error: `,a,"url: ",s,"request:",i),a})}Ki(e,n,i,r){return this.Li(e,n,i,r)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+os,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const i in n.authHeaders)n.authHeaders.hasOwnProperty(i)&&(e[i]=n.authHeaders[i])}Bi(e,n){const i=w1[e];return`${this.Fi}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,i,r){return new Promise((s,o)=>{const a=new KC;a.listenOnce(WC.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ih.NO_ERROR:const c=a.getResponseJson();le("Connection","XHR received:",JSON.stringify(c)),s(c);break;case Ih.TIMEOUT:le("Connection",'RPC "'+e+'" timed out'),o(new Z(D.DEADLINE_EXCEEDED,"Request time out"));break;case Ih.HTTP_ERROR:const u=a.getStatus();if(le("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const p=f.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(p)>=0?p:D.UNKNOWN}(h.status);o(new Z(d,h.message))}else o(new Z(D.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Z(D.UNAVAILABLE,"Connection failed."));break;default:Ie()}}finally{le("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(r);a.send(n,"POST",l,i,15)})}ji(e,n){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=HC(),s=qC(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new zC({})),this.Ui(o.initMessageHeaders,n),Ha()||Au()||B0()||jp()||H0()||Vp()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");le("Connection","Creating WebChannel: "+a,o);const l=r.createWebChannel(a,o);let c=!1,u=!1;const h=new T1({vi:f=>{u?le("Connection","Not sending because WebChannel is closed:",f):(c||(le("Connection","Opening WebChannel transport."),l.open(),c=!0),le("Connection","WebChannel sending:",f),l.send(f))},Vi:()=>l.close()}),d=(f,p,g)=>{f.listen(p,m=>{try{g(m)}catch(v){setTimeout(()=>{throw v},0)}})};return d(l,El.EventType.OPEN,()=>{u||le("Connection","WebChannel transport opened.")}),d(l,El.EventType.CLOSE,()=>{u||(u=!0,le("Connection","WebChannel transport closed"),h.$i())}),d(l,El.EventType.ERROR,f=>{u||(u=!0,cg("Connection","WebChannel transport errored:",f),h.$i(new Z(D.UNAVAILABLE,"The operation could not be completed")))}),d(l,El.EventType.MESSAGE,f=>{var p;if(!u){const g=f.data[0];lt(!!g);const m=g,v=m.error||((p=m[0])===null||p===void 0?void 0:p.error);if(v){le("Connection","WebChannel received error:",v);const C=v.status;let w=function(R){const k=Nt[R];if(k!==void 0)return Vg(k)}(C),y=v.message;w===void 0&&(w=D.INTERNAL,y="Unknown error status: "+C+" with message "+v.message),u=!0,h.$i(new Z(w,y)),l.close()}else le("Connection","WebChannel received:",g),h.Oi(g)}}),d(s,GC.STAT_EVENT,f=>{f.stat===og.PROXY?le("Connection","Detected buffering proxy"):f.stat===og.NOPROXY&&le("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function Qh(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t){return new xS(t,!0)}class a_{constructor(e,n,i=1e3,r=1.5,s=6e4){this.Oe=e,this.timerId=n,this.Qi=i,this.Wi=r,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),i=Math.max(0,Date.now()-this.Ji),r=Math.max(0,n-i);r>0&&le("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n,i,r,s,o,a){this.Oe=e,this.er=i,this.nr=r,this.sr=s,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new a_(e,n)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Li(n.toString()),Li("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),n=this.ir;this.credentialsProvider.getToken().then(i=>{this.ir===n&&this.Er(i)},i=>{e(()=>{const r=new Z(D.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Ir(r)})})}Er(e){const n=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(i=>{n(()=>this.Ir(i))}),this.stream.onMessage(i=>{n(()=>this.onMessage(i))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return le("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return n=>{this.Oe.enqueueAndForget(()=>this.ir===e?n():(le("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class S1 extends l_{constructor(e,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s),this.N=r}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const n=jS(this.N,e),i=function(r){if(!("targetChange"in r))return We.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?We.min():s.readTime?li(s.readTime):We.min()}(e);return this.listener.Rr(n,i)}br(e){const n={};n.database=qh(this.N),n.addTarget=function(r,s){let o;const a=s.target;return o=Lh(a)?{documents:qS(r,a)}:{query:WS(r,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Kg(r,s.resumeToken):s.snapshotVersion.compareTo(We.min())>0&&(o.readTime=Ul(r,s.snapshotVersion.toTimestamp())),o}(this.N,e);const i=zS(this.N,e);i&&(n.labels=i),this.mr(n)}Pr(e){const n={};n.database=qh(this.N),n.removeTarget=e,this.mr(n)}}class A1 extends l_{constructor(e,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s),this.N=r,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(lt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const n=HS(e.writeResults,e.commitTime),i=li(e.commitTime);return this.listener.Dr(i,n)}return lt(!e.writeResults||e.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=qh(this.N),this.mr(e)}Sr(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>BS(this.N,i))};this.mr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1 extends class{}{constructor(e,n,i){super(),this.credentials=e,this.sr=n,this.N=i,this.kr=!1}$r(){if(this.kr)throw new Z(D.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,i){return this.$r(),this.credentials.getToken().then(r=>this.sr.Li(e,n,i,r)).catch(r=>{throw r.name==="FirebaseError"?(r.code===D.UNAUTHENTICATED&&this.credentials.invalidateToken(),r):new Z(D.UNKNOWN,r.toString())})}Ki(e,n,i){return this.$r(),this.credentials.getToken().then(r=>this.sr.Ki(e,n,i,r)).catch(r=>{throw r.name==="FirebaseError"?(r.code===D.UNAUTHENTICATED&&this.credentials.invalidateToken(),r):new Z(D.UNKNOWN,r.toString())})}terminate(){this.kr=!0}}class R1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(Li(n),this.Mr=!1):le("OnlineStateTracker",n)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=s,this.zr.Ti(o=>{i.enqueueAndForget(async()=>{yr(this)&&(le("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=we(a);l.Wr.add(4),await Uo(l),l.Hr.set("Unknown"),l.Wr.delete(4),await jl(l)}(this))})}),this.Hr=new R1(i,r)}}async function jl(t){if(yr(t))for(const e of t.Gr)await e(!0)}async function Uo(t){for(const e of t.Gr)await e(!1)}function c_(t,e){const n=we(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),Zh(n)?Jh(n):gs(n).hr()&&Yh(n,e))}function u_(t,e){const n=we(t),i=gs(n);n.Qr.delete(e),i.hr()&&h_(n,e),n.Qr.size===0&&(i.hr()?i.wr():yr(n)&&n.Hr.set("Unknown"))}function Yh(t,e){t.Jr.Y(e.targetId),gs(t).br(e)}function h_(t,e){t.Jr.Y(e),gs(t).Pr(e)}function Jh(t){t.Jr=new PS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),gs(t).start(),t.Hr.Lr()}function Zh(t){return yr(t)&&!gs(t).ur()&&t.Qr.size>0}function yr(t){return we(t).Wr.size===0}function d_(t){t.Jr=void 0}async function L1(t){t.Qr.forEach((e,n)=>{Yh(t,e)})}async function N1(t,e){d_(t),Zh(t)?(t.Hr.qr(e),Jh(t)):t.Hr.set("Unknown")}async function M1(t,e,n){if(t.Hr.set("Online"),e instanceof qg&&e.state===2&&e.cause)try{await async function(i,r){const s=r.cause;for(const o of r.targetIds)i.Qr.has(o)&&(await i.remoteSyncer.rejectListen(o,s),i.Qr.delete(o),i.Jr.removeTarget(o))}(t,e)}catch(i){le("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Bl(t,i)}else if(e instanceof xl?t.Jr.rt(e):e instanceof Hg?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(We.min()))try{const i=await i_(t.localStore);n.compareTo(i)>=0&&await function(r,s){const o=r.Jr._t(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.Qr.get(l);c&&r.Qr.set(l,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=r.Qr.get(a);if(!l)return;r.Qr.set(a,l.withResumeToken(an.EMPTY_BYTE_STRING,l.snapshotVersion)),h_(r,a);const c=new vr(l.target,a,1,l.sequenceNumber);Yh(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){le("RemoteStore","Failed to raise snapshot:",i),await Bl(t,i)}}async function Bl(t,e,n){if(!Do(e))throw e;t.Wr.add(1),await Uo(t),t.Hr.set("Offline"),n||(n=()=>i_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{le("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await jl(t)})}function f_(t,e){return e().catch(n=>Bl(t,n,e))}async function Hl(t){const e=we(t),n=Mi(e);let i=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;P1(e);)try{const r=await d1(e.localStore,i);if(r===null){e.jr.length===0&&n.wr();break}i=r.batchId,D1(e,r)}catch(r){await Bl(e,r)}p_(e)&&m_(e)}function P1(t){return yr(t)&&t.jr.length<10}function D1(t,e){t.jr.push(e);const n=Mi(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function p_(t){return yr(t)&&!Mi(t).ur()&&t.jr.length>0}function m_(t){Mi(t).start()}async function F1(t){Mi(t).Nr()}async function x1(t){const e=Mi(t);for(const n of t.jr)e.Sr(n.mutations)}async function U1(t,e,n){const i=t.jr.shift(),r=Wh.from(i,e,n);await f_(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Hl(t)}async function V1(t,e){e&&Mi(t).Vr&&await async function(n,i){if(r=i.code,AS(r)&&r!==D.ABORTED){const s=n.jr.shift();Mi(n).dr(),await f_(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Hl(n)}var r}(t,e),p_(t)&&m_(t)}async function j1(t,e){const n=we(t);e?(n.Wr.delete(2),await jl(n)):e||(n.Wr.add(2),await Uo(n),n.Hr.set("Unknown"))}function gs(t){return t.Yr||(t.Yr=function(e,n,i){const r=we(e);return r.$r(),new S1(n,r.sr,r.credentials,r.N,i)}(t.datastore,t.asyncQueue,{Si:L1.bind(null,t),Ci:N1.bind(null,t),Rr:M1.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),Zh(t)?Jh(t):t.Hr.set("Unknown")):(await t.Yr.stop(),d_(t))})),t.Yr}function Mi(t){return t.Xr||(t.Xr=function(e,n,i){const r=we(e);return r.$r(),new A1(n,r.sr,r.credentials,r.N,i)}(t.datastore,t.asyncQueue,{Si:F1.bind(null,t),Ci:V1.bind(null,t),Cr:x1.bind(null,t),Dr:U1.bind(null,t)}),t.Gr.push(async e=>{e?(t.Xr.dr(),await Hl(t)):(await t.Xr.stop(),t.jr.length>0&&(le("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))})),t.Xr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new ai,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new $h(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ed(t,e){if(Li("AsyncQueue",`${e}: ${t}`),Do(t))return new Z(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.comparator=e?(n,i)=>e(n,i)||fe.comparator(n.key,i.key):(n,i)=>fe.comparator(n.key,i.key),this.keyedMap=Uh(),this.sortedSet=new cn(this.comparator)}static emptySet(e){return new _s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new _s;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(){this.Zr=new cn(fe.comparator)}track(e){const n=e.doc.key,i=this.Zr.get(n);i?e.type!==0&&i.type===3?this.Zr=this.Zr.insert(n,e):e.type===3&&i.type!==1?this.Zr=this.Zr.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Zr=this.Zr.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Zr=this.Zr.remove(n):e.type===1&&i.type===2?this.Zr=this.Zr.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):Ie():this.Zr=this.Zr.insert(n,e)}eo(){const e=[];return this.Zr.inorderTraversal((n,i)=>{e.push(i)}),e}}class vs{constructor(e,n,i,r,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,i,r){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new vs(e,n,_s.emptySet(n),s,i,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(){this.no=void 0,this.listeners=[]}}class H1{constructor(){this.queries=new xo(e=>Cg(e),kl),this.onlineState="Unknown",this.so=new Set}}async function td(t,e){const n=we(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new B1),r)try{s.no=await n.onListen(i)}catch(o){const a=ed(o,`Initialization of query '${Dh(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.listeners.push(e),e.io(n.onlineState),s.no&&e.ro(s.no)&&id(n)}async function nd(t,e){const n=we(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function q1(t,e){const n=we(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.ro(r)&&(i=!0);o.no=r}}i&&id(n)}function W1(t,e,n){const i=we(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function id(t){t.so.forEach(e=>{e.next()})}class rd{constructor(e,n,i){this.query=e,this.oo=n,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=i||{}}ro(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new vs(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.uo(e)&&(this.oo.next(e),n=!0):this.ho(e,this.onlineState)&&(this.lo(e),n=!0),this.ao=e,n}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let n=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),n=!0),n}ho(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.fo||!i)&&(!e.docs.isEmpty()||n==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const n=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}lo(e){e=vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e){this.key=e}}class v_{constructor(e){this.key=e}}class G1{constructor(e,n){this.query=e,this.po=n,this.To=null,this.current=!1,this.Eo=ft(),this.mutatedKeys=ft(),this.Io=Sg(e),this.Ao=new _s(this.Io)}get Ro(){return this.po}bo(e,n){const i=n?n.Po:new g_,r=n?n.Ao:this.Ao;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=Sl(this.query)&&r.size===this.query.limit?r.last():null,c=Al(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),f=Rl(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),g=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let m=!1;d&&f?d.data.isEqual(f.data)?p!==g&&(i.track({type:3,doc:f}),m=!0):this.vo(d,f)||(i.track({type:2,doc:f}),m=!0,(l&&this.Io(f,l)>0||c&&this.Io(f,c)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),m=!0):d&&!f&&(i.track({type:1,doc:d}),m=!0,(l||c)&&(a=!0)),m&&(f?(o=o.add(f),s=g?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),Sl(this.query)||Al(this.query))for(;o.size>this.query.limit;){const u=Sl(this.query)?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),i.track({type:1,doc:u})}return{Ao:o,Po:i,Ln:a,mutatedKeys:s}}vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const r=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const s=e.Po.eo();s.sort((c,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie()}};return f(h)-f(d)}(c.type,u.type)||this.Io(c.doc,u.doc)),this.Vo(i);const o=n?this.So():[],a=this.Eo.size===0&&this.current?1:0,l=a!==this.To;return this.To=a,s.length!==0||l?{snapshot:new vs(this.query,e.Ao,r,s,e.mutatedKeys,a===0,l,!1),Do:o}:{Do:o}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new g_,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(n=>this.po=this.po.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.po=this.po.delete(n)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=ft(),this.Ao.forEach(i=>{this.Co(i.key)&&(this.Eo=this.Eo.add(i.key))});const n=[];return e.forEach(i=>{this.Eo.has(i)||n.push(new v_(i))}),this.Eo.forEach(i=>{e.has(i)||n.push(new __(i))}),n}No(e){this.po=e.Gn,this.Eo=ft();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return vs.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class z1{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class K1{constructor(e){this.key=e,this.ko=!1}}class X1{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new xo(a=>Cg(a),kl),this.Fo=new Map,this.Mo=new Set,this.Lo=new cn(fe.comparator),this.Bo=new Map,this.Uo=new Kh,this.qo={},this.Ko=new Map,this.jo=ms.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function Q1(t,e){const n=sA(t);let i,r;const s=n.Oo.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.xo();else{const o=await f1(n.localStore,mr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await Y1(n,e,i,a==="current"),n.isPrimaryClient&&c_(n.remoteStore,o)}return r}async function Y1(t,e,n,i){t.Wo=(u,h,d)=>async function(f,p,g,m){let v=p.view.bo(g);v.Ln&&(v=await r_(f.localStore,p.query,!1).then(({documents:y})=>p.view.bo(y,v)));const C=m&&m.targetChanges.get(p.targetId),w=p.view.applyChanges(v,f.isPrimaryClient,C);return T_(f,p.targetId,w.Do),w.snapshot}(t,u,h,d);const r=await r_(t.localStore,e,!0),s=new G1(e,r.Gn),o=s.bo(r.documents),a=Po.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);T_(t,n,l.Do);const c=new z1(e,n,s);return t.Oo.set(e,c),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),l.snapshot}async function J1(t,e){const n=we(t),i=n.Oo.get(e),r=n.Fo.get(i.targetId);if(r.length>1)return n.Fo.set(i.targetId,r.filter(s=>!kl(s,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await zh(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),u_(n.remoteStore,i.targetId),sd(n,i.targetId)}).catch(Fo)):(sd(n,i.targetId),await zh(n.localStore,i.targetId,!0))}async function Z1(t,e,n){const i=oA(t);try{const r=await function(s,o){const a=we(s),l=Fn.now(),c=o.reduce((h,d)=>h.add(d.key),ft());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,c).next(d=>{u=d;const f=[];for(const p of o){const g=TS(p,u.get(p.key));g!=null&&f.push(new gr(p.key,g,yg(g.value.mapValue),Xn.exists(!0)))}return a.In.addMutationBatch(h,l,f,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(s,o,a){let l=s.qo[s.currentUser.toKey()];l||(l=new cn(Je)),l=l.insert(o,a),s.qo[s.currentUser.toKey()]=l}(i,r.batchId,n),await Vo(i,r.changes),await Hl(i.remoteStore)}catch(r){const s=ed(r,"Failed to persist write");n.reject(s)}}async function y_(t,e){const n=we(t);try{const i=await u1(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.Bo.get(s);o&&(lt(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ko=!0:r.modifiedDocuments.size>0?lt(o.ko):r.removedDocuments.size>0&&(lt(o.ko),o.ko=!1))}),await Vo(n,i,e)}catch(i){await Fo(i)}}function b_(t,e,n){const i=we(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.Oo.forEach((s,o)=>{const a=o.view.io(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=we(s);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.io(o)&&(l=!0)}),l&&id(a)}(i.eventManager,e),r.length&&i.$o.Rr(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function $1(t,e,n){const i=we(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Bo.get(e),s=r&&r.key;if(s){let o=new cn(fe.comparator);o=o.insert(s,ln.newNoDocument(s,We.min()));const a=ft().add(s),l=new Fl(We.min(),new Map,new $t(Je),o,a);await y_(i,l),i.Lo=i.Lo.remove(s),i.Bo.delete(e),od(i)}else await zh(i.localStore,e,!1).then(()=>sd(i,e,n)).catch(Fo)}async function eA(t,e){const n=we(t),i=e.batch.batchId;try{const r=await c1(n.localStore,e);I_(n,i,null),E_(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Vo(n,r)}catch(r){await Fo(r)}}async function tA(t,e,n){const i=we(t);try{const r=await function(s,o){const a=we(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.In.lookupMutationBatch(l,o).next(u=>(lt(u!==null),c=u.keys(),a.In.removeMutationBatch(l,u))).next(()=>a.In.performConsistencyCheck(l)).next(()=>a.Qn.Pn(l,c))})}(i.localStore,e);I_(i,e,n),E_(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Vo(i,r)}catch(r){await Fo(r)}}function E_(t,e){(t.Ko.get(e)||[]).forEach(n=>{n.resolve()}),t.Ko.delete(e)}function I_(t,e,n){const i=we(t);let r=i.qo[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.qo[i.currentUser.toKey()]=r}}function sd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Fo.get(e))t.Oo.delete(i),n&&t.$o.Go(i,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(i=>{t.Uo.containsKey(i)||w_(t,i)})}function w_(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);n!==null&&(u_(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),od(t))}function T_(t,e,n){for(const i of n)i instanceof __?(t.Uo.addReference(i.key,e),nA(t,i)):i instanceof v_?(le("SyncEngine","Document no longer in limbo: "+i.key),t.Uo.removeReference(i.key,e),t.Uo.containsKey(i.key)||w_(t,i.key)):Ie()}function nA(t,e){const n=e.key,i=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(i)||(le("SyncEngine","New document in limbo: "+n),t.Mo.add(i),od(t))}function od(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new fe(vt.fromString(e)),i=t.jo.next();t.Bo.set(i,new K1(n)),t.Lo=t.Lo.insert(n,i),c_(t.remoteStore,new vr(mr(Cl(n.path)),i,2,Th.T))}}async function Vo(t,e,n){const i=we(t),r=[],s=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach((a,l)=>{o.push(i.Wo(l,e,n).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),r.push(c);const u=Gh.kn(l.targetId,c);s.push(u)}}))}),await Promise.all(o),i.$o.Rr(r),await async function(a,l){const c=we(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>Y.forEach(l,h=>Y.forEach(h.Nn,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>Y.forEach(h.xn,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Do(u))throw u;le("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Un.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);c.Un=c.Un.insert(h,p)}}}(i.localStore,s))}async function iA(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){le("SyncEngine","User change. New user:",e.toKey());const i=await n_(n.localStore,e);n.currentUser=e,function(r,s){r.Ko.forEach(o=>{o.forEach(a=>{a.reject(new Z(D.CANCELLED,s))})}),r.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Vo(n,i.Wn)}}function rA(t,e){const n=we(t),i=n.Bo.get(e);if(i&&i.ko)return ft().add(i.key);{let r=ft();const s=n.Fo.get(e);if(!s)return r;for(const o of s){const a=n.Oo.get(o);r=r.unionWith(a.view.Ro)}return r}}function sA(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=y_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$1.bind(null,e),e.$o.Rr=q1.bind(null,e.eventManager),e.$o.Go=W1.bind(null,e.eventManager),e}function oA(t){const e=we(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tA.bind(null,e),e}class aA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=Vl(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return l1(this.persistence,new o1,e.initialUser,this.N)}Jo(e){return new y1(Xh.Ns,this.N)}Ho(e){return new E1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class lA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>b_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=iA.bind(null,this.syncEngine),await j1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new H1}createDatastore(e){const n=Vl(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new C1(r));var r;return function(s,o,a){return new k1(s,o,a)}(e.credentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>b_(this.syncEngine,a,0),o=o_.bt()?new o_:new I1,new O1(n,i,r,s,o);var n,i,r,s,o}createSyncEngine(e,n){return function(i,r,s,o,a,l,c){const u=new X1(i,r,s,o,a,l);return c&&(u.Qo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=we(e);le("RemoteStore","RemoteStore shutting down."),n.Wr.add(5),await Uo(n),n.zr.shutdown(),n.Hr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ad{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n,i){this.credentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=kn.UNAUTHENTICATED,this.clientId=ug.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async r=>{le("FirestoreClient","Received user=",r.uid),await this.credentialListener(r),this.user=r})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Z(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ai;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const i=ed(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function uA(t,e){t.asyncQueue.verifyOperationInProgress(),le("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await n_(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function hA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dA(t);le("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>async function(s,o){const a=we(s);a.asyncQueue.verifyOperationInProgress(),le("RemoteStore","RemoteStore received new credentials");const l=yr(a);a.Wr.add(3),await Uo(a),l&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await jl(a)}(e.remoteStore,r)),t.onlineComponents=e}async function dA(t){return t.offlineComponents||(le("FirestoreClient","Using default OfflineComponentProvider"),await uA(t,new aA)),t.offlineComponents}async function C_(t){return t.onlineComponents||(le("FirestoreClient","Using default OnlineComponentProvider"),await hA(t,new lA)),t.onlineComponents}function fA(t){return C_(t).then(e=>e.syncEngine)}async function ql(t){const e=await C_(t),n=e.eventManager;return n.onListen=Q1.bind(null,e.syncEngine),n.onUnlisten=J1.bind(null,e.syncEngine),n}function pA(t,e,n={}){const i=new ai;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,l){const c=new ad({next:h=>{s.enqueueAndForget(()=>nd(r,u));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new Z(D.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new Z(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new rd(Cl(o.path),c,{includeMetadataChanges:!0,fo:!0});return td(r,u)}(await ql(t),t.asyncQueue,e,n,i)),i.promise}function mA(t,e,n={}){const i=new ai;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,l){const c=new ad({next:h=>{s.enqueueAndForget(()=>nd(r,u)),h.fromCache&&a.source==="server"?l.reject(new Z(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new rd(o,c,{includeMetadataChanges:!0,fo:!0});return td(r,u)}(await ql(t),t.asyncQueue,e,n,i)),i.promise}class gA{constructor(e,n,i,r,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class jo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof jo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t,e,n){if(!n)throw new Z(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _A(t,e,n,i){if(e===!0&&i===!0)throw new Z(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function k_(t){if(!fe.isDocumentKey(t))throw new Z(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function R_(t){if(fe.isDocumentKey(t))throw new Z(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ie()}function Un(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wl(t);throw new Z(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,_A("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new O_({}),this._settingsFrozen=!1,e instanceof jo?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new Z(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jo(i.options.projectId)}(e))}get app(){if(!this._app)throw new Z(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Z(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new O_(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new QC;switch(n.type){case"gapi":const i=n.client;return lt(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new ZC(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new Z(D.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=S_.get(e);n&&(le("ComponentProvider","Removing Datastore"),S_.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new un(this.firestore,e,this._key)}}class br{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new br(this.firestore,e,this._query)}}class Pi extends br{constructor(e,n,i){super(e,n,Cl(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new un(this.firestore,null,new fe(e))}withConverter(e){return new Pi(this.firestore,e,this._path)}}function oj(t,e,...n){if(t=Ye(t),A_("collection","path",e),t instanceof ld){const i=vt.fromString(e,...n);return R_(i),new Pi(t,null,i)}{if(!(t instanceof un||t instanceof Pi))throw new Z(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(vt.fromString(e,...n));return R_(i),new Pi(t.firestore,null,i)}}function aj(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=ug.I()),A_("doc","path",e),t instanceof ld){const i=vt.fromString(e,...n);return k_(i),new un(t,null,new fe(i))}{if(!(t instanceof un||t instanceof Pi))throw new Z(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(vt.fromString(e,...n));return k_(i),new un(t.firestore,t instanceof Pi?t.converter:null,new fe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new a_(this,"async_queue_retry"),this.Rc=()=>{const n=Qh();n&&le("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ar.tr()};const e=Qh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const n=Qh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const n=new ai;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!Do(e))throw e;le("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const n=this._c.then(()=>(this.Ec=!0,e().catch(i=>{this.Tc=i,this.Ec=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Li("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Ec=!1,i))));return this._c=n,n}enqueueAfterDelay(e,n,i){this.bc(),this.Ac.indexOf(e)>-1&&(n=0);const r=$h.createAndSchedule(this,e,n,i,s=>this.Vc(s));return this.yc.push(r),r}bc(){this.Tc&&Ie()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const n of this.yc)if(n.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.yc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const n=this.yc.indexOf(e);this.yc.splice(n,1)}}function L_(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const r of n)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class ci extends ld{constructor(e,n){super(e,n),this.type="firestore",this._queue=new vA,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||N_(this),this._firestoreClient.terminate()}}function lj(t=so()){return es(t,"firestore").getImmediate()}function Bo(t){return t._firestoreClient||N_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function N_(t){var e;const n=t._freezeSettings(),i=function(r,s,o,a){return new gA(r,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new cA(t._credentials,t._queue,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ho{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ys(an.fromBase64String(e))}catch(n){throw new Z(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ys(an.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Je(this._lat,e._lat)||Je(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=/^__.*__$/;class bA{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pl(e,this.data,n,this.fieldTransforms)}}class M_{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function P_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie()}}class ud{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.N=i,this.ignoreUndefinedProperties=r,s===void 0&&this.xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new ud(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.$c({path:i,Fc:!1});return r.Mc(e),r}Lc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.$c({path:i,Fc:!1});return r.xc(),r}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return Kl(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(e.length===0)throw this.Uc("Document fields must not be empty");if(P_(this.kc)&&yA.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class EA{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=i||Vl(e)}jc(e,n,i,r=!1){return new ud({kc:e,methodName:n,Kc:i,path:Rn.emptyPath(),Fc:!1,qc:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function zl(t){const e=t._freezeSettings(),n=Vl(t._databaseId);return new EA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function D_(t,e,n,i,r,s={}){const o=t.jc(s.merge||s.mergeFields?2:0,e,n,r);dd("Data must be an object, but it was:",o,i);const a=U_(i,o);let l,c;if(s.merge)l=new So(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=fd(e,h,n);if(!o.contains(d))throw new Z(D.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);j_(u,d)||u.push(d)}l=new So(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new bA(new xn(a),l,c)}class qo extends Gl{_toFieldTransform(e){if(e.kc!==2)throw e.kc===1?e.Uc(`${this._methodName}() can only appear at the top level of your update data`):e.Uc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qo}}class hd extends Gl{_toFieldTransform(e){return new bS(e.path,new Lo)}isEqual(e){return e instanceof hd}}function F_(t,e,n,i){const r=t.jc(1,e,n);dd("Data must be an object, but it was:",r,i);const s=[],o=xn.empty();fr(i,(l,c)=>{const u=pd(e,l,n);c=Ye(c);const h=r.Lc(u);if(c instanceof qo)s.push(u);else{const d=Wo(c,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new So(s);return new M_(o,a,r.fieldTransforms)}function x_(t,e,n,i,r,s){const o=t.jc(1,e,n),a=[fd(e,i,n)],l=[r];if(s.length%2!=0)throw new Z(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(fd(e,s[d])),l.push(s[d+1]);const c=[],u=xn.empty();for(let d=a.length-1;d>=0;--d)if(!j_(c,a[d])){const f=a[d];let p=l[d];p=Ye(p);const g=o.Lc(f);if(p instanceof qo)c.push(f);else{const m=Wo(p,g);m!=null&&(c.push(f),u.set(f,m))}}const h=new So(c);return new M_(u,h,o.fieldTransforms)}function IA(t,e,n,i=!1){return Wo(n,t.jc(i?4:3,e))}function Wo(t,e){if(V_(t=Ye(t)))return dd("Unsupported field value:",e,t),U_(t,e);if(t instanceof Gl)return function(n,i){if(!P_(i.kc))throw i.Uc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Uc(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.kc!==4)throw e.Uc("Nested arrays are not supported");return function(n,i){const r=[];let s=0;for(const o of n){let a=Wo(o,i.Bc(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=Ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return _S(i.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Fn.fromDate(n);return{timestampValue:Ul(i.N,r)}}if(n instanceof Fn){const r=new Fn(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ul(i.N,r)}}if(n instanceof cd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ys)return{bytesValue:Kg(i.N,n._byteString)};if(n instanceof un){const r=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(r))throw i.Uc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Vh(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Uc(`Unsupported field value: ${Wl(n)}`)}(t,e)}function U_(t,e){const n={};return dg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fr(t,(i,r)=>{const s=Wo(r,e.Oc(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function V_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fn||t instanceof cd||t instanceof ys||t instanceof un||t instanceof Gl)}function dd(t,e,n){if(!V_(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Wl(n);throw i==="an object"?e.Uc(t+" a custom object"):e.Uc(t+" "+i)}}function fd(t,e,n){if((e=Ye(e))instanceof Ho)return e._internalPath;if(typeof e=="string")return pd(t,e);throw Kl("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const wA=new RegExp("[~\\*/\\[\\]]");function pd(t,e,n){if(e.search(wA)>=0)throw Kl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ho(...e.split("."))._internalPath}catch{throw Kl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Kl(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new Z(D.INVALID_ARGUMENT,a+t+l)}function j_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new un(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TA extends B_{data(){return super.data()}}function Xl(t,e){return typeof e=="string"?pd(t,e):e instanceof Ho?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class H_ extends B_{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ql(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Xl("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Ql extends H_{data(e={}){return super.data(e)}}class q_{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Go(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Ql(this._firestore,this._userDataWriter,i.key,i,new Go(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(o=>({type:"added",doc:new Ql(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Go(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:s++}))}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ql(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Go(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:CA(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function CA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t){if(Al(t)&&t.explicitOrderBy.length===0)throw new Z(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class G_{}function cj(t,...e){for(const n of e)t=n._apply(t);return t}class SA extends G_{constructor(e,n,i){super(),this.Gc=e,this.zc=n,this.Hc=i,this.type="where"}_apply(e){const n=zl(e.firestore),i=function(r,s,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new Z(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on FieldPath.documentId().`);if(c==="in"||c==="not-in"){K_(u,c);const f=[];for(const p of u)f.push(z_(a,r,p));h={arrayValue:{values:f}}}else h=z_(a,r,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||K_(u,c),h=IA(o,s,u,c==="in"||c==="not-in");const d=yn.create(l,c,h);return function(f,p){if(p.v()){const m=Ph(f);if(m!==null&&!m.isEqual(p.field))throw new Z(D.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${m.toString()}' and '${p.field.toString()}'`);const v=Mh(f);v!==null&&X_(f,p.field,v)}const g=function(m,v){for(const C of m.filters)if(v.indexOf(C.op)>=0)return C.op;return null}(f,function(m){switch(m){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(g!==null)throw g===p.op?new Z(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new Z(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${p.op.toString()}' filters with '${g.toString()}' filters.`)}(r,d),d}(e._query,"where",n,e.firestore._databaseId,this.Gc,this.zc,this.Hc);return new br(e.firestore,e.converter,function(r,s){const o=r.filters.concat([s]);return new ds(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,i))}}function uj(t,e,n){const i=e,r=Xl("where",t);return new SA(r,i,n)}class AA extends G_{constructor(e,n){super(),this.Gc=e,this.Jc=n,this.type="orderBy"}_apply(e){const n=function(i,r,s){if(i.startAt!==null)throw new Z(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Z(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new hs(r,s);return function(a,l){if(Mh(a)===null){const c=Ph(a);c!==null&&X_(a,c,l.field)}}(i,o),o}(e._query,this.Gc,this.Jc);return new br(e.firestore,e.converter,function(i,r){const s=i.explicitOrderBy.concat([r]);return new ds(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function hj(t,e="asc"){const n=e,i=Xl("orderBy",t);return new AA(i,n)}function z_(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new Z(D.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tg(e)&&n.indexOf("/")!==-1)throw new Z(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(vt.fromString(n));if(!fe.isDocumentKey(i))throw new Z(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return gg(t,new fe(i))}if(n instanceof un)return gg(t,n._key);throw new Z(D.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wl(n)}.`)}function K_(t,e){if(!Array.isArray(t)||t.length===0)throw new Z(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new Z(D.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function X_(t,e,n){if(!n.isEqual(e))throw new Z(D.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{convertValue(e,n="none"){switch(pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Ie()}}convertObject(e,n){const i={};return fr(e.fields,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(e){return new cd(Lt(e.latitude),Lt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=pg(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Ao(e));default:return null}}convertTimestamp(e){const n=Ni(e);return new Fn(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=vt.fromString(e);lt(e_(i));const r=new jo(i.get(1),i.get(3)),s=new fe(i.popFirst(5));return r.isEqual(n)||Li(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=zl(e)}set(e,n,i){this._verifyNotCommitted();const r=md(e,this._firestore),s=Q_(r.converter,n,i),o=D_(this._dataReader,"WriteBatch.set",r._key,s,r.converter!==null,i);return this._mutations.push(o.toMutation(r._key,Xn.none())),this}update(e,n,i,...r){this._verifyNotCommitted();const s=md(e,this._firestore);let o;return o=typeof(n=Ye(n))=="string"||n instanceof Ho?x_(this._dataReader,"WriteBatch.update",s._key,n,i,r):F_(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Xn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=md(e,this._firestore);return this._mutations=this._mutations.concat(new xh(n._key,Xn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Z(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function md(t,e){if((t=Ye(t)).firestore!==e)throw new Z(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function dj(t){t=Un(t,un);const e=Un(t.firestore,ci);return pA(Bo(e),t._key).then(n=>Y_(e,t,n))}class gd extends kA{constructor(e){super(),this.firestore=e}convertBytes(e){return new ys(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new un(this.firestore,null,n)}}function fj(t){t=Un(t,br);const e=Un(t.firestore,ci),n=Bo(e),i=new gd(e);return W_(t._query),mA(n,t._query).then(r=>new q_(e,i,t,r))}function pj(t,e,n){t=Un(t,un);const i=Un(t.firestore,ci),r=Q_(t.converter,e,n);return Yl(i,[D_(zl(i),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Xn.none())])}function mj(t,e,n,...i){t=Un(t,un);const r=Un(t.firestore,ci),s=zl(r);let o;return o=typeof(e=Ye(e))=="string"||e instanceof Ho?x_(s,"updateDoc",t._key,e,n,i):F_(s,"updateDoc",t._key,e),Yl(r,[o.toMutation(t._key,Xn.exists(!0))])}function gj(t){return Yl(Un(t.firestore,ci),[new xh(t._key,Xn.none())])}function _j(t,...e){var n,i,r;t=Ye(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||L_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(L_(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let l,c,u;if(t instanceof un)c=Un(t.firestore,ci),u=Cl(t._key.path),l={next:h=>{e[o]&&e[o](Y_(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Un(t,br);c=Un(h.firestore,ci),u=h._query;const d=new gd(c);l={next:f=>{e[o]&&e[o](new q_(c,d,h,f))},error:e[o+1],complete:e[o+2]},W_(t._query)}return function(h,d,f,p){const g=new ad(p),m=new rd(d,g,f);return h.asyncQueue.enqueueAndForget(async()=>td(await ql(h),m)),()=>{g.ec(),h.asyncQueue.enqueueAndForget(async()=>nd(await ql(h),m))}}(Bo(c),u,a,l)}function Yl(t,e){return function(n,i){const r=new ai;return n.asyncQueue.enqueueAndForget(async()=>Z1(await fA(n),i,r)),r.promise}(Bo(t),e)}function Y_(t,e,n){const i=n.docs.get(e._key),r=new gd(t);return new H_(t,r,e._key,i,new Go(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vj(){return new qo("deleteField")}function yj(){return new hd("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bj(t){return Bo(t=Un(t,ci)),new RA(t,e=>Yl(t,e))}(function(t,e=!0){(function(n){os=n})(or),ki(new ri("firestore",(n,{options:i})=>{const r=n.getProvider("app").getImmediate(),s=new ci(r,new YC(n.getProvider("auth-internal")));return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s},"PUBLIC")),An(ag,"3.3.1",t),An(ag,"3.3.1","esm2017")})();/*! *****************************************************************************
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
***************************************************************************** */var _d=function(t,e){return _d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])},_d(t,e)};function bn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");_d(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var ct=function(){return ct=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ct.apply(this,arguments)};function vd(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function Vn(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function OA(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var i=n.call(t),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function LA(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))}function J_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NA=J_,Z_=new io("auth","Firebase",J_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=new Ka("@firebase/auth");function Jl(t,...e){$_.logLevel<=Ve.ERROR&&$_.error(`Auth (${or}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t,...e){throw yd(t,...e)}function jn(t,...e){return yd(t,...e)}function MA(t,e,n){const i=Object.assign(Object.assign({},NA()),{[e]:n});return new io("auth","Firebase",i).create(e,{appName:t.name})}function yd(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Z_.create(t,...e)}function te(t,e,...n){if(!t)throw yd(e,...n)}function hi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Jl(e),new Error(e)}function di(t,e){t||hi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=new Map;function fi(t){di(t instanceof Function,"Expected a class definition");let e=ev.get(t);return e?(di(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ev.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(t,e){const n=es(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Ga(s,e!=null?e:{}))return r;ui(r,"already-initialized")}return n.initialize({options:e})}function DA(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(fi);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tv(){return nv()==="http:"||nv()==="https:"}function nv(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tv()||Vp()||"connection"in navigator)?navigator.onLine:!0}function xA(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n){this.shortDelay=e,this.longDelay=n,di(n>e,"Short delay should be less than long delay!"),this.isMobile=Ha()||Au()}get(){return FA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t,e){di(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;hi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;hi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;hi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=new zo(3e4,6e4);function Er(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Di(t,e,n,i,r={}){return iv(t,r,()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=rr(Object.assign({key:t.config.apiKey},o)).slice(1),l=new(Id.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&l.set("X-Firebase-Locale",t.languageCode),Id.fetch()(rv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function iv(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},UA),e);try{const r=new jA(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $l(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $l(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $l(t,"email-already-in-use",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw MA(t,u,c);ui(t,u)}}catch(r){if(r instanceof Ai)throw r;ui(t,"network-request-failed")}}async function Zl(t,e,n,i,r={}){const s=await Di(t,e,n,i,r);return"mfaPendingCredential"in s&&ui(t,"multi-factor-auth-required",{_serverResponse:s}),s}function rv(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Ed(t.config,r):`${t.config.apiScheme}://${r}`}class jA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(jn(this.auth,"timeout")),VA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $l(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=jn(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(t,e){return Di(t,"POST","/v1/accounts:delete",e)}async function HA(t,e){return Di(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qA(t,e=!1){const n=Ye(t),i=await n.getIdToken(e),r=Td(i);te(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ko(wd(r.auth_time)),issuedAtTime:Ko(wd(r.iat)),expirationTime:Ko(wd(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function wd(t){return Number(t)*1e3}function Td(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Jl("JWT malformed, contained fewer than 3 sections"),null;try{const r=Su(n);return r?JSON.parse(r):(Jl("Failed to decode base64 JWT payload"),null)}catch(r){return Jl("Caught error parsing JWT payload as JSON",r),null}}function WA(t){const e=Td(t);return te(e,"internal-error"),te(typeof e.exp!="undefined","internal-error"),te(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Ai&&GA(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function GA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ko(this.lastLoginAt),this.creationTime=Ko(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ec(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Xo(t,HA(n,{idToken:i}));te(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?QA(s.providerUserInfo):[],a=XA(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sv(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function KA(t){const e=Ye(t);await ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XA(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function QA(t){return t.map(e=>{var{providerId:n}=e,i=vd(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(t,e){const n=await iv(t,{},()=>{const i=rr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=rv(t,r,"/v1/token",`key=${s}`);return Id.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken!="undefined","internal-error"),te(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):WA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return te(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await YA(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Qo;return i&&(te(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(te(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qo,this.toJSON())}_performRefresh(){return hi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t,e){te(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Ir{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=vd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new zA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new sv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Xo(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qA(this,e)}reload(){return KA(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ec(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xo(this,BA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:y,isAnonymous:R,providerData:k,stsTokenManager:_}=n;te(w&&_,e,"internal-error");const I=Qo.fromJSON(this.name,_);te(typeof w=="string",e,"internal-error"),Fi(h,e.name),Fi(d,e.name),te(typeof y=="boolean",e,"internal-error"),te(typeof R=="boolean",e,"internal-error"),Fi(f,e.name),Fi(p,e.name),Fi(g,e.name),Fi(m,e.name),Fi(v,e.name),Fi(C,e.name);const U=new Ir({uid:w,auth:e,email:d,emailVerified:y,displayName:h,isAnonymous:R,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:I,createdAt:v,lastLoginAt:C});return k&&Array.isArray(k)&&(U.providerData=k.map(b=>Object.assign({},b))),m&&(U._redirectEventId=m),U}static async _fromIdTokenResponse(e,n,i=!1){const r=new Qo;r.updateFromServerResponse(n);const s=new Ir({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await ec(s),s}}/**
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
 */class ov{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ov.type="NONE";const av=ov;/**
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
 */function tc(t,e,n){return`firebase:${t}:${e}:${n}`}class bs{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=tc(this.userKey,r.apiKey,s),this.fullPersistenceKey=tc("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ir._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new bs(fi(av),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||fi(av);const o=tc(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Ir._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new bs(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new bs(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fv(e))return"Blackberry";if(pv(e))return"Webos";if(Cd(e))return"Safari";if((e.includes("chrome/")||uv(e))&&!e.includes("edge/"))return"Chrome";if(dv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function cv(t=Bt()){return/firefox\//i.test(t)}function Cd(t=Bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uv(t=Bt()){return/crios\//i.test(t)}function hv(t=Bt()){return/iemobile/i.test(t)}function dv(t=Bt()){return/android/i.test(t)}function fv(t=Bt()){return/blackberry/i.test(t)}function pv(t=Bt()){return/webos/i.test(t)}function nc(t=Bt()){return/iphone|ipad|ipod/i.test(t)}function JA(t=Bt()){var e;return nc(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function ZA(){return jp()&&document.documentMode===10}function mv(t=Bt()){return nc(t)||dv(t)||pv(t)||fv(t)||/windows phone/i.test(t)||hv(t)}function $A(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t,e=[]){let n;switch(t){case"Browser":n=lv(Bt());break;case"Worker":n=`${lv(Bt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${or}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _v(this),this.idTokenSubscription=new _v(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Z_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fi(n)),this._initializationPromise=this.queue(async()=>{var i,r;this._deleted||(this.persistenceManager=await bs.create(this,e),!this._deleted&&(((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ec(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(fi(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new io("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fi(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[fi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return te(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Yo(t){return Ye(t)}class _v{constructor(e){this.auth=e,this.observer=null,this.addObserver=Q0(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hi("not implemented")}_getIdTokenResponse(e){return hi("not implemented")}_linkToIdToken(e,n){return hi("not implemented")}_getReauthenticationResolver(e){return hi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t,e){return Zl(t,"POST","/v1/accounts:signInWithIdp",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk="http://localhost";class wr extends Sd{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ui("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=vd(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new wr(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Es(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Es(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Es(e,n)}buildRequest(){const e={requestUri:tk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=rr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(t,e){return Di(t,"POST","/v1/accounts:sendVerificationCode",Er(t,e))}async function ik(t,e){return Zl(t,"POST","/v1/accounts:signInWithPhoneNumber",Er(t,e))}async function rk(t,e){const n=await Zl(t,"POST","/v1/accounts:signInWithPhoneNumber",Er(t,e));if(n.temporaryProof)throw $l(t,"account-exists-with-different-credential",n);return n}const sk={USER_NOT_FOUND:"user-not-found"};async function ok(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Zl(t,"POST","/v1/accounts:signInWithPhoneNumber",Er(t,n),sk)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends Sd{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new Jo({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Jo({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return ik(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return rk(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ok(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:i,verificationCode:r}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:i,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!n&&!r&&!s?null:new Jo({verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zo extends vv{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Zo{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:xi.PROVIDER_ID,signInMethod:xi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xi.credentialFromTaggedObject(e)}static credentialFromError(e){return xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xi.credential(e.oauthAccessToken)}catch{return null}}}xi.FACEBOOK_SIGN_IN_METHOD="facebook.com";xi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends Zo{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return wr._fromParams({providerId:Ui.PROVIDER_ID,signInMethod:Ui.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ui.credentialFromTaggedObject(e)}static credentialFromError(e){return Ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ui.credential(n,i)}catch{return null}}}Ui.GOOGLE_SIGN_IN_METHOD="google.com";Ui.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends Zo{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:Vi.PROVIDER_ID,signInMethod:Vi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vi.credentialFromTaggedObject(e)}static credentialFromError(e){return Vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vi.credential(e.oauthAccessToken)}catch{return null}}}Vi.GITHUB_SIGN_IN_METHOD="github.com";Vi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Zo{constructor(){super("twitter.com")}static credential(e,n){return wr._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ji.credential(n,i)}catch{return null}}}ji.TWITTER_SIGN_IN_METHOD="twitter.com";ji.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await Ir._fromIdTokenResponse(e,i,r),o=yv(i);return new Is({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=yv(i);return new Is({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function yv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic extends Ai{constructor(e,n,i,r){var s;super(n.code,n.message);this.operationType=i,this.user=r,Object.setPrototypeOf(this,ic.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new ic(e,n,i,r)}}function bv(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ic._fromErrorAndOperation(t,s,e,i):s})}async function ak(t,e,n=!1){const i=await Xo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Is._forOperation(t,"link",i)}/**
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
 */async function lk(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Xo(t,bv(i,r,e,t),n);te(s.idToken,i,"internal-error");const o=Td(s.idToken);te(o,i,"internal-error");const{sub:a}=o;return te(t.uid===a,i,"user-mismatch"),Is._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ui(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ev(t,e,n=!1){const i="signIn",r=await bv(t,i,e),s=await Is._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function ck(t,e){return Ev(Yo(t),e)}function Ej(t,e,n,i){return Ye(t).onAuthStateChanged(e,n,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(t,e){return Di(t,"POST","/v2/accounts/mfaEnrollment:start",Er(t,e))}const rc="__sak";/**
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
 */class Iv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rc,"1"),this.storage.removeItem(rc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(){const t=Bt();return Cd(t)||nc(t)}const dk=1e3,fk=10;class wv extends Iv{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hk()&&$A(),this.fallbackToPolling=mv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);ZA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,fk):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wv.type="LOCAL";const pk=wv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv extends Iv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tv.type="SESSION";const Cv=Tv;/**
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
 */function mk(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new sc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await mk(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Ad("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return window}function _k(t){Ft().location.href=t}/**
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
 */function kd(){return typeof Ft().WorkerGlobalScope!="undefined"&&typeof Ft().importScripts=="function"}async function vk(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bk(){return kd()?self:null}/**
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
 */const Sv="firebaseLocalStorageDb",Ek=1,oc="firebaseLocalStorage",Av="fbase_key";class $o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ac(t,e){return t.transaction([oc],e?"readwrite":"readonly").objectStore(oc)}function Ik(){const t=indexedDB.deleteDatabase(Sv);return new $o(t).toPromise()}function Rd(){const t=indexedDB.open(Sv,Ek);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(oc,{keyPath:Av})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(oc)?e(i):(i.close(),await Ik(),e(await Rd()))})})}async function kv(t,e,n){const i=ac(t,!0).put({[Av]:e,value:n});return new $o(i).toPromise()}async function wk(t,e){const n=ac(t,!1).get(e),i=await new $o(n).toPromise();return i===void 0?null:i.value}function Rv(t,e){const n=ac(t,!0).delete(e);return new $o(n).toPromise()}const Tk=800,Ck=3;class Ov{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Ck)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sc._getInstance(bk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vk(),!this.activeServiceWorker)return;this.sender=new gk(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rd();return await kv(e,rc,"1"),await Rv(e,rc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>kv(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>wk(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=ac(r,!1).getAll();return new $o(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ov.type="LOCAL";const Sk=Ov;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(t,e){return Di(t,"POST","/v2/accounts/mfaSignIn:start",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kk(t){return(await Di(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Lv(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=jn("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Rk().appendChild(i)})}function Nv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=500,Lk=6e4,lc=1e12;class Nk{constructor(e){this.auth=e,this.counter=lc,this._widgets=new Map}render(e,n){const i=this.counter;return this._widgets.set(i,new Mk(e,this.auth.name,n||{})),this.counter++,i}reset(e){var n;const i=e||lc;(n=this._widgets.get(i))===null||n===void 0||n.delete(),this._widgets.delete(i)}getResponse(e){var n;const i=e||lc;return((n=this._widgets.get(i))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const i=e||lc;return(n=this._widgets.get(i))===null||n===void 0||n.execute(),""}}class Mk{constructor(e,n,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;te(r,"argument-error",{appName:n}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Pk(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Lk)},Ok))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Pk(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=Nv("rcb"),Dk=new zo(3e4,6e4),Fk="https://www.google.com/recaptcha/api.js?";class xk{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Ft().grecaptcha}load(e,n=""){return te(Uk(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Ft().grecaptcha):new Promise((i,r)=>{const s=Ft().setTimeout(()=>{r(jn(e,"network-request-failed"))},Dk.get());Ft()[Od]=()=>{Ft().clearTimeout(s),delete Ft()[Od];const a=Ft().grecaptcha;if(!a){r(jn(e,"internal-error"));return}const l=a.render;a.render=(c,u)=>{const h=l(c,u);return this.counter++,h},this.hostLanguage=n,i(a)};const o=`${Fk}?${rr({onload:Od,render:"explicit",hl:n})}`;Lv(o).catch(()=>{clearTimeout(s),r(jn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Ft().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Uk(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Vk{async load(e){return new Nk(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="recaptcha",jk={theme:"light",type:"image"};class Ij{constructor(e,n=Object.assign({},jk),i){this.parameters=n,this.type=Mv,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Yo(i),this.isInvisible=this.parameters.size==="invisible",te(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const r=typeof e=="string"?document.getElementById(e):e;te(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Vk:new xk,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),i=n.getResponse(e);return i||new Promise(r=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),r(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){te(!this.parameters.sitekey,this.auth,"argument-error"),te(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),te(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(i=>i(n)),typeof e=="function")e(n);else if(typeof e=="string"){const i=Ft()[e];typeof i=="function"&&i(n)}}}assertNotDestroyed(){te(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){te(tv()&&!kd(),this.auth,"internal-error"),await Bk(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await kk(this.auth);te(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return te(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Bk(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Jo._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function wj(t,e,n){const i=Yo(t),r=await qk(i,e,Ye(n));return new Hk(r,s=>ck(i,s))}async function qk(t,e,n){var i;const r=await n.verify();try{te(typeof r=="string",t,"argument-error"),te(n.type===Mv,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return te(o.type==="enroll",t,"internal-error"),(await uk(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{te(o.type==="signin",t,"internal-error");const a=((i=s.multiFactorHint)===null||i===void 0?void 0:i.uid)||s.multiFactorUid;return te(a,t,"missing-multi-factor-info"),(await Ak(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await nk(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return o}}finally{n._reset()}}/**
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
 */function Wk(t,e){return e?fi(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ld extends Sd{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Gk(t){return Ev(t.auth,new Ld(t),t.bypassAuthState)}function zk(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),lk(n,new Ld(t),t.bypassAuthState)}async function Kk(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),ak(n,new Ld(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gk;case"linkViaPopup":case"linkViaRedirect":return Kk;case"reauthViaPopup":case"reauthViaRedirect":return zk;default:ui(this.auth,"internal-error")}}resolve(e){di(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){di(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=new zo(2e3,1e4);class ws extends Pv{constructor(e,n,i,r,s){super(e,n,r,s);this.provider=i,this.authWindow=null,this.pollId=null,ws.currentPopupAction&&ws.currentPopupAction.cancel(),ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){di(this.filter.length===1,"Popup operations only handle one event");const e=Ad();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Xk.get())};e()}}ws.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk="pendingRedirect",Nd=new Map;class Yk extends Pv{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=Nd.get(this.auth._key());if(!e){try{const i=await Jk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Nd.set(this.auth._key(),e)}return this.bypassAuthState||Nd.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jk(t,e){const n=$k(e),i=Zk(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function Zk(t){return fi(t._redirectPersistence)}function $k(t){return tc(Qk,t.config.apiKey,t.name)}async function eR(t,e,n=!1){const i=Yo(t),r=Wk(i,e),o=await new Yk(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=10*60*1e3;class nR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Fv(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(jn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dv(e))}saveEventToCache(e){this.cachedEventUids.add(Dv(e)),this.lastProcessedEventTime=Date.now()}}function Dv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rR(t,e={}){return Di(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oR=/^https?/;async function aR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rR(t);for(const n of e)try{if(lR(n))return}catch{}ui(t,"unauthorized-domain")}function lR(t){const e=bd(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!oR.test(n))return!1;if(sR.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const cR=new zo(3e4,6e4);function xv(){const t=Ft().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uR(t){return new Promise((e,n)=>{var i,r,s;function o(){xv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xv(),n(jn(t,"network-request-failed"))},timeout:cR.get()})}if((r=(i=Ft().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0?void 0:r.Iframe)e(gapi.iframes.getContext());else if((s=Ft().gapi)===null||s===void 0?void 0:s.load)o();else{const a=Nv("iframefcb");return Ft()[a]=()=>{gapi.load?o():n(jn(t,"network-request-failed"))},Lv(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw cc=null,e})}let cc=null;function hR(t){return cc=cc||uR(t),cc}/**
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
 */const dR=new zo(5e3,15e3),fR="__/auth/iframe",pR="emulator/auth/iframe",mR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _R(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ed(e,pR):`https://${t.config.authDomain}/${fR}`,i={apiKey:e.apiKey,appName:t.name,v:or},r=gR.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${rr(i).slice(1)}`}async function vR(t){const e=await hR(t),n=Ft().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:_R(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mR,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=jn(t,"network-request-failed"),a=Ft().setTimeout(()=>{s(o)},dR.get());function l(){Ft().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const yR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bR=500,ER=600,IR="_blank",wR="http://localhost";class Uv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TR(t,e,n,i=bR,r=ER){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},yR),{width:i.toString(),height:r.toString(),top:s,left:o}),c=Bt().toLowerCase();n&&(a=uv(c)?IR:n),cv(c)&&(e=e||wR,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(JA(c)&&a!=="_self")return CR(e||"",a),new Uv(null);const h=window.open(e||"",a,u);te(h,t,"popup-blocked");try{h.focus()}catch{}return new Uv(h)}function CR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const SR="__/auth/handler",AR="emulator/auth/handler";function Vv(t,e,n,i,r,s){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:or,eventId:r};if(e instanceof vv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof Zo){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${kR(t)}?${rr(a).slice(1)}`}function kR({config:t}){return t.emulator?Ed(t,AR):`https://${t.authDomain}/${SR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="webStorageSupport";class RR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cv,this._completeRedirectFn=eR}async _openPopup(e,n,i,r){var s;di((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Vv(e,n,i,bd(),r);return TR(e,o,Ad())}async _openRedirect(e,n,i,r){return await this._originValidation(e),_k(Vv(e,n,i,bd(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(di(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i}async initAndGetManager(e){const n=await vR(e),i=new nR(e);return n.register("authEvent",r=>(te(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Md,{type:Md},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Md];o!==void 0&&n(!!o),ui(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mv()||Cd()||nc()}}const OR=RR;var jv="@firebase/auth",Bv="0.19.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var r;e(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function MR(t){ki(new ri("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=i.options;return(o=>{te(r&&!r.includes(":"),"invalid-api-key",{appName:o.name}),te(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:r,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gv(t)},l=new ek(o,a);return DA(l,n),l})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),ki(new ri("auth-internal",e=>{const n=Yo(e.getProvider("auth").getImmediate());return(i=>new LR(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(jv,Bv,NR(t)),An(jv,Bv,"esm2017")}/**
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
 */function Tj(t=so()){const e=es(t,"auth");return e.isInitialized()?e.getImmediate():PA(t,{popupRedirectResolver:OR,persistence:[Sk,pk,Cv]})}MR("Browser");function be(t){return Object.entries(t).filter(([e,n])=>e!==""&&n).map(([e])=>e).join(" ")}function rt(t,e,n,i={bubbles:!0},r=!1){if(typeof Event!="undefined"&&t){const s=new CustomEvent(e,Object.assign(Object.assign({},i),{detail:n}));if(t==null||t.dispatchEvent(s),r&&e.startsWith("SMUI")){const o=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},i),{detail:n}));t==null||t.dispatchEvent(o),o.defaultPrevented&&s.preventDefault()}return s}}function Ts(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let r=0;r<n.length;r++){const s=n[r],o=s.indexOf("$");o!==-1&&e.indexOf(s.substring(0,o+1))!==-1||e.indexOf(s)===-1&&(i[s]=t[s])}return i}const Hv=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,PR=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function st(t){let e,n=[];t.$on=(r,s)=>{let o=r,a=()=>{};return e?a=e(o,s):n.push([o,s]),o.match(Hv)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',o),(...c)=>{a()}};function i(r){to(t,r)}return r=>{const s=[],o={};e=(a,l)=>{let c=a,u=l,h=!1;const d=c.match(Hv),f=c.match(PR),p=d||f;if(c.match(/^SMUI:\w+:/)){const v=c.split(":");let C="";for(let w=0;w<v.length;w++)C+=w===v.length-1?":"+v[w]:v[w].split("-").map(y=>y.slice(0,1).toUpperCase()+y.slice(1)).join("");console.warn(`The event ${c.split("$")[0]} has been renamed to ${C.split("$")[0]}.`),c=C}if(p){const v=c.split(d?":":"$");c=v[0];const C=Object.fromEntries(v.slice(1).map(w=>[w,!0]));C.passive&&(h=h||{},h.passive=!0),C.nonpassive&&(h=h||{},h.passive=!1),C.capture&&(h=h||{},h.capture=!0),C.once&&(h=h||{},h.once=!0),C.preventDefault&&(u=R0(u)),C.stopPropagation&&(u=O0(u))}const g=it(r,c,u,h),m=()=>{g();const v=s.indexOf(m);v>-1&&s.splice(v,1)};return s.push(m),c in o||(o[c]=it(r,c,i)),m};for(let a=0;a<n.length;a++)e(n[a][0],n[a][1]);return{destroy:()=>{for(let a=0;a<s.length;a++)s[a]();for(let a of Object.entries(o))a[1]()}}}}function hn(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let r=0;r<n.length;r++){const s=n[r];s.substring(0,e.length)===e&&(i[s.substring(e.length)]=t[s])}return i}function pt(t,e){let n=[];if(e)for(let i=0;i<e.length;i++){const r=e[i],s=Array.isArray(r)?r[0]:r;Array.isArray(r)&&r.length>1?n.push(s(t,r[1])):n.push(s(t))}return{update(i){if((i&&i.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(i)for(let r=0;r<i.length;r++){const s=n[r];if(s&&s.update){const o=i[r];Array.isArray(o)&&o.length>1?s.update(o[1]):s.update()}}},destroy(){for(let i=0;i<n.length;i++){const r=n[i];r&&r.destroy&&r.destroy()}}}}var uc;function DR(t,e){e===void 0&&(e=!1);var n=t.CSS,i=uc;if(typeof uc=="boolean"&&!e)return uc;var r=n&&typeof n.supports=="function";if(!r)return!1;var s=n.supports("--css-vars","yes"),o=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=s||o,e||(uc=i),i}function FR(t,e,n){if(!t)return{x:0,y:0};var i=e.x,r=e.y,s=i+n.left,o=r+n.top,a,l;if(t.type==="touchstart"){var c=t;a=c.changedTouches[0].pageX-s,l=c.changedTouches[0].pageY-o}else{var u=t;a=u.pageX-s,l=u.pageY-o}return{x:a,y:l}}/**
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
 */var Wn=function(){function t(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();/**
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
 */function xR(t){return t===void 0&&(t=window),UR(t)?{passive:!0}:!1}function UR(t){t===void 0&&(t=window);var e=!1;try{var n={get passive(){return e=!0,!1}},i=function(){};t.document.addEventListener("test",i,n),t.document.removeEventListener("test",i,n)}catch{e=!1}return e}var qv=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",applyPassive:xR});/**
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
 */function VR(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(Wv(n,e))return n;n=n.parentElement}return null}function Wv(t,e){var n=t.matches||t.webkitMatchesSelector||t.msMatchesSelector;return n.call(t,e)}function jR(t){var e=t;if(e.offsetParent!==null)return e.scrollWidth;var n=e.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var i=n.scrollWidth;return document.documentElement.removeChild(n),i}var Pd=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",closest:VR,matches:Wv,estimateScrollWidth:jR});/**
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
 */var BR={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},HR={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Gv={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
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
 */var zv=["touchstart","pointerdown","mousedown","keydown"],Kv=["touchend","pointerup","mouseup","contextmenu"],hc=[],qR=function(t){bn(e,t);function e(n){var i=t.call(this,ct(ct({},e.defaultAdapter),n))||this;return i.activationAnimationHasEnded=!1,i.activationTimer=0,i.fgDeactivationRemovalTimer=0,i.fgScale="0",i.frame={width:0,height:0},i.initialSize=0,i.layoutFrame=0,i.maxRadius=0,i.unboundedCoords={left:0,top:0},i.activationState=i.defaultActivationState(),i.activationTimerCallback=function(){i.activationAnimationHasEnded=!0,i.runDeactivationUXLogicIfReady()},i.activateHandler=function(r){i.activateImpl(r)},i.deactivateHandler=function(){i.deactivateImpl()},i.focusHandler=function(){i.handleFocus()},i.blurHandler=function(){i.handleBlur()},i.resizeHandler=function(){i.layout()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return BR},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return HR},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Gv},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var r=e.cssClasses,s=r.ROOT,o=r.UNBOUNDED;requestAnimationFrame(function(){n.adapter.addClass(s),n.adapter.isUnbounded()&&(n.adapter.addClass(o),n.layoutInternal())})}},e.prototype.destroy=function(){var n=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,r=i.ROOT,s=i.UNBOUNDED;requestAnimationFrame(function(){n.adapter.removeClass(r),n.adapter.removeClass(s),n.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(n){this.activateImpl(n)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var n=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){n.layoutInternal(),n.layoutFrame=0})},e.prototype.setUnbounded=function(n){var i=e.cssClasses.UNBOUNDED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var n=this;requestAnimationFrame(function(){return n.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var n=this;requestAnimationFrame(function(){return n.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(n){var i,r;if(n){try{for(var s=Vn(zv),o=s.next();!o.done;o=s.next()){var a=o.value;this.adapter.registerInteractionHandler(a,this.activateHandler)}}catch(l){i={error:l}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(n){var i,r;if(n.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var s=Vn(Kv),o=s.next();!o.done;o=s.next()){var a=o.value;this.adapter.registerDocumentInteractionHandler(a,this.deactivateHandler)}}catch(l){i={error:l}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}},e.prototype.deregisterRootHandlers=function(){var n,i;try{for(var r=Vn(zv),s=r.next();!s.done;s=r.next()){var o=s.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(a){n={error:a}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var n,i;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var r=Vn(Kv),s=r.next();!s.done;s=r.next()){var o=s.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(a){n={error:a}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},e.prototype.removeCssVars=function(){var n=this,i=e.strings,r=Object.keys(i);r.forEach(function(s){s.indexOf("VAR_")===0&&n.adapter.updateCssVariable(i[s],null)})},e.prototype.activateImpl=function(n){var i=this;if(!this.adapter.isSurfaceDisabled()){var r=this.activationState;if(!r.isActivated){var s=this.previousActivationEvent,o=s&&n!==void 0&&s.type!==n.type;if(!o){r.isActivated=!0,r.isProgrammatic=n===void 0,r.activationEvent=n,r.wasActivatedByPointer=r.isProgrammatic?!1:n!==void 0&&(n.type==="mousedown"||n.type==="touchstart"||n.type==="pointerdown");var a=n!==void 0&&hc.length>0&&hc.some(function(l){return i.adapter.containsEventTarget(l)});if(a){this.resetActivationState();return}n!==void 0&&(hc.push(n.target),this.registerDeactivationHandlers(n)),r.wasElementMadeActive=this.checkElementMadeActive(n),r.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){hc=[],!r.wasElementMadeActive&&n!==void 0&&(n.key===" "||n.keyCode===32)&&(r.wasElementMadeActive=i.checkElementMadeActive(n),r.wasElementMadeActive&&i.animateActivation()),r.wasElementMadeActive||(i.activationState=i.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(n){return n!==void 0&&n.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var n=this,i=e.strings,r=i.VAR_FG_TRANSLATE_START,s=i.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,l=o.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",h="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),f=d.startPoint,p=d.endPoint;u=f.x+"px, "+f.y+"px",h=p.x+"px, "+p.y+"px"}this.adapter.updateCssVariable(r,u),this.adapter.updateCssVariable(s,h),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){n.activationTimerCallback()},c)},e.prototype.getFgTranslationCoordinates=function(){var n=this.activationState,i=n.activationEvent,r=n.wasActivatedByPointer,s;r?s=FR(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):s={x:this.frame.width/2,y:this.frame.height/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:s,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady=function(){var n=this,i=e.cssClasses.FG_DEACTIVATION,r=this.activationState,s=r.hasDeactivationUXRun,o=r.isActivated,a=s||!o;a&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout(function(){n.adapter.removeClass(i)},Gv.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var n=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(n),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var n=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return n.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var n=this,i=this.activationState;if(!!i.isActivated){var r=ct({},i);i.isProgrammatic?(requestAnimationFrame(function(){n.animateDeactivation(r)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){n.activationState.hasDeactivationUXRun=!0,n.animateDeactivation(r),n.resetActivationState()}))}},e.prototype.animateDeactivation=function(n){var i=n.wasActivatedByPointer,r=n.wasElementMadeActive;(i||r)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var n=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width),r=function(){var o=Math.sqrt(Math.pow(n.frame.width,2)+Math.pow(n.frame.height,2));return o+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?i:r();var s=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&s%2!=0?this.initialSize=s-1:this.initialSize=s,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var n=e.strings,i=n.VAR_FG_SIZE,r=n.VAR_LEFT,s=n.VAR_TOP,o=n.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(r,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(s,this.unboundedCoords.top+"px"))},e}(Wn);/**
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
 */var Dd="mdc-dom-focus-sentinel",WR=function(){function t(e,n){n===void 0&&(n={}),this.root=e,this.options=n,this.elFocusedBeforeTrapFocus=null}return t.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},t.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+Dd)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},t.prototype.wrapTabFocus=function(e){var n=this,i=this.createSentinel(),r=this.createSentinel();i.addEventListener("focus",function(){var s=n.getFocusableElements(e);s.length>0&&s[s.length-1].focus()}),r.addEventListener("focus",function(){var s=n.getFocusableElements(e);s.length>0&&s[0].focus()}),e.insertBefore(i,e.children[0]),e.appendChild(r)},t.prototype.focusInitialElement=function(e,n){var i=0;n&&(i=Math.max(e.indexOf(n),0)),e[i].focus()},t.prototype.getFocusableElements=function(e){var n=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return n.filter(function(i){var r=i.getAttribute("aria-disabled")==="true"||i.getAttribute("disabled")!=null||i.getAttribute("hidden")!=null||i.getAttribute("aria-hidden")==="true",s=i.tabIndex>=0&&i.getBoundingClientRect().width>0&&!i.classList.contains(Dd)&&!r,o=!1;if(s){var a=getComputedStyle(i);o=a.display==="none"||a.visibility==="hidden"}return s&&!o})},t.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(Dd),e},t}(),GR=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",FocusTrap:WR});/**
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
 */var Fe={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},En=new Set;En.add(Fe.BACKSPACE);En.add(Fe.ENTER);En.add(Fe.SPACEBAR);En.add(Fe.PAGE_UP);En.add(Fe.PAGE_DOWN);En.add(Fe.END);En.add(Fe.HOME);En.add(Fe.ARROW_LEFT);En.add(Fe.ARROW_UP);En.add(Fe.ARROW_RIGHT);En.add(Fe.ARROW_DOWN);En.add(Fe.DELETE);En.add(Fe.ESCAPE);En.add(Fe.TAB);var On={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},In=new Map;In.set(On.BACKSPACE,Fe.BACKSPACE);In.set(On.ENTER,Fe.ENTER);In.set(On.SPACEBAR,Fe.SPACEBAR);In.set(On.PAGE_UP,Fe.PAGE_UP);In.set(On.PAGE_DOWN,Fe.PAGE_DOWN);In.set(On.END,Fe.END);In.set(On.HOME,Fe.HOME);In.set(On.ARROW_LEFT,Fe.ARROW_LEFT);In.set(On.ARROW_UP,Fe.ARROW_UP);In.set(On.ARROW_RIGHT,Fe.ARROW_RIGHT);In.set(On.ARROW_DOWN,Fe.ARROW_DOWN);In.set(On.DELETE,Fe.DELETE);In.set(On.ESCAPE,Fe.ESCAPE);In.set(On.TAB,Fe.TAB);var Bi=new Set;Bi.add(Fe.PAGE_UP);Bi.add(Fe.PAGE_DOWN);Bi.add(Fe.END);Bi.add(Fe.HOME);Bi.add(Fe.ARROW_LEFT);Bi.add(Fe.ARROW_UP);Bi.add(Fe.ARROW_RIGHT);Bi.add(Fe.ARROW_DOWN);function dn(t){var e=t.key;if(En.has(e))return e;var n=In.get(t.keyCode);return n||Fe.UNKNOWN}const{applyPassive:dc}=qv,{matches:zR}=Pd;function Tr(t,{ripple:e=!0,surface:n=!1,unbounded:i=!1,disabled:r=!1,color:s,active:o,rippleElement:a,eventTarget:l,activeTarget:c,addClass:u=p=>t.classList.add(p),removeClass:h=p=>t.classList.remove(p),addStyle:d=(p,g)=>t.style.setProperty(p,g),initPromise:f=Promise.resolve()}={}){let p,g=mn("SMUI:addLayoutListener"),m,v=o,C=l,w=c;function y(){n&&(u("mdc-ripple-surface"),s==="primary"?(u("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")):s==="secondary"?(h("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")):(h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary"))),p&&v!==o&&(v=o,o?p.activate():o===!1&&p.deactivate()),e&&!p?(p=new qR({addClass:u,browserSupportsCssVars:()=>DR(window),computeBoundingRect:()=>(a||t).getBoundingClientRect(),containsEventTarget:k=>t.contains(k),deregisterDocumentInteractionHandler:(k,_)=>document.documentElement.removeEventListener(k,_,dc()),deregisterInteractionHandler:(k,_)=>(l||t).removeEventListener(k,_,dc()),deregisterResizeHandler:k=>window.removeEventListener("resize",k),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>o==null?zR(c||t,":active"):o,isSurfaceDisabled:()=>!!r,isUnbounded:()=>!!i,registerDocumentInteractionHandler:(k,_)=>document.documentElement.addEventListener(k,_,dc()),registerInteractionHandler:(k,_)=>(l||t).addEventListener(k,_,dc()),registerResizeHandler:k=>window.addEventListener("resize",k),removeClass:h,updateCssVariable:d}),f.then(()=>{p&&(p.init(),p.setUnbounded(i))})):p&&!e&&f.then(()=>{p&&(p.destroy(),p=void 0)}),p&&(C!==l||w!==c)&&(C=l,w=c,p.destroy(),requestAnimationFrame(()=>{p&&(p.init(),p.setUnbounded(i))})),!e&&i&&u("mdc-ripple-upgraded--unbounded")}y(),g&&(m=g(R));function R(){p&&p.layout()}return{update(k){({ripple:e,surface:n,unbounded:i,disabled:r,color:s,active:o,rippleElement:a,eventTarget:l,activeTarget:c,addClass:u,removeClass:h,addStyle:d,initPromise:f}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:_=>t.classList.add(_),removeClass:_=>t.classList.remove(_),addStyle:(_,I)=>t.style.setProperty(_,I),initPromise:Promise.resolve()},k)),y()},destroy(){p&&(p.destroy(),p=void 0,h("mdc-ripple-surface"),h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")),m&&m()}}}function KR(t){let e,n,i,r,s;const o=t[7].default,a=Ne(o,t,t[6],null);let l=[{href:t[1]},t[4]],c={};for(let u=0;u<l.length;u+=1)c=B(c,l[u]);return{c(){e=pe("a"),a&&a.c(),this.h()},l(u){e=_e(u,"A",{href:!0});var h=ne(e);a&&a.l(h),h.forEach(N),this.h()},h(){ce(e,c)},m(u,h){re(u,e,h),a&&a.m(e,null),t[8](e),i=!0,r||(s=[ae(n=pt.call(null,e,t[0])),ae(t[3].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&64)&&Pe(a,o,u,u[6],i?Me(o,u[6],h,null):De(u[6]),null),ce(e,c=ke(l,[(!i||h&2)&&{href:u[1]},h&16&&u[4]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(j(a,u),i=!0)},o(u){W(a,u),i=!1},d(u){u&&N(e),a&&a.d(u),t[8](null),r=!1,ze(s)}}}function XR(t,e,n){const i=["use","href","getElement"];let r=se(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e,{href:l="javascript:void(0);"}=e;const c=st(Ue());let u;function h(){return u}function d(f){de[f?"unshift":"push"](()=>{u=f,n(2,u)})}return t.$$set=f=>{e=B(B({},e),$e(f)),n(4,r=se(e,i)),"use"in f&&n(0,a=f.use),"href"in f&&n(1,l=f.href),"$$scope"in f&&n(6,o=f.$$scope)},[a,l,u,c,r,h,o,s,d]}class QR extends tt{constructor(e){super();et(this,e,XR,KR,Ke,{use:0,href:1,getElement:5})}get getElement(){return this.$$.ctx[5]}}function YR(t){let e,n,i,r,s;const o=t[6].default,a=Ne(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=B(c,l[u]);return{c(){e=pe("button"),a&&a.c(),this.h()},l(u){e=_e(u,"BUTTON",{});var h=ne(e);a&&a.l(h),h.forEach(N),this.h()},h(){ce(e,c)},m(u,h){re(u,e,h),a&&a.m(e,null),e.autofocus&&e.focus(),t[7](e),i=!0,r||(s=[ae(n=pt.call(null,e,t[0])),ae(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Pe(a,o,u,u[5],i?Me(o,u[5],h,null):De(u[5]),null),ce(e,c=ke(l,[h&8&&u[3]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(j(a,u),i=!0)},o(u){W(a,u),i=!1},d(u){u&&N(e),a&&a.d(u),t[7](null),r=!1,ze(s)}}}function JR(t,e,n){const i=["use","getElement"];let r=se(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=st(Ue());let c;function u(){return c}function h(d){de[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=B(B({},e),$e(d)),n(3,r=se(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class ZR extends tt{constructor(e){super();et(this,e,JR,YR,Ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function $R(t){let e,n,i,r,s;const o=t[6].default,a=Ne(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=B(c,l[u]);return{c(){e=pe("div"),a&&a.c(),this.h()},l(u){e=_e(u,"DIV",{});var h=ne(e);a&&a.l(h),h.forEach(N),this.h()},h(){ce(e,c)},m(u,h){re(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[ae(n=pt.call(null,e,t[0])),ae(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Pe(a,o,u,u[5],i?Me(o,u[5],h,null):De(u[5]),null),ce(e,c=ke(l,[h&8&&u[3]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(j(a,u),i=!0)},o(u){W(a,u),i=!1},d(u){u&&N(e),a&&a.d(u),t[7](null),r=!1,ze(s)}}}function eO(t,e,n){const i=["use","getElement"];let r=se(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=st(Ue());let c;function u(){return c}function h(d){de[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=B(B({},e),$e(d)),n(3,r=se(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class Xv extends tt{constructor(e){super();et(this,e,eO,$R,Ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function tO(t){let e,n,i,r,s;const o=t[6].default,a=Ne(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=B(c,l[u]);return{c(){e=pe("h1"),a&&a.c(),this.h()},l(u){e=_e(u,"H1",{});var h=ne(e);a&&a.l(h),h.forEach(N),this.h()},h(){ce(e,c)},m(u,h){re(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[ae(n=pt.call(null,e,t[0])),ae(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Pe(a,o,u,u[5],i?Me(o,u[5],h,null):De(u[5]),null),ce(e,c=ke(l,[h&8&&u[3]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(j(a,u),i=!0)},o(u){W(a,u),i=!1},d(u){u&&N(e),a&&a.d(u),t[7](null),r=!1,ze(s)}}}function nO(t,e,n){const i=["use","getElement"];let r=se(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=st(Ue());let c;function u(){return c}function h(d){de[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=B(B({},e),$e(d)),n(3,r=se(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class iO extends tt{constructor(e){super();et(this,e,nO,tO,Ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function rO(t){let e,n,i,r,s;const o=t[6].default,a=Ne(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=B(c,l[u]);return{c(){e=pe("h2"),a&&a.c(),this.h()},l(u){e=_e(u,"H2",{});var h=ne(e);a&&a.l(h),h.forEach(N),this.h()},h(){ce(e,c)},m(u,h){re(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[ae(n=pt.call(null,e,t[0])),ae(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Pe(a,o,u,u[5],i?Me(o,u[5],h,null):De(u[5]),null),ce(e,c=ke(l,[h&8&&u[3]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(j(a,u),i=!0)},o(u){W(a,u),i=!1},d(u){u&&N(e),a&&a.d(u),t[7](null),r=!1,ze(s)}}}function sO(t,e,n){const i=["use","getElement"];let r=se(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=st(Ue());let c;function u(){return c}function h(d){de[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=B(B({},e),$e(d)),n(3,r=se(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class oO extends tt{constructor(e){super();et(this,e,sO,rO,Ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function aO(t){let e,n,i,r,s;const o=t[6].default,a=Ne(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=B(c,l[u]);return{c(){e=pe("h3"),a&&a.c(),this.h()},l(u){e=_e(u,"H3",{});var h=ne(e);a&&a.l(h),h.forEach(N),this.h()},h(){ce(e,c)},m(u,h){re(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[ae(n=pt.call(null,e,t[0])),ae(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Pe(a,o,u,u[5],i?Me(o,u[5],h,null):De(u[5]),null),ce(e,c=ke(l,[h&8&&u[3]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(j(a,u),i=!0)},o(u){W(a,u),i=!1},d(u){u&&N(e),a&&a.d(u),t[7](null),r=!1,ze(s)}}}function lO(t,e,n){const i=["use","getElement"];let r=se(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=st(Ue());let c;function u(){return c}function h(d){de[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=B(B({},e),$e(d)),n(3,r=se(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class cO extends tt{constructor(e){super();et(this,e,lO,aO,Ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function uO(t){let e,n,i,r,s;const o=t[6].default,a=Ne(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=B(c,l[u]);return{c(){e=pe("li"),a&&a.c(),this.h()},l(u){e=_e(u,"LI",{});var h=ne(e);a&&a.l(h),h.forEach(N),this.h()},h(){ce(e,c)},m(u,h){re(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[ae(n=pt.call(null,e,t[0])),ae(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Pe(a,o,u,u[5],i?Me(o,u[5],h,null):De(u[5]),null),ce(e,c=ke(l,[h&8&&u[3]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(j(a,u),i=!0)},o(u){W(a,u),i=!1},d(u){u&&N(e),a&&a.d(u),t[7](null),r=!1,ze(s)}}}function hO(t,e,n){const i=["use","getElement"];let r=se(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=st(Ue());let c;function u(){return c}function h(d){de[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=B(B({},e),$e(d)),n(3,r=se(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class dO extends tt{constructor(e){super();et(this,e,hO,uO,Ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function fO(t){let e,n,i,r,s;const o=t[6].default,a=Ne(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=B(c,l[u]);return{c(){e=pe("nav"),a&&a.c(),this.h()},l(u){e=_e(u,"NAV",{});var h=ne(e);a&&a.l(h),h.forEach(N),this.h()},h(){ce(e,c)},m(u,h){re(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[ae(n=pt.call(null,e,t[0])),ae(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Pe(a,o,u,u[5],i?Me(o,u[5],h,null):De(u[5]),null),ce(e,c=ke(l,[h&8&&u[3]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(j(a,u),i=!0)},o(u){W(a,u),i=!1},d(u){u&&N(e),a&&a.d(u),t[7](null),r=!1,ze(s)}}}function pO(t,e,n){const i=["use","getElement"];let r=se(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=st(Ue());let c;function u(){return c}function h(d){de[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=B(B({},e),$e(d)),n(3,r=se(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class mO extends tt{constructor(e){super();et(this,e,pO,fO,Ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function gO(t){let e,n,i,r,s;const o=t[6].default,a=Ne(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=B(c,l[u]);return{c(){e=pe("span"),a&&a.c(),this.h()},l(u){e=_e(u,"SPAN",{});var h=ne(e);a&&a.l(h),h.forEach(N),this.h()},h(){ce(e,c)},m(u,h){re(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[ae(n=pt.call(null,e,t[0])),ae(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Pe(a,o,u,u[5],i?Me(o,u[5],h,null):De(u[5]),null),ce(e,c=ke(l,[h&8&&u[3]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(j(a,u),i=!0)},o(u){W(a,u),i=!1},d(u){u&&N(e),a&&a.d(u),t[7](null),r=!1,ze(s)}}}function _O(t,e,n){const i=["use","getElement"];let r=se(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=st(Ue());let c;function u(){return c}function h(d){de[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=B(B({},e),$e(d)),n(3,r=se(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class vO extends tt{constructor(e){super();et(this,e,_O,gO,Ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function yO(t){let e,n,i,r,s;const o=t[6].default,a=Ne(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=B(c,l[u]);return{c(){e=pe("ul"),a&&a.c(),this.h()},l(u){e=_e(u,"UL",{});var h=ne(e);a&&a.l(h),h.forEach(N),this.h()},h(){ce(e,c)},m(u,h){re(u,e,h),a&&a.m(e,null),t[7](e),i=!0,r||(s=[ae(n=pt.call(null,e,t[0])),ae(t[2].call(null,e))],r=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Pe(a,o,u,u[5],i?Me(o,u[5],h,null):De(u[5]),null),ce(e,c=ke(l,[h&8&&u[3]])),n&&qe(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(j(a,u),i=!0)},o(u){W(a,u),i=!1},d(u){u&&N(e),a&&a.d(u),t[7](null),r=!1,ze(s)}}}function bO(t,e,n){const i=["use","getElement"];let r=se(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e;const l=st(Ue());let c;function u(){return c}function h(d){de[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=B(B({},e),$e(d)),n(3,r=se(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,r,u,o,s,h]}class EO extends tt{constructor(e){super();et(this,e,bO,yO,Ke,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}const Qv=QR,IO=ZR,pi=Xv,wO=iO,TO=oO,CO=cO,SO=dO,AO=mO,Cr=vO,kO=EO;function Yv(t){let e;return{c(){e=pe("div"),this.h()},l(n){e=_e(n,"DIV",{class:!0}),ne(e).forEach(N),this.h()},h(){J(e,"class","mdc-button__touch")},m(n,i){re(n,e,i)},d(n){n&&N(e)}}}function RO(t){let e,n,i,r;const s=t[26].default,o=Ne(s,t,t[28],null);let a=t[6]&&Yv();return{c(){e=pe("div"),n=Xe(),o&&o.c(),a&&a.c(),i=Rt(),this.h()},l(l){e=_e(l,"DIV",{class:!0}),ne(e).forEach(N),n=Qe(l),o&&o.l(l),a&&a.l(l),i=Rt(),this.h()},h(){J(e,"class","mdc-button__ripple")},m(l,c){re(l,e,c),re(l,n,c),o&&o.m(l,c),a&&a.m(l,c),re(l,i,c),r=!0},p(l,c){o&&o.p&&(!r||c&268435456)&&Pe(o,s,l,l[28],r?Me(s,l[28],c,null):De(l[28]),null),l[6]?a||(a=Yv(),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null)},i(l){r||(j(o,l),r=!0)},o(l){W(o,l),r=!1},d(l){l&&N(e),l&&N(n),o&&o.d(l),a&&a.d(l),l&&N(i)}}}function OO(t){let e,n,i;const r=[{use:[[Tr,{ripple:t[3],unbounded:!1,color:t[4],disabled:!!t[22].disabled,addClass:t[18],removeClass:t[19],addStyle:t[20]}],t[16],...t[0]]},{class:be(Ge({[t[1]]:!0,"mdc-button":!0,"mdc-button--raised":t[5]==="raised","mdc-button--unelevated":t[5]==="unelevated","mdc-button--outlined":t[5]==="outlined","smui-button--color-secondary":t[4]==="secondary","mdc-button--touch":t[6],"mdc-card__action":t[17]==="card:action","mdc-card__action--button":t[17]==="card:action","mdc-dialog__button":t[17]==="dialog:action","mdc-top-app-bar__navigation-icon":t[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":t[17]==="top-app-bar:action","mdc-snackbar__action":t[17]==="snackbar:actions","mdc-banner__secondary-action":t[17]==="banner"&&t[8],"mdc-banner__primary-action":t[17]==="banner"&&!t[8],"mdc-tooltip__action":t[17]==="tooltip:rich-actions"},t[11]))},{style:Object.entries(t[12]).map(Jv).concat([t[2]]).join(" ")},t[15],t[14],t[13],{href:t[7]},t[22]];var s=t[9];function o(a){let l={$$slots:{default:[RO]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=B(l,r[c]);return{props:l}}return s&&(e=new s(o(t)),t[27](e),e.$on("click",t[21])),{c(){e&&wt(e.$$.fragment),n=Rt()},l(a){e&&jt(e.$$.fragment,a),n=Rt()},m(a,l){e&&bt(e,a,l),re(a,n,l),i=!0},p(a,[l]){const c=l&6289919?ke(r,[l&6094873&&{use:[[Tr,{ripple:a[3],unbounded:!1,color:a[4],disabled:!!a[22].disabled,addClass:a[18],removeClass:a[19],addStyle:a[20]}],a[16],...a[0]]},l&133490&&{class:be(Ge({[a[1]]:!0,"mdc-button":!0,"mdc-button--raised":a[5]==="raised","mdc-button--unelevated":a[5]==="unelevated","mdc-button--outlined":a[5]==="outlined","smui-button--color-secondary":a[4]==="secondary","mdc-button--touch":a[6],"mdc-card__action":a[17]==="card:action","mdc-card__action--button":a[17]==="card:action","mdc-dialog__button":a[17]==="dialog:action","mdc-top-app-bar__navigation-icon":a[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":a[17]==="top-app-bar:action","mdc-snackbar__action":a[17]==="snackbar:actions","mdc-banner__secondary-action":a[17]==="banner"&&a[8],"mdc-banner__primary-action":a[17]==="banner"&&!a[8],"mdc-tooltip__action":a[17]==="tooltip:rich-actions"},a[11]))},l&4100&&{style:Object.entries(a[12]).map(Jv).concat([a[2]]).join(" ")},l&32768&&yt(a[15]),l&16384&&yt(a[14]),l&8192&&yt(a[13]),l&128&&{href:a[7]},l&4194304&&yt(a[22])]):{};if(l&268435520&&(c.$$scope={dirty:l,ctx:a}),s!==(s=a[9])){if(e){rn();const u=e;W(u.$$.fragment,1,0,()=>{Et(u,1)}),sn()}s?(e=new s(o(a)),a[27](e),e.$on("click",a[21]),wt(e.$$.fragment),j(e.$$.fragment,1),bt(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(a){i||(e&&j(e.$$.fragment,a),i=!0)},o(a){e&&W(e.$$.fragment,a),i=!1},d(a){t[27](null),a&&N(n),e&&Et(e,a)}}}const Jv=([t,e])=>`${t}: ${e};`;function LO(t,e,n){let i,r,s;const o=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","getElement"];let a=se(e,o),{$$slots:l={},$$scope:c}=e;const u=st(Ue());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{ripple:p=!0}=e,{color:g="primary"}=e,{variant:m="text"}=e,{touch:v=!1}=e,{href:C=void 0}=e,{action:w="close"}=e,{defaultAction:y=!1}=e,{secondary:R=!1}=e,k,_={},I={},U=mn("SMUI:button:context"),{component:b=C==null?IO:Qv}=e;Dt("SMUI:label:context","button"),Dt("SMUI:icon:context","button");function L(S){_[S]||n(11,_[S]=!0,_)}function M(S){(!(S in _)||_[S])&&n(11,_[S]=!1,_)}function E(S,A){I[S]!=A&&(A===""||A==null?(delete I[S],n(12,I)):n(12,I[S]=A,I))}function P(){U==="banner"&&rt(O(),R?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function O(){return k.getElement()}function z(S){de[S?"unshift":"push"](()=>{k=S,n(10,k)})}return t.$$set=S=>{n(29,e=B(B({},e),$e(S))),n(22,a=se(e,o)),"use"in S&&n(0,h=S.use),"class"in S&&n(1,d=S.class),"style"in S&&n(2,f=S.style),"ripple"in S&&n(3,p=S.ripple),"color"in S&&n(4,g=S.color),"variant"in S&&n(5,m=S.variant),"touch"in S&&n(6,v=S.touch),"href"in S&&n(7,C=S.href),"action"in S&&n(23,w=S.action),"defaultAction"in S&&n(24,y=S.defaultAction),"secondary"in S&&n(8,R=S.secondary),"component"in S&&n(9,b=S.component),"$$scope"in S&&n(28,c=S.$$scope)},t.$$.update=()=>{n(15,i=U==="dialog:action"&&w!=null?{"data-mdc-dialog-action":w}:{action:e.action}),n(14,r=U==="dialog:action"&&y?{"data-mdc-dialog-button-default":""}:{default:e.default}),n(13,s=U==="banner"?{}:{secondary:e.secondary})},e=$e(e),[h,d,f,p,g,m,v,C,R,b,k,_,I,s,r,i,u,U,L,M,E,P,a,w,y,O,l,z,c]}class Cj extends tt{constructor(e){super();et(this,e,LO,OO,Ke,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:23,defaultAction:24,secondary:8,component:9,getElement:25})}get getElement(){return this.$$.ctx[25]}}function NO(t){let e;const n=t[4].default,i=Ne(n,t,t[3],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,[s]){i&&i.p&&(!e||s&8)&&Pe(i,n,r,r[3],e?Me(n,r[3],s,null):De(r[3]),null)},i(r){e||(j(i,r),e=!0)},o(r){W(i,r),e=!1},d(r){i&&i.d(r)}}}function MO(t,e,n){let i,{$$slots:r={},$$scope:s}=e,{key:o}=e,{value:a}=e;const l=Dp(a);return E0(t,l,c=>n(5,i=c)),Dt(o,l),nr(()=>{l.set(void 0)}),t.$$set=c=>{"key"in c&&n(1,o=c.key),"value"in c&&n(2,a=c.value),"$$scope"in c&&n(3,s=c.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&w0(l,i=a,i)},[l,o,a,s,r]}class fc extends tt{constructor(e){super();et(this,e,MO,NO,Ke,{key:1,value:2})}}/**
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
 */var ti={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},mi={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+ti.ROOT};/**
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
 */var PO=function(t){bn(e,t);function e(n){return t.call(this,ct(ct({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return ti},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return mi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(mi.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(n){this.adapter.setContent(n)},e.prototype.isPersistent=function(){return this.adapter.hasClass(ti.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(n){n?this.adapter.addClass(ti.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(ti.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(ti.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(n){n?this.adapter.addClass(ti.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(ti.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(mi.ARIA_HIDDEN)},e.prototype.setValidity=function(n){var i=this.adapter.hasClass(ti.HELPER_TEXT_PERSISTENT),r=this.adapter.hasClass(ti.HELPER_TEXT_VALIDATION_MSG),s=r&&!n;s?(this.showToScreenReader(),this.adapter.getAttr(mi.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(mi.ROLE,"alert")):this.adapter.removeAttr(mi.ROLE),!i&&!s&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(mi.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var n=this;this.adapter.removeAttr(mi.ROLE),requestAnimationFrame(function(){n.adapter.setAttr(mi.ROLE,"alert")})},e}(Wn);function DO(t){let e;return{c(){e=wi(t[8])},l(n){e=Qr(n,t[8])},m(n,i){re(n,e,i)},p(n,i){i&256&&eo(e,n[8])},i:Pt,o:Pt,d(n){n&&N(e)}}}function FO(t){let e;const n=t[13].default,i=Ne(n,t,t[12],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&4096)&&Pe(i,n,r,r[12],e?Me(n,r[12],s,null):De(r[12]),null)},i(r){e||(j(i,r),e=!0)},o(r){W(i,r),e=!1},d(r){i&&i.d(r)}}}function xO(t){let e,n,i,r,s,o,a,l,c;const u=[FO,DO],h=[];function d(g,m){return g[8]==null?0:1}n=d(t),i=h[n]=u[n](t);let f=[{class:r=be(Ge({[t[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":t[3],"mdc-text-field-helper-text--validation-msg":t[4]},t[6]))},{"aria-hidden":s=t[3]?void 0:"true"},{id:t[2]},t[7],t[10]],p={};for(let g=0;g<f.length;g+=1)p=B(p,f[g]);return{c(){e=pe("div"),i.c(),this.h()},l(g){e=_e(g,"DIV",{class:!0,"aria-hidden":!0,id:!0});var m=ne(e);i.l(m),m.forEach(N),this.h()},h(){ce(e,p)},m(g,m){re(g,e,m),h[n].m(e,null),t[14](e),a=!0,l||(c=[ae(o=pt.call(null,e,t[0])),ae(t[9].call(null,e))],l=!0)},p(g,[m]){let v=n;n=d(g),n===v?h[n].p(g,m):(rn(),W(h[v],1,1,()=>{h[v]=null}),sn(),i=h[n],i?i.p(g,m):(i=h[n]=u[n](g),i.c()),j(i,1),i.m(e,null)),ce(e,p=ke(f,[(!a||m&90&&r!==(r=be(Ge({[g[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":g[3],"mdc-text-field-helper-text--validation-msg":g[4]},g[6]))))&&{class:r},(!a||m&8&&s!==(s=g[3]?void 0:"true"))&&{"aria-hidden":s},(!a||m&4)&&{id:g[2]},m&128&&g[7],m&1024&&g[10]])),o&&qe(o.update)&&m&1&&o.update.call(null,g[0])},i(g){a||(j(i),a=!0)},o(g){W(i),a=!1},d(g){g&&N(e),h[n].d(),t[14](null),l=!1,ze(c)}}}let UO=0;function VO(t,e,n){const i=["use","class","id","persistent","validationMsg","getElement"];let r=se(e,i),{$$slots:s={},$$scope:o}=e;const a=st(Ue());let{use:l=[]}=e,{class:c=""}=e,{id:u="SMUI-textfield-helper-text-"+UO++}=e,{persistent:h=!1}=e,{validationMsg:d=!1}=e,f,p,g={},m={},v;Sn(()=>(p=new PO({addClass:w,removeClass:y,hasClass:C,getAttr:R,setAttr:k,removeAttr:_,setContent:b=>{n(8,v=b)}}),u.startsWith("SMUI-textfield-helper-text-")&&rt(I(),"SMUITextfieldHelperText:id",u),rt(I(),"SMUITextfieldHelperText:mount",p),p.init(),()=>{rt(I(),"SMUITextfieldHelperText:unmount",p),p.destroy()}));function C(b){return b in g?g[b]:I().classList.contains(b)}function w(b){g[b]||n(6,g[b]=!0,g)}function y(b){(!(b in g)||g[b])&&n(6,g[b]=!1,g)}function R(b){var L;return b in m?(L=m[b])!==null&&L!==void 0?L:null:I().getAttribute(b)}function k(b,L){m[b]!==L&&n(7,m[b]=L,m)}function _(b){(!(b in m)||m[b]!=null)&&n(7,m[b]=void 0,m)}function I(){return f}function U(b){de[b?"unshift":"push"](()=>{f=b,n(5,f)})}return t.$$set=b=>{e=B(B({},e),$e(b)),n(10,r=se(e,i)),"use"in b&&n(0,l=b.use),"class"in b&&n(1,c=b.class),"id"in b&&n(2,u=b.id),"persistent"in b&&n(3,h=b.persistent),"validationMsg"in b&&n(4,d=b.validationMsg),"$$scope"in b&&n(12,o=b.$$scope)},[l,c,u,h,d,f,g,m,v,a,r,I,o,s,U]}class Sj extends tt{constructor(e){super();et(this,e,VO,xO,Ke,{use:0,class:1,id:2,persistent:3,validationMsg:4,getElement:11})}get getElement(){return this.$$.ctx[11]}}/**
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
 */var jO={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
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
 */var BO=function(t){bn(e,t);function e(n){var i=t.call(this,ct(ct({},e.defaultAdapter),n))||this;return i.shakeAnimationEndHandler=function(){i.handleShakeAnimationEnd()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return jO},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(n){var i=e.cssClasses.LABEL_SHAKE;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.float=function(n){var i=e.cssClasses,r=i.LABEL_FLOAT_ABOVE,s=i.LABEL_SHAKE;n?this.adapter.addClass(r):(this.adapter.removeClass(r),this.adapter.removeClass(s))},e.prototype.setRequired=function(n){var i=e.cssClasses.LABEL_REQUIRED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleShakeAnimationEnd=function(){var n=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(n)},e}(Wn);/**
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
 */var Sr={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
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
 */var HO=function(t){bn(e,t);function e(n){var i=t.call(this,ct(ct({},e.defaultAdapter),n))||this;return i.transitionEndHandler=function(r){i.handleTransitionEnd(r)},i}return Object.defineProperty(e,"cssClasses",{get:function(){return Sr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(Sr.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(Sr.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(n){this.adapter.setStyle("transform-origin",n+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(Sr.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(n){var i=this.adapter.hasClass(Sr.LINE_RIPPLE_DEACTIVATING);n.propertyName==="opacity"&&i&&(this.adapter.removeClass(Sr.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(Sr.LINE_RIPPLE_DEACTIVATING))},e}(Wn);/**
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
 */var qO={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Zv={NOTCH_ELEMENT_PADDING:8},WO={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
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
 */var GO=function(t){bn(e,t);function e(n){return t.call(this,ct(ct({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"strings",{get:function(){return qO},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return WO},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Zv},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(n){var i=e.cssClasses.OUTLINE_NOTCHED;n>0&&(n+=Zv.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(n),this.adapter.addClass(i)},e.prototype.closeNotch=function(){var n=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(n),this.adapter.removeNotchWidthProperty()},e}(Wn);/**
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
 */var Fd={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},zO={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},$v={LABEL_SCALE:.75},KO=["pattern","min","max","required","step","minlength","maxlength"],XO=["color","date","datetime-local","month","range","time","week"];/**
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
 */var ey=["mousedown","touchstart"],ty=["click","keydown"],QO=function(t){bn(e,t);function e(n,i){i===void 0&&(i={});var r=t.call(this,ct(ct({},e.defaultAdapter),n))||this;return r.isFocused=!1,r.receivedUserInput=!1,r.valid=!0,r.useNativeValidation=!0,r.validateOnValueChange=!0,r.helperText=i.helperText,r.characterCounter=i.characterCounter,r.leadingIcon=i.leadingIcon,r.trailingIcon=i.trailingIcon,r.inputFocusHandler=function(){r.activateFocus()},r.inputBlurHandler=function(){r.deactivateFocus()},r.inputInputHandler=function(){r.handleInput()},r.setPointerXOffset=function(s){r.setTransformOrigin(s)},r.textFieldInteractionHandler=function(){r.handleTextFieldInteraction()},r.validationAttributeChangeHandler=function(s){r.handleValidationAttributeChange(s)},r}return Object.defineProperty(e,"cssClasses",{get:function(){return zO},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Fd},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return $v},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var n=this.getNativeInput().type;return XO.indexOf(n)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n,i,r,s;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var o=Vn(ey),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.registerInputInteractionHandler(l,this.setPointerXOffset)}}catch(h){n={error:h}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}try{for(var c=Vn(ty),u=c.next();!u.done;u=c.next()){var l=u.value;this.adapter.registerTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(h){r={error:h}}finally{try{u&&!u.done&&(s=c.return)&&s.call(c)}finally{if(r)throw r.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var n,i,r,s;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var o=Vn(ey),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.deregisterInputInteractionHandler(l,this.setPointerXOffset)}}catch(h){n={error:h}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}try{for(var c=Vn(ty),u=c.next();!u.done;u=c.next()){var l=u.value;this.adapter.deregisterTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(h){r={error:h}}finally{try{u&&!u.done&&(s=c.return)&&s.call(c)}finally{if(r)throw r.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var n=this.adapter.getNativeInput();n&&n.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(n){var i=this;n.some(function(r){return KO.indexOf(r)>-1?(i.styleValidity(!0),i.adapter.setLabelRequired(i.getNativeInput().required),!0):!1}),n.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(n){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(n){var i=this.adapter.getLabelWidth()*$v.LABEL_SCALE;this.adapter.notchOutline(i)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(n){if(!(this.isDisabled()||this.adapter.hasOutline())){var i=n.touches,r=i?i[0]:n,s=r.target.getBoundingClientRect(),o=r.clientX-s.left;this.adapter.setLineRippleTransformOrigin(o)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var n=this.isValid();this.styleValidity(n),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(n){if(this.getValue()!==n&&(this.getNativeInput().value=n),this.setcharacterCounter(n.length),this.validateOnValueChange){var i=this.isValid();this.styleValidity(i)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(n){this.valid=n,this.styleValidity(n);var i=!n&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(i)},e.prototype.setValidateOnValueChange=function(n){this.validateOnValueChange=n},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(n){this.useNativeValidation=n},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(n){this.getNativeInput().disabled=n,this.styleDisabled(n)},e.prototype.setHelperTextContent=function(n){this.helperText&&this.helperText.setContent(n)},e.prototype.setLeadingIconAriaLabel=function(n){this.leadingIcon&&this.leadingIcon.setAriaLabel(n)},e.prototype.setLeadingIconContent=function(n){this.leadingIcon&&this.leadingIcon.setContent(n)},e.prototype.setTrailingIconAriaLabel=function(n){this.trailingIcon&&this.trailingIcon.setAriaLabel(n)},e.prototype.setTrailingIconContent=function(n){this.trailingIcon&&this.trailingIcon.setContent(n)},e.prototype.setcharacterCounter=function(n){if(!!this.characterCounter){var i=this.getNativeInput().maxLength;if(i===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(n,i)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(n){var i=e.cssClasses.INVALID;if(n?this.adapter.removeClass(i):this.adapter.addClass(i),this.helperText){this.helperText.setValidity(n);var r=this.helperText.isValidation();if(!r)return;var s=this.helperText.isVisible(),o=this.helperText.getId();s&&o?this.adapter.setInputAttr(Fd.ARIA_DESCRIBEDBY,o):this.adapter.removeInputAttr(Fd.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(n){var i=e.cssClasses.FOCUSED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.styleDisabled=function(n){var i=e.cssClasses,r=i.DISABLED,s=i.INVALID;n?(this.adapter.addClass(r),this.adapter.removeClass(s)):this.adapter.removeClass(r),this.leadingIcon&&this.leadingIcon.setDisabled(n),this.trailingIcon&&this.trailingIcon.setDisabled(n)},e.prototype.styleFloating=function(n){var i=e.cssClasses.LABEL_FLOATING;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.getNativeInput=function(){var n=this.adapter?this.adapter.getNativeInput():null;return n||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(Wn);function YO(t){let e,n,i,r,s,o,a,l;const c=t[22].default,u=Ne(c,t,t[21],null);let h=[{class:n=be(Ge({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1]},t[8]))},{style:i=Object.entries(t[9]).map(iy).concat([t[4]]).join(" ")},{for:r=t[5]||(t[11]?t[11].id:void 0)},t[12]],d={};for(let f=0;f<h.length;f+=1)d=B(d,h[f]);return{c(){e=pe("label"),u&&u.c(),this.h()},l(f){e=_e(f,"LABEL",{class:!0,style:!0,for:!0});var p=ne(e);u&&u.l(p),p.forEach(N),this.h()},h(){ce(e,d)},m(f,p){re(f,e,p),u&&u.m(e,null),t[24](e),o=!0,a||(l=[ae(s=pt.call(null,e,t[2])),ae(t[10].call(null,e))],a=!0)},p(f,p){u&&u.p&&(!o||p&2097152)&&Pe(u,c,f,f[21],o?Me(c,f[21],p,null):De(f[21]),null),ce(e,d=ke(h,[(!o||p&267&&n!==(n=be(Ge({[f[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":f[0],"mdc-floating-label--required":f[1]},f[8]))))&&{class:n},(!o||p&528&&i!==(i=Object.entries(f[9]).map(iy).concat([f[4]]).join(" ")))&&{style:i},(!o||p&32&&r!==(r=f[5]||(f[11]?f[11].id:void 0)))&&{for:r},p&4096&&f[12]])),s&&qe(s.update)&&p&4&&s.update.call(null,f[2])},i(f){o||(j(u,f),o=!0)},o(f){W(u,f),o=!1},d(f){f&&N(e),u&&u.d(f),t[24](null),a=!1,ze(l)}}}function JO(t){let e,n,i,r,s,o,a;const l=t[22].default,c=Ne(l,t,t[21],null);let u=[{class:n=be(Ge({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1]},t[8]))},{style:i=Object.entries(t[9]).map(ny).concat([t[4]]).join(" ")},t[12]],h={};for(let d=0;d<u.length;d+=1)h=B(h,u[d]);return{c(){e=pe("span"),c&&c.c(),this.h()},l(d){e=_e(d,"SPAN",{class:!0,style:!0});var f=ne(e);c&&c.l(f),f.forEach(N),this.h()},h(){ce(e,h)},m(d,f){re(d,e,f),c&&c.m(e,null),t[23](e),s=!0,o||(a=[ae(r=pt.call(null,e,t[2])),ae(t[10].call(null,e))],o=!0)},p(d,f){c&&c.p&&(!s||f&2097152)&&Pe(c,l,d,d[21],s?Me(l,d[21],f,null):De(d[21]),null),ce(e,h=ke(u,[(!s||f&267&&n!==(n=be(Ge({[d[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":d[0],"mdc-floating-label--required":d[1]},d[8]))))&&{class:n},(!s||f&528&&i!==(i=Object.entries(d[9]).map(ny).concat([d[4]]).join(" ")))&&{style:i},f&4096&&d[12]])),r&&qe(r.update)&&f&4&&r.update.call(null,d[2])},i(d){s||(j(c,d),s=!0)},o(d){W(c,d),s=!1},d(d){d&&N(e),c&&c.d(d),t[23](null),o=!1,ze(a)}}}function ZO(t){let e,n,i,r;const s=[JO,YO],o=[];function a(l,c){return l[6]?0:1}return e=a(t),n=o[e]=s[e](t),{c(){n.c(),i=Rt()},l(l){n.l(l),i=Rt()},m(l,c){o[e].m(l,c),re(l,i,c),r=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(rn(),W(o[u],1,1,()=>{o[u]=null}),sn(),n=o[e],n?n.p(l,c):(n=o[e]=s[e](l),n.c()),j(n,1),n.m(i.parentNode,i))},i(l){r||(j(n),r=!0)},o(l){W(n),r=!1},d(l){o[e].d(l),l&&N(i)}}}const ny=([t,e])=>`${t}: ${e};`,iy=([t,e])=>`${t}: ${e};`;function $O(t,e,n){const i=["use","class","style","for","floatAbove","required","wrapped","shake","float","setRequired","getWidth","getElement"];let r=se(e,i),{$$slots:s={},$$scope:o}=e;var a;const l=st(Ue());let{use:c=[]}=e,{class:u=""}=e,{style:h=""}=e,{for:d=void 0}=e,{floatAbove:f=!1}=e,{required:p=!1}=e,{wrapped:g=!1}=e,m,v,C={},w={},y=(a=mn("SMUI:generic:input:props"))!==null&&a!==void 0?a:{},R=f,k=p;Sn(()=>{n(18,v=new BO({addClass:_,removeClass:I,getWidth:()=>{var K,H;const Q=O(),me=Q.cloneNode(!0);(K=Q.parentNode)===null||K===void 0||K.appendChild(me),me.classList.add("smui-floating-label--remove-transition"),me.classList.add("smui-floating-label--force-size"),me.classList.remove("mdc-floating-label--float-above");const q=me.scrollWidth;return(H=Q.parentNode)===null||H===void 0||H.removeChild(me),q},registerInteractionHandler:(K,H)=>O().addEventListener(K,H),deregisterInteractionHandler:(K,H)=>O().removeEventListener(K,H)}));const A={get element(){return O()},addStyle:U,removeStyle:b};return rt(m,"SMUIFloatingLabel:mount",A),v.init(),()=>{rt(m,"SMUIFloatingLabel:unmount",A),v.destroy()}});function _(A){C[A]||n(8,C[A]=!0,C)}function I(A){(!(A in C)||C[A])&&n(8,C[A]=!1,C)}function U(A,K){w[A]!=K&&(K===""||K==null?(delete w[A],n(9,w)):n(9,w[A]=K,w))}function b(A){A in w&&(delete w[A],n(9,w))}function L(A){v.shake(A)}function M(A){n(0,f=A)}function E(A){n(1,p=A)}function P(){return v.getWidth()}function O(){return m}function z(A){de[A?"unshift":"push"](()=>{m=A,n(7,m)})}function S(A){de[A?"unshift":"push"](()=>{m=A,n(7,m)})}return t.$$set=A=>{e=B(B({},e),$e(A)),n(12,r=se(e,i)),"use"in A&&n(2,c=A.use),"class"in A&&n(3,u=A.class),"style"in A&&n(4,h=A.style),"for"in A&&n(5,d=A.for),"floatAbove"in A&&n(0,f=A.floatAbove),"required"in A&&n(1,p=A.required),"wrapped"in A&&n(6,g=A.wrapped),"$$scope"in A&&n(21,o=A.$$scope)},t.$$.update=()=>{t.$$.dirty&786433&&v&&R!==f&&(n(19,R=f),v.float(f)),t.$$.dirty&1310722&&v&&k!==p&&(n(20,k=p),v.setRequired(p))},[f,p,c,u,h,d,g,m,C,w,l,y,r,L,M,E,P,O,v,R,k,o,s,z,S]}class ry extends tt{constructor(e){super();et(this,e,$O,ZO,Ke,{use:2,class:3,style:4,for:5,floatAbove:0,required:1,wrapped:6,shake:13,float:14,setRequired:15,getWidth:16,getElement:17})}get shake(){return this.$$.ctx[13]}get float(){return this.$$.ctx[14]}get setRequired(){return this.$$.ctx[15]}get getWidth(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}function eL(t){let e,n,i,r,s,o,a=[{class:n=be(Ge({[t[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":t[3]},t[5]))},{style:i=Object.entries(t[6]).map(sy).concat([t[2]]).join(" ")},t[8]],l={};for(let c=0;c<a.length;c+=1)l=B(l,a[c]);return{c(){e=pe("div"),this.h()},l(c){e=_e(c,"DIV",{class:!0,style:!0}),ne(e).forEach(N),this.h()},h(){ce(e,l)},m(c,u){re(c,e,u),t[13](e),s||(o=[ae(r=pt.call(null,e,t[0])),ae(t[7].call(null,e))],s=!0)},p(c,[u]){ce(e,l=ke(a,[u&42&&n!==(n=be(Ge({[c[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":c[3]},c[5])))&&{class:n},u&68&&i!==(i=Object.entries(c[6]).map(sy).concat([c[2]]).join(" "))&&{style:i},u&256&&c[8]])),r&&qe(r.update)&&u&1&&r.update.call(null,c[0])},i:Pt,o:Pt,d(c){c&&N(e),t[13](null),s=!1,ze(o)}}}const sy=([t,e])=>`${t}: ${e};`;function tL(t,e,n){const i=["use","class","style","active","activate","deactivate","setRippleCenter","getElement"];let r=se(e,i);const s=st(Ue());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{active:c=!1}=e,u,h,d={},f={};Sn(()=>(h=new HO({addClass:g,removeClass:m,hasClass:p,setStyle:v,registerEventHandler:(_,I)=>R().addEventListener(_,I),deregisterEventHandler:(_,I)=>R().removeEventListener(_,I)}),h.init(),()=>{h.destroy()}));function p(_){return _ in d?d[_]:R().classList.contains(_)}function g(_){d[_]||n(5,d[_]=!0,d)}function m(_){(!(_ in d)||d[_])&&n(5,d[_]=!1,d)}function v(_,I){f[_]!=I&&(I===""||I==null?(delete f[_],n(6,f)):n(6,f[_]=I,f))}function C(){h.activate()}function w(){h.deactivate()}function y(_){h.setRippleCenter(_)}function R(){return u}function k(_){de[_?"unshift":"push"](()=>{u=_,n(4,u)})}return t.$$set=_=>{e=B(B({},e),$e(_)),n(8,r=se(e,i)),"use"in _&&n(0,o=_.use),"class"in _&&n(1,a=_.class),"style"in _&&n(2,l=_.style),"active"in _&&n(3,c=_.active)},[o,a,l,c,u,d,f,s,r,C,w,y,R,k]}class nL extends tt{constructor(e){super();et(this,e,tL,eL,Ke,{use:0,class:1,style:2,active:3,activate:9,deactivate:10,setRippleCenter:11,getElement:12})}get activate(){return this.$$.ctx[9]}get deactivate(){return this.$$.ctx[10]}get setRippleCenter(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function oy(t){let e,n,i;const r=t[14].default,s=Ne(r,t,t[13],null);return{c(){e=pe("div"),s&&s.c(),this.h()},l(o){e=_e(o,"DIV",{class:!0,style:!0});var a=ne(e);s&&s.l(a),a.forEach(N),this.h()},h(){J(e,"class","mdc-notched-outline__notch"),J(e,"style",n=Object.entries(t[7]).map(ay).join(" "))},m(o,a){re(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&8192)&&Pe(s,r,o,o[13],i?Me(r,o[13],a,null):De(o[13]),null),(!i||a&128&&n!==(n=Object.entries(o[7]).map(ay).join(" ")))&&J(e,"style",n)},i(o){i||(j(s,o),i=!0)},o(o){W(s,o),i=!1},d(o){o&&N(e),s&&s.d(o)}}}function iL(t){let e,n,i,r,s,o,a,l,c,u,h=!t[3]&&oy(t),d=[{class:o=be(Ge({[t[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":t[2],"mdc-notched-outline--no-label":t[3]},t[6]))},t[9]],f={};for(let p=0;p<d.length;p+=1)f=B(f,d[p]);return{c(){e=pe("div"),n=pe("div"),i=Xe(),h&&h.c(),r=Xe(),s=pe("div"),this.h()},l(p){e=_e(p,"DIV",{class:!0});var g=ne(e);n=_e(g,"DIV",{class:!0}),ne(n).forEach(N),i=Qe(g),h&&h.l(g),r=Qe(g),s=_e(g,"DIV",{class:!0}),ne(s).forEach(N),g.forEach(N),this.h()},h(){J(n,"class","mdc-notched-outline__leading"),J(s,"class","mdc-notched-outline__trailing"),ce(e,f)},m(p,g){re(p,e,g),ue(e,n),ue(e,i),h&&h.m(e,null),ue(e,r),ue(e,s),t[15](e),l=!0,c||(u=[ae(a=pt.call(null,e,t[0])),ae(t[8].call(null,e)),it(e,"SMUIFloatingLabel:mount",t[16]),it(e,"SMUIFloatingLabel:unmount",t[17])],c=!0)},p(p,[g]){p[3]?h&&(rn(),W(h,1,1,()=>{h=null}),sn()):h?(h.p(p,g),g&8&&j(h,1)):(h=oy(p),h.c(),j(h,1),h.m(e,r)),ce(e,f=ke(d,[(!l||g&78&&o!==(o=be(Ge({[p[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":p[2],"mdc-notched-outline--no-label":p[3]},p[6]))))&&{class:o},g&512&&p[9]])),a&&qe(a.update)&&g&1&&a.update.call(null,p[0])},i(p){l||(j(h),l=!0)},o(p){W(h),l=!1},d(p){p&&N(e),h&&h.d(),t[15](null),c=!1,ze(u)}}}const ay=([t,e])=>`${t}: ${e};`;function rL(t,e,n){const i=["use","class","notched","noLabel","notch","closeNotch","getElement"];let r=se(e,i),{$$slots:s={},$$scope:o}=e;const a=st(Ue());let{use:l=[]}=e,{class:c=""}=e,{notched:u=!1}=e,{noLabel:h=!1}=e,d,f,p,g={},m={};Sn(()=>(f=new GO({addClass:v,removeClass:C,setNotchWidthProperty:L=>w("width",L+"px"),removeNotchWidthProperty:()=>y("width")}),f.init(),()=>{f.destroy()}));function v(L){g[L]||n(6,g[L]=!0,g)}function C(L){(!(L in g)||g[L])&&n(6,g[L]=!1,g)}function w(L,M){m[L]!=M&&(M===""||M==null?(delete m[L],n(7,m)):n(7,m[L]=M,m))}function y(L){L in m&&(delete m[L],n(7,m))}function R(L){f.notch(L)}function k(){f.closeNotch()}function _(){return d}function I(L){de[L?"unshift":"push"](()=>{d=L,n(5,d)})}const U=L=>n(4,p=L.detail),b=()=>n(4,p=void 0);return t.$$set=L=>{e=B(B({},e),$e(L)),n(9,r=se(e,i)),"use"in L&&n(0,l=L.use),"class"in L&&n(1,c=L.class),"notched"in L&&n(2,u=L.notched),"noLabel"in L&&n(3,h=L.noLabel),"$$scope"in L&&n(13,o=L.$$scope)},t.$$.update=()=>{t.$$.dirty&16&&(p?(p.addStyle("transition-duration","0s"),v("mdc-notched-outline--upgraded"),requestAnimationFrame(()=>{p&&p.removeStyle("transition-duration")})):C("mdc-notched-outline--upgraded"))},[l,c,u,h,p,d,g,m,a,r,R,k,_,o,s,I,U,b]}class sL extends tt{constructor(e){super();et(this,e,rL,iL,Ke,{use:0,class:1,notched:2,noLabel:3,notch:10,closeNotch:11,getElement:12})}get notch(){return this.$$.ctx[10]}get closeNotch(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function oL(t){let e;const n=t[10].default,i=Ne(n,t,t[12],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&4096)&&Pe(i,n,r,r[12],e?Me(n,r[12],s,null):De(r[12]),null)},i(r){e||(j(i,r),e=!0)},o(r){W(i,r),e=!1},d(r){i&&i.d(r)}}}function aL(t){let e,n,i;const r=[{use:[t[7],...t[0]]},{class:be(Ge({[t[1]]:!0,[t[5]]:!0},t[4]))},t[6],t[8]];var s=t[2];function o(a){let l={$$slots:{default:[oL]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=B(l,r[c]);return{props:l}}return s&&(e=new s(o(t)),t[11](e)),{c(){e&&wt(e.$$.fragment),n=Rt()},l(a){e&&jt(e.$$.fragment,a),n=Rt()},m(a,l){e&&bt(e,a,l),re(a,n,l),i=!0},p(a,[l]){const c=l&499?ke(r,[l&129&&{use:[a[7],...a[0]]},l&50&&{class:be(Ge({[a[1]]:!0,[a[5]]:!0},a[4]))},l&64&&yt(a[6]),l&256&&yt(a[8])]):{};if(l&4096&&(c.$$scope={dirty:l,ctx:a}),s!==(s=a[2])){if(e){rn();const u=e;W(u.$$.fragment,1,0,()=>{Et(u,1)}),sn()}s?(e=new s(o(a)),a[11](e),wt(e.$$.fragment),j(e.$$.fragment,1),bt(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(a){i||(e&&j(e.$$.fragment,a),i=!0)},o(a){e&&W(e.$$.fragment,a),i=!1},d(a){t[11](null),a&&N(n),e&&Et(e,a)}}}const Hi={component:Xv,class:"",classMap:{},contexts:{},props:{}};function lL(t,e,n){const i=["use","class","component","getElement"];let r=se(e,i),{$$slots:s={},$$scope:o}=e,{use:a=[]}=e,{class:l=""}=e,c;const u=Hi.class,h={},d=[],f=Hi.contexts,p=Hi.props;let{component:g=Hi.component}=e;Object.entries(Hi.classMap).forEach(([w,y])=>{const R=mn(y);R&&"subscribe"in R&&d.push(R.subscribe(k=>{n(4,h[w]=k,h)}))});const m=st(Ue());for(let w in f)f.hasOwnProperty(w)&&Dt(w,f[w]);nr(()=>{for(const w of d)w()});function v(){return c.getElement()}function C(w){de[w?"unshift":"push"](()=>{c=w,n(3,c)})}return t.$$set=w=>{e=B(B({},e),$e(w)),n(8,r=se(e,i)),"use"in w&&n(0,a=w.use),"class"in w&&n(1,l=w.class),"component"in w&&n(2,g=w.component),"$$scope"in w&&n(12,o=w.$$scope)},[a,l,g,c,h,u,p,m,r,v,s,C,o]}class cL extends tt{constructor(e){super();et(this,e,lL,aL,Ke,{use:0,class:1,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const ly=Object.assign({},Hi);function xt(t){return new Proxy(cL,{construct:function(e,n){return Object.assign(Hi,ly,t),new e(...n)},get:function(e,n){return Object.assign(Hi,ly,t),e[n]}})}var uL=xt({class:"mdc-text-field-helper-line",component:pi}),hL=xt({class:"mdc-text-field__affix mdc-text-field__affix--prefix",component:Cr}),dL=xt({class:"mdc-text-field__affix mdc-text-field__affix--suffix",component:Cr});function fL(t){let e,n,i,r,s,o=[{class:n=be({[t[1]]:!0,"mdc-text-field__input":!0})},{type:t[2]},{placeholder:t[3]},t[4],t[6],t[10]],a={};for(let l=0;l<o.length;l+=1)a=B(a,o[l]);return{c(){e=pe("input"),this.h()},l(l){e=_e(l,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){ce(e,a)},m(l,c){re(l,e,c),e.autofocus&&e.focus(),t[25](e),r||(s=[ae(i=pt.call(null,e,t[0])),ae(t[7].call(null,e)),it(e,"input",t[26]),it(e,"change",t[9]),it(e,"blur",t[23]),it(e,"focus",t[24])],r=!0)},p(l,[c]){ce(e,a=ke(o,[c&2&&n!==(n=be({[l[1]]:!0,"mdc-text-field__input":!0}))&&{class:n},c&4&&{type:l[2]},c&8&&{placeholder:l[3]},c&16&&l[4],c&64&&l[6],c&1024&&l[10]])),i&&qe(i.update)&&c&1&&i.update.call(null,l[0])},i:Pt,o:Pt,d(l){l&&N(e),t[25](null),r=!1,ze(s)}}}function pL(t){if(t===""){const e=new Number(Number.NaN);return e.length=0,e}return+t}function mL(t,e,n){const i=["use","class","type","placeholder","value","files","dirty","invalid","updateInvalid","emptyValueNull","emptyValueUndefined","getAttr","addAttr","removeAttr","focus","getElement"];let r=se(e,i);const s=st(Ue());let{use:o=[]}=e,{class:a=""}=e,{type:l="text"}=e,{placeholder:c=" "}=e,{value:u=""}=e,{files:h=null}=e,{dirty:d=!1}=e,{invalid:f=!1}=e,{updateInvalid:p=!0}=e,{emptyValueNull:g=u===null}=e,{emptyValueUndefined:m=u===void 0}=e,v,C={},w={};Sn(()=>{p&&n(14,f=v.matches(":invalid"))});function y(O){if(l==="file"){n(12,h=O.currentTarget.files);return}if(O.currentTarget.value===""&&g){n(11,u=null);return}if(O.currentTarget.value===""&&m){n(11,u=void 0);return}switch(l){case"number":case"range":n(11,u=pL(O.currentTarget.value));break;default:n(11,u=O.currentTarget.value);break}}function R(O){(l==="file"||l==="range")&&y(O),n(13,d=!0),p&&n(14,f=v.matches(":invalid"))}function k(O){var z;return O in C?(z=C[O])!==null&&z!==void 0?z:null:b().getAttribute(O)}function _(O,z){C[O]!==z&&n(6,C[O]=z,C)}function I(O){(!(O in C)||C[O]!=null)&&n(6,C[O]=void 0,C)}function U(){b().focus()}function b(){return v}function L(O){to.call(this,t,O)}function M(O){to.call(this,t,O)}function E(O){de[O?"unshift":"push"](()=>{v=O,n(5,v)})}const P=O=>l!=="file"&&y(O);return t.$$set=O=>{e=B(B({},e),$e(O)),n(10,r=se(e,i)),"use"in O&&n(0,o=O.use),"class"in O&&n(1,a=O.class),"type"in O&&n(2,l=O.type),"placeholder"in O&&n(3,c=O.placeholder),"value"in O&&n(11,u=O.value),"files"in O&&n(12,h=O.files),"dirty"in O&&n(13,d=O.dirty),"invalid"in O&&n(14,f=O.invalid),"updateInvalid"in O&&n(15,p=O.updateInvalid),"emptyValueNull"in O&&n(16,g=O.emptyValueNull),"emptyValueUndefined"in O&&n(17,m=O.emptyValueUndefined)},t.$$.update=()=>{t.$$.dirty&2068&&(l==="file"?(delete w.value,n(4,w),n(2,l),n(11,u)):n(4,w.value=u==null?"":u,w))},[o,a,l,c,w,v,C,s,y,R,r,u,h,d,f,p,g,m,k,_,I,U,b,L,M,E,P]}class gL extends tt{constructor(e){super();et(this,e,mL,fL,Ke,{use:0,class:1,type:2,placeholder:3,value:11,files:12,dirty:13,invalid:14,updateInvalid:15,emptyValueNull:16,emptyValueUndefined:17,getAttr:18,addAttr:19,removeAttr:20,focus:21,getElement:22})}get getAttr(){return this.$$.ctx[18]}get addAttr(){return this.$$.ctx[19]}get removeAttr(){return this.$$.ctx[20]}get focus(){return this.$$.ctx[21]}get getElement(){return this.$$.ctx[22]}}function _L(t){let e,n,i,r,s,o,a=[{class:n=be({[t[2]]:!0,"mdc-text-field__input":!0})},{style:i=`${t[4]?"":"resize: none; "}${t[3]}`},t[6],t[9]],l={};for(let c=0;c<a.length;c+=1)l=B(l,a[c]);return{c(){e=pe("textarea"),this.h()},l(c){e=_e(c,"TEXTAREA",{class:!0,style:!0}),ne(e).forEach(N),this.h()},h(){ce(e,l)},m(c,u){re(c,e,u),e.autofocus&&e.focus(),t[20](e),Lp(e,t[0]),s||(o=[ae(r=pt.call(null,e,t[1])),ae(t[7].call(null,e)),it(e,"change",t[8]),it(e,"blur",t[18]),it(e,"focus",t[19]),it(e,"input",t[21])],s=!0)},p(c,[u]){ce(e,l=ke(a,[u&4&&n!==(n=be({[c[2]]:!0,"mdc-text-field__input":!0}))&&{class:n},u&24&&i!==(i=`${c[4]?"":"resize: none; "}${c[3]}`)&&{style:i},u&64&&c[6],u&512&&c[9]])),r&&qe(r.update)&&u&2&&r.update.call(null,c[1]),u&1&&Lp(e,c[0])},i:Pt,o:Pt,d(c){c&&N(e),t[20](null),s=!1,ze(o)}}}function vL(t,e,n){const i=["use","class","style","value","dirty","invalid","updateInvalid","resizable","getAttr","addAttr","removeAttr","focus","getElement"];let r=se(e,i);const s=st(Ue());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{value:c=""}=e,{dirty:u=!1}=e,{invalid:h=!1}=e,{updateInvalid:d=!0}=e,{resizable:f=!0}=e,p,g={};Sn(()=>{d&&n(11,h=p.matches(":invalid"))});function m(){n(10,u=!0),d&&n(11,h=p.matches(":invalid"))}function v(b){var L;return b in g?(L=g[b])!==null&&L!==void 0?L:null:R().getAttribute(b)}function C(b,L){g[b]!==L&&n(6,g[b]=L,g)}function w(b){(!(b in g)||g[b]!=null)&&n(6,g[b]=void 0,g)}function y(){R().focus()}function R(){return p}function k(b){to.call(this,t,b)}function _(b){to.call(this,t,b)}function I(b){de[b?"unshift":"push"](()=>{p=b,n(5,p)})}function U(){c=this.value,n(0,c)}return t.$$set=b=>{e=B(B({},e),$e(b)),n(9,r=se(e,i)),"use"in b&&n(1,o=b.use),"class"in b&&n(2,a=b.class),"style"in b&&n(3,l=b.style),"value"in b&&n(0,c=b.value),"dirty"in b&&n(10,u=b.dirty),"invalid"in b&&n(11,h=b.invalid),"updateInvalid"in b&&n(12,d=b.updateInvalid),"resizable"in b&&n(4,f=b.resizable)},[c,o,a,l,f,p,g,s,m,r,u,h,d,v,C,w,y,R,k,_,I,U]}class yL extends tt{constructor(e){super();et(this,e,vL,_L,Ke,{use:1,class:2,style:3,value:0,dirty:10,invalid:11,updateInvalid:12,resizable:4,getAttr:13,addAttr:14,removeAttr:15,focus:16,getElement:17})}get getAttr(){return this.$$.ctx[13]}get addAttr(){return this.$$.ctx[14]}get removeAttr(){return this.$$.ctx[15]}get focus(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}const bL=t=>({}),cy=t=>({}),EL=t=>({}),uy=t=>({}),IL=t=>({}),hy=t=>({}),wL=t=>({}),dy=t=>({}),TL=t=>({}),fy=t=>({}),CL=t=>({}),py=t=>({}),SL=t=>({}),my=t=>({}),AL=t=>({}),gy=t=>({}),kL=t=>({}),_y=t=>({}),RL=t=>({}),vy=t=>({}),OL=t=>({}),yy=t=>({}),LL=t=>({}),by=t=>({});function NL(t){let e,n,i,r,s,o,a,l,c,u,h,d,f,p;const g=t[50].label,m=Ne(g,t,t[89],fy);i=new fc({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[PL]},$$scope:{ctx:t}}});const v=t[50].default,C=Ne(v,t,t[89],null);o=new fc({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[DL]},$$scope:{ctx:t}}});const w=t[50].ripple,y=Ne(w,t,t[89],uy);let R=[{class:l=be(Ge({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||!t[41].label,"mdc-text-field--with-leading-icon":t[41].leadingIcon,"mdc-text-field--with-trailing-icon":t[41].trailingIcon,"mdc-text-field--invalid":t[1]},t[25]))},{style:c=Object.entries(t[26]).map(Ly).concat([t[10]]).join(" ")},Ts(t[42],["input$","label$","ripple$","outline$","helperLine$"])],k={};for(let _=0;_<R.length;_+=1)k=B(k,R[_]);return{c(){e=pe("div"),m&&m.c(),n=Xe(),wt(i.$$.fragment),r=Xe(),C&&C.c(),s=Xe(),wt(o.$$.fragment),a=Xe(),y&&y.c(),this.h()},l(_){e=_e(_,"DIV",{class:!0,style:!0});var I=ne(e);m&&m.l(I),n=Qe(I),jt(i.$$.fragment,I),r=Qe(I),C&&C.l(I),s=Qe(I),jt(o.$$.fragment,I),a=Qe(I),y&&y.l(I),I.forEach(N),this.h()},h(){ce(e,k)},m(_,I){re(_,e,I),m&&m.m(e,null),ue(e,n),bt(i,e,null),ue(e,r),C&&C.m(e,null),ue(e,s),bt(o,e,null),ue(e,a),y&&y.m(e,null),t[79](e),d=!0,f||(p=[ae(u=Tr.call(null,e,{ripple:t[11],unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40]})),ae(h=pt.call(null,e,t[8])),ae(t[34].call(null,e)),it(e,"SMUITextfieldLeadingIcon:mount",t[80]),it(e,"SMUITextfieldLeadingIcon:unmount",t[81]),it(e,"SMUITextfieldTrailingIcon:mount",t[82]),it(e,"SMUITextfieldTrailingIcon:unmount",t[83])],f=!0)},p(_,I){m&&m.p&&(!d||I[2]&134217728)&&Pe(m,g,_,_[89],d?Me(g,_[89],I,TL):De(_[89]),fy);const U={};I[2]&134217728&&(U.$$scope={dirty:I,ctx:_}),i.$set(U),C&&C.p&&(!d||I[2]&134217728)&&Pe(C,v,_,_[89],d?Me(v,_[89],I,null):De(_[89]),null);const b={};I[2]&134217728&&(b.$$scope={dirty:I,ctx:_}),o.$set(b),y&&y.p&&(!d||I[2]&134217728)&&Pe(y,w,_,_[89],d?Me(w,_[89],I,EL):De(_[89]),uy),ce(e,k=ke(R,[(!d||I[0]&33673730|I[1]&1024&&l!==(l=be(Ge({[_[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":_[12],"mdc-text-field--textarea":_[14],"mdc-text-field--filled":_[15]==="filled","mdc-text-field--outlined":_[15]==="outlined","smui-text-field--standard":_[15]==="standard"&&!_[14],"mdc-text-field--no-label":_[16]||!_[41].label,"mdc-text-field--with-leading-icon":_[41].leadingIcon,"mdc-text-field--with-trailing-icon":_[41].trailingIcon,"mdc-text-field--invalid":_[1]},_[25]))))&&{class:l},(!d||I[0]&67109888&&c!==(c=Object.entries(_[26]).map(Ly).concat([_[10]]).join(" ")))&&{style:c},I[1]&2048&&Ts(_[42],["input$","label$","ripple$","outline$","helperLine$"])])),u&&qe(u.update)&&I[0]&2048&&u.update.call(null,{ripple:_[11],unbounded:!1,addClass:_[38],removeClass:_[39],addStyle:_[40]}),h&&qe(h.update)&&I[0]&256&&h.update.call(null,_[8])},i(_){d||(j(m,_),j(i.$$.fragment,_),j(C,_),j(o.$$.fragment,_),j(y,_),d=!0)},o(_){W(m,_),W(i.$$.fragment,_),W(C,_),W(o.$$.fragment,_),W(y,_),d=!1},d(_){_&&N(e),m&&m.d(_),Et(i),C&&C.d(_),Et(o),y&&y.d(_),t[79](null),f=!1,ze(p)}}}function ML(t){let e,n,i,r,s,o,a,l,c,u,h,d,f,p,g,m,v,C,w=!t[14]&&t[15]!=="outlined"&&Ey(t),y=(t[14]||t[15]==="outlined")&&Ty(t);r=new fc({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[VL]},$$scope:{ctx:t}}});const R=t[50].default,k=Ne(R,t,t[89],null),_=[BL,jL],I=[];function U(E,P){return E[14]&&typeof E[0]=="string"?0:1}a=U(t),l=I[a]=_[a](t),u=new fc({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[WL]},$$scope:{ctx:t}}});let b=!t[14]&&t[15]!=="outlined"&&t[11]&&ky(t),L=[{class:d=be(Ge({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||t[17]==null&&!t[41].label,"mdc-text-field--label-floating":t[28]||t[0]!=null&&t[0]!=="","mdc-text-field--with-leading-icon":t[35](t[22])?t[41].leadingIcon:t[22],"mdc-text-field--with-trailing-icon":t[35](t[23])?t[41].trailingIcon:t[23],"mdc-text-field--with-internal-counter":t[14]&&t[41].internalCounter,"mdc-text-field--invalid":t[1]},t[25]))},{style:f=Object.entries(t[26]).map(Oy).concat([t[10]]).join(" ")},{for:void 0},Ts(t[42],["input$","label$","ripple$","outline$","helperLine$"])],M={};for(let E=0;E<L.length;E+=1)M=B(M,L[E]);return{c(){e=pe("label"),w&&w.c(),n=Xe(),y&&y.c(),i=Xe(),wt(r.$$.fragment),s=Xe(),k&&k.c(),o=Xe(),l.c(),c=Xe(),wt(u.$$.fragment),h=Xe(),b&&b.c(),this.h()},l(E){e=_e(E,"LABEL",{class:!0,style:!0,for:!0});var P=ne(e);w&&w.l(P),n=Qe(P),y&&y.l(P),i=Qe(P),jt(r.$$.fragment,P),s=Qe(P),k&&k.l(P),o=Qe(P),l.l(P),c=Qe(P),jt(u.$$.fragment,P),h=Qe(P),b&&b.l(P),P.forEach(N),this.h()},h(){ce(e,M)},m(E,P){re(E,e,P),w&&w.m(e,null),ue(e,n),y&&y.m(e,null),ue(e,i),bt(r,e,null),ue(e,s),k&&k.m(e,null),ue(e,o),I[a].m(e,null),ue(e,c),bt(u,e,null),ue(e,h),b&&b.m(e,null),t[72](e),m=!0,v||(C=[ae(p=Tr.call(null,e,{ripple:!t[14]&&t[15]==="filled",unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40],eventTarget:t[33],activeTarget:t[33],initPromise:t[37]})),ae(g=pt.call(null,e,t[8])),ae(t[34].call(null,e)),it(e,"SMUITextfieldLeadingIcon:mount",t[73]),it(e,"SMUITextfieldLeadingIcon:unmount",t[74]),it(e,"SMUITextfieldTrailingIcon:mount",t[75]),it(e,"SMUITextfieldTrailingIcon:unmount",t[76]),it(e,"SMUITextfieldCharacterCounter:mount",t[77]),it(e,"SMUITextfieldCharacterCounter:unmount",t[78])],v=!0)},p(E,P){!E[14]&&E[15]!=="outlined"?w?(w.p(E,P),P[0]&49152&&j(w,1)):(w=Ey(E),w.c(),j(w,1),w.m(e,n)):w&&(rn(),W(w,1,1,()=>{w=null}),sn()),E[14]||E[15]==="outlined"?y?(y.p(E,P),P[0]&49152&&j(y,1)):(y=Ty(E),y.c(),j(y,1),y.m(e,i)):y&&(rn(),W(y,1,1,()=>{y=null}),sn());const O={};P[2]&134217728&&(O.$$scope={dirty:P,ctx:E}),r.$set(O),k&&k.p&&(!m||P[2]&134217728)&&Pe(k,R,E,E[89],m?Me(R,E[89],P,null):De(E[89]),null);let z=a;a=U(E),a===z?I[a].p(E,P):(rn(),W(I[z],1,1,()=>{I[z]=null}),sn(),l=I[a],l?l.p(E,P):(l=I[a]=_[a](E),l.c()),j(l,1),l.m(e,c));const S={};P[2]&134217728&&(S.$$scope={dirty:P,ctx:E}),u.$set(S),!E[14]&&E[15]!=="outlined"&&E[11]?b?(b.p(E,P),P[0]&51200&&j(b,1)):(b=ky(E),b.c(),j(b,1),b.m(e,null)):b&&(rn(),W(b,1,1,()=>{b=null}),sn()),ce(e,M=ke(L,[(!m||P[0]&314823171|P[1]&1024&&d!==(d=be(Ge({[E[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":E[12],"mdc-text-field--textarea":E[14],"mdc-text-field--filled":E[15]==="filled","mdc-text-field--outlined":E[15]==="outlined","smui-text-field--standard":E[15]==="standard"&&!E[14],"mdc-text-field--no-label":E[16]||E[17]==null&&!E[41].label,"mdc-text-field--label-floating":E[28]||E[0]!=null&&E[0]!=="","mdc-text-field--with-leading-icon":E[35](E[22])?E[41].leadingIcon:E[22],"mdc-text-field--with-trailing-icon":E[35](E[23])?E[41].trailingIcon:E[23],"mdc-text-field--with-internal-counter":E[14]&&E[41].internalCounter,"mdc-text-field--invalid":E[1]},E[25]))))&&{class:d},(!m||P[0]&67109888&&f!==(f=Object.entries(E[26]).map(Oy).concat([E[10]]).join(" ")))&&{style:f},{for:void 0},P[1]&2048&&Ts(E[42],["input$","label$","ripple$","outline$","helperLine$"])])),p&&qe(p.update)&&P[0]&49152|P[1]&4&&p.update.call(null,{ripple:!E[14]&&E[15]==="filled",unbounded:!1,addClass:E[38],removeClass:E[39],addStyle:E[40],eventTarget:E[33],activeTarget:E[33],initPromise:E[37]}),g&&qe(g.update)&&P[0]&256&&g.update.call(null,E[8])},i(E){m||(j(w),j(y),j(r.$$.fragment,E),j(k,E),j(l),j(u.$$.fragment,E),j(b),m=!0)},o(E){W(w),W(y),W(r.$$.fragment,E),W(k,E),W(l),W(u.$$.fragment,E),W(b),m=!1},d(E){E&&N(e),w&&w.d(),y&&y.d(),Et(r),k&&k.d(E),I[a].d(),Et(u),b&&b.d(),t[72](null),v=!1,ze(C)}}}function PL(t){let e;const n=t[50].leadingIcon,i=Ne(n,t,t[89],dy);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&Pe(i,n,r,r[89],e?Me(n,r[89],s,wL):De(r[89]),dy)},i(r){e||(j(i,r),e=!0)},o(r){W(i,r),e=!1},d(r){i&&i.d(r)}}}function DL(t){let e;const n=t[50].trailingIcon,i=Ne(n,t,t[89],hy);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&Pe(i,n,r,r[89],e?Me(n,r[89],s,IL):De(r[89]),hy)},i(r){e||(j(i,r),e=!0)},o(r){W(i,r),e=!1},d(r){i&&i.d(r)}}}function Ey(t){let e,n,i,r=t[15]==="filled"&&Iy(),s=!t[16]&&(t[17]!=null||t[41].label)&&wy(t);return{c(){r&&r.c(),e=Xe(),s&&s.c(),n=Rt()},l(o){r&&r.l(o),e=Qe(o),s&&s.l(o),n=Rt()},m(o,a){r&&r.m(o,a),re(o,e,a),s&&s.m(o,a),re(o,n,a),i=!0},p(o,a){o[15]==="filled"?r||(r=Iy(),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),!o[16]&&(o[17]!=null||o[41].label)?s?(s.p(o,a),a[0]&196608|a[1]&1024&&j(s,1)):(s=wy(o),s.c(),j(s,1),s.m(n.parentNode,n)):s&&(rn(),W(s,1,1,()=>{s=null}),sn())},i(o){i||(j(s),i=!0)},o(o){W(s),i=!1},d(o){r&&r.d(o),o&&N(e),s&&s.d(o),o&&N(n)}}}function Iy(t){let e;return{c(){e=pe("span"),this.h()},l(n){e=_e(n,"SPAN",{class:!0}),ne(e).forEach(N),this.h()},h(){J(e,"class","mdc-text-field__ripple")},m(n,i){re(n,e,i)},d(n){n&&N(e)}}}function wy(t){let e,n;const i=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},hn(t[42],"label$")];let r={$$slots:{default:[FL]},$$scope:{ctx:t}};for(let s=0;s<i.length;s+=1)r=B(r,i[s]);return e=new ry({props:r}),t[51](e),{c(){wt(e.$$.fragment)},l(s){jt(e.$$.fragment,s)},m(s,o){bt(e,s,o),n=!0},p(s,o){const a=o[0]&268443649|o[1]&2048?ke(i,[o[0]&268435457&&{floatAbove:s[28]||s[0]!=null&&s[0]!==""},o[0]&8192&&{required:s[13]},i[2],o[1]&2048&&yt(hn(s[42],"label$"))]):{};o[0]&131072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){t[51](null),Et(e,s)}}}function FL(t){let e=(t[17]==null?"":t[17])+"",n,i;const r=t[50].label,s=Ne(r,t,t[89],by);return{c(){n=wi(e),s&&s.c()},l(o){n=Qr(o,e),s&&s.l(o)},m(o,a){re(o,n,a),s&&s.m(o,a),i=!0},p(o,a){(!i||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&eo(n,e),s&&s.p&&(!i||a[2]&134217728)&&Pe(s,r,o,o[89],i?Me(r,o[89],a,LL):De(o[89]),by)},i(o){i||(j(s,o),i=!0)},o(o){W(s,o),i=!1},d(o){o&&N(n),s&&s.d(o)}}}function Ty(t){let e,n;const i=[{noLabel:t[16]||t[17]==null&&!t[41].label},hn(t[42],"outline$")];let r={$$slots:{default:[UL]},$$scope:{ctx:t}};for(let s=0;s<i.length;s+=1)r=B(r,i[s]);return e=new sL({props:r}),t[53](e),{c(){wt(e.$$.fragment)},l(s){jt(e.$$.fragment,s)},m(s,o){bt(e,s,o),n=!0},p(s,o){const a=o[0]&196608|o[1]&3072?ke(i,[o[0]&196608|o[1]&1024&&{noLabel:s[16]||s[17]==null&&!s[41].label},o[1]&2048&&yt(hn(s[42],"outline$"))]):{};o[0]&268640289|o[1]&3072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){t[53](null),Et(e,s)}}}function Cy(t){let e,n;const i=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},hn(t[42],"label$")];let r={$$slots:{default:[xL]},$$scope:{ctx:t}};for(let s=0;s<i.length;s+=1)r=B(r,i[s]);return e=new ry({props:r}),t[52](e),{c(){wt(e.$$.fragment)},l(s){jt(e.$$.fragment,s)},m(s,o){bt(e,s,o),n=!0},p(s,o){const a=o[0]&268443649|o[1]&2048?ke(i,[o[0]&268435457&&{floatAbove:s[28]||s[0]!=null&&s[0]!==""},o[0]&8192&&{required:s[13]},i[2],o[1]&2048&&yt(hn(s[42],"label$"))]):{};o[0]&131072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){t[52](null),Et(e,s)}}}function xL(t){let e=(t[17]==null?"":t[17])+"",n,i;const r=t[50].label,s=Ne(r,t,t[89],yy);return{c(){n=wi(e),s&&s.c()},l(o){n=Qr(o,e),s&&s.l(o)},m(o,a){re(o,n,a),s&&s.m(o,a),i=!0},p(o,a){(!i||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&eo(n,e),s&&s.p&&(!i||a[2]&134217728)&&Pe(s,r,o,o[89],i?Me(r,o[89],a,OL):De(o[89]),yy)},i(o){i||(j(s,o),i=!0)},o(o){W(s,o),i=!1},d(o){o&&N(n),s&&s.d(o)}}}function UL(t){let e,n,i=!t[16]&&(t[17]!=null||t[41].label)&&Cy(t);return{c(){i&&i.c(),e=Rt()},l(r){i&&i.l(r),e=Rt()},m(r,s){i&&i.m(r,s),re(r,e,s),n=!0},p(r,s){!r[16]&&(r[17]!=null||r[41].label)?i?(i.p(r,s),s[0]&196608|s[1]&1024&&j(i,1)):(i=Cy(r),i.c(),j(i,1),i.m(e.parentNode,e)):i&&(rn(),W(i,1,1,()=>{i=null}),sn())},i(r){n||(j(i),n=!0)},o(r){W(i),n=!1},d(r){i&&i.d(r),r&&N(e)}}}function VL(t){let e;const n=t[50].leadingIcon,i=Ne(n,t,t[89],vy);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&Pe(i,n,r,r[89],e?Me(n,r[89],s,RL):De(r[89]),vy)},i(r){e||(j(i,r),e=!0)},o(r){W(i,r),e=!1},d(r){i&&i.d(r)}}}function jL(t){let e,n,i,r,s,o,a,l,c,u;const h=t[50].prefix,d=Ne(h,t,t[89],gy);let f=t[20]!=null&&Sy(t);const p=[{type:t[18]},{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},t[16]&&t[17]!=null?{placeholder:t[17]}:{},hn(t[42],"input$")];function g(_){t[63](_)}function m(_){t[64](_)}function v(_){t[65](_)}function C(_){t[66](_)}let w={};for(let _=0;_<p.length;_+=1)w=B(w,p[_]);t[0]!==void 0&&(w.value=t[0]),t[3]!==void 0&&(w.files=t[3]),t[4]!==void 0&&(w.dirty=t[4]),t[1]!==void 0&&(w.invalid=t[1]),i=new gL({props:w}),t[62](i),de.push(()=>Ci(i,"value",g)),de.push(()=>Ci(i,"files",m)),de.push(()=>Ci(i,"dirty",v)),de.push(()=>Ci(i,"invalid",C)),i.$on("blur",t[67]),i.$on("focus",t[68]),i.$on("blur",t[69]),i.$on("focus",t[70]);let y=t[21]!=null&&Ay(t);const R=t[50].suffix,k=Ne(R,t,t[89],my);return{c(){d&&d.c(),e=Xe(),f&&f.c(),n=Xe(),wt(i.$$.fragment),l=Xe(),y&&y.c(),c=Xe(),k&&k.c()},l(_){d&&d.l(_),e=Qe(_),f&&f.l(_),n=Qe(_),jt(i.$$.fragment,_),l=Qe(_),y&&y.l(_),c=Qe(_),k&&k.l(_)},m(_,I){d&&d.m(_,I),re(_,e,I),f&&f.m(_,I),re(_,n,I),bt(i,_,I),re(_,l,I),y&&y.m(_,I),re(_,c,I),k&&k.m(_,I),u=!0},p(_,I){d&&d.p&&(!u||I[2]&134217728)&&Pe(d,h,_,_[89],u?Me(h,_[89],I,AL):De(_[89]),gy),_[20]!=null?f?(f.p(_,I),I[0]&1048576&&j(f,1)):(f=Sy(_),f.c(),j(f,1),f.m(n.parentNode,n)):f&&(rn(),W(f,1,1,()=>{f=null}),sn());const U=I[0]&135213056|I[1]&2048?ke(p,[I[0]&262144&&{type:_[18]},I[0]&4096&&{disabled:_[12]},I[0]&8192&&{required:_[13]},I[0]&524288&&{updateInvalid:_[19]},I[0]&134217728&&{"aria-controls":_[27]},I[0]&134217728&&{"aria-describedby":_[27]},I[0]&196608&&yt(_[16]&&_[17]!=null?{placeholder:_[17]}:{}),I[1]&2048&&yt(hn(_[42],"input$"))]):{};!r&&I[0]&1&&(r=!0,U.value=_[0],Ti(()=>r=!1)),!s&&I[0]&8&&(s=!0,U.files=_[3],Ti(()=>s=!1)),!o&&I[0]&16&&(o=!0,U.dirty=_[4],Ti(()=>o=!1)),!a&&I[0]&2&&(a=!0,U.invalid=_[1],Ti(()=>a=!1)),i.$set(U),_[21]!=null?y?(y.p(_,I),I[0]&2097152&&j(y,1)):(y=Ay(_),y.c(),j(y,1),y.m(c.parentNode,c)):y&&(rn(),W(y,1,1,()=>{y=null}),sn()),k&&k.p&&(!u||I[2]&134217728)&&Pe(k,R,_,_[89],u?Me(R,_[89],I,SL):De(_[89]),my)},i(_){u||(j(d,_),j(f),j(i.$$.fragment,_),j(y),j(k,_),u=!0)},o(_){W(d,_),W(f),W(i.$$.fragment,_),W(y),W(k,_),u=!1},d(_){d&&d.d(_),_&&N(e),f&&f.d(_),_&&N(n),t[62](null),Et(i,_),_&&N(l),y&&y.d(_),_&&N(c),k&&k.d(_)}}}function BL(t){let e,n,i,r,s,o,a,l;const c=[{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},hn(t[42],"input$")];function u(m){t[55](m)}function h(m){t[56](m)}function d(m){t[57](m)}let f={};for(let m=0;m<c.length;m+=1)f=B(f,c[m]);t[0]!==void 0&&(f.value=t[0]),t[4]!==void 0&&(f.dirty=t[4]),t[1]!==void 0&&(f.invalid=t[1]),n=new yL({props:f}),t[54](n),de.push(()=>Ci(n,"value",u)),de.push(()=>Ci(n,"dirty",h)),de.push(()=>Ci(n,"invalid",d)),n.$on("blur",t[58]),n.$on("focus",t[59]),n.$on("blur",t[60]),n.$on("focus",t[61]);const p=t[50].internalCounter,g=Ne(p,t,t[89],_y);return{c(){e=pe("span"),wt(n.$$.fragment),o=Xe(),g&&g.c(),this.h()},l(m){e=_e(m,"SPAN",{class:!0});var v=ne(e);jt(n.$$.fragment,v),o=Qe(v),g&&g.l(v),v.forEach(N),this.h()},h(){J(e,"class",a=be({"mdc-text-field__resizer":!("input$resizable"in t[42])||t[42].input$resizable}))},m(m,v){re(m,e,v),bt(n,e,null),ue(e,o),g&&g.m(e,null),l=!0},p(m,v){const C=v[0]&134754304|v[1]&2048?ke(c,[v[0]&4096&&{disabled:m[12]},v[0]&8192&&{required:m[13]},v[0]&524288&&{updateInvalid:m[19]},v[0]&134217728&&{"aria-controls":m[27]},v[0]&134217728&&{"aria-describedby":m[27]},v[1]&2048&&yt(hn(m[42],"input$"))]):{};!i&&v[0]&1&&(i=!0,C.value=m[0],Ti(()=>i=!1)),!r&&v[0]&16&&(r=!0,C.dirty=m[4],Ti(()=>r=!1)),!s&&v[0]&2&&(s=!0,C.invalid=m[1],Ti(()=>s=!1)),n.$set(C),g&&g.p&&(!l||v[2]&134217728)&&Pe(g,p,m,m[89],l?Me(p,m[89],v,kL):De(m[89]),_y),(!l||v[1]&2048&&a!==(a=be({"mdc-text-field__resizer":!("input$resizable"in m[42])||m[42].input$resizable})))&&J(e,"class",a)},i(m){l||(j(n.$$.fragment,m),j(g,m),l=!0)},o(m){W(n.$$.fragment,m),W(g,m),l=!1},d(m){m&&N(e),t[54](null),Et(n),g&&g.d(m)}}}function Sy(t){let e,n;return e=new hL({props:{$$slots:{default:[HL]},$$scope:{ctx:t}}}),{c(){wt(e.$$.fragment)},l(i){jt(e.$$.fragment,i)},m(i,r){bt(e,i,r),n=!0},p(i,r){const s={};r[0]&1048576|r[2]&134217728&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){n||(j(e.$$.fragment,i),n=!0)},o(i){W(e.$$.fragment,i),n=!1},d(i){Et(e,i)}}}function HL(t){let e;return{c(){e=wi(t[20])},l(n){e=Qr(n,t[20])},m(n,i){re(n,e,i)},p(n,i){i[0]&1048576&&eo(e,n[20])},d(n){n&&N(e)}}}function Ay(t){let e,n;return e=new dL({props:{$$slots:{default:[qL]},$$scope:{ctx:t}}}),{c(){wt(e.$$.fragment)},l(i){jt(e.$$.fragment,i)},m(i,r){bt(e,i,r),n=!0},p(i,r){const s={};r[0]&2097152|r[2]&134217728&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){n||(j(e.$$.fragment,i),n=!0)},o(i){W(e.$$.fragment,i),n=!1},d(i){Et(e,i)}}}function qL(t){let e;return{c(){e=wi(t[21])},l(n){e=Qr(n,t[21])},m(n,i){re(n,e,i)},p(n,i){i[0]&2097152&&eo(e,n[21])},d(n){n&&N(e)}}}function WL(t){let e;const n=t[50].trailingIcon,i=Ne(n,t,t[89],py);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&Pe(i,n,r,r[89],e?Me(n,r[89],s,CL):De(r[89]),py)},i(r){e||(j(i,r),e=!0)},o(r){W(i,r),e=!1},d(r){i&&i.d(r)}}}function ky(t){let e,n;const i=[hn(t[42],"ripple$")];let r={};for(let s=0;s<i.length;s+=1)r=B(r,i[s]);return e=new nL({props:r}),t[71](e),{c(){wt(e.$$.fragment)},l(s){jt(e.$$.fragment,s)},m(s,o){bt(e,s,o),n=!0},p(s,o){const a=o[1]&2048?ke(i,[yt(hn(s[42],"ripple$"))]):{};e.$set(a)},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){t[71](null),Et(e,s)}}}function Ry(t){let e,n;const i=[hn(t[42],"helperLine$")];let r={$$slots:{default:[GL]},$$scope:{ctx:t}};for(let s=0;s<i.length;s+=1)r=B(r,i[s]);return e=new uL({props:r}),e.$on("SMUITextfieldHelperText:id",t[84]),e.$on("SMUITextfieldHelperText:mount",t[85]),e.$on("SMUITextfieldHelperText:unmount",t[86]),e.$on("SMUITextfieldCharacterCounter:mount",t[87]),e.$on("SMUITextfieldCharacterCounter:unmount",t[88]),{c(){wt(e.$$.fragment)},l(s){jt(e.$$.fragment,s)},m(s,o){bt(e,s,o),n=!0},p(s,o){const a=o[1]&2048?ke(i,[yt(hn(s[42],"helperLine$"))]):{};o[2]&134217728&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){W(e.$$.fragment,s),n=!1},d(s){Et(e,s)}}}function GL(t){let e;const n=t[50].helper,i=Ne(n,t,t[89],cy);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[2]&134217728)&&Pe(i,n,r,r[89],e?Me(n,r[89],s,bL):De(r[89]),cy)},i(r){e||(j(i,r),e=!0)},o(r){W(i,r),e=!1},d(r){i&&i.d(r)}}}function zL(t){let e,n,i,r,s;const o=[ML,NL],a=[];function l(u,h){return u[36]?0:1}e=l(t),n=a[e]=o[e](t);let c=t[41].helper&&Ry(t);return{c(){n.c(),i=Xe(),c&&c.c(),r=Rt()},l(u){n.l(u),i=Qe(u),c&&c.l(u),r=Rt()},m(u,h){a[e].m(u,h),re(u,i,h),c&&c.m(u,h),re(u,r,h),s=!0},p(u,h){n.p(u,h),u[41].helper?c?(c.p(u,h),h[1]&1024&&j(c,1)):(c=Ry(u),c.c(),j(c,1),c.m(r.parentNode,r)):c&&(rn(),W(c,1,1,()=>{c=null}),sn())},i(u){s||(j(n),j(c),s=!0)},o(u){W(n),W(c),s=!1},d(u){a[e].d(u),u&&N(i),c&&c.d(u),u&&N(r)}}}const Oy=([t,e])=>`${t}: ${e};`,Ly=([t,e])=>`${t}: ${e};`;function KL(t,e,n){let i;const r=["use","class","style","ripple","disabled","required","textarea","variant","noLabel","label","type","value","files","invalid","updateInvalid","dirty","prefix","suffix","validateOnValueChange","useNativeValidation","withLeadingIcon","withTrailingIcon","input","floatingLabel","lineRipple","notchedOutline","focus","layout","getElement"];let s=se(e,r),{$$slots:o={},$$scope:a}=e;const l=I0(o),{applyPassive:c}=qv,u=st(Ue());let h=()=>{};function d(T){return T===h}let{use:f=[]}=e,{class:p=""}=e,{style:g=""}=e,{ripple:m=!0}=e,{disabled:v=!1}=e,{required:C=!1}=e,{textarea:w=!1}=e,{variant:y=w?"outlined":"standard"}=e,{noLabel:R=!1}=e,{label:k=void 0}=e,{type:_="text"}=e,{value:I=h}=e,{files:U=h}=e;const b=!d(I)||!d(U);d(I)&&(I=void 0),d(U)&&(U=null);let{invalid:L=h}=e,{updateInvalid:M=d(L)}=e;d(L)&&(L=!1);let{dirty:E=!1}=e,{prefix:P=void 0}=e,{suffix:O=void 0}=e,{validateOnValueChange:z=M}=e,{useNativeValidation:S=M}=e,{withLeadingIcon:A=h}=e,{withTrailingIcon:K=h}=e,{input:H=void 0}=e,{floatingLabel:Q=void 0}=e,{lineRipple:me=void 0}=e,{notchedOutline:q=void 0}=e,Le,Te,Ee={},Se={},X,ge=!1,ht=mn("SMUI:addLayoutListener"),tn,Mt,V=new Promise(T=>Mt=T),ye,dt,nn,qn,Ii=I;ht&&(tn=ht(Da)),Sn(()=>{if(n(48,Te=new QO({addClass:$s,removeClass:Pa,hasClass:fu,registerTextFieldInteractionHandler:(T,kt)=>Xr().addEventListener(T,kt),deregisterTextFieldInteractionHandler:(T,kt)=>Xr().removeEventListener(T,kt),registerValidationAttributeChangeHandler:T=>{const kt=vu=>vu.map(yu=>yu.attributeName).filter(yu=>yu),Ip=new MutationObserver(vu=>{S&&T(kt(vu))}),m0={attributes:!0};return H&&Ip.observe(H.getElement(),m0),Ip},deregisterValidationAttributeChangeHandler:T=>{T.disconnect()},getNativeInput:()=>{var T;return(T=H==null?void 0:H.getElement())!==null&&T!==void 0?T:null},setInputAttr:(T,kt)=>{H==null||H.addAttr(T,kt)},removeInputAttr:T=>{H==null||H.removeAttr(T)},isFocused:()=>document.activeElement===(H==null?void 0:H.getElement()),registerInputInteractionHandler:(T,kt)=>{H==null||H.getElement().addEventListener(T,kt,c())},deregisterInputInteractionHandler:(T,kt)=>{H==null||H.getElement().removeEventListener(T,kt,c())},floatLabel:T=>Q&&Q.float(T),getLabelWidth:()=>Q?Q.getWidth():0,hasLabel:()=>!!Q,shakeLabel:T=>Q&&Q.shake(T),setLabelRequired:T=>Q&&Q.setRequired(T),activateLineRipple:()=>me&&me.activate(),deactivateLineRipple:()=>me&&me.deactivate(),setLineRippleTransformOrigin:T=>me&&me.setRippleCenter(T),closeOutline:()=>q&&q.closeNotch(),hasOutline:()=>!!q,notchOutline:T=>q&&q.notch(T)},{get helperText(){return nn},get characterCounter(){return qn},get leadingIcon(){return ye},get trailingIcon(){return dt}})),b){if(H==null)throw new Error("SMUI Textfield initialized without Input component.");Te.init()}else M0().then(()=>{if(H==null)throw new Error("SMUI Textfield initialized without Input component.");Te.init()});return Mt(),()=>{Te.destroy()}}),nr(()=>{tn&&tn()});function fu(T){var kt;return T in Ee?(kt=Ee[T])!==null&&kt!==void 0?kt:null:Xr().classList.contains(T)}function $s(T){Ee[T]||n(25,Ee[T]=!0,Ee)}function Pa(T){(!(T in Ee)||Ee[T])&&n(25,Ee[T]=!1,Ee)}function Zn(T,kt){Se[T]!=kt&&(kt===""||kt==null?(delete Se[T],n(26,Se)):n(26,Se[T]=kt,Se))}function pu(){H==null||H.focus()}function Da(){if(Te){const T=Te.shouldFloat;Te.notchOutline(T)}}function Xr(){return Le}function mu(T){de[T?"unshift":"push"](()=>{Q=T,n(5,Q)})}function gu(T){de[T?"unshift":"push"](()=>{Q=T,n(5,Q)})}function x(T){de[T?"unshift":"push"](()=>{q=T,n(7,q)})}function oe(T){de[T?"unshift":"push"](()=>{H=T,n(2,H)})}function ie(T){I=T,n(0,I)}function at(T){E=T,n(4,E)}function tr(T){L=T,n(1,L),n(48,Te),n(19,M)}const _u=()=>n(28,ge=!1),Vw=()=>n(28,ge=!0),jw=T=>rt(Le,"blur",T),Bw=T=>rt(Le,"focus",T);function Hw(T){de[T?"unshift":"push"](()=>{H=T,n(2,H)})}function qw(T){I=T,n(0,I)}function Ww(T){U=T,n(3,U)}function Gw(T){E=T,n(4,E)}function zw(T){L=T,n(1,L),n(48,Te),n(19,M)}const Kw=()=>n(28,ge=!1),Xw=()=>n(28,ge=!0),Qw=T=>rt(Le,"blur",T),Yw=T=>rt(Le,"focus",T);function Jw(T){de[T?"unshift":"push"](()=>{me=T,n(6,me)})}function Zw(T){de[T?"unshift":"push"](()=>{Le=T,n(24,Le)})}const $w=T=>n(29,ye=T.detail),e0=()=>n(29,ye=void 0),t0=T=>n(30,dt=T.detail),n0=()=>n(30,dt=void 0),i0=T=>n(32,qn=T.detail),r0=()=>n(32,qn=void 0);function s0(T){de[T?"unshift":"push"](()=>{Le=T,n(24,Le)})}const o0=T=>n(29,ye=T.detail),a0=()=>n(29,ye=void 0),l0=T=>n(30,dt=T.detail),c0=()=>n(30,dt=void 0),u0=T=>n(27,X=T.detail),h0=T=>n(31,nn=T.detail),d0=()=>{n(27,X=void 0),n(31,nn=void 0)},f0=T=>n(32,qn=T.detail),p0=()=>n(32,qn=void 0);return t.$$set=T=>{e=B(B({},e),$e(T)),n(42,s=se(e,r)),"use"in T&&n(8,f=T.use),"class"in T&&n(9,p=T.class),"style"in T&&n(10,g=T.style),"ripple"in T&&n(11,m=T.ripple),"disabled"in T&&n(12,v=T.disabled),"required"in T&&n(13,C=T.required),"textarea"in T&&n(14,w=T.textarea),"variant"in T&&n(15,y=T.variant),"noLabel"in T&&n(16,R=T.noLabel),"label"in T&&n(17,k=T.label),"type"in T&&n(18,_=T.type),"value"in T&&n(0,I=T.value),"files"in T&&n(3,U=T.files),"invalid"in T&&n(1,L=T.invalid),"updateInvalid"in T&&n(19,M=T.updateInvalid),"dirty"in T&&n(4,E=T.dirty),"prefix"in T&&n(20,P=T.prefix),"suffix"in T&&n(21,O=T.suffix),"validateOnValueChange"in T&&n(43,z=T.validateOnValueChange),"useNativeValidation"in T&&n(44,S=T.useNativeValidation),"withLeadingIcon"in T&&n(22,A=T.withLeadingIcon),"withTrailingIcon"in T&&n(23,K=T.withTrailingIcon),"input"in T&&n(2,H=T.input),"floatingLabel"in T&&n(5,Q=T.floatingLabel),"lineRipple"in T&&n(6,me=T.lineRipple),"notchedOutline"in T&&n(7,q=T.notchedOutline),"$$scope"in T&&n(89,a=T.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&4&&n(33,i=H&&H.getElement()),t.$$.dirty[0]&524290|t.$$.dirty[1]&131072&&Te&&Te.isValid()!==!L&&(M?n(1,L=!Te.isValid()):Te.setValid(!L)),t.$$.dirty[1]&135168&&Te&&Te.getValidateOnValueChange()!==z&&Te.setValidateOnValueChange(d(z)?!1:z),t.$$.dirty[1]&139264&&Te&&Te.setUseNativeValidation(d(S)?!0:S),t.$$.dirty[0]&4096|t.$$.dirty[1]&131072&&Te&&Te.setDisabled(v),t.$$.dirty[0]&1|t.$$.dirty[1]&393216&&Te&&b&&Ii!==I){n(49,Ii=I);const T=`${I}`;Te.getValue()!==T&&Te.setValue(T)}},[I,L,H,U,E,Q,me,q,f,p,g,m,v,C,w,y,R,k,_,M,P,O,A,K,Le,Ee,Se,X,ge,ye,dt,nn,qn,i,u,d,b,V,$s,Pa,Zn,l,s,z,S,pu,Da,Xr,Te,Ii,o,mu,gu,x,oe,ie,at,tr,_u,Vw,jw,Bw,Hw,qw,Ww,Gw,zw,Kw,Xw,Qw,Yw,Jw,Zw,$w,e0,t0,n0,i0,r0,s0,o0,a0,l0,c0,u0,h0,d0,f0,p0,a]}class Aj extends tt{constructor(e){super();et(this,e,KL,zL,Ke,{use:8,class:9,style:10,ripple:11,disabled:12,required:13,textarea:14,variant:15,noLabel:16,label:17,type:18,value:0,files:3,invalid:1,updateInvalid:19,dirty:4,prefix:20,suffix:21,validateOnValueChange:43,useNativeValidation:44,withLeadingIcon:22,withTrailingIcon:23,input:2,floatingLabel:5,lineRipple:6,notchedOutline:7,focus:45,layout:46,getElement:47},null,[-1,-1,-1,-1])}get focus(){return this.$$.ctx[45]}get layout(){return this.$$.ctx[46]}get getElement(){return this.$$.ctx[47]}}/**
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
 */var Ar;(function(t){t.PROCESSING="mdc-switch--processing",t.SELECTED="mdc-switch--selected",t.UNSELECTED="mdc-switch--unselected"})(Ar||(Ar={}));var Ny;(function(t){t.RIPPLE=".mdc-switch__ripple"})(Ny||(Ny={}));/**
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
 */function XL(t,e,n){var i=QL(t,e),r=i.getObservers(e);return r.push(n),function(){r.splice(r.indexOf(n),1)}}var pc=new WeakMap;function QL(t,e){var n=new Map;pc.has(t)||pc.set(t,{isEnabled:!0,getObservers:function(c){var u=n.get(c)||[];return n.has(c)||n.set(c,u),u},installedProperties:new Set});var i=pc.get(t);if(i.installedProperties.has(e))return i;var r=YL(t,e)||{configurable:!0,enumerable:!0,value:t[e],writable:!0},s=ct({},r),o=r.get,a=r.set;if("value"in r){delete s.value,delete s.writable;var l=r.value;o=function(){return l},r.writable&&(a=function(c){l=c})}return o&&(s.get=function(){return o.call(this)}),a&&(s.set=function(c){var u,h,d=o?o.call(this):c;if(a.call(this,c),i.isEnabled&&(!o||c!==d))try{for(var f=Vn(i.getObservers(e)),p=f.next();!p.done;p=f.next()){var g=p.value;g(c,d)}}catch(m){u={error:m}}finally{try{p&&!p.done&&(h=f.return)&&h.call(f)}finally{if(u)throw u.error}}}),i.installedProperties.add(e),Object.defineProperty(t,e,s),i}function YL(t,e){for(var n=t,i;n&&(i=Object.getOwnPropertyDescriptor(n,e),!i);)n=Object.getPrototypeOf(n);return i}function JL(t,e){var n=pc.get(t);n&&(n.isEnabled=e)}/**
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
 */var ZL=function(t){bn(e,t);function e(n){var i=t.call(this,n)||this;return i.unobserves=new Set,i}return e.prototype.destroy=function(){t.prototype.destroy.call(this),this.unobserve()},e.prototype.observe=function(n,i){var r,s,o=this,a=[];try{for(var l=Vn(Object.keys(i)),c=l.next();!c.done;c=l.next()){var u=c.value,h=i[u].bind(this);a.push(this.observeProperty(n,u,h))}}catch(f){r={error:f}}finally{try{c&&!c.done&&(s=l.return)&&s.call(l)}finally{if(r)throw r.error}}var d=function(){var f,p;try{for(var g=Vn(a),m=g.next();!m.done;m=g.next()){var v=m.value;v()}}catch(C){f={error:C}}finally{try{m&&!m.done&&(p=g.return)&&p.call(g)}finally{if(f)throw f.error}}o.unobserves.delete(d)};return this.unobserves.add(d),d},e.prototype.observeProperty=function(n,i,r){return XL(n,i,r)},e.prototype.setObserversEnabled=function(n,i){JL(n,i)},e.prototype.unobserve=function(){var n,i;try{for(var r=Vn(LA([],OA(this.unobserves))),s=r.next();!s.done;s=r.next()){var o=s.value;o()}}catch(a){n={error:a}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},e}(Wn);/**
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
 */var $L=function(t){bn(e,t);function e(n){var i=t.call(this,n)||this;return i.handleClick=i.handleClick.bind(i),i}return e.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},e.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},e.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},e}(ZL),eN=function(t){bn(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.init=function(){t.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},e.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(Ar.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(Ar.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},e.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},e.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,Ar.PROCESSING)},e.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,Ar.SELECTED),this.toggleClass(!this.adapter.state.selected,Ar.UNSELECTED)},e.prototype.toggleClass=function(n,i){n?this.adapter.addClass(i):this.adapter.removeClass(i)},e}($L);function My(t){let e,n,i,r,s,o,a,l,c,u,h=[{class:a=be({[t[7]]:!0,"mdc-switch__icons":!0})},hn(t[18],"icons$")],d={};for(let f=0;f<h.length;f+=1)d=B(d,h[f]);return{c(){e=pe("div"),n=Cn("svg"),i=Cn("path"),r=Xe(),s=Cn("svg"),o=Cn("path"),this.h()},l(f){e=_e(f,"DIV",{class:!0});var p=ne(e);n=Pn(p,"svg",{class:!0,viewBox:!0});var g=ne(n);i=Pn(g,"path",{d:!0}),ne(i).forEach(N),g.forEach(N),r=Qe(p),s=Pn(p,"svg",{class:!0,viewBox:!0});var m=ne(s);o=Pn(m,"path",{d:!0}),ne(o).forEach(N),m.forEach(N),p.forEach(N),this.h()},h(){J(i,"d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"),J(n,"class","mdc-switch__icon mdc-switch__icon--on"),J(n,"viewBox","0 0 24 24"),J(o,"d","M20 13H4v-2h16v2z"),J(s,"class","mdc-switch__icon mdc-switch__icon--off"),J(s,"viewBox","0 0 24 24"),ce(e,d)},m(f,p){re(f,e,p),ue(e,n),ue(n,i),ue(e,r),ue(e,s),ue(s,o),c||(u=ae(l=pt.call(null,e,t[6])),c=!0)},p(f,p){ce(e,d=ke(h,[p[0]&128&&a!==(a=be({[f[7]]:!0,"mdc-switch__icons":!0}))&&{class:a},p[0]&262144&&hn(f[18],"icons$")])),l&&qe(l.update)&&p[0]&64&&l.update.call(null,f[6])},d(f){f&&N(e),c=!1,u()}}}function tN(t){let e,n,i,r,s,o,a,l,c,u,h,d,f,p,g,m,v=t[5]&&My(t),C=[{class:h=be(Ge({[t[3]]:!0,"mdc-switch":!0,"mdc-switch--unselected":!t[9],"mdc-switch--selected":t[9],"mdc-switch--processing":t[1],"smui-switch--color-secondary":t[4]==="secondary"},t[11]))},{type:"button"},{role:"switch"},{"aria-checked":d=t[9]?"true":"false"},{disabled:t[0]},t[15],Ts(t[18],["icons$"])],w={};for(let y=0;y<C.length;y+=1)w=B(w,C[y]);return{c(){e=pe("button"),n=pe("div"),i=Xe(),r=pe("div"),s=pe("div"),o=pe("div"),a=pe("div"),l=Xe(),c=pe("div"),u=Xe(),v&&v.c(),this.h()},l(y){e=_e(y,"BUTTON",{class:!0,type:!0,role:!0,"aria-checked":!0});var R=ne(e);n=_e(R,"DIV",{class:!0}),ne(n).forEach(N),i=Qe(R),r=_e(R,"DIV",{class:!0});var k=ne(r);s=_e(k,"DIV",{class:!0});var _=ne(s);o=_e(_,"DIV",{class:!0});var I=ne(o);a=_e(I,"DIV",{class:!0}),ne(a).forEach(N),I.forEach(N),l=Qe(_),c=_e(_,"DIV",{class:!0}),ne(c).forEach(N),u=Qe(_),v&&v.l(_),_.forEach(N),k.forEach(N),R.forEach(N),this.h()},h(){J(n,"class","mdc-switch__track"),J(a,"class","mdc-elevation-overlay"),J(o,"class","mdc-switch__shadow"),J(c,"class","mdc-switch__ripple"),J(s,"class","mdc-switch__handle"),J(r,"class","mdc-switch__handle-track"),ce(e,w)},m(y,R){re(y,e,R),ue(e,n),ue(e,i),ue(e,r),ue(r,s),ue(s,o),ue(o,a),ue(s,l),ue(s,c),t[27](c),ue(s,u),v&&v.m(s,null),e.autofocus&&e.focus(),t[28](e),g||(m=[ae(f=pt.call(null,e,t[2])),ae(t[14].call(null,e)),ae(p=Tr.call(null,e,{unbounded:!0,color:t[4],active:t[13],rippleElement:t[12],disabled:t[0],addClass:t[16],removeClass:t[17]})),it(e,"click",t[29])],g=!0)},p(y,R){y[5]?v?v.p(y,R):(v=My(y),v.c(),v.m(s,null)):v&&(v.d(1),v=null),ce(e,w=ke(C,[R[0]&2586&&h!==(h=be(Ge({[y[3]]:!0,"mdc-switch":!0,"mdc-switch--unselected":!y[9],"mdc-switch--selected":y[9],"mdc-switch--processing":y[1],"smui-switch--color-secondary":y[4]==="secondary"},y[11])))&&{class:h},{type:"button"},{role:"switch"},R[0]&512&&d!==(d=y[9]?"true":"false")&&{"aria-checked":d},R[0]&1&&{disabled:y[0]},y[15],R[0]&262144&&Ts(y[18],["icons$"])])),f&&qe(f.update)&&R[0]&4&&f.update.call(null,y[2]),p&&qe(p.update)&&R[0]&12305&&p.update.call(null,{unbounded:!0,color:y[4],active:y[13],rippleElement:y[12],disabled:y[0],addClass:y[16],removeClass:y[17]})},i:Pt,o:Pt,d(y){y&&N(e),t[27](null),v&&v.d(),t[28](null),g=!1,ze(m)}}}function nN(t,e,n){const i=["use","class","disabled","color","group","checked","value","processing","icons","icons$use","icons$class","getId","getElement"];let r=se(e,i);var s;const o=st(Ue());let a=()=>{};function l(q){return q===a}let{use:c=[]}=e,{class:u=""}=e,{disabled:h=!1}=e,{color:d="primary"}=e,{group:f=a}=e,{checked:p=a}=e,{value:g=null}=e,{processing:m=!1}=e,{icons:v=!0}=e,{icons$use:C=[]}=e,{icons$class:w=""}=e,y,R,k={},_,I=!1,U=(s=mn("SMUI:generic:input:props"))!==null&&s!==void 0?s:{},b=l(f)?l(p)?!1:p:f.indexOf(g)!==-1,L={get disabled(){return h},set disabled(q){n(0,h=q)},get processing(){return m},set processing(q){n(1,m=q)},get selected(){return b},set selected(q){n(9,b=q)}},M=p,E=l(f)?[]:[...f],P=b;Sn(()=>{n(10,R=new eN({addClass:z,hasClass:O,isDisabled:()=>h,removeClass:S,setAriaChecked:()=>{},setDisabled:Le=>{n(0,h=Le)},state:L}));const q={get element(){return K()},get checked(){return b},set checked(Le){b!==Le&&(L.selected=Le,y&&rt(y,"SMUISwitch:change",{selected:Le,value:g}))},activateRipple(){h||n(13,I=!0)},deactivateRipple(){n(13,I=!1)}};return rt(y,"SMUIGenericInput:mount",q),R.init(),R.initFromDOM(),()=>{rt(y,"SMUIGenericInput:unmount",q),R.destroy()}});function O(q){return q in k?k[q]:K().classList.contains(q)}function z(q){k[q]||n(11,k[q]=!0,k)}function S(q){(!(q in k)||k[q])&&n(11,k[q]=!1,k)}function A(){return U&&U.id}function K(){return y}function H(q){de[q?"unshift":"push"](()=>{_=q,n(12,_)})}function Q(q){de[q?"unshift":"push"](()=>{y=q,n(8,y)})}const me=()=>R&&R.handleClick();return t.$$set=q=>{e=B(B({},e),$e(q)),n(18,r=se(e,i)),"use"in q&&n(2,c=q.use),"class"in q&&n(3,u=q.class),"disabled"in q&&n(0,h=q.disabled),"color"in q&&n(4,d=q.color),"group"in q&&n(19,f=q.group),"checked"in q&&n(20,p=q.checked),"value"in q&&n(21,g=q.value),"processing"in q&&n(1,m=q.processing),"icons"in q&&n(5,v=q.icons),"icons$use"in q&&n(6,C=q.icons$use),"icons$class"in q&&n(7,w=q.icons$class)},t.$$.update=()=>{if(t.$$.dirty[0]&121111296){let q=!1;if(!l(f))if(P!==b){const Le=f.indexOf(g);b&&Le===-1?(f.push(g),n(19,f),n(26,P),n(9,b),n(21,g),n(25,E),n(20,p),n(24,M),n(8,y)):!b&&Le!==-1&&(f.splice(Le,1),n(19,f),n(26,P),n(9,b),n(21,g),n(25,E),n(20,p),n(24,M),n(8,y)),q=!0}else{const Le=E.indexOf(g),Te=f.indexOf(g);Le>-1&&Te===-1?L.selected=!1:Te>-1&&Le===-1&&(L.selected=!0)}l(p)?P!==b&&(q=!0):p!==b&&(p===M?(n(20,p=b),q=!0):L.selected=p),n(24,M=p),n(25,E=l(f)?[]:[...f]),n(26,P=b),q&&y&&rt(y,"SMUISwitch:change",{selected:b,value:g})}},[h,m,c,u,d,v,C,w,y,b,R,k,_,I,o,U,z,S,r,f,p,g,A,K,M,E,P,H,Q,me]}class kj extends tt{constructor(e){super();et(this,e,nN,tN,Ke,{use:2,class:3,disabled:0,color:4,group:19,checked:20,value:21,processing:1,icons:5,icons$use:6,icons$class:7,getId:22,getElement:23},null,[-1,-1])}get getId(){return this.$$.ctx[22]}get getElement(){return this.$$.ctx[23]}}/**
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
 */var iN={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},rN={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},ea={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},Tt;(function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"})(Tt||(Tt={}));var Cs;(function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"})(Cs||(Cs={}));/**
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
 */var qi,gi,Ce={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};qi={},qi[""+Ce.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",qi[""+Ce.LIST_ITEM_CLASS]="mdc-list-item",qi[""+Ce.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",qi[""+Ce.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",qi[""+Ce.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",qi[""+Ce.ROOT]="mdc-list";var Ss=(gi={},gi[""+Ce.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",gi[""+Ce.LIST_ITEM_CLASS]="mdc-deprecated-list-item",gi[""+Ce.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",gi[""+Ce.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",gi[""+Ce.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",gi[""+Ce.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",gi[""+Ce.ROOT]="mdc-deprecated-list",gi),Wi={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+Ce.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+Ce.LIST_ITEM_CLASS+` a,
    .`+Ss[Ce.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Ss[Ce.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+Ce.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+Ce.LIST_ITEM_CLASS+` a,
    .`+Ce.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+Ce.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+Ss[Ce.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Ss[Ce.LIST_ITEM_CLASS]+` a,
    .`+Ss[Ce.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+Ss[Ce.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
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
 */var sN=["input","button","textarea","select"],kr=function(t){var e=t.target;if(!!e){var n=(""+e.tagName).toLowerCase();sN.indexOf(n)===-1&&t.preventDefault()}};/**
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
 */function oN(){var t={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return t}function aN(t,e){for(var n=new Map,i=0;i<t;i++){var r=e(i).trim();if(!!r){var s=r[0].toLowerCase();n.has(s)||n.set(s,[]),n.get(s).push({text:r.toLowerCase(),index:i})}}return n.forEach(function(o){o.sort(function(a,l){return a.index-l.index})}),n}function xd(t,e){var n=t.nextChar,i=t.focusItemAtIndex,r=t.sortedIndexByFirstChar,s=t.focusedItemIndex,o=t.skipFocus,a=t.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){Dy(e)},Ut.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+n;var l;return e.typeaheadBuffer.length===1?l=lN(r,s,a,e):l=cN(r,a,e),l!==-1&&!o&&i(l),l}function lN(t,e,n,i){var r=i.typeaheadBuffer[0],s=t.get(r);if(!s)return-1;if(r===i.currentFirstChar&&s[i.sortedIndexCursor].index===e){i.sortedIndexCursor=(i.sortedIndexCursor+1)%s.length;var o=s[i.sortedIndexCursor].index;if(!n(o))return o}i.currentFirstChar=r;var a=-1,l;for(l=0;l<s.length;l++)if(!n(s[l].index)){a=l;break}for(;l<s.length;l++)if(s[l].index>e&&!n(s[l].index)){a=l;break}return a!==-1?(i.sortedIndexCursor=a,s[i.sortedIndexCursor].index):-1}function cN(t,e,n){var i=n.typeaheadBuffer[0],r=t.get(i);if(!r)return-1;var s=r[n.sortedIndexCursor];if(s.text.lastIndexOf(n.typeaheadBuffer,0)===0&&!e(s.index))return s.index;for(var o=(n.sortedIndexCursor+1)%r.length,a=-1;o!==n.sortedIndexCursor;){var l=r[o],c=l.text.lastIndexOf(n.typeaheadBuffer,0)===0,u=!e(l.index);if(c&&u){a=o;break}o=(o+1)%r.length}return a!==-1?(n.sortedIndexCursor=a,r[n.sortedIndexCursor].index):-1}function Py(t){return t.typeaheadBuffer.length>0}function Dy(t){t.typeaheadBuffer=""}function Fy(t,e){var n=t.event,i=t.isTargetListItem,r=t.focusedItemIndex,s=t.focusItemAtIndex,o=t.sortedIndexByFirstChar,a=t.isItemAtIndexDisabled,l=dn(n)==="ArrowLeft",c=dn(n)==="ArrowUp",u=dn(n)==="ArrowRight",h=dn(n)==="ArrowDown",d=dn(n)==="Home",f=dn(n)==="End",p=dn(n)==="Enter",g=dn(n)==="Spacebar";if(n.ctrlKey||n.metaKey||l||c||u||h||d||f||p)return-1;var m=!g&&n.key.length===1;if(m){kr(n);var v={focusItemAtIndex:s,focusedItemIndex:r,nextChar:n.key.toLowerCase(),sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return xd(v,e)}if(!g)return-1;i&&kr(n);var C=i&&Py(e);if(C){var v={focusItemAtIndex:s,focusedItemIndex:r,nextChar:" ",sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return xd(v,e)}return-1}/**
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
 */function uN(t){return t instanceof Array}var hN=function(t){bn(e,t);function e(n){var i=t.call(this,ct(ct({},e.defaultAdapter),n))||this;return i.wrapFocus=!1,i.isVertical=!0,i.isSingleSelectionList=!1,i.selectedIndex=Ut.UNSET_INDEX,i.focusedItemIndex=Ut.UNSET_INDEX,i.useActivatedClass=!1,i.useSelectedAttr=!1,i.ariaCurrentAttrValue=null,i.isCheckboxList=!1,i.isRadioList=!1,i.hasTypeahead=!1,i.typeaheadState=oN(),i.sortedIndexByFirstChar=new Map,i}return Object.defineProperty(e,"strings",{get:function(){return Wi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Ce},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ut},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(n){this.wrapFocus=n},e.prototype.setVerticalOrientation=function(n){this.isVertical=n},e.prototype.setSingleSelection=function(n){this.isSingleSelectionList=n,n&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.maybeInitializeSingleSelection=function(){var n=this.getSelectedIndexFromDOM();if(n!==Ut.UNSET_INDEX){var i=this.adapter.listItemAtIndexHasClass(n,Ce.LIST_ITEM_ACTIVATED_CLASS);i&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=n}},e.prototype.getSelectedIndexFromDOM=function(){for(var n=Ut.UNSET_INDEX,i=this.adapter.getListItemCount(),r=0;r<i;r++){var s=this.adapter.listItemAtIndexHasClass(r,Ce.LIST_ITEM_SELECTED_CLASS),o=this.adapter.listItemAtIndexHasClass(r,Ce.LIST_ITEM_ACTIVATED_CLASS);if(!!(s||o)){n=r;break}}return n},e.prototype.setHasTypeahead=function(n){this.hasTypeahead=n,n&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&Py(this.typeaheadState)},e.prototype.setUseActivatedClass=function(n){this.useActivatedClass=n},e.prototype.setUseSelectedAttribute=function(n){this.useSelectedAttr=n},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(n,i){var r=i===void 0?{}:i,s=r.forceUpdate;!this.isIndexValid(n)||(this.isCheckboxList?this.setCheckboxAtIndex(n):this.isRadioList?this.setRadioAtIndex(n):this.setSingleSelectionAtIndex(n,{forceUpdate:s}))},e.prototype.handleFocusIn=function(n){n>=0&&(this.focusedItemIndex=n,this.adapter.setAttributeForElementIndex(n,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(n,"0"))},e.prototype.handleFocusOut=function(n){var i=this;n>=0&&(this.adapter.setAttributeForElementIndex(n,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(n,"-1")),setTimeout(function(){i.adapter.isFocusInsideList()||i.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.handleKeydown=function(n,i,r){var s=this,o=dn(n)==="ArrowLeft",a=dn(n)==="ArrowUp",l=dn(n)==="ArrowRight",c=dn(n)==="ArrowDown",u=dn(n)==="Home",h=dn(n)==="End",d=dn(n)==="Enter",f=dn(n)==="Spacebar",p=n.key==="A"||n.key==="a";if(this.adapter.isRootFocused()){if(a||h?(n.preventDefault(),this.focusLastElement()):(c||u)&&(n.preventDefault(),this.focusFirstElement()),this.hasTypeahead){var g={event:n,focusItemAtIndex:function(C){s.focusItemAtIndex(C)},focusedItemIndex:-1,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(C){return s.adapter.listItemAtIndexHasClass(C,Ce.LIST_ITEM_DISABLED_CLASS)}};Fy(g,this.typeaheadState)}return}var m=this.adapter.getFocusedElementIndex();if(!(m===-1&&(m=r,m<0))){if(this.isVertical&&c||!this.isVertical&&l)kr(n),this.focusNextElement(m);else if(this.isVertical&&a||!this.isVertical&&o)kr(n),this.focusPrevElement(m);else if(u)kr(n),this.focusFirstElement();else if(h)kr(n),this.focusLastElement();else if(p&&n.ctrlKey&&this.isCheckboxList)n.preventDefault(),this.toggleAll(this.selectedIndex===Ut.UNSET_INDEX?[]:this.selectedIndex);else if((d||f)&&i){var v=n.target;if(v&&v.tagName==="A"&&d||(kr(n),this.adapter.listItemAtIndexHasClass(m,Ce.LIST_ITEM_DISABLED_CLASS)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(m),this.adapter.notifyAction(m))}if(this.hasTypeahead){var g={event:n,focusItemAtIndex:function(w){s.focusItemAtIndex(w)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(w){return s.adapter.listItemAtIndexHasClass(w,Ce.LIST_ITEM_DISABLED_CLASS)}};Fy(g,this.typeaheadState)}}},e.prototype.handleClick=function(n,i){n!==Ut.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(n,Ce.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(n,i),this.adapter.notifyAction(n)))},e.prototype.focusNextElement=function(n){var i=this.adapter.getListItemCount(),r=n+1;if(r>=i)if(this.wrapFocus)r=0;else return n;return this.focusItemAtIndex(r),r},e.prototype.focusPrevElement=function(n){var i=n-1;if(i<0)if(this.wrapFocus)i=this.adapter.getListItemCount()-1;else return n;return this.focusItemAtIndex(i),i},e.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},e.prototype.focusLastElement=function(){var n=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(n),n},e.prototype.focusInitialElement=function(){var n=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(n),n},e.prototype.setEnabled=function(n,i){!this.isIndexValid(n)||(i?(this.adapter.removeClassForElementIndex(n,Ce.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(n,Wi.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(n,Ce.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(n,Wi.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(n,i){var r=i===void 0?{}:i,s=r.forceUpdate;if(!(this.selectedIndex===n&&!s)){var o=Ce.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(o=Ce.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==Ut.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,o),this.setAriaForSingleSelectionAtIndex(n),this.setTabindexAtIndex(n),n!==Ut.UNSET_INDEX&&this.adapter.addClassForElementIndex(n,o),this.selectedIndex=n}},e.prototype.setAriaForSingleSelectionAtIndex=function(n){this.selectedIndex===Ut.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(n,Wi.ARIA_CURRENT));var i=this.ariaCurrentAttrValue!==null,r=i?Wi.ARIA_CURRENT:Wi.ARIA_SELECTED;if(this.selectedIndex!==Ut.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,r,"false"),n!==Ut.UNSET_INDEX){var s=i?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(n,r,s)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?Wi.ARIA_SELECTED:Wi.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(n){var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(n,!0),this.selectedIndex!==Ut.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),this.adapter.setAttributeForElementIndex(n,i,"true"),this.selectedIndex=n},e.prototype.setCheckboxAtIndex=function(n){for(var i=this.getSelectionAttribute(),r=0;r<this.adapter.getListItemCount();r++){var s=!1;n.indexOf(r)>=0&&(s=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(r,s),this.adapter.setAttributeForElementIndex(r,i,s?"true":"false")}this.selectedIndex=n},e.prototype.setTabindexAtIndex=function(n){this.focusedItemIndex===Ut.UNSET_INDEX&&n!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==n&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==n&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),n!==Ut.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(n,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var n=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(n)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==Ut.UNSET_INDEX?this.selectedIndex:uN(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(n,i){return Math.min(n,i)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(n){var i=this;if(n instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return n.length===0?!0:n.some(function(r){return i.isIndexInRange(r)})}else if(typeof n=="number"){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+n);return this.isIndexInRange(n)||this.isSingleSelectionList&&n===Ut.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(n){var i=this.adapter.getListItemCount();return n>=0&&n<i},e.prototype.setSelectedIndexOnAction=function(n,i){i===void 0&&(i=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(n,i):this.setSelectedIndex(n)},e.prototype.toggleCheckboxAtIndex=function(n,i){var r=this.getSelectionAttribute(),s=this.adapter.isCheckboxCheckedAtIndex(n);i&&(s=!s,this.adapter.setCheckedCheckboxOrRadioAtIndex(n,s)),this.adapter.setAttributeForElementIndex(n,r,s?"true":"false");var o=this.selectedIndex===Ut.UNSET_INDEX?[]:this.selectedIndex.slice();s?o.push(n):o=o.filter(function(a){return a!==n}),this.selectedIndex=o},e.prototype.focusItemAtIndex=function(n){this.adapter.focusItemAtIndex(n),this.focusedItemIndex=n},e.prototype.toggleAll=function(n){var i=this.adapter.getListItemCount();if(n.length===i)this.setCheckboxAtIndex([]);else{for(var r=[],s=0;s<i;s++)(!this.adapter.listItemAtIndexHasClass(s,Ce.LIST_ITEM_DISABLED_CLASS)||n.indexOf(s)>-1)&&r.push(s);this.setCheckboxAtIndex(r)}},e.prototype.typeaheadMatchItem=function(n,i,r){var s=this;r===void 0&&(r=!1);var o={focusItemAtIndex:function(a){s.focusItemAtIndex(a)},focusedItemIndex:i||this.focusedItemIndex,nextChar:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:r,isItemAtIndexDisabled:function(a){return s.adapter.listItemAtIndexHasClass(a,Ce.LIST_ITEM_DISABLED_CLASS)}};return xd(o,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return aN(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){Dy(this.typeaheadState)},e}(Wn);/**
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
 */var xy=function(t){bn(e,t);function e(n){var i=t.call(this,ct(ct({},e.defaultAdapter),n))||this;return i.isSurfaceOpen=!1,i.isQuickOpen=!1,i.isHoistedElement=!1,i.isFixedPosition=!1,i.isHorizontallyCenteredOnViewport=!1,i.maxHeight=0,i.openAnimationEndTimerId=0,i.closeAnimationEndTimerId=0,i.animationRequestId=0,i.anchorCorner=Cs.TOP_START,i.originCorner=Cs.TOP_START,i.anchorMargin={top:0,right:0,bottom:0,left:0},i.position={x:0,y:0},i}return Object.defineProperty(e,"cssClasses",{get:function(){return iN},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return rN},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ea},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return Cs},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=e.cssClasses,i=n.ROOT,r=n.OPEN;if(!this.adapter.hasClass(i))throw new Error(i+" class required in root element.");this.adapter.hasClass(r)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(n){this.anchorCorner=n},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^Tt.RIGHT},e.prototype.setAnchorMargin=function(n){this.anchorMargin.top=n.top||0,this.anchorMargin.right=n.right||0,this.anchorMargin.bottom=n.bottom||0,this.anchorMargin.left=n.left||0},e.prototype.setIsHoisted=function(n){this.isHoistedElement=n},e.prototype.setFixedPosition=function(n){this.isFixedPosition=n},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(n,i){this.position.x=this.isFinite(n)?n:0,this.position.y=this.isFinite(i)?i:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(n){this.isHorizontallyCenteredOnViewport=n},e.prototype.setQuickOpen=function(n){this.isQuickOpen=n},e.prototype.setMaxHeight=function(n){this.maxHeight=n},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var n=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){n.dimensions=n.adapter.getInnerDimensions(),n.autoposition(),n.adapter.addClass(e.cssClasses.OPEN),n.openAnimationEndTimerId=setTimeout(function(){n.openAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),n.adapter.notifyOpen()},ea.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},e.prototype.close=function(n){var i=this;if(n===void 0&&(n=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,n||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){i.adapter.removeClass(e.cssClasses.OPEN),i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId=setTimeout(function(){i.closeAnimationEndTimerId=0,i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),i.adapter.notifyClose()},ea.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,n||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(n){var i=n.target;this.adapter.isElementInContainer(i)||this.close()},e.prototype.handleKeydown=function(n){var i=n.keyCode,r=n.key,s=r==="Escape"||i===27;s&&this.close()},e.prototype.autoposition=function(){var n;this.measurements=this.getAutoLayoutmeasurements();var i=this.getoriginCorner(),r=this.getMenuSurfaceMaxHeight(i),s=this.hasBit(i,Tt.BOTTOM)?"bottom":"top",o=this.hasBit(i,Tt.RIGHT)?"right":"left",a=this.getHorizontalOriginOffset(i),l=this.getVerticalOriginOffset(i),c=this.measurements,u=c.anchorSize,h=c.surfaceSize,d=(n={},n[o]=a,n[s]=l,n);u.width/h.width>ea.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(o="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(d),this.adapter.setTransformOrigin(o+" "+s),this.adapter.setPosition(d),this.adapter.setMaxHeight(r?r+"px":""),this.hasBit(i,Tt.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var n=this.adapter.getAnchorDimensions(),i=this.adapter.getBodyDimensions(),r=this.adapter.getWindowDimensions(),s=this.adapter.getWindowScroll();return n||(n={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:n,bodySize:i,surfaceSize:this.dimensions,viewportDistance:{top:n.top,right:r.width-n.right,bottom:r.height-n.bottom,left:n.left},viewportSize:r,windowScroll:s}},e.prototype.getoriginCorner=function(){var n=this.originCorner,i=this.measurements,r=i.viewportDistance,s=i.anchorSize,o=i.surfaceSize,a=e.numbers.MARGIN_TO_EDGE,l=this.hasBit(this.anchorCorner,Tt.BOTTOM),c,u;l?(c=r.top-a+this.anchorMargin.bottom,u=r.bottom-a-this.anchorMargin.bottom):(c=r.top-a+this.anchorMargin.top,u=r.bottom-a+s.height-this.anchorMargin.top);var h=u-o.height>0;!h&&c>u&&(n=this.setBit(n,Tt.BOTTOM));var d=this.adapter.isRtl(),f=this.hasBit(this.anchorCorner,Tt.FLIP_RTL),p=this.hasBit(this.anchorCorner,Tt.RIGHT)||this.hasBit(n,Tt.RIGHT),g=!1;d&&f?g=!p:g=p;var m,v;g?(m=r.left+s.width+this.anchorMargin.right,v=r.right-this.anchorMargin.right):(m=r.left+this.anchorMargin.left,v=r.right+s.width-this.anchorMargin.left);var C=m-o.width>0,w=v-o.width>0,y=this.hasBit(n,Tt.FLIP_RTL)&&this.hasBit(n,Tt.RIGHT);return w&&y&&d||!C&&y?n=this.unsetBit(n,Tt.RIGHT):(C&&g&&d||C&&!g&&p||!w&&m>=v)&&(n=this.setBit(n,Tt.RIGHT)),n},e.prototype.getMenuSurfaceMaxHeight=function(n){if(this.maxHeight>0)return this.maxHeight;var i=this.measurements.viewportDistance,r=0,s=this.hasBit(n,Tt.BOTTOM),o=this.hasBit(this.anchorCorner,Tt.BOTTOM),a=e.numbers.MARGIN_TO_EDGE;return s?(r=i.top+this.anchorMargin.top-a,o||(r+=this.measurements.anchorSize.height)):(r=i.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-a,o&&(r-=this.measurements.anchorSize.height)),r},e.prototype.getHorizontalOriginOffset=function(n){var i=this.measurements.anchorSize,r=this.hasBit(n,Tt.RIGHT),s=this.hasBit(this.anchorCorner,Tt.RIGHT);if(r){var o=s?i.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?o-(this.measurements.viewportSize.width-this.measurements.bodySize.width):o}return s?i.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(n){var i=this.measurements.anchorSize,r=this.hasBit(n,Tt.BOTTOM),s=this.hasBit(this.anchorCorner,Tt.BOTTOM),o=0;return r?o=s?i.height-this.anchorMargin.top:-this.anchorMargin.bottom:o=s?i.height+this.anchorMargin.bottom:this.anchorMargin.top,o},e.prototype.adjustPositionForHoistedElement=function(n){var i,r,s=this.measurements,o=s.windowScroll,a=s.viewportDistance,l=s.surfaceSize,c=s.viewportSize,u=Object.keys(n);try{for(var h=Vn(u),d=h.next();!d.done;d=h.next()){var f=d.value,p=n[f]||0;if(this.isHorizontallyCenteredOnViewport&&(f==="left"||f==="right")){n[f]=(c.width-l.width)/2;continue}p+=a[f],this.isFixedPosition||(f==="top"?p+=o.y:f==="bottom"?p-=o.y:f==="left"?p+=o.x:p-=o.x),n[f]=p}}catch(g){i={error:g}}finally{try{d&&!d.done&&(r=h.return)&&r.call(h)}finally{if(i)throw i.error}}},e.prototype.maybeRestoreFocus=function(){var n=this,i=this.adapter.isFocused(),r=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(i||r)&&setTimeout(function(){n.adapter.restoreFocus()},ea.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(n,i){return Boolean(n&i)},e.prototype.setBit=function(n,i){return n|i},e.prototype.unsetBit=function(n,i){return n^i},e.prototype.isFinite=function(n){return typeof n=="number"&&isFinite(n)},e}(Wn);/**
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
 */var Uy={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function dN(t){return Boolean(t.document)&&typeof t.document.createElement=="function"}function fN(t,e){if(dN(t)&&e in Uy){var n=t.document.createElement("div"),i=Uy[e],r=i.standard,s=i.prefixed,o=r in n.style;return o?r:s}return e}/**
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
 */var As={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},ks={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},pN={FOCUS_ROOT_INDEX:-1},Rs;(function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"})(Rs||(Rs={}));/**
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
 */var mN=function(t){bn(e,t);function e(n){var i=t.call(this,ct(ct({},e.defaultAdapter),n))||this;return i.closeAnimationEndTimerId=0,i.defaultFocusState=Rs.LIST_ROOT,i.selectedIndex=-1,i}return Object.defineProperty(e,"cssClasses",{get:function(){return As},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ks},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return pN},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},e.prototype.handleKeydown=function(n){var i=n.key,r=n.keyCode,s=i==="Tab"||r===9;s&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(n){var i=this,r=this.adapter.getElementIndex(n);if(!(r<0)){this.adapter.notifySelected({index:r});var s=this.adapter.getAttributeFromElementAtIndex(r,ks.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(s),this.closeAnimationEndTimerId=setTimeout(function(){var o=i.adapter.getElementIndex(n);o>=0&&i.adapter.isSelectableItemAtIndex(o)&&i.setSelectedIndex(o)},xy.numbers.TRANSITION_CLOSE_DURATION)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case Rs.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Rs.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Rs.NONE:break;default:this.adapter.focusListRoot();break}},e.prototype.setDefaultFocusState=function(n){this.defaultFocusState=n},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(n){if(this.validatedIndex(n),!this.adapter.isSelectableItemAtIndex(n))throw new Error("MDCMenuFoundation: No selection group at specified index.");var i=this.adapter.getSelectedSiblingOfItemAtIndex(n);i>=0&&(this.adapter.removeAttributeFromElementAtIndex(i,ks.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(i,As.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(n,As.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(n,ks.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=n},e.prototype.setEnabled=function(n,i){this.validatedIndex(n),i?(this.adapter.removeClassFromElementAtIndex(n,Ce.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(n,ks.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(n,Ce.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(n,ks.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(n){var i=this.adapter.getMenuItemCount(),r=n>=0&&n<i;if(!r)throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(Wn);const{document:gN}=D0;function _N(t){let e,n,i,r,s,o,a,l;const c=t[30].default,u=Ne(c,t,t[29],null);let h=[{class:i=be(Ge({[t[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":t[5],"mdc-menu-surface--open":t[4],"smui-menu-surface--static":t[4],"mdc-menu-surface--fullwidth":t[6]},t[9]))},{style:r=Object.entries(t[10]).map(Vy).concat([t[3]]).join(" ")},t[12]],d={};for(let f=0;f<h.length;f+=1)d=B(d,h[f]);return{c(){e=Xe(),n=pe("div"),u&&u.c(),this.h()},l(f){e=Qe(f),n=_e(f,"DIV",{class:!0,style:!0});var p=ne(n);u&&u.l(p),p.forEach(N),this.h()},h(){ce(n,d)},m(f,p){re(f,e,p),re(f,n,p),u&&u.m(n,null),t[32](n),o=!0,a||(l=[it(gN.body,"click",t[31],!0),ae(s=pt.call(null,n,t[1])),ae(t[11].call(null,n)),it(n,"keydown",t[33])],a=!0)},p(f,p){u&&u.p&&(!o||p[0]&536870912)&&Pe(u,c,f,f[29],o?Me(c,f[29],p,null):De(f[29]),null),ce(n,d=ke(h,[(!o||p[0]&628&&i!==(i=be(Ge({[f[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":f[5],"mdc-menu-surface--open":f[4],"smui-menu-surface--static":f[4],"mdc-menu-surface--fullwidth":f[6]},f[9]))))&&{class:i},(!o||p[0]&1032&&r!==(r=Object.entries(f[10]).map(Vy).concat([f[3]]).join(" ")))&&{style:r},p[0]&4096&&f[12]])),s&&qe(s.update)&&p[0]&2&&s.update.call(null,f[1])},i(f){o||(j(u,f),o=!0)},o(f){W(u,f),o=!1},d(f){f&&N(e),f&&N(n),u&&u.d(f),t[32](null),a=!1,ze(l)}}}const Vy=([t,e])=>`${t}: ${e};`;function vN(t,e,n){const i=["use","class","style","static","anchor","fixed","open","fullWidth","quickOpen","anchorElement","anchorCorner","anchorMargin","maxHeight","horizontallyCenteredOnViewport","isOpen","setOpen","setAbsolutePosition","setIsHoisted","isFixed","getElement"];let r=se(e,i),{$$slots:s={},$$scope:o}=e;var a,l,c;const u=st(Ue());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{static:p=!1}=e,{anchor:g=!0}=e,{fixed:m=!1}=e,{open:v=p}=e,{fullWidth:C=!1}=e,{quickOpen:w=!1}=e,{anchorElement:y=void 0}=e,{anchorCorner:R=void 0}=e,{anchorMargin:k={top:0,right:0,bottom:0,left:0}}=e,{maxHeight:_=0}=e,{horizontallyCenteredOnViewport:I=!1}=e,U,b,L={},M={},E;Dt("SMUI:list:role","menu"),Dt("SMUI:list:item:role","menuitem");const P=Cs;Sn(()=>(n(8,b=new xy({addClass:z,removeClass:S,hasClass:O,hasAnchor:()=>!!y,notifyClose:()=>{n(0,v=p),v||rt(U,"SMUIMenuSurface:closed",void 0,void 0,!0)},notifyClosing:()=>{n(0,v=p),v||rt(U,"SMUIMenuSurface:closing",void 0,void 0,!0)},notifyOpen:()=>{n(0,v=!0),rt(U,"SMUIMenuSurface:opened",void 0,void 0,!0)},isElementInContainer:ge=>U.contains(ge),isRtl:()=>getComputedStyle(U).getPropertyValue("direction")==="rtl",setTransformOrigin:ge=>{const ht=`${fN(window,"transform")}-origin`;n(10,M[ht]=ge,M)},isFocused:()=>document.activeElement===U,saveFocus:()=>{var ge;E=(ge=document.activeElement)!==null&&ge!==void 0?ge:void 0},restoreFocus:()=>{U.contains(document.activeElement)&&E&&"focus"in E&&E.focus()},getInnerDimensions:()=>({width:U.offsetWidth,height:U.offsetHeight}),getAnchorDimensions:()=>y?y.getBoundingClientRect():null,getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:ge=>{n(10,M.left="left"in ge?`${ge.left}px`:"",M),n(10,M.right="right"in ge?`${ge.right}px`:"",M),n(10,M.top="top"in ge?`${ge.top}px`:"",M),n(10,M.bottom="bottom"in ge?`${ge.bottom}px`:"",M)},setMaxHeight:ge=>{n(10,M.maxHeight=ge,M)}})),rt(U,"SMUIMenuSurface:mount",{get open(){return v},set open(ge){n(0,v=ge)},closeProgrammatic:A}),b.init(),()=>{var ge;const ht=b.isHoistedElement;b.destroy(),ht&&((ge=U.parentNode)===null||ge===void 0||ge.removeChild(U))})),nr(()=>{var X;g&&U&&((X=U.parentElement)===null||X===void 0||X.classList.remove("mdc-menu-surface--anchor"))});function O(X){return X in L?L[X]:Le().classList.contains(X)}function z(X){L[X]||n(9,L[X]=!0,L)}function S(X){(!(X in L)||L[X])&&n(9,L[X]=!1,L)}function A(X){b.close(X),n(0,v=!1)}function K(){return v}function H(X){n(0,v=X)}function Q(X,ge){return b.setAbsolutePosition(X,ge)}function me(X){return b.setIsHoisted(X)}function q(){return b.isFixed()}function Le(){return U}const Te=X=>b&&v&&b.handleBodyClick(X);function Ee(X){de[X?"unshift":"push"](()=>{U=X,n(7,U)})}const Se=X=>b&&b.handleKeydown(X);return t.$$set=X=>{e=B(B({},e),$e(X)),n(12,r=se(e,i)),"use"in X&&n(1,h=X.use),"class"in X&&n(2,d=X.class),"style"in X&&n(3,f=X.style),"static"in X&&n(4,p=X.static),"anchor"in X&&n(14,g=X.anchor),"fixed"in X&&n(5,m=X.fixed),"open"in X&&n(0,v=X.open),"fullWidth"in X&&n(6,C=X.fullWidth),"quickOpen"in X&&n(15,w=X.quickOpen),"anchorElement"in X&&n(13,y=X.anchorElement),"anchorCorner"in X&&n(16,R=X.anchorCorner),"anchorMargin"in X&&n(17,k=X.anchorMargin),"maxHeight"in X&&n(18,_=X.maxHeight),"horizontallyCenteredOnViewport"in X&&n(19,I=X.horizontallyCenteredOnViewport),"$$scope"in X&&n(29,o=X.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&469778560&&U&&g&&!(n(26,a=U.parentElement)===null||a===void 0?void 0:a.classList.contains("mdc-menu-surface--anchor"))&&(n(27,l=U.parentElement)===null||l===void 0||l.classList.add("mdc-menu-surface--anchor"),n(13,y=n(28,c=U.parentElement)!==null&&c!==void 0?c:void 0)),t.$$.dirty[0]&257&&b&&b.isOpen()!==v&&(v?b.open():b.close()),t.$$.dirty[0]&33024&&b&&b.setQuickOpen(w),t.$$.dirty[0]&288&&b&&b.setFixedPosition(m),t.$$.dirty[0]&262400&&b&&_>0&&b.setMaxHeight(_),t.$$.dirty[0]&524544&&b&&b.setIsHorizontallyCenteredOnViewport(I),t.$$.dirty[0]&65792&&b&&R!=null&&(typeof R=="string"?b.setAnchorCorner(P[R]):b.setAnchorCorner(R)),t.$$.dirty[0]&131328&&b&&b.setAnchorMargin(k)},[v,h,d,f,p,m,C,U,b,L,M,u,r,y,g,w,R,k,_,I,K,H,Q,me,q,Le,a,l,c,o,s,Te,Ee,Se]}class yN extends tt{constructor(e){super();et(this,e,vN,_N,Ke,{use:1,class:2,style:3,static:4,anchor:14,fixed:5,open:0,fullWidth:6,quickOpen:15,anchorElement:13,anchorCorner:16,anchorMargin:17,maxHeight:18,horizontallyCenteredOnViewport:19,isOpen:20,setOpen:21,setAbsolutePosition:22,setIsHoisted:23,isFixed:24,getElement:25},null,[-1,-1])}get isOpen(){return this.$$.ctx[20]}get setOpen(){return this.$$.ctx[21]}get setAbsolutePosition(){return this.$$.ctx[22]}get setIsHoisted(){return this.$$.ctx[23]}get isFixed(){return this.$$.ctx[24]}get getElement(){return this.$$.ctx[25]}}function bN(t){let e;const n=t[16].default,i=Ne(n,t,t[21],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&2097152)&&Pe(i,n,r,r[21],e?Me(n,r[21],s,null):De(r[21]),null)},i(r){e||(j(i,r),e=!0)},o(r){W(i,r),e=!1},d(r){i&&i.d(r)}}}function EN(t){let e,n,i;const r=[{use:t[5]},{class:be({[t[1]]:!0,"mdc-menu":!0})},t[9]];function s(a){t[18](a)}let o={$$slots:{default:[bN]},$$scope:{ctx:t}};for(let a=0;a<r.length;a+=1)o=B(o,r[a]);return t[0]!==void 0&&(o.open=t[0]),e=new yN({props:o}),t[17](e),de.push(()=>Ci(e,"open",s)),e.$on("SMUIMenuSurface:mount",t[7]),e.$on("SMUIList:mount",t[8]),e.$on("SMUIMenuSurface:opened",t[19]),e.$on("keydown",t[6]),e.$on("SMUIList:action",t[20]),{c(){wt(e.$$.fragment)},l(a){jt(e.$$.fragment,a)},m(a,l){bt(e,a,l),i=!0},p(a,[l]){const c=l&546?ke(r,[l&32&&{use:a[5]},l&2&&{class:be({[a[1]]:!0,"mdc-menu":!0})},l&512&&yt(a[9])]):{};l&2097152&&(c.$$scope={dirty:l,ctx:a}),!n&&l&1&&(n=!0,c.open=a[0],Ti(()=>n=!1)),e.$set(c)},i(a){i||(j(e.$$.fragment,a),i=!0)},o(a){W(e.$$.fragment,a),i=!1},d(a){t[17](null),Et(e,a)}}}function IN(t,e,n){let i;const r=["use","class","open","isOpen","setOpen","setDefaultFocusState","getSelectedIndex","getElement"];let s=se(e,r),{$$slots:o={},$$scope:a}=e;const{closest:l}=Pd,c=st(Ue());let{use:u=[]}=e,{class:h=""}=e,{open:d=!1}=e,f,p,g,m;Sn(()=>(n(3,p=new mN({addClassToElementAtIndex:(E,P)=>{m.addClassForElementIndex(E,P)},removeClassFromElementAtIndex:(E,P)=>{m.removeClassForElementIndex(E,P)},addAttributeToElementAtIndex:(E,P,O)=>{m.setAttributeForElementIndex(E,P,O)},removeAttributeFromElementAtIndex:(E,P)=>{m.removeAttributeForElementIndex(E,P)},getAttributeFromElementAtIndex:(E,P)=>m.getAttributeFromElementIndex(E,P),elementContainsClass:(E,P)=>E.classList.contains(P),closeSurface:E=>g.closeProgrammatic(E),getElementIndex:E=>m.getOrderedList().map(P=>P.element).indexOf(E),notifySelected:E=>rt(I(),"SMUIMenu:selected",{index:E.index,item:m.getOrderedList()[E.index].element},void 0,!0),getMenuItemCount:()=>m.items.length,focusItemAtIndex:E=>m.focusItemAtIndex(E),focusListRoot:()=>"focus"in m.element&&m.element.focus(),isSelectableItemAtIndex:E=>!!l(m.getOrderedList()[E].element,`.${As.MENU_SELECTION_GROUP}`),getSelectedSiblingOfItemAtIndex:E=>{const P=m.getOrderedList(),O=l(P[E].element,`.${As.MENU_SELECTION_GROUP}`),z=O==null?void 0:O.querySelector(`.${As.MENU_SELECTED_LIST_ITEM}`);return z?P.map(S=>S.element).indexOf(z):-1}})),rt(I(),"SMUIMenu:mount",p),p.init(),()=>{p.destroy()}));function v(E){p&&p.handleKeydown(E)}function C(E){g||(g=E.detail)}function w(E){m||n(4,m=E.detail)}function y(){return d}function R(E){n(0,d=E)}function k(E){p.setDefaultFocusState(E)}function _(){return p.getSelectedIndex()}function I(){return f.getElement()}function U(E){de[E?"unshift":"push"](()=>{f=E,n(2,f)})}function b(E){d=E,n(0,d)}const L=()=>p&&p.handleMenuSurfaceOpened(),M=E=>p&&p.handleItemAction(m.getOrderedList()[E.detail.index].element);return t.$$set=E=>{e=B(B({},e),$e(E)),n(9,s=se(e,r)),"use"in E&&n(10,u=E.use),"class"in E&&n(1,h=E.class),"open"in E&&n(0,d=E.open),"$$scope"in E&&n(21,a=E.$$scope)},t.$$.update=()=>{t.$$.dirty&1024&&n(5,i=[c,...u])},[d,h,f,p,m,i,v,C,w,s,u,y,R,k,_,I,o,U,b,L,M,a]}class Rj extends tt{constructor(e){super();et(this,e,IN,EN,Ke,{use:10,class:1,open:0,isOpen:11,setOpen:12,setDefaultFocusState:13,getSelectedIndex:14,getElement:15})}get isOpen(){return this.$$.ctx[11]}get setOpen(){return this.$$.ctx[12]}get setDefaultFocusState(){return this.$$.ctx[13]}get getSelectedIndex(){return this.$$.ctx[14]}get getElement(){return this.$$.ctx[15]}}function wN(t){let e;const n=t[37].default,i=Ne(n,t,t[43],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[1]&4096)&&Pe(i,n,r,r[43],e?Me(n,r[43],s,null):De(r[43]),null)},i(r){e||(j(i,r),e=!0)},o(r){W(i,r),e=!1},d(r){i&&i.d(r)}}}function TN(t){let e,n,i;const r=[{use:[t[17],...t[0]]},{class:be({[t[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":t[2],"mdc-deprecated-list--dense":t[3],"mdc-deprecated-list--textual-list":t[4],"mdc-deprecated-list--avatar-list":t[5]||t[18],"mdc-deprecated-list--icon-list":t[6],"mdc-deprecated-list--image-list":t[7],"mdc-deprecated-list--thumbnail-list":t[8],"mdc-deprecated-list--video-list":t[9],"mdc-deprecated-list--two-line":t[10],"smui-list--three-line":t[11]&&!t[10]})},{role:t[15]},t[23]];var s=t[12];function o(a){let l={$$slots:{default:[wN]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=B(l,r[c]);return{props:l}}return s&&(e=new s(o(t)),t[38](e),e.$on("keydown",t[39]),e.$on("focusin",t[40]),e.$on("focusout",t[41]),e.$on("click",t[42]),e.$on("SMUIListItem:mount",t[19]),e.$on("SMUIListItem:unmount",t[20]),e.$on("SMUI:action",t[21])),{c(){e&&wt(e.$$.fragment),n=Rt()},l(a){e&&jt(e.$$.fragment,a),n=Rt()},m(a,l){e&&bt(e,a,l),re(a,n,l),i=!0},p(a,l){const c=l[0]&8818687?ke(r,[l[0]&131073&&{use:[a[17],...a[0]]},l[0]&266238&&{class:be({[a[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":a[2],"mdc-deprecated-list--dense":a[3],"mdc-deprecated-list--textual-list":a[4],"mdc-deprecated-list--avatar-list":a[5]||a[18],"mdc-deprecated-list--icon-list":a[6],"mdc-deprecated-list--image-list":a[7],"mdc-deprecated-list--thumbnail-list":a[8],"mdc-deprecated-list--video-list":a[9],"mdc-deprecated-list--two-line":a[10],"smui-list--three-line":a[11]&&!a[10]})},l[0]&32768&&{role:a[15]},l[0]&8388608&&yt(a[23])]):{};if(l[1]&4096&&(c.$$scope={dirty:l,ctx:a}),s!==(s=a[12])){if(e){rn();const u=e;W(u.$$.fragment,1,0,()=>{Et(u,1)}),sn()}s?(e=new s(o(a)),a[38](e),e.$on("keydown",a[39]),e.$on("focusin",a[40]),e.$on("focusout",a[41]),e.$on("click",a[42]),e.$on("SMUIListItem:mount",a[19]),e.$on("SMUIListItem:unmount",a[20]),e.$on("SMUI:action",a[21]),wt(e.$$.fragment),j(e.$$.fragment,1),bt(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(a){i||(e&&j(e.$$.fragment,a),i=!0)},o(a){e&&W(e.$$.fragment,a),i=!1},d(a){t[38](null),a&&N(n),e&&Et(e,a)}}}function CN(t,e,n){const i=["use","class","nonInteractive","dense","textualList","avatarList","iconList","imageList","thumbnailList","videoList","twoLine","threeLine","vertical","wrapFocus","singleSelection","selectedIndex","radioList","checkList","hasTypeahead","component","layout","setEnabled","getTypeaheadInProgress","getSelectedIndex","getFocusedItemIndex","getElement"];let r=se(e,i),{$$slots:s={},$$scope:o}=e;var a;const{closest:l,matches:c}=Pd,u=st(Ue());let{use:h=[]}=e,{class:d=""}=e,{nonInteractive:f=!1}=e,{dense:p=!1}=e,{textualList:g=!1}=e,{avatarList:m=!1}=e,{iconList:v=!1}=e,{imageList:C=!1}=e,{thumbnailList:w=!1}=e,{videoList:y=!1}=e,{twoLine:R=!1}=e,{threeLine:k=!1}=e,{vertical:_=!0}=e,{wrapFocus:I=(a=mn("SMUI:list:wrapFocus"))!==null&&a!==void 0?a:!1}=e,{singleSelection:U=!1}=e,{selectedIndex:b=-1}=e,{radioList:L=!1}=e,{checkList:M=!1}=e,{hasTypeahead:E=!1}=e,P,O,z=[],S=mn("SMUI:list:role"),A=mn("SMUI:list:nav");const K=new WeakMap;let H=mn("SMUI:dialog:selection"),Q=mn("SMUI:addLayoutListener"),me,{component:q=A?AO:kO}=e;Dt("SMUI:list:nonInteractive",f),Dt("SMUI:separator:context","list"),S||(U?(S="listbox",Dt("SMUI:list:item:role","option")):L?(S="radiogroup",Dt("SMUI:list:item:role","radio")):M?(S="group",Dt("SMUI:list:item:role","checkbox")):(S="list",Dt("SMUI:list:item:role",void 0))),Q&&(me=Q(qn)),Sn(()=>{n(13,O=new hN({addClassForElementIndex:ht,focusItemAtIndex:X,getAttributeForElementIndex:(oe,ie)=>{var at,tr;return(tr=(at=Se()[oe])===null||at===void 0?void 0:at.getAttr(ie))!==null&&tr!==void 0?tr:null},getFocusedElementIndex:()=>document.activeElement?Se().map(oe=>oe.element).indexOf(document.activeElement):-1,getListItemCount:()=>z.length,getPrimaryTextAtIndex:dt,hasCheckboxAtIndex:oe=>{var ie,at;return(at=(ie=Se()[oe])===null||ie===void 0?void 0:ie.hasCheckbox)!==null&&at!==void 0?at:!1},hasRadioAtIndex:oe=>{var ie,at;return(at=(ie=Se()[oe])===null||ie===void 0?void 0:ie.hasRadio)!==null&&at!==void 0?at:!1},isCheckboxCheckedAtIndex:oe=>{var ie;const at=Se()[oe];return(ie=(at==null?void 0:at.hasCheckbox)&&at.checked)!==null&&ie!==void 0?ie:!1},isFocusInsideList:()=>P!=null&&Zn()!==document.activeElement&&Zn().contains(document.activeElement),isRootFocused:()=>P!=null&&document.activeElement===Zn(),listItemAtIndexHasClass:ge,notifyAction:oe=>{n(24,b=oe),P!=null&&rt(Zn(),"SMUIList:action",{index:oe},void 0,!0)},removeClassForElementIndex:tn,setAttributeForElementIndex:Mt,setCheckedCheckboxOrRadioAtIndex:(oe,ie)=>{Se()[oe].checked=ie},setTabIndexForListItemChildren:(oe,ie)=>{const at=Se()[oe],tr="button:not(:disabled), a";Array.prototype.forEach.call(at.element.querySelectorAll(tr),_u=>{_u.setAttribute("tabindex",ie)})}}));const x={get element(){return Zn()},get items(){return z},get typeaheadInProgress(){return O.isTypeaheadInProgress()},typeaheadMatchItem(oe,ie){return O.typeaheadMatchItem(oe,ie,!0)},getOrderedList:Se,focusItemAtIndex:X,addClassForElementIndex:ht,removeClassForElementIndex:tn,setAttributeForElementIndex:Mt,removeAttributeForElementIndex:V,getAttributeFromElementIndex:ye,getPrimaryTextAtIndex:dt};return rt(Zn(),"SMUIList:mount",x),O.init(),()=>{O.destroy()}}),nr(()=>{me&&me()});function Le(x){z.push(x.detail),K.set(x.detail.element,x.detail),U&&x.detail.selected&&n(24,b=nn(x.detail.element)),x.stopPropagation()}function Te(x){var oe;const ie=(oe=x.detail&&z.indexOf(x.detail))!==null&&oe!==void 0?oe:-1;ie!==-1&&(z.splice(ie,1),z=z,K.delete(x.detail.element)),x.stopPropagation()}function Ee(x){if(L||M){const oe=nn(x.target);if(oe!==-1){const ie=Se()[oe];ie&&(L&&!ie.checked||M)&&(ie.checked=!ie.checked,ie.activateRipple(),window.requestAnimationFrame(()=>{ie.deactivateRipple()}))}}}function Se(){return P==null?[]:[...Zn().children].map(x=>K.get(x)).filter(x=>x&&x._smui_list_item_accessor)}function X(x){const oe=Se()[x];oe&&"focus"in oe.element&&oe.element.focus()}function ge(x,oe){var ie;const at=Se()[x];return(ie=at&&at.hasClass(oe))!==null&&ie!==void 0?ie:!1}function ht(x,oe){const ie=Se()[x];ie&&ie.addClass(oe)}function tn(x,oe){const ie=Se()[x];ie&&ie.removeClass(oe)}function Mt(x,oe,ie){const at=Se()[x];at&&at.addAttr(oe,ie)}function V(x,oe){const ie=Se()[x];ie&&ie.removeAttr(oe)}function ye(x,oe){const ie=Se()[x];return ie?ie.getAttr(oe):null}function dt(x){var oe;const ie=Se()[x];return(oe=ie&&ie.getPrimaryText())!==null&&oe!==void 0?oe:""}function nn(x){const oe=l(x,".mdc-deprecated-list-item, .mdc-deprecated-list");return oe&&c(oe,".mdc-deprecated-list-item")?Se().map(ie=>ie==null?void 0:ie.element).indexOf(oe):-1}function qn(){return O.layout()}function Ii(x,oe){return O.setEnabled(x,oe)}function fu(){return O.isTypeaheadInProgress()}function $s(){return O.getSelectedIndex()}function Pa(){return O.getFocusedItemIndex()}function Zn(){return P.getElement()}function pu(x){de[x?"unshift":"push"](()=>{P=x,n(14,P)})}const Da=x=>O&&O.handleKeydown(x,x.target.classList.contains("mdc-deprecated-list-item"),nn(x.target)),Xr=x=>O&&O.handleFocusIn(nn(x.target)),mu=x=>O&&O.handleFocusOut(nn(x.target)),gu=x=>O&&O.handleClick(nn(x.target),!c(x.target,'input[type="checkbox"], input[type="radio"]'));return t.$$set=x=>{e=B(B({},e),$e(x)),n(23,r=se(e,i)),"use"in x&&n(0,h=x.use),"class"in x&&n(1,d=x.class),"nonInteractive"in x&&n(2,f=x.nonInteractive),"dense"in x&&n(3,p=x.dense),"textualList"in x&&n(4,g=x.textualList),"avatarList"in x&&n(5,m=x.avatarList),"iconList"in x&&n(6,v=x.iconList),"imageList"in x&&n(7,C=x.imageList),"thumbnailList"in x&&n(8,w=x.thumbnailList),"videoList"in x&&n(9,y=x.videoList),"twoLine"in x&&n(10,R=x.twoLine),"threeLine"in x&&n(11,k=x.threeLine),"vertical"in x&&n(25,_=x.vertical),"wrapFocus"in x&&n(26,I=x.wrapFocus),"singleSelection"in x&&n(27,U=x.singleSelection),"selectedIndex"in x&&n(24,b=x.selectedIndex),"radioList"in x&&n(28,L=x.radioList),"checkList"in x&&n(29,M=x.checkList),"hasTypeahead"in x&&n(30,E=x.hasTypeahead),"component"in x&&n(12,q=x.component),"$$scope"in x&&n(43,o=x.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&33562624&&O&&O.setVerticalOrientation(_),t.$$.dirty[0]&67117056&&O&&O.setWrapFocus(I),t.$$.dirty[0]&1073750016&&O&&O.setHasTypeahead(E),t.$$.dirty[0]&134225920&&O&&O.setSingleSelection(U),t.$$.dirty[0]&151003136&&O&&U&&$s()!==b&&O.setSelectedIndex(b)},[h,d,f,p,g,m,v,C,w,y,R,k,q,O,P,S,c,u,H,Le,Te,Ee,nn,r,b,_,I,U,L,M,E,qn,Ii,fu,$s,Pa,Zn,s,pu,Da,Xr,mu,gu,o]}class Oj extends tt{constructor(e){super();et(this,e,CN,TN,Ke,{use:0,class:1,nonInteractive:2,dense:3,textualList:4,avatarList:5,iconList:6,imageList:7,thumbnailList:8,videoList:9,twoLine:10,threeLine:11,vertical:25,wrapFocus:26,singleSelection:27,selectedIndex:24,radioList:28,checkList:29,hasTypeahead:30,component:12,layout:31,setEnabled:32,getTypeaheadInProgress:33,getSelectedIndex:34,getFocusedItemIndex:35,getElement:36},null,[-1,-1])}get layout(){return this.$$.ctx[31]}get setEnabled(){return this.$$.ctx[32]}get getTypeaheadInProgress(){return this.$$.ctx[33]}get getSelectedIndex(){return this.$$.ctx[34]}get getFocusedItemIndex(){return this.$$.ctx[35]}get getElement(){return this.$$.ctx[36]}}function jy(t){let e;return{c(){e=pe("span"),this.h()},l(n){e=_e(n,"SPAN",{class:!0}),ne(e).forEach(N),this.h()},h(){J(e,"class","mdc-deprecated-list-item__ripple")},m(n,i){re(n,e,i)},d(n){n&&N(e)}}}function SN(t){let e,n,i=t[6]&&jy();const r=t[32].default,s=Ne(r,t,t[35],null);return{c(){i&&i.c(),e=Rt(),s&&s.c()},l(o){i&&i.l(o),e=Rt(),s&&s.l(o)},m(o,a){i&&i.m(o,a),re(o,e,a),s&&s.m(o,a),n=!0},p(o,a){o[6]?i||(i=jy(),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),s&&s.p&&(!n||a[1]&16)&&Pe(s,r,o,o[35],n?Me(r,o[35],a,null):De(o[35]),null)},i(o){n||(j(s,o),n=!0)},o(o){W(s,o),n=!1},d(o){i&&i.d(o),o&&N(e),s&&s.d(o)}}}function AN(t){let e,n,i;const r=[{use:[...t[5]?[]:[[Tr,{ripple:!t[13],unbounded:!1,color:(t[7]||t[0])&&t[4]==null?"primary":t[4],disabled:t[9],addClass:t[21],removeClass:t[22],addStyle:t[23]}]],t[19],...t[1]]},{class:be(Ge({[t[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":t[7],"mdc-deprecated-list-item--selected":t[0],"mdc-deprecated-list-item--disabled":t[9],"mdc-menu-item--selected":!t[20]&&t[8]==="menuitem"&&t[0],"smui-menu-item--non-interactive":t[5]},t[15]))},{style:Object.entries(t[16]).map(By).concat([t[3]]).join(" ")},t[20]&&t[7]?{"aria-current":"page"}:{},t[20]?{}:{role:t[8]},!t[20]&&t[8]==="option"?{"aria-selected":t[0]?"true":"false"}:{},!t[20]&&(t[8]==="radio"||t[8]==="checkbox")?{"aria-checked":t[13]&&t[13].checked?"true":"false"}:{},t[20]?{}:{"aria-disabled":t[9]?"true":"false"},{"data-menu-item-skip-restore-focus":t[10]||void 0},{tabindex:t[18]},{href:t[11]},t[17],t[27]];var s=t[12];function o(a){let l={$$slots:{default:[SN]},$$scope:{ctx:a}};for(let c=0;c<r.length;c+=1)l=B(l,r[c]);return{props:l}}return s&&(e=new s(o(t)),t[33](e),e.$on("click",t[24]),e.$on("keydown",t[25]),e.$on("SMUIGenericInput:mount",t[26]),e.$on("SMUIGenericInput:unmount",t[34])),{c(){e&&wt(e.$$.fragment),n=Rt()},l(a){e&&jt(e.$$.fragment,a),n=Rt()},m(a,l){e&&bt(e,a,l),re(a,n,l),i=!0},p(a,l){const c=l[0]&150974399?ke(r,[l[0]&15213235&&{use:[...a[5]?[]:[[Tr,{ripple:!a[13],unbounded:!1,color:(a[7]||a[0])&&a[4]==null?"primary":a[4],disabled:a[9],addClass:a[21],removeClass:a[22],addStyle:a[23]}]],a[19],...a[1]]},l[0]&1082277&&{class:be(Ge({[a[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":a[7],"mdc-deprecated-list-item--selected":a[0],"mdc-deprecated-list-item--disabled":a[9],"mdc-menu-item--selected":!a[20]&&a[8]==="menuitem"&&a[0],"smui-menu-item--non-interactive":a[5]},a[15]))},l[0]&65544&&{style:Object.entries(a[16]).map(By).concat([a[3]]).join(" ")},l[0]&1048704&&yt(a[20]&&a[7]?{"aria-current":"page"}:{}),l[0]&1048832&&yt(a[20]?{}:{role:a[8]}),l[0]&1048833&&yt(!a[20]&&a[8]==="option"?{"aria-selected":a[0]?"true":"false"}:{}),l[0]&1057024&&yt(!a[20]&&(a[8]==="radio"||a[8]==="checkbox")?{"aria-checked":a[13]&&a[13].checked?"true":"false"}:{}),l[0]&1049088&&yt(a[20]?{}:{"aria-disabled":a[9]?"true":"false"}),l[0]&1024&&{"data-menu-item-skip-restore-focus":a[10]||void 0},l[0]&262144&&{tabindex:a[18]},l[0]&2048&&{href:a[11]},l[0]&131072&&yt(a[17]),l[0]&134217728&&yt(a[27])]):{};if(l[0]&64|l[1]&16&&(c.$$scope={dirty:l,ctx:a}),s!==(s=a[12])){if(e){rn();const u=e;W(u.$$.fragment,1,0,()=>{Et(u,1)}),sn()}s?(e=new s(o(a)),a[33](e),e.$on("click",a[24]),e.$on("keydown",a[25]),e.$on("SMUIGenericInput:mount",a[26]),e.$on("SMUIGenericInput:unmount",a[34]),wt(e.$$.fragment),j(e.$$.fragment,1),bt(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(a){i||(e&&j(e.$$.fragment,a),i=!0)},o(a){e&&W(e.$$.fragment,a),i=!1},d(a){t[33](null),a&&N(n),e&&Et(e,a)}}}let kN=0;const By=([t,e])=>`${t}: ${e};`;function RN(t,e,n){let i;const r=["use","class","style","color","nonInteractive","ripple","activated","role","selected","disabled","skipRestoreFocus","tabindex","inputId","href","component","getPrimaryText","getElement"];let s=se(e,r),{$$slots:o={},$$scope:a}=e;var l;const c=st(Ue());let u=()=>{};function h(V){return V===u}let{use:d=[]}=e,{class:f=""}=e,{style:p=""}=e,{color:g=void 0}=e,{nonInteractive:m=(l=mn("SMUI:list:nonInteractive"))!==null&&l!==void 0?l:!1}=e;Dt("SMUI:list:nonInteractive",void 0);let{ripple:v=!m}=e,{activated:C=!1}=e,{role:w=mn("SMUI:list:item:role")}=e;Dt("SMUI:list:item:role",void 0);let{selected:y=!1}=e,{disabled:R=!1}=e,{skipRestoreFocus:k=!1}=e,{tabindex:_=u}=e,{inputId:I="SMUI-form-field-list-"+kN++}=e,{href:U=void 0}=e,b,L={},M={},E={},P,O,z=mn("SMUI:list:item:nav"),{component:S=z?U?Qv:Cr:SO}=e;Dt("SMUI:generic:input:props",{id:I}),Dt("SMUI:separator:context",void 0),Sn(()=>{if(!y&&!m){let ye=!0,dt=b;for(;dt.previousSibling;)if(dt=dt.previousSibling,dt.nodeType===1&&dt.classList.contains("mdc-deprecated-list-item")&&!dt.classList.contains("mdc-deprecated-list-item--disabled")){ye=!1;break}ye&&(O=window.requestAnimationFrame(Te))}const V={_smui_list_item_accessor:!0,get element(){return ht()},get selected(){return y},set selected(ye){n(0,y=ye)},hasClass:A,addClass:K,removeClass:H,getAttr:me,addAttr:q,removeAttr:Le,getPrimaryText:ge,get checked(){var ye;return(ye=P&&P.checked)!==null&&ye!==void 0?ye:!1},set checked(ye){P&&n(13,P.checked=!!ye,P)},get hasCheckbox(){return!!(P&&"_smui_checkbox_accessor"in P)},get hasRadio(){return!!(P&&"_smui_radio_accessor"in P)},activateRipple(){P&&P.activateRipple()},deactivateRipple(){P&&P.deactivateRipple()},getValue(){return s.value}};return rt(ht(),"SMUIListItem:mount",V),()=>{rt(ht(),"SMUIListItem:unmount",V)}}),nr(()=>{O&&window.cancelAnimationFrame(O)});function A(V){return V in L?L[V]:ht().classList.contains(V)}function K(V){L[V]||n(15,L[V]=!0,L)}function H(V){(!(V in L)||L[V])&&n(15,L[V]=!1,L)}function Q(V,ye){M[V]!=ye&&(ye===""||ye==null?(delete M[V],n(16,M)):n(16,M[V]=ye,M))}function me(V){var ye;return V in E?(ye=E[V])!==null&&ye!==void 0?ye:null:ht().getAttribute(V)}function q(V,ye){E[V]!==ye&&n(17,E[V]=ye,E)}function Le(V){(!(V in E)||E[V]!=null)&&n(17,E[V]=void 0,E)}function Te(){let V=!0,ye=b.getElement();for(;ye.nextElementSibling;)if(ye=ye.nextElementSibling,ye.nodeType===1&&ye.classList.contains("mdc-deprecated-list-item")){const dt=ye.attributes.getNamedItem("tabindex");if(dt&&dt.value==="0"){V=!1;break}}V&&n(18,i=0)}function Ee(V){R||rt(ht(),"SMUI:action",V)}function Se(V){const ye=V.key==="Enter",dt=V.key==="Space";(ye||dt)&&Ee(V)}function X(V){("_smui_checkbox_accessor"in V.detail||"_smui_radio_accessor"in V.detail)&&n(13,P=V.detail)}function ge(){var V,ye,dt;const nn=ht(),qn=nn.querySelector(".mdc-deprecated-list-item__primary-text");if(qn)return(V=qn.textContent)!==null&&V!==void 0?V:"";const Ii=nn.querySelector(".mdc-deprecated-list-item__text");return Ii?(ye=Ii.textContent)!==null&&ye!==void 0?ye:"":(dt=nn.textContent)!==null&&dt!==void 0?dt:""}function ht(){return b.getElement()}function tn(V){de[V?"unshift":"push"](()=>{b=V,n(14,b)})}const Mt=()=>n(13,P=void 0);return t.$$set=V=>{e=B(B({},e),$e(V)),n(27,s=se(e,r)),"use"in V&&n(1,d=V.use),"class"in V&&n(2,f=V.class),"style"in V&&n(3,p=V.style),"color"in V&&n(4,g=V.color),"nonInteractive"in V&&n(5,m=V.nonInteractive),"ripple"in V&&n(6,v=V.ripple),"activated"in V&&n(7,C=V.activated),"role"in V&&n(8,w=V.role),"selected"in V&&n(0,y=V.selected),"disabled"in V&&n(9,R=V.disabled),"skipRestoreFocus"in V&&n(10,k=V.skipRestoreFocus),"tabindex"in V&&n(28,_=V.tabindex),"inputId"in V&&n(29,I=V.inputId),"href"in V&&n(11,U=V.href),"component"in V&&n(12,S=V.component),"$$scope"in V&&n(35,a=V.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&268444193&&n(18,i=h(_)?!m&&!R&&(y||P&&P.checked)?0:-1:_)},[y,d,f,p,g,m,v,C,w,R,k,U,S,P,b,L,M,E,i,c,z,K,H,Q,Ee,Se,X,s,_,I,ge,ht,o,tn,Mt,a]}class ON extends tt{constructor(e){super();et(this,e,RN,AN,Ke,{use:1,class:2,style:3,color:4,nonInteractive:5,ripple:6,activated:7,role:8,selected:0,disabled:9,skipRestoreFocus:10,tabindex:28,inputId:29,href:11,component:12,getPrimaryText:30,getElement:31},null,[-1,-1])}get getPrimaryText(){return this.$$.ctx[30]}get getElement(){return this.$$.ctx[31]}}xt({class:"mdc-deprecated-list-item__text",component:Cr});xt({class:"mdc-deprecated-list-item__primary-text",component:Cr});xt({class:"mdc-deprecated-list-item__secondary-text",component:Cr});function LN(t){let e,n,i,r,s,o;const a=t[8].default,l=Ne(a,t,t[7],null);let c=[{class:n=be({[t[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":t[4]})},t[5]],u={};for(let h=0;h<c.length;h+=1)u=B(u,c[h]);return{c(){e=pe("span"),l&&l.c(),this.h()},l(h){e=_e(h,"SPAN",{class:!0});var d=ne(e);l&&l.l(d),d.forEach(N),this.h()},h(){ce(e,u)},m(h,d){re(h,e,d),l&&l.m(e,null),t[9](e),r=!0,s||(o=[ae(i=pt.call(null,e,t[0])),ae(t[3].call(null,e))],s=!0)},p(h,[d]){l&&l.p&&(!r||d&128)&&Pe(l,a,h,h[7],r?Me(a,h[7],d,null):De(h[7]),null),ce(e,u=ke(c,[(!r||d&2&&n!==(n=be({[h[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":h[4]})))&&{class:n},d&32&&h[5]])),i&&qe(i.update)&&d&1&&i.update.call(null,h[0])},i(h){r||(j(l,h),r=!0)},o(h){W(l,h),r=!1},d(h){h&&N(e),l&&l.d(h),t[9](null),s=!1,ze(o)}}}function NN(t,e,n){const i=["use","class","getElement"];let r=se(e,i),{$$slots:s={},$$scope:o}=e;const a=st(Ue());let{use:l=[]}=e,{class:c=""}=e,u,h=mn("SMUI:list:graphic:menu-selection-group");function d(){return u}function f(p){de[p?"unshift":"push"](()=>{u=p,n(2,u)})}return t.$$set=p=>{e=B(B({},e),$e(p)),n(5,r=se(e,i)),"use"in p&&n(0,l=p.use),"class"in p&&n(1,c=p.class),"$$scope"in p&&n(7,o=p.$$scope)},[l,c,u,a,h,r,d,o,s,f]}class MN extends tt{constructor(e){super();et(this,e,NN,LN,Ke,{use:0,class:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}xt({class:"mdc-deprecated-list-item__meta",component:Cr});xt({class:"mdc-deprecated-list-group",component:pi});xt({class:"mdc-deprecated-list-group__subheader",component:CO});const Lj=ON,PN=MN;xt({class:"mdc-menu__selection-group-icon",component:PN});/**
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
 */var Ln={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},DN={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var Hy=function(t){bn(e,t);function e(n){var i=t.call(this,ct(ct({},e.defaultAdapter),n))||this;return i.animationFrame=0,i.animationTimer=0,i}return Object.defineProperty(e,"strings",{get:function(){return DN},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Ln},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var n=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(Ln.OPEN),this.adapter.addClass(Ln.ANIMATE),this.runNextAnimationFrame(function(){n.adapter.addClass(Ln.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(Ln.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(Ln.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(Ln.OPENING)||this.adapter.hasClass(Ln.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(Ln.CLOSING)},e.prototype.handleKeydown=function(n){var i=n.keyCode,r=n.key,s=r==="Escape"||i===27;s&&this.close()},e.prototype.handleTransitionEnd=function(n){var i=Ln.OPENING,r=Ln.CLOSING,s=Ln.OPEN,o=Ln.ANIMATE,a=Ln.ROOT,l=this.isElement(n.target)&&this.adapter.elementHasClass(n.target,a);!l||(this.isClosing()?(this.adapter.removeClass(s),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(o),this.adapter.removeClass(i),this.adapter.removeClass(r))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(n){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(n,0)})},e.prototype.isElement=function(n){return Boolean(n.classList)},e}(Wn);/**
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
 */var FN=function(t){bn(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(Hy);function xN(t){let e,n,i,r,s,o;const a=t[15].default,l=Ne(a,t,t[14],null);let c=[{class:n=be(Ge({[t[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":t[2]==="dismissible","mdc-drawer--modal":t[2]==="modal","smui-drawer__absolute":t[2]==="modal"&&!t[3]},t[6]))},t[8]],u={};for(let h=0;h<c.length;h+=1)u=B(u,c[h]);return{c(){e=pe("aside"),l&&l.c(),this.h()},l(h){e=_e(h,"ASIDE",{class:!0});var d=ne(e);l&&l.l(d),d.forEach(N),this.h()},h(){ce(e,u)},m(h,d){re(h,e,d),l&&l.m(e,null),t[16](e),r=!0,s||(o=[ae(i=pt.call(null,e,t[0])),ae(t[7].call(null,e)),it(e,"keydown",t[17]),it(e,"transitionend",t[18])],s=!0)},p(h,[d]){l&&l.p&&(!r||d&16384)&&Pe(l,a,h,h[14],r?Me(a,h[14],d,null):De(h[14]),null),ce(e,u=ke(c,[(!r||d&78&&n!==(n=be(Ge({[h[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":h[2]==="dismissible","mdc-drawer--modal":h[2]==="modal","smui-drawer__absolute":h[2]==="modal"&&!h[3]},h[6]))))&&{class:n},d&256&&h[8]])),i&&qe(i.update)&&d&1&&i.update.call(null,h[0])},i(h){r||(j(l,h),r=!0)},o(h){W(l,h),r=!1},d(h){h&&N(e),l&&l.d(h),t[16](null),s=!1,ze(o)}}}function UN(t,e,n){const i=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let r=se(e,i),{$$slots:s={},$$scope:o}=e;const{FocusTrap:a}=GR,l=st(Ue());let{use:c=[]}=e,{class:u=""}=e,{variant:h=void 0}=e,{open:d=!1}=e,{fixed:f=!0}=e,p,g,m={},v=null,C,w=!1;Dt("SMUI:list:nav",!0),Dt("SMUI:list:item:nav",!0),Dt("SMUI:list:wrapFocus",!0);let y=h;Sn(()=>{C=new a(p,{skipInitialFocus:!0}),n(4,g=R()),g&&g.init()}),nr(()=>{g&&g.destroy(),w&&w.removeEventListener("SMUIDrawerScrim:click",U)});function R(){var z,S;w&&w.removeEventListener("SMUIDrawerScrim:click",U),h==="modal"&&(w=(S=(z=p.parentNode)===null||z===void 0?void 0:z.querySelector(".mdc-drawer-scrim"))!==null&&S!==void 0?S:!1,w&&w.addEventListener("SMUIDrawerScrim:click",U));const A=h==="dismissible"?Hy:h==="modal"?FN:void 0;return A?new A({addClass:_,removeClass:I,hasClass:k,elementHasClass:(K,H)=>K.classList.contains(H),saveFocus:()=>v=document.activeElement,restoreFocus:()=>{v&&"focus"in v&&p.contains(document.activeElement)&&v.focus()},focusActiveNavigationItem:()=>{const K=p.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");K&&K.focus()},notifyClose:()=>{n(9,d=!1),rt(p,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{n(9,d=!0),rt(p,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>C.trapFocus(),releaseFocus:()=>C.releaseFocus()}):void 0}function k(z){return z in m?m[z]:M().classList.contains(z)}function _(z){m[z]||n(6,m[z]=!0,m)}function I(z){(!(z in m)||m[z])&&n(6,m[z]=!1,m)}function U(){g&&"handleScrimClick"in g&&g.handleScrimClick()}function b(z){n(9,d=z)}function L(){return d}function M(){return p}function E(z){de[z?"unshift":"push"](()=>{p=z,n(5,p)})}const P=z=>g&&g.handleKeydown(z),O=z=>g&&g.handleTransitionEnd(z);return t.$$set=z=>{e=B(B({},e),$e(z)),n(8,r=se(e,i)),"use"in z&&n(0,c=z.use),"class"in z&&n(1,u=z.class),"variant"in z&&n(2,h=z.variant),"open"in z&&n(9,d=z.open),"fixed"in z&&n(3,f=z.fixed),"$$scope"in z&&n(14,o=z.$$scope)},t.$$.update=()=>{t.$$.dirty&8212&&y!==h&&(n(13,y=h),g&&g.destroy(),n(6,m={}),n(4,g=R()),g&&g.init()),t.$$.dirty&528&&g&&g.isOpen()!==d&&(d?g.open():g.close())},[c,u,h,f,g,p,m,l,r,d,b,L,M,y,o,s,E,P,O]}class Nj extends tt{constructor(e){super();et(this,e,UN,xN,Ke,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}var Mj=xt({class:"mdc-drawer-app-content",component:pi}),Pj=xt({class:"mdc-drawer__content",component:pi});xt({class:"mdc-drawer__header",component:pi});xt({class:"mdc-drawer__title",component:wO});xt({class:"mdc-drawer__subtitle",component:TO});xt({class:"smui-card__content",component:pi});xt({class:"mdc-card__media-content",component:pi});xt({class:"mdc-card__action-buttons",component:pi});xt({class:"mdc-card__action-icons",component:pi});const qy="@firebase/database",Wy="0.12.4";/**
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
 */let Gy="";function VN(t){Gy=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ht(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ro(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return $n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new jN(e)}}catch{}return new BN},Rr=zy("localStorage"),Ud=zy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=new Ka("@firebase/database"),HN=function(){let t=1;return function(){return t++}}(),Ky=function(t){const e=Z0(t),n=new X0;n.update(e);const i=n.digest();return Cu.encodeByteArray(i)},ta=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ta.apply(null,i):typeof i=="object"?e+=Ht(i):e+=i,e+=" "}return e};let Or=null,Xy=!0;const qN=function(t,e){G(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Os.logLevel=Ve.VERBOSE,Or=Os.log.bind(Os),e&&Ud.set("logging_enabled",!0)):typeof t=="function"?Or=t:(Or=null,Ud.remove("logging_enabled"))},en=function(...t){if(Xy===!0&&(Xy=!1,Or===null&&Ud.get("logging_enabled")===!0&&qN(!0)),Or){const e=ta.apply(null,t);Or(e)}},na=function(t){return function(...e){en(t,...e)}},Vd=function(...t){const e="FIREBASE INTERNAL ERROR: "+ta(...t);Os.error(e)},Lr=function(...t){const e=`FIREBASE FATAL ERROR: ${ta(...t)}`;throw Os.error(e),new Error(e)},Bn=function(...t){const e="FIREBASE WARNING: "+ta(...t);Os.warn(e)},WN=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Bn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},mc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},GN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ls="[MIN_NAME]",Nr="[MAX_NAME]",Mr=function(t,e){if(t===e)return 0;if(t===Ls||e===Nr)return-1;if(e===Ls||t===Nr)return 1;{const n=Jy(t),i=Jy(e);return n!==null?i!==null?n-i==0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},zN=function(t,e){return t===e?0:t<e?-1:1},ia=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ht(e))},jd=function(t){if(typeof t!="object"||t===null)return Ht(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ht(e[i]),n+=":",n+=jd(t[e[i]]);return n+="}",n},Qy=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function fn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Yy=function(t){G(!mc(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t==-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},KN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},XN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function QN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const YN=new RegExp("^-?(0*)\\d{1,10}$"),JN=-2147483648,ZN=2147483647,Jy=function(t){if(YN.test(t)){const e=Number(t);if(e>=JN&&e<=ZN)return e}return null},Ns=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Bn("Exception was thrown by user callback.",n),e},Math.floor(0))}},$N=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ra=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class eM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Bn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(en("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Bn(e)}}class Bd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bd.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="5",Zy="v",$y="s",eb="r",tb="f",nb=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ib="ls",nM="p",qd="ac",rb="websocket",sb="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e,n,i,r,s=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Rr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Rr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function rM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ob(t,e,n){G(typeof e=="string","typeof type must == string"),G(typeof n=="object","typeof params must == object");let i;if(e===rb)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===sb)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rM(t)&&(n.ns=t.namespace);const r=[];return fn(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(){this.counters_={}}incrementCounter(e,n=1){$n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return V0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd={},Gd={};function zd(t){const e=t.toString();return Wd[e]||(Wd[e]=new sM),Wd[e]}function oM(t,e){const n=t.toString();return Gd[n]||(Gd[n]=e()),Gd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Ns(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="start",lM="close",cM="pLPCommand",uM="pRTLPCB",lb="id",cb="pw",ub="ser",hM="cb",dM="seg",fM="ts",pM="d",mM="dframe",hb=1870,db=30,gM=hb-db,_M=25e3,vM=3e4;class Ms{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=na(e),this.stats_=zd(n),this.urlFn=l=>(this.appCheckToken&&(l[qd]=this.appCheckToken),ob(n,sb,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new aM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(vM)),GN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kd((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ab)this.id=a,this.password=l;else if(o===lM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[ab]="t",i[ub]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[hM]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Zy]=Hd,this.transportSessionId&&(i[$y]=this.transportSessionId),this.lastSessionId&&(i[ib]=this.lastSessionId),this.applicationId&&(i[nM]=this.applicationId),this.appCheckToken&&(i[qd]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&nb.test(location.hostname)&&(i[eb]=tb);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ms.forceAllow_=!0}static forceDisallow(){Ms.forceDisallow_=!0}static isAvailable(){return Ms.forceAllow_?!0:!Ms.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!KN()&&!XN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ht(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=U0(n),r=Qy(i,gM);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[mM]="t",i[lb]=e,i[cb]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ht(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Kd{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=HN(),window[cM+this.uniqueCallbackIdentifier]=e,window[uM+this.uniqueCallbackIdentifier]=n,this.myIFrame=Kd.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,"javascript:".length)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){en("frame writing exception"),a.stack&&en(a.stack),en(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||en("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[lb]=this.myID,e[cb]=this.myPW,e[ub]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+db+i.length<=hb;){const o=this.pendingSegs.shift();i=i+"&"+dM+r+"="+o.seg+"&"+fM+r+"="+o.ts+"&"+pM+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(_M)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{en("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yM=16384,bM=45e3;let gc=null;typeof MozWebSocket!="undefined"?gc=MozWebSocket:typeof WebSocket!="undefined"&&(gc=WebSocket);class Qn{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=na(this.connId),this.stats_=zd(n),this.connURL=Qn.connectionURL_(n,o,a,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r){const s={};return s[Zy]=Hd,typeof location!="undefined"&&location.hostname&&nb.test(location.hostname)&&(s[eb]=tb),n&&(s[$y]=n),i&&(s[ib]=i),r&&(s[qd]=r),ob(e,rb,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Rr.set("previous_websocket_failure",!0);try{if(!Bp()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new gc(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Qn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&gc!==null&&!Qn.forceDisallow_}static previouslyFailed(){return Rr.isInMemoryStorage||Rr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Rr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ro(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(G(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ht(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Qy(n,yM);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qn.responsesRequiredToBeHealthy=2;Qn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ms,Qn]}initTransports_(e){const n=Qn&&Qn.isAvailable();let i=n&&!Qn.previouslyFailed();if(e.webSocketOnly&&(n||Bn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Qn];else{const r=this.transports_=[];for(const s of Xd.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM=6e4,IM=5e3,wM=10*1024,TM=100*1024,Qd="t",fb="d",CM="s",pb="r",SM="e",mb="o",gb="a",_b="n",vb="p",AM="h";class kM{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=na("c:"+this.id+":"),this.transportManager_=new Xd(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=ra(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>TM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>wM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Qd in e){const n=e[Qd];n===gb?this.upgradeIfSecondaryHealthy_():n===pb?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===mb&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ia("t",e),i=ia("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vb,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gb,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_b,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ia("t",e),i=ia("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ia(Qd,e);if(fb in e){const i=e[fb];if(n===AM)this.onHandshake_(i);else if(n===_b){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===CM?this.onConnectionShutdown_(i):n===pb?this.onReset_(i):n===SM?Vd("Server Error: "+i):n===mb?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Hd!==i&&Bn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),ra(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(EM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ra(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(IM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vb,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Rr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.allowedEvents_=e,this.listeners_={},G(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){G(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends bb{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Ha()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new _c}getInitialEvent(e){return G(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=32,Ib=768;class Ze{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function je(){return new Ze("")}function Ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Gi(t){return t.pieces_.length-t.pieceNum_}function ot(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ze(t.pieces_,e)}function Yd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function RM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function sa(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function wb(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ze(e,0)}function Ct(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Ze)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new Ze(n,0)}function Re(t){return t.pieceNum_>=t.pieces_.length}function Nn(t,e){const n=Ae(t),i=Ae(e);if(n===null)return e;if(n===i)return Nn(ot(t),ot(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function OM(t,e){const n=sa(t,0),i=sa(e,0);for(let r=0;r<n.length&&r<i.length;r++){const s=Mr(n[r],i[r]);if(s!==0)return s}return n.length===i.length?0:n.length<i.length?-1:1}function Jd(t,e){if(Gi(t)!==Gi(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Gn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Gi(t)>Gi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class LM{constructor(e,n){this.errorPrefix_=n,this.parts_=sa(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=za(this.parts_[i]);Tb(this)}}function NM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=za(e),Tb(t)}function MM(t){const e=t.parts_.pop();t.byteLength_-=za(e),t.parts_.length>0&&(t.byteLength_-=1)}function Tb(t){if(t.byteLength_>Ib)throw new Error(t.errorPrefix_+"has a key path longer than "+Ib+" bytes ("+t.byteLength_+").");if(t.parts_.length>Eb)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Eb+") or object contains a cycle "+Pr(t))}function Pr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd extends bb{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Zd}getInitialEvent(e){return G(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=1e3,PM=60*5*1e3,DM=3*1e3,Cb=30*1e3,FM=1.3,xM=3e4,UM="server_kill",Sb=3;class _i extends yb{constructor(e,n,i,r,s,o,a,l){super();if(this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=_i.nextPersistentConnectionId_++,this.log_=na("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=oa,this.maxReconnectDelay_=PM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Bp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_c.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(Ht(s)),G(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new Si,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||r!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},DM),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),G(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),G(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;_i.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&$n(e,"w")){const i=Zr(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Bn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||K0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Cb)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=z0(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),G(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ht(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Vd("Unrecognized action received from server: "+Ht(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){G(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=oa,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=oa,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>xM&&(this.reconnectDelay_=oa),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*FM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+_i.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){G(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?en("getToken() completed but was canceled"):(en("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new kM(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{Bn(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(UM)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Bn(h),l())}}}interrupt(e){en("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){en("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qa(this.interruptReasons_)&&(this.reconnectDelay_=oa,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>jd(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new Ze(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){en("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Sb&&(this.reconnectDelay_=Cb,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){en("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Sb&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Gy.replace(/\./g,"-")]=1,Ha()?e["framework.cordova"]=1:Au()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_c.getInstance().currentlyOnline();return qa(this.interruptReasons_)&&e}}_i.nextPersistentConnectionId_=0;_i.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Oe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new Oe(Ls,e),r=new Oe(Ls,n);return this.compare(i,r)!==0}minPost(){return Oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc;class Ab extends vc{static get __EMPTY_NODE(){return yc}static set __EMPTY_NODE(e){yc=e}compare(e,n){return Mr(e.name,n.name)}isDefinedOn(e){throw Jr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Oe.MIN}maxPost(){return new Oe(Nr,yc)}makePost(e,n){return G(typeof e=="string","KeyIndex indexValue must always be a string."),new Oe(e,yc)}toString(){return".key"}}const Ps=new Ab;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Gt{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:Gt.RED,this.left=r!=null?r:Mn.EMPTY_NODE,this.right=s!=null?s:Mn.EMPTY_NODE}copy(e,n,i,r,s){return new Gt(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Mn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Mn.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Gt.RED=!0;Gt.BLACK=!1;class VM{copy(e,n,i,r,s){return this}insert(e,n,i){return new Gt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Mn{constructor(e,n=Mn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Mn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Gt.BLACK,null,null))}remove(e){return new Mn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Gt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new bc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new bc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new bc(this.root_,null,this.comparator_,!0,e)}}Mn.EMPTY_NODE=new VM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jM(t,e){return Mr(t.name,e.name)}function $d(t,e){return Mr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ef;function BM(t){ef=t}const kb=function(t){return typeof t=="number"?"number:"+Yy(t):"string:"+t},Rb=function(t){if(t.isLeafNode()){const e=t.val();G(typeof e=="string"||typeof e=="number"||typeof e=="object"&&$n(e,".sv"),"Priority must be a string or number.")}else G(t===ef||t.isEmpty(),"priority of unexpected type.");G(t===ef||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ob;class zt{constructor(e,n=zt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,G(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Rb(this.priorityNode_)}static set __childrenNodeConstructor(e){Ob=e}static get __childrenNodeConstructor(){return Ob}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new zt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:zt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Re(e)?this:Ae(e)===".priority"?this.priorityNode_:zt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:zt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Ae(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(G(i!==".priority"||Gi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,zt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ot(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+kb(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Yy(this.value_):e+=this.value_,this.lazyHash_=Ky(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===zt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof zt.__childrenNodeConstructor?-1:(G(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=zt.VALUE_TYPE_ORDER.indexOf(n),s=zt.VALUE_TYPE_ORDER.indexOf(i);return G(r>=0,"Unknown leaf type: "+n),G(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}zt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lb,Nb;function HM(t){Lb=t}function qM(t){Nb=t}class WM extends vc{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?Mr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Oe.MIN}maxPost(){return new Oe(Nr,new zt("[PRIORITY-POST]",Nb))}makePost(e,n){const i=Lb(e);return new Oe(n,new zt("[PRIORITY-POST]",i))}toString(){return".priority"}}const It=new WM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GM=Math.log(2);class zM{constructor(e){const n=s=>parseInt(Math.log(s)/GM,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ec=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Gt(d,h.node,Gt.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=r(l,f),g=r(f+1,c);return h=t[f],d=n?n(h):h,new Gt(d,h.node,Gt.BLACK,p,g)}},s=function(l){let c=null,u=null,h=t.length;const d=function(p,g){const m=h-p,v=h;h-=p;const C=r(m+1,v),w=t[m],y=n?n(w):w;f(new Gt(y,w.node,g,null,C))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),m=Math.pow(2,l.count-(p+1));g?d(m,Gt.BLACK):(d(m,Gt.BLACK),d(m,Gt.RED))}return u},o=new zM(t.length),a=s(o);return new Mn(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tf;const Ds={};class vi{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return G(Ds&&It,"ChildrenNode.ts has not been loaded"),tf=tf||new vi({".priority":Ds},{".priority":It}),tf}get(e){const n=Zr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Mn?n:null}hasIndex(e){return $n(this.indexSet_,e.toString())}addIndex(e,n){G(e!==Ps,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(Oe.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Ec(i,e.getCompare()):a=Ds;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new vi(u,c)}addToIndexes(e,n){const i=Wa(this.indexes_,(r,s)=>{const o=Zr(this.indexSet_,s);if(G(o,"Missing index implementation for "+s),r===Ds)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Oe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ec(a,o.getCompare())}else return Ds;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new Oe(e.name,a))),l.insert(e,e.node)}});return new vi(i,this.indexSet_)}removeFromIndexes(e,n){const i=Wa(this.indexes_,r=>{if(r===Ds)return r;{const s=n.get(e.name);return s?r.remove(new Oe(e.name,s)):r}});return new vi(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa;class he{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Rb(this.priorityNode_),this.children_.isEmpty()&&G(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return aa||(aa=new he(new Mn($d),null,vi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||aa}updatePriority(e){return this.children_.isEmpty()?this:new he(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?aa:n}}getChild(e){const n=Ae(e);return n===null?this:this.getImmediateChild(n).getChild(ot(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(G(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new Oe(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?aa:this.priorityNode_;return new he(r,o,s)}}updateChild(e,n){const i=Ae(e);if(i===null)return n;{G(Ae(e)!==".priority"||Gi(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(ot(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(It,(o,a)=>{n[o]=a.val(e),i++,s&&he.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+kb(this.getPriority().val())+":"),this.forEachChild(It,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Ky(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new Oe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Oe(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Oe.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Oe.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===la?-1:0}withIndex(e){if(e===Ps||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new he(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ps||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(It),r=n.getIterator(It);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ps?null:this.indexMap_.get(e.toString())}}he.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class KM extends he{constructor(){super(new Mn($d),he.EMPTY_NODE,vi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return he.EMPTY_NODE}isEmpty(){return!1}}const la=new KM;Object.defineProperties(Oe,{MIN:{value:new Oe(Ls,he.EMPTY_NODE)},MAX:{value:new Oe(Nr,la)}});Ab.__EMPTY_NODE=he.EMPTY_NODE;zt.__childrenNodeConstructor=he;BM(la);qM(la);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=!0;function Vt(t,e=null){if(t===null)return he.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),G(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new zt(n,Vt(e))}if(!(t instanceof Array)&&XM){const n=[];let i=!1;if(fn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Vt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new Oe(o,l)))}}),n.length===0)return he.EMPTY_NODE;const s=Ec(n,jM,o=>o.name,$d);if(i){const o=Ec(n,It.getCompare());return new he(s,Vt(e),new vi({".priority":o},{".priority":It}))}else return new he(s,Vt(e),vi.Default)}else{let n=he.EMPTY_NODE;return fn(t,(i,r)=>{if($n(t,i)&&i.substring(0,1)!=="."){const s=Vt(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Vt(e))}}HM(Vt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM extends vc{constructor(e){super();this.indexPath_=e,G(!Re(e)&&Ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?Mr(e.name,n.name):s}makePost(e,n){const i=Vt(e),r=he.EMPTY_NODE.updateChild(this.indexPath_,i);return new Oe(n,r)}maxPost(){const e=he.EMPTY_NODE.updateChild(this.indexPath_,la);return new Oe(Nr,e)}toString(){return sa(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM extends vc{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Mr(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Oe.MIN}maxPost(){return Oe.MAX}makePost(e,n){const i=Vt(e);return new Oe(n,i)}toString(){return".value"}}const JM=new YM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(t){return{type:"value",snapshotNode:t}}function Fs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ca(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ua(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ZM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){G(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(ca(n,a)):G(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Fs(n,i)):o.trackChildChange(ua(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(It,(r,s)=>{n.hasChild(r)||i.trackChildChange(ca(r,s))}),n.isLeafNode()||n.forEachChild(It,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(ua(r,s,o))}else i.trackChildChange(Fs(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?he.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this.indexedFilter_=new nf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ha.getStartPost_(e),this.endPost_=ha.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,r,s,o){return this.matches(new Oe(n,i))||(i=he.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=he.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(he.EMPTY_NODE);const s=this;return n.forEachChild(It,(o,a)=>{s.matches(new Oe(o,a))||(r=r.updateImmediateChild(o,he.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $M{constructor(e){this.rangedFilter_=new ha(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new Oe(n,i))||(i=he.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=he.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=he.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)r=r.updateImmediateChild(a.name,a.node),o++;else break}}else{r=n.withIndex(this.index_),r=r.updatePriority(he.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,f)=>h(f,d)}else l=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const h=l.getNext();!u&&a(s,h)<=0&&(u=!0),u&&c<this.limit_&&a(h,o)<=0?c++:r=r.updateImmediateChild(h.name,he.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;G(a.numChildren()===this.limit_,"");const l=new Oe(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=r.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!i.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(ua(n,i,h)),a.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(ca(n,h));const g=a.updateImmediateChild(n,he.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Fs(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ca(c.name,c.node)),s.trackChildChange(Fs(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,he.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=It}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return G(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return G(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ls}hasEnd(){return this.endSet_}getIndexEndValue(){return G(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return G(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return G(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===It}copy(){const e=new rf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function eP(t){return t.loadsAllData()?new nf(t.getIndex()):t.hasLimit()?new $M(t):new ha(t)}function Pb(t){const e={};if(t.isDefault())return e;let n;return t.index_===It?n="$priority":t.index_===JM?n="$value":t.index_===Ps?n="$key":(G(t.index_ instanceof QM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ht(n),t.startSet_&&(e.startAt=Ht(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ht(t.indexStartName_))),t.endSet_&&(e.endAt=Ht(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ht(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Db(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==It&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends yb{constructor(e,n,i,r){super();this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=na("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(G(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ic.getListenId_(e,i),a={};this.listens_[o]=a;const l=Pb(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,i),Zr(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,n){const i=Ic.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Pb(e._queryParams),i=e._path.toString(),r=new Si;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+rr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ro(a.responseText)}catch{Bn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Bn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(){this.rootNode_=he.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(){return{value:null,children:new Map}}function xs(t,e,n){if(Re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Ae(e);t.children.has(i)||t.children.set(i,wc());const r=t.children.get(i);e=ot(e),xs(r,e,n)}}function sf(t,e){if(Re(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(It,(i,r)=>{xs(t,new Ze(i),r)}),sf(t,e)}}else if(t.children.size>0){const n=Ae(e);return e=ot(e),t.children.has(n)&&sf(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function of(t,e,n){t.value!==null?n(e,t.value):nP(t,(i,r)=>{const s=new Ze(e.toString()+"/"+i);of(r,s,n)})}function nP(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&fn(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=10*1e3,rP=30*1e3,sP=5*60*1e3;class oP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new iP(e);const i=Fb+(rP-Fb)*Math.random();ra(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;fn(e,(r,s)=>{s>0&&$n(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),ra(this.reportStats_.bind(this),Math.floor(Math.random()*2*sP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Yn||(Yn={}));function xb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function af(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function lf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Yn.ACK_USER_WRITE,this.source=xb()}operationForChild(e){if(Re(this.path)){if(this.affectedTree.value!=null)return G(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ze(e));return new Tc(je(),n,this.revert)}}else return G(Ae(this.path)===e,"operationForChild called for unrelated child."),new Tc(ot(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n){this.source=e,this.path=n,this.type=Yn.LISTEN_COMPLETE}operationForChild(e){return Re(this.path)?new da(this.source,je()):new da(this.source,ot(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Yn.OVERWRITE}operationForChild(e){return Re(this.path)?new Dr(this.source,je(),this.snap.getImmediateChild(e)):new Dr(this.source,ot(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Yn.MERGE}operationForChild(e){if(Re(this.path)){const n=this.children.subtree(new Ze(e));return n.isEmpty()?null:n.value?new Dr(this.source,je(),n.value):new fa(this.source,je(),n)}else return G(Ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fa(this.source,ot(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Re(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function lP(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(ZM(o.childName,o.snapshotNode))}),pa(t,r,"child_removed",e,i,n),pa(t,r,"child_added",e,i,n),pa(t,r,"child_moved",s,i,n),pa(t,r,"child_changed",e,i,n),pa(t,r,"value",e,i,n),r}function pa(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>uP(t,a,l)),o.forEach(a=>{const l=cP(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function cP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function uP(t,e,n){if(e.childName==null||n.childName==null)throw Jr("Should only compare child_ events.");const i=new Oe(e.childName,e.snapshotNode),r=new Oe(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t,e){return{eventCache:t,serverCache:e}}function ma(t,e,n,i){return Cc(new Fr(e,n,i),t.serverCache)}function Ub(t,e,n,i){return Cc(t.eventCache,new Fr(e,n,i))}function cf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uf;const hP=()=>(uf||(uf=new Mn(zN)),uf);class mt{constructor(e,n=hP()){this.value=e,this.children=n}static fromObject(e){let n=new mt(null);return fn(e,(i,r)=>{n=n.set(new Ze(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:je(),value:this.value};if(Re(e))return null;{const i=Ae(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(ot(e),n);return s!=null?{path:Ct(new Ze(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Re(e))return this;{const n=Ae(e),i=this.children.get(n);return i!==null?i.subtree(ot(e)):new mt(null)}}set(e,n){if(Re(e))return new mt(n,this.children);{const i=Ae(e),s=(this.children.get(i)||new mt(null)).set(ot(e),n),o=this.children.insert(i,s);return new mt(this.value,o)}}remove(e){if(Re(e))return this.children.isEmpty()?new mt(null):new mt(null,this.children);{const n=Ae(e),i=this.children.get(n);if(i){const r=i.remove(ot(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new mt(null):new mt(this.value,s)}else return this}}get(e){if(Re(e))return this.value;{const n=Ae(e),i=this.children.get(n);return i?i.get(ot(e)):null}}setTree(e,n){if(Re(e))return n;{const i=Ae(e),s=(this.children.get(i)||new mt(null)).setTree(ot(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new mt(this.value,o)}}fold(e){return this.fold_(je(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(Ct(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,je(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(Re(e))return null;{const s=Ae(e),o=this.children.get(s);return o?o.findOnPath_(ot(e),Ct(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,je(),n)}foreachOnPath_(e,n,i){if(Re(e))return this;{this.value&&i(n,this.value);const r=Ae(e),s=this.children.get(r);return s?s.foreachOnPath_(ot(e),Ct(n,r),i):new mt(null)}}foreach(e){this.foreach_(je(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(Ct(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.writeTree_=e}static empty(){return new Jn(new mt(null))}}function ga(t,e,n){if(Re(e))return new Jn(new mt(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Nn(r,e);return s=s.updateChild(o,n),new Jn(t.writeTree_.set(r,s))}else{const r=new mt(n),s=t.writeTree_.setTree(e,r);return new Jn(s)}}}function Vb(t,e,n){let i=t;return fn(n,(r,s)=>{i=ga(i,Ct(e,r),s)}),i}function jb(t,e){if(Re(e))return Jn.empty();{const n=t.writeTree_.setTree(e,new mt(null));return new Jn(n)}}function hf(t,e){return Ur(t,e)!=null}function Ur(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Nn(n.path,e)):null}function Bb(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(It,(i,r)=>{e.push(new Oe(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new Oe(i,r.value))}),e}function zi(t,e){if(Re(e))return t;{const n=Ur(t,e);return n!=null?new Jn(new mt(n)):new Jn(t.writeTree_.subtree(e))}}function df(t){return t.writeTree_.isEmpty()}function Us(t,e){return Hb(je(),t.writeTree_,e)}function Hb(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(G(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=Hb(Ct(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Ct(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t,e){return Kb(e,t)}function dP(t,e,n,i,r){G(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=ga(t.visibleWrites,e,n)),t.lastWriteId=i}function fP(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function pP(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);G(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&mP(a,i.path)?r=!1:Gn(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return gP(t),!0;if(i.snap)t.visibleWrites=jb(t.visibleWrites,i.path);else{const a=i.children;fn(a,l=>{t.visibleWrites=jb(t.visibleWrites,Ct(i.path,l))})}return!0}else return!1}function mP(t,e){if(t.snap)return Gn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Gn(Ct(t.path,n),e))return!0;return!1}function gP(t){t.visibleWrites=qb(t.allWrites,_P,je()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function _P(t){return t.visible}function qb(t,e,n){let i=Jn.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)Gn(n,o)?(a=Nn(n,o),i=ga(i,a,s.snap)):Gn(o,n)&&(a=Nn(o,n),i=ga(i,je(),s.snap.getChild(a)));else if(s.children){if(Gn(n,o))a=Nn(n,o),i=Vb(i,a,s.children);else if(Gn(o,n))if(a=Nn(o,n),Re(a))i=Vb(i,je(),s.children);else{const l=Zr(s.children,Ae(a));if(l){const c=l.getChild(ot(a));i=ga(i,je(),c)}}}else throw Jr("WriteRecord should have .snap or .children")}}return i}function Wb(t,e,n,i,r){if(!i&&!r){const s=Ur(t.visibleWrites,e);if(s!=null)return s;{const o=zi(t.visibleWrites,e);if(df(o))return n;if(n==null&&!hf(o,je()))return null;{const a=n||he.EMPTY_NODE;return Us(o,a)}}}else{const s=zi(t.visibleWrites,e);if(!r&&df(s))return n;if(!r&&n==null&&!hf(s,je()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(Gn(c.path,e)||Gn(e,c.path))},a=qb(t.allWrites,o,e),l=n||he.EMPTY_NODE;return Us(a,l)}}}function vP(t,e,n){let i=he.EMPTY_NODE;const r=Ur(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(It,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=zi(t.visibleWrites,e);return n.forEachChild(It,(o,a)=>{const l=Us(zi(s,new Ze(o)),a);i=i.updateImmediateChild(o,l)}),Bb(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=zi(t.visibleWrites,e);return Bb(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function yP(t,e,n,i,r){G(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Ct(e,n);if(hf(t.visibleWrites,s))return null;{const o=zi(t.visibleWrites,s);return df(o)?r.getChild(n):Us(o,r.getChild(n))}}function bP(t,e,n,i){const r=Ct(e,n),s=Ur(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=zi(t.visibleWrites,r);return Us(o,i.getNode().getImmediateChild(n))}else return null}function EP(t,e){return Ur(t.visibleWrites,e)}function IP(t,e,n,i,r,s,o){let a;const l=zi(t.visibleWrites,e),c=Ur(l,je());if(c!=null)a=c;else if(n!=null)a=Us(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<r;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function wP(){return{visibleWrites:Jn.empty(),allWrites:[],lastWriteId:-1}}function Sc(t,e,n,i){return Wb(t.writeTree,t.treePath,e,n,i)}function pf(t,e){return vP(t.writeTree,t.treePath,e)}function Gb(t,e,n,i){return yP(t.writeTree,t.treePath,e,n,i)}function Ac(t,e){return EP(t.writeTree,Ct(t.treePath,e))}function TP(t,e,n,i,r,s){return IP(t.writeTree,t.treePath,e,n,i,r,s)}function mf(t,e,n){return bP(t.writeTree,t.treePath,e,n)}function zb(t,e){return Kb(Ct(t.treePath,e),t.writeTree)}function Kb(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;G(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),G(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,ua(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,ca(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,Fs(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,ua(i,e.snapshotNode,r.oldSnap));else throw Jr("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Xb=new SP;class gf{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Fr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return mf(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xr(this.viewCache_),s=TP(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(t){return{filter:t}}function kP(t,e){G(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),G(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function RP(t,e,n,i,r){const s=new CP;let o,a;if(n.type===Yn.OVERWRITE){const c=n;c.source.fromUser?o=_f(t,e,c.path,c.snap,i,r,s):(G(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Re(c.path),o=kc(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===Yn.MERGE){const c=n;c.source.fromUser?o=LP(t,e,c.path,c.children,i,r,s):(G(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=vf(t,e,c.path,c.children,i,r,a,s))}else if(n.type===Yn.ACK_USER_WRITE){const c=n;c.revert?o=PP(t,e,c.path,i,r,s):o=NP(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===Yn.LISTEN_COMPLETE)o=MP(t,e,n.path,i,s);else throw Jr("Unknown operation type: "+n.type);const l=s.getChanges();return OP(e,o,l),{viewCache:o,changes:l}}function OP(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=cf(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Mb(cf(e)))}}function Qb(t,e,n,i,r,s){const o=e.eventCache;if(Ac(i,n)!=null)return e;{let a,l;if(Re(n))if(G(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=xr(e),u=c instanceof he?c:he.EMPTY_NODE,h=pf(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=Sc(i,xr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=Ae(n);if(c===".priority"){G(Gi(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Gb(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ot(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Gb(i,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=mf(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,r,s):a=o.getNode()}}return ma(e,a,o.isFullyInitialized()||Re(n),t.filter.filtersNodes())}}function kc(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Re(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=Ae(n);if(!l.isCompleteForPath(n)&&Gi(n)>1)return e;const p=ot(n),m=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),m):c=u.updateChild(l.getNode(),f,m,p,Xb,null)}const h=Ub(e,c,l.isFullyInitialized()||Re(n),u.filtersNodes()),d=new gf(r,h,s);return Qb(t,h,n,r,d,a)}function _f(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new gf(r,e,s);if(Re(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ma(e,c,!0,t.filter.filtersNodes());else{const h=Ae(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=ma(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ot(n),f=a.getNode().getImmediateChild(h);let p;if(Re(d))p=i;else{const g=u.getCompleteChild(h);g!=null?Yd(d)===".priority"&&g.getChild(wb(d)).isEmpty()?p=g:p=g.updateChild(d,i):p=he.EMPTY_NODE}if(f.equals(p))l=e;else{const g=t.filter.updateChild(a.getNode(),h,p,d,u,o);l=ma(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Yb(t,e){return t.eventCache.isCompleteForChild(e)}function LP(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=Ct(n,l);Yb(e,Ae(u))&&(a=_f(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=Ct(n,l);Yb(e,Ae(u))||(a=_f(t,a,u,c,r,s,o))}),a}function Jb(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function vf(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Re(n)?c=i:c=new mt(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=Jb(t,f,d);l=kc(t,l,new Ze(h),p,r,s,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===void 0;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),g=Jb(t,p,d);l=kc(t,l,new Ze(h),g,r,s,o,a)}}),l}function NP(t,e,n,i,r,s,o){if(Ac(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(Re(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return kc(t,e,n,l.getNode().getChild(n),r,s,a,o);if(Re(n)){let c=new mt(null);return l.getNode().forEachChild(Ps,(u,h)=>{c=c.set(new Ze(u),h)}),vf(t,e,n,c,r,s,a,o)}else return e}else{let c=new mt(null);return i.foreach((u,h)=>{const d=Ct(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),vf(t,e,n,c,r,s,a,o)}}function MP(t,e,n,i,r){const s=e.serverCache,o=Ub(e,s.getNode(),s.isFullyInitialized()||Re(n),s.isFiltered());return Qb(t,o,n,i,Xb,r)}function PP(t,e,n,i,r,s){let o;if(Ac(i,n)!=null)return e;{const a=new gf(i,e,r),l=e.eventCache.getNode();let c;if(Re(n)||Ae(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Sc(i,xr(e));else{const h=e.serverCache.getNode();G(h instanceof he,"serverChildren would be complete if leaf node"),u=pf(i,h)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=Ae(n);let h=mf(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ot(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,he.EMPTY_NODE,ot(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Sc(i,xr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Ac(i,je())!=null,ma(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new nf(i.getIndex()),s=eP(i);this.processor_=AP(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(he.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(he.EMPTY_NODE,a.getNode(),null),u=new Fr(l,o.isFullyInitialized(),r.filtersNodes()),h=new Fr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Cc(h,u),this.eventGenerator_=new aP(this.query_)}get query(){return this.query_}}function FP(t){return t.viewCache_.serverCache.getNode()}function xP(t,e){const n=xr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Re(e)&&!n.getImmediateChild(Ae(e)).isEmpty())?n.getChild(e):null}function Zb(t){return t.eventRegistrations_.length===0}function UP(t,e){t.eventRegistrations_.push(e)}function $b(t,e,n){const i=[];if(n){G(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function eE(t,e,n,i){e.type===Yn.MERGE&&e.source.queryId!==null&&(G(xr(t.viewCache_),"We should always have a full cache before handling merges"),G(cf(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=RP(t.processor_,r,e,n,i);return kP(t.processor_,s.viewCache),G(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,tE(t,s.changes,s.viewCache.eventCache.getNode(),null)}function VP(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(It,(s,o)=>{i.push(Fs(s,o))}),n.isFullyInitialized()&&i.push(Mb(n.getNode())),tE(t,i,n.getNode(),e)}function tE(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return lP(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rc;class jP{constructor(){this.views=new Map}}function BP(t){G(!Rc,"__referenceConstructor has already been defined"),Rc=t}function HP(){return G(Rc,"Reference.ts has not been loaded"),Rc}function qP(t){return t.views.size===0}function yf(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return G(s!=null,"SyncTree gave us an op for an invalid query."),eE(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(eE(o,e,n,i));return s}}function WP(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Sc(n,r?i:null),l=!1;a?l=!0:i instanceof he?(a=pf(n,i),l=!1):(a=he.EMPTY_NODE,l=!1);const c=Cc(new Fr(a,l,!1),new Fr(i,r,!1));return new DP(e,c)}return o}function GP(t,e,n,i,r,s){const o=WP(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),UP(o,n),VP(o,n)}function zP(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=Ki(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat($b(c,n,i)),Zb(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat($b(l,n,i)),Zb(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Ki(t)&&s.push(new(HP())(e._repo,e._path)),{removed:s,events:o}}function nE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Vs(t,e){let n=null;for(const i of t.views.values())n=n||xP(i,e);return n}function iE(t,e){if(e._queryParams.loadsAllData())return Oc(t);{const i=e._queryIdentifier;return t.views.get(i)}}function rE(t,e){return iE(t,e)!=null}function Ki(t){return Oc(t)!=null}function Oc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lc;function KP(t){G(!Lc,"__referenceConstructor has already been defined"),Lc=t}function XP(){return G(Lc,"Reference.ts has not been loaded"),Lc}let QP=1;class sE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new mt(null),this.pendingWriteTree_=wP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function YP(t,e,n,i,r){return dP(t.pendingWriteTree_,e,n,i,r),r?_a(t,new Dr(xb(),e,n)):[]}function js(t,e,n=!1){const i=fP(t.pendingWriteTree_,e);if(pP(t.pendingWriteTree_,e)){let s=new mt(null);return i.snap!=null?s=s.set(je(),!0):fn(i.children,o=>{s=s.set(new Ze(o),!0)}),_a(t,new Tc(i.path,s,n))}else return[]}function Nc(t,e,n){return _a(t,new Dr(af(),e,n))}function JP(t,e,n){const i=mt.fromObject(n);return _a(t,new fa(af(),e,i))}function ZP(t,e){return _a(t,new da(af(),e))}function $P(t,e,n){const i=Ef(t,n);if(i){const r=If(i),s=r.path,o=r.queryId,a=Nn(s,e),l=new da(lf(o),a);return wf(t,s,l)}else return[]}function bf(t,e,n,i){const r=e._path,s=t.syncPointTree_.get(r);let o=[];if(s&&(e._queryIdentifier==="default"||rE(s,e))){const a=zP(s,e,n,i);qP(s)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const l=a.removed;o=a.events;const c=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(h,d)=>Ki(d));if(c&&!u){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const d=nD(h);for(let f=0;f<d.length;++f){const p=d[f],g=p.query,m=uE(t,p);t.listenProvider_.startListening(va(g),Mc(t,g),m.hashFn,m.onComplete)}}}if(!u&&l.length>0&&!i)if(c){const h=null;t.listenProvider_.stopListening(va(e),h)}else l.forEach(h=>{const d=t.queryToTagMap.get(Pc(h));t.listenProvider_.stopListening(va(h),d)});iD(t,l)}return o}function eD(t,e,n,i){const r=Ef(t,i);if(r!=null){const s=If(r),o=s.path,a=s.queryId,l=Nn(o,e),c=new Dr(lf(a),l,n);return wf(t,o,c)}else return[]}function tD(t,e,n,i){const r=Ef(t,i);if(r){const s=If(r),o=s.path,a=s.queryId,l=Nn(o,e),c=mt.fromObject(n),u=new fa(lf(a),l,c);return wf(t,o,u)}else return[]}function oE(t,e,n){const i=e._path;let r=null,s=!1;t.syncPointTree_.foreachOnPath(i,(h,d)=>{const f=Nn(h,i);r=r||Vs(d,f),s=s||Ki(d)});let o=t.syncPointTree_.get(i);o?(s=s||Ki(o),r=r||Vs(o,je())):(o=new jP,t.syncPointTree_=t.syncPointTree_.set(i,o));let a;r!=null?a=!0:(a=!1,r=he.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((d,f)=>{const p=Vs(f,je());p&&(r=r.updateImmediateChild(d,p))}));const l=rE(o,e);if(!l&&!e._queryParams.loadsAllData()){const h=Pc(e);G(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const d=rD();t.queryToTagMap.set(h,d),t.tagToQueryMap.set(d,h)}const c=ff(t.pendingWriteTree_,i);let u=GP(o,e,n,c,r,a);if(!l&&!s){const h=iE(o,e);u=u.concat(sD(t,e,h))}return u}function aE(t,e,n){const i=!0,r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Nn(o,e),c=Vs(a,l);if(c)return c});return Wb(r,e,s,n,i)}function _a(t,e){return lE(e,t.syncPointTree_,null,ff(t.pendingWriteTree_,je()))}function lE(t,e,n,i){if(Re(t.path))return cE(t,e,n,i);{const r=e.get(je());n==null&&r!=null&&(n=Vs(r,je()));let s=[];const o=Ae(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=zb(i,o);s=s.concat(lE(a,l,c,u))}return r&&(s=s.concat(yf(r,t,i,n))),s}}function cE(t,e,n,i){const r=e.get(je());n==null&&r!=null&&(n=Vs(r,je()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=zb(i,o),u=t.operationForChild(o);u&&(s=s.concat(cE(u,a,l,c)))}),r&&(s=s.concat(yf(r,t,i,n))),s}function uE(t,e){const n=e.query,i=Mc(t,n);return{hashFn:()=>(FP(e)||he.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?$P(t,n._path,i):ZP(t,n._path);{const s=QN(r,n);return bf(t,n,null,s)}}}}function Mc(t,e){const n=Pc(e);return t.queryToTagMap.get(n)}function Pc(t){return t._path.toString()+"$"+t._queryIdentifier}function Ef(t,e){return t.tagToQueryMap.get(e)}function If(t){const e=t.indexOf("$");return G(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ze(t.substr(0,e))}}function wf(t,e,n){const i=t.syncPointTree_.get(e);G(i,"Missing sync point for query tag that we're tracking");const r=ff(t.pendingWriteTree_,e);return yf(i,n,r,null)}function nD(t){return t.fold((e,n,i)=>{if(n&&Ki(n))return[Oc(n)];{let r=[];return n&&(r=nE(n)),fn(i,(s,o)=>{r=r.concat(o)}),r}})}function va(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(XP())(t._repo,t._path):t}function iD(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=Pc(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function rD(){return QP++}function sD(t,e,n){const i=e._path,r=Mc(t,e),s=uE(t,n),o=t.listenProvider_.startListening(va(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)G(!Ki(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!Re(c)&&u&&Ki(u))return[Oc(u).query];{let d=[];return u&&(d=d.concat(nE(u).map(f=>f.query))),fn(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(va(u),Mc(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Tf(n)}node(){return this.node_}}class Cf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ct(this.path_,e);return new Cf(this.syncTree_,n)}node(){return aE(this.syncTree_,this.path_)}}const oD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},hE=function(t,e,n){if(!t||typeof t!="object")return t;if(G(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return aD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return lD(t[".sv"],e);G(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},aD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:G(!1,"Unexpected server value: "+t)}},lD=function(t,e,n){t.hasOwnProperty("increment")||G(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&G(!1,"Unexpected increment value: "+i);const r=e.node();if(G(r!==null&&typeof r!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},cD=function(t,e,n,i){return Sf(e,new Cf(n,t),i)},uD=function(t,e,n){return Sf(t,new Tf(e),n)};function Sf(t,e,n){const i=t.getPriority().val(),r=hE(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=hE(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new zt(a,Vt(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new zt(r))),o.forEachChild(It,(a,l)=>{const c=Sf(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function kf(t,e){let n=e instanceof Ze?e:new Ze(e),i=t,r=Ae(n);for(;r!==null;){const s=Zr(i.node.children,r)||{children:{},childCount:0};i=new Af(r,i,s),n=ot(n),r=Ae(n)}return i}function Bs(t){return t.node.value}function dE(t,e){t.node.value=e,Rf(t)}function fE(t){return t.node.childCount>0}function hD(t){return Bs(t)===void 0&&!fE(t)}function Dc(t,e){fn(t.node.children,(n,i)=>{e(new Af(n,t,i))})}function pE(t,e,n,i){n&&!i&&e(t),Dc(t,r=>{pE(r,e,!0,i)}),n&&i&&e(t)}function dD(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ya(t){return new Ze(t.parent===null?t.name:ya(t.parent)+"/"+t.name)}function Rf(t){t.parent!==null&&fD(t.parent,t.name,t)}function fD(t,e,n){const i=hD(n),r=$n(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,Rf(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Rf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=/[\[\].#$\/\u0000-\u001F\u007F]/,mD=/[\[\].#$\u0000-\u001F\u007F]/,Of=10*1024*1024,Lf=function(t){return typeof t=="string"&&t.length!==0&&!pD.test(t)},mE=function(t){return typeof t=="string"&&t.length!==0&&!mD.test(t)},gD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mE(t)},gE=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!mc(t)||t&&typeof t=="object"&&$n(t,".sv")},_E=function(t,e,n,i){i&&e===void 0||Fc($r(t,"value"),e,n)},Fc=function(t,e,n){const i=n instanceof Ze?new LM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Pr(i));if(typeof e=="function")throw new Error(t+"contains a function "+Pr(i)+" with contents = "+e.toString());if(mc(e))throw new Error(t+"contains "+e.toString()+" "+Pr(i));if(typeof e=="string"&&e.length>Of/3&&za(e)>Of)throw new Error(t+"contains a string greater than "+Of+" utf8 bytes "+Pr(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(fn(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Lf(o)))throw new Error(t+" contains an invalid key ("+o+") "+Pr(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);NM(i,o),Fc(t,a,i),MM(i)}),r&&s)throw new Error(t+' contains ".value" child '+Pr(i)+" in addition to actual children.")}},_D=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const s=sa(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Lf(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(OM);let r=null;for(n=0;n<e.length;n++){if(i=e[n],r!==null&&Gn(r,i))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},vD=function(t,e,n,i){if(i&&e===void 0)return;const r=$r(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];fn(e,(o,a)=>{const l=new Ze(o);if(Fc(r,a,Ct(n,l)),Yd(l)===".priority"&&!gE(a))throw new Error(r+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),_D(r,s)},yD=function(t,e,n){if(!(n&&e===void 0)){if(mc(e))throw new Error($r(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!gE(e))throw new Error($r(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},vE=function(t,e,n,i){if(!(i&&n===void 0)&&!mE(n))throw new Error($r(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},bD=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),vE(t,e,n,i)},xc=function(t,e){if(Ae(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ED=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Lf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!gD(n))throw new Error($r(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yE(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!Jd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function bE(t,e,n){yE(t,n),EE(t,i=>Jd(i,e))}function Vr(t,e,n){yE(t,n),EE(t,i=>Gn(i,e)||Gn(e,i))}function EE(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(wD(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function wD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Or&&en("event: "+n.toString()),Ns(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD="repo_interrupt",CD=25;class SD{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ID,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wc(),this.transactionQueueTree_=new Af,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function AD(t,e,n){if(t.stats_=zd(t.repoInfo_),t.forceRestClient_||$N())t.server_=new Ic(t.repoInfo_,(i,r,s,o)=>{wE(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>TE(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ht(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new _i(t.repoInfo_,e,(i,r,s,o)=>{wE(t,i,r,s,o)},i=>{TE(t,i)},i=>{RD(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=oM(t.repoInfo_,()=>new oP(t.stats_,t.server_)),t.infoData_=new tP,t.infoSyncTree_=new sE({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Nc(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Nf(t,"connected",!1),t.serverSyncTree_=new sE({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);Vr(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function kD(t){const n=t.infoData_.getNode(new Ze(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function IE(t){return oD({timestamp:kD(t)})}function wE(t,e,n,i,r){t.dataUpdateCount++;const s=new Ze(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=Wa(n,c=>Vt(c));o=tD(t.serverSyncTree_,s,l,r)}else{const l=Vt(n);o=eD(t.serverSyncTree_,s,l,r)}else if(i){const l=Wa(n,c=>Vt(c));o=JP(t.serverSyncTree_,s,l)}else{const l=Vt(n);o=Nc(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Pf(t,s)),Vr(t.eventQueue_,a,o)}function TE(t,e){Nf(t,"connected",e),e===!1&&LD(t)}function RD(t,e){fn(e,(n,i)=>{Nf(t,n,i)})}function Nf(t,e,n){const i=new Ze("/.info/"+e),r=Vt(n);t.infoData_.updateSnapshot(i,r);const s=Nc(t.infoSyncTree_,i,r);Vr(t.eventQueue_,i,s)}function OD(t){return t.nextWriteId_++}function LD(t){AE(t,"onDisconnectEvents");const e=IE(t),n=wc();of(t.onDisconnect_,je(),(r,s)=>{const o=cD(r,s,t.serverSyncTree_,e);xs(n,r,o)});let i=[];of(n,je(),(r,s)=>{i=i.concat(Nc(t.serverSyncTree_,r,s));const o=VD(t,r);Pf(t,o)}),t.onDisconnect_=wc(),Vr(t.eventQueue_,je(),i)}function ND(t,e,n){t.server_.onDisconnectCancel(e.toString(),(i,r)=>{i==="ok"&&sf(t.onDisconnect_,e),ba(t,n,i,r)})}function CE(t,e,n,i){const r=Vt(n);t.server_.onDisconnectPut(e.toString(),r.val(!0),(s,o)=>{s==="ok"&&xs(t.onDisconnect_,e,r),ba(t,i,s,o)})}function MD(t,e,n,i,r){const s=Vt(n,i);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&xs(t.onDisconnect_,e,s),ba(t,r,o,a)})}function PD(t,e,n,i){if(qa(n)){en("onDisconnect().update() called with empty data.  Don't do anything."),ba(t,i,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(r,s)=>{r==="ok"&&fn(n,(o,a)=>{const l=Vt(a);xs(t.onDisconnect_,Ct(e,o),l)}),ba(t,i,r,s)})}function DD(t,e,n){let i;Ae(e._path)===".info"?i=oE(t.infoSyncTree_,e,n):i=oE(t.serverSyncTree_,e,n),bE(t.eventQueue_,e._path,i)}function SE(t,e,n){let i;Ae(e._path)===".info"?i=bf(t.infoSyncTree_,e,n):i=bf(t.serverSyncTree_,e,n),bE(t.eventQueue_,e._path,i)}function FD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(TD)}function AE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),en(n,...e)}function ba(t,e,n,i){e&&Ns(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function kE(t,e,n){return aE(t.serverSyncTree_,e,n)||he.EMPTY_NODE}function Mf(t,e=t.transactionQueueTree_){if(e||Uc(t,e),Bs(e)){const n=OE(t,e);G(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&xD(t,ya(e),n)}else fE(e)&&Dc(e,n=>{Mf(t,n)})}function xD(t,e,n){const i=n.map(c=>c.currentWriteId),r=kE(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];G(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Nn(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{AE(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(js(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Uc(t,kf(t.transactionQueueTree_,e)),Mf(t,t.transactionQueueTree_),Vr(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ns(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Bn("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Pf(t,e)}},o)}function Pf(t,e){const n=RE(t,e),i=ya(n),r=OE(t,n);return UD(t,r,i),i}function UD(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Nn(n,l.path);let u=!1,h;if(G(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,r=r.concat(js(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=CD)u=!0,h="maxretry",r=r.concat(js(t.serverSyncTree_,l.currentWriteId,!0));else{const d=kE(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Fc("transaction failed: Data returned ",f,l.path);let p=Vt(f);typeof f=="object"&&f!=null&&$n(f,".priority")||(p=p.updatePriority(d.getPriority()));const m=l.currentWriteId,v=IE(t),C=uD(p,d,v);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=C,l.currentWriteId=OD(t),o.splice(o.indexOf(m),1),r=r.concat(YP(t.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),r=r.concat(js(t.serverSyncTree_,m,!0))}else u=!0,h="nodata",r=r.concat(js(t.serverSyncTree_,l.currentWriteId,!0))}Vr(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Uc(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Ns(i[a]);Mf(t,t.transactionQueueTree_)}function RE(t,e){let n,i=t.transactionQueueTree_;for(n=Ae(e);n!==null&&Bs(i)===void 0;)i=kf(i,n),e=ot(e),n=Ae(e);return i}function OE(t,e){const n=[];return LE(t,e,n),n.sort((i,r)=>i.order-r.order),n}function LE(t,e,n){const i=Bs(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Dc(e,r=>{LE(t,r,n)})}function Uc(t,e){const n=Bs(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,dE(e,n.length>0?n:void 0)}Dc(e,i=>{Uc(t,i)})}function VD(t,e){const n=ya(RE(t,e)),i=kf(t.transactionQueueTree_,e);return dD(i,r=>{Df(t,r)}),Df(t,i),pE(i,r=>{Df(t,r)}),n}function Df(t,e){const n=Bs(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(G(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(G(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(js(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?dE(e,void 0):n.length=s+1,Vr(t.eventQueue_,ya(e),r);for(let o=0;o<i.length;o++)Ns(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function BD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Bn(`Invalid query segment '${n}' in query '${t}'`)}return e}const NE=function(t,e){const n=HD(t),i=n.namespace;n.domain==="firebase.com"&&Lr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Lr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||WN();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new iM(n.host,n.secure,i,e,r,"",i!==n.subdomain),path:new Ze(n.pathString)}},HD=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=jD(t.substring(u,h)));const d=BD(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=i}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ht(this.snapshot.exportVal())}}class PE{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return G(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class WD{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Si;return ND(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){xc("OnDisconnect.remove",this._path);const e=new Si;return CE(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){xc("OnDisconnect.set",this._path),_E("OnDisconnect.set",e,this._path,!1);const n=new Si;return CE(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){xc("OnDisconnect.setWithPriority",this._path),_E("OnDisconnect.setWithPriority",e,this._path,!1),yD("OnDisconnect.setWithPriority",n,!1);const i=new Si;return MD(this._repo,this._path,e,n,i.wrapCallback(()=>{})),i.promise}update(e){xc("OnDisconnect.update",this._path),vD("OnDisconnect.update",e,this._path,!1);const n=new Si;return PD(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return Re(this._path)?null:Yd(this._path)}get ref(){return new yi(this._repo,this._path)}get _queryIdentifier(){const e=Db(this._queryParams),n=jd(e);return n==="{}"?"default":n}get _queryObject(){return Db(this._queryParams)}isEqual(e){if(e=Ye(e),!(e instanceof Ff))return!1;const n=this._repo===e._repo,i=Jd(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+RM(this._path)}}class yi extends Ff{constructor(e,n){super(e,n,new rf,!1)}get parent(){const e=wb(this._path);return e===null?null:new yi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ea{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ze(e),i=Vc(this.ref,e);return new Ea(this._node.getChild(n),i,It)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Ea(r,Vc(this.ref,i),It)))}hasChild(e){const n=new Ze(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Dj(t,e){return t=Ye(t),t._checkNotDeleted("ref"),e!==void 0?Vc(t._root,e):t._root}function Vc(t,e){return t=Ye(t),Ae(t._path)===null?bD("child","path",e,!1):vE("child","path",e,!1),new yi(t._repo,Ct(t._path,e))}function Fj(t){return t=Ye(t),new WD(t._repo,t._path)}class xf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new ME("value",this,new Ea(e.snapshotNode,new yi(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new PE(this,e,n):null}matches(e){return e instanceof xf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Uf{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new PE(this,e,n):null}createEvent(e,n){G(e.childName!=null,"Child events should have a childName.");const i=Vc(new yi(n._repo,n._path),e.childName),r=n._queryParams.getIndex();return new ME(e.type,this,new Ea(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Uf?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function GD(t,e,n,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){const l=n,c=(u,h)=>{SE(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new qD(n,s||void 0),a=e==="value"?new xf(o):new Uf(e,o);return DD(t._repo,t,a),()=>SE(t._repo,t,a)}function xj(t,e,n,i){return GD(t,"value",e,n,i)}BP(yi);KP(yi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD="FIREBASE_DATABASE_EMULATOR_HOST",Vf={};let KD=!1;function XD(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Lr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),en("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=NE(s,r),a=o.repoInfo,l,c;typeof process!="undefined"&&(c=process.env[zD]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=NE(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new Bd(Bd.OWNER):new tM(t.name,t.options,e);ED("Invalid Firebase Database URL",o),Re(o.path)||Lr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=YD(a,t,u,new eM(t.name,n));return new JD(h,t)}function QD(t,e){const n=Vf[e];(!n||n[t.key]!==t)&&Lr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),FD(t),delete n[t.key]}function YD(t,e,n,i){let r=Vf[e.name];r||(r={},Vf[e.name]=r);let s=r[t.toURLString()];return s&&Lr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new SD(t,KD,n,i),r[t.toURLString()]=s,s}class JD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(AD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new yi(this._repo,je())),this._rootInternal}_delete(){return this._rootInternal!==null&&(QD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Lr("Cannot call "+e+" on a deleted database.")}}function Uj(t=so(),e){return es(t,"database").getImmediate({identifier:e})}/**
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
 */function ZD(t){VN(or),ki(new ri("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return XD(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),An(qy,Wy,t),An(qy,Wy,"esm2017")}_i.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};_i.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ZD();var Ia={exports:{}},Hs=typeof Reflect=="object"?Reflect:null,DE=Hs&&typeof Hs.apply=="function"?Hs.apply:function(e,n,i){return Function.prototype.apply.call(e,n,i)},jc;Hs&&typeof Hs.ownKeys=="function"?jc=Hs.ownKeys:Object.getOwnPropertySymbols?jc=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:jc=function(e){return Object.getOwnPropertyNames(e)};function $D(t){console&&console.warn&&console.warn(t)}var FE=Number.isNaN||function(e){return e!==e};function nt(){nt.init.call(this)}Ia.exports=nt;Ia.exports.once=iF;nt.EventEmitter=nt;nt.prototype._events=void 0;nt.prototype._eventsCount=0;nt.prototype._maxListeners=void 0;var xE=10;function Bc(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(nt,"defaultMaxListeners",{enumerable:!0,get:function(){return xE},set:function(t){if(typeof t!="number"||t<0||FE(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");xE=t}});nt.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};nt.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||FE(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function UE(t){return t._maxListeners===void 0?nt.defaultMaxListeners:t._maxListeners}nt.prototype.getMaxListeners=function(){return UE(this)};nt.prototype.emit=function(e){for(var n=[],i=1;i<arguments.length;i++)n.push(arguments[i]);var r=e==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var o;if(n.length>0&&(o=n[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var l=s[e];if(l===void 0)return!1;if(typeof l=="function")DE(l,this,n);else for(var c=l.length,u=qE(l,c),i=0;i<c;++i)DE(u[i],this,n);return!0};function VE(t,e,n,i){var r,s,o;if(Bc(n),s=t._events,s===void 0?(s=t._events=Object.create(null),t._eventsCount=0):(s.newListener!==void 0&&(t.emit("newListener",e,n.listener?n.listener:n),s=t._events),o=s[e]),o===void 0)o=s[e]=n,++t._eventsCount;else if(typeof o=="function"?o=s[e]=i?[n,o]:[o,n]:i?o.unshift(n):o.push(n),r=UE(t),r>0&&o.length>r&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=t,a.type=e,a.count=o.length,$D(a)}return t}nt.prototype.addListener=function(e,n){return VE(this,e,n,!1)};nt.prototype.on=nt.prototype.addListener;nt.prototype.prependListener=function(e,n){return VE(this,e,n,!0)};function eF(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function jE(t,e,n){var i={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},r=eF.bind(i);return r.listener=n,i.wrapFn=r,r}nt.prototype.once=function(e,n){return Bc(n),this.on(e,jE(this,e,n)),this};nt.prototype.prependOnceListener=function(e,n){return Bc(n),this.prependListener(e,jE(this,e,n)),this};nt.prototype.removeListener=function(e,n){var i,r,s,o,a;if(Bc(n),r=this._events,r===void 0)return this;if(i=r[e],i===void 0)return this;if(i===n||i.listener===n)--this._eventsCount==0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,i.listener||n));else if(typeof i!="function"){for(s=-1,o=i.length-1;o>=0;o--)if(i[o]===n||i[o].listener===n){a=i[o].listener,s=o;break}if(s<0)return this;s===0?i.shift():tF(i,s),i.length===1&&(r[e]=i[0]),r.removeListener!==void 0&&this.emit("removeListener",e,a||n)}return this};nt.prototype.off=nt.prototype.removeListener;nt.prototype.removeAllListeners=function(e){var n,i,r;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[e]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete i[e]),this;if(arguments.length===0){var s=Object.keys(i),o;for(r=0;r<s.length;++r)o=s[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=i[e],typeof n=="function")this.removeListener(e,n);else if(n!==void 0)for(r=n.length-1;r>=0;r--)this.removeListener(e,n[r]);return this};function BE(t,e,n){var i=t._events;if(i===void 0)return[];var r=i[e];return r===void 0?[]:typeof r=="function"?n?[r.listener||r]:[r]:n?nF(r):qE(r,r.length)}nt.prototype.listeners=function(e){return BE(this,e,!0)};nt.prototype.rawListeners=function(e){return BE(this,e,!1)};nt.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):HE.call(t,e)};nt.prototype.listenerCount=HE;function HE(t){var e=this._events;if(e!==void 0){var n=e[t];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}nt.prototype.eventNames=function(){return this._eventsCount>0?jc(this._events):[]};function qE(t,e){for(var n=new Array(e),i=0;i<e;++i)n[i]=t[i];return n}function tF(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function nF(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function iF(t,e){return new Promise(function(n,i){function r(o){t.removeListener(e,s),i(o)}function s(){typeof t.removeListener=="function"&&t.removeListener("error",r),n([].slice.call(arguments))}WE(t,e,s,{once:!0}),e!=="error"&&rF(t,r,{once:!0})})}function rF(t,e,n){typeof t.on=="function"&&WE(t,"error",e,n)}function WE(t,e,n,i){if(typeof t.on=="function")i.once?t.once(e,n):t.on(e,n);else if(typeof t.addEventListener=="function")t.addEventListener(e,function r(s){i.once&&t.removeEventListener(e,r),n(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}var Hc=Ia.exports,sF=function(t){if(Array.isArray(t))return t},oF=function(t,e){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(t)){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(l){r=!0,s=l}finally{try{i||a.return==null||a.return()}finally{if(r)throw s}}return n}},GE=function(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i},aF=function(t,e){if(t){if(typeof t=="string")return GE(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?GE(t,e):void 0}},lF=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},cF=function(t,e){return sF(t)||oF(t,e)||aF(t,e)||lF()},uF=function(t,e){if(t==null)return{};var n,i,r={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(r[n]=t[n]);return r},hF=function(t,e){if(t==null)return{};var n,i,r=uF(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r},qc=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Xi(t,e){return t(e={exports:{}},e.exports),e.exports}var ee=Xi(function(t){var e=function(n){var i,r=Object.prototype,s=r.hasOwnProperty,o=typeof Symbol=="function"?Symbol:{},a=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(S,A,K){return Object.defineProperty(S,A,{value:K,enumerable:!0,configurable:!0,writable:!0}),S[A]}try{u({},"")}catch{u=function(A,K,H){return A[K]=H}}function h(S,A,K,H){var Q=A&&A.prototype instanceof C?A:C,me=Object.create(Q.prototype),q=new P(H||[]);return me._invoke=function(Le,Te,Ee){var Se=f;return function(X,ge){if(Se===g)throw new Error("Generator is already running");if(Se===m){if(X==="throw")throw ge;return z()}for(Ee.method=X,Ee.arg=ge;;){var ht=Ee.delegate;if(ht){var tn=L(ht,Ee);if(tn){if(tn===v)continue;return tn}}if(Ee.method==="next")Ee.sent=Ee._sent=Ee.arg;else if(Ee.method==="throw"){if(Se===f)throw Se=m,Ee.arg;Ee.dispatchException(Ee.arg)}else Ee.method==="return"&&Ee.abrupt("return",Ee.arg);Se=g;var Mt=d(Le,Te,Ee);if(Mt.type==="normal"){if(Se=Ee.done?m:p,Mt.arg===v)continue;return{value:Mt.arg,done:Ee.done}}Mt.type==="throw"&&(Se=m,Ee.method="throw",Ee.arg=Mt.arg)}}}(S,K,q),me}function d(S,A,K){try{return{type:"normal",arg:S.call(A,K)}}catch(H){return{type:"throw",arg:H}}}n.wrap=h;var f="suspendedStart",p="suspendedYield",g="executing",m="completed",v={};function C(){}function w(){}function y(){}var R={};R[a]=function(){return this};var k=Object.getPrototypeOf,_=k&&k(k(O([])));_&&_!==r&&s.call(_,a)&&(R=_);var I=y.prototype=C.prototype=Object.create(R);function U(S){["next","throw","return"].forEach(function(A){u(S,A,function(K){return this._invoke(A,K)})})}function b(S,A){var K;this._invoke=function(H,Q){function me(){return new A(function(q,Le){(function Te(Ee,Se,X,ge){var ht=d(S[Ee],S,Se);if(ht.type!=="throw"){var tn=ht.arg,Mt=tn.value;return Mt&&typeof Mt=="object"&&s.call(Mt,"__await")?A.resolve(Mt.__await).then(function(V){Te("next",V,X,ge)},function(V){Te("throw",V,X,ge)}):A.resolve(Mt).then(function(V){tn.value=V,X(tn)},function(V){return Te("throw",V,X,ge)})}ge(ht.arg)})(H,Q,q,Le)})}return K=K?K.then(me,me):me()}}function L(S,A){var K=S.iterator[A.method];if(K===i){if(A.delegate=null,A.method==="throw"){if(S.iterator.return&&(A.method="return",A.arg=i,L(S,A),A.method==="throw"))return v;A.method="throw",A.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var H=d(K,S.iterator,A.arg);if(H.type==="throw")return A.method="throw",A.arg=H.arg,A.delegate=null,v;var Q=H.arg;return Q?Q.done?(A[S.resultName]=Q.value,A.next=S.nextLoc,A.method!=="return"&&(A.method="next",A.arg=i),A.delegate=null,v):Q:(A.method="throw",A.arg=new TypeError("iterator result is not an object"),A.delegate=null,v)}function M(S){var A={tryLoc:S[0]};1 in S&&(A.catchLoc=S[1]),2 in S&&(A.finallyLoc=S[2],A.afterLoc=S[3]),this.tryEntries.push(A)}function E(S){var A=S.completion||{};A.type="normal",delete A.arg,S.completion=A}function P(S){this.tryEntries=[{tryLoc:"root"}],S.forEach(M,this),this.reset(!0)}function O(S){if(S){var A=S[a];if(A)return A.call(S);if(typeof S.next=="function")return S;if(!isNaN(S.length)){var K=-1,H=function Q(){for(;++K<S.length;)if(s.call(S,K))return Q.value=S[K],Q.done=!1,Q;return Q.value=i,Q.done=!0,Q};return H.next=H}}return{next:z}}function z(){return{value:i,done:!0}}return w.prototype=I.constructor=y,y.constructor=w,w.displayName=u(y,c,"GeneratorFunction"),n.isGeneratorFunction=function(S){var A=typeof S=="function"&&S.constructor;return!!A&&(A===w||(A.displayName||A.name)==="GeneratorFunction")},n.mark=function(S){return Object.setPrototypeOf?Object.setPrototypeOf(S,y):(S.__proto__=y,u(S,c,"GeneratorFunction")),S.prototype=Object.create(I),S},n.awrap=function(S){return{__await:S}},U(b.prototype),b.prototype[l]=function(){return this},n.AsyncIterator=b,n.async=function(S,A,K,H,Q){Q===void 0&&(Q=Promise);var me=new b(h(S,A,K,H),Q);return n.isGeneratorFunction(A)?me:me.next().then(function(q){return q.done?q.value:me.next()})},U(I),u(I,c,"Generator"),I[a]=function(){return this},I.toString=function(){return"[object Generator]"},n.keys=function(S){var A=[];for(var K in S)A.push(K);return A.reverse(),function H(){for(;A.length;){var Q=A.pop();if(Q in S)return H.value=Q,H.done=!1,H}return H.done=!0,H}},n.values=O,P.prototype={constructor:P,reset:function(S){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(E),!S)for(var A in this)A.charAt(0)==="t"&&s.call(this,A)&&!isNaN(+A.slice(1))&&(this[A]=i)},stop:function(){this.done=!0;var S=this.tryEntries[0].completion;if(S.type==="throw")throw S.arg;return this.rval},dispatchException:function(S){if(this.done)throw S;var A=this;function K(Te,Ee){return me.type="throw",me.arg=S,A.next=Te,Ee&&(A.method="next",A.arg=i),!!Ee}for(var H=this.tryEntries.length-1;H>=0;--H){var Q=this.tryEntries[H],me=Q.completion;if(Q.tryLoc==="root")return K("end");if(Q.tryLoc<=this.prev){var q=s.call(Q,"catchLoc"),Le=s.call(Q,"finallyLoc");if(q&&Le){if(this.prev<Q.catchLoc)return K(Q.catchLoc,!0);if(this.prev<Q.finallyLoc)return K(Q.finallyLoc)}else if(q){if(this.prev<Q.catchLoc)return K(Q.catchLoc,!0)}else{if(!Le)throw new Error("try statement without catch or finally");if(this.prev<Q.finallyLoc)return K(Q.finallyLoc)}}}},abrupt:function(S,A){for(var K=this.tryEntries.length-1;K>=0;--K){var H=this.tryEntries[K];if(H.tryLoc<=this.prev&&s.call(H,"finallyLoc")&&this.prev<H.finallyLoc){var Q=H;break}}Q&&(S==="break"||S==="continue")&&Q.tryLoc<=A&&A<=Q.finallyLoc&&(Q=null);var me=Q?Q.completion:{};return me.type=S,me.arg=A,Q?(this.method="next",this.next=Q.finallyLoc,v):this.complete(me)},complete:function(S,A){if(S.type==="throw")throw S.arg;return S.type==="break"||S.type==="continue"?this.next=S.arg:S.type==="return"?(this.rval=this.arg=S.arg,this.method="return",this.next="end"):S.type==="normal"&&A&&(this.next=A),v},finish:function(S){for(var A=this.tryEntries.length-1;A>=0;--A){var K=this.tryEntries[A];if(K.finallyLoc===S)return this.complete(K.completion,K.afterLoc),E(K),v}},catch:function(S){for(var A=this.tryEntries.length-1;A>=0;--A){var K=this.tryEntries[A];if(K.tryLoc===S){var H=K.completion;if(H.type==="throw"){var Q=H.arg;E(K)}return Q}}throw new Error("illegal catch attempt")},delegateYield:function(S,A,K){return this.delegate={iterator:O(S),resultName:A,nextLoc:K},this.method==="next"&&(this.arg=i),v}},n}(t.exports);try{regeneratorRuntime=e}catch{Function("r","regeneratorRuntime = r")(e)}});function zE(t,e,n,i,r,s,o){try{var a=t[s](o),l=a.value}catch(c){return void n(c)}a.done?e(l):Promise.resolve(l).then(i,r)}var Be=function(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var s=t.apply(e,n);function o(l){zE(s,i,r,o,a,"next",l)}function a(l){zE(s,i,r,o,a,"throw",l)}o(void 0)})}},Qi=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Wc=function(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t};function KE(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var Yi=function(t,e,n){return e&&KE(t.prototype,e),n&&KE(t,n),t},jf=Xi(function(t){function e(n,i){return t.exports=e=Object.setPrototypeOf||function(r,s){return r.__proto__=s,r},e(n,i)}t.exports=e}),Gc=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&jf(t,e)},zn=Xi(function(t){function e(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?t.exports=e=function(i){return typeof i}:t.exports=e=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},e(n)}t.exports=e}),zc=function(t,e){return!e||zn(e)!=="object"&&typeof e!="function"?Wc(t):e},bi=Xi(function(t){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},e(n)}t.exports=e}),Kc=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},dF=typeof Map=="function",fF=typeof Set=="function",pF=typeof WeakSet=="function",XE=Object.keys,QE=function(t,e){return t&&typeof t=="object"&&e.add(t)},YE=function(t,e,n,i){for(var r,s=0;s<t.length;s++)if(n((r=t[s])[0],e[0],i)&&n(r[1],e[1],i))return!0;return!1},Bf=function(t,e,n,i){for(var r=0;r<t.length;r++)if(n(t[r],e,i))return!0;return!1},wa=function(t,e){return t===e||t!=t&&e!=e},JE=function(t){return t.constructor===Object},ZE=function(t){return typeof t.then=="function"},$E=function(t){return!(!t.$$typeof||!t._store)},eI=function(t){return function(e){var n=t||e;return function(i,r,s){s===void 0&&(s=pF?new WeakSet:Object.create({_values:[],add:function(l){this._values.push(l)},has:function(l){return!!~this._values.indexOf(l)}}));var o=s.has(i),a=s.has(r);return o||a?o&&a:(QE(i,s),QE(r,s),n(i,r,s))}}},tI=function(t){var e=[];return t.forEach(function(n,i){return e.push([i,n])}),e},nI=function(t){var e=[];return t.forEach(function(n){return e.push(n)}),e},mF=function(t,e,n,i){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!n(t[r],e[r],i))return!1;return!0},gF=function(t,e,n,i){if(t.size!==e.size)return!1;for(var r=tI(t),s=tI(e),o=0;o<r.length;o++)if(!YE(s,r[o],n,i)||!YE(r,s[o],n,i))return!1;return!0},iI=function(t,e,n,i){var r,s=XE(t),o=XE(e);if(s.length!==o.length)return!1;for(var a=0;a<s.length;a++)if(r=s[a],!Bf(o,r,wa)||(r!=="_owner"||!$E(t)||!$E(e))&&!n(t[r],e[r],i))return!1;return!0},_F=function(t,e){return t.source===e.source&&t.global===e.global&&t.ignoreCase===e.ignoreCase&&t.multiline===e.multiline&&t.unicode===e.unicode&&t.sticky===e.sticky&&t.lastIndex===e.lastIndex},vF=function(t,e,n,i){if(t.size!==e.size)return!1;for(var r=nI(t),s=nI(e),o=0;o<r.length;o++)if(!Bf(s,r[o],n,i)||!Bf(r,s[o],n,i))return!1;return!0},rI=Array.isArray,Xc=function(t){var e=typeof t=="function"?t(n):n;function n(i,r,s){if(wa(i,r))return!0;var o=typeof i;if(o!==typeof r||o!=="object"||!i||!r)return!1;if(JE(i)&&JE(r))return iI(i,r,e,s);var a=rI(i),l=rI(r);if(a||l)return a===l&&mF(i,r,e,s);var c=i instanceof Date,u=r instanceof Date;if(c||u)return c===u&&wa(i.getTime(),r.getTime());var h=i instanceof RegExp,d=r instanceof RegExp;if(h||d)return h===d&&_F(i,r);if(ZE(i)||ZE(r))return i===r;if(dF){var f=i instanceof Map,p=r instanceof Map;if(f||p)return f===p&&gF(i,r,e,s)}if(fF){var g=i instanceof Set,m=r instanceof Set;if(g||m)return g===m&&vF(i,r,e,s)}return iI(i,r,e,s)}return n},Qc=(Xc(eI()),Xc(eI(wa)),Xc());Xc(function(){return wa});const yF={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},sI={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},St={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},wn={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},Ji={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class F{static getFirstMatch(e,n){const i=n.match(e);return i&&i.length>0&&i[1]||""}static getSecondMatch(e,n){const i=n.match(e);return i&&i.length>1&&i[2]||""}static matchAndReturnConst(e,n,i){if(e.test(n))return i}static getWindowsVersionName(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(e){const n=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(n.push(0),n[0]===10)switch(n[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(e){const n=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(n.push(0),!(n[0]===1&&n[1]<5))return n[0]===1&&n[1]<6?"Cupcake":n[0]===1&&n[1]>=6?"Donut":n[0]===2&&n[1]<2?"Eclair":n[0]===2&&n[1]===2?"Froyo":n[0]===2&&n[1]>2?"Gingerbread":n[0]===3?"Honeycomb":n[0]===4&&n[1]<1?"Ice Cream Sandwich":n[0]===4&&n[1]<4?"Jelly Bean":n[0]===4&&n[1]>=4?"KitKat":n[0]===5?"Lollipop":n[0]===6?"Marshmallow":n[0]===7?"Nougat":n[0]===8?"Oreo":n[0]===9?"Pie":void 0}static getVersionPrecision(e){return e.split(".").length}static compareVersions(e,n,i=!1){const r=F.getVersionPrecision(e),s=F.getVersionPrecision(n);let o=Math.max(r,s),a=0;const l=F.map([e,n],c=>{const u=o-F.getVersionPrecision(c),h=c+new Array(u+1).join(".0");return F.map(h.split("."),d=>new Array(20-d.length).join("0")+d).reverse()});for(i&&(a=o-Math.min(r,s)),o-=1;o>=a;){if(l[0][o]>l[1][o])return 1;if(l[0][o]===l[1][o]){if(o===a)return 0;o-=1}else if(l[0][o]<l[1][o])return-1}}static map(e,n){const i=[];let r;if(Array.prototype.map)return Array.prototype.map.call(e,n);for(r=0;r<e.length;r+=1)i.push(n(e[r]));return i}static find(e,n){let i,r;if(Array.prototype.find)return Array.prototype.find.call(e,n);for(i=0,r=e.length;i<r;i+=1){const s=e[i];if(n(s,i))return s}}static assign(e,...n){const i=e;let r,s;if(Object.assign)return Object.assign(e,...n);for(r=0,s=n.length;r<s;r+=1){const o=n[r];typeof o=="object"&&o!==null&&Object.keys(o).forEach(a=>{i[a]=o[a]})}return e}static getBrowserAlias(e){return yF[e]}static getBrowserTypeByAlias(e){return sI[e]||""}}const ut=/version\/(\d+(\.?_?\d+)+)/i,bF=[{test:[/googlebot/i],describe(t){const e={name:"Googlebot"},n=F.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,t)||F.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/opera/i],describe(t){const e={name:"Opera"},n=F.getFirstMatch(ut,t)||F.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/opr\/|opios/i],describe(t){const e={name:"Opera"},n=F.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,t)||F.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/SamsungBrowser/i],describe(t){const e={name:"Samsung Internet for Android"},n=F.getFirstMatch(ut,t)||F.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/Whale/i],describe(t){const e={name:"NAVER Whale Browser"},n=F.getFirstMatch(ut,t)||F.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/MZBrowser/i],describe(t){const e={name:"MZ Browser"},n=F.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,t)||F.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/focus/i],describe(t){const e={name:"Focus"},n=F.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,t)||F.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/swing/i],describe(t){const e={name:"Swing"},n=F.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,t)||F.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/coast/i],describe(t){const e={name:"Opera Coast"},n=F.getFirstMatch(ut,t)||F.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/yabrowser/i],describe(t){const e={name:"Yandex Browser"},n=F.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,t)||F.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/ucbrowser/i],describe(t){const e={name:"UC Browser"},n=F.getFirstMatch(ut,t)||F.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/Maxthon|mxios/i],describe(t){const e={name:"Maxthon"},n=F.getFirstMatch(ut,t)||F.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/epiphany/i],describe(t){const e={name:"Epiphany"},n=F.getFirstMatch(ut,t)||F.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/puffin/i],describe(t){const e={name:"Puffin"},n=F.getFirstMatch(ut,t)||F.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/sleipnir/i],describe(t){const e={name:"Sleipnir"},n=F.getFirstMatch(ut,t)||F.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/k-meleon/i],describe(t){const e={name:"K-Meleon"},n=F.getFirstMatch(ut,t)||F.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/micromessenger/i],describe(t){const e={name:"WeChat"},n=F.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,t)||F.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/qqbrowser/i],describe(t){const e={name:/qqbrowserlite/i.test(t)?"QQ Browser Lite":"QQ Browser"},n=F.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,t)||F.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/msie|trident/i],describe(t){const e={name:"Internet Explorer"},n=F.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/\sedg\//i],describe(t){const e={name:"Microsoft Edge"},n=F.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/edg([ea]|ios)/i],describe(t){const e={name:"Microsoft Edge"},n=F.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/vivaldi/i],describe(t){const e={name:"Vivaldi"},n=F.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/seamonkey/i],describe(t){const e={name:"SeaMonkey"},n=F.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/sailfish/i],describe(t){const e={name:"Sailfish"},n=F.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,t);return n&&(e.version=n),e}},{test:[/silk/i],describe(t){const e={name:"Amazon Silk"},n=F.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/phantom/i],describe(t){const e={name:"PhantomJS"},n=F.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/slimerjs/i],describe(t){const e={name:"SlimerJS"},n=F.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e={name:"BlackBerry"},n=F.getFirstMatch(ut,t)||F.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/(web|hpw)[o0]s/i],describe(t){const e={name:"WebOS Browser"},n=F.getFirstMatch(ut,t)||F.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/bada/i],describe(t){const e={name:"Bada"},n=F.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/tizen/i],describe(t){const e={name:"Tizen"},n=F.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,t)||F.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/qupzilla/i],describe(t){const e={name:"QupZilla"},n=F.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,t)||F.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/firefox|iceweasel|fxios/i],describe(t){const e={name:"Firefox"},n=F.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/electron/i],describe(t){const e={name:"Electron"},n=F.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/chromium/i],describe(t){const e={name:"Chromium"},n=F.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,t)||F.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/chrome|crios|crmo/i],describe(t){const e={name:"Chrome"},n=F.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/GSA/i],describe(t){const e={name:"Google Search"},n=F.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test(t){const e=!t.test(/like android/i),n=t.test(/android/i);return e&&n},describe(t){const e={name:"Android Browser"},n=F.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/playstation 4/i],describe(t){const e={name:"PlayStation 4"},n=F.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/safari|applewebkit/i],describe(t){const e={name:"Safari"},n=F.getFirstMatch(ut,t);return n&&(e.version=n),e}},{test:[/.*/i],describe(t){const e=t.search("\\(")!==-1?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:F.getFirstMatch(e,t),version:F.getSecondMatch(e,t)}}}];var EF=[{test:[/Roku\/DVP/],describe(t){const e=F.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,t);return{name:wn.Roku,version:e}}},{test:[/windows phone/i],describe(t){const e=F.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,t);return{name:wn.WindowsPhone,version:e}}},{test:[/windows /i],describe(t){const e=F.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,t),n=F.getWindowsVersionName(e);return{name:wn.Windows,version:e,versionName:n}}},{test:[/Macintosh(.*?) FxiOS(.*?) Version\//],describe(t){const e=F.getSecondMatch(/(Version\/)(\d[\d.]+)/,t);return{name:wn.iOS,version:e}}},{test:[/macintosh/i],describe(t){const e=F.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,t).replace(/[_\s]/g,"."),n=F.getMacOSVersionName(e),i={name:wn.MacOS,version:e};return n&&(i.versionName=n),i}},{test:[/(ipod|iphone|ipad)/i],describe(t){const e=F.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,t).replace(/[_\s]/g,".");return{name:wn.iOS,version:e}}},{test(t){const e=!t.test(/like android/i),n=t.test(/android/i);return e&&n},describe(t){const e=F.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,t),n=F.getAndroidVersionName(e),i={name:wn.Android,version:e};return n&&(i.versionName=n),i}},{test:[/(web|hpw)[o0]s/i],describe(t){const e=F.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,t),n={name:wn.WebOS};return e&&e.length&&(n.version=e),n}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(t){const e=F.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,t)||F.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,t)||F.getFirstMatch(/\bbb(\d+)/i,t);return{name:wn.BlackBerry,version:e}}},{test:[/bada/i],describe(t){const e=F.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,t);return{name:wn.Bada,version:e}}},{test:[/tizen/i],describe(t){const e=F.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,t);return{name:wn.Tizen,version:e}}},{test:[/linux/i],describe:()=>({name:wn.Linux})},{test:[/CrOS/],describe:()=>({name:wn.ChromeOS})},{test:[/PlayStation 4/],describe(t){const e=F.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,t);return{name:wn.PlayStation4,version:e}}}],IF=[{test:[/googlebot/i],describe:()=>({type:"bot",vendor:"Google"})},{test:[/huawei/i],describe(t){const e=F.getFirstMatch(/(can-l01)/i,t)&&"Nova",n={type:St.mobile,vendor:"Huawei"};return e&&(n.model=e),n}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:()=>({type:St.tablet,vendor:"Nexus"})},{test:[/ipad/i],describe:()=>({type:St.tablet,vendor:"Apple",model:"iPad"})},{test:[/Macintosh(.*?) FxiOS(.*?) Version\//],describe:()=>({type:St.tablet,vendor:"Apple",model:"iPad"})},{test:[/kftt build/i],describe:()=>({type:St.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"})},{test:[/silk/i],describe:()=>({type:St.tablet,vendor:"Amazon"})},{test:[/tablet(?! pc)/i],describe:()=>({type:St.tablet})},{test(t){const e=t.test(/ipod|iphone/i),n=t.test(/like (ipod|iphone)/i);return e&&!n},describe(t){const e=F.getFirstMatch(/(ipod|iphone)/i,t);return{type:St.mobile,vendor:"Apple",model:e}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:()=>({type:St.mobile,vendor:"Nexus"})},{test:[/[^-]mobi/i],describe:()=>({type:St.mobile})},{test:t=>t.getBrowserName(!0)==="blackberry",describe:()=>({type:St.mobile,vendor:"BlackBerry"})},{test:t=>t.getBrowserName(!0)==="bada",describe:()=>({type:St.mobile})},{test:t=>t.getBrowserName()==="windows phone",describe:()=>({type:St.mobile,vendor:"Microsoft"})},{test(t){const e=Number(String(t.getOSVersion()).split(".")[0]);return t.getOSName(!0)==="android"&&e>=3},describe:()=>({type:St.tablet})},{test:t=>t.getOSName(!0)==="android",describe:()=>({type:St.mobile})},{test:t=>t.getOSName(!0)==="macos",describe:()=>({type:St.desktop,vendor:"Apple"})},{test:t=>t.getOSName(!0)==="windows",describe:()=>({type:St.desktop})},{test:t=>t.getOSName(!0)==="linux",describe:()=>({type:St.desktop})},{test:t=>t.getOSName(!0)==="playstation 4",describe:()=>({type:St.tv})},{test:t=>t.getOSName(!0)==="roku",describe:()=>({type:St.tv})}],wF=[{test:t=>t.getBrowserName(!0)==="microsoft edge",describe(t){if(/\sedg\//i.test(t))return{name:Ji.Blink};const e=F.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,t);return{name:Ji.EdgeHTML,version:e}}},{test:[/trident/i],describe(t){const e={name:Ji.Trident},n=F.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:t=>t.test(/presto/i),describe(t){const e={name:Ji.Presto},n=F.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test(t){const e=t.test(/gecko/i),n=t.test(/like gecko/i);return e&&!n},describe(t){const e={name:Ji.Gecko},n=F.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}},{test:[/(apple)?webkit\/537\.36/i],describe:()=>({name:Ji.Blink})},{test:[/(apple)?webkit/i],describe(t){const e={name:Ji.WebKit},n=F.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,t);return n&&(e.version=n),e}}];class oI{constructor(e,n=!1){if(e==null||e==="")throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},n!==!0&&this.parse()}getUA(){return this._ua}test(e){return e.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const e=F.find(bF,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.browser=e.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const e=F.find(EF,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.os=e.describe(this.getUA())),this.parsedResult.os}getOSName(e){const{name:n}=this.getOS();return e?String(n).toLowerCase()||"":n||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(e=!1){const{type:n}=this.getPlatform();return e?String(n).toLowerCase()||"":n||""}parsePlatform(){this.parsedResult.platform={};const e=F.find(IF,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.platform=e.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const e=F.find(wF,n=>{if(typeof n.test=="function")return n.test(this);if(n.test instanceof Array)return n.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.engine=e.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return F.assign({},this.parsedResult)}satisfies(e){const n={};let i=0;const r={};let s=0;if(Object.keys(e).forEach(o=>{const a=e[o];typeof a=="string"?(r[o]=a,s+=1):typeof a=="object"&&(n[o]=a,i+=1)}),i>0){const o=Object.keys(n),a=F.find(o,c=>this.isOS(c));if(a){const c=this.satisfies(n[a]);if(c!==void 0)return c}const l=F.find(o,c=>this.isPlatform(c));if(l){const c=this.satisfies(n[l]);if(c!==void 0)return c}}if(s>0){const o=Object.keys(r),a=F.find(o,l=>this.isBrowser(l,!0));if(a!==void 0)return this.compareVersion(r[a])}}isBrowser(e,n=!1){const i=this.getBrowserName().toLowerCase();let r=e.toLowerCase();const s=F.getBrowserTypeByAlias(r);return n&&s&&(r=s.toLowerCase()),r===i}compareVersion(e){let n=[0],i=e,r=!1;const s=this.getBrowserVersion();if(typeof s=="string")return e[0]===">"||e[0]==="<"?(i=e.substr(1),e[1]==="="?(r=!0,i=e.substr(2)):n=[],e[0]===">"?n.push(1):n.push(-1)):e[0]==="="?i=e.substr(1):e[0]==="~"&&(r=!0,i=e.substr(1)),n.indexOf(F.compareVersions(s,i,r))>-1}isOS(e){return this.getOSName(!0)===String(e).toLowerCase()}isPlatform(e){return this.getPlatformType(!0)===String(e).toLowerCase()}isEngine(e){return this.getEngineName(!0)===String(e).toLowerCase()}is(e){return this.isBrowser(e)||this.isOS(e)||this.isPlatform(e)}some(e=[]){return e.some(n=>this.is(n))}}var aI="new",Hf="loading",Yc="joining-meeting",pn="joined-meeting",jr="left-meeting",Br="error",lI="unknown",TF="base",CF="*",qs="fullscreen",Ws="exited-fullscreen",Jc="daily-custom-track",qf={NONE:"none",BGBLUR:"background-blur"};function ni(){return!Kt()&&typeof window!="undefined"&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:""}function Kt(){return typeof navigator!="undefined"&&navigator.product&&navigator.product==="ReactNative"}function cI(){return navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia}function SF(){return!!(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getDisplayMedia)&&function(t,e){if(!t||!e)return!1;switch(t){case"Chrome":return e.major>=75;case"Safari":return RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection")&&!(e.major===13&&e.minor===0&&e.point===0);case"Firefox":return e.major>=67}return!1}(Zc(),function(){switch(Zc()){case"Chrome":return hI();case"Safari":return fI();case"Firefox":return pI();case"Edge":return function(){var t=0,e=0;if(typeof window!="undefined"){var n=ni(),i=n.match(/Edge\/(\d+).(\d+)/);if(i)try{t=parseInt(i[1]),e=parseInt(i[2])}catch{}}return{major:t,minor:e}}()}}())}var AF=["Chrome","Firefox"];function kF(){return!Kt()&&!function(){var t=ni();if(t.match(/Mobi/)||t.match(/Android/)||ni().match(/DailyAnd\//))return!0}()&&AF.includes(Zc())}function Wf(){return!!Kt()||uI()}function uI(){return cI()&&!function(){var t,e=Zc();if(!ni())return!0;switch(e){case"Chrome":return(t=hI()).major&&t.major>0&&t.major<61;case"Firefox":return(t=pI()).major<78;case"Safari":return(t=fI()).major<12;default:return!0}}()}function Zc(){if(typeof window!="undefined"){var t=ni();return dI()?"Safari":t.indexOf("Edge")>-1?"Edge":t.match(/Chrome\//)?"Chrome":t.indexOf("Safari")>-1?"Safari":t.indexOf("Firefox")>-1?"Firefox":t.indexOf("MSIE")>-1||t.indexOf(".NET")>-1?"IE":"Unknown Browser"}}function hI(){var t=0,e=0,n=0,i=0,r=!1;if(typeof window!="undefined"){var s=ni(),o=s.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);if(o)try{t=parseInt(o[1]),e=parseInt(o[2]),n=parseInt(o[3]),i=parseInt(o[4]),r=s.indexOf("OPR/")>-1}catch{}}return{major:t,minor:e,build:n,patch:i,opera:r}}function dI(){return!!ni().match(/iPad|iPhone|iPod/i)&&cI()}function fI(){var t=0,e=0,n=0;if(typeof window!="undefined"){var i=ni().match(/Version\/(\d+).(\d+)(.(\d+))?/);if(i)try{t=parseInt(i[1]),e=parseInt(i[2]),n=parseInt(i[4])}catch{}else dI()&&(t=14,e=0,n=3)}return{major:t,minor:e,point:n}}function pI(){var t=0,e=0;if(typeof window!="undefined"){var n=ni().match(/Firefox\/(\d+).(\d+)/);if(n)try{t=parseInt(n[1]),e=parseInt(n[2])}catch{}}return{major:t,minor:e}}function Gf(){return Date.now()+Math.random().toString()}function Ta(){throw new Error("Method must be implemented in subclass")}function Ca(t){var e=t?new URL(t).origin:null;return!e||e.match(/https:\/\/[^.]+\.daily\.co/)?Wf()?"https://c.daily.co/static/call-machine-object-bundle.js":"https://c.daily.co/static/call-machine-object-nosfu-bundle.js":(e||(console.warn("No baseUrl provided for call object bundle. Defaulting to production CDN..."),e="https://c.daily.co"),Wf()?"".concat(e,"/static/call-machine-object-bundle.js"):"".concat(e,"/static/call-machine-object-nosfu-bundle.js"))}var mI=function(){function t(){Qi(this,t)}return Yi(t,[{key:"addListenerForMessagesFromCallMachine",value:function(e,n,i){Ta()}},{key:"addListenerForMessagesFromDailyJs",value:function(e,n,i){Ta()}},{key:"sendMessageToCallMachine",value:function(e,n,i,r){Ta()}},{key:"sendMessageToDailyJs",value:function(e,n,i){Ta()}},{key:"removeListener",value:function(e){Ta()}}]),t}();function gI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function zf(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?gI(Object(n),!0).forEach(function(i){Kc(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gI(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function RF(t){var e=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var n,i=bi(t);if(e){var r=bi(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return zc(this,n)}}var OF=function(t){Gc(n,mI);var e=RF(n);function n(){var i;return Qi(this,n),(i=e.call(this))._wrappedListeners={},i._messageCallbacks={},i}return Yi(n,[{key:"addListenerForMessagesFromCallMachine",value:function(i,r,s){var o=this,a=function(l){if(l.data&&l.data.what==="iframe-call-message"&&(!l.data.callFrameId||l.data.callFrameId===r)&&(!l.data.from||l.data.from!=="module")){var c=zf({},l.data);if(delete c.from,c.callbackStamp&&o._messageCallbacks[c.callbackStamp]){var u=c.callbackStamp;o._messageCallbacks[u].call(s,c),delete o._messageCallbacks[u]}delete c.what,delete c.callbackStamp,i.call(s,c)}};this._wrappedListeners[i]=a,window.addEventListener("message",a)}},{key:"addListenerForMessagesFromDailyJs",value:function(i,r,s){var o=function(a){if(!(!a.data||a.data.what!=="iframe-call-message"||!a.data.action||a.data.from&&a.data.from!=="module"||a.data.callFrameId&&r&&a.data.callFrameId!==r)){var l=a.data;i.call(s,l)}};this._wrappedListeners[i]=o,window.addEventListener("message",o)}},{key:"sendMessageToCallMachine",value:function(i,r,s,o){var a=zf({},i);if(a.what="iframe-call-message",a.from="module",a.callFrameId=o,r){var l=Gf();this._messageCallbacks[l]=r,a.callbackStamp=l}(s?s.contentWindow:window).postMessage(a,"*")}},{key:"sendMessageToDailyJs",value:function(i,r,s){i.what="iframe-call-message",i.callFrameId=s,i.from="embedded",(r?window:window.parent).postMessage(i,"*")}},{key:"removeListener",value:function(i){var r=this._wrappedListeners[i];r&&(window.removeEventListener("message",r),delete this._wrappedListeners[i])}},{key:"forwardPackagedMessageToCallMachine",value:function(i,r,s){var o=zf({},i);o.callFrameId=s,(r?r.contentWindow:window).postMessage(o,"*")}},{key:"addListenerForPackagedMessagesFromCallMachine",value:function(i,r){var s=function(o){if(o.data&&o.data.what==="iframe-call-message"&&(!o.data.callFrameId||o.data.callFrameId===r)&&(!o.data.from||o.data.from!=="module")){var a=o.data;i(a)}};return this._wrappedListeners[i]=s,window.addEventListener("message",s),i}},{key:"removeListenerForPackagedMessagesFromCallMachine",value:function(i){var r=this._wrappedListeners[i];r&&(window.removeEventListener("message",r),delete this._wrappedListeners[i])}}]),n}();function LF(t){var e=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var n,i=bi(t);if(e){var r=bi(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return zc(this,n)}}global.callMachineToDailyJsEmitter=global.callMachineToDailyJsEmitter||new Ia.exports.EventEmitter,global.dailyJsToCallMachineEmitter=global.dailyJsToCallMachineEmitter||new Ia.exports.EventEmitter;var NF=function(t){Gc(n,mI);var e=LF(n);function n(){var i;return Qi(this,n),(i=e.call(this))._wrappedListeners={},i._messageCallbacks={},i}return Yi(n,[{key:"addListenerForMessagesFromCallMachine",value:function(i,r,s){this._addListener(i,global.callMachineToDailyJsEmitter,s,"received call machine message")}},{key:"addListenerForMessagesFromDailyJs",value:function(i,r,s){this._addListener(i,global.dailyJsToCallMachineEmitter,s,"received daily-js message")}},{key:"sendMessageToCallMachine",value:function(i,r){this._sendMessage(i,global.dailyJsToCallMachineEmitter,"sending message to call machine",r)}},{key:"sendMessageToDailyJs",value:function(i){this._sendMessage(i,global.callMachineToDailyJsEmitter,"sending message to daily-js")}},{key:"removeListener",value:function(i){var r=this._wrappedListeners[i];r&&(global.callMachineToDailyJsEmitter.removeListener("message",r),global.dailyJsToCallMachineEmitter.removeListener("message",r),delete this._wrappedListeners[i])}},{key:"_addListener",value:function(i,r,s,o){var a=this,l=function(c){if(c.callbackStamp&&a._messageCallbacks[c.callbackStamp]){var u=c.callbackStamp;a._messageCallbacks[u].call(s,c),delete a._messageCallbacks[u]}i.call(s,c)};this._wrappedListeners[i]=l,r.addListener("message",l)}},{key:"_sendMessage",value:function(i,r,s,o){if(o){var a=Gf();this._messageCallbacks[a]=o,i.callbackStamp=a}r.emit("message",i)}}]),n}(),MF=function(t){return Function.toString.call(t).indexOf("[native code]")!==-1},PF=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}},DF=Xi(function(t){function e(n,i,r){return PF()?t.exports=e=Reflect.construct:t.exports=e=function(s,o,a){var l=[null];l.push.apply(l,o);var c=new(Function.bind.apply(s,l));return a&&jf(c,a.prototype),c},e.apply(null,arguments)}t.exports=e}),FF=Xi(function(t){function e(n){var i=typeof Map=="function"?new Map:void 0;return t.exports=e=function(r){if(r===null||!MF(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(i!==void 0){if(i.has(r))return i.get(r);i.set(r,s)}function s(){return DF(r,arguments,bi(this).constructor)}return s.prototype=Object.create(r.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),jf(s,r)},e(n)}t.exports=e});function xF(t){var e=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var n,i=bi(t);if(e){var r=bi(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return zc(this,n)}}var UF=function(){function t(){Qi(this,t),this._currentLoad=null}return Yi(t,[{key:"load",value:function(e,n,i,r){if(this.loaded)return window._dailyCallObjectSetup(n),void i(!0);(function(s){window._dailyConfig||(window._dailyConfig={}),window._dailyConfig.callFrameId=s})(n),this._currentLoad&&this._currentLoad.cancel(),this._currentLoad=new jF(e,n,function(){i(!1)},r),this._currentLoad.start()}},{key:"cancel",value:function(){this._currentLoad&&this._currentLoad.cancel()}},{key:"loaded",get:function(){return this._currentLoad&&this._currentLoad.succeeded}}]),t}(),VF=3,jF=function(){function t(e,n,i,r){Qi(this,t),this._attemptsRemaining=VF,this._currentAttempt=null,this._meetingOrBaseUrl=e,this._callFrameId=n,this._successCallback=i,this._failureCallback=r}return Yi(t,[{key:"start",value:function(){var e=this;this._currentAttempt||(this._currentAttempt=new _I(this._meetingOrBaseUrl,this._callFrameId,this._successCallback,function n(i){e._currentAttempt.cancelled||(e._attemptsRemaining--,e._failureCallback(i,e._attemptsRemaining>0),e._attemptsRemaining<=0||setTimeout(function(){e._currentAttempt.cancelled||(e._currentAttempt=new _I(e._meetingOrBaseUrl,e._callFrameId,e._successCallback,n),e._currentAttempt.start())},3e3))}),this._currentAttempt.start())}},{key:"cancel",value:function(){this._currentAttempt&&this._currentAttempt.cancel()}},{key:"cancelled",get:function(){return this._currentAttempt&&this._currentAttempt.cancelled}},{key:"succeeded",get:function(){return this._currentAttempt&&this._currentAttempt.succeeded}}]),t}(),Kf=function(t){Gc(n,t);var e=xF(n);function n(){return Qi(this,n),e.apply(this,arguments)}return n}(FF(Error)),_I=function(){function t(e,n,i,r){Qi(this,t),this.cancelled=!1,this.succeeded=!1,this._networkTimedOut=!1,this._networkTimeout=null,this._iosCache=typeof iOSCallObjectBundleCache!="undefined"&&iOSCallObjectBundleCache,this._refetchHeaders=null,this._meetingOrBaseUrl=e,this._callFrameId=n,this._successCallback=i,this._failureCallback=r}return Yi(t,[{key:"start",value:function(){var e=Be(ee.mark(function n(){var i;return ee.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return i=Ca(this._meetingOrBaseUrl),r.next=3,this._tryLoadFromIOSCache(i);case 3:!r.sent&&this._loadFromNetwork(i);case 5:case"end":return r.stop()}},n,this)}));return function(){return e.apply(this,arguments)}}()},{key:"cancel",value:function(){clearTimeout(this._networkTimeout),this.cancelled=!0}},{key:"_tryLoadFromIOSCache",value:function(){var e=Be(ee.mark(function n(i){var r;return ee.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(this._iosCache){s.next=2;break}return s.abrupt("return",!1);case 2:return s.prev=2,s.next=5,this._iosCache.get(i);case 5:if(r=s.sent,!this.cancelled){s.next=8;break}return s.abrupt("return",!0);case 8:if(r){s.next=10;break}return s.abrupt("return",!1);case 10:if(r.code){s.next=13;break}return this._refetchHeaders=r.refetchHeaders,s.abrupt("return",!1);case 13:return Function('"use strict";'+r.code)(),this.succeeded=!0,this._successCallback(),s.abrupt("return",!0);case 19:return s.prev=19,s.t0=s.catch(2),s.abrupt("return",!1);case 22:case"end":return s.stop()}},n,this,[[2,19]])}));return function(n){return e.apply(this,arguments)}}()},{key:"_loadFromNetwork",value:function(){var e=Be(ee.mark(function n(i){var r,s,o,a=this;return ee.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return this._networkTimeout=setTimeout(function(){a._networkTimedOut=!0,a._failureCallback("Timed out (>".concat(2e4," ms) when loading call object bundle ").concat(i))},2e4),l.prev=1,r=this._refetchHeaders?{headers:this._refetchHeaders}:{},l.next=5,fetch(i,r);case 5:if(s=l.sent,clearTimeout(this._networkTimeout),!this.cancelled&&!this._networkTimedOut){l.next=9;break}throw new Kf;case 9:return l.next=11,this._getBundleCodeFromResponse(i,s);case 11:if(o=l.sent,!this.cancelled){l.next=14;break}throw new Kf;case 14:Function('"use strict";'+o)(),this._iosCache&&this._iosCache.set(i,o,s.headers),this.succeeded=!0,this._successCallback(),l.next=26;break;case 20:if(l.prev=20,l.t0=l.catch(1),clearTimeout(this._networkTimeout),!(l.t0 instanceof Kf||this.cancelled||this._networkTimedOut)){l.next=25;break}return l.abrupt("return");case 25:this._failureCallback("Failed to load call object bundle ".concat(i,": ").concat(l.t0));case 26:case"end":return l.stop()}},n,this,[[1,20]])}));return function(n){return e.apply(this,arguments)}}()},{key:"_getBundleCodeFromResponse",value:function(){var e=Be(ee.mark(function n(i,r){var s;return ee.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!r.ok){o.next=4;break}return o.next=3,r.text();case 3:return o.abrupt("return",o.sent);case 4:if(!this._iosCache||r.status!==304){o.next=9;break}return o.next=7,this._iosCache.renew(i,r.headers);case 7:return s=o.sent,o.abrupt("return",s.code);case 9:throw new Error("Received ".concat(r.status," response"));case 10:case"end":return o.stop()}},n,this)}));return function(n,i){return e.apply(this,arguments)}}()}]),t}(),vI=function(t,e){for(var n=-1,i=t==null?0:t.length,r=0,s=[];++n<i;){var o=t[n];e(o,n,t)&&(s[r++]=o)}return s},BF=function(t){return function(e,n,i){for(var r=-1,s=Object(e),o=i(e),a=o.length;a--;){var l=o[t?a:++r];if(n(s[l],l,s)===!1)break}return e}}(),HF=function(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i},yI=typeof qc=="object"&&qc&&qc.Object===Object&&qc,qF=typeof self=="object"&&self&&self.Object===Object&&self,Ei=yI||qF||Function("return this")(),Zi=Ei.Symbol,bI=Object.prototype,WF=bI.hasOwnProperty,GF=bI.toString,Sa=Zi?Zi.toStringTag:void 0,zF=function(t){var e=WF.call(t,Sa),n=t[Sa];try{t[Sa]=void 0;var i=!0}catch{}var r=GF.call(t);return i&&(e?t[Sa]=n:delete t[Sa]),r},KF=Object.prototype.toString,XF=function(t){return KF.call(t)},QF="[object Null]",YF="[object Undefined]",EI=Zi?Zi.toStringTag:void 0,Gs=function(t){return t==null?t===void 0?YF:QF:EI&&EI in Object(t)?zF(t):XF(t)},zs=function(t){return t!=null&&typeof t=="object"},JF="[object Arguments]",II=function(t){return zs(t)&&Gs(t)==JF},wI=Object.prototype,ZF=wI.hasOwnProperty,$F=wI.propertyIsEnumerable,TI=II(function(){return arguments}())?II:function(t){return zs(t)&&ZF.call(t,"callee")&&!$F.call(t,"callee")},Kn=Array.isArray,e2=function(){return!1},Xf=Xi(function(t,e){var n=e&&!e.nodeType&&e,i=n&&t&&!t.nodeType&&t,r=i&&i.exports===n?Ei.Buffer:void 0,s=(r?r.isBuffer:void 0)||e2;t.exports=s}),t2=9007199254740991,n2=/^(?:0|[1-9]\d*)$/,CI=function(t,e){var n=typeof t;return!!(e=e==null?t2:e)&&(n=="number"||n!="symbol"&&n2.test(t))&&t>-1&&t%1==0&&t<e},i2=9007199254740991,Qf=function(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=i2},gt={};gt["[object Float32Array]"]=gt["[object Float64Array]"]=gt["[object Int8Array]"]=gt["[object Int16Array]"]=gt["[object Int32Array]"]=gt["[object Uint8Array]"]=gt["[object Uint8ClampedArray]"]=gt["[object Uint16Array]"]=gt["[object Uint32Array]"]=!0,gt["[object Arguments]"]=gt["[object Array]"]=gt["[object ArrayBuffer]"]=gt["[object Boolean]"]=gt["[object DataView]"]=gt["[object Date]"]=gt["[object Error]"]=gt["[object Function]"]=gt["[object Map]"]=gt["[object Number]"]=gt["[object Object]"]=gt["[object RegExp]"]=gt["[object Set]"]=gt["[object String]"]=gt["[object WeakMap]"]=!1;var r2=function(t){return zs(t)&&Qf(t.length)&&!!gt[Gs(t)]},SI=function(t){return function(e){return t(e)}},AI=Xi(function(t,e){var n=e&&!e.nodeType&&e,i=n&&t&&!t.nodeType&&t,r=i&&i.exports===n&&yI.process,s=function(){try{var o=i&&i.require&&i.require("util").types;return o||r&&r.binding&&r.binding("util")}catch{}}();t.exports=s}),kI=AI&&AI.isTypedArray,RI=kI?SI(kI):r2,s2=Object.prototype.hasOwnProperty,o2=function(t,e){var n=Kn(t),i=!n&&TI(t),r=!n&&!i&&Xf(t),s=!n&&!i&&!r&&RI(t),o=n||i||r||s,a=o?HF(t.length,String):[],l=a.length;for(var c in t)!e&&!s2.call(t,c)||o&&(c=="length"||r&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||CI(c,l))||a.push(c);return a},a2=Object.prototype,l2=function(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||a2)},c2=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),u2=Object.prototype.hasOwnProperty,h2=function(t){if(!l2(t))return c2(t);var e=[];for(var n in Object(t))u2.call(t,n)&&n!="constructor"&&e.push(n);return e},Yf=function(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")},d2="[object AsyncFunction]",f2="[object Function]",p2="[object GeneratorFunction]",m2="[object Proxy]",OI=function(t){if(!Yf(t))return!1;var e=Gs(t);return e==f2||e==p2||e==d2||e==m2},Jf=function(t){return t!=null&&Qf(t.length)&&!OI(t)},Zf=function(t){return Jf(t)?o2(t):h2(t)},LI=function(t,e){return function(n,i){if(n==null)return n;if(!Jf(n))return t(n,i);for(var r=n.length,s=e?r:-1,o=Object(n);(e?s--:++s<r)&&i(o[s],s,o)!==!1;);return n}}(function(t,e){return t&&BF(t,e,Zf)}),g2=function(t,e){var n=[];return LI(t,function(i,r,s){e(i,r,s)&&n.push(i)}),n},_2=function(){this.__data__=[],this.size=0},NI=function(t,e){return t===e||t!=t&&e!=e},$c=function(t,e){for(var n=t.length;n--;)if(NI(t[n][0],e))return n;return-1},v2=Array.prototype.splice,y2=function(t){var e=this.__data__,n=$c(e,t);return!(n<0||(n==e.length-1?e.pop():v2.call(e,n,1),--this.size,0))},b2=function(t){var e=this.__data__,n=$c(e,t);return n<0?void 0:e[n][1]},E2=function(t){return $c(this.__data__,t)>-1},I2=function(t,e){var n=this.__data__,i=$c(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function Ks(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Ks.prototype.clear=_2,Ks.prototype.delete=y2,Ks.prototype.get=b2,Ks.prototype.has=E2,Ks.prototype.set=I2;var eu=Ks,w2=function(){this.__data__=new eu,this.size=0},T2=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},C2=function(t){return this.__data__.get(t)},MI,S2=function(t){return this.__data__.has(t)},$f=Ei["__core-js_shared__"],PI=(MI=/[^.]+$/.exec($f&&$f.keys&&$f.keys.IE_PROTO||""))?"Symbol(src)_1."+MI:"",A2=function(t){return!!PI&&PI in t},k2=Function.prototype.toString,Hr=function(t){if(t!=null){try{return k2.call(t)}catch{}try{return t+""}catch{}}return""},R2=/^\[object .+?Constructor\]$/,O2=Function.prototype,L2=Object.prototype,N2=O2.toString,M2=L2.hasOwnProperty,P2=RegExp("^"+N2.call(M2).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),D2=function(t){return!(!Yf(t)||A2(t))&&(OI(t)?P2:R2).test(Hr(t))},F2=function(t,e){return t==null?void 0:t[e]},Xs=function(t,e){var n=F2(t,e);return D2(n)?n:void 0},Aa=Xs(Ei,"Map"),ka=Xs(Object,"create"),x2=function(){this.__data__=ka?ka(null):{},this.size=0},U2=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},V2="__lodash_hash_undefined__",j2=Object.prototype.hasOwnProperty,B2=function(t){var e=this.__data__;if(ka){var n=e[t];return n===V2?void 0:n}return j2.call(e,t)?e[t]:void 0},H2=Object.prototype.hasOwnProperty,q2=function(t){var e=this.__data__;return ka?e[t]!==void 0:H2.call(e,t)},W2="__lodash_hash_undefined__",G2=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ka&&e===void 0?W2:e,this};function Qs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Qs.prototype.clear=x2,Qs.prototype.delete=U2,Qs.prototype.get=B2,Qs.prototype.has=q2,Qs.prototype.set=G2;var DI=Qs,z2=function(){this.size=0,this.__data__={hash:new DI,map:new(Aa||eu),string:new DI}},K2=function(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null},tu=function(t,e){var n=t.__data__;return K2(e)?n[typeof e=="string"?"string":"hash"]:n.map},X2=function(t){var e=tu(this,t).delete(t);return this.size-=e?1:0,e},Q2=function(t){return tu(this,t).get(t)},Y2=function(t){return tu(this,t).has(t)},J2=function(t,e){var n=tu(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function Ys(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Ys.prototype.clear=z2,Ys.prototype.delete=X2,Ys.prototype.get=Q2,Ys.prototype.has=Y2,Ys.prototype.set=J2;var nu=Ys,Z2=200,$2=function(t,e){var n=this.__data__;if(n instanceof eu){var i=n.__data__;if(!Aa||i.length<Z2-1)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new nu(i)}return n.set(t,e),this.size=n.size,this};function Js(t){var e=this.__data__=new eu(t);this.size=e.size}Js.prototype.clear=w2,Js.prototype.delete=T2,Js.prototype.get=C2,Js.prototype.has=S2,Js.prototype.set=$2;var iu=Js,ex="__lodash_hash_undefined__",tx=function(t){return this.__data__.set(t,ex),this},nx=function(t){return this.__data__.has(t)};function ru(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new nu;++e<n;)this.add(t[e])}ru.prototype.add=ru.prototype.push=tx,ru.prototype.has=nx;var ix=ru,rx=function(t,e){for(var n=-1,i=t==null?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1},sx=function(t,e){return t.has(e)},ox=1,ax=2,FI=function(t,e,n,i,r,s){var o=n&ox,a=t.length,l=e.length;if(a!=l&&!(o&&l>a))return!1;var c=s.get(t);if(c&&s.get(e))return c==e;var u=-1,h=!0,d=n&ax?new ix:void 0;for(s.set(t,e),s.set(e,t);++u<a;){var f=t[u],p=e[u];if(i)var g=o?i(p,f,u,e,t,s):i(f,p,u,t,e,s);if(g!==void 0){if(g)continue;h=!1;break}if(d){if(!rx(e,function(m,v){if(!sx(d,v)&&(f===m||r(f,m,n,i,s)))return d.push(v)})){h=!1;break}}else if(f!==p&&!r(f,p,n,i,s)){h=!1;break}}return s.delete(t),s.delete(e),h},xI=Ei.Uint8Array,lx=function(t){var e=-1,n=Array(t.size);return t.forEach(function(i,r){n[++e]=[r,i]}),n},cx=function(t){var e=-1,n=Array(t.size);return t.forEach(function(i){n[++e]=i}),n},ux=1,hx=2,dx="[object Boolean]",fx="[object Date]",px="[object Error]",mx="[object Map]",gx="[object Number]",_x="[object RegExp]",vx="[object Set]",yx="[object String]",bx="[object Symbol]",Ex="[object ArrayBuffer]",Ix="[object DataView]",UI=Zi?Zi.prototype:void 0,ep=UI?UI.valueOf:void 0,wx=function(t,e,n,i,r,s,o){switch(n){case Ix:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Ex:return!(t.byteLength!=e.byteLength||!s(new xI(t),new xI(e)));case dx:case fx:case gx:return NI(+t,+e);case px:return t.name==e.name&&t.message==e.message;case _x:case yx:return t==e+"";case mx:var a=lx;case vx:var l=i&ux;if(a||(a=cx),t.size!=e.size&&!l)return!1;var c=o.get(t);if(c)return c==e;i|=hx,o.set(t,e);var u=FI(a(t),a(e),i,r,s,o);return o.delete(t),u;case bx:if(ep)return ep.call(t)==ep.call(e)}return!1},Tx=function(t,e){for(var n=-1,i=e.length,r=t.length;++n<i;)t[r+n]=e[n];return t},Cx=function(t,e,n){var i=e(t);return Kn(t)?i:Tx(i,n(t))},Sx=function(){return[]},Ax=Object.prototype.propertyIsEnumerable,VI=Object.getOwnPropertySymbols,kx=VI?function(t){return t==null?[]:(t=Object(t),vI(VI(t),function(e){return Ax.call(t,e)}))}:Sx,jI=function(t){return Cx(t,Zf,kx)},Rx=1,Ox=Object.prototype.hasOwnProperty,Lx=function(t,e,n,i,r,s){var o=n&Rx,a=jI(t),l=a.length;if(l!=jI(e).length&&!o)return!1;for(var c=l;c--;){var u=a[c];if(!(o?u in e:Ox.call(e,u)))return!1}var h=s.get(t);if(h&&s.get(e))return h==e;var d=!0;s.set(t,e),s.set(e,t);for(var f=o;++c<l;){var p=t[u=a[c]],g=e[u];if(i)var m=o?i(g,p,u,e,t,s):i(p,g,u,t,e,s);if(!(m===void 0?p===g||r(p,g,n,i,s):m)){d=!1;break}f||(f=u=="constructor")}if(d&&!f){var v=t.constructor,C=e.constructor;v!=C&&"constructor"in t&&"constructor"in e&&!(typeof v=="function"&&v instanceof v&&typeof C=="function"&&C instanceof C)&&(d=!1)}return s.delete(t),s.delete(e),d},tp=Xs(Ei,"DataView"),np=Xs(Ei,"Promise"),ip=Xs(Ei,"Set"),rp=Xs(Ei,"WeakMap"),Nx=Hr(tp),Mx=Hr(Aa),Px=Hr(np),Dx=Hr(ip),Fx=Hr(rp),qr=Gs;(tp&&qr(new tp(new ArrayBuffer(1)))!="[object DataView]"||Aa&&qr(new Aa)!="[object Map]"||np&&qr(np.resolve())!="[object Promise]"||ip&&qr(new ip)!="[object Set]"||rp&&qr(new rp)!="[object WeakMap]")&&(qr=function(t){var e=Gs(t),n=e=="[object Object]"?t.constructor:void 0,i=n?Hr(n):"";if(i)switch(i){case Nx:return"[object DataView]";case Mx:return"[object Map]";case Px:return"[object Promise]";case Dx:return"[object Set]";case Fx:return"[object WeakMap]"}return e});var BI=qr,xx=1,HI="[object Arguments]",qI="[object Array]",su="[object Object]",WI=Object.prototype.hasOwnProperty,Ux=function(t,e,n,i,r,s){var o=Kn(t),a=Kn(e),l=o?qI:BI(t),c=a?qI:BI(e),u=(l=l==HI?su:l)==su,h=(c=c==HI?su:c)==su,d=l==c;if(d&&Xf(t)){if(!Xf(e))return!1;o=!0,u=!1}if(d&&!u)return s||(s=new iu),o||RI(t)?FI(t,e,n,i,r,s):wx(t,e,l,n,i,r,s);if(!(n&xx)){var f=u&&WI.call(t,"__wrapped__"),p=h&&WI.call(e,"__wrapped__");if(f||p){var g=f?t.value():t,m=p?e.value():e;return s||(s=new iu),r(g,m,n,i,s)}}return!!d&&(s||(s=new iu),Lx(t,e,n,i,r,s))},GI=function t(e,n,i,r,s){return e===n||(e==null||n==null||!zs(e)&&!zs(n)?e!=e&&n!=n:Ux(e,n,i,r,t,s))},Vx=1,jx=2,Bx=function(t,e,n,i){var r=n.length,s=r,o=!i;if(t==null)return!s;for(t=Object(t);r--;){var a=n[r];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++r<s;){var l=(a=n[r])[0],c=t[l],u=a[1];if(o&&a[2]){if(c===void 0&&!(l in t))return!1}else{var h=new iu;if(i)var d=i(c,u,l,t,e,h);if(!(d===void 0?GI(u,c,Vx|jx,i,h):d))return!1}}return!0},zI=function(t){return t==t&&!Yf(t)},Hx=function(t){for(var e=Zf(t),n=e.length;n--;){var i=e[n],r=t[i];e[n]=[i,r,zI(r)]}return e},KI=function(t,e){return function(n){return n!=null&&n[t]===e&&(e!==void 0||t in Object(n))}},qx=function(t){var e=Hx(t);return e.length==1&&e[0][2]?KI(e[0][0],e[0][1]):function(n){return n===t||Bx(n,t,e)}},Wx="[object Symbol]",Ra=function(t){return typeof t=="symbol"||zs(t)&&Gs(t)==Wx},Gx=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zx=/^\w*$/,sp=function(t,e){if(Kn(t))return!1;var n=typeof t;return!(n!="number"&&n!="symbol"&&n!="boolean"&&t!=null&&!Ra(t))||zx.test(t)||!Gx.test(t)||e!=null&&t in Object(e)},Kx="Expected a function";function op(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Kx);var n=function(){var i=arguments,r=e?e.apply(this,i):i[0],s=n.cache;if(s.has(r))return s.get(r);var o=t.apply(this,i);return n.cache=s.set(r,o)||s,o};return n.cache=new(op.Cache||nu),n}op.Cache=nu;var Xx=op,Qx=500,Yx=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Jx=/\\(\\)?/g,Zx=function(t){var e=Xx(t,function(i){return n.size===Qx&&n.clear(),i}),n=e.cache;return e}(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Yx,function(n,i,r,s){e.push(r?s.replace(Jx,"$1"):i||n)}),e}),ap=function(t,e){for(var n=-1,i=t==null?0:t.length,r=Array(i);++n<i;)r[n]=e(t[n],n,t);return r},$x=1/0,XI=Zi?Zi.prototype:void 0,QI=XI?XI.toString:void 0,eU=function t(e){if(typeof e=="string")return e;if(Kn(e))return ap(e,t)+"";if(Ra(e))return QI?QI.call(e):"";var n=e+"";return n=="0"&&1/e==-$x?"-0":n},tU=function(t){return t==null?"":eU(t)},YI=function(t,e){return Kn(t)?t:sp(t,e)?[t]:Zx(tU(t))},nU=1/0,ou=function(t){if(typeof t=="string"||Ra(t))return t;var e=t+"";return e=="0"&&1/t==-nU?"-0":e},JI=function(t,e){for(var n=0,i=(e=YI(e,t)).length;t!=null&&n<i;)t=t[ou(e[n++])];return n&&n==i?t:void 0},iU=function(t,e,n){var i=t==null?void 0:JI(t,e);return i===void 0?n:i},rU=function(t,e){return t!=null&&e in Object(t)},sU=function(t,e,n){for(var i=-1,r=(e=YI(e,t)).length,s=!1;++i<r;){var o=ou(e[i]);if(!(s=t!=null&&n(t,o)))break;t=t[o]}return s||++i!=r?s:!!(r=t==null?0:t.length)&&Qf(r)&&CI(o,r)&&(Kn(t)||TI(t))},oU=function(t,e){return t!=null&&sU(t,e,rU)},aU=1,lU=2,cU=function(t,e){return sp(t)&&zI(e)?KI(ou(t),e):function(n){var i=iU(n,t);return i===void 0&&i===e?oU(n,t):GI(e,i,aU|lU)}},ZI=function(t){return t},uU=function(t){return function(e){return e==null?void 0:e[t]}},hU=function(t){return function(e){return JI(e,t)}},dU=function(t){return sp(t)?uU(ou(t)):hU(t)},$I=function(t){return typeof t=="function"?t:t==null?ZI:typeof t=="object"?Kn(t)?cU(t[0],t[1]):qx(t):dU(t)},ew=function(t,e){return(Kn(t)?vI:g2)(t,$I(e))},fU=function(t,e){var n=-1,i=Jf(t)?Array(t.length):[];return LI(t,function(r,s,o){i[++n]=e(r,s,o)}),i},pU=function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t},mU=function(t,e){if(t!==e){var n=t!==void 0,i=t===null,r=t==t,s=Ra(t),o=e!==void 0,a=e===null,l=e==e,c=Ra(e);if(!a&&!c&&!s&&t>e||s&&o&&l&&!a&&!c||i&&o&&l||!n&&l||!r)return 1;if(!i&&!s&&!c&&t<e||c&&n&&r&&!i&&!s||a&&n&&r||!o&&r||!l)return-1}return 0},gU=function(t,e,n){for(var i=-1,r=t.criteria,s=e.criteria,o=r.length,a=n.length;++i<o;){var l=mU(r[i],s[i]);if(l)return i>=a?l:l*(n[i]=="desc"?-1:1)}return t.index-e.index},_U=function(t,e,n){var i=-1;e=ap(e.length?e:[ZI],SI($I));var r=fU(t,function(s,o,a){return{criteria:ap(e,function(l){return l(s)}),index:++i,value:s}});return pU(r,function(s,o){return gU(s,o,n)})},tw=function(t,e,n,i){return t==null?[]:(Kn(e)||(e=e==null?[]:[e]),Kn(n=i?void 0:n)||(n=n==null?[]:[n]),_U(t,e,n))},au=function(t,e,n){return yU(t.local,e,n)===!0},vU=function(t,e,n){return t.local.streams&&t.local.streams[e]&&t.local.streams[e].stream&&t.local.streams[e].stream["get".concat(n==="video"?"Video":"Audio","Tracks")]()[0]},Oa=function(t,e,n,i){var r=bU(t,e,n,i);return r&&r.pendingTrack},yU=function(t,e,n){if(!t)return!1;var i=function(s){switch(s){case"avatar":return!0;case"staged":return s;default:return!!s}},r=t.public.subscribedTracks;return r&&r[e]?i(r[e][n]):!r||i(r.ALL)},bU=function(t,e,n,i){var r=tw(ew(t.streams,function(s){return s.participantId===e&&s.type===n&&s.pendingTrack&&s.pendingTrack.kind===i}),"starttime","desc");return r&&r[0]},EU=function(t,e){var n=t.local.public.customTracks;if(n&&n[e])return n[e].track},IU=function(t,e,n,i){var r="soup-"+n,s=tw(ew(t.streams,function(o){return o.participantId===e&&o.streamId===r&&o.pendingTrack&&o.pendingTrack.kind===i}),"starttime","desc");return s&&s[0]&&s[0].pendingTrack};function nw(t){for(var e=store.getState(),n=0,i=["cam","screen"];n<i.length;n++)for(var r=i[n],s=0,o=["video","audio"];s<o.length;s++){var a=o[s],l=r==="cam"?a:"screen".concat(a.charAt(0).toUpperCase()+a.slice(1)),c=t.tracks[l];if(c){var u=t.local?vU(e,r,a):Oa(e,t.session_id,r,a);c.state==="playable"&&(c.track=u),c.persistentTrack=u}}}function iw(t){try{var e=store.getState();for(var n in t.tracks)if(!lp(n)){var i=t.tracks[n].kind;if(i){var r=t.local?EU(e,n,i):IU(e,t.session_id,n,i),s=t.tracks[n];r&&s&&s.state==="playable"&&(t.tracks[n].track=r)}else console.error("unknown type for custom track")}}catch(o){console.error(o)}}function lp(t){return["video","audio","screenVideo","screenAudio"].includes(t)}function rw(t,e){var n=store.getState();if(t.local){if(t.audio)try{t.audioTrack=n.local.streams.cam.stream.getAudioTracks()[0],t.audioTrack||(t.audio=!1)}catch{}if(t.video)try{t.videoTrack=n.local.streams.cam.stream.getVideoTracks()[0],t.videoTrack||(t.video=!1)}catch{}if(t.screen)try{t.screenVideoTrack=n.local.streams.screen.stream.getVideoTracks()[0],t.screenAudioTrack=n.local.streams.screen.stream.getAudioTracks()[0],t.screenVideoTrack||t.screenAudioTrack||(t.screen=!1)}catch{}}else{var i=!0;try{var r=n.participants[t.session_id];r&&r.public&&r.public.rtcType&&r.public.rtcType.impl==="peer-to-peer"&&r.private&&!["connected","completed"].includes(r.private.peeringState)&&(i=!1)}catch(c){console.error(c)}if(!i)return t.audio=!1,t.audioTrack=!1,t.video=!1,t.videoTrack=!1,t.screen=!1,void(t.screenTrack=!1);try{if(n.streams,t.audio&&au(n,t.session_id,"cam-audio")){var s=Oa(n,t.session_id,"cam","audio");s&&(e&&e.audioTrack&&e.audioTrack.id===s.id?t.audioTrack=s:s.muted||(t.audioTrack=s)),t.audioTrack||(t.audio=!1)}if(t.video&&au(n,t.session_id,"cam-video")){var o=Oa(n,t.session_id,"cam","video");o&&(e&&e.videoTrack&&e.videoTrack.id===o.id?t.videoTrack=o:o.muted||(t.videoTrack=o)),t.videoTrack||(t.video=!1)}if(t.screen&&au(n,t.session_id,"screen-audio")){var a=Oa(n,t.session_id,"screen","audio");a&&(e&&e.screenAudioTrack&&e.screenAudioTrack.id===a.id?t.screenAudioTrack=a:a.muted||(t.screenAudioTrack=a))}if(t.screen&&au(n,t.session_id,"screen-video")){var l=Oa(n,t.session_id,"screen","video");l&&(e&&e.screenVideoTrack&&e.screenVideoTrack.id===l.id?t.screenVideoTrack=l:l.muted||(t.screenVideoTrack=l))}t.screenVideoTrack||t.screenAudioTrack||(t.screen=!1)}catch(c){console.error("unexpected error matching up tracks",c)}}}function sw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Xt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?sw(Object(n),!0).forEach(function(i){Kc(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):sw(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function wU(t){var e=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var n,i=bi(t);if(e){var r=bi(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return zc(this,n)}}var ow="video",TU="voice",aw={androidInCallNotification:{title:"string",subtitle:"string",iconName:"string",disableForCustomOverride:"boolean"},disableAutoDeviceManagement:{audio:"boolean",video:"boolean"}},Wr={url:{validate:function(t){return typeof t=="string"},help:"url should be a string"},baseUrl:{validate:function(t){return typeof t=="string"},help:"baseUrl should be a string"},token:{validate:function(t){return typeof t=="string"},help:"token should be a string",queryString:"t"},dailyConfig:{validate:function(t){return window._dailyConfig||(window._dailyConfig={}),window._dailyConfig.experimentalGetUserMediaConstraintsModify=t.experimentalGetUserMediaConstraintsModify,delete t.experimentalGetUserMediaConstraintsModify,!0}},reactNativeConfig:{validate:function(t){return function e(n,i){if(i===void 0)return!1;switch(zn(i)){case"string":return zn(n)===i;case"object":if(zn(n)!=="object")return!1;for(var r in n)if(!e(n[r],i[r]))return!1;return!0;default:return!1}}(t,aw)},help:"reactNativeConfig should look like ".concat(JSON.stringify(aw),", all fields optional")},lang:{validate:function(t){return["de","en-us","en","es","fi","fr","it","jp","ka","nl","no","pl","pt","ru","sv","tr","user"].includes(t)},help:"language not supported. Options are: de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, ru, sv, tr, user"},userName:!0,activeSpeakerMode:!0,showLeaveButton:!0,showLocalVideo:!0,showParticipantsBar:!0,showFullscreenButton:!0,iframeStyle:!0,customLayout:!0,cssFile:!0,cssText:!0,bodyClass:!0,videoSource:{validate:function(t,e){return e._preloadCache.videoDeviceId=t,!0}},audioSource:{validate:function(t,e){return e._preloadCache.audioDeviceId=t,!0}},subscribeToTracksAutomatically:{validate:function(t,e){return e._preloadCache.subscribeToTracksAutomatically=t,!0}},theme:{validate:function(t){var e=["accent","accentText","background","backgroundAccent","baseText","border","mainAreaBg","mainAreaBgAccent","mainAreaText","supportiveText"],n=function(i){for(var r=0,s=Object.keys(i);r<s.length;r++){var o=s[r];if(!e.includes(o))return console.error('unsupported color "'.concat(o,'". Valid colors: ').concat(e.join(", "))),!1;if(!i[o].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i))return console.error("".concat(o,' theme color should be provided in valid hex color format. Received: "').concat(i[o],'"')),!1}return!0};return zn(t)==="object"&&("light"in t&&"dark"in t||"colors"in t)?"light"in t&&"dark"in t?"colors"in t.light?"colors"in t.dark?n(t.light.colors)&&n(t.dark.colors):(console.error('Dark theme is missing "colors" property.',t),!1):(console.error('Light theme is missing "colors" property.',t),!1):n(t.colors):(console.error('Theme must contain either both "light" and "dark" properties, or "colors".',t),!1)},help:"unsupported theme configuration. Check error logs for detailed info."},layoutConfig:{validate:function(t){if("grid"in t){var e=t.grid;if("maxTilesPerPage"in e){if(!Number.isInteger(e.maxTilesPerPage))return console.error("grid.maxTilesPerPage should be an integer. You passed ".concat(e.maxTilesPerPage,".")),!1;if(e.maxTilesPerPage>49)return console.error("grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."),!1}if("minTilesPerPage"in e){if(!Number.isInteger(e.minTilesPerPage))return console.error("grid.minTilesPerPage should be an integer. You passed ".concat(e.minTilesPerPage,".")),!1;if(e.minTilesPerPage<1)return console.error("grid.minTilesPerPage can't be lower than 1."),!1;if("maxTilesPerPage"in e&&e.minTilesPerPage>e.maxTilesPerPage)return console.error("grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."),!1}}return!0},help:"unsupported layoutConfig. Check error logs for detailed info."},receiveSettings:{validate:function(t){return lw(t,{allowAllParticipantsKey:!1})},help:hw({allowAllParticipantsKey:!1})},inputSettings:{validate:function(t){return cw(t)},help:uw()},layout:{validate:function(t){return t==="custom-v1"||t==="browser"||t==="none"},help:'layout may only be set to "custom-v1"',queryString:"layout"},emb:{queryString:"emb"},embHref:{queryString:"embHref"},dailyJsVersion:{queryString:"dailyJsVersion"}},lu={styles:{validate:function(t){for(var e in t)if(e!=="cam"&&e!=="screen")return!1;if(t.cam){for(var e in t.cam)if(e!=="div"&&e!=="video")return!1}if(t.screen){for(var e in t.screen)if(e!=="div"&&e!=="video")return!1}return!0},help:"styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }"},setSubscribedTracks:{validate:function(t,e,n){if(e._preloadCache.subscribeToTracksAutomatically)return!1;var i=[!0,!1,"staged"];if(i.includes(t)||!Kt()&&t==="avatar")return!0;for(var r in t)if(!["audio","video","screenAudio","screenVideo"].includes(r)||!i.includes(t[r]))return!1;return!0},help:"setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: "+"true".concat(Kt()?"":" | 'avatar'"," | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }")},setAudio:!0,setVideo:!0,eject:!0};function La(t){var e={};for(var n in t)t[n]instanceof MediaStreamTrack?e[n]=Jc:(n==="dailyConfig"&&(t[n].modifyLocalSdpHook&&(window._dailyConfig&&(window._dailyConfig.modifyLocalSdpHook=t[n].modifyLocalSdpHook),delete t[n].modifyLocalSdpHook),t[n].modifyRemoteSdpHook&&(window._dailyConfig&&(window._dailyConfig.modifyRemoteSdpHook=t[n].modifyRemoteSdpHook),delete t[n].modifyRemoteSdpHook)),e[n]=t[n]);return e}function He(){if(Kt())throw new Error("This daily-js method is not currently supported in React Native")}function cp(){if(!Kt())throw new Error("This daily-js method is only supported in React Native")}function lw(t,e){for(var n=e.allowAllParticipantsKey,i=function(h){var d=["local"];return n||d.push("*"),h&&!d.includes(h)},r=function(h){return!!(h.layer===void 0||Number.isInteger(h.layer)&&h.layer>=0||h.layer==="inherit")},s=function(h){return!!h&&!(h.video&&!r(h.video))&&!(h.screenVideo&&!r(h.screenVideo))},o=0,a=Object.entries(t);o<a.length;o++){var l=cF(a[o],2),c=l[0],u=l[1];if(!i(c)||!s(u))return!1}return!0}function cw(t){return zn(t)==="object"&&!(!t.video||zn(t.video)!=="object")&&!!function(e){if(!e||zn(e)!=="object"||Object.keys(e).length===0||e.type&&(n=e.type,typeof n!="string"||!Object.values(qf).includes(n)))return!1;var n;return!(e.publish!==void 0&&typeof e.publish!="boolean"||e.config&&(zn(e.config)!=="object"||!function(i,r){var s=Object.keys(r);if(s.length===0)return!0;var o="invalid object in inputSettings -> video -> processor -> config";switch(i){case qf.BGBLUR:if(s.length>1||s[0]!=="strength")throw new Error(o);if(typeof r.strength!="number"||r.strength<=0||r.strength>1||isNaN(r.strength))throw new Error("".concat(o,"; expected: {0 < strength <= 1}, got: ").concat(r.strength));default:return!0}}(e.type,e.config)))}(t.video.processor)}function uw(){var t=Object.values(qf).join(" | ");return"inputSettings must be of the form: { video: { processor: [ ".concat(t," ] }, publish?: boolean, config?: {} }")}function hw(t){var e=t.allowAllParticipantsKey;return"receiveSettings must be of the form { [<remote participant id> | ".concat(TF).concat(e?' | "'.concat(CF,'"'):"","]: ")+'{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}'}var Vj=function(t){Gc(n,Hc);var e=wU(n);function n(i){var r,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Qi(this,n),r=e.call(this),Kc(Wc(r),"handleNativeAppActiveStateChange",function(a){r.disableReactNativeAutoDeviceManagement("video")||(a?r.camUnmutedBeforeLosingNativeActiveState&&r.setLocalVideo(!0):(r.camUnmutedBeforeLosingNativeActiveState=r.localVideo(),r.camUnmutedBeforeLosingNativeActiveState&&r.setLocalVideo(!1)))}),Kc(Wc(r),"handleNativeAudioFocusChange",function(a){r.disableReactNativeAutoDeviceManagement("audio")||(r._hasNativeAudioFocus=a,r.toggleParticipantAudioBasedOnNativeAudioFocus(),r._hasNativeAudioFocus?r.micUnmutedBeforeLosingNativeAudioFocus&&r.setLocalAudio(!0):(r.micUnmutedBeforeLosingNativeAudioFocus=r.localAudio(),r.setLocalAudio(!1)))}),s.dailyJsVersion="0.21.0",r._iframe=i,r._callObjectMode=s.layout==="none"&&!r._iframe,r._preloadCache={subscribeToTracksAutomatically:!0,audioDeviceId:null,videoDeviceId:null,outputDeviceId:null},r._callObjectMode&&(window._dailyPreloadCache=r._preloadCache),s.showLocalVideo!==void 0?r._callObjectMode?console.error("showLocalVideo is not available in call object mode"):r._showLocalVideo=!!s.showLocalVideo:r._showLocalVideo=!0,s.showParticipantsBar!==void 0?r._callObjectMode?console.error("showParticipantsBar is not available in call object mode"):r._showParticipantsBar=!!s.showParticipantsBar:r._showParticipantsBar=!0,s.activeSpeakerMode!==void 0?r._callObjectMode?console.error("activeSpeakerMode is not available in call object mode"):r._activeSpeakerMode=!!s.activeSpeakerMode:r._activeSpeakerMode=!1,s.receiveSettings?r._callObjectMode?r._receiveSettings=s.receiveSettings:console.error("receiveSettings is only available in call object mode"):r._receiveSettings={},r._inputSettings={},s.inputSettings&&(r._inputSettings=s.inputSettings),r.validateProperties(s),r.properties=Xt({},s),r._callObjectLoader=r._callObjectMode?new UF:null,r._meetingState=aI,r._isPreparingToJoin=!1,r._accessState={access:lI},r._nativeInCallAudioMode=ow,r._participants={},r._waitingParticipants={},r._inputEventsOn={},r._network={threshold:"good",quality:100},r._activeSpeaker={},r._callFrameId=Gf(),r._messageChannel=Kt()?new NF:new OF,r._iframe&&(r._iframe.requestFullscreen?r._iframe.addEventListener("fullscreenchange",function(a){document.fullscreenElement===r._iframe?(r.emit(qs,{action:qs}),r.sendMessageToCallMachine({action:qs})):(r.emit(Ws,{action:Ws}),r.sendMessageToCallMachine({action:Ws}))}):r._iframe.webkitRequestFullscreen&&r._iframe.addEventListener("webkitfullscreenchange",function(a){document.webkitFullscreenElement===r._iframe?(r.emit(qs,{action:qs}),r.sendMessageToCallMachine({action:qs})):(r.emit(Ws,{action:Ws}),r.sendMessageToCallMachine({action:Ws}))})),Kt()){var o=r.nativeUtils();o.addAudioFocusChangeListener&&o.removeAudioFocusChangeListener&&o.addAppActiveStateChangeListener&&o.removeAppActiveStateChangeListener||console.warn("expected (add|remove)(AudioFocus|AppActiveState)ChangeListener to be available in React Native"),r._hasNativeAudioFocus=!0,o.addAudioFocusChangeListener(r.handleNativeAudioFocusChange),o.addAppActiveStateChangeListener(r.handleNativeAppActiveStateChange)}return r._messageChannel.addListenerForMessagesFromCallMachine(r.handleMessageFromCallMachine,r._callFrameId,Wc(r)),r}return Yi(n,null,[{key:"supportedBrowser",value:function(){if(Kt())return{supported:!0,mobile:!0,name:"React Native",version:null,supportsScreenShare:!1,supportsSfu:!0,supportsVideoProcessing:!1};var i=class{static getParser(r,s=!1){if(typeof r!="string")throw new Error("UserAgent should be a string");return new oI(r,s)}static parse(r){return new oI(r).getResult()}static get BROWSER_MAP(){return sI}static get ENGINE_MAP(){return Ji}static get OS_MAP(){return wn}static get PLATFORMS_MAP(){return St}}.getParser(ni());return{supported:!!uI(),mobile:i.getPlatformType()==="mobile",name:i.getBrowserName(),version:i.getBrowserVersion(),supportsScreenShare:!!SF(),supportsSfu:!!Wf(),supportsVideoProcessing:kF()}}},{key:"version",value:function(){return"0.21.0"}},{key:"createCallObject",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return i.layout="none",new n(null,i)}},{key:"wrap",value:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(He(),!i||!i.contentWindow||typeof i.src!="string")throw new Error("DailyIframe::Wrap needs an iframe-like first argument");return r.layout||(r.customLayout?r.layout="custom-v1":r.layout="browser"),new n(i,r)}},{key:"createFrame",value:function(i,r){var s,o;He(),i&&r?(s=i,o=r):i&&i.append?(s=i,o={}):(s=document.body,o=i||{});var a=o.iframeStyle;a||(a=s===document.body?{position:"fixed",border:"1px solid black",backgroundColor:"white",width:"375px",height:"450px",right:"1em",bottom:"1em"}:{border:0,width:"100%",height:"100%"});var l=document.createElement("iframe");window.navigator&&window.navigator.userAgent.match(/Chrome\/61\./)?l.allow="microphone, camera":l.allow="microphone; camera; autoplay; display-capture",l.style.visibility="hidden",s.appendChild(l),l.style.visibility=null,Object.keys(a).forEach(function(c){return l.style[c]=a[c]}),o.layout||(o.customLayout?o.layout="custom-v1":o.layout="browser");try{return new n(l,o)}catch(c){throw s.removeChild(l),c}}},{key:"createTransparentFrame",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};He();var r=document.createElement("iframe");return r.allow="microphone; camera; autoplay",r.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      pointer-events: none;
    `,document.body.appendChild(r),i.layout||(i.layout="custom-v1"),n.wrap(r,i)}}]),Yi(n,[{key:"destroy",value:function(){var i=Be(ee.mark(function r(){var s,o,a;return ee.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(l.prev=0,![pn,Hf].includes(this._meetingState)){l.next=4;break}return l.next=4,this.leave();case 4:l.next=8;break;case 6:l.prev=6,l.t0=l.catch(0);case 8:(s=this._iframe)&&(o=s.parentElement)&&o.removeChild(s),this._messageChannel.removeListener(this.handleMessageFromCallMachine),Kt()&&((a=this.nativeUtils()).removeAudioFocusChangeListener(this.handleNativeAudioFocusChange),a.removeAppActiveStateChangeListener(this.handleNativeAppActiveStateChange)),this.resetMeetingDependentVars();case 13:case"end":return l.stop()}},r,this,[[0,6]])}));return function(){return i.apply(this,arguments)}}()},{key:"loadCss",value:function(i){var r=i.bodyClass,s=i.cssFile,o=i.cssText;return He(),this.sendMessageToCallMachine({action:"load-css",cssFile:this.absoluteUrl(s),bodyClass:r,cssText:o}),this}},{key:"iframe",value:function(){return He(),this._iframe}},{key:"meetingState",value:function(){return this._meetingState}},{key:"accessState",value:function(){if(!this._callObjectMode)throw new Error("accessState() currently only supported in call object mode");return this._accessState}},{key:"participants",value:function(){return this._participants}},{key:"waitingParticipants",value:function(){if(!this._callObjectMode)throw new Error("waitingParticipants() currently only supported in call object mode");return this._waitingParticipants}},{key:"validateParticipantProperties",value:function(i,r){for(var s in r){if(!lu[s])throw new Error("unrecognized updateParticipant property ".concat(s));if(lu[s].validate&&!lu[s].validate(r[s],this,this._participants[i]))throw new Error(lu[s].help)}}},{key:"updateParticipant",value:function(i,r){return this._participants.local&&this._participants.local.session_id===i&&(i="local"),i&&r&&this._participants[i]&&(this.validateParticipantProperties(i,r),this.sendMessageToCallMachine({action:"update-participant",id:i,properties:r})),this}},{key:"updateParticipants",value:function(i){var r=this._participants.local&&this._participants.local.session_id;for(var s in i)s===r&&(s="local"),s&&i[s]&&(this._participants[s]||s==="*")?this.validateParticipantProperties(s,i[s]):(console.warn("unrecognized participant in updateParticipants: ".concat(s)),delete i[s]);return this.sendMessageToCallMachine({action:"update-participants",participants:i}),this}},{key:"updateWaitingParticipant",value:function(){var i=Be(ee.mark(function r(){var s,o,a=this,l=arguments;return ee.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(s=l.length>0&&l[0]!==void 0?l[0]:"",o=l.length>1&&l[1]!==void 0?l[1]:{},this._callObjectMode){c.next=4;break}throw new Error("updateWaitingParticipant() currently only supported in call object mode");case 4:if(this._meetingState===pn){c.next=6;break}throw new Error("updateWaitingParticipant() only supported for joined meetings");case 6:if(typeof s=="string"&&zn(o)==="object"){c.next=8;break}throw new Error("updateWaitingParticipant() must take an id string and a updates object");case 8:return c.abrupt("return",new Promise(function(u,h){a.sendMessageToCallMachine({action:"daily-method-update-waiting-participant",id:s,updates:o},function(d){d.error&&h(d.error),d.id||h(new Error("unknown error in updateWaitingParticipant()")),u({id:d.id})})}));case 9:case"end":return c.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"updateWaitingParticipants",value:function(){var i=Be(ee.mark(function r(){var s,o=this,a=arguments;return ee.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(s=a.length>0&&a[0]!==void 0?a[0]:{},this._callObjectMode){l.next=3;break}throw new Error("updateWaitingParticipants() currently only supported in call object mode");case 3:if(this._meetingState===pn){l.next=5;break}throw new Error("updateWaitingParticipants() only supported for joined meetings");case 5:if(zn(s)==="object"){l.next=7;break}throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");case 7:return l.abrupt("return",new Promise(function(c,u){o.sendMessageToCallMachine({action:"daily-method-update-waiting-participants",updatesById:s},function(h){h.error&&u(h.error),h.ids||u(new Error("unknown error in updateWaitingParticipants()")),c({ids:h.ids})})}));case 8:case"end":return l.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"requestAccess",value:function(){var i=Be(ee.mark(function r(){var s,o,a,l,c,u=this,h=arguments;return ee.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(s=h.length>0&&h[0]!==void 0?h[0]:{},o=s.access,a=o===void 0?{level:"full"}:o,l=s.name,c=l===void 0?"":l,this._callObjectMode){d.next=3;break}throw new Error("requestAccess() currently only supported in call object mode");case 3:if(this._meetingState===pn){d.next=5;break}throw new Error("requestAccess() only supported for joined meetings");case 5:return d.abrupt("return",new Promise(function(f,p){u.sendMessageToCallMachine({action:"daily-method-request-access",access:a,name:c},function(g){g.error&&p(g.error),g.access||p(new Error("unknown error in requestAccess()")),f({access:g.access,granted:g.granted})})}));case 6:case"end":return d.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"localAudio",value:function(){return this._participants.local?this._participants.local.audio:null}},{key:"localVideo",value:function(){return this._participants.local?this._participants.local.video:null}},{key:"setLocalAudio",value:function(i){return this.sendMessageToCallMachine({action:"local-audio",state:i}),this}},{key:"setLocalVideo",value:function(i){return this.sendMessageToCallMachine({action:"local-video",state:i}),this}},{key:"getReceiveSettings",value:function(){var i=Be(ee.mark(function r(s){var o,a,l,c=this,u=arguments;return ee.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(o=u.length>1&&u[1]!==void 0?u[1]:{},a=o.showInheritedValues,l=a!==void 0&&a,this._callObjectMode){h.next=3;break}throw new Error("getReceiveSettings() only supported in call object mode");case 3:h.t0=zn(s),h.next=h.t0==="string"?6:h.t0==="undefined"?7:8;break;case 6:return h.abrupt("return",new Promise(function(d){c.sendMessageToCallMachine({action:"get-single-participant-receive-settings",id:s,showInheritedValues:l},function(f){d(f.receiveSettings)})}));case 7:return h.abrupt("return",this._receiveSettings);case 8:throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments');case 9:case"end":return h.stop()}},r,this)}));return function(r){return i.apply(this,arguments)}}()},{key:"updateReceiveSettings",value:function(){var i=Be(ee.mark(function r(s){var o=this;return ee.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(this._callObjectMode){a.next=2;break}throw new Error("updateReceiveSettings() only supported in call object mode");case 2:if(lw(s,{allowAllParticipantsKey:!0})){a.next=4;break}throw new Error(hw({allowAllParticipantsKey:!0}));case 4:if(this._meetingState===pn){a.next=6;break}throw new Error("updateReceiveSettings() is only allowed when joined. To specify receive settings earlier, use the receiveSettings config property.");case 6:return a.abrupt("return",new Promise(function(l){o.sendMessageToCallMachine({action:"update-receive-settings",receiveSettings:s},function(c){l({receiveSettings:c.receiveSettings})})}));case 7:case"end":return a.stop()}},r,this)}));return function(r){return i.apply(this,arguments)}}()},{key:"getInputSettings",value:function(){return this._inputSettings}},{key:"updateInputSettings",value:function(){var i=Be(ee.mark(function r(s){var o=this;return ee.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(cw(s)){a.next=2;break}throw new Error(uw());case 2:return a.abrupt("return",new Promise(function(l){o.sendMessageToCallMachine({action:"update-input-settings",inputSettings:s},function(c){l({inputSettings:c.inputSettings})})}));case 3:case"end":return a.stop()}},r)}));return function(r){return i.apply(this,arguments)}}()},{key:"setBandwidth",value:function(i){var r=i.kbs,s=i.trackConstraints;return He(),this.sendMessageToCallMachine({action:"set-bandwidth",kbs:r,trackConstraints:s}),this}},{key:"getDailyLang",value:function(){var i=this;return He(),new Promise(function(){var r=Be(ee.mark(function s(o){var a;return ee.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:a=function(c){delete c.action,delete c.callbackStamp,o(c)},i.sendMessageToCallMachine({action:"get-daily-lang"},a);case 2:case"end":return l.stop()}},s)}));return function(s){return r.apply(this,arguments)}}())}},{key:"setDailyLang",value:function(i){return He(),this.sendMessageToCallMachine({action:"set-daily-lang",lang:i}),this}},{key:"getMeetingSession",value:function(){var i=Be(ee.mark(function r(){var s=this;return ee.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(this._meetingState===pn){o.next=2;break}throw new Error("getMeetingSession() is only allowed when joined");case 2:return o.abrupt("return",new Promise(function(){var a=Be(ee.mark(function l(c){var u;return ee.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:u=function(d){delete d.action,delete d.callbackStamp,delete d.callFrameId,c(d)},s.sendMessageToCallMachine({action:"get-meeting-session"},u);case 2:case"end":return h.stop()}},l)}));return function(l){return a.apply(this,arguments)}}()));case 3:case"end":return o.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"setUserName",value:function(i,r){var s=this;return this.properties.userName=i,new Promise(function(){var o=Be(ee.mark(function a(l){var c;return ee.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:c=function(h){delete h.action,delete h.callbackStamp,l(h)},s.sendMessageToCallMachine({action:"set-user-name",name:i!=null?i:"",thisMeetingOnly:Kt()||!!r&&!!r.thisMeetingOnly},c);case 2:case"end":return u.stop()}},a)}));return function(a){return o.apply(this,arguments)}}())}},{key:"startCamera",value:function(){var i=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(function(){var s=Be(ee.mark(function o(a,l){var c;return ee.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(c=function(h){delete h.action,delete h.callbackStamp,a(h)},!i.needsLoad()){u.next=10;break}return u.prev=2,u.next=5,i.load(r);case 5:u.next=10;break;case 7:u.prev=7,u.t0=u.catch(2),l(u.t0);case 10:i.sendMessageToCallMachine({action:"start-camera",properties:La(i.properties),preloadCache:La(i._preloadCache)},c);case 11:case"end":return u.stop()}},o,null,[[2,7]])}));return function(o,a){return s.apply(this,arguments)}}())}},{key:"cycleCamera",value:function(){var i=this;return new Promise(function(r,s){i.sendMessageToCallMachine({action:"cycle-camera"},function(o){r({device:o.device})})})}},{key:"cycleMic",value:function(){var i=this;return He(),new Promise(function(r,s){i.sendMessageToCallMachine({action:"cycle-mic"},function(o){r({device:o.device})})})}},{key:"getCameraFacingMode",value:function(){var i=this;return cp(),new Promise(function(r,s){i.sendMessageToCallMachine({action:"get-camera-facing-mode"},function(o){r(o.facingMode)})})}},{key:"setInputDevices",value:function(i){var r=i.audioDeviceId,s=i.videoDeviceId,o=i.audioSource,a=i.videoSource;return console.warn("setInputDevices() is deprecated: instead use setInputDevicesAsync(), which returns a Promise"),this.setInputDevicesAsync({audioDeviceId:r,videoDeviceId:s,audioSource:o,videoSource:a}),this}},{key:"setInputDevicesAsync",value:function(){var i=Be(ee.mark(function r(s){var o,a,l,c,u=this;return ee.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(o=s.audioDeviceId,a=s.videoDeviceId,l=s.audioSource,c=s.videoSource,He(),l!==void 0&&(o=l),c!==void 0&&(a=c),o&&(this._preloadCache.audioDeviceId=o),a&&(this._preloadCache.videoDeviceId=a),!this._callObjectMode||!this.needsLoad()){h.next=8;break}return h.abrupt("return",{camera:{deviceId:this._preloadCache.videoDeviceId},mic:{deviceId:this._preloadCache.audioDeviceId},speaker:{deviceId:this._preloadCache.outputDeviceId}});case 8:return o instanceof MediaStreamTrack&&(o=Jc),a instanceof MediaStreamTrack&&(a=Jc),h.abrupt("return",new Promise(function(d){u.sendMessageToCallMachine({action:"set-input-devices",audioDeviceId:o,videoDeviceId:a},function(f){delete f.action,delete f.callbackStamp,f.returnPreloadCache?d({camera:{deviceId:u._preloadCache.videoDeviceId},mic:{deviceId:u._preloadCache.audioDeviceId},speaker:{deviceId:u._preloadCache.outputDeviceId}}):d(f)})}));case 11:case"end":return h.stop()}},r,this)}));return function(r){return i.apply(this,arguments)}}()},{key:"setOutputDevice",value:function(i){var r=i.outputDeviceId;return He(),r&&(this._preloadCache.outputDeviceId=r),this._callObjectMode&&this._meetingState!==pn?this:(this.sendMessageToCallMachine({action:"set-output-device",outputDeviceId:r}),this)}},{key:"getInputDevices",value:function(){var i=Be(ee.mark(function r(){var s=this;return ee.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(He(),!this._callObjectMode||!this.needsLoad()){o.next=3;break}return o.abrupt("return",{camera:{deviceId:this._preloadCache.videoDeviceId},mic:{deviceId:this._preloadCache.audioDeviceId},speaker:{deviceId:this._preloadCache.outputDeviceId}});case 3:return o.abrupt("return",new Promise(function(a,l){s.sendMessageToCallMachine({action:"get-input-devices"},function(c){delete c.action,delete c.callbackStamp,c.returnPreloadCache?a({camera:{deviceId:s._preloadCache.videoDeviceId},mic:{deviceId:s._preloadCache.audioDeviceId},speaker:{deviceId:s._preloadCache.outputDeviceId}}):a(c)})}));case 4:case"end":return o.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"nativeInCallAudioMode",value:function(){return cp(),this._nativeInCallAudioMode}},{key:"setNativeInCallAudioMode",value:function(i){if(cp(),[ow,TU].includes(i)){if(i!==this._nativeInCallAudioMode)return this._nativeInCallAudioMode=i,!this.disableReactNativeAutoDeviceManagement("audio")&&this.isMeetingPendingOrOngoing(this._meetingState,this._isPreparingToJoin)&&this.nativeUtils().setAudioMode(this._nativeInCallAudioMode),this}else console.error("invalid in-call audio mode specified: ",i)}},{key:"preAuth",value:function(){var i=Be(ee.mark(function r(){var s,o,a,l=this,c=arguments;return ee.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(s=c.length>0&&c[0]!==void 0?c[0]:{},this._callObjectMode){u.next=3;break}throw new Error("preAuth() currently only supported in call object mode");case 3:if(![Yc,pn].includes(this._meetingState)){u.next=5;break}throw new Error("preAuth() not supported after joining a meeting");case 5:if(!this.needsLoad()){u.next=8;break}return u.next=8,this.load(s);case 8:if(s.url){u.next=10;break}throw new Error("preAuth() requires at least a url to be provided");case 10:if(o=Ca(s.url),a=Ca(this.properties.url||this.properties.baseUrl),o===a){u.next=14;break}throw new Error("url in preAuth() has a different bundle url than the one loaded (".concat(a," -> ").concat(o,")"));case 14:return this.validateProperties(s),this.properties=Xt(Xt({},this.properties),s),u.abrupt("return",new Promise(function(h,d){l.sendMessageToCallMachine({action:"daily-method-preauth",properties:La(l.properties)},function(f){return f.error?d(f.error):f.access?(l._didPreAuth=!0,void h({access:f.access})):d(new Error("unknown error in preAuth()"))})}));case 17:case"end":return u.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"load",value:function(){var i=Be(ee.mark(function r(s){var o=this;return ee.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(this.needsLoad()){a.next=2;break}return a.abrupt("return");case 2:if(s&&(this.validateProperties(s),this.properties=Xt(Xt({},this.properties),s)),this._callObjectMode||this.properties.url){a.next=5;break}throw new Error("can't load iframe meeting because url property isn't set");case 5:this.updateMeetingState(Hf);try{this.emit("loading",{action:"loading"})}catch(l){console.log("could not emit 'loading'",l)}if(!this._callObjectMode){a.next=11;break}return a.abrupt("return",new Promise(function(l,c){o._callObjectLoader.cancel(),o._callObjectLoader.load(o.properties.url||o.properties.baseUrl,o._callFrameId,function(u){o.updateMeetingState("loaded"),u&&o.emit("loaded",{action:"loaded"}),l()},function(u,h){o.emit("load-attempt-failed",{action:"load-attempt-failed",errorMsg:u}),h||(o.updateMeetingState(Br),o.resetMeetingDependentVars(),o.emit("error",{action:"error",errorMsg:u}),c(u))})}));case 11:return this._iframe.src=this.assembleMeetingUrl(),a.abrupt("return",new Promise(function(l,c){o._loadedCallback=function(u){if(o._meetingState!==Br){for(var h in o.updateMeetingState("loaded"),(o.properties.cssFile||o.properties.cssText)&&o.loadCss(o.properties),o._inputEventsOn)o.sendMessageToCallMachine({action:"register-input-handler",on:h});l()}else c(u)}}));case 13:case"end":return a.stop()}},r,this)}));return function(r){return i.apply(this,arguments)}}()},{key:"join",value:function(){var i=Be(ee.mark(function r(){var s,o,a,l,c=this,u=arguments;return ee.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(s=u.length>0&&u[0]!==void 0?u[0]:{},o=!1,!this.needsLoad()){h.next=15;break}return this.updateIsPreparingToJoin(!0),h.prev=4,h.next=7,this.load(s);case 7:h.next=13;break;case 9:return h.prev=9,h.t0=h.catch(4),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject(h.t0));case 13:h.next=42;break;case 15:if(o=!(!this.properties.cssFile&&!this.properties.cssText),!this._didPreAuth){h.next=25;break}if(!s.url||s.url===this.properties.url){h.next=21;break}return console.error("url in join() is different than the one used in preAuth()"),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject());case 21:if(!s.token||s.token===this.properties.token){h.next=25;break}return console.error("token in join() is different than the one used in preAuth()"),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject());case 25:if(!s.url){h.next=40;break}if(!this._callObjectMode){h.next=36;break}if(a=Ca(s.url),l=Ca(this.properties.url||this.properties.baseUrl),a===l){h.next=33;break}return console.error("url in join() has a different bundle url than the one loaded (".concat(l," -> ").concat(a,")")),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject());case 33:this.properties.url=s.url,h.next=40;break;case 36:if(!s.url||s.url===this.properties.url){h.next=40;break}return console.error("url in join() is different than the one used in load() (".concat(this.properties.url," -> ").concat(s.url,")")),this.updateIsPreparingToJoin(!1),h.abrupt("return",Promise.reject());case 40:this.validateProperties(s),this.properties=Xt(Xt({},this.properties),s);case 42:if(s.showLocalVideo!==void 0&&(this._callObjectMode?console.error("showLocalVideo is not available in callObject mode"):this._showLocalVideo=!!s.showLocalVideo),s.showParticipantsBar!==void 0&&(this._callObjectMode?console.error("showParticipantsBar is not available in callObject mode"):this._showParticipantsBar=!!s.showParticipantsBar),this._meetingState!==pn&&this._meetingState!==Yc){h.next=48;break}return console.warn("already joined meeting, call leave() before joining again"),this.updateIsPreparingToJoin(!1),h.abrupt("return");case 48:this.updateMeetingState(Yc,!1);try{this.emit("joining-meeting",{action:"joining-meeting"})}catch(d){console.log("could not emit 'joining-meeting'",d)}return this.sendMessageToCallMachine({action:"join-meeting",properties:La(this.properties),preloadCache:La(this._preloadCache)}),h.abrupt("return",new Promise(function(d,f){c._joinedCallback=function(p,g){if(c._meetingState!==Br){if(c.updateMeetingState(pn),p)for(var m in p)c._callObjectMode&&(nw(p[m]),iw(p[m]),rw(p[m],c._participants[m])),c._participants[m]=Xt({},p[m]),c.toggleParticipantAudioBasedOnNativeAudioFocus();o&&c.loadCss(c.properties),d(p)}else f(g)}}));case 52:case"end":return h.stop()}},r,this,[[4,9]])}));return function(){return i.apply(this,arguments)}}()},{key:"leave",value:function(){var i=Be(ee.mark(function r(){var s=this;return ee.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",new Promise(function(a,l){if(s._callObjectLoader&&!s._callObjectLoader.loaded){s._callObjectLoader.cancel(),s.updateMeetingState(jr),s.resetMeetingDependentVars();try{s.emit(jr,{action:jr})}catch(c){console.log("could not emit 'left-meeting'",c)}a()}else s._meetingState===jr||s._meetingState===Br?a():s.sendMessageToCallMachine({action:"leave-meeting"},function(){a()})}));case 1:case"end":return o.stop()}},r)}));return function(){return i.apply(this,arguments)}}()},{key:"startScreenShare",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};He(),i.mediaStream&&(this._preloadCache.screenMediaStream=i.mediaStream,i.mediaStream=Jc),this.sendMessageToCallMachine({action:"local-screen-start",captureOptions:i})}},{key:"stopScreenShare",value:function(){He(),this.sendMessageToCallMachine({action:"local-screen-stop"})}},{key:"startRecording",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};He(),this.sendMessageToCallMachine(Xt({action:"local-recording-start"},i))}},{key:"updateRecording",value:function(i){var r=i.layout,s=r===void 0?{preset:"default"}:r;this.sendMessageToCallMachine({action:"daily-method-update-recording",layout:s})}},{key:"stopRecording",value:function(){He(),this.sendMessageToCallMachine({action:"local-recording-stop"})}},{key:"startLiveStreaming",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.sendMessageToCallMachine(Xt({action:"daily-method-start-live-streaming"},i))}},{key:"updateLiveStreaming",value:function(i){var r=i.layout,s=r===void 0?{preset:"default"}:r;this.sendMessageToCallMachine({action:"daily-method-update-live-streaming",layout:s})}},{key:"stopLiveStreaming",value:function(){this.sendMessageToCallMachine({action:"daily-method-stop-live-streaming"})}},{key:"startTranscription",value:function(){this.sendMessageToCallMachine({action:"daily-method-start-transcription"})}},{key:"stopTranscription",value:function(){this.sendMessageToCallMachine({action:"daily-method-stop-transcription"})}},{key:"getNetworkStats",value:function(){var i=this;return this._meetingState!==pn?{stats:{latest:{}}}:new Promise(function(r,s){i.sendMessageToCallMachine({action:"get-calc-stats"},function(o){r(Xt({stats:o.stats},i._network))})})}},{key:"getActiveSpeaker",value:function(){return He(),this._activeSpeaker}},{key:"setActiveSpeakerMode",value:function(i){return He(),this.sendMessageToCallMachine({action:"set-active-speaker-mode",enabled:i}),this}},{key:"activeSpeakerMode",value:function(){return He(),this._activeSpeakerMode}},{key:"subscribeToTracksAutomatically",value:function(){return this._preloadCache.subscribeToTracksAutomatically}},{key:"setSubscribeToTracksAutomatically",value:function(i){if(this._meetingState!==pn)throw new Error("setSubscribeToTracksAutomatically() is only allowed when joined");return this._preloadCache.subscribeToTracksAutomatically=i,this.sendMessageToCallMachine({action:"daily-method-subscribe-to-tracks-automatically",enabled:i}),this}},{key:"enumerateDevices",value:function(){var i=Be(ee.mark(function r(){var s,o=this;return ee.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(He(),!this._callObjectMode){a.next=6;break}return a.next=4,navigator.mediaDevices.enumerateDevices();case 4:return s=a.sent,a.abrupt("return",{devices:s.map(function(l){return JSON.parse(JSON.stringify(l))})});case 6:return a.abrupt("return",new Promise(function(l,c){o.sendMessageToCallMachine({action:"enumerate-devices"},function(u){l({devices:u.devices})})}));case 7:case"end":return a.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"sendAppMessage",value:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"*";if(JSON.stringify(i).length>4096)throw new Error("Message data too large. Max size is 4096");return this.sendMessageToCallMachine({action:"app-msg",data:i,to:r}),this}},{key:"addFakeParticipant",value:function(i){return He(),this.sendMessageToCallMachine(Xt({action:"add-fake-participant"},i)),this}},{key:"setShowNamesMode",value:function(i){return He(),i&&i!=="always"&&i!=="never"?(console.error('setShowNamesMode argument should be "always", "never", or false'),this):(this.sendMessageToCallMachine({action:"set-show-names",mode:i}),this)}},{key:"setShowLocalVideo",value:function(){var i=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];return He(),typeof i!="boolean"?(console.error("setShowLocalVideo only accepts a boolean value"),this):this._callObjectMode?(console.error("setShowLocalVideo is not available in callObject mode"),this):this._meetingState!==pn?(console.error("the meeting must be joined before calling setShowLocalVideo"),this):(this.sendMessageToCallMachine({action:"set-show-local-video",show:i}),this._showLocalVideo=i,this)}},{key:"showLocalVideo",value:function(){return He(),this._callObjectMode?(console.error("showLocalVideo is not available in callObject mode"),this):this._showLocalVideo}},{key:"setShowParticipantsBar",value:function(){var i=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];return He(),typeof i!="boolean"?(console.error("setShowParticipantsBar only accepts a boolean value"),this):this._callObjectMode?(console.error("setShowParticipantsBar is not available in callObject mode"),this):this._meetingState!==pn?(console.error("the meeting must be joined before calling setShowParticipantsBar"),this):(this.sendMessageToCallMachine({action:"set-show-participants-bar",show:i}),this._showParticipantsBar=i,this)}},{key:"showParticipantsBar",value:function(){return He(),this._callObjectMode?(console.error("showParticipantsBar is not available in callObject mode"),this):this._showParticipantsBar}},{key:"theme",value:function(){return this._callObjectMode?(console.error("theme is not available in callObject mode"),this):this.properties.theme}},{key:"setTheme",value:function(i){var r=this;return new Promise(function(s,o){if(r._callObjectMode)o("setTheme is not available in callObject mode");else try{r.validateProperties({theme:i}),r.properties.theme=Xt({},i),r.sendMessageToCallMachine({action:"set-theme",theme:r.properties.theme});try{r.emit("theme-updated",{action:"theme-updated",theme:r.properties.theme})}catch(a){console.log("could not emit 'theme-updated'",a)}s(r.properties.theme)}catch(a){o(a)}})}},{key:"detectAllFaces",value:function(){var i=this;return He(),new Promise(function(r,s){i.sendMessageToCallMachine({action:"detect-all-faces"},function(o){delete o.action,delete o.callbackStamp,r(o)})})}},{key:"requestFullscreen",value:function(){var i=Be(ee.mark(function r(){return ee.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(He(),this._iframe&&!document.fullscreenElement){s.next=3;break}return s.abrupt("return");case 3:return s.prev=3,s.next=6,this._iframe.requestFullscreen;case 6:if(!s.sent){s.next=10;break}this._iframe.requestFullscreen(),s.next=11;break;case 10:this._iframe.webkitRequestFullscreen();case 11:s.next=16;break;case 13:s.prev=13,s.t0=s.catch(3),console.log("could not make video call fullscreen",s.t0);case 16:case"end":return s.stop()}},r,this,[[3,13]])}));return function(){return i.apply(this,arguments)}}()},{key:"exitFullscreen",value:function(){He(),document.fullscreenElement?document.exitFullscreen():document.webkitFullscreenElement&&document.webkitExitFullscreen()}},{key:"room",value:function(){var i=Be(ee.mark(function r(){var s,o,a,l=this,c=arguments;return ee.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(s=c.length>0&&c[0]!==void 0?c[0]:{},o=s.includeRoomConfigDefaults,a=o===void 0||o,this._meetingState!==pn&&!this._didPreAuth){u.next=5;break}return u.abrupt("return",new Promise(function(h,d){l.sendMessageToCallMachine({action:"lib-room-info",includeRoomConfigDefaults:a},function(f){delete f.action,delete f.callbackStamp,h(f)})}));case 5:if(!this.properties.url){u.next=7;break}return u.abrupt("return",{roomUrlPendingJoin:this.properties.url});case 7:return u.abrupt("return",null);case 8:case"end":return u.stop()}},r,this)}));return function(){return i.apply(this,arguments)}}()},{key:"geo",value:function(){var i=Be(ee.mark(function r(){return ee.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",new Promise(function(){var o=Be(ee.mark(function a(l,c){var u,h;return ee.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,d.next=4,fetch("https://gs.daily.co/_ks_/x-swsl/:");case 4:return u=d.sent,d.next=7,u.json();case 7:h=d.sent,l({current:h.geo}),d.next=15;break;case 11:d.prev=11,d.t0=d.catch(0),console.error("geo lookup failed",d.t0),l({current:""});case 15:case"end":return d.stop()}},a,null,[[0,11]])}));return function(a,l){return o.apply(this,arguments)}}()));case 1:case"end":return s.stop()}},r)}));return function(){return i.apply(this,arguments)}}()},{key:"setNetworkTopology",value:function(){var i=Be(ee.mark(function r(s){var o=this;return ee.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return He(),a.abrupt("return",new Promise(function(){var l=Be(ee.mark(function c(u,h){var d;return ee.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:d=function(p){p.error?h({error:p.error}):u({workerId:p.workerId})},o.sendMessageToCallMachine({action:"set-network-topology",opts:s},d);case 2:case"end":return f.stop()}},c)}));return function(c,u){return l.apply(this,arguments)}}()));case 2:case"end":return a.stop()}},r)}));return function(r){return i.apply(this,arguments)}}()},{key:"getNetworkTopology",value:function(){var i=Be(ee.mark(function r(){var s=this;return ee.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",new Promise(function(){var a=Be(ee.mark(function l(c,u){var h;return ee.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:h=function(f){f.error?u({error:f.error}):c({topology:f.topology})},s.sendMessageToCallMachine({action:"get-network-topology"},h);case 2:case"end":return d.stop()}},l)}));return function(l,c){return a.apply(this,arguments)}}()));case 1:case"end":return o.stop()}},r)}));return function(){return i.apply(this,arguments)}}()},{key:"setPlayNewParticipantSound",value:function(i){if(He(),typeof i!="number"&&i!==!0&&i!==!1)throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(i));this.sendMessageToCallMachine({action:"daily-method-set-play-ding",arg:i})}},{key:"on",value:function(i,r){return this._inputEventsOn[i]={},this.sendMessageToCallMachine({action:"register-input-handler",on:i}),Hc.prototype.on.call(this,i,r)}},{key:"once",value:function(i,r){return this._inputEventsOn[i]={},this.sendMessageToCallMachine({action:"register-input-handler",on:i}),Hc.prototype.once.call(this,i,r)}},{key:"off",value:function(i,r){return delete this._inputEventsOn[i],this.sendMessageToCallMachine({action:"register-input-handler",off:i}),Hc.prototype.off.call(this,i,r)}},{key:"validateProperties",value:function(i){for(var r in i){if(!Wr[r])throw new Error("unrecognized property '".concat(r,"'"));if(Wr[r].validate&&!Wr[r].validate(i[r],this))throw new Error("property '".concat(r,"': ").concat(Wr[r].help))}}},{key:"assembleMeetingUrl",value:function(){var i=Xt(Xt({},this.properties),{},{emb:this._callFrameId,embHref:encodeURIComponent(window.location.href)}),r=i.url.match(/\?/)?"&":"?";return i.url+r+Object.keys(Wr).filter(function(s){return Wr[s].queryString&&i[s]!==void 0}).map(function(s){return"".concat(Wr[s].queryString,"=").concat(i[s])}).join("&")}},{key:"needsLoad",value:function(){return[aI,Hf,jr,Br].includes(this._meetingState)}},{key:"sendMessageToCallMachine",value:function(i,r){this._messageChannel.sendMessageToCallMachine(i,r,this._iframe,this._callFrameId)}},{key:"forwardPackagedMessageToCallMachine",value:function(i){this._messageChannel.forwardPackagedMessageToCallMachine(i,this._iframe,this._callFrameId)}},{key:"addListenerForPackagedMessagesFromCallMachine",value:function(i){return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(i,this._callFrameId)}},{key:"removeListenerForPackagedMessagesFromCallMachine",value:function(i){this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(i)}},{key:"handleMessageFromCallMachine",value:function(i){switch(i.action){case"iframe-ready-for-launch-config":this.sendMessageToCallMachine(Xt({action:"iframe-launch-config"},this.properties));break;case"loaded":this._loadedCallback&&(this._loadedCallback(),this._loadedCallback=null);try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"joined-meeting":this._joinedCallback&&(this._joinedCallback(i.participants),this._joinedCallback=null);try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"participant-joined":case"participant-updated":if(this._meetingState===jr)return;if(i.participant&&i.participant.session_id){var r=i.participant.local?"local":i.participant.session_id;this._callObjectMode&&(nw(i.participant),iw(i.participant),rw(i.participant,this._participants[r]));try{this.maybeEventTrackStopped(this._participants[r],i.participant,"audioTrack"),this.maybeEventTrackStopped(this._participants[r],i.participant,"videoTrack"),this.maybeEventTrackStopped(this._participants[r],i.participant,"screenVideoTrack"),this.maybeEventTrackStopped(this._participants[r],i.participant,"screenAudioTrack"),this.maybeEventTrackStarted(this._participants[r],i.participant,"audioTrack"),this.maybeEventTrackStarted(this._participants[r],i.participant,"videoTrack"),this.maybeEventTrackStarted(this._participants[r],i.participant,"screenVideoTrack"),this.maybeEventTrackStarted(this._participants[r],i.participant,"screenAudioTrack"),this.maybeEventTrackStoppedForCustomTracks(this._participants[r],i.participant),this.maybeEventTrackStartedForCustomTracks(this._participants[r],i.participant),this.maybeEventRecordingStopped(this._participants[r],i.participant),this.maybeEventRecordingStarted(this._participants[r],i.participant)}catch(p){console.error("track events error",p)}if(!this.compareEqualForParticipantUpdateEvent(i.participant,this._participants[r])){this._participants[r]=Xt({},i.participant),this.toggleParticipantAudioBasedOnNativeAudioFocus();try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}}}break;case"participant-left":if(i.participant&&i.participant.session_id){var s=this._participants[i.participant.session_id];s&&(this.maybeEventTrackStopped(s,null,"audioTrack"),this.maybeEventTrackStopped(s,null,"videoTrack"),this.maybeEventTrackStopped(s,null,"screenVideoTrack"),this.maybeEventTrackStopped(s,null,"screenAudioTrack"),this.maybeEventTrackStoppedForCustomTracks(s,null)),delete this._participants[i.participant.session_id];try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}}break;case"access-state-updated":var o={access:i.access};if(i.awaitingAccess&&(o.awaitingAccess=i.awaitingAccess),!Qc(this._accessState,o)){this._accessState=o;try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}}break;case"meeting-session-updated":if(i.meetingSession)try{delete i.callFrameId,this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"error":this._iframe&&!i.preserveIframe&&(this._iframe.src=""),this.updateMeetingState(Br),this.resetMeetingDependentVars(),this._loadedCallback&&(this._loadedCallback(i.errorMsg),this._loadedCallback=null),this._joinedCallback&&(this._joinedCallback(null,i.errorMsg),this._joinedCallback=null);try{i.preserveIframe;var a=hF(i,["preserveIframe"]);this.emit(i.action,a)}catch(p){console.log("could not emit",i,p)}break;case"left-meeting":this._meetingState!==Br&&this.updateMeetingState(jr),this.resetMeetingDependentVars();try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"input-event":var l=this._participants[i.session_id];l||(l=i.session_id===this._participants.local.session_id?this._participants.local:{});try{this.emit(i.event.type,{action:i.event.type,event:i.event,participant:Xt({},l)})}catch(p){console.log("could not emit",i,p)}break;case"network-quality-change":var c=i.threshold,u=i.quality;if(c!==this._network.threshold||u!==this._network.quality){this._network.quality=u,this._network.threshold=c;try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}}break;case"active-speaker-change":var h=i.activeSpeaker;if(this._activeSpeaker.peerId!==h.peerId){this._activeSpeaker.peerId=h.peerId;try{this.emit(i.action,{action:i.action,activeSpeaker:this._activeSpeaker})}catch(p){console.log("could not emit",i,p)}}break;case"show-local-video-changed":if(this._callObjectMode)return;var d=i.show;this._showLocalVideo=d;try{this.emit(i.action,{action:i.action,show:d})}catch(p){console.log("could not emit",i,p)}break;case"active-speaker-mode-change":var f=i.enabled;if(this._activeSpeakerMode!==f){this._activeSpeakerMode=f;try{this.emit(i.action,{action:i.action,enabled:this._activeSpeakerMode})}catch(p){console.log("could not emit",i,p)}}break;case"waiting-participant-added":case"waiting-participant-updated":case"waiting-participant-removed":this._waitingParticipants=i.allWaitingParticipants;try{this.emit(i.action,{action:i.action,participant:i.participant})}catch(p){console.log("could not emit",i,p)}break;case"receive-settings-updated":if(!Qc(this._receiveSettings,i.receiveSettings)){this._receiveSettings=i.receiveSettings;try{this.emit(i.action,{action:i.action,receiveSettings:i.receiveSettings})}catch(p){console.log("could not emit",i,p)}}break;case"input-settings-updated":if(!Qc(this._inputSettings,i.inputSettings)){this._inputSettings=i.inputSettings;try{this.emit(i.action,{action:i.action,inputSettings:i.inputSettings})}catch(p){console.log("could not emit",i,p)}}break;case"recording-started":case"recording-stopped":case"recording-stats":case"recording-error":case"recording-upload-completed":case"transcription-started":case"transcription-stopped":case"transcription-error":case"started-camera":case"camera-error":case"app-message":case"local-screen-share-started":case"local-screen-share-stopped":case"network-connection":case"recording-data":case"live-streaming-started":case"live-streaming-stopped":case"live-streaming-error":case"nonfatal-error":case"lang-updated":case"media-ingest-error":try{this.emit(i.action,i)}catch(p){console.log("could not emit",i,p)}break;case"request-fullscreen":this.requestFullscreen();break;case"request-exit-fullscreen":this.exitFullscreen()}}},{key:"maybeEventRecordingStopped",value:function(i,r){var s="record";if(i&&!r.local&&r[s]===!1&&i[s]!==r[s])try{this.emit("recording-stopped",{action:"recording-stopped"})}catch(o){console.log("could not emit",o)}}},{key:"maybeEventRecordingStarted",value:function(i,r){var s="record";if(i&&!r.local&&r[s]===!0&&i[s]!==r[s])try{this.emit("recording-started",{action:"recording-started"})}catch(o){console.log("could not emit",o)}}},{key:"maybeEventTrackStopped",value:function(i,r,s){if(i&&(i[s]&&i[s].readyState==="ended"||i[s]&&(!r||!r[s])||i[s]&&i[s].id!==r[s].id))try{this.emit("track-stopped",{action:"track-stopped",track:i[s],participant:r})}catch(o){console.log("could not emit",o)}}},{key:"maybeEventTrackStarted",value:function(i,r,s){if(r[s]&&(!i||!i[s])||r[s]&&i[s].readyState==="ended"||r[s]&&r[s].id!==i[s].id)try{this.emit("track-started",{action:"track-started",track:r[s],participant:r})}catch(o){console.log("could not emit",o)}}},{key:"maybeEventTrackStoppedForCustomTracks",value:function(i,r){if(i)for(var s in i.tracks)lp(s)||this.maybeEventTrackStopped(i.tracks[s],r?r.tracks[s]:null,"track")}},{key:"maybeEventTrackStartedForCustomTracks",value:function(i,r){if(r)for(var s in r.tracks)lp(s)||this.maybeEventTrackStarted(i?i.tracks[s]:null,r.tracks[s],"track")}},{key:"compareEqualForParticipantUpdateEvent",value:function(i,r){return!!Qc(i,r)&&(!i.videoTrack||!r.videoTrack||i.videoTrack.id===r.videoTrack.id&&i.videoTrack.muted===r.videoTrack.muted&&i.videoTrack.enabled===r.videoTrack.enabled)&&(!i.audioTrack||!r.audioTrack||i.audioTrack.id===r.audioTrack.id&&i.audioTrack.muted===r.audioTrack.muted&&i.audioTrack.enabled===r.audioTrack.enabled)}},{key:"nativeUtils",value:function(){return Kt()?typeof DailyNativeUtils=="undefined"?(console.warn("in React Native, DailyNativeUtils is expected to be available"),null):DailyNativeUtils:null}},{key:"updateIsPreparingToJoin",value:function(i){this.updateMeetingState(this._meetingState,i)}},{key:"updateMeetingState",value:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._isPreparingToJoin;if(i!==this._meetingState||r!==this._isPreparingToJoin){var s=this._meetingState,o=this._isPreparingToJoin;this._meetingState=i,this._isPreparingToJoin=r;var a=this.isMeetingPendingOrOngoing(s,o),l=this.isMeetingPendingOrOngoing(this._meetingState,this._isPreparingToJoin);a!==l&&(this.updateKeepDeviceAwake(l),this.updateDeviceAudioMode(l),this.updateShowAndroidOngoingMeetingNotification(l),this.updateNoOpRecordingEnsuringBackgroundContinuity(l))}}},{key:"resetMeetingDependentVars",value:function(){this._participants={},this._waitingParticipants={},this._activeSpeaker={},this._activeSpeakerMode=!1,this._didPreAuth=!1,this._accessState={access:lI},this._receiveSettings={},this._inputSettings={},this._preloadCache}},{key:"updateKeepDeviceAwake",value:function(i){Kt()&&this.nativeUtils().setKeepDeviceAwake(i,this._callFrameId)}},{key:"updateDeviceAudioMode",value:function(i){if(Kt()&&!this.disableReactNativeAutoDeviceManagement("audio")){var r=i?this._nativeInCallAudioMode:"idle";this.nativeUtils().setAudioMode(r)}}},{key:"updateShowAndroidOngoingMeetingNotification",value:function(i){if(Kt()&&this.nativeUtils().setShowOngoingMeetingNotification){var r,s,o,a;if(this.properties.reactNativeConfig&&this.properties.reactNativeConfig.androidInCallNotification){var l=this.properties.reactNativeConfig.androidInCallNotification;r=l.title,s=l.subtitle,o=l.iconName,a=l.disableForCustomOverride}a&&(i=!1),this.nativeUtils().setShowOngoingMeetingNotification(i,r,s,o,this._callFrameId)}}},{key:"updateNoOpRecordingEnsuringBackgroundContinuity",value:function(i){Kt()&&this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity&&this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(i)}},{key:"isMeetingPendingOrOngoing",value:function(i,r){return[Yc,pn].includes(i)||r}},{key:"toggleParticipantAudioBasedOnNativeAudioFocus",value:function(){if(Kt()){var i=store.getState();for(var r in i.streams){var s=i.streams[r];s&&s.pendingTrack&&s.pendingTrack.kind==="audio"&&(s.pendingTrack.enabled=this._hasNativeAudioFocus)}}}},{key:"disableReactNativeAutoDeviceManagement",value:function(i){return this.properties.reactNativeConfig&&this.properties.reactNativeConfig.disableAutoDeviceManagement&&this.properties.reactNativeConfig.disableAutoDeviceManagement[i]}},{key:"absoluteUrl",value:function(i){if(i!==void 0){var r=document.createElement("a");return r.href=i,r.href}}},{key:"sayHello",value:function(){var i="hello, world.";return console.log(i),i}}]),n}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="firebasestorage.googleapis.com",fw="storageBucket",CU=2*60*1e3,SU=10*60*1e3;class At extends Ai{constructor(e,n){super(up(e),`Firebase Storage: ${n} (${up(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,At.prototype)}_codeEquals(e){return up(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function up(t){return"storage/"+t}function hp(){const t="An unknown error occurred, please check the error payload for server response.";return new At("unknown",t)}function AU(t){return new At("object-not-found","Object '"+t+"' does not exist.")}function kU(t){return new At("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function RU(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new At("unauthenticated",t)}function OU(){return new At("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function LU(t){return new At("unauthorized","User does not have permission to access '"+t+"'.")}function NU(){return new At("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function MU(){return new At("canceled","User canceled the upload/download.")}function PU(t){return new At("invalid-url","Invalid URL '"+t+"'.")}function DU(t){return new At("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function FU(){return new At("no-default-bucket","No default bucket found. Did you set the '"+fw+"' property when initializing the app?")}function xU(){return new At("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function UU(){return new At("no-download-url","The given file does not have any download URLs.")}function dp(t){return new At("invalid-argument",t)}function pw(){return new At("app-deleted","The Firebase app was deleted.")}function VU(t){return new At("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Na(t,e){return new At("invalid-format","String does not match format '"+t+"': "+e)}function Ma(t){throw new At("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Hn.makeFromUrl(e,n)}catch{return new Hn(e,"")}if(i.path==="")return i;throw DU(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(y){y.path_=decodeURIComponent(y.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},g=n===dw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),w=[{regex:a,indices:l,postModify:s},{regex:f,indices:p,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let y=0;y<w.length;y++){const R=w[y],k=R.regex.exec(e);if(k){const _=k[R.indices.bucket];let I=k[R.indices.path];I||(I=""),i=new Hn(_,I),R.postModify(i);break}}if(i==null)throw PU(e);return i}}class jU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BU(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...m){c||(c=!0,e.apply(null,m))}function h(m){r=setTimeout(()=>{r=null,t(f,l())},m)}function d(){s&&clearTimeout(s)}function f(m,...v){if(c){d();return}if(m){d(),u.call(null,m,...v);return}if(l()||o){d(),u.call(null,m,...v);return}i<64&&(i*=2);let w;a===1?(a=2,w=0):w=(i+Math.random())*1e3,h(w)}let p=!1;function g(m){p||(p=!0,d(),!c&&(r!==null?(m||(a=2),clearTimeout(r),h(0)):m||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,g(!0)},n),g}function HU(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qU(t){return t!==void 0}function WU(t){return typeof t=="object"&&!Array.isArray(t)}function fp(t){return typeof t=="string"||t instanceof String}function mw(t){return pp()&&t instanceof Blob}function pp(){return typeof Blob!="undefined"}function gw(t,e,n,i){if(i<e)throw dp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw dp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t,e,n){let i=e;return n==null&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function _w(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Gr||(Gr={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GU{constructor(e,n,i,r,s,o,a,l,c,u,h){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,f)=>{this.resolve_=d,this.reject_=f,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new uu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Gr.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const u=s.getErrorCode()===Gr.ABORT;i(!1,new uu(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new uu(c,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());qU(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=hp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?pw():MU();o(l)}else{const l=NU();o(l)}};this.canceled_?n(!1,new uu(!1,null,!0)):this.backoffId_=BU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&HU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||r||s}}class uu{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function zU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function KU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function XU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function QU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function YU(t,e,n,i,r,s){const o=_w(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return XU(l,e),zU(l,n),KU(l,s),QU(l,i),new GU(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JU(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function ZU(...t){const e=JU();if(e!==void 0){const n=new e;for(let i=0;i<t.length;i++)n.append(t[i]);return n.getBlob()}else{if(pp())return new Blob(t);throw new At("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function $U(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function eV(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class mp{constructor(e,n){this.data=e,this.contentType=n||null}}function tV(t,e){switch(t){case ii.RAW:return new mp(vw(e));case ii.BASE64:case ii.BASE64URL:return new mp(yw(t,e));case ii.DATA_URL:return new mp(iV(e),rV(e))}throw hp()}function vw(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const s=i,o=t.charCodeAt(++n);i=65536|(s&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)==56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function nV(t){let e;try{e=decodeURIComponent(t)}catch{throw Na(ii.DATA_URL,"Malformed data URL.")}return vw(e)}function yw(t,e){switch(t){case ii.BASE64:{const r=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(r||s)throw Na(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case ii.BASE64URL:{const r=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(r||s)throw Na(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=eV(e)}catch{throw Na(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}class bw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Na(ii.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=sV(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-";base64".length):i),this.rest=e.substring(e.indexOf(",")+1)}}function iV(t){const e=new bw(t);return e.base64?yw(ii.BASE64,e.rest):nV(e.rest)}function rV(t){return new bw(t).contentType}function sV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){let i=0,r="";mw(e)?(this.data_=e,i=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(mw(this.data_)){const i=this.data_,r=$U(i,e,n);return r===null?null:new $i(r)}else{const i=new Uint8Array(this.data_.buffer,e,n-e);return new $i(i,!0)}}static getBlob(...e){if(pp()){const n=e.map(i=>i instanceof $i?i.data_:i);return new $i(ZU.apply(null,n))}else{const n=e.map(o=>fp(o)?tV(ii.RAW,o).data:o.data_);let i=0;n.forEach(o=>{i+=o.byteLength});const r=new Uint8Array(i);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[s++]=o[a]}),new $i(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(t){let e;try{e=JSON.parse(t)}catch{return null}return WU(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function aV(t,e){const n=e.split("/").filter(i=>i.length>0).join("/");return t.length===0?n:t+"/"+n}function Iw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lV(t,e){return e}class Tn{constructor(e,n,i,r){this.server=e,this.local=n||e,this.writable=!!i,this.xform=r||lV}}let hu=null;function cV(t){return!fp(t)||t.length<2?t:Iw(t)}function ww(){if(hu)return hu;const t=[];t.push(new Tn("bucket")),t.push(new Tn("generation")),t.push(new Tn("metageneration")),t.push(new Tn("name","fullPath",!0));function e(s,o){return cV(o)}const n=new Tn("name");n.xform=e,t.push(n);function i(s,o){return o!==void 0?Number(o):o}const r=new Tn("size");return r.xform=i,t.push(r),t.push(new Tn("timeCreated")),t.push(new Tn("updated")),t.push(new Tn("md5Hash",null,!0)),t.push(new Tn("cacheControl",null,!0)),t.push(new Tn("contentDisposition",null,!0)),t.push(new Tn("contentEncoding",null,!0)),t.push(new Tn("contentLanguage",null,!0)),t.push(new Tn("contentType",null,!0)),t.push(new Tn("metadata","customMetadata",!0)),hu=t,hu}function uV(t,e){function n(){const i=t.bucket,r=t.fullPath,s=new Hn(i,r);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function hV(t,e,n){const i={};i.type="file";const r=n.length;for(let s=0;s<r;s++){const o=n[s];i[o.local]=o.xform(i,e[o.server])}return uV(i,t),i}function Tw(t,e,n){const i=Ew(e);return i===null?null:hV(t,i,n)}function dV(t,e,n,i){const r=Ew(e);if(r===null||!fp(r.downloadTokens))return null;const s=r.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=cu(d,n,i),p=_w({alt:"media",token:c});return f+p})[0]}function fV(t,e){const n={},i=e.length;for(let r=0;r<i;r++){const s=e[r];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class gp{constructor(e,n,i,r){this.url=e,this.method=n,this.handler=i,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(t){if(!t)throw hp()}function pV(t,e){function n(i,r){const s=Tw(t,r,e);return Cw(s!==null),s}return n}function mV(t,e){function n(i,r){const s=Tw(t,r,e);return Cw(s!==null),dV(s,r,t.host,t._protocol)}return n}function Sw(t){function e(n,i){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=OU():r=RU():n.getStatus()===402?r=kU(t.bucket):n.getStatus()===403?r=LU(t.path):r=i,r.serverResponse=i.serverResponse,r}return e}function Aw(t){const e=Sw(t);function n(i,r){let s=e(i,r);return i.getStatus()===404&&(s=AU(t.path)),s.serverResponse=r.serverResponse,s}return n}function gV(t,e,n){const i=e.fullServerUrl(),r=cu(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new gp(r,s,mV(t,n),o);return a.errorHandler=Aw(e),a}function _V(t,e){const n=e.fullServerUrl(),i=cu(n,t.host,t._protocol),r="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new gp(i,r,o,s);return a.successCodes=[200,204],a.errorHandler=Aw(e),a}function vV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function yV(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=vV(null,e)),i}function bV(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let y=0;y<2;y++)w=w+Math.random().toString().slice(2);return w}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=yV(e,i,r),u=fV(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=$i.getBlob(h,i,d);if(f===null)throw xU();const p={name:c.fullPath},g=cu(s,t.host,t._protocol),m="POST",v=t.maxUploadRetryTime,C=new gp(g,m,pV(t,n),v);return C.urlParams=p,C.headers=o,C.body=f.uploadData(),C.errorHandler=Sw(e),C}class EV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Gr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Gr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Gr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,r){if(this.sent_)throw Ma("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ma("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ma("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ma("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ma("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class IV extends EV{initXhr(){this.xhr_.responseType="text"}}function _p(){return new IV}/**
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
 */class zr{constructor(e,n){this._service=e,n instanceof Hn?this._location=n:this._location=Hn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new zr(e,n)}get root(){const e=new Hn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Iw(this._location.path)}get storage(){return this._service}get parent(){const e=oV(this._location.path);if(e===null)return null;const n=new Hn(this._location.bucket,e);return new zr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw VU(e)}}function wV(t,e,n){t._throwIfRoot("uploadBytes");const i=bV(t.storage,t._location,ww(),new $i(e,!0),n);return t.storage.makeRequestWithTokens(i,_p).then(r=>({metadata:r,ref:t}))}function TV(t){t._throwIfRoot("getDownloadURL");const e=gV(t.storage,t._location,ww());return t.storage.makeRequestWithTokens(e,_p).then(n=>{if(n===null)throw UU();return n})}function CV(t){t._throwIfRoot("deleteObject");const e=_V(t.storage,t._location);return t.storage.makeRequestWithTokens(e,_p)}function SV(t,e){const n=aV(t._location.path,e),i=new Hn(t._location.bucket,n);return new zr(t.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AV(t){return/^[A-Za-z]+:\/\//.test(t)}function kV(t,e){return new zr(t,e)}function kw(t,e){if(t instanceof vp){const n=t;if(n._bucket==null)throw FU();const i=new zr(n,n._bucket);return e!=null?kw(i,e):i}else return e!==void 0?SV(t,e):t}function RV(t,e){if(e&&AV(e)){if(t instanceof vp)return kV(t,e);throw dp("To use ref(service, url), the first argument must be a Storage instance.")}else return kw(t,e)}function Rw(t,e){const n=e==null?void 0:e[fw];return n==null?null:Hn.makeFromBucketSpec(n,t)}class vp{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=dw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CU,this._maxUploadRetryTime=SU,this._requests=new Set,r!=null?this._bucket=Hn.makeFromBucketSpec(r,this._host):this._bucket=Rw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Hn.makeFromBucketSpec(this._url,e):this._bucket=Rw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zr(this,e)}_makeRequest(e,n,i,r){if(this._deleted)return new jU(pw());{const s=YU(e,this._appId,i,r,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const Ow="@firebase/storage",Lw="0.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="storage";function jj(t,e,n){return t=Ye(t),wV(t,e,n)}function Bj(t){return t=Ye(t),TV(t)}function Hj(t){return t=Ye(t),CV(t)}function qj(t,e){return t=Ye(t),RV(t,e)}function Wj(t=so(),e){return t=Ye(t),es(t,Nw).getImmediate({identifier:e})}function OV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new vp(n,i,r,e,or)}function LV(){ki(new ri(Nw,OV,"PUBLIC").setMultipleInstances(!0)),An(Ow,Lw,""),An(Ow,Lw,"esm2017")}LV();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NV="type.googleapis.com/google.protobuf.Int64Value",MV="type.googleapis.com/google.protobuf.UInt64Value";function Mw(t,e){const n={};for(const i in t)t.hasOwnProperty(i)&&(n[i]=e(t[i]));return n}function yp(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>yp(e));if(typeof t=="function"||typeof t=="object")return Mw(t,e=>yp(e));throw new Error("Data cannot be encoded in JSON: "+t)}function du(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case NV:case MV:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>du(e)):typeof t=="function"||typeof t=="object"?Mw(t,e=>du(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Zs extends Ai{constructor(e,n,i){super(`${bp}/${e}`,n||"");this.details=i}}function PV(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function DV(t,e){let n=PV(t),i=n,r;try{const s=e&&e.error;if(s){const o=s.status;if(typeof o=="string"){if(!Pw[o])return new Zs("internal","internal");n=Pw[o],i=o}const a=s.message;typeof a=="string"&&(i=a),r=s.details,r!==void 0&&(r=du(r))}}catch{}return n==="ok"?null:new Zs(n,i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FV{constructor(e,n,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(r=>this.auth=r,()=>{}),this.messaging||n.get().then(r=>this.messaging=r,()=>{}),this.appCheck||i.get().then(r=>this.appCheck=r,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),i=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:i}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="us-central1";function xV(t){let e=null;return{promise:new Promise((n,i)=>{e=setTimeout(()=>{i(new Zs("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class UV{constructor(e,n,i,r,s=Ep,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new FV(n,i,r),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=Ep}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function VV(t,e,n){return i=>BV(t,e,i,n||{})}async function jV(t,e,n,i){n["Content-Type"]="application/json";let r;try{r=await i(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let s=null;try{s=await r.json()}catch{}return{status:r.status,json:s}}async function BV(t,e,n,i){const r=t._url(e);n=yp(n);const s={data:n},o={},a=await t.contextProvider.getContext();a.authToken&&(o.Authorization="Bearer "+a.authToken),a.messagingToken&&(o["Firebase-Instance-ID-Token"]=a.messagingToken),a.appCheckToken!==null&&(o["X-Firebase-AppCheck"]=a.appCheckToken);const l=i.timeout||7e4,c=xV(l),u=await Promise.race([jV(r,s,o,t.fetchImpl),c.promise,t.cancelAllRequests]);if(c.cancel(),!u)throw new Zs("cancelled","Firebase Functions instance was deleted.");const h=DV(u.status,u.json);if(h)throw h;if(!u.json)throw new Zs("internal","Response is not valid JSON object.");let d=u.json.data;if(typeof d=="undefined"&&(d=u.json.result),typeof d=="undefined")throw new Zs("internal","Response is missing data field.");return{data:du(d)}}const Dw="@firebase/functions",Fw="0.7.6";/**
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
 */const HV="auth-internal",qV="app-check-internal",WV="messaging-internal";function GV(t,e){const n=(i,{instanceIdentifier:r})=>{const s=i.getProvider("app").getImmediate(),o=i.getProvider(HV),a=i.getProvider(WV),l=i.getProvider(qV);return new UV(s,o,a,l,r,t)};ki(new ri(bp,n,"PUBLIC").setMultipleInstances(!0)),An(Dw,Fw,e),An(Dw,Fw,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gj(t=so(),e=Ep){return es(Ye(t),bp).getImmediate({identifier:e})}function zj(t,e,n){return VV(Ye(t),e,n)}GV(fetch.bind(self));/**
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
 */var Kr={INDETERMINATE_CLASS:"mdc-circular-progress--indeterminate",CLOSED_CLASS:"mdc-circular-progress--closed"},er={ARIA_HIDDEN:"aria-hidden",ARIA_VALUENOW:"aria-valuenow",DETERMINATE_CIRCLE_SELECTOR:".mdc-circular-progress__determinate-circle",RADIUS:"r",STROKE_DASHOFFSET:"stroke-dashoffset"};/**
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
 */var zV=function(t){bn(e,t);function e(n){return t.call(this,ct(ct({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Kr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return er},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},getDeterminateCircleAttribute:function(){return null},hasClass:function(){return!1},removeClass:function(){},removeAttribute:function(){},setAttribute:function(){},setDeterminateCircleAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.closed=this.adapter.hasClass(Kr.CLOSED_CLASS),this.determinate=!this.adapter.hasClass(Kr.INDETERMINATE_CLASS),this.progress=0,this.determinate&&this.adapter.setAttribute(er.ARIA_VALUENOW,this.progress.toString()),this.radius=Number(this.adapter.getDeterminateCircleAttribute(er.RADIUS))},e.prototype.setDeterminate=function(n){this.determinate=n,this.determinate?(this.adapter.removeClass(Kr.INDETERMINATE_CLASS),this.setProgress(this.progress)):(this.adapter.addClass(Kr.INDETERMINATE_CLASS),this.adapter.removeAttribute(er.ARIA_VALUENOW))},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(n){if(this.progress=n,this.determinate){var i=(1-this.progress)*(2*Math.PI*this.radius);this.adapter.setDeterminateCircleAttribute(er.STROKE_DASHOFFSET,""+i),this.adapter.setAttribute(er.ARIA_VALUENOW,this.progress.toString())}},e.prototype.getProgress=function(){return this.progress},e.prototype.open=function(){this.closed=!1,this.adapter.removeClass(Kr.CLOSED_CLASS),this.adapter.removeAttribute(er.ARIA_HIDDEN)},e.prototype.close=function(){this.closed=!0,this.adapter.addClass(Kr.CLOSED_CLASS),this.adapter.setAttribute(er.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.closed},e}(Wn);function xw(t,e,n){const i=t.slice();return i[24]=e[n],i}function Uw(t){let e,n,i,r,s,o,a,l,c,u,h,d,f,p;return{c(){e=pe("div"),n=pe("div"),i=Cn("svg"),r=Cn("circle"),s=Xe(),o=pe("div"),a=Cn("svg"),l=Cn("circle"),c=Xe(),u=pe("div"),h=Cn("svg"),d=Cn("circle"),f=Xe(),this.h()},l(g){e=_e(g,"DIV",{class:!0});var m=ne(e);n=_e(m,"DIV",{class:!0});var v=ne(n);i=Pn(v,"svg",{class:!0,viewBox:!0,xmlns:!0});var C=ne(i);r=Pn(C,"circle",{cx:!0,cy:!0,r:!0,"stroke-dasharray":!0,"stroke-dashoffset":!0,"stroke-width":!0}),ne(r).forEach(N),C.forEach(N),v.forEach(N),s=Qe(m),o=_e(m,"DIV",{class:!0});var w=ne(o);a=Pn(w,"svg",{class:!0,viewBox:!0,xmlns:!0});var y=ne(a);l=Pn(y,"circle",{cx:!0,cy:!0,r:!0,"stroke-dasharray":!0,"stroke-dashoffset":!0,"stroke-width":!0}),ne(l).forEach(N),y.forEach(N),w.forEach(N),c=Qe(m),u=_e(m,"DIV",{class:!0});var R=ne(u);h=Pn(R,"svg",{class:!0,viewBox:!0,xmlns:!0});var k=ne(h);d=Pn(k,"circle",{cx:!0,cy:!0,r:!0,"stroke-dasharray":!0,"stroke-dashoffset":!0,"stroke-width":!0}),ne(d).forEach(N),k.forEach(N),R.forEach(N),f=Qe(m),m.forEach(N),this.h()},h(){J(r,"cx","24"),J(r,"cy","24"),J(r,"r","18"),J(r,"stroke-dasharray","113.097"),J(r,"stroke-dashoffset","56.549"),J(r,"stroke-width","4"),J(i,"class","mdc-circular-progress__indeterminate-circle-graphic"),J(i,"viewBox","0 0 48 48"),J(i,"xmlns","http://www.w3.org/2000/svg"),J(n,"class","mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left"),J(l,"cx","24"),J(l,"cy","24"),J(l,"r","18"),J(l,"stroke-dasharray","113.097"),J(l,"stroke-dashoffset","56.549"),J(l,"stroke-width","3.2"),J(a,"class","mdc-circular-progress__indeterminate-circle-graphic"),J(a,"viewBox","0 0 48 48"),J(a,"xmlns","http://www.w3.org/2000/svg"),J(o,"class","mdc-circular-progress__gap-patch"),J(d,"cx","24"),J(d,"cy","24"),J(d,"r","18"),J(d,"stroke-dasharray","113.097"),J(d,"stroke-dashoffset","56.549"),J(d,"stroke-width","4"),J(h,"class","mdc-circular-progress__indeterminate-circle-graphic"),J(h,"viewBox","0 0 48 48"),J(h,"xmlns","http://www.w3.org/2000/svg"),J(u,"class","mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right"),J(e,"class",p=be({[t[1]]:!0,"mdc-circular-progress__spinner-layer":!0,["mdc-circular-progress__color-"+t[24]]:t[5]}))},m(g,m){re(g,e,m),ue(e,n),ue(n,i),ue(i,r),ue(e,s),ue(e,o),ue(o,a),ue(a,l),ue(e,c),ue(e,u),ue(u,h),ue(h,d),ue(e,f)},p(g,m){m&34&&p!==(p=be({[g[1]]:!0,"mdc-circular-progress__spinner-layer":!0,["mdc-circular-progress__color-"+g[24]]:g[5]}))&&J(e,"class",p)},d(g){g&&N(e)}}}function KV(t){let e,n,i,r,s,o,a,l,c,u,h,d,f,p,g=[{class:"mdc-circular-progress__determinate-circle"},{cx:"24"},{cy:"24"},{r:"18"},{"stroke-dasharray":"113.097"},{"stroke-dashoffset":"113.097"},{"stroke-width":"4"},t[9]],m={};for(let R=0;R<g.length;R+=1)m=B(m,g[R]);let v=t[5]?[1,2,3,4]:[1],C=[];for(let R=0;R<v.length;R+=1)C[R]=Uw(xw(t,v,R));let w=[{class:l=be(Ge({[t[1]]:!0,"mdc-circular-progress":!0,"mdc-circular-progress--indeterminate":t[2],"mdc-circular-progress--closed":t[3]},t[7]))},{role:"progressbar"},{"aria-valuemin":c=0},{"aria-valuemax":u=1},{"aria-valuenow":h=t[2]?void 0:t[4]},t[8],t[12]],y={};for(let R=0;R<w.length;R+=1)y=B(y,w[R]);return{c(){e=pe("div"),n=pe("div"),i=Cn("svg"),r=Cn("circle"),s=Cn("circle"),o=Xe(),a=pe("div");for(let R=0;R<C.length;R+=1)C[R].c();this.h()},l(R){e=_e(R,"DIV",{class:!0,role:!0,"aria-valuemin":!0,"aria-valuemax":!0,"aria-valuenow":!0});var k=ne(e);n=_e(k,"DIV",{class:!0});var _=ne(n);i=Pn(_,"svg",{class:!0,viewBox:!0,xmlns:!0});var I=ne(i);r=Pn(I,"circle",{class:!0,cx:!0,cy:!0,r:!0,"stroke-width":!0}),ne(r).forEach(N),s=Pn(I,"circle",{class:!0,cx:!0,cy:!0,r:!0,"stroke-dasharray":!0,"stroke-dashoffset":!0,"stroke-width":!0}),ne(s).forEach(N),I.forEach(N),_.forEach(N),o=Qe(k),a=_e(k,"DIV",{class:!0});var U=ne(a);for(let b=0;b<C.length;b+=1)C[b].l(U);U.forEach(N),k.forEach(N),this.h()},h(){J(r,"class","mdc-circular-progress__determinate-track"),J(r,"cx","24"),J(r,"cy","24"),J(r,"r","18"),J(r,"stroke-width","4"),kp(s,m),J(i,"class","mdc-circular-progress__determinate-circle-graphic"),J(i,"viewBox","0 0 48 48"),J(i,"xmlns","http://www.w3.org/2000/svg"),J(n,"class","mdc-circular-progress__determinate-container"),J(a,"class","mdc-circular-progress__indeterminate-container"),ce(e,y)},m(R,k){re(R,e,k),ue(e,n),ue(n,i),ue(i,r),ue(i,s),t[15](s),ue(e,o),ue(e,a);for(let _=0;_<C.length;_+=1)C[_].m(a,null);t[16](e),f||(p=[ae(d=pt.call(null,e,t[0])),ae(t[11].call(null,e))],f=!0)},p(R,[k]){if(kp(s,m=ke(g,[{class:"mdc-circular-progress__determinate-circle"},{cx:"24"},{cy:"24"},{r:"18"},{"stroke-dasharray":"113.097"},{"stroke-dashoffset":"113.097"},{"stroke-width":"4"},k&512&&R[9]])),k&34){v=R[5]?[1,2,3,4]:[1];let _;for(_=0;_<v.length;_+=1){const I=xw(R,v,_);C[_]?C[_].p(I,k):(C[_]=Uw(I),C[_].c(),C[_].m(a,null))}for(;_<C.length;_+=1)C[_].d(1);C.length=v.length}ce(e,y=ke(w,[k&142&&l!==(l=be(Ge({[R[1]]:!0,"mdc-circular-progress":!0,"mdc-circular-progress--indeterminate":R[2],"mdc-circular-progress--closed":R[3]},R[7])))&&{class:l},{role:"progressbar"},{"aria-valuemin":c},{"aria-valuemax":u},k&20&&h!==(h=R[2]?void 0:R[4])&&{"aria-valuenow":h},k&256&&R[8],k&4096&&R[12]])),d&&qe(d.update)&&k&1&&d.update.call(null,R[0])},i:Pt,o:Pt,d(R){R&&N(e),t[15](null),k0(C,R),t[16](null),f=!1,ze(p)}}}function XV(t,e,n){const i=["use","class","indeterminate","closed","progress","fourColor","getElement"];let r=se(e,i);const s=st(Ue());let{use:o=[]}=e,{class:a=""}=e,{indeterminate:l=!1}=e,{closed:c=!1}=e,{progress:u=0}=e,{fourColor:h=!1}=e,d,f,p={},g={},m={},v;Sn(()=>(n(14,f=new zV({addClass:w,getDeterminateCircleAttribute:_,hasClass:C,removeClass:y,removeAttribute:k,setAttribute:R,setDeterminateCircleAttribute:I})),f.init(),()=>{f.destroy()}));function C(M){return M in p?p[M]:U().classList.contains(M)}function w(M){p[M]||n(7,p[M]=!0,p)}function y(M){(!(M in p)||p[M])&&n(7,p[M]=!1,p)}function R(M,E){g[M]!==E&&n(8,g[M]=E,g)}function k(M){(!(M in g)||g[M]!=null)&&n(8,g[M]=void 0,g)}function _(M){var E;return M in m?(E=m[M])!==null&&E!==void 0?E:null:v.getAttribute(M)}function I(M,E){m[M]!==E&&n(9,m[M]=E,m)}function U(){return d}function b(M){de[M?"unshift":"push"](()=>{v=M,n(10,v)})}function L(M){de[M?"unshift":"push"](()=>{d=M,n(6,d)})}return t.$$set=M=>{e=B(B({},e),$e(M)),n(12,r=se(e,i)),"use"in M&&n(0,o=M.use),"class"in M&&n(1,a=M.class),"indeterminate"in M&&n(2,l=M.indeterminate),"closed"in M&&n(3,c=M.closed),"progress"in M&&n(4,u=M.progress),"fourColor"in M&&n(5,h=M.fourColor)},t.$$.update=()=>{t.$$.dirty&16388&&f&&f.isDeterminate()!==!l&&f.setDeterminate(!l),t.$$.dirty&16400&&f&&f.getProgress()!==u&&f.setProgress(u),t.$$.dirty&16392&&f&&(c?f.close():f.open())},[o,a,l,c,u,h,d,p,g,m,v,s,r,U,f,b,L]}class Kj extends tt{constructor(e){super();et(this,e,XV,KV,Ke,{use:0,class:1,indeterminate:2,closed:3,progress:4,fourColor:5,getElement:13})}get getElement(){return this.$$.ctx[13]}}export{Cj as $,Sn as A,B,Dp as C,E0 as D,Ej as E,Tj as F,Ne as G,Pe as H,De as I,Me as J,ZV as K,ue as L,Pt as M,aj as N,lj as O,dj as P,pj as Q,sj as R,tt as S,rj as T,$V as U,Ti as V,Aj as W,de as X,Ci as Y,Sj as Z,ae as _,ne as a,Lp as a0,it as a1,ze as a2,Ij as a3,wj as a4,M0 as a5,qe as a6,kj as a7,YV as a8,Cn as a9,w0 as aA,JV as aB,ij as aC,nj as aD,Gj as aE,zj as aF,uj as aG,Wj as aH,qj as aI,jj as aJ,Bj as aK,Hj as aL,vj as aM,Kj as aN,Pn as aa,k0 as ab,O0 as ac,R0 as ad,tj as ae,nr as af,oj as ag,cj as ah,hj as ai,_j as aj,fj as ak,yj as al,bj as am,Rj as an,Oj as ao,Lj as ap,Nj as aq,Mj as ar,Pj as as,gj as at,Dj as au,Uj as av,xj as aw,mj as ax,Fj as ay,Vj as az,J as b,_e as c,N as d,pe as e,re as f,Qr as g,eo as h,et as i,wt as j,Xe as k,Rt as l,jt as m,Qe as n,bt as o,ke as p,yt as q,rn as r,Ke as s,wi as t,W as u,Et as v,sn as w,j as x,Dt as y,ej as z};

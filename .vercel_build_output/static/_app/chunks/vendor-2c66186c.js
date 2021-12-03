var NI=Object.defineProperty;var wd=Object.getOwnPropertySymbols;var LI=Object.prototype.hasOwnProperty,OI=Object.prototype.propertyIsEnumerable;var Ad=(n,e,t)=>e in n?NI(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Qe=(n,e)=>{for(var t in e||(e={}))LI.call(e,t)&&Ad(n,t,e[t]);if(wd)for(var t of wd(e))OI.call(e,t)&&Ad(n,t,e[t]);return n};function Jt(){}function P(n,e){for(const t in e)n[t]=e[t];return n}function Rd(n){return n()}function kd(){return Object.create(null)}function Me(n){n.forEach(Rd)}function Ue(n){return typeof n=="function"}function Fe(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Uo;function gD(n,e){return Uo||(Uo=document.createElement("a")),Uo.href=e,n===Uo.href}function DI(n){return Object.keys(n).length===0}function PI(n,...e){if(n==null)return Jt;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function MI(n,e,t){n.$$.on_destroy.push(PI(e,t))}function de(n,e,t,i){if(n){const s=Nd(n,e,t,i);return n[0](s)}}function Nd(n,e,t,i){return n[1]&&i?P(t.ctx.slice(),n[1](i(e))):t.ctx}function fe(n,e,t,i){if(n[2]&&i){const s=n[2](i(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|s[a];return r}return e.dirty|s}return e.dirty}function me(n,e,t,i,s,r){if(s){const o=Nd(e,t,i,r);n.p(o,s)}}function pe(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let i=0;i<t;i++)e[i]=-1;return e}return-1}function xe(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function J(n,e){const t={};e=new Set(e);for(const i in n)!e.has(i)&&i[0]!=="$"&&(t[i]=n[i]);return t}function FI(n){const e={};for(const t in n)e[t]=!0;return e}function UI(n,e,t){return n.set(t),e}function te(n){return n&&Ue(n.destroy)?n.destroy:Jt}let xo=!1;function xI(){xo=!0}function VI(){xo=!1}function HI(n,e,t,i){for(;n<e;){const s=n+(e-n>>1);t(s)<=i?n=s+1:e=s}return n}function BI(n){if(n.hydrate_init)return;n.hydrate_init=!0;let e=n.childNodes;if(n.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const c=e[u];c.claim_order!==void 0&&l.push(c)}e=l}const t=new Int32Array(e.length+1),i=new Int32Array(e.length);t[0]=-1;let s=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,c=(s>0&&e[t[s]].claim_order<=u?s+1:HI(1,s,d=>e[t[d]].claim_order,u))-1;i[l]=t[c]+1;const h=c+1;t[h]=l,s=Math.max(h,s)}const r=[],o=[];let a=e.length-1;for(let l=t[s]+1;l!=0;l=i[l-1]){for(r.push(e[l-1]);a>=l;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);r.reverse(),o.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<o.length;l++){for(;u<r.length&&o[l].claim_order>=r[u].claim_order;)u++;const c=u<r.length?r[u]:null;n.insertBefore(o[l],c)}}function qt(n,e){if(xo){for(BI(n),(n.actual_end_child===void 0||n.actual_end_child!==null&&n.actual_end_child.parentElement!==n)&&(n.actual_end_child=n.firstChild);n.actual_end_child!==null&&n.actual_end_child.claim_order===void 0;)n.actual_end_child=n.actual_end_child.nextSibling;e!==n.actual_end_child?(e.claim_order!==void 0||e.parentNode!==n)&&n.insertBefore(e,n.actual_end_child):n.actual_end_child=e.nextSibling}else(e.parentNode!==n||e.nextSibling!==null)&&n.appendChild(e)}function Z(n,e,t){xo&&!t?qt(n,e):(e.parentNode!==n||e.nextSibling!=t)&&n.insertBefore(e,t||null)}function x(n){n.parentNode.removeChild(n)}function _D(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function Te(n){return document.createElement(n)}function qI(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function ni(n){return document.createTextNode(n)}function ut(){return ni(" ")}function pt(){return ni("")}function We(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function jI(n){return function(e){return e.preventDefault(),n.call(this,e)}}function WI(n){return function(e){return e.stopPropagation(),n.call(this,e)}}function Tn(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function ie(n,e){const t=Object.getOwnPropertyDescriptors(n.__proto__);for(const i in e)e[i]==null?n.removeAttribute(i):i==="style"?n.style.cssText=e[i]:i==="__value"?n.value=n[i]=e[i]:t[i]&&t[i].set?n[i]=e[i]:Tn(n,i,e[i])}function we(n){return Array.from(n.childNodes)}function GI(n){n.claim_info===void 0&&(n.claim_info={last_index:0,total_claimed:0})}function Ld(n,e,t,i,s=!1){GI(n);const r=(()=>{for(let o=n.claim_info.last_index;o<n.length;o++){const a=n[o];if(e(a)){const l=t(a);return l===void 0?n.splice(o,1):n[o]=l,s||(n.claim_info.last_index=o),a}}for(let o=n.claim_info.last_index-1;o>=0;o--){const a=n[o];if(e(a)){const l=t(a);return l===void 0?n.splice(o,1):n[o]=l,s?l===void 0&&n.claim_info.last_index--:n.claim_info.last_index=o,a}}return i()})();return r.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1,r}function Od(n,e,t,i){return Ld(n,s=>s.nodeName===e,s=>{const r=[];for(let o=0;o<s.attributes.length;o++){const a=s.attributes[o];t[a.name]||r.push(a.name)}r.forEach(o=>s.removeAttribute(o))},()=>i(e))}function Ae(n,e,t){return Od(n,e,t,Te)}function yD(n,e,t){return Od(n,e,t,qI)}function _s(n,e){return Ld(n,t=>t.nodeType===3,t=>{const i=""+e;if(t.data.startsWith(i)){if(t.data.length!==i.length)return t.splitText(i.length)}else t.data=i},()=>ni(e),!0)}function ct(n){return _s(n," ")}function cr(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function Dd(n,e){n.value=e==null?"":e}function vD(n,e,t,i){n.style.setProperty(e,t,i?"important":"")}function ID(n,e,t){n.classList[t?"add":"remove"](e)}function zI(n,e,t=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(n,t,!1,e),i}let Vo;function Ho(n){Vo=n}function Ce(){if(!Vo)throw new Error("Function called outside component initialization");return Vo}function Cn(n){Ce().$$.on_mount.push(n)}function ED(n){Ce().$$.after_update.push(n)}function ki(n){Ce().$$.on_destroy.push(n)}function bD(){const n=Ce();return(e,t)=>{const i=n.$$.callbacks[e];if(i){const s=zI(e,t);i.slice().forEach(r=>{r.call(n,s)})}}}function vt(n,e){Ce().$$.context.set(n,e)}function on(n){return Ce().$$.context.get(n)}function hr(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(i=>i.call(this,e))}const dr=[],ae=[],Bo=[],Ql=[],Pd=Promise.resolve();let Jl=!1;function Md(){Jl||(Jl=!0,Pd.then(Fd))}function KI(){return Md(),Pd}function Zl(n){Bo.push(n)}function ii(n){Ql.push(n)}let $l=!1;const eu=new Set;function Fd(){if(!$l){$l=!0;do{for(let n=0;n<dr.length;n+=1){const e=dr[n];Ho(e),XI(e.$$)}for(Ho(null),dr.length=0;ae.length;)ae.pop()();for(let n=0;n<Bo.length;n+=1){const e=Bo[n];eu.has(e)||(eu.add(e),e())}Bo.length=0}while(dr.length);for(;Ql.length;)Ql.pop()();Jl=!1,$l=!1,eu.clear()}}function XI(n){if(n.fragment!==null){n.update(),Me(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Zl)}}const qo=new Set;let Ni;function jt(){Ni={r:0,c:[],p:Ni}}function Wt(){Ni.r||Me(Ni.c),Ni=Ni.p}function O(n,e){n&&n.i&&(qo.delete(n),n.i(e))}function M(n,e,t,i){if(n&&n.o){if(qo.has(n))return;qo.add(n),Ni.c.push(()=>{qo.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}}const YI=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function TD(n,e){n.d(1),e.delete(n.key)}function CD(n,e){M(n,1,1,()=>{e.delete(n.key)})}function SD(n,e,t,i,s,r,o,a,l,u,c,h){let d=n.length,f=r.length,m=d;const p={};for(;m--;)p[n[m].key]=m;const g=[],E=new Map,S=new Map;for(m=f;m--;){const w=h(s,r,m),_=t(w);let T=o.get(_);T?i&&T.p(w,e):(T=u(_,w),T.c()),E.set(_,g[m]=T),_ in p&&S.set(_,Math.abs(m-p[_]))}const b=new Set,C=new Set;function V(w){O(w,1),w.m(a,c),o.set(w.key,w),c=w.first,f--}for(;d&&f;){const w=g[f-1],_=n[d-1],T=w.key,U=_.key;w===_?(c=w.first,d--,f--):E.has(U)?!o.has(T)||b.has(T)?V(w):C.has(U)?d--:S.get(T)>S.get(U)?(C.add(T),V(w)):(b.add(U),d--):(l(_,o),d--)}for(;d--;){const w=n[d];E.has(w.key)||l(w,o)}for(;f;)V(g[f-1]);return g}function Ee(n,e){const t={},i={},s={$$scope:1};let r=n.length;for(;r--;){const o=n[r],a=e[r];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)s[l]||(t[l]=a[l],s[l]=1);n[r]=a}else for(const l in o)s[l]=1}for(const o in i)o in t||(t[o]=void 0);return t}function et(n){return typeof n=="object"&&n!==null?n:{}}function si(n,e,t){const i=n.$$.props[e];i!==void 0&&(n.$$.bound[i]=t,t(n.$$.ctx[i]))}function lt(n){n&&n.c()}function wt(n,e){n&&n.l(e)}function tt(n,e,t,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=n.$$;s&&s.m(e,t),i||Zl(()=>{const l=r.map(Rd).filter(Ue);o?o.push(...l):Me(l),n.$$.on_mount=[]}),a.forEach(Zl)}function nt(n,e){const t=n.$$;t.fragment!==null&&(Me(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function QI(n,e){n.$$.dirty[0]===-1&&(dr.push(n),Md(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ve(n,e,t,i,s,r,o,a=[-1]){const l=Vo;Ho(n);const u=n.$$={fragment:null,ctx:null,props:r,update:Jt,not_equal:s,bound:kd(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:kd(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(u.root);let c=!1;if(u.ctx=t?t(n,e.props||{},(h,d,...f)=>{const m=f.length?f[0]:d;return u.ctx&&s(u.ctx[h],u.ctx[h]=m)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](m),c&&QI(n,h)),d}):[],u.update(),c=!0,Me(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){xI();const h=we(e.target);u.fragment&&u.fragment.l(h),h.forEach(x)}else u.fragment&&u.fragment.c();e.intro&&O(n.$$.fragment),tt(n,e.target,e.anchor,e.customElement),VI(),Fd()}Ho(l)}class He{$destroy(){nt(this,1),this.$destroy=Jt}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!DI(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ys=[];function JI(n,e=Jt){let t;const i=new Set;function s(a){if(Fe(n,a)&&(n=a,t)){const l=!ys.length;for(const u of i)u[1](),ys.push(u,n);if(l){for(let u=0;u<ys.length;u+=2)ys[u][0](ys[u+1]);ys.length=0}}}function r(a){s(a(n))}function o(a,l=Jt){const u=[a,l];return i.add(u),i.size===1&&(t=e(s)||Jt),a(n),()=>{i.delete(u),i.size===0&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=function(n,e){if(!n)throw vs(e)},vs=function(n){return new Error("Firebase Database ("+Ud.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)==55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)==56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ZI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},tu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,c=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),i.push(t[c],t[h],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(xd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ZI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||u==null||h==null)throw Error();const d=r<<2|a>>4;if(i.push(d),u!==64){const f=a<<4&240|u>>2;if(i.push(f),h!==64){const m=u<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},$I=function(n){const e=xd(n);return tu.encodeByteArray(e,!0)},nu=function(n){try{return tu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(n){return Vd(void 0,n)}function Vd(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!tE(t)||(n[t]=Vd(n[t],e[t]));return n}function tE(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jo(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function Hd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function iu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nE(){return At().indexOf("Electron/")>=0}function Bd(){const n=At();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function iE(){return At().indexOf("MSAppHost/")>=0}function qd(){return Ud.NODE_ADMIN===!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="FirebaseError";class Li extends Error{constructor(e,t,i){super(t);this.code=e,this.customData=i,this.name=sE,Object.setPrototypeOf(this,Li.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fr.prototype.create)}}class fr{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?rE(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Li(s,a,i)}}function rE(n,e){return n.replace(oE,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const oE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(n){return JSON.parse(n)}function Rt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=mr(nu(r[0])||""),t=mr(nu(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},aE=function(n){const e=jd(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},lE=function(n){const e=jd(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Is(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Wo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Go(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function zo(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Wd(r)&&Wd(o)){if(!zo(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Wd(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^r&(o^a),c=1518500249):(u=r^o^a,c=1859775393):h<60?(u=r&o|a&(r|o),c=2400959708):(u=r^o^a,c=3395469782);const d=(s<<5|s>>>27)+u+l+c+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function cE(n,e){const t=new hE(n,e);return t.subscribe.bind(t)}class hE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");dE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=su),s.error===void 0&&(s.error=su),s.complete===void 0&&(s.complete=su);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function su(){}function Es(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,F(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ko=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Ge(n){return n&&n._delegate?n._delegate:n}class oi{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Di="[DEFAULT]";/**
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
 */class mE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new ri;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gE(e))try{this.getOrInitializeService({instanceIdentifier:Di})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Di){return this.instances.has(e)}getOptions(e=Di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:pE(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Di){return this.component?this.component.multipleInstances?e:Di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pE(n){return n===Di?void 0:n}function gE(n){return n.instantiationMode==="EAGER"}/**
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
 */class _E{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Se||(Se={}));const yE={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},vE=Se.INFO,IE={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},EE=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=IE[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xo{constructor(e){this.name=e,this._logLevel=vE,this._logHandler=EE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}/**
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
 */class bE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(TE(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function TE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ru="@firebase/app",Gd="0.7.9";/**
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
 */const ou=new Xo("@firebase/app"),CE="@firebase/app-compat",SE="@firebase/analytics-compat",wE="@firebase/analytics",AE="@firebase/app-check-compat",RE="@firebase/app-check",kE="@firebase/auth",NE="@firebase/auth-compat",LE="@firebase/database",OE="@firebase/database-compat",DE="@firebase/functions",PE="@firebase/functions-compat",ME="@firebase/installations",FE="@firebase/installations-compat",UE="@firebase/messaging",xE="@firebase/messaging-compat",VE="@firebase/performance",HE="@firebase/performance-compat",BE="@firebase/remote-config",qE="@firebase/remote-config-compat",jE="@firebase/storage",WE="@firebase/storage-compat",GE="@firebase/firestore",zE="@firebase/firestore-compat",KE="firebase",XE="9.5.0";/**
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
 */const zd="[DEFAULT]",YE={[ru]:"fire-core",[CE]:"fire-core-compat",[wE]:"fire-analytics",[SE]:"fire-analytics-compat",[RE]:"fire-app-check",[AE]:"fire-app-check-compat",[kE]:"fire-auth",[NE]:"fire-auth-compat",[LE]:"fire-rtdb",[OE]:"fire-rtdb-compat",[DE]:"fire-fn",[PE]:"fire-fn-compat",[ME]:"fire-iid",[FE]:"fire-iid-compat",[UE]:"fire-fcm",[xE]:"fire-fcm-compat",[VE]:"fire-perf",[HE]:"fire-perf-compat",[BE]:"fire-rc",[qE]:"fire-rc-compat",[jE]:"fire-gcs",[WE]:"fire-gcs-compat",[GE]:"fire-fst",[zE]:"fire-fst-compat","fire-js":"fire-js",[KE]:"fire-js-all"};/**
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
 */const Yo=new Map,au=new Map;function QE(n,e){try{n.container.addComponent(e)}catch(t){ou.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Pi(n){const e=n.name;if(au.has(e))return ou.debug(`There were multiple attempts to register component ${e}.`),!1;au.set(e,n);for(const t of Yo.values())QE(t,n);return!0}function pr(n,e){return n.container.getProvider(e)}/**
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
 */const JE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Qo=new fr("app","Firebase",JE);/**
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
 */class ZE{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qo.create("app-deleted",{appName:this._name})}}/**
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
 */const Mi=XE;function wD(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:zd,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw Qo.create("bad-app-name",{appName:String(i)});const s=Yo.get(i);if(s){if(zo(n,s.options)&&zo(t,s.config))return s;throw Qo.create("duplicate-app",{appName:i})}const r=new _E(i);for(const a of au.values())r.addComponent(a);const o=new ZE(n,t,r);return Yo.set(i,o),o}function Jo(n=zd){const e=Yo.get(n);if(!e)throw Qo.create("no-app",{appName:n});return e}function Sn(n,e,t){var i;let s=(i=YE[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ou.warn(a.join(" "));return}Pi(new oi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function $E(n){Pi(new oi("platform-logger",e=>new bE(e),"PRIVATE")),Sn(ru,Gd,n),Sn(ru,Gd,"esm2017"),Sn("fire-js","")}$E("");var eb="firebase",tb="9.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(eb,tb,"app");/*! *****************************************************************************
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
***************************************************************************** */var lu=function(n,e){return lu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])},lu(n,e)};function An(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");lu(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var it=function(){return it=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++){t=arguments[i];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},it.apply(this,arguments)};function uu(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function xn(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Kd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nb=Kd,Xd=new fr("auth","Firebase",Kd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=new Xo("@firebase/auth");function Zo(n,...e){Yd.logLevel<=Se.ERROR&&Yd.error(`Auth (${Mi}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(n,...e){throw cu(n,...e)}function pn(n,...e){return cu(n,...e)}function ib(n,e,t){const i=Object.assign(Object.assign({},nb()),{[e]:t});return new fr("auth","Firebase",i).create(e,{appName:n.name})}function cu(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Xd.create(n,...e)}function z(n,e,...t){if(!n)throw cu(e,...t)}function Hn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Zo(e),new Error(e)}function Bn(n,e){n||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=new Map;function qn(n){Bn(n instanceof Function,"Expected a class definition");let e=Qd.get(n);return e?(Bn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Qd.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(n,e){const t=pr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(zo(r,e!=null?e:{}))return s;Vn(s,"already-initialized")}return t.initialize({options:e})}function rb(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(qn);(e==null?void 0:e.errorMap)&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Jd(){return Zd()==="http:"||Zd()==="https:"}function Zd(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jd()||Hd()||"connection"in navigator)?navigator.onLine:!0}function ab(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Bn(t>e,"Short delay should be less than long delay!"),this.isMobile=jo()||iu()}get(){return ob()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(n,e){Bn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=new gr(3e4,6e4);function Fi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ai(n,e,t,i,s={}){return $d(n,s,()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Oi(Object.assign({key:n.config.apiKey},o)).slice(1),l=new(fu.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",n._getSdkClientVersion()),n.languageCode&&l.set("X-Firebase-Locale",n.languageCode),fu.fetch()(ef(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function $d(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},lb),e);try{const s=new cb(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ea(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ea(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ea(n,"email-already-in-use",o);const c=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ib(n,c,u);Vn(n,c)}}catch(s){if(s instanceof Li)throw s;Vn(n,"network-request-failed")}}async function $o(n,e,t,i,s={}){const r=await ai(n,e,t,i,s);return"mfaPendingCredential"in r&&Vn(n,"multi-factor-auth-required",{_serverResponse:r}),r}function ef(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?du(n.config,s):`${n.config.apiScheme}://${s}`}class cb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(pn(this.auth,"timeout")),ub.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ea(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=pn(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hb(n,e){return ai(n,"POST","/v1/accounts:delete",e)}async function db(n,e){return ai(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fb(n,e=!1){const t=Ge(n),i=await t.getIdToken(e),s=pu(i);z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:_r(mu(s.auth_time)),issuedAtTime:_r(mu(s.iat)),expirationTime:_r(mu(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function mu(n){return Number(n)*1e3}function pu(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Zo("JWT malformed, contained fewer than 3 sections"),null;try{const s=nu(t);return s?JSON.parse(s):(Zo("Failed to decode base64 JWT payload"),null)}catch(s){return Zo("Caught error parsing JWT payload as JSON",s),null}}function mb(n){const e=pu(n);return z(e,"internal-error"),z(typeof e.exp!="undefined","internal-error"),z(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Li&&pb(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function pb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_r(this.lastLoginAt),this.creationTime=_r(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ta(n){var e;const t=n.auth,i=await n.getIdToken(),s=await yr(n,db(t,{idToken:i}));z(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?vb(r.providerUserInfo):[],a=yb(n.providerData,o),l=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a==null?void 0:a.length),c=l?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new tf(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function _b(n){const e=Ge(n);await ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yb(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function vb(n){return n.map(e=>{var{providerId:t}=e,i=uu(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ib(n,e){const t=await $d(n,{},()=>{const i=Oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=ef(n,s,"/v1/token",`key=${r}`);return fu.fetch()(o,{method:"POST",headers:{"X-Client-Version":n._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken!="undefined","internal-error"),z(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):mb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Ib(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new vr;return i&&(z(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(z(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vr,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n,e){z(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class Ui{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=uu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new gb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new tf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await yr(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return fb(this,e)}reload(){return _b(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ui(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ta(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await yr(this,hb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,u,c;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,p=(a=t.tenantId)!==null&&a!==void 0?a:void 0,g=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,E=(u=t.createdAt)!==null&&u!==void 0?u:void 0,S=(c=t.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:b,emailVerified:C,isAnonymous:V,providerData:w,stsTokenManager:_}=t;z(b&&_,e,"internal-error");const T=vr.fromJSON(this.name,_);z(typeof b=="string",e,"internal-error"),li(h,e.name),li(d,e.name),z(typeof C=="boolean",e,"internal-error"),z(typeof V=="boolean",e,"internal-error"),li(f,e.name),li(m,e.name),li(p,e.name),li(g,e.name),li(E,e.name),li(S,e.name);const U=new Ui({uid:b,auth:e,email:d,emailVerified:C,displayName:h,isAnonymous:V,photoURL:m,phoneNumber:f,tenantId:p,stsTokenManager:T,createdAt:E,lastLoginAt:S});return w&&Array.isArray(w)&&(U.providerData=w.map(I=>Object.assign({},I))),g&&(U._redirectEventId=g),U}static async _fromIdTokenResponse(e,t,i=!1){const s=new vr;s.updateFromServerResponse(t);const r=new Ui({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ta(r),r}}/**
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
 */class nf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}nf.type="NONE";const sf=nf;/**
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
 */function na(n,e,t){return`firebase:${n}:${e}:${t}`}class bs{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=na(this.userKey,s.apiKey,r),this.fullPersistenceKey=na("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ui._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new bs(qn(sf),e,i);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||qn(sf);const o=na(i,e.config.apiKey,e.name);let a=null;for(const u of t)try{const c=await u._get(o);if(c){const h=Ui._fromJSON(e,c);u!==r&&(a=h),r=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new bs(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new bs(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(of(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cf(e))return"Blackberry";if(hf(e))return"Webos";if(gu(e))return"Safari";if((e.includes("chrome/")||af(e))&&!e.includes("edge/"))return"Chrome";if(uf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function of(n=At()){return/firefox\//i.test(n)}function gu(n=At()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function af(n=At()){return/crios\//i.test(n)}function lf(n=At()){return/iemobile/i.test(n)}function uf(n=At()){return/android/i.test(n)}function cf(n=At()){return/blackberry/i.test(n)}function hf(n=At()){return/webos/i.test(n)}function ia(n=At()){return/iphone|ipad|ipod/i.test(n)}function Eb(n=At()){var e;return ia(n)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function bb(){return Bd()&&document.documentMode===10}function df(n=At()){return ia(n)||uf(n)||hf(n)||cf(n)||/windows phone/i.test(n)||lf(n)}function Tb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(n,e=[]){let t;switch(n){case"Browser":t=rf(At());break;case"Worker":t=`${rf(At())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mi}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mf(this),this.idTokenSubscription=new mf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=qn(t)),this._initializationPromise=this.queue(async()=>{var i,s;this._deleted||(this.persistenceManager=await bs.create(this,e),!this._deleted&&(((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var t;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,r=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===r)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ta(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ab()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ge(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fr("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&qn(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[qn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ff(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Ir(n){return Ge(n)}class mf{constructor(e){this.auth=e,this.observer=null,this.addObserver=cE(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,t){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(n,e){return $o(n,"POST","/v1/accounts:signInWithIdp",Fi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb="http://localhost";class xi extends _u{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const t=new xi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Vn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=uu(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new xi(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ts(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ts(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ts(e,t)}buildRequest(){const e={requestUri:Sb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Oi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wb(n,e){return ai(n,"POST","/v1/accounts:sendVerificationCode",Fi(n,e))}async function Ab(n,e){return $o(n,"POST","/v1/accounts:signInWithPhoneNumber",Fi(n,e))}async function Rb(n,e){const t=await $o(n,"POST","/v1/accounts:signInWithPhoneNumber",Fi(n,e));if(t.temporaryProof)throw ea(n,"account-exists-with-different-credential",t);return t}const kb={USER_NOT_FOUND:"user-not-found"};async function Nb(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return $o(n,"POST","/v1/accounts:signInWithPhoneNumber",Fi(n,t),kb)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends _u{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,t){return new Er({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Er({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ab(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Rb(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Nb(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:s,temporaryProof:r}=e;return!i&&!t&&!s&&!r?null:new Er({verificationId:t,verificationCode:i,phoneNumber:s,temporaryProof:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class br extends pf{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends br{constructor(){super("facebook.com")}static credential(e){return xi._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.FACEBOOK_SIGN_IN_METHOD="facebook.com";ui.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends br{constructor(){super("google.com");this.addScope("profile")}static credential(e,t){return xi._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ci.credential(t,i)}catch{return null}}}ci.GOOGLE_SIGN_IN_METHOD="google.com";ci.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends br{constructor(){super("github.com")}static credential(e){return xi._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.GITHUB_SIGN_IN_METHOD="github.com";hi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends br{constructor(){super("twitter.com")}static credential(e,t){return xi._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return di.credential(t,i)}catch{return null}}}di.TWITTER_SIGN_IN_METHOD="twitter.com";di.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Ui._fromIdTokenResponse(e,i,s),o=gf(i);return new Cs({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=gf(i);return new Cs({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function gf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa extends Li{constructor(e,t,i,s){var r;super(t.code,t.message);this.operationType=i,this.user=s,Object.setPrototypeOf(this,sa.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new sa(e,t,i,s)}}function _f(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?sa._fromErrorAndOperation(n,r,e,i):r})}async function Lb(n,e,t=!1){const i=await yr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Cs._forOperation(n,"link",i)}/**
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
 */async function Ob(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await yr(n,_f(i,s,e,n),t);z(r.idToken,i,"internal-error");const o=pu(r.idToken);z(o,i,"internal-error");const{sub:a}=o;return z(n.uid===a,i,"user-mismatch"),Cs._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Vn(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yf(n,e,t=!1){const i="signIn",s=await _f(n,i,e),r=await Cs._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function Db(n,e){return yf(Ir(n),e)}function AD(n,e,t,i){return Ge(n).onAuthStateChanged(e,t,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(n,e){return ai(n,"POST","/v2/accounts/mfaEnrollment:start",Fi(n,e))}const ra="__sak";/**
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
 */class vf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ra,"1"),this.storage.removeItem(ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(){const n=At();return gu(n)||ia(n)}const Fb=1e3,Ub=10;class If extends vf{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mb()&&Tb(),this.fallbackToPolling=df(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);bb()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ub):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}If.type="LOCAL";const xb=If;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef extends vf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ef.type="SESSION";const bf=Ef;/**
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
 */function Vb(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class oa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new oa(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,r)),l=await Vb(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Hb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=yu("",20);s.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(c),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return window}function Bb(n){It().location.href=n}/**
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
 */function vu(){return typeof It().WorkerGlobalScope!="undefined"&&typeof It().importScripts=="function"}async function qb(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Wb(){return vu()?self:null}/**
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
 */const Tf="firebaseLocalStorageDb",Gb=1,aa="firebaseLocalStorage",Cf="fbase_key";class Tr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function la(n,e){return n.transaction([aa],e?"readwrite":"readonly").objectStore(aa)}function zb(){const n=indexedDB.deleteDatabase(Tf);return new Tr(n).toPromise()}function Iu(){const n=indexedDB.open(Tf,Gb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(aa,{keyPath:Cf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(aa)?e(i):(i.close(),await zb(),e(await Iu()))})})}async function Sf(n,e,t){const i=la(n,!0).put({[Cf]:e,value:t});return new Tr(i).toPromise()}async function Kb(n,e){const t=la(n,!1).get(e),i=await new Tr(t).toPromise();return i===void 0?null:i.value}function wf(n,e){const t=la(n,!0).delete(e);return new Tr(t).toPromise()}const Xb=800,Yb=3;class Af{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Iu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Yb)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oa._getInstance(Wb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await qb(),!this.activeServiceWorker)return;this.sender=new Hb(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Iu();return await Sf(e,ra,"1"),await wf(e,ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Sf(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Kb(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=la(s,!1).getAll();return new Tr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Af.type="LOCAL";const Qb=Af;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(n,e){return ai(n,"POST","/v2/accounts/mfaSignIn:start",Fi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(n){return(await ai(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Rf(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=pn("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",$b().appendChild(i)})}function kf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=500,tT=6e4,ua=1e12;class nT{constructor(e){this.auth=e,this.counter=ua,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new iT(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;const i=e||ua;(t=this._widgets.get(i))===null||t===void 0||t.delete(),this._widgets.delete(i)}getResponse(e){var t;const i=e||ua;return((t=this._widgets.get(i))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const i=e||ua;return(t=this._widgets.get(i))===null||t===void 0||t.execute(),""}}class iT{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;z(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=sT(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},tT)},eT))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function sT(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=kf("rcb"),rT=new gr(3e4,6e4),oT="https://www.google.com/recaptcha/api.js?";class aT{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!It().grecaptcha}load(e,t=""){return z(lT(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(It().grecaptcha):new Promise((i,s)=>{const r=It().setTimeout(()=>{s(pn(e,"network-request-failed"))},rT.get());It()[Eu]=()=>{It().clearTimeout(r),delete It()[Eu];const a=It().grecaptcha;if(!a){s(pn(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const h=l(u,c);return this.counter++,h},this.hostLanguage=t,i(a)};const o=`${oT}?${Oi({onload:Eu,render:"explicit",hl:t})}`;Rf(o).catch(()=>{clearTimeout(r),s(pn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!It().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function lT(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class uT{async load(e){return new nT(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="recaptcha",cT={theme:"light",type:"image"};class RD{constructor(e,t=Object.assign({},cT),i){this.parameters=t,this.type=Nf,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ir(i),this.isInvisible=this.parameters.size==="invisible",z(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const s=typeof e=="string"?document.getElementById(e):e;z(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new uT:new aT,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(s=>{const r=o=>{!o||(this.tokenChangeListeners.delete(r),s(o))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){z(!this.parameters.sitekey,this.auth,"argument-error"),z(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),z(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=It()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){z(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){z(Jd()&&!vu(),this.auth,"internal-error"),await hT(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Zb(this.auth);z(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return z(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function hT(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Er._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function kD(n,e,t){const i=Ir(n),s=await fT(i,e,Ge(t));return new dT(s,r=>Db(i,r))}async function fT(n,e,t){var i;const s=await t.verify();try{z(typeof s=="string",n,"argument-error"),z(t.type===Nf,n,"argument-error");let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const o=r.session;if("phoneNumber"in r)return z(o.type==="enroll",n,"internal-error"),(await Pb(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{z(o.type==="signin",n,"internal-error");const a=((i=r.multiFactorHint)===null||i===void 0?void 0:i.uid)||r.multiFactorUid;return z(a,n,"missing-multi-factor-info"),(await Jb(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await wb(n,{phoneNumber:r.phoneNumber,recaptchaToken:s});return o}}finally{t._reset()}}/**
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
 */function mT(n,e){return e?qn(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class bu extends _u{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Ts(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ts(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function pT(n){return yf(n.auth,new bu(n),n.bypassAuthState)}function gT(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),Ob(t,new bu(n),n.bypassAuthState)}async function _T(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),Lb(t,new bu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pT;case"linkViaPopup":case"linkViaRedirect":return _T;case"reauthViaPopup":case"reauthViaRedirect":return gT;default:Vn(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=new gr(2e3,1e4);class Ss extends Lf{constructor(e,t,i,s,r){super(e,t,s,r);this.provider=i,this.authWindow=null,this.pollId=null,Ss.currentPopupAction&&Ss.currentPopupAction.cancel(),Ss.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=yu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ss.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,yT.get())};e()}}Ss.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="pendingRedirect",Tu=new Map;class IT extends Lf{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i);this.eventId=null}async execute(){let e=Tu.get(this.auth._key());if(!e){try{const i=await ET(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Tu.set(this.auth._key(),e)}return this.bypassAuthState||Tu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ET(n,e){const t=TT(e),i=bT(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function bT(n){return qn(n._redirectPersistence)}function TT(n){return na(vT,n.config.apiKey,n.name)}async function CT(n,e,t=!1){const i=Ir(n),s=mT(i,e),o=await new IT(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=10*60*1e3;class wT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Df(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(pn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ST&&this.cachedEventUids.clear(),this.cachedEventUids.has(Of(e))}saveEventToCache(e){this.cachedEventUids.add(Of(e)),this.lastProcessedEventTime=Date.now()}}function Of(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Df({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Df(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(n,e={}){return ai(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NT=/^https?/;async function LT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await RT(n);for(const t of e)try{if(OT(t))return}catch{}Vn(n,"unauthorized-domain")}function OT(n){const e=hu(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!NT.test(t))return!1;if(kT.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const DT=new gr(3e4,6e4);function Pf(){const n=It().___jsl;if(n==null?void 0:n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function PT(n){return new Promise((e,t)=>{var i,s,r;function o(){Pf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pf(),t(pn(n,"network-request-failed"))},timeout:DT.get()})}if((s=(i=It().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((r=It().gapi)===null||r===void 0?void 0:r.load)o();else{const a=kf("iframefcb");return It()[a]=()=>{gapi.load?o():t(pn(n,"network-request-failed"))},Rf(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw ca=null,e})}let ca=null;function MT(n){return ca=ca||PT(n),ca}/**
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
 */const FT=new gr(5e3,15e3),UT="__/auth/iframe",xT="emulator/auth/iframe",VT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BT(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?du(e,xT):`https://${n.config.authDomain}/${UT}`,i={apiKey:e.apiKey,appName:n.name,v:Mi},s=HT.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Oi(i).slice(1)}`}async function qT(n){const e=await MT(n),t=It().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:BT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VT,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=pn(n,"network-request-failed"),a=It().setTimeout(()=>{r(o)},FT.get());function l(){It().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const jT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WT=500,GT=600,zT="_blank",KT="http://localhost";class Mf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XT(n,e,t,i=WT,s=GT){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},jT),{width:i.toString(),height:s.toString(),top:r,left:o}),u=At().toLowerCase();t&&(a=af(u)?zT:t),of(u)&&(e=e||KT,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(Eb(u)&&a!=="_self")return YT(e||"",a),new Mf(null);const h=window.open(e||"",a,c);z(h,n,"popup-blocked");try{h.focus()}catch{}return new Mf(h)}function YT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const QT="__/auth/handler",JT="emulator/auth/handler";function Ff(n,e,t,i,s,r){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Mi,eventId:s};if(e instanceof pf){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Wo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(r||{}))o[l]=u}if(e instanceof br){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${ZT(n)}?${Oi(a).slice(1)}`}function ZT({config:n}){return n.emulator?du(n,JT):`https://${n.authDomain}/${QT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="webStorageSupport";class $T{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bf,this._completeRedirectFn=CT}async _openPopup(e,t,i,s){var r;Bn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Ff(e,t,i,hu(),s);return XT(e,o,yu())}async _openRedirect(e,t,i,s){return await this._originValidation(e),Bb(Ff(e,t,i,hu(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Bn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i}async initAndGetManager(e){const t=await qT(e),i=new wT(e);return t.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Cu,{type:Cu},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Cu];o!==void 0&&t(!!o),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=LT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return df()||gu()||ia()}}const eC=$T;var Uf="@firebase/auth",xf="0.19.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function iC(n){Pi(new oi("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:r}=i.options;return(o=>{z(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),z(!(r==null?void 0:r.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:r,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ff(n)},l=new Cb(o,a);return rb(l,t),l})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Pi(new oi("auth-internal",e=>{const t=Ir(e.getProvider("auth").getImmediate());return(i=>new tC(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(Uf,xf,nC(n)),Sn(Uf,xf,"esm2017")}/**
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
 */function ND(n=Jo()){const e=pr(n,"auth");return e.isInitialized()?e.getImmediate():sb(n,{popupRedirectResolver:eC,persistence:[Qb,xb,bf]})}iC("Browser");var sC=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},W,Su=Su||{},se=sC||self;function ha(){}function wu(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Cr(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function rC(n){return Object.prototype.hasOwnProperty.call(n,Au)&&n[Au]||(n[Au]=++oC)}var Au="closure_uid_"+(1e9*Math.random()>>>0),oC=0;function aC(n,e,t){return n.call.apply(n.bind,arguments)}function lC(n,e,t){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function Mt(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Mt=aC:Mt=lC,Mt.apply(null,arguments)}function da(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var i=t.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function Ft(n,e){function t(){}t.prototype=e.prototype,n.Z=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Vb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function fi(){this.s=this.s,this.o=this.o}var uC=0,cC={};fi.prototype.s=!1;fi.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),uC!=0)){var n=rC(this);delete cC[n]}};fi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Vf=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1},Hf=Array.prototype.forEach?function(n,e,t){Array.prototype.forEach.call(n,e,t)}:function(n,e,t){const i=n.length,s=typeof n=="string"?n.split(""):n;for(let r=0;r<i;r++)r in s&&e.call(t,s[r],r,n)};function hC(n){e:{var e=n0;const t=n.length,i=typeof n=="string"?n.split(""):n;for(let s=0;s<t;s++)if(s in i&&e.call(void 0,i[s],s,n)){e=s;break e}e=-1}return 0>e?null:typeof n=="string"?n.charAt(e):n[e]}function Bf(n){return Array.prototype.concat.apply([],arguments)}function Ru(n){const e=n.length;if(0<e){const t=Array(e);for(let i=0;i<e;i++)t[i]=n[i];return t}return[]}function fa(n){return/^[\s\xa0]*$/.test(n)}var qf=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Zt(n,e){return n.indexOf(e)!=-1}function ku(n,e){return n<e?-1:n>e?1:0}var $t;e:{var jf=se.navigator;if(jf){var Wf=jf.userAgent;if(Wf){$t=Wf;break e}}$t=""}function Nu(n,e,t){for(const i in n)e.call(t,n[i],i,n)}function Gf(n){const e={};for(const t in n)e[t]=n[t];return e}var zf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Kf(n,e){let t,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(t in i)n[t]=i[t];for(let r=0;r<zf.length;r++)t=zf[r],Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}}function Lu(n){return Lu[" "](n),n}Lu[" "]=ha;function dC(n){var e=pC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var fC=Zt($t,"Opera"),ws=Zt($t,"Trident")||Zt($t,"MSIE"),Xf=Zt($t,"Edge"),Ou=Xf||ws,Yf=Zt($t,"Gecko")&&!(Zt($t.toLowerCase(),"webkit")&&!Zt($t,"Edge"))&&!(Zt($t,"Trident")||Zt($t,"MSIE"))&&!Zt($t,"Edge"),mC=Zt($t.toLowerCase(),"webkit")&&!Zt($t,"Edge");function Qf(){var n=se.document;return n?n.documentMode:void 0}var ma;e:{var Du="",Pu=function(){var n=$t;if(Yf)return/rv:([^\);]+)(\)|;)/.exec(n);if(Xf)return/Edge\/([\d\.]+)/.exec(n);if(ws)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(mC)return/WebKit\/(\S+)/.exec(n);if(fC)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Pu&&(Du=Pu?Pu[1]:""),ws){var Mu=Qf();if(Mu!=null&&Mu>parseFloat(Du)){ma=String(Mu);break e}}ma=Du}var pC={};function gC(){return dC(function(){let n=0;const e=qf(String(ma)).split("."),t=qf("9").split("."),i=Math.max(e.length,t.length);for(let o=0;n==0&&o<i;o++){var s=e[o]||"",r=t[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;n=ku(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||ku(s[2].length==0,r[2].length==0)||ku(s[2],r[2]),s=s[3],r=r[3]}while(n==0)}return 0<=n})}var Fu;if(se.document&&ws){var Jf=Qf();Fu=Jf||parseInt(ma,10)||void 0}else Fu=void 0;var _C=Fu,yC=function(){if(!se.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{se.addEventListener("test",ha,e),se.removeEventListener("test",ha,e)}catch{}return n}();function Gt(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Gt.prototype.h=function(){this.defaultPrevented=!0};function Sr(n,e){if(Gt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Yf){e:{try{Lu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:vC[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Sr.Z.h.call(this)}}Ft(Sr,Gt);var vC={2:"touch",3:"pen",4:"mouse"};Sr.prototype.h=function(){Sr.Z.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var wr="closure_listenable_"+(1e6*Math.random()|0),IC=0;function EC(n,e,t,i,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!i,this.ia=s,this.key=++IC,this.ca=this.fa=!1}function pa(n){n.ca=!0,n.listener=null,n.proxy=null,n.src=null,n.ia=null}function ga(n){this.src=n,this.g={},this.h=0}ga.prototype.add=function(n,e,t,i,s){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=xu(n,e,i,s);return-1<o?(e=n[o],t||(e.fa=!1)):(e=new EC(e,this.src,r,!!i,s),e.fa=t,n.push(e)),e};function Uu(n,e){var t=e.type;if(t in n.g){var i=n.g[t],s=Vf(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(pa(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function xu(n,e,t,i){for(var s=0;s<n.length;++s){var r=n[s];if(!r.ca&&r.listener==e&&r.capture==!!t&&r.ia==i)return s}return-1}var Vu="closure_lm_"+(1e6*Math.random()|0),Hu={};function Zf(n,e,t,i,s){if(i&&i.once)return em(n,e,t,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Zf(n,e[r],t,i,s);return null}return t=Wu(t),n&&n[wr]?n.N(e,t,Cr(i)?!!i.capture:!!i,s):$f(n,e,t,!1,i,s)}function $f(n,e,t,i,s,r){if(!e)throw Error("Invalid event type");var o=Cr(s)?!!s.capture:!!s,a=qu(n);if(a||(n[Vu]=a=new ga(n)),t=a.add(e,t,i,o,r),t.proxy)return t;if(i=bC(),t.proxy=i,i.src=n,i.listener=t,n.addEventListener)yC||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),i,s);else if(n.attachEvent)n.attachEvent(nm(e.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return t}function bC(){function n(t){return e.call(n.src,n.listener,t)}var e=TC;return n}function em(n,e,t,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)em(n,e[r],t,i,s);return null}return t=Wu(t),n&&n[wr]?n.O(e,t,Cr(i)?!!i.capture:!!i,s):$f(n,e,t,!0,i,s)}function tm(n,e,t,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)tm(n,e[r],t,i,s);else i=Cr(i)?!!i.capture:!!i,t=Wu(t),n&&n[wr]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=xu(r,t,i,s),-1<t&&(pa(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=qu(n))&&(e=n.g[e.toString()],n=-1,e&&(n=xu(e,t,i,s)),(t=-1<n?e[n]:null)&&Bu(t))}function Bu(n){if(typeof n!="number"&&n&&!n.ca){var e=n.src;if(e&&e[wr])Uu(e.i,n);else{var t=n.type,i=n.proxy;e.removeEventListener?e.removeEventListener(t,i,n.capture):e.detachEvent?e.detachEvent(nm(t),i):e.addListener&&e.removeListener&&e.removeListener(i),(t=qu(e))?(Uu(t,n),t.h==0&&(t.src=null,e[Vu]=null)):pa(n)}}}function nm(n){return n in Hu?Hu[n]:Hu[n]="on"+n}function TC(n,e){if(n.ca)n=!0;else{e=new Sr(e,this);var t=n.listener,i=n.ia||n.src;n.fa&&Bu(n),n=t.call(i,e)}return n}function qu(n){return n=n[Vu],n instanceof ga?n:null}var ju="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wu(n){return typeof n=="function"?n:(n[ju]||(n[ju]=function(e){return n.handleEvent(e)}),n[ju])}function kt(){fi.call(this),this.i=new ga(this),this.P=this,this.I=null}Ft(kt,fi);kt.prototype[wr]=!0;kt.prototype.removeEventListener=function(n,e,t,i){tm(this,n,e,t,i)};function Ut(n,e){var t,i=n.I;if(i)for(t=[];i;i=i.I)t.push(i);if(n=n.P,i=e.type||e,typeof e=="string")e=new Gt(e,n);else if(e instanceof Gt)e.target=e.target||n;else{var s=e;e=new Gt(i,n),Kf(e,s)}if(s=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];s=_a(o,i,!0,e)&&s}if(o=e.g=n,s=_a(o,i,!0,e)&&s,s=_a(o,i,!1,e)&&s,t)for(r=0;r<t.length;r++)o=e.g=t[r],s=_a(o,i,!1,e)&&s}kt.prototype.M=function(){if(kt.Z.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],i=0;i<t.length;i++)pa(t[i]);delete n.g[e],n.h--}}this.I=null};kt.prototype.N=function(n,e,t,i){return this.i.add(String(n),e,!1,t,i)};kt.prototype.O=function(n,e,t,i){return this.i.add(String(n),e,!0,t,i)};function _a(n,e,t,i){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==t){var a=o.listener,l=o.ia||o.src;o.fa&&Uu(n.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Gu=se.JSON.stringify;function CC(){var n=sm;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class SC{constructor(){this.h=this.g=null}add(e,t){const i=im.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}}var im=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new wC,n=>n.reset());class wC{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function AC(n){se.setTimeout(()=>{throw n},0)}function zu(n,e){Ku||RC(),Xu||(Ku(),Xu=!0),sm.add(n,e)}var Ku;function RC(){var n=se.Promise.resolve(void 0);Ku=function(){n.then(kC)}}var Xu=!1,sm=new SC;function kC(){for(var n;n=CC();){try{n.h.call(n.g)}catch(t){AC(t)}var e=im;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Xu=!1}function ya(n,e){kt.call(this),this.h=n||1,this.g=e||se,this.j=Mt(this.kb,this),this.l=Date.now()}Ft(ya,kt);W=ya.prototype;W.da=!1;W.S=null;W.kb=function(){if(this.da){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-n):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ut(this,"tick"),this.da&&(Yu(this),this.start()))}};W.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Yu(n){n.da=!1,n.S&&(n.g.clearTimeout(n.S),n.S=null)}W.M=function(){ya.Z.M.call(this),Yu(this),delete this.g};function Qu(n,e,t){if(typeof n=="function")t&&(n=Mt(n,t));else if(n&&typeof n.handleEvent=="function")n=Mt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:se.setTimeout(n,e||0)}function rm(n){n.g=Qu(()=>{n.g=null,n.i&&(n.i=!1,rm(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class NC extends fi{constructor(e,t){super();this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rm(this)}M(){super.M(),this.g&&(se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ar(n){fi.call(this),this.h=n,this.g={}}Ft(Ar,fi);var om=[];function am(n,e,t,i){Array.isArray(t)||(t&&(om[0]=t.toString()),t=om);for(var s=0;s<t.length;s++){var r=Zf(e,t[s],i||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function lm(n){Nu(n.g,function(e,t){this.g.hasOwnProperty(t)&&Bu(e)},n),n.g={}}Ar.prototype.M=function(){Ar.Z.M.call(this),lm(this)};Ar.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function va(){this.g=!0}va.prototype.Aa=function(){this.g=!1};function LC(n,e,t,i,s,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function OC(n,e,t,i,s,r,o){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+t+`
`+r+" "+o})}function As(n,e,t,i){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+PC(n,t)+(i?" "+i:"")})}function DC(n,e){n.info(function(){return"TIMEOUT: "+e})}va.prototype.info=function(){};function PC(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var i=t[n];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Gu(t)}catch{return e}}var Vi={},um=null;function Ia(){return um=um||new kt}Vi.Ma="serverreachability";function cm(n){Gt.call(this,Vi.Ma,n)}Ft(cm,Gt);function Rr(n){const e=Ia();Ut(e,new cm(e,n))}Vi.STAT_EVENT="statevent";function hm(n,e){Gt.call(this,Vi.STAT_EVENT,n),this.stat=e}Ft(hm,Gt);function en(n){const e=Ia();Ut(e,new hm(e,n))}Vi.Na="timingevent";function dm(n,e){Gt.call(this,Vi.Na,n),this.size=e}Ft(dm,Gt);function kr(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return se.setTimeout(function(){n()},e)}var Ea={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fm={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ju(){}Ju.prototype.h=null;function mm(n){return n.h||(n.h=n.i())}function pm(){}var Nr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Zu(){Gt.call(this,"d")}Ft(Zu,Gt);function $u(){Gt.call(this,"c")}Ft($u,Gt);var ec;function ba(){}Ft(ba,Ju);ba.prototype.g=function(){return new XMLHttpRequest};ba.prototype.i=function(){return{}};ec=new ba;function Lr(n,e,t,i){this.l=n,this.j=e,this.m=t,this.X=i||1,this.V=new Ar(this),this.P=MC,n=Ou?125:void 0,this.W=new ya(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new gm}function gm(){this.i=null,this.g="",this.h=!1}var MC=45e3,tc={},Ta={};W=Lr.prototype;W.setTimeout=function(n){this.P=n};function nc(n,e,t){n.K=1,n.v=Ra(jn(e)),n.s=t,n.U=!0,_m(n,null)}function _m(n,e){n.F=Date.now(),Or(n),n.A=jn(n.v);var t=n.A,i=n.X;Array.isArray(i)||(i=[String(i)]),wm(t.h,"t",i),n.C=0,t=n.l.H,n.h=new gm,n.g=Ym(n.l,t?e:null,!n.s),0<n.O&&(n.L=new NC(Mt(n.Ia,n,n.g),n.O)),am(n.V,n.g,"readystatechange",n.gb),e=n.H?Gf(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.s,e)):(n.u="GET",n.g.ea(n.A,n.u,null,e)),Rr(1),LC(n.j,n.u,n.A,n.m,n.X,n.s)}W.gb=function(n){n=n.target;const e=this.L;e&&Wn(n)==3?e.l():this.Ia(n)};W.Ia=function(n){try{if(n==this.g)e:{const c=Wn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Ou||this.g&&(this.h.h||this.g.ga()||xm(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Rr(3):Rr(2)),Ca(this);var t=this.g.ba();this.N=t;t:if(ym(this)){var i=xm(this.g);n="";var s=i.length,r=Wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Hi(this),Dr(this);var o="";break t}this.h.i=new se.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=t==200,OC(this.j,this.u,this.A,this.m,this.X,c,t),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fa(a)){var u=a;break t}}u=null}if(t=u)As(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ic(this,t);else{this.i=!1,this.o=3,en(12),Hi(this),Dr(this);break e}}this.U?(vm(this,c,o),Ou&&this.i&&c==3&&(am(this.V,this.W,"tick",this.fb),this.W.start())):(As(this.j,this.m,o,null),ic(this,o)),c==4&&Hi(this),this.i&&!this.I&&(c==4?Gm(this.l,this):(this.i=!1,Or(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,en(12)):(this.o=0,en(13)),Hi(this),Dr(this)}}}catch{}finally{}};function ym(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Ba:!1}function vm(n,e,t){let i=!0,s;for(;!n.I&&n.C<t.length;)if(s=FC(n,t),s==Ta){e==4&&(n.o=4,en(14),i=!1),As(n.j,n.m,null,"[Incomplete Response]");break}else if(s==tc){n.o=4,en(15),As(n.j,n.m,t,"[Invalid Chunk]"),i=!1;break}else As(n.j,n.m,s,null),ic(n,s);ym(n)&&s!=Ta&&s!=tc&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,en(16),i=!1),n.i=n.i&&i,i?0<t.length&&!n.aa&&(n.aa=!0,e=n.l,e.g==n&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+t.length),mc(e),e.L=!0,en(11))):(As(n.j,n.m,t,"[Invalid Chunked Response]"),Hi(n),Dr(n))}W.fb=function(){if(this.g){var n=Wn(this.g),e=this.g.ga();this.C<e.length&&(Ca(this),vm(this,n,e),this.i&&n!=4&&Or(this))}};function FC(n,e){var t=n.C,i=e.indexOf(`
`,t);return i==-1?Ta:(t=Number(e.substring(t,i)),isNaN(t)?tc:(i+=1,i+t>e.length?Ta:(e=e.substr(i,t),n.C=i+t,e)))}W.cancel=function(){this.I=!0,Hi(this)};function Or(n){n.Y=Date.now()+n.P,Im(n,n.P)}function Im(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=kr(Mt(n.eb,n),e)}function Ca(n){n.B&&(se.clearTimeout(n.B),n.B=null)}W.eb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(DC(this.j,this.A),this.K!=2&&(Rr(3),en(17)),Hi(this),this.o=2,Dr(this)):Im(this,this.Y-n)};function Dr(n){n.l.G==0||n.I||Gm(n.l,n)}function Hi(n){Ca(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Yu(n.W),lm(n.V),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function ic(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||oc(t.i,n))){if(t.I=n.N,!n.J&&oc(t.i,n)&&t.G==3){try{var i=t.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0)e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Pa(t),Oa(t);else break e;fc(t),en(18)}else t.ta=s[1],0<t.ta-t.U&&37500>s[2]&&t.N&&t.A==0&&!t.v&&(t.v=kr(Mt(t.ab,t),6e3));if(1>=km(t.i)&&t.ka){try{t.ka()}catch{}t.ka=void 0}}else ji(t,11)}else if((n.J||t.g==n)&&Pa(t),!fa(e))for(s=t.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(t.U=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.J=u[1],t.la=u[2];const c=u[3];c!=null&&(t.ma=c,t.h.info("VER="+t.ma));const h=u[4];h!=null&&(t.za=h,t.h.info("SVER="+t.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,t.K=i,t.h.info("backChannelRequestTimeoutMs_="+i)),i=t;const f=n.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=i.i;!r.g&&(Zt(m,"spdy")||Zt(m,"quic")||Zt(m,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(ac(r,r.h),r.h=null))}if(i.D){const p=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(i.sa=p,$e(i.F,i.D,p))}}t.G=3,t.j&&t.j.xa(),t.$&&(t.O=Date.now()-n.F,t.h.info("Handshake RTT: "+t.O+"ms")),i=t;var o=n;if(i.oa=Xm(i,i.H?i.la:null,i.W),o.J){Nm(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(Ca(a),Or(a)),i.g=o}else jm(i);0<t.l.length&&Da(t)}else u[0]!="stop"&&u[0]!="close"||ji(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ji(t,7):hc(t):u[0]!="noop"&&t.j&&t.j.wa(u),t.A=0)}}Rr(4)}catch{}}function UC(n){if(n.R&&typeof n.R=="function")return n.R();if(typeof n=="string")return n.split("");if(wu(n)){for(var e=[],t=n.length,i=0;i<t;i++)e.push(n[i]);return e}e=[],t=0;for(i in n)e[t++]=n[i];return e}function sc(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(wu(n)||typeof n=="string")Hf(n,e,void 0);else{if(n.T&&typeof n.T=="function")var t=n.T();else if(n.R&&typeof n.R=="function")t=void 0;else if(wu(n)||typeof n=="string"){t=[];for(var i=n.length,s=0;s<i;s++)t.push(s)}else for(s in t=[],i=0,n)t[i++]=s;i=UC(n),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],t&&t[r],n)}}function Rs(n,e){this.h={},this.g=[],this.i=0;var t=arguments.length;if(1<t){if(t%2)throw Error("Uneven number of arguments");for(var i=0;i<t;i+=2)this.set(arguments[i],arguments[i+1])}else if(n)if(n instanceof Rs)for(t=n.T(),i=0;i<t.length;i++)this.set(t[i],n.get(t[i]));else for(i in n)this.set(i,n[i])}W=Rs.prototype;W.R=function(){rc(this);for(var n=[],e=0;e<this.g.length;e++)n.push(this.h[this.g[e]]);return n};W.T=function(){return rc(this),this.g.concat()};function rc(n){if(n.i!=n.g.length){for(var e=0,t=0;e<n.g.length;){var i=n.g[e];Bi(n.h,i)&&(n.g[t++]=i),e++}n.g.length=t}if(n.i!=n.g.length){var s={};for(t=e=0;e<n.g.length;)i=n.g[e],Bi(s,i)||(n.g[t++]=i,s[i]=1),e++;n.g.length=t}}W.get=function(n,e){return Bi(this.h,n)?this.h[n]:e};W.set=function(n,e){Bi(this.h,n)||(this.i++,this.g.push(n)),this.h[n]=e};W.forEach=function(n,e){for(var t=this.T(),i=0;i<t.length;i++){var s=t[i],r=this.get(s);n.call(e,r,s,this)}};function Bi(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var Em=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function xC(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var i=n[t].indexOf("="),s=null;if(0<=i){var r=n[t].substring(0,i);s=n[t].substring(i+1)}else r=n[t];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function qi(n,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,n instanceof qi){this.g=e!==void 0?e:n.g,Sa(this,n.j),this.s=n.s,wa(this,n.i),Aa(this,n.m),this.l=n.l,e=n.h;var t=new Fr;t.i=e.i,e.g&&(t.g=new Rs(e.g),t.h=e.h),bm(this,t),this.o=n.o}else n&&(t=String(n).match(Em))?(this.g=!!e,Sa(this,t[1]||"",!0),this.s=Pr(t[2]||""),wa(this,t[3]||"",!0),Aa(this,t[4]),this.l=Pr(t[5]||"",!0),bm(this,t[6]||"",!0),this.o=Pr(t[7]||"")):(this.g=!!e,this.h=new Fr(null,this.g))}qi.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Mr(e,Tm,!0),":");var t=this.i;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Mr(e,Tm,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.i&&t.charAt(0)!="/"&&n.push("/"),n.push(Mr(t,t.charAt(0)=="/"?jC:qC,!0))),(t=this.h.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Mr(t,GC)),n.join("")};function jn(n){return new qi(n)}function Sa(n,e,t){n.j=t?Pr(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function wa(n,e,t){n.i=t?Pr(e,!0):e}function Aa(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function bm(n,e,t){e instanceof Fr?(n.h=e,zC(n.h,n.g)):(t||(e=Mr(e,WC)),n.h=new Fr(e,n.g))}function $e(n,e,t){n.h.set(e,t)}function Ra(n){return $e(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function VC(n){return n instanceof qi?jn(n):new qi(n,void 0)}function HC(n,e,t,i){var s=new qi(null,void 0);return n&&Sa(s,n),e&&wa(s,e),t&&Aa(s,t),i&&(s.l=i),s}function Pr(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Mr(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,BC),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function BC(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Tm=/[#\/\?@]/g,qC=/[#\?:]/g,jC=/[#\?]/g,WC=/[#\?@]/g,GC=/#/g;function Fr(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function mi(n){n.g||(n.g=new Rs,n.h=0,n.i&&xC(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}W=Fr.prototype;W.add=function(n,e){mi(this),this.i=null,n=ks(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Cm(n,e){mi(n),e=ks(n,e),Bi(n.g.h,e)&&(n.i=null,n.h-=n.g.get(e).length,n=n.g,Bi(n.h,e)&&(delete n.h[e],n.i--,n.g.length>2*n.i&&rc(n)))}function Sm(n,e){return mi(n),e=ks(n,e),Bi(n.g.h,e)}W.forEach=function(n,e){mi(this),this.g.forEach(function(t,i){Hf(t,function(s){n.call(e,s,i,this)},this)},this)};W.T=function(){mi(this);for(var n=this.g.R(),e=this.g.T(),t=[],i=0;i<e.length;i++)for(var s=n[i],r=0;r<s.length;r++)t.push(e[i]);return t};W.R=function(n){mi(this);var e=[];if(typeof n=="string")Sm(this,n)&&(e=Bf(e,this.g.get(ks(this,n))));else{n=this.g.R();for(var t=0;t<n.length;t++)e=Bf(e,n[t])}return e};W.set=function(n,e){return mi(this),this.i=null,n=ks(this,n),Sm(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};W.get=function(n,e){return n?(n=this.R(n),0<n.length?String(n[0]):e):e};function wm(n,e,t){Cm(n,e),0<t.length&&(n.i=null,n.g.set(ks(n,e),Ru(t)),n.h+=t.length)}W.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var n=[],e=this.g.T(),t=0;t<e.length;t++){var i=e[t],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;i[r]!==""&&(o+="="+encodeURIComponent(String(i[r]))),n.push(o)}}return this.i=n.join("&")};function ks(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function zC(n,e){e&&!n.j&&(mi(n),n.i=null,n.g.forEach(function(t,i){var s=i.toLowerCase();i!=s&&(Cm(this,i),wm(this,s,t))},n)),n.j=e}var KC=class{constructor(n,e){this.h=n,this.g=e}};function Am(n){this.l=n||XC,se.PerformanceNavigationTiming?(n=se.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(se.g&&se.g.Ea&&se.g.Ea()&&se.g.Ea().Zb),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var XC=10;function Rm(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function km(n){return n.h?1:n.g?n.g.size:0}function oc(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function ac(n,e){n.g?n.g.add(e):n.h=e}function Nm(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Am.prototype.cancel=function(){if(this.i=Lm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Lm(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return Ru(n.i)}function lc(){}lc.prototype.stringify=function(n){return se.JSON.stringify(n,void 0)};lc.prototype.parse=function(n){return se.JSON.parse(n,void 0)};function YC(){this.g=new lc}function QC(n,e,t){const i=t||"";try{sc(n,function(s,r){let o=s;Cr(s)&&(o=Gu(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function JC(n,e){const t=new va;if(se.Image){const i=new Image;i.onload=da(ka,t,i,"TestLoadImage: loaded",!0,e),i.onerror=da(ka,t,i,"TestLoadImage: error",!1,e),i.onabort=da(ka,t,i,"TestLoadImage: abort",!1,e),i.ontimeout=da(ka,t,i,"TestLoadImage: timeout",!1,e),se.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else e(!1)}function ka(n,e,t,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Ur(n){this.l=n.$b||null,this.j=n.ib||!1}Ft(Ur,Ju);Ur.prototype.g=function(){return new Na(this.l,this.j)};Ur.prototype.i=function(n){return function(){return n}}({});function Na(n,e){kt.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=uc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ft(Na,kt);var uc=0;W=Na.prototype;W.open=function(n,e){if(this.readyState!=uc)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Vr(this)};W.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||se).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};W.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xr(this)),this.readyState=uc};W.Va=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Vr(this)),this.g&&(this.readyState=3,Vr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof se.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Om(this)}else n.text().then(this.Ua.bind(this),this.ha.bind(this))};function Om(n){n.j.read().then(n.Sa.bind(n)).catch(n.ha.bind(n))}W.Sa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?xr(this):Vr(this),this.readyState==3&&Om(this)}};W.Ua=function(n){this.g&&(this.response=this.responseText=n,xr(this))};W.Ta=function(n){this.g&&(this.response=n,xr(this))};W.ha=function(){this.g&&xr(this)};function xr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Vr(n)}W.setRequestHeader=function(n,e){this.v.append(n,e)};W.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};W.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Vr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Na.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var ZC=se.JSON.parse;function gt(n){kt.call(this),this.headers=new Rs,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Dm,this.K=this.L=!1}Ft(gt,kt);var Dm="",$C=/^https?$/i,e0=["POST","PUT"];W=gt.prototype;W.ea=function(n,e,t,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ec.g(),this.C=this.u?mm(this.u):mm(ec),this.g.onreadystatechange=Mt(this.Fa,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(r){Pm(this,r);return}n=t||"";const s=new Rs(this.headers);i&&sc(i,function(r,o){s.set(o,r)}),i=hC(s.T()),t=se.FormData&&n instanceof se.FormData,!(0<=Vf(e0,e))||i||t||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Um(this),0<this.B&&((this.K=t0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Mt(this.pa,this)):this.A=Qu(this.pa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){Pm(this,r)}};function t0(n){return ws&&gC()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}function n0(n){return n.toLowerCase()=="content-type"}W.pa=function(){typeof Su!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ut(this,"timeout"),this.abort(8))};function Pm(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Mm(n),La(n)}function Mm(n){n.D||(n.D=!0,Ut(n,"complete"),Ut(n,"error"))}W.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Ut(this,"complete"),Ut(this,"abort"),La(this))};W.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),La(this,!0)),gt.Z.M.call(this)};W.Fa=function(){this.s||(this.F||this.v||this.l?Fm(this):this.cb())};W.cb=function(){Fm(this)};function Fm(n){if(n.h&&typeof Su!="undefined"&&(!n.C[1]||Wn(n)!=4||n.ba()!=2)){if(n.v&&Wn(n)==4)Qu(n.Fa,0,n);else if(Ut(n,"readystatechange"),Wn(n)==4){n.h=!1;try{const a=n.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var i;if(i=a===0){var s=String(n.H).match(Em)[1]||null;if(!s&&se.self&&se.self.location){var r=se.self.location.protocol;s=r.substr(0,r.length-1)}i=!$C.test(s?s.toLowerCase():"")}t=i}if(t)Ut(n,"complete"),Ut(n,"success");else{n.m=6;try{var o=2<Wn(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.ba()+"]",Mm(n)}}finally{La(n)}}}}function La(n,e){if(n.g){Um(n);const t=n.g,i=n.C[0]?ha:null;n.g=null,n.C=null,e||Ut(n,"ready");try{t.onreadystatechange=i}catch{}}}function Um(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(se.clearTimeout(n.A),n.A=null)}function Wn(n){return n.g?n.g.readyState:0}W.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch{return-1}};W.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};W.Qa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),ZC(e)}};function xm(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case Dm:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}W.Da=function(){return this.m};W.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function i0(n){let e="";return Nu(n,function(t,i){e+=i,e+=":",e+=t,e+=`\r
`}),e}function cc(n,e,t){e:{for(i in t){var i=!1;break e}i=!0}i||(t=i0(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):$e(n,e,t))}function Hr(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Vm(n){this.za=0,this.l=[],this.h=new va,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Hr("failFast",!1,n),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Hr("baseRetryDelayMs",5e3,n),this.$a=Hr("retryDelaySeedMs",1e4,n),this.Ya=Hr("forwardChannelMaxRetries",2,n),this.ra=Hr("forwardChannelRequestTimeoutMs",2e4,n),this.qa=n&&n.xmlHttpFactory||void 0,this.Ba=n&&n.Yb||!1,this.K=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.J="",this.i=new Am(n&&n.concurrentRequestLimit),this.Ca=new YC,this.ja=n&&n.fastHandshake||!1,this.Ra=n&&n.Wb||!1,n&&n.Aa&&this.h.Aa(),n&&n.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&n&&n.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!n||n.Xb!==!1}W=Vm.prototype;W.ma=8;W.G=1;function hc(n){if(Hm(n),n.G==3){var e=n.V++,t=jn(n.F);$e(t,"SID",n.J),$e(t,"RID",e),$e(t,"TYPE","terminate"),Br(n,t),e=new Lr(n,n.h,e,void 0),e.K=2,e.v=Ra(jn(t)),t=!1,se.navigator&&se.navigator.sendBeacon&&(t=se.navigator.sendBeacon(e.v.toString(),"")),!t&&se.Image&&(new Image().src=e.v,t=!0),t||(e.g=Ym(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Or(e)}Km(n)}W.hb=function(n){try{this.h.info("Origin Trials invoked: "+n)}catch{}};function Oa(n){n.g&&(mc(n),n.g.cancel(),n.g=null)}function Hm(n){Oa(n),n.u&&(se.clearTimeout(n.u),n.u=null),Pa(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&se.clearTimeout(n.m),n.m=null)}function dc(n,e){n.l.push(new KC(n.Za++,e)),n.G==3&&Da(n)}function Da(n){Rm(n.i)||n.m||(n.m=!0,zu(n.Ha,n),n.C=0)}function s0(n,e){return km(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.l=e.D.concat(n.l),!0):n.G==1||n.G==2||n.C>=(n.Xa?0:n.Ya)?!1:(n.m=kr(Mt(n.Ha,n,e),zm(n,n.C)),n.C++,!0)}W.Ha=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.V=Math.floor(1e5*Math.random()),n=this.V++;const s=new Lr(this,this.h,n,void 0);let r=this.s;if(this.P&&(r?(r=Gf(r),Kf(r,this.P)):r=this.P),this.o===null&&(s.H=r),this.ja)e:{for(var e=0,t=0;t<this.l.length;t++){t:{var i=this.l[t];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=t;break e}if(e===4096||t===this.l.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=qm(this,s,e),t=jn(this.F),$e(t,"RID",n),$e(t,"CVER",22),this.D&&$e(t,"X-HTTP-Session-Id",this.D),Br(this,t),this.o&&r&&cc(t,this.o,r),ac(this.i,s),this.Ra&&$e(t,"TYPE","init"),this.ja?($e(t,"$req",e),$e(t,"SID","null"),s.$=!0,nc(s,t,null)):nc(s,t,e),this.G=2}}else this.G==3&&(n?Bm(this,n):this.l.length==0||Rm(this.i)||Bm(this))};function Bm(n,e){var t;e?t=e.m:t=n.V++;const i=jn(n.F);$e(i,"SID",n.J),$e(i,"RID",t),$e(i,"AID",n.U),Br(n,i),n.o&&n.s&&cc(i,n.o,n.s),t=new Lr(n,n.h,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.l=e.D.concat(n.l)),e=qm(n,t,1e3),t.setTimeout(Math.round(.5*n.ra)+Math.round(.5*n.ra*Math.random())),ac(n.i,t),nc(t,i,e)}function Br(n,e){n.j&&sc({},function(t,i){$e(e,i,t)})}function qm(n,e,t){t=Math.min(n.l.length,t);var i=n.j?Mt(n.j.Oa,n.j,n):null;e:{var s=n.l;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<t;l++){let u=s[l].h;const c=s[l].g;if(u-=r,0>u)r=Math.max(0,s[l].h-100),a=!1;else try{QC(c,o,"req"+u+"_")}catch{i&&i(c)}}if(a){i=o.join("&");break e}}}return n=n.l.splice(0,t),e.D=n,i}function jm(n){n.g||n.u||(n.Y=1,zu(n.Ga,n),n.A=0)}function fc(n){return n.g||n.u||3<=n.A?!1:(n.Y++,n.u=kr(Mt(n.Ga,n),zm(n,n.A)),n.A++,!0)}W.Ga=function(){if(this.u=null,Wm(this),this.$&&!(this.L||this.g==null||0>=this.O)){var n=2*this.O;this.h.info("BP detection timer enabled: "+n),this.B=kr(Mt(this.bb,this),n)}};W.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,en(10),Oa(this),Wm(this))};function mc(n){n.B!=null&&(se.clearTimeout(n.B),n.B=null)}function Wm(n){n.g=new Lr(n,n.h,"rpc",n.Y),n.o===null&&(n.g.H=n.s),n.g.O=0;var e=jn(n.oa);$e(e,"RID","rpc"),$e(e,"SID",n.J),$e(e,"CI",n.N?"0":"1"),$e(e,"AID",n.U),Br(n,e),$e(e,"TYPE","xmlhttp"),n.o&&n.s&&cc(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.la,t.K=1,t.v=Ra(jn(e)),t.s=null,t.U=!0,_m(t,n)}W.ab=function(){this.v!=null&&(this.v=null,Oa(this),fc(this),en(19))};function Pa(n){n.v!=null&&(se.clearTimeout(n.v),n.v=null)}function Gm(n,e){var t=null;if(n.g==e){Pa(n),mc(n),n.g=null;var i=2}else if(oc(n.i,e))t=e.D,Nm(n.i,e),i=1;else return;if(n.I=e.N,n.G!=0){if(e.i)if(i==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var s=n.C;i=Ia(),Ut(i,new dm(i,t,e,s)),Da(n)}else jm(n);else if(s=e.o,s==3||s==0&&0<n.I||!(i==1&&s0(n,e)||i==2&&fc(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:ji(n,5);break;case 4:ji(n,10);break;case 3:ji(n,6);break;default:ji(n,2)}}}function zm(n,e){let t=n.Pa+Math.floor(Math.random()*n.$a);return n.j||(t*=2),t*e}function ji(n,e){if(n.h.info("Error code "+e),e==2){var t=null;n.j&&(t=null);var i=Mt(n.jb,n);t||(t=new qi("//www.google.com/images/cleardot.gif"),se.location&&se.location.protocol=="http"||Sa(t,"https"),Ra(t)),JC(t.toString(),i)}else en(2);n.G=0,n.j&&n.j.va(e),Km(n),Hm(n)}W.jb=function(n){n?(this.h.info("Successfully pinged google.com"),en(2)):(this.h.info("Failed to ping google.com"),en(1))};function Km(n){n.G=0,n.I=-1,n.j&&((Lm(n.i).length!=0||n.l.length!=0)&&(n.i.i.length=0,Ru(n.l),n.l.length=0),n.j.ua())}function Xm(n,e,t){let i=VC(t);if(i.i!="")e&&wa(i,e+"."+i.i),Aa(i,i.m);else{const s=se.location;i=HC(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,t)}return n.aa&&Nu(n.aa,function(s,r){$e(i,r,s)}),e=n.D,t=n.sa,e&&t&&$e(i,e,t),$e(i,"VER",n.ma),Br(n,i),i}function Ym(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ba&&!n.qa?new gt(new Ur({ib:!0})):new gt(n.qa),e.L=n.H,e}function Qm(){}W=Qm.prototype;W.xa=function(){};W.wa=function(){};W.va=function(){};W.ua=function(){};W.Oa=function(){};function Ma(){if(ws&&!(10<=Number(_C)))throw Error("Environmental error: no available transport.")}Ma.prototype.g=function(n,e){return new gn(n,e)};function gn(n,e){kt.call(this),this.g=new Vm(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.P=n,(n=e&&e.httpHeadersOverwriteParam)&&!fa(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!fa(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Ns(this)}Ft(gn,kt);gn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;n.Wa&&(n.h.info("Origin Trials enabled."),zu(Mt(n.hb,n,e))),en(0),n.W=e,n.aa=t||{},n.N=n.X,n.F=Xm(n,null,n.W),Da(n)};gn.prototype.close=function(){hc(this.g)};gn.prototype.u=function(n){if(typeof n=="string"){var e={};e.__data__=n,dc(this.g,e)}else this.v?(e={},e.__data__=Gu(n),dc(this.g,e)):dc(this.g,n)};gn.prototype.M=function(){this.g.j=null,delete this.j,hc(this.g),delete this.g,gn.Z.M.call(this)};function Jm(n){Zu.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Ft(Jm,Zu);function Zm(){$u.call(this),this.status=1}Ft(Zm,$u);function Ns(n){this.g=n}Ft(Ns,Qm);Ns.prototype.xa=function(){Ut(this.g,"a")};Ns.prototype.wa=function(n){Ut(this.g,new Jm(n))};Ns.prototype.va=function(n){Ut(this.g,new Zm(n))};Ns.prototype.ua=function(){Ut(this.g,"b")};Ma.prototype.createWebChannel=Ma.prototype.g;gn.prototype.send=gn.prototype.u;gn.prototype.open=gn.prototype.m;gn.prototype.close=gn.prototype.close;Ea.NO_ERROR=0;Ea.TIMEOUT=8;Ea.HTTP_ERROR=6;fm.COMPLETE="complete";pm.EventType=Nr;Nr.OPEN="a";Nr.CLOSE="b";Nr.ERROR="c";Nr.MESSAGE="d";kt.prototype.listen=kt.prototype.N;gt.prototype.listenOnce=gt.prototype.O;gt.prototype.getLastError=gt.prototype.La;gt.prototype.getLastErrorCode=gt.prototype.Da;gt.prototype.getStatus=gt.prototype.ba;gt.prototype.getResponseJson=gt.prototype.Qa;gt.prototype.getResponseText=gt.prototype.ga;gt.prototype.send=gt.prototype.ea;var r0=function(){return new Ma},o0=function(){return Ia()},pc=Ea,a0=fm,l0=Vi,$m={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},u0=Ur,Fa=pm,c0=gt;const ep="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}an.UNAUTHENTICATED=new an(null),an.GOOGLE_CREDENTIALS=new an("google-credentials-uid"),an.FIRST_PARTY=new an("first-party-uid"),an.MOCK_USER=new an("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls="9.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new Xo("@firebase/firestore");function tp(){return Wi.logLevel}function $(n,...e){if(Wi.logLevel<=Se.DEBUG){const t=e.map(gc);Wi.debug(`Firestore (${Ls}): ${n}`,...t)}}function pi(n,...e){if(Wi.logLevel<=Se.ERROR){const t=e.map(gc);Wi.error(`Firestore (${Ls}): ${n}`,...t)}}function np(n,...e){if(Wi.logLevel<=Se.WARN){const t=e.map(gc);Wi.warn(`Firestore (${Ls}): ${n}`,...t)}}function gc(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function le(n="Unexpected state"){const e=`FIRESTORE (${Ls}) INTERNAL ASSERTION FAILED: `+n;throw pi(e),new Error(e)}function ze(n,e){n||le()}function ue(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class d0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(an.UNAUTHENTICATED))}shutdown(){}}class f0{constructor(e){this.t=e,this.currentUser=an.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Gn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{$("FirebaseCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Gn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?($("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ze(typeof i.accessToken=="string"),new h0(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string"),new an(e)}}class m0{constructor(e,t,i){this.h=e,this.l=t,this.m=i,this.type="FirstParty",this.user=an.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},t=this.h.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class p0{constructor(e,t,i){this.h=e,this.l=t,this.m=i}getToken(){return Promise.resolve(new m0(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(an.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class _c{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.g(i),this.p=i=>t.writeSequenceNumber(i))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_c.T=-1;class ip{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=g0(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%e.length))}return i}}function De(n,e){return n<e?-1:n>e?1:0}function Os(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new K(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _n.fromMillis(Date.now())}static fromDate(e){return _n.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new _n(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ne(e)}static min(){return new Ne(new _n(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function rp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t,i){t===void 0?t=0:t>e.length&&le(),i===void 0?i=e.length-t:i>e.length-t&&le(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return qr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qr?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=e.get(s),o=t.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class st extends qr{construct(e,t,i){return new st(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new K(N.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new st(t)}static emptyPath(){return new st([])}}const _0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ln extends qr{construct(e,t,i){return new ln(e,t,i)}static isValidIdentifier(e){return _0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ln.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ln(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new K(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new K(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new K(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ln(t)}static emptyPath(){return new ln([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.fields=e,e.sort(ln.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Os(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new zt(t)}static fromUint8Array(e){const t=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new zt(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}zt.EMPTY_BYTE_STRING=new zt("");const y0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gi(n){if(ze(!!n),typeof n=="string"){let e=0;const t=y0.exec(n);if(ze(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:_t(n.seconds),nanos:_t(n.nanos)}}function _t(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ds(n){return typeof n=="string"?zt.fromBase64String(n):zt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ap(n){const e=n.mapValue.fields.__previous_value__;return op(e)?ap(e):e}function Wr(n){const e=gi(n.mapValue.fields.__local_write_time__.timestampValue);return new _n(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(n){return n==null}function Ua(n){return n===0&&1/n==-1/0}function v0(n){return typeof n=="number"&&Number.isInteger(n)&&!Ua(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(st.fromString(e))}static fromName(e){return new re(st.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return st.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new st(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?op(n)?4:10:le()}function Pn(n,e){const t=zi(n);if(t!==zi(e))return!1;switch(t){case 0:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Wr(n).isEqual(Wr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=gi(i.timestampValue),o=gi(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Ds(i.bytesValue).isEqual(Ds(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return _t(i.geoPointValue.latitude)===_t(s.geoPointValue.latitude)&&_t(i.geoPointValue.longitude)===_t(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return _t(i.integerValue)===_t(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=_t(i.doubleValue),o=_t(s.doubleValue);return r===o?Ua(r)===Ua(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return Os(n.arrayValue.values||[],e.arrayValue.values||[],Pn);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(sp(r)!==sp(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Pn(r[a],o[a])))return!1;return!0}(n,e);default:return le()}}function Gr(n,e){return(n.values||[]).find(t=>Pn(t,e))!==void 0}function Ms(n,e){const t=zi(n),i=zi(e);if(t!==i)return De(t,i);switch(t){case 0:return 0;case 1:return De(n.booleanValue,e.booleanValue);case 2:return function(s,r){const o=_t(s.integerValue||s.doubleValue),a=_t(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return lp(n.timestampValue,e.timestampValue);case 4:return lp(Wr(n),Wr(e));case 5:return De(n.stringValue,e.stringValue);case 6:return function(s,r){const o=Ds(s),a=Ds(r);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=De(o[l],a[l]);if(u!==0)return u}return De(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,r){const o=De(_t(s.latitude),_t(r.latitude));return o!==0?o:De(_t(s.longitude),_t(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Ms(o[l],a[l]);if(u)return u}return De(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,r){const o=s.fields||{},a=Object.keys(o),l=r.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=De(a[c],u[c]);if(h!==0)return h;const d=Ms(o[a[c]],l[u[c]]);if(d!==0)return d}return De(a.length,u.length)}(n.mapValue,e.mapValue);default:throw le()}}function lp(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return De(n,e);const t=gi(n),i=gi(e),s=De(t.seconds,i.seconds);return s!==0?s:De(t.nanos,i.nanos)}function yc(n){return vc(n)}function vc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(i){const s=gi(i);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Ds(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,re.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=vc(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${vc(i.fields[a])}`;return r+"}"}(n.mapValue):le();var e,t}function Ic(n){return!!n&&"integerValue"in n}function Ec(n){return!!n&&"arrayValue"in n}function up(n){return!!n&&"nullValue"in n}function cp(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xa(n){return!!n&&"mapValue"in n}function zr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Gi(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=zr(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zr(n.arrayValue.values[t]);return e}return Object.assign({},n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.value=e}static empty(){return new yn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!xa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zr(t)}setAll(e){let t=ln.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=a.popLast()}o?i[a.lastSegment()]=zr(o):s.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());xa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Pn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];xa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){Gi(t,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new yn(zr(this.value))}}function hp(n){const e=[];return Gi(n.fields,(t,i)=>{const s=new ln([t]);if(xa(i)){const r=hp(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new jr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t,i,s,r){this.key=e,this.documentType=t,this.version=i,this.data=s,this.documentState=r}static newInvalidDocument(e){return new Kt(e,0,Ne.min(),yn.empty(),0)}static newFoundDocument(e,t,i){return new Kt(e,1,t,i,0)}static newNoDocument(e,t){return new Kt(e,2,t,yn.empty(),0)}static newUnknownDocument(e,t){return new Kt(e,3,t,yn.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Kt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class I0{constructor(e,t=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.A=null}}function dp(n,e=null,t=[],i=[],s=null,r=null,o=null){return new I0(n,e,t,i,s,r,o)}function bc(n){const e=ue(n);if(e.A===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>b0(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Ps(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Va(e.startAt)),e.endAt&&(t+="|ub:",t+=Va(e.endAt)),e.A=t}return e.A}function E0(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(i=t).field.canonicalString()} ${i.op} ${yc(i.value)}`;var i}).join(", ")}]`),Ps(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: "+Va(n.startAt)),n.endAt&&(e+=", endAt: "+Va(n.endAt)),`Target(${e})`}function Tc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<n.orderBy.length;s++)if(!N0(n.orderBy[s],e.orderBy[s]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let s=0;s<n.filters.length;s++)if(t=n.filters[s],i=e.filters[s],t.op!==i.op||!t.field.isEqual(i.field)||!Pn(t.value,i.value))return!1;var t,i;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!pp(n.startAt,e.startAt)&&pp(n.endAt,e.endAt)}function Cc(n){return re.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}class un extends class{}{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.R(e,t,i):new T0(e,t,i):t==="array-contains"?new w0(e,i):t==="in"?new A0(e,i):t==="not-in"?new R0(e,i):t==="array-contains-any"?new k0(e,i):new un(e,t,i)}static R(e,t,i){return t==="in"?new C0(e,i):new S0(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.P(Ms(t,this.value)):t!==null&&zi(this.value)===zi(t)&&this.P(Ms(t,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function b0(n){return n.field.canonicalString()+n.op.toString()+yc(n.value)}class T0 extends un{constructor(e,t,i){super(e,t,i),this.key=re.fromName(i.referenceValue)}matches(e){const t=re.comparator(e.key,this.key);return this.P(t)}}class C0 extends un{constructor(e,t){super(e,"in",t),this.keys=fp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class S0 extends un{constructor(e,t){super(e,"not-in",t),this.keys=fp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function fp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>re.fromName(i.referenceValue))}class w0 extends un{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ec(t)&&Gr(t.arrayValue,this.value)}}class A0 extends un{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Gr(this.value.arrayValue,t)}}class R0 extends un{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Gr(this.value.arrayValue,t)}}class k0 extends un{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ec(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Gr(this.value.arrayValue,i))}}class Sc{constructor(e,t){this.position=e,this.before=t}}function Va(n){return`${n.before?"b":"a"}:${n.position.map(e=>yc(e)).join(",")}`}class Fs{constructor(e,t="asc"){this.field=e,this.dir=t}}function N0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function mp(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=re.comparator(re.fromName(o.referenceValue),t.key):i=Ms(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return n.before?i<=0:i<0}function pp(n,e){if(n===null)return e===null;if(e===null||n.before!==e.before||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Pn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.V=null,this.S=null,this.startAt,this.endAt}}function L0(n,e,t,i,s,r,o,a){return new Kr(n,e,t,i,s,r,o,a)}function Ha(n){return new Kr(n)}function Ba(n){return!Ps(n.limit)&&n.limitType==="F"}function qa(n){return!Ps(n.limit)&&n.limitType==="L"}function gp(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function _p(n){for(const e of n.filters)if(e.v())return e.field;return null}function O0(n){return n.collectionGroup!==null}function Xr(n){const e=ue(n);if(e.V===null){e.V=[];const t=_p(e),i=gp(e);if(t!==null&&i===null)t.isKeyField()||e.V.push(new Fs(t)),e.V.push(new Fs(ln.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.V.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Fs(ln.keyField(),r))}}}return e.V}function Ki(n){const e=ue(n);if(!e.S)if(e.limitType==="F")e.S=dp(e.path,e.collectionGroup,Xr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Xr(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new Fs(r.field,o))}const i=e.endAt?new Sc(e.endAt.position,!e.endAt.before):null,s=e.startAt?new Sc(e.startAt.position,!e.startAt.before):null;e.S=dp(e.path,e.collectionGroup,t,e.filters,e.limit,i,s)}return e.S}function D0(n,e,t){return new Kr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ja(n,e){return Tc(Ki(n),Ki(e))&&n.limitType===e.limitType}function yp(n){return`${bc(Ki(n))}|lt:${n.limitType}`}function wc(n){return`Query(target=${E0(Ki(n))}; limitType=${n.limitType})`}function Wa(n,e){return e.isFoundDocument()&&function(t,i){const s=i.key.path;return t.collectionGroup!==null?i.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):re.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,i){for(const s of t.explicitOrderBy)if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,i){for(const s of t.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(t,i){return!(t.startAt&&!mp(t.startAt,Xr(t),i)||t.endAt&&mp(t.endAt,Xr(t),i))}(n,e)}function vp(n){return(e,t)=>{let i=!1;for(const s of Xr(n)){const r=P0(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function P0(n,e,t){const i=n.field.isKeyField()?re.comparator(e.key,t.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Ms(a,l):le()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return le()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(n,e){if(n.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ua(e)?"-0":e}}function Ep(n){return{integerValue:""+n}}function M0(n,e){return v0(e)?Ep(e):Ip(n,e)}/**
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
 */class Ga{constructor(){this._=void 0}}function F0(n,e,t){return n instanceof Yr?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(t,e):n instanceof Qr?Tp(n,e):n instanceof Jr?Cp(n,e):function(i,s){const r=bp(i,s),o=Sp(r)+Sp(i.C);return Ic(r)&&Ic(i.C)?Ep(o):Ip(i.N,o)}(n,e)}function U0(n,e,t){return n instanceof Qr?Tp(n,e):n instanceof Jr?Cp(n,e):t}function bp(n,e){return n instanceof za?Ic(t=e)||function(i){return!!i&&"doubleValue"in i}(t)?e:{integerValue:0}:null;var t}class Yr extends Ga{}class Qr extends Ga{constructor(e){super(),this.elements=e}}function Tp(n,e){const t=wp(e);for(const i of n.elements)t.some(s=>Pn(s,i))||t.push(i);return{arrayValue:{values:t}}}class Jr extends Ga{constructor(e){super(),this.elements=e}}function Cp(n,e){let t=wp(e);for(const i of n.elements)t=t.filter(s=>!Pn(s,i));return{arrayValue:{values:t}}}class za extends Ga{constructor(e,t){super(),this.N=e,this.C=t}}function Sp(n){return _t(n.integerValue||n.doubleValue)}function wp(n){return Ec(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,t){this.field=e,this.transform=t}}function V0(n,e){return n.field.isEqual(e.field)&&function(t,i){return t instanceof Qr&&i instanceof Qr||t instanceof Jr&&i instanceof Jr?Os(t.elements,i.elements,Pn):t instanceof za&&i instanceof za?Pn(t.C,i.C):t instanceof Yr&&i instanceof Yr}(n.transform,e.transform)}class H0{constructor(e,t){this.version=e,this.transformResults=t}}class Rn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ka(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Xa{}function B0(n,e,t){n instanceof Ya?function(i,s,r){const o=i.value.clone(),a=Np(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Xi?function(i,s,r){if(!Ka(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Np(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(kp(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function Ac(n,e,t){n instanceof Ya?function(i,s,r){if(!Ka(i.precondition,s))return;const o=i.value.clone(),a=Lp(i.fieldTransforms,r,s);o.setAll(a),s.convertToFoundDocument(Rp(s),o).setHasLocalMutations()}(n,e,t):n instanceof Xi?function(i,s,r){if(!Ka(i.precondition,s))return;const o=Lp(i.fieldTransforms,r,s),a=s.data;a.setAll(kp(i)),a.setAll(o),s.convertToFoundDocument(Rp(s),a).setHasLocalMutations()}(n,e,t):function(i,s){Ka(i.precondition,s)&&s.convertToNoDocument(Ne.min())}(n,e)}function q0(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=bp(i.transform,s||null);r!=null&&(t==null&&(t=yn.empty()),t.set(i.field,r))}return t||null}function Ap(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,i){return t===void 0&&i===void 0||!(!t||!i)&&Os(t,i,(s,r)=>V0(s,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}function Rp(n){return n.isFoundDocument()?n.version:Ne.min()}class Ya extends Xa{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}}class Xi extends Xa{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}}function kp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Np(n,e,t){const i=new Map;ze(n.length===t.length);for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,U0(o,a,t[s]))}return i}function Lp(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,F0(r,o,e))}return i}class Rc extends Xa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class j0 extends Xa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt,be;function G0(n){switch(n){default:return le();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function Op(n){if(n===void 0)return pi("GRPC error has no .code"),N.UNKNOWN;switch(n){case yt.OK:return N.OK;case yt.CANCELLED:return N.CANCELLED;case yt.UNKNOWN:return N.UNKNOWN;case yt.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case yt.INTERNAL:return N.INTERNAL;case yt.UNAVAILABLE:return N.UNAVAILABLE;case yt.UNAUTHENTICATED:return N.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case yt.NOT_FOUND:return N.NOT_FOUND;case yt.ALREADY_EXISTS:return N.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return N.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case yt.ABORTED:return N.ABORTED;case yt.OUT_OF_RANGE:return N.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return N.UNIMPLEMENTED;case yt.DATA_LOSS:return N.DATA_LOSS;default:return le()}}(be=yt||(yt={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,t){this.comparator=e,this.root=t||xt.EMPTY}insert(e,t){return new Xt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new Xt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qa(this.root,e,this.comparator,!0)}}class Qa{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:xt.RED,this.left=s!=null?s:xt.EMPTY,this.right=r!=null?r:xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new xt(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return xt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(n,e,t,i,s){return this}insert(n,e,t){return new xt(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.comparator=e,this.data=new Xt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Dp(this.data.getIterator())}getIteratorFrom(e){return new Dp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Vt(this.comparator);return t.data=e,t}}class Dp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=new Xt(re.comparator);function Yi(){return z0}const K0=new Xt(re.comparator);function kc(){return K0}const X0=new Xt(re.comparator);function Y0(){return X0}const Q0=new Vt(re.comparator);function Je(...n){let e=Q0;for(const t of n)e=e.add(t);return e}const J0=new Vt(De);function Pp(){return J0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t){const i=new Map;return i.set(e,Zr.createSynthesizedTargetChangeForCurrentChange(e,t)),new Ja(Ne.min(),i,Pp(),Yi(),Je())}}class Zr{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Zr(zt.EMPTY_BYTE_STRING,t,Je(),Je(),Je())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t,i,s){this.k=e,this.removedTargetIds=t,this.key=i,this.$=s}}class Mp{constructor(e,t){this.targetId=e,this.O=t}}class Fp{constructor(e,t,i=zt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Up{constructor(){this.F=0,this.M=Vp(),this.L=zt.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=Je(),t=Je(),i=Je();return this.M.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:le()}}),new Zr(this.L,this.B,e,t,i)}G(){this.U=!1,this.M=Vp()}H(e,t){this.U=!0,this.M=this.M.insert(e,t)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class Z0{constructor(e){this.tt=e,this.et=new Map,this.nt=Yi(),this.st=xp(),this.it=new Vt(De)}rt(e){for(const t of e.k)e.$&&e.$.isFoundDocument()?this.ot(t,e.$):this.ct(t,e.key,e.$);for(const t of e.removedTargetIds)this.ct(t,e.key,e.$)}at(e){this.forEachTarget(e,t=>{const i=this.ut(t);switch(e.state){case 0:this.ht(t)&&i.j(e.resumeToken);break;case 1:i.X(),i.q||i.G(),i.j(e.resumeToken);break;case 2:i.X(),i.q||this.removeTarget(t);break;case 3:this.ht(t)&&(i.Z(),i.j(e.resumeToken));break;case 4:this.ht(t)&&(this.lt(t),i.j(e.resumeToken));break;default:le()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.et.forEach((i,s)=>{this.ht(s)&&t(s)})}ft(e){const t=e.targetId,i=e.O.count,s=this.dt(t);if(s){const r=s.target;if(Cc(r))if(i===0){const o=new re(r.path);this.ct(t,o,Kt.newNoDocument(o,Ne.min()))}else ze(i===1);else this.wt(t)!==i&&(this.lt(t),this.it=this.it.add(t))}}_t(e){const t=new Map;this.et.forEach((r,o)=>{const a=this.dt(o);if(a){if(r.current&&Cc(a.target)){const l=new re(a.target.path);this.nt.get(l)!==null||this.gt(o,l)||this.ct(o,l,Kt.newNoDocument(l,e))}r.K&&(t.set(o,r.W()),r.G())}});let i=Je();this.st.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.dt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))});const s=new Ja(e,t,this.it,this.nt,i);return this.nt=Yi(),this.st=xp(),this.it=new Vt(De),s}ot(e,t){if(!this.ht(e))return;const i=this.gt(e,t.key)?2:0;this.ut(e).H(t.key,i),this.nt=this.nt.insert(t.key,t),this.st=this.st.insert(t.key,this.yt(t.key).add(e))}ct(e,t,i){if(!this.ht(e))return;const s=this.ut(e);this.gt(e,t)?s.H(t,1):s.J(t),this.st=this.st.insert(t,this.yt(t).delete(e)),i&&(this.nt=this.nt.insert(t,i))}removeTarget(e){this.et.delete(e)}wt(e){const t=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let t=this.et.get(e);return t||(t=new Up,this.et.set(e,t)),t}yt(e){let t=this.st.get(e);return t||(t=new Vt(De),this.st=this.st.insert(e,t)),t}ht(e){const t=this.dt(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}dt(e){const t=this.et.get(e);return t&&t.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new Up),this.tt.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}gt(e,t){return this.tt.getRemoteKeysForTarget(e).has(t)}}function xp(){return new Xt(re.comparator)}function Vp(){return new Xt(re.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),eS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class tS{constructor(e,t){this.databaseId=e,this.D=t}}function $a(n,e){return n.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hp(n,e){return n.D?e.toBase64():e.toUint8Array()}function nS(n,e){return $a(n,e.toTimestamp())}function zn(n){return ze(!!n),Ne.fromTimestamp(function(e){const t=gi(e);return new _n(t.seconds,t.nanos)}(n))}function Nc(n,e){return function(t){return new st(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Bp(n){const e=st.fromString(n);return ze(Kp(e)),e}function Lc(n,e){return Nc(n.databaseId,e.path)}function Oc(n,e){const t=Bp(e);if(t.get(1)!==n.databaseId.projectId)throw new K(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new re(qp(t))}function Dc(n,e){return Nc(n.databaseId,e)}function iS(n){const e=Bp(n);return e.length===4?st.emptyPath():qp(e)}function Pc(n){return new st(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qp(n){return ze(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function jp(n,e,t){return{name:Lc(n,e),fields:t.value.mapValue.fields}}function sS(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,u){return l.D?(ze(u===void 0||typeof u=="string"),zt.fromBase64String(u||"")):(ze(u===void 0||u instanceof Uint8Array),zt.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?N.UNKNOWN:Op(l.code);return new K(u,l.message||"")}(o);t=new Fp(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Oc(n,i.document.name),r=zn(i.document.updateTime),o=new yn({mapValue:{fields:i.document.fields}}),a=Kt.newFoundDocument(s,r,o),l=i.targetIds||[],u=i.removedTargetIds||[];t=new Za(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Oc(n,i.document),r=i.readTime?zn(i.readTime):Ne.min(),o=Kt.newNoDocument(s,r),a=i.removedTargetIds||[];t=new Za([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Oc(n,i.document),r=i.removedTargetIds||[];t=new Za([],r,s,null)}else{if(!("filter"in e))return le();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new W0(s),o=i.targetId;t=new Mp(o,r)}}return t}function rS(n,e){let t;if(e instanceof Ya)t={update:jp(n,e.key,e.value)};else if(e instanceof Rc)t={delete:Lc(n,e.key)};else if(e instanceof Xi)t={update:jp(n,e.key,e.data),updateMask:pS(e.fieldMask)};else{if(!(e instanceof j0))return le();t={verify:Lc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof Yr)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Qr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Jr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof za)return{fieldPath:r.field.canonicalString(),increment:o.C};throw le()}(0,i))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:nS(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:le()}(n,e.precondition)),t}function oS(n,e){return n&&n.length>0?(ze(e!==void 0),n.map(t=>function(i,s){let r=i.updateTime?zn(i.updateTime):zn(s);return r.isEqual(Ne.min())&&(r=zn(s)),new H0(r,i.transformResults||[])}(t,e))):[]}function aS(n,e){return{documents:[Dc(n,e.path)]}}function lS(n,e){const t={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(t.parent=Dc(n,i),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Dc(n,i.popLast()),t.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(a){if(a.length===0)return;const l=a.map(u=>function(c){if(c.op==="=="){if(cp(c.value))return{unaryFilter:{field:Us(c.field),op:"IS_NAN"}};if(up(c.value))return{unaryFilter:{field:Us(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(cp(c.value))return{unaryFilter:{field:Us(c.field),op:"IS_NOT_NAN"}};if(up(c.value))return{unaryFilter:{field:Us(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Us(c.field),op:dS(c.op),value:c.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(t.structuredQuery.where=s);const r=function(a){if(a.length!==0)return a.map(l=>function(u){return{field:Us(u.field),direction:hS(u.dir)}}(l))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=function(a,l){return a.D||Ps(l)?l:{value:l}}(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=Gp(e.startAt)),e.endAt&&(t.structuredQuery.endAt=Gp(e.endAt)),t}function uS(n){let e=iS(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){ze(i===1);const c=t.from[0];c.allDescendants?s=c.collectionId:e=e.child(c.collectionId)}let r=[];t.where&&(r=Wp(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(c=>function(h){return new Fs(xs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;t.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Ps(h)?null:h}(t.limit));let l=null;t.startAt&&(l=zp(t.startAt));let u=null;return t.endAt&&(u=zp(t.endAt)),L0(e,s,o,r,a,"F",l,u)}function cS(n,e){const t=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return le()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function Wp(n){return n?n.unaryFilter!==void 0?[mS(n)]:n.fieldFilter!==void 0?[fS(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>Wp(e)).reduce((e,t)=>e.concat(t)):le():[]}function Gp(n){return{before:n.before,values:n.position}}function zp(n){const e=!!n.before,t=n.values||[];return new Sc(t,e)}function hS(n){return $0[n]}function dS(n){return eS[n]}function Us(n){return{fieldPath:n.canonicalString()}}function xs(n){return ln.fromServerFormat(n.fieldPath)}function fS(n){return un.create(xs(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}function mS(n){switch(n.unaryFilter.op){case"IS_NAN":const e=xs(n.unaryFilter.field);return un.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=xs(n.unaryFilter.field);return un.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xs(n.unaryFilter.field);return un.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=xs(n.unaryFilter.field);return un.create(s,"!=",{nullValue:"NULL_VALUE"});default:return le()}}function pS(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Kp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}const gS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _S{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof j?t:j.resolve(t)}catch(t){return j.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,i)=>{t(e)})}static reject(e){return new j((t,i)=>{i(e)})}static waitFor(e){return new j((t,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&t()},l=>i(l))}),o=!0,r===s&&t()})}static or(e){let t=j.resolve(!1);for(const i of e)t=t.next(s=>s?j.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,r)=>{i.push(t.call(this,s,r))}),this.waitFor(i)}}function $r(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&B0(r,e,i[s])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Ac(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Ac(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const i=e.get(t.key),s=i;this.applyToLocalView(s),i.isValidDocument()||s.convertToNoDocument(Ne.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Je())}isEqual(e){return this.batchId===e.batchId&&Os(this.mutations,e.mutations,(t,i)=>Ap(t,i))&&Os(this.baseMutations,e.baseMutations,(t,i)=>Ap(t,i))}}class Mc{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){ze(e.mutations.length===i.length);let s=Y0();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Mc(e,t,i,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t,i,s,r=Ne.min(),o=Ne.min(),a=zt.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Qi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Qi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Qi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.Wt=e}}function IS(n){const e=uS({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?D0(e,e.limit,"L"):e}/**
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
 */class ES{constructor(){this.Gt=new bS}addToCollectionParentIndex(e,t){return this.Gt.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.Gt.getEntries(t))}}class bS{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Vt(st.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Vt(st.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new Vs(0)}static ie(){return new Vs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==gS)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s!==void 0){for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t])}else this.inner[i]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),!0;return!1}forEach(e){Gi(this.inner,(t,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return rp(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(){this.changes=new to(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:Ne.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:Kt.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?j.resolve(i.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,t,i){this.He=e,this.In=t,this.Ht=i}An(e,t){return this.In.getAllMutationBatchesAffectingDocumentKey(e,t).next(i=>this.Rn(e,t,i))}Rn(e,t,i){return this.He.getEntry(e,t).next(s=>{for(const r of i)r.applyToLocalView(s);return s})}bn(e,t){e.forEach((i,s)=>{for(const r of t)r.applyToLocalView(s)})}Pn(e,t){return this.He.getEntries(e,t).next(i=>this.vn(e,i).next(()=>i))}vn(e,t){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,t).next(i=>this.bn(t,i))}getDocumentsMatchingQuery(e,t,i){return function(s){return re.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.Vn(e,t.path):O0(t)?this.Sn(e,t,i):this.Dn(e,t,i)}Vn(e,t){return this.An(e,new re(t)).next(i=>{let s=kc();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}Sn(e,t,i){const s=t.collectionGroup;let r=kc();return this.Ht.getCollectionParents(e,s).next(o=>j.forEach(o,a=>{const l=function(u,c){return new Kr(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(s));return this.Dn(e,l,i).next(u=>{u.forEach((c,h)=>{r=r.insert(c,h)})})}).next(()=>r))}Dn(e,t,i){let s,r;return this.He.getDocumentsMatchingQuery(e,t,i).next(o=>(s=o,this.In.getAllMutationBatchesAffectingQuery(e,t))).next(o=>(r=o,this.Cn(e,r,s).next(a=>{s=a;for(const l of r)for(const u of l.mutations){const c=u.key;let h=s.get(c);h==null&&(h=Kt.newInvalidDocument(c),s=s.insert(c,h)),Ac(u,h,l.localWriteTime),h.isFoundDocument()||(s=s.remove(c))}}))).next(()=>(s.forEach((o,a)=>{Wa(t,a)||(s=s.remove(o))}),s))}Cn(e,t,i){let s=Je();for(const o of t)for(const a of o.mutations)a instanceof Xi&&i.get(a.key)===null&&(s=s.add(a.key));let r=i;return this.He.getEntries(e,s).next(o=>(o.forEach((a,l)=>{l.isFoundDocument()&&(r=r.insert(a,l))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Nn=i,this.xn=s}static kn(e,t){let i=Je(),s=Je();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Fc(e,t.fromCache,i,s)}}/**
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
 */class CS{$n(e){this.On=e}getDocumentsMatchingQuery(e,t,i,s){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(t)||i.isEqual(Ne.min())?this.Fn(e,t):this.On.Pn(e,s).next(r=>{const o=this.Mn(t,r);return(Ba(t)||qa(t))&&this.Ln(t.limitType,o,s,i)?this.Fn(e,t):(tp()<=Se.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),wc(t)),this.On.getDocumentsMatchingQuery(e,t,i).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}Mn(e,t){let i=new Vt(vp(e));return t.forEach((s,r)=>{Wa(e,r)&&(i=i.add(r))}),i}Ln(e,t,i,s){if(i.size!==t.size)return!0;const r=e==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Fn(e,t){return tp()<=Se.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",wc(t)),this.On.getDocumentsMatchingQuery(e,t,Ne.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,t,i,s){this.persistence=e,this.Bn=t,this.N=s,this.Un=new Xt(De),this.qn=new to(r=>bc(r),Tc),this.Kn=Ne.min(),this.In=e.getMutationQueue(i),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new Xp(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Un))}}function wS(n,e,t,i){return new SS(n,e,t,i)}async function Yp(n,e){const t=ue(n);let i=t.In,s=t.Qn;const r=await t.persistence.runTransaction("Handle user change","readonly",o=>{let a;return t.In.getAllMutationBatches(o).next(l=>(a=l,i=t.persistence.getMutationQueue(e),s=new Xp(t.jn,i,t.persistence.getIndexManager()),i.getAllMutationBatches(o))).next(l=>{const u=[],c=[];let h=Je();for(const d of a){u.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}for(const d of l){c.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}return s.Pn(o,h).next(d=>({Wn:d,removedBatchIds:u,addedBatchIds:c}))})});return t.In=i,t.Qn=s,t.Bn.$n(t.Qn),r}function AS(n,e){const t=ue(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=t.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=j.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(m=>{const p=l.docVersions.get(f);ze(p!==null),m.version.compareTo(p)<0&&(c.applyToRemoteDocument(m,l),m.isValidDocument()&&u.addEntry(m,l.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,c))}(t,i,e,r).next(()=>r.apply(i)).next(()=>t.In.performConsistencyCheck(i)).next(()=>t.Qn.Pn(i,s))})}function Qp(n){const e=ue(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function RS(n,e){const t=ue(n),i=e.snapshotVersion;let s=t.Un;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.jn.newChangeBuffer({trackRemovals:!0});s=t.Un;const a=[];e.targetChanges.forEach((u,c)=>{const h=s.get(c);if(!h)return;a.push(t.ze.removeMatchingKeys(r,u.removedDocuments,c).next(()=>t.ze.addMatchingKeys(r,u.addedDocuments,c)));const d=u.resumeToken;if(d.approximateByteSize()>0){const f=h.withResumeToken(d,i).withSequenceNumber(r.currentSequenceNumber);s=s.insert(c,f),function(m,p,g){return ze(p.resumeToken.approximateByteSize()>0),m.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(h,f,u)&&a.push(t.ze.updateTargetData(r,f))}});let l=Yi();if(e.documentUpdates.forEach((u,c)=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(kS(r,o,e.documentUpdates,i,void 0).next(u=>{l=u})),!i.isEqual(Ne.min())){const u=t.ze.getLastRemoteSnapshotVersion(r).next(c=>t.ze.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return j.waitFor(a).next(()=>o.apply(r)).next(()=>t.Qn.vn(r,l)).next(()=>l)}).then(r=>(t.Un=s,r))}function kS(n,e,t,i,s){let r=Je();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=Yi();return t.forEach((l,u)=>{const c=o.get(l),h=(s==null?void 0:s.get(l))||i;u.isNoDocument()&&u.version.isEqual(Ne.min())?(e.removeEntry(l,h),a=a.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u,h),a=a.insert(l,u)):$("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),a})}function NS(n,e){const t=ue(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.In.getNextMutationBatchAfterBatchId(i,e)))}function LS(n,e){const t=ue(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.ze.getTargetData(i,e).next(r=>r?(s=r,j.resolve(s)):t.ze.allocateTargetId(i).next(o=>(s=new Qi(e,o,0,i.currentSequenceNumber),t.ze.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.Un.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Un=t.Un.insert(i.targetId,i),t.qn.set(e,i.targetId)),i})}async function Uc(n,e,t){const i=ue(n),s=i.Un.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!$r(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Un=i.Un.remove(e),i.qn.delete(s.target)}function Jp(n,e,t){const i=ue(n);let s=Ne.min(),r=Je();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=ue(a),h=c.qn.get(u);return h!==void 0?j.resolve(c.Un.get(h)):c.ze.getTargetData(l,u)}(i,o,Ki(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.ze.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Bn.getDocumentsMatchingQuery(o,e,t?s:Ne.min(),t?r:Je())).next(a=>({documents:a,Gn:r})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return j.resolve(this.Yn.get(t))}saveBundleMetadata(e,t){var i;return this.Yn.set(t.id,{id:(i=t).id,version:i.version,createTime:zn(i.createTime)}),j.resolve()}getNamedQuery(e,t){return j.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(i){return{name:i.name,query:IS(i.bundledQuery),readTime:zn(i.readTime)}}(t)),j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(){this.Zn=new Vt(Nt.ts),this.es=new Vt(Nt.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const i=new Nt(e,t);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.rs(new Nt(e,t))}os(e,t){e.forEach(i=>this.removeReference(i,t))}cs(e){const t=new re(new st([])),i=new Nt(t,e),s=new Nt(t,e+1),r=[];return this.es.forEachInRange([i,s],o=>{this.rs(o),r.push(o.key)}),r}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new re(new st([])),i=new Nt(t,e),s=new Nt(t,e+1);let r=Je();return this.es.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new Nt(e,0),i=this.Zn.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Nt{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return re.comparator(e.key,t.key)||De(e.ls,t.ls)}static ns(e,t){return De(e.ls,t.ls)||re.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,t){this.Ht=e,this.referenceDelegate=t,this.In=[],this.fs=1,this.ds=new Vt(Nt.ts)}checkEmpty(e){return j.resolve(this.In.length===0)}addMutationBatch(e,t,i,s){const r=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new yS(r,t,i,s);this.In.push(o);for(const a of s)this.ds=this.ds.add(new Nt(a.key,r)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,t){return j.resolve(this.ws(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this._s(i),r=s<0?0:s;return j.resolve(this.In.length>r?this.In[r]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return j.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Nt(t,0),s=new Nt(t,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([i,s],o=>{const a=this.ws(o.ls);r.push(a)}),j.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Vt(De);return t.forEach(s=>{const r=new Nt(s,0),o=new Nt(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{i=i.add(a.ls)})}),j.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;re.isDocumentKey(r)||(r=r.child(""));const o=new Nt(new re(r),0);let a=new Vt(De);return this.ds.forEachWhile(l=>{const u=l.key.path;return!!i.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.ls)),!0)},o),j.resolve(this.gs(a))}gs(e){const t=[];return e.forEach(i=>{const s=this.ws(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ze(this.ys(t.batchId,"removed")===0),this.In.shift();let i=this.ds;return j.forEach(t.mutations,s=>{const r=new Nt(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=i})}te(e){}containsKey(e,t){const i=new Nt(t,0),s=this.ds.firstAfterOrEqual(i);return j.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.In.length,j.resolve()}ys(e,t){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const t=this._s(e);return t<0||t>=this.In.length?null:this.In[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,t){this.Ht=e,this.ps=t,this.docs=new Xt(re.comparator),this.size=0}addEntry(e,t,i){const s=t.key,r=this.docs.get(s),o=r?r.size:0,a=this.ps(t);return this.docs=this.docs.insert(s,{document:t.clone(),size:a,readTime:i}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return j.resolve(i?i.document.clone():Kt.newInvalidDocument(t))}getEntries(e,t){let i=Yi();return t.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.clone():Kt.newInvalidDocument(s))}),j.resolve(i)}getDocumentsMatchingQuery(e,t,i){let s=Yi();const r=new re(t.path.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l,readTime:u}}=o.getNext();if(!t.path.isPrefixOf(a.path))break;u.compareTo(i)<=0||Wa(t,l)&&(s=s.insert(l.key,l.clone()))}return j.resolve(s)}Ts(e,t){return j.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new MS(this)}getSize(e){return j.resolve(this.size)}}class MS extends TS{constructor(e){super(),this.Se=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.document.isValidDocument()?t.push(this.Se.addEntry(e,s.document,this.getReadTime(i))):this.Se.removeEntry(i)}),j.waitFor(t)}getFromCache(e,t){return this.Se.getEntry(e,t)}getAllFromCache(e,t){return this.Se.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.persistence=e,this.Es=new to(t=>bc(t),Tc),this.lastRemoteSnapshotVersion=Ne.min(),this.highestTargetId=0,this.Is=0,this.As=new xc,this.targetCount=0,this.Rs=Vs.se()}forEachTarget(e,t){return this.Es.forEach((i,s)=>t(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Is&&(this.Is=t),j.resolve()}ce(e){this.Es.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new Vs(t),this.highestTargetId=t),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.ce(t),j.resolve()}removeTargetData(e,t){return this.Es.delete(t.target),this.As.cs(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=t&&i.get(a.targetId)===null&&(this.Es.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),j.waitFor(r).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){const i=this.Es.get(t)||null;return j.resolve(i)}addMatchingKeys(e,t,i){return this.As.ss(t,i),j.resolve()}removeMatchingKeys(e,t,i){this.As.os(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.As.cs(t),j.resolve()}getMatchingKeysForTargetId(e,t){const i=this.As.hs(t);return j.resolve(i)}containsKey(e,t){return j.resolve(this.As.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,t){this.bs={},this.Le=new _c(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new FS(this),this.Ht=new ES,this.He=function(i,s){return new PS(i,s)}(this.Ht,i=>this.referenceDelegate.Ps(i)),this.N=new vS(t),this.Je=new OS(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new DS(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,t,i){$("MemoryPersistence","Starting transaction:",e);const s=new xS(this.Le.next());return this.referenceDelegate.vs(),i(s).next(r=>this.referenceDelegate.Vs(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ss(e,t){return j.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,t)))}}class xS extends _S{constructor(e){super(),this.currentSequenceNumber=e}}class Vc{constructor(e){this.persistence=e,this.Ds=new xc,this.Cs=null}static Ns(e){return new Vc(e)}get xs(){if(this.Cs)return this.Cs;throw le()}addReference(e,t,i){return this.Ds.addReference(i,t),this.xs.delete(i.toString()),j.resolve()}removeReference(e,t,i){return this.Ds.removeReference(i,t),this.xs.add(i.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),j.resolve()}removeTarget(e,t){this.Ds.cs(t.targetId).forEach(s=>this.xs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.xs.add(r.toString()))}).next(()=>i.removeTargetData(e,t))}vs(){this.Cs=new Set}Vs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.xs,i=>{const s=re.fromPath(i);return this.ks(e,s).next(r=>{r||t.removeEntry(s)})}).next(()=>(this.Cs=null,t.apply(e)))}updateLimboDocument(e,t){return this.ks(e,t).next(i=>{i?this.xs.delete(t.toString()):this.xs.add(t.toString())})}Ps(e){return 0}ks(e,t){return j.or([()=>j.resolve(this.Ds.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ss(e,t)])}}class Zp{constructor(){this.activeTargetIds=Pp()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VS{constructor(){this.yi=new Zp,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,t,i){this.pi[e]=t}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new Zp,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class HS{Ti(e){}shutdown(){}}/**
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
 */class $p{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,t,i,s){const r=this.Bi(e,t);$("RestConnection","Sending: ",r,i);const o={};return this.Ui(o,s),this.qi(e,r,o,i).then(a=>($("RestConnection","Received: ",a),a),a=>{throw np("RestConnection",`${e} failed with error: `,a,"url: ",r,"request:",i),a})}Ki(e,t,i,s){return this.Li(e,t,i,s)}Ui(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+Ls,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const i in t.authHeaders)t.authHeaders.hasOwnProperty(i)&&(e[i]=t.authHeaders[i])}Bi(e,t){const i=BS[e];return`${this.Fi}/v1/${t}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,t,i,s){return new Promise((r,o)=>{const a=new c0;a.listenOnce(a0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case pc.NO_ERROR:const u=a.getResponseJson();$("Connection","XHR received:",JSON.stringify(u)),r(u);break;case pc.TIMEOUT:$("Connection",'RPC "'+e+'" timed out'),o(new K(N.DEADLINE_EXCEEDED,"Request time out"));break;case pc.HTTP_ERROR:const c=a.getStatus();if($("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const m=f.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(m)>=0?m:N.UNKNOWN}(h.status);o(new K(d,h.message))}else o(new K(N.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new K(N.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{$("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);a.send(t,"POST",l,i,15)})}ji(e,t){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=r0(),r=o0(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new u0({})),this.Ui(o.initMessageHeaders,t),jo()||iu()||nE()||Bd()||iE()||Hd()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");$("Connection","Creating WebChannel: "+a,o);const l=s.createWebChannel(a,o);let u=!1,c=!1;const h=new qS({vi:f=>{c?$("Connection","Not sending because WebChannel is closed:",f):(u||($("Connection","Opening WebChannel transport."),l.open(),u=!0),$("Connection","WebChannel sending:",f),l.send(f))},Vi:()=>l.close()}),d=(f,m,p)=>{f.listen(m,g=>{try{p(g)}catch(E){setTimeout(()=>{throw E},0)}})};return d(l,Fa.EventType.OPEN,()=>{c||$("Connection","WebChannel transport opened.")}),d(l,Fa.EventType.CLOSE,()=>{c||(c=!0,$("Connection","WebChannel transport closed"),h.$i())}),d(l,Fa.EventType.ERROR,f=>{c||(c=!0,np("Connection","WebChannel transport errored:",f),h.$i(new K(N.UNAVAILABLE,"The operation could not be completed")))}),d(l,Fa.EventType.MESSAGE,f=>{var m;if(!c){const p=f.data[0];ze(!!p);const g=p,E=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(E){$("Connection","WebChannel received error:",E);const S=E.status;let b=function(V){const w=yt[V];if(w!==void 0)return Op(w)}(S),C=E.message;b===void 0&&(b=N.INTERNAL,C="Unknown error status: "+S+" with message "+E.message),c=!0,h.$i(new K(b,C)),l.close()}else $("Connection","WebChannel received:",p),h.Oi(p)}}),d(r,l0.STAT_EVENT,f=>{f.stat===$m.PROXY?$("Connection","Detected buffering proxy"):f.stat===$m.NOPROXY&&$("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function Hc(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n){return new tS(n,!0)}class eg{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Oe=e,this.timerId=t,this.Qi=i,this.Wi=s,this.Gi=r,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const t=Math.floor(this.zi+this.Zi()),i=Math.max(0,Date.now()-this.Ji),s=Math.max(0,t-i);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,t,i,s,r,o,a){this.Oe=e,this.er=i,this.nr=s,this.sr=r,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new eg(e,t)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(pi(t.toString()),pi("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(t)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),t=this.ir;this.credentialsProvider.getToken().then(i=>{this.ir===t&&this.Er(i)},i=>{e(()=>{const s=new K(N.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Ir(s)})})}Er(e){const t=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{t(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(i=>{t(()=>this.Ir(i))}),this.stream.onMessage(i=>{t(()=>this.onMessage(i))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return t=>{this.Oe.enqueueAndForget(()=>this.ir===e?t():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WS extends tg{constructor(e,t,i,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,r),this.N=s}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const t=sS(this.N,e),i=function(s){if(!("targetChange"in s))return Ne.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?Ne.min():r.readTime?zn(r.readTime):Ne.min()}(e);return this.listener.Rr(t,i)}br(e){const t={};t.database=Pc(this.N),t.addTarget=function(s,r){let o;const a=r.target;return o=Cc(a)?{documents:aS(s,a)}:{query:lS(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Hp(s,r.resumeToken):r.snapshotVersion.compareTo(Ne.min())>0&&(o.readTime=$a(s,r.snapshotVersion.toTimestamp())),o}(this.N,e);const i=cS(this.N,e);i&&(t.labels=i),this.mr(t)}Pr(e){const t={};t.database=Pc(this.N),t.removeTarget=e,this.mr(t)}}class GS extends tg{constructor(e,t,i,s,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,r),this.N=s,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(ze(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const t=oS(e.writeResults,e.commitTime),i=zn(e.commitTime);return this.listener.Dr(i,t)}return ze(!e.writeResults||e.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=Pc(this.N),this.mr(e)}Sr(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>rS(this.N,i))};this.mr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS extends class{}{constructor(e,t,i){super(),this.credentials=e,this.sr=t,this.N=i,this.kr=!1}$r(){if(this.kr)throw new K(N.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,t,i){return this.$r(),this.credentials.getToken().then(s=>this.sr.Li(e,t,i,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new K(N.UNKNOWN,s.toString())})}Ki(e,t,i){return this.$r(),this.credentials.getToken().then(s=>this.sr.Ki(e,t,i,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new K(N.UNKNOWN,s.toString())})}terminate(){this.kr=!0}}class KS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(pi(t),this.Mr=!1):$("OnlineStateTracker",t)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=r,this.zr.Ti(o=>{i.enqueueAndForget(async()=>{Ji(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ue(a);l.Wr.add(4),await no(l),l.Hr.set("Unknown"),l.Wr.delete(4),await tl(l)}(this))})}),this.Hr=new KS(i,s)}}async function tl(n){if(Ji(n))for(const e of n.Gr)await e(!0)}async function no(n){for(const e of n.Gr)await e(!1)}function ng(n,e){const t=ue(n);t.Qr.has(e.targetId)||(t.Qr.set(e.targetId,e),jc(t)?qc(t):Hs(t).hr()&&Bc(t,e))}function ig(n,e){const t=ue(n),i=Hs(t);t.Qr.delete(e),i.hr()&&sg(t,e),t.Qr.size===0&&(i.hr()?i.wr():Ji(t)&&t.Hr.set("Unknown"))}function Bc(n,e){n.Jr.Y(e.targetId),Hs(n).br(e)}function sg(n,e){n.Jr.Y(e),Hs(n).Pr(e)}function qc(n){n.Jr=new Z0({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>n.Qr.get(e)||null}),Hs(n).start(),n.Hr.Lr()}function jc(n){return Ji(n)&&!Hs(n).ur()&&n.Qr.size>0}function Ji(n){return ue(n).Wr.size===0}function rg(n){n.Jr=void 0}async function YS(n){n.Qr.forEach((e,t)=>{Bc(n,e)})}async function QS(n,e){rg(n),jc(n)?(n.Hr.qr(e),qc(n)):n.Hr.set("Unknown")}async function JS(n,e,t){if(n.Hr.set("Online"),e instanceof Fp&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.Qr.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.Qr.delete(o),i.Jr.removeTarget(o))}(n,e)}catch(i){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await nl(n,i)}else if(e instanceof Za?n.Jr.rt(e):e instanceof Mp?n.Jr.ft(e):n.Jr.at(e),!t.isEqual(Ne.min()))try{const i=await Qp(n.localStore);t.compareTo(i)>=0&&await function(s,r){const o=s.Jr._t(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.Qr.get(l);u&&s.Qr.set(l,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=s.Qr.get(a);if(!l)return;s.Qr.set(a,l.withResumeToken(zt.EMPTY_BYTE_STRING,l.snapshotVersion)),sg(s,a);const u=new Qi(l.target,a,1,l.sequenceNumber);Bc(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(i){$("RemoteStore","Failed to raise snapshot:",i),await nl(n,i)}}async function nl(n,e,t){if(!$r(e))throw e;n.Wr.add(1),await no(n),n.Hr.set("Offline"),t||(t=()=>Qp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await t(),n.Wr.delete(1),await tl(n)})}function og(n,e){return e().catch(t=>nl(n,t,e))}async function il(n){const e=ue(n),t=_i(e);let i=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;ZS(e);)try{const s=await NS(e.localStore,i);if(s===null){e.jr.length===0&&t.wr();break}i=s.batchId,$S(e,s)}catch(s){await nl(e,s)}ag(e)&&lg(e)}function ZS(n){return Ji(n)&&n.jr.length<10}function $S(n,e){n.jr.push(e);const t=_i(n);t.hr()&&t.Vr&&t.Sr(e.mutations)}function ag(n){return Ji(n)&&!_i(n).ur()&&n.jr.length>0}function lg(n){_i(n).start()}async function ew(n){_i(n).Nr()}async function tw(n){const e=_i(n);for(const t of n.jr)e.Sr(t.mutations)}async function nw(n,e,t){const i=n.jr.shift(),s=Mc.from(i,e,t);await og(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await il(n)}async function iw(n,e){e&&_i(n).Vr&&await async function(t,i){if(s=i.code,G0(s)&&s!==N.ABORTED){const r=t.jr.shift();_i(t).dr(),await og(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,i)),await il(t)}var s}(n,e),ag(n)&&lg(n)}async function sw(n,e){const t=ue(n);e?(t.Wr.delete(2),await tl(t)):e||(t.Wr.add(2),await no(t),t.Hr.set("Unknown"))}function Hs(n){return n.Yr||(n.Yr=function(e,t,i){const s=ue(e);return s.$r(),new WS(t,s.sr,s.credentials,s.N,i)}(n.datastore,n.asyncQueue,{Si:YS.bind(null,n),Ci:QS.bind(null,n),Rr:JS.bind(null,n)}),n.Gr.push(async e=>{e?(n.Yr.dr(),jc(n)?qc(n):n.Hr.set("Unknown")):(await n.Yr.stop(),rg(n))})),n.Yr}function _i(n){return n.Xr||(n.Xr=function(e,t,i){const s=ue(e);return s.$r(),new GS(t,s.sr,s.credentials,s.N,i)}(n.datastore,n.asyncQueue,{Si:ew.bind(null,n),Ci:iw.bind(null,n),Cr:tw.bind(null,n),Dr:nw.bind(null,n)}),n.Gr.push(async e=>{e?(n.Xr.dr(),await il(n)):(await n.Xr.stop(),n.jr.length>0&&($("RemoteStore",`Stopping write stream with ${n.jr.length} pending writes`),n.jr=[]))})),n.Xr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,a=new Wc(e,t,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gc(n,e){if(pi("AsyncQueue",`${e}: ${n}`),$r(n))return new K(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.comparator=e?(t,i)=>e(t,i)||re.comparator(t.key,i.key):(t,i)=>re.comparator(t.key,i.key),this.keyedMap=kc(),this.sortedSet=new Xt(this.comparator)}static emptySet(e){return new Bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Bs;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(){this.Zr=new Xt(re.comparator)}track(e){const t=e.doc.key,i=this.Zr.get(t);i?e.type!==0&&i.type===3?this.Zr=this.Zr.insert(t,e):e.type===3&&i.type!==1?this.Zr=this.Zr.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Zr=this.Zr.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Zr=this.Zr.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Zr=this.Zr.remove(t):e.type===1&&i.type===2?this.Zr=this.Zr.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Zr=this.Zr.insert(t,{type:2,doc:e.doc}):le():this.Zr=this.Zr.insert(t,e)}eo(){const e=[];return this.Zr.inorderTraversal((t,i)=>{e.push(i)}),e}}class qs{constructor(e,t,i,s,r,o,a,l){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,t,i,s){const r=[];return t.forEach(o=>{r.push({type:0,doc:o})}),new qs(e,t,Bs.emptySet(t),r,i,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ja(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(){this.no=void 0,this.listeners=[]}}class ow{constructor(){this.queries=new to(e=>yp(e),ja),this.onlineState="Unknown",this.so=new Set}}async function zc(n,e){const t=ue(n),i=e.query;let s=!1,r=t.queries.get(i);if(r||(s=!0,r=new rw),s)try{r.no=await t.onListen(i)}catch(o){const a=Gc(o,`Initialization of query '${wc(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,r),r.listeners.push(e),e.io(t.onlineState),r.no&&e.ro(r.no)&&Xc(t)}async function Kc(n,e){const t=ue(n),i=e.query;let s=!1;const r=t.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return t.queries.delete(i),t.onUnlisten(i)}function aw(n,e){const t=ue(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.ro(s)&&(i=!0);o.no=s}}i&&Xc(t)}function lw(n,e,t){const i=ue(n),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(t);i.queries.delete(e)}function Xc(n){n.so.forEach(e=>{e.next()})}class Yc{constructor(e,t,i){this.query=e,this.oo=t,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=i||{}}ro(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new qs(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.co?this.uo(e)&&(this.oo.next(e),t=!0):this.ho(e,this.onlineState)&&(this.lo(e),t=!0),this.ao=e,t}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let t=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),t=!0),t}ho(e,t){if(!e.fromCache)return!0;const i=t!=="Offline";return(!this.options.fo||!i)&&(!e.docs.isEmpty()||t==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const t=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}lo(e){e=qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e){this.key=e}}class hg{constructor(e){this.key=e}}class uw{constructor(e,t){this.query=e,this.po=t,this.To=null,this.current=!1,this.Eo=Je(),this.mutatedKeys=Je(),this.Io=vp(e),this.Ao=new Bs(this.Io)}get Ro(){return this.po}bo(e,t){const i=t?t.Po:new ug,s=t?t.Ao:this.Ao;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=Ba(this.query)&&s.size===this.query.limit?s.last():null,u=qa(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((c,h)=>{const d=s.get(c),f=Wa(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),p=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let g=!1;d&&f?d.data.isEqual(f.data)?m!==p&&(i.track({type:3,doc:f}),g=!0):this.vo(d,f)||(i.track({type:2,doc:f}),g=!0,(l&&this.Io(f,l)>0||u&&this.Io(f,u)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),g=!0):d&&!f&&(i.track({type:1,doc:d}),g=!0,(l||u)&&(a=!0)),g&&(f?(o=o.add(f),r=p?r.add(c):r.delete(c)):(o=o.delete(c),r=r.delete(c)))}),Ba(this.query)||qa(this.query))for(;o.size>this.query.limit;){const c=Ba(this.query)?o.last():o.first();o=o.delete(c.key),r=r.delete(c.key),i.track({type:1,doc:c})}return{Ao:o,Po:i,Ln:a,mutatedKeys:r}}vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i){const s=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const r=e.Po.eo();r.sort((u,c)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return f(h)-f(d)}(u.type,c.type)||this.Io(u.doc,c.doc)),this.Vo(i);const o=t?this.So():[],a=this.Eo.size===0&&this.current?1:0,l=a!==this.To;return this.To=a,r.length!==0||l?{snapshot:new qs(this.query,e.Ao,s,r,e.mutatedKeys,a===0,l,!1),Do:o}:{Do:o}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new ug,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(t=>this.po=this.po.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.po=this.po.delete(t)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=Je(),this.Ao.forEach(i=>{this.Co(i.key)&&(this.Eo=this.Eo.add(i.key))});const t=[];return e.forEach(i=>{this.Eo.has(i)||t.push(new hg(i))}),this.Eo.forEach(i=>{e.has(i)||t.push(new cg(i))}),t}No(e){this.po=e.Gn,this.Eo=Je();const t=this.bo(e.documents);return this.applyChanges(t,!0)}xo(){return qs.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class cw{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class hw{constructor(e){this.key=e,this.ko=!1}}class dw{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new to(a=>yp(a),ja),this.Fo=new Map,this.Mo=new Set,this.Lo=new Xt(re.comparator),this.Bo=new Map,this.Uo=new xc,this.qo={},this.Ko=new Map,this.jo=Vs.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function fw(n,e){const t=Tw(n);let i,s;const r=t.Oo.get(e);if(r)i=r.targetId,t.sharedClientState.addLocalQueryTarget(i),s=r.view.xo();else{const o=await LS(t.localStore,Ki(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await mw(t,e,i,a==="current"),t.isPrimaryClient&&ng(t.remoteStore,o)}return s}async function mw(n,e,t,i){n.Wo=(c,h,d)=>async function(f,m,p,g){let E=m.view.bo(p);E.Ln&&(E=await Jp(f.localStore,m.query,!1).then(({documents:C})=>m.view.bo(C,E)));const S=g&&g.targetChanges.get(m.targetId),b=m.view.applyChanges(E,f.isPrimaryClient,S);return _g(f,m.targetId,b.Do),b.snapshot}(n,c,h,d);const s=await Jp(n.localStore,e,!0),r=new uw(e,s.Gn),o=r.bo(s.documents),a=Zr.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline"),l=r.applyChanges(o,n.isPrimaryClient,a);_g(n,t,l.Do);const u=new cw(e,t,r);return n.Oo.set(e,u),n.Fo.has(t)?n.Fo.get(t).push(e):n.Fo.set(t,[e]),l.snapshot}async function pw(n,e){const t=ue(n),i=t.Oo.get(e),s=t.Fo.get(i.targetId);if(s.length>1)return t.Fo.set(i.targetId,s.filter(r=>!ja(r,e))),void t.Oo.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(i.targetId),t.sharedClientState.isActiveQueryTarget(i.targetId)||await Uc(t.localStore,i.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(i.targetId),ig(t.remoteStore,i.targetId),Qc(t,i.targetId)}).catch(eo)):(Qc(t,i.targetId),await Uc(t.localStore,i.targetId,!0))}async function gw(n,e,t){const i=Cw(n);try{const s=await function(r,o){const a=ue(r),l=_n.now(),u=o.reduce((h,d)=>h.add(d.key),Je());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,u).next(d=>{c=d;const f=[];for(const m of o){const p=q0(m,c.get(m.key));p!=null&&f.push(new Xi(m.key,p,hp(p.value.mapValue),Rn.exists(!0)))}return a.In.addMutationBatch(h,l,f,o)})).then(h=>(h.applyToLocalDocumentSet(c),{batchId:h.batchId,changes:c}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.qo[r.currentUser.toKey()];l||(l=new Xt(De)),l=l.insert(o,a),r.qo[r.currentUser.toKey()]=l}(i,s.batchId,t),await io(i,s.changes),await il(i.remoteStore)}catch(s){const r=Gc(s,"Failed to persist write");t.reject(r)}}async function dg(n,e){const t=ue(n);try{const i=await RS(t.localStore,e);e.targetChanges.forEach((s,r)=>{const o=t.Bo.get(r);o&&(ze(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ko=!0:s.modifiedDocuments.size>0?ze(o.ko):s.removedDocuments.size>0&&(ze(o.ko),o.ko=!1))}),await io(t,i,e)}catch(i){await eo(i)}}function fg(n,e,t){const i=ue(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Oo.forEach((r,o)=>{const a=o.view.io(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=ue(r);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.io(o)&&(l=!0)}),l&&Xc(a)}(i.eventManager,e),s.length&&i.$o.Rr(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function _w(n,e,t){const i=ue(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Bo.get(e),r=s&&s.key;if(r){let o=new Xt(re.comparator);o=o.insert(r,Kt.newNoDocument(r,Ne.min()));const a=Je().add(r),l=new Ja(Ne.min(),new Map,new Vt(De),o,a);await dg(i,l),i.Lo=i.Lo.remove(r),i.Bo.delete(e),Jc(i)}else await Uc(i.localStore,e,!1).then(()=>Qc(i,e,t)).catch(eo)}async function yw(n,e){const t=ue(n),i=e.batch.batchId;try{const s=await AS(t.localStore,e);pg(t,i,null),mg(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await io(t,s)}catch(s){await eo(s)}}async function vw(n,e,t){const i=ue(n);try{const s=await function(r,o){const a=ue(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.In.lookupMutationBatch(l,o).next(c=>(ze(c!==null),u=c.keys(),a.In.removeMutationBatch(l,c))).next(()=>a.In.performConsistencyCheck(l)).next(()=>a.Qn.Pn(l,u))})}(i.localStore,e);pg(i,e,t),mg(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await io(i,s)}catch(s){await eo(s)}}function mg(n,e){(n.Ko.get(e)||[]).forEach(t=>{t.resolve()}),n.Ko.delete(e)}function pg(n,e,t){const i=ue(n);let s=i.qo[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.qo[i.currentUser.toKey()]=s}}function Qc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Fo.get(e))n.Oo.delete(i),t&&n.$o.Go(i,t);n.Fo.delete(e),n.isPrimaryClient&&n.Uo.cs(e).forEach(i=>{n.Uo.containsKey(i)||gg(n,i)})}function gg(n,e){n.Mo.delete(e.path.canonicalString());const t=n.Lo.get(e);t!==null&&(ig(n.remoteStore,t),n.Lo=n.Lo.remove(e),n.Bo.delete(t),Jc(n))}function _g(n,e,t){for(const i of t)i instanceof cg?(n.Uo.addReference(i.key,e),Iw(n,i)):i instanceof hg?($("SyncEngine","Document no longer in limbo: "+i.key),n.Uo.removeReference(i.key,e),n.Uo.containsKey(i.key)||gg(n,i.key)):le()}function Iw(n,e){const t=e.key,i=t.path.canonicalString();n.Lo.get(t)||n.Mo.has(i)||($("SyncEngine","New document in limbo: "+t),n.Mo.add(i),Jc(n))}function Jc(n){for(;n.Mo.size>0&&n.Lo.size<n.maxConcurrentLimboResolutions;){const e=n.Mo.values().next().value;n.Mo.delete(e);const t=new re(st.fromString(e)),i=n.jo.next();n.Bo.set(i,new hw(t)),n.Lo=n.Lo.insert(t,i),ng(n.remoteStore,new Qi(Ki(Ha(t.path)),i,2,_c.T))}}async function io(n,e,t){const i=ue(n),s=[],r=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach((a,l)=>{o.push(i.Wo(l,e,t).then(u=>{if(u){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),s.push(u);const c=Fc.kn(l.targetId,u);r.push(c)}}))}),await Promise.all(o),i.$o.Rr(s),await async function(a,l){const u=ue(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>j.forEach(l,h=>j.forEach(h.Nn,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>j.forEach(h.xn,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!$r(c))throw c;$("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Un.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);u.Un=u.Un.insert(h,m)}}}(i.localStore,r))}async function Ew(n,e){const t=ue(n);if(!t.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const i=await Yp(t.localStore,e);t.currentUser=e,function(s,r){s.Ko.forEach(o=>{o.forEach(a=>{a.reject(new K(N.CANCELLED,r))})}),s.Ko.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await io(t,i.Wn)}}function bw(n,e){const t=ue(n),i=t.Bo.get(e);if(i&&i.ko)return Je().add(i.key);{let s=Je();const r=t.Fo.get(e);if(!r)return s;for(const o of r){const a=t.Oo.get(o);s=s.unionWith(a.view.Ro)}return s}}function Tw(n){const e=ue(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=dg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_w.bind(null,e),e.$o.Rr=aw.bind(null,e.eventManager),e.$o.Go=lw.bind(null,e.eventManager),e}function Cw(n){const e=ue(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vw.bind(null,e),e}class Sw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=el(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return wS(this.persistence,new CS,e.initialUser,this.N)}Jo(e){return new US(Vc.Ns,this.N)}Ho(e){return new VS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ww{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>fg(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ew.bind(null,this.syncEngine),await sw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ow}createDatastore(e){const t=el(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new jS(s));var s;return function(r,o,a){return new zS(r,o,a)}(e.credentials,i,t)}createRemoteStore(e){return t=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>fg(this.syncEngine,a,0),o=$p.bt()?new $p:new HS,new XS(t,i,s,r,o);var t,i,s,r,o}createSyncEngine(e,t){return function(i,s,r,o,a,l,u){const c=new dw(i,s,r,o,a,l);return u&&(c.Qo=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=ue(e);$("RemoteStore","RemoteStore shutting down."),t.Wr.add(5),await no(t),t.zr.shutdown(),t.Hr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,t,i){this.credentials=e,this.asyncQueue=t,this.databaseInfo=i,this.user=an.UNAUTHENTICATED,this.clientId=ip.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(t,async s=>{$("FirestoreClient","Received user=",s.uid),await this.credentialListener(s),this.user=s})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(t){const i=Gc(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Rw(n,e){n.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Yp(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function kw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Nw(n);$("FirestoreClient","Initializing OnlineComponentProvider");const i=await n.getConfiguration();await e.initialize(t,i),n.setCredentialChangeListener(s=>async function(r,o){const a=ue(r);a.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const l=Ji(a);a.Wr.add(3),await no(a),l&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await tl(a)}(e.remoteStore,s)),n.onlineComponents=e}async function Nw(n){return n.offlineComponents||($("FirestoreClient","Using default OfflineComponentProvider"),await Rw(n,new Sw)),n.offlineComponents}async function yg(n){return n.onlineComponents||($("FirestoreClient","Using default OnlineComponentProvider"),await kw(n,new ww)),n.onlineComponents}function Lw(n){return yg(n).then(e=>e.syncEngine)}async function sl(n){const e=await yg(n),t=e.eventManager;return t.onListen=fw.bind(null,e.syncEngine),t.onUnlisten=pw.bind(null,e.syncEngine),t}function Ow(n,e,t={}){const i=new Gn;return n.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const u=new Zc({next:h=>{r.enqueueAndForget(()=>Kc(s,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new K(N.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new K(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Yc(Ha(o.path),u,{includeMetadataChanges:!0,fo:!0});return zc(s,c)}(await sl(n),n.asyncQueue,e,t,i)),i.promise}function Dw(n,e,t={}){const i=new Gn;return n.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const u=new Zc({next:h=>{r.enqueueAndForget(()=>Kc(s,c)),h.fromCache&&a.source==="server"?l.reject(new K(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Yc(o,u,{includeMetadataChanges:!0,fo:!0});return zc(s,c)}(await sl(n),n.asyncQueue,e,t,i)),i.promise}class Pw{constructor(e,t,i,s,r,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class so{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof so&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(n,e,t){if(!t)throw new K(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Mw(n,e,t,i){if(e===!0&&i===!0)throw new K(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Eg(n){if(!re.isDocumentKey(n))throw new K(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bg(n){if(re.isDocumentKey(n))throw new K(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function $c(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":le()}function vn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$c(n);throw new K(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new K(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Mw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tg({}),this._settingsFrozen=!1,e instanceof so?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new K(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new so(i.options.projectId)}(e))}get app(){if(!this._app)throw new K(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tg(e),e.credentials!==void 0&&(this._credentials=function(t){if(!t)return new d0;switch(t.type){case"gapi":const i=t.client;return ze(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new p0(i,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new K(N.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=vg.get(e);t&&($("ComponentProvider","Removing Datastore"),vg.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tn(this.firestore,e,this._key)}}class js{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new js(this.firestore,e,this._query)}}class yi extends js{constructor(e,t,i){super(e,t,Ha(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tn(this.firestore,null,new re(e))}withConverter(e){return new yi(this.firestore,e,this._path)}}function LD(n,e,...t){if(n=Ge(n),Ig("collection","path",e),n instanceof eh){const i=st.fromString(e,...t);return bg(i),new yi(n,null,i)}{if(!(n instanceof tn||n instanceof yi))throw new K(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(st.fromString(e,...t));return bg(i),new yi(n.firestore,null,i)}}function OD(n,e,...t){if(n=Ge(n),arguments.length===1&&(e=ip.I()),Ig("doc","path",e),n instanceof eh){const i=st.fromString(e,...t);return Eg(i),new tn(n,null,new re(i))}{if(!(n instanceof tn||n instanceof yi))throw new K(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(st.fromString(e,...t));return Eg(i),new tn(n.firestore,n instanceof yi?n.converter:null,new re(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new eg(this,"async_queue_retry"),this.Rc=()=>{const t=Hc();t&&$("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ar.tr()};const e=Hc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const t=Hc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const t=new Gn;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!$r(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const t=this._c.then(()=>(this.Ec=!0,e().catch(i=>{this.Tc=i,this.Ec=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw pi("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ec=!1,i))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.bc(),this.Ac.indexOf(e)>-1&&(t=0);const s=Wc.createAndSchedule(this,e,t,i,r=>this.Vc(r));return this.yc.push(s),s}bc(){this.Tc&&le()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const t of this.yc)if(t.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.yc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const t=this.yc.indexOf(e);this.yc.splice(t,1)}}function Cg(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of t)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Kn extends eh{constructor(e,t){super(e,t),this.type="firestore",this._queue=new Fw,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Sg(this),this._firestoreClient.terminate()}}function DD(n=Jo()){return pr(n,"firestore").getImmediate()}function ro(n){return n._firestoreClient||Sg(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Sg(n){var e;const t=n._freezeSettings(),i=function(s,r,o,a){return new Pw(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new Aw(n._credentials,n._queue,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class oo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ln(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ws(zt.fromBase64String(e))}catch(t){throw new K(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ws(zt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=/^__.*__$/;class xw{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Xi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ya(e,this.data,t,this.fieldTransforms)}}class wg{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Xi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ag(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class nh{constructor(e,t,i,s,r,o){this.settings=e,this.databaseId=t,this.N=i,this.ignoreUndefinedProperties=s,r===void 0&&this.xc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new nh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.$c({path:i,Fc:!1});return s.Mc(e),s}Lc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.$c({path:i,Fc:!1});return s.xc(),s}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return al(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(e.length===0)throw this.Uc("Document fields must not be empty");if(Ag(this.kc)&&Uw.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class Vw{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.N=i||el(e)}jc(e,t,i,s=!1){return new nh({kc:e,methodName:t,Kc:i,path:ln.emptyPath(),Fc:!1,qc:s},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function ih(n){const e=n._freezeSettings(),t=el(n._databaseId);return new Vw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Rg(n,e,t,i,s,r={}){const o=n.jc(r.merge||r.mergeFields?2:0,e,t,s);rh("Data must be an object, but it was:",o,i);const a=Lg(i,o);let l,u;if(r.merge)l=new jr(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const c=[];for(const h of r.mergeFields){const d=oh(e,h,t);if(!o.contains(d))throw new K(N.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Dg(c,d)||c.push(d)}l=new jr(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new xw(new yn(a),l,u)}class ao extends rl{_toFieldTransform(e){if(e.kc!==2)throw e.kc===1?e.Uc(`${this._methodName}() can only appear at the top level of your update data`):e.Uc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ao}}class sh extends rl{_toFieldTransform(e){return new x0(e.path,new Yr)}isEqual(e){return e instanceof sh}}function kg(n,e,t,i){const s=n.jc(1,e,t);rh("Data must be an object, but it was:",s,i);const r=[],o=yn.empty();Gi(i,(l,u)=>{const c=ah(e,l,t);u=Ge(u);const h=s.Lc(c);if(u instanceof ao)r.push(c);else{const d=ol(u,h);d!=null&&(r.push(c),o.set(c,d))}});const a=new jr(r);return new wg(o,a,s.fieldTransforms)}function Ng(n,e,t,i,s,r){const o=n.jc(1,e,t),a=[oh(e,i,t)],l=[s];if(r.length%2!=0)throw new K(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(oh(e,r[d])),l.push(r[d+1]);const u=[],c=yn.empty();for(let d=a.length-1;d>=0;--d)if(!Dg(u,a[d])){const f=a[d];let m=l[d];m=Ge(m);const p=o.Lc(f);if(m instanceof ao)u.push(f);else{const g=ol(m,p);g!=null&&(u.push(f),c.set(f,g))}}const h=new jr(u);return new wg(c,h,o.fieldTransforms)}function ol(n,e){if(Og(n=Ge(n)))return rh("Unsupported field value:",e,n),Lg(n,e);if(n instanceof rl)return function(t,i){if(!Ag(i.kc))throw i.Uc(`${t._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Uc(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Fc&&e.kc!==4)throw e.Uc("Nested arrays are not supported");return function(t,i){const s=[];let r=0;for(const o of t){let a=ol(o,i.Bc(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(n,e)}return function(t,i){if((t=Ge(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return M0(i.N,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=_n.fromDate(t);return{timestampValue:$a(i.N,s)}}if(t instanceof _n){const s=new _n(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:$a(i.N,s)}}if(t instanceof th)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ws)return{bytesValue:Hp(i.N,t._byteString)};if(t instanceof tn){const s=i.databaseId,r=t.firestore._databaseId;if(!r.isEqual(s))throw i.Uc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Nc(t.firestore._databaseId||i.databaseId,t._key.path)}}throw i.Uc(`Unsupported field value: ${$c(t)}`)}(n,e)}function Lg(n,e){const t={};return rp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gi(n,(i,s)=>{const r=ol(s,e.Oc(i));r!=null&&(t[i]=r)}),{mapValue:{fields:t}}}function Og(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _n||n instanceof th||n instanceof Ws||n instanceof tn||n instanceof rl)}function rh(n,e,t){if(!Og(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const i=$c(t);throw i==="an object"?e.Uc(n+" a custom object"):e.Uc(n+" "+i)}}function oh(n,e,t){if((e=Ge(e))instanceof oo)return e._internalPath;if(typeof e=="string")return ah(n,e);throw al("Field path arguments must be of type string or FieldPath.",n,!1,void 0,t)}const Hw=new RegExp("[~\\*/\\[\\]]");function ah(n,e,t){if(e.search(Hw)>=0)throw al(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new oo(...e.split("."))._internalPath}catch{throw al(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function al(n,e,t,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new K(N.INVALID_ARGUMENT,a+n+l)}function Dg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new tn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Bw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(lh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Bw extends Pg{data(){return super.data()}}function lh(n,e){return typeof e=="string"?ah(n,e):e instanceof oo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mg extends Pg{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ll(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(lh("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class ll extends Mg{data(e={}){return super.data(e)}}class Fg{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new lo(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new ll(this._firestore,this._userDataWriter,i.key,i,new lo(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>({type:"added",doc:new ll(i._firestore,i._userDataWriter,o.doc.key,o.doc,new lo(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:r++}))}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new ll(i._firestore,i._userDataWriter,o.doc.key,o.doc,new lo(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:qw(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function qw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(n){if(qa(n)&&n.explicitOrderBy.length===0)throw new K(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jw{}function PD(n,...e){for(const t of e)n=t._apply(n);return n}class Ww extends jw{constructor(e,t){super(),this.Gc=e,this.Jc=t,this.type="orderBy"}_apply(e){const t=function(i,s,r){if(i.startAt!==null)throw new K(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new K(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Fs(s,r);return function(a,l){if(gp(a)===null){const u=_p(a);u!==null&&Gw(a,u,l.field)}}(i,o),o}(e._query,this.Gc,this.Jc);return new js(e.firestore,e.converter,function(i,s){const r=i.explicitOrderBy.concat([s]);return new Kr(i.path,i.collectionGroup,r,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function MD(n,e="asc"){const t=e,i=lh("orderBy",n);return new Ww(i,t)}function Gw(n,e,t){if(!t.isEqual(e))throw new K(N.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{convertValue(e,t="none"){switch(zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _t(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw le()}}convertObject(e,t){const i={};return Gi(e.fields,(s,r)=>{i[s]=this.convertValue(r,t)}),i}convertGeoPoint(e){return new th(_t(e.latitude),_t(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=ap(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Wr(e));default:return null}}convertTimestamp(e){const t=gi(e);return new _n(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=st.fromString(e);ze(Kp(i));const s=new so(i.get(1),i.get(3)),r=new re(i.popFirst(5));return s.isEqual(t)||pi(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ih(e)}set(e,t,i){this._verifyNotCommitted();const s=uh(e,this._firestore),r=xg(s.converter,t,i),o=Rg(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(o.toMutation(s._key,Rn.none())),this}update(e,t,i,...s){this._verifyNotCommitted();const r=uh(e,this._firestore);let o;return o=typeof(t=Ge(t))=="string"||t instanceof oo?Ng(this._dataReader,"WriteBatch.update",r._key,t,i,s):kg(this._dataReader,"WriteBatch.update",r._key,t),this._mutations.push(o.toMutation(r._key,Rn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=uh(e,this._firestore);return this._mutations=this._mutations.concat(new Rc(t._key,Rn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new K(N.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function uh(n,e){if((n=Ge(n)).firestore!==e)throw new K(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function FD(n){n=vn(n,tn);const e=vn(n.firestore,Kn);return Ow(ro(e),n._key).then(t=>Vg(e,n,t))}class ch extends zw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ws(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new tn(this.firestore,null,t)}}function UD(n){n=vn(n,js);const e=vn(n.firestore,Kn),t=ro(e),i=new ch(e);return Ug(n._query),Dw(t,n._query).then(s=>new Fg(e,i,n,s))}function xD(n,e,t){n=vn(n,tn);const i=vn(n.firestore,Kn),s=xg(n.converter,e,t);return ul(i,[Rg(ih(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Rn.none())])}function VD(n,e,t,...i){n=vn(n,tn);const s=vn(n.firestore,Kn),r=ih(s);let o;return o=typeof(e=Ge(e))=="string"||e instanceof oo?Ng(r,"updateDoc",n._key,e,t,i):kg(r,"updateDoc",n._key,e),ul(s,[o.toMutation(n._key,Rn.exists(!0))])}function HD(n){return ul(vn(n.firestore,Kn),[new Rc(n._key,Rn.none())])}function BD(n,...e){var t,i,s;n=Ge(n);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Cg(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Cg(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,u,c;if(n instanceof tn)u=vn(n.firestore,Kn),c=Ha(n._key.path),l={next:h=>{e[o]&&e[o](Vg(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=vn(n,js);u=vn(h.firestore,Kn),c=h._query;const d=new ch(u);l={next:f=>{e[o]&&e[o](new Fg(u,d,h,f))},error:e[o+1],complete:e[o+2]},Ug(n._query)}return function(h,d,f,m){const p=new Zc(m),g=new Yc(d,p,f);return h.asyncQueue.enqueueAndForget(async()=>zc(await sl(h),g)),()=>{p.ec(),h.asyncQueue.enqueueAndForget(async()=>Kc(await sl(h),g))}}(ro(u),c,a,l)}function ul(n,e){return function(t,i){const s=new Gn;return t.asyncQueue.enqueueAndForget(async()=>gw(await Lw(t),i,s)),s.promise}(ro(n),e)}function Vg(n,e,t){const i=t.docs.get(e._key),s=new ch(n);return new Mg(n,s,e._key,i,new lo(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(){return new ao("deleteField")}function jD(){return new sh("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WD(n){return ro(n=vn(n,Kn)),new Kw(n,e=>ul(n,e))}(function(n,e=!0){(function(t){Ls=t})(Mi),Pi(new oi("firestore",(t,{options:i})=>{const s=t.getProvider("app").getImmediate(),r=new Kn(s,new f0(t.getProvider("auth-internal")));return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r},"PUBLIC")),Sn(ep,"3.3.1",n),Sn(ep,"3.3.1","esm2017")})();function ge(n){return Object.entries(n).filter(([e,t])=>e!==""&&t).map(([e])=>e).join(" ")}function rt(n,e,t,i={bubbles:!0},s=!1){if(typeof Event!="undefined"&&n){const r=new CustomEvent(e,Object.assign(Object.assign({},i),{detail:t}));if(n==null||n.dispatchEvent(r),s&&e.startsWith("SMUI")){const o=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},i),{detail:t}));n==null||n.dispatchEvent(o),o.defaultPrevented&&r.preventDefault()}return r}}function cl(n,e){let t=Object.getOwnPropertyNames(n);const i={};for(let s=0;s<t.length;s++){const r=t[s],o=r.indexOf("$");o!==-1&&e.indexOf(r.substring(0,o+1))!==-1||e.indexOf(r)===-1&&(i[r]=n[r])}return i}const Hg=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,Xw=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function Ke(n){let e,t=[];n.$on=(s,r)=>{let o=s,a=()=>{};return e?a=e(o,r):t.push([o,r]),o.match(Hg)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',o),(...u)=>{a()}};function i(s){hr(n,s)}return s=>{const r=[],o={};e=(a,l)=>{let u=a,c=l,h=!1;const d=u.match(Hg),f=u.match(Xw),m=d||f;if(u.match(/^SMUI:\w+:/)){const E=u.split(":");let S="";for(let b=0;b<E.length;b++)S+=b===E.length-1?":"+E[b]:E[b].split("-").map(C=>C.slice(0,1).toUpperCase()+C.slice(1)).join("");console.warn(`The event ${u.split("$")[0]} has been renamed to ${S.split("$")[0]}.`),u=S}if(m){const E=u.split(d?":":"$");u=E[0];const S=Object.fromEntries(E.slice(1).map(b=>[b,!0]));S.passive&&(h=h||{},h.passive=!0),S.nonpassive&&(h=h||{},h.passive=!1),S.capture&&(h=h||{},h.capture=!0),S.once&&(h=h||{},h.once=!0),S.preventDefault&&(c=jI(c)),S.stopPropagation&&(c=WI(c))}const p=We(s,u,c,h),g=()=>{p();const E=r.indexOf(g);E>-1&&r.splice(E,1)};return r.push(g),u in o||(o[u]=We(s,u,i)),g};for(let a=0;a<t.length;a++)e(t[a][0],t[a][1]);return{destroy:()=>{for(let a=0;a<r.length;a++)r[a]();for(let a of Object.entries(o))a[1]()}}}}function cn(n,e){let t=Object.getOwnPropertyNames(n);const i={};for(let s=0;s<t.length;s++){const r=t[s];r.substring(0,e.length)===e&&(i[r.substring(e.length)]=n[r])}return i}function ot(n,e){let t=[];if(e)for(let i=0;i<e.length;i++){const s=e[i],r=Array.isArray(s)?s[0]:s;Array.isArray(s)&&s.length>1?t.push(r(n,s[1])):t.push(r(n))}return{update(i){if((i&&i.length||0)!=t.length)throw new Error("You must not change the length of an actions array.");if(i)for(let s=0;s<i.length;s++){const r=t[s];if(r&&r.update){const o=i[s];Array.isArray(o)&&o.length>1?r.update(o[1]):r.update()}}},destroy(){for(let i=0;i<t.length;i++){const s=t[i];s&&s.destroy&&s.destroy()}}}}var hl;function Yw(n,e){e===void 0&&(e=!1);var t=n.CSS,i=hl;if(typeof hl=="boolean"&&!e)return hl;var s=t&&typeof t.supports=="function";if(!s)return!1;var r=t.supports("--css-vars","yes"),o=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return i=r||o,e||(hl=i),i}function Qw(n,e,t){if(!n)return{x:0,y:0};var i=e.x,s=e.y,r=i+t.left,o=s+t.top,a,l;if(n.type==="touchstart"){var u=n;a=u.changedTouches[0].pageX-r,l=u.changedTouches[0].pageY-o}else{var c=n;a=c.pageX-r,l=c.pageY-o}return{x:a,y:l}}/**
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
 */var Mn=function(){function n(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(n,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),n.prototype.init=function(){},n.prototype.destroy=function(){},n}();/**
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
 */function Jw(n){return n===void 0&&(n=window),Zw(n)?{passive:!0}:!1}function Zw(n){n===void 0&&(n=window);var e=!1;try{var t={get passive(){return e=!0,!1}},i=function(){};n.document.addEventListener("test",i,t),n.document.removeEventListener("test",i,t)}catch{e=!1}return e}var Bg=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",applyPassive:Jw});/**
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
 */function $w(n,e){if(n.closest)return n.closest(e);for(var t=n;t;){if(qg(t,e))return t;t=t.parentElement}return null}function qg(n,e){var t=n.matches||n.webkitMatchesSelector||n.msMatchesSelector;return t.call(n,e)}function eA(n){var e=n;if(e.offsetParent!==null)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var i=t.scrollWidth;return document.documentElement.removeChild(t),i}var hh=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",closest:$w,matches:qg,estimateScrollWidth:eA});/**
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
 */var tA={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},nA={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},jg={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
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
 */var Wg=["touchstart","pointerdown","mousedown","keydown"],Gg=["touchend","pointerup","mouseup","contextmenu"],dl=[],iA=function(n){An(e,n);function e(t){var i=n.call(this,it(it({},e.defaultAdapter),t))||this;return i.activationAnimationHasEnded=!1,i.activationTimer=0,i.fgDeactivationRemovalTimer=0,i.fgScale="0",i.frame={width:0,height:0},i.initialSize=0,i.layoutFrame=0,i.maxRadius=0,i.unboundedCoords={left:0,top:0},i.activationState=i.defaultActivationState(),i.activationTimerCallback=function(){i.activationAnimationHasEnded=!0,i.runDeactivationUXLogicIfReady()},i.activateHandler=function(s){i.activateImpl(s)},i.deactivateHandler=function(){i.deactivateImpl()},i.focusHandler=function(){i.handleFocus()},i.blurHandler=function(){i.handleBlur()},i.resizeHandler=function(){i.layout()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return tA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return nA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return jg},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var s=e.cssClasses,r=s.ROOT,o=s.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(r),t.adapter.isUnbounded()&&(t.adapter.addClass(o),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,s=i.ROOT,r=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(s),t.adapter.removeClass(r),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var i=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var i,s;if(t){try{for(var r=xn(Wg),o=r.next();!o.done;o=r.next()){var a=o.value;this.adapter.registerInteractionHandler(a,this.activateHandler)}}catch(l){i={error:l}}finally{try{o&&!o.done&&(s=r.return)&&s.call(r)}finally{if(i)throw i.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var i,s;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=xn(Gg),o=r.next();!o.done;o=r.next()){var a=o.value;this.adapter.registerDocumentInteractionHandler(a,this.deactivateHandler)}}catch(l){i={error:l}}finally{try{o&&!o.done&&(s=r.return)&&s.call(r)}finally{if(i)throw i.error}}},e.prototype.deregisterRootHandlers=function(){var t,i;try{for(var s=xn(Wg),r=s.next();!r.done;r=s.next()){var o=r.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(a){t={error:a}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,i;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var s=xn(Gg),r=s.next();!r.done;r=s.next()){var o=r.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(a){t={error:a}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,i=e.strings,s=Object.keys(i);s.forEach(function(r){r.indexOf("VAR_")===0&&t.adapter.updateCssVariable(i[r],null)})},e.prototype.activateImpl=function(t){var i=this;if(!this.adapter.isSurfaceDisabled()){var s=this.activationState;if(!s.isActivated){var r=this.previousActivationEvent,o=r&&t!==void 0&&r.type!==t.type;if(!o){s.isActivated=!0,s.isProgrammatic=t===void 0,s.activationEvent=t,s.wasActivatedByPointer=s.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var a=t!==void 0&&dl.length>0&&dl.some(function(l){return i.adapter.containsEventTarget(l)});if(a){this.resetActivationState();return}t!==void 0&&(dl.push(t.target),this.registerDeactivationHandlers(t)),s.wasElementMadeActive=this.checkElementMadeActive(t),s.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){dl=[],!s.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(s.wasElementMadeActive=i.checkElementMadeActive(t),s.wasElementMadeActive&&i.animateActivation()),s.wasElementMadeActive||(i.activationState=i.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,i=e.strings,s=i.VAR_FG_TRANSLATE_START,r=i.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,l=o.FG_ACTIVATION,u=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var c="",h="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),f=d.startPoint,m=d.endPoint;c=f.x+"px, "+f.y+"px",h=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(s,c),this.adapter.updateCssVariable(r,h),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},u)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,i=t.activationEvent,s=t.wasActivatedByPointer,r;s?r=Qw(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):r={x:this.frame.width/2,y:this.frame.height/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,i=e.cssClasses.FG_DEACTIVATION,s=this.activationState,r=s.hasDeactivationUXRun,o=s.isActivated,a=r||!o;a&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(i)},jg.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,i=this.activationState;if(!!i.isActivated){var s=it({},i);i.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(s)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(s),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var i=t.wasActivatedByPointer,s=t.wasElementMadeActive;(i||s)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width),s=function(){var o=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return o+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?i:s();var r=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!=0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,i=t.VAR_FG_SIZE,s=t.VAR_LEFT,r=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(s,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},e}(Mn);/**
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
 */var dh="mdc-dom-focus-sentinel",sA=function(){function n(e,t){t===void 0&&(t={}),this.root=e,this.options=t,this.elFocusedBeforeTrapFocus=null}return n.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},n.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+dh)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},n.prototype.wrapTabFocus=function(e){var t=this,i=this.createSentinel(),s=this.createSentinel();i.addEventListener("focus",function(){var r=t.getFocusableElements(e);r.length>0&&r[r.length-1].focus()}),s.addEventListener("focus",function(){var r=t.getFocusableElements(e);r.length>0&&r[0].focus()}),e.insertBefore(i,e.children[0]),e.appendChild(s)},n.prototype.focusInitialElement=function(e,t){var i=0;t&&(i=Math.max(e.indexOf(t),0)),e[i].focus()},n.prototype.getFocusableElements=function(e){var t=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return t.filter(function(i){var s=i.getAttribute("aria-disabled")==="true"||i.getAttribute("disabled")!=null||i.getAttribute("hidden")!=null||i.getAttribute("aria-hidden")==="true",r=i.tabIndex>=0&&i.getBoundingClientRect().width>0&&!i.classList.contains(dh)&&!s,o=!1;if(r){var a=getComputedStyle(i);o=a.display==="none"||a.visibility==="hidden"}return r&&!o})},n.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(dh),e},n}(),rA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",FocusTrap:sA});/**
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
 */var Ie={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},nn=new Set;nn.add(Ie.BACKSPACE);nn.add(Ie.ENTER);nn.add(Ie.SPACEBAR);nn.add(Ie.PAGE_UP);nn.add(Ie.PAGE_DOWN);nn.add(Ie.END);nn.add(Ie.HOME);nn.add(Ie.ARROW_LEFT);nn.add(Ie.ARROW_UP);nn.add(Ie.ARROW_RIGHT);nn.add(Ie.ARROW_DOWN);nn.add(Ie.DELETE);nn.add(Ie.ESCAPE);nn.add(Ie.TAB);var hn={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},sn=new Map;sn.set(hn.BACKSPACE,Ie.BACKSPACE);sn.set(hn.ENTER,Ie.ENTER);sn.set(hn.SPACEBAR,Ie.SPACEBAR);sn.set(hn.PAGE_UP,Ie.PAGE_UP);sn.set(hn.PAGE_DOWN,Ie.PAGE_DOWN);sn.set(hn.END,Ie.END);sn.set(hn.HOME,Ie.HOME);sn.set(hn.ARROW_LEFT,Ie.ARROW_LEFT);sn.set(hn.ARROW_UP,Ie.ARROW_UP);sn.set(hn.ARROW_RIGHT,Ie.ARROW_RIGHT);sn.set(hn.ARROW_DOWN,Ie.ARROW_DOWN);sn.set(hn.DELETE,Ie.DELETE);sn.set(hn.ESCAPE,Ie.ESCAPE);sn.set(hn.TAB,Ie.TAB);var vi=new Set;vi.add(Ie.PAGE_UP);vi.add(Ie.PAGE_DOWN);vi.add(Ie.END);vi.add(Ie.HOME);vi.add(Ie.ARROW_LEFT);vi.add(Ie.ARROW_UP);vi.add(Ie.ARROW_RIGHT);vi.add(Ie.ARROW_DOWN);function Yt(n){var e=n.key;if(nn.has(e))return e;var t=sn.get(n.keyCode);return t||Ie.UNKNOWN}const{applyPassive:fl}=Bg,{matches:oA}=hh;function Gs(n,{ripple:e=!0,surface:t=!1,unbounded:i=!1,disabled:s=!1,color:r,active:o,rippleElement:a,eventTarget:l,activeTarget:u,addClass:c=m=>n.classList.add(m),removeClass:h=m=>n.classList.remove(m),addStyle:d=(m,p)=>n.style.setProperty(m,p),initPromise:f=Promise.resolve()}={}){let m,p=on("SMUI:addLayoutListener"),g,E=o,S=l,b=u;function C(){t&&(c("mdc-ripple-surface"),r==="primary"?(c("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")):r==="secondary"?(h("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")):(h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary"))),m&&E!==o&&(E=o,o?m.activate():o===!1&&m.deactivate()),e&&!m?(m=new iA({addClass:c,browserSupportsCssVars:()=>Yw(window),computeBoundingRect:()=>(a||n).getBoundingClientRect(),containsEventTarget:w=>n.contains(w),deregisterDocumentInteractionHandler:(w,_)=>document.documentElement.removeEventListener(w,_,fl()),deregisterInteractionHandler:(w,_)=>(l||n).removeEventListener(w,_,fl()),deregisterResizeHandler:w=>window.removeEventListener("resize",w),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>o==null?oA(u||n,":active"):o,isSurfaceDisabled:()=>!!s,isUnbounded:()=>!!i,registerDocumentInteractionHandler:(w,_)=>document.documentElement.addEventListener(w,_,fl()),registerInteractionHandler:(w,_)=>(l||n).addEventListener(w,_,fl()),registerResizeHandler:w=>window.addEventListener("resize",w),removeClass:h,updateCssVariable:d}),f.then(()=>{m&&(m.init(),m.setUnbounded(i))})):m&&!e&&f.then(()=>{m&&(m.destroy(),m=void 0)}),m&&(S!==l||b!==u)&&(S=l,b=u,m.destroy(),requestAnimationFrame(()=>{m&&(m.init(),m.setUnbounded(i))})),!e&&i&&c("mdc-ripple-upgraded--unbounded")}C(),p&&(g=p(V));function V(){m&&m.layout()}return{update(w){({ripple:e,surface:t,unbounded:i,disabled:s,color:r,active:o,rippleElement:a,eventTarget:l,activeTarget:u,addClass:c,removeClass:h,addStyle:d,initPromise:f}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:_=>n.classList.add(_),removeClass:_=>n.classList.remove(_),addStyle:(_,T)=>n.style.setProperty(_,T),initPromise:Promise.resolve()},w)),C()},destroy(){m&&(m.destroy(),m=void 0,h("mdc-ripple-surface"),h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")),g&&g()}}}function aA(n){let e,t,i,s,r;const o=n[7].default,a=de(o,n,n[6],null);let l=[{href:n[1]},n[4]],u={};for(let c=0;c<l.length;c+=1)u=P(u,l[c]);return{c(){e=Te("a"),a&&a.c(),this.h()},l(c){e=Ae(c,"A",{href:!0});var h=we(e);a&&a.l(h),h.forEach(x),this.h()},h(){ie(e,u)},m(c,h){Z(c,e,h),a&&a.m(e,null),n[8](e),i=!0,s||(r=[te(t=ot.call(null,e,n[0])),te(n[3].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&64)&&me(a,o,c,c[6],i?fe(o,c[6],h,null):pe(c[6]),null),ie(e,u=Ee(l,[(!i||h&2)&&{href:c[1]},h&16&&c[4]])),t&&Ue(t.update)&&h&1&&t.update.call(null,c[0])},i(c){i||(O(a,c),i=!0)},o(c){M(a,c),i=!1},d(c){c&&x(e),a&&a.d(c),n[8](null),s=!1,Me(r)}}}function lA(n,e,t){const i=["use","href","getElement"];let s=J(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e,{href:l="javascript:void(0);"}=e;const u=Ke(Ce());let c;function h(){return c}function d(f){ae[f?"unshift":"push"](()=>{c=f,t(2,c)})}return n.$$set=f=>{e=P(P({},e),xe(f)),t(4,s=J(e,i)),"use"in f&&t(0,a=f.use),"href"in f&&t(1,l=f.href),"$$scope"in f&&t(6,o=f.$$scope)},[a,l,c,u,s,h,o,r,d]}class uA extends He{constructor(e){super();Ve(this,e,lA,aA,Fe,{use:0,href:1,getElement:5})}get getElement(){return this.$$.ctx[5]}}function cA(n){let e,t,i,s,r;const o=n[6].default,a=de(o,n,n[5],null);let l=[n[3]],u={};for(let c=0;c<l.length;c+=1)u=P(u,l[c]);return{c(){e=Te("button"),a&&a.c(),this.h()},l(c){e=Ae(c,"BUTTON",{});var h=we(e);a&&a.l(h),h.forEach(x),this.h()},h(){ie(e,u)},m(c,h){Z(c,e,h),a&&a.m(e,null),e.autofocus&&e.focus(),n[7](e),i=!0,s||(r=[te(t=ot.call(null,e,n[0])),te(n[2].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&32)&&me(a,o,c,c[5],i?fe(o,c[5],h,null):pe(c[5]),null),ie(e,u=Ee(l,[h&8&&c[3]])),t&&Ue(t.update)&&h&1&&t.update.call(null,c[0])},i(c){i||(O(a,c),i=!0)},o(c){M(a,c),i=!1},d(c){c&&x(e),a&&a.d(c),n[7](null),s=!1,Me(r)}}}function hA(n,e,t){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ke(Ce());let u;function c(){return u}function h(d){ae[d?"unshift":"push"](()=>{u=d,t(1,u)})}return n.$$set=d=>{e=P(P({},e),xe(d)),t(3,s=J(e,i)),"use"in d&&t(0,a=d.use),"$$scope"in d&&t(5,o=d.$$scope)},[a,u,l,s,c,o,r,h]}class dA extends He{constructor(e){super();Ve(this,e,hA,cA,Fe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function fA(n){let e,t,i,s,r;const o=n[6].default,a=de(o,n,n[5],null);let l=[n[3]],u={};for(let c=0;c<l.length;c+=1)u=P(u,l[c]);return{c(){e=Te("div"),a&&a.c(),this.h()},l(c){e=Ae(c,"DIV",{});var h=we(e);a&&a.l(h),h.forEach(x),this.h()},h(){ie(e,u)},m(c,h){Z(c,e,h),a&&a.m(e,null),n[7](e),i=!0,s||(r=[te(t=ot.call(null,e,n[0])),te(n[2].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&32)&&me(a,o,c,c[5],i?fe(o,c[5],h,null):pe(c[5]),null),ie(e,u=Ee(l,[h&8&&c[3]])),t&&Ue(t.update)&&h&1&&t.update.call(null,c[0])},i(c){i||(O(a,c),i=!0)},o(c){M(a,c),i=!1},d(c){c&&x(e),a&&a.d(c),n[7](null),s=!1,Me(r)}}}function mA(n,e,t){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ke(Ce());let u;function c(){return u}function h(d){ae[d?"unshift":"push"](()=>{u=d,t(1,u)})}return n.$$set=d=>{e=P(P({},e),xe(d)),t(3,s=J(e,i)),"use"in d&&t(0,a=d.use),"$$scope"in d&&t(5,o=d.$$scope)},[a,u,l,s,c,o,r,h]}class zg extends He{constructor(e){super();Ve(this,e,mA,fA,Fe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function pA(n){let e,t,i,s,r;const o=n[6].default,a=de(o,n,n[5],null);let l=[n[3]],u={};for(let c=0;c<l.length;c+=1)u=P(u,l[c]);return{c(){e=Te("h1"),a&&a.c(),this.h()},l(c){e=Ae(c,"H1",{});var h=we(e);a&&a.l(h),h.forEach(x),this.h()},h(){ie(e,u)},m(c,h){Z(c,e,h),a&&a.m(e,null),n[7](e),i=!0,s||(r=[te(t=ot.call(null,e,n[0])),te(n[2].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&32)&&me(a,o,c,c[5],i?fe(o,c[5],h,null):pe(c[5]),null),ie(e,u=Ee(l,[h&8&&c[3]])),t&&Ue(t.update)&&h&1&&t.update.call(null,c[0])},i(c){i||(O(a,c),i=!0)},o(c){M(a,c),i=!1},d(c){c&&x(e),a&&a.d(c),n[7](null),s=!1,Me(r)}}}function gA(n,e,t){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ke(Ce());let u;function c(){return u}function h(d){ae[d?"unshift":"push"](()=>{u=d,t(1,u)})}return n.$$set=d=>{e=P(P({},e),xe(d)),t(3,s=J(e,i)),"use"in d&&t(0,a=d.use),"$$scope"in d&&t(5,o=d.$$scope)},[a,u,l,s,c,o,r,h]}class _A extends He{constructor(e){super();Ve(this,e,gA,pA,Fe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function yA(n){let e,t,i,s,r;const o=n[6].default,a=de(o,n,n[5],null);let l=[n[3]],u={};for(let c=0;c<l.length;c+=1)u=P(u,l[c]);return{c(){e=Te("h2"),a&&a.c(),this.h()},l(c){e=Ae(c,"H2",{});var h=we(e);a&&a.l(h),h.forEach(x),this.h()},h(){ie(e,u)},m(c,h){Z(c,e,h),a&&a.m(e,null),n[7](e),i=!0,s||(r=[te(t=ot.call(null,e,n[0])),te(n[2].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&32)&&me(a,o,c,c[5],i?fe(o,c[5],h,null):pe(c[5]),null),ie(e,u=Ee(l,[h&8&&c[3]])),t&&Ue(t.update)&&h&1&&t.update.call(null,c[0])},i(c){i||(O(a,c),i=!0)},o(c){M(a,c),i=!1},d(c){c&&x(e),a&&a.d(c),n[7](null),s=!1,Me(r)}}}function vA(n,e,t){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ke(Ce());let u;function c(){return u}function h(d){ae[d?"unshift":"push"](()=>{u=d,t(1,u)})}return n.$$set=d=>{e=P(P({},e),xe(d)),t(3,s=J(e,i)),"use"in d&&t(0,a=d.use),"$$scope"in d&&t(5,o=d.$$scope)},[a,u,l,s,c,o,r,h]}class IA extends He{constructor(e){super();Ve(this,e,vA,yA,Fe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function EA(n){let e,t,i,s,r;const o=n[6].default,a=de(o,n,n[5],null);let l=[n[3]],u={};for(let c=0;c<l.length;c+=1)u=P(u,l[c]);return{c(){e=Te("h3"),a&&a.c(),this.h()},l(c){e=Ae(c,"H3",{});var h=we(e);a&&a.l(h),h.forEach(x),this.h()},h(){ie(e,u)},m(c,h){Z(c,e,h),a&&a.m(e,null),n[7](e),i=!0,s||(r=[te(t=ot.call(null,e,n[0])),te(n[2].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&32)&&me(a,o,c,c[5],i?fe(o,c[5],h,null):pe(c[5]),null),ie(e,u=Ee(l,[h&8&&c[3]])),t&&Ue(t.update)&&h&1&&t.update.call(null,c[0])},i(c){i||(O(a,c),i=!0)},o(c){M(a,c),i=!1},d(c){c&&x(e),a&&a.d(c),n[7](null),s=!1,Me(r)}}}function bA(n,e,t){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ke(Ce());let u;function c(){return u}function h(d){ae[d?"unshift":"push"](()=>{u=d,t(1,u)})}return n.$$set=d=>{e=P(P({},e),xe(d)),t(3,s=J(e,i)),"use"in d&&t(0,a=d.use),"$$scope"in d&&t(5,o=d.$$scope)},[a,u,l,s,c,o,r,h]}class TA extends He{constructor(e){super();Ve(this,e,bA,EA,Fe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function CA(n){let e,t,i,s,r;const o=n[6].default,a=de(o,n,n[5],null);let l=[n[3]],u={};for(let c=0;c<l.length;c+=1)u=P(u,l[c]);return{c(){e=Te("li"),a&&a.c(),this.h()},l(c){e=Ae(c,"LI",{});var h=we(e);a&&a.l(h),h.forEach(x),this.h()},h(){ie(e,u)},m(c,h){Z(c,e,h),a&&a.m(e,null),n[7](e),i=!0,s||(r=[te(t=ot.call(null,e,n[0])),te(n[2].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&32)&&me(a,o,c,c[5],i?fe(o,c[5],h,null):pe(c[5]),null),ie(e,u=Ee(l,[h&8&&c[3]])),t&&Ue(t.update)&&h&1&&t.update.call(null,c[0])},i(c){i||(O(a,c),i=!0)},o(c){M(a,c),i=!1},d(c){c&&x(e),a&&a.d(c),n[7](null),s=!1,Me(r)}}}function SA(n,e,t){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ke(Ce());let u;function c(){return u}function h(d){ae[d?"unshift":"push"](()=>{u=d,t(1,u)})}return n.$$set=d=>{e=P(P({},e),xe(d)),t(3,s=J(e,i)),"use"in d&&t(0,a=d.use),"$$scope"in d&&t(5,o=d.$$scope)},[a,u,l,s,c,o,r,h]}class wA extends He{constructor(e){super();Ve(this,e,SA,CA,Fe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function AA(n){let e,t,i,s,r;const o=n[6].default,a=de(o,n,n[5],null);let l=[n[3]],u={};for(let c=0;c<l.length;c+=1)u=P(u,l[c]);return{c(){e=Te("nav"),a&&a.c(),this.h()},l(c){e=Ae(c,"NAV",{});var h=we(e);a&&a.l(h),h.forEach(x),this.h()},h(){ie(e,u)},m(c,h){Z(c,e,h),a&&a.m(e,null),n[7](e),i=!0,s||(r=[te(t=ot.call(null,e,n[0])),te(n[2].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&32)&&me(a,o,c,c[5],i?fe(o,c[5],h,null):pe(c[5]),null),ie(e,u=Ee(l,[h&8&&c[3]])),t&&Ue(t.update)&&h&1&&t.update.call(null,c[0])},i(c){i||(O(a,c),i=!0)},o(c){M(a,c),i=!1},d(c){c&&x(e),a&&a.d(c),n[7](null),s=!1,Me(r)}}}function RA(n,e,t){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ke(Ce());let u;function c(){return u}function h(d){ae[d?"unshift":"push"](()=>{u=d,t(1,u)})}return n.$$set=d=>{e=P(P({},e),xe(d)),t(3,s=J(e,i)),"use"in d&&t(0,a=d.use),"$$scope"in d&&t(5,o=d.$$scope)},[a,u,l,s,c,o,r,h]}class kA extends He{constructor(e){super();Ve(this,e,RA,AA,Fe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function NA(n){let e,t,i,s,r;const o=n[6].default,a=de(o,n,n[5],null);let l=[n[3]],u={};for(let c=0;c<l.length;c+=1)u=P(u,l[c]);return{c(){e=Te("span"),a&&a.c(),this.h()},l(c){e=Ae(c,"SPAN",{});var h=we(e);a&&a.l(h),h.forEach(x),this.h()},h(){ie(e,u)},m(c,h){Z(c,e,h),a&&a.m(e,null),n[7](e),i=!0,s||(r=[te(t=ot.call(null,e,n[0])),te(n[2].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&32)&&me(a,o,c,c[5],i?fe(o,c[5],h,null):pe(c[5]),null),ie(e,u=Ee(l,[h&8&&c[3]])),t&&Ue(t.update)&&h&1&&t.update.call(null,c[0])},i(c){i||(O(a,c),i=!0)},o(c){M(a,c),i=!1},d(c){c&&x(e),a&&a.d(c),n[7](null),s=!1,Me(r)}}}function LA(n,e,t){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ke(Ce());let u;function c(){return u}function h(d){ae[d?"unshift":"push"](()=>{u=d,t(1,u)})}return n.$$set=d=>{e=P(P({},e),xe(d)),t(3,s=J(e,i)),"use"in d&&t(0,a=d.use),"$$scope"in d&&t(5,o=d.$$scope)},[a,u,l,s,c,o,r,h]}class OA extends He{constructor(e){super();Ve(this,e,LA,NA,Fe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function DA(n){let e,t,i,s,r;const o=n[6].default,a=de(o,n,n[5],null);let l=[n[3]],u={};for(let c=0;c<l.length;c+=1)u=P(u,l[c]);return{c(){e=Te("ul"),a&&a.c(),this.h()},l(c){e=Ae(c,"UL",{});var h=we(e);a&&a.l(h),h.forEach(x),this.h()},h(){ie(e,u)},m(c,h){Z(c,e,h),a&&a.m(e,null),n[7](e),i=!0,s||(r=[te(t=ot.call(null,e,n[0])),te(n[2].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&32)&&me(a,o,c,c[5],i?fe(o,c[5],h,null):pe(c[5]),null),ie(e,u=Ee(l,[h&8&&c[3]])),t&&Ue(t.update)&&h&1&&t.update.call(null,c[0])},i(c){i||(O(a,c),i=!0)},o(c){M(a,c),i=!1},d(c){c&&x(e),a&&a.d(c),n[7](null),s=!1,Me(r)}}}function PA(n,e,t){const i=["use","getElement"];let s=J(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ke(Ce());let u;function c(){return u}function h(d){ae[d?"unshift":"push"](()=>{u=d,t(1,u)})}return n.$$set=d=>{e=P(P({},e),xe(d)),t(3,s=J(e,i)),"use"in d&&t(0,a=d.use),"$$scope"in d&&t(5,o=d.$$scope)},[a,u,l,s,c,o,r,h]}class MA extends He{constructor(e){super();Ve(this,e,PA,DA,Fe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}const Kg=uA,FA=dA,Xn=zg,UA=_A,xA=IA,VA=TA,HA=wA,BA=kA,Zi=OA,qA=MA;function Xg(n){let e;return{c(){e=Te("div"),this.h()},l(t){e=Ae(t,"DIV",{class:!0}),we(e).forEach(x),this.h()},h(){Tn(e,"class","mdc-button__touch")},m(t,i){Z(t,e,i)},d(t){t&&x(e)}}}function jA(n){let e,t,i,s;const r=n[26].default,o=de(r,n,n[28],null);let a=n[6]&&Xg();return{c(){e=Te("div"),t=ut(),o&&o.c(),a&&a.c(),i=pt(),this.h()},l(l){e=Ae(l,"DIV",{class:!0}),we(e).forEach(x),t=ct(l),o&&o.l(l),a&&a.l(l),i=pt(),this.h()},h(){Tn(e,"class","mdc-button__ripple")},m(l,u){Z(l,e,u),Z(l,t,u),o&&o.m(l,u),a&&a.m(l,u),Z(l,i,u),s=!0},p(l,u){o&&o.p&&(!s||u&268435456)&&me(o,r,l,l[28],s?fe(r,l[28],u,null):pe(l[28]),null),l[6]?a||(a=Xg(),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null)},i(l){s||(O(o,l),s=!0)},o(l){M(o,l),s=!1},d(l){l&&x(e),l&&x(t),o&&o.d(l),a&&a.d(l),l&&x(i)}}}function WA(n){let e,t,i;const s=[{use:[[Gs,{ripple:n[3],unbounded:!1,color:n[4],disabled:!!n[22].disabled,addClass:n[18],removeClass:n[19],addStyle:n[20]}],n[16],...n[0]]},{class:ge(Qe({[n[1]]:!0,"mdc-button":!0,"mdc-button--raised":n[5]==="raised","mdc-button--unelevated":n[5]==="unelevated","mdc-button--outlined":n[5]==="outlined","smui-button--color-secondary":n[4]==="secondary","mdc-button--touch":n[6],"mdc-card__action":n[17]==="card:action","mdc-card__action--button":n[17]==="card:action","mdc-dialog__button":n[17]==="dialog:action","mdc-top-app-bar__navigation-icon":n[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":n[17]==="top-app-bar:action","mdc-snackbar__action":n[17]==="snackbar:actions","mdc-banner__secondary-action":n[17]==="banner"&&n[8],"mdc-banner__primary-action":n[17]==="banner"&&!n[8],"mdc-tooltip__action":n[17]==="tooltip:rich-actions"},n[11]))},{style:Object.entries(n[12]).map(Yg).concat([n[2]]).join(" ")},n[15],n[14],n[13],{href:n[7]},n[22]];var r=n[9];function o(a){let l={$$slots:{default:[jA]},$$scope:{ctx:a}};for(let u=0;u<s.length;u+=1)l=P(l,s[u]);return{props:l}}return r&&(e=new r(o(n)),n[27](e),e.$on("click",n[21])),{c(){e&&lt(e.$$.fragment),t=pt()},l(a){e&&wt(e.$$.fragment,a),t=pt()},m(a,l){e&&tt(e,a,l),Z(a,t,l),i=!0},p(a,[l]){const u=l&6289919?Ee(s,[l&6094873&&{use:[[Gs,{ripple:a[3],unbounded:!1,color:a[4],disabled:!!a[22].disabled,addClass:a[18],removeClass:a[19],addStyle:a[20]}],a[16],...a[0]]},l&133490&&{class:ge(Qe({[a[1]]:!0,"mdc-button":!0,"mdc-button--raised":a[5]==="raised","mdc-button--unelevated":a[5]==="unelevated","mdc-button--outlined":a[5]==="outlined","smui-button--color-secondary":a[4]==="secondary","mdc-button--touch":a[6],"mdc-card__action":a[17]==="card:action","mdc-card__action--button":a[17]==="card:action","mdc-dialog__button":a[17]==="dialog:action","mdc-top-app-bar__navigation-icon":a[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":a[17]==="top-app-bar:action","mdc-snackbar__action":a[17]==="snackbar:actions","mdc-banner__secondary-action":a[17]==="banner"&&a[8],"mdc-banner__primary-action":a[17]==="banner"&&!a[8],"mdc-tooltip__action":a[17]==="tooltip:rich-actions"},a[11]))},l&4100&&{style:Object.entries(a[12]).map(Yg).concat([a[2]]).join(" ")},l&32768&&et(a[15]),l&16384&&et(a[14]),l&8192&&et(a[13]),l&128&&{href:a[7]},l&4194304&&et(a[22])]):{};if(l&268435520&&(u.$$scope={dirty:l,ctx:a}),r!==(r=a[9])){if(e){jt();const c=e;M(c.$$.fragment,1,0,()=>{nt(c,1)}),Wt()}r?(e=new r(o(a)),a[27](e),e.$on("click",a[21]),lt(e.$$.fragment),O(e.$$.fragment,1),tt(e,t.parentNode,t)):e=null}else r&&e.$set(u)},i(a){i||(e&&O(e.$$.fragment,a),i=!0)},o(a){e&&M(e.$$.fragment,a),i=!1},d(a){n[27](null),a&&x(t),e&&nt(e,a)}}}const Yg=([n,e])=>`${n}: ${e};`;function GA(n,e,t){let i,s,r;const o=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","getElement"];let a=J(e,o),{$$slots:l={},$$scope:u}=e;const c=Ke(Ce());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{ripple:m=!0}=e,{color:p="primary"}=e,{variant:g="text"}=e,{touch:E=!1}=e,{href:S=void 0}=e,{action:b="close"}=e,{defaultAction:C=!1}=e,{secondary:V=!1}=e,w,_={},T={},U=on("SMUI:button:context"),{component:I=S==null?FA:Kg}=e;vt("SMUI:label:context","button"),vt("SMUI:icon:context","button");function R(q){_[q]||t(11,_[q]=!0,_)}function Y(q){(!(q in _)||_[q])&&t(11,_[q]=!1,_)}function v(q,G){T[q]!=G&&(G===""||G==null?(delete T[q],t(12,T)):t(12,T[q]=G,T))}function L(){U==="banner"&&rt(A(),V?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function A(){return w.getElement()}function H(q){ae[q?"unshift":"push"](()=>{w=q,t(10,w)})}return n.$$set=q=>{t(29,e=P(P({},e),xe(q))),t(22,a=J(e,o)),"use"in q&&t(0,h=q.use),"class"in q&&t(1,d=q.class),"style"in q&&t(2,f=q.style),"ripple"in q&&t(3,m=q.ripple),"color"in q&&t(4,p=q.color),"variant"in q&&t(5,g=q.variant),"touch"in q&&t(6,E=q.touch),"href"in q&&t(7,S=q.href),"action"in q&&t(23,b=q.action),"defaultAction"in q&&t(24,C=q.defaultAction),"secondary"in q&&t(8,V=q.secondary),"component"in q&&t(9,I=q.component),"$$scope"in q&&t(28,u=q.$$scope)},n.$$.update=()=>{t(15,i=U==="dialog:action"&&b!=null?{"data-mdc-dialog-action":b}:{action:e.action}),t(14,s=U==="dialog:action"&&C?{"data-mdc-dialog-button-default":""}:{default:e.default}),t(13,r=U==="banner"?{}:{secondary:e.secondary})},e=xe(e),[h,d,f,m,p,g,E,S,V,I,w,_,T,r,s,i,c,U,R,Y,v,L,a,b,C,A,l,H,u]}class GD extends He{constructor(e){super();Ve(this,e,GA,WA,Fe,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:23,defaultAction:24,secondary:8,component:9,getElement:25})}get getElement(){return this.$$.ctx[25]}}function zA(n){let e;const t=n[4].default,i=de(t,n,n[3],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,[r]){i&&i.p&&(!e||r&8)&&me(i,t,s,s[3],e?fe(t,s[3],r,null):pe(s[3]),null)},i(s){e||(O(i,s),e=!0)},o(s){M(i,s),e=!1},d(s){i&&i.d(s)}}}function KA(n,e,t){let i,{$$slots:s={},$$scope:r}=e,{key:o}=e,{value:a}=e;const l=JI(a);return MI(n,l,u=>t(5,i=u)),vt(o,l),ki(()=>{l.set(void 0)}),n.$$set=u=>{"key"in u&&t(1,o=u.key),"value"in u&&t(2,a=u.value),"$$scope"in u&&t(3,r=u.$$scope)},n.$$.update=()=>{n.$$.dirty&4&&UI(l,i=a,i)},[l,o,a,r,s]}class ml extends He{constructor(e){super();Ve(this,e,KA,zA,Fe,{key:1,value:2})}}/**
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
 */var XA={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
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
 */var YA=function(n){An(e,n);function e(t){var i=n.call(this,it(it({},e.defaultAdapter),t))||this;return i.shakeAnimationEndHandler=function(){i.handleShakeAnimationEnd()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return XA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(t){var i=e.cssClasses.LABEL_SHAKE;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.float=function(t){var i=e.cssClasses,s=i.LABEL_FLOAT_ABOVE,r=i.LABEL_SHAKE;t?this.adapter.addClass(s):(this.adapter.removeClass(s),this.adapter.removeClass(r))},e.prototype.setRequired=function(t){var i=e.cssClasses.LABEL_REQUIRED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleShakeAnimationEnd=function(){var t=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(t)},e}(Mn);/**
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
 */var $i={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
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
 */var QA=function(n){An(e,n);function e(t){var i=n.call(this,it(it({},e.defaultAdapter),t))||this;return i.transitionEndHandler=function(s){i.handleTransitionEnd(s)},i}return Object.defineProperty(e,"cssClasses",{get:function(){return $i},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass($i.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass($i.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},e.prototype.deactivate=function(){this.adapter.addClass($i.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(t){var i=this.adapter.hasClass($i.LINE_RIPPLE_DEACTIVATING);t.propertyName==="opacity"&&i&&(this.adapter.removeClass($i.LINE_RIPPLE_ACTIVE),this.adapter.removeClass($i.LINE_RIPPLE_DEACTIVATING))},e}(Mn);/**
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
 */var JA={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Qg={NOTCH_ELEMENT_PADDING:8},ZA={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
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
 */var $A=function(n){An(e,n);function e(t){return n.call(this,it(it({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return JA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return ZA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Qg},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(t){var i=e.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=Qg.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(i)},e.prototype.closeNotch=function(){var t=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(t),this.adapter.removeNotchWidthProperty()},e}(Mn);/**
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
 */var fh={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},e1={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},Jg={LABEL_SCALE:.75},t1=["pattern","min","max","required","step","minlength","maxlength"],n1=["color","date","datetime-local","month","range","time","week"];/**
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
 */var Zg=["mousedown","touchstart"],$g=["click","keydown"],i1=function(n){An(e,n);function e(t,i){i===void 0&&(i={});var s=n.call(this,it(it({},e.defaultAdapter),t))||this;return s.isFocused=!1,s.receivedUserInput=!1,s.valid=!0,s.useNativeValidation=!0,s.validateOnValueChange=!0,s.helperText=i.helperText,s.characterCounter=i.characterCounter,s.leadingIcon=i.leadingIcon,s.trailingIcon=i.trailingIcon,s.inputFocusHandler=function(){s.activateFocus()},s.inputBlurHandler=function(){s.deactivateFocus()},s.inputInputHandler=function(){s.handleInput()},s.setPointerXOffset=function(r){s.setTransformOrigin(r)},s.textFieldInteractionHandler=function(){s.handleTextFieldInteraction()},s.validationAttributeChangeHandler=function(r){s.handleValidationAttributeChange(r)},s}return Object.defineProperty(e,"cssClasses",{get:function(){return e1},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return fh},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Jg},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return n1.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,i,s,r;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var o=xn(Zg),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.registerInputInteractionHandler(l,this.setPointerXOffset)}}catch(h){t={error:h}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(t)throw t.error}}try{for(var u=xn($g),c=u.next();!c.done;c=u.next()){var l=c.value;this.adapter.registerTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(h){s={error:h}}finally{try{c&&!c.done&&(r=u.return)&&r.call(u)}finally{if(s)throw s.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var t,i,s,r;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var o=xn(Zg),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.deregisterInputInteractionHandler(l,this.setPointerXOffset)}}catch(h){t={error:h}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(t)throw t.error}}try{for(var u=xn($g),c=u.next();!c.done;c=u.next()){var l=c.value;this.adapter.deregisterTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(h){s={error:h}}finally{try{c&&!c.done&&(r=u.return)&&r.call(u)}finally{if(s)throw s.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(t){var i=this;t.some(function(s){return t1.indexOf(s)>-1?(i.styleValidity(!0),i.adapter.setLabelRequired(i.getNativeInput().required),!0):!1}),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(t){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(t){var i=this.adapter.getLabelWidth()*Jg.LABEL_SCALE;this.adapter.notchOutline(i)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(t){if(!(this.isDisabled()||this.adapter.hasOutline())){var i=t.touches,s=i?i[0]:t,r=s.target.getBoundingClientRect(),o=s.clientX-r.left;this.adapter.setLineRippleTransformOrigin(o)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var i=this.isValid();this.styleValidity(i)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var i=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(i)},e.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},e.prototype.setcharacterCounter=function(t){if(!!this.characterCounter){var i=this.getNativeInput().maxLength;if(i===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,i)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(t){var i=e.cssClasses.INVALID;if(t?this.adapter.removeClass(i):this.adapter.addClass(i),this.helperText){this.helperText.setValidity(t);var s=this.helperText.isValidation();if(!s)return;var r=this.helperText.isVisible(),o=this.helperText.getId();r&&o?this.adapter.setInputAttr(fh.ARIA_DESCRIBEDBY,o):this.adapter.removeInputAttr(fh.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(t){var i=e.cssClasses.FOCUSED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.styleDisabled=function(t){var i=e.cssClasses,s=i.DISABLED,r=i.INVALID;t?(this.adapter.addClass(s),this.adapter.removeClass(r)):this.adapter.removeClass(s),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},e.prototype.styleFloating=function(t){var i=e.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.getNativeInput=function(){var t=this.adapter?this.adapter.getNativeInput():null;return t||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(Mn);/**
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
 */var Fn={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},Yn={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+Fn.ROOT};/**
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
 */var s1=function(n){An(e,n);function e(t){return n.call(this,it(it({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Fn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Yn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(Yn.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.isPersistent=function(){return this.adapter.hasClass(Fn.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(t){t?this.adapter.addClass(Fn.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(Fn.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(Fn.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(t){t?this.adapter.addClass(Fn.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(Fn.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(Yn.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var i=this.adapter.hasClass(Fn.HELPER_TEXT_PERSISTENT),s=this.adapter.hasClass(Fn.HELPER_TEXT_VALIDATION_MSG),r=s&&!t;r?(this.showToScreenReader(),this.adapter.getAttr(Yn.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(Yn.ROLE,"alert")):this.adapter.removeAttr(Yn.ROLE),!i&&!r&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(Yn.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var t=this;this.adapter.removeAttr(Yn.ROLE),requestAnimationFrame(function(){t.adapter.setAttr(Yn.ROLE,"alert")})},e}(Mn);function r1(n){let e,t,i,s,r,o,a,l;const u=n[22].default,c=de(u,n,n[21],null);let h=[{class:t=ge(Qe({[n[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":n[0],"mdc-floating-label--required":n[1]},n[8]))},{style:i=Object.entries(n[9]).map(t_).concat([n[4]]).join(" ")},{for:s=n[5]||(n[11]?n[11].id:void 0)},n[12]],d={};for(let f=0;f<h.length;f+=1)d=P(d,h[f]);return{c(){e=Te("label"),c&&c.c(),this.h()},l(f){e=Ae(f,"LABEL",{class:!0,style:!0,for:!0});var m=we(e);c&&c.l(m),m.forEach(x),this.h()},h(){ie(e,d)},m(f,m){Z(f,e,m),c&&c.m(e,null),n[24](e),o=!0,a||(l=[te(r=ot.call(null,e,n[2])),te(n[10].call(null,e))],a=!0)},p(f,m){c&&c.p&&(!o||m&2097152)&&me(c,u,f,f[21],o?fe(u,f[21],m,null):pe(f[21]),null),ie(e,d=Ee(h,[(!o||m&267&&t!==(t=ge(Qe({[f[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":f[0],"mdc-floating-label--required":f[1]},f[8]))))&&{class:t},(!o||m&528&&i!==(i=Object.entries(f[9]).map(t_).concat([f[4]]).join(" ")))&&{style:i},(!o||m&32&&s!==(s=f[5]||(f[11]?f[11].id:void 0)))&&{for:s},m&4096&&f[12]])),r&&Ue(r.update)&&m&4&&r.update.call(null,f[2])},i(f){o||(O(c,f),o=!0)},o(f){M(c,f),o=!1},d(f){f&&x(e),c&&c.d(f),n[24](null),a=!1,Me(l)}}}function o1(n){let e,t,i,s,r,o,a;const l=n[22].default,u=de(l,n,n[21],null);let c=[{class:t=ge(Qe({[n[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":n[0],"mdc-floating-label--required":n[1]},n[8]))},{style:i=Object.entries(n[9]).map(e_).concat([n[4]]).join(" ")},n[12]],h={};for(let d=0;d<c.length;d+=1)h=P(h,c[d]);return{c(){e=Te("span"),u&&u.c(),this.h()},l(d){e=Ae(d,"SPAN",{class:!0,style:!0});var f=we(e);u&&u.l(f),f.forEach(x),this.h()},h(){ie(e,h)},m(d,f){Z(d,e,f),u&&u.m(e,null),n[23](e),r=!0,o||(a=[te(s=ot.call(null,e,n[2])),te(n[10].call(null,e))],o=!0)},p(d,f){u&&u.p&&(!r||f&2097152)&&me(u,l,d,d[21],r?fe(l,d[21],f,null):pe(d[21]),null),ie(e,h=Ee(c,[(!r||f&267&&t!==(t=ge(Qe({[d[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":d[0],"mdc-floating-label--required":d[1]},d[8]))))&&{class:t},(!r||f&528&&i!==(i=Object.entries(d[9]).map(e_).concat([d[4]]).join(" ")))&&{style:i},f&4096&&d[12]])),s&&Ue(s.update)&&f&4&&s.update.call(null,d[2])},i(d){r||(O(u,d),r=!0)},o(d){M(u,d),r=!1},d(d){d&&x(e),u&&u.d(d),n[23](null),o=!1,Me(a)}}}function a1(n){let e,t,i,s;const r=[o1,r1],o=[];function a(l,u){return l[6]?0:1}return e=a(n),t=o[e]=r[e](n),{c(){t.c(),i=pt()},l(l){t.l(l),i=pt()},m(l,u){o[e].m(l,u),Z(l,i,u),s=!0},p(l,[u]){let c=e;e=a(l),e===c?o[e].p(l,u):(jt(),M(o[c],1,1,()=>{o[c]=null}),Wt(),t=o[e],t?t.p(l,u):(t=o[e]=r[e](l),t.c()),O(t,1),t.m(i.parentNode,i))},i(l){s||(O(t),s=!0)},o(l){M(t),s=!1},d(l){o[e].d(l),l&&x(i)}}}const e_=([n,e])=>`${n}: ${e};`,t_=([n,e])=>`${n}: ${e};`;function l1(n,e,t){const i=["use","class","style","for","floatAbove","required","wrapped","shake","float","setRequired","getWidth","getElement"];let s=J(e,i),{$$slots:r={},$$scope:o}=e;var a;const l=Ke(Ce());let{use:u=[]}=e,{class:c=""}=e,{style:h=""}=e,{for:d=void 0}=e,{floatAbove:f=!1}=e,{required:m=!1}=e,{wrapped:p=!1}=e,g,E,S={},b={},C=(a=on("SMUI:generic:input:props"))!==null&&a!==void 0?a:{},V=f,w=m;Cn(()=>{t(18,E=new YA({addClass:_,removeClass:T,getWidth:()=>{var Le,ee;const qe=A(),Xe=qe.cloneNode(!0);(Le=qe.parentNode)===null||Le===void 0||Le.appendChild(Xe),Xe.classList.add("smui-floating-label--remove-transition"),Xe.classList.add("smui-floating-label--force-size"),Xe.classList.remove("mdc-floating-label--float-above");const Ct=Xe.scrollWidth;return(ee=qe.parentNode)===null||ee===void 0||ee.removeChild(Xe),Ct},registerInteractionHandler:(Le,ee)=>A().addEventListener(Le,ee),deregisterInteractionHandler:(Le,ee)=>A().removeEventListener(Le,ee)}));const G={get element(){return A()},addStyle:U,removeStyle:I};return rt(g,"SMUIFloatingLabel:mount",G),E.init(),()=>{rt(g,"SMUIFloatingLabel:unmount",G),E.destroy()}});function _(G){S[G]||t(8,S[G]=!0,S)}function T(G){(!(G in S)||S[G])&&t(8,S[G]=!1,S)}function U(G,Le){b[G]!=Le&&(Le===""||Le==null?(delete b[G],t(9,b)):t(9,b[G]=Le,b))}function I(G){G in b&&(delete b[G],t(9,b))}function R(G){E.shake(G)}function Y(G){t(0,f=G)}function v(G){t(1,m=G)}function L(){return E.getWidth()}function A(){return g}function H(G){ae[G?"unshift":"push"](()=>{g=G,t(7,g)})}function q(G){ae[G?"unshift":"push"](()=>{g=G,t(7,g)})}return n.$$set=G=>{e=P(P({},e),xe(G)),t(12,s=J(e,i)),"use"in G&&t(2,u=G.use),"class"in G&&t(3,c=G.class),"style"in G&&t(4,h=G.style),"for"in G&&t(5,d=G.for),"floatAbove"in G&&t(0,f=G.floatAbove),"required"in G&&t(1,m=G.required),"wrapped"in G&&t(6,p=G.wrapped),"$$scope"in G&&t(21,o=G.$$scope)},n.$$.update=()=>{n.$$.dirty&786433&&E&&V!==f&&(t(19,V=f),E.float(f)),n.$$.dirty&1310722&&E&&w!==m&&(t(20,w=m),E.setRequired(m))},[f,m,u,c,h,d,p,g,S,b,l,C,s,R,Y,v,L,A,E,V,w,o,r,H,q]}class n_ extends He{constructor(e){super();Ve(this,e,l1,a1,Fe,{use:2,class:3,style:4,for:5,floatAbove:0,required:1,wrapped:6,shake:13,float:14,setRequired:15,getWidth:16,getElement:17})}get shake(){return this.$$.ctx[13]}get float(){return this.$$.ctx[14]}get setRequired(){return this.$$.ctx[15]}get getWidth(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}function u1(n){let e,t,i,s,r,o,a=[{class:t=ge(Qe({[n[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":n[3]},n[5]))},{style:i=Object.entries(n[6]).map(i_).concat([n[2]]).join(" ")},n[8]],l={};for(let u=0;u<a.length;u+=1)l=P(l,a[u]);return{c(){e=Te("div"),this.h()},l(u){e=Ae(u,"DIV",{class:!0,style:!0}),we(e).forEach(x),this.h()},h(){ie(e,l)},m(u,c){Z(u,e,c),n[13](e),r||(o=[te(s=ot.call(null,e,n[0])),te(n[7].call(null,e))],r=!0)},p(u,[c]){ie(e,l=Ee(a,[c&42&&t!==(t=ge(Qe({[u[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":u[3]},u[5])))&&{class:t},c&68&&i!==(i=Object.entries(u[6]).map(i_).concat([u[2]]).join(" "))&&{style:i},c&256&&u[8]])),s&&Ue(s.update)&&c&1&&s.update.call(null,u[0])},i:Jt,o:Jt,d(u){u&&x(e),n[13](null),r=!1,Me(o)}}}const i_=([n,e])=>`${n}: ${e};`;function c1(n,e,t){const i=["use","class","style","active","activate","deactivate","setRippleCenter","getElement"];let s=J(e,i);const r=Ke(Ce());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{active:u=!1}=e,c,h,d={},f={};Cn(()=>(h=new QA({addClass:p,removeClass:g,hasClass:m,setStyle:E,registerEventHandler:(_,T)=>V().addEventListener(_,T),deregisterEventHandler:(_,T)=>V().removeEventListener(_,T)}),h.init(),()=>{h.destroy()}));function m(_){return _ in d?d[_]:V().classList.contains(_)}function p(_){d[_]||t(5,d[_]=!0,d)}function g(_){(!(_ in d)||d[_])&&t(5,d[_]=!1,d)}function E(_,T){f[_]!=T&&(T===""||T==null?(delete f[_],t(6,f)):t(6,f[_]=T,f))}function S(){h.activate()}function b(){h.deactivate()}function C(_){h.setRippleCenter(_)}function V(){return c}function w(_){ae[_?"unshift":"push"](()=>{c=_,t(4,c)})}return n.$$set=_=>{e=P(P({},e),xe(_)),t(8,s=J(e,i)),"use"in _&&t(0,o=_.use),"class"in _&&t(1,a=_.class),"style"in _&&t(2,l=_.style),"active"in _&&t(3,u=_.active)},[o,a,l,u,c,d,f,r,s,S,b,C,V,w]}class h1 extends He{constructor(e){super();Ve(this,e,c1,u1,Fe,{use:0,class:1,style:2,active:3,activate:9,deactivate:10,setRippleCenter:11,getElement:12})}get activate(){return this.$$.ctx[9]}get deactivate(){return this.$$.ctx[10]}get setRippleCenter(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function s_(n){let e,t,i;const s=n[14].default,r=de(s,n,n[13],null);return{c(){e=Te("div"),r&&r.c(),this.h()},l(o){e=Ae(o,"DIV",{class:!0,style:!0});var a=we(e);r&&r.l(a),a.forEach(x),this.h()},h(){Tn(e,"class","mdc-notched-outline__notch"),Tn(e,"style",t=Object.entries(n[7]).map(r_).join(" "))},m(o,a){Z(o,e,a),r&&r.m(e,null),i=!0},p(o,a){r&&r.p&&(!i||a&8192)&&me(r,s,o,o[13],i?fe(s,o[13],a,null):pe(o[13]),null),(!i||a&128&&t!==(t=Object.entries(o[7]).map(r_).join(" ")))&&Tn(e,"style",t)},i(o){i||(O(r,o),i=!0)},o(o){M(r,o),i=!1},d(o){o&&x(e),r&&r.d(o)}}}function d1(n){let e,t,i,s,r,o,a,l,u,c,h=!n[3]&&s_(n),d=[{class:o=ge(Qe({[n[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":n[2],"mdc-notched-outline--no-label":n[3]},n[6]))},n[9]],f={};for(let m=0;m<d.length;m+=1)f=P(f,d[m]);return{c(){e=Te("div"),t=Te("div"),i=ut(),h&&h.c(),s=ut(),r=Te("div"),this.h()},l(m){e=Ae(m,"DIV",{class:!0});var p=we(e);t=Ae(p,"DIV",{class:!0}),we(t).forEach(x),i=ct(p),h&&h.l(p),s=ct(p),r=Ae(p,"DIV",{class:!0}),we(r).forEach(x),p.forEach(x),this.h()},h(){Tn(t,"class","mdc-notched-outline__leading"),Tn(r,"class","mdc-notched-outline__trailing"),ie(e,f)},m(m,p){Z(m,e,p),qt(e,t),qt(e,i),h&&h.m(e,null),qt(e,s),qt(e,r),n[15](e),l=!0,u||(c=[te(a=ot.call(null,e,n[0])),te(n[8].call(null,e)),We(e,"SMUIFloatingLabel:mount",n[16]),We(e,"SMUIFloatingLabel:unmount",n[17])],u=!0)},p(m,[p]){m[3]?h&&(jt(),M(h,1,1,()=>{h=null}),Wt()):h?(h.p(m,p),p&8&&O(h,1)):(h=s_(m),h.c(),O(h,1),h.m(e,s)),ie(e,f=Ee(d,[(!l||p&78&&o!==(o=ge(Qe({[m[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":m[2],"mdc-notched-outline--no-label":m[3]},m[6]))))&&{class:o},p&512&&m[9]])),a&&Ue(a.update)&&p&1&&a.update.call(null,m[0])},i(m){l||(O(h),l=!0)},o(m){M(h),l=!1},d(m){m&&x(e),h&&h.d(),n[15](null),u=!1,Me(c)}}}const r_=([n,e])=>`${n}: ${e};`;function f1(n,e,t){const i=["use","class","notched","noLabel","notch","closeNotch","getElement"];let s=J(e,i),{$$slots:r={},$$scope:o}=e;const a=Ke(Ce());let{use:l=[]}=e,{class:u=""}=e,{notched:c=!1}=e,{noLabel:h=!1}=e,d,f,m,p={},g={};Cn(()=>(f=new $A({addClass:E,removeClass:S,setNotchWidthProperty:R=>b("width",R+"px"),removeNotchWidthProperty:()=>C("width")}),f.init(),()=>{f.destroy()}));function E(R){p[R]||t(6,p[R]=!0,p)}function S(R){(!(R in p)||p[R])&&t(6,p[R]=!1,p)}function b(R,Y){g[R]!=Y&&(Y===""||Y==null?(delete g[R],t(7,g)):t(7,g[R]=Y,g))}function C(R){R in g&&(delete g[R],t(7,g))}function V(R){f.notch(R)}function w(){f.closeNotch()}function _(){return d}function T(R){ae[R?"unshift":"push"](()=>{d=R,t(5,d)})}const U=R=>t(4,m=R.detail),I=()=>t(4,m=void 0);return n.$$set=R=>{e=P(P({},e),xe(R)),t(9,s=J(e,i)),"use"in R&&t(0,l=R.use),"class"in R&&t(1,u=R.class),"notched"in R&&t(2,c=R.notched),"noLabel"in R&&t(3,h=R.noLabel),"$$scope"in R&&t(13,o=R.$$scope)},n.$$.update=()=>{n.$$.dirty&16&&(m?(m.addStyle("transition-duration","0s"),E("mdc-notched-outline--upgraded"),requestAnimationFrame(()=>{m&&m.removeStyle("transition-duration")})):S("mdc-notched-outline--upgraded"))},[l,u,c,h,m,d,p,g,a,s,V,w,_,o,r,T,U,I]}class m1 extends He{constructor(e){super();Ve(this,e,f1,d1,Fe,{use:0,class:1,notched:2,noLabel:3,notch:10,closeNotch:11,getElement:12})}get notch(){return this.$$.ctx[10]}get closeNotch(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function p1(n){let e;const t=n[10].default,i=de(t,n,n[12],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&4096)&&me(i,t,s,s[12],e?fe(t,s[12],r,null):pe(s[12]),null)},i(s){e||(O(i,s),e=!0)},o(s){M(i,s),e=!1},d(s){i&&i.d(s)}}}function g1(n){let e,t,i;const s=[{use:[n[7],...n[0]]},{class:ge(Qe({[n[1]]:!0,[n[5]]:!0},n[4]))},n[6],n[8]];var r=n[2];function o(a){let l={$$slots:{default:[p1]},$$scope:{ctx:a}};for(let u=0;u<s.length;u+=1)l=P(l,s[u]);return{props:l}}return r&&(e=new r(o(n)),n[11](e)),{c(){e&&lt(e.$$.fragment),t=pt()},l(a){e&&wt(e.$$.fragment,a),t=pt()},m(a,l){e&&tt(e,a,l),Z(a,t,l),i=!0},p(a,[l]){const u=l&499?Ee(s,[l&129&&{use:[a[7],...a[0]]},l&50&&{class:ge(Qe({[a[1]]:!0,[a[5]]:!0},a[4]))},l&64&&et(a[6]),l&256&&et(a[8])]):{};if(l&4096&&(u.$$scope={dirty:l,ctx:a}),r!==(r=a[2])){if(e){jt();const c=e;M(c.$$.fragment,1,0,()=>{nt(c,1)}),Wt()}r?(e=new r(o(a)),a[11](e),lt(e.$$.fragment),O(e.$$.fragment,1),tt(e,t.parentNode,t)):e=null}else r&&e.$set(u)},i(a){i||(e&&O(e.$$.fragment,a),i=!0)},o(a){e&&M(e.$$.fragment,a),i=!1},d(a){n[11](null),a&&x(t),e&&nt(e,a)}}}const Ii={component:zg,class:"",classMap:{},contexts:{},props:{}};function _1(n,e,t){const i=["use","class","component","getElement"];let s=J(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e,{class:l=""}=e,u;const c=Ii.class,h={},d=[],f=Ii.contexts,m=Ii.props;let{component:p=Ii.component}=e;Object.entries(Ii.classMap).forEach(([b,C])=>{const V=on(C);V&&"subscribe"in V&&d.push(V.subscribe(w=>{t(4,h[b]=w,h)}))});const g=Ke(Ce());for(let b in f)f.hasOwnProperty(b)&&vt(b,f[b]);ki(()=>{for(const b of d)b()});function E(){return u.getElement()}function S(b){ae[b?"unshift":"push"](()=>{u=b,t(3,u)})}return n.$$set=b=>{e=P(P({},e),xe(b)),t(8,s=J(e,i)),"use"in b&&t(0,a=b.use),"class"in b&&t(1,l=b.class),"component"in b&&t(2,p=b.component),"$$scope"in b&&t(12,o=b.$$scope)},[a,l,p,u,h,c,m,g,s,E,r,S,o]}class y1 extends He{constructor(e){super();Ve(this,e,_1,g1,Fe,{use:0,class:1,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const o_=Object.assign({},Ii);function Et(n){return new Proxy(y1,{construct:function(e,t){return Object.assign(Ii,o_,n),new e(...t)},get:function(e,t){return Object.assign(Ii,o_,n),e[t]}})}var v1=Et({class:"mdc-text-field-helper-line",component:Xn}),I1=Et({class:"mdc-text-field__affix mdc-text-field__affix--prefix",component:Zi}),E1=Et({class:"mdc-text-field__affix mdc-text-field__affix--suffix",component:Zi});function b1(n){let e,t,i,s,r,o=[{class:t=ge({[n[1]]:!0,"mdc-text-field__input":!0})},{type:n[2]},{placeholder:n[3]},n[4],n[6],n[10]],a={};for(let l=0;l<o.length;l+=1)a=P(a,o[l]);return{c(){e=Te("input"),this.h()},l(l){e=Ae(l,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){ie(e,a)},m(l,u){Z(l,e,u),e.autofocus&&e.focus(),n[25](e),s||(r=[te(i=ot.call(null,e,n[0])),te(n[7].call(null,e)),We(e,"input",n[26]),We(e,"change",n[9]),We(e,"blur",n[23]),We(e,"focus",n[24])],s=!0)},p(l,[u]){ie(e,a=Ee(o,[u&2&&t!==(t=ge({[l[1]]:!0,"mdc-text-field__input":!0}))&&{class:t},u&4&&{type:l[2]},u&8&&{placeholder:l[3]},u&16&&l[4],u&64&&l[6],u&1024&&l[10]])),i&&Ue(i.update)&&u&1&&i.update.call(null,l[0])},i:Jt,o:Jt,d(l){l&&x(e),n[25](null),s=!1,Me(r)}}}function T1(n){if(n===""){const e=new Number(Number.NaN);return e.length=0,e}return+n}function C1(n,e,t){const i=["use","class","type","placeholder","value","files","dirty","invalid","updateInvalid","emptyValueNull","emptyValueUndefined","getAttr","addAttr","removeAttr","focus","getElement"];let s=J(e,i);const r=Ke(Ce());let{use:o=[]}=e,{class:a=""}=e,{type:l="text"}=e,{placeholder:u=" "}=e,{value:c=""}=e,{files:h=null}=e,{dirty:d=!1}=e,{invalid:f=!1}=e,{updateInvalid:m=!0}=e,{emptyValueNull:p=c===null}=e,{emptyValueUndefined:g=c===void 0}=e,E,S={},b={};Cn(()=>{m&&t(14,f=E.matches(":invalid"))});function C(A){if(l==="file"){t(12,h=A.currentTarget.files);return}if(A.currentTarget.value===""&&p){t(11,c=null);return}if(A.currentTarget.value===""&&g){t(11,c=void 0);return}switch(l){case"number":case"range":t(11,c=T1(A.currentTarget.value));break;default:t(11,c=A.currentTarget.value);break}}function V(A){(l==="file"||l==="range")&&C(A),t(13,d=!0),m&&t(14,f=E.matches(":invalid"))}function w(A){var H;return A in S?(H=S[A])!==null&&H!==void 0?H:null:I().getAttribute(A)}function _(A,H){S[A]!==H&&t(6,S[A]=H,S)}function T(A){(!(A in S)||S[A]!=null)&&t(6,S[A]=void 0,S)}function U(){I().focus()}function I(){return E}function R(A){hr.call(this,n,A)}function Y(A){hr.call(this,n,A)}function v(A){ae[A?"unshift":"push"](()=>{E=A,t(5,E)})}const L=A=>l!=="file"&&C(A);return n.$$set=A=>{e=P(P({},e),xe(A)),t(10,s=J(e,i)),"use"in A&&t(0,o=A.use),"class"in A&&t(1,a=A.class),"type"in A&&t(2,l=A.type),"placeholder"in A&&t(3,u=A.placeholder),"value"in A&&t(11,c=A.value),"files"in A&&t(12,h=A.files),"dirty"in A&&t(13,d=A.dirty),"invalid"in A&&t(14,f=A.invalid),"updateInvalid"in A&&t(15,m=A.updateInvalid),"emptyValueNull"in A&&t(16,p=A.emptyValueNull),"emptyValueUndefined"in A&&t(17,g=A.emptyValueUndefined)},n.$$.update=()=>{n.$$.dirty&2068&&(l==="file"?(delete b.value,t(4,b),t(2,l),t(11,c)):t(4,b.value=c==null?"":c,b))},[o,a,l,u,b,E,S,r,C,V,s,c,h,d,f,m,p,g,w,_,T,U,I,R,Y,v,L]}class S1 extends He{constructor(e){super();Ve(this,e,C1,b1,Fe,{use:0,class:1,type:2,placeholder:3,value:11,files:12,dirty:13,invalid:14,updateInvalid:15,emptyValueNull:16,emptyValueUndefined:17,getAttr:18,addAttr:19,removeAttr:20,focus:21,getElement:22})}get getAttr(){return this.$$.ctx[18]}get addAttr(){return this.$$.ctx[19]}get removeAttr(){return this.$$.ctx[20]}get focus(){return this.$$.ctx[21]}get getElement(){return this.$$.ctx[22]}}function w1(n){let e,t,i,s,r,o,a=[{class:t=ge({[n[2]]:!0,"mdc-text-field__input":!0})},{style:i=`${n[4]?"":"resize: none; "}${n[3]}`},n[6],n[9]],l={};for(let u=0;u<a.length;u+=1)l=P(l,a[u]);return{c(){e=Te("textarea"),this.h()},l(u){e=Ae(u,"TEXTAREA",{class:!0,style:!0}),we(e).forEach(x),this.h()},h(){ie(e,l)},m(u,c){Z(u,e,c),e.autofocus&&e.focus(),n[20](e),Dd(e,n[0]),r||(o=[te(s=ot.call(null,e,n[1])),te(n[7].call(null,e)),We(e,"change",n[8]),We(e,"blur",n[18]),We(e,"focus",n[19]),We(e,"input",n[21])],r=!0)},p(u,[c]){ie(e,l=Ee(a,[c&4&&t!==(t=ge({[u[2]]:!0,"mdc-text-field__input":!0}))&&{class:t},c&24&&i!==(i=`${u[4]?"":"resize: none; "}${u[3]}`)&&{style:i},c&64&&u[6],c&512&&u[9]])),s&&Ue(s.update)&&c&2&&s.update.call(null,u[1]),c&1&&Dd(e,u[0])},i:Jt,o:Jt,d(u){u&&x(e),n[20](null),r=!1,Me(o)}}}function A1(n,e,t){const i=["use","class","style","value","dirty","invalid","updateInvalid","resizable","getAttr","addAttr","removeAttr","focus","getElement"];let s=J(e,i);const r=Ke(Ce());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{value:u=""}=e,{dirty:c=!1}=e,{invalid:h=!1}=e,{updateInvalid:d=!0}=e,{resizable:f=!0}=e,m,p={};Cn(()=>{d&&t(11,h=m.matches(":invalid"))});function g(){t(10,c=!0),d&&t(11,h=m.matches(":invalid"))}function E(I){var R;return I in p?(R=p[I])!==null&&R!==void 0?R:null:V().getAttribute(I)}function S(I,R){p[I]!==R&&t(6,p[I]=R,p)}function b(I){(!(I in p)||p[I]!=null)&&t(6,p[I]=void 0,p)}function C(){V().focus()}function V(){return m}function w(I){hr.call(this,n,I)}function _(I){hr.call(this,n,I)}function T(I){ae[I?"unshift":"push"](()=>{m=I,t(5,m)})}function U(){u=this.value,t(0,u)}return n.$$set=I=>{e=P(P({},e),xe(I)),t(9,s=J(e,i)),"use"in I&&t(1,o=I.use),"class"in I&&t(2,a=I.class),"style"in I&&t(3,l=I.style),"value"in I&&t(0,u=I.value),"dirty"in I&&t(10,c=I.dirty),"invalid"in I&&t(11,h=I.invalid),"updateInvalid"in I&&t(12,d=I.updateInvalid),"resizable"in I&&t(4,f=I.resizable)},[u,o,a,l,f,m,p,r,g,s,c,h,d,E,S,b,C,V,w,_,T,U]}class R1 extends He{constructor(e){super();Ve(this,e,A1,w1,Fe,{use:1,class:2,style:3,value:0,dirty:10,invalid:11,updateInvalid:12,resizable:4,getAttr:13,addAttr:14,removeAttr:15,focus:16,getElement:17})}get getAttr(){return this.$$.ctx[13]}get addAttr(){return this.$$.ctx[14]}get removeAttr(){return this.$$.ctx[15]}get focus(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}const k1=n=>({}),a_=n=>({}),N1=n=>({}),l_=n=>({}),L1=n=>({}),u_=n=>({}),O1=n=>({}),c_=n=>({}),D1=n=>({}),h_=n=>({}),P1=n=>({}),d_=n=>({}),M1=n=>({}),f_=n=>({}),F1=n=>({}),m_=n=>({}),U1=n=>({}),p_=n=>({}),x1=n=>({}),g_=n=>({}),V1=n=>({}),__=n=>({}),H1=n=>({}),y_=n=>({});function B1(n){let e,t,i,s,r,o,a,l,u,c,h,d,f,m;const p=n[50].label,g=de(p,n,n[89],h_);i=new ml({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[j1]},$$scope:{ctx:n}}});const E=n[50].default,S=de(E,n,n[89],null);o=new ml({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[W1]},$$scope:{ctx:n}}});const b=n[50].ripple,C=de(b,n,n[89],l_);let V=[{class:l=ge(Qe({[n[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":n[12],"mdc-text-field--textarea":n[14],"mdc-text-field--filled":n[15]==="filled","mdc-text-field--outlined":n[15]==="outlined","smui-text-field--standard":n[15]==="standard"&&!n[14],"mdc-text-field--no-label":n[16]||!n[41].label,"mdc-text-field--with-leading-icon":n[41].leadingIcon,"mdc-text-field--with-trailing-icon":n[41].trailingIcon,"mdc-text-field--invalid":n[1]},n[25]))},{style:u=Object.entries(n[26]).map(k_).concat([n[10]]).join(" ")},cl(n[42],["input$","label$","ripple$","outline$","helperLine$"])],w={};for(let _=0;_<V.length;_+=1)w=P(w,V[_]);return{c(){e=Te("div"),g&&g.c(),t=ut(),lt(i.$$.fragment),s=ut(),S&&S.c(),r=ut(),lt(o.$$.fragment),a=ut(),C&&C.c(),this.h()},l(_){e=Ae(_,"DIV",{class:!0,style:!0});var T=we(e);g&&g.l(T),t=ct(T),wt(i.$$.fragment,T),s=ct(T),S&&S.l(T),r=ct(T),wt(o.$$.fragment,T),a=ct(T),C&&C.l(T),T.forEach(x),this.h()},h(){ie(e,w)},m(_,T){Z(_,e,T),g&&g.m(e,null),qt(e,t),tt(i,e,null),qt(e,s),S&&S.m(e,null),qt(e,r),tt(o,e,null),qt(e,a),C&&C.m(e,null),n[79](e),d=!0,f||(m=[te(c=Gs.call(null,e,{ripple:n[11],unbounded:!1,addClass:n[38],removeClass:n[39],addStyle:n[40]})),te(h=ot.call(null,e,n[8])),te(n[34].call(null,e)),We(e,"SMUITextfieldLeadingIcon:mount",n[80]),We(e,"SMUITextfieldLeadingIcon:unmount",n[81]),We(e,"SMUITextfieldTrailingIcon:mount",n[82]),We(e,"SMUITextfieldTrailingIcon:unmount",n[83])],f=!0)},p(_,T){g&&g.p&&(!d||T[2]&134217728)&&me(g,p,_,_[89],d?fe(p,_[89],T,D1):pe(_[89]),h_);const U={};T[2]&134217728&&(U.$$scope={dirty:T,ctx:_}),i.$set(U),S&&S.p&&(!d||T[2]&134217728)&&me(S,E,_,_[89],d?fe(E,_[89],T,null):pe(_[89]),null);const I={};T[2]&134217728&&(I.$$scope={dirty:T,ctx:_}),o.$set(I),C&&C.p&&(!d||T[2]&134217728)&&me(C,b,_,_[89],d?fe(b,_[89],T,N1):pe(_[89]),l_),ie(e,w=Ee(V,[(!d||T[0]&33673730|T[1]&1024&&l!==(l=ge(Qe({[_[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":_[12],"mdc-text-field--textarea":_[14],"mdc-text-field--filled":_[15]==="filled","mdc-text-field--outlined":_[15]==="outlined","smui-text-field--standard":_[15]==="standard"&&!_[14],"mdc-text-field--no-label":_[16]||!_[41].label,"mdc-text-field--with-leading-icon":_[41].leadingIcon,"mdc-text-field--with-trailing-icon":_[41].trailingIcon,"mdc-text-field--invalid":_[1]},_[25]))))&&{class:l},(!d||T[0]&67109888&&u!==(u=Object.entries(_[26]).map(k_).concat([_[10]]).join(" ")))&&{style:u},T[1]&2048&&cl(_[42],["input$","label$","ripple$","outline$","helperLine$"])])),c&&Ue(c.update)&&T[0]&2048&&c.update.call(null,{ripple:_[11],unbounded:!1,addClass:_[38],removeClass:_[39],addStyle:_[40]}),h&&Ue(h.update)&&T[0]&256&&h.update.call(null,_[8])},i(_){d||(O(g,_),O(i.$$.fragment,_),O(S,_),O(o.$$.fragment,_),O(C,_),d=!0)},o(_){M(g,_),M(i.$$.fragment,_),M(S,_),M(o.$$.fragment,_),M(C,_),d=!1},d(_){_&&x(e),g&&g.d(_),nt(i),S&&S.d(_),nt(o),C&&C.d(_),n[79](null),f=!1,Me(m)}}}function q1(n){let e,t,i,s,r,o,a,l,u,c,h,d,f,m,p,g,E,S,b=!n[14]&&n[15]!=="outlined"&&v_(n),C=(n[14]||n[15]==="outlined")&&b_(n);s=new ml({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[X1]},$$scope:{ctx:n}}});const V=n[50].default,w=de(V,n,n[89],null),_=[Q1,Y1],T=[];function U(v,L){return v[14]&&typeof v[0]=="string"?0:1}a=U(n),l=T[a]=_[a](n),c=new ml({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[$1]},$$scope:{ctx:n}}});let I=!n[14]&&n[15]!=="outlined"&&n[11]&&w_(n),R=[{class:d=ge(Qe({[n[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":n[12],"mdc-text-field--textarea":n[14],"mdc-text-field--filled":n[15]==="filled","mdc-text-field--outlined":n[15]==="outlined","smui-text-field--standard":n[15]==="standard"&&!n[14],"mdc-text-field--no-label":n[16]||n[17]==null&&!n[41].label,"mdc-text-field--label-floating":n[28]||n[0]!=null&&n[0]!=="","mdc-text-field--with-leading-icon":n[35](n[22])?n[41].leadingIcon:n[22],"mdc-text-field--with-trailing-icon":n[35](n[23])?n[41].trailingIcon:n[23],"mdc-text-field--with-internal-counter":n[14]&&n[41].internalCounter,"mdc-text-field--invalid":n[1]},n[25]))},{style:f=Object.entries(n[26]).map(R_).concat([n[10]]).join(" ")},{for:void 0},cl(n[42],["input$","label$","ripple$","outline$","helperLine$"])],Y={};for(let v=0;v<R.length;v+=1)Y=P(Y,R[v]);return{c(){e=Te("label"),b&&b.c(),t=ut(),C&&C.c(),i=ut(),lt(s.$$.fragment),r=ut(),w&&w.c(),o=ut(),l.c(),u=ut(),lt(c.$$.fragment),h=ut(),I&&I.c(),this.h()},l(v){e=Ae(v,"LABEL",{class:!0,style:!0,for:!0});var L=we(e);b&&b.l(L),t=ct(L),C&&C.l(L),i=ct(L),wt(s.$$.fragment,L),r=ct(L),w&&w.l(L),o=ct(L),l.l(L),u=ct(L),wt(c.$$.fragment,L),h=ct(L),I&&I.l(L),L.forEach(x),this.h()},h(){ie(e,Y)},m(v,L){Z(v,e,L),b&&b.m(e,null),qt(e,t),C&&C.m(e,null),qt(e,i),tt(s,e,null),qt(e,r),w&&w.m(e,null),qt(e,o),T[a].m(e,null),qt(e,u),tt(c,e,null),qt(e,h),I&&I.m(e,null),n[72](e),g=!0,E||(S=[te(m=Gs.call(null,e,{ripple:!n[14]&&n[15]==="filled",unbounded:!1,addClass:n[38],removeClass:n[39],addStyle:n[40],eventTarget:n[33],activeTarget:n[33],initPromise:n[37]})),te(p=ot.call(null,e,n[8])),te(n[34].call(null,e)),We(e,"SMUITextfieldLeadingIcon:mount",n[73]),We(e,"SMUITextfieldLeadingIcon:unmount",n[74]),We(e,"SMUITextfieldTrailingIcon:mount",n[75]),We(e,"SMUITextfieldTrailingIcon:unmount",n[76]),We(e,"SMUITextfieldCharacterCounter:mount",n[77]),We(e,"SMUITextfieldCharacterCounter:unmount",n[78])],E=!0)},p(v,L){!v[14]&&v[15]!=="outlined"?b?(b.p(v,L),L[0]&49152&&O(b,1)):(b=v_(v),b.c(),O(b,1),b.m(e,t)):b&&(jt(),M(b,1,1,()=>{b=null}),Wt()),v[14]||v[15]==="outlined"?C?(C.p(v,L),L[0]&49152&&O(C,1)):(C=b_(v),C.c(),O(C,1),C.m(e,i)):C&&(jt(),M(C,1,1,()=>{C=null}),Wt());const A={};L[2]&134217728&&(A.$$scope={dirty:L,ctx:v}),s.$set(A),w&&w.p&&(!g||L[2]&134217728)&&me(w,V,v,v[89],g?fe(V,v[89],L,null):pe(v[89]),null);let H=a;a=U(v),a===H?T[a].p(v,L):(jt(),M(T[H],1,1,()=>{T[H]=null}),Wt(),l=T[a],l?l.p(v,L):(l=T[a]=_[a](v),l.c()),O(l,1),l.m(e,u));const q={};L[2]&134217728&&(q.$$scope={dirty:L,ctx:v}),c.$set(q),!v[14]&&v[15]!=="outlined"&&v[11]?I?(I.p(v,L),L[0]&51200&&O(I,1)):(I=w_(v),I.c(),O(I,1),I.m(e,null)):I&&(jt(),M(I,1,1,()=>{I=null}),Wt()),ie(e,Y=Ee(R,[(!g||L[0]&314823171|L[1]&1024&&d!==(d=ge(Qe({[v[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":v[12],"mdc-text-field--textarea":v[14],"mdc-text-field--filled":v[15]==="filled","mdc-text-field--outlined":v[15]==="outlined","smui-text-field--standard":v[15]==="standard"&&!v[14],"mdc-text-field--no-label":v[16]||v[17]==null&&!v[41].label,"mdc-text-field--label-floating":v[28]||v[0]!=null&&v[0]!=="","mdc-text-field--with-leading-icon":v[35](v[22])?v[41].leadingIcon:v[22],"mdc-text-field--with-trailing-icon":v[35](v[23])?v[41].trailingIcon:v[23],"mdc-text-field--with-internal-counter":v[14]&&v[41].internalCounter,"mdc-text-field--invalid":v[1]},v[25]))))&&{class:d},(!g||L[0]&67109888&&f!==(f=Object.entries(v[26]).map(R_).concat([v[10]]).join(" ")))&&{style:f},{for:void 0},L[1]&2048&&cl(v[42],["input$","label$","ripple$","outline$","helperLine$"])])),m&&Ue(m.update)&&L[0]&49152|L[1]&4&&m.update.call(null,{ripple:!v[14]&&v[15]==="filled",unbounded:!1,addClass:v[38],removeClass:v[39],addStyle:v[40],eventTarget:v[33],activeTarget:v[33],initPromise:v[37]}),p&&Ue(p.update)&&L[0]&256&&p.update.call(null,v[8])},i(v){g||(O(b),O(C),O(s.$$.fragment,v),O(w,v),O(l),O(c.$$.fragment,v),O(I),g=!0)},o(v){M(b),M(C),M(s.$$.fragment,v),M(w,v),M(l),M(c.$$.fragment,v),M(I),g=!1},d(v){v&&x(e),b&&b.d(),C&&C.d(),nt(s),w&&w.d(v),T[a].d(),nt(c),I&&I.d(),n[72](null),E=!1,Me(S)}}}function j1(n){let e;const t=n[50].leadingIcon,i=de(t,n,n[89],c_);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&me(i,t,s,s[89],e?fe(t,s[89],r,O1):pe(s[89]),c_)},i(s){e||(O(i,s),e=!0)},o(s){M(i,s),e=!1},d(s){i&&i.d(s)}}}function W1(n){let e;const t=n[50].trailingIcon,i=de(t,n,n[89],u_);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&me(i,t,s,s[89],e?fe(t,s[89],r,L1):pe(s[89]),u_)},i(s){e||(O(i,s),e=!0)},o(s){M(i,s),e=!1},d(s){i&&i.d(s)}}}function v_(n){let e,t,i,s=n[15]==="filled"&&I_(),r=!n[16]&&(n[17]!=null||n[41].label)&&E_(n);return{c(){s&&s.c(),e=ut(),r&&r.c(),t=pt()},l(o){s&&s.l(o),e=ct(o),r&&r.l(o),t=pt()},m(o,a){s&&s.m(o,a),Z(o,e,a),r&&r.m(o,a),Z(o,t,a),i=!0},p(o,a){o[15]==="filled"?s||(s=I_(),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),!o[16]&&(o[17]!=null||o[41].label)?r?(r.p(o,a),a[0]&196608|a[1]&1024&&O(r,1)):(r=E_(o),r.c(),O(r,1),r.m(t.parentNode,t)):r&&(jt(),M(r,1,1,()=>{r=null}),Wt())},i(o){i||(O(r),i=!0)},o(o){M(r),i=!1},d(o){s&&s.d(o),o&&x(e),r&&r.d(o),o&&x(t)}}}function I_(n){let e;return{c(){e=Te("span"),this.h()},l(t){e=Ae(t,"SPAN",{class:!0}),we(e).forEach(x),this.h()},h(){Tn(e,"class","mdc-text-field__ripple")},m(t,i){Z(t,e,i)},d(t){t&&x(e)}}}function E_(n){let e,t;const i=[{floatAbove:n[28]||n[0]!=null&&n[0]!==""},{required:n[13]},{wrapped:!0},cn(n[42],"label$")];let s={$$slots:{default:[G1]},$$scope:{ctx:n}};for(let r=0;r<i.length;r+=1)s=P(s,i[r]);return e=new n_({props:s}),n[51](e),{c(){lt(e.$$.fragment)},l(r){wt(e.$$.fragment,r)},m(r,o){tt(e,r,o),t=!0},p(r,o){const a=o[0]&268443649|o[1]&2048?Ee(i,[o[0]&268435457&&{floatAbove:r[28]||r[0]!=null&&r[0]!==""},o[0]&8192&&{required:r[13]},i[2],o[1]&2048&&et(cn(r[42],"label$"))]):{};o[0]&131072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){M(e.$$.fragment,r),t=!1},d(r){n[51](null),nt(e,r)}}}function G1(n){let e=(n[17]==null?"":n[17])+"",t,i;const s=n[50].label,r=de(s,n,n[89],y_);return{c(){t=ni(e),r&&r.c()},l(o){t=_s(o,e),r&&r.l(o)},m(o,a){Z(o,t,a),r&&r.m(o,a),i=!0},p(o,a){(!i||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&cr(t,e),r&&r.p&&(!i||a[2]&134217728)&&me(r,s,o,o[89],i?fe(s,o[89],a,H1):pe(o[89]),y_)},i(o){i||(O(r,o),i=!0)},o(o){M(r,o),i=!1},d(o){o&&x(t),r&&r.d(o)}}}function b_(n){let e,t;const i=[{noLabel:n[16]||n[17]==null&&!n[41].label},cn(n[42],"outline$")];let s={$$slots:{default:[K1]},$$scope:{ctx:n}};for(let r=0;r<i.length;r+=1)s=P(s,i[r]);return e=new m1({props:s}),n[53](e),{c(){lt(e.$$.fragment)},l(r){wt(e.$$.fragment,r)},m(r,o){tt(e,r,o),t=!0},p(r,o){const a=o[0]&196608|o[1]&3072?Ee(i,[o[0]&196608|o[1]&1024&&{noLabel:r[16]||r[17]==null&&!r[41].label},o[1]&2048&&et(cn(r[42],"outline$"))]):{};o[0]&268640289|o[1]&3072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){M(e.$$.fragment,r),t=!1},d(r){n[53](null),nt(e,r)}}}function T_(n){let e,t;const i=[{floatAbove:n[28]||n[0]!=null&&n[0]!==""},{required:n[13]},{wrapped:!0},cn(n[42],"label$")];let s={$$slots:{default:[z1]},$$scope:{ctx:n}};for(let r=0;r<i.length;r+=1)s=P(s,i[r]);return e=new n_({props:s}),n[52](e),{c(){lt(e.$$.fragment)},l(r){wt(e.$$.fragment,r)},m(r,o){tt(e,r,o),t=!0},p(r,o){const a=o[0]&268443649|o[1]&2048?Ee(i,[o[0]&268435457&&{floatAbove:r[28]||r[0]!=null&&r[0]!==""},o[0]&8192&&{required:r[13]},i[2],o[1]&2048&&et(cn(r[42],"label$"))]):{};o[0]&131072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){M(e.$$.fragment,r),t=!1},d(r){n[52](null),nt(e,r)}}}function z1(n){let e=(n[17]==null?"":n[17])+"",t,i;const s=n[50].label,r=de(s,n,n[89],__);return{c(){t=ni(e),r&&r.c()},l(o){t=_s(o,e),r&&r.l(o)},m(o,a){Z(o,t,a),r&&r.m(o,a),i=!0},p(o,a){(!i||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&cr(t,e),r&&r.p&&(!i||a[2]&134217728)&&me(r,s,o,o[89],i?fe(s,o[89],a,V1):pe(o[89]),__)},i(o){i||(O(r,o),i=!0)},o(o){M(r,o),i=!1},d(o){o&&x(t),r&&r.d(o)}}}function K1(n){let e,t,i=!n[16]&&(n[17]!=null||n[41].label)&&T_(n);return{c(){i&&i.c(),e=pt()},l(s){i&&i.l(s),e=pt()},m(s,r){i&&i.m(s,r),Z(s,e,r),t=!0},p(s,r){!s[16]&&(s[17]!=null||s[41].label)?i?(i.p(s,r),r[0]&196608|r[1]&1024&&O(i,1)):(i=T_(s),i.c(),O(i,1),i.m(e.parentNode,e)):i&&(jt(),M(i,1,1,()=>{i=null}),Wt())},i(s){t||(O(i),t=!0)},o(s){M(i),t=!1},d(s){i&&i.d(s),s&&x(e)}}}function X1(n){let e;const t=n[50].leadingIcon,i=de(t,n,n[89],g_);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&me(i,t,s,s[89],e?fe(t,s[89],r,x1):pe(s[89]),g_)},i(s){e||(O(i,s),e=!0)},o(s){M(i,s),e=!1},d(s){i&&i.d(s)}}}function Y1(n){let e,t,i,s,r,o,a,l,u,c;const h=n[50].prefix,d=de(h,n,n[89],m_);let f=n[20]!=null&&C_(n);const m=[{type:n[18]},{disabled:n[12]},{required:n[13]},{updateInvalid:n[19]},{"aria-controls":n[27]},{"aria-describedby":n[27]},n[16]&&n[17]!=null?{placeholder:n[17]}:{},cn(n[42],"input$")];function p(_){n[63](_)}function g(_){n[64](_)}function E(_){n[65](_)}function S(_){n[66](_)}let b={};for(let _=0;_<m.length;_+=1)b=P(b,m[_]);n[0]!==void 0&&(b.value=n[0]),n[3]!==void 0&&(b.files=n[3]),n[4]!==void 0&&(b.dirty=n[4]),n[1]!==void 0&&(b.invalid=n[1]),i=new S1({props:b}),n[62](i),ae.push(()=>si(i,"value",p)),ae.push(()=>si(i,"files",g)),ae.push(()=>si(i,"dirty",E)),ae.push(()=>si(i,"invalid",S)),i.$on("blur",n[67]),i.$on("focus",n[68]),i.$on("blur",n[69]),i.$on("focus",n[70]);let C=n[21]!=null&&S_(n);const V=n[50].suffix,w=de(V,n,n[89],f_);return{c(){d&&d.c(),e=ut(),f&&f.c(),t=ut(),lt(i.$$.fragment),l=ut(),C&&C.c(),u=ut(),w&&w.c()},l(_){d&&d.l(_),e=ct(_),f&&f.l(_),t=ct(_),wt(i.$$.fragment,_),l=ct(_),C&&C.l(_),u=ct(_),w&&w.l(_)},m(_,T){d&&d.m(_,T),Z(_,e,T),f&&f.m(_,T),Z(_,t,T),tt(i,_,T),Z(_,l,T),C&&C.m(_,T),Z(_,u,T),w&&w.m(_,T),c=!0},p(_,T){d&&d.p&&(!c||T[2]&134217728)&&me(d,h,_,_[89],c?fe(h,_[89],T,F1):pe(_[89]),m_),_[20]!=null?f?(f.p(_,T),T[0]&1048576&&O(f,1)):(f=C_(_),f.c(),O(f,1),f.m(t.parentNode,t)):f&&(jt(),M(f,1,1,()=>{f=null}),Wt());const U=T[0]&135213056|T[1]&2048?Ee(m,[T[0]&262144&&{type:_[18]},T[0]&4096&&{disabled:_[12]},T[0]&8192&&{required:_[13]},T[0]&524288&&{updateInvalid:_[19]},T[0]&134217728&&{"aria-controls":_[27]},T[0]&134217728&&{"aria-describedby":_[27]},T[0]&196608&&et(_[16]&&_[17]!=null?{placeholder:_[17]}:{}),T[1]&2048&&et(cn(_[42],"input$"))]):{};!s&&T[0]&1&&(s=!0,U.value=_[0],ii(()=>s=!1)),!r&&T[0]&8&&(r=!0,U.files=_[3],ii(()=>r=!1)),!o&&T[0]&16&&(o=!0,U.dirty=_[4],ii(()=>o=!1)),!a&&T[0]&2&&(a=!0,U.invalid=_[1],ii(()=>a=!1)),i.$set(U),_[21]!=null?C?(C.p(_,T),T[0]&2097152&&O(C,1)):(C=S_(_),C.c(),O(C,1),C.m(u.parentNode,u)):C&&(jt(),M(C,1,1,()=>{C=null}),Wt()),w&&w.p&&(!c||T[2]&134217728)&&me(w,V,_,_[89],c?fe(V,_[89],T,M1):pe(_[89]),f_)},i(_){c||(O(d,_),O(f),O(i.$$.fragment,_),O(C),O(w,_),c=!0)},o(_){M(d,_),M(f),M(i.$$.fragment,_),M(C),M(w,_),c=!1},d(_){d&&d.d(_),_&&x(e),f&&f.d(_),_&&x(t),n[62](null),nt(i,_),_&&x(l),C&&C.d(_),_&&x(u),w&&w.d(_)}}}function Q1(n){let e,t,i,s,r,o,a,l;const u=[{disabled:n[12]},{required:n[13]},{updateInvalid:n[19]},{"aria-controls":n[27]},{"aria-describedby":n[27]},cn(n[42],"input$")];function c(g){n[55](g)}function h(g){n[56](g)}function d(g){n[57](g)}let f={};for(let g=0;g<u.length;g+=1)f=P(f,u[g]);n[0]!==void 0&&(f.value=n[0]),n[4]!==void 0&&(f.dirty=n[4]),n[1]!==void 0&&(f.invalid=n[1]),t=new R1({props:f}),n[54](t),ae.push(()=>si(t,"value",c)),ae.push(()=>si(t,"dirty",h)),ae.push(()=>si(t,"invalid",d)),t.$on("blur",n[58]),t.$on("focus",n[59]),t.$on("blur",n[60]),t.$on("focus",n[61]);const m=n[50].internalCounter,p=de(m,n,n[89],p_);return{c(){e=Te("span"),lt(t.$$.fragment),o=ut(),p&&p.c(),this.h()},l(g){e=Ae(g,"SPAN",{class:!0});var E=we(e);wt(t.$$.fragment,E),o=ct(E),p&&p.l(E),E.forEach(x),this.h()},h(){Tn(e,"class",a=ge({"mdc-text-field__resizer":!("input$resizable"in n[42])||n[42].input$resizable}))},m(g,E){Z(g,e,E),tt(t,e,null),qt(e,o),p&&p.m(e,null),l=!0},p(g,E){const S=E[0]&134754304|E[1]&2048?Ee(u,[E[0]&4096&&{disabled:g[12]},E[0]&8192&&{required:g[13]},E[0]&524288&&{updateInvalid:g[19]},E[0]&134217728&&{"aria-controls":g[27]},E[0]&134217728&&{"aria-describedby":g[27]},E[1]&2048&&et(cn(g[42],"input$"))]):{};!i&&E[0]&1&&(i=!0,S.value=g[0],ii(()=>i=!1)),!s&&E[0]&16&&(s=!0,S.dirty=g[4],ii(()=>s=!1)),!r&&E[0]&2&&(r=!0,S.invalid=g[1],ii(()=>r=!1)),t.$set(S),p&&p.p&&(!l||E[2]&134217728)&&me(p,m,g,g[89],l?fe(m,g[89],E,U1):pe(g[89]),p_),(!l||E[1]&2048&&a!==(a=ge({"mdc-text-field__resizer":!("input$resizable"in g[42])||g[42].input$resizable})))&&Tn(e,"class",a)},i(g){l||(O(t.$$.fragment,g),O(p,g),l=!0)},o(g){M(t.$$.fragment,g),M(p,g),l=!1},d(g){g&&x(e),n[54](null),nt(t),p&&p.d(g)}}}function C_(n){let e,t;return e=new I1({props:{$$slots:{default:[J1]},$$scope:{ctx:n}}}),{c(){lt(e.$$.fragment)},l(i){wt(e.$$.fragment,i)},m(i,s){tt(e,i,s),t=!0},p(i,s){const r={};s[0]&1048576|s[2]&134217728&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){t||(O(e.$$.fragment,i),t=!0)},o(i){M(e.$$.fragment,i),t=!1},d(i){nt(e,i)}}}function J1(n){let e;return{c(){e=ni(n[20])},l(t){e=_s(t,n[20])},m(t,i){Z(t,e,i)},p(t,i){i[0]&1048576&&cr(e,t[20])},d(t){t&&x(e)}}}function S_(n){let e,t;return e=new E1({props:{$$slots:{default:[Z1]},$$scope:{ctx:n}}}),{c(){lt(e.$$.fragment)},l(i){wt(e.$$.fragment,i)},m(i,s){tt(e,i,s),t=!0},p(i,s){const r={};s[0]&2097152|s[2]&134217728&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){t||(O(e.$$.fragment,i),t=!0)},o(i){M(e.$$.fragment,i),t=!1},d(i){nt(e,i)}}}function Z1(n){let e;return{c(){e=ni(n[21])},l(t){e=_s(t,n[21])},m(t,i){Z(t,e,i)},p(t,i){i[0]&2097152&&cr(e,t[21])},d(t){t&&x(e)}}}function $1(n){let e;const t=n[50].trailingIcon,i=de(t,n,n[89],d_);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&me(i,t,s,s[89],e?fe(t,s[89],r,P1):pe(s[89]),d_)},i(s){e||(O(i,s),e=!0)},o(s){M(i,s),e=!1},d(s){i&&i.d(s)}}}function w_(n){let e,t;const i=[cn(n[42],"ripple$")];let s={};for(let r=0;r<i.length;r+=1)s=P(s,i[r]);return e=new h1({props:s}),n[71](e),{c(){lt(e.$$.fragment)},l(r){wt(e.$$.fragment,r)},m(r,o){tt(e,r,o),t=!0},p(r,o){const a=o[1]&2048?Ee(i,[et(cn(r[42],"ripple$"))]):{};e.$set(a)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){M(e.$$.fragment,r),t=!1},d(r){n[71](null),nt(e,r)}}}function A_(n){let e,t;const i=[cn(n[42],"helperLine$")];let s={$$slots:{default:[eR]},$$scope:{ctx:n}};for(let r=0;r<i.length;r+=1)s=P(s,i[r]);return e=new v1({props:s}),e.$on("SMUITextfieldHelperText:id",n[84]),e.$on("SMUITextfieldHelperText:mount",n[85]),e.$on("SMUITextfieldHelperText:unmount",n[86]),e.$on("SMUITextfieldCharacterCounter:mount",n[87]),e.$on("SMUITextfieldCharacterCounter:unmount",n[88]),{c(){lt(e.$$.fragment)},l(r){wt(e.$$.fragment,r)},m(r,o){tt(e,r,o),t=!0},p(r,o){const a=o[1]&2048?Ee(i,[et(cn(r[42],"helperLine$"))]):{};o[2]&134217728&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){t||(O(e.$$.fragment,r),t=!0)},o(r){M(e.$$.fragment,r),t=!1},d(r){nt(e,r)}}}function eR(n){let e;const t=n[50].helper,i=de(t,n,n[89],a_);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&me(i,t,s,s[89],e?fe(t,s[89],r,k1):pe(s[89]),a_)},i(s){e||(O(i,s),e=!0)},o(s){M(i,s),e=!1},d(s){i&&i.d(s)}}}function tR(n){let e,t,i,s,r;const o=[q1,B1],a=[];function l(c,h){return c[36]?0:1}e=l(n),t=a[e]=o[e](n);let u=n[41].helper&&A_(n);return{c(){t.c(),i=ut(),u&&u.c(),s=pt()},l(c){t.l(c),i=ct(c),u&&u.l(c),s=pt()},m(c,h){a[e].m(c,h),Z(c,i,h),u&&u.m(c,h),Z(c,s,h),r=!0},p(c,h){t.p(c,h),c[41].helper?u?(u.p(c,h),h[1]&1024&&O(u,1)):(u=A_(c),u.c(),O(u,1),u.m(s.parentNode,s)):u&&(jt(),M(u,1,1,()=>{u=null}),Wt())},i(c){r||(O(t),O(u),r=!0)},o(c){M(t),M(u),r=!1},d(c){a[e].d(c),c&&x(i),u&&u.d(c),c&&x(s)}}}const R_=([n,e])=>`${n}: ${e};`,k_=([n,e])=>`${n}: ${e};`;function nR(n,e,t){let i;const s=["use","class","style","ripple","disabled","required","textarea","variant","noLabel","label","type","value","files","invalid","updateInvalid","dirty","prefix","suffix","validateOnValueChange","useNativeValidation","withLeadingIcon","withTrailingIcon","input","floatingLabel","lineRipple","notchedOutline","focus","layout","getElement"];let r=J(e,s),{$$slots:o={},$$scope:a}=e;const l=FI(o),{applyPassive:u}=Bg,c=Ke(Ce());let h=()=>{};function d(y){return y===h}let{use:f=[]}=e,{class:m=""}=e,{style:p=""}=e,{ripple:g=!0}=e,{disabled:E=!1}=e,{required:S=!1}=e,{textarea:b=!1}=e,{variant:C=b?"outlined":"standard"}=e,{noLabel:V=!1}=e,{label:w=void 0}=e,{type:_="text"}=e,{value:T=h}=e,{files:U=h}=e;const I=!d(T)||!d(U);d(T)&&(T=void 0),d(U)&&(U=null);let{invalid:R=h}=e,{updateInvalid:Y=d(R)}=e;d(R)&&(R=!1);let{dirty:v=!1}=e,{prefix:L=void 0}=e,{suffix:A=void 0}=e,{validateOnValueChange:H=Y}=e,{useNativeValidation:q=Y}=e,{withLeadingIcon:G=h}=e,{withTrailingIcon:Le=h}=e,{input:ee=void 0}=e,{floatingLabel:qe=void 0}=e,{lineRipple:Xe=void 0}=e,{notchedOutline:Ct=void 0}=e,Dt,ke,Pt={},Oe={},B,ve=!1,St=on("SMUI:addLayoutListener"),ei,Ai,D=new Promise(y=>Ai=y),oe,Ye,Bt,bn,ti=T;St&&(ei=St(Fo)),Cn(()=>{if(t(48,ke=new i1({addClass:ur,removeClass:Mo,hasClass:jl,registerTextFieldInteractionHandler:(y,mt)=>gs().addEventListener(y,mt),deregisterTextFieldInteractionHandler:(y,mt)=>gs().removeEventListener(y,mt),registerValidationAttributeChangeHandler:y=>{const mt=Xl=>Xl.map(Yl=>Yl.attributeName).filter(Yl=>Yl),Sd=new MutationObserver(Xl=>{q&&y(mt(Xl))}),kI={attributes:!0};return ee&&Sd.observe(ee.getElement(),kI),Sd},deregisterValidationAttributeChangeHandler:y=>{y.disconnect()},getNativeInput:()=>{var y;return(y=ee==null?void 0:ee.getElement())!==null&&y!==void 0?y:null},setInputAttr:(y,mt)=>{ee==null||ee.addAttr(y,mt)},removeInputAttr:y=>{ee==null||ee.removeAttr(y)},isFocused:()=>document.activeElement===(ee==null?void 0:ee.getElement()),registerInputInteractionHandler:(y,mt)=>{ee==null||ee.getElement().addEventListener(y,mt,u())},deregisterInputInteractionHandler:(y,mt)=>{ee==null||ee.getElement().removeEventListener(y,mt,u())},floatLabel:y=>qe&&qe.float(y),getLabelWidth:()=>qe?qe.getWidth():0,hasLabel:()=>!!qe,shakeLabel:y=>qe&&qe.shake(y),setLabelRequired:y=>qe&&qe.setRequired(y),activateLineRipple:()=>Xe&&Xe.activate(),deactivateLineRipple:()=>Xe&&Xe.deactivate(),setLineRippleTransformOrigin:y=>Xe&&Xe.setRippleCenter(y),closeOutline:()=>Ct&&Ct.closeNotch(),hasOutline:()=>!!Ct,notchOutline:y=>Ct&&Ct.notch(y)},{get helperText(){return Bt},get characterCounter(){return bn},get leadingIcon(){return oe},get trailingIcon(){return Ye}})),I){if(ee==null)throw new Error("SMUI Textfield initialized without Input component.");ke.init()}else KI().then(()=>{if(ee==null)throw new Error("SMUI Textfield initialized without Input component.");ke.init()});return Ai(),()=>{ke.destroy()}}),ki(()=>{ei&&ei()});function jl(y){var mt;return y in Pt?(mt=Pt[y])!==null&&mt!==void 0?mt:null:gs().classList.contains(y)}function ur(y){Pt[y]||t(25,Pt[y]=!0,Pt)}function Mo(y){(!(y in Pt)||Pt[y])&&t(25,Pt[y]=!1,Pt)}function On(y,mt){Oe[y]!=mt&&(mt===""||mt==null?(delete Oe[y],t(26,Oe)):t(26,Oe[y]=mt,Oe))}function Wl(){ee==null||ee.focus()}function Fo(){if(ke){const y=ke.shouldFloat;ke.notchOutline(y)}}function gs(){return Dt}function Gl(y){ae[y?"unshift":"push"](()=>{qe=y,t(5,qe)})}function zl(y){ae[y?"unshift":"push"](()=>{qe=y,t(5,qe)})}function k(y){ae[y?"unshift":"push"](()=>{Ct=y,t(7,Ct)})}function Q(y){ae[y?"unshift":"push"](()=>{ee=y,t(2,ee)})}function X(y){T=y,t(0,T)}function je(y){v=y,t(4,v)}function Ri(y){R=y,t(1,R),t(48,ke),t(19,Y)}const Kl=()=>t(28,ve=!1),$v=()=>t(28,ve=!0),eI=y=>rt(Dt,"blur",y),tI=y=>rt(Dt,"focus",y);function nI(y){ae[y?"unshift":"push"](()=>{ee=y,t(2,ee)})}function iI(y){T=y,t(0,T)}function sI(y){U=y,t(3,U)}function rI(y){v=y,t(4,v)}function oI(y){R=y,t(1,R),t(48,ke),t(19,Y)}const aI=()=>t(28,ve=!1),lI=()=>t(28,ve=!0),uI=y=>rt(Dt,"blur",y),cI=y=>rt(Dt,"focus",y);function hI(y){ae[y?"unshift":"push"](()=>{Xe=y,t(6,Xe)})}function dI(y){ae[y?"unshift":"push"](()=>{Dt=y,t(24,Dt)})}const fI=y=>t(29,oe=y.detail),mI=()=>t(29,oe=void 0),pI=y=>t(30,Ye=y.detail),gI=()=>t(30,Ye=void 0),_I=y=>t(32,bn=y.detail),yI=()=>t(32,bn=void 0);function vI(y){ae[y?"unshift":"push"](()=>{Dt=y,t(24,Dt)})}const II=y=>t(29,oe=y.detail),EI=()=>t(29,oe=void 0),bI=y=>t(30,Ye=y.detail),TI=()=>t(30,Ye=void 0),CI=y=>t(27,B=y.detail),SI=y=>t(31,Bt=y.detail),wI=()=>{t(27,B=void 0),t(31,Bt=void 0)},AI=y=>t(32,bn=y.detail),RI=()=>t(32,bn=void 0);return n.$$set=y=>{e=P(P({},e),xe(y)),t(42,r=J(e,s)),"use"in y&&t(8,f=y.use),"class"in y&&t(9,m=y.class),"style"in y&&t(10,p=y.style),"ripple"in y&&t(11,g=y.ripple),"disabled"in y&&t(12,E=y.disabled),"required"in y&&t(13,S=y.required),"textarea"in y&&t(14,b=y.textarea),"variant"in y&&t(15,C=y.variant),"noLabel"in y&&t(16,V=y.noLabel),"label"in y&&t(17,w=y.label),"type"in y&&t(18,_=y.type),"value"in y&&t(0,T=y.value),"files"in y&&t(3,U=y.files),"invalid"in y&&t(1,R=y.invalid),"updateInvalid"in y&&t(19,Y=y.updateInvalid),"dirty"in y&&t(4,v=y.dirty),"prefix"in y&&t(20,L=y.prefix),"suffix"in y&&t(21,A=y.suffix),"validateOnValueChange"in y&&t(43,H=y.validateOnValueChange),"useNativeValidation"in y&&t(44,q=y.useNativeValidation),"withLeadingIcon"in y&&t(22,G=y.withLeadingIcon),"withTrailingIcon"in y&&t(23,Le=y.withTrailingIcon),"input"in y&&t(2,ee=y.input),"floatingLabel"in y&&t(5,qe=y.floatingLabel),"lineRipple"in y&&t(6,Xe=y.lineRipple),"notchedOutline"in y&&t(7,Ct=y.notchedOutline),"$$scope"in y&&t(89,a=y.$$scope)},n.$$.update=()=>{if(n.$$.dirty[0]&4&&t(33,i=ee&&ee.getElement()),n.$$.dirty[0]&524290|n.$$.dirty[1]&131072&&ke&&ke.isValid()!==!R&&(Y?t(1,R=!ke.isValid()):ke.setValid(!R)),n.$$.dirty[1]&135168&&ke&&ke.getValidateOnValueChange()!==H&&ke.setValidateOnValueChange(d(H)?!1:H),n.$$.dirty[1]&139264&&ke&&ke.setUseNativeValidation(d(q)?!0:q),n.$$.dirty[0]&4096|n.$$.dirty[1]&131072&&ke&&ke.setDisabled(E),n.$$.dirty[0]&1|n.$$.dirty[1]&393216&&ke&&I&&ti!==T){t(49,ti=T);const y=`${T}`;ke.getValue()!==y&&ke.setValue(y)}},[T,R,ee,U,v,qe,Xe,Ct,f,m,p,g,E,S,b,C,V,w,_,Y,L,A,G,Le,Dt,Pt,Oe,B,ve,oe,Ye,Bt,bn,i,c,d,I,D,ur,Mo,On,l,r,H,q,Wl,Fo,gs,ke,ti,o,Gl,zl,k,Q,X,je,Ri,Kl,$v,eI,tI,nI,iI,sI,rI,oI,aI,lI,uI,cI,hI,dI,fI,mI,pI,gI,_I,yI,vI,II,EI,bI,TI,CI,SI,wI,AI,RI,a]}class zD extends He{constructor(e){super();Ve(this,e,nR,tR,Fe,{use:8,class:9,style:10,ripple:11,disabled:12,required:13,textarea:14,variant:15,noLabel:16,label:17,type:18,value:0,files:3,invalid:1,updateInvalid:19,dirty:4,prefix:20,suffix:21,validateOnValueChange:43,useNativeValidation:44,withLeadingIcon:22,withTrailingIcon:23,input:2,floatingLabel:5,lineRipple:6,notchedOutline:7,focus:45,layout:46,getElement:47},null,[-1,-1,-1,-1])}get focus(){return this.$$.ctx[45]}get layout(){return this.$$.ctx[46]}get getElement(){return this.$$.ctx[47]}}function iR(n){let e;return{c(){e=ni(n[8])},l(t){e=_s(t,n[8])},m(t,i){Z(t,e,i)},p(t,i){i&256&&cr(e,t[8])},i:Jt,o:Jt,d(t){t&&x(e)}}}function sR(n){let e;const t=n[13].default,i=de(t,n,n[12],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&4096)&&me(i,t,s,s[12],e?fe(t,s[12],r,null):pe(s[12]),null)},i(s){e||(O(i,s),e=!0)},o(s){M(i,s),e=!1},d(s){i&&i.d(s)}}}function rR(n){let e,t,i,s,r,o,a,l,u;const c=[sR,iR],h=[];function d(p,g){return p[8]==null?0:1}t=d(n),i=h[t]=c[t](n);let f=[{class:s=ge(Qe({[n[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":n[3],"mdc-text-field-helper-text--validation-msg":n[4]},n[6]))},{"aria-hidden":r=n[3]?void 0:"true"},{id:n[2]},n[7],n[10]],m={};for(let p=0;p<f.length;p+=1)m=P(m,f[p]);return{c(){e=Te("div"),i.c(),this.h()},l(p){e=Ae(p,"DIV",{class:!0,"aria-hidden":!0,id:!0});var g=we(e);i.l(g),g.forEach(x),this.h()},h(){ie(e,m)},m(p,g){Z(p,e,g),h[t].m(e,null),n[14](e),a=!0,l||(u=[te(o=ot.call(null,e,n[0])),te(n[9].call(null,e))],l=!0)},p(p,[g]){let E=t;t=d(p),t===E?h[t].p(p,g):(jt(),M(h[E],1,1,()=>{h[E]=null}),Wt(),i=h[t],i?i.p(p,g):(i=h[t]=c[t](p),i.c()),O(i,1),i.m(e,null)),ie(e,m=Ee(f,[(!a||g&90&&s!==(s=ge(Qe({[p[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":p[3],"mdc-text-field-helper-text--validation-msg":p[4]},p[6]))))&&{class:s},(!a||g&8&&r!==(r=p[3]?void 0:"true"))&&{"aria-hidden":r},(!a||g&4)&&{id:p[2]},g&128&&p[7],g&1024&&p[10]])),o&&Ue(o.update)&&g&1&&o.update.call(null,p[0])},i(p){a||(O(i),a=!0)},o(p){M(i),a=!1},d(p){p&&x(e),h[t].d(),n[14](null),l=!1,Me(u)}}}let oR=0;function aR(n,e,t){const i=["use","class","id","persistent","validationMsg","getElement"];let s=J(e,i),{$$slots:r={},$$scope:o}=e;const a=Ke(Ce());let{use:l=[]}=e,{class:u=""}=e,{id:c="SMUI-textfield-helper-text-"+oR++}=e,{persistent:h=!1}=e,{validationMsg:d=!1}=e,f,m,p={},g={},E;Cn(()=>(m=new s1({addClass:b,removeClass:C,hasClass:S,getAttr:V,setAttr:w,removeAttr:_,setContent:I=>{t(8,E=I)}}),c.startsWith("SMUI-textfield-helper-text-")&&rt(T(),"SMUITextfieldHelperText:id",c),rt(T(),"SMUITextfieldHelperText:mount",m),m.init(),()=>{rt(T(),"SMUITextfieldHelperText:unmount",m),m.destroy()}));function S(I){return I in p?p[I]:T().classList.contains(I)}function b(I){p[I]||t(6,p[I]=!0,p)}function C(I){(!(I in p)||p[I])&&t(6,p[I]=!1,p)}function V(I){var R;return I in g?(R=g[I])!==null&&R!==void 0?R:null:T().getAttribute(I)}function w(I,R){g[I]!==R&&t(7,g[I]=R,g)}function _(I){(!(I in g)||g[I]!=null)&&t(7,g[I]=void 0,g)}function T(){return f}function U(I){ae[I?"unshift":"push"](()=>{f=I,t(5,f)})}return n.$$set=I=>{e=P(P({},e),xe(I)),t(10,s=J(e,i)),"use"in I&&t(0,l=I.use),"class"in I&&t(1,u=I.class),"id"in I&&t(2,c=I.id),"persistent"in I&&t(3,h=I.persistent),"validationMsg"in I&&t(4,d=I.validationMsg),"$$scope"in I&&t(12,o=I.$$scope)},[l,u,c,h,d,f,p,g,E,a,s,T,o,r,U]}class KD extends He{constructor(e){super();Ve(this,e,aR,rR,Fe,{use:0,class:1,id:2,persistent:3,validationMsg:4,getElement:11})}get getElement(){return this.$$.ctx[11]}}/**
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
 */var lR={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},uR={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},uo={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},ht;(function(n){n[n.BOTTOM=1]="BOTTOM",n[n.CENTER=2]="CENTER",n[n.RIGHT=4]="RIGHT",n[n.FLIP_RTL=8]="FLIP_RTL"})(ht||(ht={}));var zs;(function(n){n[n.TOP_LEFT=0]="TOP_LEFT",n[n.TOP_RIGHT=4]="TOP_RIGHT",n[n.BOTTOM_LEFT=1]="BOTTOM_LEFT",n[n.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",n[n.TOP_START=8]="TOP_START",n[n.TOP_END=12]="TOP_END",n[n.BOTTOM_START=9]="BOTTOM_START",n[n.BOTTOM_END=13]="BOTTOM_END"})(zs||(zs={}));/**
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
 */var Ei,Qn,ce={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};Ei={},Ei[""+ce.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",Ei[""+ce.LIST_ITEM_CLASS]="mdc-list-item",Ei[""+ce.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",Ei[""+ce.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",Ei[""+ce.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",Ei[""+ce.ROOT]="mdc-list";var Ks=(Qn={},Qn[""+ce.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",Qn[""+ce.LIST_ITEM_CLASS]="mdc-deprecated-list-item",Qn[""+ce.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",Qn[""+ce.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",Qn[""+ce.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",Qn[""+ce.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",Qn[""+ce.ROOT]="mdc-deprecated-list",Qn),bi={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+ce.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+ce.LIST_ITEM_CLASS+` a,
    .`+Ks[ce.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Ks[ce.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+ce.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+ce.LIST_ITEM_CLASS+` a,
    .`+ce.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+ce.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+Ks[ce.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Ks[ce.LIST_ITEM_CLASS]+` a,
    .`+Ks[ce.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+Ks[ce.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},bt={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};/**
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
 */var cR=["input","button","textarea","select"],es=function(n){var e=n.target;if(!!e){var t=(""+e.tagName).toLowerCase();cR.indexOf(t)===-1&&n.preventDefault()}};/**
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
 */function hR(){var n={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return n}function dR(n,e){for(var t=new Map,i=0;i<n;i++){var s=e(i).trim();if(!!s){var r=s[0].toLowerCase();t.has(r)||t.set(r,[]),t.get(r).push({text:s.toLowerCase(),index:i})}}return t.forEach(function(o){o.sort(function(a,l){return a.index-l.index})}),t}function mh(n,e){var t=n.nextChar,i=n.focusItemAtIndex,s=n.sortedIndexByFirstChar,r=n.focusedItemIndex,o=n.skipFocus,a=n.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){L_(e)},bt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+t;var l;return e.typeaheadBuffer.length===1?l=fR(s,r,a,e):l=mR(s,a,e),l!==-1&&!o&&i(l),l}function fR(n,e,t,i){var s=i.typeaheadBuffer[0],r=n.get(s);if(!r)return-1;if(s===i.currentFirstChar&&r[i.sortedIndexCursor].index===e){i.sortedIndexCursor=(i.sortedIndexCursor+1)%r.length;var o=r[i.sortedIndexCursor].index;if(!t(o))return o}i.currentFirstChar=s;var a=-1,l;for(l=0;l<r.length;l++)if(!t(r[l].index)){a=l;break}for(;l<r.length;l++)if(r[l].index>e&&!t(r[l].index)){a=l;break}return a!==-1?(i.sortedIndexCursor=a,r[i.sortedIndexCursor].index):-1}function mR(n,e,t){var i=t.typeaheadBuffer[0],s=n.get(i);if(!s)return-1;var r=s[t.sortedIndexCursor];if(r.text.lastIndexOf(t.typeaheadBuffer,0)===0&&!e(r.index))return r.index;for(var o=(t.sortedIndexCursor+1)%s.length,a=-1;o!==t.sortedIndexCursor;){var l=s[o],u=l.text.lastIndexOf(t.typeaheadBuffer,0)===0,c=!e(l.index);if(u&&c){a=o;break}o=(o+1)%s.length}return a!==-1?(t.sortedIndexCursor=a,s[t.sortedIndexCursor].index):-1}function N_(n){return n.typeaheadBuffer.length>0}function L_(n){n.typeaheadBuffer=""}function O_(n,e){var t=n.event,i=n.isTargetListItem,s=n.focusedItemIndex,r=n.focusItemAtIndex,o=n.sortedIndexByFirstChar,a=n.isItemAtIndexDisabled,l=Yt(t)==="ArrowLeft",u=Yt(t)==="ArrowUp",c=Yt(t)==="ArrowRight",h=Yt(t)==="ArrowDown",d=Yt(t)==="Home",f=Yt(t)==="End",m=Yt(t)==="Enter",p=Yt(t)==="Spacebar";if(t.ctrlKey||t.metaKey||l||u||c||h||d||f||m)return-1;var g=!p&&t.key.length===1;if(g){es(t);var E={focusItemAtIndex:r,focusedItemIndex:s,nextChar:t.key.toLowerCase(),sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return mh(E,e)}if(!p)return-1;i&&es(t);var S=i&&N_(e);if(S){var E={focusItemAtIndex:r,focusedItemIndex:s,nextChar:" ",sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return mh(E,e)}return-1}/**
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
 */function pR(n){return n instanceof Array}var gR=function(n){An(e,n);function e(t){var i=n.call(this,it(it({},e.defaultAdapter),t))||this;return i.wrapFocus=!1,i.isVertical=!0,i.isSingleSelectionList=!1,i.selectedIndex=bt.UNSET_INDEX,i.focusedItemIndex=bt.UNSET_INDEX,i.useActivatedClass=!1,i.useSelectedAttr=!1,i.ariaCurrentAttrValue=null,i.isCheckboxList=!1,i.isRadioList=!1,i.hasTypeahead=!1,i.typeaheadState=hR(),i.sortedIndexByFirstChar=new Map,i}return Object.defineProperty(e,"strings",{get:function(){return bi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return ce},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return bt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(t){this.wrapFocus=t},e.prototype.setVerticalOrientation=function(t){this.isVertical=t},e.prototype.setSingleSelection=function(t){this.isSingleSelectionList=t,t&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.maybeInitializeSingleSelection=function(){var t=this.getSelectedIndexFromDOM();if(t!==bt.UNSET_INDEX){var i=this.adapter.listItemAtIndexHasClass(t,ce.LIST_ITEM_ACTIVATED_CLASS);i&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=t}},e.prototype.getSelectedIndexFromDOM=function(){for(var t=bt.UNSET_INDEX,i=this.adapter.getListItemCount(),s=0;s<i;s++){var r=this.adapter.listItemAtIndexHasClass(s,ce.LIST_ITEM_SELECTED_CLASS),o=this.adapter.listItemAtIndexHasClass(s,ce.LIST_ITEM_ACTIVATED_CLASS);if(!!(r||o)){t=s;break}}return t},e.prototype.setHasTypeahead=function(t){this.hasTypeahead=t,t&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&N_(this.typeaheadState)},e.prototype.setUseActivatedClass=function(t){this.useActivatedClass=t},e.prototype.setUseSelectedAttribute=function(t){this.useSelectedAttr=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t,i){var s=i===void 0?{}:i,r=s.forceUpdate;!this.isIndexValid(t)||(this.isCheckboxList?this.setCheckboxAtIndex(t):this.isRadioList?this.setRadioAtIndex(t):this.setSingleSelectionAtIndex(t,{forceUpdate:r}))},e.prototype.handleFocusIn=function(t){t>=0&&(this.focusedItemIndex=t,this.adapter.setAttributeForElementIndex(t,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(t,"0"))},e.prototype.handleFocusOut=function(t){var i=this;t>=0&&(this.adapter.setAttributeForElementIndex(t,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(t,"-1")),setTimeout(function(){i.adapter.isFocusInsideList()||i.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.handleKeydown=function(t,i,s){var r=this,o=Yt(t)==="ArrowLeft",a=Yt(t)==="ArrowUp",l=Yt(t)==="ArrowRight",u=Yt(t)==="ArrowDown",c=Yt(t)==="Home",h=Yt(t)==="End",d=Yt(t)==="Enter",f=Yt(t)==="Spacebar",m=t.key==="A"||t.key==="a";if(this.adapter.isRootFocused()){if(a||h?(t.preventDefault(),this.focusLastElement()):(u||c)&&(t.preventDefault(),this.focusFirstElement()),this.hasTypeahead){var p={event:t,focusItemAtIndex:function(S){r.focusItemAtIndex(S)},focusedItemIndex:-1,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(S){return r.adapter.listItemAtIndexHasClass(S,ce.LIST_ITEM_DISABLED_CLASS)}};O_(p,this.typeaheadState)}return}var g=this.adapter.getFocusedElementIndex();if(!(g===-1&&(g=s,g<0))){if(this.isVertical&&u||!this.isVertical&&l)es(t),this.focusNextElement(g);else if(this.isVertical&&a||!this.isVertical&&o)es(t),this.focusPrevElement(g);else if(c)es(t),this.focusFirstElement();else if(h)es(t),this.focusLastElement();else if(m&&t.ctrlKey&&this.isCheckboxList)t.preventDefault(),this.toggleAll(this.selectedIndex===bt.UNSET_INDEX?[]:this.selectedIndex);else if((d||f)&&i){var E=t.target;if(E&&E.tagName==="A"&&d||(es(t),this.adapter.listItemAtIndexHasClass(g,ce.LIST_ITEM_DISABLED_CLASS)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(g),this.adapter.notifyAction(g))}if(this.hasTypeahead){var p={event:t,focusItemAtIndex:function(b){r.focusItemAtIndex(b)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(b){return r.adapter.listItemAtIndexHasClass(b,ce.LIST_ITEM_DISABLED_CLASS)}};O_(p,this.typeaheadState)}}},e.prototype.handleClick=function(t,i){t!==bt.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(t,ce.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(t,i),this.adapter.notifyAction(t)))},e.prototype.focusNextElement=function(t){var i=this.adapter.getListItemCount(),s=t+1;if(s>=i)if(this.wrapFocus)s=0;else return t;return this.focusItemAtIndex(s),s},e.prototype.focusPrevElement=function(t){var i=t-1;if(i<0)if(this.wrapFocus)i=this.adapter.getListItemCount()-1;else return t;return this.focusItemAtIndex(i),i},e.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},e.prototype.focusLastElement=function(){var t=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(t),t},e.prototype.focusInitialElement=function(){var t=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(t),t},e.prototype.setEnabled=function(t,i){!this.isIndexValid(t)||(i?(this.adapter.removeClassForElementIndex(t,ce.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,bi.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(t,ce.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,bi.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(t,i){var s=i===void 0?{}:i,r=s.forceUpdate;if(!(this.selectedIndex===t&&!r)){var o=ce.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(o=ce.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==bt.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,o),this.setAriaForSingleSelectionAtIndex(t),this.setTabindexAtIndex(t),t!==bt.UNSET_INDEX&&this.adapter.addClassForElementIndex(t,o),this.selectedIndex=t}},e.prototype.setAriaForSingleSelectionAtIndex=function(t){this.selectedIndex===bt.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(t,bi.ARIA_CURRENT));var i=this.ariaCurrentAttrValue!==null,s=i?bi.ARIA_CURRENT:bi.ARIA_SELECTED;if(this.selectedIndex!==bt.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,s,"false"),t!==bt.UNSET_INDEX){var r=i?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(t,s,r)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?bi.ARIA_SELECTED:bi.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(t){var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(t,!0),this.selectedIndex!==bt.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),this.adapter.setAttributeForElementIndex(t,i,"true"),this.selectedIndex=t},e.prototype.setCheckboxAtIndex=function(t){for(var i=this.getSelectionAttribute(),s=0;s<this.adapter.getListItemCount();s++){var r=!1;t.indexOf(s)>=0&&(r=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(s,r),this.adapter.setAttributeForElementIndex(s,i,r?"true":"false")}this.selectedIndex=t},e.prototype.setTabindexAtIndex=function(t){this.focusedItemIndex===bt.UNSET_INDEX&&t!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==t&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==t&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),t!==bt.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(t,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var t=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(t)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==bt.UNSET_INDEX?this.selectedIndex:pR(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(t,i){return Math.min(t,i)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(t){var i=this;if(t instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return t.length===0?!0:t.some(function(s){return i.isIndexInRange(s)})}else if(typeof t=="number"){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange(t)||this.isSingleSelectionList&&t===bt.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(t){var i=this.adapter.getListItemCount();return t>=0&&t<i},e.prototype.setSelectedIndexOnAction=function(t,i){i===void 0&&(i=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(t,i):this.setSelectedIndex(t)},e.prototype.toggleCheckboxAtIndex=function(t,i){var s=this.getSelectionAttribute(),r=this.adapter.isCheckboxCheckedAtIndex(t);i&&(r=!r,this.adapter.setCheckedCheckboxOrRadioAtIndex(t,r)),this.adapter.setAttributeForElementIndex(t,s,r?"true":"false");var o=this.selectedIndex===bt.UNSET_INDEX?[]:this.selectedIndex.slice();r?o.push(t):o=o.filter(function(a){return a!==t}),this.selectedIndex=o},e.prototype.focusItemAtIndex=function(t){this.adapter.focusItemAtIndex(t),this.focusedItemIndex=t},e.prototype.toggleAll=function(t){var i=this.adapter.getListItemCount();if(t.length===i)this.setCheckboxAtIndex([]);else{for(var s=[],r=0;r<i;r++)(!this.adapter.listItemAtIndexHasClass(r,ce.LIST_ITEM_DISABLED_CLASS)||t.indexOf(r)>-1)&&s.push(r);this.setCheckboxAtIndex(s)}},e.prototype.typeaheadMatchItem=function(t,i,s){var r=this;s===void 0&&(s=!1);var o={focusItemAtIndex:function(a){r.focusItemAtIndex(a)},focusedItemIndex:i||this.focusedItemIndex,nextChar:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:s,isItemAtIndexDisabled:function(a){return r.adapter.listItemAtIndexHasClass(a,ce.LIST_ITEM_DISABLED_CLASS)}};return mh(o,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return dR(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){L_(this.typeaheadState)},e}(Mn);/**
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
 */var D_=function(n){An(e,n);function e(t){var i=n.call(this,it(it({},e.defaultAdapter),t))||this;return i.isSurfaceOpen=!1,i.isQuickOpen=!1,i.isHoistedElement=!1,i.isFixedPosition=!1,i.isHorizontallyCenteredOnViewport=!1,i.maxHeight=0,i.openAnimationEndTimerId=0,i.closeAnimationEndTimerId=0,i.animationRequestId=0,i.anchorCorner=zs.TOP_START,i.originCorner=zs.TOP_START,i.anchorMargin={top:0,right:0,bottom:0,left:0},i.position={x:0,y:0},i}return Object.defineProperty(e,"cssClasses",{get:function(){return lR},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return uR},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return uo},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return zs},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,i=t.ROOT,s=t.OPEN;if(!this.adapter.hasClass(i))throw new Error(i+" class required in root element.");this.adapter.hasClass(s)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(t){this.anchorCorner=t},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^ht.RIGHT},e.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition=t},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(t,i){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(i)?i:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t},e.prototype.setQuickOpen=function(t){this.isQuickOpen=t},e.prototype.setMaxHeight=function(t){this.maxHeight=t},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.adapter.addClass(e.cssClasses.OPEN),t.openAnimationEndTimerId=setTimeout(function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()},uo.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},e.prototype.close=function(t){var i=this;if(t===void 0&&(t=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){i.adapter.removeClass(e.cssClasses.OPEN),i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId=setTimeout(function(){i.closeAnimationEndTimerId=0,i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),i.adapter.notifyClose()},uo.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(t){var i=t.target;this.adapter.isElementInContainer(i)||this.close()},e.prototype.handleKeydown=function(t){var i=t.keyCode,s=t.key,r=s==="Escape"||i===27;r&&this.close()},e.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var i=this.getoriginCorner(),s=this.getMenuSurfaceMaxHeight(i),r=this.hasBit(i,ht.BOTTOM)?"bottom":"top",o=this.hasBit(i,ht.RIGHT)?"right":"left",a=this.getHorizontalOriginOffset(i),l=this.getVerticalOriginOffset(i),u=this.measurements,c=u.anchorSize,h=u.surfaceSize,d=(t={},t[o]=a,t[r]=l,t);c.width/h.width>uo.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(o="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(d),this.adapter.setTransformOrigin(o+" "+r),this.adapter.setPosition(d),this.adapter.setMaxHeight(s?s+"px":""),this.hasBit(i,ht.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),i=this.adapter.getBodyDimensions(),s=this.adapter.getWindowDimensions(),r=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:i,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:s.width-t.right,bottom:s.height-t.bottom,left:t.left},viewportSize:s,windowScroll:r}},e.prototype.getoriginCorner=function(){var t=this.originCorner,i=this.measurements,s=i.viewportDistance,r=i.anchorSize,o=i.surfaceSize,a=e.numbers.MARGIN_TO_EDGE,l=this.hasBit(this.anchorCorner,ht.BOTTOM),u,c;l?(u=s.top-a+this.anchorMargin.bottom,c=s.bottom-a-this.anchorMargin.bottom):(u=s.top-a+this.anchorMargin.top,c=s.bottom-a+r.height-this.anchorMargin.top);var h=c-o.height>0;!h&&u>c&&(t=this.setBit(t,ht.BOTTOM));var d=this.adapter.isRtl(),f=this.hasBit(this.anchorCorner,ht.FLIP_RTL),m=this.hasBit(this.anchorCorner,ht.RIGHT)||this.hasBit(t,ht.RIGHT),p=!1;d&&f?p=!m:p=m;var g,E;p?(g=s.left+r.width+this.anchorMargin.right,E=s.right-this.anchorMargin.right):(g=s.left+this.anchorMargin.left,E=s.right+r.width-this.anchorMargin.left);var S=g-o.width>0,b=E-o.width>0,C=this.hasBit(t,ht.FLIP_RTL)&&this.hasBit(t,ht.RIGHT);return b&&C&&d||!S&&C?t=this.unsetBit(t,ht.RIGHT):(S&&p&&d||S&&!p&&m||!b&&g>=E)&&(t=this.setBit(t,ht.RIGHT)),t},e.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0)return this.maxHeight;var i=this.measurements.viewportDistance,s=0,r=this.hasBit(t,ht.BOTTOM),o=this.hasBit(this.anchorCorner,ht.BOTTOM),a=e.numbers.MARGIN_TO_EDGE;return r?(s=i.top+this.anchorMargin.top-a,o||(s+=this.measurements.anchorSize.height)):(s=i.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-a,o&&(s-=this.measurements.anchorSize.height)),s},e.prototype.getHorizontalOriginOffset=function(t){var i=this.measurements.anchorSize,s=this.hasBit(t,ht.RIGHT),r=this.hasBit(this.anchorCorner,ht.RIGHT);if(s){var o=r?i.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?o-(this.measurements.viewportSize.width-this.measurements.bodySize.width):o}return r?i.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(t){var i=this.measurements.anchorSize,s=this.hasBit(t,ht.BOTTOM),r=this.hasBit(this.anchorCorner,ht.BOTTOM),o=0;return s?o=r?i.height-this.anchorMargin.top:-this.anchorMargin.bottom:o=r?i.height+this.anchorMargin.bottom:this.anchorMargin.top,o},e.prototype.adjustPositionForHoistedElement=function(t){var i,s,r=this.measurements,o=r.windowScroll,a=r.viewportDistance,l=r.surfaceSize,u=r.viewportSize,c=Object.keys(t);try{for(var h=xn(c),d=h.next();!d.done;d=h.next()){var f=d.value,m=t[f]||0;if(this.isHorizontallyCenteredOnViewport&&(f==="left"||f==="right")){t[f]=(u.width-l.width)/2;continue}m+=a[f],this.isFixedPosition||(f==="top"?m+=o.y:f==="bottom"?m-=o.y:f==="left"?m+=o.x:m-=o.x),t[f]=m}}catch(p){i={error:p}}finally{try{d&&!d.done&&(s=h.return)&&s.call(h)}finally{if(i)throw i.error}}},e.prototype.maybeRestoreFocus=function(){var t=this,i=this.adapter.isFocused(),s=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(i||s)&&setTimeout(function(){t.adapter.restoreFocus()},uo.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(t,i){return Boolean(t&i)},e.prototype.setBit=function(t,i){return t|i},e.prototype.unsetBit=function(t,i){return t^i},e.prototype.isFinite=function(t){return typeof t=="number"&&isFinite(t)},e}(Mn);/**
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
 */var P_={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function _R(n){return Boolean(n.document)&&typeof n.document.createElement=="function"}function yR(n,e){if(_R(n)&&e in P_){var t=n.document.createElement("div"),i=P_[e],s=i.standard,r=i.prefixed,o=s in t.style;return o?s:r}return e}/**
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
 */var Xs={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},Ys={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},vR={FOCUS_ROOT_INDEX:-1},Qs;(function(n){n[n.NONE=0]="NONE",n[n.LIST_ROOT=1]="LIST_ROOT",n[n.FIRST_ITEM=2]="FIRST_ITEM",n[n.LAST_ITEM=3]="LAST_ITEM"})(Qs||(Qs={}));/**
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
 */var IR=function(n){An(e,n);function e(t){var i=n.call(this,it(it({},e.defaultAdapter),t))||this;return i.closeAnimationEndTimerId=0,i.defaultFocusState=Qs.LIST_ROOT,i.selectedIndex=-1,i}return Object.defineProperty(e,"cssClasses",{get:function(){return Xs},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ys},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return vR},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},e.prototype.handleKeydown=function(t){var i=t.key,s=t.keyCode,r=i==="Tab"||s===9;r&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(t){var i=this,s=this.adapter.getElementIndex(t);if(!(s<0)){this.adapter.notifySelected({index:s});var r=this.adapter.getAttributeFromElementAtIndex(s,Ys.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(r),this.closeAnimationEndTimerId=setTimeout(function(){var o=i.adapter.getElementIndex(t);o>=0&&i.adapter.isSelectableItemAtIndex(o)&&i.setSelectedIndex(o)},D_.numbers.TRANSITION_CLOSE_DURATION)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case Qs.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Qs.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Qs.NONE:break;default:this.adapter.focusListRoot();break}},e.prototype.setDefaultFocusState=function(t){this.defaultFocusState=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t){if(this.validatedIndex(t),!this.adapter.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var i=this.adapter.getSelectedSiblingOfItemAtIndex(t);i>=0&&(this.adapter.removeAttributeFromElementAtIndex(i,Ys.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(i,Xs.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(t,Xs.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(t,Ys.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=t},e.prototype.setEnabled=function(t,i){this.validatedIndex(t),i?(this.adapter.removeClassFromElementAtIndex(t,ce.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,Ys.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(t,ce.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,Ys.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(t){var i=this.adapter.getMenuItemCount(),s=t>=0&&t<i;if(!s)throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(Mn);const{document:ER}=YI;function bR(n){let e,t,i,s,r,o,a,l;const u=n[30].default,c=de(u,n,n[29],null);let h=[{class:i=ge(Qe({[n[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":n[5],"mdc-menu-surface--open":n[4],"smui-menu-surface--static":n[4],"mdc-menu-surface--fullwidth":n[6]},n[9]))},{style:s=Object.entries(n[10]).map(M_).concat([n[3]]).join(" ")},n[12]],d={};for(let f=0;f<h.length;f+=1)d=P(d,h[f]);return{c(){e=ut(),t=Te("div"),c&&c.c(),this.h()},l(f){e=ct(f),t=Ae(f,"DIV",{class:!0,style:!0});var m=we(t);c&&c.l(m),m.forEach(x),this.h()},h(){ie(t,d)},m(f,m){Z(f,e,m),Z(f,t,m),c&&c.m(t,null),n[32](t),o=!0,a||(l=[We(ER.body,"click",n[31],!0),te(r=ot.call(null,t,n[1])),te(n[11].call(null,t)),We(t,"keydown",n[33])],a=!0)},p(f,m){c&&c.p&&(!o||m[0]&536870912)&&me(c,u,f,f[29],o?fe(u,f[29],m,null):pe(f[29]),null),ie(t,d=Ee(h,[(!o||m[0]&628&&i!==(i=ge(Qe({[f[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":f[5],"mdc-menu-surface--open":f[4],"smui-menu-surface--static":f[4],"mdc-menu-surface--fullwidth":f[6]},f[9]))))&&{class:i},(!o||m[0]&1032&&s!==(s=Object.entries(f[10]).map(M_).concat([f[3]]).join(" ")))&&{style:s},m[0]&4096&&f[12]])),r&&Ue(r.update)&&m[0]&2&&r.update.call(null,f[1])},i(f){o||(O(c,f),o=!0)},o(f){M(c,f),o=!1},d(f){f&&x(e),f&&x(t),c&&c.d(f),n[32](null),a=!1,Me(l)}}}const M_=([n,e])=>`${n}: ${e};`;function TR(n,e,t){const i=["use","class","style","static","anchor","fixed","open","fullWidth","quickOpen","anchorElement","anchorCorner","anchorMargin","maxHeight","horizontallyCenteredOnViewport","isOpen","setOpen","setAbsolutePosition","setIsHoisted","isFixed","getElement"];let s=J(e,i),{$$slots:r={},$$scope:o}=e;var a,l,u;const c=Ke(Ce());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{static:m=!1}=e,{anchor:p=!0}=e,{fixed:g=!1}=e,{open:E=m}=e,{fullWidth:S=!1}=e,{quickOpen:b=!1}=e,{anchorElement:C=void 0}=e,{anchorCorner:V=void 0}=e,{anchorMargin:w={top:0,right:0,bottom:0,left:0}}=e,{maxHeight:_=0}=e,{horizontallyCenteredOnViewport:T=!1}=e,U,I,R={},Y={},v;vt("SMUI:list:role","menu"),vt("SMUI:list:item:role","menuitem");const L=zs;Cn(()=>(t(8,I=new D_({addClass:H,removeClass:q,hasClass:A,hasAnchor:()=>!!C,notifyClose:()=>{t(0,E=m),E||rt(U,"SMUIMenuSurface:closed",void 0,void 0,!0)},notifyClosing:()=>{t(0,E=m),E||rt(U,"SMUIMenuSurface:closing",void 0,void 0,!0)},notifyOpen:()=>{t(0,E=!0),rt(U,"SMUIMenuSurface:opened",void 0,void 0,!0)},isElementInContainer:ve=>U.contains(ve),isRtl:()=>getComputedStyle(U).getPropertyValue("direction")==="rtl",setTransformOrigin:ve=>{const St=`${yR(window,"transform")}-origin`;t(10,Y[St]=ve,Y)},isFocused:()=>document.activeElement===U,saveFocus:()=>{var ve;v=(ve=document.activeElement)!==null&&ve!==void 0?ve:void 0},restoreFocus:()=>{U.contains(document.activeElement)&&v&&"focus"in v&&v.focus()},getInnerDimensions:()=>({width:U.offsetWidth,height:U.offsetHeight}),getAnchorDimensions:()=>C?C.getBoundingClientRect():null,getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:ve=>{t(10,Y.left="left"in ve?`${ve.left}px`:"",Y),t(10,Y.right="right"in ve?`${ve.right}px`:"",Y),t(10,Y.top="top"in ve?`${ve.top}px`:"",Y),t(10,Y.bottom="bottom"in ve?`${ve.bottom}px`:"",Y)},setMaxHeight:ve=>{t(10,Y.maxHeight=ve,Y)}})),rt(U,"SMUIMenuSurface:mount",{get open(){return E},set open(ve){t(0,E=ve)},closeProgrammatic:G}),I.init(),()=>{var ve;const St=I.isHoistedElement;I.destroy(),St&&((ve=U.parentNode)===null||ve===void 0||ve.removeChild(U))})),ki(()=>{var B;p&&U&&((B=U.parentElement)===null||B===void 0||B.classList.remove("mdc-menu-surface--anchor"))});function A(B){return B in R?R[B]:Dt().classList.contains(B)}function H(B){R[B]||t(9,R[B]=!0,R)}function q(B){(!(B in R)||R[B])&&t(9,R[B]=!1,R)}function G(B){I.close(B),t(0,E=!1)}function Le(){return E}function ee(B){t(0,E=B)}function qe(B,ve){return I.setAbsolutePosition(B,ve)}function Xe(B){return I.setIsHoisted(B)}function Ct(){return I.isFixed()}function Dt(){return U}const ke=B=>I&&E&&I.handleBodyClick(B);function Pt(B){ae[B?"unshift":"push"](()=>{U=B,t(7,U)})}const Oe=B=>I&&I.handleKeydown(B);return n.$$set=B=>{e=P(P({},e),xe(B)),t(12,s=J(e,i)),"use"in B&&t(1,h=B.use),"class"in B&&t(2,d=B.class),"style"in B&&t(3,f=B.style),"static"in B&&t(4,m=B.static),"anchor"in B&&t(14,p=B.anchor),"fixed"in B&&t(5,g=B.fixed),"open"in B&&t(0,E=B.open),"fullWidth"in B&&t(6,S=B.fullWidth),"quickOpen"in B&&t(15,b=B.quickOpen),"anchorElement"in B&&t(13,C=B.anchorElement),"anchorCorner"in B&&t(16,V=B.anchorCorner),"anchorMargin"in B&&t(17,w=B.anchorMargin),"maxHeight"in B&&t(18,_=B.maxHeight),"horizontallyCenteredOnViewport"in B&&t(19,T=B.horizontallyCenteredOnViewport),"$$scope"in B&&t(29,o=B.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&469778560&&U&&p&&!(t(26,a=U.parentElement)===null||a===void 0?void 0:a.classList.contains("mdc-menu-surface--anchor"))&&(t(27,l=U.parentElement)===null||l===void 0||l.classList.add("mdc-menu-surface--anchor"),t(13,C=t(28,u=U.parentElement)!==null&&u!==void 0?u:void 0)),n.$$.dirty[0]&257&&I&&I.isOpen()!==E&&(E?I.open():I.close()),n.$$.dirty[0]&33024&&I&&I.setQuickOpen(b),n.$$.dirty[0]&288&&I&&I.setFixedPosition(g),n.$$.dirty[0]&262400&&I&&_>0&&I.setMaxHeight(_),n.$$.dirty[0]&524544&&I&&I.setIsHorizontallyCenteredOnViewport(T),n.$$.dirty[0]&65792&&I&&V!=null&&(typeof V=="string"?I.setAnchorCorner(L[V]):I.setAnchorCorner(V)),n.$$.dirty[0]&131328&&I&&I.setAnchorMargin(w)},[E,h,d,f,m,g,S,U,I,R,Y,c,s,C,p,b,V,w,_,T,Le,ee,qe,Xe,Ct,Dt,a,l,u,o,r,ke,Pt,Oe]}class CR extends He{constructor(e){super();Ve(this,e,TR,bR,Fe,{use:1,class:2,style:3,static:4,anchor:14,fixed:5,open:0,fullWidth:6,quickOpen:15,anchorElement:13,anchorCorner:16,anchorMargin:17,maxHeight:18,horizontallyCenteredOnViewport:19,isOpen:20,setOpen:21,setAbsolutePosition:22,setIsHoisted:23,isFixed:24,getElement:25},null,[-1,-1])}get isOpen(){return this.$$.ctx[20]}get setOpen(){return this.$$.ctx[21]}get setAbsolutePosition(){return this.$$.ctx[22]}get setIsHoisted(){return this.$$.ctx[23]}get isFixed(){return this.$$.ctx[24]}get getElement(){return this.$$.ctx[25]}}function SR(n){let e;const t=n[16].default,i=de(t,n,n[21],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&2097152)&&me(i,t,s,s[21],e?fe(t,s[21],r,null):pe(s[21]),null)},i(s){e||(O(i,s),e=!0)},o(s){M(i,s),e=!1},d(s){i&&i.d(s)}}}function wR(n){let e,t,i;const s=[{use:n[5]},{class:ge({[n[1]]:!0,"mdc-menu":!0})},n[9]];function r(a){n[18](a)}let o={$$slots:{default:[SR]},$$scope:{ctx:n}};for(let a=0;a<s.length;a+=1)o=P(o,s[a]);return n[0]!==void 0&&(o.open=n[0]),e=new CR({props:o}),n[17](e),ae.push(()=>si(e,"open",r)),e.$on("SMUIMenuSurface:mount",n[7]),e.$on("SMUIList:mount",n[8]),e.$on("SMUIMenuSurface:opened",n[19]),e.$on("keydown",n[6]),e.$on("SMUIList:action",n[20]),{c(){lt(e.$$.fragment)},l(a){wt(e.$$.fragment,a)},m(a,l){tt(e,a,l),i=!0},p(a,[l]){const u=l&546?Ee(s,[l&32&&{use:a[5]},l&2&&{class:ge({[a[1]]:!0,"mdc-menu":!0})},l&512&&et(a[9])]):{};l&2097152&&(u.$$scope={dirty:l,ctx:a}),!t&&l&1&&(t=!0,u.open=a[0],ii(()=>t=!1)),e.$set(u)},i(a){i||(O(e.$$.fragment,a),i=!0)},o(a){M(e.$$.fragment,a),i=!1},d(a){n[17](null),nt(e,a)}}}function AR(n,e,t){let i;const s=["use","class","open","isOpen","setOpen","setDefaultFocusState","getSelectedIndex","getElement"];let r=J(e,s),{$$slots:o={},$$scope:a}=e;const{closest:l}=hh,u=Ke(Ce());let{use:c=[]}=e,{class:h=""}=e,{open:d=!1}=e,f,m,p,g;Cn(()=>(t(3,m=new IR({addClassToElementAtIndex:(v,L)=>{g.addClassForElementIndex(v,L)},removeClassFromElementAtIndex:(v,L)=>{g.removeClassForElementIndex(v,L)},addAttributeToElementAtIndex:(v,L,A)=>{g.setAttributeForElementIndex(v,L,A)},removeAttributeFromElementAtIndex:(v,L)=>{g.removeAttributeForElementIndex(v,L)},getAttributeFromElementAtIndex:(v,L)=>g.getAttributeFromElementIndex(v,L),elementContainsClass:(v,L)=>v.classList.contains(L),closeSurface:v=>p.closeProgrammatic(v),getElementIndex:v=>g.getOrderedList().map(L=>L.element).indexOf(v),notifySelected:v=>rt(T(),"SMUIMenu:selected",{index:v.index,item:g.getOrderedList()[v.index].element},void 0,!0),getMenuItemCount:()=>g.items.length,focusItemAtIndex:v=>g.focusItemAtIndex(v),focusListRoot:()=>"focus"in g.element&&g.element.focus(),isSelectableItemAtIndex:v=>!!l(g.getOrderedList()[v].element,`.${Xs.MENU_SELECTION_GROUP}`),getSelectedSiblingOfItemAtIndex:v=>{const L=g.getOrderedList(),A=l(L[v].element,`.${Xs.MENU_SELECTION_GROUP}`),H=A==null?void 0:A.querySelector(`.${Xs.MENU_SELECTED_LIST_ITEM}`);return H?L.map(q=>q.element).indexOf(H):-1}})),rt(T(),"SMUIMenu:mount",m),m.init(),()=>{m.destroy()}));function E(v){m&&m.handleKeydown(v)}function S(v){p||(p=v.detail)}function b(v){g||t(4,g=v.detail)}function C(){return d}function V(v){t(0,d=v)}function w(v){m.setDefaultFocusState(v)}function _(){return m.getSelectedIndex()}function T(){return f.getElement()}function U(v){ae[v?"unshift":"push"](()=>{f=v,t(2,f)})}function I(v){d=v,t(0,d)}const R=()=>m&&m.handleMenuSurfaceOpened(),Y=v=>m&&m.handleItemAction(g.getOrderedList()[v.detail.index].element);return n.$$set=v=>{e=P(P({},e),xe(v)),t(9,r=J(e,s)),"use"in v&&t(10,c=v.use),"class"in v&&t(1,h=v.class),"open"in v&&t(0,d=v.open),"$$scope"in v&&t(21,a=v.$$scope)},n.$$.update=()=>{n.$$.dirty&1024&&t(5,i=[u,...c])},[d,h,f,m,g,i,E,S,b,r,c,C,V,w,_,T,o,U,I,R,Y,a]}class XD extends He{constructor(e){super();Ve(this,e,AR,wR,Fe,{use:10,class:1,open:0,isOpen:11,setOpen:12,setDefaultFocusState:13,getSelectedIndex:14,getElement:15})}get isOpen(){return this.$$.ctx[11]}get setOpen(){return this.$$.ctx[12]}get setDefaultFocusState(){return this.$$.ctx[13]}get getSelectedIndex(){return this.$$.ctx[14]}get getElement(){return this.$$.ctx[15]}}function RR(n){let e;const t=n[37].default,i=de(t,n,n[43],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[1]&4096)&&me(i,t,s,s[43],e?fe(t,s[43],r,null):pe(s[43]),null)},i(s){e||(O(i,s),e=!0)},o(s){M(i,s),e=!1},d(s){i&&i.d(s)}}}function kR(n){let e,t,i;const s=[{use:[n[17],...n[0]]},{class:ge({[n[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":n[2],"mdc-deprecated-list--dense":n[3],"mdc-deprecated-list--textual-list":n[4],"mdc-deprecated-list--avatar-list":n[5]||n[18],"mdc-deprecated-list--icon-list":n[6],"mdc-deprecated-list--image-list":n[7],"mdc-deprecated-list--thumbnail-list":n[8],"mdc-deprecated-list--video-list":n[9],"mdc-deprecated-list--two-line":n[10],"smui-list--three-line":n[11]&&!n[10]})},{role:n[15]},n[23]];var r=n[12];function o(a){let l={$$slots:{default:[RR]},$$scope:{ctx:a}};for(let u=0;u<s.length;u+=1)l=P(l,s[u]);return{props:l}}return r&&(e=new r(o(n)),n[38](e),e.$on("keydown",n[39]),e.$on("focusin",n[40]),e.$on("focusout",n[41]),e.$on("click",n[42]),e.$on("SMUIListItem:mount",n[19]),e.$on("SMUIListItem:unmount",n[20]),e.$on("SMUI:action",n[21])),{c(){e&&lt(e.$$.fragment),t=pt()},l(a){e&&wt(e.$$.fragment,a),t=pt()},m(a,l){e&&tt(e,a,l),Z(a,t,l),i=!0},p(a,l){const u=l[0]&8818687?Ee(s,[l[0]&131073&&{use:[a[17],...a[0]]},l[0]&266238&&{class:ge({[a[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":a[2],"mdc-deprecated-list--dense":a[3],"mdc-deprecated-list--textual-list":a[4],"mdc-deprecated-list--avatar-list":a[5]||a[18],"mdc-deprecated-list--icon-list":a[6],"mdc-deprecated-list--image-list":a[7],"mdc-deprecated-list--thumbnail-list":a[8],"mdc-deprecated-list--video-list":a[9],"mdc-deprecated-list--two-line":a[10],"smui-list--three-line":a[11]&&!a[10]})},l[0]&32768&&{role:a[15]},l[0]&8388608&&et(a[23])]):{};if(l[1]&4096&&(u.$$scope={dirty:l,ctx:a}),r!==(r=a[12])){if(e){jt();const c=e;M(c.$$.fragment,1,0,()=>{nt(c,1)}),Wt()}r?(e=new r(o(a)),a[38](e),e.$on("keydown",a[39]),e.$on("focusin",a[40]),e.$on("focusout",a[41]),e.$on("click",a[42]),e.$on("SMUIListItem:mount",a[19]),e.$on("SMUIListItem:unmount",a[20]),e.$on("SMUI:action",a[21]),lt(e.$$.fragment),O(e.$$.fragment,1),tt(e,t.parentNode,t)):e=null}else r&&e.$set(u)},i(a){i||(e&&O(e.$$.fragment,a),i=!0)},o(a){e&&M(e.$$.fragment,a),i=!1},d(a){n[38](null),a&&x(t),e&&nt(e,a)}}}function NR(n,e,t){const i=["use","class","nonInteractive","dense","textualList","avatarList","iconList","imageList","thumbnailList","videoList","twoLine","threeLine","vertical","wrapFocus","singleSelection","selectedIndex","radioList","checkList","hasTypeahead","component","layout","setEnabled","getTypeaheadInProgress","getSelectedIndex","getFocusedItemIndex","getElement"];let s=J(e,i),{$$slots:r={},$$scope:o}=e;var a;const{closest:l,matches:u}=hh,c=Ke(Ce());let{use:h=[]}=e,{class:d=""}=e,{nonInteractive:f=!1}=e,{dense:m=!1}=e,{textualList:p=!1}=e,{avatarList:g=!1}=e,{iconList:E=!1}=e,{imageList:S=!1}=e,{thumbnailList:b=!1}=e,{videoList:C=!1}=e,{twoLine:V=!1}=e,{threeLine:w=!1}=e,{vertical:_=!0}=e,{wrapFocus:T=(a=on("SMUI:list:wrapFocus"))!==null&&a!==void 0?a:!1}=e,{singleSelection:U=!1}=e,{selectedIndex:I=-1}=e,{radioList:R=!1}=e,{checkList:Y=!1}=e,{hasTypeahead:v=!1}=e,L,A,H=[],q=on("SMUI:list:role"),G=on("SMUI:list:nav");const Le=new WeakMap;let ee=on("SMUI:dialog:selection"),qe=on("SMUI:addLayoutListener"),Xe,{component:Ct=G?BA:qA}=e;vt("SMUI:list:nonInteractive",f),vt("SMUI:separator:context","list"),q||(U?(q="listbox",vt("SMUI:list:item:role","option")):R?(q="radiogroup",vt("SMUI:list:item:role","radio")):Y?(q="group",vt("SMUI:list:item:role","checkbox")):(q="list",vt("SMUI:list:item:role",void 0))),qe&&(Xe=qe(bn)),Cn(()=>{t(13,A=new gR({addClassForElementIndex:St,focusItemAtIndex:B,getAttributeForElementIndex:(Q,X)=>{var je,Ri;return(Ri=(je=Oe()[Q])===null||je===void 0?void 0:je.getAttr(X))!==null&&Ri!==void 0?Ri:null},getFocusedElementIndex:()=>document.activeElement?Oe().map(Q=>Q.element).indexOf(document.activeElement):-1,getListItemCount:()=>H.length,getPrimaryTextAtIndex:Ye,hasCheckboxAtIndex:Q=>{var X,je;return(je=(X=Oe()[Q])===null||X===void 0?void 0:X.hasCheckbox)!==null&&je!==void 0?je:!1},hasRadioAtIndex:Q=>{var X,je;return(je=(X=Oe()[Q])===null||X===void 0?void 0:X.hasRadio)!==null&&je!==void 0?je:!1},isCheckboxCheckedAtIndex:Q=>{var X;const je=Oe()[Q];return(X=(je==null?void 0:je.hasCheckbox)&&je.checked)!==null&&X!==void 0?X:!1},isFocusInsideList:()=>L!=null&&On()!==document.activeElement&&On().contains(document.activeElement),isRootFocused:()=>L!=null&&document.activeElement===On(),listItemAtIndexHasClass:ve,notifyAction:Q=>{t(24,I=Q),L!=null&&rt(On(),"SMUIList:action",{index:Q},void 0,!0)},removeClassForElementIndex:ei,setAttributeForElementIndex:Ai,setCheckedCheckboxOrRadioAtIndex:(Q,X)=>{Oe()[Q].checked=X},setTabIndexForListItemChildren:(Q,X)=>{const je=Oe()[Q],Ri="button:not(:disabled), a";Array.prototype.forEach.call(je.element.querySelectorAll(Ri),Kl=>{Kl.setAttribute("tabindex",X)})}}));const k={get element(){return On()},get items(){return H},get typeaheadInProgress(){return A.isTypeaheadInProgress()},typeaheadMatchItem(Q,X){return A.typeaheadMatchItem(Q,X,!0)},getOrderedList:Oe,focusItemAtIndex:B,addClassForElementIndex:St,removeClassForElementIndex:ei,setAttributeForElementIndex:Ai,removeAttributeForElementIndex:D,getAttributeFromElementIndex:oe,getPrimaryTextAtIndex:Ye};return rt(On(),"SMUIList:mount",k),A.init(),()=>{A.destroy()}}),ki(()=>{Xe&&Xe()});function Dt(k){H.push(k.detail),Le.set(k.detail.element,k.detail),U&&k.detail.selected&&t(24,I=Bt(k.detail.element)),k.stopPropagation()}function ke(k){var Q;const X=(Q=k.detail&&H.indexOf(k.detail))!==null&&Q!==void 0?Q:-1;X!==-1&&(H.splice(X,1),H=H,Le.delete(k.detail.element)),k.stopPropagation()}function Pt(k){if(R||Y){const Q=Bt(k.target);if(Q!==-1){const X=Oe()[Q];X&&(R&&!X.checked||Y)&&(X.checked=!X.checked,X.activateRipple(),window.requestAnimationFrame(()=>{X.deactivateRipple()}))}}}function Oe(){return L==null?[]:[...On().children].map(k=>Le.get(k)).filter(k=>k&&k._smui_list_item_accessor)}function B(k){const Q=Oe()[k];Q&&"focus"in Q.element&&Q.element.focus()}function ve(k,Q){var X;const je=Oe()[k];return(X=je&&je.hasClass(Q))!==null&&X!==void 0?X:!1}function St(k,Q){const X=Oe()[k];X&&X.addClass(Q)}function ei(k,Q){const X=Oe()[k];X&&X.removeClass(Q)}function Ai(k,Q,X){const je=Oe()[k];je&&je.addAttr(Q,X)}function D(k,Q){const X=Oe()[k];X&&X.removeAttr(Q)}function oe(k,Q){const X=Oe()[k];return X?X.getAttr(Q):null}function Ye(k){var Q;const X=Oe()[k];return(Q=X&&X.getPrimaryText())!==null&&Q!==void 0?Q:""}function Bt(k){const Q=l(k,".mdc-deprecated-list-item, .mdc-deprecated-list");return Q&&u(Q,".mdc-deprecated-list-item")?Oe().map(X=>X==null?void 0:X.element).indexOf(Q):-1}function bn(){return A.layout()}function ti(k,Q){return A.setEnabled(k,Q)}function jl(){return A.isTypeaheadInProgress()}function ur(){return A.getSelectedIndex()}function Mo(){return A.getFocusedItemIndex()}function On(){return L.getElement()}function Wl(k){ae[k?"unshift":"push"](()=>{L=k,t(14,L)})}const Fo=k=>A&&A.handleKeydown(k,k.target.classList.contains("mdc-deprecated-list-item"),Bt(k.target)),gs=k=>A&&A.handleFocusIn(Bt(k.target)),Gl=k=>A&&A.handleFocusOut(Bt(k.target)),zl=k=>A&&A.handleClick(Bt(k.target),!u(k.target,'input[type="checkbox"], input[type="radio"]'));return n.$$set=k=>{e=P(P({},e),xe(k)),t(23,s=J(e,i)),"use"in k&&t(0,h=k.use),"class"in k&&t(1,d=k.class),"nonInteractive"in k&&t(2,f=k.nonInteractive),"dense"in k&&t(3,m=k.dense),"textualList"in k&&t(4,p=k.textualList),"avatarList"in k&&t(5,g=k.avatarList),"iconList"in k&&t(6,E=k.iconList),"imageList"in k&&t(7,S=k.imageList),"thumbnailList"in k&&t(8,b=k.thumbnailList),"videoList"in k&&t(9,C=k.videoList),"twoLine"in k&&t(10,V=k.twoLine),"threeLine"in k&&t(11,w=k.threeLine),"vertical"in k&&t(25,_=k.vertical),"wrapFocus"in k&&t(26,T=k.wrapFocus),"singleSelection"in k&&t(27,U=k.singleSelection),"selectedIndex"in k&&t(24,I=k.selectedIndex),"radioList"in k&&t(28,R=k.radioList),"checkList"in k&&t(29,Y=k.checkList),"hasTypeahead"in k&&t(30,v=k.hasTypeahead),"component"in k&&t(12,Ct=k.component),"$$scope"in k&&t(43,o=k.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&33562624&&A&&A.setVerticalOrientation(_),n.$$.dirty[0]&67117056&&A&&A.setWrapFocus(T),n.$$.dirty[0]&1073750016&&A&&A.setHasTypeahead(v),n.$$.dirty[0]&134225920&&A&&A.setSingleSelection(U),n.$$.dirty[0]&151003136&&A&&U&&ur()!==I&&A.setSelectedIndex(I)},[h,d,f,m,p,g,E,S,b,C,V,w,Ct,A,L,q,u,c,ee,Dt,ke,Pt,Bt,s,I,_,T,U,R,Y,v,bn,ti,jl,ur,Mo,On,r,Wl,Fo,gs,Gl,zl,o]}class YD extends He{constructor(e){super();Ve(this,e,NR,kR,Fe,{use:0,class:1,nonInteractive:2,dense:3,textualList:4,avatarList:5,iconList:6,imageList:7,thumbnailList:8,videoList:9,twoLine:10,threeLine:11,vertical:25,wrapFocus:26,singleSelection:27,selectedIndex:24,radioList:28,checkList:29,hasTypeahead:30,component:12,layout:31,setEnabled:32,getTypeaheadInProgress:33,getSelectedIndex:34,getFocusedItemIndex:35,getElement:36},null,[-1,-1])}get layout(){return this.$$.ctx[31]}get setEnabled(){return this.$$.ctx[32]}get getTypeaheadInProgress(){return this.$$.ctx[33]}get getSelectedIndex(){return this.$$.ctx[34]}get getFocusedItemIndex(){return this.$$.ctx[35]}get getElement(){return this.$$.ctx[36]}}function F_(n){let e;return{c(){e=Te("span"),this.h()},l(t){e=Ae(t,"SPAN",{class:!0}),we(e).forEach(x),this.h()},h(){Tn(e,"class","mdc-deprecated-list-item__ripple")},m(t,i){Z(t,e,i)},d(t){t&&x(e)}}}function LR(n){let e,t,i=n[6]&&F_();const s=n[32].default,r=de(s,n,n[35],null);return{c(){i&&i.c(),e=pt(),r&&r.c()},l(o){i&&i.l(o),e=pt(),r&&r.l(o)},m(o,a){i&&i.m(o,a),Z(o,e,a),r&&r.m(o,a),t=!0},p(o,a){o[6]?i||(i=F_(),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),r&&r.p&&(!t||a[1]&16)&&me(r,s,o,o[35],t?fe(s,o[35],a,null):pe(o[35]),null)},i(o){t||(O(r,o),t=!0)},o(o){M(r,o),t=!1},d(o){i&&i.d(o),o&&x(e),r&&r.d(o)}}}function OR(n){let e,t,i;const s=[{use:[...n[5]?[]:[[Gs,{ripple:!n[13],unbounded:!1,color:(n[7]||n[0])&&n[4]==null?"primary":n[4],disabled:n[9],addClass:n[21],removeClass:n[22],addStyle:n[23]}]],n[19],...n[1]]},{class:ge(Qe({[n[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":n[7],"mdc-deprecated-list-item--selected":n[0],"mdc-deprecated-list-item--disabled":n[9],"mdc-menu-item--selected":!n[20]&&n[8]==="menuitem"&&n[0],"smui-menu-item--non-interactive":n[5]},n[15]))},{style:Object.entries(n[16]).map(U_).concat([n[3]]).join(" ")},n[20]&&n[7]?{"aria-current":"page"}:{},n[20]?{}:{role:n[8]},!n[20]&&n[8]==="option"?{"aria-selected":n[0]?"true":"false"}:{},!n[20]&&(n[8]==="radio"||n[8]==="checkbox")?{"aria-checked":n[13]&&n[13].checked?"true":"false"}:{},n[20]?{}:{"aria-disabled":n[9]?"true":"false"},{"data-menu-item-skip-restore-focus":n[10]||void 0},{tabindex:n[18]},{href:n[11]},n[17],n[27]];var r=n[12];function o(a){let l={$$slots:{default:[LR]},$$scope:{ctx:a}};for(let u=0;u<s.length;u+=1)l=P(l,s[u]);return{props:l}}return r&&(e=new r(o(n)),n[33](e),e.$on("click",n[24]),e.$on("keydown",n[25]),e.$on("SMUIGenericInput:mount",n[26]),e.$on("SMUIGenericInput:unmount",n[34])),{c(){e&&lt(e.$$.fragment),t=pt()},l(a){e&&wt(e.$$.fragment,a),t=pt()},m(a,l){e&&tt(e,a,l),Z(a,t,l),i=!0},p(a,l){const u=l[0]&150974399?Ee(s,[l[0]&15213235&&{use:[...a[5]?[]:[[Gs,{ripple:!a[13],unbounded:!1,color:(a[7]||a[0])&&a[4]==null?"primary":a[4],disabled:a[9],addClass:a[21],removeClass:a[22],addStyle:a[23]}]],a[19],...a[1]]},l[0]&1082277&&{class:ge(Qe({[a[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":a[7],"mdc-deprecated-list-item--selected":a[0],"mdc-deprecated-list-item--disabled":a[9],"mdc-menu-item--selected":!a[20]&&a[8]==="menuitem"&&a[0],"smui-menu-item--non-interactive":a[5]},a[15]))},l[0]&65544&&{style:Object.entries(a[16]).map(U_).concat([a[3]]).join(" ")},l[0]&1048704&&et(a[20]&&a[7]?{"aria-current":"page"}:{}),l[0]&1048832&&et(a[20]?{}:{role:a[8]}),l[0]&1048833&&et(!a[20]&&a[8]==="option"?{"aria-selected":a[0]?"true":"false"}:{}),l[0]&1057024&&et(!a[20]&&(a[8]==="radio"||a[8]==="checkbox")?{"aria-checked":a[13]&&a[13].checked?"true":"false"}:{}),l[0]&1049088&&et(a[20]?{}:{"aria-disabled":a[9]?"true":"false"}),l[0]&1024&&{"data-menu-item-skip-restore-focus":a[10]||void 0},l[0]&262144&&{tabindex:a[18]},l[0]&2048&&{href:a[11]},l[0]&131072&&et(a[17]),l[0]&134217728&&et(a[27])]):{};if(l[0]&64|l[1]&16&&(u.$$scope={dirty:l,ctx:a}),r!==(r=a[12])){if(e){jt();const c=e;M(c.$$.fragment,1,0,()=>{nt(c,1)}),Wt()}r?(e=new r(o(a)),a[33](e),e.$on("click",a[24]),e.$on("keydown",a[25]),e.$on("SMUIGenericInput:mount",a[26]),e.$on("SMUIGenericInput:unmount",a[34]),lt(e.$$.fragment),O(e.$$.fragment,1),tt(e,t.parentNode,t)):e=null}else r&&e.$set(u)},i(a){i||(e&&O(e.$$.fragment,a),i=!0)},o(a){e&&M(e.$$.fragment,a),i=!1},d(a){n[33](null),a&&x(t),e&&nt(e,a)}}}let DR=0;const U_=([n,e])=>`${n}: ${e};`;function PR(n,e,t){let i;const s=["use","class","style","color","nonInteractive","ripple","activated","role","selected","disabled","skipRestoreFocus","tabindex","inputId","href","component","getPrimaryText","getElement"];let r=J(e,s),{$$slots:o={},$$scope:a}=e;var l;const u=Ke(Ce());let c=()=>{};function h(D){return D===c}let{use:d=[]}=e,{class:f=""}=e,{style:m=""}=e,{color:p=void 0}=e,{nonInteractive:g=(l=on("SMUI:list:nonInteractive"))!==null&&l!==void 0?l:!1}=e;vt("SMUI:list:nonInteractive",void 0);let{ripple:E=!g}=e,{activated:S=!1}=e,{role:b=on("SMUI:list:item:role")}=e;vt("SMUI:list:item:role",void 0);let{selected:C=!1}=e,{disabled:V=!1}=e,{skipRestoreFocus:w=!1}=e,{tabindex:_=c}=e,{inputId:T="SMUI-form-field-list-"+DR++}=e,{href:U=void 0}=e,I,R={},Y={},v={},L,A,H=on("SMUI:list:item:nav"),{component:q=H?U?Kg:Zi:HA}=e;vt("SMUI:generic:input:props",{id:T}),vt("SMUI:separator:context",void 0),Cn(()=>{if(!C&&!g){let oe=!0,Ye=I;for(;Ye.previousSibling;)if(Ye=Ye.previousSibling,Ye.nodeType===1&&Ye.classList.contains("mdc-deprecated-list-item")&&!Ye.classList.contains("mdc-deprecated-list-item--disabled")){oe=!1;break}oe&&(A=window.requestAnimationFrame(ke))}const D={_smui_list_item_accessor:!0,get element(){return St()},get selected(){return C},set selected(oe){t(0,C=oe)},hasClass:G,addClass:Le,removeClass:ee,getAttr:Xe,addAttr:Ct,removeAttr:Dt,getPrimaryText:ve,get checked(){var oe;return(oe=L&&L.checked)!==null&&oe!==void 0?oe:!1},set checked(oe){L&&t(13,L.checked=!!oe,L)},get hasCheckbox(){return!!(L&&"_smui_checkbox_accessor"in L)},get hasRadio(){return!!(L&&"_smui_radio_accessor"in L)},activateRipple(){L&&L.activateRipple()},deactivateRipple(){L&&L.deactivateRipple()},getValue(){return r.value}};return rt(St(),"SMUIListItem:mount",D),()=>{rt(St(),"SMUIListItem:unmount",D)}}),ki(()=>{A&&window.cancelAnimationFrame(A)});function G(D){return D in R?R[D]:St().classList.contains(D)}function Le(D){R[D]||t(15,R[D]=!0,R)}function ee(D){(!(D in R)||R[D])&&t(15,R[D]=!1,R)}function qe(D,oe){Y[D]!=oe&&(oe===""||oe==null?(delete Y[D],t(16,Y)):t(16,Y[D]=oe,Y))}function Xe(D){var oe;return D in v?(oe=v[D])!==null&&oe!==void 0?oe:null:St().getAttribute(D)}function Ct(D,oe){v[D]!==oe&&t(17,v[D]=oe,v)}function Dt(D){(!(D in v)||v[D]!=null)&&t(17,v[D]=void 0,v)}function ke(){let D=!0,oe=I.getElement();for(;oe.nextElementSibling;)if(oe=oe.nextElementSibling,oe.nodeType===1&&oe.classList.contains("mdc-deprecated-list-item")){const Ye=oe.attributes.getNamedItem("tabindex");if(Ye&&Ye.value==="0"){D=!1;break}}D&&t(18,i=0)}function Pt(D){V||rt(St(),"SMUI:action",D)}function Oe(D){const oe=D.key==="Enter",Ye=D.key==="Space";(oe||Ye)&&Pt(D)}function B(D){("_smui_checkbox_accessor"in D.detail||"_smui_radio_accessor"in D.detail)&&t(13,L=D.detail)}function ve(){var D,oe,Ye;const Bt=St(),bn=Bt.querySelector(".mdc-deprecated-list-item__primary-text");if(bn)return(D=bn.textContent)!==null&&D!==void 0?D:"";const ti=Bt.querySelector(".mdc-deprecated-list-item__text");return ti?(oe=ti.textContent)!==null&&oe!==void 0?oe:"":(Ye=Bt.textContent)!==null&&Ye!==void 0?Ye:""}function St(){return I.getElement()}function ei(D){ae[D?"unshift":"push"](()=>{I=D,t(14,I)})}const Ai=()=>t(13,L=void 0);return n.$$set=D=>{e=P(P({},e),xe(D)),t(27,r=J(e,s)),"use"in D&&t(1,d=D.use),"class"in D&&t(2,f=D.class),"style"in D&&t(3,m=D.style),"color"in D&&t(4,p=D.color),"nonInteractive"in D&&t(5,g=D.nonInteractive),"ripple"in D&&t(6,E=D.ripple),"activated"in D&&t(7,S=D.activated),"role"in D&&t(8,b=D.role),"selected"in D&&t(0,C=D.selected),"disabled"in D&&t(9,V=D.disabled),"skipRestoreFocus"in D&&t(10,w=D.skipRestoreFocus),"tabindex"in D&&t(28,_=D.tabindex),"inputId"in D&&t(29,T=D.inputId),"href"in D&&t(11,U=D.href),"component"in D&&t(12,q=D.component),"$$scope"in D&&t(35,a=D.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&268444193&&t(18,i=h(_)?!g&&!V&&(C||L&&L.checked)?0:-1:_)},[C,d,f,m,p,g,E,S,b,V,w,U,q,L,I,R,Y,v,i,u,H,Le,ee,qe,Pt,Oe,B,r,_,T,ve,St,o,ei,Ai,a]}class MR extends He{constructor(e){super();Ve(this,e,PR,OR,Fe,{use:1,class:2,style:3,color:4,nonInteractive:5,ripple:6,activated:7,role:8,selected:0,disabled:9,skipRestoreFocus:10,tabindex:28,inputId:29,href:11,component:12,getPrimaryText:30,getElement:31},null,[-1,-1])}get getPrimaryText(){return this.$$.ctx[30]}get getElement(){return this.$$.ctx[31]}}Et({class:"mdc-deprecated-list-item__text",component:Zi});Et({class:"mdc-deprecated-list-item__primary-text",component:Zi});Et({class:"mdc-deprecated-list-item__secondary-text",component:Zi});function FR(n){let e,t,i,s,r,o;const a=n[8].default,l=de(a,n,n[7],null);let u=[{class:t=ge({[n[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":n[4]})},n[5]],c={};for(let h=0;h<u.length;h+=1)c=P(c,u[h]);return{c(){e=Te("span"),l&&l.c(),this.h()},l(h){e=Ae(h,"SPAN",{class:!0});var d=we(e);l&&l.l(d),d.forEach(x),this.h()},h(){ie(e,c)},m(h,d){Z(h,e,d),l&&l.m(e,null),n[9](e),s=!0,r||(o=[te(i=ot.call(null,e,n[0])),te(n[3].call(null,e))],r=!0)},p(h,[d]){l&&l.p&&(!s||d&128)&&me(l,a,h,h[7],s?fe(a,h[7],d,null):pe(h[7]),null),ie(e,c=Ee(u,[(!s||d&2&&t!==(t=ge({[h[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":h[4]})))&&{class:t},d&32&&h[5]])),i&&Ue(i.update)&&d&1&&i.update.call(null,h[0])},i(h){s||(O(l,h),s=!0)},o(h){M(l,h),s=!1},d(h){h&&x(e),l&&l.d(h),n[9](null),r=!1,Me(o)}}}function UR(n,e,t){const i=["use","class","getElement"];let s=J(e,i),{$$slots:r={},$$scope:o}=e;const a=Ke(Ce());let{use:l=[]}=e,{class:u=""}=e,c,h=on("SMUI:list:graphic:menu-selection-group");function d(){return c}function f(m){ae[m?"unshift":"push"](()=>{c=m,t(2,c)})}return n.$$set=m=>{e=P(P({},e),xe(m)),t(5,s=J(e,i)),"use"in m&&t(0,l=m.use),"class"in m&&t(1,u=m.class),"$$scope"in m&&t(7,o=m.$$scope)},[l,u,c,a,h,s,d,o,r,f]}class xR extends He{constructor(e){super();Ve(this,e,UR,FR,Fe,{use:0,class:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}Et({class:"mdc-deprecated-list-item__meta",component:Zi});Et({class:"mdc-deprecated-list-group",component:Xn});Et({class:"mdc-deprecated-list-group__subheader",component:VA});const QD=MR,VR=xR;Et({class:"mdc-menu__selection-group-icon",component:VR});/**
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
 */var dn={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},HR={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var x_=function(n){An(e,n);function e(t){var i=n.call(this,it(it({},e.defaultAdapter),t))||this;return i.animationFrame=0,i.animationTimer=0,i}return Object.defineProperty(e,"strings",{get:function(){return HR},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return dn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(dn.OPEN),this.adapter.addClass(dn.ANIMATE),this.runNextAnimationFrame(function(){t.adapter.addClass(dn.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(dn.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(dn.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(dn.OPENING)||this.adapter.hasClass(dn.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(dn.CLOSING)},e.prototype.handleKeydown=function(t){var i=t.keyCode,s=t.key,r=s==="Escape"||i===27;r&&this.close()},e.prototype.handleTransitionEnd=function(t){var i=dn.OPENING,s=dn.CLOSING,r=dn.OPEN,o=dn.ANIMATE,a=dn.ROOT,l=this.isElement(t.target)&&this.adapter.elementHasClass(t.target,a);!l||(this.isClosing()?(this.adapter.removeClass(r),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(o),this.adapter.removeClass(i),this.adapter.removeClass(s))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(t,0)})},e.prototype.isElement=function(t){return Boolean(t.classList)},e}(Mn);/**
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
 */var BR=function(n){An(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(x_);function qR(n){let e,t,i,s,r,o;const a=n[15].default,l=de(a,n,n[14],null);let u=[{class:t=ge(Qe({[n[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":n[2]==="dismissible","mdc-drawer--modal":n[2]==="modal","smui-drawer__absolute":n[2]==="modal"&&!n[3]},n[6]))},n[8]],c={};for(let h=0;h<u.length;h+=1)c=P(c,u[h]);return{c(){e=Te("aside"),l&&l.c(),this.h()},l(h){e=Ae(h,"ASIDE",{class:!0});var d=we(e);l&&l.l(d),d.forEach(x),this.h()},h(){ie(e,c)},m(h,d){Z(h,e,d),l&&l.m(e,null),n[16](e),s=!0,r||(o=[te(i=ot.call(null,e,n[0])),te(n[7].call(null,e)),We(e,"keydown",n[17]),We(e,"transitionend",n[18])],r=!0)},p(h,[d]){l&&l.p&&(!s||d&16384)&&me(l,a,h,h[14],s?fe(a,h[14],d,null):pe(h[14]),null),ie(e,c=Ee(u,[(!s||d&78&&t!==(t=ge(Qe({[h[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":h[2]==="dismissible","mdc-drawer--modal":h[2]==="modal","smui-drawer__absolute":h[2]==="modal"&&!h[3]},h[6]))))&&{class:t},d&256&&h[8]])),i&&Ue(i.update)&&d&1&&i.update.call(null,h[0])},i(h){s||(O(l,h),s=!0)},o(h){M(l,h),s=!1},d(h){h&&x(e),l&&l.d(h),n[16](null),r=!1,Me(o)}}}function jR(n,e,t){const i=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let s=J(e,i),{$$slots:r={},$$scope:o}=e;const{FocusTrap:a}=rA,l=Ke(Ce());let{use:u=[]}=e,{class:c=""}=e,{variant:h=void 0}=e,{open:d=!1}=e,{fixed:f=!0}=e,m,p,g={},E=null,S,b=!1;vt("SMUI:list:nav",!0),vt("SMUI:list:item:nav",!0),vt("SMUI:list:wrapFocus",!0);let C=h;Cn(()=>{S=new a(m,{skipInitialFocus:!0}),t(4,p=V()),p&&p.init()}),ki(()=>{p&&p.destroy(),b&&b.removeEventListener("SMUIDrawerScrim:click",U)});function V(){var H,q;b&&b.removeEventListener("SMUIDrawerScrim:click",U),h==="modal"&&(b=(q=(H=m.parentNode)===null||H===void 0?void 0:H.querySelector(".mdc-drawer-scrim"))!==null&&q!==void 0?q:!1,b&&b.addEventListener("SMUIDrawerScrim:click",U));const G=h==="dismissible"?x_:h==="modal"?BR:void 0;return G?new G({addClass:_,removeClass:T,hasClass:w,elementHasClass:(Le,ee)=>Le.classList.contains(ee),saveFocus:()=>E=document.activeElement,restoreFocus:()=>{E&&"focus"in E&&m.contains(document.activeElement)&&E.focus()},focusActiveNavigationItem:()=>{const Le=m.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");Le&&Le.focus()},notifyClose:()=>{t(9,d=!1),rt(m,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{t(9,d=!0),rt(m,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>S.trapFocus(),releaseFocus:()=>S.releaseFocus()}):void 0}function w(H){return H in g?g[H]:Y().classList.contains(H)}function _(H){g[H]||t(6,g[H]=!0,g)}function T(H){(!(H in g)||g[H])&&t(6,g[H]=!1,g)}function U(){p&&"handleScrimClick"in p&&p.handleScrimClick()}function I(H){t(9,d=H)}function R(){return d}function Y(){return m}function v(H){ae[H?"unshift":"push"](()=>{m=H,t(5,m)})}const L=H=>p&&p.handleKeydown(H),A=H=>p&&p.handleTransitionEnd(H);return n.$$set=H=>{e=P(P({},e),xe(H)),t(8,s=J(e,i)),"use"in H&&t(0,u=H.use),"class"in H&&t(1,c=H.class),"variant"in H&&t(2,h=H.variant),"open"in H&&t(9,d=H.open),"fixed"in H&&t(3,f=H.fixed),"$$scope"in H&&t(14,o=H.$$scope)},n.$$.update=()=>{n.$$.dirty&8212&&C!==h&&(t(13,C=h),p&&p.destroy(),t(6,g={}),t(4,p=V()),p&&p.init()),n.$$.dirty&528&&p&&p.isOpen()!==d&&(d?p.open():p.close())},[u,c,h,f,p,m,g,l,s,d,I,R,Y,C,o,r,v,L,A]}class JD extends He{constructor(e){super();Ve(this,e,jR,qR,Fe,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}var ZD=Et({class:"mdc-drawer-app-content",component:Xn}),$D=Et({class:"mdc-drawer__content",component:Xn});Et({class:"mdc-drawer__header",component:Xn});Et({class:"mdc-drawer__title",component:UA});Et({class:"mdc-drawer__subtitle",component:xA});function WR(n){let e,t,i,s,r,o;const a=n[9].default,l=de(a,n,n[8],null);let u=[{class:t=ge({[n[1]]:!0,"mdc-card":!0,"mdc-card--outlined":n[2]==="outlined","smui-card--padded":n[3]})},n[6]],c={};for(let h=0;h<u.length;h+=1)c=P(c,u[h]);return{c(){e=Te("div"),l&&l.c(),this.h()},l(h){e=Ae(h,"DIV",{class:!0});var d=we(e);l&&l.l(d),d.forEach(x),this.h()},h(){ie(e,c)},m(h,d){Z(h,e,d),l&&l.m(e,null),n[10](e),s=!0,r||(o=[te(i=ot.call(null,e,n[0])),te(n[5].call(null,e))],r=!0)},p(h,[d]){l&&l.p&&(!s||d&256)&&me(l,a,h,h[8],s?fe(a,h[8],d,null):pe(h[8]),null),ie(e,c=Ee(u,[(!s||d&14&&t!==(t=ge({[h[1]]:!0,"mdc-card":!0,"mdc-card--outlined":h[2]==="outlined","smui-card--padded":h[3]})))&&{class:t},d&64&&h[6]])),i&&Ue(i.update)&&d&1&&i.update.call(null,h[0])},i(h){s||(O(l,h),s=!0)},o(h){M(l,h),s=!1},d(h){h&&x(e),l&&l.d(h),n[10](null),r=!1,Me(o)}}}function GR(n,e,t){const i=["use","class","variant","padded","getElement"];let s=J(e,i),{$$slots:r={},$$scope:o}=e;const a=Ke(Ce());let{use:l=[]}=e,{class:u=""}=e,{variant:c="raised"}=e,{padded:h=!1}=e,d;function f(){return d}function m(p){ae[p?"unshift":"push"](()=>{d=p,t(4,d)})}return n.$$set=p=>{e=P(P({},e),xe(p)),t(6,s=J(e,i)),"use"in p&&t(0,l=p.use),"class"in p&&t(1,u=p.class),"variant"in p&&t(2,c=p.variant),"padded"in p&&t(3,h=p.padded),"$$scope"in p&&t(8,o=p.$$scope)},[l,u,c,h,d,a,s,f,o,r,m]}class eP extends He{constructor(e){super();Ve(this,e,GR,WR,Fe,{use:0,class:1,variant:2,padded:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}Et({class:"smui-card__content",component:Xn});Et({class:"mdc-card__media-content",component:Xn});Et({class:"mdc-card__action-buttons",component:Xn});Et({class:"mdc-card__action-icons",component:Xn});const V_="@firebase/database",H_="0.12.4";/**
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
 */let B_="";function zR(n){B_=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Rt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:mr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Dn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new KR(e)}}catch{}return new XR},ts=q_("localStorage"),ph=q_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new Xo("@firebase/database"),YR=function(){let n=1;return function(){return n++}}(),j_=function(n){const e=fE(n),t=new uE;t.update(e);const i=t.digest();return tu.encodeByteArray(i)},co=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=co.apply(null,i):typeof i=="object"?e+=Rt(i):e+=i,e+=" "}return e};let ns=null,W_=!0;const QR=function(n,e){F(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Js.logLevel=Se.VERBOSE,ns=Js.log.bind(Js),e&&ph.set("logging_enabled",!0)):typeof n=="function"?ns=n:(ns=null,ph.remove("logging_enabled"))},Ht=function(...n){if(W_===!0&&(W_=!1,ns===null&&ph.get("logging_enabled")===!0&&QR(!0)),ns){const e=co.apply(null,n);ns(e)}},ho=function(n){return function(...e){Ht(n,...e)}},gh=function(...n){const e="FIREBASE INTERNAL ERROR: "+co(...n);Js.error(e)},is=function(...n){const e=`FIREBASE FATAL ERROR: ${co(...n)}`;throw Js.error(e),new Error(e)},In=function(...n){const e="FIREBASE WARNING: "+co(...n);Js.warn(e)},JR=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&In("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},pl=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ZR=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Zs="[MIN_NAME]",ss="[MAX_NAME]",rs=function(n,e){if(n===e)return 0;if(n===Zs||e===ss)return-1;if(e===Zs||n===ss)return 1;{const t=K_(n),i=K_(e);return t!==null?i!==null?t-i==0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},$R=function(n,e){return n===e?0:n<e?-1:1},fo=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Rt(e))},_h=function(n){if(typeof n!="object"||n===null)return Rt(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Rt(e[i]),t+=":",t+=_h(n[e[i]]);return t+="}",t},G_=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Qt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const z_=function(n){F(!pl(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n==-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(s?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},ek=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function nk(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const ik=new RegExp("^-?(0*)\\d{1,10}$"),sk=-2147483648,rk=2147483647,K_=function(n){if(ik.test(n)){const e=Number(n);if(e>=sk&&e<=rk)return e}return null},$s=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw In("Exception was thrown by user callback.",t),e},Math.floor(0))}},ok=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},mo=function(n,e){const t=setTimeout(n,e);return typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class ak{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){In(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ht("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',In(e)}}class yh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="5",X_="v",Y_="s",Q_="r",J_="f",Z_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$_="ls",uk="p",Ih="ac",ey="websocket",ty="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,t,i,s,r=!1,o="",a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ts.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ts.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function hk(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function ny(n,e,t){F(typeof e=="string","typeof type must == string"),F(typeof t=="object","typeof params must == object");let i;if(e===ey)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ty)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hk(n)&&(t.ns=n.namespace);const s=[];return Qt(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(){this.counters_={}}incrementCounter(e,t=1){Dn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return eE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh={},bh={};function Th(n){const e=n.toString();return Eh[e]||(Eh[e]=new dk),Eh[e]}function fk(n,e){const t=n.toString();return bh[t]||(bh[t]=e()),bh[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&$s(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="start",pk="close",gk="pLPCommand",_k="pRTLPCB",sy="id",ry="pw",oy="ser",yk="cb",vk="seg",Ik="ts",Ek="d",bk="dframe",ay=1870,ly=30,Tk=ay-ly,Ck=25e3,Sk=3e4;class er{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ho(e),this.stats_=Th(t),this.urlFn=l=>(this.appCheckToken&&(l[Ih]=this.appCheckToken),ny(t,ty,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new mk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Sk)),ZR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ch((...r)=>{const[o,a,l,u,c]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===iy)this.id=a,this.password=l;else if(o===pk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[iy]="t",i[oy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[yk]=this.scriptTagHolder.uniqueCallbackIdentifier),i[X_]=vh,this.transportSessionId&&(i[Y_]=this.transportSessionId),this.lastSessionId&&(i[$_]=this.lastSessionId),this.applicationId&&(i[uk]=this.applicationId),this.appCheckToken&&(i[Ih]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Z_.test(location.hostname)&&(i[Q_]=J_);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){er.forceAllow_=!0}static forceDisallow(){er.forceDisallow_=!0}static isAvailable(){return er.forceAllow_?!0:!er.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!ek()&&!tk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Rt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=$I(t),s=G_(i,Tk);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[bk]="t",i[sy]=e,i[ry]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Rt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ch{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=YR(),window[gk+this.uniqueCallbackIdentifier]=e,window[_k+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ch.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,"javascript:".length)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ht("frame writing exception"),a.stack&&Ht(a.stack),Ht(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ht("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sy]=this.myID,e[ry]=this.myPW,e[oy]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ly+i.length<=ay;){const o=this.pendingSegs.shift();i=i+"&"+vk+s+"="+o.seg+"&"+Ik+s+"="+o.ts+"&"+Ek+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Ck)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Ht("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=16384,Ak=45e3;let gl=null;typeof MozWebSocket!="undefined"?gl=MozWebSocket:typeof WebSocket!="undefined"&&(gl=WebSocket);class kn{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ho(this.connId),this.stats_=Th(t),this.connURL=kn.connectionURL_(t,o,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s){const r={};return r[X_]=vh,typeof location!="undefined"&&location.hostname&&Z_.test(location.hostname)&&(r[Q_]=J_),t&&(r[Y_]=t),i&&(r[$_]=i),s&&(r[Ih]=s),ny(e,ey,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ts.set("previous_websocket_failure",!0);try{if(!qd()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new gl(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){kn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&gl!==null&&!kn.forceDisallow_}static previouslyFailed(){return ts.isInMemoryStorage||ts.get("previous_websocket_failure")===!0}markConnectionHealthy(){ts.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=mr(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Rt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=G_(t,wk);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ak))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}kn.responsesRequiredToBeHealthy=2;kn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[er,kn]}initTransports_(e){const t=kn&&kn.isAvailable();let i=t&&!kn.previouslyFailed();if(e.webSocketOnly&&(t||In("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[kn];else{const s=this.transports_=[];for(const r of Sh.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=6e4,kk=5e3,Nk=10*1024,Lk=100*1024,wh="t",uy="d",Ok="s",cy="r",Dk="e",hy="o",dy="a",fy="n",my="p",Pk="h";class Mk{constructor(e,t,i,s,r,o,a,l,u,c){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ho("c:"+this.id+":"),this.transportManager_=new Sh(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=mo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Lk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Nk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wh in e){const t=e[wh];t===dy?this.upgradeIfSecondaryHealthy_():t===cy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===hy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=fo("t",e),i=fo("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:my,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:dy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=fo("t",e),i=fo("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=fo(wh,e);if(uy in e){const i=e[uy];if(t===Pk)this.onHandshake_(i);else if(t===fy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ok?this.onConnectionShutdown_(i):t===cy?this.onReset_(i):t===Dk?gh("Server Error: "+i):t===hy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):gh("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),vh!==i&&In("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),mo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Rk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):mo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:my,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ts.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){F(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends gy{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!jo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new _l}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=32,yy=768;class Pe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Re(){return new Pe("")}function he(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ti(n){return n.pieces_.length-n.pieceNum_}function Be(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Pe(n.pieces_,e)}function Ah(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Fk(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function po(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function vy(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Pe(e,0)}function dt(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof Pe)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new Pe(t,0)}function _e(n){return n.pieceNum_>=n.pieces_.length}function fn(n,e){const t=he(n),i=he(e);if(t===null)return e;if(t===i)return fn(Be(n),Be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Uk(n,e){const t=po(n,0),i=po(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=rs(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function Rh(n,e){if(Ti(n)!==Ti(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function wn(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ti(n)>Ti(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class xk{constructor(e,t){this.errorPrefix_=t,this.parts_=po(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ko(this.parts_[i]);Iy(this)}}function Vk(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ko(e),Iy(n)}function Hk(n){const e=n.parts_.pop();n.byteLength_-=Ko(e),n.parts_.length>0&&(n.byteLength_-=1)}function Iy(n){if(n.byteLength_>yy)throw new Error(n.errorPrefix_+"has a key path longer than "+yy+" bytes ("+n.byteLength_+").");if(n.parts_.length>_y)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_y+") or object contains a cycle "+os(n))}function os(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh extends gy{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new kh}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=1e3,Bk=60*5*1e3,qk=3*1e3,Ey=30*1e3,jk=1.3,Wk=3e4,Gk="server_kill",by=3;class Jn extends py{constructor(e,t,i,s,r,o,a,l){super();if(this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Jn.nextPersistentConnectionId_++,this.log_=ho("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=go,this.maxReconnectDelay_=Bk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!qd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");kh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_l.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Rt(r)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new ri,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),t.resolve(a)):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||s!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},qk),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,u=a.s;Jn.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Dn(e,"w")){const i=Is(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();In(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ey)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=aE(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Rt(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):gh("Unrecognized action received from server: "+Rt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=go,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=go,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Wk&&(this.reconnectDelay_=go),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Jn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},u=function(h){F(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ht("getToken() completed but was canceled"):(Ht("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Mk(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{In(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Gk)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&In(h),l())}}}interrupt(e){Ht("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ht("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Wo(this.interruptReasons_)&&(this.reconnectDelay_=go,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>_h(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new Pe(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Ht("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=by&&(this.reconnectDelay_=Ey,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ht("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=by&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+B_.replace(/\./g,"-")]=1,jo()?e["framework.cordova"]=1:iu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_l.getInstance().currentlyOnline();return Wo(this.interruptReasons_)&&e}}Jn.nextPersistentConnectionId_=0;Jn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ye(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new ye(Zs,e),s=new ye(Zs,t);return this.compare(i,s)!==0}minPost(){return ye.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vl;class Ty extends yl{static get __EMPTY_NODE(){return vl}static set __EMPTY_NODE(e){vl=e}compare(e,t){return rs(e.name,t.name)}isDefinedOn(e){throw vs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ye.MIN}maxPost(){return new ye(ss,vl)}makePost(e,t){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new ye(e,vl)}toString(){return".key"}}const tr=new Ty;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Lt{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:Lt.RED,this.left=s!=null?s:mn.EMPTY_NODE,this.right=r!=null?r:mn.EMPTY_NODE}copy(e,t,i,s,r){return new Lt(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return mn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return mn.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Lt.RED=!0;Lt.BLACK=!1;class zk{copy(e,t,i,s,r){return this}insert(e,t,i){return new Lt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class mn{constructor(e,t=mn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new mn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Lt.BLACK,null,null))}remove(e){return new mn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Lt.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Il(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Il(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Il(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Il(this.root_,null,this.comparator_,!0,e)}}mn.EMPTY_NODE=new zk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(n,e){return rs(n.name,e.name)}function Nh(n,e){return rs(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lh;function Xk(n){Lh=n}const Cy=function(n){return typeof n=="number"?"number:"+z_(n):"string:"+n},Sy=function(n){if(n.isLeafNode()){const e=n.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Dn(e,".sv"),"Priority must be a string or number.")}else F(n===Lh||n.isEmpty(),"priority of unexpected type.");F(n===Lh||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wy;class Ot{constructor(e,t=Ot.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Sy(this.priorityNode_)}static set __childrenNodeConstructor(e){wy=e}static get __childrenNodeConstructor(){return wy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ot(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ot.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return _e(e)?this:he(e)===".priority"?this.priorityNode_:Ot.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ot.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=he(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(F(i!==".priority"||Ti(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ot.__childrenNodeConstructor.EMPTY_NODE.updateChild(Be(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Cy(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=z_(this.value_):e+=this.value_,this.lazyHash_=j_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ot.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ot.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=Ot.VALUE_TYPE_ORDER.indexOf(t),r=Ot.VALUE_TYPE_ORDER.indexOf(i);return F(s>=0,"Unknown leaf type: "+t),F(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ot.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ay,Ry;function Yk(n){Ay=n}function Qk(n){Ry=n}class Jk extends yl{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?rs(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ye.MIN}maxPost(){return new ye(ss,new Ot("[PRIORITY-POST]",Ry))}makePost(e,t){const i=Ay(e);return new ye(t,new Ot("[PRIORITY-POST]",i))}toString(){return".priority"}}const at=new Jk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=Math.log(2);class $k{constructor(e){const t=r=>parseInt(Math.log(r)/Zk,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const El=function(n,e,t,i){n.sort(e);const s=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=n[l],d=t?t(h):h,new Lt(d,h.node,Lt.BLACK,null,null);{const f=parseInt(c/2,10)+l,m=s(l,f),p=s(f+1,u);return h=n[f],d=t?t(h):h,new Lt(d,h.node,Lt.BLACK,m,p)}},r=function(l){let u=null,c=null,h=n.length;const d=function(m,p){const g=h-m,E=h;h-=m;const S=s(g+1,E),b=n[g],C=t?t(b):b;f(new Lt(C,b.node,p,null,S))},f=function(m){u?(u.left=m,u=m):(c=m,u=m)};for(let m=0;m<l.count;++m){const p=l.nextBitIsOne(),g=Math.pow(2,l.count-(m+1));p?d(g,Lt.BLACK):(d(g,Lt.BLACK),d(g,Lt.RED))}return c},o=new $k(n.length),a=r(o);return new mn(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oh;const nr={};class Zn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return F(nr&&at,"ChildrenNode.ts has not been loaded"),Oh=Oh||new Zn({".priority":nr},{".priority":at}),Oh}get(e){const t=Is(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof mn?t:null}hasIndex(e){return Dn(this.indexSet_,e.toString())}addIndex(e,t){F(e!==tr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(ye.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=El(i,e.getCompare()):a=nr;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Zn(c,u)}addToIndexes(e,t){const i=Go(this.indexes_,(s,r)=>{const o=Is(this.indexSet_,r);if(F(o,"Missing index implementation for "+r),s===nr)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(ye.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),El(a,o.getCompare())}else return nr;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new ye(e.name,a))),l.insert(e,e.node)}});return new Zn(i,this.indexSet_)}removeFromIndexes(e,t){const i=Go(this.indexes_,s=>{if(s===nr)return s;{const r=t.get(e.name);return r?s.remove(new ye(e.name,r)):s}});return new Zn(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o;class ne{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Sy(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _o||(_o=new ne(new mn(Nh),null,Zn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_o}updatePriority(e){return this.children_.isEmpty()?this:new ne(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?_o:t}}getChild(e){const t=he(e);return t===null?this:this.getImmediateChild(t).getChild(Be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(F(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new ye(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?_o:this.priorityNode_;return new ne(s,o,r)}}updateChild(e,t){const i=he(e);if(i===null)return t;{F(he(e)!==".priority"||Ti(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Be(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(at,(o,a)=>{t[o]=a.val(e),i++,r&&ne.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Cy(this.getPriority().val())+":"),this.forEachChild(at,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":j_(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new ye(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ye(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ye(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ye.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ye.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yo?-1:0}withIndex(e){if(e===tr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ne(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===tr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(at),s=t.getIterator(at);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===tr?null:this.indexMap_.get(e.toString())}}ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class eN extends ne{constructor(){super(new mn(Nh),ne.EMPTY_NODE,Zn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ne.EMPTY_NODE}isEmpty(){return!1}}const yo=new eN;Object.defineProperties(ye,{MIN:{value:new ye(Zs,ne.EMPTY_NODE)},MAX:{value:new ye(ss,yo)}});Ty.__EMPTY_NODE=ne.EMPTY_NODE;Ot.__childrenNodeConstructor=ne;Xk(yo);Qk(yo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=!0;function Tt(n,e=null){if(n===null)return ne.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ot(t,Tt(e))}if(!(n instanceof Array)&&tN){const t=[];let i=!1;if(Qt(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Tt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new ye(o,l)))}}),t.length===0)return ne.EMPTY_NODE;const r=El(t,Kk,o=>o.name,Nh);if(i){const o=El(t,at.getCompare());return new ne(r,Tt(e),new Zn({".priority":o},{".priority":at}))}else return new ne(r,Tt(e),Zn.Default)}else{let t=ne.EMPTY_NODE;return Qt(n,(i,s)=>{if(Dn(n,i)&&i.substring(0,1)!=="."){const r=Tt(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(Tt(e))}}Yk(Tt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN extends yl{constructor(e){super();this.indexPath_=e,F(!_e(e)&&he(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?rs(e.name,t.name):r}makePost(e,t){const i=Tt(e),s=ne.EMPTY_NODE.updateChild(this.indexPath_,i);return new ye(t,s)}maxPost(){const e=ne.EMPTY_NODE.updateChild(this.indexPath_,yo);return new ye(ss,e)}toString(){return po(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN extends yl{compare(e,t){const i=e.node.compareTo(t.node);return i===0?rs(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ye.MIN}maxPost(){return ye.MAX}makePost(e,t){const i=Tt(e);return new ye(t,i)}toString(){return".value"}}const sN=new iN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(n){return{type:"value",snapshotNode:n}}function ir(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function vo(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Io(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function rN(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){F(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(vo(t,a)):F(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ir(t,i)):o.trackChildChange(Io(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(at,(s,r)=>{t.hasChild(s)||i.trackChildChange(vo(s,r))}),t.isLeafNode()||t.forEachChild(at,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Io(s,r,o))}else i.trackChildChange(ir(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ne.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.indexedFilter_=new Dh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Eo.getStartPost_(e),this.endPost_=Eo.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,i,s,r,o){return this.matches(new ye(t,i))||(i=ne.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=ne.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(ne.EMPTY_NODE);const r=this;return t.forEachChild(at,(o,a)=>{r.matches(new ye(o,a))||(s=s.updateImmediateChild(o,ne.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e){this.rangedFilter_=new Eo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new ye(t,i))||(i=ne.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=ne.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=ne.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)s=s.updateImmediateChild(a.name,a.node),o++;else break}}else{s=t.withIndex(this.index_),s=s.updatePriority(ne.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,f)=>h(f,d)}else l=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,c=!1;for(;l.hasNext();){const h=l.getNext();!c&&a(r,h)<=0&&(c=!0),c&&u<this.limit_&&a(h,o)<=0?u++:s=s.updateImmediateChild(h.name,ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;F(a.numChildren()===this.limit_,"");const l=new ye(t,i),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(c&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Io(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(vo(t,h));const p=a.updateImmediateChild(t,ne.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(ir(d.name,d.node)),p.updateImmediateChild(d.name,d.node)):p}}else return i.isEmpty()?e:c&&o(u,l)>=0?(r!=null&&(r.trackChildChange(vo(u.name,u.node)),r.trackChildChange(ir(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(u.name,ne.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=at}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Zs}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ss}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===at}copy(){const e=new Ph;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function aN(n){return n.loadsAllData()?new Dh(n.getIndex()):n.hasLimit()?new oN(n):new Eo(n)}function Ny(n){const e={};if(n.isDefault())return e;let t;return n.index_===at?t="$priority":n.index_===sN?t="$value":n.index_===tr?t="$key":(F(n.index_ instanceof nN,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Rt(t),n.startSet_&&(e.startAt=Rt(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+Rt(n.indexStartName_))),n.endSet_&&(e.endAt=Rt(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+Rt(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ly(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==at&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends py{constructor(e,t,i,s){super();this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ho("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=bl.getListenId_(e,i),a={};this.listens_[o]=a;const l=Ny(e._queryParams);this.restRequest_(r+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(r,h,!1,i),Is(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",s(d,null)}})}unlisten(e,t){const i=bl.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Ny(e._queryParams),i=e._path.toString(),s=new ri;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Oi(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=mr(a.responseText)}catch{In("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&In("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(){this.rootNode_=ne.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(){return{value:null,children:new Map}}function sr(n,e,t){if(_e(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=he(e);n.children.has(i)||n.children.set(i,Tl());const s=n.children.get(i);e=Be(e),sr(s,e,t)}}function Mh(n,e){if(_e(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(at,(i,s)=>{sr(n,new Pe(i),s)}),Mh(n,e)}}else if(n.children.size>0){const t=he(e);return e=Be(e),n.children.has(t)&&Mh(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Fh(n,e,t){n.value!==null?t(e,n.value):uN(n,(i,s)=>{const r=new Pe(e.toString()+"/"+i);Fh(s,r,t)})}function uN(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Qt(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=10*1e3,hN=30*1e3,dN=5*60*1e3;class fN{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new cN(e);const i=Oy+(hN-Oy)*Math.random();mo(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Qt(e,(s,r)=>{r>0&&Dn(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),mo(this.reportStats_.bind(this),Math.floor(Math.random()*2*dN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nn||(Nn={}));function Dy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Uh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xh(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Nn.ACK_USER_WRITE,this.source=Dy()}operationForChild(e){if(_e(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Pe(e));return new Cl(Re(),t,this.revert)}}else return F(he(this.path)===e,"operationForChild called for unrelated child."),new Cl(Be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t){this.source=e,this.path=t,this.type=Nn.LISTEN_COMPLETE}operationForChild(e){return _e(this.path)?new bo(this.source,Re()):new bo(this.source,Be(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Nn.OVERWRITE}operationForChild(e){return _e(this.path)?new as(this.source,Re(),this.snap.getImmediateChild(e)):new as(this.source,Be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Nn.MERGE}operationForChild(e){if(_e(this.path)){const t=this.children.subtree(new Pe(e));return t.isEmpty()?null:t.value?new as(this.source,Re(),t.value):new To(this.source,Re(),t)}else return F(he(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new To(this.source,Be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(_e(e))return this.isFullyInitialized()&&!this.filtered_;const t=he(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function pN(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(rN(o.childName,o.snapshotNode))}),Co(n,s,"child_removed",e,i,t),Co(n,s,"child_added",e,i,t),Co(n,s,"child_moved",r,i,t),Co(n,s,"child_changed",e,i,t),Co(n,s,"value",e,i,t),s}function Co(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>_N(n,a,l)),o.forEach(a=>{const l=gN(n,a,r);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,n.query_))})})}function gN(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function _N(n,e,t){if(e.childName==null||t.childName==null)throw vs("Should only compare child_ events.");const i=new ye(e.childName,e.snapshotNode),s=new ye(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(n,e){return{eventCache:n,serverCache:e}}function So(n,e,t,i){return Sl(new ls(e,t,i),n.serverCache)}function Py(n,e,t,i){return Sl(n.eventCache,new ls(e,t,i))}function Vh(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function us(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hh;const yN=()=>(Hh||(Hh=new mn($R)),Hh);class Ze{constructor(e,t=yN()){this.value=e,this.children=t}static fromObject(e){let t=new Ze(null);return Qt(e,(i,s)=>{t=t.set(new Pe(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Re(),value:this.value};if(_e(e))return null;{const i=he(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Be(e),t);return r!=null?{path:dt(new Pe(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(_e(e))return this;{const t=he(e),i=this.children.get(t);return i!==null?i.subtree(Be(e)):new Ze(null)}}set(e,t){if(_e(e))return new Ze(t,this.children);{const i=he(e),r=(this.children.get(i)||new Ze(null)).set(Be(e),t),o=this.children.insert(i,r);return new Ze(this.value,o)}}remove(e){if(_e(e))return this.children.isEmpty()?new Ze(null):new Ze(null,this.children);{const t=he(e),i=this.children.get(t);if(i){const s=i.remove(Be(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new Ze(null):new Ze(this.value,r)}else return this}}get(e){if(_e(e))return this.value;{const t=he(e),i=this.children.get(t);return i?i.get(Be(e)):null}}setTree(e,t){if(_e(e))return t;{const i=he(e),r=(this.children.get(i)||new Ze(null)).setTree(Be(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Ze(this.value,o)}}fold(e){return this.fold_(Re(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(dt(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,Re(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(_e(e))return null;{const r=he(e),o=this.children.get(r);return o?o.findOnPath_(Be(e),dt(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Re(),t)}foreachOnPath_(e,t,i){if(_e(e))return this;{this.value&&i(t,this.value);const s=he(e),r=this.children.get(s);return r?r.foreachOnPath_(Be(e),dt(t,s),i):new Ze(null)}}foreach(e){this.foreach_(Re(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(dt(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.writeTree_=e}static empty(){return new Ln(new Ze(null))}}function wo(n,e,t){if(_e(e))return new Ln(new Ze(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=fn(s,e);return r=r.updateChild(o,t),new Ln(n.writeTree_.set(s,r))}else{const s=new Ze(t),r=n.writeTree_.setTree(e,s);return new Ln(r)}}}function My(n,e,t){let i=n;return Qt(t,(s,r)=>{i=wo(i,dt(e,s),r)}),i}function Fy(n,e){if(_e(e))return Ln.empty();{const t=n.writeTree_.setTree(e,new Ze(null));return new Ln(t)}}function Bh(n,e){return cs(n,e)!=null}function cs(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(fn(t.path,e)):null}function Uy(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(at,(i,s)=>{e.push(new ye(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new ye(i,s.value))}),e}function Ci(n,e){if(_e(e))return n;{const t=cs(n,e);return t!=null?new Ln(new Ze(t)):new Ln(n.writeTree_.subtree(e))}}function qh(n){return n.writeTree_.isEmpty()}function rr(n,e){return xy(Re(),n.writeTree_,e)}function xy(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(F(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=xy(dt(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(dt(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(n,e){return jy(e,n)}function vN(n,e,t,i,s){F(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=wo(n.visibleWrites,e,t)),n.lastWriteId=i}function IN(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function EN(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);F(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&bN(a,i.path)?s=!1:wn(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return TN(n),!0;if(i.snap)n.visibleWrites=Fy(n.visibleWrites,i.path);else{const a=i.children;Qt(a,l=>{n.visibleWrites=Fy(n.visibleWrites,dt(i.path,l))})}return!0}else return!1}function bN(n,e){if(n.snap)return wn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&wn(dt(n.path,t),e))return!0;return!1}function TN(n){n.visibleWrites=Vy(n.allWrites,CN,Re()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function CN(n){return n.visible}function Vy(n,e,t){let i=Ln.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)wn(t,o)?(a=fn(t,o),i=wo(i,a,r.snap)):wn(o,t)&&(a=fn(o,t),i=wo(i,Re(),r.snap.getChild(a)));else if(r.children){if(wn(t,o))a=fn(t,o),i=My(i,a,r.children);else if(wn(o,t))if(a=fn(o,t),_e(a))i=My(i,Re(),r.children);else{const l=Is(r.children,he(a));if(l){const u=l.getChild(Be(a));i=wo(i,Re(),u)}}}else throw vs("WriteRecord should have .snap or .children")}}return i}function Hy(n,e,t,i,s){if(!i&&!s){const r=cs(n.visibleWrites,e);if(r!=null)return r;{const o=Ci(n.visibleWrites,e);if(qh(o))return t;if(t==null&&!Bh(o,Re()))return null;{const a=t||ne.EMPTY_NODE;return rr(o,a)}}}else{const r=Ci(n.visibleWrites,e);if(!s&&qh(r))return t;if(!s&&t==null&&!Bh(r,Re()))return null;{const o=function(u){return(u.visible||s)&&(!i||!~i.indexOf(u.writeId))&&(wn(u.path,e)||wn(e,u.path))},a=Vy(n.allWrites,o,e),l=t||ne.EMPTY_NODE;return rr(a,l)}}}function SN(n,e,t){let i=ne.EMPTY_NODE;const s=cs(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(at,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Ci(n.visibleWrites,e);return t.forEachChild(at,(o,a)=>{const l=rr(Ci(r,new Pe(o)),a);i=i.updateImmediateChild(o,l)}),Uy(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ci(n.visibleWrites,e);return Uy(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function wN(n,e,t,i,s){F(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=dt(e,t);if(Bh(n.visibleWrites,r))return null;{const o=Ci(n.visibleWrites,r);return qh(o)?s.getChild(t):rr(o,s.getChild(t))}}function AN(n,e,t,i){const s=dt(e,t),r=cs(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Ci(n.visibleWrites,s);return rr(o,i.getNode().getImmediateChild(t))}else return null}function RN(n,e){return cs(n.visibleWrites,e)}function kN(n,e,t,i,s,r,o){let a;const l=Ci(n.visibleWrites,e),u=cs(l,Re());if(u!=null)a=u;else if(t!=null)a=rr(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&c.length<s;)h(f,i)!==0&&c.push(f),f=d.getNext();return c}else return[]}function NN(){return{visibleWrites:Ln.empty(),allWrites:[],lastWriteId:-1}}function wl(n,e,t,i){return Hy(n.writeTree,n.treePath,e,t,i)}function Wh(n,e){return SN(n.writeTree,n.treePath,e)}function By(n,e,t,i){return wN(n.writeTree,n.treePath,e,t,i)}function Al(n,e){return RN(n.writeTree,dt(n.treePath,e))}function LN(n,e,t,i,s,r){return kN(n.writeTree,n.treePath,e,t,i,s,r)}function Gh(n,e,t){return AN(n.writeTree,n.treePath,e,t)}function qy(n,e){return jy(dt(n.treePath,e),n.writeTree)}function jy(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;F(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),F(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Io(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,vo(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,ir(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Io(i,e.snapshotNode,s.oldSnap));else throw vs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Wy=new DN;class zh{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ls(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gh(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:us(this.viewCache_),r=LN(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(n){return{filter:n}}function MN(n,e){F(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function FN(n,e,t,i,s){const r=new ON;let o,a;if(t.type===Nn.OVERWRITE){const u=t;u.source.fromUser?o=Kh(n,e,u.path,u.snap,i,s,r):(F(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!_e(u.path),o=Rl(n,e,u.path,u.snap,i,s,a,r))}else if(t.type===Nn.MERGE){const u=t;u.source.fromUser?o=xN(n,e,u.path,u.children,i,s,r):(F(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Xh(n,e,u.path,u.children,i,s,a,r))}else if(t.type===Nn.ACK_USER_WRITE){const u=t;u.revert?o=BN(n,e,u.path,i,s,r):o=VN(n,e,u.path,u.affectedTree,i,s,r)}else if(t.type===Nn.LISTEN_COMPLETE)o=HN(n,e,t.path,i,r);else throw vs("Unknown operation type: "+t.type);const l=r.getChanges();return UN(e,o,l),{viewCache:o,changes:l}}function UN(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Vh(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(ky(Vh(e)))}}function Gy(n,e,t,i,s,r){const o=e.eventCache;if(Al(i,t)!=null)return e;{let a,l;if(_e(t))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=us(e),c=u instanceof ne?u:ne.EMPTY_NODE,h=Wh(i,c);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const u=wl(i,us(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=he(t);if(u===".priority"){F(Ti(t)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=By(i,t,c,l);h!=null?a=n.filter.updatePriority(c,h):a=o.getNode()}else{const c=Be(t);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=By(i,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=Gh(i,u,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),u,h,c,s,r):a=o.getNode()}}return So(e,a,o.isFullyInitialized()||_e(t),n.filter.filtersNodes())}}function Rl(n,e,t,i,s,r,o,a){const l=e.serverCache;let u;const c=o?n.filter:n.filter.getIndexedFilter();if(_e(t))u=c.updateFullNode(l.getNode(),i,null);else if(c.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);u=c.updateFullNode(l.getNode(),f,null)}else{const f=he(t);if(!l.isCompleteForPath(t)&&Ti(t)>1)return e;const m=Be(t),g=l.getNode().getImmediateChild(f).updateChild(m,i);f===".priority"?u=c.updatePriority(l.getNode(),g):u=c.updateChild(l.getNode(),f,g,m,Wy,null)}const h=Py(e,u,l.isFullyInitialized()||_e(t),c.filtersNodes()),d=new zh(s,h,r);return Gy(n,h,t,s,d,a)}function Kh(n,e,t,i,s,r,o){const a=e.eventCache;let l,u;const c=new zh(s,e,r);if(_e(t))u=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=So(e,u,!0,n.filter.filtersNodes());else{const h=he(t);if(h===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),i),l=So(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=Be(t),f=a.getNode().getImmediateChild(h);let m;if(_e(d))m=i;else{const p=c.getCompleteChild(h);p!=null?Ah(d)===".priority"&&p.getChild(vy(d)).isEmpty()?m=p:m=p.updateChild(d,i):m=ne.EMPTY_NODE}if(f.equals(m))l=e;else{const p=n.filter.updateChild(a.getNode(),h,m,d,c,o);l=So(e,p,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function zy(n,e){return n.eventCache.isCompleteForChild(e)}function xN(n,e,t,i,s,r,o){let a=e;return i.foreach((l,u)=>{const c=dt(t,l);zy(e,he(c))&&(a=Kh(n,a,c,u,s,r,o))}),i.foreach((l,u)=>{const c=dt(t,l);zy(e,he(c))||(a=Kh(n,a,c,u,s,r,o))}),a}function Ky(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Xh(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;_e(t)?u=i:u=new Ze(null).setTree(t,i);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=Ky(n,f,d);l=Rl(n,l,new Pe(h),m,s,r,o,a)}}),u.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===void 0;if(!c.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),p=Ky(n,m,d);l=Rl(n,l,new Pe(h),p,s,r,o,a)}}),l}function VN(n,e,t,i,s,r,o){if(Al(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(_e(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Rl(n,e,t,l.getNode().getChild(t),s,r,a,o);if(_e(t)){let u=new Ze(null);return l.getNode().forEachChild(tr,(c,h)=>{u=u.set(new Pe(c),h)}),Xh(n,e,t,u,s,r,a,o)}else return e}else{let u=new Ze(null);return i.foreach((c,h)=>{const d=dt(t,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),Xh(n,e,t,u,s,r,a,o)}}function HN(n,e,t,i,s){const r=e.serverCache,o=Py(e,r.getNode(),r.isFullyInitialized()||_e(t),r.isFiltered());return Gy(n,o,t,i,Wy,s)}function BN(n,e,t,i,s,r){let o;if(Al(i,t)!=null)return e;{const a=new zh(i,e,s),l=e.eventCache.getNode();let u;if(_e(t)||he(t)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=wl(i,us(e));else{const h=e.serverCache.getNode();F(h instanceof ne,"serverChildren would be complete if leaf node"),c=Wh(i,h)}c=c,u=n.filter.updateFullNode(l,c,r)}else{const c=he(t);let h=Gh(i,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=n.filter.updateChild(l,c,h,Be(t),a,r):e.eventCache.getNode().hasChild(c)?u=n.filter.updateChild(l,c,ne.EMPTY_NODE,Be(t),a,r):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=wl(i,us(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Al(i,Re())!=null,So(e,u,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Dh(i.getIndex()),r=aN(i);this.processor_=PN(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(ne.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(ne.EMPTY_NODE,a.getNode(),null),c=new ls(l,o.isFullyInitialized(),s.filtersNodes()),h=new ls(u,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Sl(h,c),this.eventGenerator_=new mN(this.query_)}get query(){return this.query_}}function jN(n){return n.viewCache_.serverCache.getNode()}function WN(n,e){const t=us(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!_e(e)&&!t.getImmediateChild(he(e)).isEmpty())?t.getChild(e):null}function Xy(n){return n.eventRegistrations_.length===0}function GN(n,e){n.eventRegistrations_.push(e)}function Yy(n,e,t){const i=[];if(t){F(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Qy(n,e,t,i){e.type===Nn.MERGE&&e.source.queryId!==null&&(F(us(n.viewCache_),"We should always have a full cache before handling merges"),F(Vh(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=FN(n.processor_,s,e,t,i);return MN(n.processor_,r.viewCache),F(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Jy(n,r.changes,r.viewCache.eventCache.getNode(),null)}function zN(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(at,(r,o)=>{i.push(ir(r,o))}),t.isFullyInitialized()&&i.push(ky(t.getNode())),Jy(n,i,t.getNode(),e)}function Jy(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return pN(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kl;class KN{constructor(){this.views=new Map}}function XN(n){F(!kl,"__referenceConstructor has already been defined"),kl=n}function YN(){return F(kl,"Reference.ts has not been loaded"),kl}function QN(n){return n.views.size===0}function Yh(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return F(r!=null,"SyncTree gave us an op for an invalid query."),Qy(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Qy(o,e,t,i));return r}}function JN(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=wl(t,s?i:null),l=!1;a?l=!0:i instanceof ne?(a=Wh(t,i),l=!1):(a=ne.EMPTY_NODE,l=!1);const u=Sl(new ls(a,l,!1),new ls(i,s,!1));return new qN(e,u)}return o}function ZN(n,e,t,i,s,r){const o=JN(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),GN(o,t),zN(o,t)}function $N(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Si(n);if(s==="default")for(const[l,u]of n.views.entries())o=o.concat(Yy(u,t,i)),Xy(u)&&(n.views.delete(l),u.query._queryParams.loadsAllData()||r.push(u.query));else{const l=n.views.get(s);l&&(o=o.concat(Yy(l,t,i)),Xy(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Si(n)&&r.push(new(YN())(e._repo,e._path)),{removed:r,events:o}}function Zy(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function or(n,e){let t=null;for(const i of n.views.values())t=t||WN(i,e);return t}function $y(n,e){if(e._queryParams.loadsAllData())return Nl(n);{const i=e._queryIdentifier;return n.views.get(i)}}function ev(n,e){return $y(n,e)!=null}function Si(n){return Nl(n)!=null}function Nl(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ll;function eL(n){F(!Ll,"__referenceConstructor has already been defined"),Ll=n}function tL(){return F(Ll,"Reference.ts has not been loaded"),Ll}let nL=1;class tv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ze(null),this.pendingWriteTree_=NN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function iL(n,e,t,i,s){return vN(n.pendingWriteTree_,e,t,i,s),s?Ao(n,new as(Dy(),e,t)):[]}function ar(n,e,t=!1){const i=IN(n.pendingWriteTree_,e);if(EN(n.pendingWriteTree_,e)){let r=new Ze(null);return i.snap!=null?r=r.set(Re(),!0):Qt(i.children,o=>{r=r.set(new Pe(o),!0)}),Ao(n,new Cl(i.path,r,t))}else return[]}function Ol(n,e,t){return Ao(n,new as(Uh(),e,t))}function sL(n,e,t){const i=Ze.fromObject(t);return Ao(n,new To(Uh(),e,i))}function rL(n,e){return Ao(n,new bo(Uh(),e))}function oL(n,e,t){const i=Jh(n,t);if(i){const s=Zh(i),r=s.path,o=s.queryId,a=fn(r,e),l=new bo(xh(o),a);return $h(n,r,l)}else return[]}function Qh(n,e,t,i){const s=e._path,r=n.syncPointTree_.get(s);let o=[];if(r&&(e._queryIdentifier==="default"||ev(r,e))){const a=$N(r,e,t,i);QN(r)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const l=a.removed;o=a.events;const u=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=n.syncPointTree_.findOnPath(s,(h,d)=>Si(d));if(u&&!c){const h=n.syncPointTree_.subtree(s);if(!h.isEmpty()){const d=uL(h);for(let f=0;f<d.length;++f){const m=d[f],p=m.query,g=ov(n,m);n.listenProvider_.startListening(Ro(p),Dl(n,p),g.hashFn,g.onComplete)}}}if(!c&&l.length>0&&!i)if(u){const h=null;n.listenProvider_.stopListening(Ro(e),h)}else l.forEach(h=>{const d=n.queryToTagMap.get(Pl(h));n.listenProvider_.stopListening(Ro(h),d)});cL(n,l)}return o}function aL(n,e,t,i){const s=Jh(n,i);if(s!=null){const r=Zh(s),o=r.path,a=r.queryId,l=fn(o,e),u=new as(xh(a),l,t);return $h(n,o,u)}else return[]}function lL(n,e,t,i){const s=Jh(n,i);if(s){const r=Zh(s),o=r.path,a=r.queryId,l=fn(o,e),u=Ze.fromObject(t),c=new To(xh(a),l,u);return $h(n,o,c)}else return[]}function nv(n,e,t){const i=e._path;let s=null,r=!1;n.syncPointTree_.foreachOnPath(i,(h,d)=>{const f=fn(h,i);s=s||or(d,f),r=r||Si(d)});let o=n.syncPointTree_.get(i);o?(r=r||Si(o),s=s||or(o,Re())):(o=new KN,n.syncPointTree_=n.syncPointTree_.set(i,o));let a;s!=null?a=!0:(a=!1,s=ne.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((d,f)=>{const m=or(f,Re());m&&(s=s.updateImmediateChild(d,m))}));const l=ev(o,e);if(!l&&!e._queryParams.loadsAllData()){const h=Pl(e);F(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const d=hL();n.queryToTagMap.set(h,d),n.tagToQueryMap.set(d,h)}const u=jh(n.pendingWriteTree_,i);let c=ZN(o,e,t,u,s,a);if(!l&&!r){const h=$y(o,e);c=c.concat(dL(n,e,h))}return c}function iv(n,e,t){const i=!0,s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=fn(o,e),u=or(a,l);if(u)return u});return Hy(s,e,r,t,i)}function Ao(n,e){return sv(e,n.syncPointTree_,null,jh(n.pendingWriteTree_,Re()))}function sv(n,e,t,i){if(_e(n.path))return rv(n,e,t,i);{const s=e.get(Re());t==null&&s!=null&&(t=or(s,Re()));let r=[];const o=he(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const u=t?t.getImmediateChild(o):null,c=qy(i,o);r=r.concat(sv(a,l,u,c))}return s&&(r=r.concat(Yh(s,n,i,t))),r}}function rv(n,e,t,i){const s=e.get(Re());t==null&&s!=null&&(t=or(s,Re()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,u=qy(i,o),c=n.operationForChild(o);c&&(r=r.concat(rv(c,a,l,u)))}),s&&(r=r.concat(Yh(s,n,i,t))),r}function ov(n,e){const t=e.query,i=Dl(n,t);return{hashFn:()=>(jN(e)||ne.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?oL(n,t._path,i):rL(n,t._path);{const r=nk(s,t);return Qh(n,t,null,r)}}}}function Dl(n,e){const t=Pl(e);return n.queryToTagMap.get(t)}function Pl(n){return n._path.toString()+"$"+n._queryIdentifier}function Jh(n,e){return n.tagToQueryMap.get(e)}function Zh(n){const e=n.indexOf("$");return F(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Pe(n.substr(0,e))}}function $h(n,e,t){const i=n.syncPointTree_.get(e);F(i,"Missing sync point for query tag that we're tracking");const s=jh(n.pendingWriteTree_,e);return Yh(i,t,s,null)}function uL(n){return n.fold((e,t,i)=>{if(t&&Si(t))return[Nl(t)];{let s=[];return t&&(s=Zy(t)),Qt(i,(r,o)=>{s=s.concat(o)}),s}})}function Ro(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(tL())(n._repo,n._path):n}function cL(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Pl(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function hL(){return nL++}function dL(n,e,t){const i=e._path,s=Dl(n,e),r=ov(n,t),o=n.listenProvider_.startListening(Ro(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)F(!Si(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!_e(u)&&c&&Si(c))return[Nl(c).query];{let d=[];return c&&(d=d.concat(Zy(c).map(f=>f.query))),Qt(h,(f,m)=>{d=d.concat(m)}),d}});for(let u=0;u<l.length;++u){const c=l[u];n.listenProvider_.stopListening(Ro(c),Dl(n,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ed(t)}node(){return this.node_}}class td{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=dt(this.path_,e);return new td(this.syncTree_,t)}node(){return iv(this.syncTree_,this.path_)}}const fL=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},av=function(n,e,t){if(!n||typeof n!="object")return n;if(F(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return mL(n[".sv"],e,t);if(typeof n[".sv"]=="object")return pL(n[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},mL=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:F(!1,"Unexpected server value: "+n)}},pL=function(n,e,t){n.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&F(!1,"Unexpected increment value: "+i);const s=e.node();if(F(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},gL=function(n,e,t,i){return nd(e,new td(t,n),i)},_L=function(n,e,t){return nd(n,new ed(e),t)};function nd(n,e,t){const i=n.getPriority().val(),s=av(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=av(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new Ot(a,Tt(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Ot(s))),o.forEachChild(at,(a,l)=>{const u=nd(l,e.getImmediateChild(a),t);u!==l&&(r=r.updateImmediateChild(a,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function sd(n,e){let t=e instanceof Pe?e:new Pe(e),i=n,s=he(t);for(;s!==null;){const r=Is(i.node.children,s)||{children:{},childCount:0};i=new id(s,i,r),t=Be(t),s=he(t)}return i}function lr(n){return n.node.value}function lv(n,e){n.node.value=e,rd(n)}function uv(n){return n.node.childCount>0}function yL(n){return lr(n)===void 0&&!uv(n)}function Ml(n,e){Qt(n.node.children,(t,i)=>{e(new id(t,n,i))})}function cv(n,e,t,i){t&&!i&&e(n),Ml(n,s=>{cv(s,e,!0,i)}),t&&i&&e(n)}function vL(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ko(n){return new Pe(n.parent===null?n.name:ko(n.parent)+"/"+n.name)}function rd(n){n.parent!==null&&IL(n.parent,n.name,n)}function IL(n,e,t){const i=yL(t),s=Dn(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,rd(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,rd(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EL=/[\[\].#$\/\u0000-\u001F\u007F]/,bL=/[\[\].#$\u0000-\u001F\u007F]/,od=10*1024*1024,ad=function(n){return typeof n=="string"&&n.length!==0&&!EL.test(n)},hv=function(n){return typeof n=="string"&&n.length!==0&&!bL.test(n)},TL=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),hv(n)},dv=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!pl(n)||n&&typeof n=="object"&&Dn(n,".sv")},fv=function(n,e,t,i){i&&e===void 0||Fl(Es(n,"value"),e,t)},Fl=function(n,e,t){const i=t instanceof Pe?new xk(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+os(i));if(typeof e=="function")throw new Error(n+"contains a function "+os(i)+" with contents = "+e.toString());if(pl(e))throw new Error(n+"contains "+e.toString()+" "+os(i));if(typeof e=="string"&&e.length>od/3&&Ko(e)>od)throw new Error(n+"contains a string greater than "+od+" utf8 bytes "+os(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Qt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ad(o)))throw new Error(n+" contains an invalid key ("+o+") "+os(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Vk(i,o),Fl(n,a,i),Hk(i)}),s&&r)throw new Error(n+' contains ".value" child '+os(i)+" in addition to actual children.")}},CL=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=po(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!ad(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Uk);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&wn(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},SL=function(n,e,t,i){if(i&&e===void 0)return;const s=Es(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];Qt(e,(o,a)=>{const l=new Pe(o);if(Fl(s,a,dt(t,l)),Ah(l)===".priority"&&!dv(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),CL(s,r)},wL=function(n,e,t){if(!(t&&e===void 0)){if(pl(e))throw new Error(Es(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!dv(e))throw new Error(Es(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},mv=function(n,e,t,i){if(!(i&&t===void 0)&&!hv(t))throw new Error(Es(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},AL=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mv(n,e,t,i)},Ul=function(n,e){if(he(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},RL=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ad(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!TL(t))throw new Error(Es(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function pv(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Rh(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function gv(n,e,t){pv(n,t),_v(n,i=>Rh(i,e))}function hs(n,e,t){pv(n,t),_v(n,i=>wn(i,e)||wn(e,i))}function _v(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(NL(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function NL(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();ns&&Ht("event: "+t.toString()),$s(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL="repo_interrupt",OL=25;class DL{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Tl(),this.transactionQueueTree_=new id,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function PL(n,e,t){if(n.stats_=Th(n.repoInfo_),n.forceRestClient_||ok())n.server_=new bl(n.repoInfo_,(i,s,r,o)=>{vv(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Iv(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Rt(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Jn(n.repoInfo_,e,(i,s,r,o)=>{vv(n,i,s,r,o)},i=>{Iv(n,i)},i=>{FL(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=fk(n.repoInfo_,()=>new fN(n.stats_,n.server_)),n.infoData_=new lN,n.infoSyncTree_=new tv({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Ol(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ld(n,"connected",!1),n.serverSyncTree_=new tv({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const u=o(a,l);hs(n.eventQueue_,i._path,u)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function ML(n){const t=n.infoData_.getNode(new Pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function yv(n){return fL({timestamp:ML(n)})}function vv(n,e,t,i,s){n.dataUpdateCount++;const r=new Pe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Go(t,u=>Tt(u));o=lL(n.serverSyncTree_,r,l,s)}else{const l=Tt(t);o=aL(n.serverSyncTree_,r,l,s)}else if(i){const l=Go(t,u=>Tt(u));o=sL(n.serverSyncTree_,r,l)}else{const l=Tt(t);o=Ol(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=cd(n,r)),hs(n.eventQueue_,a,o)}function Iv(n,e){ld(n,"connected",e),e===!1&&xL(n)}function FL(n,e){Qt(e,(t,i)=>{ld(n,t,i)})}function ld(n,e,t){const i=new Pe("/.info/"+e),s=Tt(t);n.infoData_.updateSnapshot(i,s);const r=Ol(n.infoSyncTree_,i,s);hs(n.eventQueue_,i,r)}function UL(n){return n.nextWriteId_++}function xL(n){Tv(n,"onDisconnectEvents");const e=yv(n),t=Tl();Fh(n.onDisconnect_,Re(),(s,r)=>{const o=gL(s,r,n.serverSyncTree_,e);sr(t,s,o)});let i=[];Fh(t,Re(),(s,r)=>{i=i.concat(Ol(n.serverSyncTree_,s,r));const o=zL(n,s);cd(n,o)}),n.onDisconnect_=Tl(),hs(n.eventQueue_,Re(),i)}function VL(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,s)=>{i==="ok"&&Mh(n.onDisconnect_,e),No(n,t,i,s)})}function Ev(n,e,t,i){const s=Tt(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(r,o)=>{r==="ok"&&sr(n.onDisconnect_,e,s),No(n,i,r,o)})}function HL(n,e,t,i,s){const r=Tt(t,i);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&sr(n.onDisconnect_,e,r),No(n,s,o,a)})}function BL(n,e,t,i){if(Wo(t)){Ht("onDisconnect().update() called with empty data.  Don't do anything."),No(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,r)=>{s==="ok"&&Qt(t,(o,a)=>{const l=Tt(a);sr(n.onDisconnect_,dt(e,o),l)}),No(n,i,s,r)})}function qL(n,e,t){let i;he(e._path)===".info"?i=nv(n.infoSyncTree_,e,t):i=nv(n.serverSyncTree_,e,t),gv(n.eventQueue_,e._path,i)}function bv(n,e,t){let i;he(e._path)===".info"?i=Qh(n.infoSyncTree_,e,t):i=Qh(n.serverSyncTree_,e,t),gv(n.eventQueue_,e._path,i)}function jL(n){n.persistentConnection_&&n.persistentConnection_.interrupt(LL)}function Tv(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ht(t,...e)}function No(n,e,t,i){e&&$s(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Cv(n,e,t){return iv(n.serverSyncTree_,e,t)||ne.EMPTY_NODE}function ud(n,e=n.transactionQueueTree_){if(e||xl(n,e),lr(e)){const t=wv(n,e);F(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&WL(n,ko(e),t)}else uv(e)&&Ml(e,t=>{ud(n,t)})}function WL(n,e,t){const i=t.map(u=>u.currentWriteId),s=Cv(n,e,i);let r=s;const o=s.hash();for(let u=0;u<t.length;u++){const c=t[u];F(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=fn(e,c.path);r=r.updateChild(h,c.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,u=>{Tv(n,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,c=c.concat(ar(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();xl(n,sd(n.transactionQueueTree_,e)),ud(n,n.transactionQueueTree_),hs(n.eventQueue_,e,c);for(let d=0;d<h.length;d++)$s(h[d])}else{if(u==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{In("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=u}cd(n,e)}},o)}function cd(n,e){const t=Sv(n,e),i=ko(t),s=wv(n,t);return GL(n,s,i),i}function GL(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=fn(t,l.path);let c=!1,h;if(F(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,s=s.concat(ar(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=OL)c=!0,h="maxretry",s=s.concat(ar(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Cv(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Fl("transaction failed: Data returned ",f,l.path);let m=Tt(f);typeof f=="object"&&f!=null&&Dn(f,".priority")||(m=m.updatePriority(d.getPriority()));const g=l.currentWriteId,E=yv(n),S=_L(m,d,E);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=S,l.currentWriteId=UL(n),o.splice(o.indexOf(g),1),s=s.concat(iL(n.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),s=s.concat(ar(n.serverSyncTree_,g,!0))}else c=!0,h="nodata",s=s.concat(ar(n.serverSyncTree_,l.currentWriteId,!0))}hs(n.eventQueue_,t,s),s=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}xl(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)$s(i[a]);ud(n,n.transactionQueueTree_)}function Sv(n,e){let t,i=n.transactionQueueTree_;for(t=he(e);t!==null&&lr(i)===void 0;)i=sd(i,t),e=Be(e),t=he(e);return i}function wv(n,e){const t=[];return Av(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Av(n,e,t){const i=lr(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Ml(e,s=>{Av(n,s,t)})}function xl(n,e){const t=lr(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,lv(e,t.length>0?t:void 0)}Ml(e,i=>{xl(n,i)})}function zL(n,e){const t=ko(Sv(n,e)),i=sd(n.transactionQueueTree_,e);return vL(i,s=>{hd(n,s)}),hd(n,i),cv(i,s=>{hd(n,s)}),t}function hd(n,e){const t=lr(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(F(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(F(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(ar(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?lv(e,void 0):t.length=r+1,hs(n.eventQueue_,ko(e),s);for(let o=0;o<i.length;o++)$s(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KL(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function XL(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):In(`Invalid query segment '${t}' in query '${n}'`)}return e}const Rv=function(n,e){const t=YL(n),i=t.namespace;t.domain==="firebase.com"&&is(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&is("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||JR();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ck(t.host,t.secure,i,e,s,"",i!==t.subdomain),path:new Pe(t.pathString)}},YL=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let c=n.indexOf("/");c===-1&&(c=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(c,h)),c<h&&(s=KL(n.substring(c,h)));const d=XL(n.substring(Math.min(n.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const f=e.slice(0,u);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Rt(this.snapshot.exportVal())}}class Nv{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return F(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class JL{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ri;return VL(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ul("OnDisconnect.remove",this._path);const e=new ri;return Ev(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ul("OnDisconnect.set",this._path),fv("OnDisconnect.set",e,this._path,!1);const t=new ri;return Ev(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Ul("OnDisconnect.setWithPriority",this._path),fv("OnDisconnect.setWithPriority",e,this._path,!1),wL("OnDisconnect.setWithPriority",t,!1);const i=new ri;return HL(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){Ul("OnDisconnect.update",this._path),SL("OnDisconnect.update",e,this._path,!1);const t=new ri;return BL(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return _e(this._path)?null:Ah(this._path)}get ref(){return new $n(this._repo,this._path)}get _queryIdentifier(){const e=Ly(this._queryParams),t=_h(e);return t==="{}"?"default":t}get _queryObject(){return Ly(this._queryParams)}isEqual(e){if(e=Ge(e),!(e instanceof dd))return!1;const t=this._repo===e._repo,i=Rh(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Fk(this._path)}}class $n extends dd{constructor(e,t){super(e,t,new Ph,!1)}get parent(){const e=vy(this._path);return e===null?null:new $n(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Lo{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Pe(e),i=Vl(this.ref,e);return new Lo(this._node.getChild(t),i,at)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Lo(s,Vl(this.ref,i),at)))}hasChild(e){const t=new Pe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function tP(n,e){return n=Ge(n),n._checkNotDeleted("ref"),e!==void 0?Vl(n._root,e):n._root}function Vl(n,e){return n=Ge(n),he(n._path)===null?AL("child","path",e,!1):mv("child","path",e,!1),new $n(n._repo,dt(n._path,e))}function nP(n){return n=Ge(n),new JL(n._repo,n._path)}class fd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new kv("value",this,new Lo(e.snapshotNode,new $n(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Nv(this,e,t):null}matches(e){return e instanceof fd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class md{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Nv(this,e,t):null}createEvent(e,t){F(e.childName!=null,"Child events should have a childName.");const i=Vl(new $n(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new kv(e.type,this,new Lo(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof md?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function ZL(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,u=(c,h)=>{bv(n._repo,n,a),l(c,h)};u.userCallback=t.userCallback,u.context=t.context,t=u}const o=new QL(t,r||void 0),a=e==="value"?new fd(o):new md(e,o);return qL(n._repo,n,a),()=>bv(n._repo,n,a)}function iP(n,e,t,i){return ZL(n,"value",e,t,i)}XN($n);eL($n);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $L="FIREBASE_DATABASE_EMULATOR_HOST",pd={};let eO=!1;function tO(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||is("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ht("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Rv(r,s),a=o.repoInfo,l,u;typeof process!="undefined"&&(u=process.env[$L]),u?(l=!0,r=`http://${u}?ns=${a.namespace}`,o=Rv(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const c=s&&l?new yh(yh.OWNER):new lk(n.name,n.options,e);RL("Invalid Firebase Database URL",o),_e(o.path)||is("Database URL must point to the root of a Firebase Database (not including a child path).");const h=iO(a,n,c,new ak(n.name,t));return new sO(h,n)}function nO(n,e){const t=pd[e];(!t||t[n.key]!==n)&&is(`Database ${e}(${n.repoInfo_}) has already been deleted.`),jL(n),delete t[n.key]}function iO(n,e,t,i){let s=pd[e.name];s||(s={},pd[e.name]=s);let r=s[n.toURLString()];return r&&is("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new DL(n,eO,t,i),s[n.toURLString()]=r,r}class sO{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(PL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $n(this._repo,Re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(nO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&is("Cannot call "+e+" on a deleted database.")}}function sP(n=Jo(),e){return pr(n,"database").getImmediate({identifier:e})}/**
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
 */function rO(n){zR(Mi),Pi(new oi("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return tO(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Sn(V_,H_,n),Sn(V_,H_,"esm2017")}Jn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Jn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};rO();var oO=()=>{let n=2,e=[];function t(s){let r=s.length,o=new Uint8Array(r*n);for(let a=0;a<r;a++){let l=a*n,u=s[a];u>1?u=1:u<-1&&(u=-1),u=u*32768,o[l]=u,o[l+1]=u>>8}e.push(o)}function i(s){let r=e.length?e[0].length:0,o=e.length*r,a=new Uint8Array(44+o),l=new DataView(a.buffer);l.setUint32(0,1380533830,!1),l.setUint32(4,36+o,!0),l.setUint32(8,1463899717,!1),l.setUint32(12,1718449184,!1),l.setUint32(16,16,!0),l.setUint16(20,1,!0),l.setUint16(22,1,!0),l.setUint32(24,s,!0),l.setUint32(28,s*n,!0),l.setUint16(32,n,!0),l.setUint16(34,8*n,!0),l.setUint32(36,1684108385,!1),l.setUint32(40,o,!0);for(let u=0;u<e.length;u++)a.set(e[u],u*r+44);e=[],postMessage(a.buffer,[a.buffer])}onmessage=s=>{s.data[0]==="encode"?t(s.data[1]):s.data[0]==="dump"&&i(s.data[1])}};let Lv=window.AudioContext||window.webkitAudioContext,aO=n=>{let e=n.toString().replace(/^(\(\)\s*=>|function\s*\(\))\s*{/,"").replace(/}$/,""),t=new Blob([e]);return new Worker(URL.createObjectURL(t))},Oo=n=>{let e=new Event("error");return e.data=new Error("Wrong state for "+n),e},ds;class fs{constructor(e,t=null){this.stream=e,this.config=t,this.state="inactive",this.em=document.createDocumentFragment(),this.encoder=aO(fs.encoder);let i=this;this.encoder.addEventListener("message",s=>{let r=new Event("dataavailable");r.data=new Blob([s.data],{type:i.mimeType}),i.em.dispatchEvent(r),i.state==="inactive"&&i.em.dispatchEvent(new Event("stop"))})}start(e){if(this.state!=="inactive")return this.em.dispatchEvent(Oo("start"));this.state="recording",ds||(ds=new Lv(this.config)),this.clone=this.stream.clone(),this.input=ds.createMediaStreamSource(this.clone),this.processor=ds.createScriptProcessor(2048,1,1),this.encoder.postMessage(["init",ds.sampleRate]),this.processor.onaudioprocess=t=>{this.state==="recording"&&this.encoder.postMessage(["encode",t.inputBuffer.getChannelData(0)])},this.input.connect(this.processor),this.processor.connect(ds.destination),this.em.dispatchEvent(new Event("start")),e&&(this.slicing=setInterval(()=>{this.state==="recording"&&this.requestData()},e))}stop(){return this.state==="inactive"?this.em.dispatchEvent(Oo("stop")):(this.requestData(),this.state="inactive",this.clone.getTracks().forEach(e=>{e.stop()}),this.processor.disconnect(),this.input.disconnect(),clearInterval(this.slicing))}pause(){return this.state!=="recording"?this.em.dispatchEvent(Oo("pause")):(this.state="paused",this.em.dispatchEvent(new Event("pause")))}resume(){return this.state!=="paused"?this.em.dispatchEvent(Oo("resume")):(this.state="recording",this.em.dispatchEvent(new Event("resume")))}requestData(){return this.state==="inactive"?this.em.dispatchEvent(Oo("requestData")):this.encoder.postMessage(["dump",ds.sampleRate])}addEventListener(...e){this.em.addEventListener(...e)}removeEventListener(...e){this.em.removeEventListener(...e)}dispatchEvent(...e){this.em.dispatchEvent(...e)}}fs.prototype.mimeType="audio/wav";fs.isTypeSupported=n=>fs.prototype.mimeType===n;fs.notSupported=!navigator.mediaDevices||!Lv;fs.encoder=oO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov="firebasestorage.googleapis.com",Dv="storageBucket",lO=2*60*1e3,uO=10*60*1e3;class ft extends Li{constructor(e,t){super(gd(e),`Firebase Storage: ${t} (${gd(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ft.prototype)}_codeEquals(e){return gd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function gd(n){return"storage/"+n}function _d(){const n="An unknown error occurred, please check the error payload for server response.";return new ft("unknown",n)}function cO(n){return new ft("object-not-found","Object '"+n+"' does not exist.")}function hO(n){return new ft("quota-exceeded","Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function dO(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ft("unauthenticated",n)}function fO(){return new ft("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function mO(n){return new ft("unauthorized","User does not have permission to access '"+n+"'.")}function pO(){return new ft("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function gO(){return new ft("canceled","User canceled the upload/download.")}function _O(n){return new ft("invalid-url","Invalid URL '"+n+"'.")}function yO(n){return new ft("invalid-default-bucket","Invalid default bucket '"+n+"'.")}function vO(){return new ft("no-default-bucket","No default bucket found. Did you set the '"+Dv+"' property when initializing the app?")}function IO(){return new ft("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function EO(){return new ft("no-download-url","The given file does not have any download URLs.")}function yd(n){return new ft("invalid-argument",n)}function Pv(){return new ft("app-deleted","The Firebase app was deleted.")}function bO(n){return new ft("invalid-root-operation","The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Do(n,e){return new ft("invalid-format","String does not match format '"+n+"': "+e)}function Po(n){throw new ft("internal-error","Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=En.makeFromUrl(e,t)}catch{return new En(e,"")}if(i.path==="")return i;throw yO(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(C){C.path_=decodeURIComponent(C.path)}const c="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${s}/o${d}`,"i"),m={bucket:1,path:3},p=t===Ov?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",E=new RegExp(`^https?://${p}/${s}/${g}`,"i"),b=[{regex:a,indices:l,postModify:r},{regex:f,indices:m,postModify:u},{regex:E,indices:{bucket:1,path:2},postModify:u}];for(let C=0;C<b.length;C++){const V=b[C],w=V.regex.exec(e);if(w){const _=w[V.indices.bucket];let T=w[V.indices.path];T||(T=""),i=new En(_,T),V.postModify(i);break}}if(i==null)throw _O(e);return i}}class TO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CO(n,e,t){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...g){u||(u=!0,e.apply(null,g))}function h(g){s=setTimeout(()=>{s=null,n(f,l())},g)}function d(){r&&clearTimeout(r)}function f(g,...E){if(u){d();return}if(g){d(),c.call(null,g,...E);return}if(l()||o){d(),c.call(null,g,...E);return}i<64&&(i*=2);let b;a===1?(a=2,b=0):b=(i+Math.random())*1e3,h(b)}let m=!1;function p(g){m||(m=!0,d(),!u&&(s!==null?(g||(a=2),clearTimeout(s),h(0)):g||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,p(!0)},t),p}function SO(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wO(n){return n!==void 0}function AO(n){return typeof n=="object"&&!Array.isArray(n)}function vd(n){return typeof n=="string"||n instanceof String}function Mv(n){return Id()&&n instanceof Blob}function Id(){return typeof Blob!="undefined"}function Fv(n,e,t,i){if(i<e)throw yd(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw yd(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function Uv(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ms;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ms||(ms={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e,t,i,s,r,o,a,l,u,c,h){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,f)=>{this.resolve_=d,this.reject_=f,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Bl(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ms.NO_ERROR,l=r.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=r.getErrorCode()===ms.ABORT;i(!1,new Bl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;i(!0,new Bl(u,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());wO(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=_d();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Pv():gO();o(l)}else{const l=pO();o(l)}};this.canceled_?t(!1,new Bl(!1,null,!0)):this.backoffId_=CO(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&SO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,r=this.additionalRetryCodes_.indexOf(e)!==-1;return t||s||r}}class Bl{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function kO(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function NO(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function LO(n,e){e&&(n["X-Firebase-GMPID"]=e)}function OO(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function DO(n,e,t,i,s,r){const o=Uv(n.urlParams),a=n.url+o,l=Object.assign({},n.headers);return LO(l,e),kO(l,t),NO(l,r),OO(l,i),new RO(a,n.method,l,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function MO(...n){const e=PO();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Id())return new Blob(n);throw new ft("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function FO(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function UO(n){return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ed{constructor(e,t){this.data=e,this.contentType=t||null}}function xO(n,e){switch(n){case Un.RAW:return new Ed(xv(e));case Un.BASE64:case Un.BASE64URL:return new Ed(Vv(n,e));case Un.DATA_URL:return new Ed(HO(e),BO(e))}throw _d()}function xv(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)==55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)==56320))e.push(239,191,189);else{const r=i,o=n.charCodeAt(++t);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)==56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function VO(n){let e;try{e=decodeURIComponent(n)}catch{throw Do(Un.DATA_URL,"Malformed data URL.")}return xv(e)}function Vv(n,e){switch(n){case Un.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw Do(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Un.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw Do(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=UO(e)}catch{throw Do(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class Hv{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Do(Un.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=qO(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-";base64".length):i),this.rest=e.substring(e.indexOf(",")+1)}}function HO(n){const e=new Hv(n);return e.base64?Vv(Un.BASE64,e.rest):VO(e.rest)}function BO(n){return new Hv(n).contentType}function qO(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t){let i=0,s="";Mv(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Mv(this.data_)){const i=this.data_,s=FO(i,e,t);return s===null?null:new wi(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new wi(i,!0)}}static getBlob(...e){if(Id()){const t=e.map(i=>i instanceof wi?i.data_:i);return new wi(MO.apply(null,t))}else{const t=e.map(o=>vd(o)?xO(Un.RAW,o).data:o.data_);let i=0;t.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)s[r++]=o[a]}),new wi(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(n){let e;try{e=JSON.parse(n)}catch{return null}return AO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jO(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function WO(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function qv(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(n,e){return e}class rn{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||GO}}let ql=null;function zO(n){return!vd(n)||n.length<2?n:qv(n)}function jv(){if(ql)return ql;const n=[];n.push(new rn("bucket")),n.push(new rn("generation")),n.push(new rn("metageneration")),n.push(new rn("name","fullPath",!0));function e(r,o){return zO(o)}const t=new rn("name");t.xform=e,n.push(t);function i(r,o){return o!==void 0?Number(o):o}const s=new rn("size");return s.xform=i,n.push(s),n.push(new rn("timeCreated")),n.push(new rn("updated")),n.push(new rn("md5Hash",null,!0)),n.push(new rn("cacheControl",null,!0)),n.push(new rn("contentDisposition",null,!0)),n.push(new rn("contentEncoding",null,!0)),n.push(new rn("contentLanguage",null,!0)),n.push(new rn("contentType",null,!0)),n.push(new rn("metadata","customMetadata",!0)),ql=n,ql}function KO(n,e){function t(){const i=n.bucket,s=n.fullPath,r=new En(i,s);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function XO(n,e,t){const i={};i.type="file";const s=t.length;for(let r=0;r<s;r++){const o=t[r];i[o.local]=o.xform(i,e[o.server])}return KO(i,n),i}function Wv(n,e,t){const i=Bv(e);return i===null?null:XO(n,i,t)}function YO(n,e,t,i){const s=Bv(e);if(s===null||!vd(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(u=>{const c=n.bucket,h=n.fullPath,d="/b/"+o(c)+"/o/"+o(h),f=Hl(d,t,i),m=Uv({alt:"media",token:u});return f+m})[0]}function QO(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class bd{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(n){if(!n)throw _d()}function JO(n,e){function t(i,s){const r=Wv(n,s,e);return Gv(r!==null),r}return t}function ZO(n,e){function t(i,s){const r=Wv(n,s,e);return Gv(r!==null),YO(r,s,n.host,n._protocol)}return t}function zv(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=fO():s=dO():t.getStatus()===402?s=hO(n.bucket):t.getStatus()===403?s=mO(n.path):s=i,s.serverResponse=i.serverResponse,s}return e}function Kv(n){const e=zv(n);function t(i,s){let r=e(i,s);return i.getStatus()===404&&(r=cO(n.path)),r.serverResponse=s.serverResponse,r}return t}function $O(n,e,t){const i=e.fullServerUrl(),s=Hl(i,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new bd(s,r,ZO(n,t),o);return a.errorHandler=Kv(e),a}function eD(n,e){const t=e.fullServerUrl(),i=Hl(t,n.host,n._protocol),s="DELETE",r=n.maxOperationRetryTime;function o(l,u){}const a=new bd(i,s,o,r);return a.successCodes=[200,204],a.errorHandler=Kv(e),a}function tD(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function nD(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=tD(null,e)),i}function iD(n,e,t,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let b="";for(let C=0;C<2;C++)b=b+Math.random().toString().slice(2);return b}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=nD(e,i,s),c=QO(u,t),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=wi.getBlob(h,i,d);if(f===null)throw IO();const m={name:u.fullPath},p=Hl(r,n.host,n._protocol),g="POST",E=n.maxUploadRetryTime,S=new bd(p,g,JO(n,t),E);return S.urlParams=m,S.headers=o,S.body=f.uploadData(),S.errorHandler=zv(e),S}class sD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ms.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ms.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ms.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s){if(this.sent_)throw Po("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const r in s)s.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,s[r].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Po("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Po("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Po("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Po("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class rD extends sD{initXhr(){this.xhr_.responseType="text"}}function Td(){return new rD}/**
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
 */class ps{constructor(e,t){this._service=e,t instanceof En?this._location=t:this._location=En.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ps(e,t)}get root(){const e=new En(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qv(this._location.path)}get storage(){return this._service}get parent(){const e=jO(this._location.path);if(e===null)return null;const t=new En(this._location.bucket,e);return new ps(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw bO(e)}}function oD(n,e,t){n._throwIfRoot("uploadBytes");const i=iD(n.storage,n._location,jv(),new wi(e,!0),t);return n.storage.makeRequestWithTokens(i,Td).then(s=>({metadata:s,ref:n}))}function aD(n){n._throwIfRoot("getDownloadURL");const e=$O(n.storage,n._location,jv());return n.storage.makeRequestWithTokens(e,Td).then(t=>{if(t===null)throw EO();return t})}function lD(n){n._throwIfRoot("deleteObject");const e=eD(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Td)}function uD(n,e){const t=WO(n._location.path,e),i=new En(n._location.bucket,t);return new ps(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(n){return/^[A-Za-z]+:\/\//.test(n)}function hD(n,e){return new ps(n,e)}function Xv(n,e){if(n instanceof Cd){const t=n;if(t._bucket==null)throw vO();const i=new ps(t,t._bucket);return e!=null?Xv(i,e):i}else return e!==void 0?uD(n,e):n}function dD(n,e){if(e&&cD(e)){if(n instanceof Cd)return hD(n,e);throw yd("To use ref(service, url), the first argument must be a Storage instance.")}else return Xv(n,e)}function Yv(n,e){const t=e==null?void 0:e[Dv];return t==null?null:En.makeFromBucketSpec(t,n)}class Cd{constructor(e,t,i,s,r){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=Ov,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=lO,this._maxUploadRetryTime=uO,this._requests=new Set,s!=null?this._bucket=En.makeFromBucketSpec(s,this._host):this._bucket=Yv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=En.makeFromBucketSpec(this._url,e):this._bucket=Yv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Fv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Fv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ps(this,e)}_makeRequest(e,t,i,s){if(this._deleted)return new TO(Pv());{const r=DO(e,this._appId,i,s,t,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const Qv="@firebase/storage",Jv="0.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="storage";function rP(n,e,t){return n=Ge(n),oD(n,e,t)}function oP(n){return n=Ge(n),aD(n)}function aP(n){return n=Ge(n),lD(n)}function lP(n,e){return n=Ge(n),dD(n,e)}function uP(n=Jo(),e){return n=Ge(n),pr(n,Zv).getImmediate({identifier:e})}function fD(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Cd(t,i,s,e,Mi)}function mD(){Pi(new oi(Zv,fD,"PUBLIC").setMultipleInstances(!0)),Sn(Qv,Jv,""),Sn(Qv,Jv,"esm2017")}mD();export{KD as $,Cn as A,P as B,JI as C,MI as D,AD as E,ND as F,de as G,me as H,pe as I,fe as J,qt as K,Jt as L,OD as M,FD as N,DD as O,xD as P,wD as Q,UD as R,He as S,LD as T,ii as U,GD as V,zD as W,ae as X,si as Y,RD as Z,kD as _,we as a,XD as a0,vD as a1,YD as a2,_D as a3,QD as a4,JD as a5,ZD as a6,$D as a7,eP as a8,gD as a9,lP as aA,rP as aB,oP as aC,aP as aD,qD as aE,Ue as aF,ki as aa,tP as ab,sP as ac,iP as ad,nP as ae,HD as af,BD as ag,te as ah,SD as ai,CD as aj,UI as ak,TD as al,ID as am,PD as an,MD as ao,KI as ap,jD as aq,WD as ar,fs as as,bD as at,qI as au,yD as av,We as aw,Me as ax,VD as ay,uP as az,Tn as b,Ae as c,x as d,Te as e,Z as f,_s as g,cr as h,Ve as i,lt as j,ut as k,pt as l,wt as m,ct as n,tt as o,Ee as p,et as q,jt as r,Fe as s,ni as t,M as u,nt as v,Wt as w,O as x,vt as y,ED as z};

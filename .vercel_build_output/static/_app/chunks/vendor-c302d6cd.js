var jm=Object.defineProperty;var gu=Object.getOwnPropertySymbols;var qm=Object.prototype.hasOwnProperty,zm=Object.prototype.propertyIsEnumerable;var vu=(n,e,t)=>e in n?jm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,De=(n,e)=>{for(var t in e||(e={}))qm.call(e,t)&&vu(n,t,e[t]);if(gu)for(var t of gu(e))zm.call(e,t)&&vu(n,t,e[t]);return n};function Lt(){}function F(n,e){for(const t in e)n[t]=e[t];return n}function yu(n){return n()}function _u(){return Object.create(null)}function Me(n){n.forEach(yu)}function Pe(n){return typeof n=="function"}function je(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let rr;function yA(n,e){return rr||(rr=document.createElement("a")),rr.href=e,n===rr.href}function Gm(n){return Object.keys(n).length===0}function Wm(n,...e){if(n==null)return Lt;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Km(n,e,t){n.$$.on_destroy.push(Wm(e,t))}function Te(n,e,t,i){if(n){const s=Iu(n,e,t,i);return n[0](s)}}function Iu(n,e,t,i){return n[1]&&i?F(t.ctx.slice(),n[1](i(e))):t.ctx}function be(n,e,t,i){if(n[2]&&i){const s=n[2](i(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|s[a];return r}return e.dirty|s}return e.dirty}function Ae(n,e,t,i,s,r){if(s){const o=Iu(e,t,i,r);n.p(o,s)}}function Se(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let i=0;i<t;i++)e[i]=-1;return e}return-1}function Ge(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function ie(n,e){const t={};e=new Set(e);for(const i in n)!e.has(i)&&i[0]!=="$"&&(t[i]=n[i]);return t}function xm(n){const e={};for(const t in n)e[t]=!0;return e}function Xm(n,e,t){return n.set(t),e}function oe(n){return n&&Pe(n.destroy)?n.destroy:Lt}let or=!1;function Qm(){or=!0}function Ym(){or=!1}function Jm(n,e,t,i){for(;n<e;){const s=n+(e-n>>1);t(s)<=i?n=s+1:e=s}return n}function Zm(n){if(n.hydrate_init)return;n.hydrate_init=!0;let e=n.childNodes;if(n.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const u=e[c];u.claim_order!==void 0&&l.push(u)}e=l}const t=new Int32Array(e.length+1),i=new Int32Array(e.length);t[0]=-1;let s=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,u=(s>0&&e[t[s]].claim_order<=c?s+1:Jm(1,s,d=>e[t[d]].claim_order,c))-1;i[l]=t[u]+1;const h=u+1;t[h]=l,s=Math.max(h,s)}const r=[],o=[];let a=e.length-1;for(let l=t[s]+1;l!=0;l=i[l-1]){for(r.push(e[l-1]);a>=l;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);r.reverse(),o.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<o.length;l++){for(;c<r.length&&o[l].claim_order>=r[c].claim_order;)c++;const u=c<r.length?r[c]:null;n.insertBefore(o[l],u)}}function Ie(n,e){if(or){for(Zm(n),(n.actual_end_child===void 0||n.actual_end_child!==null&&n.actual_end_child.parentElement!==n)&&(n.actual_end_child=n.firstChild);n.actual_end_child!==null&&n.actual_end_child.claim_order===void 0;)n.actual_end_child=n.actual_end_child.nextSibling;e!==n.actual_end_child?(e.claim_order!==void 0||e.parentNode!==n)&&n.insertBefore(e,n.actual_end_child):n.actual_end_child=e.nextSibling}else(e.parentNode!==n||e.nextSibling!==null)&&n.appendChild(e)}function x(n,e,t){or&&!t?Ie(n,e):(e.parentNode!==n||e.nextSibling!=t)&&n.insertBefore(e,t||null)}function O(n){n.parentNode.removeChild(n)}function $m(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function te(n){return document.createElement(n)}function ep(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function mn(n){return document.createTextNode(n)}function Ue(){return mn(" ")}function ft(){return mn("")}function Ce(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function tp(n){return function(e){return e.preventDefault(),n.call(this,e)}}function np(n){return function(e){return e.stopPropagation(),n.call(this,e)}}function de(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function se(n,e){const t=Object.getOwnPropertyDescriptors(n.__proto__);for(const i in e)e[i]==null?n.removeAttribute(i):i==="style"?n.style.cssText=e[i]:i==="__value"?n.value=n[i]=e[i]:t[i]&&t[i].set?n[i]=e[i]:de(n,i,e[i])}function ia(n){return n===""?null:+n}function ae(n){return Array.from(n.childNodes)}function ip(n){n.claim_info===void 0&&(n.claim_info={last_index:0,total_claimed:0})}function Eu(n,e,t,i,s=!1){ip(n);const r=(()=>{for(let o=n.claim_info.last_index;o<n.length;o++){const a=n[o];if(e(a)){const l=t(a);return l===void 0?n.splice(o,1):n[o]=l,s||(n.claim_info.last_index=o),a}}for(let o=n.claim_info.last_index-1;o>=0;o--){const a=n[o];if(e(a)){const l=t(a);return l===void 0?n.splice(o,1):n[o]=l,s?l===void 0&&n.claim_info.last_index--:n.claim_info.last_index=o,a}}return i()})();return r.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1,r}function Tu(n,e,t,i){return Eu(n,s=>s.nodeName===e,s=>{const r=[];for(let o=0;o<s.attributes.length;o++){const a=s.attributes[o];t[a.name]||r.push(a.name)}r.forEach(o=>s.removeAttribute(o))},()=>i(e))}function ne(n,e,t){return Tu(n,e,t,te)}function _A(n,e,t){return Tu(n,e,t,ep)}function bn(n,e){return Eu(n,t=>t.nodeType===3,t=>{const i=""+e;if(t.data.startsWith(i)){if(t.data.length!==i.length)return t.splitText(i.length)}else t.data=i},()=>mn(e),!0)}function Ve(n){return bn(n," ")}function Vn(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function Hn(n,e){n.value=e==null?"":e}function IA(n,e,t,i){n.style.setProperty(e,t,i?"important":"")}function sp(n,e,t=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(n,t,!1,e),i}let ar;function lr(n){ar=n}function ke(){if(!ar)throw new Error("Function called outside component initialization");return ar}function nn(n){ke().$$.on_mount.push(n)}function EA(n){ke().$$.after_update.push(n)}function Bn(n){ke().$$.on_destroy.push(n)}function TA(){const n=ke();return(e,t)=>{const i=n.$$.callbacks[e];if(i){const s=sp(e,t);i.slice().forEach(r=>{r.call(n,s)})}}}function _t(n,e){ke().$$.context.set(n,e)}function Pt(n){return ke().$$.context.get(n)}function pn(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(i=>i.call(this,e))}const ds=[],re=[],ur=[],sa=[],bu=Promise.resolve();let ra=!1;function Au(){ra||(ra=!0,bu.then(Su))}function rp(){return Au(),bu}function oa(n){ur.push(n)}function jn(n){sa.push(n)}let aa=!1;const la=new Set;function Su(){if(!aa){aa=!0;do{for(let n=0;n<ds.length;n+=1){const e=ds[n];lr(e),op(e.$$)}for(lr(null),ds.length=0;re.length;)re.pop()();for(let n=0;n<ur.length;n+=1){const e=ur[n];la.has(e)||(la.add(e),e())}ur.length=0}while(ds.length);for(;sa.length;)sa.pop()();ra=!1,aa=!1,la.clear()}}function op(n){if(n.fragment!==null){n.update(),Me(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(oa)}}const cr=new Set;let oi;function Ft(){oi={r:0,c:[],p:oi}}function Ut(){oi.r||Me(oi.c),oi=oi.p}function P(n,e){n&&n.i&&(cr.delete(n),n.i(e))}function j(n,e,t,i){if(n&&n.o){if(cr.has(n))return;cr.add(n),oi.c.push(()=>{cr.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}}const ap=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function bA(n,e){j(n,1,1,()=>{e.delete(n.key)})}function AA(n,e,t,i,s,r,o,a,l,c,u,h){let d=n.length,f=r.length,m=d;const v={};for(;m--;)v[n[m].key]=m;const g=[],_=new Map,I=new Map;for(m=f;m--;){const C=h(s,r,m),p=t(C);let y=o.get(p);y?i&&y.p(C,e):(y=c(p,C),y.c()),_.set(p,g[m]=y),p in v&&I.set(p,Math.abs(m-v[p]))}const S=new Set,w=new Set;function H(C){P(C,1),C.m(a,u),o.set(C.key,C),u=C.first,f--}for(;d&&f;){const C=g[f-1],p=n[d-1],y=C.key,k=p.key;C===p?(u=C.first,d--,f--):_.has(k)?!o.has(y)||S.has(y)?H(C):w.has(k)?d--:I.get(y)>I.get(k)?(w.add(y),H(C)):(S.add(k),d--):(l(p,o),d--)}for(;d--;){const C=n[d];_.has(C.key)||l(C,o)}for(;f;)H(g[f-1]);return g}function Ee(n,e){const t={},i={},s={$$scope:1};let r=n.length;for(;r--;){const o=n[r],a=e[r];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)s[l]||(t[l]=a[l],s[l]=1);n[r]=a}else for(const l in o)s[l]=1}for(const o in i)o in t||(t[o]=void 0);return t}function nt(n){return typeof n=="object"&&n!==null?n:{}}function qn(n,e,t){const i=n.$$.props[e];i!==void 0&&(n.$$.bound[i]=t,t(n.$$.ctx[i]))}function at(n){n&&n.c()}function At(n,e){n&&n.l(e)}function it(n,e,t,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=n.$$;s&&s.m(e,t),i||oa(()=>{const l=r.map(yu).filter(Pe);o?o.push(...l):Me(l),n.$$.on_mount=[]}),a.forEach(oa)}function st(n,e){const t=n.$$;t.fragment!==null&&(Me(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function lp(n,e){n.$$.dirty[0]===-1&&(ds.push(n),Au(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function We(n,e,t,i,s,r,o,a=[-1]){const l=ar;lr(n);const c=n.$$={fragment:null,ctx:null,props:r,update:Lt,not_equal:s,bound:_u(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:_u(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(h,d,...f)=>{const m=f.length?f[0]:d;return c.ctx&&s(c.ctx[h],c.ctx[h]=m)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](m),u&&lp(n,h)),d}):[],c.update(),u=!0,Me(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){Qm();const h=ae(e.target);c.fragment&&c.fragment.l(h),h.forEach(O)}else c.fragment&&c.fragment.c();e.intro&&P(n.$$.fragment),it(n,e.target,e.anchor,e.customElement),Ym(),Su()}lr(l)}class Ke{$destroy(){st(this,1),this.$destroy=Lt}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Gm(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ri=[];function up(n,e=Lt){let t;const i=new Set;function s(a){if(je(n,a)&&(n=a,t)){const l=!Ri.length;for(const c of i)c[1](),Ri.push(c,n);if(l){for(let c=0;c<Ri.length;c+=2)Ri[c][0](Ri[c+1]);Ri.length=0}}}function r(a){s(a(n))}function o(a,l=Lt){const c=[a,l];return i.add(c),i.size===1&&(t=e(s)||Lt),a(n),()=>{i.delete(c),i.size===0&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const cp=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)==55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)==56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},hp=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},dp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(t[u],t[h],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):hp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw Error();const d=r<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const m=c<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},fp=function(n){try{return dp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function wu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ru(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pp(){return St().indexOf("Electron/")>=0}function Lu(){const n=St();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gp(){return St().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="FirebaseError";class Li extends Error{constructor(e,t,i){super(t);this.code=e,this.customData=i,this.name=vp,Object.setPrototypeOf(this,Li.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fs.prototype.create)}}class fs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?yp(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Li(s,a,i)}}function yp(n,e){return n.replace(_p,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const _p=/\{\$([^}]+)}/g;function Ip(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function hr(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Ou(r)&&Ou(o)){if(!hr(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Ou(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ep(n,e){const t=new Tp(n,e);return t.subscribe.bind(t)}class Tp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");bp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=ua),s.error===void 0&&(s.error=ua),s.complete===void 0&&(s.complete=ua);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ua(){}/**
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
 */function gn(n){return n&&n._delegate?n._delegate:n}class Di{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ai="[DEFAULT]";/**
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
 */class Ap{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new mp;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cp(e))try{this.getOrInitializeService({instanceIdentifier:ai})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ai){return this.instances.has(e)}getOptions(e=ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Sp(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ai){return this.component?this.component.multipleInstances?e:ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sp(n){return n===ai?void 0:n}function Cp(n){return n.instantiationMode==="EAGER"}/**
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
 */class wp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ap(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Fe||(Fe={}));const Rp={debug:Fe.DEBUG,verbose:Fe.VERBOSE,info:Fe.INFO,warn:Fe.WARN,error:Fe.ERROR,silent:Fe.SILENT},Lp=Fe.INFO,Op={[Fe.DEBUG]:"log",[Fe.VERBOSE]:"log",[Fe.INFO]:"info",[Fe.WARN]:"warn",[Fe.ERROR]:"error"},Dp=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Op[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ca{constructor(e){this.name=e,this._logLevel=Lp,this._logHandler=Dp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Fe.DEBUG,...e),this._logHandler(this,Fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Fe.VERBOSE,...e),this._logHandler(this,Fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Fe.INFO,...e),this._logHandler(this,Fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Fe.WARN,...e),this._logHandler(this,Fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Fe.ERROR,...e),this._logHandler(this,Fe.ERROR,...e)}}/**
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
 */class kp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Np(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Np(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ha="@firebase/app",Du="0.7.9";/**
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
 */const da=new ca("@firebase/app"),Mp="@firebase/app-compat",Pp="@firebase/analytics-compat",Fp="@firebase/analytics",Up="@firebase/app-check-compat",Vp="@firebase/app-check",Hp="@firebase/auth",Bp="@firebase/auth-compat",jp="@firebase/database",qp="@firebase/database-compat",zp="@firebase/functions",Gp="@firebase/functions-compat",Wp="@firebase/installations",Kp="@firebase/installations-compat",xp="@firebase/messaging",Xp="@firebase/messaging-compat",Qp="@firebase/performance",Yp="@firebase/performance-compat",Jp="@firebase/remote-config",Zp="@firebase/remote-config-compat",$p="@firebase/storage",eg="@firebase/storage-compat",tg="@firebase/firestore",ng="@firebase/firestore-compat",ig="firebase",sg="9.5.0";/**
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
 */const ku="[DEFAULT]",rg={[ha]:"fire-core",[Mp]:"fire-core-compat",[Fp]:"fire-analytics",[Pp]:"fire-analytics-compat",[Vp]:"fire-app-check",[Up]:"fire-app-check-compat",[Hp]:"fire-auth",[Bp]:"fire-auth-compat",[jp]:"fire-rtdb",[qp]:"fire-rtdb-compat",[zp]:"fire-fn",[Gp]:"fire-fn-compat",[Wp]:"fire-iid",[Kp]:"fire-iid-compat",[xp]:"fire-fcm",[Xp]:"fire-fcm-compat",[Qp]:"fire-perf",[Yp]:"fire-perf-compat",[Jp]:"fire-rc",[Zp]:"fire-rc-compat",[$p]:"fire-gcs",[eg]:"fire-gcs-compat",[tg]:"fire-fst",[ng]:"fire-fst-compat","fire-js":"fire-js",[ig]:"fire-js-all"};/**
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
 */const dr=new Map,fa=new Map;function og(n,e){try{n.container.addComponent(e)}catch(t){da.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ms(n){const e=n.name;if(fa.has(e))return da.debug(`There were multiple attempts to register component ${e}.`),!1;fa.set(e,n);for(const t of dr.values())og(t,n);return!0}function ma(n,e){return n.container.getProvider(e)}/**
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
 */const ag={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},fr=new fs("app","Firebase",ag);/**
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
 */class lg{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Di("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
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
 */const ps=sg;function SA(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:ku,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw fr.create("bad-app-name",{appName:String(i)});const s=dr.get(i);if(s){if(hr(n,s.options)&&hr(t,s.config))return s;throw fr.create("duplicate-app",{appName:i})}const r=new wp(i);for(const a of fa.values())r.addComponent(a);const o=new lg(n,t,r);return dr.set(i,o),o}function Nu(n=ku){const e=dr.get(n);if(!e)throw fr.create("no-app",{appName:n});return e}function zn(n,e,t){var i;let s=(i=rg[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),da.warn(a.join(" "));return}ms(new Di(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function ug(n){ms(new Di("platform-logger",e=>new kp(e),"PRIVATE")),zn(ha,Du,n),zn(ha,Du,"esm2017"),zn("fire-js","")}ug("");var cg="firebase",hg="9.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zn(cg,hg,"app");/*! *****************************************************************************
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
***************************************************************************** */var pa=function(n,e){return pa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])},pa(n,e)};function hn(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");pa(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Je=function(){return Je=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++){t=arguments[i];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Je.apply(this,arguments)};function ga(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function An(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Mu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dg=Mu,Pu=new fs("auth","Firebase",Mu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=new ca("@firebase/auth");function mr(n,...e){Fu.logLevel<=Fe.ERROR&&Fu.error(`Auth (${ps}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(n,...e){throw va(n,...e)}function sn(n,...e){return va(n,...e)}function fg(n,e,t){const i=Object.assign(Object.assign({},dg()),{[e]:t});return new fs("auth","Firebase",i).create(e,{appName:n.name})}function va(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Pu.create(n,...e)}function Z(n,e,...t){if(!n)throw va(e,...t)}function Cn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw mr(e),new Error(e)}function wn(n,e){n||Cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=new Map;function Rn(n){wn(n instanceof Function,"Expected a class definition");let e=Uu.get(n);return e?(wn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Uu.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(n,e){const t=ma(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(hr(r,e!=null?e:{}))return s;Sn(s,"already-initialized")}return t.initialize({options:e})}function pg(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Rn);(e==null?void 0:e.errorMap)&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Vu(){return Hu()==="http:"||Hu()==="https:"}function Hu(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vu()||wu()||"connection"in navigator)?navigator.onLine:!0}function vg(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t){this.shortDelay=e,this.longDelay=t,wn(t>e,"Short delay should be less than long delay!"),this.isMobile=Cu()||Ru()}get(){return gg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(n,e){wn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=new gs(3e4,6e4);function li(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Gn(n,e,t,i,s={}){return Bu(n,s,()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Oi(Object.assign({key:n.config.apiKey},o)).slice(1),l=new(Ia.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",n._getSdkClientVersion()),n.languageCode&&l.set("X-Firebase-Locale",n.languageCode),Ia.fetch()(ju(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Bu(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},yg),e);try{const s=new Ig(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw gr(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw gr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw gr(n,"email-already-in-use",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fg(n,u,c);Sn(n,u)}}catch(s){if(s instanceof Li)throw s;Sn(n,"network-request-failed")}}async function pr(n,e,t,i,s={}){const r=await Gn(n,e,t,i,s);return"mfaPendingCredential"in r&&Sn(n,"multi-factor-auth-required",{_serverResponse:r}),r}function ju(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?_a(n.config,s):`${n.config.apiScheme}://${s}`}class Ig{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(sn(this.auth,"timeout")),_g.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gr(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=sn(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg(n,e){return Gn(n,"POST","/v1/accounts:delete",e)}async function Tg(n,e){return Gn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bg(n,e=!1){const t=gn(n),i=await t.getIdToken(e),s=Ta(i);Z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:vs(Ea(s.auth_time)),issuedAtTime:vs(Ea(s.iat)),expirationTime:vs(Ea(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ea(n){return Number(n)*1e3}function Ta(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return mr("JWT malformed, contained fewer than 3 sections"),null;try{const s=fp(t);return s?JSON.parse(s):(mr("Failed to decode base64 JWT payload"),null)}catch(s){return mr("Caught error parsing JWT payload as JSON",s),null}}function Ag(n){const e=Ta(n);return Z(e,"internal-error"),Z(typeof e.exp!="undefined","internal-error"),Z(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Li&&Sg(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Sg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=vs(this.lastLoginAt),this.creationTime=vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vr(n){var e;const t=n.auth,i=await n.getIdToken(),s=await ys(n,Tg(t,{idToken:i}));Z(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?Lg(r.providerUserInfo):[],a=Rg(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a==null?void 0:a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new qu(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function wg(n){const e=gn(n);await vr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rg(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Lg(n){return n.map(e=>{var{providerId:t}=e,i=ga(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Og(n,e){const t=await Bu(n,{},()=>{const i=Oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=ju(n,s,"/v1/token",`key=${r}`);return Ia.fetch()(o,{method:"POST",headers:{"X-Client-Version":n._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken!="undefined","internal-error"),Z(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Ag(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Og(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new _s;return i&&(Z(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(Z(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _s,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(n,e){Z(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class ui{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=ga(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Cg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new qu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ys(this,this.stsTokenManager.getToken(this.auth,e));return Z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return bg(this,e)}reload(){return wg(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ui(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await vr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ys(this,Eg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,g=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=t.createdAt)!==null&&c!==void 0?c:void 0,I=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:w,isAnonymous:H,providerData:C,stsTokenManager:p}=t;Z(S&&p,e,"internal-error");const y=_s.fromJSON(this.name,p);Z(typeof S=="string",e,"internal-error"),Wn(h,e.name),Wn(d,e.name),Z(typeof w=="boolean",e,"internal-error"),Z(typeof H=="boolean",e,"internal-error"),Wn(f,e.name),Wn(m,e.name),Wn(v,e.name),Wn(g,e.name),Wn(_,e.name),Wn(I,e.name);const k=new ui({uid:S,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:H,photoURL:m,phoneNumber:f,tenantId:v,stsTokenManager:y,createdAt:_,lastLoginAt:I});return C&&Array.isArray(C)&&(k.providerData=C.map(E=>Object.assign({},E))),g&&(k._redirectEventId=g),k}static async _fromIdTokenResponse(e,t,i=!1){const s=new _s;s.updateFromServerResponse(t);const r=new ui({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await vr(r),r}}/**
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
 */class zu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zu.type="NONE";const Gu=zu;/**
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
 */function yr(n,e,t){return`firebase:${n}:${e}:${t}`}class ki{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=yr(this.userKey,s.apiKey,r),this.fullPersistenceKey=yr("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ui._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new ki(Rn(Gu),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Rn(Gu);const o=yr(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=ui._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ki(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ki(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ku(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yu(e))return"Blackberry";if(Ju(e))return"Webos";if(ba(e))return"Safari";if((e.includes("chrome/")||xu(e))&&!e.includes("edge/"))return"Chrome";if(Qu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ku(n=St()){return/firefox\//i.test(n)}function ba(n=St()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xu(n=St()){return/crios\//i.test(n)}function Xu(n=St()){return/iemobile/i.test(n)}function Qu(n=St()){return/android/i.test(n)}function Yu(n=St()){return/blackberry/i.test(n)}function Ju(n=St()){return/webos/i.test(n)}function _r(n=St()){return/iphone|ipad|ipod/i.test(n)}function Dg(n=St()){var e;return _r(n)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function kg(){return Lu()&&document.documentMode===10}function Zu(n=St()){return _r(n)||Qu(n)||Ju(n)||Yu(n)||/windows phone/i.test(n)||Xu(n)}function Ng(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(n,e=[]){let t;switch(n){case"Browser":t=Wu(St());break;case"Worker":t=`${Wu(St())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ps}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ec(this),this.idTokenSubscription=new ec(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Rn(t)),this._initializationPromise=this.queue(async()=>{var i,s;this._deleted||(this.persistenceManager=await ki.create(this,e),!this._deleted&&(((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var t;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,r=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===r)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await vr(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?gn(e):null;return t&&Z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fs("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Rn(e)||this._popupRedirectResolver;Z(t,this,"argument-error"),this.redirectPersistenceManager=await ki.create(this,[Rn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Z(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$u(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Is(n){return gn(n)}class ec{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ep(t=>this.observer=t)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,t){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(n,e){return pr(n,"POST","/v1/accounts:signInWithIdp",li(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="http://localhost";class ci extends Aa{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const t=new ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Sn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=ga(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new ci(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ni(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ni(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ni(e,t)}buildRequest(){const e={requestUri:Pg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Oi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fg(n,e){return Gn(n,"POST","/v1/accounts:sendVerificationCode",li(n,e))}async function Ug(n,e){return pr(n,"POST","/v1/accounts:signInWithPhoneNumber",li(n,e))}async function Vg(n,e){const t=await pr(n,"POST","/v1/accounts:signInWithPhoneNumber",li(n,e));if(t.temporaryProof)throw gr(n,"account-exists-with-different-credential",t);return t}const Hg={USER_NOT_FOUND:"user-not-found"};async function Bg(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return pr(n,"POST","/v1/accounts:signInWithPhoneNumber",li(n,t),Hg)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends Aa{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,t){return new Es({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Es({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ug(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Vg(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Bg(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:s,temporaryProof:r}=e;return!i&&!t&&!s&&!r?null:new Es({verificationId:t,verificationCode:i,phoneNumber:s,temporaryProof:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ts extends tc{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Ts{constructor(){super("facebook.com")}static credential(e){return ci._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Ts{constructor(){super("google.com");this.addScope("profile")}static credential(e,t){return ci._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return xn.credential(t,i)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Ts{constructor(){super("github.com")}static credential(e){return ci._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Ts{constructor(){super("twitter.com")}static credential(e,t){return ci._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Qn.credential(t,i)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await ui._fromIdTokenResponse(e,i,s),o=nc(i);return new Mi({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=nc(i);return new Mi({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function nc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Li{constructor(e,t,i,s){var r;super(t.code,t.message);this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ir.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Ir(e,t,i,s)}}function ic(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ir._fromErrorAndOperation(n,r,e,i):r})}async function jg(n,e,t=!1){const i=await ys(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Mi._forOperation(n,"link",i)}/**
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
 */async function qg(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await ys(n,ic(i,s,e,n),t);Z(r.idToken,i,"internal-error");const o=Ta(r.idToken);Z(o,i,"internal-error");const{sub:a}=o;return Z(n.uid===a,i,"user-mismatch"),Mi._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Sn(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sc(n,e,t=!1){const i="signIn",s=await ic(n,i,e),r=await Mi._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function zg(n,e){return sc(Is(n),e)}function CA(n,e,t,i){return gn(n).onAuthStateChanged(e,t,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(n,e){return Gn(n,"POST","/v2/accounts/mfaEnrollment:start",li(n,e))}const Er="__sak";/**
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
 */class rc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Er,"1"),this.storage.removeItem(Er),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(){const n=St();return ba(n)||_r(n)}const Kg=1e3,xg=10;class oc extends rc{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Wg()&&Ng(),this.fallbackToPolling=Zu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);kg()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xg):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Kg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}oc.type="LOCAL";const Xg=oc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends rc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ac.type="SESSION";const lc=ac;/**
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
 */function Qg(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Tr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Tr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await Qg(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Yg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Sa("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return window}function Jg(n){It().location.href=n}/**
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
 */function Ca(){return typeof It().WorkerGlobalScope!="undefined"&&typeof It().importScripts=="function"}async function Zg(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $g(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ev(){return Ca()?self:null}/**
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
 */const uc="firebaseLocalStorageDb",tv=1,br="firebaseLocalStorage",cc="fbase_key";class bs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ar(n,e){return n.transaction([br],e?"readwrite":"readonly").objectStore(br)}function nv(){const n=indexedDB.deleteDatabase(uc);return new bs(n).toPromise()}function wa(){const n=indexedDB.open(uc,tv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(br,{keyPath:cc})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(br)?e(i):(i.close(),await nv(),e(await wa()))})})}async function hc(n,e,t){const i=Ar(n,!0).put({[cc]:e,value:t});return new bs(i).toPromise()}async function iv(n,e){const t=Ar(n,!1).get(e),i=await new bs(t).toPromise();return i===void 0?null:i.value}function dc(n,e){const t=Ar(n,!0).delete(e);return new bs(t).toPromise()}const sv=800,rv=3;class fc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>rv)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ca()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tr._getInstance(ev()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Zg(),!this.activeServiceWorker)return;this.sender=new Yg(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$g()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wa();return await hc(e,Er,"1"),await dc(e,Er),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>hc(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>iv(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Ar(s,!1).getAll();return new bs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fc.type="LOCAL";const ov=fc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(n,e){return Gn(n,"POST","/v2/accounts/mfaSignIn:start",li(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(n){return(await Gn(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function mc(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=sn("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",uv().appendChild(i)})}function pc(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=500,hv=6e4,Sr=1e12;class dv{constructor(e){this.auth=e,this.counter=Sr,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new fv(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;const i=e||Sr;(t=this._widgets.get(i))===null||t===void 0||t.delete(),this._widgets.delete(i)}getResponse(e){var t;const i=e||Sr;return((t=this._widgets.get(i))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const i=e||Sr;return(t=this._widgets.get(i))===null||t===void 0||t.execute(),""}}class fv{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;Z(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=mv(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},hv)},cv))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function mv(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<n;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=pc("rcb"),pv=new gs(3e4,6e4),gv="https://www.google.com/recaptcha/api.js?";class vv{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!It().grecaptcha}load(e,t=""){return Z(yv(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(It().grecaptcha):new Promise((i,s)=>{const r=It().setTimeout(()=>{s(sn(e,"network-request-failed"))},pv.get());It()[Ra]=()=>{It().clearTimeout(r),delete It()[Ra];const a=It().grecaptcha;if(!a){s(sn(e,"internal-error"));return}const l=a.render;a.render=(c,u)=>{const h=l(c,u);return this.counter++,h},this.hostLanguage=t,i(a)};const o=`${gv}?${Oi({onload:Ra,render:"explicit",hl:t})}`;mc(o).catch(()=>{clearTimeout(r),s(sn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!It().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function yv(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class _v{async load(e){return new dv(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="recaptcha",Iv={theme:"light",type:"image"};class wA{constructor(e,t=Object.assign({},Iv),i){this.parameters=t,this.type=gc,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Is(i),this.isInvisible=this.parameters.size==="invisible",Z(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const s=typeof e=="string"?document.getElementById(e):e;Z(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new _v:new vv,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(s=>{const r=o=>{!o||(this.tokenChangeListeners.delete(r),s(o))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){Z(!this.parameters.sitekey,this.auth,"argument-error"),Z(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),Z(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=It()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){Z(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){Z(Vu()&&!Ca(),this.auth,"internal-error"),await Ev(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await lv(this.auth);Z(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return Z(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Ev(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Es._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function RA(n,e,t){const i=Is(n),s=await bv(i,e,gn(t));return new Tv(s,r=>zg(i,r))}async function bv(n,e,t){var i;const s=await t.verify();try{Z(typeof s=="string",n,"argument-error"),Z(t.type===gc,n,"argument-error");let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const o=r.session;if("phoneNumber"in r)return Z(o.type==="enroll",n,"internal-error"),(await Gg(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{Z(o.type==="signin",n,"internal-error");const a=((i=r.multiFactorHint)===null||i===void 0?void 0:i.uid)||r.multiFactorUid;return Z(a,n,"missing-multi-factor-info"),(await av(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Fg(n,{phoneNumber:r.phoneNumber,recaptchaToken:s});return o}}finally{t._reset()}}/**
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
 */function Av(n,e){return e?Rn(e):(Z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class La extends Aa{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Ni(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ni(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Sv(n){return sc(n.auth,new La(n),n.bypassAuthState)}function Cv(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),qg(t,new La(n),n.bypassAuthState)}async function wv(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),jg(t,new La(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sv;case"linkViaPopup":case"linkViaRedirect":return wv;case"reauthViaPopup":case"reauthViaRedirect":return Cv;default:Sn(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=new gs(2e3,1e4);class Pi extends vc{constructor(e,t,i,s,r){super(e,t,s,r);this.provider=i,this.authWindow=null,this.pollId=null,Pi.currentPopupAction&&Pi.currentPopupAction.cancel(),Pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Sa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Rv.get())};e()}}Pi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="pendingRedirect",Oa=new Map;class Ov extends vc{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i);this.eventId=null}async execute(){let e=Oa.get(this.auth._key());if(!e){try{const i=await Dv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Oa.set(this.auth._key(),e)}return this.bypassAuthState||Oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dv(n,e){const t=Nv(e),i=kv(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function kv(n){return Rn(n._redirectPersistence)}function Nv(n){return yr(Lv,n.config.apiKey,n.name)}async function Mv(n,e,t=!1){const i=Is(n),s=Av(i,e),o=await new Ov(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=10*60*1e3;class Fv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Uv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!_c(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(sn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pv&&this.cachedEventUids.clear(),this.cachedEventUids.has(yc(e))}saveEventToCache(e){this.cachedEventUids.add(yc(e)),this.lastProcessedEventTime=Date.now()}}function yc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function _c({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Uv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _c(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vv(n,e={}){return Gn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bv=/^https?/;async function jv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Vv(n);for(const t of e)try{if(qv(t))return}catch{}Sn(n,"unauthorized-domain")}function qv(n){const e=ya(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Bv.test(t))return!1;if(Hv.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const zv=new gs(3e4,6e4);function Ic(){const n=It().___jsl;if(n==null?void 0:n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Gv(n){return new Promise((e,t)=>{var i,s,r;function o(){Ic(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ic(),t(sn(n,"network-request-failed"))},timeout:zv.get()})}if((s=(i=It().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((r=It().gapi)===null||r===void 0?void 0:r.load)o();else{const a=pc("iframefcb");return It()[a]=()=>{gapi.load?o():t(sn(n,"network-request-failed"))},mc(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Cr=null,e})}let Cr=null;function Wv(n){return Cr=Cr||Gv(n),Cr}/**
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
 */const Kv=new gs(5e3,15e3),xv="__/auth/iframe",Xv="emulator/auth/iframe",Qv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jv(n){const e=n.config;Z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?_a(e,Xv):`https://${n.config.authDomain}/${xv}`,i={apiKey:e.apiKey,appName:n.name,v:ps},s=Yv.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Oi(i).slice(1)}`}async function Zv(n){const e=await Wv(n),t=It().gapi;return Z(t,n,"internal-error"),e.open({where:document.body,url:Jv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qv,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=sn(n,"network-request-failed"),a=It().setTimeout(()=>{r(o)},Kv.get());function l(){It().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const $v={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ey=500,ty=600,ny="_blank",iy="http://localhost";class Ec{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sy(n,e,t,i=ey,s=ty){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},$v),{width:i.toString(),height:s.toString(),top:r,left:o}),c=St().toLowerCase();t&&(a=xu(c)?ny:t),Ku(c)&&(e=e||iy,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(Dg(c)&&a!=="_self")return ry(e||"",a),new Ec(null);const h=window.open(e||"",a,u);Z(h,n,"popup-blocked");try{h.focus()}catch{}return new Ec(h)}function ry(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const oy="__/auth/handler",ay="emulator/auth/handler";function Tc(n,e,t,i,s,r){Z(n.config.authDomain,n,"auth-domain-config-required"),Z(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ps,eventId:s};if(e instanceof tc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ip(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Ts){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${ly(n)}?${Oi(a).slice(1)}`}function ly({config:n}){return n.emulator?_a(n,ay):`https://${n.authDomain}/${oy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da="webStorageSupport";class uy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lc,this._completeRedirectFn=Mv}async _openPopup(e,t,i,s){var r;wn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Tc(e,t,i,ya(),s);return sy(e,o,Sa())}async _openRedirect(e,t,i,s){return await this._originValidation(e),Jg(Tc(e,t,i,ya(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(wn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i}async initAndGetManager(e){const t=await Zv(e),i=new Fv(e);return t.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Da,{type:Da},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Da];o!==void 0&&t(!!o),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Zu()||ba()||_r()}}const cy=uy;var bc="@firebase/auth",Ac="0.19.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fy(n){ms(new Di("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:r}=i.options;return(o=>{Z(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),Z(!(r==null?void 0:r.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:r,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$u(n)},l=new Mg(o,a);return pg(l,t),l})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ms(new Di("auth-internal",e=>{const t=Is(e.getProvider("auth").getImmediate());return(i=>new hy(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(bc,Ac,dy(n)),zn(bc,Ac,"esm2017")}/**
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
 */function LA(n=Nu()){const e=ma(n,"auth");return e.isInitialized()?e.getImmediate():mg(n,{popupRedirectResolver:cy,persistence:[ov,Xg,lc]})}fy("Browser");var my=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},X,ka=ka||{},fe=my||self;function wr(){}function Na(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function As(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function py(n){return Object.prototype.hasOwnProperty.call(n,Ma)&&n[Ma]||(n[Ma]=++gy)}var Ma="closure_uid_"+(1e9*Math.random()>>>0),gy=0;function vy(n,e,t){return n.call.apply(n.bind,arguments)}function yy(n,e,t){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function Ot(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ot=vy:Ot=yy,Ot.apply(null,arguments)}function Rr(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var i=t.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function Dt(n,e){function t(){}t.prototype=e.prototype,n.Z=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Vb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Yn(){this.s=this.s,this.o=this.o}var _y=0,Iy={};Yn.prototype.s=!1;Yn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),_y!=0)){var n=py(this);delete Iy[n]}};Yn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Sc=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1},Cc=Array.prototype.forEach?function(n,e,t){Array.prototype.forEach.call(n,e,t)}:function(n,e,t){const i=n.length,s=typeof n=="string"?n.split(""):n;for(let r=0;r<i;r++)r in s&&e.call(t,s[r],r,n)};function Ey(n){e:{var e=d_;const t=n.length,i=typeof n=="string"?n.split(""):n;for(let s=0;s<t;s++)if(s in i&&e.call(void 0,i[s],s,n)){e=s;break e}e=-1}return 0>e?null:typeof n=="string"?n.charAt(e):n[e]}function wc(n){return Array.prototype.concat.apply([],arguments)}function Pa(n){const e=n.length;if(0<e){const t=Array(e);for(let i=0;i<e;i++)t[i]=n[i];return t}return[]}function Lr(n){return/^[\s\xa0]*$/.test(n)}var Rc=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function zt(n,e){return n.indexOf(e)!=-1}function Fa(n,e){return n<e?-1:n>e?1:0}var Gt;e:{var Lc=fe.navigator;if(Lc){var Oc=Lc.userAgent;if(Oc){Gt=Oc;break e}}Gt=""}function Ua(n,e,t){for(const i in n)e.call(t,n[i],i,n)}function Dc(n){const e={};for(const t in n)e[t]=n[t];return e}var kc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nc(n,e){let t,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(t in i)n[t]=i[t];for(let r=0;r<kc.length;r++)t=kc[r],Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}}function Va(n){return Va[" "](n),n}Va[" "]=wr;function Ty(n){var e=Sy;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var by=zt(Gt,"Opera"),Fi=zt(Gt,"Trident")||zt(Gt,"MSIE"),Mc=zt(Gt,"Edge"),Ha=Mc||Fi,Pc=zt(Gt,"Gecko")&&!(zt(Gt.toLowerCase(),"webkit")&&!zt(Gt,"Edge"))&&!(zt(Gt,"Trident")||zt(Gt,"MSIE"))&&!zt(Gt,"Edge"),Ay=zt(Gt.toLowerCase(),"webkit")&&!zt(Gt,"Edge");function Fc(){var n=fe.document;return n?n.documentMode:void 0}var Or;e:{var Ba="",ja=function(){var n=Gt;if(Pc)return/rv:([^\);]+)(\)|;)/.exec(n);if(Mc)return/Edge\/([\d\.]+)/.exec(n);if(Fi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Ay)return/WebKit\/(\S+)/.exec(n);if(by)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(ja&&(Ba=ja?ja[1]:""),Fi){var qa=Fc();if(qa!=null&&qa>parseFloat(Ba)){Or=String(qa);break e}}Or=Ba}var Sy={};function Cy(){return Ty(function(){let n=0;const e=Rc(String(Or)).split("."),t=Rc("9").split("."),i=Math.max(e.length,t.length);for(let o=0;n==0&&o<i;o++){var s=e[o]||"",r=t[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;n=Fa(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Fa(s[2].length==0,r[2].length==0)||Fa(s[2],r[2]),s=s[3],r=r[3]}while(n==0)}return 0<=n})}var za;if(fe.document&&Fi){var Uc=Fc();za=Uc||parseInt(Or,10)||void 0}else za=void 0;var wy=za,Ry=function(){if(!fe.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{fe.addEventListener("test",wr,e),fe.removeEventListener("test",wr,e)}catch{}return n}();function Vt(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Vt.prototype.h=function(){this.defaultPrevented=!0};function Ss(n,e){if(Vt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Pc){e:{try{Va(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Ly[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Ss.Z.h.call(this)}}Dt(Ss,Vt);var Ly={2:"touch",3:"pen",4:"mouse"};Ss.prototype.h=function(){Ss.Z.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Cs="closure_listenable_"+(1e6*Math.random()|0),Oy=0;function Dy(n,e,t,i,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!i,this.ia=s,this.key=++Oy,this.ca=this.fa=!1}function Dr(n){n.ca=!0,n.listener=null,n.proxy=null,n.src=null,n.ia=null}function kr(n){this.src=n,this.g={},this.h=0}kr.prototype.add=function(n,e,t,i,s){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=Wa(n,e,i,s);return-1<o?(e=n[o],t||(e.fa=!1)):(e=new Dy(e,this.src,r,!!i,s),e.fa=t,n.push(e)),e};function Ga(n,e){var t=e.type;if(t in n.g){var i=n.g[t],s=Sc(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Dr(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Wa(n,e,t,i){for(var s=0;s<n.length;++s){var r=n[s];if(!r.ca&&r.listener==e&&r.capture==!!t&&r.ia==i)return s}return-1}var Ka="closure_lm_"+(1e6*Math.random()|0),xa={};function Vc(n,e,t,i,s){if(i&&i.once)return Bc(n,e,t,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Vc(n,e[r],t,i,s);return null}return t=Ja(t),n&&n[Cs]?n.N(e,t,As(i)?!!i.capture:!!i,s):Hc(n,e,t,!1,i,s)}function Hc(n,e,t,i,s,r){if(!e)throw Error("Invalid event type");var o=As(s)?!!s.capture:!!s,a=Qa(n);if(a||(n[Ka]=a=new kr(n)),t=a.add(e,t,i,o,r),t.proxy)return t;if(i=ky(),t.proxy=i,i.src=n,i.listener=t,n.addEventListener)Ry||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),i,s);else if(n.attachEvent)n.attachEvent(qc(e.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return t}function ky(){function n(t){return e.call(n.src,n.listener,t)}var e=Ny;return n}function Bc(n,e,t,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Bc(n,e[r],t,i,s);return null}return t=Ja(t),n&&n[Cs]?n.O(e,t,As(i)?!!i.capture:!!i,s):Hc(n,e,t,!0,i,s)}function jc(n,e,t,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)jc(n,e[r],t,i,s);else i=As(i)?!!i.capture:!!i,t=Ja(t),n&&n[Cs]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=Wa(r,t,i,s),-1<t&&(Dr(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=Qa(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Wa(e,t,i,s)),(t=-1<n?e[n]:null)&&Xa(t))}function Xa(n){if(typeof n!="number"&&n&&!n.ca){var e=n.src;if(e&&e[Cs])Ga(e.i,n);else{var t=n.type,i=n.proxy;e.removeEventListener?e.removeEventListener(t,i,n.capture):e.detachEvent?e.detachEvent(qc(t),i):e.addListener&&e.removeListener&&e.removeListener(i),(t=Qa(e))?(Ga(t,n),t.h==0&&(t.src=null,e[Ka]=null)):Dr(n)}}}function qc(n){return n in xa?xa[n]:xa[n]="on"+n}function Ny(n,e){if(n.ca)n=!0;else{e=new Ss(e,this);var t=n.listener,i=n.ia||n.src;n.fa&&Xa(n),n=t.call(i,e)}return n}function Qa(n){return n=n[Ka],n instanceof kr?n:null}var Ya="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ja(n){return typeof n=="function"?n:(n[Ya]||(n[Ya]=function(e){return n.handleEvent(e)}),n[Ya])}function Ct(){Yn.call(this),this.i=new kr(this),this.P=this,this.I=null}Dt(Ct,Yn);Ct.prototype[Cs]=!0;Ct.prototype.removeEventListener=function(n,e,t,i){jc(this,n,e,t,i)};function kt(n,e){var t,i=n.I;if(i)for(t=[];i;i=i.I)t.push(i);if(n=n.P,i=e.type||e,typeof e=="string")e=new Vt(e,n);else if(e instanceof Vt)e.target=e.target||n;else{var s=e;e=new Vt(i,n),Nc(e,s)}if(s=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];s=Nr(o,i,!0,e)&&s}if(o=e.g=n,s=Nr(o,i,!0,e)&&s,s=Nr(o,i,!1,e)&&s,t)for(r=0;r<t.length;r++)o=e.g=t[r],s=Nr(o,i,!1,e)&&s}Ct.prototype.M=function(){if(Ct.Z.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],i=0;i<t.length;i++)Dr(t[i]);delete n.g[e],n.h--}}this.I=null};Ct.prototype.N=function(n,e,t,i){return this.i.add(String(n),e,!1,t,i)};Ct.prototype.O=function(n,e,t,i){return this.i.add(String(n),e,!0,t,i)};function Nr(n,e,t,i){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==t){var a=o.listener,l=o.ia||o.src;o.fa&&Ga(n.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Za=fe.JSON.stringify;function My(){var n=Gc;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Py{constructor(){this.h=this.g=null}add(e,t){const i=zc.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}}var zc=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new Fy,n=>n.reset());class Fy{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Uy(n){fe.setTimeout(()=>{throw n},0)}function $a(n,e){el||Vy(),tl||(el(),tl=!0),Gc.add(n,e)}var el;function Vy(){var n=fe.Promise.resolve(void 0);el=function(){n.then(Hy)}}var tl=!1,Gc=new Py;function Hy(){for(var n;n=My();){try{n.h.call(n.g)}catch(t){Uy(t)}var e=zc;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}tl=!1}function Mr(n,e){Ct.call(this),this.h=n||1,this.g=e||fe,this.j=Ot(this.kb,this),this.l=Date.now()}Dt(Mr,Ct);X=Mr.prototype;X.da=!1;X.S=null;X.kb=function(){if(this.da){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-n):(this.S&&(this.g.clearTimeout(this.S),this.S=null),kt(this,"tick"),this.da&&(nl(this),this.start()))}};X.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function nl(n){n.da=!1,n.S&&(n.g.clearTimeout(n.S),n.S=null)}X.M=function(){Mr.Z.M.call(this),nl(this),delete this.g};function il(n,e,t){if(typeof n=="function")t&&(n=Ot(n,t));else if(n&&typeof n.handleEvent=="function")n=Ot(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:fe.setTimeout(n,e||0)}function Wc(n){n.g=il(()=>{n.g=null,n.i&&(n.i=!1,Wc(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class By extends Yn{constructor(e,t){super();this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Wc(this)}M(){super.M(),this.g&&(fe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ws(n){Yn.call(this),this.h=n,this.g={}}Dt(ws,Yn);var Kc=[];function xc(n,e,t,i){Array.isArray(t)||(t&&(Kc[0]=t.toString()),t=Kc);for(var s=0;s<t.length;s++){var r=Vc(e,t[s],i||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function Xc(n){Ua(n.g,function(e,t){this.g.hasOwnProperty(t)&&Xa(e)},n),n.g={}}ws.prototype.M=function(){ws.Z.M.call(this),Xc(this)};ws.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Pr(){this.g=!0}Pr.prototype.Aa=function(){this.g=!1};function jy(n,e,t,i,s,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function qy(n,e,t,i,s,r,o){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+t+`
`+r+" "+o})}function Ui(n,e,t,i){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Gy(n,t)+(i?" "+i:"")})}function zy(n,e){n.info(function(){return"TIMEOUT: "+e})}Pr.prototype.info=function(){};function Gy(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var i=t[n];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Za(t)}catch{return e}}var hi={},Qc=null;function Fr(){return Qc=Qc||new Ct}hi.Ma="serverreachability";function Yc(n){Vt.call(this,hi.Ma,n)}Dt(Yc,Vt);function Rs(n){const e=Fr();kt(e,new Yc(e,n))}hi.STAT_EVENT="statevent";function Jc(n,e){Vt.call(this,hi.STAT_EVENT,n),this.stat=e}Dt(Jc,Vt);function Wt(n){const e=Fr();kt(e,new Jc(e,n))}hi.Na="timingevent";function Zc(n,e){Vt.call(this,hi.Na,n),this.size=e}Dt(Zc,Vt);function Ls(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return fe.setTimeout(function(){n()},e)}var Ur={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},$c={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function sl(){}sl.prototype.h=null;function eh(n){return n.h||(n.h=n.i())}function th(){}var Os={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function rl(){Vt.call(this,"d")}Dt(rl,Vt);function ol(){Vt.call(this,"c")}Dt(ol,Vt);var al;function Vr(){}Dt(Vr,sl);Vr.prototype.g=function(){return new XMLHttpRequest};Vr.prototype.i=function(){return{}};al=new Vr;function Ds(n,e,t,i){this.l=n,this.j=e,this.m=t,this.X=i||1,this.V=new ws(this),this.P=Wy,n=Ha?125:void 0,this.W=new Mr(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new nh}function nh(){this.i=null,this.g="",this.h=!1}var Wy=45e3,ll={},Hr={};X=Ds.prototype;X.setTimeout=function(n){this.P=n};function ul(n,e,t){n.K=1,n.v=Gr(Ln(e)),n.s=t,n.U=!0,ih(n,null)}function ih(n,e){n.F=Date.now(),ks(n),n.A=Ln(n.v);var t=n.A,i=n.X;Array.isArray(i)||(i=[String(i)]),dh(t.h,"t",i),n.C=0,t=n.l.H,n.h=new nh,n.g=Ph(n.l,t?e:null,!n.s),0<n.O&&(n.L=new By(Ot(n.Ia,n,n.g),n.O)),xc(n.V,n.g,"readystatechange",n.gb),e=n.H?Dc(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.s,e)):(n.u="GET",n.g.ea(n.A,n.u,null,e)),Rs(1),jy(n.j,n.u,n.A,n.m,n.X,n.s)}X.gb=function(n){n=n.target;const e=this.L;e&&On(n)==3?e.l():this.Ia(n)};X.Ia=function(n){try{if(n==this.g)e:{const u=On(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Ha||this.g&&(this.h.h||this.g.ga()||Ah(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Rs(3):Rs(2)),Br(this);var t=this.g.ba();this.N=t;t:if(sh(this)){var i=Ah(this.g);n="";var s=i.length,r=On(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){di(this),Ns(this);var o="";break t}this.h.i=new fe.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=t==200,qy(this.j,this.u,this.A,this.m,this.X,u,t),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Lr(a)){var c=a;break t}}c=null}if(t=c)Ui(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,cl(this,t);else{this.i=!1,this.o=3,Wt(12),di(this),Ns(this);break e}}this.U?(rh(this,u,o),Ha&&this.i&&u==3&&(xc(this.V,this.W,"tick",this.fb),this.W.start())):(Ui(this.j,this.m,o,null),cl(this,o)),u==4&&di(this),this.i&&!this.I&&(u==4?Dh(this.l,this):(this.i=!1,ks(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Wt(12)):(this.o=0,Wt(13)),di(this),Ns(this)}}}catch{}finally{}};function sh(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Ba:!1}function rh(n,e,t){let i=!0,s;for(;!n.I&&n.C<t.length;)if(s=Ky(n,t),s==Hr){e==4&&(n.o=4,Wt(14),i=!1),Ui(n.j,n.m,null,"[Incomplete Response]");break}else if(s==ll){n.o=4,Wt(15),Ui(n.j,n.m,t,"[Invalid Chunk]"),i=!1;break}else Ui(n.j,n.m,s,null),cl(n,s);sh(n)&&s!=Hr&&s!=ll&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Wt(16),i=!1),n.i=n.i&&i,i?0<t.length&&!n.aa&&(n.aa=!0,e=n.l,e.g==n&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+t.length),El(e),e.L=!0,Wt(11))):(Ui(n.j,n.m,t,"[Invalid Chunked Response]"),di(n),Ns(n))}X.fb=function(){if(this.g){var n=On(this.g),e=this.g.ga();this.C<e.length&&(Br(this),rh(this,n,e),this.i&&n!=4&&ks(this))}};function Ky(n,e){var t=n.C,i=e.indexOf(`
`,t);return i==-1?Hr:(t=Number(e.substring(t,i)),isNaN(t)?ll:(i+=1,i+t>e.length?Hr:(e=e.substr(i,t),n.C=i+t,e)))}X.cancel=function(){this.I=!0,di(this)};function ks(n){n.Y=Date.now()+n.P,oh(n,n.P)}function oh(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Ls(Ot(n.eb,n),e)}function Br(n){n.B&&(fe.clearTimeout(n.B),n.B=null)}X.eb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(zy(this.j,this.A),this.K!=2&&(Rs(3),Wt(17)),di(this),this.o=2,Ns(this)):oh(this,this.Y-n)};function Ns(n){n.l.G==0||n.I||Dh(n.l,n)}function di(n){Br(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,nl(n.W),Xc(n.V),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function cl(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||fl(t.i,n))){if(t.I=n.N,!n.J&&fl(t.i,n)&&t.G==3){try{var i=t.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0)e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Yr(t),Xr(t);else break e;Il(t),Wt(18)}else t.ta=s[1],0<t.ta-t.U&&37500>s[2]&&t.N&&t.A==0&&!t.v&&(t.v=Ls(Ot(t.ab,t),6e3));if(1>=ph(t.i)&&t.ka){try{t.ka()}catch{}t.ka=void 0}}else pi(t,11)}else if((n.J||t.g==n)&&Yr(t),!Lr(e))for(s=t.Ca.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(t.U=c[0],c=c[1],t.G==2)if(c[0]=="c"){t.J=c[1],t.la=c[2];const u=c[3];u!=null&&(t.ma=u,t.h.info("VER="+t.ma));const h=c[4];h!=null&&(t.za=h,t.h.info("SVER="+t.za));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,t.K=i,t.h.info("backChannelRequestTimeoutMs_="+i)),i=t;const f=n.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=i.i;!r.g&&(zt(m,"spdy")||zt(m,"quic")||zt(m,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(ml(r,r.h),r.h=null))}if(i.D){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(i.sa=v,$e(i.F,i.D,v))}}t.G=3,t.j&&t.j.xa(),t.$&&(t.O=Date.now()-n.F,t.h.info("Handshake RTT: "+t.O+"ms")),i=t;var o=n;if(i.oa=Mh(i,i.H?i.la:null,i.W),o.J){gh(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(Br(a),ks(a)),i.g=o}else Lh(i);0<t.l.length&&Qr(t)}else c[0]!="stop"&&c[0]!="close"||pi(t,7);else t.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?pi(t,7):yl(t):c[0]!="noop"&&t.j&&t.j.wa(c),t.A=0)}}Rs(4)}catch{}}function xy(n){if(n.R&&typeof n.R=="function")return n.R();if(typeof n=="string")return n.split("");if(Na(n)){for(var e=[],t=n.length,i=0;i<t;i++)e.push(n[i]);return e}e=[],t=0;for(i in n)e[t++]=n[i];return e}function hl(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Na(n)||typeof n=="string")Cc(n,e,void 0);else{if(n.T&&typeof n.T=="function")var t=n.T();else if(n.R&&typeof n.R=="function")t=void 0;else if(Na(n)||typeof n=="string"){t=[];for(var i=n.length,s=0;s<i;s++)t.push(s)}else for(s in t=[],i=0,n)t[i++]=s;i=xy(n),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],t&&t[r],n)}}function Vi(n,e){this.h={},this.g=[],this.i=0;var t=arguments.length;if(1<t){if(t%2)throw Error("Uneven number of arguments");for(var i=0;i<t;i+=2)this.set(arguments[i],arguments[i+1])}else if(n)if(n instanceof Vi)for(t=n.T(),i=0;i<t.length;i++)this.set(t[i],n.get(t[i]));else for(i in n)this.set(i,n[i])}X=Vi.prototype;X.R=function(){dl(this);for(var n=[],e=0;e<this.g.length;e++)n.push(this.h[this.g[e]]);return n};X.T=function(){return dl(this),this.g.concat()};function dl(n){if(n.i!=n.g.length){for(var e=0,t=0;e<n.g.length;){var i=n.g[e];fi(n.h,i)&&(n.g[t++]=i),e++}n.g.length=t}if(n.i!=n.g.length){var s={};for(t=e=0;e<n.g.length;)i=n.g[e],fi(s,i)||(n.g[t++]=i,s[i]=1),e++;n.g.length=t}}X.get=function(n,e){return fi(this.h,n)?this.h[n]:e};X.set=function(n,e){fi(this.h,n)||(this.i++,this.g.push(n)),this.h[n]=e};X.forEach=function(n,e){for(var t=this.T(),i=0;i<t.length;i++){var s=t[i],r=this.get(s);n.call(e,r,s,this)}};function fi(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var ah=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Xy(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var i=n[t].indexOf("="),s=null;if(0<=i){var r=n[t].substring(0,i);s=n[t].substring(i+1)}else r=n[t];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function mi(n,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,n instanceof mi){this.g=e!==void 0?e:n.g,jr(this,n.j),this.s=n.s,qr(this,n.i),zr(this,n.m),this.l=n.l,e=n.h;var t=new Fs;t.i=e.i,e.g&&(t.g=new Vi(e.g),t.h=e.h),lh(this,t),this.o=n.o}else n&&(t=String(n).match(ah))?(this.g=!!e,jr(this,t[1]||"",!0),this.s=Ms(t[2]||""),qr(this,t[3]||"",!0),zr(this,t[4]),this.l=Ms(t[5]||"",!0),lh(this,t[6]||"",!0),this.o=Ms(t[7]||"")):(this.g=!!e,this.h=new Fs(null,this.g))}mi.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Ps(e,uh,!0),":");var t=this.i;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Ps(e,uh,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.i&&t.charAt(0)!="/"&&n.push("/"),n.push(Ps(t,t.charAt(0)=="/"?$y:Zy,!0))),(t=this.h.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Ps(t,t_)),n.join("")};function Ln(n){return new mi(n)}function jr(n,e,t){n.j=t?Ms(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function qr(n,e,t){n.i=t?Ms(e,!0):e}function zr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function lh(n,e,t){e instanceof Fs?(n.h=e,n_(n.h,n.g)):(t||(e=Ps(e,e_)),n.h=new Fs(e,n.g))}function $e(n,e,t){n.h.set(e,t)}function Gr(n){return $e(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Qy(n){return n instanceof mi?Ln(n):new mi(n,void 0)}function Yy(n,e,t,i){var s=new mi(null,void 0);return n&&jr(s,n),e&&qr(s,e),t&&zr(s,t),i&&(s.l=i),s}function Ms(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ps(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,Jy),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Jy(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var uh=/[#\/\?@]/g,Zy=/[#\?:]/g,$y=/[#\?]/g,e_=/[#\?@]/g,t_=/#/g;function Fs(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Jn(n){n.g||(n.g=new Vi,n.h=0,n.i&&Xy(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}X=Fs.prototype;X.add=function(n,e){Jn(this),this.i=null,n=Hi(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function ch(n,e){Jn(n),e=Hi(n,e),fi(n.g.h,e)&&(n.i=null,n.h-=n.g.get(e).length,n=n.g,fi(n.h,e)&&(delete n.h[e],n.i--,n.g.length>2*n.i&&dl(n)))}function hh(n,e){return Jn(n),e=Hi(n,e),fi(n.g.h,e)}X.forEach=function(n,e){Jn(this),this.g.forEach(function(t,i){Cc(t,function(s){n.call(e,s,i,this)},this)},this)};X.T=function(){Jn(this);for(var n=this.g.R(),e=this.g.T(),t=[],i=0;i<e.length;i++)for(var s=n[i],r=0;r<s.length;r++)t.push(e[i]);return t};X.R=function(n){Jn(this);var e=[];if(typeof n=="string")hh(this,n)&&(e=wc(e,this.g.get(Hi(this,n))));else{n=this.g.R();for(var t=0;t<n.length;t++)e=wc(e,n[t])}return e};X.set=function(n,e){return Jn(this),this.i=null,n=Hi(this,n),hh(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};X.get=function(n,e){return n?(n=this.R(n),0<n.length?String(n[0]):e):e};function dh(n,e,t){ch(n,e),0<t.length&&(n.i=null,n.g.set(Hi(n,e),Pa(t)),n.h+=t.length)}X.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var n=[],e=this.g.T(),t=0;t<e.length;t++){var i=e[t],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;i[r]!==""&&(o+="="+encodeURIComponent(String(i[r]))),n.push(o)}}return this.i=n.join("&")};function Hi(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function n_(n,e){e&&!n.j&&(Jn(n),n.i=null,n.g.forEach(function(t,i){var s=i.toLowerCase();i!=s&&(ch(this,i),dh(this,s,t))},n)),n.j=e}var i_=class{constructor(n,e){this.h=n,this.g=e}};function fh(n){this.l=n||s_,fe.PerformanceNavigationTiming?(n=fe.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(fe.g&&fe.g.Ea&&fe.g.Ea()&&fe.g.Ea().Zb),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var s_=10;function mh(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function ph(n){return n.h?1:n.g?n.g.size:0}function fl(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function ml(n,e){n.g?n.g.add(e):n.h=e}function gh(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}fh.prototype.cancel=function(){if(this.i=vh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function vh(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return Pa(n.i)}function pl(){}pl.prototype.stringify=function(n){return fe.JSON.stringify(n,void 0)};pl.prototype.parse=function(n){return fe.JSON.parse(n,void 0)};function r_(){this.g=new pl}function o_(n,e,t){const i=t||"";try{hl(n,function(s,r){let o=s;As(s)&&(o=Za(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function a_(n,e){const t=new Pr;if(fe.Image){const i=new Image;i.onload=Rr(Wr,t,i,"TestLoadImage: loaded",!0,e),i.onerror=Rr(Wr,t,i,"TestLoadImage: error",!1,e),i.onabort=Rr(Wr,t,i,"TestLoadImage: abort",!1,e),i.ontimeout=Rr(Wr,t,i,"TestLoadImage: timeout",!1,e),fe.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else e(!1)}function Wr(n,e,t,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Us(n){this.l=n.$b||null,this.j=n.ib||!1}Dt(Us,sl);Us.prototype.g=function(){return new Kr(this.l,this.j)};Us.prototype.i=function(n){return function(){return n}}({});function Kr(n,e){Ct.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=gl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Dt(Kr,Ct);var gl=0;X=Kr.prototype;X.open=function(n,e){if(this.readyState!=gl)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Hs(this)};X.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||fe).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};X.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=gl};X.Va=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof fe.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yh(this)}else n.text().then(this.Ua.bind(this),this.ha.bind(this))};function yh(n){n.j.read().then(n.Sa.bind(n)).catch(n.ha.bind(n))}X.Sa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Vs(this):Hs(this),this.readyState==3&&yh(this)}};X.Ua=function(n){this.g&&(this.response=this.responseText=n,Vs(this))};X.Ta=function(n){this.g&&(this.response=n,Vs(this))};X.ha=function(){this.g&&Vs(this)};function Vs(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Hs(n)}X.setRequestHeader=function(n,e){this.v.append(n,e)};X.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};X.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Hs(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Kr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var l_=fe.JSON.parse;function mt(n){Ct.call(this),this.headers=new Vi,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=_h,this.K=this.L=!1}Dt(mt,Ct);var _h="",u_=/^https?$/i,c_=["POST","PUT"];X=mt.prototype;X.ea=function(n,e,t,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():al.g(),this.C=this.u?eh(this.u):eh(al),this.g.onreadystatechange=Ot(this.Fa,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(r){Ih(this,r);return}n=t||"";const s=new Vi(this.headers);i&&hl(i,function(r,o){s.set(o,r)}),i=Ey(s.T()),t=fe.FormData&&n instanceof fe.FormData,!(0<=Sc(c_,e))||i||t||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{bh(this),0<this.B&&((this.K=h_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ot(this.pa,this)):this.A=il(this.pa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){Ih(this,r)}};function h_(n){return Fi&&Cy()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}function d_(n){return n.toLowerCase()=="content-type"}X.pa=function(){typeof ka!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kt(this,"timeout"),this.abort(8))};function Ih(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Eh(n),xr(n)}function Eh(n){n.D||(n.D=!0,kt(n,"complete"),kt(n,"error"))}X.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,kt(this,"complete"),kt(this,"abort"),xr(this))};X.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xr(this,!0)),mt.Z.M.call(this)};X.Fa=function(){this.s||(this.F||this.v||this.l?Th(this):this.cb())};X.cb=function(){Th(this)};function Th(n){if(n.h&&typeof ka!="undefined"&&(!n.C[1]||On(n)!=4||n.ba()!=2)){if(n.v&&On(n)==4)il(n.Fa,0,n);else if(kt(n,"readystatechange"),On(n)==4){n.h=!1;try{const a=n.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var i;if(i=a===0){var s=String(n.H).match(ah)[1]||null;if(!s&&fe.self&&fe.self.location){var r=fe.self.location.protocol;s=r.substr(0,r.length-1)}i=!u_.test(s?s.toLowerCase():"")}t=i}if(t)kt(n,"complete"),kt(n,"success");else{n.m=6;try{var o=2<On(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.ba()+"]",Eh(n)}}finally{xr(n)}}}}function xr(n,e){if(n.g){bh(n);const t=n.g,i=n.C[0]?wr:null;n.g=null,n.C=null,e||kt(n,"ready");try{t.onreadystatechange=i}catch{}}}function bh(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(fe.clearTimeout(n.A),n.A=null)}function On(n){return n.g?n.g.readyState:0}X.ba=function(){try{return 2<On(this)?this.g.status:-1}catch{return-1}};X.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};X.Qa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),l_(e)}};function Ah(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case _h:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}X.Da=function(){return this.m};X.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function f_(n){let e="";return Ua(n,function(t,i){e+=i,e+=":",e+=t,e+=`\r
`}),e}function vl(n,e,t){e:{for(i in t){var i=!1;break e}i=!0}i||(t=f_(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):$e(n,e,t))}function Bs(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Sh(n){this.za=0,this.l=[],this.h=new Pr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Bs("failFast",!1,n),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Bs("baseRetryDelayMs",5e3,n),this.$a=Bs("retryDelaySeedMs",1e4,n),this.Ya=Bs("forwardChannelMaxRetries",2,n),this.ra=Bs("forwardChannelRequestTimeoutMs",2e4,n),this.qa=n&&n.xmlHttpFactory||void 0,this.Ba=n&&n.Yb||!1,this.K=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.J="",this.i=new fh(n&&n.concurrentRequestLimit),this.Ca=new r_,this.ja=n&&n.fastHandshake||!1,this.Ra=n&&n.Wb||!1,n&&n.Aa&&this.h.Aa(),n&&n.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&n&&n.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!n||n.Xb!==!1}X=Sh.prototype;X.ma=8;X.G=1;function yl(n){if(Ch(n),n.G==3){var e=n.V++,t=Ln(n.F);$e(t,"SID",n.J),$e(t,"RID",e),$e(t,"TYPE","terminate"),js(n,t),e=new Ds(n,n.h,e,void 0),e.K=2,e.v=Gr(Ln(t)),t=!1,fe.navigator&&fe.navigator.sendBeacon&&(t=fe.navigator.sendBeacon(e.v.toString(),"")),!t&&fe.Image&&(new Image().src=e.v,t=!0),t||(e.g=Ph(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ks(e)}Nh(n)}X.hb=function(n){try{this.h.info("Origin Trials invoked: "+n)}catch{}};function Xr(n){n.g&&(El(n),n.g.cancel(),n.g=null)}function Ch(n){Xr(n),n.u&&(fe.clearTimeout(n.u),n.u=null),Yr(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&fe.clearTimeout(n.m),n.m=null)}function _l(n,e){n.l.push(new i_(n.Za++,e)),n.G==3&&Qr(n)}function Qr(n){mh(n.i)||n.m||(n.m=!0,$a(n.Ha,n),n.C=0)}function m_(n,e){return ph(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.l=e.D.concat(n.l),!0):n.G==1||n.G==2||n.C>=(n.Xa?0:n.Ya)?!1:(n.m=Ls(Ot(n.Ha,n,e),kh(n,n.C)),n.C++,!0)}X.Ha=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.V=Math.floor(1e5*Math.random()),n=this.V++;const s=new Ds(this,this.h,n,void 0);let r=this.s;if(this.P&&(r?(r=Dc(r),Nc(r,this.P)):r=this.P),this.o===null&&(s.H=r),this.ja)e:{for(var e=0,t=0;t<this.l.length;t++){t:{var i=this.l[t];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=t;break e}if(e===4096||t===this.l.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Rh(this,s,e),t=Ln(this.F),$e(t,"RID",n),$e(t,"CVER",22),this.D&&$e(t,"X-HTTP-Session-Id",this.D),js(this,t),this.o&&r&&vl(t,this.o,r),ml(this.i,s),this.Ra&&$e(t,"TYPE","init"),this.ja?($e(t,"$req",e),$e(t,"SID","null"),s.$=!0,ul(s,t,null)):ul(s,t,e),this.G=2}}else this.G==3&&(n?wh(this,n):this.l.length==0||mh(this.i)||wh(this))};function wh(n,e){var t;e?t=e.m:t=n.V++;const i=Ln(n.F);$e(i,"SID",n.J),$e(i,"RID",t),$e(i,"AID",n.U),js(n,i),n.o&&n.s&&vl(i,n.o,n.s),t=new Ds(n,n.h,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.l=e.D.concat(n.l)),e=Rh(n,t,1e3),t.setTimeout(Math.round(.5*n.ra)+Math.round(.5*n.ra*Math.random())),ml(n.i,t),ul(t,i,e)}function js(n,e){n.j&&hl({},function(t,i){$e(e,i,t)})}function Rh(n,e,t){t=Math.min(n.l.length,t);var i=n.j?Ot(n.j.Oa,n.j,n):null;e:{var s=n.l;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<t;l++){let c=s[l].h;const u=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{o_(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return n=n.l.splice(0,t),e.D=n,i}function Lh(n){n.g||n.u||(n.Y=1,$a(n.Ga,n),n.A=0)}function Il(n){return n.g||n.u||3<=n.A?!1:(n.Y++,n.u=Ls(Ot(n.Ga,n),kh(n,n.A)),n.A++,!0)}X.Ga=function(){if(this.u=null,Oh(this),this.$&&!(this.L||this.g==null||0>=this.O)){var n=2*this.O;this.h.info("BP detection timer enabled: "+n),this.B=Ls(Ot(this.bb,this),n)}};X.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Wt(10),Xr(this),Oh(this))};function El(n){n.B!=null&&(fe.clearTimeout(n.B),n.B=null)}function Oh(n){n.g=new Ds(n,n.h,"rpc",n.Y),n.o===null&&(n.g.H=n.s),n.g.O=0;var e=Ln(n.oa);$e(e,"RID","rpc"),$e(e,"SID",n.J),$e(e,"CI",n.N?"0":"1"),$e(e,"AID",n.U),js(n,e),$e(e,"TYPE","xmlhttp"),n.o&&n.s&&vl(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.la,t.K=1,t.v=Gr(Ln(e)),t.s=null,t.U=!0,ih(t,n)}X.ab=function(){this.v!=null&&(this.v=null,Xr(this),Il(this),Wt(19))};function Yr(n){n.v!=null&&(fe.clearTimeout(n.v),n.v=null)}function Dh(n,e){var t=null;if(n.g==e){Yr(n),El(n),n.g=null;var i=2}else if(fl(n.i,e))t=e.D,gh(n.i,e),i=1;else return;if(n.I=e.N,n.G!=0){if(e.i)if(i==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var s=n.C;i=Fr(),kt(i,new Zc(i,t,e,s)),Qr(n)}else Lh(n);else if(s=e.o,s==3||s==0&&0<n.I||!(i==1&&m_(n,e)||i==2&&Il(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:pi(n,5);break;case 4:pi(n,10);break;case 3:pi(n,6);break;default:pi(n,2)}}}function kh(n,e){let t=n.Pa+Math.floor(Math.random()*n.$a);return n.j||(t*=2),t*e}function pi(n,e){if(n.h.info("Error code "+e),e==2){var t=null;n.j&&(t=null);var i=Ot(n.jb,n);t||(t=new mi("//www.google.com/images/cleardot.gif"),fe.location&&fe.location.protocol=="http"||jr(t,"https"),Gr(t)),a_(t.toString(),i)}else Wt(2);n.G=0,n.j&&n.j.va(e),Nh(n),Ch(n)}X.jb=function(n){n?(this.h.info("Successfully pinged google.com"),Wt(2)):(this.h.info("Failed to ping google.com"),Wt(1))};function Nh(n){n.G=0,n.I=-1,n.j&&((vh(n.i).length!=0||n.l.length!=0)&&(n.i.i.length=0,Pa(n.l),n.l.length=0),n.j.ua())}function Mh(n,e,t){let i=Qy(t);if(i.i!="")e&&qr(i,e+"."+i.i),zr(i,i.m);else{const s=fe.location;i=Yy(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,t)}return n.aa&&Ua(n.aa,function(s,r){$e(i,r,s)}),e=n.D,t=n.sa,e&&t&&$e(i,e,t),$e(i,"VER",n.ma),js(n,i),i}function Ph(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ba&&!n.qa?new mt(new Us({ib:!0})):new mt(n.qa),e.L=n.H,e}function Fh(){}X=Fh.prototype;X.xa=function(){};X.wa=function(){};X.va=function(){};X.ua=function(){};X.Oa=function(){};function Jr(){if(Fi&&!(10<=Number(wy)))throw Error("Environmental error: no available transport.")}Jr.prototype.g=function(n,e){return new rn(n,e)};function rn(n,e){Ct.call(this),this.g=new Sh(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.P=n,(n=e&&e.httpHeadersOverwriteParam)&&!Lr(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Lr(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Bi(this)}Dt(rn,Ct);rn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;n.Wa&&(n.h.info("Origin Trials enabled."),$a(Ot(n.hb,n,e))),Wt(0),n.W=e,n.aa=t||{},n.N=n.X,n.F=Mh(n,null,n.W),Qr(n)};rn.prototype.close=function(){yl(this.g)};rn.prototype.u=function(n){if(typeof n=="string"){var e={};e.__data__=n,_l(this.g,e)}else this.v?(e={},e.__data__=Za(n),_l(this.g,e)):_l(this.g,n)};rn.prototype.M=function(){this.g.j=null,delete this.j,yl(this.g),delete this.g,rn.Z.M.call(this)};function Uh(n){rl.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Dt(Uh,rl);function Vh(){ol.call(this),this.status=1}Dt(Vh,ol);function Bi(n){this.g=n}Dt(Bi,Fh);Bi.prototype.xa=function(){kt(this.g,"a")};Bi.prototype.wa=function(n){kt(this.g,new Uh(n))};Bi.prototype.va=function(n){kt(this.g,new Vh(n))};Bi.prototype.ua=function(){kt(this.g,"b")};Jr.prototype.createWebChannel=Jr.prototype.g;rn.prototype.send=rn.prototype.u;rn.prototype.open=rn.prototype.m;rn.prototype.close=rn.prototype.close;Ur.NO_ERROR=0;Ur.TIMEOUT=8;Ur.HTTP_ERROR=6;$c.COMPLETE="complete";th.EventType=Os;Os.OPEN="a";Os.CLOSE="b";Os.ERROR="c";Os.MESSAGE="d";Ct.prototype.listen=Ct.prototype.N;mt.prototype.listenOnce=mt.prototype.O;mt.prototype.getLastError=mt.prototype.La;mt.prototype.getLastErrorCode=mt.prototype.Da;mt.prototype.getStatus=mt.prototype.ba;mt.prototype.getResponseJson=mt.prototype.Qa;mt.prototype.getResponseText=mt.prototype.ga;mt.prototype.send=mt.prototype.ea;var p_=function(){return new Jr},g_=function(){return Fr()},Tl=Ur,v_=$c,y_=hi,Hh={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},__=Us,Zr=th,I_=mt;const Bh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Yt.UNAUTHENTICATED=new Yt(null),Yt.GOOGLE_CREDENTIALS=new Yt("google-credentials-uid"),Yt.FIRST_PARTY=new Yt("first-party-uid"),Yt.MOCK_USER=new Yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji="9.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new ca("@firebase/firestore");function jh(){return gi.logLevel}function le(n,...e){if(gi.logLevel<=Fe.DEBUG){const t=e.map(bl);gi.debug(`Firestore (${ji}): ${n}`,...t)}}function Zn(n,...e){if(gi.logLevel<=Fe.ERROR){const t=e.map(bl);gi.error(`Firestore (${ji}): ${n}`,...t)}}function qh(n,...e){if(gi.logLevel<=Fe.WARN){const t=e.map(bl);gi.warn(`Firestore (${ji}): ${n}`,...t)}}function bl(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function pe(n="Unexpected state"){const e=`FIRESTORE (${ji}) INTERNAL ASSERTION FAILED: `+n;throw Zn(e),new Error(e)}function Ye(n,e){n||pe()}function ge(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class T_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Yt.UNAUTHENTICATED))}shutdown(){}}class b_{constructor(e){this.t=e,this.currentUser=Yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{le("FirebaseCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(le("FirebaseCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Dn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(le("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ye(typeof i.accessToken=="string"),new E_(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string"),new Yt(e)}}class A_{constructor(e,t,i){this.h=e,this.l=t,this.m=i,this.type="FirstParty",this.user=Yt.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},t=this.h.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class S_{constructor(e,t,i){this.h=e,this.l=t,this.m=i}getToken(){return Promise.resolve(new A_(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(Yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class Al{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.g(i),this.p=i=>t.writeSequenceNumber(i))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Al.T=-1;class zh{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=C_(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%e.length))}return i}}function qe(n,e){return n<e?-1:n>e?1:0}function qi(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ue(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return on.fromMillis(Date.now())}static fromDate(e){return on.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new on(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?qe(this.nanoseconds,e.nanoseconds):qe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.timestamp=e}static fromTimestamp(e){return new He(e)}static min(){return new He(new on(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function zi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Wh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t,i){t===void 0?t=0:t>e.length&&pe(),i===void 0?i=e.length-t:i>e.length-t&&pe(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return qs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qs?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=e.get(s),o=t.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class rt extends qs{construct(e,t,i){return new rt(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ue(V.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new rt(t)}static emptyPath(){return new rt([])}}const w_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Jt extends qs{construct(e,t,i){return new Jt(e,t,i)}static isValidIdentifier(e){return w_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Jt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Jt(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new ue(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ue(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ue(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new ue(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Jt(t)}static emptyPath(){return new Jt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e){this.fields=e,e.sort(Jt.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qi(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Ht(t)}static fromUint8Array(e){const t=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new Ht(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return qe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ht.EMPTY_BYTE_STRING=new Ht("");const R_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $n(n){if(Ye(!!n),typeof n=="string"){let e=0;const t=R_.exec(n);if(Ye(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:pt(n.seconds),nanos:pt(n.nanos)}}function pt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Gi(n){return typeof n=="string"?Ht.fromBase64String(n):Ht.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function xh(n){const e=n.mapValue.fields.__previous_value__;return Kh(e)?xh(e):e}function zs(n){const e=$n(n.mapValue.fields.__local_write_time__.timestampValue);return new on(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(n){return n==null}function $r(n){return n===0&&1/n==-1/0}function L_(n){return typeof n=="number"&&Number.isInteger(n)&&!$r(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(rt.fromString(e))}static fromName(e){return new me(rt.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return rt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new rt(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Kh(n)?4:10:pe()}function _n(n,e){const t=vi(n);if(t!==vi(e))return!1;switch(t){case 0:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return zs(n).isEqual(zs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=$n(i.timestampValue),o=$n(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Gi(i.bytesValue).isEqual(Gi(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return pt(i.geoPointValue.latitude)===pt(s.geoPointValue.latitude)&&pt(i.geoPointValue.longitude)===pt(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return pt(i.integerValue)===pt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=pt(i.doubleValue),o=pt(s.doubleValue);return r===o?$r(r)===$r(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return qi(n.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(Gh(r)!==Gh(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!_n(r[a],o[a])))return!1;return!0}(n,e);default:return pe()}}function Gs(n,e){return(n.values||[]).find(t=>_n(t,e))!==void 0}function Ki(n,e){const t=vi(n),i=vi(e);if(t!==i)return qe(t,i);switch(t){case 0:return 0;case 1:return qe(n.booleanValue,e.booleanValue);case 2:return function(s,r){const o=pt(s.integerValue||s.doubleValue),a=pt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Xh(n.timestampValue,e.timestampValue);case 4:return Xh(zs(n),zs(e));case 5:return qe(n.stringValue,e.stringValue);case 6:return function(s,r){const o=Gi(s),a=Gi(r);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=qe(o[l],a[l]);if(c!==0)return c}return qe(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,r){const o=qe(pt(s.latitude),pt(r.latitude));return o!==0?o:qe(pt(s.longitude),pt(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Ki(o[l],a[l]);if(c)return c}return qe(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,r){const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=qe(a[u],c[u]);if(h!==0)return h;const d=Ki(o[a[u]],l[c[u]]);if(d!==0)return d}return qe(a.length,c.length)}(n.mapValue,e.mapValue);default:throw pe()}}function Xh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return qe(n,e);const t=$n(n),i=$n(e),s=qe(t.seconds,i.seconds);return s!==0?s:qe(t.nanos,i.nanos)}function Cl(n){return wl(n)}function wl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(i){const s=$n(i);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Gi(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,me.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=wl(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${wl(i.fields[a])}`;return r+"}"}(n.mapValue):pe();var e,t}function Rl(n){return!!n&&"integerValue"in n}function Ll(n){return!!n&&"arrayValue"in n}function Qh(n){return!!n&&"nullValue"in n}function Yh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function eo(n){return!!n&&"mapValue"in n}function Ws(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return zi(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ws(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ws(n.arrayValue.values[t]);return e}return Object.assign({},n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.value=e}static empty(){return new vn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!eo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ws(t)}setAll(e){let t=Jt.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=a.popLast()}o?i[a.lastSegment()]=Ws(o):s.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());eo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];eo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){zi(t,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new vn(Ws(this.value))}}function Jh(n){const e=[];return zi(n.fields,(t,i)=>{const s=new Jt([t]);if(eo(i)){const r=Jh(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Sl(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,i,s,r){this.key=e,this.documentType=t,this.version=i,this.data=s,this.documentState=r}static newInvalidDocument(e){return new Bt(e,0,He.min(),vn.empty(),0)}static newFoundDocument(e,t,i){return new Bt(e,1,t,i,0)}static newNoDocument(e,t){return new Bt(e,2,t,vn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,vn.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Bt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class O_{constructor(e,t=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.A=null}}function Zh(n,e=null,t=[],i=[],s=null,r=null,o=null){return new O_(n,e,t,i,s,r,o)}function Ol(n){const e=ge(n);if(e.A===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>k_(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Wi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=to(e.startAt)),e.endAt&&(t+="|ub:",t+=to(e.endAt)),e.A=t}return e.A}function D_(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(i=t).field.canonicalString()} ${i.op} ${Cl(i.value)}`;var i}).join(", ")}]`),Wi(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: "+to(n.startAt)),n.endAt&&(e+=", endAt: "+to(n.endAt)),`Target(${e})`}function Dl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<n.orderBy.length;s++)if(!B_(n.orderBy[s],e.orderBy[s]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let s=0;s<n.filters.length;s++)if(t=n.filters[s],i=e.filters[s],t.op!==i.op||!t.field.isEqual(i.field)||!_n(t.value,i.value))return!1;var t,i;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!td(n.startAt,e.startAt)&&td(n.endAt,e.endAt)}function kl(n){return me.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}class Zt extends class{}{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.R(e,t,i):new N_(e,t,i):t==="array-contains"?new F_(e,i):t==="in"?new U_(e,i):t==="not-in"?new V_(e,i):t==="array-contains-any"?new H_(e,i):new Zt(e,t,i)}static R(e,t,i){return t==="in"?new M_(e,i):new P_(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.P(Ki(t,this.value)):t!==null&&vi(this.value)===vi(t)&&this.P(Ki(t,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function k_(n){return n.field.canonicalString()+n.op.toString()+Cl(n.value)}class N_ extends Zt{constructor(e,t,i){super(e,t,i),this.key=me.fromName(i.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.P(t)}}class M_ extends Zt{constructor(e,t){super(e,"in",t),this.keys=$h("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class P_ extends Zt{constructor(e,t){super(e,"not-in",t),this.keys=$h("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function $h(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>me.fromName(i.referenceValue))}class F_ extends Zt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ll(t)&&Gs(t.arrayValue,this.value)}}class U_ extends Zt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Gs(this.value.arrayValue,t)}}class V_ extends Zt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Gs(this.value.arrayValue,t)}}class H_ extends Zt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ll(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Gs(this.value.arrayValue,i))}}class Nl{constructor(e,t){this.position=e,this.before=t}}function to(n){return`${n.before?"b":"a"}:${n.position.map(e=>Cl(e)).join(",")}`}class Ks{constructor(e,t="asc"){this.field=e,this.dir=t}}function B_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function ed(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=me.comparator(me.fromName(o.referenceValue),t.key):i=Ki(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return n.before?i<=0:i<0}function td(n,e){if(n===null)return e===null;if(e===null||n.before!==e.before||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!_n(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.V=null,this.S=null,this.startAt,this.endAt}}function j_(n,e,t,i,s,r,o,a){return new no(n,e,t,i,s,r,o,a)}function Ml(n){return new no(n)}function io(n){return!Wi(n.limit)&&n.limitType==="F"}function so(n){return!Wi(n.limit)&&n.limitType==="L"}function q_(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function z_(n){for(const e of n.filters)if(e.v())return e.field;return null}function G_(n){return n.collectionGroup!==null}function xs(n){const e=ge(n);if(e.V===null){e.V=[];const t=z_(e),i=q_(e);if(t!==null&&i===null)t.isKeyField()||e.V.push(new Ks(t)),e.V.push(new Ks(Jt.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.V.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Ks(Jt.keyField(),r))}}}return e.V}function yi(n){const e=ge(n);if(!e.S)if(e.limitType==="F")e.S=Zh(e.path,e.collectionGroup,xs(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of xs(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new Ks(r.field,o))}const i=e.endAt?new Nl(e.endAt.position,!e.endAt.before):null,s=e.startAt?new Nl(e.startAt.position,!e.startAt.before):null;e.S=Zh(e.path,e.collectionGroup,t,e.filters,e.limit,i,s)}return e.S}function W_(n,e,t){return new no(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ro(n,e){return Dl(yi(n),yi(e))&&n.limitType===e.limitType}function nd(n){return`${Ol(yi(n))}|lt:${n.limitType}`}function Pl(n){return`Query(target=${D_(yi(n))}; limitType=${n.limitType})`}function oo(n,e){return e.isFoundDocument()&&function(t,i){const s=i.key.path;return t.collectionGroup!==null?i.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):me.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,i){for(const s of t.explicitOrderBy)if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,i){for(const s of t.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(t,i){return!(t.startAt&&!ed(t.startAt,xs(t),i)||t.endAt&&ed(t.endAt,xs(t),i))}(n,e)}function id(n){return(e,t)=>{let i=!1;for(const s of xs(n)){const r=K_(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function K_(n,e,t){const i=n.field.isKeyField()?me.comparator(e.key,t.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Ki(a,l):pe()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return pe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(n,e){if(n.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$r(e)?"-0":e}}function rd(n){return{integerValue:""+n}}function x_(n,e){return L_(e)?rd(e):sd(n,e)}/**
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
 */class ao{constructor(){this._=void 0}}function X_(n,e,t){return n instanceof lo?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(t,e):n instanceof Xs?ad(n,e):n instanceof Qs?ld(n,e):function(i,s){const r=od(i,s),o=ud(r)+ud(i.C);return Rl(r)&&Rl(i.C)?rd(o):sd(i.N,o)}(n,e)}function Q_(n,e,t){return n instanceof Xs?ad(n,e):n instanceof Qs?ld(n,e):t}function od(n,e){return n instanceof uo?Rl(t=e)||function(i){return!!i&&"doubleValue"in i}(t)?e:{integerValue:0}:null;var t}class lo extends ao{}class Xs extends ao{constructor(e){super(),this.elements=e}}function ad(n,e){const t=cd(e);for(const i of n.elements)t.some(s=>_n(s,i))||t.push(i);return{arrayValue:{values:t}}}class Qs extends ao{constructor(e){super(),this.elements=e}}function ld(n,e){let t=cd(e);for(const i of n.elements)t=t.filter(s=>!_n(s,i));return{arrayValue:{values:t}}}class uo extends ao{constructor(e,t){super(),this.N=e,this.C=t}}function ud(n){return pt(n.integerValue||n.doubleValue)}function cd(n){return Ll(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Y_(n,e){return n.field.isEqual(e.field)&&function(t,i){return t instanceof Xs&&i instanceof Xs||t instanceof Qs&&i instanceof Qs?qi(t.elements,i.elements,_n):t instanceof uo&&i instanceof uo?_n(t.C,i.C):t instanceof lo&&i instanceof lo}(n.transform,e.transform)}class J_{constructor(e,t){this.version=e,this.transformResults=t}}class xi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xi}static exists(e){return new xi(void 0,e)}static updateTime(e){return new xi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function co(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ho{}function Z_(n,e,t){n instanceof fo?function(i,s,r){const o=i.value.clone(),a=md(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Xi?function(i,s,r){if(!co(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=md(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(fd(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function Fl(n,e,t){n instanceof fo?function(i,s,r){if(!co(i.precondition,s))return;const o=i.value.clone(),a=pd(i.fieldTransforms,r,s);o.setAll(a),s.convertToFoundDocument(dd(s),o).setHasLocalMutations()}(n,e,t):n instanceof Xi?function(i,s,r){if(!co(i.precondition,s))return;const o=pd(i.fieldTransforms,r,s),a=s.data;a.setAll(fd(i)),a.setAll(o),s.convertToFoundDocument(dd(s),a).setHasLocalMutations()}(n,e,t):function(i,s){co(i.precondition,s)&&s.convertToNoDocument(He.min())}(n,e)}function $_(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=od(i.transform,s||null);r!=null&&(t==null&&(t=vn.empty()),t.set(i.field,r))}return t||null}function hd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,i){return t===void 0&&i===void 0||!(!t||!i)&&qi(t,i,(s,r)=>Y_(s,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}function dd(n){return n.isFoundDocument()?n.version:He.min()}class fo extends ho{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}}class Xi extends ho{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}}function fd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function md(n,e,t){const i=new Map;Ye(n.length===t.length);for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,Q_(o,a,t[s]))}return i}function pd(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,X_(r,o,e))}return i}class eI extends ho{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class tI extends ho{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt,Re;function iI(n){switch(n){default:return pe();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function gd(n){if(n===void 0)return Zn("GRPC error has no .code"),V.UNKNOWN;switch(n){case gt.OK:return V.OK;case gt.CANCELLED:return V.CANCELLED;case gt.UNKNOWN:return V.UNKNOWN;case gt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case gt.INTERNAL:return V.INTERNAL;case gt.UNAVAILABLE:return V.UNAVAILABLE;case gt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case gt.NOT_FOUND:return V.NOT_FOUND;case gt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case gt.ABORTED:return V.ABORTED;case gt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case gt.DATA_LOSS:return V.DATA_LOSS;default:return pe()}}(Re=gt||(gt={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new jt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new jt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mo(this.root,e,this.comparator,!0)}}class mo{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:Nt.RED,this.left=s!=null?s:Nt.EMPTY,this.right=r!=null?r:Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new Nt(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Nt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(n,e,t,i,s){return this}insert(n,e,t){return new Nt(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.comparator=e,this.data=new jt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vd(this.data.getIterator())}getIteratorFrom(e){return new vd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Mt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Mt(this.comparator);return t.data=e,t}}class vd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=new jt(me.comparator);function _i(){return sI}const rI=new jt(me.comparator);function Ul(){return rI}const oI=new jt(me.comparator);function aI(){return oI}const lI=new Mt(me.comparator);function Ze(...n){let e=lI;for(const t of n)e=e.add(t);return e}const uI=new Mt(qe);function yd(){return uI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t){const i=new Map;return i.set(e,Ys.createSynthesizedTargetChangeForCurrentChange(e,t)),new po(He.min(),i,yd(),_i(),Ze())}}class Ys{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Ys(Ht.EMPTY_BYTE_STRING,t,Ze(),Ze(),Ze())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t,i,s){this.k=e,this.removedTargetIds=t,this.key=i,this.$=s}}class _d{constructor(e,t){this.targetId=e,this.O=t}}class Id{constructor(e,t,i=Ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Ed{constructor(){this.F=0,this.M=bd(),this.L=Ht.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=Ze(),t=Ze(),i=Ze();return this.M.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:pe()}}),new Ys(this.L,this.B,e,t,i)}G(){this.U=!1,this.M=bd()}H(e,t){this.U=!0,this.M=this.M.insert(e,t)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class cI{constructor(e){this.tt=e,this.et=new Map,this.nt=_i(),this.st=Td(),this.it=new Mt(qe)}rt(e){for(const t of e.k)e.$&&e.$.isFoundDocument()?this.ot(t,e.$):this.ct(t,e.key,e.$);for(const t of e.removedTargetIds)this.ct(t,e.key,e.$)}at(e){this.forEachTarget(e,t=>{const i=this.ut(t);switch(e.state){case 0:this.ht(t)&&i.j(e.resumeToken);break;case 1:i.X(),i.q||i.G(),i.j(e.resumeToken);break;case 2:i.X(),i.q||this.removeTarget(t);break;case 3:this.ht(t)&&(i.Z(),i.j(e.resumeToken));break;case 4:this.ht(t)&&(this.lt(t),i.j(e.resumeToken));break;default:pe()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.et.forEach((i,s)=>{this.ht(s)&&t(s)})}ft(e){const t=e.targetId,i=e.O.count,s=this.dt(t);if(s){const r=s.target;if(kl(r))if(i===0){const o=new me(r.path);this.ct(t,o,Bt.newNoDocument(o,He.min()))}else Ye(i===1);else this.wt(t)!==i&&(this.lt(t),this.it=this.it.add(t))}}_t(e){const t=new Map;this.et.forEach((r,o)=>{const a=this.dt(o);if(a){if(r.current&&kl(a.target)){const l=new me(a.target.path);this.nt.get(l)!==null||this.gt(o,l)||this.ct(o,l,Bt.newNoDocument(l,e))}r.K&&(t.set(o,r.W()),r.G())}});let i=Ze();this.st.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.dt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))});const s=new po(e,t,this.it,this.nt,i);return this.nt=_i(),this.st=Td(),this.it=new Mt(qe),s}ot(e,t){if(!this.ht(e))return;const i=this.gt(e,t.key)?2:0;this.ut(e).H(t.key,i),this.nt=this.nt.insert(t.key,t),this.st=this.st.insert(t.key,this.yt(t.key).add(e))}ct(e,t,i){if(!this.ht(e))return;const s=this.ut(e);this.gt(e,t)?s.H(t,1):s.J(t),this.st=this.st.insert(t,this.yt(t).delete(e)),i&&(this.nt=this.nt.insert(t,i))}removeTarget(e){this.et.delete(e)}wt(e){const t=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let t=this.et.get(e);return t||(t=new Ed,this.et.set(e,t)),t}yt(e){let t=this.st.get(e);return t||(t=new Mt(qe),this.st=this.st.insert(e,t)),t}ht(e){const t=this.dt(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}dt(e){const t=this.et.get(e);return t&&t.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new Ed),this.tt.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}gt(e,t){return this.tt.getRemoteKeysForTarget(e).has(t)}}function Td(){return new jt(me.comparator)}function bd(){return new jt(me.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),dI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class fI{constructor(e,t){this.databaseId=e,this.D=t}}function vo(n,e){return n.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ad(n,e){return n.D?e.toBase64():e.toUint8Array()}function mI(n,e){return vo(n,e.toTimestamp())}function kn(n){return Ye(!!n),He.fromTimestamp(function(e){const t=$n(e);return new on(t.seconds,t.nanos)}(n))}function Vl(n,e){return function(t){return new rt(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Sd(n){const e=rt.fromString(n);return Ye(Dd(e)),e}function Hl(n,e){return Vl(n.databaseId,e.path)}function Bl(n,e){const t=Sd(e);if(t.get(1)!==n.databaseId.projectId)throw new ue(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ue(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new me(Cd(t))}function jl(n,e){return Vl(n.databaseId,e)}function pI(n){const e=Sd(n);return e.length===4?rt.emptyPath():Cd(e)}function ql(n){return new rt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Cd(n){return Ye(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function wd(n,e,t){return{name:Hl(n,e),fields:t.value.mapValue.fields}}function gI(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,c){return l.D?(Ye(c===void 0||typeof c=="string"),Ht.fromBase64String(c||"")):(Ye(c===void 0||c instanceof Uint8Array),Ht.fromUint8Array(c||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?V.UNKNOWN:gd(l.code);return new ue(c,l.message||"")}(o);t=new Id(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Bl(n,i.document.name),r=kn(i.document.updateTime),o=new vn({mapValue:{fields:i.document.fields}}),a=Bt.newFoundDocument(s,r,o),l=i.targetIds||[],c=i.removedTargetIds||[];t=new go(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Bl(n,i.document),r=i.readTime?kn(i.readTime):He.min(),o=Bt.newNoDocument(s,r),a=i.removedTargetIds||[];t=new go([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Bl(n,i.document),r=i.removedTargetIds||[];t=new go([],r,s,null)}else{if(!("filter"in e))return pe();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new nI(s),o=i.targetId;t=new _d(o,r)}}return t}function vI(n,e){let t;if(e instanceof fo)t={update:wd(n,e.key,e.value)};else if(e instanceof eI)t={delete:Hl(n,e.key)};else if(e instanceof Xi)t={update:wd(n,e.key,e.data),updateMask:wI(e.fieldMask)};else{if(!(e instanceof tI))return pe();t={verify:Hl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof lo)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Xs)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Qs)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof uo)return{fieldPath:r.field.canonicalString(),increment:o.C};throw pe()}(0,i))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:mI(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:pe()}(n,e.precondition)),t}function yI(n,e){return n&&n.length>0?(Ye(e!==void 0),n.map(t=>function(i,s){let r=i.updateTime?kn(i.updateTime):kn(s);return r.isEqual(He.min())&&(r=kn(s)),new J_(r,i.transformResults||[])}(t,e))):[]}function _I(n,e){return{documents:[jl(n,e.path)]}}function II(n,e){const t={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(t.parent=jl(n,i),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=jl(n,i.popLast()),t.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(a){if(a.length===0)return;const l=a.map(c=>function(u){if(u.op==="=="){if(Yh(u.value))return{unaryFilter:{field:Qi(u.field),op:"IS_NAN"}};if(Qh(u.value))return{unaryFilter:{field:Qi(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(Yh(u.value))return{unaryFilter:{field:Qi(u.field),op:"IS_NOT_NAN"}};if(Qh(u.value))return{unaryFilter:{field:Qi(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qi(u.field),op:AI(u.op),value:u.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(t.structuredQuery.where=s);const r=function(a){if(a.length!==0)return a.map(l=>function(c){return{field:Qi(c.field),direction:bI(c.dir)}}(l))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=function(a,l){return a.D||Wi(l)?l:{value:l}}(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=Ld(e.startAt)),e.endAt&&(t.structuredQuery.endAt=Ld(e.endAt)),t}function EI(n){let e=pI(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){Ye(i===1);const u=t.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=Rd(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new Ks(Yi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Wi(h)?null:h}(t.limit));let l=null;t.startAt&&(l=Od(t.startAt));let c=null;return t.endAt&&(c=Od(t.endAt)),j_(e,s,o,r,a,"F",l,c)}function TI(n,e){const t=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return pe()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function Rd(n){return n?n.unaryFilter!==void 0?[CI(n)]:n.fieldFilter!==void 0?[SI(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>Rd(e)).reduce((e,t)=>e.concat(t)):pe():[]}function Ld(n){return{before:n.before,values:n.position}}function Od(n){const e=!!n.before,t=n.values||[];return new Nl(t,e)}function bI(n){return hI[n]}function AI(n){return dI[n]}function Qi(n){return{fieldPath:n.canonicalString()}}function Yi(n){return Jt.fromServerFormat(n.fieldPath)}function SI(n){return Zt.create(Yi(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(n.fieldFilter.op),n.fieldFilter.value)}function CI(n){switch(n.unaryFilter.op){case"IS_NAN":const e=Yi(n.unaryFilter.field);return Zt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=Yi(n.unaryFilter.field);return Zt.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yi(n.unaryFilter.field);return Zt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Yi(n.unaryFilter.field);return Zt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}function wI(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Dd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}const RI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,i)=>{t(e)})}static reject(e){return new K((t,i)=>{i(e)})}static waitFor(e){return new K((t,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&t()},l=>i(l))}),o=!0,r===s&&t()})}static or(e){let t=K.resolve(!1);for(const i of e)t=t.next(s=>s?K.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,r)=>{i.push(t.call(this,s,r))}),this.waitFor(i)}}function Js(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&Z_(r,e,i[s])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Fl(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Fl(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const i=e.get(t.key),s=i;this.applyToLocalView(s),i.isValidDocument()||s.convertToNoDocument(He.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ze())}isEqual(e){return this.batchId===e.batchId&&qi(this.mutations,e.mutations,(t,i)=>hd(t,i))&&qi(this.baseMutations,e.baseMutations,(t,i)=>hd(t,i))}}class zl{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){Ye(e.mutations.length===i.length);let s=aI();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new zl(e,t,i,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t,i,s,r=He.min(),o=He.min(),a=Ht.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.Wt=e}}function kI(n){const e=EI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?W_(e,e.limit,"L"):e}/**
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
 */class NI{constructor(){this.Gt=new MI}addToCollectionParentIndex(e,t){return this.Gt.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.Gt.getEntries(t))}}class MI{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Mt(rt.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Mt(rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new Ji(0)}static ie(){return new Ji(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==RI)throw n;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s!==void 0){for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t])}else this.inner[i]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),!0;return!1}forEach(e){zi(this.inner,(t,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Wh(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(){this.changes=new $s(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:He.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:Bt.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?K.resolve(i.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t,i){this.He=e,this.In=t,this.Ht=i}An(e,t){return this.In.getAllMutationBatchesAffectingDocumentKey(e,t).next(i=>this.Rn(e,t,i))}Rn(e,t,i){return this.He.getEntry(e,t).next(s=>{for(const r of i)r.applyToLocalView(s);return s})}bn(e,t){e.forEach((i,s)=>{for(const r of t)r.applyToLocalView(s)})}Pn(e,t){return this.He.getEntries(e,t).next(i=>this.vn(e,i).next(()=>i))}vn(e,t){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,t).next(i=>this.bn(t,i))}getDocumentsMatchingQuery(e,t,i){return function(s){return me.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.Vn(e,t.path):G_(t)?this.Sn(e,t,i):this.Dn(e,t,i)}Vn(e,t){return this.An(e,new me(t)).next(i=>{let s=Ul();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}Sn(e,t,i){const s=t.collectionGroup;let r=Ul();return this.Ht.getCollectionParents(e,s).next(o=>K.forEach(o,a=>{const l=function(c,u){return new no(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(t,a.child(s));return this.Dn(e,l,i).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}Dn(e,t,i){let s,r;return this.He.getDocumentsMatchingQuery(e,t,i).next(o=>(s=o,this.In.getAllMutationBatchesAffectingQuery(e,t))).next(o=>(r=o,this.Cn(e,r,s).next(a=>{s=a;for(const l of r)for(const c of l.mutations){const u=c.key;let h=s.get(u);h==null&&(h=Bt.newInvalidDocument(u),s=s.insert(u,h)),Fl(c,h,l.localWriteTime),h.isFoundDocument()||(s=s.remove(u))}}))).next(()=>(s.forEach((o,a)=>{oo(t,a)||(s=s.remove(o))}),s))}Cn(e,t,i){let s=Ze();for(const o of t)for(const a of o.mutations)a instanceof Xi&&i.get(a.key)===null&&(s=s.add(a.key));let r=i;return this.He.getEntries(e,s).next(o=>(o.forEach((a,l)=>{l.isFoundDocument()&&(r=r.insert(a,l))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Nn=i,this.xn=s}static kn(e,t){let i=Ze(),s=Ze();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Gl(e,t.fromCache,i,s)}}/**
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
 */class FI{$n(e){this.On=e}getDocumentsMatchingQuery(e,t,i,s){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(t)||i.isEqual(He.min())?this.Fn(e,t):this.On.Pn(e,s).next(r=>{const o=this.Mn(t,r);return(io(t)||so(t))&&this.Ln(t.limitType,o,s,i)?this.Fn(e,t):(jh()<=Fe.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Pl(t)),this.On.getDocumentsMatchingQuery(e,t,i).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}Mn(e,t){let i=new Mt(id(e));return t.forEach((s,r)=>{oo(e,r)&&(i=i.add(r))}),i}Ln(e,t,i,s){if(i.size!==t.size)return!0;const r=e==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Fn(e,t){return jh()<=Fe.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",Pl(t)),this.On.getDocumentsMatchingQuery(e,t,He.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,t,i,s){this.persistence=e,this.Bn=t,this.N=s,this.Un=new jt(qe),this.qn=new $s(r=>Ol(r),Dl),this.Kn=He.min(),this.In=e.getMutationQueue(i),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new kd(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Un))}}function VI(n,e,t,i){return new UI(n,e,t,i)}async function Nd(n,e){const t=ge(n);let i=t.In,s=t.Qn;const r=await t.persistence.runTransaction("Handle user change","readonly",o=>{let a;return t.In.getAllMutationBatches(o).next(l=>(a=l,i=t.persistence.getMutationQueue(e),s=new kd(t.jn,i,t.persistence.getIndexManager()),i.getAllMutationBatches(o))).next(l=>{const c=[],u=[];let h=Ze();for(const d of a){c.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}for(const d of l){u.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}return s.Pn(o,h).next(d=>({Wn:d,removedBatchIds:c,addedBatchIds:u}))})});return t.In=i,t.Qn=s,t.Bn.$n(t.Qn),r}function HI(n,e){const t=ge(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=t.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=K.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(m=>{const v=l.docVersions.get(f);Ye(v!==null),m.version.compareTo(v)<0&&(u.applyToRemoteDocument(m,l),m.isValidDocument()&&c.addEntry(m,l.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,u))}(t,i,e,r).next(()=>r.apply(i)).next(()=>t.In.performConsistencyCheck(i)).next(()=>t.Qn.Pn(i,s))})}function Md(n){const e=ge(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function BI(n,e){const t=ge(n),i=e.snapshotVersion;let s=t.Un;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.jn.newChangeBuffer({trackRemovals:!0});s=t.Un;const a=[];e.targetChanges.forEach((c,u)=>{const h=s.get(u);if(!h)return;a.push(t.ze.removeMatchingKeys(r,c.removedDocuments,u).next(()=>t.ze.addMatchingKeys(r,c.addedDocuments,u)));const d=c.resumeToken;if(d.approximateByteSize()>0){const f=h.withResumeToken(d,i).withSequenceNumber(r.currentSequenceNumber);s=s.insert(u,f),function(m,v,g){return Ye(v.resumeToken.approximateByteSize()>0),m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(h,f,c)&&a.push(t.ze.updateTargetData(r,f))}});let l=_i();if(e.documentUpdates.forEach((c,u)=>{e.resolvedLimboDocuments.has(c)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(jI(r,o,e.documentUpdates,i,void 0).next(c=>{l=c})),!i.isEqual(He.min())){const c=t.ze.getLastRemoteSnapshotVersion(r).next(u=>t.ze.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(c)}return K.waitFor(a).next(()=>o.apply(r)).next(()=>t.Qn.vn(r,l)).next(()=>l)}).then(r=>(t.Un=s,r))}function jI(n,e,t,i,s){let r=Ze();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=_i();return t.forEach((l,c)=>{const u=o.get(l),h=(s==null?void 0:s.get(l))||i;c.isNoDocument()&&c.version.isEqual(He.min())?(e.removeEntry(l,h),a=a.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c,h),a=a.insert(l,c)):le("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),a})}function qI(n,e){const t=ge(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.In.getNextMutationBatchAfterBatchId(i,e)))}function zI(n,e){const t=ge(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.ze.getTargetData(i,e).next(r=>r?(s=r,K.resolve(s)):t.ze.allocateTargetId(i).next(o=>(s=new Ii(e,o,0,i.currentSequenceNumber),t.ze.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.Un.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Un=t.Un.insert(i.targetId,i),t.qn.set(e,i.targetId)),i})}async function Wl(n,e,t){const i=ge(n),s=i.Un.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Js(o))throw o;le("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Un=i.Un.remove(e),i.qn.delete(s.target)}function Pd(n,e,t){const i=ge(n);let s=He.min(),r=Ze();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ge(a),h=u.qn.get(c);return h!==void 0?K.resolve(u.Un.get(h)):u.ze.getTargetData(l,c)}(i,o,yi(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.ze.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Bn.getDocumentsMatchingQuery(o,e,t?s:He.min(),t?r:Ze())).next(a=>({documents:a,Gn:r})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return K.resolve(this.Yn.get(t))}saveBundleMetadata(e,t){var i;return this.Yn.set(t.id,{id:(i=t).id,version:i.version,createTime:kn(i.createTime)}),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(i){return{name:i.name,query:kI(i.bundledQuery),readTime:kn(i.readTime)}}(t)),K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this.Zn=new Mt(wt.ts),this.es=new Mt(wt.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const i=new wt(e,t);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.rs(new wt(e,t))}os(e,t){e.forEach(i=>this.removeReference(i,t))}cs(e){const t=new me(new rt([])),i=new wt(t,e),s=new wt(t,e+1),r=[];return this.es.forEachInRange([i,s],o=>{this.rs(o),r.push(o.key)}),r}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new me(new rt([])),i=new wt(t,e),s=new wt(t,e+1);let r=Ze();return this.es.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new wt(e,0),i=this.Zn.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class wt{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return me.comparator(e.key,t.key)||qe(e.ls,t.ls)}static ns(e,t){return qe(e.ls,t.ls)||me.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,t){this.Ht=e,this.referenceDelegate=t,this.In=[],this.fs=1,this.ds=new Mt(wt.ts)}checkEmpty(e){return K.resolve(this.In.length===0)}addMutationBatch(e,t,i,s){const r=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new OI(r,t,i,s);this.In.push(o);for(const a of s)this.ds=this.ds.add(new wt(a.key,r)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return K.resolve(o)}lookupMutationBatch(e,t){return K.resolve(this.ws(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this._s(i),r=s<0?0:s;return K.resolve(this.In.length>r?this.In[r]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return K.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new wt(t,0),s=new wt(t,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([i,s],o=>{const a=this.ws(o.ls);r.push(a)}),K.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Mt(qe);return t.forEach(s=>{const r=new wt(s,0),o=new wt(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{i=i.add(a.ls)})}),K.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;me.isDocumentKey(r)||(r=r.child(""));const o=new wt(new me(r),0);let a=new Mt(qe);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.ls)),!0)},o),K.resolve(this.gs(a))}gs(e){const t=[];return e.forEach(i=>{const s=this.ws(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ye(this.ys(t.batchId,"removed")===0),this.In.shift();let i=this.ds;return K.forEach(t.mutations,s=>{const r=new wt(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=i})}te(e){}containsKey(e,t){const i=new wt(t,0),s=this.ds.firstAfterOrEqual(i);return K.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.In.length,K.resolve()}ys(e,t){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const t=this._s(e);return t<0||t>=this.In.length?null:this.In[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,t){this.Ht=e,this.ps=t,this.docs=new jt(me.comparator),this.size=0}addEntry(e,t,i){const s=t.key,r=this.docs.get(s),o=r?r.size:0,a=this.ps(t);return this.docs=this.docs.insert(s,{document:t.clone(),size:a,readTime:i}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return K.resolve(i?i.document.clone():Bt.newInvalidDocument(t))}getEntries(e,t){let i=_i();return t.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.clone():Bt.newInvalidDocument(s))}),K.resolve(i)}getDocumentsMatchingQuery(e,t,i){let s=_i();const r=new me(t.path.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l,readTime:c}}=o.getNext();if(!t.path.isPrefixOf(a.path))break;c.compareTo(i)<=0||oo(t,l)&&(s=s.insert(l.key,l.clone()))}return K.resolve(s)}Ts(e,t){return K.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new xI(this)}getSize(e){return K.resolve(this.size)}}class xI extends PI{constructor(e){super(),this.Se=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.document.isValidDocument()?t.push(this.Se.addEntry(e,s.document,this.getReadTime(i))):this.Se.removeEntry(i)}),K.waitFor(t)}getFromCache(e,t){return this.Se.getEntry(e,t)}getAllFromCache(e,t){return this.Se.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.persistence=e,this.Es=new $s(t=>Ol(t),Dl),this.lastRemoteSnapshotVersion=He.min(),this.highestTargetId=0,this.Is=0,this.As=new Kl,this.targetCount=0,this.Rs=Ji.se()}forEachTarget(e,t){return this.Es.forEach((i,s)=>t(s)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Is&&(this.Is=t),K.resolve()}ce(e){this.Es.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new Ji(t),this.highestTargetId=t),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.ce(t),K.resolve()}removeTargetData(e,t){return this.Es.delete(t.target),this.As.cs(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=t&&i.get(a.targetId)===null&&(this.Es.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),K.waitFor(r).next(()=>s)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const i=this.Es.get(t)||null;return K.resolve(i)}addMatchingKeys(e,t,i){return this.As.ss(t,i),K.resolve()}removeMatchingKeys(e,t,i){this.As.os(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),K.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.As.cs(t),K.resolve()}getMatchingKeysForTargetId(e,t){const i=this.As.hs(t);return K.resolve(i)}containsKey(e,t){return K.resolve(this.As.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,t){this.bs={},this.Le=new Al(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new XI(this),this.Ht=new NI,this.He=function(i,s){return new KI(i,s)}(this.Ht,i=>this.referenceDelegate.Ps(i)),this.N=new DI(t),this.Je=new GI(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new WI(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,t,i){le("MemoryPersistence","Starting transaction:",e);const s=new YI(this.Le.next());return this.referenceDelegate.vs(),i(s).next(r=>this.referenceDelegate.Vs(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ss(e,t){return K.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,t)))}}class YI extends LI{constructor(e){super(),this.currentSequenceNumber=e}}class xl{constructor(e){this.persistence=e,this.Ds=new Kl,this.Cs=null}static Ns(e){return new xl(e)}get xs(){if(this.Cs)return this.Cs;throw pe()}addReference(e,t,i){return this.Ds.addReference(i,t),this.xs.delete(i.toString()),K.resolve()}removeReference(e,t,i){return this.Ds.removeReference(i,t),this.xs.add(i.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),K.resolve()}removeTarget(e,t){this.Ds.cs(t.targetId).forEach(s=>this.xs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.xs.add(r.toString()))}).next(()=>i.removeTargetData(e,t))}vs(){this.Cs=new Set}Vs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.xs,i=>{const s=me.fromPath(i);return this.ks(e,s).next(r=>{r||t.removeEntry(s)})}).next(()=>(this.Cs=null,t.apply(e)))}updateLimboDocument(e,t){return this.ks(e,t).next(i=>{i?this.xs.delete(t.toString()):this.xs.add(t.toString())})}Ps(e){return 0}ks(e,t){return K.or([()=>K.resolve(this.Ds.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ss(e,t)])}}class Fd{constructor(){this.activeTargetIds=yd()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JI{constructor(){this.yi=new Fd,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,t,i){this.pi[e]=t}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new Fd,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class ZI{Ti(e){}shutdown(){}}/**
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
 */class Ud{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){le("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){le("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,t,i,s){const r=this.Bi(e,t);le("RestConnection","Sending: ",r,i);const o={};return this.Ui(o,s),this.qi(e,r,o,i).then(a=>(le("RestConnection","Received: ",a),a),a=>{throw qh("RestConnection",`${e} failed with error: `,a,"url: ",r,"request:",i),a})}Ki(e,t,i,s){return this.Li(e,t,i,s)}Ui(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+ji,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const i in t.authHeaders)t.authHeaders.hasOwnProperty(i)&&(e[i]=t.authHeaders[i])}Bi(e,t){const i=$I[e];return`${this.Fi}/v1/${t}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,t,i,s){return new Promise((r,o)=>{const a=new I_;a.listenOnce(v_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Tl.NO_ERROR:const c=a.getResponseJson();le("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Tl.TIMEOUT:le("Connection",'RPC "'+e+'" timed out'),o(new ue(V.DEADLINE_EXCEEDED,"Request time out"));break;case Tl.HTTP_ERROR:const u=a.getStatus();if(le("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const m=f.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(m)>=0?m:V.UNKNOWN}(h.status);o(new ue(d,h.message))}else o(new ue(V.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ue(V.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{le("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);a.send(t,"POST",l,i,15)})}ji(e,t){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=p_(),r=g_(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new __({})),this.Ui(o.initMessageHeaders,t),Cu()||Ru()||pp()||Lu()||gp()||wu()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");le("Connection","Creating WebChannel: "+a,o);const l=s.createWebChannel(a,o);let c=!1,u=!1;const h=new eE({vi:f=>{u?le("Connection","Not sending because WebChannel is closed:",f):(c||(le("Connection","Opening WebChannel transport."),l.open(),c=!0),le("Connection","WebChannel sending:",f),l.send(f))},Vi:()=>l.close()}),d=(f,m,v)=>{f.listen(m,g=>{try{v(g)}catch(_){setTimeout(()=>{throw _},0)}})};return d(l,Zr.EventType.OPEN,()=>{u||le("Connection","WebChannel transport opened.")}),d(l,Zr.EventType.CLOSE,()=>{u||(u=!0,le("Connection","WebChannel transport closed"),h.$i())}),d(l,Zr.EventType.ERROR,f=>{u||(u=!0,qh("Connection","WebChannel transport errored:",f),h.$i(new ue(V.UNAVAILABLE,"The operation could not be completed")))}),d(l,Zr.EventType.MESSAGE,f=>{var m;if(!u){const v=f.data[0];Ye(!!v);const g=v,_=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(_){le("Connection","WebChannel received error:",_);const I=_.status;let S=function(H){const C=gt[H];if(C!==void 0)return gd(C)}(I),w=_.message;S===void 0&&(S=V.INTERNAL,w="Unknown error status: "+I+" with message "+_.message),u=!0,h.$i(new ue(S,w)),l.close()}else le("Connection","WebChannel received:",v),h.Oi(v)}}),d(r,y_.STAT_EVENT,f=>{f.stat===Hh.PROXY?le("Connection","Detected buffering proxy"):f.stat===Hh.NOPROXY&&le("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function Xl(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(n){return new fI(n,!0)}class Vd{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Oe=e,this.timerId=t,this.Qi=i,this.Wi=s,this.Gi=r,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const t=Math.floor(this.zi+this.Zi()),i=Math.max(0,Date.now()-this.Ji),s=Math.max(0,t-i);s>0&&le("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,t,i,s,r,o,a){this.Oe=e,this.er=i,this.nr=s,this.sr=r,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new Vd(e,t)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Zn(t.toString()),Zn("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(t)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),t=this.ir;this.credentialsProvider.getToken().then(i=>{this.ir===t&&this.Er(i)},i=>{e(()=>{const s=new ue(V.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Ir(s)})})}Er(e){const t=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{t(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(i=>{t(()=>this.Ir(i))}),this.stream.onMessage(i=>{t(()=>this.onMessage(i))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return le("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return t=>{this.Oe.enqueueAndForget(()=>this.ir===e?t():(le("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nE extends Hd{constructor(e,t,i,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,r),this.N=s}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const t=gI(this.N,e),i=function(s){if(!("targetChange"in s))return He.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?He.min():r.readTime?kn(r.readTime):He.min()}(e);return this.listener.Rr(t,i)}br(e){const t={};t.database=ql(this.N),t.addTarget=function(s,r){let o;const a=r.target;return o=kl(a)?{documents:_I(s,a)}:{query:II(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Ad(s,r.resumeToken):r.snapshotVersion.compareTo(He.min())>0&&(o.readTime=vo(s,r.snapshotVersion.toTimestamp())),o}(this.N,e);const i=TI(this.N,e);i&&(t.labels=i),this.mr(t)}Pr(e){const t={};t.database=ql(this.N),t.removeTarget=e,this.mr(t)}}class iE extends Hd{constructor(e,t,i,s,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,r),this.N=s,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(Ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const t=yI(e.writeResults,e.commitTime),i=kn(e.commitTime);return this.listener.Dr(i,t)}return Ye(!e.writeResults||e.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=ql(this.N),this.mr(e)}Sr(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>vI(this.N,i))};this.mr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE extends class{}{constructor(e,t,i){super(),this.credentials=e,this.sr=t,this.N=i,this.kr=!1}$r(){if(this.kr)throw new ue(V.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,t,i){return this.$r(),this.credentials.getToken().then(s=>this.sr.Li(e,t,i,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new ue(V.UNKNOWN,s.toString())})}Ki(e,t,i){return this.$r(),this.credentials.getToken().then(s=>this.sr.Ki(e,t,i,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new ue(V.UNKNOWN,s.toString())})}terminate(){this.kr=!0}}class rE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(Zn(t),this.Mr=!1):le("OnlineStateTracker",t)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=r,this.zr.Ti(o=>{i.enqueueAndForget(async()=>{Ei(this)&&(le("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ge(a);l.Wr.add(4),await er(l),l.Hr.set("Unknown"),l.Wr.delete(4),await _o(l)}(this))})}),this.Hr=new rE(i,s)}}async function _o(n){if(Ei(n))for(const e of n.Gr)await e(!0)}async function er(n){for(const e of n.Gr)await e(!1)}function Bd(n,e){const t=ge(n);t.Qr.has(e.targetId)||(t.Qr.set(e.targetId,e),Jl(t)?Yl(t):Zi(t).hr()&&Ql(t,e))}function jd(n,e){const t=ge(n),i=Zi(t);t.Qr.delete(e),i.hr()&&qd(t,e),t.Qr.size===0&&(i.hr()?i.wr():Ei(t)&&t.Hr.set("Unknown"))}function Ql(n,e){n.Jr.Y(e.targetId),Zi(n).br(e)}function qd(n,e){n.Jr.Y(e),Zi(n).Pr(e)}function Yl(n){n.Jr=new cI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>n.Qr.get(e)||null}),Zi(n).start(),n.Hr.Lr()}function Jl(n){return Ei(n)&&!Zi(n).ur()&&n.Qr.size>0}function Ei(n){return ge(n).Wr.size===0}function zd(n){n.Jr=void 0}async function aE(n){n.Qr.forEach((e,t)=>{Ql(n,e)})}async function lE(n,e){zd(n),Jl(n)?(n.Hr.qr(e),Yl(n)):n.Hr.set("Unknown")}async function uE(n,e,t){if(n.Hr.set("Online"),e instanceof Id&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.Qr.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.Qr.delete(o),i.Jr.removeTarget(o))}(n,e)}catch(i){le("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Io(n,i)}else if(e instanceof go?n.Jr.rt(e):e instanceof _d?n.Jr.ft(e):n.Jr.at(e),!t.isEqual(He.min()))try{const i=await Md(n.localStore);t.compareTo(i)>=0&&await function(s,r){const o=s.Jr._t(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.Qr.get(l);c&&s.Qr.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=s.Qr.get(a);if(!l)return;s.Qr.set(a,l.withResumeToken(Ht.EMPTY_BYTE_STRING,l.snapshotVersion)),qd(s,a);const c=new Ii(l.target,a,1,l.sequenceNumber);Ql(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(i){le("RemoteStore","Failed to raise snapshot:",i),await Io(n,i)}}async function Io(n,e,t){if(!Js(e))throw e;n.Wr.add(1),await er(n),n.Hr.set("Offline"),t||(t=()=>Md(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{le("RemoteStore","Retrying IndexedDB access"),await t(),n.Wr.delete(1),await _o(n)})}function Gd(n,e){return e().catch(t=>Io(n,t,e))}async function Eo(n){const e=ge(n),t=ei(e);let i=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;cE(e);)try{const s=await qI(e.localStore,i);if(s===null){e.jr.length===0&&t.wr();break}i=s.batchId,hE(e,s)}catch(s){await Io(e,s)}Wd(e)&&Kd(e)}function cE(n){return Ei(n)&&n.jr.length<10}function hE(n,e){n.jr.push(e);const t=ei(n);t.hr()&&t.Vr&&t.Sr(e.mutations)}function Wd(n){return Ei(n)&&!ei(n).ur()&&n.jr.length>0}function Kd(n){ei(n).start()}async function dE(n){ei(n).Nr()}async function fE(n){const e=ei(n);for(const t of n.jr)e.Sr(t.mutations)}async function mE(n,e,t){const i=n.jr.shift(),s=zl.from(i,e,t);await Gd(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Eo(n)}async function pE(n,e){e&&ei(n).Vr&&await async function(t,i){if(s=i.code,iI(s)&&s!==V.ABORTED){const r=t.jr.shift();ei(t).dr(),await Gd(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Eo(t)}var s}(n,e),Wd(n)&&Kd(n)}async function gE(n,e){const t=ge(n);e?(t.Wr.delete(2),await _o(t)):e||(t.Wr.add(2),await er(t),t.Hr.set("Unknown"))}function Zi(n){return n.Yr||(n.Yr=function(e,t,i){const s=ge(e);return s.$r(),new nE(t,s.sr,s.credentials,s.N,i)}(n.datastore,n.asyncQueue,{Si:aE.bind(null,n),Ci:lE.bind(null,n),Rr:uE.bind(null,n)}),n.Gr.push(async e=>{e?(n.Yr.dr(),Jl(n)?Yl(n):n.Hr.set("Unknown")):(await n.Yr.stop(),zd(n))})),n.Yr}function ei(n){return n.Xr||(n.Xr=function(e,t,i){const s=ge(e);return s.$r(),new iE(t,s.sr,s.credentials,s.N,i)}(n.datastore,n.asyncQueue,{Si:dE.bind(null,n),Ci:pE.bind(null,n),Cr:fE.bind(null,n),Dr:mE.bind(null,n)}),n.Gr.push(async e=>{e?(n.Xr.dr(),await Eo(n)):(await n.Xr.stop(),n.jr.length>0&&(le("RemoteStore",`Stopping write stream with ${n.jr.length} pending writes`),n.jr=[]))})),n.Xr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,a=new Zl(e,t,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $l(n,e){if(Zn("AsyncQueue",`${e}: ${n}`),Js(n))return new ue(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.comparator=e?(t,i)=>e(t,i)||me.comparator(t.key,i.key):(t,i)=>me.comparator(t.key,i.key),this.keyedMap=Ul(),this.sortedSet=new jt(this.comparator)}static emptySet(e){return new $i(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $i)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new $i;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.Zr=new jt(me.comparator)}track(e){const t=e.doc.key,i=this.Zr.get(t);i?e.type!==0&&i.type===3?this.Zr=this.Zr.insert(t,e):e.type===3&&i.type!==1?this.Zr=this.Zr.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Zr=this.Zr.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Zr=this.Zr.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Zr=this.Zr.remove(t):e.type===1&&i.type===2?this.Zr=this.Zr.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Zr=this.Zr.insert(t,{type:2,doc:e.doc}):pe():this.Zr=this.Zr.insert(t,e)}eo(){const e=[];return this.Zr.inorderTraversal((t,i)=>{e.push(i)}),e}}class es{constructor(e,t,i,s,r,o,a,l){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,t,i,s){const r=[];return t.forEach(o=>{r.push({type:0,doc:o})}),new es(e,t,$i.emptySet(t),r,i,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ro(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(){this.no=void 0,this.listeners=[]}}class yE{constructor(){this.queries=new $s(e=>nd(e),ro),this.onlineState="Unknown",this.so=new Set}}async function Xd(n,e){const t=ge(n),i=e.query;let s=!1,r=t.queries.get(i);if(r||(s=!0,r=new vE),s)try{r.no=await t.onListen(i)}catch(o){const a=$l(o,`Initialization of query '${Pl(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,r),r.listeners.push(e),e.io(t.onlineState),r.no&&e.ro(r.no)&&eu(t)}async function Qd(n,e){const t=ge(n),i=e.query;let s=!1;const r=t.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return t.queries.delete(i),t.onUnlisten(i)}function _E(n,e){const t=ge(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.ro(s)&&(i=!0);o.no=s}}i&&eu(t)}function IE(n,e,t){const i=ge(n),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(t);i.queries.delete(e)}function eu(n){n.so.forEach(e=>{e.next()})}class Yd{constructor(e,t,i){this.query=e,this.oo=t,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=i||{}}ro(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new es(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.co?this.uo(e)&&(this.oo.next(e),t=!0):this.ho(e,this.onlineState)&&(this.lo(e),t=!0),this.ao=e,t}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let t=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),t=!0),t}ho(e,t){if(!e.fromCache)return!0;const i=t!=="Offline";return(!this.options.fo||!i)&&(!e.docs.isEmpty()||t==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const t=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}lo(e){e=es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.key=e}}class Zd{constructor(e){this.key=e}}class EE{constructor(e,t){this.query=e,this.po=t,this.To=null,this.current=!1,this.Eo=Ze(),this.mutatedKeys=Ze(),this.Io=id(e),this.Ao=new $i(this.Io)}get Ro(){return this.po}bo(e,t){const i=t?t.Po:new xd,s=t?t.Ao:this.Ao;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=io(this.query)&&s.size===this.query.limit?s.last():null,c=so(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=oo(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let g=!1;d&&f?d.data.isEqual(f.data)?m!==v&&(i.track({type:3,doc:f}),g=!0):this.vo(d,f)||(i.track({type:2,doc:f}),g=!0,(l&&this.Io(f,l)>0||c&&this.Io(f,c)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),g=!0):d&&!f&&(i.track({type:1,doc:d}),g=!0,(l||c)&&(a=!0)),g&&(f?(o=o.add(f),r=v?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),io(this.query)||so(this.query))for(;o.size>this.query.limit;){const u=io(this.query)?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Ao:o,Po:i,Ln:a,mutatedKeys:r}}vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i){const s=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const r=e.Po.eo();r.sort((c,u)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return f(h)-f(d)}(c.type,u.type)||this.Io(c.doc,u.doc)),this.Vo(i);const o=t?this.So():[],a=this.Eo.size===0&&this.current?1:0,l=a!==this.To;return this.To=a,r.length!==0||l?{snapshot:new es(this.query,e.Ao,s,r,e.mutatedKeys,a===0,l,!1),Do:o}:{Do:o}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new xd,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(t=>this.po=this.po.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.po=this.po.delete(t)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=Ze(),this.Ao.forEach(i=>{this.Co(i.key)&&(this.Eo=this.Eo.add(i.key))});const t=[];return e.forEach(i=>{this.Eo.has(i)||t.push(new Zd(i))}),this.Eo.forEach(i=>{e.has(i)||t.push(new Jd(i))}),t}No(e){this.po=e.Gn,this.Eo=Ze();const t=this.bo(e.documents);return this.applyChanges(t,!0)}xo(){return es.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class TE{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class bE{constructor(e){this.key=e,this.ko=!1}}class AE{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new $s(a=>nd(a),ro),this.Fo=new Map,this.Mo=new Set,this.Lo=new jt(me.comparator),this.Bo=new Map,this.Uo=new Kl,this.qo={},this.Ko=new Map,this.jo=Ji.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function SE(n,e){const t=PE(n);let i,s;const r=t.Oo.get(e);if(r)i=r.targetId,t.sharedClientState.addLocalQueryTarget(i),s=r.view.xo();else{const o=await zI(t.localStore,yi(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await CE(t,e,i,a==="current"),t.isPrimaryClient&&Bd(t.remoteStore,o)}return s}async function CE(n,e,t,i){n.Wo=(u,h,d)=>async function(f,m,v,g){let _=m.view.bo(v);_.Ln&&(_=await Pd(f.localStore,m.query,!1).then(({documents:w})=>m.view.bo(w,_)));const I=g&&g.targetChanges.get(m.targetId),S=m.view.applyChanges(_,f.isPrimaryClient,I);return rf(f,m.targetId,S.Do),S.snapshot}(n,u,h,d);const s=await Pd(n.localStore,e,!0),r=new EE(e,s.Gn),o=r.bo(s.documents),a=Ys.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline"),l=r.applyChanges(o,n.isPrimaryClient,a);rf(n,t,l.Do);const c=new TE(e,t,r);return n.Oo.set(e,c),n.Fo.has(t)?n.Fo.get(t).push(e):n.Fo.set(t,[e]),l.snapshot}async function wE(n,e){const t=ge(n),i=t.Oo.get(e),s=t.Fo.get(i.targetId);if(s.length>1)return t.Fo.set(i.targetId,s.filter(r=>!ro(r,e))),void t.Oo.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(i.targetId),t.sharedClientState.isActiveQueryTarget(i.targetId)||await Wl(t.localStore,i.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(i.targetId),jd(t.remoteStore,i.targetId),tu(t,i.targetId)}).catch(Zs)):(tu(t,i.targetId),await Wl(t.localStore,i.targetId,!0))}async function RE(n,e,t){const i=FE(n);try{const s=await function(r,o){const a=ge(r),l=on.now(),c=o.reduce((h,d)=>h.add(d.key),Ze());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,c).next(d=>{u=d;const f=[];for(const m of o){const v=$_(m,u.get(m.key));v!=null&&f.push(new Xi(m.key,v,Jh(v.value.mapValue),xi.exists(!0)))}return a.In.addMutationBatch(h,l,f,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.qo[r.currentUser.toKey()];l||(l=new jt(qe)),l=l.insert(o,a),r.qo[r.currentUser.toKey()]=l}(i,s.batchId,t),await tr(i,s.changes),await Eo(i.remoteStore)}catch(s){const r=$l(s,"Failed to persist write");t.reject(r)}}async function $d(n,e){const t=ge(n);try{const i=await BI(t.localStore,e);e.targetChanges.forEach((s,r)=>{const o=t.Bo.get(r);o&&(Ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ko=!0:s.modifiedDocuments.size>0?Ye(o.ko):s.removedDocuments.size>0&&(Ye(o.ko),o.ko=!1))}),await tr(t,i,e)}catch(i){await Zs(i)}}function ef(n,e,t){const i=ge(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Oo.forEach((r,o)=>{const a=o.view.io(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=ge(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.io(o)&&(l=!0)}),l&&eu(a)}(i.eventManager,e),s.length&&i.$o.Rr(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function LE(n,e,t){const i=ge(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Bo.get(e),r=s&&s.key;if(r){let o=new jt(me.comparator);o=o.insert(r,Bt.newNoDocument(r,He.min()));const a=Ze().add(r),l=new po(He.min(),new Map,new Mt(qe),o,a);await $d(i,l),i.Lo=i.Lo.remove(r),i.Bo.delete(e),nu(i)}else await Wl(i.localStore,e,!1).then(()=>tu(i,e,t)).catch(Zs)}async function OE(n,e){const t=ge(n),i=e.batch.batchId;try{const s=await HI(t.localStore,e);nf(t,i,null),tf(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await tr(t,s)}catch(s){await Zs(s)}}async function DE(n,e,t){const i=ge(n);try{const s=await function(r,o){const a=ge(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.In.lookupMutationBatch(l,o).next(u=>(Ye(u!==null),c=u.keys(),a.In.removeMutationBatch(l,u))).next(()=>a.In.performConsistencyCheck(l)).next(()=>a.Qn.Pn(l,c))})}(i.localStore,e);nf(i,e,t),tf(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await tr(i,s)}catch(s){await Zs(s)}}function tf(n,e){(n.Ko.get(e)||[]).forEach(t=>{t.resolve()}),n.Ko.delete(e)}function nf(n,e,t){const i=ge(n);let s=i.qo[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.qo[i.currentUser.toKey()]=s}}function tu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Fo.get(e))n.Oo.delete(i),t&&n.$o.Go(i,t);n.Fo.delete(e),n.isPrimaryClient&&n.Uo.cs(e).forEach(i=>{n.Uo.containsKey(i)||sf(n,i)})}function sf(n,e){n.Mo.delete(e.path.canonicalString());const t=n.Lo.get(e);t!==null&&(jd(n.remoteStore,t),n.Lo=n.Lo.remove(e),n.Bo.delete(t),nu(n))}function rf(n,e,t){for(const i of t)i instanceof Jd?(n.Uo.addReference(i.key,e),kE(n,i)):i instanceof Zd?(le("SyncEngine","Document no longer in limbo: "+i.key),n.Uo.removeReference(i.key,e),n.Uo.containsKey(i.key)||sf(n,i.key)):pe()}function kE(n,e){const t=e.key,i=t.path.canonicalString();n.Lo.get(t)||n.Mo.has(i)||(le("SyncEngine","New document in limbo: "+t),n.Mo.add(i),nu(n))}function nu(n){for(;n.Mo.size>0&&n.Lo.size<n.maxConcurrentLimboResolutions;){const e=n.Mo.values().next().value;n.Mo.delete(e);const t=new me(rt.fromString(e)),i=n.jo.next();n.Bo.set(i,new bE(t)),n.Lo=n.Lo.insert(t,i),Bd(n.remoteStore,new Ii(yi(Ml(t.path)),i,2,Al.T))}}async function tr(n,e,t){const i=ge(n),s=[],r=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach((a,l)=>{o.push(i.Wo(l,e,t).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),s.push(c);const u=Gl.kn(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.$o.Rr(s),await async function(a,l){const c=ge(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>K.forEach(l,h=>K.forEach(h.Nn,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>K.forEach(h.xn,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Js(u))throw u;le("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Un.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);c.Un=c.Un.insert(h,m)}}}(i.localStore,r))}async function NE(n,e){const t=ge(n);if(!t.currentUser.isEqual(e)){le("SyncEngine","User change. New user:",e.toKey());const i=await Nd(t.localStore,e);t.currentUser=e,function(s,r){s.Ko.forEach(o=>{o.forEach(a=>{a.reject(new ue(V.CANCELLED,r))})}),s.Ko.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await tr(t,i.Wn)}}function ME(n,e){const t=ge(n),i=t.Bo.get(e);if(i&&i.ko)return Ze().add(i.key);{let s=Ze();const r=t.Fo.get(e);if(!r)return s;for(const o of r){const a=t.Oo.get(o);s=s.unionWith(a.view.Ro)}return s}}function PE(n){const e=ge(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=$d.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ME.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LE.bind(null,e),e.$o.Rr=_E.bind(null,e.eventManager),e.$o.Go=IE.bind(null,e.eventManager),e}function FE(n){const e=ge(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DE.bind(null,e),e}class UE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=yo(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return VI(this.persistence,new FI,e.initialUser,this.N)}Jo(e){return new QI(xl.Ns,this.N)}Ho(e){return new JI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VE{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>ef(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=NE.bind(null,this.syncEngine),await gE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yE}createDatastore(e){const t=yo(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new tE(s));var s;return function(r,o,a){return new sE(r,o,a)}(e.credentials,i,t)}createRemoteStore(e){return t=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>ef(this.syncEngine,a,0),o=Ud.bt()?new Ud:new ZI,new oE(t,i,s,r,o);var t,i,s,r,o}createSyncEngine(e,t){return function(i,s,r,o,a,l,c){const u=new AE(i,s,r,o,a,l);return c&&(u.Qo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=ge(e);le("RemoteStore","RemoteStore shutting down."),t.Wr.add(5),await er(t),t.zr.shutdown(),t.Hr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class of{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,t,i){this.credentials=e,this.asyncQueue=t,this.databaseInfo=i,this.user=Yt.UNAUTHENTICATED,this.clientId=zh.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(t,async s=>{le("FirestoreClient","Received user=",s.uid),await this.credentialListener(s),this.user=s})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ue(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(t){const i=$l(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function BE(n,e){n.asyncQueue.verifyOperationInProgress(),le("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Nd(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function jE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await qE(n);le("FirestoreClient","Initializing OnlineComponentProvider");const i=await n.getConfiguration();await e.initialize(t,i),n.setCredentialChangeListener(s=>async function(r,o){const a=ge(r);a.asyncQueue.verifyOperationInProgress(),le("RemoteStore","RemoteStore received new credentials");const l=Ei(a);a.Wr.add(3),await er(a),l&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await _o(a)}(e.remoteStore,s)),n.onlineComponents=e}async function qE(n){return n.offlineComponents||(le("FirestoreClient","Using default OfflineComponentProvider"),await BE(n,new UE)),n.offlineComponents}async function af(n){return n.onlineComponents||(le("FirestoreClient","Using default OnlineComponentProvider"),await jE(n,new VE)),n.onlineComponents}function zE(n){return af(n).then(e=>e.syncEngine)}async function lf(n){const e=await af(n),t=e.eventManager;return t.onListen=SE.bind(null,e.syncEngine),t.onUnlisten=wE.bind(null,e.syncEngine),t}function GE(n,e,t={}){const i=new Dn;return n.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new of({next:h=>{r.enqueueAndForget(()=>Qd(s,u));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new ue(V.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new ue(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Yd(Ml(o.path),c,{includeMetadataChanges:!0,fo:!0});return Xd(s,u)}(await lf(n),n.asyncQueue,e,t,i)),i.promise}function WE(n,e,t={}){const i=new Dn;return n.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new of({next:h=>{r.enqueueAndForget(()=>Qd(s,u)),h.fromCache&&a.source==="server"?l.reject(new ue(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Yd(o,c,{includeMetadataChanges:!0,fo:!0});return Xd(s,u)}(await lf(n),n.asyncQueue,e,t,i)),i.promise}class KE{constructor(e,t,i,s,r,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class nr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof nr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(n,e,t){if(!t)throw new ue(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function xE(n,e,t,i){if(e===!0&&i===!0)throw new ue(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function hf(n){if(!me.isDocumentKey(n))throw new ue(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function df(n){if(me.isDocumentKey(n))throw new ue(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function iu(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":pe()}function ts(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ue(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=iu(n);throw new ue(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ue(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,xE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ff({}),this._settingsFrozen=!1,e instanceof nr?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new ue(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nr(i.options.projectId)}(e))}get app(){if(!this._app)throw new ue(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ue(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ff(e),e.credentials!==void 0&&(this._credentials=function(t){if(!t)return new T_;switch(t.type){case"gapi":const i=t.client;return Ye(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new S_(i,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new ue(V.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=uf.get(e);t&&(le("ComponentProvider","Removing Datastore"),uf.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new an(this.firestore,e,this._key)}}class To{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new To(this.firestore,e,this._query)}}class ti extends To{constructor(e,t,i){super(e,t,Ml(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new an(this.firestore,null,new me(e))}withConverter(e){return new ti(this.firestore,e,this._path)}}function OA(n,e,...t){if(n=gn(n),cf("collection","path",e),n instanceof su){const i=rt.fromString(e,...t);return df(i),new ti(n,null,i)}{if(!(n instanceof an||n instanceof ti))throw new ue(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(rt.fromString(e,...t));return df(i),new ti(n.firestore,null,i)}}function DA(n,e,...t){if(n=gn(n),arguments.length===1&&(e=zh.I()),cf("doc","path",e),n instanceof su){const i=rt.fromString(e,...t);return hf(i),new an(n,null,new me(i))}{if(!(n instanceof an||n instanceof ti))throw new ue(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(rt.fromString(e,...t));return hf(i),new an(n.firestore,n instanceof ti?n.converter:null,new me(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new Vd(this,"async_queue_retry"),this.Rc=()=>{const t=Xl();t&&le("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ar.tr()};const e=Xl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const t=Xl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const t=new Dn;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!Js(e))throw e;le("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const t=this._c.then(()=>(this.Ec=!0,e().catch(i=>{this.Tc=i,this.Ec=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Zn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ec=!1,i))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.bc(),this.Ac.indexOf(e)>-1&&(t=0);const s=Zl.createAndSchedule(this,e,t,i,r=>this.Vc(r));return this.yc.push(s),s}bc(){this.Tc&&pe()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const t of this.yc)if(t.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.yc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const t=this.yc.indexOf(e);this.yc.splice(t,1)}}class bo extends su{constructor(e,t){super(e,t),this.type="firestore",this._queue=new XE,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||mf(this),this._firestoreClient.terminate()}}function kA(n=Nu()){return ma(n,"firestore").getImmediate()}function ru(n){return n._firestoreClient||mf(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function mf(n){var e;const t=n._freezeSettings(),i=function(s,r,o,a){return new KE(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new HE(n._credentials,n._queue,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ou{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ns(Ht.fromBase64String(e))}catch(t){throw new ue(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ns(Ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return qe(this._lat,e._lat)||qe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=/^__.*__$/;class YE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Xi(e,this.data,this.fieldMask,t,this.fieldTransforms):new fo(e,this.data,t,this.fieldTransforms)}}function gf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class lu{constructor(e,t,i,s,r,o){this.settings=e,this.databaseId=t,this.N=i,this.ignoreUndefinedProperties=s,r===void 0&&this.xc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new lu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.$c({path:i,Fc:!1});return s.Mc(e),s}Lc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.$c({path:i,Fc:!1});return s.xc(),s}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return Ao(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(e.length===0)throw this.Uc("Document fields must not be empty");if(gf(this.kc)&&QE.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class JE{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.N=i||yo(e)}jc(e,t,i,s=!1){return new lu({kc:e,methodName:t,Kc:i,path:Jt.emptyPath(),Fc:!1,qc:s},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function ZE(n){const e=n._freezeSettings(),t=yo(n._databaseId);return new JE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function $E(n,e,t,i,s,r={}){const o=n.jc(r.merge||r.mergeFields?2:0,e,t,s);If("Data must be an object, but it was:",o,i);const a=yf(i,o);let l,c;if(r.merge)l=new Sl(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=eT(e,h,t);if(!o.contains(d))throw new ue(V.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);nT(u,d)||u.push(d)}l=new Sl(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new YE(new vn(a),l,c)}function vf(n,e){if(_f(n=gn(n)))return If("Unsupported field value:",e,n),yf(n,e);if(n instanceof pf)return function(t,i){if(!gf(i.kc))throw i.Uc(`${t._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Uc(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Fc&&e.kc!==4)throw e.Uc("Nested arrays are not supported");return function(t,i){const s=[];let r=0;for(const o of t){let a=vf(o,i.Bc(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(n,e)}return function(t,i){if((t=gn(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return x_(i.N,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=on.fromDate(t);return{timestampValue:vo(i.N,s)}}if(t instanceof on){const s=new on(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:vo(i.N,s)}}if(t instanceof au)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ns)return{bytesValue:Ad(i.N,t._byteString)};if(t instanceof an){const s=i.databaseId,r=t.firestore._databaseId;if(!r.isEqual(s))throw i.Uc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Vl(t.firestore._databaseId||i.databaseId,t._key.path)}}throw i.Uc(`Unsupported field value: ${iu(t)}`)}(n,e)}function yf(n,e){const t={};return Wh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zi(n,(i,s)=>{const r=vf(s,e.Oc(i));r!=null&&(t[i]=r)}),{mapValue:{fields:t}}}function _f(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof on||n instanceof au||n instanceof ns||n instanceof an||n instanceof pf)}function If(n,e,t){if(!_f(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const i=iu(t);throw i==="an object"?e.Uc(n+" a custom object"):e.Uc(n+" "+i)}}function eT(n,e,t){if((e=gn(e))instanceof ou)return e._internalPath;if(typeof e=="string")return Ef(n,e);throw Ao("Field path arguments must be of type string or FieldPath.",n,!1,void 0,t)}const tT=new RegExp("[~\\*/\\[\\]]");function Ef(n,e,t){if(e.search(tT)>=0)throw Ao(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ou(...e.split("."))._internalPath}catch{throw Ao(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ao(n,e,t,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new ue(V.INVALID_ARGUMENT,a+n+l)}function nT(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new an(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(bf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class iT extends Tf{data(){return super.data()}}function bf(n,e){return typeof e=="string"?Ef(n,e):e instanceof ou?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Af extends Tf{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new So(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(bf("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class So extends Af{data(e={}){return super.data(e)}}class sT{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ir(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new So(this._firestore,this._userDataWriter,i.key,i,new ir(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>({type:"added",doc:new So(i._firestore,i._userDataWriter,o.doc.key,o.doc,new ir(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:r++}))}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new So(i._firestore,i._userDataWriter,o.doc.key,o.doc,new ir(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:rT(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function rT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(n){if(so(n)&&n.explicitOrderBy.length===0)throw new ue(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{convertValue(e,t="none"){switch(vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw pe()}}convertObject(e,t){const i={};return zi(e.fields,(s,r)=>{i[s]=this.convertValue(r,t)}),i}convertGeoPoint(e){return new au(pt(e.latitude),pt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=xh(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(zs(e));default:return null}}convertTimestamp(e){const t=$n(e);return new on(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=rt.fromString(e);Ye(Dd(i));const s=new nr(i.get(1),i.get(3)),r=new me(i.popFirst(5));return s.isEqual(t)||Zn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function NA(n){n=ts(n,an);const e=ts(n.firestore,bo);return GE(ru(e),n._key).then(t=>cT(e,n,t))}class Sf extends aT{constructor(e){super(),this.firestore=e}convertBytes(e){return new ns(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new an(this.firestore,null,t)}}function MA(n){n=ts(n,To);const e=ts(n.firestore,bo),t=ru(e),i=new Sf(e);return oT(n._query),WE(t,n._query).then(s=>new sT(e,i,n,s))}function PA(n,e,t){n=ts(n,an);const i=ts(n.firestore,bo),s=lT(n.converter,e,t);return uT(i,[$E(ZE(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,xi.none())])}function uT(n,e){return function(t,i){const s=new Dn;return t.asyncQueue.enqueueAndForget(async()=>RE(await zE(t),i,s)),s.promise}(ru(n),e)}function cT(n,e,t){const i=t.docs.get(e._key),s=new Sf(n);return new Af(n,s,e._key,i,new ir(t.hasPendingWrites,t.fromCache),e.converter)}(function(n,e=!0){(function(t){ji=t})(ps),ms(new Di("firestore",(t,{options:i})=>{const s=t.getProvider("app").getImmediate(),r=new bo(s,new b_(t.getProvider("auth-internal")));return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r},"PUBLIC")),zn(Bh,"3.3.1",n),zn(Bh,"3.3.1","esm2017")})();function ce(n){return Object.entries(n).filter(([e,t])=>e!==""&&t).map(([e])=>e).join(" ")}function Xe(n,e,t,i={bubbles:!0},s=!1){if(typeof Event!="undefined"&&n){const r=new CustomEvent(e,Object.assign(Object.assign({},i),{detail:t}));if(n==null||n.dispatchEvent(r),s&&e.startsWith("SMUI")){const o=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},i),{detail:t}));n==null||n.dispatchEvent(o),o.defaultPrevented&&r.preventDefault()}return r}}function is(n,e){let t=Object.getOwnPropertyNames(n);const i={};for(let s=0;s<t.length;s++){const r=t[s],o=r.indexOf("$");o!==-1&&e.indexOf(r.substring(0,o+1))!==-1||e.indexOf(r)===-1&&(i[r]=n[r])}return i}const Cf=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,hT=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function Qe(n){let e,t=[];n.$on=(s,r)=>{let o=s,a=()=>{};return e?a=e(o,r):t.push([o,r]),o.match(Cf)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',o),(...c)=>{a()}};function i(s){pn(n,s)}return s=>{const r=[],o={};e=(a,l)=>{let c=a,u=l,h=!1;const d=c.match(Cf),f=c.match(hT),m=d||f;if(c.match(/^SMUI:\w+:/)){const _=c.split(":");let I="";for(let S=0;S<_.length;S++)I+=S===_.length-1?":"+_[S]:_[S].split("-").map(w=>w.slice(0,1).toUpperCase()+w.slice(1)).join("");console.warn(`The event ${c.split("$")[0]} has been renamed to ${I.split("$")[0]}.`),c=I}if(m){const _=c.split(d?":":"$");c=_[0];const I=Object.fromEntries(_.slice(1).map(S=>[S,!0]));I.passive&&(h=h||{},h.passive=!0),I.nonpassive&&(h=h||{},h.passive=!1),I.capture&&(h=h||{},h.capture=!0),I.once&&(h=h||{},h.once=!0),I.preventDefault&&(u=tp(u)),I.stopPropagation&&(u=np(u))}const v=Ce(s,c,u,h),g=()=>{v();const _=r.indexOf(g);_>-1&&r.splice(_,1)};return r.push(g),c in o||(o[c]=Ce(s,c,i)),g};for(let a=0;a<t.length;a++)e(t[a][0],t[a][1]);return{destroy:()=>{for(let a=0;a<r.length;a++)r[a]();for(let a of Object.entries(o))a[1]()}}}}function vt(n,e){let t=Object.getOwnPropertyNames(n);const i={};for(let s=0;s<t.length;s++){const r=t[s];r.substring(0,e.length)===e&&(i[r.substring(e.length)]=n[r])}return i}function et(n,e){let t=[];if(e)for(let i=0;i<e.length;i++){const s=e[i],r=Array.isArray(s)?s[0]:s;Array.isArray(s)&&s.length>1?t.push(r(n,s[1])):t.push(r(n))}return{update(i){if((i&&i.length||0)!=t.length)throw new Error("You must not change the length of an actions array.");if(i)for(let s=0;s<i.length;s++){const r=t[s];if(r&&r.update){const o=i[s];Array.isArray(o)&&o.length>1?r.update(o[1]):r.update()}}},destroy(){for(let i=0;i<t.length;i++){const s=t[i];s&&s.destroy&&s.destroy()}}}}var Co;function dT(n,e){e===void 0&&(e=!1);var t=n.CSS,i=Co;if(typeof Co=="boolean"&&!e)return Co;var s=t&&typeof t.supports=="function";if(!s)return!1;var r=t.supports("--css-vars","yes"),o=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return i=r||o,e||(Co=i),i}function fT(n,e,t){if(!n)return{x:0,y:0};var i=e.x,s=e.y,r=i+t.left,o=s+t.top,a,l;if(n.type==="touchstart"){var c=n;a=c.changedTouches[0].pageX-r,l=c.changedTouches[0].pageY-o}else{var u=n;a=u.pageX-r,l=u.pageY-o}return{x:a,y:l}}/**
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
 */var yn=function(){function n(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(n,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),n.prototype.init=function(){},n.prototype.destroy=function(){},n}();/**
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
 */function mT(n){return n===void 0&&(n=window),pT(n)?{passive:!0}:!1}function pT(n){n===void 0&&(n=window);var e=!1;try{var t={get passive(){return e=!0,!1}},i=function(){};n.document.addEventListener("test",i,t),n.document.removeEventListener("test",i,t)}catch{e=!1}return e}var wf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",applyPassive:mT});/**
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
 */function gT(n,e){if(n.closest)return n.closest(e);for(var t=n;t;){if(Rf(t,e))return t;t=t.parentElement}return null}function Rf(n,e){var t=n.matches||n.webkitMatchesSelector||n.msMatchesSelector;return t.call(n,e)}function vT(n){var e=n;if(e.offsetParent!==null)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var i=t.scrollWidth;return document.documentElement.removeChild(t),i}var uu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",closest:gT,matches:Rf,estimateScrollWidth:vT});/**
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
 */var yT={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},_T={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Lf={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
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
 */var Of=["touchstart","pointerdown","mousedown","keydown"],Df=["touchend","pointerup","mouseup","contextmenu"],wo=[],IT=function(n){hn(e,n);function e(t){var i=n.call(this,Je(Je({},e.defaultAdapter),t))||this;return i.activationAnimationHasEnded=!1,i.activationTimer=0,i.fgDeactivationRemovalTimer=0,i.fgScale="0",i.frame={width:0,height:0},i.initialSize=0,i.layoutFrame=0,i.maxRadius=0,i.unboundedCoords={left:0,top:0},i.activationState=i.defaultActivationState(),i.activationTimerCallback=function(){i.activationAnimationHasEnded=!0,i.runDeactivationUXLogicIfReady()},i.activateHandler=function(s){i.activateImpl(s)},i.deactivateHandler=function(){i.deactivateImpl()},i.focusHandler=function(){i.handleFocus()},i.blurHandler=function(){i.handleBlur()},i.resizeHandler=function(){i.layout()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return yT},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return _T},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Lf},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var s=e.cssClasses,r=s.ROOT,o=s.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(r),t.adapter.isUnbounded()&&(t.adapter.addClass(o),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,s=i.ROOT,r=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(s),t.adapter.removeClass(r),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var i=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var i,s;if(t){try{for(var r=An(Of),o=r.next();!o.done;o=r.next()){var a=o.value;this.adapter.registerInteractionHandler(a,this.activateHandler)}}catch(l){i={error:l}}finally{try{o&&!o.done&&(s=r.return)&&s.call(r)}finally{if(i)throw i.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var i,s;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=An(Df),o=r.next();!o.done;o=r.next()){var a=o.value;this.adapter.registerDocumentInteractionHandler(a,this.deactivateHandler)}}catch(l){i={error:l}}finally{try{o&&!o.done&&(s=r.return)&&s.call(r)}finally{if(i)throw i.error}}},e.prototype.deregisterRootHandlers=function(){var t,i;try{for(var s=An(Of),r=s.next();!r.done;r=s.next()){var o=r.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(a){t={error:a}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,i;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var s=An(Df),r=s.next();!r.done;r=s.next()){var o=r.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(a){t={error:a}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,i=e.strings,s=Object.keys(i);s.forEach(function(r){r.indexOf("VAR_")===0&&t.adapter.updateCssVariable(i[r],null)})},e.prototype.activateImpl=function(t){var i=this;if(!this.adapter.isSurfaceDisabled()){var s=this.activationState;if(!s.isActivated){var r=this.previousActivationEvent,o=r&&t!==void 0&&r.type!==t.type;if(!o){s.isActivated=!0,s.isProgrammatic=t===void 0,s.activationEvent=t,s.wasActivatedByPointer=s.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var a=t!==void 0&&wo.length>0&&wo.some(function(l){return i.adapter.containsEventTarget(l)});if(a){this.resetActivationState();return}t!==void 0&&(wo.push(t.target),this.registerDeactivationHandlers(t)),s.wasElementMadeActive=this.checkElementMadeActive(t),s.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){wo=[],!s.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(s.wasElementMadeActive=i.checkElementMadeActive(t),s.wasElementMadeActive&&i.animateActivation()),s.wasElementMadeActive||(i.activationState=i.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,i=e.strings,s=i.VAR_FG_TRANSLATE_START,r=i.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,l=o.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",h="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),f=d.startPoint,m=d.endPoint;u=f.x+"px, "+f.y+"px",h=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(s,u),this.adapter.updateCssVariable(r,h),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},c)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,i=t.activationEvent,s=t.wasActivatedByPointer,r;s?r=fT(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):r={x:this.frame.width/2,y:this.frame.height/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,i=e.cssClasses.FG_DEACTIVATION,s=this.activationState,r=s.hasDeactivationUXRun,o=s.isActivated,a=r||!o;a&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(i)},Lf.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,i=this.activationState;if(!!i.isActivated){var s=Je({},i);i.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(s)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(s),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var i=t.wasActivatedByPointer,s=t.wasElementMadeActive;(i||s)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width),s=function(){var o=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return o+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?i:s();var r=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!=0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,i=t.VAR_FG_SIZE,s=t.VAR_LEFT,r=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(s,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},e}(yn);/**
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
 */var cu="mdc-dom-focus-sentinel",ET=function(){function n(e,t){t===void 0&&(t={}),this.root=e,this.options=t,this.elFocusedBeforeTrapFocus=null}return n.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},n.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+cu)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},n.prototype.wrapTabFocus=function(e){var t=this,i=this.createSentinel(),s=this.createSentinel();i.addEventListener("focus",function(){var r=t.getFocusableElements(e);r.length>0&&r[r.length-1].focus()}),s.addEventListener("focus",function(){var r=t.getFocusableElements(e);r.length>0&&r[0].focus()}),e.insertBefore(i,e.children[0]),e.appendChild(s)},n.prototype.focusInitialElement=function(e,t){var i=0;t&&(i=Math.max(e.indexOf(t),0)),e[i].focus()},n.prototype.getFocusableElements=function(e){var t=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return t.filter(function(i){var s=i.getAttribute("aria-disabled")==="true"||i.getAttribute("disabled")!=null||i.getAttribute("hidden")!=null||i.getAttribute("aria-hidden")==="true",r=i.tabIndex>=0&&i.getBoundingClientRect().width>0&&!i.classList.contains(cu)&&!s,o=!1;if(r){var a=getComputedStyle(i);o=a.display==="none"||a.visibility==="hidden"}return r&&!o})},n.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(cu),e},n}(),TT=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",FocusTrap:ET});/**
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
 */var we={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},Kt=new Set;Kt.add(we.BACKSPACE);Kt.add(we.ENTER);Kt.add(we.SPACEBAR);Kt.add(we.PAGE_UP);Kt.add(we.PAGE_DOWN);Kt.add(we.END);Kt.add(we.HOME);Kt.add(we.ARROW_LEFT);Kt.add(we.ARROW_UP);Kt.add(we.ARROW_RIGHT);Kt.add(we.ARROW_DOWN);Kt.add(we.DELETE);Kt.add(we.ESCAPE);Kt.add(we.TAB);var $t={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},xt=new Map;xt.set($t.BACKSPACE,we.BACKSPACE);xt.set($t.ENTER,we.ENTER);xt.set($t.SPACEBAR,we.SPACEBAR);xt.set($t.PAGE_UP,we.PAGE_UP);xt.set($t.PAGE_DOWN,we.PAGE_DOWN);xt.set($t.END,we.END);xt.set($t.HOME,we.HOME);xt.set($t.ARROW_LEFT,we.ARROW_LEFT);xt.set($t.ARROW_UP,we.ARROW_UP);xt.set($t.ARROW_RIGHT,we.ARROW_RIGHT);xt.set($t.ARROW_DOWN,we.ARROW_DOWN);xt.set($t.DELETE,we.DELETE);xt.set($t.ESCAPE,we.ESCAPE);xt.set($t.TAB,we.TAB);var ni=new Set;ni.add(we.PAGE_UP);ni.add(we.PAGE_DOWN);ni.add(we.END);ni.add(we.HOME);ni.add(we.ARROW_LEFT);ni.add(we.ARROW_UP);ni.add(we.ARROW_RIGHT);ni.add(we.ARROW_DOWN);function qt(n){var e=n.key;if(Kt.has(e))return e;var t=xt.get(n.keyCode);return t||we.UNKNOWN}const{applyPassive:Ro}=wf,{matches:bT}=uu;function Nn(n,{ripple:e=!0,surface:t=!1,unbounded:i=!1,disabled:s=!1,color:r,active:o,rippleElement:a,eventTarget:l,activeTarget:c,addClass:u=m=>n.classList.add(m),removeClass:h=m=>n.classList.remove(m),addStyle:d=(m,v)=>n.style.setProperty(m,v),initPromise:f=Promise.resolve()}={}){let m,v=Pt("SMUI:addLayoutListener"),g,_=o,I=l,S=c;function w(){t&&(u("mdc-ripple-surface"),r==="primary"?(u("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")):r==="secondary"?(h("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")):(h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary"))),m&&_!==o&&(_=o,o?m.activate():o===!1&&m.deactivate()),e&&!m?(m=new IT({addClass:u,browserSupportsCssVars:()=>dT(window),computeBoundingRect:()=>(a||n).getBoundingClientRect(),containsEventTarget:C=>n.contains(C),deregisterDocumentInteractionHandler:(C,p)=>document.documentElement.removeEventListener(C,p,Ro()),deregisterInteractionHandler:(C,p)=>(l||n).removeEventListener(C,p,Ro()),deregisterResizeHandler:C=>window.removeEventListener("resize",C),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>o==null?bT(c||n,":active"):o,isSurfaceDisabled:()=>!!s,isUnbounded:()=>!!i,registerDocumentInteractionHandler:(C,p)=>document.documentElement.addEventListener(C,p,Ro()),registerInteractionHandler:(C,p)=>(l||n).addEventListener(C,p,Ro()),registerResizeHandler:C=>window.addEventListener("resize",C),removeClass:h,updateCssVariable:d}),f.then(()=>{m&&(m.init(),m.setUnbounded(i))})):m&&!e&&f.then(()=>{m&&(m.destroy(),m=void 0)}),m&&(I!==l||S!==c)&&(I=l,S=c,m.destroy(),requestAnimationFrame(()=>{m&&(m.init(),m.setUnbounded(i))})),!e&&i&&u("mdc-ripple-upgraded--unbounded")}w(),v&&(g=v(H));function H(){m&&m.layout()}return{update(C){({ripple:e,surface:t,unbounded:i,disabled:s,color:r,active:o,rippleElement:a,eventTarget:l,activeTarget:c,addClass:u,removeClass:h,addStyle:d,initPromise:f}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:p=>n.classList.add(p),removeClass:p=>n.classList.remove(p),addStyle:(p,y)=>n.style.setProperty(p,y),initPromise:Promise.resolve()},C)),w()},destroy(){m&&(m.destroy(),m=void 0,h("mdc-ripple-surface"),h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")),g&&g()}}}function AT(n){let e,t,i,s,r;const o=n[7].default,a=Te(o,n,n[6],null);let l=[{href:n[1]},n[4]],c={};for(let u=0;u<l.length;u+=1)c=F(c,l[u]);return{c(){e=te("a"),a&&a.c(),this.h()},l(u){e=ne(u,"A",{href:!0});var h=ae(e);a&&a.l(h),h.forEach(O),this.h()},h(){se(e,c)},m(u,h){x(u,e,h),a&&a.m(e,null),n[8](e),i=!0,s||(r=[oe(t=et.call(null,e,n[0])),oe(n[3].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&64)&&Ae(a,o,u,u[6],i?be(o,u[6],h,null):Se(u[6]),null),se(e,c=Ee(l,[(!i||h&2)&&{href:u[1]},h&16&&u[4]])),t&&Pe(t.update)&&h&1&&t.update.call(null,u[0])},i(u){i||(P(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&O(e),a&&a.d(u),n[8](null),s=!1,Me(r)}}}function ST(n,e,t){const i=["use","href","getElement"];let s=ie(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e,{href:l="javascript:void(0);"}=e;const c=Qe(ke());let u;function h(){return u}function d(f){re[f?"unshift":"push"](()=>{u=f,t(2,u)})}return n.$$set=f=>{e=F(F({},e),Ge(f)),t(4,s=ie(e,i)),"use"in f&&t(0,a=f.use),"href"in f&&t(1,l=f.href),"$$scope"in f&&t(6,o=f.$$scope)},[a,l,u,c,s,h,o,r,d]}class CT extends Ke{constructor(e){super();We(this,e,ST,AT,je,{use:0,href:1,getElement:5})}get getElement(){return this.$$.ctx[5]}}function wT(n){let e,t,i,s,r;const o=n[6].default,a=Te(o,n,n[5],null);let l=[n[3]],c={};for(let u=0;u<l.length;u+=1)c=F(c,l[u]);return{c(){e=te("button"),a&&a.c(),this.h()},l(u){e=ne(u,"BUTTON",{});var h=ae(e);a&&a.l(h),h.forEach(O),this.h()},h(){se(e,c)},m(u,h){x(u,e,h),a&&a.m(e,null),e.autofocus&&e.focus(),n[7](e),i=!0,s||(r=[oe(t=et.call(null,e,n[0])),oe(n[2].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Ae(a,o,u,u[5],i?be(o,u[5],h,null):Se(u[5]),null),se(e,c=Ee(l,[h&8&&u[3]])),t&&Pe(t.update)&&h&1&&t.update.call(null,u[0])},i(u){i||(P(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&O(e),a&&a.d(u),n[7](null),s=!1,Me(r)}}}function RT(n,e,t){const i=["use","getElement"];let s=ie(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Qe(ke());let c;function u(){return c}function h(d){re[d?"unshift":"push"](()=>{c=d,t(1,c)})}return n.$$set=d=>{e=F(F({},e),Ge(d)),t(3,s=ie(e,i)),"use"in d&&t(0,a=d.use),"$$scope"in d&&t(5,o=d.$$scope)},[a,c,l,s,u,o,r,h]}class LT extends Ke{constructor(e){super();We(this,e,RT,wT,je,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function OT(n){let e,t,i,s,r;const o=n[6].default,a=Te(o,n,n[5],null);let l=[n[3]],c={};for(let u=0;u<l.length;u+=1)c=F(c,l[u]);return{c(){e=te("div"),a&&a.c(),this.h()},l(u){e=ne(u,"DIV",{});var h=ae(e);a&&a.l(h),h.forEach(O),this.h()},h(){se(e,c)},m(u,h){x(u,e,h),a&&a.m(e,null),n[7](e),i=!0,s||(r=[oe(t=et.call(null,e,n[0])),oe(n[2].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Ae(a,o,u,u[5],i?be(o,u[5],h,null):Se(u[5]),null),se(e,c=Ee(l,[h&8&&u[3]])),t&&Pe(t.update)&&h&1&&t.update.call(null,u[0])},i(u){i||(P(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&O(e),a&&a.d(u),n[7](null),s=!1,Me(r)}}}function DT(n,e,t){const i=["use","getElement"];let s=ie(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Qe(ke());let c;function u(){return c}function h(d){re[d?"unshift":"push"](()=>{c=d,t(1,c)})}return n.$$set=d=>{e=F(F({},e),Ge(d)),t(3,s=ie(e,i)),"use"in d&&t(0,a=d.use),"$$scope"in d&&t(5,o=d.$$scope)},[a,c,l,s,u,o,r,h]}class kf extends Ke{constructor(e){super();We(this,e,DT,OT,je,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function kT(n){let e,t,i,s,r;const o=n[6].default,a=Te(o,n,n[5],null);let l=[n[3]],c={};for(let u=0;u<l.length;u+=1)c=F(c,l[u]);return{c(){e=te("h1"),a&&a.c(),this.h()},l(u){e=ne(u,"H1",{});var h=ae(e);a&&a.l(h),h.forEach(O),this.h()},h(){se(e,c)},m(u,h){x(u,e,h),a&&a.m(e,null),n[7](e),i=!0,s||(r=[oe(t=et.call(null,e,n[0])),oe(n[2].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Ae(a,o,u,u[5],i?be(o,u[5],h,null):Se(u[5]),null),se(e,c=Ee(l,[h&8&&u[3]])),t&&Pe(t.update)&&h&1&&t.update.call(null,u[0])},i(u){i||(P(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&O(e),a&&a.d(u),n[7](null),s=!1,Me(r)}}}function NT(n,e,t){const i=["use","getElement"];let s=ie(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Qe(ke());let c;function u(){return c}function h(d){re[d?"unshift":"push"](()=>{c=d,t(1,c)})}return n.$$set=d=>{e=F(F({},e),Ge(d)),t(3,s=ie(e,i)),"use"in d&&t(0,a=d.use),"$$scope"in d&&t(5,o=d.$$scope)},[a,c,l,s,u,o,r,h]}class MT extends Ke{constructor(e){super();We(this,e,NT,kT,je,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function PT(n){let e,t,i,s,r;const o=n[6].default,a=Te(o,n,n[5],null);let l=[n[3]],c={};for(let u=0;u<l.length;u+=1)c=F(c,l[u]);return{c(){e=te("h2"),a&&a.c(),this.h()},l(u){e=ne(u,"H2",{});var h=ae(e);a&&a.l(h),h.forEach(O),this.h()},h(){se(e,c)},m(u,h){x(u,e,h),a&&a.m(e,null),n[7](e),i=!0,s||(r=[oe(t=et.call(null,e,n[0])),oe(n[2].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Ae(a,o,u,u[5],i?be(o,u[5],h,null):Se(u[5]),null),se(e,c=Ee(l,[h&8&&u[3]])),t&&Pe(t.update)&&h&1&&t.update.call(null,u[0])},i(u){i||(P(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&O(e),a&&a.d(u),n[7](null),s=!1,Me(r)}}}function FT(n,e,t){const i=["use","getElement"];let s=ie(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Qe(ke());let c;function u(){return c}function h(d){re[d?"unshift":"push"](()=>{c=d,t(1,c)})}return n.$$set=d=>{e=F(F({},e),Ge(d)),t(3,s=ie(e,i)),"use"in d&&t(0,a=d.use),"$$scope"in d&&t(5,o=d.$$scope)},[a,c,l,s,u,o,r,h]}class UT extends Ke{constructor(e){super();We(this,e,FT,PT,je,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function VT(n){let e,t,i,s,r;const o=n[6].default,a=Te(o,n,n[5],null);let l=[n[3]],c={};for(let u=0;u<l.length;u+=1)c=F(c,l[u]);return{c(){e=te("h3"),a&&a.c(),this.h()},l(u){e=ne(u,"H3",{});var h=ae(e);a&&a.l(h),h.forEach(O),this.h()},h(){se(e,c)},m(u,h){x(u,e,h),a&&a.m(e,null),n[7](e),i=!0,s||(r=[oe(t=et.call(null,e,n[0])),oe(n[2].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Ae(a,o,u,u[5],i?be(o,u[5],h,null):Se(u[5]),null),se(e,c=Ee(l,[h&8&&u[3]])),t&&Pe(t.update)&&h&1&&t.update.call(null,u[0])},i(u){i||(P(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&O(e),a&&a.d(u),n[7](null),s=!1,Me(r)}}}function HT(n,e,t){const i=["use","getElement"];let s=ie(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Qe(ke());let c;function u(){return c}function h(d){re[d?"unshift":"push"](()=>{c=d,t(1,c)})}return n.$$set=d=>{e=F(F({},e),Ge(d)),t(3,s=ie(e,i)),"use"in d&&t(0,a=d.use),"$$scope"in d&&t(5,o=d.$$scope)},[a,c,l,s,u,o,r,h]}class BT extends Ke{constructor(e){super();We(this,e,HT,VT,je,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function jT(n){let e,t,i,s,r;const o=n[6].default,a=Te(o,n,n[5],null);let l=[n[3]],c={};for(let u=0;u<l.length;u+=1)c=F(c,l[u]);return{c(){e=te("li"),a&&a.c(),this.h()},l(u){e=ne(u,"LI",{});var h=ae(e);a&&a.l(h),h.forEach(O),this.h()},h(){se(e,c)},m(u,h){x(u,e,h),a&&a.m(e,null),n[7](e),i=!0,s||(r=[oe(t=et.call(null,e,n[0])),oe(n[2].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Ae(a,o,u,u[5],i?be(o,u[5],h,null):Se(u[5]),null),se(e,c=Ee(l,[h&8&&u[3]])),t&&Pe(t.update)&&h&1&&t.update.call(null,u[0])},i(u){i||(P(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&O(e),a&&a.d(u),n[7](null),s=!1,Me(r)}}}function qT(n,e,t){const i=["use","getElement"];let s=ie(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Qe(ke());let c;function u(){return c}function h(d){re[d?"unshift":"push"](()=>{c=d,t(1,c)})}return n.$$set=d=>{e=F(F({},e),Ge(d)),t(3,s=ie(e,i)),"use"in d&&t(0,a=d.use),"$$scope"in d&&t(5,o=d.$$scope)},[a,c,l,s,u,o,r,h]}class zT extends Ke{constructor(e){super();We(this,e,qT,jT,je,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function GT(n){let e,t,i,s,r;const o=n[6].default,a=Te(o,n,n[5],null);let l=[n[3]],c={};for(let u=0;u<l.length;u+=1)c=F(c,l[u]);return{c(){e=te("nav"),a&&a.c(),this.h()},l(u){e=ne(u,"NAV",{});var h=ae(e);a&&a.l(h),h.forEach(O),this.h()},h(){se(e,c)},m(u,h){x(u,e,h),a&&a.m(e,null),n[7](e),i=!0,s||(r=[oe(t=et.call(null,e,n[0])),oe(n[2].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Ae(a,o,u,u[5],i?be(o,u[5],h,null):Se(u[5]),null),se(e,c=Ee(l,[h&8&&u[3]])),t&&Pe(t.update)&&h&1&&t.update.call(null,u[0])},i(u){i||(P(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&O(e),a&&a.d(u),n[7](null),s=!1,Me(r)}}}function WT(n,e,t){const i=["use","getElement"];let s=ie(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Qe(ke());let c;function u(){return c}function h(d){re[d?"unshift":"push"](()=>{c=d,t(1,c)})}return n.$$set=d=>{e=F(F({},e),Ge(d)),t(3,s=ie(e,i)),"use"in d&&t(0,a=d.use),"$$scope"in d&&t(5,o=d.$$scope)},[a,c,l,s,u,o,r,h]}class KT extends Ke{constructor(e){super();We(this,e,WT,GT,je,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function xT(n){let e,t,i,s,r;const o=n[6].default,a=Te(o,n,n[5],null);let l=[n[3]],c={};for(let u=0;u<l.length;u+=1)c=F(c,l[u]);return{c(){e=te("span"),a&&a.c(),this.h()},l(u){e=ne(u,"SPAN",{});var h=ae(e);a&&a.l(h),h.forEach(O),this.h()},h(){se(e,c)},m(u,h){x(u,e,h),a&&a.m(e,null),n[7](e),i=!0,s||(r=[oe(t=et.call(null,e,n[0])),oe(n[2].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Ae(a,o,u,u[5],i?be(o,u[5],h,null):Se(u[5]),null),se(e,c=Ee(l,[h&8&&u[3]])),t&&Pe(t.update)&&h&1&&t.update.call(null,u[0])},i(u){i||(P(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&O(e),a&&a.d(u),n[7](null),s=!1,Me(r)}}}function XT(n,e,t){const i=["use","getElement"];let s=ie(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Qe(ke());let c;function u(){return c}function h(d){re[d?"unshift":"push"](()=>{c=d,t(1,c)})}return n.$$set=d=>{e=F(F({},e),Ge(d)),t(3,s=ie(e,i)),"use"in d&&t(0,a=d.use),"$$scope"in d&&t(5,o=d.$$scope)},[a,c,l,s,u,o,r,h]}class QT extends Ke{constructor(e){super();We(this,e,XT,xT,je,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function YT(n){let e,t,i,s,r;const o=n[6].default,a=Te(o,n,n[5],null);let l=[n[3]],c={};for(let u=0;u<l.length;u+=1)c=F(c,l[u]);return{c(){e=te("ul"),a&&a.c(),this.h()},l(u){e=ne(u,"UL",{});var h=ae(e);a&&a.l(h),h.forEach(O),this.h()},h(){se(e,c)},m(u,h){x(u,e,h),a&&a.m(e,null),n[7](e),i=!0,s||(r=[oe(t=et.call(null,e,n[0])),oe(n[2].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&Ae(a,o,u,u[5],i?be(o,u[5],h,null):Se(u[5]),null),se(e,c=Ee(l,[h&8&&u[3]])),t&&Pe(t.update)&&h&1&&t.update.call(null,u[0])},i(u){i||(P(a,u),i=!0)},o(u){j(a,u),i=!1},d(u){u&&O(e),a&&a.d(u),n[7](null),s=!1,Me(r)}}}function JT(n,e,t){const i=["use","getElement"];let s=ie(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Qe(ke());let c;function u(){return c}function h(d){re[d?"unshift":"push"](()=>{c=d,t(1,c)})}return n.$$set=d=>{e=F(F({},e),Ge(d)),t(3,s=ie(e,i)),"use"in d&&t(0,a=d.use),"$$scope"in d&&t(5,o=d.$$scope)},[a,c,l,s,u,o,r,h]}class ZT extends Ke{constructor(e){super();We(this,e,JT,YT,je,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}const Nf=CT,$T=LT,Mn=kf,eb=MT,tb=UT,nb=BT,ib=zT,sb=KT,Ti=QT,rb=ZT;function Mf(n){let e;return{c(){e=te("div"),this.h()},l(t){e=ne(t,"DIV",{class:!0}),ae(e).forEach(O),this.h()},h(){de(e,"class","mdc-button__touch")},m(t,i){x(t,e,i)},d(t){t&&O(e)}}}function ob(n){let e,t,i,s;const r=n[26].default,o=Te(r,n,n[28],null);let a=n[6]&&Mf();return{c(){e=te("div"),t=Ue(),o&&o.c(),a&&a.c(),i=ft(),this.h()},l(l){e=ne(l,"DIV",{class:!0}),ae(e).forEach(O),t=Ve(l),o&&o.l(l),a&&a.l(l),i=ft(),this.h()},h(){de(e,"class","mdc-button__ripple")},m(l,c){x(l,e,c),x(l,t,c),o&&o.m(l,c),a&&a.m(l,c),x(l,i,c),s=!0},p(l,c){o&&o.p&&(!s||c&268435456)&&Ae(o,r,l,l[28],s?be(r,l[28],c,null):Se(l[28]),null),l[6]?a||(a=Mf(),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null)},i(l){s||(P(o,l),s=!0)},o(l){j(o,l),s=!1},d(l){l&&O(e),l&&O(t),o&&o.d(l),a&&a.d(l),l&&O(i)}}}function ab(n){let e,t,i;const s=[{use:[[Nn,{ripple:n[3],unbounded:!1,color:n[4],disabled:!!n[22].disabled,addClass:n[18],removeClass:n[19],addStyle:n[20]}],n[16],...n[0]]},{class:ce(De({[n[1]]:!0,"mdc-button":!0,"mdc-button--raised":n[5]==="raised","mdc-button--unelevated":n[5]==="unelevated","mdc-button--outlined":n[5]==="outlined","smui-button--color-secondary":n[4]==="secondary","mdc-button--touch":n[6],"mdc-card__action":n[17]==="card:action","mdc-card__action--button":n[17]==="card:action","mdc-dialog__button":n[17]==="dialog:action","mdc-top-app-bar__navigation-icon":n[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":n[17]==="top-app-bar:action","mdc-snackbar__action":n[17]==="snackbar:actions","mdc-banner__secondary-action":n[17]==="banner"&&n[8],"mdc-banner__primary-action":n[17]==="banner"&&!n[8],"mdc-tooltip__action":n[17]==="tooltip:rich-actions"},n[11]))},{style:Object.entries(n[12]).map(Pf).concat([n[2]]).join(" ")},n[15],n[14],n[13],{href:n[7]},n[22]];var r=n[9];function o(a){let l={$$slots:{default:[ob]},$$scope:{ctx:a}};for(let c=0;c<s.length;c+=1)l=F(l,s[c]);return{props:l}}return r&&(e=new r(o(n)),n[27](e),e.$on("click",n[21])),{c(){e&&at(e.$$.fragment),t=ft()},l(a){e&&At(e.$$.fragment,a),t=ft()},m(a,l){e&&it(e,a,l),x(a,t,l),i=!0},p(a,[l]){const c=l&6289919?Ee(s,[l&6094873&&{use:[[Nn,{ripple:a[3],unbounded:!1,color:a[4],disabled:!!a[22].disabled,addClass:a[18],removeClass:a[19],addStyle:a[20]}],a[16],...a[0]]},l&133490&&{class:ce(De({[a[1]]:!0,"mdc-button":!0,"mdc-button--raised":a[5]==="raised","mdc-button--unelevated":a[5]==="unelevated","mdc-button--outlined":a[5]==="outlined","smui-button--color-secondary":a[4]==="secondary","mdc-button--touch":a[6],"mdc-card__action":a[17]==="card:action","mdc-card__action--button":a[17]==="card:action","mdc-dialog__button":a[17]==="dialog:action","mdc-top-app-bar__navigation-icon":a[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":a[17]==="top-app-bar:action","mdc-snackbar__action":a[17]==="snackbar:actions","mdc-banner__secondary-action":a[17]==="banner"&&a[8],"mdc-banner__primary-action":a[17]==="banner"&&!a[8],"mdc-tooltip__action":a[17]==="tooltip:rich-actions"},a[11]))},l&4100&&{style:Object.entries(a[12]).map(Pf).concat([a[2]]).join(" ")},l&32768&&nt(a[15]),l&16384&&nt(a[14]),l&8192&&nt(a[13]),l&128&&{href:a[7]},l&4194304&&nt(a[22])]):{};if(l&268435520&&(c.$$scope={dirty:l,ctx:a}),r!==(r=a[9])){if(e){Ft();const u=e;j(u.$$.fragment,1,0,()=>{st(u,1)}),Ut()}r?(e=new r(o(a)),a[27](e),e.$on("click",a[21]),at(e.$$.fragment),P(e.$$.fragment,1),it(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(a){i||(e&&P(e.$$.fragment,a),i=!0)},o(a){e&&j(e.$$.fragment,a),i=!1},d(a){n[27](null),a&&O(t),e&&st(e,a)}}}const Pf=([n,e])=>`${n}: ${e};`;function lb(n,e,t){let i,s,r;const o=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","getElement"];let a=ie(e,o),{$$slots:l={},$$scope:c}=e;const u=Qe(ke());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{ripple:m=!0}=e,{color:v="primary"}=e,{variant:g="text"}=e,{touch:_=!1}=e,{href:I=void 0}=e,{action:S="close"}=e,{defaultAction:w=!1}=e,{secondary:H=!1}=e,C,p={},y={},k=Pt("SMUI:button:context"),{component:E=I==null?$T:Nf}=e;_t("SMUI:label:context","button"),_t("SMUI:icon:context","button");function D(z){p[z]||t(11,p[z]=!0,p)}function J(z){(!(z in p)||p[z])&&t(11,p[z]=!1,p)}function T(z,G){y[z]!=G&&(G===""||G==null?(delete y[z],t(12,y)):t(12,y[z]=G,y))}function N(){k==="banner"&&Xe(L(),H?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function L(){return C.getElement()}function q(z){re[z?"unshift":"push"](()=>{C=z,t(10,C)})}return n.$$set=z=>{t(29,e=F(F({},e),Ge(z))),t(22,a=ie(e,o)),"use"in z&&t(0,h=z.use),"class"in z&&t(1,d=z.class),"style"in z&&t(2,f=z.style),"ripple"in z&&t(3,m=z.ripple),"color"in z&&t(4,v=z.color),"variant"in z&&t(5,g=z.variant),"touch"in z&&t(6,_=z.touch),"href"in z&&t(7,I=z.href),"action"in z&&t(23,S=z.action),"defaultAction"in z&&t(24,w=z.defaultAction),"secondary"in z&&t(8,H=z.secondary),"component"in z&&t(9,E=z.component),"$$scope"in z&&t(28,c=z.$$scope)},n.$$.update=()=>{t(15,i=k==="dialog:action"&&S!=null?{"data-mdc-dialog-action":S}:{action:e.action}),t(14,s=k==="dialog:action"&&w?{"data-mdc-dialog-button-default":""}:{default:e.default}),t(13,r=k==="banner"?{}:{secondary:e.secondary})},e=Ge(e),[h,d,f,m,v,g,_,I,H,E,C,p,y,r,s,i,u,k,D,J,T,N,a,S,w,L,l,q,c]}class FA extends Ke{constructor(e){super();We(this,e,lb,ab,je,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:23,defaultAction:24,secondary:8,component:9,getElement:25})}get getElement(){return this.$$.ctx[25]}}function ub(n){let e;const t=n[4].default,i=Te(t,n,n[3],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,[r]){i&&i.p&&(!e||r&8)&&Ae(i,t,s,s[3],e?be(t,s[3],r,null):Se(s[3]),null)},i(s){e||(P(i,s),e=!0)},o(s){j(i,s),e=!1},d(s){i&&i.d(s)}}}function cb(n,e,t){let i,{$$slots:s={},$$scope:r}=e,{key:o}=e,{value:a}=e;const l=up(a);return Km(n,l,c=>t(5,i=c)),_t(o,l),Bn(()=>{l.set(void 0)}),n.$$set=c=>{"key"in c&&t(1,o=c.key),"value"in c&&t(2,a=c.value),"$$scope"in c&&t(3,r=c.$$scope)},n.$$.update=()=>{n.$$.dirty&4&&Xm(l,i=a,i)},[l,o,a,r,s]}class Lo extends Ke{constructor(e){super();We(this,e,cb,ub,je,{key:1,value:2})}}/**
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
 */var hb={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
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
 */var db=function(n){hn(e,n);function e(t){var i=n.call(this,Je(Je({},e.defaultAdapter),t))||this;return i.shakeAnimationEndHandler=function(){i.handleShakeAnimationEnd()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return hb},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(t){var i=e.cssClasses.LABEL_SHAKE;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.float=function(t){var i=e.cssClasses,s=i.LABEL_FLOAT_ABOVE,r=i.LABEL_SHAKE;t?this.adapter.addClass(s):(this.adapter.removeClass(s),this.adapter.removeClass(r))},e.prototype.setRequired=function(t){var i=e.cssClasses.LABEL_REQUIRED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleShakeAnimationEnd=function(){var t=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(t)},e}(yn);/**
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
 */var bi={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
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
 */var fb=function(n){hn(e,n);function e(t){var i=n.call(this,Je(Je({},e.defaultAdapter),t))||this;return i.transitionEndHandler=function(s){i.handleTransitionEnd(s)},i}return Object.defineProperty(e,"cssClasses",{get:function(){return bi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(bi.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(bi.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(bi.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(t){var i=this.adapter.hasClass(bi.LINE_RIPPLE_DEACTIVATING);t.propertyName==="opacity"&&i&&(this.adapter.removeClass(bi.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(bi.LINE_RIPPLE_DEACTIVATING))},e}(yn);/**
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
 */var mb={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Ff={NOTCH_ELEMENT_PADDING:8},pb={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
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
 */var gb=function(n){hn(e,n);function e(t){return n.call(this,Je(Je({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return mb},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return pb},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ff},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(t){var i=e.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=Ff.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(i)},e.prototype.closeNotch=function(){var t=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(t),this.adapter.removeNotchWidthProperty()},e}(yn);/**
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
 */var hu={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},vb={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},Uf={LABEL_SCALE:.75},yb=["pattern","min","max","required","step","minlength","maxlength"],_b=["color","date","datetime-local","month","range","time","week"];/**
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
 */var Vf=["mousedown","touchstart"],Hf=["click","keydown"],Ib=function(n){hn(e,n);function e(t,i){i===void 0&&(i={});var s=n.call(this,Je(Je({},e.defaultAdapter),t))||this;return s.isFocused=!1,s.receivedUserInput=!1,s.valid=!0,s.useNativeValidation=!0,s.validateOnValueChange=!0,s.helperText=i.helperText,s.characterCounter=i.characterCounter,s.leadingIcon=i.leadingIcon,s.trailingIcon=i.trailingIcon,s.inputFocusHandler=function(){s.activateFocus()},s.inputBlurHandler=function(){s.deactivateFocus()},s.inputInputHandler=function(){s.handleInput()},s.setPointerXOffset=function(r){s.setTransformOrigin(r)},s.textFieldInteractionHandler=function(){s.handleTextFieldInteraction()},s.validationAttributeChangeHandler=function(r){s.handleValidationAttributeChange(r)},s}return Object.defineProperty(e,"cssClasses",{get:function(){return vb},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return hu},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Uf},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return _b.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,i,s,r;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var o=An(Vf),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.registerInputInteractionHandler(l,this.setPointerXOffset)}}catch(h){t={error:h}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(t)throw t.error}}try{for(var c=An(Hf),u=c.next();!u.done;u=c.next()){var l=u.value;this.adapter.registerTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(h){s={error:h}}finally{try{u&&!u.done&&(r=c.return)&&r.call(c)}finally{if(s)throw s.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var t,i,s,r;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var o=An(Vf),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.deregisterInputInteractionHandler(l,this.setPointerXOffset)}}catch(h){t={error:h}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(t)throw t.error}}try{for(var c=An(Hf),u=c.next();!u.done;u=c.next()){var l=u.value;this.adapter.deregisterTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(h){s={error:h}}finally{try{u&&!u.done&&(r=c.return)&&r.call(c)}finally{if(s)throw s.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(t){var i=this;t.some(function(s){return yb.indexOf(s)>-1?(i.styleValidity(!0),i.adapter.setLabelRequired(i.getNativeInput().required),!0):!1}),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(t){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(t){var i=this.adapter.getLabelWidth()*Uf.LABEL_SCALE;this.adapter.notchOutline(i)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(t){if(!(this.isDisabled()||this.adapter.hasOutline())){var i=t.touches,s=i?i[0]:t,r=s.target.getBoundingClientRect(),o=s.clientX-r.left;this.adapter.setLineRippleTransformOrigin(o)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var i=this.isValid();this.styleValidity(i)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var i=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(i)},e.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},e.prototype.setcharacterCounter=function(t){if(!!this.characterCounter){var i=this.getNativeInput().maxLength;if(i===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,i)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(t){var i=e.cssClasses.INVALID;if(t?this.adapter.removeClass(i):this.adapter.addClass(i),this.helperText){this.helperText.setValidity(t);var s=this.helperText.isValidation();if(!s)return;var r=this.helperText.isVisible(),o=this.helperText.getId();r&&o?this.adapter.setInputAttr(hu.ARIA_DESCRIBEDBY,o):this.adapter.removeInputAttr(hu.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(t){var i=e.cssClasses.FOCUSED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.styleDisabled=function(t){var i=e.cssClasses,s=i.DISABLED,r=i.INVALID;t?(this.adapter.addClass(s),this.adapter.removeClass(r)):this.adapter.removeClass(s),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},e.prototype.styleFloating=function(t){var i=e.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.getNativeInput=function(){var t=this.adapter?this.adapter.getNativeInput():null;return t||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(yn);/**
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
 */var In={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},Pn={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+In.ROOT};/**
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
 */var Eb=function(n){hn(e,n);function e(t){return n.call(this,Je(Je({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return In},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Pn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(Pn.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.isPersistent=function(){return this.adapter.hasClass(In.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(t){t?this.adapter.addClass(In.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(In.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(In.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(t){t?this.adapter.addClass(In.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(In.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(Pn.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var i=this.adapter.hasClass(In.HELPER_TEXT_PERSISTENT),s=this.adapter.hasClass(In.HELPER_TEXT_VALIDATION_MSG),r=s&&!t;r?(this.showToScreenReader(),this.adapter.getAttr(Pn.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(Pn.ROLE,"alert")):this.adapter.removeAttr(Pn.ROLE),!i&&!r&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(Pn.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var t=this;this.adapter.removeAttr(Pn.ROLE),requestAnimationFrame(function(){t.adapter.setAttr(Pn.ROLE,"alert")})},e}(yn);function Tb(n){let e,t,i,s,r,o,a,l;const c=n[22].default,u=Te(c,n,n[21],null);let h=[{class:t=ce(De({[n[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":n[0],"mdc-floating-label--required":n[1]},n[8]))},{style:i=Object.entries(n[9]).map(jf).concat([n[4]]).join(" ")},{for:s=n[5]||(n[11]?n[11].id:void 0)},n[12]],d={};for(let f=0;f<h.length;f+=1)d=F(d,h[f]);return{c(){e=te("label"),u&&u.c(),this.h()},l(f){e=ne(f,"LABEL",{class:!0,style:!0,for:!0});var m=ae(e);u&&u.l(m),m.forEach(O),this.h()},h(){se(e,d)},m(f,m){x(f,e,m),u&&u.m(e,null),n[24](e),o=!0,a||(l=[oe(r=et.call(null,e,n[2])),oe(n[10].call(null,e))],a=!0)},p(f,m){u&&u.p&&(!o||m&2097152)&&Ae(u,c,f,f[21],o?be(c,f[21],m,null):Se(f[21]),null),se(e,d=Ee(h,[(!o||m&267&&t!==(t=ce(De({[f[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":f[0],"mdc-floating-label--required":f[1]},f[8]))))&&{class:t},(!o||m&528&&i!==(i=Object.entries(f[9]).map(jf).concat([f[4]]).join(" ")))&&{style:i},(!o||m&32&&s!==(s=f[5]||(f[11]?f[11].id:void 0)))&&{for:s},m&4096&&f[12]])),r&&Pe(r.update)&&m&4&&r.update.call(null,f[2])},i(f){o||(P(u,f),o=!0)},o(f){j(u,f),o=!1},d(f){f&&O(e),u&&u.d(f),n[24](null),a=!1,Me(l)}}}function bb(n){let e,t,i,s,r,o,a;const l=n[22].default,c=Te(l,n,n[21],null);let u=[{class:t=ce(De({[n[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":n[0],"mdc-floating-label--required":n[1]},n[8]))},{style:i=Object.entries(n[9]).map(Bf).concat([n[4]]).join(" ")},n[12]],h={};for(let d=0;d<u.length;d+=1)h=F(h,u[d]);return{c(){e=te("span"),c&&c.c(),this.h()},l(d){e=ne(d,"SPAN",{class:!0,style:!0});var f=ae(e);c&&c.l(f),f.forEach(O),this.h()},h(){se(e,h)},m(d,f){x(d,e,f),c&&c.m(e,null),n[23](e),r=!0,o||(a=[oe(s=et.call(null,e,n[2])),oe(n[10].call(null,e))],o=!0)},p(d,f){c&&c.p&&(!r||f&2097152)&&Ae(c,l,d,d[21],r?be(l,d[21],f,null):Se(d[21]),null),se(e,h=Ee(u,[(!r||f&267&&t!==(t=ce(De({[d[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":d[0],"mdc-floating-label--required":d[1]},d[8]))))&&{class:t},(!r||f&528&&i!==(i=Object.entries(d[9]).map(Bf).concat([d[4]]).join(" ")))&&{style:i},f&4096&&d[12]])),s&&Pe(s.update)&&f&4&&s.update.call(null,d[2])},i(d){r||(P(c,d),r=!0)},o(d){j(c,d),r=!1},d(d){d&&O(e),c&&c.d(d),n[23](null),o=!1,Me(a)}}}function Ab(n){let e,t,i,s;const r=[bb,Tb],o=[];function a(l,c){return l[6]?0:1}return e=a(n),t=o[e]=r[e](n),{c(){t.c(),i=ft()},l(l){t.l(l),i=ft()},m(l,c){o[e].m(l,c),x(l,i,c),s=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(Ft(),j(o[u],1,1,()=>{o[u]=null}),Ut(),t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),P(t,1),t.m(i.parentNode,i))},i(l){s||(P(t),s=!0)},o(l){j(t),s=!1},d(l){o[e].d(l),l&&O(i)}}}const Bf=([n,e])=>`${n}: ${e};`,jf=([n,e])=>`${n}: ${e};`;function Sb(n,e,t){const i=["use","class","style","for","floatAbove","required","wrapped","shake","float","setRequired","getWidth","getElement"];let s=ie(e,i),{$$slots:r={},$$scope:o}=e;var a;const l=Qe(ke());let{use:c=[]}=e,{class:u=""}=e,{style:h=""}=e,{for:d=void 0}=e,{floatAbove:f=!1}=e,{required:m=!1}=e,{wrapped:v=!1}=e,g,_,I={},S={},w=(a=Pt("SMUI:generic:input:props"))!==null&&a!==void 0?a:{},H=f,C=m;nn(()=>{t(18,_=new db({addClass:p,removeClass:y,getWidth:()=>{var ve,Y;const Ne=L(),Be=Ne.cloneNode(!0);(ve=Ne.parentNode)===null||ve===void 0||ve.appendChild(Be),Be.classList.add("smui-floating-label--remove-transition"),Be.classList.add("smui-floating-label--force-size"),Be.classList.remove("mdc-floating-label--float-above");const tt=Be.scrollWidth;return(Y=Ne.parentNode)===null||Y===void 0||Y.removeChild(Be),tt},registerInteractionHandler:(ve,Y)=>L().addEventListener(ve,Y),deregisterInteractionHandler:(ve,Y)=>L().removeEventListener(ve,Y)}));const G={get element(){return L()},addStyle:k,removeStyle:E};return Xe(g,"SMUIFloatingLabel:mount",G),_.init(),()=>{Xe(g,"SMUIFloatingLabel:unmount",G),_.destroy()}});function p(G){I[G]||t(8,I[G]=!0,I)}function y(G){(!(G in I)||I[G])&&t(8,I[G]=!1,I)}function k(G,ve){S[G]!=ve&&(ve===""||ve==null?(delete S[G],t(9,S)):t(9,S[G]=ve,S))}function E(G){G in S&&(delete S[G],t(9,S))}function D(G){_.shake(G)}function J(G){t(0,f=G)}function T(G){t(1,m=G)}function N(){return _.getWidth()}function L(){return g}function q(G){re[G?"unshift":"push"](()=>{g=G,t(7,g)})}function z(G){re[G?"unshift":"push"](()=>{g=G,t(7,g)})}return n.$$set=G=>{e=F(F({},e),Ge(G)),t(12,s=ie(e,i)),"use"in G&&t(2,c=G.use),"class"in G&&t(3,u=G.class),"style"in G&&t(4,h=G.style),"for"in G&&t(5,d=G.for),"floatAbove"in G&&t(0,f=G.floatAbove),"required"in G&&t(1,m=G.required),"wrapped"in G&&t(6,v=G.wrapped),"$$scope"in G&&t(21,o=G.$$scope)},n.$$.update=()=>{n.$$.dirty&786433&&_&&H!==f&&(t(19,H=f),_.float(f)),n.$$.dirty&1310722&&_&&C!==m&&(t(20,C=m),_.setRequired(m))},[f,m,c,u,h,d,v,g,I,S,l,w,s,D,J,T,N,L,_,H,C,o,r,q,z]}class qf extends Ke{constructor(e){super();We(this,e,Sb,Ab,je,{use:2,class:3,style:4,for:5,floatAbove:0,required:1,wrapped:6,shake:13,float:14,setRequired:15,getWidth:16,getElement:17})}get shake(){return this.$$.ctx[13]}get float(){return this.$$.ctx[14]}get setRequired(){return this.$$.ctx[15]}get getWidth(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}function Cb(n){let e,t,i,s,r,o,a=[{class:t=ce(De({[n[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":n[3]},n[5]))},{style:i=Object.entries(n[6]).map(zf).concat([n[2]]).join(" ")},n[8]],l={};for(let c=0;c<a.length;c+=1)l=F(l,a[c]);return{c(){e=te("div"),this.h()},l(c){e=ne(c,"DIV",{class:!0,style:!0}),ae(e).forEach(O),this.h()},h(){se(e,l)},m(c,u){x(c,e,u),n[13](e),r||(o=[oe(s=et.call(null,e,n[0])),oe(n[7].call(null,e))],r=!0)},p(c,[u]){se(e,l=Ee(a,[u&42&&t!==(t=ce(De({[c[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":c[3]},c[5])))&&{class:t},u&68&&i!==(i=Object.entries(c[6]).map(zf).concat([c[2]]).join(" "))&&{style:i},u&256&&c[8]])),s&&Pe(s.update)&&u&1&&s.update.call(null,c[0])},i:Lt,o:Lt,d(c){c&&O(e),n[13](null),r=!1,Me(o)}}}const zf=([n,e])=>`${n}: ${e};`;function wb(n,e,t){const i=["use","class","style","active","activate","deactivate","setRippleCenter","getElement"];let s=ie(e,i);const r=Qe(ke());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{active:c=!1}=e,u,h,d={},f={};nn(()=>(h=new fb({addClass:v,removeClass:g,hasClass:m,setStyle:_,registerEventHandler:(p,y)=>H().addEventListener(p,y),deregisterEventHandler:(p,y)=>H().removeEventListener(p,y)}),h.init(),()=>{h.destroy()}));function m(p){return p in d?d[p]:H().classList.contains(p)}function v(p){d[p]||t(5,d[p]=!0,d)}function g(p){(!(p in d)||d[p])&&t(5,d[p]=!1,d)}function _(p,y){f[p]!=y&&(y===""||y==null?(delete f[p],t(6,f)):t(6,f[p]=y,f))}function I(){h.activate()}function S(){h.deactivate()}function w(p){h.setRippleCenter(p)}function H(){return u}function C(p){re[p?"unshift":"push"](()=>{u=p,t(4,u)})}return n.$$set=p=>{e=F(F({},e),Ge(p)),t(8,s=ie(e,i)),"use"in p&&t(0,o=p.use),"class"in p&&t(1,a=p.class),"style"in p&&t(2,l=p.style),"active"in p&&t(3,c=p.active)},[o,a,l,c,u,d,f,r,s,I,S,w,H,C]}class Rb extends Ke{constructor(e){super();We(this,e,wb,Cb,je,{use:0,class:1,style:2,active:3,activate:9,deactivate:10,setRippleCenter:11,getElement:12})}get activate(){return this.$$.ctx[9]}get deactivate(){return this.$$.ctx[10]}get setRippleCenter(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function Gf(n){let e,t,i;const s=n[14].default,r=Te(s,n,n[13],null);return{c(){e=te("div"),r&&r.c(),this.h()},l(o){e=ne(o,"DIV",{class:!0,style:!0});var a=ae(e);r&&r.l(a),a.forEach(O),this.h()},h(){de(e,"class","mdc-notched-outline__notch"),de(e,"style",t=Object.entries(n[7]).map(Wf).join(" "))},m(o,a){x(o,e,a),r&&r.m(e,null),i=!0},p(o,a){r&&r.p&&(!i||a&8192)&&Ae(r,s,o,o[13],i?be(s,o[13],a,null):Se(o[13]),null),(!i||a&128&&t!==(t=Object.entries(o[7]).map(Wf).join(" ")))&&de(e,"style",t)},i(o){i||(P(r,o),i=!0)},o(o){j(r,o),i=!1},d(o){o&&O(e),r&&r.d(o)}}}function Lb(n){let e,t,i,s,r,o,a,l,c,u,h=!n[3]&&Gf(n),d=[{class:o=ce(De({[n[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":n[2],"mdc-notched-outline--no-label":n[3]},n[6]))},n[9]],f={};for(let m=0;m<d.length;m+=1)f=F(f,d[m]);return{c(){e=te("div"),t=te("div"),i=Ue(),h&&h.c(),s=Ue(),r=te("div"),this.h()},l(m){e=ne(m,"DIV",{class:!0});var v=ae(e);t=ne(v,"DIV",{class:!0}),ae(t).forEach(O),i=Ve(v),h&&h.l(v),s=Ve(v),r=ne(v,"DIV",{class:!0}),ae(r).forEach(O),v.forEach(O),this.h()},h(){de(t,"class","mdc-notched-outline__leading"),de(r,"class","mdc-notched-outline__trailing"),se(e,f)},m(m,v){x(m,e,v),Ie(e,t),Ie(e,i),h&&h.m(e,null),Ie(e,s),Ie(e,r),n[15](e),l=!0,c||(u=[oe(a=et.call(null,e,n[0])),oe(n[8].call(null,e)),Ce(e,"SMUIFloatingLabel:mount",n[16]),Ce(e,"SMUIFloatingLabel:unmount",n[17])],c=!0)},p(m,[v]){m[3]?h&&(Ft(),j(h,1,1,()=>{h=null}),Ut()):h?(h.p(m,v),v&8&&P(h,1)):(h=Gf(m),h.c(),P(h,1),h.m(e,s)),se(e,f=Ee(d,[(!l||v&78&&o!==(o=ce(De({[m[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":m[2],"mdc-notched-outline--no-label":m[3]},m[6]))))&&{class:o},v&512&&m[9]])),a&&Pe(a.update)&&v&1&&a.update.call(null,m[0])},i(m){l||(P(h),l=!0)},o(m){j(h),l=!1},d(m){m&&O(e),h&&h.d(),n[15](null),c=!1,Me(u)}}}const Wf=([n,e])=>`${n}: ${e};`;function Ob(n,e,t){const i=["use","class","notched","noLabel","notch","closeNotch","getElement"];let s=ie(e,i),{$$slots:r={},$$scope:o}=e;const a=Qe(ke());let{use:l=[]}=e,{class:c=""}=e,{notched:u=!1}=e,{noLabel:h=!1}=e,d,f,m,v={},g={};nn(()=>(f=new gb({addClass:_,removeClass:I,setNotchWidthProperty:D=>S("width",D+"px"),removeNotchWidthProperty:()=>w("width")}),f.init(),()=>{f.destroy()}));function _(D){v[D]||t(6,v[D]=!0,v)}function I(D){(!(D in v)||v[D])&&t(6,v[D]=!1,v)}function S(D,J){g[D]!=J&&(J===""||J==null?(delete g[D],t(7,g)):t(7,g[D]=J,g))}function w(D){D in g&&(delete g[D],t(7,g))}function H(D){f.notch(D)}function C(){f.closeNotch()}function p(){return d}function y(D){re[D?"unshift":"push"](()=>{d=D,t(5,d)})}const k=D=>t(4,m=D.detail),E=()=>t(4,m=void 0);return n.$$set=D=>{e=F(F({},e),Ge(D)),t(9,s=ie(e,i)),"use"in D&&t(0,l=D.use),"class"in D&&t(1,c=D.class),"notched"in D&&t(2,u=D.notched),"noLabel"in D&&t(3,h=D.noLabel),"$$scope"in D&&t(13,o=D.$$scope)},n.$$.update=()=>{n.$$.dirty&16&&(m?(m.addStyle("transition-duration","0s"),_("mdc-notched-outline--upgraded"),requestAnimationFrame(()=>{m&&m.removeStyle("transition-duration")})):I("mdc-notched-outline--upgraded"))},[l,c,u,h,m,d,v,g,a,s,H,C,p,o,r,y,k,E]}class Db extends Ke{constructor(e){super();We(this,e,Ob,Lb,je,{use:0,class:1,notched:2,noLabel:3,notch:10,closeNotch:11,getElement:12})}get notch(){return this.$$.ctx[10]}get closeNotch(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function kb(n){let e;const t=n[10].default,i=Te(t,n,n[12],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&4096)&&Ae(i,t,s,s[12],e?be(t,s[12],r,null):Se(s[12]),null)},i(s){e||(P(i,s),e=!0)},o(s){j(i,s),e=!1},d(s){i&&i.d(s)}}}function Nb(n){let e,t,i;const s=[{use:[n[7],...n[0]]},{class:ce(De({[n[1]]:!0,[n[5]]:!0},n[4]))},n[6],n[8]];var r=n[2];function o(a){let l={$$slots:{default:[kb]},$$scope:{ctx:a}};for(let c=0;c<s.length;c+=1)l=F(l,s[c]);return{props:l}}return r&&(e=new r(o(n)),n[11](e)),{c(){e&&at(e.$$.fragment),t=ft()},l(a){e&&At(e.$$.fragment,a),t=ft()},m(a,l){e&&it(e,a,l),x(a,t,l),i=!0},p(a,[l]){const c=l&499?Ee(s,[l&129&&{use:[a[7],...a[0]]},l&50&&{class:ce(De({[a[1]]:!0,[a[5]]:!0},a[4]))},l&64&&nt(a[6]),l&256&&nt(a[8])]):{};if(l&4096&&(c.$$scope={dirty:l,ctx:a}),r!==(r=a[2])){if(e){Ft();const u=e;j(u.$$.fragment,1,0,()=>{st(u,1)}),Ut()}r?(e=new r(o(a)),a[11](e),at(e.$$.fragment),P(e.$$.fragment,1),it(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(a){i||(e&&P(e.$$.fragment,a),i=!0)},o(a){e&&j(e.$$.fragment,a),i=!1},d(a){n[11](null),a&&O(t),e&&st(e,a)}}}const ii={component:kf,class:"",classMap:{},contexts:{},props:{}};function Mb(n,e,t){const i=["use","class","component","getElement"];let s=ie(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e,{class:l=""}=e,c;const u=ii.class,h={},d=[],f=ii.contexts,m=ii.props;let{component:v=ii.component}=e;Object.entries(ii.classMap).forEach(([S,w])=>{const H=Pt(w);H&&"subscribe"in H&&d.push(H.subscribe(C=>{t(4,h[S]=C,h)}))});const g=Qe(ke());for(let S in f)f.hasOwnProperty(S)&&_t(S,f[S]);Bn(()=>{for(const S of d)S()});function _(){return c.getElement()}function I(S){re[S?"unshift":"push"](()=>{c=S,t(3,c)})}return n.$$set=S=>{e=F(F({},e),Ge(S)),t(8,s=ie(e,i)),"use"in S&&t(0,a=S.use),"class"in S&&t(1,l=S.class),"component"in S&&t(2,v=S.component),"$$scope"in S&&t(12,o=S.$$scope)},[a,l,v,c,h,u,m,g,s,_,r,I,o]}class Pb extends Ke{constructor(e){super();We(this,e,Mb,Nb,je,{use:0,class:1,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const Kf=Object.assign({},ii);function Et(n){return new Proxy(Pb,{construct:function(e,t){return Object.assign(ii,Kf,n),new e(...t)},get:function(e,t){return Object.assign(ii,Kf,n),e[t]}})}var Fb=Et({class:"mdc-text-field-helper-line",component:Mn}),Ub=Et({class:"mdc-text-field__affix mdc-text-field__affix--prefix",component:Ti}),Vb=Et({class:"mdc-text-field__affix mdc-text-field__affix--suffix",component:Ti});function Hb(n){let e,t,i,s,r,o=[{class:t=ce({[n[1]]:!0,"mdc-text-field__input":!0})},{type:n[2]},{placeholder:n[3]},n[4],n[6],n[10]],a={};for(let l=0;l<o.length;l+=1)a=F(a,o[l]);return{c(){e=te("input"),this.h()},l(l){e=ne(l,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){se(e,a)},m(l,c){x(l,e,c),e.autofocus&&e.focus(),n[25](e),s||(r=[oe(i=et.call(null,e,n[0])),oe(n[7].call(null,e)),Ce(e,"input",n[26]),Ce(e,"change",n[9]),Ce(e,"blur",n[23]),Ce(e,"focus",n[24])],s=!0)},p(l,[c]){se(e,a=Ee(o,[c&2&&t!==(t=ce({[l[1]]:!0,"mdc-text-field__input":!0}))&&{class:t},c&4&&{type:l[2]},c&8&&{placeholder:l[3]},c&16&&l[4],c&64&&l[6],c&1024&&l[10]])),i&&Pe(i.update)&&c&1&&i.update.call(null,l[0])},i:Lt,o:Lt,d(l){l&&O(e),n[25](null),s=!1,Me(r)}}}function Bb(n){if(n===""){const e=new Number(Number.NaN);return e.length=0,e}return+n}function jb(n,e,t){const i=["use","class","type","placeholder","value","files","dirty","invalid","updateInvalid","emptyValueNull","emptyValueUndefined","getAttr","addAttr","removeAttr","focus","getElement"];let s=ie(e,i);const r=Qe(ke());let{use:o=[]}=e,{class:a=""}=e,{type:l="text"}=e,{placeholder:c=" "}=e,{value:u=""}=e,{files:h=null}=e,{dirty:d=!1}=e,{invalid:f=!1}=e,{updateInvalid:m=!0}=e,{emptyValueNull:v=u===null}=e,{emptyValueUndefined:g=u===void 0}=e,_,I={},S={};nn(()=>{m&&t(14,f=_.matches(":invalid"))});function w(L){if(l==="file"){t(12,h=L.currentTarget.files);return}if(L.currentTarget.value===""&&v){t(11,u=null);return}if(L.currentTarget.value===""&&g){t(11,u=void 0);return}switch(l){case"number":case"range":t(11,u=Bb(L.currentTarget.value));break;default:t(11,u=L.currentTarget.value);break}}function H(L){(l==="file"||l==="range")&&w(L),t(13,d=!0),m&&t(14,f=_.matches(":invalid"))}function C(L){var q;return L in I?(q=I[L])!==null&&q!==void 0?q:null:E().getAttribute(L)}function p(L,q){I[L]!==q&&t(6,I[L]=q,I)}function y(L){(!(L in I)||I[L]!=null)&&t(6,I[L]=void 0,I)}function k(){E().focus()}function E(){return _}function D(L){pn.call(this,n,L)}function J(L){pn.call(this,n,L)}function T(L){re[L?"unshift":"push"](()=>{_=L,t(5,_)})}const N=L=>l!=="file"&&w(L);return n.$$set=L=>{e=F(F({},e),Ge(L)),t(10,s=ie(e,i)),"use"in L&&t(0,o=L.use),"class"in L&&t(1,a=L.class),"type"in L&&t(2,l=L.type),"placeholder"in L&&t(3,c=L.placeholder),"value"in L&&t(11,u=L.value),"files"in L&&t(12,h=L.files),"dirty"in L&&t(13,d=L.dirty),"invalid"in L&&t(14,f=L.invalid),"updateInvalid"in L&&t(15,m=L.updateInvalid),"emptyValueNull"in L&&t(16,v=L.emptyValueNull),"emptyValueUndefined"in L&&t(17,g=L.emptyValueUndefined)},n.$$.update=()=>{n.$$.dirty&2068&&(l==="file"?(delete S.value,t(4,S),t(2,l),t(11,u)):t(4,S.value=u==null?"":u,S))},[o,a,l,c,S,_,I,r,w,H,s,u,h,d,f,m,v,g,C,p,y,k,E,D,J,T,N]}class qb extends Ke{constructor(e){super();We(this,e,jb,Hb,je,{use:0,class:1,type:2,placeholder:3,value:11,files:12,dirty:13,invalid:14,updateInvalid:15,emptyValueNull:16,emptyValueUndefined:17,getAttr:18,addAttr:19,removeAttr:20,focus:21,getElement:22})}get getAttr(){return this.$$.ctx[18]}get addAttr(){return this.$$.ctx[19]}get removeAttr(){return this.$$.ctx[20]}get focus(){return this.$$.ctx[21]}get getElement(){return this.$$.ctx[22]}}function zb(n){let e,t,i,s,r,o,a=[{class:t=ce({[n[2]]:!0,"mdc-text-field__input":!0})},{style:i=`${n[4]?"":"resize: none; "}${n[3]}`},n[6],n[9]],l={};for(let c=0;c<a.length;c+=1)l=F(l,a[c]);return{c(){e=te("textarea"),this.h()},l(c){e=ne(c,"TEXTAREA",{class:!0,style:!0}),ae(e).forEach(O),this.h()},h(){se(e,l)},m(c,u){x(c,e,u),e.autofocus&&e.focus(),n[20](e),Hn(e,n[0]),r||(o=[oe(s=et.call(null,e,n[1])),oe(n[7].call(null,e)),Ce(e,"change",n[8]),Ce(e,"blur",n[18]),Ce(e,"focus",n[19]),Ce(e,"input",n[21])],r=!0)},p(c,[u]){se(e,l=Ee(a,[u&4&&t!==(t=ce({[c[2]]:!0,"mdc-text-field__input":!0}))&&{class:t},u&24&&i!==(i=`${c[4]?"":"resize: none; "}${c[3]}`)&&{style:i},u&64&&c[6],u&512&&c[9]])),s&&Pe(s.update)&&u&2&&s.update.call(null,c[1]),u&1&&Hn(e,c[0])},i:Lt,o:Lt,d(c){c&&O(e),n[20](null),r=!1,Me(o)}}}function Gb(n,e,t){const i=["use","class","style","value","dirty","invalid","updateInvalid","resizable","getAttr","addAttr","removeAttr","focus","getElement"];let s=ie(e,i);const r=Qe(ke());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{value:c=""}=e,{dirty:u=!1}=e,{invalid:h=!1}=e,{updateInvalid:d=!0}=e,{resizable:f=!0}=e,m,v={};nn(()=>{d&&t(11,h=m.matches(":invalid"))});function g(){t(10,u=!0),d&&t(11,h=m.matches(":invalid"))}function _(E){var D;return E in v?(D=v[E])!==null&&D!==void 0?D:null:H().getAttribute(E)}function I(E,D){v[E]!==D&&t(6,v[E]=D,v)}function S(E){(!(E in v)||v[E]!=null)&&t(6,v[E]=void 0,v)}function w(){H().focus()}function H(){return m}function C(E){pn.call(this,n,E)}function p(E){pn.call(this,n,E)}function y(E){re[E?"unshift":"push"](()=>{m=E,t(5,m)})}function k(){c=this.value,t(0,c)}return n.$$set=E=>{e=F(F({},e),Ge(E)),t(9,s=ie(e,i)),"use"in E&&t(1,o=E.use),"class"in E&&t(2,a=E.class),"style"in E&&t(3,l=E.style),"value"in E&&t(0,c=E.value),"dirty"in E&&t(10,u=E.dirty),"invalid"in E&&t(11,h=E.invalid),"updateInvalid"in E&&t(12,d=E.updateInvalid),"resizable"in E&&t(4,f=E.resizable)},[c,o,a,l,f,m,v,r,g,s,u,h,d,_,I,S,w,H,C,p,y,k]}class Wb extends Ke{constructor(e){super();We(this,e,Gb,zb,je,{use:1,class:2,style:3,value:0,dirty:10,invalid:11,updateInvalid:12,resizable:4,getAttr:13,addAttr:14,removeAttr:15,focus:16,getElement:17})}get getAttr(){return this.$$.ctx[13]}get addAttr(){return this.$$.ctx[14]}get removeAttr(){return this.$$.ctx[15]}get focus(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}const Kb=n=>({}),xf=n=>({}),xb=n=>({}),Xf=n=>({}),Xb=n=>({}),Qf=n=>({}),Qb=n=>({}),Yf=n=>({}),Yb=n=>({}),Jf=n=>({}),Jb=n=>({}),Zf=n=>({}),Zb=n=>({}),$f=n=>({}),$b=n=>({}),em=n=>({}),e0=n=>({}),tm=n=>({}),t0=n=>({}),nm=n=>({}),n0=n=>({}),im=n=>({}),i0=n=>({}),sm=n=>({});function s0(n){let e,t,i,s,r,o,a,l,c,u,h,d,f,m;const v=n[50].label,g=Te(v,n,n[89],Jf);i=new Lo({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[o0]},$$scope:{ctx:n}}});const _=n[50].default,I=Te(_,n,n[89],null);o=new Lo({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[a0]},$$scope:{ctx:n}}});const S=n[50].ripple,w=Te(S,n,n[89],Xf);let H=[{class:l=ce(De({[n[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":n[12],"mdc-text-field--textarea":n[14],"mdc-text-field--filled":n[15]==="filled","mdc-text-field--outlined":n[15]==="outlined","smui-text-field--standard":n[15]==="standard"&&!n[14],"mdc-text-field--no-label":n[16]||!n[41].label,"mdc-text-field--with-leading-icon":n[41].leadingIcon,"mdc-text-field--with-trailing-icon":n[41].trailingIcon,"mdc-text-field--invalid":n[1]},n[25]))},{style:c=Object.entries(n[26]).map(pm).concat([n[10]]).join(" ")},is(n[42],["input$","label$","ripple$","outline$","helperLine$"])],C={};for(let p=0;p<H.length;p+=1)C=F(C,H[p]);return{c(){e=te("div"),g&&g.c(),t=Ue(),at(i.$$.fragment),s=Ue(),I&&I.c(),r=Ue(),at(o.$$.fragment),a=Ue(),w&&w.c(),this.h()},l(p){e=ne(p,"DIV",{class:!0,style:!0});var y=ae(e);g&&g.l(y),t=Ve(y),At(i.$$.fragment,y),s=Ve(y),I&&I.l(y),r=Ve(y),At(o.$$.fragment,y),a=Ve(y),w&&w.l(y),y.forEach(O),this.h()},h(){se(e,C)},m(p,y){x(p,e,y),g&&g.m(e,null),Ie(e,t),it(i,e,null),Ie(e,s),I&&I.m(e,null),Ie(e,r),it(o,e,null),Ie(e,a),w&&w.m(e,null),n[79](e),d=!0,f||(m=[oe(u=Nn.call(null,e,{ripple:n[11],unbounded:!1,addClass:n[38],removeClass:n[39],addStyle:n[40]})),oe(h=et.call(null,e,n[8])),oe(n[34].call(null,e)),Ce(e,"SMUITextfieldLeadingIcon:mount",n[80]),Ce(e,"SMUITextfieldLeadingIcon:unmount",n[81]),Ce(e,"SMUITextfieldTrailingIcon:mount",n[82]),Ce(e,"SMUITextfieldTrailingIcon:unmount",n[83])],f=!0)},p(p,y){g&&g.p&&(!d||y[2]&134217728)&&Ae(g,v,p,p[89],d?be(v,p[89],y,Yb):Se(p[89]),Jf);const k={};y[2]&134217728&&(k.$$scope={dirty:y,ctx:p}),i.$set(k),I&&I.p&&(!d||y[2]&134217728)&&Ae(I,_,p,p[89],d?be(_,p[89],y,null):Se(p[89]),null);const E={};y[2]&134217728&&(E.$$scope={dirty:y,ctx:p}),o.$set(E),w&&w.p&&(!d||y[2]&134217728)&&Ae(w,S,p,p[89],d?be(S,p[89],y,xb):Se(p[89]),Xf),se(e,C=Ee(H,[(!d||y[0]&33673730|y[1]&1024&&l!==(l=ce(De({[p[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":p[12],"mdc-text-field--textarea":p[14],"mdc-text-field--filled":p[15]==="filled","mdc-text-field--outlined":p[15]==="outlined","smui-text-field--standard":p[15]==="standard"&&!p[14],"mdc-text-field--no-label":p[16]||!p[41].label,"mdc-text-field--with-leading-icon":p[41].leadingIcon,"mdc-text-field--with-trailing-icon":p[41].trailingIcon,"mdc-text-field--invalid":p[1]},p[25]))))&&{class:l},(!d||y[0]&67109888&&c!==(c=Object.entries(p[26]).map(pm).concat([p[10]]).join(" ")))&&{style:c},y[1]&2048&&is(p[42],["input$","label$","ripple$","outline$","helperLine$"])])),u&&Pe(u.update)&&y[0]&2048&&u.update.call(null,{ripple:p[11],unbounded:!1,addClass:p[38],removeClass:p[39],addStyle:p[40]}),h&&Pe(h.update)&&y[0]&256&&h.update.call(null,p[8])},i(p){d||(P(g,p),P(i.$$.fragment,p),P(I,p),P(o.$$.fragment,p),P(w,p),d=!0)},o(p){j(g,p),j(i.$$.fragment,p),j(I,p),j(o.$$.fragment,p),j(w,p),d=!1},d(p){p&&O(e),g&&g.d(p),st(i),I&&I.d(p),st(o),w&&w.d(p),n[79](null),f=!1,Me(m)}}}function r0(n){let e,t,i,s,r,o,a,l,c,u,h,d,f,m,v,g,_,I,S=!n[14]&&n[15]!=="outlined"&&rm(n),w=(n[14]||n[15]==="outlined")&&lm(n);s=new Lo({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[h0]},$$scope:{ctx:n}}});const H=n[50].default,C=Te(H,n,n[89],null),p=[f0,d0],y=[];function k(T,N){return T[14]&&typeof T[0]=="string"?0:1}a=k(n),l=y[a]=p[a](n),u=new Lo({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[g0]},$$scope:{ctx:n}}});let E=!n[14]&&n[15]!=="outlined"&&n[11]&&dm(n),D=[{class:d=ce(De({[n[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":n[12],"mdc-text-field--textarea":n[14],"mdc-text-field--filled":n[15]==="filled","mdc-text-field--outlined":n[15]==="outlined","smui-text-field--standard":n[15]==="standard"&&!n[14],"mdc-text-field--no-label":n[16]||n[17]==null&&!n[41].label,"mdc-text-field--label-floating":n[28]||n[0]!=null&&n[0]!=="","mdc-text-field--with-leading-icon":n[35](n[22])?n[41].leadingIcon:n[22],"mdc-text-field--with-trailing-icon":n[35](n[23])?n[41].trailingIcon:n[23],"mdc-text-field--with-internal-counter":n[14]&&n[41].internalCounter,"mdc-text-field--invalid":n[1]},n[25]))},{style:f=Object.entries(n[26]).map(mm).concat([n[10]]).join(" ")},{for:void 0},is(n[42],["input$","label$","ripple$","outline$","helperLine$"])],J={};for(let T=0;T<D.length;T+=1)J=F(J,D[T]);return{c(){e=te("label"),S&&S.c(),t=Ue(),w&&w.c(),i=Ue(),at(s.$$.fragment),r=Ue(),C&&C.c(),o=Ue(),l.c(),c=Ue(),at(u.$$.fragment),h=Ue(),E&&E.c(),this.h()},l(T){e=ne(T,"LABEL",{class:!0,style:!0,for:!0});var N=ae(e);S&&S.l(N),t=Ve(N),w&&w.l(N),i=Ve(N),At(s.$$.fragment,N),r=Ve(N),C&&C.l(N),o=Ve(N),l.l(N),c=Ve(N),At(u.$$.fragment,N),h=Ve(N),E&&E.l(N),N.forEach(O),this.h()},h(){se(e,J)},m(T,N){x(T,e,N),S&&S.m(e,null),Ie(e,t),w&&w.m(e,null),Ie(e,i),it(s,e,null),Ie(e,r),C&&C.m(e,null),Ie(e,o),y[a].m(e,null),Ie(e,c),it(u,e,null),Ie(e,h),E&&E.m(e,null),n[72](e),g=!0,_||(I=[oe(m=Nn.call(null,e,{ripple:!n[14]&&n[15]==="filled",unbounded:!1,addClass:n[38],removeClass:n[39],addStyle:n[40],eventTarget:n[33],activeTarget:n[33],initPromise:n[37]})),oe(v=et.call(null,e,n[8])),oe(n[34].call(null,e)),Ce(e,"SMUITextfieldLeadingIcon:mount",n[73]),Ce(e,"SMUITextfieldLeadingIcon:unmount",n[74]),Ce(e,"SMUITextfieldTrailingIcon:mount",n[75]),Ce(e,"SMUITextfieldTrailingIcon:unmount",n[76]),Ce(e,"SMUITextfieldCharacterCounter:mount",n[77]),Ce(e,"SMUITextfieldCharacterCounter:unmount",n[78])],_=!0)},p(T,N){!T[14]&&T[15]!=="outlined"?S?(S.p(T,N),N[0]&49152&&P(S,1)):(S=rm(T),S.c(),P(S,1),S.m(e,t)):S&&(Ft(),j(S,1,1,()=>{S=null}),Ut()),T[14]||T[15]==="outlined"?w?(w.p(T,N),N[0]&49152&&P(w,1)):(w=lm(T),w.c(),P(w,1),w.m(e,i)):w&&(Ft(),j(w,1,1,()=>{w=null}),Ut());const L={};N[2]&134217728&&(L.$$scope={dirty:N,ctx:T}),s.$set(L),C&&C.p&&(!g||N[2]&134217728)&&Ae(C,H,T,T[89],g?be(H,T[89],N,null):Se(T[89]),null);let q=a;a=k(T),a===q?y[a].p(T,N):(Ft(),j(y[q],1,1,()=>{y[q]=null}),Ut(),l=y[a],l?l.p(T,N):(l=y[a]=p[a](T),l.c()),P(l,1),l.m(e,c));const z={};N[2]&134217728&&(z.$$scope={dirty:N,ctx:T}),u.$set(z),!T[14]&&T[15]!=="outlined"&&T[11]?E?(E.p(T,N),N[0]&51200&&P(E,1)):(E=dm(T),E.c(),P(E,1),E.m(e,null)):E&&(Ft(),j(E,1,1,()=>{E=null}),Ut()),se(e,J=Ee(D,[(!g||N[0]&314823171|N[1]&1024&&d!==(d=ce(De({[T[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":T[12],"mdc-text-field--textarea":T[14],"mdc-text-field--filled":T[15]==="filled","mdc-text-field--outlined":T[15]==="outlined","smui-text-field--standard":T[15]==="standard"&&!T[14],"mdc-text-field--no-label":T[16]||T[17]==null&&!T[41].label,"mdc-text-field--label-floating":T[28]||T[0]!=null&&T[0]!=="","mdc-text-field--with-leading-icon":T[35](T[22])?T[41].leadingIcon:T[22],"mdc-text-field--with-trailing-icon":T[35](T[23])?T[41].trailingIcon:T[23],"mdc-text-field--with-internal-counter":T[14]&&T[41].internalCounter,"mdc-text-field--invalid":T[1]},T[25]))))&&{class:d},(!g||N[0]&67109888&&f!==(f=Object.entries(T[26]).map(mm).concat([T[10]]).join(" ")))&&{style:f},{for:void 0},N[1]&2048&&is(T[42],["input$","label$","ripple$","outline$","helperLine$"])])),m&&Pe(m.update)&&N[0]&49152|N[1]&4&&m.update.call(null,{ripple:!T[14]&&T[15]==="filled",unbounded:!1,addClass:T[38],removeClass:T[39],addStyle:T[40],eventTarget:T[33],activeTarget:T[33],initPromise:T[37]}),v&&Pe(v.update)&&N[0]&256&&v.update.call(null,T[8])},i(T){g||(P(S),P(w),P(s.$$.fragment,T),P(C,T),P(l),P(u.$$.fragment,T),P(E),g=!0)},o(T){j(S),j(w),j(s.$$.fragment,T),j(C,T),j(l),j(u.$$.fragment,T),j(E),g=!1},d(T){T&&O(e),S&&S.d(),w&&w.d(),st(s),C&&C.d(T),y[a].d(),st(u),E&&E.d(),n[72](null),_=!1,Me(I)}}}function o0(n){let e;const t=n[50].leadingIcon,i=Te(t,n,n[89],Yf);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&Ae(i,t,s,s[89],e?be(t,s[89],r,Qb):Se(s[89]),Yf)},i(s){e||(P(i,s),e=!0)},o(s){j(i,s),e=!1},d(s){i&&i.d(s)}}}function a0(n){let e;const t=n[50].trailingIcon,i=Te(t,n,n[89],Qf);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&Ae(i,t,s,s[89],e?be(t,s[89],r,Xb):Se(s[89]),Qf)},i(s){e||(P(i,s),e=!0)},o(s){j(i,s),e=!1},d(s){i&&i.d(s)}}}function rm(n){let e,t,i,s=n[15]==="filled"&&om(),r=!n[16]&&(n[17]!=null||n[41].label)&&am(n);return{c(){s&&s.c(),e=Ue(),r&&r.c(),t=ft()},l(o){s&&s.l(o),e=Ve(o),r&&r.l(o),t=ft()},m(o,a){s&&s.m(o,a),x(o,e,a),r&&r.m(o,a),x(o,t,a),i=!0},p(o,a){o[15]==="filled"?s||(s=om(),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),!o[16]&&(o[17]!=null||o[41].label)?r?(r.p(o,a),a[0]&196608|a[1]&1024&&P(r,1)):(r=am(o),r.c(),P(r,1),r.m(t.parentNode,t)):r&&(Ft(),j(r,1,1,()=>{r=null}),Ut())},i(o){i||(P(r),i=!0)},o(o){j(r),i=!1},d(o){s&&s.d(o),o&&O(e),r&&r.d(o),o&&O(t)}}}function om(n){let e;return{c(){e=te("span"),this.h()},l(t){e=ne(t,"SPAN",{class:!0}),ae(e).forEach(O),this.h()},h(){de(e,"class","mdc-text-field__ripple")},m(t,i){x(t,e,i)},d(t){t&&O(e)}}}function am(n){let e,t;const i=[{floatAbove:n[28]||n[0]!=null&&n[0]!==""},{required:n[13]},{wrapped:!0},vt(n[42],"label$")];let s={$$slots:{default:[l0]},$$scope:{ctx:n}};for(let r=0;r<i.length;r+=1)s=F(s,i[r]);return e=new qf({props:s}),n[51](e),{c(){at(e.$$.fragment)},l(r){At(e.$$.fragment,r)},m(r,o){it(e,r,o),t=!0},p(r,o){const a=o[0]&268443649|o[1]&2048?Ee(i,[o[0]&268435457&&{floatAbove:r[28]||r[0]!=null&&r[0]!==""},o[0]&8192&&{required:r[13]},i[2],o[1]&2048&&nt(vt(r[42],"label$"))]):{};o[0]&131072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){j(e.$$.fragment,r),t=!1},d(r){n[51](null),st(e,r)}}}function l0(n){let e=(n[17]==null?"":n[17])+"",t,i;const s=n[50].label,r=Te(s,n,n[89],sm);return{c(){t=mn(e),r&&r.c()},l(o){t=bn(o,e),r&&r.l(o)},m(o,a){x(o,t,a),r&&r.m(o,a),i=!0},p(o,a){(!i||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&Vn(t,e),r&&r.p&&(!i||a[2]&134217728)&&Ae(r,s,o,o[89],i?be(s,o[89],a,i0):Se(o[89]),sm)},i(o){i||(P(r,o),i=!0)},o(o){j(r,o),i=!1},d(o){o&&O(t),r&&r.d(o)}}}function lm(n){let e,t;const i=[{noLabel:n[16]||n[17]==null&&!n[41].label},vt(n[42],"outline$")];let s={$$slots:{default:[c0]},$$scope:{ctx:n}};for(let r=0;r<i.length;r+=1)s=F(s,i[r]);return e=new Db({props:s}),n[53](e),{c(){at(e.$$.fragment)},l(r){At(e.$$.fragment,r)},m(r,o){it(e,r,o),t=!0},p(r,o){const a=o[0]&196608|o[1]&3072?Ee(i,[o[0]&196608|o[1]&1024&&{noLabel:r[16]||r[17]==null&&!r[41].label},o[1]&2048&&nt(vt(r[42],"outline$"))]):{};o[0]&268640289|o[1]&3072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){j(e.$$.fragment,r),t=!1},d(r){n[53](null),st(e,r)}}}function um(n){let e,t;const i=[{floatAbove:n[28]||n[0]!=null&&n[0]!==""},{required:n[13]},{wrapped:!0},vt(n[42],"label$")];let s={$$slots:{default:[u0]},$$scope:{ctx:n}};for(let r=0;r<i.length;r+=1)s=F(s,i[r]);return e=new qf({props:s}),n[52](e),{c(){at(e.$$.fragment)},l(r){At(e.$$.fragment,r)},m(r,o){it(e,r,o),t=!0},p(r,o){const a=o[0]&268443649|o[1]&2048?Ee(i,[o[0]&268435457&&{floatAbove:r[28]||r[0]!=null&&r[0]!==""},o[0]&8192&&{required:r[13]},i[2],o[1]&2048&&nt(vt(r[42],"label$"))]):{};o[0]&131072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){j(e.$$.fragment,r),t=!1},d(r){n[52](null),st(e,r)}}}function u0(n){let e=(n[17]==null?"":n[17])+"",t,i;const s=n[50].label,r=Te(s,n,n[89],im);return{c(){t=mn(e),r&&r.c()},l(o){t=bn(o,e),r&&r.l(o)},m(o,a){x(o,t,a),r&&r.m(o,a),i=!0},p(o,a){(!i||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&Vn(t,e),r&&r.p&&(!i||a[2]&134217728)&&Ae(r,s,o,o[89],i?be(s,o[89],a,n0):Se(o[89]),im)},i(o){i||(P(r,o),i=!0)},o(o){j(r,o),i=!1},d(o){o&&O(t),r&&r.d(o)}}}function c0(n){let e,t,i=!n[16]&&(n[17]!=null||n[41].label)&&um(n);return{c(){i&&i.c(),e=ft()},l(s){i&&i.l(s),e=ft()},m(s,r){i&&i.m(s,r),x(s,e,r),t=!0},p(s,r){!s[16]&&(s[17]!=null||s[41].label)?i?(i.p(s,r),r[0]&196608|r[1]&1024&&P(i,1)):(i=um(s),i.c(),P(i,1),i.m(e.parentNode,e)):i&&(Ft(),j(i,1,1,()=>{i=null}),Ut())},i(s){t||(P(i),t=!0)},o(s){j(i),t=!1},d(s){i&&i.d(s),s&&O(e)}}}function h0(n){let e;const t=n[50].leadingIcon,i=Te(t,n,n[89],nm);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&Ae(i,t,s,s[89],e?be(t,s[89],r,t0):Se(s[89]),nm)},i(s){e||(P(i,s),e=!0)},o(s){j(i,s),e=!1},d(s){i&&i.d(s)}}}function d0(n){let e,t,i,s,r,o,a,l,c,u;const h=n[50].prefix,d=Te(h,n,n[89],em);let f=n[20]!=null&&cm(n);const m=[{type:n[18]},{disabled:n[12]},{required:n[13]},{updateInvalid:n[19]},{"aria-controls":n[27]},{"aria-describedby":n[27]},n[16]&&n[17]!=null?{placeholder:n[17]}:{},vt(n[42],"input$")];function v(p){n[63](p)}function g(p){n[64](p)}function _(p){n[65](p)}function I(p){n[66](p)}let S={};for(let p=0;p<m.length;p+=1)S=F(S,m[p]);n[0]!==void 0&&(S.value=n[0]),n[3]!==void 0&&(S.files=n[3]),n[4]!==void 0&&(S.dirty=n[4]),n[1]!==void 0&&(S.invalid=n[1]),i=new qb({props:S}),n[62](i),re.push(()=>qn(i,"value",v)),re.push(()=>qn(i,"files",g)),re.push(()=>qn(i,"dirty",_)),re.push(()=>qn(i,"invalid",I)),i.$on("blur",n[67]),i.$on("focus",n[68]),i.$on("blur",n[69]),i.$on("focus",n[70]);let w=n[21]!=null&&hm(n);const H=n[50].suffix,C=Te(H,n,n[89],$f);return{c(){d&&d.c(),e=Ue(),f&&f.c(),t=Ue(),at(i.$$.fragment),l=Ue(),w&&w.c(),c=Ue(),C&&C.c()},l(p){d&&d.l(p),e=Ve(p),f&&f.l(p),t=Ve(p),At(i.$$.fragment,p),l=Ve(p),w&&w.l(p),c=Ve(p),C&&C.l(p)},m(p,y){d&&d.m(p,y),x(p,e,y),f&&f.m(p,y),x(p,t,y),it(i,p,y),x(p,l,y),w&&w.m(p,y),x(p,c,y),C&&C.m(p,y),u=!0},p(p,y){d&&d.p&&(!u||y[2]&134217728)&&Ae(d,h,p,p[89],u?be(h,p[89],y,$b):Se(p[89]),em),p[20]!=null?f?(f.p(p,y),y[0]&1048576&&P(f,1)):(f=cm(p),f.c(),P(f,1),f.m(t.parentNode,t)):f&&(Ft(),j(f,1,1,()=>{f=null}),Ut());const k=y[0]&135213056|y[1]&2048?Ee(m,[y[0]&262144&&{type:p[18]},y[0]&4096&&{disabled:p[12]},y[0]&8192&&{required:p[13]},y[0]&524288&&{updateInvalid:p[19]},y[0]&134217728&&{"aria-controls":p[27]},y[0]&134217728&&{"aria-describedby":p[27]},y[0]&196608&&nt(p[16]&&p[17]!=null?{placeholder:p[17]}:{}),y[1]&2048&&nt(vt(p[42],"input$"))]):{};!s&&y[0]&1&&(s=!0,k.value=p[0],jn(()=>s=!1)),!r&&y[0]&8&&(r=!0,k.files=p[3],jn(()=>r=!1)),!o&&y[0]&16&&(o=!0,k.dirty=p[4],jn(()=>o=!1)),!a&&y[0]&2&&(a=!0,k.invalid=p[1],jn(()=>a=!1)),i.$set(k),p[21]!=null?w?(w.p(p,y),y[0]&2097152&&P(w,1)):(w=hm(p),w.c(),P(w,1),w.m(c.parentNode,c)):w&&(Ft(),j(w,1,1,()=>{w=null}),Ut()),C&&C.p&&(!u||y[2]&134217728)&&Ae(C,H,p,p[89],u?be(H,p[89],y,Zb):Se(p[89]),$f)},i(p){u||(P(d,p),P(f),P(i.$$.fragment,p),P(w),P(C,p),u=!0)},o(p){j(d,p),j(f),j(i.$$.fragment,p),j(w),j(C,p),u=!1},d(p){d&&d.d(p),p&&O(e),f&&f.d(p),p&&O(t),n[62](null),st(i,p),p&&O(l),w&&w.d(p),p&&O(c),C&&C.d(p)}}}function f0(n){let e,t,i,s,r,o,a,l;const c=[{disabled:n[12]},{required:n[13]},{updateInvalid:n[19]},{"aria-controls":n[27]},{"aria-describedby":n[27]},vt(n[42],"input$")];function u(g){n[55](g)}function h(g){n[56](g)}function d(g){n[57](g)}let f={};for(let g=0;g<c.length;g+=1)f=F(f,c[g]);n[0]!==void 0&&(f.value=n[0]),n[4]!==void 0&&(f.dirty=n[4]),n[1]!==void 0&&(f.invalid=n[1]),t=new Wb({props:f}),n[54](t),re.push(()=>qn(t,"value",u)),re.push(()=>qn(t,"dirty",h)),re.push(()=>qn(t,"invalid",d)),t.$on("blur",n[58]),t.$on("focus",n[59]),t.$on("blur",n[60]),t.$on("focus",n[61]);const m=n[50].internalCounter,v=Te(m,n,n[89],tm);return{c(){e=te("span"),at(t.$$.fragment),o=Ue(),v&&v.c(),this.h()},l(g){e=ne(g,"SPAN",{class:!0});var _=ae(e);At(t.$$.fragment,_),o=Ve(_),v&&v.l(_),_.forEach(O),this.h()},h(){de(e,"class",a=ce({"mdc-text-field__resizer":!("input$resizable"in n[42])||n[42].input$resizable}))},m(g,_){x(g,e,_),it(t,e,null),Ie(e,o),v&&v.m(e,null),l=!0},p(g,_){const I=_[0]&134754304|_[1]&2048?Ee(c,[_[0]&4096&&{disabled:g[12]},_[0]&8192&&{required:g[13]},_[0]&524288&&{updateInvalid:g[19]},_[0]&134217728&&{"aria-controls":g[27]},_[0]&134217728&&{"aria-describedby":g[27]},_[1]&2048&&nt(vt(g[42],"input$"))]):{};!i&&_[0]&1&&(i=!0,I.value=g[0],jn(()=>i=!1)),!s&&_[0]&16&&(s=!0,I.dirty=g[4],jn(()=>s=!1)),!r&&_[0]&2&&(r=!0,I.invalid=g[1],jn(()=>r=!1)),t.$set(I),v&&v.p&&(!l||_[2]&134217728)&&Ae(v,m,g,g[89],l?be(m,g[89],_,e0):Se(g[89]),tm),(!l||_[1]&2048&&a!==(a=ce({"mdc-text-field__resizer":!("input$resizable"in g[42])||g[42].input$resizable})))&&de(e,"class",a)},i(g){l||(P(t.$$.fragment,g),P(v,g),l=!0)},o(g){j(t.$$.fragment,g),j(v,g),l=!1},d(g){g&&O(e),n[54](null),st(t),v&&v.d(g)}}}function cm(n){let e,t;return e=new Ub({props:{$$slots:{default:[m0]},$$scope:{ctx:n}}}),{c(){at(e.$$.fragment)},l(i){At(e.$$.fragment,i)},m(i,s){it(e,i,s),t=!0},p(i,s){const r={};s[0]&1048576|s[2]&134217728&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){t||(P(e.$$.fragment,i),t=!0)},o(i){j(e.$$.fragment,i),t=!1},d(i){st(e,i)}}}function m0(n){let e;return{c(){e=mn(n[20])},l(t){e=bn(t,n[20])},m(t,i){x(t,e,i)},p(t,i){i[0]&1048576&&Vn(e,t[20])},d(t){t&&O(e)}}}function hm(n){let e,t;return e=new Vb({props:{$$slots:{default:[p0]},$$scope:{ctx:n}}}),{c(){at(e.$$.fragment)},l(i){At(e.$$.fragment,i)},m(i,s){it(e,i,s),t=!0},p(i,s){const r={};s[0]&2097152|s[2]&134217728&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){t||(P(e.$$.fragment,i),t=!0)},o(i){j(e.$$.fragment,i),t=!1},d(i){st(e,i)}}}function p0(n){let e;return{c(){e=mn(n[21])},l(t){e=bn(t,n[21])},m(t,i){x(t,e,i)},p(t,i){i[0]&2097152&&Vn(e,t[21])},d(t){t&&O(e)}}}function g0(n){let e;const t=n[50].trailingIcon,i=Te(t,n,n[89],Zf);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&Ae(i,t,s,s[89],e?be(t,s[89],r,Jb):Se(s[89]),Zf)},i(s){e||(P(i,s),e=!0)},o(s){j(i,s),e=!1},d(s){i&&i.d(s)}}}function dm(n){let e,t;const i=[vt(n[42],"ripple$")];let s={};for(let r=0;r<i.length;r+=1)s=F(s,i[r]);return e=new Rb({props:s}),n[71](e),{c(){at(e.$$.fragment)},l(r){At(e.$$.fragment,r)},m(r,o){it(e,r,o),t=!0},p(r,o){const a=o[1]&2048?Ee(i,[nt(vt(r[42],"ripple$"))]):{};e.$set(a)},i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){j(e.$$.fragment,r),t=!1},d(r){n[71](null),st(e,r)}}}function fm(n){let e,t;const i=[vt(n[42],"helperLine$")];let s={$$slots:{default:[v0]},$$scope:{ctx:n}};for(let r=0;r<i.length;r+=1)s=F(s,i[r]);return e=new Fb({props:s}),e.$on("SMUITextfieldHelperText:id",n[84]),e.$on("SMUITextfieldHelperText:mount",n[85]),e.$on("SMUITextfieldHelperText:unmount",n[86]),e.$on("SMUITextfieldCharacterCounter:mount",n[87]),e.$on("SMUITextfieldCharacterCounter:unmount",n[88]),{c(){at(e.$$.fragment)},l(r){At(e.$$.fragment,r)},m(r,o){it(e,r,o),t=!0},p(r,o){const a=o[1]&2048?Ee(i,[nt(vt(r[42],"helperLine$"))]):{};o[2]&134217728&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){j(e.$$.fragment,r),t=!1},d(r){st(e,r)}}}function v0(n){let e;const t=n[50].helper,i=Te(t,n,n[89],xf);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&Ae(i,t,s,s[89],e?be(t,s[89],r,Kb):Se(s[89]),xf)},i(s){e||(P(i,s),e=!0)},o(s){j(i,s),e=!1},d(s){i&&i.d(s)}}}function y0(n){let e,t,i,s,r;const o=[r0,s0],a=[];function l(u,h){return u[36]?0:1}e=l(n),t=a[e]=o[e](n);let c=n[41].helper&&fm(n);return{c(){t.c(),i=Ue(),c&&c.c(),s=ft()},l(u){t.l(u),i=Ve(u),c&&c.l(u),s=ft()},m(u,h){a[e].m(u,h),x(u,i,h),c&&c.m(u,h),x(u,s,h),r=!0},p(u,h){t.p(u,h),u[41].helper?c?(c.p(u,h),h[1]&1024&&P(c,1)):(c=fm(u),c.c(),P(c,1),c.m(s.parentNode,s)):c&&(Ft(),j(c,1,1,()=>{c=null}),Ut())},i(u){r||(P(t),P(c),r=!0)},o(u){j(t),j(c),r=!1},d(u){a[e].d(u),u&&O(i),c&&c.d(u),u&&O(s)}}}const mm=([n,e])=>`${n}: ${e};`,pm=([n,e])=>`${n}: ${e};`;function _0(n,e,t){let i;const s=["use","class","style","ripple","disabled","required","textarea","variant","noLabel","label","type","value","files","invalid","updateInvalid","dirty","prefix","suffix","validateOnValueChange","useNativeValidation","withLeadingIcon","withTrailingIcon","input","floatingLabel","lineRipple","notchedOutline","focus","layout","getElement"];let r=ie(e,s),{$$slots:o={},$$scope:a}=e;const l=xm(o),{applyPassive:c}=wf,u=Qe(ke());let h=()=>{};function d(b){return b===h}let{use:f=[]}=e,{class:m=""}=e,{style:v=""}=e,{ripple:g=!0}=e,{disabled:_=!1}=e,{required:I=!1}=e,{textarea:S=!1}=e,{variant:w=S?"outlined":"standard"}=e,{noLabel:H=!1}=e,{label:C=void 0}=e,{type:p="text"}=e,{value:y=h}=e,{files:k=h}=e;const E=!d(y)||!d(k);d(y)&&(y=void 0),d(k)&&(k=null);let{invalid:D=h}=e,{updateInvalid:J=d(D)}=e;d(D)&&(D=!1);let{dirty:T=!1}=e,{prefix:N=void 0}=e,{suffix:L=void 0}=e,{validateOnValueChange:q=J}=e,{useNativeValidation:z=J}=e,{withLeadingIcon:G=h}=e,{withTrailingIcon:ve=h}=e,{input:Y=void 0}=e,{floatingLabel:Ne=void 0}=e,{lineRipple:Be=void 0}=e,{notchedOutline:tt=void 0}=e,lt,Le,ut={},Oe={},W,ye=!1,ot=Pt("SMUI:addLayoutListener"),ln,un,U=new Promise(b=>un=b),he,xe,bt,Xt,Qt=y;ot&&(ln=ot(Ci)),nn(()=>{if(t(48,Le=new Ib({addClass:fn,removeClass:Si,hasClass:En,registerTextFieldInteractionHandler:(b,dt)=>Un().addEventListener(b,dt),deregisterTextFieldInteractionHandler:(b,dt)=>Un().removeEventListener(b,dt),registerValidationAttributeChangeHandler:b=>{const dt=ta=>ta.map(na=>na.attributeName).filter(na=>na),pu=new MutationObserver(ta=>{z&&b(dt(ta))}),Bm={attributes:!0};return Y&&pu.observe(Y.getElement(),Bm),pu},deregisterValidationAttributeChangeHandler:b=>{b.disconnect()},getNativeInput:()=>{var b;return(b=Y==null?void 0:Y.getElement())!==null&&b!==void 0?b:null},setInputAttr:(b,dt)=>{Y==null||Y.addAttr(b,dt)},removeInputAttr:b=>{Y==null||Y.removeAttr(b)},isFocused:()=>document.activeElement===(Y==null?void 0:Y.getElement()),registerInputInteractionHandler:(b,dt)=>{Y==null||Y.getElement().addEventListener(b,dt,c())},deregisterInputInteractionHandler:(b,dt)=>{Y==null||Y.getElement().removeEventListener(b,dt,c())},floatLabel:b=>Ne&&Ne.float(b),getLabelWidth:()=>Ne?Ne.getWidth():0,hasLabel:()=>!!Ne,shakeLabel:b=>Ne&&Ne.shake(b),setLabelRequired:b=>Ne&&Ne.setRequired(b),activateLineRipple:()=>Be&&Be.activate(),deactivateLineRipple:()=>Be&&Be.deactivate(),setLineRippleTransformOrigin:b=>Be&&Be.setRippleCenter(b),closeOutline:()=>tt&&tt.closeNotch(),hasOutline:()=>!!tt,notchOutline:b=>tt&&tt.notch(b)},{get helperText(){return bt},get characterCounter(){return Xt},get leadingIcon(){return he},get trailingIcon(){return xe}})),E){if(Y==null)throw new Error("SMUI Textfield initialized without Input component.");Le.init()}else rp().then(()=>{if(Y==null)throw new Error("SMUI Textfield initialized without Input component.");Le.init()});return un(),()=>{Le.destroy()}}),Bn(()=>{ln&&ln()});function En(b){var dt;return b in ut?(dt=ut[b])!==null&&dt!==void 0?dt:null:Un().classList.contains(b)}function fn(b){ut[b]||t(25,ut[b]=!0,ut)}function Si(b){(!(b in ut)||ut[b])&&t(25,ut[b]=!1,ut)}function cn(b,dt){Oe[b]!=dt&&(dt===""||dt==null?(delete Oe[b],t(26,Oe)):t(26,Oe[b]=dt,Oe))}function us(){Y==null||Y.focus()}function Ci(){if(Le){const b=Le.shouldFloat;Le.notchOutline(b)}}function Un(){return lt}function cs(b){re[b?"unshift":"push"](()=>{Ne=b,t(5,Ne)})}function wi(b){re[b?"unshift":"push"](()=>{Ne=b,t(5,Ne)})}function M(b){re[b?"unshift":"push"](()=>{tt=b,t(7,tt)})}function Q(b){re[b?"unshift":"push"](()=>{Y=b,t(2,Y)})}function $(b){y=b,t(0,y)}function ze(b){T=b,t(4,T)}function Tn(b){D=b,t(1,D),t(48,Le),t(19,J)}const hs=()=>t(28,ye=!1),Do=()=>t(28,ye=!0),ko=b=>Xe(lt,"blur",b),No=b=>Xe(lt,"focus",b);function Mo(b){re[b?"unshift":"push"](()=>{Y=b,t(2,Y)})}function Po(b){y=b,t(0,y)}function Fo(b){k=b,t(3,k)}function Uo(b){T=b,t(4,T)}function Vo(b){D=b,t(1,D),t(48,Le),t(19,J)}const Ho=()=>t(28,ye=!1),Bo=()=>t(28,ye=!0),jo=b=>Xe(lt,"blur",b),qo=b=>Xe(lt,"focus",b);function zo(b){re[b?"unshift":"push"](()=>{Be=b,t(6,Be)})}function Go(b){re[b?"unshift":"push"](()=>{lt=b,t(24,lt)})}const Wo=b=>t(29,he=b.detail),Ko=()=>t(29,he=void 0),xo=b=>t(30,xe=b.detail),Xo=()=>t(30,xe=void 0),Qo=b=>t(32,Xt=b.detail),Yo=()=>t(32,Xt=void 0);function Jo(b){re[b?"unshift":"push"](()=>{lt=b,t(24,lt)})}const Zo=b=>t(29,he=b.detail),$o=()=>t(29,he=void 0),ea=b=>t(30,xe=b.detail),A=()=>t(30,xe=void 0),B=b=>t(27,W=b.detail),ee=b=>t(31,bt=b.detail),tn=()=>{t(27,W=void 0),t(31,bt=void 0)},ct=b=>t(32,Xt=b.detail),Hm=()=>t(32,Xt=void 0);return n.$$set=b=>{e=F(F({},e),Ge(b)),t(42,r=ie(e,s)),"use"in b&&t(8,f=b.use),"class"in b&&t(9,m=b.class),"style"in b&&t(10,v=b.style),"ripple"in b&&t(11,g=b.ripple),"disabled"in b&&t(12,_=b.disabled),"required"in b&&t(13,I=b.required),"textarea"in b&&t(14,S=b.textarea),"variant"in b&&t(15,w=b.variant),"noLabel"in b&&t(16,H=b.noLabel),"label"in b&&t(17,C=b.label),"type"in b&&t(18,p=b.type),"value"in b&&t(0,y=b.value),"files"in b&&t(3,k=b.files),"invalid"in b&&t(1,D=b.invalid),"updateInvalid"in b&&t(19,J=b.updateInvalid),"dirty"in b&&t(4,T=b.dirty),"prefix"in b&&t(20,N=b.prefix),"suffix"in b&&t(21,L=b.suffix),"validateOnValueChange"in b&&t(43,q=b.validateOnValueChange),"useNativeValidation"in b&&t(44,z=b.useNativeValidation),"withLeadingIcon"in b&&t(22,G=b.withLeadingIcon),"withTrailingIcon"in b&&t(23,ve=b.withTrailingIcon),"input"in b&&t(2,Y=b.input),"floatingLabel"in b&&t(5,Ne=b.floatingLabel),"lineRipple"in b&&t(6,Be=b.lineRipple),"notchedOutline"in b&&t(7,tt=b.notchedOutline),"$$scope"in b&&t(89,a=b.$$scope)},n.$$.update=()=>{if(n.$$.dirty[0]&4&&t(33,i=Y&&Y.getElement()),n.$$.dirty[0]&524290|n.$$.dirty[1]&131072&&Le&&Le.isValid()!==!D&&(J?t(1,D=!Le.isValid()):Le.setValid(!D)),n.$$.dirty[1]&135168&&Le&&Le.getValidateOnValueChange()!==q&&Le.setValidateOnValueChange(d(q)?!1:q),n.$$.dirty[1]&139264&&Le&&Le.setUseNativeValidation(d(z)?!0:z),n.$$.dirty[0]&4096|n.$$.dirty[1]&131072&&Le&&Le.setDisabled(_),n.$$.dirty[0]&1|n.$$.dirty[1]&393216&&Le&&E&&Qt!==y){t(49,Qt=y);const b=`${y}`;Le.getValue()!==b&&Le.setValue(b)}},[y,D,Y,k,T,Ne,Be,tt,f,m,v,g,_,I,S,w,H,C,p,J,N,L,G,ve,lt,ut,Oe,W,ye,he,xe,bt,Xt,i,u,d,E,U,fn,Si,cn,l,r,q,z,us,Ci,Un,Le,Qt,o,cs,wi,M,Q,$,ze,Tn,hs,Do,ko,No,Mo,Po,Fo,Uo,Vo,Ho,Bo,jo,qo,zo,Go,Wo,Ko,xo,Xo,Qo,Yo,Jo,Zo,$o,ea,A,B,ee,tn,ct,Hm,a]}class UA extends Ke{constructor(e){super();We(this,e,_0,y0,je,{use:8,class:9,style:10,ripple:11,disabled:12,required:13,textarea:14,variant:15,noLabel:16,label:17,type:18,value:0,files:3,invalid:1,updateInvalid:19,dirty:4,prefix:20,suffix:21,validateOnValueChange:43,useNativeValidation:44,withLeadingIcon:22,withTrailingIcon:23,input:2,floatingLabel:5,lineRipple:6,notchedOutline:7,focus:45,layout:46,getElement:47},null,[-1,-1,-1,-1])}get focus(){return this.$$.ctx[45]}get layout(){return this.$$.ctx[46]}get getElement(){return this.$$.ctx[47]}}function I0(n){let e;return{c(){e=mn(n[8])},l(t){e=bn(t,n[8])},m(t,i){x(t,e,i)},p(t,i){i&256&&Vn(e,t[8])},i:Lt,o:Lt,d(t){t&&O(e)}}}function E0(n){let e;const t=n[13].default,i=Te(t,n,n[12],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&4096)&&Ae(i,t,s,s[12],e?be(t,s[12],r,null):Se(s[12]),null)},i(s){e||(P(i,s),e=!0)},o(s){j(i,s),e=!1},d(s){i&&i.d(s)}}}function T0(n){let e,t,i,s,r,o,a,l,c;const u=[E0,I0],h=[];function d(v,g){return v[8]==null?0:1}t=d(n),i=h[t]=u[t](n);let f=[{class:s=ce(De({[n[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":n[3],"mdc-text-field-helper-text--validation-msg":n[4]},n[6]))},{"aria-hidden":r=n[3]?void 0:"true"},{id:n[2]},n[7],n[10]],m={};for(let v=0;v<f.length;v+=1)m=F(m,f[v]);return{c(){e=te("div"),i.c(),this.h()},l(v){e=ne(v,"DIV",{class:!0,"aria-hidden":!0,id:!0});var g=ae(e);i.l(g),g.forEach(O),this.h()},h(){se(e,m)},m(v,g){x(v,e,g),h[t].m(e,null),n[14](e),a=!0,l||(c=[oe(o=et.call(null,e,n[0])),oe(n[9].call(null,e))],l=!0)},p(v,[g]){let _=t;t=d(v),t===_?h[t].p(v,g):(Ft(),j(h[_],1,1,()=>{h[_]=null}),Ut(),i=h[t],i?i.p(v,g):(i=h[t]=u[t](v),i.c()),P(i,1),i.m(e,null)),se(e,m=Ee(f,[(!a||g&90&&s!==(s=ce(De({[v[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":v[3],"mdc-text-field-helper-text--validation-msg":v[4]},v[6]))))&&{class:s},(!a||g&8&&r!==(r=v[3]?void 0:"true"))&&{"aria-hidden":r},(!a||g&4)&&{id:v[2]},g&128&&v[7],g&1024&&v[10]])),o&&Pe(o.update)&&g&1&&o.update.call(null,v[0])},i(v){a||(P(i),a=!0)},o(v){j(i),a=!1},d(v){v&&O(e),h[t].d(),n[14](null),l=!1,Me(c)}}}let b0=0;function A0(n,e,t){const i=["use","class","id","persistent","validationMsg","getElement"];let s=ie(e,i),{$$slots:r={},$$scope:o}=e;const a=Qe(ke());let{use:l=[]}=e,{class:c=""}=e,{id:u="SMUI-textfield-helper-text-"+b0++}=e,{persistent:h=!1}=e,{validationMsg:d=!1}=e,f,m,v={},g={},_;nn(()=>(m=new Eb({addClass:S,removeClass:w,hasClass:I,getAttr:H,setAttr:C,removeAttr:p,setContent:E=>{t(8,_=E)}}),u.startsWith("SMUI-textfield-helper-text-")&&Xe(y(),"SMUITextfieldHelperText:id",u),Xe(y(),"SMUITextfieldHelperText:mount",m),m.init(),()=>{Xe(y(),"SMUITextfieldHelperText:unmount",m),m.destroy()}));function I(E){return E in v?v[E]:y().classList.contains(E)}function S(E){v[E]||t(6,v[E]=!0,v)}function w(E){(!(E in v)||v[E])&&t(6,v[E]=!1,v)}function H(E){var D;return E in g?(D=g[E])!==null&&D!==void 0?D:null:y().getAttribute(E)}function C(E,D){g[E]!==D&&t(7,g[E]=D,g)}function p(E){(!(E in g)||g[E]!=null)&&t(7,g[E]=void 0,g)}function y(){return f}function k(E){re[E?"unshift":"push"](()=>{f=E,t(5,f)})}return n.$$set=E=>{e=F(F({},e),Ge(E)),t(10,s=ie(e,i)),"use"in E&&t(0,l=E.use),"class"in E&&t(1,c=E.class),"id"in E&&t(2,u=E.id),"persistent"in E&&t(3,h=E.persistent),"validationMsg"in E&&t(4,d=E.validationMsg),"$$scope"in E&&t(12,o=E.$$scope)},[l,c,u,h,d,f,v,g,_,a,s,y,o,r,k]}class VA extends Ke{constructor(e){super();We(this,e,A0,T0,je,{use:0,class:1,id:2,persistent:3,validationMsg:4,getElement:11})}get getElement(){return this.$$.ctx[11]}}/**
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
 */var S0={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},C0={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},sr={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},ht;(function(n){n[n.BOTTOM=1]="BOTTOM",n[n.CENTER=2]="CENTER",n[n.RIGHT=4]="RIGHT",n[n.FLIP_RTL=8]="FLIP_RTL"})(ht||(ht={}));var ss;(function(n){n[n.TOP_LEFT=0]="TOP_LEFT",n[n.TOP_RIGHT=4]="TOP_RIGHT",n[n.BOTTOM_LEFT=1]="BOTTOM_LEFT",n[n.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",n[n.TOP_START=8]="TOP_START",n[n.TOP_END=12]="TOP_END",n[n.BOTTOM_START=9]="BOTTOM_START",n[n.BOTTOM_END=13]="BOTTOM_END"})(ss||(ss={}));/**
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
 */var si,Fn,_e={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};si={},si[""+_e.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",si[""+_e.LIST_ITEM_CLASS]="mdc-list-item",si[""+_e.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",si[""+_e.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",si[""+_e.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",si[""+_e.ROOT]="mdc-list";var rs=(Fn={},Fn[""+_e.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",Fn[""+_e.LIST_ITEM_CLASS]="mdc-deprecated-list-item",Fn[""+_e.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",Fn[""+_e.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",Fn[""+_e.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",Fn[""+_e.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",Fn[""+_e.ROOT]="mdc-deprecated-list",Fn),ri={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+_e.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+_e.LIST_ITEM_CLASS+` a,
    .`+rs[_e.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+rs[_e.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+_e.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+_e.LIST_ITEM_CLASS+` a,
    .`+_e.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+_e.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+rs[_e.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+rs[_e.LIST_ITEM_CLASS]+` a,
    .`+rs[_e.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+rs[_e.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},Tt={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};/**
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
 */var w0=["input","button","textarea","select"],Ai=function(n){var e=n.target;if(!!e){var t=(""+e.tagName).toLowerCase();w0.indexOf(t)===-1&&n.preventDefault()}};/**
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
 */function R0(){var n={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return n}function L0(n,e){for(var t=new Map,i=0;i<n;i++){var s=e(i).trim();if(!!s){var r=s[0].toLowerCase();t.has(r)||t.set(r,[]),t.get(r).push({text:s.toLowerCase(),index:i})}}return t.forEach(function(o){o.sort(function(a,l){return a.index-l.index})}),t}function du(n,e){var t=n.nextChar,i=n.focusItemAtIndex,s=n.sortedIndexByFirstChar,r=n.focusedItemIndex,o=n.skipFocus,a=n.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){vm(e)},Tt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+t;var l;return e.typeaheadBuffer.length===1?l=O0(s,r,a,e):l=D0(s,a,e),l!==-1&&!o&&i(l),l}function O0(n,e,t,i){var s=i.typeaheadBuffer[0],r=n.get(s);if(!r)return-1;if(s===i.currentFirstChar&&r[i.sortedIndexCursor].index===e){i.sortedIndexCursor=(i.sortedIndexCursor+1)%r.length;var o=r[i.sortedIndexCursor].index;if(!t(o))return o}i.currentFirstChar=s;var a=-1,l;for(l=0;l<r.length;l++)if(!t(r[l].index)){a=l;break}for(;l<r.length;l++)if(r[l].index>e&&!t(r[l].index)){a=l;break}return a!==-1?(i.sortedIndexCursor=a,r[i.sortedIndexCursor].index):-1}function D0(n,e,t){var i=t.typeaheadBuffer[0],s=n.get(i);if(!s)return-1;var r=s[t.sortedIndexCursor];if(r.text.lastIndexOf(t.typeaheadBuffer,0)===0&&!e(r.index))return r.index;for(var o=(t.sortedIndexCursor+1)%s.length,a=-1;o!==t.sortedIndexCursor;){var l=s[o],c=l.text.lastIndexOf(t.typeaheadBuffer,0)===0,u=!e(l.index);if(c&&u){a=o;break}o=(o+1)%s.length}return a!==-1?(t.sortedIndexCursor=a,s[t.sortedIndexCursor].index):-1}function gm(n){return n.typeaheadBuffer.length>0}function vm(n){n.typeaheadBuffer=""}function ym(n,e){var t=n.event,i=n.isTargetListItem,s=n.focusedItemIndex,r=n.focusItemAtIndex,o=n.sortedIndexByFirstChar,a=n.isItemAtIndexDisabled,l=qt(t)==="ArrowLeft",c=qt(t)==="ArrowUp",u=qt(t)==="ArrowRight",h=qt(t)==="ArrowDown",d=qt(t)==="Home",f=qt(t)==="End",m=qt(t)==="Enter",v=qt(t)==="Spacebar";if(t.ctrlKey||t.metaKey||l||c||u||h||d||f||m)return-1;var g=!v&&t.key.length===1;if(g){Ai(t);var _={focusItemAtIndex:r,focusedItemIndex:s,nextChar:t.key.toLowerCase(),sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return du(_,e)}if(!v)return-1;i&&Ai(t);var I=i&&gm(e);if(I){var _={focusItemAtIndex:r,focusedItemIndex:s,nextChar:" ",sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return du(_,e)}return-1}/**
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
 */function k0(n){return n instanceof Array}var N0=function(n){hn(e,n);function e(t){var i=n.call(this,Je(Je({},e.defaultAdapter),t))||this;return i.wrapFocus=!1,i.isVertical=!0,i.isSingleSelectionList=!1,i.selectedIndex=Tt.UNSET_INDEX,i.focusedItemIndex=Tt.UNSET_INDEX,i.useActivatedClass=!1,i.useSelectedAttr=!1,i.ariaCurrentAttrValue=null,i.isCheckboxList=!1,i.isRadioList=!1,i.hasTypeahead=!1,i.typeaheadState=R0(),i.sortedIndexByFirstChar=new Map,i}return Object.defineProperty(e,"strings",{get:function(){return ri},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return _e},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Tt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(t){this.wrapFocus=t},e.prototype.setVerticalOrientation=function(t){this.isVertical=t},e.prototype.setSingleSelection=function(t){this.isSingleSelectionList=t,t&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.maybeInitializeSingleSelection=function(){var t=this.getSelectedIndexFromDOM();if(t!==Tt.UNSET_INDEX){var i=this.adapter.listItemAtIndexHasClass(t,_e.LIST_ITEM_ACTIVATED_CLASS);i&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=t}},e.prototype.getSelectedIndexFromDOM=function(){for(var t=Tt.UNSET_INDEX,i=this.adapter.getListItemCount(),s=0;s<i;s++){var r=this.adapter.listItemAtIndexHasClass(s,_e.LIST_ITEM_SELECTED_CLASS),o=this.adapter.listItemAtIndexHasClass(s,_e.LIST_ITEM_ACTIVATED_CLASS);if(!!(r||o)){t=s;break}}return t},e.prototype.setHasTypeahead=function(t){this.hasTypeahead=t,t&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&gm(this.typeaheadState)},e.prototype.setUseActivatedClass=function(t){this.useActivatedClass=t},e.prototype.setUseSelectedAttribute=function(t){this.useSelectedAttr=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t,i){var s=i===void 0?{}:i,r=s.forceUpdate;!this.isIndexValid(t)||(this.isCheckboxList?this.setCheckboxAtIndex(t):this.isRadioList?this.setRadioAtIndex(t):this.setSingleSelectionAtIndex(t,{forceUpdate:r}))},e.prototype.handleFocusIn=function(t){t>=0&&(this.focusedItemIndex=t,this.adapter.setAttributeForElementIndex(t,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(t,"0"))},e.prototype.handleFocusOut=function(t){var i=this;t>=0&&(this.adapter.setAttributeForElementIndex(t,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(t,"-1")),setTimeout(function(){i.adapter.isFocusInsideList()||i.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.handleKeydown=function(t,i,s){var r=this,o=qt(t)==="ArrowLeft",a=qt(t)==="ArrowUp",l=qt(t)==="ArrowRight",c=qt(t)==="ArrowDown",u=qt(t)==="Home",h=qt(t)==="End",d=qt(t)==="Enter",f=qt(t)==="Spacebar",m=t.key==="A"||t.key==="a";if(this.adapter.isRootFocused()){if(a||h?(t.preventDefault(),this.focusLastElement()):(c||u)&&(t.preventDefault(),this.focusFirstElement()),this.hasTypeahead){var v={event:t,focusItemAtIndex:function(I){r.focusItemAtIndex(I)},focusedItemIndex:-1,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(I){return r.adapter.listItemAtIndexHasClass(I,_e.LIST_ITEM_DISABLED_CLASS)}};ym(v,this.typeaheadState)}return}var g=this.adapter.getFocusedElementIndex();if(!(g===-1&&(g=s,g<0))){if(this.isVertical&&c||!this.isVertical&&l)Ai(t),this.focusNextElement(g);else if(this.isVertical&&a||!this.isVertical&&o)Ai(t),this.focusPrevElement(g);else if(u)Ai(t),this.focusFirstElement();else if(h)Ai(t),this.focusLastElement();else if(m&&t.ctrlKey&&this.isCheckboxList)t.preventDefault(),this.toggleAll(this.selectedIndex===Tt.UNSET_INDEX?[]:this.selectedIndex);else if((d||f)&&i){var _=t.target;if(_&&_.tagName==="A"&&d||(Ai(t),this.adapter.listItemAtIndexHasClass(g,_e.LIST_ITEM_DISABLED_CLASS)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(g),this.adapter.notifyAction(g))}if(this.hasTypeahead){var v={event:t,focusItemAtIndex:function(S){r.focusItemAtIndex(S)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(S){return r.adapter.listItemAtIndexHasClass(S,_e.LIST_ITEM_DISABLED_CLASS)}};ym(v,this.typeaheadState)}}},e.prototype.handleClick=function(t,i){t!==Tt.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(t,_e.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(t,i),this.adapter.notifyAction(t)))},e.prototype.focusNextElement=function(t){var i=this.adapter.getListItemCount(),s=t+1;if(s>=i)if(this.wrapFocus)s=0;else return t;return this.focusItemAtIndex(s),s},e.prototype.focusPrevElement=function(t){var i=t-1;if(i<0)if(this.wrapFocus)i=this.adapter.getListItemCount()-1;else return t;return this.focusItemAtIndex(i),i},e.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},e.prototype.focusLastElement=function(){var t=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(t),t},e.prototype.focusInitialElement=function(){var t=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(t),t},e.prototype.setEnabled=function(t,i){!this.isIndexValid(t)||(i?(this.adapter.removeClassForElementIndex(t,_e.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,ri.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(t,_e.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,ri.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(t,i){var s=i===void 0?{}:i,r=s.forceUpdate;if(!(this.selectedIndex===t&&!r)){var o=_e.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(o=_e.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==Tt.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,o),this.setAriaForSingleSelectionAtIndex(t),this.setTabindexAtIndex(t),t!==Tt.UNSET_INDEX&&this.adapter.addClassForElementIndex(t,o),this.selectedIndex=t}},e.prototype.setAriaForSingleSelectionAtIndex=function(t){this.selectedIndex===Tt.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(t,ri.ARIA_CURRENT));var i=this.ariaCurrentAttrValue!==null,s=i?ri.ARIA_CURRENT:ri.ARIA_SELECTED;if(this.selectedIndex!==Tt.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,s,"false"),t!==Tt.UNSET_INDEX){var r=i?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(t,s,r)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?ri.ARIA_SELECTED:ri.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(t){var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(t,!0),this.selectedIndex!==Tt.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),this.adapter.setAttributeForElementIndex(t,i,"true"),this.selectedIndex=t},e.prototype.setCheckboxAtIndex=function(t){for(var i=this.getSelectionAttribute(),s=0;s<this.adapter.getListItemCount();s++){var r=!1;t.indexOf(s)>=0&&(r=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(s,r),this.adapter.setAttributeForElementIndex(s,i,r?"true":"false")}this.selectedIndex=t},e.prototype.setTabindexAtIndex=function(t){this.focusedItemIndex===Tt.UNSET_INDEX&&t!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==t&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==t&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),t!==Tt.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(t,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var t=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(t)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==Tt.UNSET_INDEX?this.selectedIndex:k0(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(t,i){return Math.min(t,i)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(t){var i=this;if(t instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return t.length===0?!0:t.some(function(s){return i.isIndexInRange(s)})}else if(typeof t=="number"){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange(t)||this.isSingleSelectionList&&t===Tt.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(t){var i=this.adapter.getListItemCount();return t>=0&&t<i},e.prototype.setSelectedIndexOnAction=function(t,i){i===void 0&&(i=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(t,i):this.setSelectedIndex(t)},e.prototype.toggleCheckboxAtIndex=function(t,i){var s=this.getSelectionAttribute(),r=this.adapter.isCheckboxCheckedAtIndex(t);i&&(r=!r,this.adapter.setCheckedCheckboxOrRadioAtIndex(t,r)),this.adapter.setAttributeForElementIndex(t,s,r?"true":"false");var o=this.selectedIndex===Tt.UNSET_INDEX?[]:this.selectedIndex.slice();r?o.push(t):o=o.filter(function(a){return a!==t}),this.selectedIndex=o},e.prototype.focusItemAtIndex=function(t){this.adapter.focusItemAtIndex(t),this.focusedItemIndex=t},e.prototype.toggleAll=function(t){var i=this.adapter.getListItemCount();if(t.length===i)this.setCheckboxAtIndex([]);else{for(var s=[],r=0;r<i;r++)(!this.adapter.listItemAtIndexHasClass(r,_e.LIST_ITEM_DISABLED_CLASS)||t.indexOf(r)>-1)&&s.push(r);this.setCheckboxAtIndex(s)}},e.prototype.typeaheadMatchItem=function(t,i,s){var r=this;s===void 0&&(s=!1);var o={focusItemAtIndex:function(a){r.focusItemAtIndex(a)},focusedItemIndex:i||this.focusedItemIndex,nextChar:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:s,isItemAtIndexDisabled:function(a){return r.adapter.listItemAtIndexHasClass(a,_e.LIST_ITEM_DISABLED_CLASS)}};return du(o,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return L0(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){vm(this.typeaheadState)},e}(yn);/**
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
 */var _m=function(n){hn(e,n);function e(t){var i=n.call(this,Je(Je({},e.defaultAdapter),t))||this;return i.isSurfaceOpen=!1,i.isQuickOpen=!1,i.isHoistedElement=!1,i.isFixedPosition=!1,i.isHorizontallyCenteredOnViewport=!1,i.maxHeight=0,i.openAnimationEndTimerId=0,i.closeAnimationEndTimerId=0,i.animationRequestId=0,i.anchorCorner=ss.TOP_START,i.originCorner=ss.TOP_START,i.anchorMargin={top:0,right:0,bottom:0,left:0},i.position={x:0,y:0},i}return Object.defineProperty(e,"cssClasses",{get:function(){return S0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return C0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return sr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return ss},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,i=t.ROOT,s=t.OPEN;if(!this.adapter.hasClass(i))throw new Error(i+" class required in root element.");this.adapter.hasClass(s)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(t){this.anchorCorner=t},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^ht.RIGHT},e.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition=t},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(t,i){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(i)?i:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t},e.prototype.setQuickOpen=function(t){this.isQuickOpen=t},e.prototype.setMaxHeight=function(t){this.maxHeight=t},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.adapter.addClass(e.cssClasses.OPEN),t.openAnimationEndTimerId=setTimeout(function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()},sr.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},e.prototype.close=function(t){var i=this;if(t===void 0&&(t=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){i.adapter.removeClass(e.cssClasses.OPEN),i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId=setTimeout(function(){i.closeAnimationEndTimerId=0,i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),i.adapter.notifyClose()},sr.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(t){var i=t.target;this.adapter.isElementInContainer(i)||this.close()},e.prototype.handleKeydown=function(t){var i=t.keyCode,s=t.key,r=s==="Escape"||i===27;r&&this.close()},e.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var i=this.getoriginCorner(),s=this.getMenuSurfaceMaxHeight(i),r=this.hasBit(i,ht.BOTTOM)?"bottom":"top",o=this.hasBit(i,ht.RIGHT)?"right":"left",a=this.getHorizontalOriginOffset(i),l=this.getVerticalOriginOffset(i),c=this.measurements,u=c.anchorSize,h=c.surfaceSize,d=(t={},t[o]=a,t[r]=l,t);u.width/h.width>sr.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(o="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(d),this.adapter.setTransformOrigin(o+" "+r),this.adapter.setPosition(d),this.adapter.setMaxHeight(s?s+"px":""),this.hasBit(i,ht.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),i=this.adapter.getBodyDimensions(),s=this.adapter.getWindowDimensions(),r=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:i,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:s.width-t.right,bottom:s.height-t.bottom,left:t.left},viewportSize:s,windowScroll:r}},e.prototype.getoriginCorner=function(){var t=this.originCorner,i=this.measurements,s=i.viewportDistance,r=i.anchorSize,o=i.surfaceSize,a=e.numbers.MARGIN_TO_EDGE,l=this.hasBit(this.anchorCorner,ht.BOTTOM),c,u;l?(c=s.top-a+this.anchorMargin.bottom,u=s.bottom-a-this.anchorMargin.bottom):(c=s.top-a+this.anchorMargin.top,u=s.bottom-a+r.height-this.anchorMargin.top);var h=u-o.height>0;!h&&c>u&&(t=this.setBit(t,ht.BOTTOM));var d=this.adapter.isRtl(),f=this.hasBit(this.anchorCorner,ht.FLIP_RTL),m=this.hasBit(this.anchorCorner,ht.RIGHT)||this.hasBit(t,ht.RIGHT),v=!1;d&&f?v=!m:v=m;var g,_;v?(g=s.left+r.width+this.anchorMargin.right,_=s.right-this.anchorMargin.right):(g=s.left+this.anchorMargin.left,_=s.right+r.width-this.anchorMargin.left);var I=g-o.width>0,S=_-o.width>0,w=this.hasBit(t,ht.FLIP_RTL)&&this.hasBit(t,ht.RIGHT);return S&&w&&d||!I&&w?t=this.unsetBit(t,ht.RIGHT):(I&&v&&d||I&&!v&&m||!S&&g>=_)&&(t=this.setBit(t,ht.RIGHT)),t},e.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0)return this.maxHeight;var i=this.measurements.viewportDistance,s=0,r=this.hasBit(t,ht.BOTTOM),o=this.hasBit(this.anchorCorner,ht.BOTTOM),a=e.numbers.MARGIN_TO_EDGE;return r?(s=i.top+this.anchorMargin.top-a,o||(s+=this.measurements.anchorSize.height)):(s=i.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-a,o&&(s-=this.measurements.anchorSize.height)),s},e.prototype.getHorizontalOriginOffset=function(t){var i=this.measurements.anchorSize,s=this.hasBit(t,ht.RIGHT),r=this.hasBit(this.anchorCorner,ht.RIGHT);if(s){var o=r?i.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?o-(this.measurements.viewportSize.width-this.measurements.bodySize.width):o}return r?i.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(t){var i=this.measurements.anchorSize,s=this.hasBit(t,ht.BOTTOM),r=this.hasBit(this.anchorCorner,ht.BOTTOM),o=0;return s?o=r?i.height-this.anchorMargin.top:-this.anchorMargin.bottom:o=r?i.height+this.anchorMargin.bottom:this.anchorMargin.top,o},e.prototype.adjustPositionForHoistedElement=function(t){var i,s,r=this.measurements,o=r.windowScroll,a=r.viewportDistance,l=r.surfaceSize,c=r.viewportSize,u=Object.keys(t);try{for(var h=An(u),d=h.next();!d.done;d=h.next()){var f=d.value,m=t[f]||0;if(this.isHorizontallyCenteredOnViewport&&(f==="left"||f==="right")){t[f]=(c.width-l.width)/2;continue}m+=a[f],this.isFixedPosition||(f==="top"?m+=o.y:f==="bottom"?m-=o.y:f==="left"?m+=o.x:m-=o.x),t[f]=m}}catch(v){i={error:v}}finally{try{d&&!d.done&&(s=h.return)&&s.call(h)}finally{if(i)throw i.error}}},e.prototype.maybeRestoreFocus=function(){var t=this,i=this.adapter.isFocused(),s=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(i||s)&&setTimeout(function(){t.adapter.restoreFocus()},sr.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(t,i){return Boolean(t&i)},e.prototype.setBit=function(t,i){return t|i},e.prototype.unsetBit=function(t,i){return t^i},e.prototype.isFinite=function(t){return typeof t=="number"&&isFinite(t)},e}(yn);/**
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
 */var Im={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function M0(n){return Boolean(n.document)&&typeof n.document.createElement=="function"}function fu(n,e){if(M0(n)&&e in Im){var t=n.document.createElement("div"),i=Im[e],s=i.standard,r=i.prefixed,o=s in t.style;return o?s:r}return e}/**
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
 */var os={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},as={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},P0={FOCUS_ROOT_INDEX:-1},ls;(function(n){n[n.NONE=0]="NONE",n[n.LIST_ROOT=1]="LIST_ROOT",n[n.FIRST_ITEM=2]="FIRST_ITEM",n[n.LAST_ITEM=3]="LAST_ITEM"})(ls||(ls={}));/**
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
 */var F0=function(n){hn(e,n);function e(t){var i=n.call(this,Je(Je({},e.defaultAdapter),t))||this;return i.closeAnimationEndTimerId=0,i.defaultFocusState=ls.LIST_ROOT,i.selectedIndex=-1,i}return Object.defineProperty(e,"cssClasses",{get:function(){return os},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return as},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return P0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},e.prototype.handleKeydown=function(t){var i=t.key,s=t.keyCode,r=i==="Tab"||s===9;r&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(t){var i=this,s=this.adapter.getElementIndex(t);if(!(s<0)){this.adapter.notifySelected({index:s});var r=this.adapter.getAttributeFromElementAtIndex(s,as.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(r),this.closeAnimationEndTimerId=setTimeout(function(){var o=i.adapter.getElementIndex(t);o>=0&&i.adapter.isSelectableItemAtIndex(o)&&i.setSelectedIndex(o)},_m.numbers.TRANSITION_CLOSE_DURATION)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case ls.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case ls.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case ls.NONE:break;default:this.adapter.focusListRoot();break}},e.prototype.setDefaultFocusState=function(t){this.defaultFocusState=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t){if(this.validatedIndex(t),!this.adapter.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var i=this.adapter.getSelectedSiblingOfItemAtIndex(t);i>=0&&(this.adapter.removeAttributeFromElementAtIndex(i,as.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(i,os.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(t,os.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(t,as.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=t},e.prototype.setEnabled=function(t,i){this.validatedIndex(t),i?(this.adapter.removeClassFromElementAtIndex(t,_e.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,as.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(t,_e.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,as.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(t){var i=this.adapter.getMenuItemCount(),s=t>=0&&t<i;if(!s)throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(yn);const{document:U0}=ap;function V0(n){let e,t,i,s,r,o,a,l;const c=n[30].default,u=Te(c,n,n[29],null);let h=[{class:i=ce(De({[n[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":n[5],"mdc-menu-surface--open":n[4],"smui-menu-surface--static":n[4],"mdc-menu-surface--fullwidth":n[6]},n[9]))},{style:s=Object.entries(n[10]).map(Em).concat([n[3]]).join(" ")},n[12]],d={};for(let f=0;f<h.length;f+=1)d=F(d,h[f]);return{c(){e=Ue(),t=te("div"),u&&u.c(),this.h()},l(f){e=Ve(f),t=ne(f,"DIV",{class:!0,style:!0});var m=ae(t);u&&u.l(m),m.forEach(O),this.h()},h(){se(t,d)},m(f,m){x(f,e,m),x(f,t,m),u&&u.m(t,null),n[32](t),o=!0,a||(l=[Ce(U0.body,"click",n[31],!0),oe(r=et.call(null,t,n[1])),oe(n[11].call(null,t)),Ce(t,"keydown",n[33])],a=!0)},p(f,m){u&&u.p&&(!o||m[0]&536870912)&&Ae(u,c,f,f[29],o?be(c,f[29],m,null):Se(f[29]),null),se(t,d=Ee(h,[(!o||m[0]&628&&i!==(i=ce(De({[f[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":f[5],"mdc-menu-surface--open":f[4],"smui-menu-surface--static":f[4],"mdc-menu-surface--fullwidth":f[6]},f[9]))))&&{class:i},(!o||m[0]&1032&&s!==(s=Object.entries(f[10]).map(Em).concat([f[3]]).join(" ")))&&{style:s},m[0]&4096&&f[12]])),r&&Pe(r.update)&&m[0]&2&&r.update.call(null,f[1])},i(f){o||(P(u,f),o=!0)},o(f){j(u,f),o=!1},d(f){f&&O(e),f&&O(t),u&&u.d(f),n[32](null),a=!1,Me(l)}}}const Em=([n,e])=>`${n}: ${e};`;function H0(n,e,t){const i=["use","class","style","static","anchor","fixed","open","fullWidth","quickOpen","anchorElement","anchorCorner","anchorMargin","maxHeight","horizontallyCenteredOnViewport","isOpen","setOpen","setAbsolutePosition","setIsHoisted","isFixed","getElement"];let s=ie(e,i),{$$slots:r={},$$scope:o}=e;var a,l,c;const u=Qe(ke());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{static:m=!1}=e,{anchor:v=!0}=e,{fixed:g=!1}=e,{open:_=m}=e,{fullWidth:I=!1}=e,{quickOpen:S=!1}=e,{anchorElement:w=void 0}=e,{anchorCorner:H=void 0}=e,{anchorMargin:C={top:0,right:0,bottom:0,left:0}}=e,{maxHeight:p=0}=e,{horizontallyCenteredOnViewport:y=!1}=e,k,E,D={},J={},T;_t("SMUI:list:role","menu"),_t("SMUI:list:item:role","menuitem");const N=ss;nn(()=>(t(8,E=new _m({addClass:q,removeClass:z,hasClass:L,hasAnchor:()=>!!w,notifyClose:()=>{t(0,_=m),_||Xe(k,"SMUIMenuSurface:closed",void 0,void 0,!0)},notifyClosing:()=>{t(0,_=m),_||Xe(k,"SMUIMenuSurface:closing",void 0,void 0,!0)},notifyOpen:()=>{t(0,_=!0),Xe(k,"SMUIMenuSurface:opened",void 0,void 0,!0)},isElementInContainer:ye=>k.contains(ye),isRtl:()=>getComputedStyle(k).getPropertyValue("direction")==="rtl",setTransformOrigin:ye=>{const ot=`${fu(window,"transform")}-origin`;t(10,J[ot]=ye,J)},isFocused:()=>document.activeElement===k,saveFocus:()=>{var ye;T=(ye=document.activeElement)!==null&&ye!==void 0?ye:void 0},restoreFocus:()=>{k.contains(document.activeElement)&&T&&"focus"in T&&T.focus()},getInnerDimensions:()=>({width:k.offsetWidth,height:k.offsetHeight}),getAnchorDimensions:()=>w?w.getBoundingClientRect():null,getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:ye=>{t(10,J.left="left"in ye?`${ye.left}px`:"",J),t(10,J.right="right"in ye?`${ye.right}px`:"",J),t(10,J.top="top"in ye?`${ye.top}px`:"",J),t(10,J.bottom="bottom"in ye?`${ye.bottom}px`:"",J)},setMaxHeight:ye=>{t(10,J.maxHeight=ye,J)}})),Xe(k,"SMUIMenuSurface:mount",{get open(){return _},set open(ye){t(0,_=ye)},closeProgrammatic:G}),E.init(),()=>{var ye;const ot=E.isHoistedElement;E.destroy(),ot&&((ye=k.parentNode)===null||ye===void 0||ye.removeChild(k))})),Bn(()=>{var W;v&&k&&((W=k.parentElement)===null||W===void 0||W.classList.remove("mdc-menu-surface--anchor"))});function L(W){return W in D?D[W]:lt().classList.contains(W)}function q(W){D[W]||t(9,D[W]=!0,D)}function z(W){(!(W in D)||D[W])&&t(9,D[W]=!1,D)}function G(W){E.close(W),t(0,_=!1)}function ve(){return _}function Y(W){t(0,_=W)}function Ne(W,ye){return E.setAbsolutePosition(W,ye)}function Be(W){return E.setIsHoisted(W)}function tt(){return E.isFixed()}function lt(){return k}const Le=W=>E&&_&&E.handleBodyClick(W);function ut(W){re[W?"unshift":"push"](()=>{k=W,t(7,k)})}const Oe=W=>E&&E.handleKeydown(W);return n.$$set=W=>{e=F(F({},e),Ge(W)),t(12,s=ie(e,i)),"use"in W&&t(1,h=W.use),"class"in W&&t(2,d=W.class),"style"in W&&t(3,f=W.style),"static"in W&&t(4,m=W.static),"anchor"in W&&t(14,v=W.anchor),"fixed"in W&&t(5,g=W.fixed),"open"in W&&t(0,_=W.open),"fullWidth"in W&&t(6,I=W.fullWidth),"quickOpen"in W&&t(15,S=W.quickOpen),"anchorElement"in W&&t(13,w=W.anchorElement),"anchorCorner"in W&&t(16,H=W.anchorCorner),"anchorMargin"in W&&t(17,C=W.anchorMargin),"maxHeight"in W&&t(18,p=W.maxHeight),"horizontallyCenteredOnViewport"in W&&t(19,y=W.horizontallyCenteredOnViewport),"$$scope"in W&&t(29,o=W.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&469778560&&k&&v&&!(t(26,a=k.parentElement)===null||a===void 0?void 0:a.classList.contains("mdc-menu-surface--anchor"))&&(t(27,l=k.parentElement)===null||l===void 0||l.classList.add("mdc-menu-surface--anchor"),t(13,w=t(28,c=k.parentElement)!==null&&c!==void 0?c:void 0)),n.$$.dirty[0]&257&&E&&E.isOpen()!==_&&(_?E.open():E.close()),n.$$.dirty[0]&33024&&E&&E.setQuickOpen(S),n.$$.dirty[0]&288&&E&&E.setFixedPosition(g),n.$$.dirty[0]&262400&&E&&p>0&&E.setMaxHeight(p),n.$$.dirty[0]&524544&&E&&E.setIsHorizontallyCenteredOnViewport(y),n.$$.dirty[0]&65792&&E&&H!=null&&(typeof H=="string"?E.setAnchorCorner(N[H]):E.setAnchorCorner(H)),n.$$.dirty[0]&131328&&E&&E.setAnchorMargin(C)},[_,h,d,f,m,g,I,k,E,D,J,u,s,w,v,S,H,C,p,y,ve,Y,Ne,Be,tt,lt,a,l,c,o,r,Le,ut,Oe]}class B0 extends Ke{constructor(e){super();We(this,e,H0,V0,je,{use:1,class:2,style:3,static:4,anchor:14,fixed:5,open:0,fullWidth:6,quickOpen:15,anchorElement:13,anchorCorner:16,anchorMargin:17,maxHeight:18,horizontallyCenteredOnViewport:19,isOpen:20,setOpen:21,setAbsolutePosition:22,setIsHoisted:23,isFixed:24,getElement:25},null,[-1,-1])}get isOpen(){return this.$$.ctx[20]}get setOpen(){return this.$$.ctx[21]}get setAbsolutePosition(){return this.$$.ctx[22]}get setIsHoisted(){return this.$$.ctx[23]}get isFixed(){return this.$$.ctx[24]}get getElement(){return this.$$.ctx[25]}}function j0(n){let e;const t=n[16].default,i=Te(t,n,n[21],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&2097152)&&Ae(i,t,s,s[21],e?be(t,s[21],r,null):Se(s[21]),null)},i(s){e||(P(i,s),e=!0)},o(s){j(i,s),e=!1},d(s){i&&i.d(s)}}}function q0(n){let e,t,i;const s=[{use:n[5]},{class:ce({[n[1]]:!0,"mdc-menu":!0})},n[9]];function r(a){n[18](a)}let o={$$slots:{default:[j0]},$$scope:{ctx:n}};for(let a=0;a<s.length;a+=1)o=F(o,s[a]);return n[0]!==void 0&&(o.open=n[0]),e=new B0({props:o}),n[17](e),re.push(()=>qn(e,"open",r)),e.$on("SMUIMenuSurface:mount",n[7]),e.$on("SMUIList:mount",n[8]),e.$on("SMUIMenuSurface:opened",n[19]),e.$on("keydown",n[6]),e.$on("SMUIList:action",n[20]),{c(){at(e.$$.fragment)},l(a){At(e.$$.fragment,a)},m(a,l){it(e,a,l),i=!0},p(a,[l]){const c=l&546?Ee(s,[l&32&&{use:a[5]},l&2&&{class:ce({[a[1]]:!0,"mdc-menu":!0})},l&512&&nt(a[9])]):{};l&2097152&&(c.$$scope={dirty:l,ctx:a}),!t&&l&1&&(t=!0,c.open=a[0],jn(()=>t=!1)),e.$set(c)},i(a){i||(P(e.$$.fragment,a),i=!0)},o(a){j(e.$$.fragment,a),i=!1},d(a){n[17](null),st(e,a)}}}function z0(n,e,t){let i;const s=["use","class","open","isOpen","setOpen","setDefaultFocusState","getSelectedIndex","getElement"];let r=ie(e,s),{$$slots:o={},$$scope:a}=e;const{closest:l}=uu,c=Qe(ke());let{use:u=[]}=e,{class:h=""}=e,{open:d=!1}=e,f,m,v,g;nn(()=>(t(3,m=new F0({addClassToElementAtIndex:(T,N)=>{g.addClassForElementIndex(T,N)},removeClassFromElementAtIndex:(T,N)=>{g.removeClassForElementIndex(T,N)},addAttributeToElementAtIndex:(T,N,L)=>{g.setAttributeForElementIndex(T,N,L)},removeAttributeFromElementAtIndex:(T,N)=>{g.removeAttributeForElementIndex(T,N)},getAttributeFromElementAtIndex:(T,N)=>g.getAttributeFromElementIndex(T,N),elementContainsClass:(T,N)=>T.classList.contains(N),closeSurface:T=>v.closeProgrammatic(T),getElementIndex:T=>g.getOrderedList().map(N=>N.element).indexOf(T),notifySelected:T=>Xe(y(),"SMUIMenu:selected",{index:T.index,item:g.getOrderedList()[T.index].element},void 0,!0),getMenuItemCount:()=>g.items.length,focusItemAtIndex:T=>g.focusItemAtIndex(T),focusListRoot:()=>"focus"in g.element&&g.element.focus(),isSelectableItemAtIndex:T=>!!l(g.getOrderedList()[T].element,`.${os.MENU_SELECTION_GROUP}`),getSelectedSiblingOfItemAtIndex:T=>{const N=g.getOrderedList(),L=l(N[T].element,`.${os.MENU_SELECTION_GROUP}`),q=L==null?void 0:L.querySelector(`.${os.MENU_SELECTED_LIST_ITEM}`);return q?N.map(z=>z.element).indexOf(q):-1}})),Xe(y(),"SMUIMenu:mount",m),m.init(),()=>{m.destroy()}));function _(T){m&&m.handleKeydown(T)}function I(T){v||(v=T.detail)}function S(T){g||t(4,g=T.detail)}function w(){return d}function H(T){t(0,d=T)}function C(T){m.setDefaultFocusState(T)}function p(){return m.getSelectedIndex()}function y(){return f.getElement()}function k(T){re[T?"unshift":"push"](()=>{f=T,t(2,f)})}function E(T){d=T,t(0,d)}const D=()=>m&&m.handleMenuSurfaceOpened(),J=T=>m&&m.handleItemAction(g.getOrderedList()[T.detail.index].element);return n.$$set=T=>{e=F(F({},e),Ge(T)),t(9,r=ie(e,s)),"use"in T&&t(10,u=T.use),"class"in T&&t(1,h=T.class),"open"in T&&t(0,d=T.open),"$$scope"in T&&t(21,a=T.$$scope)},n.$$.update=()=>{n.$$.dirty&1024&&t(5,i=[c,...u])},[d,h,f,m,g,i,_,I,S,r,u,w,H,C,p,y,o,k,E,D,J,a]}class HA extends Ke{constructor(e){super();We(this,e,z0,q0,je,{use:10,class:1,open:0,isOpen:11,setOpen:12,setDefaultFocusState:13,getSelectedIndex:14,getElement:15})}get isOpen(){return this.$$.ctx[11]}get setOpen(){return this.$$.ctx[12]}get setDefaultFocusState(){return this.$$.ctx[13]}get getSelectedIndex(){return this.$$.ctx[14]}get getElement(){return this.$$.ctx[15]}}function G0(n){let e;const t=n[37].default,i=Te(t,n,n[43],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[1]&4096)&&Ae(i,t,s,s[43],e?be(t,s[43],r,null):Se(s[43]),null)},i(s){e||(P(i,s),e=!0)},o(s){j(i,s),e=!1},d(s){i&&i.d(s)}}}function W0(n){let e,t,i;const s=[{use:[n[17],...n[0]]},{class:ce({[n[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":n[2],"mdc-deprecated-list--dense":n[3],"mdc-deprecated-list--textual-list":n[4],"mdc-deprecated-list--avatar-list":n[5]||n[18],"mdc-deprecated-list--icon-list":n[6],"mdc-deprecated-list--image-list":n[7],"mdc-deprecated-list--thumbnail-list":n[8],"mdc-deprecated-list--video-list":n[9],"mdc-deprecated-list--two-line":n[10],"smui-list--three-line":n[11]&&!n[10]})},{role:n[15]},n[23]];var r=n[12];function o(a){let l={$$slots:{default:[G0]},$$scope:{ctx:a}};for(let c=0;c<s.length;c+=1)l=F(l,s[c]);return{props:l}}return r&&(e=new r(o(n)),n[38](e),e.$on("keydown",n[39]),e.$on("focusin",n[40]),e.$on("focusout",n[41]),e.$on("click",n[42]),e.$on("SMUIListItem:mount",n[19]),e.$on("SMUIListItem:unmount",n[20]),e.$on("SMUI:action",n[21])),{c(){e&&at(e.$$.fragment),t=ft()},l(a){e&&At(e.$$.fragment,a),t=ft()},m(a,l){e&&it(e,a,l),x(a,t,l),i=!0},p(a,l){const c=l[0]&8818687?Ee(s,[l[0]&131073&&{use:[a[17],...a[0]]},l[0]&266238&&{class:ce({[a[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":a[2],"mdc-deprecated-list--dense":a[3],"mdc-deprecated-list--textual-list":a[4],"mdc-deprecated-list--avatar-list":a[5]||a[18],"mdc-deprecated-list--icon-list":a[6],"mdc-deprecated-list--image-list":a[7],"mdc-deprecated-list--thumbnail-list":a[8],"mdc-deprecated-list--video-list":a[9],"mdc-deprecated-list--two-line":a[10],"smui-list--three-line":a[11]&&!a[10]})},l[0]&32768&&{role:a[15]},l[0]&8388608&&nt(a[23])]):{};if(l[1]&4096&&(c.$$scope={dirty:l,ctx:a}),r!==(r=a[12])){if(e){Ft();const u=e;j(u.$$.fragment,1,0,()=>{st(u,1)}),Ut()}r?(e=new r(o(a)),a[38](e),e.$on("keydown",a[39]),e.$on("focusin",a[40]),e.$on("focusout",a[41]),e.$on("click",a[42]),e.$on("SMUIListItem:mount",a[19]),e.$on("SMUIListItem:unmount",a[20]),e.$on("SMUI:action",a[21]),at(e.$$.fragment),P(e.$$.fragment,1),it(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(a){i||(e&&P(e.$$.fragment,a),i=!0)},o(a){e&&j(e.$$.fragment,a),i=!1},d(a){n[38](null),a&&O(t),e&&st(e,a)}}}function K0(n,e,t){const i=["use","class","nonInteractive","dense","textualList","avatarList","iconList","imageList","thumbnailList","videoList","twoLine","threeLine","vertical","wrapFocus","singleSelection","selectedIndex","radioList","checkList","hasTypeahead","component","layout","setEnabled","getTypeaheadInProgress","getSelectedIndex","getFocusedItemIndex","getElement"];let s=ie(e,i),{$$slots:r={},$$scope:o}=e;var a;const{closest:l,matches:c}=uu,u=Qe(ke());let{use:h=[]}=e,{class:d=""}=e,{nonInteractive:f=!1}=e,{dense:m=!1}=e,{textualList:v=!1}=e,{avatarList:g=!1}=e,{iconList:_=!1}=e,{imageList:I=!1}=e,{thumbnailList:S=!1}=e,{videoList:w=!1}=e,{twoLine:H=!1}=e,{threeLine:C=!1}=e,{vertical:p=!0}=e,{wrapFocus:y=(a=Pt("SMUI:list:wrapFocus"))!==null&&a!==void 0?a:!1}=e,{singleSelection:k=!1}=e,{selectedIndex:E=-1}=e,{radioList:D=!1}=e,{checkList:J=!1}=e,{hasTypeahead:T=!1}=e,N,L,q=[],z=Pt("SMUI:list:role"),G=Pt("SMUI:list:nav");const ve=new WeakMap;let Y=Pt("SMUI:dialog:selection"),Ne=Pt("SMUI:addLayoutListener"),Be,{component:tt=G?sb:rb}=e;_t("SMUI:list:nonInteractive",f),_t("SMUI:separator:context","list"),z||(k?(z="listbox",_t("SMUI:list:item:role","option")):D?(z="radiogroup",_t("SMUI:list:item:role","radio")):J?(z="group",_t("SMUI:list:item:role","checkbox")):(z="list",_t("SMUI:list:item:role",void 0))),Ne&&(Be=Ne(Xt)),nn(()=>{t(13,L=new N0({addClassForElementIndex:ot,focusItemAtIndex:W,getAttributeForElementIndex:(Q,$)=>{var ze,Tn;return(Tn=(ze=Oe()[Q])===null||ze===void 0?void 0:ze.getAttr($))!==null&&Tn!==void 0?Tn:null},getFocusedElementIndex:()=>document.activeElement?Oe().map(Q=>Q.element).indexOf(document.activeElement):-1,getListItemCount:()=>q.length,getPrimaryTextAtIndex:xe,hasCheckboxAtIndex:Q=>{var $,ze;return(ze=($=Oe()[Q])===null||$===void 0?void 0:$.hasCheckbox)!==null&&ze!==void 0?ze:!1},hasRadioAtIndex:Q=>{var $,ze;return(ze=($=Oe()[Q])===null||$===void 0?void 0:$.hasRadio)!==null&&ze!==void 0?ze:!1},isCheckboxCheckedAtIndex:Q=>{var $;const ze=Oe()[Q];return($=(ze==null?void 0:ze.hasCheckbox)&&ze.checked)!==null&&$!==void 0?$:!1},isFocusInsideList:()=>N!=null&&cn()!==document.activeElement&&cn().contains(document.activeElement),isRootFocused:()=>N!=null&&document.activeElement===cn(),listItemAtIndexHasClass:ye,notifyAction:Q=>{t(24,E=Q),N!=null&&Xe(cn(),"SMUIList:action",{index:Q},void 0,!0)},removeClassForElementIndex:ln,setAttributeForElementIndex:un,setCheckedCheckboxOrRadioAtIndex:(Q,$)=>{Oe()[Q].checked=$},setTabIndexForListItemChildren:(Q,$)=>{const ze=Oe()[Q],Tn="button:not(:disabled), a";Array.prototype.forEach.call(ze.element.querySelectorAll(Tn),hs=>{hs.setAttribute("tabindex",$)})}}));const M={get element(){return cn()},get items(){return q},get typeaheadInProgress(){return L.isTypeaheadInProgress()},typeaheadMatchItem(Q,$){return L.typeaheadMatchItem(Q,$,!0)},getOrderedList:Oe,focusItemAtIndex:W,addClassForElementIndex:ot,removeClassForElementIndex:ln,setAttributeForElementIndex:un,removeAttributeForElementIndex:U,getAttributeFromElementIndex:he,getPrimaryTextAtIndex:xe};return Xe(cn(),"SMUIList:mount",M),L.init(),()=>{L.destroy()}}),Bn(()=>{Be&&Be()});function lt(M){q.push(M.detail),ve.set(M.detail.element,M.detail),k&&M.detail.selected&&t(24,E=bt(M.detail.element)),M.stopPropagation()}function Le(M){var Q;const $=(Q=M.detail&&q.indexOf(M.detail))!==null&&Q!==void 0?Q:-1;$!==-1&&(q.splice($,1),q=q,ve.delete(M.detail.element)),M.stopPropagation()}function ut(M){if(D||J){const Q=bt(M.target);if(Q!==-1){const $=Oe()[Q];$&&(D&&!$.checked||J)&&($.checked=!$.checked,$.activateRipple(),window.requestAnimationFrame(()=>{$.deactivateRipple()}))}}}function Oe(){return N==null?[]:[...cn().children].map(M=>ve.get(M)).filter(M=>M&&M._smui_list_item_accessor)}function W(M){const Q=Oe()[M];Q&&"focus"in Q.element&&Q.element.focus()}function ye(M,Q){var $;const ze=Oe()[M];return($=ze&&ze.hasClass(Q))!==null&&$!==void 0?$:!1}function ot(M,Q){const $=Oe()[M];$&&$.addClass(Q)}function ln(M,Q){const $=Oe()[M];$&&$.removeClass(Q)}function un(M,Q,$){const ze=Oe()[M];ze&&ze.addAttr(Q,$)}function U(M,Q){const $=Oe()[M];$&&$.removeAttr(Q)}function he(M,Q){const $=Oe()[M];return $?$.getAttr(Q):null}function xe(M){var Q;const $=Oe()[M];return(Q=$&&$.getPrimaryText())!==null&&Q!==void 0?Q:""}function bt(M){const Q=l(M,".mdc-deprecated-list-item, .mdc-deprecated-list");return Q&&c(Q,".mdc-deprecated-list-item")?Oe().map($=>$==null?void 0:$.element).indexOf(Q):-1}function Xt(){return L.layout()}function Qt(M,Q){return L.setEnabled(M,Q)}function En(){return L.isTypeaheadInProgress()}function fn(){return L.getSelectedIndex()}function Si(){return L.getFocusedItemIndex()}function cn(){return N.getElement()}function us(M){re[M?"unshift":"push"](()=>{N=M,t(14,N)})}const Ci=M=>L&&L.handleKeydown(M,M.target.classList.contains("mdc-deprecated-list-item"),bt(M.target)),Un=M=>L&&L.handleFocusIn(bt(M.target)),cs=M=>L&&L.handleFocusOut(bt(M.target)),wi=M=>L&&L.handleClick(bt(M.target),!c(M.target,'input[type="checkbox"], input[type="radio"]'));return n.$$set=M=>{e=F(F({},e),Ge(M)),t(23,s=ie(e,i)),"use"in M&&t(0,h=M.use),"class"in M&&t(1,d=M.class),"nonInteractive"in M&&t(2,f=M.nonInteractive),"dense"in M&&t(3,m=M.dense),"textualList"in M&&t(4,v=M.textualList),"avatarList"in M&&t(5,g=M.avatarList),"iconList"in M&&t(6,_=M.iconList),"imageList"in M&&t(7,I=M.imageList),"thumbnailList"in M&&t(8,S=M.thumbnailList),"videoList"in M&&t(9,w=M.videoList),"twoLine"in M&&t(10,H=M.twoLine),"threeLine"in M&&t(11,C=M.threeLine),"vertical"in M&&t(25,p=M.vertical),"wrapFocus"in M&&t(26,y=M.wrapFocus),"singleSelection"in M&&t(27,k=M.singleSelection),"selectedIndex"in M&&t(24,E=M.selectedIndex),"radioList"in M&&t(28,D=M.radioList),"checkList"in M&&t(29,J=M.checkList),"hasTypeahead"in M&&t(30,T=M.hasTypeahead),"component"in M&&t(12,tt=M.component),"$$scope"in M&&t(43,o=M.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&33562624&&L&&L.setVerticalOrientation(p),n.$$.dirty[0]&67117056&&L&&L.setWrapFocus(y),n.$$.dirty[0]&1073750016&&L&&L.setHasTypeahead(T),n.$$.dirty[0]&134225920&&L&&L.setSingleSelection(k),n.$$.dirty[0]&151003136&&L&&k&&fn()!==E&&L.setSelectedIndex(E)},[h,d,f,m,v,g,_,I,S,w,H,C,tt,L,N,z,c,u,Y,lt,Le,ut,bt,s,E,p,y,k,D,J,T,Xt,Qt,En,fn,Si,cn,r,us,Ci,Un,cs,wi,o]}class BA extends Ke{constructor(e){super();We(this,e,K0,W0,je,{use:0,class:1,nonInteractive:2,dense:3,textualList:4,avatarList:5,iconList:6,imageList:7,thumbnailList:8,videoList:9,twoLine:10,threeLine:11,vertical:25,wrapFocus:26,singleSelection:27,selectedIndex:24,radioList:28,checkList:29,hasTypeahead:30,component:12,layout:31,setEnabled:32,getTypeaheadInProgress:33,getSelectedIndex:34,getFocusedItemIndex:35,getElement:36},null,[-1,-1])}get layout(){return this.$$.ctx[31]}get setEnabled(){return this.$$.ctx[32]}get getTypeaheadInProgress(){return this.$$.ctx[33]}get getSelectedIndex(){return this.$$.ctx[34]}get getFocusedItemIndex(){return this.$$.ctx[35]}get getElement(){return this.$$.ctx[36]}}function Tm(n){let e;return{c(){e=te("span"),this.h()},l(t){e=ne(t,"SPAN",{class:!0}),ae(e).forEach(O),this.h()},h(){de(e,"class","mdc-deprecated-list-item__ripple")},m(t,i){x(t,e,i)},d(t){t&&O(e)}}}function x0(n){let e,t,i=n[6]&&Tm();const s=n[32].default,r=Te(s,n,n[35],null);return{c(){i&&i.c(),e=ft(),r&&r.c()},l(o){i&&i.l(o),e=ft(),r&&r.l(o)},m(o,a){i&&i.m(o,a),x(o,e,a),r&&r.m(o,a),t=!0},p(o,a){o[6]?i||(i=Tm(),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),r&&r.p&&(!t||a[1]&16)&&Ae(r,s,o,o[35],t?be(s,o[35],a,null):Se(o[35]),null)},i(o){t||(P(r,o),t=!0)},o(o){j(r,o),t=!1},d(o){i&&i.d(o),o&&O(e),r&&r.d(o)}}}function X0(n){let e,t,i;const s=[{use:[...n[5]?[]:[[Nn,{ripple:!n[13],unbounded:!1,color:(n[7]||n[0])&&n[4]==null?"primary":n[4],disabled:n[9],addClass:n[21],removeClass:n[22],addStyle:n[23]}]],n[19],...n[1]]},{class:ce(De({[n[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":n[7],"mdc-deprecated-list-item--selected":n[0],"mdc-deprecated-list-item--disabled":n[9],"mdc-menu-item--selected":!n[20]&&n[8]==="menuitem"&&n[0],"smui-menu-item--non-interactive":n[5]},n[15]))},{style:Object.entries(n[16]).map(bm).concat([n[3]]).join(" ")},n[20]&&n[7]?{"aria-current":"page"}:{},n[20]?{}:{role:n[8]},!n[20]&&n[8]==="option"?{"aria-selected":n[0]?"true":"false"}:{},!n[20]&&(n[8]==="radio"||n[8]==="checkbox")?{"aria-checked":n[13]&&n[13].checked?"true":"false"}:{},n[20]?{}:{"aria-disabled":n[9]?"true":"false"},{"data-menu-item-skip-restore-focus":n[10]||void 0},{tabindex:n[18]},{href:n[11]},n[17],n[27]];var r=n[12];function o(a){let l={$$slots:{default:[x0]},$$scope:{ctx:a}};for(let c=0;c<s.length;c+=1)l=F(l,s[c]);return{props:l}}return r&&(e=new r(o(n)),n[33](e),e.$on("click",n[24]),e.$on("keydown",n[25]),e.$on("SMUIGenericInput:mount",n[26]),e.$on("SMUIGenericInput:unmount",n[34])),{c(){e&&at(e.$$.fragment),t=ft()},l(a){e&&At(e.$$.fragment,a),t=ft()},m(a,l){e&&it(e,a,l),x(a,t,l),i=!0},p(a,l){const c=l[0]&150974399?Ee(s,[l[0]&15213235&&{use:[...a[5]?[]:[[Nn,{ripple:!a[13],unbounded:!1,color:(a[7]||a[0])&&a[4]==null?"primary":a[4],disabled:a[9],addClass:a[21],removeClass:a[22],addStyle:a[23]}]],a[19],...a[1]]},l[0]&1082277&&{class:ce(De({[a[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":a[7],"mdc-deprecated-list-item--selected":a[0],"mdc-deprecated-list-item--disabled":a[9],"mdc-menu-item--selected":!a[20]&&a[8]==="menuitem"&&a[0],"smui-menu-item--non-interactive":a[5]},a[15]))},l[0]&65544&&{style:Object.entries(a[16]).map(bm).concat([a[3]]).join(" ")},l[0]&1048704&&nt(a[20]&&a[7]?{"aria-current":"page"}:{}),l[0]&1048832&&nt(a[20]?{}:{role:a[8]}),l[0]&1048833&&nt(!a[20]&&a[8]==="option"?{"aria-selected":a[0]?"true":"false"}:{}),l[0]&1057024&&nt(!a[20]&&(a[8]==="radio"||a[8]==="checkbox")?{"aria-checked":a[13]&&a[13].checked?"true":"false"}:{}),l[0]&1049088&&nt(a[20]?{}:{"aria-disabled":a[9]?"true":"false"}),l[0]&1024&&{"data-menu-item-skip-restore-focus":a[10]||void 0},l[0]&262144&&{tabindex:a[18]},l[0]&2048&&{href:a[11]},l[0]&131072&&nt(a[17]),l[0]&134217728&&nt(a[27])]):{};if(l[0]&64|l[1]&16&&(c.$$scope={dirty:l,ctx:a}),r!==(r=a[12])){if(e){Ft();const u=e;j(u.$$.fragment,1,0,()=>{st(u,1)}),Ut()}r?(e=new r(o(a)),a[33](e),e.$on("click",a[24]),e.$on("keydown",a[25]),e.$on("SMUIGenericInput:mount",a[26]),e.$on("SMUIGenericInput:unmount",a[34]),at(e.$$.fragment),P(e.$$.fragment,1),it(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(a){i||(e&&P(e.$$.fragment,a),i=!0)},o(a){e&&j(e.$$.fragment,a),i=!1},d(a){n[33](null),a&&O(t),e&&st(e,a)}}}let Q0=0;const bm=([n,e])=>`${n}: ${e};`;function Y0(n,e,t){let i;const s=["use","class","style","color","nonInteractive","ripple","activated","role","selected","disabled","skipRestoreFocus","tabindex","inputId","href","component","getPrimaryText","getElement"];let r=ie(e,s),{$$slots:o={},$$scope:a}=e;var l;const c=Qe(ke());let u=()=>{};function h(U){return U===u}let{use:d=[]}=e,{class:f=""}=e,{style:m=""}=e,{color:v=void 0}=e,{nonInteractive:g=(l=Pt("SMUI:list:nonInteractive"))!==null&&l!==void 0?l:!1}=e;_t("SMUI:list:nonInteractive",void 0);let{ripple:_=!g}=e,{activated:I=!1}=e,{role:S=Pt("SMUI:list:item:role")}=e;_t("SMUI:list:item:role",void 0);let{selected:w=!1}=e,{disabled:H=!1}=e,{skipRestoreFocus:C=!1}=e,{tabindex:p=u}=e,{inputId:y="SMUI-form-field-list-"+Q0++}=e,{href:k=void 0}=e,E,D={},J={},T={},N,L,q=Pt("SMUI:list:item:nav"),{component:z=q?k?Nf:Ti:ib}=e;_t("SMUI:generic:input:props",{id:y}),_t("SMUI:separator:context",void 0),nn(()=>{if(!w&&!g){let he=!0,xe=E;for(;xe.previousSibling;)if(xe=xe.previousSibling,xe.nodeType===1&&xe.classList.contains("mdc-deprecated-list-item")&&!xe.classList.contains("mdc-deprecated-list-item--disabled")){he=!1;break}he&&(L=window.requestAnimationFrame(Le))}const U={_smui_list_item_accessor:!0,get element(){return ot()},get selected(){return w},set selected(he){t(0,w=he)},hasClass:G,addClass:ve,removeClass:Y,getAttr:Be,addAttr:tt,removeAttr:lt,getPrimaryText:ye,get checked(){var he;return(he=N&&N.checked)!==null&&he!==void 0?he:!1},set checked(he){N&&t(13,N.checked=!!he,N)},get hasCheckbox(){return!!(N&&"_smui_checkbox_accessor"in N)},get hasRadio(){return!!(N&&"_smui_radio_accessor"in N)},activateRipple(){N&&N.activateRipple()},deactivateRipple(){N&&N.deactivateRipple()},getValue(){return r.value}};return Xe(ot(),"SMUIListItem:mount",U),()=>{Xe(ot(),"SMUIListItem:unmount",U)}}),Bn(()=>{L&&window.cancelAnimationFrame(L)});function G(U){return U in D?D[U]:ot().classList.contains(U)}function ve(U){D[U]||t(15,D[U]=!0,D)}function Y(U){(!(U in D)||D[U])&&t(15,D[U]=!1,D)}function Ne(U,he){J[U]!=he&&(he===""||he==null?(delete J[U],t(16,J)):t(16,J[U]=he,J))}function Be(U){var he;return U in T?(he=T[U])!==null&&he!==void 0?he:null:ot().getAttribute(U)}function tt(U,he){T[U]!==he&&t(17,T[U]=he,T)}function lt(U){(!(U in T)||T[U]!=null)&&t(17,T[U]=void 0,T)}function Le(){let U=!0,he=E.getElement();for(;he.nextElementSibling;)if(he=he.nextElementSibling,he.nodeType===1&&he.classList.contains("mdc-deprecated-list-item")){const xe=he.attributes.getNamedItem("tabindex");if(xe&&xe.value==="0"){U=!1;break}}U&&t(18,i=0)}function ut(U){H||Xe(ot(),"SMUI:action",U)}function Oe(U){const he=U.key==="Enter",xe=U.key==="Space";(he||xe)&&ut(U)}function W(U){("_smui_checkbox_accessor"in U.detail||"_smui_radio_accessor"in U.detail)&&t(13,N=U.detail)}function ye(){var U,he,xe;const bt=ot(),Xt=bt.querySelector(".mdc-deprecated-list-item__primary-text");if(Xt)return(U=Xt.textContent)!==null&&U!==void 0?U:"";const Qt=bt.querySelector(".mdc-deprecated-list-item__text");return Qt?(he=Qt.textContent)!==null&&he!==void 0?he:"":(xe=bt.textContent)!==null&&xe!==void 0?xe:""}function ot(){return E.getElement()}function ln(U){re[U?"unshift":"push"](()=>{E=U,t(14,E)})}const un=()=>t(13,N=void 0);return n.$$set=U=>{e=F(F({},e),Ge(U)),t(27,r=ie(e,s)),"use"in U&&t(1,d=U.use),"class"in U&&t(2,f=U.class),"style"in U&&t(3,m=U.style),"color"in U&&t(4,v=U.color),"nonInteractive"in U&&t(5,g=U.nonInteractive),"ripple"in U&&t(6,_=U.ripple),"activated"in U&&t(7,I=U.activated),"role"in U&&t(8,S=U.role),"selected"in U&&t(0,w=U.selected),"disabled"in U&&t(9,H=U.disabled),"skipRestoreFocus"in U&&t(10,C=U.skipRestoreFocus),"tabindex"in U&&t(28,p=U.tabindex),"inputId"in U&&t(29,y=U.inputId),"href"in U&&t(11,k=U.href),"component"in U&&t(12,z=U.component),"$$scope"in U&&t(35,a=U.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&268444193&&t(18,i=h(p)?!g&&!H&&(w||N&&N.checked)?0:-1:p)},[w,d,f,m,v,g,_,I,S,H,C,k,z,N,E,D,J,T,i,c,q,ve,Y,Ne,ut,Oe,W,r,p,y,ye,ot,o,ln,un,a]}class J0 extends Ke{constructor(e){super();We(this,e,Y0,X0,je,{use:1,class:2,style:3,color:4,nonInteractive:5,ripple:6,activated:7,role:8,selected:0,disabled:9,skipRestoreFocus:10,tabindex:28,inputId:29,href:11,component:12,getPrimaryText:30,getElement:31},null,[-1,-1])}get getPrimaryText(){return this.$$.ctx[30]}get getElement(){return this.$$.ctx[31]}}Et({class:"mdc-deprecated-list-item__text",component:Ti});Et({class:"mdc-deprecated-list-item__primary-text",component:Ti});Et({class:"mdc-deprecated-list-item__secondary-text",component:Ti});function Z0(n){let e,t,i,s,r,o;const a=n[8].default,l=Te(a,n,n[7],null);let c=[{class:t=ce({[n[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":n[4]})},n[5]],u={};for(let h=0;h<c.length;h+=1)u=F(u,c[h]);return{c(){e=te("span"),l&&l.c(),this.h()},l(h){e=ne(h,"SPAN",{class:!0});var d=ae(e);l&&l.l(d),d.forEach(O),this.h()},h(){se(e,u)},m(h,d){x(h,e,d),l&&l.m(e,null),n[9](e),s=!0,r||(o=[oe(i=et.call(null,e,n[0])),oe(n[3].call(null,e))],r=!0)},p(h,[d]){l&&l.p&&(!s||d&128)&&Ae(l,a,h,h[7],s?be(a,h[7],d,null):Se(h[7]),null),se(e,u=Ee(c,[(!s||d&2&&t!==(t=ce({[h[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":h[4]})))&&{class:t},d&32&&h[5]])),i&&Pe(i.update)&&d&1&&i.update.call(null,h[0])},i(h){s||(P(l,h),s=!0)},o(h){j(l,h),s=!1},d(h){h&&O(e),l&&l.d(h),n[9](null),r=!1,Me(o)}}}function $0(n,e,t){const i=["use","class","getElement"];let s=ie(e,i),{$$slots:r={},$$scope:o}=e;const a=Qe(ke());let{use:l=[]}=e,{class:c=""}=e,u,h=Pt("SMUI:list:graphic:menu-selection-group");function d(){return u}function f(m){re[m?"unshift":"push"](()=>{u=m,t(2,u)})}return n.$$set=m=>{e=F(F({},e),Ge(m)),t(5,s=ie(e,i)),"use"in m&&t(0,l=m.use),"class"in m&&t(1,c=m.class),"$$scope"in m&&t(7,o=m.$$scope)},[l,c,u,a,h,s,d,o,r,f]}class eA extends Ke{constructor(e){super();We(this,e,$0,Z0,je,{use:0,class:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}Et({class:"mdc-deprecated-list-item__meta",component:Ti});Et({class:"mdc-deprecated-list-group",component:Mn});Et({class:"mdc-deprecated-list-group__subheader",component:nb});const jA=J0,tA=eA;Et({class:"mdc-menu__selection-group-icon",component:tA});/**
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
 */var en={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},nA={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var Am=function(n){hn(e,n);function e(t){var i=n.call(this,Je(Je({},e.defaultAdapter),t))||this;return i.animationFrame=0,i.animationTimer=0,i}return Object.defineProperty(e,"strings",{get:function(){return nA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return en},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(en.OPEN),this.adapter.addClass(en.ANIMATE),this.runNextAnimationFrame(function(){t.adapter.addClass(en.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(en.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(en.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(en.OPENING)||this.adapter.hasClass(en.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(en.CLOSING)},e.prototype.handleKeydown=function(t){var i=t.keyCode,s=t.key,r=s==="Escape"||i===27;r&&this.close()},e.prototype.handleTransitionEnd=function(t){var i=en.OPENING,s=en.CLOSING,r=en.OPEN,o=en.ANIMATE,a=en.ROOT,l=this.isElement(t.target)&&this.adapter.elementHasClass(t.target,a);!l||(this.isClosing()?(this.adapter.removeClass(r),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(o),this.adapter.removeClass(i),this.adapter.removeClass(s))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(t,0)})},e.prototype.isElement=function(t){return Boolean(t.classList)},e}(yn);/**
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
 */var iA=function(n){hn(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(Am);function sA(n){let e,t,i,s,r,o;const a=n[15].default,l=Te(a,n,n[14],null);let c=[{class:t=ce(De({[n[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":n[2]==="dismissible","mdc-drawer--modal":n[2]==="modal","smui-drawer__absolute":n[2]==="modal"&&!n[3]},n[6]))},n[8]],u={};for(let h=0;h<c.length;h+=1)u=F(u,c[h]);return{c(){e=te("aside"),l&&l.c(),this.h()},l(h){e=ne(h,"ASIDE",{class:!0});var d=ae(e);l&&l.l(d),d.forEach(O),this.h()},h(){se(e,u)},m(h,d){x(h,e,d),l&&l.m(e,null),n[16](e),s=!0,r||(o=[oe(i=et.call(null,e,n[0])),oe(n[7].call(null,e)),Ce(e,"keydown",n[17]),Ce(e,"transitionend",n[18])],r=!0)},p(h,[d]){l&&l.p&&(!s||d&16384)&&Ae(l,a,h,h[14],s?be(a,h[14],d,null):Se(h[14]),null),se(e,u=Ee(c,[(!s||d&78&&t!==(t=ce(De({[h[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":h[2]==="dismissible","mdc-drawer--modal":h[2]==="modal","smui-drawer__absolute":h[2]==="modal"&&!h[3]},h[6]))))&&{class:t},d&256&&h[8]])),i&&Pe(i.update)&&d&1&&i.update.call(null,h[0])},i(h){s||(P(l,h),s=!0)},o(h){j(l,h),s=!1},d(h){h&&O(e),l&&l.d(h),n[16](null),r=!1,Me(o)}}}function rA(n,e,t){const i=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let s=ie(e,i),{$$slots:r={},$$scope:o}=e;const{FocusTrap:a}=TT,l=Qe(ke());let{use:c=[]}=e,{class:u=""}=e,{variant:h=void 0}=e,{open:d=!1}=e,{fixed:f=!0}=e,m,v,g={},_=null,I,S=!1;_t("SMUI:list:nav",!0),_t("SMUI:list:item:nav",!0),_t("SMUI:list:wrapFocus",!0);let w=h;nn(()=>{I=new a(m,{skipInitialFocus:!0}),t(4,v=H()),v&&v.init()}),Bn(()=>{v&&v.destroy(),S&&S.removeEventListener("SMUIDrawerScrim:click",k)});function H(){var q,z;S&&S.removeEventListener("SMUIDrawerScrim:click",k),h==="modal"&&(S=(z=(q=m.parentNode)===null||q===void 0?void 0:q.querySelector(".mdc-drawer-scrim"))!==null&&z!==void 0?z:!1,S&&S.addEventListener("SMUIDrawerScrim:click",k));const G=h==="dismissible"?Am:h==="modal"?iA:void 0;return G?new G({addClass:p,removeClass:y,hasClass:C,elementHasClass:(ve,Y)=>ve.classList.contains(Y),saveFocus:()=>_=document.activeElement,restoreFocus:()=>{_&&"focus"in _&&m.contains(document.activeElement)&&_.focus()},focusActiveNavigationItem:()=>{const ve=m.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");ve&&ve.focus()},notifyClose:()=>{t(9,d=!1),Xe(m,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{t(9,d=!0),Xe(m,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>I.trapFocus(),releaseFocus:()=>I.releaseFocus()}):void 0}function C(q){return q in g?g[q]:J().classList.contains(q)}function p(q){g[q]||t(6,g[q]=!0,g)}function y(q){(!(q in g)||g[q])&&t(6,g[q]=!1,g)}function k(){v&&"handleScrimClick"in v&&v.handleScrimClick()}function E(q){t(9,d=q)}function D(){return d}function J(){return m}function T(q){re[q?"unshift":"push"](()=>{m=q,t(5,m)})}const N=q=>v&&v.handleKeydown(q),L=q=>v&&v.handleTransitionEnd(q);return n.$$set=q=>{e=F(F({},e),Ge(q)),t(8,s=ie(e,i)),"use"in q&&t(0,c=q.use),"class"in q&&t(1,u=q.class),"variant"in q&&t(2,h=q.variant),"open"in q&&t(9,d=q.open),"fixed"in q&&t(3,f=q.fixed),"$$scope"in q&&t(14,o=q.$$scope)},n.$$.update=()=>{n.$$.dirty&8212&&w!==h&&(t(13,w=h),v&&v.destroy(),t(6,g={}),t(4,v=H()),v&&v.init()),n.$$.dirty&528&&v&&v.isOpen()!==d&&(d?v.open():v.close())},[c,u,h,f,v,m,g,l,s,d,E,D,J,w,o,r,T,N,L]}class qA extends Ke{constructor(e){super();We(this,e,rA,sA,je,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}var zA=Et({class:"mdc-drawer-app-content",component:Mn}),GA=Et({class:"mdc-drawer__content",component:Mn});Et({class:"mdc-drawer__header",component:Mn});Et({class:"mdc-drawer__title",component:eb});Et({class:"mdc-drawer__subtitle",component:tb});function oA(n){let e,t,i,s,r,o;const a=n[9].default,l=Te(a,n,n[8],null);let c=[{class:t=ce({[n[1]]:!0,"mdc-card":!0,"mdc-card--outlined":n[2]==="outlined","smui-card--padded":n[3]})},n[6]],u={};for(let h=0;h<c.length;h+=1)u=F(u,c[h]);return{c(){e=te("div"),l&&l.c(),this.h()},l(h){e=ne(h,"DIV",{class:!0});var d=ae(e);l&&l.l(d),d.forEach(O),this.h()},h(){se(e,u)},m(h,d){x(h,e,d),l&&l.m(e,null),n[10](e),s=!0,r||(o=[oe(i=et.call(null,e,n[0])),oe(n[5].call(null,e))],r=!0)},p(h,[d]){l&&l.p&&(!s||d&256)&&Ae(l,a,h,h[8],s?be(a,h[8],d,null):Se(h[8]),null),se(e,u=Ee(c,[(!s||d&14&&t!==(t=ce({[h[1]]:!0,"mdc-card":!0,"mdc-card--outlined":h[2]==="outlined","smui-card--padded":h[3]})))&&{class:t},d&64&&h[6]])),i&&Pe(i.update)&&d&1&&i.update.call(null,h[0])},i(h){s||(P(l,h),s=!0)},o(h){j(l,h),s=!1},d(h){h&&O(e),l&&l.d(h),n[10](null),r=!1,Me(o)}}}function aA(n,e,t){const i=["use","class","variant","padded","getElement"];let s=ie(e,i),{$$slots:r={},$$scope:o}=e;const a=Qe(ke());let{use:l=[]}=e,{class:c=""}=e,{variant:u="raised"}=e,{padded:h=!1}=e,d;function f(){return d}function m(v){re[v?"unshift":"push"](()=>{d=v,t(4,d)})}return n.$$set=v=>{e=F(F({},e),Ge(v)),t(6,s=ie(e,i)),"use"in v&&t(0,l=v.use),"class"in v&&t(1,c=v.class),"variant"in v&&t(2,u=v.variant),"padded"in v&&t(3,h=v.padded),"$$scope"in v&&t(8,o=v.$$scope)},[l,c,u,h,d,a,s,f,o,r,m]}class WA extends Ke{constructor(e){super();We(this,e,aA,oA,je,{use:0,class:1,variant:2,padded:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}Et({class:"smui-card__content",component:Mn});Et({class:"mdc-card__media-content",component:Mn});Et({class:"mdc-card__action-buttons",component:Mn});Et({class:"mdc-card__action-icons",component:Mn});/**
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
 */var yt={DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",INPUT:"mdc-slider__input",RANGE:"mdc-slider--range",THUMB:"mdc-slider__thumb",THUMB_FOCUSED:"mdc-slider__thumb--focused",THUMB_KNOB:"mdc-slider__thumb-knob",THUMB_TOP:"mdc-slider__thumb--top",THUMB_WITH_INDICATOR:"mdc-slider__thumb--with-indicator",TICK_MARKS:"mdc-slider--tick-marks",TICK_MARKS_CONTAINER:"mdc-slider__tick-marks",TICK_MARK_ACTIVE:"mdc-slider__tick-mark--active",TICK_MARK_INACTIVE:"mdc-slider__tick-mark--inactive",TRACK:"mdc-slider__track",TRACK_ACTIVE:"mdc-slider__track--active_fill",VALUE_INDICATOR_TEXT:"mdc-slider__value-indicator-text"},Sm={STEP_SIZE:1,THUMB_UPDATE_MIN_PX:5},Rt={ARIA_VALUETEXT:"aria-valuetext",INPUT_DISABLED:"disabled",INPUT_MIN:"min",INPUT_MAX:"max",INPUT_VALUE:"value",INPUT_STEP:"step"};/**
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
 */var lA=function(){function n(){this.rafIDs=new Map}return n.prototype.request=function(e,t){var i=this;this.cancel(e);var s=requestAnimationFrame(function(r){i.rafIDs.delete(e),t(r)});this.rafIDs.set(e,s)},n.prototype.cancel=function(e){var t=this.rafIDs.get(e);t&&(cancelAnimationFrame(t),this.rafIDs.delete(e))},n.prototype.cancelAll=function(){var e=this;this.rafIDs.forEach(function(t,i){e.cancel(i)})},n.prototype.getQueue=function(){var e=[];return this.rafIDs.forEach(function(t,i){e.push(i)}),e},n}();/**
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
 */var dn;(function(n){n[n.ACTIVE=0]="ACTIVE",n[n.INACTIVE=1]="INACTIVE"})(dn||(dn={}));var R;(function(n){n[n.START=1]="START",n[n.END=2]="END"})(R||(R={}));/**
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
 */var Oo;(function(n){n.SLIDER_UPDATE="slider_update"})(Oo||(Oo={}));var mu=typeof window!="undefined",uA=function(n){hn(e,n);function e(t){var i=n.call(this,Je(Je({},e.defaultAdapter),t))||this;return i.initialStylesRemoved=!1,i.isDisabled=!1,i.isDiscrete=!1,i.step=Sm.STEP_SIZE,i.hasTickMarks=!1,i.isRange=!1,i.thumb=null,i.downEventClientX=null,i.startThumbKnobWidth=0,i.endThumbKnobWidth=0,i.animFrame=new lA,i}return Object.defineProperty(e,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},addThumbClass:function(){},removeThumbClass:function(){},getAttribute:function(){return null},getInputValue:function(){return""},setInputValue:function(){},getInputAttribute:function(){return null},setInputAttribute:function(){return null},removeInputAttribute:function(){return null},focusInput:function(){},isInputFocused:function(){return!1},getThumbKnobWidth:function(){return 0},getThumbBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},isRTL:function(){return!1},setThumbStyleProperty:function(){},removeThumbStyleProperty:function(){},setTrackActiveStyleProperty:function(){},removeTrackActiveStyleProperty:function(){},setValueIndicatorText:function(){},getValueToAriaValueTextFn:function(){return null},updateTickMarks:function(){},setPointerCapture:function(){},emitChangeEvent:function(){},emitInputEvent:function(){},emitDragStartEvent:function(){},emitDragEndEvent:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){},registerThumbEventHandler:function(){},deregisterThumbEventHandler:function(){},registerInputEventHandler:function(){},deregisterInputEventHandler:function(){},registerBodyEventHandler:function(){},deregisterBodyEventHandler:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.isDisabled=this.adapter.hasClass(yt.DISABLED),this.isDiscrete=this.adapter.hasClass(yt.DISCRETE),this.hasTickMarks=this.adapter.hasClass(yt.TICK_MARKS),this.isRange=this.adapter.hasClass(yt.RANGE);var i=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(Rt.INPUT_MIN,this.isRange?R.START:R.END),Rt.INPUT_MIN),s=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(Rt.INPUT_MAX,R.END),Rt.INPUT_MAX),r=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(Rt.INPUT_VALUE,R.END),Rt.INPUT_VALUE),o=this.isRange?this.convertAttributeValueToNumber(this.adapter.getInputAttribute(Rt.INPUT_VALUE,R.START),Rt.INPUT_VALUE):i,a=this.adapter.getInputAttribute(Rt.INPUT_STEP,R.END),l=a?this.convertAttributeValueToNumber(a,Rt.INPUT_STEP):this.step;this.validateProperties({min:i,max:s,value:r,valueStart:o,step:l}),this.min=i,this.max=s,this.value=r,this.valueStart=o,this.step=l,this.numDecimalPlaces=Cm(this.step),this.valueBeforeDownEvent=r,this.valueStartBeforeDownEvent=o,this.mousedownOrTouchstartListener=this.handleMousedownOrTouchstart.bind(this),this.moveListener=this.handleMove.bind(this),this.pointerdownListener=this.handlePointerdown.bind(this),this.pointerupListener=this.handlePointerup.bind(this),this.thumbMouseenterListener=this.handleThumbMouseenter.bind(this),this.thumbMouseleaveListener=this.handleThumbMouseleave.bind(this),this.inputStartChangeListener=function(){t.handleInputChange(R.START)},this.inputEndChangeListener=function(){t.handleInputChange(R.END)},this.inputStartFocusListener=function(){t.handleInputFocus(R.START)},this.inputEndFocusListener=function(){t.handleInputFocus(R.END)},this.inputStartBlurListener=function(){t.handleInputBlur(R.START)},this.inputEndBlurListener=function(){t.handleInputBlur(R.END)},this.resizeListener=this.handleResize.bind(this),this.registerEventHandlers()},e.prototype.destroy=function(){this.deregisterEventHandlers()},e.prototype.setMin=function(t){this.min=t,this.isRange||(this.valueStart=t),this.updateUI()},e.prototype.setMax=function(t){this.max=t,this.updateUI()},e.prototype.getMin=function(){return this.min},e.prototype.getMax=function(){return this.max},e.prototype.getValue=function(){return this.value},e.prototype.setValue=function(t){if(this.isRange&&t<this.valueStart)throw new Error("end thumb value ("+t+") must be >= start thumb "+("value ("+this.valueStart+")"));this.updateValue(t,R.END)},e.prototype.getValueStart=function(){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");return this.valueStart},e.prototype.setValueStart=function(t){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");if(this.isRange&&t>this.value)throw new Error("start thumb value ("+t+") must be <= end thumb "+("value ("+this.value+")"));this.updateValue(t,R.START)},e.prototype.setStep=function(t){this.step=t,this.numDecimalPlaces=Cm(t),this.updateUI()},e.prototype.setIsDiscrete=function(t){this.isDiscrete=t,this.updateValueIndicatorUI(),this.updateTickMarksUI()},e.prototype.getStep=function(){return this.step},e.prototype.setHasTickMarks=function(t){this.hasTickMarks=t,this.updateTickMarksUI()},e.prototype.getDisabled=function(){return this.isDisabled},e.prototype.setDisabled=function(t){this.isDisabled=t,t?(this.adapter.addClass(yt.DISABLED),this.isRange&&this.adapter.setInputAttribute(Rt.INPUT_DISABLED,"",R.START),this.adapter.setInputAttribute(Rt.INPUT_DISABLED,"",R.END)):(this.adapter.removeClass(yt.DISABLED),this.isRange&&this.adapter.removeInputAttribute(Rt.INPUT_DISABLED,R.START),this.adapter.removeInputAttribute(Rt.INPUT_DISABLED,R.END))},e.prototype.getIsRange=function(){return this.isRange},e.prototype.layout=function(t){var i=t===void 0?{}:t,s=i.skipUpdateUI;this.rect=this.adapter.getBoundingClientRect(),this.isRange&&(this.startThumbKnobWidth=this.adapter.getThumbKnobWidth(R.START),this.endThumbKnobWidth=this.adapter.getThumbKnobWidth(R.END)),s||this.updateUI()},e.prototype.handleResize=function(){this.layout()},e.prototype.handleDown=function(t){if(!this.isDisabled){this.valueStartBeforeDownEvent=this.valueStart,this.valueBeforeDownEvent=this.value;var i=t.clientX!=null?t.clientX:t.targetTouches[0].clientX;this.downEventClientX=i;var s=this.mapClientXOnSliderScale(i);this.thumb=this.getThumbFromDownEvent(i,s),this.thumb!==null&&(this.handleDragStart(t,s,this.thumb),this.updateValue(s,this.thumb,{emitInputEvent:!0}))}},e.prototype.handleMove=function(t){if(!this.isDisabled){t.preventDefault();var i=t.clientX!=null?t.clientX:t.targetTouches[0].clientX,s=this.thumb!=null;if(this.thumb=this.getThumbFromMoveEvent(i),this.thumb!==null){var r=this.mapClientXOnSliderScale(i);s||(this.handleDragStart(t,r,this.thumb),this.adapter.emitDragStartEvent(r,this.thumb)),this.updateValue(r,this.thumb,{emitInputEvent:!0})}}},e.prototype.handleUp=function(){if(!(this.isDisabled||this.thumb===null)){var t=this.thumb===R.START?this.valueStartBeforeDownEvent:this.valueBeforeDownEvent,i=this.thumb===R.START?this.valueStart:this.value;t!==i&&this.adapter.emitChangeEvent(i,this.thumb),this.adapter.emitDragEndEvent(i,this.thumb),this.thumb=null}},e.prototype.handleThumbMouseenter=function(){!this.isDiscrete||!this.isRange||(this.adapter.addThumbClass(yt.THUMB_WITH_INDICATOR,R.START),this.adapter.addThumbClass(yt.THUMB_WITH_INDICATOR,R.END))},e.prototype.handleThumbMouseleave=function(){!this.isDiscrete||!this.isRange||this.adapter.isInputFocused(R.START)||this.adapter.isInputFocused(R.END)||(this.adapter.removeThumbClass(yt.THUMB_WITH_INDICATOR,R.START),this.adapter.removeThumbClass(yt.THUMB_WITH_INDICATOR,R.END))},e.prototype.handleMousedownOrTouchstart=function(t){var i=this,s=t.type==="mousedown"?"mousemove":"touchmove";this.adapter.registerBodyEventHandler(s,this.moveListener);var r=function(){i.handleUp(),i.adapter.deregisterBodyEventHandler(s,i.moveListener),i.adapter.deregisterEventHandler("mouseup",r),i.adapter.deregisterEventHandler("touchend",r)};this.adapter.registerBodyEventHandler("mouseup",r),this.adapter.registerBodyEventHandler("touchend",r),this.handleDown(t)},e.prototype.handlePointerdown=function(t){this.adapter.setPointerCapture(t.pointerId),this.adapter.registerEventHandler("pointermove",this.moveListener),this.handleDown(t)},e.prototype.handleInputChange=function(t){var i=Number(this.adapter.getInputValue(t));t===R.START?this.setValueStart(i):this.setValue(i),this.adapter.emitChangeEvent(t===R.START?this.valueStart:this.value,t),this.adapter.emitInputEvent(t===R.START?this.valueStart:this.value,t)},e.prototype.handleInputFocus=function(t){if(this.adapter.addThumbClass(yt.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.addThumbClass(yt.THUMB_WITH_INDICATOR,t),this.isRange)){var i=t===R.START?R.END:R.START;this.adapter.addThumbClass(yt.THUMB_WITH_INDICATOR,i)}},e.prototype.handleInputBlur=function(t){if(this.adapter.removeThumbClass(yt.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.removeThumbClass(yt.THUMB_WITH_INDICATOR,t),this.isRange)){var i=t===R.START?R.END:R.START;this.adapter.removeThumbClass(yt.THUMB_WITH_INDICATOR,i)}},e.prototype.handleDragStart=function(t,i,s){this.adapter.emitDragStartEvent(i,s),this.adapter.focusInput(s),t.preventDefault()},e.prototype.getThumbFromDownEvent=function(t,i){if(!this.isRange)return R.END;var s=this.adapter.getThumbBoundingClientRect(R.START),r=this.adapter.getThumbBoundingClientRect(R.END),o=t>=s.left&&t<=s.right,a=t>=r.left&&t<=r.right;return o&&a?null:o?R.START:a?R.END:i<this.valueStart?R.START:i>this.value?R.END:i-this.valueStart<=this.value-i?R.START:R.END},e.prototype.getThumbFromMoveEvent=function(t){if(this.thumb!==null)return this.thumb;if(this.downEventClientX===null)throw new Error("`downEventClientX` is null after move event.");var i=Math.abs(this.downEventClientX-t)<Sm.THUMB_UPDATE_MIN_PX;if(i)return this.thumb;var s=t<this.downEventClientX;return s?this.adapter.isRTL()?R.END:R.START:this.adapter.isRTL()?R.START:R.END},e.prototype.updateUI=function(t){this.updateThumbAndInputAttributes(t),this.updateThumbAndTrackUI(t),this.updateValueIndicatorUI(t),this.updateTickMarksUI()},e.prototype.updateThumbAndInputAttributes=function(t){if(!!t){var i=this.isRange&&t===R.START?this.valueStart:this.value,s=String(i);this.adapter.setInputAttribute(Rt.INPUT_VALUE,s,t),this.isRange&&t===R.START?this.adapter.setInputAttribute(Rt.INPUT_MIN,s,R.END):this.isRange&&t===R.END&&this.adapter.setInputAttribute(Rt.INPUT_MAX,s,R.START),this.adapter.getInputValue(t)!==s&&this.adapter.setInputValue(s,t);var r=this.adapter.getValueToAriaValueTextFn();r&&this.adapter.setInputAttribute(Rt.ARIA_VALUETEXT,r(i),t)}},e.prototype.updateValueIndicatorUI=function(t){if(!!this.isDiscrete){var i=this.isRange&&t===R.START?this.valueStart:this.value;this.adapter.setValueIndicatorText(i,t===R.START?R.START:R.END),!t&&this.isRange&&this.adapter.setValueIndicatorText(this.valueStart,R.START)}},e.prototype.updateTickMarksUI=function(){if(!(!this.isDiscrete||!this.hasTickMarks)){var t=(this.valueStart-this.min)/this.step,i=(this.value-this.valueStart)/this.step+1,s=(this.max-this.value)/this.step,r=Array.from({length:t}).fill(dn.INACTIVE),o=Array.from({length:i}).fill(dn.ACTIVE),a=Array.from({length:s}).fill(dn.INACTIVE);this.adapter.updateTickMarks(r.concat(o).concat(a))}},e.prototype.mapClientXOnSliderScale=function(t){var i=t-this.rect.left,s=i/this.rect.width;this.adapter.isRTL()&&(s=1-s);var r=this.min+s*(this.max-this.min);return r===this.max||r===this.min?r:Number(this.quantize(r).toFixed(this.numDecimalPlaces))},e.prototype.quantize=function(t){var i=Math.round((t-this.min)/this.step);return this.min+i*this.step},e.prototype.updateValue=function(t,i,s){var r=s===void 0?{}:s,o=r.emitInputEvent;if(t=this.clampValue(t,i),this.isRange&&i===R.START){if(this.valueStart===t)return;this.valueStart=t}else{if(this.value===t)return;this.value=t}this.updateUI(i),o&&this.adapter.emitInputEvent(i===R.START?this.valueStart:this.value,i)},e.prototype.clampValue=function(t,i){t=Math.min(Math.max(t,this.min),this.max);var s=this.isRange&&i===R.START&&t>this.value;if(s)return this.value;var r=this.isRange&&i===R.END&&t<this.valueStart;return r?this.valueStart:t},e.prototype.updateThumbAndTrackUI=function(t){var i=this,s=this,r=s.max,o=s.min,a=(this.value-this.valueStart)/(r-o),l=a*this.rect.width,c=this.adapter.isRTL(),u=mu?fu(window,"transform"):"transform";if(this.isRange){var h=this.adapter.isRTL()?(r-this.value)/(r-o)*this.rect.width:(this.valueStart-o)/(r-o)*this.rect.width,d=h+l;this.animFrame.request(Oo.SLIDER_UPDATE,function(){var f=!c&&t===R.START||c&&t!==R.START;f?(i.adapter.setTrackActiveStyleProperty("transform-origin","right"),i.adapter.setTrackActiveStyleProperty("left","unset"),i.adapter.setTrackActiveStyleProperty("right",i.rect.width-d+"px")):(i.adapter.setTrackActiveStyleProperty("transform-origin","left"),i.adapter.setTrackActiveStyleProperty("right","unset"),i.adapter.setTrackActiveStyleProperty("left",h+"px")),i.adapter.setTrackActiveStyleProperty(u,"scaleX("+a+")");var m=c?d:h,v=i.adapter.isRTL()?h:d;(t===R.START||!t||!i.initialStylesRemoved)&&i.adapter.setThumbStyleProperty(u,"translateX("+m+"px)",R.START),(t===R.END||!t||!i.initialStylesRemoved)&&i.adapter.setThumbStyleProperty(u,"translateX("+v+"px)",R.END),i.removeInitialStyles(c),i.updateOverlappingThumbsUI(m,v,t)})}else this.animFrame.request(Oo.SLIDER_UPDATE,function(){var f=c?i.rect.width-l:l;i.adapter.setThumbStyleProperty(u,"translateX("+f+"px)",R.END),i.adapter.setTrackActiveStyleProperty(u,"scaleX("+a+")"),i.removeInitialStyles(c)})},e.prototype.removeInitialStyles=function(t){if(!this.initialStylesRemoved){var i=t?"right":"left";this.adapter.removeThumbStyleProperty(i,R.END),this.isRange&&this.adapter.removeThumbStyleProperty(i,R.START),this.initialStylesRemoved=!0,this.resetTrackAndThumbAnimation()}},e.prototype.resetTrackAndThumbAnimation=function(){var t=this;if(!!this.isDiscrete){var i=mu?fu(window,"transition"):"transition",s="all 0s ease 0s";this.adapter.setThumbStyleProperty(i,s,R.END),this.isRange&&this.adapter.setThumbStyleProperty(i,s,R.START),this.adapter.setTrackActiveStyleProperty(i,s),requestAnimationFrame(function(){t.adapter.removeThumbStyleProperty(i,R.END),t.adapter.removeTrackActiveStyleProperty(i),t.isRange&&t.adapter.removeThumbStyleProperty(i,R.START)})}},e.prototype.updateOverlappingThumbsUI=function(t,i,s){var r=!1;if(this.adapter.isRTL()){var o=t-this.startThumbKnobWidth/2,a=i+this.endThumbKnobWidth/2;r=a>=o}else{var l=t+this.startThumbKnobWidth/2,c=i-this.endThumbKnobWidth/2;r=l>=c}r?(this.adapter.addThumbClass(yt.THUMB_TOP,s||R.END),this.adapter.removeThumbClass(yt.THUMB_TOP,s===R.START?R.END:R.START)):(this.adapter.removeThumbClass(yt.THUMB_TOP,R.START),this.adapter.removeThumbClass(yt.THUMB_TOP,R.END))},e.prototype.convertAttributeValueToNumber=function(t,i){if(t===null)throw new Error("MDCSliderFoundation: `"+i+"` must be non-null.");var s=Number(t);if(isNaN(s))throw new Error("MDCSliderFoundation: `"+i+"` value is "+("`"+t+"`, but must be a number."));return s},e.prototype.validateProperties=function(t){var i=t.min,s=t.max,r=t.value,o=t.valueStart,a=t.step;if(i>=s)throw new Error("MDCSliderFoundation: min must be strictly less than max. "+("Current: [min: "+i+", max: "+s+"]"));if(a<=0)throw new Error("MDCSliderFoundation: step must be a positive number. "+("Current step: "+this.step));if(this.isRange){if(r<i||r>s||o<i||o>s)throw new Error("MDCSliderFoundation: values must be in [min, max] range. "+("Current values: [start value: "+o+", end value: "+r+"]"));if(o>r)throw new Error("MDCSliderFoundation: start value must be <= end value. "+("Current values: [start value: "+o+", end value: "+r+"]"));var l=(o-i)/a,c=(r-i)/a;if(l%1!=0||c%1!=0)throw new Error("MDCSliderFoundation: Slider values must be valid based on the "+("step value. Current values: [start value: "+o+", ")+("end value: "+r+"]"))}else{if(r<i||r>s)throw new Error("MDCSliderFoundation: value must be in [min, max] range. "+("Current value: "+r));var c=(r-i)/a;if(c%1!=0)throw new Error("MDCSliderFoundation: Slider value must be valid based on the "+("step value. Current value: "+r))}},e.prototype.registerEventHandlers=function(){this.adapter.registerWindowEventHandler("resize",this.resizeListener),e.SUPPORTS_POINTER_EVENTS?(this.adapter.registerEventHandler("pointerdown",this.pointerdownListener),this.adapter.registerEventHandler("pointerup",this.pointerupListener)):(this.adapter.registerEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.registerEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.registerThumbEventHandler(R.START,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(R.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(R.START,"change",this.inputStartChangeListener),this.adapter.registerInputEventHandler(R.START,"focus",this.inputStartFocusListener),this.adapter.registerInputEventHandler(R.START,"blur",this.inputStartBlurListener)),this.adapter.registerThumbEventHandler(R.END,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(R.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(R.END,"change",this.inputEndChangeListener),this.adapter.registerInputEventHandler(R.END,"focus",this.inputEndFocusListener),this.adapter.registerInputEventHandler(R.END,"blur",this.inputEndBlurListener)},e.prototype.deregisterEventHandlers=function(){this.adapter.deregisterWindowEventHandler("resize",this.resizeListener),e.SUPPORTS_POINTER_EVENTS?(this.adapter.deregisterEventHandler("pointerdown",this.pointerdownListener),this.adapter.deregisterEventHandler("pointerup",this.pointerupListener)):(this.adapter.deregisterEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.deregisterEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.deregisterThumbEventHandler(R.START,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(R.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(R.START,"change",this.inputStartChangeListener),this.adapter.deregisterInputEventHandler(R.START,"focus",this.inputStartFocusListener),this.adapter.deregisterInputEventHandler(R.START,"blur",this.inputStartBlurListener)),this.adapter.deregisterThumbEventHandler(R.END,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(R.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(R.END,"change",this.inputEndChangeListener),this.adapter.deregisterInputEventHandler(R.END,"focus",this.inputEndFocusListener),this.adapter.deregisterInputEventHandler(R.END,"blur",this.inputEndBlurListener)},e.prototype.handlePointerup=function(){this.handleUp(),this.adapter.deregisterEventHandler("pointermove",this.moveListener)},e.SUPPORTS_POINTER_EVENTS=mu&&Boolean(window.PointerEvent)&&!cA(),e}(yn);function cA(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}function Cm(n){var e=/(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(n));if(!e)return 0;var t=e[1]||"",i=e[2]||0;return Math.max(0,(t==="0"?0:t.length)-Number(i))}function wm(n,e,t){const i=n.slice();return i[90]=e[t],i}function hA(n){let e,t,i,s,r=[{class:t=ce({[n[12]]:!0,"mdc-slider__input":!0})},{type:"range"},{disabled:n[5]},{step:n[9]},{min:n[10]},{max:n[11]},n[32],n[23],vt(n[36],"input$")],o={};for(let a=0;a<r.length;a+=1)o=F(o,r[a]);return{c(){e=te("input"),this.h()},l(a){e=ne(a,"INPUT",{class:!0,type:!0,step:!0,min:!0,max:!0}),this.h()},h(){se(e,o)},m(a,l){x(a,e,l),e.autofocus&&e.focus(),n[60](e),Hn(e,n[0]),i||(s=[Ce(e,"change",n[61]),Ce(e,"input",n[61]),Ce(e,"blur",n[54]),Ce(e,"focus",n[55])],i=!0)},p(a,l){se(e,o=Ee(r,[l[0]&4096&&t!==(t=ce({[a[12]]:!0,"mdc-slider__input":!0}))&&{class:t},{type:"range"},l[0]&32&&{disabled:a[5]},l[0]&512&&{step:a[9]},l[0]&1024&&{min:a[10]},l[0]&2048&&{max:a[11]},a[32],l[0]&8388608&&a[23],l[1]&32&&vt(a[36],"input$")])),l[0]&1&&Hn(e,a[0])},d(a){a&&O(e),n[60](null),i=!1,Me(s)}}}function dA(n){let e,t,i,s,r,o,a,l=[{class:t=ce({[n[12]]:!0,"mdc-slider__input":!0})},{type:"range"},{disabled:n[5]},{step:n[9]},{min:n[10]},{max:n[2]},n[24],vt(n[36],"input$")],c={};for(let d=0;d<l.length;d+=1)c=F(c,l[d]);let u=[{class:r=ce({[n[12]]:!0,"mdc-slider__input":!0})},{type:"range"},{disabled:n[5]},{step:n[9]},{min:n[1]},{max:n[11]},n[32],n[23],vt(n[36],"input$")],h={};for(let d=0;d<u.length;d+=1)h=F(h,u[d]);return{c(){e=te("input"),i=Ue(),s=te("input"),this.h()},l(d){e=ne(d,"INPUT",{class:!0,type:!0,step:!0,min:!0,max:!0}),i=Ve(d),s=ne(d,"INPUT",{class:!0,type:!0,step:!0,min:!0,max:!0}),this.h()},h(){se(e,c),se(s,h)},m(d,f){x(d,e,f),e.autofocus&&e.focus(),n[56](e),Hn(e,n[1]),x(d,i,f),x(d,s,f),s.autofocus&&s.focus(),n[58](s),Hn(s,n[2]),o||(a=[Ce(e,"change",n[57]),Ce(e,"input",n[57]),Ce(e,"blur",n[52]),Ce(e,"focus",n[53]),Ce(s,"change",n[59]),Ce(s,"input",n[59]),Ce(s,"blur",n[50]),Ce(s,"focus",n[51])],o=!0)},p(d,f){se(e,c=Ee(l,[f[0]&4096&&t!==(t=ce({[d[12]]:!0,"mdc-slider__input":!0}))&&{class:t},{type:"range"},f[0]&32&&{disabled:d[5]},f[0]&512&&{step:d[9]},f[0]&1024&&{min:d[10]},f[0]&4&&{max:d[2]},f[0]&16777216&&d[24],f[1]&32&&vt(d[36],"input$")])),f[0]&2&&Hn(e,d[1]),se(s,h=Ee(u,[f[0]&4096&&r!==(r=ce({[d[12]]:!0,"mdc-slider__input":!0}))&&{class:r},{type:"range"},f[0]&32&&{disabled:d[5]},f[0]&512&&{step:d[9]},f[0]&2&&{min:d[1]},f[0]&2048&&{max:d[11]},d[32],f[0]&8388608&&d[23],f[1]&32&&vt(d[36],"input$")])),f[0]&4&&Hn(s,d[2])},d(d){d&&O(e),n[56](null),d&&O(i),d&&O(s),n[58](null),o=!1,Me(a)}}}function Rm(n){let e,t=n[30],i=[];for(let s=0;s<t.length;s+=1)i[s]=Lm(wm(n,t,s));return{c(){e=te("div");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=ne(s,"DIV",{class:!0});var r=ae(e);for(let o=0;o<i.length;o+=1)i[o].l(r);r.forEach(O),this.h()},h(){de(e,"class","mdc-slider__tick-marks")},m(s,r){x(s,e,r);for(let o=0;o<i.length;o+=1)i[o].m(e,null)},p(s,r){if(r[0]&1073741824){t=s[30];let o;for(o=0;o<t.length;o+=1){const a=wm(s,t,o);i[o]?i[o].p(a,r):(i[o]=Lm(a),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}},d(s){s&&O(e),$m(i,s)}}}function Lm(n){let e,t;return{c(){e=te("div"),this.h()},l(i){e=ne(i,"DIV",{class:!0}),ae(e).forEach(O),this.h()},h(){de(e,"class",t=n[90]===dn.ACTIVE?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive")},m(i,s){x(i,e,s)},p(i,s){s[0]&1073741824&&t!==(t=i[90]===dn.ACTIVE?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive")&&de(e,"class",t)},d(i){i&&O(e)}}}function fA(n){let e,t,i,s,r,o,a,l,c=n[7]&&Om(n);return{c(){e=te("div"),c&&c.c(),t=Ue(),i=te("div"),this.h()},l(u){e=ne(u,"DIV",{class:!0,style:!0});var h=ae(e);c&&c.l(h),t=Ve(h),i=ne(h,"DIV",{class:!0}),ae(i).forEach(O),h.forEach(O),this.h()},h(){de(i,"class","mdc-slider__thumb-knob"),de(e,"class",s=ce(De({"mdc-slider__thumb":!0},n[22]))),de(e,"style",r=Object.entries(n[26]).map(Fm).join(" "))},m(u,h){x(u,e,h),c&&c.m(e,null),Ie(e,t),Ie(e,i),n[72](i),n[73](e),a||(l=oe(o=Nn.call(null,e,{unbounded:!0,disabled:n[5],active:n[28],eventTarget:n[14],activeTarget:n[14],addClass:n[74],removeClass:n[75],addStyle:n[76]})),a=!0)},p(u,h){u[7]?c?c.p(u,h):(c=Om(u),c.c(),c.m(e,t)):c&&(c.d(1),c=null),h[0]&4194304&&s!==(s=ce(De({"mdc-slider__thumb":!0},u[22])))&&de(e,"class",s),h[0]&67108864&&r!==(r=Object.entries(u[26]).map(Fm).join(" "))&&de(e,"style",r),o&&Pe(o.update)&&h[0]&268451872&&o.update.call(null,{unbounded:!0,disabled:u[5],active:u[28],eventTarget:u[14],activeTarget:u[14],addClass:u[74],removeClass:u[75],addStyle:u[76]})},d(u){u&&O(e),c&&c.d(),n[72](null),n[73](null),a=!1,l()}}}function mA(n){let e,t,i,s,r,o,a,l,c,u,h,d,f,m,v,g=n[7]&&Dm(n),_=n[7]&&km(n);return{c(){e=te("div"),g&&g.c(),t=Ue(),i=te("div"),a=Ue(),l=te("div"),_&&_.c(),c=Ue(),u=te("div"),this.h()},l(I){e=ne(I,"DIV",{class:!0,style:!0});var S=ae(e);g&&g.l(S),t=Ve(S),i=ne(S,"DIV",{class:!0}),ae(i).forEach(O),S.forEach(O),a=Ve(I),l=ne(I,"DIV",{class:!0,style:!0});var w=ae(l);_&&_.l(w),c=Ve(w),u=ne(w,"DIV",{class:!0}),ae(u).forEach(O),w.forEach(O),this.h()},h(){de(i,"class","mdc-slider__thumb-knob"),de(e,"class",s=ce(De({"mdc-slider__thumb":!0},n[21]))),de(e,"style",r=Object.entries(n[27]).map(Mm).join(" ")),de(u,"class","mdc-slider__thumb-knob"),de(l,"class",h=ce(De({"mdc-slider__thumb":!0},n[22]))),de(l,"style",d=Object.entries(n[26]).map(Pm).join(" "))},m(I,S){x(I,e,S),g&&g.m(e,null),Ie(e,t),Ie(e,i),n[62](i),n[63](e),x(I,a,S),x(I,l,S),_&&_.m(l,null),Ie(l,c),Ie(l,u),n[67](u),n[68](l),m||(v=[oe(o=Nn.call(null,e,{unbounded:!0,disabled:n[5],active:n[29],eventTarget:n[15],activeTarget:n[15],addClass:n[64],removeClass:n[65],addStyle:n[66]})),oe(f=Nn.call(null,l,{unbounded:!0,disabled:n[5],active:n[28],eventTarget:n[14],activeTarget:n[14],addClass:n[69],removeClass:n[70],addStyle:n[71]}))],m=!0)},p(I,S){I[7]?g?g.p(I,S):(g=Dm(I),g.c(),g.m(e,t)):g&&(g.d(1),g=null),S[0]&2097152&&s!==(s=ce(De({"mdc-slider__thumb":!0},I[21])))&&de(e,"class",s),S[0]&134217728&&r!==(r=Object.entries(I[27]).map(Mm).join(" "))&&de(e,"style",r),o&&Pe(o.update)&&S[0]&536903712&&o.update.call(null,{unbounded:!0,disabled:I[5],active:I[29],eventTarget:I[15],activeTarget:I[15],addClass:I[64],removeClass:I[65],addStyle:I[66]}),I[7]?_?_.p(I,S):(_=km(I),_.c(),_.m(l,c)):_&&(_.d(1),_=null),S[0]&4194304&&h!==(h=ce(De({"mdc-slider__thumb":!0},I[22])))&&de(l,"class",h),S[0]&67108864&&d!==(d=Object.entries(I[26]).map(Pm).join(" "))&&de(l,"style",d),f&&Pe(f.update)&&S[0]&268451872&&f.update.call(null,{unbounded:!0,disabled:I[5],active:I[28],eventTarget:I[14],activeTarget:I[14],addClass:I[69],removeClass:I[70],addStyle:I[71]})},d(I){I&&O(e),g&&g.d(),n[62](null),n[63](null),I&&O(a),I&&O(l),_&&_.d(),n[67](null),n[68](null),m=!1,Me(v)}}}function Om(n){let e,t,i,s;return{c(){e=te("div"),t=te("div"),i=te("span"),s=mn(n[0]),this.h()},l(r){e=ne(r,"DIV",{class:!0,"aria-hidden":!0});var o=ae(e);t=ne(o,"DIV",{class:!0});var a=ae(t);i=ne(a,"SPAN",{class:!0});var l=ae(i);s=bn(l,n[0]),l.forEach(O),a.forEach(O),o.forEach(O),this.h()},h(){de(i,"class","mdc-slider__value-indicator-text"),de(t,"class","mdc-slider__value-indicator"),de(e,"class","mdc-slider__value-indicator-container"),de(e,"aria-hidden","true")},m(r,o){x(r,e,o),Ie(e,t),Ie(t,i),Ie(i,s)},p(r,o){o[0]&1&&Vn(s,r[0])},d(r){r&&O(e)}}}function Dm(n){let e,t,i,s;return{c(){e=te("div"),t=te("div"),i=te("span"),s=mn(n[1]),this.h()},l(r){e=ne(r,"DIV",{class:!0,"aria-hidden":!0});var o=ae(e);t=ne(o,"DIV",{class:!0});var a=ae(t);i=ne(a,"SPAN",{class:!0});var l=ae(i);s=bn(l,n[1]),l.forEach(O),a.forEach(O),o.forEach(O),this.h()},h(){de(i,"class","mdc-slider__value-indicator-text"),de(t,"class","mdc-slider__value-indicator"),de(e,"class","mdc-slider__value-indicator-container"),de(e,"aria-hidden","true")},m(r,o){x(r,e,o),Ie(e,t),Ie(t,i),Ie(i,s)},p(r,o){o[0]&2&&Vn(s,r[1])},d(r){r&&O(e)}}}function km(n){let e,t,i,s;return{c(){e=te("div"),t=te("div"),i=te("span"),s=mn(n[2]),this.h()},l(r){e=ne(r,"DIV",{class:!0,"aria-hidden":!0});var o=ae(e);t=ne(o,"DIV",{class:!0});var a=ae(t);i=ne(a,"SPAN",{class:!0});var l=ae(i);s=bn(l,n[2]),l.forEach(O),a.forEach(O),o.forEach(O),this.h()},h(){de(i,"class","mdc-slider__value-indicator-text"),de(t,"class","mdc-slider__value-indicator"),de(e,"class","mdc-slider__value-indicator-container"),de(e,"aria-hidden","true")},m(r,o){x(r,e,o),Ie(e,t),Ie(t,i),Ie(i,s)},p(r,o){o[0]&4&&Vn(s,r[2])},d(r){r&&O(e)}}}function pA(n){let e,t,i,s,r,o,a,l,c,u,h,d,f,m;function v(y,k){return y[6]?dA:hA}let g=v(n),_=g(n),I=n[7]&&n[8]&&n[9]>0&&Rm(n);function S(y,k){return y[6]?mA:fA}let w=S(n),H=w(n),C=[{class:h=Object.entries(De({[n[4]]:!0,"mdc-slider":!0,"mdc-slider--range":n[6],"mdc-slider--discrete":n[7],"mdc-slider--tick-marks":n[7]&&n[8],"mdc-slider--disabled":n[5]},n[20])).filter(Um).map(Vm).join(" ")},is(n[36],["input$"])],p={};for(let y=0;y<C.length;y+=1)p=F(p,C[y]);return{c(){e=te("div"),_.c(),t=Ue(),i=te("div"),s=te("div"),r=Ue(),o=te("div"),a=te("div"),c=Ue(),I&&I.c(),u=Ue(),H.c(),this.h()},l(y){e=ne(y,"DIV",{class:!0});var k=ae(e);_.l(k),t=Ve(k),i=ne(k,"DIV",{class:!0});var E=ae(i);s=ne(E,"DIV",{class:!0}),ae(s).forEach(O),r=Ve(E),o=ne(E,"DIV",{class:!0});var D=ae(o);a=ne(D,"DIV",{class:!0,style:!0}),ae(a).forEach(O),D.forEach(O),c=Ve(E),I&&I.l(E),E.forEach(O),u=Ve(k),H.l(k),k.forEach(O),this.h()},h(){de(s,"class","mdc-slider__track--inactive"),de(a,"class","mdc-slider__track--active_fill"),de(a,"style",l=Object.entries(n[25]).map(Nm).join(" ")),de(o,"class","mdc-slider__track--active"),de(i,"class","mdc-slider__track"),se(e,p)},m(y,k){x(y,e,k),_.m(e,null),Ie(e,t),Ie(e,i),Ie(i,s),Ie(i,r),Ie(i,o),Ie(o,a),Ie(i,c),I&&I.m(i,null),Ie(e,u),H.m(e,null),n[77](e),f||(m=[oe(d=et.call(null,e,n[3])),oe(n[31].call(null,e))],f=!0)},p(y,k){g===(g=v(y))&&_?_.p(y,k):(_.d(1),_=g(y),_&&(_.c(),_.m(e,t))),k[0]&33554432&&l!==(l=Object.entries(y[25]).map(Nm).join(" "))&&de(a,"style",l),y[7]&&y[8]&&y[9]>0?I?I.p(y,k):(I=Rm(y),I.c(),I.m(i,null)):I&&(I.d(1),I=null),w===(w=S(y))&&H?H.p(y,k):(H.d(1),H=w(y),H&&(H.c(),H.m(e,null))),se(e,p=Ee(C,[k[0]&1049072&&h!==(h=Object.entries(De({[y[4]]:!0,"mdc-slider":!0,"mdc-slider--range":y[6],"mdc-slider--discrete":y[7],"mdc-slider--tick-marks":y[7]&&y[8],"mdc-slider--disabled":y[5]},y[20])).filter(Um).map(Vm).join(" "))&&{class:h},k[1]&32&&is(y[36],["input$"])])),d&&Pe(d.update)&&k[0]&8&&d.update.call(null,y[3])},i:Lt,o:Lt,d(y){y&&O(e),_.d(),I&&I.d(),H.d(),n[77](null),f=!1,Me(m)}}}const Nm=([n,e])=>`${n}: ${e};`,Mm=([n,e])=>`${n}: ${e};`,Pm=([n,e])=>`${n}: ${e};`,Fm=([n,e])=>`${n}: ${e};`,Um=([n,e])=>n!==""&&e,Vm=([n])=>n;function gA(n,e,t){const i=["use","class","disabled","range","discrete","tickMarks","step","min","max","value","start","end","valueToAriaValueTextFn","input$class","layout","getId","getElement"];let s=ie(e,i);var r;const o=Qe(ke());let{use:a=[]}=e,{class:l=""}=e,{disabled:c=!1}=e,{range:u=!1}=e,{discrete:h=!1}=e,{tickMarks:d=!1}=e,{step:f=1}=e,{min:m=0}=e,{max:v=100}=e,{value:g=void 0}=e,{start:_=void 0}=e,{end:I=void 0}=e,{valueToAriaValueTextFn:S=A=>`${A}`}=e,{input$class:w=""}=e,H,C,p,y,k,E,D,J,T={},N={},L={},q={},z={},G={},ve={},Y={},Ne=!1,Be=!1,tt,lt=(r=Pt("SMUI:generic:input:props"))!==null&&r!==void 0?r:{},Le=Pt("SMUI:addLayoutListener"),ut,Oe=m,W=v,ye=f,ot=h,ln=d;if(d&&f>0){const A=v+Math.abs(m);if(u&&typeof _=="number"&&typeof I=="number"){const B=_+Math.abs(m),ee=I+Math.abs(m);tt=[...Array(B/f).map(()=>dn.INACTIVE),...Array(A/f-B/f-(A-ee)/f+1).map(()=>dn.ACTIVE),...Array((A-ee)/f).map(()=>dn.INACTIVE)]}else if(typeof g=="number"){const B=g+Math.abs(m);tt=[...Array(B/f+1).map(()=>dn.ACTIVE),...Array((A-B)/f).map(()=>dn.INACTIVE)]}}if(u&&typeof _=="number"&&typeof I=="number"){const A=(I-_)/(v-m),B=_/(v-m),ee=I/(v-m);G.transform=`scaleX(${A})`,ve.left=`calc(${ee*100}% -24px)`,Y.left=`calc(${B*100}% -24px)`}else if(typeof g=="number"){const A=g/(v-m);G.transform=`scaleX(${A})`,ve.left=`calc(${A*100}% -24px)`}Le&&(ut=Le(wi));let un=g,U=_,he=I;nn(()=>{t(41,C=new uA({hasClass:xe,addClass:bt,removeClass:Xt,addThumbClass:Qt,removeThumbClass:En,getAttribute:B=>Q().getAttribute(B),getInputValue:B=>{var ee;return`${(ee=u?B===R.START?_:I:g)!==null&&ee!==void 0?ee:0}`},setInputValue:(B,ee)=>{u?ee===R.START?(t(1,_=Number(B)),t(48,U=_)):(t(2,I=Number(B)),t(49,he=I)):(t(0,g=Number(B)),t(47,un=g))},getInputAttribute:cn,setInputAttribute:us,removeInputAttribute:Ci,focusInput:B=>{u&&B===R.START&&y?y.focus():p.focus()},isInputFocused:B=>(u&&B===R.START?y:p)===document.activeElement,getThumbKnobWidth:B=>{var ee;return((ee=u&&B===R.START?J:D)!==null&&ee!==void 0?ee:D).getBoundingClientRect().width},getThumbBoundingClientRect:B=>{var ee;return((ee=u&&B===R.START?E:k)!==null&&ee!==void 0?ee:k).getBoundingClientRect()},getBoundingClientRect:()=>Q().getBoundingClientRect(),isRTL:()=>getComputedStyle(Q()).direction==="rtl",setThumbStyleProperty:fn,removeThumbStyleProperty:Si,setTrackActiveStyleProperty:Un,removeTrackActiveStyleProperty:cs,setValueIndicatorText:(B,ee)=>{},getValueToAriaValueTextFn:()=>S,updateTickMarks:B=>{t(30,tt=B)},setPointerCapture:B=>{Q().setPointerCapture(B)},emitChangeEvent:(B,ee)=>{Xe(Q(),"SMUISlider:change",{value:B,thumb:ee},void 0,!0)},emitInputEvent:(B,ee)=>{Xe(Q(),"SMUISlider:input",{value:B,thumb:ee},void 0,!0)},emitDragStartEvent:(B,ee)=>{u&&ee===R.START?t(29,Be=!0):t(28,Ne=!0)},emitDragEndEvent:(B,ee)=>{u&&ee===R.START?t(29,Be=!1):t(28,Ne=!1)},registerEventHandler:(B,ee)=>{Q().addEventListener(B,ee)},deregisterEventHandler:(B,ee)=>{Q().removeEventListener(B,ee)},registerThumbEventHandler:(B,ee,tn)=>{var ct;(ct=u&&B===R.START?E:k)===null||ct===void 0||ct.addEventListener(ee,tn)},deregisterThumbEventHandler:(B,ee,tn)=>{var ct;(ct=u&&B===R.START?E:k)===null||ct===void 0||ct.removeEventListener(ee,tn)},registerInputEventHandler:(B,ee,tn)=>{var ct;(ct=u&&B===R.START?y:p)===null||ct===void 0||ct.addEventListener(ee,tn)},deregisterInputEventHandler:(B,ee,tn)=>{var ct;(ct=u&&B===R.START?y:p)===null||ct===void 0||ct.removeEventListener(ee,tn)},registerBodyEventHandler:(B,ee)=>{document.body.addEventListener(B,ee)},deregisterBodyEventHandler:(B,ee)=>{document.body.removeEventListener(B,ee)},registerWindowEventHandler:(B,ee)=>{window.addEventListener(B,ee)},deregisterWindowEventHandler:(B,ee)=>{window.removeEventListener(B,ee)}}));const A={get element(){return Q()},activateRipple(){c||t(28,Ne=!0)},deactivateRipple(){t(28,Ne=!1)}};return Xe(H,"SMUIGenericInput:mount",A),C.init(),C.layout({skipUpdateUI:!0}),()=>{Xe(H,"SMUIGenericInput:unmount",A),C.destroy()}}),Bn(()=>{ut&&ut()});function xe(A){return A in T?T[A]:Q().classList.contains(A)}function bt(A){T[A]||t(20,T[A]=!0,T)}function Xt(A){(!(A in T)||T[A])&&t(20,T[A]=!1,T)}function Qt(A,B){u&&B===R.START?N[A]||t(21,N[A]=!0,N):L[A]||t(22,L[A]=!0,L)}function En(A,B){u&&B===R.START?(!(A in N)||N[A])&&t(21,N[A]=!1,N):(!(A in L)||L[A])&&t(22,L[A]=!1,L)}function fn(A,B,ee){u&&ee===R.START?Y[A]!=B&&(B===""||B==null?(delete Y[A],t(27,Y)):t(27,Y[A]=B,Y)):ve[A]!=B&&(B===""||B==null?(delete ve[A],t(26,ve)):t(26,ve[A]=B,ve))}function Si(A,B){u&&B===R.START?A in Y&&(delete Y[A],t(27,Y)):A in ve&&(delete ve[A],t(26,ve))}function cn(A,B){var ee,tn,ct;return u&&B===R.START?A==="value"?`${_}`:A in z?(ee=z[A])!==null&&ee!==void 0?ee:null:(tn=y==null?void 0:y.getAttribute(A))!==null&&tn!==void 0?tn:null:A==="value"?`${u?I:g}`:A in q?(ct=q[A])!==null&&ct!==void 0?ct:null:p.getAttribute(A)}function us(A,B,ee){u&&ee===R.START?z[A]!==B&&t(24,z[A]=B,z):q[A]!==B&&t(23,q[A]=B,q)}function Ci(A,B){u&&B===R.START?(!(A in z)||z[A]!=null)&&t(24,z[A]=void 0,z):(!(A in q)||q[A]!=null)&&t(23,q[A]=void 0,q)}function Un(A,B){G[A]!=B&&(B===""||B==null?(delete G[A],t(25,G)):t(25,G[A]=B,G))}function cs(A){A in G&&(delete G[A],t(25,G))}function wi(){return C.layout()}function M(){return lt&&lt.id}function Q(){return H}function $(A){pn.call(this,n,A)}function ze(A){pn.call(this,n,A)}function Tn(A){pn.call(this,n,A)}function hs(A){pn.call(this,n,A)}function Do(A){pn.call(this,n,A)}function ko(A){pn.call(this,n,A)}function No(A){re[A?"unshift":"push"](()=>{y=A,t(15,y)})}function Mo(){_=ia(this.value),t(1,_)}function Po(A){re[A?"unshift":"push"](()=>{p=A,t(14,p)})}function Fo(){I=ia(this.value),t(2,I)}function Uo(A){re[A?"unshift":"push"](()=>{p=A,t(14,p)})}function Vo(){g=ia(this.value),t(0,g)}function Ho(A){re[A?"unshift":"push"](()=>{J=A,t(19,J)})}function Bo(A){re[A?"unshift":"push"](()=>{E=A,t(17,E)})}const jo=A=>Qt(A,R.START),qo=A=>En(A,R.START),zo=(A,B)=>fn(A,B,R.START);function Go(A){re[A?"unshift":"push"](()=>{D=A,t(18,D)})}function Wo(A){re[A?"unshift":"push"](()=>{k=A,t(16,k)})}const Ko=A=>Qt(A,R.END),xo=A=>En(A,R.END),Xo=(A,B)=>fn(A,B,R.END);function Qo(A){re[A?"unshift":"push"](()=>{D=A,t(18,D)})}function Yo(A){re[A?"unshift":"push"](()=>{k=A,t(16,k)})}const Jo=A=>Qt(A,R.END),Zo=A=>En(A,R.END),$o=(A,B)=>fn(A,B,R.END);function ea(A){re[A?"unshift":"push"](()=>{H=A,t(13,H)})}return n.$$set=A=>{e=F(F({},e),Ge(A)),t(36,s=ie(e,i)),"use"in A&&t(3,a=A.use),"class"in A&&t(4,l=A.class),"disabled"in A&&t(5,c=A.disabled),"range"in A&&t(6,u=A.range),"discrete"in A&&t(7,h=A.discrete),"tickMarks"in A&&t(8,d=A.tickMarks),"step"in A&&t(9,f=A.step),"min"in A&&t(10,m=A.min),"max"in A&&t(11,v=A.max),"value"in A&&t(0,g=A.value),"start"in A&&t(1,_=A.start),"end"in A&&t(2,I=A.end),"valueToAriaValueTextFn"in A&&t(37,S=A.valueToAriaValueTextFn),"input$class"in A&&t(12,w=A.input$class)},n.$$.update=()=>{n.$$.dirty[0]&1024|n.$$.dirty[1]&3072&&m!==Oe&&(C&&C.setMin(m),t(42,Oe=m)),n.$$.dirty[0]&2048|n.$$.dirty[1]&5120&&v!==W&&(C&&C.setMax(v),t(43,W=v)),n.$$.dirty[0]&512|n.$$.dirty[1]&9216&&f!==ye&&(C&&C.setStep(f),t(44,ye=f)),n.$$.dirty[0]&128|n.$$.dirty[1]&17408&&h!==ot&&(C&&C.setIsDiscrete(h),t(45,ot=h)),n.$$.dirty[0]&256|n.$$.dirty[1]&33792&&d!==ln&&(C&&C.setHasTickMarks(d),t(46,ln=d)),n.$$.dirty[0]&7|n.$$.dirty[1]&459776&&C&&(un!==g&&typeof g=="number"&&C.setValue(g),U!==_&&typeof _=="number"&&C.setValueStart(_),he!==I&&typeof I=="number"&&C.setValue(I),t(47,un=g),t(48,U=_),t(49,he=I),C.layout())},[g,_,I,a,l,c,u,h,d,f,m,v,w,H,p,y,k,E,D,J,T,N,L,q,z,G,ve,Y,Ne,Be,tt,o,lt,Qt,En,fn,s,S,wi,M,Q,C,Oe,W,ye,ot,ln,un,U,he,$,ze,Tn,hs,Do,ko,No,Mo,Po,Fo,Uo,Vo,Ho,Bo,jo,qo,zo,Go,Wo,Ko,xo,Xo,Qo,Yo,Jo,Zo,$o,ea]}class KA extends Ke{constructor(e){super();We(this,e,gA,pA,je,{use:3,class:4,disabled:5,range:6,discrete:7,tickMarks:8,step:9,min:10,max:11,value:0,start:1,end:2,valueToAriaValueTextFn:37,input$class:12,layout:38,getId:39,getElement:40},null,[-1,-1,-1])}get layout(){return this.$$.ctx[38]}get getId(){return this.$$.ctx[39]}get getElement(){return this.$$.ctx[40]}}export{VA as $,nn as A,F as B,up as C,Km as D,CA as E,LA as F,Te as G,Ae as H,Se as I,be as J,Ie as K,Lt as L,DA as M,NA as N,kA as O,PA as P,SA as Q,MA as R,Ke as S,OA as T,jn as U,FA as V,UA as W,re as X,qn as Y,wA as Z,RA as _,ae as a,HA as a0,BA as a1,$m as a2,jA as a3,qA as a4,zA as a5,GA as a6,IA as a7,WA as a8,yA as a9,Pe as aa,ep as ab,_A as ac,oe as ad,Ce as ae,Me as af,TA as ag,Bn as ah,KA as ai,AA as aj,bA as ak,de as b,ne as c,O as d,te as e,x as f,bn as g,Vn as h,We as i,at as j,Ue as k,ft as l,At as m,Ve as n,it as o,Ee as p,nt as q,Ft as r,je as s,mn as t,j as u,st as v,Ut as w,P as x,_t as y,EA as z};

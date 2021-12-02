var Lp=Object.defineProperty;var _u=Object.getOwnPropertySymbols;var Op=Object.prototype.hasOwnProperty,kp=Object.prototype.propertyIsEnumerable;var vu=(t,e,n)=>e in t?Lp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,xe=(t,e)=>{for(var n in e||(e={}))Op.call(e,n)&&vu(t,n,e[n]);if(_u)for(var n of _u(e))kp.call(e,n)&&vu(t,n,e[n]);return t};function Mt(){}function M(t,e){for(const n in e)t[n]=e[n];return t}function Iu(t){return t()}function Eu(){return Object.create(null)}function Re(t){t.forEach(Iu)}function Oe(t){return typeof t=="function"}function Le(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let lr;function Z1(t,e){return lr||(lr=document.createElement("a")),lr.href=e,t===lr.href}function Np(t){return Object.keys(t).length===0}function Dp(t,...e){if(t==null)return Mt;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Mp(t,e,n){t.$$.on_destroy.push(Dp(e,n))}function ue(t,e,n,i){if(t){const s=bu(t,e,n,i);return t[0](s)}}function bu(t,e,n,i){return t[1]&&i?M(n.ctx.slice(),t[1](i(e))):n.ctx}function ce(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|s[a];return r}return e.dirty|s}return e.dirty}function he(t,e,n,i,s,r){if(s){const o=bu(e,n,i,r);t.p(o,s)}}function de(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ke(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Y(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Pp(t){const e={};for(const n in t)e[n]=!0;return e}function Fp(t,e,n){return t.set(n),e}function ee(t){return t&&Oe(t.destroy)?t.destroy:Mt}let ur=!1;function Up(){ur=!0}function Vp(){ur=!1}function Bp(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Hp(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const c=e[u];c.claim_order!==void 0&&l.push(c)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,c=(s>0&&e[n[s]].claim_order<=u?s+1:Bp(1,s,d=>e[n[d]].claim_order,u))-1;i[l]=n[c]+1;const h=c+1;n[h]=l,s=Math.max(h,s)}const r=[],o=[];let a=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(r.push(e[l-1]);a>=l;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);r.reverse(),o.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<o.length;l++){for(;u<r.length&&o[l].claim_order>=r[u].claim_order;)u++;const c=u<r.length?r[u]:null;t.insertBefore(o[l],c)}}function wt(t,e){if(ur){for(Hp(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function J(t,e,n){ur&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode.removeChild(t)}function $1(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _e(t){return document.createElement(t)}function xp(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Cn(t){return document.createTextNode(t)}function Ze(){return Cn(" ")}function st(){return Cn("")}function Fe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function jp(t){return function(e){return e.preventDefault(),t.call(this,e)}}function qp(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function tn(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function te(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:tn(t,i,e[i])}function Ie(t){return Array.from(t.childNodes)}function zp(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Tu(t,e,n,i,s=!1){zp(t);const r=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,s||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function Au(t,e,n,i){return Tu(t,s=>s.nodeName===e,s=>{const r=[];for(let o=0;o<s.attributes.length;o++){const a=s.attributes[o];n[a.name]||r.push(a.name)}r.forEach(o=>s.removeAttribute(o))},()=>i(e))}function Ee(t,e,n){return Au(t,e,n,_e)}function eS(t,e,n){return Au(t,e,n,xp)}function Si(t,e){return Tu(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Cn(e),!0)}function $e(t){return Si(t," ")}function os(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Su(t,e){t.value=e==null?"":e}function tS(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}function Gp(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}let cr;function hr(t){cr=t}function ve(){if(!cr)throw new Error("Function called outside component initialization");return cr}function nn(t){ve().$$.on_mount.push(t)}function nS(t){ve().$$.after_update.push(t)}function Yn(t){ve().$$.on_destroy.push(t)}function iS(){const t=ve();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=Gp(e,n);i.slice().forEach(r=>{r.call(t,s)})}}}function lt(t,e){ve().$$.context.set(t,e)}function jt(t){return ve().$$.context.get(t)}function as(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const ls=[],re=[],dr=[],Go=[],wu=Promise.resolve();let Wo=!1;function Cu(){Wo||(Wo=!0,wu.then(Ru))}function Wp(){return Cu(),wu}function Ko(t){dr.push(t)}function Rn(t){Go.push(t)}let Xo=!1;const Qo=new Set;function Ru(){if(!Xo){Xo=!0;do{for(let t=0;t<ls.length;t+=1){const e=ls[t];hr(e),Kp(e.$$)}for(hr(null),ls.length=0;re.length;)re.pop()();for(let t=0;t<dr.length;t+=1){const e=dr[t];Qo.has(e)||(Qo.add(e),e())}dr.length=0}while(ls.length);for(;Go.length;)Go.pop()();Wo=!1,Xo=!1,Qo.clear()}}function Kp(t){if(t.fragment!==null){t.update(),Re(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ko)}}const fr=new Set;let Jn;function Ct(){Jn={r:0,c:[],p:Jn}}function Rt(){Jn.r||Re(Jn.c),Jn=Jn.p}function N(t,e){t&&t.i&&(fr.delete(t),t.i(e))}function P(t,e,n,i){if(t&&t.o){if(fr.has(t))return;fr.add(t),Jn.c.push(()=>{fr.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const Xp=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function sS(t,e){P(t,1,1,()=>{e.delete(t.key)})}function rS(t,e,n,i,s,r,o,a,l,u,c,h){let d=t.length,f=r.length,m=d;const y={};for(;m--;)y[t[m].key]=m;const g=[],E=new Map,S=new Map;for(m=f;m--;){const w=h(s,r,m),p=n(w);let b=o.get(p);b?i&&b.p(w,e):(b=u(p,w),b.c()),E.set(p,g[m]=b),p in y&&S.set(p,Math.abs(m-y[p]))}const T=new Set,A=new Set;function V(w){N(w,1),w.m(a,c),o.set(w.key,w),c=w.first,f--}for(;d&&f;){const w=g[f-1],p=t[d-1],b=w.key,F=p.key;w===p?(c=w.first,d--,f--):E.has(F)?!o.has(b)||T.has(b)?V(w):A.has(F)?d--:S.get(b)>S.get(F)?(A.add(b),V(w)):(T.add(F),d--):(l(p,o),d--)}for(;d--;){const w=t[d];E.has(w.key)||l(w,o)}for(;f;)V(g[f-1]);return g}function ge(t,e){const n={},i={},s={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)s[l]||(n[l]=a[l],s[l]=1);t[r]=a}else for(const l in o)s[l]=1}for(const o in i)o in n||(n[o]=void 0);return n}function ze(t){return typeof t=="object"&&t!==null?t:{}}function Ln(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Je(t){t&&t.c()}function mt(t,e){t&&t.l(e)}function Ge(t,e,n,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=t.$$;s&&s.m(e,n),i||Ko(()=>{const l=r.map(Iu).filter(Oe);o?o.push(...l):Re(l),t.$$.on_mount=[]}),a.forEach(Ko)}function We(t,e){const n=t.$$;n.fragment!==null&&(Re(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Qp(t,e){t.$$.dirty[0]===-1&&(ls.push(t),Cu(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ne(t,e,n,i,s,r,o,a=[-1]){const l=cr;hr(t);const u=t.$$={fragment:null,ctx:null,props:r,update:Mt,not_equal:s,bound:Eu(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Eu(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(u.root);let c=!1;if(u.ctx=n?n(t,e.props||{},(h,d,...f)=>{const m=f.length?f[0]:d;return u.ctx&&s(u.ctx[h],u.ctx[h]=m)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](m),c&&Qp(t,h)),d}):[],u.update(),c=!0,Re(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){Up();const h=Ie(e.target);u.fragment&&u.fragment.l(h),h.forEach(U)}else u.fragment&&u.fragment.c();e.intro&&N(t.$$.fragment),Ge(t,e.target,e.anchor,e.customElement),Vp(),Ru()}hr(l)}class De{$destroy(){We(this,1),this.$destroy=Mt}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Np(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const wi=[];function Yp(t,e=Mt){let n;const i=new Set;function s(a){if(Le(t,a)&&(t=a,n)){const l=!wi.length;for(const u of i)u[1](),wi.push(u,t);if(l){for(let u=0;u<wi.length;u+=2)wi[u][0](wi[u+1]);wi.length=0}}}function r(a){s(a(t))}function o(a,l=Mt){const u=[a,l];return i.add(u),i.size===1&&(n=e(s)||Mt),a(t),()=>{i.delete(u),i.size===0&&(n(),n=null)}}return{set:s,update:r,subscribe:o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Jp=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)==55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)==56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Zp=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},$p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,c=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),i.push(n[c],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||u==null||h==null)throw Error();const d=r<<2|a>>4;if(i.push(d),u!==64){const f=a<<4&240|u>>2;if(i.push(f),h!==64){const m=u<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},eg=function(t){try{return $p.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function Ou(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ku(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ng(){return pt().indexOf("Electron/")>=0}function Nu(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ig(){return pt().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="FirebaseError";class Zn extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=sg,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,us.prototype.create)}}class us{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?rg(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Zn(s,a,i)}}function rg(t,e){return t.replace(og,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const og=/\{\$([^}]+)}/g;function ag(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mr(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Du(r)&&Du(o)){if(!mr(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Du(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function lg(t,e){const n=new ug(t,e);return n.subscribe.bind(n)}class ug{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");cg(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Yo),s.error===void 0&&(s.error=Yo),s.complete===void 0&&(s.complete=Yo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yo(){}/**
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
 */function et(t){return t&&t._delegate?t._delegate:t}class $n{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ei="[DEFAULT]";/**
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
 */class hg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new tg;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fg(e))try{this.getOrInitializeService({instanceIdentifier:ei})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ei){return this.instances.has(e)}getOptions(e=ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:dg(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ei){return this.component?this.component.multipleInstances?e:ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dg(t){return t===ei?void 0:t}function fg(t){return t.instantiationMode==="EAGER"}/**
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
 */class mg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const pg={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},gg=be.INFO,yg={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},_g=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=yg[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jo{constructor(e){this.name=e,this._logLevel=gg,this._logHandler=_g,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}/**
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
 */class vg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ig(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Ig(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zo="@firebase/app",Mu="0.7.9";/**
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
 */const $o=new Jo("@firebase/app"),Eg="@firebase/app-compat",bg="@firebase/analytics-compat",Tg="@firebase/analytics",Ag="@firebase/app-check-compat",Sg="@firebase/app-check",wg="@firebase/auth",Cg="@firebase/auth-compat",Rg="@firebase/database",Lg="@firebase/database-compat",Og="@firebase/functions",kg="@firebase/functions-compat",Ng="@firebase/installations",Dg="@firebase/installations-compat",Mg="@firebase/messaging",Pg="@firebase/messaging-compat",Fg="@firebase/performance",Ug="@firebase/performance-compat",Vg="@firebase/remote-config",Bg="@firebase/remote-config-compat",Hg="@firebase/storage",xg="@firebase/storage-compat",jg="@firebase/firestore",qg="@firebase/firestore-compat",zg="firebase",Gg="9.5.0";/**
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
 */const Pu="[DEFAULT]",Wg={[Zo]:"fire-core",[Eg]:"fire-core-compat",[Tg]:"fire-analytics",[bg]:"fire-analytics-compat",[Sg]:"fire-app-check",[Ag]:"fire-app-check-compat",[wg]:"fire-auth",[Cg]:"fire-auth-compat",[Rg]:"fire-rtdb",[Lg]:"fire-rtdb-compat",[Og]:"fire-fn",[kg]:"fire-fn-compat",[Ng]:"fire-iid",[Dg]:"fire-iid-compat",[Mg]:"fire-fcm",[Pg]:"fire-fcm-compat",[Fg]:"fire-perf",[Ug]:"fire-perf-compat",[Vg]:"fire-rc",[Bg]:"fire-rc-compat",[Hg]:"fire-gcs",[xg]:"fire-gcs-compat",[jg]:"fire-fst",[qg]:"fire-fst-compat","fire-js":"fire-js",[zg]:"fire-js-all"};/**
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
 */const pr=new Map,ea=new Map;function Kg(t,e){try{t.container.addComponent(e)}catch(n){$o.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ri(t){const e=t.name;if(ea.has(e))return $o.debug(`There were multiple attempts to register component ${e}.`),!1;ea.set(e,t);for(const n of pr.values())Kg(n,t);return!0}function gr(t,e){return t.container.getProvider(e)}/**
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
 */const Xg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},yr=new us("app","Firebase",Xg);/**
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
 */class Qg{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
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
 */const Li=Gg;function oS(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Pu,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw yr.create("bad-app-name",{appName:String(i)});const s=pr.get(i);if(s){if(mr(t,s.options)&&mr(n,s.config))return s;throw yr.create("duplicate-app",{appName:i})}const r=new mg(i);for(const a of ea.values())r.addComponent(a);const o=new Qg(t,n,r);return pr.set(i,o),o}function ta(t=Pu){const e=pr.get(t);if(!e)throw yr.create("no-app",{appName:t});return e}function an(t,e,n){var i;let s=(i=Wg[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$o.warn(a.join(" "));return}Ri(new $n(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function Yg(t){Ri(new $n("platform-logger",e=>new vg(e),"PRIVATE")),an(Zo,Mu,t),an(Zo,Mu,"esm2017"),an("fire-js","")}Yg("");var Jg="firebase",Zg="9.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(Jg,Zg,"app");/*! *****************************************************************************
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
***************************************************************************** */var na=function(t,e){return na=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])},na(t,e)};function rn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");na(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var Ke=function(){return Ke=Object.assign||function(e){for(var n,i=1,s=arguments.length;i<s;i++){n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ke.apply(this,arguments)};function ia(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function fn(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Fu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $g=Fu,Uu=new us("auth","Firebase",Fu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new Jo("@firebase/auth");function _r(t,...e){Vu.logLevel<=be.ERROR&&Vu.error(`Auth (${Li}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,...e){throw sa(t,...e)}function Qt(t,...e){return sa(t,...e)}function ey(t,e,n){const i=Object.assign(Object.assign({},$g()),{[e]:n});return new us("auth","Firebase",i).create(e,{appName:t.name})}function sa(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Uu.create(t,...e)}function G(t,e,...n){if(!t)throw sa(e,...n)}function pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _r(e),new Error(e)}function gn(t,e){t||pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new Map;function yn(t){gn(t instanceof Function,"Expected a class definition");let e=Bu.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bu.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t,e){const n=gr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(mr(r,e!=null?e:{}))return s;mn(s,"already-initialized")}return n.initialize({options:e})}function ny(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(yn);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Hu(){return xu()==="http:"||xu()==="https:"}function xu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hu()||Ou()||"connection"in navigator)?navigator.onLine:!0}function sy(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=Lu()||ku()}get(){return iy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=new cs(3e4,6e4);function ti(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function On(t,e,n,i,s={}){return ju(t,s,()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Ci(Object.assign({key:t.config.apiKey},o)).slice(1),l=new(aa.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&l.set("X-Firebase-Locale",t.languageCode),aa.fetch()(qu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function ju(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},ry),e);try{const s=new ay(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ir(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ir(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ir(t,"email-already-in-use",o);const c=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ey(t,c,u);mn(t,c)}}catch(s){if(s instanceof Zn)throw s;mn(t,"network-request-failed")}}async function vr(t,e,n,i,s={}){const r=await On(t,e,n,i,s);return"mfaPendingCredential"in r&&mn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function qu(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?oa(t.config,s):`${t.config.apiScheme}://${s}`}class ay{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Qt(this.auth,"timeout")),oy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ir(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Qt(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ly(t,e){return On(t,"POST","/v1/accounts:delete",e)}async function uy(t,e){return On(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cy(t,e=!1){const n=et(t),i=await n.getIdToken(e),s=ua(i);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:hs(la(s.auth_time)),issuedAtTime:hs(la(s.iat)),expirationTime:hs(la(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function la(t){return Number(t)*1e3}function ua(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return _r("JWT malformed, contained fewer than 3 sections"),null;try{const s=eg(n);return s?JSON.parse(s):(_r("Failed to decode base64 JWT payload"),null)}catch(s){return _r("Caught error parsing JWT payload as JSON",s),null}}function hy(t){const e=ua(t);return G(e,"internal-error"),G(typeof e.exp!="undefined","internal-error"),G(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Zn&&dy(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function dy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hs(this.lastLoginAt),this.creationTime=hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Er(t){var e;const n=t.auth,i=await t.getIdToken(),s=await ds(t,uy(n,{idToken:i}));G(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?gy(r.providerUserInfo):[],a=py(t.providerData,o),l=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a==null?void 0:a.length),c=l?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new zu(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function my(t){const e=et(t);await Er(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function py(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function gy(t){return t.map(e=>{var{providerId:n}=e,i=ia(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yy(t,e){const n=await ju(t,{},()=>{const i=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=qu(t,s,"/v1/token",`key=${r}`);return aa.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken!="undefined","internal-error"),G(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):hy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await yy(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new fs;return i&&(G(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(G(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fs,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,e){G(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class ni{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=ia(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new fy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new zu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ds(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cy(this,e)}reload(){return my(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ni(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Er(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ds(this,ly(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,u,c;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(u=n.createdAt)!==null&&u!==void 0?u:void 0,S=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:T,emailVerified:A,isAnonymous:V,providerData:w,stsTokenManager:p}=n;G(T&&p,e,"internal-error");const b=fs.fromJSON(this.name,p);G(typeof T=="string",e,"internal-error"),kn(h,e.name),kn(d,e.name),G(typeof A=="boolean",e,"internal-error"),G(typeof V=="boolean",e,"internal-error"),kn(f,e.name),kn(m,e.name),kn(y,e.name),kn(g,e.name),kn(E,e.name),kn(S,e.name);const F=new ni({uid:T,auth:e,email:d,emailVerified:A,displayName:h,isAnonymous:V,photoURL:m,phoneNumber:f,tenantId:y,stsTokenManager:b,createdAt:E,lastLoginAt:S});return w&&Array.isArray(w)&&(F.providerData=w.map(I=>Object.assign({},I))),g&&(F._redirectEventId=g),F}static async _fromIdTokenResponse(e,n,i=!1){const s=new fs;s.updateFromServerResponse(n);const r=new ni({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Er(r),r}}/**
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
 */class Gu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gu.type="NONE";const Wu=Gu;/**
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
 */function br(t,e,n){return`firebase:${t}:${e}:${n}`}class Oi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=br(this.userKey,s.apiKey,r),this.fullPersistenceKey=br("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ni._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Oi(yn(Wu),e,i);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||yn(Wu);const o=br(i,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ni._fromJSON(e,c);u!==r&&(a=h),r=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Oi(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Oi(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zu(e))return"Blackberry";if($u(e))return"Webos";if(ca(e))return"Safari";if((e.includes("chrome/")||Qu(e))&&!e.includes("edge/"))return"Chrome";if(Ju(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Xu(t=pt()){return/firefox\//i.test(t)}function ca(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qu(t=pt()){return/crios\//i.test(t)}function Yu(t=pt()){return/iemobile/i.test(t)}function Ju(t=pt()){return/android/i.test(t)}function Zu(t=pt()){return/blackberry/i.test(t)}function $u(t=pt()){return/webos/i.test(t)}function Tr(t=pt()){return/iphone|ipad|ipod/i.test(t)}function _y(t=pt()){var e;return Tr(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function vy(){return Nu()&&document.documentMode===10}function ec(t=pt()){return Tr(t)||Ju(t)||$u(t)||Zu(t)||/windows phone/i.test(t)||Yu(t)}function Iy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t,e=[]){let n;switch(t){case"Browser":n=Ku(pt());break;case"Worker":n=`${Ku(pt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Li}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nc(this),this.idTokenSubscription=new nc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var i,s;this._deleted||(this.persistenceManager=await Oi.create(this,e),!this._deleted&&(((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===r)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Er(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?et(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new us("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Oi.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function ms(t){return et(t)}class nc{constructor(e){this.auth=e,this.observer=null,this.addObserver=lg(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(t,e){return vr(t,"POST","/v1/accounts:signInWithIdp",ti(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by="http://localhost";class ii extends ha{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=ia(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new ii(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ki(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,ki(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ki(e,n)}buildRequest(){const e={requestUri:by,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ci(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(t,e){return On(t,"POST","/v1/accounts:sendVerificationCode",ti(t,e))}async function Ay(t,e){return vr(t,"POST","/v1/accounts:signInWithPhoneNumber",ti(t,e))}async function Sy(t,e){const n=await vr(t,"POST","/v1/accounts:signInWithPhoneNumber",ti(t,e));if(n.temporaryProof)throw Ir(t,"account-exists-with-different-credential",n);return n}const wy={USER_NOT_FOUND:"user-not-found"};async function Cy(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return vr(t,"POST","/v1/accounts:signInWithPhoneNumber",ti(t,n),wy)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends ha{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new ps({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ps({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Ay(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Sy(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Cy(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:i,verificationCode:s}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:i,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:i,phoneNumber:s,temporaryProof:r}=e;return!i&&!n&&!s&&!r?null:new ps({verificationId:n,verificationCode:i,phoneNumber:s,temporaryProof:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gs extends ic{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends gs{constructor(){super("facebook.com")}static credential(e){return ii._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends gs{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return ii._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Dn.credential(n,i)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends gs{constructor(){super("github.com")}static credential(e){return ii._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends gs{constructor(){super("twitter.com")}static credential(e,n){return ii._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Pn.credential(n,i)}catch{return null}}}Pn.TWITTER_SIGN_IN_METHOD="twitter.com";Pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await ni._fromIdTokenResponse(e,i,s),o=sc(i);return new Ni({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=sc(i);return new Ni({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function sc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Zn{constructor(e,n,i,s){var r;super(n.code,n.message);this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ar.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Ar(e,n,i,s)}}function rc(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ar._fromErrorAndOperation(t,r,e,i):r})}async function Ry(t,e,n=!1){const i=await ds(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ni._forOperation(t,"link",i)}/**
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
 */async function Ly(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await ds(t,rc(i,s,e,t),n);G(r.idToken,i,"internal-error");const o=ua(r.idToken);G(o,i,"internal-error");const{sub:a}=o;return G(t.uid===a,i,"user-mismatch"),Ni._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&mn(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oc(t,e,n=!1){const i="signIn",s=await rc(t,i,e),r=await Ni._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function Oy(t,e){return oc(ms(t),e)}function aS(t,e,n,i){return et(t).onAuthStateChanged(e,n,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t,e){return On(t,"POST","/v2/accounts/mfaEnrollment:start",ti(t,e))}const Sr="__sak";/**
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
 */class ac{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sr,"1"),this.storage.removeItem(Sr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(){const t=pt();return ca(t)||Tr(t)}const Dy=1e3,My=10;class lc extends ac{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ny()&&Iy(),this.fallbackToPolling=ec(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);vy()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,My):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Dy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lc.type="LOCAL";const Py=lc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends ac{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uc.type="SESSION";const cc=uc;/**
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
 */function Fy(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new wr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,r)),l=await Fy(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Uy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=da("",20);s.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(c),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return window}function Vy(t){ut().location.href=t}/**
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
 */function fa(){return typeof ut().WorkerGlobalScope!="undefined"&&typeof ut().importScripts=="function"}async function By(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hy(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xy(){return fa()?self:null}/**
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
 */const hc="firebaseLocalStorageDb",jy=1,Cr="firebaseLocalStorage",dc="fbase_key";class ys{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rr(t,e){return t.transaction([Cr],e?"readwrite":"readonly").objectStore(Cr)}function qy(){const t=indexedDB.deleteDatabase(hc);return new ys(t).toPromise()}function ma(){const t=indexedDB.open(hc,jy);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Cr,{keyPath:dc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Cr)?e(i):(i.close(),await qy(),e(await ma()))})})}async function fc(t,e,n){const i=Rr(t,!0).put({[dc]:e,value:n});return new ys(i).toPromise()}async function zy(t,e){const n=Rr(t,!1).get(e),i=await new ys(n).toPromise();return i===void 0?null:i.value}function mc(t,e){const n=Rr(t,!0).delete(e);return new ys(n).toPromise()}const Gy=800,Wy=3;class pc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ma(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Wy)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wr._getInstance(xy()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await By(),!this.activeServiceWorker)return;this.sender=new Uy(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ma();return await fc(e,Sr,"1"),await mc(e,Sr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>fc(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>zy(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Rr(s,!1).getAll();return new ys(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pc.type="LOCAL";const Ky=pc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t,e){return On(t,"POST","/v2/accounts/mfaSignIn:start",ti(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qy(t){return(await On(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gc(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Qt("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",Yy().appendChild(i)})}function yc(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=500,Zy=6e4,Lr=1e12;class $y{constructor(e){this.auth=e,this.counter=Lr,this._widgets=new Map}render(e,n){const i=this.counter;return this._widgets.set(i,new e_(e,this.auth.name,n||{})),this.counter++,i}reset(e){var n;const i=e||Lr;(n=this._widgets.get(i))===null||n===void 0||n.delete(),this._widgets.delete(i)}getResponse(e){var n;const i=e||Lr;return((n=this._widgets.get(i))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const i=e||Lr;return(n=this._widgets.get(i))===null||n===void 0||n.execute(),""}}class e_{constructor(e,n,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;G(s,"argument-error",{appName:n}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=t_(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Zy)},Jy))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function t_(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=yc("rcb"),n_=new cs(3e4,6e4),i_="https://www.google.com/recaptcha/api.js?";class s_{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!ut().grecaptcha}load(e,n=""){return G(r_(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(ut().grecaptcha):new Promise((i,s)=>{const r=ut().setTimeout(()=>{s(Qt(e,"network-request-failed"))},n_.get());ut()[pa]=()=>{ut().clearTimeout(r),delete ut()[pa];const a=ut().grecaptcha;if(!a){s(Qt(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const h=l(u,c);return this.counter++,h},this.hostLanguage=n,i(a)};const o=`${i_}?${Ci({onload:pa,render:"explicit",hl:n})}`;gc(o).catch(()=>{clearTimeout(r),s(Qt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!ut().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function r_(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class o_{async load(e){return new $y(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="recaptcha",a_={theme:"light",type:"image"};class lS{constructor(e,n=Object.assign({},a_),i){this.parameters=n,this.type=_c,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ms(i),this.isInvisible=this.parameters.size==="invisible",G(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const s=typeof e=="string"?document.getElementById(e):e;G(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new o_:new s_,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),i=n.getResponse(e);return i||new Promise(s=>{const r=o=>{!o||(this.tokenChangeListeners.delete(r),s(o))};this.tokenChangeListeners.add(r),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){G(!this.parameters.sitekey,this.auth,"argument-error"),G(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),G(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(i=>i(n)),typeof e=="function")e(n);else if(typeof e=="string"){const i=ut()[e];typeof i=="function"&&i(n)}}}assertNotDestroyed(){G(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){G(Hu()&&!fa(),this.auth,"internal-error"),await l_(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Qy(this.auth);G(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return G(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function l_(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ps._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function uS(t,e,n){const i=ms(t),s=await c_(i,e,et(n));return new u_(s,r=>Oy(i,r))}async function c_(t,e,n){var i;const s=await n.verify();try{G(typeof s=="string",t,"argument-error"),G(n.type===_c,t,"argument-error");let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const o=r.session;if("phoneNumber"in r)return G(o.type==="enroll",t,"internal-error"),(await ky(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{G(o.type==="signin",t,"internal-error");const a=((i=r.multiFactorHint)===null||i===void 0?void 0:i.uid)||r.multiFactorUid;return G(a,t,"missing-multi-factor-info"),(await Xy(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Ty(t,{phoneNumber:r.phoneNumber,recaptchaToken:s});return o}}finally{n._reset()}}/**
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
 */function h_(t,e){return e?yn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ga extends ha{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return ki(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ki(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function d_(t){return oc(t.auth,new ga(t),t.bypassAuthState)}function f_(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Ly(n,new ga(t),t.bypassAuthState)}async function m_(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Ry(n,new ga(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return d_;case"linkViaPopup":case"linkViaRedirect":return m_;case"reauthViaPopup":case"reauthViaRedirect":return f_;default:mn(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=new cs(2e3,1e4);class Di extends vc{constructor(e,n,i,s,r){super(e,n,s,r);this.provider=i,this.authWindow=null,this.pollId=null,Di.currentPopupAction&&Di.currentPopupAction.cancel(),Di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=da();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,p_.get())};e()}}Di.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="pendingRedirect",ya=new Map;class y_ extends vc{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=ya.get(this.auth._key());if(!e){try{const i=await __(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ya.set(this.auth._key(),e)}return this.bypassAuthState||ya.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function __(t,e){const n=I_(e),i=v_(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function v_(t){return yn(t._redirectPersistence)}function I_(t){return br(g_,t.config.apiKey,t.name)}async function E_(t,e,n=!1){const i=ms(t),s=h_(i,e),o=await new y_(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=10*60*1e3;class T_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!A_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Ec(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=b_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ic(e))}saveEventToCache(e){this.cachedEventUids.add(Ic(e)),this.lastProcessedEventTime=Date.now()}}function Ic(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ec({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function A_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ec(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S_(t,e={}){return On(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,C_=/^https?/;async function R_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await S_(t);for(const n of e)try{if(L_(n))return}catch{}mn(t,"unauthorized-domain")}function L_(t){const e=ra(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!C_.test(n))return!1;if(w_.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const O_=new cs(3e4,6e4);function bc(){const t=ut().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function k_(t){return new Promise((e,n)=>{var i,s,r;function o(){bc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bc(),n(Qt(t,"network-request-failed"))},timeout:O_.get()})}if((s=(i=ut().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((r=ut().gapi)===null||r===void 0?void 0:r.load)o();else{const a=yc("iframefcb");return ut()[a]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},gc(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Or=null,e})}let Or=null;function N_(t){return Or=Or||k_(t),Or}/**
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
 */const D_=new cs(5e3,15e3),M_="__/auth/iframe",P_="emulator/auth/iframe",F_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},U_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function V_(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?oa(e,P_):`https://${t.config.authDomain}/${M_}`,i={apiKey:e.apiKey,appName:t.name,v:Li},s=U_.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Ci(i).slice(1)}`}async function B_(t){const e=await N_(t),n=ut().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:V_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:F_,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),a=ut().setTimeout(()=>{r(o)},D_.get());function l(){ut().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const H_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},x_=500,j_=600,q_="_blank",z_="http://localhost";class Tc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function G_(t,e,n,i=x_,s=j_){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},H_),{width:i.toString(),height:s.toString(),top:r,left:o}),u=pt().toLowerCase();n&&(a=Qu(u)?q_:n),Xu(u)&&(e=e||z_,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(_y(u)&&a!=="_self")return W_(e||"",a),new Tc(null);const h=window.open(e||"",a,c);G(h,t,"popup-blocked");try{h.focus()}catch{}return new Tc(h)}function W_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const K_="__/auth/handler",X_="emulator/auth/handler";function Ac(t,e,n,i,s,r){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Li,eventId:s};if(e instanceof ic){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ag(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(r||{}))o[l]=u}if(e instanceof gs){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Q_(t)}?${Ci(a).slice(1)}`}function Q_({config:t}){return t.emulator?oa(t,X_):`https://${t.authDomain}/${K_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="webStorageSupport";class Y_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cc,this._completeRedirectFn=E_}async _openPopup(e,n,i,s){var r;gn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Ac(e,n,i,ra(),s);return G_(e,o,da())}async _openRedirect(e,n,i,s){return await this._originValidation(e),Vy(Ac(e,n,i,ra(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(gn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i}async initAndGetManager(e){const n=await B_(e),i=new T_(e);return n.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_a,{type:_a},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[_a];o!==void 0&&n(!!o),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=R_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ec()||ca()||Tr()}}const J_=Y_;var Sc="@firebase/auth",wc="0.19.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ev(t){Ri(new $n("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:r}=i.options;return(o=>{G(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),G(!(r==null?void 0:r.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tc(t)},l=new Ey(o,a);return ny(l,n),l})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ri(new $n("auth-internal",e=>{const n=ms(e.getProvider("auth").getImmediate());return(i=>new Z_(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Sc,wc,$_(t)),an(Sc,wc,"esm2017")}/**
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
 */function cS(t=ta()){const e=gr(t,"auth");return e.isInitialized()?e.getImmediate():ty(t,{popupRedirectResolver:J_,persistence:[Ky,Py,cc]})}ev("Browser");var tv=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},q,va=va||{},ne=tv||self;function kr(){}function Ia(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function _s(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function nv(t){return Object.prototype.hasOwnProperty.call(t,Ea)&&t[Ea]||(t[Ea]=++iv)}var Ea="closure_uid_"+(1e9*Math.random()>>>0),iv=0;function sv(t,e,n){return t.call.apply(t.bind,arguments)}function rv(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function It(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?It=sv:It=rv,It.apply(null,arguments)}function Nr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Et(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Fn(){this.s=this.s,this.o=this.o}var ov=0,av={};Fn.prototype.s=!1;Fn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),ov!=0)){var t=nv(this);delete av[t]}};Fn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Cc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Rc=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function lv(t){e:{var e=$v;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Lc(t){return Array.prototype.concat.apply([],arguments)}function ba(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Dr(t){return/^[\s\xa0]*$/.test(t)}var Oc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Pt(t,e){return t.indexOf(e)!=-1}function Ta(t,e){return t<e?-1:t>e?1:0}var Ft;e:{var kc=ne.navigator;if(kc){var Nc=kc.userAgent;if(Nc){Ft=Nc;break e}}Ft=""}function Aa(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Dc(t){const e={};for(const n in t)e[n]=t[n];return e}var Mc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pc(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Mc.length;r++)n=Mc[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Sa(t){return Sa[" "](t),t}Sa[" "]=kr;function uv(t){var e=dv;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var cv=Pt(Ft,"Opera"),Mi=Pt(Ft,"Trident")||Pt(Ft,"MSIE"),Fc=Pt(Ft,"Edge"),wa=Fc||Mi,Uc=Pt(Ft,"Gecko")&&!(Pt(Ft.toLowerCase(),"webkit")&&!Pt(Ft,"Edge"))&&!(Pt(Ft,"Trident")||Pt(Ft,"MSIE"))&&!Pt(Ft,"Edge"),hv=Pt(Ft.toLowerCase(),"webkit")&&!Pt(Ft,"Edge");function Vc(){var t=ne.document;return t?t.documentMode:void 0}var Mr;e:{var Ca="",Ra=function(){var t=Ft;if(Uc)return/rv:([^\);]+)(\)|;)/.exec(t);if(Fc)return/Edge\/([\d\.]+)/.exec(t);if(Mi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hv)return/WebKit\/(\S+)/.exec(t);if(cv)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ra&&(Ca=Ra?Ra[1]:""),Mi){var La=Vc();if(La!=null&&La>parseFloat(Ca)){Mr=String(La);break e}}Mr=Ca}var dv={};function fv(){return uv(function(){let t=0;const e=Oc(String(Mr)).split("."),n=Oc("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=Ta(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Ta(s[2].length==0,r[2].length==0)||Ta(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var Oa;if(ne.document&&Mi){var Bc=Vc();Oa=Bc||parseInt(Mr,10)||void 0}else Oa=void 0;var mv=Oa,pv=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",kr,e),ne.removeEventListener("test",kr,e)}catch{}return t}();function Lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Lt.prototype.h=function(){this.defaultPrevented=!0};function vs(t,e){if(Lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Uc){e:{try{Sa(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gv[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&vs.Z.h.call(this)}}Et(vs,Lt);var gv={2:"touch",3:"pen",4:"mouse"};vs.prototype.h=function(){vs.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Is="closure_listenable_"+(1e6*Math.random()|0),yv=0;function _v(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++yv,this.ca=this.fa=!1}function Pr(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Fr(t){this.src=t,this.g={},this.h=0}Fr.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Na(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new _v(e,this.src,r,!!i,s),e.fa=n,t.push(e)),e};function ka(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Cc(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Pr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Na(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}var Da="closure_lm_"+(1e6*Math.random()|0),Ma={};function Hc(t,e,n,i,s){if(i&&i.once)return jc(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Hc(t,e[r],n,i,s);return null}return n=Va(n),t&&t[Is]?t.N(e,n,_s(i)?!!i.capture:!!i,s):xc(t,e,n,!1,i,s)}function xc(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=_s(s)?!!s.capture:!!s,a=Fa(t);if(a||(t[Da]=a=new Fr(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=vv(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)pv||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(zc(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function vv(){function t(n){return e.call(t.src,t.listener,n)}var e=Iv;return t}function jc(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)jc(t,e[r],n,i,s);return null}return n=Va(n),t&&t[Is]?t.O(e,n,_s(i)?!!i.capture:!!i,s):xc(t,e,n,!0,i,s)}function qc(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)qc(t,e[r],n,i,s);else i=_s(i)?!!i.capture:!!i,n=Va(n),t&&t[Is]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Na(r,n,i,s),-1<n&&(Pr(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Fa(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Na(e,n,i,s)),(n=-1<t?e[t]:null)&&Pa(n))}function Pa(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Is])ka(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(zc(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Fa(e))?(ka(n,t),n.h==0&&(n.src=null,e[Da]=null)):Pr(t)}}}function zc(t){return t in Ma?Ma[t]:Ma[t]="on"+t}function Iv(t,e){if(t.ca)t=!0;else{e=new vs(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Pa(t),t=n.call(i,e)}return t}function Fa(t){return t=t[Da],t instanceof Fr?t:null}var Ua="__closure_events_fn_"+(1e9*Math.random()>>>0);function Va(t){return typeof t=="function"?t:(t[Ua]||(t[Ua]=function(e){return t.handleEvent(e)}),t[Ua])}function gt(){Fn.call(this),this.i=new Fr(this),this.P=this,this.I=null}Et(gt,Fn);gt.prototype[Is]=!0;gt.prototype.removeEventListener=function(t,e,n,i){qc(this,t,e,n,i)};function bt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new Lt(e,t);else if(e instanceof Lt)e.target=e.target||t;else{var s=e;e=new Lt(i,t),Pc(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Ur(o,i,!0,e)&&s}if(o=e.g=t,s=Ur(o,i,!0,e)&&s,s=Ur(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Ur(o,i,!1,e)&&s}gt.prototype.M=function(){if(gt.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Pr(n[i]);delete t.g[e],t.h--}}this.I=null};gt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};gt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Ur(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&ka(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Ba=ne.JSON.stringify;function Ev(){var t=Wc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class bv{constructor(){this.h=this.g=null}add(e,n){const i=Gc.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Gc=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Tv,t=>t.reset());class Tv{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Av(t){ne.setTimeout(()=>{throw t},0)}function Ha(t,e){xa||Sv(),ja||(xa(),ja=!0),Wc.add(t,e)}var xa;function Sv(){var t=ne.Promise.resolve(void 0);xa=function(){t.then(wv)}}var ja=!1,Wc=new bv;function wv(){for(var t;t=Ev();){try{t.h.call(t.g)}catch(n){Av(n)}var e=Gc;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ja=!1}function Vr(t,e){gt.call(this),this.h=t||1,this.g=e||ne,this.j=It(this.kb,this),this.l=Date.now()}Et(Vr,gt);q=Vr.prototype;q.da=!1;q.S=null;q.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),bt(this,"tick"),this.da&&(qa(this),this.start()))}};q.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qa(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}q.M=function(){Vr.Z.M.call(this),qa(this),delete this.g};function za(t,e,n){if(typeof t=="function")n&&(t=It(t,n));else if(t&&typeof t.handleEvent=="function")t=It(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function Kc(t){t.g=za(()=>{t.g=null,t.i&&(t.i=!1,Kc(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Cv extends Fn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Kc(this)}M(){super.M(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Es(t){Fn.call(this),this.h=t,this.g={}}Et(Es,Fn);var Xc=[];function Qc(t,e,n,i){Array.isArray(n)||(n&&(Xc[0]=n.toString()),n=Xc);for(var s=0;s<n.length;s++){var r=Hc(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Yc(t){Aa(t.g,function(e,n){this.g.hasOwnProperty(n)&&Pa(e)},t),t.g={}}Es.prototype.M=function(){Es.Z.M.call(this),Yc(this)};Es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Br(){this.g=!0}Br.prototype.Aa=function(){this.g=!1};function Rv(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Lv(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Pi(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+kv(t,n)+(i?" "+i:"")})}function Ov(t,e){t.info(function(){return"TIMEOUT: "+e})}Br.prototype.info=function(){};function kv(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ba(n)}catch{return e}}var si={},Jc=null;function Hr(){return Jc=Jc||new gt}si.Ma="serverreachability";function Zc(t){Lt.call(this,si.Ma,t)}Et(Zc,Lt);function bs(t){const e=Hr();bt(e,new Zc(e,t))}si.STAT_EVENT="statevent";function $c(t,e){Lt.call(this,si.STAT_EVENT,t),this.stat=e}Et($c,Lt);function Ut(t){const e=Hr();bt(e,new $c(e,t))}si.Na="timingevent";function eh(t,e){Lt.call(this,si.Na,t),this.size=e}Et(eh,Lt);function Ts(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var xr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},th={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ga(){}Ga.prototype.h=null;function nh(t){return t.h||(t.h=t.i())}function ih(){}var As={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Wa(){Lt.call(this,"d")}Et(Wa,Lt);function Ka(){Lt.call(this,"c")}Et(Ka,Lt);var Xa;function jr(){}Et(jr,Ga);jr.prototype.g=function(){return new XMLHttpRequest};jr.prototype.i=function(){return{}};Xa=new jr;function Ss(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Es(this),this.P=Nv,t=wa?125:void 0,this.W=new Vr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new sh}function sh(){this.i=null,this.g="",this.h=!1}var Nv=45e3,Qa={},qr={};q=Ss.prototype;q.setTimeout=function(t){this.P=t};function Ya(t,e,n){t.K=1,t.v=Xr(_n(e)),t.s=n,t.U=!0,rh(t,null)}function rh(t,e){t.F=Date.now(),ws(t),t.A=_n(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),mh(n.h,"t",i),t.C=0,n=t.l.H,t.h=new sh,t.g=Uh(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Cv(It(t.Ia,t,t.g),t.O)),Qc(t.V,t.g,"readystatechange",t.gb),e=t.H?Dc(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),bs(1),Rv(t.j,t.u,t.A,t.m,t.X,t.s)}q.gb=function(t){t=t.target;const e=this.L;e&&vn(t)==3?e.l():this.Ia(t)};q.Ia=function(t){try{if(t==this.g)e:{const c=vn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||wa||this.g&&(this.h.h||this.g.ga()||wh(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?bs(3):bs(2)),zr(this);var n=this.g.ba();this.N=n;t:if(oh(this)){var i=wh(this.g);t="";var s=i.length,r=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ri(this),Cs(this);var o="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Lv(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Dr(a)){var u=a;break t}}u=null}if(n=u)Pi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ja(this,n);else{this.i=!1,this.o=3,Ut(12),ri(this),Cs(this);break e}}this.U?(ah(this,c,o),wa&&this.i&&c==3&&(Qc(this.V,this.W,"tick",this.fb),this.W.start())):(Pi(this.j,this.m,o,null),Ja(this,o)),c==4&&ri(this),this.i&&!this.I&&(c==4?Dh(this.l,this):(this.i=!1,ws(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ut(12)):(this.o=0,Ut(13)),ri(this),Cs(this)}}}catch{}finally{}};function oh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function ah(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=Dv(t,n),s==qr){e==4&&(t.o=4,Ut(14),i=!1),Pi(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Qa){t.o=4,Ut(15),Pi(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Pi(t.j,t.m,s,null),Ja(t,s);oh(t)&&s!=qr&&s!=Qa&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ut(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ll(e),e.L=!0,Ut(11))):(Pi(t.j,t.m,n,"[Invalid Chunked Response]"),ri(t),Cs(t))}q.fb=function(){if(this.g){var t=vn(this.g),e=this.g.ga();this.C<e.length&&(zr(this),ah(this,t,e),this.i&&t!=4&&ws(this))}};function Dv(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?qr:(n=Number(e.substring(n,i)),isNaN(n)?Qa:(i+=1,i+n>e.length?qr:(e=e.substr(i,n),t.C=i+n,e)))}q.cancel=function(){this.I=!0,ri(this)};function ws(t){t.Y=Date.now()+t.P,lh(t,t.P)}function lh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ts(It(t.eb,t),e)}function zr(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}q.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Ov(this.j,this.A),this.K!=2&&(bs(3),Ut(17)),ri(this),this.o=2,Cs(this)):lh(this,this.Y-t)};function Cs(t){t.l.G==0||t.I||Dh(t.l,t)}function ri(t){zr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,qa(t.W),Yc(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ja(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||el(n.i,t))){if(n.I=t.N,!t.J&&el(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)eo(n),Zr(n);else break e;al(n),Ut(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ts(It(n.ab,n),6e3));if(1>=yh(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else li(n,11)}else if((t.J||n.g==t)&&eo(n),!Dr(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=i.i;!r.g&&(Pt(m,"spdy")||Pt(m,"quic")||Pt(m,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(tl(r,r.h),r.h=null))}if(i.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.sa=y,qe(i.F,i.D,y))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=Fh(i,i.H?i.la:null,i.W),o.J){_h(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(zr(a),ws(a)),i.g=o}else kh(i);0<n.l.length&&$r(n)}else u[0]!="stop"&&u[0]!="close"||li(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?li(n,7):rl(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}bs(4)}catch{}}function Mv(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Ia(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Za(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ia(t)||typeof t=="string")Rc(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Ia(t)||typeof t=="string"){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=Mv(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function Fi(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Fi)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}q=Fi.prototype;q.R=function(){$a(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};q.T=function(){return $a(this),this.g.concat()};function $a(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];oi(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)i=t.g[e],oi(s,i)||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}q.get=function(t,e){return oi(this.h,t)?this.h[t]:e};q.set=function(t,e){oi(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};q.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};function oi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var uh=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Pv(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ai(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ai){this.g=e!==void 0?e:t.g,Gr(this,t.j),this.s=t.s,Wr(this,t.i),Kr(this,t.m),this.l=t.l,e=t.h;var n=new Os;n.i=e.i,e.g&&(n.g=new Fi(e.g),n.h=e.h),ch(this,n),this.o=t.o}else t&&(n=String(t).match(uh))?(this.g=!!e,Gr(this,n[1]||"",!0),this.s=Rs(n[2]||""),Wr(this,n[3]||"",!0),Kr(this,n[4]),this.l=Rs(n[5]||"",!0),ch(this,n[6]||"",!0),this.o=Rs(n[7]||"")):(this.g=!!e,this.h=new Os(null,this.g))}ai.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ls(e,hh,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ls(e,hh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ls(n,n.charAt(0)=="/"?Hv:Bv,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ls(n,jv)),t.join("")};function _n(t){return new ai(t)}function Gr(t,e,n){t.j=n?Rs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Wr(t,e,n){t.i=n?Rs(e,!0):e}function Kr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ch(t,e,n){e instanceof Os?(t.h=e,qv(t.h,t.g)):(n||(e=Ls(e,xv)),t.h=new Os(e,t.g))}function qe(t,e,n){t.h.set(e,n)}function Xr(t){return qe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fv(t){return t instanceof ai?_n(t):new ai(t,void 0)}function Uv(t,e,n,i){var s=new ai(null,void 0);return t&&Gr(s,t),e&&Wr(s,e),n&&Kr(s,n),i&&(s.l=i),s}function Rs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ls(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Vv),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Vv(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var hh=/[#\/\?@]/g,Bv=/[#\?:]/g,Hv=/[#\?]/g,xv=/[#\?@]/g,jv=/#/g;function Os(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Un(t){t.g||(t.g=new Fi,t.h=0,t.i&&Pv(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}q=Os.prototype;q.add=function(t,e){Un(this),this.i=null,t=Ui(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function dh(t,e){Un(t),e=Ui(t,e),oi(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,oi(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&$a(t)))}function fh(t,e){return Un(t),e=Ui(t,e),oi(t.g.h,e)}q.forEach=function(t,e){Un(this),this.g.forEach(function(n,i){Rc(n,function(s){t.call(e,s,i,this)},this)},this)};q.T=function(){Un(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n};q.R=function(t){Un(this);var e=[];if(typeof t=="string")fh(this,t)&&(e=Lc(e,this.g.get(Ui(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Lc(e,t[n])}return e};q.set=function(t,e){return Un(this),this.i=null,t=Ui(this,t),fh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};q.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function mh(t,e,n){dh(t,e),0<n.length&&(t.i=null,t.g.set(Ui(t,e),ba(n)),t.h+=n.length)}q.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;i[r]!==""&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};function Ui(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function qv(t,e){e&&!t.j&&(Un(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(dh(this,i),mh(this,s,n))},t)),t.j=e}var zv=class{constructor(t,e){this.h=t,this.g=e}};function ph(t){this.l=t||Gv,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ea&&ne.g.Ea()&&ne.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Gv=10;function gh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function yh(t){return t.h?1:t.g?t.g.size:0}function el(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function tl(t,e){t.g?t.g.add(e):t.h=e}function _h(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ph.prototype.cancel=function(){if(this.i=vh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function vh(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ba(t.i)}function nl(){}nl.prototype.stringify=function(t){return ne.JSON.stringify(t,void 0)};nl.prototype.parse=function(t){return ne.JSON.parse(t,void 0)};function Wv(){this.g=new nl}function Kv(t,e,n){const i=n||"";try{Za(t,function(s,r){let o=s;_s(s)&&(o=Ba(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function Xv(t,e){const n=new Br;if(ne.Image){const i=new Image;i.onload=Nr(Qr,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Nr(Qr,n,i,"TestLoadImage: error",!1,e),i.onabort=Nr(Qr,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Nr(Qr,n,i,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Qr(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function ks(t){this.l=t.$b||null,this.j=t.ib||!1}Et(ks,Ga);ks.prototype.g=function(){return new Yr(this.l,this.j)};ks.prototype.i=function(t){return function(){return t}}({});function Yr(t,e){gt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=il,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Et(Yr,gt);var il=0;q=Yr.prototype;q.open=function(t,e){if(this.readyState!=il)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ds(this)};q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ne).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ns(this)),this.readyState=il};q.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ds(this)),this.g&&(this.readyState=3,Ds(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof ne.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ih(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ih(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}q.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ns(this):Ds(this),this.readyState==3&&Ih(this)}};q.Ua=function(t){this.g&&(this.response=this.responseText=t,Ns(this))};q.Ta=function(t){this.g&&(this.response=t,Ns(this))};q.ha=function(){this.g&&Ns(this)};function Ns(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ds(t)}q.setRequestHeader=function(t,e){this.v.append(t,e)};q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ds(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Yr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Qv=ne.JSON.parse;function rt(t){gt.call(this),this.headers=new Fi,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Eh,this.K=this.L=!1}Et(rt,gt);var Eh="",Yv=/^https?$/i,Jv=["POST","PUT"];q=rt.prototype;q.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Xa.g(),this.C=this.u?nh(this.u):nh(Xa),this.g.onreadystatechange=It(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){bh(this,r);return}t=n||"";const s=new Fi(this.headers);i&&Za(i,function(r,o){s.set(o,r)}),i=lv(s.T()),n=ne.FormData&&t instanceof ne.FormData,!(0<=Cc(Jv,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Sh(this),0<this.B&&((this.K=Zv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=It(this.pa,this)):this.A=za(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){bh(this,r)}};function Zv(t){return Mi&&fv()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function $v(t){return t.toLowerCase()=="content-type"}q.pa=function(){typeof va!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,bt(this,"timeout"),this.abort(8))};function bh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Th(t),Jr(t)}function Th(t){t.D||(t.D=!0,bt(t,"complete"),bt(t,"error"))}q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,bt(this,"complete"),bt(this,"abort"),Jr(this))};q.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jr(this,!0)),rt.Z.M.call(this)};q.Fa=function(){this.s||(this.F||this.v||this.l?Ah(this):this.cb())};q.cb=function(){Ah(this)};function Ah(t){if(t.h&&typeof va!="undefined"&&(!t.C[1]||vn(t)!=4||t.ba()!=2)){if(t.v&&vn(t)==4)za(t.Fa,0,t);else if(bt(t,"readystatechange"),vn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(uh)[1]||null;if(!s&&ne.self&&ne.self.location){var r=ne.self.location.protocol;s=r.substr(0,r.length-1)}i=!Yv.test(s?s.toLowerCase():"")}n=i}if(n)bt(t,"complete"),bt(t,"success");else{t.m=6;try{var o=2<vn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Th(t)}}finally{Jr(t)}}}}function Jr(t,e){if(t.g){Sh(t);const n=t.g,i=t.C[0]?kr:null;t.g=null,t.C=null,e||bt(t,"ready");try{n.onreadystatechange=i}catch{}}}function Sh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}function vn(t){return t.g?t.g.readyState:0}q.ba=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}};q.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};q.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Qv(e)}};function wh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Eh:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}q.Da=function(){return this.m};q.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function eI(t){let e="";return Aa(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function sl(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=eI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):qe(t,e,n))}function Ms(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ch(t){this.za=0,this.l=[],this.h=new Br,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ms("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ms("baseRetryDelayMs",5e3,t),this.$a=Ms("retryDelaySeedMs",1e4,t),this.Ya=Ms("forwardChannelMaxRetries",2,t),this.ra=Ms("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ph(t&&t.concurrentRequestLimit),this.Ca=new Wv,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}q=Ch.prototype;q.ma=8;q.G=1;function rl(t){if(Rh(t),t.G==3){var e=t.V++,n=_n(t.F);qe(n,"SID",t.J),qe(n,"RID",e),qe(n,"TYPE","terminate"),Ps(t,n),e=new Ss(t,t.h,e,void 0),e.K=2,e.v=Xr(_n(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon&&(n=ne.navigator.sendBeacon(e.v.toString(),"")),!n&&ne.Image&&(new Image().src=e.v,n=!0),n||(e.g=Uh(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ws(e)}Ph(t)}q.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Zr(t){t.g&&(ll(t),t.g.cancel(),t.g=null)}function Rh(t){Zr(t),t.u&&(ne.clearTimeout(t.u),t.u=null),eo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function ol(t,e){t.l.push(new zv(t.Za++,e)),t.G==3&&$r(t)}function $r(t){gh(t.i)||t.m||(t.m=!0,Ha(t.Ha,t),t.C=0)}function tI(t,e){return yh(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ts(It(t.Ha,t,e),Mh(t,t.C)),t.C++,!0)}q.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Ss(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Dc(r),Pc(r,this.P)):r=this.P),this.o===null&&(s.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Oh(this,s,e),n=_n(this.F),qe(n,"RID",t),qe(n,"CVER",22),this.D&&qe(n,"X-HTTP-Session-Id",this.D),Ps(this,n),this.o&&r&&sl(n,this.o,r),tl(this.i,s),this.Ra&&qe(n,"TYPE","init"),this.ja?(qe(n,"$req",e),qe(n,"SID","null"),s.$=!0,Ya(s,n,null)):Ya(s,n,e),this.G=2}}else this.G==3&&(t?Lh(this,t):this.l.length==0||gh(this.i)||Lh(this))};function Lh(t,e){var n;e?n=e.m:n=t.V++;const i=_n(t.F);qe(i,"SID",t.J),qe(i,"RID",n),qe(i,"AID",t.U),Ps(t,i),t.o&&t.s&&sl(i,t.o,t.s),n=new Ss(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Oh(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),tl(t.i,n),Ya(n,i,e)}function Ps(t,e){t.j&&Za({},function(n,i){qe(e,i,n)})}function Oh(t,e,n){n=Math.min(t.l.length,n);var i=t.j?It(t.j.Oa,t.j,t):null;e:{var s=t.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let u=s[l].h;const c=s[l].g;if(u-=r,0>u)r=Math.max(0,s[l].h-100),a=!1;else try{Kv(c,o,"req"+u+"_")}catch{i&&i(c)}}if(a){i=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function kh(t){t.g||t.u||(t.Y=1,Ha(t.Ga,t),t.A=0)}function al(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ts(It(t.Ga,t),Mh(t,t.A)),t.A++,!0)}q.Ga=function(){if(this.u=null,Nh(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ts(It(this.bb,this),t)}};q.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ut(10),Zr(this),Nh(this))};function ll(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function Nh(t){t.g=new Ss(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=_n(t.oa);qe(e,"RID","rpc"),qe(e,"SID",t.J),qe(e,"CI",t.N?"0":"1"),qe(e,"AID",t.U),Ps(t,e),qe(e,"TYPE","xmlhttp"),t.o&&t.s&&sl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Xr(_n(e)),n.s=null,n.U=!0,rh(n,t)}q.ab=function(){this.v!=null&&(this.v=null,Zr(this),al(this),Ut(19))};function eo(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function Dh(t,e){var n=null;if(t.g==e){eo(t),ll(t),t.g=null;var i=2}else if(el(t.i,e))n=e.D,_h(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=Hr(),bt(i,new eh(i,n,e,s)),$r(t)}else kh(t);else if(s=e.o,s==3||s==0&&0<t.I||!(i==1&&tI(t,e)||i==2&&al(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:li(t,5);break;case 4:li(t,10);break;case 3:li(t,6);break;default:li(t,2)}}}function Mh(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function li(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=It(t.jb,t);n||(n=new ai("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||Gr(n,"https"),Xr(n)),Xv(n.toString(),i)}else Ut(2);t.G=0,t.j&&t.j.va(e),Ph(t),Rh(t)}q.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ut(2)):(this.h.info("Failed to ping google.com"),Ut(1))};function Ph(t){t.G=0,t.I=-1,t.j&&((vh(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,ba(t.l),t.l.length=0),t.j.ua())}function Fh(t,e,n){let i=Fv(n);if(i.i!="")e&&Wr(i,e+"."+i.i),Kr(i,i.m);else{const s=ne.location;i=Uv(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Aa(t.aa,function(s,r){qe(i,r,s)}),e=t.D,n=t.sa,e&&n&&qe(i,e,n),qe(i,"VER",t.ma),Ps(t,i),i}function Uh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new rt(new ks({ib:!0})):new rt(t.qa),e.L=t.H,e}function Vh(){}q=Vh.prototype;q.xa=function(){};q.wa=function(){};q.va=function(){};q.ua=function(){};q.Oa=function(){};function to(){if(Mi&&!(10<=Number(mv)))throw Error("Environmental error: no available transport.")}to.prototype.g=function(t,e){return new Yt(t,e)};function Yt(t,e){gt.call(this),this.g=new Ch(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Dr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Dr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Vi(this)}Et(Yt,gt);Yt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ha(It(t.hb,t,e))),Ut(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Fh(t,null,t.W),$r(t)};Yt.prototype.close=function(){rl(this.g)};Yt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,ol(this.g,e)}else this.v?(e={},e.__data__=Ba(t),ol(this.g,e)):ol(this.g,t)};Yt.prototype.M=function(){this.g.j=null,delete this.j,rl(this.g),delete this.g,Yt.Z.M.call(this)};function Bh(t){Wa.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Et(Bh,Wa);function Hh(){Ka.call(this),this.status=1}Et(Hh,Ka);function Vi(t){this.g=t}Et(Vi,Vh);Vi.prototype.xa=function(){bt(this.g,"a")};Vi.prototype.wa=function(t){bt(this.g,new Bh(t))};Vi.prototype.va=function(t){bt(this.g,new Hh(t))};Vi.prototype.ua=function(){bt(this.g,"b")};to.prototype.createWebChannel=to.prototype.g;Yt.prototype.send=Yt.prototype.u;Yt.prototype.open=Yt.prototype.m;Yt.prototype.close=Yt.prototype.close;xr.NO_ERROR=0;xr.TIMEOUT=8;xr.HTTP_ERROR=6;th.COMPLETE="complete";ih.EventType=As;As.OPEN="a";As.CLOSE="b";As.ERROR="c";As.MESSAGE="d";gt.prototype.listen=gt.prototype.N;rt.prototype.listenOnce=rt.prototype.O;rt.prototype.getLastError=rt.prototype.La;rt.prototype.getLastErrorCode=rt.prototype.Da;rt.prototype.getStatus=rt.prototype.ba;rt.prototype.getResponseJson=rt.prototype.Qa;rt.prototype.getResponseText=rt.prototype.ga;rt.prototype.send=rt.prototype.ea;var nI=function(){return new to},iI=function(){return Hr()},ul=xr,sI=th,rI=si,xh={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},oI=ks,no=ih,aI=rt;const jh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qt.UNAUTHENTICATED=new qt(null),qt.GOOGLE_CREDENTIALS=new qt("google-credentials-uid"),qt.FIRST_PARTY=new qt("first-party-uid"),qt.MOCK_USER=new qt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi="9.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new Jo("@firebase/firestore");function qh(){return ui.logLevel}function Z(t,...e){if(ui.logLevel<=be.DEBUG){const n=e.map(cl);ui.debug(`Firestore (${Bi}): ${t}`,...n)}}function Vn(t,...e){if(ui.logLevel<=be.ERROR){const n=e.map(cl);ui.error(`Firestore (${Bi}): ${t}`,...n)}}function zh(t,...e){if(ui.logLevel<=be.WARN){const n=e.map(cl);ui.warn(`Firestore (${Bi}): ${t}`,...n)}}function cl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${Bi}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function Ue(t,e){t||oe()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class uI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qt.UNAUTHENTICATED))}shutdown(){}}class cI{constructor(e){this.t=e,this.currentUser=qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new In;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new In,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{Z("FirebaseCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Z("FirebaseCredentialsProvider","Auth not yet detected"),r.resolve(),r=new In)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Z("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ue(typeof i.accessToken=="string"),new lI(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new qt(e)}}class hI{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=qt.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class dI{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new hI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(qt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class hl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.g(i),this.p=i=>n.writeSequenceNumber(i))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hl.T=-1;class Gh{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=fI(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function Ce(t,e){return t<e?-1:t>e?1:0}function Hi(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Jt.fromMillis(Date.now())}static fromDate(e){return Jt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Jt(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new Jt(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ci(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n,i){n===void 0?n=0:n>e.length&&oe(),i===void 0?i=e.length-n:i>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Fs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Fs?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Xe extends Fs{construct(e,n,i){return new Xe(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new W(O.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new Xe(n)}static emptyPath(){return new Xe([])}}const mI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class zt extends Fs{construct(e,n,i){return new zt(e,n,i)}static isValidIdentifier(e){return mI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),zt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new zt(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new W(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new W(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new W(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new zt(n)}static emptyPath(){return new zt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.fields=e,e.sort(zt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hi(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ot(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new Ot(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const pI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bn(t){if(Ue(!!t),typeof t=="string"){let e=0;const n=pI.exec(t);if(Ue(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ot(t.seconds),nanos:ot(t.nanos)}}function ot(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xi(t){return typeof t=="string"?Ot.fromBase64String(t):Ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qh(t){const e=t.mapValue.fields.__previous_value__;return Xh(e)?Qh(e):e}function Vs(t){const e=Bn(t.mapValue.fields.__local_write_time__.timestampValue);return new Jt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){return t==null}function io(t){return t===0&&1/t==-1/0}function gI(t){return typeof t=="number"&&Number.isInteger(t)&&!io(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Xe.fromString(e))}static fromName(e){return new ie(Xe.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Xe(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xh(t)?4:10:oe()}function ln(t,e){const n=hi(t);if(n!==hi(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vs(t).isEqual(Vs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Bn(i.timestampValue),o=Bn(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return xi(i.bytesValue).isEqual(xi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ot(i.geoPointValue.latitude)===ot(s.geoPointValue.latitude)&&ot(i.geoPointValue.longitude)===ot(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ot(i.integerValue)===ot(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=ot(i.doubleValue),o=ot(s.doubleValue);return r===o?io(r)===io(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Hi(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(Wh(r)!==Wh(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ln(r[a],o[a])))return!1;return!0}(t,e);default:return oe()}}function Bs(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function qi(t,e){const n=hi(t),i=hi(e);if(n!==i)return Ce(n,i);switch(n){case 0:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=ot(s.integerValue||s.doubleValue),a=ot(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Yh(t.timestampValue,e.timestampValue);case 4:return Yh(Vs(t),Vs(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(s,r){const o=xi(s),a=xi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Ce(o[l],a[l]);if(u!==0)return u}return Ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=Ce(ot(s.latitude),ot(r.latitude));return o!==0?o:Ce(ot(s.longitude),ot(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=qi(o[l],a[l]);if(u)return u}return Ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){const o=s.fields||{},a=Object.keys(o),l=r.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Ce(a[c],u[c]);if(h!==0)return h;const d=qi(o[a[c]],l[u[c]]);if(d!==0)return d}return Ce(a.length,u.length)}(t.mapValue,e.mapValue);default:throw oe()}}function Yh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=Bn(t),i=Bn(e),s=Ce(n.seconds,i.seconds);return s!==0?s:Ce(n.nanos,i.nanos)}function dl(t){return fl(t)}function fl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=Bn(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?xi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ie.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=fl(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${fl(i.fields[a])}`;return r+"}"}(t.mapValue):oe();var e,n}function ml(t){return!!t&&"integerValue"in t}function pl(t){return!!t&&"arrayValue"in t}function Jh(t){return!!t&&"nullValue"in t}function Zh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function so(t){return!!t&&"mapValue"in t}function Hs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ci(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Hs(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hs(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!so(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hs(n)}setAll(e){let n=zt.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Hs(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());so(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];so(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){ci(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Zt(Hs(this.value))}}function $h(t){const e=[];return ci(t.fields,(n,i)=>{const s=new zt([n]);if(so(i)){const r=$h(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Us(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n,i,s,r){this.key=e,this.documentType=n,this.version=i,this.data=s,this.documentState=r}static newInvalidDocument(e){return new kt(e,0,Ae.min(),Zt.empty(),0)}static newFoundDocument(e,n,i){return new kt(e,1,n,i,0)}static newNoDocument(e,n){return new kt(e,2,n,Zt.empty(),0)}static newUnknownDocument(e,n){return new kt(e,3,n,Zt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new kt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yI{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.A=null}}function ed(t,e=null,n=[],i=[],s=null,r=null,o=null){return new yI(t,e,n,i,s,r,o)}function gl(t){const e=ae(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>vI(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),ji(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=ro(e.startAt)),e.endAt&&(n+="|ub:",n+=ro(e.endAt)),e.A=n}return e.A}function _I(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${dl(i.value)}`;var i}).join(", ")}]`),ji(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+ro(t.startAt)),t.endAt&&(e+=", endAt: "+ro(t.endAt)),`Target(${e})`}function yl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!CI(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!ln(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!id(t.startAt,e.startAt)&&id(t.endAt,e.endAt)}function _l(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Gt extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,i):new II(e,n,i):n==="array-contains"?new TI(e,i):n==="in"?new AI(e,i):n==="not-in"?new SI(e,i):n==="array-contains-any"?new wI(e,i):new Gt(e,n,i)}static R(e,n,i){return n==="in"?new EI(e,i):new bI(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(qi(n,this.value)):n!==null&&hi(this.value)===hi(n)&&this.P(qi(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function vI(t){return t.field.canonicalString()+t.op.toString()+dl(t.value)}class II extends Gt{constructor(e,n,i){super(e,n,i),this.key=ie.fromName(i.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.P(n)}}class EI extends Gt{constructor(e,n){super(e,"in",n),this.keys=td("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bI extends Gt{constructor(e,n){super(e,"not-in",n),this.keys=td("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function td(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>ie.fromName(i.referenceValue))}class TI extends Gt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pl(n)&&Bs(n.arrayValue,this.value)}}class AI extends Gt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bs(this.value.arrayValue,n)}}class SI extends Gt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Bs(this.value.arrayValue,n)}}class wI extends Gt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Bs(this.value.arrayValue,i))}}class vl{constructor(e,n){this.position=e,this.before=n}}function ro(t){return`${t.before?"b":"a"}:${t.position.map(e=>dl(e)).join(",")}`}class zi{constructor(e,n="asc"){this.field=e,this.dir=n}}function CI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function nd(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=ie.comparator(ie.fromName(o.referenceValue),n.key):i=qi(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return t.before?i<=0:i<0}function id(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.V=null,this.S=null,this.startAt,this.endAt}}function RI(t,e,n,i,s,r,o,a){return new xs(t,e,n,i,s,r,o,a)}function oo(t){return new xs(t)}function ao(t){return!ji(t.limit)&&t.limitType==="F"}function lo(t){return!ji(t.limit)&&t.limitType==="L"}function sd(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function rd(t){for(const e of t.filters)if(e.v())return e.field;return null}function LI(t){return t.collectionGroup!==null}function js(t){const e=ae(t);if(e.V===null){e.V=[];const n=rd(e),i=sd(e);if(n!==null&&i===null)n.isKeyField()||e.V.push(new zi(n)),e.V.push(new zi(zt.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.V.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new zi(zt.keyField(),r))}}}return e.V}function di(t){const e=ae(t);if(!e.S)if(e.limitType==="F")e.S=ed(e.path,e.collectionGroup,js(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of js(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new zi(r.field,o))}const i=e.endAt?new vl(e.endAt.position,!e.endAt.before):null,s=e.startAt?new vl(e.startAt.position,!e.startAt.before):null;e.S=ed(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.S}function OI(t,e,n){return new xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function uo(t,e){return yl(di(t),di(e))&&t.limitType===e.limitType}function od(t){return`${gl(di(t))}|lt:${t.limitType}`}function Il(t){return`Query(target=${_I(di(t))}; limitType=${t.limitType})`}function co(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):ie.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!nd(n.startAt,js(n),i)||n.endAt&&nd(n.endAt,js(n),i))}(t,e)}function ad(t){return(e,n)=>{let i=!1;for(const s of js(t)){const r=kI(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function kI(t,e,n){const i=t.field.isKeyField()?ie.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?qi(a,l):oe()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:io(e)?"-0":e}}function ud(t){return{integerValue:""+t}}function NI(t,e){return gI(e)?ud(e):ld(t,e)}/**
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
 */class ho{constructor(){this._=void 0}}function DI(t,e,n){return t instanceof qs?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof zs?hd(t,e):t instanceof Gs?dd(t,e):function(i,s){const r=cd(i,s),o=fd(r)+fd(i.C);return ml(r)&&ml(i.C)?ud(o):ld(i.N,o)}(t,e)}function MI(t,e,n){return t instanceof zs?hd(t,e):t instanceof Gs?dd(t,e):n}function cd(t,e){return t instanceof fo?ml(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class qs extends ho{}class zs extends ho{constructor(e){super(),this.elements=e}}function hd(t,e){const n=md(e);for(const i of t.elements)n.some(s=>ln(s,i))||n.push(i);return{arrayValue:{values:n}}}class Gs extends ho{constructor(e){super(),this.elements=e}}function dd(t,e){let n=md(e);for(const i of t.elements)n=n.filter(s=>!ln(s,i));return{arrayValue:{values:n}}}class fo extends ho{constructor(e,n){super(),this.N=e,this.C=n}}function fd(t){return ot(t.integerValue||t.doubleValue)}function md(t){return pl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,n){this.field=e,this.transform=n}}function FI(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof zs&&i instanceof zs||n instanceof Gs&&i instanceof Gs?Hi(n.elements,i.elements,ln):n instanceof fo&&i instanceof fo?ln(n.C,i.C):n instanceof qs&&i instanceof qs}(t.transform,e.transform)}class UI{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class po{}function VI(t,e,n){t instanceof go?function(i,s,r){const o=i.value.clone(),a=_d(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof fi?function(i,s,r){if(!mo(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=_d(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(yd(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function El(t,e,n){t instanceof go?function(i,s,r){if(!mo(i.precondition,s))return;const o=i.value.clone(),a=vd(i.fieldTransforms,r,s);o.setAll(a),s.convertToFoundDocument(gd(s),o).setHasLocalMutations()}(t,e,n):t instanceof fi?function(i,s,r){if(!mo(i.precondition,s))return;const o=vd(i.fieldTransforms,r,s),a=s.data;a.setAll(yd(i)),a.setAll(o),s.convertToFoundDocument(gd(s),a).setHasLocalMutations()}(t,e,n):function(i,s){mo(i.precondition,s)&&s.convertToNoDocument(Ae.min())}(t,e)}function BI(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=cd(i.transform,s||null);r!=null&&(n==null&&(n=Zt.empty()),n.set(i.field,r))}return n||null}function pd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Hi(n,i,(s,r)=>FI(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function gd(t){return t.isFoundDocument()?t.version:Ae.min()}class go extends po{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}}class fi extends po{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}}function yd(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function _d(t,e,n){const i=new Map;Ue(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,MI(o,a,n[s]))}return i}function vd(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,DI(r,o,e))}return i}class Id extends po{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class HI extends po{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at,ye;function jI(t){switch(t){default:return oe();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function Ed(t){if(t===void 0)return Vn("GRPC error has no .code"),O.UNKNOWN;switch(t){case at.OK:return O.OK;case at.CANCELLED:return O.CANCELLED;case at.UNKNOWN:return O.UNKNOWN;case at.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case at.INTERNAL:return O.INTERNAL;case at.UNAVAILABLE:return O.UNAVAILABLE;case at.UNAUTHENTICATED:return O.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case at.NOT_FOUND:return O.NOT_FOUND;case at.ALREADY_EXISTS:return O.ALREADY_EXISTS;case at.PERMISSION_DENIED:return O.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case at.ABORTED:return O.ABORTED;case at.OUT_OF_RANGE:return O.OUT_OF_RANGE;case at.UNIMPLEMENTED:return O.UNIMPLEMENTED;case at.DATA_LOSS:return O.DATA_LOSS;default:return oe()}}(ye=at||(at={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n){this.comparator=e,this.root=n||Tt.EMPTY}insert(e,n){return new Nt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(e){return new Nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yo(this.root,e,this.comparator,!1)}getReverseIterator(){return new yo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yo(this.root,e,this.comparator,!0)}}class yo{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Tt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:Tt.RED,this.left=s!=null?s:Tt.EMPTY,this.right=r!=null?r:Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Tt(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Tt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Tt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.comparator=e,this.data=new Nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bd(this.data.getIterator())}getIteratorFrom(e){return new bd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new At(this.comparator);return n.data=e,n}}class bd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=new Nt(ie.comparator);function mi(){return qI}const zI=new Nt(ie.comparator);function bl(){return zI}const GI=new Nt(ie.comparator);function WI(){return GI}const KI=new At(ie.comparator);function je(...t){let e=KI;for(const n of t)e=e.add(n);return e}const XI=new At(Ce);function Td(){return XI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const i=new Map;return i.set(e,Ws.createSynthesizedTargetChangeForCurrentChange(e,n)),new _o(Ae.min(),i,Td(),mi(),je())}}class Ws{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ws(Ot.EMPTY_BYTE_STRING,n,je(),je(),je())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n,i,s){this.k=e,this.removedTargetIds=n,this.key=i,this.$=s}}class Ad{constructor(e,n){this.targetId=e,this.O=n}}class Sd{constructor(e,n,i=Ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class wd{constructor(){this.F=0,this.M=Rd(),this.L=Ot.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=je(),n=je(),i=je();return this.M.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:oe()}}),new Ws(this.L,this.B,e,n,i)}G(){this.U=!1,this.M=Rd()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class QI{constructor(e){this.tt=e,this.et=new Map,this.nt=mi(),this.st=Cd(),this.it=new At(Ce)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.ct(n,e.key,e.$);for(const n of e.removedTargetIds)this.ct(n,e.key,e.$)}at(e){this.forEachTarget(e,n=>{const i=this.ut(n);switch(e.state){case 0:this.ht(n)&&i.j(e.resumeToken);break;case 1:i.X(),i.q||i.G(),i.j(e.resumeToken);break;case 2:i.X(),i.q||this.removeTarget(n);break;case 3:this.ht(n)&&(i.Z(),i.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),i.j(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((i,s)=>{this.ht(s)&&n(s)})}ft(e){const n=e.targetId,i=e.O.count,s=this.dt(n);if(s){const r=s.target;if(_l(r))if(i===0){const o=new ie(r.path);this.ct(n,o,kt.newNoDocument(o,Ae.min()))}else Ue(i===1);else this.wt(n)!==i&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((r,o)=>{const a=this.dt(o);if(a){if(r.current&&_l(a.target)){const l=new ie(a.target.path);this.nt.get(l)!==null||this.gt(o,l)||this.ct(o,l,kt.newNoDocument(l,e))}r.K&&(n.set(o,r.W()),r.G())}});let i=je();this.st.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.dt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))});const s=new _o(e,n,this.it,this.nt,i);return this.nt=mi(),this.st=Cd(),this.it=new At(Ce),s}ot(e,n){if(!this.ht(e))return;const i=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,i),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}ct(e,n,i){if(!this.ht(e))return;const s=this.ut(e);this.gt(e,n)?s.H(n,1):s.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),i&&(this.nt=this.nt.insert(n,i))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new wd,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new At(Ce),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new wd),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function Cd(){return new Nt(ie.comparator)}function Rd(){return new Nt(ie.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),JI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class ZI{constructor(e,n){this.databaseId=e,this.D=n}}function Io(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ld(t,e){return t.D?e.toBase64():e.toUint8Array()}function $I(t,e){return Io(t,e.toTimestamp())}function En(t){return Ue(!!t),Ae.fromTimestamp(function(e){const n=Bn(e);return new Jt(n.seconds,n.nanos)}(t))}function Tl(t,e){return function(n){return new Xe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Od(t){const e=Xe.fromString(t);return Ue(Fd(e)),e}function Al(t,e){return Tl(t.databaseId,e.path)}function Sl(t,e){const n=Od(e);if(n.get(1)!==t.databaseId.projectId)throw new W(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(kd(n))}function wl(t,e){return Tl(t.databaseId,e)}function eE(t){const e=Od(t);return e.length===4?Xe.emptyPath():kd(e)}function Cl(t){return new Xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kd(t){return Ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Nd(t,e,n){return{name:Al(t,e),fields:n.value.mapValue.fields}}function tE(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,u){return l.D?(Ue(u===void 0||typeof u=="string"),Ot.fromBase64String(u||"")):(Ue(u===void 0||u instanceof Uint8Array),Ot.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?O.UNKNOWN:Ed(l.code);return new W(u,l.message||"")}(o);n=new Sd(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Sl(t,i.document.name),r=En(i.document.updateTime),o=new Zt({mapValue:{fields:i.document.fields}}),a=kt.newFoundDocument(s,r,o),l=i.targetIds||[],u=i.removedTargetIds||[];n=new vo(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Sl(t,i.document),r=i.readTime?En(i.readTime):Ae.min(),o=kt.newNoDocument(s,r),a=i.removedTargetIds||[];n=new vo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Sl(t,i.document),r=i.removedTargetIds||[];n=new vo([],r,s,null)}else{if(!("filter"in e))return oe();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new xI(s),o=i.targetId;n=new Ad(o,r)}}return n}function nE(t,e){let n;if(e instanceof go)n={update:Nd(t,e.key,e.value)};else if(e instanceof Id)n={delete:Al(t,e.key)};else if(e instanceof fi)n={update:Nd(t,e.key,e.data),updateMask:dE(e.fieldMask)};else{if(!(e instanceof HI))return oe();n={verify:Al(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof qs)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof zs)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Gs)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof fo)return{fieldPath:r.field.canonicalString(),increment:o.C};throw oe()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:$I(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:oe()}(t,e.precondition)),n}function iE(t,e){return t&&t.length>0?(Ue(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?En(i.updateTime):En(s);return r.isEqual(Ae.min())&&(r=En(s)),new UI(r,i.transformResults||[])}(n,e))):[]}function sE(t,e){return{documents:[wl(t,e.path)]}}function rE(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=wl(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wl(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(a){if(a.length===0)return;const l=a.map(u=>function(c){if(c.op==="=="){if(Zh(c.value))return{unaryFilter:{field:Gi(c.field),op:"IS_NAN"}};if(Jh(c.value))return{unaryFilter:{field:Gi(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(Zh(c.value))return{unaryFilter:{field:Gi(c.field),op:"IS_NOT_NAN"}};if(Jh(c.value))return{unaryFilter:{field:Gi(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gi(c.field),op:uE(c.op),value:c.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(a){if(a.length!==0)return a.map(l=>function(u){return{field:Gi(u.field),direction:lE(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(a,l){return a.D||ji(l)?l:{value:l}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Md(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Md(e.endAt)),n}function oE(t){let e=eE(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Ue(i===1);const c=n.from[0];c.allDescendants?s=c.collectionId:e=e.child(c.collectionId)}let r=[];n.where&&(r=Dd(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new zi(Wi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,ji(h)?null:h}(n.limit));let l=null;n.startAt&&(l=Pd(n.startAt));let u=null;return n.endAt&&(u=Pd(n.endAt)),RI(e,s,o,r,a,"F",l,u)}function aE(t,e){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return oe()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Dd(t){return t?t.unaryFilter!==void 0?[hE(t)]:t.fieldFilter!==void 0?[cE(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Dd(e)).reduce((e,n)=>e.concat(n)):oe():[]}function Md(t){return{before:t.before,values:t.position}}function Pd(t){const e=!!t.before,n=t.values||[];return new vl(n,e)}function lE(t){return YI[t]}function uE(t){return JI[t]}function Gi(t){return{fieldPath:t.canonicalString()}}function Wi(t){return zt.fromServerFormat(t.fieldPath)}function cE(t){return Gt.create(Wi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(t.fieldFilter.op),t.fieldFilter.value)}function hE(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Wi(t.unaryFilter.field);return Gt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Wi(t.unaryFilter.field);return Gt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Wi(t.unaryFilter.field);return Gt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Wi(t.unaryFilter.field);return Gt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}function dE(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Fd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const fE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,i)=>{n(e)})}static reject(e){return new j((n,i)=>{i(e)})}static waitFor(e){return new j((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=j.resolve(!1);for(const i of e)n=n.next(s=>s?j.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}}function Ks(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&VI(r,e,i[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&El(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&El(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const i=e.get(n.key),s=i;this.applyToLocalView(s),i.isValidDocument()||s.convertToNoDocument(Ae.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),je())}isEqual(e){return this.batchId===e.batchId&&Hi(this.mutations,e.mutations,(n,i)=>pd(n,i))&&Hi(this.baseMutations,e.baseMutations,(n,i)=>pd(n,i))}}class Rl{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){Ue(e.mutations.length===i.length);let s=WI();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Rl(e,n,i,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,i,s,r=Ae.min(),o=Ae.min(),a=Ot.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.Wt=e}}function yE(t){const e=oE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?OI(e,e.limit,"L"):e}/**
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
 */class _E{constructor(){this.Gt=new vE}addToCollectionParentIndex(e,n){return this.Gt.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Gt.getEntries(n))}}class vE{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new At(Xe.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new At(Xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new Ki(0)}static ie(){return new Ki(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==fE)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s!==void 0){for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n])}else this.inner[i]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),!0;return!1}forEach(e){ci(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Kh(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(){this.changes=new Qs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:Ae.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:kt.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?j.resolve(i.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n,i){this.He=e,this.In=n,this.Ht=i}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(i=>this.Rn(e,n,i))}Rn(e,n,i){return this.He.getEntry(e,n).next(s=>{for(const r of i)r.applyToLocalView(s);return s})}bn(e,n){e.forEach((i,s)=>{for(const r of n)r.applyToLocalView(s)})}Pn(e,n){return this.He.getEntries(e,n).next(i=>this.vn(e,i).next(()=>i))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(i=>this.bn(n,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return ie.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Vn(e,n.path):LI(n)?this.Sn(e,n,i):this.Dn(e,n,i)}Vn(e,n){return this.An(e,new ie(n)).next(i=>{let s=bl();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}Sn(e,n,i){const s=n.collectionGroup;let r=bl();return this.Ht.getCollectionParents(e,s).next(o=>j.forEach(o,a=>{const l=function(u,c){return new xs(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.Dn(e,l,i).next(u=>{u.forEach((c,h)=>{r=r.insert(c,h)})})}).next(()=>r))}Dn(e,n,i){let s,r;return this.He.getDocumentsMatchingQuery(e,n,i).next(o=>(s=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(r=o,this.Cn(e,r,s).next(a=>{s=a;for(const l of r)for(const u of l.mutations){const c=u.key;let h=s.get(c);h==null&&(h=kt.newInvalidDocument(c),s=s.insert(c,h)),El(u,h,l.localWriteTime),h.isFoundDocument()||(s=s.remove(c))}}))).next(()=>(s.forEach((o,a)=>{co(n,a)||(s=s.remove(o))}),s))}Cn(e,n,i){let s=je();for(const o of n)for(const a of o.mutations)a instanceof fi&&i.get(a.key)===null&&(s=s.add(a.key));let r=i;return this.He.getEntries(e,s).next(o=>(o.forEach((a,l)=>{l.isFoundDocument()&&(r=r.insert(a,l))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Nn=i,this.xn=s}static kn(e,n){let i=je(),s=je();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Ll(e,n.fromCache,i,s)}}/**
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
 */class EE{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,i,s){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||i.isEqual(Ae.min())?this.Fn(e,n):this.On.Pn(e,s).next(r=>{const o=this.Mn(n,r);return(ao(n)||lo(n))&&this.Ln(n.limitType,o,s,i)?this.Fn(e,n):(qh()<=be.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Il(n)),this.On.getDocumentsMatchingQuery(e,n,i).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}Mn(e,n){let i=new At(ad(e));return n.forEach((s,r)=>{co(e,r)&&(i=i.add(r))}),i}Ln(e,n,i,s){if(i.size!==n.size)return!0;const r=e==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Fn(e,n){return qh()<=be.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Il(n)),this.On.getDocumentsMatchingQuery(e,n,Ae.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,n,i,s){this.persistence=e,this.Bn=n,this.N=s,this.Un=new Nt(Ce),this.qn=new Qs(r=>gl(r),yl),this.Kn=Ae.min(),this.In=e.getMutationQueue(i),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new Ud(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function TE(t,e,n,i){return new bE(t,e,n,i)}async function Vd(t,e){const n=ae(t);let i=n.In,s=n.Qn;const r=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(l=>(a=l,i=n.persistence.getMutationQueue(e),s=new Ud(n.jn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(o))).next(l=>{const u=[],c=[];let h=je();for(const d of a){u.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}for(const d of l){c.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}return s.Pn(o,h).next(d=>({Wn:d,removedBatchIds:u,addedBatchIds:c}))})});return n.In=i,n.Qn=s,n.Bn.$n(n.Qn),r}function AE(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=j.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(m=>{const y=l.docVersions.get(f);Ue(y!==null),m.version.compareTo(y)<0&&(c.applyToRemoteDocument(m,l),m.isValidDocument()&&u.addEntry(m,l.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,c))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.In.performConsistencyCheck(i)).next(()=>n.Qn.Pn(i,s))})}function Bd(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function SE(t,e){const n=ae(t),i=e.snapshotVersion;let s=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});s=n.Un;const a=[];e.targetChanges.forEach((u,c)=>{const h=s.get(c);if(!h)return;a.push(n.ze.removeMatchingKeys(r,u.removedDocuments,c).next(()=>n.ze.addMatchingKeys(r,u.addedDocuments,c)));const d=u.resumeToken;if(d.approximateByteSize()>0){const f=h.withResumeToken(d,i).withSequenceNumber(r.currentSequenceNumber);s=s.insert(c,f),function(m,y,g){return Ue(y.resumeToken.approximateByteSize()>0),m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(h,f,u)&&a.push(n.ze.updateTargetData(r,f))}});let l=mi();if(e.documentUpdates.forEach((u,c)=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(wE(r,o,e.documentUpdates,i,void 0).next(u=>{l=u})),!i.isEqual(Ae.min())){const u=n.ze.getLastRemoteSnapshotVersion(r).next(c=>n.ze.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return j.waitFor(a).next(()=>o.apply(r)).next(()=>n.Qn.vn(r,l)).next(()=>l)}).then(r=>(n.Un=s,r))}function wE(t,e,n,i,s){let r=je();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let a=mi();return n.forEach((l,u)=>{const c=o.get(l),h=(s==null?void 0:s.get(l))||i;u.isNoDocument()&&u.version.isEqual(Ae.min())?(e.removeEntry(l,h),a=a.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u,h),a=a.insert(l,u)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),a})}function CE(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(i,e)))}function RE(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.ze.getTargetData(i,e).next(r=>r?(s=r,j.resolve(s)):n.ze.allocateTargetId(i).next(o=>(s=new pi(e,o,0,i.currentSequenceNumber),n.ze.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Un.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Un=n.Un.insert(i.targetId,i),n.qn.set(e,i.targetId)),i})}async function Ol(t,e,n){const i=ae(t),s=i.Un.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ks(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Un=i.Un.remove(e),i.qn.delete(s.target)}function Hd(t,e,n){const i=ae(t);let s=Ae.min(),r=je();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=ae(a),h=c.qn.get(u);return h!==void 0?j.resolve(c.Un.get(h)):c.ze.getTargetData(l,u)}(i,o,di(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.ze.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Bn.getDocumentsMatchingQuery(o,e,n?s:Ae.min(),n?r:je())).next(a=>({documents:a,Gn:r})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return j.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var i;return this.Yn.set(n.id,{id:(i=n).id,version:i.version,createTime:En(i.createTime)}),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:yE(i.bundledQuery),readTime:En(i.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this.Zn=new At(yt.ts),this.es=new At(yt.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const i=new yt(e,n);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.rs(new yt(e,n))}os(e,n){e.forEach(i=>this.removeReference(i,n))}cs(e){const n=new ie(new Xe([])),i=new yt(n,e),s=new yt(n,e+1),r=[];return this.es.forEachInRange([i,s],o=>{this.rs(o),r.push(o.key)}),r}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new ie(new Xe([])),i=new yt(n,e),s=new yt(n,e+1);let r=je();return this.es.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new yt(e,0),i=this.Zn.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class yt{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return ie.comparator(e.key,n.key)||Ce(e.ls,n.ls)}static ns(e,n){return Ce(e.ls,n.ls)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new At(yt.ts)}checkEmpty(e){return j.resolve(this.In.length===0)}addMutationBatch(e,n,i,s){const r=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new pE(r,n,i,s);this.In.push(o);for(const a of s)this.ds=this.ds.add(new yt(a.key,r)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this._s(i),r=s<0?0:s;return j.resolve(this.In.length>r?this.In[r]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return j.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new yt(n,0),s=new yt(n,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([i,s],o=>{const a=this.ws(o.ls);r.push(a)}),j.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new At(Ce);return n.forEach(s=>{const r=new yt(s,0),o=new yt(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{i=i.add(a.ls)})}),j.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;ie.isDocumentKey(r)||(r=r.child(""));const o=new yt(new ie(r),0);let a=new At(Ce);return this.ds.forEachWhile(l=>{const u=l.key.path;return!!i.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.ls)),!0)},o),j.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(i=>{const s=this.ws(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ue(this.ys(n.batchId,"removed")===0),this.In.shift();let i=this.ds;return j.forEach(n.mutations,s=>{const r=new yt(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=i})}te(e){}containsKey(e,n){const i=new yt(n,0),s=this.ds.firstAfterOrEqual(i);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.In.length,j.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new Nt(ie.comparator),this.size=0}addEntry(e,n,i){const s=n.key,r=this.docs.get(s),o=r?r.size:0,a=this.ps(n);return this.docs=this.docs.insert(s,{document:n.clone(),size:a,readTime:i}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return j.resolve(i?i.document.clone():kt.newInvalidDocument(n))}getEntries(e,n){let i=mi();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.clone():kt.newInvalidDocument(s))}),j.resolve(i)}getDocumentsMatchingQuery(e,n,i){let s=mi();const r=new ie(n.path.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l,readTime:u}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;u.compareTo(i)<=0||co(n,l)&&(s=s.insert(l.key,l.clone()))}return j.resolve(s)}Ts(e,n){return j.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new NE(this)}getSize(e){return j.resolve(this.size)}}class NE extends IE{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.document.isValidDocument()?n.push(this.Se.addEntry(e,s.document,this.getReadTime(i))):this.Se.removeEntry(i)}),j.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e){this.persistence=e,this.Es=new Qs(n=>gl(n),yl),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.Is=0,this.As=new kl,this.targetCount=0,this.Rs=Ki.se()}forEachTarget(e,n){return this.Es.forEach((i,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Is&&(this.Is=n),j.resolve()}ce(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Ki(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.ce(n),j.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Es.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),j.waitFor(r).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const i=this.Es.get(n)||null;return j.resolve(i)}addMatchingKeys(e,n,i){return this.As.ss(n,i),j.resolve()}removeMatchingKeys(e,n,i){this.As.os(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),j.resolve()}getMatchingKeysForTargetId(e,n){const i=this.As.hs(n);return j.resolve(i)}containsKey(e,n){return j.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n){this.bs={},this.Le=new hl(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new DE(this),this.Ht=new _E,this.He=function(i,s){return new kE(i,s)}(this.Ht,i=>this.referenceDelegate.Ps(i)),this.N=new gE(n),this.Je=new LE(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new OE(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,i){Z("MemoryPersistence","Starting transaction:",e);const s=new PE(this.Le.next());return this.referenceDelegate.vs(),i(s).next(r=>this.referenceDelegate.Vs(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ss(e,n){return j.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,n)))}}class PE extends mE{constructor(e){super(),this.currentSequenceNumber=e}}class Nl{constructor(e){this.persistence=e,this.Ds=new kl,this.Cs=null}static Ns(e){return new Nl(e)}get xs(){if(this.Cs)return this.Cs;throw oe()}addReference(e,n,i){return this.Ds.addReference(i,n),this.xs.delete(i.toString()),j.resolve()}removeReference(e,n,i){return this.Ds.removeReference(i,n),this.xs.add(i.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(s=>this.xs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.xs.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.xs,i=>{const s=ie.fromPath(i);return this.ks(e,s).next(r=>{r||n.removeEntry(s)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(i=>{i?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return j.or([()=>j.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class xd{constructor(){this.activeTargetIds=Td()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FE{constructor(){this.yi=new xd,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,i){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new xd,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class UE{Ti(e){}shutdown(){}}/**
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
 */class jd{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,i,s){const r=this.Bi(e,n);Z("RestConnection","Sending: ",r,i);const o={};return this.Ui(o,s),this.qi(e,r,o,i).then(a=>(Z("RestConnection","Received: ",a),a),a=>{throw zh("RestConnection",`${e} failed with error: `,a,"url: ",r,"request:",i),a})}Ki(e,n,i,s){return this.Li(e,n,i,s)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+Bi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const i in n.authHeaders)n.authHeaders.hasOwnProperty(i)&&(e[i]=n.authHeaders[i])}Bi(e,n){const i=VE[e];return`${this.Fi}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,i,s){return new Promise((r,o)=>{const a=new aI;a.listenOnce(sI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ul.NO_ERROR:const u=a.getResponseJson();Z("Connection","XHR received:",JSON.stringify(u)),r(u);break;case ul.TIMEOUT:Z("Connection",'RPC "'+e+'" timed out'),o(new W(O.DEADLINE_EXCEEDED,"Request time out"));break;case ul.HTTP_ERROR:const c=a.getStatus();if(Z("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const m=f.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(m)>=0?m:O.UNKNOWN}(h.status);o(new W(d,h.message))}else o(new W(O.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new W(O.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{Z("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);a.send(n,"POST",l,i,15)})}ji(e,n){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=nI(),r=iI(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new oI({})),this.Ui(o.initMessageHeaders,n),Lu()||ku()||ng()||Nu()||ig()||Ou()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");Z("Connection","Creating WebChannel: "+a,o);const l=s.createWebChannel(a,o);let u=!1,c=!1;const h=new BE({vi:f=>{c?Z("Connection","Not sending because WebChannel is closed:",f):(u||(Z("Connection","Opening WebChannel transport."),l.open(),u=!0),Z("Connection","WebChannel sending:",f),l.send(f))},Vi:()=>l.close()}),d=(f,m,y)=>{f.listen(m,g=>{try{y(g)}catch(E){setTimeout(()=>{throw E},0)}})};return d(l,no.EventType.OPEN,()=>{c||Z("Connection","WebChannel transport opened.")}),d(l,no.EventType.CLOSE,()=>{c||(c=!0,Z("Connection","WebChannel transport closed"),h.$i())}),d(l,no.EventType.ERROR,f=>{c||(c=!0,zh("Connection","WebChannel transport errored:",f),h.$i(new W(O.UNAVAILABLE,"The operation could not be completed")))}),d(l,no.EventType.MESSAGE,f=>{var m;if(!c){const y=f.data[0];Ue(!!y);const g=y,E=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(E){Z("Connection","WebChannel received error:",E);const S=E.status;let T=function(V){const w=at[V];if(w!==void 0)return Ed(w)}(S),A=E.message;T===void 0&&(T=O.INTERNAL,A="Unknown error status: "+S+" with message "+E.message),c=!0,h.$i(new W(T,A)),l.close()}else Z("Connection","WebChannel received:",y),h.Oi(y)}}),d(r,rI.STAT_EVENT,f=>{f.stat===xh.PROXY?Z("Connection","Detected buffering proxy"):f.stat===xh.NOPROXY&&Z("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function Dl(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){return new ZI(t,!0)}class qd{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Oe=e,this.timerId=n,this.Qi=i,this.Wi=s,this.Gi=r,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),i=Math.max(0,Date.now()-this.Ji),s=Math.max(0,n-i);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n,i,s,r,o,a){this.Oe=e,this.er=i,this.nr=s,this.sr=r,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new qd(e,n)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),n=this.ir;this.credentialsProvider.getToken().then(i=>{this.ir===n&&this.Er(i)},i=>{e(()=>{const s=new W(O.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Ir(s)})})}Er(e){const n=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(i=>{n(()=>this.Ir(i))}),this.stream.onMessage(i=>{n(()=>this.onMessage(i))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return n=>{this.Oe.enqueueAndForget(()=>this.ir===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xE extends zd{constructor(e,n,i,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r),this.N=s}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const n=tE(this.N,e),i=function(s){if(!("targetChange"in s))return Ae.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?Ae.min():r.readTime?En(r.readTime):Ae.min()}(e);return this.listener.Rr(n,i)}br(e){const n={};n.database=Cl(this.N),n.addTarget=function(s,r){let o;const a=r.target;return o=_l(a)?{documents:sE(s,a)}:{query:rE(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Ld(s,r.resumeToken):r.snapshotVersion.compareTo(Ae.min())>0&&(o.readTime=Io(s,r.snapshotVersion.toTimestamp())),o}(this.N,e);const i=aE(this.N,e);i&&(n.labels=i),this.mr(n)}Pr(e){const n={};n.database=Cl(this.N),n.removeTarget=e,this.mr(n)}}class jE extends zd{constructor(e,n,i,s,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r),this.N=s,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const n=iE(e.writeResults,e.commitTime),i=En(e.commitTime);return this.listener.Dr(i,n)}return Ue(!e.writeResults||e.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=Cl(this.N),this.mr(e)}Sr(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>nE(this.N,i))};this.mr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE extends class{}{constructor(e,n,i){super(),this.credentials=e,this.sr=n,this.N=i,this.kr=!1}$r(){if(this.kr)throw new W(O.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,i){return this.$r(),this.credentials.getToken().then(s=>this.sr.Li(e,n,i,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new W(O.UNKNOWN,s.toString())})}Ki(e,n,i){return this.$r(),this.credentials.getToken().then(s=>this.sr.Ki(e,n,i,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new W(O.UNKNOWN,s.toString())})}terminate(){this.kr=!0}}class zE{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(Vn(n),this.Mr=!1):Z("OnlineStateTracker",n)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=r,this.zr.Ti(o=>{i.enqueueAndForget(async()=>{gi(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ae(a);l.Wr.add(4),await Ys(l),l.Hr.set("Unknown"),l.Wr.delete(4),await bo(l)}(this))})}),this.Hr=new zE(i,s)}}async function bo(t){if(gi(t))for(const e of t.Gr)await e(!0)}async function Ys(t){for(const e of t.Gr)await e(!1)}function Gd(t,e){const n=ae(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),Fl(n)?Pl(n):Xi(n).hr()&&Ml(n,e))}function Wd(t,e){const n=ae(t),i=Xi(n);n.Qr.delete(e),i.hr()&&Kd(n,e),n.Qr.size===0&&(i.hr()?i.wr():gi(n)&&n.Hr.set("Unknown"))}function Ml(t,e){t.Jr.Y(e.targetId),Xi(t).br(e)}function Kd(t,e){t.Jr.Y(e),Xi(t).Pr(e)}function Pl(t){t.Jr=new QI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),Xi(t).start(),t.Hr.Lr()}function Fl(t){return gi(t)&&!Xi(t).ur()&&t.Qr.size>0}function gi(t){return ae(t).Wr.size===0}function Xd(t){t.Jr=void 0}async function WE(t){t.Qr.forEach((e,n)=>{Ml(t,e)})}async function KE(t,e){Xd(t),Fl(t)?(t.Hr.qr(e),Pl(t)):t.Hr.set("Unknown")}async function XE(t,e,n){if(t.Hr.set("Online"),e instanceof Sd&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.Qr.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.Qr.delete(o),i.Jr.removeTarget(o))}(t,e)}catch(i){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await To(t,i)}else if(e instanceof vo?t.Jr.rt(e):e instanceof Ad?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(Ae.min()))try{const i=await Bd(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.Jr._t(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.Qr.get(l);u&&s.Qr.set(l,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=s.Qr.get(a);if(!l)return;s.Qr.set(a,l.withResumeToken(Ot.EMPTY_BYTE_STRING,l.snapshotVersion)),Kd(s,a);const u=new pi(l.target,a,1,l.sequenceNumber);Ml(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){Z("RemoteStore","Failed to raise snapshot:",i),await To(t,i)}}async function To(t,e,n){if(!Ks(e))throw e;t.Wr.add(1),await Ys(t),t.Hr.set("Offline"),n||(n=()=>Bd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await bo(t)})}function Qd(t,e){return e().catch(n=>To(t,n,e))}async function Ao(t){const e=ae(t),n=Hn(e);let i=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;QE(e);)try{const s=await CE(e.localStore,i);if(s===null){e.jr.length===0&&n.wr();break}i=s.batchId,YE(e,s)}catch(s){await To(e,s)}Yd(e)&&Jd(e)}function QE(t){return gi(t)&&t.jr.length<10}function YE(t,e){t.jr.push(e);const n=Hn(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function Yd(t){return gi(t)&&!Hn(t).ur()&&t.jr.length>0}function Jd(t){Hn(t).start()}async function JE(t){Hn(t).Nr()}async function ZE(t){const e=Hn(t);for(const n of t.jr)e.Sr(n.mutations)}async function $E(t,e,n){const i=t.jr.shift(),s=Rl.from(i,e,n);await Qd(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ao(t)}async function eb(t,e){e&&Hn(t).Vr&&await async function(n,i){if(s=i.code,jI(s)&&s!==O.ABORTED){const r=n.jr.shift();Hn(n).dr(),await Qd(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Ao(n)}var s}(t,e),Yd(t)&&Jd(t)}async function tb(t,e){const n=ae(t);e?(n.Wr.delete(2),await bo(n)):e||(n.Wr.add(2),await Ys(n),n.Hr.set("Unknown"))}function Xi(t){return t.Yr||(t.Yr=function(e,n,i){const s=ae(e);return s.$r(),new xE(n,s.sr,s.credentials,s.N,i)}(t.datastore,t.asyncQueue,{Si:WE.bind(null,t),Ci:KE.bind(null,t),Rr:XE.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),Fl(t)?Pl(t):t.Hr.set("Unknown")):(await t.Yr.stop(),Xd(t))})),t.Yr}function Hn(t){return t.Xr||(t.Xr=function(e,n,i){const s=ae(e);return s.$r(),new jE(n,s.sr,s.credentials,s.N,i)}(t.datastore,t.asyncQueue,{Si:JE.bind(null,t),Ci:eb.bind(null,t),Cr:ZE.bind(null,t),Dr:$E.bind(null,t)}),t.Gr.push(async e=>{e?(t.Xr.dr(),await Ao(t)):(await t.Xr.stop(),t.jr.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))})),t.Xr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Ul(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vl(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),Ks(t))return new W(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.comparator=e?(n,i)=>e(n,i)||ie.comparator(n.key,i.key):(n,i)=>ie.comparator(n.key,i.key),this.keyedMap=bl(),this.sortedSet=new Nt(this.comparator)}static emptySet(e){return new Qi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Qi;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this.Zr=new Nt(ie.comparator)}track(e){const n=e.doc.key,i=this.Zr.get(n);i?e.type!==0&&i.type===3?this.Zr=this.Zr.insert(n,e):e.type===3&&i.type!==1?this.Zr=this.Zr.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Zr=this.Zr.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Zr=this.Zr.remove(n):e.type===1&&i.type===2?this.Zr=this.Zr.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):oe():this.Zr=this.Zr.insert(n,e)}eo(){const e=[];return this.Zr.inorderTraversal((n,i)=>{e.push(i)}),e}}class Yi{constructor(e,n,i,s,r,o,a,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,i,s){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Yi(e,n,Qi.emptySet(n),r,i,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(){this.no=void 0,this.listeners=[]}}class ib{constructor(){this.queries=new Qs(e=>od(e),uo),this.onlineState="Unknown",this.so=new Set}}async function Bl(t,e){const n=ae(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new nb),s)try{r.no=await n.onListen(i)}catch(o){const a=Vl(o,`Initialization of query '${Il(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.io(n.onlineState),r.no&&e.ro(r.no)&&xl(n)}async function Hl(t,e){const n=ae(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function sb(t,e){const n=ae(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.ro(s)&&(i=!0);o.no=s}}i&&xl(n)}function rb(t,e,n){const i=ae(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function xl(t){t.so.forEach(e=>{e.next()})}class jl{constructor(e,n,i){this.query=e,this.oo=n,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=i||{}}ro(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Yi(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.uo(e)&&(this.oo.next(e),n=!0):this.ho(e,this.onlineState)&&(this.lo(e),n=!0),this.ao=e,n}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let n=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),n=!0),n}ho(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.fo||!i)&&(!e.docs.isEmpty()||n==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const n=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}lo(e){e=Yi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.key=e}}class ef{constructor(e){this.key=e}}class ob{constructor(e,n){this.query=e,this.po=n,this.To=null,this.current=!1,this.Eo=je(),this.mutatedKeys=je(),this.Io=ad(e),this.Ao=new Qi(this.Io)}get Ro(){return this.po}bo(e,n){const i=n?n.Po:new Zd,s=n?n.Ao:this.Ao;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=ao(this.query)&&s.size===this.query.limit?s.last():null,u=lo(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((c,h)=>{const d=s.get(c),f=co(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let g=!1;d&&f?d.data.isEqual(f.data)?m!==y&&(i.track({type:3,doc:f}),g=!0):this.vo(d,f)||(i.track({type:2,doc:f}),g=!0,(l&&this.Io(f,l)>0||u&&this.Io(f,u)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),g=!0):d&&!f&&(i.track({type:1,doc:d}),g=!0,(l||u)&&(a=!0)),g&&(f?(o=o.add(f),r=y?r.add(c):r.delete(c)):(o=o.delete(c),r=r.delete(c)))}),ao(this.query)||lo(this.query))for(;o.size>this.query.limit;){const c=ao(this.query)?o.last():o.first();o=o.delete(c.key),r=r.delete(c.key),i.track({type:1,doc:c})}return{Ao:o,Po:i,Ln:a,mutatedKeys:r}}vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const r=e.Po.eo();r.sort((u,c)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return f(h)-f(d)}(u.type,c.type)||this.Io(u.doc,c.doc)),this.Vo(i);const o=n?this.So():[],a=this.Eo.size===0&&this.current?1:0,l=a!==this.To;return this.To=a,r.length!==0||l?{snapshot:new Yi(this.query,e.Ao,s,r,e.mutatedKeys,a===0,l,!1),Do:o}:{Do:o}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new Zd,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(n=>this.po=this.po.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.po=this.po.delete(n)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=je(),this.Ao.forEach(i=>{this.Co(i.key)&&(this.Eo=this.Eo.add(i.key))});const n=[];return e.forEach(i=>{this.Eo.has(i)||n.push(new ef(i))}),this.Eo.forEach(i=>{e.has(i)||n.push(new $d(i))}),n}No(e){this.po=e.Gn,this.Eo=je();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return Yi.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class ab{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class lb{constructor(e){this.key=e,this.ko=!1}}class ub{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new Qs(a=>od(a),uo),this.Fo=new Map,this.Mo=new Set,this.Lo=new Nt(ie.comparator),this.Bo=new Map,this.Uo=new kl,this.qo={},this.Ko=new Map,this.jo=Ki.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function cb(t,e){const n=Ib(t);let i,s;const r=n.Oo.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.xo();else{const o=await RE(n.localStore,di(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await hb(n,e,i,a==="current"),n.isPrimaryClient&&Gd(n.remoteStore,o)}return s}async function hb(t,e,n,i){t.Wo=(c,h,d)=>async function(f,m,y,g){let E=m.view.bo(y);E.Ln&&(E=await Hd(f.localStore,m.query,!1).then(({documents:A})=>m.view.bo(A,E)));const S=g&&g.targetChanges.get(m.targetId),T=m.view.applyChanges(E,f.isPrimaryClient,S);return af(f,m.targetId,T.Do),T.snapshot}(t,c,h,d);const s=await Hd(t.localStore,e,!0),r=new ob(e,s.Gn),o=r.bo(s.documents),a=Ws.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline"),l=r.applyChanges(o,t.isPrimaryClient,a);af(t,n,l.Do);const u=new ab(e,n,r);return t.Oo.set(e,u),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),l.snapshot}async function db(t,e){const n=ae(t),i=n.Oo.get(e),s=n.Fo.get(i.targetId);if(s.length>1)return n.Fo.set(i.targetId,s.filter(r=>!uo(r,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Ol(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Wd(n.remoteStore,i.targetId),ql(n,i.targetId)}).catch(Xs)):(ql(n,i.targetId),await Ol(n.localStore,i.targetId,!0))}async function fb(t,e,n){const i=Eb(t);try{const s=await function(r,o){const a=ae(r),l=Jt.now(),u=o.reduce((h,d)=>h.add(d.key),je());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,u).next(d=>{c=d;const f=[];for(const m of o){const y=BI(m,c.get(m.key));y!=null&&f.push(new fi(m.key,y,$h(y.value.mapValue),un.exists(!0)))}return a.In.addMutationBatch(h,l,f,o)})).then(h=>(h.applyToLocalDocumentSet(c),{batchId:h.batchId,changes:c}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.qo[r.currentUser.toKey()];l||(l=new Nt(Ce)),l=l.insert(o,a),r.qo[r.currentUser.toKey()]=l}(i,s.batchId,n),await Js(i,s.changes),await Ao(i.remoteStore)}catch(s){const r=Vl(s,"Failed to persist write");n.reject(r)}}async function tf(t,e){const n=ae(t);try{const i=await SE(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.Bo.get(r);o&&(Ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ko=!0:s.modifiedDocuments.size>0?Ue(o.ko):s.removedDocuments.size>0&&(Ue(o.ko),o.ko=!1))}),await Js(n,i,e)}catch(i){await Xs(i)}}function nf(t,e,n){const i=ae(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Oo.forEach((r,o)=>{const a=o.view.io(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=ae(r);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.io(o)&&(l=!0)}),l&&xl(a)}(i.eventManager,e),s.length&&i.$o.Rr(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function mb(t,e,n){const i=ae(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Bo.get(e),r=s&&s.key;if(r){let o=new Nt(ie.comparator);o=o.insert(r,kt.newNoDocument(r,Ae.min()));const a=je().add(r),l=new _o(Ae.min(),new Map,new At(Ce),o,a);await tf(i,l),i.Lo=i.Lo.remove(r),i.Bo.delete(e),zl(i)}else await Ol(i.localStore,e,!1).then(()=>ql(i,e,n)).catch(Xs)}async function pb(t,e){const n=ae(t),i=e.batch.batchId;try{const s=await AE(n.localStore,e);rf(n,i,null),sf(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Js(n,s)}catch(s){await Xs(s)}}async function gb(t,e,n){const i=ae(t);try{const s=await function(r,o){const a=ae(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.In.lookupMutationBatch(l,o).next(c=>(Ue(c!==null),u=c.keys(),a.In.removeMutationBatch(l,c))).next(()=>a.In.performConsistencyCheck(l)).next(()=>a.Qn.Pn(l,u))})}(i.localStore,e);rf(i,e,n),sf(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Js(i,s)}catch(s){await Xs(s)}}function sf(t,e){(t.Ko.get(e)||[]).forEach(n=>{n.resolve()}),t.Ko.delete(e)}function rf(t,e,n){const i=ae(t);let s=i.qo[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.qo[i.currentUser.toKey()]=s}}function ql(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Fo.get(e))t.Oo.delete(i),n&&t.$o.Go(i,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(i=>{t.Uo.containsKey(i)||of(t,i)})}function of(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);n!==null&&(Wd(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),zl(t))}function af(t,e,n){for(const i of n)i instanceof $d?(t.Uo.addReference(i.key,e),yb(t,i)):i instanceof ef?(Z("SyncEngine","Document no longer in limbo: "+i.key),t.Uo.removeReference(i.key,e),t.Uo.containsKey(i.key)||of(t,i.key)):oe()}function yb(t,e){const n=e.key,i=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(i)||(Z("SyncEngine","New document in limbo: "+n),t.Mo.add(i),zl(t))}function zl(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new ie(Xe.fromString(e)),i=t.jo.next();t.Bo.set(i,new lb(n)),t.Lo=t.Lo.insert(n,i),Gd(t.remoteStore,new pi(di(oo(n.path)),i,2,hl.T))}}async function Js(t,e,n){const i=ae(t),s=[],r=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach((a,l)=>{o.push(i.Wo(l,e,n).then(u=>{if(u){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),s.push(u);const c=Ll.kn(l.targetId,u);r.push(c)}}))}),await Promise.all(o),i.$o.Rr(s),await async function(a,l){const u=ae(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>j.forEach(l,h=>j.forEach(h.Nn,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>j.forEach(h.xn,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Ks(c))throw c;Z("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Un.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);u.Un=u.Un.insert(h,m)}}}(i.localStore,r))}async function _b(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const i=await Vd(n.localStore,e);n.currentUser=e,function(s,r){s.Ko.forEach(o=>{o.forEach(a=>{a.reject(new W(O.CANCELLED,r))})}),s.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Js(n,i.Wn)}}function vb(t,e){const n=ae(t),i=n.Bo.get(e);if(i&&i.ko)return je().add(i.key);{let s=je();const r=n.Fo.get(e);if(!r)return s;for(const o of r){const a=n.Oo.get(o);s=s.unionWith(a.view.Ro)}return s}}function Ib(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mb.bind(null,e),e.$o.Rr=sb.bind(null,e.eventManager),e.$o.Go=rb.bind(null,e.eventManager),e}function Eb(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gb.bind(null,e),e}class bb{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=Eo(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return TE(this.persistence,new EE,e.initialUser,this.N)}Jo(e){return new ME(Nl.Ns,this.N)}Ho(e){return new FE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Tb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>nf(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=_b.bind(null,this.syncEngine),await tb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ib}createDatastore(e){const n=Eo(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new HE(s));var s;return function(r,o,a){return new qE(r,o,a)}(e.credentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>nf(this.syncEngine,a,0),o=jd.bt()?new jd:new UE,new GE(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,l,u){const c=new ub(i,s,r,o,a,l);return u&&(c.Qo=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ae(e);Z("RemoteStore","RemoteStore shutting down."),n.Wr.add(5),await Ys(n),n.zr.shutdown(),n.Hr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n,i){this.credentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=qt.UNAUTHENTICATED,this.clientId=Gh.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async s=>{Z("FirestoreClient","Received user=",s.uid),await this.credentialListener(s),this.user=s})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const i=Vl(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Sb(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Vd(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function wb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Cb(t);Z("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>async function(r,o){const a=ae(r);a.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const l=gi(a);a.Wr.add(3),await Ys(a),l&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await bo(a)}(e.remoteStore,s)),t.onlineComponents=e}async function Cb(t){return t.offlineComponents||(Z("FirestoreClient","Using default OfflineComponentProvider"),await Sb(t,new bb)),t.offlineComponents}async function lf(t){return t.onlineComponents||(Z("FirestoreClient","Using default OnlineComponentProvider"),await wb(t,new Tb)),t.onlineComponents}function Rb(t){return lf(t).then(e=>e.syncEngine)}async function So(t){const e=await lf(t),n=e.eventManager;return n.onListen=cb.bind(null,e.syncEngine),n.onUnlisten=db.bind(null,e.syncEngine),n}function Lb(t,e,n={}){const i=new In;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const u=new Gl({next:h=>{r.enqueueAndForget(()=>Hl(s,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new W(O.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new W(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new jl(oo(o.path),u,{includeMetadataChanges:!0,fo:!0});return Bl(s,c)}(await So(t),t.asyncQueue,e,n,i)),i.promise}function Ob(t,e,n={}){const i=new In;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const u=new Gl({next:h=>{r.enqueueAndForget(()=>Hl(s,c)),h.fromCache&&a.source==="server"?l.reject(new W(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new jl(o,u,{includeMetadataChanges:!0,fo:!0});return Bl(s,c)}(await So(t),t.asyncQueue,e,n,i)),i.promise}class kb{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Zs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function cf(t,e,n){if(!n)throw new W(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Nb(t,e,n,i){if(e===!0&&i===!0)throw new W(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hf(t){if(!ie.isDocumentKey(t))throw new W(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function df(t){if(ie.isDocumentKey(t))throw new W(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wl(t);throw new W(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new W(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Nb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ff({}),this._settingsFrozen=!1,e instanceof Zs?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new W(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zs(i.options.projectId)}(e))}get app(){if(!this._app)throw new W(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ff(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new uI;switch(n.type){case"gapi":const i=n.client;return Ue(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new dI(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new W(O.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=uf.get(e);n&&(Z("ComponentProvider","Removing Datastore"),uf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class Ji{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ji(this.firestore,e,this._query)}}class xn extends Ji{constructor(e,n,i){super(e,n,oo(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new ie(e))}withConverter(e){return new xn(this.firestore,e,this._path)}}function hS(t,e,...n){if(t=et(t),cf("collection","path",e),t instanceof Kl){const i=Xe.fromString(e,...n);return df(i),new xn(t,null,i)}{if(!(t instanceof Vt||t instanceof xn))throw new W(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Xe.fromString(e,...n));return df(i),new xn(t.firestore,null,i)}}function dS(t,e,...n){if(t=et(t),arguments.length===1&&(e=Gh.I()),cf("doc","path",e),t instanceof Kl){const i=Xe.fromString(e,...n);return hf(i),new Vt(t,null,new ie(i))}{if(!(t instanceof Vt||t instanceof xn))throw new W(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Xe.fromString(e,...n));return hf(i),new Vt(t.firestore,t instanceof xn?t.converter:null,new ie(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new qd(this,"async_queue_retry"),this.Rc=()=>{const n=Dl();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ar.tr()};const e=Dl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const n=Dl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const n=new In;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!Ks(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const n=this._c.then(()=>(this.Ec=!0,e().catch(i=>{this.Tc=i,this.Ec=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Vn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ec=!1,i))));return this._c=n,n}enqueueAfterDelay(e,n,i){this.bc(),this.Ac.indexOf(e)>-1&&(n=0);const s=Ul.createAndSchedule(this,e,n,i,r=>this.Vc(r));return this.yc.push(s),s}bc(){this.Tc&&oe()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const n of this.yc)if(n.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.yc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const n=this.yc.indexOf(e);this.yc.splice(n,1)}}function mf(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class jn extends Kl{constructor(e,n){super(e,n),this.type="firestore",this._queue=new Db,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||pf(this),this._firestoreClient.terminate()}}function fS(t=ta()){return gr(t,"firestore").getImmediate()}function $s(t){return t._firestoreClient||pf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function pf(t){var e;const n=t._freezeSettings(),i=function(s,r,o,a){return new kb(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ab(t._credentials,t._queue,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class er{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new zt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zi(Ot.fromBase64String(e))}catch(n){throw new W(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zi(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=/^__.*__$/;class Pb{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new go(e,this.data,n,this.fieldTransforms)}}class gf{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new fi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function yf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class Ql{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.N=i,this.ignoreUndefinedProperties=s,r===void 0&&this.xc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new Ql(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$c({path:i,Fc:!1});return s.Mc(e),s}Lc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$c({path:i,Fc:!1});return s.xc(),s}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return Lo(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(e.length===0)throw this.Uc("Document fields must not be empty");if(yf(this.kc)&&Mb.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class Fb{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=i||Eo(e)}jc(e,n,i,s=!1){return new Ql({kc:e,methodName:n,Kc:i,path:zt.emptyPath(),Fc:!1,qc:s},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Yl(t){const e=t._freezeSettings(),n=Eo(t._databaseId);return new Fb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _f(t,e,n,i,s,r={}){const o=t.jc(r.merge||r.mergeFields?2:0,e,n,s);Zl("Data must be an object, but it was:",o,i);const a=Ef(i,o);let l,u;if(r.merge)l=new Us(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const c=[];for(const h of r.mergeFields){const d=$l(e,h,n);if(!o.contains(d))throw new W(O.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Tf(c,d)||c.push(d)}l=new Us(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Pb(new Zt(a),l,u)}class Co extends wo{_toFieldTransform(e){if(e.kc!==2)throw e.kc===1?e.Uc(`${this._methodName}() can only appear at the top level of your update data`):e.Uc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Co}}class Jl extends wo{_toFieldTransform(e){return new PI(e.path,new qs)}isEqual(e){return e instanceof Jl}}function vf(t,e,n,i){const s=t.jc(1,e,n);Zl("Data must be an object, but it was:",s,i);const r=[],o=Zt.empty();ci(i,(l,u)=>{const c=eu(e,l,n);u=et(u);const h=s.Lc(c);if(u instanceof Co)r.push(c);else{const d=Ro(u,h);d!=null&&(r.push(c),o.set(c,d))}});const a=new Us(r);return new gf(o,a,s.fieldTransforms)}function If(t,e,n,i,s,r){const o=t.jc(1,e,n),a=[$l(e,i,n)],l=[s];if(r.length%2!=0)throw new W(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push($l(e,r[d])),l.push(r[d+1]);const u=[],c=Zt.empty();for(let d=a.length-1;d>=0;--d)if(!Tf(u,a[d])){const f=a[d];let m=l[d];m=et(m);const y=o.Lc(f);if(m instanceof Co)u.push(f);else{const g=Ro(m,y);g!=null&&(u.push(f),c.set(f,g))}}const h=new Us(u);return new gf(c,h,o.fieldTransforms)}function Ro(t,e){if(bf(t=et(t)))return Zl("Unsupported field value:",e,t),Ef(t,e);if(t instanceof wo)return function(n,i){if(!yf(i.kc))throw i.Uc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Uc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.kc!==4)throw e.Uc("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=Ro(o,i.Bc(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=et(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return NI(i.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Jt.fromDate(n);return{timestampValue:Io(i.N,s)}}if(n instanceof Jt){const s=new Jt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Io(i.N,s)}}if(n instanceof Xl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Zi)return{bytesValue:Ld(i.N,n._byteString)};if(n instanceof Vt){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.Uc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Tl(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Uc(`Unsupported field value: ${Wl(n)}`)}(t,e)}function Ef(t,e){const n={};return Kh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ci(t,(i,s)=>{const r=Ro(s,e.Oc(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function bf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Jt||t instanceof Xl||t instanceof Zi||t instanceof Vt||t instanceof wo)}function Zl(t,e,n){if(!bf(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Wl(n);throw i==="an object"?e.Uc(t+" a custom object"):e.Uc(t+" "+i)}}function $l(t,e,n){if((e=et(e))instanceof er)return e._internalPath;if(typeof e=="string")return eu(t,e);throw Lo("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const Ub=new RegExp("[~\\*/\\[\\]]");function eu(t,e,n){if(e.search(Ub)>=0)throw Lo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new er(...e.split("."))._internalPath}catch{throw Lo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lo(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new W(O.INVALID_ARGUMENT,a+t+l)}function Tf(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Vb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Vb extends Af{data(){return super.data()}}function tu(t,e){return typeof e=="string"?eu(t,e):e instanceof er?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sf extends Af{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Oo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(tu("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Oo extends Sf{data(e={}){return super.data(e)}}class wf{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new tr(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Oo(this._firestore,this._userDataWriter,i.key,i,new tr(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>({type:"added",doc:new Oo(i._firestore,i._userDataWriter,o.doc.key,o.doc,new tr(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:r++}))}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Oo(i._firestore,i._userDataWriter,o.doc.key,o.doc,new tr(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:Bb(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Bb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t){if(lo(t)&&t.explicitOrderBy.length===0)throw new W(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hb{}function mS(t,...e){for(const n of e)t=n._apply(t);return t}class xb extends Hb{constructor(e,n){super(),this.Gc=e,this.Jc=n,this.type="orderBy"}_apply(e){const n=function(i,s,r){if(i.startAt!==null)throw new W(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new zi(s,r);return function(a,l){if(sd(a)===null){const u=rd(a);u!==null&&jb(a,u,l.field)}}(i,o),o}(e._query,this.Gc,this.Jc);return new Ji(e.firestore,e.converter,function(i,s){const r=i.explicitOrderBy.concat([s]);return new xs(i.path,i.collectionGroup,r,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function pS(t,e="asc"){const n=e,i=tu("orderBy",t);return new xb(i,n)}function jb(t,e,n){if(!n.isEqual(e))throw new W(O.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{convertValue(e,n="none"){switch(hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw oe()}}convertObject(e,n){const i={};return ci(e.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new Xl(ot(e.latitude),ot(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Qh(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Vs(e));default:return null}}convertTimestamp(e){const n=Bn(e);return new Jt(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Xe.fromString(e);Ue(Fd(i));const s=new Zs(i.get(1),i.get(3)),r=new ie(i.popFirst(5));return s.isEqual(n)||Vn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Yl(e)}set(e,n,i){this._verifyNotCommitted();const s=nu(e,this._firestore),r=Rf(s.converter,n,i),o=_f(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(o.toMutation(s._key,un.none())),this}update(e,n,i,...s){this._verifyNotCommitted();const r=nu(e,this._firestore);let o;return o=typeof(n=et(n))=="string"||n instanceof er?If(this._dataReader,"WriteBatch.update",r._key,n,i,s):vf(this._dataReader,"WriteBatch.update",r._key,n),this._mutations.push(o.toMutation(r._key,un.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=nu(e,this._firestore);return this._mutations=this._mutations.concat(new Id(n._key,un.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new W(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function nu(t,e){if((t=et(t)).firestore!==e)throw new W(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function gS(t){t=sn(t,Vt);const e=sn(t.firestore,jn);return Lb($s(e),t._key).then(n=>Lf(e,t,n))}class iu extends qb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function yS(t){t=sn(t,Ji);const e=sn(t.firestore,jn),n=$s(e),i=new iu(e);return Cf(t._query),Ob(n,t._query).then(s=>new wf(e,i,t,s))}function _S(t,e,n){t=sn(t,Vt);const i=sn(t.firestore,jn),s=Rf(t.converter,e,n);return su(i,[_f(Yl(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,un.none())])}function vS(t,e,n,...i){t=sn(t,Vt);const s=sn(t.firestore,jn),r=Yl(s);let o;return o=typeof(e=et(e))=="string"||e instanceof er?If(r,"updateDoc",t._key,e,n,i):vf(r,"updateDoc",t._key,e),su(s,[o.toMutation(t._key,un.exists(!0))])}function IS(t,...e){var n,i,s;t=et(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||mf(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(mf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,u,c;if(t instanceof Vt)u=sn(t.firestore,jn),c=oo(t._key.path),l={next:h=>{e[o]&&e[o](Lf(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=sn(t,Ji);u=sn(h.firestore,jn),c=h._query;const d=new iu(u);l={next:f=>{e[o]&&e[o](new wf(u,d,h,f))},error:e[o+1],complete:e[o+2]},Cf(t._query)}return function(h,d,f,m){const y=new Gl(m),g=new jl(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>Bl(await So(h),g)),()=>{y.ec(),h.asyncQueue.enqueueAndForget(async()=>Hl(await So(h),g))}}($s(u),c,a,l)}function su(t,e){return function(n,i){const s=new In;return n.asyncQueue.enqueueAndForget(async()=>fb(await Rb(n),i,s)),s.promise}($s(t),e)}function Lf(t,e,n){const i=n.docs.get(e._key),s=new iu(t);return new Sf(t,s,e._key,i,new tr(n.hasPendingWrites,n.fromCache),e.converter)}function ES(){return new Jl("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t){return $s(t=sn(t,jn)),new zb(t,e=>su(t,e))}(function(t,e=!0){(function(n){Bi=n})(Li),Ri(new $n("firestore",(n,{options:i})=>{const s=n.getProvider("app").getImmediate(),r=new jn(s,new cI(n.getProvider("auth-internal")));return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r},"PUBLIC")),an(jh,"3.3.1",t),an(jh,"3.3.1","esm2017")})();function fe(t){return Object.entries(t).filter(([e,n])=>e!==""&&n).map(([e])=>e).join(" ")}function Qe(t,e,n,i={bubbles:!0},s=!1){if(typeof Event!="undefined"&&t){const r=new CustomEvent(e,Object.assign(Object.assign({},i),{detail:n}));if(t==null||t.dispatchEvent(r),s&&e.startsWith("SMUI")){const o=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},i),{detail:n}));t==null||t.dispatchEvent(o),o.defaultPrevented&&r.preventDefault()}return r}}function ko(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let s=0;s<n.length;s++){const r=n[s],o=r.indexOf("$");o!==-1&&e.indexOf(r.substring(0,o+1))!==-1||e.indexOf(r)===-1&&(i[r]=t[r])}return i}const Of=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,Gb=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function Ve(t){let e,n=[];t.$on=(s,r)=>{let o=s,a=()=>{};return e?a=e(o,r):n.push([o,r]),o.match(Of)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',o),(...u)=>{a()}};function i(s){as(t,s)}return s=>{const r=[],o={};e=(a,l)=>{let u=a,c=l,h=!1;const d=u.match(Of),f=u.match(Gb),m=d||f;if(u.match(/^SMUI:\w+:/)){const E=u.split(":");let S="";for(let T=0;T<E.length;T++)S+=T===E.length-1?":"+E[T]:E[T].split("-").map(A=>A.slice(0,1).toUpperCase()+A.slice(1)).join("");console.warn(`The event ${u.split("$")[0]} has been renamed to ${S.split("$")[0]}.`),u=S}if(m){const E=u.split(d?":":"$");u=E[0];const S=Object.fromEntries(E.slice(1).map(T=>[T,!0]));S.passive&&(h=h||{},h.passive=!0),S.nonpassive&&(h=h||{},h.passive=!1),S.capture&&(h=h||{},h.capture=!0),S.once&&(h=h||{},h.once=!0),S.preventDefault&&(c=jp(c)),S.stopPropagation&&(c=qp(c))}const y=Fe(s,u,c,h),g=()=>{y();const E=r.indexOf(g);E>-1&&r.splice(E,1)};return r.push(g),u in o||(o[u]=Fe(s,u,i)),g};for(let a=0;a<n.length;a++)e(n[a][0],n[a][1]);return{destroy:()=>{for(let a=0;a<r.length;a++)r[a]();for(let a of Object.entries(o))a[1]()}}}}function Wt(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let s=0;s<n.length;s++){const r=n[s];r.substring(0,e.length)===e&&(i[r.substring(e.length)]=t[r])}return i}function Ye(t,e){let n=[];if(e)for(let i=0;i<e.length;i++){const s=e[i],r=Array.isArray(s)?s[0]:s;Array.isArray(s)&&s.length>1?n.push(r(t,s[1])):n.push(r(t))}return{update(i){if((i&&i.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(i)for(let s=0;s<i.length;s++){const r=n[s];if(r&&r.update){const o=i[s];Array.isArray(o)&&o.length>1?r.update(o[1]):r.update()}}},destroy(){for(let i=0;i<n.length;i++){const s=n[i];s&&s.destroy&&s.destroy()}}}}var No;function Wb(t,e){e===void 0&&(e=!1);var n=t.CSS,i=No;if(typeof No=="boolean"&&!e)return No;var s=n&&typeof n.supports=="function";if(!s)return!1;var r=n.supports("--css-vars","yes"),o=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=r||o,e||(No=i),i}function Kb(t,e,n){if(!t)return{x:0,y:0};var i=e.x,s=e.y,r=i+n.left,o=s+n.top,a,l;if(t.type==="touchstart"){var u=t;a=u.changedTouches[0].pageX-r,l=u.changedTouches[0].pageY-o}else{var c=t;a=c.pageX-r,l=c.pageY-o}return{x:a,y:l}}/**
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
 */var cn=function(){function t(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();/**
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
 */function Xb(t){return t===void 0&&(t=window),Qb(t)?{passive:!0}:!1}function Qb(t){t===void 0&&(t=window);var e=!1;try{var n={get passive(){return e=!0,!1}},i=function(){};t.document.addEventListener("test",i,n),t.document.removeEventListener("test",i,n)}catch{e=!1}return e}var kf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",applyPassive:Xb});/**
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
 */function Yb(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(Nf(n,e))return n;n=n.parentElement}return null}function Nf(t,e){var n=t.matches||t.webkitMatchesSelector||t.msMatchesSelector;return n.call(t,e)}function Jb(t){var e=t;if(e.offsetParent!==null)return e.scrollWidth;var n=e.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var i=n.scrollWidth;return document.documentElement.removeChild(n),i}var ru=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",closest:Yb,matches:Nf,estimateScrollWidth:Jb});/**
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
 */var Zb={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},$b={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Df={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
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
 */var Mf=["touchstart","pointerdown","mousedown","keydown"],Pf=["touchend","pointerup","mouseup","contextmenu"],Do=[],e0=function(t){rn(e,t);function e(n){var i=t.call(this,Ke(Ke({},e.defaultAdapter),n))||this;return i.activationAnimationHasEnded=!1,i.activationTimer=0,i.fgDeactivationRemovalTimer=0,i.fgScale="0",i.frame={width:0,height:0},i.initialSize=0,i.layoutFrame=0,i.maxRadius=0,i.unboundedCoords={left:0,top:0},i.activationState=i.defaultActivationState(),i.activationTimerCallback=function(){i.activationAnimationHasEnded=!0,i.runDeactivationUXLogicIfReady()},i.activateHandler=function(s){i.activateImpl(s)},i.deactivateHandler=function(){i.deactivateImpl()},i.focusHandler=function(){i.handleFocus()},i.blurHandler=function(){i.handleBlur()},i.resizeHandler=function(){i.layout()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return Zb},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return $b},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Df},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var s=e.cssClasses,r=s.ROOT,o=s.UNBOUNDED;requestAnimationFrame(function(){n.adapter.addClass(r),n.adapter.isUnbounded()&&(n.adapter.addClass(o),n.layoutInternal())})}},e.prototype.destroy=function(){var n=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,s=i.ROOT,r=i.UNBOUNDED;requestAnimationFrame(function(){n.adapter.removeClass(s),n.adapter.removeClass(r),n.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(n){this.activateImpl(n)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var n=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){n.layoutInternal(),n.layoutFrame=0})},e.prototype.setUnbounded=function(n){var i=e.cssClasses.UNBOUNDED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var n=this;requestAnimationFrame(function(){return n.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var n=this;requestAnimationFrame(function(){return n.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(n){var i,s;if(n){try{for(var r=fn(Mf),o=r.next();!o.done;o=r.next()){var a=o.value;this.adapter.registerInteractionHandler(a,this.activateHandler)}}catch(l){i={error:l}}finally{try{o&&!o.done&&(s=r.return)&&s.call(r)}finally{if(i)throw i.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(n){var i,s;if(n.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=fn(Pf),o=r.next();!o.done;o=r.next()){var a=o.value;this.adapter.registerDocumentInteractionHandler(a,this.deactivateHandler)}}catch(l){i={error:l}}finally{try{o&&!o.done&&(s=r.return)&&s.call(r)}finally{if(i)throw i.error}}},e.prototype.deregisterRootHandlers=function(){var n,i;try{for(var s=fn(Mf),r=s.next();!r.done;r=s.next()){var o=r.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(a){n={error:a}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var n,i;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var s=fn(Pf),r=s.next();!r.done;r=s.next()){var o=r.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(a){n={error:a}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},e.prototype.removeCssVars=function(){var n=this,i=e.strings,s=Object.keys(i);s.forEach(function(r){r.indexOf("VAR_")===0&&n.adapter.updateCssVariable(i[r],null)})},e.prototype.activateImpl=function(n){var i=this;if(!this.adapter.isSurfaceDisabled()){var s=this.activationState;if(!s.isActivated){var r=this.previousActivationEvent,o=r&&n!==void 0&&r.type!==n.type;if(!o){s.isActivated=!0,s.isProgrammatic=n===void 0,s.activationEvent=n,s.wasActivatedByPointer=s.isProgrammatic?!1:n!==void 0&&(n.type==="mousedown"||n.type==="touchstart"||n.type==="pointerdown");var a=n!==void 0&&Do.length>0&&Do.some(function(l){return i.adapter.containsEventTarget(l)});if(a){this.resetActivationState();return}n!==void 0&&(Do.push(n.target),this.registerDeactivationHandlers(n)),s.wasElementMadeActive=this.checkElementMadeActive(n),s.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){Do=[],!s.wasElementMadeActive&&n!==void 0&&(n.key===" "||n.keyCode===32)&&(s.wasElementMadeActive=i.checkElementMadeActive(n),s.wasElementMadeActive&&i.animateActivation()),s.wasElementMadeActive||(i.activationState=i.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(n){return n!==void 0&&n.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var n=this,i=e.strings,s=i.VAR_FG_TRANSLATE_START,r=i.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,l=o.FG_ACTIVATION,u=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var c="",h="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),f=d.startPoint,m=d.endPoint;c=f.x+"px, "+f.y+"px",h=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(s,c),this.adapter.updateCssVariable(r,h),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){n.activationTimerCallback()},u)},e.prototype.getFgTranslationCoordinates=function(){var n=this.activationState,i=n.activationEvent,s=n.wasActivatedByPointer,r;s?r=Kb(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):r={x:this.frame.width/2,y:this.frame.height/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady=function(){var n=this,i=e.cssClasses.FG_DEACTIVATION,s=this.activationState,r=s.hasDeactivationUXRun,o=s.isActivated,a=r||!o;a&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout(function(){n.adapter.removeClass(i)},Df.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var n=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(n),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var n=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return n.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var n=this,i=this.activationState;if(!!i.isActivated){var s=Ke({},i);i.isProgrammatic?(requestAnimationFrame(function(){n.animateDeactivation(s)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){n.activationState.hasDeactivationUXRun=!0,n.animateDeactivation(s),n.resetActivationState()}))}},e.prototype.animateDeactivation=function(n){var i=n.wasActivatedByPointer,s=n.wasElementMadeActive;(i||s)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var n=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width),s=function(){var o=Math.sqrt(Math.pow(n.frame.width,2)+Math.pow(n.frame.height,2));return o+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?i:s();var r=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!=0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var n=e.strings,i=n.VAR_FG_SIZE,s=n.VAR_LEFT,r=n.VAR_TOP,o=n.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(s,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},e}(cn);/**
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
 */var ou="mdc-dom-focus-sentinel",t0=function(){function t(e,n){n===void 0&&(n={}),this.root=e,this.options=n,this.elFocusedBeforeTrapFocus=null}return t.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},t.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+ou)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},t.prototype.wrapTabFocus=function(e){var n=this,i=this.createSentinel(),s=this.createSentinel();i.addEventListener("focus",function(){var r=n.getFocusableElements(e);r.length>0&&r[r.length-1].focus()}),s.addEventListener("focus",function(){var r=n.getFocusableElements(e);r.length>0&&r[0].focus()}),e.insertBefore(i,e.children[0]),e.appendChild(s)},t.prototype.focusInitialElement=function(e,n){var i=0;n&&(i=Math.max(e.indexOf(n),0)),e[i].focus()},t.prototype.getFocusableElements=function(e){var n=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return n.filter(function(i){var s=i.getAttribute("aria-disabled")==="true"||i.getAttribute("disabled")!=null||i.getAttribute("hidden")!=null||i.getAttribute("aria-hidden")==="true",r=i.tabIndex>=0&&i.getBoundingClientRect().width>0&&!i.classList.contains(ou)&&!s,o=!1;if(r){var a=getComputedStyle(i);o=a.display==="none"||a.visibility==="hidden"}return r&&!o})},t.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(ou),e},t}(),n0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",FocusTrap:t0});/**
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
 */var pe={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},Bt=new Set;Bt.add(pe.BACKSPACE);Bt.add(pe.ENTER);Bt.add(pe.SPACEBAR);Bt.add(pe.PAGE_UP);Bt.add(pe.PAGE_DOWN);Bt.add(pe.END);Bt.add(pe.HOME);Bt.add(pe.ARROW_LEFT);Bt.add(pe.ARROW_UP);Bt.add(pe.ARROW_RIGHT);Bt.add(pe.ARROW_DOWN);Bt.add(pe.DELETE);Bt.add(pe.ESCAPE);Bt.add(pe.TAB);var Kt={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},Ht=new Map;Ht.set(Kt.BACKSPACE,pe.BACKSPACE);Ht.set(Kt.ENTER,pe.ENTER);Ht.set(Kt.SPACEBAR,pe.SPACEBAR);Ht.set(Kt.PAGE_UP,pe.PAGE_UP);Ht.set(Kt.PAGE_DOWN,pe.PAGE_DOWN);Ht.set(Kt.END,pe.END);Ht.set(Kt.HOME,pe.HOME);Ht.set(Kt.ARROW_LEFT,pe.ARROW_LEFT);Ht.set(Kt.ARROW_UP,pe.ARROW_UP);Ht.set(Kt.ARROW_RIGHT,pe.ARROW_RIGHT);Ht.set(Kt.ARROW_DOWN,pe.ARROW_DOWN);Ht.set(Kt.DELETE,pe.DELETE);Ht.set(Kt.ESCAPE,pe.ESCAPE);Ht.set(Kt.TAB,pe.TAB);var qn=new Set;qn.add(pe.PAGE_UP);qn.add(pe.PAGE_DOWN);qn.add(pe.END);qn.add(pe.HOME);qn.add(pe.ARROW_LEFT);qn.add(pe.ARROW_UP);qn.add(pe.ARROW_RIGHT);qn.add(pe.ARROW_DOWN);function Dt(t){var e=t.key;if(Bt.has(e))return e;var n=Ht.get(t.keyCode);return n||pe.UNKNOWN}const{applyPassive:Mo}=kf,{matches:i0}=ru;function $i(t,{ripple:e=!0,surface:n=!1,unbounded:i=!1,disabled:s=!1,color:r,active:o,rippleElement:a,eventTarget:l,activeTarget:u,addClass:c=m=>t.classList.add(m),removeClass:h=m=>t.classList.remove(m),addStyle:d=(m,y)=>t.style.setProperty(m,y),initPromise:f=Promise.resolve()}={}){let m,y=jt("SMUI:addLayoutListener"),g,E=o,S=l,T=u;function A(){n&&(c("mdc-ripple-surface"),r==="primary"?(c("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")):r==="secondary"?(h("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")):(h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary"))),m&&E!==o&&(E=o,o?m.activate():o===!1&&m.deactivate()),e&&!m?(m=new e0({addClass:c,browserSupportsCssVars:()=>Wb(window),computeBoundingRect:()=>(a||t).getBoundingClientRect(),containsEventTarget:w=>t.contains(w),deregisterDocumentInteractionHandler:(w,p)=>document.documentElement.removeEventListener(w,p,Mo()),deregisterInteractionHandler:(w,p)=>(l||t).removeEventListener(w,p,Mo()),deregisterResizeHandler:w=>window.removeEventListener("resize",w),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>o==null?i0(u||t,":active"):o,isSurfaceDisabled:()=>!!s,isUnbounded:()=>!!i,registerDocumentInteractionHandler:(w,p)=>document.documentElement.addEventListener(w,p,Mo()),registerInteractionHandler:(w,p)=>(l||t).addEventListener(w,p,Mo()),registerResizeHandler:w=>window.addEventListener("resize",w),removeClass:h,updateCssVariable:d}),f.then(()=>{m&&(m.init(),m.setUnbounded(i))})):m&&!e&&f.then(()=>{m&&(m.destroy(),m=void 0)}),m&&(S!==l||T!==u)&&(S=l,T=u,m.destroy(),requestAnimationFrame(()=>{m&&(m.init(),m.setUnbounded(i))})),!e&&i&&c("mdc-ripple-upgraded--unbounded")}A(),y&&(g=y(V));function V(){m&&m.layout()}return{update(w){({ripple:e,surface:n,unbounded:i,disabled:s,color:r,active:o,rippleElement:a,eventTarget:l,activeTarget:u,addClass:c,removeClass:h,addStyle:d,initPromise:f}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:p=>t.classList.add(p),removeClass:p=>t.classList.remove(p),addStyle:(p,b)=>t.style.setProperty(p,b),initPromise:Promise.resolve()},w)),A()},destroy(){m&&(m.destroy(),m=void 0,h("mdc-ripple-surface"),h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")),g&&g()}}}function s0(t){let e,n,i,s,r;const o=t[7].default,a=ue(o,t,t[6],null);let l=[{href:t[1]},t[4]],u={};for(let c=0;c<l.length;c+=1)u=M(u,l[c]);return{c(){e=_e("a"),a&&a.c(),this.h()},l(c){e=Ee(c,"A",{href:!0});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,u)},m(c,h){J(c,e,h),a&&a.m(e,null),t[8](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[3].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&64)&&he(a,o,c,c[6],i?ce(o,c[6],h,null):de(c[6]),null),te(e,u=ge(l,[(!i||h&2)&&{href:c[1]},h&16&&c[4]])),n&&Oe(n.update)&&h&1&&n.update.call(null,c[0])},i(c){i||(N(a,c),i=!0)},o(c){P(a,c),i=!1},d(c){c&&U(e),a&&a.d(c),t[8](null),s=!1,Re(r)}}}function r0(t,e,n){const i=["use","href","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e,{href:l="javascript:void(0);"}=e;const u=Ve(ve());let c;function h(){return c}function d(f){re[f?"unshift":"push"](()=>{c=f,n(2,c)})}return t.$$set=f=>{e=M(M({},e),ke(f)),n(4,s=Y(e,i)),"use"in f&&n(0,a=f.use),"href"in f&&n(1,l=f.href),"$$scope"in f&&n(6,o=f.$$scope)},[a,l,c,u,s,h,o,r,d]}class o0 extends De{constructor(e){super();Ne(this,e,r0,s0,Le,{use:0,href:1,getElement:5})}get getElement(){return this.$$.ctx[5]}}function a0(t){let e,n,i,s,r;const o=t[6].default,a=ue(o,t,t[5],null);let l=[t[3]],u={};for(let c=0;c<l.length;c+=1)u=M(u,l[c]);return{c(){e=_e("button"),a&&a.c(),this.h()},l(c){e=Ee(c,"BUTTON",{});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,u)},m(c,h){J(c,e,h),a&&a.m(e,null),e.autofocus&&e.focus(),t[7](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[2].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&32)&&he(a,o,c,c[5],i?ce(o,c[5],h,null):de(c[5]),null),te(e,u=ge(l,[h&8&&c[3]])),n&&Oe(n.update)&&h&1&&n.update.call(null,c[0])},i(c){i||(N(a,c),i=!0)},o(c){P(a,c),i=!1},d(c){c&&U(e),a&&a.d(c),t[7](null),s=!1,Re(r)}}}function l0(t,e,n){const i=["use","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ve(ve());let u;function c(){return u}function h(d){re[d?"unshift":"push"](()=>{u=d,n(1,u)})}return t.$$set=d=>{e=M(M({},e),ke(d)),n(3,s=Y(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,u,l,s,c,o,r,h]}class u0 extends De{constructor(e){super();Ne(this,e,l0,a0,Le,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function c0(t){let e,n,i,s,r;const o=t[6].default,a=ue(o,t,t[5],null);let l=[t[3]],u={};for(let c=0;c<l.length;c+=1)u=M(u,l[c]);return{c(){e=_e("div"),a&&a.c(),this.h()},l(c){e=Ee(c,"DIV",{});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,u)},m(c,h){J(c,e,h),a&&a.m(e,null),t[7](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[2].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&32)&&he(a,o,c,c[5],i?ce(o,c[5],h,null):de(c[5]),null),te(e,u=ge(l,[h&8&&c[3]])),n&&Oe(n.update)&&h&1&&n.update.call(null,c[0])},i(c){i||(N(a,c),i=!0)},o(c){P(a,c),i=!1},d(c){c&&U(e),a&&a.d(c),t[7](null),s=!1,Re(r)}}}function h0(t,e,n){const i=["use","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ve(ve());let u;function c(){return u}function h(d){re[d?"unshift":"push"](()=>{u=d,n(1,u)})}return t.$$set=d=>{e=M(M({},e),ke(d)),n(3,s=Y(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,u,l,s,c,o,r,h]}class Ff extends De{constructor(e){super();Ne(this,e,h0,c0,Le,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function d0(t){let e,n,i,s,r;const o=t[6].default,a=ue(o,t,t[5],null);let l=[t[3]],u={};for(let c=0;c<l.length;c+=1)u=M(u,l[c]);return{c(){e=_e("h1"),a&&a.c(),this.h()},l(c){e=Ee(c,"H1",{});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,u)},m(c,h){J(c,e,h),a&&a.m(e,null),t[7](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[2].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&32)&&he(a,o,c,c[5],i?ce(o,c[5],h,null):de(c[5]),null),te(e,u=ge(l,[h&8&&c[3]])),n&&Oe(n.update)&&h&1&&n.update.call(null,c[0])},i(c){i||(N(a,c),i=!0)},o(c){P(a,c),i=!1},d(c){c&&U(e),a&&a.d(c),t[7](null),s=!1,Re(r)}}}function f0(t,e,n){const i=["use","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ve(ve());let u;function c(){return u}function h(d){re[d?"unshift":"push"](()=>{u=d,n(1,u)})}return t.$$set=d=>{e=M(M({},e),ke(d)),n(3,s=Y(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,u,l,s,c,o,r,h]}class m0 extends De{constructor(e){super();Ne(this,e,f0,d0,Le,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function p0(t){let e,n,i,s,r;const o=t[6].default,a=ue(o,t,t[5],null);let l=[t[3]],u={};for(let c=0;c<l.length;c+=1)u=M(u,l[c]);return{c(){e=_e("h2"),a&&a.c(),this.h()},l(c){e=Ee(c,"H2",{});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,u)},m(c,h){J(c,e,h),a&&a.m(e,null),t[7](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[2].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&32)&&he(a,o,c,c[5],i?ce(o,c[5],h,null):de(c[5]),null),te(e,u=ge(l,[h&8&&c[3]])),n&&Oe(n.update)&&h&1&&n.update.call(null,c[0])},i(c){i||(N(a,c),i=!0)},o(c){P(a,c),i=!1},d(c){c&&U(e),a&&a.d(c),t[7](null),s=!1,Re(r)}}}function g0(t,e,n){const i=["use","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ve(ve());let u;function c(){return u}function h(d){re[d?"unshift":"push"](()=>{u=d,n(1,u)})}return t.$$set=d=>{e=M(M({},e),ke(d)),n(3,s=Y(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,u,l,s,c,o,r,h]}class y0 extends De{constructor(e){super();Ne(this,e,g0,p0,Le,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function _0(t){let e,n,i,s,r;const o=t[6].default,a=ue(o,t,t[5],null);let l=[t[3]],u={};for(let c=0;c<l.length;c+=1)u=M(u,l[c]);return{c(){e=_e("h3"),a&&a.c(),this.h()},l(c){e=Ee(c,"H3",{});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,u)},m(c,h){J(c,e,h),a&&a.m(e,null),t[7](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[2].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&32)&&he(a,o,c,c[5],i?ce(o,c[5],h,null):de(c[5]),null),te(e,u=ge(l,[h&8&&c[3]])),n&&Oe(n.update)&&h&1&&n.update.call(null,c[0])},i(c){i||(N(a,c),i=!0)},o(c){P(a,c),i=!1},d(c){c&&U(e),a&&a.d(c),t[7](null),s=!1,Re(r)}}}function v0(t,e,n){const i=["use","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ve(ve());let u;function c(){return u}function h(d){re[d?"unshift":"push"](()=>{u=d,n(1,u)})}return t.$$set=d=>{e=M(M({},e),ke(d)),n(3,s=Y(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,u,l,s,c,o,r,h]}class I0 extends De{constructor(e){super();Ne(this,e,v0,_0,Le,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function E0(t){let e,n,i,s,r;const o=t[6].default,a=ue(o,t,t[5],null);let l=[t[3]],u={};for(let c=0;c<l.length;c+=1)u=M(u,l[c]);return{c(){e=_e("li"),a&&a.c(),this.h()},l(c){e=Ee(c,"LI",{});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,u)},m(c,h){J(c,e,h),a&&a.m(e,null),t[7](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[2].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&32)&&he(a,o,c,c[5],i?ce(o,c[5],h,null):de(c[5]),null),te(e,u=ge(l,[h&8&&c[3]])),n&&Oe(n.update)&&h&1&&n.update.call(null,c[0])},i(c){i||(N(a,c),i=!0)},o(c){P(a,c),i=!1},d(c){c&&U(e),a&&a.d(c),t[7](null),s=!1,Re(r)}}}function b0(t,e,n){const i=["use","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ve(ve());let u;function c(){return u}function h(d){re[d?"unshift":"push"](()=>{u=d,n(1,u)})}return t.$$set=d=>{e=M(M({},e),ke(d)),n(3,s=Y(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,u,l,s,c,o,r,h]}class T0 extends De{constructor(e){super();Ne(this,e,b0,E0,Le,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function A0(t){let e,n,i,s,r;const o=t[6].default,a=ue(o,t,t[5],null);let l=[t[3]],u={};for(let c=0;c<l.length;c+=1)u=M(u,l[c]);return{c(){e=_e("nav"),a&&a.c(),this.h()},l(c){e=Ee(c,"NAV",{});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,u)},m(c,h){J(c,e,h),a&&a.m(e,null),t[7](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[2].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&32)&&he(a,o,c,c[5],i?ce(o,c[5],h,null):de(c[5]),null),te(e,u=ge(l,[h&8&&c[3]])),n&&Oe(n.update)&&h&1&&n.update.call(null,c[0])},i(c){i||(N(a,c),i=!0)},o(c){P(a,c),i=!1},d(c){c&&U(e),a&&a.d(c),t[7](null),s=!1,Re(r)}}}function S0(t,e,n){const i=["use","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ve(ve());let u;function c(){return u}function h(d){re[d?"unshift":"push"](()=>{u=d,n(1,u)})}return t.$$set=d=>{e=M(M({},e),ke(d)),n(3,s=Y(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,u,l,s,c,o,r,h]}class w0 extends De{constructor(e){super();Ne(this,e,S0,A0,Le,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function C0(t){let e,n,i,s,r;const o=t[6].default,a=ue(o,t,t[5],null);let l=[t[3]],u={};for(let c=0;c<l.length;c+=1)u=M(u,l[c]);return{c(){e=_e("span"),a&&a.c(),this.h()},l(c){e=Ee(c,"SPAN",{});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,u)},m(c,h){J(c,e,h),a&&a.m(e,null),t[7](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[2].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&32)&&he(a,o,c,c[5],i?ce(o,c[5],h,null):de(c[5]),null),te(e,u=ge(l,[h&8&&c[3]])),n&&Oe(n.update)&&h&1&&n.update.call(null,c[0])},i(c){i||(N(a,c),i=!0)},o(c){P(a,c),i=!1},d(c){c&&U(e),a&&a.d(c),t[7](null),s=!1,Re(r)}}}function R0(t,e,n){const i=["use","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ve(ve());let u;function c(){return u}function h(d){re[d?"unshift":"push"](()=>{u=d,n(1,u)})}return t.$$set=d=>{e=M(M({},e),ke(d)),n(3,s=Y(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,u,l,s,c,o,r,h]}class L0 extends De{constructor(e){super();Ne(this,e,R0,C0,Le,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function O0(t){let e,n,i,s,r;const o=t[6].default,a=ue(o,t,t[5],null);let l=[t[3]],u={};for(let c=0;c<l.length;c+=1)u=M(u,l[c]);return{c(){e=_e("ul"),a&&a.c(),this.h()},l(c){e=Ee(c,"UL",{});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,u)},m(c,h){J(c,e,h),a&&a.m(e,null),t[7](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[2].call(null,e))],s=!0)},p(c,[h]){a&&a.p&&(!i||h&32)&&he(a,o,c,c[5],i?ce(o,c[5],h,null):de(c[5]),null),te(e,u=ge(l,[h&8&&c[3]])),n&&Oe(n.update)&&h&1&&n.update.call(null,c[0])},i(c){i||(N(a,c),i=!0)},o(c){P(a,c),i=!1},d(c){c&&U(e),a&&a.d(c),t[7](null),s=!1,Re(r)}}}function k0(t,e,n){const i=["use","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ve(ve());let u;function c(){return u}function h(d){re[d?"unshift":"push"](()=>{u=d,n(1,u)})}return t.$$set=d=>{e=M(M({},e),ke(d)),n(3,s=Y(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,u,l,s,c,o,r,h]}class N0 extends De{constructor(e){super();Ne(this,e,k0,O0,Le,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}const Uf=o0,D0=u0,bn=Ff,M0=m0,P0=y0,F0=I0,U0=T0,V0=w0,yi=L0,B0=N0;function Vf(t){let e;return{c(){e=_e("div"),this.h()},l(n){e=Ee(n,"DIV",{class:!0}),Ie(e).forEach(U),this.h()},h(){tn(e,"class","mdc-button__touch")},m(n,i){J(n,e,i)},d(n){n&&U(e)}}}function H0(t){let e,n,i,s;const r=t[26].default,o=ue(r,t,t[28],null);let a=t[6]&&Vf();return{c(){e=_e("div"),n=Ze(),o&&o.c(),a&&a.c(),i=st(),this.h()},l(l){e=Ee(l,"DIV",{class:!0}),Ie(e).forEach(U),n=$e(l),o&&o.l(l),a&&a.l(l),i=st(),this.h()},h(){tn(e,"class","mdc-button__ripple")},m(l,u){J(l,e,u),J(l,n,u),o&&o.m(l,u),a&&a.m(l,u),J(l,i,u),s=!0},p(l,u){o&&o.p&&(!s||u&268435456)&&he(o,r,l,l[28],s?ce(r,l[28],u,null):de(l[28]),null),l[6]?a||(a=Vf(),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null)},i(l){s||(N(o,l),s=!0)},o(l){P(o,l),s=!1},d(l){l&&U(e),l&&U(n),o&&o.d(l),a&&a.d(l),l&&U(i)}}}function x0(t){let e,n,i;const s=[{use:[[$i,{ripple:t[3],unbounded:!1,color:t[4],disabled:!!t[22].disabled,addClass:t[18],removeClass:t[19],addStyle:t[20]}],t[16],...t[0]]},{class:fe(xe({[t[1]]:!0,"mdc-button":!0,"mdc-button--raised":t[5]==="raised","mdc-button--unelevated":t[5]==="unelevated","mdc-button--outlined":t[5]==="outlined","smui-button--color-secondary":t[4]==="secondary","mdc-button--touch":t[6],"mdc-card__action":t[17]==="card:action","mdc-card__action--button":t[17]==="card:action","mdc-dialog__button":t[17]==="dialog:action","mdc-top-app-bar__navigation-icon":t[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":t[17]==="top-app-bar:action","mdc-snackbar__action":t[17]==="snackbar:actions","mdc-banner__secondary-action":t[17]==="banner"&&t[8],"mdc-banner__primary-action":t[17]==="banner"&&!t[8],"mdc-tooltip__action":t[17]==="tooltip:rich-actions"},t[11]))},{style:Object.entries(t[12]).map(Bf).concat([t[2]]).join(" ")},t[15],t[14],t[13],{href:t[7]},t[22]];var r=t[9];function o(a){let l={$$slots:{default:[H0]},$$scope:{ctx:a}};for(let u=0;u<s.length;u+=1)l=M(l,s[u]);return{props:l}}return r&&(e=new r(o(t)),t[27](e),e.$on("click",t[21])),{c(){e&&Je(e.$$.fragment),n=st()},l(a){e&&mt(e.$$.fragment,a),n=st()},m(a,l){e&&Ge(e,a,l),J(a,n,l),i=!0},p(a,[l]){const u=l&6289919?ge(s,[l&6094873&&{use:[[$i,{ripple:a[3],unbounded:!1,color:a[4],disabled:!!a[22].disabled,addClass:a[18],removeClass:a[19],addStyle:a[20]}],a[16],...a[0]]},l&133490&&{class:fe(xe({[a[1]]:!0,"mdc-button":!0,"mdc-button--raised":a[5]==="raised","mdc-button--unelevated":a[5]==="unelevated","mdc-button--outlined":a[5]==="outlined","smui-button--color-secondary":a[4]==="secondary","mdc-button--touch":a[6],"mdc-card__action":a[17]==="card:action","mdc-card__action--button":a[17]==="card:action","mdc-dialog__button":a[17]==="dialog:action","mdc-top-app-bar__navigation-icon":a[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":a[17]==="top-app-bar:action","mdc-snackbar__action":a[17]==="snackbar:actions","mdc-banner__secondary-action":a[17]==="banner"&&a[8],"mdc-banner__primary-action":a[17]==="banner"&&!a[8],"mdc-tooltip__action":a[17]==="tooltip:rich-actions"},a[11]))},l&4100&&{style:Object.entries(a[12]).map(Bf).concat([a[2]]).join(" ")},l&32768&&ze(a[15]),l&16384&&ze(a[14]),l&8192&&ze(a[13]),l&128&&{href:a[7]},l&4194304&&ze(a[22])]):{};if(l&268435520&&(u.$$scope={dirty:l,ctx:a}),r!==(r=a[9])){if(e){Ct();const c=e;P(c.$$.fragment,1,0,()=>{We(c,1)}),Rt()}r?(e=new r(o(a)),a[27](e),e.$on("click",a[21]),Je(e.$$.fragment),N(e.$$.fragment,1),Ge(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(a){i||(e&&N(e.$$.fragment,a),i=!0)},o(a){e&&P(e.$$.fragment,a),i=!1},d(a){t[27](null),a&&U(n),e&&We(e,a)}}}const Bf=([t,e])=>`${t}: ${e};`;function j0(t,e,n){let i,s,r;const o=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","getElement"];let a=Y(e,o),{$$slots:l={},$$scope:u}=e;const c=Ve(ve());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{ripple:m=!0}=e,{color:y="primary"}=e,{variant:g="text"}=e,{touch:E=!1}=e,{href:S=void 0}=e,{action:T="close"}=e,{defaultAction:A=!1}=e,{secondary:V=!1}=e,w,p={},b={},F=jt("SMUI:button:context"),{component:I=S==null?D0:Uf}=e;lt("SMUI:label:context","button"),lt("SMUI:icon:context","button");function R(x){p[x]||n(11,p[x]=!0,p)}function X(x){(!(x in p)||p[x])&&n(11,p[x]=!1,p)}function v(x,z){b[x]!=z&&(z===""||z==null?(delete b[x],n(12,b)):n(12,b[x]=z,b))}function k(){F==="banner"&&Qe(C(),V?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function C(){return w.getElement()}function B(x){re[x?"unshift":"push"](()=>{w=x,n(10,w)})}return t.$$set=x=>{n(29,e=M(M({},e),ke(x))),n(22,a=Y(e,o)),"use"in x&&n(0,h=x.use),"class"in x&&n(1,d=x.class),"style"in x&&n(2,f=x.style),"ripple"in x&&n(3,m=x.ripple),"color"in x&&n(4,y=x.color),"variant"in x&&n(5,g=x.variant),"touch"in x&&n(6,E=x.touch),"href"in x&&n(7,S=x.href),"action"in x&&n(23,T=x.action),"defaultAction"in x&&n(24,A=x.defaultAction),"secondary"in x&&n(8,V=x.secondary),"component"in x&&n(9,I=x.component),"$$scope"in x&&n(28,u=x.$$scope)},t.$$.update=()=>{n(15,i=F==="dialog:action"&&T!=null?{"data-mdc-dialog-action":T}:{action:e.action}),n(14,s=F==="dialog:action"&&A?{"data-mdc-dialog-button-default":""}:{default:e.default}),n(13,r=F==="banner"?{}:{secondary:e.secondary})},e=ke(e),[h,d,f,m,y,g,E,S,V,I,w,p,b,r,s,i,c,F,R,X,v,k,a,T,A,C,l,B,u]}class TS extends De{constructor(e){super();Ne(this,e,j0,x0,Le,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:23,defaultAction:24,secondary:8,component:9,getElement:25})}get getElement(){return this.$$.ctx[25]}}function q0(t){let e;const n=t[4].default,i=ue(n,t,t[3],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,[r]){i&&i.p&&(!e||r&8)&&he(i,n,s,s[3],e?ce(n,s[3],r,null):de(s[3]),null)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function z0(t,e,n){let i,{$$slots:s={},$$scope:r}=e,{key:o}=e,{value:a}=e;const l=Yp(a);return Mp(t,l,u=>n(5,i=u)),lt(o,l),Yn(()=>{l.set(void 0)}),t.$$set=u=>{"key"in u&&n(1,o=u.key),"value"in u&&n(2,a=u.value),"$$scope"in u&&n(3,r=u.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&Fp(l,i=a,i)},[l,o,a,r,s]}class Po extends De{constructor(e){super();Ne(this,e,z0,q0,Le,{key:1,value:2})}}/**
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
 */var G0={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
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
 */var W0=function(t){rn(e,t);function e(n){var i=t.call(this,Ke(Ke({},e.defaultAdapter),n))||this;return i.shakeAnimationEndHandler=function(){i.handleShakeAnimationEnd()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return G0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(n){var i=e.cssClasses.LABEL_SHAKE;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.float=function(n){var i=e.cssClasses,s=i.LABEL_FLOAT_ABOVE,r=i.LABEL_SHAKE;n?this.adapter.addClass(s):(this.adapter.removeClass(s),this.adapter.removeClass(r))},e.prototype.setRequired=function(n){var i=e.cssClasses.LABEL_REQUIRED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleShakeAnimationEnd=function(){var n=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(n)},e}(cn);/**
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
 */var _i={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
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
 */var K0=function(t){rn(e,t);function e(n){var i=t.call(this,Ke(Ke({},e.defaultAdapter),n))||this;return i.transitionEndHandler=function(s){i.handleTransitionEnd(s)},i}return Object.defineProperty(e,"cssClasses",{get:function(){return _i},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(_i.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(_i.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(n){this.adapter.setStyle("transform-origin",n+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(_i.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(n){var i=this.adapter.hasClass(_i.LINE_RIPPLE_DEACTIVATING);n.propertyName==="opacity"&&i&&(this.adapter.removeClass(_i.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(_i.LINE_RIPPLE_DEACTIVATING))},e}(cn);/**
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
 */var X0={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Hf={NOTCH_ELEMENT_PADDING:8},Q0={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
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
 */var Y0=function(t){rn(e,t);function e(n){return t.call(this,Ke(Ke({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"strings",{get:function(){return X0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Q0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Hf},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(n){var i=e.cssClasses.OUTLINE_NOTCHED;n>0&&(n+=Hf.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(n),this.adapter.addClass(i)},e.prototype.closeNotch=function(){var n=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(n),this.adapter.removeNotchWidthProperty()},e}(cn);/**
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
 */var au={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},J0={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},xf={LABEL_SCALE:.75},Z0=["pattern","min","max","required","step","minlength","maxlength"],$0=["color","date","datetime-local","month","range","time","week"];/**
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
 */var jf=["mousedown","touchstart"],qf=["click","keydown"],eT=function(t){rn(e,t);function e(n,i){i===void 0&&(i={});var s=t.call(this,Ke(Ke({},e.defaultAdapter),n))||this;return s.isFocused=!1,s.receivedUserInput=!1,s.valid=!0,s.useNativeValidation=!0,s.validateOnValueChange=!0,s.helperText=i.helperText,s.characterCounter=i.characterCounter,s.leadingIcon=i.leadingIcon,s.trailingIcon=i.trailingIcon,s.inputFocusHandler=function(){s.activateFocus()},s.inputBlurHandler=function(){s.deactivateFocus()},s.inputInputHandler=function(){s.handleInput()},s.setPointerXOffset=function(r){s.setTransformOrigin(r)},s.textFieldInteractionHandler=function(){s.handleTextFieldInteraction()},s.validationAttributeChangeHandler=function(r){s.handleValidationAttributeChange(r)},s}return Object.defineProperty(e,"cssClasses",{get:function(){return J0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return au},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return xf},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var n=this.getNativeInput().type;return $0.indexOf(n)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n,i,s,r;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var o=fn(jf),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.registerInputInteractionHandler(l,this.setPointerXOffset)}}catch(h){n={error:h}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}try{for(var u=fn(qf),c=u.next();!c.done;c=u.next()){var l=c.value;this.adapter.registerTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(h){s={error:h}}finally{try{c&&!c.done&&(r=u.return)&&r.call(u)}finally{if(s)throw s.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var n,i,s,r;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var o=fn(jf),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.deregisterInputInteractionHandler(l,this.setPointerXOffset)}}catch(h){n={error:h}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}try{for(var u=fn(qf),c=u.next();!c.done;c=u.next()){var l=c.value;this.adapter.deregisterTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(h){s={error:h}}finally{try{c&&!c.done&&(r=u.return)&&r.call(u)}finally{if(s)throw s.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var n=this.adapter.getNativeInput();n&&n.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(n){var i=this;n.some(function(s){return Z0.indexOf(s)>-1?(i.styleValidity(!0),i.adapter.setLabelRequired(i.getNativeInput().required),!0):!1}),n.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(n){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(n){var i=this.adapter.getLabelWidth()*xf.LABEL_SCALE;this.adapter.notchOutline(i)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(n){if(!(this.isDisabled()||this.adapter.hasOutline())){var i=n.touches,s=i?i[0]:n,r=s.target.getBoundingClientRect(),o=s.clientX-r.left;this.adapter.setLineRippleTransformOrigin(o)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var n=this.isValid();this.styleValidity(n),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(n){if(this.getValue()!==n&&(this.getNativeInput().value=n),this.setcharacterCounter(n.length),this.validateOnValueChange){var i=this.isValid();this.styleValidity(i)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(n){this.valid=n,this.styleValidity(n);var i=!n&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(i)},e.prototype.setValidateOnValueChange=function(n){this.validateOnValueChange=n},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(n){this.useNativeValidation=n},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(n){this.getNativeInput().disabled=n,this.styleDisabled(n)},e.prototype.setHelperTextContent=function(n){this.helperText&&this.helperText.setContent(n)},e.prototype.setLeadingIconAriaLabel=function(n){this.leadingIcon&&this.leadingIcon.setAriaLabel(n)},e.prototype.setLeadingIconContent=function(n){this.leadingIcon&&this.leadingIcon.setContent(n)},e.prototype.setTrailingIconAriaLabel=function(n){this.trailingIcon&&this.trailingIcon.setAriaLabel(n)},e.prototype.setTrailingIconContent=function(n){this.trailingIcon&&this.trailingIcon.setContent(n)},e.prototype.setcharacterCounter=function(n){if(!!this.characterCounter){var i=this.getNativeInput().maxLength;if(i===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(n,i)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(n){var i=e.cssClasses.INVALID;if(n?this.adapter.removeClass(i):this.adapter.addClass(i),this.helperText){this.helperText.setValidity(n);var s=this.helperText.isValidation();if(!s)return;var r=this.helperText.isVisible(),o=this.helperText.getId();r&&o?this.adapter.setInputAttr(au.ARIA_DESCRIBEDBY,o):this.adapter.removeInputAttr(au.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(n){var i=e.cssClasses.FOCUSED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.styleDisabled=function(n){var i=e.cssClasses,s=i.DISABLED,r=i.INVALID;n?(this.adapter.addClass(s),this.adapter.removeClass(r)):this.adapter.removeClass(s),this.leadingIcon&&this.leadingIcon.setDisabled(n),this.trailingIcon&&this.trailingIcon.setDisabled(n)},e.prototype.styleFloating=function(n){var i=e.cssClasses.LABEL_FLOATING;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.getNativeInput=function(){var n=this.adapter?this.adapter.getNativeInput():null;return n||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(cn);/**
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
 */var hn={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},Tn={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+hn.ROOT};/**
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
 */var tT=function(t){rn(e,t);function e(n){return t.call(this,Ke(Ke({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return hn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Tn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(Tn.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(n){this.adapter.setContent(n)},e.prototype.isPersistent=function(){return this.adapter.hasClass(hn.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(n){n?this.adapter.addClass(hn.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(hn.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(hn.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(n){n?this.adapter.addClass(hn.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(hn.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(Tn.ARIA_HIDDEN)},e.prototype.setValidity=function(n){var i=this.adapter.hasClass(hn.HELPER_TEXT_PERSISTENT),s=this.adapter.hasClass(hn.HELPER_TEXT_VALIDATION_MSG),r=s&&!n;r?(this.showToScreenReader(),this.adapter.getAttr(Tn.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(Tn.ROLE,"alert")):this.adapter.removeAttr(Tn.ROLE),!i&&!r&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(Tn.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var n=this;this.adapter.removeAttr(Tn.ROLE),requestAnimationFrame(function(){n.adapter.setAttr(Tn.ROLE,"alert")})},e}(cn);function nT(t){let e,n,i,s,r,o,a,l;const u=t[22].default,c=ue(u,t,t[21],null);let h=[{class:n=fe(xe({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1]},t[8]))},{style:i=Object.entries(t[9]).map(Gf).concat([t[4]]).join(" ")},{for:s=t[5]||(t[11]?t[11].id:void 0)},t[12]],d={};for(let f=0;f<h.length;f+=1)d=M(d,h[f]);return{c(){e=_e("label"),c&&c.c(),this.h()},l(f){e=Ee(f,"LABEL",{class:!0,style:!0,for:!0});var m=Ie(e);c&&c.l(m),m.forEach(U),this.h()},h(){te(e,d)},m(f,m){J(f,e,m),c&&c.m(e,null),t[24](e),o=!0,a||(l=[ee(r=Ye.call(null,e,t[2])),ee(t[10].call(null,e))],a=!0)},p(f,m){c&&c.p&&(!o||m&2097152)&&he(c,u,f,f[21],o?ce(u,f[21],m,null):de(f[21]),null),te(e,d=ge(h,[(!o||m&267&&n!==(n=fe(xe({[f[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":f[0],"mdc-floating-label--required":f[1]},f[8]))))&&{class:n},(!o||m&528&&i!==(i=Object.entries(f[9]).map(Gf).concat([f[4]]).join(" ")))&&{style:i},(!o||m&32&&s!==(s=f[5]||(f[11]?f[11].id:void 0)))&&{for:s},m&4096&&f[12]])),r&&Oe(r.update)&&m&4&&r.update.call(null,f[2])},i(f){o||(N(c,f),o=!0)},o(f){P(c,f),o=!1},d(f){f&&U(e),c&&c.d(f),t[24](null),a=!1,Re(l)}}}function iT(t){let e,n,i,s,r,o,a;const l=t[22].default,u=ue(l,t,t[21],null);let c=[{class:n=fe(xe({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1]},t[8]))},{style:i=Object.entries(t[9]).map(zf).concat([t[4]]).join(" ")},t[12]],h={};for(let d=0;d<c.length;d+=1)h=M(h,c[d]);return{c(){e=_e("span"),u&&u.c(),this.h()},l(d){e=Ee(d,"SPAN",{class:!0,style:!0});var f=Ie(e);u&&u.l(f),f.forEach(U),this.h()},h(){te(e,h)},m(d,f){J(d,e,f),u&&u.m(e,null),t[23](e),r=!0,o||(a=[ee(s=Ye.call(null,e,t[2])),ee(t[10].call(null,e))],o=!0)},p(d,f){u&&u.p&&(!r||f&2097152)&&he(u,l,d,d[21],r?ce(l,d[21],f,null):de(d[21]),null),te(e,h=ge(c,[(!r||f&267&&n!==(n=fe(xe({[d[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":d[0],"mdc-floating-label--required":d[1]},d[8]))))&&{class:n},(!r||f&528&&i!==(i=Object.entries(d[9]).map(zf).concat([d[4]]).join(" ")))&&{style:i},f&4096&&d[12]])),s&&Oe(s.update)&&f&4&&s.update.call(null,d[2])},i(d){r||(N(u,d),r=!0)},o(d){P(u,d),r=!1},d(d){d&&U(e),u&&u.d(d),t[23](null),o=!1,Re(a)}}}function sT(t){let e,n,i,s;const r=[iT,nT],o=[];function a(l,u){return l[6]?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),i=st()},l(l){n.l(l),i=st()},m(l,u){o[e].m(l,u),J(l,i,u),s=!0},p(l,[u]){let c=e;e=a(l),e===c?o[e].p(l,u):(Ct(),P(o[c],1,1,()=>{o[c]=null}),Rt(),n=o[e],n?n.p(l,u):(n=o[e]=r[e](l),n.c()),N(n,1),n.m(i.parentNode,i))},i(l){s||(N(n),s=!0)},o(l){P(n),s=!1},d(l){o[e].d(l),l&&U(i)}}}const zf=([t,e])=>`${t}: ${e};`,Gf=([t,e])=>`${t}: ${e};`;function rT(t,e,n){const i=["use","class","style","for","floatAbove","required","wrapped","shake","float","setRequired","getWidth","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e;var a;const l=Ve(ve());let{use:u=[]}=e,{class:c=""}=e,{style:h=""}=e,{for:d=void 0}=e,{floatAbove:f=!1}=e,{required:m=!1}=e,{wrapped:y=!1}=e,g,E,S={},T={},A=(a=jt("SMUI:generic:input:props"))!==null&&a!==void 0?a:{},V=f,w=m;nn(()=>{n(18,E=new W0({addClass:p,removeClass:b,getWidth:()=>{var Se,$;const Me=C(),Be=Me.cloneNode(!0);(Se=Me.parentNode)===null||Se===void 0||Se.appendChild(Be),Be.classList.add("smui-floating-label--remove-transition"),Be.classList.add("smui-floating-label--force-size"),Be.classList.remove("mdc-floating-label--float-above");const dt=Be.scrollWidth;return($=Me.parentNode)===null||$===void 0||$.removeChild(Be),dt},registerInteractionHandler:(Se,$)=>C().addEventListener(Se,$),deregisterInteractionHandler:(Se,$)=>C().removeEventListener(Se,$)}));const z={get element(){return C()},addStyle:F,removeStyle:I};return Qe(g,"SMUIFloatingLabel:mount",z),E.init(),()=>{Qe(g,"SMUIFloatingLabel:unmount",z),E.destroy()}});function p(z){S[z]||n(8,S[z]=!0,S)}function b(z){(!(z in S)||S[z])&&n(8,S[z]=!1,S)}function F(z,Se){T[z]!=Se&&(Se===""||Se==null?(delete T[z],n(9,T)):n(9,T[z]=Se,T))}function I(z){z in T&&(delete T[z],n(9,T))}function R(z){E.shake(z)}function X(z){n(0,f=z)}function v(z){n(1,m=z)}function k(){return E.getWidth()}function C(){return g}function B(z){re[z?"unshift":"push"](()=>{g=z,n(7,g)})}function x(z){re[z?"unshift":"push"](()=>{g=z,n(7,g)})}return t.$$set=z=>{e=M(M({},e),ke(z)),n(12,s=Y(e,i)),"use"in z&&n(2,u=z.use),"class"in z&&n(3,c=z.class),"style"in z&&n(4,h=z.style),"for"in z&&n(5,d=z.for),"floatAbove"in z&&n(0,f=z.floatAbove),"required"in z&&n(1,m=z.required),"wrapped"in z&&n(6,y=z.wrapped),"$$scope"in z&&n(21,o=z.$$scope)},t.$$.update=()=>{t.$$.dirty&786433&&E&&V!==f&&(n(19,V=f),E.float(f)),t.$$.dirty&1310722&&E&&w!==m&&(n(20,w=m),E.setRequired(m))},[f,m,u,c,h,d,y,g,S,T,l,A,s,R,X,v,k,C,E,V,w,o,r,B,x]}class Wf extends De{constructor(e){super();Ne(this,e,rT,sT,Le,{use:2,class:3,style:4,for:5,floatAbove:0,required:1,wrapped:6,shake:13,float:14,setRequired:15,getWidth:16,getElement:17})}get shake(){return this.$$.ctx[13]}get float(){return this.$$.ctx[14]}get setRequired(){return this.$$.ctx[15]}get getWidth(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}function oT(t){let e,n,i,s,r,o,a=[{class:n=fe(xe({[t[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":t[3]},t[5]))},{style:i=Object.entries(t[6]).map(Kf).concat([t[2]]).join(" ")},t[8]],l={};for(let u=0;u<a.length;u+=1)l=M(l,a[u]);return{c(){e=_e("div"),this.h()},l(u){e=Ee(u,"DIV",{class:!0,style:!0}),Ie(e).forEach(U),this.h()},h(){te(e,l)},m(u,c){J(u,e,c),t[13](e),r||(o=[ee(s=Ye.call(null,e,t[0])),ee(t[7].call(null,e))],r=!0)},p(u,[c]){te(e,l=ge(a,[c&42&&n!==(n=fe(xe({[u[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":u[3]},u[5])))&&{class:n},c&68&&i!==(i=Object.entries(u[6]).map(Kf).concat([u[2]]).join(" "))&&{style:i},c&256&&u[8]])),s&&Oe(s.update)&&c&1&&s.update.call(null,u[0])},i:Mt,o:Mt,d(u){u&&U(e),t[13](null),r=!1,Re(o)}}}const Kf=([t,e])=>`${t}: ${e};`;function aT(t,e,n){const i=["use","class","style","active","activate","deactivate","setRippleCenter","getElement"];let s=Y(e,i);const r=Ve(ve());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{active:u=!1}=e,c,h,d={},f={};nn(()=>(h=new K0({addClass:y,removeClass:g,hasClass:m,setStyle:E,registerEventHandler:(p,b)=>V().addEventListener(p,b),deregisterEventHandler:(p,b)=>V().removeEventListener(p,b)}),h.init(),()=>{h.destroy()}));function m(p){return p in d?d[p]:V().classList.contains(p)}function y(p){d[p]||n(5,d[p]=!0,d)}function g(p){(!(p in d)||d[p])&&n(5,d[p]=!1,d)}function E(p,b){f[p]!=b&&(b===""||b==null?(delete f[p],n(6,f)):n(6,f[p]=b,f))}function S(){h.activate()}function T(){h.deactivate()}function A(p){h.setRippleCenter(p)}function V(){return c}function w(p){re[p?"unshift":"push"](()=>{c=p,n(4,c)})}return t.$$set=p=>{e=M(M({},e),ke(p)),n(8,s=Y(e,i)),"use"in p&&n(0,o=p.use),"class"in p&&n(1,a=p.class),"style"in p&&n(2,l=p.style),"active"in p&&n(3,u=p.active)},[o,a,l,u,c,d,f,r,s,S,T,A,V,w]}class lT extends De{constructor(e){super();Ne(this,e,aT,oT,Le,{use:0,class:1,style:2,active:3,activate:9,deactivate:10,setRippleCenter:11,getElement:12})}get activate(){return this.$$.ctx[9]}get deactivate(){return this.$$.ctx[10]}get setRippleCenter(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function Xf(t){let e,n,i;const s=t[14].default,r=ue(s,t,t[13],null);return{c(){e=_e("div"),r&&r.c(),this.h()},l(o){e=Ee(o,"DIV",{class:!0,style:!0});var a=Ie(e);r&&r.l(a),a.forEach(U),this.h()},h(){tn(e,"class","mdc-notched-outline__notch"),tn(e,"style",n=Object.entries(t[7]).map(Qf).join(" "))},m(o,a){J(o,e,a),r&&r.m(e,null),i=!0},p(o,a){r&&r.p&&(!i||a&8192)&&he(r,s,o,o[13],i?ce(s,o[13],a,null):de(o[13]),null),(!i||a&128&&n!==(n=Object.entries(o[7]).map(Qf).join(" ")))&&tn(e,"style",n)},i(o){i||(N(r,o),i=!0)},o(o){P(r,o),i=!1},d(o){o&&U(e),r&&r.d(o)}}}function uT(t){let e,n,i,s,r,o,a,l,u,c,h=!t[3]&&Xf(t),d=[{class:o=fe(xe({[t[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":t[2],"mdc-notched-outline--no-label":t[3]},t[6]))},t[9]],f={};for(let m=0;m<d.length;m+=1)f=M(f,d[m]);return{c(){e=_e("div"),n=_e("div"),i=Ze(),h&&h.c(),s=Ze(),r=_e("div"),this.h()},l(m){e=Ee(m,"DIV",{class:!0});var y=Ie(e);n=Ee(y,"DIV",{class:!0}),Ie(n).forEach(U),i=$e(y),h&&h.l(y),s=$e(y),r=Ee(y,"DIV",{class:!0}),Ie(r).forEach(U),y.forEach(U),this.h()},h(){tn(n,"class","mdc-notched-outline__leading"),tn(r,"class","mdc-notched-outline__trailing"),te(e,f)},m(m,y){J(m,e,y),wt(e,n),wt(e,i),h&&h.m(e,null),wt(e,s),wt(e,r),t[15](e),l=!0,u||(c=[ee(a=Ye.call(null,e,t[0])),ee(t[8].call(null,e)),Fe(e,"SMUIFloatingLabel:mount",t[16]),Fe(e,"SMUIFloatingLabel:unmount",t[17])],u=!0)},p(m,[y]){m[3]?h&&(Ct(),P(h,1,1,()=>{h=null}),Rt()):h?(h.p(m,y),y&8&&N(h,1)):(h=Xf(m),h.c(),N(h,1),h.m(e,s)),te(e,f=ge(d,[(!l||y&78&&o!==(o=fe(xe({[m[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":m[2],"mdc-notched-outline--no-label":m[3]},m[6]))))&&{class:o},y&512&&m[9]])),a&&Oe(a.update)&&y&1&&a.update.call(null,m[0])},i(m){l||(N(h),l=!0)},o(m){P(h),l=!1},d(m){m&&U(e),h&&h.d(),t[15](null),u=!1,Re(c)}}}const Qf=([t,e])=>`${t}: ${e};`;function cT(t,e,n){const i=["use","class","notched","noLabel","notch","closeNotch","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e;const a=Ve(ve());let{use:l=[]}=e,{class:u=""}=e,{notched:c=!1}=e,{noLabel:h=!1}=e,d,f,m,y={},g={};nn(()=>(f=new Y0({addClass:E,removeClass:S,setNotchWidthProperty:R=>T("width",R+"px"),removeNotchWidthProperty:()=>A("width")}),f.init(),()=>{f.destroy()}));function E(R){y[R]||n(6,y[R]=!0,y)}function S(R){(!(R in y)||y[R])&&n(6,y[R]=!1,y)}function T(R,X){g[R]!=X&&(X===""||X==null?(delete g[R],n(7,g)):n(7,g[R]=X,g))}function A(R){R in g&&(delete g[R],n(7,g))}function V(R){f.notch(R)}function w(){f.closeNotch()}function p(){return d}function b(R){re[R?"unshift":"push"](()=>{d=R,n(5,d)})}const F=R=>n(4,m=R.detail),I=()=>n(4,m=void 0);return t.$$set=R=>{e=M(M({},e),ke(R)),n(9,s=Y(e,i)),"use"in R&&n(0,l=R.use),"class"in R&&n(1,u=R.class),"notched"in R&&n(2,c=R.notched),"noLabel"in R&&n(3,h=R.noLabel),"$$scope"in R&&n(13,o=R.$$scope)},t.$$.update=()=>{t.$$.dirty&16&&(m?(m.addStyle("transition-duration","0s"),E("mdc-notched-outline--upgraded"),requestAnimationFrame(()=>{m&&m.removeStyle("transition-duration")})):S("mdc-notched-outline--upgraded"))},[l,u,c,h,m,d,y,g,a,s,V,w,p,o,r,b,F,I]}class hT extends De{constructor(e){super();Ne(this,e,cT,uT,Le,{use:0,class:1,notched:2,noLabel:3,notch:10,closeNotch:11,getElement:12})}get notch(){return this.$$.ctx[10]}get closeNotch(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function dT(t){let e;const n=t[10].default,i=ue(n,t,t[12],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&4096)&&he(i,n,s,s[12],e?ce(n,s[12],r,null):de(s[12]),null)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function fT(t){let e,n,i;const s=[{use:[t[7],...t[0]]},{class:fe(xe({[t[1]]:!0,[t[5]]:!0},t[4]))},t[6],t[8]];var r=t[2];function o(a){let l={$$slots:{default:[dT]},$$scope:{ctx:a}};for(let u=0;u<s.length;u+=1)l=M(l,s[u]);return{props:l}}return r&&(e=new r(o(t)),t[11](e)),{c(){e&&Je(e.$$.fragment),n=st()},l(a){e&&mt(e.$$.fragment,a),n=st()},m(a,l){e&&Ge(e,a,l),J(a,n,l),i=!0},p(a,[l]){const u=l&499?ge(s,[l&129&&{use:[a[7],...a[0]]},l&50&&{class:fe(xe({[a[1]]:!0,[a[5]]:!0},a[4]))},l&64&&ze(a[6]),l&256&&ze(a[8])]):{};if(l&4096&&(u.$$scope={dirty:l,ctx:a}),r!==(r=a[2])){if(e){Ct();const c=e;P(c.$$.fragment,1,0,()=>{We(c,1)}),Rt()}r?(e=new r(o(a)),a[11](e),Je(e.$$.fragment),N(e.$$.fragment,1),Ge(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(a){i||(e&&N(e.$$.fragment,a),i=!0)},o(a){e&&P(e.$$.fragment,a),i=!1},d(a){t[11](null),a&&U(n),e&&We(e,a)}}}const zn={component:Ff,class:"",classMap:{},contexts:{},props:{}};function mT(t,e,n){const i=["use","class","component","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e,{class:l=""}=e,u;const c=zn.class,h={},d=[],f=zn.contexts,m=zn.props;let{component:y=zn.component}=e;Object.entries(zn.classMap).forEach(([T,A])=>{const V=jt(A);V&&"subscribe"in V&&d.push(V.subscribe(w=>{n(4,h[T]=w,h)}))});const g=Ve(ve());for(let T in f)f.hasOwnProperty(T)&&lt(T,f[T]);Yn(()=>{for(const T of d)T()});function E(){return u.getElement()}function S(T){re[T?"unshift":"push"](()=>{u=T,n(3,u)})}return t.$$set=T=>{e=M(M({},e),ke(T)),n(8,s=Y(e,i)),"use"in T&&n(0,a=T.use),"class"in T&&n(1,l=T.class),"component"in T&&n(2,y=T.component),"$$scope"in T&&n(12,o=T.$$scope)},[a,l,y,u,h,c,m,g,s,E,r,S,o]}class pT extends De{constructor(e){super();Ne(this,e,mT,fT,Le,{use:0,class:1,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const Yf=Object.assign({},zn);function ct(t){return new Proxy(pT,{construct:function(e,n){return Object.assign(zn,Yf,t),new e(...n)},get:function(e,n){return Object.assign(zn,Yf,t),e[n]}})}var gT=ct({class:"mdc-text-field-helper-line",component:bn}),yT=ct({class:"mdc-text-field__affix mdc-text-field__affix--prefix",component:yi}),_T=ct({class:"mdc-text-field__affix mdc-text-field__affix--suffix",component:yi});function vT(t){let e,n,i,s,r,o=[{class:n=fe({[t[1]]:!0,"mdc-text-field__input":!0})},{type:t[2]},{placeholder:t[3]},t[4],t[6],t[10]],a={};for(let l=0;l<o.length;l+=1)a=M(a,o[l]);return{c(){e=_e("input"),this.h()},l(l){e=Ee(l,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){te(e,a)},m(l,u){J(l,e,u),e.autofocus&&e.focus(),t[25](e),s||(r=[ee(i=Ye.call(null,e,t[0])),ee(t[7].call(null,e)),Fe(e,"input",t[26]),Fe(e,"change",t[9]),Fe(e,"blur",t[23]),Fe(e,"focus",t[24])],s=!0)},p(l,[u]){te(e,a=ge(o,[u&2&&n!==(n=fe({[l[1]]:!0,"mdc-text-field__input":!0}))&&{class:n},u&4&&{type:l[2]},u&8&&{placeholder:l[3]},u&16&&l[4],u&64&&l[6],u&1024&&l[10]])),i&&Oe(i.update)&&u&1&&i.update.call(null,l[0])},i:Mt,o:Mt,d(l){l&&U(e),t[25](null),s=!1,Re(r)}}}function IT(t){if(t===""){const e=new Number(Number.NaN);return e.length=0,e}return+t}function ET(t,e,n){const i=["use","class","type","placeholder","value","files","dirty","invalid","updateInvalid","emptyValueNull","emptyValueUndefined","getAttr","addAttr","removeAttr","focus","getElement"];let s=Y(e,i);const r=Ve(ve());let{use:o=[]}=e,{class:a=""}=e,{type:l="text"}=e,{placeholder:u=" "}=e,{value:c=""}=e,{files:h=null}=e,{dirty:d=!1}=e,{invalid:f=!1}=e,{updateInvalid:m=!0}=e,{emptyValueNull:y=c===null}=e,{emptyValueUndefined:g=c===void 0}=e,E,S={},T={};nn(()=>{m&&n(14,f=E.matches(":invalid"))});function A(C){if(l==="file"){n(12,h=C.currentTarget.files);return}if(C.currentTarget.value===""&&y){n(11,c=null);return}if(C.currentTarget.value===""&&g){n(11,c=void 0);return}switch(l){case"number":case"range":n(11,c=IT(C.currentTarget.value));break;default:n(11,c=C.currentTarget.value);break}}function V(C){(l==="file"||l==="range")&&A(C),n(13,d=!0),m&&n(14,f=E.matches(":invalid"))}function w(C){var B;return C in S?(B=S[C])!==null&&B!==void 0?B:null:I().getAttribute(C)}function p(C,B){S[C]!==B&&n(6,S[C]=B,S)}function b(C){(!(C in S)||S[C]!=null)&&n(6,S[C]=void 0,S)}function F(){I().focus()}function I(){return E}function R(C){as.call(this,t,C)}function X(C){as.call(this,t,C)}function v(C){re[C?"unshift":"push"](()=>{E=C,n(5,E)})}const k=C=>l!=="file"&&A(C);return t.$$set=C=>{e=M(M({},e),ke(C)),n(10,s=Y(e,i)),"use"in C&&n(0,o=C.use),"class"in C&&n(1,a=C.class),"type"in C&&n(2,l=C.type),"placeholder"in C&&n(3,u=C.placeholder),"value"in C&&n(11,c=C.value),"files"in C&&n(12,h=C.files),"dirty"in C&&n(13,d=C.dirty),"invalid"in C&&n(14,f=C.invalid),"updateInvalid"in C&&n(15,m=C.updateInvalid),"emptyValueNull"in C&&n(16,y=C.emptyValueNull),"emptyValueUndefined"in C&&n(17,g=C.emptyValueUndefined)},t.$$.update=()=>{t.$$.dirty&2068&&(l==="file"?(delete T.value,n(4,T),n(2,l),n(11,c)):n(4,T.value=c==null?"":c,T))},[o,a,l,u,T,E,S,r,A,V,s,c,h,d,f,m,y,g,w,p,b,F,I,R,X,v,k]}class bT extends De{constructor(e){super();Ne(this,e,ET,vT,Le,{use:0,class:1,type:2,placeholder:3,value:11,files:12,dirty:13,invalid:14,updateInvalid:15,emptyValueNull:16,emptyValueUndefined:17,getAttr:18,addAttr:19,removeAttr:20,focus:21,getElement:22})}get getAttr(){return this.$$.ctx[18]}get addAttr(){return this.$$.ctx[19]}get removeAttr(){return this.$$.ctx[20]}get focus(){return this.$$.ctx[21]}get getElement(){return this.$$.ctx[22]}}function TT(t){let e,n,i,s,r,o,a=[{class:n=fe({[t[2]]:!0,"mdc-text-field__input":!0})},{style:i=`${t[4]?"":"resize: none; "}${t[3]}`},t[6],t[9]],l={};for(let u=0;u<a.length;u+=1)l=M(l,a[u]);return{c(){e=_e("textarea"),this.h()},l(u){e=Ee(u,"TEXTAREA",{class:!0,style:!0}),Ie(e).forEach(U),this.h()},h(){te(e,l)},m(u,c){J(u,e,c),e.autofocus&&e.focus(),t[20](e),Su(e,t[0]),r||(o=[ee(s=Ye.call(null,e,t[1])),ee(t[7].call(null,e)),Fe(e,"change",t[8]),Fe(e,"blur",t[18]),Fe(e,"focus",t[19]),Fe(e,"input",t[21])],r=!0)},p(u,[c]){te(e,l=ge(a,[c&4&&n!==(n=fe({[u[2]]:!0,"mdc-text-field__input":!0}))&&{class:n},c&24&&i!==(i=`${u[4]?"":"resize: none; "}${u[3]}`)&&{style:i},c&64&&u[6],c&512&&u[9]])),s&&Oe(s.update)&&c&2&&s.update.call(null,u[1]),c&1&&Su(e,u[0])},i:Mt,o:Mt,d(u){u&&U(e),t[20](null),r=!1,Re(o)}}}function AT(t,e,n){const i=["use","class","style","value","dirty","invalid","updateInvalid","resizable","getAttr","addAttr","removeAttr","focus","getElement"];let s=Y(e,i);const r=Ve(ve());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{value:u=""}=e,{dirty:c=!1}=e,{invalid:h=!1}=e,{updateInvalid:d=!0}=e,{resizable:f=!0}=e,m,y={};nn(()=>{d&&n(11,h=m.matches(":invalid"))});function g(){n(10,c=!0),d&&n(11,h=m.matches(":invalid"))}function E(I){var R;return I in y?(R=y[I])!==null&&R!==void 0?R:null:V().getAttribute(I)}function S(I,R){y[I]!==R&&n(6,y[I]=R,y)}function T(I){(!(I in y)||y[I]!=null)&&n(6,y[I]=void 0,y)}function A(){V().focus()}function V(){return m}function w(I){as.call(this,t,I)}function p(I){as.call(this,t,I)}function b(I){re[I?"unshift":"push"](()=>{m=I,n(5,m)})}function F(){u=this.value,n(0,u)}return t.$$set=I=>{e=M(M({},e),ke(I)),n(9,s=Y(e,i)),"use"in I&&n(1,o=I.use),"class"in I&&n(2,a=I.class),"style"in I&&n(3,l=I.style),"value"in I&&n(0,u=I.value),"dirty"in I&&n(10,c=I.dirty),"invalid"in I&&n(11,h=I.invalid),"updateInvalid"in I&&n(12,d=I.updateInvalid),"resizable"in I&&n(4,f=I.resizable)},[u,o,a,l,f,m,y,r,g,s,c,h,d,E,S,T,A,V,w,p,b,F]}class ST extends De{constructor(e){super();Ne(this,e,AT,TT,Le,{use:1,class:2,style:3,value:0,dirty:10,invalid:11,updateInvalid:12,resizable:4,getAttr:13,addAttr:14,removeAttr:15,focus:16,getElement:17})}get getAttr(){return this.$$.ctx[13]}get addAttr(){return this.$$.ctx[14]}get removeAttr(){return this.$$.ctx[15]}get focus(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}const wT=t=>({}),Jf=t=>({}),CT=t=>({}),Zf=t=>({}),RT=t=>({}),$f=t=>({}),LT=t=>({}),em=t=>({}),OT=t=>({}),tm=t=>({}),kT=t=>({}),nm=t=>({}),NT=t=>({}),im=t=>({}),DT=t=>({}),sm=t=>({}),MT=t=>({}),rm=t=>({}),PT=t=>({}),om=t=>({}),FT=t=>({}),am=t=>({}),UT=t=>({}),lm=t=>({});function VT(t){let e,n,i,s,r,o,a,l,u,c,h,d,f,m;const y=t[50].label,g=ue(y,t,t[89],tm);i=new Po({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[HT]},$$scope:{ctx:t}}});const E=t[50].default,S=ue(E,t,t[89],null);o=new Po({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[xT]},$$scope:{ctx:t}}});const T=t[50].ripple,A=ue(T,t,t[89],Zf);let V=[{class:l=fe(xe({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||!t[41].label,"mdc-text-field--with-leading-icon":t[41].leadingIcon,"mdc-text-field--with-trailing-icon":t[41].trailingIcon,"mdc-text-field--invalid":t[1]},t[25]))},{style:u=Object.entries(t[26]).map(vm).concat([t[10]]).join(" ")},ko(t[42],["input$","label$","ripple$","outline$","helperLine$"])],w={};for(let p=0;p<V.length;p+=1)w=M(w,V[p]);return{c(){e=_e("div"),g&&g.c(),n=Ze(),Je(i.$$.fragment),s=Ze(),S&&S.c(),r=Ze(),Je(o.$$.fragment),a=Ze(),A&&A.c(),this.h()},l(p){e=Ee(p,"DIV",{class:!0,style:!0});var b=Ie(e);g&&g.l(b),n=$e(b),mt(i.$$.fragment,b),s=$e(b),S&&S.l(b),r=$e(b),mt(o.$$.fragment,b),a=$e(b),A&&A.l(b),b.forEach(U),this.h()},h(){te(e,w)},m(p,b){J(p,e,b),g&&g.m(e,null),wt(e,n),Ge(i,e,null),wt(e,s),S&&S.m(e,null),wt(e,r),Ge(o,e,null),wt(e,a),A&&A.m(e,null),t[79](e),d=!0,f||(m=[ee(c=$i.call(null,e,{ripple:t[11],unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40]})),ee(h=Ye.call(null,e,t[8])),ee(t[34].call(null,e)),Fe(e,"SMUITextfieldLeadingIcon:mount",t[80]),Fe(e,"SMUITextfieldLeadingIcon:unmount",t[81]),Fe(e,"SMUITextfieldTrailingIcon:mount",t[82]),Fe(e,"SMUITextfieldTrailingIcon:unmount",t[83])],f=!0)},p(p,b){g&&g.p&&(!d||b[2]&134217728)&&he(g,y,p,p[89],d?ce(y,p[89],b,OT):de(p[89]),tm);const F={};b[2]&134217728&&(F.$$scope={dirty:b,ctx:p}),i.$set(F),S&&S.p&&(!d||b[2]&134217728)&&he(S,E,p,p[89],d?ce(E,p[89],b,null):de(p[89]),null);const I={};b[2]&134217728&&(I.$$scope={dirty:b,ctx:p}),o.$set(I),A&&A.p&&(!d||b[2]&134217728)&&he(A,T,p,p[89],d?ce(T,p[89],b,CT):de(p[89]),Zf),te(e,w=ge(V,[(!d||b[0]&33673730|b[1]&1024&&l!==(l=fe(xe({[p[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":p[12],"mdc-text-field--textarea":p[14],"mdc-text-field--filled":p[15]==="filled","mdc-text-field--outlined":p[15]==="outlined","smui-text-field--standard":p[15]==="standard"&&!p[14],"mdc-text-field--no-label":p[16]||!p[41].label,"mdc-text-field--with-leading-icon":p[41].leadingIcon,"mdc-text-field--with-trailing-icon":p[41].trailingIcon,"mdc-text-field--invalid":p[1]},p[25]))))&&{class:l},(!d||b[0]&67109888&&u!==(u=Object.entries(p[26]).map(vm).concat([p[10]]).join(" ")))&&{style:u},b[1]&2048&&ko(p[42],["input$","label$","ripple$","outline$","helperLine$"])])),c&&Oe(c.update)&&b[0]&2048&&c.update.call(null,{ripple:p[11],unbounded:!1,addClass:p[38],removeClass:p[39],addStyle:p[40]}),h&&Oe(h.update)&&b[0]&256&&h.update.call(null,p[8])},i(p){d||(N(g,p),N(i.$$.fragment,p),N(S,p),N(o.$$.fragment,p),N(A,p),d=!0)},o(p){P(g,p),P(i.$$.fragment,p),P(S,p),P(o.$$.fragment,p),P(A,p),d=!1},d(p){p&&U(e),g&&g.d(p),We(i),S&&S.d(p),We(o),A&&A.d(p),t[79](null),f=!1,Re(m)}}}function BT(t){let e,n,i,s,r,o,a,l,u,c,h,d,f,m,y,g,E,S,T=!t[14]&&t[15]!=="outlined"&&um(t),A=(t[14]||t[15]==="outlined")&&dm(t);s=new Po({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[GT]},$$scope:{ctx:t}}});const V=t[50].default,w=ue(V,t,t[89],null),p=[KT,WT],b=[];function F(v,k){return v[14]&&typeof v[0]=="string"?0:1}a=F(t),l=b[a]=p[a](t),c=new Po({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[YT]},$$scope:{ctx:t}}});let I=!t[14]&&t[15]!=="outlined"&&t[11]&&gm(t),R=[{class:d=fe(xe({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||t[17]==null&&!t[41].label,"mdc-text-field--label-floating":t[28]||t[0]!=null&&t[0]!=="","mdc-text-field--with-leading-icon":t[35](t[22])?t[41].leadingIcon:t[22],"mdc-text-field--with-trailing-icon":t[35](t[23])?t[41].trailingIcon:t[23],"mdc-text-field--with-internal-counter":t[14]&&t[41].internalCounter,"mdc-text-field--invalid":t[1]},t[25]))},{style:f=Object.entries(t[26]).map(_m).concat([t[10]]).join(" ")},{for:void 0},ko(t[42],["input$","label$","ripple$","outline$","helperLine$"])],X={};for(let v=0;v<R.length;v+=1)X=M(X,R[v]);return{c(){e=_e("label"),T&&T.c(),n=Ze(),A&&A.c(),i=Ze(),Je(s.$$.fragment),r=Ze(),w&&w.c(),o=Ze(),l.c(),u=Ze(),Je(c.$$.fragment),h=Ze(),I&&I.c(),this.h()},l(v){e=Ee(v,"LABEL",{class:!0,style:!0,for:!0});var k=Ie(e);T&&T.l(k),n=$e(k),A&&A.l(k),i=$e(k),mt(s.$$.fragment,k),r=$e(k),w&&w.l(k),o=$e(k),l.l(k),u=$e(k),mt(c.$$.fragment,k),h=$e(k),I&&I.l(k),k.forEach(U),this.h()},h(){te(e,X)},m(v,k){J(v,e,k),T&&T.m(e,null),wt(e,n),A&&A.m(e,null),wt(e,i),Ge(s,e,null),wt(e,r),w&&w.m(e,null),wt(e,o),b[a].m(e,null),wt(e,u),Ge(c,e,null),wt(e,h),I&&I.m(e,null),t[72](e),g=!0,E||(S=[ee(m=$i.call(null,e,{ripple:!t[14]&&t[15]==="filled",unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40],eventTarget:t[33],activeTarget:t[33],initPromise:t[37]})),ee(y=Ye.call(null,e,t[8])),ee(t[34].call(null,e)),Fe(e,"SMUITextfieldLeadingIcon:mount",t[73]),Fe(e,"SMUITextfieldLeadingIcon:unmount",t[74]),Fe(e,"SMUITextfieldTrailingIcon:mount",t[75]),Fe(e,"SMUITextfieldTrailingIcon:unmount",t[76]),Fe(e,"SMUITextfieldCharacterCounter:mount",t[77]),Fe(e,"SMUITextfieldCharacterCounter:unmount",t[78])],E=!0)},p(v,k){!v[14]&&v[15]!=="outlined"?T?(T.p(v,k),k[0]&49152&&N(T,1)):(T=um(v),T.c(),N(T,1),T.m(e,n)):T&&(Ct(),P(T,1,1,()=>{T=null}),Rt()),v[14]||v[15]==="outlined"?A?(A.p(v,k),k[0]&49152&&N(A,1)):(A=dm(v),A.c(),N(A,1),A.m(e,i)):A&&(Ct(),P(A,1,1,()=>{A=null}),Rt());const C={};k[2]&134217728&&(C.$$scope={dirty:k,ctx:v}),s.$set(C),w&&w.p&&(!g||k[2]&134217728)&&he(w,V,v,v[89],g?ce(V,v[89],k,null):de(v[89]),null);let B=a;a=F(v),a===B?b[a].p(v,k):(Ct(),P(b[B],1,1,()=>{b[B]=null}),Rt(),l=b[a],l?l.p(v,k):(l=b[a]=p[a](v),l.c()),N(l,1),l.m(e,u));const x={};k[2]&134217728&&(x.$$scope={dirty:k,ctx:v}),c.$set(x),!v[14]&&v[15]!=="outlined"&&v[11]?I?(I.p(v,k),k[0]&51200&&N(I,1)):(I=gm(v),I.c(),N(I,1),I.m(e,null)):I&&(Ct(),P(I,1,1,()=>{I=null}),Rt()),te(e,X=ge(R,[(!g||k[0]&314823171|k[1]&1024&&d!==(d=fe(xe({[v[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":v[12],"mdc-text-field--textarea":v[14],"mdc-text-field--filled":v[15]==="filled","mdc-text-field--outlined":v[15]==="outlined","smui-text-field--standard":v[15]==="standard"&&!v[14],"mdc-text-field--no-label":v[16]||v[17]==null&&!v[41].label,"mdc-text-field--label-floating":v[28]||v[0]!=null&&v[0]!=="","mdc-text-field--with-leading-icon":v[35](v[22])?v[41].leadingIcon:v[22],"mdc-text-field--with-trailing-icon":v[35](v[23])?v[41].trailingIcon:v[23],"mdc-text-field--with-internal-counter":v[14]&&v[41].internalCounter,"mdc-text-field--invalid":v[1]},v[25]))))&&{class:d},(!g||k[0]&67109888&&f!==(f=Object.entries(v[26]).map(_m).concat([v[10]]).join(" ")))&&{style:f},{for:void 0},k[1]&2048&&ko(v[42],["input$","label$","ripple$","outline$","helperLine$"])])),m&&Oe(m.update)&&k[0]&49152|k[1]&4&&m.update.call(null,{ripple:!v[14]&&v[15]==="filled",unbounded:!1,addClass:v[38],removeClass:v[39],addStyle:v[40],eventTarget:v[33],activeTarget:v[33],initPromise:v[37]}),y&&Oe(y.update)&&k[0]&256&&y.update.call(null,v[8])},i(v){g||(N(T),N(A),N(s.$$.fragment,v),N(w,v),N(l),N(c.$$.fragment,v),N(I),g=!0)},o(v){P(T),P(A),P(s.$$.fragment,v),P(w,v),P(l),P(c.$$.fragment,v),P(I),g=!1},d(v){v&&U(e),T&&T.d(),A&&A.d(),We(s),w&&w.d(v),b[a].d(),We(c),I&&I.d(),t[72](null),E=!1,Re(S)}}}function HT(t){let e;const n=t[50].leadingIcon,i=ue(n,t,t[89],em);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?ce(n,s[89],r,LT):de(s[89]),em)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function xT(t){let e;const n=t[50].trailingIcon,i=ue(n,t,t[89],$f);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?ce(n,s[89],r,RT):de(s[89]),$f)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function um(t){let e,n,i,s=t[15]==="filled"&&cm(),r=!t[16]&&(t[17]!=null||t[41].label)&&hm(t);return{c(){s&&s.c(),e=Ze(),r&&r.c(),n=st()},l(o){s&&s.l(o),e=$e(o),r&&r.l(o),n=st()},m(o,a){s&&s.m(o,a),J(o,e,a),r&&r.m(o,a),J(o,n,a),i=!0},p(o,a){o[15]==="filled"?s||(s=cm(),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),!o[16]&&(o[17]!=null||o[41].label)?r?(r.p(o,a),a[0]&196608|a[1]&1024&&N(r,1)):(r=hm(o),r.c(),N(r,1),r.m(n.parentNode,n)):r&&(Ct(),P(r,1,1,()=>{r=null}),Rt())},i(o){i||(N(r),i=!0)},o(o){P(r),i=!1},d(o){s&&s.d(o),o&&U(e),r&&r.d(o),o&&U(n)}}}function cm(t){let e;return{c(){e=_e("span"),this.h()},l(n){e=Ee(n,"SPAN",{class:!0}),Ie(e).forEach(U),this.h()},h(){tn(e,"class","mdc-text-field__ripple")},m(n,i){J(n,e,i)},d(n){n&&U(e)}}}function hm(t){let e,n;const i=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},Wt(t[42],"label$")];let s={$$slots:{default:[jT]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=M(s,i[r]);return e=new Wf({props:s}),t[51](e),{c(){Je(e.$$.fragment)},l(r){mt(e.$$.fragment,r)},m(r,o){Ge(e,r,o),n=!0},p(r,o){const a=o[0]&268443649|o[1]&2048?ge(i,[o[0]&268435457&&{floatAbove:r[28]||r[0]!=null&&r[0]!==""},o[0]&8192&&{required:r[13]},i[2],o[1]&2048&&ze(Wt(r[42],"label$"))]):{};o[0]&131072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(N(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){t[51](null),We(e,r)}}}function jT(t){let e=(t[17]==null?"":t[17])+"",n,i;const s=t[50].label,r=ue(s,t,t[89],lm);return{c(){n=Cn(e),r&&r.c()},l(o){n=Si(o,e),r&&r.l(o)},m(o,a){J(o,n,a),r&&r.m(o,a),i=!0},p(o,a){(!i||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&os(n,e),r&&r.p&&(!i||a[2]&134217728)&&he(r,s,o,o[89],i?ce(s,o[89],a,UT):de(o[89]),lm)},i(o){i||(N(r,o),i=!0)},o(o){P(r,o),i=!1},d(o){o&&U(n),r&&r.d(o)}}}function dm(t){let e,n;const i=[{noLabel:t[16]||t[17]==null&&!t[41].label},Wt(t[42],"outline$")];let s={$$slots:{default:[zT]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=M(s,i[r]);return e=new hT({props:s}),t[53](e),{c(){Je(e.$$.fragment)},l(r){mt(e.$$.fragment,r)},m(r,o){Ge(e,r,o),n=!0},p(r,o){const a=o[0]&196608|o[1]&3072?ge(i,[o[0]&196608|o[1]&1024&&{noLabel:r[16]||r[17]==null&&!r[41].label},o[1]&2048&&ze(Wt(r[42],"outline$"))]):{};o[0]&268640289|o[1]&3072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(N(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){t[53](null),We(e,r)}}}function fm(t){let e,n;const i=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},Wt(t[42],"label$")];let s={$$slots:{default:[qT]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=M(s,i[r]);return e=new Wf({props:s}),t[52](e),{c(){Je(e.$$.fragment)},l(r){mt(e.$$.fragment,r)},m(r,o){Ge(e,r,o),n=!0},p(r,o){const a=o[0]&268443649|o[1]&2048?ge(i,[o[0]&268435457&&{floatAbove:r[28]||r[0]!=null&&r[0]!==""},o[0]&8192&&{required:r[13]},i[2],o[1]&2048&&ze(Wt(r[42],"label$"))]):{};o[0]&131072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(N(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){t[52](null),We(e,r)}}}function qT(t){let e=(t[17]==null?"":t[17])+"",n,i;const s=t[50].label,r=ue(s,t,t[89],am);return{c(){n=Cn(e),r&&r.c()},l(o){n=Si(o,e),r&&r.l(o)},m(o,a){J(o,n,a),r&&r.m(o,a),i=!0},p(o,a){(!i||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&os(n,e),r&&r.p&&(!i||a[2]&134217728)&&he(r,s,o,o[89],i?ce(s,o[89],a,FT):de(o[89]),am)},i(o){i||(N(r,o),i=!0)},o(o){P(r,o),i=!1},d(o){o&&U(n),r&&r.d(o)}}}function zT(t){let e,n,i=!t[16]&&(t[17]!=null||t[41].label)&&fm(t);return{c(){i&&i.c(),e=st()},l(s){i&&i.l(s),e=st()},m(s,r){i&&i.m(s,r),J(s,e,r),n=!0},p(s,r){!s[16]&&(s[17]!=null||s[41].label)?i?(i.p(s,r),r[0]&196608|r[1]&1024&&N(i,1)):(i=fm(s),i.c(),N(i,1),i.m(e.parentNode,e)):i&&(Ct(),P(i,1,1,()=>{i=null}),Rt())},i(s){n||(N(i),n=!0)},o(s){P(i),n=!1},d(s){i&&i.d(s),s&&U(e)}}}function GT(t){let e;const n=t[50].leadingIcon,i=ue(n,t,t[89],om);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?ce(n,s[89],r,PT):de(s[89]),om)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function WT(t){let e,n,i,s,r,o,a,l,u,c;const h=t[50].prefix,d=ue(h,t,t[89],sm);let f=t[20]!=null&&mm(t);const m=[{type:t[18]},{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},t[16]&&t[17]!=null?{placeholder:t[17]}:{},Wt(t[42],"input$")];function y(p){t[63](p)}function g(p){t[64](p)}function E(p){t[65](p)}function S(p){t[66](p)}let T={};for(let p=0;p<m.length;p+=1)T=M(T,m[p]);t[0]!==void 0&&(T.value=t[0]),t[3]!==void 0&&(T.files=t[3]),t[4]!==void 0&&(T.dirty=t[4]),t[1]!==void 0&&(T.invalid=t[1]),i=new bT({props:T}),t[62](i),re.push(()=>Ln(i,"value",y)),re.push(()=>Ln(i,"files",g)),re.push(()=>Ln(i,"dirty",E)),re.push(()=>Ln(i,"invalid",S)),i.$on("blur",t[67]),i.$on("focus",t[68]),i.$on("blur",t[69]),i.$on("focus",t[70]);let A=t[21]!=null&&pm(t);const V=t[50].suffix,w=ue(V,t,t[89],im);return{c(){d&&d.c(),e=Ze(),f&&f.c(),n=Ze(),Je(i.$$.fragment),l=Ze(),A&&A.c(),u=Ze(),w&&w.c()},l(p){d&&d.l(p),e=$e(p),f&&f.l(p),n=$e(p),mt(i.$$.fragment,p),l=$e(p),A&&A.l(p),u=$e(p),w&&w.l(p)},m(p,b){d&&d.m(p,b),J(p,e,b),f&&f.m(p,b),J(p,n,b),Ge(i,p,b),J(p,l,b),A&&A.m(p,b),J(p,u,b),w&&w.m(p,b),c=!0},p(p,b){d&&d.p&&(!c||b[2]&134217728)&&he(d,h,p,p[89],c?ce(h,p[89],b,DT):de(p[89]),sm),p[20]!=null?f?(f.p(p,b),b[0]&1048576&&N(f,1)):(f=mm(p),f.c(),N(f,1),f.m(n.parentNode,n)):f&&(Ct(),P(f,1,1,()=>{f=null}),Rt());const F=b[0]&135213056|b[1]&2048?ge(m,[b[0]&262144&&{type:p[18]},b[0]&4096&&{disabled:p[12]},b[0]&8192&&{required:p[13]},b[0]&524288&&{updateInvalid:p[19]},b[0]&134217728&&{"aria-controls":p[27]},b[0]&134217728&&{"aria-describedby":p[27]},b[0]&196608&&ze(p[16]&&p[17]!=null?{placeholder:p[17]}:{}),b[1]&2048&&ze(Wt(p[42],"input$"))]):{};!s&&b[0]&1&&(s=!0,F.value=p[0],Rn(()=>s=!1)),!r&&b[0]&8&&(r=!0,F.files=p[3],Rn(()=>r=!1)),!o&&b[0]&16&&(o=!0,F.dirty=p[4],Rn(()=>o=!1)),!a&&b[0]&2&&(a=!0,F.invalid=p[1],Rn(()=>a=!1)),i.$set(F),p[21]!=null?A?(A.p(p,b),b[0]&2097152&&N(A,1)):(A=pm(p),A.c(),N(A,1),A.m(u.parentNode,u)):A&&(Ct(),P(A,1,1,()=>{A=null}),Rt()),w&&w.p&&(!c||b[2]&134217728)&&he(w,V,p,p[89],c?ce(V,p[89],b,NT):de(p[89]),im)},i(p){c||(N(d,p),N(f),N(i.$$.fragment,p),N(A),N(w,p),c=!0)},o(p){P(d,p),P(f),P(i.$$.fragment,p),P(A),P(w,p),c=!1},d(p){d&&d.d(p),p&&U(e),f&&f.d(p),p&&U(n),t[62](null),We(i,p),p&&U(l),A&&A.d(p),p&&U(u),w&&w.d(p)}}}function KT(t){let e,n,i,s,r,o,a,l;const u=[{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},Wt(t[42],"input$")];function c(g){t[55](g)}function h(g){t[56](g)}function d(g){t[57](g)}let f={};for(let g=0;g<u.length;g+=1)f=M(f,u[g]);t[0]!==void 0&&(f.value=t[0]),t[4]!==void 0&&(f.dirty=t[4]),t[1]!==void 0&&(f.invalid=t[1]),n=new ST({props:f}),t[54](n),re.push(()=>Ln(n,"value",c)),re.push(()=>Ln(n,"dirty",h)),re.push(()=>Ln(n,"invalid",d)),n.$on("blur",t[58]),n.$on("focus",t[59]),n.$on("blur",t[60]),n.$on("focus",t[61]);const m=t[50].internalCounter,y=ue(m,t,t[89],rm);return{c(){e=_e("span"),Je(n.$$.fragment),o=Ze(),y&&y.c(),this.h()},l(g){e=Ee(g,"SPAN",{class:!0});var E=Ie(e);mt(n.$$.fragment,E),o=$e(E),y&&y.l(E),E.forEach(U),this.h()},h(){tn(e,"class",a=fe({"mdc-text-field__resizer":!("input$resizable"in t[42])||t[42].input$resizable}))},m(g,E){J(g,e,E),Ge(n,e,null),wt(e,o),y&&y.m(e,null),l=!0},p(g,E){const S=E[0]&134754304|E[1]&2048?ge(u,[E[0]&4096&&{disabled:g[12]},E[0]&8192&&{required:g[13]},E[0]&524288&&{updateInvalid:g[19]},E[0]&134217728&&{"aria-controls":g[27]},E[0]&134217728&&{"aria-describedby":g[27]},E[1]&2048&&ze(Wt(g[42],"input$"))]):{};!i&&E[0]&1&&(i=!0,S.value=g[0],Rn(()=>i=!1)),!s&&E[0]&16&&(s=!0,S.dirty=g[4],Rn(()=>s=!1)),!r&&E[0]&2&&(r=!0,S.invalid=g[1],Rn(()=>r=!1)),n.$set(S),y&&y.p&&(!l||E[2]&134217728)&&he(y,m,g,g[89],l?ce(m,g[89],E,MT):de(g[89]),rm),(!l||E[1]&2048&&a!==(a=fe({"mdc-text-field__resizer":!("input$resizable"in g[42])||g[42].input$resizable})))&&tn(e,"class",a)},i(g){l||(N(n.$$.fragment,g),N(y,g),l=!0)},o(g){P(n.$$.fragment,g),P(y,g),l=!1},d(g){g&&U(e),t[54](null),We(n),y&&y.d(g)}}}function mm(t){let e,n;return e=new yT({props:{$$slots:{default:[XT]},$$scope:{ctx:t}}}),{c(){Je(e.$$.fragment)},l(i){mt(e.$$.fragment,i)},m(i,s){Ge(e,i,s),n=!0},p(i,s){const r={};s[0]&1048576|s[2]&134217728&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){n||(N(e.$$.fragment,i),n=!0)},o(i){P(e.$$.fragment,i),n=!1},d(i){We(e,i)}}}function XT(t){let e;return{c(){e=Cn(t[20])},l(n){e=Si(n,t[20])},m(n,i){J(n,e,i)},p(n,i){i[0]&1048576&&os(e,n[20])},d(n){n&&U(e)}}}function pm(t){let e,n;return e=new _T({props:{$$slots:{default:[QT]},$$scope:{ctx:t}}}),{c(){Je(e.$$.fragment)},l(i){mt(e.$$.fragment,i)},m(i,s){Ge(e,i,s),n=!0},p(i,s){const r={};s[0]&2097152|s[2]&134217728&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){n||(N(e.$$.fragment,i),n=!0)},o(i){P(e.$$.fragment,i),n=!1},d(i){We(e,i)}}}function QT(t){let e;return{c(){e=Cn(t[21])},l(n){e=Si(n,t[21])},m(n,i){J(n,e,i)},p(n,i){i[0]&2097152&&os(e,n[21])},d(n){n&&U(e)}}}function YT(t){let e;const n=t[50].trailingIcon,i=ue(n,t,t[89],nm);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?ce(n,s[89],r,kT):de(s[89]),nm)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function gm(t){let e,n;const i=[Wt(t[42],"ripple$")];let s={};for(let r=0;r<i.length;r+=1)s=M(s,i[r]);return e=new lT({props:s}),t[71](e),{c(){Je(e.$$.fragment)},l(r){mt(e.$$.fragment,r)},m(r,o){Ge(e,r,o),n=!0},p(r,o){const a=o[1]&2048?ge(i,[ze(Wt(r[42],"ripple$"))]):{};e.$set(a)},i(r){n||(N(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){t[71](null),We(e,r)}}}function ym(t){let e,n;const i=[Wt(t[42],"helperLine$")];let s={$$slots:{default:[JT]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=M(s,i[r]);return e=new gT({props:s}),e.$on("SMUITextfieldHelperText:id",t[84]),e.$on("SMUITextfieldHelperText:mount",t[85]),e.$on("SMUITextfieldHelperText:unmount",t[86]),e.$on("SMUITextfieldCharacterCounter:mount",t[87]),e.$on("SMUITextfieldCharacterCounter:unmount",t[88]),{c(){Je(e.$$.fragment)},l(r){mt(e.$$.fragment,r)},m(r,o){Ge(e,r,o),n=!0},p(r,o){const a=o[1]&2048?ge(i,[ze(Wt(r[42],"helperLine$"))]):{};o[2]&134217728&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(N(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){We(e,r)}}}function JT(t){let e;const n=t[50].helper,i=ue(n,t,t[89],Jf);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?ce(n,s[89],r,wT):de(s[89]),Jf)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function ZT(t){let e,n,i,s,r;const o=[BT,VT],a=[];function l(c,h){return c[36]?0:1}e=l(t),n=a[e]=o[e](t);let u=t[41].helper&&ym(t);return{c(){n.c(),i=Ze(),u&&u.c(),s=st()},l(c){n.l(c),i=$e(c),u&&u.l(c),s=st()},m(c,h){a[e].m(c,h),J(c,i,h),u&&u.m(c,h),J(c,s,h),r=!0},p(c,h){n.p(c,h),c[41].helper?u?(u.p(c,h),h[1]&1024&&N(u,1)):(u=ym(c),u.c(),N(u,1),u.m(s.parentNode,s)):u&&(Ct(),P(u,1,1,()=>{u=null}),Rt())},i(c){r||(N(n),N(u),r=!0)},o(c){P(n),P(u),r=!1},d(c){a[e].d(c),c&&U(i),u&&u.d(c),c&&U(s)}}}const _m=([t,e])=>`${t}: ${e};`,vm=([t,e])=>`${t}: ${e};`;function $T(t,e,n){let i;const s=["use","class","style","ripple","disabled","required","textarea","variant","noLabel","label","type","value","files","invalid","updateInvalid","dirty","prefix","suffix","validateOnValueChange","useNativeValidation","withLeadingIcon","withTrailingIcon","input","floatingLabel","lineRipple","notchedOutline","focus","layout","getElement"];let r=Y(e,s),{$$slots:o={},$$scope:a}=e;const l=Pp(o),{applyPassive:u}=kf,c=Ve(ve());let h=()=>{};function d(_){return _===h}let{use:f=[]}=e,{class:m=""}=e,{style:y=""}=e,{ripple:g=!0}=e,{disabled:E=!1}=e,{required:S=!1}=e,{textarea:T=!1}=e,{variant:A=T?"outlined":"standard"}=e,{noLabel:V=!1}=e,{label:w=void 0}=e,{type:p="text"}=e,{value:b=h}=e,{files:F=h}=e;const I=!d(b)||!d(F);d(b)&&(b=void 0),d(F)&&(F=null);let{invalid:R=h}=e,{updateInvalid:X=d(R)}=e;d(R)&&(R=!1);let{dirty:v=!1}=e,{prefix:k=void 0}=e,{suffix:C=void 0}=e,{validateOnValueChange:B=X}=e,{useNativeValidation:x=X}=e,{withLeadingIcon:z=h}=e,{withTrailingIcon:Se=h}=e,{input:$=void 0}=e,{floatingLabel:Me=void 0}=e,{lineRipple:Be=void 0}=e,{notchedOutline:dt=void 0}=e,_t,Te,vt={},we={},H,me=!1,ft=jt("SMUI:addLayoutListener"),Sn,Xn,D=new Promise(_=>Xn=_),se,He,St,en,wn=b;ft&&(Sn=ft(ar)),nn(()=>{if(n(48,Te=new eT({addClass:rs,removeClass:or,hasClass:Vo,registerTextFieldInteractionHandler:(_,it)=>Ai().addEventListener(_,it),deregisterTextFieldInteractionHandler:(_,it)=>Ai().removeEventListener(_,it),registerValidationAttributeChangeHandler:_=>{const it=qo=>qo.map(zo=>zo.attributeName).filter(zo=>zo),yu=new MutationObserver(qo=>{x&&_(it(qo))}),Rp={attributes:!0};return $&&yu.observe($.getElement(),Rp),yu},deregisterValidationAttributeChangeHandler:_=>{_.disconnect()},getNativeInput:()=>{var _;return(_=$==null?void 0:$.getElement())!==null&&_!==void 0?_:null},setInputAttr:(_,it)=>{$==null||$.addAttr(_,it)},removeInputAttr:_=>{$==null||$.removeAttr(_)},isFocused:()=>document.activeElement===($==null?void 0:$.getElement()),registerInputInteractionHandler:(_,it)=>{$==null||$.getElement().addEventListener(_,it,u())},deregisterInputInteractionHandler:(_,it)=>{$==null||$.getElement().removeEventListener(_,it,u())},floatLabel:_=>Me&&Me.float(_),getLabelWidth:()=>Me?Me.getWidth():0,hasLabel:()=>!!Me,shakeLabel:_=>Me&&Me.shake(_),setLabelRequired:_=>Me&&Me.setRequired(_),activateLineRipple:()=>Be&&Be.activate(),deactivateLineRipple:()=>Be&&Be.deactivate(),setLineRippleTransformOrigin:_=>Be&&Be.setRippleCenter(_),closeOutline:()=>dt&&dt.closeNotch(),hasOutline:()=>!!dt,notchOutline:_=>dt&&dt.notch(_)},{get helperText(){return St},get characterCounter(){return en},get leadingIcon(){return se},get trailingIcon(){return He}})),I){if($==null)throw new Error("SMUI Textfield initialized without Input component.");Te.init()}else Wp().then(()=>{if($==null)throw new Error("SMUI Textfield initialized without Input component.");Te.init()});return Xn(),()=>{Te.destroy()}}),Yn(()=>{Sn&&Sn()});function Vo(_){var it;return _ in vt?(it=vt[_])!==null&&it!==void 0?it:null:Ai().classList.contains(_)}function rs(_){vt[_]||n(25,vt[_]=!0,vt)}function or(_){(!(_ in vt)||vt[_])&&n(25,vt[_]=!1,vt)}function on(_,it){we[_]!=it&&(it===""||it==null?(delete we[_],n(26,we)):n(26,we[_]=it,we))}function Bo(){$==null||$.focus()}function ar(){if(Te){const _=Te.shouldFloat;Te.notchOutline(_)}}function Ai(){return _t}function Ho(_){re[_?"unshift":"push"](()=>{Me=_,n(5,Me)})}function xo(_){re[_?"unshift":"push"](()=>{Me=_,n(5,Me)})}function L(_){re[_?"unshift":"push"](()=>{dt=_,n(7,dt)})}function Q(_){re[_?"unshift":"push"](()=>{$=_,n(2,$)})}function K(_){b=_,n(0,b)}function Pe(_){v=_,n(4,v)}function Qn(_){R=_,n(1,R),n(48,Te),n(19,X)}const jo=()=>n(28,me=!1),Zm=()=>n(28,me=!0),$m=_=>Qe(_t,"blur",_),ep=_=>Qe(_t,"focus",_);function tp(_){re[_?"unshift":"push"](()=>{$=_,n(2,$)})}function np(_){b=_,n(0,b)}function ip(_){F=_,n(3,F)}function sp(_){v=_,n(4,v)}function rp(_){R=_,n(1,R),n(48,Te),n(19,X)}const op=()=>n(28,me=!1),ap=()=>n(28,me=!0),lp=_=>Qe(_t,"blur",_),up=_=>Qe(_t,"focus",_);function cp(_){re[_?"unshift":"push"](()=>{Be=_,n(6,Be)})}function hp(_){re[_?"unshift":"push"](()=>{_t=_,n(24,_t)})}const dp=_=>n(29,se=_.detail),fp=()=>n(29,se=void 0),mp=_=>n(30,He=_.detail),pp=()=>n(30,He=void 0),gp=_=>n(32,en=_.detail),yp=()=>n(32,en=void 0);function _p(_){re[_?"unshift":"push"](()=>{_t=_,n(24,_t)})}const vp=_=>n(29,se=_.detail),Ip=()=>n(29,se=void 0),Ep=_=>n(30,He=_.detail),bp=()=>n(30,He=void 0),Tp=_=>n(27,H=_.detail),Ap=_=>n(31,St=_.detail),Sp=()=>{n(27,H=void 0),n(31,St=void 0)},wp=_=>n(32,en=_.detail),Cp=()=>n(32,en=void 0);return t.$$set=_=>{e=M(M({},e),ke(_)),n(42,r=Y(e,s)),"use"in _&&n(8,f=_.use),"class"in _&&n(9,m=_.class),"style"in _&&n(10,y=_.style),"ripple"in _&&n(11,g=_.ripple),"disabled"in _&&n(12,E=_.disabled),"required"in _&&n(13,S=_.required),"textarea"in _&&n(14,T=_.textarea),"variant"in _&&n(15,A=_.variant),"noLabel"in _&&n(16,V=_.noLabel),"label"in _&&n(17,w=_.label),"type"in _&&n(18,p=_.type),"value"in _&&n(0,b=_.value),"files"in _&&n(3,F=_.files),"invalid"in _&&n(1,R=_.invalid),"updateInvalid"in _&&n(19,X=_.updateInvalid),"dirty"in _&&n(4,v=_.dirty),"prefix"in _&&n(20,k=_.prefix),"suffix"in _&&n(21,C=_.suffix),"validateOnValueChange"in _&&n(43,B=_.validateOnValueChange),"useNativeValidation"in _&&n(44,x=_.useNativeValidation),"withLeadingIcon"in _&&n(22,z=_.withLeadingIcon),"withTrailingIcon"in _&&n(23,Se=_.withTrailingIcon),"input"in _&&n(2,$=_.input),"floatingLabel"in _&&n(5,Me=_.floatingLabel),"lineRipple"in _&&n(6,Be=_.lineRipple),"notchedOutline"in _&&n(7,dt=_.notchedOutline),"$$scope"in _&&n(89,a=_.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&4&&n(33,i=$&&$.getElement()),t.$$.dirty[0]&524290|t.$$.dirty[1]&131072&&Te&&Te.isValid()!==!R&&(X?n(1,R=!Te.isValid()):Te.setValid(!R)),t.$$.dirty[1]&135168&&Te&&Te.getValidateOnValueChange()!==B&&Te.setValidateOnValueChange(d(B)?!1:B),t.$$.dirty[1]&139264&&Te&&Te.setUseNativeValidation(d(x)?!0:x),t.$$.dirty[0]&4096|t.$$.dirty[1]&131072&&Te&&Te.setDisabled(E),t.$$.dirty[0]&1|t.$$.dirty[1]&393216&&Te&&I&&wn!==b){n(49,wn=b);const _=`${b}`;Te.getValue()!==_&&Te.setValue(_)}},[b,R,$,F,v,Me,Be,dt,f,m,y,g,E,S,T,A,V,w,p,X,k,C,z,Se,_t,vt,we,H,me,se,He,St,en,i,c,d,I,D,rs,or,on,l,r,B,x,Bo,ar,Ai,Te,wn,o,Ho,xo,L,Q,K,Pe,Qn,jo,Zm,$m,ep,tp,np,ip,sp,rp,op,ap,lp,up,cp,hp,dp,fp,mp,pp,gp,yp,_p,vp,Ip,Ep,bp,Tp,Ap,Sp,wp,Cp,a]}class AS extends De{constructor(e){super();Ne(this,e,$T,ZT,Le,{use:8,class:9,style:10,ripple:11,disabled:12,required:13,textarea:14,variant:15,noLabel:16,label:17,type:18,value:0,files:3,invalid:1,updateInvalid:19,dirty:4,prefix:20,suffix:21,validateOnValueChange:43,useNativeValidation:44,withLeadingIcon:22,withTrailingIcon:23,input:2,floatingLabel:5,lineRipple:6,notchedOutline:7,focus:45,layout:46,getElement:47},null,[-1,-1,-1,-1])}get focus(){return this.$$.ctx[45]}get layout(){return this.$$.ctx[46]}get getElement(){return this.$$.ctx[47]}}function eA(t){let e;return{c(){e=Cn(t[8])},l(n){e=Si(n,t[8])},m(n,i){J(n,e,i)},p(n,i){i&256&&os(e,n[8])},i:Mt,o:Mt,d(n){n&&U(e)}}}function tA(t){let e;const n=t[13].default,i=ue(n,t,t[12],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&4096)&&he(i,n,s,s[12],e?ce(n,s[12],r,null):de(s[12]),null)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function nA(t){let e,n,i,s,r,o,a,l,u;const c=[tA,eA],h=[];function d(y,g){return y[8]==null?0:1}n=d(t),i=h[n]=c[n](t);let f=[{class:s=fe(xe({[t[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":t[3],"mdc-text-field-helper-text--validation-msg":t[4]},t[6]))},{"aria-hidden":r=t[3]?void 0:"true"},{id:t[2]},t[7],t[10]],m={};for(let y=0;y<f.length;y+=1)m=M(m,f[y]);return{c(){e=_e("div"),i.c(),this.h()},l(y){e=Ee(y,"DIV",{class:!0,"aria-hidden":!0,id:!0});var g=Ie(e);i.l(g),g.forEach(U),this.h()},h(){te(e,m)},m(y,g){J(y,e,g),h[n].m(e,null),t[14](e),a=!0,l||(u=[ee(o=Ye.call(null,e,t[0])),ee(t[9].call(null,e))],l=!0)},p(y,[g]){let E=n;n=d(y),n===E?h[n].p(y,g):(Ct(),P(h[E],1,1,()=>{h[E]=null}),Rt(),i=h[n],i?i.p(y,g):(i=h[n]=c[n](y),i.c()),N(i,1),i.m(e,null)),te(e,m=ge(f,[(!a||g&90&&s!==(s=fe(xe({[y[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":y[3],"mdc-text-field-helper-text--validation-msg":y[4]},y[6]))))&&{class:s},(!a||g&8&&r!==(r=y[3]?void 0:"true"))&&{"aria-hidden":r},(!a||g&4)&&{id:y[2]},g&128&&y[7],g&1024&&y[10]])),o&&Oe(o.update)&&g&1&&o.update.call(null,y[0])},i(y){a||(N(i),a=!0)},o(y){P(i),a=!1},d(y){y&&U(e),h[n].d(),t[14](null),l=!1,Re(u)}}}let iA=0;function sA(t,e,n){const i=["use","class","id","persistent","validationMsg","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e;const a=Ve(ve());let{use:l=[]}=e,{class:u=""}=e,{id:c="SMUI-textfield-helper-text-"+iA++}=e,{persistent:h=!1}=e,{validationMsg:d=!1}=e,f,m,y={},g={},E;nn(()=>(m=new tT({addClass:T,removeClass:A,hasClass:S,getAttr:V,setAttr:w,removeAttr:p,setContent:I=>{n(8,E=I)}}),c.startsWith("SMUI-textfield-helper-text-")&&Qe(b(),"SMUITextfieldHelperText:id",c),Qe(b(),"SMUITextfieldHelperText:mount",m),m.init(),()=>{Qe(b(),"SMUITextfieldHelperText:unmount",m),m.destroy()}));function S(I){return I in y?y[I]:b().classList.contains(I)}function T(I){y[I]||n(6,y[I]=!0,y)}function A(I){(!(I in y)||y[I])&&n(6,y[I]=!1,y)}function V(I){var R;return I in g?(R=g[I])!==null&&R!==void 0?R:null:b().getAttribute(I)}function w(I,R){g[I]!==R&&n(7,g[I]=R,g)}function p(I){(!(I in g)||g[I]!=null)&&n(7,g[I]=void 0,g)}function b(){return f}function F(I){re[I?"unshift":"push"](()=>{f=I,n(5,f)})}return t.$$set=I=>{e=M(M({},e),ke(I)),n(10,s=Y(e,i)),"use"in I&&n(0,l=I.use),"class"in I&&n(1,u=I.class),"id"in I&&n(2,c=I.id),"persistent"in I&&n(3,h=I.persistent),"validationMsg"in I&&n(4,d=I.validationMsg),"$$scope"in I&&n(12,o=I.$$scope)},[l,u,c,h,d,f,y,g,E,a,s,b,o,r,F]}class SS extends De{constructor(e){super();Ne(this,e,sA,nA,Le,{use:0,class:1,id:2,persistent:3,validationMsg:4,getElement:11})}get getElement(){return this.$$.ctx[11]}}/**
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
 */var rA={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},oA={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},nr={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},tt;(function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"})(tt||(tt={}));var es;(function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"})(es||(es={}));/**
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
 */var Gn,An,le={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};Gn={},Gn[""+le.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",Gn[""+le.LIST_ITEM_CLASS]="mdc-list-item",Gn[""+le.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",Gn[""+le.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",Gn[""+le.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",Gn[""+le.ROOT]="mdc-list";var ts=(An={},An[""+le.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",An[""+le.LIST_ITEM_CLASS]="mdc-deprecated-list-item",An[""+le.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",An[""+le.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",An[""+le.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",An[""+le.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",An[""+le.ROOT]="mdc-deprecated-list",An),Wn={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+le.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+le.LIST_ITEM_CLASS+` a,
    .`+ts[le.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+ts[le.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+le.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+le.LIST_ITEM_CLASS+` a,
    .`+le.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+le.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+ts[le.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+ts[le.LIST_ITEM_CLASS]+` a,
    .`+ts[le.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+ts[le.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},ht={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};/**
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
 */var aA=["input","button","textarea","select"],vi=function(t){var e=t.target;if(!!e){var n=(""+e.tagName).toLowerCase();aA.indexOf(n)===-1&&t.preventDefault()}};/**
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
 */function lA(){var t={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return t}function uA(t,e){for(var n=new Map,i=0;i<t;i++){var s=e(i).trim();if(!!s){var r=s[0].toLowerCase();n.has(r)||n.set(r,[]),n.get(r).push({text:s.toLowerCase(),index:i})}}return n.forEach(function(o){o.sort(function(a,l){return a.index-l.index})}),n}function lu(t,e){var n=t.nextChar,i=t.focusItemAtIndex,s=t.sortedIndexByFirstChar,r=t.focusedItemIndex,o=t.skipFocus,a=t.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){Em(e)},ht.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+n;var l;return e.typeaheadBuffer.length===1?l=cA(s,r,a,e):l=hA(s,a,e),l!==-1&&!o&&i(l),l}function cA(t,e,n,i){var s=i.typeaheadBuffer[0],r=t.get(s);if(!r)return-1;if(s===i.currentFirstChar&&r[i.sortedIndexCursor].index===e){i.sortedIndexCursor=(i.sortedIndexCursor+1)%r.length;var o=r[i.sortedIndexCursor].index;if(!n(o))return o}i.currentFirstChar=s;var a=-1,l;for(l=0;l<r.length;l++)if(!n(r[l].index)){a=l;break}for(;l<r.length;l++)if(r[l].index>e&&!n(r[l].index)){a=l;break}return a!==-1?(i.sortedIndexCursor=a,r[i.sortedIndexCursor].index):-1}function hA(t,e,n){var i=n.typeaheadBuffer[0],s=t.get(i);if(!s)return-1;var r=s[n.sortedIndexCursor];if(r.text.lastIndexOf(n.typeaheadBuffer,0)===0&&!e(r.index))return r.index;for(var o=(n.sortedIndexCursor+1)%s.length,a=-1;o!==n.sortedIndexCursor;){var l=s[o],u=l.text.lastIndexOf(n.typeaheadBuffer,0)===0,c=!e(l.index);if(u&&c){a=o;break}o=(o+1)%s.length}return a!==-1?(n.sortedIndexCursor=a,s[n.sortedIndexCursor].index):-1}function Im(t){return t.typeaheadBuffer.length>0}function Em(t){t.typeaheadBuffer=""}function bm(t,e){var n=t.event,i=t.isTargetListItem,s=t.focusedItemIndex,r=t.focusItemAtIndex,o=t.sortedIndexByFirstChar,a=t.isItemAtIndexDisabled,l=Dt(n)==="ArrowLeft",u=Dt(n)==="ArrowUp",c=Dt(n)==="ArrowRight",h=Dt(n)==="ArrowDown",d=Dt(n)==="Home",f=Dt(n)==="End",m=Dt(n)==="Enter",y=Dt(n)==="Spacebar";if(n.ctrlKey||n.metaKey||l||u||c||h||d||f||m)return-1;var g=!y&&n.key.length===1;if(g){vi(n);var E={focusItemAtIndex:r,focusedItemIndex:s,nextChar:n.key.toLowerCase(),sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return lu(E,e)}if(!y)return-1;i&&vi(n);var S=i&&Im(e);if(S){var E={focusItemAtIndex:r,focusedItemIndex:s,nextChar:" ",sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return lu(E,e)}return-1}/**
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
 */function dA(t){return t instanceof Array}var fA=function(t){rn(e,t);function e(n){var i=t.call(this,Ke(Ke({},e.defaultAdapter),n))||this;return i.wrapFocus=!1,i.isVertical=!0,i.isSingleSelectionList=!1,i.selectedIndex=ht.UNSET_INDEX,i.focusedItemIndex=ht.UNSET_INDEX,i.useActivatedClass=!1,i.useSelectedAttr=!1,i.ariaCurrentAttrValue=null,i.isCheckboxList=!1,i.isRadioList=!1,i.hasTypeahead=!1,i.typeaheadState=lA(),i.sortedIndexByFirstChar=new Map,i}return Object.defineProperty(e,"strings",{get:function(){return Wn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return le},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ht},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(n){this.wrapFocus=n},e.prototype.setVerticalOrientation=function(n){this.isVertical=n},e.prototype.setSingleSelection=function(n){this.isSingleSelectionList=n,n&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.maybeInitializeSingleSelection=function(){var n=this.getSelectedIndexFromDOM();if(n!==ht.UNSET_INDEX){var i=this.adapter.listItemAtIndexHasClass(n,le.LIST_ITEM_ACTIVATED_CLASS);i&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=n}},e.prototype.getSelectedIndexFromDOM=function(){for(var n=ht.UNSET_INDEX,i=this.adapter.getListItemCount(),s=0;s<i;s++){var r=this.adapter.listItemAtIndexHasClass(s,le.LIST_ITEM_SELECTED_CLASS),o=this.adapter.listItemAtIndexHasClass(s,le.LIST_ITEM_ACTIVATED_CLASS);if(!!(r||o)){n=s;break}}return n},e.prototype.setHasTypeahead=function(n){this.hasTypeahead=n,n&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&Im(this.typeaheadState)},e.prototype.setUseActivatedClass=function(n){this.useActivatedClass=n},e.prototype.setUseSelectedAttribute=function(n){this.useSelectedAttr=n},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(n,i){var s=i===void 0?{}:i,r=s.forceUpdate;!this.isIndexValid(n)||(this.isCheckboxList?this.setCheckboxAtIndex(n):this.isRadioList?this.setRadioAtIndex(n):this.setSingleSelectionAtIndex(n,{forceUpdate:r}))},e.prototype.handleFocusIn=function(n){n>=0&&(this.focusedItemIndex=n,this.adapter.setAttributeForElementIndex(n,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(n,"0"))},e.prototype.handleFocusOut=function(n){var i=this;n>=0&&(this.adapter.setAttributeForElementIndex(n,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(n,"-1")),setTimeout(function(){i.adapter.isFocusInsideList()||i.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.handleKeydown=function(n,i,s){var r=this,o=Dt(n)==="ArrowLeft",a=Dt(n)==="ArrowUp",l=Dt(n)==="ArrowRight",u=Dt(n)==="ArrowDown",c=Dt(n)==="Home",h=Dt(n)==="End",d=Dt(n)==="Enter",f=Dt(n)==="Spacebar",m=n.key==="A"||n.key==="a";if(this.adapter.isRootFocused()){if(a||h?(n.preventDefault(),this.focusLastElement()):(u||c)&&(n.preventDefault(),this.focusFirstElement()),this.hasTypeahead){var y={event:n,focusItemAtIndex:function(S){r.focusItemAtIndex(S)},focusedItemIndex:-1,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(S){return r.adapter.listItemAtIndexHasClass(S,le.LIST_ITEM_DISABLED_CLASS)}};bm(y,this.typeaheadState)}return}var g=this.adapter.getFocusedElementIndex();if(!(g===-1&&(g=s,g<0))){if(this.isVertical&&u||!this.isVertical&&l)vi(n),this.focusNextElement(g);else if(this.isVertical&&a||!this.isVertical&&o)vi(n),this.focusPrevElement(g);else if(c)vi(n),this.focusFirstElement();else if(h)vi(n),this.focusLastElement();else if(m&&n.ctrlKey&&this.isCheckboxList)n.preventDefault(),this.toggleAll(this.selectedIndex===ht.UNSET_INDEX?[]:this.selectedIndex);else if((d||f)&&i){var E=n.target;if(E&&E.tagName==="A"&&d||(vi(n),this.adapter.listItemAtIndexHasClass(g,le.LIST_ITEM_DISABLED_CLASS)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(g),this.adapter.notifyAction(g))}if(this.hasTypeahead){var y={event:n,focusItemAtIndex:function(T){r.focusItemAtIndex(T)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(T){return r.adapter.listItemAtIndexHasClass(T,le.LIST_ITEM_DISABLED_CLASS)}};bm(y,this.typeaheadState)}}},e.prototype.handleClick=function(n,i){n!==ht.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(n,le.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(n,i),this.adapter.notifyAction(n)))},e.prototype.focusNextElement=function(n){var i=this.adapter.getListItemCount(),s=n+1;if(s>=i)if(this.wrapFocus)s=0;else return n;return this.focusItemAtIndex(s),s},e.prototype.focusPrevElement=function(n){var i=n-1;if(i<0)if(this.wrapFocus)i=this.adapter.getListItemCount()-1;else return n;return this.focusItemAtIndex(i),i},e.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},e.prototype.focusLastElement=function(){var n=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(n),n},e.prototype.focusInitialElement=function(){var n=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(n),n},e.prototype.setEnabled=function(n,i){!this.isIndexValid(n)||(i?(this.adapter.removeClassForElementIndex(n,le.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(n,Wn.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(n,le.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(n,Wn.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(n,i){var s=i===void 0?{}:i,r=s.forceUpdate;if(!(this.selectedIndex===n&&!r)){var o=le.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(o=le.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==ht.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,o),this.setAriaForSingleSelectionAtIndex(n),this.setTabindexAtIndex(n),n!==ht.UNSET_INDEX&&this.adapter.addClassForElementIndex(n,o),this.selectedIndex=n}},e.prototype.setAriaForSingleSelectionAtIndex=function(n){this.selectedIndex===ht.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(n,Wn.ARIA_CURRENT));var i=this.ariaCurrentAttrValue!==null,s=i?Wn.ARIA_CURRENT:Wn.ARIA_SELECTED;if(this.selectedIndex!==ht.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,s,"false"),n!==ht.UNSET_INDEX){var r=i?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(n,s,r)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?Wn.ARIA_SELECTED:Wn.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(n){var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(n,!0),this.selectedIndex!==ht.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),this.adapter.setAttributeForElementIndex(n,i,"true"),this.selectedIndex=n},e.prototype.setCheckboxAtIndex=function(n){for(var i=this.getSelectionAttribute(),s=0;s<this.adapter.getListItemCount();s++){var r=!1;n.indexOf(s)>=0&&(r=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(s,r),this.adapter.setAttributeForElementIndex(s,i,r?"true":"false")}this.selectedIndex=n},e.prototype.setTabindexAtIndex=function(n){this.focusedItemIndex===ht.UNSET_INDEX&&n!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==n&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==n&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),n!==ht.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(n,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var n=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(n)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==ht.UNSET_INDEX?this.selectedIndex:dA(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(n,i){return Math.min(n,i)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(n){var i=this;if(n instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return n.length===0?!0:n.some(function(s){return i.isIndexInRange(s)})}else if(typeof n=="number"){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+n);return this.isIndexInRange(n)||this.isSingleSelectionList&&n===ht.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(n){var i=this.adapter.getListItemCount();return n>=0&&n<i},e.prototype.setSelectedIndexOnAction=function(n,i){i===void 0&&(i=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(n,i):this.setSelectedIndex(n)},e.prototype.toggleCheckboxAtIndex=function(n,i){var s=this.getSelectionAttribute(),r=this.adapter.isCheckboxCheckedAtIndex(n);i&&(r=!r,this.adapter.setCheckedCheckboxOrRadioAtIndex(n,r)),this.adapter.setAttributeForElementIndex(n,s,r?"true":"false");var o=this.selectedIndex===ht.UNSET_INDEX?[]:this.selectedIndex.slice();r?o.push(n):o=o.filter(function(a){return a!==n}),this.selectedIndex=o},e.prototype.focusItemAtIndex=function(n){this.adapter.focusItemAtIndex(n),this.focusedItemIndex=n},e.prototype.toggleAll=function(n){var i=this.adapter.getListItemCount();if(n.length===i)this.setCheckboxAtIndex([]);else{for(var s=[],r=0;r<i;r++)(!this.adapter.listItemAtIndexHasClass(r,le.LIST_ITEM_DISABLED_CLASS)||n.indexOf(r)>-1)&&s.push(r);this.setCheckboxAtIndex(s)}},e.prototype.typeaheadMatchItem=function(n,i,s){var r=this;s===void 0&&(s=!1);var o={focusItemAtIndex:function(a){r.focusItemAtIndex(a)},focusedItemIndex:i||this.focusedItemIndex,nextChar:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:s,isItemAtIndexDisabled:function(a){return r.adapter.listItemAtIndexHasClass(a,le.LIST_ITEM_DISABLED_CLASS)}};return lu(o,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return uA(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){Em(this.typeaheadState)},e}(cn);/**
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
 */var Tm=function(t){rn(e,t);function e(n){var i=t.call(this,Ke(Ke({},e.defaultAdapter),n))||this;return i.isSurfaceOpen=!1,i.isQuickOpen=!1,i.isHoistedElement=!1,i.isFixedPosition=!1,i.isHorizontallyCenteredOnViewport=!1,i.maxHeight=0,i.openAnimationEndTimerId=0,i.closeAnimationEndTimerId=0,i.animationRequestId=0,i.anchorCorner=es.TOP_START,i.originCorner=es.TOP_START,i.anchorMargin={top:0,right:0,bottom:0,left:0},i.position={x:0,y:0},i}return Object.defineProperty(e,"cssClasses",{get:function(){return rA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return oA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return nr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return es},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=e.cssClasses,i=n.ROOT,s=n.OPEN;if(!this.adapter.hasClass(i))throw new Error(i+" class required in root element.");this.adapter.hasClass(s)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(n){this.anchorCorner=n},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^tt.RIGHT},e.prototype.setAnchorMargin=function(n){this.anchorMargin.top=n.top||0,this.anchorMargin.right=n.right||0,this.anchorMargin.bottom=n.bottom||0,this.anchorMargin.left=n.left||0},e.prototype.setIsHoisted=function(n){this.isHoistedElement=n},e.prototype.setFixedPosition=function(n){this.isFixedPosition=n},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(n,i){this.position.x=this.isFinite(n)?n:0,this.position.y=this.isFinite(i)?i:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(n){this.isHorizontallyCenteredOnViewport=n},e.prototype.setQuickOpen=function(n){this.isQuickOpen=n},e.prototype.setMaxHeight=function(n){this.maxHeight=n},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var n=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){n.dimensions=n.adapter.getInnerDimensions(),n.autoposition(),n.adapter.addClass(e.cssClasses.OPEN),n.openAnimationEndTimerId=setTimeout(function(){n.openAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),n.adapter.notifyOpen()},nr.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},e.prototype.close=function(n){var i=this;if(n===void 0&&(n=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,n||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){i.adapter.removeClass(e.cssClasses.OPEN),i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId=setTimeout(function(){i.closeAnimationEndTimerId=0,i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),i.adapter.notifyClose()},nr.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,n||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(n){var i=n.target;this.adapter.isElementInContainer(i)||this.close()},e.prototype.handleKeydown=function(n){var i=n.keyCode,s=n.key,r=s==="Escape"||i===27;r&&this.close()},e.prototype.autoposition=function(){var n;this.measurements=this.getAutoLayoutmeasurements();var i=this.getoriginCorner(),s=this.getMenuSurfaceMaxHeight(i),r=this.hasBit(i,tt.BOTTOM)?"bottom":"top",o=this.hasBit(i,tt.RIGHT)?"right":"left",a=this.getHorizontalOriginOffset(i),l=this.getVerticalOriginOffset(i),u=this.measurements,c=u.anchorSize,h=u.surfaceSize,d=(n={},n[o]=a,n[r]=l,n);c.width/h.width>nr.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(o="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(d),this.adapter.setTransformOrigin(o+" "+r),this.adapter.setPosition(d),this.adapter.setMaxHeight(s?s+"px":""),this.hasBit(i,tt.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var n=this.adapter.getAnchorDimensions(),i=this.adapter.getBodyDimensions(),s=this.adapter.getWindowDimensions(),r=this.adapter.getWindowScroll();return n||(n={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:n,bodySize:i,surfaceSize:this.dimensions,viewportDistance:{top:n.top,right:s.width-n.right,bottom:s.height-n.bottom,left:n.left},viewportSize:s,windowScroll:r}},e.prototype.getoriginCorner=function(){var n=this.originCorner,i=this.measurements,s=i.viewportDistance,r=i.anchorSize,o=i.surfaceSize,a=e.numbers.MARGIN_TO_EDGE,l=this.hasBit(this.anchorCorner,tt.BOTTOM),u,c;l?(u=s.top-a+this.anchorMargin.bottom,c=s.bottom-a-this.anchorMargin.bottom):(u=s.top-a+this.anchorMargin.top,c=s.bottom-a+r.height-this.anchorMargin.top);var h=c-o.height>0;!h&&u>c&&(n=this.setBit(n,tt.BOTTOM));var d=this.adapter.isRtl(),f=this.hasBit(this.anchorCorner,tt.FLIP_RTL),m=this.hasBit(this.anchorCorner,tt.RIGHT)||this.hasBit(n,tt.RIGHT),y=!1;d&&f?y=!m:y=m;var g,E;y?(g=s.left+r.width+this.anchorMargin.right,E=s.right-this.anchorMargin.right):(g=s.left+this.anchorMargin.left,E=s.right+r.width-this.anchorMargin.left);var S=g-o.width>0,T=E-o.width>0,A=this.hasBit(n,tt.FLIP_RTL)&&this.hasBit(n,tt.RIGHT);return T&&A&&d||!S&&A?n=this.unsetBit(n,tt.RIGHT):(S&&y&&d||S&&!y&&m||!T&&g>=E)&&(n=this.setBit(n,tt.RIGHT)),n},e.prototype.getMenuSurfaceMaxHeight=function(n){if(this.maxHeight>0)return this.maxHeight;var i=this.measurements.viewportDistance,s=0,r=this.hasBit(n,tt.BOTTOM),o=this.hasBit(this.anchorCorner,tt.BOTTOM),a=e.numbers.MARGIN_TO_EDGE;return r?(s=i.top+this.anchorMargin.top-a,o||(s+=this.measurements.anchorSize.height)):(s=i.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-a,o&&(s-=this.measurements.anchorSize.height)),s},e.prototype.getHorizontalOriginOffset=function(n){var i=this.measurements.anchorSize,s=this.hasBit(n,tt.RIGHT),r=this.hasBit(this.anchorCorner,tt.RIGHT);if(s){var o=r?i.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?o-(this.measurements.viewportSize.width-this.measurements.bodySize.width):o}return r?i.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(n){var i=this.measurements.anchorSize,s=this.hasBit(n,tt.BOTTOM),r=this.hasBit(this.anchorCorner,tt.BOTTOM),o=0;return s?o=r?i.height-this.anchorMargin.top:-this.anchorMargin.bottom:o=r?i.height+this.anchorMargin.bottom:this.anchorMargin.top,o},e.prototype.adjustPositionForHoistedElement=function(n){var i,s,r=this.measurements,o=r.windowScroll,a=r.viewportDistance,l=r.surfaceSize,u=r.viewportSize,c=Object.keys(n);try{for(var h=fn(c),d=h.next();!d.done;d=h.next()){var f=d.value,m=n[f]||0;if(this.isHorizontallyCenteredOnViewport&&(f==="left"||f==="right")){n[f]=(u.width-l.width)/2;continue}m+=a[f],this.isFixedPosition||(f==="top"?m+=o.y:f==="bottom"?m-=o.y:f==="left"?m+=o.x:m-=o.x),n[f]=m}}catch(y){i={error:y}}finally{try{d&&!d.done&&(s=h.return)&&s.call(h)}finally{if(i)throw i.error}}},e.prototype.maybeRestoreFocus=function(){var n=this,i=this.adapter.isFocused(),s=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(i||s)&&setTimeout(function(){n.adapter.restoreFocus()},nr.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(n,i){return Boolean(n&i)},e.prototype.setBit=function(n,i){return n|i},e.prototype.unsetBit=function(n,i){return n^i},e.prototype.isFinite=function(n){return typeof n=="number"&&isFinite(n)},e}(cn);/**
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
 */var Am={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function mA(t){return Boolean(t.document)&&typeof t.document.createElement=="function"}function pA(t,e){if(mA(t)&&e in Am){var n=t.document.createElement("div"),i=Am[e],s=i.standard,r=i.prefixed,o=s in n.style;return o?s:r}return e}/**
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
 */var ns={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},is={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},gA={FOCUS_ROOT_INDEX:-1},ss;(function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"})(ss||(ss={}));/**
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
 */var yA=function(t){rn(e,t);function e(n){var i=t.call(this,Ke(Ke({},e.defaultAdapter),n))||this;return i.closeAnimationEndTimerId=0,i.defaultFocusState=ss.LIST_ROOT,i.selectedIndex=-1,i}return Object.defineProperty(e,"cssClasses",{get:function(){return ns},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return is},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return gA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},e.prototype.handleKeydown=function(n){var i=n.key,s=n.keyCode,r=i==="Tab"||s===9;r&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(n){var i=this,s=this.adapter.getElementIndex(n);if(!(s<0)){this.adapter.notifySelected({index:s});var r=this.adapter.getAttributeFromElementAtIndex(s,is.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(r),this.closeAnimationEndTimerId=setTimeout(function(){var o=i.adapter.getElementIndex(n);o>=0&&i.adapter.isSelectableItemAtIndex(o)&&i.setSelectedIndex(o)},Tm.numbers.TRANSITION_CLOSE_DURATION)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case ss.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case ss.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case ss.NONE:break;default:this.adapter.focusListRoot();break}},e.prototype.setDefaultFocusState=function(n){this.defaultFocusState=n},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(n){if(this.validatedIndex(n),!this.adapter.isSelectableItemAtIndex(n))throw new Error("MDCMenuFoundation: No selection group at specified index.");var i=this.adapter.getSelectedSiblingOfItemAtIndex(n);i>=0&&(this.adapter.removeAttributeFromElementAtIndex(i,is.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(i,ns.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(n,ns.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(n,is.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=n},e.prototype.setEnabled=function(n,i){this.validatedIndex(n),i?(this.adapter.removeClassFromElementAtIndex(n,le.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(n,is.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(n,le.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(n,is.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(n){var i=this.adapter.getMenuItemCount(),s=n>=0&&n<i;if(!s)throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(cn);const{document:_A}=Xp;function vA(t){let e,n,i,s,r,o,a,l;const u=t[30].default,c=ue(u,t,t[29],null);let h=[{class:i=fe(xe({[t[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":t[5],"mdc-menu-surface--open":t[4],"smui-menu-surface--static":t[4],"mdc-menu-surface--fullwidth":t[6]},t[9]))},{style:s=Object.entries(t[10]).map(Sm).concat([t[3]]).join(" ")},t[12]],d={};for(let f=0;f<h.length;f+=1)d=M(d,h[f]);return{c(){e=Ze(),n=_e("div"),c&&c.c(),this.h()},l(f){e=$e(f),n=Ee(f,"DIV",{class:!0,style:!0});var m=Ie(n);c&&c.l(m),m.forEach(U),this.h()},h(){te(n,d)},m(f,m){J(f,e,m),J(f,n,m),c&&c.m(n,null),t[32](n),o=!0,a||(l=[Fe(_A.body,"click",t[31],!0),ee(r=Ye.call(null,n,t[1])),ee(t[11].call(null,n)),Fe(n,"keydown",t[33])],a=!0)},p(f,m){c&&c.p&&(!o||m[0]&536870912)&&he(c,u,f,f[29],o?ce(u,f[29],m,null):de(f[29]),null),te(n,d=ge(h,[(!o||m[0]&628&&i!==(i=fe(xe({[f[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":f[5],"mdc-menu-surface--open":f[4],"smui-menu-surface--static":f[4],"mdc-menu-surface--fullwidth":f[6]},f[9]))))&&{class:i},(!o||m[0]&1032&&s!==(s=Object.entries(f[10]).map(Sm).concat([f[3]]).join(" ")))&&{style:s},m[0]&4096&&f[12]])),r&&Oe(r.update)&&m[0]&2&&r.update.call(null,f[1])},i(f){o||(N(c,f),o=!0)},o(f){P(c,f),o=!1},d(f){f&&U(e),f&&U(n),c&&c.d(f),t[32](null),a=!1,Re(l)}}}const Sm=([t,e])=>`${t}: ${e};`;function IA(t,e,n){const i=["use","class","style","static","anchor","fixed","open","fullWidth","quickOpen","anchorElement","anchorCorner","anchorMargin","maxHeight","horizontallyCenteredOnViewport","isOpen","setOpen","setAbsolutePosition","setIsHoisted","isFixed","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e;var a,l,u;const c=Ve(ve());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{static:m=!1}=e,{anchor:y=!0}=e,{fixed:g=!1}=e,{open:E=m}=e,{fullWidth:S=!1}=e,{quickOpen:T=!1}=e,{anchorElement:A=void 0}=e,{anchorCorner:V=void 0}=e,{anchorMargin:w={top:0,right:0,bottom:0,left:0}}=e,{maxHeight:p=0}=e,{horizontallyCenteredOnViewport:b=!1}=e,F,I,R={},X={},v;lt("SMUI:list:role","menu"),lt("SMUI:list:item:role","menuitem");const k=es;nn(()=>(n(8,I=new Tm({addClass:B,removeClass:x,hasClass:C,hasAnchor:()=>!!A,notifyClose:()=>{n(0,E=m),E||Qe(F,"SMUIMenuSurface:closed",void 0,void 0,!0)},notifyClosing:()=>{n(0,E=m),E||Qe(F,"SMUIMenuSurface:closing",void 0,void 0,!0)},notifyOpen:()=>{n(0,E=!0),Qe(F,"SMUIMenuSurface:opened",void 0,void 0,!0)},isElementInContainer:me=>F.contains(me),isRtl:()=>getComputedStyle(F).getPropertyValue("direction")==="rtl",setTransformOrigin:me=>{const ft=`${pA(window,"transform")}-origin`;n(10,X[ft]=me,X)},isFocused:()=>document.activeElement===F,saveFocus:()=>{var me;v=(me=document.activeElement)!==null&&me!==void 0?me:void 0},restoreFocus:()=>{F.contains(document.activeElement)&&v&&"focus"in v&&v.focus()},getInnerDimensions:()=>({width:F.offsetWidth,height:F.offsetHeight}),getAnchorDimensions:()=>A?A.getBoundingClientRect():null,getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:me=>{n(10,X.left="left"in me?`${me.left}px`:"",X),n(10,X.right="right"in me?`${me.right}px`:"",X),n(10,X.top="top"in me?`${me.top}px`:"",X),n(10,X.bottom="bottom"in me?`${me.bottom}px`:"",X)},setMaxHeight:me=>{n(10,X.maxHeight=me,X)}})),Qe(F,"SMUIMenuSurface:mount",{get open(){return E},set open(me){n(0,E=me)},closeProgrammatic:z}),I.init(),()=>{var me;const ft=I.isHoistedElement;I.destroy(),ft&&((me=F.parentNode)===null||me===void 0||me.removeChild(F))})),Yn(()=>{var H;y&&F&&((H=F.parentElement)===null||H===void 0||H.classList.remove("mdc-menu-surface--anchor"))});function C(H){return H in R?R[H]:_t().classList.contains(H)}function B(H){R[H]||n(9,R[H]=!0,R)}function x(H){(!(H in R)||R[H])&&n(9,R[H]=!1,R)}function z(H){I.close(H),n(0,E=!1)}function Se(){return E}function $(H){n(0,E=H)}function Me(H,me){return I.setAbsolutePosition(H,me)}function Be(H){return I.setIsHoisted(H)}function dt(){return I.isFixed()}function _t(){return F}const Te=H=>I&&E&&I.handleBodyClick(H);function vt(H){re[H?"unshift":"push"](()=>{F=H,n(7,F)})}const we=H=>I&&I.handleKeydown(H);return t.$$set=H=>{e=M(M({},e),ke(H)),n(12,s=Y(e,i)),"use"in H&&n(1,h=H.use),"class"in H&&n(2,d=H.class),"style"in H&&n(3,f=H.style),"static"in H&&n(4,m=H.static),"anchor"in H&&n(14,y=H.anchor),"fixed"in H&&n(5,g=H.fixed),"open"in H&&n(0,E=H.open),"fullWidth"in H&&n(6,S=H.fullWidth),"quickOpen"in H&&n(15,T=H.quickOpen),"anchorElement"in H&&n(13,A=H.anchorElement),"anchorCorner"in H&&n(16,V=H.anchorCorner),"anchorMargin"in H&&n(17,w=H.anchorMargin),"maxHeight"in H&&n(18,p=H.maxHeight),"horizontallyCenteredOnViewport"in H&&n(19,b=H.horizontallyCenteredOnViewport),"$$scope"in H&&n(29,o=H.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&469778560&&F&&y&&!(n(26,a=F.parentElement)===null||a===void 0?void 0:a.classList.contains("mdc-menu-surface--anchor"))&&(n(27,l=F.parentElement)===null||l===void 0||l.classList.add("mdc-menu-surface--anchor"),n(13,A=n(28,u=F.parentElement)!==null&&u!==void 0?u:void 0)),t.$$.dirty[0]&257&&I&&I.isOpen()!==E&&(E?I.open():I.close()),t.$$.dirty[0]&33024&&I&&I.setQuickOpen(T),t.$$.dirty[0]&288&&I&&I.setFixedPosition(g),t.$$.dirty[0]&262400&&I&&p>0&&I.setMaxHeight(p),t.$$.dirty[0]&524544&&I&&I.setIsHorizontallyCenteredOnViewport(b),t.$$.dirty[0]&65792&&I&&V!=null&&(typeof V=="string"?I.setAnchorCorner(k[V]):I.setAnchorCorner(V)),t.$$.dirty[0]&131328&&I&&I.setAnchorMargin(w)},[E,h,d,f,m,g,S,F,I,R,X,c,s,A,y,T,V,w,p,b,Se,$,Me,Be,dt,_t,a,l,u,o,r,Te,vt,we]}class EA extends De{constructor(e){super();Ne(this,e,IA,vA,Le,{use:1,class:2,style:3,static:4,anchor:14,fixed:5,open:0,fullWidth:6,quickOpen:15,anchorElement:13,anchorCorner:16,anchorMargin:17,maxHeight:18,horizontallyCenteredOnViewport:19,isOpen:20,setOpen:21,setAbsolutePosition:22,setIsHoisted:23,isFixed:24,getElement:25},null,[-1,-1])}get isOpen(){return this.$$.ctx[20]}get setOpen(){return this.$$.ctx[21]}get setAbsolutePosition(){return this.$$.ctx[22]}get setIsHoisted(){return this.$$.ctx[23]}get isFixed(){return this.$$.ctx[24]}get getElement(){return this.$$.ctx[25]}}function bA(t){let e;const n=t[16].default,i=ue(n,t,t[21],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&2097152)&&he(i,n,s,s[21],e?ce(n,s[21],r,null):de(s[21]),null)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function TA(t){let e,n,i;const s=[{use:t[5]},{class:fe({[t[1]]:!0,"mdc-menu":!0})},t[9]];function r(a){t[18](a)}let o={$$slots:{default:[bA]},$$scope:{ctx:t}};for(let a=0;a<s.length;a+=1)o=M(o,s[a]);return t[0]!==void 0&&(o.open=t[0]),e=new EA({props:o}),t[17](e),re.push(()=>Ln(e,"open",r)),e.$on("SMUIMenuSurface:mount",t[7]),e.$on("SMUIList:mount",t[8]),e.$on("SMUIMenuSurface:opened",t[19]),e.$on("keydown",t[6]),e.$on("SMUIList:action",t[20]),{c(){Je(e.$$.fragment)},l(a){mt(e.$$.fragment,a)},m(a,l){Ge(e,a,l),i=!0},p(a,[l]){const u=l&546?ge(s,[l&32&&{use:a[5]},l&2&&{class:fe({[a[1]]:!0,"mdc-menu":!0})},l&512&&ze(a[9])]):{};l&2097152&&(u.$$scope={dirty:l,ctx:a}),!n&&l&1&&(n=!0,u.open=a[0],Rn(()=>n=!1)),e.$set(u)},i(a){i||(N(e.$$.fragment,a),i=!0)},o(a){P(e.$$.fragment,a),i=!1},d(a){t[17](null),We(e,a)}}}function AA(t,e,n){let i;const s=["use","class","open","isOpen","setOpen","setDefaultFocusState","getSelectedIndex","getElement"];let r=Y(e,s),{$$slots:o={},$$scope:a}=e;const{closest:l}=ru,u=Ve(ve());let{use:c=[]}=e,{class:h=""}=e,{open:d=!1}=e,f,m,y,g;nn(()=>(n(3,m=new yA({addClassToElementAtIndex:(v,k)=>{g.addClassForElementIndex(v,k)},removeClassFromElementAtIndex:(v,k)=>{g.removeClassForElementIndex(v,k)},addAttributeToElementAtIndex:(v,k,C)=>{g.setAttributeForElementIndex(v,k,C)},removeAttributeFromElementAtIndex:(v,k)=>{g.removeAttributeForElementIndex(v,k)},getAttributeFromElementAtIndex:(v,k)=>g.getAttributeFromElementIndex(v,k),elementContainsClass:(v,k)=>v.classList.contains(k),closeSurface:v=>y.closeProgrammatic(v),getElementIndex:v=>g.getOrderedList().map(k=>k.element).indexOf(v),notifySelected:v=>Qe(b(),"SMUIMenu:selected",{index:v.index,item:g.getOrderedList()[v.index].element},void 0,!0),getMenuItemCount:()=>g.items.length,focusItemAtIndex:v=>g.focusItemAtIndex(v),focusListRoot:()=>"focus"in g.element&&g.element.focus(),isSelectableItemAtIndex:v=>!!l(g.getOrderedList()[v].element,`.${ns.MENU_SELECTION_GROUP}`),getSelectedSiblingOfItemAtIndex:v=>{const k=g.getOrderedList(),C=l(k[v].element,`.${ns.MENU_SELECTION_GROUP}`),B=C==null?void 0:C.querySelector(`.${ns.MENU_SELECTED_LIST_ITEM}`);return B?k.map(x=>x.element).indexOf(B):-1}})),Qe(b(),"SMUIMenu:mount",m),m.init(),()=>{m.destroy()}));function E(v){m&&m.handleKeydown(v)}function S(v){y||(y=v.detail)}function T(v){g||n(4,g=v.detail)}function A(){return d}function V(v){n(0,d=v)}function w(v){m.setDefaultFocusState(v)}function p(){return m.getSelectedIndex()}function b(){return f.getElement()}function F(v){re[v?"unshift":"push"](()=>{f=v,n(2,f)})}function I(v){d=v,n(0,d)}const R=()=>m&&m.handleMenuSurfaceOpened(),X=v=>m&&m.handleItemAction(g.getOrderedList()[v.detail.index].element);return t.$$set=v=>{e=M(M({},e),ke(v)),n(9,r=Y(e,s)),"use"in v&&n(10,c=v.use),"class"in v&&n(1,h=v.class),"open"in v&&n(0,d=v.open),"$$scope"in v&&n(21,a=v.$$scope)},t.$$.update=()=>{t.$$.dirty&1024&&n(5,i=[u,...c])},[d,h,f,m,g,i,E,S,T,r,c,A,V,w,p,b,o,F,I,R,X,a]}class wS extends De{constructor(e){super();Ne(this,e,AA,TA,Le,{use:10,class:1,open:0,isOpen:11,setOpen:12,setDefaultFocusState:13,getSelectedIndex:14,getElement:15})}get isOpen(){return this.$$.ctx[11]}get setOpen(){return this.$$.ctx[12]}get setDefaultFocusState(){return this.$$.ctx[13]}get getSelectedIndex(){return this.$$.ctx[14]}get getElement(){return this.$$.ctx[15]}}function SA(t){let e;const n=t[37].default,i=ue(n,t,t[43],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[1]&4096)&&he(i,n,s,s[43],e?ce(n,s[43],r,null):de(s[43]),null)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function wA(t){let e,n,i;const s=[{use:[t[17],...t[0]]},{class:fe({[t[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":t[2],"mdc-deprecated-list--dense":t[3],"mdc-deprecated-list--textual-list":t[4],"mdc-deprecated-list--avatar-list":t[5]||t[18],"mdc-deprecated-list--icon-list":t[6],"mdc-deprecated-list--image-list":t[7],"mdc-deprecated-list--thumbnail-list":t[8],"mdc-deprecated-list--video-list":t[9],"mdc-deprecated-list--two-line":t[10],"smui-list--three-line":t[11]&&!t[10]})},{role:t[15]},t[23]];var r=t[12];function o(a){let l={$$slots:{default:[SA]},$$scope:{ctx:a}};for(let u=0;u<s.length;u+=1)l=M(l,s[u]);return{props:l}}return r&&(e=new r(o(t)),t[38](e),e.$on("keydown",t[39]),e.$on("focusin",t[40]),e.$on("focusout",t[41]),e.$on("click",t[42]),e.$on("SMUIListItem:mount",t[19]),e.$on("SMUIListItem:unmount",t[20]),e.$on("SMUI:action",t[21])),{c(){e&&Je(e.$$.fragment),n=st()},l(a){e&&mt(e.$$.fragment,a),n=st()},m(a,l){e&&Ge(e,a,l),J(a,n,l),i=!0},p(a,l){const u=l[0]&8818687?ge(s,[l[0]&131073&&{use:[a[17],...a[0]]},l[0]&266238&&{class:fe({[a[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":a[2],"mdc-deprecated-list--dense":a[3],"mdc-deprecated-list--textual-list":a[4],"mdc-deprecated-list--avatar-list":a[5]||a[18],"mdc-deprecated-list--icon-list":a[6],"mdc-deprecated-list--image-list":a[7],"mdc-deprecated-list--thumbnail-list":a[8],"mdc-deprecated-list--video-list":a[9],"mdc-deprecated-list--two-line":a[10],"smui-list--three-line":a[11]&&!a[10]})},l[0]&32768&&{role:a[15]},l[0]&8388608&&ze(a[23])]):{};if(l[1]&4096&&(u.$$scope={dirty:l,ctx:a}),r!==(r=a[12])){if(e){Ct();const c=e;P(c.$$.fragment,1,0,()=>{We(c,1)}),Rt()}r?(e=new r(o(a)),a[38](e),e.$on("keydown",a[39]),e.$on("focusin",a[40]),e.$on("focusout",a[41]),e.$on("click",a[42]),e.$on("SMUIListItem:mount",a[19]),e.$on("SMUIListItem:unmount",a[20]),e.$on("SMUI:action",a[21]),Je(e.$$.fragment),N(e.$$.fragment,1),Ge(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(a){i||(e&&N(e.$$.fragment,a),i=!0)},o(a){e&&P(e.$$.fragment,a),i=!1},d(a){t[38](null),a&&U(n),e&&We(e,a)}}}function CA(t,e,n){const i=["use","class","nonInteractive","dense","textualList","avatarList","iconList","imageList","thumbnailList","videoList","twoLine","threeLine","vertical","wrapFocus","singleSelection","selectedIndex","radioList","checkList","hasTypeahead","component","layout","setEnabled","getTypeaheadInProgress","getSelectedIndex","getFocusedItemIndex","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e;var a;const{closest:l,matches:u}=ru,c=Ve(ve());let{use:h=[]}=e,{class:d=""}=e,{nonInteractive:f=!1}=e,{dense:m=!1}=e,{textualList:y=!1}=e,{avatarList:g=!1}=e,{iconList:E=!1}=e,{imageList:S=!1}=e,{thumbnailList:T=!1}=e,{videoList:A=!1}=e,{twoLine:V=!1}=e,{threeLine:w=!1}=e,{vertical:p=!0}=e,{wrapFocus:b=(a=jt("SMUI:list:wrapFocus"))!==null&&a!==void 0?a:!1}=e,{singleSelection:F=!1}=e,{selectedIndex:I=-1}=e,{radioList:R=!1}=e,{checkList:X=!1}=e,{hasTypeahead:v=!1}=e,k,C,B=[],x=jt("SMUI:list:role"),z=jt("SMUI:list:nav");const Se=new WeakMap;let $=jt("SMUI:dialog:selection"),Me=jt("SMUI:addLayoutListener"),Be,{component:dt=z?V0:B0}=e;lt("SMUI:list:nonInteractive",f),lt("SMUI:separator:context","list"),x||(F?(x="listbox",lt("SMUI:list:item:role","option")):R?(x="radiogroup",lt("SMUI:list:item:role","radio")):X?(x="group",lt("SMUI:list:item:role","checkbox")):(x="list",lt("SMUI:list:item:role",void 0))),Me&&(Be=Me(en)),nn(()=>{n(13,C=new fA({addClassForElementIndex:ft,focusItemAtIndex:H,getAttributeForElementIndex:(Q,K)=>{var Pe,Qn;return(Qn=(Pe=we()[Q])===null||Pe===void 0?void 0:Pe.getAttr(K))!==null&&Qn!==void 0?Qn:null},getFocusedElementIndex:()=>document.activeElement?we().map(Q=>Q.element).indexOf(document.activeElement):-1,getListItemCount:()=>B.length,getPrimaryTextAtIndex:He,hasCheckboxAtIndex:Q=>{var K,Pe;return(Pe=(K=we()[Q])===null||K===void 0?void 0:K.hasCheckbox)!==null&&Pe!==void 0?Pe:!1},hasRadioAtIndex:Q=>{var K,Pe;return(Pe=(K=we()[Q])===null||K===void 0?void 0:K.hasRadio)!==null&&Pe!==void 0?Pe:!1},isCheckboxCheckedAtIndex:Q=>{var K;const Pe=we()[Q];return(K=(Pe==null?void 0:Pe.hasCheckbox)&&Pe.checked)!==null&&K!==void 0?K:!1},isFocusInsideList:()=>k!=null&&on()!==document.activeElement&&on().contains(document.activeElement),isRootFocused:()=>k!=null&&document.activeElement===on(),listItemAtIndexHasClass:me,notifyAction:Q=>{n(24,I=Q),k!=null&&Qe(on(),"SMUIList:action",{index:Q},void 0,!0)},removeClassForElementIndex:Sn,setAttributeForElementIndex:Xn,setCheckedCheckboxOrRadioAtIndex:(Q,K)=>{we()[Q].checked=K},setTabIndexForListItemChildren:(Q,K)=>{const Pe=we()[Q],Qn="button:not(:disabled), a";Array.prototype.forEach.call(Pe.element.querySelectorAll(Qn),jo=>{jo.setAttribute("tabindex",K)})}}));const L={get element(){return on()},get items(){return B},get typeaheadInProgress(){return C.isTypeaheadInProgress()},typeaheadMatchItem(Q,K){return C.typeaheadMatchItem(Q,K,!0)},getOrderedList:we,focusItemAtIndex:H,addClassForElementIndex:ft,removeClassForElementIndex:Sn,setAttributeForElementIndex:Xn,removeAttributeForElementIndex:D,getAttributeFromElementIndex:se,getPrimaryTextAtIndex:He};return Qe(on(),"SMUIList:mount",L),C.init(),()=>{C.destroy()}}),Yn(()=>{Be&&Be()});function _t(L){B.push(L.detail),Se.set(L.detail.element,L.detail),F&&L.detail.selected&&n(24,I=St(L.detail.element)),L.stopPropagation()}function Te(L){var Q;const K=(Q=L.detail&&B.indexOf(L.detail))!==null&&Q!==void 0?Q:-1;K!==-1&&(B.splice(K,1),B=B,Se.delete(L.detail.element)),L.stopPropagation()}function vt(L){if(R||X){const Q=St(L.target);if(Q!==-1){const K=we()[Q];K&&(R&&!K.checked||X)&&(K.checked=!K.checked,K.activateRipple(),window.requestAnimationFrame(()=>{K.deactivateRipple()}))}}}function we(){return k==null?[]:[...on().children].map(L=>Se.get(L)).filter(L=>L&&L._smui_list_item_accessor)}function H(L){const Q=we()[L];Q&&"focus"in Q.element&&Q.element.focus()}function me(L,Q){var K;const Pe=we()[L];return(K=Pe&&Pe.hasClass(Q))!==null&&K!==void 0?K:!1}function ft(L,Q){const K=we()[L];K&&K.addClass(Q)}function Sn(L,Q){const K=we()[L];K&&K.removeClass(Q)}function Xn(L,Q,K){const Pe=we()[L];Pe&&Pe.addAttr(Q,K)}function D(L,Q){const K=we()[L];K&&K.removeAttr(Q)}function se(L,Q){const K=we()[L];return K?K.getAttr(Q):null}function He(L){var Q;const K=we()[L];return(Q=K&&K.getPrimaryText())!==null&&Q!==void 0?Q:""}function St(L){const Q=l(L,".mdc-deprecated-list-item, .mdc-deprecated-list");return Q&&u(Q,".mdc-deprecated-list-item")?we().map(K=>K==null?void 0:K.element).indexOf(Q):-1}function en(){return C.layout()}function wn(L,Q){return C.setEnabled(L,Q)}function Vo(){return C.isTypeaheadInProgress()}function rs(){return C.getSelectedIndex()}function or(){return C.getFocusedItemIndex()}function on(){return k.getElement()}function Bo(L){re[L?"unshift":"push"](()=>{k=L,n(14,k)})}const ar=L=>C&&C.handleKeydown(L,L.target.classList.contains("mdc-deprecated-list-item"),St(L.target)),Ai=L=>C&&C.handleFocusIn(St(L.target)),Ho=L=>C&&C.handleFocusOut(St(L.target)),xo=L=>C&&C.handleClick(St(L.target),!u(L.target,'input[type="checkbox"], input[type="radio"]'));return t.$$set=L=>{e=M(M({},e),ke(L)),n(23,s=Y(e,i)),"use"in L&&n(0,h=L.use),"class"in L&&n(1,d=L.class),"nonInteractive"in L&&n(2,f=L.nonInteractive),"dense"in L&&n(3,m=L.dense),"textualList"in L&&n(4,y=L.textualList),"avatarList"in L&&n(5,g=L.avatarList),"iconList"in L&&n(6,E=L.iconList),"imageList"in L&&n(7,S=L.imageList),"thumbnailList"in L&&n(8,T=L.thumbnailList),"videoList"in L&&n(9,A=L.videoList),"twoLine"in L&&n(10,V=L.twoLine),"threeLine"in L&&n(11,w=L.threeLine),"vertical"in L&&n(25,p=L.vertical),"wrapFocus"in L&&n(26,b=L.wrapFocus),"singleSelection"in L&&n(27,F=L.singleSelection),"selectedIndex"in L&&n(24,I=L.selectedIndex),"radioList"in L&&n(28,R=L.radioList),"checkList"in L&&n(29,X=L.checkList),"hasTypeahead"in L&&n(30,v=L.hasTypeahead),"component"in L&&n(12,dt=L.component),"$$scope"in L&&n(43,o=L.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&33562624&&C&&C.setVerticalOrientation(p),t.$$.dirty[0]&67117056&&C&&C.setWrapFocus(b),t.$$.dirty[0]&1073750016&&C&&C.setHasTypeahead(v),t.$$.dirty[0]&134225920&&C&&C.setSingleSelection(F),t.$$.dirty[0]&151003136&&C&&F&&rs()!==I&&C.setSelectedIndex(I)},[h,d,f,m,y,g,E,S,T,A,V,w,dt,C,k,x,u,c,$,_t,Te,vt,St,s,I,p,b,F,R,X,v,en,wn,Vo,rs,or,on,r,Bo,ar,Ai,Ho,xo,o]}class CS extends De{constructor(e){super();Ne(this,e,CA,wA,Le,{use:0,class:1,nonInteractive:2,dense:3,textualList:4,avatarList:5,iconList:6,imageList:7,thumbnailList:8,videoList:9,twoLine:10,threeLine:11,vertical:25,wrapFocus:26,singleSelection:27,selectedIndex:24,radioList:28,checkList:29,hasTypeahead:30,component:12,layout:31,setEnabled:32,getTypeaheadInProgress:33,getSelectedIndex:34,getFocusedItemIndex:35,getElement:36},null,[-1,-1])}get layout(){return this.$$.ctx[31]}get setEnabled(){return this.$$.ctx[32]}get getTypeaheadInProgress(){return this.$$.ctx[33]}get getSelectedIndex(){return this.$$.ctx[34]}get getFocusedItemIndex(){return this.$$.ctx[35]}get getElement(){return this.$$.ctx[36]}}function wm(t){let e;return{c(){e=_e("span"),this.h()},l(n){e=Ee(n,"SPAN",{class:!0}),Ie(e).forEach(U),this.h()},h(){tn(e,"class","mdc-deprecated-list-item__ripple")},m(n,i){J(n,e,i)},d(n){n&&U(e)}}}function RA(t){let e,n,i=t[6]&&wm();const s=t[32].default,r=ue(s,t,t[35],null);return{c(){i&&i.c(),e=st(),r&&r.c()},l(o){i&&i.l(o),e=st(),r&&r.l(o)},m(o,a){i&&i.m(o,a),J(o,e,a),r&&r.m(o,a),n=!0},p(o,a){o[6]?i||(i=wm(),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),r&&r.p&&(!n||a[1]&16)&&he(r,s,o,o[35],n?ce(s,o[35],a,null):de(o[35]),null)},i(o){n||(N(r,o),n=!0)},o(o){P(r,o),n=!1},d(o){i&&i.d(o),o&&U(e),r&&r.d(o)}}}function LA(t){let e,n,i;const s=[{use:[...t[5]?[]:[[$i,{ripple:!t[13],unbounded:!1,color:(t[7]||t[0])&&t[4]==null?"primary":t[4],disabled:t[9],addClass:t[21],removeClass:t[22],addStyle:t[23]}]],t[19],...t[1]]},{class:fe(xe({[t[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":t[7],"mdc-deprecated-list-item--selected":t[0],"mdc-deprecated-list-item--disabled":t[9],"mdc-menu-item--selected":!t[20]&&t[8]==="menuitem"&&t[0],"smui-menu-item--non-interactive":t[5]},t[15]))},{style:Object.entries(t[16]).map(Cm).concat([t[3]]).join(" ")},t[20]&&t[7]?{"aria-current":"page"}:{},t[20]?{}:{role:t[8]},!t[20]&&t[8]==="option"?{"aria-selected":t[0]?"true":"false"}:{},!t[20]&&(t[8]==="radio"||t[8]==="checkbox")?{"aria-checked":t[13]&&t[13].checked?"true":"false"}:{},t[20]?{}:{"aria-disabled":t[9]?"true":"false"},{"data-menu-item-skip-restore-focus":t[10]||void 0},{tabindex:t[18]},{href:t[11]},t[17],t[27]];var r=t[12];function o(a){let l={$$slots:{default:[RA]},$$scope:{ctx:a}};for(let u=0;u<s.length;u+=1)l=M(l,s[u]);return{props:l}}return r&&(e=new r(o(t)),t[33](e),e.$on("click",t[24]),e.$on("keydown",t[25]),e.$on("SMUIGenericInput:mount",t[26]),e.$on("SMUIGenericInput:unmount",t[34])),{c(){e&&Je(e.$$.fragment),n=st()},l(a){e&&mt(e.$$.fragment,a),n=st()},m(a,l){e&&Ge(e,a,l),J(a,n,l),i=!0},p(a,l){const u=l[0]&150974399?ge(s,[l[0]&15213235&&{use:[...a[5]?[]:[[$i,{ripple:!a[13],unbounded:!1,color:(a[7]||a[0])&&a[4]==null?"primary":a[4],disabled:a[9],addClass:a[21],removeClass:a[22],addStyle:a[23]}]],a[19],...a[1]]},l[0]&1082277&&{class:fe(xe({[a[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":a[7],"mdc-deprecated-list-item--selected":a[0],"mdc-deprecated-list-item--disabled":a[9],"mdc-menu-item--selected":!a[20]&&a[8]==="menuitem"&&a[0],"smui-menu-item--non-interactive":a[5]},a[15]))},l[0]&65544&&{style:Object.entries(a[16]).map(Cm).concat([a[3]]).join(" ")},l[0]&1048704&&ze(a[20]&&a[7]?{"aria-current":"page"}:{}),l[0]&1048832&&ze(a[20]?{}:{role:a[8]}),l[0]&1048833&&ze(!a[20]&&a[8]==="option"?{"aria-selected":a[0]?"true":"false"}:{}),l[0]&1057024&&ze(!a[20]&&(a[8]==="radio"||a[8]==="checkbox")?{"aria-checked":a[13]&&a[13].checked?"true":"false"}:{}),l[0]&1049088&&ze(a[20]?{}:{"aria-disabled":a[9]?"true":"false"}),l[0]&1024&&{"data-menu-item-skip-restore-focus":a[10]||void 0},l[0]&262144&&{tabindex:a[18]},l[0]&2048&&{href:a[11]},l[0]&131072&&ze(a[17]),l[0]&134217728&&ze(a[27])]):{};if(l[0]&64|l[1]&16&&(u.$$scope={dirty:l,ctx:a}),r!==(r=a[12])){if(e){Ct();const c=e;P(c.$$.fragment,1,0,()=>{We(c,1)}),Rt()}r?(e=new r(o(a)),a[33](e),e.$on("click",a[24]),e.$on("keydown",a[25]),e.$on("SMUIGenericInput:mount",a[26]),e.$on("SMUIGenericInput:unmount",a[34]),Je(e.$$.fragment),N(e.$$.fragment,1),Ge(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(a){i||(e&&N(e.$$.fragment,a),i=!0)},o(a){e&&P(e.$$.fragment,a),i=!1},d(a){t[33](null),a&&U(n),e&&We(e,a)}}}let OA=0;const Cm=([t,e])=>`${t}: ${e};`;function kA(t,e,n){let i;const s=["use","class","style","color","nonInteractive","ripple","activated","role","selected","disabled","skipRestoreFocus","tabindex","inputId","href","component","getPrimaryText","getElement"];let r=Y(e,s),{$$slots:o={},$$scope:a}=e;var l;const u=Ve(ve());let c=()=>{};function h(D){return D===c}let{use:d=[]}=e,{class:f=""}=e,{style:m=""}=e,{color:y=void 0}=e,{nonInteractive:g=(l=jt("SMUI:list:nonInteractive"))!==null&&l!==void 0?l:!1}=e;lt("SMUI:list:nonInteractive",void 0);let{ripple:E=!g}=e,{activated:S=!1}=e,{role:T=jt("SMUI:list:item:role")}=e;lt("SMUI:list:item:role",void 0);let{selected:A=!1}=e,{disabled:V=!1}=e,{skipRestoreFocus:w=!1}=e,{tabindex:p=c}=e,{inputId:b="SMUI-form-field-list-"+OA++}=e,{href:F=void 0}=e,I,R={},X={},v={},k,C,B=jt("SMUI:list:item:nav"),{component:x=B?F?Uf:yi:U0}=e;lt("SMUI:generic:input:props",{id:b}),lt("SMUI:separator:context",void 0),nn(()=>{if(!A&&!g){let se=!0,He=I;for(;He.previousSibling;)if(He=He.previousSibling,He.nodeType===1&&He.classList.contains("mdc-deprecated-list-item")&&!He.classList.contains("mdc-deprecated-list-item--disabled")){se=!1;break}se&&(C=window.requestAnimationFrame(Te))}const D={_smui_list_item_accessor:!0,get element(){return ft()},get selected(){return A},set selected(se){n(0,A=se)},hasClass:z,addClass:Se,removeClass:$,getAttr:Be,addAttr:dt,removeAttr:_t,getPrimaryText:me,get checked(){var se;return(se=k&&k.checked)!==null&&se!==void 0?se:!1},set checked(se){k&&n(13,k.checked=!!se,k)},get hasCheckbox(){return!!(k&&"_smui_checkbox_accessor"in k)},get hasRadio(){return!!(k&&"_smui_radio_accessor"in k)},activateRipple(){k&&k.activateRipple()},deactivateRipple(){k&&k.deactivateRipple()},getValue(){return r.value}};return Qe(ft(),"SMUIListItem:mount",D),()=>{Qe(ft(),"SMUIListItem:unmount",D)}}),Yn(()=>{C&&window.cancelAnimationFrame(C)});function z(D){return D in R?R[D]:ft().classList.contains(D)}function Se(D){R[D]||n(15,R[D]=!0,R)}function $(D){(!(D in R)||R[D])&&n(15,R[D]=!1,R)}function Me(D,se){X[D]!=se&&(se===""||se==null?(delete X[D],n(16,X)):n(16,X[D]=se,X))}function Be(D){var se;return D in v?(se=v[D])!==null&&se!==void 0?se:null:ft().getAttribute(D)}function dt(D,se){v[D]!==se&&n(17,v[D]=se,v)}function _t(D){(!(D in v)||v[D]!=null)&&n(17,v[D]=void 0,v)}function Te(){let D=!0,se=I.getElement();for(;se.nextElementSibling;)if(se=se.nextElementSibling,se.nodeType===1&&se.classList.contains("mdc-deprecated-list-item")){const He=se.attributes.getNamedItem("tabindex");if(He&&He.value==="0"){D=!1;break}}D&&n(18,i=0)}function vt(D){V||Qe(ft(),"SMUI:action",D)}function we(D){const se=D.key==="Enter",He=D.key==="Space";(se||He)&&vt(D)}function H(D){("_smui_checkbox_accessor"in D.detail||"_smui_radio_accessor"in D.detail)&&n(13,k=D.detail)}function me(){var D,se,He;const St=ft(),en=St.querySelector(".mdc-deprecated-list-item__primary-text");if(en)return(D=en.textContent)!==null&&D!==void 0?D:"";const wn=St.querySelector(".mdc-deprecated-list-item__text");return wn?(se=wn.textContent)!==null&&se!==void 0?se:"":(He=St.textContent)!==null&&He!==void 0?He:""}function ft(){return I.getElement()}function Sn(D){re[D?"unshift":"push"](()=>{I=D,n(14,I)})}const Xn=()=>n(13,k=void 0);return t.$$set=D=>{e=M(M({},e),ke(D)),n(27,r=Y(e,s)),"use"in D&&n(1,d=D.use),"class"in D&&n(2,f=D.class),"style"in D&&n(3,m=D.style),"color"in D&&n(4,y=D.color),"nonInteractive"in D&&n(5,g=D.nonInteractive),"ripple"in D&&n(6,E=D.ripple),"activated"in D&&n(7,S=D.activated),"role"in D&&n(8,T=D.role),"selected"in D&&n(0,A=D.selected),"disabled"in D&&n(9,V=D.disabled),"skipRestoreFocus"in D&&n(10,w=D.skipRestoreFocus),"tabindex"in D&&n(28,p=D.tabindex),"inputId"in D&&n(29,b=D.inputId),"href"in D&&n(11,F=D.href),"component"in D&&n(12,x=D.component),"$$scope"in D&&n(35,a=D.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&268444193&&n(18,i=h(p)?!g&&!V&&(A||k&&k.checked)?0:-1:p)},[A,d,f,m,y,g,E,S,T,V,w,F,x,k,I,R,X,v,i,u,B,Se,$,Me,vt,we,H,r,p,b,me,ft,o,Sn,Xn,a]}class NA extends De{constructor(e){super();Ne(this,e,kA,LA,Le,{use:1,class:2,style:3,color:4,nonInteractive:5,ripple:6,activated:7,role:8,selected:0,disabled:9,skipRestoreFocus:10,tabindex:28,inputId:29,href:11,component:12,getPrimaryText:30,getElement:31},null,[-1,-1])}get getPrimaryText(){return this.$$.ctx[30]}get getElement(){return this.$$.ctx[31]}}ct({class:"mdc-deprecated-list-item__text",component:yi});ct({class:"mdc-deprecated-list-item__primary-text",component:yi});ct({class:"mdc-deprecated-list-item__secondary-text",component:yi});function DA(t){let e,n,i,s,r,o;const a=t[8].default,l=ue(a,t,t[7],null);let u=[{class:n=fe({[t[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":t[4]})},t[5]],c={};for(let h=0;h<u.length;h+=1)c=M(c,u[h]);return{c(){e=_e("span"),l&&l.c(),this.h()},l(h){e=Ee(h,"SPAN",{class:!0});var d=Ie(e);l&&l.l(d),d.forEach(U),this.h()},h(){te(e,c)},m(h,d){J(h,e,d),l&&l.m(e,null),t[9](e),s=!0,r||(o=[ee(i=Ye.call(null,e,t[0])),ee(t[3].call(null,e))],r=!0)},p(h,[d]){l&&l.p&&(!s||d&128)&&he(l,a,h,h[7],s?ce(a,h[7],d,null):de(h[7]),null),te(e,c=ge(u,[(!s||d&2&&n!==(n=fe({[h[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":h[4]})))&&{class:n},d&32&&h[5]])),i&&Oe(i.update)&&d&1&&i.update.call(null,h[0])},i(h){s||(N(l,h),s=!0)},o(h){P(l,h),s=!1},d(h){h&&U(e),l&&l.d(h),t[9](null),r=!1,Re(o)}}}function MA(t,e,n){const i=["use","class","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e;const a=Ve(ve());let{use:l=[]}=e,{class:u=""}=e,c,h=jt("SMUI:list:graphic:menu-selection-group");function d(){return c}function f(m){re[m?"unshift":"push"](()=>{c=m,n(2,c)})}return t.$$set=m=>{e=M(M({},e),ke(m)),n(5,s=Y(e,i)),"use"in m&&n(0,l=m.use),"class"in m&&n(1,u=m.class),"$$scope"in m&&n(7,o=m.$$scope)},[l,u,c,a,h,s,d,o,r,f]}class PA extends De{constructor(e){super();Ne(this,e,MA,DA,Le,{use:0,class:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}ct({class:"mdc-deprecated-list-item__meta",component:yi});ct({class:"mdc-deprecated-list-group",component:bn});ct({class:"mdc-deprecated-list-group__subheader",component:F0});const RS=NA,FA=PA;ct({class:"mdc-menu__selection-group-icon",component:FA});/**
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
 */var Xt={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},UA={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var Rm=function(t){rn(e,t);function e(n){var i=t.call(this,Ke(Ke({},e.defaultAdapter),n))||this;return i.animationFrame=0,i.animationTimer=0,i}return Object.defineProperty(e,"strings",{get:function(){return UA},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Xt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var n=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(Xt.OPEN),this.adapter.addClass(Xt.ANIMATE),this.runNextAnimationFrame(function(){n.adapter.addClass(Xt.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(Xt.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(Xt.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(Xt.OPENING)||this.adapter.hasClass(Xt.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(Xt.CLOSING)},e.prototype.handleKeydown=function(n){var i=n.keyCode,s=n.key,r=s==="Escape"||i===27;r&&this.close()},e.prototype.handleTransitionEnd=function(n){var i=Xt.OPENING,s=Xt.CLOSING,r=Xt.OPEN,o=Xt.ANIMATE,a=Xt.ROOT,l=this.isElement(n.target)&&this.adapter.elementHasClass(n.target,a);!l||(this.isClosing()?(this.adapter.removeClass(r),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(o),this.adapter.removeClass(i),this.adapter.removeClass(s))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(n){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(n,0)})},e.prototype.isElement=function(n){return Boolean(n.classList)},e}(cn);/**
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
 */var VA=function(t){rn(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(Rm);function BA(t){let e,n,i,s,r,o;const a=t[15].default,l=ue(a,t,t[14],null);let u=[{class:n=fe(xe({[t[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":t[2]==="dismissible","mdc-drawer--modal":t[2]==="modal","smui-drawer__absolute":t[2]==="modal"&&!t[3]},t[6]))},t[8]],c={};for(let h=0;h<u.length;h+=1)c=M(c,u[h]);return{c(){e=_e("aside"),l&&l.c(),this.h()},l(h){e=Ee(h,"ASIDE",{class:!0});var d=Ie(e);l&&l.l(d),d.forEach(U),this.h()},h(){te(e,c)},m(h,d){J(h,e,d),l&&l.m(e,null),t[16](e),s=!0,r||(o=[ee(i=Ye.call(null,e,t[0])),ee(t[7].call(null,e)),Fe(e,"keydown",t[17]),Fe(e,"transitionend",t[18])],r=!0)},p(h,[d]){l&&l.p&&(!s||d&16384)&&he(l,a,h,h[14],s?ce(a,h[14],d,null):de(h[14]),null),te(e,c=ge(u,[(!s||d&78&&n!==(n=fe(xe({[h[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":h[2]==="dismissible","mdc-drawer--modal":h[2]==="modal","smui-drawer__absolute":h[2]==="modal"&&!h[3]},h[6]))))&&{class:n},d&256&&h[8]])),i&&Oe(i.update)&&d&1&&i.update.call(null,h[0])},i(h){s||(N(l,h),s=!0)},o(h){P(l,h),s=!1},d(h){h&&U(e),l&&l.d(h),t[16](null),r=!1,Re(o)}}}function HA(t,e,n){const i=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e;const{FocusTrap:a}=n0,l=Ve(ve());let{use:u=[]}=e,{class:c=""}=e,{variant:h=void 0}=e,{open:d=!1}=e,{fixed:f=!0}=e,m,y,g={},E=null,S,T=!1;lt("SMUI:list:nav",!0),lt("SMUI:list:item:nav",!0),lt("SMUI:list:wrapFocus",!0);let A=h;nn(()=>{S=new a(m,{skipInitialFocus:!0}),n(4,y=V()),y&&y.init()}),Yn(()=>{y&&y.destroy(),T&&T.removeEventListener("SMUIDrawerScrim:click",F)});function V(){var B,x;T&&T.removeEventListener("SMUIDrawerScrim:click",F),h==="modal"&&(T=(x=(B=m.parentNode)===null||B===void 0?void 0:B.querySelector(".mdc-drawer-scrim"))!==null&&x!==void 0?x:!1,T&&T.addEventListener("SMUIDrawerScrim:click",F));const z=h==="dismissible"?Rm:h==="modal"?VA:void 0;return z?new z({addClass:p,removeClass:b,hasClass:w,elementHasClass:(Se,$)=>Se.classList.contains($),saveFocus:()=>E=document.activeElement,restoreFocus:()=>{E&&"focus"in E&&m.contains(document.activeElement)&&E.focus()},focusActiveNavigationItem:()=>{const Se=m.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");Se&&Se.focus()},notifyClose:()=>{n(9,d=!1),Qe(m,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{n(9,d=!0),Qe(m,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>S.trapFocus(),releaseFocus:()=>S.releaseFocus()}):void 0}function w(B){return B in g?g[B]:X().classList.contains(B)}function p(B){g[B]||n(6,g[B]=!0,g)}function b(B){(!(B in g)||g[B])&&n(6,g[B]=!1,g)}function F(){y&&"handleScrimClick"in y&&y.handleScrimClick()}function I(B){n(9,d=B)}function R(){return d}function X(){return m}function v(B){re[B?"unshift":"push"](()=>{m=B,n(5,m)})}const k=B=>y&&y.handleKeydown(B),C=B=>y&&y.handleTransitionEnd(B);return t.$$set=B=>{e=M(M({},e),ke(B)),n(8,s=Y(e,i)),"use"in B&&n(0,u=B.use),"class"in B&&n(1,c=B.class),"variant"in B&&n(2,h=B.variant),"open"in B&&n(9,d=B.open),"fixed"in B&&n(3,f=B.fixed),"$$scope"in B&&n(14,o=B.$$scope)},t.$$.update=()=>{t.$$.dirty&8212&&A!==h&&(n(13,A=h),y&&y.destroy(),n(6,g={}),n(4,y=V()),y&&y.init()),t.$$.dirty&528&&y&&y.isOpen()!==d&&(d?y.open():y.close())},[u,c,h,f,y,m,g,l,s,d,I,R,X,A,o,r,v,k,C]}class LS extends De{constructor(e){super();Ne(this,e,HA,BA,Le,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}var OS=ct({class:"mdc-drawer-app-content",component:bn}),kS=ct({class:"mdc-drawer__content",component:bn});ct({class:"mdc-drawer__header",component:bn});ct({class:"mdc-drawer__title",component:M0});ct({class:"mdc-drawer__subtitle",component:P0});function xA(t){let e,n,i,s,r,o;const a=t[9].default,l=ue(a,t,t[8],null);let u=[{class:n=fe({[t[1]]:!0,"mdc-card":!0,"mdc-card--outlined":t[2]==="outlined","smui-card--padded":t[3]})},t[6]],c={};for(let h=0;h<u.length;h+=1)c=M(c,u[h]);return{c(){e=_e("div"),l&&l.c(),this.h()},l(h){e=Ee(h,"DIV",{class:!0});var d=Ie(e);l&&l.l(d),d.forEach(U),this.h()},h(){te(e,c)},m(h,d){J(h,e,d),l&&l.m(e,null),t[10](e),s=!0,r||(o=[ee(i=Ye.call(null,e,t[0])),ee(t[5].call(null,e))],r=!0)},p(h,[d]){l&&l.p&&(!s||d&256)&&he(l,a,h,h[8],s?ce(a,h[8],d,null):de(h[8]),null),te(e,c=ge(u,[(!s||d&14&&n!==(n=fe({[h[1]]:!0,"mdc-card":!0,"mdc-card--outlined":h[2]==="outlined","smui-card--padded":h[3]})))&&{class:n},d&64&&h[6]])),i&&Oe(i.update)&&d&1&&i.update.call(null,h[0])},i(h){s||(N(l,h),s=!0)},o(h){P(l,h),s=!1},d(h){h&&U(e),l&&l.d(h),t[10](null),r=!1,Re(o)}}}function jA(t,e,n){const i=["use","class","variant","padded","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e;const a=Ve(ve());let{use:l=[]}=e,{class:u=""}=e,{variant:c="raised"}=e,{padded:h=!1}=e,d;function f(){return d}function m(y){re[y?"unshift":"push"](()=>{d=y,n(4,d)})}return t.$$set=y=>{e=M(M({},e),ke(y)),n(6,s=Y(e,i)),"use"in y&&n(0,l=y.use),"class"in y&&n(1,u=y.class),"variant"in y&&n(2,c=y.variant),"padded"in y&&n(3,h=y.padded),"$$scope"in y&&n(8,o=y.$$scope)},[l,u,c,h,d,a,s,f,o,r,m]}class NS extends De{constructor(e){super();Ne(this,e,jA,xA,Le,{use:0,class:1,variant:2,padded:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}ct({class:"smui-card__content",component:bn});ct({class:"mdc-card__media-content",component:bn});ct({class:"mdc-card__action-buttons",component:bn});ct({class:"mdc-card__action-icons",component:bn});var qA=()=>{let t=2,e=[];function n(s){let r=s.length,o=new Uint8Array(r*t);for(let a=0;a<r;a++){let l=a*t,u=s[a];u>1?u=1:u<-1&&(u=-1),u=u*32768,o[l]=u,o[l+1]=u>>8}e.push(o)}function i(s){let r=e.length?e[0].length:0,o=e.length*r,a=new Uint8Array(44+o),l=new DataView(a.buffer);l.setUint32(0,1380533830,!1),l.setUint32(4,36+o,!0),l.setUint32(8,1463899717,!1),l.setUint32(12,1718449184,!1),l.setUint32(16,16,!0),l.setUint16(20,1,!0),l.setUint16(22,1,!0),l.setUint32(24,s,!0),l.setUint32(28,s*t,!0),l.setUint16(32,t,!0),l.setUint16(34,8*t,!0),l.setUint32(36,1684108385,!1),l.setUint32(40,o,!0);for(let u=0;u<e.length;u++)a.set(e[u],u*r+44);e=[],postMessage(a.buffer,[a.buffer])}onmessage=s=>{s.data[0]==="encode"?n(s.data[1]):s.data[0]==="dump"&&i(s.data[1])}};let Lm=window.AudioContext||window.webkitAudioContext,zA=t=>{let e=t.toString().replace(/^(\(\)\s*=>|function\s*\(\))\s*{/,"").replace(/}$/,""),n=new Blob([e]);return new Worker(URL.createObjectURL(n))},ir=t=>{let e=new Event("error");return e.data=new Error("Wrong state for "+t),e},Ii;class Ei{constructor(e,n=null){this.stream=e,this.config=n,this.state="inactive",this.em=document.createDocumentFragment(),this.encoder=zA(Ei.encoder);let i=this;this.encoder.addEventListener("message",s=>{let r=new Event("dataavailable");r.data=new Blob([s.data],{type:i.mimeType}),i.em.dispatchEvent(r),i.state==="inactive"&&i.em.dispatchEvent(new Event("stop"))})}start(e){if(this.state!=="inactive")return this.em.dispatchEvent(ir("start"));this.state="recording",Ii||(Ii=new Lm(this.config)),this.clone=this.stream.clone(),this.input=Ii.createMediaStreamSource(this.clone),this.processor=Ii.createScriptProcessor(2048,1,1),this.encoder.postMessage(["init",Ii.sampleRate]),this.processor.onaudioprocess=n=>{this.state==="recording"&&this.encoder.postMessage(["encode",n.inputBuffer.getChannelData(0)])},this.input.connect(this.processor),this.processor.connect(Ii.destination),this.em.dispatchEvent(new Event("start")),e&&(this.slicing=setInterval(()=>{this.state==="recording"&&this.requestData()},e))}stop(){return this.state==="inactive"?this.em.dispatchEvent(ir("stop")):(this.requestData(),this.state="inactive",this.clone.getTracks().forEach(e=>{e.stop()}),this.processor.disconnect(),this.input.disconnect(),clearInterval(this.slicing))}pause(){return this.state!=="recording"?this.em.dispatchEvent(ir("pause")):(this.state="paused",this.em.dispatchEvent(new Event("pause")))}resume(){return this.state!=="paused"?this.em.dispatchEvent(ir("resume")):(this.state="recording",this.em.dispatchEvent(new Event("resume")))}requestData(){return this.state==="inactive"?this.em.dispatchEvent(ir("requestData")):this.encoder.postMessage(["dump",Ii.sampleRate])}addEventListener(...e){this.em.addEventListener(...e)}removeEventListener(...e){this.em.removeEventListener(...e)}dispatchEvent(...e){this.em.dispatchEvent(...e)}}Ei.prototype.mimeType="audio/wav";Ei.isTypeSupported=t=>Ei.prototype.mimeType===t;Ei.notSupported=!navigator.mediaDevices||!Lm;Ei.encoder=qA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="firebasestorage.googleapis.com",km="storageBucket",GA=2*60*1e3,WA=10*60*1e3;class nt extends Zn{constructor(e,n){super(uu(e),`Firebase Storage: ${n} (${uu(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,nt.prototype)}_codeEquals(e){return uu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function uu(t){return"storage/"+t}function cu(){const t="An unknown error occurred, please check the error payload for server response.";return new nt("unknown",t)}function KA(t){return new nt("object-not-found","Object '"+t+"' does not exist.")}function XA(t){return new nt("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function QA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new nt("unauthenticated",t)}function YA(){return new nt("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function JA(t){return new nt("unauthorized","User does not have permission to access '"+t+"'.")}function ZA(){return new nt("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function $A(){return new nt("canceled","User canceled the upload/download.")}function e1(t){return new nt("invalid-url","Invalid URL '"+t+"'.")}function t1(t){return new nt("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function n1(){return new nt("no-default-bucket","No default bucket found. Did you set the '"+km+"' property when initializing the app?")}function i1(){return new nt("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function s1(){return new nt("no-download-url","The given file does not have any download URLs.")}function hu(t){return new nt("invalid-argument",t)}function Nm(){return new nt("app-deleted","The Firebase app was deleted.")}function r1(t){return new nt("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function sr(t,e){return new nt("invalid-format","String does not match format '"+t+"': "+e)}function rr(t){throw new nt("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=$t.makeFromUrl(e,n)}catch{return new $t(e,"")}if(i.path==="")return i;throw t1(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(A){A.path_=decodeURIComponent(A.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${s}/o${d}`,"i"),m={bucket:1,path:3},y=n===Om?"(?:storage.googleapis.com|storage.cloud.google.com)":n,g="([^?#]*)",E=new RegExp(`^https?://${y}/${s}/${g}`,"i"),T=[{regex:a,indices:l,postModify:r},{regex:f,indices:m,postModify:u},{regex:E,indices:{bucket:1,path:2},postModify:u}];for(let A=0;A<T.length;A++){const V=T[A],w=V.regex.exec(e);if(w){const p=w[V.indices.bucket];let b=w[V.indices.path];b||(b=""),i=new $t(p,b),V.postModify(i);break}}if(i==null)throw e1(e);return i}}class o1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...g){u||(u=!0,e.apply(null,g))}function h(g){s=setTimeout(()=>{s=null,t(f,l())},g)}function d(){r&&clearTimeout(r)}function f(g,...E){if(u){d();return}if(g){d(),c.call(null,g,...E);return}if(l()||o){d(),c.call(null,g,...E);return}i<64&&(i*=2);let T;a===1?(a=2,T=0):T=(i+Math.random())*1e3,h(T)}let m=!1;function y(g){m||(m=!0,d(),!u&&(s!==null?(g||(a=2),clearTimeout(s),h(0)):g||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},n),y}function l1(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t){return t!==void 0}function c1(t){return typeof t=="object"&&!Array.isArray(t)}function du(t){return typeof t=="string"||t instanceof String}function Dm(t){return fu()&&t instanceof Blob}function fu(){return typeof Blob!="undefined"}function Mm(t,e,n,i){if(i<e)throw hu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw hu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t,e,n){let i=e;return n==null&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function Pm(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(bi||(bi={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e,n,i,s,r,o,a,l,u,c,h){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,f)=>{this.resolve_=d,this.reject_=f,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Fo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===bi.NO_ERROR,l=r.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=r.getErrorCode()===bi.ABORT;i(!1,new Fo(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;i(!0,new Fo(u,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());u1(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=cu();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Nm():$A();o(l)}else{const l=ZA();o(l)}};this.canceled_?n(!1,new Fo(!1,null,!0)):this.backoffId_=a1(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&l1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,r=this.additionalRetryCodes_.indexOf(e)!==-1;return n||s||r}}class Fo{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function d1(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function f1(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function m1(t,e){e&&(t["X-Firebase-GMPID"]=e)}function p1(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function g1(t,e,n,i,s,r){const o=Pm(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return m1(l,e),d1(l,n),f1(l,r),p1(l,i),new h1(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function _1(...t){const e=y1();if(e!==void 0){const n=new e;for(let i=0;i<t.length;i++)n.append(t[i]);return n.getBlob()}else{if(fu())return new Blob(t);throw new nt("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function v1(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function I1(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class pu{constructor(e,n){this.data=e,this.contentType=n||null}}function E1(t,e){switch(t){case dn.RAW:return new pu(Fm(e));case dn.BASE64:case dn.BASE64URL:return new pu(Um(t,e));case dn.DATA_URL:return new pu(T1(e),A1(e))}throw cu()}function Fm(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const r=i,o=t.charCodeAt(++n);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)==56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function b1(t){let e;try{e=decodeURIComponent(t)}catch{throw sr(dn.DATA_URL,"Malformed data URL.")}return Fm(e)}function Um(t,e){switch(t){case dn.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw sr(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case dn.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw sr(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=I1(e)}catch{throw sr(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class Vm{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw sr(dn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=S1(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-";base64".length):i),this.rest=e.substring(e.indexOf(",")+1)}}function T1(t){const e=new Vm(t);return e.base64?Um(dn.BASE64,e.rest):b1(e.rest)}function A1(t){return new Vm(t).contentType}function S1(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){let i=0,s="";Dm(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Dm(this.data_)){const i=this.data_,s=v1(i,e,n);return s===null?null:new Kn(s)}else{const i=new Uint8Array(this.data_.buffer,e,n-e);return new Kn(i,!0)}}static getBlob(...e){if(fu()){const n=e.map(i=>i instanceof Kn?i.data_:i);return new Kn(_1.apply(null,n))}else{const n=e.map(o=>du(o)?E1(dn.RAW,o).data:o.data_);let i=0;n.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[r++]=o[a]}),new Kn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t){let e;try{e=JSON.parse(t)}catch{return null}return c1(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function C1(t,e){const n=e.split("/").filter(i=>i.length>0).join("/");return t.length===0?n:t+"/"+n}function Hm(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(t,e){return e}class xt{constructor(e,n,i,s){this.server=e,this.local=n||e,this.writable=!!i,this.xform=s||R1}}let Uo=null;function L1(t){return!du(t)||t.length<2?t:Hm(t)}function xm(){if(Uo)return Uo;const t=[];t.push(new xt("bucket")),t.push(new xt("generation")),t.push(new xt("metageneration")),t.push(new xt("name","fullPath",!0));function e(r,o){return L1(o)}const n=new xt("name");n.xform=e,t.push(n);function i(r,o){return o!==void 0?Number(o):o}const s=new xt("size");return s.xform=i,t.push(s),t.push(new xt("timeCreated")),t.push(new xt("updated")),t.push(new xt("md5Hash",null,!0)),t.push(new xt("cacheControl",null,!0)),t.push(new xt("contentDisposition",null,!0)),t.push(new xt("contentEncoding",null,!0)),t.push(new xt("contentLanguage",null,!0)),t.push(new xt("contentType",null,!0)),t.push(new xt("metadata","customMetadata",!0)),Uo=t,Uo}function O1(t,e){function n(){const i=t.bucket,s=t.fullPath,r=new $t(i,s);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function k1(t,e,n){const i={};i.type="file";const s=n.length;for(let r=0;r<s;r++){const o=n[r];i[o.local]=o.xform(i,e[o.server])}return O1(i,t),i}function jm(t,e,n){const i=Bm(e);return i===null?null:k1(t,i,n)}function N1(t,e,n,i){const s=Bm(e);if(s===null||!du(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),f=mu(d,n,i),m=Pm({alt:"media",token:u});return f+m})[0]}function D1(t,e){const n={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class qm{constructor(e,n,i,s){this.url=e,this.method=n,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t){if(!t)throw cu()}function M1(t,e){function n(i,s){const r=jm(t,s,e);return zm(r!==null),r}return n}function P1(t,e){function n(i,s){const r=jm(t,s,e);return zm(r!==null),N1(r,s,t.host,t._protocol)}return n}function Gm(t){function e(n,i){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=YA():s=QA():n.getStatus()===402?s=XA(t.bucket):n.getStatus()===403?s=JA(t.path):s=i,s.serverResponse=i.serverResponse,s}return e}function F1(t){const e=Gm(t);function n(i,s){let r=e(i,s);return i.getStatus()===404&&(r=KA(t.path)),r.serverResponse=s.serverResponse,r}return n}function U1(t,e,n){const i=e.fullServerUrl(),s=mu(i,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new qm(s,r,P1(t,n),o);return a.errorHandler=F1(e),a}function V1(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function B1(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=V1(null,e)),i}function H1(t,e,n,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let A=0;A<2;A++)T=T+Math.random().toString().slice(2);return T}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=B1(e,i,s),c=D1(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=Kn.getBlob(h,i,d);if(f===null)throw i1();const m={name:u.fullPath},y=mu(r,t.host,t._protocol),g="POST",E=t.maxUploadRetryTime,S=new qm(y,g,M1(t,n),E);return S.urlParams=m,S.headers=o,S.body=f.uploadData(),S.errorHandler=Gm(e),S}class x1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=bi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=bi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=bi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,s){if(this.sent_)throw rr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const r in s)s.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,s[r].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw rr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw rr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw rr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw rr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class j1 extends x1{initXhr(){this.xhr_.responseType="text"}}function Wm(){return new j1}/**
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
 */class Ti{constructor(e,n){this._service=e,n instanceof $t?this._location=n:this._location=$t.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ti(e,n)}get root(){const e=new $t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Hm(this._location.path)}get storage(){return this._service}get parent(){const e=w1(this._location.path);if(e===null)return null;const n=new $t(this._location.bucket,e);return new Ti(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw r1(e)}}function q1(t,e,n){t._throwIfRoot("uploadBytes");const i=H1(t.storage,t._location,xm(),new Kn(e,!0),n);return t.storage.makeRequestWithTokens(i,Wm).then(s=>({metadata:s,ref:t}))}function z1(t){t._throwIfRoot("getDownloadURL");const e=U1(t.storage,t._location,xm());return t.storage.makeRequestWithTokens(e,Wm).then(n=>{if(n===null)throw s1();return n})}function G1(t,e){const n=C1(t._location.path,e),i=new $t(t._location.bucket,n);return new Ti(t.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(t){return/^[A-Za-z]+:\/\//.test(t)}function K1(t,e){return new Ti(t,e)}function Km(t,e){if(t instanceof gu){const n=t;if(n._bucket==null)throw n1();const i=new Ti(n,n._bucket);return e!=null?Km(i,e):i}else return e!==void 0?G1(t,e):t}function X1(t,e){if(e&&W1(e)){if(t instanceof gu)return K1(t,e);throw hu("To use ref(service, url), the first argument must be a Storage instance.")}else return Km(t,e)}function Xm(t,e){const n=e==null?void 0:e[km];return n==null?null:$t.makeFromBucketSpec(n,t)}class gu{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=Om,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=GA,this._maxUploadRetryTime=WA,this._requests=new Set,s!=null?this._bucket=$t.makeFromBucketSpec(s,this._host):this._bucket=Xm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$t.makeFromBucketSpec(this._url,e):this._bucket=Xm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Mm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Mm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ti(this,e)}_makeRequest(e,n,i,s){if(this._deleted)return new o1(Nm());{const r=g1(e,this._appId,i,s,n,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const Qm="@firebase/storage",Ym="0.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="storage";function DS(t,e,n){return t=et(t),q1(t,e,n)}function MS(t){return t=et(t),z1(t)}function PS(t,e){return t=et(t),X1(t,e)}function FS(t=ta(),e){return t=et(t),gr(t,Jm).getImmediate({identifier:e})}function Q1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new gu(n,i,s,e,Li)}function Y1(){Ri(new $n(Jm,Q1,"PUBLIC").setMultipleInstances(!0)),an(Qm,Ym,""),an(Qm,Ym,"esm2017")}Y1();export{SS as $,nn as A,M as B,Yp as C,Mp as D,aS as E,cS as F,ue as G,he as H,de as I,ce as J,wt as K,Mt as L,dS as M,gS as N,fS as O,_S as P,oS as Q,yS as R,De as S,hS as T,Rn as U,TS as V,AS as W,re as X,Ln as Y,lS as Z,uS as _,Ie as a,wS as a0,CS as a1,$1 as a2,RS as a3,LS as a4,OS as a5,kS as a6,tS as a7,NS as a8,Z1 as a9,Yn as aa,IS as ab,ee as ac,rS as ad,sS as ae,mS as af,pS as ag,Wp as ah,ES as ai,bS as aj,Ei as ak,iS as al,xp as am,eS as an,Fe as ao,Oe as ap,Re as aq,FS as ar,PS as as,DS as at,MS as au,vS as av,tn as b,Ee as c,U as d,_e as e,J as f,Si as g,os as h,Ne as i,Je as j,Ze as k,st as l,mt as m,$e as n,Ge as o,ge as p,ze as q,Ct as r,Le as s,Cn as t,P as u,We as v,Rt as w,N as x,lt as y,nS as z};

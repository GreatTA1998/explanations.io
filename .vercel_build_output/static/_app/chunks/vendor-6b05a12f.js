var Fm=Object.defineProperty;var Kl=Object.getOwnPropertySymbols;var Um=Object.prototype.hasOwnProperty,Vm=Object.prototype.propertyIsEnumerable;var Xl=(t,e,n)=>e in t?Fm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,je=(t,e)=>{for(var n in e||(e={}))Um.call(e,n)&&Xl(t,n,e[n]);if(Kl)for(var n of Kl(e))Vm.call(e,n)&&Xl(t,n,e[n]);return t};function Dt(){}function M(t,e){for(const n in e)t[n]=e[n];return t}function Ql(t){return t()}function Yl(){return Object.create(null)}function Le(t){t.forEach(Ql)}function Re(t){return typeof t=="function"}function Oe(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Qs;function $T(t,e){return Qs||(Qs=document.createElement("a")),Qs.href=e,t===Qs.href}function Hm(t){return Object.keys(t).length===0}function Bm(t,...e){if(t==null)return Dt;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function jm(t,e,n){t.$$.on_destroy.push(Bm(e,n))}function ue(t,e,n,i){if(t){const s=Jl(t,e,n,i);return t[0](s)}}function Jl(t,e,n,i){return t[1]&&i?M(n.ctx.slice(),t[1](i(e))):n.ctx}function ce(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|s[a];return r}return e.dirty|s}return e.dirty}function he(t,e,n,i,s,r){if(s){const o=Jl(e,n,i,r);t.p(o,s)}}function de(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ke(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Y(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function qm(t){const e={};for(const n in t)e[n]=!0;return e}function xm(t,e,n){return t.set(n),e}function ee(t){return t&&Re(t.destroy)?t.destroy:Dt}let Ys=!1;function Gm(){Ys=!0}function zm(){Ys=!1}function Wm(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Km(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const u=e[c];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,u=(s>0&&e[n[s]].claim_order<=c?s+1:Wm(1,s,d=>e[n[d]].claim_order,c))-1;i[l]=n[u]+1;const h=u+1;n[h]=l,s=Math.max(h,s)}const r=[],o=[];let a=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(r.push(e[l-1]);a>=l;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);r.reverse(),o.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<o.length;l++){for(;c<r.length&&o[l].claim_order>=r[c].claim_order;)c++;const u=c<r.length?r[c]:null;t.insertBefore(o[l],u)}}function At(t,e){if(Ys){for(Km(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function J(t,e,n){Ys&&!n?At(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode.removeChild(t)}function eA(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ve(t){return document.createElement(t)}function Xm(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function bn(t){return document.createTextNode(t)}function Ze(){return bn(" ")}function nt(){return bn("")}function Fe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Qm(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ym(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Zt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function te(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Zt(t,i,e[i])}function Ie(t){return Array.from(t.childNodes)}function Jm(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Zl(t,e,n,i,s=!1){Jm(t);const r=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,s||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function $l(t,e,n,i){return Zl(t,s=>s.nodeName===e,s=>{const r=[];for(let o=0;o<s.attributes.length;o++){const a=s.attributes[o];n[a.name]||r.push(a.name)}r.forEach(o=>s.removeAttribute(o))},()=>i(e))}function Ee(t,e,n){return $l(t,e,n,ve)}function tA(t,e,n){return $l(t,e,n,Xm)}function mi(t,e){return Zl(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>bn(e),!0)}function $e(t){return mi(t," ")}function Qi(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function eu(t,e){t.value=e==null?"":e}function nA(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}function Zm(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}let Js;function Zs(t){Js=t}function _e(){if(!Js)throw new Error("Function called outside component initialization");return Js}function $t(t){_e().$$.on_mount.push(t)}function iA(t){_e().$$.after_update.push(t)}function Gn(t){_e().$$.on_destroy.push(t)}function sA(){const t=_e();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=Zm(e,n);i.slice().forEach(r=>{r.call(t,s)})}}}function ot(t,e){_e().$$.context.set(t,e)}function Ht(t){return _e().$$.context.get(t)}function Yi(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const Ji=[],re=[],$s=[],Ro=[],tu=Promise.resolve();let ko=!1;function nu(){ko||(ko=!0,tu.then(iu))}function $m(){return nu(),tu}function No(t){$s.push(t)}function Tn(t){Ro.push(t)}let Do=!1;const Mo=new Set;function iu(){if(!Do){Do=!0;do{for(let t=0;t<Ji.length;t+=1){const e=Ji[t];Zs(e),ep(e.$$)}for(Zs(null),Ji.length=0;re.length;)re.pop()();for(let t=0;t<$s.length;t+=1){const e=$s[t];Mo.has(e)||(Mo.add(e),e())}$s.length=0}while(Ji.length);for(;Ro.length;)Ro.pop()();ko=!1,Do=!1,Mo.clear()}}function ep(t){if(t.fragment!==null){t.update(),Le(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(No)}}const er=new Set;let zn;function St(){zn={r:0,c:[],p:zn}}function Ct(){zn.r||Le(zn.c),zn=zn.p}function N(t,e){t&&t.i&&(er.delete(t),t.i(e))}function P(t,e,n,i){if(t&&t.o){if(er.has(t))return;er.add(t),zn.c.push(()=>{er.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const tp=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function rA(t,e){P(t,1,1,()=>{e.delete(t.key)})}function oA(t,e,n,i,s,r,o,a,l,c,u,h){let d=t.length,f=r.length,m=d;const g={};for(;m--;)g[t[m].key]=m;const y=[],b=new Map,S=new Map;for(m=f;m--;){const C=h(s,r,m),p=n(C);let E=o.get(p);E?i&&E.p(C,e):(E=c(p,C),E.c()),b.set(p,y[m]=E),p in g&&S.set(p,Math.abs(m-g[p]))}const T=new Set,A=new Set;function H(C){N(C,1),C.m(a,u),o.set(C.key,C),u=C.first,f--}for(;d&&f;){const C=y[f-1],p=t[d-1],E=C.key,F=p.key;C===p?(u=C.first,d--,f--):b.has(F)?!o.has(E)||T.has(E)?H(C):A.has(F)?d--:S.get(E)>S.get(F)?(A.add(E),H(C)):(T.add(F),d--):(l(p,o),d--)}for(;d--;){const C=t[d];b.has(C.key)||l(C,o)}for(;f;)H(y[f-1]);return y}function ge(t,e){const n={},i={},s={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)s[l]||(n[l]=a[l],s[l]=1);t[r]=a}else for(const l in o)s[l]=1}for(const o in i)o in n||(n[o]=void 0);return n}function Ge(t){return typeof t=="object"&&t!==null?t:{}}function An(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Je(t){t&&t.c()}function dt(t,e){t&&t.l(e)}function ze(t,e,n,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=t.$$;s&&s.m(e,n),i||No(()=>{const l=r.map(Ql).filter(Re);o?o.push(...l):Le(l),t.$$.on_mount=[]}),a.forEach(No)}function We(t,e){const n=t.$$;n.fragment!==null&&(Le(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function np(t,e){t.$$.dirty[0]===-1&&(Ji.push(t),nu(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ne(t,e,n,i,s,r,o,a=[-1]){const l=Js;Zs(t);const c=t.$$={fragment:null,ctx:null,props:r,update:Dt,not_equal:s,bound:Yl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Yl(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(h,d,...f)=>{const m=f.length?f[0]:d;return c.ctx&&s(c.ctx[h],c.ctx[h]=m)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](m),u&&np(t,h)),d}):[],c.update(),u=!0,Le(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){Gm();const h=Ie(e.target);c.fragment&&c.fragment.l(h),h.forEach(U)}else c.fragment&&c.fragment.c();e.intro&&N(t.$$.fragment),ze(t,e.target,e.anchor,e.customElement),zm(),iu()}Zs(l)}class De{$destroy(){We(this,1),this.$destroy=Dt}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Hm(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const pi=[];function ip(t,e=Dt){let n;const i=new Set;function s(a){if(Oe(t,a)&&(t=a,n)){const l=!pi.length;for(const c of i)c[1](),pi.push(c,t);if(l){for(let c=0;c<pi.length;c+=2)pi[c][0](pi[c+1]);pi.length=0}}}function r(a){s(a(t))}function o(a,l=Dt){const c=[a,l];return i.add(c),i.size===1&&(n=e(s)||Dt),a(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:s,update:r,subscribe:o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const sp=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)==55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)==56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},rp=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},op={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(n[u],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw Error();const d=r<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const m=c<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ap=function(t){try{return op.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function su(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function ru(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ou(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function up(){return ft().indexOf("Electron/")>=0}function au(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cp(){return ft().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="FirebaseError";class gi extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=hp,Object.setPrototypeOf(this,gi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zi.prototype.create)}}class Zi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?dp(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new gi(s,a,i)}}function dp(t,e){return t.replace(fp,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const fp=/\{\$([^}]+)}/g;function mp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tr(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(lu(r)&&lu(o)){if(!tr(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function lu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function pp(t,e){const n=new gp(t,e);return n.subscribe.bind(n)}class gp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");yp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Po),s.error===void 0&&(s.error=Po),s.complete===void 0&&(s.complete=Po);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Po(){}/**
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
 */function wt(t){return t&&t._delegate?t._delegate:t}class vi{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wn="[DEFAULT]";/**
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
 */class vp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new lp;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ip(e))try{this.getOrInitializeService({instanceIdentifier:Wn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wn){return this.instances.has(e)}getOptions(e=Wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:_p(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Wn){return this.component?this.component.multipleInstances?e:Wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _p(t){return t===Wn?void 0:t}function Ip(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ep{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const bp={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},Tp=be.INFO,Ap={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},Sp=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Ap[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fo{constructor(e){this.name=e,this._logLevel=Tp,this._logHandler=Sp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}/**
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
 */class Cp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wp(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function wp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uo="@firebase/app",uu="0.7.9";/**
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
 */const Vo=new Fo("@firebase/app"),Lp="@firebase/app-compat",Op="@firebase/analytics-compat",Rp="@firebase/analytics",kp="@firebase/app-check-compat",Np="@firebase/app-check",Dp="@firebase/auth",Mp="@firebase/auth-compat",Pp="@firebase/database",Fp="@firebase/database-compat",Up="@firebase/functions",Vp="@firebase/functions-compat",Hp="@firebase/installations",Bp="@firebase/installations-compat",jp="@firebase/messaging",qp="@firebase/messaging-compat",xp="@firebase/performance",Gp="@firebase/performance-compat",zp="@firebase/remote-config",Wp="@firebase/remote-config-compat",Kp="@firebase/storage",Xp="@firebase/storage-compat",Qp="@firebase/firestore",Yp="@firebase/firestore-compat",Jp="firebase",Zp="9.5.0";/**
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
 */const cu="[DEFAULT]",$p={[Uo]:"fire-core",[Lp]:"fire-core-compat",[Rp]:"fire-analytics",[Op]:"fire-analytics-compat",[Np]:"fire-app-check",[kp]:"fire-app-check-compat",[Dp]:"fire-auth",[Mp]:"fire-auth-compat",[Pp]:"fire-rtdb",[Fp]:"fire-rtdb-compat",[Up]:"fire-fn",[Vp]:"fire-fn-compat",[Hp]:"fire-iid",[Bp]:"fire-iid-compat",[jp]:"fire-fcm",[qp]:"fire-fcm-compat",[xp]:"fire-perf",[Gp]:"fire-perf-compat",[zp]:"fire-rc",[Wp]:"fire-rc-compat",[Kp]:"fire-gcs",[Xp]:"fire-gcs-compat",[Qp]:"fire-fst",[Yp]:"fire-fst-compat","fire-js":"fire-js",[Jp]:"fire-js-all"};/**
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
 */const nr=new Map,Ho=new Map;function eg(t,e){try{t.container.addComponent(e)}catch(n){Vo.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $i(t){const e=t.name;if(Ho.has(e))return Vo.debug(`There were multiple attempts to register component ${e}.`),!1;Ho.set(e,t);for(const n of nr.values())eg(n,t);return!0}function Bo(t,e){return t.container.getProvider(e)}/**
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
 */const tg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},ir=new Zi("app","Firebase",tg);/**
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
 */class ng{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
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
 */const es=Zp;function aA(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:cu,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw ir.create("bad-app-name",{appName:String(i)});const s=nr.get(i);if(s){if(tr(t,s.options)&&tr(n,s.config))return s;throw ir.create("duplicate-app",{appName:i})}const r=new Ep(i);for(const a of Ho.values())r.addComponent(a);const o=new ng(t,n,r);return nr.set(i,o),o}function hu(t=cu){const e=nr.get(t);if(!e)throw ir.create("no-app",{appName:t});return e}function Sn(t,e,n){var i;let s=(i=$p[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vo.warn(a.join(" "));return}$i(new vi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function ig(t){$i(new vi("platform-logger",e=>new Cp(e),"PRIVATE")),Sn(Uo,uu,t),Sn(Uo,uu,"esm2017"),Sn("fire-js","")}ig("");var sg="firebase",rg="9.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(sg,rg,"app");/*! *****************************************************************************
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
***************************************************************************** */var jo=function(t,e){return jo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])},jo(t,e)};function en(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");jo(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var Ke=function(){return Ke=Object.assign||function(e){for(var n,i=1,s=arguments.length;i<s;i++){n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ke.apply(this,arguments)};function qo(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function an(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function du(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const og=du,fu=new Zi("auth","Firebase",du());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=new Fo("@firebase/auth");function sr(t,...e){mu.logLevel<=be.ERROR&&mu.error(`Auth (${es}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,...e){throw xo(t,...e)}function Kt(t,...e){return xo(t,...e)}function ag(t,e,n){const i=Object.assign(Object.assign({},og()),{[e]:n});return new Zi("auth","Firebase",i).create(e,{appName:t.name})}function xo(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return fu.create(t,...e)}function z(t,e,...n){if(!t)throw xo(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sr(e),new Error(e)}function cn(t,e){t||un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=new Map;function hn(t){cn(t instanceof Function,"Expected a class definition");let e=pu.get(t);return e?(cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pu.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t,e){const n=Bo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(tr(r,e!=null?e:{}))return s;ln(s,"already-initialized")}return n.initialize({options:e})}function ug(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(hn);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gu(){return yu()==="http:"||yu()==="https:"}function yu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gu()||ru()||"connection"in navigator)?navigator.onLine:!0}function hg(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n){this.shortDelay=e,this.longDelay=n,cn(n>e,"Short delay should be less than long delay!"),this.isMobile=su()||ou()}get(){return cg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t,e){cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=new ts(3e4,6e4);function Kn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cn(t,e,n,i,s={}){return vu(t,s,()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=yi(Object.assign({key:t.config.apiKey},o)).slice(1),l=new(Wo.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&l.set("X-Firebase-Locale",t.languageCode),Wo.fetch()(_u(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function vu(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},dg),e);try{const s=new mg(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw or(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw or(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw or(t,"email-already-in-use",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ag(t,u,c);ln(t,u)}}catch(s){if(s instanceof gi)throw s;ln(t,"network-request-failed")}}async function rr(t,e,n,i,s={}){const r=await Cn(t,e,n,i,s);return"mfaPendingCredential"in r&&ln(t,"multi-factor-auth-required",{_serverResponse:r}),r}function _u(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?zo(t.config,s):`${t.config.apiScheme}://${s}`}class mg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Kt(this.auth,"timeout")),fg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function or(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Kt(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pg(t,e){return Cn(t,"POST","/v1/accounts:delete",e)}async function gg(t,e){return Cn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yg(t,e=!1){const n=wt(t),i=await n.getIdToken(e),s=Xo(i);z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:ns(Ko(s.auth_time)),issuedAtTime:ns(Ko(s.iat)),expirationTime:ns(Ko(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ko(t){return Number(t)*1e3}function Xo(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return sr("JWT malformed, contained fewer than 3 sections"),null;try{const s=ap(n);return s?JSON.parse(s):(sr("Failed to decode base64 JWT payload"),null)}catch(s){return sr("Caught error parsing JWT payload as JSON",s),null}}function vg(t){const e=Xo(t);return z(e,"internal-error"),z(typeof e.exp!="undefined","internal-error"),z(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof gi&&_g(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function _g({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ns(this.lastLoginAt),this.creationTime=ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ar(t){var e;const n=t.auth,i=await t.getIdToken(),s=await is(t,gg(n,{idToken:i}));z(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?Tg(r.providerUserInfo):[],a=bg(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a==null?void 0:a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Iu(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Eg(t){const e=wt(t);await ar(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bg(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Tg(t){return t.map(e=>{var{providerId:n}=e,i=qo(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(t,e){const n=await vu(t,{},()=>{const i=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=_u(t,s,"/v1/token",`key=${r}`);return Wo.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken!="undefined","internal-error"),z(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):vg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Ag(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new ss;return i&&(z(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(z(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ss,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,e){z(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Xn{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=qo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Ig(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new Iu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await is(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yg(this,e)}reload(){return Eg(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ar(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await is(this,pg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:A,isAnonymous:H,providerData:C,stsTokenManager:p}=n;z(T&&p,e,"internal-error");const E=ss.fromJSON(this.name,p);z(typeof T=="string",e,"internal-error"),wn(h,e.name),wn(d,e.name),z(typeof A=="boolean",e,"internal-error"),z(typeof H=="boolean",e,"internal-error"),wn(f,e.name),wn(m,e.name),wn(g,e.name),wn(y,e.name),wn(b,e.name),wn(S,e.name);const F=new Xn({uid:T,auth:e,email:d,emailVerified:A,displayName:h,isAnonymous:H,photoURL:m,phoneNumber:f,tenantId:g,stsTokenManager:E,createdAt:b,lastLoginAt:S});return C&&Array.isArray(C)&&(F.providerData=C.map(I=>Object.assign({},I))),y&&(F._redirectEventId=y),F}static async _fromIdTokenResponse(e,n,i=!1){const s=new ss;s.updateFromServerResponse(n);const r=new Xn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ar(r),r}}/**
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
 */class Eu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Eu.type="NONE";const bu=Eu;/**
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
 */function lr(t,e,n){return`firebase:${t}:${e}:${n}`}class _i{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=lr(this.userKey,s.apiKey,r),this.fullPersistenceKey=lr("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new _i(hn(bu),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||hn(bu);const o=lr(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Xn._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new _i(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new _i(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Au(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lu(e))return"Blackberry";if(Ou(e))return"Webos";if(Qo(e))return"Safari";if((e.includes("chrome/")||Su(e))&&!e.includes("edge/"))return"Chrome";if(wu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Au(t=ft()){return/firefox\//i.test(t)}function Qo(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Su(t=ft()){return/crios\//i.test(t)}function Cu(t=ft()){return/iemobile/i.test(t)}function wu(t=ft()){return/android/i.test(t)}function Lu(t=ft()){return/blackberry/i.test(t)}function Ou(t=ft()){return/webos/i.test(t)}function ur(t=ft()){return/iphone|ipad|ipod/i.test(t)}function Sg(t=ft()){var e;return ur(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function Cg(){return au()&&document.documentMode===10}function Ru(t=ft()){return ur(t)||wu(t)||Ou(t)||Lu(t)||/windows phone/i.test(t)||Cu(t)}function wg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t,e=[]){let n;switch(t){case"Browser":n=Tu(ft());break;case"Worker":n=`${Tu(ft())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nu(this),this.idTokenSubscription=new Nu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var i,s;this._deleted||(this.persistenceManager=await _i.create(this,e),!this._deleted&&(((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===r)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ar(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?wt(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await _i.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ku(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function rs(t){return wt(t)}class Nu{constructor(e){this.auth=e,this.observer=null,this.addObserver=pp(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(t,e){return rr(t,"POST","/v1/accounts:signInWithIdp",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="http://localhost";class Qn extends Yo{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=qo(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Qn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ii(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Ii(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ii(e,n)}buildRequest(){const e={requestUri:Og,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rg(t,e){return Cn(t,"POST","/v1/accounts:sendVerificationCode",Kn(t,e))}async function kg(t,e){return rr(t,"POST","/v1/accounts:signInWithPhoneNumber",Kn(t,e))}async function Ng(t,e){const n=await rr(t,"POST","/v1/accounts:signInWithPhoneNumber",Kn(t,e));if(n.temporaryProof)throw or(t,"account-exists-with-different-credential",n);return n}const Dg={USER_NOT_FOUND:"user-not-found"};async function Mg(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return rr(t,"POST","/v1/accounts:signInWithPhoneNumber",Kn(t,n),Dg)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends Yo{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new os({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new os({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return kg(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Ng(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Mg(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:i,verificationCode:s}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:i,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:i,phoneNumber:s,temporaryProof:r}=e;return!i&&!n&&!s&&!r?null:new os({verificationId:n,verificationCode:i,phoneNumber:s,temporaryProof:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class as extends Du{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends as{constructor(){super("facebook.com")}static credential(e){return Qn._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends as{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Qn._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return On.credential(n,i)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends as{constructor(){super("github.com")}static credential(e){return Qn._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.GITHUB_SIGN_IN_METHOD="github.com";Rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends as{constructor(){super("twitter.com")}static credential(e,n){return Qn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return kn.credential(n,i)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Xn._fromIdTokenResponse(e,i,s),o=Mu(i);return new Ei({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Mu(i);return new Ei({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Mu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends gi{constructor(e,n,i,s){var r;super(n.code,n.message);this.operationType=i,this.user=s,Object.setPrototypeOf(this,cr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new cr(e,n,i,s)}}function Pu(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?cr._fromErrorAndOperation(t,r,e,i):r})}async function Pg(t,e,n=!1){const i=await is(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ei._forOperation(t,"link",i)}/**
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
 */async function Fg(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await is(t,Pu(i,s,e,t),n);z(r.idToken,i,"internal-error");const o=Xo(r.idToken);z(o,i,"internal-error");const{sub:a}=o;return z(t.uid===a,i,"user-mismatch"),Ei._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ln(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fu(t,e,n=!1){const i="signIn",s=await Pu(t,i,e),r=await Ei._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function Ug(t,e){return Fu(rs(t),e)}function lA(t,e,n,i){return wt(t).onAuthStateChanged(e,n,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t,e){return Cn(t,"POST","/v2/accounts/mfaEnrollment:start",Kn(t,e))}const hr="__sak";/**
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
 */class Uu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hr,"1"),this.storage.removeItem(hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(){const t=ft();return Qo(t)||ur(t)}const Bg=1e3,jg=10;class Vu extends Uu{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Hg()&&wg(),this.fallbackToPolling=Ru(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Cg()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jg):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Bg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vu.type="LOCAL";const qg=Vu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu extends Uu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hu.type="SESSION";const Bu=Hu;/**
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
 */function xg(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class dr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new dr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await xg(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Gg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Jo("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return window}function zg(t){at().location.href=t}/**
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
 */function Zo(){return typeof at().WorkerGlobalScope!="undefined"&&typeof at().importScripts=="function"}async function Wg(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Xg(){return Zo()?self:null}/**
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
 */const ju="firebaseLocalStorageDb",Qg=1,fr="firebaseLocalStorage",qu="fbase_key";class ls{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mr(t,e){return t.transaction([fr],e?"readwrite":"readonly").objectStore(fr)}function Yg(){const t=indexedDB.deleteDatabase(ju);return new ls(t).toPromise()}function $o(){const t=indexedDB.open(ju,Qg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(fr,{keyPath:qu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(fr)?e(i):(i.close(),await Yg(),e(await $o()))})})}async function xu(t,e,n){const i=mr(t,!0).put({[qu]:e,value:n});return new ls(i).toPromise()}async function Jg(t,e){const n=mr(t,!1).get(e),i=await new ls(n).toPromise();return i===void 0?null:i.value}function Gu(t,e){const n=mr(t,!0).delete(e);return new ls(n).toPromise()}const Zg=800,$g=3;class zu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $o(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>$g)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dr._getInstance(Xg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Wg(),!this.activeServiceWorker)return;this.sender=new Gg(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $o();return await xu(e,hr,"1"),await Gu(e,hr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>xu(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Jg(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=mr(s,!1).getAll();return new ls(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zu.type="LOCAL";const ey=zu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t,e){return Cn(t,"POST","/v2/accounts/mfaSignIn:start",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(t){return(await Cn(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Wu(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Kt("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",iy().appendChild(i)})}function Ku(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=500,ry=6e4,pr=1e12;class oy{constructor(e){this.auth=e,this.counter=pr,this._widgets=new Map}render(e,n){const i=this.counter;return this._widgets.set(i,new ay(e,this.auth.name,n||{})),this.counter++,i}reset(e){var n;const i=e||pr;(n=this._widgets.get(i))===null||n===void 0||n.delete(),this._widgets.delete(i)}getResponse(e){var n;const i=e||pr;return((n=this._widgets.get(i))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const i=e||pr;return(n=this._widgets.get(i))===null||n===void 0||n.execute(),""}}class ay{constructor(e,n,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;z(s,"argument-error",{appName:n}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=ly(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},ry)},sy))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function ly(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=Ku("rcb"),uy=new ts(3e4,6e4),cy="https://www.google.com/recaptcha/api.js?";class hy{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!at().grecaptcha}load(e,n=""){return z(dy(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(at().grecaptcha):new Promise((i,s)=>{const r=at().setTimeout(()=>{s(Kt(e,"network-request-failed"))},uy.get());at()[ea]=()=>{at().clearTimeout(r),delete at()[ea];const a=at().grecaptcha;if(!a){s(Kt(e,"internal-error"));return}const l=a.render;a.render=(c,u)=>{const h=l(c,u);return this.counter++,h},this.hostLanguage=n,i(a)};const o=`${cy}?${yi({onload:ea,render:"explicit",hl:n})}`;Wu(o).catch(()=>{clearTimeout(r),s(Kt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!at().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function dy(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class fy{async load(e){return new oy(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="recaptcha",my={theme:"light",type:"image"};class uA{constructor(e,n=Object.assign({},my),i){this.parameters=n,this.type=Xu,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=rs(i),this.isInvisible=this.parameters.size==="invisible",z(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const s=typeof e=="string"?document.getElementById(e):e;z(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new fy:new hy,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),i=n.getResponse(e);return i||new Promise(s=>{const r=o=>{!o||(this.tokenChangeListeners.delete(r),s(o))};this.tokenChangeListeners.add(r),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){z(!this.parameters.sitekey,this.auth,"argument-error"),z(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),z(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(i=>i(n)),typeof e=="function")e(n);else if(typeof e=="string"){const i=at()[e];typeof i=="function"&&i(n)}}}assertNotDestroyed(){z(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){z(gu()&&!Zo(),this.auth,"internal-error"),await py(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ny(this.auth);z(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return z(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function py(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=os._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function cA(t,e,n){const i=rs(t),s=await yy(i,e,wt(n));return new gy(s,r=>Ug(i,r))}async function yy(t,e,n){var i;const s=await n.verify();try{z(typeof s=="string",t,"argument-error"),z(n.type===Xu,t,"argument-error");let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const o=r.session;if("phoneNumber"in r)return z(o.type==="enroll",t,"internal-error"),(await Vg(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{z(o.type==="signin",t,"internal-error");const a=((i=r.multiFactorHint)===null||i===void 0?void 0:i.uid)||r.multiFactorUid;return z(a,t,"missing-multi-factor-info"),(await ty(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Rg(t,{phoneNumber:r.phoneNumber,recaptchaToken:s});return o}}finally{n._reset()}}/**
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
 */function vy(t,e){return e?hn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ta extends Yo{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _y(t){return Fu(t.auth,new ta(t),t.bypassAuthState)}function Iy(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),Fg(n,new ta(t),t.bypassAuthState)}async function Ey(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),Pg(n,new ta(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _y;case"linkViaPopup":case"linkViaRedirect":return Ey;case"reauthViaPopup":case"reauthViaRedirect":return Iy;default:ln(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=new ts(2e3,1e4);class bi extends Qu{constructor(e,n,i,s,r){super(e,n,s,r);this.provider=i,this.authWindow=null,this.pollId=null,bi.currentPopupAction&&bi.currentPopupAction.cancel(),bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=Jo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,by.get())};e()}}bi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="pendingRedirect",na=new Map;class Ay extends Qu{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=na.get(this.auth._key());if(!e){try{const i=await Sy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}na.set(this.auth._key(),e)}return this.bypassAuthState||na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sy(t,e){const n=wy(e),i=Cy(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function Cy(t){return hn(t._redirectPersistence)}function wy(t){return lr(Ty,t.config.apiKey,t.name)}async function Ly(t,e,n=!1){const i=rs(t),s=vy(i,e),o=await new Ay(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=10*60*1e3;class Ry{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ky(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Ju(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Kt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Oy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yu(e))}saveEventToCache(e){this.cachedEventUids.add(Yu(e)),this.lastProcessedEventTime=Date.now()}}function Yu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ju({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ky(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ju(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ny(t,e={}){return Cn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,My=/^https?/;async function Py(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ny(t);for(const n of e)try{if(Fy(n))return}catch{}ln(t,"unauthorized-domain")}function Fy(t){const e=Go(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!My.test(n))return!1;if(Dy.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Uy=new ts(3e4,6e4);function Zu(){const t=at().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Vy(t){return new Promise((e,n)=>{var i,s,r;function o(){Zu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zu(),n(Kt(t,"network-request-failed"))},timeout:Uy.get()})}if((s=(i=at().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((r=at().gapi)===null||r===void 0?void 0:r.load)o();else{const a=Ku("iframefcb");return at()[a]=()=>{gapi.load?o():n(Kt(t,"network-request-failed"))},Wu(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw gr=null,e})}let gr=null;function Hy(t){return gr=gr||Vy(t),gr}/**
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
 */const By=new ts(5e3,15e3),jy="__/auth/iframe",qy="emulator/auth/iframe",xy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zy(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zo(e,qy):`https://${t.config.authDomain}/${jy}`,i={apiKey:e.apiKey,appName:t.name,v:es},s=Gy.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${yi(i).slice(1)}`}async function Wy(t){const e=await Hy(t),n=at().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:zy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xy,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Kt(t,"network-request-failed"),a=at().setTimeout(()=>{r(o)},By.get());function l(){at().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Ky={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xy=500,Qy=600,Yy="_blank",Jy="http://localhost";class $u{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zy(t,e,n,i=Xy,s=Qy){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ky),{width:i.toString(),height:s.toString(),top:r,left:o}),c=ft().toLowerCase();n&&(a=Su(c)?Yy:n),Au(c)&&(e=e||Jy,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(Sg(c)&&a!=="_self")return $y(e||"",a),new $u(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new $u(h)}function $y(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const ev="__/auth/handler",tv="emulator/auth/handler";function ec(t,e,n,i,s,r){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:es,eventId:s};if(e instanceof Du){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof as){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${nv(t)}?${yi(a).slice(1)}`}function nv({config:t}){return t.emulator?zo(t,tv):`https://${t.authDomain}/${ev}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="webStorageSupport";class iv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bu,this._completeRedirectFn=Ly}async _openPopup(e,n,i,s){var r;cn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=ec(e,n,i,Go(),s);return Zy(e,o,Jo())}async _openRedirect(e,n,i,s){return await this._originValidation(e),zg(ec(e,n,i,Go(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(cn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i}async initAndGetManager(e){const n=await Wy(e),i=new Ry(e);return n.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ia,{type:ia},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[ia];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Py(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ru()||Qo()||ur()}}const sv=iv;var tc="@firebase/auth",nc="0.19.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function av(t){$i(new vi("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:r}=i.options;return(o=>{z(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),z(!(r==null?void 0:r.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ku(t)},l=new Lg(o,a);return ug(l,n),l})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),$i(new vi("auth-internal",e=>{const n=rs(e.getProvider("auth").getImmediate());return(i=>new rv(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(tc,nc,ov(t)),Sn(tc,nc,"esm2017")}/**
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
 */function hA(t=hu()){const e=Bo(t,"auth");return e.isInitialized()?e.getImmediate():lg(t,{popupRedirectResolver:sv,persistence:[ey,qg,Bu]})}av("Browser");var lv=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},x,sa=sa||{},ne=lv||self;function yr(){}function ra(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function us(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function uv(t){return Object.prototype.hasOwnProperty.call(t,oa)&&t[oa]||(t[oa]=++cv)}var oa="closure_uid_"+(1e9*Math.random()>>>0),cv=0;function hv(t,e,n){return t.call.apply(t.bind,arguments)}function dv(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function vt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?vt=hv:vt=dv,vt.apply(null,arguments)}function vr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function _t(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Nn(){this.s=this.s,this.o=this.o}var fv=0,mv={};Nn.prototype.s=!1;Nn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),fv!=0)){var t=uv(this);delete mv[t]}};Nn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ic=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},sc=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function pv(t){e:{var e=o_;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function rc(t){return Array.prototype.concat.apply([],arguments)}function aa(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function _r(t){return/^[\s\xa0]*$/.test(t)}var oc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Mt(t,e){return t.indexOf(e)!=-1}function la(t,e){return t<e?-1:t>e?1:0}var Pt;e:{var ac=ne.navigator;if(ac){var lc=ac.userAgent;if(lc){Pt=lc;break e}}Pt=""}function ua(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function uc(t){const e={};for(const n in t)e[n]=t[n];return e}var cc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hc(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<cc.length;r++)n=cc[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ca(t){return ca[" "](t),t}ca[" "]=yr;function gv(t){var e=_v;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var yv=Mt(Pt,"Opera"),Ti=Mt(Pt,"Trident")||Mt(Pt,"MSIE"),dc=Mt(Pt,"Edge"),ha=dc||Ti,fc=Mt(Pt,"Gecko")&&!(Mt(Pt.toLowerCase(),"webkit")&&!Mt(Pt,"Edge"))&&!(Mt(Pt,"Trident")||Mt(Pt,"MSIE"))&&!Mt(Pt,"Edge"),vv=Mt(Pt.toLowerCase(),"webkit")&&!Mt(Pt,"Edge");function mc(){var t=ne.document;return t?t.documentMode:void 0}var Ir;e:{var da="",fa=function(){var t=Pt;if(fc)return/rv:([^\);]+)(\)|;)/.exec(t);if(dc)return/Edge\/([\d\.]+)/.exec(t);if(Ti)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(vv)return/WebKit\/(\S+)/.exec(t);if(yv)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(fa&&(da=fa?fa[1]:""),Ti){var ma=mc();if(ma!=null&&ma>parseFloat(da)){Ir=String(ma);break e}}Ir=da}var _v={};function Iv(){return gv(function(){let t=0;const e=oc(String(Ir)).split("."),n=oc("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=la(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||la(s[2].length==0,r[2].length==0)||la(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var pa;if(ne.document&&Ti){var pc=mc();pa=pc||parseInt(Ir,10)||void 0}else pa=void 0;var Ev=pa,bv=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",yr,e),ne.removeEventListener("test",yr,e)}catch{}return t}();function Lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Lt.prototype.h=function(){this.defaultPrevented=!0};function cs(t,e){if(Lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(fc){e:{try{ca(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Tv[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&cs.Z.h.call(this)}}_t(cs,Lt);var Tv={2:"touch",3:"pen",4:"mouse"};cs.prototype.h=function(){cs.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var hs="closure_listenable_"+(1e6*Math.random()|0),Av=0;function Sv(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++Av,this.ca=this.fa=!1}function Er(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function br(t){this.src=t,this.g={},this.h=0}br.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ya(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Sv(e,this.src,r,!!i,s),e.fa=n,t.push(e)),e};function ga(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=ic(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Er(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ya(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}var va="closure_lm_"+(1e6*Math.random()|0),_a={};function gc(t,e,n,i,s){if(i&&i.once)return vc(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)gc(t,e[r],n,i,s);return null}return n=Ta(n),t&&t[hs]?t.N(e,n,us(i)?!!i.capture:!!i,s):yc(t,e,n,!1,i,s)}function yc(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=us(s)?!!s.capture:!!s,a=Ea(t);if(a||(t[va]=a=new br(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=Cv(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)bv||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Ic(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Cv(){function t(n){return e.call(t.src,t.listener,n)}var e=wv;return t}function vc(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)vc(t,e[r],n,i,s);return null}return n=Ta(n),t&&t[hs]?t.O(e,n,us(i)?!!i.capture:!!i,s):yc(t,e,n,!0,i,s)}function _c(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)_c(t,e[r],n,i,s);else i=us(i)?!!i.capture:!!i,n=Ta(n),t&&t[hs]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ya(r,n,i,s),-1<n&&(Er(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ea(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ya(e,n,i,s)),(n=-1<t?e[t]:null)&&Ia(n))}function Ia(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[hs])ga(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Ic(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Ea(e))?(ga(n,t),n.h==0&&(n.src=null,e[va]=null)):Er(t)}}}function Ic(t){return t in _a?_a[t]:_a[t]="on"+t}function wv(t,e){if(t.ca)t=!0;else{e=new cs(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Ia(t),t=n.call(i,e)}return t}function Ea(t){return t=t[va],t instanceof br?t:null}var ba="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ta(t){return typeof t=="function"?t:(t[ba]||(t[ba]=function(e){return t.handleEvent(e)}),t[ba])}function mt(){Nn.call(this),this.i=new br(this),this.P=this,this.I=null}_t(mt,Nn);mt.prototype[hs]=!0;mt.prototype.removeEventListener=function(t,e,n,i){_c(this,t,e,n,i)};function It(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new Lt(e,t);else if(e instanceof Lt)e.target=e.target||t;else{var s=e;e=new Lt(i,t),hc(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Tr(o,i,!0,e)&&s}if(o=e.g=t,s=Tr(o,i,!0,e)&&s,s=Tr(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Tr(o,i,!1,e)&&s}mt.prototype.M=function(){if(mt.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Er(n[i]);delete t.g[e],t.h--}}this.I=null};mt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};mt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Tr(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&ga(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Aa=ne.JSON.stringify;function Lv(){var t=bc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ov{constructor(){this.h=this.g=null}add(e,n){const i=Ec.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Ec=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Rv,t=>t.reset());class Rv{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function kv(t){ne.setTimeout(()=>{throw t},0)}function Sa(t,e){Ca||Nv(),wa||(Ca(),wa=!0),bc.add(t,e)}var Ca;function Nv(){var t=ne.Promise.resolve(void 0);Ca=function(){t.then(Dv)}}var wa=!1,bc=new Ov;function Dv(){for(var t;t=Lv();){try{t.h.call(t.g)}catch(n){kv(n)}var e=Ec;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}wa=!1}function Ar(t,e){mt.call(this),this.h=t||1,this.g=e||ne,this.j=vt(this.kb,this),this.l=Date.now()}_t(Ar,mt);x=Ar.prototype;x.da=!1;x.S=null;x.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),It(this,"tick"),this.da&&(La(this),this.start()))}};x.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function La(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}x.M=function(){Ar.Z.M.call(this),La(this),delete this.g};function Oa(t,e,n){if(typeof t=="function")n&&(t=vt(t,n));else if(t&&typeof t.handleEvent=="function")t=vt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function Tc(t){t.g=Oa(()=>{t.g=null,t.i&&(t.i=!1,Tc(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Mv extends Nn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Tc(this)}M(){super.M(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ds(t){Nn.call(this),this.h=t,this.g={}}_t(ds,Nn);var Ac=[];function Sc(t,e,n,i){Array.isArray(n)||(n&&(Ac[0]=n.toString()),n=Ac);for(var s=0;s<n.length;s++){var r=gc(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Cc(t){ua(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ia(e)},t),t.g={}}ds.prototype.M=function(){ds.Z.M.call(this),Cc(this)};ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Sr(){this.g=!0}Sr.prototype.Aa=function(){this.g=!1};function Pv(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Fv(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Ai(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Vv(t,n)+(i?" "+i:"")})}function Uv(t,e){t.info(function(){return"TIMEOUT: "+e})}Sr.prototype.info=function(){};function Vv(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Aa(n)}catch{return e}}var Yn={},wc=null;function Cr(){return wc=wc||new mt}Yn.Ma="serverreachability";function Lc(t){Lt.call(this,Yn.Ma,t)}_t(Lc,Lt);function fs(t){const e=Cr();It(e,new Lc(e,t))}Yn.STAT_EVENT="statevent";function Oc(t,e){Lt.call(this,Yn.STAT_EVENT,t),this.stat=e}_t(Oc,Lt);function Ft(t){const e=Cr();It(e,new Oc(e,t))}Yn.Na="timingevent";function Rc(t,e){Lt.call(this,Yn.Na,t),this.size=e}_t(Rc,Lt);function ms(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var wr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},kc={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ra(){}Ra.prototype.h=null;function Nc(t){return t.h||(t.h=t.i())}function Dc(){}var ps={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ka(){Lt.call(this,"d")}_t(ka,Lt);function Na(){Lt.call(this,"c")}_t(Na,Lt);var Da;function Lr(){}_t(Lr,Ra);Lr.prototype.g=function(){return new XMLHttpRequest};Lr.prototype.i=function(){return{}};Da=new Lr;function gs(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new ds(this),this.P=Hv,t=ha?125:void 0,this.W=new Ar(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Mc}function Mc(){this.i=null,this.g="",this.h=!1}var Hv=45e3,Ma={},Or={};x=gs.prototype;x.setTimeout=function(t){this.P=t};function Pa(t,e,n){t.K=1,t.v=Mr(dn(e)),t.s=n,t.U=!0,Pc(t,null)}function Pc(t,e){t.F=Date.now(),ys(t),t.A=dn(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Gc(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Mc,t.g=fh(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Mv(vt(t.Ia,t,t.g),t.O)),Sc(t.V,t.g,"readystatechange",t.gb),e=t.H?uc(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),fs(1),Pv(t.j,t.u,t.A,t.m,t.X,t.s)}x.gb=function(t){t=t.target;const e=this.L;e&&fn(t)==3?e.l():this.Ia(t)};x.Ia=function(t){try{if(t==this.g)e:{const u=fn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||ha||this.g&&(this.h.h||this.g.ga()||nh(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?fs(3):fs(2)),Rr(this);var n=this.g.ba();this.N=n;t:if(Fc(this)){var i=nh(this.g);t="";var s=i.length,r=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Jn(this),vs(this);var o="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Fv(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_r(a)){var c=a;break t}}c=null}if(n=c)Ai(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fa(this,n);else{this.i=!1,this.o=3,Ft(12),Jn(this),vs(this);break e}}this.U?(Uc(this,u,o),ha&&this.i&&u==3&&(Sc(this.V,this.W,"tick",this.fb),this.W.start())):(Ai(this.j,this.m,o,null),Fa(this,o)),u==4&&Jn(this),this.i&&!this.I&&(u==4?uh(this.l,this):(this.i=!1,ys(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ft(12)):(this.o=0,Ft(13)),Jn(this),vs(this)}}}catch{}finally{}};function Fc(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Uc(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=Bv(t,n),s==Or){e==4&&(t.o=4,Ft(14),i=!1),Ai(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Ma){t.o=4,Ft(15),Ai(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Ai(t.j,t.m,s,null),Fa(t,s);Fc(t)&&s!=Or&&s!=Ma&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ft(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ka(e),e.L=!0,Ft(11))):(Ai(t.j,t.m,n,"[Invalid Chunked Response]"),Jn(t),vs(t))}x.fb=function(){if(this.g){var t=fn(this.g),e=this.g.ga();this.C<e.length&&(Rr(this),Uc(this,t,e),this.i&&t!=4&&ys(this))}};function Bv(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Or:(n=Number(e.substring(n,i)),isNaN(n)?Ma:(i+=1,i+n>e.length?Or:(e=e.substr(i,n),t.C=i+n,e)))}x.cancel=function(){this.I=!0,Jn(this)};function ys(t){t.Y=Date.now()+t.P,Vc(t,t.P)}function Vc(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ms(vt(t.eb,t),e)}function Rr(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}x.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Uv(this.j,this.A),this.K!=2&&(fs(3),Ft(17)),Jn(this),this.o=2,vs(this)):Vc(this,this.Y-t)};function vs(t){t.l.G==0||t.I||uh(t.l,t)}function Jn(t){Rr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,La(t.W),Cc(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Fa(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ha(n.i,t))){if(n.I=t.N,!t.J&&Ha(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Br(n),Vr(n);else break e;Wa(n),Ft(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=ms(vt(n.ab,n),6e3));if(1>=Kc(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else ei(n,11)}else if((t.J||n.g==t)&&Br(n),!_r(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=i.i;!r.g&&(Mt(m,"spdy")||Mt(m,"quic")||Mt(m,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Ba(r,r.h),r.h=null))}if(i.D){const g=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(i.sa=g,xe(i.F,i.D,g))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=dh(i,i.H?i.la:null,i.W),o.J){Xc(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(Rr(a),ys(a)),i.g=o}else ah(i);0<n.l.length&&Hr(n)}else c[0]!="stop"&&c[0]!="close"||ei(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ei(n,7):Ga(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}fs(4)}catch{}}function jv(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(ra(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Ua(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ra(t)||typeof t=="string")sc(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(ra(t)||typeof t=="string"){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=jv(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function Si(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Si)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}x=Si.prototype;x.R=function(){Va(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};x.T=function(){return Va(this),this.g.concat()};function Va(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];Zn(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)i=t.g[e],Zn(s,i)||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}x.get=function(t,e){return Zn(this.h,t)?this.h[t]:e};x.set=function(t,e){Zn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};x.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};function Zn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Hc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qv(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function $n(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof $n){this.g=e!==void 0?e:t.g,kr(this,t.j),this.s=t.s,Nr(this,t.i),Dr(this,t.m),this.l=t.l,e=t.h;var n=new Es;n.i=e.i,e.g&&(n.g=new Si(e.g),n.h=e.h),Bc(this,n),this.o=t.o}else t&&(n=String(t).match(Hc))?(this.g=!!e,kr(this,n[1]||"",!0),this.s=_s(n[2]||""),Nr(this,n[3]||"",!0),Dr(this,n[4]),this.l=_s(n[5]||"",!0),Bc(this,n[6]||"",!0),this.o=_s(n[7]||"")):(this.g=!!e,this.h=new Es(null,this.g))}$n.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Is(e,jc,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Is(e,jc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Is(n,n.charAt(0)=="/"?Kv:Wv,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Is(n,Qv)),t.join("")};function dn(t){return new $n(t)}function kr(t,e,n){t.j=n?_s(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Nr(t,e,n){t.i=n?_s(e,!0):e}function Dr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Bc(t,e,n){e instanceof Es?(t.h=e,Yv(t.h,t.g)):(n||(e=Is(e,Xv)),t.h=new Es(e,t.g))}function xe(t,e,n){t.h.set(e,n)}function Mr(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function xv(t){return t instanceof $n?dn(t):new $n(t,void 0)}function Gv(t,e,n,i){var s=new $n(null,void 0);return t&&kr(s,t),e&&Nr(s,e),n&&Dr(s,n),i&&(s.l=i),s}function _s(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Is(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,zv),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zv(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var jc=/[#\/\?@]/g,Wv=/[#\?:]/g,Kv=/[#\?]/g,Xv=/[#\?@]/g,Qv=/#/g;function Es(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Dn(t){t.g||(t.g=new Si,t.h=0,t.i&&qv(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Es.prototype;x.add=function(t,e){Dn(this),this.i=null,t=Ci(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function qc(t,e){Dn(t),e=Ci(t,e),Zn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Zn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Va(t)))}function xc(t,e){return Dn(t),e=Ci(t,e),Zn(t.g.h,e)}x.forEach=function(t,e){Dn(this),this.g.forEach(function(n,i){sc(n,function(s){t.call(e,s,i,this)},this)},this)};x.T=function(){Dn(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n};x.R=function(t){Dn(this);var e=[];if(typeof t=="string")xc(this,t)&&(e=rc(e,this.g.get(Ci(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=rc(e,t[n])}return e};x.set=function(t,e){return Dn(this),this.i=null,t=Ci(this,t),xc(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Gc(t,e,n){qc(t,e),0<n.length&&(t.i=null,t.g.set(Ci(t,e),aa(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;i[r]!==""&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};function Ci(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Yv(t,e){e&&!t.j&&(Dn(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(qc(this,i),Gc(this,s,n))},t)),t.j=e}var Jv=class{constructor(t,e){this.h=t,this.g=e}};function zc(t){this.l=t||Zv,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ea&&ne.g.Ea()&&ne.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Zv=10;function Wc(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Kc(t){return t.h?1:t.g?t.g.size:0}function Ha(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ba(t,e){t.g?t.g.add(e):t.h=e}function Xc(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zc.prototype.cancel=function(){if(this.i=Qc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Qc(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return aa(t.i)}function ja(){}ja.prototype.stringify=function(t){return ne.JSON.stringify(t,void 0)};ja.prototype.parse=function(t){return ne.JSON.parse(t,void 0)};function $v(){this.g=new ja}function e_(t,e,n){const i=n||"";try{Ua(t,function(s,r){let o=s;us(s)&&(o=Aa(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function t_(t,e){const n=new Sr;if(ne.Image){const i=new Image;i.onload=vr(Pr,n,i,"TestLoadImage: loaded",!0,e),i.onerror=vr(Pr,n,i,"TestLoadImage: error",!1,e),i.onabort=vr(Pr,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=vr(Pr,n,i,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Pr(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function bs(t){this.l=t.$b||null,this.j=t.ib||!1}_t(bs,Ra);bs.prototype.g=function(){return new Fr(this.l,this.j)};bs.prototype.i=function(t){return function(){return t}}({});function Fr(t,e){mt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=qa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_t(Fr,mt);var qa=0;x=Fr.prototype;x.open=function(t,e){if(this.readyState!=qa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,As(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ne).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ts(this)),this.readyState=qa};x.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,As(this)),this.g&&(this.readyState=3,As(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof ne.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yc(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Yc(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}x.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ts(this):As(this),this.readyState==3&&Yc(this)}};x.Ua=function(t){this.g&&(this.response=this.responseText=t,Ts(this))};x.Ta=function(t){this.g&&(this.response=t,Ts(this))};x.ha=function(){this.g&&Ts(this)};function Ts(t){t.readyState=4,t.l=null,t.j=null,t.A=null,As(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function As(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Fr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var n_=ne.JSON.parse;function it(t){mt.call(this),this.headers=new Si,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Jc,this.K=this.L=!1}_t(it,mt);var Jc="",i_=/^https?$/i,s_=["POST","PUT"];x=it.prototype;x.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Da.g(),this.C=this.u?Nc(this.u):Nc(Da),this.g.onreadystatechange=vt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Zc(this,r);return}t=n||"";const s=new Si(this.headers);i&&Ua(i,function(r,o){s.set(o,r)}),i=pv(s.T()),n=ne.FormData&&t instanceof ne.FormData,!(0<=ic(s_,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{th(this),0<this.B&&((this.K=r_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vt(this.pa,this)):this.A=Oa(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Zc(this,r)}};function r_(t){return Ti&&Iv()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function o_(t){return t.toLowerCase()=="content-type"}x.pa=function(){typeof sa!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,It(this,"timeout"),this.abort(8))};function Zc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$c(t),Ur(t)}function $c(t){t.D||(t.D=!0,It(t,"complete"),It(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,It(this,"complete"),It(this,"abort"),Ur(this))};x.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ur(this,!0)),it.Z.M.call(this)};x.Fa=function(){this.s||(this.F||this.v||this.l?eh(this):this.cb())};x.cb=function(){eh(this)};function eh(t){if(t.h&&typeof sa!="undefined"&&(!t.C[1]||fn(t)!=4||t.ba()!=2)){if(t.v&&fn(t)==4)Oa(t.Fa,0,t);else if(It(t,"readystatechange"),fn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(Hc)[1]||null;if(!s&&ne.self&&ne.self.location){var r=ne.self.location.protocol;s=r.substr(0,r.length-1)}i=!i_.test(s?s.toLowerCase():"")}n=i}if(n)It(t,"complete"),It(t,"success");else{t.m=6;try{var o=2<fn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",$c(t)}}finally{Ur(t)}}}}function Ur(t,e){if(t.g){th(t);const n=t.g,i=t.C[0]?yr:null;t.g=null,t.C=null,e||It(t,"ready");try{n.onreadystatechange=i}catch{}}}function th(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}function fn(t){return t.g?t.g.readyState:0}x.ba=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}};x.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),n_(e)}};function nh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Jc:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Da=function(){return this.m};x.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function a_(t){let e="";return ua(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function xa(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=a_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):xe(t,e,n))}function Ss(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ih(t){this.za=0,this.l=[],this.h=new Sr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ss("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ss("baseRetryDelayMs",5e3,t),this.$a=Ss("retryDelaySeedMs",1e4,t),this.Ya=Ss("forwardChannelMaxRetries",2,t),this.ra=Ss("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new zc(t&&t.concurrentRequestLimit),this.Ca=new $v,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}x=ih.prototype;x.ma=8;x.G=1;function Ga(t){if(sh(t),t.G==3){var e=t.V++,n=dn(t.F);xe(n,"SID",t.J),xe(n,"RID",e),xe(n,"TYPE","terminate"),Cs(t,n),e=new gs(t,t.h,e,void 0),e.K=2,e.v=Mr(dn(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon&&(n=ne.navigator.sendBeacon(e.v.toString(),"")),!n&&ne.Image&&(new Image().src=e.v,n=!0),n||(e.g=fh(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ys(e)}hh(t)}x.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Vr(t){t.g&&(Ka(t),t.g.cancel(),t.g=null)}function sh(t){Vr(t),t.u&&(ne.clearTimeout(t.u),t.u=null),Br(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function za(t,e){t.l.push(new Jv(t.Za++,e)),t.G==3&&Hr(t)}function Hr(t){Wc(t.i)||t.m||(t.m=!0,Sa(t.Ha,t),t.C=0)}function l_(t,e){return Kc(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ms(vt(t.Ha,t,e),ch(t,t.C)),t.C++,!0)}x.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new gs(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=uc(r),hc(r,this.P)):r=this.P),this.o===null&&(s.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=oh(this,s,e),n=dn(this.F),xe(n,"RID",t),xe(n,"CVER",22),this.D&&xe(n,"X-HTTP-Session-Id",this.D),Cs(this,n),this.o&&r&&xa(n,this.o,r),Ba(this.i,s),this.Ra&&xe(n,"TYPE","init"),this.ja?(xe(n,"$req",e),xe(n,"SID","null"),s.$=!0,Pa(s,n,null)):Pa(s,n,e),this.G=2}}else this.G==3&&(t?rh(this,t):this.l.length==0||Wc(this.i)||rh(this))};function rh(t,e){var n;e?n=e.m:n=t.V++;const i=dn(t.F);xe(i,"SID",t.J),xe(i,"RID",n),xe(i,"AID",t.U),Cs(t,i),t.o&&t.s&&xa(i,t.o,t.s),n=new gs(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=oh(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ba(t.i,n),Pa(n,i,e)}function Cs(t,e){t.j&&Ua({},function(n,i){xe(e,i,n)})}function oh(t,e,n){n=Math.min(t.l.length,n);var i=t.j?vt(t.j.Oa,t.j,t):null;e:{var s=t.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{e_(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function ah(t){t.g||t.u||(t.Y=1,Sa(t.Ga,t),t.A=0)}function Wa(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ms(vt(t.Ga,t),ch(t,t.A)),t.A++,!0)}x.Ga=function(){if(this.u=null,lh(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ms(vt(this.bb,this),t)}};x.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ft(10),Vr(this),lh(this))};function Ka(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function lh(t){t.g=new gs(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=dn(t.oa);xe(e,"RID","rpc"),xe(e,"SID",t.J),xe(e,"CI",t.N?"0":"1"),xe(e,"AID",t.U),Cs(t,e),xe(e,"TYPE","xmlhttp"),t.o&&t.s&&xa(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Mr(dn(e)),n.s=null,n.U=!0,Pc(n,t)}x.ab=function(){this.v!=null&&(this.v=null,Vr(this),Wa(this),Ft(19))};function Br(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function uh(t,e){var n=null;if(t.g==e){Br(t),Ka(t),t.g=null;var i=2}else if(Ha(t.i,e))n=e.D,Xc(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=Cr(),It(i,new Rc(i,n,e,s)),Hr(t)}else ah(t);else if(s=e.o,s==3||s==0&&0<t.I||!(i==1&&l_(t,e)||i==2&&Wa(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ei(t,5);break;case 4:ei(t,10);break;case 3:ei(t,6);break;default:ei(t,2)}}}function ch(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ei(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=vt(t.jb,t);n||(n=new $n("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||kr(n,"https"),Mr(n)),t_(n.toString(),i)}else Ft(2);t.G=0,t.j&&t.j.va(e),hh(t),sh(t)}x.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ft(2)):(this.h.info("Failed to ping google.com"),Ft(1))};function hh(t){t.G=0,t.I=-1,t.j&&((Qc(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,aa(t.l),t.l.length=0),t.j.ua())}function dh(t,e,n){let i=xv(n);if(i.i!="")e&&Nr(i,e+"."+i.i),Dr(i,i.m);else{const s=ne.location;i=Gv(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&ua(t.aa,function(s,r){xe(i,r,s)}),e=t.D,n=t.sa,e&&n&&xe(i,e,n),xe(i,"VER",t.ma),Cs(t,i),i}function fh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new it(new bs({ib:!0})):new it(t.qa),e.L=t.H,e}function mh(){}x=mh.prototype;x.xa=function(){};x.wa=function(){};x.va=function(){};x.ua=function(){};x.Oa=function(){};function jr(){if(Ti&&!(10<=Number(Ev)))throw Error("Environmental error: no available transport.")}jr.prototype.g=function(t,e){return new Xt(t,e)};function Xt(t,e){mt.call(this),this.g=new ih(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!_r(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_r(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new wi(this)}_t(Xt,mt);Xt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Sa(vt(t.hb,t,e))),Ft(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=dh(t,null,t.W),Hr(t)};Xt.prototype.close=function(){Ga(this.g)};Xt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,za(this.g,e)}else this.v?(e={},e.__data__=Aa(t),za(this.g,e)):za(this.g,t)};Xt.prototype.M=function(){this.g.j=null,delete this.j,Ga(this.g),delete this.g,Xt.Z.M.call(this)};function ph(t){ka.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}_t(ph,ka);function gh(){Na.call(this),this.status=1}_t(gh,Na);function wi(t){this.g=t}_t(wi,mh);wi.prototype.xa=function(){It(this.g,"a")};wi.prototype.wa=function(t){It(this.g,new ph(t))};wi.prototype.va=function(t){It(this.g,new gh(t))};wi.prototype.ua=function(){It(this.g,"b")};jr.prototype.createWebChannel=jr.prototype.g;Xt.prototype.send=Xt.prototype.u;Xt.prototype.open=Xt.prototype.m;Xt.prototype.close=Xt.prototype.close;wr.NO_ERROR=0;wr.TIMEOUT=8;wr.HTTP_ERROR=6;kc.COMPLETE="complete";Dc.EventType=ps;ps.OPEN="a";ps.CLOSE="b";ps.ERROR="c";ps.MESSAGE="d";mt.prototype.listen=mt.prototype.N;it.prototype.listenOnce=it.prototype.O;it.prototype.getLastError=it.prototype.La;it.prototype.getLastErrorCode=it.prototype.Da;it.prototype.getStatus=it.prototype.ba;it.prototype.getResponseJson=it.prototype.Qa;it.prototype.getResponseText=it.prototype.ga;it.prototype.send=it.prototype.ea;var u_=function(){return new jr},c_=function(){return Cr()},Xa=wr,h_=kc,d_=Yn,yh={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},f_=bs,qr=Dc,m_=it;const vh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Li="9.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Fo("@firebase/firestore");function _h(){return ti.logLevel}function Z(t,...e){if(ti.logLevel<=be.DEBUG){const n=e.map(Qa);ti.debug(`Firestore (${Li}): ${t}`,...n)}}function Mn(t,...e){if(ti.logLevel<=be.ERROR){const n=e.map(Qa);ti.error(`Firestore (${Li}): ${t}`,...n)}}function Ih(t,...e){if(ti.logLevel<=be.WARN){const n=e.map(Qa);ti.warn(`Firestore (${Li}): ${t}`,...n)}}function Qa(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${Li}) INTERNAL ASSERTION FAILED: `+t;throw Mn(e),new Error(e)}function Ue(t,e){t||oe()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class g_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Bt.UNAUTHENTICATED))}shutdown(){}}class y_{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new mn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new mn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{Z("FirebaseCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Z("FirebaseCredentialsProvider","Auth not yet detected"),r.resolve(),r=new mn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Z("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ue(typeof i.accessToken=="string"),new p_(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new Bt(e)}}class v_{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=Bt.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class __{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new v_(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class Ya{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.g(i),this.p=i=>n.writeSequenceNumber(i))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ya.T=-1;class Eh{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=I_(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function we(t,e){return t<e?-1:t>e?1:0}function Oi(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qt.fromMillis(Date.now())}static fromDate(e){return Qt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Qt(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new Qt(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Th(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n,i){n===void 0?n=0:n>e.length&&oe(),i===void 0?i=e.length-n:i>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return ws.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ws?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Xe extends ws{construct(e,n,i){return new Xe(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new W(R.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new Xe(n)}static emptyPath(){return new Xe([])}}const E_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jt extends ws{construct(e,n,i){return new jt(e,n,i)}static isValidIdentifier(e){return E_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new jt(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new W(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new W(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new W(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new jt(n)}static emptyPath(){return new jt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.fields=e,e.sort(jt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Oi(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ot(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new Ot(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const b_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pn(t){if(Ue(!!t),typeof t=="string"){let e=0;const n=b_.exec(t);if(Ue(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ri(t){return typeof t=="string"?Ot.fromBase64String(t):Ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sh(t){const e=t.mapValue.fields.__previous_value__;return Ah(e)?Sh(e):e}function Os(t){const e=Pn(t.mapValue.fields.__local_write_time__.timestampValue);return new Qt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){return t==null}function xr(t){return t===0&&1/t==-1/0}function T_(t){return typeof t=="number"&&Number.isInteger(t)&&!xr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function ii(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ah(t)?4:10:oe()}function nn(t,e){const n=ii(t);if(n!==ii(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Os(t).isEqual(Os(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Pn(i.timestampValue),o=Pn(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ri(i.bytesValue).isEqual(Ri(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return st(i.geoPointValue.latitude)===st(s.geoPointValue.latitude)&&st(i.geoPointValue.longitude)===st(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return st(i.integerValue)===st(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=st(i.doubleValue),o=st(s.doubleValue);return r===o?xr(r)===xr(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Oi(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(bh(r)!==bh(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!nn(r[a],o[a])))return!1;return!0}(t,e);default:return oe()}}function Rs(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function Ni(t,e){const n=ii(t),i=ii(e);if(n!==i)return we(n,i);switch(n){case 0:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=st(s.integerValue||s.doubleValue),a=st(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ch(t.timestampValue,e.timestampValue);case 4:return Ch(Os(t),Os(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(s,r){const o=Ri(s),a=Ri(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=we(o[l],a[l]);if(c!==0)return c}return we(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=we(st(s.latitude),st(r.latitude));return o!==0?o:we(st(s.longitude),st(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Ni(o[l],a[l]);if(c)return c}return we(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=we(a[u],c[u]);if(h!==0)return h;const d=Ni(o[a[u]],l[c[u]]);if(d!==0)return d}return we(a.length,c.length)}(t.mapValue,e.mapValue);default:throw oe()}}function Ch(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Pn(t),i=Pn(e),s=we(n.seconds,i.seconds);return s!==0?s:we(n.nanos,i.nanos)}function Ja(t){return Za(t)}function Za(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=Pn(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ri(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ie.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=Za(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Za(i.fields[a])}`;return r+"}"}(t.mapValue):oe();var e,n}function $a(t){return!!t&&"integerValue"in t}function el(t){return!!t&&"arrayValue"in t}function wh(t){return!!t&&"nullValue"in t}function Lh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Gr(t){return!!t&&"mapValue"in t}function ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ni(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=ks(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Gr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ks(n)}setAll(e){let n=jt.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=ks(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Gr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Gr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){ni(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Yt(ks(this.value))}}function Oh(t){const e=[];return ni(t.fields,(n,i)=>{const s=new jt([n]);if(Gr(i)){const r=Oh(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Ls(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n,i,s,r){this.key=e,this.documentType=n,this.version=i,this.data=s,this.documentState=r}static newInvalidDocument(e){return new Rt(e,0,Ae.min(),Yt.empty(),0)}static newFoundDocument(e,n,i){return new Rt(e,1,n,i,0)}static newNoDocument(e,n){return new Rt(e,2,n,Yt.empty(),0)}static newUnknownDocument(e,n){return new Rt(e,3,n,Yt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Rt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class A_{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.A=null}}function Rh(t,e=null,n=[],i=[],s=null,r=null,o=null){return new A_(t,e,n,i,s,r,o)}function tl(t){const e=ae(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>C_(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),ki(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=zr(e.startAt)),e.endAt&&(n+="|ub:",n+=zr(e.endAt)),e.A=n}return e.A}function S_(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${Ja(i.value)}`;var i}).join(", ")}]`),ki(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+zr(t.startAt)),t.endAt&&(e+=", endAt: "+zr(t.endAt)),`Target(${e})`}function nl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!M_(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!nn(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dh(t.startAt,e.startAt)&&Dh(t.endAt,e.endAt)}function il(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class qt extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,i):new w_(e,n,i):n==="array-contains"?new R_(e,i):n==="in"?new k_(e,i):n==="not-in"?new N_(e,i):n==="array-contains-any"?new D_(e,i):new qt(e,n,i)}static R(e,n,i){return n==="in"?new L_(e,i):new O_(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(Ni(n,this.value)):n!==null&&ii(this.value)===ii(n)&&this.P(Ni(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function C_(t){return t.field.canonicalString()+t.op.toString()+Ja(t.value)}class w_ extends qt{constructor(e,n,i){super(e,n,i),this.key=ie.fromName(i.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.P(n)}}class L_ extends qt{constructor(e,n){super(e,"in",n),this.keys=kh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class O_ extends qt{constructor(e,n){super(e,"not-in",n),this.keys=kh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>ie.fromName(i.referenceValue))}class R_ extends qt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return el(n)&&Rs(n.arrayValue,this.value)}}class k_ extends qt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Rs(this.value.arrayValue,n)}}class N_ extends qt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Rs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Rs(this.value.arrayValue,n)}}class D_ extends qt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!el(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Rs(this.value.arrayValue,i))}}class sl{constructor(e,n){this.position=e,this.before=n}}function zr(t){return`${t.before?"b":"a"}:${t.position.map(e=>Ja(e)).join(",")}`}class Di{constructor(e,n="asc"){this.field=e,this.dir=n}}function M_(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Nh(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=ie.comparator(ie.fromName(o.referenceValue),n.key):i=Ni(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return t.before?i<=0:i<0}function Dh(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.V=null,this.S=null,this.startAt,this.endAt}}function P_(t,e,n,i,s,r,o,a){return new Ns(t,e,n,i,s,r,o,a)}function Wr(t){return new Ns(t)}function Kr(t){return!ki(t.limit)&&t.limitType==="F"}function Xr(t){return!ki(t.limit)&&t.limitType==="L"}function Mh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ph(t){for(const e of t.filters)if(e.v())return e.field;return null}function F_(t){return t.collectionGroup!==null}function Ds(t){const e=ae(t);if(e.V===null){e.V=[];const n=Ph(e),i=Mh(e);if(n!==null&&i===null)n.isKeyField()||e.V.push(new Di(n)),e.V.push(new Di(jt.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.V.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Di(jt.keyField(),r))}}}return e.V}function si(t){const e=ae(t);if(!e.S)if(e.limitType==="F")e.S=Rh(e.path,e.collectionGroup,Ds(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Ds(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Di(r.field,o))}const i=e.endAt?new sl(e.endAt.position,!e.endAt.before):null,s=e.startAt?new sl(e.startAt.position,!e.startAt.before):null;e.S=Rh(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.S}function U_(t,e,n){return new Ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qr(t,e){return nl(si(t),si(e))&&t.limitType===e.limitType}function Fh(t){return`${tl(si(t))}|lt:${t.limitType}`}function rl(t){return`Query(target=${S_(si(t))}; limitType=${t.limitType})`}function Yr(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):ie.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!Nh(n.startAt,Ds(n),i)||n.endAt&&Nh(n.endAt,Ds(n),i))}(t,e)}function Uh(t){return(e,n)=>{let i=!1;for(const s of Ds(t)){const r=V_(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function V_(t,e,n){const i=t.field.isKeyField()?ie.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Ni(a,l):oe()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xr(e)?"-0":e}}function Hh(t){return{integerValue:""+t}}function H_(t,e){return T_(e)?Hh(e):Vh(t,e)}/**
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
 */class Jr{constructor(){this._=void 0}}function B_(t,e,n){return t instanceof Ms?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof Ps?jh(t,e):t instanceof Fs?qh(t,e):function(i,s){const r=Bh(i,s),o=xh(r)+xh(i.C);return $a(r)&&$a(i.C)?Hh(o):Vh(i.N,o)}(t,e)}function j_(t,e,n){return t instanceof Ps?jh(t,e):t instanceof Fs?qh(t,e):n}function Bh(t,e){return t instanceof Zr?$a(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Ms extends Jr{}class Ps extends Jr{constructor(e){super(),this.elements=e}}function jh(t,e){const n=Gh(e);for(const i of t.elements)n.some(s=>nn(s,i))||n.push(i);return{arrayValue:{values:n}}}class Fs extends Jr{constructor(e){super(),this.elements=e}}function qh(t,e){let n=Gh(e);for(const i of t.elements)n=n.filter(s=>!nn(s,i));return{arrayValue:{values:n}}}class Zr extends Jr{constructor(e,n){super(),this.N=e,this.C=n}}function xh(t){return st(t.integerValue||t.doubleValue)}function Gh(t){return el(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,n){this.field=e,this.transform=n}}function x_(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Ps&&i instanceof Ps||n instanceof Fs&&i instanceof Fs?Oi(n.elements,i.elements,nn):n instanceof Zr&&i instanceof Zr?nn(n.C,i.C):n instanceof Ms&&i instanceof Ms}(t.transform,e.transform)}class G_{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $r(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class eo{}function z_(t,e,n){t instanceof to?function(i,s,r){const o=i.value.clone(),a=Xh(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ri?function(i,s,r){if(!$r(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Xh(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(Kh(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function ol(t,e,n){t instanceof to?function(i,s,r){if(!$r(i.precondition,s))return;const o=i.value.clone(),a=Qh(i.fieldTransforms,r,s);o.setAll(a),s.convertToFoundDocument(Wh(s),o).setHasLocalMutations()}(t,e,n):t instanceof ri?function(i,s,r){if(!$r(i.precondition,s))return;const o=Qh(i.fieldTransforms,r,s),a=s.data;a.setAll(Kh(i)),a.setAll(o),s.convertToFoundDocument(Wh(s),a).setHasLocalMutations()}(t,e,n):function(i,s){$r(i.precondition,s)&&s.convertToNoDocument(Ae.min())}(t,e)}function W_(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=Bh(i.transform,s||null);r!=null&&(n==null&&(n=Yt.empty()),n.set(i.field,r))}return n||null}function zh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Oi(n,i,(s,r)=>x_(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Wh(t){return t.isFoundDocument()?t.version:Ae.min()}class to extends eo{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}}class ri extends eo{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}}function Kh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Xh(t,e,n){const i=new Map;Ue(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,j_(o,a,n[s]))}return i}function Qh(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,B_(r,o,e))}return i}class Yh extends eo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class K_ extends eo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,ye;function Q_(t){switch(t){default:return oe();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function Jh(t){if(t===void 0)return Mn("GRPC error has no .code"),R.UNKNOWN;switch(t){case rt.OK:return R.OK;case rt.CANCELLED:return R.CANCELLED;case rt.UNKNOWN:return R.UNKNOWN;case rt.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case rt.INTERNAL:return R.INTERNAL;case rt.UNAVAILABLE:return R.UNAVAILABLE;case rt.UNAUTHENTICATED:return R.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case rt.NOT_FOUND:return R.NOT_FOUND;case rt.ALREADY_EXISTS:return R.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return R.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case rt.ABORTED:return R.ABORTED;case rt.OUT_OF_RANGE:return R.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return R.UNIMPLEMENTED;case rt.DATA_LOSS:return R.DATA_LOSS;default:return oe()}}(ye=rt||(rt={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n){this.comparator=e,this.root=n||Et.EMPTY}insert(e,n){return new kt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new kt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new no(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new no(this.root,e,this.comparator,!1)}getReverseIterator(){return new no(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new no(this.root,e,this.comparator,!0)}}class no{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:Et.RED,this.left=s!=null?s:Et.EMPTY,this.right=r!=null?r:Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Et(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Et.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.comparator=e,this.data=new kt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zh(this.data.getIterator())}getIteratorFrom(e){return new Zh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof bt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new bt(this.comparator);return n.data=e,n}}class Zh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=new kt(ie.comparator);function oi(){return Y_}const J_=new kt(ie.comparator);function al(){return J_}const Z_=new kt(ie.comparator);function $_(){return Z_}const eI=new bt(ie.comparator);function qe(...t){let e=eI;for(const n of t)e=e.add(n);return e}const tI=new bt(we);function $h(){return tI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const i=new Map;return i.set(e,Us.createSynthesizedTargetChangeForCurrentChange(e,n)),new io(Ae.min(),i,$h(),oi(),qe())}}class Us{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Us(Ot.EMPTY_BYTE_STRING,n,qe(),qe(),qe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n,i,s){this.k=e,this.removedTargetIds=n,this.key=i,this.$=s}}class ed{constructor(e,n){this.targetId=e,this.O=n}}class td{constructor(e,n,i=Ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class nd{constructor(){this.F=0,this.M=sd(),this.L=Ot.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=qe(),n=qe(),i=qe();return this.M.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:oe()}}),new Us(this.L,this.B,e,n,i)}G(){this.U=!1,this.M=sd()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class nI{constructor(e){this.tt=e,this.et=new Map,this.nt=oi(),this.st=id(),this.it=new bt(we)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.ct(n,e.key,e.$);for(const n of e.removedTargetIds)this.ct(n,e.key,e.$)}at(e){this.forEachTarget(e,n=>{const i=this.ut(n);switch(e.state){case 0:this.ht(n)&&i.j(e.resumeToken);break;case 1:i.X(),i.q||i.G(),i.j(e.resumeToken);break;case 2:i.X(),i.q||this.removeTarget(n);break;case 3:this.ht(n)&&(i.Z(),i.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),i.j(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((i,s)=>{this.ht(s)&&n(s)})}ft(e){const n=e.targetId,i=e.O.count,s=this.dt(n);if(s){const r=s.target;if(il(r))if(i===0){const o=new ie(r.path);this.ct(n,o,Rt.newNoDocument(o,Ae.min()))}else Ue(i===1);else this.wt(n)!==i&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((r,o)=>{const a=this.dt(o);if(a){if(r.current&&il(a.target)){const l=new ie(a.target.path);this.nt.get(l)!==null||this.gt(o,l)||this.ct(o,l,Rt.newNoDocument(l,e))}r.K&&(n.set(o,r.W()),r.G())}});let i=qe();this.st.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.dt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))});const s=new io(e,n,this.it,this.nt,i);return this.nt=oi(),this.st=id(),this.it=new bt(we),s}ot(e,n){if(!this.ht(e))return;const i=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,i),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}ct(e,n,i){if(!this.ht(e))return;const s=this.ut(e);this.gt(e,n)?s.H(n,1):s.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),i&&(this.nt=this.nt.insert(n,i))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new nd,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new bt(we),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new nd),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function id(){return new kt(ie.comparator)}function sd(){return new kt(ie.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class rI{constructor(e,n){this.databaseId=e,this.D=n}}function ro(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rd(t,e){return t.D?e.toBase64():e.toUint8Array()}function oI(t,e){return ro(t,e.toTimestamp())}function gn(t){return Ue(!!t),Ae.fromTimestamp(function(e){const n=Pn(e);return new Qt(n.seconds,n.nanos)}(t))}function ll(t,e){return function(n){return new Xe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function od(t){const e=Xe.fromString(t);return Ue(dd(e)),e}function ul(t,e){return ll(t.databaseId,e.path)}function cl(t,e){const n=od(e);if(n.get(1)!==t.databaseId.projectId)throw new W(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(ad(n))}function hl(t,e){return ll(t.databaseId,e)}function aI(t){const e=od(t);return e.length===4?Xe.emptyPath():ad(e)}function dl(t){return new Xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ad(t){return Ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ld(t,e,n){return{name:ul(t,e),fields:n.value.mapValue.fields}}function lI(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,c){return l.D?(Ue(c===void 0||typeof c=="string"),Ot.fromBase64String(c||"")):(Ue(c===void 0||c instanceof Uint8Array),Ot.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?R.UNKNOWN:Jh(l.code);return new W(c,l.message||"")}(o);n=new td(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=cl(t,i.document.name),r=gn(i.document.updateTime),o=new Yt({mapValue:{fields:i.document.fields}}),a=Rt.newFoundDocument(s,r,o),l=i.targetIds||[],c=i.removedTargetIds||[];n=new so(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=cl(t,i.document),r=i.readTime?gn(i.readTime):Ae.min(),o=Rt.newNoDocument(s,r),a=i.removedTargetIds||[];n=new so([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=cl(t,i.document),r=i.removedTargetIds||[];n=new so([],r,s,null)}else{if(!("filter"in e))return oe();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new X_(s),o=i.targetId;n=new ed(o,r)}}return n}function uI(t,e){let n;if(e instanceof to)n={update:ld(t,e.key,e.value)};else if(e instanceof Yh)n={delete:ul(t,e.key)};else if(e instanceof ri)n={update:ld(t,e.key,e.data),updateMask:_I(e.fieldMask)};else{if(!(e instanceof K_))return oe();n={verify:ul(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof Ms)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ps)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Fs)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Zr)return{fieldPath:r.field.canonicalString(),increment:o.C};throw oe()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:oI(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:oe()}(t,e.precondition)),n}function cI(t,e){return t&&t.length>0?(Ue(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?gn(i.updateTime):gn(s);return r.isEqual(Ae.min())&&(r=gn(s)),new G_(r,i.transformResults||[])}(n,e))):[]}function hI(t,e){return{documents:[hl(t,e.path)]}}function dI(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=hl(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=hl(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(a){if(a.length===0)return;const l=a.map(c=>function(u){if(u.op==="=="){if(Lh(u.value))return{unaryFilter:{field:Mi(u.field),op:"IS_NAN"}};if(wh(u.value))return{unaryFilter:{field:Mi(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(Lh(u.value))return{unaryFilter:{field:Mi(u.field),op:"IS_NOT_NAN"}};if(wh(u.value))return{unaryFilter:{field:Mi(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mi(u.field),op:gI(u.op),value:u.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(a){if(a.length!==0)return a.map(l=>function(c){return{field:Mi(c.field),direction:pI(c.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(a,l){return a.D||ki(l)?l:{value:l}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=cd(e.startAt)),e.endAt&&(n.structuredQuery.endAt=cd(e.endAt)),n}function fI(t){let e=aI(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Ue(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=ud(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Di(Pi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ki(h)?null:h}(n.limit));let l=null;n.startAt&&(l=hd(n.startAt));let c=null;return n.endAt&&(c=hd(n.endAt)),P_(e,s,o,r,a,"F",l,c)}function mI(t,e){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return oe()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ud(t){return t?t.unaryFilter!==void 0?[vI(t)]:t.fieldFilter!==void 0?[yI(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>ud(e)).reduce((e,n)=>e.concat(n)):oe():[]}function cd(t){return{before:t.before,values:t.position}}function hd(t){const e=!!t.before,n=t.values||[];return new sl(n,e)}function pI(t){return iI[t]}function gI(t){return sI[t]}function Mi(t){return{fieldPath:t.canonicalString()}}function Pi(t){return jt.fromServerFormat(t.fieldPath)}function yI(t){return qt.create(Pi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(t.fieldFilter.op),t.fieldFilter.value)}function vI(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Pi(t.unaryFilter.field);return qt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Pi(t.unaryFilter.field);return qt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Pi(t.unaryFilter.field);return qt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Pi(t.unaryFilter.field);return qt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}function _I(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const II="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new q((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):q.reject(n)}static resolve(e){return new q((n,i)=>{n(e)})}static reject(e){return new q((n,i)=>{i(e)})}static waitFor(e){return new q((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=q.resolve(!1);for(const i of e)n=n.next(s=>s?q.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}}function Vs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&z_(r,e,i[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&ol(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&ol(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const i=e.get(n.key),s=i;this.applyToLocalView(s),i.isValidDocument()||s.convertToNoDocument(Ae.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),qe())}isEqual(e){return this.batchId===e.batchId&&Oi(this.mutations,e.mutations,(n,i)=>zh(n,i))&&Oi(this.baseMutations,e.baseMutations,(n,i)=>zh(n,i))}}class fl{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){Ue(e.mutations.length===i.length);let s=$_();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new fl(e,n,i,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n,i,s,r=Ae.min(),o=Ae.min(),a=Ot.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ai(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.Wt=e}}function AI(t){const e=fI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?U_(e,e.limit,"L"):e}/**
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
 */class SI{constructor(){this.Gt=new CI}addToCollectionParentIndex(e,n){return this.Gt.add(n),q.resolve()}getCollectionParents(e,n){return q.resolve(this.Gt.getEntries(n))}}class CI{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new bt(Xe.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new bt(Xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new Fi(0)}static ie(){return new Fi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==II)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s!==void 0){for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n])}else this.inner[i]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),!0;return!1}forEach(e){ni(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Th(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(){this.changes=new Bs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:Ae.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:Rt.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?q.resolve(i.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,n,i){this.He=e,this.In=n,this.Ht=i}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(i=>this.Rn(e,n,i))}Rn(e,n,i){return this.He.getEntry(e,n).next(s=>{for(const r of i)r.applyToLocalView(s);return s})}bn(e,n){e.forEach((i,s)=>{for(const r of n)r.applyToLocalView(s)})}Pn(e,n){return this.He.getEntries(e,n).next(i=>this.vn(e,i).next(()=>i))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(i=>this.bn(n,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return ie.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Vn(e,n.path):F_(n)?this.Sn(e,n,i):this.Dn(e,n,i)}Vn(e,n){return this.An(e,new ie(n)).next(i=>{let s=al();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}Sn(e,n,i){const s=n.collectionGroup;let r=al();return this.Ht.getCollectionParents(e,s).next(o=>q.forEach(o,a=>{const l=function(c,u){return new Ns(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.Dn(e,l,i).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}Dn(e,n,i){let s,r;return this.He.getDocumentsMatchingQuery(e,n,i).next(o=>(s=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(r=o,this.Cn(e,r,s).next(a=>{s=a;for(const l of r)for(const c of l.mutations){const u=c.key;let h=s.get(u);h==null&&(h=Rt.newInvalidDocument(u),s=s.insert(u,h)),ol(c,h,l.localWriteTime),h.isFoundDocument()||(s=s.remove(u))}}))).next(()=>(s.forEach((o,a)=>{Yr(n,a)||(s=s.remove(o))}),s))}Cn(e,n,i){let s=qe();for(const o of n)for(const a of o.mutations)a instanceof ri&&i.get(a.key)===null&&(s=s.add(a.key));let r=i;return this.He.getEntries(e,s).next(o=>(o.forEach((a,l)=>{l.isFoundDocument()&&(r=r.insert(a,l))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Nn=i,this.xn=s}static kn(e,n){let i=qe(),s=qe();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new ml(e,n.fromCache,i,s)}}/**
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
 */class LI{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,i,s){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||i.isEqual(Ae.min())?this.Fn(e,n):this.On.Pn(e,s).next(r=>{const o=this.Mn(n,r);return(Kr(n)||Xr(n))&&this.Ln(n.limitType,o,s,i)?this.Fn(e,n):(_h()<=be.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),rl(n)),this.On.getDocumentsMatchingQuery(e,n,i).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}Mn(e,n){let i=new bt(Uh(e));return n.forEach((s,r)=>{Yr(e,r)&&(i=i.add(r))}),i}Ln(e,n,i,s){if(i.size!==n.size)return!0;const r=e==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Fn(e,n){return _h()<=be.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",rl(n)),this.On.getDocumentsMatchingQuery(e,n,Ae.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n,i,s){this.persistence=e,this.Bn=n,this.N=s,this.Un=new kt(we),this.qn=new Bs(r=>tl(r),nl),this.Kn=Ae.min(),this.In=e.getMutationQueue(i),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new fd(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function RI(t,e,n,i){return new OI(t,e,n,i)}async function md(t,e){const n=ae(t);let i=n.In,s=n.Qn;const r=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(l=>(a=l,i=n.persistence.getMutationQueue(e),s=new fd(n.jn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(o))).next(l=>{const c=[],u=[];let h=qe();for(const d of a){c.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}for(const d of l){u.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}return s.Pn(o,h).next(d=>({Wn:d,removedBatchIds:c,addedBatchIds:u}))})});return n.In=i,n.Qn=s,n.Bn.$n(n.Qn),r}function kI(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=q.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(m=>{const g=l.docVersions.get(f);Ue(g!==null),m.version.compareTo(g)<0&&(u.applyToRemoteDocument(m,l),m.isValidDocument()&&c.addEntry(m,l.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,u))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.In.performConsistencyCheck(i)).next(()=>n.Qn.Pn(i,s))})}function pd(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function NI(t,e){const n=ae(t),i=e.snapshotVersion;let s=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});s=n.Un;const a=[];e.targetChanges.forEach((c,u)=>{const h=s.get(u);if(!h)return;a.push(n.ze.removeMatchingKeys(r,c.removedDocuments,u).next(()=>n.ze.addMatchingKeys(r,c.addedDocuments,u)));const d=c.resumeToken;if(d.approximateByteSize()>0){const f=h.withResumeToken(d,i).withSequenceNumber(r.currentSequenceNumber);s=s.insert(u,f),function(m,g,y){return Ue(g.resumeToken.approximateByteSize()>0),m.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(h,f,c)&&a.push(n.ze.updateTargetData(r,f))}});let l=oi();if(e.documentUpdates.forEach((c,u)=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(DI(r,o,e.documentUpdates,i,void 0).next(c=>{l=c})),!i.isEqual(Ae.min())){const c=n.ze.getLastRemoteSnapshotVersion(r).next(u=>n.ze.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(c)}return q.waitFor(a).next(()=>o.apply(r)).next(()=>n.Qn.vn(r,l)).next(()=>l)}).then(r=>(n.Un=s,r))}function DI(t,e,n,i,s){let r=qe();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let a=oi();return n.forEach((l,c)=>{const u=o.get(l),h=(s==null?void 0:s.get(l))||i;c.isNoDocument()&&c.version.isEqual(Ae.min())?(e.removeEntry(l,h),a=a.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c,h),a=a.insert(l,c)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),a})}function MI(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(i,e)))}function PI(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.ze.getTargetData(i,e).next(r=>r?(s=r,q.resolve(s)):n.ze.allocateTargetId(i).next(o=>(s=new ai(e,o,0,i.currentSequenceNumber),n.ze.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Un.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Un=n.Un.insert(i.targetId,i),n.qn.set(e,i.targetId)),i})}async function pl(t,e,n){const i=ae(t),s=i.Un.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Vs(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Un=i.Un.remove(e),i.qn.delete(s.target)}function gd(t,e,n){const i=ae(t);let s=Ae.min(),r=qe();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ae(a),h=u.qn.get(c);return h!==void 0?q.resolve(u.Un.get(h)):u.ze.getTargetData(l,c)}(i,o,si(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.ze.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Bn.getDocumentsMatchingQuery(o,e,n?s:Ae.min(),n?r:qe())).next(a=>({documents:a,Gn:r})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return q.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var i;return this.Yn.set(n.id,{id:(i=n).id,version:i.version,createTime:gn(i.createTime)}),q.resolve()}getNamedQuery(e,n){return q.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:AI(i.bundledQuery),readTime:gn(i.readTime)}}(n)),q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(){this.Zn=new bt(pt.ts),this.es=new bt(pt.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const i=new pt(e,n);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.rs(new pt(e,n))}os(e,n){e.forEach(i=>this.removeReference(i,n))}cs(e){const n=new ie(new Xe([])),i=new pt(n,e),s=new pt(n,e+1),r=[];return this.es.forEachInRange([i,s],o=>{this.rs(o),r.push(o.key)}),r}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new ie(new Xe([])),i=new pt(n,e),s=new pt(n,e+1);let r=qe();return this.es.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new pt(e,0),i=this.Zn.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class pt{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return ie.comparator(e.key,n.key)||we(e.ls,n.ls)}static ns(e,n){return we(e.ls,n.ls)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new bt(pt.ts)}checkEmpty(e){return q.resolve(this.In.length===0)}addMutationBatch(e,n,i,s){const r=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new bI(r,n,i,s);this.In.push(o);for(const a of s)this.ds=this.ds.add(new pt(a.key,r)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return q.resolve(o)}lookupMutationBatch(e,n){return q.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this._s(i),r=s<0?0:s;return q.resolve(this.In.length>r?this.In[r]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return q.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new pt(n,0),s=new pt(n,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([i,s],o=>{const a=this.ws(o.ls);r.push(a)}),q.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new bt(we);return n.forEach(s=>{const r=new pt(s,0),o=new pt(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{i=i.add(a.ls)})}),q.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;ie.isDocumentKey(r)||(r=r.child(""));const o=new pt(new ie(r),0);let a=new bt(we);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.ls)),!0)},o),q.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(i=>{const s=this.ws(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ue(this.ys(n.batchId,"removed")===0),this.In.shift();let i=this.ds;return q.forEach(n.mutations,s=>{const r=new pt(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=i})}te(e){}containsKey(e,n){const i=new pt(n,0),s=this.ds.firstAfterOrEqual(i);return q.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.In.length,q.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new kt(ie.comparator),this.size=0}addEntry(e,n,i){const s=n.key,r=this.docs.get(s),o=r?r.size:0,a=this.ps(n);return this.docs=this.docs.insert(s,{document:n.clone(),size:a,readTime:i}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return q.resolve(i?i.document.clone():Rt.newInvalidDocument(n))}getEntries(e,n){let i=oi();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.clone():Rt.newInvalidDocument(s))}),q.resolve(i)}getDocumentsMatchingQuery(e,n,i){let s=oi();const r=new ie(n.path.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l,readTime:c}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;c.compareTo(i)<=0||Yr(n,l)&&(s=s.insert(l.key,l.clone()))}return q.resolve(s)}Ts(e,n){return q.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new HI(this)}getSize(e){return q.resolve(this.size)}}class HI extends wI{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.document.isValidDocument()?n.push(this.Se.addEntry(e,s.document,this.getReadTime(i))):this.Se.removeEntry(i)}),q.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.persistence=e,this.Es=new Bs(n=>tl(n),nl),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.Is=0,this.As=new gl,this.targetCount=0,this.Rs=Fi.se()}forEachTarget(e,n){return this.Es.forEach((i,s)=>n(s)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Is&&(this.Is=n),q.resolve()}ce(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Fi(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,q.resolve()}updateTargetData(e,n){return this.ce(n),q.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Es.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),q.waitFor(r).next(()=>s)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,n){const i=this.Es.get(n)||null;return q.resolve(i)}addMatchingKeys(e,n,i){return this.As.ss(n,i),q.resolve()}removeMatchingKeys(e,n,i){this.As.os(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),q.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),q.resolve()}getMatchingKeysForTargetId(e,n){const i=this.As.hs(n);return q.resolve(i)}containsKey(e,n){return q.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,n){this.bs={},this.Le=new Ya(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new BI(this),this.Ht=new SI,this.He=function(i,s){return new VI(i,s)}(this.Ht,i=>this.referenceDelegate.Ps(i)),this.N=new TI(n),this.Je=new FI(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new UI(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,i){Z("MemoryPersistence","Starting transaction:",e);const s=new qI(this.Le.next());return this.referenceDelegate.vs(),i(s).next(r=>this.referenceDelegate.Vs(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ss(e,n){return q.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,n)))}}class qI extends EI{constructor(e){super(),this.currentSequenceNumber=e}}class yl{constructor(e){this.persistence=e,this.Ds=new gl,this.Cs=null}static Ns(e){return new yl(e)}get xs(){if(this.Cs)return this.Cs;throw oe()}addReference(e,n,i){return this.Ds.addReference(i,n),this.xs.delete(i.toString()),q.resolve()}removeReference(e,n,i){return this.Ds.removeReference(i,n),this.xs.add(i.toString()),q.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),q.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(s=>this.xs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.xs.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.xs,i=>{const s=ie.fromPath(i);return this.ks(e,s).next(r=>{r||n.removeEntry(s)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(i=>{i?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return q.or([()=>q.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class yd{constructor(){this.activeTargetIds=$h()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xI{constructor(){this.yi=new yd,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,i){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new yd,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class GI{Ti(e){}shutdown(){}}/**
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
 */class vd{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,i,s){const r=this.Bi(e,n);Z("RestConnection","Sending: ",r,i);const o={};return this.Ui(o,s),this.qi(e,r,o,i).then(a=>(Z("RestConnection","Received: ",a),a),a=>{throw Ih("RestConnection",`${e} failed with error: `,a,"url: ",r,"request:",i),a})}Ki(e,n,i,s){return this.Li(e,n,i,s)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+Li,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const i in n.authHeaders)n.authHeaders.hasOwnProperty(i)&&(e[i]=n.authHeaders[i])}Bi(e,n){const i=zI[e];return`${this.Fi}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,i,s){return new Promise((r,o)=>{const a=new m_;a.listenOnce(h_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Xa.NO_ERROR:const c=a.getResponseJson();Z("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Xa.TIMEOUT:Z("Connection",'RPC "'+e+'" timed out'),o(new W(R.DEADLINE_EXCEEDED,"Request time out"));break;case Xa.HTTP_ERROR:const u=a.getStatus();if(Z("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const m=f.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(m)>=0?m:R.UNKNOWN}(h.status);o(new W(d,h.message))}else o(new W(R.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new W(R.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{Z("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);a.send(n,"POST",l,i,15)})}ji(e,n){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=u_(),r=c_(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new f_({})),this.Ui(o.initMessageHeaders,n),su()||ou()||up()||au()||cp()||ru()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");Z("Connection","Creating WebChannel: "+a,o);const l=s.createWebChannel(a,o);let c=!1,u=!1;const h=new WI({vi:f=>{u?Z("Connection","Not sending because WebChannel is closed:",f):(c||(Z("Connection","Opening WebChannel transport."),l.open(),c=!0),Z("Connection","WebChannel sending:",f),l.send(f))},Vi:()=>l.close()}),d=(f,m,g)=>{f.listen(m,y=>{try{g(y)}catch(b){setTimeout(()=>{throw b},0)}})};return d(l,qr.EventType.OPEN,()=>{u||Z("Connection","WebChannel transport opened.")}),d(l,qr.EventType.CLOSE,()=>{u||(u=!0,Z("Connection","WebChannel transport closed"),h.$i())}),d(l,qr.EventType.ERROR,f=>{u||(u=!0,Ih("Connection","WebChannel transport errored:",f),h.$i(new W(R.UNAVAILABLE,"The operation could not be completed")))}),d(l,qr.EventType.MESSAGE,f=>{var m;if(!u){const g=f.data[0];Ue(!!g);const y=g,b=y.error||((m=y[0])===null||m===void 0?void 0:m.error);if(b){Z("Connection","WebChannel received error:",b);const S=b.status;let T=function(H){const C=rt[H];if(C!==void 0)return Jh(C)}(S),A=b.message;T===void 0&&(T=R.INTERNAL,A="Unknown error status: "+S+" with message "+b.message),u=!0,h.$i(new W(T,A)),l.close()}else Z("Connection","WebChannel received:",g),h.Oi(g)}}),d(r,d_.STAT_EVENT,f=>{f.stat===yh.PROXY?Z("Connection","Detected buffering proxy"):f.stat===yh.NOPROXY&&Z("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function vl(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){return new rI(t,!0)}class _d{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Oe=e,this.timerId=n,this.Qi=i,this.Wi=s,this.Gi=r,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),i=Math.max(0,Date.now()-this.Ji),s=Math.max(0,n-i);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n,i,s,r,o,a){this.Oe=e,this.er=i,this.nr=s,this.sr=r,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new _d(e,n)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),n=this.ir;this.credentialsProvider.getToken().then(i=>{this.ir===n&&this.Er(i)},i=>{e(()=>{const s=new W(R.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Ir(s)})})}Er(e){const n=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(i=>{n(()=>this.Ir(i))}),this.stream.onMessage(i=>{n(()=>this.onMessage(i))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return n=>{this.Oe.enqueueAndForget(()=>this.ir===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XI extends Id{constructor(e,n,i,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r),this.N=s}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const n=lI(this.N,e),i=function(s){if(!("targetChange"in s))return Ae.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?Ae.min():r.readTime?gn(r.readTime):Ae.min()}(e);return this.listener.Rr(n,i)}br(e){const n={};n.database=dl(this.N),n.addTarget=function(s,r){let o;const a=r.target;return o=il(a)?{documents:hI(s,a)}:{query:dI(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=rd(s,r.resumeToken):r.snapshotVersion.compareTo(Ae.min())>0&&(o.readTime=ro(s,r.snapshotVersion.toTimestamp())),o}(this.N,e);const i=mI(this.N,e);i&&(n.labels=i),this.mr(n)}Pr(e){const n={};n.database=dl(this.N),n.removeTarget=e,this.mr(n)}}class QI extends Id{constructor(e,n,i,s,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r),this.N=s,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const n=cI(e.writeResults,e.commitTime),i=gn(e.commitTime);return this.listener.Dr(i,n)}return Ue(!e.writeResults||e.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=dl(this.N),this.mr(e)}Sr(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>uI(this.N,i))};this.mr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI extends class{}{constructor(e,n,i){super(),this.credentials=e,this.sr=n,this.N=i,this.kr=!1}$r(){if(this.kr)throw new W(R.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,i){return this.$r(),this.credentials.getToken().then(s=>this.sr.Li(e,n,i,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new W(R.UNKNOWN,s.toString())})}Ki(e,n,i){return this.$r(),this.credentials.getToken().then(s=>this.sr.Ki(e,n,i,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new W(R.UNKNOWN,s.toString())})}terminate(){this.kr=!0}}class JI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(Mn(n),this.Mr=!1):Z("OnlineStateTracker",n)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=r,this.zr.Ti(o=>{i.enqueueAndForget(async()=>{li(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ae(a);l.Wr.add(4),await js(l),l.Hr.set("Unknown"),l.Wr.delete(4),await ao(l)}(this))})}),this.Hr=new JI(i,s)}}async function ao(t){if(li(t))for(const e of t.Gr)await e(!0)}async function js(t){for(const e of t.Gr)await e(!1)}function Ed(t,e){const n=ae(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),El(n)?Il(n):Ui(n).hr()&&_l(n,e))}function bd(t,e){const n=ae(t),i=Ui(n);n.Qr.delete(e),i.hr()&&Td(n,e),n.Qr.size===0&&(i.hr()?i.wr():li(n)&&n.Hr.set("Unknown"))}function _l(t,e){t.Jr.Y(e.targetId),Ui(t).br(e)}function Td(t,e){t.Jr.Y(e),Ui(t).Pr(e)}function Il(t){t.Jr=new nI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),Ui(t).start(),t.Hr.Lr()}function El(t){return li(t)&&!Ui(t).ur()&&t.Qr.size>0}function li(t){return ae(t).Wr.size===0}function Ad(t){t.Jr=void 0}async function $I(t){t.Qr.forEach((e,n)=>{_l(t,e)})}async function eE(t,e){Ad(t),El(t)?(t.Hr.qr(e),Il(t)):t.Hr.set("Unknown")}async function tE(t,e,n){if(t.Hr.set("Online"),e instanceof td&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.Qr.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.Qr.delete(o),i.Jr.removeTarget(o))}(t,e)}catch(i){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await lo(t,i)}else if(e instanceof so?t.Jr.rt(e):e instanceof ed?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(Ae.min()))try{const i=await pd(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.Jr._t(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.Qr.get(l);c&&s.Qr.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=s.Qr.get(a);if(!l)return;s.Qr.set(a,l.withResumeToken(Ot.EMPTY_BYTE_STRING,l.snapshotVersion)),Td(s,a);const c=new ai(l.target,a,1,l.sequenceNumber);_l(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){Z("RemoteStore","Failed to raise snapshot:",i),await lo(t,i)}}async function lo(t,e,n){if(!Vs(e))throw e;t.Wr.add(1),await js(t),t.Hr.set("Offline"),n||(n=()=>pd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await ao(t)})}function Sd(t,e){return e().catch(n=>lo(t,n,e))}async function uo(t){const e=ae(t),n=Fn(e);let i=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;nE(e);)try{const s=await MI(e.localStore,i);if(s===null){e.jr.length===0&&n.wr();break}i=s.batchId,iE(e,s)}catch(s){await lo(e,s)}Cd(e)&&wd(e)}function nE(t){return li(t)&&t.jr.length<10}function iE(t,e){t.jr.push(e);const n=Fn(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function Cd(t){return li(t)&&!Fn(t).ur()&&t.jr.length>0}function wd(t){Fn(t).start()}async function sE(t){Fn(t).Nr()}async function rE(t){const e=Fn(t);for(const n of t.jr)e.Sr(n.mutations)}async function oE(t,e,n){const i=t.jr.shift(),s=fl.from(i,e,n);await Sd(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await uo(t)}async function aE(t,e){e&&Fn(t).Vr&&await async function(n,i){if(s=i.code,Q_(s)&&s!==R.ABORTED){const r=n.jr.shift();Fn(n).dr(),await Sd(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await uo(n)}var s}(t,e),Cd(t)&&wd(t)}async function lE(t,e){const n=ae(t);e?(n.Wr.delete(2),await ao(n)):e||(n.Wr.add(2),await js(n),n.Hr.set("Unknown"))}function Ui(t){return t.Yr||(t.Yr=function(e,n,i){const s=ae(e);return s.$r(),new XI(n,s.sr,s.credentials,s.N,i)}(t.datastore,t.asyncQueue,{Si:$I.bind(null,t),Ci:eE.bind(null,t),Rr:tE.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),El(t)?Il(t):t.Hr.set("Unknown")):(await t.Yr.stop(),Ad(t))})),t.Yr}function Fn(t){return t.Xr||(t.Xr=function(e,n,i){const s=ae(e);return s.$r(),new QI(n,s.sr,s.credentials,s.N,i)}(t.datastore,t.asyncQueue,{Si:sE.bind(null,t),Ci:aE.bind(null,t),Cr:rE.bind(null,t),Dr:oE.bind(null,t)}),t.Gr.push(async e=>{e?(t.Xr.dr(),await uo(t)):(await t.Xr.stop(),t.jr.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))})),t.Xr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new bl(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tl(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),Vs(t))return new W(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.comparator=e?(n,i)=>e(n,i)||ie.comparator(n.key,i.key):(n,i)=>ie.comparator(n.key,i.key),this.keyedMap=al(),this.sortedSet=new kt(this.comparator)}static emptySet(e){return new Vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Vi;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.Zr=new kt(ie.comparator)}track(e){const n=e.doc.key,i=this.Zr.get(n);i?e.type!==0&&i.type===3?this.Zr=this.Zr.insert(n,e):e.type===3&&i.type!==1?this.Zr=this.Zr.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Zr=this.Zr.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Zr=this.Zr.remove(n):e.type===1&&i.type===2?this.Zr=this.Zr.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):oe():this.Zr=this.Zr.insert(n,e)}eo(){const e=[];return this.Zr.inorderTraversal((n,i)=>{e.push(i)}),e}}class Hi{constructor(e,n,i,s,r,o,a,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,i,s){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Hi(e,n,Vi.emptySet(n),r,i,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.no=void 0,this.listeners=[]}}class cE{constructor(){this.queries=new Bs(e=>Fh(e),Qr),this.onlineState="Unknown",this.so=new Set}}async function Al(t,e){const n=ae(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new uE),s)try{r.no=await n.onListen(i)}catch(o){const a=Tl(o,`Initialization of query '${rl(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.io(n.onlineState),r.no&&e.ro(r.no)&&Cl(n)}async function Sl(t,e){const n=ae(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function hE(t,e){const n=ae(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.ro(s)&&(i=!0);o.no=s}}i&&Cl(n)}function dE(t,e,n){const i=ae(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function Cl(t){t.so.forEach(e=>{e.next()})}class wl{constructor(e,n,i){this.query=e,this.oo=n,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=i||{}}ro(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Hi(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.uo(e)&&(this.oo.next(e),n=!0):this.ho(e,this.onlineState)&&(this.lo(e),n=!0),this.ao=e,n}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let n=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),n=!0),n}ho(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.fo||!i)&&(!e.docs.isEmpty()||n==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const n=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}lo(e){e=Hi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.key=e}}class Rd{constructor(e){this.key=e}}class fE{constructor(e,n){this.query=e,this.po=n,this.To=null,this.current=!1,this.Eo=qe(),this.mutatedKeys=qe(),this.Io=Uh(e),this.Ao=new Vi(this.Io)}get Ro(){return this.po}bo(e,n){const i=n?n.Po:new Ld,s=n?n.Ao:this.Ao;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=Kr(this.query)&&s.size===this.query.limit?s.last():null,c=Xr(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Yr(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),g=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?m!==g&&(i.track({type:3,doc:f}),y=!0):this.vo(d,f)||(i.track({type:2,doc:f}),y=!0,(l&&this.Io(f,l)>0||c&&this.Io(f,c)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),y=!0):d&&!f&&(i.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(f?(o=o.add(f),r=g?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),Kr(this.query)||Xr(this.query))for(;o.size>this.query.limit;){const u=Kr(this.query)?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Ao:o,Po:i,Ln:a,mutatedKeys:r}}vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const r=e.Po.eo();r.sort((c,u)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return f(h)-f(d)}(c.type,u.type)||this.Io(c.doc,u.doc)),this.Vo(i);const o=n?this.So():[],a=this.Eo.size===0&&this.current?1:0,l=a!==this.To;return this.To=a,r.length!==0||l?{snapshot:new Hi(this.query,e.Ao,s,r,e.mutatedKeys,a===0,l,!1),Do:o}:{Do:o}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new Ld,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(n=>this.po=this.po.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.po=this.po.delete(n)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=qe(),this.Ao.forEach(i=>{this.Co(i.key)&&(this.Eo=this.Eo.add(i.key))});const n=[];return e.forEach(i=>{this.Eo.has(i)||n.push(new Rd(i))}),this.Eo.forEach(i=>{e.has(i)||n.push(new Od(i))}),n}No(e){this.po=e.Gn,this.Eo=qe();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return Hi.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class mE{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class pE{constructor(e){this.key=e,this.ko=!1}}class gE{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new Bs(a=>Fh(a),Qr),this.Fo=new Map,this.Mo=new Set,this.Lo=new kt(ie.comparator),this.Bo=new Map,this.Uo=new gl,this.qo={},this.Ko=new Map,this.jo=Fi.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function yE(t,e){const n=wE(t);let i,s;const r=n.Oo.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.xo();else{const o=await PI(n.localStore,si(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await vE(n,e,i,a==="current"),n.isPrimaryClient&&Ed(n.remoteStore,o)}return s}async function vE(t,e,n,i){t.Wo=(u,h,d)=>async function(f,m,g,y){let b=m.view.bo(g);b.Ln&&(b=await gd(f.localStore,m.query,!1).then(({documents:A})=>m.view.bo(A,b)));const S=y&&y.targetChanges.get(m.targetId),T=m.view.applyChanges(b,f.isPrimaryClient,S);return Fd(f,m.targetId,T.Do),T.snapshot}(t,u,h,d);const s=await gd(t.localStore,e,!0),r=new fE(e,s.Gn),o=r.bo(s.documents),a=Us.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline"),l=r.applyChanges(o,t.isPrimaryClient,a);Fd(t,n,l.Do);const c=new mE(e,n,r);return t.Oo.set(e,c),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),l.snapshot}async function _E(t,e){const n=ae(t),i=n.Oo.get(e),s=n.Fo.get(i.targetId);if(s.length>1)return n.Fo.set(i.targetId,s.filter(r=>!Qr(r,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await pl(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),bd(n.remoteStore,i.targetId),Ll(n,i.targetId)}).catch(Hs)):(Ll(n,i.targetId),await pl(n.localStore,i.targetId,!0))}async function IE(t,e,n){const i=LE(t);try{const s=await function(r,o){const a=ae(r),l=Qt.now(),c=o.reduce((h,d)=>h.add(d.key),qe());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,c).next(d=>{u=d;const f=[];for(const m of o){const g=W_(m,u.get(m.key));g!=null&&f.push(new ri(m.key,g,Oh(g.value.mapValue),pn.exists(!0)))}return a.In.addMutationBatch(h,l,f,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.qo[r.currentUser.toKey()];l||(l=new kt(we)),l=l.insert(o,a),r.qo[r.currentUser.toKey()]=l}(i,s.batchId,n),await qs(i,s.changes),await uo(i.remoteStore)}catch(s){const r=Tl(s,"Failed to persist write");n.reject(r)}}async function kd(t,e){const n=ae(t);try{const i=await NI(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.Bo.get(r);o&&(Ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ko=!0:s.modifiedDocuments.size>0?Ue(o.ko):s.removedDocuments.size>0&&(Ue(o.ko),o.ko=!1))}),await qs(n,i,e)}catch(i){await Hs(i)}}function Nd(t,e,n){const i=ae(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Oo.forEach((r,o)=>{const a=o.view.io(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=ae(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.io(o)&&(l=!0)}),l&&Cl(a)}(i.eventManager,e),s.length&&i.$o.Rr(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function EE(t,e,n){const i=ae(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Bo.get(e),r=s&&s.key;if(r){let o=new kt(ie.comparator);o=o.insert(r,Rt.newNoDocument(r,Ae.min()));const a=qe().add(r),l=new io(Ae.min(),new Map,new bt(we),o,a);await kd(i,l),i.Lo=i.Lo.remove(r),i.Bo.delete(e),Ol(i)}else await pl(i.localStore,e,!1).then(()=>Ll(i,e,n)).catch(Hs)}async function bE(t,e){const n=ae(t),i=e.batch.batchId;try{const s=await kI(n.localStore,e);Md(n,i,null),Dd(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await qs(n,s)}catch(s){await Hs(s)}}async function TE(t,e,n){const i=ae(t);try{const s=await function(r,o){const a=ae(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.In.lookupMutationBatch(l,o).next(u=>(Ue(u!==null),c=u.keys(),a.In.removeMutationBatch(l,u))).next(()=>a.In.performConsistencyCheck(l)).next(()=>a.Qn.Pn(l,c))})}(i.localStore,e);Md(i,e,n),Dd(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await qs(i,s)}catch(s){await Hs(s)}}function Dd(t,e){(t.Ko.get(e)||[]).forEach(n=>{n.resolve()}),t.Ko.delete(e)}function Md(t,e,n){const i=ae(t);let s=i.qo[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.qo[i.currentUser.toKey()]=s}}function Ll(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Fo.get(e))t.Oo.delete(i),n&&t.$o.Go(i,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(i=>{t.Uo.containsKey(i)||Pd(t,i)})}function Pd(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);n!==null&&(bd(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),Ol(t))}function Fd(t,e,n){for(const i of n)i instanceof Od?(t.Uo.addReference(i.key,e),AE(t,i)):i instanceof Rd?(Z("SyncEngine","Document no longer in limbo: "+i.key),t.Uo.removeReference(i.key,e),t.Uo.containsKey(i.key)||Pd(t,i.key)):oe()}function AE(t,e){const n=e.key,i=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(i)||(Z("SyncEngine","New document in limbo: "+n),t.Mo.add(i),Ol(t))}function Ol(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new ie(Xe.fromString(e)),i=t.jo.next();t.Bo.set(i,new pE(n)),t.Lo=t.Lo.insert(n,i),Ed(t.remoteStore,new ai(si(Wr(n.path)),i,2,Ya.T))}}async function qs(t,e,n){const i=ae(t),s=[],r=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach((a,l)=>{o.push(i.Wo(l,e,n).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),s.push(c);const u=ml.kn(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.$o.Rr(s),await async function(a,l){const c=ae(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>q.forEach(l,h=>q.forEach(h.Nn,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>q.forEach(h.xn,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Vs(u))throw u;Z("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Un.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);c.Un=c.Un.insert(h,m)}}}(i.localStore,r))}async function SE(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const i=await md(n.localStore,e);n.currentUser=e,function(s,r){s.Ko.forEach(o=>{o.forEach(a=>{a.reject(new W(R.CANCELLED,r))})}),s.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await qs(n,i.Wn)}}function CE(t,e){const n=ae(t),i=n.Bo.get(e);if(i&&i.ko)return qe().add(i.key);{let s=qe();const r=n.Fo.get(e);if(!r)return s;for(const o of r){const a=n.Oo.get(o);s=s.unionWith(a.view.Ro)}return s}}function wE(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=kd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=EE.bind(null,e),e.$o.Rr=hE.bind(null,e.eventManager),e.$o.Go=dE.bind(null,e.eventManager),e}function LE(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TE.bind(null,e),e}class OE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=oo(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return RI(this.persistence,new LI,e.initialUser,this.N)}Jo(e){return new jI(yl.Ns,this.N)}Ho(e){return new xI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class RE{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Nd(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=SE.bind(null,this.syncEngine),await lE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new cE}createDatastore(e){const n=oo(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new KI(s));var s;return function(r,o,a){return new YI(r,o,a)}(e.credentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>Nd(this.syncEngine,a,0),o=vd.bt()?new vd:new GI,new ZI(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,l,c){const u=new gE(i,s,r,o,a,l);return c&&(u.Qo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ae(e);Z("RemoteStore","RemoteStore shutting down."),n.Wr.add(5),await js(n),n.zr.shutdown(),n.Hr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Rl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,n,i){this.credentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Bt.UNAUTHENTICATED,this.clientId=Eh.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async s=>{Z("FirestoreClient","Received user=",s.uid),await this.credentialListener(s),this.user=s})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const i=Tl(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function NE(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await md(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function DE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ME(t);Z("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>async function(r,o){const a=ae(r);a.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const l=li(a);a.Wr.add(3),await js(a),l&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await ao(a)}(e.remoteStore,s)),t.onlineComponents=e}async function ME(t){return t.offlineComponents||(Z("FirestoreClient","Using default OfflineComponentProvider"),await NE(t,new OE)),t.offlineComponents}async function Ud(t){return t.onlineComponents||(Z("FirestoreClient","Using default OnlineComponentProvider"),await DE(t,new RE)),t.onlineComponents}function PE(t){return Ud(t).then(e=>e.syncEngine)}async function co(t){const e=await Ud(t),n=e.eventManager;return n.onListen=yE.bind(null,e.syncEngine),n.onUnlisten=_E.bind(null,e.syncEngine),n}function FE(t,e,n={}){const i=new mn;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new Rl({next:h=>{r.enqueueAndForget(()=>Sl(s,u));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new W(R.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new W(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new wl(Wr(o.path),c,{includeMetadataChanges:!0,fo:!0});return Al(s,u)}(await co(t),t.asyncQueue,e,n,i)),i.promise}function UE(t,e,n={}){const i=new mn;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new Rl({next:h=>{r.enqueueAndForget(()=>Sl(s,u)),h.fromCache&&a.source==="server"?l.reject(new W(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new wl(o,c,{includeMetadataChanges:!0,fo:!0});return Al(s,u)}(await co(t),t.asyncQueue,e,n,i)),i.promise}class VE{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class xs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t,e,n){if(!n)throw new W(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function HE(t,e,n,i){if(e===!0&&i===!0)throw new W(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Bd(t){if(!ie.isDocumentKey(t))throw new W(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jd(t){if(ie.isDocumentKey(t))throw new W(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kl(t);throw new W(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new W(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,HE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qd({}),this._settingsFrozen=!1,e instanceof xs?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new W(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xs(i.options.projectId)}(e))}get app(){if(!this._app)throw new W(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qd(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new g_;switch(n.type){case"gapi":const i=n.client;return Ue(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new __(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new W(R.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Vd.get(e);n&&(Z("ComponentProvider","Removing Datastore"),Vd.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}}class Bi{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Bi(this.firestore,e,this._query)}}class Un extends Bi{constructor(e,n,i){super(e,n,Wr(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new ie(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function dA(t,e,...n){if(t=wt(t),Hd("collection","path",e),t instanceof Nl){const i=Xe.fromString(e,...n);return jd(i),new Un(t,null,i)}{if(!(t instanceof xt||t instanceof Un))throw new W(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Xe.fromString(e,...n));return jd(i),new Un(t.firestore,null,i)}}function fA(t,e,...n){if(t=wt(t),arguments.length===1&&(e=Eh.I()),Hd("doc","path",e),t instanceof Nl){const i=Xe.fromString(e,...n);return Bd(i),new xt(t,null,new ie(i))}{if(!(t instanceof xt||t instanceof Un))throw new W(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Xe.fromString(e,...n));return Bd(i),new xt(t.firestore,t instanceof Un?t.converter:null,new ie(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new _d(this,"async_queue_retry"),this.Rc=()=>{const n=vl();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ar.tr()};const e=vl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const n=vl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const n=new mn;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!Vs(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const n=this._c.then(()=>(this.Ec=!0,e().catch(i=>{this.Tc=i,this.Ec=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Mn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ec=!1,i))));return this._c=n,n}enqueueAfterDelay(e,n,i){this.bc(),this.Ac.indexOf(e)>-1&&(n=0);const s=bl.createAndSchedule(this,e,n,i,r=>this.Vc(r));return this.yc.push(s),s}bc(){this.Tc&&oe()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const n of this.yc)if(n.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.yc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const n=this.yc.indexOf(e);this.yc.splice(n,1)}}function xd(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ui extends Nl{constructor(e,n){super(e,n),this.type="firestore",this._queue=new BE,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Gd(this),this._firestoreClient.terminate()}}function mA(t=hu()){return Bo(t,"firestore").getImmediate()}function Gs(t){return t._firestoreClient||Gd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Gd(t){var e;const n=t._freezeSettings(),i=function(s,r,o,a){return new VE(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new kE(t._credentials,t._queue,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ho{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ji(Ot.fromBase64String(e))}catch(n){throw new W(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ji(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=/^__.*__$/;class qE{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new ri(e,this.data,this.fieldMask,n,this.fieldTransforms):new to(e,this.data,n,this.fieldTransforms)}}class zd{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new ri(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Wd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class Ml{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.N=i,this.ignoreUndefinedProperties=s,r===void 0&&this.xc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new Ml(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$c({path:i,Fc:!1});return s.Mc(e),s}Lc(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$c({path:i,Fc:!1});return s.xc(),s}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return go(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(e.length===0)throw this.Uc("Document fields must not be empty");if(Wd(this.kc)&&jE.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class xE{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=i||oo(e)}jc(e,n,i,s=!1){return new Ml({kc:e,methodName:n,Kc:i,path:jt.emptyPath(),Fc:!1,qc:s},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Kd(t){const e=t._freezeSettings(),n=oo(t._databaseId);return new xE(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Xd(t,e,n,i,s,r={}){const o=t.jc(r.merge||r.mergeFields?2:0,e,n,s);Fl("Data must be an object, but it was:",o,i);const a=Qd(i,o);let l,c;if(r.merge)l=new Ls(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Ul(e,h,n);if(!o.contains(d))throw new W(R.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Jd(u,d)||u.push(d)}l=new Ls(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new qE(new Yt(a),l,c)}class mo extends fo{_toFieldTransform(e){if(e.kc!==2)throw e.kc===1?e.Uc(`${this._methodName}() can only appear at the top level of your update data`):e.Uc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mo}}class Pl extends fo{_toFieldTransform(e){return new q_(e.path,new Ms)}isEqual(e){return e instanceof Pl}}function GE(t,e,n,i){const s=t.jc(1,e,n);Fl("Data must be an object, but it was:",s,i);const r=[],o=Yt.empty();ni(i,(l,c)=>{const u=Vl(e,l,n);c=wt(c);const h=s.Lc(u);if(c instanceof mo)r.push(u);else{const d=po(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Ls(r);return new zd(o,a,s.fieldTransforms)}function zE(t,e,n,i,s,r){const o=t.jc(1,e,n),a=[Ul(e,i,n)],l=[s];if(r.length%2!=0)throw new W(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Ul(e,r[d])),l.push(r[d+1]);const c=[],u=Yt.empty();for(let d=a.length-1;d>=0;--d)if(!Jd(c,a[d])){const f=a[d];let m=l[d];m=wt(m);const g=o.Lc(f);if(m instanceof mo)c.push(f);else{const y=po(m,g);y!=null&&(c.push(f),u.set(f,y))}}const h=new Ls(c);return new zd(u,h,o.fieldTransforms)}function po(t,e){if(Yd(t=wt(t)))return Fl("Unsupported field value:",e,t),Qd(t,e);if(t instanceof fo)return function(n,i){if(!Wd(i.kc))throw i.Uc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Uc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.kc!==4)throw e.Uc("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=po(o,i.Bc(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=wt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return H_(i.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Qt.fromDate(n);return{timestampValue:ro(i.N,s)}}if(n instanceof Qt){const s=new Qt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ro(i.N,s)}}if(n instanceof Dl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ji)return{bytesValue:rd(i.N,n._byteString)};if(n instanceof xt){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.Uc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ll(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Uc(`Unsupported field value: ${kl(n)}`)}(t,e)}function Qd(t,e){const n={};return Th(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ni(t,(i,s)=>{const r=po(s,e.Oc(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function Yd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qt||t instanceof Dl||t instanceof ji||t instanceof xt||t instanceof fo)}function Fl(t,e,n){if(!Yd(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=kl(n);throw i==="an object"?e.Uc(t+" a custom object"):e.Uc(t+" "+i)}}function Ul(t,e,n){if((e=wt(e))instanceof ho)return e._internalPath;if(typeof e=="string")return Vl(t,e);throw go("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const WE=new RegExp("[~\\*/\\[\\]]");function Vl(t,e,n){if(e.search(WE)>=0)throw go(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ho(...e.split("."))._internalPath}catch{throw go(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function go(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new W(R.INVALID_ARGUMENT,a+t+l)}function Jd(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KE extends Zd{data(){return super.data()}}function Hl(t,e){return typeof e=="string"?Vl(t,e):e instanceof ho?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $d extends Zd{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Hl("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class yo extends $d{data(e={}){return super.data(e)}}class ef{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new zs(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new yo(this._firestore,this._userDataWriter,i.key,i,new zs(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>({type:"added",doc:new yo(i._firestore,i._userDataWriter,o.doc.key,o.doc,new zs(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:r++}))}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new yo(i._firestore,i._userDataWriter,o.doc.key,o.doc,new zs(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:XE(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function XE(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t){if(Xr(t)&&t.explicitOrderBy.length===0)throw new W(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class QE{}function pA(t,...e){for(const n of e)t=n._apply(t);return t}class YE extends QE{constructor(e,n){super(),this.Gc=e,this.Jc=n,this.type="orderBy"}_apply(e){const n=function(i,s,r){if(i.startAt!==null)throw new W(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Di(s,r);return function(a,l){if(Mh(a)===null){const c=Ph(a);c!==null&&JE(a,c,l.field)}}(i,o),o}(e._query,this.Gc,this.Jc);return new Bi(e.firestore,e.converter,function(i,s){const r=i.explicitOrderBy.concat([s]);return new Ns(i.path,i.collectionGroup,r,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function gA(t,e="asc"){const n=e,i=Hl("orderBy",t);return new YE(i,n)}function JE(t,e,n){if(!n.isEqual(e))throw new W(R.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{convertValue(e,n="none"){switch(ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw oe()}}convertObject(e,n){const i={};return ni(e.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new Dl(st(e.latitude),st(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Sh(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Os(e));default:return null}}convertTimestamp(e){const n=Pn(e);return new Qt(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Xe.fromString(e);Ue(dd(i));const s=new xs(i.get(1),i.get(3)),r=new ie(i.popFirst(5));return s.isEqual(n)||Mn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Kd(e)}set(e,n,i){this._verifyNotCommitted();const s=Bl(e,this._firestore),r=nf(s.converter,n,i),o=Xd(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(o.toMutation(s._key,pn.none())),this}update(e,n,i,...s){this._verifyNotCommitted();const r=Bl(e,this._firestore);let o;return o=typeof(n=wt(n))=="string"||n instanceof ho?zE(this._dataReader,"WriteBatch.update",r._key,n,i,s):GE(this._dataReader,"WriteBatch.update",r._key,n),this._mutations.push(o.toMutation(r._key,pn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Bl(e,this._firestore);return this._mutations=this._mutations.concat(new Yh(n._key,pn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new W(R.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Bl(t,e){if((t=wt(t)).firestore!==e)throw new W(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function yA(t){t=sn(t,xt);const e=sn(t.firestore,ui);return FE(Gs(e),t._key).then(n=>rf(e,t,n))}class jl extends ZE{constructor(e){super(),this.firestore=e}convertBytes(e){return new ji(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,n)}}function vA(t){t=sn(t,Bi);const e=sn(t.firestore,ui),n=Gs(e),i=new jl(e);return tf(t._query),UE(n,t._query).then(s=>new ef(e,i,t,s))}function _A(t,e,n){t=sn(t,xt);const i=sn(t.firestore,ui),s=nf(t.converter,e,n);return sf(i,[Xd(Kd(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,pn.none())])}function IA(t,...e){var n,i,s;t=wt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||xd(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(xd(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof xt)c=sn(t.firestore,ui),u=Wr(t._key.path),l={next:h=>{e[o]&&e[o](rf(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=sn(t,Bi);c=sn(h.firestore,ui),u=h._query;const d=new jl(c);l={next:f=>{e[o]&&e[o](new ef(c,d,h,f))},error:e[o+1],complete:e[o+2]},tf(t._query)}return function(h,d,f,m){const g=new Rl(m),y=new wl(d,g,f);return h.asyncQueue.enqueueAndForget(async()=>Al(await co(h),y)),()=>{g.ec(),h.asyncQueue.enqueueAndForget(async()=>Sl(await co(h),y))}}(Gs(c),u,a,l)}function sf(t,e){return function(n,i){const s=new mn;return n.asyncQueue.enqueueAndForget(async()=>IE(await PE(n),i,s)),s.promise}(Gs(t),e)}function rf(t,e,n){const i=n.docs.get(e._key),s=new jl(t);return new $d(t,s,e._key,i,new zs(n.hasPendingWrites,n.fromCache),e.converter)}function EA(){return new Pl("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(t){return Gs(t=sn(t,ui)),new $E(t,e=>sf(t,e))}(function(t,e=!0){(function(n){Li=n})(es),$i(new vi("firestore",(n,{options:i})=>{const s=n.getProvider("app").getImmediate(),r=new ui(s,new y_(n.getProvider("auth-internal")));return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r},"PUBLIC")),Sn(vh,"3.3.1",t),Sn(vh,"3.3.1","esm2017")})();function fe(t){return Object.entries(t).filter(([e,n])=>e!==""&&n).map(([e])=>e).join(" ")}function Qe(t,e,n,i={bubbles:!0},s=!1){if(typeof Event!="undefined"&&t){const r=new CustomEvent(e,Object.assign(Object.assign({},i),{detail:n}));if(t==null||t.dispatchEvent(r),s&&e.startsWith("SMUI")){const o=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},i),{detail:n}));t==null||t.dispatchEvent(o),o.defaultPrevented&&r.preventDefault()}return r}}function vo(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let s=0;s<n.length;s++){const r=n[s],o=r.indexOf("$");o!==-1&&e.indexOf(r.substring(0,o+1))!==-1||e.indexOf(r)===-1&&(i[r]=t[r])}return i}const of=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,e0=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function Ve(t){let e,n=[];t.$on=(s,r)=>{let o=s,a=()=>{};return e?a=e(o,r):n.push([o,r]),o.match(of)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',o),(...c)=>{a()}};function i(s){Yi(t,s)}return s=>{const r=[],o={};e=(a,l)=>{let c=a,u=l,h=!1;const d=c.match(of),f=c.match(e0),m=d||f;if(c.match(/^SMUI:\w+:/)){const b=c.split(":");let S="";for(let T=0;T<b.length;T++)S+=T===b.length-1?":"+b[T]:b[T].split("-").map(A=>A.slice(0,1).toUpperCase()+A.slice(1)).join("");console.warn(`The event ${c.split("$")[0]} has been renamed to ${S.split("$")[0]}.`),c=S}if(m){const b=c.split(d?":":"$");c=b[0];const S=Object.fromEntries(b.slice(1).map(T=>[T,!0]));S.passive&&(h=h||{},h.passive=!0),S.nonpassive&&(h=h||{},h.passive=!1),S.capture&&(h=h||{},h.capture=!0),S.once&&(h=h||{},h.once=!0),S.preventDefault&&(u=Qm(u)),S.stopPropagation&&(u=Ym(u))}const g=Fe(s,c,u,h),y=()=>{g();const b=r.indexOf(y);b>-1&&r.splice(b,1)};return r.push(y),c in o||(o[c]=Fe(s,c,i)),y};for(let a=0;a<n.length;a++)e(n[a][0],n[a][1]);return{destroy:()=>{for(let a=0;a<r.length;a++)r[a]();for(let a of Object.entries(o))a[1]()}}}}function Gt(t,e){let n=Object.getOwnPropertyNames(t);const i={};for(let s=0;s<n.length;s++){const r=n[s];r.substring(0,e.length)===e&&(i[r.substring(e.length)]=t[r])}return i}function Ye(t,e){let n=[];if(e)for(let i=0;i<e.length;i++){const s=e[i],r=Array.isArray(s)?s[0]:s;Array.isArray(s)&&s.length>1?n.push(r(t,s[1])):n.push(r(t))}return{update(i){if((i&&i.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(i)for(let s=0;s<i.length;s++){const r=n[s];if(r&&r.update){const o=i[s];Array.isArray(o)&&o.length>1?r.update(o[1]):r.update()}}},destroy(){for(let i=0;i<n.length;i++){const s=n[i];s&&s.destroy&&s.destroy()}}}}var _o;function t0(t,e){e===void 0&&(e=!1);var n=t.CSS,i=_o;if(typeof _o=="boolean"&&!e)return _o;var s=n&&typeof n.supports=="function";if(!s)return!1;var r=n.supports("--css-vars","yes"),o=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=r||o,e||(_o=i),i}function n0(t,e,n){if(!t)return{x:0,y:0};var i=e.x,s=e.y,r=i+n.left,o=s+n.top,a,l;if(t.type==="touchstart"){var c=t;a=c.changedTouches[0].pageX-r,l=c.changedTouches[0].pageY-o}else{var u=t;a=u.pageX-r,l=u.pageY-o}return{x:a,y:l}}/**
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
 */var rn=function(){function t(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();/**
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
 */function i0(t){return t===void 0&&(t=window),s0(t)?{passive:!0}:!1}function s0(t){t===void 0&&(t=window);var e=!1;try{var n={get passive(){return e=!0,!1}},i=function(){};t.document.addEventListener("test",i,n),t.document.removeEventListener("test",i,n)}catch{e=!1}return e}var af=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",applyPassive:i0});/**
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
 */function r0(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(lf(n,e))return n;n=n.parentElement}return null}function lf(t,e){var n=t.matches||t.webkitMatchesSelector||t.msMatchesSelector;return n.call(t,e)}function o0(t){var e=t;if(e.offsetParent!==null)return e.scrollWidth;var n=e.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var i=n.scrollWidth;return document.documentElement.removeChild(n),i}var ql=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",closest:r0,matches:lf,estimateScrollWidth:o0});/**
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
 */var a0={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},l0={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},uf={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};/**
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
 */var cf=["touchstart","pointerdown","mousedown","keydown"],hf=["touchend","pointerup","mouseup","contextmenu"],Io=[],u0=function(t){en(e,t);function e(n){var i=t.call(this,Ke(Ke({},e.defaultAdapter),n))||this;return i.activationAnimationHasEnded=!1,i.activationTimer=0,i.fgDeactivationRemovalTimer=0,i.fgScale="0",i.frame={width:0,height:0},i.initialSize=0,i.layoutFrame=0,i.maxRadius=0,i.unboundedCoords={left:0,top:0},i.activationState=i.defaultActivationState(),i.activationTimerCallback=function(){i.activationAnimationHasEnded=!0,i.runDeactivationUXLogicIfReady()},i.activateHandler=function(s){i.activateImpl(s)},i.deactivateHandler=function(){i.deactivateImpl()},i.focusHandler=function(){i.handleFocus()},i.blurHandler=function(){i.handleBlur()},i.resizeHandler=function(){i.layout()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return a0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return l0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return uf},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var s=e.cssClasses,r=s.ROOT,o=s.UNBOUNDED;requestAnimationFrame(function(){n.adapter.addClass(r),n.adapter.isUnbounded()&&(n.adapter.addClass(o),n.layoutInternal())})}},e.prototype.destroy=function(){var n=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,s=i.ROOT,r=i.UNBOUNDED;requestAnimationFrame(function(){n.adapter.removeClass(s),n.adapter.removeClass(r),n.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(n){this.activateImpl(n)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var n=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){n.layoutInternal(),n.layoutFrame=0})},e.prototype.setUnbounded=function(n){var i=e.cssClasses.UNBOUNDED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var n=this;requestAnimationFrame(function(){return n.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var n=this;requestAnimationFrame(function(){return n.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(n){var i,s;if(n){try{for(var r=an(cf),o=r.next();!o.done;o=r.next()){var a=o.value;this.adapter.registerInteractionHandler(a,this.activateHandler)}}catch(l){i={error:l}}finally{try{o&&!o.done&&(s=r.return)&&s.call(r)}finally{if(i)throw i.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(n){var i,s;if(n.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=an(hf),o=r.next();!o.done;o=r.next()){var a=o.value;this.adapter.registerDocumentInteractionHandler(a,this.deactivateHandler)}}catch(l){i={error:l}}finally{try{o&&!o.done&&(s=r.return)&&s.call(r)}finally{if(i)throw i.error}}},e.prototype.deregisterRootHandlers=function(){var n,i;try{for(var s=an(cf),r=s.next();!r.done;r=s.next()){var o=r.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(a){n={error:a}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var n,i;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var s=an(hf),r=s.next();!r.done;r=s.next()){var o=r.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(a){n={error:a}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},e.prototype.removeCssVars=function(){var n=this,i=e.strings,s=Object.keys(i);s.forEach(function(r){r.indexOf("VAR_")===0&&n.adapter.updateCssVariable(i[r],null)})},e.prototype.activateImpl=function(n){var i=this;if(!this.adapter.isSurfaceDisabled()){var s=this.activationState;if(!s.isActivated){var r=this.previousActivationEvent,o=r&&n!==void 0&&r.type!==n.type;if(!o){s.isActivated=!0,s.isProgrammatic=n===void 0,s.activationEvent=n,s.wasActivatedByPointer=s.isProgrammatic?!1:n!==void 0&&(n.type==="mousedown"||n.type==="touchstart"||n.type==="pointerdown");var a=n!==void 0&&Io.length>0&&Io.some(function(l){return i.adapter.containsEventTarget(l)});if(a){this.resetActivationState();return}n!==void 0&&(Io.push(n.target),this.registerDeactivationHandlers(n)),s.wasElementMadeActive=this.checkElementMadeActive(n),s.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){Io=[],!s.wasElementMadeActive&&n!==void 0&&(n.key===" "||n.keyCode===32)&&(s.wasElementMadeActive=i.checkElementMadeActive(n),s.wasElementMadeActive&&i.animateActivation()),s.wasElementMadeActive||(i.activationState=i.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(n){return n!==void 0&&n.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var n=this,i=e.strings,s=i.VAR_FG_TRANSLATE_START,r=i.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,l=o.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",h="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),f=d.startPoint,m=d.endPoint;u=f.x+"px, "+f.y+"px",h=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(s,u),this.adapter.updateCssVariable(r,h),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){n.activationTimerCallback()},c)},e.prototype.getFgTranslationCoordinates=function(){var n=this.activationState,i=n.activationEvent,s=n.wasActivatedByPointer,r;s?r=n0(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):r={x:this.frame.width/2,y:this.frame.height/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady=function(){var n=this,i=e.cssClasses.FG_DEACTIVATION,s=this.activationState,r=s.hasDeactivationUXRun,o=s.isActivated,a=r||!o;a&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout(function(){n.adapter.removeClass(i)},uf.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var n=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(n),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var n=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return n.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var n=this,i=this.activationState;if(!!i.isActivated){var s=Ke({},i);i.isProgrammatic?(requestAnimationFrame(function(){n.animateDeactivation(s)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){n.activationState.hasDeactivationUXRun=!0,n.animateDeactivation(s),n.resetActivationState()}))}},e.prototype.animateDeactivation=function(n){var i=n.wasActivatedByPointer,s=n.wasElementMadeActive;(i||s)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var n=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width),s=function(){var o=Math.sqrt(Math.pow(n.frame.width,2)+Math.pow(n.frame.height,2));return o+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?i:s();var r=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!=0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var n=e.strings,i=n.VAR_FG_SIZE,s=n.VAR_LEFT,r=n.VAR_TOP,o=n.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(s,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},e}(rn);/**
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
 */var xl="mdc-dom-focus-sentinel",c0=function(){function t(e,n){n===void 0&&(n={}),this.root=e,this.options=n,this.elFocusedBeforeTrapFocus=null}return t.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},t.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+xl)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},t.prototype.wrapTabFocus=function(e){var n=this,i=this.createSentinel(),s=this.createSentinel();i.addEventListener("focus",function(){var r=n.getFocusableElements(e);r.length>0&&r[r.length-1].focus()}),s.addEventListener("focus",function(){var r=n.getFocusableElements(e);r.length>0&&r[0].focus()}),e.insertBefore(i,e.children[0]),e.appendChild(s)},t.prototype.focusInitialElement=function(e,n){var i=0;n&&(i=Math.max(e.indexOf(n),0)),e[i].focus()},t.prototype.getFocusableElements=function(e){var n=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return n.filter(function(i){var s=i.getAttribute("aria-disabled")==="true"||i.getAttribute("disabled")!=null||i.getAttribute("hidden")!=null||i.getAttribute("aria-hidden")==="true",r=i.tabIndex>=0&&i.getBoundingClientRect().width>0&&!i.classList.contains(xl)&&!s,o=!1;if(r){var a=getComputedStyle(i);o=a.display==="none"||a.visibility==="hidden"}return r&&!o})},t.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(xl),e},t}(),h0=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",FocusTrap:c0});/**
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
 */var pe={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},Ut=new Set;Ut.add(pe.BACKSPACE);Ut.add(pe.ENTER);Ut.add(pe.SPACEBAR);Ut.add(pe.PAGE_UP);Ut.add(pe.PAGE_DOWN);Ut.add(pe.END);Ut.add(pe.HOME);Ut.add(pe.ARROW_LEFT);Ut.add(pe.ARROW_UP);Ut.add(pe.ARROW_RIGHT);Ut.add(pe.ARROW_DOWN);Ut.add(pe.DELETE);Ut.add(pe.ESCAPE);Ut.add(pe.TAB);var zt={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},Vt=new Map;Vt.set(zt.BACKSPACE,pe.BACKSPACE);Vt.set(zt.ENTER,pe.ENTER);Vt.set(zt.SPACEBAR,pe.SPACEBAR);Vt.set(zt.PAGE_UP,pe.PAGE_UP);Vt.set(zt.PAGE_DOWN,pe.PAGE_DOWN);Vt.set(zt.END,pe.END);Vt.set(zt.HOME,pe.HOME);Vt.set(zt.ARROW_LEFT,pe.ARROW_LEFT);Vt.set(zt.ARROW_UP,pe.ARROW_UP);Vt.set(zt.ARROW_RIGHT,pe.ARROW_RIGHT);Vt.set(zt.ARROW_DOWN,pe.ARROW_DOWN);Vt.set(zt.DELETE,pe.DELETE);Vt.set(zt.ESCAPE,pe.ESCAPE);Vt.set(zt.TAB,pe.TAB);var Vn=new Set;Vn.add(pe.PAGE_UP);Vn.add(pe.PAGE_DOWN);Vn.add(pe.END);Vn.add(pe.HOME);Vn.add(pe.ARROW_LEFT);Vn.add(pe.ARROW_UP);Vn.add(pe.ARROW_RIGHT);Vn.add(pe.ARROW_DOWN);function Nt(t){var e=t.key;if(Ut.has(e))return e;var n=Vt.get(t.keyCode);return n||pe.UNKNOWN}const{applyPassive:Eo}=af,{matches:d0}=ql;function qi(t,{ripple:e=!0,surface:n=!1,unbounded:i=!1,disabled:s=!1,color:r,active:o,rippleElement:a,eventTarget:l,activeTarget:c,addClass:u=m=>t.classList.add(m),removeClass:h=m=>t.classList.remove(m),addStyle:d=(m,g)=>t.style.setProperty(m,g),initPromise:f=Promise.resolve()}={}){let m,g=Ht("SMUI:addLayoutListener"),y,b=o,S=l,T=c;function A(){n&&(u("mdc-ripple-surface"),r==="primary"?(u("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")):r==="secondary"?(h("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")):(h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary"))),m&&b!==o&&(b=o,o?m.activate():o===!1&&m.deactivate()),e&&!m?(m=new u0({addClass:u,browserSupportsCssVars:()=>t0(window),computeBoundingRect:()=>(a||t).getBoundingClientRect(),containsEventTarget:C=>t.contains(C),deregisterDocumentInteractionHandler:(C,p)=>document.documentElement.removeEventListener(C,p,Eo()),deregisterInteractionHandler:(C,p)=>(l||t).removeEventListener(C,p,Eo()),deregisterResizeHandler:C=>window.removeEventListener("resize",C),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>o==null?d0(c||t,":active"):o,isSurfaceDisabled:()=>!!s,isUnbounded:()=>!!i,registerDocumentInteractionHandler:(C,p)=>document.documentElement.addEventListener(C,p,Eo()),registerInteractionHandler:(C,p)=>(l||t).addEventListener(C,p,Eo()),registerResizeHandler:C=>window.addEventListener("resize",C),removeClass:h,updateCssVariable:d}),f.then(()=>{m&&(m.init(),m.setUnbounded(i))})):m&&!e&&f.then(()=>{m&&(m.destroy(),m=void 0)}),m&&(S!==l||T!==c)&&(S=l,T=c,m.destroy(),requestAnimationFrame(()=>{m&&(m.init(),m.setUnbounded(i))})),!e&&i&&u("mdc-ripple-upgraded--unbounded")}A(),g&&(y=g(H));function H(){m&&m.layout()}return{update(C){({ripple:e,surface:n,unbounded:i,disabled:s,color:r,active:o,rippleElement:a,eventTarget:l,activeTarget:c,addClass:u,removeClass:h,addStyle:d,initPromise:f}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:p=>t.classList.add(p),removeClass:p=>t.classList.remove(p),addStyle:(p,E)=>t.style.setProperty(p,E),initPromise:Promise.resolve()},C)),A()},destroy(){m&&(m.destroy(),m=void 0,h("mdc-ripple-surface"),h("smui-ripple-surface--primary"),h("smui-ripple-surface--secondary")),y&&y()}}}function f0(t){let e,n,i,s,r;const o=t[7].default,a=ue(o,t,t[6],null);let l=[{href:t[1]},t[4]],c={};for(let u=0;u<l.length;u+=1)c=M(c,l[u]);return{c(){e=ve("a"),a&&a.c(),this.h()},l(u){e=Ee(u,"A",{href:!0});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,c)},m(u,h){J(u,e,h),a&&a.m(e,null),t[8](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[3].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&64)&&he(a,o,u,u[6],i?ce(o,u[6],h,null):de(u[6]),null),te(e,c=ge(l,[(!i||h&2)&&{href:u[1]},h&16&&u[4]])),n&&Re(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(N(a,u),i=!0)},o(u){P(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[8](null),s=!1,Le(r)}}}function m0(t,e,n){const i=["use","href","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e,{href:l="javascript:void(0);"}=e;const c=Ve(_e());let u;function h(){return u}function d(f){re[f?"unshift":"push"](()=>{u=f,n(2,u)})}return t.$$set=f=>{e=M(M({},e),ke(f)),n(4,s=Y(e,i)),"use"in f&&n(0,a=f.use),"href"in f&&n(1,l=f.href),"$$scope"in f&&n(6,o=f.$$scope)},[a,l,u,c,s,h,o,r,d]}class p0 extends De{constructor(e){super();Ne(this,e,m0,f0,Oe,{use:0,href:1,getElement:5})}get getElement(){return this.$$.ctx[5]}}function g0(t){let e,n,i,s,r;const o=t[6].default,a=ue(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=M(c,l[u]);return{c(){e=ve("button"),a&&a.c(),this.h()},l(u){e=Ee(u,"BUTTON",{});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,c)},m(u,h){J(u,e,h),a&&a.m(e,null),e.autofocus&&e.focus(),t[7](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[2].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&he(a,o,u,u[5],i?ce(o,u[5],h,null):de(u[5]),null),te(e,c=ge(l,[h&8&&u[3]])),n&&Re(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(N(a,u),i=!0)},o(u){P(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[7](null),s=!1,Le(r)}}}function y0(t,e,n){const i=["use","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ve(_e());let c;function u(){return c}function h(d){re[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=M(M({},e),ke(d)),n(3,s=Y(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,s,u,o,r,h]}class v0 extends De{constructor(e){super();Ne(this,e,y0,g0,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function _0(t){let e,n,i,s,r;const o=t[6].default,a=ue(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=M(c,l[u]);return{c(){e=ve("div"),a&&a.c(),this.h()},l(u){e=Ee(u,"DIV",{});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,c)},m(u,h){J(u,e,h),a&&a.m(e,null),t[7](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[2].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&he(a,o,u,u[5],i?ce(o,u[5],h,null):de(u[5]),null),te(e,c=ge(l,[h&8&&u[3]])),n&&Re(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(N(a,u),i=!0)},o(u){P(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[7](null),s=!1,Le(r)}}}function I0(t,e,n){const i=["use","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ve(_e());let c;function u(){return c}function h(d){re[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=M(M({},e),ke(d)),n(3,s=Y(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,s,u,o,r,h]}class df extends De{constructor(e){super();Ne(this,e,I0,_0,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function E0(t){let e,n,i,s,r;const o=t[6].default,a=ue(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=M(c,l[u]);return{c(){e=ve("h1"),a&&a.c(),this.h()},l(u){e=Ee(u,"H1",{});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,c)},m(u,h){J(u,e,h),a&&a.m(e,null),t[7](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[2].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&he(a,o,u,u[5],i?ce(o,u[5],h,null):de(u[5]),null),te(e,c=ge(l,[h&8&&u[3]])),n&&Re(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(N(a,u),i=!0)},o(u){P(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[7](null),s=!1,Le(r)}}}function b0(t,e,n){const i=["use","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ve(_e());let c;function u(){return c}function h(d){re[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=M(M({},e),ke(d)),n(3,s=Y(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,s,u,o,r,h]}class T0 extends De{constructor(e){super();Ne(this,e,b0,E0,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function A0(t){let e,n,i,s,r;const o=t[6].default,a=ue(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=M(c,l[u]);return{c(){e=ve("h2"),a&&a.c(),this.h()},l(u){e=Ee(u,"H2",{});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,c)},m(u,h){J(u,e,h),a&&a.m(e,null),t[7](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[2].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&he(a,o,u,u[5],i?ce(o,u[5],h,null):de(u[5]),null),te(e,c=ge(l,[h&8&&u[3]])),n&&Re(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(N(a,u),i=!0)},o(u){P(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[7](null),s=!1,Le(r)}}}function S0(t,e,n){const i=["use","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ve(_e());let c;function u(){return c}function h(d){re[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=M(M({},e),ke(d)),n(3,s=Y(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,s,u,o,r,h]}class C0 extends De{constructor(e){super();Ne(this,e,S0,A0,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function w0(t){let e,n,i,s,r;const o=t[6].default,a=ue(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=M(c,l[u]);return{c(){e=ve("h3"),a&&a.c(),this.h()},l(u){e=Ee(u,"H3",{});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,c)},m(u,h){J(u,e,h),a&&a.m(e,null),t[7](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[2].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&he(a,o,u,u[5],i?ce(o,u[5],h,null):de(u[5]),null),te(e,c=ge(l,[h&8&&u[3]])),n&&Re(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(N(a,u),i=!0)},o(u){P(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[7](null),s=!1,Le(r)}}}function L0(t,e,n){const i=["use","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ve(_e());let c;function u(){return c}function h(d){re[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=M(M({},e),ke(d)),n(3,s=Y(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,s,u,o,r,h]}class O0 extends De{constructor(e){super();Ne(this,e,L0,w0,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function R0(t){let e,n,i,s,r;const o=t[6].default,a=ue(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=M(c,l[u]);return{c(){e=ve("li"),a&&a.c(),this.h()},l(u){e=Ee(u,"LI",{});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,c)},m(u,h){J(u,e,h),a&&a.m(e,null),t[7](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[2].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&he(a,o,u,u[5],i?ce(o,u[5],h,null):de(u[5]),null),te(e,c=ge(l,[h&8&&u[3]])),n&&Re(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(N(a,u),i=!0)},o(u){P(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[7](null),s=!1,Le(r)}}}function k0(t,e,n){const i=["use","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ve(_e());let c;function u(){return c}function h(d){re[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=M(M({},e),ke(d)),n(3,s=Y(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,s,u,o,r,h]}class N0 extends De{constructor(e){super();Ne(this,e,k0,R0,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function D0(t){let e,n,i,s,r;const o=t[6].default,a=ue(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=M(c,l[u]);return{c(){e=ve("nav"),a&&a.c(),this.h()},l(u){e=Ee(u,"NAV",{});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,c)},m(u,h){J(u,e,h),a&&a.m(e,null),t[7](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[2].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&he(a,o,u,u[5],i?ce(o,u[5],h,null):de(u[5]),null),te(e,c=ge(l,[h&8&&u[3]])),n&&Re(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(N(a,u),i=!0)},o(u){P(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[7](null),s=!1,Le(r)}}}function M0(t,e,n){const i=["use","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ve(_e());let c;function u(){return c}function h(d){re[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=M(M({},e),ke(d)),n(3,s=Y(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,s,u,o,r,h]}class P0 extends De{constructor(e){super();Ne(this,e,M0,D0,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function F0(t){let e,n,i,s,r;const o=t[6].default,a=ue(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=M(c,l[u]);return{c(){e=ve("span"),a&&a.c(),this.h()},l(u){e=Ee(u,"SPAN",{});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,c)},m(u,h){J(u,e,h),a&&a.m(e,null),t[7](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[2].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&he(a,o,u,u[5],i?ce(o,u[5],h,null):de(u[5]),null),te(e,c=ge(l,[h&8&&u[3]])),n&&Re(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(N(a,u),i=!0)},o(u){P(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[7](null),s=!1,Le(r)}}}function U0(t,e,n){const i=["use","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ve(_e());let c;function u(){return c}function h(d){re[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=M(M({},e),ke(d)),n(3,s=Y(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,s,u,o,r,h]}class V0 extends De{constructor(e){super();Ne(this,e,U0,F0,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function H0(t){let e,n,i,s,r;const o=t[6].default,a=ue(o,t,t[5],null);let l=[t[3]],c={};for(let u=0;u<l.length;u+=1)c=M(c,l[u]);return{c(){e=ve("ul"),a&&a.c(),this.h()},l(u){e=Ee(u,"UL",{});var h=Ie(e);a&&a.l(h),h.forEach(U),this.h()},h(){te(e,c)},m(u,h){J(u,e,h),a&&a.m(e,null),t[7](e),i=!0,s||(r=[ee(n=Ye.call(null,e,t[0])),ee(t[2].call(null,e))],s=!0)},p(u,[h]){a&&a.p&&(!i||h&32)&&he(a,o,u,u[5],i?ce(o,u[5],h,null):de(u[5]),null),te(e,c=ge(l,[h&8&&u[3]])),n&&Re(n.update)&&h&1&&n.update.call(null,u[0])},i(u){i||(N(a,u),i=!0)},o(u){P(a,u),i=!1},d(u){u&&U(e),a&&a.d(u),t[7](null),s=!1,Le(r)}}}function B0(t,e,n){const i=["use","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e;const l=Ve(_e());let c;function u(){return c}function h(d){re[d?"unshift":"push"](()=>{c=d,n(1,c)})}return t.$$set=d=>{e=M(M({},e),ke(d)),n(3,s=Y(e,i)),"use"in d&&n(0,a=d.use),"$$scope"in d&&n(5,o=d.$$scope)},[a,c,l,s,u,o,r,h]}class j0 extends De{constructor(e){super();Ne(this,e,B0,H0,Oe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}const ff=p0,q0=v0,yn=df,x0=T0,G0=C0,z0=O0,W0=N0,K0=P0,ci=V0,X0=j0;function mf(t){let e;return{c(){e=ve("div"),this.h()},l(n){e=Ee(n,"DIV",{class:!0}),Ie(e).forEach(U),this.h()},h(){Zt(e,"class","mdc-button__touch")},m(n,i){J(n,e,i)},d(n){n&&U(e)}}}function Q0(t){let e,n,i,s;const r=t[26].default,o=ue(r,t,t[28],null);let a=t[6]&&mf();return{c(){e=ve("div"),n=Ze(),o&&o.c(),a&&a.c(),i=nt(),this.h()},l(l){e=Ee(l,"DIV",{class:!0}),Ie(e).forEach(U),n=$e(l),o&&o.l(l),a&&a.l(l),i=nt(),this.h()},h(){Zt(e,"class","mdc-button__ripple")},m(l,c){J(l,e,c),J(l,n,c),o&&o.m(l,c),a&&a.m(l,c),J(l,i,c),s=!0},p(l,c){o&&o.p&&(!s||c&268435456)&&he(o,r,l,l[28],s?ce(r,l[28],c,null):de(l[28]),null),l[6]?a||(a=mf(),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null)},i(l){s||(N(o,l),s=!0)},o(l){P(o,l),s=!1},d(l){l&&U(e),l&&U(n),o&&o.d(l),a&&a.d(l),l&&U(i)}}}function Y0(t){let e,n,i;const s=[{use:[[qi,{ripple:t[3],unbounded:!1,color:t[4],disabled:!!t[22].disabled,addClass:t[18],removeClass:t[19],addStyle:t[20]}],t[16],...t[0]]},{class:fe(je({[t[1]]:!0,"mdc-button":!0,"mdc-button--raised":t[5]==="raised","mdc-button--unelevated":t[5]==="unelevated","mdc-button--outlined":t[5]==="outlined","smui-button--color-secondary":t[4]==="secondary","mdc-button--touch":t[6],"mdc-card__action":t[17]==="card:action","mdc-card__action--button":t[17]==="card:action","mdc-dialog__button":t[17]==="dialog:action","mdc-top-app-bar__navigation-icon":t[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":t[17]==="top-app-bar:action","mdc-snackbar__action":t[17]==="snackbar:actions","mdc-banner__secondary-action":t[17]==="banner"&&t[8],"mdc-banner__primary-action":t[17]==="banner"&&!t[8],"mdc-tooltip__action":t[17]==="tooltip:rich-actions"},t[11]))},{style:Object.entries(t[12]).map(pf).concat([t[2]]).join(" ")},t[15],t[14],t[13],{href:t[7]},t[22]];var r=t[9];function o(a){let l={$$slots:{default:[Q0]},$$scope:{ctx:a}};for(let c=0;c<s.length;c+=1)l=M(l,s[c]);return{props:l}}return r&&(e=new r(o(t)),t[27](e),e.$on("click",t[21])),{c(){e&&Je(e.$$.fragment),n=nt()},l(a){e&&dt(e.$$.fragment,a),n=nt()},m(a,l){e&&ze(e,a,l),J(a,n,l),i=!0},p(a,[l]){const c=l&6289919?ge(s,[l&6094873&&{use:[[qi,{ripple:a[3],unbounded:!1,color:a[4],disabled:!!a[22].disabled,addClass:a[18],removeClass:a[19],addStyle:a[20]}],a[16],...a[0]]},l&133490&&{class:fe(je({[a[1]]:!0,"mdc-button":!0,"mdc-button--raised":a[5]==="raised","mdc-button--unelevated":a[5]==="unelevated","mdc-button--outlined":a[5]==="outlined","smui-button--color-secondary":a[4]==="secondary","mdc-button--touch":a[6],"mdc-card__action":a[17]==="card:action","mdc-card__action--button":a[17]==="card:action","mdc-dialog__button":a[17]==="dialog:action","mdc-top-app-bar__navigation-icon":a[17]==="top-app-bar:navigation","mdc-top-app-bar__action-item":a[17]==="top-app-bar:action","mdc-snackbar__action":a[17]==="snackbar:actions","mdc-banner__secondary-action":a[17]==="banner"&&a[8],"mdc-banner__primary-action":a[17]==="banner"&&!a[8],"mdc-tooltip__action":a[17]==="tooltip:rich-actions"},a[11]))},l&4100&&{style:Object.entries(a[12]).map(pf).concat([a[2]]).join(" ")},l&32768&&Ge(a[15]),l&16384&&Ge(a[14]),l&8192&&Ge(a[13]),l&128&&{href:a[7]},l&4194304&&Ge(a[22])]):{};if(l&268435520&&(c.$$scope={dirty:l,ctx:a}),r!==(r=a[9])){if(e){St();const u=e;P(u.$$.fragment,1,0,()=>{We(u,1)}),Ct()}r?(e=new r(o(a)),a[27](e),e.$on("click",a[21]),Je(e.$$.fragment),N(e.$$.fragment,1),ze(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(a){i||(e&&N(e.$$.fragment,a),i=!0)},o(a){e&&P(e.$$.fragment,a),i=!1},d(a){t[27](null),a&&U(n),e&&We(e,a)}}}const pf=([t,e])=>`${t}: ${e};`;function J0(t,e,n){let i,s,r;const o=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","getElement"];let a=Y(e,o),{$$slots:l={},$$scope:c}=e;const u=Ve(_e());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{ripple:m=!0}=e,{color:g="primary"}=e,{variant:y="text"}=e,{touch:b=!1}=e,{href:S=void 0}=e,{action:T="close"}=e,{defaultAction:A=!1}=e,{secondary:H=!1}=e,C,p={},E={},F=Ht("SMUI:button:context"),{component:I=S==null?q0:ff}=e;ot("SMUI:label:context","button"),ot("SMUI:icon:context","button");function L(j){p[j]||n(11,p[j]=!0,p)}function X(j){(!(j in p)||p[j])&&n(11,p[j]=!1,p)}function _(j,G){E[j]!=G&&(G===""||G==null?(delete E[j],n(12,E)):n(12,E[j]=G,E))}function k(){F==="banner"&&Qe(w(),H?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function w(){return C.getElement()}function V(j){re[j?"unshift":"push"](()=>{C=j,n(10,C)})}return t.$$set=j=>{n(29,e=M(M({},e),ke(j))),n(22,a=Y(e,o)),"use"in j&&n(0,h=j.use),"class"in j&&n(1,d=j.class),"style"in j&&n(2,f=j.style),"ripple"in j&&n(3,m=j.ripple),"color"in j&&n(4,g=j.color),"variant"in j&&n(5,y=j.variant),"touch"in j&&n(6,b=j.touch),"href"in j&&n(7,S=j.href),"action"in j&&n(23,T=j.action),"defaultAction"in j&&n(24,A=j.defaultAction),"secondary"in j&&n(8,H=j.secondary),"component"in j&&n(9,I=j.component),"$$scope"in j&&n(28,c=j.$$scope)},t.$$.update=()=>{n(15,i=F==="dialog:action"&&T!=null?{"data-mdc-dialog-action":T}:{action:e.action}),n(14,s=F==="dialog:action"&&A?{"data-mdc-dialog-button-default":""}:{default:e.default}),n(13,r=F==="banner"?{}:{secondary:e.secondary})},e=ke(e),[h,d,f,m,g,y,b,S,H,I,C,p,E,r,s,i,u,F,L,X,_,k,a,T,A,w,l,V,c]}class TA extends De{constructor(e){super();Ne(this,e,J0,Y0,Oe,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:23,defaultAction:24,secondary:8,component:9,getElement:25})}get getElement(){return this.$$.ctx[25]}}function Z0(t){let e;const n=t[4].default,i=ue(n,t,t[3],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,[r]){i&&i.p&&(!e||r&8)&&he(i,n,s,s[3],e?ce(n,s[3],r,null):de(s[3]),null)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function $0(t,e,n){let i,{$$slots:s={},$$scope:r}=e,{key:o}=e,{value:a}=e;const l=ip(a);return jm(t,l,c=>n(5,i=c)),ot(o,l),Gn(()=>{l.set(void 0)}),t.$$set=c=>{"key"in c&&n(1,o=c.key),"value"in c&&n(2,a=c.value),"$$scope"in c&&n(3,r=c.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&xm(l,i=a,i)},[l,o,a,r,s]}class bo extends De{constructor(e){super();Ne(this,e,$0,Z0,Oe,{key:1,value:2})}}/**
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
 */var eb={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
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
 */var tb=function(t){en(e,t);function e(n){var i=t.call(this,Ke(Ke({},e.defaultAdapter),n))||this;return i.shakeAnimationEndHandler=function(){i.handleShakeAnimationEnd()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return eb},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(n){var i=e.cssClasses.LABEL_SHAKE;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.float=function(n){var i=e.cssClasses,s=i.LABEL_FLOAT_ABOVE,r=i.LABEL_SHAKE;n?this.adapter.addClass(s):(this.adapter.removeClass(s),this.adapter.removeClass(r))},e.prototype.setRequired=function(n){var i=e.cssClasses.LABEL_REQUIRED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleShakeAnimationEnd=function(){var n=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(n)},e}(rn);/**
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
 */var hi={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
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
 */var nb=function(t){en(e,t);function e(n){var i=t.call(this,Ke(Ke({},e.defaultAdapter),n))||this;return i.transitionEndHandler=function(s){i.handleTransitionEnd(s)},i}return Object.defineProperty(e,"cssClasses",{get:function(){return hi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(hi.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(hi.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(n){this.adapter.setStyle("transform-origin",n+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(hi.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(n){var i=this.adapter.hasClass(hi.LINE_RIPPLE_DEACTIVATING);n.propertyName==="opacity"&&i&&(this.adapter.removeClass(hi.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(hi.LINE_RIPPLE_DEACTIVATING))},e}(rn);/**
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
 */var ib={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},gf={NOTCH_ELEMENT_PADDING:8},sb={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
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
 */var rb=function(t){en(e,t);function e(n){return t.call(this,Ke(Ke({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"strings",{get:function(){return ib},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return sb},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return gf},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(n){var i=e.cssClasses.OUTLINE_NOTCHED;n>0&&(n+=gf.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(n),this.adapter.addClass(i)},e.prototype.closeNotch=function(){var n=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(n),this.adapter.removeNotchWidthProperty()},e}(rn);/**
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
 */var Gl={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},ob={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},yf={LABEL_SCALE:.75},ab=["pattern","min","max","required","step","minlength","maxlength"],lb=["color","date","datetime-local","month","range","time","week"];/**
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
 */var vf=["mousedown","touchstart"],_f=["click","keydown"],ub=function(t){en(e,t);function e(n,i){i===void 0&&(i={});var s=t.call(this,Ke(Ke({},e.defaultAdapter),n))||this;return s.isFocused=!1,s.receivedUserInput=!1,s.valid=!0,s.useNativeValidation=!0,s.validateOnValueChange=!0,s.helperText=i.helperText,s.characterCounter=i.characterCounter,s.leadingIcon=i.leadingIcon,s.trailingIcon=i.trailingIcon,s.inputFocusHandler=function(){s.activateFocus()},s.inputBlurHandler=function(){s.deactivateFocus()},s.inputInputHandler=function(){s.handleInput()},s.setPointerXOffset=function(r){s.setTransformOrigin(r)},s.textFieldInteractionHandler=function(){s.handleTextFieldInteraction()},s.validationAttributeChangeHandler=function(r){s.handleValidationAttributeChange(r)},s}return Object.defineProperty(e,"cssClasses",{get:function(){return ob},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Gl},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return yf},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var n=this.getNativeInput().type;return lb.indexOf(n)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n,i,s,r;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var o=an(vf),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.registerInputInteractionHandler(l,this.setPointerXOffset)}}catch(h){n={error:h}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}try{for(var c=an(_f),u=c.next();!u.done;u=c.next()){var l=u.value;this.adapter.registerTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(h){s={error:h}}finally{try{u&&!u.done&&(r=c.return)&&r.call(c)}finally{if(s)throw s.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var n,i,s,r;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var o=an(vf),a=o.next();!a.done;a=o.next()){var l=a.value;this.adapter.deregisterInputInteractionHandler(l,this.setPointerXOffset)}}catch(h){n={error:h}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}try{for(var c=an(_f),u=c.next();!u.done;u=c.next()){var l=u.value;this.adapter.deregisterTextFieldInteractionHandler(l,this.textFieldInteractionHandler)}}catch(h){s={error:h}}finally{try{u&&!u.done&&(r=c.return)&&r.call(c)}finally{if(s)throw s.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var n=this.adapter.getNativeInput();n&&n.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(n){var i=this;n.some(function(s){return ab.indexOf(s)>-1?(i.styleValidity(!0),i.adapter.setLabelRequired(i.getNativeInput().required),!0):!1}),n.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(n){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(n){var i=this.adapter.getLabelWidth()*yf.LABEL_SCALE;this.adapter.notchOutline(i)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(n){if(!(this.isDisabled()||this.adapter.hasOutline())){var i=n.touches,s=i?i[0]:n,r=s.target.getBoundingClientRect(),o=s.clientX-r.left;this.adapter.setLineRippleTransformOrigin(o)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var n=this.isValid();this.styleValidity(n),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(n){if(this.getValue()!==n&&(this.getNativeInput().value=n),this.setcharacterCounter(n.length),this.validateOnValueChange){var i=this.isValid();this.styleValidity(i)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(n){this.valid=n,this.styleValidity(n);var i=!n&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(i)},e.prototype.setValidateOnValueChange=function(n){this.validateOnValueChange=n},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(n){this.useNativeValidation=n},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(n){this.getNativeInput().disabled=n,this.styleDisabled(n)},e.prototype.setHelperTextContent=function(n){this.helperText&&this.helperText.setContent(n)},e.prototype.setLeadingIconAriaLabel=function(n){this.leadingIcon&&this.leadingIcon.setAriaLabel(n)},e.prototype.setLeadingIconContent=function(n){this.leadingIcon&&this.leadingIcon.setContent(n)},e.prototype.setTrailingIconAriaLabel=function(n){this.trailingIcon&&this.trailingIcon.setAriaLabel(n)},e.prototype.setTrailingIconContent=function(n){this.trailingIcon&&this.trailingIcon.setContent(n)},e.prototype.setcharacterCounter=function(n){if(!!this.characterCounter){var i=this.getNativeInput().maxLength;if(i===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(n,i)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(n){var i=e.cssClasses.INVALID;if(n?this.adapter.removeClass(i):this.adapter.addClass(i),this.helperText){this.helperText.setValidity(n);var s=this.helperText.isValidation();if(!s)return;var r=this.helperText.isVisible(),o=this.helperText.getId();r&&o?this.adapter.setInputAttr(Gl.ARIA_DESCRIBEDBY,o):this.adapter.removeInputAttr(Gl.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(n){var i=e.cssClasses.FOCUSED;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.styleDisabled=function(n){var i=e.cssClasses,s=i.DISABLED,r=i.INVALID;n?(this.adapter.addClass(s),this.adapter.removeClass(r)):this.adapter.removeClass(s),this.leadingIcon&&this.leadingIcon.setDisabled(n),this.trailingIcon&&this.trailingIcon.setDisabled(n)},e.prototype.styleFloating=function(n){var i=e.cssClasses.LABEL_FLOATING;n?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.getNativeInput=function(){var n=this.adapter?this.adapter.getNativeInput():null;return n||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(rn);/**
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
 */var on={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},vn={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+on.ROOT};/**
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
 */var cb=function(t){en(e,t);function e(n){return t.call(this,Ke(Ke({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return on},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return vn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(vn.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(n){this.adapter.setContent(n)},e.prototype.isPersistent=function(){return this.adapter.hasClass(on.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(n){n?this.adapter.addClass(on.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(on.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(on.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(n){n?this.adapter.addClass(on.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(on.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(vn.ARIA_HIDDEN)},e.prototype.setValidity=function(n){var i=this.adapter.hasClass(on.HELPER_TEXT_PERSISTENT),s=this.adapter.hasClass(on.HELPER_TEXT_VALIDATION_MSG),r=s&&!n;r?(this.showToScreenReader(),this.adapter.getAttr(vn.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(vn.ROLE,"alert")):this.adapter.removeAttr(vn.ROLE),!i&&!r&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(vn.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var n=this;this.adapter.removeAttr(vn.ROLE),requestAnimationFrame(function(){n.adapter.setAttr(vn.ROLE,"alert")})},e}(rn);function hb(t){let e,n,i,s,r,o,a,l;const c=t[22].default,u=ue(c,t,t[21],null);let h=[{class:n=fe(je({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1]},t[8]))},{style:i=Object.entries(t[9]).map(Ef).concat([t[4]]).join(" ")},{for:s=t[5]||(t[11]?t[11].id:void 0)},t[12]],d={};for(let f=0;f<h.length;f+=1)d=M(d,h[f]);return{c(){e=ve("label"),u&&u.c(),this.h()},l(f){e=Ee(f,"LABEL",{class:!0,style:!0,for:!0});var m=Ie(e);u&&u.l(m),m.forEach(U),this.h()},h(){te(e,d)},m(f,m){J(f,e,m),u&&u.m(e,null),t[24](e),o=!0,a||(l=[ee(r=Ye.call(null,e,t[2])),ee(t[10].call(null,e))],a=!0)},p(f,m){u&&u.p&&(!o||m&2097152)&&he(u,c,f,f[21],o?ce(c,f[21],m,null):de(f[21]),null),te(e,d=ge(h,[(!o||m&267&&n!==(n=fe(je({[f[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":f[0],"mdc-floating-label--required":f[1]},f[8]))))&&{class:n},(!o||m&528&&i!==(i=Object.entries(f[9]).map(Ef).concat([f[4]]).join(" ")))&&{style:i},(!o||m&32&&s!==(s=f[5]||(f[11]?f[11].id:void 0)))&&{for:s},m&4096&&f[12]])),r&&Re(r.update)&&m&4&&r.update.call(null,f[2])},i(f){o||(N(u,f),o=!0)},o(f){P(u,f),o=!1},d(f){f&&U(e),u&&u.d(f),t[24](null),a=!1,Le(l)}}}function db(t){let e,n,i,s,r,o,a;const l=t[22].default,c=ue(l,t,t[21],null);let u=[{class:n=fe(je({[t[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":t[0],"mdc-floating-label--required":t[1]},t[8]))},{style:i=Object.entries(t[9]).map(If).concat([t[4]]).join(" ")},t[12]],h={};for(let d=0;d<u.length;d+=1)h=M(h,u[d]);return{c(){e=ve("span"),c&&c.c(),this.h()},l(d){e=Ee(d,"SPAN",{class:!0,style:!0});var f=Ie(e);c&&c.l(f),f.forEach(U),this.h()},h(){te(e,h)},m(d,f){J(d,e,f),c&&c.m(e,null),t[23](e),r=!0,o||(a=[ee(s=Ye.call(null,e,t[2])),ee(t[10].call(null,e))],o=!0)},p(d,f){c&&c.p&&(!r||f&2097152)&&he(c,l,d,d[21],r?ce(l,d[21],f,null):de(d[21]),null),te(e,h=ge(u,[(!r||f&267&&n!==(n=fe(je({[d[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":d[0],"mdc-floating-label--required":d[1]},d[8]))))&&{class:n},(!r||f&528&&i!==(i=Object.entries(d[9]).map(If).concat([d[4]]).join(" ")))&&{style:i},f&4096&&d[12]])),s&&Re(s.update)&&f&4&&s.update.call(null,d[2])},i(d){r||(N(c,d),r=!0)},o(d){P(c,d),r=!1},d(d){d&&U(e),c&&c.d(d),t[23](null),o=!1,Le(a)}}}function fb(t){let e,n,i,s;const r=[db,hb],o=[];function a(l,c){return l[6]?0:1}return e=a(t),n=o[e]=r[e](t),{c(){n.c(),i=nt()},l(l){n.l(l),i=nt()},m(l,c){o[e].m(l,c),J(l,i,c),s=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(St(),P(o[u],1,1,()=>{o[u]=null}),Ct(),n=o[e],n?n.p(l,c):(n=o[e]=r[e](l),n.c()),N(n,1),n.m(i.parentNode,i))},i(l){s||(N(n),s=!0)},o(l){P(n),s=!1},d(l){o[e].d(l),l&&U(i)}}}const If=([t,e])=>`${t}: ${e};`,Ef=([t,e])=>`${t}: ${e};`;function mb(t,e,n){const i=["use","class","style","for","floatAbove","required","wrapped","shake","float","setRequired","getWidth","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e;var a;const l=Ve(_e());let{use:c=[]}=e,{class:u=""}=e,{style:h=""}=e,{for:d=void 0}=e,{floatAbove:f=!1}=e,{required:m=!1}=e,{wrapped:g=!1}=e,y,b,S={},T={},A=(a=Ht("SMUI:generic:input:props"))!==null&&a!==void 0?a:{},H=f,C=m;$t(()=>{n(18,b=new tb({addClass:p,removeClass:E,getWidth:()=>{var Se,$;const Me=w(),He=Me.cloneNode(!0);(Se=Me.parentNode)===null||Se===void 0||Se.appendChild(He),He.classList.add("smui-floating-label--remove-transition"),He.classList.add("smui-floating-label--force-size"),He.classList.remove("mdc-floating-label--float-above");const ct=He.scrollWidth;return($=Me.parentNode)===null||$===void 0||$.removeChild(He),ct},registerInteractionHandler:(Se,$)=>w().addEventListener(Se,$),deregisterInteractionHandler:(Se,$)=>w().removeEventListener(Se,$)}));const G={get element(){return w()},addStyle:F,removeStyle:I};return Qe(y,"SMUIFloatingLabel:mount",G),b.init(),()=>{Qe(y,"SMUIFloatingLabel:unmount",G),b.destroy()}});function p(G){S[G]||n(8,S[G]=!0,S)}function E(G){(!(G in S)||S[G])&&n(8,S[G]=!1,S)}function F(G,Se){T[G]!=Se&&(Se===""||Se==null?(delete T[G],n(9,T)):n(9,T[G]=Se,T))}function I(G){G in T&&(delete T[G],n(9,T))}function L(G){b.shake(G)}function X(G){n(0,f=G)}function _(G){n(1,m=G)}function k(){return b.getWidth()}function w(){return y}function V(G){re[G?"unshift":"push"](()=>{y=G,n(7,y)})}function j(G){re[G?"unshift":"push"](()=>{y=G,n(7,y)})}return t.$$set=G=>{e=M(M({},e),ke(G)),n(12,s=Y(e,i)),"use"in G&&n(2,c=G.use),"class"in G&&n(3,u=G.class),"style"in G&&n(4,h=G.style),"for"in G&&n(5,d=G.for),"floatAbove"in G&&n(0,f=G.floatAbove),"required"in G&&n(1,m=G.required),"wrapped"in G&&n(6,g=G.wrapped),"$$scope"in G&&n(21,o=G.$$scope)},t.$$.update=()=>{t.$$.dirty&786433&&b&&H!==f&&(n(19,H=f),b.float(f)),t.$$.dirty&1310722&&b&&C!==m&&(n(20,C=m),b.setRequired(m))},[f,m,c,u,h,d,g,y,S,T,l,A,s,L,X,_,k,w,b,H,C,o,r,V,j]}class bf extends De{constructor(e){super();Ne(this,e,mb,fb,Oe,{use:2,class:3,style:4,for:5,floatAbove:0,required:1,wrapped:6,shake:13,float:14,setRequired:15,getWidth:16,getElement:17})}get shake(){return this.$$.ctx[13]}get float(){return this.$$.ctx[14]}get setRequired(){return this.$$.ctx[15]}get getWidth(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}function pb(t){let e,n,i,s,r,o,a=[{class:n=fe(je({[t[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":t[3]},t[5]))},{style:i=Object.entries(t[6]).map(Tf).concat([t[2]]).join(" ")},t[8]],l={};for(let c=0;c<a.length;c+=1)l=M(l,a[c]);return{c(){e=ve("div"),this.h()},l(c){e=Ee(c,"DIV",{class:!0,style:!0}),Ie(e).forEach(U),this.h()},h(){te(e,l)},m(c,u){J(c,e,u),t[13](e),r||(o=[ee(s=Ye.call(null,e,t[0])),ee(t[7].call(null,e))],r=!0)},p(c,[u]){te(e,l=ge(a,[u&42&&n!==(n=fe(je({[c[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":c[3]},c[5])))&&{class:n},u&68&&i!==(i=Object.entries(c[6]).map(Tf).concat([c[2]]).join(" "))&&{style:i},u&256&&c[8]])),s&&Re(s.update)&&u&1&&s.update.call(null,c[0])},i:Dt,o:Dt,d(c){c&&U(e),t[13](null),r=!1,Le(o)}}}const Tf=([t,e])=>`${t}: ${e};`;function gb(t,e,n){const i=["use","class","style","active","activate","deactivate","setRippleCenter","getElement"];let s=Y(e,i);const r=Ve(_e());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{active:c=!1}=e,u,h,d={},f={};$t(()=>(h=new nb({addClass:g,removeClass:y,hasClass:m,setStyle:b,registerEventHandler:(p,E)=>H().addEventListener(p,E),deregisterEventHandler:(p,E)=>H().removeEventListener(p,E)}),h.init(),()=>{h.destroy()}));function m(p){return p in d?d[p]:H().classList.contains(p)}function g(p){d[p]||n(5,d[p]=!0,d)}function y(p){(!(p in d)||d[p])&&n(5,d[p]=!1,d)}function b(p,E){f[p]!=E&&(E===""||E==null?(delete f[p],n(6,f)):n(6,f[p]=E,f))}function S(){h.activate()}function T(){h.deactivate()}function A(p){h.setRippleCenter(p)}function H(){return u}function C(p){re[p?"unshift":"push"](()=>{u=p,n(4,u)})}return t.$$set=p=>{e=M(M({},e),ke(p)),n(8,s=Y(e,i)),"use"in p&&n(0,o=p.use),"class"in p&&n(1,a=p.class),"style"in p&&n(2,l=p.style),"active"in p&&n(3,c=p.active)},[o,a,l,c,u,d,f,r,s,S,T,A,H,C]}class yb extends De{constructor(e){super();Ne(this,e,gb,pb,Oe,{use:0,class:1,style:2,active:3,activate:9,deactivate:10,setRippleCenter:11,getElement:12})}get activate(){return this.$$.ctx[9]}get deactivate(){return this.$$.ctx[10]}get setRippleCenter(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function Af(t){let e,n,i;const s=t[14].default,r=ue(s,t,t[13],null);return{c(){e=ve("div"),r&&r.c(),this.h()},l(o){e=Ee(o,"DIV",{class:!0,style:!0});var a=Ie(e);r&&r.l(a),a.forEach(U),this.h()},h(){Zt(e,"class","mdc-notched-outline__notch"),Zt(e,"style",n=Object.entries(t[7]).map(Sf).join(" "))},m(o,a){J(o,e,a),r&&r.m(e,null),i=!0},p(o,a){r&&r.p&&(!i||a&8192)&&he(r,s,o,o[13],i?ce(s,o[13],a,null):de(o[13]),null),(!i||a&128&&n!==(n=Object.entries(o[7]).map(Sf).join(" ")))&&Zt(e,"style",n)},i(o){i||(N(r,o),i=!0)},o(o){P(r,o),i=!1},d(o){o&&U(e),r&&r.d(o)}}}function vb(t){let e,n,i,s,r,o,a,l,c,u,h=!t[3]&&Af(t),d=[{class:o=fe(je({[t[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":t[2],"mdc-notched-outline--no-label":t[3]},t[6]))},t[9]],f={};for(let m=0;m<d.length;m+=1)f=M(f,d[m]);return{c(){e=ve("div"),n=ve("div"),i=Ze(),h&&h.c(),s=Ze(),r=ve("div"),this.h()},l(m){e=Ee(m,"DIV",{class:!0});var g=Ie(e);n=Ee(g,"DIV",{class:!0}),Ie(n).forEach(U),i=$e(g),h&&h.l(g),s=$e(g),r=Ee(g,"DIV",{class:!0}),Ie(r).forEach(U),g.forEach(U),this.h()},h(){Zt(n,"class","mdc-notched-outline__leading"),Zt(r,"class","mdc-notched-outline__trailing"),te(e,f)},m(m,g){J(m,e,g),At(e,n),At(e,i),h&&h.m(e,null),At(e,s),At(e,r),t[15](e),l=!0,c||(u=[ee(a=Ye.call(null,e,t[0])),ee(t[8].call(null,e)),Fe(e,"SMUIFloatingLabel:mount",t[16]),Fe(e,"SMUIFloatingLabel:unmount",t[17])],c=!0)},p(m,[g]){m[3]?h&&(St(),P(h,1,1,()=>{h=null}),Ct()):h?(h.p(m,g),g&8&&N(h,1)):(h=Af(m),h.c(),N(h,1),h.m(e,s)),te(e,f=ge(d,[(!l||g&78&&o!==(o=fe(je({[m[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":m[2],"mdc-notched-outline--no-label":m[3]},m[6]))))&&{class:o},g&512&&m[9]])),a&&Re(a.update)&&g&1&&a.update.call(null,m[0])},i(m){l||(N(h),l=!0)},o(m){P(h),l=!1},d(m){m&&U(e),h&&h.d(),t[15](null),c=!1,Le(u)}}}const Sf=([t,e])=>`${t}: ${e};`;function _b(t,e,n){const i=["use","class","notched","noLabel","notch","closeNotch","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e;const a=Ve(_e());let{use:l=[]}=e,{class:c=""}=e,{notched:u=!1}=e,{noLabel:h=!1}=e,d,f,m,g={},y={};$t(()=>(f=new rb({addClass:b,removeClass:S,setNotchWidthProperty:L=>T("width",L+"px"),removeNotchWidthProperty:()=>A("width")}),f.init(),()=>{f.destroy()}));function b(L){g[L]||n(6,g[L]=!0,g)}function S(L){(!(L in g)||g[L])&&n(6,g[L]=!1,g)}function T(L,X){y[L]!=X&&(X===""||X==null?(delete y[L],n(7,y)):n(7,y[L]=X,y))}function A(L){L in y&&(delete y[L],n(7,y))}function H(L){f.notch(L)}function C(){f.closeNotch()}function p(){return d}function E(L){re[L?"unshift":"push"](()=>{d=L,n(5,d)})}const F=L=>n(4,m=L.detail),I=()=>n(4,m=void 0);return t.$$set=L=>{e=M(M({},e),ke(L)),n(9,s=Y(e,i)),"use"in L&&n(0,l=L.use),"class"in L&&n(1,c=L.class),"notched"in L&&n(2,u=L.notched),"noLabel"in L&&n(3,h=L.noLabel),"$$scope"in L&&n(13,o=L.$$scope)},t.$$.update=()=>{t.$$.dirty&16&&(m?(m.addStyle("transition-duration","0s"),b("mdc-notched-outline--upgraded"),requestAnimationFrame(()=>{m&&m.removeStyle("transition-duration")})):S("mdc-notched-outline--upgraded"))},[l,c,u,h,m,d,g,y,a,s,H,C,p,o,r,E,F,I]}class Ib extends De{constructor(e){super();Ne(this,e,_b,vb,Oe,{use:0,class:1,notched:2,noLabel:3,notch:10,closeNotch:11,getElement:12})}get notch(){return this.$$.ctx[10]}get closeNotch(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function Eb(t){let e;const n=t[10].default,i=ue(n,t,t[12],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&4096)&&he(i,n,s,s[12],e?ce(n,s[12],r,null):de(s[12]),null)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function bb(t){let e,n,i;const s=[{use:[t[7],...t[0]]},{class:fe(je({[t[1]]:!0,[t[5]]:!0},t[4]))},t[6],t[8]];var r=t[2];function o(a){let l={$$slots:{default:[Eb]},$$scope:{ctx:a}};for(let c=0;c<s.length;c+=1)l=M(l,s[c]);return{props:l}}return r&&(e=new r(o(t)),t[11](e)),{c(){e&&Je(e.$$.fragment),n=nt()},l(a){e&&dt(e.$$.fragment,a),n=nt()},m(a,l){e&&ze(e,a,l),J(a,n,l),i=!0},p(a,[l]){const c=l&499?ge(s,[l&129&&{use:[a[7],...a[0]]},l&50&&{class:fe(je({[a[1]]:!0,[a[5]]:!0},a[4]))},l&64&&Ge(a[6]),l&256&&Ge(a[8])]):{};if(l&4096&&(c.$$scope={dirty:l,ctx:a}),r!==(r=a[2])){if(e){St();const u=e;P(u.$$.fragment,1,0,()=>{We(u,1)}),Ct()}r?(e=new r(o(a)),a[11](e),Je(e.$$.fragment),N(e.$$.fragment,1),ze(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(a){i||(e&&N(e.$$.fragment,a),i=!0)},o(a){e&&P(e.$$.fragment,a),i=!1},d(a){t[11](null),a&&U(n),e&&We(e,a)}}}const Hn={component:df,class:"",classMap:{},contexts:{},props:{}};function Tb(t,e,n){const i=["use","class","component","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e,{use:a=[]}=e,{class:l=""}=e,c;const u=Hn.class,h={},d=[],f=Hn.contexts,m=Hn.props;let{component:g=Hn.component}=e;Object.entries(Hn.classMap).forEach(([T,A])=>{const H=Ht(A);H&&"subscribe"in H&&d.push(H.subscribe(C=>{n(4,h[T]=C,h)}))});const y=Ve(_e());for(let T in f)f.hasOwnProperty(T)&&ot(T,f[T]);Gn(()=>{for(const T of d)T()});function b(){return c.getElement()}function S(T){re[T?"unshift":"push"](()=>{c=T,n(3,c)})}return t.$$set=T=>{e=M(M({},e),ke(T)),n(8,s=Y(e,i)),"use"in T&&n(0,a=T.use),"class"in T&&n(1,l=T.class),"component"in T&&n(2,g=T.component),"$$scope"in T&&n(12,o=T.$$scope)},[a,l,g,c,h,u,m,y,s,b,r,S,o]}class Ab extends De{constructor(e){super();Ne(this,e,Tb,bb,Oe,{use:0,class:1,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const Cf=Object.assign({},Hn);function lt(t){return new Proxy(Ab,{construct:function(e,n){return Object.assign(Hn,Cf,t),new e(...n)},get:function(e,n){return Object.assign(Hn,Cf,t),e[n]}})}var Sb=lt({class:"mdc-text-field-helper-line",component:yn}),Cb=lt({class:"mdc-text-field__affix mdc-text-field__affix--prefix",component:ci}),wb=lt({class:"mdc-text-field__affix mdc-text-field__affix--suffix",component:ci});function Lb(t){let e,n,i,s,r,o=[{class:n=fe({[t[1]]:!0,"mdc-text-field__input":!0})},{type:t[2]},{placeholder:t[3]},t[4],t[6],t[10]],a={};for(let l=0;l<o.length;l+=1)a=M(a,o[l]);return{c(){e=ve("input"),this.h()},l(l){e=Ee(l,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){te(e,a)},m(l,c){J(l,e,c),e.autofocus&&e.focus(),t[25](e),s||(r=[ee(i=Ye.call(null,e,t[0])),ee(t[7].call(null,e)),Fe(e,"input",t[26]),Fe(e,"change",t[9]),Fe(e,"blur",t[23]),Fe(e,"focus",t[24])],s=!0)},p(l,[c]){te(e,a=ge(o,[c&2&&n!==(n=fe({[l[1]]:!0,"mdc-text-field__input":!0}))&&{class:n},c&4&&{type:l[2]},c&8&&{placeholder:l[3]},c&16&&l[4],c&64&&l[6],c&1024&&l[10]])),i&&Re(i.update)&&c&1&&i.update.call(null,l[0])},i:Dt,o:Dt,d(l){l&&U(e),t[25](null),s=!1,Le(r)}}}function Ob(t){if(t===""){const e=new Number(Number.NaN);return e.length=0,e}return+t}function Rb(t,e,n){const i=["use","class","type","placeholder","value","files","dirty","invalid","updateInvalid","emptyValueNull","emptyValueUndefined","getAttr","addAttr","removeAttr","focus","getElement"];let s=Y(e,i);const r=Ve(_e());let{use:o=[]}=e,{class:a=""}=e,{type:l="text"}=e,{placeholder:c=" "}=e,{value:u=""}=e,{files:h=null}=e,{dirty:d=!1}=e,{invalid:f=!1}=e,{updateInvalid:m=!0}=e,{emptyValueNull:g=u===null}=e,{emptyValueUndefined:y=u===void 0}=e,b,S={},T={};$t(()=>{m&&n(14,f=b.matches(":invalid"))});function A(w){if(l==="file"){n(12,h=w.currentTarget.files);return}if(w.currentTarget.value===""&&g){n(11,u=null);return}if(w.currentTarget.value===""&&y){n(11,u=void 0);return}switch(l){case"number":case"range":n(11,u=Ob(w.currentTarget.value));break;default:n(11,u=w.currentTarget.value);break}}function H(w){(l==="file"||l==="range")&&A(w),n(13,d=!0),m&&n(14,f=b.matches(":invalid"))}function C(w){var V;return w in S?(V=S[w])!==null&&V!==void 0?V:null:I().getAttribute(w)}function p(w,V){S[w]!==V&&n(6,S[w]=V,S)}function E(w){(!(w in S)||S[w]!=null)&&n(6,S[w]=void 0,S)}function F(){I().focus()}function I(){return b}function L(w){Yi.call(this,t,w)}function X(w){Yi.call(this,t,w)}function _(w){re[w?"unshift":"push"](()=>{b=w,n(5,b)})}const k=w=>l!=="file"&&A(w);return t.$$set=w=>{e=M(M({},e),ke(w)),n(10,s=Y(e,i)),"use"in w&&n(0,o=w.use),"class"in w&&n(1,a=w.class),"type"in w&&n(2,l=w.type),"placeholder"in w&&n(3,c=w.placeholder),"value"in w&&n(11,u=w.value),"files"in w&&n(12,h=w.files),"dirty"in w&&n(13,d=w.dirty),"invalid"in w&&n(14,f=w.invalid),"updateInvalid"in w&&n(15,m=w.updateInvalid),"emptyValueNull"in w&&n(16,g=w.emptyValueNull),"emptyValueUndefined"in w&&n(17,y=w.emptyValueUndefined)},t.$$.update=()=>{t.$$.dirty&2068&&(l==="file"?(delete T.value,n(4,T),n(2,l),n(11,u)):n(4,T.value=u==null?"":u,T))},[o,a,l,c,T,b,S,r,A,H,s,u,h,d,f,m,g,y,C,p,E,F,I,L,X,_,k]}class kb extends De{constructor(e){super();Ne(this,e,Rb,Lb,Oe,{use:0,class:1,type:2,placeholder:3,value:11,files:12,dirty:13,invalid:14,updateInvalid:15,emptyValueNull:16,emptyValueUndefined:17,getAttr:18,addAttr:19,removeAttr:20,focus:21,getElement:22})}get getAttr(){return this.$$.ctx[18]}get addAttr(){return this.$$.ctx[19]}get removeAttr(){return this.$$.ctx[20]}get focus(){return this.$$.ctx[21]}get getElement(){return this.$$.ctx[22]}}function Nb(t){let e,n,i,s,r,o,a=[{class:n=fe({[t[2]]:!0,"mdc-text-field__input":!0})},{style:i=`${t[4]?"":"resize: none; "}${t[3]}`},t[6],t[9]],l={};for(let c=0;c<a.length;c+=1)l=M(l,a[c]);return{c(){e=ve("textarea"),this.h()},l(c){e=Ee(c,"TEXTAREA",{class:!0,style:!0}),Ie(e).forEach(U),this.h()},h(){te(e,l)},m(c,u){J(c,e,u),e.autofocus&&e.focus(),t[20](e),eu(e,t[0]),r||(o=[ee(s=Ye.call(null,e,t[1])),ee(t[7].call(null,e)),Fe(e,"change",t[8]),Fe(e,"blur",t[18]),Fe(e,"focus",t[19]),Fe(e,"input",t[21])],r=!0)},p(c,[u]){te(e,l=ge(a,[u&4&&n!==(n=fe({[c[2]]:!0,"mdc-text-field__input":!0}))&&{class:n},u&24&&i!==(i=`${c[4]?"":"resize: none; "}${c[3]}`)&&{style:i},u&64&&c[6],u&512&&c[9]])),s&&Re(s.update)&&u&2&&s.update.call(null,c[1]),u&1&&eu(e,c[0])},i:Dt,o:Dt,d(c){c&&U(e),t[20](null),r=!1,Le(o)}}}function Db(t,e,n){const i=["use","class","style","value","dirty","invalid","updateInvalid","resizable","getAttr","addAttr","removeAttr","focus","getElement"];let s=Y(e,i);const r=Ve(_e());let{use:o=[]}=e,{class:a=""}=e,{style:l=""}=e,{value:c=""}=e,{dirty:u=!1}=e,{invalid:h=!1}=e,{updateInvalid:d=!0}=e,{resizable:f=!0}=e,m,g={};$t(()=>{d&&n(11,h=m.matches(":invalid"))});function y(){n(10,u=!0),d&&n(11,h=m.matches(":invalid"))}function b(I){var L;return I in g?(L=g[I])!==null&&L!==void 0?L:null:H().getAttribute(I)}function S(I,L){g[I]!==L&&n(6,g[I]=L,g)}function T(I){(!(I in g)||g[I]!=null)&&n(6,g[I]=void 0,g)}function A(){H().focus()}function H(){return m}function C(I){Yi.call(this,t,I)}function p(I){Yi.call(this,t,I)}function E(I){re[I?"unshift":"push"](()=>{m=I,n(5,m)})}function F(){c=this.value,n(0,c)}return t.$$set=I=>{e=M(M({},e),ke(I)),n(9,s=Y(e,i)),"use"in I&&n(1,o=I.use),"class"in I&&n(2,a=I.class),"style"in I&&n(3,l=I.style),"value"in I&&n(0,c=I.value),"dirty"in I&&n(10,u=I.dirty),"invalid"in I&&n(11,h=I.invalid),"updateInvalid"in I&&n(12,d=I.updateInvalid),"resizable"in I&&n(4,f=I.resizable)},[c,o,a,l,f,m,g,r,y,s,u,h,d,b,S,T,A,H,C,p,E,F]}class Mb extends De{constructor(e){super();Ne(this,e,Db,Nb,Oe,{use:1,class:2,style:3,value:0,dirty:10,invalid:11,updateInvalid:12,resizable:4,getAttr:13,addAttr:14,removeAttr:15,focus:16,getElement:17})}get getAttr(){return this.$$.ctx[13]}get addAttr(){return this.$$.ctx[14]}get removeAttr(){return this.$$.ctx[15]}get focus(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}const Pb=t=>({}),wf=t=>({}),Fb=t=>({}),Lf=t=>({}),Ub=t=>({}),Of=t=>({}),Vb=t=>({}),Rf=t=>({}),Hb=t=>({}),kf=t=>({}),Bb=t=>({}),Nf=t=>({}),jb=t=>({}),Df=t=>({}),qb=t=>({}),Mf=t=>({}),xb=t=>({}),Pf=t=>({}),Gb=t=>({}),Ff=t=>({}),zb=t=>({}),Uf=t=>({}),Wb=t=>({}),Vf=t=>({});function Kb(t){let e,n,i,s,r,o,a,l,c,u,h,d,f,m;const g=t[50].label,y=ue(g,t,t[89],kf);i=new bo({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[Qb]},$$scope:{ctx:t}}});const b=t[50].default,S=ue(b,t,t[89],null);o=new bo({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[Yb]},$$scope:{ctx:t}}});const T=t[50].ripple,A=ue(T,t,t[89],Lf);let H=[{class:l=fe(je({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||!t[41].label,"mdc-text-field--with-leading-icon":t[41].leadingIcon,"mdc-text-field--with-trailing-icon":t[41].trailingIcon,"mdc-text-field--invalid":t[1]},t[25]))},{style:c=Object.entries(t[26]).map(Qf).concat([t[10]]).join(" ")},vo(t[42],["input$","label$","ripple$","outline$","helperLine$"])],C={};for(let p=0;p<H.length;p+=1)C=M(C,H[p]);return{c(){e=ve("div"),y&&y.c(),n=Ze(),Je(i.$$.fragment),s=Ze(),S&&S.c(),r=Ze(),Je(o.$$.fragment),a=Ze(),A&&A.c(),this.h()},l(p){e=Ee(p,"DIV",{class:!0,style:!0});var E=Ie(e);y&&y.l(E),n=$e(E),dt(i.$$.fragment,E),s=$e(E),S&&S.l(E),r=$e(E),dt(o.$$.fragment,E),a=$e(E),A&&A.l(E),E.forEach(U),this.h()},h(){te(e,C)},m(p,E){J(p,e,E),y&&y.m(e,null),At(e,n),ze(i,e,null),At(e,s),S&&S.m(e,null),At(e,r),ze(o,e,null),At(e,a),A&&A.m(e,null),t[79](e),d=!0,f||(m=[ee(u=qi.call(null,e,{ripple:t[11],unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40]})),ee(h=Ye.call(null,e,t[8])),ee(t[34].call(null,e)),Fe(e,"SMUITextfieldLeadingIcon:mount",t[80]),Fe(e,"SMUITextfieldLeadingIcon:unmount",t[81]),Fe(e,"SMUITextfieldTrailingIcon:mount",t[82]),Fe(e,"SMUITextfieldTrailingIcon:unmount",t[83])],f=!0)},p(p,E){y&&y.p&&(!d||E[2]&134217728)&&he(y,g,p,p[89],d?ce(g,p[89],E,Hb):de(p[89]),kf);const F={};E[2]&134217728&&(F.$$scope={dirty:E,ctx:p}),i.$set(F),S&&S.p&&(!d||E[2]&134217728)&&he(S,b,p,p[89],d?ce(b,p[89],E,null):de(p[89]),null);const I={};E[2]&134217728&&(I.$$scope={dirty:E,ctx:p}),o.$set(I),A&&A.p&&(!d||E[2]&134217728)&&he(A,T,p,p[89],d?ce(T,p[89],E,Fb):de(p[89]),Lf),te(e,C=ge(H,[(!d||E[0]&33673730|E[1]&1024&&l!==(l=fe(je({[p[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":p[12],"mdc-text-field--textarea":p[14],"mdc-text-field--filled":p[15]==="filled","mdc-text-field--outlined":p[15]==="outlined","smui-text-field--standard":p[15]==="standard"&&!p[14],"mdc-text-field--no-label":p[16]||!p[41].label,"mdc-text-field--with-leading-icon":p[41].leadingIcon,"mdc-text-field--with-trailing-icon":p[41].trailingIcon,"mdc-text-field--invalid":p[1]},p[25]))))&&{class:l},(!d||E[0]&67109888&&c!==(c=Object.entries(p[26]).map(Qf).concat([p[10]]).join(" ")))&&{style:c},E[1]&2048&&vo(p[42],["input$","label$","ripple$","outline$","helperLine$"])])),u&&Re(u.update)&&E[0]&2048&&u.update.call(null,{ripple:p[11],unbounded:!1,addClass:p[38],removeClass:p[39],addStyle:p[40]}),h&&Re(h.update)&&E[0]&256&&h.update.call(null,p[8])},i(p){d||(N(y,p),N(i.$$.fragment,p),N(S,p),N(o.$$.fragment,p),N(A,p),d=!0)},o(p){P(y,p),P(i.$$.fragment,p),P(S,p),P(o.$$.fragment,p),P(A,p),d=!1},d(p){p&&U(e),y&&y.d(p),We(i),S&&S.d(p),We(o),A&&A.d(p),t[79](null),f=!1,Le(m)}}}function Xb(t){let e,n,i,s,r,o,a,l,c,u,h,d,f,m,g,y,b,S,T=!t[14]&&t[15]!=="outlined"&&Hf(t),A=(t[14]||t[15]==="outlined")&&qf(t);s=new bo({props:{key:"SMUI:textfield:icon:leading",value:!0,$$slots:{default:[eT]},$$scope:{ctx:t}}});const H=t[50].default,C=ue(H,t,t[89],null),p=[nT,tT],E=[];function F(_,k){return _[14]&&typeof _[0]=="string"?0:1}a=F(t),l=E[a]=p[a](t),u=new bo({props:{key:"SMUI:textfield:icon:leading",value:!1,$$slots:{default:[rT]},$$scope:{ctx:t}}});let I=!t[14]&&t[15]!=="outlined"&&t[11]&&Wf(t),L=[{class:d=fe(je({[t[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":t[12],"mdc-text-field--textarea":t[14],"mdc-text-field--filled":t[15]==="filled","mdc-text-field--outlined":t[15]==="outlined","smui-text-field--standard":t[15]==="standard"&&!t[14],"mdc-text-field--no-label":t[16]||t[17]==null&&!t[41].label,"mdc-text-field--label-floating":t[28]||t[0]!=null&&t[0]!=="","mdc-text-field--with-leading-icon":t[35](t[22])?t[41].leadingIcon:t[22],"mdc-text-field--with-trailing-icon":t[35](t[23])?t[41].trailingIcon:t[23],"mdc-text-field--with-internal-counter":t[14]&&t[41].internalCounter,"mdc-text-field--invalid":t[1]},t[25]))},{style:f=Object.entries(t[26]).map(Xf).concat([t[10]]).join(" ")},{for:void 0},vo(t[42],["input$","label$","ripple$","outline$","helperLine$"])],X={};for(let _=0;_<L.length;_+=1)X=M(X,L[_]);return{c(){e=ve("label"),T&&T.c(),n=Ze(),A&&A.c(),i=Ze(),Je(s.$$.fragment),r=Ze(),C&&C.c(),o=Ze(),l.c(),c=Ze(),Je(u.$$.fragment),h=Ze(),I&&I.c(),this.h()},l(_){e=Ee(_,"LABEL",{class:!0,style:!0,for:!0});var k=Ie(e);T&&T.l(k),n=$e(k),A&&A.l(k),i=$e(k),dt(s.$$.fragment,k),r=$e(k),C&&C.l(k),o=$e(k),l.l(k),c=$e(k),dt(u.$$.fragment,k),h=$e(k),I&&I.l(k),k.forEach(U),this.h()},h(){te(e,X)},m(_,k){J(_,e,k),T&&T.m(e,null),At(e,n),A&&A.m(e,null),At(e,i),ze(s,e,null),At(e,r),C&&C.m(e,null),At(e,o),E[a].m(e,null),At(e,c),ze(u,e,null),At(e,h),I&&I.m(e,null),t[72](e),y=!0,b||(S=[ee(m=qi.call(null,e,{ripple:!t[14]&&t[15]==="filled",unbounded:!1,addClass:t[38],removeClass:t[39],addStyle:t[40],eventTarget:t[33],activeTarget:t[33],initPromise:t[37]})),ee(g=Ye.call(null,e,t[8])),ee(t[34].call(null,e)),Fe(e,"SMUITextfieldLeadingIcon:mount",t[73]),Fe(e,"SMUITextfieldLeadingIcon:unmount",t[74]),Fe(e,"SMUITextfieldTrailingIcon:mount",t[75]),Fe(e,"SMUITextfieldTrailingIcon:unmount",t[76]),Fe(e,"SMUITextfieldCharacterCounter:mount",t[77]),Fe(e,"SMUITextfieldCharacterCounter:unmount",t[78])],b=!0)},p(_,k){!_[14]&&_[15]!=="outlined"?T?(T.p(_,k),k[0]&49152&&N(T,1)):(T=Hf(_),T.c(),N(T,1),T.m(e,n)):T&&(St(),P(T,1,1,()=>{T=null}),Ct()),_[14]||_[15]==="outlined"?A?(A.p(_,k),k[0]&49152&&N(A,1)):(A=qf(_),A.c(),N(A,1),A.m(e,i)):A&&(St(),P(A,1,1,()=>{A=null}),Ct());const w={};k[2]&134217728&&(w.$$scope={dirty:k,ctx:_}),s.$set(w),C&&C.p&&(!y||k[2]&134217728)&&he(C,H,_,_[89],y?ce(H,_[89],k,null):de(_[89]),null);let V=a;a=F(_),a===V?E[a].p(_,k):(St(),P(E[V],1,1,()=>{E[V]=null}),Ct(),l=E[a],l?l.p(_,k):(l=E[a]=p[a](_),l.c()),N(l,1),l.m(e,c));const j={};k[2]&134217728&&(j.$$scope={dirty:k,ctx:_}),u.$set(j),!_[14]&&_[15]!=="outlined"&&_[11]?I?(I.p(_,k),k[0]&51200&&N(I,1)):(I=Wf(_),I.c(),N(I,1),I.m(e,null)):I&&(St(),P(I,1,1,()=>{I=null}),Ct()),te(e,X=ge(L,[(!y||k[0]&314823171|k[1]&1024&&d!==(d=fe(je({[_[9]]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":_[12],"mdc-text-field--textarea":_[14],"mdc-text-field--filled":_[15]==="filled","mdc-text-field--outlined":_[15]==="outlined","smui-text-field--standard":_[15]==="standard"&&!_[14],"mdc-text-field--no-label":_[16]||_[17]==null&&!_[41].label,"mdc-text-field--label-floating":_[28]||_[0]!=null&&_[0]!=="","mdc-text-field--with-leading-icon":_[35](_[22])?_[41].leadingIcon:_[22],"mdc-text-field--with-trailing-icon":_[35](_[23])?_[41].trailingIcon:_[23],"mdc-text-field--with-internal-counter":_[14]&&_[41].internalCounter,"mdc-text-field--invalid":_[1]},_[25]))))&&{class:d},(!y||k[0]&67109888&&f!==(f=Object.entries(_[26]).map(Xf).concat([_[10]]).join(" ")))&&{style:f},{for:void 0},k[1]&2048&&vo(_[42],["input$","label$","ripple$","outline$","helperLine$"])])),m&&Re(m.update)&&k[0]&49152|k[1]&4&&m.update.call(null,{ripple:!_[14]&&_[15]==="filled",unbounded:!1,addClass:_[38],removeClass:_[39],addStyle:_[40],eventTarget:_[33],activeTarget:_[33],initPromise:_[37]}),g&&Re(g.update)&&k[0]&256&&g.update.call(null,_[8])},i(_){y||(N(T),N(A),N(s.$$.fragment,_),N(C,_),N(l),N(u.$$.fragment,_),N(I),y=!0)},o(_){P(T),P(A),P(s.$$.fragment,_),P(C,_),P(l),P(u.$$.fragment,_),P(I),y=!1},d(_){_&&U(e),T&&T.d(),A&&A.d(),We(s),C&&C.d(_),E[a].d(),We(u),I&&I.d(),t[72](null),b=!1,Le(S)}}}function Qb(t){let e;const n=t[50].leadingIcon,i=ue(n,t,t[89],Rf);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?ce(n,s[89],r,Vb):de(s[89]),Rf)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function Yb(t){let e;const n=t[50].trailingIcon,i=ue(n,t,t[89],Of);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?ce(n,s[89],r,Ub):de(s[89]),Of)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function Hf(t){let e,n,i,s=t[15]==="filled"&&Bf(),r=!t[16]&&(t[17]!=null||t[41].label)&&jf(t);return{c(){s&&s.c(),e=Ze(),r&&r.c(),n=nt()},l(o){s&&s.l(o),e=$e(o),r&&r.l(o),n=nt()},m(o,a){s&&s.m(o,a),J(o,e,a),r&&r.m(o,a),J(o,n,a),i=!0},p(o,a){o[15]==="filled"?s||(s=Bf(),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),!o[16]&&(o[17]!=null||o[41].label)?r?(r.p(o,a),a[0]&196608|a[1]&1024&&N(r,1)):(r=jf(o),r.c(),N(r,1),r.m(n.parentNode,n)):r&&(St(),P(r,1,1,()=>{r=null}),Ct())},i(o){i||(N(r),i=!0)},o(o){P(r),i=!1},d(o){s&&s.d(o),o&&U(e),r&&r.d(o),o&&U(n)}}}function Bf(t){let e;return{c(){e=ve("span"),this.h()},l(n){e=Ee(n,"SPAN",{class:!0}),Ie(e).forEach(U),this.h()},h(){Zt(e,"class","mdc-text-field__ripple")},m(n,i){J(n,e,i)},d(n){n&&U(e)}}}function jf(t){let e,n;const i=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},Gt(t[42],"label$")];let s={$$slots:{default:[Jb]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=M(s,i[r]);return e=new bf({props:s}),t[51](e),{c(){Je(e.$$.fragment)},l(r){dt(e.$$.fragment,r)},m(r,o){ze(e,r,o),n=!0},p(r,o){const a=o[0]&268443649|o[1]&2048?ge(i,[o[0]&268435457&&{floatAbove:r[28]||r[0]!=null&&r[0]!==""},o[0]&8192&&{required:r[13]},i[2],o[1]&2048&&Ge(Gt(r[42],"label$"))]):{};o[0]&131072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(N(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){t[51](null),We(e,r)}}}function Jb(t){let e=(t[17]==null?"":t[17])+"",n,i;const s=t[50].label,r=ue(s,t,t[89],Vf);return{c(){n=bn(e),r&&r.c()},l(o){n=mi(o,e),r&&r.l(o)},m(o,a){J(o,n,a),r&&r.m(o,a),i=!0},p(o,a){(!i||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&Qi(n,e),r&&r.p&&(!i||a[2]&134217728)&&he(r,s,o,o[89],i?ce(s,o[89],a,Wb):de(o[89]),Vf)},i(o){i||(N(r,o),i=!0)},o(o){P(r,o),i=!1},d(o){o&&U(n),r&&r.d(o)}}}function qf(t){let e,n;const i=[{noLabel:t[16]||t[17]==null&&!t[41].label},Gt(t[42],"outline$")];let s={$$slots:{default:[$b]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=M(s,i[r]);return e=new Ib({props:s}),t[53](e),{c(){Je(e.$$.fragment)},l(r){dt(e.$$.fragment,r)},m(r,o){ze(e,r,o),n=!0},p(r,o){const a=o[0]&196608|o[1]&3072?ge(i,[o[0]&196608|o[1]&1024&&{noLabel:r[16]||r[17]==null&&!r[41].label},o[1]&2048&&Ge(Gt(r[42],"outline$"))]):{};o[0]&268640289|o[1]&3072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(N(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){t[53](null),We(e,r)}}}function xf(t){let e,n;const i=[{floatAbove:t[28]||t[0]!=null&&t[0]!==""},{required:t[13]},{wrapped:!0},Gt(t[42],"label$")];let s={$$slots:{default:[Zb]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=M(s,i[r]);return e=new bf({props:s}),t[52](e),{c(){Je(e.$$.fragment)},l(r){dt(e.$$.fragment,r)},m(r,o){ze(e,r,o),n=!0},p(r,o){const a=o[0]&268443649|o[1]&2048?ge(i,[o[0]&268435457&&{floatAbove:r[28]||r[0]!=null&&r[0]!==""},o[0]&8192&&{required:r[13]},i[2],o[1]&2048&&Ge(Gt(r[42],"label$"))]):{};o[0]&131072|o[2]&134217728&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(N(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){t[52](null),We(e,r)}}}function Zb(t){let e=(t[17]==null?"":t[17])+"",n,i;const s=t[50].label,r=ue(s,t,t[89],Uf);return{c(){n=bn(e),r&&r.c()},l(o){n=mi(o,e),r&&r.l(o)},m(o,a){J(o,n,a),r&&r.m(o,a),i=!0},p(o,a){(!i||a[0]&131072)&&e!==(e=(o[17]==null?"":o[17])+"")&&Qi(n,e),r&&r.p&&(!i||a[2]&134217728)&&he(r,s,o,o[89],i?ce(s,o[89],a,zb):de(o[89]),Uf)},i(o){i||(N(r,o),i=!0)},o(o){P(r,o),i=!1},d(o){o&&U(n),r&&r.d(o)}}}function $b(t){let e,n,i=!t[16]&&(t[17]!=null||t[41].label)&&xf(t);return{c(){i&&i.c(),e=nt()},l(s){i&&i.l(s),e=nt()},m(s,r){i&&i.m(s,r),J(s,e,r),n=!0},p(s,r){!s[16]&&(s[17]!=null||s[41].label)?i?(i.p(s,r),r[0]&196608|r[1]&1024&&N(i,1)):(i=xf(s),i.c(),N(i,1),i.m(e.parentNode,e)):i&&(St(),P(i,1,1,()=>{i=null}),Ct())},i(s){n||(N(i),n=!0)},o(s){P(i),n=!1},d(s){i&&i.d(s),s&&U(e)}}}function eT(t){let e;const n=t[50].leadingIcon,i=ue(n,t,t[89],Ff);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?ce(n,s[89],r,Gb):de(s[89]),Ff)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function tT(t){let e,n,i,s,r,o,a,l,c,u;const h=t[50].prefix,d=ue(h,t,t[89],Mf);let f=t[20]!=null&&Gf(t);const m=[{type:t[18]},{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},t[16]&&t[17]!=null?{placeholder:t[17]}:{},Gt(t[42],"input$")];function g(p){t[63](p)}function y(p){t[64](p)}function b(p){t[65](p)}function S(p){t[66](p)}let T={};for(let p=0;p<m.length;p+=1)T=M(T,m[p]);t[0]!==void 0&&(T.value=t[0]),t[3]!==void 0&&(T.files=t[3]),t[4]!==void 0&&(T.dirty=t[4]),t[1]!==void 0&&(T.invalid=t[1]),i=new kb({props:T}),t[62](i),re.push(()=>An(i,"value",g)),re.push(()=>An(i,"files",y)),re.push(()=>An(i,"dirty",b)),re.push(()=>An(i,"invalid",S)),i.$on("blur",t[67]),i.$on("focus",t[68]),i.$on("blur",t[69]),i.$on("focus",t[70]);let A=t[21]!=null&&zf(t);const H=t[50].suffix,C=ue(H,t,t[89],Df);return{c(){d&&d.c(),e=Ze(),f&&f.c(),n=Ze(),Je(i.$$.fragment),l=Ze(),A&&A.c(),c=Ze(),C&&C.c()},l(p){d&&d.l(p),e=$e(p),f&&f.l(p),n=$e(p),dt(i.$$.fragment,p),l=$e(p),A&&A.l(p),c=$e(p),C&&C.l(p)},m(p,E){d&&d.m(p,E),J(p,e,E),f&&f.m(p,E),J(p,n,E),ze(i,p,E),J(p,l,E),A&&A.m(p,E),J(p,c,E),C&&C.m(p,E),u=!0},p(p,E){d&&d.p&&(!u||E[2]&134217728)&&he(d,h,p,p[89],u?ce(h,p[89],E,qb):de(p[89]),Mf),p[20]!=null?f?(f.p(p,E),E[0]&1048576&&N(f,1)):(f=Gf(p),f.c(),N(f,1),f.m(n.parentNode,n)):f&&(St(),P(f,1,1,()=>{f=null}),Ct());const F=E[0]&135213056|E[1]&2048?ge(m,[E[0]&262144&&{type:p[18]},E[0]&4096&&{disabled:p[12]},E[0]&8192&&{required:p[13]},E[0]&524288&&{updateInvalid:p[19]},E[0]&134217728&&{"aria-controls":p[27]},E[0]&134217728&&{"aria-describedby":p[27]},E[0]&196608&&Ge(p[16]&&p[17]!=null?{placeholder:p[17]}:{}),E[1]&2048&&Ge(Gt(p[42],"input$"))]):{};!s&&E[0]&1&&(s=!0,F.value=p[0],Tn(()=>s=!1)),!r&&E[0]&8&&(r=!0,F.files=p[3],Tn(()=>r=!1)),!o&&E[0]&16&&(o=!0,F.dirty=p[4],Tn(()=>o=!1)),!a&&E[0]&2&&(a=!0,F.invalid=p[1],Tn(()=>a=!1)),i.$set(F),p[21]!=null?A?(A.p(p,E),E[0]&2097152&&N(A,1)):(A=zf(p),A.c(),N(A,1),A.m(c.parentNode,c)):A&&(St(),P(A,1,1,()=>{A=null}),Ct()),C&&C.p&&(!u||E[2]&134217728)&&he(C,H,p,p[89],u?ce(H,p[89],E,jb):de(p[89]),Df)},i(p){u||(N(d,p),N(f),N(i.$$.fragment,p),N(A),N(C,p),u=!0)},o(p){P(d,p),P(f),P(i.$$.fragment,p),P(A),P(C,p),u=!1},d(p){d&&d.d(p),p&&U(e),f&&f.d(p),p&&U(n),t[62](null),We(i,p),p&&U(l),A&&A.d(p),p&&U(c),C&&C.d(p)}}}function nT(t){let e,n,i,s,r,o,a,l;const c=[{disabled:t[12]},{required:t[13]},{updateInvalid:t[19]},{"aria-controls":t[27]},{"aria-describedby":t[27]},Gt(t[42],"input$")];function u(y){t[55](y)}function h(y){t[56](y)}function d(y){t[57](y)}let f={};for(let y=0;y<c.length;y+=1)f=M(f,c[y]);t[0]!==void 0&&(f.value=t[0]),t[4]!==void 0&&(f.dirty=t[4]),t[1]!==void 0&&(f.invalid=t[1]),n=new Mb({props:f}),t[54](n),re.push(()=>An(n,"value",u)),re.push(()=>An(n,"dirty",h)),re.push(()=>An(n,"invalid",d)),n.$on("blur",t[58]),n.$on("focus",t[59]),n.$on("blur",t[60]),n.$on("focus",t[61]);const m=t[50].internalCounter,g=ue(m,t,t[89],Pf);return{c(){e=ve("span"),Je(n.$$.fragment),o=Ze(),g&&g.c(),this.h()},l(y){e=Ee(y,"SPAN",{class:!0});var b=Ie(e);dt(n.$$.fragment,b),o=$e(b),g&&g.l(b),b.forEach(U),this.h()},h(){Zt(e,"class",a=fe({"mdc-text-field__resizer":!("input$resizable"in t[42])||t[42].input$resizable}))},m(y,b){J(y,e,b),ze(n,e,null),At(e,o),g&&g.m(e,null),l=!0},p(y,b){const S=b[0]&134754304|b[1]&2048?ge(c,[b[0]&4096&&{disabled:y[12]},b[0]&8192&&{required:y[13]},b[0]&524288&&{updateInvalid:y[19]},b[0]&134217728&&{"aria-controls":y[27]},b[0]&134217728&&{"aria-describedby":y[27]},b[1]&2048&&Ge(Gt(y[42],"input$"))]):{};!i&&b[0]&1&&(i=!0,S.value=y[0],Tn(()=>i=!1)),!s&&b[0]&16&&(s=!0,S.dirty=y[4],Tn(()=>s=!1)),!r&&b[0]&2&&(r=!0,S.invalid=y[1],Tn(()=>r=!1)),n.$set(S),g&&g.p&&(!l||b[2]&134217728)&&he(g,m,y,y[89],l?ce(m,y[89],b,xb):de(y[89]),Pf),(!l||b[1]&2048&&a!==(a=fe({"mdc-text-field__resizer":!("input$resizable"in y[42])||y[42].input$resizable})))&&Zt(e,"class",a)},i(y){l||(N(n.$$.fragment,y),N(g,y),l=!0)},o(y){P(n.$$.fragment,y),P(g,y),l=!1},d(y){y&&U(e),t[54](null),We(n),g&&g.d(y)}}}function Gf(t){let e,n;return e=new Cb({props:{$$slots:{default:[iT]},$$scope:{ctx:t}}}),{c(){Je(e.$$.fragment)},l(i){dt(e.$$.fragment,i)},m(i,s){ze(e,i,s),n=!0},p(i,s){const r={};s[0]&1048576|s[2]&134217728&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){n||(N(e.$$.fragment,i),n=!0)},o(i){P(e.$$.fragment,i),n=!1},d(i){We(e,i)}}}function iT(t){let e;return{c(){e=bn(t[20])},l(n){e=mi(n,t[20])},m(n,i){J(n,e,i)},p(n,i){i[0]&1048576&&Qi(e,n[20])},d(n){n&&U(e)}}}function zf(t){let e,n;return e=new wb({props:{$$slots:{default:[sT]},$$scope:{ctx:t}}}),{c(){Je(e.$$.fragment)},l(i){dt(e.$$.fragment,i)},m(i,s){ze(e,i,s),n=!0},p(i,s){const r={};s[0]&2097152|s[2]&134217728&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){n||(N(e.$$.fragment,i),n=!0)},o(i){P(e.$$.fragment,i),n=!1},d(i){We(e,i)}}}function sT(t){let e;return{c(){e=bn(t[21])},l(n){e=mi(n,t[21])},m(n,i){J(n,e,i)},p(n,i){i[0]&2097152&&Qi(e,n[21])},d(n){n&&U(e)}}}function rT(t){let e;const n=t[50].trailingIcon,i=ue(n,t,t[89],Nf);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?ce(n,s[89],r,Bb):de(s[89]),Nf)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function Wf(t){let e,n;const i=[Gt(t[42],"ripple$")];let s={};for(let r=0;r<i.length;r+=1)s=M(s,i[r]);return e=new yb({props:s}),t[71](e),{c(){Je(e.$$.fragment)},l(r){dt(e.$$.fragment,r)},m(r,o){ze(e,r,o),n=!0},p(r,o){const a=o[1]&2048?ge(i,[Ge(Gt(r[42],"ripple$"))]):{};e.$set(a)},i(r){n||(N(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){t[71](null),We(e,r)}}}function Kf(t){let e,n;const i=[Gt(t[42],"helperLine$")];let s={$$slots:{default:[oT]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=M(s,i[r]);return e=new Sb({props:s}),e.$on("SMUITextfieldHelperText:id",t[84]),e.$on("SMUITextfieldHelperText:mount",t[85]),e.$on("SMUITextfieldHelperText:unmount",t[86]),e.$on("SMUITextfieldCharacterCounter:mount",t[87]),e.$on("SMUITextfieldCharacterCounter:unmount",t[88]),{c(){Je(e.$$.fragment)},l(r){dt(e.$$.fragment,r)},m(r,o){ze(e,r,o),n=!0},p(r,o){const a=o[1]&2048?ge(i,[Ge(Gt(r[42],"helperLine$"))]):{};o[2]&134217728&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){n||(N(e.$$.fragment,r),n=!0)},o(r){P(e.$$.fragment,r),n=!1},d(r){We(e,r)}}}function oT(t){let e;const n=t[50].helper,i=ue(n,t,t[89],wf);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[2]&134217728)&&he(i,n,s,s[89],e?ce(n,s[89],r,Pb):de(s[89]),wf)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function aT(t){let e,n,i,s,r;const o=[Xb,Kb],a=[];function l(u,h){return u[36]?0:1}e=l(t),n=a[e]=o[e](t);let c=t[41].helper&&Kf(t);return{c(){n.c(),i=Ze(),c&&c.c(),s=nt()},l(u){n.l(u),i=$e(u),c&&c.l(u),s=nt()},m(u,h){a[e].m(u,h),J(u,i,h),c&&c.m(u,h),J(u,s,h),r=!0},p(u,h){n.p(u,h),u[41].helper?c?(c.p(u,h),h[1]&1024&&N(c,1)):(c=Kf(u),c.c(),N(c,1),c.m(s.parentNode,s)):c&&(St(),P(c,1,1,()=>{c=null}),Ct())},i(u){r||(N(n),N(c),r=!0)},o(u){P(n),P(c),r=!1},d(u){a[e].d(u),u&&U(i),c&&c.d(u),u&&U(s)}}}const Xf=([t,e])=>`${t}: ${e};`,Qf=([t,e])=>`${t}: ${e};`;function lT(t,e,n){let i;const s=["use","class","style","ripple","disabled","required","textarea","variant","noLabel","label","type","value","files","invalid","updateInvalid","dirty","prefix","suffix","validateOnValueChange","useNativeValidation","withLeadingIcon","withTrailingIcon","input","floatingLabel","lineRipple","notchedOutline","focus","layout","getElement"];let r=Y(e,s),{$$slots:o={},$$scope:a}=e;const l=qm(o),{applyPassive:c}=af,u=Ve(_e());let h=()=>{};function d(v){return v===h}let{use:f=[]}=e,{class:m=""}=e,{style:g=""}=e,{ripple:y=!0}=e,{disabled:b=!1}=e,{required:S=!1}=e,{textarea:T=!1}=e,{variant:A=T?"outlined":"standard"}=e,{noLabel:H=!1}=e,{label:C=void 0}=e,{type:p="text"}=e,{value:E=h}=e,{files:F=h}=e;const I=!d(E)||!d(F);d(E)&&(E=void 0),d(F)&&(F=null);let{invalid:L=h}=e,{updateInvalid:X=d(L)}=e;d(L)&&(L=!1);let{dirty:_=!1}=e,{prefix:k=void 0}=e,{suffix:w=void 0}=e,{validateOnValueChange:V=X}=e,{useNativeValidation:j=X}=e,{withLeadingIcon:G=h}=e,{withTrailingIcon:Se=h}=e,{input:$=void 0}=e,{floatingLabel:Me=void 0}=e,{lineRipple:He=void 0}=e,{notchedOutline:ct=void 0}=e,gt,Te,yt={},Ce={},B,me=!1,ht=Ht("SMUI:addLayoutListener"),In,qn,D=new Promise(v=>qn=v),se,Be,Tt,Jt,En=E;ht&&(In=ht(Xs)),$t(()=>{if(n(48,Te=new ub({addClass:Xi,removeClass:Ks,hasClass:To,registerTextFieldInteractionHandler:(v,tt)=>fi().addEventListener(v,tt),deregisterTextFieldInteractionHandler:(v,tt)=>fi().removeEventListener(v,tt),registerValidationAttributeChangeHandler:v=>{const tt=Lo=>Lo.map(Oo=>Oo.attributeName).filter(Oo=>Oo),Wl=new MutationObserver(Lo=>{j&&v(tt(Lo))}),Pm={attributes:!0};return $&&Wl.observe($.getElement(),Pm),Wl},deregisterValidationAttributeChangeHandler:v=>{v.disconnect()},getNativeInput:()=>{var v;return(v=$==null?void 0:$.getElement())!==null&&v!==void 0?v:null},setInputAttr:(v,tt)=>{$==null||$.addAttr(v,tt)},removeInputAttr:v=>{$==null||$.removeAttr(v)},isFocused:()=>document.activeElement===($==null?void 0:$.getElement()),registerInputInteractionHandler:(v,tt)=>{$==null||$.getElement().addEventListener(v,tt,c())},deregisterInputInteractionHandler:(v,tt)=>{$==null||$.getElement().removeEventListener(v,tt,c())},floatLabel:v=>Me&&Me.float(v),getLabelWidth:()=>Me?Me.getWidth():0,hasLabel:()=>!!Me,shakeLabel:v=>Me&&Me.shake(v),setLabelRequired:v=>Me&&Me.setRequired(v),activateLineRipple:()=>He&&He.activate(),deactivateLineRipple:()=>He&&He.deactivate(),setLineRippleTransformOrigin:v=>He&&He.setRippleCenter(v),closeOutline:()=>ct&&ct.closeNotch(),hasOutline:()=>!!ct,notchOutline:v=>ct&&ct.notch(v)},{get helperText(){return Tt},get characterCounter(){return Jt},get leadingIcon(){return se},get trailingIcon(){return Be}})),I){if($==null)throw new Error("SMUI Textfield initialized without Input component.");Te.init()}else $m().then(()=>{if($==null)throw new Error("SMUI Textfield initialized without Input component.");Te.init()});return qn(),()=>{Te.destroy()}}),Gn(()=>{In&&In()});function To(v){var tt;return v in yt?(tt=yt[v])!==null&&tt!==void 0?tt:null:fi().classList.contains(v)}function Xi(v){yt[v]||n(25,yt[v]=!0,yt)}function Ks(v){(!(v in yt)||yt[v])&&n(25,yt[v]=!1,yt)}function tn(v,tt){Ce[v]!=tt&&(tt===""||tt==null?(delete Ce[v],n(26,Ce)):n(26,Ce[v]=tt,Ce))}function Ao(){$==null||$.focus()}function Xs(){if(Te){const v=Te.shouldFloat;Te.notchOutline(v)}}function fi(){return gt}function So(v){re[v?"unshift":"push"](()=>{Me=v,n(5,Me)})}function Co(v){re[v?"unshift":"push"](()=>{Me=v,n(5,Me)})}function O(v){re[v?"unshift":"push"](()=>{ct=v,n(7,ct)})}function Q(v){re[v?"unshift":"push"](()=>{$=v,n(2,$)})}function K(v){E=v,n(0,E)}function Pe(v){_=v,n(4,_)}function xn(v){L=v,n(1,L),n(48,Te),n(19,X)}const wo=()=>n(28,me=!1),rm=()=>n(28,me=!0),om=v=>Qe(gt,"blur",v),am=v=>Qe(gt,"focus",v);function lm(v){re[v?"unshift":"push"](()=>{$=v,n(2,$)})}function um(v){E=v,n(0,E)}function cm(v){F=v,n(3,F)}function hm(v){_=v,n(4,_)}function dm(v){L=v,n(1,L),n(48,Te),n(19,X)}const fm=()=>n(28,me=!1),mm=()=>n(28,me=!0),pm=v=>Qe(gt,"blur",v),gm=v=>Qe(gt,"focus",v);function ym(v){re[v?"unshift":"push"](()=>{He=v,n(6,He)})}function vm(v){re[v?"unshift":"push"](()=>{gt=v,n(24,gt)})}const _m=v=>n(29,se=v.detail),Im=()=>n(29,se=void 0),Em=v=>n(30,Be=v.detail),bm=()=>n(30,Be=void 0),Tm=v=>n(32,Jt=v.detail),Am=()=>n(32,Jt=void 0);function Sm(v){re[v?"unshift":"push"](()=>{gt=v,n(24,gt)})}const Cm=v=>n(29,se=v.detail),wm=()=>n(29,se=void 0),Lm=v=>n(30,Be=v.detail),Om=()=>n(30,Be=void 0),Rm=v=>n(27,B=v.detail),km=v=>n(31,Tt=v.detail),Nm=()=>{n(27,B=void 0),n(31,Tt=void 0)},Dm=v=>n(32,Jt=v.detail),Mm=()=>n(32,Jt=void 0);return t.$$set=v=>{e=M(M({},e),ke(v)),n(42,r=Y(e,s)),"use"in v&&n(8,f=v.use),"class"in v&&n(9,m=v.class),"style"in v&&n(10,g=v.style),"ripple"in v&&n(11,y=v.ripple),"disabled"in v&&n(12,b=v.disabled),"required"in v&&n(13,S=v.required),"textarea"in v&&n(14,T=v.textarea),"variant"in v&&n(15,A=v.variant),"noLabel"in v&&n(16,H=v.noLabel),"label"in v&&n(17,C=v.label),"type"in v&&n(18,p=v.type),"value"in v&&n(0,E=v.value),"files"in v&&n(3,F=v.files),"invalid"in v&&n(1,L=v.invalid),"updateInvalid"in v&&n(19,X=v.updateInvalid),"dirty"in v&&n(4,_=v.dirty),"prefix"in v&&n(20,k=v.prefix),"suffix"in v&&n(21,w=v.suffix),"validateOnValueChange"in v&&n(43,V=v.validateOnValueChange),"useNativeValidation"in v&&n(44,j=v.useNativeValidation),"withLeadingIcon"in v&&n(22,G=v.withLeadingIcon),"withTrailingIcon"in v&&n(23,Se=v.withTrailingIcon),"input"in v&&n(2,$=v.input),"floatingLabel"in v&&n(5,Me=v.floatingLabel),"lineRipple"in v&&n(6,He=v.lineRipple),"notchedOutline"in v&&n(7,ct=v.notchedOutline),"$$scope"in v&&n(89,a=v.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&4&&n(33,i=$&&$.getElement()),t.$$.dirty[0]&524290|t.$$.dirty[1]&131072&&Te&&Te.isValid()!==!L&&(X?n(1,L=!Te.isValid()):Te.setValid(!L)),t.$$.dirty[1]&135168&&Te&&Te.getValidateOnValueChange()!==V&&Te.setValidateOnValueChange(d(V)?!1:V),t.$$.dirty[1]&139264&&Te&&Te.setUseNativeValidation(d(j)?!0:j),t.$$.dirty[0]&4096|t.$$.dirty[1]&131072&&Te&&Te.setDisabled(b),t.$$.dirty[0]&1|t.$$.dirty[1]&393216&&Te&&I&&En!==E){n(49,En=E);const v=`${E}`;Te.getValue()!==v&&Te.setValue(v)}},[E,L,$,F,_,Me,He,ct,f,m,g,y,b,S,T,A,H,C,p,X,k,w,G,Se,gt,yt,Ce,B,me,se,Be,Tt,Jt,i,u,d,I,D,Xi,Ks,tn,l,r,V,j,Ao,Xs,fi,Te,En,o,So,Co,O,Q,K,Pe,xn,wo,rm,om,am,lm,um,cm,hm,dm,fm,mm,pm,gm,ym,vm,_m,Im,Em,bm,Tm,Am,Sm,Cm,wm,Lm,Om,Rm,km,Nm,Dm,Mm,a]}class AA extends De{constructor(e){super();Ne(this,e,lT,aT,Oe,{use:8,class:9,style:10,ripple:11,disabled:12,required:13,textarea:14,variant:15,noLabel:16,label:17,type:18,value:0,files:3,invalid:1,updateInvalid:19,dirty:4,prefix:20,suffix:21,validateOnValueChange:43,useNativeValidation:44,withLeadingIcon:22,withTrailingIcon:23,input:2,floatingLabel:5,lineRipple:6,notchedOutline:7,focus:45,layout:46,getElement:47},null,[-1,-1,-1,-1])}get focus(){return this.$$.ctx[45]}get layout(){return this.$$.ctx[46]}get getElement(){return this.$$.ctx[47]}}function uT(t){let e;return{c(){e=bn(t[8])},l(n){e=mi(n,t[8])},m(n,i){J(n,e,i)},p(n,i){i&256&&Qi(e,n[8])},i:Dt,o:Dt,d(n){n&&U(e)}}}function cT(t){let e;const n=t[13].default,i=ue(n,t,t[12],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&4096)&&he(i,n,s,s[12],e?ce(n,s[12],r,null):de(s[12]),null)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function hT(t){let e,n,i,s,r,o,a,l,c;const u=[cT,uT],h=[];function d(g,y){return g[8]==null?0:1}n=d(t),i=h[n]=u[n](t);let f=[{class:s=fe(je({[t[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":t[3],"mdc-text-field-helper-text--validation-msg":t[4]},t[6]))},{"aria-hidden":r=t[3]?void 0:"true"},{id:t[2]},t[7],t[10]],m={};for(let g=0;g<f.length;g+=1)m=M(m,f[g]);return{c(){e=ve("div"),i.c(),this.h()},l(g){e=Ee(g,"DIV",{class:!0,"aria-hidden":!0,id:!0});var y=Ie(e);i.l(y),y.forEach(U),this.h()},h(){te(e,m)},m(g,y){J(g,e,y),h[n].m(e,null),t[14](e),a=!0,l||(c=[ee(o=Ye.call(null,e,t[0])),ee(t[9].call(null,e))],l=!0)},p(g,[y]){let b=n;n=d(g),n===b?h[n].p(g,y):(St(),P(h[b],1,1,()=>{h[b]=null}),Ct(),i=h[n],i?i.p(g,y):(i=h[n]=u[n](g),i.c()),N(i,1),i.m(e,null)),te(e,m=ge(f,[(!a||y&90&&s!==(s=fe(je({[g[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":g[3],"mdc-text-field-helper-text--validation-msg":g[4]},g[6]))))&&{class:s},(!a||y&8&&r!==(r=g[3]?void 0:"true"))&&{"aria-hidden":r},(!a||y&4)&&{id:g[2]},y&128&&g[7],y&1024&&g[10]])),o&&Re(o.update)&&y&1&&o.update.call(null,g[0])},i(g){a||(N(i),a=!0)},o(g){P(i),a=!1},d(g){g&&U(e),h[n].d(),t[14](null),l=!1,Le(c)}}}let dT=0;function fT(t,e,n){const i=["use","class","id","persistent","validationMsg","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e;const a=Ve(_e());let{use:l=[]}=e,{class:c=""}=e,{id:u="SMUI-textfield-helper-text-"+dT++}=e,{persistent:h=!1}=e,{validationMsg:d=!1}=e,f,m,g={},y={},b;$t(()=>(m=new cb({addClass:T,removeClass:A,hasClass:S,getAttr:H,setAttr:C,removeAttr:p,setContent:I=>{n(8,b=I)}}),u.startsWith("SMUI-textfield-helper-text-")&&Qe(E(),"SMUITextfieldHelperText:id",u),Qe(E(),"SMUITextfieldHelperText:mount",m),m.init(),()=>{Qe(E(),"SMUITextfieldHelperText:unmount",m),m.destroy()}));function S(I){return I in g?g[I]:E().classList.contains(I)}function T(I){g[I]||n(6,g[I]=!0,g)}function A(I){(!(I in g)||g[I])&&n(6,g[I]=!1,g)}function H(I){var L;return I in y?(L=y[I])!==null&&L!==void 0?L:null:E().getAttribute(I)}function C(I,L){y[I]!==L&&n(7,y[I]=L,y)}function p(I){(!(I in y)||y[I]!=null)&&n(7,y[I]=void 0,y)}function E(){return f}function F(I){re[I?"unshift":"push"](()=>{f=I,n(5,f)})}return t.$$set=I=>{e=M(M({},e),ke(I)),n(10,s=Y(e,i)),"use"in I&&n(0,l=I.use),"class"in I&&n(1,c=I.class),"id"in I&&n(2,u=I.id),"persistent"in I&&n(3,h=I.persistent),"validationMsg"in I&&n(4,d=I.validationMsg),"$$scope"in I&&n(12,o=I.$$scope)},[l,c,u,h,d,f,g,y,b,a,s,E,o,r,F]}class SA extends De{constructor(e){super();Ne(this,e,fT,hT,Oe,{use:0,class:1,id:2,persistent:3,validationMsg:4,getElement:11})}get getElement(){return this.$$.ctx[11]}}/**
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
 */var mT={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},pT={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},Ws={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},et;(function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"})(et||(et={}));var xi;(function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"})(xi||(xi={}));/**
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
 */var Bn,_n,le={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};Bn={},Bn[""+le.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",Bn[""+le.LIST_ITEM_CLASS]="mdc-list-item",Bn[""+le.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",Bn[""+le.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",Bn[""+le.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",Bn[""+le.ROOT]="mdc-list";var Gi=(_n={},_n[""+le.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",_n[""+le.LIST_ITEM_CLASS]="mdc-deprecated-list-item",_n[""+le.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",_n[""+le.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",_n[""+le.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",_n[""+le.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",_n[""+le.ROOT]="mdc-deprecated-list",_n),jn={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+le.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+le.LIST_ITEM_CLASS+` a,
    .`+Gi[le.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Gi[le.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+le.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+le.LIST_ITEM_CLASS+` a,
    .`+le.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+le.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+Gi[le.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+Gi[le.LIST_ITEM_CLASS]+` a,
    .`+Gi[le.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+Gi[le.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},ut={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};/**
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
 */var gT=["input","button","textarea","select"],di=function(t){var e=t.target;if(!!e){var n=(""+e.tagName).toLowerCase();gT.indexOf(n)===-1&&t.preventDefault()}};/**
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
 */function yT(){var t={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return t}function vT(t,e){for(var n=new Map,i=0;i<t;i++){var s=e(i).trim();if(!!s){var r=s[0].toLowerCase();n.has(r)||n.set(r,[]),n.get(r).push({text:s.toLowerCase(),index:i})}}return n.forEach(function(o){o.sort(function(a,l){return a.index-l.index})}),n}function zl(t,e){var n=t.nextChar,i=t.focusItemAtIndex,s=t.sortedIndexByFirstChar,r=t.focusedItemIndex,o=t.skipFocus,a=t.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){Jf(e)},ut.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+n;var l;return e.typeaheadBuffer.length===1?l=_T(s,r,a,e):l=IT(s,a,e),l!==-1&&!o&&i(l),l}function _T(t,e,n,i){var s=i.typeaheadBuffer[0],r=t.get(s);if(!r)return-1;if(s===i.currentFirstChar&&r[i.sortedIndexCursor].index===e){i.sortedIndexCursor=(i.sortedIndexCursor+1)%r.length;var o=r[i.sortedIndexCursor].index;if(!n(o))return o}i.currentFirstChar=s;var a=-1,l;for(l=0;l<r.length;l++)if(!n(r[l].index)){a=l;break}for(;l<r.length;l++)if(r[l].index>e&&!n(r[l].index)){a=l;break}return a!==-1?(i.sortedIndexCursor=a,r[i.sortedIndexCursor].index):-1}function IT(t,e,n){var i=n.typeaheadBuffer[0],s=t.get(i);if(!s)return-1;var r=s[n.sortedIndexCursor];if(r.text.lastIndexOf(n.typeaheadBuffer,0)===0&&!e(r.index))return r.index;for(var o=(n.sortedIndexCursor+1)%s.length,a=-1;o!==n.sortedIndexCursor;){var l=s[o],c=l.text.lastIndexOf(n.typeaheadBuffer,0)===0,u=!e(l.index);if(c&&u){a=o;break}o=(o+1)%s.length}return a!==-1?(n.sortedIndexCursor=a,s[n.sortedIndexCursor].index):-1}function Yf(t){return t.typeaheadBuffer.length>0}function Jf(t){t.typeaheadBuffer=""}function Zf(t,e){var n=t.event,i=t.isTargetListItem,s=t.focusedItemIndex,r=t.focusItemAtIndex,o=t.sortedIndexByFirstChar,a=t.isItemAtIndexDisabled,l=Nt(n)==="ArrowLeft",c=Nt(n)==="ArrowUp",u=Nt(n)==="ArrowRight",h=Nt(n)==="ArrowDown",d=Nt(n)==="Home",f=Nt(n)==="End",m=Nt(n)==="Enter",g=Nt(n)==="Spacebar";if(n.ctrlKey||n.metaKey||l||c||u||h||d||f||m)return-1;var y=!g&&n.key.length===1;if(y){di(n);var b={focusItemAtIndex:r,focusedItemIndex:s,nextChar:n.key.toLowerCase(),sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return zl(b,e)}if(!g)return-1;i&&di(n);var S=i&&Yf(e);if(S){var b={focusItemAtIndex:r,focusedItemIndex:s,nextChar:" ",sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return zl(b,e)}return-1}/**
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
 */function ET(t){return t instanceof Array}var bT=function(t){en(e,t);function e(n){var i=t.call(this,Ke(Ke({},e.defaultAdapter),n))||this;return i.wrapFocus=!1,i.isVertical=!0,i.isSingleSelectionList=!1,i.selectedIndex=ut.UNSET_INDEX,i.focusedItemIndex=ut.UNSET_INDEX,i.useActivatedClass=!1,i.useSelectedAttr=!1,i.ariaCurrentAttrValue=null,i.isCheckboxList=!1,i.isRadioList=!1,i.hasTypeahead=!1,i.typeaheadState=yT(),i.sortedIndexByFirstChar=new Map,i}return Object.defineProperty(e,"strings",{get:function(){return jn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return le},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ut},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(n){this.wrapFocus=n},e.prototype.setVerticalOrientation=function(n){this.isVertical=n},e.prototype.setSingleSelection=function(n){this.isSingleSelectionList=n,n&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.maybeInitializeSingleSelection=function(){var n=this.getSelectedIndexFromDOM();if(n!==ut.UNSET_INDEX){var i=this.adapter.listItemAtIndexHasClass(n,le.LIST_ITEM_ACTIVATED_CLASS);i&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=n}},e.prototype.getSelectedIndexFromDOM=function(){for(var n=ut.UNSET_INDEX,i=this.adapter.getListItemCount(),s=0;s<i;s++){var r=this.adapter.listItemAtIndexHasClass(s,le.LIST_ITEM_SELECTED_CLASS),o=this.adapter.listItemAtIndexHasClass(s,le.LIST_ITEM_ACTIVATED_CLASS);if(!!(r||o)){n=s;break}}return n},e.prototype.setHasTypeahead=function(n){this.hasTypeahead=n,n&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&Yf(this.typeaheadState)},e.prototype.setUseActivatedClass=function(n){this.useActivatedClass=n},e.prototype.setUseSelectedAttribute=function(n){this.useSelectedAttr=n},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(n,i){var s=i===void 0?{}:i,r=s.forceUpdate;!this.isIndexValid(n)||(this.isCheckboxList?this.setCheckboxAtIndex(n):this.isRadioList?this.setRadioAtIndex(n):this.setSingleSelectionAtIndex(n,{forceUpdate:r}))},e.prototype.handleFocusIn=function(n){n>=0&&(this.focusedItemIndex=n,this.adapter.setAttributeForElementIndex(n,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(n,"0"))},e.prototype.handleFocusOut=function(n){var i=this;n>=0&&(this.adapter.setAttributeForElementIndex(n,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(n,"-1")),setTimeout(function(){i.adapter.isFocusInsideList()||i.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.handleKeydown=function(n,i,s){var r=this,o=Nt(n)==="ArrowLeft",a=Nt(n)==="ArrowUp",l=Nt(n)==="ArrowRight",c=Nt(n)==="ArrowDown",u=Nt(n)==="Home",h=Nt(n)==="End",d=Nt(n)==="Enter",f=Nt(n)==="Spacebar",m=n.key==="A"||n.key==="a";if(this.adapter.isRootFocused()){if(a||h?(n.preventDefault(),this.focusLastElement()):(c||u)&&(n.preventDefault(),this.focusFirstElement()),this.hasTypeahead){var g={event:n,focusItemAtIndex:function(S){r.focusItemAtIndex(S)},focusedItemIndex:-1,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(S){return r.adapter.listItemAtIndexHasClass(S,le.LIST_ITEM_DISABLED_CLASS)}};Zf(g,this.typeaheadState)}return}var y=this.adapter.getFocusedElementIndex();if(!(y===-1&&(y=s,y<0))){if(this.isVertical&&c||!this.isVertical&&l)di(n),this.focusNextElement(y);else if(this.isVertical&&a||!this.isVertical&&o)di(n),this.focusPrevElement(y);else if(u)di(n),this.focusFirstElement();else if(h)di(n),this.focusLastElement();else if(m&&n.ctrlKey&&this.isCheckboxList)n.preventDefault(),this.toggleAll(this.selectedIndex===ut.UNSET_INDEX?[]:this.selectedIndex);else if((d||f)&&i){var b=n.target;if(b&&b.tagName==="A"&&d||(di(n),this.adapter.listItemAtIndexHasClass(y,le.LIST_ITEM_DISABLED_CLASS)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(y),this.adapter.notifyAction(y))}if(this.hasTypeahead){var g={event:n,focusItemAtIndex:function(T){r.focusItemAtIndex(T)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(T){return r.adapter.listItemAtIndexHasClass(T,le.LIST_ITEM_DISABLED_CLASS)}};Zf(g,this.typeaheadState)}}},e.prototype.handleClick=function(n,i){n!==ut.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(n,le.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(n,i),this.adapter.notifyAction(n)))},e.prototype.focusNextElement=function(n){var i=this.adapter.getListItemCount(),s=n+1;if(s>=i)if(this.wrapFocus)s=0;else return n;return this.focusItemAtIndex(s),s},e.prototype.focusPrevElement=function(n){var i=n-1;if(i<0)if(this.wrapFocus)i=this.adapter.getListItemCount()-1;else return n;return this.focusItemAtIndex(i),i},e.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},e.prototype.focusLastElement=function(){var n=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(n),n},e.prototype.focusInitialElement=function(){var n=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(n),n},e.prototype.setEnabled=function(n,i){!this.isIndexValid(n)||(i?(this.adapter.removeClassForElementIndex(n,le.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(n,jn.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(n,le.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(n,jn.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(n,i){var s=i===void 0?{}:i,r=s.forceUpdate;if(!(this.selectedIndex===n&&!r)){var o=le.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(o=le.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==ut.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,o),this.setAriaForSingleSelectionAtIndex(n),this.setTabindexAtIndex(n),n!==ut.UNSET_INDEX&&this.adapter.addClassForElementIndex(n,o),this.selectedIndex=n}},e.prototype.setAriaForSingleSelectionAtIndex=function(n){this.selectedIndex===ut.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(n,jn.ARIA_CURRENT));var i=this.ariaCurrentAttrValue!==null,s=i?jn.ARIA_CURRENT:jn.ARIA_SELECTED;if(this.selectedIndex!==ut.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,s,"false"),n!==ut.UNSET_INDEX){var r=i?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(n,s,r)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?jn.ARIA_SELECTED:jn.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(n){var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(n,!0),this.selectedIndex!==ut.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),this.adapter.setAttributeForElementIndex(n,i,"true"),this.selectedIndex=n},e.prototype.setCheckboxAtIndex=function(n){for(var i=this.getSelectionAttribute(),s=0;s<this.adapter.getListItemCount();s++){var r=!1;n.indexOf(s)>=0&&(r=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(s,r),this.adapter.setAttributeForElementIndex(s,i,r?"true":"false")}this.selectedIndex=n},e.prototype.setTabindexAtIndex=function(n){this.focusedItemIndex===ut.UNSET_INDEX&&n!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==n&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==n&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),n!==ut.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(n,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var n=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(n)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==ut.UNSET_INDEX?this.selectedIndex:ET(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(n,i){return Math.min(n,i)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(n){var i=this;if(n instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return n.length===0?!0:n.some(function(s){return i.isIndexInRange(s)})}else if(typeof n=="number"){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+n);return this.isIndexInRange(n)||this.isSingleSelectionList&&n===ut.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(n){var i=this.adapter.getListItemCount();return n>=0&&n<i},e.prototype.setSelectedIndexOnAction=function(n,i){i===void 0&&(i=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(n,i):this.setSelectedIndex(n)},e.prototype.toggleCheckboxAtIndex=function(n,i){var s=this.getSelectionAttribute(),r=this.adapter.isCheckboxCheckedAtIndex(n);i&&(r=!r,this.adapter.setCheckedCheckboxOrRadioAtIndex(n,r)),this.adapter.setAttributeForElementIndex(n,s,r?"true":"false");var o=this.selectedIndex===ut.UNSET_INDEX?[]:this.selectedIndex.slice();r?o.push(n):o=o.filter(function(a){return a!==n}),this.selectedIndex=o},e.prototype.focusItemAtIndex=function(n){this.adapter.focusItemAtIndex(n),this.focusedItemIndex=n},e.prototype.toggleAll=function(n){var i=this.adapter.getListItemCount();if(n.length===i)this.setCheckboxAtIndex([]);else{for(var s=[],r=0;r<i;r++)(!this.adapter.listItemAtIndexHasClass(r,le.LIST_ITEM_DISABLED_CLASS)||n.indexOf(r)>-1)&&s.push(r);this.setCheckboxAtIndex(s)}},e.prototype.typeaheadMatchItem=function(n,i,s){var r=this;s===void 0&&(s=!1);var o={focusItemAtIndex:function(a){r.focusItemAtIndex(a)},focusedItemIndex:i||this.focusedItemIndex,nextChar:n,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:s,isItemAtIndexDisabled:function(a){return r.adapter.listItemAtIndexHasClass(a,le.LIST_ITEM_DISABLED_CLASS)}};return zl(o,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return vT(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){Jf(this.typeaheadState)},e}(rn);/**
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
 */var $f=function(t){en(e,t);function e(n){var i=t.call(this,Ke(Ke({},e.defaultAdapter),n))||this;return i.isSurfaceOpen=!1,i.isQuickOpen=!1,i.isHoistedElement=!1,i.isFixedPosition=!1,i.isHorizontallyCenteredOnViewport=!1,i.maxHeight=0,i.openAnimationEndTimerId=0,i.closeAnimationEndTimerId=0,i.animationRequestId=0,i.anchorCorner=xi.TOP_START,i.originCorner=xi.TOP_START,i.anchorMargin={top:0,right:0,bottom:0,left:0},i.position={x:0,y:0},i}return Object.defineProperty(e,"cssClasses",{get:function(){return mT},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return pT},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ws},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return xi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=e.cssClasses,i=n.ROOT,s=n.OPEN;if(!this.adapter.hasClass(i))throw new Error(i+" class required in root element.");this.adapter.hasClass(s)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(n){this.anchorCorner=n},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^et.RIGHT},e.prototype.setAnchorMargin=function(n){this.anchorMargin.top=n.top||0,this.anchorMargin.right=n.right||0,this.anchorMargin.bottom=n.bottom||0,this.anchorMargin.left=n.left||0},e.prototype.setIsHoisted=function(n){this.isHoistedElement=n},e.prototype.setFixedPosition=function(n){this.isFixedPosition=n},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(n,i){this.position.x=this.isFinite(n)?n:0,this.position.y=this.isFinite(i)?i:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(n){this.isHorizontallyCenteredOnViewport=n},e.prototype.setQuickOpen=function(n){this.isQuickOpen=n},e.prototype.setMaxHeight=function(n){this.maxHeight=n},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var n=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){n.dimensions=n.adapter.getInnerDimensions(),n.autoposition(),n.adapter.addClass(e.cssClasses.OPEN),n.openAnimationEndTimerId=setTimeout(function(){n.openAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),n.adapter.notifyOpen()},Ws.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},e.prototype.close=function(n){var i=this;if(n===void 0&&(n=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,n||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){i.adapter.removeClass(e.cssClasses.OPEN),i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId=setTimeout(function(){i.closeAnimationEndTimerId=0,i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),i.adapter.notifyClose()},Ws.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,n||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(n){var i=n.target;this.adapter.isElementInContainer(i)||this.close()},e.prototype.handleKeydown=function(n){var i=n.keyCode,s=n.key,r=s==="Escape"||i===27;r&&this.close()},e.prototype.autoposition=function(){var n;this.measurements=this.getAutoLayoutmeasurements();var i=this.getoriginCorner(),s=this.getMenuSurfaceMaxHeight(i),r=this.hasBit(i,et.BOTTOM)?"bottom":"top",o=this.hasBit(i,et.RIGHT)?"right":"left",a=this.getHorizontalOriginOffset(i),l=this.getVerticalOriginOffset(i),c=this.measurements,u=c.anchorSize,h=c.surfaceSize,d=(n={},n[o]=a,n[r]=l,n);u.width/h.width>Ws.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(o="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(d),this.adapter.setTransformOrigin(o+" "+r),this.adapter.setPosition(d),this.adapter.setMaxHeight(s?s+"px":""),this.hasBit(i,et.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var n=this.adapter.getAnchorDimensions(),i=this.adapter.getBodyDimensions(),s=this.adapter.getWindowDimensions(),r=this.adapter.getWindowScroll();return n||(n={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:n,bodySize:i,surfaceSize:this.dimensions,viewportDistance:{top:n.top,right:s.width-n.right,bottom:s.height-n.bottom,left:n.left},viewportSize:s,windowScroll:r}},e.prototype.getoriginCorner=function(){var n=this.originCorner,i=this.measurements,s=i.viewportDistance,r=i.anchorSize,o=i.surfaceSize,a=e.numbers.MARGIN_TO_EDGE,l=this.hasBit(this.anchorCorner,et.BOTTOM),c,u;l?(c=s.top-a+this.anchorMargin.bottom,u=s.bottom-a-this.anchorMargin.bottom):(c=s.top-a+this.anchorMargin.top,u=s.bottom-a+r.height-this.anchorMargin.top);var h=u-o.height>0;!h&&c>u&&(n=this.setBit(n,et.BOTTOM));var d=this.adapter.isRtl(),f=this.hasBit(this.anchorCorner,et.FLIP_RTL),m=this.hasBit(this.anchorCorner,et.RIGHT)||this.hasBit(n,et.RIGHT),g=!1;d&&f?g=!m:g=m;var y,b;g?(y=s.left+r.width+this.anchorMargin.right,b=s.right-this.anchorMargin.right):(y=s.left+this.anchorMargin.left,b=s.right+r.width-this.anchorMargin.left);var S=y-o.width>0,T=b-o.width>0,A=this.hasBit(n,et.FLIP_RTL)&&this.hasBit(n,et.RIGHT);return T&&A&&d||!S&&A?n=this.unsetBit(n,et.RIGHT):(S&&g&&d||S&&!g&&m||!T&&y>=b)&&(n=this.setBit(n,et.RIGHT)),n},e.prototype.getMenuSurfaceMaxHeight=function(n){if(this.maxHeight>0)return this.maxHeight;var i=this.measurements.viewportDistance,s=0,r=this.hasBit(n,et.BOTTOM),o=this.hasBit(this.anchorCorner,et.BOTTOM),a=e.numbers.MARGIN_TO_EDGE;return r?(s=i.top+this.anchorMargin.top-a,o||(s+=this.measurements.anchorSize.height)):(s=i.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-a,o&&(s-=this.measurements.anchorSize.height)),s},e.prototype.getHorizontalOriginOffset=function(n){var i=this.measurements.anchorSize,s=this.hasBit(n,et.RIGHT),r=this.hasBit(this.anchorCorner,et.RIGHT);if(s){var o=r?i.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?o-(this.measurements.viewportSize.width-this.measurements.bodySize.width):o}return r?i.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(n){var i=this.measurements.anchorSize,s=this.hasBit(n,et.BOTTOM),r=this.hasBit(this.anchorCorner,et.BOTTOM),o=0;return s?o=r?i.height-this.anchorMargin.top:-this.anchorMargin.bottom:o=r?i.height+this.anchorMargin.bottom:this.anchorMargin.top,o},e.prototype.adjustPositionForHoistedElement=function(n){var i,s,r=this.measurements,o=r.windowScroll,a=r.viewportDistance,l=r.surfaceSize,c=r.viewportSize,u=Object.keys(n);try{for(var h=an(u),d=h.next();!d.done;d=h.next()){var f=d.value,m=n[f]||0;if(this.isHorizontallyCenteredOnViewport&&(f==="left"||f==="right")){n[f]=(c.width-l.width)/2;continue}m+=a[f],this.isFixedPosition||(f==="top"?m+=o.y:f==="bottom"?m-=o.y:f==="left"?m+=o.x:m-=o.x),n[f]=m}}catch(g){i={error:g}}finally{try{d&&!d.done&&(s=h.return)&&s.call(h)}finally{if(i)throw i.error}}},e.prototype.maybeRestoreFocus=function(){var n=this,i=this.adapter.isFocused(),s=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(i||s)&&setTimeout(function(){n.adapter.restoreFocus()},Ws.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(n,i){return Boolean(n&i)},e.prototype.setBit=function(n,i){return n|i},e.prototype.unsetBit=function(n,i){return n^i},e.prototype.isFinite=function(n){return typeof n=="number"&&isFinite(n)},e}(rn);/**
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
 */var em={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function TT(t){return Boolean(t.document)&&typeof t.document.createElement=="function"}function AT(t,e){if(TT(t)&&e in em){var n=t.document.createElement("div"),i=em[e],s=i.standard,r=i.prefixed,o=s in n.style;return o?s:r}return e}/**
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
 */var zi={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},Wi={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},ST={FOCUS_ROOT_INDEX:-1},Ki;(function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"})(Ki||(Ki={}));/**
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
 */var CT=function(t){en(e,t);function e(n){var i=t.call(this,Ke(Ke({},e.defaultAdapter),n))||this;return i.closeAnimationEndTimerId=0,i.defaultFocusState=Ki.LIST_ROOT,i.selectedIndex=-1,i}return Object.defineProperty(e,"cssClasses",{get:function(){return zi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Wi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ST},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},e.prototype.handleKeydown=function(n){var i=n.key,s=n.keyCode,r=i==="Tab"||s===9;r&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(n){var i=this,s=this.adapter.getElementIndex(n);if(!(s<0)){this.adapter.notifySelected({index:s});var r=this.adapter.getAttributeFromElementAtIndex(s,Wi.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(r),this.closeAnimationEndTimerId=setTimeout(function(){var o=i.adapter.getElementIndex(n);o>=0&&i.adapter.isSelectableItemAtIndex(o)&&i.setSelectedIndex(o)},$f.numbers.TRANSITION_CLOSE_DURATION)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case Ki.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Ki.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Ki.NONE:break;default:this.adapter.focusListRoot();break}},e.prototype.setDefaultFocusState=function(n){this.defaultFocusState=n},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(n){if(this.validatedIndex(n),!this.adapter.isSelectableItemAtIndex(n))throw new Error("MDCMenuFoundation: No selection group at specified index.");var i=this.adapter.getSelectedSiblingOfItemAtIndex(n);i>=0&&(this.adapter.removeAttributeFromElementAtIndex(i,Wi.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(i,zi.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(n,zi.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(n,Wi.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=n},e.prototype.setEnabled=function(n,i){this.validatedIndex(n),i?(this.adapter.removeClassFromElementAtIndex(n,le.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(n,Wi.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(n,le.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(n,Wi.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(n){var i=this.adapter.getMenuItemCount(),s=n>=0&&n<i;if(!s)throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(rn);const{document:wT}=tp;function LT(t){let e,n,i,s,r,o,a,l;const c=t[30].default,u=ue(c,t,t[29],null);let h=[{class:i=fe(je({[t[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":t[5],"mdc-menu-surface--open":t[4],"smui-menu-surface--static":t[4],"mdc-menu-surface--fullwidth":t[6]},t[9]))},{style:s=Object.entries(t[10]).map(tm).concat([t[3]]).join(" ")},t[12]],d={};for(let f=0;f<h.length;f+=1)d=M(d,h[f]);return{c(){e=Ze(),n=ve("div"),u&&u.c(),this.h()},l(f){e=$e(f),n=Ee(f,"DIV",{class:!0,style:!0});var m=Ie(n);u&&u.l(m),m.forEach(U),this.h()},h(){te(n,d)},m(f,m){J(f,e,m),J(f,n,m),u&&u.m(n,null),t[32](n),o=!0,a||(l=[Fe(wT.body,"click",t[31],!0),ee(r=Ye.call(null,n,t[1])),ee(t[11].call(null,n)),Fe(n,"keydown",t[33])],a=!0)},p(f,m){u&&u.p&&(!o||m[0]&536870912)&&he(u,c,f,f[29],o?ce(c,f[29],m,null):de(f[29]),null),te(n,d=ge(h,[(!o||m[0]&628&&i!==(i=fe(je({[f[2]]:!0,"mdc-menu-surface":!0,"mdc-menu-surface--fixed":f[5],"mdc-menu-surface--open":f[4],"smui-menu-surface--static":f[4],"mdc-menu-surface--fullwidth":f[6]},f[9]))))&&{class:i},(!o||m[0]&1032&&s!==(s=Object.entries(f[10]).map(tm).concat([f[3]]).join(" ")))&&{style:s},m[0]&4096&&f[12]])),r&&Re(r.update)&&m[0]&2&&r.update.call(null,f[1])},i(f){o||(N(u,f),o=!0)},o(f){P(u,f),o=!1},d(f){f&&U(e),f&&U(n),u&&u.d(f),t[32](null),a=!1,Le(l)}}}const tm=([t,e])=>`${t}: ${e};`;function OT(t,e,n){const i=["use","class","style","static","anchor","fixed","open","fullWidth","quickOpen","anchorElement","anchorCorner","anchorMargin","maxHeight","horizontallyCenteredOnViewport","isOpen","setOpen","setAbsolutePosition","setIsHoisted","isFixed","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e;var a,l,c;const u=Ve(_e());let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{static:m=!1}=e,{anchor:g=!0}=e,{fixed:y=!1}=e,{open:b=m}=e,{fullWidth:S=!1}=e,{quickOpen:T=!1}=e,{anchorElement:A=void 0}=e,{anchorCorner:H=void 0}=e,{anchorMargin:C={top:0,right:0,bottom:0,left:0}}=e,{maxHeight:p=0}=e,{horizontallyCenteredOnViewport:E=!1}=e,F,I,L={},X={},_;ot("SMUI:list:role","menu"),ot("SMUI:list:item:role","menuitem");const k=xi;$t(()=>(n(8,I=new $f({addClass:V,removeClass:j,hasClass:w,hasAnchor:()=>!!A,notifyClose:()=>{n(0,b=m),b||Qe(F,"SMUIMenuSurface:closed",void 0,void 0,!0)},notifyClosing:()=>{n(0,b=m),b||Qe(F,"SMUIMenuSurface:closing",void 0,void 0,!0)},notifyOpen:()=>{n(0,b=!0),Qe(F,"SMUIMenuSurface:opened",void 0,void 0,!0)},isElementInContainer:me=>F.contains(me),isRtl:()=>getComputedStyle(F).getPropertyValue("direction")==="rtl",setTransformOrigin:me=>{const ht=`${AT(window,"transform")}-origin`;n(10,X[ht]=me,X)},isFocused:()=>document.activeElement===F,saveFocus:()=>{var me;_=(me=document.activeElement)!==null&&me!==void 0?me:void 0},restoreFocus:()=>{F.contains(document.activeElement)&&_&&"focus"in _&&_.focus()},getInnerDimensions:()=>({width:F.offsetWidth,height:F.offsetHeight}),getAnchorDimensions:()=>A?A.getBoundingClientRect():null,getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:me=>{n(10,X.left="left"in me?`${me.left}px`:"",X),n(10,X.right="right"in me?`${me.right}px`:"",X),n(10,X.top="top"in me?`${me.top}px`:"",X),n(10,X.bottom="bottom"in me?`${me.bottom}px`:"",X)},setMaxHeight:me=>{n(10,X.maxHeight=me,X)}})),Qe(F,"SMUIMenuSurface:mount",{get open(){return b},set open(me){n(0,b=me)},closeProgrammatic:G}),I.init(),()=>{var me;const ht=I.isHoistedElement;I.destroy(),ht&&((me=F.parentNode)===null||me===void 0||me.removeChild(F))})),Gn(()=>{var B;g&&F&&((B=F.parentElement)===null||B===void 0||B.classList.remove("mdc-menu-surface--anchor"))});function w(B){return B in L?L[B]:gt().classList.contains(B)}function V(B){L[B]||n(9,L[B]=!0,L)}function j(B){(!(B in L)||L[B])&&n(9,L[B]=!1,L)}function G(B){I.close(B),n(0,b=!1)}function Se(){return b}function $(B){n(0,b=B)}function Me(B,me){return I.setAbsolutePosition(B,me)}function He(B){return I.setIsHoisted(B)}function ct(){return I.isFixed()}function gt(){return F}const Te=B=>I&&b&&I.handleBodyClick(B);function yt(B){re[B?"unshift":"push"](()=>{F=B,n(7,F)})}const Ce=B=>I&&I.handleKeydown(B);return t.$$set=B=>{e=M(M({},e),ke(B)),n(12,s=Y(e,i)),"use"in B&&n(1,h=B.use),"class"in B&&n(2,d=B.class),"style"in B&&n(3,f=B.style),"static"in B&&n(4,m=B.static),"anchor"in B&&n(14,g=B.anchor),"fixed"in B&&n(5,y=B.fixed),"open"in B&&n(0,b=B.open),"fullWidth"in B&&n(6,S=B.fullWidth),"quickOpen"in B&&n(15,T=B.quickOpen),"anchorElement"in B&&n(13,A=B.anchorElement),"anchorCorner"in B&&n(16,H=B.anchorCorner),"anchorMargin"in B&&n(17,C=B.anchorMargin),"maxHeight"in B&&n(18,p=B.maxHeight),"horizontallyCenteredOnViewport"in B&&n(19,E=B.horizontallyCenteredOnViewport),"$$scope"in B&&n(29,o=B.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&469778560&&F&&g&&!(n(26,a=F.parentElement)===null||a===void 0?void 0:a.classList.contains("mdc-menu-surface--anchor"))&&(n(27,l=F.parentElement)===null||l===void 0||l.classList.add("mdc-menu-surface--anchor"),n(13,A=n(28,c=F.parentElement)!==null&&c!==void 0?c:void 0)),t.$$.dirty[0]&257&&I&&I.isOpen()!==b&&(b?I.open():I.close()),t.$$.dirty[0]&33024&&I&&I.setQuickOpen(T),t.$$.dirty[0]&288&&I&&I.setFixedPosition(y),t.$$.dirty[0]&262400&&I&&p>0&&I.setMaxHeight(p),t.$$.dirty[0]&524544&&I&&I.setIsHorizontallyCenteredOnViewport(E),t.$$.dirty[0]&65792&&I&&H!=null&&(typeof H=="string"?I.setAnchorCorner(k[H]):I.setAnchorCorner(H)),t.$$.dirty[0]&131328&&I&&I.setAnchorMargin(C)},[b,h,d,f,m,y,S,F,I,L,X,u,s,A,g,T,H,C,p,E,Se,$,Me,He,ct,gt,a,l,c,o,r,Te,yt,Ce]}class RT extends De{constructor(e){super();Ne(this,e,OT,LT,Oe,{use:1,class:2,style:3,static:4,anchor:14,fixed:5,open:0,fullWidth:6,quickOpen:15,anchorElement:13,anchorCorner:16,anchorMargin:17,maxHeight:18,horizontallyCenteredOnViewport:19,isOpen:20,setOpen:21,setAbsolutePosition:22,setIsHoisted:23,isFixed:24,getElement:25},null,[-1,-1])}get isOpen(){return this.$$.ctx[20]}get setOpen(){return this.$$.ctx[21]}get setAbsolutePosition(){return this.$$.ctx[22]}get setIsHoisted(){return this.$$.ctx[23]}get isFixed(){return this.$$.ctx[24]}get getElement(){return this.$$.ctx[25]}}function kT(t){let e;const n=t[16].default,i=ue(n,t,t[21],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&2097152)&&he(i,n,s,s[21],e?ce(n,s[21],r,null):de(s[21]),null)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function NT(t){let e,n,i;const s=[{use:t[5]},{class:fe({[t[1]]:!0,"mdc-menu":!0})},t[9]];function r(a){t[18](a)}let o={$$slots:{default:[kT]},$$scope:{ctx:t}};for(let a=0;a<s.length;a+=1)o=M(o,s[a]);return t[0]!==void 0&&(o.open=t[0]),e=new RT({props:o}),t[17](e),re.push(()=>An(e,"open",r)),e.$on("SMUIMenuSurface:mount",t[7]),e.$on("SMUIList:mount",t[8]),e.$on("SMUIMenuSurface:opened",t[19]),e.$on("keydown",t[6]),e.$on("SMUIList:action",t[20]),{c(){Je(e.$$.fragment)},l(a){dt(e.$$.fragment,a)},m(a,l){ze(e,a,l),i=!0},p(a,[l]){const c=l&546?ge(s,[l&32&&{use:a[5]},l&2&&{class:fe({[a[1]]:!0,"mdc-menu":!0})},l&512&&Ge(a[9])]):{};l&2097152&&(c.$$scope={dirty:l,ctx:a}),!n&&l&1&&(n=!0,c.open=a[0],Tn(()=>n=!1)),e.$set(c)},i(a){i||(N(e.$$.fragment,a),i=!0)},o(a){P(e.$$.fragment,a),i=!1},d(a){t[17](null),We(e,a)}}}function DT(t,e,n){let i;const s=["use","class","open","isOpen","setOpen","setDefaultFocusState","getSelectedIndex","getElement"];let r=Y(e,s),{$$slots:o={},$$scope:a}=e;const{closest:l}=ql,c=Ve(_e());let{use:u=[]}=e,{class:h=""}=e,{open:d=!1}=e,f,m,g,y;$t(()=>(n(3,m=new CT({addClassToElementAtIndex:(_,k)=>{y.addClassForElementIndex(_,k)},removeClassFromElementAtIndex:(_,k)=>{y.removeClassForElementIndex(_,k)},addAttributeToElementAtIndex:(_,k,w)=>{y.setAttributeForElementIndex(_,k,w)},removeAttributeFromElementAtIndex:(_,k)=>{y.removeAttributeForElementIndex(_,k)},getAttributeFromElementAtIndex:(_,k)=>y.getAttributeFromElementIndex(_,k),elementContainsClass:(_,k)=>_.classList.contains(k),closeSurface:_=>g.closeProgrammatic(_),getElementIndex:_=>y.getOrderedList().map(k=>k.element).indexOf(_),notifySelected:_=>Qe(E(),"SMUIMenu:selected",{index:_.index,item:y.getOrderedList()[_.index].element},void 0,!0),getMenuItemCount:()=>y.items.length,focusItemAtIndex:_=>y.focusItemAtIndex(_),focusListRoot:()=>"focus"in y.element&&y.element.focus(),isSelectableItemAtIndex:_=>!!l(y.getOrderedList()[_].element,`.${zi.MENU_SELECTION_GROUP}`),getSelectedSiblingOfItemAtIndex:_=>{const k=y.getOrderedList(),w=l(k[_].element,`.${zi.MENU_SELECTION_GROUP}`),V=w==null?void 0:w.querySelector(`.${zi.MENU_SELECTED_LIST_ITEM}`);return V?k.map(j=>j.element).indexOf(V):-1}})),Qe(E(),"SMUIMenu:mount",m),m.init(),()=>{m.destroy()}));function b(_){m&&m.handleKeydown(_)}function S(_){g||(g=_.detail)}function T(_){y||n(4,y=_.detail)}function A(){return d}function H(_){n(0,d=_)}function C(_){m.setDefaultFocusState(_)}function p(){return m.getSelectedIndex()}function E(){return f.getElement()}function F(_){re[_?"unshift":"push"](()=>{f=_,n(2,f)})}function I(_){d=_,n(0,d)}const L=()=>m&&m.handleMenuSurfaceOpened(),X=_=>m&&m.handleItemAction(y.getOrderedList()[_.detail.index].element);return t.$$set=_=>{e=M(M({},e),ke(_)),n(9,r=Y(e,s)),"use"in _&&n(10,u=_.use),"class"in _&&n(1,h=_.class),"open"in _&&n(0,d=_.open),"$$scope"in _&&n(21,a=_.$$scope)},t.$$.update=()=>{t.$$.dirty&1024&&n(5,i=[c,...u])},[d,h,f,m,y,i,b,S,T,r,u,A,H,C,p,E,o,F,I,L,X,a]}class CA extends De{constructor(e){super();Ne(this,e,DT,NT,Oe,{use:10,class:1,open:0,isOpen:11,setOpen:12,setDefaultFocusState:13,getSelectedIndex:14,getElement:15})}get isOpen(){return this.$$.ctx[11]}get setOpen(){return this.$$.ctx[12]}get setDefaultFocusState(){return this.$$.ctx[13]}get getSelectedIndex(){return this.$$.ctx[14]}get getElement(){return this.$$.ctx[15]}}function MT(t){let e;const n=t[37].default,i=ue(n,t,t[43],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r[1]&4096)&&he(i,n,s,s[43],e?ce(n,s[43],r,null):de(s[43]),null)},i(s){e||(N(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){i&&i.d(s)}}}function PT(t){let e,n,i;const s=[{use:[t[17],...t[0]]},{class:fe({[t[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":t[2],"mdc-deprecated-list--dense":t[3],"mdc-deprecated-list--textual-list":t[4],"mdc-deprecated-list--avatar-list":t[5]||t[18],"mdc-deprecated-list--icon-list":t[6],"mdc-deprecated-list--image-list":t[7],"mdc-deprecated-list--thumbnail-list":t[8],"mdc-deprecated-list--video-list":t[9],"mdc-deprecated-list--two-line":t[10],"smui-list--three-line":t[11]&&!t[10]})},{role:t[15]},t[23]];var r=t[12];function o(a){let l={$$slots:{default:[MT]},$$scope:{ctx:a}};for(let c=0;c<s.length;c+=1)l=M(l,s[c]);return{props:l}}return r&&(e=new r(o(t)),t[38](e),e.$on("keydown",t[39]),e.$on("focusin",t[40]),e.$on("focusout",t[41]),e.$on("click",t[42]),e.$on("SMUIListItem:mount",t[19]),e.$on("SMUIListItem:unmount",t[20]),e.$on("SMUI:action",t[21])),{c(){e&&Je(e.$$.fragment),n=nt()},l(a){e&&dt(e.$$.fragment,a),n=nt()},m(a,l){e&&ze(e,a,l),J(a,n,l),i=!0},p(a,l){const c=l[0]&8818687?ge(s,[l[0]&131073&&{use:[a[17],...a[0]]},l[0]&266238&&{class:fe({[a[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":a[2],"mdc-deprecated-list--dense":a[3],"mdc-deprecated-list--textual-list":a[4],"mdc-deprecated-list--avatar-list":a[5]||a[18],"mdc-deprecated-list--icon-list":a[6],"mdc-deprecated-list--image-list":a[7],"mdc-deprecated-list--thumbnail-list":a[8],"mdc-deprecated-list--video-list":a[9],"mdc-deprecated-list--two-line":a[10],"smui-list--three-line":a[11]&&!a[10]})},l[0]&32768&&{role:a[15]},l[0]&8388608&&Ge(a[23])]):{};if(l[1]&4096&&(c.$$scope={dirty:l,ctx:a}),r!==(r=a[12])){if(e){St();const u=e;P(u.$$.fragment,1,0,()=>{We(u,1)}),Ct()}r?(e=new r(o(a)),a[38](e),e.$on("keydown",a[39]),e.$on("focusin",a[40]),e.$on("focusout",a[41]),e.$on("click",a[42]),e.$on("SMUIListItem:mount",a[19]),e.$on("SMUIListItem:unmount",a[20]),e.$on("SMUI:action",a[21]),Je(e.$$.fragment),N(e.$$.fragment,1),ze(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(a){i||(e&&N(e.$$.fragment,a),i=!0)},o(a){e&&P(e.$$.fragment,a),i=!1},d(a){t[38](null),a&&U(n),e&&We(e,a)}}}function FT(t,e,n){const i=["use","class","nonInteractive","dense","textualList","avatarList","iconList","imageList","thumbnailList","videoList","twoLine","threeLine","vertical","wrapFocus","singleSelection","selectedIndex","radioList","checkList","hasTypeahead","component","layout","setEnabled","getTypeaheadInProgress","getSelectedIndex","getFocusedItemIndex","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e;var a;const{closest:l,matches:c}=ql,u=Ve(_e());let{use:h=[]}=e,{class:d=""}=e,{nonInteractive:f=!1}=e,{dense:m=!1}=e,{textualList:g=!1}=e,{avatarList:y=!1}=e,{iconList:b=!1}=e,{imageList:S=!1}=e,{thumbnailList:T=!1}=e,{videoList:A=!1}=e,{twoLine:H=!1}=e,{threeLine:C=!1}=e,{vertical:p=!0}=e,{wrapFocus:E=(a=Ht("SMUI:list:wrapFocus"))!==null&&a!==void 0?a:!1}=e,{singleSelection:F=!1}=e,{selectedIndex:I=-1}=e,{radioList:L=!1}=e,{checkList:X=!1}=e,{hasTypeahead:_=!1}=e,k,w,V=[],j=Ht("SMUI:list:role"),G=Ht("SMUI:list:nav");const Se=new WeakMap;let $=Ht("SMUI:dialog:selection"),Me=Ht("SMUI:addLayoutListener"),He,{component:ct=G?K0:X0}=e;ot("SMUI:list:nonInteractive",f),ot("SMUI:separator:context","list"),j||(F?(j="listbox",ot("SMUI:list:item:role","option")):L?(j="radiogroup",ot("SMUI:list:item:role","radio")):X?(j="group",ot("SMUI:list:item:role","checkbox")):(j="list",ot("SMUI:list:item:role",void 0))),Me&&(He=Me(Jt)),$t(()=>{n(13,w=new bT({addClassForElementIndex:ht,focusItemAtIndex:B,getAttributeForElementIndex:(Q,K)=>{var Pe,xn;return(xn=(Pe=Ce()[Q])===null||Pe===void 0?void 0:Pe.getAttr(K))!==null&&xn!==void 0?xn:null},getFocusedElementIndex:()=>document.activeElement?Ce().map(Q=>Q.element).indexOf(document.activeElement):-1,getListItemCount:()=>V.length,getPrimaryTextAtIndex:Be,hasCheckboxAtIndex:Q=>{var K,Pe;return(Pe=(K=Ce()[Q])===null||K===void 0?void 0:K.hasCheckbox)!==null&&Pe!==void 0?Pe:!1},hasRadioAtIndex:Q=>{var K,Pe;return(Pe=(K=Ce()[Q])===null||K===void 0?void 0:K.hasRadio)!==null&&Pe!==void 0?Pe:!1},isCheckboxCheckedAtIndex:Q=>{var K;const Pe=Ce()[Q];return(K=(Pe==null?void 0:Pe.hasCheckbox)&&Pe.checked)!==null&&K!==void 0?K:!1},isFocusInsideList:()=>k!=null&&tn()!==document.activeElement&&tn().contains(document.activeElement),isRootFocused:()=>k!=null&&document.activeElement===tn(),listItemAtIndexHasClass:me,notifyAction:Q=>{n(24,I=Q),k!=null&&Qe(tn(),"SMUIList:action",{index:Q},void 0,!0)},removeClassForElementIndex:In,setAttributeForElementIndex:qn,setCheckedCheckboxOrRadioAtIndex:(Q,K)=>{Ce()[Q].checked=K},setTabIndexForListItemChildren:(Q,K)=>{const Pe=Ce()[Q],xn="button:not(:disabled), a";Array.prototype.forEach.call(Pe.element.querySelectorAll(xn),wo=>{wo.setAttribute("tabindex",K)})}}));const O={get element(){return tn()},get items(){return V},get typeaheadInProgress(){return w.isTypeaheadInProgress()},typeaheadMatchItem(Q,K){return w.typeaheadMatchItem(Q,K,!0)},getOrderedList:Ce,focusItemAtIndex:B,addClassForElementIndex:ht,removeClassForElementIndex:In,setAttributeForElementIndex:qn,removeAttributeForElementIndex:D,getAttributeFromElementIndex:se,getPrimaryTextAtIndex:Be};return Qe(tn(),"SMUIList:mount",O),w.init(),()=>{w.destroy()}}),Gn(()=>{He&&He()});function gt(O){V.push(O.detail),Se.set(O.detail.element,O.detail),F&&O.detail.selected&&n(24,I=Tt(O.detail.element)),O.stopPropagation()}function Te(O){var Q;const K=(Q=O.detail&&V.indexOf(O.detail))!==null&&Q!==void 0?Q:-1;K!==-1&&(V.splice(K,1),V=V,Se.delete(O.detail.element)),O.stopPropagation()}function yt(O){if(L||X){const Q=Tt(O.target);if(Q!==-1){const K=Ce()[Q];K&&(L&&!K.checked||X)&&(K.checked=!K.checked,K.activateRipple(),window.requestAnimationFrame(()=>{K.deactivateRipple()}))}}}function Ce(){return k==null?[]:[...tn().children].map(O=>Se.get(O)).filter(O=>O&&O._smui_list_item_accessor)}function B(O){const Q=Ce()[O];Q&&"focus"in Q.element&&Q.element.focus()}function me(O,Q){var K;const Pe=Ce()[O];return(K=Pe&&Pe.hasClass(Q))!==null&&K!==void 0?K:!1}function ht(O,Q){const K=Ce()[O];K&&K.addClass(Q)}function In(O,Q){const K=Ce()[O];K&&K.removeClass(Q)}function qn(O,Q,K){const Pe=Ce()[O];Pe&&Pe.addAttr(Q,K)}function D(O,Q){const K=Ce()[O];K&&K.removeAttr(Q)}function se(O,Q){const K=Ce()[O];return K?K.getAttr(Q):null}function Be(O){var Q;const K=Ce()[O];return(Q=K&&K.getPrimaryText())!==null&&Q!==void 0?Q:""}function Tt(O){const Q=l(O,".mdc-deprecated-list-item, .mdc-deprecated-list");return Q&&c(Q,".mdc-deprecated-list-item")?Ce().map(K=>K==null?void 0:K.element).indexOf(Q):-1}function Jt(){return w.layout()}function En(O,Q){return w.setEnabled(O,Q)}function To(){return w.isTypeaheadInProgress()}function Xi(){return w.getSelectedIndex()}function Ks(){return w.getFocusedItemIndex()}function tn(){return k.getElement()}function Ao(O){re[O?"unshift":"push"](()=>{k=O,n(14,k)})}const Xs=O=>w&&w.handleKeydown(O,O.target.classList.contains("mdc-deprecated-list-item"),Tt(O.target)),fi=O=>w&&w.handleFocusIn(Tt(O.target)),So=O=>w&&w.handleFocusOut(Tt(O.target)),Co=O=>w&&w.handleClick(Tt(O.target),!c(O.target,'input[type="checkbox"], input[type="radio"]'));return t.$$set=O=>{e=M(M({},e),ke(O)),n(23,s=Y(e,i)),"use"in O&&n(0,h=O.use),"class"in O&&n(1,d=O.class),"nonInteractive"in O&&n(2,f=O.nonInteractive),"dense"in O&&n(3,m=O.dense),"textualList"in O&&n(4,g=O.textualList),"avatarList"in O&&n(5,y=O.avatarList),"iconList"in O&&n(6,b=O.iconList),"imageList"in O&&n(7,S=O.imageList),"thumbnailList"in O&&n(8,T=O.thumbnailList),"videoList"in O&&n(9,A=O.videoList),"twoLine"in O&&n(10,H=O.twoLine),"threeLine"in O&&n(11,C=O.threeLine),"vertical"in O&&n(25,p=O.vertical),"wrapFocus"in O&&n(26,E=O.wrapFocus),"singleSelection"in O&&n(27,F=O.singleSelection),"selectedIndex"in O&&n(24,I=O.selectedIndex),"radioList"in O&&n(28,L=O.radioList),"checkList"in O&&n(29,X=O.checkList),"hasTypeahead"in O&&n(30,_=O.hasTypeahead),"component"in O&&n(12,ct=O.component),"$$scope"in O&&n(43,o=O.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&33562624&&w&&w.setVerticalOrientation(p),t.$$.dirty[0]&67117056&&w&&w.setWrapFocus(E),t.$$.dirty[0]&1073750016&&w&&w.setHasTypeahead(_),t.$$.dirty[0]&134225920&&w&&w.setSingleSelection(F),t.$$.dirty[0]&151003136&&w&&F&&Xi()!==I&&w.setSelectedIndex(I)},[h,d,f,m,g,y,b,S,T,A,H,C,ct,w,k,j,c,u,$,gt,Te,yt,Tt,s,I,p,E,F,L,X,_,Jt,En,To,Xi,Ks,tn,r,Ao,Xs,fi,So,Co,o]}class wA extends De{constructor(e){super();Ne(this,e,FT,PT,Oe,{use:0,class:1,nonInteractive:2,dense:3,textualList:4,avatarList:5,iconList:6,imageList:7,thumbnailList:8,videoList:9,twoLine:10,threeLine:11,vertical:25,wrapFocus:26,singleSelection:27,selectedIndex:24,radioList:28,checkList:29,hasTypeahead:30,component:12,layout:31,setEnabled:32,getTypeaheadInProgress:33,getSelectedIndex:34,getFocusedItemIndex:35,getElement:36},null,[-1,-1])}get layout(){return this.$$.ctx[31]}get setEnabled(){return this.$$.ctx[32]}get getTypeaheadInProgress(){return this.$$.ctx[33]}get getSelectedIndex(){return this.$$.ctx[34]}get getFocusedItemIndex(){return this.$$.ctx[35]}get getElement(){return this.$$.ctx[36]}}function nm(t){let e;return{c(){e=ve("span"),this.h()},l(n){e=Ee(n,"SPAN",{class:!0}),Ie(e).forEach(U),this.h()},h(){Zt(e,"class","mdc-deprecated-list-item__ripple")},m(n,i){J(n,e,i)},d(n){n&&U(e)}}}function UT(t){let e,n,i=t[6]&&nm();const s=t[32].default,r=ue(s,t,t[35],null);return{c(){i&&i.c(),e=nt(),r&&r.c()},l(o){i&&i.l(o),e=nt(),r&&r.l(o)},m(o,a){i&&i.m(o,a),J(o,e,a),r&&r.m(o,a),n=!0},p(o,a){o[6]?i||(i=nm(),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),r&&r.p&&(!n||a[1]&16)&&he(r,s,o,o[35],n?ce(s,o[35],a,null):de(o[35]),null)},i(o){n||(N(r,o),n=!0)},o(o){P(r,o),n=!1},d(o){i&&i.d(o),o&&U(e),r&&r.d(o)}}}function VT(t){let e,n,i;const s=[{use:[...t[5]?[]:[[qi,{ripple:!t[13],unbounded:!1,color:(t[7]||t[0])&&t[4]==null?"primary":t[4],disabled:t[9],addClass:t[21],removeClass:t[22],addStyle:t[23]}]],t[19],...t[1]]},{class:fe(je({[t[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":t[7],"mdc-deprecated-list-item--selected":t[0],"mdc-deprecated-list-item--disabled":t[9],"mdc-menu-item--selected":!t[20]&&t[8]==="menuitem"&&t[0],"smui-menu-item--non-interactive":t[5]},t[15]))},{style:Object.entries(t[16]).map(im).concat([t[3]]).join(" ")},t[20]&&t[7]?{"aria-current":"page"}:{},t[20]?{}:{role:t[8]},!t[20]&&t[8]==="option"?{"aria-selected":t[0]?"true":"false"}:{},!t[20]&&(t[8]==="radio"||t[8]==="checkbox")?{"aria-checked":t[13]&&t[13].checked?"true":"false"}:{},t[20]?{}:{"aria-disabled":t[9]?"true":"false"},{"data-menu-item-skip-restore-focus":t[10]||void 0},{tabindex:t[18]},{href:t[11]},t[17],t[27]];var r=t[12];function o(a){let l={$$slots:{default:[UT]},$$scope:{ctx:a}};for(let c=0;c<s.length;c+=1)l=M(l,s[c]);return{props:l}}return r&&(e=new r(o(t)),t[33](e),e.$on("click",t[24]),e.$on("keydown",t[25]),e.$on("SMUIGenericInput:mount",t[26]),e.$on("SMUIGenericInput:unmount",t[34])),{c(){e&&Je(e.$$.fragment),n=nt()},l(a){e&&dt(e.$$.fragment,a),n=nt()},m(a,l){e&&ze(e,a,l),J(a,n,l),i=!0},p(a,l){const c=l[0]&150974399?ge(s,[l[0]&15213235&&{use:[...a[5]?[]:[[qi,{ripple:!a[13],unbounded:!1,color:(a[7]||a[0])&&a[4]==null?"primary":a[4],disabled:a[9],addClass:a[21],removeClass:a[22],addStyle:a[23]}]],a[19],...a[1]]},l[0]&1082277&&{class:fe(je({[a[2]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":a[7],"mdc-deprecated-list-item--selected":a[0],"mdc-deprecated-list-item--disabled":a[9],"mdc-menu-item--selected":!a[20]&&a[8]==="menuitem"&&a[0],"smui-menu-item--non-interactive":a[5]},a[15]))},l[0]&65544&&{style:Object.entries(a[16]).map(im).concat([a[3]]).join(" ")},l[0]&1048704&&Ge(a[20]&&a[7]?{"aria-current":"page"}:{}),l[0]&1048832&&Ge(a[20]?{}:{role:a[8]}),l[0]&1048833&&Ge(!a[20]&&a[8]==="option"?{"aria-selected":a[0]?"true":"false"}:{}),l[0]&1057024&&Ge(!a[20]&&(a[8]==="radio"||a[8]==="checkbox")?{"aria-checked":a[13]&&a[13].checked?"true":"false"}:{}),l[0]&1049088&&Ge(a[20]?{}:{"aria-disabled":a[9]?"true":"false"}),l[0]&1024&&{"data-menu-item-skip-restore-focus":a[10]||void 0},l[0]&262144&&{tabindex:a[18]},l[0]&2048&&{href:a[11]},l[0]&131072&&Ge(a[17]),l[0]&134217728&&Ge(a[27])]):{};if(l[0]&64|l[1]&16&&(c.$$scope={dirty:l,ctx:a}),r!==(r=a[12])){if(e){St();const u=e;P(u.$$.fragment,1,0,()=>{We(u,1)}),Ct()}r?(e=new r(o(a)),a[33](e),e.$on("click",a[24]),e.$on("keydown",a[25]),e.$on("SMUIGenericInput:mount",a[26]),e.$on("SMUIGenericInput:unmount",a[34]),Je(e.$$.fragment),N(e.$$.fragment,1),ze(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(a){i||(e&&N(e.$$.fragment,a),i=!0)},o(a){e&&P(e.$$.fragment,a),i=!1},d(a){t[33](null),a&&U(n),e&&We(e,a)}}}let HT=0;const im=([t,e])=>`${t}: ${e};`;function BT(t,e,n){let i;const s=["use","class","style","color","nonInteractive","ripple","activated","role","selected","disabled","skipRestoreFocus","tabindex","inputId","href","component","getPrimaryText","getElement"];let r=Y(e,s),{$$slots:o={},$$scope:a}=e;var l;const c=Ve(_e());let u=()=>{};function h(D){return D===u}let{use:d=[]}=e,{class:f=""}=e,{style:m=""}=e,{color:g=void 0}=e,{nonInteractive:y=(l=Ht("SMUI:list:nonInteractive"))!==null&&l!==void 0?l:!1}=e;ot("SMUI:list:nonInteractive",void 0);let{ripple:b=!y}=e,{activated:S=!1}=e,{role:T=Ht("SMUI:list:item:role")}=e;ot("SMUI:list:item:role",void 0);let{selected:A=!1}=e,{disabled:H=!1}=e,{skipRestoreFocus:C=!1}=e,{tabindex:p=u}=e,{inputId:E="SMUI-form-field-list-"+HT++}=e,{href:F=void 0}=e,I,L={},X={},_={},k,w,V=Ht("SMUI:list:item:nav"),{component:j=V?F?ff:ci:W0}=e;ot("SMUI:generic:input:props",{id:E}),ot("SMUI:separator:context",void 0),$t(()=>{if(!A&&!y){let se=!0,Be=I;for(;Be.previousSibling;)if(Be=Be.previousSibling,Be.nodeType===1&&Be.classList.contains("mdc-deprecated-list-item")&&!Be.classList.contains("mdc-deprecated-list-item--disabled")){se=!1;break}se&&(w=window.requestAnimationFrame(Te))}const D={_smui_list_item_accessor:!0,get element(){return ht()},get selected(){return A},set selected(se){n(0,A=se)},hasClass:G,addClass:Se,removeClass:$,getAttr:He,addAttr:ct,removeAttr:gt,getPrimaryText:me,get checked(){var se;return(se=k&&k.checked)!==null&&se!==void 0?se:!1},set checked(se){k&&n(13,k.checked=!!se,k)},get hasCheckbox(){return!!(k&&"_smui_checkbox_accessor"in k)},get hasRadio(){return!!(k&&"_smui_radio_accessor"in k)},activateRipple(){k&&k.activateRipple()},deactivateRipple(){k&&k.deactivateRipple()},getValue(){return r.value}};return Qe(ht(),"SMUIListItem:mount",D),()=>{Qe(ht(),"SMUIListItem:unmount",D)}}),Gn(()=>{w&&window.cancelAnimationFrame(w)});function G(D){return D in L?L[D]:ht().classList.contains(D)}function Se(D){L[D]||n(15,L[D]=!0,L)}function $(D){(!(D in L)||L[D])&&n(15,L[D]=!1,L)}function Me(D,se){X[D]!=se&&(se===""||se==null?(delete X[D],n(16,X)):n(16,X[D]=se,X))}function He(D){var se;return D in _?(se=_[D])!==null&&se!==void 0?se:null:ht().getAttribute(D)}function ct(D,se){_[D]!==se&&n(17,_[D]=se,_)}function gt(D){(!(D in _)||_[D]!=null)&&n(17,_[D]=void 0,_)}function Te(){let D=!0,se=I.getElement();for(;se.nextElementSibling;)if(se=se.nextElementSibling,se.nodeType===1&&se.classList.contains("mdc-deprecated-list-item")){const Be=se.attributes.getNamedItem("tabindex");if(Be&&Be.value==="0"){D=!1;break}}D&&n(18,i=0)}function yt(D){H||Qe(ht(),"SMUI:action",D)}function Ce(D){const se=D.key==="Enter",Be=D.key==="Space";(se||Be)&&yt(D)}function B(D){("_smui_checkbox_accessor"in D.detail||"_smui_radio_accessor"in D.detail)&&n(13,k=D.detail)}function me(){var D,se,Be;const Tt=ht(),Jt=Tt.querySelector(".mdc-deprecated-list-item__primary-text");if(Jt)return(D=Jt.textContent)!==null&&D!==void 0?D:"";const En=Tt.querySelector(".mdc-deprecated-list-item__text");return En?(se=En.textContent)!==null&&se!==void 0?se:"":(Be=Tt.textContent)!==null&&Be!==void 0?Be:""}function ht(){return I.getElement()}function In(D){re[D?"unshift":"push"](()=>{I=D,n(14,I)})}const qn=()=>n(13,k=void 0);return t.$$set=D=>{e=M(M({},e),ke(D)),n(27,r=Y(e,s)),"use"in D&&n(1,d=D.use),"class"in D&&n(2,f=D.class),"style"in D&&n(3,m=D.style),"color"in D&&n(4,g=D.color),"nonInteractive"in D&&n(5,y=D.nonInteractive),"ripple"in D&&n(6,b=D.ripple),"activated"in D&&n(7,S=D.activated),"role"in D&&n(8,T=D.role),"selected"in D&&n(0,A=D.selected),"disabled"in D&&n(9,H=D.disabled),"skipRestoreFocus"in D&&n(10,C=D.skipRestoreFocus),"tabindex"in D&&n(28,p=D.tabindex),"inputId"in D&&n(29,E=D.inputId),"href"in D&&n(11,F=D.href),"component"in D&&n(12,j=D.component),"$$scope"in D&&n(35,a=D.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&268444193&&n(18,i=h(p)?!y&&!H&&(A||k&&k.checked)?0:-1:p)},[A,d,f,m,g,y,b,S,T,H,C,F,j,k,I,L,X,_,i,c,V,Se,$,Me,yt,Ce,B,r,p,E,me,ht,o,In,qn,a]}class jT extends De{constructor(e){super();Ne(this,e,BT,VT,Oe,{use:1,class:2,style:3,color:4,nonInteractive:5,ripple:6,activated:7,role:8,selected:0,disabled:9,skipRestoreFocus:10,tabindex:28,inputId:29,href:11,component:12,getPrimaryText:30,getElement:31},null,[-1,-1])}get getPrimaryText(){return this.$$.ctx[30]}get getElement(){return this.$$.ctx[31]}}lt({class:"mdc-deprecated-list-item__text",component:ci});lt({class:"mdc-deprecated-list-item__primary-text",component:ci});lt({class:"mdc-deprecated-list-item__secondary-text",component:ci});function qT(t){let e,n,i,s,r,o;const a=t[8].default,l=ue(a,t,t[7],null);let c=[{class:n=fe({[t[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":t[4]})},t[5]],u={};for(let h=0;h<c.length;h+=1)u=M(u,c[h]);return{c(){e=ve("span"),l&&l.c(),this.h()},l(h){e=Ee(h,"SPAN",{class:!0});var d=Ie(e);l&&l.l(d),d.forEach(U),this.h()},h(){te(e,u)},m(h,d){J(h,e,d),l&&l.m(e,null),t[9](e),s=!0,r||(o=[ee(i=Ye.call(null,e,t[0])),ee(t[3].call(null,e))],r=!0)},p(h,[d]){l&&l.p&&(!s||d&128)&&he(l,a,h,h[7],s?ce(a,h[7],d,null):de(h[7]),null),te(e,u=ge(c,[(!s||d&2&&n!==(n=fe({[h[1]]:!0,"mdc-deprecated-list-item__graphic":!0,"mdc-menu__selection-group-icon":h[4]})))&&{class:n},d&32&&h[5]])),i&&Re(i.update)&&d&1&&i.update.call(null,h[0])},i(h){s||(N(l,h),s=!0)},o(h){P(l,h),s=!1},d(h){h&&U(e),l&&l.d(h),t[9](null),r=!1,Le(o)}}}function xT(t,e,n){const i=["use","class","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e;const a=Ve(_e());let{use:l=[]}=e,{class:c=""}=e,u,h=Ht("SMUI:list:graphic:menu-selection-group");function d(){return u}function f(m){re[m?"unshift":"push"](()=>{u=m,n(2,u)})}return t.$$set=m=>{e=M(M({},e),ke(m)),n(5,s=Y(e,i)),"use"in m&&n(0,l=m.use),"class"in m&&n(1,c=m.class),"$$scope"in m&&n(7,o=m.$$scope)},[l,c,u,a,h,s,d,o,r,f]}class GT extends De{constructor(e){super();Ne(this,e,xT,qT,Oe,{use:0,class:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}lt({class:"mdc-deprecated-list-item__meta",component:ci});lt({class:"mdc-deprecated-list-group",component:yn});lt({class:"mdc-deprecated-list-group__subheader",component:z0});const LA=jT,zT=GT;lt({class:"mdc-menu__selection-group-icon",component:zT});/**
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
 */var Wt={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},WT={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var sm=function(t){en(e,t);function e(n){var i=t.call(this,Ke(Ke({},e.defaultAdapter),n))||this;return i.animationFrame=0,i.animationTimer=0,i}return Object.defineProperty(e,"strings",{get:function(){return WT},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Wt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var n=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(Wt.OPEN),this.adapter.addClass(Wt.ANIMATE),this.runNextAnimationFrame(function(){n.adapter.addClass(Wt.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(Wt.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(Wt.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(Wt.OPENING)||this.adapter.hasClass(Wt.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(Wt.CLOSING)},e.prototype.handleKeydown=function(n){var i=n.keyCode,s=n.key,r=s==="Escape"||i===27;r&&this.close()},e.prototype.handleTransitionEnd=function(n){var i=Wt.OPENING,s=Wt.CLOSING,r=Wt.OPEN,o=Wt.ANIMATE,a=Wt.ROOT,l=this.isElement(n.target)&&this.adapter.elementHasClass(n.target,a);!l||(this.isClosing()?(this.adapter.removeClass(r),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(o),this.adapter.removeClass(i),this.adapter.removeClass(s))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(n){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(n,0)})},e.prototype.isElement=function(n){return Boolean(n.classList)},e}(rn);/**
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
 */var KT=function(t){en(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(sm);function XT(t){let e,n,i,s,r,o;const a=t[15].default,l=ue(a,t,t[14],null);let c=[{class:n=fe(je({[t[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":t[2]==="dismissible","mdc-drawer--modal":t[2]==="modal","smui-drawer__absolute":t[2]==="modal"&&!t[3]},t[6]))},t[8]],u={};for(let h=0;h<c.length;h+=1)u=M(u,c[h]);return{c(){e=ve("aside"),l&&l.c(),this.h()},l(h){e=Ee(h,"ASIDE",{class:!0});var d=Ie(e);l&&l.l(d),d.forEach(U),this.h()},h(){te(e,u)},m(h,d){J(h,e,d),l&&l.m(e,null),t[16](e),s=!0,r||(o=[ee(i=Ye.call(null,e,t[0])),ee(t[7].call(null,e)),Fe(e,"keydown",t[17]),Fe(e,"transitionend",t[18])],r=!0)},p(h,[d]){l&&l.p&&(!s||d&16384)&&he(l,a,h,h[14],s?ce(a,h[14],d,null):de(h[14]),null),te(e,u=ge(c,[(!s||d&78&&n!==(n=fe(je({[h[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":h[2]==="dismissible","mdc-drawer--modal":h[2]==="modal","smui-drawer__absolute":h[2]==="modal"&&!h[3]},h[6]))))&&{class:n},d&256&&h[8]])),i&&Re(i.update)&&d&1&&i.update.call(null,h[0])},i(h){s||(N(l,h),s=!0)},o(h){P(l,h),s=!1},d(h){h&&U(e),l&&l.d(h),t[16](null),r=!1,Le(o)}}}function QT(t,e,n){const i=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e;const{FocusTrap:a}=h0,l=Ve(_e());let{use:c=[]}=e,{class:u=""}=e,{variant:h=void 0}=e,{open:d=!1}=e,{fixed:f=!0}=e,m,g,y={},b=null,S,T=!1;ot("SMUI:list:nav",!0),ot("SMUI:list:item:nav",!0),ot("SMUI:list:wrapFocus",!0);let A=h;$t(()=>{S=new a(m,{skipInitialFocus:!0}),n(4,g=H()),g&&g.init()}),Gn(()=>{g&&g.destroy(),T&&T.removeEventListener("SMUIDrawerScrim:click",F)});function H(){var V,j;T&&T.removeEventListener("SMUIDrawerScrim:click",F),h==="modal"&&(T=(j=(V=m.parentNode)===null||V===void 0?void 0:V.querySelector(".mdc-drawer-scrim"))!==null&&j!==void 0?j:!1,T&&T.addEventListener("SMUIDrawerScrim:click",F));const G=h==="dismissible"?sm:h==="modal"?KT:void 0;return G?new G({addClass:p,removeClass:E,hasClass:C,elementHasClass:(Se,$)=>Se.classList.contains($),saveFocus:()=>b=document.activeElement,restoreFocus:()=>{b&&"focus"in b&&m.contains(document.activeElement)&&b.focus()},focusActiveNavigationItem:()=>{const Se=m.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");Se&&Se.focus()},notifyClose:()=>{n(9,d=!1),Qe(m,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{n(9,d=!0),Qe(m,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>S.trapFocus(),releaseFocus:()=>S.releaseFocus()}):void 0}function C(V){return V in y?y[V]:X().classList.contains(V)}function p(V){y[V]||n(6,y[V]=!0,y)}function E(V){(!(V in y)||y[V])&&n(6,y[V]=!1,y)}function F(){g&&"handleScrimClick"in g&&g.handleScrimClick()}function I(V){n(9,d=V)}function L(){return d}function X(){return m}function _(V){re[V?"unshift":"push"](()=>{m=V,n(5,m)})}const k=V=>g&&g.handleKeydown(V),w=V=>g&&g.handleTransitionEnd(V);return t.$$set=V=>{e=M(M({},e),ke(V)),n(8,s=Y(e,i)),"use"in V&&n(0,c=V.use),"class"in V&&n(1,u=V.class),"variant"in V&&n(2,h=V.variant),"open"in V&&n(9,d=V.open),"fixed"in V&&n(3,f=V.fixed),"$$scope"in V&&n(14,o=V.$$scope)},t.$$.update=()=>{t.$$.dirty&8212&&A!==h&&(n(13,A=h),g&&g.destroy(),n(6,y={}),n(4,g=H()),g&&g.init()),t.$$.dirty&528&&g&&g.isOpen()!==d&&(d?g.open():g.close())},[c,u,h,f,g,m,y,l,s,d,I,L,X,A,o,r,_,k,w]}class OA extends De{constructor(e){super();Ne(this,e,QT,XT,Oe,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}var RA=lt({class:"mdc-drawer-app-content",component:yn}),kA=lt({class:"mdc-drawer__content",component:yn});lt({class:"mdc-drawer__header",component:yn});lt({class:"mdc-drawer__title",component:x0});lt({class:"mdc-drawer__subtitle",component:G0});function YT(t){let e,n,i,s,r,o;const a=t[9].default,l=ue(a,t,t[8],null);let c=[{class:n=fe({[t[1]]:!0,"mdc-card":!0,"mdc-card--outlined":t[2]==="outlined","smui-card--padded":t[3]})},t[6]],u={};for(let h=0;h<c.length;h+=1)u=M(u,c[h]);return{c(){e=ve("div"),l&&l.c(),this.h()},l(h){e=Ee(h,"DIV",{class:!0});var d=Ie(e);l&&l.l(d),d.forEach(U),this.h()},h(){te(e,u)},m(h,d){J(h,e,d),l&&l.m(e,null),t[10](e),s=!0,r||(o=[ee(i=Ye.call(null,e,t[0])),ee(t[5].call(null,e))],r=!0)},p(h,[d]){l&&l.p&&(!s||d&256)&&he(l,a,h,h[8],s?ce(a,h[8],d,null):de(h[8]),null),te(e,u=ge(c,[(!s||d&14&&n!==(n=fe({[h[1]]:!0,"mdc-card":!0,"mdc-card--outlined":h[2]==="outlined","smui-card--padded":h[3]})))&&{class:n},d&64&&h[6]])),i&&Re(i.update)&&d&1&&i.update.call(null,h[0])},i(h){s||(N(l,h),s=!0)},o(h){P(l,h),s=!1},d(h){h&&U(e),l&&l.d(h),t[10](null),r=!1,Le(o)}}}function JT(t,e,n){const i=["use","class","variant","padded","getElement"];let s=Y(e,i),{$$slots:r={},$$scope:o}=e;const a=Ve(_e());let{use:l=[]}=e,{class:c=""}=e,{variant:u="raised"}=e,{padded:h=!1}=e,d;function f(){return d}function m(g){re[g?"unshift":"push"](()=>{d=g,n(4,d)})}return t.$$set=g=>{e=M(M({},e),ke(g)),n(6,s=Y(e,i)),"use"in g&&n(0,l=g.use),"class"in g&&n(1,c=g.class),"variant"in g&&n(2,u=g.variant),"padded"in g&&n(3,h=g.padded),"$$scope"in g&&n(8,o=g.$$scope)},[l,c,u,h,d,a,s,f,o,r,m]}class NA extends De{constructor(e){super();Ne(this,e,JT,YT,Oe,{use:0,class:1,variant:2,padded:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}lt({class:"smui-card__content",component:yn});lt({class:"mdc-card__media-content",component:yn});lt({class:"mdc-card__action-buttons",component:yn});lt({class:"mdc-card__action-icons",component:yn});export{SA as $,$t as A,M as B,ip as C,jm as D,lA as E,hA as F,ue as G,he as H,de as I,ce as J,At as K,Dt as L,fA as M,yA as N,mA as O,_A as P,aA as Q,vA as R,De as S,dA as T,Tn as U,TA as V,AA as W,re as X,An as Y,uA as Z,cA as _,Ie as a,CA as a0,wA as a1,eA as a2,LA as a3,OA as a4,RA as a5,kA as a6,nA as a7,NA as a8,$T as a9,Gn as aa,pA as ab,gA as ac,IA as ad,EA as ae,bA as af,$m as ag,Xm as ah,tA as ai,ee as aj,Fe as ak,Re as al,Le as am,sA as an,oA as ao,rA as ap,Zt as b,Ee as c,U as d,ve as e,J as f,mi as g,Qi as h,Ne as i,Je as j,Ze as k,nt as l,dt as m,$e as n,ze as o,ge as p,Ge as q,St as r,Oe as s,bn as t,P as u,We as v,Ct as w,N as x,ot as y,iA as z};

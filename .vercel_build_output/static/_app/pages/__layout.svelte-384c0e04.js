var N=Object.defineProperty;var k=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var D=(n,e,s)=>e in n?N(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s,I=(n,e)=>{for(var s in e||(e={}))O.call(e,s)&&D(n,s,e[s]);if(k)for(var s of k(e))z.call(e,s)&&D(n,s,e[s]);return n};import{D as B,E as M,S as Q,i as j,s as G,l as w,f as C,u as d,w as $,x as _,d as h,F as b,A as H,r as K,G as T,H as V,I as L,J as P,K as X,L as Y,e as q,t as J,c as U,a as Z,g as W,M as m,N as ee,O as g,P as R,Q as S,R as y,T as se,_ as te,V as ae}from"../chunks/vendor-577628cf.js";import{u as f,h as A,g as E}from"../chunks/navigation-a5eee486.js";import"../chunks/singletons-12a22614.js";function ne(){return B({apiKey:"AIzaSyB7XsbhYEd_4DQigc_hfnmdpcwlvzugPOw",databaseURL:"https://feynman-mvp.firebaseio.com",authDomain:"feynman-mvp.firebaseapp.com",projectId:"feynman-mvp",storageBucket:"feynman-mvp.appspot.com",messagingSenderId:"148720897081",appId:"1:148720897081:web:fdf5c605dcc74b56",measurementId:"G-DR4M7QGV7Z"})}const oe=()=>{const n=M("__svelte__");return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:n.navigating.subscribe}},session:n.session}},ie={subscribe(n){return oe().page.subscribe(n)}};function re(n){let e;const s=n[2].default,a=L(s,n,n[1],null);return{c(){a&&a.c()},l(o){a&&a.l(o)},m(o,i){a&&a.m(o,i),e=!0},p(o,i){a&&a.p&&(!e||i&2)&&P(a,s,o,o[1],e?Y(s,o[1],i,null):X(o[1]),null)},i(o){e||(_(a,o),e=!0)},o(o){d(a,o),e=!1},d(o){a&&a.d(o)}}}function ce(n){let e,s;return{c(){e=q("h4"),s=J("Fetching your info..."),this.h()},l(a){e=U(a,"H4",{style:!0});var o=Z(e);s=W(o,"Fetching your info..."),o.forEach(h),this.h()},h(){m(e,"margin-left","16px"),m(e,"font-family","Roboto, sans-serif"),m(e,"opacity","70%"),m(e,"font-weight","400")},m(a,o){C(a,e,o),ee(e,s)},p:g,i:g,o:g,d(a){a&&h(e)}}}function le(n){let e,s,a,o;const i=[ce,re],r=[];function u(t,c){return t[0]?1:0}return e=u(n),s=r[e]=i[e](n),{c(){s.c(),a=w()},l(t){s.l(t),a=w()},m(t,c){r[e].m(t,c),C(t,a,c),o=!0},p(t,[c]){let l=e;e=u(t),e===l?r[e].p(t,c):(K(),d(r[l],1,1,()=>{r[l]=null}),$(),s=r[e],s?s.p(t,c):(s=r[e]=i[e](t),s.c()),_(s,1),s.m(a.parentNode,a))},i(t){o||(_(s),o=!0)},o(t){d(s),o=!1},d(t){r[e].d(t),t&&h(a)}}}function ue(n,e,s){let a,o,i;b(n,f,t=>s(3,a=t)),b(n,ie,t=>s(4,o=t)),b(n,A,t=>s(0,i=t));let{$$slots:r={},$$scope:u}=e;return H(async()=>{ne(),T(V(),async t=>{if(t){f.set({phoneNumber:t.phoneNumber,uid:t.uid,pencilColors:[]});const c="O00mSbBEYQxTnv3cKkbe",l=R(S(),"users/"+t.uid);let p=await y(l);if(!p.exists()){const v=R(S(),"metadata/78tDSRCiMHGnf8zcXkQt"),F=await y(v),x={id:c,name:"8.01",description:"Classical Mechanics"};await se(l,{name:`Beaver #${F.data().numOfUsers}`,uid:t.uid,phoneNumber:t.phoneNumber,enrolledClasses:[x],mostRecentClassAndRoomID:`/${c}/${c}`,pencilColors:["white","#F69637","#A9F8BD","#6EE2EA"],willReceiveText:!0}),te(v,{numOfUsers:ae(1)}),p=await y(l)}f.set(I({id:p.id},p.data())),o.params.classID&&o.params.roomID?E(`/${classID}/${roomID}`):E(a.mostRecentClassAndRoomID)}else f.set({});A.set(!0)})}),n.$$set=t=>{"$$scope"in t&&s(1,u=t.$$scope)},[i,u,r]}class _e extends Q{constructor(e){super();j(this,e,ue,le,G,{})}}export{_e as default};
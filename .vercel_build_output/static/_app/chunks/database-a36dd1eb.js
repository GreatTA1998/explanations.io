var m=Object.defineProperty;var c=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var o=(n,a,s)=>a in n?m(n,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[a]=s,e=(n,a)=>{for(var s in a||(a={}))d.call(a,s)&&o(n,s,a[s]);if(c)for(var s of c(a))r.call(a,s)&&o(n,s,a[s]);return n};import{Q as f,N as h,M as u,O as p,R as y,T as b}from"./vendor-55a52f70.js";function D(){f({apiKey:"AIzaSyB7XsbhYEd_4DQigc_hfnmdpcwlvzugPOw",authDomain:"feynman-mvp.firebaseapp.com",databaseURL:"https://feynman-mvp.firebaseio.com",projectId:"feynman-mvp",storageBucket:"feynman-mvp.appspot.com",messagingSenderId:"148720897081",appId:"1:148720897081:web:fdf5c605dcc74b56",measurementId:"G-DR4M7QGV7Z"})}async function g(n){return new Promise(async a=>{const t=(await y(b(p(),n))).docs.map(i=>e({id:i.id},i.data()));a(t)})}async function I(n){return new Promise(async a=>{const s=await h(u(p(),n)),t=e({id:s.id},s.data());a(t)})}export{I as a,g as f,D as i};
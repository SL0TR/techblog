(function(e){function t(t){for(var o,c,u=t[0],s=t[1],l=t[2],i=0,f=[];i<u.length;i++)c=u[i],a[c]&&f.push(a[c][0]),a[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);h&&h(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},c={app:0},a={app:0},r=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-c56d4f3e":"f33933e2","chunk-04c4478c":"3d3dec4e","chunk-1c6f52d4":"0fff36e2","chunk-32fa50c6":"13b1d845","chunk-734b563f":"18a8a67d","chunk-96ba3788":"102605a0","chunk-42067976":"8c2c0988","chunk-66de4f79":"7f08d5bb","chunk-2e80ac1c":"f997a8fe"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-c56d4f3e":1,"chunk-04c4478c":1,"chunk-1c6f52d4":1,"chunk-32fa50c6":1,"chunk-734b563f":1,"chunk-96ba3788":1,"chunk-42067976":1,"chunk-66de4f79":1,"chunk-2e80ac1c":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise(function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-c56d4f3e":"fa707c8b","chunk-04c4478c":"e00639f1","chunk-1c6f52d4":"c13c42af","chunk-32fa50c6":"05383a9c","chunk-734b563f":"80a09508","chunk-96ba3788":"98c10eee","chunk-42067976":"e00f9c6e","chunk-66de4f79":"f7845cee","chunk-2e80ac1c":"44847b1d"}[e]+".css",c=s.p+o,a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var u=a[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===c))return t()}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){u=i[r],l=u.getAttribute("data-href");if(l===o||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.request=o,n(a)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){c[e]=0}));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise(function(t,n){o=a[e]=[t,n]});t.push(o[2]=r);var l,i=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=u(e),l=function(t){f.onerror=f.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+o+": "+c+")");r.type=o,r.request=c,n[1](r)}a[e]=void 0}};var h=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,i.appendChild(f)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/techblog/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var h=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("87dc"),c=n.n(o);c.a},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),c=n("bb71");n("da64");o["a"].use(c["a"],{iconfont:"fa",theme:{primary:"#880088",secondary:"#D9004B",accent:"#FF7700",error:"#b71c1c",dimwhite:"#eee"}});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)},r=[],u={name:"App",data(){return{}}},s=u,l=(n("034f"),n("2877")),i=n("6544"),f=n.n(i),h=n("7496"),d=Object(l["a"])(s,a,r,!1,null,null,null);d.options.__file="App.vue";var p=d.exports;f()(d,{VApp:h["a"]});var m=n("8c4f");o["a"].use(m["a"]);var g=new m["a"]({mode:"history",base:"/techblog/",routes:[{path:"/",name:"defaultLayout",component:()=>Promise.all([n.e("chunk-c56d4f3e"),n.e("chunk-04c4478c"),n.e("chunk-734b563f")]).then(n.bind(null,"ea2a")),children:[{path:"/",name:"home",component:()=>Promise.all([n.e("chunk-c56d4f3e"),n.e("chunk-2e80ac1c")]).then(n.bind(null,"bb51"))},{path:"/blog",name:"blog",component:()=>Promise.all([n.e("chunk-c56d4f3e"),n.e("chunk-04c4478c"),n.e("chunk-1c6f52d4")]).then(n.bind(null,"fd3f"))},{path:"/login",name:"login",component:()=>Promise.all([n.e("chunk-c56d4f3e"),n.e("chunk-04c4478c"),n.e("chunk-96ba3788"),n.e("chunk-42067976")]).then(n.bind(null,"a55b"))},{path:"/blogger",name:"blogger",component:()=>Promise.all([n.e("chunk-c56d4f3e"),n.e("chunk-04c4478c"),n.e("chunk-96ba3788"),n.e("chunk-66de4f79")]).then(n.bind(null,"c1ec"))},{path:"/single-post",name:"single-post",component:()=>Promise.all([n.e("chunk-c56d4f3e"),n.e("chunk-04c4478c"),n.e("chunk-32fa50c6")]).then(n.bind(null,"caeb")),props:!0}]}]}),b=n("2f62"),k=n("bc3a"),v=n.n(k);v.a.interceptors.request.use(e=>{return e.headers.authorization="Bearer "+localStorage.getItem("token"),e},e=>{return Promise.reject(e)});var y=v.a;const w="https://sl0tr-techblog.herokuapp.com/",P=w+"api/",S=w+"auth/",O=P+"users",j=O+"/me",T=P+"posts",E=S+"signin",L={user:{token:localStorage.getItem("token")||""}},_={user:e=>e.user,isAuthenticated:e=>!!e.user.token},A={login(e,t){const n=localStorage.getItem("token");e.user.token=t.token||n,localStorage.setItem("token",t.token||n)},clearUser(e,t){localStorage.removeItem("token")}},x={async LOGIN({commit:e},t){if(t){let{data:n}=await y.post(E,t);console.log(n),e("login",n)}},LOGOUT({commit:e},t){L.user.token="",e("clearUser")},async SIGNUP({commit:e},t){if(t){let{data:n}=await y.post(O,t);console.log(n),e("login",n)}}},B={state:L,getters:_,mutations:A,actions:x};var I=B;const M={blogLoading:!0,blogs:null},N={blogs:e=>e.blogs,blogLoad:e=>e.blogLoading},U={blogs(e,t){t&&(e.blogLoading=!1,e.blogs=t)}},G={async BLOGS({commit:e},t){let{data:n}=await y.get(T);console.log(n),e("blogs",n)}},q={state:M,getters:N,mutations:U,actions:G};var C=q;const F={me:null},J={me:e=>e.me},$={getMe(e,t){t&&(e.me=t)}},z={async ME({commit:e}){try{let{data:t}=await y.get(j);t?e("getMe",t):console.log("no data recievced")}catch(e){console.log("some error")}}},D={state:F,getters:J,mutations:$,actions:z};var V=D;const H={post:null},K={post:e=>e.post},Q={getPost(e,t){t&&(e.post=t)}},R={async POST({commit:e},t){let{data:n}=await y.post(T,t);e("getPost",n)}},W={state:H,getters:K,mutations:Q,actions:R};var X=W;o["a"].use(b["a"]);const Y={me:!1},Z={},ee={},te={},ne={Auth:I,Blog:C,User:V,Post:X},oe=new b["a"].Store({state:Y,getters:Z,mutations:ee,actions:te,modules:ne});var ce=oe;o["a"].config.productionTip=!0,new o["a"]({router:g,store:ce,render:e=>e(p)}).$mount("#app")},"87dc":function(e,t,n){}});
//# sourceMappingURL=app.ec51b82d.js.map
(function(){var e={34303:function(e,t,n){"use strict";var r=n(64720);const o=function(e){"ECONNABORTED"===e.code||"Network Error"===e.message||e.message.includes("timeout")?(0,r.Message)({message:"请求超时，请稍后刷新重试",type:"error",duration:3e3}):(0,r.Message)({message:"系统错误,请稍后重试",type:"error",duration:3e3})};t.Z=o},84259:function(e,t,n){"use strict";n.d(t,{lR:function(){return i},n$:function(){return a},ov:function(){return s}});var r=n(84471),o=n(34303);n(80129);function a(e){return(0,r.Z)({url:"/user/login",method:"POST",data:e}).catch((e=>{(0,o.Z)(e)}))}function s(e){return(0,r.Z)({url:"/user/yz",method:"POST",data:e}).catch((e=>{(0,o.Z)(e)}))}function i(e){return(0,r.Z)({url:"/user/token",headers:{token:e},method:"GET"}).catch((e=>{(0,o.Z)(e)}))}},42682:function(e,t,n){"use strict";n.d(t,{Z:function(){return l},G:function(){return u}});var r=n(20144),o=n(17152),a={message:{zh:"中文",en:"英文",time:"计划时间"}},s={message:{zh:"Chinese",en:"English",time:"Planning time"}};r["default"].use(o.Z);const i={en:{...s},zh:{...a}};function u(){let e=localStorage.getItem("language");return"zh"==e?"zh":"en"==e?"en":(localStorage.setItem("language","zh"),"zh")}console.log("getLanguage",u());const c=new o.Z({locale:u(),messages:i});var l=c},31402:function(e,t,n){"use strict";var r=n(20144),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],s={created(){}},i=s,u=n(1001),c=(0,u.Z)(i,o,a,!1,null,null,null),l=c.exports,f=n(78345),d=n(84259);const m=function(e,t,n){e.meta.title&&(document.title=e.meta.title),0===e.matched.length?n("/404"):"/login"==e.path?n():(0,d.lR)(localStorage.getItem("token")).then((e=>{200==e.code?n():n("/login")}))};var g=m;r["default"].use(f.ZP);const h=[{path:"/",name:"login",alias:"/login",meta:{title:"登录页",requiresAuth:!1},component:()=>n.e(836).then(n.bind(n,5836))},{path:"/Worktable",name:"Work table",meta:{title:"首页",requiresAuth:!1},component:()=>n.e(955).then(n.bind(n,7955)),children:[{path:"/",meta:{title:"工作台",requiresAuth:!1},component:()=>n.e(914).then(n.bind(n,27914))},{path:"gantt",meta:{title:"甘特图",requiresAuth:!1},component:()=>n.e(48).then(n.bind(n,80048))},{path:"echarts",meta:{title:"echarts",requiresAuth:!1},component:()=>Promise.all([n.e(621),n.e(718)]).then(n.bind(n,44718))},{path:"echarts3d",meta:{title:"echarts3D",requiresAuth:!1},component:()=>Promise.all([n.e(621),n.e(670)]).then(n.bind(n,47670))}]},{path:"/404",name:"404",meta:{title:"404",requiresAuth:!1},component:()=>n.e(800).then(n.bind(n,41800))}],p=new f.ZP({mode:"hash",base:"/",routes:h});p.beforeEach(((e,t,n)=>{g(e,t,n)}));var v=p,b=(n(57658),n(64720)),k=n.n(b),y=n(20629);r["default"].use(y.ZP);const w=new y.ZP.Store({state:{user:localStorage.getItem("username"),token:localStorage.getItem("token"),navList:JSON.parse(localStorage.getItem("navList"))},mutations:{setToken(e,t){e.token=t},setuser(e,t){e.user=t},setNavList(e,t){e.navList=t}},actions:{login({commit:e},t){return new Promise(((n,r)=>{(0,d.n$)({username:t.username,password:t.password,phone:t.phone}).then((t=>{if(console.log("登录",t),200==t.code){const r=t.data.token,o=t.data.user,a=t.data.navList;e("setToken",r),e("setuser",o),e("setNavList",a),localStorage.setItem("token",r),localStorage.setItem("username",o),localStorage.setItem("navList",JSON.stringify(a)),v.push("/Worktable").catch((()=>{})),n()}else(0,b.Message)({message:"登陆失败  稍后重试",type:"error",duration:3e3})})).catch((e=>{(0,b.Message)({message:"系统错误",type:"error",duration:3e3}),r(e)}))}))}}});var S=w,E=n(42682);r["default"].config.productionTip=!1,r["default"].use(k()),new r["default"]({router:v,store:S,i18n:E.Z,render:e=>e(l)}).$mount("#app"),r["default"].config.errorHandler=function(e){b.Message.error("出错了")}},84471:function(e,t,n){"use strict";var r=n(6154),o=n(64720);console.log("process.env",{NODE_ENV:"production",BASE_URL:"/"});const a=r.Z.create({baseURL:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_BASE_URL+"/api",headers:{"Content-type":"application/x-www-form-urlencoded"},timeout:5e3});a.interceptors.request.use((e=>{const t=localStorage.getItem("token");return t&&(e.headers["Authorization"]=`Bearer ${t}`),e}),(e=>Promise.reject(e))),a.interceptors.response.use((e=>{if(e.status&&200===e.status)return Promise.resolve(e.data)}),(e=>{if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误",o.Message.error(e.message);break;case 401:e.message="未授权，请登录",o.Message.error(e.message);break;case 403:e.message="拒绝访问",o.Message.error(e.message);break;case 404:e.message="服务器出错:",o.Message.error(e.message);break;case 408:e.message="请求超时",o.Message.error(e.message);break;case 500:e.message="服务器内部错误",o.Message.error(e.message);break;case 501:e.message="服务未实现",o.Message.error(e.message);break;case 502:e.message="网关错误",o.Message.error(e.message);break;case 503:e.message="服务不可用",o.Message.error(e.message);break;case 504:e.message="网关超时",o.Message.error(e.message);break;case 505:e.message="HTTP版本不受支持",o.Message.error(e.message);break;case 0:e.message="接口不存在",console.log("111"),o.Message.error(e.message);break;default:}return Promise.reject(e)})),t.Z=a},24654:function(){}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,o,a){if(!r){var s=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var i=!0,u=0;u<r.length;u++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(i=!1,a<s&&(s=a));if(i){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"static/js/"+e+".js"}}(),function(){n.miniCssF=function(e){return"static/css/"+e+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-low-code:";n.l=function(r,o,a,s){if(e[r])e[r].push(o);else{var i,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){i=f;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[o];var d=function(t,n){i.onerror=i.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=i,a.parentNode&&a.parentNode.removeChild(a),o(u)}};return a.onerror=a.onload=s,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){o=s[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var s=n.miniCssF(r),i=n.p+s;if(t(s,i))return o();e(r,i,null,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={48:1,670:1,718:1,800:1,836:1,955:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var s=n.p+n.u(t),i=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,o[1](i)}};n.l(s,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,s=r[0],i=r[1],u=r[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(u)var l=u(n)}for(t&&t(r);c<s.length;c++)a=s[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkvue_low_code"]=self["webpackChunkvue_low_code"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(31402)}));r=n.O(r)})();
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e96810a"],{"0649":function(t,e,r){"use strict";var n=r("b6b3"),o=r("2aa4").start,c=r("f765");n({target:"String",proto:!0,forced:c},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"2aa4":function(t,e,r){var n=r("fcce"),o=r("5873"),c=r("9522"),a=Math.ceil,i=function(t){return function(e,r,i){var u,f,s=String(c(e)),b=s.length,l=void 0===i?" ":String(i),d=n(r);return d<=b||""==l?s:(u=d-b,f=o.call(l,a(u/l.length)),f.length>u&&(f=f.slice(0,u)),t?s+f:f+s)}};t.exports={start:i(!1),end:i(!0)}},"2d57":function(t,e,r){},"31af":function(t,e,r){"use strict";var n=r("b6b3"),o=r("a1d8").filter,c=r("1feb"),a=r("6867"),i=c("filter"),u=a("filter");n({target:"Array",proto:!0,forced:!i||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"3a59":function(t,e,r){"use strict";r("2d57")},"50e5":function(t,e,r){"use strict";var n=r("8b07"),o=r("0e66"),c=r("3903"),a=r("9b01"),i="toString",u=RegExp.prototype,f=u[i],s=c((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),b=f.name!=i;(s||b)&&n(RegExp.prototype,i,(function(){var t=o(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in u)?a.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r("10b3"),r("31af"),r("ac9b"),r("7bb8"),r("d58e"),r("c8d3"),r("6d8c");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"569f":function(t,e,r){"use strict";var n=r("a1d8").forEach,o=r("56bf"),c=r("6867"),a=o("forEach"),i=c("forEach");t.exports=a&&i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},5873:function(t,e,r){"use strict";var n=r("a3d8"),o=r("9522");t.exports="".repeat||function(t){var e=String(o(this)),r="",c=n(t);if(c<0||c==1/0)throw RangeError("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(e+=e))1&c&&(r+=e);return r}},"6d8c":function(t,e,r){var n=r("92f7"),o=r("389a"),c=r("569f"),a=r("88a7");for(var i in o){var u=n[i],f=u&&u.prototype;if(f&&f.forEach!==c)try{a(f,"forEach",c)}catch(s){f.forEach=c}}},7996:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return c}));r("e790"),r("50e5"),r("0649");var n=r("7a23"),o=function(){var t=Object(n["reactive"])({date:"",time:"",timeInterval:1}),e=function(){t.timeInterval=setInterval((function(){var e=new Date,r=e.getFullYear()+"年",n=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"月",o=e.getDate()+"日";t.date=r+n+o,t.time=e.getHours().toString().padStart(2,"0")+":"+e.getMinutes().toString().padStart(2,"0")+":"+e.getSeconds().toString().padStart(2,"0")}),1e3)};return Object(n["onMounted"])((function(){e(),console.log(t.timeInterval)})),Object(n["onBeforeUnmount"])((function(){clearInterval(t.timeInterval)})),{timeState:t}},c=function(t){var e=1,r=function(){try{t.value=t.value+1,o()}catch(e){n()}},n=function(){clearTimeout(e)},o=function(){e=setTimeout((function(){r()}),1e3)};return{getList:r,clear:n}}},"7bb8":function(t,e,r){var n=r("b6b3"),o=r("3903"),c=r("f11f"),a=r("84e7").f,i=r("50ce"),u=o((function(){a(1)})),f=!i||u;n({target:"Object",stat:!0,forced:f,sham:!i},{getOwnPropertyDescriptor:function(t,e){return a(c(t),e)}})},"85d4":function(t,e,r){"use strict";r.r(e);var n=r("7a23"),o=Object(n["withScopeId"])("data-v-4bbb65ae");Object(n["pushScopeId"])("data-v-4bbb65ae");var c={class:"home"},a=Object(n["createVNode"])("h1",null,"main主页",-1);Object(n["popScopeId"])();var i=o((function(t,e,r,o,i,u){return Object(n["openBlock"])(),Object(n["createBlock"])("div",c,[a,Object(n["createVNode"])("h2",null,Object(n["toDisplayString"])(t.data),1)])})),u=r("5530"),f=r("7996"),s=function(){var t=Object(n["reactive"])({listData:1,name:"请求数据"}),e=Object(n["toRef"])(t,"listData"),r=Object(f["a"])(e),o=r.getList,c=r.clear,a=function(){};return Object(n["onMounted"])((function(){o()})),Object(n["onBeforeUnmount"])((function(){c()})),{state:t,data:e,getDate:a}},b=Object(n["defineComponent"])({setup:function(){var t=s(),e=t.state,r=t.getDate,o=t.data;return Object(u["a"])(Object(u["a"])({},Object(n["toRefs"])(e)),{},{getDate:r,data:o})}});r("3a59");b.render=i,b.__scopeId="data-v-4bbb65ae";e["default"]=b},"9b01":function(t,e,r){"use strict";var n=r("0e66");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ac9b:function(t,e,r){"use strict";var n=r("b6b3"),o=r("569f");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},c8d3:function(t,e,r){var n=r("b6b3"),o=r("40f9"),c=r("58c5"),a=r("3903"),i=a((function(){c(1)}));n({target:"Object",stat:!0,forced:i},{keys:function(t){return c(o(t))}})},d58e:function(t,e,r){var n=r("b6b3"),o=r("50ce"),c=r("c27e"),a=r("f11f"),i=r("84e7"),u=r("362c");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),o=i.f,f=c(n),s={},b=0;while(f.length>b)r=o(n,e=f[b++]),void 0!==r&&u(s,e,r);return s}})},f765:function(t,e,r){var n=r("6487");t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,c){e.exports=c("cd49")},"1f4c":function(e,t,c){"use strict";c.r(t);c("e790");t["default"]=[{path:"/history",name:"历史数据",component:function(){return Promise.all([c.e("chunk-7fa5f6c6"),c.e("chunk-3cea85a2")]).then(c.bind(null,"3c9d"))},meta:{auth:!0,title:"历史数据",iocn:"history",keepAlive:!0}}]},2148:function(e,t,c){"use strict";c.r(t);c("e790");t["default"]=[{path:"/table",name:"其他船舶设备",component:function(){return c.e("chunk-c4ac5d06").then(c.bind(null,"90fe"))},meta:{auth:!0,title:"其他船舶设备",iocn:"ji",keepAlive:!0}}]},"30f5":function(e,t,c){"use strict";c.r(t);c("e790");t["default"]=[{path:"/home",name:"海水养殖系统",component:function(){return Promise.all([c.e("chunk-7fa5f6c6"),c.e("chunk-21b75860")]).then(c.bind(null,"85d4"))},meta:{auth:!0,title:"海水养殖系统",iocn:"hai",keepAlive:!0}}]},"4dfd":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAPElEQVQ4T2NU3vbmPwMVAeOogQyMf/87UhKkGGEIMvCOr+gBcg0dNZABHCmjYUhSChpNNqPJhqQEA1EMAGBheSdZSpGEAAAAAElFTkSuQmCC"},"78b9":function(e,t,c){},"86c5":function(e,t,c){},a7ff:function(e,t,c){},aa8b:function(e,t,c){},ac09:function(e,t,c){"use strict";c("c2a5")},af05:function(e,t,c){var n={"./fish.ts":"30f5","./main.ts":"d30b","./table.ts":"2148","./z.ts":"1f4c"};function a(e){var t=o(e);return c(t)}function o(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="af05"},c2a5:function(e,t,c){},cd49:function(e,t,c){"use strict";c.r(t);c("e623"),c("e379"),c("5dc8"),c("37e1");var n=c("7a23");function a(e,t,c,a,o,r){var i=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createBlock"])(i)}c("ac09");const o={};o.render=a;var r=o,i=(c("7fbc"),c("015e"),c("e790"),c("4e83"),c("53ca")),u=c("954b"),s=function(e){return e.keys().reduce((function(t,c){var n=e(c).default;return"object"===Object(i["a"])(n)?t.concat(n):t}),[]).sort((function(e,t){return(e||0)-(t||0)}))},l=s(c("af05"));localStorage.setItem("router",JSON.stringify(l)),console.log(l);var d=[{path:"/",name:"Home",meta:{title:"首页",keepAlive:!0},redirect:"home",component:function(){return Promise.all([c.e("chunk-7fa5f6c6"),c.e("chunk-76047623")]).then(c.bind(null,"bb51"))},children:l}],f=Object(u["a"])({history:Object(u["b"])(),routes:d}),p=f,b=c("5502"),m=Object(b["a"])({state:{listData:{1:10}},mutations:{setData:function(e,t){e.listData=t}},actions:{setData:function(e,t){e.commit("setData",t)}},modules:{}}),O=(c("9f29"),c("1c85"),c("ccb9")),h=(c("0c1d"),c("8592")),v=(c("0723"),c("0020")),j=(c("8b88"),c("681b")),g=(c("19ac"),c("cdeb")),k=(c("a71a"),c("b558")),A=(c("e1f5"),c("5efb")),y=c("4dfd"),N=c.n(y),S=Object(n["withScopeId"])("data-v-6feb1f5a");Object(n["pushScopeId"])("data-v-6feb1f5a");var V={class:"card"},B=Object(n["createVNode"])("div",{class:"v10"},[Object(n["createVNode"])("img",{src:N.a,alt:""}),Object(n["createVNode"])("img",{src:N.a,class:"v11",alt:""})],-1),w=Object(n["createVNode"])("div",{class:"bt"},[Object(n["createVNode"])("div",{class:"v10"},[Object(n["createVNode"])("img",{src:N.a,style:{transform:"rotate(-90deg)"},alt:""}),Object(n["createVNode"])("img",{src:N.a,style:{transform:"rotate(-180deg)"},alt:""})])],-1);Object(n["popScopeId"])();var D=S((function(e,t,c,a,o,r){return Object(n["openBlock"])(),Object(n["createBlock"])("div",V,[B,Object(n["renderSlot"])(e.$slots,"default"),w])})),I=Object(n["defineComponent"])({props:{style:{type:Object,default:function(){return{width:"300px",height:"400px"}}}}});c("f0e3");I.render=D,I.__scopeId="data-v-6feb1f5a";var x=I,C=Object(n["withScopeId"])("data-v-1921668f");Object(n["pushScopeId"])("data-v-1921668f");var E={class:"police"};Object(n["popScopeId"])();var U=C((function(e,t,c,a,o,r){return Object(n["openBlock"])(),Object(n["createBlock"])("div",E,[Object(n["createVNode"])("div",null,Object(n["toDisplayString"])(e.title),1),Object(n["createVNode"])("div",{class:"po",style:e.style},null,4)])})),P=Object(n["defineComponent"])({props:{title:{type:String,default:"标题"},color:{type:String,default:"red"},num:{type:String,default:"1"}},setup:function(e){var t=Object(b["b"])(),c=Object(n["computed"])((function(){return console.log(e.num),console.log(Boolean(t.state.listData[e.num])),Boolean(t.state.listData[e.num])?{background:"".concat(e.color)}:{background:"#ccc"}}));return{style:c}}});c("f2ac");P.render=U,P.__scopeId="data-v-1921668f";var _=P,G=Object(n["withScopeId"])("data-v-ddc17684");Object(n["pushScopeId"])("data-v-ddc17684");var Q={class:"police"},T={class:"fex"},M={class:"fex"},J=Object(n["createTextVNode"])(" 高 "),R={class:"fex",style:{"margin-left":"5px"}},q=Object(n["createTextVNode"])(" 低 ");Object(n["popScopeId"])();var F=G((function(e,t,c,a,o,r){return Object(n["openBlock"])(),Object(n["createBlock"])("div",Q,[Object(n["createVNode"])("div",null,Object(n["toDisplayString"])(e.title),1),Object(n["createVNode"])("div",T,[Object(n["createVNode"])("div",M,[J,Object(n["createVNode"])("div",{class:"po",style:e.style},null,4)]),Object(n["createVNode"])("div",R,[q,Object(n["createVNode"])("div",{class:"po",style:e.styles},null,4)])])])})),H=Object(n["defineComponent"])({props:{title:{type:String,default:"标题"},color:{type:String,default:"red"},num:{type:String,default:"1"}},setup:function(e){var t=Object(b["b"])(),c=Object(n["computed"])((function(){return console.log(e.num),console.log(Boolean(t.state.listData[e.num])),Boolean(t.state.listData[e.num])?{background:"".concat(e.color)}:{background:"#ccc"}})),a=Object(n["computed"])((function(){return console.log(e.num),console.log(Boolean(t.state.listData[e.num])),Boolean(t.state.listData[e.num])?{background:"#ccc"}:{background:"".concat(e.color)}}));return{style:c,styles:a}}});c("e236");H.render=F,H.__scopeId="data-v-ddc17684";var K=H,L={install:function(e){e.component(A["a"].name,A["a"]),e.component(k["a"].name,k["a"]),e.component(g["a"].name,g["a"]),e.component(j["a"].name,j["a"]),e.component(v["a"].name,v["a"]),e.component(h["a"].name,h["a"]),e.component("Card",x),e.component("Police",_),e.component("Polices",K),e.use(O["a"])}},Y=L,Z=(c("aa8b"),c("6d5f"),c("96cf"),c("1da1")),z=["/login","/register"];p.beforeEach(function(){var e=Object(Z["a"])(regeneratorRuntime.mark((function e(t,c,n){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(document.title=t.meta.title,a=!0,a)if("/login"===t.path)n();else if(o=m.getters.userData&&m.getters.userData.name,o)n();else try{n()}catch(c){m.commit("user/LOGOUT"),n("/login?redirect=".concat(t.path))}else-1!==z.indexOf(t.path)?n():n("/login?redirect=".concat(t.path));case 3:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}()),Object(n["createApp"])(r).use(m).use(p).use(Y).mount("#app")},d30b:function(e,t,c){"use strict";c.r(t);c("e790");t["default"]=[{path:"/fish",name:"吸鱼泵清污系统",component:function(){return c.e("chunk-82c90e66").then(c.bind(null,"fe22"))},meta:{auth:!0,title:"吸鱼泵清污系统",iocn:"yang",keepAlive:!0}}]},e236:function(e,t,c){"use strict";c("86c5")},f0e3:function(e,t,c){"use strict";c("a7ff")},f2ac:function(e,t,c){"use strict";c("78b9")}},[[0,"runtime","chunk-libs"]]]);
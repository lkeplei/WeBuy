require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([6],{3:function(t,e,n){"use strict";var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},u=s(n(1)),l=s(n(5)),c=s(n(50)),a=s(n(57));function s(t){return t&&t.__esModule?t:{default:t}}u.default.config.productionTip=!1,l.default.mpType="app",u.default.use(c.default),u.default.use(a.default),new u.default(o({},l.default)).$mount()},5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(8),u=n.n(o),l=!1;var c=function(t){l||n(6)},a=n(0)(u.a,null,c,null,null);a.options.__file="Users/ken/Desktop/SourceTree/Ken/NewStart/WeBuy/WeBuy/App.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.default=a.exports},50:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var o,u=n(1),l=(o=u)&&o.__esModule?o:{default:o};e.default={install:function(e,n){e.prototype.post=function(e,n){return new Promise(function(o,u){t.request({url:function(t){return"http://www.okwrap.com:2018/8/"+t}(e),method:"POST",data:function(t){return t}(n),success:function(e){var n;-2e3==e.data.code?(console.log("用户未登录，需要重新登录"),t.navigateTo({url:"../pages/login/login"})):-2001==e.data.code?console.log("需要强制升级app"):o(e),(n=e.data.actionSheet)&&(0==n.type?t.showToast({duration:3e3,icon:"none",title:n.message}):1==n.type&&t.showModal({title:n.title,content:n.message,showCancel:n.buttons.length>1,cancelText:n.buttons.length>1?n.buttons[1].title:"",cancelColor:"#007AFF",confirmText:n.buttons.length>0?n.buttons[0].title:"确定",success:function(t){var e=n.buttons[0].action;t.confirm?console.log("用户点击确定"):t.cancel&&(console.log("用户点击取消"),e=n.buttons[1].action),new l.default({}).router(e,function(){})}}))},fail:function(e){console.log(e),t.showToast({title:"网络繁忙，请稍后再试！！"})},complete:function(){}})})}}}}).call(e,n(2).default)},57:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n={"wb://login/login":"/pages/login/login","wb://cart/cart":"/pages/cart/cart","wb://account/setting":"/pages/account/setting"};e.default={install:function(e,o){e.prototype.router=function(e,o){var u=function(t){console.log(n[t.split("?")[0]]);var e=t.split("?"),o=n[e[0]];return"string"==typeof o&&o.length>0?e.length>0?o+"?"+e[1]:o:""}(e);u.length>0&&t.navigateTo({url:u,success:function(t){},fail:function(){},complete:function(){}})}}}}).call(e,n(2).default)},6:function(t,e){},8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}}}},[3]);
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
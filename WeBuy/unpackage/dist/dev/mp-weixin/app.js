require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([1],[,,,,,function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=s(n(3)),u=s(n(7)),i=s(n(10)),l=s(n(14)),r=s(n(15)),c=s(n(16));function s(e){return e&&e.__esModule?e:{default:e}}a.default.config.productionTip=!1,u.default.mpType="app",a.default.use(i.default),a.default.use(l.default),a.default.use(r.default),a.default.use(c.default),new a.default(o({},u.default)).$mount()},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(9),a=n.n(o),u=!1;var i=function(e){u||n(8)},l=n(0)(a.a,null,i,null,null);l.options.__file="Users/ac/Desktop/SourceTree/Ken/WeGou/WeBuy/WeBuy/App.vue",l.esModule&&Object.keys(l.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=l.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}}},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=n(11),a=n(12),u=n(13);t.default={install:function(t,n){t.prototype.local=function(n){var i="";switch(e.getStorageSync(t.prototype.staticVar.language)){case"english":i=u[n];break;case"simpChinese":i=o[n];break;case"tradiChinese":i=a[n];break;default:i=o[n]}return"string"==typeof i&&i.length>0?i:""}}}}).call(t,n(1).default)},function(e,t,n){"use strict";e.exports={navTitleCart:"购物车",navTitleAccount:"我的账户",navTitleMyInfo:"我的信息",navTitleSetting:"账户设置",navTitleChangeName:"修改显示名称",placeholderMail:"请输入邮箱",placeholderPwd:"请输入密码",placeholderUserName:"请输入显示名称",publicMale:"男士",publicFemale:"女士",publicSave:"保存",publicLogin:"登录",publicLogout:"登出",loadingDown:"上拉显示更多",loadingFresh:"正在加载...",loadingNomore:"没有更多数据了",accountUnlogin:"登录/注册",accountFuncWish:"心愿单",accountFuncHisgtory:"历史",accountAllOrder:"全部订单",accountOrderUnpaid:"未付款",accountOrderPreparing:"待发货",accountOrderShipped:"待收货",accountOrderReviews:"评价",accountOrderReturns:"退货列表",myInfoAvatar:"头像",myInfoName:"显示名称",myInfoBirthday:"生日",myInfoGender:"性别",settingMyInfo:"我的信息",settingAddress:"配送地址",settingLanguage:"语言",settingCurrency:"货币",settingCoumntry:"国家/地区",settingPhone:"手机号",settingEmail:"电子邮件",settingChangePwd:"更改密码",settingAboutUs:"关于我们",settingRateUs:"给我们评价"}},function(e,t,n){"use strict";e.exports={placeholderMail:"請輸入郵箱",placeholderPwd:"請輸入密碼"}},function(e,t,n){"use strict";e.exports={placeholderMail:"Enter your email address",placeholderPwd:"Password"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={install:function(e,t){e.prototype.staticVar={sign:"storage_sign",language:"storage_language"}}}},function(e,t,n){"use strict";(function(e){function n(t){var n="";try{var o=e.getStorageSync(Vue.prototype.staticVar.sign);o&&(n=o)}catch(e){console.log(e)}var a={sign:n,apiVersion:"1"};return t.apiVersion&&(a.apiVersion=t.apiVersion,delete t.apiVersion),{auth:a,request:t}}function o(t){t&&(0==t.type?e.showToast({duration:3e3,icon:"none",title:t.message}):1==t.type&&e.showModal({title:t.title,content:t.message,showCancel:t.buttons.length>1,cancelText:t.buttons.length>1?t.buttons[1].title:"",cancelColor:"#007AFF",confirmText:t.buttons.length>0?t.buttons[0].title:"确定",success:function(e){var n=t.buttons[0].action;e.confirm?console.log("用户点击确定"):e.cancel&&(console.log("用户点击取消"),n=t.buttons[1].action),Vue.prototype.router(n,function(){})}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default={install:function(t,a){t.prototype.post=function(t,a){return new Promise(function(u,i){e.request({url:function(e){return"http://www.okwrap.com:2018/8/"+e}(t),method:"POST",data:n(a),success:function(t){-2e3==t.data.code?(console.log("用户未登录，需要重新登录"),e.navigateTo({url:"../pages/login/login"})):-2001==t.data.code?console.log("需要强制升级app"):u(t),o(t.data.actionSheet)},fail:function(t){console.log(t),e.showToast({title:"网络繁忙，请稍后再试！！"})},complete:function(){}})})}}}}).call(t,n(1).default)},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n={"wb://login/login":"/pages/login/login","wb://cart/cart":"/pages/cart/cart","wb://account/setting":"/pages/setting/setting","wb://order/list":"/pages/order/order","wb://user/info":"/pages/account/my-info"};t.default={install:function(t,o){t.prototype.router=function(t,o){var a=function(e){var t=e.split("?"),o=n[t[0]];return"string"==typeof o&&o.length>0?t.length>0?o+"?"+t[1]:o:""}(t);a.length>0&&e.navigateTo({url:a,success:function(e){},fail:function(){},complete:function(){}})}}}}).call(t,n(1).default)}],[5]);
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
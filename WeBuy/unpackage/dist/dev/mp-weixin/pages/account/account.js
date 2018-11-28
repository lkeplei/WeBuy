require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([10],{54:function(t,e,i){"use strict";var a=n(i(2)),c=n(i(55));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(c.default))},55:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(57),c=i.n(a),n=i(58),s=!1;var o=function(t){s||i(56)},r=i(0)(c.a,n.a,o,"data-v-3bbfb63a",null);r.options.__file="Users/ac/Desktop/SourceTree/Ken/WeGou/WeBuy/WeBuy/pages/account/account.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] account.vue: functional components are not supported with templates, they should use render functions."),e.default=r.exports},56:function(t,e){},57:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{statusHeight:20,accountAllOrder:this.local("accountAllOrder"),accountName:this.local("accountUnlogin"),funcList:[{image:"/static/search.png",text:this.local("accountFuncWish"),action:"unpaid"},{image:"/static/search.png",text:this.local("accountFuncHisgtory"),action:"unpaid"}],orderStatusList:[{image:"/static/search.png",text:this.local("accountOrderUnpaid"),type:"unpaid"},{image:"/static/search.png",text:this.local("accountOrderPreparing"),type:"preparing"},{image:"/static/search.png",text:this.local("accountOrderShipped"),type:"shipped"},{image:"/static/search.png",text:this.local("accountOrderReviews"),type:"reviews"},{image:"/static/search.png",text:this.local("accountOrderReturns"),type:"returns"}],serviceList:[[{image:"/static/setting.png",text:this.local("accountOrderReviews"),action:"wb://"},{image:"/static/setting.png",text:this.local("accountOrderReviews"),action:"wb://"},{image:"/static/setting.png",text:this.local("accountOrderReviews"),action:"wb://"}],[{image:"/static/setting.png",text:this.local("accountOrderReviews"),action:"wb://"},{image:"/static/setting.png",text:this.local("accountOrderReviews"),action:"wb://"}]]}},onLoad:function(){var e=this;t.setNavigationBarTitle({title:this.local("navTitleAccount")}),this.statusHeight=t.getSystemInfoSync().statusBarHeight,this.post("user/info",{}).then(function(t){e.accountName=t.name})},onNavigationBarButtonTap:function(e){t.navigateTo({url:"./setting"})},computed:{headerHeight:function(){return this.statusHeight+204}},methods:{userClick:function(){var e=t.getStorageSync(this.staticVar.sign);"string"==typeof e&&e.length>0?t.navigateTo({url:"/pages/account/my-info?userName="+this.accountName}):t.navigateTo({url:"/pages/login/login"})},avatarClick:function(){t.showToast({title:"avatarClick"})},clickItem:function(t){this.router("wb://order/list?type="+t,function(){})},clickAction:function(t){this.router(t,function(){})}}}}).call(e,i(1).default)},58:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"page"},[i("view",{staticClass:"header",style:{height:t.headerHeight+"px"}},[i("view",{staticClass:"user",style:{"margin-top":t.statusHeight+44+"px"},attrs:{eventid:"xP2-1"},on:{click:t.userClick}},[i("image",{attrs:{src:"../../static/userDefault.png",eventid:"K82-0"},on:{click:function(e){e.stopPropagation(),t.avatarClick(e)}}}),i("text",[t._v(t._s(t.accountName))])]),i("view",{staticClass:"func"},t._l(t.funcList,function(e,a){return i("block",{key:a},[i("view",{attrs:{eventid:"tg6-2-"+a},on:{click:function(i){t.clickAction(e.action)}}},[i("image",{attrs:{src:e.image}}),i("text",[t._v(t._s(e.text))])])])}))]),i("view",{staticClass:"order"},[i("view",{staticClass:"uni-list-cell-navigate uni-navigate-right",attrs:{eventid:"m1E-3"},on:{click:function(e){t.clickItem("all")}}},[t._v(" "+t._s(t.accountAllOrder)+" ")]),i("view",{staticClass:"order-status"},t._l(t.orderStatusList,function(e,a){return i("block",{key:a},[i("view",{attrs:{eventid:"8st-4-"+a},on:{click:function(i){t.clickItem(e.type)}}},[i("image",{attrs:{src:e.image}}),i("text",[t._v(t._s(e.text))])])])}))]),i("view",{staticClass:"service"},t._l(t.serviceList,function(e,a){return i("block",{key:a},[i("view",{staticClass:"service-line"},t._l(e,function(e,c){return i("block",{key:c},[i("view",{attrs:{eventid:"YMW-5-"+a+"-"+c},on:{click:function(i){t.clickAction(e.action)}}},[i("image",{attrs:{src:e.image}}),i("text",[t._v(t._s(e.text))])])])}))])})),i("view",{staticStyle:{height:"1000upx"}})])};a._withStripped=!0;var c={render:a,staticRenderFns:[]};e.a=c}},[54]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/account/account.js.map
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{49:function(t,e,n){"use strict";var o=i(n(2)),a=i(n(50));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(a.default))},50:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(52),a=n.n(o),i=n(53),s=!1;var r=function(t){s||n(51)},c=n(0)(a.a,i.a,r,null,null);c.options.__file="Users/ac/Desktop/SourceTree/Ken/WeGou/WeBuy/WeBuy/pages/cart/cart.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] cart.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},51:function(t,e){},52:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var o,a=n(4),i=(o=a)&&o.__esModule?o:{default:o};e.default={components:{loadMore:i.default},data:function(){return{list:[{},{},{},{},{},{}],loadingType:0,contentText:{contentdown:this.local("loadingDown"),contentrefresh:this.local("loadingFresh"),contentnomore:this.local("loadingNomore")}}},onLoad:function(){t.request({url:"https://unidemo.dcloud.net.cn/api/news",method:"GET",data:{},success:function(t){console.log(t)},fail:function(){},complete:function(){}})},onPullDownRefresh:function(){t.showToast({title:"需要下拉刷新",complete:function(e){t.stopPullDownRefresh()}})},onReachBottom:function(){var t=this;if(0==this.loadingType){this.loadingType=1;for(var e=0;e<6;e++)this.list.push({});setTimeout(function(){t.list.length>=18?t.loadingType=2:t.loadingType=0},800)}},methods:{clickHeart:function(e){t.showToast({title:"点击了喜欢功能"})},goProDetail:function(e){t.navigateTo({url:"../product/pro-detail"})}}}}).call(e,n(1).default)},53:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"page"},[n("image",{attrs:{src:"../../static/cart/cartIcon.png",mode:""}}),n("text",[t._v("\n\t\tYou have a free gift to receive.\n\t")]),n("button",{attrs:{type:"primary"}},[t._v("\n\t\tGet Now\n\t")]),n("text",[t._v("\n\t\tYou May Also Like\n\t")]),n("view",{staticClass:"news-grid-9"},t._l(t.list,function(e,o){return n("view",{key:o,staticClass:"news-grid-9-item",attrs:{eventid:"0fU-1-"+o},on:{click:function(n){t.goProDetail(e)}}},[n("image",{staticClass:"news-grid-9-image",attrs:{src:"../../static/cart/cartGrid.jpg"}}),n("text",{staticClass:"news-grid-9-text"},[t._v("\n\t\t\t\t$ 16.99\n\t\t\t")]),n("view",{staticClass:"news-grid-heart",attrs:{eventid:"AFU-0-"+o},on:{click:function(n){n.stopPropagation(),t.clickHeart(e)}}},[n("image",{attrs:{src:"../../static/cart/cartDislike.png"}}),n("text",[t._v("840")])])])})),n("load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText,mpcomid:"7KP-0"}})],1)};o._withStripped=!0;var a={render:o,staticRenderFns:[]};e.a=a}},[49]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/cart/cart.js.map
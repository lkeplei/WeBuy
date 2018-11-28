require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{79:function(e,i,t){"use strict";var r=a(t(2)),l=a(t(80));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,r.default)(l.default))},80:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r=t(82),l=t.n(r),a=t(87),u=!1;var c=function(e){u||t(81)},s=t(0)(l.a,a.a,c,"data-v-024f0188",null);s.options.__file="Users/ac/Desktop/SourceTree/Ken/WeGou/WeBuy/WeBuy/pages/account/my-info.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] my-info.vue: functional components are not supported with templates, they should use render functions."),i.default=s.exports},81:function(e,i){},82:function(e,i,t){"use strict";(function(e){Object.defineProperty(i,"__esModule",{value:!0});var r,l=t(83),a=(r=l)&&r.__esModule?r:{default:r};i.default={components:{mpvuePicker:a.default},data:function(){return{userName:"test",avatar:this.local("myInfoAvatar"),name:this.local("myInfoName"),funcList:[{text:this.local("myInfoBirthday"),type:"birthday",value:"2018-01-01"},{text:this.local("myInfoGender"),type:"gender",value:"male"}],themeColor:"#007AFF",mode:"",deepLength:1,pickerValueDefault:[0],pickerValueArray:[],currentItem:{}}},onLoad:function(i){e.setNavigationBarTitle({title:this.local("navTitleMyInfo")}),this.userName=i.userName},methods:{uploadAvatar:function(){e.showToast({title:"upload avatar",icon:"none"})},changeName:function(){e.navigateTo({url:"/pages/account/change-name?userName="+this.userName})},clickFunc:function(e){if("birthday"===e.type){this.pickerValueArray=[];for(var i=1970;i<=2016;i++){for(var t={value:""+i,label:""+i,children:[]},r=1;r<=12;r++){var l={value:""+i+r,label:(r<10?"0":"")+r,children:[]},a=31;4==r||6==r||9==r||11==r?a=30:2==r&&(a=i%4==0?29:28);for(var u=1;u<=a;u++)l.children.push({value:""+i+r+u,label:(u<10?"0":"")+u});t.children.push(l)}this.pickerValueArray.push(t)}this.mode="multiLinkageSelector",this.deepLength=3,this.pickerValueDefault=[0,0,1],this.$refs.mpvuePicker.show()}else"gender"===e.type&&(this.pickerValueArray=[{label:this.local("publicMale"),value:"male"},{label:this.local("publicFemale"),value:"female"}],this.mode="selector",this.deepLength=1,this.pickerValueDefault=[0],this.$refs.mpvuePicker.show());this.currentItem=e},onConfirm:function(e){this.currentItem.value=e.label,"birthday"===this.currentItem.type?this.post("user/changeBirthday",{birthday:e.label}).then(function(e){console.log(e)}):"gender"===this.currentItem.type&&this.post("user/changeGender",{gender:e.value}).then(function(e){console.log(e)})}},onBackPress:function(){if(this.$refs.mpvuePicker.showPicker)return this.$refs.mpvuePicker.pickerCancel(),!0},onUnload:function(){this.$refs.mpvuePicker.showPicker&&this.$refs.mpvuePicker.pickerCancel()}}}).call(i,t(1).default)},83:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r=t(85),l=t.n(r),a=t(86),u=!1;var c=function(e){u||t(84)},s=t(0)(l.a,a.a,c,null,null);s.options.__file="Users/ac/Desktop/SourceTree/Ken/WeGou/WeBuy/WeBuy/components/mpvue-picker/mpvuePicker.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] mpvuePicker.vue: functional components are not supported with templates, they should use render functions."),i.default=s.exports},84:function(e,i){},85:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{pickerChangeValue:[],pickerValue:[],pickerValueArrayChange:!0,modeChange:!1,pickerValueSingleArray:[],pickerValueHour:[],pickerValueMinute:[],pickerValueMulArray:[],pickerValueMulTwoOne:[],pickerValueMulTwoTwo:[],pickerValueMulThreeOne:[],pickerValueMulThreeTwo:[],pickerValueMulThreeThree:[]}},props:{mode:{type:String,default:"selector"},showPicker:{type:Boolean,default:!1},pickerValueArray:{type:Array,default:[]},pickerValueDefault:{type:Array,default:[]},deepLength:{type:Number,default:2},themeColor:String},watch:{pickerValueArray:function(e,i){this.pickerValueArrayChange=!0},mode:function(e,i){this.modeChange=!0}},methods:{initPicker:function(e){var i=e;if(this.pickerValue=this.pickerValueDefault,"selector"===this.mode)this.pickerValueSingleArray=e;else if("timeSelector"===this.mode){this.modeChange=!1;for(var t=[],r=[],l=0;l<24;l++)t.push({value:l,label:l>9?l+" 时":"0"+l+" 时"});for(var a=0;a<60;a++)r.push({value:a,label:a>9?a+" 分":"0"+a+" 分"});this.pickerValueHour=t,this.pickerValueMinute=r}else if("multiSelector"===this.mode)this.pickerValueMulArray=e;else if("multiLinkageSelector"===this.mode&&2===this.deepLength){for(var u=[],c=[],s=0,n=i.length;s<n;s++)u.push(i[s]);if(2===this.pickerValueDefault.length)for(var o=this.pickerValueDefault[0],h=0,p=i[o].children.length;h<p;h++)c.push(i[o].children[h]);else for(var k=0,v=i[0].children.length;k<v;k++)c.push(i[0].children[k]);this.pickerValueMulTwoOne=u,this.pickerValueMulTwoTwo=c}else if("multiLinkageSelector"===this.mode&&3===this.deepLength){for(var d=[],m=[],f=[],V=0,g=i.length;V<g;V++)d.push(i[V]);if(this.pickerValueDefault=3===this.pickerValueDefault.length?this.pickerValueDefault:[0,0,0],3===this.pickerValueDefault.length){for(var _=this.pickerValueDefault[0],y=0,w=i[_].children.length;y<w;y++)m.push(i[_].children[y]);for(var b=this.pickerValueDefault[1],C=0,T=i[_].children[b].children.length;C<T;C++)f.push(i[_].children[b].children[C])}this.pickerValueMulThreeOne=d,this.pickerValueMulThreeTwo=m,this.pickerValueMulThreeThree=f}},show:function(){var e=this;setTimeout(function(){e.pickerValueArrayChange||e.modeChange?(e.initPicker(e.pickerValueArray),e.showPicker=!0,e.pickerValueArrayChange=!1,e.modeChange=!1):e.showPicker=!0},0)},maskClick:function(){this.pickerCancel()},pickerCancel:function(){this.showPicker=!1,this._initPickerVale();var e={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onCancel",e)},pickerConfirm:function(e){this.showPicker=!1,this._initPickerVale();var i={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onConfirm",i)},showPickerView:function(){this.showPicker=!0},pickerChange:function(e){this.pickerValue=e.mp.detail.value;var i={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onChange",i)},pickerChangeMul:function(e){if(2===this.deepLength){var i=this.pickerValueArray,t=e.mp.detail.value;if(t[0]!==this.pickerValue[0]){for(var r=[],l=0,a=i[t[0]].children.length;l<a;l++)r.push(i[t[0]].children[l]);this.pickerValueMulTwoTwo=r,t[1]=0}this.pickerValue=t}else if(3===this.deepLength){var u=this.pickerValueArray,c=e.mp.detail.value,s=[],n=[];if(c[0]!==this.pickerValue[0]){this.pickerValueMulThreeTwo=[];for(var o=0,h=u[c[0]].children.length;o<h;o++)s.push(u[c[0]].children[o]);for(var p=0,k=u[c[0]].children[0].children.length;p<k;p++)n.push(u[c[0]].children[0].children[p]);c[1]=0,c[2]=0,this.pickerValueMulThreeTwo=s,this.pickerValueMulThreeThree=n}else if(c[1]!==this.pickerValue[1]){this.pickerValueMulThreeThree=[],s=this.pickerValueMulThreeTwo;for(var v=0,d=u[c[0]].children[c[1]].children.length;v<d;v++)n.push(u[c[0]].children[c[1]].children[v]);c[2]=0,this.pickerValueMulThreeThree=n}this.pickerValue=c}var m={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onChange",m)},_getPickerLabelAndValue:function(e,i){var t=void 0,r=[];if("selector"===i)t=this.pickerValueSingleArray[e].label,r.push(this.pickerValueSingleArray[e].value);else if("timeSelector"===i)t=this.pickerValueHour[e[0]].label+"-"+this.pickerValueMinute[e[1]].label,r.push(this.pickerValueHour[e[0]].value),r.push(this.pickerValueHour[e[1]].value);else if("multiSelector"===i)for(var l=0;l<e.length;l++)l>0?t+=this.pickerValueMulArray[l][e[l]].label+(l===e.length-1?"":"-"):t=this.pickerValueMulArray[l][e[l]].label+"-",r.push(this.pickerValueMulArray[l][e[l]].value);else"multiLinkageSelector"===i&&(t=2===this.deepLength?this.pickerValueMulTwoOne[e[0]].label+"-"+this.pickerValueMulTwoTwo[e[1]].label:this.pickerValueMulThreeOne[e[0]].label+"-"+this.pickerValueMulThreeTwo[e[1]].label+"-"+this.pickerValueMulThreeThree[e[2]].label,2===this.deepLength?(r.push(this.pickerValueMulTwoOne[e[0]].value),r.push(this.pickerValueMulTwoTwo[e[1]].value)):(r.push(this.pickerValueMulThreeOne[e[0]].value),r.push(this.pickerValueMulThreeTwo[e[1]].value),r.push(this.pickerValueMulThreeThree[e[2]].value)));return{label:t,value:r}},_initPickerVale:function(){0===this.pickerValue.length&&("selector"===this.mode?this.pickerValue=[0]:"multiSelector"===this.mode?this.pickerValue=new Int8Array(this.pickerValueArray.length):"multiLinkageSelector"===this.mode&&2===this.deepLength?this.pickerValue=[0,0]:"multiLinkageSelector"===this.mode&&3===this.deepLength&&(this.pickerValue=[0,0,0]))}}}},86:function(e,i,t){"use strict";var r=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"mpvue-picker"},[t("div",{class:{pickerMask:e.showPicker},attrs:{catchtouchmove:"true",eventid:"WtT-0"},on:{click:e.maskClick}}),t("div",{staticClass:"mpvue-picker-content ",class:{"mpvue-picker-view-show":e.showPicker}},[t("div",{staticClass:"mpvue-picker__hd",attrs:{catchtouchmove:"true"}},[t("div",{staticClass:"mpvue-picker__action",attrs:{eventid:"Fuh-1"},on:{click:e.pickerCancel}},[e._v("取消")]),t("div",{staticClass:"mpvue-picker__action",style:{color:e.themeColor},attrs:{eventid:"QXG-2"},on:{click:e.pickerConfirm}},[e._v("确定")])]),"selector"===e.mode&&e.pickerValueSingleArray.length>0?t("picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue,eventid:"Q3z-3"},on:{change:e.pickerChange}},[t("block",[t("picker-view-column",{attrs:{mpcomid:"MC6-0"}},e._l(e.pickerValueSingleArray,function(i,r){return t("div",{key:r,staticClass:"picker-item"},[e._v(e._s(i.label))])}))],1)],1):e._e(),"timeSelector"===e.mode?t("picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue,eventid:"Ub8-4"},on:{change:e.pickerChange}},[t("block",[t("picker-view-column",{attrs:{mpcomid:"Tot-1"}},e._l(e.pickerValueHour,function(i,r){return t("div",{key:r,staticClass:"picker-item"},[e._v(e._s(i.label))])})),t("picker-view-column",{attrs:{mpcomid:"mWM-2"}},e._l(e.pickerValueMinute,function(i,r){return t("div",{key:r,staticClass:"picker-item"},[e._v(e._s(i.label))])}))],1)],1):e._e(),"multiSelector"===e.mode?t("picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue,eventid:"pz4-5"},on:{change:e.pickerChange}},e._l(e.pickerValueMulArray.length,function(i,r){return t("block",{key:r},[t("picker-view-column",{attrs:{mpcomid:"NgC-3-"+r}},e._l(e.pickerValueMulArray[i],function(i,r){return t("div",{key:r,staticClass:"picker-item"},[e._v(e._s(i.label))])}))],1)})):e._e(),"multiLinkageSelector"===e.mode&&2===e.deepLength?t("picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue,eventid:"XSv-6"},on:{change:e.pickerChangeMul}},[t("block",[t("picker-view-column",{attrs:{mpcomid:"zNW-4"}},e._l(e.pickerValueMulTwoOne,function(i,r){return t("div",{key:r,staticClass:"picker-item"},[e._v(e._s(i.label))])})),t("picker-view-column",{attrs:{mpcomid:"FSP-5"}},e._l(e.pickerValueMulTwoTwo,function(i,r){return t("div",{key:r,staticClass:"picker-item"},[e._v(e._s(i.label))])}))],1)],1):e._e(),"multiLinkageSelector"===e.mode&&3===e.deepLength?t("picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue,eventid:"GFT-7"},on:{change:e.pickerChangeMul}},[t("block",[t("picker-view-column",{attrs:{mpcomid:"a2k-6"}},e._l(e.pickerValueMulThreeOne,function(i,r){return t("div",{key:r,staticClass:"picker-item"},[e._v(e._s(i.label))])})),t("picker-view-column",{attrs:{mpcomid:"7Uc-7"}},e._l(e.pickerValueMulThreeTwo,function(i,r){return t("div",{key:r,staticClass:"picker-item"},[e._v(e._s(i.label))])})),t("picker-view-column",{attrs:{mpcomid:"ncr-8"}},e._l(e.pickerValueMulThreeThree,function(i,r){return t("div",{key:r,staticClass:"picker-item"},[e._v(e._s(i.label))])}))],1)],1):e._e()],1)])};r._withStripped=!0;var l={render:r,staticRenderFns:[]};i.a=l},87:function(e,i,t){"use strict";var r=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("view",{staticClass:"page"},[t("view",{staticClass:"user-cell",attrs:{"hover-class":"user-cell-hover",eventid:"3n8-0"},on:{click:e.uploadAvatar}},[t("view",{staticClass:"uni-list-cell-navigate uni-navigate-right user-avatar"},[e._v("\n\t\t\t"+e._s(e.avatar)+"\n\t\t\t"),t("image",{attrs:{src:"../../static/userDefault.png"}})])]),t("view",{staticClass:"user-cell",attrs:{"hover-class":"user-cell-hover",eventid:"VcD-1"},on:{click:e.changeName}},[t("view",{staticClass:"uni-list-cell-navigate uni-navigate-right user-right"},[e._v("\n\t\t\t"+e._s(e.name)+"\n\t\t\t"),t("text",[e._v(e._s(e.userName))])])]),t("view",{staticClass:"func"},e._l(e.funcList,function(i,r){return t("block",{key:r},[t("view",{staticClass:"user-cell",attrs:{"hover-class":"user-cell-hover",eventid:"vvZ-2-"+r},on:{click:function(t){e.clickFunc(i)}}},[t("view",{staticClass:"uni-list-cell-navigate uni-navigate-right user-right"},[e._v("\n\t\t\t\t\t"+e._s(i.text)+"\n\t\t\t\t\t"),t("text",[e._v(e._s(i.value))])])])])})),t("mpvue-picker",{ref:"mpvuePicker",attrs:{themeColor:e.themeColor,mode:e.mode,deepLength:e.deepLength,pickerValueArray:e.pickerValueArray,pickerValueDefault:e.pickerValueDefault,eventid:"xrY-3",mpcomid:"PMJ-0"},on:{onConfirm:e.onConfirm}})],1)};r._withStripped=!0;var l={render:r,staticRenderFns:[]};i.a=l}},[79]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/account/my-info.js.map
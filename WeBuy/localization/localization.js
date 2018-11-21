var simpChinese = require("./simp-chinese.js");
var tradiChinese = require("./tradi-chinese.js");
var english = require("./english.js");

export default {
	install(Vue,options) {
		Vue.prototype.local = function (key) {
			var value = "";

			switch (uni.getStorageSync(Vue.prototype.staticVar.language)){
				case 'english':
					value = english[key];
					break;
				case 'simpChinese':
					value = simpChinese[key];
					break;
				case 'tradiChinese':
					value = tradiChinese[key];
					break;				
				default:
					value = english[key];
					break;
			}
			
			if (typeof value == 'string' && value.length > 0) {
				return value;
			} else {
				return "";
			}
		}
	}
}
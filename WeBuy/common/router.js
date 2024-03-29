var routerMap = {
	"wb://web/loadUrl": "/pages/webview/webview",
	"wb://login/login": "/pages/login/login",
	"wb://cart/cart": "/pages/cart/cart",
	"wb://account/setting": "/pages/setting/setting",
	"wb://order/list": "/pages/order/order",
	"wb://user/info": "/pages/account/my-info",
	"wb://setting/about-us": "/pages/setting/about-us",
	"wb://address/address": "/pages/address/address",
	"wb://setting/change-pwd": "/pages/setting/change-pwd",
	"wb://setting/country": "/pages/setting/country",
	"wb://setting/currency": "/pages/setting/currency",
	"wb://setting/email": "/pages/setting/email",
	"wb://setting/language": "/pages/setting/language",
	"wb://bind/phone": "/pages/bind/phone",
	"wb://setting/about": "/pages/setting/about",
	"wb://setting/terms": "/pages/setting/terms",
	"wb://setting/privacy-policy": "/pages/setting/privacy-policy",
	"wb://account/history": "/pages/account/history",
	"wb://account/wish": "/pages/account/wish-list",
	"wb://product/detail": "/pages/product/pro-detail",
	"wb://order/appraise": "/pages/order/appraise",
	"wb://product/buyyer-reading": "/pages/product/buyyer-reading"
};

export default {
	install(Vue,options) {
		Vue.prototype.router = function (url, callback) {
			var dispatch = getDispatchUrl(url);
			
			if (dispatch.length > 0) {
				uni.navigateTo({
					url: dispatch,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
}

function getDispatchUrl(url) {
	var array = url.split("?");
	var path = routerMap[array[0]];
	
	if (typeof path == 'string' && path.length > 0) {
		if (array.length > 0) {
			return path + '?' + array[1];
		}
		return path;
	} else {
		return '';
	}
	return routerMap[url.split("?")[0]];
}

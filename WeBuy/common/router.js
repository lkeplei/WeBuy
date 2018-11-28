var routerMap = {
	"wb://login/login": "/pages/login/login",
	"wb://cart/cart": "/pages/cart/cart",
	"wb://account/setting": "/pages/setting/setting",
	"wb://order/list": "/pages/order/order",
	"wb://user/info": "/pages/account/my-info"
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

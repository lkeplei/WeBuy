export default {
	install(Vue,options) {
		Vue.prototype.router = function (url, callback) {
			//这里要公共处理一下路由的跳转
			uni.showToast({
				title: url,
				icon: 'none'
			});
		}
	}
}
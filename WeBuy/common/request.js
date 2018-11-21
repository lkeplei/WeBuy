export default {
	install(Vue,options) {
		Vue.prototype.post = function (path, params) {
			return new Promise((resolve, reject) => {
				uni.request({
					url: getUrl(path),
					method: 'POST',
					data: getParams(params),
					success: res => {
						if (res.data.code == -2000) {
							//用户未登录或者session过期
							console.log('用户未登录，需要重新登录');
							
							uni.navigateTo({
								url: '../pages/login/login'
							})
						} else if (res.data.code == -2001) {
							//接口强制升级
							console.log('需要强制升级app');
						} else {
							resolve(res);
						}
						
						//公共处理 actionsheet
						dealwithActionsheet(res.data.actionSheet);
					},
					fail: (e) => {
						console.log(e);
						// reject(e);
						
						uni.showToast({
							title: "网络繁忙，请稍后再试！！"
						})
					},
					complete: () => {}
				});	
			});
		}
	}
}

function getUrl(path) {
	return "http://www.okwrap.com:2018/8/" + path;
}

function getParams(params) {
	var sign = ''; 
	try {
		const value = uni.getStorageSync(Vue.prototype.staticVar.sign);
		if (value) {
			sign = value;
		}
	} catch (e) {
		console.log(e);
	}

	var auth = {
		sign: sign,
		apiVersion: '1'
	}
	
	if (params.apiVersion) {
		auth.apiVersion = params.apiVersion;
		delete(params['apiVersion']);
	}
	return {auth: auth, request: params};
}

function dealwithActionsheet (actionsheet) {
	if (actionsheet) {
		if (actionsheet.type == 0) {
			uni.showToast({
				duration: 3000,
				icon: 'none',
				title: actionsheet.message
			});
		} else if (actionsheet.type == 1) {
			uni.showModal({
				title: actionsheet.title,
				content: actionsheet.message,
				showCancel: actionsheet.buttons.length > 1 ? true : false,
				cancelText: actionsheet.buttons.length > 1 ? actionsheet.buttons[1].title : '',
				cancelColor: '#007AFF',
				confirmText: actionsheet.buttons.length > 0 ? actionsheet.buttons[0].title : '确定',
 				success: function (res) {
					var url = actionsheet.buttons[0].action;
					
					if (res.confirm) {
						console.log('用户点击确定');
					} else if (res.cancel) {
						console.log('用户点击取消');
						url = actionsheet.buttons[1].action;
					}
					
					Vue.prototype.router(url, () => {
						
					})
				}
			});	
		}
	}
}
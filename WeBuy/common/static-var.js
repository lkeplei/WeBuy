export default {
	install(Vue,options) {
		Vue.prototype.staticVar = {
			// storage key
			sign: 'storage_sign',				//用户签名
			language: 'storage_language',		//当前语言
		}
	}
}
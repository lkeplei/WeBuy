<template>
	<view class="page">
		<view class="input-view">
			<input type="text" focus="true" v-model="userMail" :placeholder="placeholderMail"/>
			<input :placeholder="placeholderPwd" v-model="userPwd" :password="showPassword" />
		</view>
		
		<button type="primary" @tap="login">{{loginText}}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showPassword: true,
				userMail: '',
				userPwd: '',
				loginText: this.local('publicLogin'),
				placeholderMail: this.local('placeholderMail'),
				placeholderPwd: this.local('placeholderPwd')
			};
		},
		onLoad() {
			// 设置导航栏标题
			uni.setNavigationBarTitle({
				title: this.local('navTitleLogin')
			});
		},
		methods: {
			changePassword: function () {
				this.showPassword = !this.showPassword;
			},
			login: function () {
				this.post('user/login', {loginName: this.userMail, password: this.$md5(this.userPwd)}).then(res => {
					// 缓存用户签名等信息
					uni.setStorageSync(this.staticVar.sign, res.data.sign);
					
					// 逻辑跳转
					if (res.data.chooseLan) {
						uni.redirectTo({
							url: '/pages/setting/language'
						});
					} else {
						uni.navigateBack({
							delta: 1
						});
					}
				});
			}
		}
	}
</script>

<style scoped>
	input {
		margin: 30upx;
		border: 1px solid;
		border-color: #eee;
		height: 36px;
		line-height: 30px;
		border-radius: 4px;
		padding: 0 10px;
	}
	
	button {
		margin: 30upx;
		border: none;
	}
</style>

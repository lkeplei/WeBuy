<template>
	<view class="page">
		<view class="input-view">
			<input type="text" focus="true" v-model="userMail" :placeholder="placeholderMail"/>
			<view class="password">
				<input :placeholder="placeholderPwd" v-model="userPwd" :password="showPassword" />
				<wb-icon size="20" :type="'uni-icon-eye'" :class="[!showPassword ? 'uni-active' : '']" @click="changePassword"></wb-icon>
			</view>
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
		methods: {
			changePassword: function () {
				this.showPassword = !this.showPassword;
			},
			login: function () {
				this.post('user/emailLogin', {email: this.userMail, pwd: this.userPwd}).then(res => {
					// 缓存用户签名等信息
					// uni.setStorageSync(this.staticVar.sign, res.sign);
				});
				
				// 临时写一个用户签名
				uni.setStorageSync(this.staticVar.sign, this.userMail + this.userPwd);
			}
		}
	}
</script>

<style scoped>
	.password {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.input-view {
		
	}
	
	input {
		margin: 30upx;
		border: 1px solid;
		border-color: #eee;
		height: 36px;
		line-height: 36px;
		border-radius: 4px;
		padding: 0 10px;
	}
	
	button {
		margin: 30upx;
		border: none;
	}
</style>

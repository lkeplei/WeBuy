<template>
	<view class="page">
		<text style="font-size: 40upx;">邮箱密码登录</text>
		
		<view >
			<input :placeholder="placeholderMail" focus/>
			<view>
				<input class="uni-input" :placeholder="placeholderPwd" :password="showPassword" />
				<view class="uni-icon uni-icon-eye" :class="[!showPassword ? 'uni-active' : '']" @click="changePassword"></view>
			</view>
		</view>
		
		<button type="primary" :size="primarySize" :loading="loading" :plain="plain" :disabled="disabled" @tap="primaryHandler">  </button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showPassword: true,
				placeholderMail: this.local('placeholderMail'),
				placeholderPwd: this.local('placeholderPwd')
			};
		},
		methods: {
			changePassword: function () {
				this.showPassword = !this.showPassword;
			}
		}
	}
</script>

<style scoped>
	@import "../../common/icon.css";
	.page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
</style>

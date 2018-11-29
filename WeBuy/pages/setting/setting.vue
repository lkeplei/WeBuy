<template>
	<view class="page">
		<block v-for="(list, index) in funcList" :key="index">
			<view style="height: 10px;">
				
			</view>
			<block v-for="(item, indexKey) in list" :key="indexKey">
				<view class="wb-cell" hover-class="wb-cell-hover" @click="clickFunc(item)">
					<view class="wb-list-cell-navigate wb-navigate-right wb-right">
						{{item.text}}
						<text>{{item.value}}</text>
					</view>
				</view>
			</block>
		</block>
		
		<button type="primary" plain="true" @tap="logout">{{logoutText}}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logoutText: this.local('publicLogout'),
				funcList: [
					[
						{text: this.local('settingMyInfo'), action: 'wb://user/info', value: ''},
						{text: this.local('settingAddress'), action: 'wb://setting/address', value: ''}
					],
					[
						{text: this.local('settingLanguage'), action: 'wb://setting/language', value: '1998-01-07'},
						{text: this.local('settingCurrency'), action: 'wb://setting/currency', value: ''},
						{text: this.local('settingCountry'), action: 'wb://setting/country', value: ''}
					],
					[
						{text: this.local('settingPhone'), action: 'wb://setting/phone', value: ''},
						{text: this.local('settingEmail'), action: 'wb://setting/email', value: ''},
						{text: this.local('settingChangePwd'), action: 'wb://setting/change-pwd', value: ''}
					],
					[
						{text: this.local('settingAboutUs'), action: 'wb://setting/about-us', value: ''},
						{text: this.local('settingRateUs'), action: 'rateUs', value: ''}
					]
				]
			};
		},
		onLoad() {
			// 设置导航栏标题
			uni.setNavigationBarTitle({
				title: this.local('navTitleSetting')
			});
		},
		methods: {
			clickFunc: function (item) {
				if (item.action === 'rateUs') {
					uni.showToast({
						title: 'please rate us'
					});
				} else {
					this.router(item.action, () => {});	
				}
			},
			logout: function () {
				this.post('user/logout', {email: this.userMail, pwd: this.userPwd}).then(res => {
					// 清除用户签名等信息
					uni.removeStorageSync(this.staticVar.sign);
				});
			}
		}
	}
</script>

<style>
	
	button {
		width: 750upx;
		border-radius: 0;
	}

</style>

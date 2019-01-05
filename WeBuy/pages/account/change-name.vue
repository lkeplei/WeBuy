<template>
	<view>
		<input type="text" focus="true" @input="bindKeyInput" :value="userName" :placeholder="placeholderName"/>
		<button type="primary" :disabled="inputDisabled" @tap="saveUserName">{{saveText}}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				saveText: this.local('publicSave'),
				userName: '',
				inputDisabled: true,
				placeholderName: this.local('placeholderUserName')
			};
		},
		onLoad(prop) {
			// 设置导航栏标题
			uni.setNavigationBarTitle({
				title: this.local('navTitleChangeName')
			});
			
			this.userName = prop.userName;
		},
		methods: {
			saveUserName: function () {
				this.post('user/changeName', {name: this.userName}).then(res => {
					if (res.code == 200) {
						uni.navigateBack({
							delta: 1
						});
					}
				});
			},
			bindKeyInput: function (e) {
				this.userName = e.target.value;
				this.inputDisabled = false;
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
		line-height: 36px;
		border-radius: 4px;
		padding: 0 10px;
	}
	
	button {
		margin: 30upx;
		border: none;
	}
	
</style>

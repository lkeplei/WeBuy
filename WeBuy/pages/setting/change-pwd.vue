<template>
	<view class="page">
		<wb-back-nav></wb-back-nav>
		
		<view class="container">
			<text class="title">{{changePwdText}}</text>
			
			<view class="input-v">
				<input type="text" v-model="oldPwd" :placeholder="changePwdOldPwd"/>
				<input :class="{'remind-input': showNewRemind}" type="text" @blur="blurNew" v-model="newPwd" :placeholder="changePwdNewPwd"/>
				<text v-show="showNewRemind">{{newRemind}}</text>
				<input :class="{'remind-input': showConfirmRemind}" type="text" @blur="blurConfirm" v-model="confirmPwd" :placeholder="changePwdConfirmPwd"/>
				<text v-show="showConfirmRemind">{{confirmRemind}}</text>
			</view>
			
			<wb-button :text="confirmText" @btnTap="confirm"></wb-button>
		</view>
	</view>
</template>

<script>
	import wbNav from '../../components/wb-back-nav.vue'
	import wbButton from '../../components/wb-button.vue'
	
	export default {
		components: {
			'wb-back-nav': wbNav,
			'wb-button': wbButton
		},
		data() {
			return {
				changePwdText: this.local('changePwdText'),
				changePwdNewPwd: this.local('changePwdNewPwd'),
				changePwdOldPwd: this.local('changePwdOldPwd'),
				changePwdConfirmPwd: this.local('changePwdConfirmPwd'),
				confirmText: this.local('publicConfirm'),
				newRemind: this.local('changePwdNewRemind'),
				confirmRemind: this.local('changePwdConfirmRemind'),
				
				oldPwd: '',
				newPwd: '',
				confirmPwd: '',
				showNewRemind: false,
				showConfirmRemind: false
			};
		},
		methods: {
			back: function () {
				uni.navigateBack({
					delta: 1
				});
			},
			blurNew: function (e) {
				if (this.newPwd.length < 6 || this.newPwd.length > 20) {
					this.showNewRemind = true;
				} else {
					this.showNewRemind = false;	
				}
			},
			blurConfirm: function(e) {
				if (this.newPwd === this.confirmPwd) {
					this.showConfirmRemind = false;	
				} else {
					this.showConfirmRemind = true;
				}
			},
			confirm: function () {
				let canConfirm = true;
				// 密码需要通过一定的正则验证
				if (this.newPwd.length < 6 || this.newPwd.length > 20) {
					this.showNewRemind = true;
					canConfirm = false;
				} else {
					this.showNewRemind = false;	
				}
				
				// 新密码必须确认过
				if (this.newPwd === this.confirmPwd) {
					this.showConfirmRemind = false;	
				} else {
					this.showConfirmRemind = true;
					canConfirm = false;
				}
				
				if (canConfirm) {
					this.post('user/changePwd', {oldPwd: this.oldPwd, newPwd: this.newPwd}).then(res => {});	
				}
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
	}
	
	.title {
		padding: 20upx 40upx 0 40upx;
		font-size: 40upx;
	}
	
	.input-v {
		display: flex;
		flex-direction: column;
	}
	
	.input-v input {
		height: 60upx;
		margin: 10upx 40upx;
		background-color: #F8F8F8;
	}
	
	.remind-input {
		border: 2upx solid #DC143C;
	}
	
	.input-v text {
		font-size: 24upx;
		color: #DC143C;
		height: 30upx;
		padding: 0upx 40upx;
	}
</style>

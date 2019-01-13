<template>
	<view class="page">
		<wb-back-nav></wb-back-nav>
		
		<view class="container">
			<text style="font-size: 40upx;">{{emailText}}</text>
			<text style="font-size: 24upx;">{{emailRemind}}</text>
			
			<input :class="{'remind-input': showRemind}" type="text" v-model="newEmail" :placeholder="placeholderMail"/>
			<text v-show="showRemind">{{remind}}</text>
			
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
				emailText: this.local('emailText'),
				emailRemind: this.local('emailRemind'),
				confirmText: this.local('publicConfirm'),
				placeholderMail: this.local('placeholderMail'),
				
				newEmail: '',
				remind: '',
				showRemind: false
			};
		},
		methods: {
			back: function () {
				uni.navigateBack({
					delta: 1
				});
			},
			confirm: function () {
				this.post('user/changeEmail', {email: this.newEmail}).then(res => {
					if (res.data.success) {
						uni.showToast({
							title: this.local('emailSuccess'),
							complete() {
								uni.navigateBack({delta: 1});		
							}
						});
					} else {
						this.showRemind = res.data.showRemind;
						this.remind = res.data.remind;	
					}
				});
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
	}
	
	.container text {
		padding: 20upx 40upx 0 40upx;
	}
	
	input {
		height: 60upx;
		margin: 40upx 40upx;
		background-color: #F8F8F8;
	}
	
	.remind-input {
		border: 2upx solid #DC143C;
	}
</style>

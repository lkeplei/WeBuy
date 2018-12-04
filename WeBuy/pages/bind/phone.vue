<template>
	<view class="page">
		<wb-back-nav></wb-back-nav>
		
		<view class="container">
			<text style="font-size: 40upx;">{{bindText}}</text>
			<text>{{bindRemind}}</text>
			
			<view class="line">
				<text>Region</text>
				<text>China(P.R.C)</text>
			</view>
			
			<view class="line phone">
				<text>+86</text>
				<input type="text" v-model="userPhone" :placeholder="placeholderPhone"/>
			</view>
			
			<wb-button :text="nextText" @btnTap="next"></wb-button>
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
				bindText: this.local('bindPhoneText'),
				bindRemind: this.local('bindPhoneRemind'),
				nextText: this.local('publicNextStep'),
				placeholderPhone: this.local('placeholderPhone'),
				
				userPhone: ''
			};
		},
		methods: {
			back: function () {
				uni.navigateBack({
					delta: 1
				});
			},
			next: function () {
				this.post('sms/verCode', {}).then(res => {});
				
				uni.navigateTo({
					url: './confirm-sms?phone=13738465341'
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
	
	.line {
		display: flex;
		flex-direction: row;
		margin-top: 20upx;
		margin: 20upx 30upx 20upx 30upx;
	}
	
	.line .phone {
		height: 40px;
		align-items: center;
		background-color: #D9D9D9;
		border-radius: 6px;
	}
</style>

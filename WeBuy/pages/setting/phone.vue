<template>
	<view class="page">
		<image class="nav-back" src="../../static/back.png" @tap="back"></image>
		
		<view class="container">
			<text style="font-size: 40upx;">{{bindText}}</text>
			<text>{{bindRemind}}</text>
			
			<button type="primary" @tap="next">{{nextText}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bindText: this.local('bindPhoneText'),
				bindRemind: this.local('bindPhoneRemind'),
				nextText: this.local('publicNextStep')
			};
		},
		methods: {
			back: function () {
				uni.navigateBack({
					delta: 1
				});
			},
			next: function () {
				uni.navigateTo({
					url: ''
				})
			}
		}
	}
</script>

<style scoped>
	.nav-back {
		padding: 10px 5px;
		width: 24px;
		height: 24px;
	}
	
	.container {
		display: flex;
		flex-direction: column;
	}
	
	.container text {
		padding: 20upx 40upx 0 40upx;
	}
</style>

<template>
	<view class="page">
		<view class="container" :style="{'margin-top': statusHeight + 'px'}">
			<image class="nav-back" src="../../static/back.png" @tap="back"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "wb-back-nav",
		data() {
			return {
				statusHeight: 20
			};
		},
		onLoad() {
			this.statusHeight = uni.getSystemInfoSync().statusBarHeight;
		},
		methods: {
			back: function () {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: row;
		height: 44px;
		width: 750upx;
	}
	
	.nav-back {
		padding: 10px 5px;
		width: 24px;
		height: 24px;
	}
</style>

<template>
	<view>
		<wb-nav ref="nav" :leftBtn="leftBtn" :rightBtn="rightBtn" @rightBtnClick="cancel">
			<view class="input-view">
				<image src="../../static/search.png"></image>
				<input focus="true" confirm-type="search" class="input" type="text" placeholder="输入搜索关键词" />
			</view>
		</wb-nav>
		
		<!-- 用了自定义导航栏，需要占位 -->
		<view :style="{'height': navHeight + 'px'}"></view>
		
		<view class="container">
			content
		</view>
	</view>
</template>

<script>
	import wbNav from '../../components/wb-nav.vue'
	
	export default {
		components: {
			'wb-nav': wbNav
		},
		data() {
			return {
				navHeight: 64,
				leftBtn: {},
				rightBtn: {text: this.local('publicCancel')}
				
			};
		},
		onReady() {
			this.navHeight = this.$refs.nav.navHeight();
		},
		methods: {
			cancel: function () {
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
		flex-direction: column;
	}
	
	.input-view {
		width: 500upx;
		display: flex;
		flex-direction: row;
		height: 28px;
		border-radius: 14px;
		padding: 0 10px;
		border: 2upx solid;
		border-color: #eee;
		margin-top: 8px;
	}
	
	.input-view image {
		width: 24px;
		height: 24px;
		margin-top: 3px;
	}
	
	.input {
		height: 28px;
		padding: 0 5px;
	}
</style>

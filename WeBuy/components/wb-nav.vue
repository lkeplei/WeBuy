<template>
	<view class="page">
		<view class="container" :style="{'margin-top': statusHeight + 'px'}">
			<!-- 左边按钮 -->
			<view class="menu-btn" @tap="back">
				<text v-if="leftBtn.text">{{leftBtn.text}}</text>
				<image v-else :src="leftBtn.image"></image>
			</view>
			
			<text class="title">{{title}}</text>
			
			<!-- 右边按钮 -->
			<view class="menu-btn" @tap="rightBtnClick">
				<text v-if="btnRight.text">{{btnRight.text}}</text>
				<image v-else :src="btnRight.image"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "wb-nav",
		props: {
			title: { type: String, default: '' },
			rightBtn: { type: Object, default: {}},
			leftBtn: { type: Object, default: {image: '../../static/back.png'}}
		},
		data() {
			return {
				statusHeight: 20,
				btnRight: {}
			};
		},
		onLoad() {
			this.statusHeight = uni.getSystemInfoSync().statusBarHeight;
			this.btnRight = this.rightBtn;
		},
		methods: {
			back: function () {
				uni.navigateBack({
					delta: 1
				});
			},
			rightBtnClick: function () {
				this.$emit('rightBtnClick', 0);
			},
			resetRightBtn: function (btn) {
				this.btnRight = btn;
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 44px;
		width: 750upx;
	}
	
	.title {
		
	}
	
	.menu-btn {
		padding: 10px 5px;
	}
	
	.menu-btn image {
		width: 24px;
		height: 24px;
	}
</style>

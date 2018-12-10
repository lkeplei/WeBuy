<template>
	<view class="wb-nav fixed">
		<view class="status-bar" :style="{'height': statusHeight + 'px'}"></view>
		
		<view class="container">
			<!-- 左边按钮 -->
			<view class="left">
				<view class="menu-btn" @tap="back">
					<text v-if="leftBtn.text">{{leftBtn.text}}</text>
					<image v-else :src="leftBtn.image"></image>
				</view>
				<!-- 左边插槽 -->
				<slot name="left"></slot>
			</view>
			
			<view class="center">
				<view v-if="title.length" class="title">{{title}}</view>
				<!-- 标题插槽 -->
				<slot></slot>
			</view>
			
			<!-- 右边按钮 -->
			<view class="right">
				<view class="menu-btn" @tap="rightBtnClick">
					<text v-if="btnRight.text">{{btnRight.text}}</text>
					<image v-else :src="btnRight.image"></image>
				</view>
				<!-- 右边插槽 -->
				<slot name="right"></slot>
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
			},
			navHeight: function () {
				return this.statusHeight + 44;
			}
		}
	}
</script>

<style scoped>
	.wb-nav {
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
	}
	
	.status-bar {
		
	}
	
	.container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 44px;
		width: 750upx;
	}
	
	.fixed {
		position: fixed;
		z-index: 998;
		border-bottom: #EEEEEE 1upx solid;
	}
	
	.left {
		display: flex;
		flex-direction: row;
	}
	
	.center {
		display: flex;
		flex-direction: row;
	}
	
	.title {
		
	}
	
	.right {
		display: flex;
		flex-direction: row;
	}
	
	.menu-btn {
		padding: 10px 5px;
	}
	
	.menu-btn image {
		width: 24px;
		height: 24px;
	}
</style>

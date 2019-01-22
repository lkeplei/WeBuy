<template>
	<view>
		<view class="wb-mask" v-show="showPop" :style="{top:offsetTop + 'px'}" @click="hide"></view>
		<view :class="['wb-popup','wb-popup-'+type]" v-show="showPop">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'wb-popup',
		props: {
			type: {
				type: String,
				//top - 顶部， middle - 居中, bottom - 底部
				default: 'middle'
			}
		},
		data() {
			let offsetTop = 0;
			//#ifdef H5
			offsetTop = 44;
			//#endif
			return {
				offsetTop: offsetTop,
				showPop: false,
				
				animation: uni.createAnimation({
					duration: 500,
					timingFunction: 'ease',
				})
			}
		},
		methods: {
			hide: function() {
				this.$emit('hidePopup');
				
				this.showPop = false;
			},
			show: function() {
				this.showPop = true;
			}
		}
	}
</script>
<style>
	.wb-mask {
		position: fixed;
		z-index: 998;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .3);
	}

	.wb-popup {
		position: absolute;
		z-index: 999;
		background-color: #ffffff;
		box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
	}

	.wb-popup-middle {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 380upx;
		height: 380upx;
		border-radius: 10upx;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		justify-content: center;
		padding: 30upx;
	}

	.wb-popup-top {
		top: 0;
		left: 0;
		width: 100%;
	}

	.wb-popup-bottom {
		left: 0;
		bottom: 0;
		width: 100%;
	}
</style>

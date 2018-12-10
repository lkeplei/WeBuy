<template>
	<view class="container" hover-class="wb-button-hover" @tap="buttonTap">
		<text>{{text}}</text>
	</view>
</template>

<script>
	export default {
		name: "wb-button",
		props: {
			text: { type: String, default: '' }
		},
		data() {
			return {
				
			};
		},
		methods: {
			buttonTap: function () {
				this.$emit('btnTap');
			}
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		
		margin: 40upx;
		height: 44px;
		width: 660upx;
		background-color: #007AFF;
	}
	
	.wb-button-hover {
		background-color: #4CD964;
	}
</style>

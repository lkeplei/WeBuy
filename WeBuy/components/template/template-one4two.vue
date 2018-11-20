<template>
	<view class="container-two">
		<image class="main-two" :src="template.main.image" @click="clickItem(template.main.action)"></image>
		<view class="items-two">
			<image :src="template.top.image" @click="clickItem(template.top.action)"></image>
			<image :src="template.bottom.image" @click="clickItem(template.bottom.action)"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tem-one4two",
		props: {
			template: { 
				type: Object,
				required: true 
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			clickItem(url) {
				this.router(url, () => {
					
				})
			}
		}
	}
</script>

<style>
	.container-two {
		display: flex;
		flex-direction: row;
		height: 400upx;
		width: 750upx;
	}
	
	.main-two {
		width: 375upx;
		height: 400upx;
	}
	
	.items-two {
		display: flex;
		flex-direction: column;
		width: 375upx;
		height: 400upx;
	}
	
	.items-two image {
		width: 375upx;
		height: 200upx;
	}
</style>

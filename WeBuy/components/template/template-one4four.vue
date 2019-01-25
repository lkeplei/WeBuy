<template>
	<view class="container-four">
		<view class="header-four">
			<image :src="template.headerImg"/>
			<text>{{template.title}}</text>
		</view>
		
		<view class="content-four">
			<image class="main-four" :src="template.main.image" @click="clickItem(template.main.action)"></image>

			<block v-for="(item, index) in template.items" :key="index">
				<view class="grid-9-item-four" @click="clickItem(item.action)">
					<image class="grid-9-image-four" :src="item.image"></image>
					<text class="grid-9-text-four">{{item.title}}</text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tem-one4four",
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
	.container-four {
		display: flex;
		flex-direction: column;
		height: 710upx;
	}
	
	/* 头部 */
	.header-four {
		display: flex;
		flex-direction: row;
		width: 750upx;
		height: 70upx;
		align-content: center;
		justify-content: center;
		align-items: center;
		color: #1C1C1C;
		background-color: #FFF;
		border-bottom: 1upx solid;
		border-color: #eee;
	}
	
	.header-four image {
		margin-right: 12upx;
		width: 30upx;
		height: 30upx;
	}
	
	.header-four text {
		font-size: 26upx;
	}
	
	/* 内部 */
	.content-four {
		display: flex;
		width: 750upx;
		height: 640upx;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.main-four {
		width: 500upx;
		height: 320upx;
	}
	
	/* 九宫格 */
	.grid-9-item-four {
		width: 250upx;
		height: 320upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-bottom: 2upx solid;
		border-color: #eee;
		box-sizing: border-box;
	}
	
	.grid-9-image-four {
		width: 250upx;
		height: 250upx;
	}

	.grid-9-text-four {
		width: 250upx;
		line-height: 70upx;
		height: 70upx;
		text-align: center;
		font-size: 24upx;
		background-color: #FFFFFF;
	}
</style>

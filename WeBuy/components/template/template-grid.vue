<template>
	<view>
		<view class="header-grid">
			<image :src="template.headerImg"/>
			<text>{{template.title}}</text>
		</view>
		
		<view class="grid-9">
			<view class="grid-9-item" v-for="(item,index) in template.list" :key="index" @click="clickItem(item)">
				<image class="grid-9-image" :src="item.image"></image>
				<text class="grid-9-text">
					{{item.title}}
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tem-grid",
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
			clickItem(item) {
				this.router(item.action, () => {
					
				});
			}
		}
	}
</script>

<style>
	.header-grid {
		display: flex;
		flex-direction: row;
		height: 80upx;
		align-content: center;
		justify-content: center;
		background-color: #FFF;
		border-bottom: 1upx solid;
		border-color: #eee;
	}
	
	.header-grid image {
		margin: 13upx;
		width: 54upx;
		height: 54upx;
	}
	
	.header-grid text {
		line-height: 80upx;
		font-size: 34upx;
	}
	/* 九宫格 */
	.grid-9 {
		background: #FFF;
		width: 750upx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.grid-9-item {
		width: 250upx;
		height: 360upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-bottom: 2upx solid;
		border-color: #eee;
		box-sizing: border-box;
	}
	
	.grid-9-image {
		width: 250upx;
		height: 300upx;
	}

	.grid-9-text {
		width: 250upx;
		line-height: 60upx;
		height: 60upx;
		text-align: center;
		font-size: 30upx;
		color: crimson;
	}
</style>

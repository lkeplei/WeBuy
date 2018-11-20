<template>
	<view class="container-page">
		<view class="header-page">
			<image :src="template.headerImg"/>
			<text>{{template.title}}</text>
		</view>
		
		<view class="page-list">
			<view class="page-list-item" v-for="(item,index) in template.list" :key="index" @click="clickItem(item)">
				<image class="page-list-image" :src="item.image"></image>
				<text class="page-list-text">
					{{item.title}}
				</text>
			</view>
		</view>
		<load-more v-if="template.haveMore" :loadingType="loadingType" :contentText="contentText"></load-more>
	</view>
</template>

<script>
	import loadMore from '../../components/load-more.vue'
	
	export default {
		name: "tem-page",
		components: {
			loadMore
		},
		props: {
			template: { 
				type: Object,
				required: true 
			}
		},
		data() {
			return {
				list: [],
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				}
			};
		},
		onLoad() {
			this.list = this.template.list;
		},
		onReachBottom() {
			if (this.loadingType != 0 || !this.template.haveMore) {
				return;
			}
			this.loadingType = 1;
			for (let i = 0; i < 4; i++) {
				this.list.push(this.list[0]);
			}
			setTimeout(() => {
				if (this.list.length >= 18) {
					this.loadingType = 2;
					return;
				}
				this.loadingType = 0;
			}, 800);
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
	.container-page {
		display: flex;
		flex-direction: column;
	}
	
	/* 头部 */
	.header-page {
		display: flex;
		flex-direction: row;
		width: 750upx;
		height: 80upx;
		align-content: center;
		justify-content: center;
		background-color: #FFF;
		border-bottom: 1upx solid;
		border-color: #eee;
	}
	
	.header-page image {
		margin: 13upx;
		width: 54upx;
		height: 54upx;
	}
	
	.header-page text {
		line-height: 80upx;
		font-size: 34upx;
	}
	
	/* 内容列表 */
	.page-list {
		background: #FFF;
		width: 750upx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.page-list-item {
		width: 375upx;
		height: 420upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-bottom: 2upx solid;
		border-color: #eee;
		box-sizing: border-box;
	}
		
	.page-list-image {
		width: 375upx;
		height: 360upx;
	}
	
	.page-list-text {
		width: 375upx;
		line-height: 60upx;
		height: 60upx;
		text-align: center;
		font-size: 30upx;
		color: crimson;
	}
</style>

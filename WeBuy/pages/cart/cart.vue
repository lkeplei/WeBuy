<template>
	<view class="page">
		<image src=../../static/cart/cartIcon.png mode=""></image>
		<text>
			You have a free gift to receive.
		</text>
		<button type="primary">
			Get Now
		</button>
		<text>
			You May Also Like
		</text>
		
		<view class="news-grid-9">
			<view class="news-grid-9-item" v-for="(item,index) in list" :key="index" @click="goProDetail(item)">
				<image class="news-grid-9-image" src="../../static/cart/cartGrid.jpg"></image>
				<text class="news-grid-9-text">
					$ 16.99
				</text>
				<view class="news-grid-heart" @click.stop="clickHeart(item)">
					<image src="../../static/cart/cartDislike.png"></image>
					<text>840</text>
				</view>
			</view>
		</view>
		<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
	</view>
</template>

<script>
	import loadMore from '../../components/load-more.vue'
	
	export default {
		components: {
			loadMore
		},
		data() {
			return {
				list: [
					{},{},{},{},{},{}
				],
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				}
			};
		},
		onLoad() {
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					console.log(res);
				},
				fail: () => {},
				complete: () => {}
			});
		},
		onPullDownRefresh() {
			uni.showToast({
				title: "需要下拉刷新",
				complete: (res) => {
					uni.stopPullDownRefresh();
				}
			});
		},
		onReachBottom() {
			if (this.loadingType != 0) {
				return;
			}
			this.loadingType = 1;
			for (let i = 0; i < 6; i++) {
				this.list.push({});
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
			clickHeart(item) {
				uni.showToast({
					title: "点击了喜欢功能"
				});
			},
			goProDetail(item) {
				uni.navigateTo({
					url: '../product/pro-detail'
				});
			}
		}
	}
</script>

<style>
	.page {
        padding-top: 10upx;
		
		display: flex;
		flex-direction: column;
		align-items: center;
    }

    page {
        background: #FFFFFF;
    }
	
	/* 九宫格 */
	.news-grid-9 {
		background: #FFF;
		width: 750upx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-top: 20upx;
	}

	.news-grid-9-item {
		width: 250upx;
		height: 360upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-bottom: 2upx solid;
		border-color: #eee;
		box-sizing: border-box;
		margin-top: 30upx;
	}
	
	.news-grid-9-image {
		width: 180upx;
		height: 260upx;
	}

	.news-grid-9-text {
		width: 250upx;
		line-height: 4upx;
		height: 40upx;
		text-align: center;
		font-size: 30upx;
		color: crimson;
	}
	
	.news-grid-heart {
		display: flex;
		flex-direction: row;
	}
	
	.news-grid-heart image {
		width: 40upx;
		height: 40upx;
		margin-right: 12upx;
	}
	
	.news-grid-heart text {
		line-height: 40upx;
		font-size: 28upx;
		color: #949494;
	}
</style>

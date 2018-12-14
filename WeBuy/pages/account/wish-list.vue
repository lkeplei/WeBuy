<template>
	<view class="page">
		<view class="pro-list">
			<block v-for="(product, index) in proList" :key="index">
				<view class="product" @tap="choosePro(product.proId)">
					<view class="pro-img">
						<image :src="product.image"></image>
					</view>
					<view class="pro-desc">
						<view>
							<text class="pro-name">{{product.name}}</text>
							<view class="pro-price">
								<text>{{product.price}}</text>
								<text class="original-price">{{product.originalPrice}}</text>
							</view>
						</view>
						<view class="pro-more" @tap="findMore(product)">
							<text>{{textMore}}</text>
						</view>
					</view>
				</view>
			</block>
		</view>
		<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
	</view>
</template>

<script>
	import loadMore from '../../components/load-more.vue'
	
	export default {
		components: {
			'load-more': loadMore
		},
		data() {
			return {
				textMore: this.local('historyFindMore'),
				page: 0,
				loadingType: 0,
				contentText: {
					contentdown: this.local('loadingDown'),
					contentrefresh: this.local('loadingFresh'),
					contentnomore: this.local('loadingNomore')
				},
				
				proList: [
					{
						name: '我只是一我只是一个小饰品啊个小饰品啊',
						proId: 123,
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						originalPrice: '150',
						price: '$12.12'
					},
					{
						name: '我只是一个小饰品啊',
						proId: 123,
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						originalPrice: '150',
						price: '$12.12'
					},
					{
						name: '我只是一个小饰品啊我只是一个小饰品啊我只是一个小饰品啊我只是一个小饰品啊我只是一个小饰品啊我只是一个小饰品啊',
						proId: 123,
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						originalPrice: '150',
						price: '$12.12'
					},
					{
						name: '我只是一个小饰品啊我只是一个小饰品啊我只是一个小饰品啊',
						proId: 123,
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						originalPrice: '150',
						price: '$12.12'
					},
					{
						name: '我只是一个小饰品啊',
						proId: 123,
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						originalPrice: '150',
						price: '$12.12'
					},
					{
						name: '我只是一个小饰品啊我只是一个小饰品啊',
						proId: 123,
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						originalPrice: '150',
						price: '$12.12'
					},
					{
						name: '我只是一个小我只是一个小饰品啊饰品啊',
						proId: 123,
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						originalPrice: '150',
						price: '$12.12'
					}
				]
			};
		},
		onLoad() {
			// 设置导航栏标题
			uni.setNavigationBarTitle({
				title: this.local('navTitleWish')
			});
			
			this.loadData();
		},
		onReachBottom() {
			if (this.loadingType != 0) {
				return;
			}
			this.loadingType = 1;
			
			if (searchList.haveMore) {
				this.page++;
				this.loadData();
			} else {
				this.loadingType = 2;
			}
		},
		methods: {
			loadData: function () {
				this.post('user/wishList', {page: this.page}).then(res => {
					// this.searchList = res.list;
					this.loadingType = 0;
				});
			},
			findMore: function (product) {
				uni.navigateTo({
					url: './find-more?proId=' + product.proId
				});
			},
			choosePro: function (proId) {
				uni.navigateTo({
					url: '../product/pro-detail?proId=' + proId
				});
			}
		}
	}
</script>

<style scoped>
	.pro-list {
		display: flex;
		flex-direction: column;
	}
	
	.product {
		display: flex;
		flex-direction: row;
		height: 250upx;
		background-color: #FFFFFF;
		border-bottom: #EEEEEE 1upx solid;
	}
	
	.pro-img {
		width: 250upx;
		height: 250upx;
	}
	
	.pro-img image {
		width: 200upx;
		height: 200upx;
		margin: 25upx 20upx 25upx 30upx;
	}
	
	.pro-desc {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 500upx;
		height: 200upx;
		font-size: 24upx;
		padding: 25upx 0;
	}
	
	.pro-name {
		line-height: 32upx;
		color: #686868;
		margin-bottom: 10upx;
	}
	
	.pro-price {
		display: flex;
		flex-direction: row;
		color: #DC143C;
		font-size: 32upx;
		height: 40upx;
		line-height: 40upx;
		margin-bottom: 25upx;
	}
	
	.pro-price text {
		margin-right: 20upx;
		color: #D24C30;
	}
	
	.original-price {
		text-decoration: line-through;
		color: #686868;
	}
	
	.pro-more text {
		width: 120upx;
		padding: 10upx 20upx;
		border: #EEEEEE 1upx solid;
	}
</style>

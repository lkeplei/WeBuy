<template>
	<view>
		<view class="product" @tap="choosePro(pageData.product.proId)">
			<view class="pro-img">
				<image :src="pageData.product.image"></image>
			</view>
			<view class="pro-desc">
				<text class="pro-name">{{pageData.product.name}}</text>
				<view class="pro-price">
					<text>{{pageData.product.price}}</text>
					<text class="original-price">{{pageData.product.originalPrice}}</text>
				</view>
			</view>
		</view>
		
		<view class="pro-list">
			<block v-for="(product, index) in pageData.proList" :key="index">
				<view class="list-product" @tap="choosePro(pageData.product.proId)">
					<view class="list-pro-header">
						<text>{{product.discount}}</text>
					</view>
					<image class="list-pro-image" :src="product.image"></image>
					<view class="list-pro-desc">
						<view class="pro-price">
							<text>{{product.price}}</text>
							<text class="original-price">{{product.originalPrice}}</text>
						</view>
						<text class="list-pro-name">{{product.name}}</text>
					</view>
					<view class="list-pro-likenum"  @click.stop="clickHeart(product)">
						<image src="../../static/cart/cartDislike.png"></image>
						<text>{{product.likenum}}</text>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageData: {
					product: {
						name: '我只是一我只是一个小饰品啊个小饰品啊',
						proId: 123,
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						originalPrice: '150',
						price: '$12.12'
					},
					proList: [
						{
							name: '我只是一我只是一个小饰品啊个小饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							originalPrice: '150',
							price: '$12.12',
							discount: '-30%',
							likenum: 800
						},
						{
							name: '我只是一我只是一个小饰品啊个小饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							originalPrice: '150',
							price: '$12.12',
							discount: '-30%',
							likenum: 800
						},
						{
							name: '我只是一我只是一个小饰品啊个小饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							originalPrice: '150',
							price: '$12.12',
							discount: '-30%',
							likenum: 800
						},
						{
							name: '我只是一我只是一个小饰品啊个小饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							originalPrice: '150',
							price: '$12.12',
							discount: '-30%',
							likenum: 800
						},
						{
							name: '我只是一我只是一个小饰品啊个小饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							originalPrice: '150',
							price: '$12.12',
							discount: '-30%',
							likenum: 800
						},
						{
							name: '我只是一我只是一个小饰品啊个小饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							originalPrice: '150',
							price: '$12.12',
							discount: '-30%',
							likenum: 800
						},
						{
							name: '我只是一我只是一个小饰品啊个小饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							originalPrice: '150',
							price: '$12.12',
							discount: '-30%',
							likenum: 800
						},
						{
							name: '我只是一我只是一个小饰品啊个小饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							originalPrice: '150',
							price: '$12.12',
							discount: '-30%',
							likenum: 800
						},
						{
							name: '我只是一我只是一个小饰品啊个小饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							originalPrice: '150',
							price: '$12.12',
							discount: '-30%',
							likenum: 800
						},
						{
							name: '我只是一我只是一个小饰品啊个小饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							originalPrice: '150',
							price: '$12.12',
							discount: '-30%',
							likenum: 800
						},
						{
							name: '我只是一我只是一个小饰品啊个小饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							originalPrice: '150',
							price: '$12.12',
							discount: '-30%',
							likenum: 800
						},
						{
							name: '我只是一我只是一个小饰品啊个小饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							originalPrice: '150',
							price: '$12.12',
							discount: '-30%',
							likenum: 800
						},
						{
							name: '我只是一我只是一个小饰品啊个小饰品啊',
							proId: 123,
							image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
							originalPrice: '150',
							price: '$12.12',
							discount: '-30%',
							likenum: 800
						}
					]
				}
			};
		},
		onLoad() {
			// 设置导航栏标题
			uni.setNavigationBarTitle({
				title: this.local('navTitleFindMore')
			});
			
			this.post('pro/findMore', {proId: proId}).then(res => {
				// this.pageData = res;
			});
		},
		methods: {
			choosePro: function (proId) {
				uni.navigateTo({
					url: '../product/pro-detail?proId=' + proId
				});
			},
			clickHeart: function (product) {
				this.post('product/like', {proId: product.proId}).then(res => {
					// product.likenum = res.likenum;
				});
				
				product.likenum++;
			}
		}
	}
</script>

<style scoped>
	.product {
		display: flex;
		flex-direction: row;
		height: 200upx;
		background-color: #FFFFFF;
		border-bottom: #EEEEEE 1upx solid;
	}
	
	.pro-img {
		width: 200upx;
		height: 200upx;
	}
	
	.pro-img image {
		width: 160upx;
		height: 160upx;
		margin: 20upx 20upx 20upx 30upx;
	}
	
	.pro-desc {
		display: flex;
		flex-direction: column;
		width: 550upx;
		height: 160upx;
		font-size: 24upx;
		padding: 20upx 0;
	}
	
	.pro-name {
		line-height: 32upx;
		color: #686868;
		margin-bottom: 10upx;
	}
	
	.pro-price {
		display: flex;
		flex-direction: row;
		color: #D24C30;
		font-size: 32upx;
		height: 40upx;
		line-height: 40upx;
		margin-bottom: 25upx;
	}
	
	.original-price {
		margin-left: 10upx;
		text-decoration: line-through;
		color: #686868;
		font-size: 24upx;
	}
	
	/* pro-list */
	.pro-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-top: 30upx;
	}
	
	.list-product {
		display: flex;
		flex-direction: column;
		height: 640upx;
		width: 360upx;
		margin: 10upx 0 0 10upx;
		background-color: #FFFFFF;
	}
	
	.list-pro-header {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		height: 80upx;
	}
	
	.list-pro-header text {
		width: 160upx;
		background-color: #D24C30;
		text-align: center;
		color: #FFFFFF;
		font-size: 26upx;
		line-height: 60upx;
	}
	
	.list-pro-image {
		width: 360upx;
		height: 360upx;
		margin-bottom: 10upx;
	}
	
	.list-pro-name {
		height: 80upx;
		font-size: 24upx;
		line-height: 30upx;
	}
	
	.list-pro-likenum {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;	
		align-items: center;
		height: 80upx;
	}
	
	.list-pro-likenum image {
		width: 32upx;
		height: 32upx;
		margin-right: 20upx;
	}
	
	.list-pro-likenum text {
		font-size: 24upx;
		color: #686868;
		margin-right: 10upx;
	}
</style>

<template>
	<view>
		<scroll-view class="scrollList" scroll-y :style="{height:winHeight - 44 + 'px;'}">
			<swiper autoplay="true" indicator-dots="true" circular="true" class="swiper-banners">
				<swiper-item v-for="(item, key) in product.banners" :key="key">
					<image :src="item.image" class="swiper-banners" />
				</swiper-item>
			</swiper>
			
			<view class="pro-info">
				<view class="pro-price">
					<text class="price">{{product.price}}</text>
					<text class="original">{{product.originalPrice}}</text>
				</view>
				<view class="pro-like" @tap="wishPro">
					<image :src="likeImg"></image>
					<text>{{product.likenum}}</text>
				</view>
			</view>
			
			<view class="pro-name">
				<text>{{product.name}}</text>
			</view>
			
			<block v-for="(item, index) in product.funcList" :key="index">
				<view class="wb-cell" hover-class="wb-cell-hover" @click="clickFunc(item)">
					<view class="cell wb-list-cell-navigate wb-navigate-right wb-right">
						<text>{{item.title}}</text>
						<text>{{item.value}}</text>
					</view>
				</view>
			</block>
			
			<view class="">
				<text>detail</text>
			</view>
			
			<view class="review" @tap="goToAppraiseList">
				<view class="re-header">
					<text>{{product.review.title}}</text>
					<text>{{product.review.desc}}</text>
				</view>
				
				<view class="re-center">
					<view class="user">
						<image class="avatar" :src="product.review.info.avatar"></image>
						<text class="name">{{product.review.info.name}}</text>
						
						<block v-for="n in product.review.info.point">
							<image class="point" src="../../static/star-1.png"></image>
						</block>
					</view>
					<text class="message">{{product.review.info.message}}</text>
					<text class="desc">{{product.review.info.desc}}</text>
				</view>
				
				<view class="re-bottom">
					<text>{{viewMoreText}}</text>
				</view>
			</view>
		</scroll-view>
		
		<view class="bottom">
			<view class="bottom-cart" @tap="goToCart">
				<image src="../../static/cart.png"></image>
				<text>{{cartText}}</text>
			</view>
			<view class="bottom-add" @tap="addToCart">
				<text>{{cartAdd}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				proId: -1,
				winHeight: uni.getSystemInfoSync().windowHeight,
				
				cartText: this.local('productCart'),
				cartAdd: this.local('productAdd'),
				viewMoreText: this.local('productViewMore'),
				
				product: {
					banners: [
						{image: 'http://dummyimage.com/100x60'},
						{image: 'http://dummyimage.com/220x160'},
						{image: 'http://dummyimage.com/320x260'},
						{image: 'http://dummyimage.com/420x360'}
					],
					name: '这是一个商品名称',
					originalPrice: '32.99',
					price: '$14.99',
					likenum: 123,
					isWish: true,
					funcList: [
						{title: '货运说明', value:'abc', action: 'wb://product/buyyer-reading'},
						{title: '货运说明', action: 'wb://product/buyyer-reading'},
						{title: '货运说明', action: 'wb://product/buyyer-reading'}
					],
					details: [
						{title: 'item', value: 'lkajsdlf'},
						{title: 'item', value: 'lkajsdlf'},
						{title: 'item', value: 'lkajsdlf'},
						{title: 'item', value: 'lkajsdlf'},
						{title: 'item', value: 'lkajsdlf'},
						{title: 'item', value: 'lkajsdlf'}
					],
					review: {
						title: 'Reviews(4)',
						desc: '综合评分 4.9',
						info: { 
							avatar: 'http://dummyimage.com/40X40',
							name: 'a****t',
							message: '我觉得这个东东不错', 
							desc: 'color: green  size: xxl',
							point: 4
						}
					}
				}
			};
		},
		onLoad(prop) {
			// 设置导航栏标题
			uni.setNavigationBarTitle({
				title: this.local('navTitleProductDetail')
			});
			
			this.proId = prop.proId;
			
			this.post('product/detail', {proId: this.proId}).then(res => {
				// this.orderList = res.list;
			});
		},
		computed: {
			likeImg: function () {
				return this.product.isWish ? '../../static/cart/cartLike.png' : '../../static/cart/cartDislike.png';
			}
		},
		methods: {
			goToCart: function () {
				this.router('wb://cart/cart', () => {
					
				});
			},
			addToCart: function () {
				uni.showToast({
					title: 'add'
				});
			},
			goToAppraiseList: function () {
				uni.navigateTo({
					url: './appraise-list?proId=' + this.proId
				});
			},
			wishPro: function () {
				uni.showToast({
					title: 'like'
				});
			},
			clickFunc: function (func) {
				this.router(func.action, () => {
					
				});
				
				uni.showToast({
					title: func.action
				});
			}
		}
	}
</script>

<style scoped>
	.swiper-banners {
		width: 750upx;
		height: 600upx;
	}
	
	/* pro info */
	.pro-info {
		display: flex;
		flex-direction: row;
		height: 100upx;
		justify-content: space-between;
		align-items: center;
		padding: 0 30upx;
		background-color: #FFFFFF;
	}
	
	.pro-price {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		height: 80upx;
	}
	
	.pro-price .price {
		color: #D24C30;
		font-size: 40upx;
	}
	
	.pro-price .original {
		color: #666666;
		font-size: 28upx;
		margin-left: 10upx;
		text-decoration: line-through;
	}
	
	.pro-like {
		height: 100upx;
		align-items: center;
	}
	
	.pro-like image {
		width: 40upx;
		height: 40upx;
		margin-top: 10upx;
	}
	
	.pro-like text {
		color: #666666;
		font-size: 22upx;
		line-height: 30upx;
	}
	
	.pro-name {
		color: #333333;
		font-size: 30upx;
		padding: 10upx 30upx;
		background-color: #FFFFFF;
		margin-bottom: 20upx;
	}
	
	.cell {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	/* review */
	.review {
		margin-top: 10upx;
		background-color: #FFFFFF;
	}
	
	.re-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 80upx;
		border-bottom: #EEEEEE 1upx solid;
	}
	
	.re-header text {
		line-height: 80upx;
		font-size: 32upx;
		color: #999999;
		margin: 0 30upx;
	}
	
	.re-center .user {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 80upx;
		padding-left: 30upx;
	}
	
	.user .avatar {
		width: 50upx;
		height: 50upx;
	}
	
	.user .name {
		font-size: 24upx;
		color: #666666;
		margin: 0 10upx;
	}
	
	.user .point {
		width: 20upx;
		height: 20upx;
	}
	
	.re-center .message {
		font-size: 30upx;
		color: #666666;
		padding: 0 30upx;
	}
	
	.re-center .desc {
		font-size: 26upx;
		color: #999999;
		padding: 0 30upx;
	}
	
	.re-bottom {
		align-items: center;
		font-size: 36upx;
		color: #333333;
		height: 80upx;
		line-height: 80upx;
	}
	
	/* bottom */
	.bottom {
		display: flex;
		flex-direction: row;
		height: 44px;
		border: #EEEEEE 1upx solid;
	}
	
	.bottom-cart {
		align-items: center;
		width: 200upx;
		height: 100%;
	}
	
	.bottom-cart image {
		width: 40upx;
		height: 32upx;
		margin: 10upx 0 4upx 0;
	}
	
	.bottom-cart text {
		font-size: 20upx;
	}
	
	.bottom-add {
		align-items: center;
		color: #FFFFFF;
		width: 550upx;
		height: 100%;
		background-color: #D24C30;
	}
	
	.bottom-add text {
		line-height: 44px;
		font-size: 40upx;
	}
</style>

<template>
	<view>
		<scroll-view class="scrollList" scroll-y :style="{height:winHeight - 44 + 'px;'}">
			<swiper autoplay="true" indicator-dots="true" circular="true" class="swiper-banners">
				<swiper-item v-for="(item, key) in product.banners" :key="key">
					<image :src="item.image" class="swiper-banners" />
				</swiper-item>
			</swiper>
			
			<view class="">
				<view class="">
					<text>{{product.price}}</text>
					<text>{{product.originalPrice}}</text>
				</view>
				<view class="">
					<image src="../../static/cart/cartDislike.png"></image>
					<text>{{cartText}}</text>
				</view>
			</view>
			
			<view class="">
				<text>{{product.name}}</text>
			</view>
			
			<block v-for="(item, index) in product.funcList" :key="index">
				<view class="">
					
				</view>
			</block>
			
			<view class="">
				<text>detail</text>
			</view>
			
			<view class="review">
				<view class="re-header">
					<text>{{product.review.title}}</text>
					<text>{{product.review.desc}}</text>
				</view>
				
				<view class="re-center">
					<view class="">
						<image :src="product.review.info.avatar"></image>
						<text>{{product.review.info.name}}</text>
						
						<block v-for="n in product.review.info.point">
							<image src="../../static/star-1.png"></image>
						</block>
					</view>
					<text>{{product.review.info.message}}</text>
					<text>{{product.review.info.desc}}</text>
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
					isWish: false,
					funcList: [
						{title: '货运说明', action: 'wb://product/buyyer-reading'},
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
		methods: {
			goToCart: function () {
				this.router('wb://cart/cart', () => {
					
				});
			},
			addToCart: function () {
				uni.showToast({
					title: 'add'
				})
			}
		}
	}
</script>

<style scoped>
	.swiper-banners {
		width: 750upx;
		height: 600upx;
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
	}
	
	.re-center {

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
